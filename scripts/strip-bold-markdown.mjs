#!/usr/bin/env node
// Strip `**bold**` markdown markers from all content files.
//
// Why: iOS MarkdownText falls back to literal Text() when AttributedString
// markdown parser throws; Android renders Text() with no markdown parsing at
// all. So `**word**` is shown to users with visible asterisks instead of bold.
//
// Until we ship app patches that properly parse `**bold**`, strip it from
// content. Visual emphasis is preserved via emoji prefixes (🏦, 💚, 1️⃣…)
// already in the same strings — bold was the second emphasis layer.
//
// Regex: non-greedy match for **content** that does NOT contain another `*`.
// Catches: **N26**, **🏦 Vivid Money — €20**, **3 покупки**, etc.
// Skips: `*italic*` (single), `***triple***` edge case (rare in our content).

import { readFile, writeFile } from 'node:fs/promises'
import { glob } from 'node:fs/promises'

const ROOT = new URL('..', import.meta.url).pathname

const files = []
for await (const f of glob('content/{ru,en,pt}/**/*.mjs', { cwd: ROOT })) {
  files.push(f)
}
files.sort()

const BOLD_RE = /\*\*([^*]+?)\*\*/g

let totalReplacements = 0
let touchedFiles = 0

for (const rel of files) {
  const path = `${ROOT}${rel}`
  const src = await readFile(path, 'utf8')
  const matches = src.match(BOLD_RE)
  if (!matches) continue
  const replaced = src.replace(BOLD_RE, '$1')
  await writeFile(path, replaced)
  totalReplacements += matches.length
  touchedFiles += 1
  if (touchedFiles <= 10 || touchedFiles % 50 === 0) {
    console.log(`  ${rel}: ${matches.length} replacements`)
  }
}

console.log(`\nTotal: ${totalReplacements} bold markers stripped across ${touchedFiles}/${files.length} files`)
