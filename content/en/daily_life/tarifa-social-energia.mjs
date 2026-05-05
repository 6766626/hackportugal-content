export default {
  editorialVoice: 'hackportugal',
  id: 'tarifa-social-energia',
  categoryId: 'daily_life',
  title: 'Tarifa Social: social tariff for electricity, gas and water',
  tldr: 'Tarifa Social is an automatic discount for low-income households: electricity −33.8%, natural gas −31.2%, water — according to município rules. It works by matching your NIF with Segurança Social and Autoridade Tributária, so it also suits expats with a Portuguese NIF if the housing contract is in their name and the income/benefit meets the criteria. In 2026, for electricity you need a contrato doméstico for your permanent home and potência up to 6.9 kVA.',
  tags: ['tariff', 'energy', 'water', 'nif'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'What Tarifa Social provides',
      content: [
        { kind: 'paragraph', text: 'Tarifa Social de Energia is not a separate cheap supplier but a regulated discount on your bill. Your electricity or gas supplier applies it after eligibility is confirmed via government databases.' },
        { kind: 'checklist', items: [
          'Electricity: a 33.8% discount on the regulated components of the tariff; your bill will usually show a “Tarifa Social” line.',
          'Natural gas: a 31.2% discount for low-pressure domestic clients with small annual consumption.',
          'Water, sewerage and waste: Tarifa Social da Água depends on the Câmara Municipal / municipal service; the amount and formula vary by município.',
          'The discount applies to your permanent place of residence, not to any second home or tourist flat.',
          'A Portuguese NIF is required for the contract holder with E-REDES/supplier, the gas supplier or municipal water.',
          'Citizenship is not relevant: an expat with a NIF, an address in Portugal and suitable income can obtain the tariff.'
        ] },
        { kind: 'warning', text: 'Tarifa Social does not cancel the entire bill. IVA, potência contratada, taxas, audiovisual contribution and supplier services may remain partly or fully payable.' }
      ]
    },
    {
      id: 'eligibility',
      title: 'Who meets the criteria in 2026',
      content: [
        { kind: 'paragraph', text: 'The main logic: the contract holder must be a “cliente economicamente vulnerável”. Eligibility is checked via the NIF through Segurança Social and Autoridade Tributária. For electricity, the technical conditions of the contract also matter.' },
        { kind: 'checklist', items: [
          'Electricity: contrato doméstico for permanent residence.',
          'Potência contratada for electricity up to and including 6.9 kVA.',
          'The contract holder receives one of the benefits: Complemento Solidário para Idosos, Rendimento Social de Inserção, subsídio social de desemprego, abono de família, pensão social de velhice, pensão social de invalidez or complemento da prestação social para a inclusão.',
          'Alternative for electricity: low annual household income. In 2026 the benchmark is 12 × IAS = €6,445.56 per year, increased for household members without income under the scheme’s rules.',
          'Natural gas: domestic contract, baixa pressão, consumo anual up to 500 m³ and status as an economically vulnerable client.',
          'Water: criteria are set by the município; they often accept the same social benefits or income below a limit linked to IAS.',
          'Arrears with the supplier by themselves should not automatically remove the right to Tarifa Social, but they may hinder switching supplier or concluding a new contract.'
        ] },
        { kind: 'warning', text: 'If the contract is in the name of the landlord, a relative or a former tenant, the automatic matching will not work for you. First transfer the contrato de eletricidade/gás/água to your NIF.' }
      ]
    },
    {
      id: 'automatic',
      title: 'How it is activated automatically',
      content: [
        { kind: 'paragraph', text: 'For electricity and natural gas the regime is designed to be automatic. The supplier periodically sends the NIF of the contract holder for verification, and state systems confirm or deny eligibility without passing details of your benefit or income to the supplier.' },
        { kind: 'checklist', items: [
          'Check that the contrato shows your NIF, not the landlord’s NIF.',
          'Check your morada fiscal in Finanças and the contract address: for a permanent home, discrepancies are best corrected.',
          'Ensure the potência contratada is not above 6.9 kVA if you want the social tariff on electricity.',
          'Check in Segurança Social Direta that the benefit is active and linked to your NIF.',
          'If the basis is income, check your latest IRS declaration or the justified absence of a declaration if you are not yet required to submit one.',
          'Look at the PDF bill: the discount is usually shown as “Tarifa Social”, “Desconto Tarifa Social” or a similar line.',
          'If the discount has appeared, you usually do not need to submit a separate application.'
        ] },
        { kind: 'paragraph', text: 'In practice the first automatic activation may take several billing cycles. If you have just transferred the contract or started receiving a benefit, check the next bill and the one after.' }
      ]
    },
    {
      id: 'manual-request',
      title: 'If the discount did not appear: manual request',
      content: [
        { kind: 'paragraph', text: 'If you are sure that you meet the criteria but there is no discount on the bill, submit a pedido de atribuição da tarifa social to the supplier. You can do this in the customer area, by email, in a store or via support.' },
        { kind: 'checklist', items: [
          'PDF of the latest electricity or gas bill.',
          'NIF of the contract holder.',
          'CPE for electricity or CUI for gas — shown on the bill.',
          'Documento de identificação: residence permit, Cartão de Cidadão or passport.',
          'Proof of permanent address: contrato de arrendamento, atestado de residência or another document, if the supplier asks.',
          'Declaração da Segurança Social regarding the benefit, if the automatic check did not work.',
          'IRS/nota de liquidação or declaração de rendimentos, if the basis is low income.',
          'For water — an application to the Câmara Municipal, SMAS or the municipal water company; each município has its own form.'
        ] },
        { kind: 'warning', text: 'Do not send unnecessary medical or migration documents in a general support chat. For Tarifa Social it is usually sufficient to provide the NIF, the contract, the address and confirmation of the social/income criterion.' }
      ]
    },
    {
      id: 'water',
      title: 'Water: why everything depends on the município',
      content: [
        { kind: 'paragraph', text: 'Tarifa Social da Água is regulated differently from electricity and gas. The state created a framework, but the specific tariff, the level of automation, the list of documents and the amount of the discount are set by the município or entidade gestora: Câmara Municipal, SMAS, EMAR, Águas de Gaia, etc.' },
        { kind: 'checklist', items: [
          'Find on your Câmara Municipal’s website the section “tarifa social da água”, “tarifário social” or “ação social”.',
          'Check whether the benefit covers only água or also saneamento and resíduos urbanos.',
          'Confirm the consumption limit: the discount often applies only to basic m³, and higher consumption is charged at the standard scale.',
          'Check whether the contrato da água must be in your NIF.',
          'If you rent a room and water is included in the rent, obtaining a personal discount is usually not possible.',
          'Some municípios perform an automatic check via AT/Segurança Social, others require an annual application.',
          'When moving to another concelho you need to have eligibility checked again.'
        ] },
        { kind: 'paragraph', text: 'A practical guide: check electricity and gas first with your commercial supplier, and water with the município or municipal company that issues the bill.' }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Common mistakes by expats',
      content: [
        { kind: 'checklist', items: [
          'The electricity contract remains in the landlord’s name: the discount is checked against their NIF, not yours.',
          'You chose potência 10.35 kVA “just in case”: for the social tariff on electricity the limit is 6.9 kVA.',
          'Your morada fiscal in Finanças is still foreign or an old Portuguese address.',
          'The benefit is in the spouse’s name, but the contract is in someone else’s name; the automatic match may not align.',
          'You are expecting a discount on bottled gas: Tarifa Social de Gás Natural applies to piped natural gas, not cylinders.',
          'You think that NHR/IFICI or visa type D7/D8 themselves grant eligibility: no, income, benefits and contract parameters determine it.',
          'After switching supplier you did not check the first bill: the discount should carry over, but glitches occur.',
          'For water you submitted a request to the electricity supplier instead of the Câmara Municipal or SMAS.'
        ] },
        { kind: 'paragraph', text: 'If you are refused, ask for the reason in writing: “não elegível por potência”, “NIF não validado”, “contrato não doméstico”, “morada não permanente”. The wording usually makes it clear what to correct.' }
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
      title: 'ERSE: consumer section on bills and energy',
      url: 'https://www.erse.pt/atividade/consumidores/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Diário da República: Decree-Law 138-A/2010 — Tarifa Social de eletricidade',
      url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/138-a-2010-306111',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Diário da República: Decree-Law 101/2011 — Tarifa Social de gás natural',
      url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/101-2011-671579',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 180
}
