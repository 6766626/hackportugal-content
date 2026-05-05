export default {
  editorialVoice: 'hackportugal',
  id: 'aceitar-pagamentos-cartao',
  categoryId: 'work_business',
  title: 'Приём платежей картой: POS, MB WAY merchant, SumUp и Stripe для самозанятых',
  tldr: 'В Португалии self-employed/PME обычно принимают карты через банковский POS/SIBS, мобильный терминал SumUp или онлайн через Stripe. SumUp публично указывает комиссию 1,69% за транзакцию и без mensalidade; банковские POS часто имеют аренду терминала и MDR по договору. MB WAY для бизнеса подключается как merchant-сервис через банк/PSP, а не как личные переводы. Чек POS не заменяет fatura: продажу нужно оформить в Portal das Finanças или сертифицированной faturação.',
  tags: ['pos', 'mbway', 'stripe', 'sumup', 'faturas'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'choose-channel',
      title: '1. Выберите канал оплаты под ваш сценарий',
      content: [
        { kind: 'paragraph', text: 'Для самозанятого в Португалии нет одного «обязательного» POS. Вы выбираете поставщика: банк/SIBS для классического терминала, SumUp для быстрого старта без аренды, Stripe для онлайн-оплат и подписок, MB WAY merchant для платежей по номеру телефона/QR/checkout.' },
        { kind: 'checklist', items: [
          'Офлайн-услуги на месте: SumUp или банковский POS.',
          'Магазин, кафе, салон, регулярный поток: POS через банк/SIBS с договорным MDR.',
          'Онлайн-оплата картой: Stripe Checkout, Payment Links или интеграция в сайт.',
          'Португальская аудитория: добавьте MB WAY merchant — клиенты активно используют MB WAY.',
          'Разовые услуги без сайта: Stripe Payment Link или SumUp payment link.',
          'B2B-счета: банковский перевод + fatura-recibo часто дешевле карты.',
          'Высокий средний чек: сравните % комиссии и фиксированную часть, иначе карта съест маржу.'
        ] }
      ]
    },
    {
      id: 'providers',
      title: '2. Что дают SIBS/POS, SumUp, Stripe и MB WAY',
      content: [
        { kind: 'substeps', items: [
          { id: 'sibs-pos', title: 'Банковский POS / SIBS', content: [
            { kind: 'paragraph', text: 'SIBS — инфраструктура Multibanco, MB WAY и решений для comerciantes. POS обычно оформляется не напрямую «в SIBS», а через банк или adquirente: Millennium, Santander, CGD, BPI, Novo Banco, ActivoBank и другие PSP.' },
            { kind: 'checklist', items: [
              'Плюсы: привычно для португальских клиентов, Multibanco/карты/часто MB WAY в одном терминале.',
              'Минусы: тарифы часто не публичные; возможны mensalidade, аренда терминала, минимальная комиссия.',
              'Подходит для PME с постоянным оборотом и физической точкой.',
              'Перед подписанием запросите MDR по картам EEA, non-EEA, commercial cards и возвратам.'
            ] }
          ]},
          { id: 'sumup', title: 'SumUp', content: [
            { kind: 'paragraph', text: 'SumUp удобен для freelancers, мастеров, pop-up продаж и небольших услуг: терминал покупается, mensalidade обычно нет, комиссия публичная. На странице цен SumUp Portugal указано 1,69% за транзакцию для card reader.' },
            { kind: 'warning', text: 'Проверьте актуальную цену терминала перед покупкой: акции меняются. Важнее не цена устройства, а комиссия с оборота и срок зачисления денег.' }
          ]},
          { id: 'stripe', title: 'Stripe', content: [
            { kind: 'paragraph', text: 'Stripe — основной вариант для онлайн-карт, Payment Links, подписок, SaaS, консультаций через сайт. Для Португалии стандартная карточная комиссия Stripe в 2026 обычно начинается от 1,5% + 0,25 € за успешную оплату картами EEA; для UK/международных карт дороже.' },
            { kind: 'checklist', items: [
              'Нужен NIF/NIPC, банковский IBAN, идентификация владельца.',
              'Можно работать как empresário em nome individual/recibos verdes или компания.',
              'Stripe receipt не является португальской fatura.',
              'Возвраты и chargeback имеют отдельные правила и могут стоить денег.',
              'Для онлайн-продаж проверьте SCA/3-D Secure и политику возвратов.'
            ] }
          ]},
          { id: 'mbway-merchant', title: 'MB WAY merchant', content: [
            { kind: 'paragraph', text: 'MB WAY для бизнеса подключается через банк/PSP/SIBS как merchant-сервис: QR, request-to-pay, checkout в e-commerce или POS. Это не то же самое, что принимать деньги на личный MB WAY между физлицами.' },
            { kind: 'warning', text: 'Не используйте личные MB WAY-переводы как постоянную кассу бизнеса: у вас не будет нормальной отчётности, reconciliation и merchant-договора, а банк может запросить происхождение операций.' }
          ]}
        ] }
      ]
    },
    {
      id: 'documents',
      title: '3. Что подготовить для подключения',
      content: [
        { kind: 'paragraph', text: 'Провайдеры платежей обязаны делать KYC/AML-проверки. Даже если вы просто recibos verdes, вас попросят подтвердить личность, налоговый статус и банковский счёт.' },
        { kind: 'checklist', items: [
          'NIF и доступ к Portal das Finanças.',
          'Documento de identificação: паспорт, Cartão de Cidadão или ВНЖ.',
          'Португальский или SEPA IBAN на ваше имя/компанию.',
          'Адрес в Португалии и телефон/e-mail.',
          'Caderneta predial/договор аренды или подтверждение адреса — иногда для risk review.',
          'Declaração de início de atividade в Finanças с правильным CAE/CIRS.',
          'Для компании: certidão permanente, NIPC, dados dos sócios/beneficiário efetivo.',
          'Описание товаров/услуг, сайт или соцсети, если подключаете онлайн-платежи.',
          'Политика возвратов и contactos do comerciante для e-commerce.'
        ] },
        { kind: 'warning', text: 'Если деятельность в Finanças не открыта, сначала откройте início de atividade. Принимать коммерческие платежи «на личную карту» без faturação — налоговый риск по IRS/IVA и риск блокировки у PSP.' }
      ]
    },
    {
      id: 'fees',
      title: '4. Как считать комиссии и не ошибиться в марже',
      content: [
        { kind: 'paragraph', text: 'Сравнивайте не только процент. Итоговая стоимость = комиссия за транзакцию + фиксированная часть + аренда терминала + chargeback/refund + стоимость интеграции + бухгалтерское время на сверку.' },
        { kind: 'checklist', items: [
          'SumUp: публично 1,69% за транзакцию; mensalidade обычно 0 €.',
          'Stripe cards EEA: ориентир 1,5% + 0,25 € за успешную оплату; UK/international cards дороже.',
          'Банковский POS: MDR и mensalidade зависят от банка, оборота, сектора и типа карт.',
          'MB WAY merchant: комиссия задаётся банком/PSP; запросите цену отдельно от card acquiring.',
          'Для маленьких чеков фиксированные 0,25 € у онлайн-эквайринга могут быть болезненны.',
          'Для чеков 5–10 € часто выгоднее POS без фиксированной части, если банк даёт низкий MDR.',
          'Для чеков 100–500 € важнее процент и наличие chargeback.',
          'Спросите срок payout: D+1, D+2, weekly payout или rolling reserve.',
          'Проверьте, есть ли плата за возврат терминала, inactivity fee или minimum monthly fee.'
        ] },
        { kind: 'paragraph', text: 'Пример: консультация 100 € через SumUp при 1,69% стоит 1,69 €, на счёт попадёт около 98,31 € до налогов. Онлайн-оплата Stripe картой EEA при 1,5% + 0,25 € стоит 1,75 €, на счёт попадёт около 98,25 € до налогов.' }
      ]
    },
    {
      id: 'invoicing',
      title: '5. Связка с faturação: POS-чек ≠ fatura',
      content: [
        { kind: 'paragraph', text: 'Платёжный провайдер подтверждает получение денег, но не выполняет налоговую обязанность по выставлению fatura. В Португалии продажа/услуга должна быть отражена через Portal das Finanças или сертифицированное software de faturação, если вы им пользуетесь.' },
        { kind: 'checklist', items: [
          'Для recibos verdes: можно выписать fatura-recibo в Portal das Finanças после оплаты.',
          'Если сначала выставляете счёт, используйте fatura и затем recibo после получения денег.',
          'Для розницы и большого потока удобнее сертифицированная faturação с QR Code и ATCUD.',
          'Сохраняйте ID транзакции POS/Stripe/SumUp рядом с номером fatura для сверки.',
          'Разделяйте gross sales, fees и net payout: комиссия PSP — расход бизнеса.',
          'Если вы в regime de isenção IVA по art. 53 CIVA, всё равно выставляйте fatura с правильной причиной освобождения.',
          'Если начисляете IVA, сумма IVA считается от полной цены продажи, а не от суммы после комиссии PSP.',
          'Экспортируйте monthly statements из Stripe/SumUp/банка для бухгалтера.',
          'Возврат клиенту оформляйте nota de crédito, а не просто «минус» в выписке.'
        ] },
        { kind: 'warning', text: 'Классическая ошибка: получить 98,31 € после комиссии и выписать fatura на 98,31 €. Налоговая продажа была 100 €, а комиссия 1,69 € — ваш расход.' }
      ]
    },
    {
      id: 'setup-plan',
      title: '6. Практический план запуска за 1–3 дня',
      content: [
        { kind: 'checklist', items: [
          'Проверьте, что atividade aberta в Finanças и CAE/CIRS соответствует услуге.',
          'Решите, нужен ли физический терминал, онлайн-link или оба канала.',
          'Для быстрого старта купите/закажите SumUp или создайте Stripe Payment Link.',
          'Если есть магазин/поток, запросите у 2–3 банков предложение POS + MB WAY merchant.',
          'Сравните effective fee на ваших реальных чеках: 10 €, 50 €, 100 €, 500 €.',
          'Настройте fatura-recibo или сертифицированную faturação до первой оплаты.',
          'Сделайте тестовую оплату 1–2 € и проверьте receipt, payout и банковскую выписку.',
          'Создайте таблицу reconciliation: дата, клиент, сумма gross, fee, net, номер fatura, payout batch.',
          'Напишите клиентам, какие методы принимаете: cartão, MB WAY, transferência bancária, dinheiro.'
        ] },
        { kind: 'paragraph', text: 'Если у вас уже есть Contabilista Certificado, согласуйте с ним, как отражать комиссии PSP и какие отчёты выгружать ежемесячно. Это дешевле, чем разбирать хаос в конце года перед IRS/IRC.' }
      ]
    }
  ],
  costs: [
    { label: 'SumUp card transaction fee', amountEURMin: 1.69, amountEURMax: 1.69, note: 'Это процент комиссии: 1,69% за транзакцию по публичной странице SumUp Portugal; в поле указано числом из-за формата справочника.' },
    { label: 'Stripe card fee EEA', amountEURMin: 1.5, amountEURMax: 1.5, note: 'Ориентир: 1,5% + 0,25 € за успешную оплату картой EEA; тарифы Stripe зависят от метода и страны карты.' },
    { label: 'Фиксированная часть Stripe EEA', amountEUR: 0.25, note: 'Добавляется к процентной комиссии за успешную карточную оплату по стандартному тарифу.' },
    { label: 'Аренда банковского POS', amountEURMin: 0, amountEURMax: 25, note: 'Типичный рыночный диапазон в месяц; точная mensalidade и MDR только в предложении банка/PSP.' }
  ],
  sources: [
    {
      title: 'SIBS — soluções para comerciantes: POS, MB WAY и Multibanco',
      url: 'https://www.sibs.com/merchant-and-corporate/',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'SumUp Portugal — preços e comissões',
      url: 'https://sumup.pt/precos/',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Stripe Portugal — pricing for cards and payment methods',
      url: 'https://stripe.com/pt/pricing',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Autoridade Tributária — regras de faturação e emissão de faturas',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Pages/default.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
