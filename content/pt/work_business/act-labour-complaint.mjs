export default {
  editorialVoice: 'hackportugal',
  id: 'act-labour-complaint',
  categoryId: 'work_business',
  title: 'Queixa à ACT contra o empregador: falta de pagamento, despedimento, condições de trabalho',
  tldr: 'A ACT — Autoridade para as Condições do Trabalho — é a inspeção do trabalho em Portugal. Em 2026, a queixa pode ser apresentada online através de gov.pt/ACT gratuitamente: falta de pagamento do salário, ausência de recibo de vencimento, horas ilegais, condições inseguras, recibos verdes fictícios, irregularidades no despedimento. A ACT pode realizar uma inspeção e aplicar uma coima ao empregador, mas o litígio sobre compensação e o reconhecimento da ilicitude do despedimento é normalmente decidido pelo Tribunal do Trabalho; no tribunal do trabalho há primeiro uma tentativa obrigatória de conciliação.',
  tags: ['act', 'trabalho', 'despedimento', 'salário'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'when-to-complain',
      title: 'Quando recorrer à ACT e quando pensar logo no tribunal',
      content: [
        { kind: 'paragraph', text: 'A ACT recebe queixas sobre violações da legislação laboral: salário não pago, subsídio de férias/subsídio de Natal não processado, inexistência de contrato escrito, não emissão de recibo de vencimento, imposição de trabalho suplementar sem pagamento, incumprimento do horário de trabalho, ausência de segurança e saúde no trabalho, despedimento formalizado com irregularidades.' },
        { kind: 'paragraph', text: 'É importante distinguir: a ACT é uma inspeção. Verifica o empregador, exige documentos, pode levantar um auto de notícia e aplicar uma coima. Mas a ACT normalmente não “cobra” o seu salário como um agente de execução nem declara o despedimento ilícito em substituição do tribunal.' },
        { kind: 'checklist', items: [
          'A ACT é adequada se a violação estiver a decorrer ou afetar outros trabalhadores: falta de pagamento, inexistência de horários, ausência de seguro de acidentes de trabalho, local de trabalho perigoso.',
          'O Tribunal do Trabalho é necessário se quiser obter montantes concretos: salário, férias, subsídio de férias, subsídio de Natal, horas extra, indemnização.',
          'Em caso de despedimento, o prazo é crítico: a impugnação da ilicitude do despedimento é normalmente apresentada no Tribunal do Trabalho no prazo de 60 dias a contar da receção da decisão escrita/data do despedimento.',
          'Os créditos laborais do trabalhador ao abrigo do Código do Trabalho art. 337 podem normalmente ser reclamados no prazo de 1 ano a contar do dia seguinte ao da cessação do contrato.',
          'Se ainda estiver a trabalhar, a queixa à ACT pode ser confidencial para efeitos de inspeção, mas, pelos factos, o empregador muitas vezes percebe a origem — prepare as provas com antecedência.',
          'Se houver risco para a vida/saúde no local de trabalho, apresente a queixa imediatamente e registe fotografias/vídeos, datas e testemunhas.'
        ] },
        { kind: 'warning', text: 'Não espere pela resposta da ACT se já estiver a decorrer o prazo de 60 dias para impugnar o despedimento. A queixa à ACT não suspende os prazos processuais no Tribunal do Trabalho.' }
      ]
    },
    {
      id: 'prepare-evidence',
      title: 'Reúna o conjunto de provas 📁',
      content: [
        { kind: 'paragraph', text: 'Quanto mais concreta for a queixa, maior é a probabilidade de haver inspeção. Não escreva “o empregador é mau”, mas sim datas, montantes, horários, nomes, morada do local e o que foi exatamente violado.' },
        { kind: 'checklist', items: [
          'Os seus dados: nome, NIF, NISS se tiver, telefone, email, morada.',
          'Dados do empregador: nome da empresa, NIPC/NIF, morada da sede e morada do local de trabalho, nome do gerente/chefe.',
          'Contrato de trabalho ou provas de trabalho sem contrato: mensagens, turnos, badges, acessos, fotografias de uniforme, escalas.',
          'Recibos de vencimento, extratos bancários, comprovativos de transferência, mensagens sobre atrasos no pagamento.',
          'Registo de ponto/horário, registos de turnos, WhatsApp/Slack/Email com pedidos para trabalhar ao fim de semana ou fazer horas extra.',
          'Carta de despedimento, comunicação de despedimento, acordo de revogação, aviso prévio, quaisquer documentos que lhe tenham pedido para assinar.',
          'Provas de condições inseguras: fotografias, vídeos, testemunhas, ausência de EPI, ausência de formação, acidentes, relatório médico.',
          'Se estiver a recibos verdes, mas trabalhar como trabalhador por conta de outrem: horário fixo, superior hierárquico, local de trabalho do empregador, exclusividade, pagamento mensal.',
          'Cálculo da dívida: mês, montante bruto/líquido, o que não foi pago — salário, subsídios, férias, horas extra, compensação.'
        ] },
        { kind: 'warning', text: 'Não assine acordo de revogação, quitação ou “recebi tudo” sem verificação. Estes documentos podem dificultar a cobrança posterior, mesmo que o dinheiro não tenha sido efetivamente pago.' }
      ]
    },
    {
      id: 'file-act-online',
      title: 'Como apresentar uma queixa à ACT online',
      content: [
        { kind: 'paragraph', text: 'A via oficial é o serviço “Fazer uma queixa à Autoridade para as Condições do Trabalho (ACT)” no gov.pt ou o site act.gov.pt. A queixa é gratuita. Em 2026, este é o canal principal para pedido de intervenção inspetiva.' },
        { kind: 'substeps', items: [
          { id: 'open-service', title: '1. Abra o serviço gov.pt ou ACT', content: [
            { kind: 'paragraph', text: 'Procure o serviço “Fazer uma queixa à ACT”. Se tiver Chave Móvel Digital ou Cartão de Cidadão, o acesso é mais cómodo; sem estes meios, utilize os formulários/contactos da ACT disponíveis no site.' }
          ] },
          { id: 'choose-topic', title: '2. Escolha o tema da violação', content: [
            { kind: 'checklist', items: [
              'Retribuição/salários — falta de pagamento do salário.',
              'Tempo de trabalho — horas, horas extra, fins de semana, descanso.',
              'Contrato de trabalho — inexistência de contrato ou falsos recibos verdes.',
              'Despedimento — irregularidades no despedimento.',
              'Segurança e saúde no trabalho — condições perigosas.',
              'Igualdade e não discriminação — discriminação, gravidez, parentalidade, assédio.'
            ] }
          ] },
          { id: 'write-facts', title: '3. Descreva os factos segundo o esquema “quem-o quê-quando-onde”', content: [
            { kind: 'paragraph', text: 'Exemplo: “Trabalho no Restaurante X, Rua Y, Lisboa, desde 03.02.2026. Não me foi entregue contrato. Foi prometido verbalmente um salário de 920 € brutos, mas em março de 2026 não foi pago nada. Trabalhei 6 dias por semana, 10 horas por dia, e não há recibos de vencimento.\n\nOs documentos e a correspondência seguem em anexo”.' }
          ] },
          { id: 'attach-files', title: '4. Anexe ficheiros e envie', content: [
            { kind: 'paragraph', text: 'Carregue PDF/JPG/PNG: contrato, recibos, extratos bancários, correspondência, fotografias das condições de trabalho. Guarde o comprovativo/número do pedido.' }
          ] }
        ] },
        { kind: 'warning', text: 'A ACT não é obrigada a corresponder consigo como um advogado e nem sempre comunica todos os resultados da inspeção. Guarde o número da queixa: será útil para o jurista, sindicato ou Ministério Público junto do Tribunal do Trabalho.' }
      ]
    },
    {
      id: 'after-complaint',
      title: 'O que acontece depois da queixa',
      content: [
        { kind: 'paragraph', text: 'O inspetor da ACT avalia a queixa e pode solicitar documentos ao empregador, realizar uma visita inspetiva, ouvir trabalhadores, verificar payroll, horários, segurança e saúde no trabalho, seguros, contratos.' },
        { kind: 'checklist', items: [
          'Se a violação for confirmada, a ACT pode emitir uma determinação para corrigir a infração.',
          'Por contraordenações laborais, o empregador pode receber uma coima.',
          'Em caso de condições perigosas, a ACT pode exigir medidas de segurança imediatas.',
          'Se identificar indícios de crime ou de violação grave, a ACT pode remeter os elementos às entidades competentes.',
          'A ACT pode ajudar a fixar a violação, o que é útil em tribunal.',
          'O empregador não tem o direito de retaliar — agravar condições, ameaçar, despedir por causa da queixa; registe estes atos separadamente.',
          'Se a dívida não for paga voluntariamente, prepare a reclamação no Tribunal do Trabalho.'
        ] },
        { kind: 'paragraph', text: 'Quanto à falta de pagamento do salário, envie em paralelo ao empregador uma interpelação escrita: email + carta registada com aviso de receção. Indique os montantes, períodos, IBAN, prazo de pagamento, por exemplo 5 dias úteis. Isto não substitui o tribunal, mas demonstra boa-fé e fixa a dívida.' }
      ]
    },
    {
      id: 'tribunal-do-trabalho',
      title: 'Se precisar de dinheiro ou do reconhecimento da ilicitude do despedimento: Tribunal do Trabalho',
      content: [
        { kind: 'paragraph', text: 'Os litígios laborais são apreciados pelo Tribunal do Trabalho. Para o trabalhador, estão frequentemente disponíveis o Ministério Público junto do tribunal, sindicato ou advogado. Se o rendimento for baixo, peça apoio judiciário através da Segurança Social: pode requerer isenção de custas judiciais e nomeação de advogado.' },
        { kind: 'checklist', items: [
          'Falta de pagamento do salário: reclame salário, subsídio de férias, subsídio de Natal, férias não gozadas, horas extra, juros de mora.',
          'Despedimento: verifique o tipo — despedimento disciplinar, coletivo, extinção do posto de trabalho, inadaptação, caducidade, revogação.',
          'Impugnação do despedimento: para a maioria dos despedimentos individuais (disciplinar, extinção do posto de trabalho, inadaptação) o prazo é curto — 60 dias a contar da receção da decisão escrita, nos termos do Código do Trabalho art. 387. Para o despedimento coletivo aplica-se um prazo distinto de 6 meses a contar da cessação do contrato, nos termos do art. 388. A revogação e a caducidade impugnam-se segundo regras diferentes — mostre os documentos a um advogado com urgência.',
          'Após a cessação do contrato, os créditos laborais são normalmente reclamados no prazo de 1 ano nos termos do art. 337 Código do Trabalho.',
          'No tribunal do trabalho realiza-se uma tentativa de conciliação/audiência de partes: o juiz tenta reconciliar as partes antes da continuação do processo.',
          'Se houver acordo, este é registado em auto e torna-se executório.',
          'Se não houver conciliação, o processo prossegue: contestação, prova, audiência de julgamento, sentença.',
          'Não aceite pagamento “por fora” sem recibo/declaração: depois é mais difícil provar o saldo da dívida.'
        ] },
        { kind: 'warning', text: 'Se lhe propuserem um “mutual agreement” em vez de despedimento, verifique as consequências para o subsídio de desemprego. O acordo de revogação nem sempre dá direito a subsídio de desemprego; são importantes os fundamentos e as quotas previstas na lei.' }
      ]
    },
    {
      id: 'expat-specific',
      title: 'Especificidades para estrangeiros',
      content: [
        { kind: 'paragraph', text: 'O direito ao salário, a condições seguras e à proteção contra despedimento ilícito não depende da nacionalidade. Mesmo que tenha um visto temporário, esteja à espera da AIMA ou não tenha um conjunto perfeito de documentos, o empregador não ganha o direito de não pagar.' },
        { kind: 'checklist', items: [
          'Não entregue ao empregador o original do passaporte, autorização de residência, Cartão de Cidadão, NIF ou cartão bancário.',
          'Se o empregador ameaçar “cancelar o visto”, registe as ameaças por escrito. O empregador não é a AIMA.',
          'Peça contrato de trabalho e recibos de vencimento: são importantes para a autorização de residência, NISS, IRS e Segurança Social.',
          'Se foi enquadrado como recibos verdes, mas na prática está subordinado como trabalhador, isto pode ser falso trabalho independente.',
          'O salário mínimo mensal SMN em Portugal continental em 2026 é de 920 € brutos (antes de descontos) por trabalho a tempo completo; o que chega à conta depois do desconto para a Segurança Social é normalmente inferior (cerca de 818 € líquidos). Não é permitido pagar abaixo desta taxa por trabalho a tempo completo, exceto em regimes legais especiais.',
          'Guarde as provas no seu email/nuvem pessoal, e não apenas na conta de trabalho.',
          'Se o seu português for fraco, escreva a queixa em frases simples; pode anexar documentos em inglês/russo, mas é melhor apresentar os factos essenciais em português.'
        ] },
        { kind: 'warning', text: 'O trabalho ilegal pode criar riscos de imigração e fiscais, mas isso não lhe retira o direito de exigir pagamento pelo trabalho efetivamente prestado. Em casos complexos, consulte um advogado, sindicato ou o Ministério Público junto do Tribunal do Trabalho antes de assinar qualquer documento.' }
      ]
    }
  ],
  costs: [
    { label: 'Queixa à ACT através de gov.pt/ACT', amountEUR: 0, note: 'O serviço público é gratuito.' },
    { label: 'Carta registada com aviso de receção ao empregador', amountEURMin: 3, amountEURMax: 7, note: 'Depende do peso e do serviço dos CTT; é útil para fixar a interpelação.' },
    { label: 'Consulta inicial com advogado de direito do trabalho', amountEURMin: 50, amountEURMax: 150, note: 'O mercado varia muito consoante a cidade e a urgência; se tiver baixos rendimentos, verifique o apoio judiciário.' }
  ],
  sources: [
    {
      title: 'gov.pt: apresentar uma queixa à Autoridade para as Condições do Trabalho',
      url: 'https://www2.gov.pt/en/servicos/fazer-uma-queixa-a-autoridade-para-as-condicoes-do-trabalho-act-',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ACT: site oficial da Autoridade para as Condições do Trabalho',
      url: 'https://www.act.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do Trabalho — Lei 7/2009, incluindo art. 337 e art. 387',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2009-34546475',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código de Processo do Trabalho — regime do processo laboral e da conciliação',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1999-34582975',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
