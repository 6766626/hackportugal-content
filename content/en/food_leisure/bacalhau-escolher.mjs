export default {
  editorialVoice: 'hackportugal',
  id: 'bacalhau-escolher',
  categoryId: 'food_leisure',
  title: 'Bacalhau: how to choose, soak and cook it',
  tldr: 'Bacalhau in Portugal is salted and dried cod, not fresh fish. In the shop, look not only at the price but also at the size: graúdo for attractive slices, crescido for everyday cooking, miúdo/jovem for bolinhos and salads. The main mistake is not soaking it for long enough: thin pieces need 24–36 hrs, thick lombos 48–72 hrs in the fridge with water changes. For your first time, choose a balcão with pre-cut postas or bacalhau demolhado congelado.',
  tags: ['bacalhau', 'food', 'market', 'recipes'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-bacalhau',
      title: 'What you are buying: not “just cod”',
      content: [
        { kind: 'paragraph', text: 'Portuguese bacalhau is usually cod that has been salted and dried. You cannot cook it straight away like fresh fish: first you need to demolhar — soak it in cold water to remove excess salt and restore moisture to the flesh.' },
        { kind: 'paragraph', text: 'In supermarkets, you will find three formats: a whole “flattened” fish, postas cut at the balcão, and already soaked frozen bacalhau demolhado congelado. For a beginner, the safest option is postas of the same thickness or ready-made demolhado congelado.' },
        { kind: 'warning', text: 'Do not confuse bacalhau fresco with bacalhau salgado seco. Fresh cod is cooked straight away; salted and dried cod will be over-salted and tough without soaking.' }
      ]
    },
    {
      id: 'choose-grade',
      title: 'How to choose size and quality at the counter',
      content: [
        { kind: 'paragraph', text: 'The size category affects thickness, price and recipe. The larger the fish, the better the whole juicy slices — lombos and postas. Smaller bacalhau is cheaper, but is more often used in dishes where the fish is flaked.' },
        { kind: 'checklist', items: [
          'Graúdo — large bacalhau, usually about 2–4 kg: a good choice for postas, forno, consoada, bacalhau com todos.',
          'Crescido — medium size, about 1–2 kg: versatile for à Brás, à Gomes de Sá, salads, the oven.',
          'Miúdo — small, usually up to 1 kg: cheaper, thinner, soaks faster; better for pataniscas, bolinhos, açorda.',
          'Jovem — “young”/small bacalhau: milder flavour, less meaty layers; choose it for everyday dishes, not for festive lombos.',
          'Lombo — the thickest back section: more expensive, but gives attractive juicy pieces.',
          'Posta — a cross-cut piece; convenient to buy at the balcão so that all pieces are the same thickness.',
          'Desfiado / lascas — already separated flakes: convenient for à Brás, but easy to over-salt and dry out.',
          'The colour should be pale straw, not bright chemical white and not yellow-rusty.',
          'The smell should be marine and salty, with no ammonia, rancid fat or raw mould.',
          'The flesh should be dry and firm, without a sticky surface.'
        ] }
      ]
    },
    {
      id: 'where-to-buy',
      title: 'Where to buy: Continente, Pingo Doce, Mercado',
      content: [
        { kind: 'paragraph', text: 'In Portugal, bacalhau is sold all year round, but the biggest displays appear before Natal and Páscoa. In 2026, a good rule of thumb for a beginner is to buy where there is a balcão and a seller who can cut the fish for your recipe.' },
        { kind: 'checklist', items: [
          'Continente Tradicional — convenient for choosing a whole fish and having it cut into postas; often has graúdo/crescido categories and cartão Continente promotions.',
          'Pingo Doce balcão — a good option for cut postas and bacalhau demolhado congelado; convenient for buying a small quantity.',
          'Mercado municipal — best for advice: the seller will suggest what to take for forno, à Brás or Gomes de Sá.',
          'Traditional fish lojas — often more expensive than a supermarket, but better cutting and thickness control.',
          'For your first purchase, do not buy a whole fish if you do not know how to cut it up and where to store it.',
          'If you live alone, take 2–4 postas or a pack of demolhado congelado, not a 3-kilogram peça.',
          'Check the price per kg: promotions on whole fish can look good value, but part of it will go on the tail, skin and bones.',
          'Frozen demolhado is more expensive per kg, but saves 2–3 days and reduces the risk of over-salting.'
        ] }
      ]
    },
    {
      id: 'demolha-times',
      title: 'Demolha: how long to soak and how not to spoil it',
      content: [
        { kind: 'paragraph', text: 'Soak only in the fridge, not on the counter. The idea is simple: cold water draws out the salt, and the flesh absorbs moisture. The thicker the piece, the longer it takes. Pieces of different thicknesses are best soaked separately.' },
        { kind: 'checklist', items: [
          'Rinse the bacalhau of surface salt under cold water.',
          'Cut into pieces of the same thickness if it is a whole peça.',
          'Place in a large bowl or container and cover completely with cold water.',
          'Keep in the fridge at 0–5 °C.',
          'Change the water 2–3 times a day; for thick lombos, more often during the first day.',
          'Desfiado / lascas: 6–12 hrs, sometimes 4–6 hrs is enough if the flakes are thin.',
          'Thin postas and the tail section: 24–36 hrs.',
          'Medium crescido pieces: 36–48 hrs.',
          'Thick graúdo lombos: 48–72 hrs.',
          'Before cooking, pinch off a small piece and boil it quickly for 1 minute, or taste it after heat treatment: the flavour should be salty, but not “burning”.'
        ] },
        { kind: 'warning', text: 'Do not soak at room temperature “to make it faster”. This is fish: in a warm kitchen, the risk of spoilage increases. If you have no time, buy bacalhau demolhado congelado.' }
      ]
    },
    {
      id: 'cook-classics',
      title: 'Three classics: à Brás, à Gomes de Sá, com natas',
      content: [
        { kind: 'paragraph', text: 'After demolha, bacalhau is usually not fried “like a steak” straight away. It is lightly boiled, baked or flaked. For most home recipes, 150–200 g of soaked bacalhau per person is enough if there are potatoes, eggs or cream.' },
        { kind: 'substeps', items: [
          {
            id: 'bras',
            title: 'Bacalhau à Brás',
            content: [
              { kind: 'paragraph', text: 'The easiest start. You need bacalhau flakes, onion, garlic, batata palha, eggs, parsley and olives. The fish is warmed with onion for 3–5 minutes, then the potato sticks and eggs are added, and the pan is taken off the heat while the mixture is still creamy.' },
              { kind: 'warning', text: 'Do not salt in advance: bacalhau and batata palha are already salty. Add salt only at the end after tasting.' }
            ]
          },
          {
            id: 'gomes-de-sa',
            title: 'Bacalhau à Gomes de Sá',
            content: [
              { kind: 'paragraph', text: 'A Portuguese classic from Porto: flaked bacalhau, boiled potato slices, onion, garlic, azeite, hard-boiled eggs, olives and parsley. Good for crescido or graúdo, where the flesh separates into large layers.' }
            ]
          },
          {
            id: 'natas',
            title: 'Bacalhau com natas',
            content: [
              { kind: 'paragraph', text: 'A bake: bacalhau flakes, diced potatoes or potato sticks, onion, béchamel/cream, a little nutmeg and cheese if desired. Bake until golden. This is a good recipe if the bacalhau turned out slightly drier than you wanted.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'storage-mistakes',
      title: 'Storage and common mistakes',
      content: [
        { kind: 'checklist', items: [
          'Store salted and dried bacalhau in the fridge or in a cool dry place according to the shop’s instructions; at home, it is better not to keep it for weeks in a warm pantry.',
          'After starting demolha, the fish must be in the fridge the whole time.',
          'Cook soaked bacalhau within 24–48 hrs or freeze it in portions.',
          'If the fish is still too salty after soaking, change the water and give it another 6–12 hrs.',
          'If you have soaked it too much, the flavour will become watery: azeite, onion, garlic, bay leaf and a “richer” com natas recipe help rescue it.',
          'Do not boil bacalhau for a long time: it becomes dry and fibrous. Often it is enough to bring the water almost to the boil and let it stand for 5–10 minutes.',
          'Remove bones after brief heating: this makes the flesh easier to separate into large flakes.',
          'For children and guests, it is better to use lombos or well-cleaned boneless lascas.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Bacalhau salgado seco miúdo/crescido', amountEURMin: 8, amountEURMax: 14, note: 'Guide price per kg in supermarkets, including promotions and standard shelves; depends on season and size.' },
    { label: 'Bacalhau graúdo / lombos', amountEURMin: 14, amountEURMax: 25, note: 'Guide price per kg; thick lombos and festive categories are more expensive.' },
    { label: 'Bacalhau demolhado congelado', amountEURMin: 10, amountEURMax: 20, note: 'Per kg; more expensive than dried, but already soaked and convenient for beginners.' }
  ],
  sources: [
    {
      title: 'Confraria do Bacalhau — bacalhau culture, types and traditions',
      url: 'https://www.confrariadobacalhau.pt',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ASAE — consumer advice on food safety',
      url: 'https://www.asae.gov.pt/seguranca-alimentar/conselhos-aos-consumidores.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Continente — bacalhau section and Continente Tradicional products',
      url: 'https://www.continente.pt',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Pingo Doce — recipes for bacalhau à Brás, à Gomes de Sá and com natas',
      url: 'https://www.pingodoce.pt/receitas/',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
