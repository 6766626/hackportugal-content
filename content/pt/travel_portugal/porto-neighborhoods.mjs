export default {
  editorialVoice: 'hackportugal',
  id: 'porto-neighborhoods',
  categoryId: 'travel_portugal',
  title: 'Bairros do Porto — onde viver',
  tldr: 'Baixa / Ribeira — centro histórico, turístico. Cedofeita / Boavista — zona na moda, ambiente de design. Foz — junto ao oceano, zona premium. Bonfim — bairro em crescimento, acessível. Matosinhos — costa, marisco. Vila Nova de Gaia (outra margem) — mais barato, as mesmas vistas. A renda é 30-40% mais baixa do que em Lisboa.',
  tags: ['porto', 'bairros', 'habitação'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'center',
      title: 'Bairros centrais',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Baixa / Aliados', content: [
            { kind: 'paragraph', text: 'Centro, metro de S. Bento e Trindade. De dia é turístico; à noite é mais calmo do que em Lisboa. T1 — 900-1400 €.' }
          ]},
          { id: 'c2', title: 'Ribeira', content: [
            { kind: 'paragraph', text: 'UNESCO, vista para o Douro. Muito turístico, ruas íngremes. Ponto positivo: bonito; ponto negativo: ruidoso e com poucos supermercados. T1 — 1000-1800 €, se encontrar.' }
          ]},
          { id: 'c3', title: 'Cedofeita', content: [
            { kind: 'paragraph', text: 'Bairro criativo, boutiques, cafés, galerias. Popular entre jovens expatriados. T1 — 900-1400 €.' }
          ]},
          { id: 'c4', title: 'Bonfim', content: [
            { kind: 'paragraph', text: 'Perto do centro, bairro em recuperação. Mais autêntico, local. T1 — 700-1200 €.' }
          ]}
        ]}
      ]
    },
    {
      id: 'premium',
      title: 'Bairros premium',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: 'Foz do Douro', content: [
            { kind: 'paragraph', text: 'Junto à foz do Douro, zona premium. Praias, restaurantes, famílias. Longe do centro, é normalmente preciso autocarro, táxi ou carro; ao longo do rio circula o histórico elétrico 1, mas não é metro nem uma opção real para deslocações diárias. T1 — 1200-2000 €, moradias — 2500+ €.' }
          ]},
          { id: 'p2', title: 'Boavista', content: [
            { kind: 'paragraph', text: 'Zona de negócios. Casa da Música, arranha-céus para os padrões de Portugal. Boas escolas. T1 — 1000-1700 €.' }
          ]},
          { id: 'p3', title: 'Massarelos / Campo Alegre', content: [
            { kind: 'paragraph', text: 'Entre o centro e a Foz. Jardim Botânico. Bairro verde e calmo. T1 — 900-1500 €.' }
          ]}
        ]}
      ]
    },
    {
      id: 'budget',
      title: 'Bairros acessíveis',
      content: [
        { kind: 'substeps', items: [
          { id: 'b1', title: 'Campanhã', content: [
            { kind: 'paragraph', text: 'Perto da principal estação ferroviária. Barato, bairro em desenvolvimento, mas ainda algo áspero. T1 — 600-900 €.' }
          ]},
          { id: 'b2', title: 'Paranhos', content: [
            { kind: 'paragraph', text: 'Zona universitária, muitos jovens. Linha amarela do metro. T1 — 700-1100 €.' }
          ]},
          { id: 'b3', title: 'Areosa / Ramalde', content: [
            { kind: 'paragraph', text: 'Bairros a norte, adequados para famílias. Ramalde tem estação de metro própria (linha azul A e outras); na Areosa muitas vezes é mais prático o autocarro ou as estações mais próximas, consoante a morada. T1 — 700-1100 €.' }
          ]}
        ]}
      ]
    },
    {
      id: 'outside',
      title: 'Subúrbios',
      content: [
        { kind: 'substeps', items: [
          { id: 'o1', title: 'Vila Nova de Gaia', content: [
            { kind: 'paragraph', text: 'Margem sul do Douro, famosas caves de vinho do Porto. A linha amarela do metro (D) atravessa para Gaia pela Ponte Luís I. As mesmas vistas, 20-30% mais barato. T1 — 700-1200 €.' }
          ]},
          { id: 'o2', title: 'Matosinhos', content: [
            { kind: 'paragraph', text: 'A oeste. Praias, marisco, porto de pesca. Linha azul do metro. T1 — 700-1200 €.' }
          ]},
          { id: 'o3', title: 'Maia', content: [
            { kind: 'paragraph', text: 'Norte do Porto. Aeroporto. Zona familiar, escolas. É aconselhável ter carro. T1 — 600-1000 €.' }
          ]},
          { id: 'o4', title: 'Gondomar / Valongo', content: [
            { kind: 'paragraph', text: 'A leste. Barato, mas a ligação ao centro faz-se de carro ou autocarro. T1 — 500-800 €.' }
          ]}
        ]}
      ]
    },
    {
      id: 'vs-lisbon',
      title: 'Porto e Lisboa',
      content: [
        { kind: 'checklist', items: [
          '💰 A renda no Porto é 30-40% mais barata',
          '🌆 O Porto é mais compacto do que Lisboa: o centro histórico faz-se bem a pé, mas Foz, Matosinhos, Maia, Gaia e os subúrbios a leste exigem transporte',
          '🌧️ O Porto é mais chuvoso e mais fresco (oceano, norte)',
          '🍷 Vinho do Porto, vale do Douro — uma característica única',
          '✈️ Menos voos internacionais, mas há voos directos para a Europa',
          '🎓 Excelentes universidades (Porto, Católica)',
          '🏝️ Boas praias (Matosinhos, Foz, Leça)',
          '👔 Menos expatriados, ambiente mais local',
          '🚆 Alfa Pendular até Lisboa em cerca de 3 h (os comboios mais rápidos um pouco menos)'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Câmara Municipal do Porto', url: 'https://www.cm-porto.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'INE — indicadores habitacionais do Norte', url: 'https://www.ine.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Visit Porto — portal turístico', url: 'https://visitporto.travel/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
