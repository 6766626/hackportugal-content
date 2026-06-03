export default {
  editorialVoice: 'hackportugal',
  id: 'ebalcao-financas-online',
  categoryId: 'digital_gov',
  title: 'e-Balcão Finanças — contactos com a AT online sem deslocação',
  tldr: 'O e-Balcão é o sistema de tickets online da Autoridade Tributária no Portal das Finanças: Suporte → e-Balcão.\n\nEm 2026, é realisticamente possível resolver através dele a maioria das questões sem ir às Finanças: morada associada ao NIF, IRS, recibos verdes, IVA, IMI, IUC, certidões, erros em declarações, notificações. A resposta chega normalmente em 5–10 dias úteis; temas urgentes devem ser reforçados com uma chamada para o CAT. Cada pedido recebe uma referência: com ela acompanha-se o estado e anexam-se documentos.',
  tags: ['finanças', 'ebalcão', 'impostos', 'nif'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que é o e-Balcão e quando substitui uma deslocação',
      content: [
        { kind: 'paragraph', text: 'O e-Balcão é o canal oficial para pedidos escritos à Autoridade Tributária e Aduaneira através do Portal das Finanças. Não é um chat: cria-se um pedido de informação ou uma reclamação simples, escolhe-se o tema, anexam-se ficheiros PDF/JPG e aguarda-se a resposta na área pessoal.' },
        { kind: 'paragraph', text: 'Para um expatriado, é a principal forma de comunicar com as Finanças sem marcação numa repartição. Praticamente todas as questões não urgentes sobre NIF, IRS, atividade, recibos verdes, IVA, IMI, IUC e notificações podem começar pelo e-Balcão.' },
        { kind: 'checklist', items: [
          'Alteração ou confirmação da morada fiscal, se o sistema não permitir fazê-lo automaticamente',
          'Questões sobre IRS: declaração, divergências, reembolsos, notas de liquidação',
          'Abertura, alteração e cessação de atividade para recibos verdes',
          'Questões sobre IVA: enquadramento, declarações periódicas, isenção art. 53 CIVA',
          'Problemas com IUC, IMI, AIMI, IMT e Imposto do Selo',
          'Pedido de certidões: certidão de domicílio fiscal, certidão de dívida e não dívida',
          'Resposta a uma carta ou notificação da AT, se nela estiver indicado um prazo',
          'Correção de erros no Portal das Finanças ou nos dados do contribuinte'
        ] }
      ]
    },
    {
      id: 'access',
      title: 'Como entrar: Portal das Finanças → Suporte → e-Balcão',
      content: [
        { kind: 'paragraph', text: 'Abra portaldasfinancas.gov.pt. O acesso é feito com NIF e senha de acesso, ou através da Chave Móvel Digital (CMD), ou do Cartão de Cidadão. Depois de entrar: menu Suporte → e-Balcão → Registar Nova Questão.' },
        { kind: 'checklist', items: [
          'Verifique que está a entrar com o NIF correto: o seu NIF pessoal, e não o NIF da empresa ou do cônjuge',
          'Se perdeu a senha de acesso, peça uma nova antecipadamente no Portal das Finanças: a carta com o código chega à morada fiscal',
          'Antes de submeter o pedido, atualize o email e o telefone em Dados Pessoais',
          'Digitalize os documentos em PDF; as fotografias devem estar legíveis, sem margens cortadas',
          'Dê nomes claros aos ficheiros: contrato_arrendamento.pdf, recibo_renda_jan2026.pdf',
          'Se o pedido estiver relacionado com uma notificação da AT, anexe a própria notificação e indique o número do processo ou do documento',
          'Escreva em português; uma tradução automática curta é melhor do que um texto longo noutra língua'
        ] },
        { kind: 'warning', text: 'O e-Balcão está dentro do Portal das Finanças. Não envie NIF, senha de acesso nem documentos fiscais através de links recebidos por SMS/WhatsApp/email. Os sites de phishing copiam frequentemente a interface das Finanças.' }
      ]
    },
    {
      id: 'create-ticket',
      title: 'Como criar um pedido para evitar uma resposta padrão',
      content: [
        { kind: 'paragraph', text: 'O erro principal é escolher um tema demasiado geral e escrever “ajudem-me”. O funcionário da AT responde estritamente dentro da categoria escolhida. Quanto mais precisos forem o tema, as datas, os valores e os documentos anexados, maior é a probabilidade de obter uma solução útil à primeira.' },
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
                'Indique datas: data de entrada, data do contrato de arrendamento, data do recibo, data da notificação',
                'Indique os valores em euros, se a divergência for sobre pagamento, reembolso, liquidação',
                'Refira o número do documento da AT: referência, nota de liquidação, processo, declaração',
                'No fim, formule a ação pretendida: “Solicito a correção”, “Solicito esclarecimento”, “Solicito reanálise”'
              ] }
            ]
          },
          {
            id: 'attach-files',
            title: '3. Anexe provas',
            content: [
              { kind: 'paragraph', text: 'Normalmente basta o PDF do contrato, comprovativo de morada, declaração, recibo, comprovativo bancário ou captura de ecrã do erro. Não envie documentos desnecessários: isso atrasa o tratamento e aumenta o risco de pedirem esclarecimentos.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'tracking',
      title: 'Prazos, referência e controlo da resposta',
      content: [
        { kind: 'paragraph', text: 'Depois do envio, o e-Balcão atribui uma referência ao pedido. Guarde-a: é com este número que verifica o estado, responde a pedidos de esclarecimento e prova que contactou dentro do prazo.' },
        { kind: 'checklist', items: [
          'Prazo normal de resposta em 2026: cerca de 5–10 dias úteis',
          'Em questões complexas de IRS, IVA, heranças, IMI ou fiscalidade internacional, o prazo pode ser mais longo',
          'Consulte o estado e as respostas em e-Balcão → Consultar Questões',
          'Se a AT pedir documentos adicionais, responda no mesmo ticket, em vez de criar um novo',
          'Se o prazo de uma notificação estiver a terminar, não espere em silêncio: ligue para o CAT e, se necessário, marque atendimento num serviço de finanças',
          'Descarregue ou guarde em PDF/captura de ecrã a resposta da AT, sobretudo se afetar IRS, IVA ou uma coima',
          'Se a resposta estiver claramente fora do tema, crie um follow-up com a referência do pedido anterior e explique brevemente o que não foi resolvido'
        ] },
        { kind: 'warning', text: 'A resposta do e-Balcão nem sempre constitui uma informação vinculativa. Para uma interpretação fiscal oficial e obrigatória, utiliza-se o pedido de informação vinculativa nos termos da Lei Geral Tributária, e não um ticket normal do e-Balcão.' }
      ]
    },
    {
      id: 'use-cases',
      title: 'Cenários típicos para expatriados',
      content: [
        { kind: 'paragraph', text: 'Se acabou de se mudar, o e-Balcão é muitas vezes necessário ainda antes do primeiro IRS. É uma forma prática de deixar questões por escrito quando não há marcações nas repartições das Finanças ou quando o funcionário ao balcão dá uma resposta verbal contraditória.' },
        { kind: 'checklist', items: [
          'NIF e morada fiscal: esclarecer o estado da morada, representante fiscal, confirmação da residência fiscal',
          'IRS: por que motivo não foram pré-preenchidos rendimentos, renda, dependentes, despesas gerais familiares, saúde, educação',
          'Recibos verdes: que regime escolher, porque não é possível emitir recibo, como cessar atividade',
          'IVA: se é necessário entregar declaração periódica, porque surgiu uma dívida, como corrigir o enquadramento',
          'IMI/IMT: questões sobre compra de imóvel, caderneta predial, isenções, notas de cobrança',
          'IUC: imposto automóvel, associação da matrícula, pagamento e coimas',
          'Pagamentos: referência Multibanco perdida, pagamento duplicado, pedido de reembolso',
          'Notificações: o que significa uma carta da AT e qual é o prazo para responder'
        ] },
        { kind: 'paragraph', text: 'Para questões técnicas simples, pode primeiro tentar a pesquisa no Portal das Finanças e as FAQ. Mas se a questão estiver relacionada com um prazo, um valor, uma coima ou o seu estatuto de residente fiscal, é melhor criar um pedido no e-Balcão: o registo escrito é mais importante do que um conselho verbal.' }
      ]
    },
    {
      id: 'limits',
      title: 'Quando o e-Balcão não é adequado',
      content: [
        { kind: 'paragraph', text: 'O e-Balcão é útil, mas não substitui todos os procedimentos. Algumas ações exigem um formulário próprio, confirmação por CMD/Cartão de Cidadão, identificação presencial ou submissão noutro organismo.' },
        { kind: 'checklist', items: [
          'Desbloqueio urgente do acesso, se não tiver senha de acesso nem CMD',
          'Litígio fiscal complexo em que já exista execução fiscal ou prazo judicial',
          'Pedido de parecer fiscal vinculativo: é necessária informação vinculativa',
          'Questões de AIMA, Segurança Social, SNS, Câmara Municipal — não são competência da AT',
          'A alteração de morada para titulares de Cartão de Cidadão é normalmente feita através do ePortugal/CMD, e não por um simples ticket',
          'A entrega do IRS, da declaração periódica de IVA e a emissão de recibos verdes são feitas nas secções próprias do portal; o e-Balcão apenas ajuda com problemas',
          'Se já tiver sido aplicada uma coima, pode ser necessária uma defesa, reclamação graciosa ou pagamento com redução em separado'
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
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
