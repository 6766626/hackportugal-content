export default {
  editorialVoice: 'hackportugal',
  id: 'learn-portuguese',
  categoryId: 'before_arrival',
  title: 'Как выучить португальский — школы, приложения, советы',
  tldr: 'PT-PT (европейский) отличается от BR-PT произношением и частично словарём. Три пути: (1) бесплатные государственные курсы PLA для резидентов (150ч, А2 за 6 мес); (2) IEFP-курсы с субсидией для безработных; (3) частные: Fast Forward, CIAL, CLIC — 350-900 € за курс. Приложения: Practice Portuguese (специализация на PT-PT, лучший выбор), Portuguese With Carla (YouTube), Pimsleur (аудио)\.\n\nDuolingo — только бразильский вариант, для PT-PT не лучший старт.',
  tags: ['португальский', 'язык', 'курсы', 'ciple'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'pt-vs-br',
      title: 'PT-PT vs PT-BR — что учить?',
      content: [
        { kind: 'paragraph', text: 'Португальский язык имеет две основные разновидности: европейский португальский (PT-PT) и бразильский португальский (PT-BR). В Португалии говорят на PT-PT.' },
        { kind: 'checklist', items: [
          '🗣️ Произношение: PT-PT — «закрытые» гласные, глотающиеся слоги («Lis-bo-a» → «Lʒbwa»). BR-PT — чётче, открытее',
          '📝 Грамматика: немного различается (tu/você, конструкция с герундием, estar/ficar)',
          '📚 Словарь: автобус = autocarro (PT) / ônibus (BR); поезд = comboio (PT) / trem (BR); вы = você (BR часто) / vocês (PT формально)',
          '🎬 Фильмы: бразильские фильмы всегда с субтитрами в PT — португальские новости в BR без перевода не показываются',
          '🎯 **Вывод: учите PT-PT, если приезжаете в Португалию.** BR понимают — но на A2 для гражданства нужен PT-PT. BR-контент (Duolingo, большинство YouTube) — для фонового воздействия подойдёт, для экзаменов — нет'
        ]}
      ]
    },
    {
      id: 'free-courses',
      title: '🆓 Бесплатные курсы (государственные)',
      content: [
        { kind: 'substeps', items: [
          { id: 'f1', title: 'PLA — Português Língua de Acolhimento', content: [
            { kind: 'checklist', items: [
              'Государственная программа AIMA + образование',
              '150 часов для уровня A2 (что нужно для гражданства)',
              '300 часов для B1/B2',
              'Бесплатно для **всех** иностранцев с любым статусом (включая беженцев и нерезидентов)',
              'Запись: Centro Qualifica по месту жительства (qualifica.gov.pt) или AIMA',
              'Формат: вечерние / выходные занятия, 2-3 раза в неделю по 3 часа',
              'Сертификат Certificado PLA признаётся IRN для натурализации'
            ]}
          ]},
          { id: 'f2', title: 'IEFP — курс + стипендия', content: [
            { kind: 'checklist', items: [
              'Институт занятости: курсы португальского для зарегистрированных безработных',
              'Бесплатно + учебная стипендия (часть IAS), покрывают транспорт и питание',
              'Записаться в Centro de Emprego',
              'Идеально для тех, кто только приехал и ещё не работает',
              '4-6 месяцев интенсивно, 20+ часов в неделю'
            ]}
          ]},
          { id: 'f3', title: 'Публичные школы для взрослых', content: [
            { kind: 'paragraph', text: 'Государственные средние школы часто имеют вечерние курсы «Português para Estrangeiros» в рамках PLNM — за символическую запись (10-25 €/семестр). Преподаватели — профессиональные.' }
          ]},
          { id: 'f4', title: 'Junta de Freguesia', content: [
            { kind: 'paragraph', text: 'Многие Junta de Freguesia организуют бесплатные разговорные клубы «Café Fala Português» — для практики. Сертификатов не дают, но живая практика ценна.' }
          ]}
        ]}
      ]
    },
    {
      id: 'paid-schools',
      title: '💼 Частные языковые школы',
      content: [
        { kind: 'checklist', items: [
          '**CIAL** (Centro de Línguas) — Lisboa, Faro. Классика, 150-600 € за месяц интенсива',
          '**CLIC** (Centro Línguas Intercultural) — Lisboa, Porto. 300-800 € за 4-6 недель',
          '**Fast Forward Language Institute** — Lisboa, хороший вариант для цифровых кочевников, групповые 350 € / индивидуальные 40-60 €/час',
          '**Inlingua** — международная сеть, 400-800 € стандарт',
          '**Kiros** — онлайн, 20-40 €/час с носителем',
          '**italki / Preply** — онлайн-платформы с преподавателями, 15-35 €/час (преподавателей PT-PT ищите отдельно)',
          '🎓 **Лиссабонский университет** и **Университет Коимбры** — летние курсы для иностранцев, 500-900 € за 3-4 недели интенсива, сертификат университета'
        ]}
      ]
    },
    {
      id: 'apps',
      title: '📱 Приложения и самообучение',
      content: [
        { kind: 'substeps', items: [
          { id: 'a1', title: '🏆 Practice Portuguese (practiceportuguese.com)', content: [
            { kind: 'paragraph', text: 'Лучший для PT-PT. Специализируется на европейском португальском. Подкасты + грамматика + упражнения. Подписка ~10-15 €/мес. Подход с упором на аудио. Хорош для всех уровней.' }
          ]},
          { id: 'a2', title: '🎥 Portuguese With Carla (YouTube)', content: [
            { kind: 'paragraph', text: 'Бесплатные видео на PT-PT. Carla живёт в Португалии, объясняет тонкости. Полный курс A1 → B2 в YouTube-плейлистах. Можно купить рабочую тетрадь + закрытую подписку примерно за 15 €/мес.' }
          ]},
          { id: 'a3', title: 'Pimsleur European Portuguese', content: [
            { kind: 'paragraph', text: 'Только аудио, 90 лекций по 30 мин. Отличен для произношения + удобно слушать за рулём. Подписка 14 €/мес, есть в Apple Music + аудиокнигах.' }
          ]},
          { id: 'a4', title: 'Memrise (PT-PT курсы)', content: [
            { kind: 'paragraph', text: 'Флеш-карточки с носителями. Бесплатной версии достаточно для словарного запаса A1-A2.' }
          ]},
          { id: 'a5', title: '❌ Duolingo', content: [
            { kind: 'paragraph', text: 'Только бразильский вариант, не европейский. Для фонового «чувства языка» подойдёт, но не для экзамена A2 PT-PT и не для разговорной практики в Лиссабоне.' }
          ]}
        ]}
      ]
    },
    {
      id: 'practice',
      title: '🗣️ Где практиковать разговор',
      content: [
        { kind: 'checklist', items: [
          '**Tandem / HelloTalk** — языковой обмен с португальцами, бесплатно',
          '**Meetup Lisboa / Porto** — еженедельные языковые обмены в кафе (бесплатные встречи)',
          '**Portuguese Conversation Club** (FB) — группа в Порту и Лиссабоне',
          '**italki Community** — бесплатные исправления записей в Notebook от португальцев',
          '**Сериалы** — TVI / SIC вечером, например «Quero é Viver»',
          '**Реклама в лифте / метро** — короткие тексты, хороши для пассивного воздействия',
          '**Футбол на радио** — быстрый разговор с идиомами',
          '**Разговор с соседями по району** — senhor/senhora в кафе, продавец в padaria',
          '**Sem medo de falar** — главное правило: португальцы приятны, терпят ошибки, рады практике'
        ]}
      ]
    },
    {
      id: 'timeline',
      title: '⏱️ Сколько времени до A2 / B1',
      content: [
        { kind: 'checklist', items: [
          '**A1** (основы): 60-80 часов занятий. 2-3 мес при 4ч/неделю',
          '**A2** (для гражданства): 150-200 часов. 6-9 мес при интенсивном',
          '**B1** (комфортный разговор): 300-400 часов. 1-1.5 года',
          '**B2** (профессиональный): 500-700 часов. 2-3 года',
          '**C1** (почти уровень носителя): 1000+ часов, 4-6 лет',
          '💡 Быстрее, если: в PT уже живёте + ежедневная практика. Медленнее, если учите из Москвы без погружения',
          '📅 Реальный опыт: большинство переехавших доходят до уверенного A2-B1 за 1-1.5 года в PT, B2 — за 3-4 года с активной практикой'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'PLA (государственные курсы)', amountEUR: 0 },
    { label: 'IEFP + стипендия', amountEUR: 0, note: 'ещё и платят' },
    { label: 'Публичная школа (семестр)', amountEURMin: 10, amountEURMax: 25 },
    { label: 'Частная школа (курс 1 мес)', amountEURMin: 150, amountEURMax: 600 },
    { label: 'Онлайн с преподавателем (час)', amountEURMin: 15, amountEURMax: 60 },
    { label: 'Practice Portuguese подписка', amountEUR: 12, note: '€/мес' },
    { label: 'Экзамен CIPLE A2', amountEUR: 85 }
  ],
  sources: [
    { title: 'Centros Qualifica — поиск по адресу', url: 'https://www.qualifica.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — PLA', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Instituto Camões — сертификация', url: 'https://www.instituto-camoes.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'CAPLE — экзамены CIPLE', url: 'https://caple.letras.ulisboa.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 365
}