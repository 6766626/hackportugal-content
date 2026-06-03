export default {
  editorialVoice: 'hackportugal',
  id: 'gyms-fitness',
  categoryId: 'daily_life',
  title: 'Fitness and sport — gyms, beaches, activities',
  tldr: 'Gym chains 2026: VivaGym (formerly Fitness Hut, budget, ~€20–€35/month depending on the club), Holmes Place (premium €89–€149/month), Phive (mid-range €35–€50), Solinca. Activities: surfing (Ericeira, Lagos, Cascais), running (parks), football (communities), padel (hugely popular), yoga. Lots of free outdoor activities.',
  tags: ['fitness', 'gyms', 'sport', 'surfing'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'chains',
      title: 'Gym chains',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'VivaGym (formerly Fitness Hut)', content: [
            { kind: 'paragraph', text: 'Budget chain, ~€20–€35/month depending on the club and plan (ONE / FLEX / PRIME). No minimum commitment. Modern equipment, some clubs open 24/7. Dozens of clubs across Portugal (Solinca/VivaGym group). In late 2024–early 2025 the Spanish VivaGym group rebranded the Portuguese Fitness Hut clubs as VivaGym; fitnesshut.pt now redirects to vivagym.pt. Often the first choice.' }
          ]},
          { id: 'c2', title: 'Holmes Place (premium)', content: [
            { kind: 'paragraph', text: '€89–€149/month in 2026 depending on the plan/club. Swimming pools, saunas, personal training, group classes. In major cities. Suitable for corporate clients.' }
          ]},
          { id: 'c3', title: 'Phive (mid-range)', content: [
            { kind: 'paragraph', text: '€35–€50/month. Hybrid format — equipment + group classes. Several clubs, mainly in Lisbon.' }
          ]},
          { id: 'c4', title: 'Solinca', content: [
            { kind: 'paragraph', text: '€40–€60/month. Closer to the premium segment; the chain’s clubs are often located in hotels.' }
          ]},
          { id: 'c6', title: 'Anytime Fitness', content: [
            { kind: 'paragraph', text: '€35–€50/month. 24/7 access by card.' }
          ]},
          { id: 'c7', title: 'Municipal gyms', content: [
            { kind: 'paragraph', text: 'Câmara Municipal (municipality) in each municipality. €15–€30/month. For residents with an atestado de residência.' }
          ]}
        ]}
      ]
    },
    {
      id: 'surfing',
      title: 'Surfing — where and how',
      content: [
        { kind: 'checklist', items: [
          '🏄 Ericeira — World Surfing Reserve (Save The Waves Coalition programme; not a UNESCO designation). Ribeira d\'Ilhas, Coxos',
          '🌊 Peniche / Baleal — for beginners, consistent waves',
          '🏖️ Cascais / Carcavelos — closer to Lisbon, accessible by train',
          '🌅 Costa da Caparica — south bank, lots of schools',
          '☀️ Lagos / Sagres — Algarve, best conditions in winter',
          '❄️ Nazaré — for extreme surfing (giant waves, not for learning!)',
          '👨‍🎓 Schools: from €30–€40 for a 2-hour lesson, from €50 for a board + wetsuit for the day',
          '💳 Surftotal — app with surf forecasts for Portugal'
        ]}
      ]
    },
    {
      id: 'running',
      title: 'Running and outdoor activities',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: 'Lisbon', content: [
            { kind: 'checklist', items: [
              'Parque Florestal de Monsanto — the largest park, lots of trails',
              'Parque Eduardo VII — central, with a good view',
              'Jardim da Estrela — small but cosy',
              'Av. Marginal (Cascais-Lisboa) — flat, by the ocean'
            ]}
          ]},
          { id: 'r2', title: 'Porto', content: [
            { kind: 'checklist', items: [
              'Parque da Cidade — the largest urban park',
              'Foz — by the ocean',
              'Ribeira → Matosinhos — along the river and ocean'
            ]}
          ]},
          { id: 'r3', title: 'Marathons and races', content: [
            { kind: 'checklist', items: [
              'Meia Maratona de Lisboa (March)',
              'Maratona do Porto (November)',
              'Corrida de São Silvestre — December, New Year race',
              'Trail running: Marão, Estrela, Sintra — lots of trail races'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'other',
      title: 'Other activities',
      content: [
        { kind: 'checklist', items: [
          '🎾 Padel — hugely popular. Clubs everywhere, €10–€15/hour per court. Padel Sports Club, Top Padel',
          '⚽ Football — amateur leagues, 3–5 a side, for any age',
          '🏊 SNS swimming pool — does not exist. Either a private gym or a municipal one for €20–€40/month',
          '🚴 Cycling — GIRA in Lisbon (electric bikes), cycle lanes by the Tejo river',
          '🧘 Yoga — Upavana, Ana Heart studios, many boutique studios, €10–€15/class',
          '🧗 Climbing — Indoorwall (Lisbon), Parede (Porto)',
          '⛳ Golf — Vilamoura, Estoril, Oitavos, for any budget'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'IPDJ — Instituto Português do Desporto e Juventude', url: 'https://www.ipdj.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Ericeira World Surfing Reserve (Save The Waves Coalition)', url: 'https://www.savethewaves.org/ericeira/', kind: 'official', language: 'en', lastRetrieved: '2026-05-30' },
    { title: 'Federação Portuguesa de Surf — FPS', url: 'https://www.surfingportugal.com/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
