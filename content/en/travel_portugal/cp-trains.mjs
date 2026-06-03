export default {
  editorialVoice: 'hackportugal',
  id: 'cp-trains',
  categoryId: 'travel_portugal',
  title: 'CP trains (Comboios de Portugal) — how to use them',
  tldr: 'CP is the state railway operator.\n\nTrain types: Alfa Pendular (fast Lisbon — Porto in 2.5 h), Intercidades (medium), Regional (slow), Urbanos (suburban).\n\nDiscount cards: Cartão Jovem, Cartão Amigo. Lisbon — Porto on Alfa Pendular: around €25–40, Intercidades: around €20–30. Book on cp.pt.',
  tags: ['train', 'cp', 'alfa pendular', 'intercidades'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'types',
      title: 'Train types',
      content: [
        { kind: 'substeps', items: [
          { id: 't1', title: 'Alfa Pendular (AP)', content: [
            { kind: 'paragraph', text: 'CP’s flagship service. Fast tilting trains. Lisbon — Porto in 2.5 h. Wi-Fi, power sockets, café carriage. 2 classes: Conforto (economy class), Primeira (first class). Routes: Lisbon — Coimbra — Porto — Braga, Lisbon — Algarve.' }
          ]},
          { id: 't2', title: 'Intercidades (IC)', content: [
            { kind: 'paragraph', text: 'Intercity trains, 30–50 min slower than AP and 20–30% cheaper. The same main routes plus branches. Comfortable.' }
          ]},
          { id: 't3', title: 'Internacional', content: [
            { kind: 'paragraph', text: 'The overnight Sud Expresso Lisbon — Madrid has not run since 2020 — it has been replaced by a coach. There is a regional train from Porto to Vigo across the border.' }
          ]},
          { id: 't4', title: 'Regional', content: [
            { kind: 'paragraph', text: 'Slow trains with frequent stops. For smaller towns. Cheap.' }
          ]},
          { id: 't5', title: 'Urbanos', content: [
            { kind: 'paragraph', text: 'Suburban trains in Lisbon (Cascais, Sintra, Tomar, Setúbal) and Porto (Braga, Aveiro, Guimarães). Pay with Navegante/Andante or a standard ticket.' }
          ]}
        ]}
      ]
    },
    {
      id: 'key-routes',
      title: 'Main routes (2026 prices)',
      content: [
        { kind: 'checklist', items: [
          'Lisbon ↔ Porto AP: 2 h 45 min, €25–40 (discounts up to -65% when buying 8+ days in advance)',
          'Lisbon ↔ Porto IC: 3 h, €20–32',
          'Lisbon ↔ Coimbra AP: 1 h 40 min, €18–25',
          'Lisbon ↔ Faro (Alentejo — Algarve): 3 h AP / 3 h 40 min IC, €20–35',
          'Porto ↔ Braga: 1 h on Urbano, €4',
          'Porto ↔ Aveiro: 35 min, €4',
          'Lisbon ↔ Cascais Urbano: 40 min, €1.95 (Navegante)',
          'Lisbon ↔ Sintra Urbano: 40 min, €2.45'
        ]}
      ]
    },
    {
      id: 'booking',
      title: 'How to book',
      content: [
        { kind: 'substeps', items: [
          { id: 'b1', title: '1. CP website or app', content: [
            { kind: 'paragraph', text: 'cp.pt or the CP app. Registration, NIF (recommended), payment card.' },
            { kind: 'link', text: 'cp.pt', url: 'https://www.cp.pt/' }
          ]},
          { id: 'b2', title: '2. Discounts — plan ahead', content: [
            { kind: 'checklist', items: [
              '8+ days in advance: up to -65% on AP and IC (Lisbon — Porto from €40 to about €14)',
              '5–7 days in advance: up to -56%',
              'Cartão Jovem (ages 12–30): -25% on IC and Regional (not valid on AP)',
              'Cartão Amigo (annual card for €25): -20% on all journeys',
              'Family discount: 4+ = -50% for children aged 4–12',
              'Students with ID — additional discounts'
            ]}
          ]},
          { id: 'b3', title: '3. Ticket on your phone', content: [
            { kind: 'paragraph', text: 'PDF or in the app. The inspector scans the QR code. If it is Alfa Pendular, the seat is reserved.' }
          ]},
          { id: 'b4', title: '4. Booking Urbanos', content: [
            { kind: 'paragraph', text: 'Booking is not required. You can buy a ticket at the station, via the app, or pay with a Navegante card (Lisbon) / Andante (Porto).' }
          ]}
        ]}
      ]
    },
    {
      id: 'stations',
      title: 'Main stations',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: 'Lisbon', content: [
            { kind: 'checklist', items: [
              'Santa Apolónia — traditional station, for AP/IC to Porto and the north',
              'Oriente — modern station, Parque das Nações, all AP/IC + Urbanos',
              'Gare do Oriente — the same as Oriente; red metro line',
              'Rossio — Urbanos to Sintra',
              'Cais do Sodré — Urbanos to Cascais',
              'Entrecampos — intercity trains to the south'
            ]}
          ]},
          { id: 's2', title: 'Porto', content: [
            { kind: 'checklist', items: [
              'Campanhã — main station, AP/IC',
              'São Bento — tourist station (azulejo tiles), Urbanos',
              'Contumil — Urbanos hub, interchange for the north and east'
            ]}
          ]}
        ]}
      ]
    }
  ],
  sources: [
    { title: 'CP — Comboios de Portugal', url: 'https://www.cp.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Infraestruturas de Portugal', url: 'https://www.infraestruturasdeportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
