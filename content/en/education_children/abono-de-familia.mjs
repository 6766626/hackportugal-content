export default {
  editorialVoice: 'hackportugal',
  id: 'abono-de-familia',
  categoryId: 'education_children',
  title: 'Abono de Família — child benefit',
  tldr: 'Abono de Família is a monthly child benefit for children up to 18 years old (up to 24 if studying). The amount of €38–180 per month depends on family income and the child’s age. Application is via Segurança Social Direta, and payment is automatic. For residents with NISS.',
  tags: ['abono', 'benefit', 'family', 'children'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'who',
      title: 'Who is eligible',
      content: [
        { kind: 'checklist', items: [
          'A resident of Portugal with NISS',
          'You have a child under 18 (up to 24 if studying; up to 27 if there is a disability)',
          'Family income is below the threshold (depends on the bracket — check the current annual values)',
          'The child is registered with the SNS and at school (if of compulsory school age)',
          'For foreign residents with NISS — entitlement starts from the moment legal status is obtained (the requirement for ≥ 3 years’ residence was abolished by Decreto-Lei 8/2019; any legal resident with NISS is eligible)'
        ]},
        { kind: 'paragraph', text: 'DL 8/2019 and subsequent reforms abolished the minimum residence period for Abono.' }
      ]
    },
    {
      id: 'amount',
      title: 'Amount (for 2026)',
      content: [
        { kind: 'paragraph', text: 'Determined by the income bracket (escalão). The thresholds are linked to IAS 2026 = €537.13. Amounts for January 2026 according to ISS:' },
        { kind: 'checklist', items: [
          '1º escalão (lowest income) — €190.98 per month per child ≤36 months; €75.13 for an older child',
          '2º escalão — €161.65 / €75.13',
          '3º escalão — €132.07 (≤36 months) / €59.33 (36–72 months) / €54.35 (>72 months)',
          '4º escalão — €88.43 / €44.77',
          '5º escalão — Abono is not paid'
        ]},
        { kind: 'paragraph', text: 'Single-parent families: +35%. Bonificação por deficiência — fixed top-up for disability. Additional extraordinário top-up — for the 2nd and subsequent children ≤36 months in brackets 1–4. Current values and bracket limits are always on seg-social.pt.' }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'How to apply',
      content: [
        { kind: 'substeps', items: [
          { id: 'a1', title: '1. Log in to Segurança Social Direta', content: [
            { kind: 'paragraph', text: 'seg-social.pt → SSD → log in using Chave Móvel Digital or NISS+password.' }
          ]},
          { id: 'a2', title: '2. “Família” → “Abono de Família”', content: [
            { kind: 'paragraph', text: 'Menu → “Requerer Abono de Família”. Complete the form online.' }
          ]},
          { id: 'a3', title: '3. Attach documents', content: [
            { kind: 'checklist', items: [
              'Child’s birth certificate (scan)',
              'Child’s NISS and NIF',
              'Confirmation from the school (for compulsory school age)',
              'IBAN for payment'
            ]}
          ]},
          { id: 'a4', title: '4. Wait for confirmation', content: [
            { kind: 'timeline', text: '30–60 days. The first payment is retroactive from the date of application.' }
          ]}
        ]}
      ]
    },
    {
      id: 'updates',
      title: 'Keeping it up to date',
      content: [
        { kind: 'paragraph', text: 'The bracket is recalculated automatically after IRS submission (August–September). To keep the benefit, submit your IRS on time.' },
        { kind: 'paragraph', text: 'If your address, school or income changes, update the data in SSD within 30 days.' }
      ]
    },
    {
      id: 'related',
      title: 'Related benefits',
      content: [
        { kind: 'checklist', items: [
          'Bolsa de Estudo — scholarship for schoolchildren from low-income families',
          'ASE (Acção Social Escolar) — free meals, transport, textbooks',
          'Garantia para a Infância — additional benefit for the 1st and 2nd brackets',
          'Subsídio Parental — parental allowance payments (mother/father)',
          'Licença Parental — parental leave (120–180 days)'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Segurança Social — Abono de Família', url: 'https://www.seg-social.pt/abono-de-familia-para-criancas-e-jovens', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Request Abono de Família', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/pedir-abono-de-familia', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Decreto-Lei 176/2003 — Abono de Família', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/176-2003', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 180
}
