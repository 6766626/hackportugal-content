export default {
  editorialVoice: 'hackportugal',
  id: 'social-rules-condominio',
  categoryId: 'housing_rent',
  title: 'Life in an apartment building — neighbours, noise, complaints',
  tldr: 'Portugal is a country of quiet everyday protocol, but neighbours vary. Noise rules: Regulamento Geral do Ruído (DL 9/2007) — período nocturno **23:00-07:00**, diurno 07:00-20:00, entardecer 20:00-23:00 (standard definitions; municipalities may add local rules)\.\n\nWhere to complain: GNR/PSP (one-off breach) → Câmara Municipal (persistent breach) → court. Noise fines: €200-2,500 for an individual. In a condomínio, the general meeting adopts internal rules, and the assembleia is held at least once a year. Fundo Comum de Reserva is mandatory.',
  tags: ['neighbours', 'noise', 'condomínio', 'complaints'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'noise-law',
      title: '🔊 Noise law — Regulamento Geral do Ruído',
      content: [
        { kind: 'substeps', items: [
          { id: 'n1', title: 'Quiet hours', content: [
            { kind: 'checklist', items: [
              '**Período nocturno**: 23:00-07:00 (under DL 9/2007 / Regulamento Geral do Ruído)',
              '**Período diurno**: 07:00-20:00',
              '**Período entardecer**: 20:00-23:00 (lower limits)',
              '⚠️ Municipalities (Câmara Municipal) may set additional local rules and quiet hours — check your city’s municipal regulations',
              '📏 **Limit**: L_den ≤ 55 dB in residential areas, L_night ≤ 45 dB',
              '🎵 Music in a flat from 8:00-20:00 — within reason. In the evening — quieter. At night — it must not be heard through the wall'
            ]}
          ]},
          { id: 'n2', title: 'What counts as a breach', content: [
            { kind: 'checklist', items: [
              'Loud music / TV audible in neighbouring flats during período nocturno (23:00-07:00)',
              'Noisy parties during período nocturno',
              'Construction / renovation work during prohibited hours (usually 9:00-19:00 Mon-Fri, 10:00-18:00 Sat, prohibited on Sundays and public holidays)',
              'Shouting, arguments, a baby crying (children are a reasonable exception in court)',
              'A dog barking on the balcony (the owner is responsible)',
              'Shower water noise after 23:00 (rarer, but complaints do happen in old buildings)',
              'A car alarm with no response from the owner'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'complaints',
      title: '📋 Where to complain',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Step 1: Speak to the neighbour (recommended)', content: [
            { kind: 'checklist', items: [
              'Be friendly — in PT this is valued',
              'Leave a note in the letterbox or speak in person',
              'Explain that the problem is not personal, but about everyone’s wellbeing',
              'Allow 1-2 weeks for a response',
              '📝 80% of cases are resolved without further steps'
            ]}
          ]},
          { id: 'c2', title: 'Step 2: Condomínio administrator', content: [
            { kind: 'checklist', items: [
              'If there is an administrador — send a formal letter (email is sufficient)',
              'The administrator will summon the offender to the assembleia condomínio',
              'Outcome: written warning → fine from the shared budget',
              'If the administrator ignores it — move to the next step'
            ]}
          ]},
          { id: 'c3', title: 'Step 3: GNR / PSP — call the police', content: [
            { kind: 'checklist', items: [
              'For a **one-off** problem (a loud party happening now) — GNR (regions) or PSP (cities)',
              '**112** — only if there is no other number / aggression',
              'Local PSP / GNR number — find it on Google with "posto territorial + district name"',
              'The police will come and ask them to reduce the noise — this usually resolves it on the spot',
              '📋 Get the incident/reference number — for subsequent steps'
            ]}
          ]},
          { id: 'c4', title: 'Step 4: Câmara Municipal', content: [
            { kind: 'checklist', items: [
              'For a **persistent** breach',
              'Submission: online on the municipality website or in person at reception',
              '**Medição de ruído**: a municipal technician will come and measure the sound level',
              'If the limit is exceeded — a fine is issued to the offender (€200-2,500 for an individual, up to €25,000 for a legal entity)',
              'Process: 1-3 months'
            ]}
          ]},
          { id: 'c5', title: 'Step 5: Tribunal (court)', content: [
            { kind: 'checklist', items: [
              'If everything else has failed and there is damage (you cannot sleep, health impact)',
              'Claim for damages through the civil court',
              'Witnesses, recordings, medical certificates',
              'Lawyer — mandatory',
              'Process: 6-18 months, cost €500-2,000',
              'Rarely used for noise — more often for construction / serious cases'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'condominio',
      title: '🏢 How a condomínio works',
      content: [
        { kind: 'paragraph', text: 'In Portugal, Lei 8/2022 regulates propriedade horizontal — every apartment building is a condomínio.' },
        { kind: 'substeps', items: [
          { id: 'cd1', title: 'Structure', content: [
            { kind: 'checklist', items: [
              '**Assembleia de condóminos** — meeting of all owners, voting by quotas (share)',
              '**Administrador** — manager (an elected owner or a hired company), mandatory',
              '**Regulamento interno** — building rules (pets, balconies, noise, renovation work)',
              '**Fundo Comum de Reserva** — 10% of the monthly fee goes into a reserve for major repairs (roof, lift)'
            ]}
          ]},
          { id: 'cd2', title: 'Assembleia', content: [
            { kind: 'checklist', items: [
              '**Ordinária**: annually between 1 January and 30 June — budget approval, elections',
              '**Extraordinária**: at the request of 1/4 of owners or the administrator',
              'Voting: by flat size (permilagens). 1 flat ≠ 1 vote',
              'Decisions are made by a majority of permilagens; some (major repairs) — 2/3',
              'Owner-landlords vote; tenants do not'
            ]}
          ]},
          { id: 'cd3', title: 'Monthly fees', content: [
            { kind: 'checklist', items: [
              'Typical condomínio: **€15-80/month** for a 70-100 m² flat',
              'Factors: building size, whether there is a lift, swimming pool, security, garden',
              'Covers: cleaning, lighting in common areas, lift maintenance, building insurance, administration, Fundo Reserva',
              'The owner is obliged to pay; the tenant only if this is stated in the contract (more often the owner pays)',
              'Debt: **administrative** debt → court for recovery; there is no legal charge over the flat'
            ]}
          ]},
          { id: 'cd4', title: 'Breaches of the regulamento', content: [
            { kind: 'checklist', items: [
              '60 days to challenge an assembleia decision',
              'Fine terms in the regulamento: from €50-500 per breach',
              'Major changes to the flat (knocking down walls): approval from the assembleia',
              'Balcony: you cannot hang laundry outside (in some condomínios), or install air conditioning (without approval)',
              'Pets: if the regulamento prohibits them — not allowed; if it permits them — there are rules (lead in common areas)',
              'Speakers, parties — most often prohibited after 22:00'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'rental-tenant',
      title: '🏠 If you are a tenant — your rights',
      content: [
        { kind: 'checklist', items: [
          '**Peaceful possession**: Lei 6/2006 (NRAU) — the owner guarantees peaceful use',
          'If neighbours disturb you and the owner does not help → you may demand a rent reduction or termination of the contract without penalty',
          '**Neighbours’ renovation works**: the owner must give 8 days’ notice of planned works',
          '**Common areas**: you have the right to use them on equal terms with owners (garden, swimming pool, etc.)',
          '**Assembleia**: you do not vote, but you may attend and speak',
          '⚠️ **EV charging**: you have the right to install it in your own parking space (Lei 39/2021) — the owner cannot refuse, only set conditions'
        ]}
      ]
    },
    {
      id: 'special-issues',
      title: '🆘 Special situations',
      content: [
        { kind: 'checklist', items: [
          '**Neighbour’s dog barks all day** → Câmara Municipal + municipal vet (possible removal on welfare grounds)',
          '**Neighbours smoke on the balcony, smoke enters your flat** → not a direct breach (smoking on a private balcony is permitted); but if the condomínio has prohibited it — fine',
          '**Renovation work below you has been going on for more than 3 months** → check permits at the municipality, often illegal',
          '**Neighbouring hostel / short-term rental — constant noise** → AL (Alojamento Local) has special rules; complaint to Câmara + ASAE; in some areas (Bairro Alto, Baixa Lisbon) AL are restricted',
          '**Leak from the ceiling**: written notice to the neighbour, then condomínio, then insurer',
          '**Aggressive neighbour**: PSP 112 in case of physical threat; Provedor de Justiça for a recurring conflict'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Typical condomínio fee', amountEURMin: 15, amountEURMax: 80, note: '€/month for 70-100 m²' },
    { label: 'Fundo Comum de Reserva', amountEUR: 0, note: '10% of the monthly fee' },
    { label: 'Noise fine (individual)', amountEURMin: 200, amountEURMax: 2500 },
    { label: 'Lawyer for civil court', amountEURMin: 500, amountEURMax: 2000 }
  ],
  sources: [
    { title: 'DL 9/2007 — Regulamento Geral do Ruído', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2007-34467475', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 8/2022 — propriedade horizontal (condomínio)', url: 'https://diariodarepublica.pt/dr/detalhe/lei/8-2022-180824432', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 6/2006 — NRAU (urban tenancy)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2006-34454575', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 365
}
