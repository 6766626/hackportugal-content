export default {
  editorialVoice: 'hackportugal',
  id: 'coimbra',
  categoryId: 'travel_portugal',
  title: 'Коимбра — старейший университет Португалии',
  tldr: 'Коимбра — город-университет в центре страны, в 1 ч от Лиссабона или Порту поездом. Universidade de Coimbra (ЮНЕСКО, 1290) с легендарной Biblioteca Joanina. Атмосфера древней академии, мужской вариант фаду. Достаточно 1 дня.',
  tags: ['коимбра', 'университет', 'экскурсия'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'arrival',
      title: 'Как добраться',
      content: [
        { kind: 'checklist', items: [
          '🚆 Lisboa-Santa Apolónia/Oriente → Coimbra-B: 1 ч 45 мин, поезд AP, € 20–28',
          '🚆 Porto-Campanhã → Coimbra-B: 1 ч, € 15–25',
          '🚆 От Coimbra-B (главный междугородний вокзал) до Coimbra (центр) — городская электричка, 6 мин, € 1,60',
          '🚌 Rede Expressos / FlixBus: 2–2,5 ч, € 10–15',
          '🚗 Авто: по A1 Lisboa-Porto — 2 ч от Лиссабона, 1,5 ч от Порту'
        ]}
      ]
    },
    {
      id: 'university',
      title: 'Universidade de Coimbra (ЮНЕСКО)',
      content: [
        { kind: 'paragraph', text: 'Главная достопримечательность — старейший университет страны (1290), один из старейших в Европе. На холме в центре города. Комплексный входной билет с библиотекой — € 14.' },
        { kind: 'checklist', items: [
          '📚 Biblioteca Joanina (1728) — барочная библиотека с 60 000 томов XVI–XVIII вв. Специальные летучие мыши охраняют книги от насекомых! Сеансы по 20 мин',
          '🎓 Capela de São Miguel — университетская часовня с барочным органом',
          '🏛️ Paço das Escolas — двор с памятником Жуану III, терраса с видом на реку Мондегу',
          '🗼 Torre da Universidade — колокольня, подъём € 5',
          '🏛️ Museu da Ciência — научные коллекции XVIII–XIX вв. € 5',
          '🎓 Sala dos Capelos — главный зал церемоний присвоения степеней'
        ]}
      ]
    },
    {
      id: 'old-city',
      title: 'Старый город',
      content: [
        { kind: 'checklist', items: [
          '⛪ Sé Velha — старый собор XII в., романский стиль. € 3',
          '⛪ Sé Nova — новый собор XVI в., барокко',
          '🏛️ Mosteiro de Santa Cruz — королевский пантеон, гробницы первых королей Афонсу I и Саншу I. € 4',
          '🌳 Jardim Botânico da Universidade — один из старейших в Европе (XVIII в.), бесплатно',
          '🏛️ Portagem / Parque Manuel Braga — набережная Мондегу, мост Santa Clara',
          '🛕 Mosteiro de Santa Clara-a-Velha — руины готического монастыря у реки. € 4',
          '🎨 Museu Nacional Machado de Castro — бывший епископский дворец и римский криптопортик. € 6'
        ]}
      ]
    },
    {
      id: 'academic-traditions',
      title: 'Академические традиции',
      content: [
        { kind: 'paragraph', text: 'Студенты Коимбры носят чёрные плащи (capas e batinas) — так делают с XIII века. Весной, в мае, проходит Queima das Fitas, праздник выпускников: процессии, концерты, песни.' },
        { kind: 'checklist', items: [
          '🎵 Fado de Coimbra — мужской вариант фаду, исполняется только мужчинами в плащах. Отличается от лиссабонского. Концерты в Fado ao Centro или ao Capricho',
          '🎓 Praxe — студенческие ритуалы посвящения первокурсников (сентябрь-октябрь)',
          '🎪 Queima das Fitas — 8 дней в мае, концерты в парке Санта-Круш',
          '🎭 Bar Académico — студенческие бары, но легко зайти с пропуском'
        ]}
      ]
    },
    {
      id: 'nearby',
      title: 'Рядом',
      content: [
        { kind: 'checklist', items: [
          '🏛️ Conímbriga (15 км) — руины крупнейшего римского города Португалии, II в. до н. э. Мозаики, форум, термы. € 5',
          '🌲 Serra da Lousã (30 км) — горы со сланцевыми деревнями (Talasnal, Candal, Cerdeira)',
          '⛰️ Penela (30 км) — средневековый замок XII в.',
          '🏖️ Figueira da Foz (45 км) — пляжный курорт на океане',
          '🌊 Aveiro (60 км) — «португальская Венеция», каналы'
        ]}
      ]
    },
    {
      id: 'food',
      title: 'Что попробовать',
      content: [
        { kind: 'checklist', items: [
          '🥩 Chanfana — козлёнок в красном вине (региональное блюдо)',
          '🥖 Pastéis de Tentúgal — хрустящее тесто с кремом (от монахинь XVI в.)',
          '🧁 Pastéis de Santa Clara — круглые пироги со сладкой фасолевой начинкой',
          '🍷 Вина Bairrada — игристые и красные вина из соседнего региона',
          '🍸 Arraia — местный аперитив, часто с портвейном',
          '🍖 Restaurante Zé Manel dos Ossos — культовая таверна с 1967 года, мясо и бобы'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Universidade de Coimbra — наследие ЮНЕСКО', url: 'https://www.uc.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Turismo de Coimbra — муниципальный туризм', url: 'https://www.visitportugal.com/en/node/73754', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Turismo do Centro — регион', url: 'https://www.turismodocentro.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 365
}