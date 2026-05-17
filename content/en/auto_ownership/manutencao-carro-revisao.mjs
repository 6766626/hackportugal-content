export default {
  editorialVoice: 'hackportugal',
  id: 'manutencao-carro-revisao',
  categoryId: 'auto_ownership',
  title: 'Car manutenção / revisão: concessionário, Norauto or Bosch oficina',
  tldr: 'Revisão in Portugal is scheduled servicing based on mileage or time, usually once every 12 months or 10,000–30,000 km according to the manual do fabricante. In 2026 the choice is as follows: concessionário is more expensive, but better for warranty, recall and complex electronics; Norauto/Feu Vert/Midas are faster and cheaper for oil, tyres, brakes and battery; Bosch Car Service means independent certified oficinas for diagnostics and repairs. Always request an orçamento, a fatura with NIF and an entry in the livro de revisões.',
  tags: ['servicing', 'garage', 'car', 'warranty'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-revisao',
      title: 'What revisão is and what it is not',
      content: [
        { kind: 'paragraph', text: 'Manutenção or revisão is scheduled car servicing: oil, filters, checking brakes, suspension, tyres, fluids, battery and electronics. The interval is set by the manufacturer: for many cars it is 1 year or 10,000–30,000 km, whichever comes first.' },
        { kind: 'paragraph', text: 'Revisão does not replace the inspeção periódica obrigatória (IPO). IPO is the statutory roadworthiness inspection under IMT rules; revisão is a commercial service at an oficina. A car can pass revisão and still fail the IPO because of lights, tyres, emissions or play in components.' },
        { kind: 'checklist', items: [
          'Check the manual do fabricante: it lists the intervals, oil specifications and work schedule.',
          'For cars under warranty, keep all faturas and evidence that suitable parts and fluids were used.',
          'For diesel cars with a DPF, do not ignore the required oil specification: the wrong oil can accelerate problems with the filtro de partículas.',
          'For hybrids and EVs, check whether the oficina can work with alta tensão; not every chain services traction batteries.',
          'If an aviso motor is lit on the dashboard, diagnostics are needed first, not “just a troca de óleo”.',
          'If the car was imported, check its service history by VIN with the concessionário and whether there are any campanhas/recalls.'
        ] }
      ]
    },
    {
      id: 'dealer',
      title: 'Concessionário / oficina autorizada: expensive, but safe for warranty',
      content: [
        { kind: 'paragraph', text: 'A concessionário is an official dealer or autorizada marca: BMW, Mercedes, Toyota, Renault, Peugeot and so on. This is the most expensive option, but it matters for new cars, warranty cases, recalls, software updates, complex electronics and branded service history.' },
        { kind: 'checklist', items: [
          'The best choice for a car under 3 years old or with an extensão de garantia.',
          'They usually use peças originais or parts approved by the brand.',
          'They have access to campanhas técnicas, recalls and factory boletins.',
          'Booking may be 1–4 weeks ahead, especially in Lisboa, Porto and the Algarve.',
          'The cost of revisão is often higher than at chain oficinas: a guide is €180–500 for ordinary servicing; premium brands and major services are higher.',
          'After the work, ask for a fatura with NIF, a breakdown of peças/mão de obra and an entry in the digital livro de revisões or paper service plan.',
          'If additional repairs are found, request an orçamento before work starts.'
        ] },
        { kind: 'warning', text: 'The legal warranty for a new consumer product in Portugal is governed by DL 84/2021 and is usually 3 years, but the manufacturer may dispute warranty repairs if servicing was done without following specifications. Therefore, for a car under warranty, do not economise on documents: fatura, oil specification, part references, date and mileage are essential.' }
      ]
    },
    {
      id: 'chains',
      title: 'Norauto, Feu Vert, Midas: fast for standard work',
      content: [
        { kind: 'paragraph', text: 'Chain oficinas are convenient for an expat: websites with preços, online booking, clear revisão packages and many locations near shopping centres. This is a good option for oil, filters, tyres, travões, bateria, escovas, ar condicionado and a pré-IPO check.' },
        { kind: 'checklist', items: [
          'Norauto is strong in tyres, batteries, revisão, minor repairs and accessories.',
          'Feu Vert has a similar format: revisão, pneus, travões, ar condicionado and diagnostics.',
          'Midas is a network of quick oficinas for servicing, brakes, exhausts, shock absorbers and diagnostics.',
          'Usually cheaper than a concessionário: basic revisão is often €80–250, but the final price depends on oil, filters and model.',
          'Suitable for popular European and Japanese models without a complex fault.',
          'Check whether the price includes filtro de habitáculo, filtro de combustível, resetting the service indicator and 23% IVA on the mainland.',
          'For rare models, complex electronics, automatic gearboxes, ADAS calibration and EVs, ask in advance whether they have the equipment.'
        ] },
        { kind: 'warning', text: 'A “revisão desde €79” package almost always means a base price. Fully synthetic oil with the required specification, a large oil capacity, fuel filter, spark plugs, brake fluid and diagnostics are charged separately.' }
      ]
    },
    {
      id: 'bosch-independent',
      title: 'Bosch Car Service and independent oficinas',
      content: [
        { kind: 'paragraph', text: 'Bosch Car Service is a network of independent certified oficinas. It is a compromise between a dealer and fast-fit chains: usually cheaper than a concessionário, but stronger in diagnostics, electronics, diesel systems, ABS/ESP, sensores and repairs that are not limited to “oil + tyres”.' },
        { kind: 'checklist', items: [
          'A good choice for a car out of warranty when diagnostics are needed, not just servicing.',
          'They can often work with multimarcas and have professional diagnostic equipment.',
          'The price of a typical revisão is often €120–350; complex diagnostics and repairs are charged separately.',
          'Quality depends on the specific oficina: the network provides standards, but the workshop is still local.',
          'Check Google reviews, ACP recommendations, waiting time and willingness to provide an orçamento escrito.',
          'Ask for old parts to be returned if expensive components are replaced: alternador, compressor A/C, sensores, injectores.',
          'For caixa automática, corrente de distribuição, embraiagem, turbo and DPF, check experience specifically with your model.'
        ] },
        { kind: 'paragraph', text: 'Independent bairro oficinas can be even cheaper, but the risk is higher: fewer formal processes, they do not always issue a detailed fatura, and sometimes fit “marca branca” parts without explanation. This is acceptable for an old car, but not for warranty or expensive repairs.' }
      ]
    },
    {
      id: 'booking-and-documents',
      title: 'How to book and avoid overpaying 🧾',
      content: [
        { kind: 'paragraph', text: 'In Portugal, it is normal practice to ask for an orçamento before repairs. For revisão, provide the matrícula, VIN, mileage, year, engine and a photo of the last service plan. Ask for a price with IVA and a split between peças/mão de obra.' },
        { kind: 'checklist', items: [
          'Say: “Quero orçamento para revisão anual conforme plano do fabricante, com IVA incluído.”',
          'Check the oil: specification, viscosity, brand and volume in litres.',
          'Ask for the list of filters: óleo, ar, habitáculo, combustível.',
          'Ask whether diagnóstico eletrónico and reset do indicador de manutenção are included.',
          'Do not agree to additional work by phone without a price: ask for photos/video and an orçamento.',
          'After the repair, check the fatura: NIF, matrícula, quilometragem, part references, mão de obra, IVA.',
          'Save the fatura as a PDF: it will be useful when selling, under warranty and in a dispute with the oficina.',
          'If the repair is expensive, compare at least 2 offers: concessionário + Bosch/independente or chain + Bosch.'
        ] },
        { kind: 'warning', text: 'Do not leave the car with the wording “faça o que for preciso”. This opens the door to a bill of hundreds of euros without your control. Limit the budget in writing: “Não executar trabalhos adicionais sem autorização por escrito”.' }
      ]
    },
    {
      id: 'which-one-to-choose',
      title: 'Quick choice by situation',
      content: [
        { kind: 'checklist', items: [
          'New car under warranty: concessionário or an oficina that documents compliance with the plano do fabricante.',
          'Recall, software update, ADAS fault, keys, multimedia: concessionário.',
          'Oil, filters, tyres, bateria, travões without complex diagnostics: Norauto / Feu Vert / Midas.',
          'Check before IPO: a chain or Bosch, if a quick pré-inspeção is needed.',
          'Check before buying a used car: Bosch, ACP inspection or an independent oficina with diagnostics.',
          'Problems with diesel, DPF, injectores, sensores, ABS/ESP: Bosch Car Service or a specialist oficina.',
          'Old budget car: an independent bairro oficina can be cost-effective if there are recommendations and a fatura.',
          'Premium, hybrid, EV, automatic gearbox: do not choose by price alone; check equipment and experience.'
        ] },
        { kind: 'paragraph', text: 'A practical strategy for 2026: while the warranty is active, keep the history with a concessionário or document independent servicing very carefully. After the warranty, do revisão at Bosch/a good independent oficina, while tyres, battery and simple jobs can be done at Norauto/Feu Vert/Midas.' }
      ]
    }
  ],
  costs: [
    { label: 'Basic revisão at a chain oficina', amountEURMin: 80, amountEURMax: 250, note: 'Guide price for oil and basic filters; depends on the engine, oil specification and included work.' },
    { label: 'Revisão at Bosch Car Service / good independent oficina', amountEURMin: 120, amountEURMax: 350, note: 'Average market price for ordinary servicing; diagnostics and repairs are charged separately.' },
    { label: 'Revisão at a concessionário', amountEURMin: 180, amountEURMax: 500, note: 'Ordinary scheduled servicing; premium brands, major interval services, spark plugs, brake fluid and automatic gearboxes can cost significantly more.' },
    { label: 'Diagnóstico eletrónico', amountEURMin: 30, amountEURMax: 90, note: 'Often free only if the repair is done there as well; check in advance.' },
    { label: 'Tyre replacement, labour for 4 wheels', amountEURMin: 40, amountEURMax: 90, note: 'Excluding the cost of tyres; balancing and válvulas may be charged separately.' }
  ],
  sources: [
    { title: 'IMT — inspeções, veículos and official information on motor vehicles', url: 'https://www.imt-ip.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ACP — manutenção automóvel, inspeção and practical advice for drivers', url: 'https://www.acp.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 84/2021 — direitos do consumidor na compra e garantia de bens', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/84-2021-172938301', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Bosch Car Service Portugal — rede de oficinas multimarcas', url: 'https://www.boschcarservice.com/pt/pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
