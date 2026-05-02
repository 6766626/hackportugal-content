#!/usr/bin/env node
// Translates ru-source.jsonl → {lang}-translated.jsonl.
//
// Providers:
//   PROVIDER=openai      (default)  — uses OPENAI_API_KEY, default model gpt-4o-mini
//   PROVIDER=anthropic              — uses ANTHROPIC_API_KEY, default model claude-sonnet-4-6
//
// Usage:
//   OPENAI_API_KEY=... node scripts/translate.mjs pt
//   ANTHROPIC_API_KEY=... PROVIDER=anthropic node scripts/translate.mjs en
//
// Caches per-string translations in translations/cache-{lang}.json keyed by
// sha256(source + glossary). Re-running skips unchanged strings.

import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)))
const TRANSLATIONS_DIR = join(ROOT, 'translations')

const LANG = process.argv[2]
if (!LANG || !['pt', 'en'].includes(LANG)) {
  console.error('Usage: translate.mjs <pt|en>')
  process.exit(2)
}

const PROVIDER = (process.env.PROVIDER ?? 'openai').toLowerCase()
const BATCH_SIZE = Number(process.env.TRANSLATE_BATCH ?? 15)
const MAX_GUIDES = process.env.TRANSLATE_MAX_GUIDES ? Number(process.env.TRANSLATE_MAX_GUIDES) : Infinity
const START_GUIDE = process.env.TRANSLATE_START_GUIDE ? Number(process.env.TRANSLATE_START_GUIDE) : 0

const SOURCE_PATH = join(TRANSLATIONS_DIR, 'ru-source.jsonl')
const OUT_PATH = join(TRANSLATIONS_DIR, `${LANG}-translated.jsonl`)
const CACHE_PATH = join(TRANSLATIONS_DIR, `cache-${LANG}.json`)
const GLOSSARY_PATH = join(TRANSLATIONS_DIR, 'glossary.md')

// --- provider config ---
const OPENAI_KEY = process.env.OPENAI_API_KEY
const OPENAI_MODEL = process.env.OPENAI_MODEL ?? 'gpt-4o-mini'
const ANTHROPIC_KEY = process.env.ANTHROPIC_API_KEY
const ANTHROPIC_MODEL = process.env.ANTHROPIC_MODEL ?? 'claude-sonnet-4-6'

const DRY_RUN = (PROVIDER === 'openai' && !OPENAI_KEY) || (PROVIDER === 'anthropic' && !ANTHROPIC_KEY)

function sha256(s) { return createHash('sha256').update(s).digest('hex') }

async function loadCache() {
  if (!existsSync(CACHE_PATH)) return {}
  return JSON.parse(await readFile(CACHE_PATH, 'utf8'))
}
async function saveCache(cache) {
  await writeFile(CACHE_PATH, JSON.stringify(cache, null, 2))
}
async function loadSource() {
  const raw = await readFile(SOURCE_PATH, 'utf8')
  return raw.split('\n').filter(Boolean).map(line => JSON.parse(line))
}

function buildSystemPrompt(glossary) {
  const languageInstruction = LANG === 'pt'
    ? 'Translate Russian source text into European Portuguese (PT-PT, NOT Brazilian). Use formal register (você or impersonal constructions). Use European spelling and vocabulary. Avoid Brazilianisms.'
    : 'Translate Russian source text into British English (EN-GB: neighbour, organise, licence). Neutral helpful expat register.'
  return `You are translating reference content for an iOS app that helps immigrants navigate life in Portugal.

${languageInstruction}

CRITICAL RULES:
1. Preserve ALL emoji verbatim (🏛️ ✅ ❌ 📅 💰 🇵🇹 🇷🇺 etc.).
2. Preserve inline Markdown bold (**text**), \\n line breaks, parenthetical structure, bullet-style prefixes ("📅 ", "💰 ", etc.).
3. Portuguese legal/bureaucratic terms ALWAYS stay in Portuguese. DO NOT translate: NIF, NISS, AIMA, Finanças, Portal das Finanças, SNS, SNS 24, Segurança Social, Cartão de Cidadão, IRS, IRC, IMI, IMT, IVA, IUC, ISV, IAS, SMN, Multibanco, MB WAY, Creche, Jardim de Infância, Junta de Freguesia, Câmara Municipal, Alojamento Local, AL, Manifestação de Interesse, MdI, Reagrupamento Familiar, Golden Visa, ARI, Estatuto de Igualdade, Via Verde, CPLP, Conservatória, Conservatória dos Registos Centrais, IRN, CMD, Chave Móvel Digital, Proteção Temporária, Lei, Decreto-Lei, Portaria, recibos verdes, atestado de residência. Same for visa codes (D1, D2, D3, D4, D6, D7, D8). For EN translation, on the FIRST mention of an obscure term you MAY add a short parenthetical gloss, e.g. "NIF (Portuguese tax ID)" — but keep it brief and don't repeat.
4. Preserve URLs, phone numbers, addresses, law article references (Lei 23/2007, Decreto-Lei 37-A/2024, art. 88, ст. 6).
5. Russian-specific terms: ВНЖ / вид на жительство → PT "autorização de residência" / "título de residência" per context; EN "residence permit". Preserve ISO date strings (2026-04-22) unchanged.
6. Dates written in prose: translate naturally. PT "1 de abril de 2026", EN "1 April 2026".
7. Currency: PT "537,13 €" (space before €, comma decimal); EN "€537.13" (no space, dot decimal).
8. Do NOT add commentary, translator notes, or explanations. Output only the translation strings, nothing else.
9. Do NOT translate proper nouns, app/company names, brand names (ActivoBank, Wise, Revolut, Netflix, etc.).
10. If a source string is already in Portuguese (e.g. a source title), keep as-is but add your translation of any Russian clarifications around it.

Input format: a JSON array of Russian source strings. Output format: a JSON array of translations in the EXACT same order and length. Nothing else.

Glossary reference:
\`\`\`
${glossary.slice(0, 3500)}
\`\`\``
}

// --- OpenAI backend ---
async function callOpenAI(systemPrompt, batch) {
  const userContent = JSON.stringify(batch.map(x => x.text), null, 0)
  const body = {
    model: OPENAI_MODEL,
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: `Source (Russian):\n${userContent}\n\nReturn a JSON array of ${batch.length} translations, same order. Output JSON only.` }
    ],
    response_format: { type: 'json_object' },
    temperature: 0.3
  }
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENAI_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  if (!res.ok) {
    const errText = await res.text()
    throw new Error(`OpenAI API ${res.status}: ${errText.slice(0, 500)}`)
  }
  const data = await res.json()
  const text = data.choices?.[0]?.message?.content ?? ''
  // Model returns an object with an array property. Try common keys.
  let arr
  try {
    const parsed = JSON.parse(text)
    if (Array.isArray(parsed)) {
      arr = parsed
    } else if (Array.isArray(parsed.translations)) {
      arr = parsed.translations
    } else if (Array.isArray(parsed.items)) {
      arr = parsed.items
    } else if (Array.isArray(parsed.result)) {
      arr = parsed.result
    } else {
      // First array-valued property
      const key = Object.keys(parsed).find(k => Array.isArray(parsed[k]))
      if (key) arr = parsed[key]
    }
  } catch {
    // Fallback: regex-extract a bare array
    const m = text.match(/\[[\s\S]*\]/)
    if (m) arr = JSON.parse(m[0])
  }
  if (!Array.isArray(arr) || arr.length !== batch.length) {
    throw new Error(`Translation length mismatch: expected ${batch.length}, got ${arr?.length}. Raw: ${text.slice(0, 300)}`)
  }
  return arr
}

// --- Anthropic backend ---
async function callAnthropic(systemPrompt, batch) {
  const userContent = JSON.stringify(batch.map(x => x.text), null, 0)
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': ANTHROPIC_KEY,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      model: ANTHROPIC_MODEL,
      max_tokens: 8192,
      system: systemPrompt,
      messages: [{ role: 'user', content: userContent }]
    })
  })
  if (!res.ok) {
    const errText = await res.text()
    throw new Error(`Anthropic API ${res.status}: ${errText.slice(0, 500)}`)
  }
  const data = await res.json()
  const text = data.content?.[0]?.text ?? ''
  const m = text.match(/\[[\s\S]*\]/)
  if (!m) throw new Error(`No JSON array in response: ${text.slice(0, 300)}`)
  const arr = JSON.parse(m[0])
  if (!Array.isArray(arr) || arr.length !== batch.length) {
    throw new Error(`Translation length mismatch: expected ${batch.length}, got ${arr?.length}`)
  }
  return arr
}

async function rawBatch(systemPrompt, batch) {
  if (PROVIDER === 'openai') return callOpenAI(systemPrompt, batch)
  return callAnthropic(systemPrompt, batch)
}

/// Robust translation: on length mismatch, split in half and retry halves.
/// Guarantees output[i] corresponds to batch[i]. Single-item batch that mismatches
/// is sent one more time; if still fails, falls back to source text (so build doesn't
/// break; those can be caught by a post-translation audit script).
async function translateBatch(systemPrompt, batch) {
  try {
    return await rawBatch(systemPrompt, batch)
  } catch (err) {
    const msg = String(err.message ?? err)
    const isMismatch = msg.includes('length mismatch')
    if (!isMismatch || batch.length <= 1) {
      if (batch.length === 1) {
        // Last-resort single-item retry; if that also fails, keep source text.
        console.warn(`  [${LANG}] giving up on 1 string after retries: "${batch[0].text.slice(0, 60)}..." — keeping source`)
        return batch.map(x => x.text)
      }
      throw err
    }
    console.warn(`  [${LANG}] batch of ${batch.length} mismatched → splitting`)
    const mid = Math.ceil(batch.length / 2)
    const left = await translateBatch(systemPrompt, batch.slice(0, mid))
    const right = await translateBatch(systemPrompt, batch.slice(mid))
    return [...left, ...right]
  }
}

async function main() {
  const [source, glossary] = await Promise.all([loadSource(), readFile(GLOSSARY_PATH, 'utf8')])
  const cache = await loadCache()
  const systemPrompt = buildSystemPrompt(glossary)
  const glossaryHash = sha256(glossary).slice(0, 16)

  const guideIds = Array.from(new Set(source.map(x => x.guideId)))
  const selectedGuides = new Set(guideIds.slice(START_GUIDE, START_GUIDE + MAX_GUIDES))
  const items = source.filter(x => selectedGuides.has(x.guideId))

  const toTranslate = []
  const results = []
  for (const item of items) {
    const key = sha256(`${glossaryHash}|${item.text}`)
    if (cache[key]) {
      results.push({ ...item, text: cache[key] })
    } else {
      toTranslate.push({ ...item, cacheKey: key })
    }
  }

  console.log(`[${LANG}] total: ${items.length}, cached: ${items.length - toTranslate.length}, to translate: ${toTranslate.length}`)
  console.log(`[${LANG}] provider: ${PROVIDER}, model: ${PROVIDER === 'openai' ? OPENAI_MODEL : ANTHROPIC_MODEL}, batch: ${BATCH_SIZE}`)

  if (DRY_RUN) {
    console.log(`\n[DRY-RUN] ${PROVIDER === 'openai' ? 'OPENAI_API_KEY' : 'ANTHROPIC_API_KEY'} not set.`)
    console.log(`  OPENAI_API_KEY=sk-... node scripts/translate.mjs ${LANG}`)
    console.log(`  PROVIDER=anthropic ANTHROPIC_API_KEY=... node scripts/translate.mjs ${LANG}`)
    console.log(`  TRANSLATE_MAX_GUIDES=N  (first N guides only)`)
    console.log(`  TRANSLATE_START_GUIDE=N (skip first N)`)
    return
  }

  let totalDone = results.length
  const start = Date.now()
  for (let i = 0; i < toTranslate.length; i += BATCH_SIZE) {
    const batch = toTranslate.slice(i, i + BATCH_SIZE)
    let attempts = 0
    let translations
    while (attempts < 3) {
      try {
        translations = await translateBatch(systemPrompt, batch)
        break
      } catch (err) {
        attempts++
        console.warn(`  [${LANG}] batch ${i / BATCH_SIZE + 1} failed attempt ${attempts}: ${err.message}`)
        if (attempts >= 3) throw err
        await new Promise(r => setTimeout(r, 2000 * attempts))
      }
    }
    batch.forEach((item, j) => {
      cache[item.cacheKey] = translations[j]
      results.push({ guideId: item.guideId, path: item.path, text: translations[j] })
    })
    totalDone += batch.length
    const elapsed = ((Date.now() - start) / 1000).toFixed(1)
    console.log(`  [${LANG}] batch ${i / BATCH_SIZE + 1}/${Math.ceil(toTranslate.length / BATCH_SIZE)}: +${batch.length} = ${totalDone}/${items.length} (${elapsed}s)`)
    if ((i / BATCH_SIZE) % 5 === 0) await saveCache(cache)
  }
  await saveCache(cache)

  const indexByKey = new Map(source.map((x, i) => [`${x.guideId}|${x.path}`, i]))
  results.sort((a, b) => (indexByKey.get(`${a.guideId}|${a.path}`) ?? 0) - (indexByKey.get(`${b.guideId}|${b.path}`) ?? 0))

  const jsonl = results.map(x => JSON.stringify({ guideId: x.guideId, path: x.path, text: x.text })).join('\n') + '\n'
  await writeFile(OUT_PATH, jsonl)
  console.log(`\n✓ Wrote ${results.length} translations → ${OUT_PATH}`)
}

main().catch(err => { console.error(err); process.exit(1) })
