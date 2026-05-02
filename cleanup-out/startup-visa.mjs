export default {
  editorialVoice: 'hackportugal',
  id: 'startup-visa',
  categoryId: 'residence_permit',
  title: 'Startup Visa — для основателей сертифицированных стартапов',
  tldr: 'Startup Visa — для основателей инновационных стартапов. Требует одобрения одного из ~94 сертифицированных инкубаторов Португалии (список IAPMEI 2026) + жизнеспособного бизнес-плана. Даёт ВНЖ на 2 года, доступ к IFICI. Подача через портал Startup Visa + консульская виза.',
  audience: { citizenships: ['thirdCountry'] },
  tags: ['startup', 'внж', 'стартап', 'инновации'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'overview',
      title: 'Что это',
      content: [
        { kind: 'paragraph', text: 'Startup Visa = резидентская виза для основателей стартапов с технологическим или инновационным продуктом. Управляется IAPMEI совместно с Startup Portugal.' },
        { kind: 'paragraph', text: 'Главное отличие от D2: требуется подтверждение ОТ ОДНОГО ИЗ СЕРТИФИЦИРОВАННЫХ инкубаторов (Beta-i, Startup Lisboa, Fábrica de Startups и др.) о том, что ваш проект ориентирован на инновации.' }
      ]
    },
    {
      id: 'requirements',
      title: 'Требования',
      content: [
        { kind: 'checklist', items: [
          'Инновационный технологический продукт или услуга',
          'Бизнес-план на английском или португальском',
          'Прогноз оборота ≥ € 325 000/год через 5 лет ИЛИ 10 рабочих мест ИЛИ высокотехнологичные НИОКР',
          'Одобрение от сертифицированного инкубатора',
          'Собственные средства ≥ € 6 445,56 (12 × IAS при € 537,13 на 2026) на жизнь заявителя + 50 % IAS за супруга, 30 % IAS за ребёнка',
          'Отсутствие судимостей',
          'Медицинская страховка'
        ]}
      ]
    },
    {
      id: 'process',
      title: 'Процесс',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: '1. Выбрать инкубатор из списка', content: [
            { kind: 'link', text: 'Список сертифицированных инкубаторов (~94 на 2026)', url: 'https://startupvisa.iapmei.pt/' }
          ]},
          { id: 's2', title: '2. Связаться с инкубатором и подать проект', content: [
            { kind: 'paragraph', text: 'У каждого инкубатора свой порядок оценки (презентации проекта, интервью, документы).' }
          ]},
          { id: 's3', title: '3. Подписать договор с инкубатором', content: [
            { kind: 'paragraph', text: 'Подтверждение приёма проекта от инкубатора = золотой ключ.' }
          ]},
          { id: 's4', title: '4. Подать заявку через портал Startup Visa', content: [
            { kind: 'paragraph', text: 'С подтверждением инкубатора + бизнес-планом + финансовыми документами. IAPMEI рассматривает 30-60 дней.' }
          ]},
          { id: 's5', title: '5. После одобрения — виза в консульстве', content: [
            { kind: 'paragraph', text: 'С одобрением IAPMEI визовая процедура быстрее (30-60 дней).' }
          ]},
          { id: 's6', title: '6. Въезд + AIMA', content: [
            { kind: 'paragraph', text: 'Стандартно: ВНЖ, биометрия, регистрация компании.' }
          ]}
        ]}
      ]
    },
    {
      id: 'benefits',
      title: 'Преимущества',
      content: [
        { kind: 'checklist', items: [
          'Поддержка инкубатора (ментор, коворкинг, сеть контактов)',
          'Доступ к IFICI (налог 20 %)',
          'Упрощённый визовый путь (при одобрении IAPMEI)',
          'Возможность привезти команду (сооснователи могут подать вместе)'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Заявка IAPMEI', amountEUR: 0 },
    { label: 'Инкубатор (программа)', amountEURMin: 0, amountEURMax: 5000, note: 'многие бесплатные, некоторые взимают плату' },
    { label: 'Консульская виза', amountEUR: 90 },
    { label: 'AIMA — приём + рассмотрение', amountEUR: 133, note: 'с 01.03.2026' },
    { label: 'AIMA — ВНЖ (art. 75)', amountEUR: 307.20, note: 'с 01.03.2026' }
  ],
  timelineDaysMin: 90,
  timelineDaysMax: 180,
  sources: [
    { title: 'Startup Visa — официальный портал IAPMEI', url: 'https://startupvisa.iapmei.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IAPMEI — Startup Portugal', url: 'https://www.iapmei.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Vistos MNE — Startup Visa', url: 'https://vistos.mne.gov.pt/pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 180
}