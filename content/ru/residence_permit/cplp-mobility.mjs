export default {
  editorialVoice: 'hackportugal',
  id: 'cplp-mobility',
  categoryId: 'residence_permit',
  title: 'ВНЖ по Соглашению о мобильности CPLP',
  tldr: 'Acordo de Mobilidade CPLP (соглашение о мобильности CPLP) — упрощённый путь для граждан Бразилии, Анголы, Мозамбика, Кабо-Верде, Гвинеи-Бисау, Сан-Томе, Восточного Тимора, Экваториальной Гвинеи. Для бразильцев: въезд без визы + подача на ВНЖ изнутри Португалии. Для остальных граждан CPLP: консульская виза обязательна после Lei 61/2025.',
  audience: { citizenships: ['cplp'] },
  tags: ['cplp', 'внж', 'бразилия', 'мобильность'],
  estimatedReadMinutes: 8,
  recentlyChangedAt: '2025-10-23',
  changeSummary: 'Lei 61/2025 (в силе с 23.10.2025) отменил Manifestação de Interesse и ужесточил правила для граждан CPLP, кроме бразильцев: теперь виза до въезда обязательна. Новый закон о гражданстве (01.04.2026, ждёт подписания президента Сегуру) увеличит стаж до гражданства с 5 до 7 лет для всех граждан CPLP.',
  variants: [
    {
      id: 'brazil',
      audience: { countryCodes: ['BR'] },
      tldr: 'Бразильцы: безвизовый въезд до 90 дней + подача на ВНЖ внутри страны в AIMA. Самый простой путь. Наличие португальского гражданства в семье ускоряет процесс.'
    },
    {
      id: 'other-cplp',
      audience: { countryCodes: ['AO', 'MZ', 'CV', 'GW', 'ST', 'TL', 'GQ'] },
      tldr: 'Ангола, Мозамбик, Кабо-Верде и другие страны CPLP: требуется консульская виза в Португалию ДО въезда. После въезда — подача на ВНЖ в AIMA. Lei 61/2025 запретил подачу через Manifestação de Interesse.'
    }
  ],
  steps: [
    {
      id: 'step-brazil',
      title: 'Путь для бразильцев',
      audience: { countryCodes: ['BR'] },
      content: [
        { kind: 'substeps', items: [
          { id: 'b1', title: '1. Въезд без визы', content: [
            { kind: 'paragraph', text: 'Бразильский паспорт даёт 90 дней в Шенгене. На границе указать цель въезда — проживание по мобильности CPLP.' }
          ]},
          { id: 'b2', title: '2. Получить NIF', content: [
            { kind: 'paragraph', text: 'Через Finanças лично (см. гайд "NIF EU/CPLP").' }
          ]},
          { id: 'b3', title: '3. Записаться в AIMA', content: [
            { kind: 'paragraph', text: 'Через portal-renovacoes.aima.gov.pt или по телефону 217 115 000. Выбрать тип "Acordo de Mobilidade CPLP".' }
          ]},
          { id: 'b4', title: '4. Подать документы', content: [
            { kind: 'checklist', items: [
              'Паспорт + копия',
              'NIF',
              'Подтверждение адреса в Португалии',
              'Подтверждение средств (контракт / выписки банка / письмо спонсора)',
              'Бразильская справка о несудимости с апостилем',
              'Фото 3х4'
            ]}
          ]},
          { id: 'b5', title: '5. Получить ВНЖ', content: [
            { kind: 'timeline', text: 'Обычно 30–90 дней. Карточка приходит по почте.' }
          ]}
        ]}
      ]
    },
    {
      id: 'step-other',
      title: 'Путь для других граждан CPLP (кроме Бразилии)',
      audience: { countryCodes: ['AO', 'MZ', 'CV', 'GW', 'ST', 'TL', 'GQ'] },
      content: [
        { kind: 'substeps', items: [
          { id: 'o1', title: '1. Консульская виза', content: [
            { kind: 'paragraph', text: 'Обратиться в португальское посольство или консульство в своей стране. Категория — мобильность CPLP или тип D по ситуации. Типы документов — см. vistos.mne.gov.pt.' }
          ]},
          { id: 'o2', title: '2. Въезд по визе', content: [
            { kind: 'paragraph', text: 'Виза даёт первичное право на въезд и подачу на ВНЖ в AIMA.' }
          ]},
          { id: 'o3', title: '3. NIF + NISS', content: [
            { kind: 'paragraph', text: 'Оформить сразу после въезда.' }
          ]},
          { id: 'o4', title: '4. Подача на ВНЖ CPLP в AIMA', content: [
            { kind: 'paragraph', text: 'Тот же процесс, что и для бразильцев, но с визой на руках.' }
          ]}
        ]}
      ]
    },
    {
      id: 'benefits',
      title: 'Преимущества ВНЖ CPLP',
      content: [
        { kind: 'checklist', items: [
          'Первичный ВНЖ на 1 год',
          'Продление на 2 года × 2 раза — итого 5 лет',
          'Свободная работа без отдельного разрешения на работу',
          'Возможность запросить гражданство после 5 лет (7 лет по ожидающему закону)',
          'Для бразильцев — «Estatuto de Igualdade» даёт некоторые политические и экономические права после 3 лет',
          'Упрощённый доступ к SNS и школам'
        ]}
      ]
    },
    {
      id: 'caveats',
      title: 'Важные оговорки на 2026',
      content: [
        { kind: 'warning', text: 'Manifestação de Interesse (подача без визы) отменена Lei 61/2025 — закон в силе с 23.10.2025. Приём новых заявок прекращён ещё с 03.06.2024 (Decreto-Lei 37-A/2024); 31.12.2025 — крайний срок переходного периода для уже поданных. Все процедуры теперь идут через AIMA либо через консульскую визу.' },
        { kind: 'warning', text: 'В AIMA большая очередь — записи могут быть на 2–4 месяца вперёд. Бронируйте время приёма заранее.' },
        { kind: 'paragraph', text: 'Обновления и актуальные сроки — официальный сайт AIMA (aima.gov.pt) и Vistos MNE (vistos.mne.gov.pt).' }
      ]
    }
  ],
  documents: [
    { title: 'Паспорт', note: 'действительный ≥ 6 мес' },
    { title: 'Виза CPLP', note: 'только для не-бразильцев' },
    { title: 'NIF + NISS' },
    { title: 'Подтверждение адреса' },
    { title: 'Подтверждение средств' },
    { title: 'Справка о несудимости', note: 'с апостилем и переводом' }
  ],
  costs: [
    { label: 'Виза CPLP (консульство)', amountEURMin: 75, amountEURMax: 100 },
    { label: 'AIMA — приём + анализ', amountEUR: 133, note: 'с 01.03.2026' },
    { label: 'AIMA — ВНЖ (art. 75)', amountEUR: 307.20, note: 'с 01.03.2026' }
  ],
  timelineDaysMin: 30,
  timelineDaysMax: 120,
  sources: [
    { title: 'AIMA — Acordo de Mobilidade CPLP', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Vistos MNE — CPLP', url: 'https://vistos.mne.gov.pt/pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei nº 61/2025 (DRE)', url: 'https://diariodarepublica.pt/dr/detalhe/lei/61-2025', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'CPLP — официальный портал', url: 'https://www.cplp.org/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-03',
  verifyIntervalDays: 60
}