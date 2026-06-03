export default {
  editorialVoice: 'hackportugal',
  id: 'aveiro-coast',
  categoryId: 'travel_portugal',
  title: 'Aveiro e Costa Nova — a «Veneza portuguesa»',
  tldr: 'Aveiro é uma cidade costeira com ria e canais, onde circulam os barcos pintados moliceiros. A vizinha Costa Nova é uma aldeia piscatória com casas às riscas. Ovos moles são a sobremesa emblemática. A 35 min de comboio do Porto, a 2–2,5 h de Lisboa. Meio dia a um dia é suficiente.',
  tags: ['aveiro', 'costa nova', 'excursão', 'centro'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'arrival',
      title: 'Como chegar',
      content: [
        { kind: 'checklist', items: [
          '🚆 Porto-Campanhã → Aveiro: 35 min no Urbano ou 28 min no IC/AP, 3,50–13 €',
          '🚆 Lisboa Oriente → Aveiro: 2 h–2 h 30 min no AP/IC, 20–30 €',
          '🚗 De carro: a partir do Porto 1 h pela A1, a partir de Lisboa 2,5 h pela A1',
          '🚌 Rede Expressos / FlixBus — demora mais, mas é mais barato'
        ]}
      ]
    },
    {
      id: 'aveiro',
      title: 'Principais locais em Aveiro',
      content: [
        { kind: 'checklist', items: [
          '🛶 Ria de Aveiro (laguna) + passeio de moliceiro — barco pintado (historicamente usado para recolher algas para fertilizante). 13–15 € por pessoa, 40–50 min',
          '🏛️ Mosteiro de Jesus / Museu de Aveiro — mosteiro gótico do séc. XV, túmulo da princesa Santa Joana. 5 €',
          '🎭 Centro Cultural e de Congressos — arquitectura contemporânea',
          '🏛️ Antiga estação ferroviária — azulejos com cenas da região, gratuito',
          '🎨 Arte Nova (Art Nouveau) — muitos edifícios neste estilo, por exemplo a Casa do Major Pessoa (Museu de Arte Nova)',
          '⛪ Sé de Aveiro — catedral',
          '🎨 Fábrica Centro Ciência Viva — centro científico interactivo para crianças, 4 €',
          '🧂 Salinas de Aveiro — campos de sal, uma tradição multissecular. Pode comprar flor de sal',
          '🥖 Pastelarias — a Oficina do Doce (Rua Tenente Rezende) é a melhor opção para ovos moles'
        ]}
      ]
    },
    {
      id: 'costa-nova',
      title: 'Costa Nova — casas às riscas',
      content: [
        { kind: 'paragraph', text: 'A 10 km de Aveiro, junto ao oceano, fica a Costa Nova do Prado. É famosa pelos palheiros — casas com riscas vivas (historicamente — para os pescadores conseguirem distinguir as suas casas a partir do mar).' },
        { kind: 'checklist', items: [
          '🏖️ Praia com areia infinita até ao horizonte — parte da Costa de Prata',
          '🎨 Casas de Palheiro — casas às riscas (amarelo e branco, vermelho e branco)',
          '🦪 Restaurante Marisqueira Rota dos Sabores — marisco local',
          '🚲 Ciclovia ao longo do oceano e da ria',
          '☀️ Frequentemente ventoso — para banhos de mar no Verão, Agosto é o melhor mês',
          '🌅 Pôr do sol sobre o Atlântico'
        ]},
        { kind: 'paragraph', text: 'Como chegar: autocarro Aveirobus 5 a partir de Aveiro, 30 min, 2,35 €, ou de carro.' }
      ]
    },
    {
      id: 'food',
      title: 'O que provar',
      content: [
        { kind: 'checklist', items: [
          '🥚 Ovos moles (indicação geográfica protegida) — gema de ovo numa fina obreia em forma de concha, rebuçados (peixinhos embrulhados em papéis)',
          '🐟 Caldeirada de enguias — ensopado de enguias da ria',
          '🐟 Bacalhau à Lagareiro — bacalhau com batatas e azeite',
          '🐚 Berbigão — bivalves da ria',
          '🍚 Arroz de lampreia — arroz com lampreia (época no Inverno)',
          '🥧 Tripas de Aveiro — doces de bolacha tipo «tripa» em forma de rolinhos com creme',
          '🍷 Bairrada — região vinícola próxima (espumante e Baga)'
        ]}
      ]
    },
    {
      id: 'nearby',
      title: 'Nas redondezas',
      content: [
        { kind: 'checklist', items: [
          '🏖️ Praia da Barra (praia vizinha) — Farol da Barra, um dos mais altos de Portugal',
          '🏛️ Ílhavo — antiga capital do bacalhau (secagem de bacalhau), Museu do Bacalhau',
          '🏛️ Vista Alegre — famosa fábrica portuguesa de porcelana desde 1824, museu + outlet',
          '🍷 Região vinícola da Bairrada — 30 min, espumante e Baga. Adegas para provas',
          '🌊 Costa da Caparica — praia (150 km mais adiante)',
          '🏛️ Figueira da Foz — cidade balnear a sul'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Conselhos',
      content: [
        { kind: 'checklist', items: [
          '🗓️ Melhor época: Abril–Outubro. No Inverno é ventoso',
          '🎫 Moliceiro — não é necessário reservar, bilhetes no cais',
          '📸 Melhor fotografia da Costa Nova — de manhã, quando o sol incide nas riscas coloridas',
          '🚲 Em Aveiro — bicicletas BUGA do município, gratuitas',
          '🍷 Roteiro combinado a partir do Porto: Aveiro + Bairrada → Coimbra em 2 dias',
          '👟 Calçado para gravilha junto ao mar e aos canais'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Câmara Municipal de Aveiro — turismo', url: 'https://www.cm-aveiro.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Visit Aveiro — Região Centro', url: 'https://www.visitcentro.com/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Turismo de Portugal — Aveiro', url: 'https://www.visitportugal.com/en/destinos/centro-de-portugal/73753', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
