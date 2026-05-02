#!/usr/bin/env node
// Adds Russian translations in parentheses on the FIRST occurrence of a Portuguese term in each guide.
// Skips if already has a Russian gloss nearby.

import { readdir, readFile, writeFile } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)))
const CONTENT = join(ROOT, 'content', 'ru')

const dictMod = await import(pathToFileURL(join(ROOT, 'scripts', 'pt-term-dictionary.mjs')).href)
const dict = dictMod.default

async function walk(dir) {
  const out = []
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name)
    if (e.isDirectory()) out.push(...await walk(p))
    else if (e.name.endsWith('.mjs') && !e.name.startsWith('_')) out.push(p)
  }
  return out
}

function escRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') }

let totalFiles = 0
let totalAdded = 0

for (const file of await walk(CONTENT)) {
  let src = await readFile(file, 'utf8')
  const origSrc = src
  let added = 0

  for (const [term, ru] of dict) {
    const termRe = new RegExp(`\\b${escRe(term)}\\b`, '')
    const firstIdx = src.search(termRe)
    if (firstIdx === -1) continue

    // Look at context after first occurrence to see if it already has a Russian gloss
    const after = src.slice(firstIdx, firstIdx + term.length + 80)
    // Already glossed if a parenthetical with Cyrillic follows within ~80 chars
    const glossedRe = new RegExp(`${escRe(term)}\\s*[(（][^)）]*[а-яА-Я]`, '')
    if (glossedRe.test(after)) continue

    // Also skip if inside a URL
    const urlContext = src.slice(Math.max(0, firstIdx - 40), firstIdx)
    if (/https?:\/\/[^\s]*$/.test(urlContext)) continue

    // Also skip if the term is already part of a longer dictionary phrase that was already matched
    // (handled by order: longer phrases first)

    // Insert parenthetical: "Term (ru)"
    src = src.slice(0, firstIdx + term.length) + ` (${ru})` + src.slice(firstIdx + term.length)
    added++
  }

  if (src !== origSrc) {
    await writeFile(file, src)
    totalFiles++
    totalAdded += added
    console.log(`${file.replace(ROOT + '/', '')}: +${added}`)
  }
}

console.log(`\nFiles modified: ${totalFiles}`)
console.log(`Glosses added: ${totalAdded}`)
