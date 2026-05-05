export default {
  editorialVoice: 'hackportugal',
  id: 'irs-filing',
  categoryId: 'taxes',
  title: 'Filing IRS — individual income tax return',
  tldr: 'IRS = Imposto sobre o Rendimento das Pessoas Singulares. Filed annually from 1 April to 30 June on the Portal das Finanças (tax portal). Mandatory for residents regardless of income source. There is an automatic prefilled version (IRS Automático) for simple cases.',
  tags: ['irs', 'taxes', 'return'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'who',
      title: 'Who files',
      content: [
        { kind: 'checklist', items: [
          'All tax residents of Portugal (lived ≥ 183 days or centre of vital interests in Portugal)',
          'Non-residents with income from Portugal — file only on Portuguese-source income',
          'IFICI taxpayers — file with specific forms'
        ]},
        { kind: 'warning', text: 'Residents must declare ALL worldwide income, including foreign. NHR/IFICI provide exemptions.' }
      ]
    },
    {
      id: 'deadline',
      title: 'Deadlines',
      content: [
        { kind: 'paragraph', text: 'The return for year N is filed between 1 April and 30 June of year N+1. Regardless of the income category (salary, Recibo Verde (electronic invoices for the self-employed), rent, etc.).' },
        { kind: 'warning', text: 'Missing the deadline — fine €150–€3,750. It is better to file with an error and correct it (modelo de substituição).' }
      ]
    },
    {
      id: 'categories',
      title: 'Income categories',
      content: [
        { kind: 'checklist', items: [
          'Category A — salary, pension',
          'Category B — self-employment (Recibo Verde)',
          'Category E — investment income (dividends, interest)',
          'Category F — rental income (property)',
          'Category G — capital gains (sale of shares, cryptocurrency)',
          'Category H — pensions',
          'Foreign income — in Annex J'
        ]}
      ]
    },
    {
      id: 'process',
      title: 'Filing process',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: '1. IRS Automático (if eligible)', content: [
            { kind: 'paragraph', text: 'For Category A (salary) without other sources, Finanças prepares a return. You simply review and approve it. Check on Portal das Finanças → IRS → IRS Automático.' }
          ]},
          { id: 's2', title: '2. Manual filing (Modelo 3)', content: [
            { kind: 'paragraph', text: 'If you have additional sources — file via Portal das Finanças → IRS → Entregar. You need to complete Modelo 3 + the required annexes (Anexos).' }
          ]},
          { id: 's3', title: '3. Annexes', content: [
            { kind: 'checklist', items: [
              'Anexo A — salary/pension',
              'Anexo B — Recibo Verde (simplified regime)',
              'Anexo C — Recibo Verde (organised accounting)',
              'Anexo E — investments',
              'Anexo F — rent',
              'Anexo G — capital gains',
              'Anexo H — deductions (health, education, meals/restaurants, housing)',
              'Anexo J — foreign income'
            ]}
          ]},
          { id: 's4', title: '4. Validation and submission', content: [
            { kind: 'paragraph', text: 'Automatic validation. After submission — proof of filing (comprovativo de entrega). Status — on the Portal das Finanças.' }
          ]},
          { id: 's5', title: '5. Outcome', content: [
            { kind: 'paragraph', text: 'By July–August — assessment (liquidação). If overpaid — refund. If underpaid — payment deadline by 31 August.' }
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
          'Utilities (electricity, gas, water) — 15% up to €250',
          'Restaurant receipts — 15% up to €250',
          'Rent — 15% up to €700–€800 (gradual increase per OE 2024/25)',
          'Mortgage — 15% up to €296 (only for mortgages up to 2011)',
          'General expenses (Faturas.pt) — 35% up to €250',
          'PPR (pension account) — 20% up to €400'
        ]},
        { kind: 'paragraph', text: 'For deductions to count — request your NIF on all receipts (Faturas.pt collects automatically).' }
      ]
    },
    {
      id: 'nhr-ifici',
      title: 'NHR and IFICI — specifics',
      content: [
        { kind: 'paragraph', text: 'NHR (until 2024): 20% on qualified work + 0% on foreign income. For current beneficiaries — until the end of the 10-year period.' },
        { kind: 'paragraph', text: 'IFICI (from 2024): 20% on qualified activity. Filing via Portal das Finanças → IFICI profile + Modelo 3 with a mark.' }
      ]
    }
  ],
  sources: [
    { title: 'Portal das Finanças — IRS', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.htmlindex.htmlirsweb2024', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Submit IRS', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/entregar-o-irs', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IRS Code (DRE)', url: 'https://info.portaldasfinancas.gov.pt/', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 180
}
