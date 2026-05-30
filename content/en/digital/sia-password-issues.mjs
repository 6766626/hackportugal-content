export default {
  editorialVoice: 'hackportugal',
  id: 'sia-password-issues',
  categoryId: 'digital_gov',
  title: 'Resetting your Portal das Finanças and SIA password — what to do',
  tldr: 'If you have forgotten your AT password (Portal das Finanças / SIA): go to portaldasfinancas.gov.pt → “Recuperar Senha” → SMS or letter by post (5-7 days).\n\nAlternative: in person at an Espaço Cidadão or Finanças office. With CMD (Chave Móvel Digital), you can log in WITHOUT a password. To reset CMD — ePortugal.gov.pt → reissue ONE-TIME codes. If you have lost everything — Conservatória/Espaço Cidadão with CC.',
  tags: ['password', 'finanças', 'sia', 'cmd', 'portal', 'forgotten password'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'pf-password',
      title: '🔐 Recover your Portal das Finanças password',
      content: [
        { kind: 'paragraph', text: 'The most common scenario. AT (the tax authority) uses “Senha de Acesso” — an 8-digit password for logging into Portal das Finanças.' },
        { kind: 'substeps', items: [
          { id: 'p1', title: 'Method 1 — SMS (quick, if you have the number)', content: [
            { kind: 'checklist', items: [
              '🌐 portaldasfinancas.gov.pt → “Iniciar Sessão” → “Recuperar Senha”',
              '🔢 Enter your NIF',
              '📱 If AT has your mobile number — an SMS code will arrive',
              '🔐 Using the code, you create a new password',
              '⏱️ 5-10 minutes for the whole process',
              '⚠️ If the SMS did not arrive — the mobile number is not registered with AT'
            ]}
          ]},
          { id: 'p2', title: 'Method 2 — by post (if there is no mobile number with AT)', content: [
            { kind: 'checklist', items: [
              '🌐 Same place → select the “Por carta” option',
              '📮 The letter will arrive at the official AT address (the one shown in Portal das Finanças)',
              '⏱️ 5-7 working days',
              '⚠️ If the address is out of date — the letter will not arrive. First update the address in person at a Finanças office'
            ]}
          ]},
          { id: 'p3', title: 'Method 3 — in person at a Finanças office', content: [
            { kind: 'checklist', items: [
              '🏛️ Book an appointment at a Finanças office or Espaço Cidadão',
              '🆔 CC + NIF',
              '📋 Request “Recuperação de senha presencial”',
              '🔐 Receive a temporary password on paper, change it after the first login',
              '✅ Immediately, without waiting for post'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'cmd-issues',
      title: '🔑 Problems with Chave Móvel Digital (CMD)',
      content: [
        { kind: 'paragraph', text: 'CMD is the government “single key” for logging into all public services. Forgetting the code = waiting for recovery.' },
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Ways to log in via CMD', content: [
            { kind: 'checklist', items: [
              '🔢 PIN code + one-time SMS code',
              '👁️ Biometrics: Apple Touch ID / Face ID, Android fingerprint',
              '📱 Mobile app autenticacao.gov.pt',
              '⚠️ If SMS messages do not arrive — the phone is not linked or does not work in roaming'
            ]}
          ]},
          { id: 'c2', title: 'Resetting the PIN or changing phone', content: [
            { kind: 'checklist', items: [
              '🌐 ePortugal.gov.pt → “Chave Móvel Digital” → “Recuperar PIN”',
              '🆔 Authentication via CC + CC PIN code (not CMD!)',
              '🔢 Create a new PIN',
              '📱 If you have lost your phone: in person at Espaço Cidadão / Loja CTT — replace the linked number'
            ]}
          ]},
          { id: 'c3', title: 'Full CMD recovery (if you have lost everything)', content: [
            { kind: 'checklist', items: [
              '🏛️ Espaço Cidadão / Loja CTT / Loja de Cidadão',
              '🆔 CC + new mobile phone (for linking)',
              '⏱️ On the spot, 15-20 min',
              '🔄 The old CMD is deactivated, a new one is issued'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'cc-pin',
      title: '🪪 Cartão de Cidadão PIN',
      content: [
        { kind: 'paragraph', text: 'CC has 3 PIN codes: authentication PIN (4 digits), signature PIN (4 digits), address change PIN (4 digits). After 3 incorrect entries, the PIN is blocked.' },
        { kind: 'checklist', items: [
          '🔓 Unblock: Espaço Cidadão / Loja CC, in person, free of charge',
          '🆕 Change PIN yourself: on the autenticacao.gov.pt website (old PIN required)',
          '📤 Fully reset (if the PIN is forgotten and blocked): Loja CC, around €10, on the day of the visit',
          '⚠️ Code letter (“carta de PINs”) — arrives when the CC is issued. Keep it!',
          '💡 If you have lost the card: block it via 808 12 12 30 or ePortugal — immediately'
        ]}
      ]
    },
    {
      id: 'common-errors',
      title: '⚠️ Common errors',
      content: [
        { kind: 'checklist', items: [
          '🔴 “No mobile number is linked to the NIF” — the mobile number is not linked. Go in person to a Finanças office',
          '🔴 “Invalid address” — the address is out of date. First update the address with AT/IRN',
          '🔴 “Password blocked after 3 attempts” — blocked for 24 hours, then another 3 attempts',
          '🔴 “The letter did not arrive” — contact the local Finanças office, they will reissue it',
          '🔴 “The CMD app does not work in roaming” — the phone must be in PT for SMS',
          '🔴 “iPhone Face ID does not recognise CMD” — update the autenticacao.gov.pt app',
          '🔴 “Old browsers do not work with CMD” — use an up-to-date version of Chrome/Safari'
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Tips',
      content: [
        { kind: 'checklist', items: [
          '🔐 Use a password manager (1Password, Bitwarden) — you will not forget',
          '📱 Set up CMD biometrics — you will not have to enter the PIN every time',
          '📩 ALWAYS update your mobile number in Portal das Finanças — for all recoveries',
          '🏛️ In Lisboa, the fastest Espaço Cidadão locations: Saldanha (Loja de Cidadão Saldanha) and Marvila (Loja de Cidadão das Laranjeiras)',
          '⏰ Booking on agendamentos.gov.pt — usually 1-2 weeks ahead',
          '💼 If business/Lda: a representative (lawyer) can act on your behalf by power of attorney',
          '⏰ Prevention: every 6 months, check the address and mobile number in Portal das Finanças',
          '🌐 Multi-factor protection: always enable 2FA in bank and government accounts'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Portal das Finanças password recovery', amountEUR: 0 },
    { label: 'CMD recovery', amountEUR: 0 },
    { label: 'CC PIN unblocking', amountEUR: 0 },
    { label: 'Full CC PIN reset', amountEURMin: 10, amountEURMax: 15 }
  ],
  sources: [
    { title: 'Portal das Finanças', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.html', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Autenticação.gov.pt — Chave Móvel Digital', url: 'https://www.autenticacao.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Cartão de Cidadão', url: 'https://www.gov.pt/cidadaos/-/informacoes/o-que-e-o-cartao-de-cidadao-', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 365
}
