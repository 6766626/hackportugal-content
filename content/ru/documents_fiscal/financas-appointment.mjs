export default {
  editorialVoice: 'hackportugal',
  id: 'financas-appointment',
  categoryId: 'documents_fiscal',
  title: 'Запись на приём в Finanças — онлайн и без очереди',
  tldr: 'Finanças перешла на гибридную модель: большая часть операций — онлайн, приём по записи через Portal das Finanças («Agendamentos»), без записи — только в крупных отделениях с утра. Запись — за 1–14 дней, бесплатно. Популярные услуги: NIF, смена адреса, пароль, вопросы по IRS, Recibo Verde, IUC. В Lisboa/Porto очереди длиннее, стоит бронировать заранее.',
  tags: ['finanças', 'запись', 'приём'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'how-to-book',
      title: 'Как записаться',
      content: [
        { kind: 'checklist', items: [
          '💻 Portal das Finanças → «Agendamentos» (внизу главной страницы)',
          '🌐 Или прямая ссылка: Portal das Finanças → e-balcão',
          '📱 Нужен вход с паролем или CMD',
          '🏛️ Выбрать отделение (Serviço de Finanças)',
          '📋 Выбрать услугу из списка',
          '📅 Выбрать дату и время (слоты по 20–30 мин)',
          '✅ Подтвердить, скачать подтверждение с QR-кодом',
          '🔔 Напоминание на электронную почту за сутки'
        ]}
      ]
    },
    {
      id: 'services-list',
      title: 'Популярные услуги с записью',
      content: [
        { kind: 'checklist', items: [
          '🆔 Atribuição de NIF (для иностранцев) — 15 мин',
          '🏠 Alteração de morada — 10 мин (обычно онлайн)',
          '🔑 Senha de acesso (активация пароля) — 5 мин',
          '💼 Início / Cessação de Atividade (ИП) — 30 мин',
          '🧾 Certidões (domicílio, dívida, rendimentos) — 15 мин',
          '🚗 IUC / IMT — 20 мин',
          '🏢 IMI — 30 мин',
          '📄 Помощь с заполнением IRS — 30–45 мин (сезон март–июнь)'
        ]}
      ]
    },
    {
      id: 'walk-in',
      title: 'Без записи',
      content: [
        { kind: 'checklist', items: [
          'Большие отделения Lisboa (Saldanha, Algés, Restelo) — очередь с 07:30',
          'Porto Baixa, Gaia, Matosinhos — аналогично',
          'Маленькие отделения в отдалённых регионах — приём без записи часто проходит без проблем',
          'Возможен отказ, если слоты переполнены — лучше записаться',
          'Только для ЭКСТРЕННЫХ случаев (просроченные сроки)'
        ]}
      ]
    },
    {
      id: 'no-show',
      title: 'Пропустил приём',
      content: [
        { kind: 'paragraph', text: 'Пропуск без отмены = блокировка записи на 30 дней. Отмена за 24 часа — через Portal das Finanças. Повторная запись — с первого свободного слота.' },
        { kind: 'checklist', items: [
          '⚠️ Отменяйте за 24 часа',
          '🔄 Повторная запись после неявки — через 30 дней',
          '📞 Если опоздали < 15 мин — часто принимают',
          '🚫 Опоздали > 15 мин — нужна новая запись'
        ]}
      ]
    },
    {
      id: 'online-alternatives',
      title: 'Что можно сделать БЕЗ визита',
      content: [
        { kind: 'paragraph', text: 'С 2022 большинство операций доступно онлайн. Визит нужен только для биометрии или сложных случаев.' },
        { kind: 'checklist', items: [
          '✅ NIF для резидентов — онлайн через CMD или представителя',
          '✅ Смена адреса — онлайн',
          '✅ Активация пароля — онлайн (выдача по почте)',
          '✅ Декларация IRS — онлайн (Modelo 3)',
          '✅ Certidões — скачать PDF',
          '✅ Recibo Verde — оформление онлайн',
          '❌ NIF для иностранца БЕЗ CMD/представителя — только лично'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Portal das Finanças (налоговый портал) — Agendamentos', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.htmlindex.htmlindex.html', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Marcação no Serviço de Finanças', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/agendar-atendimento-no-servico-de-financas', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Autoridade Tributária (налоговая служба) — очный приём', url: 'https://info.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 365
}