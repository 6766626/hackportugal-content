export default {
  editorialVoice: 'hackportugal',
  id: 'startup-visa',
  categoryId: 'residence_permit',
  title: 'Startup Visa — for founders of certified startups',
  tldr: 'Startup Visa is for founders of innovative startups. It requires approval from one of Portugal’s ~102 certified incubators (IAPMEI 2026 list) + a viable business plan. Maximum 5 entrepreneurs per project. The initial residence permit is for 2 years. IFICI is NOT automatic: it depends on Portuguese tax-residence status, eligible activity and timely registration. Application via the Startup Visa portal + an entrepreneurial residence visa at the consulate.',
  audience: { citizenships: ['thirdCountry'] },
  tags: ['startup', 'residence permit', 'startup', 'innovation'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'overview',
      title: 'What it is',
      content: [
        { kind: 'paragraph', text: 'Startup Visa = a residence visa for founders of startups with a technological or innovative product. It is managed by IAPMEI together with Startup Portugal.' },
        { kind: 'paragraph', text: 'At the consular stage, this is effectively an entrepreneurial residence visa / D2 subtype for Startup Visa: you need not just a business plan, but prior IAPMEI approval of the project and an agreement/declaration from a certified incubator (Beta-i, Startup Lisboa, Fábrica de Startups, etc.) stating that your project is innovation-oriented.' }
      ]
    },
    {
      id: 'requirements',
      title: 'Requirements',
      content: [
        { kind: 'checklist', items: [
          'An innovative technological product or service',
          'A business plan in English or Portuguese',
          'Potential to create qualified jobs and, within 5 years, reach turnover of > €325,000/year and/or asset value of > €325,000; the assessment takes into account innovation, scalability, market potential and team quality',
          'Approval from a certified incubator',
          'Maximum 5 entrepreneurs per project (co-founders can apply together; other employees use other visa routes)',
          'Own funds: applicant — 12× IAS = €6,445.56 (IAS 2026 = €537.13); spouse/partner — +12× 50% IAS = €3,222.78; child — +12× 30% IAS = €1,933.67 each',
          'No criminal convictions',
          'Health insurance'
        ]}
      ]
    },
    {
      id: 'process',
      title: 'Process',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: '1. Choose an incubator from the list', content: [
            { kind: 'link', text: 'List of certified incubators (~102 in 2026)', url: 'https://startupvisa.iapmei.pt/' }
          ]},
          { id: 's2', title: '2. Contact the incubator and submit the project', content: [
            { kind: 'paragraph', text: 'Each incubator has its own assessment procedure (project presentations, interviews, documents).' }
          ]},
          { id: 's3', title: '3. Sign an agreement with the incubator', content: [
            { kind: 'paragraph', text: 'Confirmation of project acceptance from the incubator = the golden key.' }
          ]},
          { id: 's4', title: '4. Apply via the Startup Visa portal', content: [
            { kind: 'paragraph', text: 'With the incubator confirmation + business plan + financial documents. Guideline: around 30 working days after a complete submission, but in practice timelines can stretch due to revisions, the incubator or backlog.' }
          ]},
          { id: 's5', title: '5. After approval — visa at the consulate', content: [
            { kind: 'paragraph', text: 'With IAPMEI approval, the visa procedure is faster (30-60 days).' }
          ]},
          { id: 's6', title: '6. Entry + AIMA', content: [
            { kind: 'paragraph', text: 'Standard: residence permit, biometrics, company registration.' }
          ]}
        ]}
      ]
    },
    {
      id: 'benefits',
      title: 'Benefits',
      content: [
        { kind: 'checklist', items: [
          'Incubator support (mentor, coworking, contact network)',
          'Possible access to IFICI: 20% IRS only on eligible professional income if the regime conditions and separate registration are met; it does NOT automatically apply to all income',
          'Simplified visa route (with IAPMEI approval)',
          'Co-founders can apply together, BUT usually a maximum of 5 entrepreneurs per project; other employees use other visa routes'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'IAPMEI application', amountEUR: 0 },
    { label: 'Incubator (programme)', amountEURMin: 0, amountEURMax: 5000, note: 'many are free, some charge a fee' },
    { label: 'Consular visa', amountEUR: 90 },
    { label: 'AIMA — receção e análise do pedido', amountEUR: 133.00, note: 'fee from 01.03.2026 (Portaria n.º 307/2023, updated annually by CPI)' },
    { label: 'AIMA — emissão do título de residência temporário', amountEUR: 307.20, note: 'fee from 01.03.2026 (Portaria n.º 307/2023); the exact tariff line depends on the type of permit' }
  ],
  timelineDaysMin: 90,
  timelineDaysMax: 180,
  sources: [
    { title: 'Startup Visa — official IAPMEI portal', url: 'https://startupvisa.iapmei.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IAPMEI — Startup Portugal', url: 'https://www.iapmei.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'MNE Visas — Startup Visa', url: 'https://vistos.mne.gov.pt/pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
