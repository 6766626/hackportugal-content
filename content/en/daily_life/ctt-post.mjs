export default {
  editorialVoice: 'hackportugal',
  id: 'ctt-post',
  categoryId: 'daily_life',
  title: 'CTT — Portugal’s postal service',
  tldr: 'CTT = the state Portuguese postal service (like Royal Mail or the United States Postal Service). Branches in every town, Banco CTT banking services, parcels, tracking. For AIMA, Carta Registada com Aviso de Receção (registered letter with acknowledgement of receipt) is often needed. Parcels from the EU have no customs clearance; from non-EU countries — declaration + duty if over €150.',
  tags: ['ctt', 'post', 'parcels'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'services',
      title: 'CTT services',
      content: [
        { kind: 'checklist', items: [
          'Carta Normal — standard letter, €0.70 within Portugal / €1.25 within the EU',
          'Carta Registada — registered letter with a tracking number',
          'Carta com Aviso de Receção — registered letter + acknowledgement of receipt (mandatory for AIMA in some cases)',
          'Encomenda — parcel up to 30 kg within Portugal, up to 20 kg internationally',
          'EMS / Express — urgent delivery',
          'CTT Expresso — express delivery, next day',
          'CTT Pay — payments for utilities, fines, taxes',
          'CTT Loja Gigante — online shop (goods by post without ordering from abroad)'
        ]}
      ]
    },
    {
      id: 'parcels',
      title: 'Parcels',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: 'From the EU', content: [
            { kind: 'paragraph', text: 'No customs clearance, no duty. They arrive like ordinary parcels. Delivery takes 2–7 days depending on the country.' }
          ]},
          { id: 'p2', title: 'From non-EU countries (Russian Federation, Brazil, US, China)', content: [
            { kind: 'paragraph', text: 'Customs declaration. Thresholds:' },
            { kind: 'checklist', items: [
              'Up to €22 — no IVA or duty (previously; now ABOLISHED since 2021)',
              'Any parcel: 23% IVA',
              'From €150 — customs duty additionally',
              'CTT sends an SMS/email with the amount payable → pay online or on collection',
              'Customs declaration via Balcão Único (balcaounico.dgav.pt) or the CTT app'
            ]}
          ]},
          { id: 'p3', title: 'Tracking', content: [
            { kind: 'paragraph', text: 'Track on ctt.pt using the number. International shipments — also on the origin website (17track.net for consolidated shipments).' }
          ]},
          { id: 'p4', title: 'Failed delivery', content: [
            { kind: 'paragraph', text: 'If nobody is at home, they leave a notice. Collect from the nearest Loja CTT within 7 days (otherwise it is returned to the sender).' }
          ]}
        ]}
      ]
    },
    {
      id: 'sending',
      title: 'Sending to CIS countries',
      content: [
        { kind: 'checklist', items: [
          '📦 To the Russian Federation — delivery 2–4 weeks, works. Prices from €15 for a small parcel',
          '📦 To Belarus — works, 3–5 weeks',
          '📦 To Ukraine — works, 2–4 weeks',
          '📦 To Kazakhstan — works, 4–6 weeks',
          '⚠️ No money, cryptocurrency, Russian Federation/Belarus documents (they may be confiscated at customs)',
          '⚠️ Declaration is mandatory for all parcels outside the EU'
        ]}
      ]
    },
    {
      id: 'alternatives',
      title: 'Private couriers',
      content: [
        { kind: 'checklist', items: [
          'DHL Express — fast, expensive (€35–80 for international delivery)',
          'UPS — €30–60, next day within the EU',
          'FedEx — €30–70',
          'GLS — economy delivery within the EU, €15–30',
          'SEUR / Correos Express — Spain / Portugal',
          'InPost — parcel lockers for parcels (growing in Portugal)'
        ]}
      ]
    },
    {
      id: 'retention',
      title: 'Mail holding / forwarding',
      content: [
        { kind: 'paragraph', text: 'When moving house, you can set up mail forwarding through CTT (Mudança de Morada) for €15/3 months. Or holding (Retenção) — they keep it at the branch and you collect it.' }
      ]
    }
  ],
  sources: [
    { title: 'CTT — official', url: 'https://www.ctt.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AT — customs / parcel imports', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}
