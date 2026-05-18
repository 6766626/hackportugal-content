export default {
  editorialVoice: 'hackportugal',
  id: 'cc-lost-stolen-urgent',
  categoryId: 'documents_fiscal',
  title: 'Perda ou roubo do Cartão de Cidadão: substituição urgente',
  tldr: 'Se o Cartão de Cidadão for perdido ou roubado, cancele primeiro o cartão e os certificados: online, por telefone através do +351 210 990 111 ou presencialmente no IRN. Em caso de roubo, faça um auto de notícia/participação na PSP ou na GNR e leve-o para a substituição. O CC urgente em 2026 custa 30 € / 33 € e normalmente fica pronto mais depressa do que o normal; o extremo urgente custa 50 € / 53 €, com levantamento em balcões limitados, muitas vezes no próprio dia ou em 24 horas. Sem passaporte, leve todos os documentos possíveis e, se necessário, testemunhas.',
  tags: ['cc', 'irn', 'documentos', 'psp'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'who-can-use',
      title: 'A quem se aplica e o que conta como substituição urgente',
      content: [
        { kind: 'paragraph', text: 'O Cartão de Cidadão é o documento de identificação do cidadão português. Uma autorização de residência AIMA de estrangeiro não é substituída por este procedimento. Este guia é relevante para cidadãos naturalizados, crianças com nacionalidade portuguesa e famílias em que um dos membros tenha CC.' },
        { kind: 'paragraph', text: 'Após perda, furto, roubo ou destruição do cartão, é necessário cancelar o CC antigo e pedir um novo cartão ou segunda via. Se precisar de viajar de avião, assinar um negócio, ir ao banco ou tratar de um ato urgente no notário, peça um pedido urgente ou um pedido extremo urgente.' },
        { kind: 'warning', text: 'Não confunda «agendamento» com produção do cartão. A marcação através de gov.pt/IRN é necessária para o pedido ou levantamento, mas a urgência em si é escolhida e paga no momento do pedido do Cartão de Cidadão.' }
      ]
    },
    {
      id: 'cancel-card',
      title: '1. Cancele imediatamente o CC antigo',
      content: [
        { kind: 'paragraph', text: 'O cancelamento bloqueia os certificados eletrónicos, a assinatura e a utilização do cartão perdido. Isto é especialmente importante se o cartão tiver sido roubado juntamente com a carta PIN, o telefone, cartões bancários ou documentos com NIF.' },
        { kind: 'checklist', items: [
          'Ligue para a Linha Cartão de Cidadão: +351 210 990 111, se não tiver acesso aos serviços online.',
          'Se tiver CMD ou os códigos do cartão, verifique a possibilidade de cancelamento através de gov.pt.',
          'Também pode cancelar presencialmente num balcão IRN, Espaço Cidadão ou Loja de Cidadão com serviço de Cartão de Cidadão.',
          'Anote a data e a forma de cancelamento: isto será útil se mais tarde surgirem ações fraudulentas.',
          'Se o cartão tiver sido roubado, vá à PSP/GNR antes de pedir um novo CC.',
          'Se encontrar um cartão que já foi cancelado, não o pode utilizar: continua a precisar de um novo CC.'
        ] },
        { kind: 'warning', text: 'Se não cancelar o CC e alguém o utilizar, será mais difícil provar que não houve a sua vontade. Em caso de roubo, não se limite ao cancelamento: é necessário um auto policial.' }
      ]
    },
    {
      id: 'police-report',
      title: '2. Em caso de roubo — faça uma participação na PSP ou GNR',
      content: [
        { kind: 'paragraph', text: 'Para uma simples perda, a polícia normalmente não é obrigatória. Para furto, roubo, carteirismo, arrombamento de carro ou de casa, é necessário um auto de notícia / participação na PSP ou na GNR.\n\nNa prática, o IRN pode pedir este documento, especialmente se declarar especificamente furto/roubo e não tiver outro documento de identificação.' },
        { kind: 'checklist', items: [
          'Dirija-se à esquadra da PSP mais próxima na cidade ou ao posto da GNR em zonas rurais.',
          'Comunique que o Cartão de Cidadão foi roubado e peça uma participação por escrito.',
          'Indique o NIF, data de nascimento, morada, local e hora do roubo, se souber.',
          'Se também tiverem sido roubados cartões bancários, telefone, carta de condução ou passaporte — inclua tudo no mesmo auto.',
          'Peça uma cópia em papel ou digital com o número do processo.',
          'Leve a participação à marcação no IRN.',
          'Se o roubo tiver acontecido no estrangeiro, faça uma participação na polícia local e, se possível, informe o consulado de Portugal.'
        ] },
        { kind: 'warning', text: 'A PSP/GNR não emitem um novo CC. Apenas registam o roubo. O novo cartão é tratado através do IRN/Justiça/gov.pt.' }
      ]
    },
    {
      id: 'book-and-choose-priority',
      title: '3. Faça a marcação no IRN e escolha a urgência',
      content: [
        { kind: 'paragraph', text: 'A marcação é feita através de gov.pt: serviços relacionados com o Cartão de Cidadão. Escolha um balcão onde haja emissão/renovação/levantamento. Nas grandes cidades, as vagas esgotam rapidamente; verifique concelhos vizinhos e Lojas de Cidadão.' },
        { kind: 'substeps', items: [
          { id: 'normal', title: 'Pedido normal', content: [
            { kind: 'paragraph', text: 'Adequado se tiver passaporte ou outro documento e não tiver uma viagem urgente. Em Portugal, a produção normal costuma demorar cerca de 7 dias úteis, mas o levantamento efetivo depende do balcão e da marcação para levantamento.' }
          ] },
          { id: 'urgent', title: 'Pedido urgente', content: [
            { kind: 'paragraph', text: 'Em 2026 custa 30 € para cartão com validade até 5 anos e 33 € para cartão com validade superior a 5 anos. Use se precisar do documento rapidamente, mas não hoje. Os prazos são mais curtos do que os normais; o dia concreto de levantamento é confirmado pelo balcão.' }
          ] },
          { id: 'extreme', title: 'Pedido extremo urgente', content: [
            { kind: 'paragraph', text: 'Em 2026 custa 50 € para cartão com validade até 5 anos e 53 € para cartão com validade superior a 5 anos. Este é o regime para levantamento em postos limitados, normalmente Lisboa/Porto, muitas vezes no próprio dia ou em cerca de 24 horas, se o pedido for apresentado a tempo e não houver bloqueios técnicos.' }
          ] }
        ] },
        { kind: 'warning', text: 'Nem todos os balcões fazem extremo urgente e nem todos os atendimentos estão disponíveis sem marcação. Se tiver um voo, tribunal, negócio no notário ou hospital admission, diga-o diretamente ao balcão e mostre comprovativo.' }
      ]
    },
    {
      id: 'what-to-bring',
      title: '4. O que levar se o CC foi perdido e não tem outro ID',
      content: [
        { kind: 'paragraph', text: 'O IRN tem de confirmar a sua identidade. Quanto mais documentos indiretos levar, menor é o risco de recusa ou adiamento. Se o passaporte também tiver sido roubado, leve o auto policial e tudo o que o ligue à identidade portuguesa.' },
        { kind: 'checklist', items: [
          'Passaporte, se o tiver.',
          'CC antigo, se o cartão estiver danificado, mas fisicamente na sua posse.',
          'Auto de notícia / participação PSP ou GNR em caso de roubo.',
          'NIF, número do Cartão de Cidadão ou cópia do cartão antigo, se estiver guardada no telefone/banco/trabalho.',
          'Certidão de nascimento portuguesa ou dados do assento, se tiver.',
          'Carta de condução portuguesa ou carta de condução estrangeira.',
          'Autorização de residência de outro país, cartão bancário com nome, badge de trabalho, documento escolar da criança — como provas adicionais.',
          'Comprovativo de morada: fatura, contrato de arrendamento, atestado de residência, se também estiver a alterar a morada.',
          'Telefone com acesso a e-mail/SMS, se for necessário contacto para notificações.',
          'Testemunhas com ID válido, se não tiver mesmo nenhum documento de identificação e o balcão pedir confirmação.'
        ] },
        { kind: 'warning', text: 'Se estiver a alterar dados — morada, nome, estado civil — já não se trata apenas de uma segunda via. Podem ser necessários documentos adicionais e o prazo pode diferir da reemissão urgente.' }
      ]
    },
    {
      id: 'pickup-and-after',
      title: '5. Levantamento, PIN e o que verificar depois da emissão',
      content: [
        { kind: 'paragraph', text: 'O novo CC é normalmente levantado presencialmente no balcão indicado. Para ativar, são necessários os códigos PIN da carta. Em pedido urgente e extremo urgente, confirme exatamente onde será o levantamento: o local do pedido e o local de levantamento podem ser diferentes.' },
        { kind: 'checklist', items: [
          'Verifique o nome, data de nascimento, validade, NIF, NISS e número de utente, se estiverem apresentados.',
          'Guarde a carta PIN separadamente do cartão.',
          'Ative os certificados, se utilizar assinatura digital.',
          'Atualize o documento no banco, junto do empregador, seguradora, operador de telecomunicações e nos serviços onde o CC antigo estava indicado como ID.',
          'Se o telefone tiver sido roubado, peça uma segunda via do SIM/eSIM e altere as palavras-passe, especialmente de gov.pt, e-mail e aplicações bancárias.',
          'Se o CC antigo aparecer depois da emissão do novo, não o utilize nem o entregue a terceiros.'
        ] },
        { kind: 'warning', text: 'O cartão urgente não resolve o problema de acesso à CMD, se o telefone ou o número tiver sido perdido. A recuperação da CMD pode exigir um procedimento separado através de gov.pt/IRN.' }
      ]
    }
  ],
  costs: [
    { label: 'Cartão de Cidadão — pedido normal, validade do cartão até 5 anos', amountEUR: 15, note: 'Valor indicativo para pedido em Portugal; o regime efetivo é escolhido no IRN.' },
    { label: 'Cartão de Cidadão — pedido normal, validade do cartão superior a 5 anos', amountEUR: 18, note: 'Normalmente aplica-se a cidadãos com mais de 25 anos, quando o cartão é emitido por 10 anos.' },
    { label: 'Pedido urgente — validade do cartão até 5 anos', amountEUR: 30, note: 'Produção urgente; a disponibilidade depende do balcão.' },
    { label: 'Pedido urgente — validade do cartão superior a 5 anos', amountEUR: 33, note: 'Produção urgente para cartão com validade mais longa.' },
    { label: 'Pedido extremo urgente — validade do cartão até 5 anos', amountEUR: 50, note: 'Emissão de emergência em postos limitados, muitas vezes no próprio dia ou em cerca de 24 horas.' },
    { label: 'Pedido extremo urgente — validade do cartão superior a 5 anos', amountEUR: 53, note: 'Emissão de emergência para cartão com validade mais longa.' }
  ],
  sources: [
    { title: 'gov.pt: marcação de serviços relacionados com o Cartão de Cidadão', url: 'https://www2.gov.pt/en/servicos/agendar-um-servico-relacionado-com-o-cartao-de-cidadao', kind: 'official', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'Justiça/IRN: Cartão de Cidadão, pedido, levantamento, prazos e custos', url: 'https://justica.gov.pt/Registos/Identificacao/Cartao-de-Cidadao', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
