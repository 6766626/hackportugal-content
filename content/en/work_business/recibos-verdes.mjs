export default {
  editorialVoice: 'hackportugal',
  id: 'recibos-verdes',
  categoryId: 'work_business',
  title: 'Recibos Verdes — working as self-employed',
  tldr: 'Recibos Verdes are digital receipts for self-employed workers in Portal das Finanças. They are used by freelancers and sole traders. Simplified regime: 75% of turnover is the tax base, 25% is an automatic deduction. Social security contributions are 21.4%. IVA (VAT) only applies if turnover is > €15,000/year.',
  tags: ['recibos verdes', 'sole trader', 'self-employment', 'atividade'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'open',
      title: 'Open Início de Atividade',
      content: [
        { kind: 'substeps', items: [
          { id: 'o1', title: '1. Go to Portal das Finanças', content: [
            { kind: 'paragraph', text: 'With your NIF and password.' }
          ]},
          { id: 'o2', title: '2. Cidadão → Alterar Atividade → Abrir Atividade', content: [
            { kind: 'paragraph', text: 'Choose a CAE — activity code. For IT — 62010 (programming), for consultancy — 70220, for design — 74100.' }
          ]},
          { id: 'o3', title: '3. Choose the regime', content: [
            { kind: 'checklist', items: [
              'Regime Simplificado — the standard regime for turnover < €200,000/year. Simplified tax base.',
              'Contabilidade Organizada — for larger turnover or by choice, requires an accountant.'
            ]}
          ]},
          { id: 'o4', title: '4. IVA (VAT)', content: [
            { kind: 'checklist', items: [
              'Turnover ≤ €15,000/year — exemption from IVA (Regime de Isenção)',
              'Turnover > €15,000 — IVA registration, rate 23% (or 13%/6% for some services)'
            ]}
          ]},
          { id: 'o5', title: '5. Segurança Social (social security)', content: [
            { kind: 'paragraph', text: 'In the first year — exemption from contributions. From the 13th month — 21.4% of 70% of average monthly turnover.' }
          ]}
        ]}
      ]
    },
    {
      id: 'invoicing',
      title: 'Issue a Recibo Verde (electronic self-employed receipt)',
      content: [
        { kind: 'substeps', items: [
          { id: 'i1', title: '1. In Portal das Finanças', content: [
            { kind: 'paragraph', text: 'Cidadão → Recibos e Faturas → Emitir Fatura-Recibo (for services) or Fatura (if you are registered for IVA).' }
          ]},
          { id: 'i2', title: '2. Fill in the client details', content: [
            { kind: 'paragraph', text: 'Name, NIF, address. If the client is outside the EU — under reverse charge rules, IVA = 0.' }
          ]},
          { id: 'i3', title: '3. Enter the amount and category', content: [
            { kind: 'paragraph', text: 'Services are included in the invoice. IVA is charged automatically if you are under the IVA regime.' }
          ]},
          { id: 'i4', title: '4. Tax withholding (retenção)', content: [
            { kind: 'paragraph', text: 'For Portuguese clients — 11.5%, 16.5% or 25% is withheld automatically. For foreign clients — 0.' }
          ]},
          { id: 'i5', title: '5. Sign and send to the client', content: [
            { kind: 'paragraph', text: 'Digital document. The client records it in their accounts.' }
          ]}
        ]}
      ]
    },
    {
      id: 'taxes',
      title: 'Year-end taxes',
      content: [
        { kind: 'paragraph', text: 'Under the simplified regime:' },
        { kind: 'checklist', items: [
          'Tax base = 75% of turnover (25% automatic deduction)',
          'The IRS scale applies (13%–48%)',
          'Social security contributions (21.4% of 70% of turnover)',
          'Quarterly IRS advance payments from July of the second year of activity'
        ]},
        { kind: 'paragraph', text: 'For IFICI taxpayers: a fixed rate of 20% on qualifying activity.' }
      ]
    },
    {
      id: 'tips',
      title: 'Tips',
      content: [
        { kind: 'checklist', items: [
          'Certified accountant — recommended, €50–150/month',
          'Keep all Recibos Verdes for 10 years',
          'Submit IRS annually in April-June',
          'If your clients are only international, keep bank confirmations for AIMA/Finanças',
          'The first year without social security contributions is an excellent opportunity to start'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Portal das Finanças — Recibos Verdes', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Segurança Social — Independent Workers', url: 'https://www.seg-social.pt/trabalhadores-independentes', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Open Atividade', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/abrir-atividade-de-trabalhador-independente', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 180
}
