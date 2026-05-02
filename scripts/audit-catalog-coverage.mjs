#!/usr/bin/env node
// Maps each catalog entry to whether an existing deep guide already covers the topic.
// Groups duplicates within the catalog itself.
// Output: reports/catalog-coverage-YYYY-MM-DD.md

import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises'
import { join, dirname, relative } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)))
const CONTENT_DIR = join(ROOT, 'content', 'ru')
const CATALOG_DIR = join(ROOT, 'catalog')
const REPORTS = join(ROOT, 'reports')

// --- Utilities ---

const STOPWORDS = new Set([
  'и','в','на','с','у','о','для','по','от','до','как','что','это','быть','или','не','ли','же','то','из','за','при','под','над','между','через','без','тот','та','те','вы','мы','они','он','она','оно','его','её','их','в','ру','pt','pt-','a','the','of','for','to','in','on','is','и','еще','ещё','уже','там','где','тут','какие','какой','какая','какое','когда','куда','откуда','сколько','где'
])

function tokens(s) {
  if (!s) return new Set()
  return new Set(
    String(s).toLowerCase()
      .replace(/[^\p{L}\p{N}\s]+/gu, ' ')
      .split(/\s+/)
      .filter(t => t.length >= 3 && !STOPWORDS.has(t))
  )
}

function jaccard(a, b) {
  if (!a.size && !b.size) return 0
  let inter = 0
  for (const t of a) if (b.has(t)) inter++
  const uni = a.size + b.size - inter
  return uni === 0 ? 0 : inter / uni
}

// --- Load data ---

async function walk(dir) {
  const out = []
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name)
    if (entry.isDirectory()) out.push(...await walk(p))
    else if (entry.isFile() && entry.name.endsWith('.mjs') && !entry.name.startsWith('_')) out.push(p)
  }
  return out
}

async function loadGuides() {
  const files = await walk(CONTENT_DIR)
  const out = []
  for (const f of files) {
    const mod = await import(pathToFileURL(f).href)
    const g = mod.default
    out.push({
      id: g.id,
      categoryId: g.categoryId,
      title: g.title,
      tags: g.tags ?? [],
      tldr: g.tldr ?? '',
      file: relative(ROOT, f)
    })
  }
  return out
}

async function loadCatalog() {
  const out = []
  for (const f of await readdir(CATALOG_DIR)) {
    if (!f.endsWith('.ru.json')) continue
    const arr = JSON.parse(await readFile(join(CATALOG_DIR, f), 'utf8'))
    for (const e of arr) out.push({ ...e, _source: f })
  }
  return out
}

// --- Matching ---

function catalogSignature(e) {
  return tokens(`${e.title} ${(e.tags ?? []).join(' ')}`)
}

function guideSignature(g) {
  return tokens(`${g.title} ${g.id} ${(g.tags ?? []).join(' ')}`)
}

function bestGuideMatch(entry, guides) {
  const sig = catalogSignature(entry)
  let best = { guide: null, score: 0 }
  for (const g of guides) {
    if (g.categoryId !== entry.categoryId) continue
    const s = jaccard(sig, guideSignature(g))
    if (s > best.score) best = { guide: g, score: s }
  }
  return best
}

function clusterCatalog(catalog) {
  // Cluster catalog entries by category + jaccard(tokens) > 0.45
  const clusters = []
  for (const e of catalog) {
    const sig = catalogSignature(e)
    let joined = false
    for (const c of clusters) {
      if (c.categoryId !== e.categoryId) continue
      // check against centroid (first member)
      const cSig = catalogSignature(c.members[0])
      if (jaccard(sig, cSig) >= 0.5) {
        c.members.push(e)
        joined = true
        break
      }
    }
    if (!joined) clusters.push({ categoryId: e.categoryId, members: [e] })
  }
  return clusters
}

// --- Main ---

async function main() {
  const [guides, catalog] = await Promise.all([loadGuides(), loadCatalog()])
  const today = new Date().toISOString().slice(0, 10)
  await mkdir(REPORTS, { recursive: true })

  const clusters = clusterCatalog(catalog)
  clusters.sort((a, b) => b.members.length - a.members.length)

  const rows = clusters.map(c => {
    const primary = c.members[0]
    const match = bestGuideMatch(primary, guides)
    const isCovered = match.score >= 0.35
    return { cluster: c, match, isCovered }
  })

  const covered = rows.filter(r => r.isCovered)
  const uncovered = rows.filter(r => !r.isCovered)

  const catToCount = {}
  for (const r of uncovered) {
    catToCount[r.cluster.categoryId] = (catToCount[r.cluster.categoryId] ?? 0) + 1
  }

  const entriesCoveredCount = covered.reduce((s, r) => s + r.cluster.members.length, 0)
  const entriesUncoveredCount = uncovered.reduce((s, r) => s + r.cluster.members.length, 0)

  const lines = []
  lines.push(`# Catalog coverage audit — ${today}`)
  lines.push(``)
  lines.push(`## Summary`)
  lines.push(`- Deep guides: **${guides.length}**`)
  lines.push(`- Catalog entries: **${catalog.length}** (grouped into **${clusters.length}** topic-clusters)`)
  lines.push(`- Clusters already covered by a deep guide (score ≥ 0.35): **${covered.length}** → ${entriesCoveredCount} catalog entries can be dropped once we verify`)
  lines.push(`- **Clusters needing a new deep guide**: **${uncovered.length}** → ${entriesUncoveredCount} catalog entries`)
  lines.push(``)
  lines.push(`## Uncovered topic clusters — by category`)
  const categoriesSorted = Object.entries(catToCount).sort((a, b) => b[1] - a[1])
  for (const [cat, n] of categoriesSorted) lines.push(`- **${cat}**: ${n} clusters`)
  lines.push(``)

  lines.push(`## Uncovered topics (needs new deep guide)`)
  lines.push(``)
  for (const r of uncovered) {
    const titles = r.cluster.members.map(m => m.title)
    const sources = [...new Set(r.cluster.members.map(m => m._source))].join(', ')
    const urls = r.cluster.members.map(m => m.telegramUrl).slice(0, 5)
    lines.push(`### ${r.cluster.categoryId} — ${titles[0]}`)
    lines.push(`- Catalog entries in cluster: ${r.cluster.members.length} (sources: ${sources})`)
    lines.push(`- Member titles: ${titles.slice(0, 8).map(t => `"${t}"`).join('; ')}${titles.length > 8 ? ` (+${titles.length - 8} more)` : ''}`)
    lines.push(`- Sample urls:`)
    for (const u of urls) lines.push(`  - ${u}`)
    if (r.match.guide) lines.push(`- Closest existing guide (below threshold): **${r.match.guide.id}** (score ${r.match.score.toFixed(2)})`)
    lines.push(`- Suggested ids to kill: ${r.cluster.members.map(m => m.id).slice(0, 8).join(', ')}${r.cluster.members.length > 8 ? '...' : ''}`)
    lines.push(``)
  }

  lines.push(`## Covered topics (catalog redundant — deep guide already exists)`)
  lines.push(``)
  for (const r of covered) {
    const titles = r.cluster.members.map(m => m.title)
    lines.push(`- **${r.match.guide.id}** covers: ${titles.slice(0, 4).map(t => `"${t}"`).join('; ')}${titles.length > 4 ? ` (+${titles.length - 4})` : ''} — can drop ${r.cluster.members.map(m => m.id).slice(0, 4).join(', ')}${r.cluster.members.length > 4 ? '...' : ''}`)
  }

  const out = join(REPORTS, `catalog-coverage-${today}.md`)
  await writeFile(out, lines.join('\n') + '\n')
  console.log(`Wrote ${relative(ROOT, out)}`)
  console.log(`  total clusters:   ${clusters.length}`)
  console.log(`  covered:          ${covered.length} (${entriesCoveredCount} entries)`)
  console.log(`  uncovered:        ${uncovered.length} (${entriesUncoveredCount} entries)`)
  console.log(`  top uncovered cats:`)
  for (const [cat, n] of categoriesSorted.slice(0, 8)) console.log(`    ${cat}: ${n}`)
}

main().catch(err => { console.error(err); process.exit(1) })
