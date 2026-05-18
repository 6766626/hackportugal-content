// Lightweight per-file validation. Full rules run via scripts/validate.mjs on publish.
export interface InlineIssue {
  level: 'error' | 'warning'
  path: string
  msg: string
}

export function validateGuideInline(guide: any): InlineIssue[] {
  const out: InlineIssue[] = []
  const need = (path: string, val: any, kind: string) => {
    if (val === undefined || val === null || val === '') out.push({ level: 'error', path, msg: `${kind} обязательно` })
  }
  need('id', guide.id, 'id')
  need('categoryId', guide.categoryId, 'categoryId')
  need('title', guide.title, 'title')
  need('tldr', guide.tldr, 'tldr')

  if (typeof guide.id === 'string' && !/^[a-z0-9][a-z0-9-]*$/.test(guide.id)) {
    out.push({ level: 'error', path: 'id', msg: 'id должен быть kebab-case латиницей' })
  }

  if (!Array.isArray(guide.steps) || guide.steps.length === 0) {
    out.push({ level: 'error', path: 'steps', msg: 'нужен хотя бы один step' })
  } else {
    const stepIds = new Set<string>()
    guide.steps.forEach((s: any, i: number) => {
      if (!s.id) out.push({ level: 'error', path: `steps[${i}].id`, msg: 'step.id обязателен' })
      if (s.id && stepIds.has(s.id)) out.push({ level: 'error', path: `steps[${i}].id`, msg: `дубль id "${s.id}"` })
      if (s.id) stepIds.add(s.id)
      if (!s.title) out.push({ level: 'warning', path: `steps[${i}].title`, msg: 'нет title у step' })
      if (!Array.isArray(s.content) || s.content.length === 0) {
        out.push({ level: 'warning', path: `steps[${i}].content`, msg: 'пустой content у step' })
      } else {
        s.content.forEach((b: any, j: number) => {
          if (!b.kind) out.push({ level: 'error', path: `steps[${i}].content[${j}].kind`, msg: 'kind обязателен' })
          if ((b.kind === 'paragraph' || b.kind === 'warning' || b.kind === 'timeline') && !b.text) {
            out.push({ level: 'warning', path: `steps[${i}].content[${j}].text`, msg: 'пустой текст' })
          }
          if (b.kind === 'checklist' && (!Array.isArray(b.items) || b.items.length === 0)) {
            out.push({ level: 'warning', path: `steps[${i}].content[${j}].items`, msg: 'пустой checklist' })
          }
          if (b.kind === 'link' && (!b.url || !/^https?:\/\//.test(b.url))) {
            out.push({ level: 'error', path: `steps[${i}].content[${j}].url`, msg: 'нужен валидный url' })
          }
        })
      }
    })
  }

  if (Array.isArray(guide.sources)) {
    guide.sources.forEach((s: any, i: number) => {
      if (!s.title) out.push({ level: 'warning', path: `sources[${i}].title`, msg: 'у source нет title' })
      if (!s.url || !/^https?:\/\//.test(s.url ?? '')) {
        out.push({ level: 'error', path: `sources[${i}].url`, msg: 'у source нет валидного url' })
      }
    })
  }

  if (guide.lastVerified && !/^\d{4}-\d{2}-\d{2}$/.test(guide.lastVerified)) {
    out.push({ level: 'error', path: 'lastVerified', msg: 'формат YYYY-MM-DD' })
  }
  if (guide.recentlyChangedAt && !/^\d{4}-\d{2}-\d{2}$/.test(guide.recentlyChangedAt)) {
    out.push({ level: 'error', path: 'recentlyChangedAt', msg: 'формат YYYY-MM-DD' })
  }

  return out
}
