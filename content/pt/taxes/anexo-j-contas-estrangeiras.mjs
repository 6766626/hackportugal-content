export default {
  editorialVoice: 'hackportugal',
  id: 'anexo-j-contas-estrangeiras',
  categoryId: 'taxes',
  title: 'Anexo J Quadro 11: como declarar Wise, Revolut, N26, Degiro e IBKR',
  tldr: 'Se se tornou residente fiscal em Portugal, no IRS Modelo 3 deve indicar as contas bancárias e de corretagem estrangeiras no Anexo J, Quadro 11 — mesmo que o saldo seja 0 €, não tenha havido rendimentos e a conta seja “apenas Wise/Revolut”. Declaram-se contas em instituições financeiras fora de Portugal: IBAN, BIC/SWIFT e país. Relativamente a 2025, a declaração é entregue de 1 de abril a 30 de junho de 2026. Esta obrigação é separada da declaração de juros, dividendos e vendas de valores mobiliários.',
  tags: ['irs', 'anexo-j', 'wise', 'revolut', 'corretora'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-quadro-11',
      title: 'O que é o Quadro 11 e porque não deve ser ignorado',
      content: [
        { kind: 'paragraph', text: 'O Quadro 11 do Anexo J do IRS Modelo 3 é a secção para identificar contas em instituições financeiras que não são residentes em Portugal. A base é o art. 63.º-A da Lei Geral Tributária: os residentes fiscais em IRS são obrigados a comunicar a existência e a identificação de contas de depósito e de títulos no estrangeiro.' },
        { kind: 'paragraph', text: 'Isto não é um imposto sobre a conta nem uma declaração de rendimento. O simples facto de existir uma conta é indicado separadamente: mesmo que em 31 de dezembro o saldo fosse 0 €, não tenha havido operações, o cartão não tenha sido usado ou a conta de corretagem tenha sido aberta “para o futuro”.' },
        { kind: 'checklist', items: [
          'Wise com IBAN BE/outro IBAN estrangeiro — normalmente deve ser indicada',
          'Revolut com IBAN LT/IE/outro IBAN estrangeiro — normalmente deve ser indicada',
          'N26 com IBAN DE — deve ser indicada',
          'Degiro / flatex cash account com dados DE/NL — deve ser indicada',
          'IBKR, se existir uma conta monetária ou de corretagem identificável fora de Portugal — deve ser indicada',
          'PayPal sem IBAN bancário normalmente não é uma conta bancária clássica para o Quadro 11, mas os rendimentos através de PayPal continuam a ser declarados nas secções correspondentes',
          'Uma conta portuguesa com IBAN PT50 num banco/sucursal em Portugal normalmente não entra no Quadro 11'
        ] }
      ]
    },
    {
      id: 'who-must-file',
      title: 'Quem é obrigado a indicar contas estrangeiras',
      content: [
        { kind: 'paragraph', text: 'A obrigação aplica-se aos residentes fiscais em Portugal que entregam o IRS Modelo 3. Se em 2025 foi residente fiscal em Portugal, então na declaração entregue de 1 de abril a 30 de junho de 2026 deve verificar todas as contas estrangeiras existentes durante 2025.' },
        { kind: 'checklist', items: [
          'Viveu em Portugal mais de 183 dias em 2025 — verifique o Quadro 11',
          'Tinha morada de habitual residence em Portugal e estatuto de residente nas Finanças — verifique o Quadro 11',
          'Mudou-se para Portugal a meio do ano e tornou-se residente — indique as contas estrangeiras relativas ao período de residência',
          'A conta foi aberta, mas não foi usada — verifique a obrigação na mesma',
          'A conta foi encerrada durante o ano — é mais seguro indicá-la, se existiu durante o período da sua residência fiscal',
          'A conta pertence ao cônjuge numa declaração conjunta — é indicada pelo titular correspondente',
          'Se é apenas utilizador autorizado ou representante, e não titular, verifique a formulação do banco e o seu papel: o art. 63.º-A abrange a existência e a identificação de contas associadas ao contribuinte'
        ] },
        { kind: 'warning', text: 'Não confunda residência fiscal com autorização de residência AIMA. Pode ser residente fiscal sem cartão de autorização de residência, e vice-versa. Para efeitos de IRS, contam o estatuto nas Finanças e os critérios factuais de residência.' }
      ]
    },
    {
      id: 'what-data-you-need',
      title: 'Que dados deve reunir: IBAN, BIC e país',
      content: [
        { kind: 'paragraph', text: 'O Quadro 11 exige a identificação da conta. Na prática, são necessárias três coisas: país da instituição financeira, IBAN da conta e BIC/SWIFT. Obtenha os dados no monthly statement, account details, tax report ou numa declaração da corretora.' },
        { kind: 'checklist', items: [
          'IBAN completo, sem espaços ou com espaços — conforme aceite pelo Portal das Finanças',
          'BIC/SWIFT do banco ou da corretora: por exemplo, formato de 8 ou 11 caracteres',
          'País da instituição: Alemanha para IBAN DE, Lituânia para IBAN LT, Bélgica para IBAN BE, etc.',
          'Nome do prestador para seu registo: Wise, Revolut, N26, Degiro, Interactive Brokers',
          'Data de abertura e de encerramento — nem sempre é introduzida no Quadro 11, mas é útil em caso de verificação',
          'Relatórios anuais de juros, dividendos e vendas de ativos — isso já é para outras secções do Anexo J',
          'Captura de ecrã dos dados da conta em 31 de dezembro e PDF statement — conserve durante pelo menos 4 anos'
        ] },
        { kind: 'warning', text: 'Não invente IBAN/BIC para a corretora. Se a IBKR ou outra corretora não mostrar um IBAN individual, solicite ao apoio um tax statement ou confirmation. No Quadro 11 devem entrar identificadores reais da conta, e não dados para carregamento de uma conta omnibus, se estes não forem a sua conta.' }
      ]
    },
    {
      id: 'where-to-enter',
      title: 'Onde inserir isto no Portal das Finanças',
      content: [
        { kind: 'paragraph', text: 'Na declaração IRS Modelo 3, adicione o Anexo J — Rendimentos obtidos no estrangeiro. Mesmo que não existam rendimentos estrangeiros, o Anexo J pode ser necessário precisamente por causa do Quadro 11.' },
        { kind: 'substeps', items: [
          { id: 'open-modelo-3', title: '1. Abra a declaração de IRS', content: [
            { kind: 'paragraph', text: 'Portal das Finanças → IRS → Entregar Declaração → Modelo 3. Para rendimentos de 2025, a entrega decorre de 1 de abril a 30 de junho de 2026.' }
          ] },
          { id: 'add-anexo-j', title: '2. Adicione o Anexo J', content: [
            { kind: 'paragraph', text: 'Na lista de anexos, selecione o Anexo J. Este é usado não só para rendimentos do estrangeiro, mas também para identificar contas estrangeiras.' }
          ] },
          { id: 'fill-quadro-11', title: '3. Preencha o Quadro 11', content: [
            { kind: 'checklist', items: [
              'Adicione uma linha para cada conta estrangeira',
              'Indique o titular: sujeito passivo A, B ou dependente, se aplicável',
              'Selecione o país da instituição',
              'Introduza o IBAN',
              'Introduza o BIC/SWIFT',
              'Verifique que contas PT não foram adicionadas por engano',
              'Guarde e faça Validar antes da entrega'
            ] }
          ] },
          { id: 'submit-and-save', title: '4. Entregue e guarde os comprovativos', content: [
            { kind: 'paragraph', text: 'Após a submissão, guarde o comprovativo da entrega e a liquidação, quando esta ficar disponível. Guarde separadamente os PDF statements da Wise/Revolut/N26/Degiro/IBKR.' }
          ] }
        ] }
      ]
    },
    {
      id: 'income-is-separate',
      title: 'Conta separada, rendimentos separados',
      content: [
        { kind: 'paragraph', text: 'O Quadro 11 não substitui a declaração de rendimentos. Se na conta estrangeira houve juros, dividendos, cupões, venda de ETF/ações, rendimentos de criptoativos ou mais-valias, estes são declarados noutros quadros do Anexo J ou noutros anexos, consoante o tipo de rendimento.' },
        { kind: 'checklist', items: [
          'Juros de Wise Interest, Revolut Savings ou depósito bancário — normalmente rendimento de capitais',
          'Dividendos de ações/ETF — declaração separada, frequentemente com imposto retido no estrangeiro',
          'Venda de ações, ETF, obrigações — mais-valia/menos-valia, são necessárias datas e preços de compra/venda',
          'Relatório da corretora em USD/GBP deve ser convertido para euros à taxa aplicável',
          'Considere comissões da corretora apenas onde sejam fiscalmente admissíveis',
          'Se não houver rendimentos, o Quadro 11 pode ainda assim ser a única secção preenchida do Anexo J'
        ] },
        { kind: 'warning', text: 'As Finanças recebem troca automática de informação CRS de bancos e corretoras estrangeiros. Um erro típico é declarar dividendos, mas esquecer o Quadro 11, ou o inverso: indicar a conta, mas não indicar juros/vendas de ativos.' }
      ]
    },
    {
      id: 'mistakes-and-corrections',
      title: 'Erros frequentes e como corrigir',
      content: [
        { kind: 'checklist', items: [
          '“O saldo era 0 €, por isso não é preciso” — é preciso verificar: a obrigação é sobre a existência da conta, não sobre o saldo',
          '“Não é um banco, é um neobank” — se houver IBAN estrangeiro e a instituição estiver fora de Portugal, a conta normalmente é declarada',
          '“A Revolut transmite tudo sozinha” — o CRS não elimina a sua obrigação no IRS',
          '“A Degiro são investimentos, não uma conta” — o Quadro 11 abrange expressamente contas de títulos',
          '“Tenho apenas um cartão estrangeiro” — veja se existe uma conta de depósito/IBAN associado',
          '“Fechei a conta antes de 31 de dezembro” — se a conta existiu no ano da sua residência, é melhor divulgá-la',
          '“Indiquei os rendimentos no Anexo J, mas não a conta” — entregue uma declaração de substituição'
        ] },
        { kind: 'paragraph', text: 'Se a declaração já foi entregue e se esqueceu do Quadro 11, normalmente entrega-se uma declaração de substituição através do Portal das Finanças. Se o prazo de 30 de junho de 2026 ainda não tiver passado, a correção costuma ser tecnicamente mais simples e sem coima. Após o prazo, podem existir coimas ao abrigo do RGIT por declaração inexata ou incompleta; o intervalo típico para infrações de obrigações declarativas é de 150 € a 3 750 €, mas o valor concreto depende da situação, da voluntariedade da correção e da decisão da Autoridade Tributária.' },
        { kind: 'warning', text: 'Não espere por uma carta das Finanças se se esqueceu da Wise/Revolut/N26. Corrigir por iniciativa própria é quase sempre melhor do que explicar depois de um cruzamento automático CRS.' }
      ]
    }
  ],
  costs: [
    { label: 'Entrega do IRS Modelo 3 online', amountEUR: 0, note: 'Através do Portal das Finanças, por conta própria' },
    { label: 'Correção antes do prazo de 30.06.2026', amountEUR: 0, note: 'Normalmente através de declaração de substituição sem coima, se o prazo fiscal ainda estiver aberto' },
    { label: 'Possível coima por declaração incompleta/inexata', amountEURMin: 150, amountEURMax: 3750, note: 'Referência ao abrigo do RGIT; o valor efetivo depende das circunstâncias e da posição da AT' }
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
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
