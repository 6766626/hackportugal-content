export default {
  editorialVoice: 'hackportugal',
  id: 'cartao-credito-debito-mb',
  categoryId: 'banking',
  title: 'Cartão de Crédito vs Débito vs Multibanco — какие карты бывают и как работают',
  tldr: 'В Португалии «карта» может означать разные вещи: cartão de débito списывает деньги сразу со счёта; cartão de crédito даёт кредитный лимит и может начислять проценты; Multibanco — национальная сеть SIBS для снятия наличных, платежей Estado/serviços и переводов; Visa/Mastercard нужны для международной оплаты; pré-pago пополняется заранее. В 2026 почти все банки дают блокировку карты в app, но при мошенничестве звоните в банк или SIBS Card Stop 808 201 251.',
  tags: ['карты', 'multibanco', 'visa', 'fraude'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'types',
      title: '1. Какие карты бывают в Португалии',
      content: [
        { kind: 'paragraph', text: 'Главная путаница: Multibanco — не отдельный банк и не обязательно отдельная карта. Это национальная платёжная сеть SIBS. Карта может быть одновременно cartão de débito вашего банка, работать в Multibanco и иметь международный бренд Visa или Mastercard.' },
        { kind: 'checklist', items: [
          'Cartão de débito — деньги списываются сразу с conta à ordem; если денег нет, операция обычно не проходит.',
          'Cartão de crédito — банк даёт plafond/лимит; можно погасить 100% в дату выписки или частями с процентами.',
          'Cartão Multibanco / débito MB — карта для португальской сети Multibanco: банкоматы, pagamentos de serviços, Estado, telemóvel, carregamentos.',
          'Visa Debit / Mastercard Debit — дебетовая карта, которая обычно работает онлайн и за границей лучше, чем чистая MB-карта.',
          'Cartão pré-pago — предоплаченная карта: сначала пополняете, потом тратите; удобна для детей, поездок и контроля риска.',
          'Cartão virtual — виртуальная карта в app банка или MB WAY; подходит для онлайн-покупок и одноразовых платежей.',
          'MB WAY — не карта, а платёжный сервис SIBS, привязанный к номеру телефона и карте/счёту.'
        ] }
      ]
    },
    {
      id: 'debit-vs-credit',
      title: '2. Débito и crédito: в чём практическая разница',
      content: [
        { kind: 'paragraph', text: 'Для повседневной жизни экспату почти всегда достаточно cartão de débito с Visa/Mastercard и доступом к Multibanco. Кредитная карта нужна точечно: аренда авто, отели с депозитом, покупка авиабилетов, рассрочки, cashback или построение отношений с банком.' },
        { kind: 'checklist', items: [
          'Débito: платёж сразу уменьшает баланс счёта.',
          'Débito: проще получить — обычно выдают при открытии conta à ordem.',
          'Débito: меньше риск долга, но возможен overdraft/descoberto, если он подключён банком.',
          'Crédito: есть plafond — например 1 000 €, 3 000 € или больше, по решению банка.',
          'Crédito: если выбрать pagamento a 100%, проценты обычно не начисляются при полном погашении в срок.',
          'Crédito: если платить частями, действует TAEG/процентная ставка; проверяйте FIN/Ficha de Informação Normalizada до подписания.',
          'Crédito: cash advance в банкомате почти всегда дорогой — комиссия + проценты с даты снятия.',
          'Crédito: просрочка портит банковскую историю и может попасть в реестр Central de Responsabilidades de Crédito Банка Португалии.'
        ] },
        { kind: 'warning', text: 'Не путайте «cartão de crédito» с обычной Visa-картой. Visa/Mastercard — это платёжная схема, а не тип долга. Visa Debit остаётся дебетовой картой, даже если на ней написано Visa.' }
      ]
    },
    {
      id: 'multibanco',
      title: '3. Что умеет Multibanco 🇵🇹',
      content: [
        { kind: 'paragraph', text: 'Multibanco — одна из самых полезных частей португальской банковской системы. Через банкомат или homebanking/app можно делать операции, которые в других странах часто требуют отдельного кабинета или похода в банк.' },
        { kind: 'checklist', items: [
          'Снятие наличных в банкоматах Multibanco по всей стране.',
          'Consulta de saldo и movimentos — баланс и последние операции.',
          'Pagamento de serviços — оплата счетов по entidade/referência/valor.',
          'Pagamentos ao Estado — налоги, IMI, IUC, штрафы и другие платежи государству, если выдана referência.',
          'Переводы между португальскими счетами и иногда международные переводы, зависит от банка.',
          'Carregamento telemóvel — пополнение мобильного номера.',
          'Carregamento de títulos de transporte — пополнение некоторых транспортных карт.',
          'Operações MB WAY — привязка карты, подтверждение операций, снятие без карты в некоторых сценариях.',
          'Некоторые банкоматы дают услуги depósito/cheques, но это зависит от банка и конкретного ATM.'
        ] },
        { kind: 'paragraph', text: 'Если терминал в маленьком кафе говорит «só Multibanco», это может означать, что международная Visa/Mastercard не принимается, а нужна карта, работающая в португальской сети MB. У карт португальских банков обычно с этим проблем нет.' }
      ]
    },
    {
      id: 'online-and-abroad',
      title: '4. Онлайн, поездки и pré-pagos',
      content: [
        { kind: 'paragraph', text: 'Для онлайн-покупок в 2026 обычно требуется 3D Secure: подтверждение в app банка, SMS-код или push. Если карта не проходит на Amazon, Ryanair, Booking или зарубежных сайтах, проверьте лимиты, разрешение online/international payments и тип карты.' },
        { kind: 'checklist', items: [
          'В app банка включите pagamentos online, pagamentos no estrangeiro и contactless, если они выключены.',
          'Поставьте дневные и месячные лимиты: ATM, POS, online, international.',
          'Для подписок используйте виртуальную карту или pré-pago с отдельным лимитом.',
          'Для аренды авто часто требуют именно crédito, а не débito; проверяйте условия rental company до оплаты.',
          'Вне еврозоны выбирайте оплату в местной валюте, а не conversion to EUR на терминале, чтобы избежать плохого курса DCC.',
          'Не храните крупные суммы на счёте, к которому привязана карта для онлайн-покупок.',
          'MB WAY хорош для платежей в Португалии, но не заменяет Visa/Mastercard за границей.'
        ] },
        { kind: 'warning', text: 'Pré-pago не всегда подходит для депозитов в отелях, аренды авто и некоторых подписок. Система видит такую карту как предоплаченную и может отклонить операцию.' }
      ]
    },
    {
      id: 'security',
      title: '5. Блокировка, мошенничество и chargeback',
      content: [
        { kind: 'paragraph', text: 'В 2026 нормальный португальский банк должен давать управление картой в app: временно bloquear/desbloquear, менять PIN, лимиты, online payments, contactless. Но app — не замена срочному звонку при краже или подозрении на fraude.' },
        { kind: 'checklist', items: [
          'Сразу заблокируйте карту в app банка.',
          'Позвоните в банк по номеру из app/официального сайта.',
          'Если банк недоступен, используйте SIBS Card Stop: 808 201 251; из-за границы обычно указывают +351 217 918 780.',
          'Запишите дату, время, имя оператора и número de ocorrência/protocolo.',
          'Оспорьте операции через reclamação/chargeback в банке как можно быстрее.',
          'Если украли телефон с MB WAY, заблокируйте SIM у оператора и доступ к банковскому app.',
          'Смените пароли e-mail, банка и MB WAY, если есть риск доступа к устройству.',
          'При краже или очевидном мошенничестве подайте queixa в PSP/GNR или онлайн, если применимо.'
        ] },
        { kind: 'warning', text: 'Никогда не сообщайте PIN, códigos SMS, códigos MB WAY, данные CMD или full card details по телефону. Банк и SIBS не просят коды подтверждения, чтобы «отменить мошенническую операцию».' }
      ]
    },
    {
      id: 'choosing-card',
      title: '6. Что выбрать экспату',
      content: [
        { kind: 'paragraph', text: 'Минимальный рабочий набор: conta à ordem в португальском банке + cartão de débito с Multibanco и Visa/Mastercard + app с мгновенной блокировкой + MB WAY. Кредитную карту добавляйте только если понимаете график погашения и комиссии.' },
        { kind: 'checklist', items: [
          'Проверьте comissão de disponibilização de cartão: у некоторых банков дебетовая карта бесплатна, у других стоит 10–25 € в год.',
          'Проверьте comissão de manutenção da conta: иногда карта «бесплатна», но пакет счёта платный.',
          'Уточните лимиты на ATM/POS/online/international.',
          'Спросите, есть ли Visa Debit или Mastercard Debit, а не только национальная MB-карта.',
          'Для зарплаты и аренды удобнее банк с сильным homebanking и понятными extractos.',
          'Если берёте crédito, установите pagamento a 100% por débito direto.',
          'Для детей/гостей/покупок на сомнительных сайтах используйте pré-pago или virtual card.',
          'Сохраняйте номер поддержки банка отдельно от телефона — например в password manager или распечатке.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Дебетовая карта', amountEURMin: 0, amountEURMax: 25, note: 'Типичный годовой диапазон по рынку; зависит от банка и пакета conta à ordem.' },
    { label: 'Кредитная карта', amountEURMin: 0, amountEURMax: 50, note: 'Годовая комиссия может быть 0 € при обороте или в premium-пакете; проценты и TAEG смотрите в FIN.' },
    { label: 'Предоплаченная карта', amountEURMin: 0, amountEURMax: 15, note: 'Может быть комиссия за выпуск, пополнение или обслуживание; условия сильно различаются.' },
    { label: 'SIBS Card Stop', amountEUR: 0, note: 'Сервис блокировки карты; сам звонок на 808 оплачивается по тарифу оператора.' }
  ],
  sources: [
    {
      title: 'Banco de Portugal — права клиента, карты, платежи и безопасность',
      url: 'https://clientebancario.bportugal.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Banco de Portugal — сравнение комиссий банковских услуг',
      url: 'https://clientebancario.bportugal.pt/comparador-de-comissoes',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'SIBS — Multibanco, MB WAY и платёжная инфраструктура',
      url: 'https://www.sibs.com',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'SIBS — Card Stop и безопасность платёжных карт',
      url: 'https://www.sibs.com',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
