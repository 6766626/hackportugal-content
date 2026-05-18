type Ctx = 'top' | 'step' | 'block' | 'cost' | 'source' | 'variant' | 'pending-law' | 'audience' | undefined

const INDENT = '  '
const INLINE_OBJECT_LIMIT = 110
const INLINE_ARRAY_LIMIT = 100

const TOP_ORDER = [
  'editorialVoice', 'id', 'categoryId', 'title', 'tldr',
  'audience', 'tags', 'estimatedReadMinutes',
  'recentlyChangedAt', 'changeSummary', 'pendingLaw',
  'variants', 'steps',
  'costs', 'sources',
  'timelineDaysMin', 'timelineDaysMax',
  'lastVerified', 'verifyIntervalDays',
]

const STEP_ORDER = ['id', 'title', 'audience', 'content']
const SOURCE_ORDER = ['title', 'url', 'kind', 'language', 'lastRetrieved']
const COST_ORDER = ['label', 'amountEUR', 'amountEURMin', 'amountEURMax', 'note']
const VARIANT_ORDER = ['id', 'audience', 'tldr', 'timelineDaysMin', 'timelineDaysMax']
const AUDIENCE_ORDER = ['citizenships', 'countryCodes']
const PENDING_LAW_ORDER = ['summary']

const BLOCK_KIND_FIELDS: Record<string, string[]> = {
  paragraph: ['kind', 'text'],
  warning: ['kind', 'text'],
  timeline: ['kind', 'text'],
  checklist: ['kind', 'items'],
  cost: ['kind', 'items'],
  link: ['kind', 'text', 'url'],
  substeps: ['kind', 'items'],
}

function reorder(obj: any, order: string[]): any {
  const out: any = {}
  for (const k of order) if (k in obj && obj[k] !== undefined) out[k] = obj[k]
  for (const k of Object.keys(obj)) {
    if (k.startsWith('_')) continue
    if (k in out) continue
    if (obj[k] === undefined) continue
    out[k] = obj[k]
  }
  return out
}

function applyOrder(obj: any, ctx?: Ctx): any {
  if (ctx === 'top') return reorder(obj, TOP_ORDER)
  if (ctx === 'step') return reorder(obj, STEP_ORDER)
  if (ctx === 'source') return reorder(obj, SOURCE_ORDER)
  if (ctx === 'cost') return reorder(obj, COST_ORDER)
  if (ctx === 'variant') return reorder(obj, VARIANT_ORDER)
  if (ctx === 'audience') return reorder(obj, AUDIENCE_ORDER)
  if (ctx === 'pending-law') return reorder(obj, PENDING_LAW_ORDER)
  if (ctx === 'block' && typeof obj.kind === 'string' && BLOCK_KIND_FIELDS[obj.kind]) {
    return reorder(obj, BLOCK_KIND_FIELDS[obj.kind])
  }
  return reorder(obj, [])
}

function childContextFor(parentCtx: Ctx, parentObj: any, key: string): Ctx {
  if (key === 'audience') return 'audience'
  if (parentCtx === 'top') {
    if (key === 'steps') return 'step'
    if (key === 'sources') return 'source'
    if (key === 'costs') return 'cost'
    if (key === 'variants') return 'variant'
    if (key === 'pendingLaw') return 'pending-law'
  }
  if (parentCtx === 'step' && key === 'content') return 'block'
  if (parentCtx === 'block') {
    if (key === 'items' && parentObj.kind === 'substeps') return 'step'
    if (key === 'items' && parentObj.kind === 'cost') return 'cost'
  }
  return undefined
}

export function serializeGuide(guide: any): string {
  return `export default ${serializeValue(guide, 0, 'top')}\n`
}

function quoteString(s: string): string {
  return "'" + s
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\t/g, '\\t')
    + "'"
}

function primitive(v: any): string {
  if (v === null) return 'null'
  if (v === undefined) return 'undefined'
  if (typeof v === 'boolean') return v ? 'true' : 'false'
  if (typeof v === 'number') return String(v)
  if (typeof v === 'string') return quoteString(v)
  return JSON.stringify(v)
}

function inlineValue(v: any, ctx?: Ctx): string {
  if (Array.isArray(v)) {
    if (v.length === 0) return '[]'
    return '[' + v.map((x) => inlineValue(x, ctx)).join(', ') + ']'
  }
  if (v && typeof v === 'object') {
    const ordered = applyOrder(v, ctx)
    const keys = Object.keys(ordered).filter((k) => !k.startsWith('_') && ordered[k] !== undefined)
    if (keys.length === 0) return '{}'
    return '{ ' + keys.map((k) => `${k}: ${inlineValue(ordered[k], childContextFor(ctx, ordered, k))}`).join(', ') + ' }'
  }
  return primitive(v)
}

function serializeValue(v: any, indent: number, ctx?: Ctx): string {
  if (v === null || v === undefined || typeof v !== 'object') return primitive(v)
  if (Array.isArray(v)) return serializeArray(v, indent, ctx)
  return serializeObject(v, indent, ctx)
}

function serializeArray(arr: any[], indent: number, parentCtx: Ctx): string {
  if (arr.length === 0) return '[]'
  const inline = inlineValue(arr, parentCtx)
  if (!inline.includes('\\n') && INDENT.repeat(indent).length + inline.length <= INLINE_ARRAY_LIMIT) {
    return inline
  }
  const pad = INDENT.repeat(indent + 1)
  const close = INDENT.repeat(indent)
  const items = arr.map((x) => pad + serializeValue(x, indent + 1, parentCtx)).join(',\n')
  return '[\n' + items + '\n' + close + ']'
}

function serializeObject(obj: any, indent: number, ctx?: Ctx): string {
  const ordered = applyOrder(obj, ctx)
  const keys = Object.keys(ordered).filter((k) => !k.startsWith('_') && ordered[k] !== undefined)
  if (keys.length === 0) return '{}'

  const inline = inlineValue(ordered, ctx)
  if (!inline.includes('\\n') && INDENT.repeat(indent).length + inline.length <= INLINE_OBJECT_LIMIT) {
    return inline
  }

  const pad = INDENT.repeat(indent + 1)
  const close = INDENT.repeat(indent)
  const lines = keys.map((k) => {
    const childCtx = childContextFor(ctx, ordered, k)
    return `${pad}${k}: ${serializeValue(ordered[k], indent + 1, childCtx)}`
  })
  return '{\n' + lines.join(',\n') + '\n' + close + '}'
}
