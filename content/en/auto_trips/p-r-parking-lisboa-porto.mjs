export default {
  editorialVoice: 'hackportugal',
  id: 'p-r-parking-lisboa-porto',
  categoryId: 'auto_trips',
  title: 'Park & Ride (P+R): parking by metro and train stations in Lisbon and Porto',
  tldr: 'P+R in Portugal is not a single government programme, but a mix of free, cheap and ordinary paid car parks by Metro, CP, Fertagus and major terminals. In 2026, the realistic way to save money is this: leave the car on the outskirts or at an interchange, then continue by Navegante/Andante. In Lisbon, Sete Rios and Cais do Sodré are convenient, but usually paid and central; Senhor Roubado, Pragal, Estádio Nacional are typical “park and ride” options. In Porto, look at Rio Tinto, Senhora da Hora, Estádio do Dragão, Campanhã; Trindade is central, not a cheap P+R.',
  tags: ['parking', 'lisbon', 'porto', 'metro'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'concept',
      title: 'How P+R works in Portugal',
      content: [
        { kind: 'paragraph', text: 'Park & Ride here is more often called parques dissuasores or simply parques junto à estação. The idea is simple: do not drive into the centre, leave the car by the metro, CP, Fertagus or a bus terminal and continue by public transport.' },
        { kind: 'paragraph', text: 'The main trap: “P+R” does not automatically mean free. One site may be a free municipal car park, another a private underground car park, and a third an EMEL car park with an hourly tariff. Tariffs and rules change more often than metro maps, so before travelling check the operator’s website or the sign at the entrance.' },
        { kind: 'checklist', items: [
          'Look for the words: parque dissuasor, estacionamento, parque junto à estação, interface',
          'Check the maximum daily tariff: sometimes 24 hours is cheaper than 6 hours in the centre',
          'Check the timetable for the last Metro/CP/Fertagus back',
          'Do not leave belongings on the seats: P+R sites are often near major junctions',
          'Keep the parking ticket until you leave; payment is usually at a machine before getting into the car',
          'For daily journeys, monthly Navegante or Andante passes are better value than single tickets'
        ] }
      ]
    },
    {
      id: 'lisboa',
      title: 'Lisbon: where to leave the car 🚗 + Metro/CP',
      content: [
        { kind: 'paragraph', text: 'In Greater Lisbon there is no single map of all free P+R sites. The practical approach is to choose parking by your direction of entry: north via Odivelas/Loures, west via Oeiras/Cascais, south via Almada/Pragal, east via Oriente/Moscavide.' },
        { kind: 'checklist', items: [
          'Senhor Roubado / Odivelas — convenient for entering from the north and changing to the Linha Amarela Metro; check the actual parking status on site',
          'Sete Rios — a strong transport hub: Metro, CP, Rede Expressos buses; usually this is not a “free outskirts” option, but a paid city option',
          'Cais do Sodré — convenient for Linha Verde, CP Cascais and ferries, but this is the centre; use it only if you specifically need this hub, not savings',
          'Pragal — a good option from the south: Fertagus to Entrecampos/Sete Rios/Roma-Areeiro, with access nearby from Almada and the A2; car parks are often paid, but cheaper than the centre',
          'Estádio Nacional / Cruz Quebrada / Algés — suitable for the western Oeiras–Lisboa corridor and changing to CP Cascais, but on event days car parks may be closed',
          'Oriente / Moscavide / Encarnação — eastern entry, airport, Parque das Nações; many paid car parks, free spaces disappear quickly in the morning'
        ] },
        { kind: 'warning', text: 'Do not leave the car “like everyone else” on the roadside by stations. In Lisbon and the suburbs, Polícia Municipal, EMEL and municipal tow trucks operate regularly. A fine + reboque can easily turn free parking into the most expensive trip of the week.' }
      ]
    },
    {
      id: 'porto',
      title: 'Porto: Metro do Porto and suburban parking',
      content: [
        { kind: 'paragraph', text: 'In Porto, the P+R logic is usually better: Metro do Porto directly links the suburbs, airport, Matosinhos, Maia, Gondomar and the centre. The most convenient scenario is to leave the car not in Baixa, but by a station outside the historic centre and travel in with Andante.' },
        { kind: 'checklist', items: [
          'Rio Tinto — a practical eastern option for entering from the Gondomar/Valongo side and changing to Metro/train',
          'Senhora da Hora — a major Metro interchange for Matosinhos, Póvoa, the airport and the centre; car parks around the station can fill up quickly',
          'Estádio do Dragão — convenient by the VCI and Metro, but on FC Porto match days and during events, parking arrangements change',
          'Campanhã — a major CP, Metro and bus hub; convenient for trains, but car parks are more often paid and busy',
          'Trindade — the main Metro interchange in the centre; this is not a cheap P+R, but a place for a short city stop, if there are any spaces at all',
          'Aeroporto / Verdes / Botica — options for those coming from Maia/Vila do Conde/Póvoa who want to continue to the centre by Metro'
        ] },
        { kind: 'paragraph', text: 'On the Metro do Porto website, check the station, line, parking availability and nearby stops. In 2026, payment rules and space availability depend on the specific car park operator, not only on Metro.' }
      ]
    },
    {
      id: 'money',
      title: 'How much it costs in 2026',
      content: [
        { kind: 'paragraph', text: 'Free spaces exist, but there are fewer than old forum posts suggest. At popular hubs, the free zone is often full by 08:00–09:00, while paid parques nearby operate with hourly or daily tariffs.' },
        { kind: 'checklist', items: [
          'Free: open municipal car parks by some stations and stadiums, if there is no event or restriction',
          'Cheap: peripheral car parks with a daily tariff of around €1–4',
          'Mid-range: interchange stations and shopping areas — often €4–10 per day',
          'Expensive: Cais do Sodré, Baixa, Trindade, Parque das Nações, airport — treat as ordinary city parking',
          'Plus transport: a single Metro/CP ticket or monthly Navegante/Andante',
          'For a daily commute, count not only parking, but also fuel, portagens, IUC and the time needed to enter the centre'
        ] },
        { kind: 'warning', text: 'Do not rely on Google Maps as a price source. It often shows “free parking” based on user reviews, but does not know about new parking meters, night restrictions, Câmara Municipal works or matches.' }
      ]
    },
    {
      id: 'routine',
      title: 'Practical daily routine',
      content: [
        { kind: 'substeps', items: [
          { id: 'route', title: '1. Choose the transport line, not the car park', content: [
            { kind: 'paragraph', text: 'First decide where you need to go in the centre: Saldanha, Baixa-Chiado, Entrecampos, São Bento, Trindade, Aliados. Then choose a station on the same line so you do not make unnecessary changes.' }
          ] },
          { id: 'backup', title: '2. Keep a backup option', content: [
            { kind: 'paragraph', text: 'For each trip, have a “plan B” 1–2 stations further along. If Senhor Roubado, Senhora da Hora or Pragal are full, do not spend 20 minutes circling — drive to the next station.' }
          ] },
          { id: 'payment', title: '3. Check payment before leaving', content: [
            { kind: 'paragraph', text: 'See how to pay: Multibanco, card, MB WAY, machine, operator app. Some car parks require payment before exit, not at the barrier.' }
          ] },
          { id: 'security', title: '4. Leave the car “empty”', content: [
            { kind: 'paragraph', text: 'Put bags, sat nav, cables, documents, glasses and children’s items in the boot before entering the car park. Do not do this visibly once you are already there.' }
          ] }
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Open municipal car park by a station', amountEUR: 0, note: 'If there are no temporary restrictions, events or new parking meters' },
    { label: 'Peripheral P+R / parque dissuasor', amountEURMin: 1, amountEURMax: 4, note: 'Typical daily cost range; check the specific car park' },
    { label: 'City car park by a major hub', amountEURMin: 4, amountEURMax: 10, note: 'Sete Rios, Campanhã, Oriente and similar hubs often fall into this category' },
    { label: 'Central parking', amountEURMin: 10, amountEURMax: 25, note: 'Cais do Sodré, Baixa, Trindade, airport and tourist areas' }
  ],
  sources: [
    { title: 'EMEL: official map and list of Lisboa car parks', url: 'https://www.emel.pt/pt/onde-estacionar/parques', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Metro do Porto: stations, lines and passenger information', url: 'https://www.metroporto.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Metro Lisboa: network, stations and journey planning', url: 'https://www.metrolisboa.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'CP Comboios de Portugal: urban and suburban trains', url: 'https://www.cp.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
