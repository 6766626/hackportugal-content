export default {
  editorialVoice: 'hackportugal',
  id: 'tax-residency-rules',
  categoryId: 'taxes',
  title: 'Residência fiscal em Portugal — regra dos 183 dias',
  tldr: 'Um residente fiscal em Portugal paga IRS sobre o rendimento mundial; um não residente paga apenas sobre rendimentos de fonte portuguesa. Em 2026, a regra base do CIRS art. 16 é: >183 dias em Portugal em qualquer período de 12 meses que comece ou termine no ano fiscal. Mas os 183 dias não são o único teste: uma habitação adequada como habitual residence pode torná-lo residente mais cedo. À saída, pode haver residência parcial e exit tax sobre activos financeiros.',
  tags: ['irs', '183 dias', 'residência', 'finanças'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'core-rule',
      title: 'Regra principal: 183 dias não é um mito de calendário',
      content: [
        { kind: 'paragraph', text: 'Em Portugal, a residência fiscal é determinada pelo Código do IRS, art. 16. O teste mais conhecido: torna-se residente fiscal se tiver permanecido fisicamente em Portugal mais de 183 dias, seguidos ou interpolados, em qualquer período de 12 meses que comece ou termine no ano fiscal em causa.' },
        { kind: 'paragraph', text: 'Isto não tem de ser necessariamente o período “de 1 de Janeiro a 31 de Dezembro”. Por exemplo, se chegou em 1 de Setembro de 2025 e viveu sem sair até Março de 2026, o período de 12 meses cruza o ano de 2026, e os dias podem criar residência para parte de 2026.' },
        { kind: 'checklist', items: [
          'Contam-se os dias de presença física em Portugal, incluindo o dia de chegada e o dia de partida, se esteve efectivamente no país durante parte do dia.',
          '183 dias é o limiar “mais de 183”, ou seja, 184 dias ou mais.',
          'Os dias não têm de ser seguidos: viagens curtas ao estrangeiro simplesmente não contam como dias portugueses.',
          'O ano fiscal para efeitos de IRS é o ano civil: 1 de Janeiro — 31 de Dezembro.',
          'A declaração de IRS referente a 2026 é normalmente entregue entre 1 de Abril e 30 de Junho de 2027 através do Portal das Finanças.',
          'A regra de permanência migratória ao abrigo dos D7/D8 e a residência fiscal são regimes diferentes: a autorização de residência não equivale automaticamente a residência fiscal, mas muitas vezes conduz a ela na prática.'
        ] }
      ]
    },
    {
      id: 'habitual-residence',
      title: 'Segundo teste: habitual residence 🏠',
      content: [
        { kind: 'paragraph', text: 'Mesmo que tenha passado em Portugal menos de 184 dias, pode tornar-se residente fiscal se, em qualquer dia do período relevante de 12 meses, tiver uma habitação em Portugal em condições que demonstrem a intenção de a utilizar como habitual residence — o local normal e permanente de vida.' },
        { kind: 'paragraph', text: 'Na prática, as Finanças olham não só para o contrato de arrendamento, mas para o conjunto dos factos: onde está a família, onde trabalha, onde os filhos estudam, onde está a vida bancária e quotidiana, onde vive efectivamente.' },
        { kind: 'checklist', items: [
          'Um contrato de arrendamento de longa duração por 12+ meses aumenta o risco de residência.',
          'Um apartamento ou casa próprios, disponíveis para habitação permanente, são um factor forte.',
          'Um atestado de residência da Junta de Freguesia confirma a morada, mas por si só não decide o estatuto fiscal.',
          'O registo da morada no NIF como morada fiscal em Portugal é um sinal importante para as Finanças.',
          'Serviços de água/luz/gás ligados, internet, escola dos filhos, médico de família SNS — são factos adicionais.',
          'Se vive num hotel ou num Airbnb temporário durante 1–2 meses, isso é mais fraco, mas não elimina a contagem dos dias.',
          'Se pretende continuar não residente, mantenha provas do centro de interesses vitais fora de Portugal.'
        ] },
        { kind: 'warning', text: 'Erro de principiantes: “estive menos de 183 dias, logo sou definitivamente não residente”. Errado. Em Portugal existe um teste separado de habitual residence, e ele pode aplicar-se antes do 184.º dia.' }
      ]
    },
    {
      id: 'what-residency-changes',
      title: 'O que muda se for residente fiscal',
      content: [
        { kind: 'paragraph', text: 'Um residente fiscal em Portugal declara em IRS o rendimento mundial: salários, dividendos, juros, rendas, mais-valias, pensões, rendimentos de recibos verdes, contas estrangeiras e corretoras. Um não residente normalmente declara apenas rendimentos de fonte portuguesa.' },
        { kind: 'checklist', items: [
          'O residente entrega a Modelo 3 IRS e, havendo rendimentos estrangeiros, o Anexo J.',
          'Um não residente com rendas, salário ou mais-valias em Portugal também pode estar obrigado a entregar IRS.',
          'O primeiro escalão de IRS em 2026 é 11,97%, mas o resultado final depende da escala, das deductions e do tipo de rendimento.',
          'Muitos rendimentos de investimento são tributados autonomamente a 28%, mas o residente pode por vezes optar pelo englobamento — inclusão na escala geral.',
          'Para salários e trabalho independente, são importantes as retenções na fonte e a Segurança Social; o NISS é necessário para contribuições sociais, mas não determina a residência fiscal.',
          'As convenções para evitar a dupla tributação resolvem conflitos se dois países o considerarem residente.',
          'O antigo NHR para novos requerentes foi na prática substituído pelo IFICI; este é um regime fiscal favorável separado e não elimina o teste de residência.'
        ] },
        { kind: 'warning', text: 'Não confunda a morada no NIF com a residência efectiva. A morada fiscal em Portugal é frequentemente usada pelas Finanças como indicador, mas o que decide são as regras do CIRS art. 16 e os factos. Se se mudou, actualize a morada fiscal no prazo de 60 dias.' }
      ]
    },
    {
      id: 'split-year',
      title: 'Residência parcial: o ano pode ser dividido',
      content: [
        { kind: 'paragraph', text: 'Portugal aplica o regime de residência fiscal parcial. Se se mudar para Portugal ou sair de Portugal durante o ano, o estatuto fiscal pode não se aplicar a todo o ano civil, mas sim desde o primeiro dia do período de permanência até ao último dia, cumpridas as condições do CIRS.' },
        { kind: 'substeps', items: [
          {
            id: 'arrival',
            title: 'À entrada',
            content: [
              { kind: 'paragraph', text: 'Se chegou e cumpriu o teste dos 183 dias ou de habitual residence, a residência normalmente começa no primeiro dia de permanência em Portugal no período relevante, e não na data de obtenção da autorização de residência da AIMA.' }
            ]
          },
          {
            id: 'departure',
            title: 'À saída',
            content: [
              { kind: 'paragraph', text: 'Se saiu definitivamente, terminou a habitação e transferiu o centro de vida, pode ser residente apenas até à data de saída. Mas é necessário actualizar a morada fiscal para uma morada estrangeira e ter provas: bilhetes, novo contrato de arrendamento/trabalho, certificado de residência fiscal de outro país.' }
            ]
          }
        ] },
        { kind: 'checklist', items: [
          'Guarde boarding passes, travel history, contratos de arrendamento e facturas.',
          'Mantenha uma tabela de dias por país: data de entrada, data de saída, país, fundamento.',
          'Peça o Certificado de Residência Fiscal no Portal das Finanças, se for necessário para o banco, a corretora ou a administração fiscal estrangeira.',
          'Se se tornou não residente, nomeie representante fiscal apenas se isso for exigido pela sua situação; para residentes da UE/EEE, o regime é normalmente mais brando do que para países terceiros.',
          'Em caso de conflito com outro país, use o tie-breaker da convenção fiscal: permanent home, centre of vital interests, habitual abode, nationality.'
        ] }
      ]
    },
    {
      id: 'exit-tax',
      title: 'Exit tax: o que verificar antes de sair',
      content: [
        { kind: 'paragraph', text: 'Ao cessar a residência fiscal, Portugal pode tributar as mais-valias “não realizadas” de determinados activos financeiros. Isto é chamado exit tax. A mecânica para pessoas singulares está ligada ao Código do IRS, em particular aos regimes de tributação de mais-valias quando a residência fiscal é transferida para fora de Portugal.' },
        { kind: 'paragraph', text: 'A ideia: se tem acções, quotas, unidades de participação em fundos ou outros activos com valorização, as Finanças podem considerar que, à saída, surgiu uma mais-valia tributável correspondente à diferença entre o valor de mercado à data de saída e o preço de aquisição. Para uma mudança para a UE/EEE, normalmente existem opções de diferimento/pagamento em prestações nas condições da lei; para países terceiros, o risco de imposto imediato é maior.' },
        { kind: 'checklist', items: [
          'Faça uma lista de corretoras, bancos, plataformas de cripto e participações em empresas antes da mudança de residência.',
          'Documente o acquisition cost: relatórios da corretora, contract notes, extractos bancários.',
          'Determine o valor de mercado dos activos à data de saída.',
          'Verifique se o activo entra no regime de exit tax: acções, quotas, unidades de participação, opções, fundos.',
          'Compare a mudança para a UE/EEE e para fora da UE/EEE: as consequências fiscais podem diferir.',
          'Verifique a convenção fiscal com o novo país: nem sempre elimina o exit tax português.',
          'Discuta a venda/transferência/manutenção dos activos antes da saída com um contabilista ou advogado fiscal, especialmente com uma carteira a partir de 50 000 €.'
        ] },
        { kind: 'warning', text: 'Exit tax é uma área em que a entrega autónoma do IRS termina frequentemente em erros. Se vai sair de Portugal com uma carteira significativa, participações em Lda/SA ou stock options, planeie a saída fiscal antes de alterar a morada fiscal.' }
      ]
    },
    {
      id: 'practical-check',
      title: 'Checklist prático para D7/D8 e novas mudanças',
      content: [
        { kind: 'paragraph', text: 'Para D7/D8, o cenário típico é: a pessoa chega com visto, arrenda habitação, obtém NIF/NISS/SNS e depois a autorização de residência na AIMA. O estatuto fiscal, porém, é determinado não pela data do plastic card, mas pelos dias, pela habitação e pelo centro efectivo de vida.' },
        { kind: 'checklist', items: [
          'Antes da mudança, decida: quer tornar-se residente em Portugal no ano em curso ou a partir de 1 de Janeiro do ano seguinte.',
          'Calcule o 184.º dia segundo o rolling 12-month period, e não apenas pelo ano civil.',
          'Não coloque uma morada fiscal portuguesa “por precaução” se, na realidade, ainda vive noutro país e pretende manter a não residência.',
          'Se já vive em Portugal, actualize a morada do NIF e prepare-se para o IRS como residente.',
          'Verifique se o seu país tem uma convenção com Portugal e que regras de tie-breaker se aplicam.',
          'Reúna o foreign tax residence certificate, se outro país também o considerar residente.',
          'Para trabalho remoto, verifique não só o IRS, mas também a social security: NISS, A1 para a UE, contribuições como trabalhador independente.',
          'Para o regime favorável IFICI, verifique os requisitos e prazos de registo específicos; não é um benefício automático para todos os D7/D8.'
        ] },
        { kind: 'warning', text: 'Se recebe rendimentos do estrangeiro e se tornou residente em Portugal “o dinheiro não entrou numa conta portuguesa” não o isenta de IRS. O que importa não é a conta, mas a residência fiscal e a fonte/tipo de rendimento.' }
      ]
    }
  ],
  costs: [
    { label: 'Certificado de Residência Fiscal através do Portal das Finanças', amountEUR: 0, note: 'Normalmente é pedido online gratuitamente; é necessário para bancos, corretoras e aplicação de convenções fiscais.' },
    { label: 'Consulta com contabilista sobre residência/IRS', amountEURMin: 60, amountEURMax: 200, note: 'Intervalo habitual para uma consulta pontual; casos complexos com exit tax e activos estrangeiros são mais caros.' },
    { label: 'Preparação de IRS com Anexo J', amountEURMin: 100, amountEURMax: 400, note: 'Depende do número de países, corretoras, arrendamentos, crypto e trabalho independente.' }
  ],
  sources: [
    {
      title: 'Autoridade Tributária: Residentes e não residentes — folheto informativo',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1988-34500675',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IRS, art. 16 — residência fiscal',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1988-34500675',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças: Certidão de residência fiscal',
      url: 'https://sitfiscal.portaldasfinancas.gov.pt/certidao/emitirCertidaoForm.action',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Autoridade Tributária: IRS — declaração Modelo 3',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/modelos_formularios/irs/Pages/default.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
