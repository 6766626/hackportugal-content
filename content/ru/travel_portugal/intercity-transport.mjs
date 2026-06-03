export default {
  editorialVoice: 'hackportugal',
  id: 'intercity-transport',
  categoryId: 'travel_portugal',
  title: 'Междугородний транспорт по Португалии — поезд, автобус, самолёт',
  tldr: 'Три канала: поезда CP (комфорт + сеть Лиссабон–Порту–Брага + Алентежу), автобусы Rede Expressos (дешёвая национальная сеть) и FlixBus (международные).\n\nОстрова — самолёты TAP, SATA, Ryanair и паромы Atlanticoline. Алгарве — автобусы EVA. Агрегатор Omio объединяет всё. При бронировании за 2–4 недели цены падают на 30–50 %.',
  tags: ['транспорт', 'поезд', 'автобус', 'самолёт', 'cp', 'rede expressos'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'train-cp',
      title: 'CP — Comboios de Portugal',
      content: [
        { kind: 'paragraph', text: 'Национальная железная дорога. Покрывает маршруты Лиссабон — Порту — Брага, Лиссабон — Алентежу — Алгарве, Коимбра, горные маршруты Douro. Не покрывает острова.' },
        { kind: 'substeps', items: [
          { id: 'cp1', title: 'Типы поездов', content: [
            { kind: 'checklist', items: [
              'Alfa Pendular — скоростной (220 км/ч), Лиссабон–Порту 2:40, комфорт «Conforto» / «Turístico»',
              'Intercidades — быстрый, 3 часа Лиссабон–Порту, дешевле',
              'Regional — медленный, множество остановок',
              'Urbano — пригородные электрички (Лиссабон, Порту)',
              'Comboios Históricos — Douro (сезон)'
            ]}
          ]},
          { id: 'cp2', title: 'Цены (2026)', content: [
            { kind: 'checklist', items: [
              'Лиссабон–Порту Alfa: 30–45 € (заранее) / 50–70 € (в день поездки)',
              'Лиссабон–Фару: 20–30 €',
              'Лиссабон–Коимбра: 15–25 €',
              'Порту–Брага: 5–8 €',
              'Скидки: 50% детям 4–12 лет, 25-50% студентам, 50% пенсионерам 65+',
              'Interrail Pass: доступен резидентам Португалии'
            ]}
          ]},
          { id: 'cp3', title: 'Покупка', content: [
            { kind: 'checklist', items: [
              'Сайт cp.pt — мобильная версия на английском',
              'Приложение «CP - Comboios de Portugal»',
              'Касса на вокзале',
              'Терминалы самообслуживания',
              'Заранее за 10–30 дней = скидка',
              'Билет: электронный билет с QR-кодом'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'bus-intercity',
      title: 'Междугородние автобусы',
      content: [
        { kind: 'substeps', items: [
          { id: 'b1', title: 'Rede Expressos', content: [
            { kind: 'checklist', items: [
              'Национальная сеть, 200+ направлений',
              'Лиссабон–Порту: 22 €, 3:30 часа',
              'Лиссабон–Фару: 20 €, 3 часа',
              'Лиссабон–Брага: 24 €',
              'Wi-Fi, USB-зарядка, комфорт',
              'rede-expressos.pt / приложение',
              'Терминал в Лиссабоне: Sete Rios',
              'Терминал в Порту: Campo 24 de Agosto'
            ]}
          ]},
          { id: 'b2', title: 'FlixBus', content: [
            { kind: 'paragraph', text: 'Международная сеть. По Португалии: Лиссабон–Порту (10–25 €), Лиссабон–Фару (15–35 €). За границу: Португалия–Испания (Мадрид 35 €), Португалия–Франция (Париж 100 €). Плюс: дешёвые цены, недостаток: меньше рейсов, чем у Rede Expressos.' }
          ]},
          { id: 'b3', title: 'Alsa', content: [
            { kind: 'paragraph', text: 'Испанский оператор, маршруты Португалия–Испания. Лиссабон–Мадрид, Порту–Сантьяго. От 25 €.' }
          ]},
          { id: 'b4', title: 'EVA Transportes', content: [
            { kind: 'paragraph', text: 'Алгарве. Фару–Лагуш, Албуфейра и сельские маршруты. 5–15 €.' }
          ]},
          { id: 'b5', title: 'Региональные / местные', content: [
            { kind: 'paragraph', text: 'Rodonorte (север), Rodoviária do Alentejo, Rodoviária do Tejo и др. Для удалённых сёл и деревень — часто единственный транспорт.' }
          ]}
        ]}
      ]
    },
    {
      id: 'domestic-flights',
      title: 'Внутренние перелёты — только на острова',
      content: [
        { kind: 'checklist', items: [
          '✈️ Между Лиссабоном/Порту и материковыми городами рейсы есть лишь изредка (Фару — 1 раз в день)',
          '✈️ Основные пересадки — на Мадейру (Фуншал) и Азоры (Понта-Делгада)',
          '🇵🇹 TAP Portugal — основной перевозчик, хаб в Лиссабоне',
          '🇵🇹 SATA Azores Airlines — специалист по Азорам, межостровные рейсы',
          '💶 Ryanair — Порту/Лиссабон к Мадейре ~40–80 € заранее',
          '🏝️ Мадейра: Лиссабон–Фуншал 1:40, 50–150 €',
          '🏝️ Азоры: Лиссабон–Понта-Делгада 2:15, 80–200 €'
        ]}
      ]
    },
    {
      id: 'ferries',
      title: 'Паромы — острова',
      content: [
        { kind: 'checklist', items: [
          '⛴️ Atlanticoline — межостровные паромы на Азорах. São Miguel ↔ Terceira ↔ Faial и др. От 15 €',
          '⛴️ Porto Santo Line — Madeira ↔ Porto Santo, 2:30 часа, 50–80 €',
          '⛴️ Transtejo / Soflusa — Лиссабон ↔ Almada/Cacilhas/Barreiro (общественный транспорт, 1–2 €)',
          '⛴️ Berlengas — из Peniche, сезонные, 25 €'
        ]}
      ]
    },
    {
      id: 'aggregators',
      title: 'Агрегаторы и планирование',
      content: [
        { kind: 'checklist', items: [
          '🔍 Omio (omio.com) — поиск по поездам + автобусам + самолётам',
          '🔍 Rome2Rio — маршруты с пересадками',
          '🔍 Google Flights — для самолётов',
          '🔍 Skyscanner — бюджетные варианты',
          '📱 Приложения CP + Rede Expressos + FlixBus — прямое бронирование дешевле',
          '📅 За 10–30 дней — лучшие цены',
          '💶 Комбинированный билет: часто дешевле купить отдельно CP + местный автобус'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Лиссабон–Порту Alfa Pendular', amountEURMin: 30, amountEURMax: 70 },
    { label: 'Лиссабон–Порту Rede Expressos', amountEUR: 22 },
    { label: 'Лиссабон–Фару (поезд)', amountEURMin: 20, amountEURMax: 30 },
    { label: 'Лиссабон–Фуншал (самолёт)', amountEURMin: 50, amountEURMax: 150 },
    { label: 'Лиссабон–Понта-Делгада (самолёт)', amountEURMin: 80, amountEURMax: 200 }
  ],
  sources: [
    { title: 'CP — Comboios de Portugal', url: 'https://www.cp.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Rede Expressos', url: 'https://rede-expressos.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Infraestruturas de Portugal', url: 'https://www.infraestruturasdeportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'TAP Portugal', url: 'https://www.flytap.com/', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Atlanticoline — паромы на Азорах', url: 'https://www.atlanticoline.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AMT — Autoridade da Mobilidade e dos Transportes', url: 'https://www.amt-autoridade.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}