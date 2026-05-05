export default {
  editorialVoice: 'hackportugal',
  id: 'drones-portugal',
  categoryId: 'digital_gov',
  title: 'Drones in Portugal — registration, rules, where you can fly',
  tldr: 'In Portugal, the EU-wide rules EU 2019/947 apply: operator registration with ANAC (free) for drones ≥250 g or with a camera + theoretical training. You may fly up to 120 m altitude in the Open category. You may not fly over people, within 5 km of airports, or over national parks without authorisation. Fines up to €2000 for violations.',
  tags: ['drone', 'drones', 'anac', 'rf/eu regulation'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'registration',
      title: 'Operator registration',
      content: [
        { kind: 'paragraph', text: 'Portugal applies EU Regulation 2019/947 via the national agency ANAC (Autoridade Nacional da Aviação Civil). Registration is mandatory for:' },
        { kind: 'checklist', items: [
          'Any drone with a camera/sensors (even <250 g)',
          'Any drone ≥250 g (with or without a camera)',
          'A drone bearing C0–C4 marking (EU class)',
          'Registration is NOT required for: toys <250 g without a camera (DJI Neo as sold — registration is required, since it has a camera)'
        ]},
        { kind: 'substeps', items: [
          { id: 'r1', title: '1. Create an account on the ANAC drone portal', content: [
            { kind: 'paragraph', text: 'voanouceu.anac.pt → Registar operador → Chave Móvel Digital / Cartão de Cidadão / NIF + password. Enter full name, address, NIF, contact details.' }
          ]},
          { id: 'r2', title: '2. Obtain the operator identifier', content: [
            { kind: 'paragraph', text: 'The system issues a UAS Operator ID in the format PRT-RP-XXXXXXXX. Affix this number to the drone (sticker or engraving).' }
          ]},
          { id: 'r3', title: '3. Pass the online exam (for Open A1/A3)', content: [
            { kind: 'paragraph', text: 'On the same portal — 40 questions, free, retakes allowed. Upon completion — A1/A3 certificate (Open category), valid for 5 years. For A2 (closer to people) — an additional in-person exam for €90.' }
          ]},
          { id: 'r4', title: '4. Insurance', content: [
            { kind: 'paragraph', text: 'Mandatory for commercial operators and drones ≥20 kg. For recreational use — recommended. Insurers: Fidelidade, Generali, AXA — third-party liability up to €750,000, €50–150/year.' }
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
              'A2 (C2 <4 kg): at least 30 m from people; 5 m in low-speed mode',
              'A3 (C3/C4 <25 kg): at least 150 m from residential/commercial areas, only over areas with no people',
              'Up to 120 m altitude AGL (above ground level)',
              'Only in daylight and within visual line of sight (VLOS)'
            ]}
          ]},
          { id: 'w2', title: '❌ Prohibited', content: [
            { kind: 'checklist', items: [
              'Within 5 km of any airport/aerodrome (Lisboa, Porto, Faro, Cascais, Tires, etc.)',
              'In NOTAM zones/geozones — see the map at voanouceu.anac.pt/geozonas',
              'Over national parks and nature reserves (Gerês, Serra da Estrela, Sintra) without written authorisation from ICNF',
              'Over palaces, castles, churches, UNESCO historic zones',
              'Over military facilities',
              'On beaches in season (June–September) — prohibited by ICNF + municipalities',
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
          '🏛️ Commercial photo/video shooting — requires registration as a commercial operator + tax declaration (recibos verdes or a legal entity)',
          '🌊 Beaches: out of season (October–May) — allowed; in season (June–September) — prohibited between 08:00–20:00',
          '🏝️ Madeira, Azores — same rules + additional restrictions for protected natural areas',
          '🎥 Filming weddings and events — permitted in A1/A2, but it is recommended to notify ANAC 48 hours in advance',
          '🛫 Flight beyond VLOS (BVLOS) or above 120 m — only in the Specific category with separate authorisation from ANAC'
        ]}
      ]
    },
    {
      id: 'import',
      title: 'Bringing a drone into Portugal',
      content: [
        { kind: 'checklist', items: [
          'From the EU: no duties, free import',
          'From third countries (Russian Federation, USA, China): via customs if the value >€150 — VAT 23% + possible duty',
          'Batteries: LiPo >100 Wh — prohibited in hand luggage on aircraft, only in checked baggage',
          'DJI from the USA — recommended to update firmware to the EU version (removes US geofencing restrictions)'
        ]}
      ]
    },
    {
      id: 'fines',
      title: 'Fines',
      content: [
        { kind: 'checklist', items: [
          'Flight without registration: €500–1500',
          'Breach of geozone (airport): €1000–2000',
          'Flight over people in A3: €500–1000',
          'Flight in a nature park without authorisation: €250–750 + possible confiscation',
          'Night flight without authorisation: €500',
          'To check a fine: GNR / PSP at the time of flight or via ANAC'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Registration with ANAC', amountEUR: 0 },
    { label: 'A1/A3 exam (online)', amountEUR: 0 },
    { label: 'A2 exam (in person)', amountEUR: 90 },
    { label: 'Third-party liability insurance', amountEURMin: 50, amountEURMax: 150, note: '/year' }
  ],
  sources: [
    { title: 'ANAC — Open Category (UAS/drone operating rules)', url: 'https://www.anac.pt/vPT/Generico/drones/categoria_aberta/Paginas/CategoriaAberta.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' },
    { title: 'ANAC — Registration of Unmanned Aircraft Operators', url: 'https://www.anac.pt/vPT/Generico/drones/registo_uas/Paginas/OperadoresdeUAS.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' },
    { title: 'Portugal drone portal (registration + geozones)', url: 'https://voanouceu.anac.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Regulation (EU) 2019/947', url: 'https://eur-lex.europa.eu/eli/reg_impl/2019/947/oj', kind: 'law', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'ICNF — natural parks', url: 'https://www.icnf.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 180
}
