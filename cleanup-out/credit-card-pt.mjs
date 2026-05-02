export default {
  editorialVoice: 'hackportugal',
  id: 'credit-card-pt',
  categoryId: 'banking',
  title: 'Кредитные карты в Португалии — как получить и какие бывают',
  tldr: 'Кредитные карты в Португалии отличаются от России/Украины: настоящий кредит с лимитом и ежемесячной оплатой — это «cartão de crédito». Дебетовая карта с привязкой к счёту — «cartão de débito»; часто её называют MB-картой. Для получения cartão de crédito нужны: NIF + NISS + резидентский статус от 6 месяцев + регулярный доход: рабочий контракт или recibos verdes. Лимит обычно составляет 1–3 месячные зарплаты. Главные банки: Millennium BCP, ActivoBank, Santander, BPI. Премиальные карты — Visa Gold/Platinum, World Mastercard. Хорошая кредитная история формируется за 6–12 месяцев.',
  tags: ['кредитка', 'cartão de crédito', 'банк', 'кредит', 'кэшбэк'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'difference',
      title: '💳 Дебетовая или кредитная',
      content: [
        { kind: 'substeps', items: [
          { id: 'd1', title: 'Дебетовая карта (cartão de débito)', content: [
            { kind: 'checklist', items: [
              '✅ Привязана к расчётному счёту, тратите свои деньги',
              '✅ Работает в Multibanco, банкоматах и терминалах оплаты',
              '✅ Бесплатно или € 1–2/мес',
              '✅ Возможен перерасход до овердрафта по соглашению с банком',
              '⚠️ MB Net для онлайн-платежей — отдельная виртуальная карта',
              '⚠️ Не считается кредитом в кредитной истории'
            ]}
          ]},
          { id: 'd2', title: 'Кредитная карта (cartão de crédito)', content: [
            { kind: 'checklist', items: [
              '💵 Лимит определяет банк на основе дохода',
              '💵 Платите в конце месяца: всю сумму или часть с процентами',
              '🔁 Возможна 100% оплата без процентов в льготный период (carência)',
              '📊 Попадает в кредитную историю Banco de Portugal (CRC)',
              '🎁 Кэшбэк, мили, страхование путешествий',
              '⚠️ Годовая ставка обычно 12–22%, если не погашать 100%',
              '💰 Годовое обслуживание: € 0–150 в зависимости от уровня карты'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'requirements',
      title: '✅ Требования для получения',
      content: [
        { kind: 'checklist', items: [
          '🪪 Резидентский статус: ВНЖ или регистрация EU от 6 месяцев',
          '🆔 NIF + NISS',
          '💰 Регулярный доход: трудовой контракт, recibos verdes от 12 месяцев, пенсия',
          '📊 Кредитная история: первые 6–12 месяцев жизни в Португалии истории нет, поэтому лимит будет маленьким — € 300–500',
          '⚠️ Безработица или зависимый ВНЖ = отказ или лимит только под собственное обеспечение',
          '🏦 Существующий счёт в этом банке повышает шансы',
          '⛔ Долги в Mapa de Responsabilidades de Crédito (CRC) = автоматический отказ'
        ]}
      ]
    },
    {
      id: 'cards',
      title: '🎴 Популярные карты',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Базовые карты до € 30/год', content: [
            { kind: 'checklist', items: [
              '🟢 **Millennium Cartão Premium**: € 0 за обслуживание, 1% кэшбэка на редкие покупки, лимит € 500–3000',
              '🟢 **ActivoBank Visa Classic**: € 0 за обслуживание, лимит € 500–2500, подходит для онлайн-покупок',
              '🟢 **Santander Light**: € 0 за обслуживание, базовый лимит',
              '🟢 **CGD Caixa Worldwide**: € 19/год, принимается в 200+ странах',
              '🟢 **BPI 5 estrelas**: € 25/год, миллионы банкоматов BPI'
            ]}
          ]},
          { id: 'c2', title: 'Кэшбэк и бонусы', content: [
            { kind: 'checklist', items: [
              '🟡 **Millennium World Mastercard**: € 75/год, 0,5–1% кэшбэка + страхование путешествий',
              '🟡 **ActivoBank Gold**: € 50/год, страхование + 0,5% кэшбэка',
              '🟡 **CGD Universal Plus**: € 30/год, 1% кэшбэка в Continente / Pingo Doce',
              '🟡 **Santander Light Visa**: 0,3% кэшбэка, € 35/год',
              '🟡 **Wizink White**: € 0/год, 0% IRR на 24 месяца для перевода долга'
            ]}
          ]},
          { id: 'c3', title: 'Премиальные карты (Platinum, World Elite)', content: [
            { kind: 'checklist', items: [
              '🟣 **Millennium Visa Platinum**: € 150/год, 1–2% кэшбэка, доступ в бизнес-залы, страхование',
              '🟣 **BPI World Elite Mastercard**: € 250/год, премиальный консьерж-сервис',
              '🟣 **Santander Select**: € 200/год, премиальный семейный пакет',
              '🟣 **Caixa Geral Visa Infinite**: € 300/год, эксклюзивный консьерж-сервис',
              '⚠️ Доход для Platinum обычно от € 50 000/год'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'how-to-apply',
      title: '📋 Как подать заявку',
      content: [
        { kind: 'substeps', items: [
          { id: 'a1', title: 'Вы уже клиент банка', content: [
            { kind: 'checklist', items: [
              '💻 Через интернет-банк — обычно один клик на «pedir cartão de crédito»',
              '📊 Банк автоматически рассчитывает лимит на основе зарплаты',
              '✅ Решение за 1–3 рабочих дня',
              '📦 Карта приходит по почте за 5–7 дней'
            ]}
          ]},
          { id: 'a2', title: 'Вы не клиент банка', content: [
            { kind: 'checklist', items: [
              '🏛️ Записаться на приём в отделение',
              '📋 Принести: ВНЖ/Cartão de Cidadão, NIF, NISS, расчётный лист (recibo de vencimento) за 3 месяца, comprovativo de morada, налоговую декларацию (modelo 3), если у вас recibos verdes',
              '💼 Решение за 5–15 рабочих дней',
              '✍️ Подписать договор'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'building-credit',
      title: '📈 Как построить кредитную историю',
      content: [
        { kind: 'paragraph', text: 'В Португалии нет публичного кредитного рейтинга, как в США (FICO). Banco de Portugal ведёт CRC (Mapa de Responsabilidades de Crédito) — список ваших кредитов и просрочек. Банки используют свой внутренний скоринг.' },
        { kind: 'checklist', items: [
          '✅ Погашать кредитку на 100% каждый месяц — это повышает доверие банка',
          '✅ Получать зарплату или доход по recibos через тот же банк от 6 месяцев',
          '✅ Через 12 месяцев попросить увеличить лимит через интернет-банк',
          '✅ Не использовать постоянно больше 70% лимита',
          '⛔ Просрочка = чёрная метка на 5 лет',
          '⛔ Открыть много кредиток сразу = банки снизят лимит',
          '📊 Запросить выписку CRC можно бесплатно: bportugal.pt → «Mapa de Responsabilidades»',
          '💰 Хорошая история через 12 месяцев = доступ к ипотеке и автокредитам'
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Советы',
      content: [
        { kind: 'checklist', items: [
          '💳 Первая кредитка — самая сложная, дальше легче',
          '🎁 Кэшбэк в Continente / Pingo Doce + кредитка = двойная выгода: карта супермаркета + кэшбэк кредитки',
          '🌍 Для поездок за границу выгодно платить кредиткой: у них часто есть страхование и chargeback, то есть возврат денег при мошенничестве',
          '⚖️ ВАЖНО: МНОГИЕ российские кредитки заблокированы для оплат в Португалии — нужна местная карта',
          '🚫 Никогда не делать cash advance с кредитки — комиссия 5% + проценты с первого дня',
          '🔁 Carência — возможность отложить оплату на 1–3 месяца; полезно при кризисе, но банк может занести это в CRC',
          '⚖️ DEC (Direito a Esquecimento de Crédito): через 5 лет долги аннулируются, если не были реактивированы',
          '🏆 Wizink White с balance transfer под 0% APR на 24 месяца — спасение, если есть долги по другим кредиткам'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Годовое обслуживание базовой кредитки', amountEURMin: 0, amountEURMax: 30 },
    { label: 'Годовое обслуживание премиальной кредитки', amountEURMin: 100, amountEURMax: 300 },
    { label: 'Годовая ставка при просрочке платежа', amountEURMin: 12, amountEURMax: 22, note: '%' },
    { label: 'Комиссия за снятие наличных с кредитки', amountEURMin: 5, amountEURMax: 25 }
  ],
  sources: [
    { title: 'Banco de Portugal — Mapa de Responsabilidades', url: 'https://www.bportugal.pt/page/mapa-de-responsabilidades-de-credito', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Banco de Portugal — Cartões de Crédito (Portal do Cliente Bancário)', url: 'https://clientebancario.bportugal.pt/pt-pt/cartoes-de-credito', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}