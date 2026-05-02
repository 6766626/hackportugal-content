export default {
  editorialVoice: 'hackportugal',
  id: 'imovel-urbano-vs-rustico',
  categoryId: 'housing_buy',
  title: 'Urban vs rural property: IMI, taxes and permits',
  tldr: 'In Portugal, a prédio urbano is a house, flat, building plot or property with an urban purpose; a prédio rústico is agricultural/forestry land. IMI differs: urbano is usually 0.3–0.45% of the VPT per year, rústico is 0.8%. But the main risk is not the rate, it is the right to build: on rústico, you often cannot build housing without compatibility with the PDM/PDI, RAN/REN, ICNF and a Câmara Municipal licence. IUC does not apply to land: it is a vehicle tax. Before buying, check the caderneta predial, certidão permanente, PDM and restrictions.',
  tags: ['imi', 'rural', 'urban', 'pdm', 'purchase'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'definitions',
      title: '1. What urbano, rústico and misto mean',
      content: [
        { kind: 'paragraph', text: 'The property classification in Finanças is called natureza do prédio. It appears in the caderneta predial and affects IMI, the VPT valuation, IMT on purchase and the permitted uses of the land.' },
        { kind: 'checklist', items: [
          'Prédio urbano — a flat, house, commercial premises, warehouse, industrial property, as well as terreno para construção.',
          'Prédio rústico — land intended for agricultural or forestry use, where income is expected from the land rather than from a building.',
          'Prédio misto — one property contains both rústico and urbano parts: for example, a house + agricultural land in one registration.',
          'VPT — valor patrimonial tributário, the tax value in Finanças; IMI is calculated from it.',
          'Caderneta predial — the property record in Finanças: natureza, VPT, area, owner, artigo matricial.',
          'Certidão permanente do registo predial — registration at the Conservatória: owner, mortgage, easements, attachments.',
          'Descrição predial and artigo matricial are not the same thing: the first is the record at the Conservatória, the second is the tax record in Finanças.',
          'Advertising wording such as “quinta”, “monte”, “ruína” or “terreno com viabilidade” proves nothing without the PDM/PDI and written information from the Câmara Municipal.'
        ] },
        { kind: 'warning', text: 'If an advert says “rústico com ruína”, it does not mean you can restore the house for residential use. The ruin may not have a lawful licença de utilização, may be outside the urban perimeter or may be in RAN/REN/an ICNF area.' }
      ]
    },
    {
      id: 'taxes',
      title: '2. Taxes: IMI, IMT, IS, AIMI and where IUC fits in',
      content: [
        { kind: 'paragraph', text: 'The main recurring difference is IMI. For urbano, the rate is set by the Câmara Municipal within 0.3–0.45% of the VPT per year. For rústico, the rate is fixed at 0.8% of the VPT. The payment notice usually arrives through Portal das Finanças in May; for amounts above €100, 2–3 payments may be possible according to the Finanças calendar.' },
        { kind: 'checklist', items: [
          'IMI urbano: 0.3–0.45% of the VPT; check the specific rate for the concelho on Portal das Finanças.',
          'IMI rústico: 0.8% of the VPT.',
          'IMT on the purchase of urbano housing for permanent residence — a progressive scale; for second homes/investments, the scale is different.',
          'IMT for prédio rústico is usually 5% of the transaction price or VPT, whichever is higher.',
          'IMT for other urban property, not housing for own permanent residence, is often 6.5%.',
          'Imposto do Selo on property purchase — 0.8% of the price/VPT, whichever is higher.',
          'AIMI applies to high-value urban property: usually to the sum of VPT for urbano habitacional and terrenos para construção above €600,000 per person; rústico is usually not included in the AIMI base.',
          'IRS/IRC on sale: capital gain is calculated not by the word urbano/rústico, but by the purchase price, sale price, expenses, resident status and timeframes.',
          'IUC is a tax on cars, motorbikes, boats and certain vehicles. It is not a tax on imóvel and is not paid for land or a house.',
          'A tractor, trailer or agricultural machinery may have its own registration/vehicle rules, but that is separate from IMI on the plot.'
        ] },
        { kind: 'warning', text: 'Low IMI on rústico does not offset the risk if you are buying land “for a house” and the Câmara Municipal does not confirm the right to build. The loss may not be tax-related but legal: the property will remain agricultural land without housing.' }
      ]
    },
    {
      id: 'construction',
      title: '3. Can you build on rústico',
      content: [
        { kind: 'paragraph', text: 'The decision is made not by Finanças, but by spatial planning: the PDM or PDI, planta de ordenamento, planta de condicionantes, RAN, REN, ICNF, Rede Natura 2000, fire restrictions and Câmara Municipal rules. The rústico tax classification is only one signal, not the full answer.' },
        { kind: 'checklist', items: [
          'Ask the seller for the caderneta predial, certidão permanente, planta cadastral and any old licences.',
          'Check the PDM/PDI on the Câmara Municipal website: land category, urban perimeter, espaços agrícolas, florestais, naturais, industriais.',
          'Check the planta de condicionantes: RAN, REN, servidões administrativas, domínio hídrico, power lines, roads, protection zones.',
          'If the plot is forest land or in a high fire-risk area, check ICNF and the municipal regras de gestão de combustível.',
          'For construction, you need a projeto submitted by an architect/engineer, and a licence or comunicação prévia at the Câmara Municipal.',
          '“Viabilidade de construção” is best obtained in writing: a pedido de informação prévia (PIP) or official informação urbanística.',
          'Restoring a ruína may be easier than new construction only if there is proven legality of the existing building and permitted uso.',
          'A borehole, septic tank, access road, electricity and water supply require separate checks; the existence of a neighbour’s connection does not give you an automatic right.',
          'A mobile home, tiny house, caravan or contentor does not always bypass the rules: if there is permanent placement, connections and residential use, the Câmara may consider it an urban operation.'
        ] },
        { kind: 'warning', text: 'Buying rústico on the basis of an agent’s verbal promise that “you can change it to urbano later” is a red flag. Changing the classification depends on the PDM/PDI, Câmara Municipal procedures and sometimes regional/national restrictions. It is not done by a simple declaration to Finanças.' }
      ]
    },
    {
      id: 'due-diligence',
      title: '4. Checks before CPCV and escritura',
      content: [
        { kind: 'paragraph', text: 'For an expat buyer, the safe sequence is: first check ownership and restrictions, then taxes, then sign the CPCV. This is especially important for rural property, where boundaries, access and buildings are often described less clearly than in urban areas.' },
        { kind: 'checklist', items: [
          'Match the seller in the certidão permanente with the person signing the CPCV.',
          'Check whether there is any hipoteca, penhora, arresto, usufruto, direito de preferência, servidão de passagem.',
          'Compare the area in the caderneta predial, Conservatória, cadastro and the real area on the map; discrepancies are a common source of disputes.',
          'Check acesso: a public road or only an easement through neighbours; a verbal arrangement is not the same as a registered right.',
          'Ask for a licença de utilização for an existing house or confirmation of exemption from it for old properties.',
          'Check that the property is not AUGI, illegal development or part of an unformalised inheritance.',
          'Request dívida de condomínio if it is urbano in a building or condomínio fechado.',
          'Check IMI arrears: the seller’s debts should not transfer to you, but they may complicate the transaction.',
          'For agricultural land, check the rights of tenants, neighbours, baldios communities and possible direitos de preferência.',
          'Include a condition in the CPCV for the return of the sinal if the PIP/urbanistic information confirms the impossibility of the stated use.',
          'Do not transfer a large sinal without checks by a lawyer or solicitador, especially if buying remotely.'
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
          'Evidence of real agricultural activity is needed, not just ownership of a plot.',
          'Family income, amount of work and farm structure matter; the criteria are checked under the rules in force.',
          'The status may be useful for subsidies, local markets, short supply chains and rural development programmes.',
          'For building housing, the PDM/PDI, Câmara Municipal, RAN/REN and other restrictions still decide.',
          'If the aim is to live on the land, clarify in advance whether habitação do agricultor or apoio agrícola is permitted in this specific zone.',
          'An agricultural building, armazém agrícola or apoio agrícola is not the same as a residential house: you cannot change the use without a licence.'
        ] },
        { kind: 'warning', text: 'Do not buy rústico just because the seller says “apply for agricultor familiar and build”. Request a written opinion from the Câmara Municipal and check the RAN/REN/ICNF regimes before the transaction.' }
      ]
    },
    {
      id: 'conversion',
      title: '6. How rústico becomes urbano',
      content: [
        { kind: 'paragraph', text: 'In practice, there are two different processes: planning permission for use/construction and tax updating in Finanças. Finanças does not legalise construction — it only reflects the property in the matriz after the fact or after Câmara Municipal documents.' },
        { kind: 'checklist', items: [
          'First check the PDM/PDI: whether the zone allows urban use or construction of the specific type.',
          'If you need a preliminary position, submit a PIP to the Câmara Municipal.',
          'If the project is admissible, the architect submits the projeto de arquitetura and specialist designs; the Câmara issues a licence or accepts comunicação prévia.',
          'After completion of the works, autorização de utilização is issued, if applicable.',
          'Then Modelo 1 do IMI is submitted to Finanças to update the matriz and VPT.',
          'A change in VPT may increase IMI: rústico with a low VPT becomes urbano with a new valuation after a legal house is built.',
          'A large-scale change of zone from rústico to urbano is possible through an amendment to the PDM/PDI, but this is a political-administrative process, not an individual “buyer’s application”.',
          'If a house was built illegally, legalisation is not always possible; fines and a demolition order are real risks.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'IMI urbano', amountEURMin: 0, amountEURMax: 0, note: '0.3–0.45% of the VPT per year; the rate depends on the município, and the amount in euros is calculated individually.' },
    { label: 'IMI rústico', amountEURMin: 0, amountEURMax: 0, note: '0.8% of the VPT per year.' },
    { label: 'IMT on purchase of prédio rústico', amountEURMin: 0, amountEURMax: 0, note: 'Usually 5% of the transaction price or VPT, whichever is higher.' },
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
      title: 'ICNF: environmental constraints, forest, Rede Natura and gestão de combustível',
      url: 'https://www.icnf.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Regime jurídico dos instrumentos de gestão territorial: PDM/PDI and spatial planning',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2015-66785843',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
