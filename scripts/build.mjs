#!/usr/bin/env node
// Builds dist/{guides,categories,catalog,community,manifest}.{lang}.json from content/{lang}/*.mjs.
// Multi-language by default (LANGS=ru,pt,en). Skips languages with no content directory.

import { readdir, readFile, writeFile, mkdir, stat } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { join, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)))
const CONTENT_ROOT = join(ROOT, 'content')
const CATALOG_DIR = join(ROOT, 'catalog')
const DIST = join(ROOT, 'dist')
const CONTENT_VERSION = Number(process.env.CONTENT_VERSION ?? Date.now())
const LANGS = (process.env.LANGS ?? 'ru').split(',').map(s => s.trim()).filter(Boolean)

async function walk(dir) {
  const out = []
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name)
    if (entry.isDirectory()) out.push(...await walk(p))
    else if (entry.isFile() && entry.name.endsWith('.mjs') && !entry.name.startsWith('_')) out.push(p)
  }
  return out
}

async function loadGuides(lang) {
  const dir = join(CONTENT_ROOT, lang)
  if (!existsSync(dir)) return null
  const files = await walk(dir)
  const guides = []
  for (const f of files) {
    const mod = await import(pathToFileURL(f).href)
    if (!mod.default) throw new Error(`No default export in ${f}`)
    guides.push(mod.default)
  }
  guides.sort((a, b) => a.id.localeCompare(b.id))
  return guides
}

async function loadCategories(lang) {
  const mod = await import(pathToFileURL(join(CONTENT_ROOT, '_categories.mjs')).href)
  const list = mod.default
  // Per-language projection: titles[lang] / subtitles[lang] with fallback to root fields.
  // `tier` defaults to 'free' if missing — newly added categories stay accessible until
  // explicitly flipped to 'premium' in `_categories.mjs`.
  return list.map(c => ({
    id: c.id,
    order: c.order,
    title: (c.titles && c.titles[lang]) ?? c.title,
    subtitle: (c.subtitles && c.subtitles[lang]) ?? c.subtitle,
    sfSymbol: c.sfSymbol,
    hasVariants: Boolean(c.hasVariants),
    parentId: c.parentId,
    tier: c.tier === 'premium' ? 'premium' : 'free'
  }))
}

/// Inject `premium: true` onto each guide whose category is premium-tier, unless the
/// guide itself sets `premium: false` to opt out (e.g. a marketing-friendly orientation
/// guide under an otherwise-premium category). Returns the same array, mutated in place.
function annotateGuidesWithPremium(guides, categories) {
  const premiumCats = new Set(categories.filter(c => c.tier === 'premium').map(c => c.id))
  for (const g of guides) {
    if (g.premium === false) continue
    g.premium = g.premium === true || premiumCats.has(g.categoryId)
  }
  return guides
}

async function loadCatalog(lang) {
  const out = []
  let files = []
  try {
    files = (await readdir(CATALOG_DIR)).filter(f => f.endsWith(`.${lang}.json`))
  } catch (e) {
    if (e.code === 'ENOENT') return []
    throw e
  }
  for (const f of files) {
    const raw = await readFile(join(CATALOG_DIR, f), 'utf8')
    const arr = JSON.parse(raw)
    if (!Array.isArray(arr)) throw new Error(`${f} is not a JSON array`)
    out.push(...arr)
  }
  const seen = new Set()
  return out.filter(e => (seen.has(e.id) ? false : (seen.add(e.id), true)))
}

async function loadCommunity(lang) {
  const f = join(CATALOG_DIR, `community-${lang}.mjs`)
  try {
    const mod = await import(pathToFileURL(f).href)
    return mod.default ?? null
  } catch (e) {
    if (e.code === 'ERR_MODULE_NOT_FOUND' || e.code === 'ENOENT') return null
    throw e
  }
}

function sha256(s) {
  return createHash('sha256').update(s).digest('hex')
}

async function buildLanguage(lang) {
  const guides = await loadGuides(lang)
  if (guides === null) return null // content/{lang}/ missing → skip

  const [categories, catalog, community] = await Promise.all([
    loadCategories(lang),
    loadCatalog(lang),
    loadCommunity(lang)
  ])

  // Validate refs
  const guideIds = new Set(guides.map(g => g.id))
  for (const entry of catalog) {
    if (entry.fullGuideId && !guideIds.has(entry.fullGuideId)) {
      console.warn(`[${lang}] CatalogEntry ${entry.id} references unknown guide: ${entry.fullGuideId}`)
      delete entry.fullGuideId
    }
  }
  const catIds = new Set(categories.map(c => c.id))
  for (const g of guides) {
    if (!catIds.has(g.categoryId)) throw new Error(`[${lang}] Guide ${g.id} uses unknown categoryId: ${g.categoryId}`)
  }
  annotateGuidesWithPremium(guides, categories)
  for (const e of catalog) {
    if (!catIds.has(e.categoryId)) throw new Error(`[${lang}] CatalogEntry ${e.id} uses unknown categoryId: ${e.categoryId}`)
  }

  const outFiles = {
    [`categories.${lang}.json`]: JSON.stringify(categories, null, 2),
    [`guides.${lang}.json`]: JSON.stringify(guides, null, 2),
    [`catalog.${lang}.json`]: JSON.stringify(catalog, null, 2)
  }
  if (community) outFiles[`community.${lang}.json`] = JSON.stringify(community, null, 2)

  const files = []
  for (const [name, content] of Object.entries(outFiles)) {
    await writeFile(join(DIST, name), content)
    // size is UTF-8 byte length (Buffer.byteLength), not JS .length — matches what iOS Data sees.
    files.push({ name, size: Buffer.byteLength(content, 'utf8'), sha256: sha256(content) })
  }

  return {
    lang,
    counts: {
      categories: categories.length,
      guides: guides.length,
      catalogEntries: catalog.length,
      communityChannels: community?.telegramChannels?.length ?? 0,
      communityFbGroups: community?.facebookGroups?.length ?? 0
    },
    files
  }
}

async function main() {
  await mkdir(DIST, { recursive: true })

  const results = []
  for (const lang of LANGS) {
    const r = await buildLanguage(lang)
    if (r) {
      results.push(r)
      console.log(`  [${r.lang}] categories=${r.counts.categories} guides=${r.counts.guides} catalog=${r.counts.catalogEntries}`)
    } else {
      console.warn(`  [${lang}] content/${lang}/ not found — skipped`)
    }
  }

  if (results.length === 0) throw new Error('No languages built — check LANGS env and content/ directory')

  // Manifest: keep backward-compat shape pointing at primary language (first in LANGS),
  // plus `languages` array for multi-language consumers.
  const primary = results[0]
  const manifest = {
    schemaVersion: 1,
    contentVersion: CONTENT_VERSION,
    language: primary.lang,
    generatedAt: new Date().toISOString(),
    counts: primary.counts,
    files: primary.files,
    languages: results.map(r => ({
      tag: r.lang,
      counts: r.counts,
      files: r.files
    }))
  }
  await writeFile(join(DIST, 'manifest.json'), JSON.stringify(manifest, null, 2))

  console.log(`Built in ${DIST}`)
  console.log(`  languages:  ${results.map(r => r.lang).join(', ')}`)
  console.log(`  version:    ${CONTENT_VERSION}`)
}

main().catch(err => { console.error(err); process.exit(1) })
