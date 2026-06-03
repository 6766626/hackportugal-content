export default {
  editorialVoice: 'hackportugal',
  id: 'viver-cascais-card',
  categoryId: 'daily_life',
  title: 'Карта Viver Cascais — льготы для резидентов муниципалитета',
  tldr: 'Viver Cascais — муниципальная карта для жителей муниципалитета Кашкаиш (Cascais, Estoril, Alcabideche, São Domingos, Parede). Бесплатный проезд на муниципальных автобусах MobiCascais, до 180 минут бесплатной парковки в день, скидки на бассейны, спортивные клубы, культурные мероприятия и библиотеки. Цифровая карта бесплатна; пластиковая стоит € 7 и действует 5 лет. Оформляется по месту проживания: подойдёт любой документ, подтверждающий проживание или налоговый адрес в муниципалитете (счёт за коммуналку, справка о налоговом адресе, Atestado de Residência от Junta de Freguesia и т. п.). Подать заявку можно онлайн в MyCascais или в Loja Cascais.',
  tags: ['cascais', 'viver', 'карта', 'льготы'],
  estimatedReadMinutes: 3,
  steps: [
    {
      id: 'who',
      title: 'Кто может получить',
      content: [
        { kind: 'checklist', items: [
          'Жители муниципалитета Кашкаиш, способные подтвердить проживание или налоговый адрес в муниципалитете',
          'Возраст неважен — дети с 6 лет могут иметь свою карту',
          'Связанные с Кашкаишом работники и студенты тоже подходят (по справке с работы или из учебного заведения) — категории смотрите на mobi.cascais.pt и cascais.pt',
          'Иностранцы с ВНЖ — подходят'
        ]}
      ]
    },
    {
      id: 'benefits',
      title: 'Что даёт',
      content: [
        { kind: 'substeps', items: [
          { id: 'b1', title: '🚌 Транспорт MobiCascais', content: [
            { kind: 'checklist', items: [
              'Бесплатный проезд на муниципальных автобусах MobiCascais (линии M01–M41, внутри муниципалитета) — нужно авторизоваться в приложении MobiCascais',
              'Бесплатные электровелосипеды — 30 минут в день на первой поездке (через приложение Bird)',
              'Бесплатный проезд на шаттл-автобусе MobiPark между парковками и пляжами в сезон'
            ]}
          ]},
          { id: 'b2', title: '🅿️ Парковка', content: [
            { kind: 'checklist', items: [
              'До 180 минут бесплатной парковки в день в зонах с ограничением времени (нужна предварительная подписка на viver.cascais.pt и подтверждение налогового адреса в муниципалитете)',
              '180 минут не накапливаются, обновляются каждый день, их можно делить между авто, оформленными на владельца карты',
              'В синих зонах парковка бесплатна в низкий сезон (1 ноября — 30 апреля)'
            ]}
          ]},
          { id: 'b3', title: '🏊 Спорт', content: [
            { kind: 'checklist', items: [
              'Муниципальные бассейны: скидка 30–50% на абонементы',
              'Теннисные корты, футбольные поля: скидка 20–40%',
              'Фитнес-залы в муниципальных центрах: льготные тарифы',
              'Марафоны Cascais / триатлоны — скидка на участие'
            ]}
          ]},
          { id: 'b4', title: '🎭 Культура и образование', content: [
            { kind: 'checklist', items: [
              'Библиотеки: бесплатный абонемент (читательская карта)',
              'Театры Casa das Histórias Paula Rego, Centro Cultural — скидки 30–50%',
              'Музеи муниципалитета: бесплатно для резидентов (обычно € 5–8)',
              'Детские кружки и курсы в Casas da Juventude — бесплатно'
            ]}
          ]},
          { id: 'b5', title: '🏥 Здоровье и соцуслуги', content: [
            { kind: 'checklist', items: [
              'Cascais Social Card — для пенсионеров и людей с инвалидностью, дополнительные льготы',
              'Бесплатные медобследования (мамография, холестерин, сахар) раз в год',
              'Помощь на дому для пенсионеров'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'how-get',
      title: 'Как получить',
      content: [
        { kind: 'substeps', items: [
          { id: 'g1', title: '1. Подготовить подтверждение проживания', content: [
            { kind: 'paragraph', text: 'Подойдёт любой документ не старше 3 месяцев: счёт за коммуналку (вода, свет, газ, телефон, ТВ), справка о налоговом адресе или о составе семьи из Finanças, Atestado de Residência от Junta de Freguesia и т. п. Отдельно оформлять Atestado необязательно. Если всё же берёте Atestado, он стоит € 5–15.' }
          ]},
          { id: 'g2', title: '2. Подать заявку на Viver Cascais', content: [
            { kind: 'checklist', items: [
              'Онлайн: сначала зарегистрируйтесь в MyCascais (my.cascais.pt/viver), затем запросите карту',
              'Или лично: Loja Cascais (Rua Manuel Joaquim Avelar, 118, piso -1), Loja Tires (Praça Fernando Lopes Graça, 156A) или стойка в CascaiShopping',
              'Документы: подтверждение проживания, Cartão de Cidadão/ВНЖ, фото (можно с телефона), электронная почта',
              'Цифровая карта бесплатна — после проверки данных доступна сразу в приложении MobiCascais (QR-код для проезда)',
              'Пластиковая карта необязательна: стоит € 7, действует 5 лет, приходит по почте или выдаётся в Loja',
              'Профиль нужно продлевать раз в 5 лет (резидентам — по подтверждению налогового адреса в муниципалитете)'
            ]}
          ]},
          { id: 'g3', title: '3. Скачать приложение MobiCascais', content: [
            { kind: 'paragraph', text: 'App Store / Google Play — MobiCascais. Вход по номеру карты Viver Cascais. Позволяет пользоваться транспортом, бронировать велосипеды, видеть расписание автобусов, платить за парковку.' }
          ]}
        ]}
      ]
    },
    {
      id: 'family',
      title: 'Для семьи',
      content: [
        { kind: 'checklist', items: [
          'Каждый член семьи получает свою карту (каждая — бесплатно)',
          'Для детей <12 лет карту оформляет один из родителей',
          'Для 12–18 лет — отдельная заявка подростка, но нужна подпись родителя',
          'Cartão Família Cascais — для семей с 3+ детьми, дополнительные льготы в магазинах-партнёрах'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Цифровая карта Viver Cascais', amountEUR: 0 },
    { label: 'Пластиковая карта Viver Cascais (необязательна, действует 5 лет)', amountEUR: 7 },
    { label: 'Atestado de Residência от Junta de Freguesia (необязательно)', amountEURMin: 5, amountEURMax: 15 }
  ],
  sources: [
    { title: 'Viver Cascais — оформление и продление (официальная страница)', url: 'https://www.cascais.pt/servico/viver-cascais-aderir-renovar', kind: 'official', language: 'pt', lastRetrieved: '2026-05-31' },
    { title: 'Cartão Viver Cascais — MobiCascais', url: 'https://mobi.cascais.pt/viver-cascais', kind: 'company', language: 'pt', lastRetrieved: '2026-05-31' },
    { title: '180 минут бесплатной парковки для резидентов — MobiCascais', url: 'https://mobi.cascais.pt/geral/180-minutos-de-estacionamento-gratuitos-para-residentes', kind: 'company', language: 'pt', lastRetrieved: '2026-05-31' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}