export default {
  editorialVoice: 'hackportugal',
  id: 'social-rules-condominio',
  categoryId: 'housing_rent',
  title: 'Life in an apartment building — neighbours, noise, complaints',
  tldr: 'Portugal is a country of quiet everyday protocol, but neighbours vary. Noise rules: Regulamento Geral do Ruído (DL 9/2007) — período nocturno 23:00-07:00, diurno 07:00-20:00, entardecer 20:00-23:00 (standard definitions; municipalities may add local rules).\n\nWhere to complain: GNR/PSP (one-off breach) → Câmara Municipal (persistent breach) → court. Fines depend on the nature of the offence: for individuals under the RGR/Lei-Quadro das Contraordenações Ambientais they usually start from €200 for minor offences, but for serious offences the amounts are substantially higher. Check art. 28 DL 9/2007 and Lei 50/2006 in the current version. In a condomínio, the general meeting adopts internal rules; the assembleia is held at least once a year. Fundo Comum de Reserva is mandatory.',
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
              'Período nocturno: 23:00-07:00 (under DL 9/2007 / Regulamento Geral do Ruído)',
              'Período diurno: 07:00-20:00',
              'Período entardecer: 20:00-23:00 (reduced limits)',
              '⚠️ Municipalities (Câmara Municipal) may set additional local rules and quiet hours — check your city’s municipal regulation',
              'Lden/Lnight are used for noise maps and zoning; for domestic noise from neighbours, the ruído de vizinhança regime and, where measurements are taken, the incomodidade criterion matter more. Do not expect the police to check specifically for Lden 55/Lnight 45 inside an apartment.',
              '🎵 Music in an apartment from 8:00-20:00 — within reason. In the evening — quieter. At night — it must not be audible through the wall'
            ]}
          ]},
          { id: 'n2', title: 'What counts as a breach', content: [
            { kind: 'checklist', items: [
              'Loud music / TV audible in neighbouring apartments during período nocturno (23:00-07:00)',
              'Noisy parties during período nocturno',
              'Noisy renovation/construction works near housing: the general rule is not to carry them out between 20:00-08:00, on Saturdays, Sundays and public holidays without a licença especial de ruído. Renovation inside a building is usually permitted on working days 08:00-20:00, with residents notified of the duration of the works. Municipal rules may add details.',
              'Shouting, arguments, a baby crying (children are a reasonable exception in court)',
              'A dog barking on the balcony (the owner is responsible)',
              'Shower water noise after 23:00 (less common, but complaints happen in old buildings)',
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
          { id: 'c1', title: 'Step 1: Dialogue with the neighbour (recommended)', content: [
            { kind: 'checklist', items: [
              'Be friendly — this is valued in PT',
              'Put a note in the letterbox or speak in person',
              'Explain that the problem is not personal, but about shared wellbeing',
              'Allow 1-2 weeks for a response',
              '📝 80% of cases are resolved without further steps'
            ]}
          ]},
          { id: 'c2', title: 'Step 2: Condominium administrator', content: [
            { kind: 'checklist', items: [
              'If there is an administrador — send a formal letter (email is enough)',
              'The administrator can send a warning to the owner of the fração and/or put the matter on the agenda of the assembleia de condóminos. If the person causing the breach is a tenant, action is usually taken through the owner-landlord.',
              'Process: written warning to the owner → if there is a basis in the regulamento or an assembleia decision, a pecuniary sanction may be possible, recoverable from the offender; the amount of sanctions per year is limited by law.',
              'If the administrator ignores it — the next step'
            ]}
          ]},
          { id: 'c3', title: 'Step 3: GNR / PSP — calling the police', content: [
            { kind: 'checklist', items: [
              'For a one-off problem (a loud party right now) — GNR (regions) or PSP (cities)',
              '112 — only if there is no other number / aggression',
              'Local PSP / GNR number — find it on Google with "posto territorial + area name"',
              'The police will come and ask for the noise to be reduced — this usually resolves it on the spot',
              '📋 Get the incident/reference number — for subsequent steps'
            ]}
          ]},
          { id: 'c4', title: 'Step 4: Câmara Municipal', content: [
            { kind: 'checklist', items: [
              'For a persistent breach',
              'Submission: online on the municipality website or in person at the office',
              'Medição de ruído: a municipal technician will come and measure the sound level',
              'If the breach is confirmed, a processo de contraordenação may be opened. The amount of the fine depends on the classification of the breach under the RGR and Lei 50/2006; it is not universally capped at €2,500/€25,000.',
              'Process: 1-3 months'
            ]}
          ]},
          { id: 'c5', title: 'Step 5: Tribunal (court)', content: [
            { kind: 'checklist', items: [
              'If everything else has failed and there is harm (you cannot sleep, health impact)',
              'Claim for compensation through the civil court',
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
      title: '🏢 How condomínio works',
      content: [
        { kind: 'paragraph', text: 'The condomínio/propriedade horizontal regime is based primarily on Código Civil arts. 1414-1438-A and DL 268/94; Lei 8/2022 introduced important changes. A condomínio exists when a building is registered as propriedade horizontal with autonomous frações.' },
        { kind: 'substeps', items: [
          { id: 'cd1', title: 'Structure', content: [
            { kind: 'checklist', items: [
              'Assembleia de condóminos — meeting of all owners, voting by quotas (share)',
              'Administrador — manager (an elected owner or a hired company), mandatory',
              'Regulamento interno — building rules (pets, balconies, noise, renovation)',
              'Fundo Comum de Reserva — 10% of the monthly contribution goes into a reserve for major repairs (roof, lift)'
            ]}
          ]},
          { id: 'cd2', title: 'Assembleia', content: [
            { kind: 'checklist', items: [
              'Ordinária: annually, as a general rule in the first half of January, to approve the previous year’s accounts and the budget; the regulamento or assembleia may provide for it to be held in the first quarter.',
              'Extraordinária: at the request of 1/4 of owners or the administrator',
              'Voting: by apartment size (permilagens). 1 apartment ≠ 1 vote',
              'Decisions are taken by a majority of permilagens; some (major repairs) — 2/3',
              'Owner-landlords vote; tenants do not'
            ]}
          ]},
          { id: 'cd3', title: 'Monthly contributions', content: [
            { kind: 'checklist', items: [
              'Typical condomínio: €15-80/month for a 70-100 m² apartment',
              'Factors: building size, whether there is a lift, pool, security, garden',
              'Covers: cleaning, common-area electricity, lift maintenance, building insurance, administration, Fundo Reserva',
              'The owner is obliged to pay, the tenant only if the contract says so (the owner usually pays)',
              'Debt: administrative debt → court for recovery; there is no legal charge over the apartment'
            ]}
          ]},
          { id: 'cd4', title: 'Breaches of the regulamento', content: [
            { kind: 'checklist', items: [
              '60 days to challenge an assembleia decision',
              'Pecuniary sanctions are possible if provided for in the regulamento or by an assembleia decision; the overall annual limit for sanctions is restricted by Código Civil art. 1434, so there is no fixed €50-500 range.',
              'Major changes to the apartment (removing walls): approval by the assembleia',
              'Balcony: you may not hang laundry outside (in some condominiums), install air conditioning (without approval)',
              'The regulamento may set rules for common areas, hygiene, leads, the lift and noise. A complete ban on keeping a pet inside a private fraction is legally debatable; limits on the number of animals and rules from municipal/veterinary authorities apply separately.',
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
          'Quiet enjoyment: Lei 6/2006 (NRAU) — the owner guarantees peaceful use',
          'If noise substantially interferes with using the dwelling, notify the landlord in writing and collect evidence. The possibility of a rent reduction or termination without penalty is not automatic; it depends on the contract, the landlord’s role and the seriousness of the breach, and often requires legal advice.',
          'For noisy renovation inside the building, the responsible party must put up a notice in a place accessible to residents stating the duration of the works. If your landlord is carrying out works inside the rented dwelling, separate rules under the tenancy agreement and Código Civil apply.',
          'Common areas: you have the right to use them on the same basis as owners (garden, pool, etc.)',
          'A tenant usually does not vote and does not have an automatic right to participate in the assembleia; you can ask the landlord to raise the matter, issue a procuração or agree your attendance with the administrador/assembleia.',
          'EV charging: the regime is set out in Decreto-Lei 93/2025 (RJME), which replaced the former Decreto-Lei 39/2010. Installation in a parking space requires prior written notification to the administração do condomínio and compliance with technical/safety requirements; opposition is possible only on lawful grounds. For a tenant, rights under the tenancy agreement and the owner’s consent/participation are additionally important if the space is not at their disposal.'
        ]}
      ]
    },
    {
      id: 'special-issues',
      title: '🆘 Special situations',
      content: [
        { kind: 'checklist', items: [
          'Neighbour’s dog barks all day → Câmara Municipal + municipal vet (possible removal on welfare grounds)',
          'Neighbours smoke on the balcony, smoke enters your apartment → not a direct breach (smoking on a private balcony is allowed); but if the condomínio has banned it — fine',
          'Renovation below you has been going on for more than 3 months → check permits with the municipality, often illegal',
          'Neighbouring hostel / short-term rental — constant noise → AL (Alojamento Local) has special rules; complaint to Câmara + ASAE; in some areas (Bairro Alto, Baixa Lisbon) AL are restricted',
          'Leak from the ceiling: written notice to the neighbour, then condomínio, then insurer',
          'Aggressive neighbour: if there is an immediate threat — 112/PSP/GNR; file a queixa-crime with PSP/GNR/Ministério Público. For repeated non-criminal conflicts — Julgados de Paz or mediação, if available.'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Typical condomínio contribution', amountEURMin: 15, amountEURMax: 80, note: '€/month for 70-100 m²' },
    { label: 'Fundo Comum de Reserva', amountEUR: 0, note: '10% of the monthly contribution' },
    { label: 'Noise fine (individual)', amountEURMin: 200, amountEURMax: 2500 },
    { label: 'Lawyer for civil court', amountEURMin: 500, amountEURMax: 2000 }
  ],
  sources: [
    { title: 'DL 9/2007 — Regulamento Geral do Ruído', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2007-34467475', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 8/2022 — propriedade horizontal (condomínio)', url: 'https://diariodarepublica.pt/dr/detalhe/lei/8-2022-180824432', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 6/2006 — NRAU (urban tenancy)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2006-34454575', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
