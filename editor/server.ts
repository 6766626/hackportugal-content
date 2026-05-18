import express from 'express'
import basicAuth from 'express-basic-auth'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import fs from 'node:fs'
import { config as loadEnv } from './lib/env.ts'
import { mountGuides } from './routes/guides.ts'
import { mountPipeline } from './routes/pipeline.ts'

const env = loadEnv()
const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(__dirname, '..')

const app = express()
app.use(express.json({ limit: '10mb' }))

if (env.EDITOR_USER && env.EDITOR_PASS) {
  app.use(basicAuth({
    users: { [env.EDITOR_USER]: env.EDITOR_PASS },
    challenge: true,
    realm: 'hackportugal-editor',
  }))
}

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, repoRoot, version: '0.1.0' })
})

mountGuides(app, { repoRoot })
mountPipeline(app, { repoRoot, env })

const distDir = resolve(__dirname, 'client', 'dist')
if (fs.existsSync(distDir)) {
  app.use(express.static(distDir))
  app.get('*', (_req, res) => res.sendFile(resolve(distDir, 'index.html')))
} else {
  app.get('/', (_req, res) => {
    res.type('html').send(`
<!doctype html>
<html><body style="font-family:system-ui;padding:2rem">
<h1>HackPortugal Editor</h1>
<p>Server running on port ${env.PORT}. Client is in dev mode — open <a href="http://localhost:5173">http://localhost:5173</a>.</p>
<p>Health: <a href="/api/health">/api/health</a></p>
</body></html>
    `)
  })
}

const HOST = process.env.HOST || '0.0.0.0'
app.listen(env.PORT, HOST, () => {
  console.log(`[editor] http://${HOST}:${env.PORT}`)
})
