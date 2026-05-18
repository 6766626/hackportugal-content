export interface CategoryEntry {
  id: string
  order: number
  title: string
  subtitle?: string
  sfSymbol?: string
  hasVariants?: boolean
  titles?: Record<string, string>
  subtitles?: Record<string, string>
}

export interface GuideSummary {
  id: string
  categoryId: string
  title: string
  lastVerified?: string
  recentlyChangedAt?: string
  estimatedReadMinutes?: number
  filePath: string
  relPath: string
  lang: string
}

export type Lang = 'ru' | 'pt' | 'en'

async function jget<T>(url: string): Promise<T> {
  const r = await fetch(url)
  if (!r.ok) throw new Error(`${r.status} ${r.statusText}`)
  return r.json() as Promise<T>
}

export const api = {
  categories: () => jget<{ categories: CategoryEntry[] }>('/api/categories').then((d) => d.categories),
  guides: (lang: Lang = 'ru') => jget<{ lang: Lang; guides: GuideSummary[] }>(`/api/guides?lang=${lang}`).then((d) => d.guides),
  guide: (id: string, lang: Lang = 'ru') => jget<{ lang: Lang; guide: any }>(`/api/guides/${id}?lang=${lang}`).then((d) => d.guide),
}
