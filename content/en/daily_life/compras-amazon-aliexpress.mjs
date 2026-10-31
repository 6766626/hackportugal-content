export default {
  recentlyChangedAt: "2026-10-31",

  editorialVoice: 'hackportugal',
  id: 'compras-amazon-aliexpress',
  categoryId: 'daily_life',
  title: 'Amazon ES/PT, AliExpress and eBay in Portugal: delivery, IVA and duties',
  tldr: "Check where the goods are actually dispatched from, not just the store’s domain. Goods already in free circulation and shipped from an EU warehouse normally do not require import clearance by the buyer. For dispatch from outside the EU, allow for VAT, customs duty and the new EU handling fee from 1 November 2026.",
  tags: ['amazon', 'aliexpress', 'ctt', 'duties'],
  estimatedReadMinutes: 6,
  changeSummary: "Non-EU parcels: fee from 1 November",
  steps: [
    {
      "id": "platforms",
      "title": "Check the seller and dispatch location",
      "content": [
        {
          "kind": "paragraph",
          "text": "On Amazon, AliExpress, eBay and other marketplaces, check the actual seller, dispatch country, return terms and total-price breakdown. A country domain or “delivery to Portugal” label does not prove dispatch from an EU warehouse. Goods already in free circulation and dispatched from within the EU normally do not require new import clearance by the buyer."
        }
      ]
    },
    {
      "id": "tax-rules",
      "title": "Non-EU parcels: fee from 1 November",
      "content": [
        {
          "kind": "paragraph",
          "text": "For online orders shipped directly to consumers from outside the EU, the transitional €3 duty per goods category in small consignments up to €150 has applied since 1 July 2026. From 1 November 2026 an additional EU handling fee of €2 per customs declaration line (goods category), rather than simply per box, applies; Dutch Customs explains that it also covers e-commerce consignments above €150. VAT and a separate carrier service charge may be added. Check the total-price breakdown: IOSS concerns VAT and does not remove the other charges. Do not automatically apply distance-selling rules to private gifts or travellers’ luggage. Open tracking and payment manually on the carrier’s official website instead of following an unsolicited text-message link."
        }
      ]
    },
    {
      "id": "ctt-clearance",
      "title": "How CTT desalfandegamento works",
      "content": [
        {
          "kind": "paragraph",
          "text": "If a parcel from outside the EU arrives by regular post, it is almost always handled by CTT. The status may change to “A aguardar procedimentos declarativos” or “Desalfandegamento”. You then need to go to the CTT portal, confirm the details and pay the charges."
        },
        {
          "kind": "checklist",
          "items": [
            "Open tracking on ctt.pt and check whether “desalfandegar” is required.",
            "Prepare an invoice/recibo: a screenshot of the order showing the item price, delivery, currency and recipient’s name.",
            "If IVA has already been paid on AliExpress/eBay/Amazon, attach confirmation of “VAT included” or an invoice with IOSS/VAT.",
            "Check the NIF and address: the name on the order should match the documents or at least be clearly connected to the recipient.",
            "Pay the IVA, any duty and the CTT serviço de apresentação/desalfandegamento online.",
            "After payment, the parcel is usually released and sent for delivery; in peak periods the delay may be 3–10 working days.",
            "If you do not provide the documents in time, the parcel may be returned to the sender."
          ]
        },
        {
          "kind": "warning",
          "text": "CTT does not “invent the tax”: it collects amounts under the import rules of Autoridade Tributária e Aduaneira. But mistakes do happen — especially when the shop has collected IVA via IOSS, but the IOSS number has not been included in the postal data. In that case, submit the invoice and dispute it through the CTT portal before paying, if the system allows it."
        }
      ]
    },
    {
      "id": "marketplace-tactics",
      "title": "Before paying for an order",
      "content": [
        {
          "kind": "paragraph",
          "text": "Save the product page and order with itemised taxes and delivery. Check who pays import and return costs. Do not assume exemption merely because the value is below €150. Ask the seller for a complete calculation before paying if anything is unclear."
        }
      ]
    },
    {
      "id": "how-to-estimate",
      "title": "Calculate the full price",
      "content": [
        {
          "kind": "paragraph",
          "text": "Add the goods, delivery, applicable duty, EU handling fee and carrier service; separately check VAT and what checkout already includes. “VAT included” confirms VAT only. Ordinary import rates depend on classification and origin; there is no single rate for every product. Compare the total with an offer dispatched from within the EU."
        }
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
      "title": "Portal das Finanças: customs information and import rules",
      "url": "https://info.portaldasfinancas.gov.pt/pt/apoio_ao_contribuinte/Cidadaos/Compras/Encomendas_postais/Encomendas_Postais_Comercio_Eletronico/Paginas/default.aspx",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-28"
    },
    {
      "title": "Portal das Finanças: IVA and taxas em vigor",
      "url": "https://pauta.portaldasfinancas.gov.pt/pt/faqs/Pages/importacoes-via-internet-impostos.aspx",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-28"
    },
    {
      "title": "CTT: clearing parcels through customs",
      "url": "https://www.ctt.pt/empresas/encomendas-e-correio/receber/desalfandegar-encomendas/index/desalfandegar-encomendas",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-28"
    },
    {
      "title": "CTT: receiving international parcels and desalfandegamento costs",
      "url": "https://www.ctt.pt/empresas/encomendas-e-correio/receber/desalfandegar-encomendas/index",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-28"
    },
    {
      "title": "CTT — Fim da isenção de direitos aduaneiros em compras até 150 € fora da UE (01.07.2026)",
      "url": "https://www.ctt.pt/particulares/receber/desalfandegar/fim-da-isencao-de-direitos-aduaneiros-em-compras-ate-150-euros-fora-da-uniao-europeia",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-07-10"
    },
    {
      "title": "Council of the EU — small parcels, reviewed 23.10.2026",
      "url": "https://www.consilium.europa.eu/en/policies/eu-action-influx-of-small-parcels/",
      "kind": "official",
      "language": "en",
      "lastRetrieved": "2026-10-31"
    },
    {
      "title": "Dutch Customs — EU handling fee, updated 22.10.2026",
      "url": "https://www.douane.nl/en/themes/import-and-export/import/e-commerce/handling-fee-for-e-commerce/",
      "kind": "official",
      "language": "en",
      "lastRetrieved": "2026-10-31"
    }
  ],
  lastVerified: '2026-07-10',
  verifyIntervalDays: 180
}
