import fs from 'node:fs'
import { resolve } from 'node:path'
import type { Express, Request } from 'express'
import { loadCategories, loadGuide, listGuideSummaries, listGuideFiles, invalidate } from '../lib/loader.ts'
import { serializeGuide } from '../lib/serialize.ts'
import { validateGuideInline } from '../lib/validate-inline.ts'

const VALID_LANGS = ['ru', 'pt', 'en'] as const
type Lang = typeof VALID_LANGS[number]

function pickLang(req: Request): Lang {
  const l = String(req.query.lang ?? 'ru')
  return (VALID_LANGS as readonly string[]).includes(l) ? (l as Lang) : 'ru'
}

export function mountGuides(app: Express, opts: { repoRoot: string }) {
  const { repoRoot } = opts

  app.get('/api/categories', async (_req, res) => {
    try {
      const cats = await loadCategories(repoRoot)
      res.json({ categories: cats })
    } catch (e) {
      res.status(500).json({ error: (e as Error).message })
    }
  })

  app.get('/api/guides', async (req, res) => {
    try {
      const lang = pickLang(req)
      const guides = await listGuideSummaries(repoRoot, lang)
      guides.sort((a, b) => a.title.localeCompare(b.title, 'ru'))
      res.json({ lang, guides })
    } catch (e) {
      res.status(500).json({ error: (e as Error).message })
    }
  })

  app.get('/api/guides/:id', async (req, res) => {
    try {
      const lang = pickLang(req)
      const guide = await loadGuide(repoRoot, lang, req.params.id)
      if (!guide) return res.status(404).json({ error: 'not found' })
      res.json({ lang, guide })
    } catch (e) {
      res.status(500).json({ error: (e as Error).message })
    }
  })

  app.patch('/api/guides/:id', async (req, res) => {
    try {
      const lang = pickLang(req)
      if (lang !== 'ru') return res.status(403).json({ error: 'editing only allowed for ru' })
      const incoming = req.body
      if (!incoming || typeof incoming !== 'object') return res.status(400).json({ error: 'body must be a guide object' })
      if (incoming.id !== req.params.id) return res.status(400).json({ error: 'id mismatch' })

      const issues = validateGuideInline(incoming)
      const errors = issues.filter((i) => i.level === 'error')
      if (errors.length > 0) {
        return res.status(422).json({ error: 'validation failed', issues })
      }

      let target: string | null = null
      for (const f of listGuideFiles(repoRoot, 'ru')) {
        if (f.endsWith(`/${incoming.id}.mjs`)) { target = f; break }
      }
      if (!target) {
        target = resolve(repoRoot, 'content', 'ru', incoming.categoryId, `${incoming.id}.mjs`)
        fs.mkdirSync(resolve(repoRoot, 'content', 'ru', incoming.categoryId), { recursive: true })
      }

      const content = serializeGuide(incoming)
      fs.writeFileSync(target, content)
      invalidate(target)

      res.json({
        ok: true,
        path: target,
        validation: { errors: [], warnings: issues.filter((i) => i.level === 'warning') },
      })
    } catch (e) {
      res.status(500).json({ error: (e as Error).message })
    }
  })
}
