export default {
  editorialVoice: 'hackportugal',
  id: 'uber-eats-restaurante-onboarding',
  categoryId: 'work_business',
  title: 'Registering a restaurant on Uber Eats / Glovo / Bolt Food',
  tldr: 'Connecting a restaurant to Uber Eats, Glovo or Bolt Food in Portugal is not just a matter of uploading a menu: platforms usually charge comissão of 25–30% + IVA, and contracts may include promotional discounts, cancellation penalties and visibility restrictions. By April 2026, the restaurant must have a legal atividade, ASAE/lite HACCP package, Livro de Reclamações, prices with IVA and tax documents with QR/ATCUD through certified software, otherwise disputes with the platform can quickly turn into problems with AT and ASAE.',
  tags: ['restaurant', 'delivery', 'asae', 'atcud'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'before-apps',
      title: '1. Check that the restaurant is legal before onboarding',
      content: [
        { kind: 'paragraph', text: 'Platforms do not accept a “restaurant idea”, but an operating operador económico. Before applying, the NIF/NIPC, name, IBAN, CAE and the address of the location where the food is actually prepared must match. If the kitchen operates from a flat or a “dark kitchen” without the correct atividade, this creates a risk of account suspension and an ASAE inspection.' },
        { kind: 'checklist', items: [
          'Atividade opened with Finanças: usually CAE 56111 Restaurantes tipo tradicional, 56112 Restaurantes com lugares ao balcão, 56113 Restaurantes sem serviço de mesa (CAE Rev.4 under Decreto-Lei n.º 9/2025, in force since 1 January 2025) or another suitable CAE',
          'Comunicação prévia / licenciamento through Balcão do Empreendedor or Câmara Municipal, if applicable to the premises',
          'NIF/NIPC and certidão permanente of the company or declaração de início de atividade for empresário em nome individual',
          'Conta bancária with IBAN in the name of the same titular who signs the contract with the platform',
          'Seguro de acidentes de trabalho for employees and ACT compliance, if there is staff',
          'Sistema HACCP or simplified segurança alimentar procedures: temperatures, limpeza, pragas, fornecedores, rastreabilidade',
          'Physical Livro de Reclamações on the premises and Livro de Reclamações Eletrónico, if you sell to/serve consumers',
          'Ementa/preços with IVA included; allergen information under Regulamento (UE) 1169/2011',
          'Tax software certified by AT and able to issue QR code + ATCUD'
        ] },
        { kind: 'warning', text: 'Do not sign a contract with a platform using “someone else’s NIF” or through a friend’s company. In a dispute, payouts, IVA, IRS/IRC and liability before ASAE will remain with the person whose NIF is stated in the contract.' }
      ]
    },
    {
      id: 'choose-platform',
      title: '2. Compare commission and the hidden economics',
      content: [
        { kind: 'paragraph', text: 'In Portugal, Uber Eats, Glovo and Bolt Food usually operate as a marketplace + logistics model. Commission is not set by law: it is provided in the commercial proposal and contract. For a small restaurant in 2026, a realistic benchmark is 25–30% of the order, sometimes lower for collection or own couriers, sometimes higher with paid visibility, promos and delivery handled by platform.' },
        { kind: 'checklist', items: [
          'Comissão: percentage of the food subtotal or of the whole basket — check the calculation base',
          'IVA on the platform commission: 30% + 23% IVA = 36.9% only in cash-flow. If your business is VAT-taxable with deduction rights, this IVA is deducted as input VAT (or reverse charge for platforms from abroad) — the economic burden remains 30%, not 36.9%. Check with your TOC',
          'Who pays for promos: a “-20%” discount is often charged to the restaurant in full or in part',
          'Delivery fee: whether it stays with the platform or affects your payout — check the payout statement',
          'Refunds: who pays for a “missing item”, cold food, courier cancellation and chargeback',
          'Minimum order and packaging fee: whether you can add a separate packaging charge',
          'Payout timing: daily, weekly or by settlement cycle; how negative balances are handled',
          'Exclusivity: a ban on working with other apps or a price parity requirement',
          'Termination period: notice period, return of tablet/equipment, early termination penalties'
        ] },
        { kind: 'paragraph', text: 'Calculate the delivery menu separately. A €10 dish in the dining room with a 30% commission in gross cash terms leaves about €7 before food cost, packaging, staff and output VAT on the sale. If you deduct the IVA on the platform commission as input VAT (standard VAT-taxable regime), the economic impact of the commission = 30% (not 36.9%). Delivery prices are often set 10–20% higher, but check whether the contract prohibits this through price parity.' }
      ]
    },
    {
      id: 'documents-onboarding',
      title: '3. Prepare the package for Uber Eats / Glovo / Bolt Food',
      content: [
        { kind: 'paragraph', text: 'Onboarding usually takes place online: partner form, document checks, commercial proposal, contract, menu, tablet/app training and a test order. The timeline depends heavily on the city and demand: from a few days to 3–4 weeks.' },
        { kind: 'substeps', items: [
          { id: 'legal-docs', title: 'Legal documents', content: [
            { kind: 'checklist', items: [
              'NIF/NIPC of the owner or company',
              'Certidão permanente comercial or código de acesso, if it is a sociedade',
              'Declaração de início de atividade, if you are ENI / recibos verdes',
              'Documento de identificação of the legal representative',
              'IBAN proof: bank certificate or extracto with the titular name',
              'Address of the preparation location and contact person',
              'CAE and type of activity restauração / take-away catering, if applicable'
            ] }
          ] },
          { id: 'menu-assets', title: 'Menu and operational details', content: [
            { kind: 'checklist', items: [
              'Menu with final prices including IVA',
              'Dish descriptions at least in PT; EN is useful in Lisbon, Porto, Algarve',
              'Allergens: gluten, lactose, nuts, eggs,, shellfish, etc.',
              'Dish photos: no misleading presentation and with real portion size',
              'Preparation time by category: 10, 20, 30+ minutes',
              'Delivery opening hours separate from the dining room',
              'Shutdown zones for when the kitchen is overloaded',
              'Packaging plan: sealed packaging, hot/cold kept separate, order labelling'
            ] }
          ] }
        ] },
        { kind: 'warning', text: 'If the platform sends the contract in English or Spanish, request the Portuguese version or written confirmation of the key terms: commission, IVA, payouts, refunds, exclusividade, termination. In a dispute, the contract wording matters, not what the sales manager said.' }
      ]
    },
    {
      id: 'billing-atcud',
      title: '4. Set up faturação, ATCUD and payout reconciliation',
      content: [
        { kind: 'paragraph', text: 'Since 2023, Portuguese tax documents must have a QR code and ATCUD, if series previously reported to the Autoridade Tributária are used. In 2026 this is already a routine check by accountants and AT. Delivery orders do not exempt the restaurant from emissão de fatura/fatura simplificada.' },
        { kind: 'checklist', items: [
          'Use software certificado pela AT: Vendus, Moloni, ZoneSoft, Sage, TOConline, Primavera or another certified product',
          'Report séries à AT before using them so that documents have an ATCUD',
          'Set up POS ↔ delivery apps integration or a manual daily import of orders',
          'If the customer requests a NIF, the tax document must include the customer’s NIF',
          'Separate revenue from food, delivery/packaging fee, refunds, discounts and platform commission',
          'Check who is the seller to the customer: the restaurant or the platform as agent; this affects documents and reconciliação',
          'Keep the platform’s monthly statements, invoices de comissão and proof of payouts',
          'Reconcile IVA: restaurant sales, IVA on the platform commission, reverse charge — only if applicable based on the service provider’s place of registration',
          'Keep a separate report for the accountant for each app: Uber Eats, Glovo, Bolt Food'
        ] },
        { kind: 'paragraph', text: 'Practical control: the amount of tax sales for the day ≠ the amount received in the bank, because the platform withholds comissão, refunds and promo contributions. A beginner’s mistake is to declare only the net payout. For AT, the gross sale is usually what matters, while the commission is an expense with a separate document.' },
        { kind: 'warning', text: 'ATCUD is not an “Uber order number”. It is a unique tax document code generated on the basis of the series reported to AT. A screenshot from the platform tablet does not replace a fatura.' }
      ]
    },
    {
      id: 'asae-compliance',
      title: '5. ASAE: what they check in a delivery restaurant',
      content: [
        { kind: 'paragraph', text: 'ASAE checks not only the dining room, but also the cozinha, take-away, dark kitchens, labelling, hygiene and consumer complaints. Delivery increases the risk: food leaves your control, but responsibility for product safety until delivery to the consumer may still return to the restaurante/operator.' },
        { kind: 'checklist', items: [
          'HACCP records: temperaturas frigoríficos, arcas, hot holding, receção de mercadorias',
          'Rastreabilidade fornecedores: invoices, lotes, datas de validade',
          'Separação cru/cozinhado and prevenção de contaminação cruzada',
          'Plano de limpeza and registo de higienização',
          'Controlo de pragas with a contract or internal records',
          'Formação básica de higiene alimentar for staff',
          'Food-grade packaging suitable for hot/greasy food',
          'Allergen information available before purchase in the app and on the packaging/receipt, if needed',
          'Livro de Reclamações and response to reclamação within the deadline',
          'Prices and promo are not misleading: the price, quantity and composição of the dish match reality'
        ] },
        { kind: 'warning', text: 'ASAE may come after a complaint from the app: “food poisoning”, allergen not stated, underweight portion, mould, foreign object, absence of Livro de Reclamações. Keep photos/logs of preparation for disputed orders at least until the dispute with the platform is closed.' }
      ]
    },
    {
      id: 'disputes-2026',
      title: '6. Typical disputes in 2026 and how to reduce losses',
      content: [
        { kind: 'paragraph', text: 'The most common conflicts are not about registration, but about life after launch: sudden refunds, poor ranking, forced campaigns, payout delays, quality claims, menu suspension and disputes over commission. Written discipline matters more than WhatsApp messages with the manager.' },
        { kind: 'checklist', items: [
          'Keep the contract, addenda and emails about commission and promos in a separate folder',
          'For each disputed order, record the order ID, time, package photo, receipt/fatura and employee name',
          'Turn off the app when the kitchen is overloaded: a high cancellation rate worsens visibility',
          'Do not confirm an order if an ingredient is unavailable: a missing item almost always leads to a refund',
          'Check the monthly payout statement before closing the accounting month',
          'Request a credit note if the platform corrects a commission or refund',
          'Do not agree to exclusividade without compensation: lower commission, marketing budget or guaranteed visibility',
          'If the commission changes, require written notice and the effective date',
          'If the platform has withheld a large amount, send a formal complaint through partner support and then Livro de Reclamações Eletrónico/a lawyer, if applicable'
        ] },
        { kind: 'paragraph', text: 'For a small restaurant, the safe strategy is to start with 1–2 platforms, limit the delivery menu, raise prices to account for the commission, set up ATCUD invoices from day one and reconcile payouts weekly. Connecting all apps at once only makes sense if the kitchen can handle the flow without a drop in quality.' }
      ]
    }
  ],
  costs: [
    { label: 'Platform commission for delivery orders (% of the order, NOT euros)', amountEURMin: 0, amountEURMax: 0, note: 'Benchmark 25–30% of the order value (not a fixed amount in euros). IVA at 23% is added to the commission, but for a VAT-taxable restaurant with deduction rights this IVA is in practice deducted as input VAT (or reverse charge applies for a foreign supplier) — do not automatically count the 23% as an additional cost. Commercial terms depend on the city, turnover, logistics and negotiations.' },
    { label: 'Initial setup / photos / equipment', amountEURMin: 0, amountEURMax: 350, note: 'May be free under a promotion or include a tablet, photo shoot, activation. Check the contract and equipment return requirements on termination.' },
    { label: 'Tax software with ATCUD', amountEURMin: 10, amountEURMax: 60, note: 'Typical monthly range for a small restaurant; the price depends on the POS, number of terminals and integrations.' },
    { label: 'Livro de Reclamações Eletrónico', amountEUR: 0, note: 'Registration on the official platform is free; the physical book is purchased separately from authorised sellers.' }
  ],
  sources: [
    {
      title: 'ASAE: food safety, economic inspection and operators’ obligations',
      url: 'https://www.asae.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'gov.pt: Consult the certified invoicing software (AT service to check whether software is certified)',
      url: 'https://www.gov.pt/servicos/consultar-o-programa-de-faturacao-certificado',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-05-30'
    },
    {
      title: 'Portal das Finanças: list of certified invoicing programs',
      url: 'https://www.portaldasfinancas.gov.pt/pt/consultaProgCertificadosM24.action',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-05-30'
    },
    {
      title: 'Autoridade Tributária: FAQ on séries / ATCUD / QR Code (Decreto-Lei 28/2019)',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/questoes_frequentes/Pages/faqs-00883.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-05-30'
    },
    {
      title: 'Decreto-Lei n.º 9/2025: CAE Rev.4 (new CAE classification in force since 1 January 2025)',
      url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/9-2025-905910490',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-05-30'
    },
    {
      title: 'Decreto-Lei 28/2019: processing of invoices and archiving of tax-relevant documents',
      url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/28-2019-119622094',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei 10/2015: RJACSR for commerce, services and restaurants',
      url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/10-2015-66229840',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-30',
  verifyIntervalDays: 90
}
