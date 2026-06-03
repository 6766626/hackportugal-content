export default {
  editorialVoice: 'hackportugal',
  id: 'imovel-urbano-vs-rustico',
  categoryId: 'housing_buy',
  title: 'Imóvel urbano vs rústico: IMI, taxes and permits',
  tldr: 'In Portugal, prédio urbano means a house, flat, building plot or property with an urban purpose; prédio rústico means agricultural/forestry land. IMI differs: urbano is usually 0.3–0.45% of the VPT per year, rústico is 0.8%. But the main risk is not the rate, but the right to build: on rústico you often cannot build a home without compatibility with the PDM/PDI, RAN/REN, ICNF and a Câmara Municipal licence. IUC does not apply to land: it is a vehicle tax. Before buying, check the caderneta predial, certidão permanente, PDM and restrictions.',
  tags: ['imi', 'rústico', 'urbano', 'pdm', 'purchase'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'definitions',
      title: '1. What urbano, rústico and misto mean',
      content: [
        { kind: 'paragraph', text: 'The property classification in Finanças is called natureza do prédio. It is shown in the caderneta predial and affects IMI, the VPT valuation, IMT on purchase and what may be done with the land.' },
        { kind: 'checklist', items: [
          'Prédio urbano — a flat, house, commercial unit, warehouse, industrial property, as well as terreno para construção.',
          'Prédio rústico — land for agricultural or forestry use, where the expected income comes from the land rather than from a building.',
          'Prédio misto — one property contains both rústico and urbano parts: for example, a house + agricultural land in one registration.',
          'VPT — valor patrimonial tributário, the tax value in Finanças; IMI is calculated from it.',
          'Caderneta predial — the property record in Finanças: natureza, VPT, área, proprietário, artigo matricial.',
          'Certidão permanente do registo predial — the registration at the Conservatória: owner, mortgage, easements, seizures.',
          'Descrição predial and artigo matricial are not the same thing: the first is the record at the Conservatória, the second is the tax record in Finanças.',
          'An advert saying “quinta”, “monte”, “ruína” or “terreno com viabilidade” proves nothing without the PDM/PDI and written information from the Câmara Municipal.'
        ] },
        { kind: 'warning', text: 'If the advert says “rústico com ruína”, this does not mean you can restore the house for residential use. The ruin may have no legal licença de utilização, may be outside the urban perimeter or may be in RAN/REN/an ICNF area.' }
      ]
    },
    {
      id: 'taxes',
      title: '2. Taxes: IMI, IMT, IS, AIMI and where IUC fits in',
      content: [
        { kind: 'paragraph', text: 'The main recurring difference is IMI. For urbano, the rate is set by the Câmara Municipal within 0.3–0.45% of the VPT per year. For rústico, the rate is fixed at 0.8% of the VPT. The payment notice usually arrives through Portal das Finanças in May; for amounts over €100, 2–3 instalments may be available according to the Finanças calendar.' },
        { kind: 'checklist', items: [
          'IMI urbano: 0.3–0.45% of the VPT; check the specific rate for the concelho on Portal das Finanças.',
          'IMI rústico: 0.8% of the VPT.',
          'IMT on buying an urbano home for permanent residence follows a progressive scale; for second homes/investments the scale is different.',
          'IMT for prédio rústico is usually 5% of the transaction price or the VPT, whichever is higher.',
          'IMT for other urban property, not housing for your own permanent residence, is often 6.5%.',
          'Imposto do Selo on buying property is 0.8% of the price/VPT, whichever is higher.',
          'AIMI applies to high-value urban property: usually to the sum of VPT urbano habitacional and terrenos para construção above €600,000 per person; rústico is usually not included in the AIMI base.',
          'IRS/IRC on sale: capital gain is calculated not by the word urbano/rústico, but by the purchase price, sale price, expenses, residency status and timeframes.',
          'IUC is a tax on cars, motorcycles, boats and certain vehicles. It is not a tax on imóvel and is not paid for land or a house.',
          'A tractor, trailer or agricultural machinery may have its own registration/vehicle rules, but that is separate from IMI on the plot.'
        ] },
        { kind: 'warning', text: 'Low IMI on rústico does not offset the risk if you buy land “for a house” and the Câmara Municipal does not confirm the right to build. The loss may not be tax-related, but legal: the property will remain agricultural land with no home.' }
      ]
    },
    {
      id: 'construction',
      title: '3. Can you build on rústico',
      content: [
        { kind: 'paragraph', text: 'The decision is not made by Finanças, but by territorial planning: PDM or PDI, planta de ordenamento, planta de condicionantes, RAN, REN, ICNF, Rede Natura 2000, fire restrictions and Câmara Municipal rules.\n\nThe rústico tax classification is only one signal, not the full answer.' },
        { kind: 'checklist', items: [
          'Ask the seller for the caderneta predial, certidão permanente, planta cadastral and any old licences.',
          'Check the PDM/PDI on the Câmara Municipal website: land category, urban perimeter, espaços agrícolas, florestais, naturais, industriais.',
          'Check the planta de condicionantes: RAN, REN, servidões administrativas, domínio hídrico, power lines, roads, protected zones.',
          'If the plot is forested or in a high fire-risk area, check ICNF and municipal regras de gestão de combustível.',
          'For construction, you need a projeto submitted by an architect/engineer, and a licença or comunicação prévia at the Câmara Municipal.',
          '“Viabilidade de construção” is best obtained in writing: pedido de informação prévia (PIP) or official informação urbanística.',
          'Restoring a ruína may be easier than new construction only if there is proven legality of the existing building and a permitted uso.',
          'A borehole, septic tank, access, electricity and water supply require separate checks; a neighbour’s connection does not give you an automatic right.',
          'A mobile home, tiny house, caravan or contentor does not always bypass the rules: if there is permanent placement, connections and residential use, the Câmara may treat it as an urban operation.'
        ] },
        { kind: 'warning', text: 'Buying rústico on the agent’s verbal promise that “you can change it to urbano later” is a red flag. Changing the classification depends on the PDM/PDI, Câmara Municipal procedures and sometimes regional/national restrictions. It is not done by a simple declaration to Finanças.' }
      ]
    },
    {
      id: 'due-diligence',
      title: '4. Checks before CPCV and escritura',
      content: [
        { kind: 'paragraph', text: 'For an expat buyer, the safe sequence is: first check ownership and restrictions, then taxes, then sign the CPCV. This is especially important for rural property, where boundaries, access and buildings are often described less clearly than in cities.' },
        { kind: 'checklist', items: [
          'Match the seller in the certidão permanente with the person signing the CPCV.',
          'Check whether there is any hipoteca, penhora, arresto, usufruto, direito de preferência, servidão de passagem.',
          'Compare the area in the caderneta predial, Conservatória, cadastro and the real area on the map; discrepancies are a common source of disputes.',
          'Check acesso: a public road or only an easement through neighbours; a verbal arrangement is not the same as a registered right.',
          'Ask for the licença de utilização for an existing house or confirmation that it is exempt for older properties.',
          'Check whether the property is an AUGI, illegal construction or part of an unregularised inheritance.',
          'Request dívida de condomínio if it is urbano in a building or condomínio fechado.',
          'Check IMI arrears: the seller’s debts should not pass to you, but they may complicate the transaction.',
          'For agricultural land, check the rights of tenants, neighbours, baldios communities and possible direitos de preferência.',
          'Include a clause in the CPCV for the return of the sinal if the PIP/urbanistic information confirms that the stated use is impossible.',
          'Do not transfer a large sinal without review by a lawyer or solicitador, especially if buying remotely.'
        ] }
      ]
    },
    {
      id: 'agricultor-familiar',
      title: '5. Agricultor familiar: useful, but not a “magic exemption”',
      content: [
        { kind: 'paragraph', text: 'Estatuto da Agricultura Familiar is a regime for small family farms. It may give access to support programmes, priorities and some administrative simplifications, but by itself it does not turn rústico into urbano and does not give an automatic right to build a house.' },
        { kind: 'checklist', items: [
          'The status is requested through the competent agricultural services, usually linked to an exploração agrícola.',
          'Proof of real agricultural activity is needed, not just ownership of a plot.',
          'Family income, amount of labour and the farm structure matter; criteria are checked under the rules in force.',
          'The status may be useful for subsidies, local markets, short supply chains and rural development programmes.',
          'For housing construction, the decision is still made by the PDM/PDI, Câmara Municipal, RAN/REN and other restrictions.',
          'If the goal is to live on the land, check in advance whether habitação do agricultor or apoio agrícola is permitted in that exact area.',
          'An agricultural building, armazém agrícola or apoio agrícola is not the same as a residential house: you cannot change the use without a licence.'
        ] },
        { kind: 'warning', text: 'Do not buy rústico just because the seller says “register as agricultor familiar and you can build”. Request a written opinion from the Câmara Municipal and check the RAN/REN/ICNF regimes before the transaction.' }
      ]
    },
    {
      id: 'conversion',
      title: '6. How rústico becomes urbano',
      content: [
        { kind: 'paragraph', text: 'In practice there are two different processes: planning permission for use/construction and a tax update in Finanças. Finanças does not legalise construction — it only reflects the property in the matriz after the fact or after documents from the Câmara Municipal.' },
        { kind: 'checklist', items: [
          'First check the PDM/PDI: whether the area allows urban use or construction of the specific type.',
          'If a preliminary position is needed, submit a PIP to the Câmara Municipal.',
          'If the project is allowed, the architect submits the projeto de arquitetura and specialities; the Câmara issues a licence or accepts comunicação prévia.',
          'After completion of the works, autorização de utilização is issued, if applicable.',
          'Then Modelo 1 do IMI is submitted to Finanças to update the matriz and VPT.',
          'A change in VPT may increase IMI: rústico with a low VPT becomes urbano with a new valuation after a legal house is built.',
          'A mass change of zoning from rústico to urbano is possible through an amendment to the PDM/PDI, but this is a political-administrative process, not an individual “buyer application”.',
          'If the house was built illegally, legalisation is not always possible; fines and a demolition order are real risks.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'IMI urbano', amountEURMin: 0, amountEURMax: 0, note: '0.3–0.45% of the VPT per year; the rate depends on the município, and the amount in euros is calculated individually.' },
    { label: 'IMI rústico', amountEURMin: 0, amountEURMax: 0, note: '0.8% of the VPT per year.' },
    { label: 'IMT on buying prédio rústico', amountEURMin: 0, amountEURMax: 0, note: 'Usually 5% of the transaction price or VPT, whichever is higher.' },
    { label: 'Imposto do Selo on purchase', amountEURMin: 0, amountEURMax: 0, note: '0.8% of the transaction price or VPT, whichever is higher.' },
    { label: 'Pedido de informação prévia / urbanistic information', amountEURMin: 20, amountEURMax: 300, note: 'Municipal fees vary by Câmara Municipal and type of request.' }
  ],
  sources: [
    {
      title: 'Portal das Finanças: IMI, municipal rates and informação matricial',
      url: 'https://info.portaldasfinancas.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IMI: classification of prédio rústico, urbano and misto',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2003-34500175',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ICNF: environmental condicionantes, forest, Rede Natura and gestão de combustível',
      url: 'https://www.icnf.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Regime jurídico dos instrumentos de gestão territorial: PDM/PDI and territorial planning',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2015-66785843',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
