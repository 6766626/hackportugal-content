export default {
  editorialVoice: 'hackportugal',
  id: 'border-crossing-with-vnj',
  categoryId: 'residence_permit',
  title: 'Crossing the border with a Portuguese residence permit — Schengen and third countries',
  tldr: 'With a Portuguese residence permit (cartão de residência), you can move freely throughout Schengen for up to 90 days in any 180-day period without a separate visa. For entry — passport + valid residence permit card (and if the residence permit has expired while renewal is in progress — confirmation from AIMA of renewal/maintenance of status). For entry into Portugal from non-EU countries, take your boarding pass and residence permit; a stamp may not be placed. When returning from Schengen, officers usually have no questions.',
  tags: ['border', 'schengen', 'residence permit', 'trips', 'travel'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'schengen',
      title: 'Schengen: 90/180 without a visa',
      content: [
        { kind: 'paragraph', text: 'Under Regulation (EU) 2016/399 (Schengen Borders Code), the holder of a valid residence permit from a Schengen member state may move freely around other Schengen countries for up to 90 days in any 180-day period. This rule covers short trips: tourism, family, business travel.' },
        { kind: 'checklist', items: [
          'Documents: passport + cartão de residência (physical card)',
          'Passport: check the requirements of the destination/transit country; for short-term entry into Schengen, the standard requirement is that it is valid for at least 3 months after the intended departure from Schengen and was issued no more than 10 years ago (SBC art. 6)',
          'Insurance for travel within Schengen is usually NOT checked as a visa condition for residence permit holders, but is strongly recommended; for non-Schengen, check the rules of the destination country',
          'If the residence permit has expired but you have renewal confirmation — this is risky and is NOT equivalent to a valid card for other Schengen countries. The internal Portuguese extension of document validity is not always recognised outside Portugal. If possible, wait for the new card',
          'No more than 90 days in total in other Schengen countries in any 180-day period'
        ]},
        { kind: 'warning', text: 'A residence permit does NOT give the right to work in other Schengen countries. Only in Portugal (or in exceptions — an ICT card, EU Blue Card with rights to intra-country mobility).' }
      ]
    },
    {
      id: 'non-eu',
      title: 'Entry into and exit from Portugal from/to third countries',
      content: [
        { kind: 'substeps', items: [
          { id: 'n1', title: 'Departure from Portugal to a non-EU country (Russian Federation, Turkey, USA, etc.)', content: [
            { kind: 'checklist', items: [
              'Passport + valid residence permit; residence permit holders’ passports are usually NOT stamped either on entry or exit (Schengen Borders Code art. 11)',
              'Border control at the airport is usually carried out by PSP; automatic e-gates/ABC may be used where available',
              'Without a residence permit — as a tourist 90/180; you need a visa to return if there is no visa-free regime',
              'The airline checks the validity of the residence permit at check-in'
            ]}
          ]},
          { id: 'n2', title: 'Return to Portugal from a non-EU country', content: [
            { kind: 'checklist', items: [
              'Passport + residence permit',
              'The officer checks: the integrity of the card, that the name matches the passport, the validity period',
              'An entry stamp is usually NOT placed for residence permit holders; if a stamp was placed by mistake — keep your boarding pass/tickets and, if necessary, clarify with the border service',
              'If the residence permit is being renewed — confirmation + old card',
              'EES (Entry-Exit System) — phased launch from 12.10.2025, fully operational from 10.04.2026. EES applies to third-country nationals on ENTRY for a short stay. Holders of a valid residence permit/long-stay visa of a Schengen country entering as residents are usually NOT registered in EES — show the residence permit + passport; the border guard will determine the correct procedure'
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
          '🔄 Renewal in progress, before the card expires — travel is possible with the old card + comprovativo de submissão',
          '🟠 Card has expired, new one has not arrived yet — travel is risky: comprovativo de submissão / deferimento are documents for matters in Portugal; an airline and a border guard of another Schengen country are not obliged to accept them instead of a valid residence permit card. If possible, wait for the new card; before travelling, consult the Portuguese consulate in the transit country and/or the airline',
          '🔒 Expired with no renewal procedure — the border may not allow you back without a visa. Do not leave before regularising your status',
          '⚠️ Loss/theft in Portugal — file a report with the police (PSP/GNR), keep the auto de denúncia, then request a duplicata through AIMA. Issuing times depend on AIMA — do not plan to leave before receiving the new card',
          '❓ Loss abroad — report it to the local police, contact the airline and the Portuguese consulate. If the passport is also lost — an emergency passport is issued by the consulate of YOUR country of nationality, not Portugal. The Portuguese consulate may help with returning to Portugal by alternative means (for example, help with status verification)'
        ]},
        { kind: 'warning', text: 'Airlines have the right to deny boarding without a valid residence permit card — they check automatically against the passport. PDF confirmation is not a travel document.' }
      ]
    },
    {
      id: 'countries-notes',
      title: 'Country-specific notes',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: 'United Kingdom', content: [
            { kind: 'paragraph', text: 'NOT Schengen. The United Kingdom does not recognise a PT residence permit as a right of entry. The rule depends on the passport: nationals of visa-national countries (including the Russian Federation/Belarus) usually need a UK Standard Visitor visa; nationals of visa-free countries need an ETA. An ETA costs £20 (from 8 April 2026), is valid for up to 2 years or until the passport expires; permitted visits are usually up to 6 months.' }
          ]},
          { id: 's2', title: 'Ireland', content: [
            { kind: 'paragraph', text: 'Not Schengen. A PT residence permit by itself does NOT give a right of entry; whether an Irish visa is needed depends on the passport. Nationals of the Russian Federation/Belarus usually need a visa. Website — irishimmigration.ie.' }
          ]},
          { id: 's3', title: 'Bulgaria, Romania, Cyprus', content: [
            { kind: 'paragraph', text: 'From 2025 Bulgaria and Romania are in Schengen — a Portuguese residence permit works. Cyprus is not in Schengen, but a valid residence permit from Portugal/another Schengen country usually allows entry to Cyprus without a separate Cypriot visa for a short stay (EU Decision No 565/2014/EU).\n\nBefore travelling, check the conditions by nationality and document validity period on the Cyprus MFA website.' }
          ]},
          { id: 's4', title: 'Croatia', content: [
            { kind: 'paragraph', text: 'In Schengen since 2023 — the residence permit works.' }
          ]},
          { id: 's5', title: 'USA, Canada, Australia', content: [
            { kind: 'paragraph', text: 'Separate visas or authorisations are needed (ESTA/eTA or a full visa). A PT residence permit by itself does NOT give a right of entry and usually does NOT give formal priority. It may be used as evidence of legal residence/ties in a visa application; the rules depend on nationality and the destination country.' }
          ]},
          { id: 's6', title: 'Russia, Belarus', content: [
            { kind: 'paragraph', text: 'There are no direct flights; the route is usually via Serbia / Turkey / UAE. Russian Federation visas for third-country nationals follow the general rules.' }
          ]}
        ]}
      ]
    },
    {
      id: 'documents-checklist',
      title: 'Checklist: what to take on the trip',
      content: [
        { kind: 'checklist', items: [
          '🛂 Passport (validity 3+ months)',
          '🪪 Physical cartão de residência card (not a scan!)',
          '📄 Digital copy — photo / PDF on your phone',
          '💼 Insurance (for Schengen — optional, except for countries with a mandatory requirement; for non-EU countries — recommended)',
          '💶 Proof of funds (for a long stay)',
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
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
