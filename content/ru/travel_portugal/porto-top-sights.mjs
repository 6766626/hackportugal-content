export default {
  editorialVoice: 'hackportugal',
  id: 'porto-top-sights',
  categoryId: 'travel_portugal',
  title: 'Порту — топ-15 мест, которые стоит увидеть',
  tldr: 'Порту — второй город страны и родина портвейна. Исторический центр Ribeira под охраной ЮНЕСКО, мост Dom Luís I, погреба портвейна в Vila Nova de Gaia, легендарная Livraria Lello, вдохновившая Роулинг. Город компактнее Лиссабона — 2-3 дней хватит. Porto Card даёт бесплатный транспорт и скидки.',
  tags: ['porto', 'туризм', 'портвейн', 'экскурсия'],
  estimatedReadMinutes: 10,
  steps: [
    {
      id: 'ribeira-downtown',
      title: 'Ribeira и центр — ЮНЕСКО',
      content: [
        { kind: 'checklist', items: [
          '🌉 Ponte Dom Luís I — двухуровневый мост школы Эйфеля, спроектированный его учеником. Пеший проход по верхнему ярусу — лучшие виды Порту. Бесплатно',
          '🏰 Ribeira — набережная с разноцветными домами и ресторанами. ЮНЕСКО',
          '⛪ Sé do Porto — романско-готический кафедральный собор, виды с террас. 3 €',
          '🚂 Estação de São Bento — вокзал с 20 000 азулежу, сцены из истории Португалии. Бесплатно',
          '📚 Livraria Lello — неоготический книжный магазин 1906 г., вдохновивший Гарри Поттера. 8 € (вычитается из покупки книги)',
          '🏛️ Palácio da Bolsa — бывшая биржа с роскошным Salão Árabe. 12 € с экскурсией',
          '⛪ Igreja de São Francisco — готическая снаружи, барочная внутри, золотой интерьер. 8 €',
          '🗼 Torre dos Clérigos — барочная колокольня, панорама города. 6 €'
        ]}
      ]
    },
    {
      id: 'port-wine-cellars',
      title: 'Погреба портвейна — Vila Nova de Gaia',
      content: [
        { kind: 'paragraph', text: 'Через мост Dom Luís I на южный берег Дору — сотни погребов известных марок. Историческая зона под охраной ЮНЕСКО. Туры 15-30 € с дегустацией 2-4 видов. Бронировать онлайн заранее.' },
        { kind: 'checklist', items: [
          '🍷 Taylor\'s (1692) — один из старейших, британский стиль',
          '🍷 Graham\'s — шикарный Vintage, терраса с видом',
          '🍷 Croft (1588) — старейший портвейный дом',
          '🍷 Sandeman — культовый логотип «в плаще»',
          '🍷 Cálem — русскоязычные экскурсии бывают',
          '🍷 Ferreira — единственный чисто португальский, история женщины-предпринимательницы Антонии',
          '🎫 Самый короткий тур + дегустация: 45 мин, 15-25 €. Премиум с Vintage 40-80 €'
        ]},
        { kind: 'paragraph', text: 'После погребов — Cais de Gaia: набережная с ресторанами и видом на Ribeira на противоположном берегу.' }
      ]
    },
    {
      id: 'foz-ocean',
      title: 'Foz и океан',
      content: [
        { kind: 'checklist', items: [
          '🌊 Foz do Douro — место, где река встречается с Атлантикой, променад',
          '🚋 Трамвай 1 — исторический маршрут от Ribeira до Foz',
          '🏖️ Praia dos Ingleses / Praia de Gondarém — городские пляжи',
          '🐟 Matosinhos — соседний город, рыбный порт, лучшие морепродукты в регионе',
          '⛪ Fortaleza de São Francisco Xavier — форт XVII в.',
          '🎢 Sea Life Porto — аквариум'
        ]}
      ]
    },
    {
      id: 'cedofeita-boavista',
      title: 'Cedofeita, Boavista — модная часть',
      content: [
        { kind: 'checklist', items: [
          '🎨 Rua de Miguel Bombarda — галерея современного искусства, бутики',
          '🎷 Casa da Música — концертный зал Рема Колхаса, экскурсии и концерты',
          '🌳 Jardim do Palácio de Cristal — лучший сад Порту с панорамой',
          '🏛️ Museu de Arte Contemporânea Serralves — современное искусство и парк. 15 €',
          '📚 Museu Soares dos Reis — национальный музей старого искусства. 5 €',
          '🦁 Jardim Zoológico — зоопарк для семей'
        ]}
      ]
    },
    {
      id: 'food-drink',
      title: 'Что попробовать в Порту',
      content: [
        { kind: 'checklist', items: [
          '🥪 Francesinha — главное блюдо Порту: сэндвич с мясом, яйцом и соусом на пиве',
          '🐟 Bacalhau à Gomes de Sá — треска с яйцами и картошкой',
          '🍢 Tripas à moda do Porto — национальное блюдо (поэтому жителей Порту и называют «tripeiros»)',
          '🍷 Vinho Verde — молодое лёгкое белое вино, хорошо для лета',
          '🍻 Super Bock — местное пиво',
          '🥐 Pastel de Chaves — слоёное тесто с мясом',
          '☕ Cimbalino — местное название эспрессо',
          '🍻 Taberna dos Mercadores / A Francesinha da Sé — культовые места'
        ]}
      ]
    },
    {
      id: 'day-trips',
      title: 'Однодневные поездки',
      content: [
        { kind: 'checklist', items: [
          '🍇 Douro Valley — долина реки Дору, виноградники под охраной ЮНЕСКО. Поезд из Campanhã до Régua (2 ч, 14 €) или автомобиль',
          '🏰 Guimarães — колыбель Португалии, замок XI в. (1 ч поезд, 9 €)',
          '🏛️ Braga — «португальский Рим», Bom Jesus do Monte (1 ч поезд)',
          '🏖️ Aveiro — «португальская Венеция», каналы и молики (35 мин поезд)',
          '🌊 Viana do Castelo — рыбацкий город на севере (1,5 ч поезд)'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Советы',
      content: [
        { kind: 'checklist', items: [
          'Porto Card (13/17/22/27 € на 1/2/3/4 дня) — транспорт, 17 музеев и скидки',
          'Andante — проездной на метро, автобусы и поезда в зоне Порту, 1.95-2.50 € за поездку',
          'Livraria Lello — бронируйте билет онлайн, очередь может быть на час',
          'Погреба портвейна — бронируйте тур онлайн, особенно летом',
          'Трамвай 1 — работает не всегда, проверяйте на stcp.pt',
          'Порту дождливее Лиссабона — берите зонт',
          'Вечерний променад: Ribeira → Ponte Luís → Gaia → закат'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Visit Porto — официальный сайт', url: 'https://visitporto.travel/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Câmara Municipal do Porto — культура', url: 'https://www.cm-porto.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Turismo de Portugal — Porto', url: 'https://www.visitportugal.com/pt-pt/destinos/porto-e-norte', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}