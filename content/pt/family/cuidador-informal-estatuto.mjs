export default {
  editorialVoice: 'hackportugal',
  id: 'cuidador-informal-estatuto',
  categoryId: 'healthcare',
  title: 'Cuidador Informal: estatuto de cuidador informal para cuidar de pais e familiares',
  tldr: 'O Estatuto do Cuidador Informal, previsto na Lei 100/2019, é um estatuto oficial para a pessoa que cuida regular ou permanentemente de um familiar dependente em Portugal. Dá acesso a cartão de identificação, plano de acompanhamento, formação, direito ao descanso do cuidador e, para o cuidador informal principal, a um apoio mensal da Segurança Social: em 2026, o valor de referência máximo é 1,1 IAS, ou seja 590,84 €, e o montante depende dos rendimentos do agregado familiar. O pedido é gratuito através da Segurança Social Direta ou num balcão.',
  tags: ['cuidador', 'família', 'segurança-social', 'cuidados'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-status-gives',
      title: 'O que dá o estatuto de Cuidador Informal',
      content: [
        { kind: 'paragraph', text: 'Cuidador Informal não é um contrato de trabalho nem uma profissão médica. É o reconhecimento pela Segurança Social de que você cuida, na prática, de uma pessoa em situação de dependência: um progenitor idoso, cônjuge, familiar com deficiência ou doença crónica.' },
        { kind: 'checklist', items: [
          'Cartão de identificação do cuidador informal — comprovativo do estatuto',
          'Plano de Intervenção Específico: plano individual de apoio da Segurança Social e do SNS',
          'Formação em cuidados: mobilização, alimentação, higiene, medicamentos, prevenção de quedas',
          'Apoio psicossocial e consultas',
          'Descanso do cuidador — pausa temporária através da RNCCI, apoio domiciliário ou outras respostas sociais, se houver vaga',
          'Acompanhamento prioritário pelos serviços da Segurança Social e de saúde',
          'Para o cuidador informal principal — direito a pedir o subsídio de apoio ao cuidador informal principal',
          'Informação sobre outras prestações: Complemento por Dependência, Subsídio por Assistência de Terceira Pessoa, prestações por deficiência'
        ] },
        { kind: 'warning', text: 'O estatuto de cuidador informal não substitui a autorização de residência, o NISS, o SNS nem o direito ao trabalho. É um estatuto familiar e social dentro da Segurança Social.' }
      ]
    },
    {
      id: 'principal-or-non-principal',
      title: 'Dois tipos: principal e não principal',
      content: [
        { kind: 'paragraph', text: 'No pedido, escolhe-se o tipo de cuidador. Disso dependem o direito ao apoio financeiro e a compatibilidade com o trabalho.' },
        { kind: 'substeps', items: [
          { id: 'principal', title: 'Cuidador informal principal', content: [
            { kind: 'paragraph', text: 'É a pessoa que vive com a pessoa cuidada e assegura cuidados permanentes. Normalmente, este é o estatuto necessário para filhos que se mudaram para casa de um progenitor idoso ou que trouxeram o progenitor para viver consigo.' },
            { kind: 'checklist', items: [
              'Vive com a pessoa cuidada no mesmo agregado familiar',
              'Presta cuidados de forma permanente, e não apenas pontual',
              'Não recebe pagamento por esses cuidados',
              'Regra geral, não exerce atividade profissional remunerada',
              'Pode candidatar-se ao subsídio de apoio ao cuidador informal principal, se passar a verificação de rendimentos'
            ] }
          ] },
          { id: 'non-principal', title: 'Cuidador informal não principal', content: [
            { kind: 'paragraph', text: 'É o familiar que ajuda regularmente, mas não é o cuidador principal permanente. Por exemplo, vai todos os dias depois do trabalho, coordena médicos, compras e medicamentos.' },
            { kind: 'checklist', items: [
              'Pode continuar a trabalhar',
              'Não é obrigado a viver com a pessoa cuidada',
              'Recebe o cartão e acesso a formação/acompanhamento',
              'Normalmente não tem direito ao subsídio mensal destinado ao principal',
              'Adequa-se quando os cuidados são divididos entre vários familiares'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'eligibility',
      title: 'Quem pode obter o reconhecimento',
      content: [
        { kind: 'paragraph', text: 'A lógica de base é a seguinte: o cuidador deve ser um adulto residente em Portugal, e a pessoa cuidada deve ser uma pessoa com dependência comprovada e necessidade de ajuda de outra pessoa.' },
        { kind: 'checklist', items: [
          'O cuidador deve normalmente ter 18+',
          'O cuidador deve ter residência legal em Portugal e NISS',
          'Relação com a pessoa cuidada: cônjuge, unido de facto, familiar ou afim até ao 4.º grau',
          'A pessoa cuidada vive em Portugal e tem NISS',
          'A pessoa cuidada encontra-se em situação de dependência e necessita de cuidados de terceira pessoa',
          'A pessoa cuidada recebe ou pode receber uma prestação associada: por exemplo, Complemento por Dependência ou Subsídio por Assistência de Terceira Pessoa',
          'Deve existir consentimento da pessoa cuidada, se esta o puder dar; caso contrário, intervém o representante ou o regime de acompanhamento de maior',
          'Para o principal, exige-se coabitação e cuidados permanentes',
          'Para o apoio financeiro, são verificados os rendimentos do agregado familiar do cuidador informal principal'
        ] },
        { kind: 'warning', text: 'Se o progenitor idoso vive num lar/residência com financiamento público de cuidados integrais, o estatuto e, sobretudo, o apoio financeiro podem não estar disponíveis. A Segurança Social analisa os cuidados efetivamente prestados, a residência e as respostas sociais já recebidas.' }
      ]
    },
    {
      id: 'money-2026',
      title: 'Dinheiro em 2026: subsídio para o cuidador informal principal',
      content: [
        { kind: 'paragraph', text: 'A prestação em dinheiro chama-se subsídio de apoio ao cuidador informal principal. Não é uma pensão automática nem um salário. A Segurança Social calcula os rendimentos do agregado familiar e aplica limites indexados ao IAS.' },
        { kind: 'checklist', items: [
          'IAS em 2026: 537,13 €',
          'O valor de referência (limite) do subsídio é 1,1 IAS: 590,84 € em 2026',
          'O limiar de necessidade para o principal é normalmente calculado face a 1,3 IAS: 698,27 €',
          'O subsídio = diferença entre a referência de 590,84 € e o rendimento de referência do agregado, pelo que o valor é individual',
          'No cálculo podem entrar salários, pensões, prestações sociais, rendimentos de arrendamento e outros rendimentos regulares da família',
          'Se os rendimentos excederem o limite, o estatuto pode ser reconhecido, mas o subsídio pode não ser atribuído',
          'A prestação é atribuída ao cuidador informal principal, e não à pessoa cuidada',
          'O IBAN deve ser português ou de uma conta SEPA aceite pela Segurança Social',
          'A partir de 2026, o próprio subsídio de cuidador informal deixa de contar como rendimento para acesso a outras prestações sociais',
          'Em caso de alteração de rendimentos, morada, composição do agregado familiar, internamento hospitalar ou entrada em instituição, é necessário comunicar à Segurança Social'
        ] },
        { kind: 'warning', text: 'Não planeie o orçamento familiar como se a prestação fosse exatamente 590,84 €. Esse é apenas o valor de referência máximo; na prática, o valor depende do cálculo da Segurança Social e pode ser zero mesmo com o estatuto reconhecido.' }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'Como apresentar o pedido',
      content: [
        { kind: 'paragraph', text: 'Pode apresentar o pedido online através da Segurança Social Direta ou presencialmente num serviço de atendimento da Segurança Social. Para famílias expat, é mais prático reunir os documentos com antecedência e verificar que o NISS está ativo tanto para o cuidador como para a pessoa cuidada.' },
        { kind: 'substeps', items: [
          { id: 'prepare', title: '1. Prepare os documentos', content: [
            { kind: 'checklist', items: [
              'Documento de identificação do cuidador: Cartão de Cidadão, autorização de residência ou passaporte + comprovativo de permanência legal',
              'NIF e NISS do cuidador',
              'Documento de identificação, NIF e NISS da pessoa cuidada',
              'Comprovativo de morada e de coabitação, se for pedido o estatuto de principal',
              'Documentos médicos sobre a dependência e a necessidade de cuidados',
              'Documentos relativos ao Complemento por Dependência, Subsídio por Assistência de Terceira Pessoa ou outra prestação relevante da pessoa cuidada',
              'Consentimento da pessoa cuidada ou documento do representante',
              'Dados sobre os rendimentos do agregado familiar',
              'IBAN para pagamento, se pedir o subsídio'
            ] }
          ] },
          { id: 'submit', title: '2. Apresente o pedido de reconhecimento', content: [
            { kind: 'paragraph', text: 'Na Segurança Social Direta, procure a secção de família/deficiência/Estatuto do Cuidador Informal. Se o percurso online não estiver disponível devido ao estatuto de estrangeiro ou a erro no NISS, marque atendimento num balcão da Segurança Social e apresente o pedido aí.' }
          ] },
          { id: 'assessment', title: '3. Aguarde a avaliação', content: [
            { kind: 'paragraph', text: 'Os serviços verificam a relação familiar, a residência, a dependência, os rendimentos e as prestações já atribuídas. Podem pedir documentos adicionais ou contactar o Centro de Saúde.' }
          ] },
          { id: 'card-plan', title: '4. Receba o cartão e o plano de acompanhamento', content: [
            { kind: 'paragraph', text: 'Após o reconhecimento, recebe o cartão de identificação do cuidador informal e passa a estar integrado no Plano de Intervenção Específico. Peça que lhe indiquem por escrito os contactos do técnico responsável, a formação disponível e as opções de descanso do cuidador no seu município.' }
          ] }
        ] }
      ]
    },
    {
      id: 'practical-expat-points',
      title: 'Aspetos práticos para expats',
      content: [
        { kind: 'checklist', items: [
          'Se vai trazer um progenitor idoso para Portugal, resolva primeiro a base migratória: visto/autorização de residência, NIF, NISS, SNS',
          'Sem NISS do progenitor, o acesso a prestações e ao reconhecimento da dependência fica normalmente bloqueado',
          'Traduza os relatórios médicos para português, sobretudo diagnósticos, medicamentos, grau de dependência e necessidade de ajuda de terceira pessoa',
          'Peça ao médico de família ou ao Centro de Saúde que registe a dependência funcional: marcha, alimentação, higiene, memória, risco de quedas',
          'O Atestado multiuso é útil em caso de deficiência, mas por si só não substitui a avaliação da dependência para a Segurança Social',
          'Se os cuidados interferem com o trabalho, compare primeiro as opções: baixa médica, assistência a familiares, licença sem vencimento, part-time, e só depois conte com o estatuto de principal',
          'Guarde cartas da Segurança Social, decisões sobre prestações e recibos: serão necessários em caso de reavaliação',
          'Se houver indeferimento, peça a fundamentação escrita e o prazo para reclamação ou recurso hierárquico'
        ] },
        { kind: 'warning', text: 'O erro principal é apresentar apenas o pedido de Estatuto do Cuidador Informal, mas não tratar da prestação de base por dependência da pessoa cuidada. Para o subsídio principal, a Segurança Social quase sempre verifica se a dependência foi reconhecida através dos mecanismos sociais correspondentes.' }
      ]
    }
  ],
  costs: [
    { label: 'Apresentação do pedido de reconhecimento do Estatuto do Cuidador Informal', amountEUR: 0, note: 'Não há taxa administrativa; podem existir custos com traduções, atestados médicos e deslocações.' },
    { label: 'Referência do apoio mensal máximo para o principal em 2026', amountEURMax: 590.84, note: '1,1 IAS 2026; o valor efetivo é a diferença face ao rendimento calculado e depende da Segurança Social.' },
    { label: 'Limiar de 1,3 IAS para verificação de necessidade em 2026', amountEUR: 698.27, note: 'Usado como referência-chave de rendimentos; aplicam-se as regras da Segurança Social.' }
  ],
  sources: [
    {
      title: 'Segurança Social: reconhecimento do Estatuto do Cuidador Informal',
      url: 'https://www.seg-social.pt/ptss/pssd/menu/familia/deficiencia-incapacidade/reconhecimento-estatuto-cuidador-informal',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'gov.pt: guia Cuidador Informal',
      url: 'https://www.gov.pt/guias/cuidador-informal',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Lei 100/2019 — Estatuto do Cuidador Informal',
      url: 'https://dre.pt/dre/detalhe/lei/100-2019-124500714',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
