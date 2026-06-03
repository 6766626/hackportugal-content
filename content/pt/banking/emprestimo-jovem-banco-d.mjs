export default {
  editorialVoice: 'hackportugal',
  id: 'emprestimo-jovem-banco-d',
  categoryId: 'banking',
  title: 'Empréstimo Jovem: créditos com garantia do Estado para jovens até aos 35 anos',
  tldr: 'Em 2026, “Empréstimo Jovem” significa, na maioria dos casos, Linha Jovem Habitação: crédito à habitação para a primeira casa própria e permanente para pessoas dos 18 aos 35 anos, com garantia do Estado até 15% do preço, para que o banco possa financiar até 100% da compra.\n\nO limite do imóvel é 450 000 €, é necessária residência fiscal em Portugal e não pode ter outra habitação. A taxa não é subsidiada: o banco calcula um crédito à habitação normal; em 2026, a referência ronda 3,3–4,0% TAN/TAEG. Para empresas existem linhas separadas IFD/BPF/IAPMEI, mas isso não é “dinheiro para todos até aos 35”.',
  tags: ['crédito à habitação', 'jovem', 'garantia', 'banco'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que é realmente concedido: uma garantia, não uma oferta',
      content: [
        { kind: 'paragraph', text: 'A Linha Jovem Habitação é uma garantia do Estado sobre parte do crédito à habitação para a compra de primeira habitação própria e permanente. O objectivo é colmatar a diferença entre o limite bancário habitual de 80–90% LTV e a compra sem uma entrada inicial elevada.' },
        { kind: 'paragraph', text: 'O Estado pode garantir até 15% do valor da operação. Isto permite ao banco conceder crédito até 100% do preço de compra, mas a decisão continua a ser do banco: este verifica rendimentos, contrato de trabalho, IRS, taxa de esforço, avaliação do imóvel e risco do cliente.' },
        { kind: 'warning', text: 'Isto não é uma taxa subsidiada nem um subsídio. Se deixar de pagar, o banco cobra-lhe a dívida; a garantia do Estado protege o banco, não liberta o comprador do crédito.' }
      ]
    },
    {
      id: 'eligibility',
      title: 'Quem é elegível em 2026',
      content: [
        { kind: 'checklist', items: [
          'Idade entre 18 e 35 anos inclusive na data de celebração do contrato de crédito',
          'Residência fiscal em Portugal: NIF com morada fiscal em PT e, em regra, IRS/rendimentos comprovados',
          'Compra da primeira habitação própria e permanente — habitação para residência própria permanente',
          'O comprador não tem outro imóvel habitacional em seu nome',
          'Preço de compra não superior a 450 000 €',
          'Rendimento não superior ao limite definido pelo programa: referência — até ao 8.º escalão IRS',
          'Sem dívidas em atraso perante a Autoridade Tributária e a Segurança Social',
          'Não ter utilizado anteriormente uma garantia do Estado semelhante',
          'O contrato de crédito é celebrado até 31 de dezembro de 2026 — prazo-limite do programa (é possível uma prorrogação, mas não está garantida)',
          'O banco aprova o crédito à habitação de acordo com as suas regras de stress test e taxa de esforço'
        ] },
        { kind: 'paragraph', text: 'A nacionalidade, por si só, não é o critério principal. Para um expat, o mais importante é a permanência legal, a residência fiscal, rendimentos comprováveis e a disponibilidade do banco para financiar um não residente/novo residente.\n\nNa prática, os bancos exigem com mais frequência autorização de residência, contrato de trabalho sem termo ou recibos verdes/rendimento estrangeiro estável com documentação.' }
      ]
    },
    {
      id: 'numbers',
      title: 'Limites, taxas e dinheiro real',
      content: [
        { kind: 'paragraph', text: 'O limite principal do programa é um imóvel até 450 000 €. A garantia do Estado cobre até 15% do preço, mas não paga IMT, Imposto do Selo, escritura, avaliação, seguros nem comissões bancárias.' },
        { kind: 'paragraph', text: 'Em 2026, as ofertas de crédito à habitação no mercado para clientes jovens situam-se normalmente, de forma aproximada, no intervalo de 3,3–4,0% TAN/TAEG, dependendo da Euribor/taxa fixa, spread, seguro de vida, domiciliação de ordenado e cross-selling. A taxa concreta consta apenas da FINE do banco.' },
        { kind: 'checklist', items: [
          'Exemplo: apartamento de 300 000 €',
          'Um crédito à habitação normal a 90% exigiria cerca de 30 000 € de entrada',
          'Com garantia do Estado, o banco pode, em teoria, financiar até 300 000 €',
          'Mas o comprador continua a pagar avaliação, escritura, registos, seguros e comissões bancárias',
          'Se tiver mais de 35 anos ou se não for a primeira habitação — a linha não se aplica',
          'Se a avaliação do banco for inferior ao preço de compra, o banco pode reduzir o montante do crédito'
        ] },
        { kind: 'warning', text: 'Não assine um CPCV com sinal de 10–20% enquanto o banco não tiver confirmado por escrito a pré-aprovação e a possibilidade de utilização da garantia do Estado. A perda do sinal é um risco comum em caso de recusa do banco.' }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'Como candidatar-se através do banco',
      content: [
        { kind: 'substeps', items: [
          { id: 'prepare-docs', title: '1. Reúna o conjunto de documentos', content: [
            { kind: 'checklist', items: [
              'Passaporte ou Cartão de Cidadão / autorização de residência',
              'NIF e comprovativo de morada fiscal em Portugal',
              'Declaração de IRS e nota de liquidação, se já tiver entregado IRS',
              'Últimos 3–6 recibos de vencimento ou recibos verdes',
              'Declaração da entidade patronal / contrato de trabalho',
              'Extractos de contas bancárias dos últimos 3–6 meses',
              'Mapa de responsabilidades de crédito do Banco de Portugal',
              'Caderneta predial e certidão permanente do imóvel, se o imóvel já estiver escolhido'
            ] }
          ] },
          { id: 'ask-banks', title: '2. Compare bancos aderentes à linha', content: [
            { kind: 'paragraph', text: 'Não verifique apenas a CGD e o Millennium bcp: a lista de bancos com garantia do Estado pode ser actualizada. Peça a FINE para cenários com taxa fixa, variável e mista.' }
          ] },
          { id: 'preapproval', title: '3. Obtenha a pré-aprovação antes do CPCV', content: [
            { kind: 'paragraph', text: 'A pré-aprovação não equivale ao crédito final, mas reduz o risco. Confirme por escrito: se o banco aplica a Linha Jovem Habitação, que LTV admite, que seguros são obrigatórios e qual é a taxa de esforço máxima.' }
          ] },
          { id: 'valuation', title: '4. Aguarde a avaliação e o ok final', content: [
            { kind: 'paragraph', text: 'O banco encomenda a avaliação do imóvel. Se a avaliação for inferior ao preço, o montante do crédito pode ser calculado com base na avaliação, e não no preço indicado no CPCV.' }
          ] }
        ] }
      ]
    },
    {
      id: 'business-lines',
      title: 'E se precisar de crédito para uma empresa',
      content: [
        { kind: 'paragraph', text: 'Para empreendedores, “jovem” é uma história diferente. Através da IFD/Banco Português de Fomento, IAPMEI, sociedades de garantia e bancos, existem linhas de crédito para PME, startups, inovação, empreendedorismo e mutual guarantee. Não são um crédito ao consumo automático para todos até aos 35 anos.' },
        { kind: 'checklist', items: [
          'É necessário um plano de negócios e atividade aberta / empresa',
          'O banco verifica a viabilidade económica do projecto',
          'Muitas vezes são necessários capitais próprios ou garantia do empreendedor',
          'A garantia de uma sociedade mútua reduz o risco do banco, mas não elimina a dívida',
          'As condições dependem da linha concreta, CAE, região e dimensão da empresa',
          'O IAPMEI é útil para o estatuto PME, programas de financiamento e aconselhamento',
          'IFD/BPF publicam linhas abertas e intermediários financeiros'
        ] },
        { kind: 'warning', text: 'Não confunda a Linha Jovem Habitação para crédito à habitação com créditos para jovens empreendedores. Têm regulamentos, bancos, objectivos de despesa e critérios de selecção diferentes.' }
      ]
    },
    {
      id: 'expat-tips',
      title: 'O que é importante para um expat',
      content: [
        { kind: 'checklist', items: [
          'Actualize primeiro a morada fiscal nas Finanças: sem residência fiscal, o programa normalmente não funciona',
          'Verifique que não tem dívidas à AT/Segurança Social',
          'Se o rendimento vier do estrangeiro — prepare declarações fiscais, payslips, contrato de trabalho e traduções',
          'Obtenha o Mapa de responsabilidades de crédito, mesmo que não tenha créditos em PT',
          'Compare o spread e a TAEG, não a taxa publicitada',
          'Confirme o custo do seguro de vida: para jovens é mais barato, mas em caso de doenças o preço aumenta',
          'Não trate o financiamento a 100% como cenário garantido: o banco pode pedir 5–10% de capitais próprios',
          'Verifique separadamente os benefícios de IMT/IS para jovens: trata-se de uma medida fiscal, não de parte do crédito'
        ] },
        { kind: 'paragraph', text: 'Uma boa estratégia é obter duas pré-aprovações em bancos diferentes e só depois fazer uma proposta ao vendedor. Para um estrangeiro com histórico curto em Portugal, isto decide muitas vezes o desfecho da operação.' }
      ]
    }
  ],
  costs: [
    { label: 'Avaliação do imóvel pelo banco', amountEURMin: 200, amountEURMax: 350, note: 'Normalmente paga pelo comprador; o valor depende do banco e do imóvel' },
    { label: 'Abertura/instrução do processo de crédito à habitação', amountEURMin: 250, amountEURMax: 600, note: 'As comissões variam; consulte a FINE e o preçário do banco' },
    { label: 'Escritura, registo e despesas notariais', amountEURMin: 700, amountEURMax: 1200, note: 'Sem incluir IMT e Imposto do Selo; depende do canal Casa Pronta/notário' },
    { label: 'Garantia do Estado Linha Jovem Habitação', amountEUR: 0, note: 'Para o comprador, normalmente não há uma comissão separada pela garantia, mas a taxa do crédito continua a ser de mercado' }
  ],
  sources: [
    { title: 'IFD — instrumentos financeiros e linhas de financiamento', url: 'https://www.ifd.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'IAPMEI — financiamento, PME e empreendedorismo', url: 'https://www.iapmei.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 44/2024 — garantia pessoal do Estado para aquisição da primeira habitação própria e permanente', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/44-2024-870793703', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Banco de Portugal — crédito à habitação e FINE', url: 'https://clientebancario.bportugal.pt/pt-pt/credito-habitacao', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
