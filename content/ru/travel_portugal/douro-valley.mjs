export default {
  editorialVoice: 'hackportugal',
  id: 'douro-valley',
  categoryId: 'travel_portugal',
  title: 'Долина Дору — винодельческий регион ЮНЕСКО',
  tldr: 'Долина Дору (Alto Douro Vinhateiro, ЮНЕСКО с 2001) — старейший в мире винодельческий регион с официально установленными границами (1756). Террасные виноградники вдоль реки, портвейн, живописные деревни. Из Порту: поезд до Régua/Pinhão (2-2.5ч), авто, речные круизы, вертолёт. Идеально 2-3 дня.',
  tags: ['douro', 'port', 'вино', 'unesco'],
  estimatedReadMinutes: 9,
  steps: [
    {
      id: 'history-geography',
      title: 'О регионе',
      content: [
        { kind: 'paragraph', text: 'Дору — река, впадающая в Атлантику в Порту. Выше по течению — регион Alto Douro (250 км от Испании), где выращивают виноград для портвейна и столовых вин. Первая в мире защищённая региональная номенклатура (1756, маркиз Помбал).' },
        { kind: 'paragraph', text: 'Террасные виноградники (socalcos) — рукотворный пейзаж, занесённый в список ЮНЕСКО. Склоны до 60°. Сорта винограда: Touriga Nacional, Touriga Franca, Tinta Roriz.' }
      ]
    },
    {
      id: 'how-to-visit',
      title: 'Как посетить',
      content: [
        { kind: 'substeps', items: [
          { id: 'v1', title: 'Поезд (дешевле, романтично)', content: [
            { kind: 'paragraph', text: 'Porto-São Bento → Peso da Régua (2ч, € 11) → Pinhão (40 мин, € 4). Поезд идёт по берегу реки, один из самых живописных в Европе. Сидите по правой стороне (если из Порту).' }
          ]},
          { id: 'v2', title: 'Авто (гибко)', content: [
            { kind: 'paragraph', text: 'От Порту 1.5-2 ч до Régua. Дальше до Pinhão, Favaios, São João da Pesqueira — всё по живописным дорогам. Рекомендуется арендовать на 2 дня.' }
          ]},
          { id: 'v3', title: 'Речной круиз', content: [
            { kind: 'paragraph', text: 'Из Порту (Cais da Estiva / Gaia) — однодневные (до Régua, € 60-80) или многодневные (3-8 дней по реке) с CroisiEurope, Douro Azul и др. Включают обед, иногда ужин и дегустацию.' }
          ]},
          { id: 'v4', title: 'Вертолёт или авто-тур', content: [
            { kind: 'paragraph', text: 'Вертолётные туры от Viseu/Régua — 20-минутный полёт от € 150. Авто-туры из Порту — € 90-150 на человека с гидом и визитом в 2-3 винодельческие усадьбы.' }
          ]}
        ]}
      ]
    },
    {
      id: 'key-stops',
      title: 'Ключевые остановки',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: 'Peso da Régua', content: [
            { kind: 'paragraph', text: 'Главный «вход» в Дору. Museu do Douro (история региона, € 7,50). Точка отправления круизов. Много винодельческих усадеб поблизости.' }
          ]},
          { id: 's2', title: 'Pinhão', content: [
            { kind: 'paragraph', text: 'Сердце региона. Вокзал с изразцами азулежу — легендарный. Панорамные виды Casal de Loivos (10 мин авто). Множество винодельческих усадеб в радиусе 10 км.' }
          ]},
          { id: 's3', title: 'Provesende', content: [
            { kind: 'paragraph', text: 'Архитектурная жемчужина — хорошо сохранённая деревня XVIII в. с barquinho (традиционный хлеб), фонтанами и гербовыми фасадами.' }
          ]},
          { id: 's4', title: 'São João da Pesqueira', content: [
            { kind: 'paragraph', text: 'Верхняя часть, менее туристичная. Старые винодельческие усадьбы, церкви, виды.' }
          ]},
          { id: 's5', title: 'Favaios', content: [
            { kind: 'paragraph', text: 'Moscatel do Douro (сладкое вино), знаменитое с XVII в. Деревня среди виноградников. Посетите Adega Cooperativa de Favaios.' }
          ]},
          { id: 's6', title: 'Barragem do Carrapatelo', content: [
            { kind: 'paragraph', text: 'Дамба с навигационным шлюзом 35 м — самый высокий в Европе. Проходят круизные суда.' }
          ]}
        ]}
      ]
    },
    {
      id: 'quintas',
      title: 'Где дегустировать',
      content: [
        { kind: 'paragraph', text: 'Большинство крупных винодельческих усадеб открыты для туристов: есть туры и дегустации (€ 15-40 на человека). В сезон лучше бронировать за 1-2 недели. У многих есть рестораны и гостевые дома.' },
        { kind: 'checklist', items: [
          '🍷 Quinta do Seixo (Sandeman) — модернистская архитектура, панорама',
          '🍷 Quinta da Pacheca — историческая, ночёвка в винных бочках',
          '🍷 Quinta do Crasto — великолепный бассейн-визитка, премиальные туры',
          '🍷 Quinta Nova de Nossa Senhora do Carmo — отель Relais & Châteaux',
          '🍷 Quinta do Vallado — современный дизайн от Francisco Olazabal',
          '🍷 Quinta do Panascal (Fonseca) — семейная, классика',
          '🍷 Quinta de la Rosa — англо-португальская семья, Relais & Châteaux'
        ]}
      ]
    },
    {
      id: 'activities',
      title: 'Что делать кроме вина',
      content: [
        { kind: 'checklist', items: [
          '🚤 Лодка rabelo — традиционное судно для перевозки бочек, теперь используется для круизов',
          '🛶 Каяк по Дору — в тихих заводях',
          '🚴 Велосипед — горные тропы и деревенские дороги',
          '🚶 Пешие маршруты — Miradouro de São Leonardo de Galafura, Fonte da Aldeia',
          '🎭 Miradouros — обзорные точки для закатов (Casal de Loivos, São Leonardo da Galafura, Sabrosa)',
          '🏩 Ночёвка в винодельческой усадьбе — уникальный опыт среди виноградников',
          '📷 Фото-тур на закате — сентябрь-октябрь, когда листья красно-оранжевые'
        ]}
      ]
    },
    {
      id: 'seasons',
      title: 'Когда ехать',
      content: [
        { kind: 'checklist', items: [
          '🌸 Апрель-май — цветение, +18-22°C, виноградники зелёные',
          '🌞 Июнь-август — жарко (+30-38°C в глубине), туристов много',
          '🍇 Сентябрь-октябрь — vindima (сбор винограда), самый красивый сезон, листья краснеют. Можно участвовать в сборе в некоторых винодельческих усадьбах',
          '🍷 Ноябрь-март — vinificação, туристов мало, приятные скидки',
          '❄️ Зима — снег редко, но бывает туман'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Советы',
      content: [
        { kind: 'checklist', items: [
          '🚆 Поезд — самый живописный способ первого знакомства',
          '🚗 Авто — для углубления в регион (2+ дня)',
          '🗣️ В винодельческих усадьбах обычно говорят на английском/португальском/иногда французском/испанском',
          '💶 Дегустация: € 15-25 базовая, € 40-60 премиальная',
          '🍽️ Обед в винодельческой усадьбе — обычно € 30-50, стоит того',
          '🎒 Прочная обувь — склоны крутые',
          '🧢 Шляпа и крем SPF — солнце жёсткое летом',
          '📱 Мобильная связь может быть слабой в долине',
          '🧳 Лимит багажа: 1 бутылка в ручной клади, остальное — сдавать в багаж'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'IVDP — Instituto dos Vinhos do Douro e Porto', url: 'https://www.ivdp.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Turismo do Porto e Norte — Douro', url: 'https://www.portoenorte.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'UNESCO — Alto Douro Wine Region', url: 'https://whc.unesco.org/en/list/1046/', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Wines of Portugal — регион Douro', url: 'https://www.winesofportugal.com/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}