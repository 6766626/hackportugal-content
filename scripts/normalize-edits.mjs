#!/usr/bin/env node
// Normalize various edit-JSON schemas returned by agents to a common format.
// Writes <input>.normalized.json
import fs from 'node:fs'

function normalize(raw) {
  // Already in expected format
  if (Array.isArray(raw.url_replacements) || Array.isArray(raw.fact_edits)) {
    return {
      url_replacements: raw.url_replacements ?? [],
      fact_edits: raw.fact_edits ?? [],
      additional_sources_added: raw.additional_sources_added ?? [],
      verified_no_changes: raw.verified_no_changes ?? [],
      needs_human_review: raw.needs_human_review ?? [],
      summary: raw.summary ?? '',
    }
  }
  // F_daily-style schema with edits[].changes[]
  const url_replacements = []
  const fact_edits = []
  const additional_sources_added = []
  const needs_human_review = []
  for (const e of raw.edits ?? []) {
    const ctx = { category: e.category, guide_id: e.id }
    for (const ch of e.changes ?? []) {
      if (ch.type === 'url_replace' || ch.type === 'replace_url' || ch.type === 'url') {
        url_replacements.push({
          old_url: ch.old || ch.from,
          new_url: ch.new || ch.to,
          category: ctx.category,
          guides: [ctx.guide_id],
          verified_status: ch.verified_status ?? 200,
          rationale: ch.reason || ch.rationale,
        })
      } else if (ch.type === 'fact_edit' || ch.type === 'text_replace' || ch.type === 'replace_text') {
        fact_edits.push({
          guide_id: ctx.guide_id,
          category: ctx.category,
          search: ch.old || ch.search || ch.from,
          replace: ch.new || ch.replace || ch.to,
          rationale: ch.reason || ch.rationale,
          source_url: ch.source_url,
        })
      } else if (ch.type === 'add_source' || ch.type === 'source_add') {
        additional_sources_added.push({
          guide_id: ctx.guide_id,
          category: ctx.category,
          title: ch.title,
          url: ch.url,
          kind: ch.kind || 'official',
          language: ch.language || 'pt',
        })
      } else if (ch.type === 'needs_review') {
        needs_human_review.push({ guide_id: ctx.guide_id, reason: ch.reason })
      }
    }
  }
  return {
    url_replacements,
    fact_edits,
    additional_sources_added,
    verified_no_changes: (raw.fact_checks ?? []).filter((x) => x.status?.includes('ok')).map((x) => x.id),
    needs_human_review: [...needs_human_review, ...(raw.needs_human_review ?? [])],
    summary: raw.summary ?? '',
  }
}

const file = process.argv[2]
if (!file) { console.error('Usage: normalize-edits.mjs <file.json>'); process.exit(1) }
const raw = JSON.parse(fs.readFileSync(file, 'utf8'))
const norm = normalize(raw)
const out = file.replace(/\.json$/, '.normalized.json')
fs.writeFileSync(out, JSON.stringify(norm, null, 2))
console.log(`${file}: url_replacements=${norm.url_replacements.length} fact_edits=${norm.fact_edits.length} additional=${norm.additional_sources_added.length} → ${out}`)
