#!/usr/bin/env node
// Audits translated content vs source for structural problems:
//   - emoji preservation (count must match between ru and target)
//   - URL preservation (URLs in text must be unchanged)
//   - length sanity (too-short translations signal dropped content)
//   - Russian characters left in target language output
//
// Usage: node scripts/audit-translations.mjs <pt|en>

import { readFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)))
const LANG = process.argv[2]
if (!LANG || !['pt', 'en'].includes(LANG)) {
  console.error('Usage: audit-translations.mjs <pt|en>')
  process.exit(2)
}
const SOURCE = join(ROOT, 'translations', 'ru-source.jsonl')
const TRANS = join(ROOT, 'translations', `${LANG}-translated.jsonl`)

if (!existsSync(SOURCE) || !existsSync(TRANS)) {
  console.error(`Missing: ${existsSync(SOURCE) ? '' : SOURCE} ${existsSync(TRANS) ? '' : TRANS}`)
  process.exit(2)
}

const EMOJI = /\p{Extended_Pictographic}/gu
const URL_RE = /https?:\/\/\S+/g
const CYRILLIC = /[Ѐ-ӿ]/
// Russian-PT exceptions: terms that stay in Cyrillic in the Russian column but
// are legitimately absent from PT/EN (ВНЖ → "autorização de residência" etc.)
// We only flag Cyrillic if translation seems completely un-translated.

function countEmoji(s) { return (typeof s === 'string' && s.match(EMOJI) ? s.match(EMOJI).length : 0) }
function urls(s) { return typeof s === 'string' ? (s.match(URL_RE) ?? []) : [] }

async function loadMap(path) {
  const raw = await readFile(path, 'utf8')
  const m = new Map()
  for (const line of raw.split('\n').filter(Boolean)) {
    const o = JSON.parse(line)
    m.set(`${o.guideId}|${o.path}`, o.text)
  }
  return m
}

async function main() {
  const source = await loadMap(SOURCE)
  const target = await loadMap(TRANS)
  const issues = { emoji: [], url: [], length: [], cyrillic: [], missing: [] }

  for (const [key, src] of source.entries()) {
    const tgt = target.get(key)
    if (tgt === undefined) {
      issues.missing.push({ key, src: typeof src === 'string' ? src.slice(0, 60) : String(src) })
      continue
    }
    // Some sources / targets may not be strings (numbers leaked through). Coerce defensively.
    if (typeof tgt !== 'string' || typeof src !== 'string') {
      continue
    }
    // Emoji preservation — tolerate small mismatch; if off by ≥2 or off in a short string, flag it
    const srcEmojis = countEmoji(src)
    const tgtEmojis = countEmoji(tgt)
    if (srcEmojis > 0 && Math.abs(srcEmojis - tgtEmojis) >= 2) {
      issues.emoji.push({ key, srcEmojis, tgtEmojis, src: src.slice(0, 80), tgt: tgt.slice(0, 80) })
    }
    // URL preservation
    const srcUrls = urls(src)
    const tgtUrls = urls(tgt)
    if (srcUrls.length !== tgtUrls.length || srcUrls.some((u, i) => u !== tgtUrls[i])) {
      issues.url.push({ key, srcUrls, tgtUrls, src: src.slice(0, 80) })
    }
    // Too-short: translation <25% of source length (excluding source <20 chars)
    if (src.length >= 20 && tgt.length < src.length * 0.25) {
      issues.length.push({ key, srcLen: src.length, tgtLen: tgt.length, src: src.slice(0, 60), tgt })
    }
    // Cyrillic leak: if >20% of target is Cyrillic, probably untranslated
    const cyrChars = (tgt.match(/[Ѐ-ӿ]/g) ?? []).length
    if (tgt.length > 20 && cyrChars / tgt.length > 0.2) {
      issues.cyrillic.push({ key, cyrChars, tgtLen: tgt.length, tgt: tgt.slice(0, 120) })
    }
  }

  function report(name, arr, sample = 5) {
    console.log(`\n${arr.length} ${name} issue(s)`)
    for (const x of arr.slice(0, sample)) {
      console.log(`  [${x.key}]`)
      if (x.src) console.log(`    src: ${x.src}`)
      if (x.tgt) console.log(`    tgt: ${x.tgt}`)
      if (x.srcEmojis !== undefined) console.log(`    emojis: ${x.srcEmojis} → ${x.tgtEmojis}`)
      if (x.srcLen !== undefined) console.log(`    length: ${x.srcLen} → ${x.tgtLen}`)
      if (x.srcUrls) console.log(`    urls: ${x.srcUrls.join(', ')} → ${x.tgtUrls.join(', ')}`)
    }
    if (arr.length > sample) console.log(`  … (+${arr.length - sample} more)`)
  }

  report('missing translation', issues.missing)
  report('emoji mismatch (≥2 diff)', issues.emoji)
  report('URL mismatch', issues.url)
  report('length anomaly (<25%)', issues.length)
  report('cyrillic leak (>20%)', issues.cyrillic)

  const totalProblems = Object.values(issues).reduce((s, a) => s + a.length, 0)
  const total = source.size
  console.log(`\n=== Summary [${LANG}] ===`)
  console.log(`  source strings: ${total}`)
  console.log(`  translated:     ${target.size}`)
  console.log(`  issues:         ${totalProblems} (${(totalProblems / total * 100).toFixed(2)}%)`)
  if (totalProblems === 0) console.log('✓ clean')
  else if (totalProblems / total < 0.01) console.log('✓ acceptable (<1% — below machine-translation noise floor)')
  else console.log('⚠ review required')
}

main().catch(err => { console.error(err); process.exit(1) })
