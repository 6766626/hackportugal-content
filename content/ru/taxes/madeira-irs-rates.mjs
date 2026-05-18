export default {
  editorialVoice: 'hackportugal',
  id: 'madeira-irs-rates',
  categoryId: 'taxes',
  title: 'IRS на Мадейре: отдельная налоговая ставка для резидентов автономного региона',
  tldr: 'У налоговых резидентов Madeira применяется отдельная таблица IRS, а не таблица mainland Portugal. В 2026 у Мадейры пониженные ставки: для нижнего диапазона MCS указывает 8,75% против материковой справочной 12,50%; при этом актуальная общенациональная первая ставка IRS на 2026 — 11,97%, поэтому финальный расчёт проверяйте в симуляторе AT. Для капитального дохода стандартная специальная ставка на Madeira — 19,6% вместо 28%. Ключевое условие — fiscal domicile на Madeira.',
  tags: ['irs', 'madeira', 'налоги', 'finanças'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-different',
      title: 'Что именно отличается на Madeira',
      content: [
        { kind: 'paragraph', text: 'Madeira — Região Autónoma, поэтому для резидентов региона IRS считается по собственной региональной шкале. Это не скидка, которую надо отдельно просить, а отдельная таблица ставок, применяемая в годовой декларации Modelo 3, если ваш налоговый домициль относится к Madeira.' },
        { kind: 'paragraph', text: 'Главная практическая разница — ниже прогрессивные ставки IRS и ниже специальные ставки по части пассивного дохода. По материалам MCS на 2026 год первая региональная ставка Madeira — 8,75%, а стандартная специальная ставка на capital income — 19,6% вместо 28% на mainland Portugal.' },
        { kind: 'warning', text: 'Не путайте три режима: обычные региональные ставки Madeira, IFICI и Zona Franca/MIBC. Переезд на Madeira сам по себе не делает вас участником IFICI и не даёт корпоративные льготы MIBC.' }
      ]
    },
    {
      id: 'who-qualifies',
      title: 'Кто имеет право на ставки Madeira',
      content: [
        { kind: 'paragraph', text: 'Ставки Madeira применяются к физическим лицам, которые являются налоговыми резидентами Португалии и имеют fiscal domicile в Região Autónoma da Madeira. Для экспата это обычно означает: вы живёте на острове, обновили адрес в Finanças и подаёте IRS как резидент.' },
        { kind: 'checklist', items: [
          'Вы налоговый резидент Португалии: обычно 183+ дней в стране за год или жильё, указывающее на намерение постоянного проживания.',
          'Ваш адрес в NIF обновлён на Madeira через Portal das Finanças, balcão Finanças или с помощью representante fiscal.',
          'У вас есть доказательство проживания: договор аренды, escritura/caderneta predial, счёт коммунальных услуг или atestado de residência.',
          'В Modelo 3 IRS указан правильный fiscal domicile, относящийся к Região Autónoma da Madeira.',
          'Доход декларируется как резидентский доход в Португалии, включая зарубежные доходы, если вы стали налоговым резидентом.',
          'Если вы переехали в течение года, важна дата фактического переезда и дата изменения адреса в Finanças — не оставляйте старый mainland-адрес до подачи IRS.',
          'Если у вас есть супруг/партнёр и совместная декларация, проверьте адрес и резидентство обоих налогоплательщиков.'
        ] },
        { kind: 'warning', text: 'Владение квартирой на Madeira не равно налоговому резидентству Madeira. Finanças смотрит на fiscal domicile и фактическую связь с регионом, а не только на покупку недвижимости.' }
      ]
    },
    {
      id: 'income-types',
      title: 'Какие доходы выигрывают от региональной ставки',
      content: [
        { kind: 'paragraph', text: 'Снижение заметнее всего по обычному облагаемому доходу: зарплата, пенсия, self-employment/recibos verdes, часть rental income при выборе englobamento. В 2026 первая общенациональная ставка IRS для материка после обновлений — 11,97%, но Madeira применяет собственную пониженную региональную таблицу; коммерческие обзоры MCS отдельно указывают нижнюю ставку Madeira 8,75%.' },
        { kind: 'checklist', items: [
          'Categoria A — зарплата по contrato de trabalho.',
          'Categoria B — recibos verdes, freelancing, sole trader.',
          'Categoria H — пенсии, если они облагаются в Португалии.',
          'Categoria F — аренда, если вы выбираете englobamento вместо автономной ставки.',
          'Categoria E — проценты и дивиденды: часто есть выбор между retenção liberatória/специальной ставкой и englobamento.',
          'Categoria G — capital gains: зависит от типа актива, резидентства и правил englobamento.',
          'Зарубежные доходы тоже нужно декларировать, если вы резидент Португалии; применяются соглашения об избежании двойного налогообложения и foreign tax credit.'
        ] },
        { kind: 'paragraph', text: 'Для капитального дохода Madeira часто даёт прямую экономию: стандартная специальная ставка 28% на материке уменьшается на 30%, то есть до 19,6%. Это особенно важно для процентов, некоторых дивидендов, rental income при автономной ставке и отдельных capital gains.' }
      ]
    },
    {
      id: 'how-to-set-up',
      title: 'Как не потерять ставку Madeira',
      content: [
        { kind: 'substeps', items: [
          { id: 'change-address', title: '1. Обновите fiscal domicile', content: [
            { kind: 'paragraph', text: 'После переезда поменяйте адрес в NIF на Madeira. Если у вас Cartão de Cidadão или Chave Móvel Digital (CMD), часть операций можно сделать онлайн; иностранцам с ВНЖ часто проще через Portal das Finanças или лично в serviço de Finanças.' }
          ] },
          { id: 'keep-proof', title: '2. Сохраните доказательства проживания', content: [
            { kind: 'checklist', items: [
              'Contrato de arrendamento, зарегистрированный в Finanças.',
              'Recibos de renda от арендодателя.',
              'Счета за электричество, воду, интернет на ваше имя.',
              'Atestado de residência от Junta de Freguesia.',
              'Трудовой договор или recibos verdes с деятельностью на Madeira.',
              'Билеты и документы переезда, если год был переходным.'
            ] }
          ] },
          { id: 'file-irs', title: '3. Проверьте Modelo 3 перед отправкой', content: [
            { kind: 'paragraph', text: 'Подача IRS обычно идёт с 1 апреля по 30 июня за предыдущий налоговый год. В декларации проверьте адрес, регион, состав семьи, anexos и режим налогообложения доходов E/F/G: иногда englobamento выгоднее, иногда специальная ставка 19,6% лучше.' }
          ] }
        ] }
      ]
    },
    {
      id: 'pitfalls',
      title: 'Частые ошибки экспатов',
      content: [
        { kind: 'checklist', items: [
          'Оставили адрес NIF в Лиссабоне/Порту, хотя живут на Madeira.',
          'Думают, что аренда Airbnb на 2 месяца автоматически даёт региональные ставки.',
          'Не декларируют зарубежные проценты, дивиденды или брокерский счёт, потому что деньги не приходили в Португалию.',
          'Сравнивают только нижнюю ставку, но не считают весь IRS: deductions, social security, surcharge и foreign tax credit могут менять итог.',
          'Путают withholding tax с окончательным налогом: удержание у источника не всегда равно финальному IRS.',
          'Не проверяют, выгоден ли englobamento для процентов, дивидендов, аренды и capital gains.',
          'Полагаются на старые таблицы NHR: NHR закрыт для новых заявителей, его заменил IFICI, а региональная ставка Madeira существует отдельно.'
        ] },
        { kind: 'warning', text: 'Если Finanças посчитает, что ваш реальный налоговый домициль не на Madeira, декларацию могут пересчитать по mainland-правилам и начислить доплату, juros compensatórios и штраф.' }
      ]
    }
  ],
  costs: [
    { label: 'Смена fiscal domicile в Finanças', amountEUR: 0, note: 'Обычно бесплатно; расходы возможны только на нотариальные/переводческие документы или представителя.' },
    { label: 'Atestado de residência в Junta de Freguesia', amountEURMin: 0, amountEURMax: 10, note: 'Тариф зависит от freguesia; часто нужен как доказательство адреса.' },
    { label: 'Бухгалтер/consultor fiscal для IRS', amountEURMin: 80, amountEURMax: 300, note: 'Обычный диапазон за частную декларацию с иностранными доходами; сложные кейсы стоят дороже.' }
  ],
  sources: [
    {
      title: 'MCS: Personal Income Tax in Madeira vs Mainland Portugal in 2026',
      url: 'https://mcs.pt/personal-income-tax-in-madeira-vs-mainland-portugal-in-2026/',
      kind: 'company',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'MCS: Reduced IRS Rates in Madeira — Who Qualifies in 2026',
      url: 'https://mcs.pt/reduced-irs-rates-in-madeira-who-qualifies-in-2026/',
      kind: 'company',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Autoridade Tributária: Código do IRS, taxas gerais e taxas especiais',
      url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/irs/Pages/irs68.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DRE: Lei Orgânica 2/2013 — Lei das Finanças das Regiões Autónomas',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei-organica/2013-34545875',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}
