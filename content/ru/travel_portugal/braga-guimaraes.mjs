export default {
  editorialVoice: 'hackportugal',
  id: 'braga-guimaraes',
  categoryId: 'travel_portugal',
  title: 'Брага и Гимарайнш — «колыбель Португалии»',
  tldr: 'Брага — «португальский Рим», религиозная столица: собор XI в. и знаменитый Bom Jesus do Monte (UNESCO).\n\nГимарайнш (UNESCO) — место, где в 1128 г. родилась Португалия, замок первого короля Афонсу Энрикеша. Из Порту — 1 час на поезде. Оба города можно осмотреть за день, базируясь в Порту.',
  tags: ['braga', 'guimaraes', 'север', 'unesco'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'arrival',
      title: 'Как добраться',
      content: [
        { kind: 'checklist', items: [
          '🚆 Porto-Campanhã → Braga: 1 ч на поезде IC/AP, € 7–12',
          '🚆 Porto-Campanhã → Guimarães: 50 мин на городском поезде, € 4,70',
          '🚌 Между Braga и Guimarães прямого поезда CP нет (только с пересадкой в Lousado, ~1,5 ч). Лучше автобус ~40–50 мин (Rede Expressos / GetBus, ~€ 5–7) или машина ~30 мин (A3+A11)',
          '🚌 Rede Expressos: Porto-Braga 45 мин, € 7; Porto-Guimarães 1 ч, € 7',
          '🚗 Машина: Porto-Braga 50 мин по A3, Porto-Guimarães 50 мин по A7'
        ]}
      ]
    },
    {
      id: 'braga',
      title: 'Брага — «португальский Рим»',
      content: [
        { kind: 'paragraph', text: 'Древнейший город страны (римская Bracara Augusta, основана в 16 г. до н.э.). Архиепископская столица, 35+ церквей. Религиозные праздники (Semana Santa, шествия) — лучший сезон для визита.' },
        { kind: 'checklist', items: [
          '⛪ Sé de Braga — древнейший кафедральный собор страны (XI в.), сочетание романского стиля, готики и мануэлино. € 5',
          '⛪ Bom Jesus do Monte (UNESCO) — барочное святилище на холме в 5 км от центра. Легендарная «лестница 5 чувств», фуникулёр 1882 года на водном противовесе. Фуникулёр — € 3',
          '⛪ Santuário do Sameiro — второй холм-святилище рядом с Bom Jesus',
          '🏛️ Palácio do Raio — барочный дворец с фасадом из азулежу',
          '🏛️ Capela dos Coimbras (1525) — готическая часовня',
          '🏛️ Museu dos Biscainhos — дворец XVII в. с садом',
          '🏛️ Igreja da Misericórdia — ренессанс',
          '🌳 Parque de Santa Bárbara — центральный парк с фонтанами',
          '🎪 Semana Santa Braga — Страстная неделя с крупнейшими в Иберии процессиями'
        ]}
      ]
    },
    {
      id: 'guimaraes',
      title: 'Гимарайнш — UNESCO',
      content: [
        { kind: 'paragraph', text: 'Историческая столица Португалии до 1139. На стене надпись «Aqui nasceu Portugal» («Здесь родилась Португалия»). Компактный исторический центр — UNESCO.' },
        { kind: 'checklist', items: [
          '🏰 Castelo de Guimarães (X в.) — замок, где родился Афонсу Энрикеш, первый король. € 5',
          '🏛️ Paço dos Duques de Bragança (XV в.) — замок-дворец в бургундском стиле, резиденция герцогов. € 5 (на время реставрации, обычно € 10)',
          '⛪ Igreja de São Miguel do Castelo — романская часовня XII в., место крещения Афонсу',
          '🏛️ Largo da Oliveira — главная площадь со старинной оливой и готическим памятником',
          '⛪ Igreja da Nossa Senhora da Oliveira — готический монастырь-церковь',
          '🏰 Muralha antiga — средневековые стены',
          '🚡 Teleférico da Penha — канатная дорога на гору Пенья, виды. € 5 туда-обратно',
          '🏛️ Museu Alberto Sampaio — средневековое искусство в монастырских галереях'
        ]}
      ]
    },
    {
      id: 'combined-itinerary',
      title: 'Маршрут на день (Брага + Гимарайнш)',
      content: [
        { kind: 'checklist', items: [
          '09:00 — поезд Porto-Campanhã → Braga (1 ч)',
          '10:00–12:00 — центр Braga: Sé, Palácio do Raio, Largo do Paço',
          '12:00–14:00 — Bom Jesus do Monte (автобус 2 или такси € 10). Обед в кафе у фуникулёра',
          '14:00 — автобус Braga → Guimarães (~45 мин; прямого поезда нет — только с пересадкой в Lousado, ~1,5 ч)',
          '15:00–18:00 — замок, дворец герцогов, исторический центр, Largo da Oliveira',
          '18:00–19:00 — Teleférico da Penha на закате (по желанию)',
          '19:30 — поезд в Porto (50 мин)'
        ]}
      ]
    },
    {
      id: 'food-regional',
      title: 'Северная кухня',
      content: [
        { kind: 'checklist', items: [
          '🍖 Cabidela — курица в кровяном соусе (региональное блюдо)',
          '🐟 Bacalhau à Braga — треска с картофельными крокетами',
          '🥟 Pudim do Abade de Priscos — знаменитый десерт Браги со свиным салом',
          '🥖 Bola de Berlim — пончик с заварным кремом; в Браге готовят особенный',
          '🍷 Vinho Verde — родной регион: лёгкие белые вина',
          '🍴 Restaurante Inácio (Braga) — традиционная кухня с 1954',
          '🍴 Histórico by Papaboa (Guimarães) — в отреставрированном дворце XIII в.'
        ]}
      ]
    },
    {
      id: 'events',
      title: 'Ключевые события',
      content: [
        { kind: 'checklist', items: [
          '✝️ Semana Santa Braga (март-апрель) — крупнейшие процессии Страстной недели',
          '🎪 São João de Braga (23-24 июня) — фестиваль святого Иоанна',
          '🎭 Guimarães Capital Europeia da Cultura 2012 — выставочные пространства, оставшиеся со статуса Культурной столицы Европы',
          '🎄 Рождество — Гимарайнш превращается в «город света»',
          '🎺 Noite Branca de Braga (сентябрь) — белая ночь искусств'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Visit Braga — муниципальный туризм', url: 'https://www.visitbraga.travel/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Visit Guimarães', url: 'https://www.cm-guimaraes.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Turismo do Porto e Norte', url: 'https://www.portoenorte.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}