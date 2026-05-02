export default {
  editorialVoice: 'hackportugal',
  id: 'lisbon-areas-by-budget',
  categoryId: 'housing_rent',
  title: 'Onde viver em Lisboa: zonas por orçamento e tipo de família',
  tldr: 'Em 2026, na Greater Lisbon, a escolha não é “Lisboa ou não”, mas sim a combinação orçamento + escola/escritório + transportes. Para uma pessoa: 900–1 300 €/mês — Almada, Amadora, Loures, Sintra; 1 300–1 800 € — Oeiras, Benfica, Telheiras; 1 800 €+ — centro de Lisboa/Cascais. Uma família com uma criança em T2/T3 precisa normalmente de um orçamento de 1 500–2 800 €/mês. Rendas: Lisboa 20–25 €/m², Oeiras 16–20 €/m², Cascais 18–24 €/m², Almada/Sintra/Loures 11–16 €/m².',
  tags: ['arrendamento', 'lisboa', 'oeiras', 'cascais', 'família'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'map-logic',
      title: 'Como ler o mapa da Greater Lisbon',
      content: [
        { kind: 'paragraph', text: 'A Greater Lisbon não é apenas o município de Lisboa. Para viver, o mais importante é o eixo de transportes: comboio da Cascais line, Sintra line, Fertagus pela ponte 25 de Abril, metro, A5/IC19/A2. A diferença de renda entre o centro de Lisboa e Sintra/Almada pode ser de 600–1 200 € por mês por um T2 semelhante.' },
        { kind: 'checklist', items: [
          'Se o escritório for em Saldanha/Marquês/Campo Pequeno — veja o metro de Lisboa, Oeiras pela Cascais line, Loures/Odivelas por metro/autocarro.',
          'Se o escritório for no Parque das Nações — Moscavide, Olivais, Sacavém, Loures e a Vila Franca line são convenientes.',
          'Se o escritório for em Oeiras/Lagoas Park/Taguspark — é melhor Oeiras, Carcavelos, Paço de Arcos, Massamá, Cacém; a partir do centro de Lisboa muitas vezes demora mais.',
          'Se a escola for internacional — verifique antecipadamente Cascais/Oeiras/Sintra: há mais escolas privadas e international schools, mas a renda é mais alta.',
          'Se precisa de praia sem carro — Cascais line: Algés, Oeiras, Carcavelos, Parede, Cascais.',
          'Se o orçamento for mais importante do que a imagem — Almada, Seixal, Amadora, Sintra e Loures dão mais m² pelo mesmo dinheiro.',
          'Se não tem carro — escolha no máximo a 10–12 minutos a pé do metro/CP/Fertagus; a dependência do autocarro piora bastante o dia a dia.'
        ] }
      ]
    },
    {
      id: 'budgets',
      title: 'Orçamentos 2026: quanto prever para a renda',
      content: [
        { kind: 'paragraph', text: 'As referências abaixo são para arrendamento de longa duração sem despesas incluídas, com base em anúncios e negócios no mercado na primavera de 2026. Os bons apartamentos desaparecem rapidamente; os senhorios pedem frequentemente 2 cauções + 1–2 meses adiantados e comprovativo de rendimentos.' },
        { kind: 'checklist', items: [
          'Até 1 000 €/mês: estúdio/T0 ou T1 pequeno na Amadora, Loures, Sintra, Margem Sul; em Lisboa quase sempre implica compromisso no estado do imóvel ou na zona.',
          '1 000–1 300 €/mês: T1 em Almada, Amadora, Loures, Sintra; por vezes T1 em Benfica/Olivais/Algés.',
          '1 300–1 700 €/mês: T1/T2 em Oeiras, Algés, Benfica, Telheiras, Moscavide; para T2 é melhor procurar fora do centro.',
          '1 700–2 200 €/mês: T2 normal para casal ou família em Oeiras, Almada premium, Cascais fora da frente de mar, anel exterior de Lisboa.',
          '2 200–3 000 €/mês: T2/T3 em boas zonas de Cascais/Oeiras/Lisboa; já permite escolher escola, estacionamento e estado do imóvel.',
          '3 000 €+/mês: Cascais, Estoril, Chiado, Príncipe Real, Avenidas Novas, Parque das Nações, T3/T4 familiares com garagem.'
        ] },
        { kind: 'warning', text: 'Não planeie um orçamento “mesmo no limite”. À renda, acrescente 120–250 €/mês para electricidade/gás/água/internet para um casal e 200–350 €/mês para uma família, mais condomínio, que por vezes está incluído e por vezes não.' }
      ]
    },
    {
      id: 'areas',
      title: 'Zonas por tipo de família e preço por m²',
      content: [
        { kind: 'substeps', items: [
          { id: 'single-couple', title: 'Uma pessoa ou casal sem filhos', content: [
            { kind: 'paragraph', text: 'O critério principal é o trajecto para o trabalho e a vida ao fim do dia. Se quer cidade: Avenidas Novas, Arroios, Anjos, Alameda, Campo de Ourique, Benfica. Se quer mais barato: Amadora, Damaia, Odivelas, Loures, Almada.' },
            { kind: 'checklist', items: [
              'Centro de Lisboa: 20–25 €/m²; T1 frequentemente 1 200–1 800 €/mês.',
              'Benfica/Telheiras/Olivais: 17–22 €/m²; mais calmo, metro/comboio, menos ruído turístico.',
              'Almada/Cacilhas: 12–16 €/m²; ferry/metro sul + vista para Lisboa, boa para o centro e Santos/Cais do Sodré.',
              'Amadora/Odivelas/Loures: 11–15 €/m²; prático, mas verifique a rua concreta à noite e os transportes.',
              'Sintra line: 10–14 €/m²; mais área, mas o commute torna-se facilmente 45–70 minutos.'
            ] }
          ] },
          { id: 'family-kids', title: 'Família com uma criança', content: [
            { kind: 'paragraph', text: 'Para uma família, normalmente contam a escola, parque, estacionamento, elevador, ruído e cuidados de saúde. As zonas mais óbvias: Oeiras, Carcavelos, Parede, Cascais, Benfica, Telheiras, Parque das Nações, Alfragide, algumas partes de Almada e Sintra.' },
            { kind: 'checklist', items: [
              'Oeiras: 16–20 €/m²; forte equilíbrio entre escolas, mar, parques, escritórios e Cascais line.',
              'Cascais/Estoril/Parede: 18–24 €/m²; mais caro, mas com escolas, praia, ambiente expat e segurança.',
              'Benfica/Telheiras: 17–22 €/m²; familiar, metro/CP, parques, mais barato do que o centro.',
              'Parque das Nações: 20–25 €/m²; conveniente, moderno, mas um T3 com garagem fica muitas vezes em 2 500 €+.',
              'Sintra: 10–14 €/m²; mais moradias e T3/T4, mas sem carro e sem estar perto do comboio é mais difícil viver.',
              'Almada/Caparica: 12–17 €/m²; boa se precisa de praia e orçamento, mas a ponte 25 de Abril é imprevisível na hora de ponta.'
            ] }
          ] },
          { id: 'remote-workers', title: 'Trabalho remoto e digital nomad', content: [
            { kind: 'paragraph', text: 'Para trabalho remoto, são mais importantes a qualidade do apartamento, internet, ruído e acesso ao aeroporto/centro 1–2 vezes por semana. Não pague a mais pelo centro se não vai lá todos os dias.' },
            { kind: 'checklist', items: [
              'Cascais: caro, mas confortável, mar, coworkings, ambiente anglófono.',
              'Oeiras/Carcavelos: compromisso entre preço/mar/comboio; bom para quem se desloca tanto para Lisboa como para Cascais.',
              'Almada/Costa da Caparica: estilo de vida de praia mais barato do que Cascais, mas no inverno é húmido e os transportes dependem do ponto exacto.',
              'Sintra: bonito e mais barato por m², mas a humidade, casas frias e o commute são surpresas frequentes.',
              'Loures/Sacavém/Moscavide: prático para o aeroporto e Parque das Nações, menos lifestyle, mais conveniência no dia a dia.'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'commute',
      title: 'Commute: tempos reais até ao centro',
      content: [
        { kind: 'paragraph', text: 'Compare não a distância no mapa, mas sim door-to-door: caminhada até à estação + espera + comboio/metro + transbordo + percurso desde a estação. Na hora de ponta, o carro perde muitas vezes para o comboio.' },
        { kind: 'checklist', items: [
          'Cascais → Cais do Sodré: comboio cerca de 40 minutos; door-to-door frequentemente 55–75 minutos.',
          'Oeiras → Cais do Sodré: comboio cerca de 20–25 minutos; door-to-door 35–50 minutos.',
          'Carcavelos/Parede → Cais do Sodré: comboio cerca de 25–35 minutos; door-to-door 45–60 minutos.',
          'Sintra → Rossio/Oriente: comboio cerca de 40–50 minutos; door-to-door 60–80 minutos.',
          'Cacém/Queluz → Rossio: comboio cerca de 20–35 minutos; door-to-door 40–60 minutos.',
          'Almada/Cacilhas → Cais do Sodré: ferry cerca de 10 minutos, mas com acessos 30–45 minutos.',
          'Pragal/Corroios → Sete Rios/Entrecampos: Fertagus cerca de 15–25 minutos; door-to-door 35–55 minutos.',
          'Loures/Sacavém → Saldanha/Oriente: autocarro/comboio/metro 30–60 minutos, consoante a morada.'
        ] },
        { kind: 'warning', text: 'Se o apartamento fica “a 15 minutos de Lisboa” — confirme: até que estação, a que horas e por que meio. Na A5, IC19, 2ª Circular e ponte 25 de Abril, 15 minutos transformam-se facilmente em 45–70.' }
      ]
    },
    {
      id: 'shortlist',
      title: 'Shortlist rápida por cenários',
      content: [
        { kind: 'checklist', items: [
          'Orçamento até 1 200 €, uma pessoa: Amadora, Odivelas, Loures, Almada, Cacém, Queluz, Sacavém.',
          'Orçamento 1 200–1 700 €, casal: Benfica, Olivais, Moscavide, Algés, Oeiras, Almada, Alfragide.',
          'Família, T2/T3 até 2 000 €: Oeiras mais longe do mar, Benfica, Telheiras, Loures, Almada, Sintra perto da CP.',
          'Família, T2/T3 2 000–3 000 €: Oeiras, Carcavelos, Parede, Cascais não prime, Parque das Nações, Avenidas Novas.',
          'Precisa de international schools: Cascais, Estoril, Oeiras, Carcavelos, Linhó/Sintra; reserve a escola antes do contrato de arrendamento.',
          'Precisa de oceano: Cascais line ou Costa da Caparica; verifique humidade, aquecimento e estacionamento.',
          'Precisa de aeroporto: Olivais, Alvalade, Parque das Nações, Moscavide, Sacavém, Loures.',
          'Precisa do máximo de m² pelo orçamento: Sintra, Loures, Margem Sul, Amadora; verifique cuidadosamente os transportes e o estado do prédio.'
        ] }
      ]
    },
    {
      id: 'viewing-checks',
      title: 'O que verificar antes de assinar o contrato',
      content: [
        { kind: 'paragraph', text: 'Em Portugal, é caro corrigir um erro de zona: rescisão do contrato, nova caução, mudança, comissão de agência, escola. Antes da caução, faça um percurso de teste de manhã e outro à noite.' },
        { kind: 'checklist', items: [
          'O contrato de arrendamento está registado nas Finanças, o senhorio pode emitir recibos de renda.',
          'Classe energética, humidade, bolor, janelas, aquecimento: no inverno, as casas de Lisboa podem ser frias.',
          'Ruído: aviões em Alvalade/Olivais, comboios junto às linhas da CP, nightlife em Santos/Cais/Arroios.',
          'Estacionamento: em Lisboa e Cascais, sem garagem, isto é um problema separado; verifique EMEL/autorizações municipais.',
          'Internet: se há fibra MEO/NOS/Vodafone na morada concreta, não apenas “na zona”.',
          'Supermercado, farmácia, Centro de Saúde, escola/creche — a pé ou apenas de carro.',
          'Segurança da rua concreta: dê uma volta depois das 21:00, especialmente junto às estações.',
          'Condomínio: quem paga, se há elevador, obras na fachada, dívidas de condomínio.',
          'Prazo do contrato, aviso prévio, possibilidade de registar a morada para AIMA/Finanças/SNS.'
        ] },
        { kind: 'warning', text: 'Não transfira a caução apenas com base num vídeo e não acredite num preço “demasiado bom”. É normal pedir a Caderneta Predial, identificação do senhorio e draft contrato antes de pagar.' }
      ]
    }
  ],
  costs: [
    { label: 'T1 no centro de Lisboa', amountEURMin: 1200, amountEURMax: 1800, note: 'Normalmente 20–25 €/m², mais alto no Chiado, Príncipe Real, Baixa, Avenidas Novas.' },
    { label: 'T2/T3 para família em Oeiras', amountEURMin: 1700, amountEURMax: 2800, note: 'Depende da proximidade à Cascais line, do mar, da garagem e do estado do edifício.' },
    { label: 'T2/T3 para família em Cascais/Estoril', amountEURMin: 2200, amountEURMax: 3500, note: 'International schools e o mar aumentam o preço; Parede/Carcavelos são frequentemente mais baratos do que o centro de Cascais.' },
    { label: 'T1/T2 em Almada/Sintra/Loures', amountEURMin: 900, amountEURMax: 1600, note: 'Mais m² pelo orçamento, mas o commute e o carro tornam-se essenciais.' }
  ],
  sources: [
    { title: 'Câmara Municipal de Oeiras — informação sobre o município, mobilidade e serviços', url: 'https://www.cm-oeiras.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Câmara Municipal de Cascais — informação sobre o município, transportes e serviços urbanos', url: 'https://www.cm-cascais.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Idealista — índices de preços de arrendamento e venda de habitação por municípios e freguesias', url: 'https://www.idealista.pt/media/relatorios-preco-habitacao/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'CP — horários e linhas urbanas de Lisboa: Cascais, Sintra, Azambuja, Sado', url: 'https://www.cp.pt/passageiros/pt/consultar-horarios/horarios-resultado', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
