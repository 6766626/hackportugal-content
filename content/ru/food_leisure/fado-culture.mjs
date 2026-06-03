export default {
  editorialVoice: 'hackportugal',
  id: 'fado-culture',
  categoryId: 'food_leisure',
  title: 'Fado — душа Португалии и где её услышать',
  tldr: 'Fado — жанр португальской музыки, включённый в список нематериального культурного наследия ЮНЕСКО (2011). «Fado» значит «судьба». Характерная меланхолия выражает saudade (тоску, ностальгию). Два стиля: Lisboa (женский и мужской) и Coimbra (только мужской, академический).\n\nВ Лиссабоне — Alfama, Mouraria, Bairro Alto. Концерт с ужином — € 30-80.',
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
            { kind: 'paragraph', text: 'Более известный стиль. Поют мужчины и женщины. Одеваются в чёрное: женщины часто в траурных платьях. Публика молчит во время песни; аплодируют после окончания композиции или сета. Гитаристы сидят, fadista стоит с закрытыми глазами.' }
          ]},
          { id: 's2', title: 'Fado de Coimbra', content: [
            { kind: 'paragraph', text: 'Академический стиль из университетской Коимбры. Традиционно исполняется мужчинами — студентами и выпускниками Universidade de Coimbra — в capas e batinas; в современной практике возможны исключения. Темы: студенческая жизнь, женщины, город, прощания.' }
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
          '🎤 Mariza — современная звезда fado, португальская певица, родилась в Мозамбике и выросла в Лиссабоне',
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
          '🎓 Fado ao Centro — ежедневные концерты, обычно около € 15 за взрослый билет; иногда включает бокал портвейна. Проверяйте актуальную цену и расписание на официальном сайте',
          '🎓 À Capella — в бывшей часовне XIV в.',
          '🎓 Diligência — традиционная таверна',
          '🎪 Queima das Fitas — главный студенческий праздник Coimbra; для fado важна Serenata Monumental, обычно открывающая праздник у Sé Velha',
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
          '📝 Проверяйте menu/consumo mínimo/couvert и включён ли espectáculo. Цены должны быть указаны заранее; чаевые в Португалии добровольны, обычно округляют счёт или оставляют 5–10% за хороший сервис'
        ]}
      ]
    },
    {
      id: 'museum',
      title: 'Museu do Fado — погрузиться глубже',
      content: [
        { kind: 'paragraph', text: 'В Alfama (Largo do Chafariz de Dentro 1).\n\nМуниципальный музей Лиссабона, управляется EGEAC; стандартный билет около € 5, проверяйте актуальную цену на официальном сайте. Коллекция инструментов, фотографии, аудио- и видеоархив, временные выставки. Рекомендуется ДО похода на живой концерт — помогает понять контекст.' },
        { kind: 'paragraph', text: 'Есть часы живого fado по расписанию и магазин с записями.' }
      ]
    }
  ],
  sources: [
    { title: 'Museu do Fado — официальный', url: 'https://www.museudofado.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'UNESCO — Fado, Urban Popular Song of Portugal', url: 'https://ich.unesco.org/en/RL/fado-urban-popular-song-of-portugal-00563', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Turismo de Portugal — Fado', url: 'https://www.visitportugal.com/en/node/73868', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}