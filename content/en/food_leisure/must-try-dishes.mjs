export default {
  editorialVoice: 'hackportugal',
  id: 'must-try-dishes',
  categoryId: 'food_leisure',
  title: 'Must-try dishes in Portugal — by region',
  tldr: 'Portuguese cuisine is highly regional. Lisbon: sardines, amêijoas à Bulhão Pato. Porto: Francesinha, Tripas à moda do Porto. Alentejo: cozido, açorda. North: caldo verde. Madeira: espetadas. Azores: cozido das Furnas. The iconic flagship dish is bacalhau (cod), with “365 recipes”. And pastéis de nata for dessert — everywhere.',
  tags: ['food', 'dishes', 'cuisine', 'restaurants', 'regions'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'lisbon-center',
      title: 'Lisbon and the central coast',
      content: [
        { kind: 'checklist', items: [
          '🐟 Sardinhas assadas — grilled sardines, season June–September. Santo António festival (13.06) — sardine day',
          '🐚 Amêijoas à Bulhão Pato — clams in a garlicky lime broth with coriander',
          '🍲 Bacalhau à Brás — shredded cod with shoestring potatoes and egg, the home classic',
          '🍛 Arroz de marisco — seafood rice in a tomato base',
          '🧀 Queijo da Serra da Estrela — a soft sheep’s cheese (DOP), August to March',
          '🥐 Pastéis de nata — custard tarts in crisp pastry, dusted with cinnamon',
          '🍷 Vinho de Carcavelos — historic fortified white wine from the Cascais area'
        ]}
      ]
    },
    {
      id: 'porto-north',
      title: 'Porto and the north',
      content: [
        { kind: 'checklist', items: [
          '🥪 Francesinha — a monster sandwich with meats, sausage, melted cheese and a beer–tomato sauce. An icon of Porto',
          '🥬 Caldo verde — soup of kale and potato with chouriço. A national winter staple',
          '🐄 Tripas à moda do Porto — tripe with beans. People from Porto are nicknamed “tripeiros” because of it',
          '🍷 Vinho verde — young, light wine with a slight spritz, the best regional choice',
          '🍷 Porto — sweet fortified wine, from tawny to vintage. Tastings in the Gaia lodges',
          '🐟 Cabidela — chicken or rabbit in its own blood, a traditional dish of Minho',
          '🥖 Bolinhos de bacalhau — cod fritters, a snack everywhere'
        ]}
      ]
    },
    {
      id: 'alentejo-south',
      title: 'Alentejo and the south',
      content: [
        { kind: 'checklist', items: [
          '🍲 Açorda alentejana — bread soup with egg, coriander, garlic and olive oil',
          '🐷 Carne de porco à alentejana — pork with amêijoas clams. The famous “surf and turf” pairing',
          '🐑 Ensopado de borrego — stewed lamb over bread slices',
          '🐷 Presunto de Barrancos — ham from acorn-fed Iberian pigs, DOP',
          '🍷 Vinhos do Alentejo — full-bodied red wines with Touriga Nacional and Aragonez',
          '🥧 Sericaia with plum — a traditional dessert from Elvas',
          '🍮 Pão de Rala — almond-and-pumpkin convent dessert'
        ]}
      ]
    },
    {
      id: 'algarve',
      title: 'Algarve',
      content: [
        { kind: 'checklist', items: [
          '🍲 Cataplana — a copper pot dish with fish or shellfish in a tomato broth. Made for two',
          '🐙 Polvo à lagareiro — octopus baked with olive oil and smashed potatoes',
          '🦐 Gambas à la Plancha — grilled prawns with salt',
          '🐟 Xerém de conquilhas — cornmeal porridge with clams',
          '🍯 Medronho — spirit from the strawberry tree, a local strong drink at 48%',
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
              'Espetada — beef on a bay-laurel skewer',
              'Bolo do caco — sweet-potato flatbread with garlic butter',
              'Poncha — rum + honey + lemon + local fruit',
              'Lapas — grilled limpets',
              'Vinho da Madeira — fortified wine, famous since the 15th century'
            ]}
          ]},
          { id: 'azr', title: 'Azores', content: [
            { kind: 'checklist', items: [
              'Cozido das Furnas — meat stew cooked in volcanic soil for 6 hours',
              'Queijo de São Jorge — sharp DOP cheese',
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
        { kind: 'paragraph', text: 'Cod is the most important fish for the Portuguese, though almost all of it is caught in Norwegian waters. Saying: “365 ways to cook bacalhau, one for each day of the year”. Here are the top 6:' },
        { kind: 'checklist', items: [
          'à Brás — shredded with shoestring potatoes and egg',
          'à Gomes de Sá — in chunks with potato and onion, baked',
          'com Natas — in a cream sauce',
          'à Lagareiro — baked with smashed potatoes and olive oil',
          'à Zé do Pipo — with mashed potatoes and mayonnaise, baked',
          'Pastéis de bacalhau — fritters, a snack everywhere'
        ]}
      ]
    },
    {
      id: 'where-to-eat',
      title: 'Where to find authentic food',
      content: [
        { kind: 'checklist', items: [
          '🏠 Tasca — small local eatery, low prices, high quality',
          '🍽️ Cervejaria — beer hall with fresh seafood',
          '🧀 Casa de pasto — daytime lunch with menu do dia (€8–12)',
          '❌ Avoid restaurants with a “tourist menu” and food photos outside',
          '✅ Look for places where locals eat: lunch after 13:00, dinner after 20:00',
          '💡 The question “O que é típico aqui?” will unlock the region’s secrets'
        ]},
        { kind: 'warning', text: 'Couvert — the nibbles set on the table (bread, olives, cheese) in Portugal are NOT free; they are always charged. Decline: “não, obrigado” if you do not want them, otherwise they will be on the bill.' }
      ]
    }
  ],
  sources: [
    { title: 'Turismo de Portugal — Gastronomy', url: 'https://www.visitportugal.com/en/experiencias/gastronomia-e-vinhos', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'UNESCO — Mediterranean diet (PT inclusion)', url: 'https://ich.unesco.org/en/RL/mediterranean-diet-00884', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Wines of Portugal — regions', url: 'https://www.winesofportugal.com/', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 365
}
