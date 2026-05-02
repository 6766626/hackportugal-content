export default {
  editorialVoice: 'hackportugal',
  id: 'coworking-spaces',
  categoryId: 'daily_life',
  title: 'Коворкинги в Португалии — где работать удалёнщикам',
  tldr: 'Лиссабон, Порту и Мадейра — крупные хабы цифровых кочевников. Цены: 150-400 €/мес за гибкое место, 250-800 €/мес за фиксированное. Крупные сети: Second Home (премиум), LACS, Avila Spaces, Impact Hub, WorkIO. Digital Nomads Village Ponta do Sol (Мадейра) — бесплатный коворкинг для зарегистрированных удалёнщиков. В Порту: Porto i/o, Village Underground, Selina Cowork. Wi-Fi 100-1000 Мбит, комнаты для звонков от 10 €/час.',
  tags: ['коворкинг', 'удалённая работа', 'цифровой кочевник', 'офис'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'lisbon',
      title: 'Лиссабон — главный хаб',
      content: [
        { kind: 'substeps', items: [
          { id: 'l1', title: '💎 Премиум (300-800 €/мес)', content: [
            { kind: 'checklist', items: [
              'Second Home (Mercado da Ribeira) — легендарное место, дизайн с растениями, 400-800 €/мес',
              'WorkIO (Marquês de Pombal) — красивый открытый коворкинг, 350-600 €/мес',
              'Heden (Avenida) — бутик-формат с частными офисами, 500+ €/мес',
              'The Hub (Saldanha) — операционные коллективные офисы, 400-700 €/мес'
            ]}
          ]},
          { id: 'l2', title: '🏢 Средний ценник (150-350 €/мес)', content: [
            { kind: 'checklist', items: [
              'Avila Spaces — 3 локации (Saldanha, Avenida, Atrium) — 150-300 €/мес за гибкое место',
              'Impact Hub Lisboa (Avenida Liberdade) — фокус на социальных проектах, 200-400 €/мес',
              'LACS (Santos) — родственная площадка Village Underground — 220 €/мес за гибкое место, 400 € за фиксированное',
              'Village Underground (Cais do Sodré) — контейнеры как офисы — 280-500 €/мес',
              'Cowork Central (Chiado) — тихий, хорош для фрилансеров — 200 €/мес',
              'B.Hive (Saldanha) — с активным сообществом, 180 €/мес'
            ]}
          ]},
          { id: 'l3', title: '💰 Бюджет (<150 €/мес)', content: [
            { kind: 'checklist', items: [
              'Selina Cowork Secret Garden — в хостеле Selina, можно снимать по дням за 15-25 €',
              'Библиотеки муниципалитета Лиссабона — бесплатно, Wi-Fi, места для работы',
              'Fablab Lisboa — для аппаратных проектов, демократичные ставки',
              'CoworkLisboa — один из старейших, 120-180 €/мес'
            ]}
          ]},
          { id: 'l4', title: '☕ Кафе-коворкинги', content: [
            { kind: 'paragraph', text: 'Hello, Kristof, Dear Breakfast, Fauna & Flora, Heim Café — тихие кафе со стабильным Wi-Fi, принимающие работающих. Не выгоняют с места после часа, 5-15 € за визит на кофе и обед.' }
          ]}
        ]}
      ]
    },
    {
      id: 'porto',
      title: 'Порту',
      content: [
        { kind: 'checklist', items: [
          '**Porto i/o** (3 локации: Ribeira, Seaside, Downtown) — самая популярная сеть, 180-350 €/мес',
          '**Selina Porto** — хостел и коворкинг, дневной абонемент 15 € / 200 €/мес',
          '**Typographia** (район Bolhão) — атмосфера книжного лофта, 150 €/мес',
          '**Cowork Porto** (Rua do Almada) — бюджетный, 130 €/мес',
          '**Cospaces** (Cedofeita) — сообщество фрилансеров, 180-280 €/мес',
          '**Up.Start** (Boavista) — для стартапов, часто бесплатно для резидентов акселератора'
        ]}
      ]
    },
    {
      id: 'madeira',
      title: 'Мадейра — Digital Nomads Village',
      content: [
        { kind: 'paragraph', text: 'Ponta do Sol (15 км от Funchal) с 2021 года работает как первая в Европе «деревня цифровых кочевников». Регистрируетесь на digitalnomads.startupmadeira.eu — получаете бесплатный пропуск в коворкинг Ponta do Sol, мероприятия сообщества, чат в Slack с другими удалёнщиками (1000+ участников).' },
        { kind: 'checklist', items: [
          '🆓 Коворкинг в Ponta do Sol — бесплатно для зарегистрированных',
          '💸 Коворкинги в Funchal: Colab, CentroCoworking — 150-250 €/мес',
          '🏖️ Кафе-коворкинги на берегу: Loft, Restaurante do Farol',
          '🌿 Сообщество: еженедельные сёрф-встречи, походы, разговорные встречи'
        ]}
      ]
    },
    {
      id: 'other-cities',
      title: 'Регионы',
      content: [
        { kind: 'checklist', items: [
          '**Coimbra** — Cowork Coimbra (200 €/мес), студенческая атмосфера',
          '**Braga** — Startup Braga (0 € для сертифицированных стартапов), Start Point',
          '**Aveiro** — Creative Science Park 100 €/мес',
          '**Faro/Algarve** — Cowork Algarve (Loulé), Selina Algarve (Lagos) — особенно популярно зимой у удалёнщиков',
          '**Évora** — EcoHub Alentejo, редкий коворкинг в регионе, 80 €/мес'
        ]}
      ]
    },
    {
      id: 'what-to-look',
      title: 'На что смотреть при выборе',
      content: [
        { kind: 'checklist', items: [
          '🌐 Wi-Fi: >100 Мбит — норма, не соглашайтесь на меньшее',
          '🔊 Звукоизоляция — тихие зоны для звонков отдельно',
          '🪑 Эргономика — стул с регулировкой, монитор',
          '🍽️ Кухня / кофе включены?',
          '🖨️ Принтер / сканер',
          '📞 Кабинки для звонков — сколько их, бесплатно или за доплату',
          '🎉 Сообщество — нетворкинг, события (обычно раз в неделю)',
          '🕐 Часы работы — 24/7 или 9:00-19:00',
          '💼 Адрес для пересылки почты (часть ИП-статусов требует)',
          '🚇 Транспортная доступность — метро / автобус в 10 мин',
          '🆓 Пробный день или неделя — почти всегда дают'
        ]}
      ]
    },
    {
      id: 'tax-deduction',
      title: 'Налоговый аспект',
      content: [
        { kind: 'paragraph', text: 'Для Recibo Verde (ИП) и юрлиц оплата коворкинга — 100% вычет как рабочий расход. Возврат IVA: 23% от суммы. Запросите у коворкинга счёт с NIF в конце месяца. Хранить чеки 4 года.' },
        { kind: 'checklist', items: [
          'Гибкое место: классифицировать как "serviços de escritório"',
          'Фиксированное место: аналогично, но можно заявить как "rendimento imóvel afeto a actividade"',
          'Коворкинг как юр. адрес — некоторые позволяют (Avila Spaces, Impact Hub); полезно для возврата IVA',
          'IFICI (бывший NHR) — расходы на коворкинг снижают налогооблагаемую базу даже при фиксированной ставке 20%'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Гибкое место в Лиссабоне', amountEURMin: 150, amountEURMax: 400, note: '€/мес' },
    { label: 'Фиксированное место', amountEURMin: 250, amountEURMax: 800, note: '€/мес' },
    { label: 'Частный офис 1-2 чел', amountEURMin: 500, amountEURMax: 1500, note: '€/мес' },
    { label: 'Дневной абонемент', amountEURMin: 15, amountEURMax: 30 },
    { label: 'Digital Nomads Village Madeira', amountEUR: 0, note: 'для зарегистрированных' }
  ],
  sources: [
    { title: 'Digital Nomads Madeira — официальный', url: 'https://digitalnomads.startupmadeira.eu/', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Avila Spaces', url: 'https://avilaspaces.com/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Porto i/o', url: 'https://porto.io/', kind: 'company', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Impact Hub Lisboa', url: 'https://lisbon.impacthub.net/', kind: 'company', language: 'en', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 180
}