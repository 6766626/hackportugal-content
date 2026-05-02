export default {
  editorialVoice: 'hackportugal',
  id: 'coffee-culture',
  categoryId: 'food_leisure',
  title: 'Кофейная культура Португалии',
  tldr: 'Португальцы пьют 3–5 кофе в день. Bica (Лиссабон) / Cimbalino (Порту) = маленький эспрессо за € 0,70–1. Основные варианты — meia de leite, galão, abatanado, pingado. Лучшие кофейни: Nicola, A Brasileira, Fábrica. Сетевые кофейни вроде Starbucks дороже и менее уважаемы.',
  tags: ['кофе', 'bica', 'pastelaria'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'vocabulary',
      title: 'Словарь кофе',
      content: [
        { kind: 'checklist', items: [
          'Bica (Лиссабон) / Cimbalino / Café (Порту) — эспрессо 25–30 мл, ~€ 0,80',
          'Café cheio / curto — чуть длиннее / очень короткий',
          'Café duplo — двойной эспрессо',
          'Pingado — эспрессо с каплей молока',
          'Garoto — эспрессо с большим количеством молока, в маленькой чашке',
          'Meia de Leite — эспрессо с молоком 50/50, в чашке',
          'Galão — меньше кофе и больше молока, в стакане',
          'Galão escuro / claro — тёмный / светлый',
          'Abatanado / Americano — «длинный» кофе',
          'Carioca de Limão — чай из лимонной цедры (не кофе, но часто заказывают)',
          'Descafeinado — без кофеина'
        ]}
      ]
    },
    {
      id: 'when',
      title: 'Когда что пить',
      content: [
        { kind: 'paragraph', text: 'Утром — galão или meia de leite с pastel de nata. После обеда — bica (местные считают galão «детским» напитком днём). Вечером — эспрессо не возбраняется, португальцы пьют кофе в любое время.' },
        { kind: 'warning', text: 'В меню слово «café» обычно значит «эспрессо». Если хотите то, что обычно называют «кофе», просите abatanado.' }
      ]
    },
    {
      id: 'best-places',
      title: 'Легендарные кофейни',
      content: [
        { kind: 'substeps', items: [
          { id: 'l1', title: 'Лиссабон', content: [
            { kind: 'checklist', items: [
              'A Brasileira (Chiado) — историческое кафе, статуя Песоа',
              'Nicola (Rossio) — открыто в 1700-е годы',
              'Café Martinho da Arcada — старейшее кафе в Лиссабоне (1782)',
              'Fábrica Coffee Roasters — специалити-кофе',
              'Copenhagen Coffee Lab — скандинавский специалити-кофе'
            ]}
          ]},
          { id: 'l2', title: 'Порту', content: [
            { kind: 'checklist', items: [
              'Café Majestic — культовое кафе в стиле ар-нуво',
              'Café Guarany — историческое кафе',
              'Combi Coffee — специалити-кофе',
              '7G Roaster — специалити-кофе'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'pastelaria',
      title: 'Pastelaria = кафе + кондитерская',
      content: [
        { kind: 'paragraph', text: 'Pastelaria — основа повседневной жизни. Это сочетание кофейни, пекарни, бара, часто с завтраками и обедами. Свежая выпечка утром, pastéis de nata весь день, tosta mista (сэндвич с ветчиной и сыром), бифана (свинина), prato do dia в обед.' },
        { kind: 'paragraph', text: 'В каждом районе есть своя любимая pastelaria — спросите у соседей.' }
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