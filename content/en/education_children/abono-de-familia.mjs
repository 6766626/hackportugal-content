export default {
  editorialVoice: 'hackportugal',
  id: 'abono-de-familia',
  categoryId: 'education_children',
  title: 'Abono de Família — child benefit',
  tldr: 'Abono de Família is a benefit for children/young people up to the age of 16; after 16 — with confirmed education, subject to age limits by education level (usually up to 24; in cases of disability, special rules/extension up to 27 may apply).\n\nThe amount is approximately €44.77–€190.98/month for basic abono (depending on escalão and age), plus possible supplements. Applications are usually made via Segurança Social Direta; after approval, payment is made monthly to the registered IBAN. Foreign citizens legally resident in Portugal and with a NISS may be eligible, subject to checks on income/resources, household composition, the child’s age and education.',
  tags: ['abono', 'benefit', 'family', 'children'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'who',
      title: 'Who is eligible',
      content: [
        { kind: 'checklist', items: [
          'Resident in Portugal with a NISS',
          'Children under 16 — no education requirement; from 16 — prova escolar is usually required',
          'Family income below the threshold (depends on the escalão — check the current values by year)',
          'For children over 16, education/school status usually needs to be confirmed; for younger children, school is not a condition. Registration with the SNS is useful, but not a basic condition for abono',
          'Foreign citizens legally resident in Portugal and with a NISS may be eligible under the same conditions of checks on income/resources, household composition, the child’s age and education; a NISS alone does not guarantee payment. DL 8/2019 removed the previous restrictions on a minimum period of residence'
        ]},
        { kind: 'paragraph', text: 'DL 8/2019 and subsequent reforms abolished the minimum residence period for Abono.' }
      ]
    },
    {
      id: 'amount',
      title: 'Amount (for 2026)',
      content: [
        { kind: 'paragraph', text: 'It is determined by the income escalão. Thresholds are linked to IAS 2026 = €537.13. Amounts for January 2026 according to ISS:' },
        { kind: 'checklist', items: [
          '1º escalão (lowest income) — €190.98 per month per child ≤36 months; €75.13 for an older child',
          '2º escalão — €161.65 / €75.13',
          '3º escalão — €132.07 (≤36 months) / €59.33 (36–72 months) / €54.35 (>72 months)',
          '4º escalão — €88.43 for children ≤36 months; €44.77 for 36–72 months; after 72 months, check eligibility (often the basic abono under the 4.º escalão is not paid)',
          '5º escalão — Abono is not paid'
        ]},
        { kind: 'paragraph', text: 'Single-parent families: +50%. Bonificação por deficiência — a fixed supplement in cases of disability. Additional extraordinário supplement — for the 2nd and subsequent children ≤36 months in escalões 1–4. Current values and escalão limits — always on seg-social.pt.' }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'How to apply',
      content: [
        { kind: 'substeps', items: [
          { id: 'a1', title: '1. Log in to Segurança Social Direta', content: [
            { kind: 'paragraph', text: 'seg-social.pt → SSD → log in via Chave Móvel Digital or NISS+password.' }
          ]},
          { id: 'a2', title: '2. “Família” → “Abono de Família”', content: [
            { kind: 'paragraph', text: 'Menu → “Requerer Abono de Família”. Complete the form online.' }
          ]},
          { id: 'a3', title: '3. Attach documents', content: [
            { kind: 'checklist', items: [
              'Child’s birth certificate (scan)',
              'Child’s NISS and NIF',
              'Confirmation from school (for compulsory school age)',
              'IBAN for payment'
            ]}
          ]},
          { id: 'a4', title: '4. Wait for confirmation', content: [
            { kind: 'timeline', text: '30–60 days. The payment start date depends on the date when entitlement arose and the application deadline: if you apply on time, payment may be backdated to an earlier date; if you apply late, payment is usually made only from the month after the application. For newborns, check the special application deadline.' }
          ]}
        ]}
      ]
    },
    {
      id: 'updates',
      title: 'Keeping it up to date',
      content: [
        { kind: 'paragraph', text: 'The escalão is recalculated automatically after IRS submission (August-September).\n\nIf IRS was not submitted/there is no tax data or the family has recently moved, Segurança Social may request prova de rendimentos/condição de recursos. For children/young people over 16, confirm education annually in SSD by the deadline indicated by SS (prova escolar).' },
        { kind: 'paragraph', text: 'If address, school or income changes — update the details in SSD within 30 days.' }
      ]
    },
    {
      id: 'related',
      title: 'Related benefits',
      content: [
        { kind: 'checklist', items: [
          'Bolsa de Estudo — scholarship for school pupils from low-income families',
          'ASE (Acção Social Escolar) — free meals, transport, textbooks',
          'Garantia para a Infância — an automatic/calculated top-up mechanism for children from very low-income households; it depends not only on the abono escalão, but also on IRS/family income',
          'Subsídio Parental — parental benefit payments (mother/father)',
          'Licença Parental — parental leave (120–180 days)'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Segurança Social — Abono de Família', url: 'https://www.seg-social.pt/abono-de-familia-para-criancas-e-jovens', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Request Abono de Família', url: 'https://www.gov.pt/servicos/pedir-o-abono-de-familia-para-criancas-e-jovens', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Decreto-Lei 176/2003 — Abono de Família', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/176-2003', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
