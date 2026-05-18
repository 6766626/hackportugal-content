export default {
  editorialVoice: 'hackportugal',
  id: 'change-tax-address',
  categoryId: 'documents_fiscal',
  title: 'Смена налогового адреса (domicílio fiscal) в Finanças',
  tldr: 'Налоговый адрес (domicílio fiscal) — обязательное поле в Finanças. По art. 19.º LGT (Lei Geral Tributária) новый адрес нужно сообщить в течение 60 дней. Смена бесплатна. Если у вас Cartão de Cidadão — адрес меняется через процедуру CC/ePortugal с подтверждением кодом из письма; если только NIF — через Portal das Finanças → Alterar Domicílio Fiscal.\n\nВАЖНО: смена адреса в Finanças НЕ обновляет автоматически AIMA, SNS, Segurança Social, банк, водительские права — каждое ведомство уведомляйте отдельно. Для IMI важен главным образом статус habitação própria e permanente; сама ставка IMI зависит от município, где находится объект.',
  tags: ['domicílio fiscal', 'адрес', 'Finanças', 'переезд'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'online',
      title: 'Онлайн — самый быстрый способ',
      content: [
        { kind: 'checklist', items: [
          '💻 Если у вас Cartão de Cidadão: меняйте morada через ePortugal/Cartão de Cidadão; подтверждение кодом из письма по почте. После подтверждения адрес передаётся в AT',
          '💻 Если у вас только NIF/ВНЖ без Cartão de Cidadão: portaldasfinancas.gov.pt → «Os Seus Serviços» → «Dados Pessoais Relevantes» → «Alterar Domicílio Fiscal»',
          '🏠 Ввести новый адрес (rua, número, código postal, freguesia)',
          '✅ Для AT-only изменения обычно применяется сразу или после валидации; для CC — после подтверждения кодом из письма',
          '📬 Скачать comprovativo/certidão в Portal das Finanças и сохранить PDF',
          '🆓 Бесплатно'
        ]},
        { kind: 'warning', text: 'Смена адреса в Finanças НЕ обновляет автоматически адрес в AIMA, SNS, Segurança Social, банке или водительских правах. Каждое ведомство уведомляйте отдельно. Для CC процедура может частично обновить ряд ведомств через AMA, но AIMA и многие сервисы — нет.' }
      ]
    },
    {
      id: 'in-person',
      title: 'Лично в Finanças',
      content: [
        { kind: 'checklist', items: [
          'Нужно только если Portal отказывает (например, адрес не распознан в CTT)',
          'Запись через Portal → «Agendamento (запись на приём)» → «Alteração de Morada»',
          'В некоторых отделениях возможен atendimento sem marcação, но рассчитывать на него не стоит; безопаснее записаться заранее',
          'Документы: Cartão de Cidadão / ВНЖ + подтверждение адреса (счёт за коммунальные услуги, договор аренды)'
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
      title: 'Когда обязательно сменить',
      content: [
        { kind: 'checklist', items: [
          '🏠 Переезд в пределах Португалии (60-дневный срок, art. 19.º LGT)',
          '🇵🇹 Переезд в Португалию и фактическое выполнение критериев налогового резидентства (183+ дней или жильё, указывающее на habitual residence); получение ВНЖ само по себе не равно tax residence',
          '✈️ При выезде из Португалии: обновите domicílio fiscal в AT в течение 60 дней и отдельно проверьте, будете ли вы налоговым резидентом за этот год по art. 16.º CIRS',
          '🏝️ Переезд на Madeira / Açores — скидки по IRS',
          '💼 Регистрация компании — адрес может отличаться от домашнего'
        ]},
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
    { title: 'Portal das Finanças — Alteração de Morada', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.html', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Lei Geral Tributária (LGT) — artigo 19.º, domicílio fiscal', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1998-34541975', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Código do IRS — art. 16.º, 71.º, 72.º (residência, taxas)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1988-34544875', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'ePortugal — Alterar morada do Cartão de Cidadão', url: 'https://eportugal.gov.pt/servicos/alterar-a-morada-do-cartao-de-cidadao', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 365
}