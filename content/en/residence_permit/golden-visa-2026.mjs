export default {
  editorialVoice: 'hackportugal',
  id: 'golden-visa-2026',
  categoryId: 'residence_permit',
  title: 'Golden Visa (ARI) in 2026 — current routes',
  tldr: 'Golden Visa (ARI, Autorização de Residência para Investimento) is a residence permit through investment. Since October 2023, the purchase of real estate has been REMOVED. Remaining routes are: collective investment / venture capital funds €500,000 (not in real estate), R&D €500,000, culture €250,000 (€200,000 in low-density areas), capitalisation of an existing company €500,000 + 5 permanent jobs, creation of a new company + 5 jobs, or simply 10 permanent jobs. Minimum stay — 7 days in the first year + 14 days in each subsequent two-year period (this is a requirement for maintaining ARI; it does NOT make the person a tax resident).\n\nPath to citizenship: since 19.05.2026 Lei Orgânica n.º 1/2026 (published in the DRE on 18.05.2026) is in force and has raised the legal-residence period for naturalisation to 10 years for third-country nationals (7 years for CPLP and EU nationals). The former 5-year period no longer applies.',
  audience: { citizenships: ['thirdCountry'] },
  tags: ['golden visa', 'ari', 'investment'],
  estimatedReadMinutes: 8,
  recentlyChangedAt: '2023-10-07',
  changeSummary: 'The Mais Habitação law (October 2023) abolished the Golden Visa route via real estate. Only “productive” investments remain.',
  steps: [
    {
      id: 'routes',
      title: 'Current investment routes (2026)',
      content: [
        { kind: 'checklist', items: [
          '€500,000 — units in a Portuguese collective investment undertaking / venture capital fund with maturity of at least 5 years; at least 60% of assets in commercial companies with sede in Portugal; the fund must NOT be directly or indirectly connected to real estate',
          '€500,000 — scientific research activity through public or private scientific research institutions integrated into Portugal’s national scientific and technological system (not just any “technology companies”)',
          '€500,000 — capital increase of an existing Portuguese commercial company + creation of 5 permanent jobs OR maintenance of 10 jobs, of which ≥5 are permanent, for at least 3 years',
          '€250,000 — support for culture/arts/heritage (€200,000 for eligible low-density projects — 20% reduction)',
          '€500,000 — creation of a commercial company with sede in Portugal + creation of 5 permanent jobs',
          '10 permanent jobs — create without a minimum investment amount'
        ]},
        { kind: 'paragraph', text: 'For the R&D route, a low-density reduction to €400,000 may be possible where the applicable conditions are met (Lei 23/2007 art. 3.º n.º 7; Portaria 208/2017).' },
        { kind: 'warning', text: 'NOT AVAILABLE since October 2023: purchase of housing, purchase of tourist real estate. This is the main 2023 change.' }
      ]
    },
    {
      id: 'benefits',
      title: 'Advantages',
      content: [
        { kind: 'checklist', items: [
          'Minimum stay: 7 days in the first year + 14 days in each subsequent two-year period. This requirement relates to maintaining ARI; it does NOT make the person a tax resident and by itself does NOT guarantee citizenship',
          'Potential route to citizenship subject to meeting Lei da Nacionalidade requirements (A2 language, no disqualifying criminal/security grounds). Since 19.05.2026 Lei Orgânica n.º 1/2026 is in force: the legal-residence period required for naturalisation is 10 years for third-country nationals (7 years for CPLP and EU nationals); the former 5-year period has been repealed',
          'A Portuguese residence card gives the right to short-term travel within the Schengen Area for up to 90 days in any 180 days (NOT an “automatic Schengen visa”)',
          'Possibility to include family (spouse, children, dependent parents)',
          'Potential access to IFICI ONLY if the investor becomes a Portuguese tax resident and separately meets IFICI requirements (eligible activity, employer/entity, registration, no PT tax residence in the previous 5 years). ARI by itself does NOT grant this regime'
        ]}
      ]
    },
    {
      id: 'process',
      title: 'Process',
      content: [
        { kind: 'substeps', items: [
          { id: 'g1', title: '1. NIF + Portuguese bank account', content: [
            { kind: 'paragraph', text: 'Through a representative online — entry into Portugal is not required at this stage.' }
          ]},
          { id: 'g2', title: '2. Choose a route and make the investment', content: [
            { kind: 'paragraph', text: 'Investment funds are the most popular option because of their flexibility. On the CMVM website, you can check the registration of the fund and management company, but CMVM does NOT publish a list of “approved Golden Visa funds”. ARI eligibility is checked separately against the fund documentation (investment policy, maturity, real-estate exposure) and a legal opinion.' }
          ]},
          { id: 'g3', title: '3. Prepare the dossier', content: [
            { kind: 'paragraph', text: 'Evidence of the investment, lawful source of funds, criminal record certificate, passport.' }
          ]},
          { id: 'g4', title: '4. Submit to AIMA', content: [
            { kind: 'paragraph', text: 'Via the dedicated ARI portal. Processing often takes 12–24+ months because of the AIMA backlog; timeframes depend heavily on the biometrics slot and current AIMA practice.' }
          ]},
          { id: 'g5', title: '5. Biometrics + residence permit', content: [
            { kind: 'paragraph', text: 'Visit Portugal for biometrics. The initial residence permit is for 2 years, followed by renewals.' }
          ]}
        ]}
      ]
    },
    {
      id: 'caveats',
      title: 'Pitfalls',
      content: [
        { kind: 'warning', text: 'For citizens of the Russian Federation/Belarus, there may be not only transfer difficulties, but also enhanced sanctions/AML checks, refusal by banks/funds to onboard, and delays/refusals at AIMA level. BEFORE investing, obtain the written position of the bank, fund, management company and lawyer on sanctions compliance.' },
        { kind: 'warning', text: 'The queue at AIMA is huge — the real time to obtain a residence permit is 12–24+ months from submission.' },
        { kind: 'warning', text: 'Source of funds is checked strictly — prepare the full chain of bank transactions.' }
      ]
    }
  ],
  costs: [
    { label: 'Minimum investment', amountEUR: 250000, note: 'from €250,000 (culture; €200,000 for eligible low-density) to €500,000 (funds/company; for R&D, €400,000 may be possible in low-density areas)' },
    { label: 'AIMA fee for receiving and analysing the application', amountEUR: 843, note: 'exactly €842.80 per tabela AIMA (Portaria 307/2023, updated from 01.03.2026); check against the current table' },
    { label: 'AIMA residence permit (upon approval, for the main applicant)', amountEUR: 8419, note: 'exactly €8,418.90 per tabela AIMA (Portaria 307/2023, updated from 01.03.2026); the exact amount is in the current fee table' },
    { label: 'Residence permit renewal', amountEUR: 4210, note: 'exactly €4,210.30 per tabela AIMA (Portaria 307/2023, updated from 01.03.2026), every 2 years' },
    { label: 'Legal support', amountEURMin: 5000, amountEURMax: 20000 }
  ],
  timelineDaysMin: 365,
  timelineDaysMax: 730,
  sources: [
    { title: 'AIMA — Autorização de Residência para Investimento (ARI)', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 23/2007, art. 3.º (consolidated) — main ARI routes', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2007-34563275', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Lei do Mais Habitação (56/2023) — removal of real estate from ARI', url: 'https://diariodarepublica.pt/dr/detalhe/lei/56-2023', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'CMVM — registers of funds and management companies (NOT a list of ARI funds)', url: 'https://www.cmvm.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Portaria 307/2023, de 13 de outubro — tabela de taxas AIMA (CPI update from 01.03.2026)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/portaria/2023-222418094', kind: 'law', language: 'pt', lastRetrieved: '2026-05-31' },
    { title: 'Lei Orgânica n.º 1/2026, de 18 de maio — amendment to the Lei da Nacionalidade (10-year naturalisation period for third countries)', url: 'https://diariodarepublica.pt/dr/detalhe/lei-organica/1-2026-1123539996', kind: 'law', language: 'pt', lastRetrieved: '2026-05-31' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
