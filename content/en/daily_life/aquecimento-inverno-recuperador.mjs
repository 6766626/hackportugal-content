export default {
  editorialVoice: 'hackportugal',
  id: 'aquecimento-inverno-recuperador',
  categoryId: 'daily_life',
  title: 'Heating your home in winter: recuperador de calor, salamandra, esquentador',
  tldr: 'A Portuguese winter often means not frost, but 14–17 °C inside the home, damp and mould. The quick option is an electric heater for €20–80, but the electricity bill rises fast. Longer term: air conditioning/heat pump €700–1,800 per split, wood-burning recuperador de calor from €1,500, salamandra a pellets usually from €2,000. Esquentador a gás is mainly for hot water; for rooms you need a boiler/radiators. Check Fundo Ambiental: Vale Eficiência may subsidise heat pumps, but only under open avisos and subject to conditions.',
  tags: ['heating', 'winter', 'energy', 'home'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'reality-check',
      title: '1. Understand the problem: in Portugal it is cold indoors, not outdoors',
      content: [
        { kind: 'paragraph', text: 'Many homes have no central heating, weak insulation, single-glazed windows and high humidity. In winter it may be +10…+15 °C outside, but inside an old flat it can easily stay at 14–17 °C. This is uncomfortable and accelerates mould.' },
        { kind: 'checklist', items: [
          'First measure temperature and humidity: a cheap thermo-hygrometer costs €5–15',
          'Target for the bedroom: around 18 °C; for the living room: 19–21 °C',
          'Keep humidity at roughly 40–60%; above 65% the risk of mould increases',
          'Check the windows: gaps, old roller shutters, missing seals',
          'Check whether there is a chaminé if you are considering a recuperador or salamandra',
          'For a flat, check the condomínio rules before any work on the flue or façade',
          'For gas, check ventilation, inspection and gas type: natural or botija',
          'For electric heating, check the potência contratada in your electricity contract'
        ] },
        { kind: 'warning', text: 'Do not block ventilation grilles in the kitchen/bathroom if there is a gas esquentador or boiler at home. Carbon monoxide has no smell; install a CO detector for €20–40.' }
      ]
    },
    {
      id: 'compare-options',
      title: '2. Choose the heating type for the home, not from advertising',
      content: [
        { kind: 'substeps', items: [
          { id: 'electric', title: 'Electric heaters: quick and cheap to buy', content: [
            { kind: 'paragraph', text: 'An oil-filled radiator, convector or fan heater costs €20–120 and needs no installation. The downside is high consumption: a 2 kW appliance used for 5 hours consumes 10 kWh. At household electricity prices, this can easily become tens of euros per month for one room.' }
          ] },
          { id: 'heat-pump', title: 'Air conditioning / bomba de calor: usually the best balance', content: [
            { kind: 'paragraph', text: 'A modern split AC in heating mode is a heat pump: it gives more heat per 1 kWh of electricity than a conventional heater. For permanent living, this is often the most rational option: €700–1,800 for one indoor unit with installation, more for a multi-split.' }
          ] },
          { id: 'wood', title: 'Recuperador de calor: wood-burning fireplace insert', content: [
            { kind: 'paragraph', text: 'A recuperador de calor is installed in an existing fireplace or with a new flue. It can heat one room, air ducts or water for radiators. A typical budget with installation is from €1,500, often €2,000–4,000 with proper installation.' }
          ] },
          { id: 'pellets', title: 'Salamandra a pellets: more convenient than wood, but more expensive', content: [
            { kind: 'paragraph', text: 'A pellet stove feeds fuel automatically, maintains temperature and is more convenient for daily use. The budget with installation is usually from €2,000; models with a hydraulic circuit for radiators are noticeably more expensive.' }
          ] },
          { id: 'gas', title: 'Esquentador a gás: do not confuse it with room heating', content: [
            { kind: 'paragraph', text: 'An esquentador a gás is an instantaneous gas water heater for the shower and kitchen. It does not heat rooms. For heating through radiators, you need a caldeira a gás or a hot-water system, and that is a separate project involving pipes, radiators, gas inspection and maintenance.' }
          ] }
        ] }
      ]
    },
    {
      id: 'installation-safety',
      title: '3. Installation: where mistakes are most often made',
      content: [
        { kind: 'checklist', items: [
          'For a recuperador/salamandra, you need a sound flue of suitable diameter and height',
          'Ask the instalador to show experience specifically with chaminés and combustíveis sólidos',
          'Do not run a pipe through the façade without approval from the condomínio and, where necessary, Câmara Municipal',
          'Check distances from furniture, curtains and wooden beams',
          'Install a smoke detector and a CO detector; it is cheap insurance',
          'Wood must be dry; wet wood gives less heat and more soot',
          'Store pellets in a dry place, otherwise they disintegrate and clog the mechanism',
          'The flue should be cleaned at least once a year before the season',
          'For gas equipment, use a certified technician and keep the relatório/declaração',
          'If the home is rented, get written permission from the senhorio before installing fixed equipment'
        ] },
        { kind: 'warning', text: 'Portable gas heaters with a botija are dangerous without good ventilation: they release moisture and combustion products. It is better not to use them in small bedrooms and bathrooms.' }
      ]
    },
    {
      id: 'money-and-running-costs',
      title: '4. Calculate not only the purchase, but also the monthly bill',
      content: [
        { kind: 'paragraph', text: 'The cheapest purchase is not always the cheapest winter. An electric convector for €40 can cost more over a season than an efficient split AC. A wood-burning recuperador is good where there is a flue, space to store wood and you will actually light it every evening.' },
        { kind: 'checklist', items: [
          'Electric heater: minimal purchase price, high consumption',
          'Split AC / bomba de calor: higher initial price, usually lower consumption',
          'Recuperador de calor: good for a home with a fireplace and available firewood',
          'Salamandra a pellets: more convenient than wood, but depends on the price and delivery of pellets',
          'Gas boiler: makes sense if there are already radiators and safe gas infrastructure',
          'A dehumidifier for €150–300 does not replace heating, but greatly improves the feeling of warmth',
          'Thermal curtains, seals and rugs often give a quick effect for €20–150',
          'Double-glazed windows and insulation are more expensive, but reduce all future bills'
        ] }
      ]
    },
    {
      id: 'subsidies',
      title: '5. Check Fundo Ambiental and Vale Eficiência',
      content: [
        { kind: 'paragraph', text: 'Fundo Ambiental periodically opens avisos for housing energy efficiency: replacing windows, insulation, bombas de calor and sometimes equipment for heating/DHW. Conditions change by year, region and household type.' },
        { kind: 'paragraph', text: 'Vale Eficiência has historically targeted economically vulnerable households, for example recipients of tarifa social de energia elétrica, and worked through vouchers for approved measures. In 2026, do not buy equipment “for the subsidy” until you have checked that the aviso is open, your NIF qualifies and the supplier/installer accepts the programme.' },
        { kind: 'checklist', items: [
          'Check fundoambiental.pt before buying, not after',
          'Look at the prazo de candidatura, eligible expenses and invoice dates',
          'Keep the fatura with NIF, comprovativo de pagamento and technical ficha',
          'Check whether a certificado energético is needed before or after the works',
          'Confirm whether the programme accepts the equipment: split AC, bomba de calor AQS, salamandra or insulation',
          'Do not expect instant payment: processing applications can take months'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Electric heater', amountEURMin: 20, amountEURMax: 120, note: 'Cheap to buy; expensive to run with daily use' },
    { label: 'Dehumidifier', amountEURMin: 150, amountEURMax: 300, note: 'Helps against damp and mould, but does not replace heating' },
    { label: 'Split AC / bomba de calor for one room', amountEURMin: 700, amountEURMax: 1800, note: 'Guide price with installation; depends on power, brand and pipe run' },
    { label: 'Wood-burning recuperador de calor', amountEURMin: 1500, amountEURMax: 4000, note: 'With installation; price depends heavily on the flue and finishing' },
    { label: 'Salamandra a pellets', amountEURMin: 2000, amountEURMax: 5000, note: 'With installation; hydro models for radiators are more expensive' },
    { label: 'CO carbon monoxide detector', amountEURMin: 20, amountEURMax: 40, note: 'Recommended for any home with gas, a fireplace or a stove' }
  ],
  sources: [
    { title: 'DGEG — information on energy, gas and energy efficiency', url: 'https://www.dgeg.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Fundo Ambiental — support programmes for energy efficiency and Vale Eficiência', url: 'https://www.fundoambiental.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ADENE — practical information on housing energy efficiency and certificado energético', url: 'https://www.adene.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
