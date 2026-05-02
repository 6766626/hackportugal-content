# Catalog coverage audit — 2026-04-22

## Summary
- Deep guides: **101**
- Catalog entries: **417** (grouped into **384** topic-clusters)
- Clusters already covered by a deep guide (score ≥ 0.35): **6** → 8 catalog entries can be dropped once we verify
- **Clusters needing a new deep guide**: **378** → 409 catalog entries

## Uncovered topic clusters — by category
- **travel_portugal**: 69 clusters
- **daily_life**: 40 clusters
- **residence_permit**: 31 clusters
- **auto_trips**: 25 clusters
- **banking**: 20 clusters
- **before_arrival**: 18 clusters
- **taxes**: 17 clusters
- **auto_ownership**: 17 clusters
- **emergency_rights**: 14 clusters
- **food_leisure**: 14 clusters
- **work_business**: 13 clusters
- **public_transport**: 13 clusters
- **documents_fiscal**: 12 clusters
- **housing_rent**: 12 clusters
- **housing_buy**: 12 clusters
- **education_children**: 11 clusters
- **healthcare**: 9 clusters
- **animals**: 8 clusters
- **telecom**: 8 clusters
- **nationality**: 6 clusters
- **digital_gov**: 6 clusters
- **driving_license**: 3 clusters

## Uncovered topics (needs new deep guide)

### residence_permit — Как дозвониться в AIMA — часть 1
- Catalog entries in cluster: 3 (sources: aimasef.ru.json)
- Member titles: "Как дозвониться в AIMA — часть 1"; "Разделы на линии AIMA — часть 2"; "Как дозвониться в AIMA — часть 3"
- Sample urls:
  - https://t.me/Aimasef/31
  - https://t.me/Aimasef/32
  - https://t.me/Aimasef/36
- Closest existing guide (below threshold): **reagrupamento-familiar** (score 0.11)
- Suggested ids to kill: aimasef-31, aimasef-32, aimasef-36

### work_business — ITJobs.pt — IT-вакансии
- Catalog entries in cluster: 3 (sources: external.ru.json, services.ru.json)
- Member titles: "ITJobs.pt — IT-вакансии"; "NetJobs — общие вакансии"; "ITJobs.pt"
- Sample urls:
  - https://www.itjobs.pt/
  - https://www.net-empregos.com/
  - https://www.itjobs.pt/
- Closest existing guide (below threshold): **recibos-verdes** (score 0.11)
- Suggested ids to kill: ext-itjobs, ext-netjobs, svc-itjobs

### healthcare — Médis — частная медстраховка
- Catalog entries in cluster: 3 (sources: external.ru.json, services.ru.json)
- Member titles: "Médis — частная медстраховка"; "Multicare — частная медстраховка"; "Médis — частная страховка"
- Sample urls:
  - https://www.medis.pt/
  - https://www.multicare.pt/
  - https://www.medis.pt/
- Closest existing guide (below threshold): **private-insurance** (score 0.07)
- Suggested ids to kill: ext-medis, ext-multicare, svc-medis

### residence_permit — Документы на D7 для AIMA
- Catalog entries in cluster: 2 (sources: aimasef.ru.json)
- Member titles: "Документы на D7 для AIMA"; "Документы на Digital Nomad для AIMA"
- Sample urls:
  - https://t.me/Aimasef/132
  - https://t.me/Aimasef/134
- Closest existing guide (below threshold): **reagrupamento-familiar** (score 0.14)
- Suggested ids to kill: aimasef-132, aimasef-134

### documents_fiscal — Получение NISS — пошагово
- Catalog entries in cluster: 2 (sources: aimasef.ru.json, portugalpages.ru.json)
- Member titles: "Получение NISS — пошагово"; "Получение NISS"
- Sample urls:
  - https://t.me/Aimasef/192
  - https://t.me/portugalpages/19
- Closest existing guide (below threshold): **niss** (score 0.13)
- Suggested ids to kill: aimasef-192, pp-19

### taxes — Portal das Finanças — налоговая
- Catalog entries in cluster: 2 (sources: external.ru.json, services.ru.json)
- Member titles: "Portal das Finanças — налоговая"; "Portal das Finanças — налоги онлайн"
- Sample urls:
  - https://www.portaldasfinancas.gov.pt/at/html/index.html
  - https://www.portaldasfinancas.gov.pt/
- Closest existing guide (below threshold): **irs-filing** (score 0.18)
- Suggested ids to kill: ext-financas, svc-portal-financas

### documents_fiscal — Segurança Social Direta — соцстрах
- Catalog entries in cluster: 2 (sources: external.ru.json, services.ru.json)
- Member titles: "Segurança Social Direta — соцстрах"; "Segurança Social Direta"
- Sample urls:
  - https://www.seg-social.pt/
  - https://www.seg-social.pt/consultas/ssdirecta/
- Suggested ids to kill: ext-segsocial, svc-seg-social-direta

### housing_rent — Idealista.pt — поиск жилья
- Catalog entries in cluster: 2 (sources: external.ru.json)
- Member titles: "Idealista.pt — поиск жилья"; "Imovirtual — поиск жилья"
- Sample urls:
  - https://www.idealista.pt/
  - https://www.imovirtual.com/
- Closest existing guide (below threshold): **rental-contract** (score 0.06)
- Suggested ids to kill: ext-idealista, ext-imovirtual

### emergency_rights — DECO Proteste — защита потребителей
- Catalog entries in cluster: 2 (sources: external.ru.json, services.ru.json)
- Member titles: "DECO Proteste — защита потребителей"; "DECO Proteste — защита потребителей"
- Sample urls:
  - https://www.deco.proteste.pt/
  - https://www.deco.proteste.pt/
- Suggested ids to kill: ext-deco, svc-clever-girl

### work_business — Landing.Jobs — IT-вакансии Португалии
- Catalog entries in cluster: 2 (sources: external.ru.json, services.ru.json)
- Member titles: "Landing.Jobs — IT-вакансии Португалии"; "Landing.Jobs — IT вакансии"
- Sample urls:
  - https://landing.jobs/
  - https://landing.jobs/
- Closest existing guide (below threshold): **recibos-verdes** (score 0.09)
- Suggested ids to kill: ext-landing-jobs, svc-landingjobs

### banking — ActivoBank — онлайн банк
- Catalog entries in cluster: 2 (sources: external.ru.json, services.ru.json)
- Member titles: "ActivoBank — онлайн банк"; "ActivoBank — онлайн банк"
- Sample urls:
  - https://www.activobank.pt/
  - https://www.activobank.pt/
- Closest existing guide (below threshold): **activobank-opening** (score 0.13)
- Suggested ids to kill: ext-activobank, svc-activobank

### documents_fiscal — Как сделать NIF онлайн
- Catalog entries in cluster: 2 (sources: portugalpages.ru.json)
- Member titles: "Как сделать NIF онлайн"; "Как сделать NIF ребёнку online"
- Sample urls:
  - https://t.me/portugalpages/564
  - https://t.me/portugalpages/179
- Closest existing guide (below threshold): **nif-eu-cplp** (score 0.10)
- Suggested ids to kill: pp-564, pp-179

### driving_license — Замена водительского удостоверения
- Catalog entries in cluster: 2 (sources: portugalpages.ru.json)
- Member titles: "Замена водительского удостоверения"; "Продление водительского удостоверения"
- Sample urls:
  - https://t.me/portugalpages/17
  - https://t.me/portugalpages/1173
- Closest existing guide (below threshold): **driving-license-exchange** (score 0.08)
- Suggested ids to kill: pp-17, pp-1173

### auto_ownership — Растаможка авто в Португалии (2023)
- Catalog entries in cluster: 2 (sources: portugalpages.ru.json)
- Member titles: "Растаможка авто в Португалии (2023)"; "Растаможка авто из ЕС"
- Sample urls:
  - https://t.me/portugalpages/200
  - https://t.me/portugalpages/211
- Closest existing guide (below threshold): **car-import** (score 0.18)
- Suggested ids to kill: pp-200, pp-211

### auto_trips — Резидентское парковочное место (Setúbal)
- Catalog entries in cluster: 2 (sources: portugalpages.ru.json)
- Member titles: "Резидентское парковочное место (Setúbal)"; "Резидентское парковочное место в Лиссабоне"
- Sample urls:
  - https://t.me/portugalpages/206
  - https://t.me/portugalpages/3899
- Suggested ids to kill: pp-206, pp-3899

### auto_trips — Штрафы за превышение скорости
- Catalog entries in cluster: 2 (sources: portugalpages.ru.json)
- Member titles: "Штрафы за превышение скорости"; "Погрешность камер на превышение скорости 7%"
- Sample urls:
  - https://t.me/portugalpages/340
  - https://t.me/portugalpages/1391
- Suggested ids to kill: pp-340, pp-1391

### auto_ownership — Узнать владельца по номеру машины
- Catalog entries in cluster: 2 (sources: portugalpages.ru.json)
- Member titles: "Узнать владельца по номеру машины"; "Узнать VIN по номеру машины"
- Sample urls:
  - https://t.me/portugalpages/900
  - https://t.me/portugalpages/955
- Suggested ids to kill: pp-900, pp-955

### public_transport — Проездной для большого Лиссабона — Navegante
- Catalog entries in cluster: 2 (sources: portugalpages.ru.json, services.ru.json)
- Member titles: "Проездной для большого Лиссабона — Navegante"; "Navegante — проездной большого Лиссабона"
- Sample urls:
  - https://t.me/portugalpages/41
  - https://www.navegante.pt/
- Suggested ids to kill: pp-41, svc-navegante

### public_transport — Карта резидента муниципалитета Cascais (viver Cascais)
- Catalog entries in cluster: 2 (sources: portugalpages.ru.json)
- Member titles: "Карта резидента муниципалитета Cascais (viver Cascais)"; "Карта viver Cascais (обновление)"
- Sample urls:
  - https://t.me/portugalpages/42
  - https://t.me/portugalpages/375
- Suggested ids to kill: pp-42, pp-375

### residence_permit — AIMA вместо SEF
- Catalog entries in cluster: 2 (sources: portugalpages.ru.json)
- Member titles: "AIMA вместо SEF"; "Как дозвониться в SEF"
- Sample urls:
  - https://t.me/portugalpages/2037
  - https://t.me/portugalpages/2861
- Closest existing guide (below threshold): **manifestacao-replacement** (score 0.18)
- Suggested ids to kill: pp-2037, pp-2861

### education_children — Куда сходить с детьми в округе Лиссабона
- Catalog entries in cluster: 2 (sources: portugalpages.ru.json)
- Member titles: "Куда сходить с детьми в округе Лиссабона"; "Куда сходить с детьми"
- Sample urls:
  - https://t.me/portugalpages/787
  - https://t.me/portugalpages/158
- Closest existing guide (below threshold): **abono-de-familia** (score 0.08)
- Suggested ids to kill: pp-787, pp-158

### animals — Как переехать с собакой?
- Catalog entries in cluster: 2 (sources: portugalpages.ru.json)
- Member titles: "Как переехать с собакой?"; "Как переехать с собакой (v2)"
- Sample urls:
  - https://t.me/portugalpages/970
  - https://t.me/portugalpages/781
- Closest existing guide (below threshold): **pet-import** (score 0.10)
- Suggested ids to kill: pp-970, pp-781

### taxes — IRS налоговые вычеты
- Catalog entries in cluster: 2 (sources: portugalpages.ru.json)
- Member titles: "IRS налоговые вычеты"; "Медицинские налоговые вычеты"
- Sample urls:
  - https://t.me/portugalpages/40
  - https://t.me/portugalpages/1452
- Closest existing guide (below threshold): **irs-year-end** (score 0.18)
- Suggested ids to kill: pp-40, pp-1452

### daily_life — Растаможить посылку не из ЕС
- Catalog entries in cluster: 2 (sources: portugalpages.ru.json)
- Member titles: "Растаможить посылку не из ЕС"; "Как растаможить посылку онлайн"
- Sample urls:
  - https://t.me/portugalpages/271
  - https://t.me/portugalpages/296
- Suggested ids to kill: pp-271, pp-296

### travel_portugal — На поезде по долине реки Дору
- Catalog entries in cluster: 2 (sources: portugalpages.ru.json)
- Member titles: "На поезде по долине реки Дору"; "На машине по долине реки Douro"
- Sample urls:
  - https://t.me/portugalpages/882
  - https://t.me/portugalpages/3966
- Closest existing guide (below threshold): **douro-valley** (score 0.17)
- Suggested ids to kill: pp-882, pp-3966

### travel_portugal — Самые тёплые пляжи Алгарве
- Catalog entries in cluster: 2 (sources: portugalpages.ru.json)
- Member titles: "Самые тёплые пляжи Алгарве"; "Самые тёплые пляжи (обновление)"
- Sample urls:
  - https://t.me/portugalpages/4767
  - https://t.me/portugalpages/7901
- Closest existing guide (below threshold): **algarve-living** (score 0.15)
- Suggested ids to kill: pp-4767, pp-7901

### public_transport — Metro de Lisboa
- Catalog entries in cluster: 2 (sources: services.ru.json)
- Member titles: "Metro de Lisboa"; "Metro do Porto"
- Sample urls:
  - https://www.metrolisboa.pt/
  - https://www.metrodoporto.pt/
- Suggested ids to kill: svc-metrolisboa, svc-metroporto

### housing_buy — Century 21 Portugal
- Catalog entries in cluster: 2 (sources: services.ru.json)
- Member titles: "Century 21 Portugal"; "RE/MAX Portugal"
- Sample urls:
  - https://www.century21.pt/
  - https://www.remax.pt/
- Suggested ids to kill: svc-century21, svc-remax

### residence_permit — Главное оглавление канала @Aimasef
- Catalog entries in cluster: 1 (sources: aimasef.ru.json)
- Member titles: "Главное оглавление канала @Aimasef"
- Sample urls:
  - https://t.me/Aimasef/2
- Closest existing guide (below threshold): **reagrupamento-familiar** (score 0.09)
- Suggested ids to kill: aimasef-2

### residence_permit — Какие статьи существуют для ВНЖ
- Catalog entries in cluster: 1 (sources: aimasef.ru.json)
- Member titles: "Какие статьи существуют для ВНЖ"
- Sample urls:
  - https://t.me/Aimasef/16
- Closest existing guide (below threshold): **aima-online-2026** (score 0.18)
- Suggested ids to kill: aimasef-16

### residence_permit — Проверка статуса визы D
- Catalog entries in cluster: 1 (sources: aimasef.ru.json)
- Member titles: "Проверка статуса визы D"
- Sample urls:
  - https://t.me/Aimasef/19
- Closest existing guide (below threshold): **d2-entrepreneur** (score 0.11)
- Suggested ids to kill: aimasef-19

### residence_permit — Виза D. Что делать после получения
- Catalog entries in cluster: 1 (sources: aimasef.ru.json)
- Member titles: "Виза D. Что делать после получения"
- Sample urls:
  - https://t.me/Aimasef/20
- Closest existing guide (below threshold): **manifestacao-replacement** (score 0.15)
- Suggested ids to kill: aimasef-20

### residence_permit — Что такое AIMA (учреждение)
- Catalog entries in cluster: 1 (sources: aimasef.ru.json)
- Member titles: "Что такое AIMA (учреждение)"
- Sample urls:
  - https://t.me/Aimasef/24
- Closest existing guide (below threshold): **reagrupamento-familiar** (score 0.13)
- Suggested ids to kill: aimasef-24

### residence_permit — Нет записи в AIMA после визы
- Catalog entries in cluster: 1 (sources: aimasef.ru.json)
- Member titles: "Нет записи в AIMA после визы"
- Sample urls:
  - https://t.me/Aimasef/25
- Closest existing guide (below threshold): **reagrupamento-familiar** (score 0.09)
- Suggested ids to kill: aimasef-25

### residence_permit — Проверка апрува на сайте SEF/AIMA
- Catalog entries in cluster: 1 (sources: aimasef.ru.json)
- Member titles: "Проверка апрува на сайте SEF/AIMA"
- Sample urls:
  - https://t.me/Aimasef/27
- Closest existing guide (below threshold): **d2-entrepreneur** (score 0.09)
- Suggested ids to kill: aimasef-27

### residence_permit — Второй способ проверить статус визы
- Catalog entries in cluster: 1 (sources: aimasef.ru.json)
- Member titles: "Второй способ проверить статус визы"
- Sample urls:
  - https://t.me/Aimasef/28
- Closest existing guide (below threshold): **d2-entrepreneur** (score 0.10)
- Suggested ids to kill: aimasef-28

### residence_permit — Правила въезда в ЕС с разными визами
- Catalog entries in cluster: 1 (sources: aimasef.ru.json)
- Member titles: "Правила въезда в ЕС с разными визами"
- Sample urls:
  - https://t.me/Aimasef/35
- Suggested ids to kill: aimasef-35

### emergency_rights — Контакты AIMA и как подать жалобу
- Catalog entries in cluster: 1 (sources: aimasef.ru.json)
- Member titles: "Контакты AIMA и как подать жалобу"
- Sample urls:
  - https://t.me/Aimasef/43
- Closest existing guide (below threshold): **emergency-112** (score 0.08)
- Suggested ids to kill: aimasef-43

### residence_permit — Оглавление новостей AIMA
- Catalog entries in cluster: 1 (sources: aimasef.ru.json)
- Member titles: "Оглавление новостей AIMA"
- Sample urls:
  - https://t.me/Aimasef/46
- Closest existing guide (below threshold): **reagrupamento-familiar** (score 0.11)
- Suggested ids to kill: aimasef-46

### residence_permit — Статьи 88/89 — въезд и легализация
- Catalog entries in cluster: 1 (sources: aimasef.ru.json)
- Member titles: "Статьи 88/89 — въезд и легализация"
- Sample urls:
  - https://t.me/Aimasef/88
- Closest existing guide (below threshold): **reagrupamento-familiar** (score 0.11)
- Suggested ids to kill: aimasef-88

### documents_fiscal — Новые требования для NISS
- Catalog entries in cluster: 1 (sources: aimasef.ru.json)
- Member titles: "Новые требования для NISS"
- Sample urls:
  - https://t.me/Aimasef/119
- Closest existing guide (below threshold): **niss** (score 0.13)
- Suggested ids to kill: aimasef-119

### housing_rent — Виза D: как выбирать аренду
- Catalog entries in cluster: 1 (sources: aimasef.ru.json)
- Member titles: "Виза D: как выбирать аренду"
- Sample urls:
  - https://t.me/Aimasef/130
- Closest existing guide (below threshold): **rental-contract** (score 0.07)
- Suggested ids to kill: aimasef-130

### nationality — Гражданство: новая онлайн-платформа IRN
- Catalog entries in cluster: 1 (sources: aimasef.ru.json)
- Member titles: "Гражданство: новая онлайн-платформа IRN"
- Sample urls:
  - https://t.me/Aimasef/172
- Closest existing guide (below threshold): **citizenship-by-descent** (score 0.09)
- Suggested ids to kill: aimasef-172

### taxes — Portal Finanças — гайд для recibos
- Catalog entries in cluster: 1 (sources: aimasef.ru.json)
- Member titles: "Portal Finanças — гайд для recibos"
- Sample urls:
  - https://t.me/Aimasef/177
- Suggested ids to kill: aimasef-177

### residence_permit — Все посты про ВНЖ — индекс
- Catalog entries in cluster: 1 (sources: aimasef.ru.json)
- Member titles: "Все посты про ВНЖ — индекс"
- Sample urls:
  - https://t.me/Aimasef/184
- Closest existing guide (below threshold): **d2-entrepreneur** (score 0.11)
- Suggested ids to kill: aimasef-184

### residence_permit — Проверка записи по визе D
- Catalog entries in cluster: 1 (sources: aimasef.ru.json)
- Member titles: "Проверка записи по визе D"
- Sample urls:
  - https://t.me/Aimasef/206
- Closest existing guide (below threshold): **d2-entrepreneur** (score 0.11)
- Suggested ids to kill: aimasef-206

### daily_life — Telegram: @liveinPortugal — Португалия от А до Я
- Catalog entries in cluster: 1 (sources: external.ru.json)
- Member titles: "Telegram: @liveinPortugal — Португалия от А до Я"
- Sample urls:
  - https://t.me/liveinPortugal
- Suggested ids to kill: ext-liveinpt

### daily_life — Telegram: @ru_Portugal_pt — русскоговорящий чат PT
- Catalog entries in cluster: 1 (sources: external.ru.json)
- Member titles: "Telegram: @ru_Portugal_pt — русскоговорящий чат PT"
- Sample urls:
  - https://t.me/ru_Portugal_pt
- Suggested ids to kill: ext-ruportugal-pt

### daily_life — Telegram: @portugal_and_me — Португалия и мы
- Catalog entries in cluster: 1 (sources: external.ru.json)
- Member titles: "Telegram: @portugal_and_me — Португалия и мы"
- Sample urls:
  - https://t.me/portugal_and_me
- Suggested ids to kill: ext-portugal-and-me

### before_arrival — Telegram: @okno_agency — иммиграционное агентство
- Catalog entries in cluster: 1 (sources: external.ru.json)
- Member titles: "Telegram: @okno_agency — иммиграционное агентство"
- Sample urls:
  - https://t.me/okno_agency
- Suggested ids to kill: ext-okno-agency

### residence_permit — Telegram: @renovarAdR — группа по продлению ВНЖ
- Catalog entries in cluster: 1 (sources: external.ru.json)
- Member titles: "Telegram: @renovarAdR — группа по продлению ВНЖ"
- Sample urls:
  - https://t.me/renovarAdR
- Closest existing guide (below threshold): **aima-online-2026** (score 0.15)
- Suggested ids to kill: ext-renovaradr

### nationality — Telegram: @passportpt — группа по гражданству и ПМЖ
- Catalog entries in cluster: 1 (sources: external.ru.json)
- Member titles: "Telegram: @passportpt — группа по гражданству и ПМЖ"
- Sample urls:
  - https://t.me/passportpt
- Closest existing guide (below threshold): **citizenship-by-descent** (score 0.08)
- Suggested ids to kill: ext-passportpt

### housing_buy — Telegram: @ptrealt — канал по недвижимости
- Catalog entries in cluster: 1 (sources: external.ru.json)
- Member titles: "Telegram: @ptrealt — канал по недвижимости"
- Sample urls:
  - https://t.me/ptrealt
- Closest existing guide (below threshold): **buying-property** (score 0.17)
- Suggested ids to kill: ext-ptrealt

### residence_permit — Telegram: @aimasefgroup — чат по AIMA
- Catalog entries in cluster: 1 (sources: external.ru.json)
- Member titles: "Telegram: @aimasefgroup — чат по AIMA"
- Sample urls:
  - https://t.me/aimasefgroup
- Closest existing guide (below threshold): **reagrupamento-familiar** (score 0.11)
- Suggested ids to kill: ext-aimasefgroup

### residence_permit — Telegram: @aimacall — бот отслеживания дозвона в AIMA
- Catalog entries in cluster: 1 (sources: external.ru.json)
- Member titles: "Telegram: @aimacall — бот отслеживания дозвона в AIMA"
- Sample urls:
  - https://t.me/aimacall
- Closest existing guide (below threshold): **reagrupamento-familiar** (score 0.09)
- Suggested ids to kill: ext-aimacall

### before_arrival — MigRun — иммиграция в Португалию (русский)
- Catalog entries in cluster: 1 (sources: external.ru.json)
- Member titles: "MigRun — иммиграция в Португалию (русский)"
- Sample urls:
  - https://t.me/migrunPortugal
- Suggested ids to kill: ext-migrun-pt

### before_arrival — MigRun.tech — бесплатные гайды по иммиграции
- Catalog entries in cluster: 1 (sources: external.ru.json)
- Member titles: "MigRun.tech — бесплатные гайды по иммиграции"
- Sample urls:
  - https://www.migrun.tech/ru/portugal
- Suggested ids to kill: ext-migrun-web

### before_arrival — WithPortugal.com — иммиграция и недвижимость
- Catalog entries in cluster: 1 (sources: external.ru.json)
- Member titles: "WithPortugal.com — иммиграция и недвижимость"
- Sample urls:
  - https://withportugal.com/ru
- Suggested ids to kill: ext-withportugal

### before_arrival — Prian.ru — раздел Португалия
- Catalog entries in cluster: 1 (sources: external.ru.json)
- Member titles: "Prian.ru — раздел Португалия"
- Sample urls:
  - https://prian.ru/immigration/portugal/
- Suggested ids to kill: ext-prian-pt

### housing_buy — Prian.ru — покупка недвижимости в PT
- Catalog entries in cluster: 1 (sources: external.ru.json)
- Member titles: "Prian.ru — покупка недвижимости в PT"
- Sample urls:
  - https://prian.ru/pub/2296.html
- Closest existing guide (below threshold): **buying-property** (score 0.18)
- Suggested ids to kill: ext-prian-realestate

### before_arrival — Prian.ru — обязательное чтение по PT
- Catalog entries in cluster: 1 (sources: external.ru.json)
- Member titles: "Prian.ru — обязательное чтение по PT"
- Sample urls:
  - https://prian.ru/portugal/mustread/
- Suggested ids to kill: ext-prian-must

### before_arrival — 34travel.me — гайд по релокации в Португалию
- Catalog entries in cluster: 1 (sources: external.ru.json)
- Member titles: "34travel.me — гайд по релокации в Португалию"
- Sample urls:
  - https://34travel.me/post/relocation-portugal
- Suggested ids to kill: ext-34travel

### residence_permit — Passportivity — ВНЖ, плюсы и минусы
- Catalog entries in cluster: 1 (sources: external.ru.json)
- Member titles: "Passportivity — ВНЖ, плюсы и минусы"
- Sample urls:
  - https://passportivity.com/ru/blog/portugal-residence-pros-and-cons/
- Closest existing guide (below threshold): **d2-entrepreneur** (score 0.11)
- Suggested ids to kill: ext-passportivity-ru

### nationality — Passportivity — гражданство 2026
- Catalog entries in cluster: 1 (sources: external.ru.json)
- Member titles: "Passportivity — гражданство 2026"
- Sample urls:
  - https://passportivity.com/ru/blog/portugal-citizenship/
- Closest existing guide (below threshold): **naturalization-2026** (score 0.20)
- Suggested ids to kill: ext-passportivity-citizen

### residence_permit — Passportivity — Digital Nomad Visa 2026
- Catalog entries in cluster: 1 (sources: external.ru.json)
- Member titles: "Passportivity — Digital Nomad Visa 2026"
- Sample urls:
  - https://passportivity.com/residence-by-investment/portugal-digital-nomad-visa/
- Closest existing guide (below threshold): **d8-digital-nomad** (score 0.20)
- Suggested ids to kill: ext-passportivity-dn

### work_business — VC.ru — бизнес-иммиграция в Португалию
- Catalog entries in cluster: 1 (sources: external.ru.json)
- Member titles: "VC.ru — бизнес-иммиграция в Португалию"
- Sample urls:
  - https://vc.ru/migration/1346211-biznes-immigraciya-v-portugaliyu
- Suggested ids to kill: ext-vc-business

### residence_permit — VC.ru — ВНЖ для россиян: D7 и D8
- Catalog entries in cluster: 1 (sources: external.ru.json)
- Member titles: "VC.ru — ВНЖ для россиян: D7 и D8"
- Sample urls:
  - https://vc.ru/migration/2052982-vnj-v-portugalii-dlya-rossiyan-usloviya-dokumenty-d7-i-d8
- Closest existing guide (below threshold): **d2-entrepreneur** (score 0.14)
- Suggested ids to kill: ext-vc-d7d8

### work_business — VC.ru — ВНЖ для фрилансеров
- Catalog entries in cluster: 1 (sources: external.ru.json)
- Member titles: "VC.ru — ВНЖ для фрилансеров"
- Sample urls:
  - https://vc.ru/migration/196823-portugaliya-poluchenie-vida-na-zhitelstvo-dlya-frilanserov
- Suggested ids to kill: ext-vc-freelance

### residence_permit — Forbes — 8 видов ВНЖ Португалии
- Catalog entries in cluster: 1 (sources: external.ru.json)
- Member titles: "Forbes — 8 видов ВНЖ Португалии"
- Sample urls:
  - https://www.forbes.ru/svoi-biznes/487959-vosem-vidov-vnz-kak-pereehat-v-portugaliu-v-2023-godu-bez-zolotoj-vizy
- Closest existing guide (below threshold): **d2-entrepreneur** (score 0.10)
- Suggested ids to kill: ext-forbes-vnj

### daily_life — YouTube: Артур Васильев — Португалия глазами иммигранта
- Catalog entries in cluster: 1 (sources: external.ru.json)
- Member titles: "YouTube: Артур Васильев — Португалия глазами иммигранта"
- Sample urls:
  - https://www.youtube.com/@arturvasiliev
- Suggested ids to kill: ext-vasiliev-yt

### residence_permit — AIMA — официальный сайт
- Catalog entries in cluster: 1 (sources: external.ru.json)
- Member titles: "AIMA — официальный сайт"
- Sample urls:
  - https://aima.gov.pt/pt
- Closest existing guide (below threshold): **reagrupamento-familiar** (score 0.13)
- Suggested ids to kill: ext-aima-gov

### digital_gov — ePortugal — единый портал госуслуг
- Catalog entries in cluster: 1 (sources: external.ru.json)
- Member titles: "ePortugal — единый портал госуслуг"
- Sample urls:
  - https://eportugal.gov.pt/cidadaos
- Closest existing guide (below threshold): **espaco-cidadao** (score 0.07)
- Suggested ids to kill: ext-eportugal

### healthcare — SNS24 — онлайн медицина
- Catalog entries in cluster: 1 (sources: external.ru.json)
- Member titles: "SNS24 — онлайн медицина"
- Sample urls:
  - https://www.sns24.gov.pt/
- Closest existing guide (below threshold): **sns-utente** (score 0.22)
- Suggested ids to kill: ext-sns24

### nationality — IRN — институт регистров (гражданство)
- Catalog entries in cluster: 1 (sources: external.ru.json)
- Member titles: "IRN — институт регистров (гражданство)"
- Sample urls:
  - https://irn.justica.gov.pt/
- Closest existing guide (below threshold): **citizenship-by-descent** (score 0.09)
- Suggested ids to kill: ext-irn

### driving_license — IMT — институт мобильности и транспорта
- Catalog entries in cluster: 1 (sources: external.ru.json)
- Member titles: "IMT — институт мобильности и транспорта"
- Sample urls:
  - https://www.imt-ip.pt/sites/imtt/portugues/Paginas/imtt.aspx
- Closest existing guide (below threshold): **driving-license-exchange** (score 0.15)
- Suggested ids to kill: ext-imt

### before_arrival — Vistos MNE — портал виз
- Catalog entries in cluster: 1 (sources: external.ru.json)
- Member titles: "Vistos MNE — портал виз"
- Sample urls:
  - https://vistos.mne.gov.pt/pt/
- Suggested ids to kill: ext-vistosmne

### animals — DGAV — ветеринарное управление (для животных)
- Catalog entries in cluster: 1 (sources: external.ru.json)
- Member titles: "DGAV — ветеринарное управление (для животных)"
- Sample urls:
  - https://www.dgav.pt/animais/
- Closest existing guide (below threshold): **pet-import** (score 0.08)
- Suggested ids to kill: ext-dgav

### digital_gov — Autenticacao.gov — Chave Móvel Digital
- Catalog entries in cluster: 1 (sources: external.ru.json)
- Member titles: "Autenticacao.gov — Chave Móvel Digital"
- Sample urls:
  - https://www.autenticacao.gov.pt/
- Closest existing guide (below threshold): **chave-movel-digital** (score 0.27)
- Suggested ids to kill: ext-autenticacao

### nationality — CAPLE — регистрация на CIPLE A2
- Catalog entries in cluster: 1 (sources: external.ru.json)
- Member titles: "CAPLE — регистрация на CIPLE A2"
- Sample urls:
  - https://caple.letras.ulisboa.pt/
- Closest existing guide (below threshold): **ciple-a2-exam** (score 0.11)
- Suggested ids to kill: ext-caple

### housing_buy — Casa Sapo — агрегатор недвижимости
- Catalog entries in cluster: 1 (sources: external.ru.json)
- Member titles: "Casa Sapo — агрегатор недвижимости"
- Sample urls:
  - https://casa.sapo.pt/
- Closest existing guide (below threshold): **buying-property** (score 0.15)
- Suggested ids to kill: ext-sapo-casa

### emergency_rights — Ordem dos Advogados — поиск юриста
- Catalog entries in cluster: 1 (sources: external.ru.json)
- Member titles: "Ordem dos Advogados — поиск юриста"
- Sample urls:
  - https://portal.oa.pt/
- Closest existing guide (below threshold): **legal-aid** (score 0.06)
- Suggested ids to kill: ext-oa

### education_children — DGE — Direcção-Geral da Educação
- Catalog entries in cluster: 1 (sources: external.ru.json)
- Member titles: "DGE — Direcção-Geral da Educação"
- Sample urls:
  - https://www.dge.mec.pt/
- Closest existing guide (below threshold): **school-enrollment** (score 0.07)
- Suggested ids to kill: ext-dge

### education_children — Portal das Matrículas — запись в школу
- Catalog entries in cluster: 1 (sources: external.ru.json)
- Member titles: "Portal das Matrículas — запись в школу"
- Sample urls:
  - https://portaldasmatriculas.edu.gov.pt/
- Closest existing guide (below threshold): **school-enrollment** (score 0.13)
- Suggested ids to kill: ext-portalmatriculas

### education_children — DGES — Direcção-Geral do Ensino Superior
- Catalog entries in cluster: 1 (sources: external.ru.json)
- Member titles: "DGES — Direcção-Geral do Ensino Superior"
- Sample urls:
  - https://www.dges.gov.pt/pt
- Suggested ids to kill: ext-dges

### work_business — Empresa na Hora — создание компании за день
- Catalog entries in cluster: 1 (sources: external.ru.json)
- Member titles: "Empresa na Hora — создание компании за день"
- Sample urls:
  - https://justica.gov.pt/Servicos/Empresa-na-Hora
- Suggested ids to kill: ext-empresanahora

### work_business — IAPMEI Startup Visa — портал
- Catalog entries in cluster: 1 (sources: external.ru.json)
- Member titles: "IAPMEI Startup Visa — портал"
- Sample urls:
  - https://startupvisa.iapmei.pt/
- Suggested ids to kill: ext-iapmei

### emergency_rights — DRE — Diário da República (законы)
- Catalog entries in cluster: 1 (sources: external.ru.json)
- Member titles: "DRE — Diário da República (законы)"
- Sample urls:
  - https://dre.pt/
- Suggested ids to kill: ext-dre

### emergency_rights — APAV — помощь жертвам насилия
- Catalog entries in cluster: 1 (sources: external.ru.json)
- Member titles: "APAV — помощь жертвам насилия"
- Sample urls:
  - https://apav.pt/
- Closest existing guide (below threshold): **common-scams** (score 0.07)
- Suggested ids to kill: ext-apav

### emergency_rights — CICDR — комиссия по дискриминации
- Catalog entries in cluster: 1 (sources: external.ru.json)
- Member titles: "CICDR — комиссия по дискриминации"
- Sample urls:
  - https://www.cicdr.pt/
- Suggested ids to kill: ext-cicdr

### animals — SIAC — база регистрации животных
- Catalog entries in cluster: 1 (sources: external.ru.json)
- Member titles: "SIAC — база регистрации животных"
- Sample urls:
  - https://siac.vet/
- Closest existing guide (below threshold): **pet-import** (score 0.08)
- Suggested ids to kill: ext-siac

### emergency_rights — INEM — национальная служба скорой помощи
- Catalog entries in cluster: 1 (sources: external.ru.json)
- Member titles: "INEM — национальная служба скорой помощи"
- Sample urls:
  - https://www.inem.pt/
- Closest existing guide (below threshold): **emergency-112** (score 0.07)
- Suggested ids to kill: ext-inem

### emergency_rights — PSP — полиция общественной безопасности
- Catalog entries in cluster: 1 (sources: external.ru.json)
- Member titles: "PSP — полиция общественной безопасности"
- Sample urls:
  - https://www.psp.pt/
- Closest existing guide (below threshold): **emergency-112** (score 0.08)
- Suggested ids to kill: ext-psp

### before_arrival — Посольство Португалии в Москве
- Catalog entries in cluster: 1 (sources: external.ru.json)
- Member titles: "Посольство Португалии в Москве"
- Sample urls:
  - https://moscovo.embaixadaportugal.mne.gov.pt/en/
- Suggested ids to kill: ext-mne-moscow

### housing_buy — CMVM — комиссия по ценным бумагам (Golden Visa фонды)
- Catalog entries in cluster: 1 (sources: external.ru.json)
- Member titles: "CMVM — комиссия по ценным бумагам (Golden Visa фонды)"
- Sample urls:
  - https://www.cmvm.pt/
- Suggested ids to kill: ext-cmvm

### housing_buy — ADENE — сертификат энергоэффективности
- Catalog entries in cluster: 1 (sources: external.ru.json)
- Member titles: "ADENE — сертификат энергоэффективности"
- Sample urls:
  - https://www.adene.pt/
- Closest existing guide (below threshold): **mortgage-foreigners** (score 0.08)
- Suggested ids to kill: ext-adene

### education_children — Русский клуб (Oeiras) — Carlos Freixo
- Catalog entries in cluster: 1 (sources: external.ru.json)
- Member titles: "Русский клуб (Oeiras) — Carlos Freixo"
- Sample urls:
  - https://russianclublisbon.com/
- Closest existing guide (below threshold): **abono-de-familia** (score 0.08)
- Suggested ids to kill: ext-oeiras-rus

### documents_fiscal — Оформить NIF
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Оформить NIF"
- Sample urls:
  - https://t.me/portugalpages/8044
- Closest existing guide (below threshold): **nif-eu-cplp** (score 0.13)
- Suggested ids to kill: pp-8044

### documents_fiscal — NIF через NifOnline
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "NIF через NifOnline"
- Sample urls:
  - https://t.me/portugalpages/32
- Closest existing guide (below threshold): **nif-eu-cplp** (score 0.10)
- Suggested ids to kill: pp-32

### documents_fiscal — Получить пароль от Finanças / egov PT
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Получить пароль от Finanças / egov PT"
- Sample urls:
  - https://t.me/portugalpages/43
- Closest existing guide (below threshold): **niss** (score 0.11)
- Suggested ids to kill: pp-43

### documents_fiscal — Забыл пароль от Finanças
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Забыл пароль от Finanças"
- Sample urls:
  - https://t.me/portugalpages/3530
- Suggested ids to kill: pp-3530

### documents_fiscal — Как получил NISS, оформленный работодателем
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Как получил NISS, оформленный работодателем"
- Sample urls:
  - https://t.me/portugalpages/404
- Closest existing guide (below threshold): **niss** (score 0.10)
- Suggested ids to kill: pp-404

### healthcare — Про número de utente
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Про número de utente"
- Sample urls:
  - https://t.me/portugalpages/77
- Closest existing guide (below threshold): **sns-utente** (score 0.29)
- Suggested ids to kill: pp-77

### documents_fiscal — Записаться в Finanças на определённое время онлайн
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Записаться в Finanças на определённое время онлайн"
- Sample urls:
  - https://t.me/portugalpages/113
- Suggested ids to kill: pp-113

### documents_fiscal — Как получить Certidão de domicílio Fiscal
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Как получить Certidão de domicílio Fiscal"
- Sample urls:
  - https://t.me/portugalpages/3844
- Closest existing guide (below threshold): **niss** (score 0.10)
- Suggested ids to kill: pp-3844

### documents_fiscal — Смена налогового адреса
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Смена налогового адреса"
- Sample urls:
  - https://t.me/portugalpages/6790
- Suggested ids to kill: pp-6790

### banking — Необанк Vivid Money
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Необанк Vivid Money"
- Sample urls:
  - https://t.me/portugalpages/5674
- Closest existing guide (below threshold): **money-transfer** (score 0.07)
- Suggested ids to kill: pp-5674

### banking — В каких банках открывают счета нерезидентам
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "В каких банках открывают счета нерезидентам"
- Sample urls:
  - https://t.me/portugalpages/314
- Closest existing guide (below threshold): **activobank-opening** (score 0.06)
- Suggested ids to kill: pp-314

### banking — Открытие счёта в Caixa Geral — личный опыт
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Открытие счёта в Caixa Geral — личный опыт"
- Sample urls:
  - https://t.me/portugalpages/227
- Closest existing guide (below threshold): **activobank-opening** (score 0.12)
- Suggested ids to kill: pp-227

### banking — Что делать с порванной купюрой
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Что делать с порванной купюрой"
- Sample urls:
  - https://t.me/portugalpages/275
- Suggested ids to kill: pp-275

### banking — Как искать банкоматы ATM Express
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Как искать банкоматы ATM Express"
- Sample urls:
  - https://t.me/portugalpages/334
- Suggested ids to kill: pp-334

### banking — Как снять ограничение в 100 тыс. € на счету
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Как снять ограничение в 100 тыс. € на счету"
- Sample urls:
  - https://t.me/portugalpages/445
- Suggested ids to kill: pp-445

### banking — Ограничения на расчёт наличными
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Ограничения на расчёт наличными"
- Sample urls:
  - https://t.me/portugalpages/1031
- Suggested ids to kill: pp-1031

### banking — Банкоматы Португалии — различия
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Банкоматы Португалии — различия"
- Sample urls:
  - https://t.me/portugalpages/6786
- Closest existing guide (below threshold): **activobank-opening** (score 0.06)
- Suggested ids to kill: pp-6786

### auto_trips — Евро-Протокол (форма и образец) + приложение
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Евро-Протокол (форма и образец) + приложение"
- Sample urls:
  - https://t.me/portugalpages/6311
- Closest existing guide (below threshold): **accident-euro-protocol** (score 0.07)
- Suggested ids to kill: pp-6311

### auto_ownership — Льготная растаможка автомобиля
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Льготная растаможка автомобиля"
- Sample urls:
  - https://t.me/portugalpages/35
- Closest existing guide (below threshold): **car-import** (score 0.20)
- Suggested ids to kill: pp-35

### auto_trips — Оплата платных дорог и парковок
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Оплата платных дорог и парковок"
- Sample urls:
  - https://t.me/portugalpages/38
- Closest existing guide (below threshold): **via-verde-full** (score 0.12)
- Suggested ids to kill: pp-38

### auto_trips — Эвакуировали автомобиль — что делать
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Эвакуировали автомобиль — что делать"
- Sample urls:
  - https://t.me/portugalpages/39
- Suggested ids to kill: pp-39

### auto_ownership — Страховки ОСАГО
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Страховки ОСАГО"
- Sample urls:
  - https://t.me/portugalpages/6784
- Suggested ids to kill: pp-6784

### auto_ownership — Прохождение техосмотра
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Прохождение техосмотра"
- Sample urls:
  - https://t.me/portugalpages/53
- Closest existing guide (below threshold): **ipo-inspection** (score 0.14)
- Suggested ids to kill: pp-53

### auto_ownership — Рассчитать годовой налог на машину (IUC)
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Рассчитать годовой налог на машину (IUC)"
- Sample urls:
  - https://t.me/portugalpages/92
- Suggested ids to kill: pp-92

### auto_ownership — Где заказать запчасти на машину
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Где заказать запчасти на машину"
- Sample urls:
  - https://t.me/portugalpages/96
- Suggested ids to kill: pp-96

### auto_trips — Каким навигатором пользоваться
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Каким навигатором пользоваться"
- Sample urls:
  - https://t.me/portugalpages/168
- Suggested ids to kill: pp-168

### auto_ownership — Как пробить автомобиль перед покупкой
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Как пробить автомобиль перед покупкой"
- Sample urls:
  - https://t.me/portugalpages/201
- Suggested ids to kill: pp-201

### auto_ownership — Как определить, импортный ли авто
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Как определить, импортный ли авто"
- Sample urls:
  - https://t.me/portugalpages/205
- Closest existing guide (below threshold): **ipo-inspection** (score 0.13)
- Suggested ids to kill: pp-205

### auto_trips — ПДД Португалии
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "ПДД Португалии"
- Sample urls:
  - https://t.me/portugalpages/232
- Closest existing guide (below threshold): **ride-sharing-apps** (score 0.10)
- Suggested ids to kill: pp-232

### auto_ownership — Автомобильные страховки онлайн
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Автомобильные страховки онлайн"
- Sample urls:
  - https://t.me/portugalpages/269
- Suggested ids to kill: pp-269

### auto_ownership — Пригнать авто в Португалию
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Пригнать авто в Португалию"
- Sample urls:
  - https://t.me/portugalpages/301
- Closest existing guide (below threshold): **car-import** (score 0.18)
- Suggested ids to kill: pp-301

### auto_trips — Бесплатная парковка в Лиссабоне для электрокаров
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Бесплатная парковка в Лиссабоне для электрокаров"
- Sample urls:
  - https://t.me/portugalpages/377
- Suggested ids to kill: pp-377

### auto_ownership — Польские автостраховки для стран ЕС
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Польские автостраховки для стран ЕС"
- Sample urls:
  - https://t.me/portugalpages/401
- Suggested ids to kill: pp-401

### auto_trips — Что делать, если проехал портал без пункта оплаты
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Что делать, если проехал портал без пункта оплаты"
- Sample urls:
  - https://t.me/portugalpages/429
- Closest existing guide (below threshold): **via-verde-full** (score 0.11)
- Suggested ids to kill: pp-429

### auto_trips — Проехали через платный участок через пост Via Verde
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Проехали через платный участок через пост Via Verde"
- Sample urls:
  - https://t.me/portugalpages/424
- Closest existing guide (below threshold): **via-verde-full** (score 0.13)
- Suggested ids to kill: pp-424

### auto_ownership — Проверить авто на обременения перед покупкой
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Проверить авто на обременения перед покупкой"
- Sample urls:
  - https://t.me/portugalpages/481
- Closest existing guide (below threshold): **ipo-inspection** (score 0.10)
- Suggested ids to kill: pp-481

### auto_trips — Как оформить Via Card
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Как оформить Via Card"
- Sample urls:
  - https://t.me/portugalpages/562
- Closest existing guide (below threshold): **via-verde-full** (score 0.14)
- Suggested ids to kill: pp-562

### auto_trips — Список мест для OffRoad 4x4
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Список мест для OffRoad 4x4"
- Sample urls:
  - https://t.me/portugalpages/584
- Suggested ids to kill: pp-584

### driving_license — Правами за пределами Португалии
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Правами за пределами Португалии"
- Sample urls:
  - https://t.me/portugalpages/841
- Closest existing guide (below threshold): **driving-license-exchange** (score 0.08)
- Suggested ids to kill: pp-841

### auto_ownership — Узнать класс авто до покупки
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Узнать класс авто до покупки"
- Sample urls:
  - https://t.me/portugalpages/939
- Closest existing guide (below threshold): **ipo-inspection** (score 0.11)
- Suggested ids to kill: pp-939

### auto_ownership — Компенсация за покупку электротранспорта
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Компенсация за покупку электротранспорта"
- Sample urls:
  - https://t.me/portugalpages/983
- Suggested ids to kill: pp-983

### auto_trips — Можно ли водить пьяным
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Можно ли водить пьяным"
- Sample urls:
  - https://t.me/portugalpages/1237
- Suggested ids to kill: pp-1237

### auto_trips — Найти самую дешёвую заправку рядом
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Найти самую дешёвую заправку рядом"
- Sample urls:
  - https://t.me/portugalpages/1357
- Suggested ids to kill: pp-1357

### auto_trips — Поломка на автомагистрали
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Поломка на автомагистрали"
- Sample urls:
  - https://t.me/portugalpages/1343
- Suggested ids to kill: pp-1343

### auto_trips — 12 штрафов со снятием баллов
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "12 штрафов со снятием баллов"
- Sample urls:
  - https://t.me/portugalpages/1621
- Suggested ids to kill: pp-1621

### auto_trips — Самые тяжёлые нарушения ПДД
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Самые тяжёлые нарушения ПДД"
- Sample urls:
  - https://t.me/portugalpages/2376
- Suggested ids to kill: pp-2376

### auto_trips — Вызвать эвакуатор по страховке
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Вызвать эвакуатор по страховке"
- Sample urls:
  - https://t.me/portugalpages/6808
- Closest existing guide (below threshold): **accident-euro-protocol** (score 0.08)
- Suggested ids to kill: pp-6808

### auto_ownership — Замена стекла по страховке
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Замена стекла по страховке"
- Sample urls:
  - https://t.me/portugalpages/6845
- Suggested ids to kill: pp-6845

### public_transport — Маршруты общественного транспорта
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Маршруты общественного транспорта"
- Sample urls:
  - https://t.me/portugalpages/224
- Suggested ids to kill: pp-224

### public_transport — Детский проездной Лиссабона и Порту
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Детский проездной Лиссабона и Порту"
- Sample urls:
  - https://t.me/portugalpages/376
- Suggested ids to kill: pp-376

### public_transport — Приложения для междугородних и международных поездок
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Приложения для междугородних и международных поездок"
- Sample urls:
  - https://t.me/portugalpages/231
- Suggested ids to kill: pp-231

### public_transport — Рейтинг стендов Лиссабона
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Рейтинг стендов Лиссабона"
- Sample urls:
  - https://t.me/portugalpages/1275
- Suggested ids to kill: pp-1275

### public_transport — Штрафы за безбилетный проезд
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Штрафы за безбилетный проезд"
- Sample urls:
  - https://t.me/portugalpages/1281
- Suggested ids to kill: pp-1281

### auto_trips — Что делать при ДТП
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Что делать при ДТП"
- Sample urls:
  - https://t.me/portugalpages/3726
- Closest existing guide (below threshold): **accident-euro-protocol** (score 0.09)
- Suggested ids to kill: pp-3726

### residence_permit — Сертификат согласия (AIMA)
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Сертификат согласия (AIMA)"
- Sample urls:
  - https://t.me/portugalpages/9262
- Closest existing guide (below threshold): **reagrupamento-familiar** (score 0.13)
- Suggested ids to kill: pp-9262

### residence_permit — Звоним в AIMA
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Звоним в AIMA"
- Sample urls:
  - https://t.me/portugalpages/4671
- Closest existing guide (below threshold): **reagrupamento-familiar** (score 0.13)
- Suggested ids to kill: pp-4671

### residence_permit — ВНЖ по студенчеству
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "ВНЖ по студенчеству"
- Sample urls:
  - https://t.me/portugalpages/2356
- Closest existing guide (below threshold): **d4-student** (score 0.22)
- Suggested ids to kill: pp-2356

### residence_permit — Email всех отделений SEF
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Email всех отделений SEF"
- Sample urls:
  - https://t.me/portugalpages/2651
- Closest existing guide (below threshold): **reagrupamento-familiar** (score 0.10)
- Suggested ids to kill: pp-2651

### residence_permit — Прожиточный минимум для ВНЖ / D7 (2025)
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Прожиточный минимум для ВНЖ / D7 (2025)"
- Sample urls:
  - https://t.me/portugalpages/7368
- Closest existing guide (below threshold): **d2-entrepreneur** (score 0.13)
- Suggested ids to kill: pp-7368

### nationality — Гражданство Португалии по натурализации (архивный 5-лет)
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Гражданство Португалии по натурализации (архивный 5-лет)"
- Sample urls:
  - https://t.me/portugalpages/1428
- Closest existing guide (below threshold): **citizenship-by-descent** (score 0.18)
- Suggested ids to kill: pp-1428

### housing_rent — Бот по поиску аренды и продажи жилья
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Бот по поиску аренды и продажи жилья"
- Sample urls:
  - https://t.me/portugalpages/551
- Closest existing guide (below threshold): **rental-contract** (score 0.06)
- Suggested ids to kill: pp-551

### housing_rent — Как снять квартиру
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Как снять квартиру"
- Sample urls:
  - https://t.me/portugalpages/25
- Closest existing guide (below threshold): **rental-contract** (score 0.07)
- Suggested ids to kill: pp-25

### housing_buy — Покупка недвижимости в Португалии
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Покупка недвижимости в Португалии"
- Sample urls:
  - https://t.me/portugalpages/84
- Closest existing guide (below threshold): **buying-property** (score 0.33)
- Suggested ids to kill: pp-84

### housing_buy — Сдача недвижимости в аренду
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Сдача недвижимости в аренду"
- Sample urls:
  - https://t.me/portugalpages/89
- Closest existing guide (below threshold): **buying-property** (score 0.08)
- Suggested ids to kill: pp-89

### housing_rent — Расторжение договора аренды
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Расторжение договора аренды"
- Sample urls:
  - https://t.me/portugalpages/105
- Closest existing guide (below threshold): **rental-contract** (score 0.07)
- Suggested ids to kill: pp-105

### housing_rent — Образец письма расторжения договора аренды
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Образец письма расторжения договора аренды"
- Sample urls:
  - https://t.me/portugalpages/259
- Closest existing guide (below threshold): **rental-contract** (score 0.06)
- Suggested ids to kill: pp-259

### housing_buy — Подтвердить собственность (документы)
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Подтвердить собственность (документы)"
- Sample urls:
  - https://t.me/portugalpages/7108
- Suggested ids to kill: pp-7108

### education_children — Бесплатные учебники для детей
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Бесплатные учебники для детей"
- Sample urls:
  - https://t.me/portugalpages/26
- Closest existing guide (below threshold): **school-enrollment** (score 0.08)
- Suggested ids to kill: pp-26

### education_children — Как зачислить ребёнка в школу
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Как зачислить ребёнка в школу"
- Sample urls:
  - https://t.me/portugalpages/160
- Closest existing guide (below threshold): **school-enrollment** (score 0.27)
- Suggested ids to kill: pp-160

### education_children — Образование в португальской школе
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Образование в португальской школе"
- Sample urls:
  - https://t.me/portugalpages/1264
- Closest existing guide (below threshold): **school-enrollment** (score 0.17)
- Suggested ids to kill: pp-1264

### education_children — Абонемент в зоопарк
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Абонемент в зоопарк"
- Sample urls:
  - https://t.me/portugalpages/1229
- Closest existing guide (below threshold): **abono-de-familia** (score 0.11)
- Suggested ids to kill: pp-1229

### education_children — Рейтинг школ Португалии
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Рейтинг школ Португалии"
- Sample urls:
  - https://t.me/portugalpages/5075
- Closest existing guide (below threshold): **creche-kindergarten** (score 0.08)
- Suggested ids to kill: pp-5075

### animals — Перевозка животных в Португалию
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Перевозка животных в Португалию"
- Sample urls:
  - https://t.me/portugalpages/28
- Closest existing guide (below threshold): **pet-import** (score 0.10)
- Suggested ids to kill: pp-28

### animals — Чек-лист по перевозке животных
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Чек-лист по перевозке животных"
- Sample urls:
  - https://t.me/portugalpages/95
- Suggested ids to kill: pp-95

### animals — Как возить животных по Португалии
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Как возить животных по Португалии"
- Sample urls:
  - https://t.me/portugalpages/1437
- Suggested ids to kill: pp-1437

### animals — Что делать, если ваш питомец умер
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Что делать, если ваш питомец умер"
- Sample urls:
  - https://t.me/portugalpages/1958
- Suggested ids to kill: pp-1958

### animals — Где помыть собаку
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Где помыть собаку"
- Sample urls:
  - https://t.me/portugalpages/3183
- Closest existing guide (below threshold): **pet-import** (score 0.10)
- Suggested ids to kill: pp-3183

### taxes — Как выписать recibo (чек самозанятого)
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Как выписать recibo (чек самозанятого)"
- Sample urls:
  - https://t.me/portugalpages/6008
- Suggested ids to kill: pp-6008

### taxes — Как податься на NHR режим (архив)
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Как податься на NHR режим (архив)"
- Sample urls:
  - https://t.me/portugalpages/245
- Closest existing guide (below threshold): **ifici-regime** (score 0.18)
- Suggested ids to kill: pp-245

### taxes — Скачать сертификат о NHR
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Скачать сертификат о NHR"
- Sample urls:
  - https://t.me/portugalpages/319
- Closest existing guide (below threshold): **ifici-regime** (score 0.10)
- Suggested ids to kill: pp-319

### taxes — Руководство от налоговой по NHR
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Руководство от налоговой по NHR"
- Sample urls:
  - https://t.me/portugalpages/31
- Closest existing guide (below threshold): **ifici-regime** (score 0.10)
- Suggested ids to kill: pp-31

### taxes — NHR для англичан
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "NHR для англичан"
- Sample urls:
  - https://t.me/portugalpages/400
- Closest existing guide (below threshold): **ifici-regime** (score 0.11)
- Suggested ids to kill: pp-400

### taxes — Ещё про IRS в Португалии
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Ещё про IRS в Португалии"
- Sample urls:
  - https://t.me/portugalpages/65
- Closest existing guide (below threshold): **irs-filing** (score 0.11)
- Suggested ids to kill: pp-65

### taxes — Отслеживание налоговых вычетов
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Отслеживание налоговых вычетов"
- Sample urls:
  - https://t.me/portugalpages/56
- Closest existing guide (below threshold): **irs-filing** (score 0.09)
- Suggested ids to kill: pp-56

### taxes — Самостоятельно подать IRS (декларацию)
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Самостоятельно подать IRS (декларацию)"
- Sample urls:
  - https://t.me/portugalpages/74
- Closest existing guide (below threshold): **irs-filing** (score 0.10)
- Suggested ids to kill: pp-74

### taxes — Налогообложение физических лиц в Португалии
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Налогообложение физических лиц в Португалии"
- Sample urls:
  - https://t.me/portugalpages/111
- Closest existing guide (below threshold): **irs-filing** (score 0.09)
- Suggested ids to kill: pp-111

### taxes — Контакты бухгалтеров
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Контакты бухгалтеров"
- Sample urls:
  - https://t.me/portugalpages/264
- Suggested ids to kill: pp-264

### taxes — Облагаются ли донаты налогом в Португалии
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Облагаются ли донаты налогом в Португалии"
- Sample urls:
  - https://t.me/portugalpages/322
- Suggested ids to kill: pp-322

### before_arrival — Бот для записи на визу D в посольство Москвы
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Бот для записи на визу D в посольство Москвы"
- Sample urls:
  - https://t.me/portugalpages/362
- Suggested ids to kill: pp-362

### taxes — Отказ в NHR
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Отказ в NHR"
- Sample urls:
  - https://t.me/portugalpages/494
- Closest existing guide (below threshold): **ifici-regime** (score 0.11)
- Suggested ids to kill: pp-494

### work_business — ИП в Португалии
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "ИП в Португалии"
- Sample urls:
  - https://t.me/portugalpages/66
- Closest existing guide (below threshold): **recibos-verdes** (score 0.14)
- Suggested ids to kill: pp-66

### work_business — Про ИП и Atividade
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Про ИП и Atividade"
- Sample urls:
  - https://t.me/portugalpages/153
- Closest existing guide (below threshold): **recibos-verdes** (score 0.14)
- Suggested ids to kill: pp-153

### work_business — Где искать работу
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Где искать работу"
- Sample urls:
  - https://t.me/portugalpages/103
- Closest existing guide (below threshold): **recibos-verdes** (score 0.13)
- Suggested ids to kill: pp-103

### before_arrival — Апостиль справки о несудимости (Беларусь, 4 дня)
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Апостиль справки о несудимости (Беларусь, 4 дня)"
- Sample urls:
  - https://t.me/portugalpages/45
- Closest existing guide (below threshold): **apostille-translation** (score 0.08)
- Suggested ids to kill: pp-45

### before_arrival — Апостилирование диплома в Московской области
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Апостилирование диплома в Московской области"
- Sample urls:
  - https://t.me/portugalpages/34
- Closest existing guide (below threshold): **apostille-translation** (score 0.08)
- Suggested ids to kill: pp-34

### before_arrival — Приглашение друзьям/родственникам для визы C
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Приглашение друзьям/родственникам для визы C"
- Sample urls:
  - https://t.me/portugalpages/3942
- Suggested ids to kill: pp-3942

### before_arrival — Образец спонсорского письма для приглашения
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Образец спонсорского письма для приглашения"
- Sample urls:
  - https://t.me/portugalpages/347
- Suggested ids to kill: pp-347

### before_arrival — Получить справку в российском консульстве
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Получить справку в российском консульстве"
- Sample urls:
  - https://t.me/portugalpages/163
- Suggested ids to kill: pp-163

### before_arrival — Консульский отдел посольства России в Лиссабоне
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Консульский отдел посольства России в Лиссабоне"
- Sample urls:
  - https://t.me/portugalpages/122
- Suggested ids to kill: pp-122

### digital_gov — Доверенность для РФ/РБ без выезда из Португалии
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Доверенность для РФ/РБ без выезда из Португалии"
- Sample urls:
  - https://t.me/portugalpages/219
- Suggested ids to kill: pp-219

### taxes — Справка о налоговом резидентстве из РФ
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Справка о налоговом резидентстве из РФ"
- Sample urls:
  - https://t.me/portugalpages/223
- Suggested ids to kill: pp-223

### daily_life — Сменить язык AppStore
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Сменить язык AppStore"
- Sample urls:
  - https://t.me/portugalpages/51
- Closest existing guide (below threshold): **portuguese-phrases** (score 0.09)
- Suggested ids to kill: pp-51

### food_leisure — Тематические встречи и мероприятия
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Тематические встречи и мероприятия"
- Sample urls:
  - https://t.me/portugalpages/99
- Suggested ids to kill: pp-99

### auto_trips — Скидка на бензин BP
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Скидка на бензин BP"
- Sample urls:
  - https://t.me/portugalpages/102
- Suggested ids to kill: pp-102

### daily_life — Приложения для вызова рабочего
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Приложения для вызова рабочего"
- Sample urls:
  - https://t.me/portugalpages/124
- Suggested ids to kill: pp-124

### banking — Перемещение денег через крипту
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Перемещение денег через крипту"
- Sample urls:
  - https://t.me/portugalpages/137
- Closest existing guide (below threshold): **money-transfer** (score 0.06)
- Suggested ids to kill: pp-137

### banking — Необанк с португальским IBAN
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Необанк с португальским IBAN"
- Sample urls:
  - https://t.me/portugalpages/191
- Closest existing guide (below threshold): **activobank-opening** (score 0.07)
- Suggested ids to kill: pp-191

### telecom — Выбор тарифа для связи и интернета
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Выбор тарифа для связи и интернета"
- Sample urls:
  - https://t.me/portugalpages/162
- Suggested ids to kill: pp-162

### healthcare — Онлайн-очередь в SNS госпиталях
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Онлайн-очередь в SNS госпиталях"
- Sample urls:
  - https://t.me/portugalpages/169
- Closest existing guide (below threshold): **sns-utente** (score 0.11)
- Suggested ids to kill: pp-169

### auto_ownership — Онлайн-страховка на машину
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Онлайн-страховка на машину"
- Sample urls:
  - https://t.me/portugalpages/190
- Suggested ids to kill: pp-190

### telecom — VPN для доступа к РФ-сайтам
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "VPN для доступа к РФ-сайтам"
- Sample urls:
  - https://t.me/portugalpages/218
- Suggested ids to kill: pp-218

### daily_life — Где и как покупать технику в Португалии
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Где и как покупать технику в Португалии"
- Sample urls:
  - https://t.me/portugalpages/220
- Closest existing guide (below threshold): **ctt-post** (score 0.13)
- Suggested ids to kill: pp-220

### daily_life — Дроны в Португалии
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Дроны в Португалии"
- Sample urls:
  - https://t.me/portugalpages/268
- Closest existing guide (below threshold): **ctt-post** (score 0.14)
- Suggested ids to kill: pp-268

### digital_gov — Приложение с документами
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Приложение с документами"
- Sample urls:
  - https://t.me/portugalpages/1143
- Suggested ids to kill: pp-1143

### telecom — Как заказать eSIM NOS
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Как заказать eSIM NOS"
- Sample urls:
  - https://t.me/portugalpages/337
- Closest existing guide (below threshold): **mobile-carriers** (score 0.08)
- Suggested ids to kill: pp-337

### daily_life — Справочник профессионалов в Португалии
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Справочник профессионалов в Португалии"
- Sample urls:
  - https://t.me/portugalpages/166
- Closest existing guide (below threshold): **ctt-post** (score 0.13)
- Suggested ids to kill: pp-166

### daily_life — Мини-гайд по посылкам из РБ
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Мини-гайд по посылкам из РБ"
- Sample urls:
  - https://t.me/portugalpages/58
- Suggested ids to kill: pp-58

### education_children — Изучение португальского языка
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Изучение португальского языка"
- Sample urls:
  - https://t.me/portugalpages/71
- Suggested ids to kill: pp-71

### daily_life — Как экономить на продуктах
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Как экономить на продуктах"
- Sample urls:
  - https://t.me/portugalpages/108
- Suggested ids to kill: pp-108

### daily_life — Карта самолётного шума в Лиссабоне
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Карта самолётного шума в Лиссабоне"
- Sample urls:
  - https://t.me/portugalpages/222
- Closest existing guide (below threshold): **noise-neighbors** (score 0.08)
- Suggested ids to kill: pp-222

### residence_permit — Как проходить границу с ВНЖ
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Как проходить границу с ВНЖ"
- Sample urls:
  - https://t.me/portugalpages/249
- Closest existing guide (below threshold): **d2-entrepreneur** (score 0.13)
- Suggested ids to kill: pp-249

### before_arrival — Как в РФ выписаться удалённо
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Как в РФ выписаться удалённо"
- Sample urls:
  - https://t.me/portugalpages/283
- Suggested ids to kill: pp-283

### before_arrival — Как закрыть ИП удалённо в РФ
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Как закрыть ИП удалённо в РФ"
- Sample urls:
  - https://t.me/portugalpages/465
- Suggested ids to kill: pp-465

### housing_rent — Доп. соглашение на Flatio
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Доп. соглашение на Flatio"
- Sample urls:
  - https://t.me/portugalpages/561
- Suggested ids to kill: pp-561

### emergency_rights — Соц. поддержки в регионах Португалии
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Соц. поддержки в регионах Португалии"
- Sample urls:
  - https://t.me/portugalpages/1072
- Closest existing guide (below threshold): **emergency-112** (score 0.09)
- Suggested ids to kill: pp-1072

### emergency_rights — Убежища Лиссабона (на случай ЧС)
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Убежища Лиссабона (на случай ЧС)"
- Sample urls:
  - https://t.me/portugalpages/7174
- Suggested ids to kill: pp-7174

### travel_portugal — Экскурсия по Лиссабону
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Экскурсия по Лиссабону"
- Sample urls:
  - https://t.me/portugalpages/528
- Closest existing guide (below threshold): **sintra-day-trip** (score 0.20)
- Suggested ids to kill: pp-528

### daily_life — Химчистка
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Химчистка"
- Sample urls:
  - https://t.me/portugalpages/145
- Suggested ids to kill: pp-145

### work_business — Коворкинги Португалии
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Коворкинги Португалии"
- Sample urls:
  - https://t.me/portugalpages/208
- Suggested ids to kill: pp-208

### food_leisure — Попасть на большой футбол дёшево
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Попасть на большой футбол дёшево"
- Sample urls:
  - https://t.me/portugalpages/221
- Closest existing guide (below threshold): **football-culture** (score 0.09)
- Suggested ids to kill: pp-221

### daily_life — Одежда — марки и магазины
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Одежда — марки и магазины"
- Sample urls:
  - https://t.me/portugalpages/228
- Suggested ids to kill: pp-228

### food_leisure — Где покупать билеты
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Где покупать билеты"
- Sample urls:
  - https://t.me/portugalpages/233
- Closest existing guide (below threshold): **wine-regions** (score 0.09)
- Suggested ids to kill: pp-233

### daily_life — Lidl outlet
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Lidl outlet"
- Sample urls:
  - https://t.me/portugalpages/240
- Closest existing guide (below threshold): **supermarkets-compared** (score 0.10)
- Suggested ids to kill: pp-240

### emergency_rights — Компенсации авиакомпаний ЕС
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Компенсации авиакомпаний ЕС"
- Sample urls:
  - https://t.me/portugalpages/248
- Suggested ids to kill: pp-248

### daily_life — Сравнение цен на продукты
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Сравнение цен на продукты"
- Sample urls:
  - https://t.me/portugalpages/272
- Closest existing guide (below threshold): **supermarkets-compared** (score 0.09)
- Suggested ids to kill: pp-272

### daily_life — Карта Leroy Merlin
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Карта Leroy Merlin"
- Sample urls:
  - https://t.me/portugalpages/277
- Suggested ids to kill: pp-277

### daily_life — Аутлеты Лиссабона
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Аутлеты Лиссабона"
- Sample urls:
  - https://t.me/portugalpages/570
- Suggested ids to kill: pp-570

### daily_life — Названия съедобных трав и овощей
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Названия съедобных трав и овощей"
- Sample urls:
  - https://t.me/portugalpages/592
- Suggested ids to kill: pp-592

### daily_life — Переадресация почтовых отправлений
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Переадресация почтовых отправлений"
- Sample urls:
  - https://t.me/portugalpages/1588
- Closest existing guide (below threshold): **ctt-post** (score 0.13)
- Suggested ids to kill: pp-1588

### daily_life — IKEA: запасные болты
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "IKEA: запасные болты"
- Sample urls:
  - https://t.me/portugalpages/2226
- Suggested ids to kill: pp-2226

### emergency_rights — Куда жаловаться на шум
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Куда жаловаться на шум"
- Sample urls:
  - https://t.me/portugalpages/2640
- Suggested ids to kill: pp-2640

### housing_buy — Залоговый аукцион
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Залоговый аукцион"
- Sample urls:
  - https://t.me/portugalpages/2796
- Suggested ids to kill: pp-2796

### emergency_rights — Закон о шуме
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Закон о шуме"
- Sample urls:
  - https://t.me/portugalpages/2938
- Suggested ids to kill: pp-2938

### emergency_rights — Общество защиты прав потребителей
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Общество защиты прав потребителей"
- Sample urls:
  - https://t.me/portugalpages/7546
- Suggested ids to kill: pp-7546

### daily_life — Удержание почты CTT
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Удержание почты CTT"
- Sample urls:
  - https://t.me/portugalpages/9509
- Closest existing guide (below threshold): **ctt-post** (score 0.14)
- Suggested ids to kill: pp-9509

### daily_life — Контакты служб доставки
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Контакты служб доставки"
- Sample urls:
  - https://t.me/portugalpages/9461
- Suggested ids to kill: pp-9461

### daily_life — Сайт для перевозки авто и вещей
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Сайт для перевозки авто и вещей"
- Sample urls:
  - https://t.me/portugalpages/9556
- Suggested ids to kill: pp-9556

### travel_portugal — Малоизвестные достопримечательности Лиссабона
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Малоизвестные достопримечательности Лиссабона"
- Sample urls:
  - https://t.me/portugalpages/5621
- Closest existing guide (below threshold): **lisbon-neighborhoods** (score 0.22)
- Suggested ids to kill: pp-5621

### travel_portugal — Натуральные бассейны в Португалии
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Натуральные бассейны в Португалии"
- Sample urls:
  - https://t.me/portugalpages/979
- Closest existing guide (below threshold): **coimbra** (score 0.11)
- Suggested ids to kill: pp-979

### travel_portugal — Заброшенный ресторан Panorâmico de Monsanto
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Заброшенный ресторан Panorâmico de Monsanto"
- Sample urls:
  - https://t.me/portugalpages/988
- Closest existing guide (below threshold): **lisbon-neighborhoods** (score 0.09)
- Suggested ids to kill: pp-988

### travel_portugal — Самые популярные пляжи в Португалии
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Самые популярные пляжи в Португалии"
- Sample urls:
  - https://t.me/portugalpages/996
- Closest existing guide (below threshold): **coimbra** (score 0.10)
- Suggested ids to kill: pp-996

### travel_portugal — Badoca Safari Park
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Badoca Safari Park"
- Sample urls:
  - https://t.me/portugalpages/1015
- Suggested ids to kill: pp-1015

### travel_portugal — Выходные недалеко от Порту
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Выходные недалеко от Порту"
- Sample urls:
  - https://t.me/portugalpages/1032
- Closest existing guide (below threshold): **porto-neighborhoods** (score 0.25)
- Suggested ids to kill: pp-1032

### travel_portugal — 5 самых красивых дорог Португалии
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "5 самых красивых дорог Португалии"
- Sample urls:
  - https://t.me/portugalpages/1057
- Closest existing guide (below threshold): **coimbra** (score 0.10)
- Suggested ids to kill: pp-1057

### travel_portugal — Португальские акведуки
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Португальские акведуки"
- Sample urls:
  - https://t.me/portugalpages/1138
- Suggested ids to kill: pp-1138

### travel_portugal — Тёплый океан и пожить в палатке (Испания)
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Тёплый океан и пожить в палатке (Испания)"
- Sample urls:
  - https://t.me/portugalpages/1146
- Suggested ids to kill: pp-1146

### food_leisure — Кинотеатры под открытым небом
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Кинотеатры под открытым небом"
- Sample urls:
  - https://t.me/portugalpages/1199
- Suggested ids to kill: pp-1199

### travel_portugal — Где посмотреть на звёзды
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Где посмотреть на звёзды"
- Sample urls:
  - https://t.me/portugalpages/341
- Suggested ids to kill: pp-341

### travel_portugal — Глэмпинг на горе 925 м
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Глэмпинг на горе 925 м"
- Sample urls:
  - https://t.me/portugalpages/1657
- Suggested ids to kill: pp-1657

### travel_portugal — Португалия в октябре
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Португалия в октябре"
- Sample urls:
  - https://t.me/portugalpages/1701
- Suggested ids to kill: pp-1701

### travel_portugal — Трансляция снега в Serra da Estrela
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Трансляция снега в Serra da Estrela"
- Sample urls:
  - https://t.me/portugalpages/2173
- Suggested ids to kill: pp-2173

### travel_portugal — Где в Португалии есть снег
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Где в Португалии есть снег"
- Sample urls:
  - https://t.me/portugalpages/2316
- Closest existing guide (below threshold): **coimbra** (score 0.13)
- Suggested ids to kill: pp-2316

### travel_portugal — Королевские охотничьи угодья
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Королевские охотничьи угодья"
- Sample urls:
  - https://t.me/portugalpages/2321
- Suggested ids to kill: pp-2321

### travel_portugal — Пещера в Португалии
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Пещера в Португалии"
- Sample urls:
  - https://t.me/portugalpages/2905
- Closest existing guide (below threshold): **coimbra** (score 0.13)
- Suggested ids to kill: pp-2905

### travel_portugal — Самый длинный пешеходный подвесной мост
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Самый длинный пешеходный подвесной мост"
- Sample urls:
  - https://t.me/portugalpages/3000
- Closest existing guide (below threshold): **lisbon-walking-tour-alfama** (score 0.05)
- Suggested ids to kill: pp-3000

### travel_portugal — Самый короткий международный мост
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Самый короткий международный мост"
- Sample urls:
  - https://t.me/portugalpages/3478
- Suggested ids to kill: pp-3478

### travel_portugal — 5 тихих городков возле Лиссабона
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "5 тихих городков возле Лиссабона"
- Sample urls:
  - https://t.me/portugalpages/2994
- Closest existing guide (below threshold): **lisbon-neighborhoods** (score 0.20)
- Suggested ids to kill: pp-2994

### travel_portugal — Porto — 20 мест посетить
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Porto — 20 мест посетить"
- Sample urls:
  - https://t.me/portugalpages/3103
- Closest existing guide (below threshold): **porto-top-sights** (score 0.17)
- Suggested ids to kill: pp-3103

### travel_portugal — Авейру
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Авейру"
- Sample urls:
  - https://t.me/portugalpages/3167
- Closest existing guide (below threshold): **aveiro-coast** (score 0.18)
- Suggested ids to kill: pp-3167

### travel_portugal — Bacalhôa Buddha Eden (сад)
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Bacalhôa Buddha Eden (сад)"
- Sample urls:
  - https://t.me/portugalpages/3156
- Suggested ids to kill: pp-3156

### travel_portugal — Vila Viçosa и Elvas
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Vila Viçosa и Elvas"
- Sample urls:
  - https://t.me/portugalpages/3583
- Closest existing guide (below threshold): **evora-alentejo** (score 0.08)
- Suggested ids to kill: pp-3583

### travel_portugal — Топ пляжей, богатых йодом
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Топ пляжей, богатых йодом"
- Sample urls:
  - https://t.me/portugalpages/4410
- Closest existing guide (below threshold): **lisbon-top-sights** (score 0.07)
- Suggested ids to kill: pp-4410

### travel_portugal — На троллее через границу из Испании в Португалию
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "На троллее через границу из Испании в Португалию"
- Sample urls:
  - https://t.me/portugalpages/4702
- Suggested ids to kill: pp-4702

### travel_portugal — Путешествие по Сезимбре
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Путешествие по Сезимбре"
- Sample urls:
  - https://t.me/portugalpages/4879
- Suggested ids to kill: pp-4879

### travel_portugal — Лучшие речные пляжи
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Лучшие речные пляжи"
- Sample urls:
  - https://t.me/portugalpages/4862
- Suggested ids to kill: pp-4862

### travel_portugal — Трасса 222 (долина Дору)
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Трасса 222 (долина Дору)"
- Sample urls:
  - https://t.me/portugalpages/5119
- Closest existing guide (below threshold): **douro-valley** (score 0.27)
- Suggested ids to kill: pp-5119

### travel_portugal — Кемпинг на о. Берленга
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Кемпинг на о. Берленга"
- Sample urls:
  - https://t.me/portugalpages/5163
- Suggested ids to kill: pp-5163

### travel_portugal — Трасса ЕН 120 вдоль побережья Алентежу
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Трасса ЕН 120 вдоль побережья Алентежу"
- Sample urls:
  - https://t.me/portugalpages/5253
- Closest existing guide (below threshold): **evora-alentejo** (score 0.15)
- Suggested ids to kill: pp-5253

### travel_portugal — Все экотропы Португалии
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Все экотропы Португалии"
- Sample urls:
  - https://t.me/portugalpages/5367
- Closest existing guide (below threshold): **coimbra** (score 0.11)
- Suggested ids to kill: pp-5367

### travel_portugal — Путешествуем на поездах
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Путешествуем на поездах"
- Sample urls:
  - https://t.me/portugalpages/5414
- Closest existing guide (below threshold): **cp-trains** (score 0.09)
- Suggested ids to kill: pp-5414

### travel_portugal — Португальская Швейцария
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Португальская Швейцария"
- Sample urls:
  - https://t.me/portugalpages/5474
- Closest existing guide (below threshold): **azores-islands** (score 0.10)
- Suggested ids to kill: pp-5474

### travel_portugal — Выходные возле Серра-да-Эштрела
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Выходные возле Серра-да-Эштрела"
- Sample urls:
  - https://t.me/portugalpages/5504
- Suggested ids to kill: pp-5504

### travel_portugal — Самые средневековые города Португалии
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Самые средневековые города Португалии"
- Sample urls:
  - https://t.me/portugalpages/5630
- Closest existing guide (below threshold): **coimbra** (score 0.10)
- Suggested ids to kill: pp-5630

### travel_portugal — Гайд по дворцу Пена в Синтре
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Гайд по дворцу Пена в Синтре"
- Sample urls:
  - https://t.me/portugalpages/6207
- Closest existing guide (below threshold): **sintra-day-trip** (score 0.08)
- Suggested ids to kill: pp-6207

### travel_portugal — Живописные португальские деревни
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Живописные португальские деревни"
- Sample urls:
  - https://t.me/portugalpages/6406
- Suggested ids to kill: pp-6406

### travel_portugal — Прогулки в Trás-os-Montes (север)
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Прогулки в Trás-os-Montes (север)"
- Sample urls:
  - https://t.me/portugalpages/6703
- Closest existing guide (below threshold): **braga-guimaraes** (score 0.09)
- Suggested ids to kill: pp-6703

### travel_portugal — 8 кемпингов/глэмпингов/вилл среди природы
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "8 кемпингов/глэмпингов/вилл среди природы"
- Sample urls:
  - https://t.me/portugalpages/7547
- Suggested ids to kill: pp-7547

### travel_portugal — Дворцы и замки на севере
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Дворцы и замки на севере"
- Sample urls:
  - https://t.me/portugalpages/7628
- Closest existing guide (below threshold): **sintra-day-trip** (score 0.08)
- Suggested ids to kill: pp-7628

### travel_portugal — Уединённые места Алгарве
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Уединённые места Алгарве"
- Sample urls:
  - https://t.me/portugalpages/7724
- Closest existing guide (below threshold): **algarve-living** (score 0.18)
- Suggested ids to kill: pp-7724

### travel_portugal — Самые большие дюны ЕС
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Самые большие дюны ЕС"
- Sample urls:
  - https://t.me/portugalpages/7903
- Closest existing guide (below threshold): **azores-islands** (score 0.09)
- Suggested ids to kill: pp-7903

### travel_portugal — Самая древняя римская дорога в Португалии
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Самая древняя римская дорога в Португалии"
- Sample urls:
  - https://t.me/portugalpages/7951
- Closest existing guide (below threshold): **coimbra** (score 0.09)
- Suggested ids to kill: pp-7951

### travel_portugal — Берленги
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Берленги"
- Sample urls:
  - https://t.me/portugalpages/8417
- Closest existing guide (below threshold): **madeira-island** (score 0.10)
- Suggested ids to kill: pp-8417

### travel_portugal — Португальский Стоунхендж
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Португальский Стоунхендж"
- Sample urls:
  - https://t.me/portugalpages/9183
- Suggested ids to kill: pp-9183

### travel_portugal — Видовая точка: дворец Пена (Sintra)
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Видовая точка: дворец Пена (Sintra)"
- Sample urls:
  - https://t.me/portugalpages/3101
- Closest existing guide (below threshold): **sintra-day-trip** (score 0.08)
- Suggested ids to kill: pp-3101

### travel_portugal — Крыша церкви с видом на красный мост
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Крыша церкви с видом на красный мост"
- Sample urls:
  - https://t.me/portugalpages/3120
- Closest existing guide (below threshold): **lisbon-neighborhoods** (score 0.08)
- Suggested ids to kill: pp-3120

### food_leisure — Грузинская кухня в Португалии
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Грузинская кухня в Португалии"
- Sample urls:
  - https://t.me/portugalpages/4881
- Closest existing guide (below threshold): **must-try-dishes** (score 0.21)
- Suggested ids to kill: pp-4881

### food_leisure — Доставка русских продуктов из Испании
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Доставка русских продуктов из Испании"
- Sample urls:
  - https://t.me/portugalpages/6384
- Suggested ids to kill: pp-6384

### food_leisure — Грузинское бистро Karater
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Грузинское бистро Karater"
- Sample urls:
  - https://t.me/portugalpages/6830
- Suggested ids to kill: pp-6830

### food_leisure — Оформить членство Benfica и купить билеты на матчи
- Catalog entries in cluster: 1 (sources: portugalpages.ru.json)
- Member titles: "Оформить членство Benfica и купить билеты на матчи"
- Sample urls:
  - https://t.me/portugalpages/6338
- Closest existing guide (below threshold): **football-culture** (score 0.15)
- Suggested ids to kill: pp-6338

### travel_portugal — FlixBus — междугородние автобусы
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "FlixBus — междугородние автобусы"
- Sample urls:
  - https://www.flixbus.pt/
- Closest existing guide (below threshold): **intercity-buses** (score 0.27)
- Suggested ids to kill: svc-flixbus

### travel_portugal — Rede Expressos — национальная автобусная сеть
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "Rede Expressos — национальная автобусная сеть"
- Sample urls:
  - https://rede-expressos.pt/
- Closest existing guide (below threshold): **intercity-buses** (score 0.23)
- Suggested ids to kill: svc-redeexpressos

### travel_portugal — Alsa — автобусы Португалия-Испания
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "Alsa — автобусы Португалия-Испания"
- Sample urls:
  - https://www.alsa.es/
- Closest existing guide (below threshold): **intercity-buses** (score 0.25)
- Suggested ids to kill: svc-alsa

### travel_portugal — EVA Transportes — Алгарве
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "EVA Transportes — Алгарве"
- Sample urls:
  - https://eva-bus.com/
- Closest existing guide (below threshold): **algarve-living** (score 0.17)
- Suggested ids to kill: svc-eva-bus

### travel_portugal — CP — португальские ж/д
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "CP — португальские ж/д"
- Sample urls:
  - https://www.cp.pt/
- Closest existing guide (below threshold): **cp-trains** (score 0.10)
- Suggested ids to kill: svc-cp

### travel_portugal — Omio — агрегатор транспорта
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "Omio — агрегатор транспорта"
- Sample urls:
  - https://www.omio.com/
- Suggested ids to kill: svc-omio

### travel_portugal — TAP Air Portugal — перевозчик
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "TAP Air Portugal — перевозчик"
- Sample urls:
  - https://www.flytap.com/
- Closest existing guide (below threshold): **cp-trains** (score 0.08)
- Suggested ids to kill: svc-tap

### travel_portugal — Ryanair — бюджетный перевозчик
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "Ryanair — бюджетный перевозчик"
- Sample urls:
  - https://www.ryanair.com/pt/en
- Closest existing guide (below threshold): **domestic-flights-ferries** (score 0.07)
- Suggested ids to kill: svc-ryanair

### travel_portugal — SATA / Azores Airlines
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "SATA / Azores Airlines"
- Sample urls:
  - https://www.azoresairlines.pt/
- Closest existing guide (below threshold): **domestic-flights-ferries** (score 0.15)
- Suggested ids to kill: svc-sata

### travel_portugal — Atlânticoline — паромы Азоры
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "Atlânticoline — паромы Азоры"
- Sample urls:
  - https://www.atlanticoline.pt/
- Closest existing guide (below threshold): **domestic-flights-ferries** (score 0.23)
- Suggested ids to kill: svc-atlanticoline

### travel_portugal — Porto Santo Line — паром Мадейра-Порту-Санту
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "Porto Santo Line — паром Мадейра-Порту-Санту"
- Sample urls:
  - https://www.portosantoline.pt/
- Closest existing guide (below threshold): **porto-neighborhoods** (score 0.17)
- Suggested ids to kill: svc-portosanto-line

### public_transport — Transtejo Soflusa — паромы через Тежу
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "Transtejo Soflusa — паромы через Тежу"
- Sample urls:
  - https://ttsl.pt/
- Suggested ids to kill: svc-transtejo

### public_transport — Carris — автобусы/трамваи Лиссабона
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "Carris — автобусы/трамваи Лиссабона"
- Sample urls:
  - https://www.carris.pt/
- Suggested ids to kill: svc-carris

### public_transport — STCP — автобусы Порту
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "STCP — автобусы Порту"
- Sample urls:
  - https://www.stcp.pt/
- Suggested ids to kill: svc-stcp

### auto_trips — Uber
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "Uber"
- Sample urls:
  - https://www.uber.com/pt/pt/
- Closest existing guide (below threshold): **ride-sharing-apps** (score 0.22)
- Suggested ids to kill: svc-uber

### auto_trips — Bolt
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "Bolt"
- Sample urls:
  - https://bolt.eu/pt/
- Closest existing guide (below threshold): **ride-sharing-apps** (score 0.22)
- Suggested ids to kill: svc-bolt

### auto_trips — BlaBlaCar — попутчики
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "BlaBlaCar — попутчики"
- Sample urls:
  - https://www.blablacar.pt/
- Closest existing guide (below threshold): **ride-sharing-apps** (score 0.10)
- Suggested ids to kill: svc-blablacar

### auto_trips — FreeNow — такси через app
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "FreeNow — такси через app"
- Sample urls:
  - https://www.free-now.com/pt/
- Closest existing guide (below threshold): **ride-sharing-apps** (score 0.20)
- Suggested ids to kill: svc-freenow

### auto_trips — Via Verde — платные дороги
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "Via Verde — платные дороги"
- Sample urls:
  - https://www.viaverde.pt/
- Closest existing guide (below threshold): **via-verde-full** (score 0.23)
- Suggested ids to kill: svc-viaverde

### public_transport — GIRA — велошеринг Лиссабон
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "GIRA — велошеринг Лиссабон"
- Sample urls:
  - https://www.gira-bicicletasdelisboa.pt/
- Suggested ids to kill: svc-gira

### public_transport — Andante — проездной Порту
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "Andante — проездной Порту"
- Sample urls:
  - https://www.linhandante.com/
- Suggested ids to kill: svc-andante

### daily_life — Continente — супермаркет
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "Continente — супермаркет"
- Sample urls:
  - https://www.continente.pt/
- Closest existing guide (below threshold): **supermarkets-compared** (score 0.10)
- Suggested ids to kill: svc-continente

### daily_life — Pingo Doce — супермаркет
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "Pingo Doce — супермаркет"
- Sample urls:
  - https://www.pingodoce.pt/
- Closest existing guide (below threshold): **supermarkets-compared** (score 0.20)
- Suggested ids to kill: svc-pingodoce

### daily_life — Lidl Portugal
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "Lidl Portugal"
- Sample urls:
  - https://www.lidl.pt/
- Closest existing guide (below threshold): **supermarkets-compared** (score 0.09)
- Suggested ids to kill: svc-lidl

### daily_life — Minipreço / DIA
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "Minipreço / DIA"
- Sample urls:
  - https://www.minipreco.pt/
- Suggested ids to kill: svc-minipreco

### daily_life — Auchan Portugal
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "Auchan Portugal"
- Sample urls:
  - https://www.auchan.pt/
- Suggested ids to kill: svc-auchan

### daily_life — Aldi Portugal
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "Aldi Portugal"
- Sample urls:
  - https://www.aldi.pt/
- Suggested ids to kill: svc-aldi

### daily_life — El Corte Inglés — премиум универмаг
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "El Corte Inglés — премиум универмаг"
- Sample urls:
  - https://www.elcorteingles.pt/
- Suggested ids to kill: svc-elcorteingles

### daily_life — Mercadão — доставка от рынков
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "Mercadão — доставка от рынков"
- Sample urls:
  - https://mercadao.pt/
- Suggested ids to kill: svc-mercadao

### food_leisure — Uber Eats Portugal
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "Uber Eats Portugal"
- Sample urls:
  - https://www.ubereats.com/pt
- Suggested ids to kill: svc-uber-eats

### food_leisure — Glovo Portugal
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "Glovo Portugal"
- Sample urls:
  - https://glovoapp.com/pt/
- Suggested ids to kill: svc-glovo

### food_leisure — Bolt Food Portugal
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "Bolt Food Portugal"
- Sample urls:
  - https://food.bolt.eu/pt/
- Suggested ids to kill: svc-bolt-food

### housing_rent — Idealista — жильё
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "Idealista — жильё"
- Sample urls:
  - https://www.idealista.pt/
- Closest existing guide (below threshold): **rental-contract** (score 0.07)
- Suggested ids to kill: svc-idealista

### housing_rent — Imovirtual — жильё
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "Imovirtual — жильё"
- Sample urls:
  - https://www.imovirtual.com/
- Closest existing guide (below threshold): **rental-contract** (score 0.07)
- Suggested ids to kill: svc-imovirtual

### housing_rent — OLX Imóveis — жильё от собственников
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "OLX Imóveis — жильё от собственников"
- Sample urls:
  - https://www.olx.pt/imoveis/
- Closest existing guide (below threshold): **rental-contract** (score 0.06)
- Suggested ids to kill: svc-olx-imoveis

### housing_rent — Flatio — средний срок аренды
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "Flatio — средний срок аренды"
- Sample urls:
  - https://www.flatio.com/pt
- Closest existing guide (below threshold): **rental-contract** (score 0.06)
- Suggested ids to kill: svc-flatio

### housing_rent — Uniplaces — для студентов
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "Uniplaces — для студентов"
- Sample urls:
  - https://www.uniplaces.com/
- Closest existing guide (below threshold): **rental-contract** (score 0.07)
- Suggested ids to kill: svc-uniplaces

### housing_buy — Supercasa
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "Supercasa"
- Sample urls:
  - https://supercasa.pt/
- Closest existing guide (below threshold): **buying-property** (score 0.10)
- Suggested ids to kill: svc-supercasa

### housing_buy — ERA Imobiliária
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "ERA Imobiliária"
- Sample urls:
  - https://www.era.pt/
- Suggested ids to kill: svc-era

### banking — Millennium BCP
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "Millennium BCP"
- Sample urls:
  - https://www.millenniumbcp.pt/
- Closest existing guide (below threshold): **activobank-opening** (score 0.07)
- Suggested ids to kill: svc-millenniumbcp

### banking — Caixa Geral de Depósitos
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "Caixa Geral de Depósitos"
- Sample urls:
  - https://www.cgd.pt/
- Closest existing guide (below threshold): **activobank-opening** (score 0.06)
- Suggested ids to kill: svc-caixa

### banking — Santander Totta
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "Santander Totta"
- Sample urls:
  - https://www.santander.pt/
- Closest existing guide (below threshold): **activobank-opening** (score 0.07)
- Suggested ids to kill: svc-santander-pt

### banking — BPI
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "BPI"
- Sample urls:
  - https://www.bpi.pt/
- Closest existing guide (below threshold): **activobank-opening** (score 0.07)
- Suggested ids to kill: svc-bpi

### banking — Novo Banco
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "Novo Banco"
- Sample urls:
  - https://www.novobanco.pt/
- Closest existing guide (below threshold): **activobank-opening** (score 0.07)
- Suggested ids to kill: svc-novobanco

### banking — Revolut
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "Revolut"
- Sample urls:
  - https://www.revolut.com/pt-PT/
- Suggested ids to kill: svc-revolut

### banking — N26
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "N26"
- Sample urls:
  - https://n26.com/pt-pt
- Suggested ids to kill: svc-n26

### banking — Wise (transferências)
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "Wise (transferências)"
- Sample urls:
  - https://wise.com/pt/
- Closest existing guide (below threshold): **money-transfer** (score 0.07)
- Suggested ids to kill: svc-wise

### banking — MB Way — платежи по телефону
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "MB Way — платежи по телефону"
- Sample urls:
  - https://www.mbway.pt/
- Closest existing guide (below threshold): **activobank-opening** (score 0.07)
- Suggested ids to kill: svc-mbway

### telecom — MEO (Altice) — моб. связь
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "MEO (Altice) — моб. связь"
- Sample urls:
  - https://www.meo.pt/
- Closest existing guide (below threshold): **mobile-carriers** (score 0.17)
- Suggested ids to kill: svc-meo

### telecom — NOS — моб. связь и ТВ
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "NOS — моб. связь и ТВ"
- Sample urls:
  - https://www.nos.pt/
- Closest existing guide (below threshold): **mobile-carriers** (score 0.18)
- Suggested ids to kill: svc-nos

### telecom — Vodafone Portugal
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "Vodafone Portugal"
- Sample urls:
  - https://www.vodafone.pt/
- Closest existing guide (below threshold): **mobile-carriers** (score 0.18)
- Suggested ids to kill: svc-vodafone

### telecom — NOWO — связь и интернет
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "NOWO — связь и интернет"
- Sample urls:
  - https://www.nowo.pt/
- Closest existing guide (below threshold): **mobile-carriers** (score 0.18)
- Suggested ids to kill: svc-nowo

### telecom — DIGI — дешевый оператор
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "DIGI — дешевый оператор"
- Sample urls:
  - https://www.digimobil.pt/
- Closest existing guide (below threshold): **mobile-carriers** (score 0.07)
- Suggested ids to kill: svc-digi

### daily_life — EDP — электричество
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "EDP — электричество"
- Sample urls:
  - https://www.edp.pt/
- Suggested ids to kill: svc-edp

### daily_life — Iberdrola — электричество
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "Iberdrola — электричество"
- Sample urls:
  - https://www.iberdrola.pt/
- Suggested ids to kill: svc-iberdrola

### daily_life — Galp — газ и электричество
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "Galp — газ и электричество"
- Sample urls:
  - https://galp.com/pt/
- Suggested ids to kill: svc-galp

### healthcare — Multicare — частная страховка
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "Multicare — частная страховка"
- Sample urls:
  - https://www.multicare.pt/
- Closest existing guide (below threshold): **private-insurance** (score 0.08)
- Suggested ids to kill: svc-multicare

### healthcare — Luz Saúde / Hospital da Luz
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "Luz Saúde / Hospital da Luz"
- Sample urls:
  - https://www.luzsaude.pt/
- Closest existing guide (below threshold): **finding-doctor** (score 0.08)
- Suggested ids to kill: svc-luz-saude

### healthcare — CUF — сеть клиник
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "CUF — сеть клиник"
- Sample urls:
  - https://www.cuf.pt/
- Suggested ids to kill: svc-cuf

### healthcare — Lusíadas Saúde
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "Lusíadas Saúde"
- Sample urls:
  - https://www.lusiadas.pt/
- Closest existing guide (below threshold): **finding-doctor** (score 0.08)
- Suggested ids to kill: svc-lusiadas

### healthcare — HPA Saúde — Алгарве
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "HPA Saúde — Алгарве"
- Sample urls:
  - https://www.grupohpa.com/
- Closest existing guide (below threshold): **finding-doctor** (score 0.07)
- Suggested ids to kill: svc-hpa

### daily_life — Fitness Hut — фитнес-клубы
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "Fitness Hut — фитнес-клубы"
- Sample urls:
  - https://www.fitnesshut.pt/
- Closest existing guide (below threshold): **gyms-fitness** (score 0.20)
- Suggested ids to kill: svc-fitnesshut

### daily_life — Holmes Place Portugal
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "Holmes Place Portugal"
- Sample urls:
  - https://www.holmesplace.pt/
- Closest existing guide (below threshold): **gyms-fitness** (score 0.09)
- Suggested ids to kill: svc-holmesplace

### daily_life — Phive Fitness
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "Phive Fitness"
- Sample urls:
  - https://www.phive.pt/
- Closest existing guide (below threshold): **gyms-fitness** (score 0.22)
- Suggested ids to kill: svc-phive

### daily_life — Solinca — фитнес
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "Solinca — фитнес"
- Sample urls:
  - https://www.solinca.pt/
- Closest existing guide (below threshold): **gyms-fitness** (score 0.11)
- Suggested ids to kill: svc-solinca

### work_business — Net-Empregos.com
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "Net-Empregos.com"
- Sample urls:
  - https://www.net-empregos.com/
- Closest existing guide (below threshold): **recibos-verdes** (score 0.11)
- Suggested ids to kill: svc-netempregos

### work_business — LinkedIn — вакансии Португалии
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "LinkedIn — вакансии Португалии"
- Sample urls:
  - https://www.linkedin.com/jobs/search/?location=Portugal
- Closest existing guide (below threshold): **recibos-verdes** (score 0.11)
- Suggested ids to kill: svc-linkedin

### work_business — Jobs.at — Португалия
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "Jobs.at — Португалия"
- Sample urls:
  - https://www.jobs.pt/
- Closest existing guide (below threshold): **recibos-verdes** (score 0.13)
- Suggested ids to kill: svc-jobs-at-portugal

### food_leisure — Time Out Market — фуд-холл
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "Time Out Market — фуд-холл"
- Sample urls:
  - https://www.timeoutmarket.com/lisboa/
- Closest existing guide (below threshold): **markets-mercados** (score 0.30)
- Suggested ids to kill: svc-timeoutmarket

### travel_portugal — VisitPortugal — официальный туризм
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "VisitPortugal — официальный туризм"
- Sample urls:
  - https://www.visitportugal.com/
- Closest existing guide (below threshold): **lisbon-top-sights** (score 0.08)
- Suggested ids to kill: svc-visitportugal

### travel_portugal — VisitLisboa — официальный
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "VisitLisboa — официальный"
- Sample urls:
  - https://www.visitlisboa.com/
- Closest existing guide (below threshold): **lisbon-top-sights** (score 0.15)
- Suggested ids to kill: svc-visitlisboa

### travel_portugal — Visit Porto
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "Visit Porto"
- Sample urls:
  - https://visitporto.travel/
- Closest existing guide (below threshold): **porto-top-sights** (score 0.17)
- Suggested ids to kill: svc-visitporto

### travel_portugal — Visit Algarve
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "Visit Algarve"
- Sample urls:
  - https://www.visitalgarve.pt/
- Closest existing guide (below threshold): **algarve-living** (score 0.10)
- Suggested ids to kill: svc-visitalgarve

### travel_portugal — Visit Madeira
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "Visit Madeira"
- Sample urls:
  - https://www.visitmadeira.com/
- Closest existing guide (below threshold): **madeira-island** (score 0.10)
- Suggested ids to kill: svc-visitmadeira

### travel_portugal — Visit Azores
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "Visit Azores"
- Sample urls:
  - https://www.visitazores.com/
- Closest existing guide (below threshold): **azores-islands** (score 0.11)
- Suggested ids to kill: svc-visitazores

### food_leisure — TheFork — бронь ресторанов
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "TheFork — бронь ресторанов"
- Sample urls:
  - https://www.thefork.pt/
- Suggested ids to kill: svc-thefork

### food_leisure — Zomato Portugal
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "Zomato Portugal"
- Sample urls:
  - https://www.zomato.com/portugal
- Suggested ids to kill: svc-zomato-pt

### taxes — Faturas.pt — электронные чеки для IRS вычетов
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "Faturas.pt — электронные чеки для IRS вычетов"
- Sample urls:
  - https://faturas.portaldasfinancas.gov.pt/
- Closest existing guide (below threshold): **irs-filing** (score 0.08)
- Suggested ids to kill: svc-faturas-gov

### travel_portugal — TripAdvisor Portugal
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "TripAdvisor Portugal"
- Sample urls:
  - https://www.tripadvisor.pt/
- Closest existing guide (below threshold): **cp-trains** (score 0.09)
- Suggested ids to kill: svc-tripadvisor-pt

### travel_portugal — GetYourGuide — экскурсии
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "GetYourGuide — экскурсии"
- Sample urls:
  - https://www.getyourguide.pt/
- Suggested ids to kill: svc-getyourguide

### digital_gov — ePortugal — Espaços Cidadão (карта)
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "ePortugal — Espaços Cidadão (карта)"
- Sample urls:
  - https://eportugal.gov.pt/espacos
- Closest existing guide (below threshold): **espaco-cidadao** (score 0.15)
- Suggested ids to kill: svc-espaco-cidadao

### digital_gov — Chave Móvel Digital (autenticação)
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "Chave Móvel Digital (autenticação)"
- Sample urls:
  - https://www.autenticacao.gov.pt/
- Closest existing guide (below threshold): **chave-movel-digital** (score 0.33)
- Suggested ids to kill: svc-chavemovel

### residence_permit — AIMA Portal de Renovações
- Catalog entries in cluster: 1 (sources: services.ru.json)
- Member titles: "AIMA Portal de Renovações"
- Sample urls:
  - https://portal-renovacoes.aima.gov.pt/
- Closest existing guide (below threshold): **aima-online-2026** (score 0.20)
- Suggested ids to kill: svc-aima-portal

## Covered topics (catalog redundant — deep guide already exists)

- **aima-online-2026** covers: "Продление ВНЖ через AIMA"; "Продление ВНЖ в AIMA"; "Продление ВНЖ — гайд" — can drop aimasef-131, pp-2044, pp-2105
- **reagrupamento-familiar** covers: "Воссоединение семьи — ст. 98.2" — can drop aimasef-162
- **sns-utente** covers: "Получение номера SNS или Utente" — can drop pp-23
- **creche-kindergarten** covers: "Как устроить ребёнка в детский сад" — can drop pp-164
- **abono-de-familia** covers: "Пособие на детей (abono de família)" — can drop pp-4556
- **ctt-post** covers: "CTT — почта" — can drop svc-ctt
