export default {
  editorialVoice: 'hackportugal',
  id: 'intercity-transport',
  categoryId: 'travel_portugal',
  title: 'Intercity transport in Portugal — train, coach, plane',
  tldr: 'Three channels: CP trains (comfort + Lisbon–Porto–Braga network + Alentejo), Rede Expressos coaches (cheap national network) and FlixBus (international).\n\nIslands — TAP, SATA, Ryanair flights and Atlanticoline ferries. Algarve — EVA coaches. The Omio aggregator brings everything together. When booking 2–4 weeks in advance, prices fall by 30–50%.',
  tags: ['transport', 'train', 'coach', 'plane', 'cp', 'rede expressos'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'train-cp',
      title: 'CP — Comboios de Portugal',
      content: [
        { kind: 'paragraph', text: 'The national railway. Covers the Lisbon — Porto — Braga, Lisbon — Alentejo — Algarve, Coimbra, and Douro mountain routes. Does not cover the islands.' },
        { kind: 'substeps', items: [
          { id: 'cp1', title: 'Types of train', content: [
            { kind: 'checklist', items: [
              'Alfa Pendular — high-speed (220 km/h), Lisbon–Porto 2:40, “Conforto” / “Turístico” comfort classes',
              'Intercidades — fast, 3 hours Lisbon–Porto, cheaper',
              'Regional — slow, many stops',
              'Urbano — suburban electric trains (Lisbon, Porto)',
              'Comboios Históricos — Douro (seasonal)'
            ]}
          ]},
          { id: 'cp2', title: 'Prices (2026)', content: [
            { kind: 'checklist', items: [
              'Lisbon–Porto Alfa: €30–45 (in advance) / €50–70 (on the day of travel)',
              'Lisbon–Faro: €20–30',
              'Lisbon–Coimbra: €15–25',
              'Porto–Braga: €5–8',
              'Discounts: 50% for children aged 4-12, 25-50% for students, 50% for pensioners aged 65+',
              'Interrail Pass: available to residents of Portugal'
            ]}
          ]},
          { id: 'cp3', title: 'Purchase', content: [
            { kind: 'checklist', items: [
              'cp.pt website — mobile version in English',
              '“CP - Comboios de Portugal” app',
              'Ticket office at the station',
              'Self-service terminals',
              '10–30 days in advance = discount',
              'Ticket: e-ticket with QR code'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'bus-intercity',
      title: 'Intercity coaches',
      content: [
        { kind: 'substeps', items: [
          { id: 'b1', title: 'Rede Expressos', content: [
            { kind: 'checklist', items: [
              'National network, 200+ destinations',
              'Lisbon–Porto: €22, 3:30 hours',
              'Lisbon–Faro: €20, 3 hours',
              'Lisbon–Braga: €24',
              'Wi-Fi, USB charging, comfort',
              'rede-expressos.pt / app',
              'Terminal in Lisbon: Sete Rios',
              'Terminal in Porto: Campo 24 de Agosto'
            ]}
          ]},
          { id: 'b2', title: 'FlixBus', content: [
            { kind: 'paragraph', text: 'International network. Within Portugal: Lisbon–Porto (€10–25), Lisbon–Faro (€15–35). Abroad: Portugal–Spain (Madrid €35), Portugal–France (Paris €100). Plus: cheap prices; downside: fewer services than Rede Expressos.' }
          ]},
          { id: 'b3', title: 'Alsa', content: [
            { kind: 'paragraph', text: 'Spanish operator, Portugal–Spain routes. Lisbon–Madrid, Porto–Santiago. From €25.' }
          ]},
          { id: 'b4', title: 'EVA Transportes', content: [
            { kind: 'paragraph', text: 'Algarve. Faro–Lagos, Albufeira and rural routes. €5–15.' }
          ]},
          { id: 'b5', title: 'Regional / local', content: [
            { kind: 'paragraph', text: 'Rodonorte (north), Rodoviária do Alentejo, Rodoviária do Tejo and others. For remote villages and hamlets, often the only transport.' }
          ]}
        ]}
      ]
    },
    {
      id: 'domestic-flights',
      title: 'Domestic flights — only to the islands',
      content: [
        { kind: 'checklist', items: [
          '✈️ Flights between Lisbon/Porto and mainland cities are only rare (Faro once a day)',
          '✈️ The main connections are to Madeira (Funchal) and the Azores (Ponta Delgada)',
          '🇵🇹 TAP Portugal — main carrier, hub in Lisbon',
          '🇵🇹 SATA Azores Airlines — Azores specialist, inter-island flights',
          '💶 Ryanair — Porto/Lisbon to Madeira ~€40–80 in advance',
          '🏝️ Madeira: Lisbon–Funchal 1:40, €50–150',
          '🏝️ Azores: Lisbon–Ponta Delgada 2:15, €80–200'
        ]}
      ]
    },
    {
      id: 'ferries',
      title: 'Ferries — islands',
      content: [
        { kind: 'checklist', items: [
          '⛴️ Atlanticoline — inter-island ferries in the Azores. São Miguel ↔ Terceira ↔ Faial and others. From €15',
          '⛴️ Porto Santo Line — Madeira ↔ Porto Santo, 2:30 hours, €50–80',
          '⛴️ Transtejo / Soflusa — Lisbon ↔ Almada/Cacilhas/Barreiro (public transport, €1–2)',
          '⛴️ Berlengas — from Peniche, seasonal, €25'
        ]}
      ]
    },
    {
      id: 'aggregators',
      title: 'Aggregators and planning',
      content: [
        { kind: 'checklist', items: [
          '🔍 Omio (omio.com) — search across trains + coaches + planes',
          '🔍 Rome2Rio — routes with connections',
          '🔍 Google Flights — for planes',
          '🔍 Skyscanner — budget options',
          '📱 CP + Rede Expressos + FlixBus apps — direct booking is cheaper',
          '📅 10–30 days in advance — best prices',
          '💶 Combined ticket: it is often cheaper to buy CP + local bus separately'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Lisbon–Porto Alfa Pendular', amountEURMin: 30, amountEURMax: 70 },
    { label: 'Lisbon–Porto Rede Expressos', amountEUR: 22 },
    { label: 'Lisbon–Faro (train)', amountEURMin: 20, amountEURMax: 30 },
    { label: 'Lisbon–Funchal (plane)', amountEURMin: 50, amountEURMax: 150 },
    { label: 'Lisbon–Ponta Delgada (plane)', amountEURMin: 80, amountEURMax: 200 }
  ],
  sources: [
    { title: 'CP — Comboios de Portugal', url: 'https://www.cp.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Rede Expressos', url: 'https://rede-expressos.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Infraestruturas de Portugal', url: 'https://www.infraestruturasdeportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'TAP Portugal', url: 'https://www.flytap.com/', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Atlanticoline — ferries in the Azores', url: 'https://www.atlanticoline.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AMT — Autoridade da Mobilidade e dos Transportes', url: 'https://www.amt-autoridade.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
