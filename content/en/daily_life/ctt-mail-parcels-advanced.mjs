export default {
  editorialVoice: 'hackportugal',
  id: 'ctt-mail-parcels-advanced',
  categoryId: 'daily_life',
  title: 'CTT — mail forwarding, parcels, online customs clearance',
  tldr: 'Forwarding when moving: **Reencaminhamento Postal** — 3 months (€17.55), 6 months (€28.90), 12 months (€51.30).\n\n**Reserva domiciliária** — holding mail at a branch for up to 2 months (€9.60). Parcels from non-EU countries: IVA 23% + customs duty from €150. Customs clearance is done on ctt.pt via "Desalfandegamento Online" in 5 min, fee €5 per parcel + IVA on value+shipping. Lost parcel — CTT online assistant, compensation up to €50.',
  tags: ['ctt', 'post', 'parcels', 'customs clearance'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'forwarding',
      title: '📬 Mail forwarding when moving',
      content: [
        { kind: 'paragraph', text: 'When changing address in Portugal (domestic move) or leaving for abroad — CTT will redirect all incoming correspondence.' },
        { kind: 'substeps', items: [
          { id: 'f1', title: 'Reencaminhamento Postal (forwarding)', content: [
            { kind: 'checklist', items: [
              '**3 months**: €17.55',
              '**6 months**: €28.90',
              '**12 months**: €51.30',
              'Order: ctt.pt → "Mudança de morada" or at any CTT branch',
              'Starts working 3 working days after ordering',
              'All letters and unregistered parcels are forwarded',
              'Registered items (registada) → the notification goes to the new address, the parcel itself — to the original branch, it must be collected'
            ]}
          ]},
          { id: 'f2', title: 'Reserva Domiciliária (holding)', content: [
            { kind: 'checklist', items: [
              '**€9.60** for a period of up to 2 months',
              'Mail is not delivered, but held at your CTT branch',
              'Useful for a long holiday or business trip',
              'Collect everything at the branch on the specified date'
            ]}
          ]},
          { id: 'f3', title: 'Mudança de Morada — official', content: [
            { kind: 'paragraph', text: 'Do not confuse with reencaminhamento. Changing address with Finanças, IRN, AIMA — via ePortugal "Mudança de morada" free of charge, but it changes official records, not postal delivery.' }
          ]}
        ]}
      ]
    },
    {
      id: 'parcels-eu',
      title: '📦 Parcels from the EU',
      content: [
        { kind: 'checklist', items: [
          '**No customs duties or IVA** — the EU is a single market',
          'Arrive within 2-7 days by standard delivery',
          'Tracking: on ctt.pt by number or via the CTT app',
          'If you were not at home: notice ("aviso") in the mailbox, 14 days to collect at the branch',
          'Then → return to sender'
        ]}
      ]
    },
    {
      id: 'parcels-non-eu',
      title: '📦 Parcels from non-EU countries — customs clearance',
      content: [
        { kind: 'paragraph', text: 'All parcels from non-EU countries (Russian Federation, USA, China, UK after Brexit, Ukraine before TPD) go through customs control.' },
        { kind: 'substeps', items: [
          { id: 'p1', title: '💰 Taxes', content: [
            { kind: 'checklist', items: [
              '**IVA 23%**: charged on ALL parcels from non-EU countries since 1 July 2021 (previously there was a threshold of <€22)',
              '**Customs duty**: on goods > **€150** (value + shipping). The rate depends on the product TARIC code — 0-17% for most goods, up to 50% for clothing in certain categories',
              '**Additional CTT costs**: processing fee €5 + €1-3 for an additional operation',
              'Example for a €100 parcel (no duty, up to €150): €23 IVA + ~€5 CTT fee = ~€28 additional costs on top of the item value',
              'Example for a €200 parcel (>€150): ~€46 IVA + ~€24 customs duty (depends on TARIC) + ~€7 CTT fee = ~€77 additional costs'
            ]}
          ]},
          { id: 'p2', title: '🛂 How to complete customs clearance', content: [
            { kind: 'checklist', items: [
              '**Automatically** up to €150: CTT processes IOSS (if the sender is a large retailer such as AliExpress/Amazon with IOSS registration) → you pay only for delivery, the tax is already included in the price',
              '**Via CTT Desalfandegamento Online**: if the sender has no IOSS — you receive an SMS/e-mail with a link to complete the process',
              '**Open ctt.pt → Desalfandegamento → enter the parcel code → upload the invoice**',
              'Specify: value, contents, purpose (personal use)',
              'Pay IVA + customs duty + CTT fee by card',
              'The parcel will be released 2-3 days after payment'
            ]}
          ]},
          { id: 'p3', title: '⚠️ When problems may occur', content: [
            { kind: 'checklist', items: [
              'Undervalued declared value (AliExpress often writes €1) — AT may challenge it and charge based on market value',
              'CITES goods (skins of rare animals, ivory) — confiscation',
              'Medicines — prohibited without a PT prescription',
              'Counterfeit brands — confiscation + fine for the sender',
              'Weapons, alcohol >2 l, tobacco — strict limits'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'iossi',
      title: '🌐 IOSS — the simple route',
      content: [
        { kind: 'paragraph', text: 'IOSS (Import One-Stop Shop) — a system introduced in 2021 allowing retailers from non-EU countries to collect IVA at the moment of purchase. For the consumer = trouble-free receipt.' },
        { kind: 'checklist', items: [
          '✅ **Amazon.com, AliExpress, eBay, Temu, Shein** — IOSS-registered, IVA included in the price, the parcel clears automatically',
          '✅ Up to €150 — no additional taxes',
          '❌ **Russian shops, Wildberries before sanctions, private sellers** — no IOSS, customs clearance is still required',
          '❌ Parcels >€150 — IOSS does not apply, always customs duty + CTT fee'
        ]}
      ]
    },
    {
      id: 'issues',
      title: '🆘 Problems with a parcel',
      content: [
        { kind: 'substeps', items: [
          { id: 'i1', title: 'The parcel is lost', content: [
            { kind: 'checklist', items: [
              'Tracking shows "Delivered", but nothing is there → check with the concierge and neighbours',
              'Submit a complaint on ctt.pt → "Apresentar reclamação"',
              'Investigation period: 10-30 days',
              'Compensation for loss: up to €50 (standard), up to €500 (Registado), up to the declared value (Seguro)',
              'International via EMS — the sending country will pay you the supplement'
            ]}
          ]},
          { id: 'i2', title: 'The parcel is delayed at customs', content: [
            { kind: 'checklist', items: [
              'Check the status on ctt.pt, look for "Aguarda desalfandegamento"',
              'If there is no SMS about Desalfandegamento — call CTT 707 262 626',
              'Sometimes you need to send the invoice to CTT manually (to the e-mail desalfandegamento@ctt.pt)',
              'Customs holding period: 30 days, then → return'
            ]}
          ]},
          { id: 'i3', title: 'Damaged during delivery', content: [
            { kind: 'checklist', items: [
              'Photograph the damage + packaging BEFORE opening',
              'Submit a complaint within 8 days',
              'Refund via seguro / minimum for a standard parcel'
            ]}
          ]}
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Reencaminhamento 3 months', amountEUR: 17.55 },
    { label: 'Reencaminhamento 6 months', amountEUR: 28.90 },
    { label: 'Reencaminhamento 12 months', amountEUR: 51.30 },
    { label: 'Reserva Domiciliária', amountEUR: 9.60 },
    { label: 'CTT processing fee', amountEUR: 5, note: 'per parcel' },
    { label: 'IVA on parcels from non-EU countries', amountEUR: 0, note: '23% of value+shipping' },
    { label: 'Customs duty (>€150)', amountEUR: 0, note: '0-17% of value+shipping' }
  ],
  sources: [
    { title: 'CTT — Online Customs Clearance', url: 'https://www.ctt.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AT — Customs', url: 'https://info.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'EU Taxation — IOSS', url: 'https://taxation-customs.ec.europa.eu/ioss_en', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
