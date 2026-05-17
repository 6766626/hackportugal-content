export default {
  editorialVoice: 'hackportugal',
  id: 'cheque-dentista-pnpso',
  categoryId: 'healthcare',
  title: 'Cheque-Dentista — государственный стоматологический ваучер PNPSO',
  tldr: 'Cheque-Dentista — ваучер SNS по программе PNPSO на приём у стоматолога-участника. В 2026 году номинал обычного ваучера — 45 €. Право есть не у всех: дети и подростки по возрастным группам/школе или направлению médico de família, беременные под наблюдением SNS, пожилые с Complemento Solidário para Idosos, люди с VIH/SIDA. Ваучер выдаёт SNS, использовать его можно только у dentista aderente из списка PNPSO, обычно в пределах срока действия, указанного на самом чеке.',
  tags: ['sns', 'dentista', 'pnpso', 'ваучер'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'Что такое Cheque-Dentista',
      content: [
        { kind: 'paragraph', text: 'Cheque-Dentista — не скидочный купон и не частная страховка. Это государственный ваучер Programa Nacional de Promoção de Saúde Oral (PNPSO), которым SNS оплачивает базовое стоматологическое лечение у частных стоматологов, подключённых к программе.' },
        { kind: 'paragraph', text: 'В 2026 году стандартный cheque-dentista имеет номинал 45 €. Пациент не получает деньги на руки: стоматолог проводит лечение, регистрирует использованный чек в системе PNPSO и получает оплату от государства.' },
        { kind: 'checklist', items: [
          'Ваучер действует только у dentistas aderentes — стоматологов из официального списка PNPSO.',
          'Обычно покрываются консультация, диагностика, профилактика, пломбы, удаление зубов и другие базовые процедуры по клиническим правилам PNPSO.',
          'Не покрываются эстетические процедуры: отбеливание, виниры, косметическая ортодонтия.',
          'Если лечение дороже или не входит в PNPSO, стоматолог должен заранее объяснить, что оплачивается отдельно.',
          'Ваучер имеет номер, дату выдачи и срок действия — проверяйте validade до записи.',
          'Наличие NIF, número de utente и регистрации в SNS сильно упрощает получение и использование ваучера.'
        ] }
      ]
    },
    {
      id: 'who-can-get',
      title: 'Кому положен ваучер в 2026 году',
      content: [
        { kind: 'paragraph', text: 'PNPSO адресная программа. Сам факт проживания в Португалии или наличие ВНЖ не дают автоматического права на Cheque-Dentista. Нужна принадлежность к одной из групп SNS.' },
        { kind: 'checklist', items: [
          'Дети и подростки: ваучеры выдаются по возрастным группам PNPSO, часто через школу, médico de família или hygienist oral. Ключевые школьные возрасты — 7, 10 и 13 лет; дальнейшие чеки возможны при выполнении условий программы.',
          'Дети младшего возраста: в отдельных клинических ситуациях направление может выдать médico de família в Centro de Saúde.',
          'Беременные: grávidas acompanhadas no SNS могут получить до 3 cheques-dentista за беременность.',
          'Пожилые: beneficiários do Complemento Solidário para Idosos (CSI) могут получать cheques-dentista по правилам PNPSO.',
          'Люди с VIH/SIDA: ваучеры выдаются через SNS по специальному маршруту PNPSO.',
          'Дополнительно в PNPSO есть направление для раннего выявления рака полости рта, но это отдельный маршрут и не обычный “бесплатный чек на стоматолога”.'
        ] },
        { kind: 'warning', text: 'Экспаты часто пропускают эту льготу из-за частных клиник: если ребёнок учится в Португалии, беременность ведётся в SNS или у пожилого родственника есть CSI, спросите именно про “cheque-dentista PNPSO” в Centro de Saúde или школе.' }
      ]
    },
    {
      id: 'how-to-get',
      title: 'Как получить Cheque-Dentista',
      content: [
        { kind: 'substeps', items: [
          { id: 'children', title: 'Для ребёнка или подростка', content: [
            { kind: 'paragraph', text: 'Спросите в школе, у médico de família или в Centro de Saúde, входит ли ребёнок в текущую возрастную группу PNPSO. В государственных школах процесс часто идёт через школьную медицину; у детей вне школьного маршрута — через семейного врача.' },
            { kind: 'checklist', items: [
              'Número de utente ребёнка.',
              'Documento de identificação: Cartão de Cidadão, ВНЖ или паспорт.',
              'NIF, если уже есть.',
              'Данные школы и год обучения, если ваучер идёт через школьный маршрут.',
              'Контакты родителя или законного представителя.'
            ] }
          ] },
          { id: 'pregnancy', title: 'Для беременной', content: [
            { kind: 'paragraph', text: 'Обратитесь к médico de família, enfermeira de saúde materna или в Centro de Saúde, где ведётся беременность. Попросите emissão de cheque-dentista para grávida. Обычно доступно до 3 чеков в течение беременности.' }
          ] },
          { id: 'elderly-csi', title: 'Для пожилого с CSI', content: [
            { kind: 'paragraph', text: 'Нужно быть получателем Complemento Solidário para Idosos. В Centro de Saúde проверяют право на льготу и выпускают cheque-dentista по PNPSO.' }
          ] },
          { id: 'hiv', title: 'Для людей с VIH/SIDA', content: [
            { kind: 'paragraph', text: 'Маршрут обычно идёт через врача SNS, который наблюдает пациента. Не нужно обсуждать диагноз с частной клиникой до выдачи ваучера: сначала получите направление/чек в SNS.' }
          ] }
        ] }
      ]
    },
    {
      id: 'use-it',
      title: 'Как использовать ваучер у стоматолога',
      content: [
        { kind: 'paragraph', text: 'После выдачи cheque-dentista выберите стоматолога из официального списка PNPSO. Не каждая частная клиника принимает государственные чеки, даже если работает с Médis, Multicare или другими страховками.' },
        { kind: 'checklist', items: [
          'Откройте список profissionais aderentes на портале Saúde Oral / PNPSO.',
          'Позвоните в клинику и прямо скажите: “Tenho um cheque-dentista do PNPSO”.',
          'Уточните, принимает ли врач именно вашу категорию чека: criança, grávida, idoso CSI, VIH/SIDA.',
          'Возьмите на приём документ личности, número de utente и сам cheque-dentista: бумажный или электронный номер.',
          'До процедуры спросите, что полностью покрывает cheque-dentista, а что будет платно.',
          'Не подписывайте согласие на платные услуги, если не поняли цену.',
          'После приёма проверьте, нужен ли следующий cheque-dentista и кто его активирует — стоматолог или Centro de Saúde.'
        ] },
        { kind: 'warning', text: 'Если срок действия истёк, стоматолог не сможет списать ваучер. Не откладывайте запись: в Лиссабоне, Порту и пригородах у dentistas aderentes могут быть очереди.' }
      ]
    },
    {
      id: 'common-problems',
      title: 'Частые проблемы у иностранцев',
      content: [
        { kind: 'checklist', items: [
          'Нет número de utente: сначала зарегистрируйтесь в SNS через Centro de Saúde по адресу проживания.',
          'Ребёнок в частной или международной школе: спросите в Centro de Saúde, есть ли маршрут PNPSO вне школьной выдачи.',
          'Беременность ведётся только в частной клинике: для cheque-dentista обычно нужно сопровождение или регистрация беременности в SNS.',
          'Пожилой родственник имеет низкий доход, но не оформил CSI: без Complemento Solidário para Idosos право на “idoso” cheque-dentista может не появиться.',
          'Клиника просит доплату: это возможно только за услуги вне покрытия PNPSO; попросите orçamento до лечения.',
          'Стоматолог не найден рядом: расширьте поиск по concelho и соседним freguesias на портале PNPSO.',
          'Язык: при записи используйте простую фразу “Quero marcar consulta com cheque-dentista PNPSO”.'
        ] },
        { kind: 'paragraph', text: 'Если в Centro de Saúde говорят, что “вам не положено”, попросите уточнить причину по категории PNPSO: idade da criança, grávida, CSI или VIH/SIDA. Иногда проблема не в праве, а в том, что данные utente, беременности, школы или CSI ещё не подтянулись в системе.' }
      ]
    }
  ],
  costs: [
    { label: 'Номинал стандартного Cheque-Dentista', amountEUR: 45, note: 'Оплачивается SNS напрямую стоматологу-участнику PNPSO; пациент деньги не получает.' },
    { label: 'Доплата пациента', amountEURMin: 0, amountEURMax: 0, note: 'За процедуры, покрытые PNPSO, доплаты быть не должно. Услуги вне покрытия оплачиваются только после согласования цены.' },
    { label: 'Частная консультация без ваучера', amountEURMin: 40, amountEURMax: 90, note: 'Ориентир по рынку; в крупных городах и у специалистов может быть дороже.' }
  ],
  sources: [
    {
      title: 'SNS 24: Cheques-Dentista',
      url: 'https://www.sns24.gov.pt/servico/cheques-dentista/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Programa Nacional de Promoção de Saúde Oral — PNPSO',
      url: 'https://www.saudeoral.min-saude.pt/pnpso/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'SNS 24: Registo e acesso ao Serviço Nacional de Saúde',
      url: 'https://www.sns24.gov.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
