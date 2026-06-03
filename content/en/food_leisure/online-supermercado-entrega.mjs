export default {
  editorialVoice: 'hackportugal',
  id: 'online-supermercado-entrega',
  categoryId: 'food_leisure',
  title: 'Grocery delivery to your door: Continente Online, Auchan, El Corte Inglés, Pingo Doce',
  tldr: 'In 2026, grocery delivery in Portugal works reasonably well in Lisboa, Porto and the suburbs, but coverage depends heavily on your postcode. Continente Online usually charges around €3–7 per slot, Auchan and Pingo Doce show the price after you enter your address, and El Corte Inglés Supermercado/Express is convenient in central Lisboa and can deliver part of its range in about 1 hour. For urgent shopping, use Glovo Mercado and Bolt Market, but prices and mark-ups are higher.',
  tags: ['supermarket', 'delivery', 'continente', 'glovo'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'coverage-first',
      title: '1. Check address coverage first',
      content: [
        { kind: 'paragraph', text: 'Portugal does not have a single “national” grocery delivery service. The same brand may deliver in Lisboa, Porto, Cascais, Oeiras, Matosinhos or Gaia, but not deliver in the neighbouring concelho. Always start by checking the código postal.' },
        { kind: 'checklist', items: [
          'Enter the full address and código postal on the supermercado website or in the app.',
          'Check not only home delivery, but also Click & Collect / levantamento em loja.',
          'Look at the nearest slots: in the evening and before holidays they run out quickly.',
          'Check the minimum basket: it varies between chains and areas.',
          'Compare the final total, not only product prices: delivery, service fee, bags, promotions and substitutions affect the bill.',
          'If you live in a prédio without a lift, specify the floor and entry-phone code in advance.',
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
            { kind: 'paragraph', text: 'The most universal option for a large shop. Good selection, frequent promoções, the Continente card, delivery in many Lisboa/Porto areas and other cities. A typical delivery fee in 2026 is around €3–7 depending on the slot, address and campaigns.' },
            { kind: 'checklist', items: [
              'Suitable for a weekly shop.',
              'Convenient for buying water, household cleaning products, children’s items and Continente products.',
              'You can allow or block substituições — replacements for out-of-stock items.',
              'It is better to check prices and promos on the day you order: offers change frequently.',
              'Club/Cartão Continente may provide coupons, saldo em cartão and Galp fuel discounts under separate campaigns.'
            ] }
          ] },
          { id: 'auchan', title: 'Auchan', content: [
            { kind: 'paragraph', text: 'Good for a hypermarket range: groceries, wine, home appliances, pet products, organic and international items. Delivery and collection depend on the specific código postal and the nearest Auchan.' }
          ] },
          { id: 'el-corte-ingles', title: 'El Corte Inglés Supermercado / Express', content: [
            { kind: 'paragraph', text: 'A premium option, especially in Lisboa.\n\nIn central Lisboa, the Express service can be convenient for quick delivery in about 1 hour if the address is within the coverage area.\n\nPrices are often higher, but there is a good selection of delicatessen, imported products, meat, fish, wine and ready-made food.' }
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
        { kind: 'paragraph', text: 'If you need “milk, eggs, coffee and pet food now”, Glovo Mercado, Bolt Market or supermarkets inside Glovo are often faster. This is not a replacement for a large weekly shop: the range is smaller, prices may be higher, and there is also a delivery fee, service fee and sometimes a small order fee.' },
        { kind: 'checklist', items: [
          'Glovo is convenient in Lisboa, Porto, Braga, Coimbra, Faro and tourist areas, but coverage is neighbourhood-by-neighbourhood.',
          'Bolt Market works like a dark store: fast, but with a limited range.',
          'Check the total before paying: fees appear on the final screen.',
          'For urgent delivery, choose products without complicated substitutions: milk, bread, eggs, snacks and household cleaning products.',
          'For fresh fish, meat and vegetables, a large supermercado with proper picking and slots is better.',
          'In the rain, on Friday evenings and on holidays, delivery time and price can rise sharply.'
        ] },
        { kind: 'warning', text: 'Do not compare the price of an item in Glovo/Bolt directly with the shelf price in store: the platform may have separate prices, fees and promo codes. A final basket of €30 can easily become €35–40.' }
      ]
    },
    {
      id: 'ordering-tips',
      title: '4. How to place an order without surprises',
      content: [
        { kind: 'checklist', items: [
          'Create an account in advance, and add your NIF only if you need an invoice-fatura for IRS or a company.',
          'Write the address in Portuguese format: Rua/Avenida, número, andar, lado, código postal, cidade.',
          'In the comments, add: “Tocar à campainha”, “Deixar na portaria” or “Ligar antes de chegar”.',
          'For alcohol, the courier may ask for ID, especially if you look under 25.',
          'Mark whether you need sacos. Bags are usually paid, even if the amount is small.',
          'Check the substitution rules: “substituir por produto semelhante” or “não substituir”.',
          'After delivery, check the receipt and missing items immediately: it is easier to request a refund on the same day.',
          'Keep the email with the encomenda and fatura/recibo until the order is closed.'
        ] },
        { kind: 'paragraph', text: 'Payment is usually by Visa/Mastercard, MB WAY, and sometimes PayPal or Multibanco. International cards are sometimes declined because of 3-D Secure; a Portuguese card or MB WAY is often more reliable.' }
      ]
    },
    {
      id: 'fresh-products',
      title: '5. Fresh products and substitutions',
      content: [
        { kind: 'paragraph', text: 'The main problem with online supermarkets is not delivery, but the selection of fresh products. The picker chooses vegetables, fruit, meat and fish on your behalf. In good chains this works reasonably well, but the quality depends on the store, shift and order time.' },
        { kind: 'checklist', items: [
          'Vegetables and fruit where exact ripeness matters are better bought offline at a mercado municipal or in a frutaria.',
          'For meat and fish, specify the weight range and preferences if a comments field is available.',
          'Check dairy products by expiry date when you receive them.',
          'Order frozen products for a slot when you will definitely be at home.',
          'If an item arrives damaged, photograph the packaging and etiqueta on the delivery day.',
          'For a large water order, check whether couriers bring it up to the flat or leave it at the entrance — rules depend on the service.'
        ] },
        { kind: 'warning', text: 'In Portugal, couriers and pickers are not obliged to call about every out-of-stock item. If substitutions are critical because of allergies, baby food or a diet, it is better to block substituições.' }
      ]
    },
    {
      id: 'best-strategy',
      title: '6. A practical setup for an expat',
      content: [
        { kind: 'paragraph', text: 'The best setup in 2026: one large order once a week via Continente/Auchan/Pingo Doce, premium or imported products via El Corte Inglés, and urgent small items via Glovo or Bolt Market. After 2–3 orders, it will become clear which chain covers your exact address best.' },
        { kind: 'checklist', items: [
          'For a family: Continente Online or Auchan with a large slot and delivery at €3–7 / according to the address tariff.',
          'For central Lisboa: El Corte Inglés Express for fast, high-quality shopping.',
          'For a studio or one person: Glovo/Bolt for urgent items, an offline supermercado for basics.',
          'To save money: compare promoções and buy heavy items online, fresh items near home.',
          'For new areas after moving: test 2–3 services during the first two weeks, and do not place a huge first order.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Continente Online — delivery', amountEURMin: 3, amountEURMax: 7, note: 'Typical range by slots and areas; the exact price is shown after entering the address and before payment.' },
    { label: 'El Corte Inglés Express', amountEURMin: 0, amountEURMax: 8, note: 'Cost and minimum basket depend on the address, slot and campaigns; in central Lisboa, fast delivery in about 1 hour may be available.' },
    { label: 'Glovo / Bolt Market', amountEURMin: 1.99, amountEURMax: 6.99, note: 'There is usually a delivery fee and service fee; for a small basket, a small order fee may apply.' }
  ],
  sources: [
    { title: 'Continente Online — official grocery ordering website', url: 'https://www.continente.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'El Corte Inglés Portugal — supermarket and delivery', url: 'https://www.elcorteingles.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Auchan Portugal — loja online and delivery', url: 'https://www.auchan.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Pingo Doce — loja online and services', url: 'https://www.pingodoce.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
