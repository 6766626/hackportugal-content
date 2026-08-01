export default {
  editorialVoice: 'hackportugal',
  id: 'mortgage-foreigners',
  categoryId: 'housing_buy',
  title: 'Mortgages for foreigners in Portugal',
  tldr: 'Foreign residents can obtain a mortgage: the macroprudential LTV for owner-occupied/permanent housing is up to 90% of the lower of the purchase price and valuation; for a secondary residence, up to 80%; non-resident borrowers are usually lower. 6-month Euribor in early May 2026 ≈ 2.45–2.56% (down from a peak of ~4% in 2023). Typical Portuguese spreads are 0.6–1.5%. The real rate is ~3.0–4.0%.\n\n🆕 Since 01.08.2026, the Recomendação Macroprudencial n.º 1/2026 of Banco de Portugal is in force (it replaced the 2018 recommendation): the DSTI debt-service limit was cut from 50% to 45% of net income (exceptions — up to 10% of the bank\'s credit amount granted per semester); the maturity limit was simplified to two age groups — up to and including 35 years old: maximum 40 years, over 35: maximum 35 years (the 31–35 group actually gained: previously it was 37). The 100% LTV option for buying property owned by the bank itself has been abolished. The rules apply to loans whose creditworthiness assessment is carried out by the bank from 1 August. The process takes 30–90 days.',
  tags: ['mortgage', 'bank', 'housing', 'property'],
  estimatedReadMinutes: 7,
  recentlyChangedAt: '2026-08-01',
  changeSummary: '🆕 From 01.08.2026 — Recomendação Macroprudencial 1/2026 BdP: DSTI cut from 50% to 45% of net income, maturities simplified to two groups (up to 35 incl. — 40 years, older — 35), 100% LTV for purchases from the bank abolished. The 90/80% LTV limits and stress add-ons are unchanged; the state guarantee for young borrowers is not affected.',
  steps: [
    {
      id: 'eligibility',
      title: 'Who can get one',
      content: [
        { kind: 'checklist', items: [
          'Residents with income in Portugal: macroprudential LTV — up to 90% of the lower of the purchase price and valuation for an owner-occupied permanent residence, up to 80% for a secondary residence',
          'Non-residents with income outside Portugal — usually 60–70%; specific conditions depend on the bank',
          'EU citizens: banks assess tax residency, the source/currency of income, employment stability — EU citizenship in itself does not mean the same conditions as a PT resident',
          'Non-EU citizens: there is no universal “2 years of residence permit” rule; some banks are more favourable to a stable residence permit with PT income — assessment is individual',
          'Golden Visa: new ARI via property purchase is no longer available (Lei 56/2023, Mais Habitação); for existing ARI applicants and holders, the bank will still individually check the source of funds, sanctions risks and income.',
          '🆕 DSTI (taxa de esforço) since 01.08.2026: all loan payments ≤ 45% of net income (was 50%); when calculating, the bank adds a stress add-on to the rate (unchanged since 2023): +1.5 pp for loans longer than 10 years (+0.5/+1.0 for shorter ones). It is a comply-or-explain recommendation: a bank may deviate but must justify it — in practice, almost all follow it.',
          '🆕 100% LTV when buying a property from the bank itself — abolished from 01.08.2026 (the general 90/80% limit applies). The state guarantee for young borrowers (up to 35 years old, up to 15% of the price, homes up to €450k, contracts until 31.12.2026) is NOT affected — with it, financing of up to 100% is still possible.'
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
            { kind: 'paragraph', text: '6-month Euribor in early May 2026 ≈ 2.45–2.56% (after a peak of ~4% in 2023). Spread — 0.6–1.5%. Total — 3.0–4.0%. Recalculated every 6 months.' }
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
          'Credit history: for non-Portuguese applicants — certificate from the country of residence',
          'Contrato promessa de compra e venda (preliminary contract)',
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
          { id: 'p1', title: '1. Pre-approval', content: [
            { kind: 'paragraph', text: 'Contact banks (at least 3) → obtain pre-approval indicating the amount and rate. Timeframe — 2–3 weeks.' }
          ]},
          { id: 'p2', title: '2. Find a property', content: [
            { kind: 'paragraph', text: 'With pre-approval in hand, negotiations with the seller are taken more seriously. Sign the CPCV (contrato de promessa) + deposit (sinal) — usually 10% (not a mandatory rule). ⚠️ Make sure to include a mortgage contingency clause in the CPCV — otherwise, if the bank refuses the mortgage, you may lose the sinal.' }
          ]},
          { id: 'p3', title: '3. Bank valuation', content: [
            { kind: 'paragraph', text: 'The bank appoints a valuer. €300–500. If the valuation is below the price, the bank will finance only up to the valuation amount.' }
          ]},
          { id: 'p4', title: '4. Final approval', content: [
            { kind: 'paragraph', text: 'The bank issues an approval letter (carta de aprovação). Validity period — 30–60 days.' }
          ]},
          { id: 'p5', title: '5. Escritura (notarial deed)', content: [
            { kind: 'paragraph', text: 'The mortgage agreement and the purchase and sale deed are signed simultaneously before a notary. The bank pays the money to the seller, and you receive the keys.' }
          ]}
        ]}
      ]
    },
    {
      id: 'costs',
      title: 'Associated costs',
      content: [
        { kind: 'checklist', items: [
          'IMT (property transfer tax): for own permanent residence — marginal progressive scale with abatements (may be 0% for lower price thresholds); for other residential property — from 1%. See the separate IMT guide',
          'IS (stamp duty) — 0.8% of the property value + 0.6% of the mortgage amount',
          'Notary / escritura — €500–1500',
          'Registration — €250–400',
          'Life insurance — usually a contractual condition of the bank, not a legal requirement; the bank may approve alternative structures (escolha do credor). Cost varies by age/health; ~€200–800/year',
          'Home insurance — €150–400/year',
          'Bank fees — 0.5–1% of the mortgage'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Banco de Portugal — Recomendação Macroprudencial n.º 1/2026 (in force from 01.08.2026)', url: 'https://www.bportugal.pt/sites/default/files/documents/2026-07/Recomendacao_Macroprudencial_n.1-2026.pdf', kind: 'official', language: 'pt', lastRetrieved: '2026-08-01' },
    { title: 'Banco de Portugal — Housing Credit Guide', url: 'https://www.bportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Decreto-Lei (decree-law) 74-A/2017 — housing credit rules', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/74-a-2017', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ASF — Autoridade de Supervisão de Seguros (life insurance)', url: 'https://www.asf.com.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Portal das Finanças (tax portal) — IMT, IS calculators', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-08-01',
  verifyIntervalDays: 90
}
