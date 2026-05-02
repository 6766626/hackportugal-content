export default {
  editorialVoice: 'hackportugal',
  id: 'relocation-shipping',
  categoryId: 'before_arrival',
  title: 'Shipping your belongings to Portugal — container, companies, luggage',
  tldr: 'Options: (1) **sea container** 20\' (33 m³) — €3,000-5,000 from Moscow/Kyiv, 4-8 weeks. 40\' — €4,500-7,500, 2 containers for a family; (2) **groupage cargo (LCL)** from €600 for 5 m³; (3) **car transporter / furniture van** across Europe — €2,000-4,000 from Poland/Germany; (4) **EU move** — specialist movers €800-2,500; (5) **airline luggage** — from €50 per extra suitcase. Customs: personal belongings duty-free when relocating (Isenção por transferência de residência), AIMA certificate + invoice required.',
  tags: ['relocation', 'container', 'shipping', 'customs'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'options',
      title: 'All shipping options',
      content: [
        { kind: 'substeps', items: [
          { id: 'o1', title: '🚢 Sea container (from non-EU)', content: [
            { kind: 'checklist', items: [
              '**20\' (33 m³)**: roughly for a 2-bedroom flat — €3,000-5,000 to Lisbon, 4-8 weeks',
              '**40\' (67 m³)**: 3-4-bedroom flat with a car — €4,500-7,500',
              'Port of arrival: Porto de Lisboa or Porto de Leixões (Porto)',
              'Major freight forwarders: FlyDove Cargo, Allied Pickfords, AGS Movers, Santa Fe Relocation',
              'Includes: loading/unloading, sea freight, insurance, customs clearance',
              'Does NOT include: duties and taxes (for personal belongings — free with Isenção)',
              'Best: “door-to-door” package (“turnkey”), they pack/unpack themselves'
            ]}
          ]},
          { id: 'o2', title: '📦 Groupage cargo (LCL)', content: [
            { kind: 'checklist', items: [
              'If you have ≤ 5-10 m³ of belongings — your shipment is placed in a shared container with others',
              'From €600 for 5 m³ (Moscow-Lisbon), €900 for 10 m³',
              'Longer timeframe — 6-10 weeks',
              'Higher risk of damage',
              'Service providers: Gebrüder Weiss, Schenker, AGS Seven Seas Worldwide'
            ]}
          ]},
          { id: 'o3', title: '🚚 Van / car transporter across the EU', content: [
            { kind: 'checklist', items: [
              'From Poland, Germany, the Netherlands: €2,000-4,000 (depends on volume)',
              'Faster than a container — 1-2 weeks',
              'No customs (EU ↔ EU)',
              'Companies: KAM Transport (RU-PT), PL-specialist providers',
              'For a car: Berniaga, Voitures Occasion car transporters — €1,500-2,500'
            ]}
          ]},
          { id: 'o4', title: '🏠 EU-EU move (expensive, convenient)', content: [
            { kind: 'checklist', items: [
              'Mudanças Viegas, Grupo Mudabem, Martin Transportes',
              '€800-2,500 for a full move (packing, transport, unpacking)',
              'From 2-5 days',
              'Suitable if you are moving from Spain / France / Germany'
            ]}
          ]},
          { id: 'o5', title: '✈️ Airline luggage', content: [
            { kind: 'checklist', items: [
              '2-3 suitcases (50+50+50 kg = 150 kg) — extra luggage €50-120/bag',
              'For a minimal move by 1-2 passengers',
              'Best: TAP / Ryanair / WizzAir + buy extra luggage through the website (cheaper)',
              'Do not ship large furniture / appliances',
              'Restrictions: lithium batteries only in hand luggage, liquids ≤ 100 ml'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'customs',
      title: '🛃 Customs — Isenção por Transferência de Residência',
      content: [
        { kind: 'paragraph', text: 'When moving to Portugal, you do NOT pay import duties or IVA on personal belongings if the conditions of Regulamento 1186/2009 EU are met.' },
        { kind: 'checklist', items: [
          '✅ You are **actually** changing your residence (confirmed by a residence permit / certificado consular / MNE)',
          '✅ The belongings are your personal items, used for ≥ 6 months before the move',
          '✅ They are imported within 12 months after becoming a resident',
          '✅ They will not be sold in the first 12 months after import',
          '❌ Does not work for: alcohol, tobacco, commercial goods, weapons, medicines in large quantities',
          '💼 The certificate of change of residence is obtained at the Portuguese consulate in the country of departure BEFORE the move, or at AT PT on arrival'
        ]}
      ]
    },
    {
      id: 'documents-customs',
      title: '📋 Documents for customs',
      content: [
        { kind: 'checklist', items: [
          'Full inventory (Inventário completo): detailed list of belongings with estimated value + photos',
          'Packing list (attached to the inventory)',
          'Transport invoice (from the carrier)',
          'Certificado de transferência de residência (from the MNE consulate or AIMA)',
          'Passport + residence permit',
          'Proof of address in PT (atestado de residência / contract)',
          'Bill of lading (sea waybill) or CMR (road consignment note)',
          'If necessary — CITES permits for exotic items, rules for antiques'
        ]}
      ]
    },
    {
      id: 'car',
      title: '🚗 Shipping a car',
      content: [
        { kind: 'checklist', items: [
          'Car = separate category ("ISV" = Imposto sobre Veículos)',
          '**Reduced-duty import when relocating** (Isenção ISV): the car must have been yours for ≥ 6 months before the move, bought in the country of departure',
          'Transport: car transporter (€1,500-2,500 EU-EU) or RoRo by sea (€1,200-2,000 non-EU → PT)',
          'Registration with IMT: €270 + booking check + IPO',
          'Temporary insurance for 30 days — €80-150',
          'Alternative: import without Isenção = full ISV (from €2,000 for a small car to €10,000+ for a BMW)',
          '⚠️ Electric vehicles: 0% ISV when relocating, plus reduced IUC',
          '📄 Separate guide: “car-import” in the car category'
        ]}
      ]
    },
    {
      id: 'timeline',
      title: '📅 Timeline',
      content: [
        { kind: 'checklist', items: [
          '**T-3 months**: inventory, compare quotes (at least 3 companies), book container',
          '**T-2 months**: packing, documents for customs',
          '**T-1 month**: loading at the place of departure, dispatch',
          '**T-0**: your own move (by air), obtaining PT residence permit',
          '**T+1–2 months**: shipment arrives in Leixões/Lisboa, customs clearance',
          '**T+2–3 months**: delivery, unpacking'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Tips',
      content: [
        { kind: 'checklist', items: [
          '📊 **3+ quotes** from different companies — difference of 30-50%',
          '🔍 **Check reviews**: Google Reviews, Trustpilot, Facebook groups russia-pt',
          '💰 **Cargo insurance** (“all risks”, All Risks) — 1-3% of the value of belongings. Essential for a container',
          '📸 **Photograph everything** before loading — damage is disputed through insurance',
          '🔌 **220 V appliances**: sockets in PT — Europlug + Schuko. Adaptors for UK/US appliances',
          '📏 **Volume** — calculate it accurately. Underestimation → you will have to pay an extra €300-500/m³',
          '🧳 **Air luggage**: take valuables with you (documents, laptop, jewellery) — a container can get lost / stuck',
          '🐕 **Animals** separately: they are not transported with furniture. See the “pet-import” guide',
          '🏢 **Storage in PT**: if the residence permit is delayed — temporary storage warehouse in Lisbon €50-100/m³/month'
        ]}
      ]
    }
  ],
  costs: [
    { label: '20\' container RU/UA → PT', amountEURMin: 3000, amountEURMax: 5000 },
    { label: '40\' container', amountEURMin: 4500, amountEURMax: 7500 },
    { label: 'LCL 5 m³', amountEUR: 600 },
    { label: 'EU-EU move', amountEURMin: 800, amountEURMax: 2500 },
    { label: 'Car transporter for a car', amountEURMin: 1500, amountEURMax: 2500 },
    { label: 'Cargo insurance', amountEUR: 0, note: '1-3% of value' },
    { label: 'Extra airline luggage', amountEURMin: 50, amountEURMax: 120, note: 'per bag' }
  ],
  timelineDaysMin: 30,
  timelineDaysMax: 90,
  sources: [
    { title: 'Autoridade Tributária — exemption on transfer of residence', url: 'https://info.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Regulation (EC) 1186/2009 — customs duty reliefs', url: 'https://eur-lex.europa.eu/legal-content/PT/TXT/?uri=CELEX:32009R1186', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IMT — vehicle imports', url: 'https://www.imt-ip.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}
