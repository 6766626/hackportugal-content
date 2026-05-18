import type { Guide, Source, Cost, Audience } from '../types'
import { Field } from '../components/Field'

export function MetaTab({ guide, update, readonly }: { guide: Guide; update: (p: Partial<Guide>) => void; readonly?: boolean }) {
  return (
    <div className="p-6 max-w-3xl space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <Field label="ID" hint="Не меняйте без необходимости — ломает ссылки">
          <input value={guide.id} onChange={(e) => update({ id: e.target.value })} disabled className="w-full px-2 py-1.5 text-sm border border-ink/15 rounded font-mono bg-ink/5" />
        </Field>
        <Field label="Category">
          <input value={guide.categoryId} onChange={(e) => update({ categoryId: e.target.value })} disabled={readonly} className="w-full px-2 py-1.5 text-sm border border-ink/15 rounded" />
        </Field>
        <Field label="Editorial voice">
          <input value={guide.editorialVoice ?? ''} onChange={(e) => update({ editorialVoice: e.target.value || undefined })} disabled={readonly} className="w-full px-2 py-1.5 text-sm border border-ink/15 rounded" />
        </Field>
        <Field label="Estimated read minutes">
          <input type="number" value={guide.estimatedReadMinutes ?? ''} onChange={(e) => update({ estimatedReadMinutes: e.target.value === '' ? undefined : Number(e.target.value) })} disabled={readonly} className="w-full px-2 py-1.5 text-sm border border-ink/15 rounded" />
        </Field>
        <Field label="Last verified" hint="YYYY-MM-DD">
          <input value={guide.lastVerified ?? ''} onChange={(e) => update({ lastVerified: e.target.value || undefined })} disabled={readonly} className="w-full px-2 py-1.5 text-sm border border-ink/15 rounded font-mono" />
        </Field>
        <Field label="Verify interval (days)">
          <input type="number" value={guide.verifyIntervalDays ?? ''} onChange={(e) => update({ verifyIntervalDays: e.target.value === '' ? undefined : Number(e.target.value) })} disabled={readonly} className="w-full px-2 py-1.5 text-sm border border-ink/15 rounded" />
        </Field>
        <Field label="Recently changed at" hint="YYYY-MM-DD; для свежих изменений">
          <input value={guide.recentlyChangedAt ?? ''} onChange={(e) => update({ recentlyChangedAt: e.target.value || undefined })} disabled={readonly} className="w-full px-2 py-1.5 text-sm border border-ink/15 rounded font-mono" />
        </Field>
        <Field label="Timeline (days, min/max)">
          <div className="flex gap-1">
            <input type="number" placeholder="min" value={guide.timelineDaysMin ?? ''} onChange={(e) => update({ timelineDaysMin: e.target.value === '' ? undefined : Number(e.target.value) })} disabled={readonly} className="w-1/2 px-2 py-1.5 text-sm border border-ink/15 rounded" />
            <input type="number" placeholder="max" value={guide.timelineDaysMax ?? ''} onChange={(e) => update({ timelineDaysMax: e.target.value === '' ? undefined : Number(e.target.value) })} disabled={readonly} className="w-1/2 px-2 py-1.5 text-sm border border-ink/15 rounded" />
          </div>
        </Field>
      </div>

      <Field label="Tags" hint="Через запятую">
        <input
          value={(guide.tags ?? []).join(', ')}
          onChange={(e) => update({ tags: e.target.value.split(',').map((x) => x.trim()).filter(Boolean) })}
          disabled={readonly}
          className="w-full px-2 py-1.5 text-sm border border-ink/15 rounded"
        />
      </Field>

      <Field label="Change summary" hint="Что и почему изменилось — для пользователей">
        <textarea
          value={guide.changeSummary ?? ''}
          onChange={(e) => update({ changeSummary: e.target.value || undefined })}
          disabled={readonly}
          rows={2}
          className="w-full px-2 py-1.5 text-sm border border-ink/15 rounded leading-relaxed"
        />
      </Field>

      <Field label="Pending law summary" hint="Если есть pending изменение закона">
        <textarea
          value={guide.pendingLaw?.summary ?? ''}
          onChange={(e) => {
            const v = e.target.value
            update({ pendingLaw: v ? { summary: v } : undefined })
          }}
          disabled={readonly}
          rows={3}
          className="w-full px-2 py-1.5 text-sm border border-ink/15 rounded leading-relaxed"
        />
      </Field>

      <AudienceEditor audience={guide.audience} onChange={(a) => update({ audience: a })} readonly={readonly} />
      <CostsEditor costs={guide.costs} onChange={(c) => update({ costs: c })} readonly={readonly} />
      <SourcesEditor sources={guide.sources} onChange={(s) => update({ sources: s })} readonly={readonly} />
    </div>
  )
}

function AudienceEditor({ audience, onChange, readonly }: { audience?: Audience; onChange: (a?: Audience) => void; readonly?: boolean }) {
  const a = audience ?? {}
  const set = (patch: Audience) => {
    const next = { ...a, ...patch }
    if (next.citizenships?.length === 0) delete next.citizenships
    if (next.countryCodes?.length === 0) delete next.countryCodes
    onChange(Object.keys(next).length === 0 ? undefined : next)
  }
  return (
    <Field label="Audience" hint="Кому показывать (пусто = всем)">
      <div className="grid grid-cols-2 gap-2">
        <input
          value={(a.citizenships ?? []).join(', ')}
          onChange={(e) => set({ citizenships: e.target.value.split(',').map((x) => x.trim()).filter(Boolean) })}
          placeholder="cplp, euEeaSwiss, thirdCountry"
          disabled={readonly}
          className="px-2 py-1.5 text-sm border border-ink/15 rounded"
        />
        <input
          value={(a.countryCodes ?? []).join(', ')}
          onChange={(e) => set({ countryCodes: e.target.value.split(',').map((x) => x.trim()).filter(Boolean) })}
          placeholder="BR, RU, UA"
          disabled={readonly}
          className="px-2 py-1.5 text-sm border border-ink/15 rounded"
        />
      </div>
    </Field>
  )
}

function CostsEditor({ costs, onChange, readonly }: { costs?: Cost[]; onChange: (c: Cost[] | undefined) => void; readonly?: boolean }) {
  const list = costs ?? []
  const set = (i: number, patch: Partial<Cost>) => onChange(list.map((c, k) => k === i ? { ...c, ...patch } : c))
  const remove = (i: number) => onChange(list.length > 1 ? list.filter((_, k) => k !== i) : undefined)
  const add = () => onChange([...list, { label: '', amountEUR: 0 }])
  return (
    <div>
      <div className="text-xs uppercase tracking-wide text-ink/60 font-medium mb-1">Costs</div>
      <div className="space-y-1">
        {list.map((c, i) => (
          <div key={i} className="grid grid-cols-[1fr_4.5rem_4.5rem_1fr_auto] gap-1">
            <input value={c.label ?? ''} onChange={(e) => set(i, { label: e.target.value })} disabled={readonly} placeholder="label" className="px-1.5 py-1 text-xs border border-ink/15 rounded" />
            <input type="number" value={c.amountEUR ?? c.amountEURMin ?? ''} onChange={(e) => {
              const v = e.target.value === '' ? undefined : Number(e.target.value)
              if (c.amountEURMax != null) set(i, { amountEURMin: v, amountEUR: undefined })
              else set(i, { amountEUR: v, amountEURMin: undefined })
            }} disabled={readonly} placeholder="EUR" className="px-1.5 py-1 text-xs border border-ink/15 rounded" />
            <input type="number" value={c.amountEURMax ?? ''} onChange={(e) => {
              const v = e.target.value === '' ? undefined : Number(e.target.value)
              if (v == null) set(i, { amountEURMax: undefined })
              else set(i, { amountEURMax: v, amountEURMin: c.amountEURMin ?? c.amountEUR, amountEUR: undefined })
            }} disabled={readonly} placeholder="—Max" className="px-1.5 py-1 text-xs border border-ink/15 rounded" />
            <input value={c.note ?? ''} onChange={(e) => set(i, { note: e.target.value || undefined })} disabled={readonly} placeholder="note" className="px-1.5 py-1 text-xs border border-ink/15 rounded" />
            {!readonly && <button onClick={() => remove(i)} className="text-red-700 text-xs px-1">✕</button>}
          </div>
        ))}
      </div>
      {!readonly && <button onClick={add} className="mt-1 text-xs text-ink/60 hover:text-ink">+ cost</button>}
    </div>
  )
}

function SourcesEditor({ sources, onChange, readonly }: { sources?: Source[]; onChange: (s: Source[] | undefined) => void; readonly?: boolean }) {
  const list = sources ?? []
  const set = (i: number, patch: Partial<Source>) => onChange(list.map((s, k) => k === i ? { ...s, ...patch } : s))
  const remove = (i: number) => onChange(list.length > 1 ? list.filter((_, k) => k !== i) : undefined)
  const add = () => onChange([...list, { title: '', url: 'https://', kind: 'official', language: 'pt', lastRetrieved: new Date().toISOString().slice(0, 10) }])
  return (
    <div>
      <div className="text-xs uppercase tracking-wide text-ink/60 font-medium mb-1">Sources</div>
      <div className="space-y-2">
        {list.map((s, i) => (
          <div key={i} className="border border-ink/10 bg-white rounded p-2 space-y-1">
            <input value={s.title} onChange={(e) => set(i, { title: e.target.value })} disabled={readonly} placeholder="title" className="w-full px-2 py-1 text-sm border border-ink/15 rounded" />
            <input value={s.url} onChange={(e) => set(i, { url: e.target.value })} disabled={readonly} placeholder="https://…" className="w-full px-2 py-1 text-xs border border-ink/15 rounded font-mono" />
            <div className="flex gap-1 items-center">
              <select value={s.kind ?? 'official'} onChange={(e) => set(i, { kind: e.target.value })} disabled={readonly} className="px-1.5 py-1 text-xs border border-ink/15 rounded">
                <option value="official">official</option>
                <option value="law">law</option>
                <option value="press">press</option>
                <option value="community">community</option>
              </select>
              <select value={s.language ?? 'pt'} onChange={(e) => set(i, { language: e.target.value })} disabled={readonly} className="px-1.5 py-1 text-xs border border-ink/15 rounded">
                <option value="pt">pt</option>
                <option value="en">en</option>
                <option value="ru">ru</option>
              </select>
              <input value={s.lastRetrieved ?? ''} onChange={(e) => set(i, { lastRetrieved: e.target.value || undefined })} disabled={readonly} placeholder="YYYY-MM-DD" className="px-1.5 py-1 text-xs border border-ink/15 rounded font-mono w-28" />
              {!readonly && <button onClick={() => remove(i)} className="text-red-700 text-xs px-1 ml-auto">✕</button>}
            </div>
          </div>
        ))}
      </div>
      {!readonly && <button onClick={add} className="mt-1 text-xs text-ink/60 hover:text-ink">+ source</button>}
    </div>
  )
}
