export default {
  editorialVoice: 'hackportugal',
  id: 'internet-outage-anacom',
  categoryId: 'telecom',
  title: 'Reclamação à ANACOM contra o operador e resolução do contrato',
  tldr: 'Se a fibra/internet em Portugal não funcionar, comece por registar a avaria junto do operador e obter o número de avaria/protocolo. Pela Lei 16/2022, se o serviço estiver indisponível por mais de 24 horas por culpa do operador, há direito a compensação, no mínimo proporcional à mensalidade. Se a avaria durar mais de 15 dias após a comunicação, o consumidor pode resolver o contrato sem fidelização/multa. A ANACOM recebe reclamações e fiscaliza, mas a recuperação do dinheiro normalmente faz-se através do Livro de Reclamações e da arbitragem de consumo.',
  tags: ['anacom', 'internet', 'reclamação', 'fibra'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'fix-proof',
      title: '1. Registe a avaria, não apenas “a internet deixou de funcionar”',
      content: [
        { kind: 'paragraph', text: 'Num litígio com a MEO, NOS, Vodafone, NOWO ou outro operador, o que conta não é a emoção, mas a data da primeira comunicação da avaria. É normalmente a partir dela que se contam as 24 horas para compensação e os 15 dias para o direito de resolver o contrato sem multa.' },
        { kind: 'checklist', items: [
          'Ligue para o apoio ao cliente ou escreva na app/área de cliente e abra uma avaria.',
          'Peça o número de avaria ou número de protocolo.',
          'Anote a data, a hora, o nome do operador e uma breve descrição do problema.',
          'Faça capturas de ecrã do speedtest, do estado do router/ONT e dos erros na app do operador.',
          'Guarde SMS/e-mails sobre a visita do técnico e adiamentos da visita.',
          'Se apenas o Wi-Fi não funciona, o operador pode contestar; teste por cabo Ethernet, se possível.',
          'Se o problema for geral no prédio/bairro, peça também aos vizinhos que abram uma avaria.',
          'Não deite fora o router/ONT e não altere o equipamento sem indicação do operador.'
        ] },
        { kind: 'warning', text: 'Não deixe de pagar nem cancele o débito direto como primeiro passo. O operador pode lançar uma dívida, bloquear serviços e enviar a dívida para cobrança. Primeiro crie um rasto escrito: avaria, reclamação, pedido de compensação/resolução.' }
      ]
    },
    {
      id: 'rights',
      title: '2. Que direitos a lei dá em 2026',
      content: [
        { kind: 'paragraph', text: 'A lei principal é a Lei 16/2022, Lei das Comunicações Eletrónicas. Para um cliente doméstico, são importantes duas regras práticas: compensação pela indisponibilidade do serviço e direito de resolver o contrato se a avaria não for reparada durante demasiado tempo.' },
        { kind: 'checklist', items: [
          'Se o serviço estiver indisponível por mais de 24 horas consecutivas por motivos imputáveis ao operador, o cliente tem direito a compensação.',
          'O mínimo da compensação é a parte proporcional da mensalidade pelo período de indisponibilidade; o contrato pode dar mais, mas não menos.',
          'O período em que o serviço não foi prestado não deve ser cobrado como serviço normal.',
          'Se a avaria durar mais de 15 dias após a comunicação ao operador, o consumidor pode resolver o contrato sem encargos — ou seja, sem multa por fidelização.',
          'O direito aplica-se ao serviço que efetivamente não está a ser prestado: fibra, TV, telefone fixo, pacote 3P/4P.',
          'Se o operador provar que a falha foi causada pelo cliente, pelo seu equipamento, por obras no apartamento ou por força maior, a compensação pode ser contestada.',
          'O SLA no contrato ou na ficha de informação simplificada pode prometer um prazo de reparação concreto; se for incumprido, exija a aplicação da compensação contratual.',
          'A compensação é normalmente feita como crédito na fatura, e não por transferência em dinheiro.'
        ] },
        { kind: 'warning', text: 'É mais seguro contar os 15 dias a partir da avaria oficialmente registada, e não da primeira conversa verbal “a minha rede apanha mal”. Por isso, o número do pedido é crítico.' }
      ]
    },
    {
      id: 'complaint-operator',
      title: '3. Primeiro, uma reclamação escrita ao operador',
      content: [
        { kind: 'paragraph', text: 'Antes da ANACOM, é melhor enviar ao operador um pedido escrito claro. Isto acelera o reembolso e cria prova de que pediu não apenas reparação, mas também compensação ou resolução.' },
        { kind: 'checklist', items: [
          'Entre na área de cliente ou envie um e-mail/mensagem através do canal oficial do operador.',
          'Indique o NIF do titular do contrato, a morada de instalação, o número de cliente e o número da avaria.',
          'Escreva a data de início da indisponibilidade e o que exatamente não funciona.',
          'Exija reparação imediata e crédito proporcional na fatura pelo período sem serviço.',
          'Se já passaram mais de 15 dias: escreva expressamente pedido de resolução do contrato sem encargos por indisponibilidade superior a 15 dias após comunicação da avaria.',
          'Peça resposta por escrito e número de reclamação.',
          'Anexe capturas de ecrã, SMS sobre adiamentos do técnico, fotografias do ONT/router, speedtest.',
          'Guarde o PDF/captura de ecrã da mensagem enviada.'
        ] },
        { kind: 'paragraph', text: 'Formulação em português: “Solicito a reparação da avaria n.º ___, a compensação proporcional pela indisponibilidade do serviço superior a 24 horas e, caso a indisponibilidade exceda 15 dias desde a comunicação da avaria, a resolução do contrato sem encargos, nos termos da Lei n.º 16/2022.”' }
      ]
    },
    {
      id: 'anacom-livro',
      title: '4. Reclamação: Livro de Reclamações e ANACOM',
      content: [
        { kind: 'paragraph', text: 'A ANACOM é o regulador das comunicações. É útil quando o operador viola sistematicamente as regras, não responde, recusa a compensação ou tenta cobrar uma multa por fidelização após uma avaria de 15 dias. Mas a ANACOM normalmente não atua como o seu advogado nem atribui uma compensação individual como um tribunal.' },
        { kind: 'substeps', items: [
          { id: 'livro', title: 'Livro de Reclamações Eletrónico', content: [
            { kind: 'paragraph', text: 'Apresente uma reclamação oficial em livroreclamacoes.pt. O operador é obrigado a receber a reclamação e a responder nos termos aplicáveis. Este é o canal mais prático para um litígio de consumo doméstico.' },
            { kind: 'checklist', items: [
              'Escolha o setor: Comunicações eletrónicas.',
              'Escolha o operador: MEO/NOS/Vodafone/NOWO, etc.',
              'Descreva os factos por datas: avaria aberta, visitas falhadas, dias sem serviço.',
              'Indique o pedido: compensação, crédito na fatura, resolução sem encargos.',
              'Anexe provas, se o formulário o permitir.',
              'Guarde o comprovativo da reclamação.'
            ] }
          ] },
          { id: 'anacom', title: 'ANACOM', content: [
            { kind: 'paragraph', text: 'Através do site da ANACOM, pode apresentar uma exposição/queixa ao regulador. O objetivo é registar a violação das regras de comunicações e obrigar o operador a prestar esclarecimentos perante a entidade fiscalizadora.' },
            { kind: 'checklist', items: [
              'Anexe cópia da reclamação ao operador ou do Livro de Reclamações.',
              'Anexe o contrato/fatura e a ficha contratual, se existirem.',
              'Indique o número da avaria e o número de dias sem serviço.',
              'Escreva separadamente se o operador exige penalização por fidelização apesar de mais de 15 dias sem serviço.',
              'Não se limite à frase “internet lenta”; escreva “serviço indisponível” ou medições concretas de velocidade.'
            ] }
          ] }
        ] },
        { kind: 'warning', text: 'A ANACOM não substitui um tribunal arbitral. Se precisar de reembolso, anulação de dívida ou reconhecimento da resolução, muitas vezes será necessário recorrer a um Centro de Arbitragem de Conflitos de Consumo.' }
      ]
    },
    {
      id: 'termination',
      title: '5. Como resolver sem multa após 15 dias',
      content: [
        { kind: 'paragraph', text: 'Se o serviço estiver indisponível por mais de 15 dias após a comunicação da avaria, não basta “deixar de usar”. Envie um pedido formal de resolução. Caso contrário, o operador pode considerar o contrato ativo e continuar a emitir faturas.' },
        { kind: 'checklist', items: [
          'Confirme que passaram mais de 15 dias desde a data do número de avaria/protocolo.',
          'Envie o pedido de resolução do contrato sem encargos através da área de cliente, e-mail, loja com comprovativo ou carta registada.',
          'Indique que o motivo é a indisponibilidade do serviço superior a 15 dias após comunicação da avaria.',
          'Exija a data de cessação do contrato e a fatura final sem penalização por fidelização.',
          'Peça instruções para devolução do router/ONT/box e o prazo de devolução.',
          'Entregue o equipamento contra recibo ou guarde o comprovativo de envio.',
          'Verifique a fatura seguinte: não deve haver multa por fidelização nem cobrança pelo período sem serviço.',
          'Se a multa chegar na mesma — Livro de Reclamações + ANACOM + pedido em arbitragem de consumo.'
        ] },
        { kind: 'warning', text: 'Se o pacote incluir números móveis, o operador pode tentar manter a parte móvel ou alterar o preço. No pedido, escreva se está a resolver todo o pacote ou apenas o serviço fixo, e peça o cálculo do novo preço antes de aceitar.' }
      ]
    },
    {
      id: 'arbitration',
      title: '6. Se o operador não devolver o dinheiro ou enviar uma dívida',
      content: [
        { kind: 'paragraph', text: 'Para obter um resultado individual, use o Centro de Arbitragem de Conflitos de Consumo da sua área de residência ou o CNIACC. Os litígios de telecomunicações para consumidores são normalmente adequados para arbitragem de consumo, sobretudo quando o valor é reduzido e está em causa faturas, multa por fidelização ou recusa em resolver o contrato.' },
        { kind: 'checklist', items: [
          'Reúna o contrato, faturas, número da avaria, correspondência, Livro de Reclamações e resposta do operador.',
          'Calcule o valor: mensalidade/30 × dias sem serviço + multa ilegal + faturas incorretas.',
          'Apresente um pedido de mediação/arbitragem no centro competente.',
          'Peça o reconhecimento da resolução sem encargos, a anulação da dívida e a emissão de nota de crédito.',
          'Se a dívida já estiver numa agência de cobrança, conteste a dívida por escrito e anexe o número do processo.',
          'Não ignore cartas de injunção ou notificações do tribunal: aí aplicam-se prazos curtos para oposição.'
        ] },
        { kind: 'paragraph', text: 'Mínimo prático: número de avaria, prova de mais de 15 dias sem serviço e pedido escrito para resolver sem multa. Sem estes três elementos, o litígio fica muito mais fraco.' }
      ]
    }
  ],
  costs: [
    { label: 'Reclamação no Livro de Reclamações Eletrónico', amountEUR: 0, note: 'É apresentada online gratuitamente.' },
    { label: 'Reclamação/exposição à ANACOM', amountEUR: 0, note: 'O canal regulatório é gratuito.' },
    { label: 'Carta registada com aviso de receção', amountEURMin: 3, amountEURMax: 6, note: 'Valor indicativo dos CTT; depende do peso e dos serviços adicionais.' }
  ],
  sources: [
    {
      title: 'ANACOM: direitos do consumidor em caso de avaria e indisponibilidade do serviço',
      url: 'https://www.anacom.pt/render.jsp?contentId=1444334',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Lei n.º 16/2022 — Lei das Comunicações Eletrónicas',
      url: 'https://diariodarepublica.pt/dr/detalhe/lei/16-2022-187481298',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Livro de Reclamações Eletrónico — portal para apresentação de reclamações',
      url: 'https://www.livroreclamacoes.pt/Inicio/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ANACOM: informação para consumidores sobre reclamações',
      url: 'https://www.anacom-consumidor.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
