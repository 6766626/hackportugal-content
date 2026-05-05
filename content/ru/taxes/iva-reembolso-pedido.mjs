export default {
  editorialVoice: 'hackportugal',
  id: 'iva-reembolso-pedido',
  categoryId: 'taxes',
  title: 'Возврат IVA при переплате: pedido de reembolso от 250 €',
  tldr: 'Если у recibos verdes или компании входящий IVA по расходам выше исходящего IVA по продажам, кредит можно не переносить, а запросить возврат через declaração periódica de IVA: поле 95 «Montante a reembolsar». Минимум для pedido de reembolso — 250 €. Подача идёт в Portal das Finanças вместе с месячной или квартальной декларацией; стандартная обработка AT — около 30 дней при автоматической валидации и до 60 дней по общему правилу art. 22 CIVA. Деньги приходят на IBAN, зарегистрированный в Finanças.',
  tags: ['iva', 'reembolso', 'finanças', 'recibosverdes'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'when-it-applies',
      title: 'Когда можно просить возврат IVA',
      content: [
        { kind: 'paragraph', text: 'Pedido de reembolso — это возврат накопленного кредита IVA. Он появляется, когда deductible IVA по покупкам, импорту, аренде, бухгалтерии, оборудованию и другим бизнес-расходам больше IVA, который вы начислили клиентам.' },
        { kind: 'checklist', items: [
          'Вы зарегистрированы как sujeito passivo de IVA: самозанятый с atividade aberta или компания.',
          'Вы подаёте declaração periódica de IVA — mensal или trimestral.',
          'В декларации получился crédito de imposto, а не IVA a pagar.',
          'Сумма к возврату в поле 95 — минимум 250 €.',
          'Расходы действительно относятся к облагаемой IVA деятельности.',
          'Счета-фактуры оформлены на ваш NIF или NIPC и видны/учтены в e-Fatura или бухгалтерии.',
          'IBAN подтверждён в Portal das Finanças.',
          'Нет пропущенных деклараций IVA, IES/DA или других обязательных отчётов, которые AT может использовать как основание для задержки.'
        ] },
        { kind: 'warning', text: 'Если вы работаете в режиме isenção art. 53 CIVA, вы обычно не начисляете IVA клиентам и не вычитаете IVA по расходам. Значит, стандартный pedido de reembolso через поле 95 вам не подходит.' }
      ]
    },
    {
      id: 'field-95',
      title: 'Поле 95: что именно вписывать',
      content: [
        { kind: 'paragraph', text: 'В declaração periódica de IVA после расчёта налога система показывает, есть ли IVA a pagar или crédito. Если кредит хотите вернуть деньгами, сумму ставят в quadro 06, campo 95 — «Montante a reembolsar». Если хотите перенести на следующий период, используют campo 96 — «Excesso a reportar».' },
        { kind: 'checklist', items: [
          'Можно запросить весь кредит или только часть, если поле 95 остаётся ≥250 €.',
          'Остаток, который не просите вернуть, переносится в следующие периоды.',
          'Сумму нельзя «придумать»: она должна вытекать из расчёта декларации.',
          'Если crédito меньше 250 €, pedido de reembolso не проходит — сумма переносится дальше.',
          'Для компаний с постоянными инвестициями возврат часто выгоднее, чем бесконечный перенос кредита.',
          'Для фрилансеров с небольшими расходами проще переносить crédito, пока он не достигнет 250 €.'
        ] },
        { kind: 'warning', text: 'Не смешивайте это с tourist tax free. Здесь речь о возврате IVA бизнесу или самозанятому налогоплательщику, зарегистрированному в Portuguese VAT system.' }
      ]
    },
    {
      id: 'before-submitting',
      title: 'Проверка перед отправкой в Finanças',
      content: [
        { kind: 'paragraph', text: 'AT автоматически сверяет декларации, e-Fatura, прошлые периоды, долги и банковские данные. Чем чище подготовка, тем выше шанс получить возврат без ручной проверки.' },
        { kind: 'checklist', items: [
          'Проверьте, что atividade aberta включает фактические CAE/CIRS-коды вашей деятельности.',
          'Сверьте все исходящие invoices/recibos verdes с суммами IVA в декларации.',
          'Проверьте входящие invoices: NIF/NIPC, дата, ставка IVA, связь с бизнесом.',
          'Исключите недопустимый IVA: личные расходы, часть расходов на легковые авто, штрафы, представительские расходы сверх разрешённого.',
          'Убедитесь, что нет пропущенных declarações periódicas de IVA за прошлые периоды.',
          'Проверьте, что Modelo 10, IES/DA и retenções na fonte, если применимо, поданы.',
          'Зайдите в Finanças → Dados Cadastrais → IBAN и подтвердите банковский счёт.',
          'Сохраните PDF декларации, список invoices и расчёт кредита — AT может запросить документы.'
        ] },
        { kind: 'warning', text: 'Если вы заявляете крупный reembolso сразу после открытия atividade или покупки дорогого оборудования, это не запрещено, но риск запроса документов выше. Держите invoice, proof of payment, договор и объяснение бизнес-использования.' }
      ]
    },
    {
      id: 'how-to-file',
      title: 'Как подать pedido de reembolso онлайн',
      content: [
        { kind: 'substeps', items: [
          { id: 'login', title: '1. Войти в Portal das Finanças', content: [
            { kind: 'paragraph', text: 'Авторизуйтесь через NIF + пароль, Chave Móvel Digital или Cartão de Cidadão. Для компании обычно нужен доступ представителя или contabilista certificado.' }
          ] },
          { id: 'declaration', title: '2. Открыть declaração periódica de IVA', content: [
            { kind: 'paragraph', text: 'Путь в Portal das Finanças меняется, но раздел обычно находится через IVA → Declaração Periódica → Entregar declaração. Выберите период: месячный или квартальный.' }
          ] },
          { id: 'calculate', title: '3. Заполнить IVA и рассчитать crédito', content: [
            { kind: 'paragraph', text: 'Укажите taxable operations, IVA liquidado, IVA dedutível, regularizações и другие поля. После расчёта проверьте, что получился excesso/crédito.' }
          ] },
          { id: 'request', title: '4. Заполнить campo 95', content: [
            { kind: 'paragraph', text: 'Впишите сумму возврата в поле 95. Если часть кредита переносите, проверьте поле 96. Отправьте декларацию и сохраните comprovativo.' }
          ] },
          { id: 'follow-up', title: '5. Отслеживать статус', content: [
            { kind: 'paragraph', text: 'Статус возврата смотрят в Portal das Finanças в área de IVA / reembolsos. Если AT попросит документы, ответьте в срок через e-Balcão или канал, указанный в уведомлении.' }
          ] }
        ] }
      ]
    },
    {
      id: 'deadlines-payment',
      title: 'Сроки: декларация, 30/60 дней и выплата',
      content: [
        { kind: 'paragraph', text: 'В 2026 стандартные сроки подачи declaração periódica de IVA: месячный режим — до 20-го числа второго месяца после периода; квартальный режим — до 20-го числа второго месяца после квартала. Например, IVA за январь 2026 подаётся до 20 марта 2026, а 1-й квартал 2026 — до 20 мая 2026.' },
        { kind: 'paragraph', text: 'После pedido de reembolso AT обрабатывает возврат примерно за 30 дней, если декларация проходит автоматические проверки и нет расхождений. По общему правилу art. 22 CIVA возврат должен быть выполнен до конца второго месяца после подачи запроса, то есть ориентируйтесь на срок до 60 дней.' },
        { kind: 'checklist', items: [
          'Деньги перечисляются на IBAN, зарегистрированный в Finanças.',
          'Если IBAN не подтверждён, выплата задержится.',
          'Если есть налоговые долги, AT может зачесть возврат против задолженности.',
          'Если запрошены документы, срок фактически растягивается до ответа и проверки.',
          'Если декларация заменена declaração de substituição, срок может считаться заново.',
          'Если AT просрочила законный срок без причины, могут начисляться juros indemnizatórios, но на практике это требует отдельного контроля.'
        ] }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Типичные ошибки экспатов',
      content: [
        { kind: 'checklist', items: [
          'Поставили в campo 95 сумму меньше 250 € — система или AT не примет pedido de reembolso.',
          'Заявили IVA по расходам без invoice на ваш NIF/NIPC.',
          'Вычли IVA по личным покупкам, поездкам семьи или домашним расходам без бизнес-связи.',
          'Работают по art. 53 CIVA, но пытаются вернуть IVA по расходам.',
          'Не обновили IBAN после смены банка.',
          'Пропустили квартальную декларацию и пытаются получить возврат в следующем периоде.',
          'Не учитывают prorata, если есть одновременно операции с правом и без права на вычет IVA.',
          'Считают, что возврат IVA — это доход. Это не доход для IRS/IRC, а возврат ранее уплаченного косвенного налога, но бухгалтерский учёт должен быть корректным.'
        ] },
        { kind: 'warning', text: 'Если сумма возврата существенная, а у вас нет contabilista certificado, лучше заплатить за проверку декларации. Ошибка в IVA может привести к correções, coimas и juros compensatórios.' }
      ]
    }
  ],
  costs: [
    { label: 'Подача pedido de reembolso в Portal das Finanças', amountEUR: 0, note: 'Госпошлины нет; возможна стоимость бухгалтера, если вы используете contabilista certificado.' },
    { label: 'Минимальная сумма возврата', amountEUR: 250, note: 'Campo 95 declaração periódica de IVA; меньший crédito переносится на следующий период.' }
  ],
  sources: [
    {
      title: 'gov.pt: Reembolso de Imposto sobre Valor Acrescentado (IVA) em Portugal',
      url: 'https://www2.gov.pt/cidadaos-europeus-viajar-viver-e-fazer-negocios-em-portugal/impostos-para-atividades-economicas-em-portugal/reembolso-de-imposto-sobre-valor-acrescentado-iva-em-portugal',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IVA, art. 22 — право на вычет, перенос и reembolso',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1984-34500675',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças: IVA — obrigações declarativas и declaração periódica',
      url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/civa_rep/Pages/iva22.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
