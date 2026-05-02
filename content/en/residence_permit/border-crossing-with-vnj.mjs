export default {
  editorialVoice: 'hackportugal',
  id: 'border-crossing-with-vnj',
  categoryId: 'residence_permit',
  title: 'Crossing borders with a Portuguese residence permit — Schengen and third countries',
  tldr: 'With a Portuguese residence permit (cartão de residência), you can move freely throughout the Schengen Area for up to 90 days in any 180-day period without a separate visa. For entry: passport + valid residence permit card (and, if the residence permit has expired while renewal is in progress, confirmation from AIMA of renewal/status preservation). When entering Portugal from non-EU countries, take your boarding pass and residence permit; you may not receive a stamp. When returning from Schengen, the officer usually has no questions.',
  tags: ['border', 'schengen', 'residence permit', 'trips', 'travel'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'schengen',
      title: 'Schengen: 90/180 without a visa',
      content: [
        { kind: 'paragraph', text: 'Under Regulation (EU) 2016/399 (Schengen Borders Code), the holder of a valid residence permit from a Schengen member state may move freely to other Schengen countries for up to 90 days in any 180-day period. This rule applies to short trips: tourism, family, business travel.' },
        { kind: 'checklist', items: [
          'Documents: passport + cartão de residência (physical card)',
          'Passport validity — at least 3 months after return',
          'Insurance — mandatory for some countries (Italy, Switzerland)',
          'If the residence permit has expired but you have confirmation of renewal — take the confirmation from AIMA with you',
          'No more than 90 days in total in other Schengen countries within 180 days'
        ]},
        { kind: 'warning', text: 'A residence permit does NOT give the right to work in other Schengen countries. Only in Portugal (or in exceptions — ICT card, EU Blue Card with rights to move between countries).' }
      ]
    },
    {
      id: 'non-eu',
      title: 'Entering Portugal and leaving it from/to third countries',
      content: [
        { kind: 'substeps', items: [
          { id: 'n1', title: 'Departure from Portugal to a non-EU country (Russian Federation, Turkey, USA, etc.)', content: [
            { kind: 'checklist', items: [
              'Passport + residence permit (an exit stamp is placed)',
              'GNR / PSP / ABCP border control',
              'Without a residence permit — as a tourist under 90/180; you need a visa to return if you do not have visa-free entry',
              'The airline checks the validity of the residence permit at check-in'
            ]}
          ]},
          { id: 'n2', title: 'Return to Portugal from a non-EU country', content: [
            { kind: 'checklist', items: [
              'Passport + residence permit',
              'The officer checks: card integrity, name match with passport, validity period',
              'An entry stamp may or may not be placed (at discretion)',
              'If the residence permit is being renewed — confirmation + old card',
              'EES (Entry-Exit System) — phased launch from 12.10.2025. IMPORTANT: EES applies to third-country nationals on ENTRY for short stays (visa/visa-free). **Holders of a valid residence permit from a Schengen country are usually NOT registered in EES** — their residence permit holder status applies. Show the residence permit + passport; the border guard will determine the correct procedure'
            ]}
          ]},
          { id: 'n3', title: 'Transit through Schengen', content: [
            { kind: 'paragraph', text: 'Transit through another Schengen airport counts as crossing the Schengen border. For travel to a non-EU country with a connection in Frankfurt/Madrid, a residence permit is sufficient.' }
          ]}
        ]}
      ]
    },
    {
      id: 'expired',
      title: 'Residence permit expired / expiring soon',
      content: [
        { kind: 'checklist', items: [
          '⏰ Residence permit is valid — no problems',
          '🔄 In the renewal process, before the card expires — travel is possible with the old card + comprovativo de submissão',
          '🟠 Card has expired, new one has not arrived yet — travel is risky: comprovativo de submissão / deferimento are documents for matters in Portugal, and the airline and a border guard of another Schengen country are not obliged to accept them instead of a valid residence permit card. If possible, wait for the new card; before travelling, consult the Portuguese consulate in the transit country and/or the airline',
          '🔒 Expired with no renewal procedure — the border may not allow you back in without a visa. Do not leave until your status is formalised',
          '⚠️ Loss/theft in Portugal — report to the police (PSP/GNR), keep the auto de denúncia, then request a duplicata through AIMA. Issuing times depend on AIMA — do not plan departure until you receive the new card',
          '❓ Loss abroad — report it to the local police, contact the airline and the Portuguese consulate. If your passport has also been lost — an emergency passport is issued by the consulate of YOUR country of citizenship, not Portugal. The Portuguese consulate may help with returning to Portugal by alternative means (for example, by helping to verify your status)'
        ]},
        { kind: 'warning', text: 'Airlines have the right to refuse boarding without a valid residence permit card — they check automatically by passport. A PDF confirmation is not a travel document.' }
      ]
    },
    {
      id: 'countries-notes',
      title: 'Country-specific notes',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: 'United Kingdom', content: [
            { kind: 'paragraph', text: 'NOT Schengen. A British visa or ETA is required. UK ETA for EU citizens (including holders of a Portuguese residence permit travelling on the passport of their own country) is required **from 2 April 2025** (for visa-free Gulf country nationals — from November 2024). ETA cost is £10, valid for 2 years / for visits up to 2 months. A Portuguese residence permit does not give the right to enter the United Kingdom.' }
          ]},
          { id: 's2', title: 'Ireland', content: [
            { kind: 'paragraph', text: 'Not Schengen. An Irish visa is required. Separate website — irishimmigration.ie.' }
          ]},
          { id: 's3', title: 'Bulgaria, Romania, Cyprus', content: [
            { kind: 'paragraph', text: 'From 2025 Bulgaria and Romania are in Schengen — a Portuguese residence permit works. Cyprus is still NOT Schengen — a visa is required.' }
          ]},
          { id: 's4', title: 'Croatia', content: [
            { kind: 'paragraph', text: 'In Schengen since 2023 — the residence permit works.' }
          ]},
          { id: 's5', title: 'USA, Canada, Australia', content: [
            { kind: 'paragraph', text: 'Separate visas or authorisations are required (ESTA/eTA or a full visa). A Portuguese residence permit does not give the right to enter, but third-country nationals with a long-term EU residence permit have priority when applying.' }
          ]},
          { id: 's6', title: 'Russia, Belarus', content: [
            { kind: 'paragraph', text: 'There are no direct flights; the route is usually via Serbia / Turkey / UAE. Russian Federation visas for third-country nationals follow the general rules.' }
          ]}
        ]}
      ]
    },
    {
      id: 'documents-checklist',
      title: 'Checklist: what to take when travelling',
      content: [
        { kind: 'checklist', items: [
          '🛂 Passport (validity 3+ months)',
          '🪪 Physical cartão de residência card (not a scan!)',
          '📄 Digital copy — photo / PDF on your phone',
          '💼 Insurance (for Schengen — optional, except countries with a mandatory requirement; for non-EU countries — recommended)',
          '💶 Proof of funds (for longer stays)',
          '🏨 Hotel booking / invitation — for non-Schengen countries',
          '🧾 Return ticket (sometimes required at the border of the destination country)'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Regulation (EU) 2016/399 — Schengen Borders Code', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0399', kind: 'law', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — Cartão de Residência (residence permit card)', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'EU Entry/Exit System (EES) — ec.europa.eu', url: 'https://home-affairs.ec.europa.eu/policies/schengen-borders-and-visa/smart-borders_en', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Vistos MNE — rules for third-country nationals', url: 'https://vistos.mne.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
