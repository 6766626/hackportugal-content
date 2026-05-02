export default {
  editorialVoice: 'hackportugal',
  id: 'manutencao-carro-revisao',
  categoryId: 'auto_ownership',
  title: 'Car maintenance / servicing: dealer, Norauto or Bosch garage',
  tldr: 'Servicing in Portugal is scheduled maintenance by mileage or time, usually every 12 months or 10,000–30,000 km according to the manufacturer’s manual. In 2026 the choice is this: a dealer is more expensive, but better for warranty, recalls and complex electronics; Norauto/Feu Vert/Midas are faster and cheaper for oil, tyres, brakes and batteries; Bosch Car Service means independent certified garages for diagnostics and repair. Always ask for a quote, an invoice with NIF and an entry in the service book.',
  tags: ['servicing', 'garage', 'car', 'warranty'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-revisao',
      title: 'What servicing is, and what it is not',
      content: [
        { kind: 'paragraph', text: 'Maintenance or servicing is scheduled vehicle maintenance: oil, filters, checking brakes, suspension, tyres, fluids, battery and electronics. The interval is set by the manufacturer: for many cars it is 1 year or 10,000–30,000 km, whichever comes first.' },
        { kind: 'paragraph', text: 'Servicing does not replace the inspeção periódica obrigatória (IPO). IPO is the official roadworthiness inspection under IMT rules; servicing is a commercial service at a garage. A car may pass a service and still fail IPO because of lights, tyres, emissions or play in components.' },
        { kind: 'checklist', items: [
          'Check the manufacturer’s manual: it states the intervals, oil approvals and list of work.',
          'For cars under warranty, keep all invoices and proof that suitable parts and fluids were used.',
          'For diesel cars with a DPF, do not ignore oil with the correct approval: the wrong oil can accelerate problems with the particle filter.',
          'For hybrids and EVs, check whether the garage can work with high voltage; not every chain services traction batteries.',
          'If the engine warning light is on, diagnostics are needed first, not “just an oil change”.',
          'If the car was imported, check the service history by VIN with the dealer and whether there are any campaigns/recalls.'
        ] }
      ]
    },
    {
      id: 'dealer',
      title: 'Dealer / authorised garage: expensive, but safe for warranty',
      content: [
        { kind: 'paragraph', text: 'A dealer means an official dealer or brand-authorised garage: BMW, Mercedes, Toyota, Renault, Peugeot and so on. This is the most expensive option, but it matters for new cars, warranty cases, recalls, software updates, complex electronics and a brand service history.' },
        { kind: 'checklist', items: [
          'The best choice for a car under 3 years old or with an extended warranty.',
          'They usually use original parts or parts approved by the brand.',
          'They have access to technical campaigns, recalls and factory bulletins.',
          'Appointments may be 1–4 weeks ahead, especially in Lisboa, Porto and the Algarve.',
          'The cost of servicing is often higher than at chain garages: as a guide, €180–500 for normal scheduled maintenance; premium brands and major services cost more.',
          'After the work, ask for an invoice with NIF, an itemisation of parts/labour and an entry in the digital service book or paper service plan.',
          'If additional repairs are found, demand a quote before work starts.'
        ] },
        { kind: 'warning', text: 'The legal guarantee on a new consumer product in Portugal is regulated by DL 84/2021 and is usually 3 years, but the manufacturer may dispute warranty repairs if servicing was done without following the specifications. So, for a car under warranty, do not save on paperwork: invoice, oil specification, part references, date and mileage are essential.' }
      ]
    },
    {
      id: 'chains',
      title: 'Norauto, Feu Vert, Midas: quick for standard jobs',
      content: [
        { kind: 'paragraph', text: 'Chain garages are convenient for an expat: websites with prices, online booking, clear service packages and many locations near shopping centres. This is a good option for oil, filters, tyres, brakes, battery, wipers, air conditioning and a pre-IPO check.' },
        { kind: 'checklist', items: [
          'Norauto is strong on tyres, batteries, servicing, minor repairs and accessories.',
          'Feu Vert has a similar format: servicing, tyres, brakes, air conditioning and diagnostics.',
          'Midas is a chain of quick-service garages for servicing, brakes, exhausts, shock absorbers and diagnostics.',
          'Usually cheaper than a dealer: basic servicing is often €80–250, but the final price depends on the oil, filters and model.',
          'Suitable for popular European and Japanese models without a complex fault.',
          'Check whether the price includes cabin filter, fuel filter, service indicator reset and IVA at 23% on the mainland.',
          'For rare models, complex electronics, automatic gearboxes, ADAS calibration and EVs, it is better to ask in advance whether they have the equipment.'
        ] },
        { kind: 'warning', text: 'A package such as “servicing from €79” almost always means the base price. Fully synthetic oil with the correct approval, a large oil volume, fuel filter, spark plugs, brake fluid and diagnostics are paid separately.' }
      ]
    },
    {
      id: 'bosch-independent',
      title: 'Bosch Car Service and independent garages',
      content: [
        { kind: 'paragraph', text: 'Bosch Car Service is a network of independent certified garages. It is a compromise between a dealer and fast-fit chains: usually cheaper than a dealer, but stronger on diagnostics, electronics, diesel systems, ABS/ESP, sensors and repairs that are not limited to “oil + tyres”.' },
        { kind: 'checklist', items: [
          'A good choice for a car out of warranty when diagnostics are needed, not just scheduled maintenance.',
          'They can often work with multiple brands and have professional diagnostic equipment.',
          'The price of typical servicing is often €120–350; complex diagnostics and repairs are charged separately.',
          'Quality depends on the specific garage: the network provides standards, but the workshop is still local.',
          'Check Google reviews, ACP recommendations, waiting time and willingness to issue a written quote.',
          'Ask for the old parts back if expensive components are replaced: alternator, A/C compressor, sensors, injectors.',
          'For an automatic gearbox, timing chain, clutch, turbo and DPF, check their experience specifically with your model.'
        ] },
        { kind: 'paragraph', text: 'Independent neighbourhood garages can be even cheaper, but the risk is higher: fewer formal processes, they do not always issue a detailed invoice, and they sometimes fit “white label” parts without explanation. This can be fine for an old car, but not for warranty work or expensive repairs.' }
      ]
    },
    {
      id: 'booking-and-documents',
      title: 'How to book and avoid overpaying 🧾',
      content: [
        { kind: 'paragraph', text: 'In Portugal, it is normal practice to ask for a quote before repair work. For servicing, provide the registration number, VIN, mileage, year, engine and a photo of the latest service plan. Ask for a price with IVA and a breakdown of parts/labour.' },
        { kind: 'checklist', items: [
          'Say: “Quero orçamento para revisão anual conforme plano do fabricante, com IVA incluído.”',
          'Clarify the oil: specification, viscosity, brand and volume in litres.',
          'Ask for the list of filters: oil, air, cabin, fuel.',
          'Ask whether electronic diagnostics and reset of the maintenance indicator are included.',
          'Do not agree to additional work by phone without a price: ask for a photo/video and a quote.',
          'After the repair, check the invoice: NIF, registration number, mileage, part references, labour, IVA.',
          'Save the invoice as a PDF: it will be useful when selling, for warranty and in a dispute with the garage.',
          'If the repair is expensive, compare at least 2 offers: dealer + Bosch/independent, or chain + Bosch.'
        ] },
        { kind: 'warning', text: 'Do not leave the car with the wording “faça o que for preciso”. This opens the door to a bill of hundreds of euros without your control. Limit the budget in writing: “Não executar trabalhos adicionais sem autorização por escrito”.' }
      ]
    },
    {
      id: 'which-one-to-choose',
      title: 'Quick choice by situation',
      content: [
        { kind: 'checklist', items: [
          'New car under warranty: dealer or a garage that documents compliance with the manufacturer’s plan.',
          'Recall, software update, ADAS fault, keys, multimedia: dealer.',
          'Oil, filters, tyres, battery, brakes without complex diagnostics: Norauto / Feu Vert / Midas.',
          'Check before IPO: a chain or Bosch, if you need a quick pre-inspection.',
          'Check before buying a used car: Bosch, ACP inspection or an independent garage with diagnostics.',
          'Problems with diesel, DPF, injectors, sensors, ABS/ESP: Bosch Car Service or a specialist garage.',
          'Old budget car: an independent neighbourhood garage may be cost-effective if there are recommendations and an invoice.',
          'Premium, hybrid, EV, automatic gearbox: do not choose by price alone; check equipment and experience.'
        ] },
        { kind: 'paragraph', text: 'A practical strategy for 2026: while the warranty is active, keep the history with the dealer or document independent servicing very carefully. After the warranty, use Bosch/a good independent garage for servicing, while tyres, battery and simple jobs can be done at Norauto/Feu Vert/Midas.' }
      ]
    }
  ],
  costs: [
    { label: 'Basic servicing at a chain garage', amountEURMin: 80, amountEURMax: 250, note: 'Guide price for oil and basic filters; depends on the engine, oil approval and work included.' },
    { label: 'Servicing at Bosch Car Service / a good independent garage', amountEURMin: 120, amountEURMax: 350, note: 'Average market range for normal scheduled maintenance; diagnostics and repairs are charged separately.' },
    { label: 'Servicing at a dealer', amountEURMin: 180, amountEURMax: 500, note: 'Normal scheduled maintenance; premium brands, major interval services, spark plugs, brake fluid and automatic gearboxes can cost substantially more.' },
    { label: 'Electronic diagnostics', amountEURMin: 30, amountEURMax: 90, note: 'Often free only if the repair is carried out there too; check in advance.' },
    { label: 'Tyre change, labour for 4 wheels', amountEURMin: 40, amountEURMax: 90, note: 'Excluding the cost of tyres; balancing and valves may be charged separately.' }
  ],
  sources: [
    { title: 'IMT — inspections, vehicles and official information on road transport', url: 'https://www.imt-ip.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ACP — car maintenance, inspection and practical recommendations for drivers', url: 'https://www.acp.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 84/2021 — consumer rights when buying goods and goods guarantees', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/84-2021-172938301', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Bosch Car Service Portugal — network of multi-brand garages', url: 'https://www.boschcarservice.com/pt/pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
