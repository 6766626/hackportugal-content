export default {
  editorialVoice: 'hackportugal',
  id: 'brokerage-account-pt',
  categoryId: 'banking',
  title: 'Conta de corretagem em Portugal: DEGIRO, IBKR, Trading 212, XTB com NIF',
  tldr: 'Com um NIF português, pode abrir conta em corretores da UE: DEGIRO, IBKR, Trading 212, XTB. Verifique se o intermediário está registado na CMVM ou opera através de EU passport, quem guarda os ativos e qual o regime de indemnização aplicável: o SII português — até 25 000 €, mas nos corretores estrangeiros normalmente aplica-se o regime do país da licença. Para ações dos EUA, preencha o W-8BEN: a retenção sobre dividendos é normalmente 15% em vez de 30%. Um residente fiscal em Portugal declara dividendos, juros e transações no estrangeiro no IRS, geralmente através do Anexo J.',
  tags: ['corretor', 'nif', 'irs', 'cmvm', 'w8ben'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'choose-broker',
      title: '1. Escolha o corretor e verifique a licença',
      content: [
        { kind: 'paragraph', text: 'O NIF, por si só, não cria uma «conta de corretagem portuguesa». A maioria das plataformas populares abre a conta junto de uma entidade jurídica estrangeira da UE e presta serviços a clientes em Portugal através do mecanismo prestação de serviços / livre prestação de serviços — EU passport. Isto é normal, mas é importante compreender exatamente quem é o seu corretor.' },
        { kind: 'checklist', items: [
          'DEGIRO — verifique a entidade jurídica atual no contrato: normalmente flatexDEGIRO Bank / DEGIRO B.V.; os serviços em Portugal são prestados como intermediário estrangeiro.',
          'IBKR — para residentes da UE, normalmente Interactive Brokers Ireland Limited; os formulários fiscais e relatórios são descarregados a partir do Client Portal.',
          'Trading 212 — para clientes da UE, frequentemente Trading 212 Markets Ltd, licença da Cyprus Securities and Exchange Commission; verifique o país da licença no onboarding.',
          'XTB — XTB S.A. com sucursal / serviços em Portugal; muitas vezes é mais conveniente para clientes portugueses, mas continua a declarar o imposto por sua conta.',
          'Verifique o corretor no site da CMVM: existência de registo, país de origem, serviços autorizados, avisos regulator warnings.',
          'Não confunda a aplicação, o banco intermediário, o custodian e a empresa de investimento: o regime de indemnização depende da entidade jurídica licenciada, não da marca na App Store.'
        ] },
        { kind: 'warning', text: 'Se o corretor promete «rendimento garantido», pede uma transferência para um IBAN pessoal, funciona apenas através de Telegram/WhatsApp ou não consta dos registos dos reguladores — isto é um sinal de alerta. A CMVM publica regularmente avisos sobre intermediários não licenciados.' }
      ]
    },
    {
      id: 'documents',
      title: '2. O que será necessário para abrir a conta',
      content: [
        { kind: 'paragraph', text: 'Para um expat em Portugal, o KYC padrão de um corretor demora de alguns minutos a alguns dias. O NIF é obrigatório como identificador fiscal; se já for residente fiscal em Portugal, indique Portugal como tax residence.' },
        { kind: 'checklist', items: [
          'NIF — número de contribuinte das Finanças.',
          'Documento de identificação: passaporte, cartão de residência / autorização de residência, Cartão de Cidadão para cidadãos PT.',
          'Morada em Portugal: contrato de arrendamento, fatura de serviços, extrato bancário ou atestado de residência.',
          'Tax residence self-certification ao abrigo de CRS/FATCA: país de residência fiscal e TIN/NIF.',
          'IBAN para depósitos e levantamentos — de preferência em seu nome; a transferência SEPA é normalmente a opção mais barata.',
          'Declaração de experiência e objetivos de investimento: o corretor é obrigado a avaliar a appropriateness para produtos complexos.',
          'Comprovativo da origem dos fundos para montantes elevados: recibos de vencimento, contrato de trabalho, recibos verdes, venda de património, poupanças.',
          'Para US securities — W-8BEN, se o corretor der acesso a ações/ETF dos EUA.'
        ] },
        { kind: 'warning', text: 'Se ainda não se tornou residente fiscal em Portugal, mas já obteve NIF, não indique Portugal automaticamente. A residência fiscal não é apenas o NIF: normalmente são 183+ dias por ano ou habitual residence em 31 de dezembro. Um erro na tax residence afeta a troca CRS e o reporte.' }
      ]
    },
    {
      id: 'w8ben',
      title: '3. W-8BEN para ações dos EUA',
      content: [
        { kind: 'paragraph', text: 'O W-8BEN é um formulário para pessoas singulares não residentes nos EUA. É necessário para que o corretor aplique a convenção fiscal EUA—Portugal aos dividendos de ações americanas. Sem o formulário, a retenção padrão nos EUA é frequentemente 30%; com um W-8BEN correto para residente em Portugal, é normalmente 15% sobre dividendos.' },
        { kind: 'checklist', items: [
          'É preenchido dentro da interface do corretor; normalmente não é necessário enviar um formulário em papel.',
          'Indique o legal name como no documento, país de cidadania, morada de residência e residência fiscal.',
          'Foreign TIN — o seu NIF, se for residente fiscal em Portugal.',
          'O formulário é normalmente válido até 31 de dezembro do terceiro ano civil após o ano de assinatura, se os dados não se alterarem.',
          'Se se mudou, alterou a residência fiscal ou o nome — atualize o W-8BEN junto do corretor.',
          'O W-8BEN reduz a retenção na fonte nos EUA, mas não elimina a obrigação de declarar o rendimento no IRS em Portugal.',
          'Para US ETF destinados a clientes retail da UE, aplica-se frequentemente a restrição PRIIPs/KID: muitos ETF americanos não podem ser comprados diretamente, mas pode manter posições já adquiridas ou comprar UCITS ETF.'
        ] },
        { kind: 'warning', text: 'Os 15% retidos nos EUA sobre dividendos nem sempre são «imposto final» para Portugal. No IRS, declara o rendimento bruto e o imposto retido no estrangeiro; as Finanças calculam o crédito de imposto estrangeiro dentro dos limites das regras do CIRS.' }
      ]
    },
    {
      id: 'tax-reporting',
      title: '4. Como declarar no IRS: Anexo J, E, G',
      content: [
        { kind: 'paragraph', text: 'Um residente fiscal em Portugal declara o rendimento mundial. Para corretores como DEGIRO, IBKR, Trading 212 e, frequentemente, XTB, o rendimento é normalmente considerado de fonte estrangeira se os valores mobiliários, a conta ou o agente pagador estiverem fora de Portugal. Na prática, a maioria dos expat preenche o Anexo J.' },
        { kind: 'checklist', items: [
          'Dividendos e juros do estrangeiro — normalmente Anexo J, quadro para rendimentos de capitais, categoria E.',
          'Venda de ações, ETF, obrigações, opções com fonte estrangeira — normalmente Anexo J, mais-valia/menos-valia da categoria G.',
          'Dividendos/juros portugueses já tratados por um agente pagador português podem ir pelo Anexo E ou já ter sido retidos at source; verifique a declaração anual do banco.',
          'Venda de valores mobiliários portugueses através de intermediário português — frequentemente Anexo G; através de corretor estrangeiro, a situação exige confirmar a fonte e o relatório.',
          'A taxa autónoma padrão sobre muitos dividendos, juros e capital gains é 28%, mas pode optar pelo englobamento, se for vantajoso segundo o seu escalão de IRS.',
          'Se escolher o englobamento para parte dos rendimentos, este pode aplicar-se de forma mais ampla à categoria; não selecione a opção sem fazer as contas.',
          'Guarde o annual statement do corretor, trade confirmations, taxas de câmbio, relatórios de withholding tax durante pelo menos 4 anos.',
          'No IRS 2026 relativo aos rendimentos de 2025, a entrega decorre normalmente de 1 de abril a 30 de junho; para rendimentos de 2026, a declaração será entregue em 2027.'
        ] },
        { kind: 'warning', text: 'A matéria coletável das transações é calculada em euros. Se a compra/venda for em USD ou GBP, é necessária conversão à taxa correta. Os relatórios dos corretores nem sempre coincidem com a lógica das Finanças: comissões, FX, corporate actions e ações fracionadas devem ser verificados manualmente.' }
      ]
    },
    {
      id: 'protection',
      title: '5. Proteção dos ativos: SII, regimes estrangeiros e cash',
      content: [
        { kind: 'paragraph', text: 'Os investimentos não estão segurados contra quedas de mercado. Os regimes de indemnização não cobrem perdas em ações/ETF, mas sim a falha do intermediário em devolver o dinheiro ou os instrumentos que lhe pertencem, em determinadas condições.' },
        { kind: 'checklist', items: [
          'O Sistema de Indemnização aos Investidores (SII) português cobre até 25 000 € por investidor, mas aplica-se a participantes do sistema português.',
          'Num corretor da UE estrangeiro, normalmente aplica-se o regime do país da licença, e não o SII português.',
          'IBKR Ireland — consulte o Irish Investor Compensation Scheme: normalmente até 90% das perdas com limite de 20 000 € para eligible clients.',
          'As empresas de investimento cipriotas estão normalmente abrangidas pelo Investor Compensation Fund com limite até 20 000 € para eligible clients.',
          'Nos corretores bancários, os fundos livres em dinheiro podem estar abrangidos por um deposit guarantee scheme até 100 000 €, mas isso depende de onde e como o cash é mantido.',
          'Os valores mobiliários dos clientes devem, em regra, estar segregados dos ativos do corretor, mas em caso de insolvency podem ocorrer atrasos, reconciliações e custos jurídicos.',
          'Para carteiras maiores, é sensato diversificar corretores e guardar cópias dos relatórios fora da aplicação.'
        ] },
        { kind: 'warning', text: 'A frase «proteção até 100 000 €» refere-se muitas vezes a um depósito bancário, e não a ações e ETF. Para instrumentos de investimento, veja especificamente investor compensation, segregation of assets e a entidade jurídica do corretor.' }
      ]
    },
    {
      id: 'practical-setup',
      title: '6. Configuração prática após a abertura',
      content: [
        { kind: 'paragraph', text: 'Antes do primeiro depósito, configure os relatórios. Isto poupará horas no período do IRS e reduzirá o risco de erros no Anexo J.' },
        { kind: 'checklist', items: [
          'Descarregue o PDF/CSV annual activity statement para cada ano civil.',
          'Ative relatórios de dividendos, juros, withholding tax, realised gains/losses e fees.',
          'Guarde ISIN, data de compra, data de venda, quantidade, preço, moeda, comissões e FX.',
          'Não misture fundos pessoais e empresariais: conta de pessoa singular ≠ conta de LDA/empresa.',
          'Verifique se o corretor emite Portuguese tax report; mesmo que emita, a responsabilidade pelo IRS continua a ser sua.',
          'Para accumulating ETF, a tributação surge normalmente na venda, e não no reinvestimento dentro do fundo; para distributing ETF, os dividendos são declarados anualmente.',
          'Se usar margin, options, CFDs ou securities lending — considere os riscos adicionais, juros e reporte fiscal mais complexo.',
          'Antes de sair de Portugal, atualize a residência fiscal junto do corretor e nas Finanças; o CRS continuará a trocar dados de acordo com o país indicado.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Abertura de conta na DEGIRO / IBKR / Trading 212 / XTB', amountEUR: 0, note: 'Normalmente gratuita; surgem comissões em transações, FX, taxas de bolsa, inatividade ou levantamento — depende do tarifário e do país da entidade jurídica.' },
    { label: 'W-8BEN', amountEUR: 0, note: 'Preenchido gratuitamente junto do corretor; reduz a retenção dos EUA sobre dividendos com residência fiscal correta.' },
    { label: 'Entrega do IRS através do Portal das Finanças', amountEUR: 0, note: 'A entrega autónoma é gratuita; um contabilista para o Anexo J normalmente tem custo separado.' },
    { label: 'Investor compensation em Portugal: SII', amountEURMax: 25000, note: 'Limite de indemnização por investidor para participantes do sistema português; nos corretores estrangeiros, consulte o regime do país da licença.' }
  ],
  sources: [
    { title: 'CMVM — registos de intermediários financeiros e avisos aos investidores', url: 'https://www.cmvm.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal das Finanças — IRS e declarações Modelo 3 / Anexos', url: 'https://info.portaldasfinancas.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código do IRS — tributação de rendimentos, categorias E e G', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1988-34500675', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Sistema de Indemnização aos Investidores — informação sobre proteção dos investidores', url: 'https://www.cmvm.pt/pt/EstatisticasEstudosEPublicacoes/Pages/Sistema-de-Indemnizacao-aos-Investidores.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
