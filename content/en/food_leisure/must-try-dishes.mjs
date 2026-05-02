export default {
  editorialVoice: 'hackportugal',
  id: 'must-try-dishes',
  categoryId: 'food_leisure',
  title: 'What you must try in Portugal — by region',
  tldr: 'Portuguese cuisine is very regional. Lisbon: sardines, amêijoas à Bulhão Pato. Porto: Francesinha, Tripas à moda do Porto. Alentejo: cozido, açorda. North: caldo verde. Madeira: espetadas. Azores: cozido das Furnas. The iconic main dish is bacalhau (cod), with its “365 recipes”. And pastéis de nata for dessert — everywhere.',
  tags: ['food', 'dishes', 'cuisine', 'restaurants', 'regions'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'lisbon-center',
      title: 'Lisbon and the central coast',
      content: [
        { kind: 'checklist', items: [
          '🐟 Sardinhas assadas — grilled sardines, in season June–September. The Santo António festival (13.06) is sardine day',
          '🐚 Amêijoas à Bulhão Pato — clams in a garlic and lime broth with coriander',
          '🍲 Bacalhau à Brás — shredded cod with potatoes and egg, the main home-style dish',
          '🍛 Arroz de marisco — seafood rice in tomato sauce',
          '🧀 Queijo da Serra da Estrela — soft DOP sheep’s cheese, from August to March',
          '🥐 Pastéis de nata — custard in crisp pastry, cinnamon on top',
          '🍷 Vinho de Carcavelos — historic fortified white wine from the Cascais area'
        ]}
      ]
    },
    {
      id: 'porto-north',
      title: 'Porto and the north',
      content: [
        { kind: 'checklist', items: [
          '🥪 Francesinha — a monster sandwich with meat, sausage, melted cheese and a beer-and-tomato sauce. A Porto icon',
          '🥬 Caldo verde — kale and potato soup with chouriço. A national winter dish',
          '🐄 Tripas à moda do Porto — tripe with beans. People from Porto are called “tripeiros” because of this dish',
          '🍷 Vinho verde — young, light wine with a slight sparkle, the best regional choice',
          '🍷 Porto — sweet fortified wine, from tawny to vintage. Tasting in the Gaia cellars',
          '🐟 Cabidela — chicken or rabbit cooked in its own blood, a traditional Minho dish',
          '🥖 Bolinhos de bacalhau — cod fritters, a snack found everywhere'
        ]}
      ]
    },
    {
      id: 'alentejo-south',
      title: 'Alentejo and the south',
      content: [
        { kind: 'checklist', items: [
          '🍲 Açorda alentejana — bread soup with egg, coriander, garlic and olive oil',
          '🐷 Carne de porco à alentejana — pork with amêijoas clams. A famous “surf and turf” combination',
          '🐑 Ensopado de borrego — lamb stew served on bread slices',
          '🐷 Presunto de Barrancos — ham from Iberian pigs on an acorn diet, DOP',
          '🍷 Vinhos do Alentejo — full-bodied red wines with Touriga Nacional and Aragonez',
          '🥧 Sericaia with plum — a traditional dessert from Elvas',
          '🍮 Pão de Rala — an almond and pumpkin dessert of convent origin'
        ]}
      ]
    },
    {
      id: 'algarve',
      title: 'Algarve',
      content: [
        { kind: 'checklist', items: [
          '🍲 Cataplana — a copper pot with fish or shellfish in tomato broth. Made for two',
          '🐙 Polvo à lagareiro — octopus baked with olive oil and crushed potatoes',
          '🦐 Gambas à la Plancha — grilled prawns with salt',
          '🐟 Xerém de conquilhas — maize porridge with clams',
          '🍯 Medronho — alcohol made from the strawberry tree, a strong local drink at 48%',
          '🥜 Doces de amêndoa — almond sweets'
        ]}
      ]
    },
    {
      id: 'islands',
      title: 'Madeira and the Azores',
      content: [
        { kind: 'substeps', items: [
          { id: 'mad', title: 'Madeira', content: [
            { kind: 'checklist', items: [
              'Espetada — beef on a bay-wood skewer',
              'Bolo do caco — sweet potato flatbread with garlic butter',
              'Poncha — rum + honey + lemon + local fruit',
              'Lapas — grilled limpets',
              'Vinho da Madeira — fortified wine, famous since the 15th century'
            ]}
          ]},
          { id: 'azr', title: 'Azores', content: [
            { kind: 'checklist', items: [
              'Cozido das Furnas — meat stew cooked in volcanic soil for 6 hours',
              'Queijo de São Jorge — tangy DOP cheese',
              'Bife à Regional — steak with garlic butter and pimenta da terra',
              'Chicharros — small fried fish',
              'Vinho dos Biscoitos — white wine from vineyards on lava'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'bacalhau',
      title: 'Bacalhau — “365 recipes”',
      content: [
        { kind: 'paragraph', text: 'Cod is the most important fish for the Portuguese, even though almost all of it is caught in Norwegian waters. The saying goes: “365 ways to cook bacalhau, one for every day of the year”. Here are the top 6:' },
        { kind: 'checklist', items: [
          'à Brás — shredded with potatoes and egg',
          'à Gomes de Sá — baked in pieces with potatoes and onion',
          'com Natas — in a cream sauce',
          'à Lagareiro — baked with crushed potatoes and olive oil',
          'à Zé do Pipo — baked with mashed potato and mayonnaise',
          'Pastéis de bacalhau — fritters, a snack everywhere'
        ]}
      ]
    },
    {
      id: 'where-to-eat',
      title: 'Where to find authentic food',
      content: [
        { kind: 'checklist', items: [
          '🏠 Tasca — a small local restaurant, low prices, high quality',
          '🍽️ Cervejaria — a beer hall with fresh seafood',
          '🧀 Casa de pasto — daytime lunch with menu do dia (€8–12)',
          '❌ Avoid restaurants with a “tourist menu” and photos of the food outside',
          '✅ Look for places where locals eat: lunch after 13:00, dinner after 20:00',
          '💡 The question “O que é típico aqui?” will unlock the region’s secrets'
        ]},
        { kind: 'warning', text: 'Couvert — snacks on the table (bread, olives, cheese) are NOT free in Portugal; they are always charged for. Refuse them: “no, obrigado”, if you do not want them, otherwise they will appear on the bill.' }
      ]
    }
  ],
  sources: [
    { title: 'Turismo de Portugal — Gastronomy', url: 'https://www.visitportugal.com/pt-pt/experiencias/gastronomia-vinhos', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'UNESCO — Mediterranean diet (PT inclusion)', url: 'https://ich.unesco.org/en/RL/mediterranean-diet-00884', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Wines of Portugal — regions', url: 'https://www.winesofportugal.com/', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}
