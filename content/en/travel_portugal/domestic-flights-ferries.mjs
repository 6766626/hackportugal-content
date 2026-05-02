export default {
  editorialVoice: 'hackportugal',
  id: 'domestic-flights-ferries',
  categoryId: 'travel_portugal',
  title: 'Domestic flights and ferries — Madeira, the Azores, mainland Portugal',
  tldr: 'For travel between the mainland and the islands, flying is essential. TAP and Ryanair fly Lisbon/Porto → Madeira (Funchal) / the Azores (Ponta Delgada). In the Azores, subsidised prices apply for residents. Soflusa/Transtejo ferries cross the Tagus in Lisbon, Douro cruises run in Porto, and in the Azores there are ferries between the islands.',
  tags: ['plane', 'ferry', 'madeira', 'azores'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'airlines',
      title: 'Airlines',
      content: [
        { kind: 'substeps', items: [
          { id: 'a1', title: 'TAP Air Portugal', content: [
            { kind: 'paragraph', text: 'The national carrier. Lisbon/Porto → Funchal: 4–8 flights per day, 1.5 h. Lisbon → Ponta Delgada: daily, 2 h 30 min. Prices from €50 with early booking up to €300 in peak season.' }
          ]},
          { id: 'a2', title: 'Ryanair', content: [
            { kind: 'paragraph', text: 'Cheap tickets from €20 on Lisbon — Funchal and Porto — Faro flights. But there are supplements for luggage and seat selection. It is important to read the small print.' }
          ]},
          { id: 'a3', title: 'SATA / Azores Airlines', content: [
            { kind: 'paragraph', text: 'The Azores regional carrier. Inter-island flights: 10–30 min, €40–€80. There are also Lisbon → Azores flights.' }
          ]},
          { id: 'a4', title: 'Porto → Lisbon', content: [
            { kind: 'paragraph', text: 'TAP flies 8–10 times per day, 50 min. But the train or coach is often more economical once travel to the airport is included. The train is recommended.' }
          ]}
        ]}
      ]
    },
    {
      id: 'azores-residents',
      title: 'Azores — special conditions for residents',
      content: [
        { kind: 'paragraph', text: 'Residents of the Azores and Madeira receive subsidised fares on domestic flights — up to -80%. Proof of residency is required.' },
        { kind: 'paragraph', text: 'Buy via the “tarifa residente” fare on SATA or TAP, specifying your Madeira/Azores residence permit.' }
      ]
    },
    {
      id: 'ferries',
      title: 'Ferries',
      content: [
        { kind: 'substeps', items: [
          { id: 'f1', title: 'Tagus — Lisbon', content: [
            { kind: 'paragraph', text: 'Transtejo / Soflusa — ferries across the River Tagus. Main routes: Cacilhas (south bank, view of Lisbon), Barreiro, Seixal, Montijo, Trafaria. Pay with a Navegante card or a ticket. From Cais do Sodré/Belém.' }
          ]},
          { id: 'f2', title: 'Douro — Porto', content: [
            { kind: 'paragraph', text: 'Short cruises (6 bridges, 45 min, €18–€25) and long ones (as far as Régua, full day, €60–€100). For Porto residents — rabelo catamarans from Cais da Ribeira.' }
          ]},
          { id: 'f3', title: 'Azores islands — between islands', content: [
            { kind: 'paragraph', text: 'Atlânticoline — ferries between the islands. In season (April–October), all lines operate. In winter — restrictions apply. Between neighbouring islands: 1–2 h, €15–€30. Discounts for residents.' },
            { kind: 'link', text: 'atlanticoline.pt', url: 'https://www.atlanticoline.pt/' }
          ]},
          { id: 'f4', title: 'Madeira → Porto Santo', content: [
            { kind: 'paragraph', text: 'Porto Santo Line. Daily ferry Funchal → Porto Santo (a small island with beaches), 2.5 h, €30–€60.' }
          ]}
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Tips',
      content: [
        { kind: 'checklist', items: [
          'Madeira and the Azores have different climates. Madeira is consistently +20–25 °C, while the Azores have changeable weather',
          'For Madeira / the Azores, book in advance: in peak season, July–August, prices are twice as high',
          'Ferries in Lisbon: use the Navegante card, it is cheaper',
          'Airport → city: Lisbon, Alameda, metro €1.70, 20 min; Porto, Aeroporto, metro (purple line), €2.25, 30 min',
          'Ryanair — always take hand luggage, you have to pay extra for checked luggage',
          'TAP Miles & Go — earn miles (possible via a Millennium BCP card)'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'TAP Air Portugal', url: 'https://www.flytap.com/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'SATA Azores Airlines', url: 'https://www.azoresairlines.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Atlânticoline', url: 'https://www.atlanticoline.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Transtejo Soflusa — ferries across the Tagus', url: 'https://ttsl.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 180
}
