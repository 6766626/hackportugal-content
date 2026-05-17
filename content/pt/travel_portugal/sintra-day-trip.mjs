export default {
  editorialVoice: 'hackportugal',
  id: 'sintra-day-trip',
  categoryId: 'travel_portugal',
  title: 'Sintra — excursão de um dia a partir de Lisboa',
  tldr: 'Sintra é uma cidade classificada pela UNESCO, com palácios românticos nas montanhas, a 40 min de Lisboa de comboio. Essencial: Palácio da Pena, Castelo dos Mouros, Quinta da Regaleira. Itinerário completo — 1 dia, com muita caminhada activa por colinas. Chegue cedo, regresse no último comboio. Bilhetes online obrigatórios.',
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
            { kind: 'paragraph', text: 'Palácio romântico multicolorido do século XIX no topo da serra. Símbolo de Sintra. Entrada no parque + palácio: 14 €. Só parque: 7,50 €. Aberto 9:30–19:00 no Verão, até às 18:00 no Inverno. Bilhetes online com horário marcado OBRIGATÓRIOS.' }
          ]},
          { id: 's2', title: 'Castelo dos Mouros (Castelo Mourisco)', content: [
            { kind: 'paragraph', text: 'Muralhas de pedra dos séculos VIII–XII na serra vizinha. Vistas de 360°. Bilhete combinado com o Palácio da Pena: 20,50 €. Separado: 8 €. Muita caminhada sobre as muralhas — não é indicado para quem tem medo de alturas.' }
          ]},
          { id: 's3', title: 'Quinta da Regaleira', content: [
            { kind: 'paragraph', text: 'Quinta mística do início do século XX com o “poço iniciático” subterrâneo (Poço Iniciático) — uma escadaria em espiral escavada na rocha. 15 €. A zona dos jardins inclui elementos góticos, grutas e túneis. Visita obrigatória.' }
          ]},
          { id: 's4', title: 'Palácio Nacional de Sintra', content: [
            { kind: 'paragraph', text: 'Palácio urbano dos reis, séculos XIII–XVIII. Duas chaminés cónicas brancas — uma silhueta inconfundível. 10 €. No centro da zona histórica.' }
          ]},
          { id: 's5', title: 'Palácio de Monserrate', content: [
            { kind: 'paragraph', text: 'Palácio-vila exótico em estilo oriental. Menos visitado. 8 €. A 4 km do centro — táxi.' }
          ]},
          { id: 's6', title: 'Convento dos Capuchos', content: [
            { kind: 'paragraph', text: 'Mosteiro franciscano escondido na floresta. Celas ascéticas nas paredes das rochas. 7 €. A 10 km do centro.' }
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
            { kind: 'paragraph', text: 'Comboio a partir do Rossio. À saída — autocarro 434 (5 € por dia, pode sair e voltar a entrar ao longo do percurso) ou táxi/Uber até ao Palácio da Pena (6–8 €).' }
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
            { kind: 'paragraph', text: 'O ponto mais ocidental da Europa, a 18 km de Sintra. Autocarro 403 Scotturb, 40 min. Pôr do sol sobre o Atlântico.' }
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
          '🎫 Bilhetes online para o Palácio da Pena OBRIGATÓRIOS (parquesdesintra.pt). Na época alta, os horários podem esgotar com uma semana de antecedência',
          '👟 Calçado confortável — há muita caminhada por colinas e calçada irregular',
          '🧥 Camisola: no Palácio da Pena pode estar ventoso e fresco mesmo no Verão',
          '💧 Água — há poucos cafés no topo, leve uma garrafa',
          '🎫 Bilhete combinado Palácio da Pena + Castelo dos Mouros + Monserrate — 32 €, poupança de 8 €',
          '🚌 Autocarro 434 (5 € por dia, pode sair e voltar a entrar ao longo do percurso) — cobre todas as principais atracções',
          '🚫 Evite o Palácio da Pena depois das 11:00 — multidões; a Quinta da Regaleira é melhor a meio do dia',
          '📸 Melhor altura para fotografar o Palácio da Pena — manhã (sem sombras) ou pôr do sol',
          '🚗 De carro: estacionamento na cidade 3–5 € por dia, mas as estradas ficam congestionadas',
          '💰 O Lisboa Card NÃO cobre os palácios de Sintra — bilhetes separados'
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
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
