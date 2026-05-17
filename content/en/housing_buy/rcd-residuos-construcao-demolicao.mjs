export default {
  editorialVoice: 'hackportugal',
  id: 'rcd-residuos-construcao-demolicao',
  categoryId: 'housing_buy',
  title: 'RCD: construction and demolition waste — how to remove it legally',
  tldr: 'RCD (resíduos de construção e demolição) means tiles, concrete, bricks, plasterboard and bathroom fittings left after renovation. In Portugal you cannot put them in ordinary bins or leave them by the rubbish area: you need an Ecocentro for small DIY volumes or a licensed transportadora + aterro/operador RCD and e-GAR/Guia de Acompanhamento de Resíduos. Small volumes at a municipal Ecocentro are often free, but limits vary; commercial removal in 2026 is usually €80–200/m³ plus possible landfill/operator fees.',
  tags: ['rcd', 'renovation', 'ecocentro', 'gar'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-rcd',
      title: 'What counts as RCD, and what does not',
      content: [
        { kind: 'paragraph', text: 'RCD means resíduos de construção e demolição: waste from construction, renovation, demolition and small obras. In everyday situations this is most often bags of tiles, cement, plaster, bricks, concrete, plasterboard, leftover pipes, doors, windows and sanitaryware.' },
        { kind: 'checklist', items: [
          'Tiles, azulejos, ceramics, bricks, concrete — RCD.',
          'Plaster, cement, sand, gravel, construction dust — RCD.',
          'Plasterboard and insulation — RCD, but they may require a separate fraction.',
          'Old doors, windows, laminate flooring, skirting boards — often accepted as RCD/volumosos, depending on the municipality.',
          'Paint, solvents, adhesives, sealants — not ordinary RCD; these are hazardous waste, check with the Ecocentro.',
          'Asbestos/amianto — a separate hazardous category; an ordinary RCD carrier is not suitable.',
          'Household rubbish, shopping cardboard, food waste — not RCD, they go into the usual recycling/indiferenciados streams.'
        ] },
        { kind: 'warning', text: 'You cannot leave construction bags next to ordinary bins. Even if “everyone does it”, this is considered deposição ilegal de resíduos and may result in a fine from the Câmara Municipal or the municipal police.' }
      ]
    },
    {
      id: 'small-diy',
      title: 'Small DIY renovation: take it to an Ecocentro 🧱',
      content: [
        { kind: 'paragraph', text: 'If you changed a couple of rows of tiles yourself, removed a toilet or dismantled a cupboard, the cheapest route is usually the municipal Ecocentro. For residents of the município, small volumes are often accepted free of charge, but the rules and limits are set by the Câmara Municipal or the intermunicipal waste company.' },
        { kind: 'checklist', items: [
          'Find “Ecocentro” on the website of your Câmara Municipal or resíduos urbanos operator.',
          'Check the limit: some municipalities count bags, others use litres, kg or m³.',
          'Take your NIF and proof of address if the Ecocentro only accepts residentes.',
          'Separate the waste: entulho mineral, madeira, metais, vidro, plástico, cartão, equipamentos eléctricos.',
          'Do not mix RCD with paints, oils, solvents or amianto.',
          'Transport it in strong bags or caixas; construction dust must be sealed.',
          'Photograph the drop-off or keep the Ecocentro receipt if the renovation is in a condomínio and you need to prove removal.'
        ] },
        { kind: 'paragraph', text: 'In Lisbon, the Câmara Municipal directs residents to ecocentros and municipal recolha channels for specific streams. The practical point: do not try to make an arrangement with the building cleaner or leave bags out at night — for RCD this is not a legal route.' }
      ]
    },
    {
      id: 'large-renovation',
      title: 'Medium and large renovation: licensed transportadora + operador RCD',
      content: [
        { kind: 'paragraph', text: 'If there is more waste than fits in a car boot, or an empreiteiro is working, arrange removal through a licensed transportadora de resíduos. It must take the RCD to an authorised operador/aterro RCD: for example, regional systems and operators such as Valnor, Tratolixo or other sites listed in APA/SILOGR licences.' },
        { kind: 'checklist', items: [
          'Ask the empreiteiro to include gestão de RCD in the orçamento in advance.',
          'Check who is the produtor do resíduo: the owner, the contractor or both under the contract.',
          'Order a big-bag, contentor or carrinha with a licensed transportadora.',
          'Confirm the LER/EWC waste code: ordinary entulho often uses construction codes from group 17, but the operator must classify it themselves.',
          'Ask for the e-GAR/Guia de Acompanhamento de Resíduos before or at the time of transport.',
          'Check the destination: aterro RCD, centro de triagem, operador licenciado, not a “friend’s warehouse”.',
          'Keep the invoice, e-GAR and comprovativo de receção at least until the renovation is finished; for obras licenciadas the Câmara Municipal may need this.'
        ] },
        { kind: 'warning', text: 'If the carrier offers “cheaper without paperwork”, the risk remains with the waste producer. In the case of illegal dumping, the person whose property was renovated may be traced through bags, address labels, condomínio cameras or neighbours’ complaints.' }
      ]
    },
    {
      id: 'egar-gar',
      title: 'GAR/e-GAR: the key transport document',
      content: [
        { kind: 'paragraph', text: 'Guia de Acompanhamento de Resíduos is now in practice issued as an e-GAR in the SILIAMB/APA system. It is an electronic consignment note that links the waste producer, the carrier and the receiving operator. For a private individual it is usually issued by the transportadora or contractor, but you should ask for a copy/number.' },
        { kind: 'checklist', items: [
          'The e-GAR must show the produtor, transportador and destinatário.',
          'The type of waste and approximate quantity must be stated.',
          'The transport date and the vehicle/carrier registration must be stated.',
          'The destinatário must confirm receipt of the waste.',
          'If the operator accepted less waste or a different type of waste, ask for a correction or explanation.',
          'For condominium works, give a copy to the administração do condomínio if it requires a report.',
          'For works with licenciamento/comunicação prévia, keep the documents together with the processo da obra.'
        ] },
        { kind: 'paragraph', text: 'For one or two bags that you personally drop off at an Ecocentro, an e-GAR is usually not required from a resident as a household user. But for commercial RCD removal, the document should be part of the service.' }
      ]
    },
    {
      id: 'prices-and-contract',
      title: 'How much it costs and what to write in the contract 💶',
      content: [
        { kind: 'paragraph', text: 'The market varies significantly by city, floor, lift, parking, weight and type of waste. For an expat, the main risk is buying a “turnkey renovation” where removal is not included, and then receiving a separate bill for entulho.' },
        { kind: 'checklist', items: [
          'Commercial RCD removal in the city: a guide is €80–200/m³ in 2026 if bags/loading/transport are included; heavy concrete may be priced higher.',
          'A big-bag by the door is cheaper, but you need space, condomínio permission and sometimes a licença de ocupação da via pública.',
          'A contentor on the street may require autorização da Câmara Municipal and payment for occupying public space.',
          'The aterro/operador may charge by the tonne; check whether the gate fee is included in the price.',
          'Carrying up/down without a lift, a narrow staircase, historic centre, restricted-access zone — these are separate surcharges.',
          'Hazardous waste, amianto, contaminated materials — a separate service and a different price.',
          'In the orçamento write: “inclui remoção, transporte licenciado, destino final autorizado e emissão de e-GAR”.'
        ] },
        { kind: 'warning', text: 'Do not pay for the entire removal in cash without a recibo/fatura and without an e-GAR, unless the volume is “small Ecocentro”. Cheap illegal removal can become an expensive fine and a problem when selling the flat or in a dispute with the condomínio.' }
      ]
    },
    {
      id: 'condominium-and-street',
      title: 'Condomínio, the street and neighbours: do not forget permissions',
      content: [
        { kind: 'paragraph', text: 'Even if the waste is removed legally, you can still breach building or municipal rules: noise, lift use, storage in the entrance hall, ocupação da via pública. In old buildings in Lisbon and Porto this is a common source of conflict.' },
        { kind: 'checklist', items: [
          'Tell the administração do condomínio the dates of the works and the removal.',
          'Check whether the lift may be used for RCD bags and whether the cabin needs protection.',
          'Do not store bags in shared corridors, on the stairs or by the entrance: this is a fire and hygiene risk.',
          'If you need a contentor on the street, check the licença/ocupação de via pública with the Câmara Municipal.',
          'Agree the horários de ruído: construction noise in residential buildings is usually limited to working days and daytime hours under municipal rules.',
          'Ask the empreiteiro to clean dust in common areas daily.',
          'After removal, keep “before/after” photos and documents to close off neighbours’ complaints.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Small DIY waste to a municipal Ecocentro', amountEUR: 0, note: 'Often free for residents of the município; limits and accepted fractions depend on the Câmara Municipal.' },
    { label: 'Commercial RCD removal by licensed transportadora', amountEURMin: 80, amountEURMax: 200, note: 'Guide price per m³ in 2026 for ordinary entulho; depends on the city, weight, floor, loading and access.' },
    { label: 'Big-bag/contentor and placement on the street', amountEURMin: 30, amountEURMax: 150, note: 'May be added to removal; if it occupies via pública, the Câmara Municipal may require permission and a fee.' }
  ],
  sources: [
    { title: 'APA — resíduos de construção e demolição and gestão de resíduos rules', url: 'https://www.apambiente.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Câmara Municipal de Lisboa — ecocentros, recolha and resíduos urbanos', url: 'https://www.cm-lisboa.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Regime Geral de Gestão de Resíduos — Decreto-Lei 102-D/2020', url: 'https://dre.pt/dre/detalhe/decreto-lei/102-d-2020-150908012', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portaria 145/2017 — Guia Eletrónica de Acompanhamento de Resíduos e-GAR', url: 'https://dre.pt/dre/detalhe/portaria/145-2017-106939482', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
