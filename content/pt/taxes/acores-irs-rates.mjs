export default {
  editorialVoice: 'hackportugal',
  id: 'acores-irs-rates',
  categoryId: 'taxes',
  title: 'IRS nos Açores: tabelas de retenção separadas para 2026 para residentes da RA',
  tldr: 'Se você é residente fiscal na Região Autónoma dos Açores, o salário ou a pensão em 2026 não é retido pelas tabelas do Continente nem da Madeira, mas sim pelas tabelas de retenção na fonte dos Açores, aprovadas pelo Despacho 1179/2026. Isto é uma retenção antecipada de IRS, não o imposto final: o cálculo final continua a ser feito na declaração Modelo 3 relativa a 2026, em 2027. Verifique se o empregador/fundo de pensões aplica especificamente Açores, sobretudo se trabalha remotamente para uma empresa do continente.',
  tags: ['irs', 'açores', 'impostos', 'retenção'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-different',
      title: 'O que é diferente nos Açores',
      content: [
        { kind: 'paragraph', text: 'A Região Autónoma dos Açores tem as suas próprias tabelas de retenção na fonte para IRS. Em 2026, são aprovadas pelo Despacho 1179/2026 e aplicam-se separadamente das tabelas do Continente e da Madeira.' },
        { kind: 'paragraph', text: 'A retenção na fonte é um adiantamento mensal de IRS que o empregador, fundo de pensões ou outro pagador retém sobre o rendimento. Não é a taxa final de imposto: o montante definitivo é calculado após a entrega da Modelo 3 em 2027, tendo em conta todos os rendimentos, deduções, composição familiar e residência.' },
        { kind: 'checklist', items: [
          'Se vive e é residente fiscal nos Açores — aplicam-se as tabelas dos Açores.',
          'Se o empregador está em Lisboa/Porto, mas a sua residência fiscal e morada nas Finanças são nos Açores, a retenção deve ser feita pelas tabelas dos Açores.',
          'Se vive no continente, mas o empregador está registado nos Açores — isso, por si só, não faz aplicar as tabelas dos Açores.',
          'Para a Madeira existem tabelas próprias; não se pode misturar Madeira e Açores.',
          'Para recibos verdes, a retenção padrão depende do tipo de rendimento e das regras do CIRS, e não da tabela salarial do trabalhador.'
        ] }
      ]
    },
    {
      id: 'who-uses',
      title: 'A quem isto interessa em 2026',
      content: [
        { kind: 'paragraph', text: 'Na prática, isto diz respeito a todos os que recebem salário ou pensão e têm morada fiscal nos Açores: São Miguel, Terceira, Faial, Pico, Santa Maria, São Jorge, Graciosa, Flores ou Corvo.' },
        { kind: 'checklist', items: [
          'Trabalhadores por conta de outrem com contrato de trabalho.',
          'Pensionistas com pensão sujeita a IRS em Portugal.',
          'Expats com D7/D8/D1-D3 que já se tornaram residentes fiscais nos Açores.',
          'Colaboradores de empresas portuguesas que trabalham remotamente a partir dos Açores.',
          'Famílias em que um dos cônjuges trabalha para uma empresa do continente, mas o household está registado nos Açores.',
          'Pessoas que se mudaram do Continente para os Açores durante 2026 e actualizaram a morada fiscal.'
        ] },
        { kind: 'warning', text: 'O principal risco é o payroll aplicar o Continente por inércia. A diferença só é detectada no recibo de vencimento ou no IRS anual, quando pode surgir um pagamento adicional ou um reembolso inesperado.' }
      ]
    },
    {
      id: 'check-payroll',
      title: 'Como verificar se a retenção está correcta',
      content: [
        { kind: 'paragraph', text: 'A verificação demora 10 minutos. Precisa do recibo de vencimento de um mês de 2026, do seu estado familiar para IRS e da confirmação da morada fiscal nas Finanças.' },
        { kind: 'substeps', items: [
          { id: 'address', title: '1. Verifique a morada fiscal', content: [
            { kind: 'paragraph', text: 'No Portal das Finanças, abra Dados Pessoais → Morada Fiscal. A morada deve ser nos Açores. Se a morada ainda for do continente, o payroll pode formalmente aplicar a tabela errada.' }
          ] },
          { id: 'payslip', title: '2. Abra o recibo de vencimento', content: [
            { kind: 'checklist', items: [
              'Procure a linha IRS ou Retenção IRS.',
              'Verifique a base mensal: salário base + complementos regulares, se forem tributáveis.',
              'Verifique se existem linhas separadas para subsídio de refeição, duodécimos, prémios.',
              'Compare a retenção com a tabela dos Açores para o seu estatuto: não casado, casado 1 titular, casado 2 titulares, dependentes.',
              'Se o valor coincidir com a tabela do Continente e você for residente nos Açores — escreva ao payroll.'
            ] }
          ] },
          { id: 'ask-hr', title: '3. Peça ao HR para corrigir', content: [
            { kind: 'paragraph', text: 'Escreva de forma breve: “A minha morada fiscal é na Região Autónoma dos Açores. Peço a aplicação das tabelas de retenção na fonte de IRS dos Açores para 2026, aprovadas pelo Despacho 1179/2026.” Anexe o comprovativo de morada fiscal, se o pedirem.' }
          ] }
        ] }
      ]
    },
    {
      id: 'not-final-tax',
      title: 'Não confunda retenção com IRS final',
      content: [
        { kind: 'paragraph', text: 'A tabela de retenção decide apenas quanto reter agora. O IRS final de 2026 é calculado em 2027 na declaração Modelo 3. Aí são consideradas as taxas progressivas, dependentes, despesas gerais familiares, saúde, educação, rendas, PPR e outras deduções.' },
        { kind: 'checklist', items: [
          'Uma retenção menor todos os meses não significa que o imposto tenha sido “perdoado”.',
          'Se foi retido demasiado pouco — haverá uma nota de cobrança a pagar após a liquidação.',
          'Se foi retido demasiado — haverá reembolso.',
          'Ao mudar de região a meio do ano, as datas da residência efectiva e fiscal são importantes.',
          'Rendimentos do estrangeiro são declarados separadamente; a tabela de retenção do empregador não os vê.',
          'Ter IFICI, antigo NHR ou regime favorável não elimina a obrigação de verificar o payroll.'
        ] },
        { kind: 'warning', text: 'Se recebe salário estrangeiro sem payroll português, as tabelas de retenção na fonte podem nem se aplicar. Mas isso não isenta de IRS: o rendimento pode ainda assim ter de ser declarado em Portugal enquanto residente fiscal.' }
      ]
    },
    {
      id: 'minimum-wage-and-thresholds',
      title: 'Contexto de 2026: SMN, IAS e baixos rendimentos',
      content: [
        { kind: 'paragraph', text: 'Em 2026, o salário mínimo nacional é de 920 € por mês, e o IAS é 537,13 €. Estes valores são importantes para cálculos sociais e fiscais, mas não substituem as tabelas de retenção. Para salários, deve consultar especificamente a tabela dos Açores 2026 por tipo de família e número de dependentes.' },
        { kind: 'paragraph', text: 'Se o salário estiver próximo do SMN, a retenção de IRS pode ser nula ou baixa, dependendo da situação familiar. Mas a Segurança Social é normalmente retida separadamente: em regra, 11% a cargo do trabalhador com contrato de trabalho, se não houver regime especial.' },
        { kind: 'warning', text: 'Não use calculadoras “Portugal 2026” sem escolher a região. Muitas calculadoras online calculam por defeito o Continente e dão uma retenção errada para os Açores.' }
      ]
    },
    {
      id: 'moving-region',
      title: 'Se se mudar entre Continente, Madeira e Açores',
      content: [
        { kind: 'paragraph', text: 'Ao mudar de região, a retenção não muda magicamente. É necessário actualizar a morada fiscal e informar o empregador. Para cidadãos com Cartão de Cidadão, isto é feito através do ePortugal/CMD ou presencialmente; para estrangeiros com autorização de residência — através do Portal das Finanças ou de atendimento, dependendo do acesso.' },
        { kind: 'checklist', items: [
          'Actualize a morada fiscal logo após a mudança.',
          'Guarde o comprovativo de alteração de morada.',
          'Informe o HR/payroll do mês a partir do qual deve aplicar Açores.',
          'Verifique o recibo de vencimento seguinte.',
          'Se a retenção tiver sido feita pela tabela antiga durante vários meses, peça uma correcção no payroll.',
          'Em caso de dúvida, mostre ao contabilista todos os payslips do ano e as datas da mudança.'
        ] },
        { kind: 'paragraph', text: 'Os erros de retenção são normalmente corrigidos através dos meses seguintes de payroll ou através da liquidação final de IRS. Mas é melhor corrigir durante o ano, para não receber um pagamento adicional elevado na primavera-verão de 2027.' }
      ]
    }
  ],
  sources: [
    {
      title: 'Portal das Finanças: tabelas de retenção na fonte IRS',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/tabela_ret_doclib/Pages/default.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IRS no Portal das Finanças',
      url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/cirs_rep/Pages/irs99.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'PwC Inforfisco: IRS — tabelas de retenção na fonte 2026',
      url: 'https://www.pwc.pt/pt/pwcinforfisco/flash/irs-e-seguranca-social/irs-tabela-taxas-retencao-fonte-continente-20260.html',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'TOC Online: actualização das tabelas de IRS para os Açores',
      url: 'https://toconline.pt/novidades/atualizacao-das-tabelas-de-irs-para-os-acores/',
      kind: 'news',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
