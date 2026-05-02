export default {
  editorialVoice: 'hackportugal',
  id: 'bike-mobility-gira-bus',
  categoryId: 'public_transport',
  title: 'Bikesharing GIRA, BUGA, U-Bike e transporte de bicicletas',
  tldr: 'Em Lisboa, o principal sistema de bikesharing é o GIRA da EMEL: pega na bicicleta pela aplicação, devolve-a numa estação e é conveniente para deslocações curtas de 15–45 minutos. Em Aveiro existe o BUGA municipal, historicamente um serviço urbano gratuito com regras locais. O U-Bike não é aluguer turístico, mas sim bicicletas de campus para estudantes/trabalhadores de instituições de ensino superior. Na CP, as bicicletas são geralmente transportadas gratuitamente, mas no Alfa Pendular/Intercidades são necessários lugares para bicicleta e reserva prévia; no metro de Lisboa/Porto é possível, se houver espaço e forem respeitados os limites.',
  tags: ['gira', 'buga', 'bicicleta', 'cp', 'metro'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'gira-lisboa',
      title: 'GIRA Lisboa: como utilizar 🚲',
      content: [
        { kind: 'paragraph', text: 'GIRA é o sistema urbano de bicicletas de Lisboa, operado pela EMEL. É um serviço station-based: a bicicleta deve ser levantada e devolvida numa estação oficial GIRA, e não deixada à porta do prédio.' },
        { kind: 'checklist', items: [
          'Descarregue a aplicação GIRA — Bicicletas de Lisboa.',
          'Registe-se com e-mail, telefone e cartão de pagamento.',
          'Escolha o tarifário na aplicação: diário, mensal ou anual — o preço actualizado é apresentado antes do pagamento.',
          'No mapa, verifique a estação: bicicletas verdes/disponíveis e docas livres para devolução.',
          'Desbloqueie a bicicleta através da aplicação junto à estação.',
          'Antes de arrancar, verifique os travões, o selim, as luzes, os pneus e a fixação do cadeado.',
          'Devolva a bicicleta apenas numa doca livre de uma estação GIRA e aguarde a confirmação na aplicação.',
          'Se a doca não fixar a bicicleta, não se vá embora: experimente outra doca ou abra o apoio na aplicação.'
        ] },
        { kind: 'paragraph', text: 'O GIRA funciona melhor como “último quilómetro”: do metro/Comboios até casa ou ao escritório. Para deslocações pelas colinas de Lisboa, uma bicicleta eléctrica é normalmente mais prática do que uma bicicleta convencional.' },
        { kind: 'warning', text: 'Não se guie por blogues antigos com preços do GIRA. Em 2026, os tarifários e as multas devem ser verificados na aplicação antes da compra: a EMEL altera as condições, e o valor de bloqueio/penalty depende do tipo de assinatura e do incidente.' }
      ]
    },
    {
      id: 'buga-aveiro',
      title: 'BUGA Aveiro: bicicleta urbana em Aveiro',
      content: [
        { kind: 'paragraph', text: 'BUGA — Bicicleta de Utilização Gratuita de Aveiro, o serviço municipal de bicicletas de Aveiro. A sua lógica é diferente da do GIRA: é um sistema local da Câmara Municipal de Aveiro, não uma rede nacional.' },
        { kind: 'checklist', items: [
          'Verifique as estações/pontos BUGA actuais no site da Câmara Municipal de Aveiro ou na informação urbana de Aveiro.',
          'Confirme o formato de acesso: aplicação, registo junto do operador ou levantamento através de um ponto de atendimento — as regras podem mudar consoante a época.',
          'Leve um documento: passaporte, Cartão de Cidadão ou autorização de residência podem ser pedidos para o registo.',
          'Verifique o horário de funcionamento: os serviços municipais muitas vezes não funcionam como aluguer privado 24/7.',
          'Use o BUGA para deslocações curtas pelo centro plano de Aveiro, universidade, canais e estação ferroviária.',
          'Devolva a bicicleta apenas num local autorizado; caso contrário, pode haver bloqueio da conta ou multa de acordo com as regras do serviço.'
        ] },
        { kind: 'paragraph', text: 'Aveiro é uma das cidades mais cómodas de Portugal para uma bicicleta convencional: o relevo é plano e as distâncias são curtas. Mas o fluxo turístico à volta dos canais é elevado, por isso no centro é melhor circular devagar e não contar com ciclovia separada em todo o lado.' }
      ]
    },
    {
      id: 'ubike-students',
      title: 'U-Bike: opção para estudantes e trabalhadores de instituições de ensino superior',
      content: [
        { kind: 'paragraph', text: 'U-Bike Portugal é um programa de mobilidade em bicicleta para campus académicos. Não é um bikesharing urbano “para todos”: o acesso depende da universidade ou instituto politécnico concreto.' },
        { kind: 'checklist', items: [
          'Consulte o site da sua instituição de ensino superior: Universidade de Lisboa, Universidade do Porto, Universidade de Aveiro, Universidade de Coimbra e outros campus podem ter regras diferentes.',
          'Normalmente, o direito de acesso é dado a estudantes, docentes e trabalhadores com conta activa da instituição.',
          'Pode ser necessário registo através dos serviços académicos, cartão de estudante ou portal interno.',
          'Alguns campus cobram caução ou taxa de manutenção; outros disponibilizam a bicicleta gratuitamente por semestre/ano.',
          'Confirme onde pode guardar a bicicleta: em casa, no campus ou apenas em parques específicos.',
          'Verifique a responsabilidade por furto, danos na bateria e ausência de cadeado — isto está frequentemente previsto no termo de responsabilidade.'
        ] },
        { kind: 'warning', text: 'Não compre uma bicicleta própria antes de verificar o U-Bike: se for estudante numa instituição participante, uma bicicleta de campus pode resolver o trajecto diário “casa — metro/comboio — faculdade” quase sem custos.' }
      ]
    },
    {
      id: 'cp-trains',
      title: 'Transporte de bicicleta na CP: comboios urbanos, regionais e de longo curso',
      content: [
        { kind: 'paragraph', text: 'A CP permite o transporte de bicicletas, mas as regras dependem do tipo de comboio. O princípio base em 2026: a bicicleta é transportada gratuitamente se houver lugar e forem cumpridas as condições de segurança; nos comboios de longo curso é necessário reservar previamente um lugar para bicicleta.' },
        { kind: 'checklist', items: [
          'Urbanos de Lisboa, Porto e Coimbra: normalmente é possível transportar a bicicleta gratuitamente, se a carruagem não estiver sobrelotada.',
          'Regional e InterRegional: o transporte é possível se houver espaço; a tripulação do comboio pode recusar se a bicicleta dificultar a passagem ou a segurança.',
          'Alfa Pendular e Intercidades: é necessário um comboio com lugares para bicicletas e reserva prévia ao comprar o bilhete.',
          'Uma bicicleta dobrável, quando dobrada, é normalmente considerada bagagem, se não incomodar os passageiros.',
          'Não coloque a bicicleta junto às portas, saídas de emergência, no corredor nem nos lugares para pessoas com mobilidade reduzida.',
          'Retire alforges/bagagem se aumentarem o volume e dificultarem a fixação.',
          'Nas correspondências, reserve mais tempo: os elevadores nas estações podem não funcionar, e as escadas com bicicleta são incómodas.',
          'Se viajar em grupo, verifique o limite de lugares: várias bicicletas no mesmo Alfa/IC podem não estar disponíveis.'
        ] },
        { kind: 'warning', text: 'O erro principal é comprar um bilhete Lisboa–Porto no Intercidades/Alfa Pendular e aparecer com uma bicicleta normal sem bike slot. O revisor não é obrigado a aceitar a bicicleta se o lugar não estiver reservado ou se o comboio não estiver equipado.' }
      ]
    },
    {
      id: 'metro-and-city-rules',
      title: 'Metro, autocarros e prática urbana',
      content: [
        { kind: 'paragraph', text: 'No metro de Lisboa e do Porto, as bicicletas são permitidas se forem respeitadas as regras do operador: não em hora de ponta, se a carruagem estiver sobrelotada; não bloquear portas; utilizar elevadores sempre que possível. Verifique os limites concretos por carruagem e horário junto do Metropolitano de Lisboa e do Metro do Porto: podem ser actualizados sem alteração dos bilhetes.' },
        { kind: 'checklist', items: [
          'No metro, entre na extremidade da carruagem e segure a bicicleta com a mão durante toda a viagem.',
          'Não ocupe lugares assinalados para cadeiras de rodas, carrinhos de bebé e passageiros prioritários.',
          'É melhor não usar a escada rolante com uma bicicleta normal: use o elevador ou as escadas.',
          'Nos autocarros urbanos Carris/STCP, regra geral, não aceitam uma bicicleta normal; uma dobrável apenas se estiver dobrada e não incomodar como bagagem.',
          'Nos eléctricos, elevadores e funiculares de Lisboa, uma bicicleta normal é praticamente inadequada para transporte.',
          'Para viagens nocturnas, use luz dianteira branca e traseira vermelha: é uma questão de segurança, não apenas de multas.',
          'O capacete para adultos na cidade não é universalmente obrigatório, mas para e-bike e percursos rápidos nas calçadas de Lisboa é muito recomendável.'
        ] },
        { kind: 'paragraph', text: 'Combinação prática para expats: GIRA/bicicleta própria até à estação de metro ou CP, comboio sem suplemento, depois um curto troço de bicicleta. Isto é muitas vezes mais rápido do que esperar pelo autocarro no último quilómetro.' }
      ]
    },
    {
      id: 'theft-parking',
      title: 'Estacionamento e furtos: o que realmente importa',
      content: [
        { kind: 'paragraph', text: 'Os furtos de bicicletas em Lisboa, Porto, Aveiro e cidades universitárias são um problema comum. Um cadeado de cabo barato não é protecção, é um convite.' },
        { kind: 'checklist', items: [
          'Compre um U-lock ou um cadeado dobrável de nível médio/alto, não um cabo fino.',
          'Prenda o quadro e pelo menos uma roda a um suporte fixo.',
          'Não prenda a bicicleta a sinais de trânsito, árvores e vedações privadas se for proibido ou se dificultar a passagem.',
          'Não deixe luzes removíveis, alforges, suporte de telefone e bateria de e-bike na rua.',
          'Fotografe o número de série do quadro e o comprovativo de compra.',
          'Para uma e-bike cara, verifique a cobertura no seguro multirriscos ou um seguro de furto separado.',
          'No condomínio, confirme as regras de armazenamento: uma bicicleta no corredor pode violar o regulamento do condomínio e as passagens de incêndio.'
        ] },
        { kind: 'warning', text: 'Se a bicicleta for furtada, apresente queixa na PSP/GNR com o número de série e fotografias. Sem número, as hipóteses de encontrar a bicicleta são mínimas, e a seguradora pode recusar.' }
      ]
    }
  ],
  costs: [
    { label: 'GIRA Lisboa', amountEURMin: 2, amountEURMax: 25, note: 'Referência para passes diários/mensais/anuais típicos; verifique o preço exacto e as multas na aplicação GIRA antes do pagamento.' },
    { label: 'BUGA Aveiro', amountEUR: 0, note: 'Serviço municipal historicamente gratuito; o registo, a caução ou o regime de levantamento dependem das regras actuais da Câmara Municipal de Aveiro.' },
    { label: 'Transporte de bicicleta na CP', amountEUR: 0, note: 'Normalmente gratuito, mas no Alfa Pendular/Intercidades é necessário um comboio com bike places e reserva prévia.' },
    { label: 'Bom U-lock', amountEURMin: 35, amountEURMax: 90, note: 'Preço realista na Decathlon/lojas de bicicletas; um cabo barato não protege contra furto.' }
  ],
  sources: [
    { title: 'GIRA — Bicicletas de Lisboa: site oficial do serviço', url: 'https://www.gira-bicicletasdelisboa.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'CP — regras para transporte de bicicletas nos comboios', url: 'https://www.cp.pt/passageiros/pt/comprar-bilhetes/bilhetes/bicicletas', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'U-Bike Portugal — programa de mobilidade académica em bicicleta', url: 'https://www.u-bike.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Câmara Municipal de Aveiro — informação municipal BUGA', url: 'https://www.cm-aveiro.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
