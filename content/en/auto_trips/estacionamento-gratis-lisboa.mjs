export default {
  editorialVoice: 'hackportugal',
  id: 'estacionamento-gratis-lisboa',
  categoryId: 'auto_trips',
  title: 'Free parking in Lisbon — where to leave your car without EMEL',
  tldr: 'Free parking still exists in Lisbon, but not in the centre: look for spaces fora da zona EMEL near Monsanto, on the outskirts of Parque das Nações, in specific pockets of Belém/Algés and on the edges of Alvalade. In most EMEL zones, Sunday and feriados are free; in many zona azul areas, Saturday after 13:00 is also free, but the street sign is what matters. In 2026, check the EMEL sign and map: zone boundaries change, and the fine for not paying quickly wipes out any saving.',
  tags: ['parking', 'lisbon', 'emel', 'car'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'rule',
      title: 'The main rule: whether it is free is determined by the EMEL sign',
      content: [
        { kind: 'paragraph', text: 'In Lisbon, paid on-street parking is managed by EMEL. If there is a parking meter, EMEL markings or a sign showing a tariff zone on the street, do not rely on Google Maps: rely on the sign on site. It states the days, hours and type of zone.' },
        { kind: 'checklist', items: [
          'Look for the phrase fora da zona EMEL or for the absence of parking meters and EMEL signs along the whole stretch of street.',
          'Sunday is usually free in standard EMEL on-street zones.',
          'Feriados — public holidays — are also usually free, unless the sign says otherwise.',
          'In many zona azul areas, Saturday after 13:00 is free, but this is not a universal rule for all of Lisboa.',
          'In high-demand zones, near Baixa, Chiado, Avenida, Santos, Príncipe Real, Parque das Nações and Belém, there may be extended hours or paid Saturday parking.',
          'White markings do not always mean free: in Lisbon, paid EMEL spaces often look like ordinary white spaces too.',
          'Yellow markings, cargas e descargas spaces, residentes, táxis, polícia, mobilidade reduzida — these are not free parking for everyone.',
          'If in doubt, open the EMEL map or the ePark app and check the street by geolocation.'
        ] },
        { kind: 'warning', text: 'Do not leave the car “for 5 minutes” without paying in an EMEL zone. Enforcement officers patrol on foot and in cars with cameras. Incorrect parking near a crossing, on the pavement or in a residents’ space can end in a fine and towing.' }
      ]
    },
    {
      id: 'free-areas',
      title: 'Where to realistically look for free spaces 🚗',
      content: [
        { kind: 'paragraph', text: 'Free spaces in Lisbon are not one large car park, but a set of areas on the edge of the paid network. Below are practical directions where your chances are better than in the historic centre.' },
        { kind: 'substeps', items: [
          { id: 'monsanto', title: 'Monsanto', content: [
            { kind: 'paragraph', text: 'Parque Florestal de Monsanto is the most reliable option for free parking for a few hours: parking pockets near viewpoints, sports areas and trails are usually not part of the EMEL on-street network.' },
            { kind: 'checklist', items: [
              'Suitable for walks, cycling, picnics and as park-and-ride if you then continue by Uber/taxi.',
              'Check barriers and night-time restrictions at individual parking areas.',
              'Do not leave belongings in the cabin: tourist cars are noticeable here.',
              'It is inconvenient for walking into the centre, but convenient if you live in or are travelling via Benfica, Campolide, Alcântara.'
            ] }
          ] },
          { id: 'belem', title: 'Belém and the riverside towards Algés', content: [
            { kind: 'paragraph', text: 'In Belém, near the tourist sights, many spaces are paid or occupied, but free pockets can still be found further west and along the Tagus towards Algés/Oeiras, especially if you move away from Mosteiro dos Jerónimos and Torre de Belém.' },
            { kind: 'checklist', items: [
              'Look for stretches without EMEL parking meters and without zona tarifada signs.',
              'Around MAAT, CCB, Pastéis de Belém and on the main streets, expect paid parking or everything to be full.',
              'At weekends, arrive in the morning: by lunchtime the riverside fills up.',
              'Do not park on the cycle lane, passeio or in the tourist bus area.'
            ] }
          ] },
          { id: 'parque-nacoes', title: 'Parque das Nações — outskirts only', content: [
            { kind: 'paragraph', text: 'Near Oceanário, Gare do Oriente, Altice Arena and Vasco da Gama, parking is mostly paid or commercial. Your free-parking chances are on the outskirts: closer to Moscavide, Olivais, Sacavém and the northern/eastern edges of the district, where some streets may be outside EMEL.' },
            { kind: 'checklist', items: [
              'Check the zone boundary: paid and free streets may differ from one block to the next.',
              'For concerts and football, arrive early or use the metro Linha Vermelha.',
              'Do not confuse a free street with moradores/residentes spaces.',
              'If you see a parquímetro, pay, even if the neighbouring street is free.'
            ] }
          ] },
          { id: 'alvalade', title: 'Alvalade and Campo Grande — the edges, not the core', content: [
            { kind: 'paragraph', text: 'Inside Alvalade and around Avenida de Roma/Entrecampos there is a lot of EMEL. Free spaces are more often found on peripheral streets towards Lumiar, Telheiras, Olivais or near large sports/university areas, but the situation changes block by block.' },
            { kind: 'checklist', items: [
              'Look at the signs at the entrance to the street, not only next to the space itself.',
              'Near Campo Grande metro and the universities, spaces run out quickly on weekday mornings.',
              'It is easier in the evening and on Sunday, because many EMEL zones are free according to the timetable.',
              'If the street is packed with residents, it is better not to leave the car on corners or pavements: it may be towed.'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'weekend',
      title: 'Weekends: when EMEL becomes free',
      content: [
        { kind: 'paragraph', text: 'For short trips into the centre, the simplest life hack is to arrive during free hours rather than hunt for a “secret” street. In 2026, the basic logic is this: Sunday and feriados are usually free; Saturday depends on the zone and the sign.' },
        { kind: 'checklist', items: [
          'Zona azul: in many places, Saturday after 13:00 and all of Sunday are free.',
          'On weekdays, the standard paid period is often 09:00–19:00, but do not rely on this without checking the sign.',
          'Tourist and commercial areas may have special hours, including Saturday.',
          'If the sign says sábado 09:00–13:00 — after 13:00 you do not need to pay.',
          'If the sign says sábado 09:00–19:00 or another extended schedule — pay until the stated time.',
          'At night, parking may be free under EMEL, but restrictions for trânsito, residentes, cargas e descargas still apply.',
          'In underground car parks run by EMEL/private operators, weekends do not automatically become free.'
        ] },
        { kind: 'warning', text: 'Do not use old tips from 2018–2023 blogs: EMEL has expanded its zones, and timetables on individual streets have changed. In 2026, the final rule is the street sign and the EMEL map.' }
      ]
    },
    {
      id: 'how-to-check',
      title: 'How to check a space in 30 seconds',
      content: [
        { kind: 'paragraph', text: 'Before you walk away from the car, do a mini-check. It is faster than later arguing about a fine in Portuguese.' },
        { kind: 'checklist', items: [
          'Look at the start of the street: is there an EMEL sign with the zone colour and horário.',
          'Find the nearest parquímetro. If there is one, the street is almost certainly paid during the stated hours.',
          'Open the EMEL website or the ePark app and check the geolocation.',
          'Compare the street number: sometimes one side of the street is in the zone and the other is not.',
          'Check additional signs: residentes, cargas e descargas, obras, feira, escola, bombeiros.',
          'Photograph the sign if you are leaving the car on the zone boundary.',
          'If the space is too good for central Lisboa, check twice: it is often a loading bay or a space for residents.'
        ] },
        { kind: 'paragraph', text: 'For expats without the Portuguese habit of reading road signs, the rule is simple: if you are not sure, it is better to pay via ePark/Multibanco or move the car to a clearly free stretch.' }
      ]
    },
    {
      id: 'dont-do',
      title: 'What not to do',
      content: [
        { kind: 'checklist', items: [
          'Do not park on the passeio: in Lisbon, locals do it a lot, but fines are real.',
          'Do not occupy spaces with a residentes/moradores sign without a dístico de residente.',
          'Do not leave the car on a yellow line or next to rubbish containers.',
          'Do not block an elétrico, bus lane or entrance to a garagem.',
          'Do not assume that because “everyone parks like this” it is safe — towing is selective, especially near tourist areas.',
          'Do not leave bags, a laptop, suitcases or documents in the cabin, especially in Belém, Monsanto, miradouros and on routes towards the beaches.',
          'Do not forget about IUC, insurance and inspeção: free parking does not protect you from police checks.'
        ] },
        { kind: 'warning', text: 'If the car is towed, you usually need to locate it through Polícia Municipal/EMEL and pay a fine plus reboque/depósito. This can easily turn “free” parking into the most expensive option of the day.' }
      ]
    }
  ],
  costs: [
    { label: 'Free on-street parking outside the EMEL zone', amountEUR: 0, note: 'Only if there are no EMEL signs, residents’ restrictions or no-stopping prohibitions.' },
    { label: 'Parking during free EMEL hours', amountEUR: 0, note: 'Usually Sunday and feriados; Saturday after 13:00 — in many zona azul areas, but check the sign.' }
  ],
  sources: [
    { title: 'EMEL — Lisboa on-street parking zones and tariffs', url: 'https://www.emel.pt/pt/estacionamento/na-via-publica/zonas-e-tarifarios/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'EMEL — on-street parking and payment rules', url: 'https://www.emel.pt/pt/estacionamento/na-via-publica/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'EMEL — dísticos and residents’ zones', url: 'https://www.emel.pt/pt/estacionamento/na-via-publica/disticos/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'EMEL — official website of the Lisboa parking operator', url: 'https://www.emel.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
