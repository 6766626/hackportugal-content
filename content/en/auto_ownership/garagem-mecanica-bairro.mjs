export default {
  editorialVoice: 'hackportugal',
  id: 'garagem-mecanica-bairro',
  categoryId: 'auto_ownership',
  title: 'Garages and oficinas in your neighbourhood: how to choose a local mechanic',
  tldr: 'In Portugal, an independent oficina is often cheaper than a dealer and more convenient for older cars: a revisão is usually €60–150, brake pads/discs €150–400, diagnostics €25–60. Search via Google Maps, Habitissimo, neighbours’ recommendations and the Bosch Car Service, Norauto, Midas, Feu Vert and ACP networks. Always ask for an orçamento before work starts, a fatura with NIF after payment and a list of parts. If work is pushed on you, the invoice is refused or the “repair has no result”, complain via Livro de Reclamações and ASAE.',
  tags: ['oficina', 'car', 'mechanic', 'asae'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'where-to-search',
      title: 'Where to look for a nearby oficina',
      content: [
        { kind: 'paragraph', text: 'In Portugal, “garagem” in everyday speech often means a small independent workshop, while officially you will more often see oficina auto, oficina mecânica, reparação automóvel. For a standard revisão, brakes, tyres, battery and diagnostics, you do not necessarily need to go to a dealer: a local oficina is usually faster and cheaper.' },
        { kind: 'checklist', items: [
          'Google Maps: search for “oficina auto”, “mecânico”, “revisão auto”, “pneus”, “travões” + your neighbourhood',
          'Habitissimo: useful for requesting several orçamento, especially for bodywork and pintura',
          'Neighbourhood groups on Facebook/WhatsApp/Telegram: ask for an “oficina honesta no bairro”',
          'Junta de Freguesia and neighbours: in small towns, recommendations are often more reliable than advertising',
          'Chains: Bosch Car Service, Norauto, Midas, Feu Vert — more expensive than a small oficina, but more standardised',
          'ACP: useful for club members, towing, checks and car-related advice',
          'Brand dealer: better for warranty, recall campaigns, complex electronics and newer cars'
        ] }
      ]
    },
    {
      id: 'first-filter',
      title: 'Initial filter: how to tell whether a workshop is decent',
      content: [
        { kind: 'paragraph', text: 'A good oficina does not necessarily look like a showroom. Transparency matters more: the mechanic receives the car, records the symptoms, gives a price range in advance and calls before fitting expensive parts.' },
        { kind: 'checklist', items: [
          'Google rating no lower than 4.2 and not just 5 reviews from friends',
          'Reviews include specifics: “revisão”, “travões”, “embreagem”, “diagnóstico”, not just “muito bom”',
          'The mechanic immediately asks for the matrícula, VIN or model/year/engine',
          'Before work starts, they provide an orçamento or at least a written estimate via WhatsApp/SMS',
          'They agree the marcas das peças: original, OEM or aftermarket',
          'They are willing to show the old replaced parts on request',
          'They issue a fatura/recibo with NIF, not just “pague em dinheiro sem IVA”',
          'There is a physical Livro de Reclamações or access to the electronic Livro de Reclamações',
          'They do not pressure you with phrases such as “it is dangerous to drive, everything must be replaced today” if the problem is not critical'
        ] },
        { kind: 'warning', text: 'Red flag: an oficina refuses to name a price before starting, asks you to leave the car “for a couple of days so we can have a look”, does not record the mileage and complaints, or offers cash-only payment without a fatura. This is not always fraud, but the risk of a dispute becomes much higher.' }
      ]
    },
    {
      id: 'prices-2026',
      title: 'Typical prices in 2026',
      content: [
        { kind: 'paragraph', text: 'Prices depend on the region, brand, engine, quality of parts and access to the component. Lisbon, Cascais, Porto and the Algarve are usually more expensive than inland areas. For popular European B/C-segment models, the rough figures are:' },
        { kind: 'checklist', items: [
          'Simple revisão: oil + oil filter + basic check — €60–150',
          'Full revisão: oil, filters, levels, diagnostics — €120–250',
          'OBD computer diagnostics — €25–60, sometimes free if you proceed with the repair',
          'Front brake pad replacement — €80–180',
          'Pads + discs on one axle — €150–400',
          'Battery with installation — €80–220',
          'Tyre replacement: fitting/balancing usually €10–20 per wheel, excluding the cost of tyres',
          'Air-conditioning recharge — €50–100, if there is no leak',
          'Independent oficina labour — often €30–60/hour; a dealer may be noticeably more expensive'
        ] },
        { kind: 'warning', text: 'A very cheap revisão for €30–40 often does not include quality oil, filters or IVA. Ask what oil they will use: viscosity, manufacturer approval and brand must be suitable for your engine.' }
      ]
    },
    {
      id: 'booking-and-paperwork',
      title: 'How to book and what to say in Portuguese',
      content: [
        { kind: 'paragraph', text: 'In small oficinas, booking is often done via WhatsApp. Write briefly: model, year, engine, matrícula, mileage, symptoms, what has already been replaced. A photo of the dashboard error and a video of the noise help more than a long description.' },
        { kind: 'checklist', items: [
          '“Preciso de uma revisão. Pode dar orçamento?” — I need a revisão, can you provide an estimate?',
          '“Qual é o preço com IVA e mão de obra incluída?” — is the price with IVA and labour included?',
          '“Que marca de óleo e filtros vai usar?” — what oil and filter brands will you use?',
          '“Antes de trocar peças caras, ligue-me por favor.” — before replacing expensive parts, please call me',
          '“Pode enviar orçamento por WhatsApp?” — can you send the estimate via WhatsApp?',
          '“Quero fatura com NIF.” — I need an invoice with NIF',
          '“Pode guardar as peças antigas para eu ver?” — can you keep the old parts so I can see them?',
          '“Quando fica pronto?” — when will it be ready?'
        ] },
        { kind: 'paragraph', text: 'Minimum set of documents when handing over the car: Documento Único Automóvel or vehicle details, your contact details, NIF for the fatura, and a description of the problem. Do not leave documents, money, Via Verde, valuables or spare keys in the car.' }
      ]
    },
    {
      id: 'inspection-and-safety',
      title: 'IPO, IMT and safety: where the line is between repair and obligations',
      content: [
        { kind: 'paragraph', text: 'A normal oficina repairs the car, but does not replace the inspeção periódica obrigatória (IPO). The IPO deadline depends on the type and age of the car; check it against the Documento Único Automóvel and IMT rules. If the car has failed the IPO, an oficina can fix the defects, but the reinspection is carried out at a centro de inspeção.' },
        { kind: 'checklist', items: [
          'Before buying a used car, order a pré-inspeção or diagnostics at an independent oficina',
          'After repairs to brakes, steering, suspension and tyres, require a test drive and confirmation of the work on the fatura',
          'If the check engine, airbag, ABS or ESP light is on, do not limit yourself to “clearing the error”',
          'After an accident and bodywork repair, clarify whether the airbags, sensores, estrutura and alinhamento were affected',
          'For hybrids and EVs, choose an oficina with high-voltage experience, not just any garagem',
          'For cars under warranty, check whether servicing outside the dealer network will affect the warranty conditions',
          'After timing-belt replacement, ask for the mileage and parts kit to be stated on the fatura'
        ] },
        { kind: 'warning', text: 'Do not agree to “pass the IPO through contacts”. A legal inspection is carried out only at authorised centros de inspeção. Tampering with mileage, emissions or DPF/EGR can create problems at the IPO, on sale and in an insurance claim.' }
      ]
    },
    {
      id: 'complaints',
      title: 'If you have been deceived: fatura, Livro de Reclamações, ASAE',
      content: [
        { kind: 'paragraph', text: 'A dispute is easier to win if you have a trail: orçamento, correspondence, photos/videos before the repair, fatura, list of parts and the date the car was handed over. A verbal agreement such as “we will do it cheaply” is almost useless.' },
        { kind: 'checklist', items: [
          'First calmly request a written explanation: what was done, which parts were fitted, and why the price increased',
          'Ask for a copy of the fatura and an itemised recibo: peças, mão de obra, IVA',
          'If the price increased without agreement — state that the orçamento was not approved',
          'If the fault has not been fixed — ask for a repeat diagnostic without a new charge',
          'Save WhatsApp messages, calls, photos of parts, odometer readings and the dashboard error',
          'Fill in the physical Livro de Reclamações on site or the electronic Livro de Reclamações',
          'If they refuse to provide the Livro de Reclamações or a fatura, submit a complaint to ASAE',
          'For major damage, use an advogado, Centro de Arbitragem de Conflitos de Consumo or legal protection under your insurance'
        ] },
        { kind: 'warning', text: 'Do not take the car away “without paperwork” if a dispute has already arisen. Paying in cash without a fatura deprives you of evidence and usually means IVA has not been declared.' }
      ]
    }
  ],
  costs: [
    { label: 'Simple revisão', amountEURMin: 60, amountEURMax: 150, note: 'Oil, oil filter and basic check; depends on the oil and engine.' },
    { label: 'Full revisão', amountEURMin: 120, amountEURMax: 250, note: 'Oil, several filters, levels, diagnostics; may be more expensive at a dealer.' },
    { label: 'OBD diagnostics', amountEURMin: 25, amountEURMax: 60, note: 'Sometimes credited against the repair cost if you leave the car there.' },
    { label: 'Brake pad/disc replacement', amountEURMin: 150, amountEURMax: 400, note: 'One axle: discs + pads + labour; premium parts cost more.' },
    { label: 'Tyre fitting and balancing', amountEURMin: 10, amountEURMax: 20, note: 'Usually per wheel, excluding the cost of the tyre itself.' }
  ],
  sources: [
    { title: 'IMT — Instituto da Mobilidade e dos Transportes: transport rules and inspeção', url: 'https://www.imt-ip.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ACP — Automóvel Club de Portugal: car services, assistance and consumer information', url: 'https://www.acp.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ASAE — Autoridade de Segurança Alimentar e Económica: economic inspection and complaints', url: 'https://www.asae.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Livro de Reclamações Eletrónico — official consumer complaints portal', url: 'https://www.livroreclamacoes.pt/Inicio/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
