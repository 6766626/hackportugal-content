export default {
  editorialVoice: 'hackportugal',
  id: 'brisa-tunel-marao-tolls',
  categoryId: 'auto_trips',
  title: 'Brisa toll roads and Túnel do Marão: tariffs and Via Verde',
  tldr: 'Brisa operates key autoestradas: A1, A2, A5, A6, A8, A9, A14. Payment is usually via manual portagem: take a ticket on entry and pay on exit, or via Via Verde without stopping. The tariff depends on class 1–4: a passenger car is almost always classe 1, while a van/SUV with a height at the front axle of ≥1.10 m may become classe 2. Túnel do Marão on the A4 is paid separately: 2026 guide — around €7–€12 for larger classes, with passenger classe 1 cheaper. Before travelling, check the Brisa/Via Verde simulator.',
  tags: ['tolls', 'brisa', 'viaverde', 'a4'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-paid',
      title: 'What exactly is tolled',
      content: [
        { kind: 'paragraph', text: 'In Portugal, toll roads are called autoestradas com portagem. For Brisa, these are classic motorways with barriers and tickets: A1 Lisboa–Porto, A2 Lisboa–Algarve, A5 Lisboa–Cascais, A6 Marateca–Caia, A8 Lisboa–Leiria, A9 CREL, A14 Figueira da Foz–Coimbra.' },
        { kind: 'paragraph', text: 'Túnel do Marão is a tolled section on the A4 between the Amarante area and Vila Real. It is not an “urban tunnel”, but part of the motorway through Serra do Marão: on Porto ↔ Trás-os-Montes trips it is often included in the route.' },
        { kind: 'checklist', items: [
          'A1: the main tolled corridor Lisboa ↔ Porto',
          'A2: Lisboa ↔ Algarve, the most common route south',
          'A5: Lisboa ↔ Cascais, short but tolled',
          'A6: towards Évora / Espanha via Caia',
          'A8: Lisboa ↔ Oeste / Leiria',
          'A9: the CREL ring road around Lisboa',
          'A14: Figueira da Foz ↔ Coimbra',
          'A4 / Túnel do Marão: Porto / Amarante ↔ Vila Real / Bragança'
        ] }
      ]
    },
    {
      id: 'vehicle-class',
      title: 'First check classe 1–4 🚗',
      content: [
        { kind: 'paragraph', text: 'The tariff is calculated not “by car make”, but by the class used for portagens. A class error is a common reason for unexpectedly high bills for vans, campervans and large SUVs.' },
        { kind: 'checklist', items: [
          'Classe 1: motorcycles and vehicles with a vertical height at the front axle of less than 1.10 m; ordinary passenger cars are usually here',
          'Classe 2: 2 axles and height at the front axle ≥1.10 m; vans, some people carriers and commercial versions often fall here',
          'Classe 3: 3 axles and height at the front axle ≥1.10 m',
          'Classe 4: 4 or more axles and height at the front axle ≥1.10 m',
          'A trailer can change the class if it changes the number of axles in the tariff logic for that section',
          'Via Verde uses the same class assigned to the transponder/vehicle registration number',
          'Motorcycles with Via Verde may have a separate discounted regime on some networks, but this must be checked in the tariff of the specific operator',
          'If you are driving a rental car, the class has already been set by the rental operator and linked to the Via Verde device, if one is installed'
        ] },
        { kind: 'warning', text: 'Do not rely only on “passenger/non-passenger vehicle” in the documents. For portagem, the physical height at the front axle of 1.10 m and the number of axles matter. For a campervan or carrinha, the tariff is often higher than the driver expects.' }
      ]
    },
    {
      id: 'how-to-pay',
      title: 'How to pay: manual, card, Via Verde',
      content: [
        { kind: 'paragraph', text: 'On Brisa roads, a closed system usually operates: on entry you take a ticket, and on exit you pay for the actual section travelled. On short sections there may be a fixed praça de portagem.' },
        { kind: 'checklist', items: [
          'Entry: choose a normal lane and take a ticket; do not enter the “Via Verde” lane without a device',
          'Exit: hand the ticket to the operator or insert it into the machine',
          'Payment: cash, bank card, sometimes Multibanco/automatic payment machine',
          'Via Verde: green lane, drive through without stopping; charged to the linked account/card',
          'In a rental car: check with the rent-a-car whether Via Verde is activated and what the daily fee is',
          'If the ticket is lost, the operator may charge the maximum tariff for the section',
          'If you accidentally pass through Via Verde without a device, note the date, road number, praça and contact the operator/Via Verde — do not wait for a penalty letter',
          'For electronic-only roads outside Brisa, the rules are different: payment via CTT/Payshop/portagens eletrónicas; do not confuse them with classic Brisa barriers'
        ] },
        { kind: 'warning', text: 'The Via Verde lane is not a “fast lane for everyone”. The camera reads the transponder/registration number. Without an active device, the passage becomes an unpaid portagem with administrative costs.' }
      ]
    },
    {
      id: 'tariffs-2026',
      title: '2026 tariff guide',
      content: [
        { kind: 'paragraph', text: 'The exact tariff depends on the entry, exit, operator, class and annual indexation. For a trip, it is better to calculate not “by kilometres” but through the official Brisa or Via Verde simulador de portagens: enter origem, destino and classe.' },
        { kind: 'checklist', items: [
          'A5 Lisboa–Cascais, classe 1: usually around €1.95–€2.15 for a short section, depending on the entry/exit point',
          'A1 Lisboa–Porto, classe 1: guide of around €24–€26 for the full route on the tolled A1',
          'A2 Lisboa–Algarve, classe 1: guide of around €23–€25 to the Albufeira/Faro area via the A2',
          'A6 Lisboa/Marateca–Caia, classe 1: guide of around €17–€20 on the main tolled corridor towards Espanha',
          'A8 Lisboa–Leiria, classe 1: guide of around €9–€11 for a long drive',
          'A9 CREL, classe 1: short trips are usually a few euros, often €1–€4',
          'A14 Figueira da Foz–Coimbra, classe 1: usually a few euros, roughly €3–€5',
          'Túnel do Marão / A4: for classe 2–4, guide of around €7–€12; classe 1 is usually lower, but check the calculator before travelling'
        ] },
        { kind: 'paragraph', text: 'For classe 2–4, the amount increases noticeably: a van or campervan may pay 60–150% more than a passenger car on the same route. That is why checking the class before a Porto ↔ Algarve or Porto ↔ Vila Real trip saves real money.' },
        { kind: 'warning', text: 'The figures above are practical guides for budget planning, not a legal tariff sheet. The official amount on the day of travel is only in the Brisa or Via Verde tarifário/simulador.' }
      ]
    },
    {
      id: 'via-verde-when-useful',
      title: 'When you need Via Verde',
      content: [
        { kind: 'paragraph', text: 'Via Verde is convenient if you live in Portugal and use autoestradas more than a couple of times a month. The device is linked to the vehicle registration number and payment method. Charges are visible in the personal account and app.' },
        { kind: 'checklist', items: [
          'Makes sense: regular Lisboa–Cascais, Porto–Lisboa, Algarve trips, work outside the city',
          'Makes sense for expats: no need to deal with machines and queues at the portagem',
          'Useful in car parks and some services, if the Via Verde tariff plan includes this',
          'Not necessary: if you use toll roads 1–2 times a year, manual payment is usually enough',
          'For a rental car, do not buy your own transponder: use the rent-a-car option or pay manually if the road allows it',
          'Check the mensalidade/fee of the Via Verde plan: conditions change and depend on the package',
          'After selling the car, remove the registration number from Via Verde, otherwise someone else’s portagens may be charged to you'
        ] },
        { kind: 'warning', text: 'Via Verde does not cancel the road tariff itself. It is a payment method. You pay the same portagem according to vehicle class plus any subscription/fee for the chosen plan.' }
      ]
    },
    {
      id: 'practical-route-hacks',
      title: 'Practical tips before travelling',
      content: [
        { kind: 'checklist', items: [
          'Before a long route, open the Brisa or Via Verde calculator and save the amount as a screenshot',
          'In the navigator, compare the “avoid tolls” route: sometimes saving €20 costs an extra 60–90 minutes',
          'On the A1/A2, do not enter without fuel: stations exist, but autoestrada prices are often higher than in towns',
          'Keep a bank card and some cash: a machine or card may not work at a specific praça',
          'Do not throw away the ticket until the end of the trip and payment',
          'If you are travelling with a roof box, this usually does not change the class because the height at the front axle matters, but a commercial van is another matter',
          'For Túnel do Marão, check the weather in advance: the alternative via the old mountain road may be slower and more dangerous in winter',
          'For accounting/recibos verdes, keep Via Verde faturas or the recibo da portagem if the trip is for work'
        ] },
        { kind: 'paragraph', text: 'If you need the most predictable budget, plan: fuel + portagens + parking. For a Lisboa ↔ Porto trip in classe 1, tolls alone for the return journey may come to around €50, excluding fuel.' }
      ]
    }
  ],
  costs: [
    { label: 'A1 Lisboa–Porto, classe 1', amountEURMin: 24, amountEURMax: 26, note: 'Guide for the full route on the tolled A1; calculate the exact amount in Brisa/Via Verde.' },
    { label: 'A2 Lisboa–Algarve, classe 1', amountEURMin: 23, amountEURMax: 25, note: 'Guide to the Algarve area via the A2; depends on entry/exit.' },
    { label: 'Túnel do Marão / A4, classe 2–4', amountEURMin: 7, amountEURMax: 12, note: 'Practical range for larger classes; classe 1 is usually cheaper.' },
    { label: 'Via Verde', amountEURMin: 0, amountEURMax: 2, note: 'Portagem is paid separately; a monthly fee/charge may apply depending on the chosen plan.' }
  ],
  sources: [
    { title: 'Brisa — portagens, autoestradas network and simulator', url: 'https://www.brisa.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Via Verde — tariffs, identifier and portagens payment', url: 'https://www.viaverde.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Via Verde — route planner and cálculo de portagens', url: 'https://www.viaverde.pt/particulares/ferramentas/calculador-de-portagens', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
