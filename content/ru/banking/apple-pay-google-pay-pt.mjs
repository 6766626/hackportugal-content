export default {
  editorialVoice: 'hackportugal',
  id: 'apple-pay-google-pay-pt',
  categoryId: 'banking',
  title: 'Apple Pay и Google Pay в Португалии — как настроить',
  tldr: 'В Португалии Apple Pay и Google Pay работают везде, где терминал принимает contactless: супермаркеты, метро, такси, рестораны, online. На апрель 2026 поддерживаются карты многих банков, включая CGD, Millennium bcp, Santander, ActivoBank, Banco Best и Revolut, но конкретная карта проверяется в приложении банка/Wallet. Обычный contactless без PIN ограничен 50 €, а Apple Pay/Google Pay с Face ID/Touch ID/отпечатком обычно проходят и выше 50 €, потому что это сильная аутентификация. MB WAY остаётся местной альтернативой.',
  tags: ['applepay', 'googlepay', 'mbway', 'банки'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-works',
      title: 'Где это работает в Португалии',
      content: [
        { kind: 'paragraph', text: 'Apple Pay и Google Pay в Португалии — это обычная бесконтактная оплата картой Visa/Mastercard через телефон или часы. Если на терминале есть значок contactless, обычно можно платить телефоном.' },
        { kind: 'checklist', items: [
          'Супермаркеты: Continente, Pingo Doce, Lidl, Aldi, Auchan, Mercadona',
          'Кафе, рестораны, аптеки, заправки, отели',
          'Такси и TVDE-сервисы, если у водителя терминал с contactless',
          'Онлайн-магазины и приложения, если на checkout есть Apple Pay или Google Pay',
          'Транспортные автоматы и некоторые турникеты, где принимаются банковские карты',
          'Multibanco-терминалы нового типа — если включён contactless у конкретного эквайера'
        ] },
        { kind: 'warning', text: 'Не путайте Apple Pay/Google Pay с Multibanco. В Португалии многие бытовые платежи — luz, água, telecomunicações, impostos — идут через entidade + referência в Multibanco/MB WAY. Apple Pay и Google Pay не заменяют эту систему.' }
      ]
    },
    {
      id: 'supported-banks',
      title: 'Какие банки и карты поддерживаются',
      content: [
        { kind: 'paragraph', text: 'Поддержка зависит не только от банка, но и от типа карты: débito/crédito, Visa/Mastercard, personal/business, иногда даже от страны выпуска. Самый надёжный тест — открыть Wallet/Google Wallet или приложение банка и попробовать добавить карту.' },
        { kind: 'checklist', items: [
          'CGD / Caixa Geral de Depósitos — карты Caixa обычно добавляются в Apple Pay и Google Pay через CaixaDirecta или Wallet',
          'Millennium bcp — поддерживает мобильные кошельки для многих карт; проверяйте в app Millennium',
          'Santander Portugal — Apple Pay и Google Pay доступны для совместимых карт Santander',
          'ActivoBank — часто удобный вариант для экспатов; карты обычно работают с Apple Pay/Google Pay',
          'Banco Best — поддержка зависит от карты; проверяйте в Best Bank app и Wallet',
          'Revolut — один из самых простых вариантов: виртуальная/физическая карта добавляется почти сразу после открытия счёта',
          'Wise, N26, Openbank и другие fintech-карты ЕС обычно тоже работают, если карта выпущена в поддерживаемой стране',
          'Cartão de refeição, корпоративные и prepaid-карты могут не добавляться, даже если банк в списке'
        ] },
        { kind: 'warning', text: 'Списки Apple и Google обновляются без отдельного уведомления. Если банк есть в списке, это не гарантирует поддержку каждой карты; если банка нет, карта иногда всё равно добавляется через международного эмитента.' }
      ]
    },
    {
      id: 'apple-pay-setup',
      title: 'Настройка Apple Pay на iPhone и Apple Watch',
      content: [
        { kind: 'substeps', items: [
          { id: 'iphone', title: '1. Добавить карту на iPhone', content: [
            { kind: 'checklist', items: [
              'Откройте Wallet',
              'Нажмите “+”',
              'Выберите “Debit or Credit Card”',
              'Отсканируйте карту или введите данные вручную',
              'Примите условия банка',
              'Подтвердите карту через SMS, звонок, email или приложение банка',
              'Поставьте карту по умолчанию, если хотите платить ею первой'
            ] }
          ] },
          { id: 'watch', title: '2. Добавить карту на Apple Watch', content: [
            { kind: 'paragraph', text: 'Откройте приложение Watch на iPhone → Wallet & Apple Pay → Add Card. Карта на часах токенизируется отдельно: если она есть на iPhone, это не всегда значит, что она уже есть на Apple Watch.' }
          ] },
          { id: 'pay', title: '3. Оплата', content: [
            { kind: 'paragraph', text: 'На iPhone с Face ID дважды нажмите боковую кнопку, подтвердите Face ID и поднесите к терминалу. На iPhone с Touch ID приложите палец к Touch ID. На Apple Watch дважды нажмите боковую кнопку.' }
          ] }
        ] },
        { kind: 'warning', text: 'Регион Apple ID обычно не должен быть Португалией для оплаты португальской картой, но устройство должно иметь Face ID/Touch ID или код-пароль. Без блокировки экрана Wallet не даст нормально использовать карту.' }
      ]
    },
    {
      id: 'google-pay-setup',
      title: 'Настройка Google Pay / Google Wallet на Android',
      content: [
        { kind: 'paragraph', text: 'В 2026 Google Pay для пользователя — это приложение Google Wallet. Оплата в магазине работает через NFC. На некоторых телефонах китайских прошивок или без Google Services бесконтактная оплата может не работать.' },
        { kind: 'checklist', items: [
          'Установите Google Wallet из Google Play',
          'Включите NFC: Settings → Connected devices → NFC',
          'Сделайте Google Wallet приложением оплаты по умолчанию',
          'Нажмите “Add to Wallet” → “Payment card”',
          'Отсканируйте карту или введите данные вручную',
          'Подтвердите карту через банк: SMS, push, app, звонок',
          'Проверьте, что телефон имеет блокировку экрана: PIN, отпечаток, лицо или пароль',
          'Для оплаты разблокируйте телефон и поднесите к терминалу; открывать приложение обычно не нужно'
        ] },
        { kind: 'warning', text: 'Root, разблокированный bootloader, старые версии Android, отключённые Google Play Services или корпоративные ограничения MDM могут заблокировать оплату. Банк при этом будет говорить “карта поддерживается”, но Google Wallet не даст платить.' }
      ]
    },
    {
      id: 'limits-and-pin',
      title: 'Лимиты 50 €, PIN и биометрия',
      content: [
        { kind: 'paragraph', text: 'В Португалии стандартный лимит для обычной contactless-оплаты физической картой без PIN — 50 € за одну операцию. После нескольких мелких операций подряд терминал или банк может запросить PIN из-за правил SCA.' },
        { kind: 'checklist', items: [
          'Физическая карта contactless до 50 € обычно проходит без PIN',
          'Физическая карта выше 50 € почти всегда требует PIN',
          'Apple Pay/Google Pay используют Face ID, Touch ID, отпечаток, PIN телефона или пароль',
          'Из-за биометрии такие платежи считаются аутентифицированными и часто проходят выше 50 € без PIN карты',
          'Некоторые терминалы всё равно могут попросить PIN — это нормально, особенно у старых POS',
          'Банк может отклонить необычную операцию и попросить повторить оплату картой с PIN',
          'Для аренды авто, гостиничного депозита и caução иногда требуют физическую кредитную карту, а не Wallet'
        ] },
        { kind: 'warning', text: 'Если терминал просит PIN при оплате телефоном, вводите PIN карты, а не код разблокировки телефона. Если карта виртуальная и PIN неизвестен, посмотрите его в приложении банка.' }
      ]
    },
    {
      id: 'mb-way-alternative',
      title: 'MB WAY как португальская альтернатива',
      content: [
        { kind: 'paragraph', text: 'MB WAY — местная система SIBS, привязанная к португальскому номеру телефона и банковской карте. Для жизни в Португалии она часто полезнее, чем Apple Pay/Google Pay, потому что закрывает бытовые сценарии Multibanco.' },
        { kind: 'checklist', items: [
          'Мгновенные переводы по номеру телефона внутри Португалии',
          'Оплата online через MB WAY без ввода данных карты',
          'Создание виртуальных карт MB NET для интернет-покупок',
          'Снятие наличных в Multibanco без физической карты',
          'Оплата referências Multibanco: счета, налоги, serviços',
          'Разделение счёта между друзьями',
          'QR-оплата в некоторых магазинах и ресторанах',
          'Удобно для OLX, аренды, бытовых переводов и небольших платежей'
        ] },
        { kind: 'paragraph', text: 'Оптимальная связка для экспата: Apple Pay/Google Pay для терминалов и online checkout, MB WAY для переводов, referências и повседневной португальской инфраструктуры.' }
      ]
    }
  ],
  costs: [
    { label: 'Добавление карты в Apple Pay / Google Pay', amountEUR: 0, note: 'Apple и Google не берут комиссию с пользователя за добавление и оплату картой.' },
    { label: 'Оплата в магазинах Португалии', amountEUR: 0, note: 'Обычно без комиссии для покупателя; возможны комиссии банка по вашей карте, если карта иностранная или операция в другой валюте.' }
  ],
  sources: [
    { title: 'Apple Support Portugal — Apple Pay, настройка и использование', url: 'https://support.apple.com/pt-pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Google Pay / Google Wallet — справка и поддерживаемые способы оплаты', url: 'https://pay.google.com', kind: 'company', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'Banco de Portugal — pagamentos contactless и правила безопасности', url: 'https://www.bportugal.pt/page/pagamentos-contactless', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'MB WAY — официальный сайт сервиса SIBS', url: 'https://www.mbway.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
