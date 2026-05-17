export default {
  editorialVoice: 'hackportugal',
  id: 'ebalcao-financas-online',
  categoryId: 'digital_gov',
  title: 'e-Balcão Finanças — pedidos à AT online sem deslocação',
  tldr: 'O e-Balcão é o sistema de tickets online da Autoridade Tributária no Portal das Finanças: Suporte → e-Balcão. Em 2026, é realista resolver por esta via a maioria das questões sem ir às Finanças: morada do NIF, IRS, recibos verdes, IVA, IMI, IUC, certidões, erros em declarações, notificações. A resposta chega normalmente em 5–10 dias úteis; temas urgentes devem ser duplicados por chamada para o CAT. Cada pedido recebe uma referência: com ela acompanha o estado e junta documentos.',
  tags: ['finanças', 'ebalcão', 'impostos', 'nif'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que é o e-Balcão e quando substitui uma deslocação',
      content: [
        { kind: 'paragraph', text: 'O e-Balcão é o canal oficial para pedidos escritos à Autoridade Tributária e Aduaneira através do Portal das Finanças. Não é um chat: você cria um pedido de informação ou uma reclamação simples, escolhe o tema, anexa PDF/JPG e aguarda a resposta na sua área pessoal.' },
        { kind: 'paragraph', text: 'Para um expatriado, é a principal forma de comunicar com as Finanças sem marcação num serviço. Praticamente todas as questões não urgentes sobre NIF, IRS, atividade, recibos verdes, IVA, IMI, IUC e notificações podem começar pelo e-Balcão.' },
        { kind: 'checklist', items: [
          'Alteração ou confirmação da morada fiscal, se o sistema não permitir fazê-lo automaticamente',
          'Questões sobre IRS: declaração, divergências, reembolsos, notas de liquidação',
          'Abertura, alteração e encerramento de atividade para recibos verdes',
          'Questões sobre IVA: enquadramento, declarações periódicas, isenção art. 53 CIVA',
          'Problemas com IUC, IMI, AIMI, IMT e imposto do selo Imposto do Selo',
          'Pedido de certidões: certidão de domicílio fiscal, certidão de dívida e não dívida',
          'Resposta a carta ou notificação da AT, se nela estiver indicado um prazo',
          'Correção de erros no Portal das Finanças ou nos dados do contribuinte'
        ] }
      ]
    },
    {
      id: 'access',
      title: 'Como entrar: Portal das Finanças → Suporte → e-Balcão',
      content: [
        { kind: 'paragraph', text: 'Abra portaldasfinancas.gov.pt. O acesso é feito com NIF e senha de acesso, ou através da Chave Móvel Digital (CMD), ou Cartão de Cidadão. Depois de entrar: menu Suporte → e-Balcão → Registar Nova Questão.' },
        { kind: 'checklist', items: [
          'Confirme que está a entrar com o NIF correto: o pessoal, e não o NIF da empresa ou do cônjuge',
          'Se perdeu a senha de acesso, peça uma nova antecipadamente no Portal das Finanças: a carta com o código chega à morada fiscal',
          'Antes de criar o pedido, atualize o email e o telefone em Dados Pessoais',
          'Digitalize os documentos em PDF; as fotografias devem ser legíveis, sem margens cortadas',
          'Dê nomes claros aos ficheiros: contrato_arrendamento.pdf, recibo_renda_jan2026.pdf',
          'Se o pedido estiver ligado a uma notificação da AT, anexe a própria notificação e indique o número de processo ou documento',
          'Escreva em português; uma tradução automática curta é melhor do que um texto longo noutra língua'
        ] },
        { kind: 'warning', text: 'O e-Balcão fica dentro do Portal das Finanças. Não envie NIF, senha de acesso nem documentos fiscais através de ligações recebidas por SMS/WhatsApp/email. Sites de phishing copiam frequentemente a interface das Finanças.' }
      ]
    },
    {
      id: 'create-ticket',
      title: 'Como criar um pedido para evitar uma resposta genérica',
      content: [
        { kind: 'paragraph', text: 'O erro principal é escolher um tema demasiado geral e escrever “ajudem-me”. O funcionário da AT responde estritamente dentro da categoria escolhida. Quanto mais precisos forem o tema, as datas, os valores e os documentos anexados, maior a probabilidade de obter uma solução útil logo à primeira.' },
        { kind: 'substeps', items: [
          {
            id: 'choose-topic',
            title: '1. Escolha o tema e a subcategoria',
            content: [
              { kind: 'paragraph', text: 'No e-Balcão escolhe-se primeiro o Imposto ou a área: IRS, IVA, IMI, IUC, Atividade, Cadastro, Pagamentos, Cobrança, Património, Benefícios fiscais. Em caso de dúvida, escolha a categoria pelo imposto, e não “Outros”.' }
            ]
          },
          {
            id: 'write-request',
            title: '2. Escreva um texto curto',
            content: [
              { kind: 'checklist', items: [
                'Comece pelo essencial: “Pretendo corrigir a morada fiscal…”',
                'Indique o NIF, o nome e o ano fiscal, se a questão for sobre IRS',
                'Indique datas: data de entrada no país, data do contrato de arrendamento, data do recibo, data da notificação',
                'Indique os valores em euros, se o litígio for sobre pagamento, reembolso, liquidação',
                'Refira o número do documento da AT: referência, nota de liquidação, processo, declaração',
                'No fim, formule a ação: “Solicito a correção”, “Solicito esclarecimento”, “Solicito reanálise”'
              ] }
            ]
          },
          {
            id: 'attach-files',
            title: '3. Anexe comprovativos',
            content: [
              { kind: 'paragraph', text: 'Normalmente basta um PDF do contrato, comprovativo de morada, declaração, recibo, comprovativo bancário ou captura de ecrã do erro. Não envie documentos desnecessários: isso atrasa o tratamento e aumenta o risco de pedirem esclarecimentos.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'tracking',
      title: 'Prazos, referência e controlo da resposta',
      content: [
        { kind: 'paragraph', text: 'Depois do envio, o e-Balcão atribui uma referência ao pedido. Guarde-a: é com esse número que verifica o estado, responde a pedidos de esclarecimento e prova que contactou dentro do prazo.' },
        { kind: 'checklist', items: [
          'Prazo normal de resposta em 2026: cerca de 5–10 dias úteis',
          'Em questões complexas de IRS, IVA, heranças, IMI ou tributação internacional, o prazo pode ser mais longo',
          'Consulte o estado e as respostas em e-Balcão → Consultar Questões',
          'Se a AT pedir documentos adicionais, responda no mesmo ticket, não crie um novo',
          'Se o prazo de uma notificação estiver a terminar, não espere em silêncio: telefone para o CAT e, se necessário, marque atendimento num serviço de finanças',
          'Descarregue ou guarde o PDF/captura de ecrã da resposta da AT, especialmente se ela afetar IRS, IVA ou uma coima',
          'Se a resposta estiver claramente fora do tema, crie um follow-up com a referência do pedido anterior e explique brevemente o que não foi resolvido'
        ] },
        { kind: 'warning', text: 'A resposta do e-Balcão nem sempre é uma binding tax ruling. Para uma interpretação fiscal oficial e vinculativa utiliza-se o pedido de informação vinculativa segundo as regras da Lei Geral Tributária, e não um ticket normal do e-Balcão.' }
      ]
    },
    {
      id: 'use-cases',
      title: 'Cenários típicos para expatriados',
      content: [
        { kind: 'paragraph', text: 'Se acabou de se mudar, o e-Balcão é muitas vezes necessário ainda antes do primeiro IRS. É uma forma prática de deixar questões por escrito quando não há marcações nos serviços das Finanças ou quando o funcionário ao balcão dá uma resposta verbal contraditória.' },
        { kind: 'checklist', items: [
          'NIF e morada fiscal: esclarecer o estado da morada, representante fiscal, confirmação de residência fiscal',
          'IRS: porque não aparecem rendimentos, rendas, dependentes, despesas gerais familiares, saúde, educação',
          'Recibos verdes: que regime escolher, porque não é possível emitir recibo, como encerrar atividade',
          'IVA: se é necessário entregar declaração periódica, porque surgiu uma dívida, como corrigir o enquadramento',
          'IMI/IMT: questões sobre compra de imóveis, caderneta predial, isenções, notas de cobrança',
          'IUC: imposto automóvel, associação da matrícula, pagamento e coimas',
          'Pagamentos: referência Multibanco perdida, pagamento duplicado, pedido de reembolso',
          'Notificações: o que significa a carta da AT e qual é o prazo para responder'
        ] },
        { kind: 'paragraph', text: 'Para questões técnicas simples, pode começar por tentar a pesquisa no Portal das Finanças e as FAQ. Mas se a questão estiver ligada a um prazo, valor, coima ou ao seu estatuto de residente fiscal, é melhor criar um e-Balcão: o registo escrito é mais importante do que um conselho verbal.' }
      ]
    },
    {
      id: 'limits',
      title: 'Quando o e-Balcão não é adequado',
      content: [
        { kind: 'paragraph', text: 'O e-Balcão é prático, mas não substitui todos os procedimentos. Algumas ações exigem um formulário próprio, confirmação por CMD/Cartão de Cidadão, identificação presencial ou submissão noutro organismo.' },
        { kind: 'checklist', items: [
          'Desbloqueio urgente de acesso, se não tiver senha de acesso nem CMD',
          'Litígio fiscal complexo em que já exista execução fiscal ou court deadline',
          'Pedido de parecer fiscal vinculativo: é necessária informação vinculativa',
          'Questões de AIMA, Segurança Social, SNS, Câmara Municipal — não são competência da AT',
          'A alteração de morada para titulares de Cartão de Cidadão é normalmente feita através do ePortugal/CMD, e não por um simples ticket',
          'A entrega de IRS, declaração periódica IVA e emissão de recibos verdes são feitas nas secções correspondentes do portal; o e-Balcão apenas ajuda com problemas',
          'Se já foi aplicada uma coima, pode ser necessária uma defesa, reclamação graciosa ou pagamento com redução em separado'
        ] },
        { kind: 'warning', text: 'Não use o e-Balcão como forma de “prolongar o prazo”. Se o prazo legal para responder, pagar ou entregar uma declaração estiver a terminar, o simples facto de fazer uma pergunta no e-Balcão normalmente não suspende o prazo.' }
      ]
    }
  ],
  sources: [
    {
      title: 'Portal das Finanças — entrada e acesso ao e-Balcão',
      url: 'https://www.portaldasfinancas.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças — Apoio ao contribuinte e e-Balcão',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_ao_contribuinte/Pages/default.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-05-04'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
