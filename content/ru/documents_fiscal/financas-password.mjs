export default {
  editorialVoice: 'hackportugal',
  id: 'financas-password',
  categoryId: 'documents_fiscal',
  title: 'Пароль от Portal das Finanças (налоговый портал) — активация и восстановление',
  tldr: 'После получения NIF нужно активировать пароль для входа на portaldasfinancas.gov.pt. Запрос делается онлайн — пароль приходит по почте на ваш адрес за 5–10 дней, при иностранном адресе — до 3 недель. Для восстановления используйте «Recuperar senha»: код придёт по электронной почте (если она настроена) или обычной почтой. Альтернатива — Chave Móvel Digital (государственная электронная подпись) через autenticacao.gov.pt.',
  tags: ['Finanças', 'пароль', 'senha', 'portal'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'first-time',
      title: 'Первая активация — запрос пароля',
      content: [
        { kind: 'checklist', items: [
          '💻 Зайти на portaldasfinancas.gov.pt',
          '🔑 Верхний правый угол → «Iniciar Sessão» → «Registar-se»',
          '📝 Ввести NIF, адрес электронной почты, телефон, дату рождения',
          '✅ Подтвердить — система проверит совпадение с данными налоговой службы',
          '📬 Пароль будет отправлен по почте CTT на ваш ЗАРЕГИСТРИРОВАННЫЙ налоговый адрес',
          '📅 5–10 дней внутри Португалии, до 3 недель за границей'
        ]},
        { kind: 'warning', text: 'Пароль приходит на адрес, который указан в Finanças как ваш налоговый домициль. Если адрес устарел — сначала поменяйте его (см. гайд «Смена налогового адреса»).' }
      ]
    },
    {
      id: 'recovery',
      title: 'Восстановление забытого пароля',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: 'A. Через электронную почту', content: [
            { kind: 'paragraph', text: 'Если адрес электронной почты был указан при регистрации: «Esqueceu-se da sua palavra-chave?» → введите NIF → код приходит на электронную почту → задаёте новый пароль.' }
          ]},
          { id: 'r2', title: 'B. Через почту', content: [
            { kind: 'paragraph', text: 'Если электронная почта не настроена — пароль высылают по почте CTT тем же порядком, что и при первичной активации. 5–10 дней.' }
          ]},
          { id: 'r3', title: 'C. Через Chave Móvel Digital', content: [
            { kind: 'paragraph', text: 'Если у вас активирована CMD — входите в Portal das Finanças через «Autenticação.gov» (кнопка сверху). Пароль не нужен вовсе.' }
          ]}
        ]}
      ]
    },
    {
      id: 'cmd-alt',
      title: 'Альтернатива: Chave Móvel Digital',
      content: [
        { kind: 'paragraph', text: 'CMD — государственная электронная идентификация. Активация через autenticacao.gov.pt, нужен Cartão de Cidadão (для граждан Португалии) или NIF + SMS-проверка (для нерезидентов). После активации — вход на все государственные порталы одним паролем + SMS/пуш-уведомление, плюс электронная подпись документов.' },
        { kind: 'checklist', items: [
          '📱 CMD + PIN + одноразовый SMS-код вместо пароля Finanças',
          '✍️ Возможность подписывать документы',
          '🔐 Работает на AIMA, SNS 24, Segurança Social, ePortugal',
          '🆓 Бесплатно, действует бессрочно'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Советы',
      content: [
        { kind: 'checklist', items: [
          '📧 Сразу настройте электронную почту и мобильный номер в Finanças — это страховка',
          '🔐 Пароль: 8–16 символов, 1 заглавная буква, 1 цифра',
          '📂 Сохраните пароль в менеджере паролей — восстановление по почте занимает неделю',
          '🏠 Обновляйте налоговый адрес при переезде — иначе пароль уйдёт на старый',
          '👫 Семейный аккаунт: у супруга отдельный NIF и отдельный пароль'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Portal das Finanças — Registo', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.htmlindex.htmlindex.html', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Autenticação.gov — Chave Móvel Digital', url: 'https://www.autenticacao.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Obter senha de acesso ao Portal das Finanças', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/registar-se-no-portal-das-financas', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 365
}