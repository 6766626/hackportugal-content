export default {
  editorialVoice: 'hackportugal',
  id: 'coffee-culture',
  categoryId: 'food_leisure',
  title: 'Cultura do café em Portugal',
  tldr: 'Em Portugal bebe-se café com frequência: para muitas pessoas é normal beber vários café/bica pequenos ao longo do dia. Bica (Lisboa) / Cimbalino (Porto) = espresso pequeno, normalmente 0,80–1,30 € numa pastelaria de bairro; no centro, em cafés históricos e em locais de specialty coffee é mais caro. As principais variantes são meia de leite, galão, abatanado, pingado. Cafés históricos: A Brasileira, Nicola, Martinho da Arcada, Majestic. Specialty: Fábrica Coffee Roasters, Copenhagen Coffee Lab, Combi, 7g.',
  tags: ['café', 'bica', 'pastelaria'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'vocabulary',
      title: 'Vocabulário do café',
      content: [
        { kind: 'checklist', items: [
          'Café — o espresso pequeno normal, 25–30 ml; bica — palavra usada em Lisboa, cimbalino — norte/Porto. Numa pastelaria de bairro custa muitas vezes ~0,80–1,30 €',
          'Café cheio / curto — um pouco mais longo / muito curto',
          'Café duplo — espresso duplo',
          'Pingado — espresso com uma gota de leite',
          'Garoto — espresso com bastante leite, numa chávena pequena',
          'Meia de Leite — espresso com leite 50/50, numa chávena',
          'Galão — menos café e mais leite, num copo',
          'Galão escuro / claro — escuro / claro',
          'Abatanado — café longo numa chávena grande; Americano — espresso com água quente adicionada (na prática, nos cafés podem ser usados quase como equivalentes)',
          'Carioca de Limão — chá de casca de limão (não é café, mas é pedido com frequência)',
          'Descafeinado — sem cafeína'
        ]}
      ]
    },
    {
      id: 'when',
      title: 'Quando beber o quê',
      content: [
        { kind: 'paragraph', text: 'De manhã — galão ou meia de leite com pastel de nata. Depois do almoço, é mais comum pedir um café/bica pequeno; o galão é normalmente visto mais como uma bebida da manhã. À noite, o espresso não é proibido — os portugueses bebem café a qualquer hora.' },
        { kind: 'warning', text: 'No menu, a palavra «café» normalmente significa «espresso». Se quiser aquilo a que habitualmente se chama «café», peça um abatanado.' }
      ]
    },
    {
      id: 'best-places',
      title: 'Cafés lendários',
      content: [
        { kind: 'substeps', items: [
          { id: 'l1', title: 'Lisboa', content: [
            { kind: 'checklist', items: [
              'A Brasileira (Chiado) — café histórico, estátua de Pessoa',
              'Nicola (Rossio) — café histórico, cujas origens são normalmente datadas de 1787',
              'Café Martinho da Arcada — o café mais antigo de Lisboa (1782)',
              'Fábrica Coffee Roasters — café de especialidade',
              'Copenhagen Coffee Lab — café de especialidade escandinavo'
            ]}
          ]},
          { id: 'l2', title: 'Porto', content: [
            { kind: 'checklist', items: [
              'Café Majestic — café icónico em estilo arte nova',
              'Café Guarany — café histórico',
              'Combi Coffee — café de especialidade',
              '7G Roaster — café de especialidade'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'pastelaria',
      title: 'Pastelaria = café + confeitaria',
      content: [
        { kind: 'paragraph', text: 'A pastelaria é uma base da vida quotidiana. É uma combinação de café, padaria e bar, muitas vezes com pequenos-almoços e almoços. Pastelaria fresca de manhã, pastéis de nata todo o dia, tosta mista, bifana, prato do dia ao almoço.' },
        { kind: 'paragraph', text: 'Cada bairro tem a sua pastelaria preferida — pergunte aos vizinhos.' }
      ]
    }
  ],
  sources: [
    { title: 'A Brasileira do Chiado', url: 'https://www.visitlisboa.com/en/places/chiado-41699ec3-eda7-414e-a9c1-e985f2f0efb7', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Turismo de Portugal — Cafés', url: 'https://www.visitportugal.com/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
