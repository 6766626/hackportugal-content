export default {
  editorialVoice: 'hackportugal',
  id: 'viver-cascais-card',
  categoryId: 'daily_life',
  title: 'Карта Viver Cascais — льготы для резидентов муниципалитета',
  tldr: 'Viver Cascais — муниципальная карта для жителей муниципалитета Кашкаиш (Cascais, Estoril, Alcabideche, São Domingos, Parede). Даёт скидки 20–50% на транспорт (MobiCascais), парковку, бассейны, спортивные клубы, культурные мероприятия и библиотеки. Бесплатная, оформляется по месту проживания: нужен Atestado de Residência от Junta de Freguesia. Подать заявку можно онлайн или в Loja Cascais.',
  tags: ['cascais', 'viver', 'карта', 'льготы'],
  estimatedReadMinutes: 3,
  steps: [
    {
      id: 'who',
      title: 'Кто может получить',
      content: [
        { kind: 'checklist', items: [
          'Жители муниципалитета Кашкаиш с Atestado de Residência (проживание ≥ 30 дней)',
          'Возраст неважен — дети с 6 лет могут иметь свою карту',
          'Связанные с Кашкаишом работники и студенты также могут иметь профильные категории MobiCascais/Viver Cascais — проверяйте текущие категории на mobicascais.pt и cascais.pt',
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
              'Бесплатные автобусы MobiCascais (кроме M-Line в Эшториле)',
              'Бесплатные велосипеды MobiCascais Bikes (до 45 минут в день)',
              'Бесплатный проезд на шаттл-автобусе MobiPark между парковками и пляжами в сезон'
            ]}
          ]},
          { id: 'b2', title: '🅿️ Парковка', content: [
            { kind: 'checklist', items: [
              'Dístico de residente — первый год бесплатно',
              'Далее € 10–30 в год в зависимости от зоны',
              'В центре Cascais и Estoril платная зона дешевле для резидентов'
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
          { id: 'g1', title: '1. Оформить Atestado de Residência', content: [
            { kind: 'paragraph', text: 'В Junta de Freguesia по месту жительства (Cascais, Carcavelos, Parede, Estoril и т.д.). Нужен договор аренды / документ о собственности + Cartão de Cidadão/ВНЖ. Стоимость € 5–15.' }
          ]},
          { id: 'g2', title: '2. Подать заявку на Viver Cascais', content: [
            { kind: 'checklist', items: [
              'Онлайн: vivercascais.cascais.pt → Registar',
              'Или лично: Loja Cascais (Av. dos Combatentes 8-10) / Loja Parede',
              'Документы: Atestado de Residência, Cartão de Cidadão/ВНЖ, фото (можно с телефона), электронная почта',
              'Регистрация бесплатна',
              'Карта приходит по почте за 7–14 дней, либо можно заказать получение в Loja',
              'До получения пластиковой карты работает виртуальная карта в приложении MobiCascais'
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
    { label: 'Карта Viver Cascais', amountEUR: 0 },
    { label: 'Atestado de Residência от Junta de Freguesia', amountEURMin: 5, amountEURMax: 15 }
  ],
  sources: [
    { title: 'Viver Cascais — официальный портал', url: 'https://vivercascais.cascais.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'MobiCascais — приложение и сервисы', url: 'https://www.mobicascais.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Câmara Municipal de Cascais', url: 'https://www.cascais.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}