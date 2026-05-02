export default {
  editorialVoice: 'hackportugal',
  id: 'carta-social-rede-social',
  categoryId: 'healthcare',
  title: 'Carta Social — base nacional de instituições sociais',
  tldr: 'A Carta Social é um mapa e motor de pesquisa estatal gratuito para instituições sociais em Portugal: creche, ama, ATL/CATL, centro de dia, lar/ERPI, apoio domiciliário, IPSS e organizações privadas licenciadas. Em 2026, a base está disponível em cartasocial.pt, com filtros por distrito, concelho, freguesia e tipo de resposta social; frequentemente mostra contactos, capacidade e vagas. Para obter um lugar real, continua a ser necessário telefonar à instituição: os dados sobre vagas nem sempre são actualizados diariamente.',
  tags: ['carta social', 'ipss', 'creche', 'lar', 'serviços sociais'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que é a Carta Social e quando é necessária',
      content: [
        { kind: 'paragraph', text: 'A Carta Social é a base nacional oficial do Ministério do Trabalho, Solidariedade e Segurança Social sobre “respostas sociais”: instituições e serviços de apoio social. Não é uma inscrição em lista de espera nem um serviço de pagamento, mas sim um directório de organizações licenciadas ou reconhecidas, com moradas, telefones, tipo de serviço e parte dos dados sobre capacidade.' },
        { kind: 'checklist', items: [
          'Encontrar uma creche para uma criança até aos 3 anos perto de casa ou do trabalho',
          'Verificar ATL/CATL — atividades de tempos livres depois da escola',
          'Encontrar um centro de dia para um familiar idoso',
          'Encontrar lar/ERPI — Estrutura Residencial para Pessoas Idosas',
          'Encontrar serviço de apoio domiciliário — ajuda ao domicílio',
          'Verificar IPSS, misericórdia, fundação, associação ou entidade privada',
          'Comparar instituições por município antes de mudar de residência',
          'Obter telefones e e-mails para pedir directamente informação sobre vagas'
        ] }
      ]
    },
    {
      id: 'how-to-search',
      title: 'Como pesquisar em cartasocial.pt 🔎',
      content: [
        { kind: 'paragraph', text: 'Abra cartasocial.pt e use a pesquisa no mapa ou o formulário “Pesquisa”. O cenário mais prático é escolher primeiro o território e depois o tipo de serviço. Em Portugal, o município chama-se concelho; a zona dentro do município é a freguesia.' },
        { kind: 'checklist', items: [
          'Escolha o distrito: por exemplo Lisboa, Porto, Setúbal, Faro, Braga',
          'Escolha o concelho/município: por exemplo Cascais, Oeiras, Sintra, Porto, Loulé',
          'Se necessário, restrinja à freguesia',
          'Escolha a área: infância, população idosa, deficiência, família/comunidade, etc.',
          'Escolha a resposta social: creche, CATL, centro de dia, ERPI, apoio domiciliário',
          'Abra a ficha da instituição e guarde o nome da pessoa colectiva, a morada, o telefone e o e-mail',
          'Verifique “capacidade” e “utentes”/“vagas”, se o campo estiver disponível',
          'Telefone de imediato: é melhor confirmar a existência de lugar livre verbalmente e por e-mail'
        ] },
        { kind: 'warning', text: 'O campo sobre vagas é útil como orientação, mas não constitui garantia de lugar. Em concelhos populares à volta de Lisboa e Porto, creche e ERPI podem ter lista de espera mesmo que a base mostre capacidade disponível.' }
      ]
    },
    {
      id: 'popular-categories',
      title: 'Que categorias pesquisar: guia rápido russo-português',
      content: [
        { kind: 'substeps', items: [
          { id: 'children', title: 'Crianças', content: [
            { kind: 'checklist', items: [
              'Creche — berçário/infantário geralmente até aos 3 anos',
              'Creche familiar / ama — cuidados por ama registada ou em contexto familiar',
              'CATL / ATL — actividades e acompanhamento fora do horário escolar',
              'Centro de atividades de tempos livres — nome completo de ATL',
              'Intervenção precoce — apoio precoce a crianças com necessidades de desenvolvimento'
            ] }
          ] },
          { id: 'elderly', title: 'Idosos', content: [
            { kind: 'checklist', items: [
              'ERPI — lar, residência para idosos com alojamento',
              'Centro de dia — centro diurno sem pernoita',
              'Centro de convívio — actividade social e convívio',
              'Serviço de apoio domiciliário — ajuda ao domicílio: alimentação, higiene, tarefas do dia-a-dia',
              'Acolhimento familiar — acolhimento em família, não disponível em todos os locais'
            ] }
          ] },
          { id: 'other-support', title: 'Deficiência, família, situações de crise', content: [
            { kind: 'checklist', items: [
              'Centro de atividades e capacitação para a inclusão — apoio diurno a pessoas com deficiência',
              'Lar residencial — alojamento para pessoas com deficiência',
              'Comunidade de inserção — apoio à integração social',
              'Centro de atendimento — apoio consultivo e social',
              'Casa de abrigo — alojamento protegido, normalmente para vítimas de violência doméstica'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'ipss-private-public',
      title: 'IPSS, privadas e públicas: como ler a ficha',
      content: [
        { kind: 'paragraph', text: 'Na Carta Social surgem diferentes tipos de entidades. IPSS significa Instituição Particular de Solidariedade Social: uma organização privada sem fins lucrativos com estatuto social, frequentemente com acordo com a Segurança Social. Também existem misericórdias, associações, fundações, cooperativas, estruturas municipais e instituições privadas comerciais.' },
        { kind: 'checklist', items: [
          '“Natureza jurídica” mostra o tipo de organização: IPSS, associação, sociedade, fundação, etc.',
          '“Resposta social” é o serviço concreto, não a instituição inteira',
          'Uma entidade pode ter várias respostas sociais na mesma morada',
          '“Capacidade” é o número de lugares autorizado, não equivale a lugares livres',
          '“Utentes” são os utilizadores efectivamente atendidos à data da actualização',
          '“Acordo de cooperação” com a Segurança Social pode significar lugares subsidiados',
          'As instituições privadas podem estar licenciadas, mas sem preço subsidiado',
          'Para creche, verifique separadamente o programa Creche Feliz, se precisar de uma opção gratuita ou subsidiada'
        ] }
      ]
    },
    {
      id: 'next-actions',
      title: 'O que fazer depois de encontrar uma instituição',
      content: [
        { kind: 'paragraph', text: 'A Carta Social fornece contactos, mas a inscrição real é feita directamente através da instituição, da Câmara Municipal, da Segurança Social ou de uma plataforma específica — depende do tipo de serviço e do município. Para uma família expat, é melhor manter uma tabela: 10–20 opções, data do telefonema, resposta, lista de documentos, preço, lista de espera.' },
        { kind: 'checklist', items: [
          'Telefone e pergunte: “Tem vagas?” e “Há lista de espera?”',
          'Peça o e-mail e envie um pedido por escrito, para ficar registo',
          'Confirme mensalidade, inscrição, alimentação, fraldas/medicação, transporte',
          'Pergunte se existe acordo com a Segurança Social ou Creche Feliz',
          'Peça a lista de documentos: NIF, NISS, utente, autorização de residência/passaporte, comprovativo de morada, IRS',
          'Para idosos, esclareça limitações médicas, cuidados nocturnos e acompanhamento médico',
          'Verifique a instituição pessoalmente: acessibilidade, cheiro, pessoal, ementa, segurança',
          'Se lhe recusarem sem explicações, peça os critérios de admissão e confirme a existência de livro de reclamações'
        ] },
        { kind: 'warning', text: 'Não transfira um “depósito de reserva” para uma organização desconhecida apenas por WhatsApp. Verifique se o nome, NIF e morada coincidem com a ficha da Carta Social e com o e-mail oficial da instituição.' }
      ]
    }
  ],
  costs: [
    { label: 'Pesquisa na Carta Social', amountEUR: 0, note: 'A base cartasocial.pt é gratuita e não exige NIF, CMD nem registo.' },
    { label: 'Telefonemas e visitas', amountEURMin: 0, amountEURMax: 20, note: 'Normalmente é gratuito; podem existir custos de telefone/transporte. O custo do próprio serviço é definido pela instituição.' }
  ],
  sources: [
    { title: 'Carta Social — pesquisa oficial de instituições sociais e respostas sociais', url: 'https://www.cartasocial.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'GEPIS — plataforma estatal de informação sobre a rede social', url: 'https://www.gepis.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Segurança Social — IPSS e respostas sociais', url: 'https://www.seg-social.pt/ipss', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
