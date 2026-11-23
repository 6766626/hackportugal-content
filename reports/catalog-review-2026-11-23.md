# Catalog review — 23 November 2026

Reviewed catalog: 623 existing guides in 23 categories, with three language versions. Published catalog: 625 guides.

This is a whole-catalog inventory, source-link and structural pass with targeted editorial fact checks. It is not a claim that every sentence in every existing guide has been legally re-verified. Partial updates retain the original full-review date.

## New guides

- `aima-art122k-progenitor-portugues` — Родитель португальского ребёнка: запись AIMA по статье 122(k)
- `cheias-inundacoes-seguro-casa` — Затопило жильё: безопасность, документы и страховка

## Existing guides revised

- `reagrupamento-familiar` (rewritten) — Воссоединение семьи: условия и новая запись AIMA
- `aima-contact` (rewritten) — Как связаться с AIMA: форма, телефон и e-mail
- `marcacao-aima-online-2026` (rewritten) — Запись в AIMA онлайн: какой маршрут выбрать
- `lisboa-bip-zip-cartao` (rewritten) — BIP/ZIP: соседские проекты в Лиссабоне
- `lisboa-card-residente` (rewritten) — Льготы жителям Лиссабона: как найти свою программу
- `porto-card-residente` (rewritten) — Cartão Porto.: кто может получить карту жителя
- `ancv-cheque-acolhimento` (rewritten) — Ваучеры на отдых от работодателя: что проверить
- `espaco-cidadao` (source-links) — Espaço Cidadão — государственные услуги в одном окне
- `loja-do-cidadao-deep` (source-links) — Loja do Cidadão глубоко: какие сервисы где доступны
- `siga-app-ticket-trick` (source-links) — SigaApp + ePortugal: как правильно брать талон в Loja de Cidadão
- `nif-eu-cplp` (partial) — Как получить NIF — граждане ЕС/ЕЭЗ/Швейцарии и CPLP
- `nif-third-country` (source-links) — Как получить NIF — граждане третьих стран
- `aima-escalation-ombudsman` (source-links) — AIMA не отвечает: эскалация через Provedor de Justiça
- `irs-filing` (source-links) — Подача IRS — налоговая декларация физического лица
- `irs-year-end` (source-links) — IRS-чеклист на конец года: что подготовить

## Validation

- PT content build, schema checks, regression checks and translation parity passed.
- Both catalogs decoded in all three languages using the actual Swift Guide models.
- Guide IDs, category references and premium flags retained; the Article 80 guide remains paid and pinned.
- Manifest byte sizes and SHA-256 checked for all language payloads.

## Remaining review queue

98 source URLs still returned HTTP 404/410 on GET, affecting 93 guides. They were retained in the per-guide JSON report instead of being replaced with unrelated homepages. HTTP denial/timeouts are separately marked unconfirmed.

121 guides are past their own review interval. Their dates were not advanced by a link check. Exact-title duplicates and pre-existing metadata date differences are also recorded; no guide IDs were deleted.

The machine-readable report contains an entry for every guide, its scope of review, source results and remaining flags.
