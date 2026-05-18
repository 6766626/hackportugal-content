export default {
  editorialVoice: 'hackportugal',
  id: 'credito-pessoal-tan-taeg',
  categoryId: 'banking',
  title: 'Crédito Pessoal: потребительский кредит, TAN, TAEG и как сравнить',
  tldr: 'В Португалии crédito pessoal регулируется DL 133/2009: обычно это потребительский кредит от 200 € до 75 000 €, не ипотека. Сравнивайте не TAN, а TAEG: она включает проценты, комиссии, налоги и обязательные услуги. У вас есть 14 календарных дней на отказ от договора. Banco de Portugal ежеквартально публикует максимальные TAEG и даёт официальный comparador на clientebancario.bportugal.pt.',
  tags: ['credito', 'taeg', 'кредит', 'банки'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-personal-credit',
      title: 'Что такое crédito pessoal',
      content: [
        { kind: 'paragraph', text: 'Crédito pessoal — потребительский кредит без залога недвижимости: ремонт, техника, отпуск, консолидация долгов, образование, здоровье, автомобиль без ипотеки. В правовом режиме DL 133/2009 он обычно покрывает договоры от 200 € до 75 000 €.' },
        { kind: 'paragraph', text: 'Это не cartão de crédito и не descoberto autorizado. У личного кредита есть сумма, срок, график prestações mensais и договорная ставка. Банк обязан заранее дать стандартную информационную форму, чтобы вы могли сравнить предложения до подписи.' },
        { kind: 'checklist', items: [
          'Сумма кредита: сколько реально получите на счёт.',
          'Prazo: срок в месяцах; для обычного crédito pessoal банки ориентируются на лимиты Banco de Portugal по срокам потребительского кредита.',
          'Prestação mensal: ежемесячный платёж.',
          'TAN: номинальная годовая процентная ставка.',
          'TAEG: реальная годовая стоимость кредита с обязательными расходами.',
          'MTIC: montante total imputado ao consumidor — всего заплатите банку за весь срок.',
          'Комиссия за abertura/processamento, если есть.',
          'Imposto do Selo: налог на кредит и проценты.',
          'Seguro: страховка, если банк делает её условием ставки или одобрения.'
        ] }
      ]
    },
    {
      id: 'tan-vs-taeg',
      title: 'TAN vs TAEG: что сравнивать',
      content: [
        { kind: 'paragraph', text: 'TAN — это только процентная ставка по деньгам. Она не показывает полную цену кредита. Два банка могут дать одинаковую TAN, но один добавит комиссию, обязательную страховку и налоговую нагрузку — итоговая переплата будет выше.' },
        { kind: 'paragraph', text: 'TAEG — taxa anual de encargos efetiva global. В неё входят проценты, комиссии, налоги и обязательные расходы, связанные с получением кредита. Поэтому для сравнения предложений используйте TAEG и MTIC, а не рекламную TAN.' },
        { kind: 'warning', text: 'Низкая TAN в рекламе не означает дешёвый кредит. Проверяйте TAEG, MTIC и размер ежемесячного платежа в документе банка, а не на баннере.' },
        { kind: 'checklist', items: [
          'Если TAEG выше — кредит обычно дороже при одинаковой сумме и сроке.',
          'Если срок длиннее — prestação mensal ниже, но MTIC почти всегда выше.',
          'Если страховка обязательна для ставки — её стоимость должна отражаться в TAEG.',
          'Если банк предлагает “sem comissões”, всё равно смотрите Imposto do Selo и MTIC.',
          'Если ставка variável — платёж может измениться; для личных кредитов чаще встречается фиксированная ставка.',
          'Сравнивайте предложения только при одинаковых сумме, сроке и цели кредита.'
        ] }
      ]
    },
    {
      id: 'legal-limits-and-approval',
      title: 'Лимиты, доход и одобрение в 2026',
      content: [
        { kind: 'paragraph', text: 'В Португалии нет универсальной формулы “банк обязан дать X зарплат”. Сумма зависит от net income, стабильности работы, расходов семьи, других кредитов в Central de Responsabilidades de Crédito и внутренних правил риска банка.' },
        { kind: 'paragraph', text: 'Banco de Portugal применяет макропруденциальные рекомендации: банки должны оценивать DSTI — долю всех кредитных платежей в чистом доходе. Практический ориентир рынка: если все prestações после нового кредита приближаются к 50% net income, одобрение становится сложным или сумма уменьшается.' },
        { kind: 'checklist', items: [
          'Покажите чистый ежемесячный доход: recibos de vencimento, contrato de trabalho, declaração IRS, recibos verdes.',
          'Для recém-chegados банк может попросить 3–6 месяцев движения по счёту в Португалии.',
          'NIF обязателен практически всегда; NISS часто нужен для подтверждения трудового статуса.',
          'ВНЖ, Cartão de Cidadão EU или паспорт + виза помогают подтвердить легальное пребывание.',
          'Долги по кредитным картам и overdraft видны банку через CRC и уменьшают доступную сумму.',
          'Стабильный contrato sem termo обычно сильнее, чем короткий contrato a termo или новый recibos verdes.',
          'Если доход иностранный, банк может применить haircut или попросить документы с переводом.',
          'Обычный crédito pessoal часто ограничивается сроком до 7 лет; отдельные цели вроде образования, здоровья, возобновляемой энергии или автомобиля могут иметь другие лимиты по правилам банка и Banco de Portugal.'
        ] },
        { kind: 'warning', text: 'Не берите кредит “на другого человека”. Для банка заёмщик — тот, кто подписал договор, даже если деньги фактически получил друг, партнёр или родственник.' }
      ]
    },
    {
      id: 'how-to-compare',
      title: 'Как сравнить предложения через Banco de Portugal',
      content: [
        { kind: 'paragraph', text: 'Официальная точка сравнения — Portal do Cliente Bancário Banco de Portugal: clientebancario.bportugal.pt. Там есть comparador de crédito aos consumidores и справочные страницы по TAEG, TAN, MTIC и правам потребителя.' },
        { kind: 'substeps', items: [
          { id: 'prepare-inputs', title: '1. Подготовьте одинаковые параметры', content: [
            { kind: 'checklist', items: [
              'Цель кредита: pessoal, automóvel, educação, saúde, consolidação.',
              'Сумма: например 5 000 €, 10 000 € или 20 000 €.',
              'Срок: например 24, 48, 60 или 84 месяца.',
              'Тип ставки: фиксированная или variável, если доступна.',
              'Наличие страховки: обязательна или необязательна.',
              'Комиссии: abertura, processamento, manutenção, если банк их применяет.'
            ] }
          ] },
          { id: 'compare-output', title: '2. Смотрите TAEG и MTIC', content: [
            { kind: 'paragraph', text: 'Выберите 3–5 банков и сравните TAEG, MTIC и prestação mensal. Самый низкий платёж не всегда лучший: при длинном сроке итоговая переплата может быть намного выше.' }
          ] },
          { id: 'check-usury-rate', title: '3. Проверьте предельную TAEG', content: [
            { kind: 'paragraph', text: 'Banco de Portugal публикует taxas máximas для потребительского кредита ежеквартально. Если TAEG выше максимума для категории кредита на дату договора, это красный флаг: проверьте расчёт и жалуйтесь в Banco de Portugal.' }
          ] }
        ] }
      ]
    },
    {
      id: 'rights-after-signing',
      title: 'После подписи: 14 дней, досрочное погашение, жалобы',
      content: [
        { kind: 'paragraph', text: 'По DL 133/2009 у потребителя есть 14 календарных дней на livre revogação — отказ от договора без объяснения причины. Срок считается с даты заключения договора или с даты получения всех обязательных условий, если они были предоставлены позже.' },
        { kind: 'paragraph', text: 'Если вы отказываетесь после получения денег, нужно вернуть principal и проценты за фактические дни использования кредита. Обычно это нужно сделать в течение 30 дней после отправки уведомления об отказе.' },
        { kind: 'checklist', items: [
          'Отправляйте отказ письменно: email с подтверждением, carta registada или через канал, указанный в договоре.',
          'Сохраните comprovativo отправки и расчёт суммы к возврату.',
          'Досрочное погашение возможно в любой момент.',
          'При фиксированной ставке компенсация банку ограничена законом: обычно до 0,5% досрочно погашенной суммы, если до конца договора больше 1 года, и до 0,25%, если 1 год или меньше.',
          'При variável ставка комиссия за досрочное погашение потребительского кредита обычно не взимается.',
          'Если банк навязал продукт, не объяснил TAEG или отказался дать документы — подайте reclamação в Livro de Reclamações и Banco de Portugal.',
          'Проверьте кредитного посредника: он должен быть зарегистрирован у Banco de Portugal.'
        ] },
        { kind: 'warning', text: 'Не платите “taxa de aprovação” незнакомым посредникам до выдачи кредита. Легальные банки и зарегистрированные intermediários de crédito проверяются на сайте Banco de Portugal; предложения через WhatsApp с предоплатой — частая схема мошенничества.' }
      ]
    }
  ],
  sources: [
    {
      title: 'Banco de Portugal — Portal do Cliente Bancário: crédito aos consumidores и comparador',
      url: 'https://clientebancario.bportugal.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Banco de Portugal — taxas máximas и supervisão do crédito aos consumidores',
      url: 'https://www.bportugal.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei 133/2009 — regime do crédito aos consumidores',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2009-34555075',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}
