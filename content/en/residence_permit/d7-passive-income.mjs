export default {
  editorialVoice: 'hackportugal',
  id: 'd7-passive-income',
  categoryId: 'residence_permit',
  title: 'D7 visa (passive income)',
  tldr: 'D7 is a visa for those who have stable passive income (pension, rent, dividends).\n\nThe baseline threshold in consular practice is **1× SMN (Portugal’s minimum wage) for the applicant, which in 2026 = €920/month** (Portaria 1563/2007 art. 16-A is applied by analogy to sufficiency of means; the Lisboa/Rio/Moscow consulates use SMN, not IAS).\n\nStandard family coefficient: +50% SMN for a spouse (€460), +30% SMN for each child (€276).\n\nA deposit/reserve in a Portuguese account is usually **12× SMN = €11,040** for the main applicant (in case the income temporarily stops); this is consular practice, not a strict legal requirement. After 5 years of legal residence, a permanent residence permit or citizenship may be possible (under the current Lei 37/81; the new law Decreto AR 48/XVII was promulgated on 03.05.2026 and will increase the period to 10 years for third-country nationals after publication in the DRE — check the current publication status).',
  audience: { citizenships: ['thirdCountry', 'cplp'] },
  tags: ['d7', 'residence permit', 'passive income'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'income-requirements',
      title: 'Financial requirements (2026)',
      content: [
        { kind: 'paragraph', text: 'The minimum income for D7 in consular practice is tied to **SMN (Salário Mínimo Nacional)**, not to IAS. SMN for 2026 = **€920/month** (DL 112/2025). Baseline guidance:' },
        { kind: 'checklist', items: [
          'Applicant: ≥ 1× SMN = **€920/month** of passive income',
          'Spouse / partner: +50% SMN = **€460/month**',
          'Child under 18 (or dependant): +30% SMN = **€276/month**',
          'Example for a family of 3: 920 + 460 + 276 = **€1,656/month**'
        ]},
        { kind: 'paragraph', text: 'In addition, the consulate / AIMA usually asks for proof of a deposit in a Portuguese account of **12× SMN = €11,040** for the applicant — as a reserve in case the income temporarily stops. This is practice, not a strict legal requirement; for a family, the same 50%/30% coefficients are added.' },
        { kind: 'checklist', items: [
          'Passive income sources: pension, rent, dividends, royalties, interest on deposits, licensing payments',
          'NOT suitable as the main source: salary and active freelance fees. For employment with a Portuguese employer, D1 is considered; for independent professional/entrepreneurial activity — D2; for highly qualified activity — D3; for remote work for foreign employers/clients — D8',
          'In practice, consulates expect 1.5–2× the minimum for comfortable approval (especially if the income is purely investment-based)',
          'Stability — documentary proof of income for 6–12 months'
        ]},
        { kind: 'warning', text: 'Do not use IAS (€537.13) as the basis for D7 — it understates the requirement by about €400/month for the main applicant. IAS applies to social benefits and tax deductions, but NOT to the D7 minimum. Before applying, check the current SMN on the gov.pt website — it is reviewed annually.' }
      ]
    },
    {
      id: 'process',
      title: 'Process',
      content: [
        { kind: 'substeps', items: [
          { id: 'd1', title: '1. NIF (remotely through a representative)', content: [
            { kind: 'paragraph', text: 'Before applying for the visa, obtain a NIF through a representative (see "NIF for third countries").' }
          ]},
          { id: 'd2', title: '2. Open an account with a Portuguese bank', content: [
            { kind: 'paragraph', text: 'Transfer the reserve deposit **12× SMN = €11,040** (2026). For a spouse +50% (€5,520), for a child +30% (€3,312). As an alternative — proof of stable monthly receipts for 6–12 months. Do not use 12×IAS — this understates the reserve.' }
          ]},
          { id: 'd3', title: '3. Rent accommodation in Portugal', content: [
            { kind: 'paragraph', text: 'Long-term contract (≥ 12 months) registered with Finanças (otherwise the consulate may not accept it). On Flatio / Idealista / through local agents.' }
          ]},
          { id: 'd4', title: '4. Book an appointment at the consulate', content: [
            { kind: 'paragraph', text: 'Vistos.mne.gov.pt → choose the country → book online. Waiting times can be 2–4 months in the Russian Federation/Belarus.' }
          ]},
          { id: 'd5', title: '5. Submit documents', content: [
            { kind: 'paragraph', text: 'Prepare the full set. Processing time is 60–90 days.' }
          ]},
          { id: 'd6', title: '6. Enter on the D7 visa (4 months × 2 entries)', content: [
            { kind: 'paragraph', text: 'The D7 visa gives 4 months to enter and complete the residence permit process at AIMA.' }
          ]},
          { id: 'd7', title: '7. AIMA appointment → obtaining the residence permit', content: [
            { kind: 'paragraph', text: 'Interview + biometrics. The card arrives within 30–90 days.' }
          ]}
        ]}
      ]
    },
    {
      id: 'after',
      title: 'After obtaining the residence permit',
      content: [
        { kind: 'paragraph', text: 'Initial residence permit for 2 years, renewal for 3 years → 5 years in total. After that, it is possible to request a permanent residence permit or citizenship (under the current Lei 37/81 — after 5 years; **Decreto AR 48/XVII was promulgated by President Seguro on 03.05.2026** and will increase the period to 10 years for third-country nationals after publication in the DRE).' },
        { kind: 'warning', text: 'D7 requires “effective residence”: there are limits on absences. Under art. 85 Lei 23/2007, absence for more than 6 consecutive months or more than 8 months in total over 2 years during the validity of the residence permit is sufficient for cancellation of the residence permit. These are absence limits, not a “minimum residence” requirement; for renewal, AIMA checks compliance with these limits.' }
      ]
    }
  ],
  documents: [
    { title: 'Passport', note: '≥ 6 months + 2 blank pages' },
    { title: '2 photos 3x4' },
    { title: 'Resident visa application form (Pedido de Visto de Residência)' },
    { title: 'No criminal record certificate with apostille and translation' },
    { title: 'Proof of passive income for 6–12 months' },
    { title: 'Bank statement (Portugal + country of residence) for 3–6 months' },
    { title: 'NIF' },
    { title: 'Rental contract for ≥ 12 months (registered with Finanças)' },
    { title: 'Health insurance (for the visa period)' }
  ],
  costs: [
    { label: 'Consular fee', amountEUR: 90 },
    { label: 'AIMA — appointment + analysis', amountEUR: 133, note: 'new tariff from 01.03.2026' },
    { label: 'AIMA — issuance of residence permit (art. 75)', amountEUR: 307.20, note: 'new tariff from 01.03.2026' },
    { label: 'Consulate services (forwarding fee)', amountEURMin: 20, amountEURMax: 70 },
    { label: 'Translation + apostilles', amountEURMin: 200, amountEURMax: 500 },
    { label: 'Insurance (year)', amountEURMin: 250, amountEURMax: 600 },
    { label: 'Deposit into a Portuguese account (reserve)', amountEUR: 11040, note: '12× SMN = 12 × €920, refundable; for a family, 50%/30% is added for spouse/children' }
  ],
  timelineDaysMin: 90,
  timelineDaysMax: 180,
  sources: [
    { title: 'Vistos MNE — D7 Income', url: 'https://vistos.mne.gov.pt/pt/vistos-nacionais/informacao-geral/tipo-de-visto', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — Autorização de Residência (residence permit)', url: 'https://aima.gov.pt/pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei nº 23/2007 (Entry Regime) — DRE', url: 'https://dre.pt/dre/legislacao-consolidada/lei/2007-34532975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}
