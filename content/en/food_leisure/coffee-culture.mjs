export default {
  editorialVoice: 'hackportugal',
  id: 'coffee-culture',
  categoryId: 'food_leisure',
  title: 'Coffee culture in Portugal',
  tldr: 'Coffee in Portugal is drunk often: for many people it is normal to have several small café/bica throughout the day. Bica (Lisbon) / Cimbalino (Porto) = a small espresso, usually €0.80–1.30 in a neighbourhood pastelaria; in the centre, historic cafés and speciality places it is more expensive. The main options are meia de leite, galão, abatanado, pingado. Historic cafés: A Brasileira, Nicola, Martinho da Arcada, Majestic. Speciality: Fábrica Coffee Roasters, Copenhagen Coffee Lab, Combi, 7g.',
  tags: ['coffee', 'bica', 'pastelaria'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'vocabulary',
      title: 'Coffee vocabulary',
      content: [
        { kind: 'checklist', items: [
          'Café — the usual small espresso, 25–30 ml; bica — the Lisbon word, cimbalino — north/Porto. In a neighbourhood pastelaria often around €0.80–1.30',
          'Café cheio / curto — slightly longer / very short',
          'Café duplo — double espresso',
          'Pingado — espresso with a drop of milk',
          'Garoto — espresso with a larger amount of milk, in a small cup',
          'Meia de Leite — espresso with milk, 50/50, in a cup',
          'Galão — less coffee and more milk, in a glass',
          'Galão escuro / claro — dark / light',
          'Abatanado — a long café in a large cup; Americano — espresso with added hot water (in practice, cafés may use them almost interchangeably)',
          'Carioca de Limão — tea made from lemon peel (not coffee, but often ordered)',
          'Descafeinado — decaffeinated'
        ]}
      ]
    },
    {
      id: 'when',
      title: 'When to drink what',
      content: [
        { kind: 'paragraph', text: 'In the morning — galão or meia de leite with pastel de nata. After lunch, people more often order a small café/bica; galão is usually seen more as a morning drink. In the evening, espresso is not frowned upon — Portuguese people drink coffee at any time.' },
        { kind: 'warning', text: 'On a menu, the word “café” usually means “espresso”. If you want what is usually called “coffee”, ask for abatanado.' }
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
              'Nicola (Rossio) — historic café, with origins usually dated to 1787',
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
      title: 'Pastelaria = café + pastry shop',
      content: [
        { kind: 'paragraph', text: 'Pastelaria is a cornerstone of everyday life. It is a combination of café, bakery and bar, often with breakfasts and lunches. Fresh pastries in the morning, pastéis de nata all day, tosta mista (ham and cheese sandwich), bifana (pork), prato do dia at lunchtime.' },
        { kind: 'paragraph', text: 'Every neighbourhood has its favourite pastelaria — ask your neighbours.' }
      ]
    }
  ],
  sources: [
    { title: 'A Brasileira do Chiado', url: 'https://www.visitlisboa.com/en/places/chiado-41699ec3-eda7-414e-a9c1-e985f2f0efb7', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Tourism of Portugal — Cafés', url: 'https://www.visitportugal.com/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
