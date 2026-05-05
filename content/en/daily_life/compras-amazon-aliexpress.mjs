export default {
  editorialVoice: 'hackportugal',
  id: 'compras-amazon-aliexpress',
  categoryId: 'daily_life',
  title: 'Amazon ES/PT, AliExpress and eBay in Portugal: delivery, IVA and customs duties',
  tldr: 'For Portugal the most predictable option is Amazon.es: delivery from EU warehouses is usually 2–5 working days, with no customs or duties. Amazon PT is convenient for its interface/local deals, but the catalogue is smaller. AliExpress is cheap, often with IVA in the price via IOSS, but shipping from China can take 3–8 weeks. Since 01.07.2021 commercial parcels from outside the EU are subject to IVA: in mainland Portugal the standard rate is 23%; over €150 an import customs declaration, possible duty and CTT/courier fees are added.',
  tags: ['amazon', 'aliexpress', 'ctt', 'customs'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'platforms',
      title: 'Where to buy without surprises',
      content: [
        { kind: 'paragraph', text: 'The main rule: if the item ships from a warehouse within the EU and the seller treats the sale as an EU sale, there is no customs in Portugal. You pay the price with IVA at purchase, and the courier simply delivers the parcel.' },
        { kind: 'checklist', items: [
          'Amazon.es — usually the best balance of price, range and delivery to mainland Portugal; many items arrive in 2–5 working days.',
          'Amazon PT / the Portuguese Amazon storefront — more convenient for language and local picks, but the catalogue is smaller, and some items are still routed via Amazon.es or other EU sellers.',
          'AliExpress — check the line “VAT included” / “IVA incluído”. For orders up to €150 this often means IOSS: IVA already collected by the platform.',
          'eBay — the riskiest for customs: many sellers from the UK, US, China and private individuals; check “Item location” and “Import charges” in advance.',
          'EU warehouses on AliExpress/eBay — Spain, France, Germany, Poland, Czechia — usually no customs, if the item is actually dispatched from there.',
          'The UK after Brexit is not the EU. An order from the United Kingdom to Portugal is treated as an import, like from the US or China.',
          'Madeira and Açores have their own tax specifics and logistics; timeframes and rates may differ from mainland Portugal.'
        ] }
      ]
    },
    {
      id: 'tax-rules',
      title: 'IVA and customs in 2026: €150 threshold',
      content: [
        { kind: 'paragraph', text: 'Since 01.07.2021 the EU abolished the IVA exemption for small imported parcels. Therefore commercial goods from outside the EU are subject to IVA regardless of price. For mainland Portugal the standard IVA rate is 23%.' },
        { kind: 'checklist', items: [
          '€0–€150: customs duty is usually not charged, but 23% IVA applies. If the shop uses IOSS, IVA is paid at checkout.',
          'Over €150: IOSS does not apply; an import customs declaration is required, 23% IVA is charged and a customs duty may apply by tariff code.',
          'The €150 duty threshold is calculated on the intrinsic value of the goods: usually the item price without shipping and insurance.',
          'The IVA base is broader: item value + shipping + insurance + duties + customs/postal fees, if they are included in the import base.',
          'Gifts from a private individual to a private individual have a separate €45 limit, but marketplace purchases do not qualify.',
          'If a seller writes “gift” on a commercial order, that does not cancel IVA and may trigger a check.',
          'Alcohol, tobacco, perfumes, batteries, medicines, food supplements, drones and radio devices may have restrictions or require additional documents.'
        ] },
        { kind: 'warning', text: 'Do not rely on old advice “up to €22 tax-free”. This rule was abolished in the EU on 01.07.2021. In 2026 CTT and couriers may still request IVA and a processing fee if the platform did not transmit IOSS data correctly.' }
      ]
    },
    {
      id: 'ctt-clearance',
      title: 'How CTT desalfandegamento works',
      content: [
        { kind: 'paragraph', text: 'If a parcel from outside the EU arrives by regular post, it is almost always handled by CTT. The status may change to “A aguardar procedimentos declarativos” or “Desalfandegamento”. Then you need to go to the CTT portal, confirm the data and pay the charges.' },
        { kind: 'checklist', items: [
          'Open the tracking on ctt.pt and check whether you need to “desalfandegar”.',
          'Prepare an invoice/receipt: an order screenshot showing item price, shipping, currency and the recipient’s name.',
          'If IVA was already paid on AliExpress/eBay/Amazon, attach confirmation “VAT included” or an invoice with IOSS/VAT.',
          'Check your NIF and address: the name on the order should match your documents or at least be clearly linked to the recipient.',
          'Pay IVA, any possible duty and the CTT serviço de apresentação/desalfandegamento online.',
          'After payment the parcel is usually released and sent out for delivery; in peak periods there may be a 3–10 working day delay.',
          'If you do not provide documents in time, the parcel may be returned to the sender.'
        ] },
        { kind: 'warning', text: 'CTT does not “invent a tax”: it collects amounts under the import rules of Autoridade Tributária e Aduaneira. But mistakes happen — especially when a shop charged IVA via IOSS but the IOSS number did not make it into the postal data. In that case submit the invoice and dispute via the CTT portal before paying, if the system allows.' }
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
              { kind: 'paragraph', text: 'For home appliances, books, cables, home goods and baby items Amazon.es is usually the easiest: price already includes IVA, delivery within the EU, and returns are straightforward. Check “Sold by” and “Dispatches from”: if dispatch is from Amazon/EU, there is no customs.' },
              { kind: 'checklist', items: [
                'Compare Amazon.es and Amazon PT: the local storefront may show fewer items.',
                'For urgent purchases filter by Prime/fast delivery to Portugal.',
                'Check whether the item is delivered to your postcode: large appliances and batteries may have restrictions.',
                'Returns on Amazon are usually simpler than on AliExpress/eBay, especially if the seller is Amazon or an EU-business seller.',
                'Do not confuse the item price and the shipping cost: sometimes a cheap item with expensive shipping loses to a local shop.'
              ] }
            ]
          },
          {
            id: 'aliexpress',
            title: 'AliExpress',
            content: [
              { kind: 'paragraph', text: 'AliExpress is good for small bits: cases, cables, spare parts, hobby items. Economy shipping from China is often free, but the real delivery time is 3–8 weeks. AliExpress Choice and EU-warehouse can be faster — sometimes 7–15 days.' },
              { kind: 'checklist', items: [
                'For orders up to €150 look for “IVA incluído” / “VAT included”.',
                'Do not combine many items into a single order over €150 if you want to avoid a full import declaration.',
                'Choose sellers with tracking, not only Cainiao Super Economy without detailed tracking.',
                'For electronics check CE marking, an EU plug and genuine reviews with photos.',
                'If you need an item by a specific date, AliExpress is a poor option.'
              ] }
            ]
          },
          {
            id: 'ebay',
            title: 'eBay',
            content: [
              { kind: 'paragraph', text: 'On eBay the main risk is the country of dispatch and the seller’s status. The same item from Germany will arrive without customs, while from the UK/US it will require IVA, possible duty and brokerage fees.' },
              { kind: 'checklist', items: [
                'Filter “Item location: European Union” if you do not want an import.',
                'Check whether eBay includes “VAT” or “Import charges” at checkout.',
                'With private sellers the invoice may be weak — CTT will still request proof of payment via PayPal/card.',
                'For used tech from outside the EU, IVA is often charged on the actually paid price + shipping.',
                'For expensive purchases over €150 do the maths in advance: sometimes it is better to buy in the EU at a higher price but without customs hassle.'
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
        { kind: 'paragraph', text: 'Before buying from outside the EU, do not count the “website price”, but the landed cost — how much the item will cost after IVA, duty and clearance.' },
        { kind: 'checklist', items: [
          'If the item is from the EU: total ≈ item price + shipping. No customs.',
          'If the item is from China/US/UK up to €150 and IVA is included: total ≈ checkout price; the only risk is an IOSS error or a delay.',
          'If the item is up to €150 and IVA is not included: add 23% IVA on the goods/shipping and the CTT/courier fee.',
          'If the item is over €150: add 23% IVA, a possible duty by commodity category and a brokerage fee.',
          'For DHL/UPS/FedEx the brokerage fees are often higher than CTT; clearance is faster though.',
          'For heavy items shipping is included in the IVA base, so the tax may be noticeably higher than expected.',
          'If the difference with an EU shop is under €15–€25, it is usually better to buy in the EU: faster, easier returns, less risk.'
        ] },
        { kind: 'warning', text: 'Do not ask the seller to undervalue the goods. If CTT/Alfândega requests a card or PayPal statement, the tax will be recalculated on the actual payment; if there is suspicion you may face delays, penalties or the parcel being returned.' }
      ]
    }
  ],
  costs: [
    { label: 'IVA on imports in mainland Portugal', amountEURMin: 0, amountEURMax: 0, note: 'Rate 23% of the tax base; the amount depends on the price of the goods, shipping, duties and fees.' },
    { label: 'Threshold for simplified IOSS', amountEUR: 150, note: 'Up to €150 the marketplace may collect IVA at checkout; over €150 a regular import declaration is required.' },
    { label: 'Typical Amazon.es delivery to mainland Portugal', amountEURMin: 0, amountEURMax: 8, note: 'Depends on Prime, order amount, seller and item; typical timeframe 2–5 working days.' },
    { label: 'AliExpress economy shipping from China', amountEURMin: 0, amountEURMax: 5, note: 'Often free or cheap; typical timeframe 3–8 weeks, faster with Choice/EU-warehouse.' },
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
      title: 'Portal das Finanças: IVA and rates in force',
      url: 'https://pauta.portaldasfinancas.gov.pt/pt/faqs/Pages/importacoes-via-internet-impostos.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'CTT: clear customs for parcels',
      url: 'https://www.ctt.pt/empresas/encomendas-e-correio/receber/desalfandegar-encomendas/index/desalfandegar-encomendas',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'CTT: receive international parcels and customs clearance costs',
      url: 'https://www.ctt.pt/empresas/encomendas-e-correio/receber/desalfandegar-encomendas/index',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 180
}
