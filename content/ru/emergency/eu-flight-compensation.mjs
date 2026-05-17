export default {
  editorialVoice: 'hackportugal',
  id: 'eu-flight-compensation',
  categoryId: 'emergency_rights',
  title: 'Компенсации за отменённый или задержанный рейс (EU 261/2004)',
  tldr: 'Регламент EU 261/2004 даёт фиксированные компенсации € 250 / € 400 / € 600 за отменённые рейсы или задержку ≥ 3 часа, а также право на обслуживание (еда, отель) для рейсов из PT или в PT на EU-авиакомпаниях. Подавать заявку в авиакомпанию в течение 30 дней. Отказ / молчание — жалоба в ANAC (Autoridade Nacional da Aviação Civil). Можно также через сервисы типа AirHelp / Flightright за 25 % комиссии.',
  tags: ['рейс', 'компенсация', 'EU 261', 'ANAC', 'авиакомпания'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'when-applies',
      title: 'Когда применимо',
      content: [
        { kind: 'checklist', items: [
          '✈️ Рейс из аэропорта в ЕС (любой перевозчик) ИЛИ в аэропорт ЕС на EU-перевозчике',
          '🕐 Задержка ≥ 3 часа по прибытии',
          '❌ Отмена < 14 дней до вылета',
          '🪑 Отказ в посадке из-за перепродажи билетов',
          '✋ Ответственность авиакомпании (не чрезвычайное обстоятельство — молния, забастовка не её сотрудников)'
        ]},
        { kind: 'warning', text: 'Форс-мажор (гроза, землетрясение, политические забастовки) — компенсация не положена, но право на обслуживание всё равно есть.' }
      ]
    },
    {
      id: 'amounts',
      title: 'Суммы компенсации',
      content: [
        { kind: 'checklist', items: [
          '🌍 До 1500 км: € 250',
          '🌎 1500–3500 км или ЕС > 1500 км: € 400',
          '🌏 > 3500 км: € 600',
          '🎟️ Это фиксированные суммы, НЕ зависят от цены билета',
          '👨‍👩‍👧 На каждого пассажира отдельно',
          '🔁 Плюс: возврат билета ИЛИ перебронирование + право на обслуживание'
        ]}
      ]
    },
    {
      id: 'care-rights',
      title: 'Право на обслуживание — пока ждёте',
      content: [
        { kind: 'paragraph', text: 'При задержках ≥ 2 часа авиакомпания ОБЯЗАНА обеспечить:' },
        { kind: 'checklist', items: [
          '🍔 Питание и напитки пропорционально ожиданию',
          '📞 2 телефонных звонка / email',
          '🏨 Отель — если задержка на ночь',
          '🚕 Трансфер до отеля',
          '🔄 Если отказ — сохраните чеки, потом возмещение'
        ]}
      ]
    },
    {
      id: 'how-to-claim',
      title: 'Как подать заявку',
      content: [
        { kind: 'substeps', items: [
          { id: 'h1', title: '1. Собрать доказательства', content: [
            { kind: 'checklist', items: [
              'Посадочный талон',
              'Подтверждение бронирования',
              'Фото табло с задержкой / скриншот email',
              'Чеки на еду / трансфер / отель (для компенсации расходов на обслуживание)',
              'Свидетели (имя, контакты пассажиров рядом)'
            ]}
          ]},
          { id: 'h2', title: '2. Форма на сайте авиакомпании', content: [
            { kind: 'checklist', items: [
              'TAP: flytap.com/claims',
              'Ryanair: ryanair.com/help',
              'easyJet: easyjet.com',
              'Wizz: wizzair.com',
              'Срок ответа: 2–6 недель',
              'Часто отказывают — переходите к шагу 3'
            ]}
          ]},
          { id: 'h3', title: '3. Жалоба в регулятор', content: [
            { kind: 'checklist', items: [
              'ANAC (PT) — anac.pt → Consumidor → Reclamação',
              'Арбитраж CIAC — для требований < € 5 000',
              'Livro de Reclamações (книга жалоб) — бумажный вариант в аэропорту',
              'Срок рассмотрения: 3–6 мес',
              'ANAC может оштрафовать авиакомпанию'
            ]}
          ]},
          { id: 'h4', title: '4. Альтернатива: сервисы', content: [
            { kind: 'paragraph', text: 'AirHelp, Flightright, ClaimCompass — берут 25–35 % комиссии, но делают всё за вас. Оплата только при выигрыше. Хорошо для сложных случаев или если ваше время дороже.' }
          ]},
          { id: 'h5', title: '5. Крайняя мера: суд', content: [
            { kind: 'paragraph', text: 'Julgado de Paz (суд малых исков) для требований < € 15 000. Пошлина € 70. Авиакомпания часто соглашается до суда.' }
          ]}
        ]}
      ]
    },
    {
      id: 'examples',
      title: 'Примеры',
      content: [
        { kind: 'substeps', items: [
          { id: 'e1', title: 'Lisboa → Лондон, задержка 4 часа', content: [
            { kind: 'paragraph', text: 'Расстояние ~1550 км → компенсация € 400 на пассажира. Если причина техническая — да. Если гроза — нет.' }
          ]},
          { id: 'e2', title: 'Lisboa → Москва (отменено)', content: [
            { kind: 'paragraph', text: 'Нет прямых с 2022. Рейс Lisboa → Стамбул (3000 км) → компенсация € 400. За Стамбул → Москва — не EU 261, не компенсируется.' }
          ]},
          { id: 'e3', title: 'Ryanair отменил Porto → Мадрид', content: [
            { kind: 'paragraph', text: '< 1500 км → € 250. Плюс выбор: возврат билета ИЛИ перебронирование на следующий рейс.' }
          ]}
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Компенсация < 1500 км', amountEUR: 250 },
    { label: 'Компенсация 1500–3500 км', amountEUR: 400 },
    { label: 'Компенсация > 3500 км', amountEUR: 600 },
    { label: 'Сервисы AirHelp (комиссия)', amountEUR: 0, note: '25–35 % от суммы' }
  ],
  sources: [
    { title: 'Regulation (EC) No 261/2004', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32004R0261', kind: 'law', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'ANAC — Direitos dos passageiros', url: 'https://www.anac.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Livro de Reclamações', url: 'https://www.livroreclamacoes.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'EU — Passenger rights', url: 'https://europa.eu/youreurope/citizens/travel/passenger-rights/air/index_en.htm', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}