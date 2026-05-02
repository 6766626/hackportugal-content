export default {
  editorialVoice: 'hackportugal',
  id: 'rede-saude-mental-publica',
  categoryId: 'healthcare',
  title: 'Saúde mental no SNS: médico de família, SPMS, Linha SOS e urgência psiquiátrica',
  tldr: 'Em Portugal, a saúde mental no SNS começa normalmente pelo médico de família no Centro de Saúde: avalia a situação, prescreve tratamento e encaminha para psicologia/psiquiatria no hospital ou na ULS. Urgente: 112 em caso de risco de suicídio, psicose, agressão, sobredosagem; SNS 24 — 808 24 24 24 para triagem e apoio psicológico. Em Lisboa, é frequente o encaminhamento para o Hospital Júlio de Matos; no Porto, para o Hospital Magalhães Lemos. A Linha SOS Voz Amiga é uma linha de apoio voluntária, não substitui a urgência.',
  tags: ['sns', 'saúde mental', 'urgência', 'sos'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'normal-route',
      title: 'Percurso normal através do SNS 🧭',
      content: [
        { kind: 'paragraph', text: 'Se não houver ameaça imediata à vida, comece pelo Centro de Saúde da sua área de residência. No SNS, a porta de entrada é o médico de família ou a consulta aberta/do dia, se ainda não tiver médico de família.' },
        { kind: 'checklist', items: [
          'Marque no Centro de Saúde: presencialmente, por telefone, através da área pessoal SNS 24 ou da aplicação SNS 24, se disponível.',
          'Diga directamente: ansiedade, depressão, insónia, ataques de pânico, luto, burnout, pensamentos suicidas — não descreva apenas “cansaço”.',
          'Peça avaliação de risco e encaminhamento: psicologia, psiquiatria, consulta de saúde mental, hospital de dia ou urgência, se a situação for grave.',
          'Leve uma lista de medicamentos, diagnósticos, relatórios de alta, resultados de análises e contactos de médico privado, se já esteve em tratamento.',
          'Se toma antidepressivos, benzodiazepinas, antipsicóticos ou estabilizadores do humor — não pare abruptamente sem médico.',
          'Se o seu português for fraco, leve um tradutor/amigo: uma consulta de psiquiatria exige formulações precisas.'
        ] },
        { kind: 'paragraph', text: 'Em 2026, o SNS funciona através de ULS locais. Isto significa que o Centro de Saúde e o hospital da mesma zona estão ligados: o encaminhamento vai normalmente para a “sua” rede hospitalar, e não para qualquer clínica à escolha.' }
      ]
    },
    {
      id: 'sns24-spms',
      title: 'SNS 24 e SPMS: apoio à distância 📱',
      content: [
        { kind: 'paragraph', text: 'O SNS 24 é a linha nacional e a porta de entrada digital no SNS. O número 808 24 24 24 funciona 24/7. Para a saúde mental, não é um “chat com psicoterapeuta durante anos”, mas sim triagem, apoio psicológico breve e orientação: para médico, urgência ou emergência.' },
        { kind: 'paragraph', text: 'A SPMS — Serviços Partilhados do Ministério da Saúde — suporta a infraestrutura digital do SNS: SNS 24, soluções de telemedicina, referenciações electrónicas e acesso à área pessoal. Na prática, o paciente vê isto como triagem telefónica, videochamadas, receitas electrónicas e marcações.' },
        { kind: 'checklist', items: [
          'Ligue para o SNS 24 em caso de ataques de pânico, ansiedade intensa, insónia, agravamento da depressão ou efeitos secundários de medicamentos.',
          'Ao ligar, tenha à mão o número de utente, NIF, data de nascimento, morada e lista de medicamentos.',
          'Se o operador considerar a situação urgente, pode encaminhar para a urgência ou accionar o INEM/112.',
          'Se foi encaminhado através do SNS 24, guarde o SMS/referência: é importante para o percurso e, por vezes, para as taxas moderadoras.',
          'Para cuidados programados, o SNS 24 normalmente não substitui o médico de família: depois da chamada, continua a ser necessária marcação no Centro de Saúde.'
        ] },
        { kind: 'warning', text: '808 24 24 24 não é o número para ameaça imediata à vida. Se a pessoa puder causar dano a si própria ou a outros, houver confusão mental, psicose, sobredosagem, intoxicação grave ou tentativa de suicídio — ligue 112.' }
      ]
    },
    {
      id: 'sos-lines',
      title: 'Linha SOS Voz Amiga e outras linhas de apoio ☎️',
      content: [
        { kind: 'paragraph', text: 'A Linha SOS Voz Amiga é uma linha portuguesa voluntária de apoio emocional. É usada quando é preciso falar com uma pessoa real em situações de solidão, ansiedade ou crise, mas sem perigo médico imediato.' },
        { kind: 'checklist', items: [
          'Adequada para: solidão, stress agudo, choro, pensamentos ansiosos, conflito, colapso emocional.',
          'Não é adequada como substituto do 112, da urgência psiquiátrica, de um médico ou de uma receita de medicamentos.',
          'A conversa é confidencial, mas não é uma consulta médica nem psicoterapia.',
          'Confirme os números e horários no site da Linha SOS Voz Amiga: o horário pode mudar.',
          'As chamadas para números fixos/móveis são normalmente cobradas de acordo com o seu operador; a “gratuitidade” depende do pacote de comunicações, não do SNS.',
          'Se o seu português for fraco, é melhor escrever previamente uma frase curta: “Estou em crise, tenho pensamentos suicidas / ataques de pânico / preciso de ajuda”.'
        ] },
        { kind: 'paragraph', text: 'Para a prática de expat: mantenha três contactos no telefone — 112, SNS 24 808 24 24 24 e Linha SOS Voz Amiga. O primeiro é perigo, o segundo é triagem médica, o terceiro é apoio emocional.' }
      ]
    },
    {
      id: 'psychiatric-emergency',
      title: 'Quando ir à urgência psiquiátrica 🚑',
      content: [
        { kind: 'paragraph', text: 'A urgência psiquiátrica é a urgência hospitalar de psiquiatria. Não se vai lá “só para conseguir chegar mais depressa a um psicólogo”; recorre-se quando há um risco que não pode esperar por uma consulta no Centro de Saúde.' },
        { kind: 'checklist', items: [
          'Pensamentos suicidas com plano, preparação ou acesso a meios.',
          'Tentativa de suicídio, automutilação, sobredosagem de álcool/medicamentos/drogas.',
          'Alucinações, delírios, confusão grave, mania, comportamento subitamente inadequado.',
          'Agressividade, ameaça a terceiros, incapacidade de controlar impulsos.',
          'Pânico intenso com sensação de perda de controlo, especialmente pela primeira vez.',
          'Psicose pós-parto, depressão grave após o parto, pensamentos de fazer mal ao bebé ou a si própria.',
          'Síndrome de abstinência de álcool/benzodiazepinas, convulsões, delírio.',
          'Agravamento súbito durante medicação psiquiátrica: lentificação marcada, febre, rigidez muscular, pensamentos suicidas.'
        ] },
        { kind: 'paragraph', text: 'Em Lisboa, um ponto conhecido de urgência psiquiátrica é o Hospital Júlio de Matos. No Porto, o Hospital Magalhães Lemos. Mas em 2026 o encaminhamento depende da ULS, da morada e da escala de serviço: é mais seguro ligar primeiro para o 112 ou para o SNS 24, se a situação o permitir.' },
        { kind: 'warning', text: 'Não transporte sozinho de carro uma pessoa em crise se houver risco de salto, agressão, perda de consciência ou sobredosagem. Ligue 112: o INEM e a polícia podem assegurar transporte seguro.' }
      ]
    },
    {
      id: 'documents-costs',
      title: 'Documentos, idioma e custos 💶',
      content: [
        { kind: 'paragraph', text: 'Para assistência de emergência, os documentos não devem ser uma barreira. Mas, para um encaminhamento normal no SNS, é melhor ter número de utente, NIF e comprovativo de morada. Se ainda não tiver utente, procure ajuda na mesma: a urgência e o 112 funcionam por necessidade médica.' },
        { kind: 'checklist', items: [
          'Leve autorização de residência/passaporte, número de utente, NIF, lista de medicamentos e dosagens.',
          'Mostre diagnósticos antigos e relatórios de alta: Portugal nem sempre vê o histórico de outro país.',
          'Anote alergias, consumo de álcool/substâncias, doenças crónicas.',
          'Se precisar de baixa, fale sobre baixa médica com o médico de família ou com o médico do hospital.',
          'Para receitas no SNS é necessário um médico; psicólogos não prescrevem medicamentos.',
          'Se lhe deram alta da urgência, peça um relatório escrito e um plano: onde marcar consulta, que medicamentos tomar, quando será a reavaliação.',
          'Se não compreender o médico, peça “pode escrever no relatório?” — um plano escrito reduz erros.'
        ] },
        { kind: 'paragraph', text: 'As taxas moderadoras no SNS foram maioritariamente abolidas, mas pode ser aplicada uma taxa por urgência sem referenciação do SNS 24/INEM/Centro de Saúde e sem internamento posterior. Se houver risco de vida — não adie por causa do dinheiro.' }
      ]
    }
  ],
  costs: [
    { label: 'Chamada SNS 24 — 808 24 24 24', amountEURMin: 0, amountEURMax: 0.16, note: 'O custo depende do operador e do tarifário; o serviço médico do SNS não é pago separadamente.' },
    { label: 'Urgência básica sem referenciação e sem internamento', amountEUR: 14, note: 'A taxa moderadora pode aplicar-se se não houver referenciação do SNS 24/INEM/Centro de Saúde e não houver internamento.' },
    { label: 'Urgência médico-cirúrgica sem referenciação e sem internamento', amountEUR: 16, note: 'A categoria efectiva depende do hospital e do percurso.' },
    { label: 'Urgência polivalente sem referenciação e sem internamento', amountEUR: 18, note: 'Com referenciação através do SNS 24/112 ou em caso de internamento, normalmente não é cobrada.' }
  ],
  sources: [
    { title: 'SNS 24 — contactos, triagem e aconselhamento psicológico', url: 'https://www.sns24.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'DGS — Programa Nacional para a Saúde Mental', url: 'https://www.dgs.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'SPMS — serviços digitais do SNS e SNS 24', url: 'https://www.spms.min-saude.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ERS — taxas moderadoras no SNS', url: 'https://www.ers.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
