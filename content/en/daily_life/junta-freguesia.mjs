export default {
  editorialVoice: 'hackportugal',
  id: 'junta-freguesia',
  categoryId: 'digital_gov',
  title: 'Junta de Freguesia — what it is and what services it provides',
  tldr: 'Junta de Freguesia (pronounced roughly "yunta-freguezia") — a local self-government body, roughly like a village council or district administration. Issues Atestado de Residência (proof of residence, needed for AIMA/SNS), registers união de facto, handles upkeep of neighbourhood streets, and runs activities for pensioners and children.',
  tags: ['junta', 'freguesia', 'atestado', 'local administration'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'what',
      title: 'What is a Junta',
      content: [
        { kind: 'paragraph', text: 'Portugal is administratively divided as follows: distrito → concelho (municipality, Câmara Municipal) → freguesia (parish). The Junta de Freguesia is the executive body of a freguesia. Lisbon has 24 freguesias; Porto has 7.' },
        { kind: 'paragraph', text: 'The Junta is the authority closest to residents. It is usually near your home, with short queues and a more human approach.' }
      ]
    },
    {
      id: 'services',
      title: 'What services it offers',
      content: [
        { kind: 'checklist', items: [
          'Atestado de Residência (certificate of residence) — confirms that you live at this address (for AIMA, SNS, school, bank, embassy)',
          'Atestado de Agregado Familiar — certificate of household composition',
          'Atestado de Condição Económica — certificate of economic situation for social assistance',
          'Registo de União de Facto — registration of a civil partnership',
          'Autenticação de cópias — certification of document copies',
          'Atestado de Incapacidade Económica — for free legal aid',
          'Recenseamento Eleitoral — enrolment on the electoral register for Cartão de Cidadão holders',
          'Registo de Cidadão Europeu (CRUE) — in some Juntas de Freguesia',
          'Permits for noisy works and removal of construction debris',
          'Cultural activities — concerts, courses, workshops'
        ]}
      ]
    },
    {
      id: 'atestado',
      title: 'How to obtain an Atestado de Residência',
      content: [
        { kind: 'substeps', items: [
          { id: 'a1', title: '1. Documents', content: [
            { kind: 'checklist', items: [
              'Passport / residence permit / Cartão de Cidadão',
              'Proof of residence: tenancy agreement / utility bill / IRS with address',
              '2 neighbour-witnesses (Portuguese or Cartão de Cidadão holders) — BOTH MUST ATTEND IN PERSON in some Juntas de Freguesia',
              'Some Juntas de Freguesia accept a simple statement signed by the building’s residents'
            ]}
          ]},
          { id: 'a2', title: '2. Go to the Junta de Freguesia', content: [
            { kind: 'paragraph', text: 'No appointment; queues are usually 10–30 minutes. Open 09:00–17:00, lunch 12:30–14:00.' }
          ]},
          { id: 'a3', title: '3. Get the certificate straight away', content: [
            { kind: 'paragraph', text: 'Issued the same day, €2–5. Valid for 90 days.' }
          ]}
        ]}
      ]
    },
    {
      id: 'find',
      title: 'How to find your Junta de Freguesia',
      content: [
        { kind: 'paragraph', text: 'By address:' },
        { kind: 'checklist', items: [
          'Search on the municipality website: “Junta de Freguesia” + your neighbourhood',
          'ANAFRE — the association of all Juntas de Freguesia: anafre.pt',
          'In Lisbon: Olivais, Lumiar, Marvila, Alvalade, Campolide, etc.',
          'In Porto: União de Freguesias do Centro Histórico, Aldoar-Foz-Nevogilde, etc.'
        ]}
      ]
    },
    {
      id: 'extra',
      title: 'Additional options',
      content: [
        { kind: 'checklist', items: [
          'Some Juntas de Freguesia offer free Portuguese courses',
          'Summer camps for children (férias ativas) — inexpensive, €50–100 per week',
          'Free exercise classes for pensioners (Movimento é Saúde)',
          'Libraries and reading rooms',
          'Legal advice once a month (Gabinete Jurídico)',
          'Congratulations for 80th birthdays, birth of a child'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'ANAFRE — National Association of Parishes (Associação Nacional de Freguesias)', url: 'https://www.anafre.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'CML — Juntas de Freguesia of Lisbon', url: 'https://www.lisboa.pt/municipio/juntas-de-freguesia', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'CM-Porto — Juntas de Freguesia', url: 'https://www.cm-porto.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 365
}
