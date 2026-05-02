#!/usr/bin/env node
// Content regression tests.
//
// Catches factual regressions that `validate.mjs` (structural) can't see:
// stale IAS/SMN values, outdated AIMA fee table, broken dre.pt roots,
// pre-reform law citations, wrong embassy addresses that were fixed.
//
// Run: `node scripts/test-content.mjs` → exits 0 on pass, 1 on any failure.

import { readdir, readFile } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)))
const CONTENT_DIR = join(ROOT, 'content', 'ru')

const failures = []
function assert(cond, file, message) {
  if (!cond) failures.push({ file, message })
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

async function loadAll() {
  const files = await walk(CONTENT_DIR)
  const guides = []
  for (const f of files) {
    const mod = await import(pathToFileURL(f).href)
    guides.push({ file: f.replace(ROOT + '/', ''), raw: await readFile(f, 'utf8'), data: mod.default })
  }
  return guides
}

function allStrings(obj, acc = []) {
  if (obj == null) return acc
  if (typeof obj === 'string') { acc.push(obj); return acc }
  if (Array.isArray(obj)) { for (const x of obj) allStrings(x, acc); return acc }
  if (typeof obj === 'object') { for (const v of Object.values(obj)) allStrings(v, acc); return acc }
  return acc
}

// -------- Global regression rules --------

function checkNoStaleIAS(file, raw) {
  // Old IAS 522,50 is now €537,13 (Portaria 480-A/2025/1). Allow references with "2025" label.
  const staleMatches = raw.match(/522[,.]50\s?€?/g) || []
  for (const m of staleMatches) {
    // Allow if line explicitly mentions 2025 (historical comparison allowed)
    const line = raw.split('\n').find(l => l.includes(m)) || ''
    if (!/2025/.test(line)) {
      assert(false, file, `stale IAS value "${m}" without 2025 context — use 537,13 € for 2026`)
    }
  }
  // 12× IAS of 522.50 = 6 270 — stale too
  const stale12x = raw.match(/6\s?270\s?€?/g) || []
  for (const m of stale12x) {
    const line = raw.split('\n').find(l => l.includes(m)) || ''
    if (!/2025/.test(line)) {
      assert(false, file, `stale 12× IAS value "${m}" — use 6 445,56 € for 2026`)
    }
  }
}

function checkNoOldAIMAFees(file, raw, data) {
  // €82,30 / €62,65 / €69,30 — pre-March 2026 AIMA fees, replaced by €133 / €307,20 / €351,10
  const forbidden = [/amountEUR:\s*82\.30\b/, /amountEUR:\s*62\.65\b/, /amountEUR:\s*69\.30\b/]
  for (const re of forbidden) {
    if (re.test(raw)) {
      assert(false, file, `contains old AIMA fee matching ${re} — update to new tabela (01.03.2026)`)
    }
  }
}

function checkNoBareDreRoot(file, data) {
  for (const s of data.sources ?? []) {
    if (s.kind === 'law' && /^https?:\/\/(?:www\.)?dre\.pt\/?$/.test(s.url)) {
      assert(false, file, `bare dre.pt root in law source: ${s.title} — link to specific consolidated act`)
    }
  }
}

function checkLei61DateCorrect(file, raw) {
  // Lei 61/2025 вступил в силу 23.10.2025, а не 31.12.2025.
  // Allow 31.12.2025 as "deadline переходного периода" but NOT as "в силе" / "вступил".
  const matches = raw.match(/Lei\s*(?:n[ºo°]?\.?\s*)?61\/2025[^.\n]*31\.12\.2025/gi) || []
  for (const m of matches) {
    if (/вступил|в силе|вступила/i.test(m)) {
      assert(false, file, `Lei 61/2025 incorrectly dated 31.12.2025 — correct is 23.10.2025 (31.12.2025 is MdI transition deadline)`)
    }
  }
}

function checkDecreteLei37WithA(file, raw) {
  // Correct citation is Decreto-Lei 37-A/2024 (with -A), not 37/2024.
  // Match "Decreto-Lei 37/2024" (without -A) — exclude "-A/2024"
  const hits = raw.match(/Decreto-Lei\s*(?:n[ºo°]?\.?\s*)?37\/2024/g) || []
  if (hits.length > 0) {
    assert(false, file, `wrong citation "Decreto-Lei 37/2024" — correct is "Decreto-Lei 37-A/2024"`)
  }
}

function checkPresidentIsSeguroNotMarcelo(file, raw) {
  // After Jan 2026 the President is António José Seguro; referring to "Marcelo" as current President is stale.
  // Allow historical references (text mentions Marcelo with "декабр" / "вето" / "2025").
  if (/Марселу|Marcelo/.test(raw) && /президент/i.test(raw)) {
    const lines = raw.split('\n').filter(l => /Марселу|Marcelo/.test(l))
    for (const line of lines) {
      const lower = line.toLowerCase()
      const historical = /декабр|вето|2025|прошл|бывш|ранее/.test(lower) || /подписани/.test(lower) && /не /.test(lower)
      const presentTense = /действующ|текущ|подпис.{0,20}президент Марселу|президент Марселу подпиш/i.test(line)
      if (presentTense && !historical) {
        assert(false, file, `references Marcelo as current President — since Jan 2026 it's António José Seguro (historical mentions with "декабр/вето/2025" context are OK)`)
      }
    }
  }
}

function checkNoStaleCIPLEFee(file, raw) {
  // CIPLE 2026 = €85, old 72 €
  const matches = raw.match(/CIPLE[^.\n]*72\s?€/gi) || []
  for (const m of matches) {
    assert(false, file, `CIPLE fee "72 €" is outdated — 2026 tariff is 85 €`)
  }
}

function checkEmbassyAddressesFresh(file, raw) {
  // Belarus embassy in Warsaw: ul. Atenska 37 (was wrongly "ul. Bruke 6 / Mokotów")
  if (/Bruke\s*6|Mokot[óo]w/i.test(raw) && /посольств|embaixada/i.test(raw)) {
    assert(false, file, `stale Portuguese embassy Warsaw address (Bruke 6 / Mokotów) — correct is ul. Atenska 37, Saska Kępa`)
  }
  // Russia embassy in Lisbon: Rua Visconde de Santarém 57 (was wrongly "Fernão de Magalhães 31")
  if (/Fern[ãa]o de Magalh[ãa]es\s*31/.test(raw)) {
    assert(false, file, `stale Russian embassy Lisbon address (Fernão de Magalhães 31) — correct is Rua Visconde de Santarém, 57`)
  }
}

function checkDrivingLicence2Years(file, raw) {
  // Iranc licenses (non-EU) действуют 2 года по DL 138/2012, не 185 дней.
  if (/183\s?дн|185\s?дн/.test(raw) && /иностранн(ых|ые)\s+прав|carta.*condu[çc][ãa]o/i.test(raw)) {
    assert(false, file, `stale driving-licence deadline (183/185 days) — correct is 2 years per DL 138/2012`)
  }
}

function checkAIMA2026FeesPresentInKeyFiles(file, data) {
  // For residence_permit + family/reagrupamento guides with costs, expect the 2026 values.
  const isRelevant = (
    data.categoryId === 'residence_permit' ||
    /reagrupamento/.test(data.id) ||
    data.id === 'aima-online-2026'
  )
  if (!isRelevant || !Array.isArray(data.costs) || data.costs.length === 0) return
  const hasAIMAFee = data.costs.some(c =>
    /AIMA/i.test(c.label ?? '') ||
    /ВНЖ/i.test(c.label ?? '') ||
    /art\.\s*7[56]/i.test(c.label ?? '')
  )
  if (!hasAIMAFee) return
  const has2026Values = data.costs.some(c =>
    c.amountEUR === 133 || c.amountEUR === 307.20 || c.amountEUR === 351.10 ||
    (c.note ?? '').includes('01.03.2026') ||
    (c.note ?? '').includes('tabela 2026') || (c.note ?? '').includes('2026')
  )
  assert(has2026Values, file, `residence-permit guide has AIMA costs but no 01.03.2026 tabela values (€133/€307,20/€351,10)`)
}

// -------- Runner --------

async function main() {
  const guides = await loadAll()
  for (const g of guides) {
    checkNoStaleIAS(g.file, g.raw)
    checkNoOldAIMAFees(g.file, g.raw, g.data)
    checkNoBareDreRoot(g.file, g.data)
    checkLei61DateCorrect(g.file, g.raw)
    checkDecreteLei37WithA(g.file, g.raw)
    checkPresidentIsSeguroNotMarcelo(g.file, g.raw)
    checkNoStaleCIPLEFee(g.file, g.raw)
    checkEmbassyAddressesFresh(g.file, g.raw)
    checkDrivingLicence2Years(g.file, g.raw)
    checkAIMA2026FeesPresentInKeyFiles(g.file, g.data)
  }

  if (failures.length > 0) {
    console.error(`\n✘ ${failures.length} content regression(s) detected:\n`)
    for (const f of failures) {
      console.error(`  [${f.file}]`)
      console.error(`    ${f.message}\n`)
    }
    process.exit(1)
  }

  console.log(`✓ Content regressions: 0 detected across ${guides.length} guides`)
}

main().catch(err => { console.error(err); process.exit(2) })
