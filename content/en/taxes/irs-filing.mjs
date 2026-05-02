export default {
  editorialVoice: 'hackportugal',
  id: 'irs-filing',
  categoryId: 'taxes',
  title: 'Filing IRS — personal income tax return',
  tldr: 'IRS = Imposto sobre o Rendimento das Pessoas Singulares. It is filed annually from 1 April to 30 June in Portal das Finanças (tax portal). For residents it is mandatory regardless of the source of income. There is an automatic pre-filled version (IRS Automático) for simple cases.',
  tags: ['irs', 'taxes', 'tax return'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'who',
      title: 'Who files',
      content: [
        { kind: 'checklist', items: [
          'All tax residents of Portugal (lived ≥ 183 days or centre of interests in Portugal)',
          'Non-residents with income from Portugal — file only for Portuguese income',
          'IFICI subjects — file with special forms'
        ]},
        { kind: 'warning', text: 'Residents declare ALL worldwide income, including foreign income. NHR/IFICI provide exemptions.' }
      ]
    },
    {
      id: 'deadline',
      title: 'Deadlines',
      content: [
        { kind: 'paragraph', text: 'The return for year N is filed between 1 April and 30 June of year N+1. Regardless of income category (salary, recibos verdes (electronic receipts for self-employed workers), rent, etc.).' },
        { kind: 'warning', text: 'Missing the deadline — fine €150–3,750. It is better to file with an error and correct it (modelo de substituição).' }
      ]
    },
    {
      id: 'categories',
      title: 'Income categories',
      content: [
        { kind: 'checklist', items: [
          'Category A — salary, pension',
          'Category B — self-employment (recibos verdes)',
          'Category E — investment income (dividends, interest)',
          'Category F — property rental',
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
          { id: 's1', title: '1. IRS Automático (if you are eligible)', content: [
            { kind: 'paragraph', text: 'For category A (salary) without other sources, Finanças prepares the return. You simply check and approve it. You can check in Portal das Finanças → IRS → IRS Automático.' }
          ]},
          { id: 's2', title: '2. Manual filing (Modelo 3)', content: [
            { kind: 'paragraph', text: 'If there are additional sources — file via Portal das Finanças → IRS → Entregar. You need to complete Modelo 3 + the required annexes (Anexos).' }
          ]},
          { id: 's3', title: '3. Annexes', content: [
            { kind: 'checklist', items: [
              'Anexo A — salary/pension',
              'Anexo B — recibos verdes (simplified regime)',
              'Anexo C — recibos verdes (organised accounting)',
              'Anexo E — investments',
              'Anexo F — rental',
              'Anexo G — capital gains',
              'Anexo H — deductions (health, education, food, housing)',
              'Anexo J — foreign income'
            ]}
          ]},
          { id: 's4', title: '4. Check and submit', content: [
            { kind: 'paragraph', text: 'Automatic validation. After submission — filing confirmation (comprovativo de entrega). Status — in Portal das Finanças.' }
          ]},
          { id: 's5', title: '5. Result', content: [
            { kind: 'paragraph', text: 'By July-August — assessment (liquidação). If there is an overpayment — refund. If there is an underpayment — payment deadline by 31 August.' }
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
          'Education (children) — 30% up to €800',
          'Utilities (electricity, gas, water) — 15% up to €250',
          'Restaurant bills — 15% up to €250',
          'Rent — 15% up to €502',
          'Mortgage — 15% up to €296 (only for mortgages before 2011)',
          'General expenses (Faturas.pt) — 35% up to €250',
          'PPR (pension account) — 20% up to €400'
        ]},
        { kind: 'paragraph', text: 'For deductions to count — request NIF on all receipts (Faturas.pt collects them automatically).' }
      ]
    },
    {
      id: 'nhr-ifici',
      title: 'NHR and IFICI — specific features',
      content: [
        { kind: 'paragraph', text: 'NHR (until 2024): 20% on qualified work + 0% on foreign income. For existing subjects — until the end of the 10-year period.' },
        { kind: 'paragraph', text: 'IFICI (from 2024): 20% on qualified activity. Filing via Portal das Finanças → IFICI profile + Modelo 3 with a tick.' }
      ]
    }
  ],
  sources: [
    { title: 'Portal das Finanças — IRS', url: 'https://www.portaldasfinancas.gov.pt/at/html/irsweb2024', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — File IRS', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/entregar-o-irs', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IRS Code (DRE)', url: 'https://info.portaldasfinancas.gov.pt/', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 180
}
