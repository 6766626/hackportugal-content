export default {
  editorialVoice: 'hackportugal',
  id: 'customs-parcels',
  categoryId: 'daily_life',
  title: 'Customs clearance for parcels from non-EU countries — how to pay less',
  tldr: 'Since 01/07/2021, the €22 threshold has been abolished — now any parcel from a non-EU country is subject to 23% IVA + customs duty if the value is above €150. Clearance is handled via the recipient: CTT or the courier (DHL, FedEx, UPS) sends an SMS with a payment link. Pay online: card, MB WAY, Multibanco. The CTT handling fee is around €1.80; couriers charge €10–40. Using Portal das Alfândegas is cheaper, but more complicated.',
  tags: ['customs', 'parcel', 'IVA', 'CTT', 'DHL'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'legal-basis',
      title: 'Legal framework 2026',
      content: [
        { kind: 'paragraph', text: 'EU Directive 2006/112 (VAT) + Regulation 952/2013 (Union Customs Code). In Portugal, implementation is through the Código do IVA and Código das Alfândegas.' },
        { kind: 'checklist', items: [
          '🎁 Gift from one private individual to another: exemption up to €45 (if non-commercial)',
          '📦 Commercial parcel < €150: only 23% IVA, no duty',
          '📦 Commercial > €150: IVA + customs duty (0–17% by HS code)',
          '📄 Any goods parcel from a non-EU country must be declared via IOSS or import',
          '🌍 Exception: special zones of Madeira and the Azores — reduced IVA (16% / 9%)',
          '🍷 Excise duties (tobacco, alcohol, perfumery) — on top of IVA'
        ]}
      ]
    },
    {
      id: 'how-ctt-works',
      title: 'How a parcel goes through CTT',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: '1. Arrival at customs', content: [
            { kind: 'paragraph', text: 'The parcel arrives at the CTT sorting centre in Cabo Ruivo (Lisboa). Customs assesses it using the invoice and the CN22/CN23 form.' }
          ]},
          { id: 'c2', title: '2. Notification', content: [
            { kind: 'paragraph', text: 'The recipient receives an SMS + email with a link to Portal CTT, showing the customs status + the amount to pay.' }
          ]},
          { id: 'c3', title: '3. Payment', content: [
            { kind: 'checklist', items: [
              'Methods: card, MB WAY, Multibanco, SIBS MB',
              'CTT handling fee: €1.80',
              'Payment deadline: 10 days, then return to sender',
              'Identity confirmation — scan of your Cartão de Cidadão/residence permit'
            ]}
          ]},
          { id: 'c4', title: '4. Delivery', content: [
            { kind: 'paragraph', text: 'CTT will deliver to your home (against signature) or to a Loja CTT (nearest post office). Time after payment — 1–3 days.' }
          ]}
        ]}
      ]
    },
    {
      id: 'couriers',
      title: 'Couriers (DHL, FedEx, UPS) — more expensive, but faster',
      content: [
        { kind: 'checklist', items: [
          '💵 Handling fee: DHL €15–40, FedEx €10–30, UPS €15–25',
          '⚡ Customs clearance is often already done before arrival',
          '📞 The courier calls if documents are needed',
          '🏃 Timeframe — around 24–48 hours after arrival in Portugal',
          '⚠️ A commercial parcel requires an invoice with an HS code'
        ]}
      ]
    },
    {
      id: 'diy',
      title: 'Clearing customs yourself — cheaper',
      content: [
        { kind: 'paragraph', text: 'Via Portal Aduaneiro on portaldasfinancas.gov.pt → “Alfândegas” → “Declaração H7” (for parcels < €150).' },
        { kind: 'checklist', items: [
          '📝 Complete H7: goods description, CN (HS) code, value, country',
          '💰 The system will calculate IVA + duty',
          '💳 Payment via Multibanco',
          '📋 Print the confirmation',
          '📬 Hand it over at the place of collection (Loja CTT, customs warehouse)',
          '💶 Saving: €1.80 CTT, but €30–40 with DHL/UPS'
        ]},
        { kind: 'warning', text: 'Requires Portuguese and an understanding of HS codes. For complicated cases, it is better to leave clearance to CTT or the courier.' }
      ]
    },
    {
      id: 'common',
      title: 'Frequently asked questions',
      content: [
        { kind: 'substeps', items: [
          { id: 'q1', title: 'A gift from a friend — do I have to pay?', content: [
            { kind: 'paragraph', text: 'Formally, an exemption applies up to €45, but only if the sender marked “GIFT” on the CN22/CN23 and the declared value is < €45. Above that — the usual rules apply.' }
          ]},
          { id: 'q2', title: 'AliExpress / Shein — do they pay IVA?', content: [
            { kind: 'paragraph', text: 'Large marketplaces after IOSS (since 2021) pay IVA at the purchase stage. If you see “VAT included” on the receipt — all good, you do not pay in Portugal. If not — CTT will notify you.' }
          ]},
          { id: 'q3', title: 'Books / electronics / clothing — different duty?', content: [
            { kind: 'checklist', items: [
              'Books: 0% duty, 6% IVA',
              'Clothing: up to 12% duty + 23% IVA',
              'Electronics: 0–4% duty + 23% IVA',
              'Jewellery: 2.5% duty + 23% IVA',
              'Cosmetics: 0% duty + 23% IVA',
              'Toys: 0–4.7% duty + 23% IVA'
            ]}
          ]},
          { id: 'q4', title: 'Parcel has not arrived / has been lost', content: [
            { kind: 'paragraph', text: 'CTT — tracking + complaint via Livro de Reclamações (complaints book). Couriers — insurance. Search period — 30–60 days.' }
          ]}
        ]}
      ]
    }
  ],
  costs: [
    { label: 'IVA on goods > €0', amountEUR: 0, note: '23% of the value + delivery' },
    { label: 'CTT handling fee', amountEUR: 1.80 },
    { label: 'DHL/UPS/FedEx handling', amountEURMin: 10, amountEURMax: 40 },
    { label: 'Customs duty (goods > €150)', amountEUR: 0, note: '0–17% by HS' }
  ],
  sources: [
    { title: 'Portal das Finanças (tax portal) — Alfândegas', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.html', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Regulation (EU) 952/2013 — Customs Code', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32013R0952', kind: 'law', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'CTT — Parcels from abroad', url: 'https://www.ctt.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Importing goods from countries outside the EU', url: 'https://eportugal.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}
