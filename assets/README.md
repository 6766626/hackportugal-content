# assets/

Static media (photos, PDFs) for guides.

Layout: `assets/<guideId>/<filename>` — one subfolder per guide that references assets.

## How it's served

At build time, `scripts/build.mjs` copies `assets/` → `dist/assets/`. The deploy workflow
publishes `dist/` to GitHub Pages, so each file becomes addressable at:

```
https://6766626.github.io/hackportugal-content/v1/assets/<guideId>/<filename>
```

`image` and `pdf` blocks in guide content reference files **by bare filename** — the build
step rewrites the `src` to that absolute URL. iOS hydrates images via `AsyncImage` (cached
in `URLCache.shared`) and opens PDFs in `SFSafariViewController`.

## Naming

- Use lowercase, hyphenated names: `slide-splash-tickets-2026.jpg`, `modelo-3-irs.pdf`.
- Include the year in the filename when content is dated (form revisions, price lists,
  brochures) so cache invalidation is explicit when you replace it.
- Localised PDFs: suffix with the locale, e.g. `modelo-3-irs-ru.pdf`.

## Why URLs, not bundled

- The bundle ships with the app; images + PDFs would balloon binary size (10s of MB).
- Lazy URL fetch + URLCache means users only download what they actually view.
- PDFs can be updated without an app release.
- The validator ensures every referenced asset exists on disk, so a missing file fails the
  build (not the user's loading spinner).
