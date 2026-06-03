export default {
  editorialVoice: 'hackportugal',
 id: 'subsidios-natal-ferias',
  categoryId: 'work_business',
  title: 'Subsídio de Férias e Subsídio de Natal — 13.º e 14.º salários',
  tldr: 'Em Portugal, um trabalhador com contrato de trabalho tem normalmente 14 salários por ano: 12 mensais, Subsídio de Férias e Subsídio de Natal. O Natal é pago até 15 de dezembro; o Férias é pago antes do início das férias, salvo outro acordo escrito. No ano de admissão/cessação, os valores são calculados proporcionalmente ao tempo trabalhado. Ambos os subsídios estão sujeitos a IRS e Segurança Social, mas a retenção de IRS é calculada separadamente. Nos recibos verdes não existe 13.º/14.º salário automático.',
  tags: ['salário', 'trabalho', 'irs', 'férias'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que são: 13.º e 14.º salários',
      content: [
        { kind: 'paragraph', text: 'Subsídio de Natal — subsídio de Natal, na prática o 13.º salário. Subsídio de Férias — subsídio de férias, na prática o 14.º salário. Para trabalhadores por conta de outrem, isto não é um bónus “por boa vontade”, mas uma obrigação do empregador ao abrigo do Código do Trabalho.' },
        { kind: 'paragraph', text: 'Se o contrato indicar “salário anual 25 200 € em 14 meses”, isto normalmente significa 1 800 € brutos por mês × 14. Se indicar “em 12 meses”, verifique se os subsídios estão incluídos no valor mensal através de duodécimos ou se se trata de uma irregularidade/formulação incompleta.' },
        { kind: 'checklist', items: [
          'Subsídio de Natal: no mínimo, equivale a 1 remuneração base mensal por um ano completo de trabalho.',
          'Subsídio de Férias: no mínimo, equivale à remuneração do período de férias e ao subsídio de férias segundo as regras do art. 264 Código do Trabalho.',
          'O direito existe para trabalhadores com contrato de trabalho: sem termo, termo certo, termo incerto, full-time e part-time.',
          'Quem trabalha part-time recebe proporcionalmente ao seu salário e horário.',
          'Um contrato temporário não elimina o direito a ambos os subsídios.',
          'Estagiários com um contrato de trabalho real têm direito; em programas educativos/profissionais, consulte o regime concreto.',
          'Nos recibos verdes, freelancers e prestadores de serviços não há direito automático — apenas pode ser incorporado no preço dos serviços.'
        ] }
      ]
    },
    {
      id: 'when-paid',
      title: 'Quando devem ser pagos 📅',
      content: [
        { kind: 'paragraph', text: 'O Subsídio de Natal, nos termos do art. 263 Código do Trabalho, deve ser pago até 15 de dezembro de cada ano. Este é o prazo-limite, não uma “data aproximada”. O empregador pode pagar mais cedo, por exemplo com o salário de novembro.' },
        { kind: 'paragraph', text: 'O Subsídio de Férias, nos termos do art. 264 Código do Trabalho, é pago antes do início do período de férias. Se as férias forem divididas em partes, na prática o pagamento pode estar associado ao período principal de férias ou às regras previstas no contrato / instrumento de regulamentação coletiva de trabalho.' },
        { kind: 'checklist', items: [
          'Vai de férias a 1 de agosto — o subsídio de férias normalmente deve chegar antes de 1 de agosto.',
          'Se as férias forem acordadas para vários períodos, verifique as regras internas de payroll.',
          'Se não gozar férias por causa do fim do contrato, as férias não gozadas e os montantes correspondentes são pagos no acerto final.',
          'No ano de admissão, Natal e Férias nem sempre equivalem a um salário mensal completo — aplica-se a proporcionalidade.',
          'No ano de cessação, são pagas as partes proporcionais do ano em curso e a compensação por férias não gozadas.',
          'No recibo de vencimento, os montantes devem estar discriminados em linhas separadas, e não escondidos como “prémio”.'
        ] },
        { kind: 'warning', text: 'Se o empregador disser “em Portugal temos 12 salários, não há 13.º nem 14.º”, é um sinal de alerta. A exceção é quando os subsídios são legalmente pagos em prestações integradas nos 12 pagamentos mensais, ou seja, em duodécimos, e isso aparece no payslip.' }
      ]
    },
    {
      id: 'prorata',
      title: 'Como calcular proporcionalmente',
      content: [
        { kind: 'paragraph', text: 'Para um ano civil completo, cada subsídio normalmente equivale a um salário mensal bruto. Se não trabalhou o ano inteiro, o valor é calculado proporcionalmente ao tempo trabalhado. Fórmula prática para o Natal: remuneração base mensal × meses trabalhados no ano / 12.' },
        { kind: 'substeps', items: [
          { id: 'example-hire', title: 'Exemplo: admissão a 1 de abril', content: [
            { kind: 'paragraph', text: 'Salário de 2 000 € brutos. Em 2026 trabalha de abril a dezembro, ou seja, 9 meses. Subsídio de Natal ≈ 2 000 € × 9 / 12 = 1 500 € brutos. Os direitos a férias no primeiro ano também se formam proporcionalmente: normalmente 2 dias úteis de férias por cada mês de contrato, com limite de 20 dias no primeiro ano.' }
          ] },
          { id: 'example-exit', title: 'Exemplo: cessação a 30 de junho', content: [
            { kind: 'paragraph', text: 'Salário de 2 000 € brutos. Pelo ano em curso, Natal ≈ 2 000 € × 6 / 12 = 1 000 € brutos. Além disso, o empregador deve fechar os direitos de férias: férias não gozadas, subsídio de férias pelos dias já vencidos e montantes proporcionais do ano em curso.' }
          ] }
        ] },
        { kind: 'checklist', items: [
          'Verifique a data de início do contrato, não a data do primeiro dia de trabalho “combinada”.',
          'Consulte o salário base, suplementos regulares e as regras do seu acordo coletivo, se for aplicável.',
          'Prémios, bónus e ajudas de custo nem sempre entram na base de cálculo dos subsídios.',
          'Baixa médica, parental leave e suspensões prolongadas podem influenciar o cálculo — consulte o regime da Segurança Social e o payroll.',
          'Em caso de cessação, peça o detalhe do acerto de contas: férias, Natal, Férias, compensações, retenções IRS/SS.',
          'Guarde recibos de vencimento e comprovativo de pagamento pelo menos até ao fim de uma eventual verificação fiscal de IRS.'
        ] }
      ]
    },
    {
      id: 'duodecimos',
      title: 'Duodécimos: quando são pagos em partes',
      content: [
        { kind: 'paragraph', text: 'Duodécimos é o pagamento do 13.º e/ou 14.º salário em 1/12 todos os meses. Nesse caso, o líquido mensal parece mais alto, mas em dezembro e antes das férias pode não haver um pagamento separado elevado, ou este pode ser menor.' },
        { kind: 'paragraph', text: 'No setor privado, os duodécimos devem basear-se no contrato, em regulamentação coletiva ou num acordo escrito/prática de payroll clara. O empregador não deve simplesmente fazer desaparecer o pagamento integral sem apresentar as parcelas mensais no recibo de vencimento.' },
        { kind: 'checklist', items: [
          'No payslip, procure linhas como “Subsídio de Natal - duodécimos” e “Subsídio de Férias - duodécimos”.',
          '1/12 de 2 000 € = 166,67 € brutos por mês por um subsídio.',
          'Se ambos os subsídios forem pagos integralmente em duodécimos: 166,67 € + 166,67 € = 333,34 € brutos adicionais por mês com salário de 2 000 €.',
          'Se forem pagos 50% em duodécimos, os restantes 50% devem chegar nos prazos normais.',
          'Compare o annual gross, não apenas o monthly net: 2 000 € × 14 = 28 000 € por ano.',
          'Ao mudar de emprego, os duodécimos tornam o acerto final mais complexo: verifique se não recebeu a mais nem a menos nas proporções.'
        ] },
        { kind: 'warning', text: 'Não confunda “12 payments” numa oferta com ausência de subsídios. Para um trabalhador em Portugal, o que importa é o annual gross e o mecanismo de pagamento: 14 meses, 12 meses com duodécimos ou um esquema misto.' }
      ]
    },
    {
      id: 'tax-social-security',
      title: 'Impostos: IRS e Segurança Social',
      content: [
        { kind: 'paragraph', text: 'Ambos os subsídios são tributados como rendimento do trabalho Categoria A: IRS e contribuições para a Segurança Social. A contribuição normal do trabalhador para a Segurança Social é 11% do bruto; a do empregador é normalmente 23,75%. As contribuições são retidas em payroll.' },
        { kind: 'paragraph', text: 'Para IRS, a retenção sobre o Subsídio de Natal e o Subsídio de Férias é calculada separadamente do salário mensal normal. Ou seja, o empregador não deve somar “salário + subsídio” e aplicar à soma uma taxa mensal de retenção inflacionada. O imposto final é, ainda assim, recalculado na declaração anual de IRS.' },
        { kind: 'checklist', items: [
          'No mês de pagamento do subsídio, o líquido será inferior ao bruto por causa do IRS e dos 11% de Segurança Social.',
          'Se tiver duodécimos, o imposto e a Segurança Social são retidos mensalmente sobre essas parcelas.',
          'Na Modelo 3 IRS do ano, os subsídios integram o rendimento total do trabalho.',
          'A taxa de retenção depende do estado civil, dependentes, Continente/Açores/Madeira e das tabelas de retenção na fonte do ano concreto.',
          'O salário mínimo SMN em 2026 é 920 €; mesmo com SMN, o direito aos subsídios mantém-se.',
          'Se o empregador pagar “por fora” sem payslip, isso é um risco para a autorização de residência, IRS, Segurança Social e prestações futuras.'
        ] }
      ]
    },
    {
      id: 'problems',
      title: 'Se não pagarem ou calcularem mal',
      content: [
        { kind: 'paragraph', text: 'Primeiro, peça ao HR um cálculo escrito: salário base, período de trabalho, férias vencidas, férias proporcionais, Natal proporcional, retenções de IRS e Segurança Social. Muitas vezes o erro está relacionado com duodécimos ou com a data de início do contrato.' },
        { kind: 'checklist', items: [
          'Reúna o contrato de trabalho e todos os aditamentos.',
          'Descarregue os recibos de vencimento de todo o ano.',
          'Guarde as entradas bancárias do salário.',
          'Verifique se existe acordo coletivo no seu setor.',
          'Pergunte por escrito ao HR qual é a base legal do cálculo.',
          'Se não houver resposta — apresente um pedido/queixa à ACT.',
          'Em caso de cessação, não assine declaração de quitação se o cálculo não for claro ou se os montantes forem contestados.',
          'Para valores elevados, contacte um advogado ou sindicato antes de assinar um acordo.'
        ] },
        { kind: 'warning', text: 'A ACT é útil para queixas por violação da legislação laboral, mas não substitui um advogado individual num litígio sobre cessação complexa, non-compete, compensação ou payroll internacional.' }
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
      title: 'Portal das Finanças — retenção na fonte de IRS',
      url: 'https://www.portaldasfinancas.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
