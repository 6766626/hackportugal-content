export default {
  editorialVoice: 'hackportugal',
  id: 'madeira-island',
  categoryId: 'travel_portugal',
  title: 'Madeira — for digital nomads',
  tldr: 'An autonomous region, eternal spring at +18-24°C all year round. Funchal is the capital. Digital Nomads Village in Ponta do Sol. English is widely spoken. SNS works. ZFM (Zona Franca da Madeira) is a special regime for **corporations** (IRC 5% instead of 21%, not IRS for individuals!). For individual residents of Madeira, IRS at the regional rate is usually 1–2 p.p. lower than on the mainland. Rent is cheaper than in Lisboa, but in 2024-2025 it rose because of digital nomads.',
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
          '🏝️ An island — but with all amenities + an airport with direct flights',
          '💻 Digital Nomads Village in Ponta do Sol — the programme hub',
          '🇬🇧 English is understood everywhere',
          '💰 Autonomous tax status: 10% IRS in some schemes',
          '🚑 SNS works fully, and there are private clinics',
          '📚 International schools in Funchal',
          '👨‍👩‍👧 Safe, measured pace'
        ]}
      ]
    },
    {
      id: 'cons',
      title: 'Drawbacks',
      content: [
        { kind: 'checklist', items: [
          'Island: everything is imported, some products are more expensive',
          'Windy weather, fog in the mountains',
          'Rent has risen because of digital nomads — T1 €800–1,500 in Funchal',
          'Less variety — a small island, you “cover” it quickly',
          'Seasonal airport — fewer flights in winter',
          'For families with children aged 15+ — limited choice of schools and entertainment',
          'Heavy cloud cover sometimes lasts for weeks on the coast'
        ]}
      ]
    },
    {
      id: 'areas',
      title: 'Where to live in Madeira',
      content: [
        { kind: 'substeps', items: [
          { id: 'a1', title: 'Funchal — the capital', content: [
            { kind: 'paragraph', text: 'The centre is touristy, with shops and restaurants. São Martinho is calmer. Lido has hotels + residences. T1 €800–1,500.' }
          ]},
          { id: 'a2', title: 'Ponta do Sol', content: [
            { kind: 'paragraph', text: 'Digital Nomads Village. Less cloud cover. Strong digital nomad community. T1 €700–1,200.' }
          ]},
          { id: 'a3', title: 'Calheta', content: [
            { kind: 'paragraph', text: 'South-west, beach (artificial with sand). Quiet, sunny. T1 €700–1,100.' }
          ]},
          { id: 'a4', title: 'Câmara de Lobos / Estreito', content: [
            { kind: 'paragraph', text: 'Fishing village near Funchal. Authentic, cheaper. T1 €600–900.' }
          ]},
          { id: 'a5', title: 'Santana / north coast', content: [
            { kind: 'paragraph', text: 'Traditional little houses, dramatic nature. Remote from Funchal (an hour by car). A car is essential.' }
          ]}
        ]}
      ]
    },
    {
      id: 'nomad-village',
      title: 'Digital Nomads Madeira',
      content: [
        { kind: 'paragraph', text: 'Since 2021, Madeira has hosted a programme for digital nomads. Free coworking in Ponta do Sol, a Slack community, events. To register — fill in the form at digitalnomads.startupmadeira.eu.' },
        { kind: 'link', text: 'digitalnomads.startupmadeira.eu', url: 'https://digitalnomads.startupmadeira.eu/' },
        { kind: 'paragraph', text: 'It does not replace the D8 visa — this is an integration programme, not legalisation. You obtain the D8 visa separately.' }
      ]
    },
    {
      id: 'logistics',
      title: 'Logistics',
      content: [
        { kind: 'checklist', items: [
          '✈️ Funchal Airport: 1.5h to Lisboa (€50–200), direct flights to the UK/Germany/France',
          '🚐 From the airport to the city: Aerobus €5 / taxi €25–30',
          '🚗 A car is advisable — the terrain is difficult, public transport is weak',
          '🚌 Horários do Funchal and SAM — buses around the island',
          '🏥 Hospital Dr. Nélio Mendonça (SNS), private: Hospital Particular da Madeira',
          '🏫 International School of Madeira',
          '🌊 Porto Santo — the second island, 2h by ferry, sandy beaches'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Madeira Promotion Bureau — official', url: 'https://www.visitmadeira.com/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Digital Nomads Madeira', url: 'https://digitalnomads.startupmadeira.eu/', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Governo Regional Madeira', url: 'https://www.madeira.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}
