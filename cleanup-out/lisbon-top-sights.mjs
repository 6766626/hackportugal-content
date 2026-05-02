export default {
  editorialVoice: 'hackportugal',
  id: 'lisbon-top-sights',
  categoryId: 'travel_portugal',
  title: 'Лиссабон — топ-20 мест, которые стоит увидеть',
  tldr: 'Лиссабон — холмистый город на реке Тежу: объекты ЮНЕСКО в Belém, трамвай 28 как символ города, фаду в Alfama, смотровые площадки с видами, Монастырь Жеронимуш и Башня Белен обязательны к посещению. Минимум — 3 дня, идеально — 5–7. Lisboa Card даёт бесплатный транспорт и скидки на музеи.',
  tags: ['lisboa', 'туризм', 'экскурсия'],
  estimatedReadMinutes: 12,
  steps: [
    {
      id: 'belem',
      title: 'Район Belém — объекты ЮНЕСКО',
      content: [
        { kind: 'paragraph', text: 'Западная часть Лиссабона, 6 км от центра. Здесь — эпоха Великих географических открытий: отсюда отплывал Васко да Гама. Вход в большинство достопримечательностей стоит 10–14 €, Lisboa Card даёт бесплатный вход или скидку.' },
        { kind: 'checklist', items: [
          '🏛️ Mosteiro dos Jerónimos (XVI в., ЮНЕСКО) — мануэлино-готический монастырь, гробница Васко да Гамы и Камоэнса. 12 €, вт–вс 10–18, пн выходной',
          '🗼 Torre de Belém (XVI в., ЮНЕСКО) — сторожевая башня на реке, символ Лиссабона. 8 €',
          '🚀 Padrão dos Descobrimentos — памятник открытиям 1960 года, обзорная площадка на крыше 5 €',
          '🥐 Pastéis de Belém — оригинальная кондитерская с пастел-де-ната с 1837 г. Есть очередь, но оно того стоит',
          '🏛️ Museu Nacional dos Coches — королевские кареты XVI–XIX вв., 8 €',
          '🎨 Museu Coleção Berardo / MAAT — современное искусство, часто бесплатно'
        ]},
        { kind: 'paragraph', text: 'Как добраться: трамвай 15E от Praça do Comércio, поезд от Cais do Sodré до Belém, Uber/Bolt 8–12 €.' }
      ]
    },
    {
      id: 'baixa-chiado',
      title: 'Baixa и Chiado — центр',
      content: [
        { kind: 'checklist', items: [
          '🟨 Praça do Comércio — главная площадь у Тежу, триумфальная арка, конная статуя Жозе I',
          '🟥 Praça do Rossio — оживлённая центральная площадь, театр D. Maria II, волновая брусчатка',
          '⛪ Elevador de Santa Justa — чугунный лифт 1902 года в стиле Эйфеля, смотровая площадка 5,30 €',
          '☕ Café A Brasileira (Chiado) — статуя Фернандо Пессоа, легендарное место для кофе',
          '📚 Livraria Bertrand — старейший книжный магазин в мире (1732), Guinness',
          '🛍️ Rua Augusta — пешеходная торговая улица с триумфальной аркой',
          '🏛️ Museu do Dinheiro — бесплатный музей денег в историческом здании банка',
          '🚞 Ascensor da Glória — фуникулёр к Bairro Alto'
        ]}
      ]
    },
    {
      id: 'alfama',
      title: 'Alfama — старейший район',
      content: [
        { kind: 'paragraph', text: 'Район пережил землетрясение 1755 года: узкие улочки, азулежу, фаду из каждого окна. Местность холмистая, надевайте удобную обувь.' },
        { kind: 'checklist', items: [
          '🏰 Castelo de São Jorge — мавританская крепость на вершине, лучшие виды. 15 €',
          '⛪ Sé de Lisboa — кафедральный собор XII в., бесплатный вход в основную часть',
          '🎵 Фаду в Clube de Fado / Mesa de Frades / Tasca do Chico — вечерние концерты 30–60 € с ужином',
          '🚋 Трамвай 28E — исторический маршрут через Alfama, Graça, Estrela. Будьте готовы к очереди и карманникам',
          '🌅 Miradouro de Santa Luzia — классический вид с азулежу',
          '🌅 Miradouro da Senhora do Monte — самая высокая точка, панорама всего города',
          '🏺 Museu do Fado — история жанра, записи великих исполнителей. 5 €',
          '🎎 Museu Nacional do Azulejo — бывший монастырь с коллекцией плитки. 8 €'
        ]}
      ]
    },
    {
      id: 'bairro-alto',
      title: 'Bairro Alto, Príncipe Real, Estrela',
      content: [
        { kind: 'checklist', items: [
          '🌃 Bairro Alto — ночная жизнь. Днём тихо, после 22 — бары, живая музыка',
          '🌳 Jardim do Príncipe Real — парк с огромной 150-летней сосной, воскресный блошиный рынок',
          '🏛️ Basílica da Estrela — барочная базилика XVIII в., бесплатный вход',
          '🌲 Jardim da Estrela — любимый сад лиссабонцев для пикника',
          '📚 Museu Nacional de Arte Antiga (MNAA) — главный художественный музей, 10 €',
          '🌅 Miradouro de São Pedro de Alcântara — вид на замок и центр, фуникулёр Glória'
        ]}
      ]
    },
    {
      id: 'modern-lisboa',
      title: 'Современный Лиссабон — Parque das Nações',
      content: [
        { kind: 'checklist', items: [
          '🐟 Oceanário de Lisboa — один из лучших океанариумов Европы. 25 €',
          '🎢 Pavilhão do Conhecimento — научный интерактивный музей для детей. 10 €',
          '🚡 Teleférico — канатная дорога вдоль реки, 4 €/взр.',
          '🏗️ Gare do Oriente — вокзал-шедевр Сантьяго Калатравы',
          '🛍️ Centro Vasco da Gama — торговый центр',
          '🌉 Ponte Vasco da Gama — мост длиной 17 км через Тежу (2-й по длине в Европе)'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Практические советы',
      content: [
        { kind: 'checklist', items: [
          'Lisboa Card (22/36/43 € на 24/48/72 ч) — бесплатный транспорт и 30+ достопримечательностей',
          'Viva Viagem — карта для разовых поездок на метро и автобусе, лучше, чем разовый билет',
          'Билеты в Jerónimos и Torre de Belém — комбо 18 € вместо 20 €, но бронировать онлайн заранее (часовые слоты)',
          'Трамвай 28: раннее утро (до 9:00) или вечер — меньше толп и карманников',
          'Вода в ресторанах не бесплатная: попросите «água da torneira» (вода из-под крана, дают не везде)',
          'Чаевые: 5–10% в ресторане принято оставлять',
          'Купаться в Тежу нельзя — вода загрязнена. Пляжи — в Cascais / Costa da Caparica',
          'Вечерняя прогулка: Castelo → Alfama → набережная Тежу'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Visit Lisboa — официальный туризм', url: 'https://www.visitlisboa.com/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Câmara Municipal de Lisboa — культура', url: 'https://www.lisboa.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Turismo de Portugal', url: 'https://www.visitportugal.com/pt-pt/destinos/lisboa', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}