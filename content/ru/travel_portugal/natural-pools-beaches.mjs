export default {
  editorialVoice: 'hackportugal',
  id: 'natural-pools-beaches',
  categoryId: 'travel_portugal',
  title: 'Природные бассейны и лучшие пляжи Португалии',
  tldr: 'В Португалии более 850 пляжей и множество piscinas naturais — природных бассейнов в скалах у океана. Топ: Azenhas do Mar (Sintra), Cabo Mondego (Figueira), Nossa Senhora da Guia (Cascais), пещерные пляжи Alentejo (Zambujeira)\.\n\nГолубые флаги 2025: более 370 пляжей. Бесплатные муниципальные бассейны есть в большинстве Junta. Самые тёплые: Algarve (22-24°C летом), Madeira (21-23°C круглый год)\.\n\nХолоднее: северное атлантическое побережье (17-20°C).',
  tags: ['пляжи', 'бассейны', 'природные бассейны', 'лето'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'piscinas-naturais',
      title: '🌊 Природные бассейны в скалах',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: '🏝️ Лучшие возле Лиссабона', content: [
            { kind: 'checklist', items: [
              'Azenhas do Mar (Sintra) — живописный бассейн под деревней, ресторан наверху. Бесплатный вход, парковка платная',
              'Praia do Magoito — скорее пляж с зоной природных бассейнов',
              'Praia dos Coxos (Ericeira) — пляж для сёрфинга с зонами бассейнов в скалах',
              'Praia dos Pescadores (Ericeira) — защищённая бухта с piscinas',
              'Nossa Senhora da Guia (Cascais) — маленький приливный бассейн, тихо'
            ]}
          ]},
          { id: 'p2', title: '🏖️ Север', content: [
            { kind: 'checklist', items: [
              'Viana do Castelo — Piscinas Praia do Carreço — дизайн архитектора Távora',
              'Matosinhos (Porto) — Piscinas de Leça — архитектура Siza Vieira, вход € 2-5',
              'Praia da Memória — бесплатные бассейны в скалах',
              'Cabo Mondego (Figueira da Foz) — пещеры под утёсами'
            ]}
          ]},
          { id: 'p3', title: '🌴 Alentejo / Algarve', content: [
            { kind: 'checklist', items: [
              'Zambujeira do Mar (Alentejo) — piscinas в скалах к северу от пляжа',
              'Praia da Oura (Algarve Albufeira) — приливные бассейны во время отлива',
              'Praia dos Estudantes (Lagos) — скальная арка и природный бассейн',
              'Praia da Marinha (Carvoeiro) — один из красивейших пляжей мира'
            ]}
          ]},
          { id: 'p4', title: '🏔️ Azores и Madeira', content: [
            { kind: 'checklist', items: [
              'Porto Moniz (Madeira) — знаменитые вулканические piscinas, вход € 2',
              'Seixal, Madeira — естественные бассейны у пляжей с чёрным песком',
              'Biscoitos (Terceira, Azores) — вулканические piscinas',
              'Mosteiros (São Miguel) — бассейны в скалах с видом на закат',
              'Varadouro (Faial) — тихие природные бассейны'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'blue-flag-2025',
      title: '🔵 Голубой флаг — топ 2025',
      content: [
        { kind: 'paragraph', text: 'Bandeira Azul — международный экологический сертификат ФЕЕ. В 2025 — более 370 пляжей и марин в Португалии. Критерии: чистая вода, санитарная инфраструктура, безопасность, экологическое образование.' },
        { kind: 'substeps', items: [
          { id: 'b1', title: 'Топ-пляжи по регионам (2025)', content: [
            { kind: 'checklist', items: [
              '🏖️ Комфорт + семья: Praia de Carcavelos (Lisbon), Praia da Falésia (Algarve), Praia de Tamariz (Estoril)',
              '🏄 Сёрфинг: Supertubos (Peniche), Nazaré, Baleal, Praia do Guincho',
              '🌊 Дикие и красивые: Praia das Maçãs, Praia Grande do Guincho, Praia de Odeceixe (Alentejo)',
              '💎 Для Instagram: Praia da Marinha, Benagil (грот — лодочная экскурсия), Praia do Camilo (Lagos)',
              '🐚 Длинные песчаные: Comporta (Setúbal), Costa Nova (Aveiro), Praia de Melides (Alentejo)',
              '🌲 Природа / заповедник: Zambujeira do Mar, пляжи Odemira (природный парк юго-западного Alentejo)'
            ]}
          ]},
          { id: 'b2', title: 'Температура воды', content: [
            { kind: 'checklist', items: [
              'Algarve: 17°C (зима) — 22-24°C (июль-август)',
              'Lisbon / Cascais: 15°C (зима) — 19-21°C (лето)',
              'Побережье Porto: 13°C (зима) — 17-19°C (лето) — холоднее',
              'Madeira: 19-23°C круглый год (самая тёплая вода)',
              'Azores: 17-23°C',
              '💡 Для комфортного купания без гидрокостюма: июль-сентябрь на юге, апрель-октябрь на Madeira'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'municipal',
      title: '🏊 Бесплатные муниципальные бассейны',
      content: [
        { kind: 'paragraph', text: 'Многие Câmara Municipal управляют общественными бассейнами — открытыми летом и крытыми круглый год.' },
        { kind: 'checklist', items: [
          '💰 Цены: вход € 3-6 для резидентов; € 5-10 для нерезидентов; абонемент € 15-30/мес',
          '🏊 Бесплатно для детей до 12 (в большинстве)',
          '👵 Скидки: пенсионеры, многодетные семьи, люди с инвалидностью',
          '📅 Часы: обычно 7:00-22:00 будни, 9:00-21:00 выходные',
          '🧴 Шапочка обязательна в крытых бассейнах',
          '👙 Для нерезидентов: туристы могут пользоваться, цены на € 2-5 дороже',
          '📍 Поиск: ваша Câmara → «Piscinas Municipais»',
          '🗓️ Лучшие в Лиссабоне: Piscinas Olivais, Piscinas Arena, Piscina Moscavide; Порту: Piscina do Lima, Piscina do Fluvial'
        ]}
      ]
    },
    {
      id: 'safety',
      title: '⚠️ Безопасность',
      content: [
        { kind: 'checklist', items: [
          '🚩 Флаги: зелёный (безопасно), жёлтый (осторожно), красный (запрет), шашечки (нет спасателя)',
          '🌊 Отбойные течения (correntes marítimas): серьёзная опасность, особенно на юго-западе — Guincho, Supertubos',
          '🦈 Акулы: в PT не зафиксировано случаев нападения на пляжах',
          '🌊 Штормы: осень-зима — большие волны, не купаться',
          '⛱️ Оборудованные зоны (обычные): платные, лежак + зонтик € 15-25/день',
          '🏖️ Солнце: летнее солнце в PT очень сильное — SPF 50 обязательно с 11:00 до 17:00',
          '💧 Медузы (alforreca): иногда в сезон, спасатель уведомит',
          '🚫 Нудистские пляжи: легальны на 21 пляже — знак «praia naturista». Не путать с обычными',
          '🐕 Собаки: запрет 15 июня - 30 сентября на всех пляжах с Голубым флагом; есть отдельные пляжи для собак'
        ]}
      ]
    },
    {
      id: 'hidden-gems',
      title: '💎 Скрытые жемчужины (меньше людей)',
      content: [
        { kind: 'checklist', items: [
          'Praia de Faro, Ilha do Farol — на острове, паром из Olhão, меньше туристов',
          'Praia do Carvalhal (Comporta-Melides) — 20 км пустого песка, часто безлюдно',
          'Praia do Arrifana (Aljezur, Alentejo) — место для сёрфинга с красивой бухтой',
          'Praia da Ursa (Sintra) — рядом с Cabo da Roca, 10 мин спуск пешком — награда — одинокие скальные столбы',
          'Praia da Adraga — следующий пляж за Ursa, впечатляющие скалы',
          'Praia da Aguda (Gaia) — 20 мин от Порту, местные предпочитают его туристическому Matosinhos',
          'Praia de Carneiro (Porto) — в самом городе, но тихий',
          'Ilha do Pessegueiro (Porto Covo) — приливный остров с руинами крепости'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'APA — Água Balnear (качество воды)', url: 'https://www.apambiente.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Visit Portugal — Praias', url: 'https://www.visitportugal.com/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ABAE — Bandeira Azul Portugal', url: 'https://bandeiraazul.abae.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 365
}