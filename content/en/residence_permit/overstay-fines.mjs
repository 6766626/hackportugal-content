export default {
  editorialVoice: 'hackportugal',
  id: 'overstay-fines',
  categoryId: 'residence_permit',
  title: 'Fines for overstaying in Portugal',
  tldr: 'Overstaying is a serious breach. Under Lei 23/2007 art. 192, fines are divided into **four** ranges: up to 30 days, 30–90, 90–180 and > 180 days; check the exact amounts and maximums against the current version of Lei 23/2007 (art. 192) and applicable case law. **A fine by itself is NOT the same as an SIS alert**: an entry in the Schengen Information System (SIS) is made by a separate decision (usually where there is an entry ban / expulsão, not for every fine). However, overstaying sharply increases the risk of refusal for renewal and future visas. The worst case is cumulative overstay: the longer you are out of status, the lower the chance of becoming legal again.',
  tags: ['overstay', 'fine', 'aima'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'categories',
      title: 'What counts as an overstay',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: '90-day Schengen stay', content: [
            { kind: 'checklist', items: [
              'Tourists with visa-free entry (BR, US, UK, CA, …) — 90 days in any 180 days in the Schengen Area',
              'Day counting: calculator ec.europa.eu/home-affairs/what-we-do/policies/borders-and-visas/border-crossing/90-day-calculator',
              'Leaving for 1 day does NOT reset the counter — the 180-day window is rolling',
              'Exceeded by 1 day = overstay'
            ]}
          ]},
          { id: 'c2', title: 'Expired D visa', content: [
            { kind: 'paragraph', text: 'A D visa gives you 4 months to enter and attend an AIMA appointment. If you missed your AIMA appointment and the visa has expired — you have overstayed, even if you are in Portugal.' }
          ]},
          { id: 'c3', title: 'Expired residence permit without proof', content: [
            { kind: 'checklist', items: [
              'Residence permit expired, renewal not submitted — overstay',
              'Residence permit expired, but there is proof of renewal submission before expiry — legal status is maintained',
              'MdI proof (before 03.06.2024) — protected against overstay during the transitional period',
              'Important: proof is shown at the border when returning to Portugal'
            ]}
          ]},
          { id: 'c4', title: 'Overstay under temporary protection (Ukraine)', content: [
            { kind: 'paragraph', text: 'TPD has been extended until 04.03.2027. After that, without switching to a D visa / national status — overstay. While TPD is in force — overstay is not possible.' }
          ]}
        ]}
      ]
    },
    {
      id: 'fines',
      title: 'Fines and consequences',
      content: [
        { kind: 'paragraph', text: 'Under Lei 23/2007 art. 192, the law divides overstaying into **four** periods. The indicative figures below are to understand the order of magnitude; check the exact minimums/maximums against the current version of Lei 23/2007 art. 192 and Lei 61/2025 (if applicable), as well as AIMA practice:' },
        { kind: 'checklist', items: [
          'Overstay **up to 30 days**: fine roughly from €80; upper limit — several hundred euros',
          'Overstay **30–90 days**: higher fine; the upper limit may reach hundreds of euros',
          'Overstay **90–180 days**: even higher fine — several hundred/around a thousand euros',
          'Overstay **more than 180 days**: maximum amounts; high risk of expulsão (removal)',
          'Border control with an overstay — the fine is recorded; payment on the spot, at PSP or via Portal AT using a Multibanco reference',
          'Inclusion in SIS (alert for an entry ban to the Schengen Area) — **a separate procedure**, usually in the event of formal expulsão or an entry ban, not automatically because of the fine',
          'Children under 16 are not fined, but the overstay is recorded',
          'Willingness to leave voluntarily and pay the fine — a mitigating circumstance'
        ]},
        { kind: 'warning', text: 'Overstaying blocks: new D visas (AIMA/MNE checks the history), an application for a residence permit from inside the country. After Lei 61/2025 (22.10.2025), the Manifestação de Interesse option as a mass route is completely closed. There are three ways out of an overstay: (1) leave voluntarily + pay the fine + obtain a new visa through the consulate; (2) apply for a status such as CPLP/refugee/humanitarian status; (3) risk: expulsão by court decision.' }
      ]
    },
    {
      id: 'escape-routes',
      title: 'How to become legal after an overstay',
      content: [
        { kind: 'substeps', items: [
          { id: 'e1', title: 'Option A — leave and apply from abroad (recommended)', content: [
            { kind: 'checklist', items: [
              'Go through exit control — the fine will be recorded; pay at the airport or later via Portal AT',
              'Apply for a D visa through the consulate from your home country',
              'The consul sees the overstay in your history — they may ask questions / refuse; a convincing justification (work, family, contract) is essential',
              'If the overstay is ≤30 days and there are no other breaches — chances are high; 90+ days — risks are significant'
            ]}
          ]},
          { id: 'e2', title: 'Option B — CPLP mechanism (if you are a citizen of a CPLP country)', content: [
            { kind: 'paragraph', text: 'Brazilians, Angolans, Mozambicans and so on can apply for a CPLP residence permit while in Portugal, even with an overstay. AIMA prefers to grant status rather than deport if there is a contract / funds.' }
          ]},
          { id: 'e3', title: 'Option C — marriage / partnership with a Portuguese or EU citizen', content: [
            { kind: 'paragraph', text: 'A valid marriage / registered de facto partnership (união de facto) gives the right to Reagrupamento Familiar or a residence permit as a family member of an EU citizen. Overstay does not block this, but AIMA may require the fine to be settled first.' }
          ]},
          { id: 'e4', title: 'Option D — application on humanitarian grounds (rare)', content: [
            { kind: 'paragraph', text: 'Medical treatment, pregnancy, refugee status, family circumstances. Through a lawyer → AIMA / court. Long, complex, requires justification.' }
          ]}
        ]}
      ]
    },
    {
      id: 'how-to-check',
      title: 'How to check your status',
      content: [
        { kind: 'checklist', items: [
          '🛂 Passport stamps — dates of entry/exit from the Schengen Area',
          '📅 90/180 calculator: ec.europa.eu/assets/home/visa-calculator/calculator.htm',
          '🏛️ AIMA — call the number on the current contacts page at aima.gov.pt; before calling, check the 808-number tariff with your operator',
          '📧 Book an AIMA appointment for status questions',
          '⚖️ In disputed cases — lawyer (Ordem dos Advogados, portal.oa.pt), consultation €50-150'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Tips — how NOT to end up overstaying',
      content: [
        { kind: 'checklist', items: [
          '🗓️ Put the visa/residence permit expiry date in your calendar + minus 90 days (this is how long AIMA takes to process a renewal)',
          '📝 Residence permit renewal — apply via portal-renovacoes.aima.gov.pt as early as possible',
          '📋 Keep ALL PDF confirmations — without them, the border does not understand that you are in process',
          '✈️ Do not leave the Schengen Area with an expired residence permit and without proof — you may not be allowed back in',
          '⚠️ 90 days in the Schengen Area as a tourist + applying for a residence permit = a bad idea: if AIMA does not approve within 90 days, you will end up overstaying',
          '🔔 If you change address or lose documents — notify AIMA within 60 days',
          '📞 If you are unsure about your status — call AIMA / go to a lawyer; prevention is better than overstay'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Fine for overstay up to 30 days (Lei 23/2007 art. 192 #1)', amountEURMin: 80, amountEURMax: 400, note: 'Indicative; the exact amount in a specific case is determined by AIMA / the court under art. 192 of the current version' },
    { label: 'Fine for overstay of 30-90 days', amountEURMin: 160, amountEURMax: 700 },
    { label: 'Fine for overstay of 90-180 days', amountEURMin: 400, amountEURMax: 1200 },
    { label: 'Fine for overstay >180 days', amountEURMin: 800, amountEURMax: 1600 },
    { label: 'Lawyer consultation', amountEURMin: 50, amountEURMax: 150 }
  ],
  sources: [
    { title: 'AIMA — Irregular situation and regularisation', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 23/2007 — art. 192-193 (sanctions regime)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2007-34563275', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'EU 90/180 calculator', url: 'https://ec.europa.eu/assets/home/visa-calculator/calculator.htm', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Decreto-Lei 37-A/2024', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/37-a-2024-864229054', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}
