export default {
  editorialVoice: 'hackportugal',
  id: 'madeira-island',
  categoryId: 'travel_portugal',
  title: 'Мадейра — для цифровых кочевников',
  tldr: 'Автономный регион, вечная весна +18-24°C круглый год. Фуншал — столица. Digital Nomads Village в Ponta do Sol. Английский повсеместно. SNS работает. ZFM (Zona Franca da Madeira) — особый режим для **корпораций** (IRC 5% вместо 21%, не IRS физлиц!). Для физлиц-резидентов Мадейры IRS по региональной ставке обычно ниже континентальной на 1–2 п.п. Аренда дешевле, чем в Lisboa, но в 2024-2025 выросла из-за цифровых кочевников.',
  tags: ['мадейра', 'фуншал', 'цифровой кочевник', 'остров'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'why',
      title: 'Почему Мадейра',
      content: [
        { kind: 'checklist', items: [
          '🌡️ Климат: +18-24°C круглый год, мягкая зима',
          '🌿 Природа: горы, водопады, субтропические растения, океан',
          '🏝️ Остров — но все удобства + аэропорт с прямыми рейсами',
          '💻 Digital Nomads Village в Ponta do Sol — хаб программы',
          '🇬🇧 Английский понимают везде',
          '💰 Автономный налоговый статус: 10% IRS в некоторых схемах',
          '🚑 SNS полностью работает, есть частные клиники',
          '📚 Международные школы в Фуншале',
          '👨‍👩‍👧 Безопасно, размеренный темп'
        ]}
      ]
    },
    {
      id: 'cons',
      title: 'Минусы',
      content: [
        { kind: 'checklist', items: [
          'Остров: всё импортируется, некоторые продукты дороже',
          'Ветреная погода, туман в горах',
          'Аренда выросла из-за цифровых кочевников — T1 € 800–1500 в Фуншале',
          'Меньше разнообразия — маленький остров, быстро «обходишь»',
          'Сезонный аэропорт — зимой меньше рейсов',
          'Для семей с детьми 15+ — ограниченный выбор школ и развлечений',
          'Сильная облачность иногда неделями на побережье'
        ]}
      ]
    },
    {
      id: 'areas',
      title: 'Где жить на Мадейре',
      content: [
        { kind: 'substeps', items: [
          { id: 'a1', title: 'Фуншал — столица', content: [
            { kind: 'paragraph', text: 'Центр — туристический, магазины, рестораны. São Martinho — спокойнее. Lido — отели + резиденции. T1 € 800–1500.' }
          ]},
          { id: 'a2', title: 'Ponta do Sol', content: [
            { kind: 'paragraph', text: 'Digital Nomads Village. Меньше облачности. Сильное сообщество цифровых кочевников. T1 € 700–1200.' }
          ]},
          { id: 'a3', title: 'Calheta', content: [
            { kind: 'paragraph', text: 'Юго-запад, пляж (искусственный с песком). Тихо, солнечно. T1 € 700–1100.' }
          ]},
          { id: 'a4', title: 'Câmara de Lobos / Estreito', content: [
            { kind: 'paragraph', text: 'Рыбацкая деревня рядом с Фуншалом. Аутентично, дешевле. T1 € 600–900.' }
          ]},
          { id: 'a5', title: 'Santana / северное побережье', content: [
            { kind: 'paragraph', text: 'Традиционные домики, драматичная природа. Удалённо от Фуншала (час на авто). Авто обязательно.' }
          ]}
        ]}
      ]
    },
    {
      id: 'nomad-village',
      title: 'Digital Nomads Madeira',
      content: [
        { kind: 'paragraph', text: 'С 2021 Мадейра принимает программу для цифровых кочевников. Бесплатный коворкинг в Ponta do Sol, Slack-сообщество, мероприятия. Для регистрации — заполнить анкету на digitalnomads.startupmadeira.eu.' },
        { kind: 'link', text: 'digitalnomads.startupmadeira.eu', url: 'https://digitalnomads.startupmadeira.eu/' },
        { kind: 'paragraph', text: 'Не заменяет визу D8 — это программа интеграции, не легализация. Визу D8 получаете отдельно.' }
      ]
    },
    {
      id: 'logistics',
      title: 'Логистика',
      content: [
        { kind: 'checklist', items: [
          '✈️ Аэропорт Фуншала: 1.5ч до Lisboa (€ 50–200), прямые рейсы в Великобританию/Германию/Францию',
          '🚐 Из аэропорта в город: автобус Aerobus € 5 / такси € 25–30',
          '🚗 Авто желательно — рельеф сложный, общественный транспорт слабый',
          '🚌 Horários do Funchal и SAM — автобусы по острову',
          '🏥 Hospital Dr. Nélio Mendonça (SNS), частные: Hospital Particular da Madeira',
          '🏫 International School of Madeira',
          '🌊 Porto Santo — второй остров, 2ч на пароме, песчаные пляжи'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Madeira Promotion Bureau — официальный', url: 'https://www.visitmadeira.com/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Digital Nomads Madeira', url: 'https://digitalnomads.startupmadeira.eu/', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Governo Regional Madeira', url: 'https://www.madeira.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}