export default {
  editorialVoice: 'hackportugal',
  id: 'recycling-pt',
  categoryId: 'daily_life',
  title: 'Separate waste collection and disposal in Portugal',
  tldr: 'Portugal follows the EU standard — separate waste collection. The main bin colours are: yellow (ecoponto amarelo) — plastic and metal, blue — paper and cardboard, green — glass, brown — organic waste (where available), grey/black — mixed waste. Bulky waste and electrical appliances are handled separately, via the municipality. Fines apply for infringements.',
  tags: ['waste', 'recycling', 'ecoponto', 'ecology'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'system',
      title: 'How the system works',
      content: [
        { kind: 'paragraph', text: 'Municipalities (Câmara Municipal) are responsible for waste collection in Portugal through contractors. Payment is included as part of the water bill. The system is based on EU Directive 2008/98/EC and Decreto-Lei n.º 102-D/2020 (Regime Geral da Gestão de Resíduos), as subsequently amended.' },
        { kind: 'paragraph', text: 'The basic principle is separate containers (ecopontos) in residential areas. In flats, waste is sorted at home and then taken to the nearest ecoponto.' }
      ]
    },
    {
      id: 'colors',
      title: 'Colours and what to put in them',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: '🟡 Yellow (Amarelo) — Embalagens', content: [
            { kind: 'checklist', items: [
              'Plastic bottles (water, milk, juice)',
              'Yoghurt pots',
              'Plastic packaging, film',
              'Tin cans (drinks, tinned food)',
              'Metal lids',
              'Tetra Paks (milk, juices)',
              'Aerosol cans (empty)'
            ]}
          ]},
          { id: 'c2', title: '🔵 Blue (Azul) — Papel e Cartão', content: [
            { kind: 'checklist', items: [
              'Newspapers, magazines',
              'Cardboard boxes (taken apart and flattened)',
              'Printed paper',
              'Books (if they cannot be resold)',
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
              'Food waste (peels, bones, food leftovers)',
              'Coffee grounds',
              'Garden waste (leaves, grass)',
              'Not available everywhere — it depends on the municipality. In Lisboa and Porto it is being introduced in some areas'
            ]}
          ]},
          { id: 'c5', title: '⚫ Grey/Black — Indiferenciado (mixed waste)', content: [
            { kind: 'checklist', items: [
              'Everything that is NOT suitable for separate collection',
              'Hygiene products (nappies, sanitary towels)',
              'Non-recyclable plastic (polystyrene)',
              'Used napkins, paper',
              '❌ Light bulbs (LED, fluorescentes, economizadoras) must NOT be thrown in ordinary waste — they are a special waste stream, hand them in at electronics shops or at an ecocentro'
            ]}
          ]},
          { id: 'c6', title: '🔴 Red (Vermelho) — Pilhas (batteries)', content: [
            { kind: 'checklist', items: [
              'Pilhão — for portable batteries and small rechargeable batteries. Car/motorcycle/industrial batteries must be taken to specialised collection points (garages, ecocentro)',
              'Portable batteries are also accepted in many supermarkets and electronics shops',
              'Phone/laptop batteries — put them here as well, or take them to electronics shops',
              'If there is no red bin — see the “Special disposal” section below'
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
          { id: 's1', title: 'Electrical and electronic equipment', content: [
            { kind: 'paragraph', text: 'Waste electrical and electronic equipment — separate containers in shops (Worten, Radio Popular, Fnac) or at municipal Ecocentros. By law, a shop must accept old equipment when you buy a new item.' }
          ]},
          { id: 's2', title: 'Batteries', content: [
            { kind: 'paragraph', text: 'Pilhão — containers in many shops (supermarkets, pharmacies, electronics shops). Obligations depend on whether the outlet sells batteries and on the take-back regime.' }
          ]},
          { id: 's3', title: 'Oil (cooking)', content: [
            { kind: 'paragraph', text: 'Oleão — containers in supermarkets and municipalities. Used oil is handed in inside a plastic bottle. It is recycled into biodiesel.' }
          ]},
          { id: 's4', title: 'Clothing', content: [
            { kind: 'paragraph', text: 'Clothing containers — on streets (orange). H&M/Zara also accept old items in exchange for a discount.' }
          ]},
          { id: 's5', title: 'Furniture and bulky waste (monstros)', content: [
            { kind: 'paragraph', text: 'Collection must be arranged with the municipality by phone or through the Câmara Municipal online form. It is usually free 1-2 times a year. Do not leave items on the street without arranging it — there is a fine for this.' }
          ]},
          { id: 's6', title: 'Construction waste (RCD)', content: [
            { kind: 'paragraph', text: 'Resíduos de construção e demolição (RCD) have a separate regime. Not all ecocentros accept construction waste; there are often volume limits and requirements. If you are doing renovation work yourself, check with the Câmara Municipal; disposal is often paid.' }
          ]},
          { id: 's7', title: 'Medicines', content: [
            { kind: 'paragraph', text: 'Valormed — containers in pharmacies. They accept expired and unwanted medicines.' }
          ]}
        ]}
      ]
    },
    {
      id: 'fines',
      title: 'Fines and infringements',
      content: [
        { kind: 'paragraph', text: 'Under Decreto-Lei n.º 102-D/2020 and municipal regulations, fines apply for contraordenações ambientais (Lei 50/2006). Categories are leve/grave/muito grave; amounts vary substantially for individuals and companies. Check the current version of the law.' },
        { kind: 'checklist', items: [
          '⚠️ Incorrect sorting — formally subject to a fine; in practice, the bag may simply not be collected',
          '⚠️ Bulky waste on the street without a request — fine of €50-250',
          '⚠️ Putting waste out outside the schedule (some areas have set hours)',
          '⚠️ Throwing waste from a car — up to €750',
          '⚠️ Ecocentros accept waste free of charge from citizens with an atestado de residência; for commercial entities — paid'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Practical tips',
      content: [
        { kind: 'checklist', items: [
          '🚮 Rinse leftover contents from packaging — clean packaging is recycled more effectively',
          '📦 Take cardboard boxes apart and flatten them — more will fit in the bin',
          '🔋 Do not throw batteries in ordinary waste — it is dangerous',
          '🛍️ Reusable shopping bag (saco reutilizável) — since 2021, plastic bags in supermarkets have cost 3-10 cents',
          '🏭 Ecocentro — available in every large municipality; you can take anything unusual there',
          '♻️ Composting on a balcony or in a yard — increasingly common among residents; municipalities provide composters free of charge',
          '📱 The “Sociedade Ponto Verde” app — explains what goes where'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'APA — Agência Portuguesa do Ambiente', url: 'https://www.apambiente.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Sociedade Ponto Verde — packaging waste operator', url: 'https://www.pontoverde.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Decreto-Lei n.º 102-D/2020 — Regime Geral da Gestão de Resíduos', url: 'https://dre.pt/dre/detalhe/decreto-lei/102-d-2020', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Directive 2008/98/EC — EU Waste Framework Directive', url: 'https://eur-lex.europa.eu/', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
