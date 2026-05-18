export default {
  editorialVoice: 'hackportugal',
  id: 'cessar-suspender-atividade',
  categoryId: 'work_business',
  title: 'Закрытие или приостановка recibos verdes: cessação/suspensão atividade',
  tldr: 'Recibos verdes закрываются или приостанавливаются онлайн в Portal das Finanças через Entregar Declaração de Alterações / Cessação de Atividade. Если вы в regime simplificado и без contabilidade organizada, обычно можно подать самому; при contabilidade organizada нужна submissão через contabilista certificado. Изменения подаются в течение 15 дней, cessação — в течение 30 дней. Услуга бесплатна, но после закрытия остаются IRS, IVA и Segurança Social за уже отработанные периоды.',
  tags: ['recibosverdes', 'finanças', 'irs', 'iva'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'when-to-close-or-suspend',
      title: 'Когда закрывать, а когда приостанавливать',
      content: [
        { kind: 'paragraph', text: 'Atividade aberta в Finanças означает, что вы официально можете выставлять recibos verdes и имеете налоговые обязанности по IRS, IVA и, при наличии условий, Segurança Social. Если вы больше не работаете как trabalhador independente, atividade лучше не оставлять открытой «на всякий случай».' },
        { kind: 'checklist', items: [
          'Cessação de atividade — окончательное закрытие: вы прекращаете работу как self-employed в Португалии.',
          'Suspensão da atividade — временная пауза: вы планируете вернуться к recibos verdes и не хотите полностью закрывать профиль.',
          'Alteração de atividade — не закрытие, а изменение данных: CAE/CIRS, адрес, IVA, regime, IBAN, прогноз оборота.',
          'Если вы уезжаете из Португалии и больше не будете получать доход по recibos verdes, обычно нужна cessação.',
          'Если у вас просто нет клиентов 1–2 месяца, закрытие не всегда обязательно, но проверьте Segurança Social и IVA.',
          'Если atividade открыта весь год или часть года, IRS Modelo 3 с Anexo B за этот год всё равно подаётся в 2027 году.',
          'Если вы в normal IVA regime, после закрытия могут остаться финальные declarações periódicas de IVA.',
          'Если вы в regime simplificado без contabilidade organizada, декларацию обычно можно подать самому в Portal das Finanças.'
        ] },
        { kind: 'warning', text: 'Cessação в Finanças не отменяет уже выставленные recibos verdes, не списывает IVA к уплате и не заменяет годовую декларацию IRS. Закрывается только будущая налоговая активность.' }
      ]
    },
    {
      id: 'three-reason-categories',
      title: '3 категории причин в Portal das Finanças',
      content: [
        { kind: 'paragraph', text: 'При подаче изменения или закрытия Portal das Finanças просит выбрать тип операции и причину. Формулировки на портале могут немного меняться, но практически они сводятся к трём категориям.' },
        { kind: 'checklist', items: [
          '1. Cessação — деятельность прекращена окончательно: больше не оказываете услуги, закрыли freelance-проект, перешли на contrato de trabalho, переехали или перестали вести независимую деятельность.',
          '2. Suspensão — деятельность временно не ведётся: пауза без recibos verdes, перерыв между контрактами, отпуск, болезнь, ожидание нового проекта.',
          '3. Alteração / reinício — деятельность не закрывается: меняете коды деятельности, режим IVA, прогноз оборота, адрес, IBAN или возобновляете ранее приостановленную atividade.',
          'Для большинства expat-сценариев причина выбирается по факту: «deixou de exercer atividade» для закрытия или временная suspensão, если планируете вернуться.',
          'Дата события важнее даты подачи: укажите реальную дату прекращения или приостановки, потому что от неё считаются IRS, IVA и Segurança Social.',
          'Если есть сомнение между suspension и cessação, проверьте последствия для IVA и Segurança Social до отправки.'
        ] },
        { kind: 'warning', text: 'Не выбирайте cessação задним числом без проверки. Если после указанной даты уже были recibos verdes, IVA-операции или банковские поступления за услуги, может появиться несостыковка в e-Fatura, IRS или IVA.' }
      ]
    },
    {
      id: 'online-process',
      title: 'Как закрыть или приостановить онлайн 🧾',
      content: [
        { kind: 'substeps', items: [
          { id: 'login', title: '1. Войти в Portal das Finanças', content: [
            { kind: 'paragraph', text: 'Зайдите на portaldasfinancas.gov.pt с NIF и паролем или через Chave Móvel Digital (CMD). Проверьте, что у вас есть доступ к личной área pessoal, а не только к e-Fatura.' }
          ] },
          { id: 'find-service', title: '2. Найти декларацию atividade', content: [
            { kind: 'paragraph', text: 'Ищите разделы Todos os Serviços → Atividade → Declarações → Entregar Declaração de Alterações de Atividade или Cessação de Atividade. На gov.pt эта услуга описана как изменение, приостановка, возобновление или прекращение atividade de trabalho independente de pessoa singular.' }
          ] },
          { id: 'choose-action', title: '3. Выбрать operação', content: [
            { kind: 'checklist', items: [
              'Alteração — если меняете параметры, но не закрываете atividade.',
              'Suspensão — если временно прекращаете работу.',
              'Reinício — если возвращаетесь после suspensão.',
              'Cessação — если закрываете atividade окончательно.',
              'Дата início/suspensão/cessação должна совпадать с реальной датой последней операции или прекращения работы.'
            ] }
          ] },
          { id: 'submit', title: '4. Проверить и отправить', content: [
            { kind: 'paragraph', text: 'Перед submissão скачайте или сохраните черновик, проверьте regime de IVA, códigos CAE/CIRS, дату и причину. После отправки сохраните comprovativo da declaração em PDF.' }
          ] }
        ] }
      ]
    },
    {
      id: 'deadlines-and-who-can-file',
      title: 'Сроки и кто может подать сам',
      content: [
        { kind: 'paragraph', text: 'Для trabalhadores independentes действуют общие сроки деклараций atividade. Изменения данных подаются в течение 15 дней с даты изменения. Cessação de atividade подаётся в течение 30 дней с даты прекращения деятельности. Эти сроки важны для IRS и IVA.' },
        { kind: 'checklist', items: [
          'Regime simplificado + без contabilidade organizada: обычно можно подать самому онлайн.',
          'Contabilidade organizada: декларацию должен подготовить или подать contabilista certificado.',
          'Если были recibos verdes с IVA, проверьте последнюю declaração periódica de IVA.',
          'Если были retenções na fonte, они отражаются у клиента и в вашем IRS.',
          'Если вы меняли страну налогового резидентства, отдельно обновите morada fiscal и representação fiscal, если она нужна.',
          'Если вы закрываете atividade из-за перехода в найм, contrato de trabalho не закрывает recibos verdes автоматически.',
          'Если вы открывали atividade недавно, закрытие не отменяет факт начала деятельности для Segurança Social.',
          'Если закрытие связано с ошибочно открытой atividade, лучше обращаться через e-Balcão и сохранять ответ AT.'
        ] },
        { kind: 'warning', text: 'Автоматический обмен между Finanças и Segurança Social существует, но не полагайтесь на него вслепую. После cessação или suspensão зайдите в Segurança Social Direta и проверьте статус trabalhador independente и квартальные declarações.' }
      ]
    },
    {
      id: 'after-closing',
      title: 'Что сделать после закрытия',
      content: [
        { kind: 'checklist', items: [
          'Скачайте comprovativo de cessação/suspensão из Portal das Finanças.',
          'Проверьте, что новые recibos verdes нельзя случайно выставить после даты cessação.',
          'Закройте все черновики recibos verdes и выставьте недостающие документы за работу до даты закрытия.',
          'Если вы в IVA normal regime, подайте финальную declaração periódica de IVA за соответствующий период.',
          'В 2027 году подайте IRS Modelo 3 за 2026 год с Anexo B, если в 2026 был доход Category B.',
          'Проверьте Anexo SS в IRS: он часто требуется для доходов от atividade independente, но есть исключения.',
          'В Segurança Social Direta проверьте, не ожидается ли declaração trimestral за квартал, где atividade ещё была открыта.',
          'Сохраните PDF-доказательства минимум на несколько лет: recibos, comprovativo, IVA, IRS, платежи Segurança Social.',
          'Если клиент просит invoice после cessação за работу, выполненную до закрытия, сначала уточните у contabilista или AT, чтобы не нарушить дату cessação.'
        ] },
        { kind: 'paragraph', text: 'Услуга закрытия или изменения atividade в Portal das Finanças бесплатна. Платными могут быть только услуги contabilista certificado, если у вас contabilidade organizada или сложная ситуация с IVA/международным доходом.' }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Частые ошибки expats',
      content: [
        { kind: 'checklist', items: [
          'Оставить atividade открытой после переезда и забыть про IRS/IVA.',
          'Закрыть atividade, но не подать IRS за год, где были recibos verdes.',
          'Считать, что ausência de rendimentos автоматически закрывает atividade.',
          'Путать cessação в Finanças с отменой NIF, NISS или налогового резидентства.',
          'Не проверить Segurança Social Direta после закрытия.',
          'Выставить recibo verde после даты cessação.',
          'Не сохранить comprovativo и потом не иметь доказательства даты закрытия.',
          'Выбрать alteração вместо cessação и думать, что atividade закрыта.',
          'Игнорировать IVA, если раньше были декларации в normal regime.',
          'Закрыть atividade задним числом без сверки с фактическими оплатами и invoices.'
        ] },
        { kind: 'warning', text: 'Если у вас есть иностранные клиенты, reverse charge, VAT-ID/VIES, crypto/IT-консалтинг, mixed income или смена резидентства в середине года, лучше проверить закрытие с contabilista. Ошибка в дате может стоить дороже, чем консультация.' }
      ]
    }
  ],
  costs: [
    { label: 'Подача cessação/suspensão в Portal das Finanças', amountEUR: 0, note: 'Государственная услуга бесплатна при самостоятельной подаче.' },
    { label: 'Contabilista certificado', amountEURMin: 30, amountEURMax: 150, note: 'Ориентир за разовую помощь; при contabilidade organizada подача обычно идёт через бухгалтера.' }
  ],
  sources: [
    {
      title: 'gov.pt: изменение, приостановка, возобновление или прекращение atividade independente',
      url: 'https://www2.gov.pt/en/servicos/fazer-alteracoes-a-atividade-de-trabalho-independente-de-uma-pessoa-singular',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças: área de atividade independente и declarações de atividade',
      url: 'https://www.portaldasfinancas.gov.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IRS в DRE: obrigações declarativas de início, alteração e cessação',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1988-34500675',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IVA в DRE: declarações de alteração e cessação de atividade',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1984-34500675',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}
