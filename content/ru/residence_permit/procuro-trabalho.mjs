export default {
  editorialVoice: 'hackportugal',
  id: 'procuro-trabalho',
  categoryId: 'residence_permit',
  title: 'Виза Procuro Trabalho — поиск работы в Португалии',
  tldr: 'Procuro Trabalho — виза на 120 дней (+60 дней продления) для поиска работы. Подтверждение средств 4× IAS на 4 месяца ≈ 2 148,52 € (IAS 2026 = 537,13 €/мес) + обратный билет. Популярна для выпускников португальских вузов и высококвалифицированных специалистов. После найма — переход на D3 изнутри страны.',
  audience: { citizenships: ['thirdCountry'] },
  tags: ['procuro trabalho', 'поиск работы', 'виза'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'who',
      title: 'Кто подходит',
      content: [
        { kind: 'checklist', items: [
          'Высококвалифицированный специалист (образование + опыт)',
          'Выпускник португальского вуза (после D4 можно остаться на 1 год)',
          'Кандидат на позиции с высоким спросом (ИТ, инженерия, медицина, исследования и разработки)',
          'Поддержка работодателя НЕ обязательна'
        ]}
      ]
    },
    {
      id: 'requirements',
      title: 'Требования',
      content: [
        { kind: 'checklist', items: [
          'Доказательство средств на жизнь на 4 месяца (≈ 2 148,52 € = 4× IAS, 537,13 €/мес на 2026)',
          'Обратный билет или эквивалентное подтверждение',
          'Жильё в Португалии (бронирования / договор на 120 дней)',
          'Медстраховка на 120+ дней',
          'Справка о несудимости с апостилем',
          'Резюме + мотивационное письмо (рекомендуется)'
        ]}
      ]
    },
    {
      id: 'process',
      title: 'Процесс',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: '1. Подать в консульстве', content: [
            { kind: 'paragraph', text: 'Vistos.mne.gov.pt → Visto para Procura de Trabalho. Рассмотрение 15-60 дней.' }
          ]},
          { id: 'p2', title: '2. Въезд', content: [
            { kind: 'paragraph', text: 'Виза даёт 120 дней в Португалии. Нужно записаться в AIMA в течение этого срока.' }
          ]},
          { id: 'p3', title: '3. Приём в AIMA — временный ВНЖ', content: [
            { kind: 'paragraph', text: 'Получите ВНЖ на срок поиска работы (120 дней + продление 60 дней при необходимости).' }
          ]},
          { id: 'p4', title: '4. Поиск работы', content: [
            { kind: 'paragraph', text: 'LinkedIn, Landing.Jobs, ITJobs.pt, NetJobs, обращение напрямую к компаниям. 180 дней — реальный срок.' }
          ]},
          { id: 'p5', title: '5. Нашли работу — переход на D3/D1', content: [
            { kind: 'paragraph', text: 'С контрактом на руках — подача на D3 (квалифицированный специалист) или D1 (обычный работник) изнутри страны без выезда. В AIMA.' }
          ]},
          { id: 'p6', title: '6. Не нашли — выезд', content: [
            { kind: 'paragraph', text: 'После 180 дней без контракта — обязательный выезд. Повторная подача возможна через 1 год.' }
          ]}
        ]}
      ]
    },
    {
      id: 'after-d4',
      title: 'Если вы заканчиваете учёбу по D4',
      content: [
        { kind: 'paragraph', text: 'Выпускники португальских вузов имеют УПРОЩЁННЫЙ доступ к Procuro Trabalho — подача внутри Португалии без консульства. Рекомендуется подать за 3-6 месяцев до окончания диплома.' }
      ]
    }
  ],
  costs: [
    { label: 'Консульская виза', amountEUR: 90 },
    { label: 'AIMA — приём + анализ', amountEUR: 133, note: 'с 01.03.2026' },
    { label: 'AIMA — временный ВНЖ (art. 75)', amountEUR: 307.20, note: 'с 01.03.2026' },
    { label: 'Страховка на 4 месяца', amountEURMin: 100, amountEURMax: 300 }
  ],
  timelineDaysMin: 30,
  timelineDaysMax: 90,
  sources: [
    { title: 'Vistos MNE — Visto para Procura de Trabalho', url: 'https://vistos.mne.gov.pt/pt/vistos-nacionais/informacao-geral/tipo-de-visto', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — Procura de Trabalho', url: 'https://aima.gov.pt/pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 23/2007 (DRE)', url: 'https://dre.pt/dre/legislacao-consolidada/lei/2007-34532975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 180
}