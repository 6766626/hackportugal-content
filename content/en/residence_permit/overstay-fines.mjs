export default {
  editorialVoice: 'hackportugal',
  id: 'overstay-fines',
  categoryId: 'residence_permit',
  title: 'Fines for overstaying in Portugal',
  tldr: 'Overstaying is a serious breach. Under Lei 23/2007 art. 192 the fine (coima) depends on how long you overstay: €80–160 (up to 30 days), €160–320 (30–90), €320–500 (90–180), €500–700 (> 180 days). Reconfirm the amounts against the current version of art. 192 before paying.\n\nA fine by itself does NOT equal an SIS alert: an entry in the Schengen Information System (SIS) is made by a separate decision (usually in the case of an entry ban / expulsão, not for every fine). However, overstaying sharply increases the risk of refusal for renewals and future visas. The worst case is cumulative overstay: the longer you are without status, the lower the chance of becoming legal again.',
  tags: ['overstay', 'fine', 'aima'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'categories',
      title: 'What counts as overstaying',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: '90-day Schengen stay', content: [
            { kind: 'checklist', items: [
              'Tourists with visa-free entry (BR, US, UK, CA, …) — 90 days in any 180 days in the Schengen area',
              'Counting days: calculator ec.europa.eu/home-affairs/what-we-do/policies/borders-and-visas/border-crossing/90-day-calculator',
              'Leaving for 1 day does NOT reset the counter — the 180-day window is rolling',
              'Exceeding by 1 day = overstaying'
            ]}
          ]},
          { id: 'c2', title: 'Expired D visa', content: [
            { kind: 'paragraph', text: 'A D visa gives you 4 months to enter and attend an AIMA appointment. If you missed your AIMA appointment and the visa has expired, you are overstaying, even if you are in Portugal.' }
          ]},
          { id: 'c3', title: 'Expired residence permit without proof', content: [
            { kind: 'checklist', items: [
              'Residence permit expired, renewal not submitted — overstaying',
              'Residence permit expired, but you have proof that the renewal was submitted before expiry — legal status is maintained',
              'MdI confirmation (before 03.06.2024) — protected against overstaying during the transitional period',
              'Important: the confirmation is shown at the border when returning to Portugal'
            ]}
          ]},
          { id: 'c4', title: 'Overstay under temporary protection (Ukraine)', content: [
            { kind: 'paragraph', text: 'TPD has been extended until 04.03.2027. After that, without switching to a D visa / national status, it becomes overstaying. While TPD is valid, overstaying is not possible.' }
          ]}
        ]}
      ]
    },
    {
      id: 'fines',
      title: 'Fines and consequences',
      content: [
        { kind: 'paragraph', text: 'Under Lei 23/2007 art. 192 (as amended by Lei 18/2022), the law divides overstay into four periods with fixed coima ranges. The amounts below are from the version in force; reconfirm them against the current text of art. 192 on diariodarepublica.pt and with AIMA practice before paying:' },
        { kind: 'checklist', items: [
          'Overstay up to 30 days: coima €80–160',
          'Overstay 30–90 days: coima €160–320',
          'Overstay 90–180 days: coima €320–500',
          'Overstay more than 180 days: coima €500–700; high risk of expulsão (removal)',
          'Border control with an overstay — the fine is recorded; payment on the spot, at PSP or via Portal AT using a Multibanco reference',
          'Inclusion in SIS (alert for a Schengen entry ban) — a separate procedure, usually in the event of a formal expulsão or entry ban, not automatically because of the fine',
          'Children under 16 are not fined, but the overstay is recorded',
          'Willingness to leave voluntarily and pay the fine is a mitigating factor'
        ]},
        { kind: 'warning', text: 'Overstaying blocks: new D visas (AIMA/MNE checks history), an application for a residence permit from inside the country. After Lei 61/2025 (22.10.2025), the Manifestação de Interesse route as a mass pathway is fully closed. There are three ways out of an overstay: (1) leave voluntarily + pay the fine + obtain a new visa through the consulate; (2) apply for a status such as CPLP/refugee/humanitarian status; (3) risk: expulsão by court decision.' }
      ]
    },
    {
      id: 'escape-routes',
      title: 'How to become legal after overstaying',
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
            { kind: 'paragraph', text: 'Brazilians, Angolans, Mozambicans, etc. can apply for a CPLP residence permit while in Portugal, even with an overstay. AIMA prefers granting status instead of deportation if there is a contract / funds.' }
          ]},
          { id: 'e3', title: 'Option C — marriage / partnership with a Portuguese or EU citizen', content: [
            { kind: 'paragraph', text: 'A valid marriage / registered de facto partnership (união de facto) gives the right to Reagrupamento Familiar or a residence permit as a family member of an EU citizen. Overstaying does not block it, but AIMA may require the fine to be settled first.' }
          ]},
          { id: 'e4', title: 'Option D — application on humanitarian grounds (rare)', content: [
            { kind: 'paragraph', text: 'Medical treatment, pregnancy, refugee status, family circumstances. Through a lawyer → AIMA / court. Long, difficult, requires justification.' }
          ]}
        ]}
      ]
    },
    {
      id: 'how-to-check',
      title: 'How to check your status',
      content: [
        { kind: 'checklist', items: [
          '🛂 Passport stamps — dates of entry to/exit from the Schengen area',
          '📅 90/180 calculator: ec.europa.eu/assets/home/visa-calculator/calculator.htm',
          '🏛️ AIMA — call the number from the current contacts page at aima.gov.pt; before calling, check the 808-number tariff with your operator',
          '📧 Book an AIMA appointment about status questions',
          '⚖️ In disputed cases — a lawyer (Ordem dos Advogados, portal.oa.pt), consultation €50-150'
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
          '✈️ Do not leave the Schengen area with an expired residence permit and no confirmation — you may not be allowed back in',
          '⚠️ 90 days in the Schengen area as a tourist + applying for a residence permit = a bad idea: if AIMA does not approve within 90 days, you will be overstaying',
          '🔔 If you change address or lose documents — notify AIMA within 60 days',
          '📞 If you are unsure about your status — call AIMA / go to a lawyer; overstaying is worse than prevention'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Fine for overstaying up to 30 days (Lei 23/2007 art. 192 #1)', amountEURMin: 80, amountEURMax: 160, note: 'The coima range is set directly in art. 192 (as amended by Lei 18/2022); the specific amount within it is set by the authority / court' },
    { label: 'Fine for overstaying 30-90 days', amountEURMin: 160, amountEURMax: 320 },
    { label: 'Fine for overstaying 90-180 days', amountEURMin: 320, amountEURMax: 500 },
    { label: 'Fine for overstaying >180 days', amountEURMin: 500, amountEURMax: 700 },
    { label: 'Lawyer consultation', amountEURMin: 50, amountEURMax: 150 }
  ],
  sources: [
    { title: 'AIMA — Irregular situation and regularisation', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 23/2007 — art. 192-193 (penalty regime)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2007-34563275', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'EU 90/180 calculator', url: 'https://ec.europa.eu/assets/home/visa-calculator/calculator.htm', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Decreto-Lei 37-A/2024', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/37-a-2024-864229054', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
