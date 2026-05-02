export default {
  editorialVoice: 'hackportugal',
  id: 'online-supermercado-entrega',
  categoryId: 'food_leisure',
  title: 'Grocery delivery to your home: Continente Online, Auchan, El Corte Inglés, Pingo Doce',
  tldr: 'In 2026, grocery delivery in Portugal works reasonably well in Lisboa, Porto and the suburbs, but coverage depends heavily on the postcode. Continente Online usually charges around €3–7 per slot, Auchan and Pingo Doce show the price after you enter your address, and El Corte Inglés Supermercado/Express is convenient in central Lisboa and can deliver part of its range in around 1 hour. For urgent shopping, use Glovo Mercado and Bolt Market, but prices and mark-ups are higher.',
  tags: ['supermarket', 'delivery', 'continente', 'glovo'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'coverage-first',
      title: '1. Check address coverage first',
      content: [
        { kind: 'paragraph', text: 'Portugal does not have a single “national” grocery delivery system. The same brand may deliver in Lisboa, Porto, Cascais, Oeiras, Matosinhos or Gaia, but not in a neighbouring concelho. The check always starts with the código postal.' },
        { kind: 'checklist', items: [
          'Enter the full address and código postal on the supermercado website or in the app.',
          'Check not only home delivery, but also Click & Collect / levantamento em loja.',
          'Look at the nearest slots: in the evening and before holidays they run out quickly.',
          'Check the minimum basket: it differs between chains and areas.',
          'Compare the final total, not only product prices: delivery, service fee, bags, promos and substitutions affect the bill.',
          'If you live in a prédio without a lift, state the floor and intercom code in advance.',
          'For a gated condominium, add courier instructions in Portuguese or English.'
        ] }
      ]
    },
    {
      id: 'main-supermarkets',
      title: '2. Main chains: what to choose',
      content: [
        { kind: 'substeps', items: [
          { id: 'continente', title: 'Continente Online', content: [
            { kind: 'paragraph', text: 'The most versatile option for a large shop. Good selection, frequent promoções, the Continente card, delivery in many areas of Lisboa/Porto and other cities. A typical delivery charge in 2026 is around €3–7 depending on the slot, address and campaigns.' },
            { kind: 'checklist', items: [
              'Suitable for a weekly shop.',
              'Convenient for buying water, household products, baby items and Continente products.',
              'You can allow or refuse substituições — replacements for unavailable products.',
              'It is best to check prices and promos on the day of ordering: offers change often.',
              'Clube/Cartão Continente may provide coupons, saldo em cartão and Galp fuel discounts under separate campaigns.'
            ] }
          ] },
          { id: 'auchan', title: 'Auchan', content: [
            { kind: 'paragraph', text: 'Good for a hypermarket range: groceries, wine, home appliances, pet products, organic and international items. Delivery and collection depend on the specific código postal and the nearest Auchan.' }
          ] },
          { id: 'el-corte-ingles', title: 'El Corte Inglés Supermercado / Express', content: [
            { kind: 'paragraph', text: 'A premium option, especially in Lisboa. In central Lisboa, the Express service can be convenient for fast delivery in around 1 hour if the address is within the coverage area. Prices are often higher, but there is a good selection of delicatessen, imported goods, meat, fish, wine and ready meals.' }
          ] },
          { id: 'pingo-doce', title: 'Pingo Doce', content: [
            { kind: 'paragraph', text: 'Pingo Doce is convenient for a familiar everyday basket and is often competitive on price. Online delivery is not available everywhere: check the loja online / app by address. In some areas, part of the range may be available through partner platforms such as Glovo.' }
          ] }
        ] }
      ]
    },
    {
      id: 'fast-delivery',
      title: '3. Urgent delivery: Glovo Mercado and Bolt Market',
      content: [
        { kind: 'paragraph', text: 'If you need “milk, eggs, coffee and pet food now”, Glovo Mercado, Bolt Market or supermarkets inside Glovo are often faster. This is not a replacement for a big weekly shop: the range is smaller, prices may be higher, and there is also a delivery fee, service fee and sometimes a small order fee.' },
        { kind: 'checklist', items: [
          'Glovo is convenient in Lisboa, Porto, Braga, Coimbra, Faro and tourist areas, but coverage is neighbourhood-specific.',
          'Bolt Market works like a dark store: fast, but with a limited range.',
          'Check the total before payment: fees appear on the final screen.',
          'For urgent delivery, choose items without complicated substitutions: milk, bread, eggs, snacks, household products.',
          'For fresh fish, meat and vegetables, a large supermercado with proper picking and slots is better.',
          'In the rain, on Friday evening and on holidays, delivery time and price can increase sharply.'
        ] },
        { kind: 'warning', text: 'Do not compare the product price in Glovo/Bolt directly with the shelf price in the shop: the platform may have separate prices, fees and promo codes. A final basket of €30 can easily become €35–40.' }
      ]
    },
    {
      id: 'ordering-tips',
      title: '4. How to place an order without surprises',
      content: [
        { kind: 'checklist', items: [
          'Create an account in advance, and add your NIF only if you need an invoice-fatura for IRS or a company.',
          'Write the address in Portuguese format: Rua/Avenida, número, andar, lado, código postal, cidade.',
          'In the comment, add: “Tocar à campainha”, “Deixar na portaria” or “Ligar antes de chegar”.',
          'For alcohol, the courier may ask for ID, especially if you look under 25.',
          'Indicate whether you need sacos. Bags are usually paid for, even if the amount is small.',
          'Check the substitution rules: “substituir por produto semelhante” or “não substituir”.',
          'After delivery, check the receipt and missing items straight away: a refund is easier to request on the same day.',
          'Keep the email with the encomenda and fatura/recibo until the order is closed.'
        ] },
        { kind: 'paragraph', text: 'Payment is usually by Visa/Mastercard, MB WAY, and sometimes PayPal or Multibanco. International cards may be declined because of 3-D Secure; a Portuguese card or MB WAY is often more stable.' }
      ]
    },
    {
      id: 'fresh-products',
      title: '5. Fresh products and substitutions',
      content: [
        { kind: 'paragraph', text: 'The main problem with online supermarkets is not delivery, but the selection of fresh products. A picker chooses vegetables, fruit, meat and fish for you. In good chains this works reasonably well, but quality depends on the shop, shift and order time.' },
        { kind: 'checklist', items: [
          'Vegetables and fruit where exact ripeness matters are better bought offline at a mercado municipal or frutaria.',
          'For meat and fish, specify the weight range and preferences if the comment field is available.',
          'Check dairy products by their expiry date when receiving them.',
          'Order frozen products for a slot when you are definitely at home.',
          'If an item arrives damaged, photograph the packaging and etiqueta on the day of delivery.',
          'When ordering a large amount of water, check whether couriers bring it up to the flat or leave it at the entrance — rules depend on the service.'
        ] },
        { kind: 'warning', text: 'In Portugal, couriers and pickers are not obliged to call about every missing item. If substitutions are critical because of allergies, baby food or diet, it is better to refuse substituições.' }
      ]
    },
    {
      id: 'best-strategy',
      title: '6. A practical setup for an expat',
      content: [
        { kind: 'paragraph', text: 'The optimal setup in 2026: one large order once a week via Continente/Auchan/Pingo Doce, premium or imported goods via El Corte Inglés, and urgent small items via Glovo or Bolt Market. After 2–3 orders, it will become clear which chain best covers your exact address.' },
        { kind: 'checklist', items: [
          'For a family: Continente Online or Auchan with a large slot and delivery at €3–7 / according to the address tariff.',
          'For central Lisboa: El Corte Inglés Express for fast, high-quality shopping.',
          'For a studio or one person: Glovo/Bolt for urgent items, offline supermercado for basics.',
          'To save money: compare promoções and buy heavy items online, fresh items near home.',
          'For new areas after moving: test 2–3 services during the first two weeks; do not place a huge first order.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Continente Online — delivery', amountEURMin: 3, amountEURMax: 7, note: 'Typical range by slots and areas; the exact price is shown after the address and before payment.' },
    { label: 'El Corte Inglés Express', amountEURMin: 0, amountEURMax: 8, note: 'Cost and minimum basket depend on the address, slot and campaigns; in central Lisboa, fast delivery in around 1 hour may be possible.' },
    { label: 'Glovo / Bolt Market', amountEURMin: 1.99, amountEURMax: 6.99, note: 'There is usually a delivery fee and service fee; with a small basket, a small order fee may apply.' }
  ],
  sources: [
    { title: 'Continente Online — official grocery ordering website', url: 'https://www.continente.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'El Corte Inglés Portugal — supermercado and delivery', url: 'https://www.elcorteingles.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Auchan Portugal — loja online and delivery', url: 'https://www.auchan.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Pingo Doce — loja online and services', url: 'https://www.pingodoce.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
