export default {
  editorialVoice: 'hackportugal',
  id: 'rf-remote-services',
  categoryId: 'country_specific',
  title: 'Remote Russian Federation services from Portugal — deregistration, sole trader, powers of attorney',
  tldr: 'From Portugal you can: obtain a criminal record certificate via Gosuslugi (with a qualified electronic signature); deregister from a flat remotely via Gosuslugi; close a sole trader registration via the FTS + Gosuslugi without travelling; issue a power of attorney at the Russian consular section in Lisbon. Consular section: Rua Visconde de Santarém 57, Lisbon, +351 21 846 4417. For some services, you need a non-sanctioned bank or cryptocurrency for payment due to banking restrictions.',
  audience: { countryCodes: ['RU'] },
  tags: ['russia', 'remote', 'gosuslugi', 'power-of-attorney'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'consulate',
      title: '🏛️ Consular Section of the Embassy of the Russian Federation in Lisbon',
      content: [
        { kind: 'checklist', items: [
          '📍 Address: Rua Visconde de Santarém, 57, 1000-286 Lisboa',
          '📞 Telephone: +351 21 846 4417',
          '📧 Email: cons.lisbon@mid.ru',
          '🌐 Website: portugal.mid.ru',
          '🕐 Appointments: by booking on the website',
          '🚇 Metro: Avenida or Parque',
          '⏰ Booking: electronic queue, usually 2-6 weeks of waiting',
          '💰 Payment of consular fees: by card (any card, including Mir, worked in 2023-2024; check current status) or in cash in euros'
        ]}
      ]
    },
    {
      id: 'certificates',
      title: '📋 Certificates',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Criminal record certificate (GUVM MVD)', content: [
            { kind: 'checklist', items: [
              'Via Gosuslugi (gosuslugi.ru) → Services → Certificates → Criminal record status',
              'Timeframe: 30 working days',
              'Delivery: PDF with electronic signature in your personal account',
              'Additionally — apostille: either via Gosuslugi (electronic apostille), or via MFC / MFA',
              'For Portugal, a PDF with electronic signature + PDF with apostille + sworn translation into Portuguese is sufficient',
              'Alternative: request via the consulate in Lisbon (timeframe 45-60 days)'
            ]}
          ]},
          { id: 'c2', title: 'Civil registry certificates (duplicates)', content: [
            { kind: 'checklist', items: [
              'Birth, marriage, divorce certificate — via an MFC in the Russian Federation (by power of attorney) or Gosuslugi',
              'Online order: up to 30 working days, delivery to a relative’s address in the Russian Federation or to the consulate',
              'Apostille: issued separately on the duplicate certificate (Ministry of Justice or regional civil registry office)'
            ]}
          ]},
          { id: 'c3', title: 'Tax residency / income certificate', content: [
            { kind: 'checklist', items: [
              '2-NDFL via the nalog.ru personal account — instantly',
              'Tax residency certificate to avoid double taxation — via nalog.ru → My Taxes → Certificates',
              'For Portugal: required with an apostille + sworn translation'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'powers-attorney',
      title: '📝 Powers of attorney',
      content: [
        { kind: 'paragraph', text: 'A Russian notarised power of attorney from Portugal is issued through the consular section in Lisbon. It works like a standard power of attorney from the Russian Federation.' },
        { kind: 'checklist', items: [
          '📍 Consular section, online booking',
          '📋 Documents: Russian Federation passport, text of the power of attorney (prepare in advance), attorney-in-fact details (full name, passport details, address)',
          '💶 Fee: ~€30-60 depending on the type (general, one-off)',
          '📜 The consul-notary will certify it on the day of the visit',
          'The completed power of attorney is valid in the Russian Federation as a notarised one (Article 38 of the Law on Consular Institutions)',
          'Can be used for: sale of real estate, handling court cases, tax transactions, receiving a pension, closing a sole trader registration'
        ]},
        { kind: 'warning', text: 'Alternative — remote contact with a notary in the Russian Federation via the Notary Online app + Gosuslugi. However, the app requires ESIA and biometrics — it only works if the account is active and biometrics were previously completed in the Russian Federation.' }
      ]
    },
    {
      id: 'ip-closure',
      title: '💼 Closing a sole trader registration remotely',
      content: [
        { kind: 'substeps', items: [
          { id: 'i1', title: '1. Complete all obligations', content: [
            { kind: 'checklist', items: [
              'Notify clients about the closure',
              'Pay insurance contributions to the Pension Fund (proportionally to the time in the year)',
              'Submit final tax returns (simplified tax system / patent) — via the nalog.ru personal account',
              'Pay any remaining taxes',
              'Close the current account (or leave it — not mandatory before closing the sole trader registration)'
            ]}
          ]},
          { id: 'i2', title: '2. Submit application R26001', content: [
            { kind: 'checklist', items: [
              'Via Gosuslugi (gosuslugi.ru) with a qualified electronic signature',
              'Or via the nalog.ru “Individual Entrepreneur Account”',
              'State fee: €160 (via Gosuslugi — €112 with a 30% discount)',
              'Processing time: 5 working days',
              'Result: termination notice in the personal account + EGRIP extract'
            ]}
          ]},
          { id: 'i3', title: '3. Final reports', content: [
            { kind: 'checklist', items: [
              'Within 15 days after closure — submit final tax returns',
              'Within 15 days — pay insurance contributions for the period worked',
              'Deregister OKVED codes with Rosstat (automatic on closure)',
              'Keep documents for 4 years (tax audit limitation period)'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'registration',
      title: '🏠 Deregistration from a flat / removal from registration',
      content: [
        { kind: 'checklist', items: [
          'Via Gosuslugi → Services → Registration → Removal from registration records',
          'A QES (qualified electronic signature) is required — available in Gosuslugi with a verified ESIA account',
          'Processing time: 3 working days',
          'Notification by email + in the personal account',
          'New address: you can specify “leaving abroad” or an address in Portugal (without Portuguese documents it will not be confirmed, but it is recorded on paper)',
          'Deregistration automatically removes you from military registration (if liable for military service — confirm this with the military enlistment office as well)'
        ]}
      ]
    },
    {
      id: 'banking',
      title: '🏦 Banks and payments',
      content: [
        { kind: 'checklist', items: [
          '💳 Mir in Portugal: does not work (not accepted by ATMs or payment terminals in the EU)',
          '💳 UnionPay (Gazprombank) — works partially in ATMs in Portugal',
          '💳 Visa/Mastercard from non-sanctioned banks: Raiffeisen (Raiffeisen Bank International — under pressure, status changes), Tinkoff Bank — partially',
          '💰 To pay in the Russian Federation (taxes, duties) from Portugal: use a relative’s account / cryptocurrency → roubles via P2P Binance / BestChange',
          '💼 12th sanctions package: transfers to the Russian Federation via SWIFT from EU banks are heavily restricted. Use Wise / Revolut to transfer to a Russian recipient who has a non-sanctioned bank',
          '⚠️ Major providers refuse to accept SWIFT from the Russian Federation — take this into account when planning'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Practical tips',
      content: [
        { kind: 'checklist', items: [
          '📅 Consulate appointments — book 2-3 months in advance for planned services',
          '🔐 ESIA / Gosuslugi: keep a working login before moving; do not change the password without access to a Russian phone',
          '📱 Russian phone: keep the number active (Tinkoff Mobile, MTS eSIM) — needed for Gosuslugi SMS codes',
          '📧 FTS notifications: link an email address to the personal account — otherwise you may miss tax demands',
          '⚖️ Complex situations (division of property, claims, inheritance): hire a lawyer in the Russian Federation + issue them a power of attorney through the Russian consulate in Portugal',
          '🔑 Electronic signature: if you need notarial acts without it — only through the consulate'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'GUVM criminal record certificate', amountEUR: 0 },
    { label: 'Apostille (Ministry of Justice of the Russian Federation)', amountEURMin: 30, amountEURMax: 50, note: 'BYN 2500' },
    { label: 'Consular power of attorney', amountEURMin: 30, amountEURMax: 60 },
    { label: 'Closing a sole trader registration (Gosuslugi)', amountEURMin: 1, amountEURMax: 3, note: 'RUB 112-160' },
    { label: 'Sworn translation in Portugal', amountEURMin: 25, amountEURMax: 50, note: '€/page' }
  ],
  sources: [
    { title: 'Embassy of the Russian Federation in Portugal', url: 'https://portugal.mid.ru/', kind: 'official', language: 'ru', lastRetrieved: '2026-04-22' },
    { title: 'Gosuslugi', url: 'https://gosuslugi.ru/', kind: 'official', language: 'ru', lastRetrieved: '2026-04-22' },
    { title: 'FTS — Individual Entrepreneur Account', url: 'https://lkip.nalog.ru/', kind: 'official', language: 'ru', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
