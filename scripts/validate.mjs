#!/usr/bin/env node
// Lightweight validation of built content. Does not depend on ajv — hand-rolled rules.

import { readFile } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)))
const DIST = join(ROOT, 'dist')

const errors = []
const warnings = []

function err(guideId, msg) { errors.push(`[${guideId}] ${msg}`) }
function warn(guideId, msg) { warnings.push(`[${guideId}] ${msg}`) }

const GOV_DOMAINS = [
  // Core PT government
  '.gov.pt', 'dre.pt', 'sns.pt', 'aima.gov.pt', 'justica.gov.pt', 'mne.gov.pt', 'embaixadaportugal.mne.gov.pt',
  'amt-autoridade.pt', 'imt-ip.pt', 'imt.pt', 'ama.gov.pt', 'dgav.pt', 'apav.pt', 'psp.pt', 'inem.pt',
  // Regulators and authorities
  'bportugal.pt', 'cmvm.pt', 'asf.com.pt', 'anacom.pt', 'erse.pt', 'infarmed.pt', 'adene.pt', 'act.gov.pt',
  'fgd.pt', 'pontoverde.pt', 'dgeg.gov.pt', 'ipdj.gov.pt', 'apambiente.pt', 'dgert.gov.pt', 'ihru.pt',
  // Courts / legal / professional
  'ordemfarmaceuticos.pt', 'oa.pt', 'osae.pt', 'oroc.pt', 'cicdr.pt',
  // Health
  'dgs.min-saude.pt', 'sns24.gov.pt', 'acss.min-saude.pt', 'spms.min-saude.pt',
  // Education
  'dges.gov.pt', 'dge.mec.pt', 'portaldasmatriculas.edu.gov.pt', 'uc.pt', 'ulisboa.pt', 'fc.ul.pt',
  'instituto-camoes.pt', 'caple.letras.ulisboa.pt', 'ani.pt', 'iapmei.pt', 'startupvisa.iapmei.pt',
  'acm.gov.pt',
  // Tourism / official regional
  'visitportugal.com', 'visitalgarve.pt', 'visitmadeira.com', 'visitazores.com', 'visitlisboa.com',
  'visitporto.travel', 'visitsintra.pt', 'visitbraga.travel', 'visitalentejo.pt', 'visitcentro.com',
  'winesofportugal.com', 'ivdp.pt', 'ccdr-alg.pt', 'amal.pt', 'portoenorte.pt', 'turismodocentro.pt',
  'parquesdesintra.pt', 'ericeirasurfreserve.pt', 'startupmadeira.eu', 'fatima.pt',
  // Municipalities
  'lisboa.pt', 'cm-porto.pt', 'cm-aveiro.pt', 'cm-evora.pt', 'cm-obidos.pt', 'cm-nazare.pt',
  'cm-guimaraes.pt', 'anafre.pt',
  // Transport operators (semi-public/national concessions)
  'cp.pt', 'infraestruturasdeportugal.pt', 'atlanticoline.pt', 'ttsl.pt', 'flytap.com', 'azoresairlines.pt',
  'rede-expressos.pt', 'viaverde.pt', 'portagens.ctt.pt',
  // Federations / national sport bodies (officially recognized by national IPDJ)
  'fpf.pt', 'ligaportugal.pt', 'slbenfica.pt', 'fcporto.pt', 'sporting.pt', 'surfingportugal.com',
  // Culture official
  'museudofado.pt', 'farmacias.pt', 'siac.vet',
  // Supranational
  'europa.eu', 'ec.europa.eu', 'eur-lex.europa.eu', 'hcch.net', 'cplp.org', 'unesco.org', 'ich.unesco.org', 'whc.unesco.org', 'sanctionsmap.eu',
  // Foreign embassies/official
  'usembassy.gov', 'irs.gov', 'gov.uk', 'mfa.gov.ua', 'mid.ru', 'lisbon.mid.ru',
  // Consumer protection official bodies
  'ami.pt', 'deco.proteste.pt',
  // Legacy (kept for back-compat)
  'dgadr.gov.pt', 'asae.gov.pt', 'seg-social.pt', 'ctt.pt', 'ine.pt',
]
const WIKI_DOMAINS = ['wikipedia.org', 'wikimedia.org']
const SENSITIVE_CATS = new Set(['residence_permit', 'nationality', 'taxes', 'documents_fiscal'])
const FORBIDDEN_DOMAINS = [
  't.me/', 'telegram.', 'facebook.com/groups/', 'vk.com/', 'youtube.com/@',
  'migrun.tech', 'passportivity.com', 'immigrantinvest.com', 'globalcitizensolutions.com',
  'nomadcapitalist.com', 'forbes.ru', 'jobbatical.com', 'getgoldenvisa.com', 'prian.ru',
  'vc.ru', 'dmitriivisa.news'
]

function isOfficial(url) { return GOV_DOMAINS.some(d => url.includes(d)) }
function isWiki(url) { return WIKI_DOMAINS.some(d => url.includes(d)) }

function today() { return new Date().toISOString().slice(0, 10) }
function daysBetween(a, b) { return Math.round((new Date(b) - new Date(a)) / 86400000) }

const URL_RE = /https?:\/\/[^\s)\]'"<>]+/g

function scanBodyUrls(g) {
  const hits = []
  function push(where, text) {
    for (const u of text.match(URL_RE) ?? []) hits.push({ where, url: u })
  }
  function visit(arr, path) {
    for (const b of arr ?? []) {
      if (b.kind === 'paragraph' && b.text) push(`${path}.paragraph`, b.text)
      else if (b.kind === 'warning' && b.text) push(`${path}.warning`, b.text)
      else if (b.kind === 'checklist') (b.items ?? []).forEach((it, i) => push(`${path}.checklist[${i}]`, it))
      else if (b.kind === 'substeps') (b.items ?? []).forEach(sub => visit(sub.content, `${path}.sub(${sub.id})`))
      // image/pdf src is rewritten to a CDN URL at build time — that's checked separately
      // in validateBlocks, so we skip them here (otherwise the URL-in-body rule would
      // false-fire on every legitimate asset).
    }
  }
  for (const step of g.steps ?? []) visit(step.content, `step(${step.id})`)
  return hits
}

function validateGuide(g, categoryIds) {
  if (!g.id || !/^[a-z0-9-]+$/.test(g.id)) err(g.id ?? '?', 'invalid id')
  if (!g.title || g.title.length < 3) err(g.id, 'title too short')
  if (!g.tldr || g.tldr.length < 20) err(g.id, 'tldr too short')
  if (!categoryIds.has(g.categoryId)) err(g.id, `unknown categoryId: ${g.categoryId}`)

  // Editorial voice flag — warning for now, will become error once all guides are updated
  if (g.editorialVoice !== 'hackportugal') warn(g.id, 'missing editorialVoice="hackportugal"')

  const sources = g.sources ?? []
  if (sources.length < 2) err(g.id, `requires >=2 sources (has ${sources.length})`)
  const officialCount = sources.filter(s =>
    (s.kind === 'official' && isOfficial(s.url)) ||
    (s.kind === 'law' && /dre\.pt|diariodarepublica\.pt|eur-lex|ec\.europa|europa\.eu|info\.portaldasfinancas/.test(s.url))
  ).length
  if (SENSITIVE_CATS.has(g.categoryId) && officialCount < 1) err(g.id, `sensitive category requires >=1 authoritative (.gov.pt/dre.pt/europa.eu) source`)
  if (officialCount < 2) warn(g.id, `recommended >=2 authoritative sources (has ${officialCount})`)

  for (const s of sources) {
    if (s.kind === 'community') err(g.id, `forbidden community source: ${s.url} — move to catalog`)
    for (const fd of FORBIDDEN_DOMAINS) {
      if (s.url.includes(fd)) err(g.id, `forbidden domain in source: ${s.url}`)
    }
  }

  // Hard rule: no raw URLs inside body text (paragraph/warning/checklist).
  // Wikipedia URLs are allowed only inside walkingRoute/wikiLink blocks (not in free text).
  const bodyHits = scanBodyUrls(g)
  for (const h of bodyHits) {
    if (isOfficial(h.url)) continue
    err(g.id, `raw URL in body text at ${h.where}: ${h.url} — move to sources[] or walkingRoute/wikiLink block`)
  }

  if (!g.lastVerified) err(g.id, 'missing lastVerified')
  else {
    const days = daysBetween(g.lastVerified, today())
    const limit = (g.verifyIntervalDays ?? 180) * 1.5
    if (days > limit) warn(g.id, `lastVerified ${days}d ago; exceeds interval*1.5 (${limit}d)`)
  }

  if (!g.steps || g.steps.length === 0) err(g.id, 'no steps')
  for (const s of g.steps ?? []) {
    if (!s.id) err(g.id, 'step missing id')
    if (!s.title) err(g.id, `step ${s.id} missing title`)
    if (!s.content || s.content.length === 0) err(g.id, `step ${s.id} has no content`)
    validateBlocks(g.id, s.id, s.content)
  }

  for (const v of g.variants ?? []) {
    if (!v.audience) err(g.id, `variant ${v.id} missing audience`)
  }
}

function validateBlocks(guideId, stepId, blocks) {
  for (const b of blocks ?? []) {
    if (b.kind === 'walkingRoute') {
      if (typeof b.distanceKm !== 'number') err(guideId, `step ${stepId}: walkingRoute missing distanceKm`)
      if (typeof b.durationMinutes !== 'number') err(guideId, `step ${stepId}: walkingRoute missing durationMinutes`)
      if (!Array.isArray(b.points) || b.points.length === 0) err(guideId, `step ${stepId}: walkingRoute has no points`)
      for (const p of b.points ?? []) {
        if (!p.name) err(guideId, `step ${stepId}: walkingRoute point missing name`)
        const urls = Object.values(p.wikipedia ?? {})
        for (const u of urls) if (!isWiki(u)) err(guideId, `step ${stepId}: walkingRoute point ${p.name}: non-wiki URL ${u}`)
      }
    }
    if (b.kind === 'wikiLink') {
      if (!b.title) err(guideId, `step ${stepId}: wikiLink missing title`)
      const urls = Object.values(b.urls ?? {})
      if (urls.length === 0) err(guideId, `step ${stepId}: wikiLink has no urls`)
      for (const u of urls) if (!isWiki(u)) err(guideId, `step ${stepId}: wikiLink non-wiki URL ${u}`)
    }
    if (b.kind === 'image') {
      if (!b.src || typeof b.src !== 'string') err(guideId, `step ${stepId}: image missing src`)
      if (!b.alt || typeof b.alt !== 'string') err(guideId, `step ${stepId}: image missing alt text (accessibility)`)
      // After build rewrites src to absolute URL, verify it points at our CDN — defense in
      // depth against accidentally smuggling third-party hotlinks (privacy + reliability).
      if (b.src && /^https?:/i.test(b.src) && !/6766626\.github\.io\/hackportugal-content/.test(b.src)) {
        err(guideId, `step ${stepId}: image src must live under our CDN: ${b.src}`)
      }
    }
    if (b.kind === 'pdf') {
      if (!b.src || typeof b.src !== 'string') err(guideId, `step ${stepId}: pdf missing src`)
      if (!b.title || typeof b.title !== 'string') err(guideId, `step ${stepId}: pdf missing title`)
      if (b.src && /^https?:/i.test(b.src) && !/6766626\.github\.io\/hackportugal-content/.test(b.src)) {
        err(guideId, `step ${stepId}: pdf src must live under our CDN: ${b.src}`)
      }
    }
    if (b.kind === 'substeps') {
      for (const sub of b.items ?? []) validateBlocks(guideId, `${stepId}/${sub.id}`, sub.content)
    }
  }
}

async function main() {
  const categories = JSON.parse(await readFile(join(DIST, 'categories.ru.json'), 'utf8'))
  const guides = JSON.parse(await readFile(join(DIST, 'guides.ru.json'), 'utf8'))
  const catalog = JSON.parse(await readFile(join(DIST, 'catalog.ru.json'), 'utf8'))

  const catIds = new Set(categories.map(c => c.id))

  const ids = new Set()
  for (const g of guides) {
    if (ids.has(g.id)) err(g.id, 'duplicate id')
    ids.add(g.id)
    validateGuide(g, catIds)
  }

  const catalogIds = new Set()
  for (const e of catalog) {
    if (catalogIds.has(e.id)) err(e.id, 'duplicate catalog id')
    catalogIds.add(e.id)
    if (!/^(pp|aimasef|ext|[a-z]+)-[a-z0-9-]+$/.test(e.id)) err(e.id, 'invalid catalog id format')
    if (!catIds.has(e.categoryId)) err(e.id, `unknown categoryId: ${e.categoryId}`)
    if (!e.telegramUrl || !/^https?:\/\//.test(e.telegramUrl)) err(e.id, 'bad url')
    if (e.fullGuideId && !ids.has(e.fullGuideId)) err(e.id, `unknown fullGuideId: ${e.fullGuideId}`)
  }

  if (warnings.length) {
    console.log(`\n⚠ ${warnings.length} warning(s):`)
    warnings.forEach(w => console.log('  ' + w))
  }
  if (errors.length) {
    console.log(`\n✗ ${errors.length} error(s):`)
    errors.forEach(e => console.log('  ' + e))
    process.exit(1)
  }
  console.log(`\n✓ Valid: ${guides.length} guides, ${catalog.length} catalog entries, ${categories.length} categories`)
}

main().catch(err => { console.error(err); process.exit(1) })
