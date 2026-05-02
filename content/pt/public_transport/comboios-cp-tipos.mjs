export default {
  editorialVoice: 'hackportugal',
  id: 'comboios-cp-tipos',
  categoryId: 'public_transport',
  title: 'Comboios CP: Alfa Pendular, Intercidades, InterRegional e Urbano — qual é a diferença',
  tldr: 'A CP é o operador ferroviário nacional. Alfa Pendular e Intercidades são comboios de longo curso com lugar obrigatório e compra online; o Alfa é mais rápido e mais caro, com Conforto/Turística. InterRegional e Regional são mais simples, mais lentos e muitas vezes sem reserva de lugar. Urbanos são os suburbanos de Lisboa, Porto e Coimbra, com tarifas por zonas e cartões Navegante/Andante. Em 2026, é melhor comprar bilhetes na CP app/site, nas máquinas ou no balcão; o Bilhete Verde combina CP + autocarro para destinos sem ligação ferroviária directa.',
  tags: ['cp', 'comboios', 'bilhetes', 'urbano'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'map-of-services',
      title: '1. Mapa rápido dos tipos de comboios CP',
      content: [
        { kind: 'paragraph', text: 'A CP tem vários níveis de serviço. Um erro comum de quem chega é procurar “simplesmente um comboio” e estranhar que um bilhete exija um lugar específico, outro funcione como um passe urbano e um terceiro não possa ser comprado facilmente numa máquina numa estação pequena.' },
        { kind: 'checklist', items: [
          'Alfa Pendular / AP — o comboio de longo curso mais rápido da CP: Lisboa–Porto–Braga/Guimarães/Faro e parte dos principais destinos.',
          'Intercidades / IC — comboio de longo curso entre grandes cidades, geralmente mais barato e mais lento do que o Alfa.',
          'InterRegional / IR — percursos médios entre regiões; menos conforto, mais paragens.',
          'Regional / R — comboios locais, muitas paragens, importantes para cidades pequenas.',
          'Urbanos — redes suburbanas de Lisboa, Porto e Coimbra; usadas para deslocações diárias.',
          'Celta / Internacional — serviços internacionais/transfronteiriços separados, por exemplo Porto–Vigo; as regras podem ser diferentes.'
        ] },
        { kind: 'warning', text: 'Os nomes nos painéis e na CP app aparecem em português: Alfa Pendular, Intercidades, InterRegional, Regional, Urbanos. Não olhe apenas para a cidade de destino, mas também para o número do comboio, a estação de partida e a plataforma — em Lisboa e no Porto há várias estações grandes.' }
      ]
    },
    {
      id: 'alfa-vs-intercidades',
      title: '2. Alfa Pendular e Intercidades: comboios de longo curso com lugar',
      content: [
        { kind: 'paragraph', text: 'Alfa Pendular e Intercidades são comboios interurbanos, os que mais se aproximam do modelo habitual de “comprar bilhete para uma viagem e um lugar específicos”. O bilhete fica associado à data, hora, comboio e lugar. Normalmente, não pode simplesmente entrar no comboio seguinte com o mesmo bilhete.' },
        { kind: 'checklist', items: [
          'O Alfa Pendular é mais rápido, faz menos paragens e normalmente é mais caro.',
          'No Alfa Pendular há classes Conforto e Turística. Conforto tem lugares mais espaçosos e é mais silencioso; Turística é a classe standard.',
          'No Intercidades há normalmente 1.ª classe e 2.ª classe; na prática, correspondem a “primeira” e “segunda” classe.',
          'A reserva de lugar para AP/IC é obrigatória e está incluída no bilhete.',
          'É prático comprar bilhetes AP/IC na CP app ou em cp.pt; em rotas populares Lisboa–Porto–Faro, compre com antecedência.',
          'Nos AP/IC existem tarifas promocionais e descontos por compra antecipada, mas estão limitados ao comboio, ao número de lugares e às condições de troca/reembolso.',
          'Se perder um AP/IC por erro seu, o bilhete pode ficar sem efeito; se a culpa for de uma ligação CP, vá ao balcão ou fale com o staff CP.'
        ] },
        { kind: 'paragraph', text: 'Na prática: Lisboa–Porto no Alfa Pendular é a escolha se o tempo e o conforto forem importantes. O Intercidades é muitas vezes mais sensato em termos de preço, sobretudo se a diferença de tempo for pequena ou se não viajar em hora de ponta.' }
      ]
    },
    {
      id: 'regional-and-interregional',
      title: '3. InterRegional, Regional: mais barato, mais lento, útil para cidades pequenas',
      content: [
        { kind: 'paragraph', text: 'InterRegional e Regional são a base operacional da CP fora dos principais corredores. São necessários se você vive fora de Lisboa/Porto e não viaja apenas entre capitais de distrito. O conforto é mais simples, a velocidade é menor e há mais paragens.' },
        { kind: 'checklist', items: [
          'Os lugares normalmente não são reservados: o bilhete dá direito à viagem, não a um assento específico.',
          'Em estações pequenas pode não haver máquina ou bilheteira aberta; confirme com antecedência.',
          'Se na estação não houver possibilidade de comprar bilhete, normalmente compra-se ao revisor no comboio, mas é melhor confirmar as regras da linha concreta.',
          'O horário pode ser pouco frequente: por vezes o próximo comboio é daí a 2–4 horas, não daí a 20 minutos.',
          'Para ligações a AP/IC, deixe margem: os comboios regionais sofrem mais frequentemente atrasos.',
          'Bicicletas e bagagem dependem do tipo de composição e da lotação; em horas de ponta pode haver restrições.',
          'Nas linhas rurais, verifique atentamente o sentido: a mesma plataforma pode servir ambos os sentidos.'
        ] },
        { kind: 'warning', text: 'Não planeie uma marcação importante na AIMA, Finanças, SNS ou Conservatória com uma ligação “à justa” através de Regional/InterRegional. Em Portugal, há um risco real de chegar atrasado devido a atraso, cancelamento ou greve.' }
      ]
    },
    {
      id: 'urbanos',
      title: '4. Urbanos: suburbanos de Lisboa, Porto e Coimbra',
      content: [
        { kind: 'paragraph', text: 'Urbanos não são “comboios de longo curso baratos”, mas sim uma rede suburbana. A lógica é diferente: zonas, serviços frequentes, torniquetes, validadores, passes mensais e integração com o transporte urbano.' },
        { kind: 'checklist', items: [
          'Lisboa: as linhas CP Urbanos ligam Lisboa a Sintra, Cascais, Azambuja, Sado e outros subúrbios.',
          'Porto: os Urbanos do Porto vão para Braga, Guimarães, Aveiro, Marco de Canaveses e zonas suburbanas.',
          'Coimbra: os Urbanos de Coimbra cobrem destinos locais em redor da cidade.',
          'Em Lisboa usa-se frequentemente o Navegante; no Porto — Andante. Mas as regras de zonas e validação são diferentes.',
          'Um bilhete simples Urbanos é normalmente comprado numa máquina/bilheteira e validado antes do embarque, se houver validador.',
          'Nas zonas com torniquetes, guarde o bilhete até à saída: é necessário para abrir o torniquete e para fiscalização.',
          'A CP app pode mostrar os horários dos Urbanos, mas a compra e utilização do bilhete dependem da rede e do suporte.',
          'Em horas de ponta, os comboios podem estar cheios, especialmente a linha de Sintra, a linha de Cascais e os destinos Porto–Braga/Aveiro.'
        ] },
        { kind: 'paragraph', text: 'Se vai mudar-se para os subúrbios, verifique primeiro não só a distância até Lisboa/Porto, mas também a frequência dos Urbanos depois das 20:00, o funcionamento aos fins-de-semana e o último comboio. Uma renda barata pode significar dependência de transportes pouco frequentes.' }
      ]
    },
    {
      id: 'where-to-buy',
      title: '5. Onde comprar: app, site, máquinas, balcão',
      content: [
        { kind: 'paragraph', text: 'Em 2026, o ponto de partida mais prático é a CP app ou cp.pt. Mas nem todos os bilhetes e nem todos os benefícios são vendidos online da mesma forma, por isso, por vezes, a bilheteira CP tradicional continua a ser a opção mais fiável.' },
        { kind: 'checklist', items: [
          'CP app / cp.pt — a melhor opção para Alfa Pendular e Intercidades: vêem-se lugares, classes, tarifas promocionais e ligações.',
          'Máquinas CP — práticas para Urbanos e alguns bilhetes regionais; a interface costuma existir em português e inglês.',
          'Balcão / bilheteira CP — bilheteira na estação; útil para percursos complexos, descontos, trocas e problemas após atrasos.',
          'Multibanco e cartões bancários são normalmente aceites nas máquinas e online, mas em estações pequenas é melhor ter uma forma de pagamento alternativa.',
          'Compre AP/IC com antecedência antes de feriados, no Verão, no Natal, na Páscoa, no São João no Porto e em fins-de-semana prolongados.',
          'Antes de pagar, confirme a estação: Lisboa Santa Apolónia, Lisboa Oriente, Porto Campanhã e Porto São Bento não são a mesma coisa.',
          'Uma captura de ecrã do bilhete é útil, mas é melhor ter o bilhete na CP app/PDF com um código QR legível.',
          'O nome no bilhete AP/IC pode ser verificado juntamente com o documento, especialmente em tarifas promocionais e nominativas.'
        ] },
        { kind: 'warning', text: 'Não compre bilhetes CP através de sites intermediários aleatórios se o preço for mais alto e as condições de reembolso não forem claras. A fonte oficial é cp.pt e a CP app; para passes urbanos — os sistemas oficiais Navegante/Andante e as estações.' }
      ]
    },
    {
      id: 'bilhete-verde',
      title: '6. Bilhete Verde: quando é preciso comboio + autocarro',
      content: [
        { kind: 'paragraph', text: 'Bilhete Verde é um formato de viagem combinada CP + autocarro para locais onde a ferrovia não chega directamente ou onde o autocarro cobre o último troço do percurso. É útil para expatriados sem carro: pode viajar de comboio até uma estação principal e continuar de autocarro com um bilhete associado.' },
        { kind: 'checklist', items: [
          'Verifique o Bilhete Verde no site da CP, na secção de bilhetes/viagens em parceria: a disponibilidade depende do percurso.',
          'Nem todos os destinos CP têm Bilhete Verde; não é um passe universal pelo país.',
          'As condições de ligação, reembolso e bagagem podem ser diferentes no operador de autocarro.',
          'Se viajar com uma mala grande, bicicleta, animal ou carrinho de bebé, confirme previamente as regras do troço em autocarro.',
          'Para um percurso complexo, é melhor comprar através do canal oficial da CP ou na bilheteira, para que os funcionários vejam toda a cadeia.',
          'Reserve tempo para a ligação: o autocarro pode sair do outro lado da estação ou de um terminal rodoviário separado.',
          'Se o comboio se atrasar, guarde o bilhete e contacte a CP/operador — os direitos dependem de o percurso ter sido vendido como uma ligação integrada.'
        ] },
        { kind: 'paragraph', text: 'Lógica prática: primeiro procure uma ligação CP directa. Se não houver ferrovia até à cidade pretendida, veja Bilhete Verde ou, separadamente, Rede Expressos/FlixBus/autocarros municipais. Em cidades pequenas, o último autocarro pode sair cedo.' }
      ]
    }
  ],
  sources: [
    {
      title: 'CP — site oficial dos comboios de passageiros, horários e compra de bilhetes',
      url: 'https://www.cp.pt/passageiros/pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'CP — Alfa Pendular e Intercidades: comboios de longo curso e serviços',
      url: 'https://www.cp.pt/passageiros/pt/como-viajar/alfa-pendular-intercidades',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'CP — Urbanos de Lisboa, Porto e Coimbra',
      url: 'https://www.cp.pt/passageiros/pt/como-viajar/urbanos',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'CP — Bilhete Verde e viagens combinadas',
      url: 'https://www.cp.pt/passageiros/pt/descontos-vantagens/vantagens-parcerias/bilhete-verde',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
