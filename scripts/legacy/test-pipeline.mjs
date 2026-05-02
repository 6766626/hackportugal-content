#!/usr/bin/env node
// End-to-end integration test of the content pipeline:
//   extract → fake-translate → assemble → build → validate output
// No external API required. Exits 0 on success.

import { readFile, writeFile, mkdir, rm, readdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { execFileSync } from 'node:child_process'

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)))
const TRANSLATIONS_DIR = join(ROOT, 'translations')
const CONTENT_TEST_DIR = join(ROOT, 'content', 'test-xx')

let failures = []
function assert(cond, msg) { if (!cond) { failures.push(msg); console.error(`✘ ${msg}`) } else { console.log(`✓ ${msg}`) } }

function runNode(script, env = {}) {
  return execFileSync('node', [join(ROOT, 'scripts', script)], {
    cwd: ROOT,
    env: { ...process.env, ...env },
    stdio: 'pipe',
    encoding: 'utf8'
  })
}

async function cleanup() {
  for (const f of ['ru-source.jsonl', 'pt-translated.jsonl']) {
    try { await rm(join(TRANSLATIONS_DIR, f)) } catch {}
  }
  try { await rm(CONTENT_TEST_DIR, { recursive: true, force: true }) } catch {}
  try { await rm(join(ROOT, 'content', 'pt'), { recursive: true, force: true }) } catch {}
  try { await rm(join(TRANSLATIONS_DIR, 'cache-pt.json')) } catch {}
}

async function main() {
  await cleanup()

  // --- 1. Extract ---
  runNode('extract-translatable.mjs')
  const jsonlPath = join(TRANSLATIONS_DIR, 'ru-source.jsonl')
  assert(existsSync(jsonlPath), 'extract creates ru-source.jsonl')
  const lines = (await readFile(jsonlPath, 'utf8')).split('\n').filter(Boolean)
  assert(lines.length > 1000, `extracted >1000 strings (got ${lines.length})`)

  // Validate every line is valid JSON with expected shape
  let schemaOk = true
  for (const line of lines.slice(0, 50)) {
    try {
      const obj = JSON.parse(line)
      if (!obj.guideId || !obj.path || typeof obj.text !== 'string') schemaOk = false
    } catch { schemaOk = false }
  }
  assert(schemaOk, 'extracted JSONL lines have {guideId, path, text}')

  // --- 2. Fake-translate: prefix "[FAKE-PT] " to every string, simulates successful API response ---
  const fakePT = lines.map(line => {
    const { guideId, path, text } = JSON.parse(line)
    return JSON.stringify({ guideId, path, text: `[PT] ${text}` })
  }).join('\n') + '\n'
  await writeFile(join(TRANSLATIONS_DIR, 'pt-translated.jsonl'), fakePT)
  assert(existsSync(join(TRANSLATIONS_DIR, 'pt-translated.jsonl')), 'fake pt-translated.jsonl created')

  // --- 3. Assemble ---
  try {
    execFileSync('node', [join(ROOT, 'scripts', 'assemble-translated.mjs'), 'pt'], {
      cwd: ROOT, stdio: 'pipe', encoding: 'utf8'
    })
  } catch (e) {
    console.error(e.stdout?.toString() ?? e.message)
    throw e
  }
  const ptDir = join(ROOT, 'content', 'pt')
  assert(existsSync(ptDir), 'content/pt/ dir created')
  const ptFiles = await readdir(ptDir, { recursive: true })
  const ptMjsCount = ptFiles.filter(f => typeof f === 'string' && f.endsWith('.mjs')).length
  assert(ptMjsCount > 100, `content/pt/ contains >100 .mjs (got ${ptMjsCount})`)

  // Spot-check: load one assembled .mjs via dynamic import and check a translated field.
  const sampleFile = ptFiles.find(f => typeof f === 'string' && f.endsWith('pet-import.mjs'))
  if (sampleFile) {
    const mod = await import(pathToFileURL(join(ptDir, sampleFile)).href)
    const guide = mod.default
    assert(guide.title?.startsWith('[PT]'), `assembled title starts with [PT] (got "${guide.title?.slice(0,30)}")`)
    assert(guide.id === 'pet-import', 'non-translated id preserved')
    // URL should stay unchanged (not prefixed)
    const url = guide.sources?.[0]?.url ?? ''
    assert(!url.startsWith('[PT]'), 'source URL not mutated')
  }

  // --- 4. Build LANGS=ru,pt ---
  const buildOut = execFileSync('node', [join(ROOT, 'scripts', 'build.mjs')], {
    cwd: ROOT, env: { ...process.env, LANGS: 'ru,pt' }, encoding: 'utf8'
  })
  assert(buildOut.includes('[ru]') && buildOut.includes('[pt]'), 'build processes both ru and pt')

  // --- 5. Manifest has languages[] ---
  const manifest = JSON.parse(await readFile(join(ROOT, 'dist', 'manifest.json'), 'utf8'))
  assert(Array.isArray(manifest.languages) && manifest.languages.length === 2, 'manifest has 2 languages')
  assert(manifest.languages.some(l => l.tag === 'pt'), 'manifest includes pt tag')
  assert(manifest.languages.some(l => l.tag === 'ru'), 'manifest includes ru tag')

  // --- 6. Output JSON files exist ---
  const expected = ['guides.ru.json', 'guides.pt.json', 'categories.ru.json', 'categories.pt.json']
  for (const name of expected) {
    assert(existsSync(join(ROOT, 'dist', name)), `dist/${name} exists`)
  }

  // --- 7. PT guides.json actually contains translated data ---
  const ptGuides = JSON.parse(await readFile(join(ROOT, 'dist', 'guides.pt.json'), 'utf8'))
  const petGuide = ptGuides.find(g => g.id === 'pet-import')
  if (petGuide) {
    assert(petGuide.title.startsWith('[PT]'), 'built pt guides.json has translated titles')
  }

  await cleanup()
  // Rebuild ru-only so state stays clean for subsequent scripts (scrub dist of pt files first)
  await rm(join(ROOT, 'dist'), { recursive: true, force: true })
  runNode('build.mjs', { LANGS: 'ru' })

  if (failures.length > 0) {
    console.error(`\n✘ ${failures.length} pipeline test(s) failed`)
    process.exit(1)
  }
  console.log(`\n✓ pipeline integration test passed (7 assertions × multi-lang build)`)
}

main().catch(err => { console.error(err); process.exit(2) })
