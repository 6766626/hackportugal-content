import { useEffect, useRef, useState } from 'react'

interface GitStatus {
  files: string[]
  ru: string[]
  translations: string[]
  other: string[]
}

interface SSEEvent {
  type: 'log' | 'step' | 'done' | 'error'
  step?: string
  msg?: string
  data?: any
}

type Mode = 'publish' | 'translate'

export function PublishModal({ mode, onClose }: { mode: Mode; onClose: () => void }) {
  const [status, setStatus] = useState<GitStatus | null>(null)
  const [message, setMessage] = useState('Update content')
  const [running, setRunning] = useState(false)
  const [logs, setLogs] = useState<string[]>([])
  const [stepName, setStepName] = useState<string | null>(null)
  const [done, setDone] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const logRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    fetch('/api/git/status').then((r) => r.json()).then((d) => {
      setStatus(d)
      if (d.ru?.length) {
        const ids = d.ru.map((f: string) => f.split('/').pop()?.replace('.mjs', '')).filter(Boolean)
        setMessage(`Update ${ids.slice(0, 3).join(', ')}${ids.length > 3 ? ` +${ids.length - 3}` : ''}`)
      }
    })
  }, [])

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: 'smooth' })
  }, [logs.length])

  const start = async () => {
    setRunning(true)
    setLogs([])
    setError(null)
    setDone(false)
    const url = mode === 'publish' ? '/api/publish' : '/api/translate-and-publish'
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      })
      if (!res.body) throw new Error('No SSE body')
      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let buffer = ''
      while (true) {
        const { value, done: rd } = await reader.read()
        if (rd) break
        buffer += decoder.decode(value, { stream: true })
        const events = buffer.split('\n\n')
        buffer = events.pop() ?? ''
        for (const e of events) {
          for (const line of e.split('\n')) {
            if (!line.startsWith('data: ')) continue
            try {
              const ev = JSON.parse(line.slice(6)) as SSEEvent
              if (ev.type === 'log') setLogs((l) => [...l, ev.msg ?? ''])
              else if (ev.type === 'step') {
                setStepName(ev.step ?? null)
                setLogs((l) => [...l, `\n▶ ${ev.step}${ev.msg ? ` — ${ev.msg}` : ''}`])
              } else if (ev.type === 'done') {
                setDone(true)
                setLogs((l) => [...l, '\n✓ Готово'])
              } else if (ev.type === 'error') {
                setError(ev.msg ?? 'Unknown error')
                setLogs((l) => [...l, `\n✗ ${ev.msg}`])
              }
            } catch {}
          }
        }
      }
    } catch (e) {
      setError(String(e))
    } finally {
      setRunning(false)
    }
  }

  const ruIds = (status?.ru ?? []).map((f) => f.split('/').pop()?.replace('.mjs', '')).filter(Boolean) as string[]

  return (
    <div className="fixed inset-0 bg-ink/40 z-50 flex items-center justify-center p-4">
      <div className="bg-cream rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] flex flex-col">
        <div className="px-5 py-3 border-b border-ink/10 flex items-center justify-between">
          <h2 className="font-semibold">
            {mode === 'publish' ? 'Опубликовать (RU)' : 'Перевести и опубликовать (RU + PT + EN)'}
          </h2>
          <button onClick={onClose} className="text-ink/50 hover:text-ink">✕</button>
        </div>
        <div className="p-5 space-y-3 overflow-y-auto">
          {!status && <div className="text-sm text-ink/40">Загрузка…</div>}
          {status && status.ru.length === 0 && (
            <div className="text-sm text-amber-700">Нет изменённых RU-файлов. Сначала отредактируйте и сохраните гайд.</div>
          )}
          {status && status.ru.length > 0 && (
            <>
              <div>
                <div className="text-xs uppercase tracking-wide text-ink/60 mb-1">RU файлов: {status.ru.length}</div>
                <ul className="text-xs font-mono text-ink/80 max-h-32 overflow-y-auto bg-white/50 border border-ink/10 rounded p-2">
                  {ruIds.map((id, i) => <li key={i}>{id}</li>)}
                </ul>
              </div>
              {status.other.length > 0 && (
                <div className="text-xs text-amber-700">
                  ⚠️ Также изменены не-content файлы — они не попадут в этот коммит: {status.other.join(', ')}
                </div>
              )}
              <label className="block">
                <div className="text-xs uppercase tracking-wide text-ink/60 mb-1">Commit message</div>
                <input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={running}
                  className="w-full px-2 py-1.5 text-sm border border-ink/15 rounded"
                />
              </label>
            </>
          )}
          {(running || logs.length > 0) && (
            <div ref={logRef} className="bg-ink text-cream font-mono text-xs p-3 rounded max-h-72 overflow-y-auto whitespace-pre-wrap">
              {logs.join('\n')}
              {running && !done && <span className="opacity-60">{'\n'}…</span>}
            </div>
          )}
          {stepName && running && !done && (
            <div className="text-sm text-ink/60">⏳ {stepName}</div>
          )}
          {done && <div className="text-sm text-green-700 font-semibold">✓ Опубликовано</div>}
          {error && <div className="text-sm text-red-700">✗ {error}</div>}
        </div>
        <div className="px-5 py-3 border-t border-ink/10 flex justify-end gap-2">
          <button onClick={onClose} className="px-3 py-1.5 text-sm hover:bg-ink/10 rounded">
            {done ? 'Закрыть' : 'Отмена'}
          </button>
          {!done && (
            <button
              onClick={start}
              disabled={running || !status?.ru.length}
              className="px-4 py-1.5 text-sm bg-ink text-cream rounded disabled:opacity-30"
            >
              {running ? 'Работаю…' : mode === 'publish' ? 'Опубликовать' : 'Перевести и опубликовать'}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
