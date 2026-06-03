export default {
  editorialVoice: 'hackportugal',
  id: 'ethnic-restaurants-groceries',
  categoryId: 'food_leisure',
  title: 'Этническая еда — где купить русские, грузинские, бразильские продукты',
  tldr: 'В Лиссабоне и Порту работают магазины с продуктами СНГ (Славянка, Bazar Russo, Euromercado), грузинские рестораны, бразильские супермаркеты (Brasa, Brasileirinho).\n\nДоставка из Испании — Tiendas de Rusia (Мадрид): сроки и стоимость зависят от адреса/веса/акций, проверяйте при оформлении заказа. В некоторых крупных Continente/Pingo Doce иногда встречаются отдельные восточноевропейские товары, но ассортимент нестабильный. Грузинское вино иногда встречается в специализированных винных магазинах и во временных акциях Lidl/других сетей; проверяйте текущий folheto.',
  tags: ['этническая еда', 'русские продукты', 'грузинская', 'бразильская'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'russian-shops',
      title: '🇷🇺 Русские / украинские / белорусские продукты',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: 'Лиссабон', content: [
            { kind: 'checklist', items: [
              'Славянка (Av. Almirante Reis, Arroios) — крупнейший магазин. Селёдка, гречка, творог, сметана, колбасы, конфеты, водка Stolichnaya',
              'Bazar Russo (Rua Gonçalo Mendes da Maia, Picoas) — меньше, но ближе к центру',
              'Euromercado (Amadora) — крупный магазин с большим ассортиментом, цены ниже',
              'Минимальный ассортимент: в некоторых крупных Continente/Pingo Doce иногда встречаются отдельные восточноевропейские товары, но ассортимент нестабильный; за гречкой/селёдкой надёжнее идти в специализированные магазины',
              'Типичные цены: гречка 4-6 €/кг, селёдка 8-10 €/кг, чёрная икра (имитация) 5-15 €/банка, конфеты 15-25 €/кг'
            ]}
          ]},
          { id: 'r2', title: 'Порту', content: [
            { kind: 'checklist', items: [
              'Loja Lusitana-Russa (район Bonfim)',
              'Shop Slavia (Areosa) — меньше, но достаточно',
              'В Braga, Coimbra — ограниченный выбор, возят из Лиссабона/Порту'
            ]}
          ]},
          { id: 'r3', title: 'Алгарве', content: [
            { kind: 'paragraph', text: 'В Algarve полноценного крупного русского магазина нет — многие экспаты заказывают онлайн из Лиссабона с доставкой CTT. Уточняйте текущие точки в местных Facebook/Telegram-группах перед поездкой.' }
          ]},
          { id: 'r4', title: 'Онлайн и доставка', content: [
            { kind: 'checklist', items: [
              'Tiendas de Rusia (Испания) — доставляют в Португалию; сроки и стоимость зависят от адреса/веса/акций, проверяйте при оформлении заказа',
              'RusKiosk (Lisboa) — онлайн-заказы с доставкой по PT',
              'Amazon PT/ES — некоторые бренды (шпроты, варенье)',
              'Glovo — у Славянки есть доставка в радиусе 5-10 км'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'georgian',
      title: '🇬🇪 Грузинская кухня',
      content: [
        { kind: 'paragraph', text: 'Грузинская диаспора в Португалии относительно небольшая, но активная — открыты 5-7 ресторанов в Лиссабоне и Порту.' },
        { kind: 'substeps', items: [
          { id: 'g1', title: 'Рестораны в Лиссабоне', content: [
            { kind: 'checklist', items: [
              'Karater (Príncipe Real) — самый известный, хачапури, хинкали, пхали, вино квеври, 20-35 €/человека',
              'Suliko (Intendente) — демократичный формат, большие порции, 15-25 €',
              'Sakartvelo (Saldanha) — новый, полное меню, 18-30 €',
              'Batumi (Anjos) — грузинско-кавказский фьюжн',
              'Tbilisi Cafe (Cais do Sodré) — кафе-бистро, 10-15 €'
            ]}
          ]},
          { id: 'g2', title: 'Порту', content: [
            { kind: 'checklist', items: [
              'Adjara (Ribeira) — разнообразные хачапури, 15-25 €',
              'Tamar Gurmani (Boavista) — домашний уют'
            ]}
          ]},
          { id: 'g3', title: 'Грузинские продукты', content: [
            { kind: 'checklist', items: [
              'Специи (хмели-сунели, уцхо-сунели): в Славянке, восточных магазинах Martim Moniz',
              'Томатное пюре, аджика: там же',
              'Грузинские вина: иногда встречаются в специализированных винных магазинах и во временных акциях Lidl/других сетей; проверяйте текущий folheto',
              'Tkemali (слива), Adjika — в онлайн-магазинах + гурме-отдел Continente',
              'Готовое тесто/полуфабрикаты для хачапури встречаются редко; чаще готовят с нуля или используют обычное дрожжевое/слоёное тесто из супермаркета'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'brazilian',
      title: '🇧🇷 Бразильские продукты — самое широкое предложение',
      content: [
        { kind: 'paragraph', text: 'Бразильцы — крупнейшая иностранная община в Португалии; точную актуальную численность лучше проверять по AIMA/INE. Продукты и рестораны есть везде.' },
        { kind: 'checklist', items: [
          'Brasa — сеть бразильских супермаркетов, Лиссабон/Порту/Алгарве',
          'Brasileirinho (Almada, Porto Barredo) — полная линейка бразильских товаров',
          'Big Supermercado Brasileiro (Albufeira, Algarve)',
          'В крупных Continente/Pingo Doce часто есть отдельные бразильские товары: farofa, tapioca, feijão preto, guaraná, pão de queijo mix, mandioca, caju; ассортимент зависит от магазина',
          'Мясо: picanha, fraldinha во всех мясных секциях',
          'Рестораны: Copacabana (Saldanha), Rodízio do Brasil (много локаций) — безлимитный churrasco 20-30 €',
          'Лавки açaí: Guavaberry, Berri — популярность растёт'
        ]}
      ]
    },
    {
      id: 'other',
      title: '🌏 Другие этнические',
      content: [
        { kind: 'checklist', items: [
          '🇺🇦 Украинские: во многих русских магазинах (борщевой набор, сыр «Королівський»). Отдельный магазин «Україна» в Almada',
          '🇮🇳 Индийские: Martim Moniz / Intendente — ~10 магазинов (masala, dal, basmati, paneer). Рестораны везде',
          '🇨🇳 Китайские: Martim Moniz / Chelas — супермаркеты China-Plus, специи, соусы, лапша',
          '🇲🇽 Мексиканские: гурме-отдел Continente + Amazon; без тортильи можно обойтись',
          '🇮🇹 Итальянские: гурме-отделы Continente + специализированные магазины (Flavio в Chiado)',
          '🇵🇰 Пакистанские / бангладешские: Martim Moniz, халяльное мясо',
          '🇪🇹 Африканские (кабо-вердианские, ангольские): Mercado da Galiza, Bairro Alto',
          '🇯🇵 Японские: Tsukiji (Liberdade), ShigShu (Saldanha), Mitsuba Mini (Estrela)',
          '🇰🇷 Корейские: Muru (Bairro Alto), Korean Grocery (Saldanha) — кимчи, соджу, рамен'
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Советы',
      content: [
        { kind: 'checklist', items: [
          '📅 Фестивали: следите за афишами Casa da América Latina, муниципалитетов Lisboa/Porto, украинских и грузинских community-групп; даты гастро-фестивалей меняются ежегодно',
          '👨‍👩‍👧 Martim Moniz — мультиэтнический район Лиссабона — продукты всех континентов, лучшие цены',
          '💰 Цены: этнические продукты ~30-70% дороже, чем в стране происхождения (расходы на импорт)',
          '🚚 Большие заказы из Испании (Madrid) — часто привозят автобусом/через совместные поездки на машине, экономия 20-30%',
          '📱 Группы в Facebook: «Русские продукты в Португалии», «Georgian Community Portugal» — продажа/обмен',
          '🍷 Грузинское вино иногда появляется в Lidl/других сетях в рамках временных винных акций; проверяйте folheto и приложение Lidl Plus'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Типичный поход в супермаркет', amountEURMin: 30, amountEURMax: 80 },
    { label: 'Грузинский ресторан (2 человека)', amountEURMin: 35, amountEURMax: 70 },
    { label: 'Доставка Tiendas de Rusia из ES', amountEURMin: 5, amountEURMax: 25, note: 'зависит от веса/адреса; бывают акции с бесплатной доставкой от определённой суммы — проверяйте при заказе' }
  ],
  sources: [
    { title: 'Visit Lisboa — Restaurantes étnicos', url: 'https://www.visitlisboa.com/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Tiendas de Rusia (ES доставка в PT)', url: 'https://www.tiendasderusia.es/', kind: 'company', language: 'ru', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}