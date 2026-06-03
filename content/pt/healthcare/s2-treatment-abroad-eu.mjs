export default {
  editorialVoice: 'hackportugal',
  id: 's2-treatment-abroad-eu',
  categoryId: 'healthcare',
  title: 'Formulário S2: tratamento programado noutro país da UE pago pelo SNS',
  tldr: 'O S2 é uma autorização prévia do SNS para tratamento programado noutro país da UE/EEE/Suíça ao abrigo das regras do Reg. 883/2004. Não é o EHIC: o Cartão Europeu de Seguro de Doença cobre cuidados médicos súbitos durante uma viagem, enquanto o S2 é necessário antes de uma cirurgia, terapia ou consulta no estrangeiro. O pedido normalmente passa pelo seu médico de família ou hospital do SNS e pela Administração Regional de Saúde/ULS competente. Sem S2, a conta pode ser emitida em seu nome; a via alternativa é o reembolso ao abrigo da Lei 52/2014, mas está limitado às tarifas do SNS e muitas vezes exige autorização prévia.',
  tags: ['sns', 's2', 'tratamento', 'ue'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-s2-is',
      title: 'O que é o S2 e quando é necessário',
      content: [
        { kind: 'paragraph', text: 'O formulário S2 é um documento de autorização prévia para tratamento programado fora de Portugal, mas dentro da UE/EEE/Suíça. Baseia-se na coordenação dos sistemas de segurança social da UE: você continua segurado em Portugal através do SNS, e o tratamento é prestado por uma clínica pública ou integrada no sistema público de outro país.' },
        { kind: 'paragraph', text: 'Casos típicos: cirurgia, diagnóstico especializado, tratamento oncológico, consulta num centro de referência, terapia que em Portugal não é possível obter atempadamente ou que não é possível obter de todo por indicação médica.' },
        { kind: 'checklist', items: [
          'O S2 é tratado ANTES do tratamento, não depois da viagem.',
          'É coberto apenas o tratamento acordado e indicado na autorização.',
          'A clínica de destino deve funcionar no sistema público do país de tratamento ou ter acordo com esse sistema.',
          'O pagamento segue as regras e tarifas do país de tratamento, como para um paciente local desse país.',
          'O paciente normalmente paga os copagamentos/taxas moderadoras locais, se existirem.',
          'Transporte, alojamento, intérprete e acompanhante normalmente não são cobertos automaticamente.',
          'O S2 não substitui um seguro de viagem e não cobre uma clínica privada “à escolha”, se esta estiver fora do sistema público.'
        ] }
      ]
    },
    {
      id: 's2-vs-ehic',
      title: 'Não confundir com EHIC / CESD',
      content: [
        { kind: 'paragraph', text: 'EHIC em português é o Cartão Europeu de Seguro de Doença, CESD. Serve para cuidados súbitos e necessários durante uma viagem temporária: trauma, infeção, agravamento de doença, consulta urgente. Não se destina à situação “vou de propósito para a Alemanha/Espanha/França para me tratar”.' },
        { kind: 'checklist', items: [
          'EHIC/CESD: cuidados urgentes ou medicamente necessários durante uma viagem.',
          'S2: tratamento previamente planeado no estrangeiro.',
          'O EHIC/CESD pode ser apresentado no hospital em caso de problema súbito.',
          'O S2 deve ser obtido antes da data de internamento/procedimento.',
          'O EHIC/CESD não garante o pagamento de uma cirurgia programada.',
          'O S2 não cobre tratamento arbitrário para além do âmbito autorizado.'
        ] },
        { kind: 'warning', text: 'Se viajar para uma cirurgia programada sem S2 e sem outro tipo de autorização prévia, o hospital noutro país da UE pode emitir a conta total em seu nome. O reembolso posterior através do SNS não é garantido.' }
      ]
    },
    {
      id: 'eligibility',
      title: 'Quem pode pedir S2 em Portugal',
      content: [
        { kind: 'paragraph', text: 'Na prática, é necessário ter estatuto de utente do SNS e confirmação de que Portugal é o seu país competente para cobertura médica. Para um expatriado, isto normalmente significa residência em Portugal, número de utente, NIF, morada, e inscrição num Centro de Saúde/ULS. A nacionalidade não é o fator principal; o mais importante é saber que país é responsável pela sua cobertura de saúde.' },
        { kind: 'checklist', items: [
          'Tem número de utente SNS.',
          'Reside efetivamente em Portugal e está inscrito num Centro de Saúde/ULS.',
          'Existe parecer médico de um médico do SNS ou hospital do SNS sobre a necessidade do tratamento.',
          'O tratamento está incluído no âmbito dos cuidados que o SNS, em princípio, cobre em Portugal.',
          'Em Portugal, o tratamento não pode ser prestado num prazo clinicamente justificável — o prazo deve ser avaliado tendo em conta o diagnóstico, a dor, o risco de agravamento e a urgência clínica.',
          'Existe uma clínica/hospital de destino noutro país da UE/EEE/Suíça disposto a receber ao abrigo do S2.',
          'Não está a tentar contornar a lista de espera apenas por preferência pessoal por uma clínica, se o tratamento estiver disponível em Portugal num prazo aceitável.'
        ] },
        { kind: 'warning', text: 'O S2 não é um “direito de escolher qualquer melhor clínica da Europa paga pelo SNS”. A autorização é concedida por necessidade médica e de acordo com as regras do sistema público, não com base numa proposta comercial de um hospital privado.' }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'Como pedir o S2 através do SNS',
      content: [
        { kind: 'substeps', items: [
          { id: 'medical-justification', title: '1. Obter justificação médica no SNS', content: [
            { kind: 'paragraph', text: 'Comece pelo médico de família, especialista ou hospital do SNS. É necessário um relatório médico: diagnóstico, historial de tratamento, porque é necessário um procedimento específico, porque a espera em Portugal é clinicamente inaceitável ou porque o método não está disponível.' }
          ] },
          { id: 'foreign-provider', title: '2. Encontrar a instituição de destino', content: [
            { kind: 'paragraph', text: 'Peça à clínica noutro país da UE uma confirmação por escrito: nome da instituição, serviço, médico, plano de tratamento, datas previstas, código/descrição do procedimento, confirmação de que a instituição funciona no sistema público ou aceita pacientes ao abrigo do S2.' }
          ] },
          { id: 'submit-request', title: '3. Apresentar o pedido de autorização prévia', content: [
            { kind: 'paragraph', text: 'Na prática, o processo é entregue através da sua ULS/Centro de Saúde/hospital do SNS e encaminhado para a Administração Regional de Saúde competente ou para a estrutura correspondente do SNS. O percurso varia consoante a região, por isso peça um número de processo por escrito e o contacto do departamento responsável.' },
            { kind: 'checklist', items: [
              'Passaporte ou Cartão de Cidadão / autorização de residência.',
              'Número de utente SNS.',
              'NIF e morada portuguesa.',
              'Relatório médico do SNS.',
              'Documentos sobre lista de espera ou impossibilidade de tratamento em Portugal, se existirem.',
              'Carta do hospital de destino no estrangeiro.',
              'Plano de tratamento e datas.',
              'Contactos do médico/serviço noutro país.',
              'Os seus contactos: telefone, email, morada.'
            ] }
          ] },
          { id: 'wait-decision', title: '4. Aguardar a decisão escrita e o formulário S2', content: [
            { kind: 'paragraph', text: 'Não compre bilhetes não reembolsáveis nem confirme o internamento antes de obter a autorização. Após a aprovação, ser-lhe-á emitido o S2 ou documento equivalente para apresentar ao hospital de destino.' }
          ] }
        ] }
      ]
    },
    {
      id: 'payment-and-limits',
      title: 'O que será pago e o que fica a seu cargo',
      content: [
        { kind: 'paragraph', text: 'Com o S2, o tratamento é pago entre sistemas de saúde: Portugal, como país competente, cobre os cuidados autorizados, e o país de tratamento aplica as suas regras públicas. Se os pacientes locais pagarem parte do custo, pode ser-lhe pedido que pague a mesma parte.' },
        { kind: 'checklist', items: [
          'É coberto apenas o tratamento indicado no S2.',
          'Se o médico no estrangeiro acrescentar um novo procedimento, confirme antecipadamente se é necessária uma nova autorização.',
          'Os copagamentos no país de tratamento podem ficar a seu cargo.',
          'Pagamentos privados adicionais, quarto individual, serviços premium e taxas administrativas podem não ser cobertos.',
          'Transporte e alojamento do paciente normalmente não estão incluídos no S2.',
          'Acompanhante, intérprete, guarda de crianças, perda de rendimento — não são cobertura padrão do SNS.',
          'Guarde todos os documentos: faturas, relatório de alta, receitas e comprovativos de pagamento.',
          'Depois de regressar, entregue o relatório clínico ao médico do SNS, para continuar o acompanhamento em Portugal.'
        ] },
        { kind: 'warning', text: 'Se a clínica de destino pedir pagamento antecipado, confirme primeiro com a parte portuguesa se isso é compatível com o S2. Nem todas as propostas comerciais de clínicas privadas podem ser pagas através do SNS.' }
      ]
    },
    {
      id: 'if-refused',
      title: 'Se o S2 for recusado ou se o tratamento já tiver sido pago',
      content: [
        { kind: 'paragraph', text: 'A recusa deve ser fundamentada. Motivos frequentes: o tratamento está disponível em Portugal num prazo clinicamente aceitável; o procedimento não está abrangido pelo SNS; a clínica escolhida não é adequada para S2; faltam documentos médicos.' },
        { kind: 'checklist', items: [
          'Peça a decisão escrita com os motivos da recusa.',
          'Peça ao médico do SNS que complemente o relatório médico com os riscos clínicos da espera.',
          'Verifique se é possível escolher outro hospital de destino no sistema público da UE.',
          'Confirme o prazo e o procedimento de reclamação/recurso no seu processo.',
          'Se já pagou o tratamento, pergunte sobre a via de reembolso ao abrigo da Lei 52/2014 relativa a cuidados de saúde transfronteiriços.',
          'Ao abrigo da Lei 52/2014, o reembolso normalmente está limitado ao montante que o SNS teria pago em Portugal, e alguns tipos de cuidados exigem autorização prévia.',
          'Para cuidados urgentes durante uma viagem, use o EHIC/CESD, não o S2.'
        ] },
        { kind: 'warning', text: 'A impugnação judicial ou administrativa só faz sentido com uma base probatória médica forte. Formulações como “melhor serviço” ou “lista de espera mais curta” sem risco clínico são geralmente fracas.' }
      ]
    }
  ],
  costs: [
    { label: 'Apresentação do pedido S2 no SNS', amountEUR: 0, note: 'Normalmente não há taxa administrativa pelo formulário em si; os custos começam com traduções, viagem e copagamentos no país de tratamento.' },
    { label: 'Copagamentos no país de tratamento', amountEURMin: 0, amountEURMax: 9999, note: 'Dependem das regras do país e do procedimento concreto; confirme por escrito junto do hospital de destino antes da viagem.' },
    { label: 'Tradução de documentos médicos', amountEURMin: 20, amountEURMax: 80, note: 'Valor indicativo por página junto de um tradutor; nem sempre é exigida tradução certificada, mas a clínica pode pedi-la.' }
  ],
  sources: [
    {
      title: 'Comissão Europeia Your Europe: tratamento programado no estrangeiro e reembolso de despesas',
      url: 'https://europa.eu/youreurope/citizens/health/planned-healthcare/expenses-reimbursements/index_en.htm',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Regulamento (CE) n.º 883/2004 sobre a coordenação dos sistemas de segurança social',
      url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32004R0883',
      kind: 'law',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Lei n.º 52/2014: cuidados de saúde transfronteiriços em Portugal',
      url: 'https://diariodarepublica.pt/dr/detalhe/lei/52-2014-55606457',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DGS: ponto de contacto nacional para cuidados de saúde transfronteiriços',
      url: 'https://www.dgs.pt/paginas-de-sistema/saude-de-a-a-z/cuidados-de-saude-transfronteiricos.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
