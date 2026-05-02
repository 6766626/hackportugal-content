export default {
  editorialVoice: 'hackportugal',
  id: 'algarve-living',
  categoryId: 'travel_portugal',
  title: 'The Algarve for expats — life by the sea',
  tldr: 'The southern coast. Sunny 300 days a year, +18–28°C all year round. Faro is the main city and airport. Popular places to live: Tavira (authentic), Lagos (active), Albufeira (touristy), Portimão (practical). Seasonality: in summer prices are 3 times higher, in winter it is empty. International community, English is enough.',
  tags: ['algarve', 'faro', 'sea', 'retirement'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'cities',
      title: 'Main towns and cities',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Faro', content: [
            { kind: 'paragraph', text: 'The regional capital. Airport, university, public offices. Picturesque old town. Less touristy than the others. T1 €700–1,100.' }
          ]},
          { id: 'c2', title: 'Tavira', content: [
            { kind: 'paragraph', text: 'The most authentic — traditional fishing streets, bridges, salt lagoons. Quieter. T1 €600–1,000.' }
          ]},
          { id: 'c3', title: 'Lagos', content: [
            { kind: 'paragraph', text: 'Western Algarve. Active town, young people, surfing. Clubs. T1 €800–1,300.' }
          ]},
          { id: 'c4', title: 'Albufeira', content: [
            { kind: 'paragraph', text: 'The tourism capital. Crowds of Britons in summer. Good for family holidays. T1 €700–1,200 off season.' }
          ]},
          { id: 'c5', title: 'Portimão', content: [
            { kind: 'paragraph', text: 'A large, practical city. Hospitals, schools, Continente, everything nearby. Many expats. T1 €700–1,100.' }
          ]},
          { id: 'c6', title: 'Sagres / Vila do Bispo', content: [
            { kind: 'paragraph', text: 'The far west. Wild nature, surfing. Remote. T1 €500–800 in villages.' }
          ]}
        ]}
      ]
    },
    {
      id: 'why-live',
      title: 'Advantages of living there',
      content: [
        { kind: 'checklist', items: [
          'Climate: 300 days of sunshine, mild winter +15–18°C',
          'Beaches: among the best in Europe',
          'International community — Britons, Germans, Scandinavians, Russian speakers',
          'English is available everywhere — easy in the first year',
          'Less bureaucracy in smaller towns',
          'World-class golf courses',
          'Healthcare: good-quality private clinics (HPA Health Group)',
          'Rent is cheaper than in Lisbon',
          'Cheap domestic flights Lisbon — Faro'
        ]}
      ]
    },
    {
      id: 'cons',
      title: 'Disadvantages',
      content: [
        { kind: 'checklist', items: [
          'Seasonality: in summer rent is 3 times more expensive, restaurants are packed',
          'In winter many places are closed (especially in small towns)',
          'There is little work — everything is geared towards tourism and pensioners',
          'Far from Lisbon (3 h by train / 2.5 h by car)',
          'If you use “English only” — integration is weaker, with less Portuguese culture',
          'Children’s education: fewer international schools than in Lisbon/Porto',
          'Healthcare: SNS hospital in Faro, but complex operations are in Lisbon'
        ]}
      ]
    },
    {
      id: 'who-for',
      title: 'Who it is for',
      content: [
        { kind: 'checklist', items: [
          '👴 D7 pensioners — ideal',
          '💻 D8 digital nomads — excellent for summer, but it can be quiet in winter',
          '👨‍👩‍👧 Families with children — good if there is an international school nearby',
          '🏄 Surfers — western Algarve (Lagos, Sagres)',
          '🏌️ Golfers — Vilamoura, Vale do Lobo',
          '💼 NOT suitable for an IT/corporate career — Lisbon/Porto is better'
        ]}
      ]
    },
    {
      id: 'logistics',
      title: 'Logistics',
      content: [
        { kind: 'checklist', items: [
          '✈️ Faro Airport: Ryanair / EasyJet / TAP — direct flights to the UK/Germany/Netherlands/France',
          '🚆 CP: Faro ↔ Lisbon AP 3 h €30–40, IC 3 h 40 min €23',
          '🚌 Rede Expressos / FlixBus: the same 3–3.5 h, €20–30',
          '🚗 A car is almost essential for living outside towns and cities — distances',
          '🏥 HPA Faro / Lusíadas Algarve / Luz Saúde — private clinics',
          '🏫 Nobel International, Prime School, International School of the Algarve — for children',
          '🛒 Continente, Pingo Doce, Lidl, Aldi, Jumbo — everywhere'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Turismo do Algarve — official', url: 'https://www.visitalgarve.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'CCDR Algarve — regional administration', url: 'https://www.ccdr-alg.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AMAL — association of Algarve municipalities', url: 'https://www.amal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}
