export default {
  editorialVoice: 'hackportugal',
  id: 'evora-alentejo',
  categoryId: 'travel_portugal',
  title: 'Эвора и Алентежу — белые городки и винодельни',
  tldr: 'Эвора (ЮНЕСКО) — главный город Алентежу, 1,5 ч от Лиссабона. Часовня из костей (Capela dos Ossos), римский храм Дианы, собор. Вокруг — равнины Алентежу с белёными деревнями, оливковые рощи, виноградники, редкая аутентика. 1 день — Эвора, 2–3 дня — регион.',
  tags: ['evora', 'alentejo', 'unesco', 'экскурсия'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'arrival',
      title: 'Как добраться',
      content: [
        { kind: 'checklist', items: [
          '🚆 Lisboa Oriente → Évora: 1 ч 30 мин на поезде IC, € 12–18',
          '🚌 Rede Expressos из Sete Rios: 1,5 ч, € 12–15',
          '🚗 Авто по A6 — 1,5 ч. Для региона Алентежу авто практически обязательно',
          '🚐 Однодневный тур из Лиссабона: € 65–90 — не рекомендуется, слишком быстро'
        ]}
      ]
    },
    {
      id: 'evora',
      title: 'Эвора — центр ЮНЕСКО',
      content: [
        { kind: 'checklist', items: [
          '🏛️ Templo Romano (Templo de Diana) — римский храм I в., 14 коринфских колонн. Бесплатно',
          '💀 Capela dos Ossos — часовня, украшенная костями 5000 монахов, XVI в. Надпись над входом: «Nós ossos que aqui estamos, pelos vossos esperamos». € 6',
          '⛪ Sé de Évora — готический собор XIII в., сокровищница со Святым Саваном. € 5',
          '🏛️ Praça do Giraldo — главная площадь с мраморным фонтаном',
          '🕌 Igreja de São Francisco — при ней находится Capela dos Ossos',
          '🏛️ Museu de Évora — в епископском дворце, сакральное искусство',
          '🌊 Aqueduto da Água de Prata — акведук XVI в.',
          '🏰 Muralha — городские стены',
          '🎓 Universidade de Évora — иезуитский университет XVI в., старейший после Коимбры'
        ]}
      ]
    },
    {
      id: 'wine-region',
      title: 'Винодельни Алентежу',
      content: [
        { kind: 'paragraph', text: 'Алентежу — один из крупнейших винных регионов Португалии. Характер: полнотелые красные (Aragonês, Trincadeira, Alicante Bouschet), ароматные белые (Antão Vaz). Туры по quintas: € 20–60.' },
        { kind: 'checklist', items: [
          '🍷 Herdade do Esporão (Reguengos de Monsaraz) — большая винодельня с рестораном на холме. Туры и обеды',
          '🍷 Adega Mayor (Campo Maior) — архитектура Álvaro Siza Vieira',
          '🍷 Quinta do Mouro — семейная биодинамическая винодельня',
          '🍷 Cartuxa — историческая винодельня, португальская легенда',
          '🍷 Herdade do Rocim — эксперименты с амфорами'
        ]}
      ]
    },
    {
      id: 'nearby-villages',
      title: 'Белёные городки Алентежу',
      content: [
        { kind: 'substeps', items: [
          { id: 'v1', title: 'Monsaraz (50 км от Эворы)', content: [
            { kind: 'paragraph', text: 'Средневековый городок на холме, вид на озеро Alqueva (искусственное, крупнейшее в Европе). Замок, белёные узкие улицы. 1–2 часа.' }
          ]},
          { id: 'v2', title: 'Marvão (130 км)', content: [
            { kind: 'paragraph', text: 'Горный городок у испанской границы, замок, виды на Serra de São Mamede. Один из самых атмосферных в Португалии.' }
          ]},
          { id: 'v3', title: 'Elvas (95 км от Эворы)', content: [
            { kind: 'paragraph', text: 'ЮНЕСКО — крупнейший в мире сохранившийся комплекс бастионной фортификации. Акведук Amoreira, крепость.' }
          ]},
          { id: 'v4', title: 'Vila Viçosa', content: [
            { kind: 'paragraph', text: 'Мрамор повсюду, дворец герцогов Браганса (бывшая королевская резиденция).' }
          ]},
          { id: 'v5', title: 'Estremoz', content: [
            { kind: 'paragraph', text: 'Субботняя ярмарка с антиквариатом, замок с отелем pousada.' }
          ]},
          { id: 'v6', title: 'Mértola (180 км — глубокий юг)', content: [
            { kind: 'paragraph', text: 'Бывшая арабская столица, бывшая мечеть-церковь, маврская архитектура.' }
          ]}
        ]}
      ]
    },
    {
      id: 'food',
      title: 'Кухня Алентежу',
      content: [
        { kind: 'checklist', items: [
          '🐷 Porco preto — чёрная иберийская свинина',
          '🥣 Açorda alentejana — хлебный суп с чесноком и кинзой',
          '🍲 Migas — жареный хлеб с мясом',
          '🐑 Ensopado de borrego — тушёный ягнёнок',
          '🍄 Carne de porco à alentejana — свинина с моллюсками',
          '🍮 Sericaia com ameixa de Elvas — сладкая запеканка с сушёной сливой',
          '🍷 Vinho da talha — вино, выдержанное в амфорах, тысячелетняя традиция'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Советы',
      content: [
        { kind: 'checklist', items: [
          '🗓️ Лучшие сезоны: апрель-май (цветение), сентябрь-октябрь (урожай, мягкий климат)',
          '🔥 Летом +35–40°C — жарко. Планируйте осмотр утром и вечером',
          '🏨 Pousadas — сеть отелей в исторических зданиях (монастыри, крепости). Pousada de Évora, Pousada de Estremoz, Pousada de Crato',
          '🚗 Авто обязательно для исследования региона',
          '🎫 Évora Card: € 15 (3 дня) — музеи + транспорт со скидкой',
          '💶 Цены ниже, чем в Лиссабоне/Порту, — пляжи и регион недооценены',
          '🌻 Маршрут: Évora → Monsaraz → Marvão (2–3 дня)'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Turismo do Alentejo — официальный сайт', url: 'https://www.visitalentejo.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Câmara Municipal de Évora — туристическая информация', url: 'https://www.cm-evora.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Turismo de Portugal — Alentejo', url: 'https://www.visitportugal.com/pt-pt/destinos/alentejo', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}