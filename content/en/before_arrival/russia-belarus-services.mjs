export default {
  editorialVoice: 'hackportugal',
  id: 'russia-belarus-services',
  categoryId: 'before_arrival',
  title: 'Consular services for the Russian Federation/Belarus — apostilles, powers of attorney, certificates',
  tldr: 'After February 2022, direct links with the Russian Federation/Belarus became complicated: there are no direct flights, and SWIFT is restricted. Consulates are operating: apostille for a criminal record certificate via Gosuslugi + courier delivery, powers of attorney — via the consulate in Lisbon for citizens in Portugal, remote deregistration — via MFC + notary with an eIDAS signature. Most procedures take 2–6 weeks versus 3–5 days before 2022.',
  audience: { countryCodes: ['RU', 'BY'] },
  tags: ['apostille', 'power of attorney', 'russian federation', 'belarus', 'consulate'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'consular-info',
      title: 'Consulates in Portugal',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Consulate of the Russian Federation in Lisbon', content: [
            { kind: 'checklist', items: [
              'Address: Rua Visconde de Santarém, 57, 1000-286 Lisboa',
              'Booking: lisbon.mid.ru (online)',
              'Hours: Mon–Fri 09:00–13:00 (by appointment only)',
              'Tel: +351 21 846 2424',
              'Services: internal passport (renewal), international passport, notarial acts, certificates'
            ]}
          ]},
          { id: 'c2', title: 'Consulate of Belarus in Lisbon', content: [
            { kind: 'paragraph', text: 'None. The nearest one is in Madrid (Spain). Services: by post or a trip to Madrid.' }
          ]},
          { id: 'c3', title: 'Embassy of the Russian Federation in Lisbon', content: [
            { kind: 'paragraph', text: 'It is often closed. Check the status before visiting. Work with citizens is handled through the consular section.' }
          ]}
        ]}
      ]
    },
    {
      id: 'apostille',
      title: 'Apostilling a criminal record certificate',
      content: [
        { kind: 'substeps', items: [
          { id: 'a1', title: 'Russian Federation: via Gosuslugi + embassy in Portugal', content: [
            { kind: 'checklist', items: [
              '🇷🇺 “Gosuslugi.ru” → “Criminal record certificate” — order online free of charge',
              '📅 Prepared in 10 working days',
              '🖨️ Print at the nearest MFC or send it to a relative in the Russian Federation',
              '🏛️ Apostille — Ministry of Internal Affairs of the Russian Federation, via MFC 5 working days, RUB 2,500',
              '📦 By courier (EMS or DHL) to Lisbon: 2–3 weeks',
              '💶 Total €30–80 + time'
            ]},
            { kind: 'paragraph', text: 'Alternative: through the Portuguese embassy in Moscow. They issue a criminal record certificate from Portugal’s central databases, but a Russian Federation citizen also needs the Russian certificate.' }
          ]},
          { id: 'a2', title: 'Russian Federation: via the consulate in Lisbon', content: [
            { kind: 'paragraph', text: 'The Consulate of the Russian Federation in Lisbon can REQUEST a certificate from the Ministry of Internal Affairs of the Russian Federation on behalf of a citizen living in Portugal. Timeframe 60–120 days. Paid — ~€80. It does not always work; check by phone.' }
          ]},
          { id: 'a3', title: 'Belarus: via the embassy in Madrid', content: [
            { kind: 'paragraph', text: 'Order online via posolbel.es or visit in person. Apostille at the Ministry of Foreign Affairs of Belarus (through an authorised representative). Minimum 1 month.' }
          ]}
        ]}
      ]
    },
    {
      id: 'diploma-apostille',
      title: 'Apostilling a diploma / education documents',
      content: [
        { kind: 'checklist', items: [
          '🎓 Russian Federation: diploma → Rosobrnadzor → apostille → MFC in Moscow',
          '🎓 Requires the original diploma or a notarised duplicate',
          '🎓 Via power of attorney — a relative in the Russian Federation can do it for you',
          '⏰ Timeframe 10–30 days',
          '💶 State duty RUB 2,500 (~€25) + services ~€50–100',
          '🔄 Afterwards — recognition in Portugal (DGES), see the guide on recognition'
        ]},
        { kind: 'warning', text: 'Belarus: an apostille from the Ministry of Education requires physical presence or a general power of attorney. Without this, it is impossible.' }
      ]
    },
    {
      id: 'power-of-attorney',
      title: 'Power of attorney for actions in the Russian Federation/Belarus from Portugal',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: 'Option A. Consulate of the Russian Federation in Lisbon', content: [
            { kind: 'checklist', items: [
              'Classic notarised power of attorney on Portuguese territory',
              'Online booking: lisbon.mid.ru',
              'Documents: international passport, draft power of attorney in Russian',
              'Cost: €40–80',
              'Accepted in the Russian Federation without additional legalisation'
            ]}
          ]},
          { id: 'p2', title: 'Option B. Portuguese notary + apostille + translation', content: [
            { kind: 'checklist', items: [
              'A Portuguese notary prepares the power of attorney',
              'Apostille under the Hague Convention at the Portuguese Ministry of Justice',
              'Sworn translation into Russian',
              'Courier delivery to the Russian Federation',
              'Cost: €100–200',
              'Timeframe: 2–4 weeks',
              'Suitable if you are NOT a citizen of the Russian Federation'
            ]}
          ]},
          { id: 'p3', title: 'Option C. Digital power of attorney via Gosuslugi', content: [
            { kind: 'paragraph', text: 'Since 2023, a remote notary service has appeared — a video call with ESIA. Only for citizens of the Russian Federation with an active account. Cost RUB 2,000–5,000. Accepted for most actions.' }
          ]}
        ]}
      ]
    },
    {
      id: 'tax-residence-cert',
      title: 'Tax residence certificate from the Russian Federation',
      content: [
        { kind: 'paragraph', text: 'Needed for IRS in Portugal if there is income from the Russian Federation. Request via the “Taxpayer Account” on nalog.ru → “Certificate of Russian Federation resident status”.' },
        { kind: 'checklist', items: [
          'Online via the Federal Tax Service',
          'Up to 40 calendar days',
          'Free of charge',
          'Issued in English',
          'For Portugal, an apostille and translation are usually not required'
        ]},
        { kind: 'warning', text: 'Since August 2023, Russia has suspended key articles of its double-taxation treaty with Portugal (Decree No. 585). Crediting or refunding withheld tax is no longer guaranteed — check the procedure with a tax adviser.' }
      ]
    },
    {
      id: 'remote-deregistration',
      title: 'Remote deregistration / closing an individual entrepreneur in the Russian Federation',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: 'Deregistration from place of residence (removal from the residence register)', content: [
            { kind: 'checklist', items: [
              'Option 1: Gosuslugi → “Removal from residence registration” → via the personal account',
              'Option 2: power of attorney for a relative via the consulate or eIDAS → MFC',
              '10 working days',
              'Important: the international passport remains fully valid; however, you lose your propiska'
            ]}
          ]},
          { id: 'r2', title: 'Closing an individual entrepreneur', content: [
            { kind: 'checklist', items: [
              'Gosuslugi → “Federal Tax Service: closing an individual entrepreneur” → online',
              'Cost RUB 160',
              '5 working days',
              'Pay debts for contributions + taxes before closure',
              'Close the cash register (if there was one) + accounts',
              'Federal Tax Service report by the 15th of the following month'
            ]}
          ]}
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Apostille for Russian Federation certificate + courier', amountEURMin: 30, amountEURMax: 80 },
    { label: 'Power of attorney via the Consulate of the Russian Federation', amountEURMin: 40, amountEURMax: 80 },
    { label: 'Power of attorney via a Portuguese notary + apostille + translation', amountEURMin: 100, amountEURMax: 200 },
    { label: 'Apostille for Russian Federation diploma + services', amountEURMin: 75, amountEURMax: 125 }
  ],
  sources: [
    { title: 'Consulate of the Russian Federation in Lisbon', url: 'https://lisbon.mid.ru/', kind: 'official', language: 'ru', lastRetrieved: '2026-04-22' },
    { title: 'Hague Convention — Apostille', url: 'https://www.hcch.net/', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'PT Ministry of Justice — Apostille', url: 'https://justica.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DGES — Recognition of foreign qualifications', url: 'https://www.dges.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
