export default {
  editorialVoice: 'hackportugal',
  id: 'aquecimento-inverno-recuperador',
  categoryId: 'daily_life',
  title: 'Home heating in winter: recuperador de calor, salamandra, esquentador',
  tldr: 'A Portuguese winter often means not frost, but 14–17 °C inside the home, humidity and mould. The quick option is an electric heater for €20–80, but the electricity bill rises fast. Longer term: air conditioning/heat pump at €700–1,800 per split unit, a wood-burning recuperador de calor from €1,500, and a salamandra a pellets usually from €2,000. Esquentador a gás is mainly for hot water; for rooms you need a boiler/radiators. Check Fundo Ambiental: Vale Eficiência may subsidise heat pumps, but only under open avisos and subject to conditions.',
  tags: ['heating', 'winter', 'energy', 'home'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'reality-check',
      title: '1. Understand the problem: in Portugal it is cold inside, not outside',
      content: [
        { kind: 'paragraph', text: 'Many homes have no central heating, weak thermal insulation, single-glazed windows and high humidity. In winter it may be +10…+15 °C outside, but inside an old flat it can easily stay at 14–17 °C. This is uncomfortable and accelerates mould.' },
        { kind: 'checklist', items: [
          'First measure temperature and humidity: a cheap thermo-hygrometer costs €5–15',
          'Bedroom target: around 18 °C; living room: 19–21 °C',
          'Keep humidity roughly at 40–60%; above 65% the risk of mould increases',
          'Check the windows: gaps, old roller shutters, missing seals',
          'Check whether there is a chaminé if you are considering a recuperador or salamandra',
          'For a flat, check the condomínio rules before any work on a chimney or façade',
          'For gas, check ventilation, inspection and the type of gas: natural or botija',
          'For electric heating, check the potência contratada in your electricity contract'
        ] },
        { kind: 'warning', text: 'Do not close ventilation grilles in the kitchen/bathroom if there is a gas esquentador or boiler at home. Carbon monoxide has no smell; install a CO detector for €20–40.' }
      ]
    },
    {
      id: 'compare-options',
      title: '2. Choose the type of heating for the home, not based on advertising',
      content: [
        { kind: 'substeps', items: [
          { id: 'electric', title: 'Electric heaters: quick and cheap to buy', content: [
            { kind: 'paragraph', text: 'An oil-filled radiator, convector or fan heater costs €20–120 and requires no installation. The downside is high consumption: a 2 kW appliance running for 5 hours uses 10 kWh. At domestic electricity prices, this can easily become tens of euros per month for one room.' }
          ] },
          { id: 'heat-pump', title: 'Air conditioning / bomba de calor: usually the best balance', content: [
            { kind: 'paragraph', text: 'A modern split AC in heating mode is a heat pump: it provides more heat per 1 kWh of electricity than an ordinary heater. For permanent residence, this is often the most rational option: €700–1,800 for one indoor unit with installation, more expensive for a multi-split system.' }
          ] },
          { id: 'wood', title: 'Recuperador de calor: a wood-burning fireplace insert', content: [
            { kind: 'paragraph', text: 'A recuperador de calor is installed in an existing fireplace or with a new chimney. It can heat one room, air ducts or water for radiators. A typical budget with installation starts from €1,500, often €2,000–4,000 with proper installation.' }
          ] },
          { id: 'pellets', title: 'Salamandra a pellets: more convenient than logs, but more expensive', content: [
            { kind: 'paragraph', text: 'A pellet stove automatically feeds fuel, maintains temperature and is more convenient for daily use. The budget with installation is usually from €2,000; models with a hydraulic circuit for radiators are noticeably more expensive.' }
          ] },
          { id: 'gas', title: 'Esquentador a gás: do not confuse it with room heating', content: [
            { kind: 'paragraph', text: 'An esquentador a gás is an instant gas water heater for the shower and kitchen. It does not heat rooms. For heating via radiators, you need a caldeira a gás or a hot-water system, and that is a separate project: pipes, radiators, gas inspection and maintenance.' }
          ] }
        ] }
      ]
    },
    {
      id: 'installation-safety',
      title: '3. Installation: where mistakes are most common',
      content: [
        { kind: 'checklist', items: [
          'For a recuperador/salamandra you need a functioning chimney of suitable diameter and height',
          'Ask the instalador to show experience specifically with chaminés and combustíveis sólidos',
          'Do not run a flue through the façade without approval from the condomínio and, if necessary, the Câmara Municipal',
          'Check distances to furniture, curtains and wooden beams',
          'Install a smoke detector and a CO detector; it is cheap insurance',
          'Firewood must be dry; wet logs produce less heat and more soot',
          'Store pellets in a dry place, otherwise they disintegrate and clog the mechanism',
          'The chimney should be cleaned at least once a year before the season',
          'For gas equipment, use a certified technician and keep the relatório/declaração',
          'If the home is rented, obtain written permission from the senhorio before installing fixed equipment'
        ] },
        { kind: 'warning', text: 'Portable gas heaters using botija without good ventilation are dangerous: they release moisture and combustion products. It is better not to use them in small bedrooms and bathrooms.' }
      ]
    },
    {
      id: 'money-and-running-costs',
      title: '4. Calculate not only the purchase cost, but also the monthly bill',
      content: [
        { kind: 'paragraph', text: 'The cheapest purchase is not always the cheapest winter. An electric convector for €40 can cost more over the season than an efficient split AC. A wood-burning recuperador is good where there is a chimney, space to store logs, and you will realistically light it every evening.' },
        { kind: 'checklist', items: [
          'Electric heater: minimum purchase price, high consumption',
          'Split AC / bomba de calor: higher starting price, usually lower consumption',
          'Recuperador de calor: good for a house with a fireplace and accessible firewood',
          'Salamandra a pellets: more convenient than logs, but depends on the price and delivery of pellets',
          'Gas boiler: makes sense if there are already radiators and safe gas infrastructure',
          'A dehumidifier for €150–300 does not replace heating, but greatly improves the feeling of warmth',
          'Thermal curtains, seals and rugs often have a quick effect for €20–150',
          'Double-glazed windows and insulation are more expensive, but reduce all future bills'
        ] }
      ]
    },
    {
      id: 'subsidies',
      title: '5. Check Fundo Ambiental and Vale Eficiência',
      content: [
        { kind: 'paragraph', text: 'Fundo Ambiental periodically opens avisos for home energy efficiency: window replacement, thermal insulation, bombas de calor, and sometimes equipment for heating/DHW. Conditions change by year, region and type of household.' },
        { kind: 'paragraph', text: 'Vale Eficiência has historically been aimed at economically vulnerable households, for example recipients of the tarifa social de energia elétrica, and worked through vouchers for approved measures. In 2026, do not buy equipment “for the subsidy” until you have checked that the aviso is open, your NIF qualifies and the supplier/installer accepts the programme.' },
        { kind: 'checklist', items: [
          'Check fundoambiental.pt before purchase, not after',
          'Look at prazo de candidatura, eligible expenses and invoice dates',
          'Keep the fatura with NIF, comprovativo de pagamento and technical ficha',
          'Check whether a certificado energético is needed before or after the works',
          'Confirm whether the programme accepts the equipment: split AC, bomba de calor AQS, salamandra or insulation',
          'Do not expect immediate payment: application processing can take months'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Electric heater', amountEURMin: 20, amountEURMax: 120, note: 'Cheap to buy; expensive to run with daily use' },
    { label: 'Dehumidifier', amountEURMin: 150, amountEURMax: 300, note: 'Helps against humidity and mould, but does not replace heating' },
    { label: 'Split AC / bomba de calor for one room', amountEURMin: 700, amountEURMax: 1800, note: 'Indicative with installation; depends on power, brand and pipe run' },
    { label: 'Wood-burning recuperador de calor', amountEURMin: 1500, amountEURMax: 4000, note: 'With installation; the price depends heavily on the chimney and finishing' },
    { label: 'Salamandra a pellets', amountEURMin: 2000, amountEURMax: 5000, note: 'With installation; hydro models for radiators are more expensive' },
    { label: 'CO carbon monoxide detector', amountEURMin: 20, amountEURMax: 40, note: 'Recommended for any home with gas, a fireplace or a stove' }
  ],
  sources: [
    { title: 'DGEG — information on energy, gas and energy efficiency', url: 'https://www.dgeg.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Fundo Ambiental — energy efficiency support programmes and Vale Eficiência', url: 'https://www.fundoambiental.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ADENE — practical information on home energy efficiency and certificado energético', url: 'https://www.adene.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
