export default {
  editorialVoice: 'hackportugal',
  id: 'd7-passive-income',
  categoryId: 'residence_permit',
  title: 'D7 visa (passive income)',
  tldr: 'D7 is a visa for those with stable passive income (pension, rent, dividends). The baseline threshold in consular practice is 1 IAS (€537.13 per month in 2026) for the applicant, +50% IAS for a spouse, +30% IAS for a child. A 12× IAS deposit (€6,445.56) is usually an alternative to regular income or an additional guarantee for borderline cases, not a mandatory second requirement. After 5 years of legal residence, a permanent residence permit or citizenship may be possible (under the current Lei 37/81; the new law approved on 01.04.2026 had NOT been promulgated as of 28.04.2026).',
  audience: { citizenships: ['thirdCountry', 'cplp'] },
  tags: ['d7', 'residence permit', 'passive income'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'income-requirements',
      title: 'Financial requirements (2026)',
      content: [
        { kind: 'paragraph', text: 'The minimum income is linked to the IAS (Indexante dos Apoios Sociais) — €537.13 per month for 2026 (Portaria 480-A/2025/1 of 30.12.2025, +2.8% from €522.50 in 2025). The legal requirement (Lei 23/2007 + Portaria 328/2022):' },
        { kind: 'checklist', items: [
          'Applicant: ≥ 1 IAS = €537.13 per month in passive income',
          'Spouse / partner: +50% IAS = €268.57 per month',
          'Child under 18 (or dependant): +30% IAS = €161.14 per month',
          'Example for a family of 3: 537.13 + 268.57 + 161.14 = €966.84 per month'
        ]},
        { kind: 'paragraph', text: 'In addition, the consulate / AIMA requires proof of a deposit in a Portuguese account amounting to 12× IAS (€6,445.56) for the applicant — as a reserve in case the income temporarily stops.' },
        { kind: 'checklist', items: [
          'Sources of passive income: pension, rent, dividends, royalties, interest on deposits, licence payments',
          'NOT suitable: salary, freelance fees (for these — D1/D3/D8 or art. 90.2)',
          'In practice, consulates expect 1.5–2× the minimum for a comfortable approval (especially if the income is purely investment-based)',
          'Stability — documentary proof of income for 6–12 months'
        ]},
        { kind: 'warning', text: 'If the 2026 IAS is revised by a new Portaria (usually in January), it must be recalculated. The current value is on seg-social.pt.' }
      ]
    },
    {
      id: 'process',
      title: 'Process',
      content: [
        { kind: 'substeps', items: [
          { id: 'd1', title: '1. NIF (remotely via a representative)', content: [
            { kind: 'paragraph', text: 'Before applying for the visa, obtain a NIF through a representative (see "NIF for third countries").' }
          ]},
          { id: 'd2', title: '2. Open an account with a Portuguese bank', content: [
            { kind: 'paragraph', text: 'Transfer the reserve deposit of 12× IAS = €6,445.56 (2026). For a spouse +50%, for a child +30%. Alternatively — proof of stable monthly receipts over 6–12 months.' }
          ]},
          { id: 'd3', title: '3. Rent accommodation in Portugal', content: [
            { kind: 'paragraph', text: 'A long-term contract (≥ 12 months) registered with Finanças (otherwise the consulate may not accept it). On Flatio / Idealista / through local agents.' }
          ]},
          { id: 'd4', title: '4. Book an appointment at the consulate', content: [
            { kind: 'paragraph', text: 'Vistos.mne.gov.pt → choose the country → book online. Waiting lists can be 2–4 months in the Russian Federation/Belarus.' }
          ]},
          { id: 'd5', title: '5. Submit the documents', content: [
            { kind: 'paragraph', text: 'Prepare the full set. Processing time is 60–90 days.' }
          ]},
          { id: 'd6', title: '6. Enter on the D7 visa (4 months × 2 entries)', content: [
            { kind: 'paragraph', text: 'The D7 visa gives you 4 months to enter and apply for a residence permit with AIMA.' }
          ]},
          { id: 'd7', title: '7. AIMA appointment → obtaining the residence permit', content: [
            { kind: 'paragraph', text: 'Interview + biometrics. The card arrives in 30–90 days.' }
          ]}
        ]}
      ]
    },
    {
      id: 'after',
      title: 'After obtaining the residence permit',
      content: [
        { kind: 'paragraph', text: 'The initial residence permit is for 2 years, renewed for 3 years → 5 years in total. After that, it is possible to request a permanent residence permit or citizenship (under the current Lei 37/81 — after 5 years; the new law of 01.04.2026 had NOT been promulgated as of 28.04.2026).' },
        { kind: 'warning', text: 'D7 requires “effective residence”: there are limits on absences. Under art. 85 Lei 23/2007, absence of more than 6 consecutive months or more than 8 months in total over 2 years during the validity of the residence permit is sufficient for cancellation of the residence permit. These are absence limits, not a “minimum stay”; for renewal, AIMA checks compliance with these limits.' }
      ]
    }
  ],
  documents: [
    { title: 'Passport', note: '≥ 6 months + 2 blank pages' },
    { title: '2 photos 3x4' },
    { title: 'Resident visa application form (Pedido de Visto de Residência)' },
    { title: 'Criminal record certificate with apostille and translation' },
    { title: 'Proof of passive income for 6–12 months' },
    { title: 'Bank statement (Portugal + country of residence) for 3–6 months' },
    { title: 'NIF' },
    { title: 'Rental contract for ≥ 12 months (registered with Finanças)' },
    { title: 'Health insurance (for the duration of the visa)' }
  ],
  costs: [
    { label: 'Consular fee', amountEUR: 90 },
    { label: 'AIMA — appointment + assessment', amountEUR: 133, note: 'new tariff from 01.03.2026' },
    { label: 'AIMA — issue of residence permit (art. 75)', amountEUR: 307.20, note: 'new tariff from 01.03.2026' },
    { label: 'Consulate services (postal fee)', amountEURMin: 20, amountEURMax: 70 },
    { label: 'Translation + apostilles', amountEURMin: 200, amountEURMax: 500 },
    { label: 'Insurance (year)', amountEURMin: 250, amountEURMax: 600 },
    { label: 'Deposit into a Portuguese account (reserve)', amountEUR: 6445.56, note: '12× IAS, refundable' }
  ],
  timelineDaysMin: 90,
  timelineDaysMax: 180,
  sources: [
    { title: 'Vistos MNE — D7 Income', url: 'https://vistos.mne.gov.pt/pt/vistos-nacionais/informacoes-gerais/tipos-de-visto', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — Autorização de Residência (residence permit)', url: 'https://aima.gov.pt/pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei nº 23/2007 (Entry Regime) — DRE', url: 'https://dre.pt/dre/legislacao-consolidada/lei/2007-34532975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
