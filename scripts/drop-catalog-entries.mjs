#!/usr/bin/env node
// Removes catalog entries by id from all catalog/*.ru.json files.
// Usage: node scripts/drop-catalog-entries.mjs <id1> <id2> ...

import { readdir, readFile, writeFile } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)))
const CATALOG_DIR = join(ROOT, 'catalog')

const ids = new Set(process.argv.slice(2))
if (ids.size === 0) {
  console.error('Usage: drop-catalog-entries.mjs <id1> <id2> ...')
  process.exit(2)
}

let totalRemoved = 0
for (const f of await readdir(CATALOG_DIR)) {
  if (!f.endsWith('.ru.json')) continue
  const p = join(CATALOG_DIR, f)
  const arr = JSON.parse(await readFile(p, 'utf8'))
  const before = arr.length
  const kept = arr.filter(e => !ids.has(e.id))
  if (kept.length !== before) {
    await writeFile(p, JSON.stringify(kept, null, 2) + '\n')
    const removed = before - kept.length
    totalRemoved += removed
    console.log(`${f}: -${removed} (${before} → ${kept.length})`)
  }
}
console.log(`Total removed: ${totalRemoved}`)
console.log(`IDs not found in catalog: ${[...ids].length - totalRemoved}`)
