export default {
  editorialVoice: 'hackportugal',
  id: 'startup-visa',
  categoryId: 'residence_permit',
  title: 'Startup Visa — for founders of certified startups',
  tldr: 'Startup Visa is for founders of innovative startups. It requires approval from one of Portugal’s ~94 certified incubators (IAPMEI 2026 list) + a viable business plan. It grants a 2-year residence permit and access to IFICI. Application via the Startup Visa portal + consular visa.',
  audience: { citizenships: ['thirdCountry'] },
  tags: ['startup', 'residence permit', 'innovation'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'overview',
      title: 'What it is',
      content: [
        { kind: 'paragraph', text: 'Startup Visa = a residence visa for startup founders with a technological or innovative product. It is managed by IAPMEI together with Startup Portugal.' },
        { kind: 'paragraph', text: 'The main difference from D2: confirmation is required FROM ONE OF THE CERTIFIED incubators (Beta-i, Startup Lisboa, Fábrica de Startups, etc.) that your project is innovation-oriented.' }
      ]
    },
    {
      id: 'requirements',
      title: 'Requirements',
      content: [
        { kind: 'checklist', items: [
          'Innovative technological product or service',
          'Business plan in English or Portuguese',
          'Turnover forecast ≥ €325,000/year after 5 years OR 10 jobs OR high-tech R&D',
          'Approval from a certified incubator',
          'Own funds ≥ €6,445.56 (12 × IAS at €537.13 for 2026) for the applicant’s living costs + 50% IAS for a spouse, 30% IAS for a child',
          'No criminal record',
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
            { kind: 'link', text: 'List of certified incubators (~94 in 2026)', url: 'https://startupvisa.iapmei.pt/' }
          ]},
          { id: 's2', title: '2. Contact the incubator and submit the project', content: [
            { kind: 'paragraph', text: 'Each incubator has its own assessment procedure (project presentations, interviews, documents).' }
          ]},
          { id: 's3', title: '3. Sign an agreement with the incubator', content: [
            { kind: 'paragraph', text: 'Confirmation of project acceptance from the incubator = the golden key.' }
          ]},
          { id: 's4', title: '4. Submit the application via the Startup Visa portal', content: [
            { kind: 'paragraph', text: 'With the incubator confirmation + business plan + financial documents. IAPMEI reviews it within 30-60 days.' }
          ]},
          { id: 's5', title: '5. After approval — visa at the consulate', content: [
            { kind: 'paragraph', text: 'With IAPMEI approval, the visa procedure is faster (30-60 days).' }
          ]},
          { id: 's6', title: '6. Entry + AIMA', content: [
            { kind: 'paragraph', text: 'Standard process: residence permit, biometrics, company registration.' }
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
          'Access to IFICI (20% tax)',
          'Simplified visa route (with IAPMEI approval)',
          'Possibility to bring the team (co-founders can apply together)'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'IAPMEI application', amountEUR: 0 },
    { label: 'Incubator (programme)', amountEURMin: 0, amountEURMax: 5000, note: 'many are free, some charge a fee' },
    { label: 'Consular visa', amountEUR: 90 },
    { label: 'AIMA — appointment + assessment', amountEUR: 133, note: 'from 01/03/2026' },
    { label: 'AIMA — residence permit (art. 75)', amountEUR: 307.20, note: 'from 01/03/2026' }
  ],
  timelineDaysMin: 90,
  timelineDaysMax: 180,
  sources: [
    { title: 'Startup Visa — official IAPMEI portal', url: 'https://startupvisa.iapmei.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IAPMEI — Startup Portugal', url: 'https://www.iapmei.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'MNE Visas — Startup Visa', url: 'https://vistos.mne.gov.pt/pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 180
}
