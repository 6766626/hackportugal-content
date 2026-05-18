import { useEffect, useState } from 'react'
import { api } from '../api'

export function TranslationTab({ id }: { id: string }) {
  const [pt, setPt] = useState<any | null>(null)
  const [en, setEn] = useState<any | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setPt(null); setEn(null); setError(null)
    Promise.allSettled([api.guide(id, 'pt'), api.guide(id, 'en')]).then(([p, e]) => {
      if (p.status === 'fulfilled') setPt(p.value); else setPt({ _missing: true })
      if (e.status === 'fulfilled') setEn(e.value); else setEn({ _missing: true })
    }).catch((err) => setError(String(err)))
  }, [id])

  if (error) return <div className="p-6 text-red-700">{error}</div>

  return (
    <div className="p-6 grid grid-cols-2 gap-6 text-sm">
      <Section title="Português (PT-PT)" guide={pt} />
      <Section title="English" guide={en} />
    </div>
  )
}

function Section({ title, guide }: { title: string; guide: any }) {
  if (!guide) return <div className="text-ink/40">Загрузка…</div>
  if (guide._missing) return <div className="text-amber-700">Перевод отсутствует — будет создан при «Перевести и опубликовать»</div>
  return (
    <div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <div className="space-y-2">
        <div className="font-medium">{guide.title}</div>
        <div className="text-ink/70 leading-relaxed">{guide.tldr}</div>
        <div className="space-y-1 text-xs text-ink/60 mt-3">
          {guide.steps?.slice(0, 3).map((s: any, i: number) => (
            <div key={i}><strong>{s.title}</strong></div>
          ))}
          {(guide.steps?.length ?? 0) > 3 && <div>…ещё {guide.steps.length - 3} шагов</div>}
        </div>
      </div>
    </div>
  )
}
