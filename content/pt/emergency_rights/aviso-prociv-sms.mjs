export default {
  editorialVoice: 'hackportugal',
  id: 'aviso-prociv-sms',
  categoryId: 'emergency_rights',
  title: 'AvisoPROCIV: alertas SMS da ANEPC em caso de incêndios e calor',
  tldr: 'AvisoPROCIV são SMS gratuitos da ANEPC/Proteção Civil em caso de ameaça real: risco extremo de incêndio, incêndio rural nas proximidades, vaga de calor, inundações, tempestade. Não é necessária subscrição: a mensagem é enviada através dos operadores móveis pelas antenas na zona de risco e, normalmente, também chega a cartões SIM estrangeiros em roaming. O SMS indica a zona, o risco e as ações a tomar. Em caso de incêndio, prepare a evacuação e ligue 112; em caso de calor — água, sombra, SNS 24: 808 24 24 24.',
  tags: ['prociv', 'sms', 'incêndios', 'calor'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que é o AvisoPROCIV',
      content: [
        { kind: 'paragraph', text: 'AvisoPROCIV é o canal oficial de avisos da Autoridade Nacional de Emergência e Proteção Civil (ANEPC). Não é uma campanha de marketing nem uma aplicação: quando existe uma ameaça, a ANEPC envia um SMS curto através dos operadores móveis às pessoas que se encontram na zona geográfica afetada.' },
        { kind: 'paragraph', text: 'Temas típicos: risco de incêndio rural, incêndio ativo perto de uma localidade, vaga de calor, chuva forte, vento, cheias, agitação marítima, necessidade de confinamento ou evacuação. A mensagem começa normalmente por AVISO PROCIV / AvisoPROCIV e contém uma instrução curta em português.' },
        { kind: 'checklist', items: [
          'Não é necessário registar-se: a ANEPC não pede NIF, NISS, e-mail ou morada.',
          'Não é necessário pagar: o SMS é gratuito para o destinatário.',
          'A mensagem chega por geolocalização da rede móvel, não pela morada de residência nem pela morada nas Finanças.',
          'Se você for turista ou tiver mudado recentemente para Portugal, mas o telefone estiver ligado a uma rede portuguesa, pode receber o aviso.',
          'Se o telefone estiver desligado, em modo avião ou sem rede, o aviso pode não chegar a tempo.',
          'Se tiver um cartão SIM estrangeiro em roaming, a entrega é normalmente possível através do operador local, mas não deve contar com isso como única fonte de informação.'
        ] }
      ]
    },
    {
      id: 'how-to-read',
      title: 'Como ler o SMS: níveis e significado',
      content: [
        { kind: 'paragraph', text: 'Em Portugal, nos avisos públicos, aparecem frequentemente duas linguagens de risco diferentes. O IPMA usa avisos meteorológicos amarelo / laranja / vermelho. Para incêndios rurais, aplica-se o perigo de incêndio rural: reduzido, moderado, elevado, muito elevado, máximo. Nas notícias e nos SMS do dia a dia, também verá formulações como risco elevado, muito elevado ou extremo.' },
        { kind: 'checklist', items: [
          'Amarelo — esteja atento: o tempo pode perturbar planos, mas geralmente sem restrições generalizadas.',
          'Laranja — situação perigosa: evite deslocações desnecessárias, acompanhe a PROCIV, a Câmara Municipal e o IPMA.',
          'Vermelho — perigo excecional: podem existir restrições à circulação, evacuações, encerramento de zonas florestais, cortes de eletricidade e falhas de comunicações.',
          'Risco elevado de incêndio — não use fogo ao ar livre, verifique o percurso e mantenha o telefone carregado.',
          'Risco muito elevado / máximo / extremo — assuma que uma faísca pode transformar-se num incêndio; cancele caminhadas, churrascos e trabalhos agrícolas que produzam faíscas.',
          'Vaga de calor — vários dias de calor anormal; é especialmente perigoso para crianças, idosos, grávidas e pessoas com doenças cardiovasculares e respiratórias.',
          'Evacuar / evacuação — saia pelo percurso indicado, não volte para ir buscar objetos.',
          'Confinar-se — permaneça dentro do edifício, feche janelas/portas, desligue a ventilação se houver fumo no exterior.'
        ] },
        { kind: 'warning', text: 'Não espere por uma segunda mensagem. AvisoPROCIV é um aviso curto, não um chat de apoio. Se vir fumo, fogo, pessoas em perigo ou golpe de calor — ligue 112.' }
      ]
    },
    {
      id: 'fire-actions',
      title: 'Em caso de risco extremo de incêndio ou incêndio nas proximidades 🔥',
      content: [
        { kind: 'paragraph', text: 'No verão e em períodos secos, os municípios podem encerrar zonas florestais, miradouros, trilhos e proibir trabalhos que produzam faíscas. Mesmo que não conheça as regras locais, a lógica básica é simples: não criar fogo, não entrar na floresta sem necessidade e manter uma rota de saída.' },
        { kind: 'checklist', items: [
          'Não faça fogueiras, não faça churrasco na natureza, não use foguetes nem pirotecnia.',
          'Não atire beatas pela janela do carro nem para o chão; com calor, isso é uma fonte real de incêndio.',
          'Não use rebarbadora, soldadura, roçadora com disco metálico ou outras ferramentas que produzam faíscas em vegetação seca.',
          'Se vive numa casa junto à floresta: afaste erva seca, folhas, lenha e botijas de gás das paredes e do terraço.',
          'Mantenha documentos, medicamentos, água, carregador, power bank, chaves e transportadora para animais no mesmo local.',
          'Estacione o carro de frente para a saída, com as janelas fechadas e o depósito com combustível suficiente.',
          'Se o fumo se aproximar: feche janelas, portas e estores; retire objetos inflamáveis da varanda.',
          'Se as autoridades disserem evacuar — saia imediatamente. Não filme o incêndio a partir da estrada e não bloqueie os Bombeiros.',
          'Se ficar dentro do carro no meio do fumo: ligue os faróis, feche as janelas, coloque a ventilação em recirculação, avance devagar para uma zona aberta e não pare debaixo de árvores.',
          'Comunique um incêndio pelo 112: local, pontos de referência, direção do fumo/fogo, se há casas ou pessoas por perto.'
        ] },
        { kind: 'warning', text: 'Em dias de perigo máximo / risco extremo, muitos incêndios propagam-se mais depressa do que uma pessoa consegue avaliar a situação. Se estiver numa zona rural e tiver dúvidas entre sair ou ficar, opte por sair cedo.' }
      ]
    },
    {
      id: 'heat-actions',
      title: 'Em caso de vaga de calor e avisos de calor 🌡️',
      content: [
        { kind: 'paragraph', text: 'O SNS e a Direção-Geral da Saúde, quando a temperatura sobe, recomendam reduzir a carga térmica, beber água antes de sentir sede e proteger pessoas vulneráveis. Em Portugal, o calor é muitas vezes mais perigoso ao fim da tarde e à noite: apartamentos sem ar condicionado não arrefecem a tempo.' },
        { kind: 'checklist', items: [
          'Beba água regularmente; não a substitua por álcool, bebidas açucaradas ou grandes quantidades de café.',
          'Evite o sol e o esforço físico nas horas mais quentes, especialmente aproximadamente entre as 11:00 e as 17:00.',
          'Use roupa leve e larga, chapéu/chapéu de abas e óculos de sol.',
          'Use protetor solar SPF 30+ e reaplique, especialmente junto ao mar e à piscina.',
          'Mantenha a casa fresca: feche estores e cortinas durante o dia, areje à noite e de manhã.',
          'Não deixe crianças, idosos nem animais dentro do carro, mesmo por poucos minutos.',
          'Verifique vizinhos e familiares mais velhos, especialmente se vivem sozinhos.',
          'Esteja atento aos sintomas: fraqueza intensa, confusão, temperatura corporal elevada, pele quente e seca, tonturas, vómitos.',
          'Em caso de dúvidas de saúde, ligue SNS 24: 808 24 24 24; em caso de perda de consciência, convulsões ou falta de ar grave — 112.'
        ] },
        { kind: 'warning', text: 'O golpe de calor é uma emergência. Leve a pessoa para a sombra/frescura, arrefeça-a com água e panos molhados, não dê álcool e ligue 112.' }
      ]
    },
    {
      id: 'setup-and-backup',
      title: 'Como não perder um aviso',
      content: [
        { kind: 'paragraph', text: 'O AvisoPROCIV não exige instalação, mas o telefone deve estar pronto para receber SMS. Para um expatriado, isto é especialmente importante em viagens por zonas do interior, onde o risco de incêndio é maior e a infraestrutura em inglês é mais limitada.' },
        { kind: 'checklist', items: [
          'Mantenha os SMS e a rede móvel ativados; não bloqueie totalmente remetentes desconhecidos.',
          'Mantenha o telefone carregado no verão e em viagens; um power bank é um seguro barato.',
          'Se vive numa zona florestal, subscreva adicionalmente avisos da Câmara Municipal, Junta de Freguesia, IPMA e ANEPC nas redes sociais.',
          'Guarde os números: 112 — emergência, SNS 24 — 808 24 24 24, GNR/PSP local — para situações não urgentes.',
          'Consulte o mapa e os avisos em prociv.gov.pt e ipma.pt antes de caminhadas, viagens ao interior e em dias de calor.',
          'Se o SMS em português não for claro, traduza-o de imediato, mas cumpra primeiro as instruções óbvias: evacuar, evitar deslocações, confinar-se, ligar 112.',
          'Não reencaminhe capturas de ecrã não verificadas para chats como facto; confirme com a ANEPC, o Município ou o IPMA.'
        ] },
        { kind: 'warning', text: 'Os burlões podem imitar mensagens do Estado. Um aviso PROCIV verdadeiro não pede pagamento, dados bancários, código MB WAY, palavra-passe do NIF nem entrada através de uma ligação para as Finanças.' }
      ]
    }
  ],
  sources: [
    {
      title: 'ANEPC: aviso à população e sistema de avisos AvisoPROCIV',
      url: 'https://prociv.gov.pt/pt/prevencao-e-preparacao/monitorizacao-alerta-e-aviso/aviso/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'SNS: recomendações em caso de aumento da temperatura e calor',
      url: 'https://www.sns.min-saude.pt/comunicado-conjunto-aumento-da-temperatura-recomendacoes-contra-o-calor/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ANEPC: portal Proteção Civil para avisos e informação atualizada',
      url: 'https://prociv.gov.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'SNS 24: linha de contacto 808 24 24 24',
      url: 'https://www.sns24.gov.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
