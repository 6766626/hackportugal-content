export default {
  editorialVoice: 'hackportugal',
  id: 'golden-visa-2026',
  categoryId: 'residence_permit',
  title: 'Golden Visa (ARI) in 2026 — current routes',
  tldr: 'Golden Visa (ARI, Autorização de Residência para Investimento) is a residence permit for investment. Since October 2023, property purchase has been REMOVED. Remaining routes: collective investment funds / venture capital €500,000 (not in property), R&D €500,000, culture €250,000 (€200,000 in low-density territories), capitalisation of an existing company €500,000 + 5 permanent jobs, creation of a new company + 5 jobs, or simply 10 permanent jobs. Minimum stay — 7 days in the first year + 14 days in each subsequent two-year period (this is a requirement for maintaining ARI; it does NOT make a person tax resident). Potential application for citizenship after 5 years — **03.05.2026 President Seguro promulgated Decreto AR 48/XVII**, which, after publication in the DRE, will increase the period to 10 years for third-country nationals.',
  audience: { citizenships: ['thirdCountry'] },
  tags: ['golden visa', 'ari', 'investment'],
  estimatedReadMinutes: 8,
  recentlyChangedAt: '2023-10-07',
  changeSummary: 'The Mais Habitação law (October 2023) abolished the Golden Visa route via property. Only “productive” investments remain.',
  steps: [
    {
      id: 'routes',
      title: 'Current investment routes (2026)',
      content: [
        { kind: 'checklist', items: [
          '€500,000 — units in a Portuguese collective investment undertaking / venture capital fund with maturity of at least 5 years; at least 60% of assets in commercial companies with registered office in Portugal; the fund must NOT be directly or indirectly linked to property',
          '€500,000 — research and development activity through public or private research institutions integrated into Portugal’s national scientific and technological system (not just any “technology companies”)',
          '€500,000 — capital increase of an existing Portuguese commercial company + creation of 5 permanent jobs OR maintenance of 10 jobs, of which ≥5 are permanent, for at least 3 years',
          '€250,000 — support for culture/arts/heritage (€200,000 for eligible low-density projects — 20% reduction)',
          '€500,000 — creation of a commercial company with registered office in Portugal + creation of 5 permanent jobs',
          '10 permanent jobs — create them with no minimum investment'
        ]},
        { kind: 'paragraph', text: 'For the R&D route, a low-density reduction to €400,000 may be possible under applicable conditions (Lei 23/2007 art. 3.º n.º 7; Portaria 208/2017).' },
        { kind: 'warning', text: 'NOT AVAILABLE since October 2023: purchase of residential property, purchase of tourism property. This is the main 2023 change.' }
      ]
    },
    {
      id: 'benefits',
      title: 'Advantages',
      content: [
        { kind: 'checklist', items: [
          'Minimum stay: 7 days in the first year + 14 days in each subsequent two-year period. This requirement relates to maintaining ARI; it does NOT make a person tax resident and by itself does NOT guarantee citizenship',
          'Potential path to citizenship after 5 years of lawful residence if the requirements of the Lei da Nacionalidade are met (A2 language, absence of disqualifying criminal/security grounds). **03.05.2026 President Seguro promulgated Decreto AR 48/XVII** — after publication in the DRE, the period for third-country nationals will increase to 10 years',
          'A Portuguese residence card gives the right to short-term travel within the Schengen Area for up to 90 days in any 180 days (NOT an “automatic Schengen visa”)',
          'Possibility to include family (spouse, children, dependent parents)',
          'Potential access to IFICI ONLY if the investor becomes tax resident in Portugal and separately meets the IFICI requirements (eligible activity, employer/entity, registration, no PT tax residence in the last 5 years). ARI by itself does NOT grant this regime'
        ]}
      ]
    },
    {
      id: 'process',
      title: 'Process',
      content: [
        { kind: 'substeps', items: [
          { id: 'g1', title: '1. NIF + account in a Portuguese bank', content: [
            { kind: 'paragraph', text: 'Through a representative online — entry into Portugal is not required at this stage.' }
          ]},
          { id: 'g2', title: '2. Choose a route and make the investment', content: [
            { kind: 'paragraph', text: 'Investment funds are the most popular option because of their flexibility. You can check the registration of the fund and the management company with the CMVM, but the CMVM does NOT publish a list of “approved Golden Visa funds”. ARI compliance is checked separately based on the fund documentation (investment policy, maturity, real-estate exposure) and a legal opinion.' }
          ]},
          { id: 'g3', title: '3. Prepare the dossier', content: [
            { kind: 'paragraph', text: 'Evidence of the investment, lawful source of funds, criminal record certificate, passport.' }
          ]},
          { id: 'g4', title: '4. Submit to AIMA', content: [
            { kind: 'paragraph', text: 'Via the specialised ARI portal. Processing often takes 12–24+ months because of the AIMA backlog; timings depend heavily on the biometrics slot and current AIMA practice.' }
          ]},
          { id: 'g5', title: '5. Biometrics + residence permit', content: [
            { kind: 'paragraph', text: 'Visit Portugal for biometrics. Initial residence permit for 2 years, then renewals.' }
          ]}
        ]}
      ]
    },
    {
      id: 'caveats',
      title: 'Pitfalls',
      content: [
        { kind: 'warning', text: 'For citizens of the Russian Federation/Belarus, there may be not only transfer difficulties, but also enhanced sanctions/AML checks, refusal by banks/funds to onboard, and delays/refusals at AIMA level. BEFORE investing, obtain a written position from the bank, the fund, the management company and a lawyer on sanctions compliance.' },
        { kind: 'warning', text: 'The AIMA queue is huge — the real time to obtain a residence permit is 12–24+ months from submission.' },
        { kind: 'warning', text: 'Source of funds is checked strictly — prepare the full chain of bank transactions.' }
      ]
    }
  ],
  costs: [
    { label: 'Minimum investment', amountEUR: 250000, note: 'from €250,000 (culture; €200,000 for eligible low-density) to €500,000 (funds/company; for R&D, €400,000 may be possible in low-density)' },
    { label: 'AIMA application fee', amountEUR: 708, note: 'guide figure according to the AIMA tabela from 01.03.2026; check against the current Portaria/table' },
    { label: 'AIMA residence permit (upon approval, for the main applicant)', amountEUR: 7097, note: 'guide figure according to the AIMA tabela from 01.03.2026; the exact amount is in the current fee table' },
    { label: 'Residence permit renewal', amountEUR: 3549, note: 'every 2 years, according to the new 2026 fee table' },
    { label: 'Legal support', amountEURMin: 5000, amountEURMax: 20000 }
  ],
  timelineDaysMin: 365,
  timelineDaysMax: 730,
  sources: [
    { title: 'AIMA — Autorização de Residência para Investimento (ARI)', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 23/2007, art. 3.º (consolidated) — main ARI routes', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2007-34563275', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Lei do Mais Habitação (56/2023) — abolition of property in ARI', url: 'https://diariodarepublica.pt/dr/detalhe/lei/56-2023', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'CMVM — registers of funds and management companies (NOT a list of ARI funds)', url: 'https://www.cmvm.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Portaria 480-A/2025/1 — AIMA tabela de taxas from 01.03.2026', url: 'https://diariodarepublica.pt/dr/detalhe/portaria/480-a-2025', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
