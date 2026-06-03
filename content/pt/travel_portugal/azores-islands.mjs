export default {
  editorialVoice: 'hackportugal',
  id: 'azores-islands',
  categoryId: 'travel_portugal',
  title: 'Açores — 9 ilhas no Atlântico',
  tldr: 'Os Açores são um arquipélago vulcânico a 1500 km de Portugal continental, com 9 ilhas. O principal aeroporto é Ponta Delgada, em São Miguel. Crateras verdes, baleias, nascentes termais e natureza única. Planeie no mínimo 7-10 dias para 2-3 ilhas. Residentes em Portugal têm subsídio para voos.',
  tags: ['açores', 'ilhas', 'natureza', 'baleias'],
  estimatedReadMinutes: 9,
  steps: [
    {
      id: 'overview',
      title: 'Sobre o arquipélago',
      content: [
        { kind: 'paragraph', text: 'Os Açores são uma região autónoma de Portugal. 9 ilhas de origem vulcânica, divididas em 3 grupos: oriental (São Miguel, Santa Maria), central (Terceira, Graciosa, São Jorge, Pico, Faial), ocidental (Flores, Corvo).\n\nÁrea total de 2333 km².' },
        { kind: 'paragraph', text: 'O clima é subtropical ameno (+14-24°C durante todo o ano), mas variável: «pode haver 4 estações num só dia». Muita vegetação, lagoas, cascatas.' }
      ]
    },
    {
      id: 'sao-miguel',
      title: 'São Miguel — «Ilha Verde»',
      content: [
        { kind: 'paragraph', text: 'A maior ilha (760 km²), principal aeroporto. Aqui vive metade da população do arquipélago. Recomenda-se no mínimo 4-5 dias.' },
        { kind: 'checklist', items: [
          '🌋 Lagoa das Sete Cidades — cratera com lagoas azul e verde. Miradouro da Vista do Rei',
          '♨️ Furnas — vale com nascentes termais. Cozido das Furnas — a carne é cozinhada no vulcão durante 6 horas',
          '💧 Caldeira Velha — piscinas termais em floresta tropical',
          '🌋 Lagoa do Fogo — lagoa de cratera a 575 m. Percursos pedestres',
          '🐳 Observação de baleias — abril-outubro (cachalotes, baleia-azul, golfinhos). Excursão 50-80 €',
          '🌊 Praia Santa Bárbara — areia preta, local de surf',
          '🍍 Plantação de Ananases — plantações de ananases em estufas, tradição do séc. XIX',
          '🎨 Ponta Delgada — capital, Portas da Cidade, marina',
          '🌿 Parque Terra Nostra — jardim botânico com piscina termal'
        ]}
      ]
    },
    {
      id: 'pico',
      title: 'Pico — ilha da montanha e do vinho',
      content: [
        { kind: 'checklist', items: [
          '⛰️ Montanha do Pico — montanha mais alta de Portugal (2351 m). Subida de 5-8 h com guia certificado',
          '🍷 Vinhas da Criação Velha (UNESCO) — vinhas em rocha lávica dentro de currais de pedra',
          '🐳 Lajes do Pico — antigo porto baleeiro, agora centro de observação de baleias',
          '🌊 Piscinas naturais — piscinas naturais em lava',
          '🏛️ Museu do Vinho, Museu dos Baleeiros — museus do vinho e da baleação'
        ]}
      ]
    },
    {
      id: 'other-islands',
      title: 'Outras ilhas',
      content: [
        { kind: 'substeps', items: [
          { id: 'o1', title: 'Terceira (UNESCO)', content: [
            { kind: 'paragraph', text: 'Ilha histórica: Angra do Heroísmo — cidade UNESCO do séc. XV. Fortaleza de São João Baptista, touradas à corda.' }
          ]},
          { id: 'o2', title: 'Faial — Ilha Azul', content: [
            { kind: 'paragraph', text: '«Ilha Azul» devido às hortênsias. Capelinhos — vulcão de 1957-58, paisagem lunar. Porto da Horta — paragem de velejadores.' }
          ]},
          { id: 'o3', title: 'São Jorge', content: [
            { kind: 'paragraph', text: 'Ilha alongada com falésias (fajãs — planaltos junto ao mar). Queijo São Jorge DOP, uva Verdelho, festivais gastronómicos.' }
          ]},
          { id: 'o4', title: 'Flores', content: [
            { kind: 'paragraph', text: 'A mais ocidental, 50+ cascatas, natureza intocada, hortênsias.' }
          ]},
          { id: 'o5', title: 'Santa Maria', content: [
            { kind: 'paragraph', text: 'A ilha mais antiga (8,2 milhões de anos), areia vermelha — uma raridade nos Açores. Festival Santa Maria a cada 5 anos.' }
          ]},
          { id: 'o6', title: 'Graciosa', content: [
            { kind: 'paragraph', text: 'Reserva da Biosfera UNESCO. A principal característica — a ilha mais seca. Furna do Enxofre — gruta com lago sulfuroso.' }
          ]},
          { id: 'o7', title: 'Corvo', content: [
            { kind: 'paragraph', text: 'A ilha mais pequena (17 km²), 400 habitantes. Caldeirão — cratera gigante.' }
          ]}
        ]}
      ]
    },
    {
      id: 'getting-there',
      title: 'Como chegar',
      content: [
        { kind: 'checklist', items: [
          '✈️ TAP Lisboa → Ponta Delgada: 2 h 30 min, desde 60 € com reserva antecipada',
          '✈️ SATA / Azores Airlines — transportadora local, muitos voos',
          '✈️ Voos diretos da Europa: no verão Londres, Munique, Amesterdão, Copenhaga',
          '✈️ Dos EUA: Boston, Nova Iorque (época)',
          '🏷️ Residentes em Portugal: tarifas subsidiadas através da «tarifa residente»',
          '⛴️ Ferries interilhas: Atlânticoline na época (abr-out)',
          '✈️ SATA: voos interilhas 30-80 €, 15-40 min entre ilhas'
        ]}
      ]
    },
    {
      id: 'activities',
      title: 'O que fazer',
      content: [
        { kind: 'checklist', items: [
          '🐳 Observação de baleias — abril-outubro, cachalotes e golfinhos garantidos, baleia-azul abril-junho',
          '🥾 Trekking — 50+ percursos PR (pequenas rotas), gratuitos',
          '🏄 Surf — São Miguel, Santa Maria',
          '🤿 Mergulho — Faial, Pico, Santa Maria',
          '🎣 Pesca de alto mar — atum, espadim',
          '♨️ Nascentes termais e piscinas',
          '🚣 Caiaque em lagoas de cratera',
          '🌿 Geoturismo — UNESCO Geopark nos Açores',
          '🍷 Visitas vínicas — Pico, Graciosa'
        ]}
      ]
    },
    {
      id: 'food',
      title: 'Cozinha local',
      content: [
        { kind: 'checklist', items: [
          '🍲 Cozido das Furnas — vaca + porco + legumes, cozinhado em solo vulcânico durante 6 horas',
          '🐟 Lapas grelhadas — lapas grelhadas com alho',
          '🐙 Polvo guisado — polvo em vinho tinto',
          '🐟 Atum — atum fresco (Pico, Faial)',
          '🧀 Queijo São Jorge DOP — queijo local',
          '🍍 Ananás — ananases de São Miguel',
          '🌶️ Massa de pimentão — pasta de pimentão, especialidade',
          '🍮 Queijadas da Graciosa — pequeno bolo doce de queijo fresco'
        ]}
      ]
    },
    {
      id: 'planning',
      title: 'Planeamento da viagem',
      content: [
        { kind: 'checklist', items: [
          '📅 Melhor altura: abril-outubro (tempo quente + observação de baleias)',
          '🌧️ Outubro-março — chuvoso, mas mais barato, mais tranquilo, as hortênsias florescem',
          '📆 7 dias — 2 ilhas, 10-14 dias — 3-4 ilhas',
          '🚗 Alugar carro é obrigatório em cada ilha',
          '🏨 Booking / Airbnb funcionam, além de turismo rural local (casas ecológicas)',
          '💰 Orçamento por dia por pessoa: 70-120 € (económico), 150-250 € (médio)',
          '🎒 Leve: casaco quente, impermeável, calçado confortável, fato de banho ou calções de banho',
          '📱 Rede móvel local MEO/Vodafone 4G funciona em todas as ilhas habitadas'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Visit Azores — turismo oficial', url: 'https://www.visitazores.com/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Governo Regional dos Açores', url: 'https://www.azores.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Atlânticoline — ferries', url: 'https://www.atlanticoline.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Parques Naturais dos Açores', url: 'https://parquesnaturais.azores.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
