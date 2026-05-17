export default {
  editorialVoice: 'hackportugal',
  id: 'recibos-verdes',
  categoryId: 'work_business',
  title: 'Recibos Verdes — working as self-employed',
  tldr: 'Recibos Verdes are digital receipts for self-employed workers in Portal das Finanças. They are used by freelancers and sole traders. Under the simplified regime, the IRS base depends on the type of income: for most professional services it is 75% of turnover, while other activities use different coefficients under CIRS art. 31. Social security contributions are 21.4% of relevant income (usually 70% of services or 20% of sales). IVA: isenção art. 53 CIVA for annual turnover ≤ €15,000.',
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
            { kind: 'paragraph', text: 'Choose an activity code: CAE and/or a code from tabela do artigo 151.º CIRS. For professional services (IT, consulting, design), the CIRS code is often the key one; if in doubt, check with a contabilista — the choice affects IRS coefficients and retenção.' }
          ]},
          { id: 'o3', title: '3. Choose the regime', content: [
            { kind: 'checklist', items: [
              'Regime Simplificado — the standard regime for annual turnover up to €200,000. The base coefficients depend on the type of income (not always 75%)',
              'Contabilidade Organizada — for higher turnover or by voluntary choice, requires a contabilista certificado'
            ]}
          ]},
          { id: 'o4', title: '4. IVA', content: [
            { kind: 'checklist', items: [
              'Regime de isenção (CIVA art. 53) — for annual/expected turnover ≤ €15,000 and if the conditions are met; when opening atividade, expected turnover is calculated proportionally to the year',
              'If the limit is exceeded — alteração de atividade within the deadlines in CIVA art. 58 (usually in January of the following year, with IVA charged from February). The standard rate is 23% (or 13%/6% for certain services). For B2B clients abroad, reverse charge / regras de localização often apply'
            ]}
          ]},
          { id: 'o5', title: '5. Segurança Social', content: [
            { kind: 'paragraph', text: 'When opening atividade for the first time, enquadramento in Segurança Social usually only starts after an initial period (usually the first 12 months are exempt). After that, the rate is 21.4% on rendimento relevante: 70% of services or 20% of sales/production/hotel/restaurant, based on the quarterly declaration with the option to adjust the base within the rules.' }
          ]}
        ]}
      ]
    },
    {
      id: 'invoicing',
      title: 'Issue a Recibo Verde (self-employed electronic receipt)',
      content: [
        { kind: 'substeps', items: [
          { id: 'i1', title: '1. In Portal das Finanças', content: [
            { kind: 'paragraph', text: 'Cidadão → Recibos e Faturas → Emitir Fatura-Recibo (if the service has already been paid), Fatura (if you are issuing an invoice first) or Recibo (when payment has been received). This does not directly depend on whether you are in the IVA regime or under isenção.' }
          ]},
          { id: 'i2', title: '2. Fill in the client details', content: [
            { kind: 'paragraph', text: 'Name, NIF, address. For foreign clients, IVA depends on regras de localização: B2B services to a foreign company often go without Portuguese IVA / reverse charge or operação fora do campo; B2C and digital services may be taxed differently. Check according to the type of service and the client’s status.' }
          ]},
          { id: 'i3', title: '3. Enter the amount and category', content: [
            { kind: 'paragraph', text: 'Services are included in the invoice. IVA is charged automatically if you are in the IVA regime.' }
          ]},
          { id: 'i4', title: '4. Tax withholding (retenção)', content: [
            { kind: 'paragraph', text: 'Retenção na fonte does not always apply: usually when the Portuguese client is a company/entidade with organised accounting and is required to withhold. Private individuals usually do not withhold. Small self-employed workers may have dispensa de retenção under the conditions of CIRS art. 101.º-B. Rates depend on the type of income: often 25% for professional services (art. 151), 11.5% for certain other income, 16.5% for some IP/other cases. For foreign clients, it is usually 0.' }
          ]},
          { id: 'i5', title: '5. Sign and send to the client', content: [
            { kind: 'paragraph', text: 'A digital document. The client records it in their accounting.' }
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
          'For many professional services, the IRS base = 75% of turnover; for other types of income, different coefficients apply under CIRS art. 31',
          'The progressive IRS scale for 2026 applies: 11.97%–48% across 9 bands',
          'Social security contributions of 21.4% on rendimento relevante: 70% of services or 20% of sales/production, based on the quarterly declaration',
          'Quarterly IRS advance payments from the second year of activity'
        ]},
        { kind: 'paragraph', text: 'For IFICI beneficiaries (the new regime, which replaced NHR from 2024): a fixed 20% rate on qualifying activity from the approved lists, provided the regime conditions are met.' }
      ]
    },
    {
      id: 'tips',
      title: 'Tips',
      content: [
        { kind: 'checklist', items: [
          'A certified accountant is recommended, €50–150/month',
          'Keep all Recibos Verdes for 10 years',
          'Submit IRS annually in April-June',
          'If your clients are international only, keep bank confirmations for AIMA/Finanças',
          'The first year without social security contributions is an excellent opportunity to get started'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Portal das Finanças — Recibos Verdes', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Segurança Social — Self-Employed Workers', url: 'https://www.seg-social.pt/trabalhadores-independentes', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Open Atividade', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/abrir-atividade-de-trabalhador-independente', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
