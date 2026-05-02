export default {
  editorialVoice: 'hackportugal',
  id: 'ethnic-restaurants-groceries',
  categoryId: 'food_leisure',
  title: 'Этническая еда — где купить русские, грузинские, бразильские продукты',
  tldr: 'В Лиссабоне и Порту работают магазины с продуктами СНГ (Славянка, Bazar Russo, Euromercado), грузинские рестораны (Karater Lisboa, Batumi, Adjara), бразильские супермаркеты (Brasa, Brasileirinho). Доставка «русских» продуктов из Испании — Tiendas de Rusia (Мадрид), 2-3 дня. В Continente / Pingo Doce есть международный отдел с базовым выбором: гречка, селёдка, рыбные консервы. Грузинские вина — Gartinha, Lidl раз в год проводит акцию.',
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
              '**Славянка** (Av. Almirante Reis, Arroios) — крупнейший магазин. Селёдка, гречка, творог, сметана, колбасы, конфеты, водка Stolichnaya',
              '**Bazar Russo** (Rua Gonçalo Mendes da Maia, Picoas) — меньше, но ближе к центру',
              '**Euromercado** (Amadora) — крупный магазин с большим ассортиментом, цены ниже',
              '**Минимальный ассортимент**: в Continente (Arroios, Cascais), Pingo Doce (Saldanha) — международный отдел',
              'Типичные цены: гречка 4-6 €/кг, селёдка 8-10 €/кг, чёрная икра (имитация) 5-15 €/банка, конфеты 15-25 €/кг'
            ]}
          ]},
          { id: 'r2', title: 'Порту', content: [
            { kind: 'checklist', items: [
              '**Loja Lusitana-Russa** (район Bonfim)',
              '**Shop Slavia** (Areosa) — меньше, но достаточно',
              'В Braga, Coimbra — ограниченный выбор, возят из Лиссабона/Порту'
            ]}
          ]},
          { id: 'r3', title: 'Алгарве', content: [
            { kind: 'paragraph', text: 'Quartas de Avila (Lagoa), Lidl/Continente Albufeira имеют международный отдел. Полноценного русского магазина нет — многие экспаты заказывают онлайн из Лиссабона с доставкой CTT.' }
          ]},
          { id: 'r4', title: 'Онлайн и доставка', content: [
            { kind: 'checklist', items: [
              '**Tiendas de Rusia** (Мадрид, Испания) — tiendasdeRusia.es, доставка в PT 2-3 дня, от 30 € бесплатно',
              '**RusKiosk** (Lisboa) — онлайн-заказы с доставкой по PT',
              '**Amazon PT/ES** — некоторые бренды (шпроты, варенье)',
              '**Glovo** — у Славянки есть доставка в радиусе 5-10 км'
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
              '**Karater** (Príncipe Real) — самый известный, хачапури, хинкали, пхали, вино квеври, 20-35 €/человека',
              '**Suliko** (Intendente) — демократичный формат, большие порции, 15-25 €',
              '**Sakartvelo** (Saldanha) — новый, полное меню, 18-30 €',
              '**Batumi** (Anjos) — грузинско-кавказский фьюжн',
              '**Tbilisi Cafe** (Cais do Sodré) — кафе-бистро, 10-15 €'
            ]}
          ]},
          { id: 'g2', title: 'Порту', content: [
            { kind: 'checklist', items: [
              '**Adjara** (Ribeira) — разнообразные хачапури, 15-25 €',
              '**Tamar Gurmani** (Boavista) — домашний уют'
            ]}
          ]},
          { id: 'g3', title: 'Грузинские продукты', content: [
            { kind: 'checklist', items: [
              'Специи (хмели-сунели, уцхо-сунели): в Славянке, восточных магазинах Martim Moniz',
              'Томатное пюре, аджика: там же',
              '**Грузинские вина**: Gartinha (распространение в магазинах), ежегодная промоакция Lidl Plus с Kindzmarauli, Saperavi',
              'Tkemali (слива), Adjika — в онлайн-магазинах + гурме-отдел Continente',
              'Grushal хачапури-тесто: готовое не продаётся, надо делать с нуля'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'brazilian',
      title: '🇧🇷 Бразильские продукты — самое широкое предложение',
      content: [
        { kind: 'paragraph', text: 'Бразильская диаспора >500 тыс — продукты и рестораны есть везде.' },
        { kind: 'checklist', items: [
          '**Brasa** — сеть бразильских супермаркетов, Лиссабон/Порту/Алгарве',
          '**Brasileirinho** (Almada, Porto Barredo) — полная линейка бразильских товаров',
          '**Big Supermercado Brasileiro** (Albufeira, Algarve)',
          '**В Continente / Pingo Doce** — большой **уголок Brasileirinho**: farofa, tapioca, feijão preto, pão de queijo mix, guaraná Antarctica, каху каху, мандиока',
          '**Мясо**: picanha, fraldinha во всех мясных секциях',
          '**Рестораны**: Copacabana (Saldanha), Rodízio do Brasil (много локаций) — безлимитный churrasco 20-30 €',
          '**Лавки açaí**: Guavaberry, Berri — популярность растёт'
        ]}
      ]
    },
    {
      id: 'other',
      title: '🌏 Другие этнические',
      content: [
        { kind: 'checklist', items: [
          '🇺🇦 **Украинские**: во многих русских магазинах (борщевой набор, сыр «Королівський»). Отдельный магазин «Україна» в Almada',
          '🇮🇳 **Индийские**: Martim Moniz / Intendente — ~10 магазинов (masala, dal, basmati, paneer). Рестораны везде',
          '🇨🇳 **Китайские**: Martim Moniz / Chelas — супермаркеты China-Plus, специи, соусы, лапша',
          '🇲🇽 **Мексиканские**: гурме-отдел Continente + Amazon; без тортильи можно обойтись',
          '🇮🇹 **Итальянские**: гурме-отделы Continente + специализированные магазины (Flavio в Chiado)',
          '🇵🇰 **Пакистанские / бангладешские**: Martim Moniz, халяльное мясо',
          '🇪🇹 **Африканские** (кабо-вердианские, ангольские): Mercado da Galiza, Bairro Alto',
          '🇯🇵 **Японские**: Tsukiji (Liberdade), ShigShu (Saldanha), Mitsuba Mini (Estrela)',
          '🇰🇷 **Корейские**: Muru (Bairro Alto), Korean Grocery (Saldanha) — кимчи, соджу, рамен'
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Советы',
      content: [
        { kind: 'checklist', items: [
          '📅 **Фестивали**: Festa do Brasil (июль), Festival Grátis Tbilisi (варьирует), Слава в марте с украинскими продуктами',
          '👨‍👩‍👧 **Martim Moniz** — мультиэтнический район Лиссабона — продукты всех континентов, лучшие цены',
          '💰 **Цены**: этнические продукты ~30-70% дороже, чем в стране происхождения (расходы на импорт)',
          '🚚 **Большие заказы** из Испании (Madrid) — часто привозят автобусом/через совместные поездки на машине, экономия 20-30%',
          '📱 **Группы в Facebook**: «Русские продукты в Португалии», «Georgian Community Portugal» — продажа/обмен',
          '🍷 **Грузинское вино в Lidl** — Kindzmarauli и Saperavi обычно в середине августа, следите за folheto'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Типичный поход в супермаркет', amountEURMin: 30, amountEURMax: 80 },
    { label: 'Грузинский ресторан (2 человека)', amountEURMin: 35, amountEURMax: 70 },
    { label: 'Доставка Tiendas de Rusia из ES', amountEUR: 0, note: 'бесплатно от 30 €' }
  ],
  sources: [
    { title: 'Visit Lisboa — Restaurantes étnicos', url: 'https://www.visitlisboa.com/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Tiendas de Rusia (ES доставка в PT)', url: 'https://www.tiendasderusia.es/', kind: 'company', language: 'ru', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}