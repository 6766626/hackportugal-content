export default {
  editorialVoice: 'hackportugal',
  id: 'gift-tax-imposto-selo',
  categoryId: 'taxes',
  title: 'Gift tax: Imposto do Selo 10% and family exemptions',
  tldr: 'In Portugal there is no separate “gift tax”: gifts are subject to Imposto do Selo. The base rate is 10% for gratuitous transfers, and when gifting real estate an additional 0.8% is usually applied. Full exemption from the 10% exists for cônjuge/unido de facto, ascendants and descendants. Siblings, friends, partners without união de facto are not exempt. Cash gifts to close family over €5,000 still have to be declared via Modelo 1 IS.',
  tags: ['imposto do selo', 'stamp duty', 'gifts', 'financas'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-taxed',
      title: 'What counts as a gift for Imposto do Selo',
      content: [
        { kind: 'paragraph', text: 'Imposto do Selo applies to transmissões gratuitas — gratuitous transfers of assets: money, real estate, shares, securities, cars, receivables and other assets. The tax is paid by the recipient of the gift, not the donor.' },
        { kind: 'paragraph', text: 'Important: it is not only a “birthday present”. If a parent transfers €50,000 to an adult child for a mortgage down payment, that is also a gift. If a friend passes you €20,000 “with no repayment”, that is a gift taxed at 10% if the transaction falls under Portuguese jurisdiction.' },
        { kind: 'checklist', items: [
          'A money transfer to a Portuguese account may be a gift/donativo for Imposto do Selo purposes.',
          'Gifting real estate in Portugal almost always requires an escritura/documento particular autenticado and registration.',
          'Transferring a car without payment may also be a transmissão gratuita.',
          'Forgiving a debt between individuals may be treated as a gratuitous benefit.',
          'Ordinary social presents of small value are usually not a practical tax issue, but large amounts are better documented.',
          'IRS is usually not payable on a gift: it is not salary or business income, but Imposto do Selo is a separate tax.'
        ] }
      ]
    },
    {
      id: 'rates',
      title: 'Rates: 10% and when 0.8% appears',
      content: [
        { kind: 'paragraph', text: 'The base rate for gratuitous transfers is 10% under verba 1.2 of the Tabela Geral do Imposto do Selo. The tax base is usually equal to the value of the gifted asset.' },
        { kind: 'paragraph', text: 'If real estate in Portugal is gifted, 0.8% under verba 1.1 on the transfer of title is applied separately. Therefore, for a non-exempt recipient, gifting real estate typically results in a combined burden of 10.8%: 10% + 0.8%.' },
        { kind: 'checklist', items: [
          'A €30,000 gift from a friend: ballpark €3,000 of Imposto do Selo.',
          'A €30,000 gift from a parent to a child: the 10% is not due, but there may be a filing obligation.',
          'A €300,000 flat from a brother: ballpark €30,000 at 10% + €2,400 at 0.8%.',
          'A €300,000 flat from a parent to a child: the 10% is exempt, but the 0.8% usually remains — €2,400.',
          'For real estate, the base may depend on the VPT — valor patrimonial tributário — and the price/value stated in the deed; the notary and Finanças check the calculation.',
          'Payment of the tax is usually required before registration/execution of the deed if the gift is formalised with a notary, solicitador or advogado.'
        ] },
        { kind: 'warning', text: 'Do not confuse Imposto do Selo with IMT. On a normal purchase of real estate you pay IMT + 0.8% IS. On a gift, instead of IMT the gratuitous transfer regime typically applies: 10% IS, and the 0.8% IS remains for real estate.' }
      ]
    },
    {
      id: 'family-exemptions',
      title: 'Who is exempt: family in the direct line',
      content: [
        { kind: 'paragraph', text: 'The key exception: exemption from the 10% for cônjuge or unido de facto, descendants and ascendants. This is the direct family line: parents, grandparents, children, grandchildren. The spouse and an officially recognised união de facto are also included.' },
        { kind: 'checklist', items: [
          'Exempt from 10%: spouse — cônjuge.',
          'Unido de facto is exempt if the de facto union can be proven under Portuguese rules.',
          'Exempt: ascendants — parents, grandparents.',
          'Exempt: descendants — children, grandchildren.',
          'Not exempt: brother, sister, uncle, aunt, nephew/niece, cousin.',
          'Not exempt: a partner “we just live together” if there is no união de facto status.',
          'Not exempt: friends and third parties.',
          'The exemption concerns the 10% under verba 1.2 but does not always remove the 0.8% on real estate.'
        ] },
        { kind: 'warning', text: 'For expats, proof of kinship is critical: birth/marriage certificates, apostille/legalização, translation if required. Finanças and the notary are not obliged to accept an “explanatory letter” if the chain of kinship is not documented.' }
      ]
    },
    {
      id: 'declaration-modelo-1',
      title: 'Modelo 1 IS: when and how to declare',
      content: [
        { kind: 'paragraph', text: 'The return is called Modelo 1 do Imposto do Selo — Participação de Transmissões Gratuitas. The general filing deadline is by the end of the 3rd month after the month in which the gift occurred or the tax liability arose. For example, gift received on 10 April 2026: indicative deadline — by 31 July 2026.' },
        { kind: 'paragraph', text: 'For close family there is an important practical threshold: cash gifts from a cônjuge/unido de facto, ascendants or descendants over €5,000 are exempt from the 10%, but must be declared. Below €5,000 the filing obligation for such cash gifts usually does not apply.' },
        { kind: 'checklist', items: [
          'Log in to the Portal das Finanças with your NIF and password or Chave Móvel Digital (CMD).',
          'Look for Imposto do Selo / Transmissões Gratuitas / Modelo 1.',
          'Enter the gift recipient — beneficiário/donatário.',
          'Enter the donor — doador — and the degree of kinship.',
          'Describe the asset: dinheiro, imóvel, quotas, veículo, etc.',
          'Attach documents: comprovativo da transferência, escritura, contrato, declaração de doação, certidões de nascimento/casamento.',
          'If there is an exemption, tick the basis: cônjuge/unido de facto, ascendant or descendant.',
          'Save the comprovativo de entrega and any nota de liquidação.'
        ] },
        { kind: 'warning', text: 'If online filing does not work because of a foreign document, a missing field or a complex asset, go to the Serviço de Finanças for your tax address. Do not wait until the deadline: the fine for missing the filing can be more expensive than a visit.' }
      ]
    },
    {
      id: 'cross-border',
      title: 'Cross-border transfers: what matters to an expat',
      content: [
        { kind: 'paragraph', text: 'Portuguese Imposto do Selo is tied to Portuguese tax jurisdiction: the location of the asset, the formalisation of the transaction, Portuguese accounts/rights and other links with Portugal. If parents from another country transfer money to your account in Portugal, the bank may request origem dos fundos, and Finanças may take an interest in the nature of the receipt.' },
        { kind: 'checklist', items: [
          'For a large transfer, prepare a gift letter/declaração de doação in advance.',
          'State that the transfer is gratuitous and no repayment is required.',
          'Keep bank statements for the sender and the recipient.',
          'For parents/children, attach birth certificates with apostille and translation if needed.',
          'Do not call a gift a “loan” if there is no loan: later the bank or Finanças may ask for a contract and a repayment schedule.',
          'If the money is going towards a property purchase, the notary and the bank will almost certainly ask for origem dos fundos.',
          'Check tax consequences in the donor’s country: Portugal may exempt, but the other country may not.'
        ] },
        { kind: 'warning', text: '“It is a gift from my mum from abroad, so in Portugal there is nothing to do” is a dangerous simplification. For close family the 10% is often not due, but a declaration above €5,000 and source-of-funds documents are still important.' }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Common mistakes and a safe workflow',
      content: [
        { kind: 'checklist', items: [
          'Mistake: a brother gives money and the recipient counts him as “close family” for the exemption. For Imposto do Selo, a brother is not in the exempt direct line.',
          'Mistake: structuring a large gift as a “private loan” but with no contract, interest or repayment.',
          'Mistake: not declaring a gift from parents over €5,000 because the tax is €0.',
          'Mistake: forgetting about the 0.8% when gifting real estate even within the immediate family.',
          'Mistake: making several split transfers to look below the threshold. This may look worse than one transparent transaction.',
          'Mistake: failing to translate and legalise foreign documents proving kinship before the transaction.',
          'Mistake: mixing a gift with payment for services. If it is remuneration for work, that is already an IRS/IVA/NISS risk, not a family gift.'
        ] },
        { kind: 'paragraph', text: 'A safe workflow for a large family gift in 2026: a short declaração de doação, a bank transfer with a clear payment reference, documents proving kinship, checking the need for Modelo 1 IS, and keeping comprovativos for at least several years. For real estate — see a notary/advogado before signing, calculate the 0.8%, and register at the Conservatória.' }
      ]
    }
  ],
  sources: [
    {
      title: 'Portal das Finanças — Imposto do Selo and Transmissões Gratuitas',
      url: 'https://info.portaldasfinancas.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do Imposto do Selo — consolidated version in the Diário da República',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1999-34500675',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Tabela Geral do Imposto do Selo — items 1.1 and 1.2',
      url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/selo/Pages/ccod-selo-tabgiselo.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Autoridade Tributária — Modelo 1 of Imposto do Selo / Gratuitous transfers',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/modelos_formularios/imposto_selo/Pages/default.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
