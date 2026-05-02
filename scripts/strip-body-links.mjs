#!/usr/bin/env node
// Strip non-official URLs from guide body content.
// Keep only links to *.gov.pt, dre.pt, europa.eu, hcch.net, irs.gov, mfa.gov.ua and similar gov domains.
// Everything else in body text should either be neutral prose or removed.

import { readFile, writeFile, readdir } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)))
const CONTENT_DIR = join(ROOT, 'content', 'ru')

const OFFICIAL_ALLOW = [
  '.gov.pt', 'dre.pt', 'sns.pt', 'aima.gov.pt', 'justica.gov.pt',
  'europa.eu', 'hcch.net', 'cplp.org', 'bportugal.pt', 'cmvm.pt',
  'asf.com.pt', 'anacom.pt', 'erse.pt', 'infarmed.pt', 'adene.pt',
  'act.gov.pt', 'oa.pt', 'visitportugal.com', 'visitalgarve.pt',
  'visitmadeira.com', 'visitazores.com', 'visitlisboa.com', 'visitporto.travel',
  'ivdp.pt', 'ccdr-alg.pt', 'amal.pt', 'farmacias.pt', 'acm.gov.pt',
  'instituto-camoes.pt', 'caple.letras.ulisboa.pt', 'ani.pt',
  'atlanticoline.pt', 'ttsl.pt', 'flytap.com', 'azoresairlines.pt',
  'cp.pt', 'infraestruturasdeportugal.pt', 'startupmadeira.eu',
  'lisboa.pt', 'cm-porto.pt', 'anafre.pt', 'dgert.gov.pt',
  'dgadr.gov.pt', 'asae.gov.pt', 'dgav.pt', 'siac.vet',
  'amt-autoridade.pt', 'imt-ip.pt', 'imt.pt', 'seg-social.pt',
  'autenticacao.gov.pt', 'eportugal.gov.pt', 'portaldasfinancas.gov.pt',
  'irn.justica.gov.pt', 'vistos.mne.gov.pt', 'mne.gov.pt',
  'embaixadaportugal.mne.gov.pt', 'usembassy.gov', 'irs.gov',
  'gov.uk', 'ec.europa.eu', 'mfa.gov.ua', 'mid.ru',
  'iapmei.pt', 'startupvisa.iapmei.pt', 'dges.gov.pt',
  'portaldasmatriculas.edu.gov.pt', 'dge.mec.pt', 'dgs.min-saude.pt',
  'sns24.gov.pt', 'inem.pt', 'apav.pt', 'psp.pt', 'ama.gov.pt',
  'ordemfarmaceuticos.pt', 'dge.gov.pt',
]

function isOfficial(url) {
  return OFFICIAL_ALLOW.some(d => url.includes(d))
}

async function walk(dir) {
  const out = []
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name)
    if (entry.isDirectory()) out.push(...await walk(p))
    else if (entry.isFile() && entry.name.endsWith('.mjs') && !entry.name.startsWith('_')) out.push(p)
  }
  return out
}

// We scan each line for `{ kind: 'link', text: '...', url: '...' }` patterns.
// Remove the entire line if the URL is not in the allowlist.
function cleanFile(src) {
  const lines = src.split('\n')
  const out = []
  let removed = 0
  for (const line of lines) {
    // Match link object with url:
    const m = line.match(/kind:\s*['"]link['"].*url:\s*['"]([^'"]+)['"]/) ||
              line.match(/url:\s*['"]([^'"]+)['"].*kind:\s*['"]link['"]/)
    if (m) {
      const url = m[1]
      if (!isOfficial(url)) {
        removed++
        continue
      }
    }
    out.push(line)
  }
  return { out: out.join('\n'), removed }
}

async function main() {
  const files = await walk(CONTENT_DIR)
  let total = 0, changedFiles = 0
  for (const f of files) {
    const src = await readFile(f, 'utf8')
    const { out, removed } = cleanFile(src)
    if (removed > 0) {
      await writeFile(f, out)
      changedFiles++
      total += removed
      console.log(`  ${f.replace(ROOT + '/', '')}: -${removed} non-official links`)
    }
  }
  console.log(`\nStripped ${total} non-official body links from ${changedFiles} files.`)
}

main().catch(e => { console.error(e); process.exit(1) })
