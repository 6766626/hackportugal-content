export default {
  editorialVoice: 'hackportugal',
  id: 'horta-comunitaria-bairro',
  categoryId: 'daily_life',
  title: 'Hortas comunitárias: community allotments in Portuguese neighbourhoods',
  tldr: 'Hortas comunitárias are municipal allotments for residents: a small plot, water, compost and pesticide-free rules. In Lisboa, the CML Hortas Comunitárias programme costs around €3/month per talhão; in Cascais there are Hortas Solidárias, and similar projects operate in Porto, Loures, Almada and other municípios. You usually need a NIF with an address in the município, proof of residence and registration on a waiting list. Realistic waiting time in 2026: often 6–12 months, longer in central freguesias.',
  tags: ['hortas', 'neighbourhood', 'allotment', 'lisboa', 'cascais'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'What a horta comunitária is',
      content: [
        { kind: 'paragraph', text: 'A horta comunitária is a municipal or neighbourhood allotment where residents are given a small talhão: a plot for vegetables, herbs and sometimes flowers. It is usually not land rental in the classic sense, but a temporary right of use under the rules of the Câmara Municipal or Junta de Freguesia.' },
        { kind: 'paragraph', text: 'The format is especially popular in Lisboa, Cascais, Porto, Loures, Almada, Oeiras, Sintra and other municípios. The aim is not commercial farming, but self-sufficiency, ecology, contact with neighbours and the use of vacant urban land.' },
        { kind: 'checklist', items: [
          'People grow vegetables, herbs, berries and aromatic plants',
          'The plot is usually small: enough for a family, but not for selling the harvest',
          'Water is often included or available at a shared point',
          'Chemical pesticides and aggressive fertilisers are prohibited',
          'You cannot build sheds, greenhouses or fences without permission',
          'The plot must be cultivated regularly: abandoned talhões are taken back',
          'There are shared days for cleaning, composting and training',
          'There is almost always a waiting list'
        ] }
      ]
    },
    {
      id: 'where-to-apply',
      title: 'Where to look for a programme in your município',
      content: [
        { kind: 'paragraph', text: 'Search your Câmara Municipal website for “hortas comunitárias”, “hortas urbanas”, “hortas solidárias”, “agricultura urbana” or “ambiente”. In large cities, applications often go through the municipal portal; in smaller places, through the Junta de Freguesia.' },
        { kind: 'substeps', items: [
          { id: 'lisboa', title: 'Lisboa — CML Hortas Comunitárias', content: [
            { kind: 'paragraph', text: 'In Lisboa, the horta network is managed by Câmara Municipal de Lisboa. As of 2026, participants pay a symbolic contribution of around €3/month per talhão. Applications are usually submitted online via municipal services or according to CML instructions; allocation depends on available plots and the waiting list.' }
          ] },
          { id: 'cascais', title: 'Cascais — Hortas Solidárias', content: [
            { kind: 'paragraph', text: 'Cascais runs the Hortas Solidárias programme. It is aimed at residents of the concelho and often has a social component: sustainable food, training, inclusion of older people and families. The conditions and available hortas are published by Câmara Municipal de Cascais.' }
          ] },
          { id: 'other-municipios', title: 'Porto, Loures, Almada and others', content: [
            { kind: 'paragraph', text: 'In Porto, neighbourhood hortas appear as part of reabilitação urbana and bairro programmes; Loures and Almada have municipal hortas urbanas/comunitárias. Names and application forms differ, but the logic is the same: resident of the município, documents, queue, rules of use.' }
          ] }
        ] }
      ]
    },
    {
      id: 'eligibility',
      title: 'Who can get a plot',
      content: [
        { kind: 'paragraph', text: 'The basic requirement is to live in the relevant município or freguesia. For an expat this usually means: NIF, an address in Finanças in that concelho and a document proving residence. Nationality is usually not important: a residence permit is not always explicitly required, but you need to show lawful and actual residence at the address.' },
        { kind: 'checklist', items: [
          'NIF with an up-to-date address in the município',
          'Documento de identificação: passport, residence permit, Cartão de Cidadão or CRUE for EU citizens',
          'Comprovativo de morada: rental contract, luz/água/internet bill, atestado de residência from the Junta de Freguesia',
          'Contact email and Portuguese phone number',
          'Declaration that you accept the regulamento da horta',
          'Sometimes — proof of household composition or social status',
          'Sometimes — priority for older people, unemployed people, low-income families or residents of a specific bairro',
          'One plot per household: duplicate applications may be rejected'
        ] },
        { kind: 'warning', text: 'If you have recently moved and the address on your NIF is still old, update your morada in Finanças first. Many municípios check the address specifically against the tax profile, not only against the rental contract.' }
      ]
    },
    {
      id: 'application-process',
      title: 'How to apply and how long to wait',
      content: [
        { kind: 'paragraph', text: 'The process is not quick. In popular areas of Lisboa, Cascais and Porto, free talhões appear after withdrawals, moves or network expansion. A realistic waiting time in 2026 is 6–12 months; in central freguesias and by the sea it may be longer.' },
        { kind: 'checklist', items: [
          'Find the programme page on the Câmara Municipal or Junta de Freguesia website',
          'Check which hortas correspond to your address',
          'Fill in the formulário de candidatura',
          'Upload your NIF, identity document and comprovativo de morada',
          'Choose your preferred horta, if the form allows this',
          'Save the application number or confirmation email',
          'Check the status every 2–3 months, but do not submit duplicates without a reason',
          'When you are invited, sign the termo de responsabilidade/regulamento',
          'Pay the first contribution, if applicable',
          'Receive your talhão number and access instructions'
        ] },
        { kind: 'warning', text: 'Do not buy tools and seedlings in advance. The queue does not guarantee a specific date, and the municipality may offer you a plot in another horta or ask you to confirm that you still live in the concelho.' }
      ]
    },
    {
      id: 'rules-and-etiquette',
      title: 'Rules and neighbourly etiquette 🌱',
      content: [
        { kind: 'paragraph', text: 'A horta comunitária is not a holiday allotment. The land is shared, the water is shared, and neighbours are close by. A good reputation matters: if you do not follow the rules, the plot may be passed to the next person in the queue.' },
        { kind: 'checklist', items: [
          'Do not use chemical herbicides or insecticides',
          'Do not occupy other people’s beds, paths or shared areas',
          'Do not sell the harvest as a commercial product if the rules prohibit it',
          'Water sparingly: in Portugal there can be water restrictions in summer',
          'Do not leave plastic, rubbish, old pots or construction materials behind',
          'Respect the horários de funcionamento if the horta is locked',
          'Take part in dias comunitários: cleaning, composting, repairing paths',
          'Tell the coordinator about pests, a broken tap or a conflict',
          'If you go away for the summer, arrange watering or officially notify the coordinator',
          'If you can no longer look after the plot, give it up in writing'
        ] },
        { kind: 'paragraph', text: 'For expats, a horta is a good way to become part of the bairro: neighbours will tell you what really grows in your area, when to plant couve, tomate, coentros, alface and how to deal with caracóis without chemicals.' }
      ]
    },
    {
      id: 'alternatives',
      title: 'If the queue is long',
      content: [
        { kind: 'paragraph', text: 'A 6–12 month queue is normal, so it is worth having a plan B. Especially if you live in central Lisboa or Cascais, where demand exceeds supply.' },
        { kind: 'checklist', items: [
          'Check neighbouring freguesias: sometimes the Junta keeps a separate list',
          'Ask the associação de moradores in your bairro',
          'Look for “horta pedagógica” — volunteers are sometimes needed without an individual plot',
          'Check local Facebook groups: private shared gardens sometimes appear',
          'If you have a varanda, start with vasos: ervas aromáticas, tomate cherry, morangos',
          'Ask the landlord about the condomínio rules for pots on the balcony',
          'For children, look for hortas escolares or oficinas ambientais at the Câmara',
          'In the suburbs it can sometimes be cheaper to agree with a neighbour on a small terreno, but put it in writing'
        ] },
        { kind: 'warning', text: 'Do not occupy an empty plot without permission. In Portugal, a lot of land looks “ownerless”, but it has an owner: Câmara, Estado, a private owner or condomínio. Planting without authorisation can end in a complaint and removal.' }
      ]
    }
  ],
  costs: [
    { label: 'Lisboa CML Hortas Comunitárias', amountEUR: 3, note: 'Indicative monthly contribution per talhão; check the current regulamento and edital for the specific horta.' },
    { label: 'Basic tools', amountEURMin: 25, amountEURMax: 70, note: 'Gloves, small enxada, tesoura de poda, regador; some tools are often available in the shared area.' },
    { label: 'Seeds and seedlings to start', amountEURMin: 10, amountEURMax: 40, note: 'Depends on the season; markets and viveiros are cheaper than large shops.' }
  ],
  sources: [
    {
      title: 'Câmara Municipal de Lisboa — Habitação Municipal and Hortas Comunitárias',
      url: 'https://habitacao.cm-lisboa.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Câmara Municipal de Cascais — Hortas Solidárias',
      url: 'https://www.cm-cascais.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal Lisboa — municipal services and urban environment',
      url: 'https://www.lisboa.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
