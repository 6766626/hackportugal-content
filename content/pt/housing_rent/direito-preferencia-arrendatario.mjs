export default {
  editorialVoice: 'hackportugal',
  id: 'direito-preferencia-arrendatario',
  categoryId: 'housing_rent',
  title: 'Direito de Preferência: direito de preferência do arrendatário na venda da habitação',
  tldr: 'Se você arrenda uma habitação em Portugal há mais de 2 anos, quando esse apartamento/casa é vendido normalmente tem Direito de Preferência: o direito de comprar o imóvel nas mesmas condições antes de um terceiro comprador. O proprietário deve comunicar por escrito o preço e as condições do negócio; o arrendatário tem 30 dias para responder. Se a venda tiver sido feita sem notificação ou em condições melhores para o comprador, o negócio pode ser impugnado em tribunal no prazo de 6 meses após você ter tomado conhecimento das condições essenciais da venda.',
  tags: ['arrendamento', 'preferência', 'habitação', 'tribunal'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que confere o Direito de Preferência',
      content: [
        { kind: 'paragraph', text: 'O Direito de Preferência é o direito legal do arrendatário de comprar em primeiro lugar a habitação arrendada, se o proprietário decidir vendê-la ou transmiti-la em dação em cumprimento. A base é o Código Civil art. 1091 e as regras gerais de preferência nos art. 416–418 e art. 1410.' },
        { kind: 'paragraph', text: 'A lógica é simples: o senhorio não é obrigado a vender-lhe mais barato, mas é obrigado a propor-lhe o mesmo negócio que está disposto a celebrar com um terceiro comprador: o mesmo imóvel, preço, forma de pagamento, prazos, lugares de estacionamento/arrecadações incluídos e restantes condições essenciais.' },
        { kind: 'checklist', items: [
          'O direito surge normalmente se o contrato de arrendamento estiver em vigor há mais de 2 anos.',
          'Conta-se o prazo de arrendamento efetivo ao abrigo desse contrato; guarde o contrato, os recibos de renda e a correspondência.',
          'O direito respeita ao imóvel que você arrenda: apartamento, casa ou fração autónoma.',
          'Se for vendido um edifício inteiro sem propriedade horizontal, o direito é mais complexo: é necessária uma análise por advogado com base nos factos e na prática atual.',
          'Se for vendida uma quota, um pacote de ativos, a sociedade proprietária ou se ocorrer uma doação, a preferência automática pode não funcionar.',
          'O contrato de arrendamento pode conter condições adicionais, mas a renúncia antecipada ao direito legal é frequentemente discutível e exige avaliação jurídica.'
        ] }
      ]
    },
    {
      id: 'notice',
      title: 'Como o senhorio deve notificar o arrendatário',
      content: [
        { kind: 'paragraph', text: 'A notificação deve permitir ao arrendatário tomar uma decisão real. Na prática, o formato seguro para o senhorio é carta registada com aviso de receção ou notificação notarial/por advogado. WhatsApp sem confirmação e sem as condições do negócio é uma prova fraca.' },
        { kind: 'checklist', items: [
          'Identificação do vendedor e do imóvel: morada, fração, descrição predial, artigo matricial.',
          'Preço de venda em € e o que está exatamente incluído no preço.',
          'Condições de pagamento: depósito, sinal, crédito habitação, data da escritura.',
          'Dados do potencial comprador, se já existir contrato-promessa de compra e venda.',
          'Condições essenciais do negócio: mobiliário, estacionamento, arrecadação, prazos de desocupação, condições suspensivas.',
          'Pedido claro: se você quer exercer o direito de preferência.',
          'Prazo de resposta: 30 dias a contar da receção da notificação pelo arrendatário.',
          'Endereço/meio para responder, de preferência com entrega comprovável.'
        ] },
        { kind: 'warning', text: 'Não ignore a carta. O silêncio após uma notificação correta é normalmente considerado renúncia à preferência nas condições propostas. Se as condições estiverem incompletas, responda por escrito: peça os dados em falta e registe que o prazo não pode correr sem os elementos essenciais do negócio.' }
      ]
    },
    {
      id: 'thirty-days',
      title: '30 dias: como responder corretamente',
      content: [
        { kind: 'paragraph', text: 'O arrendatário tem, nos termos do art. 1091 Código Civil, 30 dias para o exercício do direito de preferência. O prazo conta-se a partir da receção da notificação correta, e não da data da carta. Se a carta tiver sido recebida por um vizinho/porteiro ou tiver ficado nos correios, as datas podem tornar-se uma questão de prova.' },
        { kind: 'substeps', items: [
          { id: 'accept', title: 'Se quiser comprar', content: [
            { kind: 'checklist', items: [
              'Responda por escrito: “exerço o direito de preferência”.',
              'Indique o imóvel e o preço constantes da notificação.',
              'Confirme a disponibilidade para comprar nas mesmas condições.',
              'Envie carta registada com aviso de receção ou através de advogado/solicitador.',
              'Verifique imediatamente o crédito habitação: banco, avaliação, prazo de aprovação.',
              'Peça a minuta do CPCV e os documentos do imóvel: caderneta predial, certidão permanente, licença de utilização ou documento substitutivo.'
            ] }
          ] },
          { id: 'refuse', title: 'Se não quiser comprar', content: [
            { kind: 'paragraph', text: 'Pode recusar por escrito ou simplesmente não responder no prazo de 30 dias, se a notificação estiver completa. A recusa por escrito acelera a venda e reduz o risco de conflitos, mas não assine documentos com formulações mais amplas do que o negócio concreto se não tiver a certeza.' }
          ] },
          { id: 'unclear', title: 'Se a carta estiver incompleta', content: [
            { kind: 'paragraph', text: 'Escreva que não consegue avaliar a preferência sem o preço, o imóvel, as condições de pagamento ou uma cópia do CPCV. Peça os elementos em falta. Isto é importante se, mais tarde, tiver de provar que o prazo de 30 dias não começou corretamente.' }
          ] }
        ] }
      ]
    },
    {
      id: 'sale-without-notice',
      title: 'Se o apartamento foi vendido sem si',
      content: [
        { kind: 'paragraph', text: 'Se o senhorio vendeu o imóvel sem notificação adequada ou se o negócio efetivo acabou por ser melhor para o comprador do que o que lhe foi proposto, o arrendatário pode intentar uma ação de preferência. É uma ação através da qual o tribunal substitui o comprador pelo arrendatário, desde que estejam cumpridas as condições legais.' },
        { kind: 'checklist', items: [
          'Prazo: 6 meses a contar do momento em que você tomou conhecimento dos elementos essenciais da venda.',
          'Normalmente são necessários: contrato de arrendamento, provas de residência, recibos de renda, notificações, certidão predial, cópia da escritura ou dados da compra.',
          'É preciso estar preparado para comprar nas condições reais do negócio, e não apenas para anular a venda.',
          'Nos termos do art. 1410 Código Civil, o preço deve ser depositado no prazo de 15 dias após a propositura da ação, salvo se o tribunal aplicar particularidades processuais do caso concreto.',
          'Os réus são normalmente o vendedor e o comprador.',
          'A ação é apresentada no Tribunal Judicial; na prática, é quase impossível avançar sem advogado.',
          'Se o imóvel já tiver sido revendido, hipotecado ou dividido, o litígio torna-se mais caro e complexo, por isso aja rapidamente.'
        ] },
        { kind: 'warning', text: '“Soube por um vizinho” é um mau ponto de partida se não houver provas. Peça a certidão permanente predial, guarde a data em que recebeu a informação e vá imediatamente a um advogado. Deixar passar 6 meses normalmente elimina a possibilidade de substituir o comprador.' }
      ]
    },
    {
      id: 'expat-practical',
      title: 'Prática para expats: o que ter à mão',
      content: [
        { kind: 'paragraph', text: 'Para estrangeiros, é importante não perder provas. Em Portugal, muita coisa resolve-se por cartas e registos, não por promessas verbais do agente. Se você potencialmente quer comprar a habitação arrendada, prepare a parte financeira com antecedência: NIF, morada fiscal nas Finanças, pré-aprovação bancária, fundos próprios para IMT, Imposto do Selo, notário e registo.' },
        { kind: 'checklist', items: [
          'Contrato de arrendamento com data de início e identificação da fração.',
          'Recibos de renda do Portal das Finanças ou transferências bancárias.',
          'Todas as cartas do senhorio, da agência e da administração do condomínio.',
          'Comprovativo de morada: atestado de residência, faturas, contrato de arrendamento.',
          'Certidão permanente predial: mostra o proprietário e os negócios.',
          'Caderneta predial urbana: artigo matricial e informação fiscal.',
          'Contacto de advogado ou solicitador antes do fim dos 30 dias.',
          'Tradutor, se você não lê português jurídico: erros no prazo saem caros.'
        ] },
        { kind: 'warning', text: 'A preferência do arrendatário não congela a venda para sempre. Se você quiser comprar, mas não conseguir comprovar financiamento, o senhorio pode avançar após o decurso correto dos 30 dias. O crédito habitação em Portugal demora frequentemente 4–8 semanas, por isso 30 dias é um prazo curto.' }
      ]
    }
  ],
  costs: [
    { label: 'Certidão permanente predial online', amountEUR: 15, note: 'Normalmente dá acesso durante 6 meses ao registo no Registo Predial; o preço pode variar conforme o tipo de pedido.' },
    { label: 'Consulta de advogado sobre preferência', amountEURMin: 100, amountEURMax: 250, note: 'Mercado privado típico para uma primeira análise de documentos; litígios complexos são mais caros.' },
    { label: 'Litígio judicial de ação de preferência', amountEURMin: 1500, amountEURMax: 6000, note: 'Estimativa para orçamento: advogado, taxas de justiça, registos, traduções. Não inclui o preço de compra, que deve estar preparado para depositar.' }
  ],
  sources: [
    {
      title: 'Código Civil — art. 416–418, 1091 e 1410 sobre preferência e arrendamento',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1966-34509075',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Lei 64/2018 — alterações ao direito de preferência dos arrendatários',
      url: 'https://diariodarepublica.pt/dr/detalhe/lei/64-2018-116068879',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'CMS Portugal — Alterações ao direito de preferência dos arrendatários',
      url: 'https://cms.law/pt/prt/publication/alteracoes-ao-direito-de-preferencia-dos-arrendatarios',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Casa Pronta — serviço de compra e venda de imóveis e registos',
      url: 'https://www.casapronta.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
