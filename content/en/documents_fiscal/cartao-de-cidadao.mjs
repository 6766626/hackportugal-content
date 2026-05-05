export default {
  editorialVoice: 'hackportugal',
  id: 'cartao-de-cidadao',
  categoryId: 'documents_fiscal',
  title: 'Cartão de Cidadão (Portuguese citizen ID card) — for residents and citizens',
  tldr: 'Cartão de Cidadão (CC) is a multifunctional ID: identity document in Portugal + NIF + NISS + Número de Utente + biometric document + digital signature. Mandatory for Portuguese citizens; foreign residents receive an equivalent — Título de Residência (residence permit card). Replacement/renewal — at IRN or Loja de Cidadão.',
  tags: ['cc', 'documents', 'cartão de cidadão'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'for-whom',
      title: 'Who gets a CC',
      content: [
        { kind: 'checklist', items: [
          'Portuguese citizens (mandatory)',
          'Children of citizens (from birth — temporary newborn card → CC from 6-9 months)',
          'Foreign residents do NOT receive a CC — they have a Título de Residência (residence permit card) with the same functionality for most purposes'
        ]},
        { kind: 'warning', text: 'If you have naturalised → you receive a CC instead of a residence permit. The process is described below.' }
      ]
    },
    {
      id: 'functions',
      title: 'Functions of the CC',
      content: [
        { kind: 'checklist', items: [
          'Identity document for travel within Portugal and the EU (replaces the passport in the Schengen Area)',
          'Includes NIF (tax number)',
          'Includes NISS (social security number)',
          'Includes Número de Utente (SNS patient number)',
          'Biometric document: fingerprints, photo',
          'Chip for digital signature (requires a USB reader or an NFC-enabled phone)',
          'Activation PIN',
          'Voting in elections (for Portuguese citizens)',
          'Identification in co-operatives, libraries, schools'
        ]}
      ]
    },
    {
      id: 'first-time',
      title: 'First-time issuance',
      content: [
        { kind: 'substeps', items: [
          { id: 'f1', title: 'For newborns', content: [
            { kind: 'paragraph', text: 'Registration at the Conservatória do Registo Civil → automatic issuance of a CC for 5 years. In the first 6-9 months — a temporary newborn card.' }
          ]},
          { id: 'f2', title: 'For naturalised citizens', content: [
            { kind: 'paragraph', text: 'After acquiring citizenship (IRN approves) → book an appointment for a CC at IRN or a Loja de Cidadão → biometrics + photo → the CC arrives in 30 days.' }
          ]}
        ]}
      ]
    },
    {
      id: 'renew',
      title: 'Renewal / replacement',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: 'When to renew', content: [
            { kind: 'paragraph', text: 'A CC is valid for 10 years (5 for children). 6 months before expiry — book a renewal appointment.' }
          ]},
          { id: 'r2', title: 'How', content: [
            { kind: 'paragraph', text: 'Book at eportugal.gov.pt → choose an Espaço Cidadão or IRN → attend with your current CC + proof of address → biometrics + photo → 30 days to receive it.' }
          ]},
          { id: 'r3', title: 'Loss / theft', content: [
            { kind: 'paragraph', text: '1) Block it via Linha 211 950 500 (24/7). 2) File a report with the PSP (police report). 3) Request a replacement at IRN with the police report.' }
          ]}
        ]}
      ]
    },
    {
      id: 'digital',
      title: 'The digital side of the CC',
      content: [
        { kind: 'paragraph', text: 'CC = the key to portals (autenticação.gov, Finanças, AIMA, Segurança Social). You need a reader (USB €20–30) or a compatible NFC phone.' },
        { kind: 'paragraph', text: 'As an alternative for foreigners without a CC — Chave Móvel Digital (see the separate guide). CMD provides similar digital access without a physical card.' }
      ]
    }
  ],
  costs: [
    { label: 'First issuance (children up to 25)', amountEUR: 15 },
    { label: 'Renewal (standard)', amountEUR: 18, note: 'IRN 2026' },
    { label: 'Urgent (3 days)', amountEUR: 33 },
    { label: 'Very urgent (same / next day)', amountEUR: 53 },
    { label: 'Online discount', amountEUR: 0, note: '−10% for online renewals' },
    { label: 'Replacement for loss', amountEUR: 20 }
  ],
  sources: [
    { title: 'IRN — Cartão de Cidadão', url: 'https://irn.justica.gov.pt/Documentos-de-Identificacao/Cartao-de-Cidadao', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Renew CC', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/renovar-o-cartao-de-cidadao', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Autenticação.gov — Digital CC', url: 'https://www.autenticacao.gov.pt/o-cartao-de-cidadao', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}
