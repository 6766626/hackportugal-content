export default {
  editorialVoice: 'hackportugal',
  id: 'subsidios-natal-ferias',
  categoryId: 'work_business',
  title: 'Subsídio de Férias e Subsídio de Natal — 13.º e 14.º salários',
  tldr: 'Em Portugal, um trabalhador com contrato de trabalho recebe normalmente 14 salários por ano: 12 mensais, Subsídio de Férias e Subsídio de Natal. O Natal é pago até 15 de dezembro; as Férias são pagas antes do início das férias, salvo acordo escrito diferente. No ano de admissão/cessação, os valores são calculados proporcionalmente ao tempo trabalhado. Ambos os subsídios estão sujeitos a IRS e Segurança Social, mas para efeitos de IRS a retenção é calculada separadamente. Nos recibos verdes não existe 13.º/14.º salário automático.',
  tags: ['salário', 'trabalho', 'irs', 'férias'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que é: 13.º e 14.º salários',
      content: [
        { kind: 'paragraph', text: 'Subsídio de Natal — subsídio de Natal, na prática o 13.º salário. Subsídio de Férias — subsídio de férias, na prática o 14.º salário. Para trabalhadores por conta de outrem, isto não é um bónus “por boa vontade”, mas uma obrigação do empregador nos termos do Código do Trabalho.' },
        { kind: 'paragraph', text: 'Se o contrato indicar “salário anual 25 200 € em 14 meses”, isto normalmente significa 1 800 € brutos por mês × 14. Se indicar “em 12 meses”, confirme se os subsídios estão incluídos no valor mensal através de duodécimos ou se se trata de uma violação/formulação incompleta.' },
        { kind: 'checklist', items: [
          'Subsídio de Natal: no mínimo, é igual a 1 remuneração base mensal por um ano completo de trabalho.',
          'Subsídio de Férias: no mínimo, é igual à remuneração do período de férias e ao subsídio de férias segundo as regras do art. 264 Código do Trabalho.',
          'O direito existe para trabalhadores com contrato de trabalho: sem termo, termo certo, termo incerto, full-time e part-time.',
          'Quem trabalha em part-time recebe proporcionalmente ao seu salário e horário.',
          'Um contrato temporário não elimina o direito a ambos os subsídios.',
          'Estagiários com um verdadeiro contrato de trabalho têm este direito; em programas de formação/profissionais, verifique o regime específico.',
          'Nos recibos verdes, freelancers e prestadores de serviços não existe direito automático — apenas pode ser incorporado no preço dos serviços.'
        ] }
      ]
    },
    {
      id: 'when-paid',
      title: 'Quando devem pagar 📅',
      content: [
        { kind: 'paragraph', text: 'O Subsídio de Natal, nos termos do art. 263 Código do Trabalho, deve ser pago até 15 de dezembro de cada ano. Este é o prazo-limite, não uma “data aproximada”. O empregador pode pagar mais cedo, por exemplo juntamente com o salário de novembro.' },
        { kind: 'paragraph', text: 'O Subsídio de Férias, nos termos do art. 264 Código do Trabalho, é pago antes do início do período de férias. Se as férias forem repartidas, na prática o pagamento pode estar associado ao período principal de férias ou às regras no contrato / instrumento de regulamentação coletiva de trabalho.' },
        { kind: 'checklist', items: [
          'Vai de férias a 1 de agosto — o subsídio de férias deve normalmente chegar antes de 1 de agosto.',
          'Se as férias estiverem acordadas em vários períodos, confirme as regras internas de payroll.',
          'Se não gozar férias por cessação do contrato, as férias não gozadas e os respetivos valores são pagos no acerto de contas.',
          'No ano de admissão, Natal e Férias nem sempre são iguais a uma remuneração mensal completa — aplica-se a proporção.',
          'No ano de cessação, são pagas as partes proporcionais do ano corrente e a compensação por férias não gozadas.',
          'No recibo de vencimento, os valores devem aparecer em linhas separadas, e não escondidos em “prémio”.'
        ] },
        { kind: 'warning', text: 'Se o empregador disser “em Portugal temos 12 salários, não há 13.º nem 14.º”, isso é um sinal de alerta. A exceção é quando os subsídios são legalmente pagos em parcelas integradas nos 12 pagamentos mensais, ou seja, em duodécimos, e isso está visível no payslip.' }
      ]
    },
    {
      id: 'prorata',
      title: 'Como calcular proporcionalmente',
      content: [
        { kind: 'paragraph', text: 'Para um ano civil completo, cada subsídio é normalmente igual a uma remuneração mensal bruta. Se não trabalhou o ano inteiro, o valor é calculado proporcionalmente ao tempo trabalhado. Fórmula prática para o Natal: salário base mensal × meses trabalhados no ano / 12.' },
        { kind: 'substeps', items: [
          { id: 'example-hire', title: 'Exemplo: admissão a 1 de abril', content: [
            { kind: 'paragraph', text: 'Salário de 2 000 € brutos. Em 2026 trabalha de abril a dezembro, ou seja, 9 meses. Subsídio de Natal ≈ 2 000 € × 9 / 12 = 1 500 € brutos. Os direitos a férias no primeiro ano também se formam proporcionalmente: normalmente 2 dias úteis de férias por cada mês de contrato, com o limite de 20 dias no primeiro ano.' }
          ] },
          { id: 'example-exit', title: 'Exemplo: cessação a 30 de junho', content: [
            { kind: 'paragraph', text: 'Salário de 2 000 € brutos. Para o ano corrente, Natal ≈ 2 000 € × 6 / 12 = 1 000 € brutos. Além disso, o empregador deve fechar os direitos a férias: férias não gozadas, subsídio de férias pelos dias já vencidos e valores proporcionais do ano corrente.' }
          ] }
        ] },
        { kind: 'checklist', items: [
          'Confirme a data de início do contrato, e não a data do primeiro dia de trabalho “combinado”.',
          'Veja o salário base, suplementos regulares e as regras do seu acordo coletivo, se aplicável.',
          'Prémios, bónus e ajudas de custo nem sempre entram na base de cálculo dos subsídios.',
          'Baixa médica, parental leave e suspensões prolongadas podem influenciar o cálculo — consulte o regime da Segurança Social e o payroll.',
          'Em caso de cessação, peça o detalhe do acerto de contas: férias, Natal, Férias, compensações, retenções IRS/SS.',
          'Guarde os recibos de vencimento e comprovativo de pagamento pelo menos até à conclusão de uma eventual verificação fiscal de IRS.'
        ] }
      ]
    },
    {
      id: 'duodecimos',
      title: 'Duodécimos: quando pagam em parcelas',
      content: [
        { kind: 'paragraph', text: 'Duodécimos é o pagamento do 13.º e/ou 14.º salário em 1/12 todos os meses. Nesse caso, o líquido mensal parece mais alto, mas em dezembro e antes das férias pode não haver um pagamento separado elevado, ou este será menor.' },
        { kind: 'paragraph', text: 'No setor privado, os duodécimos devem assentar no contrato, regulamentação coletiva ou acordo escrito/prática de payroll clara. O empregador não deve simplesmente fazer desaparecer o pagamento integral sem mostrar as parcelas mensais no recibo de vencimento.' },
        { kind: 'checklist', items: [
          'No payslip, procure linhas como “Subsídio de Natal - duodécimos” e “Subsídio de Férias - duodécimos”.',
          '1/12 de 2 000 € = 166,67 € brutos por mês por um subsídio.',
          'Se ambos os subsídios forem pagos integralmente em duodécimos: 166,67 € + 166,67 € = 333,34 € brutos adicionais por mês com salário de 2 000 €.',
          'Se pagarem 50% em duodécimos, os restantes 50% devem chegar nos prazos normais.',
          'Compare o anual bruto, e não apenas o líquido mensal: 2 000 € × 14 = 28 000 € por ano.',
          'Ao mudar de emprego, os duodécimos tornam o acerto final mais complexo: confirme que não recebeu a mais nem a menos face às proporções.'
        ] },
        { kind: 'warning', text: 'Não confunda “12 pagamentos” numa oferta com ausência de subsídios. Para um trabalhador em Portugal, o que importa é o anual bruto e o mecanismo de pagamento: 14 meses, 12 meses com duodécimos ou um esquema misto.' }
      ]
    },
    {
      id: 'tax-social-security',
      title: 'Impostos: IRS e Segurança Social',
      content: [
        { kind: 'paragraph', text: 'Ambos os subsídios são tributados como rendimento do trabalho dependente Categoria A: IRS e contribuições para a Segurança Social. A contribuição normal do trabalhador para a Segurança Social é de 11% sobre o bruto; a do empregador é normalmente 23,75%. As contribuições são retidas no payroll.' },
        { kind: 'paragraph', text: 'Para efeitos de IRS, a retenção sobre o Subsídio de Natal e o Subsídio de Férias é calculada separadamente do salário mensal normal. Ou seja, o empregador não deve somar “salário + subsídio” e aplicar ao total uma taxa mensal de retenção inflacionada. O imposto final será, em qualquer caso, recalculado na declaração anual de IRS.' },
        { kind: 'checklist', items: [
          'No mês de pagamento do subsídio, o líquido será inferior ao bruto devido ao IRS e aos 11% de Segurança Social.',
          'Se tiver duodécimos, o imposto e a Segurança Social são retidos mensalmente sobre essas parcelas.',
          'Na Modelo 3 IRS do ano, os subsídios entram no rendimento total do trabalho.',
          'A taxa de retenção depende da situação familiar, dependentes, Continente/Açores/Madeira e das tabelas de retenção na fonte do ano em causa.',
          'O salário mínimo SMN em 2026 é 920 €; mesmo com SMN, o direito aos subsídios mantém-se.',
          'Se o empregador pagar “por fora” sem payslip, isso é um risco para a autorização de residência, IRS, Segurança Social e prestações futuras.'
        ] }
      ]
    },
    {
      id: 'problems',
      title: 'Se não pagam ou calculam mal',
      content: [
        { kind: 'paragraph', text: 'Comece por pedir ao HR um cálculo por escrito: salário base, período trabalhado, férias vencidas, férias proporcionais, Natal proporcional, retenções IRS e Segurança Social. Muitas vezes o erro está relacionado com duodécimos ou com a data de início do contrato.' },
        { kind: 'checklist', items: [
          'Reúna o contrato de trabalho e todas as adendas.',
          'Descarregue os recibos de vencimento de todo o ano.',
          'Guarde as entradas bancárias do salário.',
          'Confirme se existe acordo coletivo no seu setor.',
          'Pergunte por escrito ao HR qual é a base legal do cálculo.',
          'Se não houver resposta — apresente um pedido/reclamação à ACT.',
          'Em caso de cessação, não assine uma declaração de quitação se o acerto não for claro ou se os valores forem discutíveis.',
          'Para valores elevados, fale com um advogado ou sindicato antes de assinar qualquer acordo.'
        ] },
        { kind: 'warning', text: 'A ACT é útil para queixas sobre violações da legislação laboral, mas não substitui um jurista individual numa disputa sobre despedimento complexo, non-compete, compensação ou payroll internacional.' }
      ]
    }
  ],
  sources: [
    {
      title: 'Código do Trabalho — Lei n.º 7/2009, arts. 263 e 264',
      url: 'https://dre.pt/dre/legislacao-consolidada/lei/2009-34546475',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ACT — Autoridade para as Condições do Trabalho',
      url: 'https://www.act.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Segurança Social — trabalhadores por conta de outrem',
      url: 'https://www.seg-social.pt/trabalhadores-por-conta-de-outrem',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças — IRS retenção na fonte',
      url: 'https://www.portaldasfinancas.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
