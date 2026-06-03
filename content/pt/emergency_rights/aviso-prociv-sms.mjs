export default {
  editorialVoice: 'hackportugal',
  id: 'aviso-prociv-sms',
  categoryId: 'emergency_rights',
  title: 'AvisoPROCIV: alertas SMS da ANEPC em caso de incêndios e calor',
  tldr: 'AvisoPROCIV são SMS gratuitos da ANEPC/Proteção Civil em caso de ameaça real: risco extremo de incêndio, incêndio rural nas proximidades, vaga de calor, inundações, tempestade. Não é necessária subscrição: a mensagem é enviada através dos operadores móveis pelas antenas na zona de risco e, normalmente, também chega a cartões SIM estrangeiros em roaming. O SMS indica a zona, o risco e as acções. Em caso de incêndio, prepare a evacuação e ligue 112; em caso de calor — água, sombra, SNS 24: 808 24 24 24.',
  tags: ['prociv', 'sms', 'incêndios', 'calor'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que é o AvisoPROCIV',
      content: [
        { kind: 'paragraph', text: 'O AvisoPROCIV é o canal oficial de avisos da Autoridade Nacional de Emergência e Proteção Civil (ANEPC). Não é uma comunicação de marketing nem uma aplicação: em caso de ameaça, a ANEPC envia um SMS curto através dos operadores móveis às pessoas que se encontram na zona geográfica afectada.' },
        { kind: 'paragraph', text: 'Temas típicos: risco de incêndio rural, incêndio activo perto de uma povoação, vaga de calor, chuva forte, vento, cheias, agitação marítima, necessidade de confinamento ou evacuação. A mensagem começa normalmente por AVISO PROCIV / AvisoPROCIV e contém uma instrução curta em português.' },
        { kind: 'checklist', items: [
          'Não é necessário registar-se: a ANEPC não pede NIF, NISS, e-mail ou morada.',
          'Não é necessário pagar: o SMS é gratuito para o destinatário.',
          'A mensagem chega por geolocalização da rede móvel, não pela morada de residência nem pela morada nas Finanças.',
          'Se você for turista ou se tiver mudado recentemente para Portugal, mas o telefone estiver ligado à rede portuguesa, pode receber um aviso.',
          'Se o telefone estiver desligado, em modo de avião ou sem rede, o aviso pode não chegar a tempo.',
          'Se tiver um cartão SIM estrangeiro em roaming, a entrega é normalmente possível através do operador local, mas não a considere a sua única fonte de informação.'
        ] }
      ]
    },
    {
      id: 'how-to-read',
      title: 'Como ler o SMS: níveis e significado',
      content: [
        { kind: 'paragraph', text: 'Em Portugal, os avisos públicos usam frequentemente duas linguagens de risco diferentes. O IPMA utiliza avisos meteorológicos amarelo / laranja / vermelho. Para incêndios rurais, é utilizado o perigo de incêndio rural: reduzido, moderado, elevado, muito elevado, máximo. Nas notícias do dia a dia e nos SMS, também verá formulações como risco elevado, muito elevado ou extremo.' },
        { kind: 'checklist', items: [
          'Amarelo — esteja atento: o tempo pode perturbar planos, mas normalmente sem restrições generalizadas.',
          'Laranja — situação perigosa: evite deslocações desnecessárias, acompanhe a PROCIV, a Câmara Municipal e o IPMA.',
          'Vermelho — perigo excepcional: podem ocorrer restrições à circulação, evacuações, encerramento de zonas florestais, cortes de electricidade e falhas de comunicações.',
          'Risco elevado de incêndio — não use fogo ao ar livre, verifique o percurso e mantenha o telefone carregado.',
          'Risco muito elevado / máximo / extremo — assuma que uma faísca pode transformar-se num incêndio; cancele caminhadas, churrascos e trabalhos agrícolas que produzam faíscas.',
          'Vaga de calor — vários dias de calor anómalo; é especialmente perigosa para crianças, idosos, grávidas e pessoas com doenças cardiovasculares e respiratórias.',
          'Evacuar / evacuação — saia pelo percurso indicado, não volte para ir buscar objectos.',
          'Confinar-se — permaneça dentro do edifício, feche janelas/portas, desligue a ventilação se houver fumo no exterior.'
        ] },
        { kind: 'warning', text: 'Não espere por uma segunda mensagem. O AvisoPROCIV é um aviso curto, não um chat de apoio. Se vir fumo, fogo, pessoas em perigo ou um golpe de calor — ligue 112.' }
      ]
    },
    {
      id: 'fire-actions',
      title: 'Em caso de risco extremo de incêndio ou incêndio nas proximidades 🔥',
      content: [
        { kind: 'paragraph', text: 'No Verão e em períodos secos, os municípios podem encerrar zonas florestais, miradouros e trilhos, e proibir trabalhos que gerem faíscas. Mesmo que não conheça as regras locais, a lógica básica é simples: não criar fogo, não entrar na floresta sem necessidade e manter uma rota de saída.' },
        { kind: 'checklist', items: [
          'Não faça fogueiras, não faça churrasco na natureza, não use foguetes ou pirotecnia.',
          'Não deite beatas pela janela do carro nem para o chão; com calor, são uma fonte real de incêndio.',
          'Não use rebarbadora, soldadura, motorroçadora com disco metálico ou outras ferramentas que produzam faíscas em vegetação seca.',
          'Se vive numa casa junto à floresta: afaste erva seca, folhas, lenha e botijas de gás das paredes e do terraço.',
          'Mantenha documentos, medicamentos, água, carregador, power bank, chaves e transportadora para animais no mesmo local.',
          'Estacione o carro virado para a saída, com os vidros fechados e o depósito não vazio.',
          'Se o fumo se aproximar: feche janelas, portas e estores; retire objectos combustíveis da varanda.',
          'Se as autoridades disserem evacuar — saia imediatamente. Não filme o incêndio a partir da estrada e não bloqueie os Bombeiros.',
          'Se ficar dentro do carro no fumo: ligue os faróis, feche os vidros, coloque a ventilação em recirculação, avance devagar para uma zona aberta e não pare debaixo de árvores.',
          'Comunique incêndios através do 112: local, pontos de referência, direcção do fumo/fogo, se há casas ou pessoas por perto.'
        ] },
        { kind: 'warning', text: 'Em dias de perigo máximo / risco extremo, muitos incêndios propagam-se mais depressa do que uma pessoa consegue avaliar a situação. Se estiver numa zona rural e tiver dúvidas entre sair ou ficar, opte por sair cedo.' }
      ]
    },
    {
      id: 'heat-actions',
      title: 'Em caso de vaga de calor e avisos de calor 🌡️',
      content: [
        { kind: 'paragraph', text: 'O SNS e a Direção-Geral da Saúde recomendam, quando a temperatura sobe, reduzir a carga térmica, beber água antes de sentir sede e proteger as pessoas vulneráveis. Em Portugal, o calor é muitas vezes mais perigoso ao fim da tarde e à noite: as casas sem ar condicionado não têm tempo para arrefecer.' },
        { kind: 'checklist', items: [
          'Beba água regularmente; não a substitua por álcool, bebidas açucaradas ou grandes quantidades de café.',
          'Evite o sol e o esforço físico nas horas de maior calor, especialmente aproximadamente das 11:00 às 17:00.',
          'Use roupa leve e larga, chapéu/panamá e óculos de sol.',
          'Use protector solar SPF 30+ e renove a aplicação, especialmente junto ao mar e à piscina.',
          'Mantenha a casa fresca: feche estores e cortinas durante o dia, ventile à noite e de manhã.',
          'Não deixe crianças, idosos ou animais dentro do carro, nem por poucos minutos.',
          'Verifique como estão vizinhos e familiares mais velhos, especialmente se vivem sozinhos.',
          'Esteja atento aos sintomas: fraqueza intensa, confusão, temperatura corporal elevada, pele seca e quente, tonturas, vómitos.',
          'Em caso de dúvidas de saúde, ligue SNS 24: 808 24 24 24; em caso de perda de consciência, convulsões ou falta de ar grave — 112.'
        ] },
        { kind: 'warning', text: 'O golpe de calor é uma emergência. Leve a pessoa para a sombra/frescura, arrefeça-a com água e panos molhados, não dê álcool e ligue 112.' }
      ]
    },
    {
      id: 'setup-and-backup',
      title: 'Como não perder um aviso',
      content: [
        { kind: 'paragraph', text: 'O AvisoPROCIV não exige instalação, mas o telefone deve estar pronto para receber SMS. Para um expatriado, isto é especialmente importante em viagens pelo interior, onde o risco de incêndio é maior e a infraestrutura em inglês é mais limitada.' },
        { kind: 'checklist', items: [
          'Mantenha os SMS e a rede móvel activos; não bloqueie totalmente remetentes desconhecidos.',
          'Mantenha o telefone carregado no Verão e em viagem; um power bank é um seguro barato.',
          'Se vive numa zona florestal, subscreva também notificações da Câmara Municipal, Junta de Freguesia, IPMA e ANEPC nas redes sociais.',
          'Guarde os números: 112 — emergência, SNS 24 — 808 24 24 24, GNR/PSP local — para situações não urgentes.',
          'Verifique o mapa e os avisos em prociv.gov.pt e ipma.pt antes de caminhadas, viagens ao interior e em dias de calor.',
          'Se não compreender o SMS em português, traduza-o de imediato, mas cumpra primeiro as ordens óbvias: evacuar, evitar deslocações, confinar-se, ligar 112.',
          'Não reencaminhe capturas de ecrã não verificadas para chats como factos; confirme com a ANEPC, o Município ou o IPMA.'
        ] },
        { kind: 'warning', text: 'Os burlões podem imitar mensagens do Estado. Um aviso PROCIV verdadeiro não pede pagamento, dados bancários, código MB WAY, palavra-passe do NIF nem início de sessão através de uma ligação para as Finanças.' }
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
      title: 'ANEPC: portal da Proteção Civil para avisos e informação actual',
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
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
