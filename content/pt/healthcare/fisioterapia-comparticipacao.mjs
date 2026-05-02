export default {
  editorialVoice: 'hackportugal',
  id: 'fisioterapia-comparticipacao',
  categoryId: 'healthcare',
  title: 'Fisioterapia com comparticipação SNS e seguros privados',
  tldr: 'Em Portugal, a fisioterapia pode ser feita através do SNS com encaminhamento do médico de família: após a eliminação da maioria das taxas moderadoras em 2022, nos procedimentos prescritos pelo SNS o utente normalmente paga 0 €, mas espera por vaga e vai a uma clínica convencionada. No privado é mais rápido: normalmente 25–40 € por sessão, um ciclo de 5–15 sessões = 125–600 €. Seguros como Médis, Multicare, AdvanceCare e outros muitas vezes dão copagamento ou reembolso, mas exigem prescrição médica.',
  tags: ['fisioterapia', 'sns', 'seguro', 'comparticipação'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'routes',
      title: '3 vias práticas: SNS, seguro, privado',
      content: [
        { kind: 'paragraph', text: 'A fisioterapia em Portugal normalmente enquadra-se em Medicina Física e de Reabilitação. Para uma pessoa migrante, a escolha prática é: esperar por encaminhamento através do SNS, usar um seguro privado ou pagar directamente.' },
        { kind: 'checklist', items: [
          'SNS: primeiro consulta com médico de família no Centro de Saúde; o médico emite uma prescrição/credencial para fisioterapia.',
          'SNS com comparticipação: os procedimentos são realizados num hospital SNS ou numa clínica privada convencionada com o SNS.',
          'Após o Decreto-Lei 37/2022, a maioria das taxas moderadoras no SNS foi eliminada; a fisioterapia prescrita pelo SNS normalmente custa ao utente 0 €.',
          'Seguro privado: marcação mais rápida, mas as condições dependem da rede e do plano — copagamento, plafonds, reembolso.',
          'Totalmente privado: pode marcar sem espera, mas a clínica pode pedir prescrição médica, especialmente após lesões, cirurgias e em caso de dor crónica.',
          'Redes e clínicas populares: Fisiogaspar, Mais Saúde, Físio MAR; há também muitas clínicas de fisioterapia locais em cada concelho.'
        ] }
      ]
    },
    {
      id: 'sns-referral',
      title: 'Como obter fisioterapia através do SNS',
      content: [
        { kind: 'paragraph', text: 'O caminho normal é através do médico de família. Se ainda não tiver médico de família, peça uma consulta aberta / consulta do dia no seu Centro de Saúde ou ligue para o SNS 24: 808 24 24 24. Em caso de lesão aguda — urgência ou 112.' },
        { kind: 'substeps', items: [
          { id: 'book-consulta', title: '1. Marque consulta com um médico do SNS', content: [
            { kind: 'checklist', items: [
              'Leve o número de utente.',
              'Descreva o problema de forma concreta: dor, limitação de movimento, data da lesão, cirurgia, queda, sintomas neurológicos.',
              'Leve relatórios de alta, exames, relatório de uma clínica privada, se tiver.',
              'Peça prescrição para Medicina Física e de Reabilitação / fisioterapia, se o médico considerar indicado.'
            ] }
          ] },
          { id: 'find-clinic', title: '2. Encontre uma clínica convencionada', content: [
            { kind: 'paragraph', text: 'Com encaminhamento do SNS, pode ser encaminhado para uma unidade SNS ou para uma clínica privada com convenção. Nas grandes cidades, a fila de espera pode ser significativa; nos subúrbios e em cidades pequenas, por vezes é mais rápido.' }
          ] },
          { id: 'start-sessions', title: '3. Confirme o ciclo e o custo antes da primeira sessão', content: [
            { kind: 'checklist', items: [
              'Pergunte se a clínica aceita credencial SNS especificamente para fisioterapia/MFR.',
              'Confirme quantas sessões foram aprovadas.',
              'Verifique se é necessário pagar alguma taxa; na maioria dos encaminhamentos SNS após 2022, a taxa moderadora do utente = 0 €.',
              'Peça o calendário para todo o ciclo logo de início, para não prolongar o tratamento durante meses.'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'private-insurance',
      title: 'Se tiver seguro privado',
      content: [
        { kind: 'paragraph', text: 'Nos seguros em Portugal, a fisioterapia quase sempre segue as regras da rede: ou copagamento numa clínica parceira, ou reembolso após o pagamento. Nomes de redes: Médis, Multicare, AdvanceCare, Future Healthcare, RNA Medical e outras.' },
        { kind: 'checklist', items: [
          'Verifique na app da seguradora a secção Fisioterapia / Medicina Física e Reabilitação.',
          'Confirme se é necessária prescrição médica. Muitas vezes é necessária, mesmo que vá a uma clínica privada.',
          'Pergunte qual é o limite: número de sessões por ano, plafond em €, percentagem de reembolso.',
          'Na rede da seguradora, o copagamento é frequentemente mais vantajoso do que o reembolso fora da rede.',
          'Para reembolso, guarde a fatura-recibo com NIF, a prescrição médica e o relatório/declaração de presença, se a seguradora exigir.',
          'Se a fisioterapia estiver relacionada com acidente de trabalho, seguro automóvel ou desporto, confirme primeiro quem paga: o seguro de saúde normal pode recusar.'
        ] },
        { kind: 'warning', text: 'Não compre um pacote de 10–15 sessões privadas antes de verificar a cobertura do seguro. Alguns planos cobrem apenas a consulta médica de fisiatria, mas não as próprias sessões de fisioterapia, ou cobrem-nas apenas numa rede específica.' }
      ]
    },
    {
      id: 'private-prices',
      title: 'Quanto custa no privado em 2026',
      content: [
        { kind: 'paragraph', text: 'O mercado depende muito da cidade e da especialização. Em Lisboa, Cascais, Porto e Algarve os preços são mais altos; em cidades mais pequenas são mais baixos. A visita ao domicílio é mais cara, especialmente se for necessário acompanhamento de reabilitação após cirurgia ou AVC.' },
        { kind: 'checklist', items: [
          'Sessão normal de fisioterapia em clínica: cerca de 25–40 €.',
          'Ciclo de 5 sessões: cerca de 125–200 €.',
          'Ciclo de 10 sessões: cerca de 250–400 €.',
          'Ciclo de 15 sessões: cerca de 375–600 €.',
          'A avaliação inicial pode ser paga à parte ou estar incluída na primeira sessão.',
          'A fisioterapia ao domicílio costuma custar mais do que uma sessão normal; confirme o preço antecipadamente.',
          'Fisioterapia pós-operatória, neurológica, desportiva ou do pavimento pélvico pode custar acima do intervalo base.'
        ] }
      ]
    },
    {
      id: 'what-to-ask',
      title: 'O que perguntar à clínica antes de marcar',
      content: [
        { kind: 'paragraph', text: 'Uma boa clínica explica antecipadamente quem conduz o tratamento, quanto dura a sessão, se haverá trabalho individual ou formato de grupo, e que documentos são necessários para SNS/seguro.' },
        { kind: 'checklist', items: [
          'Tem convenção com SNS para Medicina Física e Reabilitação?',
          'Aceitam a minha seguradora: Médis, Multicare, AdvanceCare ou outra?',
          'Preciso de prescrição médica?',
          'Qual é o preço por sessão e por pacote?',
          'A avaliação inicial está incluída?',
          'Quanto dura cada sessão: 30, 45 ou 60 minutos?',
          'É tratamento individual ou em grupo?',
          'Emitem fatura com NIF e documentos para reembolso?',
          'Há fisioterapeuta com experiência no meu problema: coluna, joelho, ombro, pós-operatório, neurologia, pavimento pélvico?'
        ] },
        { kind: 'warning', text: 'Sinais de alerta: prometem “curar em 1 sessão”, não perguntam o diagnóstico nem a medicação, não emitem fatura, não explicam o plano de tratamento, impõem um pacote grande sem avaliação.' }
      ]
    }
  ],
  costs: [
    { label: 'Fisioterapia através do SNS com encaminhamento', amountEUR: 0, note: 'Normalmente 0 € de taxa moderadora após a eliminação da maioria das taxas dos utentes; é necessária prescrição SNS e vaga numa unidade/convencionada.' },
    { label: 'Sessão privada em clínica', amountEURMin: 25, amountEURMax: 40, note: 'Intervalo típico por uma sessão de fisioterapia básica em 2026; consultas especializadas e ao domicílio podem ser mais caras.' },
    { label: 'Ciclo de 10 sessões privadas', amountEURMin: 250, amountEURMax: 400, note: 'Volume frequente de tratamento após lesões, dor nas costas, no joelho ou no ombro; o seguro pode cobrir parte.' }
  ],
  sources: [
    { title: 'SNS 24 — portal de acesso aos serviços do SNS e contacto 808 24 24 24', url: 'https://www.sns24.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 37/2022 — eliminação da maioria das taxas moderadoras no SNS', url: 'https://dre.pt/dre/detalhe/decreto-lei/37-2022-183984849', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Entidade Reguladora da Saúde — direitos dos utentes dos serviços de saúde', url: 'https://www.ers.pt/pt/utentes/direitos-e-deveres-dos-utentes/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Fisiogaspar — exemplo de rede privada de fisioterapia em Portugal', url: 'https://www.fisiogaspar.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
