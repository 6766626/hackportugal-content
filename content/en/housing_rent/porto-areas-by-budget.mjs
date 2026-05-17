export default {
  editorialVoice: 'hackportugal',
  id: 'porto-areas-by-budget',
  categoryId: 'housing_rent',
  title: 'Where to live in Porto: areas by budget and family type',
  tldr: 'For a family in Porto Metro in 2026, the main choice is whether to pay for location or for space. Foz/Nevogilde and Boavista are convenient, but a T2 is often €1,500–€2,300/month. Matosinhos Sul gives you the sea and metro for €1,200–€1,900. Vila Nova de Gaia is cheaper with good links to the centre: T2 €950–€1,500. Maia is the best compromise for a family with a car, school and the airport: T2 €850–€1,250. Within Porto, cheaper options are Paranhos, Bonfim, Campanhã, but check noise, parking and the condition of the building.',
  tags: ['porto', 'rent', 'areas', 'family'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'budget-map',
      title: 'Quick budget map 🗺️',
      content: [
        { kind: 'paragraph', text: 'The guide ranges below are not official statistics, but practical ranges from listings and deals for long-term rentals in spring 2026. The price depends heavily on a lift, garage, energy efficiency, furniture, proximity to the metro and sea/river views.' },
        { kind: 'checklist', items: ['Foz do Douro / Nevogilde: premium by the ocean; T1 €1,100–€1,600, T2 €1,600–€2,500, T3 €2,300–€4,000', 'Boavista / Bessa / Pinheiro Manso: business axis, schools, offices; T1 €950–€1,350, T2 €1,400–€2,100, T3 €1,900–€3,000', 'Cedofeita / Baixa / Bonfim: centre and life without a car; T1 €850–€1,300, T2 €1,200–€1,800, T3 €1,600–€2,400', 'Paranhos / Constituição / Asprela: universities, São João, metro; T1 €750–€1,050, T2 €1,000–€1,450, T3 €1,300–€1,900', 'Campanhã: cheaper and changing quickly; T1 €700–€950, T2 €900–€1,300, T3 €1,150–€1,700', 'Matosinhos Sul / Leça / Senhora da Hora: sea, metro, shopping; T1 €850–€1,250, T2 €1,200–€1,900, T3 €1,600–€2,700', 'Vila Nova de Gaia: more square metres for the same money; T1 €700–€1,000, T2 €950–€1,500, T3 €1,250–€2,100', 'Maia: family suburb, airport, business parks; T1 €650–€900, T2 €850–€1,250, T3 €1,100–€1,700'] },
        { kind: 'warning', text: 'If the owner offers a “contract without recibos” or asks for 6–12 months in cash without a recibo de renda, this is a risk: without an official contract it is harder to obtain an atestado de residência, school enrolment, an IRS tax deduction and protection against unlawful eviction.' }
      ]
    },
    {
      id: 'by-family-type',
      title: 'Choice by family type',
      content: [
        { kind: 'substeps', items: [
          { id: 'solo-couple', title: 'One person or a couple without children', content: [
            { kind: 'paragraph', text: 'It is best to look at Cedofeita, Bonfim, Baixa, Boavista, Matosinhos Sul. You pay more for a T0/T1, but save time: cafés, coworking, metro, nightlife and taxis are cheaper than a daily car.' },
            { kind: 'checklist', items: ['If you work remotely — check street noise and window quality', 'If you fly often — Maia or Senhora da Hora are faster for the airport', 'If the ocean matters — Matosinhos Sul is more practical than Foz on price', 'If you want a “walkable city” — Cedofeita and Bonfim are more convenient than Gaia and Maia'] }
          ]},
          { id: 'family-kids', title: 'Family with children', content: [
            { kind: 'paragraph', text: 'Priorities change: school, bedrooms, lift, parking, park, access to Centro de Saúde. It is often more sensible to take a T3 in Gaia or Maia than a cramped T2 in central Porto.' },
            { kind: 'checklist', items: ['For international schools: Foz/Boavista are convenient for Oporto British School, CLIP and Lycée Français International de Porto', 'For a state school, the address matters: allocation depends on morada and the rules of the specific escola/agrupamento', 'Maia and Gaia more often provide a garage and newer buildings for less money', 'Foz is good for quality of life, but the budget for a T3 is rarely below €2,300/month', 'Paranhos is convenient for Hospital de São João and the university area, but check student density and parking'] }
          ]},
          { id: 'car-family', title: 'Family with a car', content: [
            { kind: 'paragraph', text: 'With a car, the search radius expands sharply: Maia, Valongo, Gondomar, Gaia further from the river, Leça da Palmeira. But calculate more than just rent: garage, portagens, fuel, IUC, parking at work and school.' },
            { kind: 'checklist', items: ['Look for garagem/box in the listing, not “estacionamento fácil”', 'Check access to the A4, A28, VCI, A1 and morning traffic jams', 'In old Porto, a garage can cost an extra €80–€180/month', 'In Gaia, access to Ponte da Arrábida and Ponte Luís I can be a bottleneck at peak hours'] }
          ]}
        ]}
      ]
    },
    {
      id: 'areas-in-practice',
      title: 'Areas: pros, cons, who they suit',
      content: [
        { kind: 'checklist', items: ['Foz do Douro / Nevogilde — maximum quality of life: ocean, promenade, private schools, calmer than the centre. Cons: the highest rent, wind/humidity, few cheap T2/T3 properties.', 'Boavista / Bessa / Pinheiro Manso — compromise for family and office: Casa da Música, business area, access to Foz and Matosinhos. Cons: traffic, noise on major avenues, old housing stock without good thermal insulation.', 'Matosinhos Sul — the best “ocean + metro”: beach, Mercado de Matosinhos, restaurants, metro to Porto. Cons: prices are already almost like Porto, tourist noise in summer, humidity.', 'Senhora da Hora / São Mamede de Infesta — practical and cheaper than Matosinhos Sul: NorteShopping, metro, schools, fast access to Porto. Cons: less “beautiful Portugal”, more of a dormitory suburb.', 'Vila Nova de Gaia — good budget for T2/T3, especially Mafamude, Canidelo, Oliveira do Douro, Canelas. Cons: bridges and traffic, the difference between areas is huge — look at the street, not only the município.', 'Maia — family suburb: metro, airport, business parks, new buildings, parking. Cons: less city life, often needs a car, longer to the ocean.', 'Paranhos / Asprela — convenient for students, doctors, IT and families near São João. Cons: lots of room rentals, not all buildings suit a family.', 'Campanhã — budget entry into Porto and a major transport hub. Cons: the area is mixed; always view the building and street in the evening.'] },
        { kind: 'paragraph', text: 'Do not assess an area only by the freguesia name. In Porto, the same freguesia can include very different streets: a quiet block, tourist noise, an old building without a lift and a new condomínio two blocks away.' }
      ]
    },
    {
      id: 'transport-and-daily-life',
      title: 'Transport, school, daily life: what to calculate before the contract',
      content: [
        { kind: 'paragraph', text: 'In Porto Metro, normal life is often built around the metro, STCP/UNIR buses, the CP train and the car. The difference between “15 minutes on the map” and the real morning journey can decide the whole choice of area.' },
        { kind: 'checklist', items: ['Andante Municipal pass — usually €30/month within one município; Andante Metropolitan — €40/month across Área Metropolitana do Porto', 'Check the real route to work/school at 08:00 and back at 18:00, not only on Sunday', 'For children, look at escola pública, ATL, creche and private schools before signing the contract', 'Check Centro de Saúde: in overloaded areas, you may wait a long time for a family doctor', 'Look for Pingo Doce/Continente/Lidl/Mercadona within walking distance: daily logistics matter more than a beautiful view', 'If the building is old — ask for certificado energético, heating type, humidity, mould, window condition', 'For remote work, check fibra: MEO, NOS, Vodafone do not always have the same coverage in a specific building', 'Check parking in the evening on a weekday; “há estacionamento na rua” in central Porto often means 20 minutes searching'] },
        { kind: 'warning', text: 'Porto is humid. A flat with poor windows and no sun may seem cheap, but in winter you will pay through heating, a dehumidifier, mould and your health. Check orientation, ventilation and the smell inside wardrobes.' }
      ]
    },
    {
      id: 'contract-check',
      title: 'Before signing the rental contract',
      content: [
        { kind: 'paragraph', text: 'In 2026, the standard safe scenario is: a written contrato de arrendamento, registration of the contract in Finanças by the owner, recibos de renda, deposit and first month by bank transfer. The 2026 rent increase for old contracts is guided by the 2.16% coefficient, unless the contract states otherwise within the law.' },
        { kind: 'checklist', items: ['Ask for the caderneta predial or proof that the landlord has the right to rent out the property', 'The contract should include the address, term, renda, caução, NIF of the parties, termination conditions, furniture and expenses', 'Take a video of the flat when moving in: walls, appliances, windows, water/electricity/gas meters', 'Clarify whether condomínio is included in rent — the owner usually pays it, but utilities are paid by the tenant', 'Do not transfer caução before viewing the flat or checking the agent’s/owner’s power of attorney', 'If you need school, SNS, NIF address, AIMA procedures — make sure the contract works as comprovativo de morada', 'For pets, get written permission in the contract or by email, not a verbal “sem problema”', 'If the contract is for 1 year, check the renewal rules and denúncia/oposição à renovação deadlines'] },
        { kind: 'warning', text: 'A short contrato de alojamento local or “prestação de serviços” instead of a rental contract may not give the same rights as a contrato de arrendamento habitacional. For a family and documents, a full residential rental contract is better.' }
      ]
    }
  ],
  costs: [
    { label: 'Andante Municipal', amountEUR: 30, note: 'Monthly pass usually within one Porto Metro município' },
    { label: 'Andante Metropolitan', amountEUR: 40, note: 'Monthly pass across Área Metropolitana do Porto' },
    { label: 'T2 in Foz/Boavista', amountEURMin: 1400, amountEURMax: 2500, note: 'Long-term rental guide range for spring 2026; depends on the building, garage and condition' },
    { label: 'T2 in Matosinhos/Gaia/Maia', amountEURMin: 850, amountEURMax: 1900, note: 'The lower end is more often Maia/Gaia further from the metro; the upper end is Matosinhos Sul and new buildings' },
    { label: 'Garage/space in central Porto', amountEURMin: 80, amountEURMax: 180, note: 'If not included in the rent; the price depends on the zone and access' }
  ],
  sources: [
    { title: 'Câmara Municipal do Porto — official portal of the city of Porto', url: 'https://www.cm-porto.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Câmara Municipal de Matosinhos — official portal of the município of Matosinhos', url: 'https://www.cm-matosinhos.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Andante — fares and passes for Área Metropolitana do Porto', url: 'https://andante.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Idealista Portugal — rental market in Porto and surrounding municípios', url: 'https://www.idealista.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
