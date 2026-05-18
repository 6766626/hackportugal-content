export default {
  editorialVoice: 'hackportugal',
  id: 'registo-embarcacao-recreio',
  categoryId: 'food_leisure',
  title: 'Registering a recreational boat — Capitania (harbour master’s office)',
  tldr: 'Any boat longer than 2.5 m or with an engine over 4.5 kW must be registered with the Capitania do Porto (under DGAM/AMN — AMN: the national maritime authority).\n\nThe navigation class — Local/Costeira/Largo — determines where you may sail and what equipment you need.\n\nRegistration cost: ~€50–200 depending on class and size. In parallel you need: insurance (~€150–400 per year), an operating licence (~€50), and for fishing — a separate pesca lúdica (recreational fishing) licence from a boat. Import from the EU: IVA (Portuguese VAT) is paid only for a new boat; used boats (6+ months and/or 100+ engine hours) — no IVA. From non-EU countries — duty + IVA + ISV equivalent. An imported boat is re-registered in Portugal and receives a new number.',
  tags: ['boat', 'vessel', 'registration', 'capitania', 'amn'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'when-needed',
      title: 'When registration is mandatory',
      content: [
        { kind: 'checklist', items: [
          '✅ Any boat over 2.5 m long',
          '✅ Any motor boat with an engine over 4.5 kW (~6 hp)',
          '✅ Sailing boats of any size if they go beyond the bathing area',
          '✅ Kayaks and SUPs with any motor',
          '✅ Jet skis — all',
          '❌ Small plastic kayaks and SUP boards without a motor — registration is not required',
          '❌ Inflatable mattresses and rings — are not considered watercraft'
        ] },
        { kind: 'paragraph', text: 'If the boat is in Portugal for more than 6 months — registration is mandatory regardless of the flag state. This also applies to yachts that are “temporary guests”.' }
      ]
    },
    {
      id: 'classes',
      title: 'Navigation classes (categoria de navegação)',
      content: [
        { kind: 'paragraph', text: 'The class determines how far from shore and in what conditions you are allowed to sail. This is the most important decision when registering.' },
        { kind: 'checklist', items: [
          'Local: up to 5 miles from shore in sheltered waters. Minimum equipment. Suitable for daytime coastal fishing.',
          'Costeira: up to 25 miles. A VHF radio and life jackets are mandatory; EPIRB is recommended.',
          'Costeira-oceânica: up to 60 miles. Extended equipment set.',
          'Largo: no distance limits. Requirements are close to IMO.',
          'Interior: rivers and reservoirs. Separate category.'
        ] },
        { kind: 'paragraph', text: 'The higher the class, the more expensive registration, insurance and maintenance become. For beach fishing, 90% of people choose Local.' }
      ]
    },
    {
      id: 'how-to-register',
      title: 'Process for registering a new boat',
      content: [
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Owner documents',
            content: [
              { kind: 'checklist', items: [
                'NIF (tax number) and Cartão de Cidadão (citizen card) or passport + proof of address',
                'IBAN for refunds of overpayments',
                'Power of attorney if the application is not submitted by the owner'
              ] }
            ]
          },
          {
            id: 's2',
            title: 'Boat documents',
            content: [
              { kind: 'checklist', items: [
                'Factura (invoice) for a new boat or declaração de venda (sale declaration) for a used one',
                'CE certificate (for new boats from the EU): declaration of conformity',
                'Technical data: length, width, draught, engine power, hull material, model',
                'Photos of the boat from different angles and of the serial number (HIN — Hull Identification Number)',
                'For imports from non-EU countries: DAU customs declaration'
              ] }
            ]
          },
          {
            id: 's3',
            title: 'Submit to the Capitania do Porto',
            content: [
              { kind: 'paragraph', text: 'Go to the nearest Capitania (Lisboa, Cascais, Sesimbra, Setúbal, Peniche, Aveiro, Porto, Olhão, Faro, etc.). You can book online at amn.pt → Capitania → Marcação.' },
              { kind: 'checklist', items: [
                'Complete the application form (formulário)',
                'Pay the registration fee (depends on class and size)',
                'Receive temporary registration immediately',
                'Permanent registration arrives by post in 2–4 weeks'
              ] }
            ]
          },
          {
            id: 's4',
            title: 'Receive the registration number and apply it to the hull',
            content: [
              { kind: 'paragraph', text: 'Format: P-XX-NNNN, where P — Portugal, XX — port of registration (LX — Lisboa, CS — Cascais, SE — Setúbal, FA — Faro, etc.), NNNN — number. The number must be applied to the hull on both sides with indelible paint or a plate in a visible place.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'imported-boats',
      title: 'Importing a boat from the EU or non-EU countries',
      content: [
        { kind: 'paragraph', text: 'If you are moving to Portugal with your boat — it must be re-registered.' },
        { kind: 'checklist', items: [
          'From the EU, new boat (< 6 months or < 100 engine hours): you must pay IVA (Portuguese VAT) 23% in Portugal',
          'From the EU, used (> 6 months and > 100 hours): IVA is not required, but registration is mandatory',
          'From non-EU countries: customs duty (usually 0% for recreational boats), IVA 23% on the declared value, ISV equivalent for the engine',
          'DAU (customs declaration) is processed at the port customs office',
          'After customs — standard registration with the Capitania'
        ] },
        { kind: 'paragraph', text: 'If you had a boat in another EU country, when moving to Portugal with a residence permit you may be able to use the regime de transferência de residência (IVA exemption), if the boat has been owned for more than 6 months and you are moving permanently. Apply through the tax authority (Finanças) within 12 months after registration in Portugal.' }
      ]
    },
    {
      id: 'mandatory-equipment',
      title: 'Mandatory equipment by class',
      content: [
        { kind: 'paragraph', text: 'Minimum for the Local class:' },
        { kind: 'checklist', items: [
          'Life jackets for the number of people on board',
          'Anchor with a line at least 4× the depth in the planned sailing area',
          'Audible distress signal (whistle or siren)',
          'Fire extinguisher if an internal combustion engine is installed',
          'Bilge pump or bucket for bailing water',
          'Spare engine or oars (if the main engine is over 4.5 kW)',
          'First aid kit',
          'Waterproof torch'
        ] },
        { kind: 'paragraph', text: 'For the Costeira class additionally:' },
        { kind: 'checklist', items: [
          'VHF radio (a separate licence is required — see the guide on Carta de Marinheiro/VHF)',
          'GPS or chartplotter/navigation charts',
          'Flares',
          'EPIRB is recommended',
          'Life raft for boats longer than 6 m'
        ] }
      ]
    },
    {
      id: 'insurance',
      title: 'Insurance — mandatory',
      content: [
        { kind: 'paragraph', text: 'Since 2018, civil liability insurance (responsabilidade civil) has been mandatory for all registered boats (Lei 4/2018).' },
        { kind: 'checklist', items: [
          'Minimum: civil liability ~€150–300 per year',
          'Comprehensive (corpo + civil): 0.5–1.5% of the boat’s value per year',
          'Russian/Ukrainian documents are accepted by ordinary Portuguese insurers (Tranquilidade, Fidelidade, Allianz, Lusitania), the key point is that the boat must be registered in PT',
          'Cover: damage to third parties, hull, engine, equipment, reboque (towing), assistência',
          'Excess (franquia): usually 5–10% of the boat’s value or a fixed amount'
        ] }
      ]
    },
    {
      id: 'fees-renewal',
      title: 'Fees and renewal',
      content: [
        { kind: 'paragraph', text: 'Once a year you need an operating licence for the boat (similar to an MOT for a car):' },
        { kind: 'checklist', items: [
          'Local: ~€50 per year',
          'Costeira: ~€80 per year',
          'Largo: ~€150 per year',
          'Technical inspection: every 4 years for most classes, ~€50–100 per visit',
          'An annual fee is also charged (taxa de embarcação) — ~€30–100 depending on size'
        ] }
      ]
    },
    {
      id: 'fines',
      title: 'Fines for violations',
      content: [
        { kind: 'checklist', items: [
          'Boat without registration: €250–2,500 + possible confiscation',
          'Without an operating licence: €100–500',
          'Without insurance: €250–2,500 (as for a car)',
          'Missing mandatory equipment: €100–1,000 (for each missing item)',
          'Exceeding the navigation class (a Local boat in a Largo area): €250–1,500',
          'Using a boat without the required skipper’s certificate: €500–2,500'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Boat registration — Local class', amountEURMin: 50, amountEURMax: 100, note: 'One-off, length 5–7 m' },
    { label: 'Boat registration — Costeira class', amountEURMin: 100, amountEURMax: 250 },
    { label: 'Annual sailing licence — Local class', amountEUR: 50 },
    { label: 'Technical inspection — every 4 years', amountEURMin: 50, amountEURMax: 150 },
    { label: 'Insurance (civil liability only)', amountEURMin: 150, amountEURMax: 300, note: 'Per year' },
    { label: 'Comprehensive insurance (corpo)', amountEURMin: 300, amountEURMax: 1500, note: '0.5–1.5% of value' },
    { label: 'IVA when importing a new boat', amountEURMin: 0, amountEURMax: 50000, note: '23% of value — example: €50,000 boat = €11,500 IVA' }
  ],
  sources: [
    { title: 'AMN — Autoridade Marítima Nacional', url: 'https://www.amn.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'DGAM — Direção-Geral da Autoridade Marítima', url: 'https://www.amn.pt/DGAM/Paginas/default.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Capitanias — find the nearest port', url: 'https://www.amn.pt/DGAM/Capitanias/Paginas/Capitanias.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 124/2004 — recreational boats', url: 'https://dre.pt/dre/detalhe/decreto-lei/124-2004-220127', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Lei 4/2018 — mandatory boat insurance', url: 'https://dre.pt/dre/detalhe/lei/4-2018-114655100', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 365
}
