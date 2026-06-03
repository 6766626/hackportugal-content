export default {
  editorialVoice: 'hackportugal',
  id: 'viver-cascais-card',
  categoryId: 'daily_life',
  title: 'Viver Cascais card — benefits for municipality residents',
  tldr: 'Viver Cascais is a municipal card for residents of the Cascais municipality (Cascais, Estoril, Alcabideche, São Domingos, Parede). Free travel on municipal MobiCascais buses, up to 180 minutes of free parking per day, plus discounts on swimming pools, sports clubs, cultural events and libraries. The digital card is free; a physical card costs €7 and is valid for 5 years. It is issued based on your place of residence: any document proving residence or a tax address in the municipality works (a utility bill, proof of tax address, an Atestado de Residência from the Junta de Freguesia, etc.). You can apply online via MyCascais or at a Loja Cascais.',
  tags: ['cascais', 'viver', 'card', 'benefits'],
  estimatedReadMinutes: 3,
  steps: [
    {
      id: 'who',
      title: 'Who can get it',
      content: [
        { kind: 'checklist', items: [
          'Residents of the Cascais municipality who can prove residence or a tax address in the municipality',
          'Age does not matter — children from age 6 can have their own card',
          'Workers and students linked to Cascais are also eligible (with proof of employment or enrolment) — check the categories on mobi.cascais.pt and cascais.pt',
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
              'Free travel on municipal MobiCascais buses (lines M01–M41, within the municipality) — you need to be signed in to the MobiCascais app',
              'Free e-bikes — 30 minutes per day on the first trip (via the Bird app)',
              'Free travel on the MobiPark shuttle bus between car parks and beaches during the season'
            ]}
          ]},
          { id: 'b2', title: '🅿️ Parking', content: [
            { kind: 'checklist', items: [
              'Up to 180 minutes of free parking per day in limited-duration zones (requires prior subscription at viver.cascais.pt and proof of a tax address in the municipality)',
              'The 180 minutes do not roll over, reset daily, and can be split between vehicles registered to the cardholder',
              'In blue zones, parking is free in the low season (1 November – 30 April)'
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
          { id: 'g1', title: '1. Prepare proof of residence', content: [
            { kind: 'paragraph', text: 'Any document no older than 3 months works: a utility bill (water, electricity, gas, phone, TV), proof of tax address or household composition from Finanças, an Atestado de Residência from the Junta de Freguesia, etc. You do not have to get an Atestado separately. If you do get one, it costs €5–15.' }
          ]},
          { id: 'g2', title: '2. Apply for Viver Cascais', content: [
            { kind: 'checklist', items: [
              'Online: first register in MyCascais (my.cascais.pt/viver), then request the card',
              'Or in person: Loja Cascais (Rua Manuel Joaquim Avelar, 118, piso -1), Loja Tires (Praça Fernando Lopes Graça, 156A) or the CascaiShopping desk',
              'Documents: proof of residence, Cartão de Cidadão/residence permit, photo (a phone photo is fine), email address',
              'The digital card is free — once your details are validated it is available right away in the MobiCascais app (QR code for travel)',
              'A physical card is optional: it costs €7, is valid for 5 years, and arrives by post or is collected at a Loja',
              'You must renew your profile every 5 years (residents — with proof of a tax address in the municipality)'
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
    { label: 'Viver Cascais digital card', amountEUR: 0 },
    { label: 'Viver Cascais physical card (optional, valid 5 years)', amountEUR: 7 },
    { label: 'Atestado de Residência from the Junta de Freguesia (optional)', amountEURMin: 5, amountEURMax: 15 }
  ],
  sources: [
    { title: 'Viver Cascais — apply / renew (official page)', url: 'https://www.cascais.pt/servico/viver-cascais-aderir-renovar', kind: 'official', language: 'pt', lastRetrieved: '2026-05-31' },
    { title: 'Cartão Viver Cascais — MobiCascais', url: 'https://mobi.cascais.pt/viver-cascais', kind: 'company', language: 'pt', lastRetrieved: '2026-05-31' },
    { title: '180 minutes of free parking for residents — MobiCascais', url: 'https://mobi.cascais.pt/geral/180-minutos-de-estacionamento-gratuitos-para-residentes', kind: 'company', language: 'pt', lastRetrieved: '2026-05-31' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
