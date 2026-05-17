export default {
  editorialVoice: 'hackportugal',
  id: 'ctt-post',
  categoryId: 'daily_life',
  title: 'CTT — Portugal’s postal service',
  tldr: 'CTT = the public company Correios de Portugal, S.A., privatised and operating under the universal postal service concession. There are branches in every town, Banco CTT banking services, parcels, tracking. For AIMA, Carta Registada com Aviso de Receção is often required. Parcels from the EU have no customs, from non-EU countries — IVA on everything, customs duty — on goods over €150.',
  tags: ['ctt', 'post', 'parcels'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'services',
      title: 'CTT services',
      content: [
        { kind: 'checklist', items: [
          'Carta Normal — standard letter, €0.70 within Portugal / €1.25 in the EU',
          'Carta Registada — registered letter with a tracking number',
          'Carta com Aviso de Receção — registered letter + delivery confirmation (mandatory for AIMA in some cases)',
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
            { kind: 'paragraph', text: 'No customs, no duty. They arrive as standard parcels. Delivery takes 2–7 days depending on the country.' }
          ]},
          { id: 'p2', title: 'From non-EU countries (Russian Federation, Brazil, USA, China)', content: [
            { kind: 'paragraph', text: 'Customs declaration. Thresholds:' },
            { kind: 'checklist', items: [
              'Up to €22 — no IVA or duty (previously, now ABOLISHED since 2021)',
              'Any parcel: IVA at the rates of the destination region (mainland 23%, Madeira/Açores regional rates)',
              'From €150 — additional customs duty (rate according to the product’s TARIC code)',
              'CTT sends an SMS/email with the payment amount → you pay online or on receipt',
              'Customs clearance is usually via CTT Desalfandegamento Online (ctt.pt) or a customs broker; balcaounico.dgav.pt — another portal (DGAV, for agri-food/veterinary procedures)'
            ]}
          ]},
          { id: 'p3', title: 'Tracking', content: [
            { kind: 'paragraph', text: 'Tracking on ctt.pt by number. International shipments — also on the origin website (17track.net for consolidated shipments).' }
          ]},
          { id: 'p4', title: 'Failed delivery', content: [
            { kind: 'paragraph', text: 'If nobody is at home — a notice is left. Collect from the nearest Loja CTT within 7 days (otherwise it is returned to the sender).' }
          ]}
        ]}
      ]
    },
    {
      id: 'sending',
      title: 'Sending to CIS countries',
      content: [
        { kind: 'checklist', items: [
          '📦 Russian Federation/Belarus — service, timescales and permitted categories are unstable due to sanctions and restrictions; check on ctt.pt before sending',
          '📦 To Ukraine — operating; timescales are unstable and depend on the situation',
          '📦 To Kazakhstan — operating, check timescales',
          '⚠️ Cash, securities, valuables and many other categories are restricted/prohibited for mailing (international UPU/CTT postal rules)',
          '⚠️ A declaration is mandatory for all parcels outside the EU'
        ]}
      ]
    },
    {
      id: 'alternatives',
      title: 'Private couriers',
      content: [
        { kind: 'checklist', items: [
          'DHL Express — fast, expensive (€35–80 for international delivery)',
          'UPS — €30–60, next day in the EU',
          'FedEx — €30–70',
          'GLS — economical delivery in the EU, €15–30',
          'SEUR / Correos Express — Spain / Portugal',
          'InPost — parcel lockers for parcels (growing in Portugal)'
        ]}
      ]
    },
    {
      id: 'retention',
      title: 'Mail holding / forwarding',
      content: [
        { kind: 'paragraph', text: 'When moving, you can arrange mail forwarding through CTT (Mudança de Morada) for €15/3 months. Or holding (Retenção) — they keep it at the branch and you collect it.' }
      ]
    }
  ],
  sources: [
    { title: 'CTT — official', url: 'https://www.ctt.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AT — customs / parcel imports', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
