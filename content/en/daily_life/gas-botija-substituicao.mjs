export default {
  editorialVoice: 'hackportugal',
  id: 'gas-botija-substituicao',
  categoryId: 'daily_life',
  title: 'Gas botija: where to replace a cylinder and how to arrange delivery',
  tldr: 'In Portugal, homes without gás natural often use bottled GPL: a 13 kg botija de butano for the kitchen and esquentador, and propane for outdoor/cold areas. In 2026, replacing a 13 kg butano cylinder usually costs €27-32 + delivery, if it is not included; without an empty cylinder, you pay a caução/purchase charge for the container. Galp, Repsol, BP and local revendedores deliver to homes in Lisboa, Porto, the Algarve and most towns. A contract is not always needed: an order by phone/WhatsApp is often enough, but you can set up a regular entrega.',
  tags: ['gpl', 'botija', 'gas', 'galp', 'repsol'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-bottle',
      title: 'What a botija is and which cylinder you need',
      content: [
        { kind: 'paragraph', text: 'A botija is a domestic GPL cylinder: butano or propano. In flats and houses without gás natural, it supplies the hob, oven, esquentador water heater and sometimes heating. The most common kitchen format is 13 kg butano. Propano works better outdoors, in unheated spaces and at low temperatures.' },
        { kind: 'checklist', items: [
          '13 kg butano — the standard for a flat kitchen; in 2026 a typical replacement is €27-32.',
          '11 kg propano — a similar domestic format, often chosen for exterior use or colder areas.',
          '45 kg propano — for houses, heating and high consumo; it is usually placed outside and needs more space.',
          'Cylinders from different brands are not always interchangeable: Galp is exchanged for Galp, Repsol for Repsol, and so on.',
          'If you already have an empty botija, you pay only for the gas/replacement and delivery.',
          'If you do not have an empty cylinder, the revendedor charges a caução/container fee: usually tens of euros on top of the gas.',
          'Check the regulator: butano/propano and different cylinder types may have a different encaixe.',
          'For an esquentador, ventilation, extraction and the correct potência matter — it is not “just connecting a hose”.'
        ] }
      ]
    },
    {
      id: 'where-replace',
      title: 'Where to replace a cylinder: shop, posto or delivery',
      content: [
        { kind: 'paragraph', text: 'The simplest route is to find the nearest GPL revendedor: minimercado, drogaria, posto de combustível, Galp/Repsol/BP shop or local delivery service. In tourist and suburban areas of the Algarve, delivery often works even better than collection.' },
        { kind: 'checklist', items: [
          'Galp: search for “Galp Gás garrafas” or a local Galp distribuidor by address.',
          'Repsol: search for “Repsol Gás” and GPL revendedores; many take orders by phone.',
          'BP: the network is smaller, but in cities and at postos there are cylinder exchanges.',
          'Local lojas are often cheaper for delivery and faster than a large call centre.',
          'For collection, bring an empty botija of the same brand and type.',
          'For delivery, say the floor in advance, whether there is a lift, and whether it must be carried up into the flat.',
          'Payment: cash, portable Multibanco, MB WAY — it depends on the revendedor; check before they arrive.',
          'Keep the recibo: it can be useful in a dispute about the caução or returning the container.'
        ] },
        { kind: 'warning', text: 'Do not buy a “dodgy” cylinder without a seal, with heavy rust, a damaged valve or no brand marking. If you smell gas after connection — close the valve, ventilate, do not switch on lights/create sparks, call the supplier or 112 if there is a risk.' }
      ]
    },
    {
      id: 'home-delivery',
      title: 'Home delivery and a regular contract',
      content: [
        { kind: 'paragraph', text: 'For a botija, a full long-term contract is often unnecessary. In practice it is a “pedido de entrega”: you call/message the revendedor and give the address, cylinder type, quantity and time. But you can arrange an entrega regular — for example, every 3-6 weeks or on request with a fixed customer profile.' },
        { kind: 'substeps', items: [
          { id: 'choose-supplier', title: '1. Choose a supplier', content: [
            { kind: 'paragraph', text: 'Compare Galp, Repsol, BP and local revendedores for your código postal. In Lisboa/Porto, delivery is usually on the same or next working day; in the Algarve it depends on the freguesia and the season.' }
          ] },
          { id: 'send-details', title: '2. Send the order details', content: [
            { kind: 'checklist', items: [
              'Address and código postal.',
              'Name on the intercom and phone number.',
              'Gas type: butano or propano.',
              'Weight/format: for example 13 kg.',
              'Brand of the empty cylinder you are handing over.',
              'Whether a new regulator or hose needs to be installed.',
              'Payment method: dinheiro, cartão, MB WAY.',
              'Preferred delivery window.'
            ] }
          ] },
          { id: 'regular-delivery', title: '3. Set up entrega regular', content: [
            { kind: 'paragraph', text: 'Ask for “entrega periódica” or “cliente habitual”. With small revendedores this is usually an entry in their database + a WhatsApp reminder, not a legally complex contract. Check whether you can cancel without a penalty, and what happens if you are not at home.' }
          ] }
        ] },
        { kind: 'warning', text: 'Do not agree to the courier “quickly connecting” the cylinder to an old cracked hose. A GPL hose has an expiry date printed on it; if in doubt, replace it. A regulator and mangueira cost little compared with the risk of a leak.' }
      ]
    },
    {
      id: 'prices',
      title: 'How much it costs in 2026',
      content: [
        { kind: 'paragraph', text: 'Prices for bottled GPL in Portugal are commercial and vary by brand, area, delivery and promotions. As a guide for April 2026: domestic 13 kg butano, when exchanging an empty cylinder, usually falls in the €27-32 range. Delivery may be included or added separately.' },
        { kind: 'checklist', items: [
          '13 kg butano replacement: usually €27-32 if you have an empty botija.',
          'Delivery: often €0-5 in a city, but it may be higher for remote addresses.',
          'New/first cylinder without an empty one: a caução or container fee is added.',
          'Regulator: usually €10-25 depending on the type and shop.',
          'GPL hose and clamps: usually €5-15.',
          'Connection/check on site: sometimes free with delivery, sometimes a separate taxa.',
          '45 kg propano is noticeably more expensive per cylinder, but it is not for an ordinary flat; it is for a house/heating.'
        ] },
        { kind: 'paragraph', text: 'If your usage is high — for example, a gas water heater + cooking for a family — ask for the price for two botijas at once. Some revendedores give a discount or free delivery when ordering 2 cylinders.' }
      ]
    },
    {
      id: 'natural-gas',
      title: 'Alternative: connect gás natural',
      content: [
        { kind: 'paragraph', text: 'If the building has a gás natural network, this is more convenient than a botija: no carrying cylinders, billing is by meter, and you can change supplier. But connection is possible only if the street/building is connected to the network and the internal instalação is certificada.' },
        { kind: 'checklist', items: [
          'Check with the Câmara Municipal, condomínio or distribuidor de rede whether there is gás natural at the address.',
          'Find out the CUI — Código Universal da Instalação; without it, the supplier will not open a contract.',
          'You need an instalação de gás in the flat/house, carried out or checked by a técnico credenciado.',
          'For a new connection, an inspeção de gás and a valid certificado de inspeção are often required.',
          'Choose a comercializador: Galp, EDP Comercial, Repsol, Endesa, Goldenergy, etc.',
          'For the contract, you usually need NIF, an identity document, address, CUI, IBAN/payment method.',
          'If the property is rented, agree the works with the senhorio and condomínio.',
          'Do not connect a hob designed for GPL directly to gás natural without replacing the injectores/adapting it.'
        ] },
        { kind: 'warning', text: 'Gás natural and GPL operate at different pressures and require the correct nozzles, regulator/adjustment and certified installation. DIY conversion of a hob or esquentador is an explosion risk and may void insurance.' }
      ]
    }
  ],
  costs: [
    { label: '13 kg butano botija replacement', amountEURMin: 27, amountEURMax: 32, note: 'Typical range in mainland Portugal in 2026 when handing over an empty cylinder; the price depends on the brand and revendedor.' },
    { label: 'Home delivery', amountEURMin: 0, amountEURMax: 5, note: 'Often included in cities, but may be higher in remote freguesias or for an urgent order.' },
    { label: 'GPL regulator', amountEURMin: 10, amountEURMax: 25, note: 'Needed for the first connection or if the old/unsuitable encaixe is being used.' },
    { label: 'GPL hose + clamps', amountEURMin: 5, amountEURMax: 15, note: 'Check the expiry date printed on the hose.' },
    { label: 'Caução/container fee for the first cylinder', amountEURMin: 20, amountEURMax: 50, note: 'If there is no empty botija to exchange; return conditions depend on the brand and seller.' }
  ],
  sources: [
    { title: 'Galp — bottled gas and GPL home solutions', url: 'https://www.galp.com', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Repsol — Repsol Gás and GPL distribution', url: 'https://www.repsol.com', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ERSE — consumer information on gas and energy', url: 'https://www.erse.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
