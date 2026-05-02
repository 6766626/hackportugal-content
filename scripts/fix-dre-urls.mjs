#!/usr/bin/env node
// Fixes bare dre.pt/ source URLs by replacing them with detalhe/ permalinks
// based on law name/number parsed from source title.

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

// Mapping from normalized title → specific DRE URL
const MAP = [
  // Name patterns → URL (first match wins)
  { match: /Decreto-Lei[^\d]*176\/2003/i,          url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/176-2003' },
  { match: /Lei[^\d]*37\/2006/i,                   url: 'https://diariodarepublica.pt/dr/detalhe/lei/37-2006' },
  { match: /Lei[^\d]*56\/2023|Mais Habita/i,       url: 'https://diariodarepublica.pt/dr/detalhe/lei/56-2023' },
  { match: /Lei[^\d]*61\/2025/i,                   url: 'https://diariodarepublica.pt/dr/detalhe/lei/61-2025' },
  { match: /IFICI.*Portaria|Portaria[^\d]*IFICI/i, url: 'https://diariodarepublica.pt/dr/pesquisa?q=IFICI' },
  { match: /Lei[^\d]*34\/2004/i,                   url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2004-34510275' },
  { match: /Tratado de Amizade|amizade brasil/i,   url: 'https://diariodarepublica.pt/dr/detalhe/decreto-do-presidente-da-republica/79-2000' },
  { match: /Regulamento BdP.*2\/2018|BdP 2\/2018/i, url: 'https://www.bportugal.pt/aviso-circular/aviso-ndeg-22018' },
  { match: /Lei[^\d]*16\/2022|Comunica.*Eletr/i,   url: 'https://diariodarepublica.pt/dr/detalhe/lei/16-2022' },
  { match: /Decreto-Lei[^\d]*74-B\/2021/i,          url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/74-b-2021' },
  { match: /OE\/2024|Lei do OE.*2024|Lei 82\/2023/i, url: 'https://diariodarepublica.pt/dr/detalhe/lei/82-2023' },
  { match: /Lei[^\d]*102\/2020/i,                   url: 'https://diariodarepublica.pt/dr/detalhe/lei/102-2020' },
  { match: /Decreto-Lei[^\d]*38\/2017/i,             url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/38-2017' },
  { match: /Decreto-Lei[^\d]*74-A\/2017/i,           url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/74-a-2017' },
  { match: /Decreto-Lei[^\d]*45\/2018|TVDE/i,        url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/45-2018' },
  { match: /Decreto-Lei[^\d]*12\/2021.*eIDAS/i,      url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/12-2021' },
  { match: /Decreto-Lei[^\d]*72\/2008|Contrato de Seguro/i, url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2008-107544019' },
  { match: /Lei[^\d]*7\/2009|Código do Trabalho/i,   url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2009-34546475' },
]

let totalReplaced = 0
let totalUnmatched = 0

for (const file of await walk(CONTENT)) {
  let src = await readFile(file, 'utf8')
  const orig = src

  // Find all source entries with bare dre.pt/ URL and replace per title mapping
  src = src.replace(/\{\s*title:\s*'([^']+)',\s*url:\s*'https:\/\/dre\.pt\/'([^}]*)\}/g, (m, title, rest) => {
    for (const { match, url } of MAP) {
      if (match.test(title)) {
        totalReplaced++
        return `{ title: '${title}', url: '${url}'${rest}}`
      }
    }
    totalUnmatched++
    console.warn(`  NO MATCH: ${title}`)
    return m
  })

  if (src !== orig) {
    await writeFile(file, src)
  }
}

console.log(`\nReplaced: ${totalReplaced}`)
console.log(`Unmatched: ${totalUnmatched}`)
