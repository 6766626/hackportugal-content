export default {
  editorialVoice: 'hackportugal',
  id: 'cartao-credito-debito-mb',
  categoryId: 'banking',
  title: 'Cartão de Crédito vs Débito vs Multibanco — que cartões existem e como funcionam',
  tldr: 'Em Portugal, «cartão» pode significar coisas diferentes: cartão de débito retira o dinheiro imediatamente da conta; cartão de crédito dá um limite de crédito e pode cobrar juros; Multibanco é a rede nacional SIBS para levantamentos, pagamentos Estado/serviços e transferências; Visa/Mastercard são necessários para pagamentos internacionais; pré-pago é carregado antecipadamente. Em 2026, quase todos os bancos permitem bloquear o cartão na app, mas em caso de fraude telefone ao banco ou ao SIBS Card Stop 808 201 251.',
  tags: ['cartões', 'multibanco', 'visa', 'fraude'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'types',
      title: '1. Que cartões existem em Portugal',
      content: [
        { kind: 'paragraph', text: 'A principal confusão: Multibanco não é um banco separado nem necessariamente um cartão separado. É a rede nacional de pagamentos SIBS. Um cartão pode ser simultaneamente cartão de débito do seu banco, funcionar no Multibanco e ter uma marca internacional Visa ou Mastercard.' },
        { kind: 'checklist', items: [
          'Cartão de débito — o dinheiro é retirado imediatamente da conta à ordem; se não houver saldo, a operação normalmente não é aceite.',
          'Cartão de crédito — o banco concede um plafond/limite; pode pagar 100% na data do extracto ou em prestações com juros.',
          'Cartão Multibanco / débito MB — cartão para a rede portuguesa Multibanco: caixas automáticas, pagamentos de serviços, Estado, telemóvel, carregamentos.',
          'Visa Debit / Mastercard Debit — cartão de débito que normalmente funciona melhor online e no estrangeiro do que um cartão exclusivamente MB.',
          'Cartão pré-pago — cartão pré-carregado: primeiro carrega, depois gasta; é útil para crianças, viagens e controlo de risco.',
          'Cartão virtual — cartão virtual na app do banco ou no MB WAY; adequado para compras online e pagamentos de utilização única.',
          'MB WAY — não é um cartão, mas sim um serviço de pagamento SIBS, associado a um número de telefone e a um cartão/conta.'
        ] }
      ]
    },
    {
      id: 'debit-vs-credit',
      title: '2. Débito e crédito: qual é a diferença prática',
      content: [
        { kind: 'paragraph', text: 'Para a vida quotidiana de um expat, quase sempre basta um cartão de débito com Visa/Mastercard e acesso ao Multibanco. O cartão de crédito é necessário em situações específicas: aluguer de automóvel, hotéis com caução, compra de bilhetes de avião, pagamentos faseados, cashback ou construção de relação com o banco.' },
        { kind: 'checklist', items: [
          'Débito: o pagamento reduz imediatamente o saldo da conta.',
          'Débito: é mais fácil de obter — normalmente é emitido ao abrir uma conta à ordem.',
          'Débito: menor risco de dívida, mas pode existir overdraft/descoberto, se for activado pelo banco.',
          'Crédito: existe um plafond — por exemplo 1 000 €, 3 000 € ou mais, por decisão do banco.',
          'Crédito: se escolher pagamento a 100%, normalmente não são cobrados juros quando o pagamento integral é feito dentro do prazo.',
          'Crédito: se pagar em prestações, aplica-se a TAEG/taxa de juro; verifique a FIN/Ficha de Informação Normalizada antes de assinar.',
          'Crédito: cash advance numa caixa automática é quase sempre caro — comissão + juros desde a data do levantamento.',
          'Crédito: o atraso no pagamento prejudica o histórico bancário e pode constar da Central de Responsabilidades de Crédito Banco de Portugal.'
        ] },
        { kind: 'warning', text: 'Não confunda «cartão de crédito» com um cartão Visa normal. Visa/Mastercard são esquemas de pagamento, não um tipo de dívida. Visa Debit continua a ser um cartão de débito, mesmo que tenha Visa escrito no cartão.' }
      ]
    },
    {
      id: 'multibanco',
      title: '3. O que o Multibanco faz 🇵🇹',
      content: [
        { kind: 'paragraph', text: 'Multibanco é uma das partes mais úteis do sistema bancário português. Através de uma caixa automática ou de homebanking/app, pode fazer operações que noutros países muitas vezes exigem uma área separada ou uma ida ao banco.' },
        { kind: 'checklist', items: [
          'Levantamento de numerário em caixas Multibanco em todo o país.',
          'Consulta de saldo e movimentos — saldo e últimas operações.',
          'Pagamento de serviços — pagamento de facturas por entidade/referência/valor.',
          'Pagamentos ao Estado — impostos, IMI, IUC, coimas e outros pagamentos Estado, se tiver sido emitida uma referência.',
          'Transferências entre contas portuguesas e, por vezes, transferências internacionais, dependendo do banco.',
          'Carregamento telemóvel — carregamento do número de telemóvel.',
          'Carregamento de títulos de transporte — carregamento de alguns cartões de transporte.',
          'Operações MB WAY — associação do cartão, confirmação de operações, levantamento sem cartão em alguns cenários.',
          'Algumas caixas automáticas permitem serviços de depósito/cheques, mas isso depende do banco e do ATM concreto.'
        ] },
        { kind: 'paragraph', text: 'Se o terminal num pequeno café disser «só Multibanco», isso pode significar que Visa/Mastercard internacionais não são aceites e que é necessário um cartão que funcione na rede portuguesa MB. Os cartões dos bancos portugueses normalmente não têm problemas com isto.' }
      ]
    },
    {
      id: 'online-and-abroad',
      title: '4. Online, viagens e pré-pagos',
      content: [
        { kind: 'paragraph', text: 'Para compras online em 2026, normalmente é exigido 3D Secure: confirmação na app do banco, código SMS ou push. Se o cartão não for aceite na Amazon, Ryanair, Booking ou em sites estrangeiros, verifique os limites, a autorização para online/international payments e o tipo de cartão.' },
        { kind: 'checklist', items: [
          'Na app do banco, active pagamentos online, pagamentos no estrangeiro e contactless, se estiverem desactivados.',
          'Defina limites diários e mensais: ATM, POS, online, international.',
          'Para subscrições, use um cartão virtual ou pré-pago com limite separado.',
          'Para aluguer de automóvel, muitas vezes exigem especificamente crédito, e não débito; verifique as condições da rental company antes de pagar.',
          'Fora da zona euro, escolha pagar na moeda local, e não conversion to EUR no terminal, para evitar a má taxa DCC.',
          'Não mantenha montantes elevados na conta à qual está associado o cartão usado para compras online.',
          'MB WAY é bom para pagamentos em Portugal, mas não substitui Visa/Mastercard no estrangeiro.'
        ] },
        { kind: 'warning', text: 'Pré-pago nem sempre é adequado para cauções em hotéis, aluguer de automóvel e algumas subscrições. O sistema vê-o como cartão pré-pago e pode recusá-lo.' }
      ]
    },
    {
      id: 'security',
      title: '5. Bloqueio, fraude e chargeback',
      content: [
        { kind: 'paragraph', text: 'Em 2026, um banco português normal deve disponibilizar gestão do cartão na app: bloquear/desbloquear temporariamente, alterar PIN, limites, online payments, contactless. Mas a app não substitui uma chamada urgente em caso de roubo ou suspeita de fraude.' },
        { kind: 'checklist', items: [
          'Bloqueie imediatamente o cartão na app do banco.',
          'Telefone ao banco através do número indicado na app/site oficial.',
          'Se o banco não estiver disponível, use o SIBS Card Stop: 808 201 251; a partir do estrangeiro, normalmente indicam +351 217 918 780.',
          'Anote a data, hora, nome do operador e número de ocorrência/protocolo.',
          'Conteste as operações através de reclamação/chargeback no banco o mais rapidamente possível.',
          'Se o telemóvel com MB WAY tiver sido roubado, bloqueie o SIM junto do operador e o acesso à app bancária.',
          'Altere as palavras-passe do e-mail, do banco e do MB WAY, se houver risco de acesso ao dispositivo.',
          'Em caso de roubo ou fraude evidente, apresente queixa na PSP/GNR ou online, se aplicável.'
        ] },
        { kind: 'warning', text: 'Nunca comunique PIN, códigos SMS, códigos MB WAY, dados CMD ou full card details por telefone. O banco e a SIBS não pedem códigos de confirmação para «cancelar uma operação fraudulenta».' }
      ]
    },
    {
      id: 'choosing-card',
      title: '6. O que escolher enquanto expat',
      content: [
        { kind: 'paragraph', text: 'O conjunto mínimo funcional: conta à ordem num banco português + cartão de débito com Multibanco e Visa/Mastercard + app com bloqueio imediato + MB WAY. Acrescente um cartão de crédito apenas se compreender o calendário de pagamento e as comissões.' },
        { kind: 'checklist', items: [
          'Verifique a comissão de disponibilização de cartão: em alguns bancos o cartão de débito é gratuito, noutros custa 10–25 € por ano.',
          'Verifique a comissão de manutenção da conta: por vezes o cartão é «gratuito», mas o pacote da conta é pago.',
          'Confirme os limites de ATM/POS/online/international.',
          'Pergunte se existe Visa Debit ou Mastercard Debit, e não apenas um cartão nacional MB.',
          'Para salário e arrendamento, é mais conveniente um banco com homebanking forte e extractos claros.',
          'Se contratar crédito, configure pagamento a 100% por débito direto.',
          'Para crianças/convidados/compras em sites duvidosos, use pré-pago ou virtual card.',
          'Guarde o número de apoio do banco separadamente do telemóvel — por exemplo, num password manager ou numa impressão.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Cartão de débito', amountEURMin: 0, amountEURMax: 25, note: 'Intervalo anual típico no mercado; depende do banco e do pacote conta à ordem.' },
    { label: 'Cartão de crédito', amountEURMin: 0, amountEURMax: 50, note: 'A comissão anual pode ser 0 € com volume de utilização ou num pacote premium; consulte os juros e a TAEG na FIN.' },
    { label: 'Cartão pré-pago', amountEURMin: 0, amountEURMax: 15, note: 'Pode haver comissão de emissão, carregamento ou manutenção; as condições variam bastante.' },
    { label: 'SIBS Card Stop', amountEUR: 0, note: 'Serviço de bloqueio de cartão; a própria chamada para 808 é cobrada de acordo com o tarifário do operador.' }
  ],
  sources: [
    {
      title: 'Banco de Portugal — direitos do cliente, cartões, pagamentos e segurança',
      url: 'https://clientebancario.bportugal.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Banco de Portugal — comparação de comissões de serviços bancários',
      url: 'https://clientebancario.bportugal.pt/comparador-de-comissoes',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'SIBS — Multibanco, MB WAY e infraestrutura de pagamentos',
      url: 'https://www.sibs.com',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'SIBS — Card Stop e segurança de cartões de pagamento',
      url: 'https://www.sibs.com',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
