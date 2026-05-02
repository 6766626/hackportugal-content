export default {
  editorialVoice: 'hackportugal',
  id: 'cp-trains',
  categoryId: 'travel_portugal',
  title: 'Поезда CP (Comboios de Portugal) — как пользоваться',
  tldr: 'CP — государственный железнодорожный оператор. Типы поездов: Alfa Pendular (быстрые Лиссабон — Порту за 2,5 ч), Intercidades (средние), Regional (медленные), Urbanos (пригородные). Карты скидок: Cartão Jovem, Cartão Amigo. Лиссабон — Порту на Alfa Pendular: около € 25–40, Intercidades: около € 20–30. Бронировать на cp.pt.',
  tags: ['поезд', 'cp', 'alfa pendular', 'intercidades'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'types',
      title: 'Типы поездов',
      content: [
        { kind: 'substeps', items: [
          { id: 't1', title: 'Alfa Pendular (AP)', content: [
            { kind: 'paragraph', text: 'Флагман CP. Быстрые поезда с наклоном кузова. Лиссабон — Порту за 2,5 ч. Wi-Fi, розетки, вагон-кафе. 2 класса: Conforto (экономкласс), Primeira (первый класс). Маршруты: Лиссабон — Коимбра — Порту — Брага, Лиссабон — Алгарве.' }
          ]},
          { id: 't2', title: 'Intercidades (IC)', content: [
            { kind: 'paragraph', text: 'Междугородние поезда, на 30–50 мин медленнее AP и на 20–30% дешевле. Те же основные маршруты плюс ответвления. Комфортные.' }
          ]},
          { id: 't3', title: 'Internacional', content: [
            { kind: 'paragraph', text: 'Ночной Sud Expresso Лиссабон — Мадрид больше не ходит с 2020 — его заменил автобус. Есть региональный поезд Порту — Виго через границу.' }
          ]},
          { id: 't4', title: 'Regional', content: [
            { kind: 'paragraph', text: 'Медленные поезда с частыми остановками. Для небольших городов. Дешёвые.' }
          ]},
          { id: 't5', title: 'Urbanos', content: [
            { kind: 'paragraph', text: 'Пригородные поезда Лиссабона (Cascais, Sintra, Tomar, Setúbal) и Порту (Braga, Aveiro, Guimarães). Оплата Navegante/Andante или обычный билет.' }
          ]}
        ]}
      ]
    },
    {
      id: 'key-routes',
      title: 'Главные маршруты (цены 2026)',
      content: [
        { kind: 'checklist', items: [
          'Лиссабон ↔ Порту AP: 2 ч 45 мин, € 25–40 (скидки до -65% при покупке за 5 дней)',
          'Лиссабон ↔ Порту IC: 3 ч, € 20–32',
          'Лиссабон ↔ Коимбра AP: 1 ч 40 мин, € 18–25',
          'Лиссабон ↔ Фару (Алентежу — Алгарве): 3 ч AP / 3 ч 40 мин IC, € 20–35',
          'Порту ↔ Брага: 1 ч на Urbano, € 4',
          'Порту ↔ Aveiro: 35 мин, € 4',
          'Лиссабон ↔ Cascais Urbano: 40 мин, € 1,95 (Navegante)',
          'Лиссабон ↔ Sintra Urbano: 40 мин, € 2,45'
        ]}
      ]
    },
    {
      id: 'booking',
      title: 'Как бронировать',
      content: [
        { kind: 'substeps', items: [
          { id: 'b1', title: '1. Сайт CP или приложение', content: [
            { kind: 'paragraph', text: 'cp.pt или приложение CP. Регистрация, NIF (желательно), платёжная карта.' },
            { kind: 'link', text: 'cp.pt', url: 'https://www.cp.pt/' }
          ]},
          { id: 'b2', title: '2. Скидки — планируйте заранее', content: [
            { kind: 'checklist', items: [
              'За 5 дней: -65% на AP (Лиссабон — Порту с € 40 до € 14)',
              'За 2 дня: -40%',
              'Cartão Jovem (до 30 лет): -25%',
              'Cartão Amigo (годовая карта за € 25): -20% на все поездки',
              'Семейная скидка: 4+ = -50% для детей 4–12 лет',
              'Студенты с удостоверением — дополнительные скидки'
            ]}
          ]},
          { id: 'b3', title: '3. Билет на телефоне', content: [
            { kind: 'paragraph', text: 'PDF или в приложении. Контролёр сканирует QR-код. Если это Alfa Pendular, место забронировано.' }
          ]},
          { id: 'b4', title: '4. Бронирование Urbanos', content: [
            { kind: 'paragraph', text: 'Бронирование не требуется. Можно купить билет на станции, через приложение или оплатить картой Navegante (Лиссабон) / Andante (Порту).' }
          ]}
        ]}
      ]
    },
    {
      id: 'stations',
      title: 'Главные вокзалы',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: 'Лиссабон', content: [
            { kind: 'checklist', items: [
              'Santa Apolónia — традиционный вокзал, для AP/IC в Порту и на север',
              'Oriente — современный вокзал, Parque das Nações, все AP/IC + Urbanos',
              'Gare do Oriente — то же, что Oriente; красная линия метро',
              'Rossio — Urbanos до Sintra',
              'Cais do Sodré — Urbanos до Cascais',
              'Entrecampos — междугородние поезда на юг'
            ]}
          ]},
          { id: 's2', title: 'Порту', content: [
            { kind: 'checklist', items: [
              'Campanhã — основной вокзал, AP/IC',
              'São Bento — туристический вокзал (изразцы азулежу), Urbanos',
              'Trindade — метро и Urbanos'
            ]}
          ]}
        ]}
      ]
    }
  ],
  sources: [
    { title: 'CP — Comboios de Portugal', url: 'https://www.cp.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Infraestruturas de Portugal', url: 'https://www.infraestruturasdeportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 180
}