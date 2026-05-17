export default {
  editorialVoice: 'hackportugal',
  id: 'traditional-dishes',
  categoryId: 'food_leisure',
  title: 'What to try from Portuguese cuisine',
  tldr: 'The essentials are bacalhau (cod, “1,001 recipes”), sardinhas assadas (sardines in Lisbon in summer), cozido à portuguesa (mixed meats), francesinha (Porto’s signature dish), arroz de marisco (seafood rice), leitão da Bairrada (suckling pig). For dessert: pastel de nata everywhere, ovos moles in Aveiro.',
  tags: ['food', 'cuisine', 'bacalhau', 'pastel de nata'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'must-try',
      title: 'TOP 10: what you must try',
      content: [
        { kind: 'checklist', items: [
          '🐟 Bacalhau à Brás — cod with potatoes, egg and onion (a classic)',
          '🐟 Bacalhau com Natas — cod baked with a cream sauce',
          '🐟 Bacalhau à Lagareiro — cod baked with olive oil and “baby potatoes”',
          '🐟 Sardinhas Assadas — charcoal-grilled sardines (June-September, cheaper in taverns)',
          '🐟 Arroz de Marisco — seafood rice, a classic of coastal Portugal',
          '🍖 Cozido à Portuguesa — boiled meats, sausages, vegetables, chickpeas',
          '🍖 Leitão da Bairrada — spit-roasted suckling pig (Bairrada region)',
          '🥪 Francesinha — a sandwich with meat, cheese and sauce; an egg is often added on top (Porto, a must-try)',
          '🍲 Caldo Verde — soup with kale and chouriço sausage (everywhere)',
          '🥟 Pastéis de Bacalhau — fried cod and potato croquettes (a snack)'
        ]}
      ]
    },
    {
      id: 'desserts',
      title: 'Desserts',
      content: [
        { kind: 'checklist', items: [
          '🥧 Pastel de Nata — custard cream in crisp pastry (the best are Pastéis de Belém, the original)',
          '🥚 Ovos Moles de Aveiro — egg yolk + sugar, in a wafer shell (IGP/PGI Aveiro)',
          '🧁 Queijadas de Sintra — curd cheese cakes',
          '🌰 Castanhas assadas — roasted chestnuts (November-January)',
          '🍮 Leite-Creme — Portuguese crème brûlée',
          '🍰 Bolo Rei — Christmas cake with dried fruit (December-January)',
          '🍧 Arroz Doce — sweet rice with cinnamon'
        ]}
      ]
    },
    {
      id: 'drinks',
      title: 'Drinks',
      content: [
        { kind: 'substeps', items: [
          { id: 'd1', title: 'Coffee', content: [
            { kind: 'checklist', items: [
              'Bica (Lisbon) / Cimbalino (Porto) — espresso, usually around €0.90–1.30 in ordinary cafés, more expensive in tourist areas',
              'Meia de Leite — half espresso, half milk, in a cup',
              'Galão — large coffee with milk (in a glass)',
              'Abatanado — “long” coffee, Americano',
              'Pingado — espresso with a drop of milk'
            ]}
          ]},
          { id: 'd2', title: 'Wine', content: [
            { kind: 'checklist', items: [
              'Vinho Verde — light “green” wine (northern Portugal, best served chilled)',
              'Douro DOC — full-bodied red',
              'Alentejo — rich red',
              'Port wine (Porto) — dessert wine, Ruby / Tawny / Vintage',
              'Madeira — fortified wine from Madeira: from dry to sweet, often as an aperitif or dessert wine',
              'Bairrada espumante — sparkling wine, most often white or rosé'
            ]}
          ]},
          { id: 'd3', title: 'Other', content: [
            { kind: 'checklist', items: [
              'Ginjinha — cherry liqueur (Lisbon, small A Ginjinha bars near Rossio)',
              'Licor Beirão — Portuguese herbal liqueur',
              'Sumol / Compal — fruit nectars',
              'Água com gás / sem gás — sparkling / still water'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'regional',
      title: 'Regional specialities',
      content: [
        { kind: 'checklist', items: [
          'North-West (Porto, Minho) — francesinha, caldo verde, bacalhau com broa',
          'Centre (Coimbra, Aveiro) — ovos moles, leitão, chanfana (kid/goat stewed in red wine)',
          'Lisbon and Setúbal — bifana (pork sandwich), caracóis (snails in summer)',
          'Alentejo — porco preto (black pork), migas, açorda',
          'Algarve — seafood, cataplana, doce fino',
          'Madeira — espetada (meat on a skewer), bolo do caco (bread)',
          'Azores — cozido das Furnas (volcanic cozido)'
        ]}
      ]
    },
    {
      id: 'etiquette',
      title: 'Etiquette',
      content: [
        { kind: 'checklist', items: [
          'Bread, olives, butter and pâtés may be put on the table as couvert, but they are charged if you eat them; prices must be on the menu. If you do not want them, say “não, obrigado” straight away and ask for them to be removed',
          'Main lunch 13:00-15:00, dinner 20:00-22:00',
          'Coffee is after dessert, never with food',
          'Tips are not mandatory: in cafés people usually round up, while in a restaurant you can leave a small amount or around 5–10% for good service',
          'Menu do dia/prato do dia is usually the most budget-friendly lunch: around €9–15 depending on the city and neighbourhood',
          'On the bill, “IVA incluído” means VAT is already included in the price. A separate “taxa de serviço” is only possible if stated in advance',
          'Asking for the bill: “A conta, por favor”'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Turismo de Portugal — Gastronomy', url: 'https://www.visitportugal.com/pt-pt/experiencias/gastronomia-e-vinhos', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DGAV — food safety', url: 'https://www.dgav.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DGADR — DOP/IGP: protected names and traditional products', url: 'https://www.dgadr.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
