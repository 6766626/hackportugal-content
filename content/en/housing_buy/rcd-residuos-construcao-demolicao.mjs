export default {
  editorialVoice: 'hackportugal',
  id: 'rcd-residuos-construcao-demolicao',
  categoryId: 'housing_buy',
  title: 'RCD: construction and demolition waste — how to dispose of it legally',
  tldr: 'RCD (resíduos de construção e demolição) means tiles, concrete, brick, plasterboard, sanitary ware and other post-renovation waste.\n\nIn Portugal you cannot put it in ordinary contentores or leave it by the bins: you need an Ecocentro for small DIY volumes, or a licensed transportadora + aterro/operador RCD and e-GAR/Guia de Acompanhamento de Resíduos. Small volumes at a municipal Ecocentro are often free, but limits vary; commercial removal in 2026 is usually €80–200/m³ plus possible landfill/operator fees.',
  tags: ['rcd', 'renovation', 'ecocentro', 'gar'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-rcd',
      title: 'What counts as RCD, and what does not',
      content: [
        { kind: 'paragraph', text: 'RCD means resíduos de construção e demolição: waste from construction, renovation, demolition and small obras. In everyday home situations, this is most often bags of tiles, cement, plaster, brick, concrete, plasterboard, leftover pipes, doors, windows and sanitary ware.' },
        { kind: 'checklist', items: [
          'Tiles, azulejos, ceramics, brick, concrete — RCD.',
          'Plaster, cement, sand, gravel, construction dust — RCD.',
          'Plasterboard and insulation — RCD, but they may require a separate fraction.',
          'Old doors, windows, laminate flooring, skirting boards — often accepted as RCD/volumosos, depending on the municipality.',
          'Paint, solvents, adhesives, sealants — not ordinary RCD; these are hazardous waste, check with the Ecocentro.',
          'Asbestos/amianto — a separate hazardous category; an ordinary RCD carrier is not suitable.',
          'Household rubbish, purchase packaging cardboard, food waste — not RCD; they go into the ordinary recycling/indiferenciados streams.'
        ] },
        { kind: 'warning', text: 'You cannot leave construction bags next to ordinary contentores. Even if “everyone does it”, this is considered deposição ilegal de resíduos and may lead to a fine from the Câmara Municipal or municipal police.' }
      ]
    },
    {
      id: 'small-diy',
      title: 'Small DIY renovation: take it to an Ecocentro 🧱',
      content: [
        { kind: 'paragraph', text: 'If you have replaced a couple of rows of tiles yourself, removed a toilet or dismantled a cupboard, the cheapest route is usually the municipal Ecocentro. For residents of the município, small volumes are often accepted free of charge, but the rules and limits are set by the Câmara Municipal or the intermunicipal waste company.' },
        { kind: 'checklist', items: [
          'Find “Ecocentro” on the website of your Câmara Municipal or resíduos urbanos operator.',
          'Check the limit: in some municipalities they count bags, in others litres, kg or m³.',
          'Take your NIF and proof of address if the Ecocentro only accepts residentes.',
          'Separate the waste: entulho mineral, madeira, metais, vidro, plástico, cartão, equipamentos eléctricos.',
          'Do not mix RCD with paints, oils, solvents or amianto.',
          'Transport it in strong bags or caixas; construction dust must be sealed.',
          'Photograph the drop-off or keep the Ecocentro receipt if the renovation is in a condomínio and you need to prove removal.'
        ] },
        { kind: 'paragraph', text: 'In Lisbon, the Câmara Municipal directs residents to ecocentros and municipal recolha channels for separate waste streams. The practical point: do not try to make an arrangement with the building cleaner or leave bags out at night — for RCD this is not a legal route.' }
      ]
    },
    {
      id: 'large-renovation',
      title: 'Medium and large renovation: licensed transportadora + operador RCD',
      content: [
        { kind: 'paragraph', text: 'If there is more waste than fits in a car boot, or an empreiteiro is working, arrange removal through a licensed transportadora de resíduos. It must take the RCD to an authorised operador/aterro RCD: for example, regional systems and operators such as Valnor, Tratolixo or other sites listed in APA/SILOGR licences.' },
        { kind: 'checklist', items: [
          'Ask the empreiteiro in advance to include gestão de RCD in the orçamento.',
          'Check who is the produtor do resíduo: the owner, the contractor or both under the contract.',
          'Order a big-bag, contentor or carrinha with a licensed transportadora.',
          'Clarify the LER/EWC waste code: for ordinary entulho, construction codes in group 17 are often used, but the operator must classify it themselves.',
          'Ask for the e-GAR/Guia de Acompanhamento de Resíduos before or at the time of transport.',
          'Check the destination: aterro RCD, centro de triagem, operador licenciado, not a “friend’s warehouse”.',
          'Keep the invoice, e-GAR and comprovativo de receção at least until the end of the renovation; for obras licenciadas, the Câmara Municipal may need them.'
        ] },
        { kind: 'warning', text: 'If the carrier offers “cheaper without documents”, the risk remains with the waste producer. In the event of illegal dumping, the person whose property was renovated may be traced through bags, address labels, condomínio cameras or neighbours’ complaints.' }
      ]
    },
    {
      id: 'egar-gar',
      title: 'GAR/e-GAR: the key transport document',
      content: [
        { kind: 'paragraph', text: 'Guia de Acompanhamento de Resíduos is now usually issued in practice as an e-GAR in the SILIAMB/APA system. It is an electronic consignment note linking the waste producer, the carrier and the receiving operator. For a private individual, it is usually issued by the transportadora or contractor, but you should ask for a copy/number.' },
        { kind: 'checklist', items: [
          'The e-GAR must include the produtor, transportador and destinatário.',
          'The type of waste and approximate quantity must be stated.',
          'The transport date and vehicle/carrier registration must be included.',
          'The destinatário must confirm receipt of the waste.',
          'If the operator accepted a smaller quantity or a different type of waste, ask for a correction or explanation.',
          'For condominium works, give a copy to the administração do condomínio if it requires a report.',
          'For works with licenciamento/comunicação prévia, keep the documents together with the processo da obra.'
        ] },
        { kind: 'paragraph', text: 'For one or two bags that you personally deliver to an Ecocentro, an e-GAR is usually not required from a resident as a domestic user. But for commercial RCD removal, the document must be part of the service.' }
      ]
    },
    {
      id: 'prices-and-contract',
      title: 'How much it costs and what to put in the contract 💶',
      content: [
        { kind: 'paragraph', text: 'The market depends heavily on the city, floor, lift, parking, weight and type of waste. For an expat, the main risk is buying a “turnkey renovation” where removal is not included, and then receiving a separate bill for entulho.' },
        { kind: 'checklist', items: [
          'Commercial RCD removal in the city: as a guide, €80–200/m³ in 2026 if bags/loading/transport are included; heavy concrete may be charged at a higher rate.',
          'A big-bag at the door is cheaper, but you need space, condomínio permission and sometimes a licença de ocupação da via pública.',
          'A contentor on the street may require autorização da Câmara Municipal and payment for occupying public space.',
          'The aterro/operador may charge by the tonne; check whether the gate fee is included in the price.',
          'Carrying up/down without a lift, a narrow staircase, historic centre, restricted-access zone — these mean an additional surcharge.',
          'Hazardous waste, amianto, contaminated materials — these are a separate service with a different price.',
          'In the orçamento, write: “inclui remoção, transporte licenciado, destino final autorizado e emissão de e-GAR”.'
        ] },
        { kind: 'warning', text: 'Do not pay for the entire removal in cash without recibo/fatura and without e-GAR if the volume is not “small Ecocentro”. Cheap illegal removal can become an expensive fine and a problem when selling the flat or in a dispute with the condomínio.' }
      ]
    },
    {
      id: 'condominium-and-street',
      title: 'Condomínio, street and neighbours: do not forget permissions',
      content: [
        { kind: 'paragraph', text: 'Even if the waste is removed legally, you can still breach building or municipal rules: noise, lift use, storage in the entrance hall, ocupação da via pública. In old buildings in Lisbon and Porto, this is a common cause of conflict.' },
        { kind: 'checklist', items: [
          'Inform the administração do condomínio of the work and removal dates.',
          'Check whether the lift may be used for RCD bags and whether the cabin needs protection.',
          'Do not store bags in shared corridors, on stairs or by the entrance: this is a fire and sanitary risk.',
          'If a contentor is needed on the street, check licença/ocupação de via pública with the Câmara Municipal.',
          'Agree horários de ruído: construction noise in residential buildings is usually limited to weekdays and daytime hours under municipal rules.',
          'Ask the empreiteiro to clean dust from common areas every day.',
          'After removal, keep “before/after” photos and documents to close off any neighbours’ complaints.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Small DIY waste at a municipal Ecocentro', amountEUR: 0, note: 'Often free for residents of the município; limits and accepted fractions depend on the Câmara Municipal.' },
    { label: 'Commercial RCD removal by licensed transportadora', amountEURMin: 80, amountEURMax: 200, note: 'Indicative price per m³ in 2026 for ordinary entulho; depends on the city, weight, floor, loading and access.' },
    { label: 'Big-bag/contentor and placement on the street', amountEURMin: 30, amountEURMax: 150, note: 'May be added to the removal cost; if it occupies via pública, the Câmara Municipal may require permission and a fee.' }
  ],
  sources: [
    { title: 'APA — resíduos de construção e demolição and gestão de resíduos rules', url: 'https://www.apambiente.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Câmara Municipal de Lisboa — ecocentros, recolha and resíduos urbanos', url: 'https://www.cm-lisboa.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Regime Geral de Gestão de Resíduos — Decreto-Lei 102-D/2020', url: 'https://dre.pt/dre/detalhe/decreto-lei/102-d-2020-150908012', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portaria 145/2017 — Guia Eletrónica de Acompanhamento de Resíduos e-GAR', url: 'https://dre.pt/dre/detalhe/portaria/145-2017-106939482', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
