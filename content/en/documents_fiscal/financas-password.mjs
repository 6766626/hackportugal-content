export default {
  editorialVoice: 'hackportugal',
  id: 'financas-password',
  categoryId: 'documents_fiscal',
  title: 'Portal das Finanças password (tax portal) — activation and recovery',
  tldr: 'After obtaining a NIF, you need to activate a password to log in to portaldasfinancas.gov.pt. The request is made online — the password arrives by post at your tax address within 5–10 days, or up to 3 weeks if the address is abroad. Recovery: if a mobile phone is confirmed with AT, a code/SMS may be available; otherwise a new senha is sent by letter to the registered tax address. An alternative is Chave Móvel Digital (CMD) via autenticacao.gov.pt.',
  tags: ['finanças', 'password', 'senha', 'portal'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'first-time',
      title: 'First activation — requesting a password',
      content: [
        { kind: 'checklist', items: [
          '💻 Go to portaldasfinancas.gov.pt',
          '🔑 Top-right corner → “Iniciar Sessão” → “Registar-se”',
          '📝 Enter your NIF, email address, phone number, date of birth',
          '✅ Confirm — the system will check the match against tax authority data',
          '📬 The password will be sent by CTT post to your REGISTERED tax address',
          '📅 5–10 days within Portugal, up to 3 weeks abroad'
        ]},
        { kind: 'warning', text: 'The password arrives at the address listed in Finanças as your tax domicile. If the address is out of date — change it first (see the “Changing your tax address” guide).' }
      ]
    },
    {
      id: 'recovery',
      title: 'Recovering a forgotten password',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: 'A. Quick recovery via a confirmed contact', content: [
            { kind: 'paragraph', text: 'If a mobile phone/contact for recovery has already been confirmed in Finanças, you can try “Esqueceu-se da sua palavra-chave?” → enter NIF → receive a confirmation code (usually SMS) → set a new password. If this option is not available — see option B.' }
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
        { kind: 'paragraph', text: 'CMD is the state electronic identification system. CMD can be activated online with Cartão de Cidadão; foreign nationals — through access to Portal das Finanças or in person at authorised locations (Loja de Cidadão/IRN), presenting an identification document and NIF. NIF + SMS alone is not enough. For foreign nationals without CC and without current access to Portal das Finanças, CMD often does not solve the problem instantly — in-person activation may be required.' },
        { kind: 'checklist', items: [
          '📱 CMD + PIN + one-time SMS code instead of the Finanças password',
          '✍️ Ability to sign documents',
          '🔐 Works on AIMA, SNS 24, Segurança Social, ePortugal',
          '🆓 Free of charge; validity is limited — check the validity on autenticacao.gov.pt and renew CMD before it expires'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Tips',
      content: [
        { kind: 'checklist', items: [
          '📧 Set up your email and mobile number in Finanças straight away — this is your safety net',
          '🔐 Password: follow the complexity requirements shown by the AT form; save the senha in a password manager',
          '📂 Save the password in a password manager — recovery by post takes a week',
          '🏠 Update your tax address when you move — otherwise the password will go to the old one',
          '👫 Family account: a spouse has a separate NIF and a separate password'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Portal das Finanças — Registration/Recover senha', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.html', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Autenticação.gov — Chave Móvel Digital', url: 'https://www.autenticacao.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'ePortugal — Request the access senha for Portal das Finanças', url: 'https://www.gov.pt/servicos/pedir-a-senha-de-acesso-ao-portal-das-financas', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
