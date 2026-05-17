export default {
  editorialVoice: 'hackportugal',
  id: 'viver-cascais-card',
  categoryId: 'daily_life',
  title: 'Viver Cascais card — benefits for municipality residents',
  tldr: 'Viver Cascais is a municipal card for residents of the Cascais municipality (Cascais, Estoril, Alcabideche, São Domingos, Parede). It gives 20–50% discounts on transport (MobiCascais), parking, swimming pools, sports clubs, cultural events and libraries. It is free and issued based on your place of residence: you need an Atestado de Residência from the Junta de Freguesia. You can apply online or at Loja Cascais.',
  tags: ['cascais', 'viver', 'card', 'benefits'],
  estimatedReadMinutes: 3,
  steps: [
    {
      id: 'who',
      title: 'Who can get it',
      content: [
        { kind: 'checklist', items: [
          'Residents of the Cascais municipality with an Atestado de Residência (residence ≥ 30 days)',
          'Age does not matter — children from age 6 can have their own card',
          'Workers and students linked to Cascais may also have specific MobiCascais/Viver Cascais categories — check the current categories on mobicascais.pt and cascais.pt',
          'Foreigners with a residence permit — eligible'
        ]}
      ]
    },
    {
      id: 'benefits',
      title: 'What it gives you',
      content: [
        { kind: 'substeps', items: [
          { id: 'b1', title: '🚌 MobiCascais transport', content: [
            { kind: 'checklist', items: [
              'Free MobiCascais buses (except the M-Line in Estoril)',
              'Free MobiCascais Bikes (up to 45 minutes per day)',
              'Free travel on the MobiPark shuttle bus between car parks and beaches during the season'
            ]}
          ]},
          { id: 'b2', title: '🅿️ Parking', content: [
            { kind: 'checklist', items: [
              'Dístico de residente — first year free',
              'Then €10–30 per year depending on the zone',
              'In central Cascais and Estoril, the paid zone is cheaper for residents'
            ]}
          ]},
          { id: 'b3', title: '🏊 Sport', content: [
            { kind: 'checklist', items: [
              'Municipal swimming pools: 30–50% discount on subscriptions',
              'Tennis courts, football pitches: 20–40% discount',
              'Gyms in municipal centres: reduced rates',
              'Cascais marathons / triathlons — discount on entry'
            ]}
          ]},
          { id: 'b4', title: '🎭 Culture and education', content: [
            { kind: 'checklist', items: [
              'Libraries: free membership (reader card)',
              'Theatres, Casa das Histórias Paula Rego, Centro Cultural — 30–50% discounts',
              'Municipal museums: free for residents (usually €5–8)',
              'Children’s clubs and courses at Casas da Juventude — free'
            ]}
          ]},
          { id: 'b5', title: '🏥 Health and social services', content: [
            { kind: 'checklist', items: [
              'Cascais Social Card — for pensioners and people with disabilities, with additional benefits',
              'Free medical screenings (mammography, cholesterol, blood sugar) once a year',
              'Home support for pensioners'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'how-get',
      title: 'How to get it',
      content: [
        { kind: 'substeps', items: [
          { id: 'g1', title: '1. Get an Atestado de Residência', content: [
            { kind: 'paragraph', text: 'At the Junta de Freguesia for your place of residence (Cascais, Carcavelos, Parede, Estoril, etc.). You need a rental contract / property ownership document + Cartão de Cidadão/residence permit. Cost €5–15.' }
          ]},
          { id: 'g2', title: '2. Apply for Viver Cascais', content: [
            { kind: 'checklist', items: [
              'Online: vivercascais.cascais.pt → Registar',
              'Or in person: Loja Cascais (Av. dos Combatentes 8-10) / Loja Parede',
              'Documents: Atestado de Residência, Cartão de Cidadão/residence permit, photo (a phone photo is fine), email address',
              'Registration is free',
              'The card arrives by post in 7–14 days, or you can request collection at the Loja',
              'Until you receive the plastic card, the virtual card in the MobiCascais app works'
            ]}
          ]},
          { id: 'g3', title: '3. Download the MobiCascais app', content: [
            { kind: 'paragraph', text: 'App Store / Google Play — MobiCascais. Sign in using your Viver Cascais card number. It lets you use transport, book bicycles, see bus timetables and pay for parking.' }
          ]}
        ]}
      ]
    },
    {
      id: 'family',
      title: 'For families',
      content: [
        { kind: 'checklist', items: [
          'Each family member gets their own card (each one is free)',
          'For children <12, the card is requested by one of the parents',
          'For ages 12–18, the teenager submits a separate application, but a parent’s signature is required',
          'Cartão Família Cascais — for families with 3+ children, with additional benefits in partner shops'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Viver Cascais card', amountEUR: 0 },
    { label: 'Atestado de Residência from the Junta de Freguesia', amountEURMin: 5, amountEURMax: 15 }
  ],
  sources: [
    { title: 'Viver Cascais — official portal', url: 'https://vivercascais.cascais.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'MobiCascais — app and services', url: 'https://www.mobicascais.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Câmara Municipal de Cascais', url: 'https://www.cascais.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
