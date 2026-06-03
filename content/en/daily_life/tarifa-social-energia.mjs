export default {
  editorialVoice: 'hackportugal',
  id: 'tarifa-social-energia',
  categoryId: 'daily_life',
  title: 'Tarifa Social: social tariff for electricity, gas and water',
  tldr: 'Tarifa Social is an automatic discount for low-income households: electricity −33.8%, natural gas −31.2%, water according to município rules. It works by matching the NIF with Segurança Social and Autoridade Tributária, so it also suits expats with a Portuguese NIF if the housing contract is in their name and their income/benefit meets the criteria. In 2026, electricity requires a domestic contract for permanent housing and power up to 6.9 kVA.',
  tags: ['tariff', 'energy', 'water', 'nif'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'What Tarifa Social provides',
      content: [
        { kind: 'paragraph', text: 'Tarifa Social de Energia is not a separate cheap supplier, but a regulated discount on the bill. It is applied by your electricity or gas supplier after entitlement is confirmed through state databases.' },
        { kind: 'checklist', items: [
          'Electricity: a 33.8% discount on the regulated components of the tariff; the bill usually shows a Tarifa Social line.',
          'Natural gas: a 31.2% discount for low-pressure domestic customers with low annual consumption.',
          'Water, sewerage and waste: Tarifa Social da Água depends on the Câmara Municipal / municipal service; the amount and formula vary by município.',
          'The discount applies to the permanent place of residence, not to any second home or tourist flat.',
          'A Portuguese NIF is needed for the holder of the contract with E-REDES/supplier, gas supplier or municipal water service.',
          'Citizenship does not matter: an expat with a NIF, an address in Portugal and suitable income can obtain the tariff.'
        ] },
        { kind: 'warning', text: 'Tarifa Social does not cancel the whole bill. IVA, potência contratada, taxes, audiovisual contribution and supplier services may remain partly or fully payable.' }
      ]
    },
    {
      id: 'eligibility',
      title: 'Who meets the criteria in 2026',
      content: [
        { kind: 'paragraph', text: 'The main logic: the contract holder must be a “cliente economicamente vulnerável”. Entitlement is checked by NIF through Segurança Social and Autoridade Tributária. For electricity, the technical conditions of the contract also matter.' },
        { kind: 'checklist', items: [
          'Electricity: contrato doméstico for habitação permanente.',
          'Potência contratada for electricity — up to and including 6.9 kVA.',
          'The contract holder receives one of the benefits: Complemento Solidário para Idosos, Rendimento Social de Inserção, subsídio social de desemprego, abono de família, pensão social de velhice, pensão social de invalidez or complemento da prestação social para a inclusão.',
          'Alternative for electricity: low annual household income. In 2026, the benchmark is 12 × IAS = €6,445.56 per year, with increases for household members without income according to the regime rules.',
          'Natural gas: domestic contract, baixa pressão, consumo anual up to 500 m³ and economically vulnerable customer status.',
          'Water: the criteria are set by the município; often the same social benefits are accepted, or income below a limit linked to IAS.',
          'Debts to the supplier should not in themselves automatically remove entitlement to Tarifa Social, but they may hinder switching supplier or signing a new contract.'
        ] },
        { kind: 'warning', text: 'If the contract is in the landlord’s, a relative’s or a former occupant’s name, the automatic check will not work for you. First transfer the contrato de eletricidade/gás/água to your own NIF.' }
      ]
    },
    {
      id: 'automatic',
      title: 'How it is activated automatically',
      content: [
        { kind: 'paragraph', text: 'For electricity and natural gas, the regime is designed to be automatic. The supplier periodically sends the contract holder’s NIF for checking, and state systems confirm or reject entitlement without passing details of your benefit or income to the supplier.' },
        { kind: 'checklist', items: [
          'Check that your NIF is stated in the contrato, not the landlord’s NIF.',
          'Check the morada fiscal in Finanças and the contract address: for permanent housing, discrepancies are better corrected.',
          'Make sure the potência contratada is not above 6.9 kVA if you want the social tariff for electricity.',
          'Check in Segurança Social Direta that the benefit is active and linked to your NIF.',
          'If the basis is income, check the latest IRS return or the absence of a return if you are not yet required to file one.',
          'Look at the PDF bill: the discount is usually shown as “Tarifa Social”, “Desconto Tarifa Social” or a similar line.',
          'If the discount has appeared, a separate application is usually not needed.'
        ] },
        { kind: 'paragraph', text: 'In practice, the first automatic activation may take several billing cycles. If you have only just transferred the contract or received the benefit, check the next and following bill.' }
      ]
    },
    {
      id: 'manual-request',
      title: 'If the discount has not appeared: manual request',
      content: [
        { kind: 'paragraph', text: 'If you are sure you meet the criteria but there is no discount on the bill, submit a pedido de atribuição da tarifa social to the supplier. This can be done in the área de cliente, by email, in a loja or through support.' },
        { kind: 'checklist', items: [
          'PDF of the latest electricity or gas bill.',
          'NIF of the contract holder.',
          'CPE for electricity or CUI for gas — shown on the bill.',
          'Documento de identificação: residence permit, Cartão de Cidadão or passport.',
          'Proof of permanent address: contrato de arrendamento, atestado de residência or another document if the supplier asks for it.',
          'Declaração da Segurança Social confirming the benefit, if the automatic check did not work.',
          'IRS/nota de liquidação or declaração de rendimentos, if the basis is low income.',
          'For water — application to the Câmara Municipal, SMAS or municipal water supply company; each município has its own formulário.'
        ] },
        { kind: 'warning', text: 'Do not send unnecessary medical or immigration documents in a general support chat. For Tarifa Social, the NIF, contract, address and proof of the social/income criterion are usually enough.' }
      ]
    },
    {
      id: 'water',
      title: 'Water: why everything depends on the município',
      content: [
        { kind: 'paragraph', text: 'Tarifa Social da Água is regulated differently from electricity and gas. The state created a framework, but the specific tariff, automation, list of documents and discount amount are set by the município or entidade gestora: Câmara Municipal, SMAS, EMAR, Águas de Gaia and so on.' },
        { kind: 'checklist', items: [
          'Find the “tarifa social da água”, “tarifário social” or “ação social” section on your Câmara Municipal website.',
          'Check whether the relief applies only to água or also to saneamento and resíduos urbanos.',
          'Clarify the consumption limit: often the discount applies only to basic m³, while higher consumption is paid at the normal scale.',
          'Check whether the contrato da água must be in your NIF.',
          'If you rent a room and water is included in the rent, obtaining a personal discount is usually impossible.',
          'Some municípios carry out an automatic check through AT/Segurança Social, while others require an annual application.',
          'When moving to another concelho, entitlement must be checked again.'
        ] },
        { kind: 'paragraph', text: 'Practical rule of thumb: for electricity and gas, check first with the commercial supplier; for water, check with the município or municipal company that issues the bill.' }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Common expat mistakes',
      content: [
        { kind: 'checklist', items: [
          'The electricity contract is left in the landlord’s name: the discount is checked against their NIF, not yours.',
          'You chose potência 10.35 kVA “just in case”: for the social tariff on electricity, the limit is 6.9 kVA.',
          'The morada fiscal in Finanças is still foreign or an old Portuguese one.',
          'The benefit is in the spouse’s name, while the contract is in another person’s name; the automatic check may not match.',
          'You expect a discount on bottled gas: Tarifa Social de Gás Natural applies to natural gas through the network, not to cylinders.',
          'You think NHR/IFICI or visa type D7/D8 gives entitlement by itself: no, income, benefit and contract parameters decide.',
          'After changing supplier, you did not check the first bill: the discount should carry over, but failures happen.',
          'For water, you submitted the request to the electricity supplier instead of the Câmara Municipal or SMAS.'
        ] },
        { kind: 'paragraph', text: 'If you are refused, ask for the reason in writing: “não elegível por potência”, “NIF não validado”, “contrato não doméstico”, “morada não permanente”. The wording usually makes clear what needs to be fixed.' }
      ]
    }
  ],
  sources: [
    {
      title: 'ERSE: Tarifa Social — tariffs and prices',
      url: 'https://www.erse.pt/consumidores-de-energia/eletricidade/tarifa-social/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ERSE: section for citizens on bills and energy',
      url: 'https://www.erse.pt/atividade/consumidores/',
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
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
