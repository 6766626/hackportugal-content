export default {
  editorialVoice: 'hackportugal',
  id: 'cc-lost-stolen-urgent',
  categoryId: 'documents_fiscal',
  title: 'Perda ou roubo do Cartão de Cidadão: substituição urgente',
  tldr: 'Se o Cartão de Cidadão foi perdido ou roubado, cancele primeiro o cartão e os certificados: online, por telefone através do +351 210 990 111 ou presencialmente no IRN. Em caso de roubo, faça um auto de notícia/participação na PSP ou na GNR e leve-o para a substituição. O CC urgente em 2026 custa 30 € / 33 € e costuma ficar pronto mais rapidamente do que o normal; o extremo urgente custa 50 € / 53 €, com levantamento em balcões limitados, muitas vezes no próprio dia ou em 24 horas. Sem passaporte, leve quaisquer documentos e, se necessário, testemunhas.',
  tags: ['cc', 'irn', 'documentos', 'psp'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'who-can-use',
      title: 'A quem se destina e o que conta como substituição urgente',
      content: [
        { kind: 'paragraph', text: 'O Cartão de Cidadão é o documento de identificação do cidadão português. A autorização de residência da AIMA para estrangeiros não é substituída por este procedimento. Este guia é relevante para cidadãos naturalizados, crianças com nacionalidade portuguesa e famílias em que um dos membros tem CC.' },
        { kind: 'paragraph', text: 'Após perda, furto, roubo ou destruição do cartão, deve cancelar o CC antigo e pedir um novo cartão ou segunda via. Se precisar de viajar de avião, assinar um negócio, ir ao banco ou tratar de um acto urgente no notário, peça um pedido urgente ou pedido extremo urgente.' },
        { kind: 'warning', text: 'Não confunda «agendamento» com produção do cartão. O agendamento através de gov.pt/IRN é necessário para o pedido ou levantamento, mas a urgência em si é escolhida e paga no momento do pedido do Cartão de Cidadão.' }
      ]
    },
    {
      id: 'cancel-card',
      title: '1. Cancele imediatamente o CC antigo',
      content: [
        { kind: 'paragraph', text: 'O cancelamento bloqueia os certificados electrónicos, a assinatura e a utilização do cartão perdido. Isto é especialmente importante se o cartão tiver sido roubado juntamente com a carta PIN, o telefone, cartões bancários ou documentos com NIF.' },
        { kind: 'checklist', items: [
          'Ligue para a Linha Cartão de Cidadão: +351 210 990 111, se não tiver acesso aos serviços online.',
          'Se tiver CMD ou os códigos do cartão, verifique a possibilidade de cancelamento através de gov.pt.',
          'Pode cancelar presencialmente num balcão IRN, Espaço Cidadão ou Loja de Cidadão com serviço de Cartão de Cidadão.',
          'Anote a data e o modo de cancelamento: isto será útil se mais tarde surgirem actos fraudulentos.',
          'Se o cartão foi roubado, dirija-se à PSP/GNR antes de pedir um novo CC.',
          'Se encontrar um cartão que já foi cancelado, não pode utilizá-lo: continua a precisar de um novo CC.'
        ] },
        { kind: 'warning', text: 'Se não cancelar o CC e este for utilizado, será mais difícil provar a ausência da sua vontade. Em caso de roubo, não se limite ao cancelamento: é necessário um auto policial.' }
      ]
    },
    {
      id: 'police-report',
      title: '2. Em caso de roubo — faça uma participação na PSP ou na GNR',
      content: [
        { kind: 'paragraph', text: 'Para uma simples perda, a polícia normalmente não é obrigatória. Para furto, roubo, carteirismo, arrombamento de carro ou de casa, é necessário um auto de notícia / participação na PSP ou na GNR. Na prática, o IRN pode pedir este documento, sobretudo se declarar especificamente furto/roubo e não tiver outro documento de identificação.' },
        { kind: 'checklist', items: [
          'Dirija-se à esquadra da PSP mais próxima na cidade ou ao posto da GNR em zonas rurais.',
          'Informe que o Cartão de Cidadão foi roubado e peça uma participação por escrito.',
          'Indique o NIF, data de nascimento, morada, local e hora do roubo, se souber.',
          'Se também foram roubados cartões bancários, telefone, carta de condução ou passaporte — inclua tudo no mesmo auto.',
          'Peça uma cópia em papel ou digital com o número do processo.',
          'Leve a participação para o atendimento no IRN.',
          'Se o roubo ocorreu no estrangeiro, faça a denúncia na polícia local e, se possível, informe o consulado de Portugal.'
        ] },
        { kind: 'warning', text: 'A PSP/GNR não emite um novo CC. Apenas regista o roubo. O novo cartão é tratado através do IRN/Justiça/gov.pt.' }
      ]
    },
    {
      id: 'book-and-choose-priority',
      title: '3. Agende no IRN e escolha a urgência',
      content: [
        { kind: 'paragraph', text: 'O agendamento é feito através de gov.pt: serviços relacionados com o Cartão de Cidadão. Escolha um balcão que tenha emissão/renovação/levantamento. Nas grandes cidades, as vagas esgotam rapidamente; verifique concelhos vizinhos e Lojas de Cidadão.' },
        { kind: 'substeps', items: [
          { id: 'normal', title: 'Pedido normal', content: [
            { kind: 'paragraph', text: 'Adequado se tiver passaporte ou outro documento e não tiver uma viagem urgente. Em Portugal, a produção normal costuma demorar cerca de 7 dias úteis, mas o levantamento efectivo depende do balcão e do agendamento para levantamento.' }
          ] },
          { id: 'urgent', title: 'Pedido urgente', content: [
            { kind: 'paragraph', text: 'Em 2026 custa 30 € para cartão com validade até 5 anos e 33 € para cartão com validade superior a 5 anos. Utilize se precisar do documento rapidamente, mas não hoje. Os prazos são mais curtos do que os normais; o dia concreto de levantamento é confirmado pelo balcão.' }
          ] },
          { id: 'extreme', title: 'Pedido extremo urgente', content: [
            { kind: 'paragraph', text: 'Em 2026 custa 50 € para cartão com validade até 5 anos e 53 € para cartão com validade superior a 5 anos. É o regime para levantamento em pontos limitados, normalmente Lisboa/Porto, muitas vezes no próprio dia ou em cerca de 24 horas, se o pedido for apresentado a tempo e não houver bloqueios técnicos.' }
          ] }
        ] },
        { kind: 'warning', text: 'Nem todos os balcões fazem extremo urgente e nem todos os atendimentos estão disponíveis sem agendamento. Se tiver um voo, tribunal, negócio no notário ou hospital admission, diga-o directamente ao balcão e mostre comprovativo.' }
      ]
    },
    {
      id: 'what-to-bring',
      title: '4. O que levar se o CC foi perdido e não há outro ID',
      content: [
        { kind: 'paragraph', text: 'O IRN deve confirmar a sua identidade. Quanto mais documentos indirectos levar, menor é o risco de recusa ou adiamento. Se o passaporte também foi roubado, leve o auto policial e tudo o que o ligue à identidade portuguesa.' },
        { kind: 'checklist', items: [
          'Passaporte, se o tiver.',
          'CC antigo, se o cartão estiver danificado, mas fisicamente consigo.',
          'Auto de notícia / participação PSP ou GNR em caso de roubo.',
          'NIF, número do Cartão de Cidadão ou cópia do cartão antigo, se estiver guardada no telefone/banco/trabalho.',
          'Certidão de nascimento portuguesa ou dados do assento, se tiver.',
          'Carta de condução portuguesa ou carta estrangeira.',
          'Autorização de residência de outro país, cartão bancário com nome, badge profissional, documento escolar da criança — como comprovativos adicionais.',
          'Comprovativo de morada: factura, contrato de arrendamento, atestado de residência, se estiver também a alterar a morada.',
          'Telefone com acesso a e-mail/SMS, se for necessário contacto para notificações.',
          'Testemunhas com ID válido, se não tiver mesmo nenhum documento de identificação e o balcão pedir confirmação.'
        ] },
        { kind: 'warning', text: 'Se alterar dados — morada, nome, estado civil — já não é apenas uma segunda via. Podem ser necessários documentos adicionais e o prazo pode ser diferente do de uma reemissão urgente.' }
      ]
    },
    {
      id: 'pickup-and-after',
      title: '5. Levantamento, PIN e o que verificar após a emissão',
      content: [
        { kind: 'paragraph', text: 'O novo CC é normalmente levantado presencialmente no balcão indicado. Para a activação são necessários os códigos PIN da carta. Em pedido urgente e extremo urgente, confirme exactamente onde será feito o levantamento: o local do pedido e o local de levantamento podem ser diferentes.' },
        { kind: 'checklist', items: [
          'Verifique o nome, data de nascimento, validade, NIF, NISS e número de utente, se estiverem visíveis.',
          'Guarde a carta PIN separadamente do cartão.',
          'Active os certificados, se utilizar assinatura digital.',
          'Actualize o documento no banco, junto do empregador, seguradora, operador de telecomunicações e nos serviços onde o CC antigo estava indicado como ID.',
          'Se o telefone foi roubado, peça uma nova emissão do SIM/eSIM e altere as palavras-passe, sobretudo de gov.pt, e-mail e aplicações bancárias.',
          'Se o CC antigo aparecer depois da emissão do novo, não o utilize nem o entregue a terceiros.'
        ] },
        { kind: 'warning', text: 'O cartão urgente não resolve o problema de acesso à CMD, se tiver perdido o telefone ou o número. A recuperação da CMD pode exigir um procedimento separado através de gov.pt/IRN.' }
      ]
    }
  ],
  costs: [
    { label: 'Cartão de Cidadão — pedido normal, validade do cartão até 5 anos', amountEUR: 15, note: 'Referência para pedido em Portugal; o regime efectivo é escolhido no IRN.' },
    { label: 'Cartão de Cidadão — pedido normal, validade do cartão superior a 5 anos', amountEUR: 18, note: 'Normalmente aplica-se a cidadãos com mais de 25 anos, quando o cartão é emitido por 10 anos.' },
    { label: 'Pedido urgente — validade do cartão até 5 anos', amountEUR: 30, note: 'Produção urgente; a disponibilidade depende do balcão.' },
    { label: 'Pedido urgente — validade do cartão superior a 5 anos', amountEUR: 33, note: 'Produção urgente para cartão com validade mais longa.' },
    { label: 'Pedido extremo urgente — validade do cartão até 5 anos', amountEUR: 50, note: 'Emissão urgente em pontos limitados, muitas vezes no próprio dia ou em cerca de 24 horas.' },
    { label: 'Pedido extremo urgente — validade do cartão superior a 5 anos', amountEUR: 53, note: 'Emissão urgente para cartão com validade mais longa.' }
  ],
  sources: [
    { title: 'gov.pt: agendamento de serviços relacionados com o Cartão de Cidadão', url: 'https://www2.gov.pt/en/servicos/agendar-um-servico-relacionado-com-o-cartao-de-cidadao', kind: 'official', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'Justiça/IRN: Cartão de Cidadão, pedido, levantamento, prazos e custo', url: 'https://justica.gov.pt/Registos/Identificacao/Cartao-de-Cidadao', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
