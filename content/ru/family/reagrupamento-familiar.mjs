export default {
  editorialVoice: 'hackportugal',
  id: 'reagrupamento-familiar',
  categoryId: 'residence_permit',
  title: 'Воссоединение семьи (Reagrupamento Familiar)',
  tldr: 'Процесс, позволяющий привезти супруга, детей или родителей после получения собственного ВНЖ. Подаётся через AIMA (portal-rf.aima.gov.pt)\.\n\nВажно: с 2024 года (Lei 9/2024 + Lei 61/2025 от 23.10.2025) требуется минимум 2 года легального проживания в Португалии ДО подачи.\n\nСрок решения AIMA — до 9 мес. (ранее было 90 дней)\.\n\nИсключения: держатели Golden Visa, D3 (EU Blue Card), ряд других квалифицированных статусов.',
  tags: ['семья', 'воссоединение', 'reagrupamento', 'aima'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'who',
      title: 'Кого можно привезти',
      content: [
        { kind: 'checklist', items: [
          'Супруг/а (официальный брак либо união de facto — совместное проживание ≥ 2 лет, требует оформления в Junta de Freguesia)',
          'Несовершеннолетние дети (собственные или супруга)',
          'Совершеннолетние дети-студенты до 27 лет, финансово зависимые',
          'Родители заявителя и супруга (если доказана финансовая зависимость)',
          'Несовершеннолетние братья/сёстры под опекой'
        ]}
      ]
    },
    {
      id: 'requirements',
      title: 'Требования к заявителю',
      content: [
        { kind: 'checklist', items: [
          'Действующий ВНЖ ≥ 2 года на момент подачи (введено Lei 9/2024; Lei 61/2025 закрепил это правило)',
          'Исключения из 2-летнего правила: держатели Golden Visa, D3 (высококвалифицированные специалисты), EU Blue Card, беженцы, учёные с краткосрочным контрактом, несовершеннолетние дети, супруги при совместном проживании ≥ 15 мес.',
          'Подходящее жильё (договор аренды на срок ≥ 12 мес. или собственность, метраж ≥ 30 м² на 1 человека + 15 м² на каждого дополнительного)',
          'Стабильный доход — минимум 100% SMN (€ 920 на 2026) на заявителя + 50% на супруга (€ 460) + 30% на ребёнка (€ 276 на ребёнка)',
          'Медстраховка для всех членов семьи на срок до получения SNS',
          'Отсутствие задолженностей перед Finanças и Segurança Social'
        ]},
        { kind: 'warning', text: 'Lei 9/2024 (вступил в силу в 2024, подтверждён Lei 61/2025): минимум 2 года легального проживания ДО подачи на Reagrupamento Familiar. Ранее подавать можно было сразу после получения ВНЖ. Это ключевое изменение для новых резидентов.' }
      ]
    },
    {
      id: 'process',
      title: 'Процесс',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: '1. Собрать документы семьи', content: [
            { kind: 'checklist', items: [
              'Свидетельство о браке (с апостилем + переводом)',
              'Свидетельства о рождении детей (апостиль + перевод)',
              'Справки о несудимости для супруги/супруга и совершеннолетних членов семьи',
              'Паспорта всех членов семьи'
            ]}
          ]},
          { id: 'r2', title: '2. Подать заявление в AIMA', content: [
            { kind: 'paragraph', text: 'Через специализированный портал portal-rf.aima.gov.pt (запущен в 2024 году) или на очном приёме. Выбрать тип «Reagrupamento Familiar».' }
          ]},
          { id: 'r3', title: '3. Получить предварительное одобрение', content: [
            { kind: 'timeline', text: 'До 9 месяцев согласно Lei 61/2025 (ранее было «до 90 дней» — до реформы). Реально на 2026 — 6–12 мес. При одобрении AIMA отправляет уведомление в консульство страны проживания семьи.' }
          ]},
          { id: 'r4', title: '4. Семья получает визу в консульстве', content: [
            { kind: 'paragraph', text: 'На основании одобрения AIMA. Пошлина — около € 90 на человека.' }
          ]},
          { id: 'r5', title: '5. Въезд и оформление ВНЖ в AIMA', content: [
            { kind: 'timeline', text: 'В течение 4 мес. с момента выдачи визы. Биометрия в AIMA. Карточка — через 30–90 дней.' }
          ]}
        ]}
      ]
    },
    {
      id: 'union-de-facto',
      title: 'União de Facto (без брака)',
      content: [
        { kind: 'paragraph', text: 'Португалия признаёт гражданские партнёрства. После 2 лет совместного проживания можно оформить união de facto в Junta de Freguesia и использовать это как основание для воссоединения.' }
      ]
    },
    {
      id: 'common-issues',
      title: 'Частые проблемы',
      content: [
        { kind: 'warning', text: 'Недостаточный метраж жилья — частая причина отказа. Проверяйте до подачи.' },
        { kind: 'warning', text: 'Просроченные апостили или переводы без присяжного заверения. Переводы принимаются только от присяжных переводчиков или заверенные консульством.' },
        { kind: 'paragraph', text: 'В случае отказа возможно обжалование через суд, но это занимает 6–18 мес.' }
      ]
    }
  ],
  costs: [
    { label: 'AIMA — приём + анализ (каждый член семьи)', amountEUR: 133, note: 'с 01.03.2026' },
    { label: 'AIMA — ВНЖ (art. 75, каждый)', amountEUR: 307.20, note: 'с 01.03.2026' },
    { label: 'Виза в консульстве (каждый)', amountEUR: 90 },
    { label: 'Апостили + переводы', amountEURMin: 300, amountEURMax: 800 }
  ],
  timelineDaysMin: 90,
  timelineDaysMax: 270,
  sources: [
    { title: 'AIMA — Reagrupamento Familiar (portal-rf)', url: 'https://portal-rf.aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Reagrupamento Familiar', url: 'https://www.gov.pt/cidadaos/-/informacoes/reagrupamento-familiar', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 23/2007 — статьи 98-108', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2007-34532975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 9/2024 — 2-летнее условие проживания для Reagrupamento Familiar', url: 'https://diariodarepublica.pt/dr/detalhe/lei/9-2024', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 61/2025 — 9-месячный срок решения AIMA', url: 'https://diariodarepublica.pt/dr/detalhe/lei/61-2025', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}