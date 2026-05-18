import type { Block } from '../../types'

export function BlockEditor({ block, onChange, onRemove, onMoveUp, onMoveDown, readonly }: {
  block: Block
  onChange: (b: Block) => void
  onRemove: () => void
  onMoveUp?: () => void
  onMoveDown?: () => void
  readonly?: boolean
}) {
  const { kind } = block
  return (
    <div className={`rounded border ${frame(kind)} relative group`}>
      <div className="flex items-center justify-between px-2 py-1 border-b border-current/20 text-xs uppercase tracking-wide opacity-60">
        <span>{kind}</span>
        {!readonly && (
          <div className="flex items-center gap-1">
            {onMoveUp && <button onClick={onMoveUp} className="px-1 hover:opacity-100 opacity-70" title="Выше">▲</button>}
            {onMoveDown && <button onClick={onMoveDown} className="px-1 hover:opacity-100 opacity-70" title="Ниже">▼</button>}
            <button onClick={onRemove} className="px-1 text-red-700 hover:opacity-100 opacity-70" title="Удалить">✕</button>
          </div>
        )}
      </div>
      <div className="p-2">
        {kind === 'paragraph' && <TextBlock value={block.text ?? ''} onChange={(text) => onChange({ kind: 'paragraph', text })} readonly={readonly} />}
        {kind === 'warning' && <TextBlock value={block.text ?? ''} onChange={(text) => onChange({ kind: 'warning', text })} readonly={readonly} rows={3} />}
        {kind === 'timeline' && <TextBlock value={block.text ?? ''} onChange={(text) => onChange({ kind: 'timeline', text })} readonly={readonly} rows={3} />}
        {kind === 'checklist' && <ChecklistBlock items={(block.items as string[]) ?? []} onChange={(items) => onChange({ kind: 'checklist', items })} readonly={readonly} />}
        {kind === 'link' && <LinkBlock text={block.text ?? ''} url={block.url ?? ''} onChange={(text, url) => onChange({ kind: 'link', text, url })} readonly={readonly} />}
        {kind === 'cost' && <CostBlock items={(block.items as any[]) ?? []} onChange={(items) => onChange({ kind: 'cost', items })} readonly={readonly} />}
        {kind === 'substeps' && <SubstepsBlock items={(block.items as any[]) ?? []} onChange={(items) => onChange({ kind: 'substeps', items })} readonly={readonly} />}
      </div>
    </div>
  )
}

function frame(kind: Block['kind']): string {
  switch (kind) {
    case 'warning': return 'border-amber-300 bg-amber-50'
    case 'timeline': return 'border-blue-300 bg-blue-50'
    case 'cost': return 'border-emerald-300 bg-emerald-50'
    case 'link': return 'border-indigo-300 bg-indigo-50'
    case 'substeps': return 'border-purple-300 bg-purple-50'
    case 'checklist': return 'border-ink/20 bg-white'
    default: return 'border-ink/20 bg-white'
  }
}

function TextBlock({ value, onChange, readonly, rows = 3 }: { value: string; onChange: (s: string) => void; readonly?: boolean; rows?: number }) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={readonly}
      rows={rows}
      className="w-full px-2 py-1 text-sm border border-ink/15 rounded leading-relaxed bg-white resize-y"
    />
  )
}

function ChecklistBlock({ items, onChange, readonly }: { items: string[]; onChange: (items: string[]) => void; readonly?: boolean }) {
  const set = (i: number, v: string) => onChange(items.map((x, k) => k === i ? v : x))
  const remove = (i: number) => onChange(items.filter((_, k) => k !== i))
  const add = () => onChange([...items, ''])
  const move = (i: number, dir: -1 | 1) => {
    const t = i + dir
    if (t < 0 || t >= items.length) return
    const c = [...items]
    ;[c[i], c[t]] = [c[t], c[i]]
    onChange(c)
  }
  return (
    <div className="space-y-1">
      {items.map((it, i) => (
        <div key={i} className="flex gap-1 items-start">
          <span className="text-ink/40 mt-1.5 select-none">•</span>
          <textarea
            value={it}
            onChange={(e) => set(i, e.target.value)}
            disabled={readonly}
            rows={Math.max(1, Math.ceil(it.length / 70))}
            className="flex-1 px-2 py-1 text-sm border border-ink/15 rounded resize-none"
          />
          {!readonly && (
            <div className="flex flex-col">
              <button onClick={() => move(i, -1)} disabled={i === 0} className="text-xs px-1 disabled:opacity-20">▲</button>
              <button onClick={() => move(i, +1)} disabled={i === items.length - 1} className="text-xs px-1 disabled:opacity-20">▼</button>
            </div>
          )}
          {!readonly && (
            <button onClick={() => remove(i)} className="text-red-700 text-xs px-1 mt-1">✕</button>
          )}
        </div>
      ))}
      {!readonly && (
        <button onClick={add} className="text-xs text-ink/60 hover:text-ink mt-1">+ пункт</button>
      )}
    </div>
  )
}

function LinkBlock({ text, url, onChange, readonly }: { text: string; url: string; onChange: (text: string, url: string) => void; readonly?: boolean }) {
  return (
    <div className="space-y-1">
      <input
        type="text"
        value={text}
        onChange={(e) => onChange(e.target.value, url)}
        disabled={readonly}
        placeholder="Текст ссылки"
        className="w-full px-2 py-1 text-sm border border-ink/15 rounded"
      />
      <input
        type="url"
        value={url}
        onChange={(e) => onChange(text, e.target.value)}
        disabled={readonly}
        placeholder="https://…"
        className="w-full px-2 py-1 text-xs border border-ink/15 rounded font-mono"
      />
    </div>
  )
}

function CostBlock({ items, onChange, readonly }: { items: any[]; onChange: (items: any[]) => void; readonly?: boolean }) {
  const set = (i: number, patch: any) => onChange(items.map((x, k) => k === i ? { ...x, ...patch } : x))
  const remove = (i: number) => onChange(items.filter((_, k) => k !== i))
  const add = () => onChange([...items, { label: '', amountEUR: 0 }])
  return (
    <div className="space-y-2">
      {items.map((c, i) => (
        <div key={i} className="grid grid-cols-[1fr_5rem_5rem_1fr_auto] gap-1 items-start">
          <input value={c.label ?? ''} onChange={(e) => set(i, { label: e.target.value })} disabled={readonly} placeholder="label" className="px-1 py-0.5 text-xs border border-ink/15 rounded" />
          <input type="number" value={c.amountEUR ?? c.amountEURMin ?? ''} onChange={(e) => set(i, e.target.value === '' ? { amountEUR: undefined, amountEURMin: undefined } : c.amountEURMax != null ? { amountEURMin: Number(e.target.value), amountEUR: undefined } : { amountEUR: Number(e.target.value), amountEURMin: undefined })} disabled={readonly} placeholder="EUR" className="px-1 py-0.5 text-xs border border-ink/15 rounded" />
          <input type="number" value={c.amountEURMax ?? ''} onChange={(e) => set(i, e.target.value === '' ? { amountEURMax: undefined } : { amountEURMax: Number(e.target.value), amountEURMin: c.amountEURMin ?? c.amountEUR, amountEUR: undefined })} disabled={readonly} placeholder="—Max" className="px-1 py-0.5 text-xs border border-ink/15 rounded" />
          <input value={c.note ?? ''} onChange={(e) => set(i, { note: e.target.value || undefined })} disabled={readonly} placeholder="note" className="px-1 py-0.5 text-xs border border-ink/15 rounded" />
          {!readonly && <button onClick={() => remove(i)} className="text-red-700 text-xs px-1">✕</button>}
        </div>
      ))}
      {!readonly && <button onClick={add} className="text-xs text-ink/60 hover:text-ink">+ строка</button>}
    </div>
  )
}

function SubstepsBlock({ items, onChange, readonly }: { items: any[]; onChange: (items: any[]) => void; readonly?: boolean }) {
  const set = (i: number, patch: any) => onChange(items.map((x, k) => k === i ? { ...x, ...patch } : x))
  const remove = (i: number) => onChange(items.filter((_, k) => k !== i))
  const add = () => onChange([...items, { id: `s${items.length + 1}`, title: '', content: [{ kind: 'paragraph', text: '' }] }])
  return (
    <div className="space-y-2">
      {items.map((s, i) => (
        <div key={i} className="border border-purple-200 bg-white rounded p-2">
          <div className="flex gap-1 mb-2">
            <input value={s.id} onChange={(e) => set(i, { id: e.target.value })} disabled={readonly} placeholder="id" className="px-1 py-0.5 text-xs border border-ink/15 rounded font-mono w-24" />
            <input value={s.title} onChange={(e) => set(i, { title: e.target.value })} disabled={readonly} placeholder="title" className="flex-1 px-1 py-0.5 text-sm border border-ink/15 rounded font-semibold" />
            {!readonly && <button onClick={() => remove(i)} className="text-red-700 text-xs px-1">✕</button>}
          </div>
          <div className="space-y-1 ml-2">
            {(s.content ?? []).map((b: Block, j: number) => (
              <BlockEditor
                key={j}
                block={b}
                onChange={(nb) => set(i, { content: s.content.map((x: Block, k: number) => k === j ? nb : x) })}
                onRemove={() => set(i, { content: s.content.filter((_: any, k: number) => k !== j) })}
                readonly={readonly}
              />
            ))}
            {!readonly && (
              <button
                onClick={() => set(i, { content: [...(s.content ?? []), { kind: 'paragraph', text: '' }] })}
                className="text-xs text-ink/60 hover:text-ink"
              >
                + paragraph
              </button>
            )}
          </div>
        </div>
      ))}
      {!readonly && <button onClick={add} className="text-xs text-ink/60 hover:text-ink">+ substep</button>}
    </div>
  )
}
