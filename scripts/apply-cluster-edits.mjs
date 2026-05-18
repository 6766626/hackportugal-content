#!/usr/bin/env node
// Apply cluster edits returned by research agents.
// Usage: node scripts/apply-cluster-edits.mjs /tmp/clusters/A_bureaucracy.edits.json [...]

import fs from 'node:fs'
import { readFile, writeFile } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)))
const RU = join(ROOT, 'content', 'ru')

const stats = {
  url_replacements_applied: 0,
  url_replacements_skipped: 0,
  fact_edits_applied: 0,
  fact_edits_skipped: 0,
  files_touched: new Set(),
  errors: [],
}

async function findGuideFile(category, guideId) {
  if (!guideId) return null
  if (category) {
    const direct = join(RU, category, `${guideId}.mjs`)
    if (fs.existsSync(direct)) return direct
  }
  // Fallback: search in all RU folders
  for (const cat of fs.readdirSync(RU)) {
    const candidate = join(RU, cat, `${guideId}.mjs`)
    if (fs.existsSync(candidate)) return candidate
  }
  return null
}

async function applyURLReplacement(rep) {
  if (!rep.old_url || !rep.new_url) {
    stats.url_replacements_skipped++
    return
  }
  const guides = rep.guides || []
  const category = rep.category
  for (const g of guides) {
    const file = await findGuideFile(category, g)
    if (!file) {
      stats.errors.push(`URL replacement: ${g}.mjs not found`)
      stats.url_replacements_skipped++
      continue
    }
    let content = await readFile(file, 'utf8')
    if (!content.includes(rep.old_url)) {
      stats.url_replacements_skipped++
      continue
    }
    const updated = content.split(rep.old_url).join(rep.new_url)
    if (updated !== content) {
      await writeFile(file, updated)
      stats.url_replacements_applied++
      stats.files_touched.add(file)
    }
  }
}

async function applyFactEdit(edit) {
  if (!edit.guide_id || !edit.search || edit.replace == null) {
    stats.fact_edits_skipped++
    return
  }
  const file = await findGuideFile(edit.category, edit.guide_id)
  if (!file) {
    stats.errors.push(`fact edit: ${edit.guide_id}.mjs not found`)
    stats.fact_edits_skipped++
    return
  }
  const content = await readFile(file, 'utf8')
  if (!content.includes(edit.search)) {
    stats.errors.push(`fact edit: search not found in ${edit.guide_id}: ${edit.search.slice(0, 80)}`)
    stats.fact_edits_skipped++
    return
  }
  const occurrences = content.split(edit.search).length - 1
  if (occurrences > 1) {
    stats.errors.push(`fact edit: search not unique (${occurrences}×) in ${edit.guide_id}: ${edit.search.slice(0, 80)}`)
    stats.fact_edits_skipped++
    return
  }
  const updated = content.replace(edit.search, edit.replace)
  await writeFile(file, updated)
  stats.fact_edits_applied++
  stats.files_touched.add(file)
}

async function applyAdditionalSource(add) {
  if (!add.guide_id || !add.url || !add.title) return
  const file = await findGuideFile(add.category, add.guide_id)
  if (!file) {
    stats.errors.push(`additional source: ${add.guide_id}.mjs not found`)
    return
  }
  const content = await readFile(file, 'utf8')
  if (content.includes(add.url)) return // already present
  // Insert before the closing `]` of sources array
  const sourcesMatch = content.match(/(  sources: \[\n[\s\S]*?\n  \]),/)
  if (!sourcesMatch) {
    stats.errors.push(`additional source: cannot find sources[] in ${add.guide_id}`)
    return
  }
  const existing = sourcesMatch[0]
  const prefix = sourcesMatch[1].slice(0, -3) // remove `\n  ]` from $1
  const newEntry = `,\n    { title: ${JSON.stringify(add.title).replace(/"/g, "'")}, url: '${add.url}', kind: '${add.kind || 'official'}', language: '${add.language || 'pt'}', lastRetrieved: '${new Date().toISOString().slice(0, 10)}' }`
  const replacement = prefix + newEntry + '\n  ],'
  const updated = content.replace(existing, replacement)
  await writeFile(file, updated)
  stats.files_touched.add(file)
}

async function bumpLastVerifiedToday(filePath) {
  const today = new Date().toISOString().slice(0, 10)
  const content = await readFile(filePath, 'utf8')
  const updated = content.replace(/lastVerified: '\d{4}-\d{2}-\d{2}'/, `lastVerified: '${today}'`)
  if (updated !== content) await writeFile(filePath, updated)
}

async function main() {
  const files = process.argv.slice(2)
  if (files.length === 0) {
    console.error('Usage: node apply-cluster-edits.mjs <edits.json> [...]')
    process.exit(1)
  }

  for (const f of files) {
    if (!fs.existsSync(f)) { console.warn(`skip (missing): ${f}`); continue }
    const data = JSON.parse(await readFile(f, 'utf8'))
    console.log(`\n=== ${f} ===`)
    console.log(`  url_replacements: ${(data.url_replacements ?? []).length}`)
    console.log(`  fact_edits: ${(data.fact_edits ?? []).length}`)
    console.log(`  additional_sources: ${(data.additional_sources_added ?? []).length}`)

    for (const rep of data.url_replacements ?? []) {
      await applyURLReplacement(rep)
    }
    for (const edit of data.fact_edits ?? []) {
      await applyFactEdit(edit)
    }
    for (const add of data.additional_sources_added ?? []) {
      await applyAdditionalSource(add)
    }
  }

  // Bump lastVerified on every touched file
  for (const f of stats.files_touched) {
    await bumpLastVerifiedToday(f)
  }

  console.log(`\n=== Summary ===`)
  console.log(`URL replacements applied:  ${stats.url_replacements_applied}`)
  console.log(`URL replacements skipped:  ${stats.url_replacements_skipped}`)
  console.log(`Fact edits applied:        ${stats.fact_edits_applied}`)
  console.log(`Fact edits skipped:        ${stats.fact_edits_skipped}`)
  console.log(`Files touched:             ${stats.files_touched.size}`)
  console.log(`Errors:                    ${stats.errors.length}`)
  if (stats.errors.length) {
    console.log(`\n--- Errors ---`)
    for (const e of stats.errors.slice(0, 30)) console.log(`  ${e}`)
    if (stats.errors.length > 30) console.log(`  ... and ${stats.errors.length - 30} more`)
  }
}

main().catch((e) => { console.error(e); process.exit(1) })
