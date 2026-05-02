#!/usr/bin/env node
// Sends each guide to GPT-5.5 with a "clean Russian" instruction.
// Returns a fixed mjs file that keeps semantic identity but uses pure Russian
// except for: Portuguese legal/proper nouns (NIF, AIMA, Lei XX/YYYY, Código Civil etc),
// abbreviations widely used (DRE, IRS, IBAN), and brand names.

import { readdir, readFile, writeFile } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = dirname(dirname(fileURLToPath(import.meta.url))) // /Users/alex/DEVELOPER/hackportugal-content
const CONTENT_DIR = join(ROOT, 'content', 'ru')
const OUT_DIR = join(ROOT, 'cleanup-out')
const KEY = process.env.XRELAY_KEY
const MODEL = 'gpt-5.5'

if (!KEY) { console.error('Set XRELAY_KEY'); process.exit(2) }

const SYSTEM_PROMPT = `You are an editor cleaning Russian-language content for an iOS app.

CONTEXT: The content is reference material for Russian speakers living in Portugal. It currently contains a sloppy mix of Russian + English words + Portuguese terms inline. The user wants CLEAN RUSSIAN with foreign terms only where genuinely needed.

RULES — what to KEEP in original (do NOT translate):
1. Portuguese legal/regulatory proper nouns: NIF, NISS, AIMA, SEF, IRN, AIMA, ePortugal, Finanças, Portal das Finanças, Cartão de Cidadão, Chave Móvel Digital, Segurança Social, SNS, SNS 24, IRS, IRC, IMI, IMT, IVA, ISV, IUC, IAS, SMN, Multibanco, MB WAY, Via Verde, CPLP, ARI, Golden Visa
2. Visa codes: D1, D2, D3, D4, D6, D7, D8
3. Law references: Lei 23/2007, Lei Orgânica 1/2013, Decreto-Lei 26/2022, Código Civil, Código do IRS, Portaria 480-A/2025/1, Decreto AR 17/XVII, Acórdão 1133/2025
4. Portuguese institution names that have no good Russian equivalent: Junta de Freguesia, Câmara Municipal, Conservatória do Registo Civil, Centro de Saúde, Loja de Cidadão, Espaço Cidadão, Ordem dos Advogados
5. Specific Portuguese procedure names: Manifestação de Interesse (MdI), Reagrupamento Familiar, Atestado de Residência, Recibo Verde, Início de Atividade, Caducidade
6. Brand/company names: Galp, Worten, Continente, Pingo Doce, Lidl, Auchan, Wise, Revolut, Tesla, etc.
7. International standards: GDPR, FATCA, CRS, NHR, IFICI, SEPA, EU, OECD, EHIC, IBAN
8. Currency symbols and amounts: € 537,13 (use comma decimal as Portuguese, with proper spacing)

RULES — what to TRANSLATE to Russian:
1. Common English words misplaced in Russian text: "third country" → "третьих стран"; "if" → "если"; "for" → "для"; "и" only where needed; "thirdCountry" inline → "граждан третьих стран"; "remote" → "удалённо"; "renewal" → "продление"; "appointment" → "приём"; "with" → "с"; "and" → "и"; "or" → "или"; "online" → "онлайн" (only if there's no Portuguese equivalent reason)
2. Portuguese words used in description that have a clear Russian equivalent: "expensive" → "дорогой"; "fully" → "полностью"; "at" → "в"; "before" → "до"; "after" → "после"; "for example" → "например"
3. Inline-mixed clauses like "вне ЕС" should stay (correct Russian); "за рубежом" should stay
4. "advokat" / "advogado" — when used generically → "юрист" or "адвокат"; "advogado из Ordem dos Advogados" stays as is (proper noun reference)
5. "atendimento" used as a regular Russian noun → "приём"; but specific PT term "Atendimento Complementar" stays
6. Markup hints: keep all emoji, markdown bold (**...**), \\n, structure

ALSO IMPORTANT:
- Do NOT change any factual content
- Do NOT change any IDs, file paths, URLs, dates, numbers, or law citations
- Do NOT add or remove sections; preserve guide structure exactly
- Output ONLY the corrected JavaScript module export — same syntax, same fields
- Keep all keys, audience filters, citizenship arrays, statuses, IDs unchanged

Return the FULL CORRECTED MJS FILE starting with "export default {" and ending with "}". No explanation, no fences.`

async function ask(prompt) {
  const ctrl = new AbortController()
  const timer = setTimeout(() => ctrl.abort(), 600000)
  try {
    const res = await fetch('https://api.xrelay.online/v1/chat/completions', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${KEY}`, 'Content-Type': 'application/json', 'Accept': 'text/event-stream' },
      body: JSON.stringify({ model: MODEL, stream: true, messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: prompt }
      ] }),
      signal: ctrl.signal,
    })
    if (!res.ok) throw new Error(`API ${res.status}: ${(await res.text()).slice(0, 200)}`)
    const reader = res.body.getReader()
    const dec = new TextDecoder()
    let buf = '', text = ''
    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      buf += dec.decode(value, { stream: true })
      const events = buf.split('\n\n')
      buf = events.pop() ?? ''
      for (const ev of events) {
        const dl = ev.split('\n').find(l => l.startsWith('data:'))
        if (!dl) continue
        const p = dl.slice(5).trim()
        if (p === '[DONE]') continue
        try {
          const o = JSON.parse(p)
          const d = o.choices?.[0]?.delta?.content
          if (typeof d === 'string') text += d
        } catch {}
      }
    }
    return text
  } finally { clearTimeout(timer) }
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

async function processGuide(filePath) {
  const original = await readFile(filePath, 'utf8')
  const guideId = filePath.split('/').pop().replace('.mjs', '')
  const outPath = join(OUT_DIR, `${guideId}.mjs`)

  // Skip if already processed
  try {
    await readFile(outPath, 'utf8')
    return { guideId, status: 'cached' }
  } catch {}

  const userPrompt = `Source guide:\n\`\`\`javascript\n${original}\n\`\`\`\n\nReturn the cleaned-Russian version of this file.`
  const result = await ask(userPrompt)

  // Extract export default block
  const m = result.match(/export\s+default\s*\{[\s\S]*\n\}\s*$/m) || result.match(/export\s+default\s*\{[\s\S]*\}/m)
  if (!m) {
    console.error(`  ! ${guideId}: no valid export default in response`)
    return { guideId, status: 'failed' }
  }
  const cleaned = m[0]
  // Sanity: check that key fields are still present
  for (const key of ['id:', 'categoryId:', 'tldr:']) {
    if (!cleaned.includes(key)) {
      console.error(`  ! ${guideId}: missing ${key}`)
      return { guideId, status: 'invalid' }
    }
  }
  await writeFile(outPath, cleaned)
  return { guideId, status: 'cleaned', size: cleaned.length }
}

async function main() {
  const { mkdir } = await import('node:fs/promises')
  await mkdir(OUT_DIR, { recursive: true })

  const args = process.argv.slice(2)
  let target = []
  if (args[0] === '--all') {
    target = await walk(CONTENT_DIR)
  } else if (args[0] === '--category') {
    const cat = args[1]
    target = (await walk(CONTENT_DIR)).filter(f => f.includes(`/content/ru/${cat}/`))
  } else if (args[0]) {
    const id = args[0]
    target = (await walk(CONTENT_DIR)).filter(f => f.endsWith(`/${id}.mjs`))
  } else {
    console.error('Usage: cleanup-ru.mjs <guide-id> | --category X | --all')
    process.exit(2)
  }

  console.log(`Cleaning ${target.length} guides…\n`)
  let cleaned = 0, cached = 0, failed = 0
  for (let i = 0; i < target.length; i++) {
    const f = target[i]
    process.stdout.write(`[${i+1}/${target.length}] ${f.split('/').slice(-2).join('/')} … `)
    try {
      const r = await processGuide(f)
      console.log(r.status)
      if (r.status === 'cleaned') cleaned++
      else if (r.status === 'cached') cached++
      else failed++
    } catch (e) {
      console.log(`ERROR: ${e.message}`)
      failed++
    }
  }
  console.log(`\nDone — cleaned: ${cleaned}, cached: ${cached}, failed: ${failed}`)
}

main().catch(e => { console.error(e); process.exit(1) })
