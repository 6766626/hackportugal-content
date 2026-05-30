export default {
  editorialVoice: 'hackportugal',
  id: 'financas-password',
  categoryId: 'documents_fiscal',
  title: 'Пароль от Portal das Finanças (налоговый портал) — активация и восстановление',
  tldr: 'После получения NIF нужно активировать пароль для входа на portaldasfinancas.gov.pt. Запрос делается онлайн — пароль приходит по почте на ваш налоговый адрес за 5–10 дней, при иностранном адресе — до 3 недель. Восстановление: если в AT подтверждён мобильный телефон, может быть доступен код/SMS; иначе новая senha отправляется письмом на зарегистрированный налоговый адрес. Альтернатива — Chave Móvel Digital (CMD) через autenticacao.gov.pt.',
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
          { id: 'r1', title: 'A. Быстрое восстановление через подтверждённый контакт', content: [
            { kind: 'paragraph', text: 'Если в Finanças заранее подтверждён мобильный телефон/контакт для восстановления, можно попробовать «Esqueceu-se da sua palavra-chave?» → ввести NIF → получить код подтверждения (обычно SMS) → задать новый пароль. Если такой опции нет — см. вариант B.' }
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
        { kind: 'paragraph', text: 'CMD — государственная электронная идентификация. CMD можно активировать онлайн с Cartão de Cidadão; иностранцы — через доступ к Portal das Finanças или очно в уполномоченных пунктах (Loja de Cidadão/IRN), предъявив документ идентификации и NIF. Просто NIF + SMS недостаточно. Для иностранцев без CC и без действующего доступа к Portal das Finanças CMD часто не решает проблему мгновенно — может потребоваться очная активация.' },
        { kind: 'checklist', items: [
          '📱 CMD + PIN + одноразовый SMS-код вместо пароля Finanças',
          '✍️ Возможность подписывать документы',
          '🔐 Работает на AIMA, SNS 24, Segurança Social, ePortugal',
          '🆓 Бесплатно; срок действия ограничен — проверяйте validade в autenticacao.gov.pt и продлевайте CMD до истечения срока'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Советы',
      content: [
        { kind: 'checklist', items: [
          '📧 Сразу настройте электронную почту и мобильный номер в Finanças — это страховка',
          '🔐 Пароль: следуйте требованиям сложности, которые показывает форма AT; сохраните senha в менеджере паролей',
          '📂 Сохраните пароль в менеджере паролей — восстановление по почте занимает неделю',
          '🏠 Обновляйте налоговый адрес при переезде — иначе пароль уйдёт на старый',
          '👫 Семейный аккаунт: у супруга отдельный NIF и отдельный пароль'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Portal das Finanças — Registo/Recuperar senha', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.html', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Autenticação.gov — Chave Móvel Digital', url: 'https://www.autenticacao.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'ePortugal — Pedir a senha de acesso ao Portal das Finanças', url: 'https://www.gov.pt/servicos/pedir-a-senha-de-acesso-ao-portal-das-financas', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 365
}