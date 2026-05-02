export default {
  editorialVoice: 'hackportugal',
  id: 'cancel-telecom-fidelizacao',
  categoryId: 'telecom',
  title: 'Rescisão de contrato de telecomunicações através de cessacaodecontratos.pt',
  tldr: 'cessacaodecontratos.pt é o portal oficial para rescindir contratos da Vodafone, MEO, NOS, NOWO e outros operadores de comunicações. A entrada é feita com Chave Móvel Digital ou Cartão de Cidadão. Primeiro, pode pedir “informação contratual”: o operador é obrigado a responder no prazo de 3 dias úteis e a indicar o período de fidelização, a data de fim e a penalização. Se existir fidelização, a taxa por cessação antecipada é limitada por lei: apenas custos/benefícios proporcionais, efetivamente indicados no contrato, e não uma “mensalidade restante” arbitrária.',
  tags: ['telecomunicações', 'fidelização', 'contrato', 'anacom'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-portal-does',
      title: 'O que faz o cessacaodecontratos.pt',
      content: [
        { kind: 'paragraph', text: 'cessacaodecontratos.pt é o ponto único online para cessação de contratos de comunicações eletrónicas: internet, TV, comunicações móveis, telefone fixo e pacotes 3P/4P/5P. O portal não “discute” com o operador por si, mas regista juridicamente o pedido e transmite-o ao prestador.' },
        { kind: 'checklist', items: [
          'é possível pedir informação sobre o contrato em vigor antes da rescisão',
          'é possível apresentar o próprio pedido de cessação do contrato',
          'é necessária autenticação com Chave Móvel Digital (CMD) ou Cartão de Cidadão',
          'serve para pessoas singulares e pequenos clientes, se o contrato estiver associado ao seu NIF',
          'o operador responde através do portal / dados de contacto indicados no pedido',
          'o pedido deixa rasto: data, operador, serviço, tipo de ação',
          'se o operador ignorar ou calcular mal a penalização — o passo seguinte é uma reclamação no Livro de Reclamações e à ANACOM'
        ] },
        { kind: 'warning', text: 'O portal não anula dívidas de faturas já emitidas. Se houver faturas por pagar, o operador pode continuar a cobrança mesmo após a cessação.' }
      ]
    },
    {
      id: 'prepare-before-login',
      title: 'O que preparar antes de entrar 🔐',
      content: [
        { kind: 'paragraph', text: 'O erro mais comum é clicar em “cancelar” sem perceber se existe fidelização e quanto custa sair. Primeiro, reúna os dados do contrato e peça a informação contratual.' },
        { kind: 'checklist', items: [
          'Chave Móvel Digital ativa e associada a um número português; ou Cartão de Cidadão + leitor',
          'NIF do titular do contrato',
          'número de cliente / conta / contrato no operador',
          'morada de instalação do serviço, se for internet doméstica ou TV',
          'e-mail e telefone atuais para a resposta do operador',
          'última fatura em PDF — normalmente contém o número de cliente e o período de faturação',
          'se vai mudar de casa — nova morada e data da mudança',
          'se rescinde por falecimento do titular — certidão de óbito e documentos do herdeiro/representante',
          'se rescinde devido a alteração de circunstâncias — documentos comprovativos: desemprego, incapacidade, emigração, ausência de cobertura na nova morada'
        ] },
        { kind: 'warning', text: 'Se o contrato não estiver em seu nome, a sua CMD não ajuda: o pedido deve ser apresentado pelo titular do contrato ou por representante com poderes. Para cônjuge/vizinho/ex-inquilino, o portal não “reatribui” o contrato.' }
      ]
    },
    {
      id: 'request-contract-info',
      title: 'Peça primeiro a informação contratual',
      content: [
        { kind: 'paragraph', text: 'No cessacaodecontratos.pt, escolha a opção de pedido de informação sobre o contrato, e não a rescisão imediata. É um passo seguro: não desliga o serviço, mas obriga o operador a revelar as condições essenciais.' },
        { kind: 'checklist', items: [
          'entre em cessacaodecontratos.pt',
          'escolha a autenticação com Chave Móvel Digital ou Cartão de Cidadão',
          'escolha o operador: Vodafone, MEO, NOS, NOWO ou outro prestador disponível',
          'indique o serviço: móvel, internet fixa, TV, telefone fixo ou pacote',
          'introduza o número de cliente/contrato e os dados de contacto',
          'escolha pedido de informação contratual',
          'envie o pedido e guarde o comprovativo / referência'
        ] },
        { kind: 'paragraph', text: 'O operador deve responder no prazo de 3 dias úteis. A resposta deve conter dados sobre a duração do contrato, existência de fidelização, data de fim do período de fidelização, valor dos encargos por cessação antecipada e forma de devolução do equipamento.' },
        { kind: 'warning', text: '3 dias úteis não são “3 dias de calendário”. Fins de semana e feriados não contam. Se não houver resposta, guarde o comprovativo e apresente reclamação através do Livro de Reclamações Eletrónico, anexando as provas.' }
      ]
    },
    {
      id: 'understand-fidelizacao-penalty',
      title: 'Como verificar a penalização por fidelização',
      content: [
        { kind: 'paragraph', text: 'Em Portugal, a fidelização nos contratos de telecomunicações normalmente não pode ser superior a 24 meses. O operador é obrigado a disponibilizar opções sem fidelização ou com prazo mais curto, mas muitas vezes são mais caras. Um novo período de fidelização não surge em silêncio: exige o seu consentimento, por exemplo em caso de upgrade, novo desconto, novo equipamento ou alteração do pacote.' },
        { kind: 'paragraph', text: 'Se sair antes do fim da fidelização, o operador pode cobrar encargos por cessação antecipada. Mas não é um valor arbitrário e nem sempre são “todos os meses restantes”. Nos termos da Lei 16/2022, a cobrança deve estar ligada aos benefícios que recebeu efetivamente e/ou aos custos do operador com instalação, ativação, equipamento ou condições promocionais indicados no contrato. O valor deve diminuir proporcionalmente ao prazo restante.' },
        { kind: 'checklist', items: [
          'verifique a data de início e a data de fim da fidelização',
          'verifique que “vantagens” estão indicadas no contrato: desconto, instalação grátis, ativação grátis, router, box, oferta de mensalidades',
          'peça o cálculo detalhado da penalização, e não uma única linha “penalização”',
          'compare: quantos meses faltam e como foi calculada a proporção',
          'se o operador contabilizar todas as mensalidades restantes — exija fundamento legal e discriminação',
          'se a fidelização já terminou — não deve existir penalização por rescisão antecipada',
          'após o fim da fidelização, o contrato pode continuar, mas você tem o direito de o rescindir com o pré-aviso normal previsto nas condições do contrato',
          'guarde o PDF da resposta do operador: será útil em caso de litígio'
        ] },
        { kind: 'warning', text: 'A devolução do equipamento é um tema separado. Mesmo que a penalização por fidelização seja 0 €, o operador pode cobrar o valor do router/box/ONT se não os devolver dentro do prazo e segundo o procedimento do operador.' }
      ]
    },
    {
      id: 'submit-cancellation',
      title: 'Apresentar a rescisão através do portal',
      content: [
        { kind: 'paragraph', text: 'Quando o valor estiver claro, apresente o pedido de cessação. No formulário, indique a data a partir da qual pretende terminar o serviço e o motivo. Se o motivo der direito a sair sem penalização, anexe logo os documentos.' },
        { kind: 'checklist', items: [
          'escolha pedido de cessação do contrato',
          'indique o mesmo NIF e número de cliente que constam do contrato',
          'escolha os serviços que pretende terminar: o pacote completo ou apenas um SIM/serviço',
          'indique a data pretendida de desligamento',
          'se existir fundamento especial — anexe documento: mudança de casa, falecimento, desemprego, incapacidade, ausência de cobertura',
          'peça confirmação escrita da data de cessação e do valor final',
          'guarde o comprovativo de envio',
          'após o desligamento, verifique a fatura final',
          'devolva o equipamento e obtenha confirmação da devolução'
        ] },
        { kind: 'paragraph', text: 'Para internet doméstica e TV, o operador normalmente exige a devolução do equipamento numa loja, ponto CTT ou por estafeta — depende da empresa. Não deite fora caixas, serial numbers e comprovativo de entrega até ao encerramento da conta final.' },
        { kind: 'warning', text: 'Se estiver a portar o número para outro operador, não rescinda manualmente o contrato móvel antes de a portabilidade estar concluída. Caso contrário, pode perder o número. Primeiro trate da portabilidade junto do novo operador e depois encerre os serviços restantes.' }
      ]
    },
    {
      id: 'if-operator-refuses',
      title: 'Se o operador atrasar, não responder ou inflacionar o valor',
      content: [
        { kind: 'paragraph', text: 'Atue por escrito. Uma chamada telefónica para o call center é quase inútil para um litígio: peça número de ocorrência e confirmação por e-mail/SMS.' },
        { kind: 'checklist', items: [
          'guarde o comprovativo do cessacaodecontratos.pt',
          'guarde a resposta do operador ou prova de que não houve resposta em 3 dias úteis',
          'peça o cálculo detalhado dos encargos por cessação antecipada',
          'compare o cálculo com o contrato e a Lei 16/2022',
          'apresente reclamação no Livro de Reclamações Eletrónico',
          'indique que o litígio diz respeito à cessação de contrato e à fidelização',
          'anexe faturas, contrato, resposta do operador e comprovativo do portal',
          'se o litígio sobre o valor for elevado — recorra a um Centro de Arbitragem de Conflitos de Consumo',
          'em paralelo, pode comunicar a situação à ANACOM, sobretudo se houver uma infração sistemática'
        ] },
        { kind: 'warning', text: 'Não cancele o débito direto no banco como único meio de “rescindir o contrato”. Isso não termina o contrato e cria dívida, juros e risco de transmissão da dívida a uma empresa de cobrança.' }
      ]
    }
  ],
  costs: [
    {
      label: 'Apresentação do pedido em cessacaodecontratos.pt',
      amountEUR: 0,
      note: 'O portal em si é gratuito; só precisa de CMD ativa ou Cartão de Cidadão.'
    },
    {
      label: 'Rescisão antecipada com fidelização em vigor',
      amountEURMin: 0,
      amountEURMax: 999,
      note: 'Não existe uma tarifa universal. O valor depende do prazo restante e dos benefícios/custos indicados no contrato; por lei, deve ser proporcional e fundamentado.'
    },
    {
      label: 'Não devolução de router/box/ONT',
      amountEURMin: 50,
      amountEURMax: 300,
      note: 'Referência de mercado; o valor exato depende do operador e do equipamento. Peça sempre comprovativo da devolução.'
    }
  ],
  sources: [
    {
      title: 'Portal oficial de cessação de contratos cessacaodecontratos.pt',
      url: 'https://www.cessacaodecontratos.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ANACOM Consumidor: como cancelar o seu contrato de comunicações',
      url: 'https://www.anacom-consumidor.pt/-/sabe-como-cancelar-o-seu-contrato-de-comunicacoes-',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Lei 16/2022 — Lei das Comunicações Eletrónicas',
      url: 'https://diariodarepublica.pt/dr/detalhe/lei/16-2022-185423463',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
