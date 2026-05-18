import { useEffect, useState } from 'react'
import { api, type Lang } from './api'

interface Block {
  kind: string
  text?: string
  items?: any[]
  url?: string
}

interface Step {
  id: string
  title: string
  audience?: any
  content: Block[]
}

interface Guide {
  id: string
  categoryId: string
  title: string
  tldr?: string
  tags?: string[]
  steps: Step[]
  lastVerified?: string
  recentlyChangedAt?: string
  costs?: any[]
  sources?: any[]
  pendingLaw?: { summary?: string }
  variants?: any[]
}

export function GuideViewer({ id, lang }: { id: string; lang: Lang }) {
  const [guide, setGuide] = useState<Guide | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setGuide(null)
    setError(null)
    api.guide(id, lang).then(setGuide).catch((e) => setError(String(e)))
  }, [id, lang])

  if (error) return <div className="p-6 text-red-700">{error}</div>
  if (!guide) return <div className="p-6 text-ink/40">Загрузка…</div>

  return (
    <article className="p-6 max-w-3xl">
      <div className="text-xs text-ink/50 mb-2 flex items-center gap-2">
        <span>{guide.id}</span>
        <span>·</span>
        <span>{guide.categoryId}</span>
        {guide.lastVerified && (
          <>
            <span>·</span>
            <span>verified {guide.lastVerified}</span>
          </>
        )}
        {lang !== 'ru' && (
          <span className="ml-auto px-2 py-0.5 bg-yellow-100 text-yellow-800 rounded text-[10px] uppercase">
            read-only
          </span>
        )}
      </div>
      <h1 className="text-2xl font-bold mb-3">{guide.title}</h1>
      {guide.tldr && <p className="text-sm text-ink/80 mb-4 leading-relaxed">{guide.tldr}</p>}
      {guide.pendingLaw?.summary && (
        <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded text-xs text-amber-900">
          <div className="font-semibold mb-1">Pending law</div>
          {guide.pendingLaw.summary}
        </div>
      )}
      {guide.tags && guide.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-6">
          {guide.tags.map((t) => (
            <span key={t} className="px-2 py-0.5 bg-ink/10 text-xs rounded">{t}</span>
          ))}
        </div>
      )}
      <div className="space-y-6">
        {guide.steps?.map((step, i) => (
          <section key={step.id ?? i} className="border-l-2 border-ink/15 pl-4">
            <h2 className="font-semibold text-lg mb-2">
              <span className="text-ink/40 mr-2">{i + 1}.</span>
              {step.title}
            </h2>
            <div className="space-y-3">
              {step.content?.map((b, j) => <BlockView key={j} block={b} />)}
            </div>
          </section>
        ))}
      </div>
      {guide.costs && guide.costs.length > 0 && (
        <div className="mt-6 pt-4 border-t border-ink/10">
          <h3 className="font-semibold text-sm mb-2 text-ink/70">Расходы</h3>
          <ul className="text-sm space-y-1">
            {guide.costs.map((c, i) => (
              <li key={i}>
                <span className="font-medium">{c.label}:</span>{' '}
                {c.amountEUR != null
                  ? `${c.amountEUR} €`
                  : c.amountEURMin != null
                  ? `${c.amountEURMin}–${c.amountEURMax} €`
                  : ''}
                {c.note ? <span className="text-ink/50"> · {c.note}</span> : null}
              </li>
            ))}
          </ul>
        </div>
      )}
      {guide.sources && guide.sources.length > 0 && (
        <div className="mt-4 pt-4 border-t border-ink/10">
          <h3 className="font-semibold text-sm mb-2 text-ink/70">Источники</h3>
          <ul className="text-xs space-y-1">
            {guide.sources.map((s, i) => (
              <li key={i}>
                <a href={s.url} target="_blank" rel="noreferrer" className="text-blue-700 underline">
                  {s.title}
                </a>
                {s.kind ? <span className="text-ink/40"> · {s.kind}</span> : null}
                {s.lastRetrieved ? <span className="text-ink/40"> · {s.lastRetrieved}</span> : null}
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  )
}

function BlockView({ block }: { block: Block }) {
  switch (block.kind) {
    case 'paragraph':
      return <p className="text-sm leading-relaxed whitespace-pre-wrap">{block.text}</p>
    case 'warning':
      return (
        <div className="p-3 bg-amber-50 border-l-4 border-amber-500 text-sm">
          <span className="font-semibold mr-1">⚠️</span>
          {block.text}
        </div>
      )
    case 'timeline':
      return (
        <div className="p-3 bg-blue-50 border-l-4 border-blue-500 text-sm">
          <span className="font-semibold mr-1">⏱</span>
          {block.text}
        </div>
      )
    case 'checklist':
      return (
        <ul className="text-sm space-y-1 list-disc pl-5">
          {(block.items as string[])?.map((it, i) => <li key={i}>{it}</li>)}
        </ul>
      )
    case 'cost':
      return (
        <ul className="text-sm space-y-1">
          {(block.items as any[])?.map((c, i) => (
            <li key={i}>
              💶 <span className="font-medium">{c.label}:</span>{' '}
              {c.amountEUR != null ? `${c.amountEUR} €` : `${c.amountEURMin}–${c.amountEURMax} €`}
              {c.note ? <span className="text-ink/50"> · {c.note}</span> : null}
            </li>
          ))}
        </ul>
      )
    case 'link':
      return (
        <a href={block.url} target="_blank" rel="noreferrer" className="text-sm text-blue-700 underline">
          {block.text || block.url}
        </a>
      )
    case 'substeps':
      return (
        <div className="ml-4 space-y-3 border-l-2 border-ink/10 pl-3">
          {(block.items as any[])?.map((s, i) => (
            <div key={s.id ?? i}>
              <div className="font-medium text-sm mb-1">{s.title}</div>
              <div className="space-y-2">
                {s.content?.map((b: Block, j: number) => <BlockView key={j} block={b} />)}
              </div>
            </div>
          ))}
        </div>
      )
    default:
      return (
        <pre className="text-xs bg-ink/5 p-2 rounded overflow-x-auto">
          {JSON.stringify(block, null, 2)}
        </pre>
      )
  }
}
