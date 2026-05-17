export default {
  editorialVoice: 'hackportugal',
  id: 'residential-parking',
  categoryId: 'auto_trips',
  title: 'Resident parking — Lisbon, Cascais, Setúbal',
  tldr: 'In major cities, the municipality sells residents discounted parking permits (dístico de residente) — from free to around €80/year. It works based on place of residence (Atestado de Residência) + vehicle registration. Lisbon is managed by EMEL, Cascais by Cascais Próxima, Setúbal by Divisão de Trânsito. Without a dístico, a resident will have to pay hourly like a tourist.',
  tags: ['parking', 'dístico', 'resident'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'lisbon',
      title: 'Lisbon — EMEL',
      content: [
        { kind: 'paragraph', text: 'EMEL (Empresa Municipal de Mobilidade e Estacionamento de Lisboa) manages all paid parking in the city. Residents of one of Lisbon’s 24 freguesias can obtain a dístico de residente.' },
        { kind: 'substeps', items: [
          { id: 'l1', title: 'Requirements', content: [
            { kind: 'checklist', items: [
              'Proof of residence — Atestado de Residência from the Junta de Freguesia in the parking zone (not the neighbouring one)',
              'The vehicle is registered under your NIF with IMT (not under someone else)',
              'Valid roadworthiness inspection (IPO) and insurance',
              'IUC paid (no debts)'
            ]}
          ]},
          { id: 'l2', title: 'Where to apply', content: [
            { kind: 'paragraph', text: 'EMEL.pt → Dísticos → “Pedir Dístico” — online via Chave Móvel Digital. Or at an EMEL office (Av. Casal Ribeiro). Issued within 7-14 days.' }
          ]},
          { id: 'l3', title: 'Price', content: [
            { kind: 'checklist', items: [
              '1st car: €12/year (the first year is often free)',
              '2nd car in the household: €36/year',
              'Each additional car: €72/year',
              'Dístico de visitante (visitor): €24/year + time restrictions',
              'Pensioners 65+ — 50% discount'
            ]}
          ]},
          { id: 'l4', title: 'Zones', content: [
            { kind: 'paragraph', text: 'The dístico is valid ONLY in your freguesia. For neighbouring areas, you must pay hourly. Electric vehicles and hybrids have a separate tariff, plus free parking in some zones (see below).' }
          ]}
        ]}
      ]
    },
    {
      id: 'cascais',
      title: 'Cascais — Cascais Próxima',
      content: [
        { kind: 'paragraph', text: 'Cascais municipality issues resident parking through Cascais Próxima. Municipal residents receive the viver Cascais card (municipal ID), which gives access to discounted parking.' },
        { kind: 'checklist', items: [
          'First — obtain the viver Cascais card (see separate guide)',
          'After activation — apply for the dístico at cascaisproxima.pt',
          'First year: free',
          'After that: €10-30/year depending on the zone',
          'Works in the centre of Cascais and Estoril — in other areas of the municipality (Alcabideche, São Domingos de Rana) parking is free'
        ]}
      ]
    },
    {
      id: 'setubal',
      title: 'Setúbal — Câmara Municipal',
      content: [
        { kind: 'checklist', items: [
          'Atestado de Residência from Junta de Freguesia + vehicle registration under your NIF',
          'Apply at Divisão de Trânsito, Rua Dr. Francisco Santana Ramos',
          'Cartão de Residente for parking — €20/year',
          'Works in central Setúbal; Azeitão, Palmela and beyond — free parking'
        ]}
      ]
    },
    {
      id: 'ev-benefits',
      title: 'Free parking for electric vehicles',
      content: [
        { kind: 'checklist', items: [
          'Lisbon: EMEL — first 2 hours free for electric vehicles with a green number plate (MEV marking)',
          'Porto: parking for electric vehicles — 50% discount in municipal zones',
          'Cascais: free parking for electric vehicles at municipal charging stations',
          'Nationwide: free parking in Mobi.E charging zones while charging',
          'Distinguishing mark: electric vehicles receive a separate symbol in the registration certificate + a green number-plate frame'
        ]}
      ]
    },
    {
      id: 'fines',
      title: 'Fines without a dístico',
      content: [
        { kind: 'checklist', items: [
          'Parking without a dístico or payment: €30-50 (if paid promptly)',
          'Parking in a disabled bay without documentation: €120 (fine + penalty point)',
          'Towing: €80-150 + storage €15/day',
          '50% discount when paid within 15 days (minimum fine amount)',
          'Appeal the fine — via EMEL.pt or Câmara, deadline 30 days'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Lisbon EMEL dístico (1st car)', amountEUR: 12, note: '/year, often 1st year free' },
    { label: 'Lisbon EMEL dístico (2nd car)', amountEUR: 36, note: '/year' },
    { label: 'Cascais dístico', amountEURMin: 10, amountEURMax: 30, note: '/year, 1st free' },
    { label: 'Setúbal cartão residente', amountEUR: 20, note: '/year' },
    { label: 'Fine without a dístico', amountEURMin: 30, amountEURMax: 50 }
  ],
  sources: [
    { title: 'EMEL — Dísticos', url: 'https://www.emel.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Cascais Próxima — Parking', url: 'https://www.cascaisproxima.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Câmara Municipal de Setúbal — Traffic', url: 'https://www.mun-setubal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
