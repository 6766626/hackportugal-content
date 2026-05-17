export default {
  editorialVoice: 'hackportugal',
  id: 'a1-outbound-eu',
  categoryId: 'work_business',
  title: 'A1 para trabalhadores de Portugal destacados na UE',
  tldr: 'O A1 é uma declaração que confirma que um trabalhador contratado em Portugal e enviado temporariamente pelo empregador para outro país da UE continua a pagar Segurança Social em Portugal, e não no país de destacamento. O limite padrão é até 24 meses ao abrigo do Reg. 883/2004 art. 12. Normalmente, é o empregador português que o solicita através da Segurança Social Direta antes da partida. O A1 não substitui a notificação de destacamento no país de acolhimento, as garantias laborais nem a verificação fiscal.',
  tags: ['a1', 'destacamento', 'segurança-social', 'ue'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-a1-does',
      title: 'O que o A1 confirma',
      content: [
        { kind: 'paragraph', text: 'O A1 é um documento europeu sobre a legislação aplicável em matéria de segurança social. No cenário outbound, é necessário quando um trabalhador com contrato de trabalho português vai temporariamente trabalhar noutro país da UE por indicação do empregador português.' },
        { kind: 'paragraph', text: 'Com o A1, as contribuições para a Segurança Social continuam a ser calculadas em Portugal. O país de acolhimento não deve exigir contribuições locais para a segurança social pelo mesmo período.' },
        { kind: 'checklist', items: [
          'O trabalhador continua contratado por uma empresa portuguesa',
          'O salário e as contribuições continuam a passar por Portugal',
          'O destacamento é temporário, normalmente até 24 meses',
          'O trabalhador não é enviado para substituir outro trabalhador destacado',
          'O empregador exerce efetivamente uma atividade substancial em Portugal, e não tem apenas uma “caixa postal”',
          'O A1 aplica-se apenas à Segurança Social, e não ao IRS, IRC, IVA ou estatuto migratório'
        ] }
      ]
    },
    {
      id: 'eligibility',
      title: 'Quando é possível obter o A1 até 24 meses',
      content: [
        { kind: 'paragraph', text: 'A regra de base é o Reg. (EC) 883/2004 art. 12: um trabalhador cujo empregador exerce normalmente atividade num país da UE e o envia para outro país da UE pode permanecer no sistema do primeiro país, se a duração prevista do trabalho não exceder 24 meses.' },
        { kind: 'checklist', items: [
          'O trabalhador tem uma ligação ativa à Segurança Social em Portugal antes do destacamento',
          'Existe um contrato de trabalho com um empregador português',
          'O empregador mantém a authority: define tarefas, remuneração, disciplina, férias',
          'O trabalho no estrangeiro está previamente limitado no tempo',
          'O destino é um país da UE; na prática, o A1 também é utilizado para EEA/Switzerland ao abrigo das regras correspondentes',
          'No país de acolhimento podem existir requisitos separados: declaração de destacamento, pessoa de contacto, conservação de documentos, condições mínimas locais de trabalho',
          'Se o período for planeado desde o início para mais de 24 meses, o A1 padrão ao abrigo do art. 12 não é adequado — é necessário um exception agreement ao abrigo do art. 16'
        ] },
        { kind: 'warning', text: 'O A1 não pode ser utilizado como “reinicialização” das regras laborais locais. Mesmo com Segurança Social portuguesa, o país de acolhimento pode exigir salário mínimo local, horário de trabalho, segurança e saúde no trabalho, alojamento, reimbursement de despesas e declaração prévia de destacamento.' }
      ]
    },
    {
      id: 'request-flow',
      title: 'Como solicitar através da Segurança Social Direta',
      content: [
        { kind: 'paragraph', text: 'No cenário outbound, o pedido é normalmente apresentado pelo empregador português, e não pela empresa de acolhimento. Isto difere dos guias inbound, em que o trabalhador chega a Portugal com um A1 de outro país.' },
        { kind: 'substeps', items: [
          { id: 'prepare-data', title: '1. Preparar os dados antes da partida', content: [
            { kind: 'checklist', items: [
              'NISS do trabalhador',
              'NIF e identificação do empregador em Portugal',
              'País de destacamento e morada do local efetivo de trabalho',
              'Data de início e data de fim do destacamento',
              'Descrição das funções e do projeto',
              'Dados da empresa de acolhimento ou do cliente',
              'Confirmação de que o trabalhador não substitui outro posted worker',
              'Contacto do empregador para a Segurança Social'
            ] }
          ] },
          { id: 'ssd-menu', title: '2. Submeter na Segurança Social Direta', content: [
            { kind: 'paragraph', text: 'O empregador acede à Segurança Social Direta com as suas credenciais. Os menus e nomes podem mudar, mas o serviço necessário está relacionado com pedidos de destacamento / trabalhadores destacados para o estrangeiro / certificado A1.' },
            { kind: 'paragraph', text: 'Se a opção necessária não estiver disponível na interface, a via prática é uma mensagem/pedido através da Segurança Social Direta ou o contacto com o Centro Distrital da Segurança Social do empregador. Nas grandes empresas, isto é muitas vezes tratado pelo payroll ou por um fornecedor de RH.' }
          ] },
          { id: 'receive-a1', title: '3. Obter o certificado A1', content: [
            { kind: 'paragraph', text: 'Após a aprovação, o empregador descarrega ou recebe o A1 e entrega uma cópia ao trabalhador. É recomendável guardar o documento no telemóvel e em PDF: a inspeção do trabalho ou a segurança social do país de acolhimento pode pedi-lo no local.' }
          ] }
        ] }
      ]
    },
    {
      id: 'during-posting',
      title: 'O que fazer durante o destacamento',
      content: [
        { kind: 'paragraph', text: 'O A1 é apenas uma parte do compliance. Para uma deslocação de 2 semanas e para um projeto de 18 meses, o conjunto de obrigações será diferente, mas a lógica de base é a mesma: segurança social — Portugal, mínimos laborais — país de acolhimento.' },
        { kind: 'checklist', items: [
          'Verificar se é necessária uma declaração prévia de destacamento no país de destino',
          'Manter o A1, o contrato de trabalho e a assignment letter disponíveis para inspeção',
          'Cumprir as regras locais sobre remuneração mínima, horário de trabalho, férias e segurança e saúde no trabalho',
          'Verificar se é necessário registo de morada ou residence formalities, se a permanência for prolongada',
          'Acompanhar as regras dos 183 dias e dos treaties em matéria de IRS/imposto sobre o rendimento — o A1 não as resolve',
          'Guardar payroll records, timesheets, despesas de destacamento e provas das datas de entrada/saída',
          'Informar a Segurança Social se os prazos, o país ou as condições de trabalho mudarem'
        ] },
        { kind: 'warning', text: 'Se o A1 não estiver emitido ou se as condições não corresponderem de facto a um destacamento, o país de acolhimento pode exigir contribuições sociais locais e aplicar coimas. Corrigir isto retroativamente é mais difícil do que solicitar o A1 antes do início do trabalho.' }
      ]
    },
    {
      id: 'extensions-and-edge-cases',
      title: 'Prorrogação, 24+ meses e erros frequentes',
      content: [
        { kind: 'paragraph', text: 'O destacamento padrão com A1 é até 24 meses. Se o projeto for prorrogado, não se pode simplesmente “reiniciar” um novo A1 para a mesma pessoa na mesma função, como substituição de si própria.' },
        { kind: 'checklist', items: [
          'Se o prazo continuar dentro dos 24 meses — solicite a alteração/prorrogação antes do fim do A1 atual',
          'Se forem necessários mais de 24 meses — o empregador pode pedir um exception agreement ao abrigo do Reg. 883/2004 art. 16 entre as autoridades competentes dos países',
          'Se o trabalhador passar para um contrato local do país de acolhimento — o A1 normalmente termina',
          'Se o trabalhador trabalhar simultaneamente em vários países da UE, pode aplicar-se não o destacamento, mas as regras de multi-state work ao abrigo do art. 13',
          'Se se tratar de uma pessoa singular self-employed, a lógica do A1 é semelhante, mas o formulário e as provas diferem',
          'Se o destacamento for para UK, EEA ou Switzerland — verifique os acordos separados e a aplicabilidade do A1/certificado equivalente',
          'Se o país de acolhimento exigir um local representative, isso não é dispensado pelo A1 português'
        ] },
        { kind: 'warning', text: 'Não confunda o A1 com visto, Cartão de Cidadão, autorização de residência, EHIC, seguro de acidentes de trabalho ou certificado fiscal de residência. São documentos diferentes, com autoridades e prazos diferentes.' }
      ]
    }
  ],
  costs: [
    { label: 'Pedido de A1 na Segurança Social', amountEUR: 0, note: 'Normalmente não há taxa administrativa pela emissão do certificado A1; os custos podem existir apenas com payroll/jurista/fornecedor do empregador.' },
    { label: 'Coimas por falta de compliance de destacamento', amountEURMin: 0, amountEURMax: 0, note: 'Dependem do país de destino; verifique as regras da inspeção do trabalho concreta antes da partida.' }
  ],
  sources: [
    {
      title: 'gov.pt: destacamento de trabalhadores de Portugal para países da União Europeia',
      url: 'https://www2.gov.pt/en/cidadaos-europeus-viajar-viver-e-fazer-negocios-em-portugal/trabalhadores-em-portugal/destacamento-de-trabalhadores-para-paises-da-uniao-europeia',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Your Europe: destacamento de pessoal no estrangeiro e certificado A1',
      url: 'https://europa.eu/youreurope/business/human-resources/posting-workers-abroad/index_en.htm',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Regulation (EC) No 883/2004, art. 12 e art. 16 — coordenação dos sistemas de segurança social',
      url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02004R0883-20140101',
      kind: 'law',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Regulation (EC) No 987/2009 — regras de execução para a coordenação da segurança social',
      url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02009R0987-20180101',
      kind: 'law',
      language: 'en',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
