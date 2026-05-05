export default {
  editorialVoice: 'hackportugal',
  id: 'ato-isolado',
  categoryId: 'taxes',
  title: 'Ato Isolado — разовый счёт без открытия atividade',
  tldr: 'Ato Isolado — способ легально выставить разовый счёт в Portugal без abertura de atividade, если услуга или продажа действительно единичная и не является регулярной деятельностью. Практический лимит для освобождения от declaração de início de atividade — до 25 000 € за операцию; при повторяемости Finanças ждёт abertura de atividade. Обычно начисляется IVA 23% на материке и возможна retenção na fonte IRS 25% для услуг art. 151.º CIRS, если заказчик — компания.',
  tags: ['ato-isolado', 'irs', 'iva', 'finanças'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'Что такое Ato Isolado',
      content: [
        { kind: 'paragraph', text: 'Ato Isolado — это разовая операция: вы один раз оказали услугу или продали товар и хотите выставить официальный документ через Portal das Finanças без регистрации постоянной atividade как trabalhador independente.' },
        { kind: 'paragraph', text: 'Доход попадает в IRS как categoria B. Это не “налоговая лазейка”, а режим для случайных, непредвиденных или нерегулярных операций. Если вы регулярно делаете дизайн, консультации, уроки, разработку, переводы или сдаёте услуги одному и тому же клиенту — это уже abertura de atividade и recibos verdes.' },
        { kind: 'checklist', items: [
          'Подходит для одного разового проекта, бонусной консультации, единичной лекции, продажи услуги или работы по договору prestação de serviços',
          'Не требует abertura de atividade, если операция не превышает 25 000 €',
          'Выставляется онлайн в Portal das Finanças',
          'Может быть Fatura-Recibo Ato Isolado, если вам сразу платят',
          'Может быть сначала Fatura Ato Isolado, а позже Recibo, если оплата будет позже',
          'Доход декларируется в IRS за соответствующий год',
          'Обычно не создаёт обязанности платить Segurança Social как trabalhador independente'
        ] }
      ]
    },
    {
      id: 'when-you-can-use',
      title: 'Когда можно, а когда нельзя',
      content: [
        { kind: 'paragraph', text: 'Ключевой тест Finanças — не сумма сама по себе, а характер операции. Ato Isolado должен быть действительно изолированным. Лимит 25 000 € важен для освобождения от подачи declaração de início de atividade, но он не превращает регулярный фриланс “до 25 000 € в год” в законный Ato Isolado.' },
        { kind: 'checklist', items: [
          'Можно: один раз провести workshop за 800 € для компании',
          'Можно: один раз сделать сайт знакомой компании за 2 500 €',
          'Можно: единично продать профессиональную услугу без планов продолжения',
          'Рискованно: каждый месяц выставлять Ato Isolado одному клиенту',
          'Рискованно: 3–4 “разовых” счёта за похожие услуги в течение года',
          'Нельзя как постоянная замена recibos verdes при регулярной самозанятости',
          'Если операция выше 25 000 €, до счёта обычно нужна abertura de atividade',
          'Если вы уже ведёте atividade по этой сфере, используйте обычные faturas-recibo, а не Ato Isolado'
        ] },
        { kind: 'warning', text: 'Фраза “можно один раз в год до 25 000 €” — упрощение. Закон говорит о случайной операции и освобождении от declaração de início при операции до 25 000 €. Повторяемость важнее календарного года.' }
      ]
    },
    {
      id: 'taxes',
      title: 'Налоги: IVA, IRS и retenção',
      content: [
        { kind: 'paragraph', text: 'По IVA Ato Isolado обычно считается облагаемой операцией. На материковой Portugal стандартная ставка — 23%, Madeira — 22%, Açores — 18%. Освобождение по art. 53.º CIVA для малого оборота обычно не применяется к Ato Isolado; исключения бывают по характеру операции, например медицинские, образовательные или страховые услуги по art. 9.º CIVA.' },
        { kind: 'paragraph', text: 'По IRS доход декларируется в annual IRS declaration за год получения дохода. Для резидента он суммируется с прочими доходами и облагается по прогрессивным ставкам IRS; в 2026 первая ставка IRS — 11,97% для первого bracket. Итог зависит от всех доходов, deductions и статуса резидентства.' },
        { kind: 'checklist', items: [
          'IVA: обычно добавить 23% к цене на материке, если услуга не освобождена по CIVA',
          'Срок уплаты IVA: до конца месяца, следующего за завершением операции',
          'IRS: включить доход в декларацию IRS, обычно Anexo B',
          'Retenção na fonte: если клиент — компания или entidade com contabilidade organizada, может удерживаться IRS',
          'Типичная retenção для профессиональных услуг из tabela art. 151.º CIRS — 25%',
          'Для некоторых других доходов categoria B ставка удержания может быть 11,5%',
          'Можно применить dispensa de retenção по art. 101.º-B CIRS, если выполнены условия и доходы не превышают порог режима IVA art. 53.º CIVA',
          'Если клиент — физлицо без contabilidade organizada, retenção обычно не делается'
        ] },
        { kind: 'warning', text: 'Если вы не уверены, нужна ли retenção, спросите у клиента до выставления счёта. Исправлять Ato Isolado после оплаты сложнее, чем сразу выбрать правильные поля IVA и IRS.' }
      ]
    },
    {
      id: 'how-to-issue',
      title: 'Как выставить Ato Isolado в Portal das Finanças',
      content: [
        { kind: 'paragraph', text: 'Нужен NIF и доступ к Portal das Finanças. CMD не обязательна, но удобна для входа на госуслуги. Документ создаётся в разделе faturas e recibos verdes, даже если atividade не открыта.' },
        { kind: 'substeps', items: [
          { id: 'login', title: '1. Войти в Portal das Finanças', content: [
            { kind: 'paragraph', text: 'Зайдите на portaldasfinancas.gov.pt → Cidadãos → Serviços → Faturas e Recibos Verdes. Авторизуйтесь по NIF и паролю или через Chave Móvel Digital.' }
          ] },
          { id: 'choose-document', title: '2. Выбрать документ', content: [
            { kind: 'checklist', items: [
              'Fatura-Recibo Ato Isolado — если услуга оказана и деньги получены сразу',
              'Fatura Ato Isolado — если сначала выставляете счёт',
              'Recibo Ato Isolado — если позже подтверждаете оплату по уже выставленной fatura',
              'Не выбирайте обычный recibo verde, если atividade не открыта'
            ] }
          ] },
          { id: 'fill-fields', title: '3. Заполнить данные', content: [
            { kind: 'checklist', items: [
              'NIF клиента',
              'Nome или denominação social клиента',
              'Описание услуги или товара на португальском или английском',
              'Дата операции',
              'Valor base sem IVA',
              'Regime de IVA: ставка 23%, 22%, 18% или isenção с правовой ссылкой',
              'Retenção na fonte IRS: ставка или dispensa с правовой ссылкой',
              'Código CIRS/CAE, если система запрашивает классификацию деятельности'
            ] }
          ] },
          { id: 'validate', title: '4. Проверить до выпуска', content: [
            { kind: 'paragraph', text: 'Перед emissão проверьте сумму, ставку IVA и retenção. После выпуска документ уже видит клиент и Finanças; отмена или исправление возможны, но создают лишние следы и вопросы.' }
          ] }
        ] }
      ]
    },
    {
      id: 'after-issuing',
      title: 'Что сделать после выставления',
      content: [
        { kind: 'paragraph', text: 'После emissão у вас появляются две основные обязанности: заплатить IVA, если он был начислен, и включить доход в IRS. Сам факт Ato Isolado не означает автоматическую регистрацию в Segurança Social как trabalhador independente.' },
        { kind: 'checklist', items: [
          'Скачайте PDF документа и отправьте клиенту',
          'Если начислен IVA, оплатите его до конца следующего месяца',
          'Сохраните подтверждение оплаты IVA',
          'Сохраните договор, e-mail с заказом, proof of payment и переписку',
          'Проверьте, удержал ли клиент retenção na fonte и выдал ли declaração anual de rendimentos',
          'В следующем году подайте IRS с Anexo B в обычный срок 1 апреля — 30 июня',
          'Не забудьте включить Ato Isolado, даже если налог уже частично удержан клиентом',
          'Если после Ato Isolado работа стала регулярной, откройте atividade до следующего счёта'
        ] },
        { kind: 'warning', text: 'Не откладывайте IVA. Для Ato Isolado это не “ваш доход”, а налог, который вы собрали с клиента и должны перечислить Estado.' }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Типичные ошибки экспатов',
      content: [
        { kind: 'checklist', items: [
          'Выставляют несколько Ato Isolado подряд вместо abertura de atividade',
          'Договариваются о цене “1 000 €”, а потом забывают, что сверху может быть IVA 23%',
          'Не обсуждают retenção с корпоративным клиентом и получают меньше денег на счёт',
          'Выбирают isenção de IVA без законного основания',
          'Думают, что Ato Isolado не надо показывать в IRS',
          'Путают лимит 25 000 € с разрешением на регулярный годовой фриланс',
          'Используют Ato Isolado при уже открытой atividade по той же услуге',
          'Не хранят документы, подтверждающие разовый характер операции'
        ] },
        { kind: 'paragraph', text: 'Практический подход: если это первый и, вероятно, единственный счёт — Ato Isolado удобен. Если вы уже ищете клиентов, планируете повторять услугу или делаете это как профессию — открывайте atividade и работайте через recibos verdes.' }
      ]
    }
  ],
  costs: [
    { label: 'Выставление Ato Isolado в Portal das Finanças', amountEUR: 0, note: 'Госпошлины нет' },
    { label: 'IVA на материковой Portugal', amountEURMin: 0, amountEURMax: 0, note: 'Обычно 23% от базы; это налог к перечислению, а не фиксированная пошлина' },
    { label: 'Retenção na fonte IRS для многих профессиональных услуг', amountEURMin: 0, amountEURMax: 0, note: 'Часто 25% от базы, удерживает клиент при наличии обязанности' }
  ],
  sources: [
    {
      title: 'Autoridade Tributária: IRS — Atos Isolados, folheto informativo',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Folhetos_informativos/Documents/Inicio_atividade.pdf',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IRS — categoria B, atos isolados и retenção na fonte',
      url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/Cod_download/Documents/CIRS.pdf',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IVA — sujeitos passivos, início de atividade и regras de IVA',
      url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/civa_rep/Pages/iva31.aspx',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças — recibos verdes e faturas-recibo',
      url: 'https://www.portaldasfinancas.gov.pt/at/html/index.htmlindex.htmlindex.html',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 90
}
