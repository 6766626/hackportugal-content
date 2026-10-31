export default {
  recentlyChangedAt: "2026-10-31",
  changeSummary: "Non-EU parcels: fee from 1 November",

  editorialVoice: 'hackportugal',
  id: 'ctt-mail-parcels-advanced',
  categoryId: 'daily_life',
  title: 'CTT — mail forwarding, parcels, online customs clearance',
  tldr: "CTT offers mail forwarding, holding and tracking. Check the selected service’s tariff and compensation terms before paying. Online parcels from outside the EU may involve VAT, applicable customs duty, the EU fee from 1 November 2026 and a separate carrier clearance charge. IOSS handles VAT but does not remove the other charges.",
  tags: ['ctt', 'post', 'parcels', 'customs clearance'],
  estimatedReadMinutes: 5,
  steps: [
    {
      "id": "forwarding",
      "title": "📬 Mail forwarding when moving",
      "content": [
        {
          "kind": "paragraph",
          "text": "When changing address in Portugal (domestic move) or leaving for abroad — CTT will redirect all incoming correspondence."
        },
        {
          "kind": "substeps",
          "items": [
            {
              "id": "f1",
              "title": "Reencaminhamento Postal (forwarding)",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "3 months: €17.55",
                    "6 months: €28.90",
                    "12 months: €51.30",
                    "Order: ctt.pt → \"Mudança de morada\" or at any CTT branch",
                    "Starts working 3 working days after ordering",
                    "All letters and unregistered parcels are forwarded",
                    "Registered items (registada) → the notification goes to the new address, the parcel itself — to the original branch, it must be collected"
                  ]
                }
              ]
            },
            {
              "id": "f2",
              "title": "Reserva Domiciliária (holding)",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "€9.60 for a period of up to 2 months",
                    "Mail is not delivered, but held at your CTT branch",
                    "Useful for a long holiday or business trip",
                    "Collect everything at the branch on the specified date"
                  ]
                }
              ]
            },
            {
              "id": "f3",
              "title": "Mudança de Morada — official",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Do not confuse with reencaminhamento. Changing address with Finanças, IRN, AIMA — via ePortugal \"Mudança de morada\" free of charge, but it changes official records, not postal delivery."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "parcels-eu",
      "title": "📦 Parcels from the EU",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "No customs duties or IVA — the EU is a single market",
            "Arrive within 2-7 days by standard delivery",
            "Tracking: on ctt.pt by number or via the CTT app",
            "If you were not at home: notice (\"aviso\") in the mailbox, 14 days to collect at the branch",
            "Then → return to sender"
          ]
        }
      ]
    },
    {
      "id": "parcels-non-eu",
      "title": "Non-EU parcels: fee from 1 November",
      "content": [
        {
          "kind": "paragraph",
          "text": "For online orders shipped directly to consumers from outside the EU, the transitional €3 duty per goods category in small consignments up to €150 has applied since 1 July 2026. From 1 November 2026 an additional EU handling fee of €2 per customs declaration line (goods category), rather than simply per box, applies; Dutch Customs explains that it also covers e-commerce consignments above €150. VAT and a separate carrier service charge may be added. Check the total-price breakdown: IOSS concerns VAT and does not remove the other charges. Do not automatically apply distance-selling rules to private gifts or travellers’ luggage. Open tracking and payment manually on the carrier’s official website instead of following an unsolicited text-message link."
        }
      ]
    },
    {
      "id": "iossi",
      "title": "IOSS: what has already been paid",
      "content": [
        {
          "kind": "paragraph",
          "text": "IOSS allows the shop to collect VAT at checkout on eligible consignments up to €150. Keep the invoice and VAT confirmation. Distinguish VAT from the €3 duty per category and the EU €2 fee per declaration line from November. If VAT is requested twice, check whether the IOSS data was transmitted correctly before paying. Consignments above €150 follow the ordinary procedure, with duty depending on the goods classification."
        }
      ]
    },
    {
      "id": "issues",
      "title": "🆘 Problems with a parcel",
      "content": [
        {
          "kind": "substeps",
          "items": [
            {
              "id": "i1",
              "title": "The parcel is lost",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "Tracking shows \"Delivered\", but nothing is there → check with the concierge and neighbours",
                    "Submit a complaint on ctt.pt → \"Apresentar reclamação\"",
                    "Investigation period: 10-30 days",
                    "Compensation for loss: up to €50 (standard), up to €500 (Registado), up to the declared value (Seguro)",
                    "International via EMS — the sending country will pay you the supplement"
                  ]
                }
              ]
            },
            {
              "id": "i2",
              "title": "The parcel is delayed at customs",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "Check the status on ctt.pt, look for \"Aguarda desalfandegamento\"",
                    "If there is no SMS about Desalfandegamento — call CTT 707 262 626",
                    "Sometimes you need to send the invoice to CTT manually (to the e-mail desalfandegamento@ctt.pt)",
                    "Customs holding period: 30 days, then → return"
                  ]
                }
              ]
            },
            {
              "id": "i3",
              "title": "Damaged during delivery",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "Photograph the damage + packaging BEFORE opening",
                    "Submit a complaint within 8 days",
                    "Refund via seguro / minimum for a standard parcel"
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  costs: [
    { label: 'Reencaminhamento 3 months', amountEUR: 17.55 },
    { label: 'Reencaminhamento 6 months', amountEUR: 28.90 },
    { label: 'Reencaminhamento 12 months', amountEUR: 51.30 },
    { label: 'Reserva Domiciliária', amountEUR: 9.60 },
    { label: 'CTT clearance fee (€150-1000)', amountEUR: 12, note: 'depends on goods; ~€14 at reduced IVA' },
    { label: 'EU per-category fee (from 1 July 2026)', amountEUR: 3, note: 'per product category, parcels under €150' },
    { label: 'IVA on parcels from non-EU countries', amountEUR: 0, note: '23% of value+shipping' },
    { label: 'Customs duty (>€150, until 1 July 2026)', amountEUR: 0, note: '0-17% of value+shipping' }
  ],
  sources: [
    {
      "title": "CTT — Online Customs Clearance",
      "url": "https://www.ctt.pt/",
      "kind": "company",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "AT — Customs",
      "url": "https://info.portaldasfinancas.gov.pt/",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "EU Taxation — IOSS",
      "url": "https://taxation-customs.ec.europa.eu/ioss_en",
      "kind": "official",
      "language": "en",
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
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
