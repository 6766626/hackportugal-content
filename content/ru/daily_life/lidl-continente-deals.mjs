export default {
  editorialVoice: 'hackportugal',
  id: 'lidl-continente-deals',
  categoryId: 'daily_life',
  title: 'Lidl Outlet, карта Continente, сравнение цен — экономия в супермаркетах',
  tldr: 'В Португалии скидки в супермаркетах концентрируются в программах лояльности (Continente, Pingo Doce, Lidl Plus) и еженедельных флаерах. Lidl Outlet — интернет-магазин непродовольственных товаров по ценам на 30-70% ниже обычных. Cartão Continente даёт накопительную скидку 1-5% + точечные акции. Сравнение цен между сетями: разница 10-25% на базовой корзине, до 40% на алкоголе и бытовой химии.',
  tags: ['супермаркеты', 'скидки', 'lidl', 'continente'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'lidl-outlet',
      title: 'Lidl Outlet — интернет-магазин',
      content: [
        { kind: 'paragraph', text: 'lidl.pt/outlet — отдельный онлайн-магазин для непродовольственных товаров: техника, одежда, инвентарь, товары для туризма. Цены часто на 30-70% ниже, чем в розничной сети. Причина — скидочные остатки прошлых сезонов, ликвидация товарных запасов.' },
        { kind: 'checklist', items: [
          'Категории: домашняя техника, спорт, туризм, товары для ремонта, сад, мода',
          'Доставка по всей стране, 3-5 € за заказ',
          'Самовывоз в магазине Lidl — бесплатно',
          'Возврат — 30 дней без причины (по EU Directive 2011/83)',
          'Оплата: карта, MB WAY, PayPal, банковский перевод',
          'Сезонные окна: открывают 2-3 раза в год на 2-3 недели каждое',
          'Telegram-боты / RSS отслеживают открытие; можно подписаться в приложении Lidl Plus'
        ]},
        { kind: 'warning', text: 'Lidl Outlet — НЕ продукты питания. Для продуктов — обычный Lidl с приложением Lidl Plus.' }
      ]
    },
    {
      id: 'cards',
      title: 'Карты лояльности — все сети',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: '🟥 Cartão Continente (Sonae)', content: [
            { kind: 'checklist', items: [
              'Оформление: любая касса Continente / Continente Online / приложение',
              'NIF + имя + адрес, бесплатно',
              'Накопление: базово 1% от покупки (500 баллов = 5 €)',
              'До 5% на маркированные товары (акция + Cartão)',
              '«Poupa Mais» — персонализированные купоны в приложении',
              'Топливо в Galp / Repsol — со скидкой 0.06 €/л при оплате Cartão Continente',
              'Универсальный кешбэк работает и в Worten, Zippy, MO, Sport Zone, Wells (все в группе Sonae)'
            ]}
          ]},
          { id: 'c2', title: '🟩 Pingo Doce — Poupa Mais', content: [
            { kind: 'checklist', items: [
              'Бесплатная карта, оформляется онлайн на pingodoce.pt',
              'Скидки персонализированные (через приложение)',
              '«Descontos directos» — на чеке, без накопления',
              'Комбинируется с 5 «super-promoções» недели',
              'Бензин в Repsol: скидки комбинируются'
            ]}
          ]},
          { id: 'c3', title: '🟨 Lidl Plus', content: [
            { kind: 'checklist', items: [
              'Приложение Lidl Plus (только цифровая карта, пластиковой нет)',
              'Купоны обновляются еженедельно',
              'Достижение «Etapas» при крупных покупках даёт бонусы (3-10 €)',
              'Скретч-карта ежедневно — иногда выигрывают 5-50 €',
              'Флаер Lidl — ссылки в приложении + скидки до 50% по акциям'
            ]}
          ]},
          { id: 'c4', title: '🟦 Auchan Cartão', content: [
            { kind: 'paragraph', text: 'Менее распространён, но хорош в регионах, где Auchan силён (Alverca, Almada, Maia). Накопление 1% + купоны через приложение MyAuchan.' }
          ]},
          { id: 'c5', title: '🟧 Intermarché', content: [
            { kind: 'paragraph', text: 'Cartão Intermarché + АЗС Intermarché: иногда конкурентные цены на базовые продукты + топливо.' }
          ]}
        ]}
      ]
    },
    {
      id: 'folhetos',
      title: 'Флаеры с еженедельными акциями',
      content: [
        { kind: 'paragraph', text: 'Флаер — скидочный журнал недели. Старые версии кладут дома в почтовый ящик, новые — в приложениях сетей. Сайт-агрегатор folhetos.pt собирает все.' },
        { kind: 'checklist', items: [
          '📱 Приложение folhetos.pt — push-уведомления на товары в списке желаний',
          '🗓️ Цикл: среда-вторник (большинство) / понедельник-воскресенье (Lidl)',
          '📉 Флаер «Super Poupança» Continente — среда до 50% скидок',
          '💎 Флаер «Descobertas» Pingo Doce — пятница-воскресенье, 30-40% на подборку товаров',
          '🟨 Lidl «Super-fins-de-semana» — пятница-воскресенье',
          '🍾 Алкоголь и деликатесы часто попадают во флаеры 2 раза в год — Новый год, Пасха'
        ]}
      ]
    },
    {
      id: 'compare',
      title: 'Сравнение цен между сетями',
      content: [
        { kind: 'paragraph', text: 'DECO PROteste (организация защиты прав потребителей) каждый год публикует исследование цен на корзину из 164 базовых продуктов.' },
        { kind: 'checklist', items: [
          '🏆 Самые дешёвые (2025 DECO): Mercadona, следом Aldi, Lidl, Continente Bom Dia',
          '🟥 Continente: дороже среднего, но широкий ассортимент и лучшие недели акций',
          '🟩 Pingo Doce: средние цены, хорошее качество товаров премиум-сегмента',
          '🟨 Lidl: дёшево на базовые товары + собственные бренды (Milbona, Freeway) часто лучше собственных марок конкурентов',
          '🟦 Auchan: средние цены, но хорошие непродовольственные товары',
          '🇪🇸 Mercadona: дёшево (pt.mercadona.es) — 40+ магазинов',
          '💰 Разница на базовой корзине: до 20-25% между дешёвым и дорогим',
          '🍻 Алкоголь: до 40% разница — Lidl дешевле всего'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Практические советы',
      content: [
        { kind: 'checklist', items: [
          '🛒 Покупать товары собственных марок Lidl/Continente — качество высокое, цена на 30% ниже брендов',
          '🐟 Рыба и мясо «по акции» в Continente: маркировка жёлтым ценником — последний день продажи, -30-50%',
          '🥯 Вечерние скидки в пекарнях Pingo Doce/Continente — после 20:00 на хлеб и выпечку -50%',
          '💳 Карта Continente для топлива на АЗС — €10/мес скидка среднестатистической семье',
          '📊 Folhetos.pt — поставить push-уведомления на молоко, мясо, оливковое масло, моющее средство',
          '🌽 Муниципальные рынки (Ribeira Bolhão Porto, Mercado Arroios Lisboa) — свежие овощи/рыба дешевле на 20-40%, чем в супермаркетах'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Карты лояльности (все)', amountEUR: 0 },
    { label: 'Доставка Lidl Outlet', amountEURMin: 3, amountEURMax: 5 },
    { label: 'Экономия от Cartão Continente (семья)', amountEURMin: 200, amountEURMax: 800, note: '€/год' }
  ],
  sources: [
    { title: 'Lidl Outlet', url: 'https://www.lidl.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Continente — Cartão', url: 'https://www.continente.pt/cartao-continente/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'folhetos.pt — агрегатор акций', url: 'https://www.folhetos.pt/', kind: 'secondary', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DECO PROteste — сравнение супермаркетов', url: 'https://www.deco.proteste.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 180
}