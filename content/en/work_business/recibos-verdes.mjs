export default {
  editorialVoice: 'hackportugal',
  id: 'recibos-verdes',
  categoryId: 'work_business',
  title: 'Recibos Verdes — working as self-employed',
  tldr: 'Recibos Verdes are digital receipts for self-employed workers in Portal das Finanças. They are used by freelancers and sole traders. Under the simplified regime, the IRS base depends on the type of income: for most professional services — 75% of turnover, for other activities — different coefficients under CIRS art. 31. Social contributions are 21.4% of relevant income (usually 70% of services or 20% of sales). IVA (VAT): isenção art. 53 CIVA for annual turnover ≤ €15,000.',
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
            { kind: 'paragraph', text: 'Choose the activity code: CAE and/or a code from tabela do artigo 151.º CIRS. For professional services (IT, consulting, design), the CIRS code is often the key one; if in doubt, check with a contabilista — the choice affects IRS coefficients and retenção.' }
          ]},
          { id: 'o3', title: '3. Choose the regime', content: [
            { kind: 'checklist', items: [
              'Regime Simplificado — the standard regime for annual turnover up to €200,000. Base coefficients depend on the type of income (not always 75%)',
              'Contabilidade Organizada — for larger turnover or by voluntary choice, requires a contabilista certificado'
            ]}
          ]},
          { id: 'o4', title: '4. IVA (VAT)', content: [
            { kind: 'checklist', items: [
              'Regime de isenção (CIVA art. 53) — for annual/expected turnover ≤ €15,000 and if the conditions are met; when opening atividade, expected turnover is calculated pro rata for the year',
              'Clarify: “If the art. 53 limit is normally exceeded during the year, the alteração is submitted in January of the following year, and IVA applies from February; if other conditions are lost, deadlines may differ. After moving to the regime normal, periodic VAT returns and IVA payments apply”. The standard rate is 23% (or 13%/6% for certain services). For B2B clients abroad, reverse charge / regras de localização often applies'
            ]}
          ]},
          { id: 'o5', title: '5. Segurança Social (social security)', content: [
            { kind: 'paragraph', text: 'When atividade is opened for the first time, enrolment in Segurança Social usually only starts after an initial period (usually the first 12 months — exemption).\n\nAfter that, the rate is 21.4% on rendimento relevante: 70% of services or 20% of sales/production/hotel/restaurant, based on the quarterly declaration with the possibility of adjusting the base within the rules.' }
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
            { kind: 'paragraph', text: 'Cidadão → Recibos e Faturas → Emitir Fatura-Recibo (if the service has already been paid), Fatura (if you are issuing the invoice first) or Recibo (when payment has been received). This does not depend directly on whether you are under the IVA regime or in isenção.' }
          ]},
          { id: 'i2', title: '2. Fill in the client details', content: [
            { kind: 'paragraph', text: 'Name, NIF, address. For foreign clients, IVA depends on regras de localização: B2B services to a foreign company often go without Portuguese IVA / reverse charge or operação fora do campo; B2C and digital services may be taxed differently. Check according to the type of service and the client’s status.' }
          ]},
          { id: 'i3', title: '3. Enter the amount and category', content: [
            { kind: 'paragraph', text: 'Services are included in the invoice. Write: “If you are not in isenção art. 53, when issuing the document you need to choose the applicable IVA rate or the basis for não liquidação/isenção. For foreign clients and reverse charge, do not rely on ‘automatic’: check the regras de localização and the client’s status”.' }
          ]},
          { id: 'i4', title: '4. Withholding tax (retenção)', content: [
            { kind: 'paragraph', text: 'Retenção na fonte does not always apply: usually when the Portuguese client is a company/entidade with organised accounting and is required to withhold. Private individuals usually do not withhold. Small TI may have dispensa de retenção if the conditions under CIRS art. 101.º-B are met. Rates depend on the type of income: often 25% for professional services (art. 151), 11.5% for some other income, 16.5% for certain IP/other cases. For foreign clients — usually 0.' }
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
        { kind: 'paragraph', text: 'Under the simplified regime:' },
        { kind: 'checklist', items: [
          'For many professional services, the IRS base = 75% of turnover; for other types of income, other coefficients under CIRS art. 31 apply',
          'The progressive IRS scale for 2026 applies: 11.97%–48% across 9 bands',
          'Social contributions of 21.4% on rendimento relevante: 70% of services or 20% of sales/production, based on the quarterly declaration',
          'Replace with: “Pagamentos por conta de IRS may be assigned by AT based on the previous IRS return/assessment; this is not an automatic tax for all TI. If assigned, they are usually paid 3 times a year — in July, September and December”.'
        ]},
        { kind: 'paragraph', text: 'For IFICI taxpayers (the new regime, which replaced NHR from 2024): a fixed rate of 20% on qualifying activity from the approved lists, provided the regime conditions are met.' }
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
          'If your clients are only international, keep bank confirmations for AIMA/Finanças',
          'The first year without social contributions is a great opportunity to get started'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Portal das Finanças — Recibos Verdes', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Segurança Social — Self-Employed Workers', url: 'https://www.seg-social.pt/trabalhadores-independentes', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Opening Atividade', url: 'https://www.gov.pt/cidadaos/-/informacoes/abrir-atividade-de-trabalhador-independente', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
