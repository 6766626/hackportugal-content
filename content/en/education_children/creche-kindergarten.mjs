export default {
  editorialVoice: 'hackportugal',
  id: 'creche-kindergarten',
  categoryId: 'education_children',
  title: 'Nursery and kindergarten in Portugal',
  tldr: 'Nursery (Creche, 0–3 years) is paid, even in public provision, with fees based on income: €0–400/month. Kindergarten (Jardim de Infância, 3–6 years, pre-school education) is free in state institutions. From age 5 it is compulsory. Apply via Segurança Social Direta (online social security portal) for Creche or Portal das Matrículas for Jardim de Infância.',
  tags: ['creche', 'kindergarten', 'jardim de infância', 'children'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'types',
      title: 'Types of institutions',
      content: [
        { kind: 'substeps', items: [
          { id: 't1', title: 'Free nursery (Creche Gratuita, 0–3 years) — since Sept. 2022', content: [
            { kind: 'paragraph', text: 'The “Creche Feliz” programme: free for children in the 1st–2nd abono de família brackets. From the 2024–2025 school year, it is being extended to all children under 3. It operates in public and solidarity institutions (IPSS).' }
          ]},
          { id: 't2', title: 'Creche IPSS (solidarity institutions)', content: [
            { kind: 'paragraph', text: 'Private non-profit institutions. They operate under an agreement with Segurança Social. Fees are based on income: €0–400/month.' }
          ]},
          { id: 't3', title: 'Private nurseries (Creche Privada)', content: [
            { kind: 'paragraph', text: 'Commercial institutions. €400–1200/month in Lisbon and Porto. There are international options with English, French or German.' }
          ]},
          { id: 't4', title: 'Kindergarten (Jardim de Infância, 3–6 years, free)', content: [
            { kind: 'paragraph', text: 'Part of the state school system. Free. Compulsory from age 5 (since 2022).' }
          ]}
        ]}
      ]
    },
    {
      id: 'apply-creche',
      title: 'Applying for Creche',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: '1. Apply through Segurança Social Direta', content: [
            { kind: 'paragraph', text: 'seg-social.pt → Segurança Social Direta → Família → Creche Feliz. Choose institutions (up to 5).' }
          ]},
          { id: 'c2', title: '2. Documents', content: [
            { kind: 'checklist', items: [
              'Child’s and parents’ NISS',
              'IRS declaration / income certificate',
              'Birth certificate',
              'Proof of address'
            ]}
          ]},
          { id: 'c3', title: '3. Priority', content: [
            { kind: 'paragraph', text: 'Abono de família bracket + siblings in the same institution + proximity to work or home address.' }
          ]},
          { id: 'c4', title: '4. Wait for a response', content: [
            { kind: 'timeline', text: '1–6 months. In Lisbon and Porto the Creche waiting list is huge — apply before birth or at 1–2 months.' }
          ]}
        ]}
      ]
    },
    {
      id: 'apply-jardim',
      title: 'Applying for Jardim de Infância',
      content: [
        { kind: 'substeps', items: [
          { id: 'j1', title: '1. Portal das Matrículas', content: [
            { kind: 'paragraph', text: 'portaldasmatriculas.edu.gov.pt → registration → choose the school grouping.' }
          ]},
          { id: 'j2', title: '2. Deadlines', content: [
            { kind: 'paragraph', text: 'The main application period is April–May for the next school year (September). Available places are allocated until mid-June.' }
          ]},
          { id: 'j3', title: '3. Priority', content: [
            { kind: 'paragraph', text: 'Age (older children first), catchment area, siblings.' }
          ]}
        ]}
      ]
    },
    {
      id: 'private-international',
      title: 'International private kindergartens',
      content: [
        { kind: 'paragraph', text: 'Popular options in Lisbon for Russian-speaking families:' },
        { kind: 'checklist', items: [
          'Russian Club Carlos Freixo, Oeiras — Russian language and culture',
          'St. Julian\'s School (Carcavelos) — British, ages 2–18',
          'International Preparatory School — American, ages 3–15',
          'Escola Alemã (Lisboa) — German',
          'Lycée Français Charles Lepierre — French'
        ]},
        { kind: 'paragraph', text: 'Cost €8,000–18,000/year.' }
      ]
    }
  ],
  costs: [
    { label: 'Creche Feliz / state', amountEUR: 0, note: 'free for the 1st–2nd bracket' },
    { label: 'Creche IPSS', amountEURMin: 0, amountEURMax: 400, note: '/month, based on income' },
    { label: 'Private Creche', amountEURMin: 400, amountEURMax: 1200, note: '/month in major cities' },
    { label: 'State Jardim de Infância', amountEUR: 0 },
    { label: 'Private / international Jardim', amountEURMin: 300, amountEURMax: 1500, note: '/month' }
  ],
  sources: [
    { title: 'Segurança Social — Creche Feliz', url: 'https://www.seg-social.pt/creche-feliz', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Portal das Matrículas', url: 'https://portaldasmatriculas.edu.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DGE — Pre-School Education', url: 'https://www.dge.mec.pt/educacao-pre-escolar', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 180
}
