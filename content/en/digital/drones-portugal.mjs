export default {
  editorialVoice: 'hackportugal',
  id: 'drones-portugal',
  categoryId: 'digital_gov',
  title: 'Drones in Portugal — registration, rules, where you can fly',
  tldr: 'Portugal applies the EU-wide rules EU 2019/947: operator registration with ANAC (free) for drones ≥250 g or with a camera + theoretical training. In the Open category, you may fly up to 120 m in height. You may not fly over people, within 5 km of airports, or over national parks without permission. Fines of up to €2,000 for breaches.',
  tags: ['drone', 'drones', 'anac', 'russian federation/eu regulation'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'registration',
      title: 'Operator registration',
      content: [
        { kind: 'paragraph', text: 'Portugal applies EU Regulation 2019/947 through the national agency ANAC (Autoridade Nacional da Aviação Civil). Registration is mandatory for:' },
        { kind: 'checklist', items: [
          'Any drone with a camera / sensors (even <250 g)',
          'Any drone ≥ 250 g (with or without a camera)',
          'A drone with C0-C4 marking (EU class)',
          'Registration is NOT needed for: toys <250 g without a camera (DJI Neo as-is — yes, it is needed, because it has a camera)'
        ]},
        { kind: 'substeps', items: [
          { id: 'r1', title: '1. Create an account on the ANAC drone portal', content: [
            { kind: 'paragraph', text: 'voanouceu.anac.pt → Registar operador → Chave Móvel Digital / Cartão de Cidadão / NIF + password. Enter your full name, address, NIF, and contact details.' }
          ]},
          { id: 'r2', title: '2. Obtain an operator identifier', content: [
            { kind: 'paragraph', text: 'The system issues a UAS Operator ID in the format PRT-RP-XXXXXXXX. You attach this number to the drone (sticker or engraving).' }
          ]},
          { id: 'r3', title: '3. Pass the online exam (for Open A1/A3)', content: [
            { kind: 'paragraph', text: 'On the same portal — 40 questions, free, and you can retake it. On completion — an A1/A3 certificate (Open category), valid for 5 years. For A2 (closer to people) — an additional in-person exam for €90.' }
          ]},
          { id: 'r4', title: '4. Insurance', content: [
            { kind: 'paragraph', text: 'Mandatory for commercial operators and drones ≥ 20 kg. For personal use — recommended. Insurers: Fidelidade, Generali, AXA — civil liability up to €750,000, €50-150/year.' }
          ]}
        ]}
      ]
    },
    {
      id: 'where',
      title: 'Where you can and cannot fly',
      content: [
        { kind: 'substeps', items: [
          { id: 'w1', title: '✅ Allowed in the Open category', content: [
            { kind: 'checklist', items: [
              'A1 (C0 <250 g): over people, but not over assemblies of people',
              'A2 (C2 <4 kg): 30 m from people; 5 m in low-speed mode',
              'A3 (C3/C4 <25 kg): 150 m from residential/commercial areas, only over places with no uninvolved people',
              'Up to 120 m in height AGL (above ground level)',
              'Only during the day and within visual line of sight (VLOS)'
            ]}
          ]},
          { id: 'w2', title: '❌ Prohibited', content: [
            { kind: 'checklist', items: [
              'Within 5 km of any airport / aerodrome (Lisboa, Porto, Faro, Cascais, Tires, etc.)',
              'In NOTAM zones / geozones — see the map at voanouceu.anac.pt/geozonas',
              'Over national parks and nature reserves (Gerês, Serra da Estrela, Sintra) without written permission from ICNF',
              'Over palaces, castles, churches, UNESCO historic areas',
              'Over military sites',
              'On beaches in season (June-September) — ICNF + municipal bans',
              'Over assemblies of people (concerts, football, markets, demonstrations)',
              'At night (without special authorisation)',
              'In weather conditions: wind >12 m/s, rain, visibility <500 m'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'specific',
      title: 'Special cases',
      content: [
        { kind: 'checklist', items: [
          '🏛️ Shooting commercial photos/videos — registration as a commercial operator + tax declaration required (Recibo Verde or legal entity)',
          '🌊 Beaches: out of season (October-May) — allowed; in season (June-September) — prohibited during 8:00-20:00',
          '🏝️ Madeira, Azores — the same rules + additional restrictions for natural areas',
          '🎥 Filming weddings, events — permitted in A1/A2, but it is recommended to notify ANAC 48 hours in advance',
          '🛫 Flight beyond VLOS (BVLOS) or above 120 m — only in the Specific category with separate authorisation from ANAC'
        ]}
      ]
    },
    {
      id: 'import',
      title: 'Importing a drone',
      content: [
        { kind: 'checklist', items: [
          'From the EU: no duties, free import',
          'From third countries (Russian Federation, USA, China): through customs if the value is >€150 — IVA 23% + possible duty',
          'Batteries: LiPo >100Wh — prohibited in aircraft hand luggage, only in checked baggage',
          'DJI from the USA — it is recommended to update the firmware to the EU version (removes US geofencing restrictions)'
        ]}
      ]
    },
    {
      id: 'fines',
      title: 'Fines',
      content: [
        { kind: 'checklist', items: [
          'Flying without registration: €500–1,500',
          'Geozone breach (airport): €1,000–2,000',
          'Flying over people in A3: €500–1,000',
          'Flying in a natural park without permission: €250–750 + possible confiscation',
          'Night flight without authorisation: €500',
          'Fine check: GNR / PSP at the time of flight or through ANAC'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Registration with ANAC', amountEUR: 0 },
    { label: 'A1/A3 exam (online)', amountEUR: 0 },
    { label: 'A2 exam (in-person)', amountEUR: 90 },
    { label: 'Civil liability insurance', amountEURMin: 50, amountEURMax: 150, note: '/year' }
  ],
  sources: [
    { title: 'ANAC — drones', url: 'https://www.anac.pt/drones', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Portugal drone portal (registration + geozones)', url: 'https://voanouceu.anac.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Regulation (EU) 2019/947', url: 'https://eur-lex.europa.eu/eli/reg_impl/2019/947/oj', kind: 'law', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'ICNF — natural parks', url: 'https://www.icnf.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 180
}
