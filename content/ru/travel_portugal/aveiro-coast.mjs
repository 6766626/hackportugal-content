export default {
  editorialVoice: 'hackportugal',
  id: 'aveiro-coast',
  categoryId: 'travel_portugal',
  title: 'Авейру и Costa Nova — «португальская Венеция»',
  tldr: 'Авейру — приморский город с лагуной и каналами, где ходят расписные лодки moliceiros. Соседняя Costa Nova — рыбацкий посёлок с полосатыми домиками. Ovos moles — фирменный десерт. От Порту 35 мин на поезде, от Лиссабона 2–2,5 ч. Полдня-дня достаточно.',
  tags: ['aveiro', 'costa nova', 'экскурсия', 'центр'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'arrival',
      title: 'Как добраться',
      content: [
        { kind: 'checklist', items: [
          '🚆 Porto-Campanhã → Aveiro: 35 мин на Urbano или 28 мин на IC/AP, 3,50–13 €',
          '🚆 Lisboa Oriente → Aveiro: 2 ч–2 ч 30 мин на AP/IC, 20–30 €',
          '🚗 Авто: от Порту 1 ч по A1, от Лиссабона 2,5 ч по A1',
          '🚌 Rede Expressos / FlixBus — дольше, но дешевле'
        ]}
      ]
    },
    {
      id: 'aveiro',
      title: 'Главные места в Авейру',
      content: [
        { kind: 'checklist', items: [
          '🛶 Ria de Aveiro (лагуна) + прогулка на moliceiro — расписной лодке (исторически на них собирали водоросли для удобрения). 13–15 € с человека, 40–50 мин',
          '🏛️ Mosteiro de Jesus / Museu de Aveiro — готический монастырь XV в., гробница принцессы Santa Joana. 5 €',
          '🎭 Centro Cultural e de Congressos — современная архитектура',
          '🏛️ Старый железнодорожный вокзал — изразцы azulejo со сценами региона, бесплатно',
          '🎨 Модерн (Art Nouveau) — много зданий в этом стиле, например Casa do Major Pessoa (Museu de Arte Nova)',
          '⛪ Sé de Aveiro — кафедральный собор',
          '🎨 Fábrica Centro Ciência Viva — интерактивный научный центр для детей, 4 €',
          '🧂 Salinas de Aveiro — соляные поля, многовековая традиция. Можно купить flor de sal',
          '🥖 Кондитерские — Oficina do Doce (Rua Tenente Rezende) лучше всего подходит для ovos moles'
        ]}
      ]
    },
    {
      id: 'costa-nova',
      title: 'Costa Nova — полосатые домики',
      content: [
        { kind: 'paragraph', text: 'В 10 км от Авейру, у океана, находится Costa Nova do Prado. Знаменита палисадниками — домиками в ярких полосах (исторически — для рыбаков, чтобы с моря они могли различать свои дома).' },
        { kind: 'checklist', items: [
          '🏖️ Пляж с бесконечным песком до горизонта — часть Costa de Prata',
          '🎨 Casas de Palheiro — полосатые домики (жёлто-белые, красно-белые)',
          '🦪 Ресторан Marisqueira Rota dos Sabores — местные морепродукты',
          '🚲 Велосипедная дорожка вдоль океана и лагуны',
          '☀️ Часто ветрено — для летнего купания август лучший месяц',
          '🌅 Закаты над Атлантикой'
        ]},
        { kind: 'paragraph', text: 'Как добраться: автобус Aveirobus 5 из Авейру, 30 мин, 2,35 €, или на авто.' }
      ]
    },
    {
      id: 'food',
      title: 'Что попробовать',
      content: [
        { kind: 'checklist', items: [
          '🥚 Ovos moles (защищённое географическое указание) — яичный желток в тонкой вафле-ракушке, rebuçados (рыбки, обёрнутые в бумажные обёртки)',
          '🐟 Caldeirada de enguias — рагу из угрей из лагуны',
          '🐟 Bacalhau à Lagareiro — треска с картофелем и оливковым маслом',
          '🐚 Berbigão — моллюски из лагуны',
          '🍚 Arroz de lampreia — рис с миногой (сезон зимой)',
          '🥧 Tripas de Aveiro — сладкие вафли-«кишки» в виде трубочек с кремом',
          '🍷 Bairrada — винный регион рядом (игристое и Baga)'
        ]}
      ]
    },
    {
      id: 'nearby',
      title: 'В окрестностях',
      content: [
        { kind: 'checklist', items: [
          '🏖️ Praia da Barra (соседний пляж) — маяк Farol da Barra, один из высочайших в Португалии',
          '🏛️ Ílhavo — бывшая столица трески (сушка бакальяу), Музей бакальяу',
          '🏛️ Vista Alegre — знаменитая португальская фарфоровая фабрика с 1824, музей + аутлет',
          '🍷 Винный регион Bairrada — 30 мин, игристое и Baga. Винодельни для дегустаций',
          '🌊 Costa da Caparica — пляж (150 км дальше)',
          '🏛️ Figueira da Foz — курортный город к югу'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Советы',
      content: [
        { kind: 'checklist', items: [
          '🗓️ Лучший сезон: апрель–октябрь. Зимой ветрено',
          '🎫 Moliceiro — бронировать не нужно, билеты на пирсе',
          '📸 Лучшее фото Costa Nova — утром, когда солнце падает на цветные полосы',
          '🚲 В Aveiro — BUGA-велосипеды от муниципалитета, бесплатно',
          '🍷 Комбо-маршрут из Порту: Авейру + Bairrada → Coimbra на 2 дня',
          '👟 Обувь для гравия у моря и каналов'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Câmara Municipal de Aveiro — туризм', url: 'https://www.cm-aveiro.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Visit Aveiro — Região Centro', url: 'https://www.visitcentro.com/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Turismo de Portugal — Aveiro', url: 'https://www.visitportugal.com/en/destinos/centro-de-portugal/73753', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 365
}