#!/usr/bin/env node
// Builds dist/{guides,categories,catalog,community,manifest}.{lang}.json from content/{lang}/*.mjs.
// Multi-language by default (LANGS=ru,pt,en). Skips languages with no content directory.

import { readdir, readFile, writeFile, mkdir, stat, copyFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { join, dirname, extname, basename } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)))
const CONTENT_ROOT = join(ROOT, 'content')
const CATALOG_DIR = join(ROOT, 'catalog')
const ASSETS_DIR = join(ROOT, 'assets')
const DIST = join(ROOT, 'dist')
const DIST_ASSETS = join(DIST, 'assets')
const CONTENT_VERSION = Number(process.env.CONTENT_VERSION ?? Date.now())
const LANGS = (process.env.LANGS ?? 'ru').split(',').map(s => s.trim()).filter(Boolean)

// Base URL where `dist/` is served from. Used to rewrite asset `src` paths in image/pdf
// blocks to absolute URLs so iOS can hydrate them directly with no extra config. Override
// via PUBLIC_BASE_URL if the deployment host ever changes.
const PUBLIC_BASE_URL = (process.env.PUBLIC_BASE_URL ?? 'https://6766626.github.io/hackportugal-content/v1').replace(/\/$/, '')

const IMAGE_EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg'])
const PDF_EXTS = new Set(['.pdf'])

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

/// Resolve an image/pdf `src` to its absolute deployed URL.
/// - Already-absolute (http://, https://): pass through unchanged.
/// - Bare filename ("aquashow-pool.jpg"): looked up under assets/<guideId>/.
/// - Pre-prefixed with subfolder ("modelo-1a/page-2.png"): treated as relative to assets/<guideId>/.
function resolveAssetSrc(src, guideId) {
  if (!src) return src
  if (/^https?:\/\//i.test(src)) return src
  const clean = src.replace(/^\/+/, '')
  return `${PUBLIC_BASE_URL}/assets/${guideId}/${clean}`
}

/// Walk a guide's blocks and rewrite image/pdf `src` to absolute URLs. Mutates in place.
/// Also records which assets are referenced so the builder can fail loudly if a guide
/// names a file that doesn't exist on disk.
function rewriteAssetPaths(guide, referencedAssets) {
  function visit(blocks) {
    if (!Array.isArray(blocks)) return
    for (const b of blocks) {
      if (!b || typeof b !== 'object') continue
      if ((b.kind === 'image' || b.kind === 'pdf') && typeof b.src === 'string') {
        if (!/^https?:\/\//i.test(b.src)) {
          referencedAssets.push({ guideId: guide.id, relPath: b.src.replace(/^\/+/, '') })
        }
        b.src = resolveAssetSrc(b.src, guide.id)
      }
      if (b.kind === 'substeps' && Array.isArray(b.items)) {
        for (const sub of b.items) visit(sub.content)
      }
    }
  }
  for (const step of guide.steps ?? []) visit(step.content)
  for (const variant of guide.variants ?? []) {
    for (const step of variant.steps ?? []) visit(step.content)
  }
}

/// Recursively copy assets/ → dist/assets/ if it exists. Returns the set of relative paths
/// that were copied so we can verify every referenced asset has a real file behind it.
async function copyAssetsTree() {
  const copied = new Set()
  if (!existsSync(ASSETS_DIR)) return copied
  async function walkAndCopy(srcDir, destDir) {
    await mkdir(destDir, { recursive: true })
    for (const entry of await readdir(srcDir, { withFileTypes: true })) {
      const s = join(srcDir, entry.name)
      const d = join(destDir, entry.name)
      if (entry.isDirectory()) {
        await walkAndCopy(s, d)
      } else if (entry.isFile()) {
        await copyFile(s, d)
        const rel = s.substring(ASSETS_DIR.length + 1)
        copied.add(rel)
      }
    }
  }
  await walkAndCopy(ASSETS_DIR, DIST_ASSETS)
  return copied
}

function validateAssetReferences(referencedAssets, copiedAssets) {
  const missing = []
  for (const ref of referencedAssets) {
    const rel = `${ref.guideId}/${ref.relPath}`
    if (!copiedAssets.has(rel)) missing.push(rel)
  }
  if (missing.length > 0) {
    throw new Error(`Asset references not found on disk under assets/:\n  - ${missing.join('\n  - ')}`)
  }
  // Soft warning for orphan assets (files on disk that nothing references). Harmless but noisy.
  // We don't enforce — guides may add references after the file lands.
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

  // Rewrite image/pdf src paths in-place to absolute deployed URLs and collect referenced
  // assets so the caller can verify every reference resolves to a real file on disk.
  const referencedAssets = []
  for (const g of guides) rewriteAssetPaths(g, referencedAssets)

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
    files,
    referencedAssets
  }
}

async function main() {
  await mkdir(DIST, { recursive: true })

  // Stage assets first so we can validate references against actual files.
  const copiedAssets = await copyAssetsTree()
  if (copiedAssets.size > 0) console.log(`  [assets] copied ${copiedAssets.size} files → dist/assets/`)

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

  // Verify every image/pdf src across all languages actually resolves to a file on disk.
  // Done after all langs build so the error message lists everything at once.
  const allRefs = results.flatMap(r => r.referencedAssets ?? [])
  validateAssetReferences(allRefs, copiedAssets)

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
