export default {
  editorialVoice: 'hackportugal',
  id: 'wineries-quintas-visita',
  categoryId: 'food_leisure',
  title: 'Винные туры по quintas: Douro, Alentejo, Setúbal и Bairrada',
  tldr: 'В 2026 году визит на quinta с дегустацией обычно стоит 30–100 € на человека: базовый тур 60–90 минут с 2–4 винами — 20–45 €, премиум с портвейном, reserva или обедом — 60–150 €. Douro красивее всего, но требует планирования транспорта; Alentejo удобнее на машине; Setúbal подходит для короткой поездки из Лиссабона; Bairrada — для espumante и leitão. Бронируйте онлайн за 1–3 недели, особенно на май–октябрь.',
  tags: ['вино', 'quintas', 'douro', 'дегустации'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'regions',
      title: '1. Выберите регион под формат поездки',
      content: [
        { kind: 'paragraph', text: 'Португальская wine country поездка — это не только «попробовать вино». Обычно quinta даёт экскурсию по виноградникам или погребам, объясняет DOC/IGP, показывает lagares или barrel room и завершает дегустацией. Почти везде нужна предварительная бронь: случайно приехать можно, но свободного слота может не быть.' },
        { kind: 'checklist', items: [
          'Douro Valley — террасы, река, портвейн и сухие Douro DOC. Лучший выбор для первого «вау»-тура.',
          'Alentejo — большие herdades, ровные дороги, жара летом, плотные красные вина. Удобно на машине из Évora/Reguengos de Monsaraz.',
          'Setúbal — Moscatel de Setúbal, старая винная история, легко съездить из Лиссабона на полдня.',
          'Bairrada — espumante, Baga, гастрономия с leitão da Bairrada. Хорошо совмещается с Coimbra/Aveiro.',
          'Vinho Verde — отдельный северный регион; Aveleda находится в Penafiel и не относится к Bairrada, хотя часто попадает в туристические винные маршруты.',
          'Если не пьёте алкоголь, заранее спросите про non-drinker rate: часть quintas всё равно берёт полную цену за тур, часть делает скидку.'
        ] },
        { kind: 'warning', text: 'Не планируйте 4–5 дегустаций за день. Реалистичный лимит — 2 quintas, максимум 3 при частном водителе. В Douro переезды по серпантинам занимают больше времени, чем показывает карта.' }
      ]
    },
    {
      id: 'douro',
      title: '2. Douro: Quinta do Crasto, Quinta do Seixo и логистика',
      content: [
        { kind: 'paragraph', text: 'Douro Valley — объект ЮНЕСКО и самый фотогеничный винный регион Португалии. Основные базы для ночёвки: Peso da Régua, Pinhão, Lamego, Vila Real. Для вида на реку и террасы чаще выбирают район Pinhão.' },
        { kind: 'checklist', items: [
          'Quinta do Crasto — сильный вариант для premium-тура: виды, старые лозы, Douro DOC, иногда ограниченные дегустации. Бронировать заранее обязательно.',
          'Quinta do Seixo — известная quinta Sandeman у Pinhão: портвейн, панорама на Douro, более «туристически отлаженный» формат.',
          'Базовые туры в Douro обычно 30–50 €; расширенные дегустации с reserva/vintage port — 60–100 €+.',
          'Поезд Porto São Bento/Campanhã → Peso da Régua или Pinhão — живописно, но расписание ограничивает число визитов.',
          'Арендованная машина даёт свободу, но водитель не должен пить: полиция проверяет, штрафы за álcool ao volante высокие.',
          'Частный day tour из Porto часто стоит 90–180 € на человека в группе или 250–500 €+ за машину с водителем.',
          'Лучшие месяцы: апрель–июнь и сентябрь–октябрь. В августе жарко и много туристов; во время vindima часть quintas ограничивает слоты.'
        ] },
        { kind: 'paragraph', text: 'Практичный маршрут без спешки: ночь в Pinhão, утром Quinta do Seixo, обед у реки, после обеда Quinta do Crasto или другая quinta с видом. Если едете из Porto одним днём, выбирайте 1–2 визита, а не «всё Douro за день».' }
      ]
    },
    {
      id: 'south',
      title: '3. Alentejo и Setúbal: проще из Лиссабона',
      content: [
        { kind: 'paragraph', text: 'Alentejo и Setúbal удобны для экспатов из Лиссабона: меньше серпантинов, проще парковка, больше вариантов day trip. Но летом в Alentejo температура легко уходит за 35 °C, поэтому дегустации лучше ставить на утро.' },
        { kind: 'substeps', items: [
          {
            id: 'alentejo',
            title: 'Alentejo: Herdade do Esporão',
            content: [
              { kind: 'paragraph', text: 'Herdade do Esporão у Reguengos de Monsaraz — один из самых понятных вариантов для первого визита в Alentejo: винодельня, оливковое масло, ресторан, магазин, разные уровни дегустаций.' },
              { kind: 'checklist', items: [
                'Базовая дегустация обычно дешевле премиум-тура с reserva/private selection.',
                'Обед в ресторане бронируйте отдельно: места на выходные уходят заранее.',
                'Из Лиссабона на машине — примерно 2 часа; общественным транспортом неудобно.',
                'Хорошая связка: Évora + Monsaraz + Esporão, но лучше с ночёвкой.'
              ] }
            ]
          },
          {
            id: 'setubal',
            title: 'Setúbal: José Maria da Fonseca и Moscatel',
            content: [
              { kind: 'paragraph', text: 'José Maria da Fonseca в Azeitão — классика для Moscatel de Setúbal и один из самых удобных винных визитов из Лиссабона. Формат подходит даже тем, кто не хочет тратить весь день.' },
              { kind: 'checklist', items: [
                'Из Лиссабона можно ехать на машине, такси/TVDE или комбинировать поезд до Setúbal с местным транспортом.',
                'После дегустации удобно добавить queijo de Azeitão, Serra da Arrábida или пляжи Arrábida.',
                'Moscatel сладкий и креплёный: дегустация небольшая по объёму, но алкоголь ощутимый.',
                'На выходные бронируйте минимум за неделю, летом — раньше.'
              ] }
            ]
          }
        ] }
      ]
    },
    {
      id: 'bairrada-aveleda',
      title: '4. Bairrada, espumante и важная поправка про Aveleda',
      content: [
        { kind: 'paragraph', text: 'Bairrada находится между Coimbra и Aveiro. Это регион Baga, espumante и leitão da Bairrada. Если вы едете из Porto в сторону Coimbra или Aveiro, Bairrada легко встроить в маршрут на полдня.' },
        { kind: 'warning', text: 'Aveleda — известная quinta в Penafiel в регионе Vinho Verde, а не Bairrada. Если цель именно Bairrada, смотрите винодельни вокруг Anadia, Mealhada, Cantanhede и Curia. Если цель красивая quinta с садом и лёгкими белыми Vinho Verde — Aveleda отличный отдельный вариант.' },
        { kind: 'checklist', items: [
          'Для Bairrada ищите туры с espumante: регион силён в игристых винах по классическому методу.',
          'Сочетание «дегустация + leitão da Bairrada» — главный гастрономический сценарий.',
          'Из Porto на машине до Anadia/Mealhada — около 1–1,5 часа; из Coimbra — 25–40 минут.',
          'Aveleda из Porto — около 35–50 минут на машине; это удобнее как короткий north trip, а не как Bairrada-маршрут.',
          'В маленьких quintas английский тур бывает не каждый день — уточняйте язык при бронировании.'
        ] }
      ]
    },
    {
      id: 'booking',
      title: '5. Как бронировать и что проверить до оплаты',
      content: [
        { kind: 'paragraph', text: 'Самый надёжный путь — сайт самой quinta или e-mail. Маркетплейсы удобны, но у них выше комиссия и иногда хуже гибкость при переносе. Для популярных мест в Douro, Alentejo и Setúbal в высокий сезон бронируйте за 1–3 недели; на vindima и длинные выходные — за 3–6 недель.' },
        { kind: 'checklist', items: [
          'Дата, время и язык тура: Portuguese/English/French/Spanish.',
          'Что включено: только tasting, cellar visit, vineyard walk, museum, olive oil tasting, lunch.',
          'Сколько вин: 2, 3, 4 или premium flight; есть ли port/Moscatel/espumante.',
          'Длительность: базово 60–90 минут; с обедом 2–3 часа.',
          'Политика отмены: free cancellation за 24–72 часа или non-refundable.',
          'Доступность для детей: можно ли с ребёнком, коляской, подростками.',
          'Парковка и дорога: особенно важно в Douro, где подъезд к quinta может быть узким.',
          'Можно ли купить вино на месте и отправить delivery по Португалии/EU.',
          'Нужна ли предоплата картой; некоторые quintas принимают Multibanco/MB WAY только для португальских клиентов.'
        ] },
        { kind: 'warning', text: 'Португальский лимит алкоголя за рулём: обычный порог 0,5 g/l, для новых водителей и профессионалов — 0,2 g/l. После дегустации безопаснее иметь непьющего водителя, брать тур с трансфером или ночевать рядом.' }
      ]
    },
    {
      id: 'budget',
      title: '6. Бюджет и готовые сценарии на 2026',
      content: [
        { kind: 'paragraph', text: 'Цены сильно зависят от бренда, уровня вин и наличия еды. В 2026 году нормальный ориентир для качественного визита — 30–100 € на человека без транспорта. Всё, что включает обед, rare bottles или private guide, легко выходит за 100 €.' },
        { kind: 'checklist', items: [
          'Эконом: 1 quinta + простая дегустация — 20–35 € на человека, транспорт отдельно.',
          'Комфорт: 2 quintas за день + обед — 70–140 € на человека без ночёвки.',
          'Douro с ночёвкой: поезд/машина, 2 дегустации, ужин и отель — часто 180–350 € на человека за 2 дня.',
          'Из Лиссабона без машины: Setúbal/Azeitão с TVDE или малым туром — обычно дешевле, чем Douro.',
          'Подарочный формат: premium tasting или private tour — 80–150 €+ на человека.',
          'Покупка вина на месте не всегда дешевле супермаркета, но бывают эксклюзивные bottles и старые урожаи.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Базовая дегустация на quinta', amountEURMin: 20, amountEURMax: 45, note: 'Обычно 60–90 минут, 2–4 вина, без еды' },
    { label: 'Расширенная дегустация / premium flight', amountEURMin: 60, amountEURMax: 100, note: 'Reserva, port, Moscatel, espumante или редкие линейки' },
    { label: 'Тур с обедом', amountEURMin: 80, amountEURMax: 150, note: 'Цена зависит от ресторана и pairing; в известных herdades может быть выше' },
    { label: 'Групповой day tour из Porto в Douro', amountEURMin: 90, amountEURMax: 180, note: 'Обычно включает транспорт, 1–2 визита и иногда обед/круиз' },
    { label: 'Частный водитель/тур на день', amountEURMin: 250, amountEURMax: 500, note: 'За машину или малую группу; Douro и Alentejo дороже из-за расстояния' }
  ],
  sources: [
    { title: 'Instituto dos Vinhos do Douro e do Porto — официальная информация о Douro и Port', url: 'https://www.ivdp.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Douro Valley — туристический портал региона Douro', url: 'https://www.dourovalley.eu', kind: 'official', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'Herdade do Esporão — официальные визиты и дегустации', url: 'https://www.esporao.com/en/winetourism/herdade-do-esporao/', kind: 'company', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'José Maria da Fonseca — официальные wine tourism visits', url: 'https://www.jmf.pt/index.php?id=95', kind: 'company', language: 'en', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
