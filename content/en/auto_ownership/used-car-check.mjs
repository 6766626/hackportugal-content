export default {
  "editorialVoice": "hackportugal",
  "id": "used-car-check",
  "categoryId": "auto_ownership",
  "title": "Checking used cars before buying in Portugal",
  "tldr": "Five checks before buying a used car: (1) IMT online — match DUA, no liens or debts, (2) Finanças — IUC not in debt, (3) recent IPO inspection, (4) Carfax equivalent Carvertical for history, (5) inspection at an independent workshop. For around €50, avoid buying a car with debts or hidden defects that will later become yours.",
  "tags": [
    "used car",
    "check",
    "purchase",
    "dua"
  ],
  "estimatedReadMinutes": 5,
  "steps": [
    {
      "id": "check-imt",
      "title": "1. IMT — official registry",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "💻 imt-ip.pt → “Vehicles” → “Vehicle Registration”",
            "🔍 Enter the matriculation number",
            "📋 Will show: owner (last), registration date, class, status",
            "🔒 “Penhora” (lien) — red flag, do not buy",
            "💰 “Reserva de propriedade” — means the car is under credit; it can be purchased, but only after closing the reserva",
            "⚠️ Some data is only available at the Serviço de Finanças (tax office) with CC",
            "💶 Cost: online statement €8 (Certidão Automóvel)"
          ]
        }
      ]
    },
    {
      "id": "check-finances",
      "title": "2. Finanças — IUC and debts",
      "content": [
        {
          "kind": "paragraph",
          "text": "The seller is required to show the Declaração sem dívidas for IUC and IMT for the last 3 years. This can be requested at Portal das Finanças → ‘Certidões’ → ‘Certidão de Não Dívida’."
        },
        {
          "kind": "checklist",
          "items": [
            "If IUC is unpaid — the debt transfers to you",
            "Request comprovativo (proof) for the last 3 years",
            "Also check for fines — through CGA / Finanças"
          ]
        }
      ]
    },
    {
      "id": "check-ipo",
      "title": "3. IPO (vehicle inspection) and DUA",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "🧾 DUA (Documento Único Automóvel) — the main document",
            "🔎 The VIN on the car matches the DUA",
            "📅 The last IPO is no older than a year (recent is a better sign)",
            "📋 IPO protocol without ‘deficiências graves’",
            "🛣️ Actual mileage — check by comparing IPO protocols from different years",
            "⚠️ If the IPO has not been done for a long time — buy with the condition ‘pass IPO first’"
          ]
        }
      ]
    },
    {
      "id": "history-check",
      "title": "4. History and Carvertical",
      "content": [
        {
          "kind": "paragraph",
          "text": "Carvertical (carvertical.com), CarfaxPT, Autobiz — paid services for checking history by VIN. They show accidents, mileage, and owners across all EU countries."
        },
        {
          "kind": "checklist",
          "items": [
            "💶 €15–30 for a report",
            "🔍 Mileage by dates (odometer rollback visible)",
            "💥 Accidents and insurance claims",
            "🌍 Previous countries of registration",
            "🔧 Repairs at major networks (Bosch, Norauto)",
            "🚨 ‘Salvage’ / ‘Total loss’ — red flag"
          ]
        }
      ]
    },
    {
      "id": "oficina-check",
      "title": "5. Inspection at the oficina",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "🔧 Take it for diagnosis: €40–80 at an independent oficina",
            "📋 Full check: engine, transmission, suspension, brakes, body rust",
            "💻 OBD diagnosis — ECU error codes",
            "🛞 Tyres, tread, date of manufacture",
            "🪟 Body for repainting, filler (measured with a thickness gauge)",
            "❄️ AC works in summer / winter",
            "🧰 All buttons / electrics work",
            "🗒️ Request a written report — it will be useful for negotiation"
          ]
        }
      ]
    },
    {
      "id": "purchase",
      "title": "Purchase formalities",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "📝 Contrato de compra e venda — 2 copies with details of all parties",
            "🆔 Both parties: CC/residence permit, NIF, IBAN",
            "📋 Handover of DUA + keys + spares",
            "💶 Payment — bank transfer with reference «compra viatura matrícula X»",
            "🏢 Registo de propriedade at IRN (irn.justica.gov.pt) — €45 + processing",
            "📅 Registration deadline for change — 60 days from signing",
            "🛡️ Insurance in your name from the day of transfer",
            "🧾 IUC is no longer recalculated — the current year remains with the seller, the next — with you"
          ]
        }
      ]
    }
  ],
  "costs": [
    {
      "label": "Certidão Automóvel IMT",
      "amountEUR": 8
    },
    {
      "label": "Carvertical report",
      "amountEURMin": 15,
      "amountEURMax": 30
    },
    {
      "label": "Diagnostic workshop",
      "amountEURMin": 40,
      "amountEURMax": 80
    },
    {
      "label": "Registo propriedade IRN",
      "amountEUR": 45
    },
    {
      "label": "TOTAL checks before the transaction",
      "amountEURMin": 60,
      "amountEURMax": 120
    }
  ],
  "sources": [
    {
      "title": "IMT — Vehicle Registration",
      "url": "https://www.imt-ip.pt/sites/IMTT/Portugues/Pages/Home.aspx",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "IRN — Vehicle Registry",
      "url": "https://justica.gov.pt/Registos/Registo-Automovel",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "Portal das Finanças — Certificates",
      "url": "https://www.portaldasfinancas.gov.pt/",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "ePortugal — Buy used vehicle",
      "url": "https://eportugal.gov.pt/",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    }
  ],
  "lastVerified": "2026-04-22",
  "verifyIntervalDays": 365
}
