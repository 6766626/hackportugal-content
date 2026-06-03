export default {
  editorialVoice: 'hackportugal',
  id: 'd2-entrepreneur',
  categoryId: 'residence_permit',
  title: 'Виза D2 (предприниматель / ИП)',
  tldr: 'D2 — виза для открытия бизнеса или самозанятости в Португалии. Варианты: открыть компанию, оформить самозанятость через Início de Atividade, купить существующий бизнес. Финансовый порог — индивидуальный: нужен жизнеспособный бизнес-план и средства для старта и жизни. Первый ВНЖ обычно на 2 года, затем продление. Реформа Закона о гражданстве уже вступила в силу: Lei Orgânica n.º 1/2026 (опубликована 18.05.2026, действует с 19.05.2026) подняла ценз оседлости для натурализации с 5 до 7 лет для граждан CPLP/EU и до 10 лет для остальных. По заявлениям, поданным до 18.05.2026 включительно, применяется прежний 5-летний срок.',
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
          'Фрилансер с международными клиентами — D2 подходит, только если кейс оформлен как independent professional/entrepreneurial activity с бизнес-планом и экономической связью с Португалией; для чистой удалённой работы на иностранных клиентов обычно правильнее D8'
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
          'Фиксированного минимального инвестиционного порога для D2 НЕТ — нужно показать жизнеспособность проекта, средства на старт бизнеса и средства на проживание',
          'Средства на проживание: ориентир минимум 12×SMN для основного заявителя (€920 × 12 = €11 040 в 2026), плюс 50% на второго взрослого и 30% на каждого ребёнка. Консульство может требовать больше в зависимости от кейса. Правило «4× SMN/мес» относится к D8, а НЕ к D2',
          'Регистрация NIF',
          'Подтверждение жилья в Португалии: на практике многие консульства предпочитают договор аренды на 12+ месяцев, но требования зависят от консульства/VFS (могут приниматься property deed, termo de responsabilidade и др.)',
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
    { label: 'AIMA — выдача временного ВНЖ по D2 (atividade independente / empreendedorismo)', amountEUR: 307.20, note: 'тариф с 01.03.2026; Lei 23/2007 art. 60 для визы, art. 77/89 для autorização de residência' },
    { label: 'Переводы + апостили', amountEURMin: 200, amountEURMax: 500 }
  ],
  timelineDaysMin: 60,
  timelineDaysMax: 150,
  sources: [
    { title: 'Vistos MNE — виза D2', url: 'https://vistos.mne.gov.pt/pt/vistos-nacionais/informacao-geral/tipo-de-visto', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — Autorização de Residência (ВНЖ) для предпринимателей', url: 'https://aima.gov.pt/pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Empresa na Hora — создание компании за день', url: 'https://justica.gov.pt/Servicos/Empresa-na-Hora', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Portaria n.º 1563/2007 — meios de subsistência', url: 'https://diariodarepublica.pt/dr/detalhe/portaria/1563-2007-635255', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Decreto-Lei n.º 112/2025 — SMN 2026 (€920)', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/112-2025', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Lei Orgânica n.º 1/2026 — реформа Закона о гражданстве (ценз 7/10 лет, в силе с 19.05.2026)', url: 'https://diariodarepublica.pt/dr/detalhe/lei-organica/1-2026-1123539996', kind: 'law', language: 'pt', lastRetrieved: '2026-05-31' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}