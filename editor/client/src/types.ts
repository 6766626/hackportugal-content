export interface Block {
  kind: 'paragraph' | 'warning' | 'timeline' | 'checklist' | 'cost' | 'link' | 'substeps'
  text?: string
  url?: string
  items?: any[]
}

export interface Audience {
  citizenships?: string[]
  countryCodes?: string[]
}

export interface Step {
  id: string
  title: string
  audience?: Audience
  content: Block[]
}

export interface Cost {
  label: string
  amountEUR?: number
  amountEURMin?: number
  amountEURMax?: number
  note?: string
}

export interface Source {
  title: string
  url: string
  kind?: string
  language?: string
  lastRetrieved?: string
}

export interface Variant {
  id: string
  audience?: Audience
  tldr: string
  timelineDaysMin?: number
  timelineDaysMax?: number
}

export interface Guide {
  editorialVoice?: string
  id: string
  categoryId: string
  title: string
  tldr: string
  audience?: Audience
  tags?: string[]
  estimatedReadMinutes?: number
  recentlyChangedAt?: string
  changeSummary?: string
  pendingLaw?: { summary: string }
  variants?: Variant[]
  steps: Step[]
  costs?: Cost[]
  sources?: Source[]
  timelineDaysMin?: number
  timelineDaysMax?: number
  lastVerified?: string
  verifyIntervalDays?: number
}

export const BLOCK_KINDS = ['paragraph', 'checklist', 'warning', 'timeline', 'cost', 'link', 'substeps'] as const
