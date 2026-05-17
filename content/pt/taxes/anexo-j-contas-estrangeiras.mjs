export default {
  editorialVoice: 'hackportugal',
  id: 'anexo-j-contas-estrangeiras',
  categoryId: 'taxes',
  title: 'Anexo J Quadro 11: como declarar Wise, Revolut, N26, Degiro e IBKR',
  tldr: 'Se se tornou residente fiscal em Portugal, no IRS Modelo 3 deve indicar as contas bancárias e de corretoras estrangeiras no Anexo J, Quadro 11 — mesmo que o saldo seja 0 €, não tenha havido rendimentos e a conta seja “apenas Wise/Revolut”. Declaram-se contas em instituições financeiras fora de Portugal: IBAN, BIC/SWIFT e país. Relativamente a 2025, a declaração é entregue de 1 de abril a 30 de junho de 2026. Esta obrigação é separada da declaração de juros, dividendos e vendas de valores mobiliários.',
  tags: ['irs', 'anexo-j', 'wise', 'revolut', 'corretor'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-quadro-11',
      title: 'O que é o Quadro 11 e porque não pode ser ignorado',
      content: [
        { kind: 'paragraph', text: 'O Quadro 11 do Anexo J do IRS Modelo 3 é a secção para identificar contas em instituições financeiras que não são residentes em Portugal. A base é o art. 63.º-A da Lei Geral Tributária: os residentes fiscais para efeitos de IRS são obrigados a comunicar a existência e a identificação de contas de depósito e de títulos no estrangeiro.' },
        { kind: 'paragraph', text: 'Isto não é um imposto sobre a conta nem uma declaração de rendimento. O simples facto de existir uma conta é indicado separadamente: mesmo que em 31 de dezembro o saldo fosse 0 €, não tenha havido operações, o cartão não tenha sido utilizado ou a conta de corretora tenha sido aberta “para o futuro”.' },
        { kind: 'checklist', items: [
          'Wise com IBAN BE/outro IBAN estrangeiro — normalmente deve ser indicado',
          'Revolut com IBAN LT/IE/outro IBAN estrangeiro — normalmente deve ser indicado',
          'N26 com IBAN DE — deve ser indicado',
          'Degiro / conta de caixa flatex com dados DE/NL — deve ser indicado',
          'IBKR, se existir uma conta monetária ou de corretora identificável fora de Portugal — deve ser indicado',
          'PayPal sem IBAN bancário normalmente não é uma conta bancária clássica para o Quadro 11, mas os rendimentos através de PayPal continuam a ser declarados nas secções adequadas',
          'Uma conta portuguesa com IBAN PT50 num banco/sucursal em Portugal normalmente não entra no Quadro 11'
        ] }
      ]
    },
    {
      id: 'who-must-file',
      title: 'Quem é obrigado a indicar contas estrangeiras',
      content: [
        { kind: 'paragraph', text: 'A obrigação aplica-se aos residentes fiscais em Portugal que entregam o IRS Modelo 3. Se em 2025 foi residente fiscal em Portugal, então na declaração entregue de 1 de abril a 30 de junho de 2026 deve verificar todas as contas estrangeiras que existiram durante 2025.' },
        { kind: 'checklist', items: [
          'Viveu em Portugal mais de 183 dias em 2025 — verifique o Quadro 11',
          'Tinha morada de residência habitual em Portugal e estatuto de residente nas Finanças — verifique o Quadro 11',
          'Mudou-se para Portugal a meio do ano e tornou-se residente — indique as contas estrangeiras relativas ao período de residência',
          'A conta foi aberta, mas não foi utilizada — ainda assim verifique a obrigação',
          'A conta foi encerrada durante o ano — é mais seguro indicá-la se existiu durante o período da sua residência fiscal',
          'A conta pertence ao cônjuge numa declaração conjunta — é indicada no titular correspondente',
          'Se for apenas utilizador autorizado ou representante, e não titular, verifique a formulação do banco e o seu papel: o art. 63.º-A abrange a existência e a identificação de contas associadas ao contribuinte'
        ] },
        { kind: 'warning', text: 'Não confunda residência fiscal com autorização de residência AIMA. É possível ser residente fiscal sem cartão de autorização de residência, e vice-versa. Para o IRS, contam o estatuto nas Finanças e os critérios factuais de residência.' }
      ]
    },
    {
      id: 'what-data-you-need',
      title: 'Que dados recolher: IBAN, BIC e país',
      content: [
        { kind: 'paragraph', text: 'O Quadro 11 exige a identificação da conta. Na prática são necessárias três coisas: país da instituição financeira, IBAN da conta e BIC/SWIFT. Retire os dados do extrato mensal, detalhes da conta, relatório fiscal ou declaração da corretora.' },
        { kind: 'checklist', items: [
          'IBAN completo, sem espaços ou com espaços — conforme aceite pelo Portal das Finanças',
          'BIC/SWIFT do banco ou da corretora: por exemplo, formato de 8 ou 11 caracteres',
          'País da instituição: Alemanha para IBAN DE, Lituânia para IBAN LT, Bélgica para IBAN BE, etc.',
          'Nome do prestador para si: Wise, Revolut, N26, Degiro, Interactive Brokers',
          'Data de abertura e encerramento — nem sempre é introduzida no Quadro 11, mas é útil em caso de verificação',
          'Relatórios anuais de juros, dividendos e vendas de ativos — isto já é para outras secções do Anexo J',
          'Captura de ecrã dos dados da conta em 31 de dezembro e extrato em PDF — guarde durante pelo menos 4 anos'
        ] },
        { kind: 'warning', text: 'Não invente um IBAN/BIC para a corretora. Se a IBKR ou outra corretora não apresentar um IBAN individual, solicite uma declaração fiscal ou confirmação ao apoio ao cliente. No Quadro 11 devem entrar identificadores reais da conta, e não os dados para reforço de uma conta omnibus, se estes não forem a sua conta.' }
      ]
    },
    {
      id: 'where-to-enter',
      title: 'Onde isto é introduzido no Portal das Finanças',
      content: [
        { kind: 'paragraph', text: 'Na declaração IRS Modelo 3, adicione o Anexo J — Rendimentos obtidos no estrangeiro. Mesmo que não existam rendimentos estrangeiros, o Anexo J pode ser necessário precisamente por causa do Quadro 11.' },
        { kind: 'substeps', items: [
          { id: 'open-modelo-3', title: '1. Abra a declaração de IRS', content: [
            { kind: 'paragraph', text: 'Portal das Finanças → IRS → Entregar Declaração → Modelo 3. Para os rendimentos de 2025, a entrega decorre de 1 de abril a 30 de junho de 2026.' }
          ] },
          { id: 'add-anexo-j', title: '2. Adicione o Anexo J', content: [
            { kind: 'paragraph', text: 'Na lista de anexos, escolha o Anexo J. Este é usado não só para rendimentos do estrangeiro, mas também para identificar contas estrangeiras.' }
          ] },
          { id: 'fill-quadro-11', title: '3. Preencha o Quadro 11', content: [
            { kind: 'checklist', items: [
              'Adicione uma linha para cada conta estrangeira',
              'Indique o titular: sujeito passivo A, B ou dependente, se aplicável',
              'Selecione o país da instituição',
              'Introduza o IBAN',
              'Introduza o BIC/SWIFT',
              'Verifique se contas PT não foram adicionadas por engano',
              'Guarde e faça Validar antes da entrega'
            ] }
          ] },
          { id: 'submit-and-save', title: '4. Entregue e guarde os comprovativos', content: [
            { kind: 'paragraph', text: 'Após a submissão, guarde o comprovativo da entrega e a liquidação, quando esta surgir. Guarde separadamente os extratos PDF da Wise/Revolut/N26/Degiro/IBKR.' }
          ] }
        ] }
      ]
    },
    {
      id: 'income-is-separate',
      title: 'A conta é separada, os rendimentos são separados',
      content: [
        { kind: 'paragraph', text: 'O Quadro 11 não substitui a declaração de rendimentos. Se na conta estrangeira houve juros, dividendos, cupões, venda de ETF/ações, cripto-rendimentos ou mais-valias, estes são declarados noutros quadros do Anexo J ou noutros anexos, consoante o tipo de rendimento.' },
        { kind: 'checklist', items: [
          'Juros de Wise Interest, Revolut Savings ou depósito bancário — normalmente rendimento de capitais',
          'Dividendos de ações/ETF — declaração separada, muitas vezes com imposto estrangeiro retido na fonte',
          'Venda de ações, ETF, obrigações — mais-valia/menos-valia, são necessárias datas e preços de compra/venda',
          'Relatório da corretora em USD/GBP deve ser convertido para euros à taxa aplicável',
          'Tenha em conta as comissões da corretora apenas onde forem fiscalmente admissíveis',
          'Se não houver rendimentos, o Quadro 11 ainda assim pode ser a única secção preenchida do Anexo J'
        ] },
        { kind: 'warning', text: 'As Finanças recebem troca automática de informações CRS de bancos e corretoras estrangeiros. Um erro típico é declarar dividendos, mas esquecer o Quadro 11, ou, ao contrário, indicar a conta, mas não indicar juros/vendas de ativos.' }
      ]
    },
    {
      id: 'mistakes-and-corrections',
      title: 'Erros frequentes e como corrigir',
      content: [
        { kind: 'checklist', items: [
          '“O saldo era 0 €, por isso não é preciso” — é preciso verificar: a obrigação diz respeito à existência da conta, não ao saldo',
          '“Isto não é um banco, é um neobank” — se existe um IBAN estrangeiro e uma instituição fora de Portugal, a conta normalmente é declarada',
          '“A Revolut transmite tudo automaticamente” — o CRS não elimina a sua obrigação no IRS',
          '“A Degiro são investimentos, não é uma conta” — o Quadro 11 abrange expressamente contas de títulos',
          '“Só tenho um cartão estrangeiro” — veja se existe uma conta de depósito/IBAN associada',
          '“Encerrei a conta antes de 31 de dezembro” — se a conta existiu no ano da sua residência, é melhor divulgá-la',
          '“Indiquei os rendimentos no Anexo J, mas não a conta” — entregue uma declaração de substituição'
        ] },
        { kind: 'paragraph', text: 'Se a declaração já foi entregue e se esqueceu do Quadro 11, normalmente entrega-se uma declaração de substituição através do Portal das Finanças. Se o prazo de 30 de junho de 2026 ainda não tiver terminado, a correção é normalmente mais simples do ponto de vista técnico e sem coima. Depois do prazo, podem existir coimas ao abrigo do RGIT por declaração inexata ou incompleta; o intervalo típico para violações de obrigações declarativas é de 150 € a 3 750 €, mas o montante concreto depende da situação, da voluntariedade da correção e da decisão da Autoridade Tributária.' },
        { kind: 'warning', text: 'Não espere por uma carta das Finanças se se esqueceu da Wise/Revolut/N26. Corrigir por iniciativa própria é quase sempre melhor do que explicar após uma conferência automática CRS.' }
      ]
    }
  ],
  costs: [
    { label: 'Entrega do IRS Modelo 3 online', amountEUR: 0, note: 'Através do Portal das Finanças, por conta própria' },
    { label: 'Correção antes do prazo de 30.06.2026', amountEUR: 0, note: 'Normalmente através de declaração de substituição sem coima, se o prazo fiscal ainda estiver aberto' },
    { label: 'Coima possível por declaração incompleta/inexata', amountEURMin: 150, amountEURMax: 3750, note: 'Referência ao abrigo do RGIT; o montante efetivo depende das circunstâncias e da posição da AT' }
  ],
  sources: [
    {
      title: 'Portal das Finanças — IRS, modelos e instruções do Anexo J',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/modelos_formularios/irs/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Lei Geral Tributária — art. 63.º-A, obrigação de mencionar contas no estrangeiro',
      url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/1988-34464575',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças — entrega da declaração IRS Modelo 3',
      url: 'https://www.portaldasfinancas.gov.pt/at/html/index.html',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
