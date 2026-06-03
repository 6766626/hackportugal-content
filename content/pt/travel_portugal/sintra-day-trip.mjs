export default {
  editorialVoice: 'hackportugal',
  id: 'sintra-day-trip',
  categoryId: 'travel_portugal',
  title: 'Sintra — excursão de um dia a partir de Lisboa',
  tldr: 'Sintra integra o bem da UNESCO «Paisagem Cultural de Sintra», com palácios românticos nas montanhas, a 40 min de Lisboa de comboio. Essencial: Palácio da Pena, Castelo dos Mouros, Quinta da Regaleira. Itinerário completo — 1 dia, com muita caminhada activa por colinas. Chegue cedo, regresse no último comboio. Para o Palácio da Pena, compre online com antecedência: a entrada no palácio é por horário marcado.',
  tags: ['sintra', 'excursão', 'palácios', 'lisboa'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'getting-there',
      title: 'Como chegar',
      content: [
        { kind: 'checklist', items: [
          '🚆 Comboio (recomendado): Rossio → Sintra, 40 min, 2,45 €. Horários a cada 20–30 min. Primeiro 06:15, último 23:15',
          '🚆 Alternativa: Oriente → Sintra via Entrecampos (1 h)',
          '🚗 Carro: pela A16 / IC19, 35–50 min, estacionamento difícil na época alta',
          '🚌 Excursão em grupo a partir de Lisboa: 50–90 €, geralmente inclui Cabo da Roca + Cascais',
          '💡 Conselho: chegue antes das 9:00, caso contrário há multidões no Palácio da Pena'
        ]}
      ]
    },
    {
      id: 'main-sights',
      title: 'Principais atracções',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: 'Palácio Nacional da Pena (Palácio da Pena)', content: [
            { kind: 'paragraph', text: 'Palácio romântico multicolorido do século XIX no topo da serra. Símbolo de Sintra. Entrada no parque + palácio: 20 €. Só parque: 12 €. O parque e o palácio têm horários diferentes e a última entrada é mais cedo do que o fecho — consulte o horário actual em parquesdesintra.pt. Compre online com antecedência e escolha um horário marcado precisamente para a entrada no palácio.' }
          ]},
          { id: 's2', title: 'Castelo dos Mouros (Castelo Mourisco)', content: [
            { kind: 'paragraph', text: 'Muralhas de pedra dos séculos VIII–XII na serra vizinha. Vistas de 360°. Bilhete individual: 12 €. Ao comprar vários monumentos dos Parques de Sintra online, o desconto é calculado no cesto — não se baseie em antigos preços fixos de «combo». Muita caminhada sobre as muralhas — não é indicado para quem tem medo de alturas.' }
          ]},
          { id: 's3', title: 'Quinta da Regaleira', content: [
            { kind: 'paragraph', text: 'Quinta mística do início do século XX com o “poço iniciático” subterrâneo (Poço Iniciático) — uma escadaria em espiral escavada na rocha. 20 €. A zona dos jardins inclui elementos góticos, grutas e túneis. Visita obrigatória.' }
          ]},
          { id: 's4', title: 'Palácio Nacional de Sintra', content: [
            { kind: 'paragraph', text: 'Palácio urbano dos reis, séculos XIII–XVIII. Duas chaminés cónicas brancas — uma silhueta inconfundível. 13 €. No centro da zona histórica.' }
          ]},
          { id: 's5', title: 'Palácio de Monserrate', content: [
            { kind: 'paragraph', text: 'Palácio-vila exótico em estilo oriental. Menos visitado. 12 €. A 4 km do centro — táxi.' }
          ]},
          { id: 's6', title: 'Convento dos Capuchos', content: [
            { kind: 'paragraph', text: 'Mosteiro franciscano escondido na floresta. Celas ascéticas nas paredes das rochas. 11 €. A 10 km do centro.' }
          ]}
        ]}
      ]
    },
    {
      id: 'sample-itinerary',
      title: 'Exemplo de itinerário para o dia',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: '09:00 — chegada', content: [
            { kind: 'paragraph', text: 'Comboio a partir do Rossio. À saída — autocarro 434 (13,50 € por bilhete diário hop-on/hop-off (434/435); bilhete simples ~4 € por sentido) ou táxi/Uber até ao Palácio da Pena (6–8 €). Conte com 30–45 min da estação até à entrada do palácio (transferência, filas, subida pelo parque), mais na época alta.' }
          ]},
          { id: 'r2', title: '09:30–11:30 — Palácio da Pena', content: [
            { kind: 'paragraph', text: 'Com horário online, entrar no interior, visitar o palácio + jardim (2 horas). Visita às salas principais + terraços panorâmicos.' }
          ]},
          { id: 'r3', title: '11:30–13:00 — Castelo dos Mouros', content: [
            { kind: 'paragraph', text: 'Descer a pé (30 min por trilho florestal) ou de autocarro. Percorrer as muralhas pelo perímetro.' }
          ]},
          { id: 'r4', title: '13:00–14:00 — almoço', content: [
            { kind: 'paragraph', text: 'No centro de Sintra. Queijadas e travesseiros de Sintra tradicionais (pastelaria). Café Piriquita — pastelaria de culto desde 1862.' }
          ]},
          { id: 'r5', title: '14:00–15:30 — Palácio Nacional de Sintra', content: [
            { kind: 'paragraph', text: 'Principal palácio urbano. Visita rápida de 1 hora.' }
          ]},
          { id: 'r6', title: '15:30–17:30 — Quinta da Regaleira', content: [
            { kind: 'paragraph', text: 'A pé a partir do centro, 10 min. Poço Iniciático + túneis + jardins. 2 horas no mínimo.' }
          ]},
          { id: 'r7', title: '17:30–19:00 — Cabo da Roca (opcional)', content: [
            { kind: 'paragraph', text: 'O ponto mais ocidental da Europa, a 18 km de Sintra. Autocarro da Carris Metropolitana, linha 1253 (Sintra — Cabo da Roca — Cascais), ~40 min, bilhete ~2,60 €. Pôr do sol sobre o Atlântico.' }
          ]},
          { id: 'r8', title: '19:30 — regresso', content: [
            { kind: 'paragraph', text: 'Comboio para Lisboa. Último para o Rossio 23:15.' }
          ]}
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Conselhos práticos',
      content: [
        { kind: 'checklist', items: [
          '🎫 Para o Palácio da Pena, compre online com antecedência e escolha um horário marcado precisamente para a entrada no palácio (parquesdesintra.pt). Na época alta, os horários podem esgotar com uma semana de antecedência; conte com tempo para subir a partir da entrada do parque',
          '👟 Calçado confortável — há muita caminhada por colinas e calçada irregular',
          '🧥 Camisola: no Palácio da Pena pode estar ventoso e fresco mesmo no Verão',
          '💧 Água — há poucos cafés no topo, leve uma garrafa',
          '🎫 Ao comprar vários monumentos dos Parques de Sintra online, o desconto é calculado no cesto; já não existe um «combo» fixo ao preço antigo — não faça o orçamento com valores desactualizados',
          '🚌 Autocarro 434 (13,50 € por bilhete diário hop-on/hop-off (434/435); bilhete simples ~4 € por sentido) — prático para subir ao Palácio da Pena e ao Castelo dos Mouros, mas não cobre todos os locais: a Monserrate, à Quinta da Regaleira e aos Capuchos chega-se a pé, de táxi ou por outras linhas',
          '🚫 Evite o Palácio da Pena depois das 11:00 — multidões; a Quinta da Regaleira é melhor a meio do dia',
          '📸 Melhor altura para fotografar o Palácio da Pena — manhã (sem sombras) ou pôr do sol',
          '🚗 De carro: estacionamento na cidade 3–5 € por dia, mas as estradas ficam congestionadas',
          '💰 O Lisboa Card costuma cobrir o comboio CP até Sintra e dá descontos em alguns locais, mas a entrada nos palácios (Pena, Regaleira, etc.) paga-se à parte — consulte a lista de benefícios do cartão'
        ]}
      ]
    },
    {
      id: 'season',
      title: 'Sazonalidade',
      content: [
        { kind: 'checklist', items: [
          '🌸 Primavera (Março–Maio) — época ideal, floração, número moderado de turistas',
          '☀️ Verão (Junho–Agosto) — muitos turistas, mas os dias são longos',
          '🍂 Outono (Setembro–Novembro) — bonito, +15–20°C, menos multidões',
          '🌧️ Inverno (Dezembro–Fevereiro) — tranquilo, nevoeiro e chuva frequentes, mas os palácios funcionam'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Parques de Sintra — Monte da Lua (operador dos palácios)', url: 'https://www.parquesdesintra.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Visit Sintra — turismo municipal', url: 'https://www.visitsintra.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Turismo de Portugal — Sintra', url: 'https://www.visitportugal.com/en/destinos/lisboa-regiao/73779', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
