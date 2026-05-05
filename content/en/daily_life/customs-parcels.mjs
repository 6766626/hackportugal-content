export default {
  editorialVoice: 'hackportugal',
  id: 'customs-parcels',
  categoryId: 'daily_life',
  title: 'Customs clearance of parcels from non-EU countries — how to pay less',
  tldr: 'From 01.07.2021 the €22 threshold was abolished — now any parcel from outside the EU is subject to IVA 23% + customs duty if the value exceeds €150. The declaration is handled via the recipient: CTT or the courier (DHL, FedEx, UPS) send an SMS with a payment link. Pay online: card, MB WAY, Multibanco. CTT handling fee — about €1.80; couriers — €10–€40. Cheaper via the Portal das Alfândegas, but more complex.',
  tags: ['customs', 'parcel', 'iva', 'ctt', 'dhl'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'legal-basis',
      title: 'Legal framework 2026',
      content: [
        { kind: 'paragraph', text: 'EU Directive 2006/112 (VAT) + Regulation 952/2013 (Customs Code). In Portugal implemented via the Código do IVA and Código das Alfândegas.' },
        { kind: 'checklist', items: [
          '🎁 Gift from a private individual to a private individual: exemption up to €45 (if non-commercial)',
          '📦 Commercial parcel < €150: IVA 23% only, no duty',
          '📦 Commercial > €150: IVA + customs duty (0–17% by HS code)',
          '📄 Any goods parcel from outside the EU must be declared via IOSS or import',
          '🌍 Exception: special zones Madeira and the Azores — reduced IVA (16% / 9%)',
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
            { kind: 'paragraph', text: 'The parcel arrives at the CTT sorting centre in Cabo Ruivo (Lisboa). Customs assess it based on the invoice and CN22/CN23 form.' }
          ]},
          { id: 'c2', title: '2. Notification', content: [
            { kind: 'paragraph', text: 'The recipient receives an SMS and email with a link to the Portal CTT showing the customs status and the amount to pay.' }
          ]},
          { id: 'c3', title: '3. Payment', content: [
            { kind: 'checklist', items: [
              'Methods: card, MB WAY, Multibanco, SIBS MB',
              'CTT handling fee: €1.80',
              'Payment deadline: 10 days, then returned to sender',
              'Identity verification — a scan of your Cartão de Cidadão/residence permit'
            ]}
          ]},
          { id: 'c4', title: '4. Delivery', content: [
            { kind: 'paragraph', text: 'CTT will deliver to your home (signature required) or to a Loja CTT (nearest post point). Time after payment — 1–3 days.' }
          ]}
        ]}
      ]
    },
    {
      id: 'couriers',
      title: 'Couriers (DHL, FedEx, UPS) — more expensive but faster',
      content: [
        { kind: 'checklist', items: [
          '💵 Handling fee: DHL €15–€40, FedEx €10–€30, UPS €15–€25',
          '⚡ Customs clearance is often completed before arrival',
          '📞 The courier will call if documents are needed',
          '🏃 Timing — about 24–48 hours after arrival in Portugal',
          '⚠️ A commercial parcel requires an invoice with the HS code'
        ]}
      ]
    },
    {
      id: 'diy',
      title: 'Do-it-yourself customs clearance — cheaper',
      content: [
        { kind: 'paragraph', text: 'Via the Portal Aduaneiro at portaldasfinancas.gov.pt → "Alfândegas" → "Declaração H7" (for parcels < €150).' },
        { kind: 'checklist', items: [
          '📝 Fill in H7: product description, CN (HS) code, value, country',
          '💰 The system will calculate IVA + duty',
          '💳 Payment via Multibanco',
          '📋 Print the confirmation',
          '📬 Present it at the collection point (Loja CTT, customs warehouse)',
          '💶 Savings: €1.80 with CTT, but €30–€40 with DHL/UPS'
        ]},
        { kind: 'warning', text: 'Requires Portuguese and understanding of HS codes. For complex cases, it is better to leave the clearance to CTT or the courier.' }
      ]
    },
    {
      id: 'common',
      title: 'Frequently asked questions',
      content: [
        { kind: 'substeps', items: [
          { id: 'q1', title: 'A gift from a friend — do I have to pay?', content: [
            { kind: 'paragraph', text: 'Formally there is an exemption up to €45, but only if the sender marked "GIFT" on the CN22/CN23 and the declared value is < €45. Above that — normal rules apply.' }
          ]},
          { id: 'q2', title: 'AliExpress / Shein — do they pay IVA?', content: [
            { kind: 'paragraph', text: 'The big marketplaces, after IOSS (since 2021), pay IVA at the point of purchase. If you see "VAT included" on the receipt — all good, you will not pay in Portugal. If not — CTT will notify you.' }
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
          { id: 'q4', title: 'The parcel did not arrive / was lost', content: [
            { kind: 'paragraph', text: 'CTT — tracking + a complaint via the Livro de Reclamações (complaints book). Couriers — insurance. Search period — 30–60 days.' }
          ]}
        ]}
      ]
    }
  ],
  costs: [
    { label: 'IVA on goods > €0', amountEUR: 0, note: '23% of value + shipping' },
    { label: 'CTT handling fee', amountEUR: 1.80 },
    { label: 'DHL/UPS/FedEx handling', amountEURMin: 10, amountEURMax: 40 },
    { label: 'Customs duty (goods > €150)', amountEUR: 0, note: '0–17% by HS' }
  ],
  sources: [
    { title: 'Portal das Finanças (tax portal) — Alfândegas', url: 'https://aduaneiro.portaldasfinancas.gov.pt/jsp/main.jsp', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Regulation (EU) 952/2013 — Customs Code', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32013R0952', kind: 'law', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'CTT — Parcels from abroad', url: 'https://www.ctt.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Import goods from countries outside the EU', url: 'https://eportugal.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 365
}
