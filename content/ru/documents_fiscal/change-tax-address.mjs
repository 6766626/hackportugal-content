export default {
  editorialVoice: 'hackportugal',
  id: 'change-tax-address',
  categoryId: 'documents_fiscal',
  title: 'Смена налогового адреса (domicílio fiscal) в Finanças',
  tldr: 'Налоговый адрес (domicílio fiscal) — обязательное поле в Finanças. По art. 19.º LGT (Lei Geral Tributária) новый адрес нужно сообщить в течение 60 дней — иначе штраф **75–375 €** по RGIT, а сама смена может быть признана неэффективной для налоговых целей.\n\nЕсли у вас Cartão de Cidadão — адрес меняется через gov.pt/Cartão de Cidadão с подтверждением кодом из бумажного письма (приходит ~5 рабочих дней, на подтверждение даётся 90 дней). После подтверждения адрес автоматически передаётся в AT.\n\nЕсли только NIF/ВНЖ без Cartão de Cidadão — через Portal das Finanças → «Cidadãos» → «Serviços» → «Dados Cadastrais» → «Morada» → «Entregar Pedido de Alteração». Процесс тоже двухфазный: запрос + подтверждение кодом из письма.\n\nСмена бесплатна. ВАЖНО: смена адреса в Finanças НЕ обновляет автоматически AIMA, SNS, Segurança Social, банк, водительские права — каждое ведомство уведомляйте отдельно. Для IMI важен главным образом статус habitação própria e permanente; сама ставка IMI зависит от município, где находится объект.',
  tags: ['domicílio fiscal', 'адрес', 'Finanças', 'переезд'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'online',
      title: 'Онлайн — самый быстрый способ',
      content: [
        { kind: 'paragraph', text: 'Процесс **двухфазный** независимо от пути: сначала запрос, затем подтверждение кодом из бумажного письма, которое приходит на новый адрес.' },
        { kind: 'checklist', items: [
          '💳 **Если у вас Cartão de Cidadão**: gov.pt → «Alterar a morada do Cartão de Cidadão». Авторизация через **Chave Móvel Digital + телефон**, ИЛИ **Cartão de Cidadão + PIN + cardreader**. После подтверждения адрес автоматически передаётся в AT и в часть других сервисов через AMA',
          '🧾 **Если только NIF/ВНЖ без Cartão de Cidadão**: portaldasfinancas.gov.pt → «Cidadãos» → «Serviços» → «Dados Cadastrais» → «Morada» → «Entregar Pedido de Alteração». Авторизация через CMD или CC',
          '🔁 **Альтернатива через e-balcão** (для специфических случаев, например смены статуса резидент/нерезидент): «Registo Contribuinte» → «Identific» → «Alteração Morada / Singulares», с возможностью загрузить документы',
          '🏠 Ввести новый адрес (rua, número, código postal, freguesia)',
          '📬 Дождаться письма с кодом подтверждения — ~5 рабочих дней (на Мадейре/Азорах может дольше)',
          '✅ Ввести код на той же странице. На подтверждение даётся **до 90 дней** с момента запроса',
          '📄 После подтверждения скачать comprovativo/certidão в Portal das Finanças и сохранить PDF',
          '🆓 Бесплатно'
        ]},
        { kind: 'warning', text: 'Без подтверждения кодом смена считается **неэффективной для налоговых целей** — для AT адрес остаётся старым. Не игнорируйте письмо.' },
        { kind: 'warning', text: 'Смена адреса в Finanças НЕ обновляет автоматически адрес в AIMA, SNS, Segurança Social, банке или водительских правах. Каждое ведомство уведомляйте отдельно. Для CC процедура может частично обновить ряд ведомств через AMA, но AIMA и многие сервисы — нет.' }
      ]
    },
    {
      id: 'in-person',
      title: 'Лично в Finanças',
      content: [
        { kind: 'checklist', items: [
          'Нужно только если Portal отказывает (например, адрес не распознан в CTT) или нет CMD/CC-reader',
          'Запись через Portal → «Agendamento (запись на приём)» → «Alteração de Morada»',
          'В некоторых отделениях возможен atendimento sem marcação, но рассчитывать на него не стоит; безопаснее записаться заранее',
          'Документы: Cartão de Cidadão / ВНЖ + подтверждение адреса (счёт за коммунальные услуги, договор аренды)',
          'Двухфазность сохраняется: личный приём = только запрос, код всё равно приходит письмом'
        ]}
      ]
    },
    {
      id: 'foreign-address',
      title: 'Иностранный адрес (нерезидентам)',
      content: [
        { kind: 'paragraph', text: 'Если вы НЕ резидент Португалии, но имеете NIF — адрес может быть иностранным. Смена — через тот же Portal, но в поле «País» нужно выбрать вашу страну.' },
        { kind: 'warning', text: 'Иностранный domicílio fiscal обычно означает регистрацию в AT как нерезидент, но налоговое резидентство определяется по правилам art. 16.º CIRS (183+ дней или жильё, указывающее на habitual residence). Для нерезидентов доходы из источников в Португалии облагаются по специальным ставкам: зарплата/самозанятость часто 25% (art. 72), дивиденды/проценты обычно 28% удержания, blacklist-юрисдикции — 35%; недвижимость — по своим правилам. Соглашения об избежании двойного налогообложения могут изменять ставки.' },
        { kind: 'warning', text: 'Если ваш налоговый адрес вне ЕС/ЕЭЗ, проверьте обязанность назначить representante fiscal. В ряде случаев она снимается подключением к электронным уведомлениям, но для IVA/профессиональной деятельности представитель может оставаться обязательным.' }
      ]
    },
    {
      id: 'when-change',
      title: 'Когда обязательно сменить + штрафы',
      content: [
        { kind: 'checklist', items: [
          '🏠 Переезд в пределах Португалии (60-дневный срок, art. 19.º LGT)',
          '🇵🇹 Переезд в Португалию и фактическое выполнение критериев налогового резидентства (183+ дней или жильё, указывающее на habitual residence); получение ВНЖ само по себе не равно tax residence',
          '✈️ При выезде из Португалии: обновите domicílio fiscal в AT в течение 60 дней и отдельно проверьте, будете ли вы налоговым резидентом за этот год по art. 16.º CIRS',
          '🏝️ Переезд на Madeira / Açores — скидки по IRS',
          '💼 Регистрация компании — адрес может отличаться от домашнего'
        ]},
        { kind: 'warning', text: '**Штраф за нарушение 60-дневного срока: 75–375 €** по Regime Geral das Infrações Tributárias (RGIT). Помимо штрафа, без актуального адреса AT может направлять уведомления по старому адресу — а вы пропускаете дедлайны и теряете возможность оспорить.' },
        { kind: 'paragraph', text: 'Брак/развод — это не смена domicílio fiscal, но нужно проверить dados pessoais/agregado familiar для IRS.' }
      ]
    },
    {
      id: 'confirmation',
      title: 'Certidão de domicílio fiscal — справка',
      content: [
        { kind: 'paragraph', text: 'Справка подтверждает ваш текущий налоговый адрес. Может понадобиться банку, арендодателю, бухгалтеру или госоргану; требования зависят от конкретной процедуры.' },
        { kind: 'checklist', items: [
          'Portal das Finanças → «Certidões» → «Certidão de Domicílio Fiscal»',
          'Моментально, PDF с QR-кодом',
          'Бесплатно',
          'Проверка подлинности — через Portal das Finanças → Validar certidão/documento, по коду или QR-коду на PDF'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Portal das Finanças — Alteração de Morada (FAQ)', url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/questoes_frequentes/pages/faqs-00303.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-29' },
    { title: 'Portal das Finanças — Morada (Dados Pessoais)', url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_ao_contribuinte/Cidadaos/Dados_pessoais_familia/Dados_pessoais/Morada/Paginas/default.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-29' },
    { title: 'gov.pt — Alterar a morada do Cartão de Cidadão', url: 'https://www.gov.pt/servicos/alterar-a-morada-do-cartao-de-cidadao', kind: 'official', language: 'pt', lastRetrieved: '2026-05-29' },
    { title: 'Lei Geral Tributária (LGT) — artigo 19.º, domicílio fiscal', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1998-34541975', kind: 'law', language: 'pt', lastRetrieved: '2026-05-29' },
    { title: 'Código do IRS — art. 16.º, 71.º, 72.º (residência, taxas)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1988-34544875', kind: 'law', language: 'pt', lastRetrieved: '2026-05-29' }
  ],
  lastVerified: '2026-05-29',
  verifyIntervalDays: 365,
  recentlyChangedAt: '2026-05-29',
  changeSummary: '🔄 Сверка май 2026: (1) eportugal.gov.pt мигрировал на gov.pt — обновили URL источников; (2) меню Portal das Finanças переименовано: «Dados Pessoais Relevantes» → «Dados Cadastrais»; (3) добавили конкретику: код приходит ~5 раб. дней, на подтверждение 90 дней; (4) добавили штраф **75–375 €** (RGIT) за пропуск 60-дневного срока; (5) уточнили методы аутентификации (CMD + телефон или CC + PIN + cardreader); (6) добавили e-balcão как альтернативу для смены статуса резидент/нерезидент.'
}
