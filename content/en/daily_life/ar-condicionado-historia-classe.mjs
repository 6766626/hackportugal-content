export default {
  editorialVoice: 'hackportugal',
  id: 'ar-condicionado-historia-classe',
  categoryId: 'daily_life',
  title: 'Appliance energy efficiency class: A++ vs A — what to buy',
  tldr: 'In 2026, the old A+, A++, A+++ can no longer be read as “better than A”: for fridges, washing machines, dishwashers, TVs and lamps, the new EU A–G scale applies, where A is the maximum. An old A++ fridge may be a new E/F. The price difference for A/B versus D/E is often 50%, but with Portuguese electricity at around €0.20–0.25/kWh, savings on a fridge, tumble dryer or ar condicionado can be €100–300/year. Look at kWh/year, the EPREL QR code and the mandatory etiqueta energética.',
  tags: ['energy', 'a++', 'appliances', 'dgeg'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'new-scale',
      title: '1. Forget the “A++ is better than A” logic',
      content: [
        { kind: 'paragraph', text: 'In the EU, the old scale with pluses has gradually been replaced by a simple A–G scale. In the new system, A is the most efficient class and G is the worst. There are no more pluses for categories that have already been rescaled.' },
        { kind: 'paragraph', text: 'The main trap in shops and on OLX/Facebook Marketplace: an old A++ is not the same as a new A. For fridges, freezers, washing machines, washer-dryers, dishwashers, televisions/monitors and light sources, the new etiqueta energética shows A–G and a QR code linking to the EPREL database.' },
        { kind: 'checklist', items: [
          'New A is genuinely top class, often expensive and rare.',
          'New B/C is usually the best balance of price and consumption.',
          'New D/E is acceptable for a budget purchase, but calculate the kWh.',
          'Old A+++ often corresponds roughly to new C/D, but not always.',
          'Old A++ may turn out to be new D/E/F — check the model.',
          'Old A+ for a fridge or washing machine in 2026 is usually a bad sign.',
          'If the label has no EPREL QR code for a category where it should have one, ask for the ficha do produto or do not buy.'
        ] },
        { kind: 'warning', text: 'For ar condicionado the transition is more complex: in the Portuguese market, old-style A+++–D labels are still found for some air conditioners. Therefore compare not the letter, but SEER/SCOP and the annual kWh consumption on the label. Do not compare A++ on an air conditioner directly with A on a fridge or washing machine.' }
      ]
    },
    {
      id: 'read-label',
      title: '2. How to read the etiqueta energética in Worten, MediaMarkt and Leroy Merlin',
      content: [
        { kind: 'paragraph', text: 'The class letter is a quick filter, but the decision should be based on consumption. The label always has a numerical indicator: kWh/year, kWh/100 cycles or kWh/1000 hours. This is what turns into your EDP, Galp, Iberdrola, Endesa or Goldenergy bills.' },
        { kind: 'checklist', items: [
          'Fridge/freezer: look at kWh/year, volume in litres and noise in dB.',
          'Washing machine: kWh/100 Eco 40–60 cycles, water consumption/cycle, capacity in kg.',
          'Dishwasher: kWh/100 Eco cycles, litres of water, Eco programme duration.',
          'Tumble dryer: kWh/100 cycles; a heat pump is almost always better value than a condenser dryer.',
          'Television: kWh/1000 hours for SDR and separately HDR — HDR can consume noticeably more.',
          'Ar condicionado: look at SEER for cooling, SCOP for heating, kWh/year and the climate zone.',
          'Noise: for a flat with poor sound insulation in Portugal, the difference between 39 dB and 45 dB at night matters more than it seems.',
          'Size: an oversized fridge or air conditioner eats up the savings from a higher class.'
        ] },
        { kind: 'paragraph', text: 'If you buy online, the seller must show the energy efficiency class and ficha de informação do produto next to the price. For new models, look for the QR code: it leads to the European EPREL database, where you can check the official parameters.' }
      ]
    },
    {
      id: 'money',
      title: '3. Calculating the money: when A/B pays for itself',
      content: [
        { kind: 'paragraph', text: 'In Portugal, household electricity in 2026 usually comes to around €0.20–0.25/kWh including the tariff, network charges and IVA, but the exact price depends on potência contratada, the simples/bi-horário tariff and the supplier. For a quick estimate, multiply the annual kWh difference by €0.23.' },
        { kind: 'checklist', items: [
          'Formula: annual saving = kWh difference × your price per kWh.',
          'If the appliance costs €200 more and saves €80/year — the payback period is 2.5 years.',
          'If the appliance costs €400 more and saves €40/year — the payback period is 10 years, usually not worth it.',
          'A fridge runs 24/7: the class almost always matters.',
          'A tumble dryer and ar condicionado can deliver the biggest savings if used often.',
          'A washing machine and dishwasher pay back more slowly if you run them 2–3 times a week.',
          'For a rented flat for 1 year, do not overpay for a top A if you are not taking the appliance with you.',
          'For your own home for 5–10 years, take at least B/C where the budget allows.'
        ] },
        { kind: 'paragraph', text: 'Example: a D fridge consumes 220 kWh/year, a similar B consumes 120 kWh/year. Difference 100 kWh × €0.23 = €23/year. A €250 premium will pay back in roughly 11 years — questionable. But an old ar condicionado or tumble dryer may differ by 500–1000 kWh/year: that is already €115–230/year.' }
      ]
    },
    {
      id: 'what-to-buy',
      title: '4. What to buy by category in 2026',
      content: [
        { kind: 'substeps', items: [
          { id: 'fridge', title: 'Fridge and freezer', content: [
            { kind: 'paragraph', text: 'Choose a new B/C if the price is reasonable. A is good, but the premium often does not pay back. For a rental and a small flat, D is fine if consumption is within reasonable kWh/year and the appliance is new.' },
            { kind: 'warning', text: 'Do not buy an old A+/A++ fridge “cheaply” without checking kWh/year. In Portugal, heat and kitchens without air conditioning make old fridges especially hungry.' }
          ] },
          { id: 'washer-dishwasher', title: 'Washing machine and dishwasher', content: [
            { kind: 'paragraph', text: 'For a family, B/C models with a good load capacity are worthwhile. For one person, the difference between B and D may be less than €20–40/year, so the warranty, noise and service matter more.' }
          ] },
          { id: 'dryer', title: 'Tumble dryer', content: [
            { kind: 'paragraph', text: 'If you need a tumble dryer regularly in winter in a damp flat in Lisbon, Porto or Braga, choose a heat pump model. It is more expensive, but the saving can be three figures per year.' }
          ] },
          { id: 'ac', title: 'Ar condicionado / bomba de calor', content: [
            { kind: 'paragraph', text: 'For an air conditioner, look at SEER/SCOP, not only the letter. In Portugal, a split unit with inverter and high SCOP is often worthwhile as heating too: it is cheaper to run than an oil-filled radiator or a cheap electric heater.' },
            { kind: 'warning', text: 'A split-system installation must be done by a certified installer; for equipment with fluorinated gases, documents, warranty and instalação certificada are important. Before buying for a rented flat, get written permission from the senhorio and, if needed, the condomínio.' }
          ] },
          { id: 'tv', title: 'Television', content: [
            { kind: 'paragraph', text: 'For a TV, the class matters less than size and brightness. A large 65–75″ screen can consume much more, even if the class is fairly good. Look at kWh/1000 h SDR/HDR.' }
          ] }
        ] }
      ]
    },
    {
      id: 'documents-and-checks',
      title: '5. Documents, warranty and checks before payment',
      content: [
        { kind: 'paragraph', text: 'In Portugal, a new consumer product usually has a 3-year legal warranty. For second-hand goods bought from a professional seller, the period may be reduced by agreement, but not below the legal minimum. When buying from a private individual on OLX, there is almost no such protection.' },
        { kind: 'checklist', items: [
          'Ask for a fatura com NIF — without an invoice, warranty and returns are more difficult.',
          'Check the etiqueta energética and ficha do produto before payment.',
          'Scan the EPREL QR code if there is one on the label.',
          'Compare kWh, not only the class letter.',
          'Check dimensions: Portuguese kitchens are often narrow and lifts small.',
          'Clarify delivery to the flat, not only to the building entrance.',
          'Clarify recolha do equipamento antigo — collection of the old appliance.',
          'For ar condicionado, get an orçamento de instalação in writing.',
          'Check whether installation is included in the warranty and who is responsible for gas leaks/drainage.',
          'Do not trust an advert saying “classe A++ saves 70%” if there is no official label.'
        ] },
        { kind: 'warning', text: 'A certificado energético from ADENE/DGEG relates to buildings and property sale/rental adverts, not to a fridge or washing machine. For household appliances, what is mandatory is the EU etiqueta energética and the product information sheet; for an air conditioner, certified installation is additionally important.' }
      ]
    }
  ],
  costs: [
    { label: 'Electricity price benchmark for calculation', amountEURMin: 0.20, amountEURMax: 0.25, note: '€/kWh for a household customer including taxes; check your contrato de eletricidade' },
    { label: 'Typical premium for class A/B instead of D/E', amountEURMin: 150, amountEURMax: 600, note: 'Depends on the category: lower for a fridge, higher for a tumble dryer and ar condicionado' },
    { label: 'Potential saving on an energy-intensive appliance', amountEURMin: 100, amountEURMax: 300, note: 'Per year with frequent use of a tumble dryer, old fridge or ar condicionado; calculate by kWh' },
    { label: 'Removal of old appliance on delivery', amountEURMin: 0, amountEURMax: 30, note: 'Free or for a small fee with many chains when buying new equipment' }
  ],
  sources: [
    {
      title: 'DGEG: energy efficiency, labels and consumer information',
      url: 'https://www.dgeg.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DECO PROteste: practical guide to the energy label and choosing household appliances',
      url: 'https://www.deco.proteste.pt',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'European Commission: EU energy labels and product database EPREL',
      url: 'https://energy-efficient-products.ec.europa.eu/ecodesign-and-energy-label/energy-label-and-ecodesign/product-database_en',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Regulation (EU) 2017/1369: energy labelling framework',
      url: 'https://eur-lex.europa.eu/legal-content/PT/TXT/?uri=CELEX:32017R1369',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
