export default {
  editorialVoice: 'hackportugal',
  id: 'recibos-verdes',
  categoryId: 'work_business',
  title: 'Recibos Verdes — working as self-employed',
  tldr: 'Recibos Verdes are digital receipts for the self-employed in Portal das Finanças. Used by freelancers and sole traders. Simplified regime: 75% of turnover is the tax base, 25% is an automatic deduction. Social contributions — 21.4%. IVA (VAT) — only if turnover > €15,000/year.',
  tags: ['recibos verdes', 'sole trader', 'self-employment', 'activity'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'open',
      title: 'Open Início de Atividade',
      content: [
        { kind: 'substeps', items: [
          { id: 'o1', title: '1. Log in to Portal das Finanças', content: [
            { kind: 'paragraph', text: 'With your NIF and password.' }
          ]},
          { id: 'o2', title: '2. Cidadão → Alterar Atividade → Abrir Atividade', content: [
            { kind: 'paragraph', text: 'Choose CAE — activity code. For IT — 62010 (programming), for consulting — 70220, for design — 74100.' }
          ]},
          { id: 'o3', title: '3. Choose regime', content: [
            { kind: 'checklist', items: [
              'Regime Simplificado — the standard regime for turnover < €200,000/year. Simplified base.',
              'Contabilidade Organizada — for larger turnovers or by choice, requires an accountant.'
            ]}
          ]},
          { id: 'o4', title: '4. IVA (VAT)', content: [
            { kind: 'checklist', items: [
              'Turnover ≤ €15,000/year — exemption from IVA (Regime de Isenção)',
              'Turnover > €15,000 — IVA registration, rate 23% (or 13%/6% for certain services)'
            ]}
          ]},
          { id: 'o5', title: '5. Segurança Social (social security)', content: [
            { kind: 'paragraph', text: 'For first-time registered self-employed workers — full exemption from contributions for the first 12 months. From the 13th month — 21.4% of relevant income (usually 70% of the average monthly turnover).' }
          ]}
        ]}
      ]
    },
    {
      id: 'invoicing',
      title: 'Issue a Recibo Verde (electronic receipt for the self-employed)',
      content: [
        { kind: 'substeps', items: [
          { id: 'i1', title: '1. In Portal das Finanças', content: [
            { kind: 'paragraph', text: 'Cidadão → Recibos e Faturas → Emitir Fatura-Recibo (for services) or Fatura (if you are registered for IVA).' }
          ]},
          { id: 'i2', title: '2. Fill in the client’s details', content: [
            { kind: 'paragraph', text: 'Name, NIF, address. If the client is outside the EU — under reverse-charge rules, IVA = 0.' }
          ]},
          { id: 'i3', title: '3. Specify the amount and category', content: [
            { kind: 'paragraph', text: 'Services are included on the invoice. IVA is applied automatically if you are in the IVA regime.' }
          ]},
          { id: 'i4', title: '4. Withholding tax (retenção)', content: [
            { kind: 'paragraph', text: 'For Portuguese clients — 11.5%, 16.5% or 25% is withheld automatically. For foreign clients — 0.' }
          ]},
          { id: 'i5', title: '5. Sign and send to the client', content: [
            { kind: 'paragraph', text: 'Digital document. The client records it in their accounting.' }
          ]}
        ]}
      ]
    },
    {
      id: 'taxes',
      title: 'Year-end taxes',
      content: [
        { kind: 'paragraph', text: 'In the simplified regime:' },
        { kind: 'checklist', items: [
          'Tax base = 75% of turnover (25% automatic deduction)',
          'Progressive IRS bands for 2026 apply: 11.97%–48% in 9 brackets',
          'Social contributions (21.4% of 70% of turnover)',
          'Quarterly IRS payments on account from July of the second year of activity'
        ]},
        { kind: 'paragraph', text: 'For IFICI beneficiaries: a fixed rate of 20% on qualified activity.' }
      ]
    },
    {
      id: 'tips',
      title: 'Tips',
      content: [
        { kind: 'checklist', items: [
          'Chartered accountant — recommended, €50–150/month',
          'Keep all Recibos Verdes for 10 years',
          'File IRS annually in April–June',
          'If your clients are only international, keep bank confirmations for AIMA/Finanças',
          'The first year without social contributions is a great opportunity to start'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Portal das Finanças — Recibos Verdes', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Segurança Social — Self-employed workers', url: 'https://www.seg-social.pt/trabalhadores-independentes', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Open Activity', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/abrir-atividade-de-trabalhador-independente', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 180
}
