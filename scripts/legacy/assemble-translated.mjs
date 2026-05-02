#!/usr/bin/env node
// Assembles content/{lang}/ from content/ru/*.mjs + translations/{lang}-translated.jsonl.
//
// Approach: read each original .mjs, deep-clone its default export, apply per-path
// overrides from the JSONL, emit a new .mjs with the same file name.
//
// Usage: node scripts/assemble-translated.mjs pt

import { readdir, readFile, writeFile, mkdir, stat } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { join, dirname, basename, relative } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)))
const SOURCE_DIR = join(ROOT, 'content', 'ru')
const TRANSLATIONS_DIR = join(ROOT, 'translations')

const LANG = process.argv[2]
if (!LANG || !['pt', 'en'].includes(LANG)) {
  console.error('Usage: assemble-translated.mjs <pt|en>')
  process.exit(2)
}
const OUT_DIR = join(ROOT, 'content', LANG)
const JSONL_PATH = join(TRANSLATIONS_DIR, `${LANG}-translated.jsonl`)

async function walk(dir) {
  const out = []
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name)
    if (e.isDirectory()) out.push(...await walk(p))
    else if (e.isFile() && e.name.endsWith('.mjs') && !e.name.startsWith('_')) out.push(p)
  }
  return out
}

function deepClone(x) { return JSON.parse(JSON.stringify(x)) }

/// Sets a value at a dotted-path like "steps[0].content[2].items[1]" on an object tree.
function setPath(obj, path, value) {
  // Tokenise: alternating names and indices
  const tokens = []
  const re = /([a-zA-Z_][\w-]*)|\[(\d+)\]|\(([^)]+)\)/g
  let m
  while ((m = re.exec(path)) !== null) {
    if (m[1] !== undefined) tokens.push({ kind: 'name', value: m[1] })
    else if (m[2] !== undefined) tokens.push({ kind: 'index', value: Number(m[2]) })
    else if (m[3] !== undefined) tokens.push({ kind: 'subById', value: m[3] })
  }
  let cur = obj
  for (let i = 0; i < tokens.length - 1; i++) {
    const t = tokens[i]
    if (t.kind === 'name') {
      if (cur[t.value] == null) return false
      cur = cur[t.value]
    } else if (t.kind === 'index') {
      if (!Array.isArray(cur) || cur[t.value] == null) return false
      cur = cur[t.value]
    } else if (t.kind === 'subById') {
      // `sub(id)` — find in current array-of-substeps where .id === value
      if (!Array.isArray(cur)) return false
      const sub = cur.find(x => x && x.id === t.value)
      if (!sub) return false
      cur = sub
    }
  }
  const last = tokens[tokens.length - 1]
  if (last.kind === 'name') { cur[last.value] = value; return true }
  if (last.kind === 'index') { cur[last.value] = value; return true }
  return false
}

/// Heuristic: serialise a guide object back as a JS module.
/// Uses JSON.stringify under the hood (preserving structure) and wraps in `export default`.
/// Strings get JSON-encoded (double-quoted, \n preserved). This is functionally equivalent
/// to an .mjs with an object literal — build.mjs will import and read it fine.
function serialiseGuide(guide) {
  const header = `// Auto-generated from content/ru/ — do not edit by hand.\n// Regenerate with: node scripts/assemble-translated.mjs ${LANG}\n\n`
  return header + `export default ${JSON.stringify(guide, null, 2)}\n`
}

async function main() {
  if (!existsSync(JSONL_PATH)) {
    console.error(`No translations found at ${JSONL_PATH}`)
    console.error(`Run: node scripts/translate.mjs ${LANG}`)
    process.exit(2)
  }

  // Index translations by guideId → { path: text }
  const jsonl = await readFile(JSONL_PATH, 'utf8')
  const byGuide = new Map()
  for (const line of jsonl.split('\n').filter(Boolean)) {
    const { guideId, path, text } = JSON.parse(line)
    if (!byGuide.has(guideId)) byGuide.set(guideId, new Map())
    byGuide.get(guideId).set(path, text)
  }

  await mkdir(OUT_DIR, { recursive: true })

  const files = await walk(SOURCE_DIR)
  let assembled = 0
  let skipped = 0
  for (const f of files) {
    const mod = await import(pathToFileURL(f).href)
    const source = mod.default
    const translations = byGuide.get(source.id)
    if (!translations) {
      skipped++
      continue
    }
    const cloned = deepClone(source)
    for (const [path, text] of translations.entries()) {
      setPath(cloned, path, text)
    }
    const relPath = relative(SOURCE_DIR, f)
    const outPath = join(OUT_DIR, relPath)
    await mkdir(dirname(outPath), { recursive: true })
    await writeFile(outPath, serialiseGuide(cloned))
    assembled++
  }

  console.log(`[${LANG}] assembled ${assembled} guides → content/${LANG}/`)
  if (skipped > 0) console.log(`  skipped ${skipped} guides (no translations)`)
}

main().catch(err => { console.error(err); process.exit(1) })
