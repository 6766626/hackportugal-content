# HackPortugal translation glossary

## Core principle

Portuguese legal / bureaucratic entities, acronyms, and proper nouns are **kept in Portuguese** across all languages. They are the nouns a user will see on official documents, websites, and in conversations with public servants. Translating them would make the guide harder to use in practice.

In English and Russian versions, the first occurrence of each term gets a short parenthetical gloss; later occurrences stay bare.

## Portuguese terms that stay Portuguese across all languages

| Term | Gloss (EN first mention) | Gloss (RU first mention) |
|---|---|---|
| NIF | Portuguese tax ID | налоговый номер |
| NISS | Portuguese social-security number | соцномер |
| Cartão de Cidadão (CC) | Portuguese citizen card | удостоверение гражданина |
| AIMA | Portuguese immigration agency (ex-SEF) | миграционная служба |
| Finanças | Portuguese tax authority | налоговая |
| Portal das Finanças | tax authority online portal | кабинет налогоплательщика |
| SNS | Portuguese National Health Service | гос. здравоохранение |
| SNS 24 | health advice hotline | телефон здоровья |
| Segurança Social | social security agency | соцстрах |
| SS Direta | social security online portal | личный кабинет соцстраха |
| IRS | Portuguese personal income tax | подоходный налог |
| IRC | Portuguese corporate income tax | налог на прибыль юрлиц |
| IMI | municipal property tax | муниципальный налог |
| IMT | property transfer tax | налог на переход прав |
| IS (Imposto de Selo) | stamp duty | гербовый сбор |
| IVA | VAT | НДС |
| ISV | vehicle tax on registration | налог на машину при ввозе |
| IUC | annual vehicle circulation tax | ежегодный налог на авто |
| IEFP | public employment & training agency | биржа труда |
| IAS (Indexante dos Apoios Sociais) | social-support index | социальный индекс |
| SMN / salário mínimo nacional | national minimum wage | минимальная зарплата |
| CPLP | Community of Portuguese-speaking countries | сообщество португалоязычных стран |
| Junta de Freguesia | parish council | районное управление |
| Câmara Municipal | city hall | мэрия |
| Conservatória do Registo Civil | civil registry office | загс |
| IRN | Institute for Registries and Notaries | регистрационно-нотариальная служба |
| Conservatória dos Registos Centrais | central civil registry (Lisbon) | центральный загс |
| CMD (Chave Móvel Digital) | mobile digital key / national e-ID | цифровой ключ |
| Via Verde | electronic toll system | электронные платные дороги |
| Multibanco / MB | interbank payment network | банкоматная сеть |
| MB WAY | Portuguese mobile payment app | мобильные платежи |
| IBAN | — | IBAN |
| Creche | nursery (0–3y) | ясли |
| Jardim de Infância | pre-school (3–6y) | детский сад |
| Recibos verdes | self-employed invoices | платёжки ИП |
| Atestado de residência | proof-of-residence issued by Junta | справка о прописке |
| Alojamento Local (AL) | short-term rental licence | краткосрочная аренда (Airbnb-статус) |
| Manifestação de Interesse (MdI) | expression of interest (repealed 2025) | заявление о намерении легализации |
| Proteção Temporária | Temporary Protection (EU Directive 2001/55/CE) | временная защита |
| Estatuto de Igualdade | Brazilian political-rights equivalence | политическое равенство (для бразильцев) |
| Reagrupamento Familiar | family reunification | воссоединение семьи |
| D1 / D2 / D3 / D4 / D7 / D8 | Portuguese national residency-visa categories | — (использовать как есть) |
| Golden Visa (ARI) | residency-by-investment programme | ВНЖ за инвестиции |
| DRE / Diário da República | official gazette | официальный вестник |
| Lei / Decreto-Lei | law / decree-law | закон / декрет-закон |

## What to translate

- All prose, warnings, step titles, checklists.
- Dates (keep ISO yyyy-mm-dd in sources and lastVerified; in body prose write naturally per locale — in PT use "01 de abril de 2026", in EN use "1 April 2026", in RU use "1 апреля 2026").
- Currency amounts: always `€` with a space (e.g. "537,13 €") in PT; `€537.13` in EN; "537,13 €" in RU.

## What NOT to translate

- `id`, `categoryId`, `step.id`, `variant.id`, any `url`, `recentlyChangedAt`, `lastVerified` (ISO date), `verifyIntervalDays`, `audience.citizenships`, `audience.countryCodes`, `audience.statuses`, `estimatedReadMinutes`, `timelineDaysMin/Max`, `costs[].amountEUR[Min|Max]`, `pendingLaw.expectedDate`, `pendingLaw.sourceUrl`, `source.kind`, `source.url`.
- Portuguese legal citations as they appear in `sources[].title` — they're already Portuguese.
- Russian ВНЖ stays in RU version; in EN becomes "residence permit"; in PT becomes "autorização de residência" or "título de residência" per context.

## Tone

- **PT-PT**: formal, `você` or impersonal constructions. Avoid Brazilian usages (`ligar para` not `discar para`). Administrative register appropriate for government processes.
- **EN**: neutral expat register, British spelling (neighbour, organise, licence). Sentences can be slightly more direct than Portuguese. First-person plural ("we") is fine when speaking to the reader.
- **RU**: existing tone — matter-of-fact, helpful, mixed Portuguese-Russian as seen in the source (проставленные PT-термины с пояснениями). Preserve all existing emoji.

## Preservation rules

- Emoji are preserved verbatim.
- Inline Markdown-like bold (`**...**`) preserved.
- Line breaks `\n` preserved.
- Parentheses containing original-language gloss are preserved but gloss translates: `AIMA (миграционная служба)` → `AIMA (Portuguese immigration agency)` in EN.
