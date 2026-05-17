export default {
  editorialVoice: 'hackportugal',
  id: 'overstay-fines',
  categoryId: 'residence_permit',
  title: 'Fines for overstaying in Portugal',
  tldr: 'Overstaying is a serious breach. Exceeding 90 days in Schengen / the visa validity period / the residence permit validity period can lead to fines of €80–700, an entry in the Schengen Information System (SIS II), risk of refusal of renewal and future visas for 1-5 years, and in serious cases — a ban on entering Schengen. The worst case is cumulative overstay: the longer you are out of status, the lower the chance of legalising again.',
  tags: ['overstay', 'fine', 'aima'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'categories',
      title: 'What counts as overstaying',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: '90-day Schengen', content: [
            { kind: 'checklist', items: [
              'Visa-free tourists (BR, US, UK, CA, …) — 90 days in any 180 days in Schengen',
              'Counting days: calculator ec.europa.eu/home-affairs/what-we-do/policies/borders-and-visas/border-crossing/90-day-calculator',
              'Leaving for 1 day does NOT reset the counter — the 180-day window is rolling',
              'Exceeded by 1 day = overstay'
            ]}
          ]},
          { id: 'c2', title: 'Expired D visa', content: [
            { kind: 'paragraph', text: 'A D visa gives 4 months for entry and the AIMA appointment. If you missed your AIMA appointment and the visa has expired — you are overstaying, even if you are in Portugal.' }
          ]},
          { id: 'c3', title: 'Expired residence permit without proof', content: [
            { kind: 'checklist', items: [
              'Residence permit expired, renewal not submitted — overstay',
              'Residence permit expired, but there is proof of submission for renewal before expiry — legal status is maintained',
              'MdI confirmation (before 03.06.2024) — protected against overstay during the transition period',
              'Important: the confirmation is shown at the border when returning to Portugal'
            ]}
          ]},
          { id: 'c4', title: 'Overstay under temporary protection (Ukraine)', content: [
            { kind: 'paragraph', text: 'TPD has been extended until 04.03.2027. After that, without switching to a D visa / national status — overstay. While TPD is valid — overstay is impossible.' }
          ]}
        ]}
      ]
    },
    {
      id: 'fines',
      title: 'Fines and consequences',
      content: [
        { kind: 'paragraph', text: 'Under Lei 23/2007 art. 192–193 and Decreto-Lei 37-A/2024:' },
        { kind: 'checklist', items: [
          'Overstay up to 30 days: fine €80–160',
          'Overstay 30–90 days: fine €160–300',
          'Overstay 90+ days: fine €300–700 + possible entry ban',
          'Border control with an overstay — the fine is paid on the spot (or later at PSP); record in SIS II',
          'With two + recorded overstays — possible inclusion in an entry ban for the whole Schengen area (1-5 years)',
          'Children under 16 are not issued a fine, but the overstay is recorded',
          'Willingness to leave voluntarily and pay the fine — a mitigating circumstance'
        ]},
        { kind: 'warning', text: 'Overstay blocks: new D visas (AIMA/MNE checks history), an application for a residence permit from inside the country (under art. 88/89 legal entry was required — after Decreto-Lei 37-A/2024 the 88.2 route is closed, 89.2 — only under the transitional regime). There are three exits from overstay: (1) voluntary departure + payment of the fine + new visa through the consulate; (2) application for a status such as CPLP/refugee status/humanitarian; (3) risk: deportation by court decision.' }
      ]
    },
    {
      id: 'escape-routes',
      title: 'How to legalise from overstay',
      content: [
        { kind: 'substeps', items: [
          { id: 'e1', title: 'Option A — leave and apply from abroad (recommended)', content: [
            { kind: 'checklist', items: [
              'Go through exit control — the fine will be recorded; pay at the airport or later via Portal AT',
              'From your home country, apply for a D visa through the consulate',
              'The consul sees the overstay in your history — they may ask questions / refuse; a convincing justification (work, family, contract) is essential',
              'If the overstay is ≤30 days and there are no other breaches — chances are high; 90+ days — risks are significant'
            ]}
          ]},
          { id: 'e2', title: 'Option B — CPLP mechanism (if you are a citizen of a CPLP country)', content: [
            { kind: 'paragraph', text: 'Brazilians, Angolans, Mozambicans, etc. can apply for a CPLP residence permit while in Portugal, even with an overstay. AIMA prefers to grant status rather than deport if there is a contract / funds.' }
          ]},
          { id: 'e3', title: 'Option C — marriage / partnership with a Portuguese or EU citizen', content: [
            { kind: 'paragraph', text: 'A valid marriage / registered de facto partnership (união de facto) gives the right to Reagrupamento Familiar or the residence permit of a family member of an EU citizen. Overstay does not block this, but AIMA may first require the fine to be paid.' }
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
          '🛂 Passport stamps — Schengen entry/exit dates',
          '📅 90/180 calculator: ec.europa.eu/assets/home/visa-calculator/calculator.htm',
          '🏛️ AIMA — call the number from the current contacts page at aima.gov.pt; before calling, check the 808-number tariff with your operator',
          '📧 Book an appointment with AIMA on status issues',
          '⚖️ In disputed cases — lawyer (Ordem dos Advogados, portal.oa.pt), consultation €50-150'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Tips — how NOT to overstay',
      content: [
        { kind: 'checklist', items: [
          '🗓️ Put the visa/residence permit expiry date in your calendar + minus 90 days (this is how long AIMA takes to process a renewal)',
          '📝 Residence permit renewal — apply via portal-renovacoes.aima.gov.pt as early as possible',
          '📋 Keep ALL PDF confirmations — without them, the border does not understand that you are in process',
          '✈️ Do not leave Schengen with an expired residence permit and without confirmation — you may not be allowed back in',
          '⚠️ 90 days in Schengen as a tourist + applying for a residence permit = bad idea: if AIMA does not approve within 90 days, you will be overstaying',
          '🔔 If you change address or lose documents — notify AIMA within 60 days',
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
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
