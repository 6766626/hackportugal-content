export default {
  editorialVoice: 'hackportugal',
  id: 'irs-auto-prefill',
  categoryId: 'taxes',
  title: 'IRS Automático — предзаполненная декларация для простых случаев',
  tldr: 'IRS Automático — черновик декларации Modelo 3, который Finanças заранее заполняет по зарплате, пенсиям и e-Fatura. В кампании IRS 2026 за доходы 2025 года декларации подаются с 1 апреля по 30 июня 2026. Если вы подходите под режим и ничего не делаете, декларация НЕ подаётся 1 апреля: предварительная декларация становится окончательной только после конца срока. Подходит не всем экспатам: recibos verdes, аренда, зарубежные доходы, crypto/акции обычно требуют обычную Modelo 3.',
  tags: ['irs', 'finanças', 'налоги', 'e-fatura'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'Что такое IRS Automático',
      content: [
        { kind: 'paragraph', text: 'IRS Automático — это автоматическая предзаполненная декларация IRS на Portal das Finanças. Налоговая сама подтягивает зарплату или пенсию, удержанный налог, Social Security, семейный состав и подтверждённые расходы из e-Fatura.' },
        { kind: 'paragraph', text: 'В кампании 2026 года подаются доходы за 2025 год. Окно подачи стандартное: с 1 апреля по 30 июня 2026. В этот период можно проверить автоматическую декларацию, симулировать расчёт, подтвердить её или отказаться и подать обычную Modelo 3.' },
        { kind: 'warning', text: 'Распространённая ошибка: IRS Automático не «подаётся 1 апреля». 1 апреля он становится доступен. Если налогоплательщик не подтверждает и не подаёт другую декларацию до 30 июня, предварительная декларация обычно считается поданной автоматически после окончания срока, по правилам art. 58-A CIRS.' }
      ]
    },
    {
      id: 'who-can-use',
      title: 'Кому подходит ✅',
      content: [
        { kind: 'paragraph', text: 'IRS Automático рассчитан на простые налоговые ситуации. Для экспата это обычно работает, если вы весь 2025 год были налоговым резидентом Португалии и получали только португальскую зарплату по contrato de trabalho или пенсию, без самозанятости и без иностранных доходов.' },
        { kind: 'checklist', items: [
          'Вы являетесь налоговым резидентом Португалии за соответствующий год',
          'Доходы только категории A: зарплата, работа по трудовому договору',
          'Или доходы только категории H: пенсии',
          'Доходы выплачены португальскими организациями и уже отражены в Finanças',
          'Нет recibos verdes, ato isolado или другой atividade aberta',
          'Нет доходов от аренды, Airbnb/AL, роялти, прироста капитала, продажи акций/ETF/crypto',
          'Нет зарубежной зарплаты, зарубежных дивидендов, процентов, пенсии или банковских счетов с доходом',
          'Семейная ситуация простая и совпадает с данными в Finanças',
          'Расходы в e-Fatura проверены до дедлайнов кампании'
        ] },
        { kind: 'paragraph', text: 'Если вы married/united de facto, Portal das Finanças обычно показывает варианты: отдельная подача и совместная подача. Не выбирайте автоматически самый первый вариант — сравните симуляции.' }
      ]
    },
    {
      id: 'who-should-not-use',
      title: 'Когда лучше НЕ подтверждать автоматически',
      content: [
        { kind: 'paragraph', text: 'Экспаты часто не проходят под IRS Automático из-за иностранного дохода, удалённой работы, инвестиций или статуса самозанятого. В таких случаях безопаснее открыть обычную Modelo 3 и добавить нужные anexos.' },
        { kind: 'checklist', items: [
          'Вы открывали atividade и выставляли recibos verdes — нужен Anexo B',
          'Есть доход от аренды в Португалии — обычно Anexo F',
          'Есть продажа недвижимости, акций, ETF, облигаций или crypto с декларируемым событием — Anexo G / G1 / J по ситуации',
          'Есть зарплата, пенсия, проценты, дивиденды или прирост капитала из-за рубежа — обычно Anexo J',
          'Вы приехали или уехали в течение года и были резидентом не весь год',
          'У вас IFICI, старый NHR/RNH или другой специальный режим, который влияет на налогообложение',
          'Есть алименты, инвалидность, сложная опека, dependentes в guarda conjunta или нестандартные вычеты',
          'Данные e-Fatura неполные: крупные медицинские, образовательные, арендные или mortgage-расходы не подтянулись',
          'Симуляция показывает странный налог к оплате, хотя с зарплаты весь год удерживали IRS'
        ] },
        { kind: 'warning', text: 'Если в автоматической декларации отсутствует зарубежный доход, это не означает, что его можно не декларировать. Налоговая может получить данные по CRS/DAC от банков и брокеров позже, а исправление после проверки будет дороже и нервнее.' }
      ]
    },
    {
      id: 'how-to-check',
      title: 'Как проверить на Portal das Finanças',
      content: [
        { kind: 'substeps', items: [
          { id: 'login', title: '1. Войти в Finanças', content: [
            { kind: 'paragraph', text: 'Зайдите на Portal das Finanças через NIF + senha de acesso, Chave Móvel Digital (CMD) или Cartão de Cidadão. Ищите раздел IRS → IRS Automático или Entregar declaração → IRS Automático.' }
          ] },
          { id: 'validate-family', title: '2. Проверить семью и адрес', content: [
            { kind: 'checklist', items: [
              'NIF налогоплательщика и супруга/партнёра',
              'Estado civil на 31 декабря 2025',
              'Dependentes и их NIF',
              'Guarda conjunta, если есть дети в совместной опеке',
              'Адрес налогового резидентства',
              'IBAN для возврата IRS'
            ] }
          ] },
          { id: 'compare-simulations', title: '3. Сравнить симуляции', content: [
            { kind: 'paragraph', text: 'Нажмите Simular. Если вы в браке или união de facto, сравните tributação separada и tributação conjunta. Portal покажет возврат или сумму к оплате по каждому варианту.' }
          ] },
          { id: 'confirm-or-reject', title: '4. Подтвердить или отказаться', content: [
            { kind: 'paragraph', text: 'Если всё верно, подтвердите декларацию и сохраните comprovativo. Если есть ошибка или отсутствует доход/вычет, не подтверждайте IRS Automático — подайте обычную declaração Modelo 3 с нужными приложениями.' }
          ] }
        ] }
      ]
    },
    {
      id: 'refund-payment',
      title: 'Возврат или оплата IRS',
      content: [
        { kind: 'paragraph', text: 'После подтверждения или автоматического превращения предварительной декларации в окончательную Finanças выпускает liquidação. Если удержали слишком много IRS, придёт reembolso на IBAN. Если удержали мало, появится nota de cobrança для оплаты.' },
        { kind: 'checklist', items: [
          'Проверьте IBAN заранее в Portal das Finanças',
          'Скачайте comprovativo da declaração после подтверждения',
          'Проверяйте статус: Rececionada → Certa → Liquidação processada → Reembolso emitido или Nota de cobrança',
          'Оплата делается через Referência Multibanco, MB WAY, homebanking или на Portal das Finanças',
          'Если декларация ушла с ошибкой, подавайте declaração de substituição как можно раньше',
          'Если сумма к оплате неподъёмная, можно запросить pagamento em prestações, если соблюдены условия AT'
        ] },
        { kind: 'warning', text: 'Автоматический расчёт не освобождает от ответственности. Юридически декларация считается вашей: если данные неполные, исправлять и платить разницу будете вы, даже если ошибка пришла из предзаполнения.' }
      ]
    },
    {
      id: 'practical-expat-check',
      title: 'Мини-чеклист для экспата перед подтверждением',
      content: [
        { kind: 'checklist', items: [
          'Я точно был налоговым резидентом Португалии в 2025 году или понимаю, как декларировать split-year',
          'У меня не было atividade aberta, recibos verdes или ato isolado',
          'У меня не было зарубежной зарплаты, пенсии, дивидендов, процентов, купонов или capital gains',
          'Я проверил e-Fatura и вижу медицинские, образовательные, арендные и общие семейные расходы',
          'Я сравнил совместную и раздельную подачу, если есть супруг/партнёр',
          'IBAN в Finanças актуален',
          'Я сохранил PDF декларации и comprovativo',
          'Если есть сомнение — я подаю обычную Modelo 3 или спрашиваю contabilista'
        ] },
        { kind: 'paragraph', text: 'Практическое правило: IRS Automático хорош для «одна португальская зарплата + обычные расходы». Всё, что связано с переездом, несколькими странами, инвестициями, арендой или самозанятостью, почти всегда требует ручной проверки.' }
      ]
    }
  ],
  sources: [
    {
      title: 'Portal das Finanças — IRS Automático и информация по подаче IRS',
      url: 'https://info.portaldasfinancas.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IRS — art. 58-A, declaração automática de rendimentos',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1988-34500675',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Autoridade Tributária — Portal das Finanças, entrega da declaração Modelo 3 IRS',
      url: 'https://www.portaldasfinancas.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}
