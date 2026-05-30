export default {
  editorialVoice: 'hackportugal',
  id: 'financas-appointment',
  categoryId: 'documents_fiscal',
  title: 'Запись на приём в Finanças — онлайн и без очереди',
  tldr: 'Finanças перешла на гибридную модель: большая часть операций — онлайн, приём по записи через Portal das Finanças («Atendimento por Marcação / Agendar atendimento»). Без записи иногда можно попасть при наличии senhas/свободного обслуживания, но это не гарантировано. Запись бесплатная; доступные даты зависят от отделения и услуги — в Lisboa/Porto слоты могут разбираться быстро. Популярные услуги: NIF, смена адреса, пароль, IRS, Recibo Verde, IUC, IMT (налог на покупку недвижимости).',
  tags: ['finanças', 'запись', 'приём'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'how-to-book',
      title: 'Как записаться',
      content: [
        { kind: 'checklist', items: [
          '💻 Portal das Finanças → Contactos / Atendimento por Marcação / Agendar atendimento',
          '🌐 e-balcão — это альтернатива для письменного запроса в AT, но не запись на приём',
          '📱 Нужен вход с паролем или CMD',
          '🏛️ Выбрать отделение (Serviço de Finanças)',
          '📋 Выбрать услугу из списка',
          '📅 Выбрать доступную дату и время; длительность зависит от услуги',
          '✅ Подтвердить, скачать comprovativo с QR-кодом',
          '🔔 Сохраните comprovativo записи; если система отправит напоминание email/SMS — проверьте данные контакта'
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
          '🚗 IUC — налог на транспортное средство (20 мин)',
          '🏠 IMT — налог при покупке недвижимости (20 мин)',
          '🏢 IMI — 30 мин',
          '📄 Apoio ao preenchimento de IRS — 30–45 мин; основной сезон подачи Modelo 3: 1 апреля – 30 июня'
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
          'Без записи лучше рассчитывать только на срочные или простые вопросы; при высокой загрузке могут попросить записаться'
        ]}
      ]
    },
    {
      id: 'no-show',
      title: 'Пропустил приём',
      content: [
        { kind: 'paragraph', text: 'Если не можете прийти, отмените или перенесите запись как можно раньше через тот же канал, где бронировали. Проверьте условия отмены в comprovativo подтверждения записи.' },
        { kind: 'checklist', items: [
          '⚠️ Отменяйте/переносите заранее',
          '🔄 После no-show сделайте новую запись; если система не даёт выбрать слот, обратитесь через e-balcão или Centro de Atendimento Telefónico da AT',
          '📞 Если опоздали < 15 мин — часто принимают',
          '🚫 Опоздали > 15 мин — нужна новая запись'
        ]}
      ]
    },
    {
      id: 'online-alternatives',
      title: 'Что можно сделать БЕЗ визита',
      content: [
        { kind: 'paragraph', text: 'С 2022 большинство операций доступно онлайн. Визит в Finanças обычно нужен для случаев, где требуется очная идентификация, невозможно решить вопрос через Portal/e-balcão или услуга недоступна онлайн. Биометрия в Finanças не оформляется — это AIMA/IRN.' },
        { kind: 'checklist', items: [
          '✅ Получение NIF иностранцем зависит от статуса и документов: нерезидент обычно через налогового представителя/mandatário через e-balcão или лично в Serviço de Finanças',
          '✅ Смена адреса — онлайн',
          '✅ Активация пароля — онлайн (выдача по почте)',
          '✅ Декларация IRS — онлайн (Modelo 3)',
          '✅ Certidões — скачать PDF',
          '✅ Recibo Verde — оформление онлайн',
          '❌ Если у иностранца нет доступа к Portal/CMD и нет представителя/mandatário — обычно остаётся очное обращение в Serviço de Finanças с документами'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Portal das Finanças — Atendimento por Marcação', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.html', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'ePortugal — Agendar atendimento no Serviço de Finanças', url: 'https://www.gov.pt/servicos/agendar-atendimento-no-servico-de-financas', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'AT — e-balcão (письменные запросы)', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.html', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 365
}