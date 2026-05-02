#!/usr/bin/env node
// Translates RU guide(s) into EN and/or PT-PT via GPT-5.5 (xrelay), one whole .mjs file at a time.
// Replaces the older split-translate/assemble pipeline that left step content untranslated.
//
// Usage:
//   XRELAY_KEY=xr_... node scripts/translate-whole-file.mjs <guide-id>
//   XRELAY_KEY=xr_... node scripts/translate-whole-file.mjs --ids ids.txt           # one id per line
//   XRELAY_KEY=xr_... node scripts/translate-whole-file.mjs --ids ids.txt --langs pt # PT only
//
// Flags:
//   --ids <file>      Newline-separated list of guide IDs to translate
//   --langs <list>    Comma-separated; default 'en,pt'
//   --concurrency N   How many guides processed in parallel (default 3)
//   --force           Overwrite existing files (otherwise skip if target exists)
//
// Output: writes content/{lang}/<category>/<id>.mjs preserving the same category/id/struct as RU.
// On failure (timeout, API error, malformed reply), logs and continues.

import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)))
const KEY = process.env.XRELAY_KEY
const MODEL = process.env.XRELAY_MODEL ?? 'gpt-5.5'
const BASE_URL = process.env.XRELAY_BASE_URL ?? 'https://api.xrelay.online/v1'

if (!KEY) {
  console.error('Set XRELAY_KEY env var')
  process.exit(2)
}

// ---- arg parsing ----
const args = process.argv.slice(2)
let idsFile = null
let langs = ['en', 'pt']
let concurrency = 3
let force = false
const positional = []
for (let i = 0; i < args.length; i++) {
  const a = args[i]
  if (a === '--ids') idsFile = args[++i]
  else if (a === '--langs') langs = args[++i].split(',').map(s => s.trim()).filter(Boolean)
  else if (a === '--concurrency') concurrency = Number(args[++i])
  else if (a === '--force') force = true
  else positional.push(a)
}

let IDS = []
if (idsFile) {
  IDS = (await readFile(idsFile, 'utf8')).split('\n').map(s => s.trim()).filter(Boolean)
} else if (positional.length) {
  IDS = positional
} else {
  console.error('Provide guide id(s) or --ids <file>')
  process.exit(2)
}

console.log(`Translating ${IDS.length} guide(s) × ${langs.length} lang(s) = ${IDS.length * langs.length} calls, concurrency=${concurrency}, force=${force}`)

// ---- find RU source ----
async function findGuidePath(id) {
  async function walk(dir) {
    const out = []
    for (const e of await readdir(dir, { withFileTypes: true })) {
      const p = join(dir, e.name)
      if (e.isDirectory()) out.push(...await walk(p))
      else if (e.isFile() && e.name === `${id}.mjs`) out.push(p)
    }
    return out
  }
  const found = await walk(join(ROOT, 'content', 'ru'))
  return found[0]
}

const SYSTEM = `You translate Russian iOS app guide content for an immigration/expat reference app.

OUTPUT FORMAT:
Return ONLY valid JavaScript ES module source code starting with "export default {" and ending with "}". No prose, no markdown fences, nothing else.

CRITICAL RULES:
1. Preserve verbatim: id, categoryId, audience, editorialVoice, sources URLs, costs.amountEUR, lastVerified, verifyIntervalDays, kind values, all step IDs.
2. Translate: title, tldr, tags (translated to lowercase target-lang tokens), all step content "title"/"text"/"items" strings, costs[].label/note, sources[].title.
3. PT-PT (NOT Brazilian): formal "você" or impersonal. Use European spelling/vocabulary. EN-GB: organise/neighbour/licence, expat register.
4. KEEP IN PORTUGUESE in BOTH translations: NIF, NISS, AIMA, Finanças, SNS, Segurança Social, Cartão de Cidadão, Chave Móvel Digital (CMD), IRS, IMI, IMT, IVA, ISV, IUC, IAS, SMN, Multibanco, MB WAY, Creche, Jardim de Infância, Junta de Freguesia, Câmara Municipal, Alojamento Local (AL), Manifestação de Interesse (MdI), Reagrupamento Familiar, Via Verde, CPLP, Conservatória, IRN, recibos verdes, ePortugal, atestado de residência, visa codes (D1-D8), CRUE. Law refs (Lei 23/2007, Decreto-Lei 37-A/2024, art. 88) verbatim.
5. Currency: PT "537,13 €" (space, comma); EN "€537.13" (no space, dot).
6. Russian-specific: ВНЖ → "autorização de residência" (PT) / "residence permit" (EN). РФ → "Federação Russa"/"Russian Federation". Бразилия → Brasil/Brazil.
7. Preserve emoji, **bold**, line breaks, parenthetical structure exactly.
8. NO Cyrillic characters in output. Translate or transliterate everything.`

async function ask(prompt) {
  const ctrl = new AbortController()
  const timer = setTimeout(() => ctrl.abort(), 900000)
  try {
    const res = await fetch(`${BASE_URL}/chat/completions`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${KEY}`, 'Content-Type': 'application/json', 'Accept': 'text/event-stream' },
      body: JSON.stringify({
        model: MODEL,
        stream: true,
        messages: [
          { role: 'system', content: SYSTEM },
          { role: 'user', content: prompt }
        ]
      }),
      signal: ctrl.signal
    })
    if (!res.ok) throw new Error(`API ${res.status}: ${(await res.text()).slice(0, 200)}`)
    const reader = res.body.getReader()
    const decoder = new TextDecoder()
    let buffer = '', text = ''
    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      buffer += decoder.decode(value, { stream: true })
      const events = buffer.split('\n\n')
      buffer = events.pop() ?? ''
      for (const ev of events) {
        const dataLine = ev.split('\n').find(l => l.startsWith('data:'))
        if (!dataLine) continue
        const payload = dataLine.slice(5).trim()
        if (payload === '[DONE]') continue
        try {
          const obj = JSON.parse(payload)
          const delta = obj.choices?.[0]?.delta?.content
          if (typeof delta === 'string') text += delta
        } catch {}
      }
    }
    return text
  } finally {
    clearTimeout(timer)
  }
}

function extractModuleCode(text) {
  let t = text.trim()
  if (t.startsWith('```')) t = t.replace(/^```(?:javascript|js|mjs)?\n?/, '').replace(/\n?```\s*$/, '')
  const start = t.indexOf('export default {')
  if (start < 0) return null
  return t.slice(start)
}

async function translateGuide(id, lang) {
  try {
    const ruPath = await findGuidePath(id)
    if (!ruPath) { console.error(`[${id}] no RU source`); return false }
    const relCategory = ruPath.split('/content/ru/')[1].split('/')[0]
    const outPath = join(ROOT, 'content', lang, relCategory, `${id}.mjs`)

    if (!force && existsSync(outPath)) {
      console.log(`[${id}/${lang}] exists, skipping (use --force to overwrite)`)
      return true
    }

    const ruSource = await readFile(ruPath, 'utf8')
    const userPrompt = `Translate this entire .mjs guide file from Russian into ${lang === 'pt' ? 'European Portuguese (PT-PT)' : 'British English (EN-GB)'}. Output ONLY the resulting .mjs file content (starting with "export default {").

Source:
\`\`\`javascript
${ruSource}
\`\`\``

    const reply = await ask(userPrompt)
    const code = extractModuleCode(reply)
    if (!code) { console.error(`[${id}/${lang}] failed to extract module code`); return false }
    await mkdir(dirname(outPath), { recursive: true })
    await writeFile(outPath, code + '\n')
    return true
  } catch (e) {
    console.error(`[${id}/${lang}] ERROR:`, e.message ?? e)
    return false
  }
}

// ---- run with concurrency ----
const queue = [...IDS]
let okCount = 0, failCount = 0, doneCount = 0
async function worker() {
  while (queue.length) {
    const id = queue.shift()
    if (!id) break
    const results = await Promise.all(langs.map(l => translateGuide(id, l)))
    doneCount++
    if (results.every(Boolean)) okCount++; else failCount++
    const flags = langs.map((l, i) => `${l.toUpperCase()}=${results[i] ? '✓' : '✗'}`).join(' ')
    console.log(`[${doneCount}/${IDS.length}] ${id} ${flags}`)
  }
}

const workers = Array.from({ length: concurrency }, () => worker())
await Promise.all(workers)

console.log(`\nDone. All langs OK: ${okCount}, partial/failed: ${failCount}, total: ${IDS.length}`)
console.log(`Recommended next: LANGS=ru,pt,en npm run build && npm run validate:translations`)
