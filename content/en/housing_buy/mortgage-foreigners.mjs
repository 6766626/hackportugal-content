export default {
  editorialVoice: 'hackportugal',
  id: 'mortgage-foreigners',
  categoryId: 'housing_buy',
  title: 'Mortgage for foreigners in Portugal',
  tldr: 'Resident foreigners can obtain a mortgage for up to 80–90% of the property price from Portuguese banks. Non-residents — up to 60–70%. 6-month Euribor in early May 2026 — ~2.45–2.56% (down from the ~4% peak in late 2023, but rising moderately in Q1–Q2 2026). Typical Portuguese spreads — 0.6–1.5%. Total effective rate — 3.0–4.0%. Term — up to 40 years or until reaching 75–80 years of age. The process takes 30–90 days from dossier submission.',
  tags: ['mortgage', 'bank', 'housing', 'property'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'eligibility',
      title: 'Who can get it',
      content: [
        { kind: 'checklist', items: [
          'Residents of Portugal with income in € or earned in Portugal — up to 90% of the price for primary residence or up to 80% for a second home',
          'Non-residents with income outside Portugal — 60–70%',
          'EU citizens — on the same terms as Portuguese citizens',
          'Non-EU citizens with an autorização de residência of ≥2 years — standard terms',
          'Golden Visa applicants — special terms'
        ]},
        { kind: 'warning', text: 'Since 2022, citizens of the Russian Federation face restrictions in some banks — fewer options and possibly higher interest rates. Check the conditions at the specific bank.' }
      ]
    },
    {
      id: 'rates',
      title: 'Rates and types (2026)',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: 'Variable rate (Euribor + spread)', content: [
            { kind: 'paragraph', text: '6-month Euribor in early May 2026 ≈ 2.45–2.56% (after a peak of ~4% in 2023). Spread — 0.6–1.5%. Total — 3.0–4.0%. Reset every 6 months.' }
          ]},
          { id: 'r2', title: 'Fixed', content: [
            { kind: 'paragraph', text: 'For 5–20 years. ~3.0–4.0% in 2026. Protects against fluctuations, but less flexible.' }
          ]},
          { id: 'r3', title: 'Mixed', content: [
            { kind: 'paragraph', text: 'Fixed for the first 5–10 years → variable thereafter. Popular among foreigners.' }
          ]}
        ]}
      ]
    },
    {
      id: 'documents',
      title: 'Documents for the bank',
      content: [
        { kind: 'checklist', items: [
          'Passport + autorização de residência/Cartão de Cidadão',
          'NIF',
          'Last 3 IRS returns or the equivalent for non-residents',
          'Last 3–6 payslips / bank statements',
          'Credit history: for non-Portuguese applicants — a report from the country of residence',
          'Contrato promessa de compra e venda (preliminary contract)',
          'Caderneta Predial of the property (from the seller)',
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
          { id: 'p1', title: '1. Pre-approval', content: [
            { kind: 'paragraph', text: 'Approach banks (at least 3) → obtain a pre-approval indicating the amount and rate. Timeline — 2–3 weeks.' }
          ]},
          { id: 'p2', title: '2. Find a property', content: [
            { kind: 'paragraph', text: 'With pre-approval in hand, negotiations with the seller are more serious. Sign the CPCV (contrato de promessa) + pay a deposit (sinal) of 10% of the price.' }
          ]},
          { id: 'p3', title: '3. Bank valuation', content: [
            { kind: 'paragraph', text: 'The bank appoints a valuer. €300–500. If the valuation is below the price, the bank will finance only up to the valuation amount.' }
          ]},
          { id: 'p4', title: '4. Final approval', content: [
            { kind: 'paragraph', text: 'The bank issues an approval letter (carta de aprovação). Valid for 30–60 days.' }
          ]},
          { id: 'p5', title: '5. Escritura (notarial deed)', content: [
            { kind: 'paragraph', text: 'Simultaneous signing of the mortgage agreement and the deed of sale at the notary. The bank pays the seller, you receive the keys.' }
          ]}
        ]}
      ]
    },
    {
      id: 'costs',
      title: 'Associated costs',
      content: [
        { kind: 'checklist', items: [
          'IMT (property transfer tax) — 1–10% of the price (mainland), progressive scale',
          'IS (stamp duty) — 0.8% of the price + 0.6% of the mortgage',
          'Notary / escritura — €500–1500',
          'Registration — €250–400',
          'Life insurance (mandatory for a mortgage) — €200–800/year',
          'Home insurance — €150–400/year',
          'Bank fees — 0.5–1% of the mortgage'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Banco de Portugal — Housing Credit Guide', url: 'https://www.bportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Decreto-Lei 74-A/2017 — housing credit rules', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/74-a-2017', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ASF — Autoridade de Supervisão de Seguros (life insurance)', url: 'https://www.asf.com.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Portal das Finanças (tax portal) — IMT, IS calculators', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 90
}
