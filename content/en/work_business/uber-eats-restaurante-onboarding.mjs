export default {
  editorialVoice: 'hackportugal',
  id: 'uber-eats-restaurante-onboarding',
  categoryId: 'work_business',
  title: 'Registering a restaurant on Uber Eats / Glovo / Bolt Food',
  tldr: 'Connecting a restaurant to Uber Eats, Glovo or Bolt Food in Portugal is not just uploading a menu: platforms typically take a 25–30% comissão + IVA, contracts may include promo discounts, penalties for cancellations and visibility restrictions. By April 2026 the restaurant must have a legal atividade, an ASAE/“lazy” HACCP pack, Livro de Reclamações, prices with IVA included and fiscal documents with QR/ATCUD via certified software, otherwise disputes with the platform quickly become problems with AT and ASAE.',
  tags: ['restaurant', 'delivery', 'asae', 'atcud'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'before-apps',
      title: '1. Check the restaurant is legal before onboarding',
      content: [
        { kind: 'paragraph', text: 'Platforms accept not a “restaurant idea”, but an operating operador económico. Before applying, the NIF/NIPC, name, IBAN, CAE and the address of the site where food is actually prepared must match. If the kitchen operates from a flat or a “dark kitchen” without the correct atividade, there is a risk of account blocking and an ASAE inspection.' },
        { kind: 'checklist', items: [
          'Atividade opened in Finanças: usually CAE 56101 Restaurante tipo tradicional, 56102 Restaurante com lugares ao balcão, 56103 Restaurante sem serviço de mesa or another suitable CAE',
          'Comunicação prévia/licenciamento via Balcão do Empreendedor or Câmara Municipal, if applicable to the premises',
          'NIF/NIPC and the company’s certidão permanente or declaração de início de atividade for an empresário em nome individual',
          'Bank account with an IBAN in the name of the same titular who signs the contract with the platform',
          'Seguro de acidentes de trabalho for workers and compliance with ACT, if you have staff',
          'HACCP system or simplified segurança alimentar procedures: temperatures, cleaning, pests, suppliers, traceability',
          'Livro de Reclamações physically on the premises and Livro de Reclamações Eletrónico if you sell/serve consumers',
          'Ementa/preços with IVA included; allergen information per Regulamento (UE) 1169/2011',
          'Fiscal software certified by AT that supports QR code + ATCUD'
        ] },
        { kind: 'warning', text: 'Do not sign a contract with the platform on someone else’s NIF or through a friend’s company. In a dispute, the payout, IVA, IRS/IRC and liability to ASAE remain with the party whose NIF is on the contract.' }
      ]
    },
    {
      id: 'choose-platform',
      title: '2. Compare commission and the hidden economics',
      content: [
        { kind: 'paragraph', text: 'In Portugal, Uber Eats, Glovo and Bolt Food typically operate as a marketplace + logistics. The commission is not set by law: you get it in the commercial offer and the contract. For a small restaurant in 2026 a realistic benchmark is 25–30% of the order, sometimes lower for collection or your own couriers, sometimes higher with paid visibility, promos and delivery handled by the platform.' },
        { kind: 'checklist', items: [
          'Comissão: percentage of the food subtotal or of the entire basket — check the calculation base',
          'IVA on the platform’s commission: a 30% commission + IVA 23% becomes a 36.9% cash impact if IVA is not built into your margin',
          'Who pays for promos: a “-20%” discount is often taken from the restaurant fully or partially',
          'Delivery fee: does it stay with the platform or affect your payout — check the payout statement',
          'Refunds: who pays for “missing item”, cold food, courier cancellation and chargeback',
          'Minimum order and packaging fee: can you add a separate price for packaging',
          'Payout schedule: daily, weekly or by settlement cycle; how negative balances are handled',
          'Exclusivity: a ban on working with other apps or a price parity requirement',
          'Termination: notice period, return of tablet/equipment, penalties for early termination'
        ] },
        { kind: 'paragraph', text: 'Calculate a separate delivery menu. A dish at €10 in the dining room with a 30% commission + IVA on the commission leaves roughly €6.31 before food cost, packaging, staff and IVA on the sale. Delivery prices are often 10–20% higher, but check whether the contract requires price parity.' }
      ]
    },
    {
      id: 'documents-onboarding',
      title: '3. Prepare the pack for Uber Eats / Glovo / Bolt Food',
      content: [
        { kind: 'paragraph', text: 'Onboarding is usually online: partner form, document verification, commercial offer, contract, menu, training on the tablet/app and a test order. The timeframe depends heavily on the city and demand: from a few days to 3–4 weeks.' },
        { kind: 'substeps', items: [
          { id: 'legal-docs', title: 'Legal documents', content: [
            { kind: 'checklist', items: [
              'NIF/NIPC of the owner or the company',
              'Certidão permanente comercial or access code, if it is a sociedade',
              'Declaração de início de atividade, if you are ENI/recibos verdes',
              'Identification document of the legal representative',
              'IBAN proof: a bank letter or statement showing the holder’s name',
              'Address of the preparation site and contact person',
              'CAE and activity type restauração / take-away / catering, if applicable'
            ] }
          ] },
          { id: 'menu-assets', title: 'Menu and operational data', content: [
            { kind: 'checklist', items: [
              'Menu with final prices with IVA included',
              'Dish descriptions in PT at a minimum; EN is useful in Lisbon, Porto, Algarve',
              'Allergens: gluten, lactose, nuts, eggs, fish, shellfish, etc.',
              'Photos of dishes: no misleading plating and with a real portion size',
              'Preparation times by category: 10, 20, 30+ minutes',
              'Delivery opening hours separate from the dining room',
              'Zones to switch off during kitchen overload',
              'Packaging plan: leak-proof, hot/cold separated, order labelling'
            ] }
          ] }
        ] },
        { kind: 'warning', text: 'If the platform sends a contract in English or Spanish, request a Portuguese version or written confirmation of the key terms: commission, IVA, payouts, refunds, exclusividade, termination. In a dispute, the text of the contract matters, not what the sales manager says.' }
      ]
    },
    {
      id: 'billing-atcud',
      title: '4. Set up faturação, ATCUD and payout reconciliation',
      content: [
        { kind: 'paragraph', text: 'Since 2023 Portuguese fiscal documents must have a QR code and ATCUD, if they use séries that were pre-notified to the Autoridade Tributária. In 2026 this is already a routine check for accountants and AT. Delivery orders do not exempt a restaurant from emissão de fatura/fatura simplificada.' },
        { kind: 'checklist', items: [
          'Use software certificado pela AT: Vendus, Moloni, ZoneSoft, Sage, TOConline, Primavera or another certified product',
          'Notify séries to AT before use so documents include an ATCUD',
          'Set up POS ↔ delivery apps integration or a manual daily import of orders',
          'If a customer asks for a NIF, the fiscal document must include the customer’s NIF',
          'Separate revenue from food, delivery/packaging fee, refunds, discounts and platform commission',
          'Check who is the seller in front of the customer: the restaurant or the platform as agent; this affects documents and reconciliation',
          'Keep monthly statements from the platform, invoices de comissão and proof of payouts',
          'Reconcile IVA: restaurant sales, IVA on the platform’s commission, reverse charge — only if applicable to the supplier’s place of establishment',
          'Give your accountant a separate report for each app: Uber Eats, Glovo, Bolt Food'
        ] },
        { kind: 'paragraph', text: 'Practical control: the sum of fiscal sales for the day ≠ the amount credited to the bank, because the platform withholds comissão, refunds and promo contributions. A common beginner mistake is to declare only the net payout. For AT, it is usually the gross sale that matters, and the commission is an expense with a separate document.' },
        { kind: 'warning', text: 'ATCUD is not an “Uber order number”. It is a unique code of the fiscal document, generated based on a série notified to AT. A screenshot from the platform’s tablet does not replace a fatura.' }
      ]
    },
    {
      id: 'asae-compliance',
      title: '5. ASAE: what they check at a delivery restaurant',
      content: [
        { kind: 'paragraph', text: 'ASAE checks not only the dining room, but also the cozinha, take-away, dark kitchens, labelling, hygiene and consumer complaints. Delivery increases risk: food leaves your control, but responsibility for product safety until it reaches the consumer can still come back to the restaurante/operator.' },
        { kind: 'checklist', items: [
          'HACCP records: temperatures of fridges, freezers, hot holding, reception of goods',
          'Supplier traceability: invoices, batches, expiry dates',
          'Separation of raw/cooked and prevention of cross-contamination',
          'Cleaning plan and hygiene records',
          'Pest control with a contract or internal logs',
          'Basic food hygiene training for staff',
          'Food-grade packaging, suitable for hot/fatty foods',
          'Allergen information available before purchase in the app and on the packaging/receipt, if needed',
          'Livro de Reclamações and a timely response to a complaint',
          'Prices and promos are not misleading: price, quantity, and composition of the dish match reality'
        ] },
        { kind: 'warning', text: 'ASAE may come after an in-app complaint: “food poisoning”, undeclared allergen, underweight portion, mould, foreign object, absence of Livro de Reclamações. Keep photos/logs of preparation for disputed orders at least until the dispute with the platform is closed.' }
      ]
    },
    {
      id: 'disputes-2026',
      title: '6. Typical disputes in 2026 and how to reduce losses',
      content: [
        { kind: 'paragraph', text: 'The most frequent conflicts are not registration but life after launch: sudden refunds, poor ranking, forced promos, payout delays, quality claims, menu shutdown and commission disputes. Written discipline matters more than WhatsApp chats with a manager.' },
        { kind: 'checklist', items: [
          'Keep the contract, addenda, and emails about commission and promos in a separate folder',
          'For each disputed order, record the order ID, time, a photo of the bag, the receipt/fatura, and the staff member’s name',
          'Switch the app off when the kitchen is overloaded: a high cancellation rate worsens visibility',
          'Do not confirm an order if an ingredient is missing: a missing item almost always leads to a refund',
          'Check the monthly payout statement before closing the accounting month',
          'Request a credit note if the platform corrects a commission or refund',
          'Do not agree to exclusividade without compensation: lower commission, marketing budget or guaranteed visibility',
          'When the commission changes, demand written notice and an effective date',
          'If the platform has withheld a large amount, submit a formal complaint via partner support and then via Livro de Reclamações Eletrónico/a lawyer, where applicable'
        ] },
        { kind: 'paragraph', text: 'For a small restaurant, a safe strategy is to start with 1–2 platforms, limit the delivery menu, raise prices to cover the commission, set up ATCUD invoicing from day one and reconcile payouts weekly. Connecting all apps at once only makes sense if the kitchen can handle the flow without a drop in quality.' }
      ]
    }
  ],
  costs: [
    { label: 'Platform commission for delivery orders', amountEURMin: 25, amountEURMax: 30, note: 'Benchmark as a percentage of the order, not a fixed government fee; commercial terms depend on the city, turnover, logistics and negotiations. IVA 23% is usually added to the commission.' },
    { label: 'Initial setup / photos / equipment', amountEURMin: 0, amountEURMax: 350, note: 'May be free as a promotion or include a tablet, photoshoot, activation. Check the contract and the return of equipment on termination.' },
    { label: 'Fiscal software with ATCUD', amountEURMin: 10, amountEURMax: 60, note: 'Typical monthly range for a small restaurant; the price depends on the POS, number of terminals and integrations.' },
    { label: 'Livro de Reclamações Eletrónico', amountEUR: 0, note: 'Registration on the official platform is free; the physical book is purchased separately from authorised sellers.' }
  ],
  sources: [
    {
      title: 'ASAE: food safety, economic enforcement and operators’ obligations',
      url: 'https://www.asae.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Autoridade Tributária: invoicing rules, QR Code and ATCUD',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Faturacao/Paginas/certificacao-de-software.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei 28/2019: processing of invoices and archiving of fiscally relevant documents',
      url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/28-2019-119622094',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei 10/2015: RJACSR for commerce, services and catering',
      url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/10-2015-66229840',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
