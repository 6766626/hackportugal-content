export default {
  editorialVoice: 'hackportugal',
  id: 'imt-stamp-duty-buy',
  categoryId: 'housing_buy',
  title: 'IMT и Imposto do Selo при покупке недвижимости',
  tldr: 'При покупке недвижимости в Португалии покупатель платит IMT и Imposto do Selo до escritura. База — большее из цены сделки и VPT из caderneta predial. Для жилья под própria e permanente в Continente в 2026 действует прогрессивная IMT-таблица: 0% до 106 346 €, затем 2–8%, отдельные ставки 6% и 7,5% для дорогих объектов (escalões обновлены OE 2026 +2%)\.\n\nImposto do Selo на покупку — 0,8%. Для jovens até 35 лет при первой покупке постоянного жилья есть освобождение до 330 539 € и частичная льгота до 661 078 €.',
  tags: ['imt', 'selo', 'escritura', 'недвижимость'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-you-pay',
      title: 'Что именно платит покупатель',
      content: [
        { kind: 'paragraph', text: 'IMT — Imposto Municipal sobre as Transmissões Onerosas de Imóveis, налог на передачу недвижимости. Imposto do Selo — гербовый сбор. Оба обычно оплачиваются до подписания escritura или documento particular autenticado, иначе нотариус/solicitador не завершит сделку.' },
        { kind: 'checklist', items: [
          'IMT платит покупатель, не продавец.',
          'Imposto do Selo на покупку — 0,8% от налоговой базы.',
          'Налоговая база — большее из двух значений: цена в договоре или VPT из caderneta predial.',
          'Для ипотечного кредита есть отдельный Imposto do Selo: обычно 0,6% от суммы кредита при сроке 5+ лет.',
          'Банковские комиссии по кредиту дополнительно облагаются Imposto do Selo 4%.',
          'Оплата делается по guia/DUC, обычно через Multibanco, homebanking или на Portal das Finanças.',
          'Подтверждение оплаты нужно принести на escritura.',
          'Если сделка сорвалась после оплаты, возврат возможен, но это отдельная процедура через Finanças.'
        ] },
        { kind: 'warning', text: 'Не считайте налог только от цены в CPCV. Если VPT выше цены сделки, Finanças возьмёт IMT и Selo от VPT. Это часто всплывает при дешёвых внутрисемейных продажах или старых объектах с переоценкой.' }
      ]
    },
    {
      id: 'imt-rates-mainland',
      title: 'Ставки IMT для жилья в Continente',
      content: [
        { kind: 'paragraph', text: 'Для городского жилья ставки зависят от назначения: habitação própria e permanente — основное жильё покупателя; habitação secundária или arrendamento — второе жильё, инвестиция или аренда. В Madeira и Açores применяются региональные таблицы.' },
        { kind: 'paragraph', text: 'Для habitação própria e permanente в Continente в таблице на 2026 (OE 2026, escalões подняты на 2%) используются такие пороги: до 106 346 € — 0%; 106 346–145 471 € — 2% минус parcela a abater 2 126,92 €; 145 471–198 347 € — 5% минус 6 491,03 €; 198 347–330 539 € — 7% минус 10 457,98 €; 330 539–661 078 € — 8% минус 13 763,38 €; 661 078–1 150 853 € — единая ставка 6%; выше 1 150 853 € — единая ставка 7,5%.' },
        { kind: 'checklist', items: [
          'Основное жильё до 106 346 € в Continente: IMT = 0 €, но Selo 0,8% остаётся, если нет отдельной льготы.',
          'Основное жильё 250 000 €: IMT = 250 000 × 7% − 10 252,92 € = 7 247,08 €.',
          'Основное жильё 350 000 €: IMT = 350 000 × 8% − 13 493,50 € = 14 506,50 €.',
          'Второе жильё/инвестиция обычно облагается с первого евро: льготной нулевой зоны как для основного жилья нет.',
          'Prédio rústico: ставка IMT 5%.',
          'Другие urban properties не для жилья: ставка IMT 6,5%.',
          'Покупатель, связанный с юрисдикцией из списка paraísos fiscais, может попасть на ставку IMT 10%.',
          'Если покупаете долю, налог считается по правилам сделки и стоимости передаваемой доли, но нотариус всё равно проверяет VPT.'
        ] }
      ]
    },
    {
      id: 'jovem-exemption',
      title: 'Льгота для молодых покупателей до 35 лет',
      content: [
        { kind: 'paragraph', text: 'С 2024 действует режим для jovens até 35 anos при первой покупке habitação própria e permanente (DL 44/2024). В 2026 практический порог полной льготы привязан к 4-му escalão IMT: до 330 539 €. Льгота касается IMT и Imposto do Selo на покупку.' },
        { kind: 'checklist', items: [
          'Покупателю должно быть не больше 35 лет на дату escritura.',
          'Объект должен быть для habitação própria e permanente, не для аренды и не для второго дома.',
          'Покупатель не должен быть собственником жилой недвижимости на дату сделки и в последние 3 года.',
          'До 330 539 €: IMT = 0 € и Selo на покупку = 0 €.',
          'От 330 539 € до 661 078 €: льгота частичная; налог платится только сверх защищённой части по механике Finanças.',
          'Выше 661 078 €: льгота не применяется.',
          'Если покупают двое и только один соответствует условиям, льгота применяется только к его доле.',
          'После покупки жильё нужно использовать как основное; смена назначения может привести к утрате льготы и доплате налога.'
        ] },
        { kind: 'paragraph', text: 'Пример: квартира для основного жилья за 350 000 €. По таблице 2026 обычный IMT — 14 236,62 €, Selo — 2 800 €. Для покупателя до 35 лет при первой покупке (DL 44/2024) льгота покрывает часть до 330 539 €, к оплате остаётся пропорциональная доля только сверх 330 539 €.' },
        { kind: 'warning', text: 'Перед CPCV проверьте льготу у solicitador/advogado и в Finanças. Ошибка в статусе “первое жильё” обычно обнаруживается прямо перед escritura, когда времени на перестройку сделки уже нет.' }
      ]
    },
    {
      id: 'how-to-pay',
      title: 'Как происходит оплата перед escritura',
      content: [
        { kind: 'paragraph', text: 'На практике расчёт делает нотариус, advogado, solicitador, Casa Pronta или банк. Но ответственность за правильность и оплату лежит на покупателе. Без comprovativo de pagamento сделку не проводят.' },
        { kind: 'substeps', items: [
          { id: 'collect-data', title: '1. Соберите данные объекта', content: [
            { kind: 'checklist', items: [
              'Caderneta predial с VPT.',
              'Certidão permanente do registo predial.',
              'Preço de compra из CPCV или проекта escritura.',
              'Назначение: própria e permanente или secundária/investimento.',
              'Доли покупателей, если покупают несколько человек.',
              'Возраст и условия для льготы jovem, если применимо.'
            ] }
          ] },
          { id: 'issue-guides', title: '2. Выпустите guias de pagamento', content: [
            { kind: 'paragraph', text: 'Guias IMT и Imposto do Selo можно оформить через Portal das Finanças или через специалиста, который ведёт сделку. В guia будет referência para pagamento и срок.' }
          ] },
          { id: 'pay-before-deed', title: '3. Оплатите до подписания', content: [
            { kind: 'checklist', items: [
              'Оплатите IMT и Selo до escritura, не после.',
              'Сохраните comprovativos в PDF.',
              'Проверьте, что NIF покупателя указан правильно.',
              'Проверьте, что matriz/VPT объекта совпадают с документами.',
              'Передайте подтверждения нотариусу или solicitador.',
              'Если есть ипотека, отдельно проверьте Selo по кредиту и комиссии банка.'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'budgeting',
      title: 'Как заложить бюджет сделки',
      content: [
        { kind: 'paragraph', text: 'IMT и Selo — не единственные расходы. Для безопасного бюджета считайте налоги, нотариальные расходы, registo, банковские комиссии и оценку объекта. При ипотеке банк часто списывает часть расходов ещё до escritura.' },
        { kind: 'checklist', items: [
          'Для основного жилья 200 000 €: IMT примерно 3 747,08 €, Selo 1 600 €.',
          'Для основного жилья 300 000 €: IMT примерно 10 747,08 €, Selo 2 400 €.',
          'Для основного жилья 500 000 €: IMT примерно 26 506,50 €, Selo 4 000 €.',
          'Если цена ниже VPT, пересчитайте все примеры от VPT.',
          'При ипотеке добавьте Selo по кредиту: 0,6% при сроке 5+ лет.',
          'Добавьте registo/escritura: часто несколько сотен евро, при Casa Pronta стандартно дешевле, чем сложная нотариальная сделка.',
          'Добавьте advogado/solicitador, если нужна проверка due diligence: обычно от сотен до нескольких тысяч евро по сложности.',
          'Не тратьте весь deposit на CPCV: налоги нужны наличными к дате escritura.'
        ] },
        { kind: 'warning', text: 'Банк финансирует цену покупки, но обычно не финансирует IMT, Imposto do Selo и нотариальные расходы. Эти деньги должны быть у покупателя отдельно.' }
      ]
    }
  ],
  costs: [
    { label: 'Imposto do Selo на покупку', amountEURMin: 0, amountEURMax: 0, note: 'Ставка 0,8% от цены или VPT, что выше; сумма зависит от объекта. При льготе jovem может быть 0 € до 330 539 €.' },
    { label: 'IMT для основного жилья в Continente', amountEURMin: 0, amountEURMax: 0, note: 'Прогрессивно по таблице 2026 (OE 2026 +2%): 0% до 106 346 €, затем 2–8%; для дорогих объектов единые ставки 6% (от 661 078 €) или 7,5% (от 1 150 853 €).' },
    { label: 'Imposto do Selo по ипотеке', amountEURMin: 0, amountEURMax: 0, note: 'Обычно 0,6% от суммы кредита при сроке 5+ лет; 0,5% при сроке от 1 до 5 лет; банковские комиссии облагаются Selo 4%.' },
    { label: 'Registo/escritura', amountEURMin: 375, amountEURMax: 1000, note: 'Ориентир для стандартной сделки; сложные нотариальные акты, доверенности и переводы увеличивают стоимость.' }
  ],
  sources: [
    {
      title: 'Portal das Finanças — Código do IMT (CIMT), índice',
      url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/cimt/Pages/codigo-do-imt-indice.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-05-05'
    },
    {
      title: 'Código do IMT — Decreto-Lei 287/2003, versão consolidada',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2003-34573375',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do Imposto do Selo — versão consolidada',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1999-34486675',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças: benefícios fiscais para jovens na compra da primeira habitação',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/questoes_frequentes/Pages/faqs-00644.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}
