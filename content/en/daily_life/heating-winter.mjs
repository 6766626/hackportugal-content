export default {
  editorialVoice: 'hackportugal',
  id: 'heating-winter',
  categoryId: 'daily_life',
  title: 'How to survive winter in Portugal — heating and humidity',
  tldr: 'Winter in Portugal is deceptive. The home is often colder than outside — there is NO central heating in most homes. Walls are poorly insulated, humidity is around 80%. Options: gas boiler, air conditioning with heating, electric heaters, pellet stove. The electricity bill in January can double.',
  tags: ['winter', 'heating', 'humidity'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'reality',
      title: 'The reality of a Portuguese winter',
      content: [
        { kind: 'paragraph', text: 'Northern Europe thinks “Portugal = warm all year round” — this is a myth. Lisbon: +5-15°C, Porto: +2-12°C, north: there may be snow.' },
        { kind: 'paragraph', text: 'But the main problem is not the temperature, but: 1) poor home insulation (single glazing, thin walls), 2) absence of central heating, 3) high humidity → mould.' }
      ]
    },
    {
      id: 'heating-options',
      title: 'Heating options',
      content: [
        { kind: 'substeps', items: [
          { id: 'h1', title: 'Gas boiler (caldeira) + radiators', content: [
            { kind: 'paragraph', text: 'Radiator heating uses a gas boiler (caldeira), not an esquentador (an esquentador is an instantaneous gas water heater only for hot water). Rare in old buildings; in new homes it is found with underfloor/radiator heating.' }
          ]},
          { id: 'h2', title: 'Air conditioning with heating / heat pump', content: [
            { kind: 'paragraph', text: 'Very popular. In terms of COP/energy efficiency, it is usually more efficient than direct electric heating. Installation price €1,000-2,000 per split system. Efficient in mild cold; in severe frosts efficiency drops.' }
          ]},
          { id: 'h3', title: 'Electric heaters', content: [
            { kind: 'checklist', items: [
              'Oil-filled — €40-80 at Continente/Leroy, safe, but slow',
              'Convector — fast, but dry out the air',
              'Electric towel rail for the bathroom — localised',
              'Main downside — electricity in Portugal is expensive (~€0.18/kWh), bill x2-3 in winter'
            ]}
          ]},
          { id: 'h4', title: 'Pellet stove', content: [
            { kind: 'paragraph', text: 'A stove using wood pellets. Popular in villages and country houses. Pellets €4-7 per 15 kg bag.' }
          ]},
          { id: 'h5', title: 'Electric blanket (cobertor elétrico / manta elétrica)', content: [
            { kind: 'paragraph', text: 'For the bed. €20-40. Economical. In Portuguese: cobertor elétrico, manta elétrica or aquece-camas (camareiro in Portugal means a waiter/hotel employee).' }
          ]}
        ]}
      ]
    },
    {
      id: 'humidity',
      title: 'Fighting humidity',
      content: [
        { kind: 'checklist', items: [
          'Air rooms in the morning for 10-15 min even in freezing weather',
          'Dehumidifier — a proper compressor unit of 10-20 l/day usually costs €200-400; cheap models for €50-100 are often underpowered',
          'Do not dry laundry indoors → mould',
          'Check windows — condensation = mould within a month',
          'Anti-mould products: Clorox Pulverizador, Fungishield',
          'Bathroom ventilation — mechanical or natural — is critical'
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
              'For active heating at night in winter — bi-horário is worthwhile'
            ]}
          ]},
          { id: 'e3', title: 'Standing charge', content: [
            { kind: 'paragraph', text: 'Potência contratada — contracted power 1.15 kVA, 3.45, 6.9, etc. The higher the power, the higher the standing charge. For heaters, 3.45-6.9 is usually enough.' }
          ]}
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Tips for the first year',
      content: [
        { kind: 'checklist', items: [
          '🧥 Dress more warmly at home than you were used to in the Central Federal District/Belarus',
          '🧊 It is already cold in the evenings in October — prepare a heater in advance',
          '🏠 When renting — ask about the windows: double glazing',
          '🧺 A tumble dryer is desirable (costs €300-700)',
          '💰 Budget +€100-200/month for electricity in winter',
          '🌧️ November-February — the rainiest period, prepare good shoes',
          '☀️ On sunny winter days — OPEN the curtains, the home warms up'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'ERSE — Energy Services Regulatory Authority', url: 'https://www.erse.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ADENE — Energy Agency', url: 'https://www.adene.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DGEG — Directorate-General for Energy and Geology', url: 'https://www.dgeg.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
