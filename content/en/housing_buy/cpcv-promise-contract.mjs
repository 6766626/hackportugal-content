export default {
  editorialVoice: 'hackportugal',
  id: 'cpcv-promise-contract',
  categoryId: 'housing_buy',
  title: 'CPCV — preliminary property purchase contract and sinal',
  tldr: 'CPCV — contrato-promessa de compra e venda: a preliminary contract usually signed 2–8 weeks before the escritura. The buyer pays a sinal, often 10–20% of the price. Under art. 442 Código Civil: if the buyer defaults, they lose the sinal; if the seller defaults, they return the sinal at double the amount. In 2026, a safe CPCV should include mortgage conditions, licence/debt checks and, where possible, registo provisório de aquisição.',
  tags: ['cpcv', 'sinal', 'purchase', 'property'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-cpcv',
      title: 'What a CPCV is and why it is signed',
      content: [
        { kind: 'paragraph', text: 'A CPCV is not a “flat reservation”, but a legally binding promise to buy and sell a property. It fixes the price, deadlines, sinal, exit conditions and the date of the future escritura or Documento Particular Autenticado.' },
        { kind: 'paragraph', text: 'In Portugal, a CPCV is signed before the final transaction because the bank needs time for mortgage approval, valuation, insurance and preparation of the escritura. A CPCV is also used for cash purchases: the seller takes the property off the market, and the buyer gets time for due diligence.' },
        { kind: 'warning', text: 'Do not sign a CPCV “from the agency template” if the property documents have not been checked. After signature, loss of the sinal may be lawful, even if you simply change your mind.' }
      ]
    },
    {
      id: 'sinal-rules',
      title: 'Sinal: how much to pay and what art. 442 CC says',
      content: [
        { kind: 'paragraph', text: 'Sinal is a deposit that confirms the seriousness of the transaction. In the housing market, sellers often ask for 10–20% of the price, but the law does not set a mandatory percentage. For expensive properties and purchases with a mortgage, you can negotiate a lower sinal, for example 5–10%, if the seller agrees.' },
        { kind: 'checklist', items: [
          'If the buyer breaches the CPCV without lawful grounds, the seller usually keeps the sinal.',
          'If the seller breaches the CPCV, the buyer may demand return of the sinal at double the amount.',
          'These consequences follow from art. 442 Código Civil, unless the parties have written another permitted mechanism into the contract.',
          'The sinal should be expressly named in the contract as “sinal e princípio de pagamento”, not merely as a “reserva”.',
          'Pay by bank transfer to the seller’s account or to an escrow/conta cliente held by an advogado/solicitador, not in cash.',
          'In the payment reference, state the property, the parties’ NIF and “sinal CPCV”.',
          'Keep the comprovativo de transferência: it will be needed in a dispute, by the bank and for compliance.'
        ] },
        { kind: 'warning', text: '“The agency holds the property for €5,000” is not always a sinal under art. 442. If the payment goes to the agency, there must be a separate written document stating who receives the money, on what basis, whether it is refundable and when it becomes the sinal.' }
      ]
    },
    {
      id: 'clauses-to-include',
      title: 'What must be written into the CPCV',
      content: [
        { kind: 'paragraph', text: 'A good CPCV should be boring and specific: who is selling, what is being sold, for how much, when, under what conditions the transaction is cancelled without penalty and which documents the seller must provide before the escritura.' },
        { kind: 'checklist', items: [
          'Full details of the parties: name, NIF, marital status, regime de bens, address, ID document.',
          'Precise property description: artigo matricial, descrição predial, fração, address, area, garage/storage room.',
          'Price, sinal amount, schedule of further payments and payment method.',
          'Deadline for the escritura: for example within 60 or 90 days, with an extension mechanism if the delay is caused by the bank/Conservatória.',
          'Mortgage condition: the CPCV is effective only subject to aprovação final do crédito habitacional; if the bank refuses the mortgage, the sinal is returned.',
          'For due diligence, request the caderneta predial, certidão permanente, certificado energético, declaração de condomínio and, where existing/applicable, licença de utilização/construção, urbanistic records and old ficha técnica. After DL 10/2024, the licença/ficha no longer have the same mandatory role at the escritura, but the absence/non-compliance of licences remains a significant legal and banking risk.',
          'Guarantee that there are no debts: IMI, condomínio, utilities, mortgage, seizures, penhoras, usufruto, arrendamento.',
          'Who pays IMT, Imposto do Selo, escritura, registo and the discharge of the seller’s mortgage.',
          'Condition of the property and included items: furniture, appliances, air conditioning, solar panels, parking.',
          'Consequences of breach: perda do sinal/devolução em dobro under art. 442 CC and possible execução específica under art. 830 CC. For property CPCVs, the rules on excluding execução específica are special; do not rely on a template phrase, have a lawyer agree the remedy clause separately.'
        ] },
        { kind: 'warning', text: 'If you are buying with a mortgage, a “subject to mortgage approval” clause is critical. Preliminary bank approval is not the same as final approval after the avaliação. Without such a reservation, a bank refusal may not save your sinal.' }
      ]
    },
    {
      id: 'due-diligence',
      title: 'Checks before signing: the expat minimum',
      content: [
        { kind: 'paragraph', text: 'Before a CPCV, you need to check not only the seller but also the property itself. In Portugal, unlicensed extensions, unlegalised lofts, condomínio debts and restrictions at the Conservatória are all encountered.' },
        { kind: 'checklist', items: [
          'Certidão permanente do registo predial: owner, mortgages, seizures, usufruto, servidões.',
          'Caderneta predial urbana in Portal das Finanças: artigo, VPT, area, use.',
          'Licença de utilização or confirmation that the property is exempt from it due to age/regime.',
          'Certificado energético: mandatory on sale; the rating affects the mortgage and renovations.',
          'Ficha técnica da habitação — for older properties, it may exist and be useful for checks, but after DL 10/2024 its presentation on sale is no longer a general mandatory formality.',
          'Declaração de condomínio: no debts, mensalidade and planned works are clear.',
          'Câmara Municipal check: licences, works, urbanismo, especially for a moradia, anexos, attic, basement.',
          'If the seller is a company: certidão comercial, authority of the signatory, IVA/tax nuances.',
          'If the seller is non-resident: who signs, whether there is a power of attorney, whether tax withholding is required in special cases.'
        ] },
        { kind: 'warning', text: 'The estate agent works for the deal, not for the buyer’s legal protection. For a CPCV worth hundreds of thousands of euros, normal practice is to hire an advogado or solicitador before signing, not the day before the escritura.' }
      ]
    },
    {
      id: 'provisional-registration',
      title: 'Registo provisório de aquisição: buyer protection',
      content: [
        { kind: 'paragraph', text: 'Registo provisório de aquisição is the provisional registration of the future purchase at the Conservatória do Registo Predial. It makes your position visible to third parties and reduces the risk that the seller resells the property or encumbers it before the escritura.' },
        { kind: 'paragraph', text: 'The application is usually filed by an advogado, solicitador, notário or conservador through registration services. Registration requires a CPCV with sufficient identification of the property and the parties; reconhecimento presencial das assinaturas is sometimes required.' },
        { kind: 'checklist', items: [
          'Especially useful if there are more than 30–45 days between the CPCV and the escritura.',
          'Recommended when buying from a developer, in a complex sale chain or if the seller is under financial stress.',
          'Check the validity period of the provisório and that it can be converted into definitivo after the escritura.',
          'Make sure the bank agrees with the wording of the CPCV and the future registration of the mortgage.',
          'After the escritura, the purchase must be registered definitively; the provisório by itself does not make you the owner.'
        ] },
        { kind: 'warning', text: 'Registo provisório does not replace due diligence. If there is already a mortgage, penhora or dispute in the register, provisional registration does not “clean” the property — a legal solution is needed before the transaction.' }
      ]
    },
    {
      id: 'signing-and-after',
      title: 'Signing, taxes and the route to the escritura',
      content: [
        { kind: 'paragraph', text: 'A CPCV can be signed in person or by power of attorney. For a CPCV for the purchase of a building/fraction, art. 410(3) Código Civil requires a document with reconhecimento presencial das assinaturas and, where applicable, certification da licença de construção/utilização. This is not merely “for evidential value”: absence of the formalities can create serious risks for enforceability, so the form should be checked by an advogado/solicitador/notário. If the property is sold with transfer of possession before the escritura, the formal requirements and tax consequences must be checked separately.' },
        { kind: 'checklist', items: [
          'Before signing, obtain the final version of the CPCV in Portuguese; an English translation is only an aid.',
          'Check names, NIF, IBAN, artigo matricial and descrição predial against the documents.',
          'Do not transfer the sinal before signing or before the simultaneous exchange of signed copies.',
          'Immediately after the CPCV, set the deadline for mortgage valuation, seguro de vida, seguro multirriscos and the escritura.',
          'IMT and Imposto do Selo are usually paid before the escritura, not at the CPCV stage.',
          'At the escritura, the seller must discharge the mortgage or bring the distrate/cancelamento da hipoteca.',
          'After the final transaction, check the registo definitivo and the update of ownership in Finanças.'
        ] },
        { kind: 'warning', text: 'If the seller asks to “hand over the keys after the CPCV”, this is already a risk of possession without ownership. Separate clauses are needed: who pays condomínio, utilities, insurance, repairs, and what happens if the escritura falls through.' }
      ]
    }
  ],
  costs: [
    { label: 'Sinal under the CPCV', amountEURMin: 0, amountEURMax: 0, note: 'The law does not fix the amount; in practice it is often 10–20% of the property price. For a €300,000 property, this is usually €30,000–€60,000.' },
    { label: 'Legal review of the CPCV', amountEURMin: 300, amountEURMax: 1500, note: 'Market guide for an advogado/solicitador; complex transactions, developers and mortgages cost more.' },
    { label: 'IMT and Imposto do Selo', amountEURMin: 0, amountEURMax: 0, note: 'Usually paid before the escritura. The amount depends on the price, VPT, property type and buyer status; it is not a fee for the CPCV.' }
  ],
  sources: [
    {
      title: 'Código Civil — Decreto-Lei 47344/1966, including art. 410, 442 and 830',
      url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/1966-34509075',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Justiça.gov.pt — Buying or selling a house',
      url: 'https://justica.gov.pt/Servicos/Comprar-vender-casa',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'IRN — Registo Predial Online',
      url: 'https://www.predialonline.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
