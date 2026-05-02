export default {
  editorialVoice: 'hackportugal',
  id: 'lixo-recolha-municipal',
  categoryId: 'daily_life',
  title: 'Rubbish collection and recycling: municipal schedules and rules',
  tldr: 'In Portugal, rubbish is a municipal service: the schedule, night-time disposal hours, bulky waste / monstros, green waste and ecocentro depend on the Câmara Municipal. In Lisbon, CML provides schedules by zone and an online request for recolha de monstros; in Porto, the rules are published by the Câmara/Porto Ambiente. Basic sorting in 2026: azul paper, amarelo plastic/metal/embalagens, verde glass, castanho bioresíduos, cinzento indiferenciado; oil goes only in the oleão.',
  tags: ['rubbish', 'recycling', 'municipality', 'ecoponto'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'municipio-first',
      title: '1. First check your município, not “general rules”',
      content: [
        { kind: 'paragraph', text: 'Portugal does not have one single national schedule for household rubbish collection. Daily collection, containers, street-by-street schedules, monstros, verdes and ecocentros are handled by the Câmara Municipal or a municipal company.' },
        { kind: 'checklist', items: [
          'Find your Câmara Municipal website: Lisboa — cm-lisboa.pt, Porto — cm-porto.pt.',
          'Look for sections such as “Higiene Urbana”, “Resíduos Urbanos”, “Recolha de Resíduos”, “Ecopontos”, “Ecocentros”.',
          'Check your address by street: in large cities the schedule differs by zona/freguesia and even by side of the street.',
          'If you live in a condomínio, check with the administração do condomínio: there are often dedicated bins and set times for putting them out on the street.',
          'If you rent a flat, ask the landlord about dias de recolha and exactly where the contentores are located.',
          'Do not rely on the neighbouring area: moving a container 200 m may mean a different route and a different day.',
          'Rubbish collection is included in the water bill as tarifa de resíduos / saneamento; a separate contract is usually not needed.'
        ] }
      ]
    },
    {
      id: 'five-bin-system',
      title: '2. Sorting: 5 main streams ♻️',
      content: [
        { kind: 'paragraph', text: 'In 2026, the real household system is not “one rubbish bin” but several streams. The colours are the same in most municipalities, but details for bioresíduos and underground containers depend on the city.' },
        { kind: 'checklist', items: [
          'Azul — paper and cardboard: boxes, newspapers, paper bags. A dirty napkin, a greasy pizza box and paper with food residue do not go here.',
          'Amarelo — plastic and metal packaging, bags, cans, Tetra Pak / embalagens de cartão para alimentos líquidos. Ideally flatten them so they take up less space.',
          'Verde — glass packaging: bottles and jars. Ceramics, mirrors, lamps, Pyrex and window glass do not go here.',
          'Castanho — bioresíduos: food waste and sometimes garden organic waste. Availability depends on the município; in some buildings you are given a brown container or a key/card.',
          'Cinzento / indiferenciado — residual rubbish: what does not go for recycling and is not hazardous waste.',
          'Oleão — a separate bin for used cooking oil. The oil must be cooled, poured into a closed plastic bottle and placed whole in the oleão.',
          'Pilhão — batteries and small rechargeable batteries, usually next to the ecoponto, in supermarkets or at the Junta de Freguesia.',
          'VALORMED — medicines and blister packs: take them to pharmacies, not to ordinary rubbish.'
        ] },
        { kind: 'warning', text: 'Do not pour óleo alimentar usado into the sink or toilet. It blocks drains, damages saneamento and may lead to a fine under municipal rules.' }
      ]
    },
    {
      id: 'lisbon',
      title: '3. Lisbon: CML, zones and recolha de monstros',
      content: [
        { kind: 'paragraph', text: 'In Lisboa, the rules are published by Câmara Municipal de Lisboa. On the CML website you can check recolha schedules by zone and request collection of bulky items — recolha de monstros.' },
        { kind: 'checklist', items: [
          'Check your zona de recolha on cm-lisboa.pt: the timetable depends on the freguesia and the type of street.',
          'Ordinary household lixo is usually put out only during the permitted evening/night-time window stated for the zone.',
          'Monstros are furniture, mattresses, large items, and sometimes household appliances. You cannot simply leave them by the ecoponto.',
          'A request for recolha de monstros is made online through the CML / “Na Minha Rua” service or via municipal channels, stating the address, phone number, type and number of items.',
          'Put items out only on the confirmed day and at the confirmed place, usually near the building entrance, without blocking the pavement, road, fire access or containers.',
          'Plant cuttings and branches are verdes; in Lisboa they also follow a separate municipal scheme/request, not the ordinary bin.',
          'Construction waste from renovation works is entulho / resíduos de construção. This is not monstros: you need an ecocentro, saco próprio or licensed operator.'
        ] },
        { kind: 'warning', text: 'In Lisbon, a mattress, sofa or wardrobe left without a request is considered deposição indevida. Even if “everyone does it”, a fine and a complaint through fiscalização are possible.' }
      ]
    },
    {
      id: 'porto-and-other-cities',
      title: '4. Porto and other cities: where to find the schedule',
      content: [
        { kind: 'paragraph', text: 'In Porto, information on recolha de resíduos, ecopontos, ecocentros and pedidos de recolha is published through Câmara Municipal do Porto and city services. The logic is the same: address → schedule → correct waste stream → request for bulky rubbish.' },
        { kind: 'checklist', items: [
          'On cm-porto.pt, look for “Ambiente”, “Resíduos”, “Recolha de Monstros”, “Ecocentros” or “Porto Ambiente”.',
          'For furniture, mattresses, household appliances and verdes, use a pedido de recolha; do not leave them in the street without confirmation.',
          'If there is no ecoponto of the required colour nearby, look for the ecopontos/ecocentros map on the município website.',
          'In small towns, “porta-a-porta” collection often operates by day of the week: the container or bag is put out in the evening before the specific day.',
          'In historic centres of Lisboa, Porto, Coimbra, Évora, Braga there may be underground containers or restricted hours because of narrow streets.',
          'In tourist areas, fiscalização is more active: complaints about rubbish are often made by neighbours, the condomínio and the Junta de Freguesia.'
        ] }
      ]
    },
    {
      id: 'special-waste',
      title: '5. What must not go in an ordinary bin',
      content: [
        { kind: 'paragraph', text: 'Hazardous and special waste in Portugal goes through separate channels. If in doubt, look for your município ecocentro or a collection point in a shop.' },
        { kind: 'checklist', items: [
          'Electronics and household appliances — Ponto Eletrão, a shop when buying new equipment, or an ecocentro.',
          'Lamps, fluorescent tubes, LED and small electronics — specialist containers, not verde.',
          'Batteries — pilhão.',
          'Medicines, syrups, blister packs and medicine boxes — VALORMED at the pharmacy.',
          'Paints, solvents, oils, chemicals, pesticides — ecocentro or special municipal recolha.',
          'Construction waste, tiles, cement, bathroom fittings after renovation — not household lixo; arrange it through an ecocentro/operator.',
          'Clothes and shoes — textile containers, charity, lojas sociais; dirty textiles with no other option go to indiferenciado.',
          'Syringes and medical waste — check with a farmácia/centro de saúde; do not throw needles into an ordinary bag.'
        ] }
      ]
    },
    {
      id: 'practical-routine',
      title: '6. A practical routine for a flat',
      content: [
        { kind: 'checklist', items: [
          'Set up 3 small bags at home: amarelo, azul, vidro; bioresíduos — a separate lidded bucket if castanho is available.',
          'Photograph the sign on the nearest contentor: it often shows deposição hours and the municipality phone number/QR code.',
          'Save the link to your município page and the ecopontos map in your notes.',
          'Before moving home or buying furniture, book recolha de monstros in advance for the date you need.',
          'Do not leave IKEA/Amazon boxes whole: fold them and put them in azul, otherwise the container will fill up quickly.',
          'If the ecoponto is full, do not put bags next to it: find another point or report it via the município app/website.',
          'In a condomínio, do not change where bins are put out without agreement: this is a common cause of fines and conflicts with neighbours.'
        ] },
        { kind: 'warning', text: 'Municipal rules change more often than national ones. Before a major disposal, renovation or move, check the Câmara Municipal website on the day you submit the request.' }
      ]
    }
  ],
  costs: [
    { label: 'Ordinary household rubbish collection', amountEUR: 0, note: 'Not paid separately when putting rubbish out; the municipal tarifa de resíduos is usually included in the water bill and depends on the município/consumption.' },
    { label: 'Ecoponto, oleão, pilhão', amountEUR: 0, note: 'Free for household use.' },
    { label: 'Recolha de monstros by request', amountEUR: 0, note: 'In Lisboa and Porto, this is usually a free municipal service for household users if booking rules are followed; check your município limits and conditions.' },
    { label: 'Ecocentro for household waste', amountEUR: 0, note: 'Usually free for residents with household volumes; construction and commercial waste may require a separate procedure or payment.' }
  ],
  sources: [
    { title: 'Câmara Municipal de Lisboa — Higiene Urbana, recolha de resíduos and monstros', url: 'https://www.cm-lisboa.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Câmara Municipal do Porto — Ambiente, resíduos urbanos and municipal recolha', url: 'https://www.cm-porto.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Agência Portuguesa do Ambiente — resíduos urbanos and waste sorting', url: 'https://apambiente.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal — municipal services and waste management', url: 'https://eportugal.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
