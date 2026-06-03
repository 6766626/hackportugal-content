export default {
  editorialVoice: 'hackportugal',
  id: 'intercity-buses',
  categoryId: 'travel_portugal',
  title: 'Intercity buses in Portugal — Rede Expressos, FlixBus, Alsa',
  tldr: 'Main operators: Rede Expressos (Portugal’s main network, departures from Sete Rios), FlixBus (international routes and some routes within Portugal), Alsa (focused on Spain), EVA Transportes (south, Algarve)\.\n\nLisbon — Porto ≈ 3.5 hours, €15–25; Lisbon — Faro ≈ 3 hours, €20–30. It is better to book online: cheaper in advance.',
  tags: ['bus', 'flixbus', 'rede expressos', 'alsa'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'operators',
      title: 'Operators',
      content: [
        { kind: 'substeps', items: [
          { id: 'o1', title: 'Rede Expressos', content: [
            { kind: 'paragraph', text: 'Portugal’s main network. Covers all large and medium-sized cities. From Lisbon — Sete Rios coach station (Jardim Zoológico metro). Book on rede-expressos.pt or in the app. Prices €10–30 depending on the time.' },
          ]},
          { id: 'o2', title: 'FlixBus', content: [
            { kind: 'paragraph', text: 'German operator. Strong coverage on Lisbon — Porto, Lisbon — Faro routes, as well as international destinations (Spain, France, Germany). Best prices with early booking (from €5). Wi-Fi and sockets.' },
          ]},
          { id: 'o3', title: 'Alsa', content: [
            { kind: 'paragraph', text: 'Spanish operator. Good for routes to Spain (Madrid, Barcelona, Seville). Within Portugal — Lisbon — Porto, Lisbon — Faro. Often cheaper than FlixBus.' },
          ]},
          { id: 'o4', title: 'EVA Transportes', content: [
            { kind: 'paragraph', text: 'Regional Algarve operator. Good for travelling around the south (Faro — Tavira — Lagos).' },
          ]},
          { id: 'o5', title: 'Transdev / Rodonorte / other regional operators', content: [
            { kind: 'paragraph', text: 'For trips to small towns and villages. Timetables are published at the coach station of the relevant town, as well as on the IMT website — the transport regulator.' }
          ]}
        ]}
      ]
    },
    {
      id: 'prices-routes',
      title: 'Main routes (2026 prices)',
      content: [
        { kind: 'checklist', items: [
          'Lisbon ↔ Porto: 3.5 h, €15–25 (FlixBus from €5 when buying a week in advance)',
          'Lisbon ↔ Coimbra: 2 h, €10–15',
          'Lisbon ↔ Faro (Algarve): 3 h, €20–30',
          'Lisbon ↔ Évora (Alentejo): 1.5 h, €12–15',
          'Porto ↔ Braga: 1 h, €7–10',
          'Porto ↔ Guimarães: 50 min, €6–9',
          'Lisbon ↔ Madrid: 7–8 h, €30–60',
          'Porto ↔ Seville: 8–10 h, €40–70',
          'Lisbon ↔ Paris: 24–28 h, €90–150 (FlixBus only)'
        ]}
      ]
    },
    {
      id: 'booking',
      title: 'How to book',
      content: [
        { kind: 'substeps', items: [
          { id: 'b1', title: '1. Compare options', content: [
            { kind: 'paragraph', text: 'Compare prices directly on operators’ websites — this always gives the up-to-date picture. The ticket price changes dynamically depending on how full the service is and the day of the week.' }
          ]},
          { id: 'b2', title: '2. Book online', content: [
            { kind: 'paragraph', text: 'Booking directly on the operator’s website is usually the most reliable option. Best prices — 2–4 weeks before the trip; on the day of departure, fares are 30–70% higher.' }
          ]},
          { id: 'b3', title: '3. Ticket on your phone', content: [
            { kind: 'paragraph', text: 'The QR code arrives by email or is available in the app. There is no need to print it. Check the bus number and platform on the coach station departure board.' }
          ]}
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Practical tips',
      content: [
        { kind: 'checklist', items: [
          'The earlier you book, the cheaper it is. 2–4 weeks ahead — from €5 for FlixBus',
          'FlixBus and Alsa are more punctual than Rede Expressos, but overall they all work fine',
          'Luggage: usually 1 piece of hand luggage and 1 item in the luggage hold are included. There is a surcharge for a 2nd suitcase',
          'Wi-Fi is available on most modern coaches, but it is unreliable',
          'Long-distance services usually have a toilet',
          'Late evening and night buses help you save on accommodation',
          'Sete Rios in Lisbon — the main station. Oriente — also has some services',
          'In Porto — Terminal Intermodal de Campanhã (TIC), next to the Campanhã train and metro station'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'IMT — Portugal’s transport regulator', url: 'https://www.imt-ip.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AMT — Autoridade da Mobilidade e dos Transportes', url: 'https://www.amt-autoridade.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Rede Expressos — operator information', url: 'https://rede-expressos.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
