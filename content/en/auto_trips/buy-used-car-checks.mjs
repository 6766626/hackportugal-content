export default {
  editorialVoice: 'hackportugal',
  id: 'buy-used-car-checks',
  categoryId: 'auto_trips',
  title: 'How to check a used car before buying in Portugal',
  tldr: 'Check **4 layers**: (1) **ACP / Standvirtual** — historical report by VIN, €15-30: fines, mileage, accidents; (2) **Carfax Portugal** — international database with history from the US/EU; (3) **Portal das Finanças** — check for any IUC, ISV debts; (4) **manual inspection** + independent mechanic for €50-150. The seller must provide the DUA (Documento Único Automóvel), valid IPO, handbook, keys (original + spare)\.\n\nSeller penalty for concealment: up to 3 × the value of the car.',
  tags: ['car', 'check', 'vin', 'purchase'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'before-buy',
      title: '📋 Before viewing — online checks',
      content: [
        { kind: 'substeps', items: [
          { id: 'o1', title: 'VIN decoding', content: [
            { kind: 'checklist', items: [
              'VIN (17 chars.) — in the DUA and on the windscreen',
              'Free decoders: vincarfax.com, vindecoder.net — check model, year, engine, trim',
              'Compare with the advert — a common mismatch = red flag'
            ]}
          ]},
          { id: 'o2', title: 'ACP Histórico (recommended)', content: [
            { kind: 'checklist', items: [
              'ACP (Automóvel Club de Portugal) — official report',
              'Costs ~€15-30 per report',
              'Shows: registrations, changes of owner, IPO, accident history, mileage history',
              'acp.pt → Histórico do Veículo',
              'Report in 5 min'
            ]}
          ]},
          { id: 'o3', title: 'Carfax Portugal', content: [
            { kind: 'paragraph', text: 'Alternative to ACP, more detailed for foreign cars (DE/FR/ES): carfax.pt, €20-40. Shows accident history in the country of first registration.' }
          ]},
          { id: 'o4', title: 'SICV (free!)', content: [
            { kind: 'checklist', items: [
              '**SICV** — Sistema Informativo do Certificado de Veículo',
              'Free IMT portal: sicv.imt-ip.pt',
              'Shows: matrícula, model, registration date, vehicle inspection, IUC debts',
              'Does not show accident history'
            ]}
          ]},
          { id: 'o5', title: 'Portal das Finanças', content: [
            { kind: 'paragraph', text: 'Through the seller (they log in with their CMD) — check for any IUC, ISV arrears. Debts pass to the new owner!' }
          ]}
        ]}
      ]
    },
    {
      id: 'paperwork',
      title: '📄 Documents from the seller — mandatory',
      content: [
        { kind: 'checklist', items: [
          '📑 **DUA (Documento Único Automóvel)** — ORIGINAL, not a copy. With blue logo, VIN, owner details',
          '📋 **IPO certificate** — valid on the purchase date (not expiring within the next 30 days)',
          '📖 **Manual do condutor** (service book) + service history desirable',
          '🔑 **2 keys**: original + spare. 1 key → negotiate a price reduction',
          '🧾 **Factura proforma / contrato de compra-venda** — from the dealer (if the seller is a trader) or a simple contract (if a private individual)',
          '📄 **Registo de propriedade** — certificate of ownership',
          '⚠️ If anything is missing → significant reason to negotiate or walk away'
        ]}
      ]
    },
    {
      id: 'inspection',
      title: '🔧 In-person inspection',
      content: [
        { kind: 'substeps', items: [
          { id: 'i1', title: 'Visual', content: [
            { kind: 'checklist', items: [
              'Paint: is the colour uniform? Unevenness → respray (has been in an accident)',
              'Panel gaps: equal between doors/bonnet/boot? Unevenness → body damage',
              'Tyres: even wear? Uneven → suspension problems',
              'Sills, underside: rust, cracks — critical',
              'Glass: cracks, chips',
              'Headlights: cloudy, yellow — not critical, but grounds for negotiation',
              'Interior: does wear on the steering wheel / pedals match the mileage? Mismatch → clocked mileage!'
            ]}
          ]},
          { id: 'i2', title: 'Test drive', content: [
            { kind: 'checklist', items: [
              'Minimum 20 min, at different speeds',
              'Moving off: check for clutch slip',
              'Steering: vibration, play, heaviness',
              'Brakes: pulsing, squealing, unevenness',
              'Gears: no crunching, everything smooth',
              'Suspension on an uneven road: knocking → worn shock absorbers',
              'Exhaust: blue smoke = oil, white = coolant',
              'Electronics: all buttons, signals, windows, air conditioning, music',
              'Stop on the handbrake on an incline — check'
            ]}
          ]},
          { id: 'i3', title: 'Independent mechanic (recommended)', content: [
            { kind: 'checklist', items: [
              '**Pre-purchase inspection** — €50-150 for a 2-hour inspection',
              'Popular centres: Norauto, Midas, local garages with an OBD-II scanner',
              'They will check: computer errors, condition of the engine, gearbox, suspension',
              'Report with photos + list of issues',
              '💡 Seller refuses → walk away from the purchase'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'test-obd',
      title: '💻 OBD-II scanner — mandatory',
      content: [
        { kind: 'checklist', items: [
          'Buy an OBD-II Bluetooth adapter: €20-40 (OBDLink MX+, Veepeak)',
          'App: Car Scanner (Android), OBD Auto Doctor (iOS)',
          'Connect before the test drive',
          'Shows: real mileage (not clocked), stored errors, real-time data',
          'Seller clears codes 10 min before the meeting — identify via incomplete readiness monitors',
          'Mandatory for cars > €50,000 / used premium brands'
        ]}
      ]
    },
    {
      id: 'payment',
      title: '💳 Payment and handover',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: 'From a dealer', content: [
            { kind: 'checklist', items: [
              'Bank transfer — safest',
              'MB WAY up to €2,500',
              'Car finance: Crédito Auto (ActivoBank, Caixa, Cofidis) — rates 5-10% per year',
              'IVA 23% included in the price, the dealer must issue a factura'
            ]}
          ]},
          { id: 'p2', title: 'From a private individual', content: [
            { kind: 'checklist', items: [
              'Better at IMT / Conservatória Automóvel — public place, both witnesses',
              'Bank transfer — show confirmation immediately',
              'Simple contract (2 copies, full name/NIF of both parties + car registration + amount + date)',
              'NO cash > €3,000 (Lei 92/2017 — generally not allowed between private individuals)',
              'Handover of DUA + keys + documents in person'
            ]}
          ]},
          { id: 'p3', title: 'Registration to the new owner', content: [
            { kind: 'checklist', items: [
              '**Within 60 days** (by law) — register the transfer at IMT / Conservatória do Registo Automóvel / Espaço Automóvel in Loja do Cidadão',
              'Fee: €45-65 (online / in person)',
              'Documents: DUA, purchase and sale contract, CC/residence permit of both parties, IPO',
              '⚠️ If the seller has not handed over the DUA — you are not the owner, registration is impossible'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'scams',
      title: '🚩 Common scams',
      content: [
        { kind: 'checklist', items: [
          '**Clocked mileage**: compare with ACP report + interior wear',
          '**Lien on the car**: check Registo Automóvel (can be done free through ACP or IRN)',
          '**Vehicle under seizure**: SICV will show it',
          '**Fake VIN (tampered)**: check in different places (engine, pillar, plate) — they must match',
          '**Flood damage**: suspect it if the price is too good — check mats, electrical cables',
          '**“I am away, my nephew will hand it over”**: original DUA + notarised power of attorney',
          '**AliExpress-style fake dealers**: only via known dealerships / used-car dealers',
          '**“Let’s go for a drive, documents are in the bag, I’ll show you later”**: never'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'ACP Histórico', amountEURMin: 15, amountEURMax: 30 },
    { label: 'Carfax Portugal', amountEURMin: 20, amountEURMax: 40 },
    { label: 'Pre-purchase inspection', amountEURMin: 50, amountEURMax: 150 },
    { label: 'OBD-II scanner', amountEURMin: 20, amountEURMax: 40 },
    { label: 'Transfer registration (IMT)', amountEURMin: 45, amountEURMax: 65 }
  ],
  sources: [
    { title: 'IMT — SICV (car check)', url: 'https://portal.imt-ip.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ACP — Automóvel Club de Portugal', url: 'https://www.acp.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IRN — Registo Automóvel', url: 'https://justica.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
