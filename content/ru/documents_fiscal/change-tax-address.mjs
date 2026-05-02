export default {
  editorialVoice: 'hackportugal',
  id: 'change-tax-address',
  categoryId: 'documents_fiscal',
  title: 'Смена налогового адреса (domicílio fiscal) в Finanças',
  tldr: 'Налоговый адрес (domicílio fiscal) — обязательное поле в Finanças. По ст. 19 LGT (Lei Geral Tributária) новый адрес нужно сообщить в течение 60 дней. Смена бесплатна и делается онлайн на portaldasfinancas.gov.pt за 3 минуты. ВАЖНО: смена адреса в Finanças НЕ обновляет автоматически адрес в AIMA, SNS, Segurança Social, IRN/Cartão de Cidadão, банке, IMT — каждое ведомство нужно уведомить отдельно. От domicílio fiscal зависит: куда придут письма AT, регион IMI и ставка IRS (на Madeira/Açores действуют скидки).',
  tags: ['domicílio fiscal', 'адрес', 'Finanças', 'переезд'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'online',
      title: 'Онлайн — самый быстрый способ',
      content: [
        { kind: 'checklist', items: [
          '💻 Войти на portaldasfinancas.gov.pt (пароль или Chave Móvel Digital)',
          '📂 «Os Seus Serviços» → «Dados Pessoais Relevantes» → «Alterar Morada»',
          '🏠 Ввести новый адрес (rua, número, código postal, freguesia)',
          '✅ Подтвердить — изменение вступает в силу сразу',
          '📬 Получить PDF-подтверждение на электронную почту — сохранить',
          '🆓 Бесплатно'
        ]},
        { kind: 'warning', text: 'Смена адреса в Finanças НЕ обновляет автоматически адрес в AIMA, SNS, Segurança Social, IRN, банке или водительских правах. Если у вас Cartão de Cidadão — отдельно меняйте адрес Cartão de Cidadão через ePortugal/Loja de Cidadão (это обновит ряд ведомств через AMA, но не AT). Каждое ведомство уведомляйте отдельно.' }
      ]
    },
    {
      id: 'in-person',
      title: 'Лично в Finanças',
      content: [
        { kind: 'checklist', items: [
          'Нужно только если Portal отказывает (например, адрес не распознан в CTT)',
          'Запись через Portal → «Agendamento (запись на приём)» → «Alteração de Morada»',
          'Или без записи в крупных отделениях Lisboa/Porto',
          'Документы: Cartão de Cidadão / ВНЖ + подтверждение адреса (счёт за коммунальные услуги, договор аренды)'
        ]}
      ]
    },
    {
      id: 'foreign-address',
      title: 'Иностранный адрес (нерезидентам)',
      content: [
        { kind: 'paragraph', text: 'Если вы НЕ резидент Португалии, но имеете NIF — адрес может быть иностранным. Смена — через тот же Portal, но в поле «País» нужно выбрать вашу страну.' },
        { kind: 'warning', text: 'Адрес сам по себе ≠ налоговое резидентство; статус резидентства зависит от фактических критериев Código do IRS (183+ дней или постоянное жильё). Для нерезидентов доходы из источников в Португалии облагаются по специальным ставкам (Código do IRS art. 71-72): зарплата/самозанятость обычно 25%, дивиденды/проценты обычно 28%, недвижимость — по своим правилам. Соглашения об избежании двойного налогообложения могут изменять ставки.' }
      ]
    },
    {
      id: 'when-change',
      title: 'Когда обязательно сменить',
      content: [
        { kind: 'checklist', items: [
          '🏠 Переезд в пределах Португалии (60-дневный срок)',
          '🇵🇹 Въезд в Португалию и получение ВНЖ (стать налоговым резидентом)',
          '✈️ Выезд из Португалии (стать нерезидентом — или сохранить налоговое резидентство Португалии через 183+ дней)',
          '🏝️ Переезд на Madeira / Açores — скидки по IRS',
          '💼 Регистрация компании — адрес может отличаться от домашнего',
          '👫 Брак / развод — обновить семейное положение в Finanças'
        ]}
      ]
    },
    {
      id: 'confirmation',
      title: 'Certidão de domicílio fiscal — справка',
      content: [
        { kind: 'paragraph', text: 'Справка подтверждает ваш текущий налоговый адрес. Нужна для банков, аренды, визовых дел.' },
        { kind: 'checklist', items: [
          'Portal das Finanças → «Certidões» → «Certidão de Domicílio Fiscal (справка о налоговом адресе)»',
          'Моментально, PDF с QR-кодом',
          'Бесплатно',
          'Проверка через portaldasfinancas.gov.pt/certidoes'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Portal das Finanças — Alteração de Morada', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.html', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei Geral Tributária (LGT) — artigo 19 (domicílio fiscal)', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/1998-34541975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código do IRS — artigos 71 e 72 (taxas para não residentes)', url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/cirs_rep/Pages/default.aspx', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal — Alterar Domicílio Fiscal', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/alterar-o-domicilio-fiscal', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 365
}