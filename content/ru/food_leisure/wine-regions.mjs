export default {
  editorialVoice: 'hackportugal',
  id: 'wine-regions',
  categoryId: 'food_leisure',
  title: 'Вина Португалии — регионы и что покупать',
  tldr: 'Португалия — один из крупнейших производителей вина в ЕС, обычно около 5-го места по объёму. Удобно ориентироваться по 14 винным регионам; DOC/DO/DOP — это защищённые наименования внутри регионов. Культовое: портвейн (креплёное вино из Дору), Vinho Verde (молодое вино с севера), Alentejo (насыщенное красное), Douro DOC, Madeira, Bairrada. В супермаркетах есть отличные недорогие вина за 3–8 € за бутылку.',
  tags: ['вино', 'портвейн', 'Дору', 'Алентежу'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'regions',
      title: '14 винных регионов Португалии',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: 'Север', content: [
            { kind: 'checklist', items: [
              'Vinho Verde — молодое, лёгкое, для лета (Casal Garcia — классика)',
              'Porto e Douro — регион, откуда происходят Port/Porto и некреплёные Douro DOC; для красных Douro tinto: Duorum, Quinta do Crasto и др.',
              'Trás-os-Montes — приграничье с Испанией, мощные красные вина'
            ]}
          ]},
          { id: 'r2', title: 'Центр', content: [
            { kind: 'checklist', items: [
              'Bairrada — игристое + красные вина из сорта Baga',
              'Dão e Lafões — элегантные красные, «португальская Бургундия»',
              'Távora-Varosa — игристые вина, в холмах между Дору и Дау',
              'Beira Interior — горные вина, менее известные, но качественные',
              'Lisboa — вокруг столицы, доступные цены, растущее качество',
              'Tejo — река Тежу, доступные вина'
            ]}
          ]},
          { id: 'r3', title: 'Юг', content: [
            { kind: 'checklist', items: [
              'Alentejo — жаркий юг, полнотелые красные вина (Herdade do Esporão)',
              'Península de Setúbal — Moscatel de Setúbal/Moscatel Roxo как креплёные сладкие вина; Palmela и сухие красные/белые',
              'Algarve — небольшой, но интересный регион'
            ]}
          ]},
          { id: 'r4', title: 'Острова', content: [
            { kind: 'checklist', items: [
              'Madeira — креплёное вино, уникальный процесс выдержки в жаре',
              'Açores — вулканические вина на базальте (Pico); виноградники острова Пику входят в список Всемирного наследия ЮНЕСКО (Paisagem da Cultura da Vinha da Ilha do Pico)'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'port',
      title: 'Портвейн — что нужно понимать',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: 'Ruby', content: [
            { kind: 'paragraph', text: 'Молодое (2–3 года), фруктовое, доступное. Хороший вариант для начала.' }
          ]},
          { id: 'p2', title: 'Tawny', content: [
            { kind: 'paragraph', text: 'Выдерживается в дереве; бывает базовый/Reserve и с указанием возраста 10/20/30/40/50 years old. Возраст на этикетке — категория стиля и среднего характера купажа.' }
          ]},
          { id: 'p3', title: 'Vintage', content: [
            { kind: 'paragraph', text: 'Из одного особо удачного года, выдержка в бутылке. Дорого, культово. Только в «декларированные» годы.' }
          ]},
          { id: 'p4', title: 'LBV (Late Bottled Vintage)', content: [
            { kind: 'paragraph', text: 'Доступная альтернатива Vintage. Из одного года, 4–6 лет в бочке.' }
          ]},
          { id: 'p5', title: 'White Port', content: [
            { kind: 'paragraph', text: 'Белый портвейн, часто с тоником = коктейль «Portonic».' }
          ]}
        ]},
        { kind: 'paragraph', text: 'Известные производители: Taylor\'s, Graham\'s, Croft, Niepoort, Sandeman, Ramos Pinto. Погреба в Vila Nova de Gaia — экскурсии с дегустацией за 15–30 €.' }
      ]
    },
    {
      id: 'buying',
      title: 'Где покупать',
      content: [
        { kind: 'checklist', items: [
          'Супермаркет — за 3–8 € хорошее, за 10–20 € очень хорошее',
          'Garrafeira (винный магазин) — консультация, более широкий выбор',
          'Напрямую у производителя — туры в quintas в Douro и Alentejo, покупка на месте',
          'Онлайн: Garrafeira Nacional, Wine With Spirit',
          'Аэропорт — не всегда выгоднее, цены сравнимы с Lidl',
          'Lidl часто хорош для бюджетных вин и акционных подборок (серия Deluxe, Cimarosa и др.)'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Советы для жителей',
      content: [
        { kind: 'checklist', items: [
          'Вино из продуктовых магазинов в Португалии очень хорошее — не ищите итальянское/французское за базовые 5 €',
          'Массовые Vinho Verde часто лёгкие, свежие и слегка искристые; но регион также делает серьёзные тихие Alvarinho/Loureiro',
          'Игристое Bairrada — более дешёвая альтернатива Prosecco',
          'В ресторане — Vinho da Casa (домашнее вино) часто достойное, 3–5 € за 0,5 л',
          'Рестораны добавляют 100–200% наценки на бутылки — думайте до заказа',
          'Обучение: дегустации в Lisboa и Porto (Ultimate Wine Experience, Bacalhau), 25–60 €'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Wines of Portugal — официальный', url: 'https://www.winesofportugal.com/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IVDP — Instituto dos Vinhos do Douro e Porto', url: 'https://www.ivdp.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Turismo de Portugal — Wine tourism', url: 'https://www.visitportugal.com/pt-pt/experiencias/gastronomia-e-vinhos', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}