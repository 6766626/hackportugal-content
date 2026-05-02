#!/usr/bin/env node
// Removes `kind: 'community'` sources (Telegram links) and commercial third-party
// secondary sources from all guide files. Keeps only authoritative sources.
// Fixes trailing commas in the sources array after removal.

import { readFile, writeFile, readdir } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)))
const CONTENT_DIR = join(ROOT, 'content', 'ru')

// Commercial domains we don't want as guide sources (they can be in Tier 2 catalog instead)
const COMMERCIAL_DOMAINS = [
  'migrun.tech',
  'passportivity.com',
  'immigrantinvest.com',
  'globalcitizensolutions.com',
  'expatica.com',
  'portugalist.com',
  'nomadcapitalist.com',
  'forbes.ru',
  'forbes.com',
  'jobbatical.com',
  'getgoldenvisa.com',
  'calendarr.com',
  'lvpadvogados.com',
  'comparaja.pt',
  'henleyglobal.com',
  'tranio.com',
  'nomadlist.com',
  'visasam.ru',
  'prian.ru',
  'portugal-residence.ru',
  'relocation.life',
  'vc.ru',
  't-j.ru',
  'lenta.ru',
  'astons.com',
  'residencies.io',
  'dmitriivisa.news',
  'imidaily.com',
  '34travel.me',
  'imigrata.com',
]

async function walk(dir) {
  const out = []
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name)
    if (entry.isDirectory()) out.push(...await walk(p))
    else if (entry.isFile() && entry.name.endsWith('.mjs') && !entry.name.startsWith('_')) out.push(p)
  }
  return out
}

function shouldRemoveLine(line) {
  if (/kind:\s*['"]community['"]/.test(line)) return true
  for (const dom of COMMERCIAL_DOMAINS) {
    if (line.includes(dom)) return true
  }
  return false
}

async function processFile(file) {
  const orig = await readFile(file, 'utf8')
  const lines = orig.split('\n')
  const out = []
  let removed = 0
  for (const line of lines) {
    if (shouldRemoveLine(line)) {
      removed++
      continue
    }
    out.push(line)
  }
  if (removed === 0) return { file, removed: 0 }

  // Fix trailing commas: if a line ends with `},` and the NEXT non-empty line
  // is `],` (sources array closing), remove the trailing comma.
  for (let i = 0; i < out.length; i++) {
    const trimmed = out[i].trim()
    if (trimmed.endsWith('},')) {
      // find next non-empty line
      let j = i + 1
      while (j < out.length && out[j].trim() === '') j++
      if (j < out.length && out[j].trim().startsWith(']')) {
        // drop the trailing comma
        out[i] = out[i].replace(/},\s*$/, '}')
      }
    }
  }

  const result = out.join('\n')
  if (result !== orig) {
    await writeFile(file, result)
  }
  return { file, removed }
}

async function main() {
  const files = await walk(CONTENT_DIR)
  let totalRemoved = 0
  const touched = []
  for (const f of files) {
    const { removed } = await processFile(f)
    if (removed > 0) {
      totalRemoved += removed
      touched.push({ file: f.replace(ROOT + '/', ''), removed })
    }
  }
  console.log(`Processed ${files.length} guide files`)
  console.log(`Removed ${totalRemoved} source entries from ${touched.length} files\n`)
  for (const t of touched) console.log(`  ${t.file}: -${t.removed}`)
}

main().catch(e => { console.error(e); process.exit(1) })
