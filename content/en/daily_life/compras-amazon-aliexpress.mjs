export default {
  editorialVoice: 'hackportugal',
  id: 'compras-amazon-aliexpress',
  categoryId: 'daily_life',
  title: 'Amazon ES/PT, AliExpress and eBay in Portugal: delivery, IVA and duties',
  tldr: 'For Portugal, the most predictable option is Amazon.es: delivery from EU warehouses usually takes 2–5 working days, with no customs or duties. Amazon PT is convenient for its interface/local deals, but the catalogue is smaller. AliExpress is cheap, often with IVA included in the price via IOSS, but delivery from China can take 3–8 weeks.\n\nSince 01/07/2021, commercial parcels from outside the EU have been subject to IVA: in mainland Portugal the standard rate is 23%; above €150, a customs declaration, possible duty and CTT/courier fees are added.',
  tags: ['amazon', 'aliexpress', 'ctt', 'duties'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'platforms',
      title: 'Where to buy without surprises',
      content: [
        { kind: 'paragraph', text: 'The main rule: if the item is shipped from a warehouse inside the EU and the seller processes the sale as an EU sale, there is no customs clearance in Portugal. You pay the price with IVA at the time of purchase, and the courier simply delivers the parcel.' },
        { kind: 'checklist', items: [
          'Amazon.es — usually the best balance of price, range and delivery to Portugal mainland; many items arrive in 2–5 working days.',
          'Amazon PT / the Portuguese Amazon storefront — more convenient for language and local selections, but the catalogue is smaller, and some items still come via Amazon.es or other EU sellers.',
          'AliExpress — check the “VAT included” / “IVA incluído” line. For orders up to €150, this often means IOSS: IVA has already been collected by the platform.',
          'eBay — the riskiest for customs: many sellers are from the UK, US, China and private individuals; check “Item location” and “Import charges” in advance.',
          'AliExpress/eBay EU warehouses — Spain, France, Germany, Poland, Czechia — usually mean no customs clearance if the item is genuinely shipped from there.',
          'The UK after Brexit is not in the EU. An order from the United Kingdom to Portugal is treated as an import, just like from the US or China.',
          'Madeira and Açores have their own tax specificities and logistics; delivery times and rates may differ from mainland Portugal.'
        ] }
      ]
    },
    {
      id: 'tax-rules',
      title: 'IVA and customs in 2026: the €150 threshold',
      content: [
        { kind: 'paragraph', text: 'Since 01/07/2021, the EU has abolished the IVA exemption for small imported parcels. Therefore, commercial goods from outside the EU are subject to IVA regardless of price. For mainland Portugal, the standard IVA rate is 23%.' },
        { kind: 'checklist', items: [
          '€0–€150: customs duty is usually not charged, but 23% IVA applies. If the shop uses IOSS, IVA is paid at purchase.',
          'Above €150: IOSS does not apply; an import customs declaration is required, 23% IVA is charged and customs duty may apply according to the commodity code.',
          'The €150 duty threshold is calculated on the intrinsic value of the goods: usually the price of the item excluding delivery and insurance.',
          'The IVA base is broader: item value + delivery + insurance + duties + customs/postal fees, if they are included in the import tax base.',
          'Gifts from one private individual to another have a separate €45 limit, but marketplace purchases do not qualify for this.',
          'If the seller writes “gift” on a commercial order, this does not cancel IVA and may trigger an inspection.',
          'Alcohol, tobacco, perfume, batteries, medicines, food supplements, drones and radio devices may be subject to restrictions or require additional documents.'
        ] },
        { kind: 'warning', text: 'Do not rely on old advice saying “under €22 tax-free”. This rule was abolished in the EU on 01/07/2021. In 2026, CTT and couriers may still request IVA and a clearance fee if the platform has not transmitted the IOSS data correctly.' }
      ]
    },
    {
      id: 'ctt-clearance',
      title: 'How CTT desalfandegamento works',
      content: [
        { kind: 'paragraph', text: 'If a parcel from outside the EU arrives by regular post, it is almost always handled by CTT. The status may change to “A aguardar procedimentos declarativos” or “Desalfandegamento”. You then need to go to the CTT portal, confirm the details and pay the charges.' },
        { kind: 'checklist', items: [
          'Open tracking on ctt.pt and check whether “desalfandegar” is required.',
          'Prepare an invoice/recibo: a screenshot of the order showing the item price, delivery, currency and recipient’s name.',
          'If IVA has already been paid on AliExpress/eBay/Amazon, attach confirmation of “VAT included” or an invoice with IOSS/VAT.',
          'Check the NIF and address: the name on the order should match the documents or at least be clearly connected to the recipient.',
          'Pay the IVA, any duty and the CTT serviço de apresentação/desalfandegamento online.',
          'After payment, the parcel is usually released and sent for delivery; in peak periods the delay may be 3–10 working days.',
          'If you do not provide the documents in time, the parcel may be returned to the sender.'
        ] },
        { kind: 'warning', text: 'CTT does not “invent the tax”: it collects amounts under the import rules of Autoridade Tributária e Aduaneira. But mistakes do happen — especially when the shop has collected IVA via IOSS, but the IOSS number has not been included in the postal data. In that case, submit the invoice and dispute it through the CTT portal before paying, if the system allows it.' }
      ]
    },
    {
      id: 'marketplace-tactics',
      title: 'Practical tips for Amazon, AliExpress and eBay',
      content: [
        { kind: 'substeps', items: [
          {
            id: 'amazon',
            title: 'Amazon ES/PT',
            content: [
              { kind: 'paragraph', text: 'For household appliances, books, cables, home goods and children’s items, Amazon.es is usually the easiest option: the price already includes IVA, delivery is within the EU, and returns are clear. Check “Sold by” and “Dispatches from”: if dispatch is from Amazon/EU, there is no customs clearance.' },
              { kind: 'checklist', items: [
                'Compare Amazon.es and Amazon PT: the local storefront may show fewer items.',
                'For urgent purchases, filter by Prime/fast delivery to Portugal.',
                'Check whether the item can be delivered to your código postal: large appliances and batteries may have restrictions.',
                'Returns with Amazon are usually simpler than with AliExpress/eBay, especially if the seller is Amazon or an EU business seller.',
                'Do not confuse the item price with delivery cost: sometimes a cheap item with expensive delivery loses out to a local shop.'
              ] }
            ]
          },
          {
            id: 'aliexpress',
            title: 'AliExpress',
            content: [
              { kind: 'paragraph', text: 'AliExpress is good for small items: cases, cables, spare parts, hobby goods. Economy delivery from China is often free, but the real delivery time is 3–8 weeks. AliExpress Choice and EU warehouse can be faster — sometimes 7–15 days.' },
              { kind: 'checklist', items: [
                'For orders up to €150, look for “IVA incluído” / “VAT included”.',
                'Do not combine many items into one order above €150 if you want to avoid a full import declaration.',
                'Choose sellers with tracking, not only Cainiao Super Economy without detailed tracking.',
                'For electronics, check CE marking, EU plug and genuine reviews with photos.',
                'If you need the item by a specific date, AliExpress is a poor option.'
              ] }
            ]
          },
          {
            id: 'ebay',
            title: 'eBay',
            content: [
              { kind: 'paragraph', text: 'On eBay, the main risk is the shipping country and the seller’s status. The same item from Germany will arrive without customs clearance, while from the UK/US it will require IVA, possible duty and brokerage fees.' },
              { kind: 'checklist', items: [
                'Filter by “Item location: European Union” if you do not want an import.',
                'Check whether eBay includes “VAT” or “Import charges” at checkout.',
                'With private sellers, the invoice may be weak — CTT will still ask for proof of PayPal/card payment.',
                'For second-hand electronics from outside the EU, IVA is often charged on the price actually paid + delivery.',
                'Calculate expensive purchases above €150 in advance: sometimes it is better to buy in the EU at a higher price, but without customs hassle.'
              ] }
            ]
          }
        ] }
      ]
    },
    {
      id: 'how-to-estimate',
      title: 'How to estimate the final price quickly',
      content: [
        { kind: 'paragraph', text: 'Before buying from outside the EU, calculate not the “price on the website” but the landed cost — how much the item will cost after IVA, duty and clearance.' },
        { kind: 'checklist', items: [
          'If the item is from the EU: final cost ≈ item price + delivery. No customs clearance.',
          'If the item is from China/US/UK up to €150 and IVA is included: final cost ≈ checkout price; the only risk is an IOSS error or delay.',
          'If the item is up to €150 and IVA is not included: add 23% IVA on the item/delivery and the CTT/courier fee.',
          'If the item is above €150: add 23% IVA, possible duty by product category and the brokerage fee.',
          'For DHL/UPS/FedEx couriers, brokerage fees are often higher than with CTT; however, clearance is faster.',
          'For heavy items, delivery is included in the IVA base, so the tax can be noticeably higher than expected.',
          'If the difference from an EU shop is less than €15–€25, it is usually better to buy in the EU: faster, easier returns, less risk.'
        ] },
        { kind: 'warning', text: 'Do not ask the seller to undervalue the item. If CTT/Alfândega requests a card or PayPal statement, the tax will be recalculated based on the real payment; if there is suspicion, delays, penalties or return of the parcel are possible.' }
      ]
    }
  ],
  costs: [
    { label: 'IVA on imports into mainland Portugal', amountEURMin: 0, amountEURMax: 0, note: 'Rate of 23% on the taxable base; the amount depends on the item price, delivery, duty and fees.' },
    { label: 'Threshold for simplified IOSS', amountEUR: 150, note: 'Up to €150, the marketplace can collect IVA at checkout; above €150, a standard import declaration is required.' },
    { label: 'Standard Amazon.es delivery to Portugal mainland', amountEURMin: 0, amountEURMax: 8, note: 'Depends on Prime, order value, seller and item; typical delivery time is 2–5 working days.' },
    { label: 'AliExpress economy delivery from China', amountEURMin: 0, amountEURMax: 5, note: 'Often free or cheap; typical delivery time is 3–8 weeks, faster with Choice/EU warehouse.' },
    { label: 'Import clearance by CTT/courier', amountEURMin: 2, amountEURMax: 30, note: 'Depends on value, shipment type and operator; check the current tariff on ctt.pt before paying.' }
  ],
  sources: [
    {
      title: 'Portal das Finanças: customs information and import rules',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_ao_contribuinte/Cidadaos/Compras/Encomendas_postais/Encomendas_Postais_Comercio_Eletronico/Paginas/default.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças: IVA and taxas em vigor',
      url: 'https://pauta.portaldasfinancas.gov.pt/pt/faqs/Pages/importacoes-via-internet-impostos.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'CTT: clearing parcels through customs',
      url: 'https://www.ctt.pt/empresas/encomendas-e-correio/receber/desalfandegar-encomendas/index/desalfandegar-encomendas',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'CTT: receiving international parcels and desalfandegamento costs',
      url: 'https://www.ctt.pt/empresas/encomendas-e-correio/receber/desalfandegar-encomendas/index',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
