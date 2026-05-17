export default {
  editorialVoice: 'hackportugal',
  id: 'cpcv-promise-contract',
  categoryId: 'housing_buy',
  title: 'CPCV — preliminary property purchase contract and sinal',
  tldr: 'CPCV — contrato-promessa de compra e venda: a preliminary contract usually signed 2–8 weeks before the escritura. The buyer pays a sinal, often 10–20% of the price. Under art. 442 Código Civil: if the buyer defaults, they lose the sinal; if the seller defaults, they return double the sinal. In 2026, a safe CPCV should include mortgage conditions, checks of licences/debts and, where possible, registo provisório de aquisição.',
  tags: ['cpcv', 'sinal', 'purchase', 'property'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-cpcv',
      title: 'What a CPCV is and why people sign one',
      content: [
        { kind: 'paragraph', text: 'A CPCV is not a “flat reservation”, but a legally binding promise to buy and sell a property. It fixes the price, deadlines, sinal, exit conditions and the date of the future escritura or Documento Particular Autenticado.' },
        { kind: 'paragraph', text: 'In Portugal, a CPCV is signed before the final transaction because the bank needs time for mortgage approval, valuation, insurance and preparation of the escritura. A CPCV is also used for cash purchases: the seller takes the property off the market, and the buyer gets time for due diligence.' },
        { kind: 'warning', text: 'Do not sign a CPCV “using the agency template” if the property documents have not been checked. After signature, losing the sinal may be lawful, even if you simply change your mind.' }
      ]
    },
    {
      id: 'sinal-rules',
      title: 'Sinal: how much to pay and what art. 442 CC says',
      content: [
        { kind: 'paragraph', text: 'Sinal is a deposit confirming the seriousness of the transaction. In the housing market, sellers often ask for 10–20% of the price, but the law does not set a mandatory percentage. For expensive properties and mortgage-backed transactions, you can negotiate a lower sinal, for example 5–10%, if the seller agrees.' },
        { kind: 'checklist', items: [
          'If the buyer breaches the CPCV without lawful grounds, the seller usually keeps the sinal.',
          'If the seller breaches the CPCV, the buyer may demand the return of double the sinal.',
          'These consequences follow from art. 442 Código Civil, unless the parties have set out another permissible mechanism.',
          'The sinal must be expressly named in the contract as “sinal e princípio de pagamento”, not simply “reserva”.',
          'Pay by bank transfer to the seller’s account or to an escrow/conta cliente of an advogado/solicitador, not in cash.',
          'In the payment reference, state the property, the parties’ NIF and “sinal CPCV”.',
          'Keep the comprovativo de transferência: it will be needed in a dispute, by the bank and for compliance.'
        ] },
        { kind: 'warning', text: '“Agência segura o imóvel por €5,000” is not always a sinal under art. 442. If the payment goes to the agency, there must be a separate written document stating who receives the money, on what basis, whether it is refundable and when it becomes sinal.' }
      ]
    },
    {
      id: 'clauses-to-include',
      title: 'What must be set out in the CPCV',
      content: [
        { kind: 'paragraph', text: 'A good CPCV should be boring and specific: who is selling, what is being sold, for how much, when, under what conditions the transaction is cancelled without penalty, and which documents the seller must provide before the escritura.' },
        { kind: 'checklist', items: [
          'Full details of the parties: name, NIF, marital status, regime de bens, address, ID document.',
          'Exact description of the property: artigo matricial, descrição predial, fração, address, area, garage/storage room.',
          'Price, amount of the sinal, schedule of later payments and payment method.',
          'Deadline for the escritura: for example within 60 or 90 days, with an extension mechanism due to delays caused by the bank/Conservatória.',
          'Mortgage condition: the CPCV is valid only upon aprovação final do crédito habitacional; if the bank refuses, the sinal is returned.',
          'List of seller documents: caderneta predial, certidão permanente, licença de utilização or legal exemption, ficha técnica da habitação, certificado energético, condomínio statement.',
          'Guarantee that there are no debts: IMI, condomínio, utilities, mortgage, seizures, penhoras, usufruto, arrendamento.',
          'Who pays IMT, Imposto do Selo, escritura, registo, repayment of the seller’s mortgage.',
          'Condition of the property and included items: furniture, appliances, air conditioners, solar panels, parking.',
          'Consequences of breach: loss of sinal, return of double the amount, execução específica under art. 830 Código Civil, unless the parties exclude it.'
        ] },
        { kind: 'warning', text: 'If you are buying with a mortgage, a “subject to mortgage approval” clause is critical. Preliminary bank approval is not the same as final approval after avaliação. Without this carve-out, the bank’s refusal may not save the sinal.' }
      ]
    },
    {
      id: 'due-diligence',
      title: 'Checks before signing: the minimum for an expat',
      content: [
        { kind: 'paragraph', text: 'Before the CPCV, you need to check not only the seller but also the property itself. In Portugal, you may encounter unlicensed extensions, unlegalised loft conversions, condomínio debts and restrictions at the Conservatória.' },
        { kind: 'checklist', items: [
          'Certidão permanente do registo predial: owner, mortgages, seizures, usufruto, servidões.',
          'Caderneta predial urbana in Portal das Finanças: artigo, VPT, area, use.',
          'Licença de utilização or confirmation that the property is exempt due to its age/regime.',
          'Certificado energético: mandatory on sale; the class affects the mortgage and renovations.',
          'Ficha técnica da habitação for properties where it is required.',
          'Declaração de condomínio: no debts, and the mensalidade and planned works are clear.',
          'Check with the Câmara Municipal: licences, works, urbanismo, especially for a moradia, anexos, attic, basement.',
          'If the seller is a company: certidão comercial, signatory powers, IVA/tax nuances.',
          'If the seller is non-resident: who signs, whether there is a power of attorney, and whether tax withholding is required in special cases.'
        ] },
        { kind: 'warning', text: 'The estate agent works for the deal, not for the buyer’s legal protection. For a CPCV worth hundreds of thousands of euros, normal practice is to hire an advogado or solicitador before signing, not the day before the escritura.' }
      ]
    },
    {
      id: 'provisional-registration',
      title: 'Registo provisório de aquisição: buyer protection',
      content: [
        { kind: 'paragraph', text: 'Registo provisório de aquisição is the provisional registration of the future purchase at the Conservatória do Registo Predial. It makes your position visible to third parties and reduces the risk that the seller will sell the property again or encumber it before the escritura.' },
        { kind: 'paragraph', text: 'The application is usually filed by an advogado, solicitador, notário or conservador through serviços de registo. Registration requires a CPCV with sufficient identification of the property and the parties; sometimes reconhecimento presencial das assinaturas is required.' },
        { kind: 'checklist', items: [
          'Especially useful if there are more than 30–45 days between the CPCV and the escritura.',
          'Recommended when buying from a developer, where there is a complex sale chain, or if the seller is under financial stress.',
          'Check the validity period of the provisório and that it can be converted into definitivo after the escritura.',
          'Make sure the bank agrees with the wording of the CPCV and the future registration of the mortgage.',
          'After the escritura, the purchase must be registered definitively; the provisório alone does not make you the owner.'
        ] },
        { kind: 'warning', text: 'Registo provisório does not replace due diligence. If there is already a mortgage, penhora or dispute in the register, provisional registration does not “clean” the property — you need a legal solution before the transaction.' }
      ]
    },
    {
      id: 'signing-and-after',
      title: 'Signing, taxes and the route to the escritura',
      content: [
        { kind: 'paragraph', text: 'A CPCV can be signed in person or by power of attorney. For stronger evidential value, signatures are often made with reconhecimento presencial before a notário, advogado or solicitador. If the property is sold with possession handed over before the escritura, the formal requirements and tax consequences must be checked separately.' },
        { kind: 'checklist', items: [
          'Before signing, obtain the final Portuguese version of the CPCV; any English translation is only auxiliary.',
          'Check names, NIF, IBAN, artigo matricial and descrição predial against the documents.',
          'Do not transfer the sinal before signing or the simultaneous exchange of signed copies.',
          'Immediately after the CPCV, set the deadline for mortgage valuation, seguro de vida, seguro multirriscos and escritura.',
          'IMT and Imposto do Selo are usually paid before the escritura, not at the CPCV stage.',
          'At the escritura, the seller must repay the mortgage or bring the distrate/cancelamento da hipoteca.',
          'After the final transaction, check the registo definitivo and the ownership update in Finanças.'
        ] },
        { kind: 'warning', text: 'If the seller asks to “hand over the keys after the CPCV”, this is already a risk of possession without ownership. Separate clauses are needed: who pays condomínio, utilities, insurance, repairs, and what happens if the escritura falls through.' }
      ]
    }
  ],
  costs: [
    { label: 'Sinal under the CPCV', amountEURMin: 0, amountEURMax: 0, note: 'The law does not fix the amount; in practice it is often 10–20% of the property price. For a €300,000 property, this is usually €30,000–€60,000.' },
    { label: 'Legal review of the CPCV', amountEURMin: 300, amountEURMax: 1500, note: 'Market benchmark for an advogado/solicitador; complex transactions, developers and mortgages cost more.' },
    { label: 'IMT and Imposto do Selo', amountEURMin: 0, amountEURMax: 0, note: 'Usually paid before the escritura. The amount depends on the price, VPT, type of property and buyer status; this is not a CPCV fee.' }
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
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
