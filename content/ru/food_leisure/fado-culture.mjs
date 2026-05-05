export default {
  editorialVoice: 'hackportugal',
  id: 'fado-culture',
  categoryId: 'food_leisure',
  title: 'Fado — душа Португалии и где её услышать',
  tldr: 'Fado — жанр португальской музыки, включённый в список нематериального культурного наследия ЮНЕСКО (2011). «Fado» значит «судьба». Характерная меланхоличность выражает saudade (тоску, ностальгию). Два стиля: Lisboa (женский и мужской) и Coimbra (только мужской, академический). В Лиссабоне — Alfama, Mouraria, Bairro Alto. Концерт с ужином — € 30-80.',
  tags: ['fado', 'музыка', 'культура', 'Лиссабон', 'saudade'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-fado',
      title: 'Что такое fado',
      content: [
        { kind: 'paragraph', text: 'Fado (от лат. «fatum» — судьба) — жанр, рождённый в Лиссабоне в 1820-х. Его корни — в морских и портовых песнях, афро-бразильских ритмах лунду, романсах. Инструменты: классическая гитара (viola) и португальская гитара (guitarra portuguesa, похожая на мандолину, с 12 струнами).' },
        { kind: 'paragraph', text: 'Темы: несчастная любовь, море, тоска по умершим, ностальгия по прошлому, бедность, Лиссабон. Общий тон — меланхоличный, но иногда гордый и страстный. Ключевая эмоция — saudade (трудно переводимое чувство: тоска, смешанная с любовью).' }
      ]
    },
    {
      id: 'styles',
      title: 'Два стиля',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: 'Fado de Lisboa', content: [
            { kind: 'paragraph', text: 'Более известный стиль. Поют мужчины и женщины. Одеваются в чёрное: женщины часто в траурных платьях. Публика должна соблюдать тишину, аплодируют только в конце песни. Гитаристы сидят, fadista стоит с закрытыми глазами.' }
          ]},
          { id: 's2', title: 'Fado de Coimbra', content: [
            { kind: 'paragraph', text: 'Академический стиль из университетской Коимбры. Поют ТОЛЬКО мужчины — студенты и выпускники, в чёрных плащах (capas e batinas). Более формальный. Темы: студенческая жизнь, женщины, город, прощания.' }
          ]}
        ]}
      ]
    },
    {
      id: 'legends',
      title: 'Легенды и голоса',
      content: [
        { kind: 'checklist', items: [
          '👑 Amália Rodrigues (1920-1999) — королева fado, символ Португалии XX века. Национальный пантеон',
          '🎵 Carlos do Carmo (1939-2021) — модернизировал жанр, получил мировое признание',
          '🎤 Mariza — современная звезда, бразильско-португальская певица',
          '🎤 Ana Moura — традиции и современность',
          '🎤 Camané — классический мужской голос',
          '🎤 Cuca Roseta, Raquel Tavares, Cristina Branco — современные звёзды',
          '🎸 Ricardo Rocha, Custódio Castelo — легендарные исполнители на guitarra portuguesa'
        ]}
      ]
    },
    {
      id: 'where-listen',
      title: 'Где слушать в Лиссабоне',
      content: [
        { kind: 'substeps', items: [
          { id: 'w1', title: 'Casas de Fado', content: [
            { kind: 'paragraph', text: 'Рестораны с живым fado во время ужина. Качество сильно различается — от аутентичных мест до туристических. Средняя цена — € 30-80 с ужином.' },
            { kind: 'checklist', items: [
              'Clube de Fado (Alfama) — аутентичное место, часто выступают звёзды',
              'Mesa de Frades (Alfama) — в бывшей часовне с азулежу',
              'Tasca do Chico (Bairro Alto) — маленькое место для fado vadio (любительского fado)',
              'Parreirinha de Alfama — историческое место, работает с 1950 г.',
              'Senhor Vinho (Lapa) — элитное место с легендарными fadistas',
              'Sr. Fado de Alfama — семейное место'
            ]}
          ]},
          { id: 'w2', title: 'Fado vadio (любительское fado)', content: [
            { kind: 'paragraph', text: 'В небольших tascas районов Alfama и Mouraria любители поют по кругу. Это более аутентично и дешевле, но непредсказуемо. Места появляются и исчезают — попробуйте Tasca do Jaime, A Baiuca.' }
          ]},
          { id: 'w3', title: 'Концертные залы', content: [
            { kind: 'checklist', items: [
              'Coliseu dos Recreios (Lisboa) — крупные концерты',
              'Centro Cultural de Belém — актуальная площадка',
              'Museu do Fado (Alfama) — музей и концерты',
              'В Порту: Café Guarany, Coliseu do Porto'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'in-coimbra',
      title: 'Fado de Coimbra — где послушать',
      content: [
        { kind: 'checklist', items: [
          '🎓 Fado ao Centro — ежедневные вечерние концерты в историческом доме, € 10 с портвейном',
          '🎓 á Capella — в бывшей часовне XIV в.',
          '🎓 Diligência — традиционная таверна',
          '🎪 Queima das Fitas (май, 8 дней) — главный фестиваль с fado',
          '🎤 Студенты иногда поют на уличных концертах во время Queima или других событий, бесплатно'
        ]}
      ]
    },
    {
      id: 'etiquette',
      title: 'Этикет посещения',
      content: [
        { kind: 'checklist', items: [
          '🤫 ТИШИНА во время пения — не разговаривайте, не ешьте шумно, не фотографируйте со вспышкой',
          '🎵 Пауза после каждой песни = аплодисменты. НЕ аплодируйте после куплетов',
          '🍷 Заказ вина или портвейна — норма',
          '👔 Одежда — повседневно-элегантная, но очень формальная не требуется',
          '⏰ Пение обычно начинается в 21:00-22:00 и длится 3-4 часа',
          '💰 Программа часто включает ужин и пение — стоимость зависит от меню',
          '🎫 Бронирование в популярных Casas обязательно, особенно в сезон',
          '📝 Ценник на двери — формальность, реальный счёт может быть с чаевыми'
        ]}
      ]
    },
    {
      id: 'museum',
      title: 'Museu do Fado — погрузиться глубже',
      content: [
        { kind: 'paragraph', text: 'В Alfama (Largo do Chafariz de Dentro 1). Государственный музей, вход — € 5. Коллекция инструментов, фотографии, аудио- и видеоархив, временные выставки. Рекомендуется ДО похода на живой концерт — помогает понять контекст.' },
        { kind: 'paragraph', text: 'Есть часы живого fado по расписанию и магазин с записями.' }
      ]
    }
  ],
  sources: [
    { title: 'Museu do Fado — официальный', url: 'https://www.museudofado.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'UNESCO — Fado, Urban Popular Song of Portugal', url: 'https://ich.unesco.org/en/RL/fado-urban-popular-song-of-portugal-00563', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Turismo de Portugal — Fado', url: 'https://www.visitportugal.com/en/node/73868', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 365
}