export default {
  editorialVoice: 'hackportugal',
  id: 'modelo-30-nao-residentes',
  categoryId: 'taxes',
  title: 'Modelo 30 — ежемесячная декларация выплат нерезидентам',
  tldr: 'Modelo 30 подаётся в Finanças, когда empresa, ENI или atividade paga доход нерезиденту: иностранному подрядчику, арендодателю, консультанту, правообладателю, кредитору. Срок — до конца 2-го месяца после выплаты: платёж 10.04.2026 → декларация до 30.06.2026. Подаётся даже при применении Convenção para Evitar Dupla Tributação через Modelo 21-RFI. За просрочку обычно грозит coima от 150 € до 3 750 € по RGIT.',
  tags: ['modelo30', 'нерезиденты', 'irs', 'irc', 'retenção'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'Что такое Modelo 30 и когда она появляется',
      content: [
        { kind: 'paragraph', text: 'Modelo 30 — это ежемесячная declaração de rendimentos pagos ou colocados à disposição de sujeitos passivos não residentes. Проще: отчёт в Finanças о доходах, которые португальский плательщик выплатил человеку или компании без налогового резидентства в Португалии.' },
        { kind: 'paragraph', text: 'Для экспата это чаще всего возникает не в личной жизни, а когда у вас есть sociedade, ENI или atividade aberta: вы оплатили иностранного разработчика, маркетолога, консультанта, юриста, арендодателя, проценты, royalties, дивиденды или иные доходы, которые по португальским правилам считаются доходом нерезидента.' },
        { kind: 'checklist', items: [
          'Португальская Lda платит фрилансеру из Испании, США, Бразилии или Украины за услуги.',
          'Atividade / recibos verdes оплачивает иностранного подрядчика как бизнес-расход.',
          'Португальская компания платит аренду нерезидентному landlord за объект в Португалии.',
          'Компания выплачивает dividends/shareholder remuneration акционеру-нерезиденту.',
          'Есть проценты по займу нерезиденту.',
          'Есть royalties, лицензии, software/IP payments нерезиденту.',
          'Вы применили reduced rate или exemption по double tax treaty — отчётность всё равно обычно нужна.',
          'Выплата была не деньгами, а зачётом/удержанием/colocação à disposição — событие для Modelo 30 всё равно может возникнуть.'
        ] }
      ]
    },
    {
      id: 'who-files',
      title: 'Кто обязан подавать',
      content: [
        { kind: 'paragraph', text: 'Обязанность лежит на entidade devedora или entidade pagadora: на том, кто должен выплатить доход или фактически его выплачивает. Это может быть компания, associação, condomínio, ENI или физлицо с atividade, если выплата относится к его экономической деятельности.' },
        { kind: 'paragraph', text: 'Обычный наёмный работник без atividade, который просто покупает услугу для личных нужд у иностранца, как правило, не становится регулярным подателем Modelo 30. Но если у вас есть NIF с atividade aberta или empresa, бухгалтер должен проверять каждую иностранную выплату.' },
        { kind: 'warning', text: 'Не путайте Modelo 30 с IVA recapitulativa / VIES. VIES сообщает внутрисоюзные операции по IVA. Modelo 30 сообщает доходы нерезидентов для IRS/IRC и retenção na fonte. Иногда по одной операции нужны оба отчёта.' }
      ]
    },
    {
      id: 'deadline',
      title: 'Сроки: ежемесячно, но с лагом 2 месяца',
      content: [
        { kind: 'paragraph', text: 'Modelo 30 подаётся до конца 2-го месяца, следующего за месяцем выплаты, vencimento, liquidação, apuramento или colocação à disposição дохода. Не ждите годовой IRS/IRC — это именно ежемесячная обязанность.' },
        { kind: 'checklist', items: [
          'Выплата 05.01.2026 → подать до 31.03.2026.',
          'Выплата 29.02.2026 → подать до 30.04.2026.',
          'Выплата 10.04.2026 → подать до 30.06.2026.',
          'Выплата 31.12.2026 → подать до 28.02.2027.',
          'Если в месяце было несколько выплат нерезидентам, они включаются в декларацию за соответствующий месяц.',
          'Если выплат нерезидентам не было, нулевая Modelo 30 обычно не подаётся.',
          'Если срок выпал на выходной/праздник, применяются общие правила переноса налоговых сроков на следующий рабочий день.'
        ] },
        { kind: 'warning', text: 'Практическая ошибка: ориентироваться на дату invoice. Для Modelo 30 критична не только factura, а момент pagamento, vencimento или colocação à disposição. Согласуйте с бухгалтером, какую дату он использует в вашей ситуации.' }
      ]
    },
    {
      id: 'withholding-and-treaties',
      title: 'Retenção na fonte и договоры об избежании двойного налогообложения',
      content: [
        { kind: 'paragraph', text: 'Modelo 30 не заменяет удержание налога. Если по португальским правилам с дохода нерезидента нужно удержать IRS/IRC, плательщик удерживает retenção na fonte, платит её в Finanças и отдельно подаёт Modelo 30.' },
        { kind: 'paragraph', text: 'Ставка зависит от вида дохода, статуса получателя и налогового соглашения. В типичных кейсах у нерезидентов часто встречаются 25% по business/professional income, rents, royalties или corporate income, но дивиденды физлицам могут идти по 28%, а treaty может снизить ставку или дать освобождение. Не используйте одну ставку для всех платежей.' },
        { kind: 'checklist', items: [
          'Проверьте налоговое резидентство получателя на дату выплаты.',
          'Определите тип дохода: услуги, аренда, royalties, interest, dividends, pensions, commissions и т.д.',
          'Проверьте, считается ли доход полученным из источника в Португалии.',
          'Проверьте применимый Código do IRS или Código do IRC.',
          'Если есть Convenção para Evitar Dupla Tributação, получите Modelo 21-RFI до выплаты или до применения reduced rate.',
          'Храните certificado de residência fiscal получателя, если он требуется.',
          'Если документы по treaty не готовы, безопаснее удержать налог по внутренней ставке и затем разбирать refund/regularização.',
          'Отразите в Modelo 30 не только сумму дохода, но и удержанный налог или основание для не удержания.'
        ] },
        { kind: 'warning', text: 'Modelo 21-RFI — не «декларация вместо Modelo 30». Это документ для применения treaty relief. Даже когда налог не удерживается из-за договора, Modelo 30 обычно остаётся отчётностью плательщика.' }
      ]
    },
    {
      id: 'how-to-file',
      title: 'Как подать в Portal das Finanças',
      content: [
        { kind: 'substeps', items: [
          { id: 'collect-data', title: '1. Соберите данные по выплате', content: [
            { kind: 'checklist', items: [
              'NIF португальского плательщика.',
              'Месяц и год выплаты или colocação à disposição.',
              'Имя/название нерезидента.',
              'Страна налогового резидентства получателя.',
              'Иностранный tax identification number получателя, если есть.',
              'Тип дохода по таблицам Modelo 30.',
              'Gross amount до удержаний.',
              'Сумма retenção na fonte, если удерживалась.',
              'Основание для reduced rate или exemption, если применялся treaty.',
              'Данные Modelo 21-RFI / certificado de residência fiscal, если использовались.'
            ] }
          ] },
          { id: 'submit-online', title: '2. Подайте декларацию онлайн', content: [
            { kind: 'paragraph', text: 'Войдите в Portal das Finanças с NIF и senha или через Chave Móvel Digital. Раздел обычно находится в Entregar > Declarações > Modelo 30 или через поиск по сайту Finanças. Декларацию можно заполнить онлайн или отправить файлом, если бухгалтерская программа формирует XML.' }
          ] },
          { id: 'save-proof', title: '3. Сохраните доказательства', content: [
            { kind: 'checklist', items: [
              'Comprovativo de entrega Modelo 30.',
              'Копию invoice/contract с нерезидентом.',
              'Подтверждение банковского платежа.',
              'Comprovativo de pagamento retenção na fonte, если была.',
              'Modelo 21-RFI и certificado de residência fiscal.',
              'Переписку о налоговом статусе получателя.',
              'Расчёт ставки и ссылку на treaty/article, если применяли льготу.'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'mistakes',
      title: 'Типовые ошибки и штрафы',
      content: [
        { kind: 'checklist', items: [
          'Не подавать Modelo 30, потому что «поставщик выставил invoice без IVA». IVA и IRS/IRC-отчётность — разные режимы.',
          'Считать, что если подрядчик из EU, Modelo 30 не нужна. EU-статус сам по себе не отменяет обязанность.',
          'Платить gross сумму нерезиденту, когда нужно было удержать retenção na fonte.',
          'Применять treaty без Modelo 21-RFI или без подтверждения налогового резидентства.',
          'Отчитываться по дате invoice вместо даты выплаты/colocação à disposição.',
          'Забывать про выплаты учредителям-нерезидентам: dividends, interest, management fees.',
          'Не сверять Modelo 30 с бухгалтерскими расходами и банковскими платежами.',
          'Думать, что личный NIF без empresa всегда безопасен: если открыта atividade и платёж связан с ней, обязанность может возникнуть.'
        ] },
        { kind: 'paragraph', text: 'За неподачу или позднюю подачу налоговой декларации RGIT обычно предусматривает coima от 150 € до 3 750 €. Если ошибка связана с неудержанным налогом, сумма риска выше: Finanças может требовать сам налог, juros compensatórios и отдельные штрафы.' },
        { kind: 'warning', text: 'Если вы нашли пропущенные Modelo 30 за прошлые месяцы, не ждите проверки. Попросите contabilista подать falta/declaração de substituição и отдельно проверить retenção na fonte. Добровольное исправление обычно дешевле, чем уведомление от AT.' }
      ]
    }
  ],
  costs: [
    { label: 'Подача Modelo 30 в Finanças', amountEUR: 0, note: 'Госпошлины нет; подача через Portal das Finanças бесплатна.' },
    { label: 'Бухгалтерская подготовка одной декларации', amountEURMin: 20, amountEURMax: 75, note: 'Рыночный ориентир для малого бизнеса; сложные treaty-кейсы стоят дороже.' },
    { label: 'Штраф за неподачу/просрочку декларации', amountEURMin: 150, amountEURMax: 3750, note: 'Типовой диапазон coima по RGIT art. 116; итог зависит от фактов и поведения налогоплательщика.' }
  ],
  sources: [
    {
      title: 'Portal das Finanças — Modelo 30: rendimentos pagos a não residentes',
      url: 'https://info.portaldasfinancas.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IRS — Decreto-Lei 442-A/88, obrigações declarativas e retenção na fonte',
      url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/1988-34464575',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Autoridade Tributária — Convenções para evitar dupla tributação e formulários RFI',
      url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/convencoes_evitar_dupla_tributacao/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Regime Geral das Infrações Tributárias — coimas por falta de declarações',
      url: 'https://dre.pt/dre/legislacao-consolidada/lei/2001-34459875',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
