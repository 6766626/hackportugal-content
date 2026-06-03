export default {
  editorialVoice: 'hackportugal',
  id: 'agua-municipal-ligar-contador',
  categoryId: 'daily_life',
  title: 'Ligação da água e do contador: EPAL Lisboa, Águas do Porto e operadores municipais',
  tldr: 'Em Portugal, a água não é ligada através de uma empresa única, mas sim através do operador municipal: EPAL em Lisboa, Águas do Porto no Porto, SIMAR em Loures/Odivelas, SMAS/Águas noutras Câmara Municipal. Normalmente são necessários NIF, documento de identificação, contrato de arrendamento/compra ou autorização do proprietário, IBAN para débito direto e leitura do contador. O pedido é frequentemente online. Pode existir um depósito/garantia pontual de cerca de 30–80 €, com referência prática de ~60 €; o valor exacto depende do tarifário do operador e do tipo de contrato.',
  tags: ['água', 'epal', 'contador', 'serviços públicos'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'find-operator',
      title: '1. Encontre o seu operador de água',
      content: [
        { kind: 'paragraph', text: 'Em Portugal, o abastecimento de água é um serviço municipal. Não é possível escolher o “fornecedor” como se escolhe internet ou telecomunicações móveis: o contrato é celebrado com o operador que serve a morada específica.' },
        { kind: 'checklist', items: [
          'Lisboa: EPAL — Empresa Portuguesa das Águas Livres',
          'Porto: Águas e Energia do Porto / Águas do Porto',
          'Loures e Odivelas: SIMAR Loures e Odivelas',
          'Cascais: Águas de Cascais',
          'Sintra: SMAS de Sintra',
          'Oeiras e Amadora: SIMAS Oeiras e Amadora',
          'Almada: SMAS de Almada',
          'Em localidades pequenas, procure “Águas”, “SMAS” ou “Serviços Municipalizados” no site da Câmara Municipal'
        ] },
        { kind: 'paragraph', text: 'Se arrendar casa, pergunte primeiro ao senhorio/agente: a água já está activa e é apenas necessário mudar o titular, ou o contador está desligado e é preciso um novo contrato de fornecimento.' }
      ]
    },
    {
      id: 'documents',
      title: '2. Prepare os documentos',
      content: [
        { kind: 'paragraph', text: 'A lista é quase igual na EPAL, Águas do Porto e SMAS, mas os operadores municipais podem pedir formulários adicionais. Para estrangeiros, a autorização de residência nem sempre é obrigatória: muitas vezes basta passaporte/Cartão de Cidadão da UE + NIF.' },
        { kind: 'checklist', items: [
          'NIF',
          'Passaporte, Cartão de Cidadão, autorização de residência ou outro documento de identificação',
          'Contrato de arrendamento, escritura/caderneta predial, contrato-promessa ou autorização do proprietário',
          'Morada completa: rua, número, andar, código postal, freguesia',
          'Dados do contador: número do contador e leitura actual, se o contador já estiver instalado',
          'Fotografia do contador em grande plano: número + leitura',
          'IBAN de conta portuguesa ou SEPA para débito direto, se quiser pagamento automático',
          'Email e número de telefone português',
          'Por vezes: licença de utilização ou artigo matricial para imóvel novo/não standard'
        ] },
        { kind: 'warning', text: 'Não assine o auto de entrega da casa sem fotografias das leituras da água, electricidade e gás. A dívida antiga está normalmente associada ao titular anterior, mas uma disputa sobre consumo efectivo entre a data de entrada e a data do contrato só se resolve com documentos e fotografias.' }
      ]
    },
    {
      id: 'apply',
      title: '3. Submeta o pedido online ou no balcão',
      content: [
        { kind: 'substeps', items: [
          { id: 'online', title: 'Pedido online', content: [
            { kind: 'paragraph', text: 'Os grandes operadores têm área de cliente e formulários “celebrar contrato”, “novo contrato”, “ligação de água” ou “mudança de titularidade”. Carrega os documentos, indica o IBAN e escolhe o modo de recepção da fatura: email ou papel.' },
            { kind: 'paragraph', text: 'A EPAL e a Águas do Porto permitem resolver a maior parte das operações à distância. Para o primeiro contrato, por vezes é ainda assim marcada uma visita técnica para abrir a água, verificar a plombagem ou instalar/substituir o contador.' }
          ] },
          { id: 'counter', title: 'Presencialmente no escritório', content: [
            { kind: 'paragraph', text: 'Se o formulário online não aceitar o documento estrangeiro, a morada não aparecer na base de dados ou for necessária uma activação urgente, dirija-se à loja/balcão do cliente. Leve os documentos originais e cópias em PDF no telemóvel.' }
          ] },
          { id: 'landlord', title: 'Se o contrato ficar em nome do senhorio', content: [
            { kind: 'paragraph', text: 'É possível fazê-lo, mas é pior para o arrendatário: não controla o débito direto, não recebe faturas oficiais em seu nome e é mais difícil comprovar a morada. Para arrendamento de longa duração, em regra é melhor pôr a água em seu nome.' }
          ] }
        ] }
      ]
    },
    {
      id: 'fees-and-deposit',
      title: '4. Quanto pagar na ligação',
      content: [
        { kind: 'paragraph', text: 'Os valores exactos dependem do operador, do diâmetro do contador, do tipo de imóvel e de ser ou não necessária uma ligação física. Num apartamento comum com contador existente, normalmente não se trata de uma ligação de obra, mas sim de um novo contrato ou de uma mudança de titular.' },
        { kind: 'checklist', items: [
          'Depósito/garantia/caução: frequentemente cerca de 30–80 €, referência prática — ~60 €',
          'Alguns operadores não cobram depósito com débito direto ou devolvem/creditam o valor no cancelamento do contrato',
          'A instalação ou substituição do contador pode ser gratuita no âmbito da manutenção ou paga segundo o tarifário do operador',
          'Em imóveis novos, ligação ao ramal, vistoria e serviços acessórios podem custar bastante mais do que uma simples mudança de titular',
          'A primeira fatura pode incluir água, saneamento, resíduos urbanos e tarifas de disponibilidade fixas',
          'O IVA sobre a água e serviços associados depende do tipo de serviço; na fatura normalmente já aparece em linhas separadas'
        ] },
        { kind: 'warning', text: 'Não use o valor pago pelo vizinho como regra legal. A EPAL, Águas do Porto, SIMAR e SMAS têm regulamentos tarifários diferentes. Antes de pagar, consulte o PDF “Tarifário 2026” do seu município específico.' }
      ]
    },
    {
      id: 'meter-reading-billing',
      title: '5. Leituras: leitura mensal vs faturação',
      content: [
        { kind: 'paragraph', text: 'Depois da ligação, acompanhe as leituras. Se o operador não receber leitura real, a conta pode ser calculada por estimativa. Depois virá um acerto: valor a pagar ou crédito.' },
        { kind: 'checklist', items: [
          'Uma vez por mês, envie a leitura do contador através da área de cliente, aplicação, linha telefónica ou formulário no site',
          'Veja a janela de submissão: muitos operadores indicam na fatura os dias específicos do mês',
          'Guarde a fotografia do contador pelo menos até ao acerto seguinte',
          'Se o contador estiver dentro da casa, garanta acesso ao técnico mediante aviso',
          'Se chegar uma estimativa demasiado alta, submeta imediatamente a leitura real e peça correção/acerto',
          'Active a fatura eletrónica para não falhar contas',
          'O débito direto é cómodo, mas verifique o valor antes da data de cobrança; uma conta contestada deve, de preferência, ser reclamada antes do débito'
        ] },
        { kind: 'paragraph', text: 'Uma fatura de água normal em Portugal muitas vezes inclui mais do que água. Pode conter abastecimento, saneamento, resíduos sólidos urbanos, taxa de gestão de resíduos e componentes fixas. Por isso, a conta “da água” pode aumentar mesmo com baixo consumo.' }
      ]
    },
    {
      id: 'move-out-problems',
      title: '6. Ao sair, em caso de fuga ou disputa',
      content: [
        { kind: 'checklist', items: [
          'Ao sair, submeta antecipadamente a denúncia/rescisão do contrato',
          'Faça a leitura final com fotografia no dia da entrega das chaves',
          'Peça a final bill e a devolução/crédito da caução, se tiver existido',
          'Não deixe o contrato em seu nome depois do fim do arrendamento',
          'Em caso de avaria, ligue para o piquete/avarias do seu operador, não para a Câmara Municipal genérica',
          'Se a conta subir de repente, verifique o autoclismo, termoacumulador, torneira do jardim e fugas ocultas',
          'Peça vistoria/verificação do contador se suspeitar de erro do contador',
          'Se o operador não resolver a disputa, apresente reclamação no Livro de Reclamações eletrónico e depois à ERSAR/centro de arbitragem'
        ] },
        { kind: 'warning', text: 'Um acerto elevado relativo a vários meses normalmente não é anulado apenas porque “não sabia da leitura”. É realisticamente contestável se houver fotografias das leituras, uma fuga comprovada, erro de titularidade ou estimativa incorrecta após leitura comunicada.' }
      ]
    }
  ],
  costs: [
    { label: 'Depósito / caução / garantia', amountEURMin: 30, amountEURMax: 80, note: 'Intervalo frequente nos operadores municipais; referência ~60 €. Pode não se aplicar com débito direto ou ser devolvido no encerramento do contrato.' },
    { label: 'Mudança normal de titular / novo contrato com contador existente', amountEURMin: 0, amountEURMax: 50, note: 'Depende do operador e dos tarifários 2026; por vezes é incluído na primeira conta.' },
    { label: 'Ligação física, vistoria ou serviços acessórios', amountEURMin: 20, amountEURMax: 150, note: 'Para imóveis novos, ramal desligado ou instalação não standard, o valor pode ser superior.' }
  ],
  sources: [
    { title: 'EPAL — clientes, contratos e serviço de água em Lisboa', url: 'https://www.epal.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Águas do Porto — contratos, leituras, faturação e apoio ao cliente', url: 'https://www.aguasdoporto.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ERSAR — direitos dos consumidores de serviços de água, saneamento e resíduos', url: 'https://www.ersar.pt/pt/consumidor', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Livro de Reclamações eletrónico — reclamações sobre operadores de serviços públicos', url: 'https://www.livroreclamacoes.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
