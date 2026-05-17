export default {
  editorialVoice: 'hackportugal',
  id: 'ev-charging-postos',
  categoryId: 'auto_ownership',
  title: 'Electric vehicle charging — Mobi.E, Galp, EDP, Wallbox',
  tldr: 'In Portugal, almost all public charging works through the single Mobi.E network: one CEME card or app opens chargers from different operators — Galp, EDP, Powerdot, Prio, Ionity and others. In 2026, the guide price for the full cost is: AC 3.7–22 kW — €0.25–€0.45/kWh, DC 50 kW — €0.45–€0.70/kWh, HPC 100–350 kW — €0.55–€0.90/kWh, but the final amount depends on €/kWh, minutes, the operator fee and IVA 23%. A home Wallbox usually costs €500–€1,500 with installation.',
  tags: ['mobi.e', 'charging', 'galp', 'edp', 'wallbox'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'how-network-works',
      title: 'How the Mobi.E network works',
      content: [
        { kind: 'paragraph', text: 'Mobi.E is not “one charging company”, but a national platform linking energy suppliers for electric mobility and charge point operators. Therefore, the same charger may belong to Galp, EDP, Powerdot, Prio, Continente, Ionity or a municipality, but be started with another supplier’s card.' },
        { kind: 'paragraph', text: 'The main roles: CEME — Comercializador de Eletricidade para a Mobilidade Elétrica, meaning the company from which you get the card/app and pay the bill; OPC — Operador de Ponto de Carregamento, meaning the owner of the specific station; EGME/Mobi.E — the network management platform.' },
        { kind: 'checklist', items: [
          'For public charging, you almost always need a CEME contract: Galp Electric, EDP Comercial, Prio, Miio, Evio, Via Verde Electric and others.',
          'A CEME card usually works on most postos da rede Mobi.E, not only on the brand’s “own” stations.',
          'The supplier’s app shows power, availability, tariff and session history; status accuracy depends on the station.',
          'The final price consists of CEME energy, the OPC tariff, network/management charges and IVA 23%.',
          'On fast chargers, the tariff often includes a per-minute component: if the car accepts current slowly after 80%, the price per kWh rises sharply.',
          'On the A1/A2/A22 motorways and in tourist areas, HPC is more expensive than AC at a supermarket or municipal car park.',
          'Roaming apps such as Chargemap/Plugsurfing may work, but are often more expensive than a local CEME.'
        ] }
      ]
    },
    {
      id: 'cards-and-apps',
      title: 'Cards and apps: Galp, EDP and alternatives',
      content: [
        { kind: 'paragraph', text: 'The practical minimum for an expat is to have 2 ways to start charging: a main CEME card and a backup app. A physical RFID card is useful in underground car parks and places with weak internet; an app is convenient for searching, filtering by power and checking the price.' },
        { kind: 'substeps', items: [
          { id: 'galp', title: 'Galp Electric / Galp Power Plug', content: [
            { kind: 'paragraph', text: 'Galp is one of the major CEME and charging operators at petrol stations, supermarkets and on routes. It suits you if you often charge at Galp or want one account for fuel, energy and charging. Check the price in the app before starting: Galp may have different tariffs for AC, DC and ultra-fast.' }
          ] },
          { id: 'edp', title: 'EDP Comercial / EDP Charge', content: [
            { kind: 'paragraph', text: 'EDP is a popular CEME for those who already have an EDP home electricity contract. It is convenient for linking “home bill + public charging”, but this does not mean EDP is always cheaper at all Mobi.E postos.' }
          ] },
          { id: 'miio-and-others', title: 'Miio, Prio, Evio, Via Verde Electric', content: [
            { kind: 'paragraph', text: 'Miio is often useful as a cost “calculator”: the app shows a price forecast before the start and the final amount after the session. Prio and Evio may be good value at specific stations. Via Verde Electric is convenient for those who already have Via Verde for motorways and parking.' }
          ] }
        ] },
        { kind: 'warning', text: 'Do not choose a CEME only by the brand of the charger near your home. In the Mobi.E network, a Galp card can start an EDP station, and an EDP card can start a Galp station. Compare the final price in apps on your real routes.' }
      ]
    },
    {
      id: 'prices-2026',
      title: 'How much charging costs in 2026',
      content: [
        { kind: 'paragraph', text: 'In Portugal, the price of public charging is rarely a simple “€/kWh”. The receipt usually includes: CEME energy, the station operator’s tariff — por kWh, por minuto or por sessão, IEC tax/charges, IVA 23%. Therefore, two cars at the same charger may get a different price per kWh: a fast-charging car will leave for less, while a slow one will pay for more minutes.' },
        { kind: 'checklist', items: [
          'AC 3.7–7.4 kW: usually €0.25–€0.40/kWh in total; suitable for overnight or long parking.',
          'AC 11–22 kW: usually €0.30–€0.45/kWh; the real speed depends on the car’s onboard charger, often 7.4 or 11 kW.',
          'DC 50 kW: usually €0.45–€0.70/kWh; a good compromise for 30–60 minutes.',
          'HPC 100–350 kW: usually €0.55–€0.90/kWh; on motorways and at premium networks it may be higher.',
          'After 80% battery, power almost always drops: on DC/HPC it is better value to charge 10–80%, not 10–100%.',
          'If the tariff includes €/min, the final price is higher in winter and with a cold battery, because the car accepts less power.',
          'Free chargers have almost disappeared; some shopping centres have benefits for customers, but you cannot rely on them as your main method.',
          'Home charging on a domestic tariff is usually cheaper than public charging: often around €0.15–€0.25/kWh with taxes, and it may be lower on a two-rate night plan.'
        ] },
        { kind: 'paragraph', text: 'Example: the battery received 40 kWh. On AC at €0.35/kWh this is about €14. On DC at €0.60/kWh — about €24. On HPC with a per-minute component, the final amount may be €26–€36 if the car charges quickly, and more if it remains connected for a long time after the power drop.' }
      ]
    },
    {
      id: 'fast-vs-slow',
      title: 'AC, DC and HPC: what to choose',
      content: [
        { kind: 'paragraph', text: 'AC is slow alternating-current charging, where speed is limited by the car’s built-in charger. DC/HPC is fast direct-current charging, where power goes directly into the battery, but is limited by temperature, state of charge and the charging curve of the specific model.' },
        { kind: 'checklist', items: [
          'For daily life: charge at home or on AC at work/the shop up to 70–90%.',
          'For routes: plan DC/HPC stops in the 10–80% range; it is faster and cheaper.',
          '22 kW AC does not mean your car will take 22 kW: many EVs accept only 7.4 or 11 kW AC.',
          '150–350 kW HPC only makes sense if the car supports that power and the battery is preconditioned.',
          'On the road, look for stations with 2+ CCS connectors, not a single 50 kW charger.',
          'In 2026, CHAdeMO is mainly needed for older Nissan Leaf and Mitsubishi models; new stations are more often focused on CCS.',
          'Do not occupy a charger after charging has finished: at some car parks there may be penalties for estacionamento indevido or an occupancy tariff.'
        ] },
        { kind: 'warning', text: 'On fast chargers, do not trust only the figure “up to 150 kW”. If the battery is cold, almost full, or the car cannot handle that power, an actual 35–80 kW is normal.' }
      ]
    },
    {
      id: 'home-wallbox',
      title: 'Home Wallbox: flat, house, condomínio',
      content: [
        { kind: 'paragraph', text: 'If you have a garage or an allocated parking space, a home wallbox is almost always cheaper and more convenient than the public network. Popular brands: Wallbox, EDP Charge, Galp, Tesla Wall Connector, Circutor, ABB, Schneider. More important than the brand are proper protection, a certified electrician and sufficient potência contratada.' },
        { kind: 'checklist', items: [
          'A standard domestic socket is suitable only as a temporary solution: 2–3 kW, slow and with a risk of overheating old wiring.',
          '7.4 kW single-phase requires a suitable line, circuit breaker, residual-current protection and usually potência contratada of around 6.9–10.35 kVA, taking the home into account.',
          '11 kW three-phase is convenient for detached houses with trifásico; you need to check whether such power is available from E-REDES.',
          'Dynamic load balancing is useful: the wallbox reduces power itself when the oven, boiler or air conditioning is on.',
          'In a condomínio, check in advance the cable route, common meter, installation location and garage management rules.',
          'For an individual space, you usually need to notify the administração do condomínio in writing; work in common parts may require approvals.',
          'Keep the factura and the technical relatório/termo de responsabilidade from the electrician: they will be useful when selling the property and in disputes with the condomínio.',
          'If you rent the property, obtain written consent from the senhorio before installation.'
        ] },
        { kind: 'paragraph', text: 'Typical budget in 2026: 7.4 kW wallbox — €350–€900 for the device, installation in a simple garage — €250–€700, a complex cable route in a condomínio — €800–€2,000+. Sometimes Galp or EDP offer a “charger + installation + tariff” package, but compare the final cost with an independent electrician.' }
      ]
    },
    {
      id: 'practical-routine',
      title: 'A practical routine for life in Portugal',
      content: [
        { kind: 'paragraph', text: 'The optimal setup: charge at home at night up to a 70–90% limit, use AC in town only when you are parking anyway, and make short DC/HPC stops on the road. This reduces cost and makes you less dependent on occupied chargers.' },
        { kind: 'checklist', items: [
          'Arrange at least one CEME RFID card before your first long trip.',
          'Keep 2 apps on your phone: one main CEME and one backup for searching/comparing prices.',
          'Before starting a session, check: €/kWh, €/min, potência, connector type, “disponível” status.',
          'On the road, plan charging not “at zero”, but with a 10–15% reserve, especially at night and in August.',
          'In the hot season in the Algarve and on bridges/routes to beaches, allow for a queue at HPC.',
          'After the session, check the factura/recibo in the app: errors are rare, but they happen when the connection drops.',
          'If the charger does not start, try another CEME/app, restart the session or call the support number shown on the station.',
          'For home charging, review your electricity tariff: bi-horário/tri-horário can noticeably reduce the cost of night-time kWh.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Public AC charging 3.7–22 kW', amountEURMin: 0.25, amountEURMax: 0.45, note: 'Guide price for 1 kWh with IVA 23%; the final amount depends on CEME, OPC and the per-minute component.' },
    { label: 'Public DC charging 50 kW', amountEURMin: 0.45, amountEURMax: 0.70, note: 'Guide price for 1 kWh; with slow charging the price is higher because of €/min.' },
    { label: 'HPC 100–350 kW', amountEURMin: 0.55, amountEURMax: 0.90, note: 'Guide price for 1 kWh; higher bills are possible on motorways and at premium networks.' },
    { label: 'Home wallbox with simple installation', amountEURMin: 500, amountEURMax: 1500, note: 'Device plus installation; a complex condomínio or long cable route may cost more.' },
    { label: 'Physical CEME RFID card', amountEURMin: 0, amountEURMax: 10, note: 'Depends on the supplier: often free or a small issue/delivery fee.' }
  ],
  sources: [
    { title: 'Mobi.E — official information on the electric mobility network', url: 'https://www.mobie.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Galp — electric vehicle charging solutions and Galp Electric', url: 'https://www.galp.com', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'EDP Comercial — electric mobility and EV charging', url: 'https://www.edp.pt/particulares/servicos/mobilidade-eletrica/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 39/2010 — regime for the organisation of and access to electric mobility', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/39-2010-243233', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
