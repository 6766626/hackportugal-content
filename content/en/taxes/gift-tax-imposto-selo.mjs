export default {
  editorialVoice: 'hackportugal',
  id: 'gift-tax-imposto-selo',
  categoryId: 'taxes',
  title: 'Gift tax: Imposto do Selo 10% and family exemptions',
  tldr: 'In Portugal there is no separate “gift tax”: gifts are taxed under Imposto do Selo. The basic rate is 10% for gratuitous transfers, and for gifts of property an additional 0.8% usually applies. A full exemption from the 10% exists for cônjuge/unido de facto, ascendants and descendants. Siblings, friends and partners without união de facto are not exempt. Cash gifts to close family above €5,000 still need to be declared via Modelo 1 IS.',
  tags: ['tax', 'stamp duty', 'gifts', 'finanças'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-taxed',
      title: 'What counts as a gift for Imposto do Selo',
      content: [
        { kind: 'paragraph', text: 'Imposto do Selo applies to transmissões gratuitas — gratuitous transfers of assets: money, property, shares, securities, cars, rights to receivables and other assets. The tax is paid by the recipient of the gift, not by the donor.' },
        { kind: 'paragraph', text: 'Important: this is not only about a “birthday present”. If a parent transfers €50,000 to an adult child for a mortgage deposit, that is also a gift. If a friend gives you €20,000 “with no repayment”, that is a gift taxed at 10%, if the transaction falls under Portuguese jurisdiction.' },
        { kind: 'checklist', items: [
          'A bank transfer to a Portuguese account may be a gift/donativo for Imposto do Selo purposes.',
          'A gift of property in Portugal almost always requires an escritura/documento particular autenticado and registration.',
          'The transfer of a car without payment may also be a transmissção gratuita.',
          'Debt forgiveness between individuals may be treated as a gratuitous benefit.',
          'Ordinary social gifts of low value are usually not a practical tax problem, but large amounts are better documented.',
          'IRS is usually not paid on a gift: it is not salary or business income, but Imposto do Selo is a separate tax.'
        ] }
      ]
    },
    {
      id: 'rates',
      title: 'Rates: 10% and when 0.8% appears',
      content: [
        { kind: 'paragraph', text: 'The basic rate for gratuitous transfers is 10% under verba 1.2 Tabela Geral do Imposto do Selo. The tax base is usually equal to the value of the gifted asset.' },
        { kind: 'paragraph', text: 'If property in Portugal is gifted, 0.8% applies separately under verba 1.1 to the transfer of ownership. Therefore, for a non-exempt recipient, a gift of property usually produces a combined burden of 10.8%: 10% + 0.8%.' },
        { kind: 'checklist', items: [
          'Gift of €30,000 from a friend: guide figure — €3,000 Imposto do Selo.',
          'Gift of €30,000 from a parent to a child: the 10% is not paid, but there may be a filing obligation.',
          'Apartment worth €300,000 from a sibling: guide figure — €30,000 at 10% + €2,400 at 0.8%.',
          'Apartment worth €300,000 from a parent to a child: the 10% is exempt, but the 0.8% usually remains — €2,400.',
          'For property, the base may depend on the VPT — valor patrimonial tributário — and the price/value stated in the deed; the notary and Finanças check the calculation.',
          'Payment of the tax is usually needed before registration/execution of the deed, if the gift is formalised with a notary, solicitador or advogado.'
        ] },
        { kind: 'warning', text: 'Do not confuse Imposto do Selo with IMT. In an ordinary property purchase, IMT + 0.8% IS is paid. In a gift, instead of IMT, the gratuitous transfer regime usually applies: 10% IS, while 0.8% IS remains for property.' }
      ]
    },
    {
      id: 'family-exemptions',
      title: 'Who is exempt: direct-line family',
      content: [
        { kind: 'paragraph', text: 'The main exception: exemption from the 10% for cônjuge or unido de facto, descendants and ascendants. This is the direct family line: parents, grandparents, children, grandchildren. A spouse and an officially recognised união de facto are also included.' },
        { kind: 'checklist', items: [
          'Exempt from the 10%: husband/wife — cônjuge.',
          'A unido de facto is exempt, if the de facto union can be proven under Portuguese rules.',
          'Ascendants are exempt: parents, grandmothers, grandfathers.',
          'Descendants are exempt: children, grandchildren.',
          'Not exempt: brother, sister, uncle, aunt, nephew/niece, cousin or other collateral relative.',
          'Not exempt: a partner where you “just live together”, if there is no união de facto status.',
          'Friends and third parties are not exempt.',
          'The exemption concerns the 10% under verba 1.2, but it does not always remove the 0.8% for property.'
        ] },
        { kind: 'warning', text: 'For expats, proof of family relationship is critical: birth/marriage certificates, apostille/legalização, translation if needed. Finanças and the notary are not obliged to accept an “explanation in a letter” if the family relationship chain is not documented.' }
      ]
    },
    {
      id: 'declaration-modelo-1',
      title: 'Modelo 1 IS: when and how to declare',
      content: [
        { kind: 'paragraph', text: 'The declaration is called Modelo 1 do Imposto do Selo — Participação de Transmissões Gratuitas. The general filing deadline is by the end of the 3rd month after the month in which the gift occurred or the tax obligation arose.\n\nFor example, a gift received on 10 April 2026: the indicative deadline is 31 July 2026.' },
        { kind: 'paragraph', text: 'For close family, there is an important practical threshold: cash gifts from cônjuge/unido de facto, ascendants or descendants above €5,000 are exempt from the 10%, but they must be declared. Below €5,000, the filing obligation for such cash gifts usually does not apply.' },
        { kind: 'checklist', items: [
          'Log in to Portal das Finanças with your NIF and password or Chave Móvel Digital (CMD).',
          'Look for the Imposto do Selo / Transmissões Gratuitas / Modelo 1 section.',
          'State the recipient of the gift — beneficiário/donatário.',
          'State the donor — doador — and the degree of family relationship.',
          'Describe the asset: dinheiro, imóvel, quotas, veículo and so on.',
          'Attach documents: comprovativo da transferência, escritura, contrato, declaração de doação, certidões de nascimento/casamento.',
          'If there is an exemption, indicate the basis: cônjuge/unido de facto, ascendente or descendente.',
          'Keep the filing comprovativo and any eventual nota de liquidação.'
        ] },
        { kind: 'warning', text: 'If online filing fails because of a foreign document, a missing field or a complex asset, go to the Serviço de Finanças for your tax address. Do not wait until the deadline: a fine for missing the declaration can be more expensive than the visit.' }
      ]
    },
    {
      id: 'cross-border',
      title: 'International transfers: what matters for an expat',
      content: [
        { kind: 'paragraph', text: 'Portuguese Imposto do Selo is linked to Portuguese tax jurisdiction: the location of the asset, execution of the transaction, Portuguese accounts/rights and other connections with Portugal. If parents from another country transfer money to your account in Portugal, the bank may ask for origem dos fundos, and Finanças may take an interest in the nature of the incoming funds.' },
        { kind: 'checklist', items: [
          'For a large transfer, prepare a gift letter/declaração de doação in advance.',
          'State that the transfer is gratuitous and no repayment is required.',
          'Keep the bank statements of the sender and the recipient.',
          'For parents/children, attach birth certificates with an apostille and translation, if required.',
          'Do not call a gift a “loan” if there is no loan: later the bank or Finanças may ask for the agreement and repayment schedule.',
          'If the money is for buying property, the notary and the bank will almost certainly ask for origem dos fundos.',
          'Check the tax consequences in the donor’s country: Portugal may exempt it, but the other country may not.'
        ] },
        { kind: 'warning', text: '“It is a gift from my mother abroad, so nothing is needed in Portugal” is a dangerous oversimplification. For close family there is often no 10%, but the declaration for amounts above €5,000 and documents on the source of funds are still important.' }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Common mistakes and a safe structure',
      content: [
        { kind: 'checklist', items: [
          'Mistake: a sibling gives money, and the recipient treats them as “close family” for the exemption. For Imposto do Selo, a sibling is not included in the exempt direct line.',
          'Mistake: documenting a large gift as a “private loan”, but without an agreement, interest or repayment.',
          'Mistake: not declaring a gift from parents above €5,000 because the tax is €0.',
          'Mistake: forgetting about the 0.8% when gifting property even within the direct family line.',
          'Mistake: making several split transfers to appear below the threshold. This may look worse than one transparent transaction.',
          'Mistake: not translating and legalising foreign documents proving family relationship before the transaction.',
          'Mistake: mixing a gift with payment for services. If it is remuneration for work, it is already an IRS/IVA/NISS risk, not a family gift.'
        ] },
        { kind: 'paragraph', text: 'A safe structure for a large family gift in 2026: a short declaração de doação, a bank transfer with a clear reference, documents proving family relationship, a check of the Modelo 1 IS obligation, and keeping comprovativos for at least several years. For property — notary/advogado before signing, calculation of the 0.8% and registration at the Conservatória.' }
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
      title: 'Código do Imposto do Selo — consolidated version in Diário da República',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1999-34500675',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Tabela Geral do Imposto do Selo — verbas 1.1 and 1.2',
      url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/selo/Pages/ccod-selo-tabgiselo.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Autoridade Tributária — Modelo 1 do Imposto do Selo / Transmissões gratuitas',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/modelos_formularios/imposto_selo/Pages/default.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}
