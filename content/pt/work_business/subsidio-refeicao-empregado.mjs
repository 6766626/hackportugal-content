export default {
  editorialVoice: 'hackportugal',
  id: 'subsidio-refeicao-empregado',
  categoryId: 'work_business',
  title: 'Subsídio de Refeição: alimentação paga pelo empregador sem IRS e Segurança Social',
  tldr: 'O Subsídio de Refeição é uma compensação diária para alimentação. No sector privado, não é obrigatório pela regra geral do Código do Trabalho, mas está frequentemente previsto no contrato de trabalho ou em CCT; para os funcionários da Administração Pública aplica-se 6,15 € por dia de trabalho. Em 2026, o pagamento em dinheiro está isento de IRS/Segurança Social até 6,15 €, e o cartão/vale refeição até 10,46 €. Tudo o que exceda o limite é considerado salário e está sujeito a imposto e contribuições.',
  tags: ['trabalho', 'irs', 'refeição', 'salário'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que é o Subsídio de Refeição',
      content: [
        { kind: 'paragraph', text: 'O Subsídio de Refeição não é um «bónus», mas sim uma linha separada no recibo de vencimento: o empregador paga um montante fixo por cada dia efectivamente trabalhado, para cobrir a alimentação.' },
        { kind: 'paragraph', text: 'Na Administração Pública, o valor de base desde 1 de janeiro de 2026 é de 6,15 € por dia. Este valor é frequentemente usado como referência também nas empresas privadas, mas um empregador privado só é obrigado a pagar subsídio de refeição se tal estiver escrito no seu contrato de trabalho, regulamento interno ou CCT aplicável — contrato coletivo de trabalho.' },
        { kind: 'checklist', items: [
          'Normalmente é pago por dias de trabalho, e não por fins de semana.',
          'Normalmente não é pago durante férias, baixa médica e ausência sem remuneração.',
          'Pode ser pago em dinheiro juntamente com o salário.',
          'Pode ser pago em cartão refeição ou sob a forma de vale refeição.',
          'Cartões frequentes: Edenred, Pluxee (ex-Sodexo), Coverflex, Euroticket.',
          'O montante deve estar visível no payslip/recibo de vencimento numa linha separada.',
          'No part-time há uma regra do Código do Trabalho: se o subsídio de refeição estiver previsto no CCT ou for normalmente pago na empresa, o trabalhador a tempo parcial também tem direito a ele; só se o período normal de trabalho diário for inferior a 5 horas é que o montante é calculado proporcionalmente ao período normal de trabalho semanal face ao tempo completo.'
        ] }
      ]
    },
    {
      id: 'tax-free-limits-2026',
      title: 'Limites sem impostos em 2026',
      content: [
        { kind: 'paragraph', text: 'Para efeitos de IRS e Segurança Social, o que importa não é apenas a existência do pagamento, mas a forma de pagamento e o limite diário. Em 2026 aplicam-se estes limites práticos: dinheiro — até 6,15 € por dia; cartão/vale refeição — até 10,46 € por dia.' },
        { kind: 'checklist', items: [
          'Dinheiro 6,15 € por dia: 0 € de IRS e 0 € de Segurança Social.',
          'Dinheiro 7 € por dia: 6,15 € isentos, 0,85 € é considerado salário.',
          'Cartão refeição 10,46 € por dia: 0 € de IRS e 0 € de Segurança Social.',
          'Cartão refeição 11 € por dia: 10,46 € isentos, 0,54 € é considerado salário.',
          'O montante acima do limite entra na base de incidência contributiva.',
          'Sobre o excedente é retido IRS de acordo com a sua taxa de withholding tax.',
          'Sobre o excedente aplica-se normalmente Segurança Social: 11% para o trabalhador e 23,75% para o empregador.',
          'O limite aplica-se por dia, e não como um «banco» mensal sem ligação aos dias.'
        ] },
        { kind: 'warning', text: 'O limite em dinheiro de 6,00 € do ano passado já não é atual para 2026. Para a prática corrente, utilize 6,15 € em dinheiro e 10,46 € em cartão/vale.' }
      ]
    },
    {
      id: 'cash-vs-card',
      title: 'Em dinheiro ou em cartão: o que compensa mais',
      content: [
        { kind: 'paragraph', text: 'Se o empregador estiver disposto a pagar mais de 6,15 € por dia, o cartão é quase sempre mais vantajoso: o limite isento é mais alto — 10,46 € em vez de 6,15 €. Com 22 dias úteis, isto pode representar até 230,12 € por mês sem IRS e Segurança Social através de cartão refeição, contra 135,30 € em dinheiro.' },
        { kind: 'checklist', items: [
          'O dinheiro é mais cómodo: o valor entra na conta bancária normal.',
          'O dinheiro acima de 6,15 € perde rapidamente vantagem por causa do IRS e da Segurança Social.',
          'O cartão refeição é mais vantajoso para montantes entre 6,16 € e 10,46 € por dia.',
          'O cartão é normalmente aceite em supermercados, restaurantes, cafés, take-away e food delivery, se o MCC do comerciante for adequado.',
          'O cartão não pode ser normalmente usado para renda, combustível, roupa ou levantamentos de numerário.',
          'O saldo do cartão é normalmente transitado para o mês seguinte, mas verifique as condições do prestador.',
          'Em caso de cessação do contrato, o saldo não utilizado do cartão normalmente permanece com o trabalhador, mas o acesso depende das condições do emitente.'
        ] },
        { kind: 'warning', text: 'Não confunda cartão refeição com um cartão bancário normal. A isenção fiscal depende de se tratar precisamente de um meal card/voucher com utilização limitada à alimentação.' }
      ]
    },
    {
      id: 'private-sector-rights',
      title: 'Se o empregador não pagar',
      content: [
        { kind: 'paragraph', text: 'No sector privado em Portugal, não existe uma regra universal segundo a qual «todos os trabalhadores têm obrigatoriamente direito a subsídio de refeição». Por isso, o primeiro passo é verificar documentos, e não rumores.' },
        { kind: 'checklist', items: [
          'Abra o contrato de trabalho: existe uma linha sobre subsídio de refeição, valor diário, dinheiro/cartão.',
          'Verifique o CCT do seu sector: hotelaria, construção, limpeza, call center, IT outsourcing e outros sectores podem ter condições obrigatórias.',
          'Veja o recibo de vencimento: o pagamento deve estar numa linha separada.',
          'Compare o número de dias pagos com os dias reais de trabalho do mês.',
          'Verifique se o empregador incluiu a alimentação dentro do base salary — isto é importante para subsídio de férias, natal e compensações.',
          'Se a condição já constar do contrato ou do CCT, o empregador não deve simplesmente retirar o pagamento de forma unilateral.',
          'Se as condições forem incumpridas, peça primeiro uma explicação por escrito aos HR/payroll.',
          'Em caso de incumprimento sistemático, pode contactar a ACT — Autoridade para as Condições do Trabalho.'
        ] },
        { kind: 'warning', text: 'A frase «isto é um benefit, por isso podemos cancelar quando quisermos» nem sempre é correcta. Se o pagamento estiver previsto no contrato, no CCT ou se tiver tornado uma parte estável das condições de trabalho, é necessária uma verificação jurídica antes da sua eliminação.' }
      ]
    },
    {
      id: 'how-to-read-payslip',
      title: 'Como verificar o recibo de vencimento',
      content: [
        { kind: 'paragraph', text: 'No payslip, procure uma linha separada como Subsídio de Refeição, Subs. Alimentação, Ticket Refeição ou Cartão Refeição. Ao lado, normalmente aparecem o número de dias e a taxa diária.' },
        { kind: 'checklist', items: [
          'Número de dias: normalmente 20–23, dependendo do mês e do seu horário.',
          'Taxa diária: por exemplo 6,15 €, 7,63 €, 9,60 € ou 10,46 €.',
          'Forma de pagamento: juntamente com o salário líquido ou através de carregamento separado no cartão.',
          'Isento: a parte até ao limite não deve entrar em IRS/Segurança Social.',
          'Tributável: apenas o excedente acima de 6,15 € em dinheiro ou 10,46 € em cartão deve ser tributado.',
          'Se esteve de férias durante todo o mês, o subsídio de refeição será normalmente 0 €.',
          'Se está em teletrabalho/remote, o simples facto de trabalhar a partir de casa não é, em regra, motivo para retirar o subsídio de refeição quando este já é devido pelo contrato, CCT, prática da empresa ou é pago a trabalhadores comparáveis no escritório. Mas se na empresa não existe sequer direito a subsídio de refeição, o teletrabalho por si só não o cria.',
          'Guarde os payslips: serão úteis em conflitos com HR, ACT e na verificação do IRS.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Limite isento em dinheiro', amountEUR: 6.15, note: 'Por dia, se o pagamento for feito em dinheiro juntamente com o salário.' },
    { label: 'Limite isento em cartão/vale refeição', amountEUR: 10.46, note: 'Por dia, se for utilizado meal card ou voucher com finalidade limitada.' },
    { label: 'Exemplo para 22 dias úteis em dinheiro', amountEUR: 135.30, note: '22 × 6,15 € sem IRS e Segurança Social.' },
    { label: 'Exemplo para 22 dias úteis em cartão', amountEUR: 230.12, note: '22 × 10,46 € sem IRS e Segurança Social.' }
  ],
  sources: [
    {
      title: 'Portal das Finanças — Código do IRS, art. 2: tributação do subsídio de refeição',
      url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/cirs_rep/Pages/irs2.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Segurança Social — enquadramento contributivo dos trabalhadores por conta de outrem',
      url: 'https://www.seg-social.pt/trabalhadores-por-conta-de-outrem',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DRE — Portaria n.º 51-B/2026/1: atualização do subsídio de refeição na Administração Pública para 6,15 €',
      url: 'https://diariodarepublica.pt/dr/detalhe/portaria/51-b-2026-1031110274',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-05-30'
    },
    {
      title: 'DRE — Código do Trabalho, Lei n.º 7/2009',
      url: 'https://dre.pt/dre/legislacao-consolidada/lei/2009-34546475',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
