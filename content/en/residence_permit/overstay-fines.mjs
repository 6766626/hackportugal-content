export default {
  editorialVoice: 'hackportugal',
  id: 'overstay-fines',
  categoryId: 'residence_permit',
  title: 'Fines for overstaying in Portugal',
  tldr: 'Overstaying is a serious breach. Exceeding 90 days in Schengen / the visa validity / the residence permit validity carries fines of €80–700, an entry in the Schengen Information System (SIS II), a risk of refusal for renewal and future visas for 1-5 years, and in serious cases — a ban on entering Schengen. Worst of all is cumulative overstay: the longer you are out of status, the lower the chance of legalising your status again.',
  tags: ['overstay', 'fine', 'aima', 'sef'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'categories',
      title: 'What counts as overstaying',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: '90-day Schengen rule', content: [
            { kind: 'checklist', items: [
              'Tourists with visa-free entry (BR, US, UK, CA, …) — 90 days in any 180 days in Schengen',
              'Counting days: calculator ec.europa.eu/home-affairs/what-we-do/policies/borders-and-visas/border-crossing/90-day-calculator',
              'Leaving for 1 day does NOT reset the counter — the 180-day window is rolling',
              'Exceeded by 1 day = overstay'
            ]}
          ]},
          { id: 'c2', title: 'Expired D visa', content: [
            { kind: 'paragraph', text: 'A D visa gives 4 months to enter and attend an appointment at AIMA. If you missed your AIMA appointment and the visa has expired — you are overstaying, even if you are in Portugal.' }
          ]},
          { id: 'c3', title: 'Expired residence permit without proof', content: [
            { kind: 'checklist', items: [
              'Residence permit expired, renewal not submitted — overstay',
              'Residence permit expired, but there is proof of renewal submission before expiry — legal status is maintained',
              'MdI confirmation (before 03.06.2024) — protected against overstay during the transition period',
              'Important: the confirmation is shown at the border when returning to Portugal'
            ]}
          ]},
          { id: 'c4', title: 'Overstay under temporary protection (Ukraine)', content: [
            { kind: 'paragraph', text: 'TPD has been extended until 04.03.2027. After that, without switching to a D visa / national status — overstay. While TPD is valid — overstay is not possible.' }
          ]}
        ]}
      ]
    },
    {
      id: 'fines',
      title: 'Fines and consequences',
      content: [
        { kind: 'paragraph', text: 'Under Lei 23/2007 art. 192–193 and DL 37-A/2024:' },
        { kind: 'checklist', items: [
          'Overstay up to 30 days: fine €80–160',
          'Overstay 30–90 days: fine €160–300',
          'Overstay 90+ days: fine €300–700 + possible entry ban',
          'Border control with an overstay — the fine is paid on the spot (or later at PSP); registration in SIS II',
          'With two + recorded overstays — possible inclusion in an entry ban for the whole Schengen area (1-5 years)',
          'Children under 16 are not fined, but the overstay is recorded',
          'Willingness to leave voluntarily and pay the fine — a mitigating circumstance'
        ]},
        { kind: 'warning', text: 'Overstaying blocks: new D visas (AIMA/MNE checks history), an application for a residence permit from inside the country (under art. 88/89 legal entry was required — after DL 37-A/2024 the 88.2 route is closed, 89.2 — only under the transition regime). There are three ways out of an overstay: (1) leave voluntarily + pay the fine + obtain a new visa through a consulate; (2) apply for a status such as CPLP/refugee/humanitarian status; (3) risk: deportation by court decision.' }
      ]
    },
    {
      id: 'escape-routes',
      title: 'How to legalise your status after overstaying',
      content: [
        { kind: 'substeps', items: [
          { id: 'e1', title: 'Option A — leave and apply from abroad (recommended)', content: [
            { kind: 'checklist', items: [
              'Pass exit control — the fine will be recorded; pay at the airport or later through Portal AT',
              'Apply for a D visa from your home country through the consulate',
              'The consul sees the overstay in your history — they may ask questions / refuse; a convincing justification (work, family, contract) is essential',
              'If the overstay is ≤30 days and there are no other breaches — chances are high; 90+ days — risks are significant'
            ]}
          ]},
          { id: 'e2', title: 'Option B — CPLP mechanism (if you are a citizen of a CPLP country)', content: [
            { kind: 'paragraph', text: 'Brazilians, Angolans, Mozambicans, etc. can apply for a CPLP residence permit while in Portugal, even with an overstay. AIMA prefers to grant status instead of deportation if there is a contract / funds.' }
          ]},
          { id: 'e3', title: 'Option C — marriage / partnership with a Portuguese or EU citizen', content: [
            { kind: 'paragraph', text: 'A valid marriage / registered de facto partnership (união de facto) gives the right to Reagrupamento Familiar or a residence permit as a family member of an EU citizen. Overstay does not block this, but AIMA may require the fine to be settled first.' }
          ]},
          { id: 'e4', title: 'Option D — application on humanitarian grounds (rare)', content: [
            { kind: 'paragraph', text: 'Medical treatment, pregnancy, asylum, family circumstances. Through a lawyer → AIMA / court. Long, difficult, requires justification.' }
          ]}
        ]}
      ]
    },
    {
      id: 'how-to-check',
      title: 'How to check your status',
      content: [
        { kind: 'checklist', items: [
          '🛂 Passport stamps — dates of entry/exit from Schengen',
          '📅 90/180 calculator: ec.europa.eu/assets/home/visa-calculator/calculator.htm',
          '🏛️ AIMA — call 808 257 257 and request a status check by NIF/Cartão de Cidadão',
          '📧 Book an appointment with AIMA on status issues',
          '⚖️ In disputed cases — lawyer (Ordem dos Advogados, portal.oa.pt), consultation €50-150'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Tips — how NOT to end up overstaying',
      content: [
        { kind: 'checklist', items: [
          '🗓️ Put the visa/residence permit expiry date in your calendar + minus 90 days (this is how long AIMA takes to process renewal)',
          '📝 Residence permit renewal — apply through portal-renovacoes.aima.gov.pt as early as possible',
          '📋 Keep ALL PDF confirmations — without them the border does not understand that you are in process',
          '✈️ Do not leave Schengen with an expired residence permit and without confirmation — you may not be allowed back in',
          '⚠️ 90 days in Schengen as a tourist + applying for a residence permit = a bad idea: if AIMA does not approve within 90 days, you will end up overstaying',
          '🔔 If you change address or lose documents — inform AIMA within 60 days',
          '📞 If you are unsure about your status — call AIMA / go to a lawyer; overstay is worse than prevention'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Fine for overstay up to 30 days', amountEURMin: 80, amountEURMax: 160 },
    { label: 'Fine for overstay 30-90 days', amountEURMin: 160, amountEURMax: 300 },
    { label: 'Fine for overstay 90+ days', amountEURMin: 300, amountEURMax: 700 },
    { label: 'Lawyer consultation', amountEURMin: 50, amountEURMax: 150 }
  ],
  sources: [
    { title: 'AIMA — Irregular situation and regularisation', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 23/2007 — art. 192-193 (sanctions regime)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2007-34563275', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'EU 90/180 calculator', url: 'https://ec.europa.eu/assets/home/visa-calculator/calculator.htm', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Decreto-Lei 37-A/2024', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/37-a-2024-864229054', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 180
}
