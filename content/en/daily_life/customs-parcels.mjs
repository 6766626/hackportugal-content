export default {
  editorialVoice: 'hackportugal',
  id: 'customs-parcels',
  categoryId: 'daily_life',
  title: 'Customs clearance for parcels from non-EU countries — how to pay less',
  tldr: 'Since 01/07/2021, the €22 threshold has been abolished — now any parcel from a non-EU country is subject to IVA + customs duty if the value is above €150. Clearance is handled through the recipient: CTT or the courier (DHL, FedEx, UPS) sends an SMS with a payment link. Online payment: card, MB WAY, Multibanco. The CTT fee for desalfandegamento depends on the product; couriers charge €10–40. Current tariffs are on ctt.pt.',
  tags: ['customs', 'parcel', 'iva', 'ctt', 'dhl'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'legal-basis',
      title: 'Legal framework 2026',
      content: [
        { kind: 'paragraph', text: 'EU Directive 2006/112 (VAT) + Regulation 952/2013 (Customs Code). In Portugal, implementation is through the Código do IVA, Código das Alfândegas.' },
        { kind: 'checklist', items: [
          '🎁 Gift from an individual to an individual: exemption up to €45 (if non-commercial)',
          '📦 Commercial parcel < €150: IVA 23% only, no duty',
          '📦 Commercial > €150: IVA + customs duty (0–17% according to HS code)',
          '📄 Any goods parcel from a non-EU country must be declared via IOSS or import',
          '🌍 Regional IVA rates: Madeira and Açores have their own standard rates (Açores — 16% standard, Madeira — 22% standard in 2026; check the current rates)',
          '🍷 Excise duties (IEC): alcohol, tobacco, energy products — on top of IVA. Perfume is NOT a harmonised excise good in the EU; for perfume, ordinary duty/VAT apply, with no excise'
        ]}
      ]
    },
    {
      id: 'how-ctt-works',
      title: 'How a parcel goes through CTT',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: '1. Arrival at customs', content: [
            { kind: 'paragraph', text: 'The parcel arrives at the CTT sorting centre in Cabo Ruivo (Lisboa). Customs assesses it based on the invoice and the CN22/CN23 form.' }
          ]},
          { id: 'c2', title: '2. Notification', content: [
            { kind: 'paragraph', text: 'The recipient receives an SMS + email with a link to Portal CTT, where the customs status + payment amount are shown.' }
          ]},
          { id: 'c3', title: '3. Payment', content: [
            { kind: 'checklist', items: [
              'Methods: card, MB WAY, Multibanco, SIBS MB',
              'The CTT fee for desalfandegamento depends on the type of shipment and procedure; current tariffs are on ctt.pt',
              'Payment deadline: 10 days, then return to sender',
              'Identity confirmation — a scan of your Cartão de Cidadão/residence permit'
            ]}
          ]},
          { id: 'c4', title: '4. Delivery', content: [
            { kind: 'paragraph', text: 'CTT will deliver to your home (with signature) or to a Loja CTT (the nearest post office). Time after payment — 1–3 days.' }
          ]}
        ]}
      ]
    },
    {
      id: 'couriers',
      title: 'Couriers (DHL, FedEx, UPS) — more expensive, but faster',
      content: [
        { kind: 'checklist', items: [
          '💵 Processing fee: DHL €15–40, FedEx €10–30, UPS €15–25',
          '⚡ Customs clearance is often already completed before arrival',
          '📞 The courier calls if documents are needed',
          '🏃 Timeframe — around 24–48 hours after arrival in Portugal',
          '⚠️ A commercial parcel requires an invoice with an HS code'
        ]}
      ]
    },
    {
      id: 'diy',
      title: 'Do-it-yourself customs clearance — cheaper',
      content: [
        { kind: 'paragraph', text: 'Via Portal Aduaneiro on portaldasfinancas.gov.pt → “Alfândegas”. Declaração H7 is a simplified declaration for low-value consignments up to €150, not subject to customs duty, and not for excise goods/prohibited goods.' },
        { kind: 'checklist', items: [
          '📝 Fill in H7: goods description, CN (HS) code, value, country',
          '💰 The system will calculate IVA + duty',
          '💳 Payment via Multibanco',
          '📋 Print the confirmation',
          '📬 Submit it at the collection point (Loja CTT, customs warehouse)',
          '💶 Saving: you can avoid a €30–40 handling fee from DHL/UPS by making your own declaration'
        ]},
        { kind: 'warning', text: 'Requires Portuguese and an understanding of HS codes. For complex cases, it is better to leave clearance to CTT or the courier.' }
      ]
    },
    {
      id: 'common',
      title: 'Frequently asked questions',
      content: [
        { kind: 'substeps', items: [
          { id: 'q1', title: 'A gift from a friend — do I pay?', content: [
            { kind: 'paragraph', text: 'Formally, an exemption applies up to €45, but only if the sender indicated “GIFT” on CN22/CN23 and the declared value is < €45. Above that, the normal rules apply.' }
          ]},
          { id: 'q2', title: 'AliExpress / Shein — do they pay IVA?', content: [
            { kind: 'paragraph', text: 'IOSS (Import One-Stop Shop) applies to goods with an intrinsic value up to €150 and does not apply to excise goods. If the marketplace is registered with IOSS, IVA is charged at the time of purchase. If you see “VAT included” on the receipt — all good. If not — CTT will notify you on import.' }
          ]},
          { id: 'q3', title: 'Books / electronics / clothes — different duty?', content: [
            { kind: 'checklist', items: [
              'Books: 0% duty, IVA 6%',
              'Clothing: up to 12% duty + IVA 23%',
              'Electronics: 0–4% duty + IVA 23%',
              'Jewellery: 2.5% duty + IVA 23%',
              'Cosmetics: 0% duty + IVA 23%',
              'Toys: 0–4.7% duty + IVA 23%'
            ]}
          ]},
          { id: 'q4', title: 'The parcel has not arrived / has been lost', content: [
            { kind: 'paragraph', text: 'CTT — tracking + complaint via Livro de Reclamações (complaints book). Couriers — insurance. Search period — 30–60 days.' }
          ]}
        ]}
      ]
    }
  ],
  costs: [
    { label: 'IVA on goods > €0', amountEUR: 0, note: '23% of value + delivery' },
    { label: 'CTT fee for desalfandegamento', amountEURMin: 5, amountEURMax: 15, note: 'tariff depends on the product/procedure; see ctt.pt' },
    { label: 'DHL/UPS/FedEx processing', amountEURMin: 10, amountEURMax: 40 },
    { label: 'Customs duty (goods > €150)', amountEUR: 0, note: '0–17% according to HS' }
  ],
  sources: [
    { title: 'Portal das Finanças (tax portal) — Alfândegas', url: 'https://aduaneiro.portaldasfinancas.gov.pt/jsp/main.jsp', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Regulation (EU) 952/2013 — Customs Code', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32013R0952', kind: 'law', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'CTT — Parcels from abroad', url: 'https://www.ctt.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Importing goods from countries outside the EU', url: 'https://www.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-30',
  verifyIntervalDays: 365
}
