#!/usr/bin/env node
// Bulk-inserts `editorialVoice: 'hackportugal'` and bumps `lastVerified: '2026-04-22'`
// into every guide .mjs. Idempotent — skips files that already have the flag.

import { readdir, readFile, writeFile } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)))
const CONTENT_DIR = join(ROOT, 'content', 'ru')
const TODAY = '2026-04-22'

async function walk(dir) {
  const out = []
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name)
    if (entry.isDirectory()) out.push(...await walk(p))
    else if (entry.isFile() && entry.name.endsWith('.mjs') && !entry.name.startsWith('_')) out.push(p)
  }
  return out
}

let addedVoice = 0
let bumpedDate = 0
let skipped = 0

for (const f of await walk(CONTENT_DIR)) {
  let src = await readFile(f, 'utf8')
  const orig = src

  if (!/editorialVoice\s*:/.test(src)) {
    // Insert right after the opening "export default {\n"
    src = src.replace(/export default \{\n/, `export default {\n  editorialVoice: 'hackportugal',\n`)
    addedVoice++
  }

  // Bump lastVerified to TODAY (if present and older)
  src = src.replace(/(lastVerified\s*:\s*['"])(\d{4}-\d{2}-\d{2})(['"])/, (m, a, d, b) => {
    if (d >= TODAY) return m
    bumpedDate++
    return `${a}${TODAY}${b}`
  })

  if (src !== orig) await writeFile(f, src)
  else skipped++
}

console.log(`Added editorialVoice: ${addedVoice}`)
console.log(`Bumped lastVerified:  ${bumpedDate}`)
console.log(`Unchanged:            ${skipped}`)
