export default {
  editorialVoice: 'hackportugal',
  id: 'creche-kindergarten',
  categoryId: 'education_children',
  title: 'Creche and Jardim de Infância in Portugal',
  tldr: 'Creche (0–3 years) — paid, even public ones, with income-based fees: €0–400/month. Jardim de Infância (3–6 years, pre-school education) — free in public institutions. From age 5 it is compulsory. Enrol via Segurança Social Direta (social security online portal) for Creche or Portal das Matrículas for Jardim de Infância.',
  tags: ['creche', 'jardim de infância', 'kindergarten', 'children'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'types',
      title: 'Types of institutions',
      content: [
        { kind: 'substeps', items: [
          { id: 't1', title: 'Free creche (Creche Gratuita, 0–3 years) — since Sept 2022', content: [
            { kind: 'paragraph', text: 'Creche Feliz programme: free for children in abono de família levels 1–2. From the 2024–2025 school year it expands to all children up to 3 years old. Applies in public and solidarity institutions (IPSS).' }
          ]},
          { id: 't2', title: 'Creche IPSS (solidarity institutions)', content: [
            { kind: 'paragraph', text: 'Private non-profit institutions. Operate under agreement with Segurança Social. Income-based fees: €0–400/month.' }
          ]},
          { id: 't3', title: 'Private creche (Creche Privada)', content: [
            { kind: 'paragraph', text: 'Commercial institutions. €400–1,200/month in Lisbon and Porto. There are international options with English, French or German.' }
          ]},
          { id: 't4', title: 'Kindergarten (Jardim de Infância, 3–6 years, free)', content: [
            { kind: 'paragraph', text: 'Part of the state school system. Free. Compulsory from age 5 (since 2022).' }
          ]}
        ]}
      ]
    },
    {
      id: 'apply-creche',
      title: 'Enrolment in Creche',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: '1. Apply via Segurança Social Direta', content: [
            { kind: 'paragraph', text: 'seg-social.pt → Segurança Social Direta → Família → Creche Feliz. Choose institutions (up to 5).' }
          ]},
          { id: 'c2', title: '2. Documents', content: [
            { kind: 'checklist', items: [
              'NISS of the child and parents',
              'IRS declaration / income statement',
              'Birth certificate',
              'Proof of address'
            ]}
          ]},
          { id: 'c3', title: '3. Priority', content: [
            { kind: 'paragraph', text: 'abono de família level + siblings in the same institution + proximity to work or home address.' }
          ]},
          { id: 'c4', title: '4. Wait for a response', content: [
            { kind: 'timeline', text: '1–6 months. In Lisbon and Porto the waiting list for Creche is huge — apply before birth or at 1–2 months old.' }
          ]}
        ]}
      ]
    },
    {
      id: 'apply-jardim',
      title: 'Enrolment in Jardim de Infância',
      content: [
        { kind: 'substeps', items: [
          { id: 'j1', title: '1. Portal das Matrículas', content: [
            { kind: 'paragraph', text: 'portaldasmatriculas.edu.gov.pt → registration → choose the school cluster.' }
          ]},
          { id: 'j2', title: '2. Deadlines', content: [
            { kind: 'paragraph', text: 'Main window — April–May for the next school year (September). Remaining places — until mid-June.' }
          ]},
          { id: 'j3', title: '3. Priority', content: [
            { kind: 'paragraph', text: 'Age (older children first), catchment area, siblings.' }
          ]}
        ]}
      ]
    },
    {
      id: 'private-international',
      title: 'Private international kindergartens',
      content: [
        { kind: 'paragraph', text: 'For Russian-speaking families, popular options in Lisbon:' },
        { kind: 'checklist', items: [
          'Russian Club Carlos Freixo, Oeiras — Russian language and culture',
          'St. Julian\'s School (Carcavelos) — British, 2–18 years',
          'International Preparatory School — American, 3–15 years',
          'Escola Alemã (Lisboa) — German',
          'Lycée Français Charles Lepierre — French'
        ]},
        { kind: 'paragraph', text: 'Cost €8,000–18,000/year.' }
      ]
    }
  ],
  costs: [
    { label: 'Creche Feliz / public', amountEUR: 0, note: 'free for abono de família levels 1–2' },
    { label: 'Creche IPSS', amountEURMin: 0, amountEURMax: 400, note: '/month, income-based' },
    { label: 'Private Creche', amountEURMin: 400, amountEURMax: 1200, note: '/month in major cities' },
    { label: 'Public Jardim de Infância', amountEUR: 0 },
    { label: 'Private / international Jardim', amountEURMin: 300, amountEURMax: 1500, note: '/month' }
  ],
  sources: [
    { title: 'Segurança Social — Creche Feliz', url: 'https://www.seg-social.pt/creche-feliz', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Portal das Matrículas', url: 'https://portaldasmatriculas.edu.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DGE — Curriculum Guidelines for Pre-School Education', url: 'https://www.dge.mec.pt/orientacoes-curriculares-para-educacao-pre-escolar', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 180
}
