#!/usr/bin/env node
// Validates structural parity between RU and translated guides.
// Catches: dropped sources, dropped costs, dropped steps, empty strings, missing required fields.
//
// Usage:
//   node scripts/validate-parity.mjs            # exits 1 on any drift
//   node scripts/validate-parity.mjs --report   # report only, exits 0

import { readFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)))
const REPORT_ONLY = process.argv.includes('--report')

const ru = JSON.parse(await readFile(join(ROOT, 'dist', 'guides.ru.json'), 'utf8'))
const en = JSON.parse(await readFile(join(ROOT, 'dist', 'guides.en.json'), 'utf8'))
const pt = JSON.parse(await readFile(join(ROOT, 'dist', 'guides.pt.json'), 'utf8'))

const ruById = new Map(ru.map(g => [g.id, g]))
const enById = new Map(en.map(g => [g.id, g]))
const ptById = new Map(pt.map(g => [g.id, g]))

const issues = []

function checkArrayLen(id, ruG, otherG, lang, key) {
  const a = ruG[key]?.length ?? 0
  const b = otherG[key]?.length ?? 0
  if (a !== b) issues.push(`${id} [${lang}]: ${key}.length RU=${a} ${lang}=${b}`)
}

function countContentItems(steps) {
  let n = 0
  for (const s of steps ?? []) {
    for (const c of s.content ?? []) {
      if (c.kind === 'checklist') n += (c.items ?? []).length
      else if (c.kind === 'paragraph' || c.kind === 'warning') n += 1
      else if (c.kind === 'substeps') {
        for (const sub of c.items ?? []) n += (sub.content ?? []).length
      }
    }
  }
  return n
}

function checkEmpty(id, g, lang) {
  if (!g.title?.trim()) issues.push(`${id} [${lang}]: empty title`)
  if (!g.tldr?.trim()) issues.push(`${id} [${lang}]: empty tldr`)
}

function checkRequiredFields(id, g, lang) {
  for (const field of ['id', 'categoryId', 'title', 'tldr', 'steps']) {
    if (g[field] == null) issues.push(`${id} [${lang}]: missing required field "${field}"`)
  }
}

for (const [id, ruG] of ruById) {
  const enG = enById.get(id)
  const ptG = ptById.get(id)
  if (!enG) issues.push(`${id}: missing EN translation`)
  if (!ptG) issues.push(`${id}: missing PT translation`)
  if (!enG || !ptG) continue

  checkRequiredFields(id, enG, 'EN')
  checkRequiredFields(id, ptG, 'PT')
  checkEmpty(id, enG, 'EN')
  checkEmpty(id, ptG, 'PT')

  for (const [other, lang] of [[enG, 'EN'], [ptG, 'PT']]) {
    checkArrayLen(id, ruG, other, lang, 'sources')
    checkArrayLen(id, ruG, other, lang, 'costs')
    checkArrayLen(id, ruG, other, lang, 'steps')

    if (ruG.editorialVoice !== other.editorialVoice)
      issues.push(`${id} [${lang}]: editorialVoice drift "${other.editorialVoice}" vs "${ruG.editorialVoice}"`)
    if (ruG.categoryId !== other.categoryId)
      issues.push(`${id} [${lang}]: categoryId drift`)
    if (JSON.stringify(ruG.audience) !== JSON.stringify(other.audience))
      issues.push(`${id} [${lang}]: audience drift`)

    const ruN = countContentItems(ruG.steps)
    const otherN = countContentItems(other.steps)
    // Allow ±2 drift to absorb minor structural differences (sublists, reorderings)
    if (Math.abs(ruN - otherN) > 2)
      issues.push(`${id} [${lang}]: content item count drift RU=${ruN} ${lang}=${otherN}`)
  }
}

if (issues.length === 0) {
  console.log(`✓ Parity OK across ${ru.length} guides × 2 translations.`)
  process.exit(0)
}

console.log(`\n✗ ${issues.length} parity issues:\n`)
for (const i of issues.slice(0, 50)) console.log(`  ${i}`)
if (issues.length > 50) console.log(`  … and ${issues.length - 50} more`)

process.exit(REPORT_ONLY ? 0 : 1)
