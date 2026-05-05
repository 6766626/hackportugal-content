export default {
  editorialVoice: 'hackportugal',
  id: 'carro-eletrico-vs-gasolina-2026',
  categoryId: 'auto_ownership',
  title: 'Buying an electric car vs petrol in 2026: total cost of ownership',
  tldr: 'In Portugal in 2026 an electric car is usually more expensive up front: €30,000–€50,000 versus €20,000–€35,000 for a petrol compact/SUV. But a BEV pays no ISV and no IUC, does 100 km at home for €3–€5, and at public chargers more often €5–€9/100 km. Petrol at €1.70–€1.85/l gives €8–€12/100 km plus IUC €120–€300/year. A Fundo Ambiental voucher up to €4,000 may tip the maths, but depends on the budget and the aviso conditions.',
  tags: ['electric car', 'iuc', 'charging', 'tco'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'baseline',
      title: '1. Compare not the showroom price, but the 5-year TCO',
      content: [
        { kind: 'paragraph', text: 'Total cost of ownership is purchase minus future resale plus energy, taxes, insurance, servicing, tyres, parking and charging infrastructure. In Portugal the main split in 2026 is: an electric car is more expensive to buy, but cheaper per kilometre and almost always cheaper on taxes.' },
        { kind: 'checklist', items: [
          'New BEV: usually €30,000–€50,000; city models sometimes lower, family SUVs often €40,000+.',
          'New petrol car: usually €20,000–€35,000 for a mass-market compact/crossover.',
          'BEV: ISV = €0 and IUC = €0 for a 100% electric passenger car.',
          'Petrol: ISV is already included in the price of a new car; IUC is paid annually and depends on displacement, CO₂ and year of registration.',
          'Electricity at home: roughly €3–€5/100 km at 16–20 kWh/100 km and a household tariff of €0.18–€0.25/kWh.',
          'Public charging on Mobi.E: usually 1.5–2x more than at home due to CEME + OPC + energy + IVA; assume €5–€9/100 km.',
          'Petrol: €8–€12/100 km at 5.5–7 l/100 km and a price of €1.70–€1.85/l.',
          'Diesel can be cheaper than petrol on the motorway, but carries higher risks: DPF, AdBlue, short urban trips and future restrictions.'
        ] }
      ]
    },
    {
      id: 'five-year-example',
      title: '2. Example calculation over 5 years and 15,000 km/year',
      content: [
        { kind: 'paragraph', text: 'Base scenario: 75,000 km over 5 years. An electric car at €38,000 versus a petrol car at €28,000. Excluding finance and resale, the petrol car is €10,000 cheaper up front, but its annual running costs are higher.' },
        { kind: 'checklist', items: [
          'BEV 70% at home + 30% public: average energy about €4.5–€6/100 km = €3,375–€4,500 over 75,000 km.',
          'BEV only public charging: €5–€9/100 km = €3,750–€6,750 over 75,000 km.',
          'Petrol: €8–€12/100 km = €6,000–€9,000 over 75,000 km.',
          'IUC for BEV: €0 over 5 years.',
          'IUC for a petrol compact: assume €120–€300/year = €600–€1,500 over 5 years.',
          'BEV servicing: often €150–€300/year = €750–€1,500 over 5 years.',
          'Petrol servicing: often €250–€600/year = €1,250–€3,000 over 5 years.',
          'The difference in operating costs over 5 years is usually €3,000–€7,000 in favour of a BEV, more if you drive a lot and charge at home.'
        ] },
        { kind: 'paragraph', text: 'Conclusion: if the electric car is €10,000 more expensive, you drive 10,000 km/year and mostly use public stations, breakeven may not happen. If you drive 20,000 km/year, charge at home and received a €4,000 Fundo Ambiental, a BEV often becomes cheaper over 4–6 years.' }
      ]
    },
    {
      id: 'charging-reality',
      title: '3. Charging: home makes the economics work ⚡',
      content: [
        { kind: 'paragraph', text: 'The cheapest ownership model is a flat/house with a night tariff and the ability to install a wallbox or a dedicated socket. In Portugal this is especially important: the public Mobi.E network is convenient, but pricing is opaque for newcomers because the bill is composed of several parts.' },
        { kind: 'checklist', items: [
          'At home: check the contracted power (potência contratada); a wallbox often needs 6.9 kVA or more.',
          'In a condominium installation is possible, but you must notify the administration and follow technical rules; a separate meter is sometimes required.',
          'Wallbox with installation: usually €600–€1,500, higher with a long cable run from the panel or an electrical upgrade.',
          'A regular socket is fine for low mileage, but slower and requires proper wiring.',
          'Public: you need a CEME contract or an app/card; the final price depends on the operator, power, time and tariff.',
          'Fast DC chargers are convenient on motorways, but the most expensive and they accelerate battery wear if used constantly.',
          'On A1/A2/A8/A22 plan charging stops in advance: in summer and on holidays queues are real.',
          'If you have no home or workplace charging, budget not €3–€5/100 km but closer to €6–€9/100 km.'
        ] },
        { kind: 'warning', text: 'Do not buy a BEV based only on the “cost per kWh at home” if you live in a rented flat without a parking space. In this scenario the saving versus petrol drops sharply, and day-to-day inconvenience rises.' }
      ]
    },
    {
      id: 'taxes-incentives',
      title: '4. Taxes and subsidies: where the real relief is',
      content: [
        { kind: 'paragraph', text: 'For individuals the main benefit of 100% electric is the absence of ISV at purchase and IUC annually. For petrol, ISV is included in the new-car price, and IUC arrives every year via the Portal das Finanças. For hybrids the rules are more complex: incentives depend on emissions, electric range and hybrid type; do not assume a plug-in is automatically “like an electric car”.' },
        { kind: 'checklist', items: [
          'BEV passenger car: ISV €0.',
          'BEV passenger car: IUC €0.',
          'Petrol: IUC is often €120–€300/year for mass-market models, but can be higher for powerful SUVs.',
          'IVA is not recoverable for a private individual; for companies and ENI there can be separate rules, limits and tributação autónoma.',
          'Fundo Ambiental: in 2026 the indication for an individual is support up to €4,000 for buying a BEV, subject to programme conditions.',
          'The subsidy is not automatic: you need an open aviso, available budget, purchase documents and compliance with the vehicle price cap.',
          'Buying before the opening of the aviso/outside its conditions may not entitle you to payment.',
          'Fundo Ambiental money can run out before the deadline — treat the voucher as a bonus, not a guaranteed discount.'
        ] },
        { kind: 'warning', text: 'Check Fundo Ambiental conditions specifically for the 2026 aviso: maximum vehicle price, scrappage requirement for an old car, invoice date and application procedure can change year to year.' }
      ]
    },
    {
      id: 'depreciation-insurance',
      title: '5. Do not forget resale, insurance and risks',
      content: [
        { kind: 'paragraph', text: 'In 2026 the biggest uncertain element of TCO is residual value. Electric cars depreciate faster when new batteries arrive and brands wage price wars, but popular models with a sound battery and warranty sell well. For petrol cars the market is more familiar, but future environmental restrictions and an expensive fuel cycle put pressure on value.' },
        { kind: 'checklist', items: [
          'Check the battery warranty: often 8 years or 160,000 km, but degradation terms differ.',
          'Avoid BEVs without a clear history of charging, accidents and battery condition.',
          'BEV insurance can be 5–20% pricier due to the cost of body parts and the battery.',
          'BEV tyres wear faster due to weight and torque; budget a set every 30,000–50,000 km.',
          'A petrol car is easier to repair in any workshop, but oil, spark plugs, belts, clutch and exhaust remain regular expenses.',
          'For Lisboa–Porto–Algarve trips a BEV is already practical, but in winter/at 120 km/h range decreases.',
          'If you often drive to Spain or France, check roaming for charging cards and prices per kWh/min.',
          'For renters there is a risk: the landlord/condominium can delay charger approval.'
        ] }
      ]
    },
    {
      id: 'decision-rule',
      title: '6. A quick decision rule',
      content: [
        { kind: 'paragraph', text: 'An electric car is financially stronger when you drive a lot, charge at home/at work and buy a model within the Fundo Ambiental limit. Petrol is more rational if the purchase budget is tight, mileage is small, there is no charging, or the car is needed as a simple “first Portuguese” purchase for 1–2 years.' },
        { kind: 'checklist', items: [
          'Choose a BEV if you drive 15,000–25,000 km/year and have home charging.',
          'Choose a BEV if the price difference after a Fundo Ambiental voucher is ≤ €5,000–€7,000.',
          'Choose a BEV if you live in a house or have a garage/box with electricity.',
          'Choose petrol if mileage is < 8,000–10,000 km/year and there is no home charging.',
          'Choose petrol if the ownership plan is 1–2 years and liquidity of a cheap car matters.',
          'Do not buy an expensive BEV “for the savings” if you will charge almost only on DC stations.',
          'For a family SUV calculate separately: the purchase gap can be €15,000+, and fuel does not always cover it.',
          'For a company/self-employed, ask your contabilista to calculate IVA, depreciation and tributação autónoma — the result can differ from private ownership.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'New mass-market BEV', amountEURMin: 30000, amountEURMax: 50000, note: 'Before dealer discounts and possible Fundo Ambiental; premium models are more expensive.' },
    { label: 'New petrol car', amountEURMin: 20000, amountEURMax: 35000, note: 'Mass-market compact or crossover; ISV already in the price.' },
    { label: 'Fundo Ambiental for individuals', amountEUR: 4000, note: '2026 indication for BEV; depends on the aviso, budget and price cap.' },
    { label: 'Home electricity', amountEURMin: 3, amountEURMax: 5, note: 'Approximate per 100 km at 16–20 kWh/100 km.' },
    { label: 'Public charging', amountEURMin: 5, amountEURMax: 9, note: 'Approximate per 100 km; depends on CEME, OPC, power and time.' },
    { label: 'Petrol', amountEURMin: 8, amountEURMax: 12, note: 'Approximate per 100 km at 5.5–7 l/100 km.' },
    { label: 'Wallbox with installation', amountEURMin: 600, amountEURMax: 1500, note: 'Without complex rewiring or power upgrade.' },
    { label: 'IUC for BEV', amountEUR: 0, note: 'For a 100% electric passenger car.' }
  ],
  sources: [
    { title: 'Fundo Ambiental — incentives for zero-emission vehicles', url: 'https://www.fundoambiental.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ACAP — car market and registration statistics in Portugal', url: 'https://www.acap.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Autoridade Tributária — IUC and ISV on Portal das Finanças', url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Pages/default.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ERSE — Tariffs and Prices for Electric Mobility', url: 'https://www.erse.pt/mobilidade-eletrica/tarifas-e-precos/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-05' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
