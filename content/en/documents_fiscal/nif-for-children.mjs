export default {
  editorialVoice: 'hackportugal',
  id: 'nif-for-children',
  categoryId: 'documents_fiscal',
  title: 'NIF for a child — how to apply',
  tldr: 'A child needs a NIF for: enrolment in school or nursery, obtaining SNS (Número de Utente), insurance, private medical services, and receiving Abono de Família. Children who are Portuguese citizens receive a NIF automatically at birth through Balcão do Nado Vivo. Foreign children apply in person at Finanças or online through a representative. Free of charge.',
  tags: ['nif', 'children', 'documents'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'when-needed',
      title: 'When a child’s NIF is required',
      content: [
        { kind: 'checklist', items: [
          'Enrolment in a state or private school, nursery or crèche',
          'Registration with SNS (Número de Utente) — through Centro de Saúde',
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
        { kind: 'paragraph', text: 'Hospitals operate Balcão do Nado Vivo (“Newborn Desk”) — a single procedure for registering a newborn.' },
        { kind: 'checklist', items: [
          'Within 20 days after birth — registration of the name at Conservatória do Registo Civil',
          'NIF + NISS + Número de Utente are assigned automatically as one package',
          'Parents receive Cédula de Nascimento electronically or Assento de Nascimento',
          'If the parents are foreigners, the child inherits their nationality; Portuguese nationality is granted only if one of the parents has been resident in Portugal for ≥ 1 year (Lei 37/81 art. 1.1.f)'
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
              'Book an appointment on Portal das Finanças or attend on a first-come, first-served basis',
              'Both parents or one parent + authorisation from the other, as well as the child',
              'Documents: the child’s passport, birth certificate (with apostille + sworn translation if the document is not in Portuguese or English), NIF of both parents',
              'Proof of address in Portugal: rental contract or Atestado de Residência',
              'The NIF is issued on the day of the visit, free of charge'
            ]}
          ]},
          { id: 'f2', title: 'Option B — remotely through a representative', content: [
            { kind: 'paragraph', text: 'If the parents are third-country nationals and are not yet in Portugal, the same mechanism applies as for an adult NIF through a fiscal representative. The representative is listed temporarily; after obtaining a residence permit, they can be removed. Cost — €70–150 through a lawyer or company.' }
          ]},
          { id: 'f3', title: 'Option C — for EU/CPLP citizens', content: [
            { kind: 'paragraph', text: 'A representative is not required. The parent — an EU/CPLP citizen — attends with the child’s passport and birth certificate. A home address in the EU/CPLP country may be provided.' }
          ]}
        ]}
      ]
    },
    {
      id: 'after',
      title: 'After obtaining the NIF',
      content: [
        { kind: 'checklist', items: [
          'The child’s NIF is linked to the managing parent in Portal das Finanças: the parent manages it until the child turns 18',
          'Activate Portal das Finanças for the child — if the parent needs to view taxes on the child’s behalf; usually this is not required before the age of 18',
          'Provide the NIF to the school or nursery at enrolment',
          'For SNS (Número de Utente), the next step is to contact the Centro de Saúde for your place of residence',
          'For Abono de Família — the parent applies for the child through Segurança Social Direta'
        ]}
      ]
    },
    {
      id: 'common-issues',
      title: 'Common difficulties',
      content: [
        { kind: 'warning', text: 'Apostille + sworn translation of the birth certificate: for countries outside the Hague Convention (Canada, China), consular legalisation will be required instead of an apostille. For Ukraine from 2024 — online apostille via Diia.' },
        { kind: 'warning', text: 'If the child was born through IVF or with an unknown father — list only one parent; Finanças accepts this without issue.' },
        { kind: 'warning', text: 'Transliteration of the child’s name — check how it will appear in the passport. Different transliterations (MARIIA/MARIA/MARYA) create problems with school admission and receiving Abono de Família.' }
      ]
    }
  ],
  documents: [
    { title: 'Birth certificate', note: 'apostille + sworn translation if the document is not in Portuguese or English' },
    { title: 'Child’s passport', note: 'original + copy' },
    { title: 'Parents’ passports', note: 'both, with NIF' },
    { title: 'Atestado de Residência', note: 'or rental contract' }
  ],
  costs: [
    { label: 'Finanças state fee', amountEUR: 0 },
    { label: 'Apostille + translation of certificate', amountEURMin: 100, amountEURMax: 300 },
    { label: 'Fiscal representative (if remote)', amountEURMin: 70, amountEURMax: 150 }
  ],
  timelineDaysMin: 1,
  timelineDaysMax: 15,
  sources: [
    { title: 'Portal das Finanças — NIF', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.html', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Balcão do Nado Vivo', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/registar-o-nascimento-no-balcao-do-nado-vivo', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IRN — Cédula de Nascimento', url: 'https://irn.justica.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}
