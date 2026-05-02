export default {
  editorialVoice: 'hackportugal',
  id: 'chave-movel-digital',
  categoryId: 'digital_gov',
  title: 'Chave Móvel Digital (government electronic signature) — activation',
  tldr: 'CMD is a digital signature from the Portuguese state. Without it, the following are impossible: AIMA portal renewals, Segurança Social Direta (online social security portal), Finanças, signing documents online. It is activated free of charge at a Loja de Cidadão or using a Cartão de Cidadão (Portuguese citizen ID card).',
  tags: ['chave', 'cmd', 'digital signature'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'what',
      title: 'What it is and why you need it',
      content: [
        { kind: 'paragraph', text: 'Chave Móvel Digital (CMD) is a government login + digital signature. Similar to "Gosuslugi" or BankID. It is used to log in to AIMA, SNS, Finanças, IRN, the courts, ePortugal.' },
        { kind: 'paragraph', text: 'It works as a PIN + SMS combination (or push notification in the Autenticação.gov app).' }
      ]
    },
    {
      id: 'requirements',
      title: 'Requirements',
      content: [
        { kind: 'checklist', items: [
          'Cartão de Cidadão (CC) or passport with residence permit',
          'NIF',
          'Portuguese phone number (mandatory for SMS 2FA)',
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
          { id: 'c1', title: '1. Option A — online using CC + reader', content: [
            { kind: 'paragraph', text: 'If you have a Cartão de Cidadão with PIN and a USB reader (or mobile NFC), you can activate it on autenticacao.gov.pt without a visit.' }
          ]},
          { id: 'c2', title: '1. Option B — in person at a Loja de Cidadão / Espaço Cidadão', content: [
            { kind: 'paragraph', text: 'Book on eportugal.gov.pt or use the walk-in queue. The operator checks your documents and activates CMD for your PT number.' }
          ]},
          { id: 'c3', title: '2. Set a password (PIN)', content: [
            { kind: 'paragraph', text: 'A network PIN of 4-8 digits. It is used for every authorisation together with the SMS code.' }
          ]},
          { id: 'c4', title: '3. Install the Autenticação.gov app', content: [
            { kind: 'paragraph', text: 'App for iOS / Android. It removes the need for SMS codes — push notifications instead. Recommended.' }
          ]},
          { id: 'c5', title: '4. Activate the digital signature (optional)', content: [
            { kind: 'paragraph', text: 'A separate option in your profile. Allows you to sign PDFs without visiting a notary (for many purposes).' }
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
          'SNS — medical record and prescriptions',
          'ePortugal — certificates, extracts',
          'Signing rental/purchase contracts without appearing in person'
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
    { title: 'ePortugal — Chave Móvel Digital', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/chave-movel-digital', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 180
}
