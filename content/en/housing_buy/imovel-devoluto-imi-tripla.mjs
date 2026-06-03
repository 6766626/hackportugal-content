export default {
  editorialVoice: 'hackportugal',
  id: 'imovel-devoluto-imi-tripla',
  categoryId: 'housing_buy',
  title: 'Imóvel devoluto: triple IMI for vacant housing under Mais Habitação',
  tldr: 'Since 2023, Mais Habitação has tightened the tax treatment of vacant urban housing: if Câmara Municipal classifies a property as imóvel devoluto — usually where the home has been vacant for >12 months and there is no normal water/electricity consumption — the IMI rate is increased ×3. In zonas de pressão urbanística the município may apply an even harsher increase. In 2026 this is a real risk for flats bought “just in case”. Defence: prove occupation, rental, a lawful reason for vacancy, or renovação confirmed by Câmara.',
  tags: ['imi', 'devoluto', 'housing', 'mais-habitação'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-devoluto',
      title: 'What counts as imóvel devoluto',
      content: [
        { kind: 'paragraph', text: 'Imóvel devoluto is an urban property or autonomous unit that the município considers to have been effectively vacant for more than 1 year. The basis is Decreto-Lei 159/2006 and Código do IMI, amended by Lei 56/2023 in the Mais Habitação package.' },
        { kind: 'paragraph', text: 'The mere fact that you visit rarely does not always mean devoluto. Câmara Municipal must make an administrative decision and notify the owner. But low or zero utility consumption is the main trigger for an inspection.' },
        { kind: 'checklist', items: [
          'The home has been vacant for more than 12 months',
          'There are no active água, eletricidade, gás or telecomunicações contracts',
          'There are contracts, but consumption is abnormally low',
          'There is no registered occupant or tenant',
          'Neighbours, condomínio or fiscalização confirm lack of use',
          'Post is not collected, the property looks abandoned',
          'The flat has been bought but not occupied and not rented out',
          'The house is in poor condition and is not being used'
        ] }
      ]
    },
    {
      id: 'tax-effect',
      title: 'How much the mistake costs: IMI ×3 and local surcharges',
      content: [
        { kind: 'paragraph', text: 'The standard IMI rate for urban housing in 2026 is set by each município within the range of 0.3–0.45% of the VPT — valor patrimonial tributário. If the property is classified as devoluto, the rate is tripled.' },
        { kind: 'paragraph', text: 'Example: a flat with a VPT of €200,000 in a município with a 0.3% rate pays standard IMI of €600 per year. After devoluto status — €1,800. At a 0.45% rate, standard IMI is €900, triple is €2,700.' },
        { kind: 'warning', text: 'In zonas de pressão urbanística and in certain cases provided for in Código do IMI after Mais Habitação, the município may apply a heavier agravamento than a simple ×3. Check the annual decision of your Câmara Municipal: rates and zones differ even between neighbouring municipalities.' },
        { kind: 'paragraph', text: 'IMI is assessed according to the property’s status on 31 December of the tax year and is paid in the following year: usually in May, and for amounts above the established thresholds, in instalments in May, August and November. AIMI is a separate tax and does not replace IMI.' }
      ]
    },
    {
      id: 'exceptions',
      title: 'When an empty flat should not be considered devoluto',
      content: [
        { kind: 'paragraph', text: 'The law provides for situations where a property may be empty but should not be classified as devoluto. They must be proven with documents, not by “verbal” explanations.' },
        { kind: 'checklist', items: [
          'The home is used as a casa de férias or second home for seasonal stays',
          'The property is vacant because of obras de construção, reconstrução, ampliação or renovação confirmed by Câmara Municipal',
          'There is a licença, comunicação prévia or another municipal document for the works',
          'The property was recently built or has only just become fit for use',
          'There is a court dispute or administrative procedure objectively preventing use',
          'The home is intended for short-term holidays in a situation permitted by law',
          'The owner is temporarily abroad for professional or public duties, where applicable',
          'There is a valid lease, comodato or other lawful use',
          'Low consumption is documented: refurbishment, breakdown, absence of a meter, disconnection due to works'
        ] },
        { kind: 'warning', text: 'For expat owners, the most common risk is “we bought the flat before moving, but did nothing for a year”. An intention to move later is usually a weak argument on its own. You need evidence: refurbishment, rental listing, actual visits, bills, insurance, condomínio, correspondence with contractors.' }
      ]
    },
    {
      id: 'renovation-defense',
      title: 'Renovação: how to protect a property under refurbishment',
      content: [
        { kind: 'paragraph', text: 'If the home is vacant because of refurbishment, do not wait for a letter from Câmara. Put a file together in advance and, if the works are substantial, formalise them through the municipal procedure: licença, comunicação prévia or at least written confirmation of the applicable regime.' },
        { kind: 'checklist', items: [
          'Document from Câmara Municipal on licensing, comunicação prévia or dispensa de controlo prévio',
          'Project, memória descritiva, termo de responsabilidade técnico, where applicable',
          'Contracts with the empreiteiro, architect, engenheiro, fiscal de obra',
          'Faturas-recibo and bank payments for materials and works',
          '“Before/during/after” photographs with dates',
          'Livro de obra, autos de vistoria, emails with Câmara or contractors',
          'Evidence that water/electricity were disconnected specifically because of the works',
          'Obra insurance or seguro multirriscos, if any',
          'Statement to Câmara asking it not to classify the property as devoluto because of renovação'
        ] },
        { kind: 'paragraph', text: 'If refurbishment lasts more than 12 months, the file must show that the works are real and ongoing, not a fictitious pretext. This is especially important in Lisboa, Porto, Cascais, Oeiras and other markets under housing pressure.' }
      ]
    },
    {
      id: 'how-to-contest',
      title: 'How to challenge the Câmara decision and the tax',
      content: [
        { kind: 'paragraph', text: 'The process usually starts not with Finanças, but with Câmara Municipal. The municipality identifies the property, notifies the owner and gives an opportunity for audiência prévia — to present a position and documents before the final decision.' },
        { kind: 'checklist', items: [
          'Do not ignore the Câmara letter: the response deadline is usually short, often 10 working days under administrative procedure rules',
          'Check who received the notice: owner, cabeça de casal, manager, lawyer, tax representative',
          'Request a copy of the basis: fiscalização report, utility data, photographs, condomínio information',
          'Submit a resposta à audiência prévia with evidence of occupation, rental, refurbishment or a lawful reason for vacancy',
          'Ask for a vistoria or repeat inspection if the property is already being used',
          'If the decision has become final, file an administrative appeal/recurso or ação administrativa depending on the stage',
          'When the increased IMI arrives, separately file a reclamação graciosa with Finanças within the deadline, because the tax act is already independent',
          'Keep proof of submission via balcão, email certificado, CTT registado or the município portal'
        ] },
        { kind: 'warning', text: 'You cannot simply wait for the nota de cobrança IMI. If the municipal act on devoluto has already taken effect, it is harder to dispute later: Finanças usually applies the information received from Câmara.' }
      ]
    },
    {
      id: 'practical-prevention',
      title: 'Prevention for an expat owner',
      content: [
        { kind: 'paragraph', text: 'If you bought a home in Portugal and do not live in it permanently, make the property “explainable” to Câmara. The aim is for the documents to show: this is not abandoned housing, but property that is used, being refurbished, or lawfully awaiting occupation.' },
        { kind: 'checklist', items: [
          'Connect água and eletricidade in your name or the tenant’s name',
          'Keep bills showing real consumption, even if small',
          'Draw up a lease and register it in Portal das Finanças if you rent the property out',
          'If you use it as a second home — keep tickets, expenses, bills, insurance, condomínio',
          'Give the condomínio manager an up-to-date contact',
          'Do not leave the property looking abandoned from the outside: post, blinds, leaks, façade',
          'For refurbishment, arrange municipal documents in advance',
          'Check post at the property address and in ViaCTT/Portal das Finanças',
          'Before buying a vacant property, ask the seller about devoluto status and IMI debts',
          'Once a year, check your Câmara Municipal’s deliberação de taxas IMI'
        ] },
        { kind: 'paragraph', text: 'For the buyer, it is important: triple IMI is linked to the property and its status for a specific tax year. In the escritura, request the certidão predial, caderneta predial, a certificate of no debts, and written assurances from the seller that the property has not been classified as devoluto.' }
      ]
    }
  ],
  costs: [
    { label: 'Standard IMI with VPT of €200,000 and a 0.3% rate', amountEUR: 600, note: 'Example: €200,000 × 0.3%.' },
    { label: 'IMI ×3 for the same property', amountEUR: 1800, note: 'Example after classification as imóvel devoluto.' },
    { label: 'Standard IMI with VPT of €200,000 and a 0.45% rate', amountEUR: 900, note: 'Maximum standard municipal rate for urban housing.' },
    { label: 'IMI ×3 at a 0.45% rate', amountEUR: 2700, note: 'Excluding possible additional agravamentos in special zones.' }
  ],
  sources: [
    {
      title: 'Lei 56/2023 — Mais Habitação, changes to the housing and IMI regime',
      url: 'https://dre.pt/dre/detalhe/lei/56-2023-218862887',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IMI — IMI rates and agravamento for prédios devolutos',
      url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2003-34562575',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei 159/2006 — conceito de prédio devoluto',
      url: 'https://dre.pt/dre/detalhe/decreto-lei/159-2006-540847',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças — IMI: taxpayer information',
      url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/cimi/Pages/cimi112.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
