export default {
  editorialVoice: 'hackportugal',
  id: 'startup-visa',
  categoryId: 'residence_permit',
  title: 'Startup Visa — для основателей сертифицированных стартапов',
  tldr: 'Startup Visa — для основателей инновационных стартапов. Требует одобрения одного из ~94 сертифицированных инкубаторов Португалии (список IAPMEI 2026) + жизнеспособного бизнес-плана. На один проект — максимум 5 предпринимателей. ВНЖ первично на 2 года. IFICI НЕ автоматический: зависит от Portuguese tax-residence status, eligible activity и своевременной регистрации. Подача через портал Startup Visa + предпринимательская residence visa в консульстве.',
  audience: { citizenships: ['thirdCountry'] },
  tags: ['startup', 'внж', 'стартап', 'инновации'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'overview',
      title: 'Что это',
      content: [
        { kind: 'paragraph', text: 'Startup Visa = резидентская виза для основателей стартапов с технологическим или инновационным продуктом. Управляется IAPMEI совместно с Startup Portugal.' },
        { kind: 'paragraph', text: 'На консульском этапе это фактически предпринимательская residence visa / D2-подтип для Startup Visa: нужен не просто бизнес-план, а предварительное одобрение проекта IAPMEI и договор/декларация сертифицированного инкубатора (Beta-i, Startup Lisboa, Fábrica de Startups и др.) о том, что ваш проект ориентирован на инновации.' }
      ]
    },
    {
      id: 'requirements',
      title: 'Требования',
      content: [
        { kind: 'checklist', items: [
          'Инновационный технологический продукт или услуга',
          'Бизнес-план на английском или португальском',
          'Потенциал создать квалифицированные рабочие места и через 5 лет достичь оборота > €325 000/год и/или стоимости активов > €325 000; оценка учитывает инновационность, масштабируемость, рыночный потенциал и качество команды',
          'Одобрение от сертифицированного инкубатора',
          'На один проект — максимум 5 предпринимателей (co-founders могут подать вместе; остальные сотрудники идут по другим визовым основаниям)',
          'Собственные средства: заявитель — 12× IAS = €6 445,56 (IAS 2026 = €537,13); супруг/партнёр — +12× 50% IAS = €3 222,78; ребёнок — +12× 30% IAS = €1 933,67 на каждого',
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
            { kind: 'paragraph', text: 'С подтверждением инкубатора + бизнес-планом + финансовыми документами. Ориентир: около 30 рабочих дней после полной подачи, но на практике сроки могут растягиваться из-за доработок, инкубатора или backlog.' }
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
          'Возможный доступ к IFICI: 20% IRS только на eligible professional income при выполнении условий режима и отдельной регистрации; НЕ распространяется автоматически на все доходы',
          'Упрощённый визовый путь (при одобрении IAPMEI)',
          'Co-founders могут подать вместе, НО обычно максимум 5 предпринимателей на один проект; остальные сотрудники идут по другим визовым основаниям'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Заявка IAPMEI', amountEUR: 0 },
    { label: 'Инкубатор (программа)', amountEURMin: 0, amountEURMax: 5000, note: 'многие бесплатные, некоторые взимают плату' },
    { label: 'Консульская виза', amountEUR: 90 },
    { label: 'AIMA — receção e análise do pedido', amountEUR: 134.28, note: 'тариф с 01.03.2026 (25% IAS при IAS 2026 = €537,13)' },
    { label: 'AIMA — emissão do título de residência temporário', amountEUR: 322.28, note: 'тариф с 01.03.2026 (60% IAS); точная строка тарифа зависит от типа разрешения' }
  ],
  timelineDaysMin: 90,
  timelineDaysMax: 180,
  sources: [
    { title: 'Startup Visa — официальный портал IAPMEI', url: 'https://startupvisa.iapmei.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IAPMEI — Startup Portugal', url: 'https://www.iapmei.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Vistos MNE — Startup Visa', url: 'https://vistos.mne.gov.pt/pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}