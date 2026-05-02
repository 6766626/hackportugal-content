# hackportugal-content

Контент-репозиторий для iOS-приложения **HackPortugal** — верифицированные гайды по жизни в Португалии. Source-язык — `ru`, переводится на `pt-PT` и `en` через GPT-5.5.

## Структура

- `content/{ru,pt,en}/<category>/<guide>.mjs` — гайды (JS-модули, экспортируют Guide-объект). RU — источник истины; PT и EN генерируются переводом.
- `content/_categories.mjs` — таксономия 23 категорий (RU/PT/EN-titles).
- `catalog/{external,services,community-{ru,pt,en}}.mjs|json` — каталог внешних ресурсов (правительственные сайты, Telegram-каналы, FB-группы).
- `web/{privacy,terms,index}.html` — публичные страницы (Privacy Policy, Terms of Use, лендинг) для GitHub Pages.
- `schema/` — JSON-schema для Guide и CatalogEntry.
- `scripts/build.mjs` — собирает `dist/*.json` + manifest с SHA256.
- `scripts/validate.mjs` — структурная валидация (источники, audience, lastVerified).
- `scripts/validate-no-cyrillic.mjs` — fail если в `pt/` или `en/` осталась кириллица.
- `scripts/validate-parity.mjs` — fail если PT/EN потеряли source/cost/step counts vs RU.
- `scripts/translate-whole-file.mjs` — gpt-5.5 whole-file translation (RU→{en,pt}).
- `scripts/snapshot-to-ios.mjs` — копирует `dist/` в iOS-проект.
- `scripts/legacy/` — устаревший пайплайн, не запускать (см. `scripts/legacy/README.md`).
- `dist/` — сгенерированные JSON.

## Использование

```bash
# Базовый цикл
LANGS=ru,pt,en npm run build      # билд всех языков
npm run validate                  # структурная валидация (RU)
npm run validate:translations     # no-cyrillic + parity (RU vs PT/EN)
npm run snapshot                  # копировать в iOS-проект

# Полный test pipeline (всё проверяется в `npm test`):
#   build → validate → test-content → multi-lang build → no-cyrillic → parity
npm test

# Перевод одного гайда (и EN, и PT):
XRELAY_KEY=xr_... npm run translate -- d7-passive-income

# Перевод нескольких гайдов из файла, только PT, с overwrite:
XRELAY_KEY=xr_... npm run translate -- --ids /tmp/ids.txt --langs pt --force --concurrency 3
```

## Multi-language pipeline

- **Source-язык**: RU. Все гайды пишутся на русском.
- **Перевод**: gpt-5.5 (xrelay) переводит весь .mjs файл целиком. Сохраняет: `id`, `categoryId`, `audience`, URLs, suммы €, даты. Переводит: `title`, `tldr`, `tags`, все `text`/`title`/`items` внутри steps, `costs[].label/note`, `sources[].title`.
- **Glossary**: NIF, AIMA, Finanças, SNS, IRS, IMI, IMT, IVA, ISV, IUC, IAS, SMN, Multibanco, MB WAY, Cartão de Cidadão, Chave Móvel Digital, Junta de Freguesia, Câmara Municipal, Conservatória, IRN, recibos verdes, Reagrupamento Familiar, CPLP, Manifestação de Interesse — остаются в португальском в EN/PT.
- **Currency**: PT — `537,13 €` (пробел, запятая); EN — `€537.13` (без пробела, точка).
- **Validation gates** (всё в `npm test`):
  - `validate-no-cyrillic`: 0 кириллических символов в `pt/` или `en/`
  - `validate-parity`: одинаковое число sources, costs, steps, content items (±2) на каждом языке для каждого гайда

## Deploy

GitHub Pages через `.github/workflows/deploy.yml`:
- Push в `main` → workflow запускает validate + build (RU/PT/EN) + копирует `web/*` + `dist/*` в `_site/`
- Сайт публикуется на `https://hackportugal.github.io/hackportugal-content/`
  - `/privacy.html`, `/terms.html`, `/index.html` — публичные страницы
  - `/v1/manifest.json` + `/v1/guides.{ru,pt,en}.json` — потребляется iOS-приложением через `RemoteContentService`

## Правила авторинга

- ≥2 источника с `kind: "official"` (.gov.pt / dre.pt) для visa/tax/legal-гайдов
- Каждый числовой факт датирован — inline `as of YYYY-MM-DD` или через `lastVerified`
- AIMA или Portal das Finanças обязательны для visa/tax/nationality
- При изменении закона — выставлять `recentlyChangedAt` и `changeSummary`
- После правки RU-источника: `XRELAY_KEY=... npm run translate -- <guide-id> --force`, затем `npm test`

## Лицензия

CC BY-NC-SA 4.0 — контент; MIT — код скриптов.
