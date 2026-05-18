import { useCallback, useEffect, useMemo, useState } from 'react'
import { api, type CategoryEntry, type GuideSummary, type Lang } from './api'
import { GuideEditor } from './GuideEditor'
import { PublishModal } from './PublishModal'

export function App() {
  const [categories, setCategories] = useState<CategoryEntry[]>([])
  const [guides, setGuides] = useState<GuideSummary[]>([])
  const [lang, setLang] = useState<Lang>('ru')
  const [selectedCat, setSelectedCat] = useState<string | null>(null)
  const [selectedGuide, setSelectedGuide] = useState<string | null>(null)
  const [search, setSearch] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [dirtyFiles, setDirtyFiles] = useState<string[]>([])
  const [modal, setModal] = useState<'publish' | 'translate' | null>(null)

  const reloadStatus = useCallback(() => {
    fetch('/api/git/status').then((r) => r.json()).then((d) => setDirtyFiles(d.ru ?? []))
  }, [])

  useEffect(() => {
    Promise.all([api.categories(), api.guides(lang)])
      .then(([c, g]) => {
        setCategories(c)
        setGuides(g)
      })
      .catch((e) => setError(String(e)))
    reloadStatus()
  }, [lang, reloadStatus])

  const guidesByCat = useMemo(() => {
    const m = new Map<string, number>()
    for (const g of guides) m.set(g.categoryId, (m.get(g.categoryId) ?? 0) + 1)
    return m
  }, [guides])

  const dirtyIds = useMemo(() => {
    return new Set(dirtyFiles.map((f) => f.split('/').pop()?.replace('.mjs', '') ?? '').filter(Boolean))
  }, [dirtyFiles])

  const filteredGuides = useMemo(() => {
    let list = guides
    if (selectedCat) list = list.filter((g) => g.categoryId === selectedCat)
    if (search) {
      const s = search.toLowerCase()
      list = list.filter((g) => g.id.toLowerCase().includes(s) || g.title.toLowerCase().includes(s))
    }
    return list
  }, [guides, selectedCat, search])

  const sortedCats = useMemo(() => [...categories].sort((a, b) => a.order - b.order), [categories])

  const closeModal = () => {
    setModal(null)
    reloadStatus()
  }

  return (
    <div className="h-full flex flex-col">
      <header className="px-4 py-2 border-b border-ink/10 flex items-center justify-between bg-white/40">
        <div className="font-semibold">HackPortugal Editor</div>
        <div className="flex items-center gap-3 text-sm">
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value as Lang)}
            className="px-2 py-1 border border-ink/15 rounded text-xs"
          >
            <option value="ru">RU (источник)</option>
            <option value="pt">PT (только просмотр)</option>
            <option value="en">EN (только просмотр)</option>
          </select>
          <span className="text-xs text-ink/50">{guides.length} гайдов</span>
          <span className="text-xs text-amber-700">
            {dirtyFiles.length > 0 ? `${dirtyFiles.length} изм.` : ''}
          </span>
          <button
            onClick={() => setModal('publish')}
            disabled={dirtyFiles.length === 0}
            className="px-3 py-1 text-sm bg-ink text-cream rounded disabled:opacity-30"
          >
            ▶ Опубликовать
          </button>
          <button
            onClick={() => setModal('translate')}
            disabled={dirtyFiles.length === 0}
            className="px-3 py-1 text-sm border border-ink rounded disabled:opacity-30"
          >
            🌐 Перевести → опубликовать
          </button>
        </div>
      </header>
      <main className="flex-1 grid grid-cols-[15rem_22rem_1fr] min-h-0">
        <aside className="border-r border-ink/10 overflow-y-auto">
          <button
            onClick={() => setSelectedCat(null)}
            className={`w-full text-left px-3 py-1.5 text-sm hover:bg-ink/5 ${selectedCat === null ? 'bg-ink/10 font-medium' : ''}`}
          >
            Все ({guides.length})
          </button>
          {sortedCats.map((c) => {
            const count = guidesByCat.get(c.id) ?? 0
            return (
              <button
                key={c.id}
                onClick={() => setSelectedCat(c.id)}
                className={`w-full text-left px-3 py-1.5 text-sm hover:bg-ink/5 flex justify-between gap-2 ${selectedCat === c.id ? 'bg-ink/10 font-medium' : ''}`}
              >
                <span className="truncate">{c.title}</span>
                <span className="text-xs text-ink/40 shrink-0">{count}</span>
              </button>
            )
          })}
        </aside>

        <section className="border-r border-ink/10 flex flex-col min-h-0">
          <div className="p-2 border-b border-ink/10">
            <input
              type="search"
              placeholder="Поиск по id/title…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-2 py-1.5 text-sm border border-ink/15 rounded"
            />
          </div>
          <div className="flex-1 overflow-y-auto">
            {filteredGuides.map((g) => {
              const isDirty = dirtyIds.has(g.id)
              return (
                <button
                  key={g.id}
                  onClick={() => setSelectedGuide(g.id)}
                  className={`w-full text-left px-3 py-2 text-sm border-b border-ink/5 hover:bg-ink/5 ${selectedGuide === g.id ? 'bg-ink/10' : ''}`}
                >
                  <div className="font-medium truncate flex items-center gap-1">
                    {isDirty && <span className="text-amber-600 text-xs">●</span>}
                    {g.title}
                  </div>
                  <div className="text-xs text-ink/50 truncate">
                    {g.id} · {g.categoryId}
                    {g.lastVerified ? ` · ${g.lastVerified}` : ''}
                  </div>
                </button>
              )
            })}
            {filteredGuides.length === 0 && (
              <div className="p-3 text-sm text-ink/40">Ничего не найдено</div>
            )}
          </div>
        </section>

        <section className="overflow-y-auto">
          {error && <div className="p-4 text-red-700">Ошибка: {error}</div>}
          {!error && selectedGuide && (
            <GuideEditor
              key={selectedGuide + lang}
              id={selectedGuide}
              lang={lang}
              onChange={() => reloadStatus()}
            />
          )}
          {!error && !selectedGuide && (
            <div className="p-6 text-sm text-ink/50">Выбери гайд слева</div>
          )}
        </section>
      </main>

      {modal && <PublishModal mode={modal} onClose={closeModal} />}
    </div>
  )
}
