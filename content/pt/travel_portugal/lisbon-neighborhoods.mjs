export default {
  editorialVoice: 'hackportugal',
  id: 'lisbon-neighborhoods',
  categoryId: 'travel_portugal',
  title: 'Bairros de Lisboa — onde viver',
  tldr: 'Centro (Baixa/Chiado) — caro, turístico. Alfama/Mouraria — histórico e na moda, mas ruidoso. Avenidas Novas / Saldanha / Areeiro — bairros modernos com metro, adequados para famílias. Parque das Nações — bairro novo e familiar. Campo de Ourique / Estrela — tranquilos, verdes. Almada / Cacilhas — outra margem, mais barato. Cascais / Oeiras — subúrbios junto ao oceano.',
  tags: ['lisboa', 'bairros', 'habitação'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'center',
      title: 'Centro histórico',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Baixa / Chiado', content: [
            { kind: 'paragraph', text: 'Zona comercial, cafés, museus. Bairro muito turístico. Arrendamento de T1 a partir de 1 500–2 500 €/mês. Vantagem: tudo fica perto. Desvantagem: multidões, ruído à noite.' }
          ]},
          { id: 'c2', title: 'Alfama / Mouraria', content: [
            { kind: 'paragraph', text: 'O bairro mais antigo, fado, ruas íngremes. Tem muita atmosfera, mas pouco estacionamento e fraca acessibilidade para famílias com carrinhos de bebé. T1 a partir de 1 200–2 000 €/mês.' }
          ]},
          { id: 'c3', title: 'Bairro Alto / Príncipe Real', content: [
            { kind: 'paragraph', text: 'Vida nocturna (Bairro Alto) e boutiques (Príncipe Real). Ruidoso à noite, má escolha para dormir se você não gosta de festas. T1 1 500–2 500 €.' }
          ]}
        ]}
      ]
    },
    {
      id: 'family',
      title: 'Bairros familiares',
      content: [
        { kind: 'substeps', items: [
          { id: 'f1', title: 'Avenidas Novas / Saldanha', content: [
            { kind: 'paragraph', text: 'Centro empresarial. Metro das linhas azul e amarela. Muitos estrangeiros, restaurantes, El Corte Inglés. T1 1 400–2 200 €, T2 1 800–3 000 €.' }
          ]},
          { id: 'f2', title: 'Areeiro / Roma', content: [
            { kind: 'paragraph', text: 'Bairros tranquilos com escolas. Metro da linha verde. Há um clube russofalante. T1 1 200–1 800 €.' }
          ]},
          { id: 'f3', title: 'Parque das Nações', content: [
            { kind: 'paragraph', text: 'Construído para a Expo 98. Moderno, espaçoso, com muitos parques e o oceanário. Bairro familiar. T1 1 400–2 200 €, T2 2 000–3 500 €.' }
          ]},
          { id: 'f4', title: 'Campo de Ourique', content: [
            { kind: 'paragraph', text: 'Bairro intimista e verde, com mercado. Bairro preferido dos estrangeiros. T1 1 300–2 000 €.' }
          ]},
          { id: 'f5', title: 'Estrela / Lapa', content: [
            { kind: 'paragraph', text: 'Diplomático, com o Jardim da Estrela, prestigiante. T1 1 500–2 500 €, moradias 3 000 €+.' }
          ]}
        ]}
      ]
    },
    {
      id: 'budget',
      title: 'Bairros acessíveis',
      content: [
        { kind: 'substeps', items: [
          { id: 'b1', title: 'Penha de França / Anjos', content: [
            { kind: 'paragraph', text: 'Centro de Lisboa, mas mais barato. O bairro está a desenvolver-se e é popular entre os jovens. T1 a partir de 800–1 500 €.' }
          ]},
          { id: 'b2', title: 'Arroios / Alameda', content: [
            { kind: 'paragraph', text: 'Bairro multicultural, com diversidade gastronómica. Metro da linha verde. T1 1 000–1 600 €.' }
          ]},
          { id: 'b3', title: 'Lumiar / Telheiras', content: [
            { kind: 'paragraph', text: 'Zona norte, tranquila. Escolas, parques. T1 900–1 400 €, T2 1 300–2 000 €.' }
          ]},
          { id: 'b4', title: 'Almada / Cacilhas (margem sul)', content: [
            { kind: 'paragraph', text: 'Na margem sul do Tejo. De ferry, 10 min até ao centro de Lisboa. 30–40% mais barato do que os preços da cidade. T1 600–1 000 €.' }
          ]},
          { id: 'b5', title: 'Seixal / Barreiro / Amora', content: [
            { kind: 'paragraph', text: 'Ainda mais a sul. Muitos trabalhadores que se mudam de Lisboa. T1 500–900 €.' }
          ]}
        ]}
      ]
    },
    {
      id: 'coast',
      title: 'Costa — Cascais / Oeiras',
      content: [
        { kind: 'substeps', items: [
          { id: 'cc1', title: 'Cascais', content: [
            { kind: 'paragraph', text: 'Cidade de veraneio junto ao oceano. Prestigiante, com muitos estrangeiros. Comboio (Urbanos) até Lisboa — 40 min. T1 1 500–3 000 €, moradias 5 000 €+.' }
          ]},
          { id: 'cc2', title: 'Oeiras', content: [
            { kind: 'paragraph', text: 'Entre Lisboa e Cascais. Polo tecnológico (Lagoas Park). Escolas internacionais. T1 1 200–2 200 €.' }
          ]},
          { id: 'cc3', title: 'Estoril', content: [
            { kind: 'paragraph', text: 'Entre Cascais e Oeiras. Casino, praias. Caro. T1 1 500–2 800 €.' }
          ]}
        ]}
      ]
    },
    {
      id: 'choose',
      title: 'Como escolher',
      content: [
        { kind: 'checklist', items: [
          'Trabalho no centro + sem carro → Avenidas Novas, Areeiro, Saldanha',
          'Família com crianças + escolas → Parque das Nações, Oeiras, Cascais, Areeiro',
          'Orçamento → Almada, Amadora, Barreiro',
          'Vida nocturna → Bairro Alto, Cais do Sodré (mas não para viver)',
          'Atmosfera de cidade antiga → Alfama, Mouraria, Graça',
          'Oceano perto → Cascais, Estoril, Oeiras, Caxias',
          'Jovens estrangeiros → Penha de França, Campo de Ourique, Arroios',
          'Escola/clube russofalante → Oeiras (Carlos Freixo), Cascais'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Câmara Municipal de Lisboa — guia de bairros e freguesias', url: 'https://www.lisboa.pt/municipio/juntas-de-freguesia', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'INE — estatísticas sobre habitação em Lisboa', url: 'https://www.ine.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Visit Lisboa — portal turístico', url: 'https://www.visitlisboa.com/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
