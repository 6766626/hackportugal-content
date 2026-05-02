export default {
  editorialVoice: 'hackportugal',
  id: 'recycling-pt',
  categoryId: 'daily_life',
  title: 'Separate waste collection and disposal in Portugal',
  tldr: 'Portugal follows the EU standard: separate waste collection. The main bin colours are: yellow (ecoponto amarelo) for plastic and metal, blue for paper and cardboard, green for glass, brown for organic waste (where available), and grey/black for mixed waste. Bulky waste and electrical appliances are handled separately through the municipality. Fines apply for breaches.',
  tags: ['waste', 'recycling', 'ecoponto', 'environment'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'system',
      title: 'How the system works',
      content: [
        { kind: 'paragraph', text: 'Waste collection in Portugal is the responsibility of municipalities (Câmara Municipal), through contractors. Payment is included as part of the water bill. The system is based on EU Directive 2008/98/EC and national Lei 102/2020.' },
        { kind: 'paragraph', text: 'The main principle is separate containers (ecopontos) in residential areas. In flats, waste is sorted at home and then taken to the nearest ecoponto.' }
      ]
    },
    {
      id: 'colors',
      title: 'Colours and what to put in each bin',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: '🟡 Yellow (Amarelo) — Embalagens', content: [
            { kind: 'checklist', items: [
              'Plastic bottles (water, milk, juice)',
              'Yoghurt pots',
              'Plastic packaging, film',
              'Tin cans (drinks, preserves)',
              'Metal lids',
              'Tetra Pak cartons (milk, juices)',
              'Aerosol cans (empty)'
            ]}
          ]},
          { id: 'c2', title: '🔵 Blue (Azul) — Papel e Cartão', content: [
            { kind: 'checklist', items: [
              'Newspapers, magazines',
              'Cardboard boxes (flattened and folded flat)',
              'Printer paper',
              'Books (if not resold)',
              '❌ DO NOT put in: dirty pizza boxes, napkins, wax-coated paper'
            ]}
          ]},
          { id: 'c3', title: '🟢 Green (Verde) — Vidro', content: [
            { kind: 'checklist', items: [
              'Glass bottles (without corks or caps!)',
              'Glass jars',
              '❌ DO NOT put in: drinking glasses, light bulbs, mirrors, ceramics — these go in mixed waste'
            ]}
          ]},
          { id: 'c4', title: '🟤 Brown (Castanho) — Orgânico', content: [
            { kind: 'checklist', items: [
              'Food waste (peelings, bones, leftovers)',
              'Coffee grounds',
              'Garden waste (leaves, grass)',
              'Not available everywhere — it depends on the municipality. In Lisboa and Porto it is being introduced in some areas'
            ]}
          ]},
          { id: 'c5', title: '⚫ Grey/Black — Indiferenciado (mixed waste)', content: [
            { kind: 'checklist', items: [
              'Everything that is NOT suitable for separate collection',
              'Hygiene products (nappies, sanitary pads)',
              'Non-recyclable plastic (polystyrene)',
              'Used napkins, paper'
            ]}
          ]},
          { id: 'c6', title: '🔴 Red (Vermelho) — Pilhas (batteries)', content: [
            { kind: 'checklist', items: [
              'Batteries go in a separate red container (Pilhão), available at some municipal ecopontos',
              'They are also accepted in supermarkets and pharmacies (Continente, Pingo Doce, Worten)',
              'Rechargeable batteries also go here',
              'If there is no red bin, see the “Special disposal” section below'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'special',
      title: 'Special disposal',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: 'Electrical and electronic items', content: [
            { kind: 'paragraph', text: 'Waste electrical and electronic equipment goes in dedicated containers in shops (Worten, Radio Popular, Fnac) or at municipal Ecocentros. By law, a shop must accept old equipment when you buy a new item.' }
          ]},
          { id: 's2', title: 'Batteries', content: [
            { kind: 'paragraph', text: 'Pilhão containers are available in many shops (supermarkets, pharmacies). By law, they are mandatory.' }
          ]},
          { id: 's3', title: 'Oil (cooking oil)', content: [
            { kind: 'paragraph', text: 'Oleão containers are found in supermarkets and municipalities. Used oil should be handed in inside a plastic bottle. It is recycled into biodiesel.' }
          ]},
          { id: 's4', title: 'Clothing', content: [
            { kind: 'paragraph', text: 'Clothing containers are found on streets (orange). H&M/Zara also accept old clothes in exchange for a discount.' }
          ]},
          { id: 's5', title: 'Furniture and bulky waste (monstros)', content: [
            { kind: 'paragraph', text: 'Collection must be arranged with the municipality by phone or via the Câmara Municipal online form. It is usually free 1-2 times a year. Do not leave items on the street without prior agreement — this can result in a fine.' }
          ]},
          { id: 's6', title: 'Construction waste', content: [
            { kind: 'paragraph', text: 'This must be taken to specific Ecocentros. If you are doing renovation work yourself, request authorisation from the Câmara Municipal; disposal is often paid.' }
          ]},
          { id: 's7', title: 'Medicines', content: [
            { kind: 'paragraph', text: 'Valormed containers are available in pharmacies. They accept expired and unwanted medicines.' }
          ]}
        ]}
      ]
    },
    {
      id: 'fines',
      title: 'Fines and breaches',
      content: [
        { kind: 'paragraph', text: 'Under Lei 102/2020 and municipal regulations, fines can reach €200,000 for legal entities; for individuals, they are €50-2,000.' },
        { kind: 'checklist', items: [
          '⚠️ Incorrect sorting is formally subject to a fine; in practice, the bag may simply not be collected',
          '⚠️ Bulky waste left on the street without a request — fine of €50-250',
          '⚠️ Putting out rubbish outside the schedule (some areas have set times)',
          '⚠️ Throwing rubbish from a car — up to €750',
          '⚠️ Ecocentros accept waste free of charge from residents with atestado de residência; for commercial users, it is paid'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Practical tips',
      content: [
        { kind: 'checklist', items: [
          '🚮 Rinse packaging to remove residues — clean packaging is recycled more effectively',
          '📦 Break down cardboard boxes and fold them flat — this leaves more room in the bin',
          '🔋 Do not put batteries in ordinary waste — it is dangerous',
          '🛍️ Shopper bag (saco reutilizável) — since 2021, plastic bags in supermarkets have cost 3-10 cents',
          '🏭 Ecocentro — every large municipality has one, and you can take unusual items there',
          '♻️ Composting on a balcony or in a yard is becoming increasingly common among residents; municipalities give out composters free of charge',
          '📱 The “Sociedade Ponto Verde” app explains what goes where'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'APA — Agência Portuguesa do Ambiente', url: 'https://www.apambiente.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Sociedade Ponto Verde — packaging waste operator', url: 'https://www.pontoverde.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 102/2020 (Regime de Gestão de Resíduos)', url: 'https://diariodarepublica.pt/dr/detalhe/lei/102-2020', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Directive 2008/98/EC — EU Waste Framework Directive', url: 'https://eur-lex.europa.eu/', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}
