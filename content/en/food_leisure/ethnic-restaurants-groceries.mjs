export default {
  editorialVoice: 'hackportugal',
  id: 'ethnic-restaurants-groceries',
  categoryId: 'food_leisure',
  title: 'Ethnic food — where to buy Russian, Georgian and Brazilian products',
  tldr: 'In Lisbon and Porto there are shops with CIS products (Slavyanka, Bazar Russo, Euromercado), Georgian restaurants (Karater Lisboa, Batumi, Adjara), and Brazilian supermarkets (Brasa, Brasileirinho). Delivery of “Russian” products from Spain — Tiendas de Rusia (Madrid), 2-3 days. Continente / Pingo Doce have an international section with a basic selection: buckwheat, herring, tinned fish. Georgian wines — Gartinha; Lidl runs a promotion once a year.',
  tags: ['ethnic food', 'russian groceries', 'georgian', 'brazilian'],
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
              '**Euromercado** (Amadora) — large shop with a broad range, lower prices',
              '**Basic range**: in Continente (Arroios, Cascais), Pingo Doce (Saldanha) — international section',
              'Typical prices: buckwheat €4-6/kg, herring €8-10/kg, black caviar (imitation) €5-15/jar, sweets €15-25/kg'
            ]}
          ]},
          { id: 'r2', title: 'Porto', content: [
            { kind: 'checklist', items: [
              '**Loja Lusitana-Russa** (Bonfim area)',
              '**Shop Slavia** (Areosa) — smaller, but sufficient',
              'In Braga, Coimbra — limited choice; products are brought in from Lisbon/Porto'
            ]}
          ]},
          { id: 'r3', title: 'Algarve', content: [
            { kind: 'paragraph', text: 'Quartas de Avila (Lagoa), Lidl/Continente Albufeira have an international section. There is no full-scale Russian shop — many expats order online from Lisbon with CTT delivery.' }
          ]},
          { id: 'r4', title: 'Online and delivery', content: [
            { kind: 'checklist', items: [
              '**Tiendas de Rusia** (Madrid, Spain) — tiendasdeRusia.es, delivery to PT in 2-3 days, free from €30',
              '**RusKiosk** (Lisboa) — online orders with delivery across PT',
              '**Amazon PT/ES** — some brands (sprats, jam)',
              '**Glovo** — Slavyanka offers delivery within a 5-10 km radius'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'georgian',
      title: '🇬🇪 Georgian cuisine',
      content: [
        { kind: 'paragraph', text: 'The Georgian diaspora in Portugal is relatively small but active — 5-7 restaurants are open in Lisbon and Porto.' },
        { kind: 'substeps', items: [
          { id: 'g1', title: 'Restaurants in Lisbon', content: [
            { kind: 'checklist', items: [
              '**Karater** (Príncipe Real) — the best known, khachapuri, khinkali, pkhali, qvevri wine, €20-35/person',
              '**Suliko** (Intendente) — affordable format, large portions, €15-25',
              '**Sakartvelo** (Saldanha) — new, full menu, €18-30',
              '**Batumi** (Anjos) — Georgian-Caucasian fusion',
              '**Tbilisi Cafe** (Cais do Sodré) — café-bistro, €10-15'
            ]}
          ]},
          { id: 'g2', title: 'Porto', content: [
            { kind: 'checklist', items: [
              '**Adjara** (Ribeira) — varied khachapuri, €15-25',
              '**Tamar Gurmani** (Boavista) — homely atmosphere'
            ]}
          ]},
          { id: 'g3', title: 'Georgian products', content: [
            { kind: 'checklist', items: [
              'Spices (khmeli-suneli, utskho-suneli): in Slavyanka, eastern shops in Martim Moniz',
              'Tomato purée, adjika: same places',
              '**Georgian wines**: Gartinha (distribution in shops), annual Lidl Plus promotion with Kindzmarauli, Saperavi',
              'Tkemali (plum), Adjika — in online shops + Continente gourmet section',
              'Grushal khachapuri dough: not sold ready-made; you need to make it from scratch'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'brazilian',
      title: '🇧🇷 Brazilian products — the widest selection',
      content: [
        { kind: 'paragraph', text: 'The Brazilian diaspora is >500,000 — products and restaurants are everywhere.' },
        { kind: 'checklist', items: [
          '**Brasa** — chain of Brazilian supermarkets, Lisbon/Porto/Algarve',
          '**Brasileirinho** (Almada, Porto Barredo) — full range of Brazilian goods',
          '**Big Supermercado Brasileiro** (Albufeira, Algarve)',
          '**In Continente / Pingo Doce** — a large **Brasileirinho corner**: farofa, tapioca, feijão preto, pão de queijo mix, guaraná Antarctica, caju caju, mandioca',
          '**Meat**: picanha, fraldinha in all meat sections',
          '**Restaurants**: Copacabana (Saldanha), Rodízio do Brasil (many locations) — unlimited churrasco €20-30',
          '**Açaí stalls**: Guavaberry, Berri — popularity is growing'
        ]}
      ]
    },
    {
      id: 'other',
      title: '🌏 Other ethnic options',
      content: [
        { kind: 'checklist', items: [
          '🇺🇦 **Ukrainian**: in many Russian shops (borscht kit, Korolivskyi cheese). Separate “Ukraina” shop in Almada',
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
          '📅 **Festivals**: Festa do Brasil (July), Festival Grátis Tbilisi (varies), Slava in March with Ukrainian products',
          '👨‍👩‍👧 **Martim Moniz** — Lisbon’s multi-ethnic district — products from every continent, best prices',
          '💰 **Prices**: ethnic products are ~30-70% more expensive than in the country of origin (import costs)',
          '🚚 **Large orders** from Spain (Madrid) — often brought by bus/through shared car trips, saving 20-30%',
          '📱 **Facebook groups**: “Russian products in Portugal”, “Georgian Community Portugal” — sale/exchange',
          '🍷 **Georgian wine in Lidl** — Kindzmarauli and Saperavi are usually in mid-August, keep an eye on the folheto'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Typical supermarket shop', amountEURMin: 30, amountEURMax: 80 },
    { label: 'Georgian restaurant (2 people)', amountEURMin: 35, amountEURMax: 70 },
    { label: 'Tiendas de Rusia delivery from ES', amountEUR: 0, note: 'free from €30' }
  ],
  sources: [
    { title: 'Visit Lisboa — Ethnic restaurants', url: 'https://www.visitlisboa.com/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Tiendas de Rusia (ES delivery to PT)', url: 'https://www.tiendasderusia.es/', kind: 'company', language: 'ru', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}
