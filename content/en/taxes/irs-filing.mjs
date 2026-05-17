export default {
  editorialVoice: 'hackportugal',
  id: 'irs-filing',
  categoryId: 'taxes',
  title: 'Filing IRS — personal income tax return',
  tldr: 'IRS = Imposto sobre o Rendimento das Pessoas Singulares. It is filed annually from 1 April to 30 June in Portal das Finanças (tax portal). Tax residents usually declare worldwide income; there are filing exemptions under art. 58 CIRS (low/finally taxed income). There is an automatic pre-filled version (IRS Automático) for simple cases covered by AT.',
  tags: ['irs', 'taxes', 'return'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'who',
      title: 'Who files',
      content: [
        { kind: 'checklist', items: [
          'Tax residents of Portugal: presence >183 days in any 12-month period starting/ending in the year, or habitual abode (art. 16 CIRS). Usually file, but there are exceptions under art. 58 CIRS',
          'Non-residents with income from Portugal — file only for Portuguese income',
          'NHR/IFICI taxpayers — file with special forms/boxes'
        ]},
        { kind: 'warning', text: 'Residents usually declare worldwide income. NHR/IFICI provide benefits under the regime rules, not a full exemption.' }
      ]
    },
    {
      id: 'deadline',
      title: 'Deadlines',
      content: [
        { kind: 'paragraph', text: 'The return for year N is filed between 1 April and 30 June of year N+1. Regardless of income category (salary, recibos verdes, rental income, etc.).' },
        { kind: 'warning', text: 'For late filing — the coima is usually €150–€3,750 (RGIT art. 116), with a possible reduction for quick voluntary filing. If you find an error — file a declaração de substituição; do not knowingly submit incorrect data.' }
      ]
    },
    {
      id: 'categories',
      title: 'Income categories',
      content: [
        { kind: 'checklist', items: [
          'Category A — employment income / salary',
          'Category B — self-employment (recibos verdes)',
          'Category E — investment income (dividends, interest)',
          'Category F — property rental income',
          'Category G — capital gains (sale of shares, cryptocurrency)',
          'Category H — pensions',
          'Foreign income — in Anexo J'
        ]}
      ]
    },
    {
      id: 'process',
      title: 'Filing process',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: '1. IRS Automático (if you qualify)', content: [
            { kind: 'paragraph', text: 'IRS Automático is available only for simple cases covered by AT — usually for some Categoria A/H taxpayers without foreign income (Anexo J), without complex annexes and benefits. Check eligibility in Portal das Finanças → IRS → IRS Automático.' }
          ]},
          { id: 's2', title: '2. Manual filing (Modelo 3)', content: [
            { kind: 'paragraph', text: 'If there are additional sources — file through Portal das Finanças → IRS → Entregar. You need to complete Modelo 3 + the required annexes (Anexos).' }
          ]},
          { id: 's3', title: '3. Annexes', content: [
            { kind: 'checklist', items: [
              'Anexo A — employment income (Categoria A) and pensions (Categoria H), paid by Portuguese payers',
              'Anexo B — recibos verdes (simplified regime)',
              'Anexo C — recibos verdes (organised accounting)',
              'Anexo E — investments',
              'Anexo F — rental income',
              'Anexo G — capital gains',
              'Anexo H — deductions (health, education, food, housing)',
              'Anexo J — foreign income'
            ]}
          ]},
          { id: 's4', title: '4. Validation and submission', content: [
            { kind: 'paragraph', text: 'Automatic validation. After submission — proof of filing (comprovativo de entrega). Status — in Portal das Finanças.' }
          ]},
          { id: 's5', title: '5. Result', content: [
            { kind: 'paragraph', text: 'By July-August — assessment (liquidação). If there was overpayment — refund. If there is underpayment — payment deadline is 31 August.' }
          ]}
        ]}
      ]
    },
    {
      id: 'deductions',
      title: 'Main deductions (Anexo H)',
      content: [
        { kind: 'checklist', items: [
          'Medical expenses — 15% up to €1,000',
          'Education — 30% up to €800 per family (not per child)',
          'General family expenses (invoices with NIF) — 35% up to €250 per taxpayer',
          'Exigência de fatura (restaurants/hotels, car/motorbike repairs, hairdressers, vets, gyms, etc.) — 15% of IVA paid, overall limit of €250 per household',
          'Permanent home rent — 15% up to €700 for IRS 2025 (with further increases under the transitional schedule), for reported contracts/e-recibos',
          'Interest on a mortgage for permanent own home — 15% up to €296 only for contracts before 31.12.2011',
          'PPR — 20% of contributions: up to €400 (under 35), €350 (35–50), €300 (over 50)'
        ]},
        { kind: 'paragraph', text: 'For deductions to be counted — ask for NIF on all receipts. e-Fatura in Portal das Finanças automatically collects invoices; before the set deadline, check and classify expenses.' }
      ]
    },
    {
      id: 'nhr-ifici',
      title: 'NHR and IFICI — specifics',
      content: [
        { kind: 'paragraph', text: 'NHR for those already registered runs until the end of the 10-year period: 20% on a range of Portuguese income from high value-added activities; for foreign income, the regime depends on the category and DTA (not a universal 0%); foreign pensions for new NHR are usually 10%.' },
        { kind: 'paragraph', text: 'IFICI from 2024 — 20% rate on eligible net employment/business income under the approved list (Estatuto dos Benefícios Fiscais art. 58-A, Portaria 352/2024/1). Registration with AT/competent entity (FCT, ANI, Startup Portugal, AICEP/IAPMEI) is required within the set deadline. Incompatible with NHR. Filing — through the IFICI profile + Modelo 3 with the relevant box ticked.' }
      ]
    }
  ],
  sources: [
    { title: 'Portal das Finanças — IRS', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.html', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'ePortugal — File IRS', url: 'https://eportugal.gov.pt/servicos/entregar-o-irs', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Código do IRS (Diário da República)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1988-34544875', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'AT — Exemption from filing the IRS return', url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Folhetos_informativos/Documents/Folheto_IRS_Dispensa_Entrega.pdf', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
