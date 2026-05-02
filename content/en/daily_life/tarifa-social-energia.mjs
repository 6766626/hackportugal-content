export default {
  editorialVoice: 'hackportugal',
  id: 'tarifa-social-energia',
  categoryId: 'daily_life',
  title: 'Tarifa Social: social tariff for electricity, gas and water',
  tldr: 'Tarifa Social is an automatic discount for low-income households: electricity −33.8%, natural gas −31.2%, water according to município rules. It works by matching the NIF with Segurança Social and Autoridade Tributária, so it is also suitable for expats with a Portuguese NIF if the housing contract is in their name and their income/benefit meets the criteria. In 2026, for electricity you need a contrato doméstico for your permanent home and contracted power up to 6.9 kVA.',
  tags: ['tariff', 'energy', 'water', 'nif'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'What Tarifa Social gives you',
      content: [
        { kind: 'paragraph', text: 'Tarifa Social de Energia is not a separate cheap supplier, but a regulated discount on your bill. It is applied by your electricity or gas supplier after eligibility is confirmed through government databases.' },
        { kind: 'checklist', items: [
          'Electricity: a 33.8% discount on the regulated components of the tariff; the bill usually shows a Tarifa Social line.',
          'Natural gas: a 31.2% discount for low-pressure domestic customers with low annual consumption.',
          'Water, sewerage and waste: Tarifa Social da Água depends on the Câmara Municipal / serviço municipal; the amount and formula vary by município.',
          'The discount applies to the permanent place of residence, not to any second home or tourist flat.',
          'The contract holder with E-REDES/supplier, gas supplier or municipal water provider needs a Portuguese NIF.',
          'Nationality does not matter: an expat with a NIF, an address in Portugal and suitable income can receive the tariff.'
        ] },
        { kind: 'warning', text: 'Tarifa Social does not cancel the entire bill. IVA, potência contratada, taxes, audiovisual contribution and supplier services may remain partially or fully payable.' }
      ]
    },
    {
      id: 'eligibility',
      title: 'Who meets the criteria in 2026',
      content: [
        { kind: 'paragraph', text: 'The main logic: the contract holder must be a “cliente economicamente vulnerável”. Eligibility is checked by NIF through Segurança Social and Autoridade Tributária. For electricity, the technical conditions of the contract also matter.' },
        { kind: 'checklist', items: [
          'Electricity: contrato doméstico for habitação permanente.',
          'Potência contratada for electricity — up to and including 6.9 kVA.',
          'The contract holder receives one of the benefits: Complemento Solidário para Idosos, Rendimento Social de Inserção, subsídio social de desemprego, abono de família, pensão social de velhice, pensão social de invalidez or complemento da prestação social para a inclusão.',
          'Alternative route for electricity: low annual household income. In 2026, the reference point is 12 × IAS = €6,445.56 per year, with increases for household members without income under the rules of the scheme.',
          'Natural gas: domestic contract, baixa pressão, annual consumption up to 500 m³ and status as an economically vulnerable customer.',
          'Water: the criteria are set by the município; they often accept the same social benefits or income below a limit linked to the IAS.',
          'Debts to the supplier should not in themselves automatically remove the right to Tarifa Social, but they can make switching supplier or signing a new contract harder.'
        ] },
        { kind: 'warning', text: 'If the contract is in the landlord’s, a relative’s or a former tenant’s name, the automatic check will not work for you. First transfer the contrato de eletricidade/gás/água to your NIF.' }
      ]
    },
    {
      id: 'automatic',
      title: 'How it is activated automatically',
      content: [
        { kind: 'paragraph', text: 'For electricity and natural gas, the scheme is designed to be automatic. The supplier periodically sends the contract holder’s NIF for checking, and government systems confirm or reject eligibility without passing details of your benefit or income to the supplier.' },
        { kind: 'checklist', items: [
          'Check that your NIF is listed in the contrato, not the landlord’s NIF.',
          'Check the morada fiscal in Finanças and the contract address: for a permanent home, discrepancies are best corrected.',
          'Make sure the potência contratada is not above 6.9 kVA if you want the social tariff for electricity.',
          'Check in Segurança Social Direta that the benefit is active and linked to your NIF.',
          'If the basis is income, check the latest IRS return or the absence of a return if you are not yet required to file one.',
          'Look at the PDF bill: the discount is usually shown as “Tarifa Social”, “Desconto Tarifa Social” or a similar line.',
          'If the discount has appeared, you usually do not need to submit a separate application.'
        ] },
        { kind: 'paragraph', text: 'In practice, the first automatic activation may take several billing cycles. If you have only just transferred the contract or received the benefit, check the next and following bills.' }
      ]
    },
    {
      id: 'manual-request',
      title: 'If the discount has not appeared: manual request',
      content: [
        { kind: 'paragraph', text: 'If you are sure you meet the criteria but there is no discount on the bill, submit a pedido de atribuição da tarifa social to the supplier. You can do this in the área de cliente, by email, in a loja or through support.' },
        { kind: 'checklist', items: [
          'PDF of the latest electricity or gas bill.',
          'NIF of the contract holder.',
          'CPE for electricity or CUI for gas — shown on the bill.',
          'Documento de identificação: residence permit, Cartão de Cidadão or passport.',
          'Proof of permanent address: contrato de arrendamento, atestado de residência or another document if the supplier asks for it.',
          'Declaração da Segurança Social on the benefit, if the automatic check did not work.',
          'IRS/nota de liquidação or declaração de rendimentos if the basis is low income.',
          'For water — application to the Câmara Municipal, SMAS or municipal water supply company; each município has its own formulário.'
        ] },
        { kind: 'warning', text: 'Do not send unnecessary medical or immigration documents in a general support chat. For Tarifa Social, the NIF, contract, address and proof of the social/income criterion are usually enough.' }
      ]
    },
    {
      id: 'water',
      title: 'Water: why everything depends on the município',
      content: [
        { kind: 'paragraph', text: 'Tarifa Social da Água is regulated differently from electricity and gas. The state created the framework, but the specific tariff, automatic application, list of documents and size of the discount are set by the município or entidade gestora: Câmara Municipal, SMAS, EMAR, Águas de Gaia and so on.' },
        { kind: 'checklist', items: [
          'Find the “tarifa social da água”, “tarifário social” or “ação social” section on your Câmara Municipal website.',
          'Check whether the relief applies only to água or also to saneamento and resíduos urbanos.',
          'Clarify the consumption limit: the discount often applies only to the basic m³, while higher consumption is charged on the normal scale.',
          'Check whether the contrato da água needs to be in your NIF.',
          'If you rent a room and water is included in the rent, it is usually impossible to receive a personal discount.',
          'Some municípios carry out an automatic check through AT/Segurança Social; others require an annual application.',
          'When moving to another concelho, eligibility needs to be checked again.'
        ] },
        { kind: 'paragraph', text: 'Practical rule of thumb: check electricity and gas first with the commercial supplier, and water with the município or municipal company that issues the bill.' }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Common expat mistakes',
      content: [
        { kind: 'checklist', items: [
          'The electricity contract is left in the landlord’s name: the discount is checked against their NIF, not yours.',
          'You chose potência 10.35 kVA “just in case”: for the social tariff for electricity, the limit is 6.9 kVA.',
          'The morada fiscal in Finanças is still foreign or an old Portuguese address.',
          'The benefit is in the spouse’s name, while the contract is in another person’s name; the automatic match may not line up.',
          'You expect a discount on bottled gas: Tarifa Social de Gás Natural applies to network natural gas, not cylinders.',
          'You think NHR/IFICI or visa type D7/D8 automatically gives entitlement: no, income, benefits and contract parameters decide.',
          'After changing supplier, you did not check the first bill: the discount should carry over, but glitches happen.',
          'For water, you submitted the request to the electricity supplier instead of the Câmara Municipal or SMAS.'
        ] },
        { kind: 'paragraph', text: 'If you are refused, ask for the reason in writing: “não elegível por potência”, “NIF não validado”, “contrato não doméstico”, “morada não permanente”. The wording usually makes it clear what needs to be fixed.' }
      ]
    }
  ],
  sources: [
    {
      title: 'ERSE: Tarifa Social — tariffs and prices',
      url: 'https://www.erse.pt/atividade/tarifas-e-precos/tarifa-social/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ERSE: citizens’ section on bills and energy',
      url: 'https://www.erse.pt/inicio/cidadao/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Diário da República: Decreto-Lei 138-A/2010 — Tarifa Social de eletricidade',
      url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/138-a-2010-306111',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Diário da República: Decreto-Lei 101/2011 — Tarifa Social de gás natural',
      url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/101-2011-671579',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
