export default {
  editorialVoice: 'hackportugal',
  id: 'junta-freguesia',
  categoryId: 'digital_gov',
  title: 'Junta de Freguesia — what it is and which services it provides',
  tldr: 'Junta de Freguesia is a local self-government body, roughly like a parish council or district administration. It issues an atestado de residência (proof of residence, needed for AIMA/SNS), provides declarations for união de facto, deals with maintenance issues on local streets, and organises activities for pensioners and children.',
  tags: ['junta', 'freguesia', 'atestado', 'local administration'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'what',
      title: 'What a Junta is',
      content: [
        { kind: 'paragraph', text: 'Portugal is administratively divided as follows: distrito → concelho (municipality, Câmara Municipal) → freguesia (parish). Junta de Freguesia is the executive body of a freguesia. Lisbon has 24 freguesia, Porto has 7.' },
        { kind: 'paragraph', text: 'The Junta is the government body closest to residents. It is usually near your home, queues are short, and the service is more human.' }
      ]
    },
    {
      id: 'services',
      title: 'Which services it provides',
      content: [
        { kind: 'checklist', items: [
          'Atestado de Residência (proof of address) — confirms that you live at this address (for AIMA, SNS, school, bank, embassy)',
          'Atestado de Agregado Familiar — certificate of household composition',
          'Atestado de Condição Económica — certificate of economic situation for social assistance',
          'Declaração de União de Facto — the Junta only issues a confirming declaration (the legal status of união de facto arises by law when the conditions are met and does not require “registration”)',
          'Autenticação de cópias — certification of document copies',
          'Atestado de Incapacidade Económica — for free legal aid',
          'Recenseamento Eleitoral — for Portuguese citizens, registration on the electoral roll is usually automatic (with Cartão de Cidadão); for foreigners with voting rights, an application is made at the Junta',
          'Registo de Cidadão Europeu (CRUE) — for EU citizens, requested at the Câmara Municipal for the place of residence (some Junta may accept delegated applications)',
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
              '2 neighbour-witnesses (Portuguese citizens or holders of Cartão de Cidadão) — BOTH ARE NEEDED IN PERSON at some Junta de Freguesia',
              'Some Junta de Freguesia accept a statement simply signed by residents of the building'
            ]}
          ]},
          { id: 'a2', title: '2. Go to the Junta de Freguesia', content: [
            { kind: 'paragraph', text: 'No appointment, usually a 10-30 minute queue. Opening hours are 9:00-17:00, lunch 12:30-14:00.' }
          ]},
          { id: 'a3', title: '3. Receive the certificate immediately', content: [
            { kind: 'paragraph', text: 'Issued on the same day, €2–5. The Atestado confirms the fact on the date of issue; the period of acceptability (for example, 90 days) is usually set by the receiving party (bank, AIMA, SNS), not by the Junta.' }
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
      title: 'Additional options',
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
    { title: 'CML — Lisbon Junta de Freguesia', url: 'https://www.lisboa.pt/municipio/juntas-de-freguesia', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'CM-Porto — Junta de Freguesia', url: 'https://www.cm-porto.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
