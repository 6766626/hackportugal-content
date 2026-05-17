export default {
  editorialVoice: 'hackportugal',
  id: 'madeira-island',
  categoryId: 'travel_portugal',
  title: 'Madeira — for digital nomads',
  tldr: 'Autonomous region, eternal spring +18-24°C all year round. Funchal is the capital. Digital Nomads Village in Ponta do Sol. English is widespread. SNS works. ZFM (Zona Franca da Madeira) is a special regime for **corporations** (IRC 5% instead of 21%, not IRS for individuals!). For individual residents of Madeira, IRS at the regional rate is usually 1–2 percentage points lower than on the mainland. Rent is cheaper than in Lisboa, but in 2024-2025 it rose because of digital nomads.',
  tags: ['madeira', 'funchal', 'digital nomad', 'island'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'why',
      title: 'Why Madeira',
      content: [
        { kind: 'checklist', items: [
          '🌡️ Climate: +18-24°C all year round, mild winter',
          '🌿 Nature: mountains, waterfalls, subtropical plants, ocean',
          '🏝️ Island — but all conveniences + an airport with direct flights',
          '💻 Digital Nomads Village in Ponta do Sol — the programme hub',
          '🇬🇧 English is understood everywhere',
          '💰 Autonomous tax status: 10% IRS in some schemes',
          '🚑 SNS operates fully, there are private clinics',
          '📚 International schools in Funchal',
          '👨‍👩‍👧 Safe, relaxed pace'
        ]}
      ]
    },
    {
      id: 'cons',
      title: 'Downsides',
      content: [
        { kind: 'checklist', items: [
          'Island: everything is imported, some products are more expensive',
          'Windy weather, fog in the mountains',
          'Rent has risen because of digital nomads — T1 €800–1,500 in Funchal',
          'Less variety — a small island, you quickly “cover” it',
          'Seasonal airport — fewer flights in winter',
          'For families with children aged 15+ — limited choice of schools and entertainment',
          'Heavy cloudiness can sometimes last for weeks on the coast'
        ]}
      ]
    },
    {
      id: 'areas',
      title: 'Where to live in Madeira',
      content: [
        { kind: 'substeps', items: [
          { id: 'a1', title: 'Funchal — the capital', content: [
            { kind: 'paragraph', text: 'The centre is touristy, with shops and restaurants. São Martinho is quieter. Lido has hotels + residences. T1 €800–1,500.' }
          ]},
          { id: 'a2', title: 'Ponta do Sol', content: [
            { kind: 'paragraph', text: 'Digital Nomads Village. Less cloudiness. Strong digital nomad community. T1 €700–1,200.' }
          ]},
          { id: 'a3', title: 'Calheta', content: [
            { kind: 'paragraph', text: 'South-west, beach (artificial with sand). Quiet, sunny. T1 €700–1,100.' }
          ]},
          { id: 'a4', title: 'Câmara de Lobos / Estreito', content: [
            { kind: 'paragraph', text: 'Fishing village next to Funchal. Authentic, cheaper. T1 €600–900.' }
          ]},
          { id: 'a5', title: 'Santana / north coast', content: [
            { kind: 'paragraph', text: 'Traditional houses, dramatic nature. Far from Funchal (an hour by car). A car is essential.' }
          ]}
        ]}
      ]
    },
    {
      id: 'nomad-village',
      title: 'Digital Nomads Madeira',
      content: [
        { kind: 'paragraph', text: 'Since 2021, Madeira has hosted a programme for digital nomads. Free coworking in Ponta do Sol, Slack community, events. To register — fill in the form at digitalnomads.startupmadeira.eu.' },
        { kind: 'link', text: 'digitalnomads.startupmadeira.eu', url: 'https://digitalnomads.startupmadeira.eu/' },
        { kind: 'paragraph', text: 'It does not replace a D8 visa — this is an integration programme, not legalisation. You obtain the D8 visa separately.' }
      ]
    },
    {
      id: 'logistics',
      title: 'Logistics',
      content: [
        { kind: 'checklist', items: [
          '✈️ Funchal Airport: 1.5 hrs to Lisboa (€50–200), direct flights to the United Kingdom/Germany/France',
          '🚐 From the airport to the city: Aerobus bus €5 / taxi €25–30',
          '🚗 A car is advisable — the terrain is difficult, public transport is weak',
          '🚌 Horários do Funchal and SAM — buses around the island',
          '🏥 Hospital Dr. Nélio Mendonça (SNS), private: Hospital Particular da Madeira',
          '🏫 International School of Madeira',
          '🌊 Porto Santo — second island, 2 hrs by ferry, sandy beaches'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Madeira Promotion Bureau — official', url: 'https://www.visitmadeira.com/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Digital Nomads Madeira', url: 'https://digitalnomads.startupmadeira.eu/', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Governo Regional Madeira', url: 'https://www.madeira.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
