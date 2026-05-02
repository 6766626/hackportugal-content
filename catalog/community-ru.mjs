// External community resources surfaced in a dedicated screen.
// IMPORTANT: Only @portugalpages is marked isVerified=true (HackPortugal's own channel).
// All other entries are third-party resources shown WITHOUT editorial verification.

export default {
  disclaimer: 'Ниже — внешние каналы и группы сообщества. Проверку редакции HackPortugal проходит только «Справочная Португалии» (@portugalpages) — остальные ресурсы поддерживаются сторонними авторами и не верифицируются. Всегда сверяйте практическую информацию с официальными источниками, указанными в гайдах приложения.',
  telegramChannels: [
    {
      id: 'tg-portugalpages',
      rank: 1,
      name: 'Справочная Португалии',
      handle: '@portugalpages',
      url: 'https://t.me/portugalpages',
      description: 'Основной редакционный канал HackPortugal. Верифицированные гайды, разборы законов, быстрые ответы по бюрократии и быту.',
      isVerified: true,
      verifiedNote: 'Проверено редакцией HackPortugal',
      topics: ['все темы'],
      languages: ['ru']
    },
    {
      id: 'tg-aimasef',
      rank: 2,
      name: '@Aimasef',
      handle: '@Aimasef',
      url: 'https://t.me/Aimasef',
      description: 'Сообщество по вопросам AIMA/SEF — легализация, ВНЖ, документы. Большой живой чат.',
      isVerified: false,
      topics: ['aima', 'внж', 'документы'],
      languages: ['ru']
    },
    {
      id: 'tg-aimairn',
      rank: 3,
      name: 'Продление ВНЖ 2025-26',
      handle: '@aimairn',
      url: 'https://t.me/aimairn',
      description: 'Чат о продлении ВНЖ, статистика, взаимопомощь. Опыт реальных кейсов AIMA по продлению.',
      isVerified: false,
      topics: ['продление', 'внж', 'aima'],
      languages: ['ru']
    },
    {
      id: 'tg-portugal-chat',
      rank: 4,
      name: 'Чат Португалии',
      handle: '@portugal_chat',
      url: 'https://t.me/portugal_chat',
      description: 'Общий чат русскоязычного комьюнити. Обсуждения быта, жилья, работы.',
      isVerified: false,
      topics: ['быт', 'жильё', 'работа'],
      languages: ['ru']
    },
    {
      id: 'tg-lisbon-chat',
      rank: 5,
      name: 'Лиссабон — чат',
      handle: '@lisbon_chat',
      url: 'https://t.me/lisbon_chat',
      description: 'Чат жителей и гостей Лиссабона.',
      isVerified: false,
      topics: ['лиссабон', 'быт'],
      languages: ['ru']
    },
    {
      id: 'tg-porto-chat',
      rank: 6,
      name: 'Порту — чат',
      handle: '@porto_chat',
      url: 'https://t.me/porto_chat',
      description: 'Чат жителей и гостей Порту.',
      isVerified: false,
      topics: ['порту', 'быт'],
      languages: ['ru']
    },
    {
      id: 'tg-portugal-jobs',
      rank: 7,
      name: 'Работа в Португалии',
      handle: '@portugal_jobs',
      url: 'https://t.me/portugal_jobs',
      description: 'Вакансии и предложения работы для русскоязычных.',
      isVerified: false,
      topics: ['работа', 'вакансии'],
      languages: ['ru']
    },
    {
      id: 'tg-portugal-housing',
      rank: 8,
      name: 'Жильё в Португалии',
      handle: '@portugal_housing',
      url: 'https://t.me/portugal_housing',
      description: 'Объявления об аренде и продаже жилья.',
      isVerified: false,
      topics: ['жильё', 'аренда'],
      languages: ['ru']
    }
  ],
  facebookGroups: [
    {
      id: 'fb-russians-portugal',
      rank: 1,
      name: 'Русские в Португалии',
      handle: null,
      url: 'https://www.facebook.com/groups/russiansinportugal/',
      description: 'Крупнейшая русскоязычная группа в FB. Вопросы и ответы, объявления.',
      isVerified: false,
      topics: ['быт', 'жильё', 'документы'],
      languages: ['ru']
    },
    {
      id: 'fb-ukrainians-portugal',
      rank: 2,
      name: 'Українці в Португалії',
      handle: null,
      url: 'https://www.facebook.com/groups/ukrainiansinportugal/',
      description: 'Сообщество украинцев в Португалии.',
      isVerified: false,
      topics: ['быт', 'помощь'],
      languages: ['uk', 'ru']
    },
    {
      id: 'fb-expats-lisbon',
      rank: 3,
      name: 'Expats in Lisbon',
      handle: null,
      url: 'https://www.facebook.com/groups/expatsinlisbon/',
      description: 'Англоязычное международное сообщество в Лиссабоне.',
      isVerified: false,
      topics: ['expat', 'lisbon'],
      languages: ['en']
    },
    {
      id: 'fb-expats-porto',
      rank: 4,
      name: 'Expats in Porto',
      handle: null,
      url: 'https://www.facebook.com/groups/expatsinporto/',
      description: 'Англоязычное сообщество Порту.',
      isVerified: false,
      topics: ['expat', 'porto'],
      languages: ['en']
    }
  ]
}
