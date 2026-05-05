export default {
  editorialVoice: 'hackportugal',
  id: 'registo-embarcacao-recreio',
  categoryId: 'food_leisure',
  title: 'Registration of a pleasure boat — Capitania (harbour master\'s office)',
  tldr: 'Any boat longer than 2.5 m or with an engine over 4.5 kW requires registration with the Capitania do Porto (under DGAM/AMN — AMN: national maritime authority). The navigation class — Local/Costeira/Largo — determines where you may sail and what equipment is required. Registration cost: ~€50–€200 depending on class and size. In parallel you need: insurance (~€150–€400 per year), an operating licence (~€50), and for fishing — a separate pesca lúdica (recreational fishing) licence from a boat. Import from the EU: IVA (Portuguese VAT) is payable only for a new boat; second-hand (6+ months and/or 100+ engine hours) — no IVA. From non‑EU countries — duty + IVA + ISV equivalent. An imported boat is re-registered in Portugal and receives a new number.',
  tags: ['boat', 'recreational vessel', 'registration', 'capitania', 'amn'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'when-needed',
      title: 'When registration is mandatory',
      content: [
        { kind: 'checklist', items: [
          '✅ Any boat longer than 2.5 m',
          '✅ Any motor boat with an engine over 4.5 kW (~6 hp)',
          '✅ Sailing boats of any size if they go beyond the bathing zone',
          '✅ Kayaks and SUPs with any motor',
          '✅ Personal watercraft — all',
          '❌ Small plastic kayaks and SUP boards without a motor — no registration needed',
          '❌ Inflatable mattresses and rings — not considered a vessel'
        ] },
        { kind: 'paragraph', text: 'If a boat is in Portugal for more than 6 months, registration is mandatory regardless of the flag state. This also applies to yachts that are \'temporary visitors\'.' }
      ]
    },
    {
      id: 'classes',
      title: 'Navigation classes (categoria de navegação)',
      content: [
        { kind: 'paragraph', text: 'The class determines how far from shore and in what conditions you are allowed to sail. This is the most important decision at registration.' },
        { kind: 'checklist', items: [
          'Local: up to 5 miles from shore in sheltered waters. Minimum equipment. Suitable for daytime inshore fishing.',
          'Costeira: up to 25 miles. VHF radio and lifejackets are mandatory; EPIRB recommended.',
          'Costeira-oceânica: up to 60 miles. Expanded equipment set.',
          'Largo: no distance limits. Requirements close to IMO.',
          'Interior: rivers and reservoirs. Separate category.'
        ] },
        { kind: 'paragraph', text: 'The higher the class, the more expensive the registration, insurance and maintenance. For beach fishing 90% of people choose Local.' }
      ]
    },
    {
      id: 'how-to-register',
      title: 'How to register a new boat',
      content: [
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Owner\'s documents',
            content: [
              { kind: 'checklist', items: [
                'NIF (tax number) and Cartão de Cidadão (citizen card) or passport + proof of address',
                'IBAN for refunds',
                'Power of attorney if not submitted by the owner'
              ] }
            ]
          },
          {
            id: 's2',
            title: 'Boat documents',
            content: [
              { kind: 'checklist', items: [
                'Factura (invoice) for a new boat or declaração de venda (bill of sale) for used',
                'CE certificate (for new boats from the EU): declaration of conformity',
                'Technical data: length, beam, draft, engine power, hull material, model',
                'Photos of the boat from different angles and of the serial number (HIN — Hull Identification Number)',
                'For imports from non‑EU countries: DAU customs declaration'
              ] }
            ]
          },
          {
            id: 's3',
            title: 'Submitting to the Capitania do Porto',
            content: [
              { kind: 'paragraph', text: 'Go to the nearest Capitania (Lisboa, Cascais, Sesimbra, Setúbal, Peniche, Aveiro, Porto, Olhão, Faro, etc.). You can book online at amn.pt → Capitania → Marcação.' },
              { kind: 'checklist', items: [
                'Fill in the application (formulário)',
                'Pay the registration fee (depends on class and size)',
                'Get a temporary registration immediately',
                'The permanent registration arrives by post within 2–4 weeks'
              ] }
            ]
          },
          {
            id: 's4',
            title: 'Get the registration number and apply it to the hull',
            content: [
              { kind: 'paragraph', text: 'Format: P-XX-NNNN, where P = Portugal, XX = port of registration (LX = Lisboa, CS = Cascais, SE = Setúbal, FA = Faro, etc.), NNNN = number. The number must be applied to the hull on both sides with indelible paint or a plaque in a visible place.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'imported-boats',
      title: 'Importing a boat from the EU or from non‑EU countries',
      content: [
        { kind: 'paragraph', text: 'If you are moving to Portugal with your boat — it must be re-registered.' },
        { kind: 'checklist', items: [
          'From the EU, new boat (< 6 months or < 100 engine hours): you must pay IVA (Portuguese VAT) 23% in Portugal',
          'From the EU, used (> 6 months and > 100 hours): no IVA, but registration is mandatory',
          'From non‑EU countries: customs duty (usually 0% for pleasure boats), IVA 23% on the declared value, ISV equivalent for the engine',
          'DAU (customs declaration) is handled at the port customs office',
          'After customs — standard registration at the Capitania'
        ] },
        { kind: 'paragraph', text: 'If you had a boat in another EU country, when moving to Portugal on a residence permit you can use the regime de transferência de residência (IVA exemption), if the boat has been owned for more than 6 months and you are moving permanently. Apply via the tax office (Finanças) within 12 months after registering in Portugal.' }
      ]
    },
    {
      id: 'mandatory-equipment',
      title: 'Mandatory equipment by class',
      content: [
        { kind: 'paragraph', text: 'Minimum for the Local class:' },
        { kind: 'checklist', items: [
          'Lifejackets for the number of people on board',
          'Anchor with a line at least 4× the depth in the intended area',
          'Sound signalling device (whistle or horn)',
          'Fire extinguisher if an internal combustion engine is installed',
          'Bilge pump or bucket for dewatering',
          'Auxiliary engine or oars (if the main engine is over 4.5 kW)',
          'First-aid kit',
          'Waterproof torch'
        ] },
        { kind: 'paragraph', text: 'Additionally for the Costeira class:' },
        { kind: 'checklist', items: [
          'VHF radio (a separate licence is required — see the guide on Carta de Marinheiro/VHF)',
          'GPS or chartplotter/navigation charts',
          'Flares',
          'EPIRB recommended',
          'Liferaft for boats longer than 6 m'
        ] }
      ]
    },
    {
      id: 'insurance',
      title: 'Insurance — mandatory',
      content: [
        { kind: 'paragraph', text: 'Since 2018, third-party liability insurance (responsabilidade civil) has been mandatory for all registered boats (Lei 4/2018).' },
        { kind: 'checklist', items: [
          'Minimum: third-party liability ~€150–€300 per year',
          'Comprehensive (corpo + civil): 0.5–1.5% of the boat\'s value per year',
          'Portuguese insurers (Tranquilidade, Fidelidade, Allianz, Lusitania) accept Russian/Ukrainian documents; the key is that the boat is registered in PT',
          'Cover: third-party damage, hull, engine, equipment, reboque (towing), assistência',
          'Excess (franquia): usually 5–10% of the boat\'s value or a fixed amount'
        ] }
      ]
    },
    {
      id: 'fees-renewal',
      title: 'Fees and renewal',
      content: [
        { kind: 'paragraph', text: 'An operating licence for the boat is required annually (analogous to a car\'s MOT):' },
        { kind: 'checklist', items: [
          'Local: ~€50 per year',
          'Costeira: ~€80 per year',
          'Largo: ~€150 per year',
          'Technical inspection: every 4 years for most classes, ~€50–€100 per visit',
          'An annual levy (taxa de embarcação) is also charged — ~€30–€100 depending on size'
        ] }
      ]
    },
    {
      id: 'fines',
      title: 'Fines for infringements',
      content: [
        { kind: 'checklist', items: [
          'Boat without registration: €250–€2,500 + possible confiscation',
          'Without operating licence: €100–€500',
          'Without insurance: €250–€2,500 (as for a car)',
          'Missing mandatory equipment: €100–€1,000 (per missing item)',
          'Exceeding navigation class (Local boat in a Largo zone): €250–€1,500',
          'Using a boat without the required skipper\'s licence: €500–€2,500'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Boat registration — Local class', amountEURMin: 50, amountEURMax: 100, note: 'One-off, length 5–7 m' },
    { label: 'Boat registration — Costeira class', amountEURMin: 100, amountEURMax: 250 },
    { label: 'Annual operating licence — Local class', amountEUR: 50 },
    { label: 'Technical inspection — every 4 years', amountEURMin: 50, amountEURMax: 150 },
    { label: 'Insurance (third-party liability only)', amountEURMin: 150, amountEURMax: 300, note: 'Per year' },
    { label: 'Comprehensive insurance (corpo)', amountEURMin: 300, amountEURMax: 1500, note: '0.5–1.5% of value' },
    { label: 'IVA on import of a new boat', amountEURMin: 0, amountEURMax: 50000, note: '23% of value — example: boat €50,000 = €11,500 IVA' }
  ],
  sources: [
    { title: 'AMN — Autoridade Marítima Nacional', url: 'https://www.amn.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'DGAM — Direção-Geral da Autoridade Marítima', url: 'https://www.amn.pt/DGAM/Paginas/default.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Capitanias — find the nearest port', url: 'https://www.amn.pt/DGAM/Capitanias/Paginas/Capitanias.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 124/2004 — embarcações de recreio', url: 'https://dre.pt/dre/detalhe/decreto-lei/124-2004-220127', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Lei 4/2018 — seguro obrigatório embarcações', url: 'https://dre.pt/dre/detalhe/lei/4-2018-114655100', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 365
}
