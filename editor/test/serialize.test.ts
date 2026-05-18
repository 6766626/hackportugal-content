import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import { resolve, dirname, basename } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { listGuideFiles } from '../lib/loader.ts'
import { serializeGuide } from '../lib/serialize.ts'

const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(__dirname, '..', '..')

async function importFresh(filePath: string): Promise<any> {
  const url = pathToFileURL(filePath).href + `?cb=${Date.now()}_${Math.random()}`
  const mod = await import(url)
  return mod.default
}

function deepStrip(o: any): any {
  if (Array.isArray(o)) return o.map(deepStrip)
  if (o && typeof o === 'object') {
    const out: any = {}
    for (const k of Object.keys(o)) {
      if (k.startsWith('_')) continue
      if (o[k] === undefined) continue
      out[k] = deepStrip(o[k])
    }
    return out
  }
  return o
}

test('round-trip serializer preserves all RU guide objects', async () => {
  const files = listGuideFiles(repoRoot, 'ru')
  assert.ok(files.length >= 500, `expected ≥500 RU files, got ${files.length}`)

  const tmpDir = fs.mkdtempSync(resolve(os.tmpdir(), 'editor-roundtrip-'))
  let failures = 0
  const failureSamples: string[] = []

  for (const file of files) {
    const original = await importFresh(file)
    const serialized = serializeGuide(original)
    const tmpFile = resolve(tmpDir, basename(file))
    fs.writeFileSync(tmpFile, serialized)

    let reimported: any
    try {
      reimported = await importFresh(tmpFile)
    } catch (e) {
      failures++
      if (failureSamples.length < 3) {
        failureSamples.push(`PARSE ERROR ${basename(file)}: ${(e as Error).message}\n--- output ---\n${serialized.slice(0, 800)}`)
      }
      continue
    }

    try {
      assert.deepStrictEqual(deepStrip(reimported), deepStrip(original))
    } catch (e) {
      failures++
      if (failureSamples.length < 3) {
        failureSamples.push(`DIFF ${basename(file)}: ${(e as Error).message.slice(0, 400)}`)
      }
    }
  }

  fs.rmSync(tmpDir, { recursive: true, force: true })
  if (failures > 0) {
    assert.fail(`${failures}/${files.length} round-trip failures.\n${failureSamples.join('\n\n')}`)
  }
})
