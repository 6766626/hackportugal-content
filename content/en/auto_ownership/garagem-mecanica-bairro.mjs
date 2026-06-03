export default {
  editorialVoice: 'hackportugal',
  id: 'garagem-mecanica-bairro',
  categoryId: 'auto_ownership',
  title: 'Local garages and oficinas: how to choose a neighbourhood mechanic',
  tldr: 'In Portugal, an independent oficina is often cheaper than a dealer and more convenient for older cars: a revisão is usually €60–150, brake pad/disc replacement €150–400, diagnostics €25–60. Search on Google Maps, Habitissimo, recommendations from neighbours and networks such as Bosch Car Service, Norauto, Midas, Feu Vert, ACP. Always ask for an orçamento before work, a fatura with NIF after payment, and a list of parts. If work is pushed on you, they refuse to issue a receipt, or there is “repair with no result”, complaints go through Livro de Reclamações and ASAE.',
  tags: ['oficina', 'car', 'mechanic', 'asae'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'where-to-search',
      title: 'Where to look for an oficina nearby',
      content: [
        { kind: 'paragraph', text: 'In Portugal, “garagem” in everyday speech often means a small independent workshop, while officially you will more often see oficina auto, oficina mecânica, reparação automóvel. For a routine revisão, brakes, tyres, battery and diagnostics, you do not necessarily need to go to the dealer: a local oficina is usually quicker and cheaper.' },
        { kind: 'checklist', items: [
          'Google Maps: search for “oficina auto”, “mecânico”, “revisão auto”, “pneus”, “travões” + your neighbourhood',
          'Habitissimo: useful for requesting several orçamento, especially for bodywork and pintura',
          'Neighbourhood groups on Facebook/WhatsApp/Telegram: ask for “oficina honesta no bairro”',
          'Junta de Freguesia and neighbours: in small towns, recommendations are often more reliable than advertising',
          'Networks: Bosch Car Service, Norauto, Midas, Feu Vert — more expensive than a small oficina, but more standardised',
          'ACP: useful for club members, towing, checks and car advice',
          'Brand dealer: better for warranty, recall campaigns, complex electronics and newer cars'
        ] }
      ]
    },
    {
      id: 'first-filter',
      title: 'Initial filter: how to tell whether a workshop is decent',
      content: [
        { kind: 'paragraph', text: 'A good oficina does not necessarily look like a showroom. Transparency matters more: the mechanic receives the car, records the symptoms, states a price range in advance and calls before fitting expensive parts.' },
        { kind: 'checklist', items: [
          'Google rating of at least 4.2 and not just 5 reviews from friends',
          'Reviews contain specifics: “revisão”, “travões”, “embreagem”, “diagnóstico”, not only “muito bom”',
          'The mechanic immediately asks for the matrícula, VIN or model/year/engine',
          'Before work, they provide an orçamento or at least a written estimate by WhatsApp/SMS',
          'They agree marcas das peças: original, OEM or aftermarket',
          'They are willing to show the old replaced parts on request',
          'They issue a fatura/recibo with NIF, not just “pague em dinheiro sem IVA”',
          'There is a physical Livro de Reclamações or access to the electronic Livro de Reclamações',
          'They do not pressure you with phrases like “it is dangerous to drive, everything must be changed today” if the problem is not critical'
        ] },
        { kind: 'warning', text: 'Red flag: an oficina refuses to name a price before starting, asks you to leave the car “for a couple of days so we can have a look”, does not record mileage and complaints, offers payment only in cash without fatura. This is not always fraud, but the risk of a dispute rises sharply.' }
      ]
    },
    {
      id: 'prices-2026',
      title: 'Typical prices in 2026',
      content: [
        { kind: 'paragraph', text: 'Prices depend on the region, brand, engine, quality of parts and access to the component. Lisbon, Cascais, Porto and the Algarve are usually more expensive than inland areas. For popular European B/C-segment models, the guide prices are:' },
        { kind: 'checklist', items: [
          'Simple revisão: oil + oil filter + basic check — €60–150',
          'Full revisão: oil, filters, levels, diagnostics — €120–250',
          'OBD computer diagnostics — €25–60, sometimes free if repair work follows',
          'Front brake pad replacement — €80–180',
          'Pads + discs on one axle — €150–400',
          'Battery with fitting — €80–220',
          'Tyre replacement: fitting/balancing usually €10–20 per wheel excluding the cost of tyres',
          'Air-conditioning recharge — €50–100, if there is no leak',
          'Hourly labour at an independent oficina — often €30–60/hour; a dealer can be noticeably more expensive'
        ] },
        { kind: 'warning', text: 'A very cheap revisão for €30–40 often does not include quality oil, filters or IVA. Ask what oil is being used: viscosity, manufacturer approval and brand must suit your engine.' }
      ]
    },
    {
      id: 'booking-and-paperwork',
      title: 'How to book and what to say in Portuguese',
      content: [
        { kind: 'paragraph', text: 'In small oficinas, bookings are often made via WhatsApp. Write briefly: model, year, engine, matrícula, mileage, symptoms, what has already been changed. A photo of the dashboard error and a video of the sound help more than a long description.' },
        { kind: 'checklist', items: [
          '“Preciso de uma revisão. Pode dar orçamento?” — I need a revisão, can you give an estimate?',
          '“Qual é o preço com IVA e mão de obra incluída?” — is the price with IVA and labour included?',
          '“Que marca de óleo e filtros vai usar?” — what brand of oil and filters will you use?',
          '“Antes de trocar peças caras, ligue-me por favor.” — before replacing expensive parts, please call me',
          '“Pode enviar orçamento por WhatsApp?” — can you send the estimate by WhatsApp?',
          '“Quero fatura com NIF.” — I need an invoice with NIF',
          '“Pode guardar as peças antigas para eu ver?” — can you keep the old parts so I can see them?',
          '“Quando fica pronto?” — when will it be ready?'
        ] },
        { kind: 'paragraph', text: 'Minimum set of documents when handing over the car: Documento Único Automóvel or vehicle details, your contact, NIF for the fatura, description of the problem. Do not leave documents, money, Via Verde, valuables or spare keys in the car.' }
      ]
    },
    {
      id: 'inspection-and-safety',
      title: 'IPO, IMT and safety: where the line is between repairs and obligations',
      content: [
        { kind: 'paragraph', text: 'A normal oficina repairs cars, but does not replace the inspeção periódica obrigatória (IPO).\n\nThe IPO deadline depends on the type and age of the car; check against the Documento Único Automóvel and IMT rules. If the car fails the IPO, an oficina can fix the defects, but the reinspection is done at a centro de inspeção.' },
        { kind: 'checklist', items: [
          'Before buying a used car, order a pré-inspeção or diagnostics at an independent oficina',
          'After repairs to brakes, steering, suspension and tyres, require a test drive and confirmation of the work in the fatura',
          'If the check engine, airbag, ABS or ESP light is on — do not settle for simply “clearing the error”',
          'In an accident and bodywork repair, clarify whether airbags, sensores, estrutura, alinhamento are affected',
          'For hybrids and EVs, choose an oficina with high-voltage experience, not just any garagem',
          'For cars under warranty, clarify whether servicing outside the dealer will affect warranty conditions',
          'After replacing the timing belt, ask for the mileage and parts kit to be stated in the fatura'
        ] },
        { kind: 'warning', text: 'Do not agree to “pass the IPO through contacts”. A legal check is carried out only at authorised centros de inspeção. Manipulation of mileage, emissions or DPF/EGR can create problems at IPO, on sale and in an insurance claim.' }
      ]
    },
    {
      id: 'complaints',
      title: 'If you have been cheated: fatura, Livro de Reclamações, ASAE',
      content: [
        { kind: 'paragraph', text: 'A dispute is easier to win if you have a trail: orçamento, correspondence, photos/videos before repair, fatura, list of parts and the date the car was handed over. A verbal agreement to “do it cheaply” is almost useless.' },
        { kind: 'checklist', items: [
          'First calmly request a written explanation: what was done, which parts were fitted, why the price increased',
          'Ask for a copy of the fatura and an itemised recibo: peças, mão de obra, IVA',
          'If the price increased without agreement — state that the orçamento was not approved',
          'If the fault has not been fixed — ask for repeat diagnostics without a new charge',
          'Keep WhatsApp, calls, photos of parts, odometer readings and the dashboard error',
          'Fill in the physical Livro de Reclamações on site or the electronic Livro de Reclamações',
          'If they refuse to provide the Livro de Reclamações or fatura, file a complaint with ASAE',
          'For major damage, use an advogado, Centro de Arbitragem de Conflitos de Consumo or legal protection under insurance'
        ] },
        { kind: 'warning', text: 'Do not take the car away “without paperwork” if a dispute has already arisen. Paying cash without fatura deprives you of evidence and usually means that IVA was not declared.' }
      ]
    }
  ],
  costs: [
    { label: 'Simple revisão', amountEURMin: 60, amountEURMax: 150, note: 'Oil, oil filter and basic check; depends on the oil and engine.' },
    { label: 'Full revisão', amountEURMin: 120, amountEURMax: 250, note: 'Oil, several filters, levels, diagnostics; it may be more expensive at a dealer.' },
    { label: 'OBD diagnostics', amountEURMin: 25, amountEURMax: 60, note: 'Sometimes credited towards the cost of repair if you leave the car.' },
    { label: 'Brake pad/disc replacement', amountEURMin: 150, amountEURMax: 400, note: 'One axle: discs + pads + labour; premium parts are more expensive.' },
    { label: 'Tyre fitting and balancing', amountEURMin: 10, amountEURMax: 20, note: 'Usually per wheel, excluding the cost of the tyre itself.' }
  ],
  sources: [
    { title: 'IMT — Instituto da Mobilidade e dos Transportes: transport rules and inspeção', url: 'https://www.imt-ip.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ACP — Automóvel Club de Portugal: car services, assistance and consumer information', url: 'https://www.acp.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ASAE — Autoridade de Segurança Alimentar e Económica: economic inspection and complaints', url: 'https://www.asae.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Livro de Reclamações Eletrónico — official consumer complaints portal', url: 'https://www.livroreclamacoes.pt/Inicio/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
