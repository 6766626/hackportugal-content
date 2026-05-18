export default {
  editorialVoice: 'hackportugal',
  id: 'ethnic-restaurants-groceries',
  categoryId: 'food_leisure',
  title: 'Ethnic food — where to buy Russian, Georgian and Brazilian products',
  tldr: 'In Lisbon and Porto there are shops with CIS products (Slavyanka, Bazar Russo, Euromercado), Georgian restaurants, and Brazilian supermarkets (Brasa, Brasileirinho)\.\n\nDelivery from Spain — Tiendas de Rusia (Madrid): timings and cost depend on the address/weight/promotions; check at checkout. Some large Continente/Pingo Doce stores sometimes have individual Eastern European products, but the range is inconsistent. Georgian wine is sometimes found in specialised wine shops and in temporary Lidl/other chain promotions; check the current folheto.',
  tags: ['ethnic food', 'russian products', 'georgian', 'brazilian'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'russian-shops',
      title: '🇷🇺 Russian / Ukrainian / Belarusian products',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: 'Lisbon', content: [
            { kind: 'checklist', items: [
              '**Slavyanka** (Av. Almirante Reis, Arroios) — the largest shop. Herring, buckwheat, tvorog, sour cream, sausages, sweets, Stolichnaya vodka',
              '**Bazar Russo** (Rua Gonçalo Mendes da Maia, Picoas) — smaller, but closer to the centre',
              '**Euromercado** (Amadora) — a large shop with a wide range and lower prices',
              '**Minimum range**: some large Continente/Pingo Doce stores sometimes have individual Eastern European products, but the range is inconsistent; for buckwheat/herring it is more reliable to go to specialist shops',
              'Typical prices: buckwheat €4-€6/kg, herring €8-€10/kg, black caviar (imitation) €5-€15/jar, sweets €15-€25/kg'
            ]}
          ]},
          { id: 'r2', title: 'Porto', content: [
            { kind: 'checklist', items: [
              '**Loja Lusitana-Russa** (Bonfim area)',
              '**Shop Slavia** (Areosa) — smaller, but sufficient',
              'In Braga, Coimbra — limited choice, supplied from Lisbon/Porto'
            ]}
          ]},
          { id: 'r3', title: 'Algarve', content: [
            { kind: 'paragraph', text: 'There is no full-size large Russian shop in the Algarve — many expats order online from Lisbon with CTT delivery. Check current locations in local Facebook/Telegram groups before travelling.' }
          ]},
          { id: 'r4', title: 'Online and delivery', content: [
            { kind: 'checklist', items: [
              '**Tiendas de Rusia** (Spain) — deliver to Portugal; timings and cost depend on the address/weight/promotions, check at checkout',
              '**RusKiosk** (Lisboa) — online orders with delivery across PT',
              '**Amazon PT/ES** — some brands (sprats, jam)',
              '**Glovo** — Slavyanka has delivery within a 5-10 km radius'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'georgian',
      title: '🇬🇪 Georgian cuisine',
      content: [
        { kind: 'paragraph', text: 'The Georgian diaspora in Portugal is relatively small but active — there are 5-7 restaurants open in Lisbon and Porto.' },
        { kind: 'substeps', items: [
          { id: 'g1', title: 'Restaurants in Lisbon', content: [
            { kind: 'checklist', items: [
              '**Karater** (Príncipe Real) — the best known, khachapuri, khinkali, pkhali, qvevri wine, €20-€35/person',
              '**Suliko** (Intendente) — affordable format, large portions, €15-€25',
              '**Sakartvelo** (Saldanha) — new, full menu, €18-€30',
              '**Batumi** (Anjos) — Georgian-Caucasian fusion',
              '**Tbilisi Cafe** (Cais do Sodré) — café-bistro, €10-€15'
            ]}
          ]},
          { id: 'g2', title: 'Porto', content: [
            { kind: 'checklist', items: [
              '**Adjara** (Ribeira) — various khachapuri, €15-€25',
              '**Tamar Gurmani** (Boavista) — homely comfort'
            ]}
          ]},
          { id: 'g3', title: 'Georgian products', content: [
            { kind: 'checklist', items: [
              'Spices (khmeli-suneli, utskho-suneli): in Slavyanka, Eastern shops in Martim Moniz',
              'Tomato purée, adjika: same places',
              '**Georgian wines**: sometimes found in specialised wine shops and in temporary Lidl/other chain promotions; check the current folheto',
              'Tkemali (plum), Adjika — in online shops + Continente gourmet section',
              'Ready-made dough/semi-prepared products for khachapuri are rare; more often people cook from scratch or use ordinary yeast/puff pastry from the supermarket'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'brazilian',
      title: '🇧🇷 Brazilian products — the widest offer',
      content: [
        { kind: 'paragraph', text: 'Brazilians are the largest foreign community in Portugal; the exact current population is best checked via AIMA/INE. Products and restaurants are everywhere.' },
        { kind: 'checklist', items: [
          '**Brasa** — chain of Brazilian supermarkets, Lisbon/Porto/Algarve',
          '**Brasileirinho** (Almada, Porto Barredo) — full range of Brazilian goods',
          '**Big Supermercado Brasileiro** (Albufeira, Algarve)',
          '**In large Continente/Pingo Doce stores** there are often individual Brazilian products: farofa, tapioca, feijão preto, guaraná, pão de queijo mix, mandioca, caju; the range depends on the shop',
          '**Meat**: picanha, fraldinha in all meat sections',
          '**Restaurants**: Copacabana (Saldanha), Rodízio do Brasil (many locations) — unlimited churrasco €20-€30',
          '**Açaí shops**: Guavaberry, Berri — popularity is growing'
        ]}
      ]
    },
    {
      id: 'other',
      title: '🌏 Other ethnic',
      content: [
        { kind: 'checklist', items: [
          '🇺🇦 **Ukrainian**: in many Russian shops (borscht set, Korolivskyi cheese). Separate Ukraina shop in Almada',
          '🇮🇳 **Indian**: Martim Moniz / Intendente — ~10 shops (masala, dal, basmati, paneer). Restaurants everywhere',
          '🇨🇳 **Chinese**: Martim Moniz / Chelas — China-Plus supermarkets, spices, sauces, noodles',
          '🇲🇽 **Mexican**: Continente gourmet section + Amazon; you can manage without tortillas',
          '🇮🇹 **Italian**: Continente gourmet sections + specialist shops (Flavio in Chiado)',
          '🇵🇰 **Pakistani / Bangladeshi**: Martim Moniz, halal meat',
          '🇪🇹 **African** (Cape Verdean, Angolan): Mercado da Galiza, Bairro Alto',
          '🇯🇵 **Japanese**: Tsukiji (Liberdade), ShigShu (Saldanha), Mitsuba Mini (Estrela)',
          '🇰🇷 **Korean**: Muru (Bairro Alto), Korean Grocery (Saldanha) — kimchi, soju, ramen'
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Tips',
      content: [
        { kind: 'checklist', items: [
          '📅 **Festivals**: follow the listings from Casa da América Latina, Lisboa/Porto municipalities, Ukrainian and Georgian community groups; food festival dates change annually',
          '👨‍👩‍👧 **Martim Moniz** — Lisbon’s multi-ethnic district — products from all continents, best prices',
          '💰 **Prices**: ethnic products are ~30-70% more expensive than in the country of origin (import costs)',
          '🚚 **Large orders** from Spain (Madrid) — often brought by bus/via shared car trips, saving 20-30%',
          '📱 **Facebook groups**: “Russian products in Portugal”, “Georgian Community Portugal” — sale/exchange',
          '🍷 **Georgian wine** sometimes appears in Lidl/other chains as part of temporary wine promotions; check the folheto and the Lidl Plus app'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Typical supermarket trip', amountEURMin: 30, amountEURMax: 80 },
    { label: 'Georgian restaurant (2 people)', amountEURMin: 35, amountEURMax: 70 },
    { label: 'Tiendas de Rusia delivery from ES', amountEURMin: 5, amountEURMax: 25, note: 'depends on weight/address; there are promotions with free delivery from a certain amount — check when ordering' }
  ],
  sources: [
    { title: 'Visit Lisboa — Ethnic restaurants', url: 'https://www.visitlisboa.com/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Tiendas de Rusia (ES delivery to PT)', url: 'https://www.tiendasderusia.es/', kind: 'company', language: 'ru', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
