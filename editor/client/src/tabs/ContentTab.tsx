import { DndContext, closestCenter, type DragEndEvent } from '@dnd-kit/core'
import { SortableContext, arrayMove, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import type { Guide, Step, Block } from '../types'
import { BLOCK_KINDS } from '../types'
import { BlockEditor } from '../components/blocks/BlockEditor'
import { Field } from '../components/Field'

export function ContentTab({ guide, update, readonly }: { guide: Guide; update: (p: Partial<Guide>) => void; readonly?: boolean }) {
  const setStep = (i: number, patch: Partial<Step>) => {
    const steps = [...guide.steps]
    steps[i] = { ...steps[i], ...patch }
    update({ steps })
  }
  const removeStep = (i: number) => {
    if (!confirm(`Удалить шаг "${guide.steps[i].title}"?`)) return
    const steps = guide.steps.filter((_, k) => k !== i)
    update({ steps })
  }
  const addStep = () => {
    update({ steps: [...guide.steps, { id: `step-${guide.steps.length + 1}`, title: 'Новый шаг', content: [{ kind: 'paragraph', text: '' }] }] })
  }
  const onDragEnd = (e: DragEndEvent) => {
    if (!e.over || e.active.id === e.over.id) return
    const oldIdx = guide.steps.findIndex((s) => s.id === e.active.id)
    const newIdx = guide.steps.findIndex((s) => s.id === e.over!.id)
    if (oldIdx < 0 || newIdx < 0) return
    update({ steps: arrayMove(guide.steps, oldIdx, newIdx) })
  }

  return (
    <div className="p-6 max-w-3xl space-y-5">
      <Field label="Title" hint="Заголовок гайда (одна строка)">
        <input
          type="text"
          value={guide.title}
          onChange={(e) => update({ title: e.target.value })}
          disabled={readonly}
          className="w-full px-2 py-1.5 border border-ink/15 rounded text-sm font-semibold"
        />
      </Field>
      <Field label="TLDR" hint="Краткое описание для карточки и поиска (~2-4 предложения)">
        <textarea
          value={guide.tldr}
          onChange={(e) => update({ tldr: e.target.value })}
          disabled={readonly}
          rows={4}
          className="w-full px-2 py-1.5 border border-ink/15 rounded text-sm leading-relaxed"
        />
      </Field>

      <div className="pt-2 border-t border-ink/10">
        <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
          <SortableContext items={guide.steps.map((s) => s.id)} strategy={verticalListSortingStrategy}>
            <div className="space-y-4">
              {guide.steps.map((step, i) => (
                <SortableStep
                  key={step.id}
                  index={i}
                  step={step}
                  onChange={(patch) => setStep(i, patch)}
                  onRemove={() => removeStep(i)}
                  readonly={readonly}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>
        {!readonly && (
          <button
            onClick={addStep}
            className="mt-4 px-3 py-1.5 text-sm border border-dashed border-ink/30 rounded hover:bg-ink/5 w-full"
          >
            + Добавить шаг
          </button>
        )}
      </div>
    </div>
  )
}

function SortableStep({ step, index, onChange, onRemove, readonly }: {
  step: Step
  index: number
  onChange: (p: Partial<Step>) => void
  onRemove: () => void
  readonly?: boolean
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: step.id })
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.4 : 1,
  }

  const setBlock = (j: number, patch: Block) => {
    const content = [...step.content]
    content[j] = patch
    onChange({ content })
  }
  const removeBlock = (j: number) => {
    onChange({ content: step.content.filter((_, k) => k !== j) })
  }
  const moveBlock = (j: number, dir: -1 | 1) => {
    const target = j + dir
    if (target < 0 || target >= step.content.length) return
    const c = [...step.content]
    ;[c[j], c[target]] = [c[target], c[j]]
    onChange({ content: c })
  }
  const addBlock = (kind: Block['kind']) => {
    const skeleton: Record<string, Block> = {
      paragraph: { kind: 'paragraph', text: '' },
      warning: { kind: 'warning', text: '' },
      timeline: { kind: 'timeline', text: '' },
      checklist: { kind: 'checklist', items: [''] },
      cost: { kind: 'cost', items: [{ label: '', amountEUR: 0 }] },
      link: { kind: 'link', text: '', url: 'https://' },
      substeps: { kind: 'substeps', items: [{ id: 's1', title: '', content: [{ kind: 'paragraph', text: '' }] }] },
    }
    onChange({ content: [...step.content, skeleton[kind]] })
  }

  return (
    <div ref={setNodeRef} style={style} className="border border-ink/15 rounded-lg bg-white/50">
      <div className="flex items-center gap-2 px-3 py-2 border-b border-ink/10">
        {!readonly && (
          <button
            {...attributes}
            {...listeners}
            className="cursor-grab text-ink/40 hover:text-ink/70 px-1"
            title="Перетащить"
          >
            ⋮⋮
          </button>
        )}
        <span className="text-xs text-ink/40 font-mono">{index + 1}</span>
        <input
          value={step.id}
          onChange={(e) => onChange({ id: e.target.value })}
          disabled={readonly}
          placeholder="step-id"
          className="px-1.5 py-0.5 text-xs border border-ink/15 rounded font-mono w-32"
        />
        <input
          value={step.title}
          onChange={(e) => onChange({ title: e.target.value })}
          disabled={readonly}
          placeholder="Название шага"
          className="flex-1 px-2 py-1 text-sm border border-ink/15 rounded font-semibold"
        />
        {!readonly && (
          <button onClick={onRemove} className="text-red-700 text-sm px-2 hover:bg-red-50 rounded" title="Удалить шаг">✕</button>
        )}
      </div>
      <div className="p-3 space-y-2">
        {step.content.map((block, j) => (
          <BlockEditor
            key={j}
            block={block}
            onChange={(b) => setBlock(j, b)}
            onRemove={() => removeBlock(j)}
            onMoveUp={j > 0 ? () => moveBlock(j, -1) : undefined}
            onMoveDown={j < step.content.length - 1 ? () => moveBlock(j, +1) : undefined}
            readonly={readonly}
          />
        ))}
        {!readonly && (
          <div className="flex gap-1 pt-1 flex-wrap">
            {BLOCK_KINDS.map((k) => (
              <button
                key={k}
                onClick={() => addBlock(k)}
                className="text-xs px-2 py-1 border border-ink/15 rounded hover:bg-ink/10"
              >
                + {k}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
