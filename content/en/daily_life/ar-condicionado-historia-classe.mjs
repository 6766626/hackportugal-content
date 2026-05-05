export default {
  editorialVoice: 'hackportugal',
  id: 'ar-condicionado-historia-classe',
  categoryId: 'daily_life',
  title: 'Energy efficiency class of appliances: A++ vs A — what to buy',
  tldr: 'In 2026 the old A+, A++, A+++ can no longer be read as “better than A”: for fridges, washing machines, dishwashers, TVs and lamps the new EU A–G scale applies, where A is the maximum. An old A++ fridge can be a new E/F. The price gap for A/B versus D/E is often 50%, but with Portuguese electricity at about €0.20–€0.25/kWh the savings on a fridge, dryer or ar condicionado can be €100–€300/year. Check kWh/year, the EPREL QR code and the mandatory energy label.',
  tags: ['energy', 'a++', 'appliances', 'dgeg'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'new-scale',
      title: '1. Forget the “A++ is better than A” logic',
      content: [
        { kind: 'paragraph', text: 'In the EU the old scale with pluses has been gradually replaced by a simple A–G scale. In the new system A is the most efficient class, G is the worst. There are no more pluses for categories that have already been rescaled.' },
        { kind: 'paragraph', text: 'The main trap in shops and on OLX/Facebook Marketplace: an old A++ is not the same as the new A. For fridges, freezers, washing machines, washer-dryers, dishwashers, TVs/monitors and light sources the new energy label shows A–G and a QR code to the EPREL database.' },
        { kind: 'checklist', items: [
          'New A is truly top-tier, often expensive and rare.',
          'New B/C is usually the best balance of price and consumption.',
          'New D/E is fine for a budget purchase, but calculate the kWh.',
          'Old A+++ often corresponds roughly to new C/D, but not always.',
          'Old A++ can turn out to be new D/E/F — check the exact model.',
          'Old A+ for a fridge or washing machine in 2026 is usually a bad sign.',
          'If the label lacks an EPREL QR code for a category that should have one, ask for the product information sheet or do not buy.'
        ] },
        { kind: 'warning', text: 'For ar condicionado the transition is trickier: in the Portuguese market you can still find old-style A+++–D labels on some air conditioners. So compare not the letter, but SEER/SCOP and the annual kWh on the label. Do not compare A++ on an air conditioner directly with A on a fridge or washing machine.' }
      ]
    },
    {
      id: 'read-label',
      title: '2. How to read the energy label at Worten, MediaMarkt and Leroy Merlin',
      content: [
        { kind: 'paragraph', text: 'The class letter is a quick filter, but you should decide based on consumption. The label always has a numeric indicator: kWh/year, kWh/100 cycles or kWh/1000 h. That is what turns into your bills from EDP, Galp, Iberdrola, Endesa or Goldenergy.' },
        { kind: 'checklist', items: [
          'Fridge/freezer: check kWh/year, volume in litres and noise in dB.',
          'Washing machine: kWh/100 Eco 40–60 cycles, water per cycle, capacity in kg.',
          'Dishwasher: kWh/100 Eco cycles, litres of water, Eco programme duration.',
          'Tumble dryer: kWh/100 cycles; a heat-pump model is almost always more economical than a condenser one.',
          'TV: kWh/1000 h for SDR and separately for HDR — HDR can draw noticeably more.',
          'Ar condicionado: look at SEER for cooling, SCOP for heating, kWh/year and the climate zone.',
          'Noise: in a flat with poor sound insulation in Portugal, the difference between 39 dB and 45 dB at night matters more than it seems.',
          'Size: an oversized fridge or air conditioner can eat up the savings from a higher class.'
        ] },
        { kind: 'paragraph', text: 'If you buy online, the seller must display the energy efficiency class and the product information sheet next to the price. For new models look for the QR code: it leads to the European EPREL database where you can verify the official parameters.' }
      ]
    },
    {
      id: 'money',
      title: '3. Counting the money: when A/B pays off',
      content: [
        { kind: 'paragraph', text: 'In Portugal, household electricity in 2026 typically works out at about €0.20–€0.25/kWh including tariff, network charges and VAT, but the exact price depends on contracted power (potência contratada), single-rate/bi-horário tariff and the supplier. For a quick estimate, multiply the annual kWh difference by €0.23.' },
        { kind: 'checklist', items: [
          'Formula: yearly saving = kWh difference × your price per kWh.',
          'If an appliance costs €200 more and saves €80/year — the payback is 2.5 years.',
          'If an appliance costs €400 more and saves €40/year — the payback is 10 years, often not worth it.',
          'A fridge runs 24/7: the class almost always matters.',
          'A dryer and ar condicionado can deliver the biggest savings if used often.',
          'A washing machine and dishwasher pay back more slowly if you run them 2–3 times a week.',
          'For a 1-year rental flat do not overpay for a top A if you are not taking the appliance with you.',
          'For your own home over 5–10 years, choose at least B/C where the budget allows.'
        ] },
        { kind: 'paragraph', text: 'Example: a D-class fridge uses 220 kWh/year, a similar B-class one — 120 kWh/year. The difference is 100 kWh × €0.23 = €23/year. A €250 premium pays back in roughly 11 years — questionable. But an old ar condicionado or a dryer can differ by 500–1000 kWh/year: that is €115–€230/year.' }
      ]
    },
    {
      id: 'what-to-buy',
      title: '4. What to buy by category in 2026',
      content: [
        { kind: 'substeps', items: [
          { id: 'fridge', title: 'Fridge and freezer', content: [
            { kind: 'paragraph', text: 'Go for a new B/C if the price is sensible. A is good, but the premium often does not pay back. For rentals and a small flat, D is acceptable if consumption is within reasonable kWh/year and the appliance is new.' },
            { kind: 'warning', text: 'Do not buy an old A+/A++ fridge “cheap” without checking kWh/year. Portugal’s heat and un-air-conditioned kitchens make old fridges particularly power-hungry.' }
          ] },
          { id: 'washer-dishwasher', title: 'Washing machine and dishwasher', content: [
            { kind: 'paragraph', text: 'For a family, B/C with good capacity is cost-effective. For a single person, the difference between B and D may be under €20–€40/year, so warranty, noise and service matter more.' }
          ] },
          { id: 'dryer', title: 'Tumble dryer', content: [
            { kind: 'paragraph', text: 'If you need a dryer regularly in winter in a damp flat in Lisbon, Porto or Braga, choose a heat-pump model. It costs more, but the yearly saving can be in the triple digits.' }
          ] },
          { id: 'ac', title: 'Ar condicionado / bomba de calor', content: [
            { kind: 'paragraph', text: 'For an air conditioner, look at SEER/SCOP rather than just the letter. In Portugal, a split with inverter and high SCOP is often worthwhile as heating too: it is cheaper to run than an oil-filled radiator or a cheap electric heater.' },
            { kind: 'warning', text: 'A split system must be installed by a certified installer; for equipment with fluorinated gases, documentation, warranty and certified installation are important. Before buying for a rental flat, obtain written permission from the landlord (senhorio) and, if needed, the condomínio.' }
          ] },
          { id: 'tv', title: 'TV', content: [
            { kind: 'paragraph', text: 'For TVs, class matters less than size and brightness. A large 65–75″ screen can consume far more, even if the class is decent. Check kWh/1000 h for SDR/HDR.' }
          ] }
        ] }
      ]
    },
    {
      id: 'documents-and-checks',
      title: '5. Documents, warranty and checks before paying',
      content: [
        { kind: 'paragraph', text: 'In Portugal, a new consumer product usually has a statutory 3-year warranty. For a used product bought from a professional seller, the term may be reduced by agreement, but not below the legal minimum. When buying from a private individual on OLX, you have almost no such protection.' },
        { kind: 'checklist', items: [
          'Ask for an invoice with NIF — without an invoice, warranty and returns are harder.',
          'Check the energy label and the product information sheet before paying.',
          'Scan the EPREL QR code if it is on the label.',
          'Compare kWh, not just the class letter.',
          'Check dimensions: Portuguese kitchens are often narrow, lifts small.',
          'Confirm delivery to your flat, not just to the building entrance.',
          'Confirm recolha do equipamento antigo — removal of the old appliance.',
          'For ar condicionado, get a written installation quote.',
          'Check whether installation is covered by the warranty and who is responsible for gas leakage/drainage.',
          'Do not trust an advert saying “classe A++ saves 70%” without an official label.'
        ] },
        { kind: 'warning', text: 'The Certificado energético from ADENE/DGEG applies to buildings and property sale/rental listings, not to a fridge or washing machine. For appliances the mandatory items are the EU energy label and the product information sheet; for an air conditioner, certified installation is additionally important.' }
      ]
    }
  ],
  costs: [
    { label: 'Electricity price benchmark for calculation', amountEURMin: 0.20, amountEURMax: 0.25, note: '€/kWh for a household customer including taxes; check your contrato de eletricidade' },
    { label: 'Typical premium for class A/B instead of D/E', amountEURMin: 150, amountEURMax: 600, note: 'Depends on the category: smaller for a fridge, larger for a dryer and ar condicionado' },
    { label: 'Potential saving on an energy-hungry appliance', amountEURMin: 100, amountEURMax: 300, note: 'Per year with frequent use of a dryer, an old fridge or ar condicionado; calculate using kWh' },
    { label: 'Removal of old appliance upon delivery', amountEURMin: 0, amountEURMax: 30, note: 'Free or for a small fee at many chains when you buy new equipment' }
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
      title: 'DECO PROteste: practical guide to the energy label and choosing appliances',
      url: 'https://www.deco.proteste.pt',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'European Commission: EU energy labels and product database EPREL',
      url: 'https://eprel.ec.europa.eu/screen/home',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Regulation (EU) 2017/1369: framework for energy labelling',
      url: 'https://eur-lex.europa.eu/legal-content/PT/TXT/?uri=CELEX:32017R1369',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 180
}
