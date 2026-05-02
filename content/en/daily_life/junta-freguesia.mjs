export default {
  editorialVoice: 'hackportugal',
  id: 'junta-freguesia',
  categoryId: 'digital_gov',
  title: 'Junta de Freguesia — what it is and what services it provides',
  tldr: 'Junta de Freguesia is a local self-government body, roughly like a parish council or district administration. It issues an atestado de residência (proof of residence certificate, needed for AIMA/SNS), registers união de facto, deals with maintenance issues on neighbourhood streets, and organises activities for pensioners and children.',
  tags: ['junta', 'freguesia', 'atestado', 'local administration'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'what',
      title: 'What a Junta is',
      content: [
        { kind: 'paragraph', text: 'Portugal is administratively divided as follows: distrito → concelho (municipality, Câmara Municipal) → freguesia (parish). Junta de Freguesia is the executive body of the freguesia. There are 24 freguesia in Lisbon and 7 in Porto.' },
        { kind: 'paragraph', text: 'The Junta is the authority closest to residents. It is usually located near home, the queue is short, and the approach is more human.' }
      ]
    },
    {
      id: 'services',
      title: 'What services it provides',
      content: [
        { kind: 'checklist', items: [
          'Atestado de Residência (proof of address certificate) — confirms that you live at this address (for AIMA, SNS, school, bank, embassy)',
          'Atestado de Agregado Familiar — household composition certificate',
          'Atestado de Condição Económica — certificate of economic circumstances for social support',
          'Registo de União de Facto — registration of a civil partnership',
          'Autenticação de cópias — certification of document copies',
          'Atestado de Incapacidade Económica — for free legal aid',
          'Recenseamento Eleitoral — inclusion on the electoral roll for holders of Cartão de Cidadão',
          'Registo de Cidadão Europeu (CRUE) — in some Junta de Freguesia',
          'Permits for noisy works and removal of construction waste',
          'Cultural events — concerts, courses, workshops'
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
              'Proof of residence: rental contract / utility bill / IRS with address',
              '2 neighbour witnesses (Portuguese citizens or holders of Cartão de Cidadão) — BOTH MUST ATTEND IN PERSON in some Junta de Freguesia',
              'Some Junta de Freguesia simply accept a statement signed by residents of the building'
            ]}
          ]},
          { id: 'a2', title: '2. Go to the Junta de Freguesia', content: [
            { kind: 'paragraph', text: 'No appointment, usually a 10-30 minute queue. Opening hours are 09:00-17:00, lunch 12:30-14:00.' }
          ]},
          { id: 'a3', title: '3. Receive the certificate immediately', content: [
            { kind: 'paragraph', text: 'Issued on the same day, €2–5. Valid for 90 days.' }
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
          'ANAFRE — association of all Junta de Freguesia: anafre.pt',
          'In Lisbon: Olivais, Lumiar, Marvila, Alvalade, Campolide, etc.',
          'In Porto: União de Freguesias do Centro Histórico, Aldoar-Foz-Nevogilde, etc.'
        ]}
      ]
    },
    {
      id: 'extra',
      title: 'Additional opportunities',
      content: [
        { kind: 'checklist', items: [
          'Some Junta de Freguesia have free Portuguese language courses',
          'Summer camps for children (férias ativas) — inexpensive, €50–100 per week',
          'Free exercise classes for pensioners (Movimento é Saúde)',
          'Libraries and reading rooms',
          'Legal consultation once a month (Gabinete Jurídico)',
          'Congratulations on an 80th birthday or the birth of a child'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'ANAFRE — National Association of Freguesias', url: 'https://www.anafre.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'CML — Lisbon Junta de Freguesia', url: 'https://www.lisboa.pt/cidade/juntas-de-freguesia', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'CM-Porto — Junta de Freguesia', url: 'https://www.cm-porto.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}
