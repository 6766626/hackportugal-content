export default {
  editorialVoice: 'hackportugal',
  id: 'lisboa-card-residente',
  categoryId: 'daily_life',
  title: 'Cartão Lisboa — резидентская карта Лиссабона со скидками',
  tldr: 'Cartão Lisboa — не туристическая Lisboa Card, а муниципальная карта/программа Câmara Municipal de Lisboa для тех, кто связан с городом: живёт, учится или работает в Lisboa. В 2026 она используется как единая точка доступа к скидкам и льготам на культуру, спорт, муниципальные сервисы и партнёрские предложения. Ключевой документ для резидента — подтверждение адреса в freguesia: atestado de residência от Junta de Freguesia или эквивалентный адрес в Finanças/договоре.',
  tags: ['lisboa', 'скидки', 'cartão', 'junta'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'not-tourist-card',
      title: 'Не путайте с туристической Lisboa Card',
      content: [
        { kind: 'paragraph', text: 'В Лиссабоне есть туристическая Lisboa Card — проездной и музейный pass для гостей на 24/48/72 часа. Cartão Lisboa — другая логика: муниципальная карта для людей, которые регулярно живут, учатся или работают в Lisboa и хотят получать городские льготы.' },
        { kind: 'paragraph', text: 'В 2026 городские льготные программы CML постепенно сводятся к цифровым каналам Câmara Municipal de Lisboa: личный кабинет, муниципальные порталы, приложения и проверка адреса/статуса. Поэтому главное — доказать связь с городом, а не купить карту как турист.' },
        { kind: 'checklist', items: [
          'Cartão Lisboa — для резидентов и связанных с городом пользователей, а не для туристов на 2 дня',
          'Lisboa Card — коммерческий туристический pass с фиксированной ценой и сроком действия',
          'Cartão Lisboa может давать доступ к муниципальным скидкам, акциям и партнёрским преимуществам',
          'Льготы зависят от программы: cultura, desporto, mobilidade, comércio local, eventos',
          'Для многих льгот важна freguesia проживания, а не просто адрес в районе Grande Lisboa',
          'Если вы живёте в Oeiras, Amadora, Almada, Loures или Cascais — это уже не Município de Lisboa'
        ] }
      ]
    },
    {
      id: 'eligibility',
      title: 'Кто обычно может претендовать',
      content: [
        { kind: 'paragraph', text: 'Базовый критерий — подтверждённая связь с Município de Lisboa. Самый понятный путь для экспата — быть residente в одной из freguesias Lisboa и иметь документ, где это видно.' },
        { kind: 'checklist', items: [
          'Резидент с адресом в Lisboa: contrato de arrendamento, recibos de renda, conta de água/luz/internet или atestado de residência',
          'Иностранец с ВНЖ или визой D1-D8, если фактически живёт в Lisboa и может подтвердить адрес',
          'Гражданин ЕС с Certificado de Registo de Cidadão da União Europeia и адресом в Lisboa',
          'Студент учебного заведения в Lisboa — если конкретная льгота допускает estudantes',
          'Работник компании в Lisboa — если конкретная программа допускает trabalhadores',
          'Несовершеннолетние — обычно через родителя/опекуна и подтверждение household',
          'Пенсионеры, молодёжь, люди с инвалидностью или низким доходом — могут иметь дополнительные муниципальные льготы, но по отдельным правилам'
        ] },
        { kind: 'warning', text: 'Не считайте, что NIF с адресом в Lisboa автоматически даёт все скидки. Для части муниципальных льгот CML или партнёр может запросить atestado de residência от Junta de Freguesia, comprovativo de morada, proof of enrollment/work или другой документ.' }
      ]
    },
    {
      id: 'documents',
      title: 'Документы: что подготовить заранее',
      content: [
        { kind: 'paragraph', text: 'Самый частый стоп-фактор у экспатов — адрес. В Португалии “я здесь живу” обычно нужно подтвердить документом, а не устным объяснением. Для Lisboa это особенно важно: район в бытовом смысле и административный Município могут не совпадать.' },
        { kind: 'checklist', items: [
          'Документ личности: паспорт, Cartão de Cidadão, ВНЖ или EU registration certificate',
          'NIF — желательно с актуальным morada fiscal в Finanças',
          'Comprovativo de morada: договор аренды, recibo de renda, счёт за коммунальные услуги или банковская выписка с адресом',
          'Atestado de residência от Junta de Freguesia — самый надёжный вариант, если вас просят доказать проживание',
          'Для студентов: declaração de matrícula или cartão de estudante',
          'Для работников: declaração da entidade empregadora или contrato de trabalho с местом работы в Lisboa',
          'Для детей: documento do menor + документ родителя/опекуна + подтверждение адреса семьи',
          'Email и португальский номер телефона — часто нужны для регистрации в цифровых сервисах',
          'Chave Móvel Digital (CMD) — не всегда обязательна, но сильно упрощает вход в государственные и муниципальные порталы'
        ] }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'Как оформить или активировать',
      content: [
        { kind: 'paragraph', text: 'Единого “офиса Cartão Lisboa для всех случаев” лучше не предполагать: CML меняет цифровые сервисы, а отдельные льготы могут оформляться через сайты, balcões municipais, Junta de Freguesia, библиотеки, спорткомплексы или партнёров. Начинайте с cm-lisboa.pt и страницы конкретной льготы.' },
        { kind: 'substeps', items: [
          {
            id: 'check-cml',
            title: '1. Найдите актуальную страницу на cm-lisboa.pt',
            content: [
              { kind: 'paragraph', text: 'Ищите “Cartão Lisboa”, “Lisboa Pessoa”, “descontos munícipes”, “cultura”, “desporto” или название конкретного сервиса. Проверяйте дату публикации и условия: льготы могут быть сезонными.' }
            ]
          },
          {
            id: 'prepare-proof',
            title: '2. Подтвердите адрес или связь с городом',
            content: [
              { kind: 'paragraph', text: 'Если в условиях написано residente/munícipe, подготовьте atestado de residência или другой comprovativo de morada. Если написано estudante/trabalhador, нужен документ от университета или работодателя.' }
            ]
          },
          {
            id: 'submit',
            title: '3. Подайте заявку онлайн или в balcão',
            content: [
              { kind: 'paragraph', text: 'Часть сервисов оформляется онлайн, часть — лично. При личном визите берите оригиналы и PDF/фото документов на телефоне: в Португалии часто просят отправить файл на email прямо на месте.' }
            ]
          },
          {
            id: 'use-benefits',
            title: '4. Показывайте карту/QR/доказательство при покупке',
            content: [
              { kind: 'paragraph', text: 'Скидка обычно не применяется задним числом. Покажите карту, QR-код, email-подтверждение или документ резидента до оплаты билета, абонемента или услуги.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'where-useful',
      title: 'Где это реально полезно',
      content: [
        { kind: 'paragraph', text: 'Ценность Cartão Lisboa и связанных программ — не в одной большой скидке, а в наборе мелких городских преимуществ. Для семьи или активного пользователя культурных и спортивных объектов экономия может быть заметной.' },
        { kind: 'checklist', items: [
          'Cultura: музеи, театры, выставки, муниципальные мероприятия и библиотеки',
          'Desporto: бассейны, pavilhões, municipal sports facilities, занятия для детей и взрослых',
          'Juventude: молодёжные программы, мастер-классы, городские активности',
          'Séniores: льготы и активности для пожилых резидентов',
          'Famílias: семейные мероприятия и возможные скидки на детские активности',
          'Mobilidade: отдельные городские инициативы, но не путайте с обычным Navegante',
          'Comércio local: партнёрские скидки у локального бизнеса, если программа активна',
          'BIP/ZIP: это не скидочная карта, а муниципальная программа для приоритетных районов и местных проектов; полезна тем, кто участвует в associação/инициативах района'
        ] },
        { kind: 'warning', text: 'Транспортные льготы в Lisboa часто регулируются отдельными правилами: Navegante, Lisboa Viva, школьные/молодёжные/пенсионные passes. Cartão Lisboa сам по себе не заменяет транспортную карту и не гарантирует бесплатный проезд.' }
      ]
    },
    {
      id: 'expat-mistakes',
      title: 'Типичные ошибки экспатов',
      content: [
        { kind: 'checklist', items: [
          'Покупают туристическую Lisboa Card и думают, что это резидентская карта',
          'Живут в пригороде, но пытаются оформить льготу Município de Lisboa',
          'Не обновили morada fiscal в Finanças после переезда',
          'Приносят только NIF без подтверждения адреса',
          'Не знают свою Junta de Freguesia и идут в неправильное отделение',
          'Пытаются получить скидку после оплаты билета или абонемента',
          'Ожидают одинаковые условия во всех музеях/спорткомплексах — у партнёров могут быть разные правила',
          'Не проверяют срок действия льготы: некоторые программы ежегодные или сезонные',
          'Игнорируют отдельные программы для студентов, детей, séniores и людей с deficiência'
        ] },
        { kind: 'paragraph', text: 'Практичный порядок: сначала определите, вы точно в Município de Lisboa или в соседнем município; затем получите нормальный comprovativo de morada; потом проверяйте конкретные скидки на cm-lisboa.pt.' }
      ]
    }
  ],
  costs: [
    { label: 'Проверка условий и регистрация на муниципальном сайте', amountEUR: 0, note: 'Обычно бесплатно; платной является конкретная услуга, билет или абонемент со скидкой.' },
    { label: 'Atestado de residência в Junta de Freguesia', amountEURMin: 0, amountEURMax: 10, note: 'Тариф зависит от freguesia и срочности; некоторые справки для социальных целей могут быть бесплатными.' },
    { label: 'Туристическая Lisboa Card', amountEURMin: 31, amountEURMax: 62, note: 'Это отдельный туристический продукт на 24/48/72 часа (взрослый тариф 2026 года); не является Cartão Lisboa для резидентов.' }
  ],
  sources: [
    { title: 'Câmara Municipal de Lisboa — официальный портал муниципальных услуг и программ', url: 'https://www.cm-lisboa.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Câmara Municipal de Lisboa — freguesias и контакты городских служб', url: 'https://www.cm-lisboa.pt/municipio/freguesias', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Câmara Municipal de Lisboa — cultura, desporto и городские инициативы', url: 'https://www.cm-lisboa.pt/viver', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Turismo de Lisboa — туристическая Lisboa Card для сравнения', url: 'https://www.visitlisboa.com/en/p/lisboa-card', kind: 'company', language: 'en', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
