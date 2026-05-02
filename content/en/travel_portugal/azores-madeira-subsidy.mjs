export default {
  editorialVoice: 'hackportugal',
  id: 'azores-madeira-subsidy',
  categoryId: 'travel_portugal',
  title: 'Azores and Madeira — Subsídio Social de Mobilidade and how to buy tickets',
  tldr: 'The state subsidy **Subsídio Social de Mobilidade (SSM)** exists for **residents of the autonomous regions of the Azores and Madeira/Porto Santo** when travelling between the region and the mainland (or between regions/islands of the archipelago), as well as for students with a connection to the region. It does NOT apply to mainland residents as a tourist discount for flying to the islands. Eligibility is confirmed by residence in the autonomous region. The amount and number of subsidised trips are determined by the current Decreto-Lei/Portaria — check the latest rules on ANAC/IMT/SATA. For tourists from the mainland — standard TAP, SATA, Ryanair fares (look for early deals and low-cost options).',
  tags: ['azores', 'madeira', 'subsidy', 'flights'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'stp-overview',
      title: '✈️ STP — Social Territorial de Passageiros',
      content: [
        { kind: 'paragraph', text: 'A programme subsidising flights between mainland Portugal and the autonomous regions (Azores, Madeira) — it compensates for the price difference between the mainland and the islands.' },
        { kind: 'checklist', items: [
          '✅ Who is eligible: **residents of the autonomous region of the Azores or Madeira/Porto Santo** (not the mainland!) — foreigners with a residence permit and real residence in the region also qualify',
          '✅ **Island residents → mainland**: subsidy up to €134 (2026)',
          '✅ **Mainland residents → islands** (as tourists): a lower subsidy, depending on the route',
          '✅ **Maximum 4 trips per year** for island residents; 2 for tourists',
          '❌ Does not work for: business travel (if paid by a company), non-residents',
          '💰 Example: Lisbon—Ponta Delgada ticket €210 → subsidy €80 → final cost €130'
        ]}
      ]
    },
    {
      id: 'how-to',
      title: '📋 How to obtain it',
      content: [
        { kind: 'substeps', items: [
          { id: 'h1', title: 'Option A — built-in subsidy at purchase (SATA, TAP)', content: [
            { kind: 'checklist', items: [
              'On sata.pt or flytap.pt — enter your NIF when booking',
              'The system automatically applies the “resident” fare',
              'You pay the reduced amount straight away',
              'Do it yourself, with no paperwork',
              '**Preferred method** — faster and simpler'
            ]}
          ]},
          { id: 'h2', title: 'Option B — refund after travel (Ryanair, other carriers)', content: [
            { kind: 'checklist', items: [
              'You bought a ticket at full price without NIF',
              'After the trip — apply on sata.pt → “Bonificação STP”',
              'Attach: boarding passes, invoice, atestado de residência',
              'Refund deadline: up to 30 days after the flight',
              'Money to your IBAN within 30-60 days',
              'Bureaucratic, but it works for international carriers'
            ]}
          ]},
          { id: 'h3', title: 'Documents', content: [
            { kind: 'checklist', items: [
              'NIF',
              'Atestado de Residência (if requested; usually NIF in the system is enough)',
              'Boarding passes both ways (for option B)',
              'Invoice (fatura with NIF)',
              'Bank IBAN'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'island-residents',
      title: '🏝️ For residents of the Azores / Madeira',
      content: [
        { kind: 'paragraph', text: 'If you live on the islands — you receive additional benefits from the Governo Regional.' },
        { kind: 'substeps', items: [
          { id: 'a1', title: 'Azores', content: [
            { kind: 'checklist', items: [
              '**Super-subsidy** via SATA for Azores residents: up to 80% refund of the ticket cost',
              'Maximum 6 trips per year',
              'Additional subsidy for students / medical cases — up to 100%',
              'Apply via srprorainol.azores.gov.pt or municipal offices'
            ]}
          ]},
          { id: 'm1', title: 'Madeira', content: [
            { kind: 'checklist', items: [
              'Similar programme from Governo Regional da Madeira',
              'Bonificação tarifária: 50-80% refund',
              'Registration on madeira.gov.pt',
              'Serves: TAP, easyJet, SATA Madeira routes'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'porto-santo',
      title: '🏖️ Porto Santo (Madeira) — special options',
      content: [
        { kind: 'checklist', items: [
          'Beach island 30 minutes by air from Funchal',
          '**Porto Santo Line** — ferry company (3 hours, €50-80 return, 30% discount for residents)',
          '**SATA / TAP** — 10-15 flights per week, €35-60 one way (residents)',
          'In season (June-September) — overcrowded, book tickets 2-3 months in advance'
        ]}
      ]
    },
    {
      id: 'inter-islands',
      title: '🛩️ Flights between the Azores islands',
      content: [
        { kind: 'checklist', items: [
          '**SATA Air Açores** — the only inter-island carrier',
          'Residents: super fare €35-60 one way between neighbouring islands',
          'Non-residents: €80-150',
          'Routes: Ponta Delgada ↔ Terceira, Pico, Faial, Corvo, Flores',
          '⚠️ Weather: flight cancellations are common in winter — buy a flexible fare',
          'Atlânticoline ferries — an alternative, cheaper, 40-90 min between neighbouring islands'
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Tips for tourists in the Azores / Madeira',
      content: [
        { kind: 'checklist', items: [
          '📅 **Season**: May-October is best — warm, no storms. But high season = high prices',
          '🌡️ **Weather**: Madeira 20-26°C all year round, Azores 15-25°C',
          '🚗 **Car hire**: essential for activities — you cannot properly get around the islands by bus; €30-60/day',
          '🏨 **Accommodation**: local AL (Airbnb) is cheaper than hotels, often with a view',
          '🥾 **Trekking**: Azores — 8 islands, each with its own trails. Madeira — levadas (water channels), an essential experience',
          '🌊 **Whale watching** (Azores, April-September): €50-80 for a 3-hour tour',
          '🍷 **Wine**: Madeira wine, Pico vineyards — UNESCO heritage',
          '🏖️ **Beaches**: Porto Santo (Madeira) — the only sandy one in the region; Azores — volcanic, black'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Lisbon—Azores ticket (resident)', amountEURMin: 120, amountEURMax: 180 },
    { label: 'Lisbon—Madeira ticket (resident)', amountEURMin: 80, amountEURMax: 160 },
    { label: 'Subsídio STP', amountEURMin: 50, amountEURMax: 134, note: '€ refund' },
    { label: 'Between Azores islands (residents)', amountEURMin: 35, amountEURMax: 60 },
    { label: 'Porto Santo ferry', amountEURMin: 50, amountEURMax: 80 }
  ],
  sources: [
    { title: 'SATA Azores — Bonificação STP', url: 'https://www.sata.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'TAP — Azorean residents', url: 'https://www.flytap.com/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Governo dos Açores — Support', url: 'https://portal.azores.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Governo Regional Madeira — Support', url: 'https://www.madeira.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
