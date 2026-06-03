export default {
  editorialVoice: 'hackportugal',
  id: 'viver-cascais-card',
  categoryId: 'daily_life',
  title: 'Cartão Viver Cascais — benefícios para residentes do município',
  tldr: 'Viver Cascais é um cartão municipal para residentes do município de Cascais (Cascais, Estoril, Alcabideche, São Domingos, Parede). Viagens gratuitas nos autocarros municipais MobiCascais, até 180 minutos de estacionamento gratuito por dia e descontos em piscinas, clubes desportivos, eventos culturais e bibliotecas. O cartão digital é gratuito; o cartão físico custa 7 € e é válido por 5 anos. É emitido com base no local de residência: serve qualquer documento que comprove a residência ou o domicílio fiscal no concelho (uma factura de serviços, comprovativo de domicílio fiscal, atestado de residência da Junta de Freguesia, etc.). Pode apresentar o pedido online no MyCascais ou numa Loja Cascais.',
  tags: ['cascais', 'viver', 'cartão', 'benefícios'],
  estimatedReadMinutes: 3,
  steps: [
    {
      id: 'who',
      title: 'Quem pode obter',
      content: [
        { kind: 'checklist', items: [
          'Residentes do município de Cascais que consigam comprovar a residência ou o domicílio fiscal no concelho',
          'A idade não é relevante — crianças a partir dos 6 anos podem ter o seu próprio cartão',
          'Trabalhadores e estudantes ligados a Cascais também são elegíveis (com comprovativo de trabalho ou de matrícula) — confirme as categorias em mobi.cascais.pt e cascais.pt',
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
              'Viagens gratuitas nos autocarros municipais MobiCascais (linhas M01–M41, dentro do concelho) — é preciso ter sessão iniciada na aplicação MobiCascais',
              'Bicicletas eléctricas gratuitas — 30 minutos por dia na primeira viagem (através da aplicação Bird)',
              'Viagem gratuita no autocarro shuttle MobiPark entre parques de estacionamento e praias na época balnear'
            ]}
          ]},
          { id: 'b2', title: '🅿️ Estacionamento', content: [
            { kind: 'checklist', items: [
              'Até 180 minutos de estacionamento gratuito por dia nas zonas de duração limitada (requer subscrição prévia em viver.cascais.pt e comprovativo de domicílio fiscal no concelho)',
              'Os 180 minutos não são acumuláveis, renovam-se todos os dias e podem ser divididos entre viaturas registadas em nome do titular do cartão',
              'Nas zonas azuis, o estacionamento é gratuito na época baixa (1 de Novembro – 30 de Abril)'
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
          { id: 'g1', title: '1. Preparar o comprovativo de residência', content: [
            { kind: 'paragraph', text: 'Serve qualquer documento com menos de 3 meses: uma factura de serviços (água, luz, gás, telefone, TV), comprovativo de domicílio fiscal ou de agregado familiar das Finanças, atestado de residência da Junta de Freguesia, etc. Não é obrigatório obter um atestado em separado. Se optar por o pedir, custa 5–15 €.' }
          ]},
          { id: 'g2', title: '2. Apresentar o pedido do Viver Cascais', content: [
            { kind: 'checklist', items: [
              'Online: registe-se primeiro no MyCascais (my.cascais.pt/viver) e depois peça o cartão',
              'Ou presencialmente: Loja Cascais (Rua Manuel Joaquim Avelar, 118, piso -1), Loja Tires (Praça Fernando Lopes Graça, 156A) ou o balcão no CascaiShopping',
              'Documentos: comprovativo de residência, Cartão de Cidadão/autorização de residência, fotografia (pode ser do telemóvel), email',
              'O cartão digital é gratuito — após a validação dos dados fica logo disponível na aplicação MobiCascais (código QR para viajar)',
              'O cartão físico é opcional: custa 7 €, é válido por 5 anos e chega por correio ou é levantado numa Loja',
              'O perfil tem de ser revalidado de 5 em 5 anos (residentes — com comprovativo de domicílio fiscal no concelho)'
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
    { label: 'Cartão Viver Cascais digital', amountEUR: 0 },
    { label: 'Cartão Viver Cascais físico (opcional, válido 5 anos)', amountEUR: 7 },
    { label: 'atestado de residência da Junta de Freguesia (opcional)', amountEURMin: 5, amountEURMax: 15 }
  ],
  sources: [
    { title: 'Viver Cascais — aderir / renovar (página oficial)', url: 'https://www.cascais.pt/servico/viver-cascais-aderir-renovar', kind: 'official', language: 'pt', lastRetrieved: '2026-05-31' },
    { title: 'Cartão Viver Cascais — MobiCascais', url: 'https://mobi.cascais.pt/viver-cascais', kind: 'company', language: 'pt', lastRetrieved: '2026-05-31' },
    { title: '180 minutos de estacionamento gratuito para residentes — MobiCascais', url: 'https://mobi.cascais.pt/geral/180-minutos-de-estacionamento-gratuitos-para-residentes', kind: 'company', language: 'pt', lastRetrieved: '2026-05-31' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
