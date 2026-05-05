export default {
  editorialVoice: 'hackportugal',
  id: 'nif-for-children',
  categoryId: 'documents_fiscal',
  title: 'NIF for a child — how to apply',
  tldr: 'A child needs a NIF for: enrolment in a school or Jardim de Infância/Creche, registration with the SNS (Número de Utente), insurance, private medical services, and receiving Abono de Família. Children who are Portuguese citizens receive a NIF automatically at birth via the Balcão do Nado Vivo. For foreign children — in person at Finanças or remotely through a representative. Free of charge.',
  tags: ['nif', 'children', 'documents'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'when-needed',
      title: 'When a NIF is mandatory for a child',
      content: [
        { kind: 'checklist', items: [
          'Enrolment in a public or private school, Jardim de Infância or Creche',
          'Registration with the SNS (Número de Utente) — via the Centro de Saúde',
          'Applying for Abono de Família (child benefit)',
          'Taking out health insurance for the child',
          'Including the child in Reagrupamento Familiar',
          'Inheritance, receiving gifts and transfers'
        ]}
      ]
    },
    {
      id: 'path-pt-born',
      title: 'If the child was born in Portugal',
      content: [
        { kind: 'paragraph', text: 'Hospitals have the Balcão do Nado Vivo (“newborn desk”) — a one‑stop procedure for registering a newborn.' },
        { kind: 'checklist', items: [
          'Within 20 days after birth — registration of the name at the Conservatória do Registo Civil',
          'NIF + NISS + Número de Utente are assigned automatically as one package',
          'Parents receive the Cédula de Nascimento electronically or the Assento de Nascimento',
          'If the parents are foreign nationals, the child inherits their nationality; Portuguese nationality applies only if one parent has been a resident of Portugal for ≥ 1 year (Lei 37/81 art. 1.1.f)'
        ]}
      ]
    },
    {
      id: 'path-foreign',
      title: 'If the child arrived from abroad',
      content: [
        { kind: 'substeps', items: [
          { id: 'f1', title: 'Option A — in person at Finanças', content: [
            { kind: 'checklist', items: [
              'Book an appointment on the Portal das Finanças or come as a walk‑in',
              'Both parents, or one parent with a power of attorney from the other, and the child',
              'Documents: the child’s passport, birth certificate (with apostille + sworn translation if the document is not in Portuguese or English), NIF of both parents',
              'Proof of address in Portugal: tenancy contract or Atestado de Residência',
              'The NIF is issued on the day of the visit, free of charge'
            ]}
          ]},
          { id: 'f2', title: 'Option B — remotely via a representative', content: [
            { kind: 'paragraph', text: 'If the parents are third‑country nationals and are not yet in Portugal, the same mechanism applies as for an adult NIF via a fiscal representative. The representative is indicated as temporary; after obtaining a residence permit it can be removed. Cost — €70–150 via a lawyer or a company.' }
          ]},
          { id: 'f3', title: 'Option C — for EU/CPLP citizens', content: [
            { kind: 'paragraph', text: 'No representative is required. A parent who is an EU/CPLP citizen attends with the child’s passport and birth certificate. You can indicate a home address in an EU/CPLP country.' }
          ]}
        ]}
      ]
    },
    {
      id: 'after',
      title: 'After obtaining the NIF',
      content: [
        { kind: 'checklist', items: [
          'The child’s NIF is linked to a managing parent in the Portal das Finanças: the parent manages it until the child turns 18',
          'Activate the Portal das Finanças for the child — only if the parent needs to view taxes on the child’s behalf; usually not required until 18',
          'Provide the NIF to the school or Jardim de Infância/Creche at enrolment',
          'For SNS (Número de Utente) the next step is to go to the local Centro de Saúde',
          'For Abono de Família — apply via the parent’s Segurança Social Direta for the child'
        ]}
      ]
    },
    {
      id: 'common-issues',
      title: 'Common issues',
      content: [
        { kind: 'warning', text: 'Apostille + sworn translation of the birth certificate: for countries outside the Hague Convention (Canada, China) consular legalisation is required instead of an apostille. For Ukraine from 2024 — online apostille via Diia.' },
        { kind: 'warning', text: 'If the child was conceived via IVF or with an unknown father — list only one parent; Finanças accepts this without issues.' },
        { kind: 'warning', text: 'Translation of the child’s name — make sure it matches how it will appear in the passport. Different transliterations (MARIIA/MARIA/MARYA) cause problems with school enrolment and receiving Abono de Família.' }
      ]
    }
  ],
  documents: [
    { title: 'Birth certificate', note: 'apostille + sworn translation if the document is not in Portuguese or English' },
    { title: 'Child’s passport', note: 'original + copy' },
    { title: 'Parents’ passports', note: 'both, with NIF' },
    { title: 'Atestado de Residência', note: 'or tenancy contract' }
  ],
  costs: [
    { label: 'Finanças fee', amountEUR: 0 },
    { label: 'Apostille + certificate translation', amountEURMin: 100, amountEURMax: 300 },
    { label: 'Fiscal representative (if remote)', amountEURMin: 70, amountEURMax: 150 }
  ],
  timelineDaysMin: 1,
  timelineDaysMax: 15,
  sources: [
    { title: 'Portal das Finanças — NIF', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.htmlindex.htmlindex.html', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Balcão do Nado Vivo', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/registar-o-nascimento-no-balcao-do-nado-vivo', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IRN — Cédula de Nascimento', url: 'https://irn.justica.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 365
}
