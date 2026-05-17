export default {
  editorialVoice: 'hackportugal',
  id: 'intercity-transport',
  categoryId: 'travel_portugal',
  title: 'Transporte interurbano em Portugal — comboio, autocarro, avião',
  tldr: 'Três canais: comboios da CP (conforto + rede Lisboa–Porto–Braga + Alentejo), autocarros Rede Expressos (rede nacional económica) e FlixBus (internacionais). Ilhas — aviões TAP, SATA, Ryanair e ferries Atlanticoline. Algarve — autocarros EVA. O agregador Omio reúne tudo. Ao reservar com 2–4 semanas de antecedência, os preços descem 30–50 %.',
  tags: ['transporte', 'comboio', 'autocarro', 'avião', 'cp', 'rede expressos'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'train-cp',
      title: 'CP — Comboios de Portugal',
      content: [
        { kind: 'paragraph', text: 'A ferrovia nacional. Cobre as rotas Lisboa — Porto — Braga, Lisboa — Alentejo — Algarve, Coimbra, rotas de montanha do Douro. Não cobre as ilhas.' },
        { kind: 'substeps', items: [
          { id: 'cp1', title: 'Tipos de comboios', content: [
            { kind: 'checklist', items: [
              'Alfa Pendular — alta velocidade (220 km/h), Lisboa–Porto 2:40, conforto «Conforto» / «Turístico»',
              'Intercidades — rápido, 3 horas Lisboa–Porto, mais barato',
              'Regional — lento, muitas paragens',
              'Urbano — comboios suburbanos (Lisboa, Porto)',
              'Comboios Históricos — Douro (época)'
            ]}
          ]},
          { id: 'cp2', title: 'Preços (2026)', content: [
            { kind: 'checklist', items: [
              'Lisboa–Porto Alfa: 30–45 € (antecipadamente) / 50–70 € (no dia da viagem)',
              'Lisboa–Faro: 20–30 €',
              'Lisboa–Coimbra: 15–25 €',
              'Porto–Braga: 5–8 €',
              'Descontos: 50% para crianças dos 4 aos 13 anos, 25-50% para estudantes, 50% para reformados 65+',
              'Interrail Pass: disponível para residentes em Portugal'
            ]}
          ]},
          { id: 'cp3', title: 'Compra', content: [
            { kind: 'checklist', items: [
              'Site cp.pt — versão móvel em inglês',
              'Aplicação «CP - Comboios de Portugal»',
              'Bilheteira na estação',
              'Terminais de autoatendimento',
              'Com 10–30 dias de antecedência = desconto',
              'Bilhete: bilhete eletrónico com código QR'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'bus-intercity',
      title: 'Autocarros interurbanos',
      content: [
        { kind: 'substeps', items: [
          { id: 'b1', title: 'Rede Expressos', content: [
            { kind: 'checklist', items: [
              'Rede nacional, 200+ destinos',
              'Lisboa–Porto: 22 €, 3:30 horas',
              'Lisboa–Faro: 20 €, 3 horas',
              'Lisboa–Braga: 24 €',
              'Wi-Fi, carregamento USB, conforto',
              'rede-expressos.pt / aplicação',
              'Terminal em Lisboa: Sete Rios',
              'Terminal no Porto: Campo 24 de Agosto'
            ]}
          ]},
          { id: 'b2', title: 'FlixBus', content: [
            { kind: 'paragraph', text: 'Rede internacional. Em Portugal: Lisboa–Porto (10–25 €), Lisboa–Faro (15–35 €). Para o estrangeiro: Portugal–Espanha (Madrid 35 €), Portugal–França (Paris 100 €). Vantagem: preços baratos; desvantagem: menos carreiras do que a Rede Expressos.' }
          ]},
          { id: 'b3', title: 'Alsa', content: [
            { kind: 'paragraph', text: 'Operador espanhol, rotas Portugal–Espanha. Lisboa–Madrid, Porto–Santiago. A partir de 25 €.' }
          ]},
          { id: 'b4', title: 'EVA Transportes', content: [
            { kind: 'paragraph', text: 'Algarve. Faro–Lagos, Albufeira e rotas rurais. 5–15 €.' }
          ]},
          { id: 'b5', title: 'Regionais / locais', content: [
            { kind: 'paragraph', text: 'Rodonorte (norte), Rodoviária do Alentejo, Rodoviária do Tejo e outras. Para aldeias e povoações remotas — muitas vezes o único transporte.' }
          ]}
        ]}
      ]
    },
    {
      id: 'domestic-flights',
      title: 'Voos internos — apenas para as ilhas',
      content: [
        { kind: 'checklist', items: [
          '✈️ Entre Lisboa/Porto e cidades do continente há voos apenas raramente (Faro 1 vez por dia)',
          '✈️ As principais ligações são para a Madeira (Funchal) e os Açores (Ponta Delgada)',
          '🇵🇹 TAP Portugal — transportadora principal, hub em Lisboa',
          '🇵🇹 SATA Azores Airlines — especialista nos Açores, voos interilhas',
          '💶 Ryanair — Porto/Lisboa para a Madeira ~40–80 € antecipadamente',
          '🏝️ Madeira: Lisboa–Funchal 1:40 min, 50–150 €',
          '🏝️ Açores: Lisboa–Ponta Delgada 2:15, 80–200 €'
        ]}
      ]
    },
    {
      id: 'ferries',
      title: 'Ferries — ilhas',
      content: [
        { kind: 'checklist', items: [
          '⛴️ Atlanticoline — ferries interilhas nos Açores. São Miguel ↔ Terceira ↔ Faial e outras. A partir de 15 €',
          '⛴️ Porto Santo Line — Madeira ↔ Porto Santo, 2:30 horas, 50–80 €',
          '⛴️ Transtejo / Soflusa — Lisboa ↔ Almada/Cacilhas/Barreiro (transporte público, 1–2 €)',
          '⛴️ Berlengas — a partir de Peniche, sazonais, 25 €'
        ]}
      ]
    },
    {
      id: 'aggregators',
      title: 'Agregadores e planeamento',
      content: [
        { kind: 'checklist', items: [
          '🔍 Omio (omio.com) — pesquisa por comboios + autocarros + aviões',
          '🔍 Rome2Rio — rotas com ligações',
          '🔍 Google Flights — para aviões',
          '🔍 Skyscanner — opções económicas',
          '📱 Aplicações CP + Rede Expressos + FlixBus — a reserva direta é mais barata',
          '📅 Com 10–30 dias de antecedência — melhores preços',
          '💶 Bilhete combinado: muitas vezes é mais barato comprar separadamente CP + autocarro local'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Lisboa–Porto Alfa Pendular', amountEURMin: 30, amountEURMax: 70 },
    { label: 'Lisboa–Porto Rede Expressos', amountEUR: 22 },
    { label: 'Lisboa–Faro (comboio)', amountEURMin: 20, amountEURMax: 30 },
    { label: 'Lisboa–Funchal (avião)', amountEURMin: 50, amountEURMax: 150 },
    { label: 'Lisboa–Ponta Delgada (avião)', amountEURMin: 80, amountEURMax: 200 }
  ],
  sources: [
    { title: 'CP — Comboios de Portugal', url: 'https://www.cp.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Rede Expressos', url: 'https://rede-expressos.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Infraestruturas de Portugal', url: 'https://www.infraestruturasdeportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'TAP Portugal', url: 'https://www.flytap.com/', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Atlanticoline — ferries nos Açores', url: 'https://www.atlanticoline.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'T — Autoridade da Mobilidade e dos Transportes', url: 'https://www.amt-autoridade.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
