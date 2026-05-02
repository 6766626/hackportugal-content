#!/usr/bin/env node
// Generates a report of guides that still contain external (non-official, non-editorial) references.
// Output: reports/audit-YYYY-MM-DD.md

import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises'
import { join, dirname, relative } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)))
const CONTENT_DIR = join(ROOT, 'content', 'ru')
const REPORTS = join(ROOT, 'reports')

const GOV_DOMAINS = [
  '.gov.pt', 'dre.pt', 'sns.pt', 'aima.gov.pt', 'justica.gov.pt', 'mne.gov.pt', 'embaixadaportugal.mne.gov.pt',
  'amt-autoridade.pt', 'imt-ip.pt', 'imt.pt', 'ama.gov.pt', 'dgav.pt', 'apav.pt', 'psp.pt', 'inem.pt',
  'bportugal.pt', 'cmvm.pt', 'asf.com.pt', 'anacom.pt', 'erse.pt', 'infarmed.pt', 'adene.pt', 'act.gov.pt',
  'fgd.pt', 'pontoverde.pt', 'dgeg.gov.pt', 'ipdj.gov.pt', 'apambiente.pt', 'dgert.gov.pt', 'ihru.pt',
  'ordemfarmaceuticos.pt', 'oa.pt', 'osae.pt', 'oroc.pt', 'cicdr.pt',
  'dgs.min-saude.pt', 'sns24.gov.pt', 'acss.min-saude.pt', 'spms.min-saude.pt',
  'dges.gov.pt', 'dge.mec.pt', 'portaldasmatriculas.edu.gov.pt', 'uc.pt', 'ulisboa.pt', 'fc.ul.pt',
  'instituto-camoes.pt', 'caple.letras.ulisboa.pt', 'ani.pt', 'iapmei.pt', 'startupvisa.iapmei.pt',
  'acm.gov.pt',
  'visitportugal.com', 'visitalgarve.pt', 'visitmadeira.com', 'visitazores.com', 'visitlisboa.com',
  'visitporto.travel', 'visitsintra.pt', 'visitbraga.travel', 'visitalentejo.pt', 'visitcentro.com',
  'winesofportugal.com', 'ivdp.pt', 'ccdr-alg.pt', 'amal.pt', 'portoenorte.pt', 'turismodocentro.pt',
  'parquesdesintra.pt', 'ericeirasurfreserve.pt', 'startupmadeira.eu',
  'lisboa.pt', 'cm-porto.pt', 'cm-aveiro.pt', 'cm-evora.pt', 'cm-obidos.pt', 'cm-nazare.pt',
  'cm-guimaraes.pt', 'anafre.pt',
  'cp.pt', 'infraestruturasdeportugal.pt', 'atlanticoline.pt', 'ttsl.pt', 'flytap.com', 'azoresairlines.pt',
  'fpf.pt', 'ligaportugal.pt', 'slbenfica.pt', 'fcporto.pt', 'sporting.pt', 'surfingportugal.com',
  'museudofado.pt', 'farmacias.pt', 'siac.vet',
  'europa.eu', 'ec.europa.eu', 'eur-lex.europa.eu', 'hcch.net', 'cplp.org', 'unesco.org', 'ich.unesco.org', 'whc.unesco.org',
  'usembassy.gov', 'irs.gov', 'gov.uk', 'mfa.gov.ua', 'mid.ru', 'lisbon.mid.ru',
  'dgadr.gov.pt', 'asae.gov.pt', 'seg-social.pt', 'ctt.pt', 'ine.pt',
]
const WIKI_DOMAINS = ['wikipedia.org', 'wikimedia.org']

function isOfficial(url) { return GOV_DOMAINS.some(d => url.includes(d)) }
function isWiki(url) { return WIKI_DOMAINS.some(d => url.includes(d)) }

async function walk(dir) {
  const out = []
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name)
    if (entry.isDirectory()) out.push(...await walk(p))
    else if (entry.isFile() && entry.name.endsWith('.mjs') && !entry.name.startsWith('_')) out.push(p)
  }
  return out
}

const URL_RE = /https?:\/\/[^\s)\]'"<>]+/g

function scanTextBlocks(g) {
  const hits = []
  function push(where, text) {
    const matches = text.match(URL_RE) ?? []
    for (const u of matches) hits.push({ where, url: u })
  }
  function visitContent(arr, path) {
    for (const b of arr ?? []) {
      if (b.kind === 'paragraph' && b.text) push(`${path}.paragraph`, b.text)
      else if (b.kind === 'warning' && b.text) push(`${path}.warning`, b.text)
      else if (b.kind === 'checklist' && b.items) b.items.forEach((it, i) => push(`${path}.checklist[${i}]`, it))
      else if (b.kind === 'substeps' && b.items) b.items.forEach(sub => visitContent(sub.content, `${path}.sub(${sub.id})`))
    }
  }
  for (const step of g.steps ?? []) visitContent(step.content, `step(${step.id})`)
  return hits
}

async function main() {
  const files = await walk(CONTENT_DIR)
  const today = new Date().toISOString().slice(0, 10)
  await mkdir(REPORTS, { recursive: true })

  const rows = []
  for (const f of files) {
    const mod = await import(pathToFileURL(f).href)
    const g = mod.default
    const rel = relative(ROOT, f)

    const sources = g.sources ?? []
    const srcExternal = sources.filter(s => !isOfficial(s.url) && !(s.kind === 'law' && /dre\.pt|diariodarepublica\.pt|eur-lex|europa\.eu/.test(s.url)))

    const bodyHits = scanTextBlocks(g).filter(h => !isOfficial(h.url) && !isWiki(h.url))

    const hasVoice = g.editorialVoice === 'hackportugal'
    rows.push({ g, rel, srcExternal, bodyHits, hasVoice })
  }

  const withBody = rows.filter(r => r.bodyHits.length)
  const withExtSrc = rows.filter(r => r.srcExternal.length)
  const noVoice = rows.filter(r => !r.hasVoice)

  const lines = []
  lines.push(`# Source audit — ${today}`)
  lines.push(``)
  lines.push(`- Total guides: ${rows.length}`)
  lines.push(`- With non-official/non-wiki URL inside body text: ${withBody.length}`)
  lines.push(`- With non-official source in \`sources[]\`: ${withExtSrc.length}`)
  lines.push(`- Missing \`editorialVoice: 'hackportugal'\`: ${noVoice.length}`)
  lines.push(``)

  if (withBody.length) {
    lines.push(`## Guides with external links in body text`)
    for (const r of withBody) {
      lines.push(`- **${r.g.id}** (\`${r.rel}\`) — ${r.bodyHits.length} hits`)
      for (const h of r.bodyHits.slice(0, 8)) lines.push(`  - \`${h.where}\`: ${h.url}`)
      if (r.bodyHits.length > 8) lines.push(`  - …and ${r.bodyHits.length - 8} more`)
    }
    lines.push(``)
  }

  if (withExtSrc.length) {
    lines.push(`## Guides with non-official sources`)
    for (const r of withExtSrc) {
      lines.push(`- **${r.g.id}** (\`${r.rel}\`)`)
      for (const s of r.srcExternal) lines.push(`  - [${s.kind}] ${s.title ?? '—'} → ${s.url}`)
    }
    lines.push(``)
  }

  if (noVoice.length) {
    lines.push(`## Guides missing editorialVoice flag`)
    const byCat = {}
    for (const r of noVoice) (byCat[r.g.categoryId] ??= []).push(r.g.id)
    for (const [cat, ids] of Object.entries(byCat).sort()) {
      lines.push(`- **${cat}** (${ids.length}): ${ids.join(', ')}`)
    }
    lines.push(``)
  }

  lines.push(`## Rewrite priority waves`)
  lines.push(`- A1 legal (nationality, residence_permit, taxes, documents_fiscal)`)
  lines.push(`- A2 bureaucracy/life (healthcare, housing_rent, housing_buy, banking, digital, transport_driving, public_transport)`)
  lines.push(`- A3 life (work_business, education_children, animals, telecom, daily_life, food_leisure)`)
  lines.push(`- A4 emergency/travel (emergency, before_arrival, travel_portugal)`)

  const out = join(REPORTS, `audit-${today}.md`)
  await writeFile(out, lines.join('\n') + '\n')
  console.log(`Wrote ${relative(ROOT, out)}`)
  console.log(`  body-hit guides: ${withBody.length}`)
  console.log(`  ext-src guides:  ${withExtSrc.length}`)
  console.log(`  no-voice guides: ${noVoice.length}`)
}

main().catch(err => { console.error(err); process.exit(1) })
