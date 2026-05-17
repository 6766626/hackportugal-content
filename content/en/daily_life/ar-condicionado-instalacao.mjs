export default {
  editorialVoice: 'hackportugal',
  id: 'ar-condicionado-instalacao',
  categoryId: 'daily_life',
  title: 'Air conditioning in Portugal: installation, IVA and real cost',
  tldr: 'In 2026, installing ar condicionado in Portugal usually costs €800–€2,500 per split unit including installation: a simple 9,000 BTU mono-split costs from €700–€1,100, while a multi-split is €1,500–€2,500+. The standard IVA rate is 23% on the mainland. The 6% rate is possible only for qualifying works in housing, usually on the mão de obra part, not on the air-conditioning unit itself. Installation must be carried out by a certified technician for equipment with gases fluorados; ask for a factura with NIF, a warranty and a declaração de conformidade.',
  tags: ['air-conditioning', 'iva', 'renovation', 'habitação'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'prices',
      title: 'How much air conditioning with installation costs in 2026',
      content: [
        { kind: 'paragraph', text: 'The price depends not only on the brand, but also on the pipe run between the indoor and outdoor units, the height of the façade, the need to drill concrete, condensate drainage, the electrical line and access to the outdoor unit.' },
        { kind: 'checklist', items: [
          '9,000 BTU mono-split for a 10–18 m² bedroom: usually €700–€1,100 with basic installation.',
          '12,000 BTU mono-split for an 18–30 m² room: around €850–€1,300.',
          'More powerful 18,000–24,000 BTU unit for a sala: often €1,200–€1,800.',
          'Multi-split with 2 indoor units: usually €1,500–€2,500.',
          'Multi-split with 3+ indoor units: often €2,500–€4,500+, especially with long pipe runs.',
          'Premium brands such as Daikin and Mitsubishi Electric are more expensive than LG, Samsung, Hisense and Midea, but are usually quieter and more efficient.',
          'Basic installation often includes 3–5 m of copper pipe run; each additional metre may cost €25–€60.',
          'Work at height, rope-access work, a crane, a difficult façade or concealed pipe routing can easily add €150–€600.'
        ] }
      ]
    },
    {
      id: 'iva',
      title: 'IVA: 23% by default, 6% only in narrow cases',
      content: [
        { kind: 'paragraph', text: 'For air-conditioning units, the standard IVA rate in mainland Portugal is 23%. In Madeira and Açores the rates are lower under regional rules, but in most quotes for Lisbon, Porto, the Algarve and the mainland you will see 23%.' },
        { kind: 'paragraph', text: 'The 6% rate may apply to empreitadas de beneficiação, remodelação, renovação, restauro, reparação ou conservação de imóveis afetos à habitação. In practice, this more often concerns mão de obra in a residential property, not the full cost of the equipment.' },
        { kind: 'warning', text: 'Do not automatically assume that the entire air-conditioning unit with installation can be invoiced at 6%. If the cost of materials and equipment is substantial, the tax logic usually leads to 23% on the equipment. Ask the instalador in advance to split the orçamento into equipamento, materiais and mão de obra and to state the applicable IVA rate.' },
        { kind: 'checklist', items: [
          '23% — the normal rate for buying equipment.',
          '23% — typical for a standard “air conditioner + installation” package from a shop.',
          '6% — possible for qualifying works in housing if the invoice is issued as repair/renovation of housing.',
          '6% does not apply to commercial premises as ordinary housing.',
          '6% is not an “expat discount” and does not depend on a foreigner’s NIF.',
          'To prove expenses you need a factura com NIF, not a recibo without a tax number.'
        ] }
      ]
    },
    {
      id: 'certified-technician',
      title: 'Who is allowed to install it: a certified técnico',
      content: [
        { kind: 'paragraph', text: 'Most domestic split systems contain fluorinated greenhouse gases. Work on the refrigerant circuit — installation, vacuuming, charging, leak testing, dismantling — must be carried out by a técnico certificado for equipamentos fixos de refrigeração, ar condicionado e bombas de calor.' },
        { kind: 'paragraph', text: 'In the market this is often called “técnico certificado”, “certificação de gases fluorados” or training/certification through recognised entities, including the IEFP/SIGO system. What matters is not the name of the course, but the technician’s right to work with refrigerantes and issue proper documentação.' },
        { kind: 'checklist', items: [
          'Ask for the technician’s certificate number or proof of qualification.',
          'Check that the company issues a factura com NIF and a warranty.',
          'Clarify who is responsible for a gas leak after installation.',
          'Ask for a teste de estanquidade / leak test, if applicable.',
          'Check whether vacuuming the system is included in the installation, rather than just “connected and switched on”.',
          'Do not agree to installation “sem factura” to save on IVA: it will be difficult to claim under warranty later.',
          'If the property is rented, get written consent from the senhorio before drilling the façade.'
        ] }
      ]
    },
    {
      id: 'before-installation',
      title: 'What to check before ordering',
      content: [
        { kind: 'paragraph', text: 'Many flats in Portugal are old: weak wiring, no dedicated line, difficult façades, damp walls, condomínio rules. This can cost more than the air conditioner itself if it only becomes clear on the installation day.' },
        { kind: 'checklist', items: [
          'Capacity: 9,000 BTU for a small bedroom, 12,000 BTU for a medium-sized room, 18,000+ BTU for a large sala.',
          'Electrics: whether a separate disjuntor is needed and whether the quadro elétrico can handle the load.',
          'Outdoor-unit location: balcony, façade, roof, technical area or patio.',
          'Drainage: where the condensate will go so that it does not drip onto neighbours’ varanda.',
          'Noise: check the outdoor unit’s dB level, especially in a condomínio and dense urban areas.',
          'Condomínio: ask about rules on the façade and the visibility of outdoor units.',
          'Câmara Municipal: in historic areas and on protected façades there may be restrictions.',
          'Rental contract: written permission from the landlord is almost always needed.',
          'Warranty: separately for the equipment and separately for the installation.',
          'Timing: installers are overloaded in summer; in June–August bookings may be 2–6 weeks ahead.'
        ] }
      ]
    },
    {
      id: 'quote',
      title: 'How to read an orçamento and avoid overpaying',
      content: [
        { kind: 'paragraph', text: 'A proper orçamento should be detailed. If it only says “AC installed — €1,200”, ask for a breakdown. This helps you compare offers and understand where extra charges are hidden.' },
        { kind: 'checklist', items: [
          'Brand and exact model of the indoor and outdoor unit.',
          'BTU or kW for cooling and heating.',
          'SEER/SCOP energy-efficiency class, if stated.',
          'Length of included copper pipe run and price per additional metre.',
          'Whether brackets, calha, cable, drainage and wall drilling are included.',
          'Whether a separate electrical line is needed and whether it is included in the price.',
          'IVA rate: 23% or justified application of 6% to part of the works.',
          'Warranty period for the equipment and warranty period for the installation.',
          'Delivery time and installation date.',
          'Payment terms: deposit, payment after installation, Multibanco/transferência.'
        ] },
        { kind: 'warning', text: 'The cheapest quote often does not include electrics, a long pipe run, façade work or IVA. Compare the final price with IVA and all works included, not just the price of the unit.' }
      ]
    },
    {
      id: 'maintenance',
      title: 'After installation: maintenance and use',
      content: [
        { kind: 'paragraph', text: 'Air conditioning in Portugal is not used only in summer. In homes without central heating, heat pump mode is often cheaper and more comfortable than oil-filled radiators, especially with good energy efficiency.' },
        { kind: 'checklist', items: [
          'Wash the filters every 2–4 weeks during periods of active use.',
          'Professional cleaning is usually needed once a year, especially where there is damp and mould.',
          'Check the drainage before summer: a blockage causes leaks down the wall.',
          'Do not set it to 18 °C in summer: 24–26 °C is more comfortable and more economical.',
          'In winter, heat mode at 19–21 °C is usually more efficient than portable electric heaters.',
          'Keep the factura and warranty documents for at least the entire warranty period.',
          'When selling or renting out a home, having AC increases appeal, but unauthorised installation in a rental can become a dispute.'
        ] }
      ]
    }
  ],
  costs: [
    { label: '9,000 BTU mono-split with basic installation', amountEURMin: 700, amountEURMax: 1100, note: 'Typical for a bedroom; the price depends on the brand and pipe run.' },
    { label: '12,000 BTU mono-split', amountEURMin: 850, amountEURMax: 1300, note: 'A common option for a medium-sized room or home office.' },
    { label: 'Multi-split with 2 indoor units', amountEURMin: 1500, amountEURMax: 2500, note: 'Highly dependent on pipe-run lengths and access to the outdoor unit.' },
    { label: 'Additional metre of pipe run', amountEURMin: 25, amountEURMax: 60, note: 'Copper, insulation, cable and labour; confirm in the orçamento.' },
    { label: 'Professional maintenance/cleaning', amountEURMin: 50, amountEURMax: 120, note: 'Usually for one indoor unit; complex cleaning costs more.' }
  ],
  sources: [
    {
      title: 'DGEG — information on energy, equipment and energy efficiency',
      url: 'https://www.dgeg.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Agência Portuguesa do Ambiente — gases fluorados and obligations when working with refrigerantes',
      url: 'https://apambiente.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IVA — IVA rates and verbas da Lista I',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1984-34500675',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DECO PROteste — recommendations on choosing and using ar condicionado',
      url: 'https://www.deco.proteste.pt',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
