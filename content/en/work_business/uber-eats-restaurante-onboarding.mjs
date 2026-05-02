export default {
  editorialVoice: 'hackportugal',
  id: 'uber-eats-restaurante-onboarding',
  categoryId: 'work_business',
  title: 'Registering a restaurant on Uber Eats / Glovo / Bolt Food',
  tldr: 'Connecting a restaurant to Uber Eats, Glovo or Bolt Food in Portugal is not just a matter of uploading a menu: platforms usually charge comissão 25–30% + IVA, contracts may include promotional discounts, penalties for cancellations and visibility restrictions. By April 2026, a restaurant must have a legal atividade, ASAE/a lightweight HACCP package, Livro de Reclamações, prices with IVA and fiscal documents with QR/ATCUD through certified software, otherwise disputes with the platform can quickly become problems with AT and ASAE.',
  tags: ['restaurant', 'delivery', 'asae', 'atcud'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'before-apps',
      title: '1. Check that the restaurant is legal before onboarding',
      content: [
        { kind: 'paragraph', text: 'Platforms do not accept a “restaurant idea”, but an operating operador económico. Before applying, the NIF/NIPC, name, IBAN, CAE and address of the premises where the food is actually prepared must match. If the kitchen operates from a flat or “dark kitchen” without the correct atividade, there is a risk of account blocking and an ASAE inspection.' },
        { kind: 'checklist', items: [
          'Atividade opened in Finanças: usually CAE 56101 Restaurante tipo tradicional, 56102 Restaurante com lugares ao balcão, 56103 Restaurante sem serviço de mesa or another suitable CAE',
          'Comunicação prévia / licenciamento through Balcão do Empreendedor or Câmara Municipal, if applicable to the premises',
          'NIF/NIPC and the company’s certidão permanente or declaração de início de atividade for empresário em nome individual',
          'Conta bancária with an IBAN in the name of the same titular who signs the contract with the platform',
          'Seguro de acidentes de trabalho for employees and ACT compliance, if there is staff',
          'Sistema HACCP or simplified segurança alimentar procedures: temperatures, limpeza, pragas, fornecedores, rastreabilidade',
          'Physical Livro de Reclamações on the premises and Livro de Reclamações Eletrónico if you sell to/serve consumers',
          'Ementa/preços with IVA included; allergen information under Regulamento (UE) 1169/2011',
          'Fiscal software certified by AT and capable of QR code + ATCUD'
        ] },
        { kind: 'warning', text: 'Do not sign a contract with a platform under “someone else’s NIF” or through a friend’s company. In a dispute, payouts, IVA, IRS/IRC and liability before ASAE will remain with the person whose NIF is stated in the contract.' }
      ]
    },
    {
      id: 'choose-platform',
      title: '2. Compare commission and the hidden economics',
      content: [
        { kind: 'paragraph', text: 'In Portugal, Uber Eats, Glovo and Bolt Food usually operate as a marketplace + logistics. Commission is not set by law: it is given in the commercial offer and contract. For a small restaurant in 2026, a realistic benchmark is 25–30% of the order, sometimes lower for collection or own couriers, sometimes higher with paid visibility, promos and delivery handled by platform.' },
        { kind: 'checklist', items: [
          'Comissão: percentage of food subtotal or of the whole basket — check the calculation base',
          'IVA on the platform commission: a 30% commission + IVA 23% turns into a 36.9% cash impact if IVA is not allowed for in the margin',
          'Who pays for promos: a “-20%” discount is often charged to the restaurant in full or in part',
          'Delivery fee: whether it stays with the platform or affects your payout — check the payout statement',
          'Refunds: who pays for a “missing item”, cold food, courier cancellation and chargeback',
          'Minimum order and packaging fee: whether you can add a separate charge for packaging',
          'Payout timing: daily, weekly or by settlement cycle; how negative balances are handled',
          'Exclusivity: a ban on working with other apps or a price parity requirement',
          'Termination period: notice period, return of tablet/equipment, penalties for early termination'
        ] },
        { kind: 'paragraph', text: 'Calculate the delivery menu separately. A dish priced at €10 in the dining room, with a 30% commission + IVA on the commission, leaves about €6.31 before food cost, packaging, staff and IVA on the sale. Delivery prices are often set 10–20% higher, but check whether the contract prohibits this through price parity.' }
      ]
    },
    {
      id: 'documents-onboarding',
      title: '3. Prepare the package for Uber Eats / Glovo / Bolt Food',
      content: [
        { kind: 'paragraph', text: 'Onboarding usually takes place online: partner form, document verification, commercial offer, contract, menu, tablet/app training and a test order. The timeframe depends heavily on the city and demand: from a few days to 3–4 weeks.' },
        { kind: 'substeps', items: [
          { id: 'legal-docs', title: 'Legal documents', content: [
            { kind: 'checklist', items: [
              'NIF/NIPC of the owner or company',
              'Certidão permanente comercial or código de acesso, if it is a sociedade',
              'Declaração de início de atividade, if you are ENI / recibos verdes',
              'Documento de identificação legal representative',
              'IBAN proof: bank statement or extracto with the titular’s name',
              'Address of the preparation premises and contact person',
              'CAE and type of activity restauração / take-away / catering, if applicable'
            ] }
          ] },
          { id: 'menu-assets', title: 'Menu and operational data', content: [
            { kind: 'checklist', items: [
              'Menu with final prices including IVA',
              'Dish descriptions in PT at minimum; EN is useful in Lisbon, Porto, Algarve',
              'Allergens: gluten, lactose, nuts, eggs, fish, shellfish, etc.',
              'Photos of dishes: without misleading presentation and with the real portion size',
              'Preparation time by category: 10, 20, 30+ minutes',
              'Delivery opening hours separate from the dining room',
              'Switch-off zones when the kitchen is overloaded',
              'Packaging plan: leakproofing, hot/cold separate, order labelling'
            ] }
          ] }
        ] },
        { kind: 'warning', text: 'If the platform sends a contract in English or Spanish, request a Portuguese version or written confirmation of the key terms: commission, IVA, payouts, refunds, exclusividade, termination. In a dispute, the contract wording matters, not what the sales manager said.' }
      ]
    },
    {
      id: 'billing-atcud',
      title: '4. Set up faturação, ATCUD and payout reconciliation',
      content: [
        { kind: 'paragraph', text: 'Since 2023, Portuguese fiscal documents must have a QR code and ATCUD if using series previously reported to Autoridade Tributária. In 2026 this is already a routine check by accountants and AT. Delivery orders do not exempt the restaurant from emissão de fatura/fatura simplificada.' },
        { kind: 'checklist', items: [
          'Use software certificado pela AT: Vendus, Moloni, ZoneSoft, Sage, TOConline, Primavera or another certified product',
          'Report séries à AT before use, so that documents have ATCUD',
          'Set up POS ↔ delivery apps integration or manual daily import of orders',
          'If the customer asks for NIF, the fiscal document must include the customer’s NIF',
          'Separate revenue from food, delivery/packaging fee, refunds, discounts and platform commission',
          'Check who is the seller to the customer: the restaurant or the platform as agent; this affects documents and reconciliação',
          'Keep the platform’s monthly statements, invoices de comissão and proof of payouts',
          'Reconcile IVA: restaurant sales, IVA on the platform commission, reverse charge — only if applicable based on the service provider’s place of registration',
          'Keep a separate report for your accountant for each app: Uber Eats, Glovo, Bolt Food'
        ] },
        { kind: 'paragraph', text: 'Practical control: the amount of fiscal sales for the day ≠ the amount received in the bank, because the platform withholds comissão, refunds and promo contributions. A beginner’s mistake is declaring only the net payout. For AT, the gross sale usually matters, while the commission is an expense with a separate document.' },
        { kind: 'warning', text: 'ATCUD is not an “Uber order number”. It is the unique code of the fiscal document, generated based on the series reported to AT. A screenshot from the platform tablet does not replace a fatura.' }
      ]
    },
    {
      id: 'asae-compliance',
      title: '5. ASAE: what they check in a delivery restaurant',
      content: [
        { kind: 'paragraph', text: 'ASAE checks not only the dining room, but also the cozinha, take-away, dark kitchens, labelling, hygiene and consumer complaints. Delivery increases the risk: the food leaves your control, but responsibility for product safety up to handover to the consumer may still come back to the restaurante/operator.' },
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
          'Prices and promos are not misleading: price, quantity and composição of the dish match reality'
        ] },
        { kind: 'warning', text: 'ASAE may come after a complaint from the app: “food poisoning”, allergen not stated, underweight item, mould, foreign object, absence of Livro de Reclamações. Keep photos/logs of preparation for disputed orders at least until the dispute with the platform is closed.' }
      ]
    },
    {
      id: 'disputes-2026',
      title: '6. Typical 2026 disputes and how to reduce losses',
      content: [
        { kind: 'paragraph', text: 'The most common conflicts are not about registration, but life after launch: sudden refunds, poor ranking, forced promotions, payout delays, quality claims, menu deactivation and disputes over commission. Written discipline is more important than WhatsApp chats with a manager.' },
        { kind: 'checklist', items: [
          'Keep the contract, addenda, emails about commission and promos in a separate folder',
          'For each disputed order, record the order ID, time, package photo, receipt/fatura, employee name',
          'Switch off the app when the kitchen is overloaded: a high cancellation rate worsens visibility',
          'Do not confirm an order if an ingredient is unavailable: a missing item almost always leads to a refund',
          'Check the monthly payout statement before closing the accounting month',
          'Request a credit note if the platform corrects a commission or refund',
          'Do not agree to exclusividade without compensation: lower commission, marketing budget or guaranteed visibility',
          'When the commission changes, require written notice and the effective date',
          'If the platform has withheld a large amount, submit a formal complaint through partner support and then Livro de Reclamações Eletrónico/a lawyer, if applicable'
        ] },
        { kind: 'paragraph', text: 'For a small restaurant, the safe strategy is to start with 1–2 platforms, limit the delivery menu, increase prices to account for the commission, set up ATCUD invoices from day one and reconcile payouts weekly. Connecting all apps at once only makes sense if the kitchen can handle the flow without quality dropping.' }
      ]
    }
  ],
  costs: [
    { label: 'Platform commission for delivery orders', amountEURMin: 25, amountEURMax: 30, note: 'Benchmark as a percentage of the order, not a fixed state fee; commercial terms depend on the city, turnover, logistics and negotiations. IVA 23% is usually added to the commission.' },
    { label: 'Initial setup / photos / equipment', amountEURMin: 0, amountEURMax: 350, note: 'May be free under a promotion or include a tablet, photo shoot, activation. Check the contract and equipment return on termination.' },
    { label: 'Fiscal software with ATCUD', amountEURMin: 10, amountEURMax: 60, note: 'Typical monthly range for a small restaurant; the price depends on the POS, number of terminals and integrations.' },
    { label: 'Livro de Reclamações Eletrónico', amountEUR: 0, note: 'Registration on the official platform is free; the physical book is purchased separately from authorised sellers.' }
  ],
  sources: [
    {
      title: 'ASAE: food safety, fiscalização económica and operators’ obligations',
      url: 'https://www.asae.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Autoridade Tributária: faturação rules, QR Code and ATCUD',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Faturacao/Paginas/default.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei 28/2019: processing invoices and archiving fiscally relevant documents',
      url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/28-2019-119622094',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei 10/2015: RJACSR for comércio, serviços and restauração',
      url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/10-2015-66229840',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
