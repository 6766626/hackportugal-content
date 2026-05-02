export default {
  editorialVoice: 'hackportugal',
  id: 'carris-metropolitana',
  categoryId: 'public_transport',
  title: 'Carris Metropolitana — bus operator for Greater Lisbon',
  tldr: 'Carris Metropolitana is the unified suburban bus network of the Área Metropolitana de Lisboa, launched in stages from 2022. It is not the city operator Carris Lisboa: the operator covers 15 municipalities around Lisbon, including Sintra, Loures, Mafra, Oeiras, Almada, Setúbal, Montijo. In 2026, the main payment method is Navegante: €30 for a municipal pass or €40 for a metropolitano. Routes have four-digit numbers; check timetables frequently in the app or on the website.',
  tags: ['buses', 'navegante', 'lisbon', 'transport'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'What Carris Metropolitana is',
      content: [
        { kind: 'paragraph', text: 'Carris Metropolitana is the brand of the Área Metropolitana de Lisboa bus network. It was created to replace fragmented private operators with a single system of routes, numbering, timetables and integration with Navegante.' },
        { kind: 'paragraph', text: 'The rollout took place in stages from 2022. As a result, long-term residents and Google Maps may still show old names for lines, stops and operators. In 2026, use carrismetropolitana.pt, the Carris Metropolitana app and Navegante as your reference points.' },
        { kind: 'checklist', items: [
          'These are Greater Lisbon buses, not the metro and not the train',
          'This is not Carris Lisboa: city buses inside Lisboa are operated by Carris',
          'Carris Metropolitana routes often serve major Lisboa transport hubs: Oriente, Campo Grande, Colégio Militar, Sete Rios, Cais do Sodré',
          'The network operates in 15 municipalities of the Área Metropolitana de Lisboa',
          'Cascais is mainly served by the separate MobiCascais network, although journeys to neighbouring zones may overlap with Navegante',
          'Barreiro has its own municipal operator, TCB',
          'Route numbers have four digits: this is normal, not an error'
        ] }
      ]
    },
    {
      id: 'coverage',
      title: 'Where it runs: zones and municipalities',
      content: [
        { kind: 'paragraph', text: 'The network is divided into operating zones. For passengers, the route number, direction and type of Navegante pass matter more than the zone colour. But the zones help explain why a bus in Sintra looks the same as a bus in Setúbal.' },
        { kind: 'checklist', items: [
          'Área 1: Amadora, Oeiras, Sintra and links with Lisboa',
          'Área 2: Loures, Mafra, Odivelas, Vila Franca de Xira and links with Lisboa',
          'Área 3: Almada, Seixal, Sesimbra and the south bank of the Tejo',
          'Área 4: Alcochete, Moita, Montijo, Palmela, Setúbal',
          'Inside the city of Lisboa: usually Carris, Metro, CP, Fertagus and Transtejo/Soflusa, not Carris Metropolitana',
          'Cascais: check MobiCascais and CP Linha de Cascais',
          'Barreiro: check TCB and river crossings'
        ] },
        { kind: 'warning', text: 'Do not buy a pass based only on the city name. If you live in Sintra and work in Lisboa, you almost always need the €40 Navegante Metropolitano, not the €30 municipal pass.' }
      ]
    },
    {
      id: 'tickets',
      title: 'Payment: Navegante, pass and single journeys',
      content: [
        { kind: 'paragraph', text: 'In 2026, Carris Metropolitana is integrated into the Navegante system. The simplest scenario for an expat: get a personal Navegante card, load a monthly pass and validate the card every time you board a bus.' },
        { kind: 'checklist', items: [
          'Navegante Municipal — €30 per month, valid within one selected municipality',
          'Navegante Metropolitano — €40 per month, valid across the whole Área Metropolitana de Lisboa',
          'The pass is valid on participating operators: Carris Metropolitana, Carris, Metro Lisboa, CP within the AML, Fertagus, Transtejo/Soflusa and others under Navegante rules',
          'Validate the card every time you board, even if you have a monthly pass',
          'Top-ups are possible at Metro/CP machines, Payshop, some kiosks and through supported apps/cash machines depending on the card',
          'Single tickets from the driver are usually less cost-effective and may not provide proper transfers',
          'For daily journeys between municipalities, a €40 pass is almost always better value than separate tickets'
        ] },
        { kind: 'warning', text: 'If the validator does not work, do not ignore it. During an inspection, the argument "I have a pass, but I did not tap the card" can end in a fine. Try a second validator or tell the driver immediately.' }
      ]
    },
    {
      id: 'route-numbers',
      title: 'How to read routes and avoid going the wrong way',
      content: [
        { kind: 'paragraph', text: 'After the transition to Carris Metropolitana, many old numbers disappeared. New lines usually have 4 digits. The same stop may have different platforms for each direction, and one direction may have variants via different bairros.' },
        { kind: 'checklist', items: [
          'Always check the final stop, not only the route number',
          'Look at the direction on the bus electronic display',
          'At the stop, scan the QR code: it leads to the current timetable',
          'In the Carris Metropolitana app, enable geolocation and favourite stops',
          'Check the timetable separately for dias úteis, sábado, domingo and feriado',
          'In the evening, on Sundays and on public holidays, intervals can increase sharply',
          'In the suburbs, the last bus may leave much earlier than in Lisboa',
          'Google Maps is useful, but if it differs from the official website, trust Carris Metropolitana'
        ] },
        { kind: 'paragraph', text: 'A typical newcomer mistake: choosing a route based on the nearest stop but failing to notice that the bus goes in the opposite direction or makes a long loop through neighbouring areas. In the suburbs, this can add 30–50 minutes.' }
      ]
    },
    {
      id: 'daily-use',
      title: 'Everyday practical use',
      content: [
        { kind: 'substeps', items: [
          { id: 'before-moving', title: 'Before renting a home', content: [
            { kind: 'paragraph', text: 'Check not only the distance to Lisboa, but also the real bus timetable in the morning and evening. A home 18 km from the office may be worse than a home 35 km away if there is no frequent line to the train or metro.' },
            { kind: 'checklist', items: [
              'Find the nearest stops on carrismetropolitana.pt',
              'Check the first and last service on a working day',
              'Check Sunday and feriados',
              'Look at the connection to CP, Metro, Fertagus or barco',
              'Compare travel time at 08:00 and at 22:00',
              'Check whether you need only a municipal pass or metropolitano'
            ] }
          ] },
          { id: 'commuting', title: 'For the daily commute', content: [
            { kind: 'paragraph', text: 'Keep 2–3 alternative routes saved. In the suburbs, one cancelled service can break the entire chain of connections, especially if you then have a CP train or a Transtejo/Soflusa ferry.' },
            { kind: 'checklist', items: [
              'Keep your Navegante topped up before the 1st day of the month',
              'Arrive at the stop 3–5 minutes early',
              'Watch avisos and alterações on the operator website',
              'During strikes, check minimum services',
              'For Lisboa airport, a bus + Metro combination is often faster than a direct suburban bus'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'problems',
      title: 'If the bus does not arrive or the route has changed',
      content: [
        { kind: 'paragraph', text: 'Carris Metropolitana regularly publishes route changes, temporary diversions, stop cancellations due to works and timetable adjustments. This is especially noticeable in new neighbourhoods, near schools, industrial zones and during Câmara Municipal roadworks.' },
        { kind: 'checklist', items: [
          'Check avisos on carrismetropolitana.pt',
          'Compare the timetable at the stop with the timetable in the app',
          'Make sure today is not a feriado municipal',
          'Check whether the stop has been moved to a neighbouring rua',
          'Take a photo of the route number, stop and time if you want to file a complaint',
          'For a systemic complaint, use Livro de Reclamações Eletrónico or the operator contact details',
          'If punctuality is critical, build a route via CP/Metro/Fertagus, where intervals are usually more predictable'
        ] },
        { kind: 'warning', text: 'In the suburbs, do not schedule legal appointments, AIMA, Finanças, IMT exams or medical visits "down to the minute" using only one bus. Allow at least a 30–45 minute buffer.' }
      ]
    }
  ],
  costs: [
    { label: 'Navegante Municipal', amountEUR: 30, note: 'Monthly pass within one municipality of the Área Metropolitana de Lisboa' },
    { label: 'Navegante Metropolitano', amountEUR: 40, note: 'Monthly pass across the whole Área Metropolitana de Lisboa; usually needed for suburb ↔ Lisboa journeys' },
    { label: 'Personal Navegante card', amountEURMin: 7, amountEURMax: 12, note: 'Standard issuing is cheaper, urgent issuing is more expensive; the price depends on the issuing point and timeframe' }
  ],
  sources: [
    { title: 'Official Carris Metropolitana website: routes, timetables, avisos', url: 'https://www.carrismetropolitana.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Official Navegante portal: fares and passes in the Área Metropolitana de Lisboa', url: 'https://www.navegante.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Transportes Metropolitanos de Lisboa: information on the network and operators', url: 'https://www.tmlmobilidade.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
