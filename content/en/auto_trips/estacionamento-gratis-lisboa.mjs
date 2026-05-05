export default {
  editorialVoice: 'hackportugal',
  id: 'estacionamento-gratis-lisboa',
  categoryId: 'auto_trips',
  title: 'Free parking in Lisbon — where to leave your car without EMEL',
  tldr: 'There is still free parking in Lisbon, but not in the centre: look for spots fora da zona EMEL by Monsanto, on the periphery of Parque das Nações, in specific pockets of Belém/Algés and on the edges of Alvalade. In most EMEL zones Sundays and feriados are free; in many zona azul Saturdays after 13:00 are also free, but the street sign decides. In 2026, always check the EMEL sign and map: zone boundaries change, and a fine for non-payment will quickly eat up any savings.',
  tags: ['parking', 'lisboa', 'emel', 'car'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'rule',
      title: 'Main rule: the EMEL sign determines what is free',
      content: [
        { kind: 'paragraph', text: 'In Lisbon, paid on-street parking is managed by EMEL. If there is a parquímetro, EMEL road markings or a tariff zone sign, rely not on Google Maps but on the sign on the spot: it states the days, hours and the type of zone.' },
        { kind: 'checklist', items: [
          'Look for the phrase fora da zona EMEL or the absence of a parquímetro and EMEL signs along the entire stretch of the street.',
          'Sundays are usually free in standard EMEL on-street zones.',
          'Feriados — public holidays — are usually free too, unless the sign says otherwise.',
          'In many zona azul, Saturday after 13:00 is free too, but this is not a universal rule for all Lisboa.',
          'In high-demand zones near Baixa, Chiado, Avenida, Santos, Príncipe Real, Parque das Nações and Belém, there may be extended hours or paid Saturdays.',
          'White markings do not always mean free: in Lisbon, EMEL paid bays often also look like ordinary white bays.',
          'Yellow markings, cargas e descargas bays, residentes, táxis, polícia, mobilidade reduzida — are not free parking for everyone.',
          'If in doubt, open the EMEL map or the ePark app and check the street by geolocation.'
        ] },
        { kind: 'warning', text: 'Do not leave the car "for 5 minutes" without paying in an EMEL zone. Inspectors patrol on foot and in cars with cameras. Incorrect parking by a crossing, on the pavement or in a residents-only bay can end with a fine and towing.' }
      ]
    },
    {
      id: 'free-areas',
      title: 'Where to actually look for free spots 🚗',
      content: [
        { kind: 'paragraph', text: 'Free spaces in Lisbon are not one big car park, but a set of pockets on the periphery of the paid network. Below are practical directions where your chances are higher than in the historic centre.' },
        { kind: 'substeps', items: [
          { id: 'monsanto', title: 'Monsanto', content: [
            { kind: 'paragraph', text: 'Parque Florestal de Monsanto is the most reliable option for a few hours of free parking: parking lay-bys by viewpoints, sports areas and trails are usually not part of the EMEL on-street network.' },
            { kind: 'checklist', items: [
              'Good for walks, cycling, picnics and as park-and-ride if you continue by Uber/taxi.',
              'Check barriers and night restrictions at specific car parks.',
              'Do not leave belongings in the car: tourist vehicles are noticeable here.',
              'Not convenient on foot for the centre, but handy if you live/are heading via Benfica, Campolide, Alcântara.'
            ] }
          ] },
          { id: 'belem', title: 'Belém and the riverfront towards Algés', content: [
            { kind: 'paragraph', text: 'In Belém, next to tourist spots, there are many paid and occupied bays, but free pockets can still be found further west and along the Tagus towards Algés/Oeiras, especially if you move away from Mosteiro dos Jerónimos and Torre de Belém.' },
            { kind: 'checklist', items: [
              'Look for stretches without EMEL parquímetros and without zona tarifada signs.',
              'By MAAT, CCB, Pastéis de Belém and on the main streets, expect paid parking or a full house instead.',
              'At weekends, arrive in the morning: by lunchtime the riverfront gets jammed.',
              'Do not park on the cycle path, passeio or in the tourist coach area.'
            ] }
          ] },
          { id: 'parque-nacoes', title: 'Parque das Nações — only the periphery', content: [
            { kind: 'paragraph', text: 'By the Oceanário, Gare do Oriente, Altice Arena and Vasco da Gama, parking is mostly paid or commercial. Free chances are on the periphery: closer to Moscavide, Olivais, Sacavém and the northern/eastern edges of the district, where certain streets may be outside EMEL.' },
            { kind: 'checklist', items: [
              'Check the zone boundary: paid and free streets can alternate every other block.',
              'For concerts and football, arrive early or use the Linha Vermelha metro.',
              'Do not confuse a free street with moradores/residentes bays.',
              'If you see a parquímetro, pay, even if the adjacent street is free.'
            ] }
          ] },
          { id: 'alvalade', title: 'Alvalade and Campo Grande — outskirts, not the core', content: [
            { kind: 'paragraph', text: 'Inside Alvalade and by Avenida de Roma/Entrecampos there is a lot of EMEL. Free bays are more often on peripheral streets towards Lumiar, Telheiras, Olivais or by large sports/university areas, but the situation changes block by block.' },
            { kind: 'checklist', items: [
              'Look at the signs at the entrance to the street, not only beside the actual bay.',
              'By Campo Grande metro and the universities, spaces run out quickly on weekday mornings.',
              'Evenings and Sundays are easier, because many EMEL zones are free by schedule.',
              'If a street is packed with residents, do not leave the car on corners and pavements: they do tow.'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'weekend',
      title: 'Weekends: when EMEL becomes free',
      content: [
        { kind: 'paragraph', text: 'For short trips to the centre, the simplest hack is to come during free hours rather than hunting for a "secret" street. In 2026 the basic logic is this: Sundays and feriados are usually free; Saturdays depend on the zone and the sign.' },
        { kind: 'checklist', items: [
          'Zona azul: in many places Saturday after 13:00 and all of Sunday are free.',
          'On weekdays the standard paid period is often 09:00–19:00, but do not rely on this without checking the sign.',
          'Tourist and commercial areas may have special hours, including Saturdays.',
          'If the sign says sábado 09:00–13:00, after 13:00 you do not need to pay.',
          'If the sign says sábado 09:00–19:00 or another extended regime, pay until the stated time.',
          'At night parking may be free as per EMEL, but trânsito, residentes and cargas e descargas restrictions still apply.',
          'In underground car parks run by EMEL/private operators, weekends do not automatically become free.'
        ] },
        { kind: 'warning', text: 'Do not use old tips from 2018–2023 blogs: EMEL has expanded its zones, and schedules on individual streets have changed. In 2026 the final rule is the sign on the street and the EMEL map.' }
      ]
    },
    {
      id: 'how-to-check',
      title: 'How to check a spot in 30 seconds',
      content: [
        { kind: 'paragraph', text: 'Before you walk away from the car, do a mini-check. It is quicker than later arguing about a fine in Portuguese.' },
        { kind: 'checklist', items: [
          'Look at the start of the street: is there an EMEL sign with the zone colour and horário?',
          'Find the nearest parquímetro. If there is one, the street is almost certainly paid during the specified hours.',
          'Open the EMEL website or the ePark app and check your geolocation.',
          'Compare the street numbers: sometimes one side of the street is in the zone, the other is not.',
          'Check additional plates: residentes, cargas e descargas, obras, feira, escola, bombeiros.',
          'Photograph the sign if you are leaving the car on a zone boundary.',
          'If a spot feels too good for central Lisboa, double-check: it is often a loading bay or a place for residents.'
        ] },
        { kind: 'paragraph', text: 'For expats without the Portuguese habit of reading road signs, the simple rule is: if you are not sure, it is better to pay via ePark/Multibanco or move the car to an obviously free stretch.' }
      ]
    },
    {
      id: 'dont-do',
      title: 'What not to do',
      content: [
        { kind: 'checklist', items: [
          'Do not park on the passeio: in Lisbon locals do this a lot, but fines are real.',
          'Do not take bays signed residentes/moradores without a dístico de residente.',
          'Do not leave the car on a yellow line or by rubbish bins.',
          'Do not block the elétrico, a bus lane or a garagem entrance.',
          'Do not assume that "everyone parks like this" — towing is selective, especially near tourist areas.',
          'Do not leave bags, a laptop, suitcases or documents in the car, especially in Belém, Monsanto, miradouros and on routes to the beaches.',
          'Do not forget about IUC, insurance and inspeção: free parking does not save you from police checks.'
        ] },
        { kind: 'warning', text: 'If your car is towed, you typically need to locate it via Polícia Municipal/EMEL and pay the fine plus reboque/depósito. That easily turns "free" parking into the most expensive option of the day.' }
      ]
    }
  ],
  costs: [
    { label: 'Free on-street parking outside the EMEL zone', amountEUR: 0, note: 'Only if there are no EMEL signs, residents-only restrictions and no-stopping bans.' },
    { label: 'Parking during EMEL free hours', amountEUR: 0, note: 'Usually Sundays and feriados; Saturday after 13:00 — in many zona azul, but check the sign.' }
  ],
  sources: [
    { title: 'EMEL — Dístico Verde (on-street parking for 100% electric vehicles)', url: 'https://www.emel.pt/pt/disticos/estacionamento-na-via-publica/distico-verde/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-05' },
    { title: 'EMEL — meu perfil (management of dísticos and zones)', url: 'https://meuperfil.emel.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-05' },
    { title: 'EMEL — official website of the Lisbon parking operator', url: 'https://www.emel.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
