#!/usr/bin/env node
// Copy dist/*.json into the iOS app bundle folder.

import { readdir, copyFile, mkdir } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)))
const SRC = join(ROOT, 'dist')
const DST = '/Users/alex/DEVELOPER/ios/HackPortugal/HackPortugal/Resources/Content'

async function main() {
  await mkdir(DST, { recursive: true })
  const files = (await readdir(SRC)).filter(f => f.endsWith('.json'))
  for (const f of files) {
    await copyFile(join(SRC, f), join(DST, f))
    console.log(`→ ${f}`)
  }
  console.log(`Copied ${files.length} files to ${DST}`)
}

main().catch(err => { console.error(err); process.exit(1) })
