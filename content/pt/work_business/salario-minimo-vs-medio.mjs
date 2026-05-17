export default {
  editorialVoice: 'hackportugal',
  id: 'salario-minimo-vs-medio',
  categoryId: 'work_business',
  title: 'Salário Mínimo Nacional 2026: 920 € e comparação com salário médio',
  tldr: 'Em 2026, o Salário Mínimo Nacional em Portugal é de 920 € brutos por mês, normalmente com 14 pagamentos por ano: 12 salários + subsídio de férias + subsídio de Natal. O valor líquido, a tempo inteiro e sem retenção de IRS, é de cerca de 818,80 € por pagamento depois dos 11% para a Segurança Social. Para o empregador, este salário custa 1 138,50 € por pagamento devido à contribuição de 23,75%. O salário médio ronda os 1 300 € brutos, enquanto um software developer em Lisboa fica aproximadamente nos 2 500–4 500 € brutos.',
  tags: ['smn', 'salário', 'segurança-social', 'trabalho'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-smn',
      title: 'O que é o SMN em 2026',
      content: [
        { kind: 'paragraph', text: 'O Salário Mínimo Nacional, oficialmente retribuição mínima mensal garantida, é o salário bruto mensal mínimo para trabalho a tempo inteiro. Em 2026, o valor é 920 €.' },
        { kind: 'paragraph', text: 'Em Portugal, o salário é normalmente calculado não como 12, mas como 14 pagamentos por ano: 12 meses normais, subsídio de férias e subsídio de Natal. Por isso, o mínimo anual a tempo inteiro é 920 € × 14 = 12 880 € brutos.' },
        { kind: 'checklist', items: [
          'SMN 2026: 920 € brutos por mês',
          'SMN anual: 12 880 € brutos com 14 pagamentos',
          'O mínimo horário não é deduzido diretamente da lei da mesma forma para todos os horários: consulte o contrato de trabalho e o instrumento de regulamentação coletiva, se existir',
          'O part-time é calculado proporcionalmente: 50% do horário ≈ 460 € brutos',
          'O subsídio de alimentação não substitui o salário e não entra no SMN',
          'Comissões, bónus e prémios não devem mascarar uma remuneração abaixo do mínimo',
          'Estágios, recibos verdes e prestação de serviços são regimes separados; o SMN, enquanto garantia laboral, não se aplica automaticamente a estes casos'
        ] }
      ]
    },
    {
      id: 'net-reality',
      title: 'Quanto fica líquido',
      content: [
        { kind: 'paragraph', text: 'O trabalhador paga 11% para a Segurança Social. Sobre 920 €, isso corresponde a 101,20 €. Se não houver retenção de IRS, o pagamento líquido fica em cerca de 818,80 €.' },
        { kind: 'paragraph', text: 'Isto não significa que o IRS anual seja sempre zero para qualquer família: o resultado depende do estatuto, dependentes, deduções, região e outros rendimentos. Mas, para um salário mínimo numa situação standard, a retenção de IRS é geralmente inexistente ou mínima.' },
        { kind: 'checklist', items: [
          'Bruto: 920 €',
          'Contribuição do trabalhador para a Segurança Social 11%: 101,20 €',
          'Referência líquida por um pagamento: 818,80 €',
          'Referência líquida por 14 pagamentos: 11 463,20 € antes de eventual acerto final de IRS',
          'O empregador paga separadamente 23,75% de Segurança Social: 218,50 €',
          'Custo total para o empregador: 1 138,50 € por pagamento',
          'Custo anual para o empregador: 15 939 €',
          'Se lhe propuserem 920 € “líquidos”, peça um cálculo escrito do bruto, da SS e do IRS'
        ] },
        { kind: 'warning', text: 'Em Portugal, o “salário líquido” é muitas vezes calculado de forma aproximada em conversa. Juridicamente, importam o bruto, a categoria profissional, o horário, os 14 pagamentos, a SS e a tabela de retenção na fonte de IRS. Verifique o payslip: recibo de vencimento.' }
      ]
    },
    {
      id: 'vs-average',
      title: 'SMN contra salário médio',
      content: [
        { kind: 'paragraph', text: 'A referência de salário médio, frequentemente usada em comparações do dia a dia, é de cerca de 1 300 € brutos por mês para remuneração regular. Isto não é um “rendimento médio confortável”, mas uma referência estatística: em Lisboa e no Porto, a renda absorve rapidamente a diferença.' },
        { kind: 'checklist', items: [
          'SMN 2026: 920 € brutos / cerca de 818,80 € líquidos por pagamento',
          'Salário médio: cerca de 1 300 € brutos / aproximadamente 1 020–1 100 € líquidos por pagamento, dependendo do IRS',
          'Diferença bruta entre 920 € e 1 300 €: 380 €',
          'Depois da SS e do IRS, a diferença líquida é muitas vezes menor do que parece pelo bruto',
          '1 300 € × 14 = 18 200 € brutos por ano',
          'Com 1 300 €, o trabalhador paga 143 € de SS por pagamento',
          'Custo para o empregador de 1 300 €: 1 608,75 € por pagamento',
          'Para verificações de imigração, bancárias e de arrendamento, normalmente analisam rendimento bruto estável e contrato, não apenas o “líquido”'
        ] },
        { kind: 'paragraph', text: 'Se comparar ofertas, coloque tudo na mesma base: 12 ou 14 pagamentos, se o subsídio de alimentação está incluído, se há prémios, quais são as horas, remote/hybrid, contrato a termo ou sem termo.' }
      ]
    },
    {
      id: 'lisbon-tech',
      title: 'Referências para software developers em Lisboa',
      content: [
        { kind: 'paragraph', text: 'Para um software developer em Lisboa em 2026, a faixa típica de mercado é muito superior ao SMN: cerca de 2 500–4 500 € brutos por mês para funções middle/senior com contrato português. Junior, support e QA manual podem ficar abaixo; international remote e contractor podem ficar acima, mas com outros impostos e riscos.' },
        { kind: 'checklist', items: [
          '2 500 € brutos × 14 = 35 000 € por ano',
          '4 500 € brutos × 14 = 63 000 € por ano',
          'SS do trabalhador: 11% sobre o salário',
          'SS do empregador: 23,75% além do salário',
          'O líquido com 2 500 € brutos fica muitas vezes em cerca de 1 650–1 850 € por pagamento, dependendo do IRS e da situação familiar',
          'O líquido com 4 500 € brutos fica muitas vezes em cerca de 2 650–3 000 € por pagamento, dependendo do IRS e das deduções',
          'Stock options, prémios, ajudas de custo e meal allowance devem ser calculados separadamente: o regime fiscal é diferente',
          'Se a empresa propuser recibos verdes em vez de contrato de trabalho, compare não o bruto, mas o annual net total depois de IRS, IVA, SS e da ausência de paid holidays'
        ] },
        { kind: 'warning', text: 'Uma oferta de 2 500 € como trabalhador por conta de outrem e uma invoice de 2 500 € como recibos verdes não são a mesma coisa. O trabalhador independente não tem 13.º/14.º salário, férias pagas, proteção contra despedimento nem SS do empregador; isso deve ser compensado por uma taxa mais elevada.' }
      ]
    },
    {
      id: 'how-to-check-contract',
      title: 'Como verificar o seu contrato e payslip',
      content: [
        { kind: 'paragraph', text: 'Verificação mínima: no contrato de trabalho deve constar o salário bruto não inferior ao SMN para tempo inteiro, horário de trabalho, categoria, local de trabalho, tipo de contrato e regras de pagamento.' },
        { kind: 'checklist', items: [
          'Verifique se o salário base em full-time não é inferior a 920 €',
          'Confirme se são pagos 14 pagamentos ou 12 com duodécimos',
          'Verifique se o subsídio de alimentação está indicado separadamente do salário base',
          'Compare o recibo de vencimento: base, SS 11%, IRS, meal allowance, overtime',
          'As horas extraordinárias devem aparecer separadamente, e não “entrar” silenciosamente no mínimo',
          'Se trabalhar à noite, em feriados ou por turnos, verifique os acréscimos',
          'Se existir contrato coletivo, o sector/categoria pode exigir salário acima do SMN',
          'Em caso de dúvida, contacte a ACT ou use o Livro de Reclamações eletrónico'
        ] },
        { kind: 'paragraph', text: 'A ACT é a principal entidade para infrações laborais: falta de pagamento de salário, remuneração abaixo do SMN, ausência de recibo de vencimento, recibos verdes fictícios, horários ilegais e pressão para assinar “por mútuo acordo”.' }
      ]
    }
  ],
  costs: [
    { label: 'SMN 2026, bruto por pagamento', amountEUR: 920, note: 'Normalmente 14 pagamentos por ano com contrato de trabalho a tempo inteiro' },
    { label: 'SMN 2026, referência líquida por pagamento', amountEUR: 818.8, note: 'Depois de 11% para a Segurança Social; o IRS depende da situação, mas no salário mínimo muitas vezes não há retenção' },
    { label: 'Custo do SMN para o empregador por pagamento', amountEUR: 1138.5, note: '920 € + 23,75% Segurança Social' },
    { label: 'Referência de salário médio', amountEUR: 1300, note: 'Bruto por mês; o líquido depende da tabela de retenção de IRS e da situação familiar' },
    { label: 'Software developer em Lisboa, referência bruta', amountEURMin: 2500, amountEURMax: 4500, note: 'Para contratos de trabalhador por conta de outrem middle/senior; faixa de mercado, não mínimo legal' }
  ],
  sources: [
    { title: 'DRE — Decreto-Lei sobre a atualização da retribuição mínima mensal garantida', url: 'https://dre.pt/dre/detalhe/decreto-lei', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ACT — informação sobre retribuição mínima mensal garantida e direitos laborais', url: 'https://www.act.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Segurança Social — contribuições para trabalhadores por conta de outrem', url: 'https://www.seg-social.pt/trabalhadores-por-conta-de-outrem', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'INE — estatísticas de remunerações em Portugal', url: 'https://www.ine.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
