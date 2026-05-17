export default {
  editorialVoice: 'hackportugal',
  id: 'rede-saude-mental-publica',
  categoryId: 'healthcare',
  title: 'Saúde mental no SNS: médico de família, SPMS, Linha SOS e urgência psiquiátrica',
  tldr: 'Em Portugal, a saúde mental no SNS começa normalmente no médico de família no Centro de Saúde: avalia o estado clínico, prescreve tratamento e referencia para psicologia/psiquiatria no hospital ou na ULS. Urgente: 112 em caso de risco de suicídio, psicose, agressão, sobredosagem; SNS 24 — 808 24 24 24 para triagem e apoio psicológico. Em Lisboa, é frequente a referenciação para o Hospital Júlio de Matos; no Porto — Hospital Magalhães Lemos. A Linha SOS Voz Amiga é uma linha voluntária de apoio, não substitui a urgência.',
  tags: ['sns', 'saúde mental', 'urgência', 'sos'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'normal-route',
      title: 'Percurso normal através do SNS 🧭',
      content: [
        { kind: 'paragraph', text: 'Se não houver ameaça imediata à vida, comece pelo Centro de Saúde da sua área de residência. No SNS, o ponto de entrada é o médico de família ou a consulta aberta/do dia, se ainda não tiver médico de família.' },
        { kind: 'checklist', items: [
          'Marque consulta no Centro de Saúde: presencialmente, por telefone, através da área pessoal SNS 24 ou da aplicação SNS 24, se disponível.',
          'Diga diretamente: ansiedade, depressão, insónia, ataques de pânico, luto, burnout, pensamentos suicidas — não descreva apenas “cansaço”.',
          'Peça avaliação do risco e referenciação: psicologia, psiquiatria, consulta de saúde mental, hospital de dia ou urgência, se o estado for grave.',
          'Leve a lista de medicamentos, diagnósticos, notas de alta, resultados de análises e contactos de médico privado, se já fez tratamento.',
          'Se toma antidepressivos, benzodiazepinas, antipsicóticos ou estabilizadores do humor — não interrompa subitamente sem orientação médica.',
          'Se o seu português for fraco, leve um intérprete/amigo: uma consulta psiquiátrica exige formulações precisas.'
        ] },
        { kind: 'paragraph', text: 'Em 2026, o SNS funciona através de ULS locais. Isto significa que o Centro de Saúde e o hospital da mesma zona estão ligados: a referenciação segue normalmente para a “sua” rede hospitalar, e não para qualquer clínica à sua escolha.' }
      ]
    },
    {
      id: 'sns24-spms',
      title: 'SNS 24 e SPMS: ajuda à distância 📱',
      content: [
        { kind: 'paragraph', text: 'O SNS 24 é a linha nacional e a porta de entrada digital no SNS. O número 808 24 24 24 funciona 24/7. Para questões de saúde mental, não é um “chat com psicoterapeuta durante anos”, mas sim triagem, apoio psicológico breve e encaminhamento: para o médico, para a urgência ou para ajuda de emergência.' },
        { kind: 'paragraph', text: 'A SPMS — Serviços Partilhados do Ministério da Saúde — apoia a infraestrutura digital do SNS: SNS 24, soluções de telemedicina, referenciações eletrónicas e acesso à área pessoal. Na prática, o utente vê isto como triagem telefónica, videochamadas, receitas eletrónicas e marcações.' },
        { kind: 'checklist', items: [
          'Ligue para o SNS 24 em caso de ataques de pânico, ansiedade intensa, insónia, agravamento de depressão ou efeitos secundários de medicamentos.',
          'Ao telefonar, tenha à mão o número de utente, NIF, data de nascimento, morada e lista de medicamentos.',
          'Se o operador considerar a situação urgente, pode encaminhar para a urgência ou acionar o INEM/112.',
          'Se foi encaminhado através do SNS 24, guarde o SMS/referência: é importante para o percurso e, por vezes, para as taxas moderadoras.',
          'Para cuidados programados, o SNS 24 normalmente não substitui o médico de família: depois da chamada, continua a ser necessária uma marcação no Centro de Saúde.'
        ] },
        { kind: 'warning', text: '808 24 24 24 não é o número para uma ameaça imediata à vida. Se a pessoa puder causar dano a si própria ou a terceiros, houver confusão mental, psicose, sobredosagem, intoxicação grave ou tentativa de suicídio — ligue 112.' }
      ]
    },
    {
      id: 'sos-lines',
      title: 'Linha SOS Voz Amiga e outras linhas de apoio ☎️',
      content: [
        { kind: 'paragraph', text: 'A Linha SOS Voz Amiga é uma linha portuguesa voluntária de apoio emocional. É usada quando é necessário falar com uma pessoa real em situações de solidão, ansiedade ou crise, mas sem perigo médico imediato.' },
        { kind: 'checklist', items: [
          'Adequada: solidão, stress agudo, choro, pensamentos ansiosos, conflito, crise emocional.',
          'Não é adequada como substituto do 112, da urgência psiquiátrica, de um médico ou de uma receita médica.',
          'A conversa é confidencial, mas não é uma consulta médica nem psicoterapia.',
          'Confirme os números e horários no site da Linha SOS Voz Amiga: o horário pode mudar.',
          'As chamadas para números fixos/móveis são normalmente cobradas de acordo com o seu operador; a eventual “gratuitidade” depende do pacote de comunicações, não do SNS.',
          'Se o seu português for fraco, é melhor escrever previamente uma frase curta: “Estou em crise, tenho pensamentos suicidas / ataques de pânico / preciso de ajuda”.'
        ] },
        { kind: 'paragraph', text: 'Para a prática de expatriados: guarde três contactos no telemóvel — 112, SNS 24 808 24 24 24 e Linha SOS Voz Amiga. O primeiro é para perigo, o segundo para triagem médica, o terceiro para apoio emocional.' }
      ]
    },
    {
      id: 'psychiatric-emergency',
      title: 'Quando ir à urgência psiquiátrica 🚑',
      content: [
        { kind: 'paragraph', text: 'A urgência psiquiátrica é a emergência psiquiátrica hospitalar. Não se vai lá “apenas para conseguir consulta com psicólogo mais depressa”; recorre-se a ela quando existe um risco que não pode esperar por uma consulta no Centro de Saúde.' },
        { kind: 'checklist', items: [
          'Pensamentos suicidas com plano, preparação ou acesso a meios.',
          'Tentativa de suicídio, automutilação, sobredosagem de álcool/medicamentos/drogas.',
          'Alucinações, delírios, confusão grave, mania, comportamento súbito e desadequado.',
          'Agressão, ameaça a terceiros, incapacidade de controlar impulsos.',
          'Pânico grave com sensação de perda de controlo, sobretudo pela primeira vez.',
          'Psicose pós-parto, depressão grave após o parto, pensamentos de fazer mal ao bebé ou a si própria.',
          'Síndrome de abstinência de álcool/benzodiazepinas, convulsões, delírio.',
          'Agravamento súbito associado a medicação psiquiátrica: lentificação marcada, febre, rigidez muscular, pensamentos suicidas.'
        ] },
        { kind: 'paragraph', text: 'Em Lisboa, um ponto conhecido de urgência psiquiátrica é o Hospital Júlio de Matos. No Porto — Hospital Magalhães Lemos. Mas, em 2026, o encaminhamento depende da ULS, da morada e da escala de serviço: é mais seguro ligar primeiro para o 112 ou para o SNS 24, se o estado permitir.' },
        { kind: 'warning', text: 'Não transporte uma pessoa em crise de carro sozinho, se houver risco de salto, agressão, perda de consciência ou sobredosagem. Ligue 112: o INEM e a polícia podem garantir transporte seguro.' }
      ]
    },
    {
      id: 'documents-costs',
      title: 'Documentos, língua e custo 💶',
      content: [
        { kind: 'paragraph', text: 'Para ajuda de emergência, os documentos não devem ser uma barreira. Mas, para um encaminhamento normal no SNS, é melhor ter número de utente, NIF e comprovativo de morada. Se ainda não tiver utente, procure ajuda na mesma: a urgência e o 112 funcionam segundo a necessidade médica.' },
        { kind: 'checklist', items: [
          'Leve a autorização de residência/passaporte, número de utente, NIF, lista de medicamentos e dosagens.',
          'Mostre diagnósticos antigos e notas de alta: Portugal nem sempre consegue ver o histórico de outro país.',
          'Anote alergias, consumo de álcool/substâncias e doenças crónicas.',
          'Se precisar de baixa, discuta a baixa médica com o médico de família ou com o médico do hospital.',
          'Para receitas no SNS é necessário um médico; os psicólogos não prescrevem medicamentos.',
          'Se lhe derem alta da urgência, peça uma nota de alta escrita e um plano: onde marcar consulta, que medicamentos tomar, quando regressar.',
          'Se não compreender o médico, peça “pode escrever no relatório?” — um plano escrito reduz erros.'
        ] },
        { kind: 'paragraph', text: 'As taxas moderadoras no SNS foram, em geral, abolidas, mas pode ser aplicada uma taxa por urgência sem referenciação do SNS 24/INEM/Centro de Saúde e sem internamento posterior. Se houver risco de vida — não adie por causa do dinheiro.' }
      ]
    }
  ],
  costs: [
    { label: 'Chamada SNS 24 — 808 24 24 24', amountEURMin: 0, amountEURMax: 0.16, note: 'O custo depende do operador e do tarifário; o serviço médico do SNS não é pago separadamente.' },
    { label: 'Urgência básica sem referenciação e sem internamento', amountEUR: 14, note: 'A taxa moderadora pode aplicar-se se não houver referenciação do SNS 24/INEM/Centro de Saúde e não houver internamento.' },
    { label: 'Urgência médico-cirúrgica sem referenciação e sem internamento', amountEUR: 16, note: 'A categoria efetiva depende do hospital e do percurso.' },
    { label: 'Urgência polivalente sem referenciação e sem internamento', amountEUR: 18, note: 'Com referenciação através do SNS 24/112 ou em caso de internamento, normalmente não é cobrada.' }
  ],
  sources: [
    { title: 'SNS 24 — contactos, triagem e aconselhamento psicológico', url: 'https://www.sns24.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'DGS — Programa Nacional para a Saúde Mental', url: 'https://www.dgs.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'SPMS — serviços digitais do SNS e SNS 24', url: 'https://www.spms.min-saude.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ERS — taxas moderadoras no SNS', url: 'https://www.ers.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
