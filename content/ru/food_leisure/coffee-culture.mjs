export default {
  editorialVoice: 'hackportugal',
  id: 'coffee-culture',
  categoryId: 'food_leisure',
  title: 'Кофейная культура Португалии',
  tldr: 'Кофе в Португалии пьют часто: для многих нормально выпить несколько маленьких café/bica в течение дня. Bica (Лиссабон) / Cimbalino (Порту) = маленький эспрессо, обычно € 0,80–1,30 в районной pastelaria; в центре, исторических кафе и specialty-местах дороже. Основные варианты — meia de leite, galão, abatanado, pingado. Исторические кафе: A Brasileira, Nicola, Martinho da Arcada, Majestic. Specialty: Fábrica Coffee Roasters, Copenhagen Coffee Lab, Combi, 7g.',
  tags: ['кофе', 'bica', 'pastelaria'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'vocabulary',
      title: 'Словарь кофе',
      content: [
        { kind: 'checklist', items: [
          'Café — обычный маленький эспрессо 25–30 мл; bica — лиссабонское слово, cimbalino — север/Порту. В районной pastelaria часто ~€ 0,80–1,30',
          'Café cheio / curto — чуть длиннее / очень короткий',
          'Café duplo — двойной эспрессо',
          'Pingado — эспрессо с каплей молока',
          'Garoto — эспрессо с большим количеством молока, в маленькой чашке',
          'Meia de Leite — эспрессо с молоком 50/50, в чашке',
          'Galão — меньше кофе и больше молока, в стакане',
          'Galão escuro / claro — тёмный / светлый',
          'Abatanado — длинный café в большой чашке; Americano — эспрессо с добавленной горячей водой (на практике в кафе могут использовать почти взаимозаменяемо)',
          'Carioca de Limão — чай из лимонной цедры (не кофе, но часто заказывают)',
          'Descafeinado — без кофеина'
        ]}
      ]
    },
    {
      id: 'when',
      title: 'Когда что пить',
      content: [
        { kind: 'paragraph', text: 'Утром — galão или meia de leite с pastel de nata. После обеда чаще берут маленький café/bica; galão обычно воспринимается скорее как утренний напиток. Вечером эспрессо не возбраняется — португальцы пьют кофе в любое время.' },
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
              'Nicola (Rossio) — историческое кафе, корни обычно датируют 1787 годом',
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
    { title: 'A Brasileira do Chiado', url: 'https://www.visitlisboa.com/en/places/chiado-41699ec3-eda7-414e-a9c1-e985f2f0efb7', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Turismo de Portugal — Cafés', url: 'https://www.visitportugal.com/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}