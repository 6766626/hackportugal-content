export default {
  editorialVoice: 'hackportugal',
  id: 'azores-madeira-subsidy',
  categoryId: 'travel_portugal',
  title: 'Açores e Madeira — Subsídio Social de Mobilidade e como comprar bilhetes',
  tldr: 'O subsídio estatal Subsídio Social de Mobilidade (SSM) existe para residentes das regiões autónomas dos Açores e da Madeira/Porto Santo em viagens entre a região e o continente (ou entre regiões/ilhas do arquipélago), bem como para estudantes com ligação à região. NÃO funciona para residentes do continente como desconto turístico para voar para as ilhas. O direito é comprovado pela residência na região autónoma. O montante e o número de viagens subsidiadas são definidos pelos Decreto-Lei/Portaria em vigor — confirme as regras actualizadas na ANAC/IMT/SATA. Para turistas do continente — tarifas normais da TAP, SATA, Ryanair (procure ofertas antecipadas e opções low-cost).',
  tags: ['açores', 'madeira', 'subsídio', 'voos'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'stp-overview',
      title: '✈️ STP — Social Territorial de Passageiros',
      content: [
        { kind: 'paragraph', text: 'Programa de subsidiação de voos entre Portugal continental e as regiões autónomas (Açores, Madeira) — compensa a diferença de preços entre o continente e as ilhas.' },
        { kind: 'checklist', items: [
          '✅ Quem tem direito: residentes da região autónoma dos Açores ou da Madeira/Porto Santo (não do continente!) — estrangeiros com autorização de residência e residência real na região também são elegíveis',
          '✅ Residentes das ilhas → continente: com o SSM o passageiro paga um valor limitado por ida e volta — máximo 119 € (Açores–continente) / 79 € (Madeira–continente); estudantes 89 € / 59 € (Decreto-Lei 37-A/2025, alterado pelo DL 1-A/2026, em vigor desde 15 jan 2026). Este é o valor máximo que paga do seu bolso, não o valor do subsídio',
          '✅ Residentes do continente → ilhas (como turistas): subsídio mais baixo, dependendo da rota',
          '✅ Máximo de 4 viagens por ano para residentes das ilhas; 2 — para turistas',
          '❌ Não se aplica a: viagens de negócios (se pagas pela empresa), não residentes',
          '💰 Exemplo: bilhete Lisboa—Ponta Delgada 210 € → subsídio 80 € → custo final 130 €'
        ]}
      ]
    },
    {
      id: 'how-to',
      title: '📋 Como obter',
      content: [
        { kind: 'substeps', items: [
          { id: 'h1', title: 'Opção A — subsídio integrado na compra (SATA, TAP)', content: [
            { kind: 'checklist', items: [
              'Em sata.pt ou flytap.pt — inserir o NIF durante a reserva',
              'O sistema aplica automaticamente a tarifa «para residente»',
              'Paga imediatamente o valor reduzido',
              'De forma autónoma, sem burocracia em papel',
              'Método preferencial — mais rápido e simples'
            ]}
          ]},
          { id: 'h2', title: 'Opção B — reembolso após a viagem (Ryanair, outras transportadoras)', content: [
            { kind: 'checklist', items: [
              'Comprou o bilhete ao preço total sem NIF',
              'Após a viagem — pedido em sata.pt → «Bonificação STP»',
              'Anexar: cartões de embarque, factura, atestado de residência',
              'Prazo de reembolso: até 30 dias após o voo',
              'Dinheiro para o IBAN em 30-60 dias',
              'Burocrático, mas funciona para transportadoras internacionais'
            ]}
          ]},
          { id: 'h3', title: 'Documentos', content: [
            { kind: 'checklist', items: [
              'NIF',
              'Atestado de Residência (se for pedido; normalmente basta o NIF no sistema)',
              'Cartões de embarque nos dois sentidos (para a opção B)',
              'Factura (fatura com NIF)',
              'IBAN bancário'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'island-residents',
      title: '🏝️ Para residentes dos Açores / Madeira',
      content: [
        { kind: 'paragraph', text: 'Se vive nas ilhas — recebe benefícios adicionais do Governo Regional.' },
        { kind: 'substeps', items: [
          { id: 'a1', title: 'Açores', content: [
            { kind: 'checklist', items: [
              'Supersubsídio através da SATA para residentes dos Açores: até 80% de reembolso do custo do bilhete',
              'Máximo de 6 viagens por ano',
              'Subsídio adicional para estudantes / casos médicos — até 100%',
              'Pedido através de srprorainol.azores.gov.pt ou dos serviços municipais'
            ]}
          ]},
          { id: 'm1', title: 'Madeira', content: [
            { kind: 'checklist', items: [
              'Programa semelhante do Governo Regional da Madeira',
              'Bonificação tarifária: 50-80% de reembolso',
              'Registo em madeira.gov.pt',
              'Abrange: TAP, easyJet, rotas SATA Madeira'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'porto-santo',
      title: '🏖️ Porto Santo (Madeira) — oportunidades especiais',
      content: [
        { kind: 'checklist', items: [
          'Ilha de praia a 30 min de voo do Funchal',
          'Porto Santo Line — empresa de ferry (3 horas, 50-80 € ida e volta, desconto de 30% para residentes)',
          'SATA / TAP — 10-15 voos por semana, 35-60 € só ida (residentes)',
          'Na época alta (junho-setembro) — fica lotado, compre bilhetes com 2-3 meses de antecedência'
        ]}
      ]
    },
    {
      id: 'inter-islands',
      title: '🛩️ Voos entre ilhas dos Açores',
      content: [
        { kind: 'checklist', items: [
          'SATA Air Açores — a única transportadora entre ilhas',
          'Residentes: supertarifa de 35-60 € só ida entre ilhas vizinhas',
          'Não residentes: 80-150 €',
          'Rotas: Ponta Delgada ↔ Terceira, Pico, Faial, Corvo, Flores',
          '⚠️ Meteorologia: cancelamentos de voos são frequentes no inverno — compre uma tarifa flexível',
          'Ferries da Atlânticoline — alternativa mais barata, 40-90 min entre ilhas vizinhas'
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Conselhos para turistas nos Açores / Madeira',
      content: [
        { kind: 'checklist', items: [
          '📅 Época: maio-outubro é a melhor — quente, sem tempestades. Mas época alta = preços altos',
          '🌡️ Meteorologia: Madeira 20-26°C durante todo o ano, Açores 15-25°C',
          '🚗 Aluguer de carro: obrigatório para actividades — não se consegue percorrer as ilhas de autocarro; 30-60 €/dia',
          '🏨 Alojamento: AL locais (Airbnb) são mais baratos do que hotéis, muitas vezes com vista',
          '🥾 Trekking: Açores — 8 ilhas, cada uma com os seus trilhos. Madeira — levadas (canais de água), uma experiência obrigatória',
          '🌊 Observação de baleias (Açores, abril-setembro): 50-80 € por uma excursão de 3 horas',
          '🍷 Vinho: vinho da Madeira, vinhas do Pico — património da UNESCO',
          '🏖️ Praias: Porto Santo (Madeira) — a única praia arenosa da região; Açores — vulcânicas, negras'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Bilhete Lisboa—Açores (residente)', amountEURMin: 120, amountEURMax: 180 },
    { label: 'Bilhete Lisboa—Madeira (residente)', amountEURMin: 80, amountEURMax: 160 },
    { label: 'Valor máximo que paga (SSM, ida e volta)', amountEURMin: 79, amountEURMax: 119, note: 'máx. do seu bolso: 119 € Açores / 79 € Madeira' },
    { label: 'Entre ilhas dos Açores (residentes)', amountEURMin: 35, amountEURMax: 60 },
    { label: 'Ferry para Porto Santo', amountEURMin: 50, amountEURMax: 80 }
  ],
  sources: [
    { title: 'SATA Açores — Bonificação STP', url: 'https://www.sata.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'TAP — residentes açorianos', url: 'https://www.flytap.com/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Governo dos Açores — Apoios', url: 'https://portal.azores.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Governo Regional da Madeira — Apoios', url: 'https://www.madeira.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-30',
  verifyIntervalDays: 180
}
