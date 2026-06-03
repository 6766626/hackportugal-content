export default {
  editorialVoice: 'hackportugal',
  id: 'transportes-65-mais-gratis',
  categoryId: 'public_transport',
  title: 'Бесплатный общественный транспорт для пенсионеров 65+',
  tldr: 'В Португалии нет единого национального бесплатного проезда для всех 65+: льготу оплачивает конкретная Câmara Municipal. В 2026 в Lisboa резиденты 65+ могут получить бесплатный passe navegante metropolitano; в Porto — бесплатный Andante для резидентов 65+; в Cascais — бесплатный муниципальный транспорт для резидентов от 60 лет через Viver Cascais. Нужны NIF, документ, адрес в муниципалитете и транспортная карта.',
  tags: ['транспорт', '65+', 'navegante', 'andante', 'câmara'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-free',
      title: 'Что именно бесплатно в 2026',
      content: [
        { kind: 'paragraph', text: 'Бесплатный проезд для пожилых в Португалии — это не общегосударственная пенсия и не автоматическая льгота по ВНЖ. Обычно это муниципальная программа: Câmara Municipal оплачивает месячный абонемент жителям своего concelho.' },
        { kind: 'checklist', items: [
          'Lisboa: для резидентов Câmara Municipal de Lisboa 65+ — бесплатный passe navegante metropolitano, если выполнены условия программы CML.',
          'Porto: для резидентов Município do Porto 65+ — бесплатный Andante, оформляется через муниципальные каналы / Cartão Porto и систему Andante.',
          'Cascais: программа MobiCascais / Viver Cascais даёт бесплатный или льготный доступ к муниципальному транспорту; для пожилых порог обычно 60+, а не 65+.',
          'Другие муниципалитеты: правила отличаются. В Oeiras, Almada, Sintra, Loures, Braga, Coimbra и т.д. нужно проверять сайт своей Câmara Municipal.',
          'Льгота почти всегда привязана к месту жительства, а не к гражданству: иностранцы с законным проживанием и адресом в муниципалитете обычно могут подать заявку.',
          'Бесплатный проезд чаще означает месячный passe на карту, а не бесплатную разовую поездку без карты.'
        ] }
      ]
    },
    {
      id: 'lisboa',
      title: 'Lisboa: бесплатный navegante 65+',
      content: [
        { kind: 'paragraph', text: 'В Lisboa льгота идёт через Câmara Municipal de Lisboa. Для людей 65+ ключевое условие — быть резидентом Lisboa. В 2026 программа покрывает passe navegante metropolitano для 65+, то есть поездки в сети Área Metropolitana de Lisboa по правилам navegante.' },
        { kind: 'checklist', items: [
          'Возраст: 65 лет или старше.',
          'Адрес: резидент Lisboa, обычно подтверждается налоговым адресом в Finanças или другим документом, который принимает CML.',
          'Документ: Cartão de Cidadão, ВНЖ или паспорт с подтверждением легального проживания.',
          'NIF обязателен почти всегда.',
          'Нужна карта navegante personalizada с фотографией.',
          'Если карты нет: сначала оформите navegante card в пункте Carris/Metro/CP/Fertagus/AML или через доступные онлайн-каналы.',
          'После одобрения льготы месячный passe загружается на карту через Multibanco, терминал оператора или приложение/точку продаж, если канал доступен.',
          'Проверяйте срок действия профиля: льгота может требовать периодического обновления статуса резидента.'
        ] },
        { kind: 'warning', text: 'Не путайте Lisboa city и Área Metropolitana de Lisboa. Жить в Amadora, Oeiras, Loures или Almada — это не резидент Lisboa для программы CML, даже если вы ежедневно ездите в Lisboa. Подача идёт в Câmara того муниципалитета, где у вас адрес.' }
      ]
    },
    {
      id: 'porto-cascais',
      title: 'Porto и Cascais: похожая логика, другие карты',
      content: [
        { kind: 'substeps', items: [
          { id: 'porto', title: 'Porto: Andante 65+', content: [
            { kind: 'paragraph', text: 'В Porto бесплатный проезд для 65+ завязан на Município do Porto и систему Andante. Обычно требуется быть резидентом Porto и иметь персонализированную карту Andante или муниципальный Cartão Porto, если программа оформляется через него.' },
            { kind: 'checklist', items: [
              'Проверьте на сайте Câmara Municipal do Porto актуальное название программы для 65+.',
              'Подготовьте NIF, документ личности, подтверждение адреса в Porto и фото, если нужна новая карта.',
              'Если уже есть Andante personalizado, уточните, можно ли привязать льготу к существующей карте.',
              'Если адрес в Vila Nova de Gaia, Matosinhos, Maia или Gondomar — это другой município; льгота Porto может не применяться.'
            ] }
          ] },
          { id: 'cascais', title: 'Cascais: Viver Cascais / MobiCascais 60+', content: [
            { kind: 'paragraph', text: 'Cascais — отдельный пример: там льготы для муниципального транспорта часто начинаются с 60+, а не с 65+. Доступ оформляется через экосистему Viver Cascais / MobiCascais и привязан к резидентству, работе или учёбе в Cascais — конкретная категория влияет на тариф.' },
            { kind: 'checklist', items: [
              'Создайте или обновите профиль Viver Cascais.',
              'Подтвердите адрес в concelho de Cascais.',
              'Проверьте, относится ли бесплатность к автобусам MobiCascais и какие маршруты включены.',
              'Если вы живёте в Lisboa, но ездите в Cascais, льгота Cascais для резидентов обычно не подойдёт.'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'documents',
      title: 'Документы для заявки',
      content: [
        { kind: 'paragraph', text: 'Точный список зависит от Câmara Municipal, но у иностранца обычно просят стандартный набор. Лучше иметь и PDF-копии, и оригиналы: в муниципальных balcões часто проще показать всё сразу, чем спорить о формате.' },
        { kind: 'checklist', items: [
          'Документ личности: ВНЖ, Cartão de Cidadão гражданина ЕС, паспорт + действующий статус пребывания.',
          'NIF.',
          'Подтверждение возраста: обычно видно в документе личности.',
          'Подтверждение адреса в нужном município: certidão de domicílio fiscal из Portal das Finanças, atestado de residência от Junta de Freguesia, contrato de arrendamento или счёт коммунальных услуг — что принимает конкретная Câmara.',
          'Номер транспортной карты: navegante personalizada в Lisboa, Andante в Porto, Viver Cascais/MobiCascais в Cascais.',
          'Фотография, если оформляется новая персональная карта.',
          'Email и телефон для уведомлений.',
          'CMD или доступ к Portal das Finanças полезны, если заявка подаётся онлайн.'
        ] },
        { kind: 'warning', text: 'Atestado de residência от Junta de Freguesia не всегда заменяет налоговый адрес. Некоторые программы проверяют именно domicílio fiscal в Finanças. Если вы переехали, сначала обновите адрес в Finanças, иначе Câmara может отказать.' }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'Как подать заявку без лишних кругов',
      content: [
        { kind: 'checklist', items: [
          '1. Определите свой município по адресу проживания, а не по ближайшей станции метро.',
          '2. Откройте сайт Câmara Municipal и найдите раздел Mobilidade, Transportes, Passe gratuito, 65+ или Apoio à mobilidade.',
          '3. Проверьте, нужна ли сначала транспортная карта. В Lisboa без navegante personalizada льготу обычно некуда записать.',
          '4. Соберите документы и сделайте PDF/фото в хорошем качестве.',
          '5. Подайте онлайн, если есть форма; иначе запишитесь или идите в balcão da Câmara / Espaço Cidadão / Loja do Munícipe.',
          '6. Дождитесь подтверждения. Не покупайте дорогой месячный passe заранее, если срок ответа короткий, но учитывайте, что одобрение не всегда мгновенное.',
          '7. После одобрения активируйте или загрузите passe на карту в канале оператора: терминал, касса, Multibanco или приложение, если поддерживается.',
          '8. Каждый месяц проверяйте, что бесплатный passe действительно загружен: валидатор должен принимать карту без ошибки.'
        ] },
        { kind: 'paragraph', text: 'Если кассир Metro/Carris/Andante говорит “это не у нас”, он может быть прав: транспортный оператор обслуживает карту, но право на бесплатность подтверждает Câmara Municipal. В спорной ситуации просите письменное указание, где именно оформить municipal benefit.' }
      ]
    },
    {
      id: 'edge-cases',
      title: 'Частые ловушки для экспатов',
      content: [
        { kind: 'checklist', items: [
          'Вы только переехали и ещё не обновили адрес в Finanças — сначала смените domicílio fiscal.',
          'Вы живёте в пригороде Lisboa, но хотите льготу CML — нужна программа вашего município, не Lisboa.',
          'У вас временная виза D7/D8/D1, но нет ВНЖ — некоторые Câmara принимают законное проживание и адрес, другие требуют более устойчивый документ; проверяйте заранее.',
          'У вас есть обычная анонимная карта — для льгот почти всегда нужна персонализированная карта с именем и фото.',
          'Вы пенсионер по возрасту в другой стране, но вам 64 — в Lisboa/Porto возрастной порог 65+, статус иностранной пенсии сам по себе не помогает.',
          'В Cascais возрастная логика может быть мягче — 60+, но только по правилам Cascais и для соответствующих категорий.',
          'Льгота может не покрывать поезда дальнего следования CP, Alfa Pendular, Intercidades, такси, Bolt/Uber и туристические маршруты.',
          'Муниципальные программы меняют бюджетные условия ежегодно; перед продлением проверяйте сайт Câmara.'
        ] },
        { kind: 'warning', text: 'Не передавайте карту другому человеку. Персональные navegante/Andante/MobiCascais карты проверяются контролёрами; использование чужой льготной карты может привести к штрафу и блокировке льготы.' }
      ]
    }
  ],
  costs: [
    { label: 'Оформление персональной карты navegante / Lisboa Viva', amountEURMin: 7, amountEURMax: 12, note: 'Обычно платится один раз за выпуск карты; срочный выпуск дороже. Сам passe для одобренных 65+ Lisboa — 0 €.' },
    { label: 'Персональная карта Andante', amountEURMin: 6, amountEURMax: 12, note: 'Цена зависит от типа и срочности выпуска; бесплатность касается месячного проезда после одобрения Município do Porto.' },
    { label: 'Муниципальная льгота 65+ / 60+', amountEUR: 0, note: 'Если Câmara одобрила заявку, месячный проезд по включённой сети оплачивается муниципалитетом.' }
  ],
  sources: [
    { title: 'Câmara Municipal de Lisboa — mobilidade e passes gratuitos', url: 'https://www.cm-lisboa.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Metropolitano de Lisboa — cartões, passes e rede navegante', url: 'https://www.metrolisboa.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Câmara Municipal do Porto — transportes e apoio à mobilidade', url: 'https://www.cm-porto.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Câmara Municipal de Cascais — MobiCascais e Viver Cascais', url: 'https://www.cascais.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
