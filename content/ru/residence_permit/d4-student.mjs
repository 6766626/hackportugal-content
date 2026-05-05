export default {
  editorialVoice: 'hackportugal',
  id: 'd4-student',
  categoryId: 'residence_permit',
  title: 'Виза D4 (студент) — бакалавриат, магистратура, аспирантура',
  tldr: 'D4 — студенческая виза для поступивших в португальский вуз или на языковые курсы длительностью более 90 дней. Даёт ВНЖ на срок обучения. Право на работу до 20 часов в неделю. После диплома возможен переход на D3 или визу Procuro Trabalho для поиска работы до 1 года.',
  audience: { citizenships: ['thirdCountry', 'cplp'] },
  tags: ['d4', 'студент', 'внж', 'обучение'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'requirements',
      title: 'Требования',
      content: [
        { kind: 'checklist', items: [
          'Зачисление в аккредитованный вуз или языковой центр (не менее 6 месяцев по программе)',
          'Подтверждение оплаты за первый год обучения',
          'Доказательство средств на жизнь (около € 820/мес × 12 мес для граждан не из CPLP)',
          'Жильё в Португалии (договор аренды или общежитие)',
          'Медстраховка',
          'Справка о несудимости',
          'Для граждан CPLP — упрощённый процесс'
        ]}
      ]
    },
    {
      id: 'apply',
      title: 'Как поступить',
      content: [
        { kind: 'substeps', items: [
          { id: 'a1', title: '1. Выбрать программу', content: [
            { kind: 'paragraph', text: 'Через DGES для государственных вузов (www.dges.gov.pt), напрямую через университеты — для частных. Для иностранцев есть специальный международный конкурс.' }
          ]},
          { id: 'a2', title: '2. Нострификация школьного аттестата', content: [
            { kind: 'paragraph', text: 'Для бакалавриата требуется признание равнозначности аттестата. Через DGES или университет.' }
          ]},
          { id: 'a3', title: '3. Подать документы в университет', content: [
            { kind: 'paragraph', text: 'Сроки: для государственных — июль–август, для частных — круглый год в некоторых программах.' }
          ]},
          { id: 'a4', title: '4. Получить письмо о зачислении', content: [
            { kind: 'paragraph', text: 'Нужно для визы D4.' }
          ]},
          { id: 'a5', title: '5. Подать на визу D4', content: [
            { kind: 'paragraph', text: 'В консульстве, с зачислением, подтверждением финансов и страховкой.' }
          ]}
        ]}
      ]
    },
    {
      id: 'rights',
      title: 'Права по D4',
      content: [
        { kind: 'checklist', items: [
          'Работа до 20 часов в неделю (полный день в каникулы)',
          'Регистрация в SNS (бесплатная медицина)',
          'Продление на срок обучения',
          'Переход на D3 (работа) после диплома без выезда',
          'После диплома — виза Procuro Trabalho на 1 год для поиска работы'
        ]}
      ]
    },
    {
      id: 'cplp-note',
      title: 'Граждане CPLP',
      audience: { citizenships: ['cplp'] },
      content: [
        { kind: 'paragraph', text: 'Бразильцы могут поступать напрямую в некоторые вузы через ENEM (бразильский экзамен) и получить ВНЖ CPLP вместо D4.' },
        { kind: 'paragraph', text: 'Прочие граждане CPLP: по соглашению доступны образовательные программы обмена. Проверяйте на сайте нужного вуза.' }
      ]
    }
  ],
  costs: [
    { label: 'Консульская виза', amountEUR: 90 },
    { label: 'Государственный университет', amountEURMin: 700, amountEURMax: 7000, note: 'в год, для иностранцев' },
    { label: 'Частный университет', amountEURMin: 3500, amountEURMax: 15000, note: 'в год' },
    { label: 'Языковой курс (подготовка к CIPLE)', amountEURMin: 500, amountEURMax: 2000 }
  ],
  timelineDaysMin: 60,
  timelineDaysMax: 120,
  sources: [
    { title: 'DGES — Direcção-Geral do Ensino Superior', url: 'https://www.dges.gov.pt/pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Vistos MNE — Visto de Estudo', url: 'https://vistos.mne.gov.pt/pt/vistos-nacionais/informacao-geral/tipo-de-visto', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — Estudantes estrangeiros', url: 'https://aima.gov.pt/pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 180
}