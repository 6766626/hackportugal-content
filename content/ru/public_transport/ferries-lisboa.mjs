export default {
  editorialVoice: 'hackportugal',
  id: 'ferries-lisboa',
  categoryId: 'public_transport',
  title: 'Паромы Лиссабона — переправы через Тежу и побережье',
  tldr: 'Transtejo/Soflusa — паромы через Тежу: Лиссабон—Cacilhas (10 мин, 2,00 €, zapping 1,60 €), Cais do Sodré—Trafaria—Porto Brandão, Belém—Trafaria, Terreiro do Paço—Barreiro/Montijo. Принимают карту Navegante. Туристам — Tejo Boat Tour. Для любителей пляжей — Cacilhas + автобус 124 до Costa da Caparica. Зимой расписание сокращённое, проверять заранее на ttsl.pt.',
  tags: ['паром', 'transtejo', 'soflusa', 'cacilhas', 'lisboa', 'tejo'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'routes',
      title: '⛴️ Маршруты через Тежу',
      content: [
        { kind: 'substeps', items: [
          { id: 'cacilhas', title: 'Cais do Sodré ↔ Cacilhas (самый популярный)', content: [
            { kind: 'checklist', items: [
              '⏱️ 10 мин на воде',
              '🕐 Днём каждые 10–15 мин, вечером реже; ходит почти круглосуточно',
              '💰 Разовый 2,00 €, zapping 1,60 €; Tejo 24h 6 €',
              '🍷 Cacilhas — район кафе и пивных у воды, отличное фаду',
              '🍤 Знаменитые морепродукты: Restaurante Ponto Final',
              '🚌 От Cacilhas автобус 124 → Costa da Caparica (пляж)'
            ]}
          ]},
          { id: 'belem', title: 'Belém ↔ Trafaria', content: [
            { kind: 'checklist', items: [
              '⏱️ 15 мин',
              '🕐 Каждые 30–45 мин 07:00–22:00',
              '💰 1,50 €',
              '🏰 Trafaria — рыбацкая деревня, пляжи Costa da Caparica поблизости'
            ]}
          ]},
          { id: 'porto-brandao', title: 'Cais do Sodré ↔ Porto Brandão (через Trafaria)', content: [
            { kind: 'checklist', items: [
              '⏱️ 25–30 мин',
              '🕐 Реже, 1–2 раза в час',
              '💰 1,50 €',
              '🍷 Porto Brandão — тихая рыбацкая бухта'
            ]}
          ]},
          { id: 'barreiro', title: 'Terreiro do Paço ↔ Barreiro / Montijo (Soflusa)', content: [
            { kind: 'checklist', items: [
              '⏱️ Barreiro 25 мин, Montijo 30 мин',
              '🕐 Каждые 30–60 мин 06:00–23:00',
              '💰 Barreiro 2,95 €, Montijo 3,25 €',
              '🚂 Из Barreiro поезда CP в Алентежу (Évora, Beja, Faro)'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'tickets',
      title: '🎫 Билеты',
      content: [
        { kind: 'substeps', items: [
          { id: 'occasional', title: 'Разовые', content: [
            { kind: 'checklist', items: [
              '🎫 Автомат на станции (Cais do Sodré, Belém, Terreiro)',
              '💳 Карта или наличные',
              '⏰ Билет временный: 1 час с момента валидирования',
              '🔁 За это время можно сделать пересадку на метро или автобус (один тариф)'
            ]}
          ]},
          { id: 'navegante', title: 'Месячный абонемент Navegante', content: [
            { kind: 'checklist', items: [
              '🌐 Navegante Metropolitano (Лиссабон — Margem Sul) включает паромы',
              '💰 40 €/мес — безлимит на автобус, метро, поезд CP и паромы (по всей AML)',
              '🌟 Самый выгодный вариант для жителей правого и левого берега',
              '📲 Карта Navegante или приложение Carris'
            ]}
          ]},
          { id: 'tour', title: 'Туристические', content: [
            { kind: 'checklist', items: [
              '🛥️ Yellow Boat (Hop-on Hop-off) — туристические паромы Belém + Cacilhas + центр, ≈25 €/день',
              '🚢 Tejo Sunset Cruise — закат, ≈30 €/чел',
              '⚓ Lisboa Sailing Tour — частный круиз, от 50 €/чел',
              '🏝️ Sesimbra/Setúbal Boat Tour — дельфины, ≈50 €/чел'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Советы',
      content: [
        { kind: 'checklist', items: [
          '🚲 Велосипеды на пароме бесплатно — отличный план: «Cacilhas + велосипед до Costa da Caparica»',
          '🐶 Маленькие животные в переноске — бесплатно',
          '⛅ Зимой расписание сокращено, ночные паромы только с пятницы по воскресенье',
          '🌊 Шторм >2 м: паромы могут отменить (редко, обычно только Belém—Trafaria)',
          '🥪 Буфета на пароме нет — еду берите с собой',
          '📸 Идеальный закат: паром Cacilhas → Cais do Sodré в 19:00 летом',
          '⚠️ Транспортная забастовка (greve) — паромы отменяют; следите за СМИ накануне'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Cacilhas разовый (zapping 1,60 €)', amountEUR: 2.00 },
    { label: 'Trafaria/Porto Brandão разовый', amountEUR: 1.50 },
    { label: 'Barreiro разовый', amountEUR: 2.95 },
    { label: 'Montijo разовый', amountEUR: 3.25 },
    { label: 'Tejo 24h туристический', amountEUR: 6 },
    { label: 'Navegante Metropolitano (безлимит)', amountEUR: 40, note: '€/мес' }
  ],
  sources: [
    { title: 'Transtejo / Soflusa — официальный сайт', url: 'https://ttsl.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Carris Metropolitana — Navegante', url: 'https://www.carrismetropolitana.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}