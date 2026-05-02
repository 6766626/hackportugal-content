export default {
  editorialVoice: 'hackportugal',
  id: 'financas-password',
  categoryId: 'documents_fiscal',
  title: 'Portal das Finanças password (tax portal) — activation and recovery',
  tldr: 'After obtaining a NIF, you need to activate a password to log in to portaldasfinancas.gov.pt. The request is made online — the password arrives by post at your address within 5–10 days, or up to 3 weeks for a foreign address. To recover it, use “Recuperar senha”: the code will arrive by email (if it is set up) or by ordinary post. An alternative is Chave Móvel Digital (state electronic signature) via autenticacao.gov.pt.',
  tags: ['Finanças', 'password', 'senha', 'portal'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'first-time',
      title: 'First activation — requesting a password',
      content: [
        { kind: 'checklist', items: [
          '💻 Go to portaldasfinancas.gov.pt',
          '🔑 Top right corner → “Iniciar Sessão” → “Registar-se”',
          '📝 Enter your NIF, email address, phone number, date of birth',
          '✅ Confirm — the system will check that the details match the tax authority records',
          '📬 The password will be sent by CTT post to your REGISTERED tax address',
          '📅 5–10 days within Portugal, up to 3 weeks abroad'
        ]},
        { kind: 'warning', text: 'The password arrives at the address recorded in Finanças as your tax domicile. If the address is out of date — change it first (see the “Changing your tax address” guide).' }
      ]
    },
    {
      id: 'recovery',
      title: 'Recovering a forgotten password',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: 'A. By email', content: [
            { kind: 'paragraph', text: 'If an email address was provided during registration: “Esqueceu-se da sua palavra-chave?” → enter your NIF → the code arrives by email → set a new password.' }
          ]},
          { id: 'r2', title: 'B. By post', content: [
            { kind: 'paragraph', text: 'If email is not set up — the password is sent by CTT post in the same way as for the initial activation. 5–10 days.' }
          ]},
          { id: 'r3', title: 'C. Via Chave Móvel Digital', content: [
            { kind: 'paragraph', text: 'If you have CMD activated — log in to Portal das Finanças via “Autenticação.gov” (button at the top). No password is needed at all.' }
          ]}
        ]}
      ]
    },
    {
      id: 'cmd-alt',
      title: 'Alternative: Chave Móvel Digital',
      content: [
        { kind: 'paragraph', text: 'CMD is the state electronic identification system. Activation is via autenticacao.gov.pt; you need a Cartão de Cidadão (for Portuguese citizens) or NIF + SMS verification (for non-residents). After activation — log in to all government portals with one password + SMS/push notification, plus electronic signing of documents.' },
        { kind: 'checklist', items: [
          '📱 CMD + PIN + one-time SMS code instead of a Finanças password',
          '✍️ Ability to sign documents',
          '🔐 Works on AIMA, SNS 24, Segurança Social, ePortugal',
          '🆓 Free, valid indefinitely'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Tips',
      content: [
        { kind: 'checklist', items: [
          '📧 Set up your email and mobile number in Finanças straight away — this is your safety net',
          '🔐 Password: 8–16 characters, 1 capital letter, 1 digit',
          '📂 Save the password in a password manager — recovery by post takes a week',
          '🏠 Update your tax address when you move — otherwise the password will go to the old one',
          '👫 Family account: your spouse has a separate NIF and a separate password'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Portal das Finanças — Registration', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.html', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Autenticação.gov — Chave Móvel Digital', url: 'https://www.autenticacao.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Obtaining an access password for Portal das Finanças', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/registar-se-no-portal-das-financas', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}
