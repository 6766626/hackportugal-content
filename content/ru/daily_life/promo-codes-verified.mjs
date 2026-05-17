export default {
  editorialVoice: 'hackportugal',
  id: 'promo-codes-verified',
  categoryId: 'daily_life',
  // Explicit premium override — this is one of the headline value props for the v2.0
  // subscription. Even though `daily_life` is a free category, we gate the verified
  // promo-code list behind the premium tier (it's literally how users recoup the cost
  // of the subscription). The marketing pitch in the paywall references this guide.
  premium: true,
  title: 'Промокоды и реферальные ссылки — проверенные на 17.05.2026',
  tldr: 'Эта подборка обновляется ежемесячно. Каждый код имеет дату последней проверки. Главное правило: реферальные коды (N26, Revolut, Wise, Glovo) не «истекают» в обычном смысле — они дают бонус и вам, и приглашающему. Промокоды (AutoDoc, Decathlon) истекают; ниже только те, где источник верифицирован. Самый высокий потенциал «вернуть подписку HackPortugal»: N26 +€35, Revolut +€30, Wise +€75 invite, Glovo +€8 — все вместе ~€150 за вечер регистраций. Если вы уже клиент этих сервисов, используйте только нерефералы (AutoDoc, Decathlon, кэшбэк-сайты). Если у кода не пришёл бонус — напишите на feedback HackPortugal, мы обновим.',
  tags: ['промокоды', 'купоны', 'реферал', 'кэшбэк', 'экономия', 'премиум'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'how-this-works',
      title: 'Как мы проверяем коды',
      content: [
        { kind: 'paragraph', text: 'Промокоды живут недолго (от недели до 3 месяцев), реферальные ссылки — практически бессрочно. Поэтому подборка устроена так: каждый код имеет дату последней проверки (формат: «проверено DD/MM/YYYY»). Раз в месяц HackPortugal проходит весь список, тестирует каждый код на сайте бренда, помечает мёртвые и добавляет новые активные. Если код перестал работать раньше — напишите нам через Settings → Feedback и мы обновим в течение 48 часов.' },
        { kind: 'checklist', items: [
          '🟢 Активный код: дата проверки ≤ 30 дней назад + источник проверен на сайте бренда',
          '🟡 Может работать: дата 30-60 дней — обычно ещё активен, но проверьте сами',
          '🔴 Истёкший: исключаем из списка после следующей проверки',
          '🔵 Реферальная ссылка: не «истекает», но бонус может меняться сетью бренда'
        ]},
        { kind: 'warning', text: 'Honesty disclaimer: HackPortugal зарабатывает комиссию с некоторых ссылок (помечены 💚). Это не влияет на выбор — мы добавляем код, только если: 1) он реально работает 2) экономия для вас существенна 3) бренд легальный. Если предложение хуже у партнёра — мы оставим неаффилированную ссылку.' }
      ]
    },
    {
      id: 'fintech',
      title: 'Финтех — самые большие быстрые бонусы (€150+ за вечер)',
      content: [
        { kind: 'paragraph', text: 'Эти 4 банка/сервиса работают в Португалии, имеют активные реферальные программы и часто используются мигрантами. Бонус приходит после первой оплаты картой или первого перевода. Регистрация — 5-10 минут, всё онлайн с паспортом.' },
        { kind: 'checklist', items: [
          '🏦 N26 — до €35 бонус. Реферальная ссылка через N26-app существующего клиента (тап на иконку подарка). Условие: новый клиент + первая оплата картой в течение 60 дней. Проверено: 17.05.2026',
          '🏦 Revolut — до €30 бонус. Ссылка из существующего Revolut-app (Profile → Invite friends). Бонус приходит обоим после первой операции €100+. Проверено: 17.05.2026',
          '💸 Wise (бывш. TransferWise) — €75 бонус за приглашение, плюс бесплатный первый перевод до €600. Ссылка из вашего Wise-app. Проверено: 17.05.2026',
          '💳 Bunq — €10-25 за нового клиента, в зависимости от плана. Реферальная ссылка из Bunq-app. Проверено: 17.05.2026',
          '🇵🇹 Activobank — обычно нет реферала, но у них регулярные welcome-бонусы €25-50 на первое использование, ищите на их сайте activobank.pt'
        ]},
        { kind: 'paragraph', text: 'Стратегия для экономии: открыть Wise (€75) + Revolut (€30) + N26 (€35) = €140 за один вечер. Полностью окупает годовую подписку HackPortugal €29.99 × 4.' }
      ]
    },
    {
      id: 'auto',
      title: 'Авто, запчасти, шины',
      content: [
        { kind: 'paragraph', text: 'Если у вас машина в Португалии, замена запчастей и расходников — это €100-500 в год. AutoDoc — крупнейшая европейская сеть онлайн-запчастей.' },
        { kind: 'checklist', items: [
          '🔧 AutoDoc 10% off (первый заказ): код BC98213949 — это персональный реферальный код HackPortugal. Действует на сайте autodoc.pt при первой покупке. Применяется в корзине. Проверено: 17.05.2026 💚',
          '🚗 Norauto Portugal: периодические купоны 10-15% в их email-newsletter. Регистрация на norauto.pt → подписка',
          '🛞 Euromaster (Michelin): сезонные акции на шины октябрь-ноябрь (зимняя коллекция), март-апрель (летняя). До 15% off на 4 шины',
          '⛽ Galp Frota / Repsol Travelclub: накопительные программы для топлива, ~5-10 цент/литр; интегрируются с Cartão Continente (см. отдельный гайд promo-codes-aggregator)'
        ]},
        { kind: 'warning', text: 'Установка запчастей сторонним мастером возможна, но AutoDoc гарантия требует фискального чека на сервис. Сохраняйте все документы.' }
      ]
    },
    {
      id: 'food-delivery',
      title: 'Доставка еды и такси',
      content: [
        { kind: 'paragraph', text: 'Все три крупных сервиса в Португалии имеют активные реферальные программы. Бонус приходит обычно обоим — пригласившему и приглашённому.' },
        { kind: 'checklist', items: [
          '🛵 Glovo — €8 для нового пользователя + €8 пригласившему после первого заказа. Реферальная ссылка в Glovo-app (Profile → Invite). Также есть public промокоды: 1Q6K7YL (бесплатная доставка на первые 3 заказа €5+), WGCEDEX (до €16 на первый заказ). Проверено: 17.05.2026',
          '🍔 Uber Eats — персональный код в app (Account → Invite friends). Друг получает скидку $20-25 на первый заказ, вы получаете credit на следующий. Бонус варьируется по региону',
          '🚕 Uber (такси) — отдельный реферал в Uber-app. Иногда бесплатная первая поездка для нового клиента',
          '⚡ Bolt — 25 активных voucher-кодов на май 2026, искать на bolt.eu/promo. Реферал в Bolt-app',
          '🍕 Wolt — реферальная ссылка в app, $5-10 credit обоим'
        ]}
      ]
    },
    {
      id: 'shopping',
      title: 'Шопинг — одежда, электроника, спорт',
      content: [
        { kind: 'checklist', items: [
          '⚽ Decathlon: бесплатная Decathlon Card даёт 10% возврат на бренды Decathlon (Quechua, Domyos, Kalenji, etc.) + 365-дневный возврат любых товаров. Зарегистрируйтесь в магазине или на decathlon.pt',
          '👕 FNAC Portugal: Cartão FNAC (5 € платно) даёт скидки на билеты на концерты и книги. Регулярные распродажи 4 раза в год (1 февраля, 1 мая, 1 августа, 26 декабря — Boxing Day)',
          '📱 Worten: Cartão Worten бесплатно. Чёрная пятница, summer sales (июль), Back to School (август-сентябрь) — до 50% off на технику',
          '🥑 iHerb (для добавок, БАДов): код INTRO20 даёт 20% off + бесплатная доставка от $40. Действует только для новых клиентов. Проверено: 17.05.2026',
          '🌍 Amazon Spain / Italy: реферальная ссылка через Amazon-app (Account → Invite). Доставка в Португалию для Amazon.es обычно 3-5 дней, бесплатно от €29',
          '👶 PingoDoce, Continente: лучшие промо смотрите в weekly «folheto» на их app — каждый понедельник новые акции 30-50% на определённые категории'
        ]}
      ]
    },
    {
      id: 'travel',
      title: 'Путешествия и отели',
      content: [
        { kind: 'paragraph', text: 'Большие сэкономки на путешествиях — это уровень €50-200 за бронирование. Реферальные программы у больших booking-сайтов почти отсутствуют (только B2B), но welcome-бонусы для новых клиентов есть.' },
        { kind: 'checklist', items: [
          '🏨 Booking.com Genius: после 2 stay\'s в течение 2 лет — статус Genius Level 1 (10% off некоторые отели). После 5 stays — Genius Level 2 (15% off, бесплатные завтраки/upgrades в части отелей). Создаётся автоматически',
          '✈️ TAP Miles&Go: бонусные мили за регистрацию (часто 1000-2000 миль = €15-30 на следующий билет). Регистрация на flytap.com — бесплатно',
          '🚗 Sixt Frequent Driver: скидки на аренду авто, программа лояльности — бесплатно',
          '🏠 Airbnb: персональный реферальный код в app (Profile → Invite). Гость получает €15-25 credit на первое бронирование, вы €15-25 после',
          '🚆 CP комбоиос: годовая карточка 65+ или Cartão Jovem Europeu даёт 25-50% постоянной скидки (см. promo-codes-aggregator)',
          '🚌 FlixBus: для новых клиентов автоматическая 10% скидка на первый билет, искать на flixbus.com'
        ]}
      ]
    },
    {
      id: 'cashback-extensions',
      title: 'Кэшбэк-плагины и кошельки — пассивная экономия',
      content: [
        { kind: 'paragraph', text: 'Кэшбэк-сервисы автоматически возвращают вам процент с каждой покупки, не требуя ввода промокода. Поставил один раз — работает фоном.' },
        { kind: 'checklist', items: [
          '💸 Letyshops PT — 2-15% возврат на Amazon ES/IT, MediaMarkt, Booking, eDreams, FNAC. Минимум вывода €5. Плагин для Chrome/Firefox',
          '💸 eBuyClub PT — конкурент Letyshops, сильнее в moda (одежде). 5-10% возврат',
          '💸 ShopBuddies PT — фокус на fashion brands',
          '💳 Honey (от PayPal) — браузерный плагин, автоматически тестирует все известные промокоды в корзине. Бесплатно, ничего настраивать',
          '🇪🇺 Carlo (cashback ЕС) — растущий сервис, дешевле комиссии чем Letyshops, но меньше брендов'
        ]},
        { kind: 'paragraph', text: 'Стратегия: установить ОДНОВРЕМЕННО Honey + Letyshops — Honey найдёт промокод, Letyshops добавит кэшбэк сверху. Это полностью независимые механики.' }
      ]
    },
    {
      id: 'how-to-report',
      title: 'Если код не работает',
      content: [
        { kind: 'checklist', items: [
          '📩 Напишите нам через Settings → Feedback в приложении: укажите название бренда + код + что произошло (insufficient amount, expired, region restricted)',
          '⏱️ Мы проверяем сообщения в течение 48 часов и обновляем код в следующей версии манифеста (доступна через pull-to-refresh)',
          '🌐 Альтернативные источники свежих кодов: radarcupao.pt, ocacapromocoes.pt, Cuponation.pt — см. отдельный гайд «promo-codes-aggregator»',
          '🔄 Не работает реферал? Иногда нужно: 1) очистить cookies браузера 2) использовать инкогнито 3) применить код напрямую через invite-link, не вводить вручную'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Banco de Portugal — правила реферальных программ финтех-сервисов', url: 'https://www.bportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'DECO PROteste — права потребителя при онлайн-покупках', url: 'https://www.deco.proteste.pt/familia-consumo/direitos-consumidor/dicas/compras-online-segunda-mao-cuidados-ter', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'AutoDoc — официальный сайт для проверки промокодов', url: 'https://www.autodoc.pt/', kind: 'secondary', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'N26 — Refer-a-friend официальные правила', url: 'https://support.n26.com/en-eu/app-and-features/friend-referral/how-to-earn-money-by-inviting-friends-to-n26', kind: 'secondary', language: 'en', lastRetrieved: '2026-05-17' },
    { title: 'Booking.com — Genius программа лояльности', url: 'https://www.booking.com/genius.html', kind: 'secondary', language: 'en', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90,
  recentlyChangedAt: '2026-05-17',
  changeSummary: '🆕 Новый Premium-гайд: верифицированные промокоды и реферальные ссылки. Главное предложение: окупите подписку за один вечер через бонусы N26 €35 + Revolut €30 + Wise €75 + Glovo €8 = €148. Также AutoDoc 10% off (код BC98213949), iHerb INTRO20, Glovo public codes, кэшбэк-плагины (Letyshops, Honey). Дата проверки каждого кода и обещание обновлять при поломке через Feedback. Этот гайд автоматически premium-only (categoryId daily_life, но premium override).'
}
