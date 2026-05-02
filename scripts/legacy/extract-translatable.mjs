#!/usr/bin/env node
// Extracts translatable strings from content/ru/*.mjs into JSONL.
// Each line: {"guideId":"...", "path":"steps[0].title", "text":"..."}
//
// Non-translatable fields (ids, URLs, dates, numbers, enum values) are NEVER emitted.
// See translations/glossary.md for what stays in source language.

import { readdir, writeFile, mkdir } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)))
const CONTENT_DIR = join(ROOT, 'content', 'ru')
const TRANSLATIONS_DIR = join(ROOT, 'translations')
const OUT_JSONL = join(TRANSLATIONS_DIR, 'ru-source.jsonl')

// Whitelist of field paths that hold translatable prose.
// Other fields (id, categoryId, url, kind, status codes etc.) are preserved as-is.

const TRANSLATABLE_FIELDS = new Set([
  'title', 'tldr', 'changeSummary', 'label', 'note',
  'summary', // pendingLaw.summary
  'text' // paragraph.text, warning.text, timeline.text
])

const TRANSLATABLE_ARRAY_FIELDS = new Set([
  'tags', 'items' // checklist.items are strings; DocumentRef items are objects handled separately
])

async function walk(dir) {
  const out = []
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name)
    if (e.isDirectory()) out.push(...await walk(p))
    else if (e.isFile() && e.name.endsWith('.mjs') && !e.name.startsWith('_')) out.push(p)
  }
  return out
}

function emit(out, guideId, path, text) {
  if (typeof text !== 'string' || text.trim() === '') return
  out.push({ guideId, path, text })
}

function extractStep(out, guideId, step, stepPath) {
  emit(out, guideId, `${stepPath}.title`, step.title)
  extractContent(out, guideId, step.content ?? [], `${stepPath}.content`)
}

function extractContent(out, guideId, content, basePath) {
  content.forEach((block, i) => {
    const path = `${basePath}[${i}]`
    switch (block.kind) {
      case 'paragraph':
      case 'warning':
      case 'timeline':
        emit(out, guideId, `${path}.text`, block.text)
        break
      case 'checklist':
        (block.items ?? []).forEach((it, j) => emit(out, guideId, `${path}.items[${j}]`, it))
        break
      case 'link':
        emit(out, guideId, `${path}.text`, block.text)
        // url is NOT translated
        break
      case 'cost': {
        emit(out, guideId, `${path}.label`, block.label)
        if (block.note) emit(out, guideId, `${path}.note`, block.note)
        break
      }
      case 'costs':
        (block.items ?? []).forEach((it, j) => {
          emit(out, guideId, `${path}.items[${j}].label`, it.label)
          if (it.note) emit(out, guideId, `${path}.items[${j}].note`, it.note)
        })
        break
      case 'substeps':
        (block.items ?? []).forEach(sub => {
          extractStep(out, guideId, sub, `${path}.sub(${sub.id})`)
        })
        break
      case 'documents':
        (block.items ?? []).forEach((it, j) => {
          emit(out, guideId, `${path}.items[${j}].title`, it.title)
          if (it.note) emit(out, guideId, `${path}.items[${j}].note`, it.note)
        })
        break
      case 'walkingRoute':
        emit(out, guideId, `${path}.difficulty`, block.difficulty)
        ;(block.points ?? []).forEach((pt, j) => {
          emit(out, guideId, `${path}.points[${j}].name`, pt.name)
          emit(out, guideId, `${path}.points[${j}].description`, pt.description)
        })
        break
      case 'wikiLink':
        emit(out, guideId, `${path}.title`, block.title)
        break
    }
  })
}

function extractGuide(out, g) {
  emit(out, g.id, 'title', g.title)
  emit(out, g.id, 'tldr', g.tldr)
  if (g.changeSummary) emit(out, g.id, 'changeSummary', g.changeSummary)
  if (g.pendingLaw?.summary) emit(out, g.id, 'pendingLaw.summary', g.pendingLaw.summary)

  ;(g.tags ?? []).forEach((t, i) => emit(out, g.id, `tags[${i}]`, t))

  ;(g.steps ?? []).forEach((step, i) => {
    extractStep(out, g.id, step, `steps[${i}]`)
  })

  ;(g.variants ?? []).forEach((v, i) => {
    if (v.tldr) emit(out, g.id, `variants[${i}].tldr`, v.tldr)
    ;(v.steps ?? []).forEach((step, j) => {
      extractStep(out, g.id, step, `variants[${i}].steps[${j}]`)
    })
    ;(v.costs ?? []).forEach((c, j) => {
      emit(out, g.id, `variants[${i}].costs[${j}].label`, c.label)
      if (c.note) emit(out, g.id, `variants[${i}].costs[${j}].note`, c.note)
    })
  })

  ;(g.costs ?? []).forEach((c, i) => {
    emit(out, g.id, `costs[${i}].label`, c.label)
    if (c.note) emit(out, g.id, `costs[${i}].note`, c.note)
  })

  ;(g.documents ?? []).forEach((d, i) => {
    emit(out, g.id, `documents[${i}].title`, d.title)
    if (d.note) emit(out, g.id, `documents[${i}].note`, d.note)
  })

  ;(g.sources ?? []).forEach((s, i) => {
    emit(out, g.id, `sources[${i}].title`, s.title)
  })
}

async function main() {
  await mkdir(TRANSLATIONS_DIR, { recursive: true })

  const files = await walk(CONTENT_DIR)
  const items = []
  for (const f of files) {
    const mod = await import(pathToFileURL(f).href)
    if (!mod.default) throw new Error(`no default export in ${f}`)
    extractGuide(items, mod.default)
  }

  const jsonl = items.map(x => JSON.stringify(x)).join('\n') + '\n'
  await writeFile(OUT_JSONL, jsonl)

  console.log(`Extracted ${items.length} translatable strings from ${files.length} guides`)
  console.log(`→ ${OUT_JSONL}`)
}

main().catch(err => { console.error(err); process.exit(1) })
