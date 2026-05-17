export default {
  editorialVoice: 'hackportugal',
  id: 'cope-bportugal-residentes',
  categoryId: 'taxes',
  title: 'COPE: relatório do Banco de Portugal sobre operações e posições com o exterior a partir de 250 000 €',
  tldr: 'A COPE é um relatório estatístico do Banco de Portugal, não uma declaração fiscal da AT. Em 2026, os residentes em Portugal cujas operações anuais com não residentes ou posições externas atinjam 250 000 € devem apresentar o relatório de operações e posições com o exterior. O limiar foi aumentado de 100 000 € a partir da comunicação relativa a 2024. Isto aplica-se a empresas, recibos verdes e, potencialmente, a residentes particulares com contas estrangeiras/corretoras de valor elevado.',
  tags: ['cope', 'bportugal', 'impostos', 'relatórios'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-cope',
      title: 'O que é a COPE e porque não é IRS',
      content: [
        { kind: 'paragraph', text: 'COPE — Comunicação de Operações e Posições com o Exterior: relatório para o Banco de Portugal sobre operações económicas e financeiras transfronteiriças de residentes em Portugal com não residentes, bem como sobre posições externas — por exemplo, contas, empréstimos, valores mobiliários ou dívidas perante/de não residentes.' },
        { kind: 'paragraph', text: 'O objectivo é a estatística da balança de pagamentos e da posição de investimento internacional de Portugal. Não é IRS, não é IVA, não é Modelo 3, não é Anexo J e não é um relatório às Finanças. Mesmo que tenha declarado tudo correctamente à AT, a obrigação perante o Banco de Portugal pode existir separadamente.' },
        { kind: 'checklist', items: [
          'A COPE é apresentada ao Banco de Portugal, não às Finanças.',
          'O limiar em 2026 é de 250 000 € em operações anuais ou posições externas.',
          'O limiar é calculado sobre montantes brutos, não sobre o lucro.',
          'As operações com não residentes incluem recebimentos e pagamentos por serviços, bens, juros, dividendos, empréstimos, investimentos.',
          'As posições incluem activos e passivos perante não residentes: contas estrangeiras, contas de corretagem, empréstimos, contas a receber/a pagar.',
          'A comunicação é estatística, mas ignorar pedidos do Banco de Portugal pode dar origem a sanções.'
        ] }
      ]
    },
    {
      id: 'who-must-report',
      title: 'Quem deve verificar o limiar de 250 000 €',
      content: [
        { kind: 'paragraph', text: 'O Banco de Portugal refere “entidades residentes” — unidades residentes. Na prática, isto inclui seguramente empresas portuguesas, sucursais, empresários em nome individual e recibos verdes. Os expatriados particulares com contas estrangeiras ou carteiras de corretagem de valor elevado também não devem assumir automaticamente que estão fora do perímetro: se é residente em Portugal e detém/movimenta montantes significativos no estrangeiro, verifique a obrigação ou solicite um esclarecimento escrito ao Banco de Portugal.' },
        { kind: 'checklist', items: [
          'Você tem uma Lda/Unipessoal em Portugal e vende serviços a clientes dos EUA, Reino Unido, UE ou outros países.',
          'Você trabalha com recibos verdes e emite faturas a não residentes num montante de cerca de 250 000 € por ano ou mais.',
          'Uma empresa portuguesa importa/exporta bens por montantes elevados.',
          'Tem uma conta de corretagem estrangeira com uma carteira a partir de 250 000 €.',
          'Tem uma conta bancária estrangeira com saldos de cerca de 250 000 € ou mais.',
          'Concedeu ou recebeu um empréstimo elevado de um não residente.',
          'A empresa tem contas a receber ou a pagar de valor elevado perante não residentes.',
          'Transfere regularmente montantes elevados entre Portugal e instituições financeiras estrangeiras.'
        ] },
        { kind: 'warning', text: 'Ter um banco português não significa que “o banco já apresentou tudo por si”. O banco pode transmitir a sua própria estatística de pagamentos, mas a COPE, enquanto relatório da entidade residente sobre as suas operações/posições externas, pode continuar a ser sua obrigação.' }
      ]
    },
    {
      id: 'threshold',
      title: 'Como calcular o limiar: 250 000 € não é lucro, é a escala das operações/posições',
      content: [
        { kind: 'paragraph', text: 'Em 2026 aplica-se o limiar de isenção de 250 000 €. Este foi aumentado de 100 000 € a partir da comunicação relativa a 2024. A ideia é simples: se o volume anual de operações externas ou de posições externas atingir 250 000 €, deve verificar a obrigação de apresentar a COPE.' },
        { kind: 'checklist', items: [
          'Some os recebimentos brutos de não residentes: por exemplo, 260 000 € em faturas a clientes dos EUA — o limiar foi atingido.',
          'Some os pagamentos brutos a não residentes: por exemplo, importações/subcontratados/licenças no estrangeiro.',
          'Não compense valores: 180 000 € de recebimentos + 90 000 € de pagamentos correspondem a 270 000 € de volume de operações externas.',
          'Nos investimentos, olhe não só para o lucro realizado, mas também para operações de compra/venda, dividendos, juros e posições externas.',
          'Uma carteira numa corretora estrangeira de 300 000 € pode criar a obrigação mesmo sem negociação frequente.',
          'As posições são saldos/dívidas perante não residentes na data de referência, e não apenas movimentos de dinheiro.',
          'Se o montante estiver próximo de 250 000 €, mantenha uma tabela mensal: data, país da contraparte, tipo de operação, moeda, montante em €.'
        ] },
        { kind: 'warning', text: 'Não confunda com limiares fiscais: SMN 920 €, IAS 537,13 €, IVA e taxas de IRS não se aplicam aqui. A COPE pertence ao sistema de reporte estatístico do Banco de Portugal.' }
      ]
    },
    {
      id: 'how-to-file',
      title: 'Como a COPE é apresentada na prática',
      content: [
        { kind: 'paragraph', text: 'O relatório é apresentado através dos canais do Banco de Portugal para reporte estatístico. Normalmente, isto é feito pelo contabilista, departamento financeiro ou consultor, porque é necessário classificar correctamente as operações por códigos, países e tipos de instrumentos financeiros.' },
        { kind: 'checklist', items: [
          'Verifique quem é a unidade declarante: pessoa singular, empresário em nome individual/recibos verdes, Lda, sucursal ou outra estrutura.',
          'Reúna os extractos bancários das contas portuguesas e estrangeiras.',
          'Reúna os relatórios das corretoras: posições no fim do período, transacções, dividendos, juros, comissões.',
          'Extraia da contabilidade as faturas/recibos emitidos a não residentes e os pagamentos a não residentes.',
          'Separe as operações por países das contrapartes, moedas e tipos de operações.',
          'Registe o acesso aos serviços de reporting do Banco de Portugal ou entregue a tarefa a um contabilista certificado.',
          'Apresente a comunicação com periodicidade mensal se não estiver abrangido pela isenção.',
          'Guarde o cálculo do limiar e os documentos comprovativos, pelo menos para o caso de um pedido do Banco de Portugal.'
        ] },
        { kind: 'paragraph', text: 'O prazo normal para os relatórios estatísticos COPE é até ao 15.º dia útil após o fim do mês de referência. Se ultrapassou o limiar pela primeira vez ou não tem a certeza de a partir de que mês deve começar, é melhor não esperar pelo fim do ano: escreva ao Banco de Portugal e guarde a resposta.' }
      ]
    },
    {
      id: 'examples',
      title: 'Cenários típicos para expatriados',
      content: [
        { kind: 'substeps', items: [
          { id: 'remote-contractor', title: 'Recibos verdes com clientes estrangeiros', content: [
            { kind: 'paragraph', text: 'Vive em Portugal, trabalha como freelancer e emitiu faturas a clientes dos EUA e do Reino Unido no valor de 255 000 € durante o ano. Mesmo que o IRS seja pago através da AT e parte das despesas reduza a matéria colectável, para a COPE considera-se o volume bruto externo. O limiar de 250 000 € foi atingido.' }
          ] },
          { id: 'foreign-broker', title: 'Corretora estrangeira', content: [
            { kind: 'paragraph', text: 'Tornou-se residente fiscal em Portugal e mantém uma conta na Interactive Brokers/outra corretora não residente com uma carteira de 320 000 €. Mesmo que haja poucas transacções, a posição externa é superior a 250 000 €. Verifique a obrigação COPE separadamente do Anexo J no IRS.' }
          ] },
          { id: 'company-import-export', title: 'Lda com importação e exportação', content: [
            { kind: 'paragraph', text: 'Uma Lda portuguesa comprou serviços a não residentes no valor de 120 000 € e vendeu serviços a não residentes no valor de 160 000 €. O volume externo total é de 280 000 €, não o “lucro”. A empresa deve verificar a obrigação de apresentar a COPE.' }
          ] },
          { id: 'low-volume', title: 'Pequenas transferências e pensão', content: [
            { kind: 'paragraph', text: 'Um residente D7 recebe uma pensão estrangeira de 24 000 € por ano e transfere 30 000 € de poupanças para uma conta portuguesa. Se não houver outros activos/operações externas de grande dimensão, o limiar de 250 000 € fica longe. Mas a declaração de IRS pode continuar a ser exigida.' }
          ] }
        ] }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Erros que são caros de corrigir',
      content: [
        { kind: 'checklist', items: [
          'Contar apenas o lucro, e não o volume bruto das operações.',
          'Ignorar uma conta de corretagem estrangeira porque “são investimentos pessoais”.',
          'Pensar que o Anexo J no IRS substitui a COPE.',
          'Pensar que a troca CRS/FATCA entre bancos substitui o seu relatório ao Banco de Portugal.',
          'Não considerar empréstimos entre uma empresa portuguesa e um sócio estrangeiro.',
          'Misturar operações de uma Lda portuguesa residente com operações pessoais do proprietário.',
          'Não guardar extractos de bancos e corretoras estrangeiras com saldos no fim do mês.',
          'Descobrir o limiar apenas no fecho anual da contabilidade e falhar os prazos mensais.'
        ] },
        { kind: 'warning', text: 'Se já ultrapassou 250 000 € em períodos anteriores e não apresentou nada, não envie “ao acaso”. Primeiro reconstrua o calendário das operações e posições e depois peça ao contabilista ou consultor que contacte o Banco de Portugal sobre a forma correcta de regularização.' }
      ]
    }
  ],
  sources: [
    {
      title: 'Banco de Portugal: Reporte de operações e posições externas',
      url: 'https://www.bportugal.pt/page/reporting-external-transactions-and-positions',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Banco de Portugal: sítio oficial e secção de reporte estatístico',
      url: 'https://www.bportugal.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
