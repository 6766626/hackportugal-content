import fs from 'node:fs'
import { resolve, relative } from 'node:path'
import { pathToFileURL } from 'node:url'

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

const cache = new Map<string, { mtime: number; mod: any }>()

async function importFresh(filePath: string): Promise<any> {
  const stat = fs.statSync(filePath)
  const cached = cache.get(filePath)
  if (cached && cached.mtime === stat.mtimeMs) return cached.mod
  const url = pathToFileURL(filePath).href + `?cb=${stat.mtimeMs}`
  const mod = await import(url)
  cache.set(filePath, { mtime: stat.mtimeMs, mod })
  return mod
}

export function invalidate(filePath: string) {
  cache.delete(filePath)
}

export async function loadCategories(repoRoot: string): Promise<CategoryEntry[]> {
  const filePath = resolve(repoRoot, 'content/_categories.mjs')
  const mod = await importFresh(filePath)
  return mod.default as CategoryEntry[]
}

export function listGuideFiles(repoRoot: string, lang: string): string[] {
  const langDir = resolve(repoRoot, 'content', lang)
  if (!fs.existsSync(langDir)) return []
  const out: string[] = []
  for (const cat of fs.readdirSync(langDir)) {
    const catDir = resolve(langDir, cat)
    if (!fs.statSync(catDir).isDirectory()) continue
    for (const f of fs.readdirSync(catDir)) {
      if (f.endsWith('.mjs') && !f.startsWith('_')) {
        out.push(resolve(catDir, f))
      }
    }
  }
  return out
}

export async function loadGuide(repoRoot: string, lang: string, id: string): Promise<any | null> {
  for (const f of listGuideFiles(repoRoot, lang)) {
    if (f.endsWith(`/${id}.mjs`)) {
      const mod = await importFresh(f)
      return { ...mod.default, _filePath: f, _relPath: relative(repoRoot, f) }
    }
  }
  return null
}

export async function listGuideSummaries(repoRoot: string, lang: string): Promise<GuideSummary[]> {
  const out: GuideSummary[] = []
  for (const f of listGuideFiles(repoRoot, lang)) {
    try {
      const mod = await importFresh(f)
      const g = mod.default
      out.push({
        id: g.id,
        categoryId: g.categoryId,
        title: g.title,
        lastVerified: g.lastVerified,
        recentlyChangedAt: g.recentlyChangedAt,
        estimatedReadMinutes: g.estimatedReadMinutes,
        filePath: f,
        relPath: relative(repoRoot, f),
        lang,
      })
    } catch (e) {
      console.warn(`[loader] skip ${f}:`, (e as Error).message)
    }
  }
  return out
}
