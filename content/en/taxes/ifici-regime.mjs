export default {
  editorialVoice: 'hackportugal',
  id: 'ifici-regime',
  categoryId: 'taxes',
  title: 'IFICI — tax regime (replacement for NHR)',
  tldr: 'From 2024, the old NHR regime was abolished. It has been replaced by IFICI (Incentivo Fiscal à Investigação Científica e Inovação) — a flat 20% rate on income from qualifying activity (science, high technology, start-ups) for 10 years. The list of professions is narrow. For most remote workers and pensioners, IFICI is NOT suitable.',
  tags: ['ifici', 'nhr', 'taxes', 'irs'],
  estimatedReadMinutes: 8,
  recentlyChangedAt: '2024-01-01',
  changeSummary: 'From 2024, the old NHR regime is closed to new applicants, except for limited transitional cases under OE/2024 (some people who became tax residents in 2024). Anyone who obtained NHR or qualified under the transitional rules keeps the regime for the remaining part of the 10-year period. All other new residents — IFICI only (narrow list of professions).',
  steps: [
    {
      id: 'nhr-vs-ifici',
      title: 'NHR and IFICI',
      content: [
        { kind: 'paragraph', text: 'NHR (Non-Habitual Resident) — the old regime from 2009–2023. It provided a 20% IRS rate on a range of high-value-added professional income in Portugal and relief for categories of foreign income, provided it was taxed in the source country or under a double taxation treaty. A 10% rate on foreign pensions was introduced from 01.04.2020 (before that, pensions were often tax-exempt).\n\nFrom 01.01.2024, NHR is closed to new applicants, except for OE/2024 transitional cases.' },
        { kind: 'paragraph', text: 'IFICI — the new 2024+ regime. A 20% IRS rate on net income in categories A (salary) and B (business activity) from qualifying activity in Portugal. In addition — an exemption for certain categories of foreign income (A, B, E, F, G), subject to conditions. It does NOT apply to pensions. It does NOT apply to income from jurisdictions with a significantly more favourable tax regime without a treaty.' },
        { kind: 'warning', text: 'Key point: IFICI requires “qualifying activity” from a narrow list. Independent remote workers without such status pay IRS on the progressive scale (11.97%–48% across 9 bands for 2026).' }
      ]
    },
    {
      id: 'who-qualifies',
      title: 'Who qualifies for IFICI',
      content: [
        { kind: 'checklist', items: [
          'Scientific researchers (at a university or scientific organisation in Portugal)',
          'Highly qualified specialists in technology companies (according to the Portaria list)',
          'Specialists in start-ups with certified Startup Portugal status',
          'Higher education lecturers',
          'Work in R&D centres with approved status'
        ]},
        { kind: 'warning', text: 'A freelance developer without a contract with a qualifying employer does NOT fall under IFICI.' }
      ]
    },
    {
      id: 'conditions',
      title: 'Conditions',
      content: [
        { kind: 'checklist', items: [
          'Become a tax resident of Portugal (spend 183+ days there or have your centre of vital interests there)',
          'NOT have been a tax resident of Portugal in the last 5 years',
          'The activity falls within the IFICI list',
          'Submit the application by 15 January of the year following the year in which you became resident (Portaria 352/2024). The exceptional window until 15.03.2025 applied only to the first cycle (2024 residents)'
        ]}
      ]
    },
    {
      id: 'application',
      title: 'How to apply',
      content: [
        { kind: 'substeps', items: [
          { id: 'i1', title: '1. Become a tax resident', content: [
            { kind: 'paragraph', text: 'Via Portal das Finanças (tax portal) → change your tax address to a Portuguese one.' }
          ]},
          { id: 'i2', title: '2. Gather proof of qualification', content: [
            { kind: 'paragraph', text: 'Contract with a qualifying employer, confirmation of the company’s R&D status (certificate from ANI), diploma.' }
          ]},
          { id: 'i3', title: '3. Submit the application', content: [
            { kind: 'paragraph', text: 'Via Portal das Finanças by 15 January of the following year (Portaria 352/2024 sets the deadline).' }
          ]},
          { id: 'i4', title: '4. Wait for approval', content: [
            { kind: 'timeline', text: 'It can take up to 6 months. If approved, the regime applies retroactively from the start of the year of application.' }
          ]}
        ]}
      ]
    },
    {
      id: 'not-qualifying',
      title: 'If you do not qualify — what to do',
      content: [
        { kind: 'paragraph', text: 'Pay ordinary IRS on the progressive scale (9 bands, OE 2026 with +3.51% indexation and rate reductions in bands 2–5):' },
        { kind: 'checklist', items: [
          'Up to €8,342: 11.97%',
          '€8,342 – €12,587: 10.99%',
          '€12,587 – €17,838: 14.84%',
          '€17,838 – €23,089: 16.87%',
          '€23,089 – €29,397: 21.77%',
          '€29,397 – €41,952: 26.11%',
          '€41,952 – €44,987: 29.76%',
          '€44,987 – €81,199: 37.35%',
          'Over €81,199: 48%'
        ]},
        { kind: 'paragraph', text: 'For sole traders (recibos verdes), the simplified regime may be available: 75% of turnover is the taxable base. Plus social security contributions of 21.4% on 70% of relevant income (limit: 12 × IAS = €6,445.56).\n\nThe first 12 months for newly registered people are fully exempt from contributions.' }
      ]
    }
  ],
  sources: [
    { title: 'Portal das Finanças — IFICI', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Portaria 352/2024 — IFICI procedure and 15.01 deadline', url: 'https://diariodarepublica.pt/dr/detalhe/portaria/352-2024-901014291', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DRE — OE/2024 Law (abolition of NHR)', url: 'https://diariodarepublica.pt/dr/detalhe/lei/82-2023', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ANI — Agência Nacional de Inovação', url: 'https://www.ani.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
