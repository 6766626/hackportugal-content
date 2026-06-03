export default {
  editorialVoice: 'hackportugal',
  id: 'online-supermercado-entrega',
  categoryId: 'food_leisure',
  title: 'Доставка продуктов на дом: Continente Online, Auchan, El Corte Inglés, Pingo Doce',
  tldr: 'В 2026 доставка продуктов в Португалии работает неплохо в Lisboa, Porto и пригородах, но покрытие сильно зависит от почтового кода. Continente Online обычно берёт около 3–7 € за слот, Auchan и Pingo Doce показывают цену после адреса, El Corte Inglés Supermercado/Express удобен в центре Lisboa и может привезти часть ассортимента примерно за 1 час. Для срочных покупок используйте Glovo Mercado и Bolt Market, но цены и наценки выше.',
  tags: ['supermercado', 'доставка', 'continente', 'glovo'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'coverage-first',
      title: '1. Сначала проверьте покрытие по адресу',
      content: [
        { kind: 'paragraph', text: 'В Португалии нет единой «национальной» доставки продуктов. Один и тот же бренд может доставлять в Lisboa, Porto, Cascais, Oeiras, Matosinhos или Gaia, но не доставлять в соседний concelho. Проверка всегда начинается с código postal.' },
        { kind: 'checklist', items: [
          'Введите полный адрес и código postal на сайте или в приложении supermercado.',
          'Проверьте не только доставку домой, но и Click & Collect / levantamento em loja.',
          'Смотрите ближайшие слоты: вечером и перед праздниками они быстро заканчиваются.',
          'Проверьте минимальную корзину: у разных сетей и зон она отличается.',
          'Сравните итоговую сумму, а не только цены на товары: доставка, сервисный сбор, пакеты, промо и замены влияют на чек.',
          'Если живёте в prédio без лифта, заранее укажите этаж и код домофона.',
          'Для gated condominium добавьте инструкции курьеру на португальском или английском.'
        ] }
      ]
    },
    {
      id: 'main-supermarkets',
      title: '2. Основные сети: что выбрать',
      content: [
        { kind: 'substeps', items: [
          { id: 'continente', title: 'Continente Online', content: [
            { kind: 'paragraph', text: 'Самый универсальный вариант для большой закупки. Хороший выбор, частые promoções, карта Continente, доставка во многих зонах Lisboa/Porto и других городов. Типичная плата за доставку в 2026 — примерно 3–7 € в зависимости от слота, адреса и кампаний.' },
            { kind: 'checklist', items: [
              'Подходит для закупки на неделю.',
              'Удобно покупать воду, бытовую химию, детские товары, товары Continente.',
              'Можно разрешить или запретить substituições — замены отсутствующих товаров.',
              'Цены и promos лучше проверять в день заказа: акции меняются часто.',
              'Club/Cartão Continente может дать купоны, saldo em cartão и скидки на топливо Galp по отдельным кампаниям.'
            ] }
          ] },
          { id: 'auchan', title: 'Auchan', content: [
            { kind: 'paragraph', text: 'Хорош для гипермаркетного ассортимента: продукты, вино, техника для дома, товары для животных, био и internacional. Доставка и самовывоз зависят от конкретного código postal и ближайшего Auchan.' }
          ] },
          { id: 'el-corte-ingles', title: 'El Corte Inglés Supermercado / Express', content: [
            { kind: 'paragraph', text: 'Премиальный вариант, особенно в Lisboa.\n\nВ центре Lisboa сервис Express может быть удобен для быстрой доставки примерно за 1 час, если адрес входит в зону покрытия.\n\nЦены часто выше, зато хороший выбор delicatessen, импортных товаров, мяса, рыбы, вина и готовой еды.' }
          ] },
          { id: 'pingo-doce', title: 'Pingo Doce', content: [
            { kind: 'paragraph', text: 'Pingo Doce удобен для привычной повседневной корзины и часто конкурентен по ценам. Онлайн-доставка доступна не везде: проверяйте loja online / приложение по адресу. В некоторых зонах часть ассортимента может быть доступна через партнёрские платформы вроде Glovo.' }
          ] }
        ] }
      ]
    },
    {
      id: 'fast-delivery',
      title: '3. Срочная доставка: Glovo Mercado и Bolt Market',
      content: [
        { kind: 'paragraph', text: 'Если нужно «молоко, яйца, кофе и корм сейчас», быстрее часто работают Glovo Mercado, Bolt Market или супермаркеты внутри Glovo. Это не замена большой недельной закупке: ассортимент меньше, цены могут быть выше, плюс есть delivery fee, service fee и иногда small order fee.' },
        { kind: 'checklist', items: [
          'Glovo удобен в Lisboa, Porto, Braga, Coimbra, Faro и туристических районах, но покрытие квартальное.',
          'Bolt Market работает как dark store: быстро, но ассортимент ограничен.',
          'Проверяйте итог перед оплатой: комиссии появляются на последнем экране.',
          'Для срочной доставки выбирайте товары без сложных замен: молоко, хлеб, яйца, snacks, бытовая химия.',
          'Для свежей рыбы, мяса и овощей лучше крупный supermercado с нормальным picking и слотами.',
          'В дождь, вечер пятницы и праздники время доставки и цена могут резко вырасти.'
        ] },
        { kind: 'warning', text: 'Не сравнивайте цену товара в Glovo/Bolt с полочной ценой в магазине напрямую: платформа может иметь отдельные цены, комиссии и промокоды. Итоговая корзина на 30 € легко становится 35–40 €.' }
      ]
    },
    {
      id: 'ordering-tips',
      title: '4. Как оформить заказ без сюрпризов',
      content: [
        { kind: 'checklist', items: [
          'Создайте аккаунт заранее, добавьте NIF только если нужен счёт-fatura для IRS или компании.',
          'Адрес пишите в португальском формате: Rua/Avenida, número, andar, lado, código postal, cidade.',
          'В комментарии добавьте: “Tocar à campainha”, “Deixar na portaria” или “Ligar antes de chegar”.',
          'Для алкоголя курьер может попросить документ, особенно если выглядите младше 25.',
          'Отметьте, нужны ли sacos. Пакеты обычно платные, даже если сумма небольшая.',
          'Проверьте правила замены: “substituir por produto semelhante” или “não substituir”.',
          'После доставки проверьте чек и отсутствующие позиции сразу: возврат проще запросить в тот же день.',
          'Сохраняйте email с encomenda и fatura/recibo до закрытия заказа.'
        ] },
        { kind: 'paragraph', text: 'Платёж обычно проходит картой Visa/Mastercard, MB WAY, иногда PayPal или Multibanco. У международных карт бывают отказы из-за 3-D Secure; португальская карта или MB WAY часто стабильнее.' }
      ]
    },
    {
      id: 'fresh-products',
      title: '5. Свежие продукты и замены',
      content: [
        { kind: 'paragraph', text: 'Главная проблема онлайн-супермаркетов — не доставка, а подбор свежих продуктов. Picker выбирает овощи, фрукты, мясо и рыбу вместо вас. В хороших сетях это работает нормально, но качество зависит от магазина, смены и времени заказа.' },
        { kind: 'checklist', items: [
          'Овощи и фрукты с точной зрелостью лучше покупать офлайн на mercado municipal или в frutaria.',
          'Для мяса и рыбы указывайте весовой диапазон и предпочтения, если поле комментария доступно.',
          'Молочные продукты проверяйте по сроку годности при получении.',
          'Замороженные продукты заказывайте на слот, когда вы точно дома.',
          'Если товар пришёл повреждённым, сфотографируйте упаковку и etiqueta в день доставки.',
          'При большой закупке воды проверьте, поднимают ли курьеры до квартиры или оставляют у входа — правила зависят от сервиса.'
        ] },
        { kind: 'warning', text: 'В Португалии курьеры и сборщики не обязаны звонить по каждому отсутствующему товару. Если замены критичны из-за аллергии, детского питания или диеты, лучше запретить substituições.' }
      ]
    },
    {
      id: 'best-strategy',
      title: '6. Практичная схема для экспата',
      content: [
        { kind: 'paragraph', text: 'Оптимальная схема в 2026: один крупный заказ раз в неделю через Continente/Auchan/Pingo Doce, премиальные или импортные товары через El Corte Inglés, срочные мелочи через Glovo или Bolt Market. После 2–3 заказов станет ясно, какая сеть лучше покрывает именно ваш адрес.' },
        { kind: 'checklist', items: [
          'Для семьи: Continente Online или Auchan с большим слотом и доставкой 3–7 € / по тарифу адреса.',
          'Для центра Lisboa: El Corte Inglés Express для быстрых и качественных покупок.',
          'Для студии или одного человека: Glovo/Bolt для срочного, supermercado офлайн для базового.',
          'Для экономии: сравнивайте promoções и покупайте тяжёлое онлайн, свежее — рядом с домом.',
          'Для новых районов после переезда: первые две недели тестируйте 2–3 сервиса, не делайте огромный первый заказ.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Continente Online — доставка', amountEURMin: 3, amountEURMax: 7, note: 'Типичный диапазон по слотам и зонам; точная цена показывается после адреса и перед оплатой.' },
    { label: 'El Corte Inglés Express', amountEURMin: 0, amountEURMax: 8, note: 'Стоимость и минимальная корзина зависят от адреса, слота и кампаний; в центре Lisboa возможна быстрая доставка примерно за 1 час.' },
    { label: 'Glovo / Bolt Market', amountEURMin: 1.99, amountEURMax: 6.99, note: 'Обычно есть delivery fee и service fee; при маленькой корзине возможен small order fee.' }
  ],
  sources: [
    { title: 'Continente Online — официальный сайт заказа продуктов', url: 'https://www.continente.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'El Corte Inglés Portugal — supermercado и доставка', url: 'https://www.elcorteingles.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Auchan Portugal — loja online и доставка', url: 'https://www.auchan.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Pingo Doce — loja online и serviços', url: 'https://www.pingodoce.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
