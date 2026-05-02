export default {
  editorialVoice: 'hackportugal',
  id: 'azores-islands',
  categoryId: 'travel_portugal',
  title: 'Азорские острова — 9 островов в Атлантике',
  tldr: 'Азорские острова — вулканический архипелаг в 1500 км от континентальной Португалии, 9 островов. Главный аэропорт — Ponta Delgada на São Miguel. Зелёные кратеры, киты, горячие источники, уникальная природа. Планировать минимум 7-10 дней для 2-3 островов. Резиденты Португалии получают субсидию на перелёты.',
  tags: ['azores', 'острова', 'природа', 'киты'],
  estimatedReadMinutes: 9,
  steps: [
    {
      id: 'overview',
      title: 'Об архипелаге',
      content: [
        { kind: 'paragraph', text: 'Азорские острова — автономный регион Португалии. 9 островов вулканического происхождения, разделены на 3 группы: восточная (São Miguel, Santa Maria), центральная (Terceira, Graciosa, São Jorge, Pico, Faial), западная (Flores, Corvo). Общая площадь 2333 км².' },
        { kind: 'paragraph', text: 'Климат мягкий субтропический (+14-24°C круглый год), но переменчивый: «может быть 4 сезона в один день». Много зелени, озёра, водопады.' }
      ]
    },
    {
      id: 'sao-miguel',
      title: 'São Miguel — «Зелёный остров»',
      content: [
        { kind: 'paragraph', text: 'Крупнейший остров (760 км²), главный аэропорт. Здесь живёт половина населения архипелага. Рекомендуется минимум 4-5 дней.' },
        { kind: 'checklist', items: [
          '🌋 Lagoa das Sete Cidades — кратер с синим и зелёным озёрами. Miradouro da Vista do Rei',
          '♨️ Furnas — долина с горячими источниками. Cozido das Furnas — мясо готовят в вулкане 6 часов',
          '💧 Caldeira Velha — термальные бассейны в тропическом лесу',
          '🌋 Lagoa do Fogo — кратерное озеро на 575 м. Пешие тропы',
          '🐳 Наблюдение за китами — апрель-октябрь (кашалоты, синий кит, дельфины). Тур 50-80 €',
          '🌊 Praia Santa Bárbara — чёрный песок, место для серфинга',
          '🍍 Plantação de Ananases — плантации ананасов в теплицах, традиция XIX в.',
          '🎨 Ponta Delgada — столица, Portas da Cidade, марина',
          '🌿 Parque Terra Nostra — ботанический сад с горячим бассейном'
        ]}
      ]
    },
    {
      id: 'pico',
      title: 'Pico — остров горы и вина',
      content: [
        { kind: 'checklist', items: [
          '⛰️ Montanha do Pico — высочайшая гора Португалии (2351 м). Восхождение 5-8ч с сертифицированным гидом',
          '🍷 Vinhas da Criação Velha (UNESCO) — виноградники на лавовых породах в каменных загонах currais',
          '🐳 Lajes do Pico — бывший китобойный порт, теперь центр наблюдения за китами',
          '🌊 Piscinas naturais — природные бассейны в лаве',
          '🏛️ Museu do Vinho, Museu dos Baleeiros — музеи вина и китобойства'
        ]}
      ]
    },
    {
      id: 'other-islands',
      title: 'Другие острова',
      content: [
        { kind: 'substeps', items: [
          { id: 'o1', title: 'Terceira (UNESCO)', content: [
            { kind: 'paragraph', text: 'Исторический остров: Angra do Heroísmo — город UNESCO XV в. Fortaleza de São João Baptista, бычьи бега (touradas à corda).' }
          ]},
          { id: 'o2', title: 'Faial — Ilha Azul', content: [
            { kind: 'paragraph', text: '«Голубой остров» из-за гортензий. Capelinhos — вулкан 1957-58 гг., лунный пейзаж. Порт Horta — остановка яхтсменов.' }
          ]},
          { id: 'o3', title: 'São Jorge', content: [
            { kind: 'paragraph', text: 'Вытянутый остров со скалами (fajãs — плато у моря). Сыр São Jorge DOP, виноград Verdelho, гастрономические фестивали.' }
          ]},
          { id: 'o4', title: 'Flores', content: [
            { kind: 'paragraph', text: 'Самый западный, 50+ водопадов, нетронутая природа, гортензии.' }
          ]},
          { id: 'o5', title: 'Santa Maria', content: [
            { kind: 'paragraph', text: 'Самый старый остров (8.2 млн лет), красный песок — редкость на Азорах. Фестиваль Santa Maria каждые 5 лет.' }
          ]},
          { id: 'o6', title: 'Graciosa', content: [
            { kind: 'paragraph', text: 'Биосферный резерват UNESCO. Главная особенность — самый сухой остров. Furna do Enxofre — пещера с сернистым озером.' }
          ]},
          { id: 'o7', title: 'Corvo', content: [
            { kind: 'paragraph', text: 'Наименьший остров (17 км²), 400 жителей. Caldeirão — гигантский кратер.' }
          ]}
        ]}
      ]
    },
    {
      id: 'getting-there',
      title: 'Как добраться',
      content: [
        { kind: 'checklist', items: [
          '✈️ TAP Lisboa → Ponta Delgada: 2ч 30мин, от 60 € при раннем бронировании',
          '✈️ SATA / Azores Airlines — местный перевозчик, много рейсов',
          '✈️ Прямые рейсы из Европы: летом Лондон, Мюнхен, Амстердам, Копенгаген',
          '✈️ Из США: Бостон, Нью-Йорк (сезон)',
          '🏷️ Резиденты Португалии: субсидированные тарифы через «tarifa residente»',
          '⛴️ Межостровные паромы: Atlânticoline в сезон (апр-окт)',
          '✈️ SATA: межостровные рейсы 30-80 €, 15-40 мин между островами'
        ]}
      ]
    },
    {
      id: 'activities',
      title: 'Что делать',
      content: [
        { kind: 'checklist', items: [
          '🐳 Наблюдение за китами — апрель-октябрь, кашалоты и дельфины гарантированно, синий кит апрель-июнь',
          '🥾 Треккинг — 50+ маршрутов PR (pequenas rotas), бесплатно',
          '🏄 Серфинг — São Miguel, Santa Maria',
          '🤿 Дайвинг — Faial, Pico, Santa Maria',
          '🎣 Глубоководная рыбалка — тунец, марлин',
          '♨️ Горячие источники и бассейны',
          '🚣 Каякинг в кратерных озёрах',
          '🌿 Геотуризм — UNESCO Geopark на Азорских островах',
          '🍷 Винные туры — Pico, Graciosa'
        ]}
      ]
    },
    {
      id: 'food',
      title: 'Местная кухня',
      content: [
        { kind: 'checklist', items: [
          '🍲 Cozido das Furnas — говядина + свинина + овощи, готовится в вулканической земле 6 часов',
          '🐟 Lapas grelhadas — блюдца-моллюски на гриле с чесноком',
          '🐙 Polvo guisado — осьминог в красном вине',
          '🐟 Atum — свежий тунец (Pico, Faial)',
          '🧀 Queijo São Jorge DOP — местный сыр',
          '🍍 Ananás — ананасы São Miguel',
          '🌶️ Massa de pimentão — перечная паста, специалитет',
          '🍮 Queijadas da Graciosa — сладкий творожный пирожок'
        ]}
      ]
    },
    {
      id: 'planning',
      title: 'Планирование поездки',
      content: [
        { kind: 'checklist', items: [
          '📅 Лучшее время: апрель-октябрь (тёплая погода + наблюдение за китами)',
          '🌧️ Октябрь-март — дождливо, но дешевле, тише, цветут гортензии',
          '📆 7 дней — 2 острова, 10-14 дней — 3-4 острова',
          '🚗 Аренда автомобиля обязательна на каждом острове',
          '🏨 Booking / Airbnb работают, плюс местные turismo rural (эко-дома)',
          '💰 Бюджет на день на человека: 70-120 € (эконом), 150-250 € (средний)',
          '🎒 Берите: тёплую куртку, дождевик, удобную обувь, купальник или плавки',
          '📱 Местная связь MEO/Vodafone 4G работает на всех обитаемых островах'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Visit Azores — официальный туризм', url: 'https://www.visitazores.com/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Governo Regional dos Açores', url: 'https://www.azores.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Atlânticoline — паромы', url: 'https://www.atlanticoline.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Parques Naturais dos Açores', url: 'https://parquesnaturais.azores.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}