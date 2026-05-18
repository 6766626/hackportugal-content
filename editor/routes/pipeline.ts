import type { Express, Request, Response } from 'express'
import type { EditorEnv } from '../lib/env.ts'
import {
  SSEStream,
  runCommand,
  gitChangedFiles,
  gitCommitAndPush,
  pollPagesManifest,
  readXrelayKey,
} from '../lib/pipeline.ts'
import { relative } from 'node:path'

export function mountPipeline(app: Express, opts: { repoRoot: string; env: EditorEnv }) {
  const { repoRoot, env } = opts

  app.get('/api/git/status', async (_req, res) => {
    try {
      const files = await gitChangedFiles(repoRoot)
      res.json({
        files,
        ru: files.filter((f) => f.startsWith('content/ru/')),
        translations: files.filter((f) => f.startsWith('content/pt/') || f.startsWith('content/en/')),
        other: files.filter((f) => !f.startsWith('content/')),
      })
    } catch (e) {
      res.status(500).json({ error: (e as Error).message })
    }
  })

  app.post('/api/publish', async (req: Request, res: Response) => {
    const sse = new SSEStream(res)
    try {
      const message: string = req.body?.message || 'Update content'
      const skipBuild: boolean = req.body?.skipBuild ?? false
      const waitForPages: boolean = req.body?.waitForPages ?? true

      const allFiles = await gitChangedFiles(repoRoot)
      const ruFiles = allFiles.filter((f) => f.startsWith('content/ru/'))
      if (ruFiles.length === 0) {
        sse.error('Нет изменённых RU-файлов для публикации')
        sse.end()
        return
      }

      sse.step('files', `${ruFiles.length} RU-файлов на публикацию`)
      for (const f of ruFiles) sse.log(`  ${f}`)

      sse.step('validate', 'Валидация контента')
      const v1 = await runCommand({ cmd: 'node', args: ['scripts/build.mjs'], cwd: repoRoot, env: { LANGS: 'ru' }, sse, label: 'build-ru' })
      if (v1.code !== 0) { sse.error(`build failed (code ${v1.code})`); sse.end(); return }
      const v2 = await runCommand({ cmd: 'node', args: ['scripts/validate.mjs'], cwd: repoRoot, sse, label: 'validate' })
      if (v2.code !== 0) { sse.error(`validate failed (code ${v2.code})`); sse.end(); return }

      if (!skipBuild) {
        sse.step('build', 'Полная сборка LANGS=ru,pt,en')
        const b = await runCommand({ cmd: 'node', args: ['scripts/build.mjs'], cwd: repoRoot, env: { LANGS: 'ru,pt,en' }, sse, label: 'build-all' })
        if (b.code !== 0) { sse.error(`build failed (code ${b.code})`); sse.end(); return }
      }

      const { commitSha } = await gitCommitAndPush({
        repoRoot,
        files: ruFiles,
        message,
        remote: env.GIT_REMOTE,
        branch: env.GIT_BRANCH,
        sse,
      })
      sse.log(`commit ${commitSha}`)

      if (waitForPages && env.PAGES_MANIFEST_URL) {
        sse.step('pages', 'Ожидание GitHub Pages…')
        await pollPagesManifest({ url: env.PAGES_MANIFEST_URL, expectAfter: Date.now() - 600000, sse })
      }

      sse.done({ commitSha, files: ruFiles })
    } catch (e) {
      sse.error((e as Error).message)
      sse.end()
    }
  })

  app.post('/api/translate-and-publish', async (req: Request, res: Response) => {
    const sse = new SSEStream(res)
    try {
      const message: string = req.body?.message || 'Update content + translations'
      const langs: string[] = (req.body?.langs as string[]) || ['en', 'pt']
      const waitForPages: boolean = req.body?.waitForPages ?? true

      const allFiles = await gitChangedFiles(repoRoot)
      const ruFiles = allFiles.filter((f) => f.startsWith('content/ru/'))
      if (ruFiles.length === 0) { sse.error('Нет изменённых RU-файлов'); sse.end(); return }

      const ids = ruFiles.map((f) => {
        const base = f.split('/').pop() || ''
        return base.replace(/\.mjs$/, '')
      }).filter(Boolean)

      const xrelayKey = readXrelayKey(env)
      if (!xrelayKey) { sse.error('XRELAY_KEY не настроен (см. .env)'); sse.end(); return }

      sse.step('translate', `Перевод ${ids.length} гайдов на ${langs.join(',')}`)
      const t = await runCommand({
        cmd: 'node',
        args: ['scripts/translate-whole-file.mjs', ...ids, '--langs', langs.join(','), '--concurrency', '4', '--force'],
        cwd: repoRoot,
        env: {
          XRELAY_KEY: xrelayKey,
          XRELAY_BASE_URL: env.XRELAY_BASE_URL,
          XRELAY_MODEL: env.XRELAY_MODEL,
        },
        sse,
        label: 'translate',
      })
      if (t.code !== 0) { sse.error(`translate failed (code ${t.code})`); sse.end(); return }

      sse.step('build', 'Сборка LANGS=ru,pt,en')
      const b = await runCommand({ cmd: 'node', args: ['scripts/build.mjs'], cwd: repoRoot, env: { LANGS: 'ru,pt,en' }, sse, label: 'build' })
      if (b.code !== 0) { sse.error(`build failed (code ${b.code})`); sse.end(); return }

      sse.step('validate', 'Валидация (RU + переводы)')
      const v1 = await runCommand({ cmd: 'node', args: ['scripts/validate.mjs'], cwd: repoRoot, sse, label: 'validate' })
      if (v1.code !== 0) { sse.error(`validate failed (code ${v1.code})`); sse.end(); return }
      const v2 = await runCommand({ cmd: 'node', args: ['scripts/validate-no-cyrillic.mjs'], cwd: repoRoot, sse, label: 'no-cyrillic' })
      if (v2.code !== 0) { sse.error(`no-cyrillic check failed`); sse.end(); return }
      const v3 = await runCommand({ cmd: 'node', args: ['scripts/validate-parity.mjs'], cwd: repoRoot, sse, label: 'parity' })
      if (v3.code !== 0) { sse.error(`parity check failed`); sse.end(); return }

      const allChanged = await gitChangedFiles(repoRoot)
      const contentChanged = allChanged.filter((f) => f.startsWith('content/'))

      const { commitSha } = await gitCommitAndPush({
        repoRoot,
        files: contentChanged,
        message,
        remote: env.GIT_REMOTE,
        branch: env.GIT_BRANCH,
        sse,
      })
      sse.log(`commit ${commitSha}`)

      if (waitForPages && env.PAGES_MANIFEST_URL) {
        sse.step('pages', 'Ожидание GitHub Pages…')
        await pollPagesManifest({ url: env.PAGES_MANIFEST_URL, expectAfter: Date.now() - 600000, sse })
      }

      sse.done({ commitSha, files: contentChanged })
    } catch (e) {
      sse.error((e as Error).message)
      sse.end()
    }
  })

  app.post('/api/snapshot', async (_req, res) => {
    const sse = new SSEStream(res)
    try {
      const r = await runCommand({ cmd: 'node', args: ['scripts/snapshot-to-ios.mjs'], cwd: repoRoot, sse, label: 'snapshot' })
      if (r.code !== 0) { sse.error(`snapshot failed (${r.code})`); sse.end(); return }
      sse.done({ ok: true })
    } catch (e) {
      sse.error((e as Error).message)
      sse.end()
    }
  })
}
