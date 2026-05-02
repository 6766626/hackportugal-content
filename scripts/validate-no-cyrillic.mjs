#!/usr/bin/env node
// Fails if PT or EN translated content contains Cyrillic characters.
// Catches: incomplete translations, copy-pasted RU strings, transliteration mistakes.
//
// Usage:
//   node scripts/validate-no-cyrillic.mjs           # validates pt + en
//   node scripts/validate-no-cyrillic.mjs --report  # report only, exit 0

import { readFile, readdir } from 'node:fs/promises'
import { join, dirname, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)))
const REPORT_ONLY = process.argv.includes('--report')
const TARGET_LANGS = ['en', 'pt']

const CYRILLIC = /[Ѐ-ӿԀ-ԯ]+/g

async function walk(dir) {
  const out = []
  let entries
  try { entries = await readdir(dir, { withFileTypes: true }) } catch { return out }
  for (const e of entries) {
    const p = join(dir, e.name)
    if (e.isDirectory()) out.push(...await walk(p))
    else if (e.isFile() && e.name.endsWith('.mjs') && !e.name.startsWith('_')) out.push(p)
  }
  return out
}

let totalLeaks = 0
const fileReports = []

for (const lang of TARGET_LANGS) {
  const dir = join(ROOT, 'content', lang)
  const files = await walk(dir)
  for (const f of files) {
    const text = await readFile(f, 'utf8')
    const lines = text.split('\n')
    const hits = []
    for (let i = 0; i < lines.length; i++) {
      CYRILLIC.lastIndex = 0
      let m
      while ((m = CYRILLIC.exec(lines[i])) !== null) {
        hits.push({ line: i + 1, match: m[0], context: lines[i].trim().slice(0, 100) })
      }
    }
    if (hits.length) {
      totalLeaks += hits.length
      fileReports.push({ path: relative(ROOT, f), hits })
    }
  }
}

if (fileReports.length === 0) {
  console.log('✓ No Cyrillic leakage found in pt/ or en/ content.')
  process.exit(0)
}

console.log(`\n✗ Cyrillic leakage in ${fileReports.length} files (${totalLeaks} occurrences):\n`)
for (const r of fileReports) {
  console.log(`  ${r.path}`)
  for (const h of r.hits.slice(0, 3)) {
    console.log(`    L${h.line}: ${JSON.stringify(h.match)}  →  ${h.context}`)
  }
  if (r.hits.length > 3) console.log(`    … and ${r.hits.length - 3} more`)
}

process.exit(REPORT_ONLY ? 0 : 1)
