#!/usr/bin/env node
// Validate every content block has a non-empty, known `kind` discriminator.
// Runs across ALL built languages (ru/en/pt) — earlier validators only check ru/.
//
// Why this exists: a single `{ kind: '', text: ... }` block in any language file
// breaks the Android app's kotlinx.serialization polymorphic deserializer
// (Serializer for subclass '' is not found in the polymorphic scope of 'a' at
// path ...), which renders the whole guides screen as «Failed to load content».
// Google Play flagged that as Broken Functionality (27 May 2026 rejection) and
// rejected the v2 submission. This validator stops the same class of bug from
// shipping again.

import { readFile } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)))
const DIST = join(ROOT, 'dist')

// Keep in sync with Android StepContent.kt sealed class members and iOS
// StepContent enum cases. If you add a new block kind in models, add it here.
const VALID_KINDS = new Set([
  'paragraph', 'warning', 'checklist', 'substeps',
  'walkingRoute', 'wikiLink', 'image', 'pdf',
  'timeline', 'cost', 'link',
])

const LANGS = ['ru', 'en', 'pt']

const errors = []
function bad(lang, guideId, path, kind, why) {
  errors.push(`[${lang}/${guideId}] ${path}: kind=${JSON.stringify(kind)} — ${why}`)
}

function checkBlocks(lang, guideId, basePath, blocks) {
  for (let i = 0; i < (blocks || []).length; i++) {
    const b = blocks[i]
    const path = `${basePath}[${i}]`
    if (typeof b !== 'object' || b === null) {
      bad(lang, guideId, path, b, 'block is not an object')
      continue
    }
    const k = b.kind
    if (typeof k !== 'string' || k.length === 0) {
      bad(lang, guideId, path, k, 'kind must be a non-empty string')
    } else if (!VALID_KINDS.has(k)) {
      bad(lang, guideId, path, k, `unknown kind (valid: ${[...VALID_KINDS].sort().join(', ')})`)
    }
    if (b.kind === 'substeps') {
      for (let si = 0; si < (b.items || []).length; si++) {
        const sub = b.items[si]
        checkBlocks(lang, guideId, `${path}.items[${si}](${sub.id || '?'}).content`, sub.content)
      }
    }
  }
}

async function main() {
  let totalBlocks = 0
  for (const lang of LANGS) {
    const guides = JSON.parse(await readFile(join(DIST, `guides.${lang}.json`), 'utf8'))
    for (let gi = 0; gi < guides.length; gi++) {
      const g = guides[gi]
      for (let si = 0; si < (g.steps || []).length; si++) {
        const step = g.steps[si]
        checkBlocks(lang, g.id, `steps[${si}](${step.id}).content`, step.content)
        totalBlocks += (step.content || []).length
      }
    }
  }
  if (errors.length) {
    console.log(`\n✗ ${errors.length} content-kind error(s):`)
    errors.forEach(e => console.log('  ' + e))
    process.exit(1)
  }
  console.log(`✓ Content block kinds valid across ${LANGS.join('/')} (~${totalBlocks} top-level blocks scanned per lang).`)
}

main().catch(err => { console.error(err); process.exit(1) })
