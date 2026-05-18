export default {
  editorialVoice: 'hackportugal',
  id: 'procuro-trabalho',
  categoryId: 'residence_permit',
  title: 'Виза Procuro Trabalho — поиск работы в Португалии',
  tldr: 'Procuro Trabalho — национальная виза на **120 дней (+ продление визы ещё на 60 дней)** для поиска работы. Это виза, а НЕ residence permit; ВНЖ оформляется только если за время визы заявитель находит работу и подаёт на autorização de residência по соответствующему основанию через AIMA. Подтверждение средств — **минимум 3× SMN** на период визы (Portaria 1563/2007 + актуальная практика консульств: в 2026 SMN = €920, т.е. ориентир ≈ **€2 760** на 4 месяца, выше — лучше) + обратный билет. Популярна для выпускников португальских вузов и высококвалифицированных специалистов.',
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
          'Доказательство средств на жизнь на 4 месяца — **минимум 3× SMN** (в 2026 SMN = €920, т.е. ориентир ≈ **€2 760**). Это основа; некоторые консульства просят больший запас. НЕ использовать базу IAS — она занижает требование',
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
          { id: 'p2', title: '2. Въезд по визе', content: [
            { kind: 'paragraph', text: 'Виза даёт **120 дней пребывания в Португалии для поиска работы** — это виза, а НЕ residence permit. Никакой автоматической выдачи ВНЖ при въезде нет.' }
          ]},
          { id: 'p3', title: '3. Продление визы на 60 дней (при необходимости)', content: [
            { kind: 'paragraph', text: 'Продление визы на ещё **60 дней** оформляется через AIMA. Это продление СТАТУСА ПРЕБЫВАНИЯ, а не выдача residence permit.' }
          ]},
          { id: 'p4', title: '4. Поиск работы', content: [
            { kind: 'paragraph', text: 'LinkedIn, Landing.Jobs, ITJobs.pt, NetJobs, обращение напрямую к компаниям. 120 + 60 = 180 дней — максимальный срок визы.' }
          ]},
          { id: 'p5', title: '5. Нашли работу — подача на autorização de residência (ВНЖ)', content: [
            { kind: 'paragraph', text: 'С контрактом на руках — подача на autorização de residência изнутри страны через AIMA по соответствующему основанию: обычный трудовой контракт (subordinate work, art. 88), highly qualified activity (art. 90-A для специалистов с высокой квалификацией) или предпринимательство. ВНЖ выдаётся именно на этом этапе, после оформления трудовых отношений.' }
          ]},
          { id: 'p6', title: '6. Не нашли — выезд', content: [
            { kind: 'paragraph', text: 'После окончания максимального срока визы (120+60=180 дней) без контракта — обязательный выезд. Повторная подача на Procuro Trabalho возможна через 1 год.' }
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
    { label: 'Консульская виза (Procuro Trabalho)', amountEUR: 90 },
    { label: 'AIMA — продление визы на 60 дней (если нужно)', amountEURMin: 50, amountEURMax: 150, note: 'Точную сумму уточняйте в актуальной AIMA fee table' },
    { label: 'AIMA — autorização de residência (если работа найдена и подаётся ВНЖ)', amountEURMin: 200, amountEURMax: 400, note: 'Зависит от основания (art. 88, 90-A и т.д.) и актуальной таблицы тарифов AIMA с 01.03.2026' },
    { label: 'Страховка на 4 месяца', amountEURMin: 100, amountEURMax: 300 },
    { label: 'Доказательство средств (резерв) — 3× SMN на 4 месяца', amountEURMin: 2760, amountEURMax: 5000, note: 'Минимальный ориентир: 3×€920 = €2 760; больше — надёжнее. НЕ путать с 4×IAS' }
  ],
  timelineDaysMin: 30,
  timelineDaysMax: 90,
  sources: [
    { title: 'Vistos MNE — Visto para Procura de Trabalho', url: 'https://vistos.mne.gov.pt/pt/vistos-nacionais/informacao-geral/tipo-de-visto', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — Procura de Trabalho', url: 'https://aima.gov.pt/pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 23/2007 (DRE)', url: 'https://dre.pt/dre/legislacao-consolidada/lei/2007-34532975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}