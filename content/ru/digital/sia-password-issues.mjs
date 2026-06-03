export default {
  editorialVoice: 'hackportugal',
  id: 'sia-password-issues',
  categoryId: 'digital_gov',
  title: 'Сброс пароля Portal das Finanças и SIA — что делать',
  tldr: 'Если забыли пароль AT (Portal das Finanças / SIA): через portaldasfinancas.gov.pt → «Recuperar Senha» → СМС или письмо по почте (5-7 дней).\n\nАльтернатива: лично в Espaço Cidadão или отделении Finanças. С CMD (Chave Móvel Digital) можно войти БЕЗ пароля. Для сброса CMD — ePortugal.gov.pt → перевыпуск ОДНОРАЗОВЫХ кодов. Если потеряли всё — Conservatória/Espaço Cidadão с CC.',
  tags: ['пароль', 'finanças', 'sia', 'cmd', 'портал', 'забыл пароль'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'pf-password',
      title: '🔐 Восстановить пароль Portal das Finanças',
      content: [
        { kind: 'paragraph', text: 'Самый частый сценарий. AT (налоговая) использует «Senha de Acesso» — пароль не менее 8 символов (заглавная и строчная буквы, цифра и спецсимвол) для входа в Portal das Finanças.' },
        { kind: 'substeps', items: [
          { id: 'p1', title: 'Способ 1 — СМС (быстро, если есть номер)', content: [
            { kind: 'checklist', items: [
              '🌐 portaldasfinancas.gov.pt → «Iniciar Sessão» → «Recuperar Senha»',
              '🔢 Ввести NIF',
              '📱 Если у AT есть ваш мобильный номер — придёт СМС-код',
              '🔐 С помощью кода вы создаёте новый пароль',
              '⏱️ 5-10 минут на весь процесс',
              '⚠️ Если СМС не пришло — мобильный номер не зарегистрирован в AT'
            ]}
          ]},
          { id: 'p2', title: 'Способ 2 — по почте (если нет мобильного номера в AT)', content: [
            { kind: 'checklist', items: [
              '🌐 То же место → выбрать опцию «Por carta»',
              '📮 Письмо придёт на официальный адрес AT (тот, что указан в Portal das Finanças)',
              '⏱️ 5-7 рабочих дней',
              '⚠️ Если адрес устарел — письмо не дойдёт. Сначала обновите адрес лично в отделении Finanças'
            ]}
          ]},
          { id: 'p3', title: 'Способ 3 — лично в отделении Finanças', content: [
            { kind: 'checklist', items: [
              '🏛️ Записаться в отделение Finanças или Espaço Cidadão',
              '🆔 CC + NIF',
              '📋 Запросить «Recuperação de senha presencial»',
              '🔐 Получить временный пароль на бумаге, сменить после первого входа',
              '✅ Сразу, без ожидания почты'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'cmd-issues',
      title: '🔑 Проблемы с Chave Móvel Digital (CMD)',
      content: [
        { kind: 'paragraph', text: 'CMD — государственный «единый ключ» для входа во все госуслуги. Забыть код = ждать восстановления.' },
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Способы входа через CMD', content: [
            { kind: 'checklist', items: [
              '🔢 PIN-код + одноразовый СМС-код',
              '👁️ Биометрия: Apple Touch ID / Face ID, отпечаток пальца Android',
              '📱 Мобильное приложение autenticacao.gov.pt',
              '⚠️ Если СМС не приходят — телефон не привязан или не работает в роуминге'
            ]}
          ]},
          { id: 'c2', title: 'Сброс PIN или замена телефона', content: [
            { kind: 'checklist', items: [
              '🌐 ePortugal.gov.pt → «Chave Móvel Digital» → «Recuperar PIN»',
              '🆔 Авторизация через CC + PIN-код CC (не CMD!)',
              '🔢 Создать новый PIN',
              '📱 Если потеряли телефон: лично в Espaço Cidadão / Loja CTT — заменить привязанный номер'
            ]}
          ]},
          { id: 'c3', title: 'Полное восстановление CMD (если потеряли всё)', content: [
            { kind: 'checklist', items: [
              '🏛️ Espaço Cidadão / Loja CTT / Loja de Cidadão',
              '🆔 CC + новый мобильный телефон (для привязки)',
              '⏱️ На месте, 15-20 мин',
              '🔄 Старый CMD деактивируется, выдаётся новый'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'cc-pin',
      title: '🪪 PIN Cartão de Cidadão',
      content: [
        { kind: 'paragraph', text: 'У CC есть 3 PIN-кода: PIN для аутентификации (4 цифры), PIN для подписи (4 цифры), PIN для смены адреса (4 цифры). После 3 неправильных вводов PIN блокируется.' },
        { kind: 'checklist', items: [
          '🔓 Разблокировать: Espaço Cidadão / Loja CC, лично, бесплатно',
          '🆕 Сменить PIN самостоятельно: на сайте autenticacao.gov.pt (нужен старый PIN)',
          '📤 Полностью сбросить (если PIN забыт и заблокирован): новые коды PIN в Loja CC, 5 €, в день визита',
          '⚠️ Кодовое письмо («carta de PINs») — приходит при выдаче CC. Сохраните!',
          '💡 Если потеряли карту: заблокировать через 808 12 12 30 или ePortugal — сразу'
        ]}
      ]
    },
    {
      id: 'common-errors',
      title: '⚠️ Типичные ошибки',
      content: [
        { kind: 'checklist', items: [
          '🔴 «К NIF не привязан мобильный номер» — номер не зарегистрирован в AT. Привязать его можно лично в отделении Finanças',
          '🔴 «Неверный адрес» — адрес устарел. Сначала обновить адрес в AT/IRN',
          '🔴 «Пароль заблокирован после 3 попыток» — блокировка на 24 часа, затем ещё 3 попытки',
          '🔴 «Письмо не пришло» — обратиться в местное отделение Finanças, перевыпустят',
          '🔴 «Приложение CMD не работает в роуминге» — телефон должен быть в PT для СМС',
          '🔴 «iPhone Face ID не распознаёт CMD» — обновить приложение autenticacao.gov.pt',
          '🔴 «Старые браузеры не работают с CMD» — использовать актуальную версию Chrome/Safari'
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Советы',
      content: [
        { kind: 'checklist', items: [
          '🔐 Использовать менеджер паролей (1Password, Bitwarden) — не забудете',
          '📱 Настроить биометрию CMD — не придётся вводить PIN каждый раз',
          '📩 ВСЕГДА обновлять мобильный номер в Portal das Finanças — для всех восстановлений',
          '🏛️ В Lisboa самые быстрые Espaço Cidadão: Saldanha (Loja de Cidadão Saldanha) и Marvila (Loja de Cidadão das Laranjeiras)',
          '⏰ Запись на agendamentos.gov.pt — обычно за 1-2 нед',
          '💼 Если бизнес/Lda: представитель (юрист) может действовать от вашего имени по доверенности',
          '⏰ Профилактика: каждые 6 мес проверять адрес и мобильный номер в Portal das Finanças',
          '🌐 Многофакторная защита: всегда включать 2FA в банковских и государственных аккаунтах'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Восстановление пароля Portal das Finanças', amountEUR: 0 },
    { label: 'Восстановление CMD', amountEUR: 0 },
    { label: 'Разблокировка PIN CC', amountEUR: 0 },
    { label: 'Новые коды PIN CC', amountEUR: 5 }
  ],
  sources: [
    { title: 'Portal das Finanças', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.html', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Autenticação.gov.pt — Chave Móvel Digital', url: 'https://www.autenticacao.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Cartão de Cidadão', url: 'https://www.gov.pt/cidadaos/-/informacoes/o-que-e-o-cartao-de-cidadao-', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}