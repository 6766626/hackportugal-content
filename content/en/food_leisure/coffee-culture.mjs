export default {
  editorialVoice: 'hackportugal',
  id: 'coffee-culture',
  categoryId: 'food_leisure',
  title: 'Portugal’s coffee culture',
  tldr: 'The Portuguese drink 3–5 coffees a day. Bica (Lisbon) / Cimbalino (Porto) = a small espresso for €0.70–1.00. Main options — meia de leite, galão, abatanado, pingado. Best cafés: Nicola, A Brasileira, Fábrica. Chain coffee shops like Starbucks are pricier and less respected.',
  tags: ['coffee', 'bica', 'pastelaria'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'vocabulary',
      title: 'Coffee glossary',
      content: [
        { kind: 'checklist', items: [
          'Bica (Lisbon) / Cimbalino / Café (Porto) — 25–30 ml espresso, ~€0.80',
          'Café cheio / curto — a little longer / very short',
          'Café duplo — double espresso',
          'Pingado — espresso with a drop of milk',
          'Garoto — espresso with more milk, in a small cup',
          'Meia de Leite — espresso with milk 50/50, in a cup',
          'Galão — less coffee and more milk, in a glass',
          'Galão escuro / claro — dark / light',
          'Abatanado / Americano — a "long" coffee',
          'Carioca de Limão — lemon zest tea (not coffee, but often ordered)',
          'Descafeinado — decaffeinated'
        ]}
      ]
    },
    {
      id: 'when',
      title: 'When to drink what',
      content: [
        { kind: 'paragraph', text: 'In the morning — a galão or meia de leite with a pastel de nata. After lunch — a bica (locals consider galão a "children’s" drink during the day). In the evening — espresso is fine; the Portuguese drink coffee at any time.' },
        { kind: 'warning', text: 'On menus the word "café" usually means "espresso". If you want what many call "coffee", ask for an abatanado.' }
      ]
    },
    {
      id: 'best-places',
      title: 'Legendary coffee shops',
      content: [
        { kind: 'substeps', items: [
          { id: 'l1', title: 'Lisbon', content: [
            { kind: 'checklist', items: [
              'A Brasileira (Chiado) — historic café, statue of Pessoa',
              'Nicola (Rossio) — opened in the 1700s',
              'Café Martinho da Arcada — the oldest café in Lisbon (1782)',
              'Fábrica Coffee Roasters — speciality coffee',
              'Copenhagen Coffee Lab — Scandinavian speciality coffee'
            ]}
          ]},
          { id: 'l2', title: 'Porto', content: [
            { kind: 'checklist', items: [
              'Café Majestic — iconic art nouveau café',
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
        { kind: 'paragraph', text: 'Pastelaria is a pillar of daily life. It’s a mix of café, bakery and bar, often with breakfasts and lunches. Fresh bakes in the morning, pastéis de nata all day, tosta mista (ham-and-cheese toastie), bifana (pork), prato do dia at lunch.' },
        { kind: 'paragraph', text: 'Every neighbourhood has its favourite pastelaria — ask your neighbours.' }
      ]
    }
  ],
  sources: [
    { title: 'A Brasileira do Chiado', url: 'https://www.visitlisboa.com/en/places/chiado-41699ec3-eda7-414e-a9c1-e985f2f0efb7', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Turismo de Portugal — Cafés', url: 'https://www.visitportugal.com/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 365
}
