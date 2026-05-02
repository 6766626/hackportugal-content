export default {
  editorialVoice: 'hackportugal',
  id: 'cartao-de-cidadao',
  categoryId: 'documents_fiscal',
  title: 'Cartão de Cidadão (удостоверение гражданина Португалии) — для резидентов и граждан',
  tldr: 'Cartão de Cidadão (CC) — многофункциональное удостоверение: удостоверение личности в Португалии + NIF + NISS + Número de Utente + биометрический документ + цифровая подпись. Для граждан Португалии обязателен; иностранные резиденты получают аналог — Título de Residência (карточка ВНЖ). Замена/продление — в IRN или Loja de Cidadão.',
  tags: ['cc', 'документы', 'cartão de cidadão'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'for-whom',
      title: 'Кто получает CC',
      content: [
        { kind: 'checklist', items: [
          'Граждане Португалии (обязательно)',
          'Дети граждан (с рождения — временная карточка новорождённого → CC с 6-9 мес)',
          'Иностранные резиденты НЕ получают CC — у них Título de Residência (карточка ВНЖ) с той же функциональностью для большинства целей'
        ]},
        { kind: 'warning', text: 'Если вы натурализовались → получаете CC вместо ВНЖ. Процесс описан ниже.' }
      ]
    },
    {
      id: 'functions',
      title: 'Функции CC',
      content: [
        { kind: 'checklist', items: [
          'Удостоверение личности для поездок по Португалии и внутри ЕС (заменяет паспорт в Шенгене)',
          'Содержит NIF (налоговый номер)',
          'Содержит NISS (номер социального страхования)',
          'Содержит Número de Utente (номер пациента SNS)',
          'Биометрический документ: отпечатки, фото',
          'Чип для цифровой подписи (требует USB-ридер или телефон с NFC)',
          'PIN для активации',
          'Голосование на выборах (для граждан Португалии)',
          'Идентификация в кооперативах, библиотеках, школах'
        ]}
      ]
    },
    {
      id: 'first-time',
      title: 'Первое получение',
      content: [
        { kind: 'substeps', items: [
          { id: 'f1', title: 'Для новорождённых', content: [
            { kind: 'paragraph', text: 'Регистрация в Conservatória do Registo Civil → автоматическое оформление CC на 5 лет. В первые 6-9 мес — временная карточка новорождённого.' }
          ]},
          { id: 'f2', title: 'Для натурализованных граждан', content: [
            { kind: 'paragraph', text: 'После получения гражданства (IRN одобряет) → запись на CC в IRN или Loja de Cidadão → биометрия + фото → через 30 дней CC приходит.' }
          ]}
        ]}
      ]
    },
    {
      id: 'renew',
      title: 'Продление / замена',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: 'Когда продлевать', content: [
            { kind: 'paragraph', text: 'CC действует 10 лет (5 для детей). За 6 мес до истечения — запись на продление.' }
          ]},
          { id: 'r2', title: 'Как', content: [
            { kind: 'paragraph', text: 'Запись на eportugal.gov.pt → выбрать Espaço Cidadão или IRN → прийти с текущим CC + подтверждением адреса → биометрия + фото → 30 дней на получение.' }
          ]},
          { id: 'r3', title: 'Потеря / кража', content: [
            { kind: 'paragraph', text: '1) Заблокировать через Linha 211 950 500 (24/7). 2) Заявление в PSP (полицейский протокол). 3) Запрос на замену в IRN с полицейским протоколом.' }
          ]}
        ]}
      ]
    },
    {
      id: 'digital',
      title: 'Цифровая сторона CC',
      content: [
        { kind: 'paragraph', text: 'CC = ключ к порталам (autenticação.gov, Finanças, AIMA, Segurança Social). Нужен ридер (USB 20-30€) или совместимый телефон с NFC.' },
        { kind: 'paragraph', text: 'В качестве альтернативы для иностранцев без CC — Chave Móvel Digital (см. отдельный гайд). CMD даёт аналогичный цифровой доступ без физической карточки.' }
      ]
    }
  ],
  costs: [
    { label: 'Первое получение (дети до 25)', amountEUR: 15 },
    { label: 'Продление (стандартно)', amountEUR: 18, note: 'IRN 2026' },
    { label: 'Срочно (3 дня)', amountEUR: 33 },
    { label: 'Очень срочно (в тот же / следующий день)', amountEUR: 53 },
    { label: 'Онлайн-скидка', amountEUR: 0, note: '−10% при онлайн-продлении' },
    { label: 'Замена при потере', amountEUR: 20 }
  ],
  sources: [
    { title: 'IRN — Cartão de Cidadão', url: 'https://irn.justica.gov.pt/cartao-cidadao', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Renovar CC', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/renovar-o-cartao-de-cidadao', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Autenticação.gov — CC digital', url: 'https://www.autenticacao.gov.pt/cc-portuguese-citizen-card', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}