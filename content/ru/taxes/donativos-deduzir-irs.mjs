export default {
  editorialVoice: 'hackportugal',
  id: 'donativos-deduzir-irs',
  categoryId: 'taxes',
  title: 'Donativos IRS: налоговые льготы за пожертвования по Lei do Mecenato',
  tldr: 'Пожертвования в Португалии могут уменьшить IRS, если у получателя есть право принимать donativos fiscalmente relevantes и платёж оформлен с вашим NIF. Базовое правило для физлиц: 25% суммы donativo вычитается из collecta IRS; для многих IPSS, религиозных, культурных и научных организаций действует лимит до 15% collecta. В декларации IRS 2025, подаваемой с 01.04 по 30.06.2026, это проверяется в Anexo H, Quadro 6. Consignação de IRS 0,5% — это не расход и не то же самое.',
  tags: ['irs', 'donativos', 'mecenato', 'anexo-h'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-counts',
      title: 'Что считается donativo для IRS',
      content: [
        { kind: 'paragraph', text: 'Donativo — это безвозмездное пожертвование деньгами или имуществом организации, признанной для целей налоговых льгот: IPSS, Misericórdias, некоторые associações, fundações, Igreja и другие религиозные организации, культурные, научные, образовательные и социальные entidades.' },
        { kind: 'paragraph', text: 'Для физлица-резидента налоговый эффект обычно такой: 25% суммы пожертвования вычитается из collecta IRS — налога, рассчитанного до персональных вычетов. Это не возврат 25% на карту автоматически, а уменьшение итогового IRS к уплате или увеличение возврата, если была retenção na fonte.' },
        { kind: 'checklist', items: [
          'Пожертвование сделано организации, имеющей право на benefício fiscal по EBF / regime do mecenato',
          'В квитанции или recibo указан ваш NIF',
          'Платёж можно подтвердить: transferência bancária, MB WAY, Multibanco, cartão, cheque',
          'Получатель корректно сообщил donativo в AT или вы можете внести его вручную в IRS',
          'Пожертвование не было оплатой услуги, билета, членского взноса с встречной выгодой',
          'Вы являетесь налоговым резидентом Португалии за соответствующий год',
          'Donativo относится к году декларации: пожертвования 2025 года заявляются в IRS 2025, подача в 2026 году'
        ] }
      ]
    },
    {
      id: 'deduction-rules',
      title: 'Сколько можно вычесть: 25% и лимит collecta',
      content: [
        { kind: 'paragraph', text: 'Стандартное правило для физических лиц по Estatuto dos Benefícios Fiscais: 25% суммы donativos вычитается из collecta IRS. Для большинства пожертвований частным IPSS, религиозным, культурным, научным и социальным entidades действует потолок: вычет не может превышать 15% вашей collecta.' },
        { kind: 'paragraph', text: 'Пример: collecta IRS = 3 000 €. Вы пожертвовали 1 000 € в IPSS с правом на benefício fiscal. Расчёт: 1 000 € × 25% = 250 €. Лимит 15% collecta = 450 €. Значит, можно использовать весь вычет 250 €.' },
        { kind: 'paragraph', text: 'Если при той же collecta 3 000 € вы пожертвовали 3 000 €, расчётный вычет = 750 €, но лимит 15% collecta = 450 €. В IRS зачтут максимум 450 €.' },
        { kind: 'warning', text: 'В интернете часто путают три разные вещи: donativos с вычетом 25%, consignação de IRS 0,5% и корпоративные правила mecenato для компаний. Для физлиц в IRS не применяйте “5%” как универсальную ставку вычета. Если организация говорит о специальном режиме cultural/scientific mecenato, попросите у неё фискальный recibo и подтвердите код льготы в Anexo H.' }
      ]
    },
    {
      id: 'documents',
      title: 'Какие документы сохранить',
      content: [
        { kind: 'paragraph', text: 'AT может принять часть данных автоматически, но обязанность доказать вычет остаётся у налогоплательщика. Храните документы минимум 4 года после подачи декларации, как и другие IRS-доказательства.' },
        { kind: 'checklist', items: [
          'Recibo de donativo от организации',
          'Название и NIPC/NIF организации-получателя',
          'Ваш NIF как doador',
          'Дата пожертвования',
          'Сумма в €',
          'Формулировка, что это donativo без встречной услуги',
          'Указание на enquadramento fiscal: EBF / Lei do Mecenato / entidade elegível',
          'Подтверждение платежа из банка, MB WAY или Multibanco',
          'Email или письмо от организации, если recibo пришёл отдельно',
          'Для donativo in kind — оценка стоимости и документ передачи'
        ] },
        { kind: 'warning', text: 'Покупка билета на благотворительный ужин, мерча, лотереи или членство в клубе обычно не является donativo на всю сумму, если вы получили товар или услугу. Налоговый вычет возможен только на безвозмездную часть, если она выделена документально.' }
      ]
    },
    {
      id: 'declare-anexo-h',
      title: 'Как заявить в IRS: Anexo H, Quadro 6',
      content: [
        { kind: 'paragraph', text: 'Декларация IRS за 2025 год подаётся на Portal das Finanças с 01.04.2026 по 30.06.2026. Donativos проверяются в Modelo 3 → Anexo H → Quadro 6. Если сумма уже предзаполнена, проверьте NIF получателя, код льготы и сумму.' },
        { kind: 'substeps', items: [
          { id: 'login', title: '1. Войти на Portal das Finanças', content: [
            { kind: 'paragraph', text: 'Используйте NIF + senha или Chave Móvel Digital. Откройте IRS → Entregar declaração → IRS Automático или Modelo 3. Если у вас есть сложные доходы, recibos verdes, иностранные доходы или изменения резидентства, чаще нужен Modelo 3 вручную.' }
          ] },
          { id: 'check-h', title: '2. Открыть Anexo H', content: [
            { kind: 'paragraph', text: 'В Anexo H находятся deduções à coleta и benefícios fiscais. Donativos отражаются в Quadro 6. Если используете IRS Automático, всё равно откройте предварительный расчёт и проверьте, учтены ли donativos.' }
          ] },
          { id: 'validate', title: '3. Сверить суммы', content: [
            { kind: 'checklist', items: [
              'Сумма совпадает с recibo',
              'Год пожертвования правильный',
              'NIF/NIPC организации правильный',
              'Код льготы соответствует типу entidade',
              'Нет дубликата одной и той же суммы',
              'Вычет не превышает применимый лимит collecta',
              'После симуляции IRS видно уменьшение налога или увеличение возврата'
            ] }
          ] },
          { id: 'manual', title: '4. Если donativo не появился', content: [
            { kind: 'paragraph', text: 'Можно внести данные вручную в Anexo H, если у вас есть документ от организации. После ручного изменения сохраните recibo и подтверждение оплаты: AT может запросить доказательства через e-Balcão или при проверке декларации.' }
          ] }
        ] }
      ]
    },
    {
      id: 'consignacao',
      title: 'Не путайте с consignação de IRS 0,5%',
      content: [
        { kind: 'paragraph', text: 'Consignação de IRS — это отдельный механизм: вы выбираете entidade, которой государство перечислит 0,5% вашего liquidated IRS. Это не увеличивает ваш налог и не уменьшает ваш возврат. Это просто направление части уже рассчитанного IRS выбранной организации.' },
        { kind: 'paragraph', text: 'Donativo — это ваши реальные деньги, перечисленные организации в течение года. Он может дать вычет 25% в пределах лимитов. Consignação 0,5% можно сделать даже без пожертвования, а donativo можно заявить независимо от consignação.' },
        { kind: 'checklist', items: [
          'Donativo: вы платите организации сами',
          'Donativo: нужен recibo с вашим NIF',
          'Donativo: заявляется как benefício fiscal в Anexo H',
          'Donativo: обычно даёт вычет 25% суммы',
          'Consignação: денег из вашего кармана нет',
          'Consignação: государство перечисляет 0,5% IRS выбранной entidade',
          'Consignação: не заменяет налоговый вычет за пожертвование'
        ] }
      ]
    },
    {
      id: 'expat-pitfalls',
      title: 'Типичные ошибки экспатов',
      content: [
        { kind: 'warning', text: 'Если вы не были налоговым резидентом Португалии в году пожертвования или подаёте IRS как нерезидент только по португальским доходам, персональные deduções à coleta могут не сработать так же, как у резидента. Проверьте статус резидентства за год, а не дату подачи декларации.' },
        { kind: 'checklist', items: [
          'Донат был сделан с иностранной карты, но recibo без NIF — вычет может пропасть',
          'Пожертвование сделано иностранной charity без португальского фискального статуса — автоматического вычета в IRS обычно нет',
          'Организация “некоммерческая”, но не имеет права на benefício fiscal — одного слова associação недостаточно',
          'Внесли donativo как despesa geral familiar — это неправильная категория',
          'Заявили сумму в год оплаты не по тому налоговому году',
          'Путают collecta с зарплатным удержанием: лимит 15% считается от collecta, а не от вашего gross salary',
          'Удалили Anexo H, потому что “IRS Automático всё посчитал” — donativos могли не попасть в расчёт'
        ] },
        { kind: 'paragraph', text: 'Практичный тест перед крупным пожертвованием: попросите у организации фразу “emite recibo de donativo para efeitos fiscais em IRS?” и уточните NIPC, режим и код/описание для Anexo H. Если ответ расплывчатый, не рассчитывайте на вычет.' }
      ]
    }
  ],
  sources: [
    {
      title: 'Portal das Finanças: информация и формы IRS / Anexo H',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/IRS/Pages/default.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças: modelos e formulários IRS',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/modelos_formularios/irs/Pages/default.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DRE: Estatuto dos Benefícios Fiscais, regime dos donativos e mecenato',
      url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2002-148011287',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
