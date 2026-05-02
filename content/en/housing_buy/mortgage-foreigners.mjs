export default {
  editorialVoice: 'hackportugal',
  id: 'mortgage-foreigners',
  categoryId: 'housing_buy',
  title: 'Mortgages for foreigners in Portugal',
  tldr: 'Foreign residents can obtain a mortgage for up to 80–90% of the property value from Portuguese banks. Non-residents — up to 60–70%. 6-month Euribor in Q1 2026 — ~2.0–2.3% (down from a peak of 4% at the end of 2023). Typical Portuguese spreads are 0.6–1.5%. Total real rate — 2.7–3.8%. Term — up to 40 years or until reaching 75–80 years of age. The process takes 30–90 days from dossier submission.',
  tags: ['mortgage', 'bank', 'housing', 'property'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'eligibility',
      title: 'Who can obtain one',
      content: [
        { kind: 'checklist', items: [
          'Residents of Portugal with income in € or in Portugal — up to 90% of the value for a main residence or up to 80% for a second home',
          'Non-residents with income outside Portugal — 60–70%',
          'EU citizens — on equal terms with Portuguese citizens',
          'Non-EU citizens with a residence permit for ≥ 2 years — standard conditions',
          'Golden Visa applicants — special conditions'
        ]},
        { kind: 'warning', text: 'Citizens of the Russian Federation have faced restrictions in some banks since 2022 — there is less choice, and interest rates may be higher. Check the conditions with the specific bank.' }
      ]
    },
    {
      id: 'rates',
      title: 'Rates and types (2026)',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: 'Variable rate (Euribor + spread)', content: [
            { kind: 'paragraph', text: '6-month Euribor in Q1 2026 ≈ 2.0–2.3% (after a peak of ~4% in 2023). Spread — 0.6–1.5%. Total — 2.7–3.8%. Recalculated every 6 months.' }
          ]},
          { id: 'r2', title: 'Fixed rate', content: [
            { kind: 'paragraph', text: 'For 5–20 years. ~3.0–4.0% in 2026. Protects against fluctuations, but is less flexible.' }
          ]},
          { id: 'r3', title: 'Mixed rate', content: [
            { kind: 'paragraph', text: 'Fixed for the first 5–10 years → variable. Popular among foreigners.' }
          ]}
        ]}
      ]
    },
    {
      id: 'documents',
      title: 'Documents for the bank',
      content: [
        { kind: 'checklist', items: [
          'Passport + residence permit/Cartão de Cidadão',
          'NIF',
          'Last 3 IRS returns or equivalent for non-residents',
          'Last 3–6 payslips / bank statements',
          'Credit history: for non-Portuguese applicants — a certificate from the country of residence',
          'Contrato promessa de compra e venda (promissory contract)',
          'Caderneta Predial for the property (from the seller)',
          'Certidão Permanente Imóvel',
          'Valuation report (avaliação) — the bank may require its own valuer',
          'Co-applicant’s documents, if any'
        ]}
      ]
    },
    {
      id: 'process',
      title: 'Process',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: '1. Preliminary approval', content: [
            { kind: 'paragraph', text: 'Contact banks (at least 3) → obtain preliminary approval stating the amount and rate. Timeframe — 2–3 weeks.' }
          ]},
          { id: 'p2', title: '2. Find a property', content: [
            { kind: 'paragraph', text: 'With preliminary approval in hand, negotiations with the seller are taken more seriously. Sign the CPCV (contrato de promessa) + deposit (sinal) of 10% of the value.' }
          ]},
          { id: 'p3', title: '3. Bank valuation', content: [
            { kind: 'paragraph', text: 'The bank appoints a valuer. €300–500. If the valuation is below the price — the bank will only finance up to the valuation amount.' }
          ]},
          { id: 'p4', title: '4. Final approval', content: [
            { kind: 'paragraph', text: 'The bank issues an approval letter (carta de aprovação). Validity — 30–60 days.' }
          ]},
          { id: 'p5', title: '5. Escritura (notarial deed)', content: [
            { kind: 'paragraph', text: 'Simultaneous signing of the mortgage agreement and the purchase and sale agreement at the notary. The bank pays the money to the seller, and you receive the keys.' }
          ]}
        ]}
      ]
    },
    {
      id: 'costs',
      title: 'Associated costs',
      content: [
        { kind: 'checklist', items: [
          'IMT (property transfer tax) — 1–10% of the value (mainland), progressive scale',
          'IS (stamp duty) — 0.8% of the value + 0.6% of the mortgage',
          'Notary / escritura — €500–1500',
          'Registration — €250–400',
          'Life insurance (mandatory for the mortgage) — €200–800/year',
          'Home insurance — €150–400/year',
          'Bank fees — 0.5–1% of the mortgage'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Banco de Portugal — Guide to Housing Credit', url: 'https://www.bportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Decreto-Lei 74-A/2017 — housing credit rules', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/74-a-2017', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ASF — Autoridade de Supervisão de Seguros (life insurance)', url: 'https://www.asf.com.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Portal das Finanças (tax portal) — IMT, IS calculators', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 90
}
