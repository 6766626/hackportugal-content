export default {
  editorialVoice: 'hackportugal',
  id: 'lisbon-areas-by-budget',
  categoryId: 'housing_rent',
  title: 'Where to live in Lisbon: areas by budget and family type',
  tldr: 'In 2026, Greater Lisbon is not a choice of “Lisbon or not”, but a combination of budget + school/office + transport. For one person: €900–1,300/month — Almada, Amadora, Loures, Sintra; €1,300–1,800 — Oeiras, Benfica, Telheiras; €1,800+ — Lisbon centre/Cascais. A family with a child looking for a T2/T3 usually needs a budget of €1,500–2,800/month. Rent: Lisbon €20–25/m², Oeiras €16–20/m², Cascais €18–24/m², Almada/Sintra/Loures €11–16/m².',
  tags: ['rent', 'lisbon', 'oeiras', 'cascais', 'family'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'map-logic',
      title: 'How to read the Greater Lisbon map',
      content: [
        { kind: 'paragraph', text: 'Greater Lisbon is not just the município de Lisboa. For daily life, the transport axis matters more: the Cascais line train, Sintra line, Fertagus over the 25 de Abril bridge, metro, A5/IC19/A2. The rent difference between Lisbon centre and Sintra/Almada can be €600–1,200 per month for a similar T2.' },
        { kind: 'checklist', items: [
          'If the office is in Saldanha/Marquês/Campo Pequeno — look at Lisbon metro, Oeiras on the Cascais line, Loures/Odivelas by metro/bus.',
          'If the office is in Parque das Nações — Moscavide, Olivais, Sacavém, Loures and the Vila Franca line are convenient.',
          'If the office is in Oeiras/Lagoas Park/Taguspark — Oeiras, Carcavelos, Paço de Arcos, Massamá, Cacém are better; from central Lisbon it is often longer.',
          'If the school is international — check Cascais/Oeiras/Sintra in advance: there are more private and international schools there, but rent is higher.',
          'If you need the beach without a car — Cascais line: Algés, Oeiras, Carcavelos, Parede, Cascais.',
          'If budget matters more than image — Almada, Seixal, Amadora, Sintra, Loures give more m² for the same money.',
          'If you do not have a car — choose somewhere at most 10–12 minutes on foot from metro/CP/Fertagus; being dependent on buses makes everyday life much worse.'
        ] }
      ]
    },
    {
      id: 'budgets',
      title: '2026 budgets: how much to allow for rent',
      content: [
        { kind: 'paragraph', text: 'The benchmarks below are for long-term rentals excluding utilities, based on listings and market deals in spring 2026. Good flats go quickly; landlords often ask for 2 deposits + 1–2 months in advance and proof of income.' },
        { kind: 'checklist', items: [
          'Up to €1,000/month: studio/T0 or small T1 in Amadora, Loures, Sintra, Margem Sul; in Lisboa there is almost always a compromise on condition or area.',
          '€1,000–1,300/month: T1 in Almada, Amadora, Loures, Sintra; sometimes a T1 in Benfica/Olivais/Algés.',
          '€1,300–1,700/month: T1/T2 in Oeiras, Algés, Benfica, Telheiras, Moscavide; it is better to look for a T2 outside the centre.',
          '€1,700–2,200/month: a decent T2 for a couple or family in Oeiras, premium Almada, Cascais away from the sea, Lisbon outer ring.',
          '€2,200–3,000/month: T2/T3 in good areas of Cascais/Oeiras/Lisbon; you can already choose by school, parking and condition.',
          '€3,000+/month: Cascais, Estoril, Chiado, Príncipe Real, Avenidas Novas, Parque das Nações, family T3/T4 with a garage.'
        ] },
        { kind: 'warning', text: 'Do not plan a budget with “nothing to spare”. Add €120–250/month to rent for electricity/gas/water/internet for a couple and €200–350/month for a family, plus condomínio, which is sometimes included and sometimes not.' }
      ]
    },
    {
      id: 'areas',
      title: 'Areas by family type and price per m²',
      content: [
        { kind: 'substeps', items: [
          { id: 'single-couple', title: 'One person or a couple without children', content: [
            { kind: 'paragraph', text: 'The main criterion is the journey to work and evening life. If you want the city: Avenidas Novas, Arroios, Anjos, Alameda, Campo de Ourique, Benfica. If you want cheaper: Amadora, Damaia, Odivelas, Loures, Almada.' },
            { kind: 'checklist', items: [
              'Lisboa centre: €20–25/m²; T1 is often €1,200–1,800/month.',
              'Benfica/Telheiras/Olivais: €17–22/m²; calmer, metro/train, less tourist noise.',
              'Almada/Cacilhas: €12–16/m²; ferry/metro sul + view of Lisbon, good for the centre and Santos/Cais do Sodré.',
              'Amadora/Odivelas/Loures: €11–15/m²; practical, but check the specific street at night and the transport.',
              'Sintra line: €10–14/m²; more space, but the commute can easily become 45–70 minutes.'
            ] }
          ] },
          { id: 'family-kids', title: 'Family with a child', content: [
            { kind: 'paragraph', text: 'For a family, school, park, parking, lift, noise and healthcare usually matter. The clearest areas are: Oeiras, Carcavelos, Parede, Cascais, Benfica, Telheiras, Parque das Nações, Alfragide, some parts of Almada and Sintra.' },
            { kind: 'checklist', items: [
              'Oeiras: €16–20/m²; a strong balance of schools, sea, parks, offices and the Cascais line.',
              'Cascais/Estoril/Parede: €18–24/m²; more expensive, but schools, beach, expat environment, safety.',
              'Benfica/Telheiras: €17–22/m²; family-friendly, metro/CP, parks, cheaper than the centre.',
              'Parque das Nações: €20–25/m²; convenient and modern, but a T3 with a garage is often €2,500+.',
              'Sintra: €10–14/m²; more houses and T3/T4, but living without a car and close to the train is more difficult.',
              'Almada/Caparica: €12–17/m²; good if you need the beach and a lower budget, but the 25 de Abril bridge is unpredictable at rush hour.'
            ] }
          ] },
          { id: 'remote-workers', title: 'Remote work and digital nomad', content: [
            { kind: 'paragraph', text: 'For remote work, flat quality, internet, noise and access to the airport/centre 1–2 times a week matter more. Do not overpay for the centre if you do not go there every day.' },
            { kind: 'checklist', items: [
              'Cascais: expensive, but comfortable, sea, coworking spaces, English-speaking environment.',
              'Oeiras/Carcavelos: a price/sea/train compromise; good for those who travel both to Lisboa and to Cascais.',
              'Almada/Costa da Caparica: a beach lifestyle cheaper than Cascais, but damp in winter, and transport depends on the exact location.',
              'Sintra: beautiful and cheaper per m², but humidity, cold houses and the commute are common surprises.',
              'Loures/Sacavém/Moscavide: practical for the airport and Parque das Nações, less lifestyle, more everyday convenience.'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'commute',
      title: 'Commute: real times to the centre',
      content: [
        { kind: 'paragraph', text: 'Compare not the distance on the map, but door-to-door: walk to the station + waiting + train/metro + transfer + route from the station. At rush hour, the car often loses to the train.' },
        { kind: 'checklist', items: [
          'Cascais → Cais do Sodré: train around 40 minutes; door-to-door often 55–75 minutes.',
          'Oeiras → Cais do Sodré: train around 20–25 minutes; door-to-door 35–50 minutes.',
          'Carcavelos/Parede → Cais do Sodré: train around 25–35 minutes; door-to-door 45–60 minutes.',
          'Sintra → Rossio/Oriente: train around 40–50 minutes; door-to-door 60–80 minutes.',
          'Cacém/Queluz → Rossio: train around 20–35 minutes; door-to-door 40–60 minutes.',
          'Almada/Cacilhas → Cais do Sodré: ferry around 10 minutes, but 30–45 minutes including access.',
          'Pragal/Corroios → Sete Rios/Entrecampos: Fertagus around 15–25 minutes; door-to-door 35–55 minutes.',
          'Loures/Sacavém → Saldanha/Oriente: bus/train/metro 30–60 minutes depending on the address.'
        ] },
        { kind: 'warning', text: 'If the flat is “15 minutes to Lisbon” — clarify: to which station, at what time and by what means. On the A5, IC19, 2ª Circular and the 25 de Abril bridge, 15 minutes easily turns into 45–70.' }
      ]
    },
    {
      id: 'shortlist',
      title: 'Quick shortlist by scenario',
      content: [
        { kind: 'checklist', items: [
          'Budget up to €1,200, one person: Amadora, Odivelas, Loures, Almada, Cacém, Queluz, Sacavém.',
          'Budget €1,200–1,700, couple: Benfica, Olivais, Moscavide, Algés, Oeiras, Almada, Alfragide.',
          'Family, T2/T3 up to €2,000: Oeiras further from the sea, Benfica, Telheiras, Loures, Almada, Sintra near CP.',
          'Family, T2/T3 €2,000–3,000: Oeiras, Carcavelos, Parede, non-prime Cascais, Parque das Nações, Avenidas Novas.',
          'Need international schools: Cascais, Estoril, Oeiras, Carcavelos, Linhó/Sintra; book the school before signing the rental contract.',
          'Need the ocean: Cascais line or Costa da Caparica; check humidity, heating and parking.',
          'Need the airport: Olivais, Alvalade, Parque das Nações, Moscavide, Sacavém, Loures.',
          'Need maximum m² for the budget: Sintra, Loures, Margem Sul, Amadora; check transport and building condition carefully.'
        ] }
      ]
    },
    {
      id: 'viewing-checks',
      title: 'What to check before signing the contract',
      content: [
        { kind: 'paragraph', text: 'In Portugal, it is expensive to correct a mistake with the area: terminating the contract, a new deposit, moving, agency commission, school. Before paying the caução, do one test route in the morning and one in the evening.' },
        { kind: 'checklist', items: [
          'The rental contract is registered with Finanças, and the landlord can issue recibos de renda.',
          'Classe energética, humidity, mould, windows, heating: in winter, Lisbon homes can be cold.',
          'Noise: aircraft in Alvalade/Olivais, trains near CP lines, nightlife in Santos/Cais/Arroios.',
          'Parking: in Lisboa and Cascais, without a garage this is a separate problem; check EMEL/municipal permits.',
          'Internet: whether fibra MEO/NOS/Vodafone is available at the specific address, not “in the area”.',
          'Supermarket, pharmacy, Centro de Saúde, school/nursery — on foot or only by car.',
          'Safety of the specific street: walk around after 21:00, especially near stations.',
          'Condomínio: who pays, whether there is a lift, façade repairs, condomínio debts.',
          'Contract term, aviso prévio, possibility of registering the address for AIMA/Finanças/SNS.'
        ] },
        { kind: 'warning', text: 'Do not transfer the deposit based only on a video and do not believe a “too good” price. It is normal to ask for Caderneta Predial, identificação do senhorio and draft contrato antes de pagar.' }
      ]
    }
  ],
  costs: [
    { label: 'T1 in Lisboa centre', amountEURMin: 1200, amountEURMax: 1800, note: 'Usually €20–25/m², higher in Chiado, Príncipe Real, Baixa, Avenidas Novas.' },
    { label: 'T2/T3 for a family in Oeiras', amountEURMin: 1700, amountEURMax: 2800, note: 'Depends on proximity to the Cascais line, the sea, a garage and the condition of the building.' },
    { label: 'T2/T3 for a family in Cascais/Estoril', amountEURMin: 2200, amountEURMax: 3500, note: 'International schools and the sea push up the price; Parede/Carcavelos are often cheaper than Cascais centre.' },
    { label: 'T1/T2 in Almada/Sintra/Loures', amountEURMin: 900, amountEURMax: 1600, note: 'More m² for the budget, but commute and car become key.' }
  ],
  sources: [
    { title: 'Câmara Municipal de Oeiras — information on the município, mobility and services', url: 'https://www.cm-oeiras.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Câmara Municipal de Cascais — information on the município, transport and city services', url: 'https://www.cm-cascais.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Idealista — rent and sale price indices for housing by municípios and freguesias', url: 'https://www.idealista.pt/media/relatorios-preco-habitacao/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'CP — horários e linhas urbanas de Lisboa: Cascais, Sintra, Azambuja, Sado', url: 'https://www.cp.pt/passageiros/pt/consultar-horarios/horarios-resultado', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
