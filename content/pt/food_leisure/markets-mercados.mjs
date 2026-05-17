export default {
  editorialVoice: 'hackportugal',
  id: 'markets-mercados',
  categoryId: 'food_leisure',
  title: 'Mercados de Portugal (Mercados)',
  tldr: 'Os mercados municipais são uma tradição viva: peixe fresco, carne, legumes, especiarias. Os principais em Lisboa: Mercado da Ribeira (Time Out), Mercado de Campo de Ourique, Arroios, 31 de Janeiro. No Porto — o lendário Mercado do Bolhão. As bancas tradicionais estão normalmente mais activas de manhã, aproximadamente até às 14:00, mas os horários dependem muito de cada mercado; os food halls costumam funcionar até mais tarde e abrir mais tarde. Verifique os horários na página do mercado/feira específico.',
  tags: ['mercados', 'mercado', 'mercado', 'time out'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'lisbon',
      title: 'Lisboa',
      content: [
        { kind: 'substeps', items: [
          { id: 'l1', title: 'Mercado da Ribeira / Time Out Market', content: [
            { kind: 'paragraph', text: 'Cais do Sodré. De manhã — mercado tradicional: peixe, carne. Do meio-dia até à noite — Time Out Market com mais de 30 quiosques de comida de chefs portugueses de topo. Muito turístico, mas a qualidade é elevada.' },
          ]},
          { id: 'l2', title: 'Mercado de Campo de Ourique', content: [
            { kind: 'paragraph', text: 'Menos turístico, mais «para locais». À noite também há uma zona de restauração. O bairro de Campo de Ourique é agradável para passear.' }
          ]},
          { id: 'l3', title: 'Mercado 31 de Janeiro', content: [
            { kind: 'paragraph', text: 'Saldanha. Grande, autêntico, barato. Os locais gostam muito. Metro perto.' }
          ]},
          { id: 'l4', title: 'Mercado de Arroios', content: [
            { kind: 'paragraph', text: 'O bairro de Arroios é multicultural. Muitos vendedores asiáticos, indianos e brasileiros.' }
          ]},
          { id: 'l5', title: 'Feira da Ladra (mercado de pulgas)', content: [
            { kind: 'paragraph', text: 'Às terças-feiras e sábados, Campo de Santa Clara. Mercado de pulgas — de antiguidades a bugigangas. Com vista para o Panteão Nacional.' }
          ]}
        ]}
      ]
    },
    {
      id: 'porto',
      title: 'Porto',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: 'Mercado do Bolhão', content: [
            { kind: 'paragraph', text: 'Lendário. Após a remodelação de 2022 — limpo, mas manteve o espírito. Peixe fresco, carne, pão, flores, queijos. De manhã é autêntico.' }
          ]},
          { id: 'p2', title: 'Mercado Ferreira Borges', content: [
            { kind: 'paragraph', text: 'Edifício em ferro fundido junto ao rio Douro. Não é um mercado alimentar, mas no interior fica o Hard Club: concertos e eventos.' }
          ]},
          { id: 'p3', title: 'Mercado do Bom Sucesso', content: [
            { kind: 'paragraph', text: 'Boavista. Food hall moderno com boutiques, semelhante ao Time Out. Bom sítio para almoçar.' }
          ]},
          { id: 'p4', title: 'Feira da Vandoma', content: [
            { kind: 'paragraph', text: 'Mercado de pulgas do Porto, normalmente aos sábados de manhã; é melhor verificar a localização e os horários no site da Câmara Municipal do Porto, pois o recinto pode mudar.' }
          ]}
        ]}
      ]
    },
    {
      id: 'regional',
      title: 'Outras regiões',
      content: [
        { kind: 'checklist', items: [
          'Mercado Municipal de Abrantes — mercado municipal; verifique os horários e os dias de mercado no site do Município de Abrantes',
          'Mercado de Loulé (Algarve) — estilo mourisco surrealista, sábado',
          'Mercado de Coimbra — mercado moderno e comida de rua',
          'Feira de São Pedro (Sintra) — 2.º/4.º domingo do mês',
          'Mercado Municipal de Setúbal — peixe directamente dos barcos'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Como utilizar',
      content: [
        { kind: 'checklist', items: [
          'De manhã, entre as 7 e as 10 — o peixe mais fresco e a melhor escolha',
          'À hora de almoço, há frequentemente saldos com descontos de 30-50%',
          'Pague em dinheiro nas bancas tradicionais: MB WAY ou cartão não são aceites em todo o lado',
          '«Saco, por favor» — «saco, por favor»',
          'Pergunte «Prova?» — muitas vezes deixam provar queijo, azeitonas',
          'Se você é residente fiscal em Portugal e entrega IRS, peça fatura com NIF: as compras de supermercado normalmente entram nas despesas gerais familiares, e cafés/restaurantes entram numa categoria separada do e-Fatura',
          'Os vendedores muitas vezes só falam português — o vocabulário básico será útil',
          'Pequeno-almoço no mercado — a opção mais autêntica'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Câmara Municipal de Lisboa — Mercados', url: 'https://comercio.lisboa.pt/feiras-e-mercados/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Visit Porto — Mercado do Bolhão', url: 'https://visitporto.travel/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Time Out Market Lisboa', url: 'https://www.timeoutmarket.com/lisboa/', kind: 'secondary', language: 'en', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
