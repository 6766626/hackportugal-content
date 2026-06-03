export default {
  editorialVoice: 'hackportugal',
  id: 'chave-movel-digital',
  categoryId: 'digital_gov',
  title: 'Chave Móvel Digital (государственная электронная подпись) — активация',
  tldr: 'CMD — цифровая подпись от государства Португалии. Без неё невозможны: AIMA portal продления, Segurança Social Direta (онлайн-портал социального страхования), Finanças, подписание документов онлайн. Активируется бесплатно в Loja de Cidadão или через Cartão de Cidadão (удостоверение гражданина Португалии).',
  tags: ['chave', 'cmd', 'цифровая подпись'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'what',
      title: 'Что это и зачем',
      content: [
        { kind: 'paragraph', text: 'Chave Móvel Digital (CMD) — государственный логин + цифровая подпись. Аналог "Госуслуг" или BankID. Используется для входа в AIMA, SNS, Finanças, IRN, суд, ePortugal.' },
        { kind: 'paragraph', text: 'Работает как связка PIN + SMS (или push в app Autenticação.gov).' }
      ]
    },
    {
      id: 'requirements',
      title: 'Требования',
      content: [
        { kind: 'checklist', items: [
          'Cartão de Cidadão (CC) либо паспорт с ВНЖ',
          'NIF',
          'Португальский номер телефона (обязательно для SMS 2FA)',
          'Email'
        ]},
        { kind: 'warning', text: 'Иностранный номер телефона для активации не подходит — нужна SIM с PT-номером.' }
      ]
    },
    {
      id: 'activate',
      title: 'Как активировать',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: '1. Вариант A — онлайн через CC + ридер', content: [
            { kind: 'paragraph', text: 'Если есть Cartão de Cidadão с PIN и USB-ридер (или мобильное NFC) — активировать на autenticacao.gov.pt без визита.' }
          ]},
          { id: 'c2', title: '1. Вариант B — очно в Loja de Cidadão / Espaço Cidadão', content: [
            { kind: 'paragraph', text: 'Запись на gov.pt или живая очередь. Оператор проверяет документы, активирует CMD на ваш PT-номер.' }
          ]},
          { id: 'c3', title: '2. Установить пароль (PIN)', content: [
            { kind: 'paragraph', text: 'ПИН-код из 4–8 цифр для входа. Используется при каждой авторизации вместе с кодом из SMS.' }
          ]},
          { id: 'c4', title: '3. Установить приложение Autenticação.gov', content: [
            { kind: 'paragraph', text: 'Приложение для iOS / Android. Избавляет от SMS-кодов: вместо них приходит push-уведомление. Рекомендуем.' }
          ]},
          { id: 'c5', title: '4. Активировать цифровую подпись (по желанию)', content: [
            { kind: 'paragraph', text: 'Отдельная опция в профиле. Позволяет подписывать PDF без визита к нотариусу (для многих задач).' }
          ]}
        ]}
      ]
    },
    {
      id: 'use',
      title: 'Где использовать',
      content: [
        { kind: 'checklist', items: [
          'portal-renovacoes.aima.gov.pt — продление ВНЖ',
          'Segurança Social Direta — NISS, пособия',
          'Portal das Finanças (налоговый портал) — IRS, NIF',
          'SNS — медкарта и рецепты',
          'ePortugal — справки, выписки',
          'Подписание контрактов аренды/покупки без явки'
        ]}
      ]
    }
  ],
  documents: [
    { title: 'CC или паспорт + ВНЖ' },
    { title: 'NIF' },
    { title: 'PT номер телефона' }
  ],
  costs: [{ label: 'Активация', amountEUR: 0 }],
  timelineDaysMin: 1,
  timelineDaysMax: 14,
  sources: [
    { title: 'Autenticação.gov — официальный', url: 'https://www.autenticacao.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Chave Móvel Digital', url: 'https://www.gov.pt/cidadaos/-/informacoes/chave-movel-digital', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
