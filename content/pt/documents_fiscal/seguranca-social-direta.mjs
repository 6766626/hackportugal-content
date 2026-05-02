export default {
  editorialVoice: 'hackportugal',
  id: 'seguranca-social-direta',
  categoryId: 'documents_fiscal',
  title: 'Segurança Social Direta: todos os serviços online da SSD',
  tldr: 'A Segurança Social Direta é a área pessoal da Segurança Social: NISS, contribuições, recibos verdes, subsídios de doença/desemprego/parentalidade, registo de empregado doméstico, simuladores de pensão e prestações familiares. O acesso é feito através de NISS + palavra-passe ou Chave Móvel Digital (CMD). Em 2026, o pedido de NISS para estrangeiro é feito online e gratuitamente; taxas-chave: trabalhador 11%, empregador normalmente 23,75%, independent worker 21,4%, IAS 537,13 €. A SSD é necessária para quase todas as pessoas que trabalham, pagam contribuições ou aguardam prestações.',
  tags: ['ssd', 'niss', 'segurança-social', 'cmd'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que é a Segurança Social Direta',
      content: [
        { kind: 'paragraph', text: 'A Segurança Social Direta, ou SSD, é a área online oficial da Segurança Social. Não é a autoridade tributária Finanças nem a AIMA: aqui são registadas as contribuições sociais, a carreira contributiva, as prestações, as pensões e os estatutos de trabalhador por conta de outrem/trabalhador independente.' },
        { kind: 'paragraph', text: 'A SSD não é necessária apenas para quem já trabalha. Através do portal, pode pedir o NISS, verificar se o empregador está a pagar contribuições, apresentar pedidos de prestações, ver dívidas, descarregar declarações e gerir dados do agregado familiar.' },
        { kind: 'checklist', items: [
          'Pedir o NISS para cidadão estrangeiro',
          'Verificar a carreira contributiva — meses e valores das contribuições',
          'Ver as remunerações declaradas pelo empregador',
          'Pedir ou acompanhar subsídio de doença, desemprego, parentalidade',
          'Entregar a declaração trimestral para recibos verdes',
          'Consultar pagamentos e recebimentos — valores apurados, pagamentos, dívidas',
          'Obter declarações para o banco, arrendamento, prestações ou procedimentos de imigração',
          'Registar trabalhador de serviço doméstico enquanto empregador',
          'Usar o simulador de pensões e outros simuladores'
        ] }
      ]
    },
    {
      id: 'access',
      title: 'Como entrar: CMD ou palavra-passe da SSD 🔐',
      content: [
        { kind: 'paragraph', text: 'O acesso à SSD é possível de duas formas principais: através da Chave Móvel Digital (CMD) ou através de NISS + palavra-chave da Segurança Social. Para um expatriado, é mais prático ter ambas as opções: a CMD é muitas vezes mais rápida, e a palavra-passe da SSD ajuda se a CMD não estiver ativa ou se tiver mudado de telefone.' },
        { kind: 'substeps', items: [
          { id: 'cmd', title: 'Acesso através da Chave Móvel Digital', content: [
            { kind: 'paragraph', text: 'A CMD é a identificação digital do Estado. Pode ser usada em gov.pt, ePortugal, Finanças, Segurança Social Direta e outros portais. Para entrar, normalmente são necessários o número de telefone, o PIN da CMD e um código de utilização única.' },
            { kind: 'checklist', items: [
              'Ative a CMD com antecedência: online com Cartão de Cidadão ou presencialmente num Espaço Cidadão / IRN / outros pontos de atendimento',
              'Verifique se a CMD tem associado um número de telefone português ou estrangeiro atualizado',
              'Guarde o PIN da CMD separadamente do cartão SIM',
              'Se mudar de número de telefone, atualize a CMD antes de perder o acesso ao número antigo'
            ] }
          ] },
          { id: 'password', title: 'Acesso através de NISS + palavra-passe', content: [
            { kind: 'paragraph', text: 'Se já tiver NISS, pode pedir uma palavra-passe de acesso na página da Segurança Social Direta. Em alguns casos, a palavra-passe é enviada para a morada registada na Segurança Social; por isso, a morada deve estar atualizada.' },
            { kind: 'checklist', items: [
              'É necessário NISS — Número de Identificação da Segurança Social',
              'É necessário ter morada, telefone e e-mail atualizados no sistema da Segurança Social',
              'Depois do primeiro acesso, verifique e atualize os contactos',
              'Não use a palavra-passe da SSD em Finanças, bancos ou serviços privados',
              'Se a palavra-passe não chegar, contacte através do e-Clic, da Linha Segurança Social ou do atendimento presencial'
            ] }
          ] }
        ] },
        { kind: 'warning', text: 'Não partilhe o acesso com contabilista, empregador ou senhorio. Na SSD são visíveis as suas contribuições, prestações, dados familiares e eventuais dívidas. Para o contabilista, é mais seguro usar autorizações separadas ou uma partilha limitada de documentos.' }
      ]
    },
    {
      id: 'niss-online',
      title: 'Pedido de NISS online para estrangeiro',
      content: [
        { kind: 'paragraph', text: 'O NISS é o número de identificação da Segurança Social. É necessário para contrato de trabalho, recibos verdes, contribuições, prestações e parte dos procedimentos administrativos. Em 2026, os estrangeiros podem pedir o NISS online através do formulário Pedido de NISS — Cidadão Estrangeiro no site da Segurança Social.' },
        { kind: 'checklist', items: [
          'Passaporte, Cartão de Cidadão da UE ou outro documento de identificação',
          'NIF, se já existir',
          'autorização de residência, visto ou outro documento de permanência legal, se aplicável',
          'E-mail e telefone de contacto',
          'Morada em Portugal ou morada para contacto',
          'Documento que comprove atividade por conta de outrem/atividade independente, se existir: contrato de trabalho, declaração da entidade empregadora, início de atividade',
          'Para representante — procuração e documentos do representante'
        ] },
        { kind: 'paragraph', text: 'O pedido é gratuito. Depois da atribuição do NISS, poderá pedir a palavra-passe da SSD e verificar se o seu registo já aparece no sistema. Se o empregador precisar do NISS, não espere “até a empresa tratar de tudo”: confirme a atribuição por si.' },
        { kind: 'warning', text: 'O NISS, por si só, não dá autorização de residência, não substitui o NIF e não comprova residência fiscal. É um número da Segurança Social, não um estatuto de imigração.' }
      ]
    },
    {
      id: 'contributions',
      title: 'Contribuições, carreira contributiva e recibos verdes',
      content: [
        { kind: 'paragraph', text: 'Uma das principais secções da SSD é a consulta da carreira contributiva. Aqui vê-se em que meses e sobre que valores foram declaradas contribuições. Isto é crítico para prestações e para a futura pensão: a Segurança Social calcula direitos não pelo contrato de trabalho em papel, mas pelas remunerações registadas e pelas contribuições.' },
        { kind: 'checklist', items: [
          'Um trabalhador com contrato de trabalho paga normalmente 11% do salário',
          'O empregador paga normalmente 23,75% por cima do salário',
          'Um independent worker com recibos verdes no regime normal paga 21,4%',
          'A Declaração trimestral para recibos verdes é entregue em janeiro, abril, julho e outubro',
          'Na SSD é possível ver contribuições a pagar e referências Multibanco',
          'É possível verificar dívida à Segurança Social e pedir planos de pagamento, se disponíveis',
          'É possível descarregar declarações de situação contributiva',
          'Verifique a carreira contributiva para prestações e pensões por mês, e não apenas pelo valor anual'
        ] },
        { kind: 'warning', text: 'Se o empregador retém 11% do salário, mas não há remunerações na SSD, isso é um sinal de alerta. Peça os recibos de vencimento e esclareça por escrito com o empregador; se necessário, contacte a ACT e a Segurança Social.' }
      ]
    },
    {
      id: 'benefits-and-services',
      title: 'Prestações, pensões e serviço doméstico',
      content: [
        { kind: 'paragraph', text: 'A SSD é o canal principal para pedidos e acompanhamento de pagamentos. Nem todas as prestações são “pedidas do zero” manualmente: por exemplo, a baixa médica começa frequentemente com o Certificado de Incapacidade Temporária, que o médico do SNS envia eletronicamente, e na SSD você verifica o estado, os valores e os dados em falta.' },
        { kind: 'checklist', items: [
          'Subsídio de doença — baixa médica, se existir o prazo de garantia necessário e CIT eletrónico',
          'Subsídio de desemprego — prestação de desemprego após inscrição no IEFP e cumprimento da carreira contributiva',
          'Subsídio parental — pagamentos pelo nascimento de criança e licença parental',
          'Abono de família — prestação familiar, depende dos rendimentos do household e do escalão',
          'Prestações por deficiência ou dependência — pagamentos específicos quando as condições estão comprovadas',
          'Simulador de pensões — cálculo indicativo da futura pensão com base nos dados da carreira contributiva',
          'Registo de trabalhador de serviço doméstico — registo do trabalhador doméstico pelo empregador',
          'Pedidos e mensagens — acompanhamento de pedidos, notificações e solicitações da Segurança Social'
        ] },
        { kind: 'paragraph', text: 'Para serviço doméstico, a SSD permite ao empregador registar a relação, declarar remunerações e pagar contribuições. Isto é importante para amas, empregadas domésticas, cuidadores e famílias que contratam uma pessoa diretamente, e não através de uma agência.' },
        { kind: 'warning', text: 'As prestações têm prazos e condições. Para desemprego, são importantes a inscrição no IEFP e a carreira contributiva; para parentalidade, os prazos de entrega e a indicação correta da licença; para doença, o CIT eletrónico e os dados do empregador. Não adie a verificação da SSD até ao momento em que o dinheiro já deveria ter chegado.' }
      ]
    },
    {
      id: 'practical-routine',
      title: 'Rotina prática para expatriados',
      content: [
        { kind: 'paragraph', text: 'Depois de obter o NISS e fazer o primeiro acesso à SSD, configure a área pessoal como uma ferramenta de trabalho. Leva menos de uma hora, mas poupa semanas de correspondência se o empregador se enganar, se uma prestação ficar pendente ou se a Segurança Social enviar uma notificação.' },
        { kind: 'checklist', items: [
          'Verifique nome, data de nascimento, NIF, morada, e-mail e telefone',
          'Ative notificações digitais, se compreender as consequências e consultar o portal regularmente',
          'Verifique uma vez por mês as remunerações declaradas pelo empregador',
          'Verifique uma vez por trimestre os recibos verdes e a declaração trimestral, se for self-employed',
          'Descarregue comprovativos e declarações em PDF logo após apresentar pedidos',
          'Guarde referências Multibanco e comprovativos de pagamento',
          'Antes de mudar de trabalho, verifique se o antigo empregador encerrou corretamente o vínculo',
          'Antes de pedir uma prestação, verifique o IBAN e o household no sistema',
          'Não ignore mensagens da Segurança Social — alguns prazos contam a partir da data da notificação'
        ] },
        { kind: 'warning', text: 'SSD, Finanças e AIMA não sincronizam tudo instantaneamente. A alteração de morada, estado civil, IBAN ou estatuto de atividade pode exigir atualizações separadas em vários sistemas.' }
      ]
    }
  ],
  costs: [
    { label: 'Pedido de NISS para cidadão estrangeiro', amountEUR: 0, note: 'A entrega através do formulário online oficial da Segurança Social é gratuita' },
    { label: 'Acesso à Segurança Social Direta', amountEUR: 0, note: 'Acesso através de CMD ou NISS + palavra-passe sem taxa administrativa' },
    { label: 'Chave Móvel Digital', amountEUR: 0, note: 'A ativação da CMD como serviço do Estado é gratuita; podem existir apenas custos normais de comunicações/SMS do operador' }
  ],
  sources: [
    { title: 'Segurança Social Direta — portal oficial', url: 'https://www.seg-social.pt/seguranca-social-direta', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Pedido de NISS — Cidadão Estrangeiro', url: 'https://www.seg-social.pt/pedido-de-formulario-niss-cidadao-estrangeiro', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'gov.pt — Pedir o Número de Identificação da Segurança Social', url: 'https://www.gov.pt/servicos/pedir-o-numero-de-identificacao-da-seguranca-social-niss', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'gov.pt — Pedir a Chave Móvel Digital', url: 'https://www.gov.pt/servicos/pedir-a-chave-movel-digital', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
