#!/usr/bin/env node
// Sends a guide (or a batch) to GPT-5.5 with a verifier prompt and prints structured criticism.
//
// Usage:
//   XRELAY_KEY=xr_... node scripts/verify-with-gpt55.mjs <guide-id>
//   XRELAY_KEY=xr_... node scripts/verify-with-gpt55.mjs --category residence_permit
//   XRELAY_KEY=xr_... node scripts/verify-with-gpt55.mjs --all      # все 182 гайда (дорого, ~30 мин)
//   XRELAY_KEY=xr_... node scripts/verify-with-gpt55.mjs --random 5 # случайные 5
//
// Сохраняет результат в verification/<guideId>.json для последующего сравнения.
//
// Промпт настроен на «спор»: модель должна найти **фактически устаревшее**, противоречия,
// неточные суммы/даты/URL и предложить конкретные исправления. Если всё ок — pусть пишет
// "no_issues" — это тоже валидный результат.

import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)))
const CONTENT_DIR = join(ROOT, 'content', 'ru')
const OUT_DIR = join(ROOT, 'verification')

const KEY = process.env.XRELAY_KEY
const MODEL = process.env.XRELAY_MODEL ?? 'gpt-5.5'
const BASE_URL = process.env.XRELAY_BASE_URL ?? 'https://api.xrelay.online/v1'

if (!KEY) {
  console.error('Set XRELAY_KEY env var')
  process.exit(2)
}

async function walk(dir) {
  const out = []
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name)
    if (e.isDirectory()) out.push(...await walk(p))
    else if (e.isFile() && e.name.endsWith('.mjs') && !e.name.startsWith('_')) out.push(p)
  }
  return out
}

const SYSTEM_PROMPT = `You are a Portuguese immigration / tax / daily-life expert reviewing reference content for accuracy.

The author wrote a guide for Russian-speaking expats living in or moving to Portugal. Your job: find what is **factually wrong, outdated, or misleading** as of April 2026. Be opinionated and specific.

Look for:
1. Outdated values (IAS for 2026 = €537.13, SMN = €920, AIMA fee table changed 01.03.2026, Lei 61/2025 in force since 23.10.2025 not 31.12.2025, new nationality law approved 01.04.2026 awaiting promulgation)
2. Wrong URLs or dead references
3. Contradictions inside the guide
4. Missing critical caveats (e.g. "this only applies to CPLP" when relevant)
5. Numbers that don't add up (cost ranges, percentages)
6. Confusing visa codes (D1/D2/D3/D4/D6/D7/D8 — each has specific use)
7. Names of agencies (SEF replaced by AIMA in October 2023; NHR replaced by IFICI in 2024)
8. Sources that should be there but aren't (govt source for sensitive category)

Return strict JSON only — no markdown wrapping, no explanation outside JSON. Schema:
{
  "verdict": "ok" | "minor_issues" | "major_issues",
  "summary": "one-sentence summary",
  "issues": [
    {
      "severity": "critical" | "major" | "minor",
      "where": "path inside guide (e.g. 'steps[2].content[1].items[3]' or 'tldr' or 'costs[0]')",
      "current": "current text or value (quote)",
      "problem": "what's wrong",
      "suggestion": "concrete fix — what to write instead",
      "confidence": "high" | "medium" | "low",
      "source": "if your suggestion has a verifiable source, name it (e.g. Portaria 480-A/2025/1)"
    }
  ],
  "missing_topics": ["sub-topic the guide should mention but doesn't"]
}

If the guide is essentially correct return {"verdict": "ok", "summary": "...", "issues": [], "missing_topics": []}.
Be strict but fair. If you're not certain — set confidence to low or skip the issue. False positives are worse than false negatives because they create churn.`

// Stream chat-completions over SSE. Reasoning models (gpt-5.5) can think for 60-120s
// and Cloudflare in front of xrelay times out at ~60s for non-streaming requests.
// SSE keeps the connection alive via incremental chunks.
async function askOnce(prompt) {
  const ctrl = new AbortController()
  const timer = setTimeout(() => ctrl.abort(), 300000)
  try {
    const res = await fetch(`${BASE_URL}/chat/completions`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${KEY}`,
        'Content-Type': 'application/json',
        'Accept': 'text/event-stream'
      },
      body: JSON.stringify({
        model: MODEL,
        stream: true,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: prompt }
        ]
      }),
      signal: ctrl.signal
    })
    if (!res.ok) {
      const t = await res.text()
      throw new Error(`API ${res.status}: ${t.slice(0, 200)}`)
    }

    // Parse SSE stream. Each event:  data: {...JSON delta...}\n\n  ; final  data: [DONE]
    const reader = res.body.getReader()
    const decoder = new TextDecoder()
    let buffer = ''
    let text = ''
    let usage
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
          if (obj.usage) usage = obj.usage
        } catch { /* malformed chunk — skip */ }
      }
    }
    return { text, usage }
  } finally {
    clearTimeout(timer)
  }
}

async function ask(prompt) {
  let lastErr
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      return await askOnce(prompt)
    } catch (e) {
      lastErr = e
      const transient = /504|502|503|timeout|abort/i.test(String(e.message ?? e))
      if (!transient || attempt === 3) throw e
      const delay = 4000 * attempt
      console.warn(`     retry ${attempt} in ${delay/1000}s (${e.message?.slice(0, 80)})`)
      await new Promise(r => setTimeout(r, delay))
    }
  }
  throw lastErr
}

function extractJson(text) {
  // Model may wrap JSON in ```json ... ``` or include preamble. Be lenient.
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/)
  const candidate = fenced ? fenced[1] : text
  const start = candidate.indexOf('{')
  const end = candidate.lastIndexOf('}')
  if (start === -1 || end === -1) throw new Error(`No JSON object in: ${text.slice(0, 200)}`)
  return JSON.parse(candidate.slice(start, end + 1))
}

async function verifyGuide(guidePath) {
  const mod = await import(pathToFileURL(guidePath).href)
  const guide = mod.default
  const json = JSON.stringify(guide, null, 2)
  // Truncate massive guides to fit context comfortably (most are < 6 KB)
  const truncated = json.length > 25000 ? json.slice(0, 25000) + '\n...[truncated]' : json
  const { text, usage } = await ask(`Guide source (pretty-printed JSON, language=ru):\n\n${truncated}`)
  let verdict
  try {
    verdict = extractJson(text)
  } catch (e) {
    verdict = { verdict: 'parse_error', summary: e.message, raw: text.slice(0, 500), issues: [], missing_topics: [] }
  }
  return { guideId: guide.id, categoryId: guide.categoryId, verdict, usage, model: MODEL }
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true })
  const args = process.argv.slice(2)

  const allFiles = await walk(CONTENT_DIR)
  let target = []

  if (args.length === 0) {
    console.error('Usage: verify-with-gpt55.mjs <guide-id> | --category <id> | --random N | --all')
    process.exit(2)
  } else if (args[0] === '--all') {
    target = allFiles
  } else if (args[0] === '--category') {
    const cat = args[1]
    target = allFiles.filter(f => f.includes(`/content/ru/${cat}/`))
  } else if (args[0] === '--random') {
    const n = Number(args[1] ?? 5)
    const shuffled = [...allFiles].sort(() => Math.random() - 0.5)
    target = shuffled.slice(0, n)
  } else {
    // single id
    const id = args[0]
    target = allFiles.filter(f => f.endsWith(`/${id}.mjs`))
    if (target.length === 0) {
      console.error(`Guide not found: ${id}`)
      process.exit(2)
    }
  }

  console.log(`Verifying ${target.length} guide(s) with ${MODEL}…\n`)

  const summary = []
  for (let i = 0; i < target.length; i++) {
    const f = target[i]
    process.stdout.write(`[${i + 1}/${target.length}] ${f.replace(ROOT + '/', '')} … `)
    try {
      const result = await verifyGuide(f)
      const outPath = join(OUT_DIR, `${result.guideId}.json`)
      await writeFile(outPath, JSON.stringify(result, null, 2))
      const v = result.verdict
      const issueCount = (v.issues ?? []).length
      const verdict = v.verdict ?? 'unknown'
      console.log(`${verdict} (${issueCount} issue${issueCount === 1 ? '' : 's'})`)
      summary.push({ id: result.guideId, verdict, issues: issueCount, summary: v.summary })
      if (verdict === 'major_issues' || verdict === 'parse_error') {
        for (const it of (v.issues ?? []).slice(0, 3)) {
          console.log(`     [${it.severity}] ${it.where}: ${it.problem}`)
        }
      }
    } catch (e) {
      console.log(`ERROR: ${e.message}`)
      summary.push({ id: f, verdict: 'request_error', error: e.message })
    }
  }

  await writeFile(join(OUT_DIR, '_summary.json'), JSON.stringify(summary, null, 2))
  const counts = summary.reduce((a, x) => { a[x.verdict] = (a[x.verdict] ?? 0) + 1; return a }, {})
  console.log(`\n=== Summary ===`)
  for (const [k, v] of Object.entries(counts)) console.log(`  ${k}: ${v}`)
  console.log(`Details in ${OUT_DIR}/`)
}

main().catch(e => { console.error(e); process.exit(1) })
