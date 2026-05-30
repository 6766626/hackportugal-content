export default {
  editorialVoice: 'hackportugal',
  id: 'imovel-divida-onus-verificar',
  categoryId: 'housing_buy',
  title: 'Checking property debts and encumbrances before purchase',
  tldr: 'Before the CPCV and escritura, check more than just the “nice-looking” caderneta predial. The key document is the certidão permanente do registo predial: it costs €15, is valid for 6 months and shows the owner, mortgages, penhora, usufruto, servidões and court records. Separately ask the seller for a certidão de não dívida from Finanças, the latest IMI, the declaração do condomínio and Câmara Municipal documents. Conservatória, Finanças and Câmara keep different registers — matches must be checked manually.',
  tags: ['property', 'debts', 'encumbrances', 'finanças', 'purchase'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'three-registries',
      title: 'Understand the 3 different sources: Conservatória, Finanças, Câmara',
      content: [
        { kind: 'paragraph', text: 'In Portugal there is no single “super-register” where everything is visible. Before buying, you need to cross-check at least three databases: Registo Predial, Autoridade Tributária / Finanças and Câmara Municipal.' },
        { kind: 'checklist', items: [
          'Conservatória do Registo Predial — legal ownership and encumbrances: mortgage, penhora, arresto, usufruto, servidão, promessa com eficácia real, court claims.',
          'Predial Online — online access to the certidão permanente do registo predial; this is the same Registo Predial information in electronic form.',
          'Finanças / Portal das Finanças — the property tax record: caderneta predial, artigo matricial, VPT, IMI, fiscal owner for tax purposes.',
          'Câmara Municipal — licences, licença de utilização, urbanismo, illegal works, plans, possible building restrictions.',
          'Condomínio — debts for monthly quotas, obras, fundo comum de reserva and future approved expenses.',
          'A notary, solicitador or advogado does not “guess” hidden problems: they check the documents that you or the seller have given them.'
        ] },
        { kind: 'warning', text: 'The caderneta predial from Finanças does not prove ownership. It is a tax document. If one person is listed in the caderneta and another in the certidão predial, rely on the Registo Predial and resolve the discrepancy before signing the CPCV.' }
      ]
    },
    {
      id: 'certidao-predial',
      title: 'Order the certidão permanente do registo predial for €15',
      content: [
        { kind: 'paragraph', text: 'This is the main document for checking encumbrances. It is ordered at predialonline.justica.gov.pt.\n\nThe cost of the electronic certidão permanente is €15, and access is valid for 6 months. Usually the access code is enough: a PDF is not needed, as the notary and the bank enter the code and see the up-to-date record.' },
        { kind: 'checklist', items: [
          'Ask the seller for the código da certidão permanente or order it yourself if you know the freguesia, concelho, número de descrição predial.',
          'Check “Descrição” — type of property, address, area, shares, fração autónoma, garagem, arrecadação.',
          'Check “Inscrições” — who the owner is and on what basis they acquired the property.',
          'Look for “Hipoteca voluntária” — the seller’s ordinary bank mortgage.',
          'Look for “Penhora”, “Arresto”, “Apreensão” — enforcement proceedings, seizure or attachment.',
          'Look for “Usufruto” — a third party’s right of use; buying bare ownership without the right to live there is possible, but it is a completely different risk.',
          'Look for “Servidão” — a right of way, vehicle access, utilities or another restriction on the plot.',
          'Look for “Ação” or “Registo de ação” — a court dispute over the property.',
          'Cross-check the descrição predial with the caderneta predial: address, fração, artigo matricial, areas and use must logically match.'
        ] },
        { kind: 'warning', text: 'The seller’s mortgage is not always a problem in itself: at the escritura, the seller’s bank usually issues a distrate / autorização de cancelamento da hipoteca after repayment. The problem is if the mechanism for cancelling the mortgage is not set out in the CPCV and not confirmed by the bank before the transaction.' }
      ]
    },
    {
      id: 'financas-tax-debt',
      title: 'Check Finanças: caderneta, IMI and certidão de não dívida',
      content: [
        { kind: 'paragraph', text: 'Finanças shows the tax side of the property. The buyer cannot see all of the seller’s tax debts themselves: the certidão de dívida e não dívida is requested by the seller in Portal das Finanças and passed to you or the notary.' },
        { kind: 'checklist', items: [
          'Ask for an up-to-date caderneta predial — a fresh one, not an old PDF from the estate agent’s archive.',
          'Cross-check the artigo matricial, fração, localização, área, afetação and VPT with the certidão predial.',
          'Ask the seller for a certidão de não dívida from Finanças / Autoridade Tributária.',
          'Ask for comprovativos de pagamento do IMI for at least the last year; if the property is expensive, ask for several years.',
          'Check whether there is AIMI for high-value property — this is the seller’s tax up to the transaction date, but a debt may create an enforcement risk.',
          'Clarify who pays IMI for the year of the transaction: legally, IMI is charged to the owner on 31 December of the tax year, but the parties often make a proportional calculation in the contract.',
          'If the property belongs to a company, ask for the company’s certidão permanente comercial and check the signatory’s authority.',
          'If the seller is non-resident, make sure they have a NIF and fiscal representative, if they are required to have one.'
        ] },
        { kind: 'warning', text: 'A certidão de não dívida from Finanças does not mean that there is no mortgage or penhora on the property. The tax certificate and the Registo Predial answer different questions. Both documents are needed.' }
      ]
    },
    {
      id: 'condominio-and-municipality',
      title: 'Do not forget the condomínio and Câmara Municipal',
      content: [
        { kind: 'paragraph', text: 'For a flat in a prédio em propriedade horizontal, condomínio debts are a common nuisance. For a house or plot, the main risk is more often in the Câmara Municipal: licences, illegal extensions, absence of a licença de utilização or urbanismo restrictions.' },
        { kind: 'checklist', items: [
          'Ask for a declaração do administrador do condomínio about debts, quotas and approved expenses.',
          'Check the actas da assembleia de condóminos for the last 2–3 years: obras worth tens of thousands of euros may have been approved there.',
          'Ask for the regulamento do condomínio if short-term rental / Alojamento Local, pets, parking or use of common areas matter.',
          'Check whether the garagem and arrecadação are included in the same fração, a separate fração or only in an exclusive use common area.',
          'At the Câmara Municipal, request the licença de utilização or confirmation of exemption from it for old properties.',
          'For a house, check the plantas aprovadas and whether the actual layout matches the licensed plans.',
          'For a plot, check the PDM, classificação do solo, REN / RAN restrictions, servitudes for roads, power lines and water zones.',
          'If the advert says “possibilidade de construir”, demand written urbanismo confirmation, not the agent’s promise.'
        ] },
        { kind: 'warning', text: 'An illegal extension, enclosed varanda, converted garage or swimming pool without a licence may not appear in the certidão predial. This is the domain of the Câmara Municipal, not the Conservatória.' }
      ]
    },
    {
      id: 'cpcv-protection',
      title: 'Protect yourself in the CPCV before transferring the sinal',
      content: [
        { kind: 'paragraph', text: 'The CPCV should not merely record the price. It should allocate risks: which debts the seller must settle, which documents they must provide and what happens if a problem emerges before the escritura.' },
        { kind: 'checklist', items: [
          'Include a condition that the property is sold livre de ónus e encargos, except for those expressly listed.',
          'If there is a mortgage, state that it will be repaid and cancelled on the day of the escritura through a distrate / cancelamento da hipoteca.',
          'Attach or list the código da certidão permanente, caderneta predial, licença de utilização, declaração do condomínio.',
          'State the deadline for providing the certidão de não dívida Finanças and declaração do condomínio.',
          'Set out the buyer’s right to withdraw and recover sinal em dobro or sinal simples — depending on the agreed structure — if the seller cannot remove the encumbrance.',
          'Do not transfer a large sinal before checking the certidão predial; the standard 10% may be too high a risk for a disputed property.',
          'For the buyer’s mortgage, add a cláusula de financiamento: return of the sinal if the bank refuses financing because of the property or valuation.',
          'Pay the sinal by bank transfer to the account of the seller listed in the certidão predial, not in cash and not to a third party’s account without an explanation.'
        ] },
        { kind: 'warning', text: 'The estate agent works for the transaction, the notary certifies the act, and the bank protects its loan. If the amount is significant or the property is non-standard, hire your own advogado or solicitador before the CPCV, not the day before the escritura.' }
      ]
    },
    {
      id: 'red-flags',
      title: 'Red flags before the escritura',
      content: [
        { kind: 'paragraph', text: 'If you see one of these signs, do not sign the escritura without a written explanation from a specialist and updated documents.' },
        { kind: 'checklist', items: [
          'The seller refuses to provide the código da certidão permanente or only provides an old PDF.',
          'The certidão contains a penhora, arresto, ação or several mortgages, and the seller says “it is just a formality”.',
          'The description of the fração in the certidão predial does not match what you are physically buying.',
          'The advert includes parking or a storage room, but they are not stated in the documents.',
          'The caderneta predial shows áreas or afetação that do not match the Câmara plans.',
          'There is no licença de utilização, and no one can explain the legal basis for exemption.',
          'The condomínio reports future obras or a debt, and the seller asks to “sort it out later”.',
          'The seller is married, the inheritance has not been formalised, there are minor heirs or a power of attorney from abroad without verification of authority.',
          'The price is noticeably below market, but they demand a quick sinal without due diligence.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Certidão permanente do registo predial', amountEUR: 15, note: 'Electronic access code via Predial Online, valid for 6 months.' },
    { label: 'Certidão de não dívida Finanças', amountEUR: 0, note: 'Usually free in Portal das Finanças; requested by the taxpayer-seller themselves.' },
    { label: 'Caderneta predial', amountEUR: 0, note: 'Free in Portal das Finanças for the property owner.' },
    { label: 'Lawyer / solicitador for due diligence', amountEURMin: 300, amountEURMax: 1500, note: 'The market range depends on the complexity of the property, mortgage, inheritance, company seller and Câmara Municipal checks.' }
  ],
  sources: [
    { title: 'Predial Online — request for certidão permanente do registo predial', url: 'https://predialonline.justica.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal das Finanças — information and services of the Autoridade Tributária', url: 'https://info.portaldasfinancas.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código do Registo Predial — Decreto-Lei 224/84', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1984-34509075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal — buying and selling a home and associated documentation', url: 'https://www.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}
