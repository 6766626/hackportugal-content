#!/usr/bin/env node
// Second-pass cleanup:
// 1. Collapse «ру-слово (pt-термин (ру-перевод))» → «ру-слово (pt-термин)» when перевод ≈ исходному ру-слову.
// 2. Collapse «pt-термин (ру-перевод) (ру-перевод)» duplicates.
// 3. Trim glosses inside step titles and costs labels where redundant.

import { readdir, readFile, writeFile } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)))
const CONTENT = join(ROOT, 'content', 'ru')

async function walk(dir) {
  const out = []
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name)
    if (e.isDirectory()) out.push(...await walk(p))
    else if (e.name.endsWith('.mjs') && !e.name.startsWith('_')) out.push(p)
  }
  return out
}

let filesChanged = 0

for (const file of await walk(CONTENT)) {
  let src = await readFile(file, 'utf8')
  const orig = src

  // Pattern: «(Latin word (Cyrillic gloss))» — if Cyrillic gloss duplicates the surrounding preceding Russian word,
  // just drop the inner (Cyrillic gloss).
  // We'll do a simpler rule: any «(latinStuff (cyrStuff))» → «(latinStuff)»
  // This assumes the outer context already has the Russian equivalent (as is the case when authors wrote
  // "Залог (caução)" originally).
  src = src.replace(/\(([A-Za-zÀ-ÿ][^()]*?)\s*\(([а-яА-ЯёЁ][^()]*)\)\s*\)/g, '($1)')

  // Double Russian glosses: «pt-term (ru1) (ru2)» — keep first
  src = src.replace(/\(([а-яА-ЯёЁ][^()]*)\)\s*\(([а-яА-ЯёЁ][^()]*)\)/g, '($1)')

  // Nested fully-cyrillic still (left from previous pass)
  src = src.replace(/\(([а-яА-ЯёЁ][^()]*)\s*\(([а-яА-ЯёЁ][^()]*)\)\)/g, '($1)')

  // Title/line like: «Provedor de Justiça (омбудсмен) (ombudsman) при...» → keep first
  src = src.replace(/\(([а-яА-ЯёЁ][^()]*)\)\s*\(([A-Za-z][^()]*)\)/g, '($1)')

  if (src !== orig) {
    await writeFile(file, src)
    filesChanged++
  }
}

console.log(`Files changed: ${filesChanged}`)
