export default {
  editorialVoice: 'hackportugal',
  id: 'border-crossing-with-vnj',
  categoryId: 'residence_permit',
  title: 'Crossing borders with a Portuguese residence permit — Schengen and third countries',
  tldr: 'With a Portuguese residence permit (cartão de residência), you can travel freely throughout Schengen for up to 90 days in any 180-day period without a separate visa. For entry: passport + valid residence permit card (and if the residence permit has expired while renewal is in progress — confirmation from AIMA of renewal/maintenance of status). To enter Portugal from non-EU countries, take your boarding pass and residence permit; you may not receive a stamp. When returning from Schengen, officers usually have no questions.',
  tags: ['border', 'schengen', 'residence permit', 'trips', 'travel'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'schengen',
      title: 'Schengen: 90/180 without a visa',
      content: [
        { kind: 'paragraph', text: 'Under Regulation (EU) 2016/399 (Schengen Borders Code), the holder of a valid residence permit from a Schengen member state may move freely within other Schengen countries for up to 90 days in any 180-day period. This rule applies to short trips: tourism, family, business travel.' },
        { kind: 'checklist', items: [
          'Documents: passport + cartão de residência (physical card)',
          'Passport: check the requirements of the destination/transit country; for short-term entry into Schengen, the standard requirement is that it is valid for at least 3 months after the intended departure from Schengen and was issued no more than 10 years ago (SBC art. 6)',
          'Insurance for travel within Schengen is usually NOT checked as a visa condition for residence permit holders, but it is strongly recommended; for non-Schengen, check the rules of the destination country',
          'If the residence permit has expired but you have confirmation of renewal, this is risky and is NOT the same as a valid card for other Schengen countries. Portugal’s internal extension of document validity is not always recognised outside Portugal. If possible, wait for the new card',
          'No more than 90 days in total in other Schengen countries within 180 days'
        ]},
        { kind: 'warning', text: 'A residence permit does NOT give the right to work in other Schengen countries. Only in Portugal (or in exceptions — ICT card, EU Blue Card with rights to move between countries).' }
      ]
    },
    {
      id: 'non-eu',
      title: 'Entering and leaving Portugal from/to third countries',
      content: [
        { kind: 'substeps', items: [
          { id: 'n1', title: 'Flying from Portugal to a non-EU country (Russian Federation, Turkey, USA, etc.)', content: [
            { kind: 'checklist', items: [
              'Passport + valid residence permit; residence permit holders usually do NOT have their passport stamped on either entry or exit (Schengen Borders Code art. 11)',
              'Border control at the airport is usually carried out by PSP; automatic e-gates/ABC may be used where available',
              'Without a residence permit — as a tourist under 90/180; you need a visa to return if you do not have visa-free entry',
              'The airline checks the validity of the residence permit at check-in'
            ]}
          ]},
          { id: 'n2', title: 'Returning to Portugal from a non-EU country', content: [
            { kind: 'checklist', items: [
              'Passport + residence permit',
              'The officer checks: integrity of the card, name matching the passport, expiry date',
              'Entry stamps are usually NOT placed for residence permit holders; if a stamp was placed by mistake, keep your boarding pass/tickets and, if necessary, clarify with the border service',
              'If the residence permit is being renewed — confirmation + old card',
              'EES (Entry-Exit System) — phased launch from 12.10.2025. EES applies to third-country nationals upon ENTRY for short stays. **Holders of a valid residence permit/long-stay visa from a Schengen country entering as residents are usually NOT registered in EES** — show the residence permit + passport; the border guard will determine the correct procedure'
            ]}
          ]},
          { id: 'n3', title: 'Transit through Schengen', content: [
            { kind: 'paragraph', text: 'Transit through another Schengen airport counts as crossing the Schengen border. To travel to a non-EU country with a connection in Frankfurt/Madrid, a residence permit is sufficient.' }
          ]}
        ]}
      ]
    },
    {
      id: 'expired',
      title: 'Residence permit expired / expiring soon',
      content: [
        { kind: 'checklist', items: [
          '⏰ Residence permit valid — no problems',
          '🔄 Renewal in progress, before the card expires — travel is possible with the old card + comprovativo de submissão',
          '🟠 Card expired, new one has not arrived yet — travel is risky: comprovativo de submissão / deferimento are documents for matters in Portugal; the airline and the border guard of another Schengen country are not obliged to accept them instead of a valid residence permit card. If possible, wait for the new card; before travelling, consult the Portuguese consulate in the transit country and/or the airline',
          '🔒 Expired without a renewal procedure — the border may not let you back in without a visa. Do not leave until your status is regularised',
          '⚠️ Loss/theft in Portugal — report to the police (PSP/GNR), keep the auto de denúncia, then request a duplicata through AIMA. Issuing times depend on AIMA — do not plan to leave before receiving the new card',
          '❓ Loss abroad — report it to the local police, contact the airline and the Portuguese consulate. If the passport is also lost, an emergency passport is issued by the consulate of YOUR country of citizenship, not Portugal. The Portuguese consulate may help with returning to Portugal by alternative means (for example, help with status verification)'
        ]},
        { kind: 'warning', text: 'Airlines have the right to refuse boarding without a valid residence permit card — they check automatically against the passport. A PDF confirmation is not a travel document.' }
      ]
    },
    {
      id: 'countries-notes',
      title: 'Country-specific notes',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: 'United Kingdom', content: [
            { kind: 'paragraph', text: 'NOT Schengen. The United Kingdom does not recognise a PT residence permit as a right of entry. The rule depends on the passport: citizens of visa-national countries (including the Russian Federation/Belarus) usually need a UK Standard Visitor visa; citizens of visa-free countries need an ETA. An ETA costs £16 (2025+), is valid for up to 2 years or until the passport expires; permitted visits are usually up to 6 months.' }
          ]},
          { id: 's2', title: 'Ireland', content: [
            { kind: 'paragraph', text: 'Not Schengen. A PT residence permit by itself does NOT give a right of entry; whether an Irish visa is needed depends on the passport. Citizens of the Russian Federation/Belarus usually need a visa. Website — irishimmigration.ie.' }
          ]},
          { id: 's3', title: 'Bulgaria, Romania, Cyprus', content: [
            { kind: 'paragraph', text: 'Since 2025, Bulgaria and Romania have been in Schengen — a Portuguese residence permit works. Cyprus is not in Schengen, but a valid residence permit from Portugal/another Schengen country usually allows entry to Cyprus without a separate Cypriot visa for a short stay (EU Decision No 565/2014/EU). Before travelling, check the conditions by citizenship and document validity period on the Cyprus MFA website.' }
          ]},
          { id: 's4', title: 'Croatia', content: [
            { kind: 'paragraph', text: 'In Schengen since 2023 — the residence permit works.' }
          ]},
          { id: 's5', title: 'USA, Canada, Australia', content: [
            { kind: 'paragraph', text: 'Separate visas or authorisations are needed (ESTA/eTA or a full visa). A PT residence permit by itself does NOT give a right of entry and usually does NOT give formal priority. It may be used as evidence of legal residence/ties in a visa application; rules depend on citizenship and the destination country.' }
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
          '🛂 Passport (valid for 3+ months)',
          '🪪 Physical cartão de residência card (not a scan!)',
          '📄 Digital copy — photo / PDF on your phone',
          '💼 Insurance (for Schengen — optional, except for countries with a mandatory requirement; for non-EU countries — recommended)',
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
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
