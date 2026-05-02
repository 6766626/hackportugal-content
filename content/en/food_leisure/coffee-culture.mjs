export default {
  editorialVoice: 'hackportugal',
  id: 'coffee-culture',
  categoryId: 'food_leisure',
  title: 'Coffee culture in Portugal',
  tldr: 'Portuguese people drink 3–5 coffees a day. Bica (Lisbon) / Cimbalino (Porto) = a small espresso for €0.70–1. The main options are meia de leite, galão, abatanado, pingado. Best cafés: Nicola, A Brasileira, Fábrica. Chain cafés such as Starbucks are more expensive and less respected.',
  tags: ['coffee', 'bica', 'pastelaria'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'vocabulary',
      title: 'Coffee vocabulary',
      content: [
        { kind: 'checklist', items: [
          'Bica (Lisbon) / Cimbalino / Café (Porto) — 25–30 ml espresso, ~€0.80',
          'Café cheio / curto — slightly longer / very short',
          'Café duplo — double espresso',
          'Pingado — espresso with a drop of milk',
          'Garoto — espresso with a lot of milk, in a small cup',
          'Meia de Leite — espresso with milk 50/50, in a cup',
          'Galão — less coffee and more milk, in a glass',
          'Galão escuro / claro — dark / light',
          'Abatanado / Americano — “long” coffee',
          'Carioca de Limão — lemon peel tea (not coffee, but often ordered)',
          'Descafeinado — decaffeinated'
        ]}
      ]
    },
    {
      id: 'when',
      title: 'When to drink what',
      content: [
        { kind: 'paragraph', text: 'In the morning — galão or meia de leite with a pastel de nata. After lunch — bica (locals consider galão a “children’s” drink during the day). In the evening — espresso is not frowned upon; Portuguese people drink coffee at any time.' },
        { kind: 'warning', text: 'On menus, the word “café” usually means “espresso”. If you want what is usually called “coffee”, ask for an abatanado.' }
      ]
    },
    {
      id: 'best-places',
      title: 'Legendary cafés',
      content: [
        { kind: 'substeps', items: [
          { id: 'l1', title: 'Lisbon', content: [
            { kind: 'checklist', items: [
              'A Brasileira (Chiado) — historic café, Pessoa statue',
              'Nicola (Rossio) — opened in the 1700s',
              'Café Martinho da Arcada — the oldest café in Lisbon (1782)',
              'Fábrica Coffee Roasters — speciality coffee',
              'Copenhagen Coffee Lab — Scandinavian speciality coffee'
            ]}
          ]},
          { id: 'l2', title: 'Porto', content: [
            { kind: 'checklist', items: [
              'Café Majestic — iconic Art Nouveau café',
              'Café Guarany — historic café',
              'Combi Coffee — speciality coffee',
              '7G Roaster — speciality coffee'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'pastelaria',
      title: 'Pastelaria = café + patisserie',
      content: [
        { kind: 'paragraph', text: 'A pastelaria is a cornerstone of everyday life. It combines a café, bakery and bar, often serving breakfasts and lunches. Fresh pastries in the morning, pastéis de nata all day, tosta mista (ham and cheese toastie), bifana (pork), prato do dia at lunchtime.' },
        { kind: 'paragraph', text: 'Every neighbourhood has its favourite pastelaria — ask your neighbours.' }
      ]
    }
  ],
  sources: [
    { title: 'A Brasileira do Chiado', url: 'https://www.visitlisboa.com/pt-pt/locais/a-brasileira', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Turismo de Portugal — Cafés', url: 'https://www.visitportugal.com/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}
