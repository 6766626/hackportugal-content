export default {
  editorialVoice: 'hackportugal',
  id: 'hiking-trails',
  categoryId: 'travel_portugal',
  title: 'Хайкинг и экотропы Португалии — от уикенда к многодневному походу',
  tldr: 'В Португалии есть 300+ маркированных троп (PR, GR, levadas). Самые популярные: levadas на Мадейре (350 км), Rota Vicentina в юго-западном Alentejo (450 км), PR-тропы в Serra da Estrela, Gerês, Açores. Короткие однодневные маршруты (3-15 км, PR) доступны в каждом природном парке; многодневные GR-тропы размечены красно-белой маркировкой, ночлег — в albergues и сельских домах. Вход бесплатный, но некоторые парки требуют онлайн-регистрации. Сезон: апрель-октябрь на материке; Мадейра — круглый год.',
  tags: ['хайкинг', 'экотропы', 'тропы', 'levadas'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'types',
      title: '🥾 Типы троп в Португалии',
      content: [
        { kind: 'substeps', items: [
          { id: 't1', title: '🔴⚪ GR (Grande Rota) — многодневные', content: [
            { kind: 'checklist', items: [
              '**Rota Vicentina** (GR 11) — 450 км от Cabo de São Vicente до Santiago do Cacém, юго-западный Alentejo',
              '**Caminho Português de Santiago** (GR 1) — 5 маршрутов из Португалии до Santiago в Испании, 140-620 км',
              '**Rota do Guadiana** — вдоль реки Guadiana, 65 км',
              '**GR 22 — Aldeias Históricas** — 540 км через 12 исторических деревень'
            ]}
          ]},
          { id: 't2', title: '🟡⚪ PR (Pequena Rota) — однодневные', content: [
            { kind: 'checklist', items: [
              'Короткие маршруты 3-15 км, обычно круговые',
              'Маркированы символом «PR» + номер + название муниципалитета',
              '150+ PR-троп зарегистрированы в FCMP (Federação de Campismo e Montanhismo)',
              'Приложение **Trilhos de Portugal** — все PR-тропы с описаниями и GPX',
              'Бесплатные GPX на rededetrilhos.pt'
            ]}
          ]},
          { id: 't3', title: '💧 Levadas (Мадейра) — уникальное', content: [
            { kind: 'checklist', items: [
              'Levadas — ирригационные каналы XVI-XX вв., вдоль них проходят тропы',
              '350 км размеченных троп',
              'От лёгких (ровных) до сложных (туннели, открытые участки)',
              '**Топ-3**: Levada das 25 Fontes (11 км), Levada do Caldeirão Verde (12 км), Levada do Rei (9 км)',
              'Сезон: круглый год',
              'Экипировка: нескользящие ботинки, фонарик (для туннелей), водонепроницаемая одежда'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'top-regions',
      title: '🏔️ Топ регионов для хайкинга',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: 'Serra da Estrela (центр)', content: [
            { kind: 'checklist', items: [
              'Самый высокий массив континентальной Португалии (1 993 м, Torre)',
              'Зимой снег, летом прохладно',
              '**Топ-маршрут**: PR 1 MTG — Vale do Zêzere, 14 км, отличные виды',
              '**Lagoa Comprida** — круговой маршрут 8 км',
              '**Covão d\'Ametade** — отправная точка для многих коротких маршрутов',
              'Где остановиться: Manteigas, Seia, Covilhã'
            ]}
          ]},
          { id: 'r2', title: 'Parque Nacional da Peneda-Gerês (северо-запад)', content: [
            { kind: 'checklist', items: [
              'Единственный национальный парк Португалии (с 1971)',
              'Гранитные горы, водопады, волки, дикие лошади garrano',
              '**Trilho dos Currais** — 8 км через пастбища',
              '**Cascata do Arado** — 3 км к водопаду',
              '**Miradouro da Pedra Bela** — короткий маршрут, но виды впечатляющие',
              'Где остановиться: деревня Gerês, Campo do Gerês (кемпинг)'
            ]}
          ]},
          { id: 'r3', title: 'Algarve — Rota Vicentina', content: [
            { kind: 'checklist', items: [
              '**Trilho dos Pescadores** — прибрежная тропа, 230 км по юго-западному побережью',
              '**Caminho Histórico** — внутренний маршрут, 263 км через деревни',
              'Можно проходить дневными секциями по 10-20 км и ночевать в сельских домах',
              'Красивые бухты, меньше туристов, чем в южном Algarve',
              'Лучший сезон: апрель-июнь, сентябрь-октябрь'
            ]}
          ]},
          { id: 'r4', title: 'Азоры — девять островов разного характера', content: [
            { kind: 'checklist', items: [
              '**São Miguel**: Lagoa do Fogo, Sete Cidades, горячие источники Fumarolas',
              '**Pico**: восхождение на Pico Mountain (2 351 м) — самая высокая точка Португалии. Сложно, с гидом, 7-9 часов',
              '**Flores**: «самый зелёный» — водопады, каньоны',
              '**Faial, Terceira** — вулканические ландшафты',
              'Все тропы с маркировкой, GPX на trails.visitazores.com',
              'Часто бывают ветер и дождь — подготовьтесь'
            ]}
          ]},
          { id: 'r5', title: 'Sintra-Cascais Natural Park (возле Лиссабона)', content: [
            { kind: 'checklist', items: [
              '**Cabo da Roca** — западная точка континентальной Европы, прибрежные тропы',
              '**Serra de Sintra** — лесные тропы через национальный дворец Pena',
              '**Praia do Guincho → Cabo da Roca** — 16 км, красивый прибрежный маршрут',
              'Близко к Lisboa = много туристов',
              'Совет: старт в 7-8 утра, чтобы идти в тишине'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'gear',
      title: '🎒 Экипировка и подготовка',
      content: [
        { kind: 'substeps', items: [
          { id: 'g1', title: 'Базовая (для однодневного PR)', content: [
            { kind: 'checklist', items: [
              'Ботинки или треккинговая обувь (не городские кроссовки)',
              'Рюкзак 15-25 л',
              'Вода: 1.5-2 л на человека',
              'Перекусы, сэндвич',
              'Штормовка (даже в солнечную погоду — условия могут измениться)',
              'SPF 50 + кепка',
              'Телефон с GPX-маршрутом, внешний аккумулятор',
              'Компас или офлайн-карта (если нет связи)'
            ]}
          ]},
          { id: 'g2', title: 'Для многодневных маршрутов', content: [
            { kind: 'checklist', items: [
              'Технический рюкзак 40-50 л',
              'Спальный мешок 0°C',
              'Спальный коврик',
              'Палатка (если бэкпекинг) или бронь albergue заранее',
              'Горелка + газ',
              'Аптечка',
              'Ультралёгкая одежда на смену',
              '*Не* брать газ для горелки в самолёт — купить в стране'
            ]}
          ]},
          { id: 'g3', title: 'Где купить', content: [
            { kind: 'checklist', items: [
              '**Decathlon** (Lisboa, Porto и регионы) — демократичные цены',
              '**Sport Zone** — регулярные распродажи',
              '**The North Face / Patagonia / Columbia** — Freeport outlet, Designer Outlet Algarve со скидками',
              '**Местные магазины экипировки**: Trilhos do Guerreiro, Gerês Natura — специализированные'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'apps',
      title: '📱 Приложения и ресурсы',
      content: [
        { kind: 'checklist', items: [
          '**Trilhos de Portugal** (официальное приложение FCMP) — 150+ PR с GPX',
          '**Wikiloc** — международное приложение, много троп в Португалии',
          '**AllTrails** — англоязычное, удобно для тех, кто говорит по-английски',
          '**ViewRanger / Komoot** — европейские, подробные',
          '**Outdooractive** — GR-маршруты',
          '**trilhos.rededetrilhos.pt** — официальная база',
          '**Mapa Amarelo** — для Cabo Verde + Portugal (популярен на Azores)',
          'GPX + офлайн-карты — обязательно! В парках часто нет связи'
        ]}
      ]
    },
    {
      id: 'safety-wild',
      title: '⚠️ Безопасность в горах / лесах',
      content: [
        { kind: 'checklist', items: [
          '🚨 **Экстренный номер 112**: работает в большинстве парков',
          '🐴 **Дикие животные**: дикие лошади Gerês, дикие кабаны (javali), лисы, в Algarve — генетты. Серьёзной опасности для человека нет',
          '🐍 **Змеи**: vípera seoanei ядовитая — редко встречается, обычно убегает. Проверяйте ботинки утром',
          '🔥 **Пожары**: июль-сентябрь — высокий риск; красный уровень = запрет на все открытые трассы. Проверить на dgeg.gov.pt',
          '🥵 **Жара**: летом старт до 8 утра, финиш до 13. Разница между утром и полуднем — 10°C',
          '🌨️ **Зимой в Serra da Estrela**: снег, лёд; не идти без подготовки',
          '📍 **Офлайн-карты**: загрузить заранее; в горах Португалии часто нет связи',
          '👥 **В одиночку не ходить** на длительные маршруты; сообщить кому-то ваш план',
          '🦵 **Обувь**: 80% проблем на тропе — неправильная обувь; подвернуть лодыжку на каменистой местности легко'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Вход в парки (NP Gerês, Estrela)', amountEUR: 0 },
    { label: 'Некоторые частные тропы / винные хозяйства', amountEURMin: 5, amountEURMax: 20 },
    { label: 'Albergue (ночь)', amountEURMin: 15, amountEURMax: 35 },
    { label: 'Сельский дом (1 ночь)', amountEURMin: 50, amountEURMax: 100 },
    { label: 'Базовая экипировка (если с нуля)', amountEURMin: 200, amountEURMax: 600 }
  ],
  sources: [
    { title: 'Federação Portuguesa de Campismo e Montanhismo', url: 'https://fcmportugal.com/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Rede de Trilhos', url: 'https://rededetrilhos.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ICNF — Parques e Reservas', url: 'https://www.icnf.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Rota Vicentina', url: 'https://rotavicentina.com/', kind: 'company', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Visit Madeira Levadas', url: 'https://www.visitmadeira.com/', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}