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
        { kind: 'paragraph', text: 'NISS = уникальный номер в системе социального страхования. Нужен для: трудового договора, самозанятости (Recibo Verde), получения пособий, регистрации в SNS через работодателя, подачи на большинство ВНЖ (с апреля 2025).' },
        { kind: 'warning', text: 'Не путать с NIF (налоговый номер, Finanças) и номером пациента SNS (отдельная регистрация в поликлинике).' }
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
            { kind: 'checklist', items: ['Паспорт (все страницы)', 'NIF', 'ВНЖ / виза / документ EU', 'Подтверждение адреса'] }
          ]},
          { id: 's4', title: '4. Получить NISS по электронной почте', content: [
            { kind: 'timeline', text: '5–30 дней. Статус приходит по электронной почте от Segurança Social. После получения NISS — активируйте SSD на seg-social.pt для управления.' }
          ]}
        ]}
      ]
    },
    {
      id: 'variant-in-person',
      title: 'Вариант C. Лично в Loja da Segurança Social',
      content: [
        { kind: 'paragraph', text: 'Если онлайн отказали — записаться через 300 502 502 или прийти в живую очередь. Возьмите паспорт, NIF, подтверждение адреса.' }
      ]
    }
  ],
  documents: [
    { title: 'Паспорт', note: 'оригинал и копия' },
    { title: 'NIF', note: 'обязательно перед NISS' },
    { title: 'ВНЖ или виза', note: 'для граждан стран вне ЕС' },
    { title: 'Подтверждение адреса', note: 'не старше 3 месяцев' }
  ],
  costs: [
    { label: 'Госпошлина', amountEUR: 0 }
  ],
  timelineDaysMin: 5,
  timelineDaysMax: 30,
  sources: [
    { title: 'Segurança Social — Atribuição de NISS', url: 'https://www.seg-social.pt/inicio', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Pedir NISS', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/obter-numero-de-identificacao-da-seguranca-social-niss-', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — требование NISS с апр. 2025', url: 'https://aima.gov.pt/pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}