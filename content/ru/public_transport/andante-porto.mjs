export default {
  editorialVoice: 'hackportugal',
  id: 'andante-porto',
  categoryId: 'public_transport',
  title: 'Andante — единая карта Порту: метро, автобус, пригородные поезда',
  tldr: 'Andante — единый проездной для метро Порту, автобусов STCP и пригородных поездов CP в столичной зоне. Зональная система: чем дальше — тем дороже. Для туристов — Andante Tour на 1/3 дня (7,75–16,55 €). Для резидентов — месячный проездной Z2 за 30 €/мес, безлимитный региональный MetroPorto — 40 €/мес. Карту можно купить в автомате метро (Andante Azul = для разовых билетов, 0,60 €) или PayShop. Также есть Andante eTransit в приложении.',
  tags: ['andante', 'porto', 'метро', 'автобус', 'stcp', 'проездной'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'system',
      title: '🗺️ Зональная система Andante',
      content: [
        { kind: 'paragraph', text: 'Регион MetroPorto разбит на 12 зон. Билет рассчитывается по количеству зон, через которые проходит маршрут.' },
        { kind: 'checklist', items: [
          '🟦 Z2 — 1–2 зоны: центр Порту (Trindade, Bolhão, São Bento), Vila Nova de Gaia',
          '🟩 Z3 — 3 зоны: Maia, Matosinhos, Gondomar, Senhora da Hora',
          '🟧 Z4 — 4 зоны: Vila do Conde, Espinho',
          '🟨 Z5+ — более дальние пригороды: Aveiro, Trofa',
          '⚠️ Тариф зависит от зоны отправления и зоны назначения. Система непростая, но автоматы рассчитывают стоимость сами'
        ]}
      ]
    },
    {
      id: 'options',
      title: '🎫 Варианты карт и билетов',
      content: [
        { kind: 'substeps', items: [
          { id: 'occasional', title: 'Разовые билеты — для туристов и редких поездок', content: [
            { kind: 'checklist', items: [
              '🟪 Andante Azul — карта за 0,60 € (можно пополнять разовыми билетами)',
              '💰 Разовый Z2: 1,40 € — 1 час в зоне 2',
              '💰 Andante 24h Tour 1: 7,75 € — безлимит на сутки по всей сети',
              '💰 Andante 24h Tour 3: 16,55 € — 3 дня по всей сети',
              '💰 Andante Tour 24h (Z2): 4,15 € — для тех, кто ездит только по центру',
              '🎟️ Можно купить и сразу отметить у турникета или в автобусе'
            ]}
          ]},
          { id: 'monthly', title: 'Месячные проездные (для резидентов)', content: [
            { kind: 'checklist', items: [
              '👤 Andante Mensal Z2 (центр Порту): 30 €/мес',
              '👤 Andante Mensal Z3: 35 €/мес',
              '👤 Andante Mensal Z4: 40 €/мес',
              '🚇 Mensal MetroPorto (безлимит на весь регион): 40 €/мес',
              '🎓 Andante Estudante (для студентов): -50%, ≈15 €',
              '👴 Andante Sénior (>65): -50%',
              '👨‍👩‍👧 Andante Família (3+ человека) — общий проездной, -25% на каждого',
              '⚠️ Для оформления нужна Andante Branca (именная) — фото + Cartão de Cidadão, на станции метро'
            ]}
          ]},
          { id: 'app', title: 'Приложение Andante (eTransit)', content: [
            { kind: 'checklist', items: [
              '📱 «Anda» (App Store / Google Play) — официальное приложение',
              '🛒 Покупка билетов в телефоне, QR-код на турникете',
              '🔋 Подтверждение поездки через NFC одним касанием телефона',
              '💳 Привязка карты, автоматическая оплата',
              '📊 История поездок, статистика расходов'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'how-to-use',
      title: '🚇 Как пользоваться',
      content: [
        { kind: 'checklist', items: [
          '🎫 На станции метро — приложить карту к турникету, проверить цвет: зелёный — всё в порядке, красный — нет билета или не та зона',
          '🚌 В автобусе STCP — приложить карту к валидатору при входе',
          '🚞 В пригородном поезде CP — отметить билет в автомате на платформе или попросить контролёра',
          '⏰ Билет действует по времени — после первой отметки он действителен 1–2 часа в зависимости от количества зон',
          '🔁 В пределах этого времени можно делать пересадки без новой оплаты',
          '⚠️ Контроль на станциях и в автобусах — штраф 60–120 €, если ехать без билета или с просроченным билетом'
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Советы',
      content: [
        { kind: 'checklist', items: [
          '🌅 По выходным дешевле: Andante Família на 4 человека = 7,50 €, безлимит',
          '🚖 Uber/Bolt в Порту иногда дешевле автобуса для 3–4 человек на короткое расстояние (1–2 €/чел)',
          '🛒 Купить Andante Branca (именную) выгоднее в долгосрочной перспективе, если планируете жить здесь',
          '🚲 BUGA — городские велосипеды Порту, бесплатно с залогом',
          '🚜 Aveiro / Espinho доступны по Andante Z5 — пляж за 2 € в день!',
          '📅 1-е число месяца — толпа в метро Trindade на оформление проездных; идите 5–10 числа'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Andante Azul (карта)', amountEUR: 0.60 },
    { label: 'Разовый Z2', amountEUR: 1.40 },
    { label: 'Andante Tour 24h', amountEUR: 7.75 },
    { label: 'Andante Tour 3 дня', amountEUR: 16.55 },
    { label: 'Mensal Z2', amountEUR: 30 },
    { label: 'Mensal MetroPorto (безлимит)', amountEUR: 40 }
  ],
  sources: [
    { title: 'Metro do Porto — официальный сайт', url: 'https://www.metrodoporto.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-31' },
    { title: 'STCP — Sociedade de Transportes Colectivos do Porto', url: 'https://www.stcp.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-31' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}