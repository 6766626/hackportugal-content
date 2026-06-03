export default {
  editorialVoice: 'hackportugal',
  id: 'must-try-dishes',
  categoryId: 'food_leisure',
  title: 'Must-try dishes in Portugal — by region',
  tldr: 'Portuguese cuisine is highly regional. Lisbon: sardines, amêijoas à Bulhão Pato. Porto: Francesinha, Tripas à moda do Porto. Alentejo: açorda, migas, ensopado de borrego, carne de porco à alentejana. North: caldo verde. Madeira: espetadas. Azores: cozido das Furnas. The iconic main dish is bacalhau (cod), said to have “365 recipes”. And pastéis de nata for dessert — everywhere.',
  tags: ['food', 'dishes', 'cuisine', 'restaurants', 'regions'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'lisbon-center',
      title: 'Lisbon and the central coast',
      content: [
        { kind: 'checklist', items: [
          '🐟 Sardinhas assadas — grilled sardines, in season June–September. The Santo António festival (13.06) is sardine day',
          '🐚 Amêijoas à Bulhão Pato — clams in a sauce of garlic, olive oil, coriander and lemon',
          '🍲 Bacalhau à Brás — shredded cod with potatoes and egg, the essential home-style dish',
          '🍛 Arroz de marisco — seafood rice in tomato sauce',
          '🧀 Queijo Serra da Estrela DOP — soft sheep’s cheese from the Serra da Estrela region; the best season is usually late autumn to spring',
          '🥐 Pastéis de nata — custard cream in crisp pastry, cinnamon on top',
          '🍷 Vinho de Carcavelos — a historic fortified DOC wine from the Oeiras/Cascais area, more often white/amber, but not strictly only white'
        ]}
      ]
    },
    {
      id: 'porto-north',
      title: 'Porto and the north',
      content: [
        { kind: 'checklist', items: [
          '🥪 Francesinha — a monster sandwich with meat, sausage, melted cheese and a beer-and-tomato sauce. A Porto icon',
          '🥬 Caldo verde — soup made with kale and potato, with chouriço. A national winter dish',
          '🐄 Tripas à moda do Porto — tripe with beans. People from Porto are called “tripeiros” because of this dish',
          '🍷 Vinho Verde — wine from north-west Portugal; often light, fresh and slightly sparkling, but there are also more complex styles, especially Alvarinho and Loureiro',
          '🍷 Porto — sweet fortified wine, from tawny to vintage. Taste it in the Gaia cellars',
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
          '🐷 Carne de porco à alentejana — pork with amêijoas. A famous “sea and land” combination',
          '🐑 Ensopado de borrego — lamb stew served over pieces of bread',
          '🐷 Presunto de Barrancos — ham from Iberian pigs fed on acorns, DOP',
          '🍷 Vinhos do Alentejo — full-bodied red wines with Touriga Nacional and Aragonez',
          '🥧 Sericaia with plum — a traditional dessert from Elvas',
          '🍮 Pão de Rala — a convent dessert made with almonds, egg yolks and doce de gila/chila'
        ]}
      ]
    },
    {
      id: 'algarve',
      title: 'Algarve',
      content: [
        { kind: 'checklist', items: [
          '🍲 Cataplana — a copper pot with fish or shellfish in tomato broth. Cooked for two',
          '🐙 Polvo à lagareiro — octopus baked with olive oil and crushed potatoes',
          '🦐 Gambas grelhadas / camarão grelhado — grilled prawns with salt and lemon',
          '🐟 Xerém de conquilhas — corn porridge with shellfish',
          '🍯 Medronho — strong aguardente made from the fruit of the strawberry tree, usually around 40–50% ABV',
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
              'Espetada — beef on a laurel-wood skewer',
              'Bolo do caco — a wheat flatbread with added sweet potato, usually served with garlic butter',
              'Poncha — aguardente de cana da Madeira + honey + lemon/orange; there are versions with passion fruit and other fruits',
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
              'Vinho dos Biscoitos — white wine from vineyards grown on lava'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'bacalhau',
      title: 'Bacalhau — “365 recipes”',
      content: [
        { kind: 'paragraph', text: 'Cod is the most important fish for the Portuguese, although Portugal itself catches very little of it: bacalhau is mainly imported from the North Atlantic, especially from Norway and Iceland. The saying goes: “365 ways to cook bacalhau, one for every day of the year”. Here are the top 6:' },
        { kind: 'checklist', items: [
          'à Brás — shredded with potatoes and egg',
          'à Gomes de Sá — in pieces with potato and onion, baked',
          'com Natas — in a cream sauce',
          'à Lagareiro — baked with crushed potatoes and olive oil',
          'à Zé do Pipo — with mashed potato and mayonnaise, baked',
          'Pastéis de bacalhau — fritters, a snack found everywhere'
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
          '🧀 Casa de pasto — daytime lunch with menu do dia, often around €10–15 (sometimes cheaper in smaller towns, more expensive in tourist areas)',
          '❌ Avoid restaurants with a “tourist menu” and photos of food outside',
          '✅ Look for places where locals eat: lunch after 13:00, dinner after 20:00',
          '💡 The question “O que é típico aqui?” will unlock the region’s secrets'
        ]},
        { kind: 'warning', text: 'Couvert in Portugal is usually charged if you consume it. If you do not want it, refuse it straight away and do not eat it; you do not have to pay for unsolicited, untouched appetisers. The couvert price must be shown on the menu/price list.' }
      ]
    }
  ],
  sources: [
    { title: 'Turismo de Portugal — Gastronomy', url: 'https://www.visitportugal.com/en/experiencias/gastronomia-e-vinhos', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'UNESCO — Mediterranean diet (PT inclusion)', url: 'https://ich.unesco.org/en/RL/mediterranean-diet-00884', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Wines of Portugal — regions', url: 'https://www.winesofportugal.com/', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
