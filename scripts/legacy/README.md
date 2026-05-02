# Legacy translation pipeline — DO NOT RUN

These scripts implement an obsolete RU→PT/EN pipeline based on JSONL extraction + per-string translation + reassembly. **Do not run them on production content.**

Why deprecated:
- `extract-translatable.mjs` + `translate.mjs` + `assemble-translated.mjs` only translated `title` and `tldr` — step content arrays remained in Russian, producing visibly mixed-language output.
- `test-pipeline.mjs` recursively deletes `content/pt/` as part of test setup.
- A previous run of this pipeline left **327 PT/EN files** with hidden Russian leakage.

The active pipeline is `scripts/translate-whole-file.mjs` — sends entire .mjs source to gpt-5.5 and writes the translated result. See top-level README.

Kept for historical reference only.
