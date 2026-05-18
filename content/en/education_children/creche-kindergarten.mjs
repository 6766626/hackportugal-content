export default {
  editorialVoice: 'hackportugal',
  id: 'creche-kindergarten',
  categoryId: 'education_children',
  title: 'Creche and kindergarten in Portugal',
  tldr: 'Creche (usually 0–3) can be IPSS/social, private and more rarely municipal. Under the **Creche Feliz** programme, a place may be free in covered institutions (mainly IPSS/social network).\n\nJardim de Infância / preschool education (3–6 years) — in the state network the educational component is free; meals, transporte and AAAF/prolongamento may be charged separately. Attendance at preschool **is not compulsory** — compulsory schooling starts at age 6. Enrolment for Creche Feliz: Segurança Social Direta; for Jardim de Infância: Portal das Matrículas.',
  tags: ['creche', 'kindergarten', 'jardim de infância', 'children'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'types',
      title: 'Types of institutions',
      content: [
        { kind: 'substeps', items: [
          { id: 't1', title: 'Creche Feliz (free nursery for eligible places) — since 2022', content: [
            { kind: 'paragraph', text: 'A free place in **covered** institutions — primarily the IPSS social/solidarity network; private for-profit creches may participate only if they comply with the programme rules (usually when there is no suitable place in the social network).\n\nInitially (2022/23) there was a restriction to the 1st–2nd abono brackets — by 2026 this is no longer the main rule. The standard mensalidade is €0; “extras” (additional services, extended hours) may be charged separately.' }
          ]},
          { id: 't2', title: 'IPSS Creche outside Creche Feliz', content: [
            { kind: 'paragraph', text: 'If the place is not covered by Creche Feliz, a comparticipação familiar based on income may apply according to the institution’s/Segurança Social rules. Meals are usually included in the standard fee.' }
          ]},
          { id: 't3', title: 'Private nursery (Creche Privada)', content: [
            { kind: 'paragraph', text: 'Commercial institutions. €400–1,200/month in Lisbon and Porto. There are international options with English, French or German.' }
          ]},
          { id: 't4', title: 'Jardim de Infância / preschool education (3–6 years)', content: [
            { kind: 'paragraph', text: 'In the state network, the educational component is free. **Attendance is not compulsory** — compulsory school starts at age 6. Meals, transporte escolar and AAAF/prolongamento may be paid or subsidised depending on the municipality and the Ação Social Escolar (ASE) bracket.' }
          ]}
        ]}
      ]
    },
    {
      id: 'apply-creche',
      title: 'Enrolment in Creche',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: '1. Apply through Segurança Social Direta', content: [
            { kind: 'paragraph', text: 'For Creche Feliz places: SSD → Família → Creche Feliz / Pedido de Creche. Check the current limit for choosing institutions on the portal. For private creches or places outside the programme, apply directly to the institution.' }
          ]},
          { id: 'c2', title: '2. Documents', content: [
            { kind: 'checklist', items: [
              'NISS of the child and parents',
              'Declaração de IRS and nota de liquidação / proof of income',
              'Birth certificate',
              'Proof of address',
              'If necessary, comprovativo do escalão de abono / household composition'
            ]}
          ]},
          { id: 'c3', title: '3. Priority', content: [
            { kind: 'paragraph', text: 'Abono de família level + siblings in the same institution + proximity to work or home address.' }
          ]},
          { id: 'c4', title: '4. Wait for a response', content: [
            { kind: 'timeline', text: '1–6 months. In Lisbon and Porto the queue for Creche is huge — apply before birth or at 1–2 months.' }
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
            { kind: 'paragraph', text: 'portaldasmatriculas.edu.gov.pt → login/authentication (Chave Móvel Digital / CC / NIF+AT password) → choose institutions/agrupamentos in order of preference. If you cannot authenticate online, contact the school/agrupamento.' }
          ]},
          { id: 'j2', title: '2. Deadlines', content: [
            { kind: 'paragraph', text: 'The calendar is published annually (despacho); applications for preschool/1.º ano are usually submitted in April–May. Exact dates and placement publication deadlines are on Portal das Matrículas for the specific school year.' }
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
        { kind: 'paragraph', text: 'For Russian-speaking families, popular options in Lisbon include:' },
        { kind: 'checklist', items: [
          'Russian Club Carlos Freixo, Oeiras — Russian language and culture',
          'St. Julian\'s School (Carcavelos) — British, ages 2–18',
          'International Preparatory School — English-speaking international/British-style school; check age/fee ranges on the website',
          'Escola Alemã (Lisboa) — German',
          'Lycée Français Charles Lepierre — French'
        ]},
        { kind: 'paragraph', text: 'Tuition usually costs €8,000–18,000/year, but first-year registration/capital fees, meals, uniform, transport and after-school care are usually extra — check the fee table of the specific school.' }
      ]
    }
  ],
  costs: [
    { label: 'Creche Feliz (covered place)', amountEUR: 0, note: 'standard mensalidade €0 mainly in the IPSS/social network; participating private providers only under the programme rules; extras/extended services may be charged' },
    { label: 'IPSS Creche outside Creche Feliz', note: 'comparticipação familiar based on income — varies by institution/family formula' },
    { label: 'Private Creche', amountEURMin: 400, amountEURMax: 1200, note: '/month in major cities' },
    { label: 'State Jardim de Infância (educational component)', amountEUR: 0, note: 'meals/AAAF/transporte may be paid by the municipality/ASE' },
    { label: 'Private / international Jardim', amountEURMin: 300, amountEURMax: 1500, note: '/month' }
  ],
  sources: [
    { title: 'Segurança Social — Creche Feliz', url: 'https://www.seg-social.pt/creche-feliz', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Portal das Matrículas', url: 'https://portaldasmatriculas.edu.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DGE — Curriculum Guidelines for Preschool Education', url: 'https://www.dge.mec.pt/orientacoes-curriculares-para-educacao-pre-escolar', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
