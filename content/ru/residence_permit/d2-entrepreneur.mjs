export default {
  editorialVoice: 'hackportugal',
  id: 'd2-entrepreneur',
  categoryId: 'residence_permit',
  title: 'Виза D2 (предприниматель / ИП)',
  tldr: 'D2 — виза для открытия бизнеса или самозанятости в Португалии. Варианты: открыть компанию, оформить самозанятость через Início de Atividade, купить существующий бизнес. Финансовый порог — индивидуальный: нужен жизнеспособный бизнес-план и средства для старта и жизни. ВНЖ на 2 года, путь к гражданству через 5 лет.',
  audience: { citizenships: ['thirdCountry', 'cplp'] },
  tags: ['d2', 'внж', 'бизнес', 'предприниматель'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'who',
      title: 'Кто подходит',
      content: [
        { kind: 'checklist', items: [
          'Планирует открыть компанию (Lda, Unipessoal) в Португалии',
          'Планирует работать как самозанятый через Recibo Verde с португальскими клиентами',
          'Приобретает существующий португальский бизнес',
          'Фрилансер с международными клиентами (обычно D8 лучше, но D2 тоже доступен)'
        ]},
        { kind: 'warning', text: 'D2 НЕ подходит для удалёнщиков, работающих на иностранного работодателя, — им нужна D8.' }
      ]
    },
    {
      id: 'requirements',
      title: 'Требования',
      content: [
        { kind: 'checklist', items: [
          'Бизнес-план на португальском или английском языке: жизнеспособность, рынок, финансы на 3 года',
          'Подтверждение средств — минимум € 5 000–10 000 на счёте в португальском банке (негласная практика)',
          'Достаточные средства к существованию: считаются от SMN (€ 920 в 2026) и IAS (€ 537,13) + надбавки за иждивенцев. Консулат оценивает по бизнес-плану и личным расходам. Правила «4× SMN» для D2 в законе НЕТ — это ориентир для D8 для цифровых кочевников',
          'Регистрация NIF',
          'Договор аренды в Португалии на срок не менее 12 месяцев',
          'Справка о несудимости с апостилем',
          'Медицинская страховка'
        ]},
        { kind: 'paragraph', text: 'Законодательство не устанавливает фиксированный порог инвестиций — консулат оценивает жизнеспособность проекта.' }
      ]
    },
    {
      id: 'process',
      title: 'Процесс',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: '1. Подготовить бизнес-план', content: [
            { kind: 'paragraph', text: 'Желательно на португальском языке. Нужно включить: описание деятельности, целевой рынок, финансовые прогнозы, ожидаемые рабочие места, уникальность.' }
          ]},
          { id: 'p2', title: '2. Зарегистрировать компанию (опционально до визы)', content: [
            { kind: 'paragraph', text: 'Через Empresa na Hora (за 1 день, € 360) или онлайн. Форма: Sociedade Unipessoal (один учредитель, минимальный капитал € 1).' }
          ]},
          { id: 'p3', title: '3. Получить NIF + открыть счёт в португальском банке', content: [
            { kind: 'paragraph', text: 'Перевести стартовый капитал на счёт. Иметь документ о движении средств.' }
          ]},
          { id: 'p4', title: '4. Записаться в консульство', content: [
            { kind: 'paragraph', text: 'Vistos.mne.gov.pt. Процесс занимает 60–90 дней.' }
          ]},
          { id: 'p5', title: '5. После въезда — AIMA', content: [
            { kind: 'paragraph', text: 'Биометрия, получение ВНЖ. Оформить Início de Atividade в Finanças, если это ещё не сделано.' }
          ]}
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Регистрация компании через Empresa na Hora', amountEUR: 360 },
    { label: 'Консульская виза', amountEUR: 90 },
    { label: 'AIMA — приём + рассмотрение', amountEUR: 133, note: 'с 01.03.2026' },
    { label: 'AIMA — ВНЖ (выдача / продление)', amountEUR: 307.20, note: 'тариф с 01.03.2026' },
    { label: 'Переводы + апостили', amountEURMin: 200, amountEURMax: 500 }
  ],
  timelineDaysMin: 60,
  timelineDaysMax: 150,
  sources: [
    { title: 'Vistos MNE — виза D2', url: 'https://vistos.mne.gov.pt/pt/vistos-nacionais/informacao-geral/tipo-de-visto', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — Autorização de Residência (ВНЖ) для предпринимателей', url: 'https://aima.gov.pt/pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Empresa na Hora — создание компании за день', url: 'https://justica.gov.pt/Servicos/Empresa-na-Hora', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}