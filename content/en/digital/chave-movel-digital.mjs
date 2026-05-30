export default {
  editorialVoice: 'hackportugal',
  id: 'chave-movel-digital',
  categoryId: 'digital_gov',
  title: 'Chave Móvel Digital (state electronic signature) — activation',
  tldr: 'CMD is a digital signature from the Portuguese state. Without it, the following are impossible: AIMA portal renewals, Segurança Social Direta (online social security portal), Finanças, signing documents online. It is activated free of charge at a Loja de Cidadão or via Cartão de Cidadão (Portuguese citizen ID card).',
  tags: ['chave', 'cmd', 'digital signature'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'what',
      title: 'What it is and why you need it',
      content: [
        { kind: 'paragraph', text: 'Chave Móvel Digital (CMD) is a state login + digital signature. Similar to "Gosuslugi" or BankID. It is used to log in to AIMA, SNS, Finanças, IRN, the courts, ePortugal.' },
        { kind: 'paragraph', text: 'It works as a PIN + SMS combination (or push notification in the Autenticação.gov app).' }
      ]
    },
    {
      id: 'requirements',
      title: 'Requirements',
      content: [
        { kind: 'checklist', items: [
          'Cartão de Cidadão (CC) or passport with a residence permit',
          'NIF',
          'Portuguese phone number (required for SMS 2FA)',
          'Email'
        ]},
        { kind: 'warning', text: 'A foreign phone number is not suitable for activation — you need a SIM with a PT number.' }
      ]
    },
    {
      id: 'activate',
      title: 'How to activate it',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: '1. Option A — online via CC + reader', content: [
            { kind: 'paragraph', text: 'If you have a Cartão de Cidadão with PIN and a USB reader (or mobile NFC) — activate it on autenticacao.gov.pt without a visit.' }
          ]},
          { id: 'c2', title: '1. Option B — in person at a Loja de Cidadão / Espaço Cidadão', content: [
            { kind: 'paragraph', text: 'Book on gov.pt or use the walk-in queue. The operator checks your documents and activates CMD on your PT number.' }
          ]},
          { id: 'c3', title: '2. Set a password (PIN)', content: [
            { kind: 'paragraph', text: 'A web PIN of 4-8 digits. Used for every authorisation together with the SMS code.' }
          ]},
          { id: 'c4', title: '3. Install the Autenticação.gov app', content: [
            { kind: 'paragraph', text: 'App for iOS / Android. Removes the need for SMS codes — push notifications instead. Recommended.' }
          ]},
          { id: 'c5', title: '4. Activate the digital signature (optional)', content: [
            { kind: 'paragraph', text: 'A separate option in the profile. Allows you to sign PDFs without visiting a notary (for many purposes).' }
          ]}
        ]}
      ]
    },
    {
      id: 'use',
      title: 'Where to use it',
      content: [
        { kind: 'checklist', items: [
          'portal-renovacoes.aima.gov.pt — residence permit renewal',
          'Segurança Social Direta — NISS, benefits',
          'Portal das Finanças (tax portal) — IRS, NIF',
          'SNS — health record and prescriptions',
          'ePortugal — certificates, extracts',
          'Signing rental/purchase contracts without attending in person'
        ]}
      ]
    }
  ],
  documents: [
    { title: 'CC or passport + residence permit' },
    { title: 'NIF' },
    { title: 'PT phone number' }
  ],
  costs: [{ label: 'Activation', amountEUR: 0 }],
  timelineDaysMin: 1,
  timelineDaysMax: 14,
  sources: [
    { title: 'Autenticação.gov — official', url: 'https://www.autenticacao.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Chave Móvel Digital', url: 'https://www.gov.pt/cidadaos/-/informacoes/chave-movel-digital', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
