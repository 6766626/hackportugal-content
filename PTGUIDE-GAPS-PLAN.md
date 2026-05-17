# Topic gaps vs ptguide.eu (verified 2026-05-17)

## What ptguide.eu is

Tilda single-page landing → paid Telegram channel `@ptguidenews` (via Tribute/Stripe).
All "guides" are weekly numbered updates inside the paid channel. The public site exposes
their **category taxonomy** but no actual guide bodies.

## Gap analysis

Out of ~30 ptguide topic groups, we already cover 25+ at higher depth. Real gaps:

### High priority (high traffic, easy to verify)
- ✅ **aquaparks-portugal** — DONE 2026-05-17 (food_leisure, all 8 parks, verified prices)
- ✅ **theme-parks-pt** — DONE 2026-05-17 (KidZania, Dino Parque, Magikland, Sea Life, Zoomarine + less-known)
- ✅ **olx-custojusto-vinted** — DONE 2026-05-17 (daily_life, with DAC7 tax detail + scam playbook)
- ⬜ **karting-portugal** — major karting centres list with prices, age limits (food_leisure)
- ⬜ **immigrant-calendar** — month-by-month onboarding checklist (before_arrival)

### Medium priority (niche but distinctive)
- ⬜ **russian-banya-pt** — what a banya is, how to find one in PT (food_leisure)
- ⬜ **beauty-salons-etiquette** — manicure / pedicure / brows: language, prices, tipping (daily_life)
- ⬜ **promo-codes-aggregator** — KIWOKO, Decathlon, Oceanário discount sources (daily_life)
- ⬜ **souvenirs-from-pt** — what to bring home as gifts (travel_portugal)

### Already covered (no work needed)
- Restaurants, supermarkets, food → many guides under food_leisure
- Beauty / hair: have `barbeiro-cabeleireiro-etiqueta.mjs`, `encontrar-cabeleireiro-mens.mjs`
- Pets → entire animals/ category
- Russian-speaking doctors → covered in `comunidade-russa-eslava-pt.mjs` + `finding-doctor.mjs`
- Cars, banking, taxes, work, healthcare — entire dedicated categories
- Real estate → housing_buy + housing_rent
- Schools → education_children
- Community channels → `expat-community-channels.mjs` (already includes Russian-speaking groups)

## Image/PDF retrofit candidates (existing guides that would benefit)

Image blocks:
- `aquaparks-portugal` — one hero photo per major park, layout maps
- `cartao-de-cidadao` — sample CC photo with field labels
- `niss` — sample NISS number on a card
- `caderneta-predial-imovel` — sample caderneta predial layout
- `imt-theory-practice-exam` — sample exam screen

PDF blocks (Apple forms / official):
- `naturalization-2026` — Modelo 1-A naturalisation form (IRN)
- `irs-filing` — Modelo 3 IRS form + instruções
- `modelo-30-nao-residentes` — Modelo 30 form
- `nif-third-country` — Modelo de inscrição como contribuinte
- `passaporte-portugues-pedir` — PEP application overview
- `s1-form-uk-pensioner` — S1 form sample
- `s2-treatment-abroad-eu` — S2 form

These add **most value** for users at the moment they need to print/fill them. Adding them
is mechanical: drop the PDF under `assets/<guideId>/`, add a `{ kind: 'pdf', src: 'modelo-3-2026.pdf', title: '...', sizeKB: ..., pages: ... }` block.

## Why no images on the aquaparks guide yet

I don't have license-clear images of the parks (their press kits aren't licensed for
redistribution). Two options for the next iteration:
1. Commission a few CC-BY-licensed photos (from Wikipedia/Wikimedia) where they exist
2. Use the parks' official press materials with explicit permission (email + record reply)

For now the guide ships as text-only; adding `{ kind: 'image' }` blocks later is non-breaking
(old apps already render new kinds as `.unknown` and skip).
