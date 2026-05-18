import { useEffect, useState } from 'react'
import { api, type Lang } from './api'
import type { Guide } from './types'
import { ContentTab } from './tabs/ContentTab'
import { MetaTab } from './tabs/MetaTab'
import { TranslationTab } from './tabs/TranslationTab'

type Tab = 'content' | 'meta' | 'translation'

export function GuideEditor({ id, lang, onChange }: { id: string; lang: Lang; onChange?: (dirty: boolean) => void }) {
  const [guide, setGuide] = useState<Guide | null>(null)
  const [original, setOriginal] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [tab, setTab] = useState<Tab>('content')
  const [saving, setSaving] = useState(false)
  const [saveStatus, setSaveStatus] = useState<{ kind: 'ok' | 'error'; msg: string } | null>(null)

  useEffect(() => {
    setGuide(null)
    setError(null)
    setSaveStatus(null)
    api.guide(id, lang).then((g) => {
      setGuide(g)
      setOriginal(JSON.stringify(g))
    }).catch((e) => setError(String(e)))
  }, [id, lang])

  const dirty = guide !== null && original !== null && JSON.stringify(guide) !== original
  useEffect(() => { onChange?.(dirty) }, [dirty, onChange])

  if (error) return <div className="p-6 text-red-700">{error}</div>
  if (!guide) return <div className="p-6 text-ink/40">Загрузка…</div>

  const update = (patch: Partial<Guide>) => setGuide({ ...guide, ...patch })

  const save = async () => {
    if (!guide || lang !== 'ru') return
    setSaving(true)
    setSaveStatus(null)
    try {
      const res = await fetch(`/api/guides/${guide.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(guide),
      })
      const data = await res.json()
      if (!res.ok || data.error) {
        setSaveStatus({ kind: 'error', msg: data.error || `${res.status}` })
      } else {
        setOriginal(JSON.stringify(guide))
        setSaveStatus({ kind: 'ok', msg: data.validation?.warnings?.length ? `Сохранено (${data.validation.warnings.length} предупр.)` : 'Сохранено' })
      }
    } catch (e) {
      setSaveStatus({ kind: 'error', msg: String(e) })
    } finally {
      setSaving(false)
    }
  }

  const readonly = lang !== 'ru'

  return (
    <div className="flex flex-col h-full">
      <div className="px-4 py-2 border-b border-ink/10 bg-white/40 flex items-center justify-between sticky top-0 z-10">
        <div className="flex gap-1">
          <TabBtn active={tab === 'content'} onClick={() => setTab('content')}>Контент</TabBtn>
          <TabBtn active={tab === 'meta'} onClick={() => setTab('meta')}>Метаданные</TabBtn>
          <TabBtn active={tab === 'translation'} onClick={() => setTab('translation')}>Перевод</TabBtn>
        </div>
        <div className="flex items-center gap-3">
          {saveStatus && (
            <span className={`text-xs ${saveStatus.kind === 'ok' ? 'text-green-700' : 'text-red-700'}`}>
              {saveStatus.msg}
            </span>
          )}
          {dirty && !saveStatus && <span className="text-xs text-amber-700">● изменено</span>}
          <button
            onClick={save}
            disabled={!dirty || saving || readonly}
            className="px-3 py-1 text-sm bg-ink text-cream rounded disabled:opacity-30"
          >
            {saving ? 'Сохраняю…' : 'Сохранить'}
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        {readonly && (
          <div className="px-6 pt-3 text-xs text-amber-800">
            ⚠️ Чтение перевода. Редактирование доступно только для RU. Чтобы обновить переводы, опубликуйте RU и нажмите «Перевести».
          </div>
        )}
        {tab === 'content' && <ContentTab guide={guide} update={update} readonly={readonly} />}
        {tab === 'meta' && <MetaTab guide={guide} update={update} readonly={readonly} />}
        {tab === 'translation' && <TranslationTab id={guide.id} />}
      </div>
    </div>
  )
}

function TabBtn({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 text-sm rounded ${active ? 'bg-ink text-cream' : 'hover:bg-ink/10'}`}
    >
      {children}
    </button>
  )
}
