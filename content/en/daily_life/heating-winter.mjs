export default {
  editorialVoice: 'hackportugal',
  id: 'heating-winter',
  categoryId: 'daily_life',
  title: 'How to get through winter in Portugal — heating and humidity',
  tldr: 'Winter in Portugal is deceptive. The house is often colder than outside — there is NO central heating in most homes. Walls are poorly insulated, humidity is around 80%. Options: gas boiler, air conditioning with heating, electric heaters, pellet stove. The electricity bill in January can double.',
  tags: ['winter', 'heating', 'humidity'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'reality',
      title: 'The reality of a Portuguese winter',
      content: [
        { kind: 'paragraph', text: 'Northern Europe thinks “Portugal = warm all year round” — this is a myth. Lisbon: +5-15°C, Porto: +2-12°C, north: there may be snow.' },
        { kind: 'paragraph', text: 'But the main problem is not the temperature, but: 1) poor home insulation (single glazing, thin walls), 2) no central heating, 3) high humidity → mould.' }
      ]
    },
    {
      id: 'heating-options',
      title: 'Heating options',
      content: [
        { kind: 'substeps', items: [
          { id: 'h1', title: 'Gas boiler + radiators', content: [
            { kind: 'paragraph', text: 'If there is a gas contract. Rare in old buildings. The most efficient option.' }
          ]},
          { id: 'h2', title: 'Air conditioning with heating', content: [
            { kind: 'paragraph', text: 'Popular. Installation costs €1,000-2,000 per split system. Effective for mild cold (+5°C). Works poorly at -5°C.' }
          ]},
          { id: 'h3', title: 'Electric heaters', content: [
            { kind: 'checklist', items: [
              'Oil-filled — €40-80 at Continente/Leroy, safe but slow',
              'Convector heaters — fast, but dry out the air',
              'Electric towel rail for the bathroom — localised',
              'The main downside — electricity in Portugal is expensive (~€0.18/kWh), bill x2-3 in winter'
            ]}
          ]},
          { id: 'h4', title: 'Pellet stove', content: [
            { kind: 'paragraph', text: 'A stove using wood pellets. Popular in villages and country houses. Pellets €4-7 per 15 kg bag.' }
          ]},
          { id: 'h5', title: 'Electric blanket', content: [
            { kind: 'paragraph', text: 'For the bed. €20-40. Economical.' }
          ]}
        ]}
      ]
    },
    {
      id: 'humidity',
      title: 'Dealing with humidity',
      content: [
        { kind: 'checklist', items: [
          'Air rooms in the morning for 10-15 min even in freezing weather',
          'Dehumidifier — €50-150, collects 10-20 l of water per day',
          'Do not dry laundry indoors → mould',
          'Check windows — condensation = mould within a month',
          'Anti-mould products: Clorox Pulverizador, Fungishield',
          'Ventilation in the bathroom — mechanical or natural — is critical'
        ]}
      ]
    },
    {
      id: 'tariff',
      title: 'Electricity — choosing a tariff',
      content: [
        { kind: 'substeps', items: [
          { id: 'e1', title: 'Suppliers', content: [
            { kind: 'paragraph', text: 'EDP, Iberdrola, Galp, Endesa, Repsol — the main ones. Prices are comparable in 2026.' }
          ]},
          { id: 'e2', title: 'Tariffs', content: [
            { kind: 'checklist', items: [
              'Simples — the same price 24/7',
              'Bi-horário — day and night (22:00-8:00) tariffs',
              'Tri-horário — 3 tariffs (peak, shoulder, night)',
              'For active heating at night in winter — bi-horário is cost-effective'
            ]}
          ]},
          { id: 'e3', title: 'Standing charge', content: [
            { kind: 'paragraph', text: 'Potência contratada — contracted power 1.15 kVA, 3.45, 6.9, etc. More power — higher standing charge. For heaters, 3.45-6.9 is usually enough.' }
          ]}
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Tips for the first year',
      content: [
        { kind: 'checklist', items: [
          '🧥 Dress warmer at home than you are used to in the Central Federal District/Belarus',
          '🧊 It is already cold in the evening in October — prepare a heater in advance',
          '🏠 When renting — ask about the windows: double glazing',
          '🧺 A tumble dryer is desirable (costs €300-700)',
          '💰 Budget +€100-200/month for electricity in winter',
          '🌧️ November-February — the rainiest period, prepare good footwear',
          '☀️ On sunny winter days — OPEN the curtains, the house warms up'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'ERSE — Energy Services Regulatory Authority', url: 'https://www.erse.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ADENE — Energy Agency', url: 'https://www.adene.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DGEG — Directorate-General for Energy and Geology', url: 'https://www.dgeg.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}
