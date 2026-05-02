export default {
  editorialVoice: 'hackportugal',
  id: 'markets-mercados',
  categoryId: 'food_leisure',
  title: 'Рынки Португалии (Mercados)',
  tldr: 'Муниципальные рынки — живая традиция: свежая рыба, мясо, овощи, специи. Главные в Лиссабоне: Mercado da Ribeira (Time Out), Mercado de Campo de Ourique, Arroios, 31 de Janeiro. В Порту — легендарный Mercado do Bolhão. Работают 7:00-14:00 (основное время), некоторые — до вечера как фуд-холлы.',
  tags: ['рынки', 'рынок', 'mercado', 'time out'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'lisbon',
      title: 'Лиссабон',
      content: [
        { kind: 'substeps', items: [
          { id: 'l1', title: 'Mercado da Ribeira / Time Out Market', content: [
            { kind: 'paragraph', text: 'Cais do Sodré. Утром — традиционный рынок: рыба, мясо. С полудня до ночи — Time Out Market с 30+ фуд-киосками топовых португальских шефов. Очень туристический, но качество высокое.' },
          ]},
          { id: 'l2', title: 'Mercado de Campo de Ourique', content: [
            { kind: 'paragraph', text: 'Менее туристический, больше «для местных». Вечером тоже есть фуд-корт. Район Campo de Ourique приятный для прогулки.' }
          ]},
          { id: 'l3', title: 'Mercado 31 de Janeiro', content: [
            { kind: 'paragraph', text: 'Saldanha. Большой, аутентичный, недорогой. Местные его любят. Рядом метро.' }
          ]},
          { id: 'l4', title: 'Mercado de Arroios', content: [
            { kind: 'paragraph', text: 'Район Arroios — мультикультурный. Много азиатских, индийских, бразильских продавцов.' }
          ]},
          { id: 'l5', title: 'Feira da Ladra (блошиный рынок)', content: [
            { kind: 'paragraph', text: 'По вторникам и субботам, Campo de Santa Clara. Блошиный рынок — от антиквариата до барахла. С видом на Panteão Nacional.' }
          ]}
        ]}
      ]
    },
    {
      id: 'porto',
      title: 'Порту',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: 'Mercado do Bolhão', content: [
            { kind: 'paragraph', text: 'Легендарный. После реконструкции 2022 — чистый, но сохранил дух. Свежая рыба, мясо, хлеб, цветы, сыры. Утром аутентично.' }
          ]},
          { id: 'p2', title: 'Mercado Ferreira Borges', content: [
            { kind: 'paragraph', text: 'Чугунное здание у реки Дору. Не продуктовый рынок, но внутри — Hard Club: концерты и мероприятия.' }
          ]},
          { id: 'p3', title: 'Mercado do Bom Sucesso', content: [
            { kind: 'paragraph', text: 'Boavista. Современный фуд-холл с бутиками, похож на Time Out. Хорошее место для обеда.' }
          ]},
          { id: 'p4', title: 'Feira de Vandoma', content: [
            { kind: 'paragraph', text: 'У метро Bolhão, по воскресеньям утром. Блошиный рынок.' }
          ]}
        ]}
      ]
    },
    {
      id: 'regional',
      title: 'Другие регионы',
      content: [
        { kind: 'checklist', items: [
          'Mercado de Abrantes — средневековый город, по субботам',
          'Mercado de Loulé (Algarve) — сюрреалистичный мавританский стиль, суббота',
          'Mercado de Coimbra — современный рынок и уличная еда',
          'Feira de São Pedro (Sintra) — 2-е/4-е воскресенье месяца',
          'Mercado Municipal de Setúbal — рыба прямо с лодок'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Как пользоваться',
      content: [
        { kind: 'checklist', items: [
          'Утром 7-10 — самый свежий улов и лучший выбор',
          'К обеду часто распродажи со скидками 30-50%',
          'Платите наличными в традиционных ларьках: MB WAY или карту принимают не везде',
          '«Saco, por favor» — «пакет, пожалуйста»',
          'Спрашивайте «Prova?» — часто дают попробовать сыр, оливки',
          'Просите NIF для IRS-вычета по счетам',
          'Продавцы часто говорят только по-португальски — пригодится базовая лексика',
          'Завтрак (pequeno-almoço) на рынке — самый аутентичный вариант'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Câmara Municipal de Lisboa — Mercados', url: 'https://www.lisboa.pt/cidade/comercio/mercados-e-feiras', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Visit Porto — Mercado do Bolhão', url: 'https://visitporto.travel/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Time Out Market Lisbon', url: 'https://www.timeoutmarket.com/lisboa/', kind: 'secondary', language: 'en', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}