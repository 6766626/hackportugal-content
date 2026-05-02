export default {
  editorialVoice: 'hackportugal',
  id: 'rf-remote-services',
  categoryId: 'country_specific',
  title: 'Remote Russian Federation services from Portugal — deregistration, individual entrepreneur, powers of attorney',
  tldr: 'From Portugal you can: obtain a certificate of no criminal record via Gosuslugi (with a qualified electronic signature); deregister from a flat remotely via Gosuslugi; close an individual entrepreneur (IP) via the Federal Tax Service + Gosuslugi without travelling; issue a power of attorney at the Russian consular section in Lisbon. Consular section: Rua Visconde de Santarém 57, Lisbon, +351 21 846 4417. For some services, you may need a non-sanctioned bank or cryptocurrency for payment due to banking restrictions.',
  audience: { countryCodes: ['RU'] },
  tags: ['russia', 'remote', 'gosuslugi', 'power of attorney'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'consulate',
      title: '🏛️ Consular Section of the Embassy of the Russian Federation in Lisbon',
      content: [
        { kind: 'checklist', items: [
          '📍 Address: Rua Visconde de Santarém, 57, 1000-286 Lisboa',
          '📞 Phone: +351 21 846 4417',
          '📧 Email: cons.lisbon@mid.ru',
          '🌐 Website: portugal.mid.ru',
          '🕐 Reception: by appointment on the website',
          '🚇 Metro: Avenida or Parque',
          '⏰ Appointment: electronic queue, usually a 2-6 week wait',
          '💰 Payment of consular fees: by card (any card, including Mir, worked in 2023-2024; check current availability) or in cash in euros'
        ]}
      ]
    },
    {
      id: 'certificates',
      title: '📋 Certificates',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Certificate of no criminal record (GUVM MVD)', content: [
            { kind: 'checklist', items: [
              'Via Gosuslugi (gosuslugi.ru) → Services → Certificates → Criminal record status',
              'Timeframe: 30 working days',
              'Delivery: as a PDF with electronic signature in your personal account',
              'Additionally — apostille: either via Gosuslugi (electronic apostille), or via an MFC / Ministry of Foreign Affairs',
              'For Portugal, a PDF with electronic signature + PDF with apostille + sworn translation into Portuguese is sufficient',
              'Alternative: request through the consulate in Lisbon (timeframe 45-60 days)'
            ]}
          ]},
          { id: 'c2', title: 'Civil registry certificates (duplicates)', content: [
            { kind: 'checklist', items: [
              'Birth, marriage, divorce certificate — via an MFC in the Russian Federation (by power of attorney) or Gosuslugi',
              'Online order: up to 30 working days, delivery to a relative’s address in the Russian Federation or to the consulate',
              'Apostille: placed separately on the duplicate certificate (Ministry of Justice or regional civil registry office)'
            ]}
          ]},
          { id: 'c3', title: 'Certificate of tax residence / income', content: [
            { kind: 'checklist', items: [
              '2-NDFL via the personal account at nalog.ru — instant',
              'Certificate of tax residence to avoid double taxation — via nalog.ru → My taxes → Certificates',
              'For Portugal: it is required with an apostille + sworn translation'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'powers-attorney',
      title: '📝 Powers of attorney',
      content: [
        { kind: 'paragraph', text: 'A Russian notarised power of attorney from Portugal is issued through the consular section in Lisbon. It works like an ordinary Russian Federation power of attorney.' },
        { kind: 'checklist', items: [
          '📍 Consular section, online appointment',
          '📋 Documents: Russian Federation passport, power of attorney text (prepare in advance), details of the attorney-in-fact (full name, passport details, address)',
          '💶 Fee: ~€30-60 depending on the type (general, one-off)',
          '📜 The consul-notary will certify it on the day of the visit',
          'The completed power of attorney is valid in the Russian Federation as a notarised one (Art. 38 of the Law on Consular Institutions)',
          'It can be used for: selling property, conducting court cases, tax operations, receiving a pension, closing an individual entrepreneur (IP)'
        ]},
        { kind: 'warning', text: 'Alternative — remote application to a notary in the Russian Federation via the “Notary Online” app + Gosuslugi. But the app requires ESIA and biometrics — it only works if the account is active and biometrics were previously completed in the Russian Federation.' }
      ]
    },
    {
      id: 'ip-closure',
      title: '💼 Closing an individual entrepreneur (IP) remotely',
      content: [
        { kind: 'substeps', items: [
          { id: 'i1', title: '1. Complete all obligations', content: [
            { kind: 'checklist', items: [
              'Notify clients of the closure',
              'Pay insurance contributions to the Pension Fund of Russia (proportionate to the time in the year)',
              'Submit final tax returns (simplified tax system / patent) — via the personal account at nalog.ru',
              'Pay remaining taxes',
              'Close the current account (or leave it open — not mandatory before closing the individual entrepreneur (IP))'
            ]}
          ]},
          { id: 'i2', title: '2. Submit application R26001', content: [
            { kind: 'checklist', items: [
              'Via Gosuslugi (gosuslugi.ru) with a qualified electronic signature',
              'Or via nalog.ru “Individual Entrepreneur Personal Account”',
              'State duty: €160 (via Gosuslugi — €112 with a 30% discount)',
              'Processing time: 5 working days',
              'Result: notice of termination in the personal account + EGRIP'
            ]}
          ]},
          { id: 'i3', title: '3. Final reports', content: [
            { kind: 'checklist', items: [
              'Within 15 days after closure — submit final tax returns',
              'Within 15 days — pay insurance contributions for the worked period',
              'Deregister OKVED with Rosstat (automatic upon closure)',
              'Keep documents for 4 years (tax audit period)'
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
          'Via Gosuslugi → Services → Registration → Removal from registration',
          'A QES is needed (qualified electronic signature) — available in Gosuslugi with a confirmed ESIA account',
          'Processing time: 3 working days',
          'Notification by email + in the personal account',
          'New address: you can state “departing abroad” or an address in Portugal (without Portuguese documents it will not be confirmed, but it is recorded on paper)',
          'Deregistration automatically removes you from the military register (if liable for military service — also confirm this at the military commissariat)'
        ]}
      ]
    },
    {
      id: 'banking',
      title: '🏦 Banks and payments',
      content: [
        { kind: 'checklist', items: [
          '💳 Mir in Portugal: does not work (not accepted by ATMs or payment terminals in the EU)',
          '💳 UnionPay (Gazprombank) — works partially at ATMs in Portugal',
          '💳 Visa/Mastercard from non-sanctioned banks: Raiffeisen (Raiffeisen Bank International — under pressure, status changes), Tinkoff Bank — partially',
          '💰 To pay in the Russian Federation (taxes, duties) from Portugal: use a relative’s account / cryptocurrency → roubles via Binance P2P / BestChange',
          '💼 12th sanctions package: transfers to the Russian Federation via SWIFT from EU banks are heavily restricted. Use Wise / Revolut to transfer to a Russian recipient who has a non-sanctioned bank',
          '⚠️ Large providers refuse to accept SWIFT from the Russian Federation — take this into account when planning'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Practical tips',
      content: [
        { kind: 'checklist', items: [
          '📅 Consulate appointment — book 2-3 months in advance for planned services',
          '🔐 ESIA / Gosuslugi: keep a working login before moving; do not change the password without access to a Russian phone',
          '📱 Russian phone: keep the number active (Tinkoff Mobile, MTS eSIM) — needed for Gosuslugi SMS codes',
          '📧 Federal Tax Service notifications: link an email address to your personal account — otherwise you may miss tax demands',
          '⚖️ Complex situations (division of property, claims, inheritance): hire a lawyer in the Russian Federation + issue them a power of attorney through the Russian Federation consulate in Portugal',
          '🔑 Electronic signature: if notarial actions are needed without it — only through the consulate'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'GUVM certificate of no criminal record', amountEUR: 0 },
    { label: 'Apostille (Ministry of Justice of the Russian Federation)', amountEURMin: 30, amountEURMax: 50, note: '2500 BYN' },
    { label: 'Consular power of attorney', amountEURMin: 30, amountEURMax: 60 },
    { label: 'Closing an individual entrepreneur (IP) (Gosuslugi)', amountEURMin: 1, amountEURMax: 3, note: 'RUB 112-160' },
    { label: 'Sworn translation in Portugal', amountEURMin: 25, amountEURMax: 50, note: '€/page' }
  ],
  sources: [
    { title: 'Embassy of the Russian Federation in Portugal', url: 'https://portugal.mid.ru/', kind: 'official', language: 'ru', lastRetrieved: '2026-04-22' },
    { title: 'Gosuslugi', url: 'https://gosuslugi.ru/', kind: 'official', language: 'ru', lastRetrieved: '2026-04-22' },
    { title: 'Federal Tax Service — Individual Entrepreneur Personal Account', url: 'https://lkip.nalog.ru/', kind: 'official', language: 'ru', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 90
}
