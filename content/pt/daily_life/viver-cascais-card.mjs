export default {
  editorialVoice: 'hackportugal',
  id: 'viver-cascais-card',
  categoryId: 'daily_life',
  title: 'Cartão Viver Cascais — benefícios para residentes do município',
  tldr: 'Viver Cascais é um cartão municipal para residentes do município de Cascais (Cascais, Estoril, Alcabideche, São Domingos, Parede). Dá descontos de 20–50% em transportes (MobiCascais), estacionamento, piscinas, clubes desportivos, eventos culturais e bibliotecas. É gratuito e é emitido com base no local de residência: é necessário um atestado de residência da Junta de Freguesia. Pode apresentar o pedido online ou numa Loja Cascais.',
  tags: ['cascais', 'viver', 'cartão', 'benefícios'],
  estimatedReadMinutes: 3,
  steps: [
    {
      id: 'who',
      title: 'Quem pode obter',
      content: [
        { kind: 'checklist', items: [
          'Residentes do município de Cascais com atestado de residência (residência ≥ 30 dias)',
          'A idade não é relevante — crianças a partir dos 6 anos podem ter o seu próprio cartão',
          'Trabalhadores e estudantes ligados a Cascais também podem ter categorias específicas MobiCascais/Viver Cascais — confirme as categorias actuais em mobicascais.pt e cascais.pt',
          'Estrangeiros com autorização de residência — são elegíveis'
        ]}
      ]
    },
    {
      id: 'benefits',
      title: 'O que oferece',
      content: [
        { kind: 'substeps', items: [
          { id: 'b1', title: '🚌 Transportes MobiCascais', content: [
            { kind: 'checklist', items: [
              'Autocarros MobiCascais gratuitos (excepto a M-Line no Estoril)',
              'Bicicletas MobiCascais Bikes gratuitas (até 45 minutos por dia)',
              'Viagem gratuita no autocarro shuttle MobiPark entre parques de estacionamento e praias na época balnear'
            ]}
          ]},
          { id: 'b2', title: '🅿️ Estacionamento', content: [
            { kind: 'checklist', items: [
              'Dístico de residente — primeiro ano gratuito',
              'Depois, 10–30 € por ano, consoante a zona',
              'No centro de Cascais e do Estoril, a zona paga é mais barata para residentes'
            ]}
          ]},
          { id: 'b3', title: '🏊 Desporto', content: [
            { kind: 'checklist', items: [
              'Piscinas municipais: desconto de 30–50% em mensalidades',
              'Campos de ténis, campos de futebol: desconto de 20–40%',
              'Ginásios em centros municipais: tarifas reduzidas',
              'Maratonas de Cascais / triatlos — desconto na inscrição'
            ]}
          ]},
          { id: 'b4', title: '🎭 Cultura e educação', content: [
            { kind: 'checklist', items: [
              'Bibliotecas: inscrição gratuita (cartão de leitor)',
              'Teatros Casa das Histórias Paula Rego, Centro Cultural — descontos de 30–50%',
              'Museus municipais: gratuitos para residentes (normalmente 5–8 €)',
              'Actividades e cursos para crianças nas Casas da Juventude — gratuitos'
            ]}
          ]},
          { id: 'b5', title: '🏥 Saúde e serviços sociais', content: [
            { kind: 'checklist', items: [
              'Cascais Social Card — para pensionistas e pessoas com deficiência, benefícios adicionais',
              'Rastreios médicos gratuitos (mamografia, colesterol, glicemia) uma vez por ano',
              'Apoio domiciliário para pensionistas'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'how-get',
      title: 'Como obter',
      content: [
        { kind: 'substeps', items: [
          { id: 'g1', title: '1. Obter o atestado de residência', content: [
            { kind: 'paragraph', text: 'Na Junta de Freguesia da área de residência (Cascais, Carcavelos, Parede, Estoril, etc.). É necessário contrato de arrendamento / documento de propriedade + Cartão de Cidadão/autorização de residência. Custo 5–15 €.' }
          ]},
          { id: 'g2', title: '2. Apresentar o pedido do Viver Cascais', content: [
            { kind: 'checklist', items: [
              'Online: registe-se primeiro no MyCascais (my.cascais.pt/viver) e depois peça o cartão',
              'Ou presencialmente: Loja Cascais (Av. dos Combatentes 8-10) / Loja Parede',
              'Documentos: atestado de residência, Cartão de Cidadão/autorização de residência, fotografia (pode ser do telemóvel), email',
              'O registo é gratuito',
              'O cartão chega por correio em 7–14 dias, ou pode pedir o levantamento numa Loja',
              'Até receber o cartão físico, funciona o cartão virtual na aplicação MobiCascais'
            ]}
          ]},
          { id: 'g3', title: '3. Descarregar a aplicação MobiCascais', content: [
            { kind: 'paragraph', text: 'App Store / Google Play — MobiCascais. Início de sessão com o número do cartão Viver Cascais. Permite usar transportes, reservar bicicletas, ver horários de autocarros e pagar estacionamento.' }
          ]}
        ]}
      ]
    },
    {
      id: 'family',
      title: 'Para a família',
      content: [
        { kind: 'checklist', items: [
          'Cada membro da família recebe o seu próprio cartão (cada um é gratuito)',
          'Para crianças <12 anos, o cartão é pedido por um dos pais',
          'Para 12–18 anos — pedido separado do adolescente, mas é necessária a assinatura de um dos pais',
          'Cartão Família Cascais — para famílias com 3+ filhos, benefícios adicionais em lojas parceiras'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Cartão Viver Cascais', amountEUR: 0 },
    { label: 'atestado de residência da Junta de Freguesia', amountEURMin: 5, amountEURMax: 15 }
  ],
  sources: [
    { title: 'Viver Cascais — aderir / renovar (página oficial)', url: 'https://www.cascais.pt/servico/viver-cascais-aderir-renovar', kind: 'official', language: 'pt', lastRetrieved: '2026-05-30' },
    { title: 'MobiCascais — aplicação e serviços', url: 'https://www.mobicascais.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Câmara Municipal de Cascais', url: 'https://www.cascais.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-30',
  verifyIntervalDays: 180
}
