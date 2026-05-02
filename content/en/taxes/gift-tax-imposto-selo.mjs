export default {
  editorialVoice: 'hackportugal',
  id: 'gift-tax-imposto-selo',
  categoryId: 'taxes',
  title: 'Gift tax: Imposto do Selo 10% and family exemptions',
  tldr: 'In Portugal there is no separate “gift tax”: gifts are taxed under Imposto do Selo. The basic rate is 10% for gratuitous transfers, and when gifting property an additional 0.8% usually applies. Full exemption from the 10% is available for cônjuge/unido de facto, ascendants and descendants. Siblings, friends, partners without união de facto are not exempt. Cash gifts to close family above €5,000 still need to be declared via Modelo 1 IS.',
  tags: ['tax', 'stamp', 'gifts', 'finanças'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-taxed',
      title: 'What counts as a gift for Imposto do Selo',
      content: [
        { kind: 'paragraph', text: 'Imposto do Selo applies to transmissões gratuitas — gratuitous transfers of property: money, real estate, shares, securities, vehicles, rights to claim and other assets. The tax is paid by the recipient of the gift, not by the donor.' },
        { kind: 'paragraph', text: 'Important: this is not only about a “birthday present”. If a parent transfers €50,000 to an adult child for a mortgage deposit, that is also a gift. If a friend gives you €20,000 “with no repayment”, that is a gift with 10% tax if the transaction falls within Portuguese jurisdiction.' },
        { kind: 'checklist', items: [
          'A bank transfer to a Portuguese account may be a gift/donativo for Imposto do Selo purposes.',
          'Gifting property in Portugal almost always requires an escritura/documento particular autenticado and registration.',
          'Transferring a vehicle without payment may also be a transmissção gratuita.',
          'Debt forgiveness between individuals may be treated as a gratuitous benefit.',
          'Ordinary social gifts of low value are usually not a practical tax issue, but larger amounts are better documented.',
          'IRS is usually not paid on a gift: it is not salary and not business income, but Imposto do Selo is a separate tax.'
        ] }
      ]
    },
    {
      id: 'rates',
      title: 'Rates: 10% and when 0.8% appears',
      content: [
        { kind: 'paragraph', text: 'The basic rate for gratuitous transfers is 10% under verba 1.2 Tabela Geral do Imposto do Selo. The tax base is usually equal to the value of the gifted asset.' },
        { kind: 'paragraph', text: 'If real estate in Portugal is gifted, 0.8% applies separately under verba 1.1 on the transfer of ownership. Therefore, for a non-exempt recipient, gifting property usually creates a combined burden of 10.8%: 10% + 0.8%.' },
        { kind: 'checklist', items: [
          'Gift of €30,000 from a friend: guide figure — €3,000 Imposto do Selo.',
          'Gift of €30,000 from a parent to a child: 10% is not paid, but there may be a reporting obligation.',
          'Apartment worth €300,000 from a brother: guide figure — €30,000 at 10% + €2,400 at 0.8%.',
          'Apartment worth €300,000 from a parent to a child: 10% is exempt, but 0.8% usually remains — €2,400.',
          'For property, the base may depend on the VPT — valor patrimonial tributário — and the price/value stated in the deed; the notary and Finanças check the calculation.',
          'Payment of the tax is usually needed before registration/execution of the deed if the gift is formalised before a notary, solicitador or advogado.'
        ] },
        { kind: 'warning', text: 'Do not confuse Imposto do Selo with IMT. In a standard property purchase, IMT + 0.8% IS are paid. In a gift, instead of IMT, the gratuitous transfer regime usually applies: 10% IS, while 0.8% IS remains for real estate.' }
      ]
    },
    {
      id: 'family-exemptions',
      title: 'Who is exempt: family in the direct line',
      content: [
        { kind: 'paragraph', text: 'The main exception: exemption from the 10% for cônjuge or unido de facto, descendants and ascendants. This is the direct family line: parents, grandparents, children, grandchildren. A spouse and an officially recognised união de facto are also included.' },
        { kind: 'checklist', items: [
          'Exempt from the 10%: spouse — cônjuge.',
          'A unido de facto is exempt if the de facto union can be proven under Portuguese rules.',
          'Ascendants are exempt: parents, grandmothers, grandfathers.',
          'Descendants are exempt: children, grandchildren.',
          'Not exempt: brother, sister, uncle, aunt, nephew/niece, cousin or other collateral relative.',
          'Not exempt: a partner where you “just live together” if there is no união de facto status.',
          'Friends and third parties are not exempt.',
          'The exemption concerns the 10% under verba 1.2, but it does not always remove the 0.8% on real estate.'
        ] },
        { kind: 'warning', text: 'For expats, proof of family relationship is critical: birth/marriage certificates, apostille/legalização, translation where necessary. Finanças and the notary are not obliged to accept an “explanation in a letter” if the family relationship chain is not documented.' }
      ]
    },
    {
      id: 'declaration-modelo-1',
      title: 'Modelo 1 IS: when and how to declare',
      content: [
        { kind: 'paragraph', text: 'The declaration is called Modelo 1 do Imposto do Selo — Participação de Transmissões Gratuitas. The general filing deadline is by the end of the 3rd month after the month in which the gift took place or the tax obligation arose. For example, gift received on 10 April 2026: guide deadline — by 31 July 2026.' },
        { kind: 'paragraph', text: 'For close family there is an important practical threshold: cash gifts from cônjuge/unido de facto, ascendants or descendants above €5,000 are exempt from the 10%, but they must be declared. Below €5,000, the reporting obligation for such cash gifts usually does not apply.' },
        { kind: 'checklist', items: [
          'Log in to Portal das Finanças with your NIF and password or Chave Móvel Digital (CMD).',
          'Look for the Imposto do Selo / Transmissões Gratuitas / Modelo 1 section.',
          'State the gift recipient — beneficiário/donatário.',
          'State the donor — doador — and the degree of relationship.',
          'Describe the asset: dinheiro, imóvel, quotas, veículo and so on.',
          'Attach documents: comprovativo da transferência, escritura, contrato, declaração de doação, certidões de nascimento/casamento.',
          'If there is an exemption, indicate the basis: cônjuge/unido de facto, ascendente or descendente.',
          'Save the filing comprovativo and any eventual nota de liquidação.'
        ] },
        { kind: 'warning', text: 'If online filing does not work because of a foreign document, missing field or complex asset, go to the Serviço de Finanças for your tax address. Do not wait until the deadline: the fine for missing the declaration may cost more than the visit.' }
      ]
    },
    {
      id: 'cross-border',
      title: 'International transfers: what matters for an expat',
      content: [
        { kind: 'paragraph', text: 'Portuguese Imposto do Selo is linked to Portuguese tax jurisdiction: the location of the asset, formalisation of the transaction, Portuguese accounts/rights and other connections with Portugal. If parents from another country transfer money to your account in Portugal, the bank may ask for origem dos fundos, and Finanças may take an interest in the nature of the incoming funds.' },
        { kind: 'checklist', items: [
          'For a large transfer, prepare a gift letter/declaração de doação in advance.',
          'State that the transfer is gratuitous and no repayment is required.',
          'Keep bank statements for the sender and recipient.',
          'For parents/children, attach birth certificates with an apostille and translation if required.',
          'Do not call a gift a “loan” if there is no loan: later the bank or Finanças may ask for an agreement and repayment schedule.',
          'If the money is going towards a property purchase, the notary and bank will almost certainly ask for origem dos fundos.',
          'Check the tax consequences in the donor’s country: Portugal may exempt it, but another country may not.'
        ] },
        { kind: 'warning', text: '“It is a gift from my mum from abroad, so nothing is needed in Portugal” is a dangerous oversimplification. For close family there is often no 10%, but a declaration for amounts above €5,000 and documents on the source of funds still matter.' }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Common mistakes and a safer setup',
      content: [
        { kind: 'checklist', items: [
          'Mistake: a brother gifts money and the recipient treats him as “close family” for the exemption. For Imposto do Selo, a brother is not part of the exempt direct line.',
          'Mistake: documenting a large gift as a “private loan”, but without an agreement, interest or repayment.',
          'Mistake: not declaring a gift from parents above €5,000 because the tax is €0.',
          'Mistake: forgetting the 0.8% when gifting property even within the direct family line.',
          'Mistake: making several split transfers to appear below the threshold. This may look worse than one transparent transaction.',
          'Mistake: not translating and legalising foreign documents proving family relationship before the transaction.',
          'Mistake: mixing a gift with payment for services. If it is remuneration for work, it is already an IRS/IVA/NISS risk, not a family gift.'
        ] },
        { kind: 'paragraph', text: 'A safer setup for a large family gift in 2026: a short declaração de doação, bank transfer with a clear payment reference, family relationship documents, checking the Modelo 1 IS obligation, and keeping comprovativos for at least several years. For real estate — notary/advogado before signing, calculation of the 0.8% and registration at the Conservatória.' }
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
      url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/selo/Pages/imposto-do-selo-tabela-geral.aspx',
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
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
