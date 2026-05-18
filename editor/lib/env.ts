import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

export interface EditorEnv {
  PORT: number
  EDITOR_USER: string
  EDITOR_PASS: string
  XRELAY_KEY_FILE: string
  XRELAY_BASE_URL: string
  XRELAY_MODEL: string
  GIT_REMOTE: string
  GIT_BRANCH: string
  PAGES_MANIFEST_URL: string
  IOS_BUNDLE_PATH: string
}

export function config(): EditorEnv {
  const __dirname = dirname(fileURLToPath(import.meta.url))
  const envPath = resolve(__dirname, '..', '.env')
  if (fs.existsSync(envPath)) {
    for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
      const m = line.match(/^([A-Z_][A-Z0-9_]*)=(.*)$/)
      if (m && !process.env[m[1]]) process.env[m[1]] = m[2]
    }
  }
  return {
    PORT: Number(process.env.PORT || 3737),
    EDITOR_USER: process.env.EDITOR_USER || '',
    EDITOR_PASS: process.env.EDITOR_PASS || '',
    XRELAY_KEY_FILE: process.env.XRELAY_KEY_FILE || '/tmp/.openai-key',
    XRELAY_BASE_URL: process.env.XRELAY_BASE_URL || 'https://api.openai.com/v1',
    XRELAY_MODEL: process.env.XRELAY_MODEL || 'gpt-5',
    GIT_REMOTE: process.env.GIT_REMOTE || 'origin',
    GIT_BRANCH: process.env.GIT_BRANCH || 'main',
    PAGES_MANIFEST_URL: process.env.PAGES_MANIFEST_URL || '',
    IOS_BUNDLE_PATH: process.env.IOS_BUNDLE_PATH || '',
  }
}
