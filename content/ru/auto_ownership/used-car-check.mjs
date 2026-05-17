export default {
  editorialVoice: 'hackportugal',
  id: 'used-car-check',
  categoryId: 'auto_ownership',
  title: 'Проверка б/у авто перед покупкой в Португалии',
  tldr: 'Пять проверок перед покупкой б/у машины: (1) **Registo Automóvel** через IRN/Conservatória/Automóvel Online (НЕ IMT — реестр собственности и обременений ведёт IRN; через automovelonline.mj.pt получаете certidão с записями о владельце, reserva de propriedade, penhoras, hipotecas), (2) Finanças — IUC без долгов, (3) свежий IPO, (4) Carvertical как аналог Carfax для истории, (5) осмотр в независимом автосервисе. За ~50 € избежите покупки машины с долгами или скрытыми дефектами.',
  tags: ['б/у авто', 'проверка', 'покупка', 'dua'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'check-registo',
      title: '1. Registo Automóvel — официальный реестр собственности (IRN)',
      content: [
        { kind: 'paragraph', text: 'Реестр собственности на автомобиль и обременения ведёт **IRN (Instituto dos Registos e do Notariado)** через Conservatória do Registo Automóvel и онлайн-сервис **Automóvel Online** (automovelonline.mj.pt). НЕ IMT — IMT занимается технической стороной (matrícula, IPO, водительские права), но не реестром собственности.' },
        { kind: 'checklist', items: [
          '💻 automovelonline.mj.pt → запросить **certidão permanente do registo automóvel** (нужен Chave Móvel Digital (CMD) или Cartão de Cidadão (CC) + считыватель)',
          '🔍 Ввести matrícula (регистрационный номер)',
          '📋 certidão покажет: текущего собственника, дату регистрации, реестровые обременения (reserva de propriedade, penhoras, hipotecas, locação financeira)',
          '🔒 «Penhora» (арест) — красный флаг, не покупайте',
          '💰 «Reserva de propriedade» — значит машина в кредите; покупать можно только после закрытия reserva',
          '🏦 «Hipoteca» — ипотека/залог банка',
          '🚗 «Locação financeira» — лизинг',
          '💶 Стоимость: certidão permanente обычно ~25 € за 6 месяцев доступа онлайн (актуальный тариф — на irn.justica.gov.pt / automovelonline.mj.pt)'
        ]}
      ]
    },
    {
      id: 'check-finances',
      title: '2. Finanças — IUC и долги',
      content: [
        { kind: 'paragraph', text: 'Продавец обязан показать Declaração sem dívidas по IUC и IMT за последние 3 года. Запрашивается в Portal das Finanças → «Certidões» → «Certidão de Não Dívida (справка об отсутствии долгов)».' },
        { kind: 'checklist', items: [
          'Если IUC не оплачен — долг переходит к вам',
          'Требуйте comprovativo (подтверждение) за последние 3 года',
          'Также проверьте штрафы — через CGA / Finanças'
        ]}
      ]
    },
    {
      id: 'check-ipo',
      title: '3. IPO (техосмотр) и DUA',
      content: [
        { kind: 'checklist', items: [
          '🧾 DUA (Documento Único Automóvel) — основной документ',
          '🔎 VIN на машине совпадает с DUA',
          '📅 Последний IPO не старше года (свежий — хороший знак)',
          '📋 Протокол IPO без «deficiências graves»',
          '🛣️ Пробег реальный — проверить сравнением IPO-протоколов разных лет',
          '⚠️ Если IPO давно не проходили — покупать с условием «сначала пройти IPO»'
        ]}
      ]
    },
    {
      id: 'history-check',
      title: '4. История и Carvertical',
      content: [
        { kind: 'paragraph', text: 'Carvertical (carvertical.com), CarfaxPT, Autobiz — платные сервисы проверки истории по VIN. Показывают ДТП, пробег, владельцев по всем странам ЕС.' },
        { kind: 'checklist', items: [
          '💶 15–30 € за отчёт',
          '🔍 Пробег по датам (скрутка видна)',
          '💥 ДТП и страховые случаи',
          '🌍 Предыдущие страны регистрации',
          '🔧 Ремонты в больших сетях (Bosch, Norauto)',
          '🚨 «Salvage» / «Total loss» — красный флаг'
        ]}
      ]
    },
    {
      id: 'oficina-check',
      title: '5. Осмотр в автосервисе',
      content: [
        { kind: 'checklist', items: [
          '🔧 Отвезите на диагностику: 40–80 € в независимом автосервисе',
          '📋 Полная проверка: двигатель, трансмиссия, подвеска, тормоза, ржавчина кузова',
          '💻 OBD-диагностика — коды ошибок ECU',
          '🛞 Шины, рисунок протектора, дата производства',
          '🪟 Кузов на перекраску, шпатлёвку (замером толщиномером)',
          '❄️ Кондиционер работает летом / зимой',
          '🧰 Все кнопки / электрика работают',
          '🗒️ Просите письменный отчёт — пригодится при торге'
        ]}
      ]
    },
    {
      id: 'purchase',
      title: 'Оформление покупки',
      content: [
        { kind: 'checklist', items: [
          '📝 Contrato de compra e venda — 2 экземпляра с данными всех сторон',
          '🆔 Обе стороны: CC/ВНЖ, NIF, IBAN',
          '📋 Приём-передача DUA + ключей + запасных',
          '💶 Оплата — банковский перевод с назначением «compra viatura matrícula X»',
          '🏢 Registo de propriedade в IRN (irn.justica.gov.pt) — 45 € + оформление',
          '📅 Срок регистрации смены — 60 дней с подписания',
          '🛡️ Страховка на ваше имя с дня передачи',
          '🧾 IUC: владелец на 1 января текущего года остаётся ответственным за этот год; перерасчёта при смене собственника внутри года нет. Следующий год — на новом владельце'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Certidão Permanente Registo Automóvel (IRN/Automóvel Online)', amountEURMin: 15, amountEURMax: 25, note: 'тарифы могут отличаться, проверяйте на irn.justica.gov.pt' },
    { label: 'Отчёт Carvertical', amountEURMin: 15, amountEURMax: 30 },
    { label: 'Диагностика в автосервисе', amountEURMin: 40, amountEURMax: 80 },
    { label: 'Registo de propriedade на нового владельца (IRN)', amountEURMin: 45, amountEURMax: 65 },
    { label: 'ИТОГО проверок перед сделкой', amountEURMin: 60, amountEURMax: 130 }
  ],
  sources: [
    { title: 'Automóvel Online — IRN/Conservatória', url: 'https://automovelonline.mj.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'IRN — Registo Automóvel', url: 'https://justica.gov.pt/Servicos/Registar-automovel', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal das Finanças — Certidões', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'IMT — IPO (технический осмотр)', url: 'https://www.imt-ip.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}