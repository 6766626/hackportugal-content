export default {
  editorialVoice: 'hackportugal',
  id: 'niss',
  categoryId: 'documents_fiscal',
  title: 'Как получить NISS (номер соцстрахования)',
  tldr: 'NISS (Número de Identificação de Segurança Social) — 11-значный номер Segurança Social. Бесплатно. Получают через работодателя, через онлайн-форму «Pedido de NISS para cidadão estrangeiro» на seg-social.pt либо лично в Loja da Segurança Social. Segurança Social Direta (SSD) — это личный кабинет ПОСЛЕ получения NISS, не канал первичной заявки. Требование NISS для подачи ВНЖ в AIMA зависит от категории визы — НЕ универсально для всех типов ВНЖ.',
  tags: ['niss', 'соцстрахование', 'aima'],
  estimatedReadMinutes: 4,
  recentlyChangedAt: '2025-04-01',
  changeSummary: 'AIMA расширила требование NISS на больше категорий ВНЖ; точный список зависит от типа визы. Универсальной нормы «NISS обязателен для любой подачи в AIMA» нет — проверяйте по конкретной категории.',
  steps: [
    {
      id: 'what',
      title: 'Что такое NISS',
      content: [
        { kind: 'paragraph', text: 'NISS = уникальный номер в системе социального страхования. Нужен для трудового договора, contribuições Segurança Social, самозанятости (Recibo Verde), пособий и некоторых процедур ВНЖ. Для SNS нужен отдельный Número de Utente — это не тот же номер.' },
        { kind: 'warning', text: 'Не путать с NIF (налоговый номер, Finanças) и Número de Utente (SNS, отдельная регистрация в центре здоровья).' }
      ]
    },
    {
      id: 'variant-employer',
      title: 'Вариант A. Через работодателя',
      content: [
        { kind: 'paragraph', text: 'Если у вас есть работодатель — он подаёт заявление при оформлении трудового договора. NISS присваивается автоматически, номер придёт по почте или его можно узнать в Segurança Social.' },
        { kind: 'timeline', text: 'Обычно 5–15 рабочих дней.' }
      ]
    },
    {
      id: 'variant-online',
      title: 'Вариант B. Онлайн через форму «Pedido de NISS para cidadão estrangeiro»',
      content: [
        { kind: 'paragraph', text: 'Самостоятельно без работодателя — через онлайн-форму на seg-social.pt в разделе для иностранцев. Это публичная форма, вход в Segurança Social Direta (SSD) не нужен, потому что у вас ещё нет NISS для активации SSD. SSD используется ПОСЛЕ получения NISS — для управления взносами, выписками, заявлениями.' },
        { kind: 'substeps', items: [
          { id: 's1', title: '1. Найти форму на seg-social.pt', content: [
            { kind: 'link', text: 'Segurança Social — Pedido de NISS para cidadão estrangeiro', url: 'https://www.seg-social.pt/' }
          ]},
          { id: 's2', title: '2. Заполнить форму', content: [
            { kind: 'paragraph', text: 'NIF, паспортные данные, адрес в Португалии.' }
          ]},
          { id: 's3', title: '3. Загрузить сканы документов', content: [
            { kind: 'checklist', items: ['Паспорт/документ гражданской идентификации (страницы с персональными данными и, если требуется, страницы с актуальной визой/штампом)', 'NIF (на практике обычно нужен)', 'ВНЖ / виза / документ EU', 'Адрес в Португалии; comprovativo de morada могут попросить дополнительно'] }
          ]},
          { id: 's4', title: '4. Получить NISS по электронной почте', content: [
            { kind: 'timeline', text: '5–30 дней. Обычно ответ приходит на email/контакт, указанный в заявке. SSD полноценно доступна уже после присвоения NISS и настройки доступа.' }
          ]}
        ]}
      ]
    },
    {
      id: 'variant-in-person',
      title: 'Вариант C. Лично в Loja da Segurança Social',
      content: [
        { kind: 'paragraph', text: 'Если онлайн не получилось — попробуйте записаться через Linha Segurança Social 300 502 502 или через доступные каналы Segurança Social. Живая очередь возможна не везде и не всегда. Возьмите паспорт, NIF, подтверждение адреса.' }
      ]
    }
  ],
  documents: [
    { title: 'Паспорт', note: 'оригинал и копия' },
    { title: 'NIF', note: 'обычно нужен на практике и часто запрашивается формой' },
    { title: 'ВНЖ или виза', note: 'для граждан стран вне ЕС' },
    { title: 'Подтверждение адреса', note: 'если попросят: recente, обычно до 3 месяцев' }
  ],
  costs: [
    { label: 'Госпошлина', amountEUR: 0 }
  ],
  timelineDaysMin: 5,
  timelineDaysMax: 30,
  sources: [
    { title: 'Segurança Social — Pedido de NISS para cidadão estrangeiro', url: 'https://www.seg-social.pt/pedido-de-niss-para-cidadao-estrangeiro', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'ePortugal — Obter NISS', url: 'https://www.gov.pt/servicos/obter-numero-de-identificacao-da-seguranca-social-niss', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'AIMA — checklist по типам ВНЖ', url: 'https://aima.gov.pt/pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}