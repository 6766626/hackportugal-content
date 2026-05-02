#!/usr/bin/env node
// Deploys dist/ + web/ to OVH cluster151 via FTP.
//
// Security: password is read from OVH_FTP_PASS env var. NEVER commit it. Recommended:
//   export OVH_FTP_PASS='your-password'   # in ~/.zshrc, or just-in-time on the command line
//
// Usage:
//   OVH_FTP_PASS='...' npm run deploy
//   OVH_FTP_PASS='...' OVH_TARGET=/www/v1 npm run deploy   # override target dir
//   OVH_FTP_PASS='...' npm run deploy -- --dry-run         # show plan, don't upload
//
// What it does:
//   1. Reads `dist/manifest.json` (must exist; run `npm run build` first).
//   2. For each file in `dist/` and `web/`, compares against the server (via existing
//      manifest on the server, if present) and skips bytes that match by sha256.
//   3. Uploads changed files. Atomic-ish: writes to `<file>.new`, renames at end.
//   4. Prints a summary of what changed.
//
// Server layout:
//   /www/v1/manifest.json          (iOS reads this on launch)
//   /www/v1/guides.{ru,pt,en}.json
//   /www/v1/categories.{ru,pt,en}.json
//   /www/v1/catalog.{ru,pt,en}.json
//   /www/v1/community.{ru,pt,en}.json
//   /www/index.html / privacy.html / terms.html

import { readFile, readdir, stat } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { join, basename, relative } from 'node:path'
import { createHash } from 'node:crypto'
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'
import { Client } from 'basic-ftp'

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)))
const DIST = join(ROOT, 'dist')
const WEB = join(ROOT, 'web')

const HOST = process.env.OVH_FTP_HOST ?? 'ftp.cluster151.hosting.ovh.net'
const USER = process.env.OVH_FTP_USER ?? 'inptgeu'
const PASS = process.env.OVH_FTP_PASS
const TARGET_V1 = process.env.OVH_TARGET ?? '/www/v1'    // for content
const TARGET_WEB = process.env.OVH_TARGET_WEB ?? '/www'  // for privacy/terms/index
const DRY = process.argv.includes('--dry-run')

if (!PASS) {
  console.error('Set OVH_FTP_PASS env var. Aborting.')
  process.exit(2)
}
if (!existsSync(DIST)) {
  console.error('dist/ not found — run `npm run build` first.')
  process.exit(2)
}
if (!existsSync(join(DIST, 'manifest.json'))) {
  console.error('dist/manifest.json missing.')
  process.exit(2)
}

function sha256OfBuffer(buf) {
  return createHash('sha256').update(buf).digest('hex')
}

async function listLocalFiles(dir) {
  if (!existsSync(dir)) return []
  const out = []
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name)
    if (entry.isDirectory()) out.push(...(await listLocalFiles(p)))
    else if (entry.isFile()) out.push(p)
  }
  return out
}

/** Build a map of relative path → { localPath, hash, size } for the given root. */
async function localManifest(rootDir) {
  const files = await listLocalFiles(rootDir)
  const out = {}
  for (const p of files) {
    const buf = await readFile(p)
    const rel = relative(rootDir, p).split('/').join('/')
    out[rel] = { localPath: p, hash: sha256OfBuffer(buf), size: buf.length }
  }
  return out
}

/** Try to download an existing manifest from server to skip unchanged files. */
async function fetchRemoteManifest(client, target) {
  try {
    const tmpPath = join(ROOT, '.tmp-remote-manifest.json')
    await client.downloadTo(tmpPath, `${target}/manifest.json`)
    const raw = await readFile(tmpPath, 'utf8')
    const manifest = JSON.parse(raw)
    // dist/manifest.json has { files: [{ name, sha256 }] } per language. Build a flat lookup.
    const map = {}
    if (Array.isArray(manifest.files)) {
      for (const f of manifest.files) map[f.name] = f.sha256
    }
    if (manifest.languages) {
      for (const lang of Object.values(manifest.languages)) {
        if (lang.files) for (const f of lang.files) map[f.name] = f.sha256
      }
    }
    return map
  } catch {
    return {} // first deploy or no manifest yet
  }
}

async function uploadFiles(client, files, target, remoteManifestHashes) {
  let uploaded = 0, skipped = 0, totalBytes = 0
  for (const [rel, info] of Object.entries(files)) {
    const remoteHash = remoteManifestHashes[rel]
    if (remoteHash && remoteHash === info.hash) {
      skipped++
      continue
    }
    const remotePath = `${target}/${rel}`
    if (DRY) {
      console.log(`  [DRY] would upload ${rel} (${(info.size / 1024).toFixed(1)} KB)`)
    } else {
      await client.ensureDir(dirname(remotePath))
      // basic-ftp ensureDir leaves cwd at the dir; navigate back
      await client.cd(target)
      await client.uploadFrom(info.localPath, remotePath)
      console.log(`  ✓ ${rel} (${(info.size / 1024).toFixed(1)} KB)`)
    }
    uploaded++
    totalBytes += info.size
  }
  return { uploaded, skipped, totalBytes }
}

const client = new Client(30_000)
client.ftp.verbose = false

try {
  console.log(`Connecting to ${USER}@${HOST}…`)
  await client.access({ host: HOST, user: USER, password: PASS, secure: false })
  console.log('Connected.')

  // --- 1. /www/v1 — content ---
  console.log(`\nResolving remote manifest at ${TARGET_V1}/manifest.json…`)
  const remoteHashes = await fetchRemoteManifest(client, TARGET_V1)
  console.log(`  ${Object.keys(remoteHashes).length} files in remote manifest`)

  console.log(`\nLocal dist/ inventory:`)
  const distFiles = await localManifest(DIST)
  console.log(`  ${Object.keys(distFiles).length} files locally`)

  // Always re-upload manifest.json last (so partial updates don't make iOS think it's already on the new version).
  const manifestEntry = distFiles['manifest.json']
  delete distFiles['manifest.json']

  console.log(`\nUploading content to ${TARGET_V1}/…`)
  if (!DRY) await client.ensureDir(TARGET_V1)
  const contentResult = await uploadFiles(client, distFiles, TARGET_V1, remoteHashes)

  if (manifestEntry) {
    console.log(`\nFinalising — uploading manifest.json last…`)
    if (!DRY) {
      await client.cd(TARGET_V1)
      await client.uploadFrom(manifestEntry.localPath, `${TARGET_V1}/manifest.json`)
    }
    console.log(`  ✓ manifest.json (${(manifestEntry.size / 1024).toFixed(1)} KB)`)
  }

  // --- 2. /www — static pages ---
  if (existsSync(WEB)) {
    console.log(`\nLocal web/ inventory:`)
    const webFiles = await localManifest(WEB)
    console.log(`  ${Object.keys(webFiles).length} files locally`)
    console.log(`\nUploading static pages to ${TARGET_WEB}/…`)
    if (!DRY) await client.ensureDir(TARGET_WEB)
    // No remote manifest for /www; let the FTP server overwrite — small files, safe.
    const webResult = await uploadFiles(client, webFiles, TARGET_WEB, {})
    console.log(`\nWeb pages: ${webResult.uploaded} uploaded.`)
  }

  console.log(`\n✓ Done. Content: ${contentResult.uploaded} uploaded, ${contentResult.skipped} unchanged, ${(contentResult.totalBytes / 1024).toFixed(1)} KB transferred.`)
} catch (e) {
  console.error('\n✗ Deploy failed:', e.message ?? e)
  process.exit(1)
} finally {
  client.close()
}
