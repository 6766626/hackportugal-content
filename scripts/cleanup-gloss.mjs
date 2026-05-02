#!/usr/bin/env node
// Cleans up side effects of add-ru-gloss.mjs:
// 1. Remove Russian glosses from tags (tags should be short keywords)
// 2. Collapse nested parentheticals «(term (translation)) (redundant)»

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
let totalFixes = 0

for (const file of await walk(CONTENT)) {
  let src = await readFile(file, 'utf8')
  const orig = src

  // 1. Strip Russian glosses from tags. tags is an array of strings.
  //    Match `'foo (русский перевод)'` inside tags: [ ... ] — replace with `'foo'`.
  src = src.replace(/tags:\s*\[([\s\S]*?)\]/, (m, inner) => {
    const fixed = inner.replace(/'([^']+?)\s*\([а-яА-ЯёЁ][^)]*\)'/g, (mm, tag) => `'${tag}'`)
    return `tags: [${fixed}]`
  })

  // 2. Collapse nested glosses: «Х (русский (уточнение)) (english-extra)» → «Х (русский)»
  //    Specifically: when we see «(cyr-text (cyr-text)) (...)» — keep outer pair only
  src = src.replace(/\(([а-яА-ЯёЁ][^()]*)\s*\(([а-яА-ЯёЁ][^()]*)\)\)\s*\([^)]*\)/g, '($1)')

  // 3. Simpler case: «(term (translation))» where both cyrillic — keep only outer
  src = src.replace(/\(([а-яА-ЯёЁ][^()]*)\s*\(([а-яА-ЯёЁ][^()]*)\)\)/g, '($1)')

  // 4. Remove duplicate consecutive glosses: «Term (ru) — ru» where same word repeats
  //    (harmless leftover after translating existing suffix) — leave as-is

  // 5. In title: «... Certidão (справка) de domicílio — справка» — the leading gloss is redundant
  //    when the word "справка" appears later on the same line. Only trim leading title gloss when redundant.
  src = src.replace(/title:\s*'([^']*)'/g, (m, title) => {
    // If title starts with a Portuguese phrase followed by « (русский перевод) — русский перевод»
    // collapse the duplicate
    const dedup = title.replace(/(\([а-яА-ЯёЁ][^)]+\))\s+([а-яА-ЯёЁ][^—]+)—\s*\1/g, '$2—')
    return `title: '${dedup}'`
  })

  if (src !== orig) {
    await writeFile(file, src)
    filesChanged++
    totalFixes++
  }
}

console.log(`Files changed: ${filesChanged}`)
