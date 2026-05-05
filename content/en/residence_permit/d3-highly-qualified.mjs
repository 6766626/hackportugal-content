export default {
  editorialVoice: 'hackportugal',
  id: 'd3-highly-qualified',
  categoryId: 'residence_permit',
  title: 'Visa D3 (highly qualified professional)',
  tldr: 'D3 is for professionals with higher education and a contract with a Portuguese or international company. Minimum 1.5× Portugal’s average salary (≈ €2,200/month). Access to IFICI 20% — ONLY if the activity falls within the approved list of qualified professions (science, R&D, universities, start-ups); not for ordinary remote developers. Processed via the employer or directly.',
  audience: { citizenships: ['thirdCountry', 'cplp'] },
  tags: ['d3', 'residence permit', 'highly qualified', 'ict'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'who',
      title: 'Who is eligible',
      content: [
        { kind: 'checklist', items: [
          'IT engineers, developers, data analysts',
          'Engineers (mechanical, electrical, etc.)',
          'Research staff, researchers',
          'Consultants, managers, senior-level analysts',
          'Medical professionals with a degree (after recognition/nostrification)'
        ]}
      ]
    },
    {
      id: 'requirements',
      title: 'Requirements',
      content: [
        { kind: 'checklist', items: [
          'Higher education degree (5+ years of study) with apostille and translation',
          'Diploma nostrification (mandatory for some professions)',
          'Employment contract with an employer in Portugal',
          'Salary ≥ 1.5× Portugal’s average salary (approximately €2,200/month as of 2026)',
          'Criminal record certificate',
          'Health insurance until registration with SNS'
        ]},
        { kind: 'warning', text: 'For the EU Blue Card (often combined with D3) the threshold is higher: ≈ €4,400/month.' }
      ]
    },
    {
      id: 'process',
      title: 'Process',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: '1. Find an employer', content: [
            { kind: 'paragraph', text: 'Search on LinkedIn, Landing.Jobs, ITJobs.pt, NetJobs.' }
          ]},
          { id: 's2', title: '2. Obtain an employment contract', content: [
            { kind: 'paragraph', text: 'The employer prepares the employment contract, often registers you with Segurança Social (social security).' }
          ]},
          { id: 's3', title: '3. Apply for the visa at the consulate', content: [
            { kind: 'paragraph', text: 'You apply for the D3 visa yourself, not the employer. At the consulate in your country of residence.' }
          ]},
          { id: 's4', title: '4. NIF + entry + AIMA', content: [
            { kind: 'paragraph', text: 'After the visa — enter, obtain NIF/NISS, make an appointment with AIMA.' }
          ]},
          { id: 's5', title: '5. Apply for the IFICI tax regime (if the activity qualifies)', content: [
            { kind: 'paragraph', text: 'IFICI applies only to income from **qualified activity according to the approved list** (science, R&D, universities, start-ups under the start-up visa). Not every D3 holder automatically gets IFICI — you must meet the profession criteria. Deadline — until **15 January** of the year following the year you became a resident (Portaria 352/2024). 20% IRS on qualified income for 10 years.' }
          ]}
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Consular visa', amountEUR: 90 },
    { label: 'AIMA — intake + review', amountEUR: 133, note: 'from 01/03/2026' },
    { label: 'AIMA — residence permit (art. 75)', amountEUR: 307.20, note: 'from 01/03/2026' },
    { label: 'Diploma nostrification', amountEURMin: 100, amountEURMax: 300, note: 'if required' }
  ],
  timelineDaysMin: 60,
  timelineDaysMax: 120,
  sources: [
    { title: 'Vistos MNE — D3 visa for highly qualified professionals', url: 'https://vistos.mne.gov.pt/pt/vistos-nacionais/informacao-geral/tipo-de-visto', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — residence permit for highly qualified professionals', url: 'https://aima.gov.pt/pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IFICI Portaria — list of qualified professions', url: 'https://diariodarepublica.pt/dr/pesquisa?q=IFICI', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
