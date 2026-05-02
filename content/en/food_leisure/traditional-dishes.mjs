export default {
  editorialVoice: 'hackportugal',
  id: 'traditional-dishes',
  categoryId: 'food_leisure',
  title: 'What to try from Portuguese cuisine',
  tldr: 'The staples are bacalhau (cod, the “1001 recipes”), sardinhas assadas (sardines in Lisbon in summer), cozido à portuguesa (mixed meats), francesinha (Porto’s signature dish), arroz de marisco (seafood rice), leitão da Bairrada (suckling pig). For dessert: pastel de nata everywhere, ovos moles in Aveiro.',
  tags: ['food', 'cuisine', 'bacalhau', 'pastel de nata'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'must-try',
      title: 'Top 10: must-try dishes',
      content: [
        { kind: 'checklist', items: [
          '🐟 Bacalhau à Brás — cod with potatoes, egg and onion (a classic)',
          '🐟 Bacalhau com Natas — cod baked with a cream sauce',
          '🐟 Bacalhau à Lagareiro — cod baked with olive oil and “baby potatoes”',
          '🐟 Sardinhas Assadas — charcoal-grilled sardines (June-September, cheaper in taverns)',
          '🐟 Arroz de Marisco — seafood rice, most popular in the Algarve',
          '🍖 Cozido à Portuguesa — boiled meats, sausages, vegetables and chickpeas',
          '🍖 Leitão da Bairrada — spit-roasted suckling pig (Bairrada region)',
          '🥪 Francesinha — a sandwich with meat, cheese, sauce and egg (Porto, a must-try)',
          '🍲 Caldo Verde — soup with cabbage and chouriço sausage (found everywhere)',
          '🥟 Pastéis de Bacalhau — cod fritters (snack)'
        ]}
      ]
    },
    {
      id: 'desserts',
      title: 'Desserts',
      content: [
        { kind: 'checklist', items: [
          '🥧 Pastel de Nata — custard cream in crisp pastry (the best are Pastéis de Belém, the original)',
          '🥚 Ovos Moles de Aveiro — egg yolk + sugar, in a wafer (Aveiro DOP)',
          '🧁 Queijadas de Sintra — cottage-cheese cakes',
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
              'Bica (Lisbon) / Cimbalino (Porto) — espresso, €0.70–€1',
              'Meia de Leite — half espresso, half milk, served in a cup',
              'Galão — large coffee with milk (in a glass)',
              'Abatanado — “long” coffee, Americano-style',
              'Pingado — espresso with a drop of milk'
            ]}
          ]},
          { id: 'd2', title: 'Wine', content: [
            { kind: 'checklist', items: [
              'Vinho Verde — light “green” wine (northern Portugal, best chilled)',
              'Douro DOC — full-bodied red',
              'Alentejo — rich red',
              'Port wine (Porto) — dessert wine, Ruby / Tawny / Vintage',
              'Madeira — dessert wine from the island of Madeira',
              'Bairrada sparkling wine — white sparkling wine'
            ]}
          ]},
          { id: 'd3', title: 'Other', content: [
            { kind: 'checklist', items: [
              'Ginjinha — cherry liqueur (Lisbon, the little A Ginjinha bars near Rossio)',
              'Licor Beirão — herbal brandy',
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
          'North-west (Porto, Minho) — francesinha, caldo verde, bacalhau com broa',
          'Centre (Coimbra, Aveiro) — ovos moles, leitão, chanfana (kid goat)',
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
          'Bread and olives are brought “for free” — but they are usually charged for (couvert €1–3). Say “não, obrigado” if you do not want them',
          'Main lunch 13:00-15:00, dinner 20:00-22:00',
          'Coffee is after dessert, never with the meal',
          'Tips: 5–10% is customary in restaurants; in cafés, round up the bill',
          'Menu do dia (dish of the day at lunch) — the cheapest option in a restaurant, often €8–12',
          'The “taxa” includes IVA, not tips',
          'Asking for the bill: “A conta, por favor”'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Turismo de Portugal — Gastronomy', url: 'https://www.visitportugal.com/pt-pt/experiencias/gastronomia-e-vinhos', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DGAV — food safety', url: 'https://www.dgav.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DGADR — DOP/IGP programme (protected recipes)', url: 'https://www.dgadr.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}
