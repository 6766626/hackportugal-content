export default {
  editorialVoice: 'hackportugal',
  id: 'carro-eletrico-vs-gasolina-2026',
  categoryId: 'auto_ownership',
  title: 'Buying an electric car vs petrol in 2026: total cost of ownership',
  tldr: 'In Portugal in 2026, an electric car is usually more expensive upfront: €30,000–€50,000 versus €20,000–€35,000 for a petrol compact/SUV. But a BEV pays no ISV or IUC, costs €3–€5/100 km at home, and on public chargers most often €5–€9/100 km. Petrol at €1.70–€1.85/l gives €8–€12/100 km plus IUC of €120–€300/year. A Fundo Ambiental voucher of up to €4,000 can change the calculation, but it depends on the budget and aviso conditions.',
  tags: ['electric car', 'iuc', 'charging', 'tco'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'baseline',
      title: '1. Compare not the showroom price, but the 5-year TCO',
      content: [
        { kind: 'paragraph', text: 'Total cost of ownership is the purchase price minus future resale value plus energy, taxes, insurance, servicing, tyres, parking and charging infrastructure.\n\nIn Portugal, the main gap in 2026 is this: an electric car costs more to buy, but each kilometre is cheaper and taxes are almost always lower.' },
        { kind: 'checklist', items: [
          'New BEV: usually €30,000–€50,000; city models are sometimes lower, family SUVs are often €40,000+.',
          'New petrol car: usually €20,000–€35,000 for a compact/crossover in the mainstream segment.',
          'BEV: ISV = €0 and IUC = €0 for a 100% electric passenger car.',
          'Petrol: ISV is already included in the price of a new car; IUC is paid annually and depends on engine capacity, CO₂ and year of registration.',
          'Electricity at home: approximately €3–€5/100 km with consumption of 16–20 kWh/100 km and a domestic tariff of €0.18–€0.25/kWh.',
          'Public Mobi.E charging: usually 1.5–2 times more expensive than at home because of CEME + OPC + energy + IVA; budget €5–€9/100 km.',
          'Petrol: €8–€12/100 km at 5.5–7 l/100 km and a price of €1.70–€1.85/l.',
          'Diesel may be cheaper than petrol on the motorway, but has higher risk costs: DPF, AdBlue, short urban trips and future restrictions.'
        ] }
      ]
    },
    {
      id: 'five-year-example',
      title: '2. Example calculation for 5 years and 15,000 km/year',
      content: [
        { kind: 'paragraph', text: 'Base scenario: 75,000 km over 5 years. An electric car at €38,000 versus a petrol car at €28,000. Excluding credit and resale value, the petrol car is €10,000 cheaper upfront, but its annual running costs are higher.' },
        { kind: 'checklist', items: [
          'BEV 70% at home + 30% public: average energy around €4.5–€6/100 km = €3,375–€4,500 for 75,000 km.',
          'BEV using only public chargers: €5–€9/100 km = €3,750–€6,750 for 75,000 km.',
          'Petrol: €8–€12/100 km = €6,000–€9,000 for 75,000 km.',
          'BEV IUC: €0 over 5 years.',
          'IUC for a petrol compact: as a rough guide €120–€300/year = €600–€1,500 over 5 years.',
          'BEV servicing: often €150–€300/year = €750–€1,500 over 5 years.',
          'Petrol servicing: often €250–€600/year = €1,250–€3,000 over 5 years.',
          'The 5-year operating-cost difference is usually €3,000–€7,000 in favour of the BEV, more if you drive a lot and charge at home.'
        ] },
        { kind: 'paragraph', text: 'Conclusion: if the electric car costs €10,000 more, you drive 10,000 km/year and you mainly charge at public stations, payback may not happen. If you drive 20,000 km/year, charge at home and receive €4,000 from Fundo Ambiental, a BEV often becomes cheaper over 4–6 years.' }
      ]
    },
    {
      id: 'charging-reality',
      title: '3. Charging: home decides the economics ⚡',
      content: [
        { kind: 'paragraph', text: 'The cheapest ownership model is a flat/house with a night tariff and the option to install a wallbox or a normal dedicated socket.\n\nIn Portugal this is especially important: the public Mobi.E network is convenient, but the tariff is not transparent for newcomers because the bill is made up of several parts.' },
        { kind: 'checklist', items: [
          'At home: check the potência contratada; for a wallbox you often need 6.9 kVA or more.',
          'In a condominium, installation is possible, but you must notify the administration and comply with technical rules; a separate meter is sometimes required.',
          'Wallbox with installation: usually €600–€1,500, more expensive with a long cable run from the board or electrical upgrades.',
          'A normal socket is suitable for low mileage, but it is slower and requires proper wiring.',
          'Publicly: you need a CEME contract or app/card; the final price depends on the operator, power, time and tariff.',
          'Fast DC chargers are convenient on the motorway, but they are the most expensive and accelerate battery wear if used constantly.',
          'On the A1/A2/A8/A22 motorways, plan charging stops in advance: in summer and on public holidays, queues are real.',
          'If you do not have home or workplace charging, budget not €3–€5/100 km, but closer to €6–€9/100 km.'
        ] },
        { kind: 'warning', text: 'Do not buy a BEV based only on the “cost of kWh at home” if you live in a rented flat without a parking space. In this scenario, the saving versus petrol falls sharply and day-to-day inconvenience rises.' }
      ]
    },
    {
      id: 'taxes-incentives',
      title: '4. Taxes and subsidies: where the real benefit is',
      content: [
        { kind: 'paragraph', text: 'For individuals, the main advantage of 100% electric is no ISV on purchase and no annual IUC. For petrol, ISV is included in the price of a new car, and IUC comes every year through Portal das Finanças. For hybrids, the rules are more complex: benefits depend on emissions, electric range and the type of hybrid; do not automatically count a plug-in as “like an electric car”.' },
        { kind: 'checklist', items: [
          'BEV passenger car: ISV €0.',
          'BEV passenger car: IUC €0.',
          'Petrol: IUC is often €120–€300/year for mainstream models, but may be higher for powerful SUVs.',
          'IVA is not recoverable for a private individual; for companies and ENI there may be separate rules, limits and tributação autónoma.',
          'Fundo Ambiental: in 2026, the guide figure for an individual is support of up to €4,000 for the purchase of a BEV, subject to the programme conditions.',
          'The subsidy is not automatic: you need an open aviso, budget availability, purchase documents and compliance with the car price limit (in the 2026 aviso, up to €38,500 for cars with up to 5 seats).',
          'Buying before the aviso opens or outside its conditions may not give you the right to payment.',
          'Fundo Ambiental money may run out before the deadline — treat the voucher as a bonus, not a guaranteed discount.'
        ] },
        { kind: 'warning', text: 'Check the Fundo Ambiental conditions specifically for the 2026 aviso: maximum car price, requirement to scrap an old vehicle, invoice date and application procedure may change from year to year.' }
      ]
    },
    {
      id: 'depreciation-insurance',
      title: '5. Do not forget resale value, insurance and risks',
      content: [
        { kind: 'paragraph', text: 'In 2026, the main uncertain element of TCO is residual value. Electric cars depreciate faster when new batteries appear and brands enter price wars, but popular models with a good battery and warranty sell well. The petrol car market is more familiar, but future environmental restrictions and an expensive fuel cycle weigh on value.' },
        { kind: 'checklist', items: [
          'Check the battery warranty: often 8 years or 160,000 km, but degradation conditions differ.',
          'Avoid BEVs without a clear charging, accident and battery-condition history.',
          'BEV insurance may be 5–20% more expensive because of the cost of body parts and the battery.',
          'Tyres on BEVs wear faster because of weight and torque; budget for a set every 30,000–50,000 km.',
          'A petrol car is easier to repair at any workshop, but oil, spark plugs, belts, clutch and exhaust remain regular costs.',
          'For Lisboa–Porto–Algarve trips, a BEV is already practical, but in winter/at 120 km/h range drops.',
          'If you often drive to Spain or France, check charging-card roaming and prices per kWh/min.',
          'Risk for tenants: the landlord/condominium may delay approval for charging.'
        ] }
      ]
    },
    {
      id: 'decision-rule',
      title: '6. Quick decision rule',
      content: [
        { kind: 'paragraph', text: 'An electric car is financially stronger when you drive a lot, charge at home/work and buy a model within the Fundo Ambiental limit. Petrol is more rational if the purchase budget is tight, mileage is low, there is no charging, or the car is needed as a simple “first Portuguese” purchase for 1–2 years.' },
        { kind: 'checklist', items: [
          'Choose a BEV if mileage is 15,000–25,000 km/year and you have home charging.',
          'Choose a BEV if the price difference after the Fundo Ambiental voucher is ≤ €5,000–€7,000.',
          'Choose a BEV if you live in a house or have a garagem/box with electricity.',
          'Choose petrol if mileage is < 8,000–10,000 km/year and there is no home charging.',
          'Choose petrol if the ownership plan is 1–2 years and the liquidity of a cheap car matters.',
          'Do not buy an expensive BEV “for savings” if you will charge almost only at DC stations.',
          'For a family SUV, calculate separately: the purchase difference may be €15,000+, and fuel does not always cover it.',
          'For a company/self-employed person, ask a contabilista to calculate IVA, depreciation and tributação autónoma — the result may differ from private ownership.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'New mainstream-segment BEV', amountEURMin: 30000, amountEURMax: 50000, note: 'Before dealer discounts and possible Fundo Ambiental; premium models cost more.' },
    { label: 'New petrol car', amountEURMin: 20000, amountEURMax: 35000, note: 'Compact or crossover in the mainstream segment; ISV is already in the price.' },
    { label: 'Fundo Ambiental for an individual', amountEUR: 4000, note: '2026 guide figure for a BEV; depends on the aviso, budget and price limit.' },
    { label: 'Electricity at home', amountEURMin: 3, amountEURMax: 5, note: 'Approximate cost per 100 km at 16–20 kWh/100 km.' },
    { label: 'Public charging', amountEURMin: 5, amountEURMax: 9, note: 'Approximate cost per 100 km; depends on CEME, OPC, power and time.' },
    { label: 'Petrol', amountEURMin: 8, amountEURMax: 12, note: 'Approximate cost per 100 km at 5.5–7 l/100 km.' },
    { label: 'Wallbox with installation', amountEURMin: 600, amountEURMax: 1500, note: 'Without complex electrical-wiring upgrades or increasing power.' },
    { label: 'IUC for a BEV', amountEUR: 0, note: 'For a 100% electric passenger car.' }
  ],
  sources: [
    { title: 'Fundo Ambiental — incentives for zero-emission vehicles', url: 'https://www.fundoambiental.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ACAP — car market and registration statistics in Portugal', url: 'https://www.acap.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Autoridade Tributária — IUC and ISV on Portal das Finanças', url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Pages/default.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ERSE — Electric Mobility Tariffs and Prices', url: 'https://www.erse.pt/mobilidade-eletrica/tarifas-e-precos/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-05' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
