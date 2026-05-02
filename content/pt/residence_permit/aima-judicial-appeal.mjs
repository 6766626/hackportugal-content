export default {
  editorialVoice: 'hackportugal',
  id: 'aima-judicial-appeal',
  categoryId: 'residence_permit',
  title: 'AIMA recusou: recurso hierárquico e ação no TAC',
  tldr: 'Se a AIMA recusou a autorização de residência ou a renovação, não espere que «se resolva sozinho»: normalmente há 3 meses desde a notificação para apresentar recurso hierárquico ou ação administrativa no Tribunal Administrativo de Círculo de Lisboa. A via judicial exige advogado; a taxa de justiça base é muitas vezes cerca de 76,50 € (0,75 UC), mas os honorários do advogado são a principal despesa. Antes de uma recusa final, confirme se não se tratava de uma audiência prévia: frequentemente dão 10 dias úteis para responder.',
  tags: ['aima', 'tac', 'recurso', 'autorização de residência'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'identify-decision',
      title: '1. Perceber o que exatamente a AIMA enviou',
      content: [
        { kind: 'paragraph', text: 'A primeira ação é distinguir um projeto de recusa de uma recusa final. Nas cartas da AIMA é frequente usar-se linguagem jurídica: audiência prévia, indeferimento, projeto de decisão, decisão final. O prazo e a estratégia dependem disso.' },
        { kind: 'checklist', items: [
          'Se estiver escrito audiência prévia ou projeto de indeferimento — ainda não é uma recusa final; normalmente pode responder e entregar documentos adicionais.',
          'Se estiver escrito decisão de indeferimento, indeferido ou decisão final — já é um ato administrativo impugnável.',
          'Conte o prazo a partir da data da notificação: email, área pessoal, carta registada ou data de receção efetiva.',
          'Guarde o email original da AIMA com cabeçalhos, PDF, envelope dos CTT, aviso de receção, capturas de ecrã do portal.',
          'Verifique em que procedimento ocorreu a recusa: primeira autorização de residência, renovação, reagrupamento familiar, CPLP, art. 88/89, D7/D8, etc.',
          'Não confunda uma recusa do consulado relativamente a um visto D com uma recusa da AIMA relativamente à autorização de residência: os organismos são diferentes, mas o caminho judicial muitas vezes continua a passar pelos tribunais administrativos.',
          'Verifique se a AIMA indicou os fundamentos: falta de meios de subsistência, ausência de seguro/SNS, antecedentes criminais, falta de alojamento, documentos caducados.'
        ] },
        { kind: 'warning', text: 'Se isto for uma audiência prévia, não apresente imediatamente uma «ação por pânico». Responda primeiro ao mérito dentro do prazo, juntando os documentos em falta. Saltar esta etapa prejudica a posição em tribunal.' }
      ]
    },
    {
      id: 'deadlines',
      title: '2. Prazos: 10 dias úteis, 3 meses e por que não se deve adiar',
      content: [
        { kind: 'paragraph', text: 'Em 2026, a divisão prática é esta: antes da recusa final — resposta à audiência prévia; depois da recusa final — recurso administrativo ou tribunal. Para impugnação de ato administrativo no CPTA, o prazo base para particulares é de 3 meses. Para recurso hierárquico facultativo de um ato administrativo, também se toma como referência o prazo de impugnação judicial, se uma norma especial não estabelecer outro prazo.' },
        { kind: 'checklist', items: [
          'A AIMA enviou um projeto de indeferimento: muitas vezes dão 10 dias úteis para audiência prévia.',
          'A AIMA emitiu uma recusa final: a referência é 3 meses para ação administrativa no TAC.',
          'Recurso hierárquico: planeie também como um deadline de 3 meses, se o advogado não confirmar um prazo especial.',
          'Os prazos não são contados «até ao fim do mês», mas a partir da data da notificação.',
          'Se o último dia calhar num fim de semana/feriado, aplicam-se as regras de contagem processual dos prazos — deixe o advogado/solicitador calcular.',
          'A apresentação de uma reclamação administrativa pode influenciar a contagem do prazo judicial, mas isso não é motivo para a apresentar «para ganhar tempo» sem estratégia.',
          'Se houver risco de saída, deportação, perda de trabalho ou rutura familiar, discuta uma providência cautelar juntamente com a ação principal.'
        ] },
        { kind: 'warning', text: 'Não espere durante meses pela resposta da AIMA se o prazo em tribunal estiver a terminar. O erro principal é apresentar recurso hierárquico, não controlar o efeito sobre o prazo judicial e perder a janela para o TAC.' }
      ]
    },
    {
      id: 'hierarchical-appeal',
      title: '3. Recurso hierárquico: quando faz sentido',
      content: [
        { kind: 'paragraph', text: 'O recurso hierárquico é uma impugnação administrativa dentro do sistema: você pede ao órgão superior que reavalie a decisão da AIMA. É mais barato do que o tribunal e por vezes funciona se a recusa for técnica: não viram um documento, enganaram-se nas datas, não consideraram um pagamento, confundiram o tipo de pedido.' },
        { kind: 'checklist', items: [
          'Prepare uma cronologia breve: data de entrada, visto, marcação na AIMA, submissão, biometria, pedidos da AIMA, respostas, data da recusa.',
          'Analise cada argumento da AIMA ponto por ponto: «A AIMA afirma X — na realidade Y — prova Z».',
          'Junte documentos atualizados: passaporte, visto, comprovativo de entrada, NIF, NISS, contrato de arrendamento/atestado, meios de subsistência, seguro/SNS, certificado criminal.',
          'Traduza documentos em russo para PT/EN através de tradutor ajuramentado/certificado, se forem essenciais.',
          'Envie de forma a deixar rasto: carta registada com aviso de receção, email/portal com confirmação, protocolo em entrega presencial.',
          'Peça a anulação do indeferimento e a reabertura do procedimento, não apenas «reavaliar a situação».',
          'Guarde a prova de submissão — será necessária se depois avançar para o TAC.'
        ] },
        { kind: 'paragraph', text: 'Desvantagem: a AIMA está sobrecarregada, e o recurso hierárquico nem sempre produz um resultado rápido. Se a recusa afetar o direito à vida familiar, ao trabalho, à renovação da permanência legal ou se já estiver perto dos 3 meses, muitas vezes é mais sensato preparar logo a ação judicial.' }
      ]
    },
    {
      id: 'tac-action',
      title: '4. Ação no Tribunal Administrativo de Círculo de Lisboa',
      content: [
        { kind: 'paragraph', text: 'A via judicial é a ação administrativa de impugnação de ato administrativo. Para decisões da AIMA e recusas consulares de visto, na prática usa-se frequentemente o Tribunal Administrativo de Círculo de Lisboa, sobretudo quando o réu é um órgão central. A submissão deve ser feita por advogado: nos tribunais administrativos, a representação por advogado é normalmente obrigatória.' },
        { kind: 'checklist', items: [
          'Encontre um advogado com prática em AIMA/TAC, e não apenas um «consultor de imigração».',
          'Peça uma avaliação por escrito: prazo, competência do tribunal, probabilidades, preço, se é necessária providência cautelar.',
          'Entregue ao advogado o ficheiro completo, incluindo todas as cartas da AIMA, mesmo que pareçam pouco importantes.',
          'A ação deve pedir a anulação/declaração de nulidade da decisão e, se necessário, a obrigação de a AIMA reapreciar o pedido.',
          'Se a recusa ameaçar claramente o trabalho, a família, os estudos ou o direito de permanecer em Portugal, discuta uma medida cautelar urgente.',
          'A taxa de justiça base pode rondar 76,50 € (0,75 UC com UC de 102 €), mas as custas judiciais finais dependem do valor e do tipo de processo.',
          'Os honorários do advogado são normalmente muito superiores à court fee; acorde antecipadamente as fases: análise, petição inicial, audiência, recursos.'
        ] },
        { kind: 'warning', text: 'O TAC não «emite a autorização de residência em vez da AIMA». O tribunal normalmente anula a decisão ilegal e obriga a administração a reapreciar o caso nos termos da lei. Por isso, a base probatória deve responder às razões da recusa, e não apenas mostrar que você «precisa muito» de ficar.' }
      ]
    },
    {
      id: 'evidence',
      title: '5. O que reunir antes do advogado e do tribunal',
      content: [
        { kind: 'paragraph', text: 'Um caso forte não é uma carta emotiva, mas uma pasta de provas bem organizada. Quanto mais depressa reunir o ficheiro, menos tempo o jurista gastará a reconstruir o quadro e menor será o risco de perder o prazo.' },
        { kind: 'checklist', items: [
          'Passaporte: páginas com dados, vistos, carimbos de entrada/saída.',
          'Visto D1-D8, documentos CPLP ou outro fundamento de permanência.',
          'Comprovativo de manifestação/appointment/biometria/submission na AIMA.',
          'Todas as notificações da AIMA: pedidos de elementos, audiência prévia, decisão final.',
          'Provas das respostas à AIMA: email enviado, comprovativo postal, protocolo, screenshots.',
          'NIF, NISS, número de utente SNS ou seguro de saúde.',
          'Morada: contrato de arrendamento, recibos de renda, atestado de residência, faturas de serviços.',
          'Rendimentos: contrato de trabalho, recibos de vencimento, recibos verdes, extratos bancários, IRS, declaração da entidade patronal.',
          'Família: certidão de casamento/nascimento, escola dos filhos, provas de coabitação.',
          'Criminal record certificates e traduções, se a questão tiver sido antecedentes criminais.'
        ] },
        { kind: 'paragraph', text: 'Crie uma pasta PDF por datas e uma tabela cronológica separada. Nomes dos ficheiros: 2025-11-03_AIMA_pedido-elementos.pdf, 2025-11-10_resposta_comprovativo.pdf. É básico, mas em processos judiciais poupa horas.' }
      ]
    },
    {
      id: 'strategy',
      title: '6. Estratégia prática após a recusa',
      content: [
        { kind: 'paragraph', text: 'A escolha entre recurso hierárquico e TAC depende do motivo da recusa, da urgência e da qualidade das provas. Se o erro for evidente e facilmente corrigível — pode começar pela via administrativa. Se a recusa for juridicamente discutível, o prazo estiver a apertar ou as consequências forem graves — não adie o tribunal.' },
        { kind: 'checklist', items: [
          'Nas primeiras 48 horas: determinar o tipo de carta e a data da notificação.',
          'Na primeira semana: reunir o ficheiro completo e obter consulta com advogado.',
          'Antes da resposta à audiência prévia: fechar todas as lacunas factuais com documentos.',
          'Antes dos 3 meses: apresentar recurso hierárquico com controlo do prazo judicial, ou ação administrativa no TAC.',
          'Não saia de Portugal sem avaliação de risco se o seu estatuto estiver em disputa ou se o documento tiver caducado.',
          'Não confie em promessas verbais do call center da AIMA — num litígio, as provas escritas são importantes.',
          'Se a recusa estiver relacionada com trabalho, avise o empregador com cuidado: poderá precisar de declaração da entidade patronal.',
          'Se houver filhos/cônjuge/circunstâncias médicas, documente isso — é importante para proportionality e fundamental rights.'
        ] },
        { kind: 'warning', text: 'Consultores sem cédula profissional não podem conduzir um processo judicial no TAC. Podem ajudar com documentos, mas a ação, as medidas cautelares e os prazos processuais devem ser controlados por advogado.' }
      ]
    }
  ],
  costs: [
    { label: 'Taxa de justiça ao apresentar no TAC', amountEUR: 76.5, note: 'Referência de 0,75 UC com UC de 102 €; o valor final depende do tipo e do valor do processo.' },
    { label: 'Recurso hierárquico sem jurista', amountEURMin: 0, amountEURMax: 50, note: 'Frequentemente não há taxa administrativa; as despesas são correio, traduções e certificações. O jurista é pago à parte.' },
    { label: 'Consulta com advogado', amountEURMin: 80, amountEURMax: 250, note: 'Intervalo típico para a primeira análise do ficheiro; casos complexos são mais caros.' },
    { label: 'Acompanhamento judicial por advogado', amountEURMin: 1000, amountEURMax: 4000, note: 'O mercado varia muito consoante a urgência, as medidas cautelares e o número de audiências.' }
  ],
  sources: [
    {
      title: 'MNE: mecanismos de recurso contra recusas de vistos nacionais',
      url: 'https://vistos.mne.gov.pt/en/national-visas/appeal-mechanisms',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'CPTA: Código de Processo nos Tribunais Administrativos, prazos e ações administrativas',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2002-34490075',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'CPA: Código do Procedimento Administrativo, reclamações administrativas e recurso hierárquico',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2015-105602322',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Move to Cascais: visão geral da impugnação judicial de decisões da AIMA',
      url: 'https://movetocascais.com/lawyer-services/judicial-appeal-of-aima-decisions-protecting-your-rights/',
      kind: 'company',
      language: 'en',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
