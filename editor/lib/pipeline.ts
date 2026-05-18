import { spawn } from 'node:child_process'
import fs from 'node:fs'
import type { Response } from 'express'
import simpleGit from 'simple-git'
import type { EditorEnv } from './env.ts'

export interface SSEEvent {
  type: 'log' | 'step' | 'done' | 'error'
  step?: string
  msg?: string
  data?: any
}

export class SSEStream {
  constructor(private res: Response) {
    res.setHeader('Content-Type', 'text/event-stream')
    res.setHeader('Cache-Control', 'no-cache')
    res.setHeader('Connection', 'keep-alive')
    res.setHeader('X-Accel-Buffering', 'no')
    res.write(': ok\n\n')
  }
  send(event: SSEEvent) {
    this.res.write(`data: ${JSON.stringify(event)}\n\n`)
  }
  log(msg: string) { this.send({ type: 'log', msg }) }
  step(step: string, msg?: string) { this.send({ type: 'step', step, msg }) }
  error(msg: string, data?: any) { this.send({ type: 'error', msg, data }) }
  done(data?: any) { this.send({ type: 'done', data }); this.res.end() }
  end() { this.res.end() }
}

export async function runCommand(opts: {
  cmd: string
  args: string[]
  cwd: string
  env?: Record<string, string | undefined>
  sse: SSEStream
  label: string
}): Promise<{ code: number; stdout: string; stderr: string }> {
  return new Promise((resolveP, rejectP) => {
    opts.sse.log(`$ ${opts.cmd} ${opts.args.join(' ')}`)
    const proc = spawn(opts.cmd, opts.args, {
      cwd: opts.cwd,
      env: { ...process.env, ...opts.env },
    })
    let stdout = ''
    let stderr = ''
    proc.stdout.on('data', (d) => {
      const s = d.toString()
      stdout += s
      for (const line of s.split('\n')) if (line.trim()) opts.sse.log(line)
    })
    proc.stderr.on('data', (d) => {
      const s = d.toString()
      stderr += s
      for (const line of s.split('\n')) if (line.trim()) opts.sse.log(line)
    })
    proc.on('error', rejectP)
    proc.on('close', (code) => resolveP({ code: code ?? 0, stdout, stderr }))
  })
}

export async function gitChangedFiles(repoRoot: string): Promise<string[]> {
  const git = simpleGit(repoRoot)
  const status = await git.status()
  const all = [
    ...status.modified,
    ...status.created,
    ...status.not_added,
    ...status.deleted,
    ...status.renamed.map((r) => r.to),
  ]
  return [...new Set(all)]
}

export async function gitCommitAndPush(opts: {
  repoRoot: string
  files: string[]
  message: string
  remote: string
  branch: string
  sse: SSEStream
}): Promise<{ commitSha: string }> {
  const git = simpleGit(opts.repoRoot)
  opts.sse.step('git-add', `add ${opts.files.length} файлов`)
  await git.add(opts.files)
  opts.sse.step('git-commit', `commit "${opts.message}"`)
  const c = await git.commit(opts.message, opts.files)
  if (!c.commit) throw new Error('commit produced no sha (nothing to commit?)')
  opts.sse.step('git-push', `push to ${opts.remote}/${opts.branch}`)
  await git.push(opts.remote, opts.branch)
  return { commitSha: c.commit }
}

export async function pollPagesManifest(opts: {
  url: string
  expectAfter: number
  sse: SSEStream
  timeoutMs?: number
}): Promise<boolean> {
  if (!opts.url) return true
  const deadline = Date.now() + (opts.timeoutMs ?? 120000)
  while (Date.now() < deadline) {
    try {
      const r = await fetch(opts.url + `?cb=${Date.now()}`, { cache: 'no-store' })
      if (r.ok) {
        const m = await r.json() as { contentVersion?: number }
        if (m.contentVersion && m.contentVersion >= opts.expectAfter) {
          opts.sse.step('pages-deployed', `contentVersion=${m.contentVersion}`)
          return true
        }
      }
    } catch (e) {
      opts.sse.log(`poll error: ${(e as Error).message}`)
    }
    await new Promise((r) => setTimeout(r, 5000))
  }
  opts.sse.log('Pages poll timed out')
  return false
}

export function readXrelayKey(env: EditorEnv): string {
  if (process.env.XRELAY_KEY) return process.env.XRELAY_KEY
  if (env.XRELAY_KEY_FILE && fs.existsSync(env.XRELAY_KEY_FILE)) {
    return fs.readFileSync(env.XRELAY_KEY_FILE, 'utf8').trim()
  }
  return ''
}
