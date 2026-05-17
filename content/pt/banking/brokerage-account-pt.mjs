export default {
  editorialVoice: 'hackportugal',
  id: 'brokerage-account-pt',
  categoryId: 'banking',
  title: 'Conta de corretagem em Portugal: DEGIRO, IBKR, Trading 212, XTB com NIF',
  tldr: 'Com um NIF português é possível abrir conta em corretoras da UE: DEGIRO, IBKR, Trading 212, XTB. Verifique se o intermediário está registado na CMVM ou opera por EU passport, quem guarda os activos e que esquema de indemnização se aplica: o SII português cobre até 25 000 €, mas nas corretoras estrangeiras normalmente aplica-se o esquema do país da licença. Para acções dos EUA, preencha o W-8BEN: a retenção sobre dividendos é normalmente 15% em vez de 30%. Um residente fiscal em Portugal declara dividendos, juros e operações no estrangeiro no IRS, frequentemente através do Anexo J.',
  tags: ['corretora', 'nif', 'irs', 'cmvm', 'w8ben'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'choose-broker',
      title: '1. Escolha a corretora e verifique a licença',
      content: [
        { kind: 'paragraph', text: 'O NIF, por si só, não cria uma «conta de corretagem portuguesa». A maioria das plataformas populares abre a conta numa entidade jurídica estrangeira da UE e presta serviços a clientes em Portugal através do mecanismo de prestação de serviços / livre prestação de serviços — EU passport. Isto é normal, mas é importante compreender exactamente quem é a sua corretora.' },
        { kind: 'checklist', items: [
          'DEGIRO — verifique a entidade jurídica actual no contrato: normalmente flatexDEGIRO Bank / DEGIRO B.V.; os serviços em Portugal são prestados como intermediário estrangeiro.',
          'IBKR — para residentes da UE, normalmente Interactive Brokers Ireland Limited; os formulários fiscais e relatórios são descarregados a partir do Client Portal.',
          'Trading 212 — para clientes da UE é frequentemente Trading 212 Markets Ltd, licença da Cyprus Securities and Exchange Commission; verifique o país da licença no onboarding.',
          'XTB — XTB S.A. com sucursal / serviços em Portugal; muitas vezes é mais conveniente para clientes portugueses, mas continua a declarar o imposto por sua conta.',
          'Verifique a corretora no site da CMVM: existência de registo, país de origem, serviços autorizados, avisos do regulador (regulator warnings).',
          'Não confunda a aplicação, o banco intermediário, o custodian e a empresa de investimento: o esquema de indemnização depende da entidade jurídica licenciada, não da marca na App Store.'
        ] },
        { kind: 'warning', text: 'Se a corretora promete «rendimento garantido», pede uma transferência para um IBAN pessoal, funciona apenas através de Telegram/WhatsApp ou não consta dos registos dos reguladores — isto é um sinal de alerta. A CMVM publica regularmente avisos sobre intermediários não licenciados.' }
      ]
    },
    {
      id: 'documents',
      title: '2. O que é necessário para abrir a conta',
      content: [
        { kind: 'paragraph', text: 'Para um expatriado em Portugal, o KYC padrão numa corretora demora entre alguns minutos e alguns dias. O NIF é obrigatório como identificador fiscal; se já é residente fiscal em Portugal, indique Portugal como tax residence.' },
        { kind: 'checklist', items: [
          'NIF — número de contribuinte das Finanças.',
          'Documento de identificação: passaporte, cartão de residência / autorização de residência, Cartão de Cidadão para cidadãos PT.',
          'Morada em Portugal: contrato de arrendamento, factura de serviços públicos, extracto bancário ou atestado de residência.',
          'Tax residence self-certification segundo CRS/FATCA: país de residência fiscal e TIN/NIF.',
          'IBAN para carregamentos e levantamentos — preferencialmente em seu nome; uma transferência SEPA é normalmente a opção mais barata.',
          'Declaração de experiência e objectivos de investimento: a corretora é obrigada a avaliar a appropriateness para produtos complexos.',
          'Comprovativo da origem dos fundos em montantes elevados: payslips, contrato de trabalho, recibos verdes, venda de património, poupanças.',
          'Para US securities — W-8BEN, se a corretora der acesso a acções/ETF dos EUA.'
        ] },
        { kind: 'warning', text: 'Se ainda não se tornou residente fiscal em Portugal, mas já obteve um NIF, não indique Portugal automaticamente. A residência fiscal não é apenas ter NIF: normalmente implica 183+ dias no ano ou habitual residence em 31 de Dezembro. Um erro na tax residence afecta a troca CRS e a comunicação fiscal.' }
      ]
    },
    {
      id: 'w8ben',
      title: '3. W-8BEN para acções dos EUA',
      content: [
        { kind: 'paragraph', text: 'O W-8BEN é um formulário para pessoas singulares não residentes nos EUA. É necessário para que a corretora aplique a convenção fiscal EUA—Portugal aos dividendos de acções norte-americanas. Sem o formulário, a retenção padrão nos EUA é frequentemente 30%; com um W-8BEN correcto para um residente em Portugal, é normalmente 15% sobre dividendos.' },
        { kind: 'checklist', items: [
          'É preenchido dentro da interface da corretora; normalmente não é necessário enviar o formulário em papel.',
          'Indique o legal name tal como no documento, o país de cidadania, a morada de residência e a residência fiscal.',
          'Foreign TIN — o seu NIF, se for residente fiscal em Portugal.',
          'O formulário é normalmente válido até 31 de Dezembro do terceiro ano civil após o ano da assinatura, se os dados não se alterarem.',
          'Se mudou de país, alterou a residência fiscal ou o nome — actualize o W-8BEN junto da corretora.',
          'O W-8BEN reduz a retenção na fonte nos EUA, mas não elimina a obrigação de declarar o rendimento no IRS em Portugal.',
          'Para US ETF destinados a clientes retail da UE, aplica-se frequentemente a restrição PRIIPs/KID: muitos ETF norte-americanos não podem ser comprados directamente, mas é possível manter posições já compradas ou comprar UCITS ETF.'
        ] },
        { kind: 'warning', text: 'Os 15% retidos nos EUA sobre dividendos nem sempre são o «imposto final» para Portugal. No IRS, declara o rendimento bruto e o imposto retido no estrangeiro; as Finanças calculam o crédito de imposto estrangeiro dentro das regras do CIRS.' }
      ]
    },
    {
      id: 'tax-reporting',
      title: '4. Como declarar no IRS: Anexo J, E, G',
      content: [
        { kind: 'paragraph', text: 'Um residente fiscal em Portugal declara o rendimento mundial. Para as corretoras DEGIRO, IBKR, Trading 212 e muitas vezes XTB, o rendimento é normalmente considerado de fonte estrangeira, se os títulos, a conta ou o agente pagador estiverem fora de Portugal. Na prática, a maioria dos expatriados preenche o Anexo J.' },
        { kind: 'checklist', items: [
          'Dividendos e juros do estrangeiro — normalmente Anexo J, quadro de rendimentos de capitais, categoria E.',
          'Venda de acções, ETF, obrigações, opções com fonte estrangeira — normalmente Anexo J, mais-valias/menos-valias da categoria G.',
          'Dividendos/juros portugueses, já tratados por um agente pagador português, podem ser declarados através do Anexo E ou já ter retenção at source; verifique a declaração anual do banco.',
          'Venda de valores mobiliários portugueses através de intermediário português — frequentemente Anexo G; através de corretora estrangeira, a situação exige cruzar a fonte e o relatório.',
          'A taxa autónoma padrão sobre muitos dividendos, juros e capital gains é 28%, mas é possível escolher o englobamento, se for vantajoso de acordo com o seu escalão de IRS.',
          'Se escolher o englobamento para parte dos rendimentos, este pode aplicar-se de forma mais ampla dentro da categoria; não seleccione a opção sem fazer contas.',
          'Guarde o annual statement da corretora, trade confirmations, FX rates e relatórios de withholding tax durante pelo menos 4 anos.',
          'No IRS 2026 relativo aos rendimentos de 2025, a entrega decorre normalmente de 1 de Abril a 30 de Junho; para rendimentos de 2026, a declaração será entregue em 2027.'
        ] },
        { kind: 'warning', text: 'A matéria colectável das operações é calculada em euros. Se a compra/venda for em USD ou GBP, é necessária a conversão à taxa correcta. Os relatórios das corretoras nem sempre coincidem com a lógica das Finanças: comissões, FX, corporate actions e acções fraccionadas devem ser verificados manualmente.' }
      ]
    },
    {
      id: 'protection',
      title: '5. Protecção de activos: SII, esquemas estrangeiros e cash',
      content: [
        { kind: 'paragraph', text: 'Os investimentos não estão segurados contra quedas de mercado. Os esquemas de indemnização não cobrem perdas em acções/ETF, mas sim a falha do intermediário em devolver o dinheiro ou os instrumentos que lhe pertencem, em determinadas condições.' },
        { kind: 'checklist', items: [
          'O Sistema de Indemnização aos Investidores (SII) português cobre até 25 000 € por investidor, mas aplica-se aos participantes no sistema português.',
          'Numa corretora estrangeira da UE, normalmente aplica-se o esquema do país da licença, e não o SII português.',
          'IBKR Ireland — consulte o Irish Investor Compensation Scheme: normalmente até 90% das perdas, com limite de 20 000 € para eligible clients.',
          'As empresas de investimento cipriotas estão normalmente abrangidas pelo Investor Compensation Fund, com limite até 20 000 € para eligible clients.',
          'Em corretoras bancárias, os fundos monetários livres podem estar abrangidos pelo deposit guarantee scheme até 100 000 €, mas isso depende de onde e como o cash é mantido.',
          'Os valores mobiliários dos clientes devem, em geral, estar separados dos activos da corretora, mas em caso de insolvency podem ocorrer atrasos, reconciliações e custos jurídicos.',
          'Para carteiras grandes, é prudente diversificar corretoras e guardar cópias dos relatórios fora da aplicação.'
        ] },
        { kind: 'warning', text: 'A expressão «protecção até 100 000 €» refere-se frequentemente a um depósito bancário, e não a acções e ETF. Para instrumentos de investimento, verifique especificamente investor compensation, segregation of assets e a entidade jurídica da corretora.' }
      ]
    },
    {
      id: 'practical-setup',
      title: '6. Configuração prática após a abertura',
      content: [
        { kind: 'paragraph', text: 'Antes do primeiro carregamento, configure a documentação e os relatórios. Isto poupará horas durante o período do IRS e reduzirá o risco de erros no Anexo J.' },
        { kind: 'checklist', items: [
          'Descarregue o annual activity statement em PDF/CSV para cada ano civil.',
          'Active relatórios de dividendos, juros, withholding tax, realised gains/losses e fees.',
          'Guarde ISIN, data de compra, data de venda, quantidade, preço, moeda, comissões e FX.',
          'Não misture fundos pessoais e empresariais: conta de pessoa singular ≠ conta de LDA/empresa.',
          'Verifique se a corretora emite Portuguese tax report; mesmo que emita, a responsabilidade pelo IRS continua a ser sua.',
          'Para accumulating ETF, a tributação surge normalmente na venda, e não no reinvestimento dentro do fundo; para distributing ETF, os dividendos são declarados anualmente.',
          'Se utiliza margin, options, CFDs ou securities lending — tenha em conta riscos adicionais, juros e uma declaração fiscal mais complexa.',
          'Antes de sair de Portugal, actualize a residência fiscal junto da corretora e nas Finanças; o CRS continuará a trocar dados de acordo com o país indicado.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Abertura de conta na DEGIRO / IBKR / Trading 212 / XTB', amountEUR: 0, note: 'Normalmente gratuita; há comissões em operações, FX, taxas de bolsa, inactividade ou levantamentos — depende do tarifário e do país da entidade jurídica.' },
    { label: 'W-8BEN', amountEUR: 0, note: 'Preenchido gratuitamente junto da corretora; reduz a retenção dos EUA sobre dividendos quando a residência fiscal está correctamente indicada.' },
    { label: 'Entrega do IRS através do Portal das Finanças', amountEUR: 0, note: 'A entrega autónoma é gratuita; um contabilista para o Anexo J normalmente é pago à parte.' },
    { label: 'Investor compensation em Portugal: SII', amountEURMax: 25000, note: 'Limite de indemnização por investidor para participantes no sistema português; nas corretoras estrangeiras, verifique o esquema do país da licença.' }
  ],
  sources: [
    { title: 'CMVM — registos de intermediários financeiros e avisos aos investidores', url: 'https://www.cmvm.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal das Finanças — IRS e declarações Modelo 3 / Anexos', url: 'https://info.portaldasfinancas.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código do IRS — tributação dos rendimentos, categorias E e G', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1988-34500675', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Sistema de Indemnização aos Investidores — informação sobre protecção dos investidores', url: 'https://www.cmvm.pt/pt/AreadoInvestidor/SistemaDeIndemnizacaoAosInvestidores/LegisOutrasInfo/Pages/legislacao.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
