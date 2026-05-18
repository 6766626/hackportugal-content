export default {
  editorialVoice: 'hackportugal',
  id: 'douro-valley',
  categoryId: 'travel_portugal',
  title: 'Vale do Douro — região vinícola UNESCO',
  tldr: 'O Vale do Douro (Alto Douro Vinhateiro, UNESCO desde 2001) é a região vinícola demarcada mais antiga do mundo (1756).\n\nVinhas em socalcos ao longo do rio, vinho do Porto, aldeias pitorescas. A partir do Porto: comboio até Régua/Pinhão (2-2,5 h), carro, cruzeiros fluviais, helicóptero. Ideal para 2-3 dias.',
  tags: ['douro', 'vinho do porto', 'vinho', 'unesco'],
  estimatedReadMinutes: 9,
  steps: [
    {
      id: 'history-geography',
      title: 'Sobre a região',
      content: [
        { kind: 'paragraph', text: 'O Douro é o rio que desagua no Atlântico, no Porto. Mais a montante fica a região do Alto Douro (250 km desde Espanha), onde se cultivam uvas para vinho do Porto e vinhos de mesa. Foi a primeira denominação regional protegida do mundo (1756, Marquês de Pombal).' },
        { kind: 'paragraph', text: 'As vinhas em socalcos são uma paisagem construída pelo ser humano e classificada como Património Mundial da UNESCO. Encostas até 60°. Castas: Touriga Nacional, Touriga Franca, Tinta Roriz.' }
      ]
    },
    {
      id: 'how-to-visit',
      title: 'Como visitar',
      content: [
        { kind: 'substeps', items: [
          { id: 'v1', title: 'Comboio (mais barato, romântico)', content: [
            { kind: 'paragraph', text: 'Porto-São Bento → Peso da Régua (2 h, 11 €) → Pinhão (40 min, 4 €). O comboio segue pela margem do rio, uma das linhas mais pitorescas da Europa. Sente-se do lado direito (se sair do Porto).' }
          ]},
          { id: 'v2', title: 'Carro (flexível)', content: [
            { kind: 'paragraph', text: 'Do Porto até à Régua são 1,5-2 h. Depois, até Pinhão, Favaios, São João da Pesqueira — sempre por estradas panorâmicas. Recomenda-se alugar por 2 dias.' }
          ]},
          { id: 'v3', title: 'Cruzeiro fluvial', content: [
            { kind: 'paragraph', text: 'A partir do Porto (Cais da Estiva / Gaia) — cruzeiros de um dia (até à Régua, 60-80 €) ou de vários dias (3-8 dias pelo rio) com CroisiEurope, Douro Azul e outros. Incluem almoço, por vezes jantar e prova de vinhos.' }
          ]},
          { id: 'v4', title: 'Helicóptero ou tour de carro', content: [
            { kind: 'paragraph', text: 'Tours de helicóptero a partir de Viseu/Régua — voo de 20 minutos a partir de 150 €. Tours de carro a partir do Porto — 90-150 € por pessoa, com guia e visita a 2-3 quintas vinícolas.' }
          ]}
        ]}
      ]
    },
    {
      id: 'key-stops',
      title: 'Paragens principais',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: 'Peso da Régua', content: [
            { kind: 'paragraph', text: 'A principal “porta de entrada” do Douro. Museu do Douro (história da região, 7,50 €). Ponto de partida de cruzeiros. Muitas quintas vinícolas nas proximidades.' }
          ]},
          { id: 's2', title: 'Pinhão', content: [
            { kind: 'paragraph', text: 'O coração da região. A estação ferroviária com azulejos é lendária. Vistas panorâmicas a partir de Casal de Loivos (10 min de carro). Muitas quintas vinícolas num raio de 10 km.' }
          ]},
          { id: 's3', title: 'Provesende', content: [
            { kind: 'paragraph', text: 'Uma joia arquitetónica — aldeia do século XVIII bem preservada, com barquinho (pão tradicional), fontes e fachadas brasonadas.' }
          ]},
          { id: 's4', title: 'São João da Pesqueira', content: [
            { kind: 'paragraph', text: 'A parte superior, menos turística. Quintas vinícolas antigas, igrejas, vistas.' }
          ]},
          { id: 's5', title: 'Favaios', content: [
            { kind: 'paragraph', text: 'Moscatel do Douro (vinho doce), famoso desde o século XVII. Aldeia entre vinhas. Visite a Adega Cooperativa de Favaios.' }
          ]},
          { id: 's6', title: 'Barragem do Carrapatelo', content: [
            { kind: 'paragraph', text: 'Barragem com eclusa de navegação de 35 m — a mais alta da Europa. Por ali passam navios de cruzeiro.' }
          ]}
        ]}
      ]
    },
    {
      id: 'quintas',
      title: 'Onde fazer provas',
      content: [
        { kind: 'paragraph', text: 'A maioria das grandes quintas vinícolas está aberta a visitantes: há visitas guiadas e provas (15-40 € por pessoa). Na época alta, é melhor reservar com 1-2 semanas de antecedência. Muitas têm restaurantes e alojamento.' },
        { kind: 'checklist', items: [
          '🍷 Quinta do Seixo (Sandeman) — arquitetura modernista, panorama',
          '🍷 Quinta da Pacheca — histórica, dormida em barricas de vinho',
          '🍷 Quinta do Crasto — magnífica piscina emblemática, tours premium',
          '🍷 Quinta Nova de Nossa Senhora do Carmo — hotel Relais & Châteaux',
          '🍷 Quinta do Vallado — design contemporâneo de Francisco Olazabal',
          '🍷 Quinta do Panascal (Fonseca) — familiar, clássica',
          '🍷 Quinta de la Rosa — família anglo-portuguesa, Relais & Châteaux'
        ]}
      ]
    },
    {
      id: 'activities',
      title: 'O que fazer além do vinho',
      content: [
        { kind: 'checklist', items: [
          '🚤 Barco rabelo — embarcação tradicional para transportar barricas, agora usada para cruzeiros',
          '🛶 Caiaque no Douro — em recantos tranquilos',
          '🚴 Bicicleta — trilhos de montanha e estradas de aldeia',
          '🚶 Percursos pedestres — Miradouro de São Leonardo de Galafura, Fonte da Aldeia',
          '🎭 Miradouros — pontos panorâmicos para o pôr do sol (Casal de Loivos, São Leonardo da Galafura, Sabrosa)',
          '🏩 Dormida numa quinta vinícola — uma experiência única entre vinhas',
          '📷 Tour fotográfico ao pôr do sol — setembro-outubro, quando as folhas ficam vermelho-alaranjadas'
        ]}
      ]
    },
    {
      id: 'seasons',
      title: 'Quando ir',
      content: [
        { kind: 'checklist', items: [
          '🌸 Abril-maio — floração, +18-22°C, vinhas verdes',
          '🌞 Junho-agosto — calor (+30-38°C no interior), muitos turistas',
          '🍇 Setembro-outubro — vindima, a época mais bonita, as folhas ficam avermelhadas. Em algumas quintas vinícolas é possível participar na apanha',
          '🍷 Novembro-março — vinificação, poucos turistas, descontos interessantes',
          '❄️ Inverno — neve é rara, mas pode haver nevoeiro'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Conselhos',
      content: [
        { kind: 'checklist', items: [
          '🚆 Comboio — a forma mais cénica para uma primeira visita',
          '🚗 Carro — para explorar melhor a região (2+ dias)',
          '🗣️ Nas quintas vinícolas, normalmente fala-se inglês/português/por vezes francês/espanhol',
          '💶 Prova: 15-25 € básica, 40-60 € premium',
          '🍽️ Almoço numa quinta vinícola — normalmente 30-50 €, vale a pena',
          '🎒 Calçado resistente — as encostas são íngremes',
          '🧢 Chapéu e creme SPF — o sol é forte no verão',
          '📱 A rede móvel pode ser fraca no vale',
          '🧳 Limite de bagagem: 1 garrafa na bagagem de mão, o restante deve ir no porão'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'IVDP — Instituto dos Vinhos do Douro e Porto', url: 'https://www.ivdp.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Turismo do Porto e Norte — Douro', url: 'https://www.portoenorte.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'UNESCO — Região Vinhateira do Alto Douro', url: 'https://whc.unesco.org/en/list/1046/', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Wines of Portugal — região do Douro', url: 'https://www.winesofportugal.com/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 365
}
