export default {
  recentlyChangedAt: "2026-10-31",

  editorialVoice: 'hackportugal',
  id: 'customs-parcels',
  categoryId: 'daily_life',
  title: 'Customs clearance for parcels from non-EU countries — how to pay less',
  tldr: "For online orders shipped directly to consumers from outside the EU, the transitional €3 duty per goods category in small consignments up to €150 has applied since 1 July 2026. From 1 November 2026 an additional EU handling fee of €2 per customs declaration line (goods category), rather than simply per box, applies; Dutch Customs explains that it also covers e-commerce consignments above €150. VAT and a separate carrier service charge may be added. Check the total-price breakdown: IOSS concerns VAT and does not remove the other charges. Do not automatically apply distance-selling rules to private gifts or travellers’ luggage. Open tracking and payment manually on the carrier’s official website instead of following an unsolicited text-message link.",
  tags: ['customs', 'parcel', 'iva', 'ctt', 'dhl'],
  estimatedReadMinutes: 6,
  changeSummary: "Non-EU parcels: fee from 1 November",
  steps: [
    {
      "id": "legal-basis",
      "title": "Non-EU parcels: fee from 1 November",
      "content": [
        {
          "kind": "paragraph",
          "text": "For online orders shipped directly to consumers from outside the EU, the transitional €3 duty per goods category in small consignments up to €150 has applied since 1 July 2026. From 1 November 2026 an additional EU handling fee of €2 per customs declaration line (goods category), rather than simply per box, applies; Dutch Customs explains that it also covers e-commerce consignments above €150. VAT and a separate carrier service charge may be added. Check the total-price breakdown: IOSS concerns VAT and does not remove the other charges. Do not automatically apply distance-selling rules to private gifts or travellers’ luggage. Open tracking and payment manually on the carrier’s official website instead of following an unsolicited text-message link."
        }
      ]
    },
    {
      "id": "how-ctt-works",
      "title": "How a parcel goes through CTT",
      "content": [
        {
          "kind": "substeps",
          "items": [
            {
              "id": "c1",
              "title": "1. Arrival at customs",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "The parcel arrives at the CTT sorting centre in Cabo Ruivo (Lisboa). Customs assesses it based on the invoice and the CN22/CN23 form."
                }
              ]
            },
            {
              "id": "c2",
              "title": "2. Notification",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "The recipient receives an SMS + email with a link to Portal CTT, where the customs status + payment amount are shown."
                }
              ]
            },
            {
              "id": "c3",
              "title": "3. Payment",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "Methods: card, MB WAY, Multibanco, SIBS MB",
                    "The CTT fee for desalfandegamento depends on the type of shipment and procedure; current tariffs are on ctt.pt",
                    "Payment deadline: 10 days, then return to sender",
                    "Identity confirmation — a scan of your Cartão de Cidadão/residence permit"
                  ]
                }
              ]
            },
            {
              "id": "c4",
              "title": "4. Delivery",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "CTT will deliver to your home (with signature) or to a Loja CTT (the nearest post office). Time after payment — 1–3 days."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "couriers",
      "title": "Couriers (DHL, FedEx, UPS) — more expensive, but faster",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "💵 Processing fee: DHL €15–40, FedEx €10–30, UPS €15–25",
            "⚡ Customs clearance is often already completed before arrival",
            "📞 The courier calls if documents are needed",
            "🏃 Timeframe — around 24–48 hours after arrival in Portugal",
            "⚠️ A commercial parcel requires an invoice with an HS code"
          ]
        }
      ]
    },
    {
      "id": "diy",
      "title": "Self-clearance: confirm the conditions first",
      "content": [
        {
          "kind": "paragraph",
          "text": "Before filing your own declaration, confirm the procedure and required data with the carrier. A simplified H7 declaration is not suitable for every product; restrictions and excise rules require separate checks. Self-filing does not remove public customs duties, VAT or an applicable EU handling fee. Any saving on the carrier’s service depends on its terms and is not guaranteed."
        }
      ]
    },
    {
      "id": "common",
      "title": "Frequently asked questions",
      "content": [
        {
          "kind": "substeps",
          "items": [
            {
              "id": "q1",
              "title": "A gift from a friend — do I pay?",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Formally, an exemption applies up to €45, but only if the sender indicated “GIFT” on CN22/CN23 and the declared value is < €45. Above that, the normal rules apply."
                }
              ]
            },
            {
              "id": "q2",
              "title": "AliExpress / Shein — do they pay IVA?",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "IOSS (Import One-Stop Shop) applies to goods with an intrinsic value up to €150 and does not apply to excise goods. If the marketplace is registered with IOSS, IVA is charged at the time of purchase (“VAT included” on the receipt). But note: IOSS covers only IVA — it does not remove the new €3/category duty (since 01.07.2026) or the clearance fee; watch for CTT/courier notifications and for how marketplaces adjust their prices."
                }
              ]
            },
            {
              "id": "q3",
              "title": "Books / electronics / clothes — different duty?",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "Books: 0% duty, IVA 6%",
                    "Clothing: up to 12% duty + IVA 23%",
                    "Electronics: 0–4% duty + IVA 23%",
                    "Jewellery: 2.5% duty + IVA 23%",
                    "Cosmetics: 0% duty + IVA 23%",
                    "Toys: 0–4.7% duty + IVA 23%"
                  ]
                }
              ]
            },
            {
              "id": "q4",
              "title": "The parcel has not arrived / has been lost",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "CTT — tracking + complaint via Livro de Reclamações (complaints book). Couriers — insurance. Search period — 30–60 days."
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  costs: [
    { label: 'IVA on goods > €0', amountEUR: 0, note: '23% of value + delivery' },
    { label: 'CTT fee for desalfandegamento', amountEURMin: 5, amountEURMax: 15, note: 'tariff depends on the product/procedure; see ctt.pt' },
    { label: 'DHL/UPS/FedEx processing', amountEURMin: 10, amountEURMax: 40 },
    { label: 'Duty on a parcel ≤ €150 (since 01.07.2026)', amountEUR: 3, note: '€3 for each product category in the parcel' },
    { label: 'Customs duty (goods > €150)', amountEUR: 0, note: '0–17% according to HS' }
  ],
  sources: [
    {
      "title": "CTT — Fim da isenção de direitos aduaneiros em compras até 150 € fora da União Europeia",
      "url": "https://www.ctt.pt/particulares/receber/desalfandegar/fim-da-isencao-de-direitos-aduaneiros-em-compras-ate-150-euros-fora-da-uniao-europeia",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-07-10"
    },
    {
      "title": "Portal das Finanças (tax portal) — Alfândegas",
      "url": "https://aduaneiro.portaldasfinancas.gov.pt/jsp/main.jsp",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "Regulation (EU) 952/2013 — Customs Code",
      "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32013R0952",
      "kind": "law",
      "language": "en",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "CTT — Parcels from abroad",
      "url": "https://www.ctt.pt/",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "ePortugal — Importing goods from countries outside the EU",
      "url": "https://www.gov.pt/",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
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
  verifyIntervalDays: 365
}
