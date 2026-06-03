export default {
  editorialVoice: 'hackportugal',
  id: 'cascais-card-vivacascais',
  categoryId: 'daily_life',
  title: 'Cascais Card / Viva Cascais — cartão de residente de Cascais',
  tldr: 'Cartão Viver Cascais / Viva Cascais — cartão municipal da Câmara Municipal de Cascais para residentes, trabalhadores e estudantes do concelho de Cascais. Em 2026, é necessário para aceder a benefícios do município: BUS LINE/MobiCascais, estacionamento através da Cascais Próxima, piscinas, desporto, cultura, eventos e descontos locais. O cartão digital é emitido gratuitamente online através de uma conta MyCascais; o cartão físico é opcional e custa 7 €. São necessários NIF, documento de identificação e comprovativo de ligação a Cascais: morada, trabalho ou estudo.',
  tags: ['cascais', 'vivacascais', 'transporte', 'estacionamento'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'Que cartão é este',
      content: [
        { kind: 'paragraph', text: 'O Cartão Viver Cascais é um cartão de benefícios municipais da Câmara Municipal de Cascais. No dia a dia, é frequentemente chamado Cascais Card ou Viva Cascais, porque o acesso aos serviços é feito através da conta digital MyCascais, do site e das aplicações do município.' },
        { kind: 'paragraph', text: 'O cartão não substitui a autorização de residência, o Cartão de Cidadão, o NIF, o Navegante nem um cartão bancário. É um passe local para descontos e tarifas especificamente no concelho de Cascais: Cascais, Estoril, Carcavelos, Parede, Alcabideche, São Domingos de Rana.' },
        { kind: 'checklist', items: [
          'Para residentes em Cascais — pela morada de residência no município',
          'Para trabalhadores em Cascais — se o local de trabalho se situar no município',
          'Para estudantes em Cascais — se o estabelecimento de ensino se situar no município',
          'Para crianças — através de um progenitor/representante legal',
          'Para estrangeiros — está disponível nas mesmas condições, se houver NIF e comprovativo de ligação a Cascais'
        ] }
      ]
    },
    {
      id: 'benefits',
      title: 'O que oferece em 2026',
      content: [
        { kind: 'paragraph', text: 'O conjunto de benefícios depende do seu perfil: munícipe, trabalhador ou estudante. Verifique os benefícios ativos na área pessoal/aplicação, porque a Câmara de Cascais altera periodicamente parceiros, tarifas e regras de serviços específicos.' },
        { kind: 'checklist', items: [
          'BUS LINE / MobiCascais: carreiras municipais de autocarro de Cascais com regime bonificado para utilizadores confirmados do cartão',
          'Estacionamento: condições de residente e bonificadas nas zonas da Cascais Próxima, se a sua morada/zona estiver abrangida pelas regras de estacionamento',
          'Piscinas Municipais: descontos ou tarifas especiais nas piscinas municipais',
          'Desporto: benefícios em actividades desportivas, complexos municipais e programas',
          'Cultura: descontos em alguns espectáculos, concertos, museus e eventos da Câmara Municipal de Cascais',
          'Bibliotecas e serviços municipais: identificação simplificada em parte dos serviços municipais',
          'Parceiros: descontos locais em parceiros comerciais, se estiverem ativos na lista atual da Câmara'
        ] },
        { kind: 'warning', text: 'Não planeie o orçamento assumindo que “é tudo gratuito”. A gratuitidade ou o desconto depende do serviço concreto, do seu estatuto e das condições em vigor. Antes de viajar, estacionar ou comprar um bilhete, confirme a tarifa na MobiCascais/Cascais Próxima ou em cascais.pt.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documentos para o pedido',
      content: [
        { kind: 'paragraph', text: 'Normalmente, o pedido é apresentado online. O sistema pede a identificação da pessoa e a prova da ligação a Cascais. Para uma pessoa estrangeira, servem os documentos portugueses habituais: NIF, autorização de residência ou passaporte, comprovativo de morada/trabalho/estudo.' },
        { kind: 'checklist', items: [
          'NIF',
          'Documento de identificação: autorização de residência, Cartão de Cidadão para cidadãos PT/EU ou passaporte',
          'Morada em Cascais: contrato de arrendamento, escritura, factura de água/electricidade/internet ou atestado de residência da Junta de Freguesia',
          'Se não vive, mas trabalha em Cascais: declaração da entidade patronal ou contrato de trabalho com local de trabalho em Cascais',
          'Se é estudante: declaração de matrícula ou documento de estudante de um estabelecimento de ensino em Cascais',
          'Para uma criança: documento da criança, NIF da criança se existir, documento do progenitor e comprovativo das responsabilidades parentais, se o sistema o solicitar',
          'Email e número de telemóvel português para confirmações',
          'Acesso ao MyCascais / área pessoal da Câmara'
        ] },
        { kind: 'warning', text: 'O atestado de residência da Junta de Freguesia é útil se não tiver contrato de arrendamento em seu nome ou facturas de serviços. Para emitir o atestado, a Junta normalmente pede documento de identificação, NIF, comprovativo de morada e, por vezes, duas testemunhas da freguesia.' }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'Como pedir online',
      content: [
        { kind: 'substeps', items: [
          { id: 'create-cascais-id', title: '1. Crie uma conta MyCascais', content: [
            { kind: 'paragraph', text: 'Aceda ao site da Câmara Municipal de Cascais (cascais.pt) e crie uma conta pessoal MyCascais — é através dela que se faz o pedido em viver.cascais.pt. Use um email ao qual tenha acesso permanente: é para aí que são enviadas as confirmações e notificações sobre o pedido.' }
          ] },
          { id: 'choose-profile', title: '2. Escolha o perfil', content: [
            { kind: 'paragraph', text: 'No pedido, escolha o fundamento: residente/munícipe, trabalhador ou estudante. Isto determina que documentos serão pedidos e que benefícios serão activados.' }
          ] },
          { id: 'upload-documents', title: '3. Carregue os documentos', content: [
            { kind: 'paragraph', text: 'A digitalização ou fotografia deve ser legível: nome, NIF, morada, data e assinatura/logótipo da organização devem estar visíveis. É preferível preparar os ficheiros em PDF ou JPG.' }
          ] },
          { id: 'wait-validation', title: '4. Aguarde a validação', content: [
            { kind: 'paragraph', text: 'O município verifica os documentos. Se faltar alguma coisa, o pedido será devolvido para correcção.\n\nO prazo depende da carga do serviço; na prática, conte com alguns dias úteis e, antes de um estacionamento urgente ou da compra de um passe/assinatura, não deixe o pedido para o último momento.' }
          ] },
          { id: 'use-digital-card', title: '5. Use o cartão digital', content: [
            { kind: 'paragraph', text: 'Após a aprovação, o cartão fica disponível em formato digital. Para autocarros, estacionamento e descontos, podem ser usadas diferentes aplicações/serviços do ecossistema municipal, por isso confirme onde exactamente deve associar o Cartão Viver Cascais.' }
          ] }
        ] }
      ]
    },
    {
      id: 'transport-parking',
      title: 'Transportes e estacionamento: onde se erra mais frequentemente',
      content: [
        { kind: 'paragraph', text: 'A principal confusão: Cartão Viver Cascais, MobiCascais, BUS LINE, Cascais Próxima e Navegante não são a mesma coisa. O cartão confirma o seu direito a um regime municipal bonificado, mas a viagem ou o estacionamento em si pode exigir validação separada na aplicação, no validador ou no serviço do operador.' },
        { kind: 'checklist', items: [
          'Para o autocarro, confirme que o seu perfil do cartão está activo especificamente para BUS LINE/MobiCascais',
          'Se a carreira sair dos limites de Cascais, as condições podem diferir das carreiras municipais',
          'O Navegante é necessário para a rede metropolitana da AML e não é substituído pelo Cartão Viver Cascais',
          'Para estacionamento, verifique a zona: residente, comerciante, visitante e zonas pagas têm regras diferentes',
          'A morada no cartão deve corresponder à zona onde pede estacionamento de residente',
          'O automóvel pode exigir registo separado pela matrícula',
          'Uma multa de estacionamento não é anulada apenas por ter o cartão: é importante activar o regime correcto antes de estacionar',
          'Ao mudar de morada, trabalho ou estudos, actualize os dados no cartão; caso contrário, os benefícios podem ser desactivados'
        ] },
        { kind: 'warning', text: 'Se acabou de se mudar para Cascais e está à espera da confirmação do cartão, não assuma que os benefícios têm efeito retroactivo. Até à validação, pague o transporte e o estacionamento pela tarifa normal.' }
      ]
    },
    {
      id: 'renewal-problems',
      title: 'Renovação, mudança de morada e problemas',
      content: [
        { kind: 'paragraph', text: 'O cartão está associado à actualidade dos seus dados. Se saiu de Cascais, mudou de empregador, terminou os estudos ou alterou a morada dentro do município, actualize o perfil. Para alguns benefícios, a Câmara pode pedir periodicamente uma nova confirmação.' },
        { kind: 'checklist', items: [
          'Verifique o prazo de validade e o estado do cartão na área pessoal',
          'Guarde PDFs/digitalizações do contrato de arrendamento, atestado, declaração da entidade patronal e matrícula',
          'Em caso de recusa, abra a mensagem da Câmara: normalmente indica que documento está ilegível ou não é adequado',
          'Se o documento estiver em nome do cônjuge/parceiro, acrescente comprovativo de coabitação, se o sistema o permitir',
          'Se não houver resposta, use os contactos da Câmara Municipal de Cascais ou o atendimento municipal',
          'Depois da aprovação, confirme o benefício no serviço concreto: piscina, estacionamento, autocarro, espaço cultural',
          'Não entregue o cartão a outras pessoas: os benefícios são pessoais'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Cartão Viver Cascais digital', amountEUR: 0, note: 'Gratuito: o cartão digital é atribuído automaticamente após a validação do pedido. Serviços municipais específicos, estacionamento, desporto ou eventos podem ser pagos de acordo com as suas próprias tarifas.' },
    { label: 'Cartão Viver Cascais físico', amountEUR: 7, note: 'Opcional. Pode ser pedido, se o desejar, após a validação do pedido; tem validade de 5 anos.' },
    { label: 'Atestado de residência na Junta de Freguesia', amountEURMin: 0, amountEURMax: 10, note: 'A tarifa depende da freguesia e do tipo de certidão; só é necessário se não houver outro comprovativo de morada.' }
  ],
  sources: [
    {
      title: 'Câmara Municipal de Cascais — site oficial dos serviços municipais',
      url: 'https://www.cascais.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-05-31'
    },
    {
      title: 'Câmara Municipal de Cascais — Viver Cascais (aderir / renovar)',
      url: 'https://www.cascais.pt/servico/viver-cascais-aderir-renovar',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-05-31'
    },
    {
      title: 'MobiCascais — Cartão Viver Cascais e transportes',
      url: 'https://mobi.cascais.pt/viver-cascais',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-05-31'
    },
    {
      title: 'Cascais Próxima — estacionamento e mobilidade em Cascais',
      url: 'https://www.cascais.pt/empresa-municipal/cascais-proxima',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-05-31'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
