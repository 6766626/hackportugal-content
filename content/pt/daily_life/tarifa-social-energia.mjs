export default {
  editorialVoice: 'hackportugal',
  id: 'tarifa-social-energia',
  categoryId: 'daily_life',
  title: 'Tarifa Social: tarifa social de eletricidade, gás e água',
  tldr: 'A Tarifa Social é um desconto automático para agregados familiares com baixos rendimentos: eletricidade −33,8%, gás natural −31,2%, água — segundo as regras do município. Funciona através do cruzamento do NIF com a Segurança Social e a Autoridade Tributária, pelo que também se aplica a expatriados com NIF português, se o contrato da habitação estiver em seu nome e o rendimento/subsídio cumprir os critérios. Em 2026, para a eletricidade é necessário um contrato doméstico para habitação permanente e potência até 6,9 kVA.',
  tags: ['tarifa', 'energia', 'água', 'nif'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que oferece a Tarifa Social',
      content: [
        { kind: 'paragraph', text: 'A Tarifa Social de Energia não é um fornecedor barato separado, mas sim um desconto regulado aplicado à fatura. É aplicada pelo seu fornecedor de eletricidade ou gás depois de confirmado o direito através das bases de dados do Estado.' },
        { kind: 'checklist', items: [
          'Eletricidade: desconto de 33,8% sobre as componentes reguladas da tarifa; na fatura aparece normalmente uma linha Tarifa Social.',
          'Gás natural: desconto de 31,2% para clientes domésticos de baixa pressão com consumo anual reduzido.',
          'Água, saneamento e resíduos: a Tarifa Social da Água depende da Câmara Municipal / serviço municipal; o valor e a fórmula variam consoante o município.',
          'O desconto aplica-se à residência permanente, não a qualquer segunda casa ou apartamento turístico.',
          'É necessário NIF português do titular do contrato com a E-REDES/fornecedor, fornecedor de gás ou água municipal.',
          'A nacionalidade não é relevante: um expatriado com NIF, morada em Portugal e rendimento adequado pode obter a tarifa.'
        ] },
        { kind: 'warning', text: 'A Tarifa Social não elimina a fatura inteira. IVA, potência contratada, taxas, contribuição audiovisual e serviços do fornecedor podem continuar parcial ou totalmente a pagamento.' }
      ]
    },
    {
      id: 'eligibility',
      title: 'Quem cumpre os critérios em 2026',
      content: [
        { kind: 'paragraph', text: 'A lógica principal: o titular do contrato deve ser “cliente economicamente vulnerável”. O direito é verificado pelo NIF através da Segurança Social e da Autoridade Tributária. Para a eletricidade, também são importantes as condições técnicas do contrato.' },
        { kind: 'checklist', items: [
          'Eletricidade: contrato doméstico para habitação permanente.',
          'Potência contratada de eletricidade — até 6,9 kVA inclusive.',
          'O titular do contrato recebe uma das prestações: Complemento Solidário para Idosos, Rendimento Social de Inserção, subsídio social de desemprego, abono de família, pensão social de velhice, pensão social de invalidez ou complemento da prestação social para a inclusão.',
          'Alternativa para a eletricidade: baixo rendimento anual do agregado familiar. Em 2026, a referência é 12 × IAS = 6 445,56 € por ano, com majoração por membros do agregado sem rendimento de acordo com as regras do regime.',
          'Gás natural: contrato doméstico, baixa pressão, consumo anual até 500 m³ e estatuto de cliente economicamente vulnerável.',
          'Água: os critérios são definidos pelo município; frequentemente aceitam as mesmas prestações sociais ou rendimento abaixo de um limite ligado ao IAS.',
          'Dívidas ao fornecedor, por si só, não devem retirar automaticamente o direito à Tarifa Social, mas podem dificultar a mudança de fornecedor ou a celebração de um novo contrato.'
        ] },
        { kind: 'warning', text: 'Se o contrato estiver em nome do senhorio, de um familiar ou de um antigo residente, o cruzamento automático não funcionará para si. Primeiro, passe o contrato de eletricidade/gás/água para o seu NIF.' }
      ]
    },
    {
      id: 'automatic',
      title: 'Como é ativada automaticamente',
      content: [
        { kind: 'paragraph', text: 'Para eletricidade e gás natural, o regime foi pensado como automático. O fornecedor envia periodicamente o NIF do titular do contrato para verificação, e os sistemas do Estado confirmam ou recusam o direito sem transmitir ao fornecedor detalhes sobre o seu subsídio ou rendimento.' },
        { kind: 'checklist', items: [
          'Confirme que no contrato consta o seu NIF, e não o NIF do senhorio.',
          'Verifique a morada fiscal nas Finanças e a morada do contrato: para habitação permanente, é melhor corrigir divergências.',
          'Certifique-se de que a potência contratada não é superior a 6,9 kVA, se pretende a tarifa social de eletricidade.',
          'Verifique na Segurança Social Direta se a prestação está ativa e associada ao seu NIF.',
          'Se o fundamento for rendimento, verifique a última declaração de IRS ou a inexistência de declaração, se ainda não estiver obrigado a entregá-la.',
          'Veja a fatura em PDF: o desconto aparece normalmente como “Tarifa Social”, “Desconto Tarifa Social” ou uma linha semelhante.',
          'Se o desconto aparecer, normalmente não é necessário apresentar um pedido separado.'
        ] },
        { kind: 'paragraph', text: 'Na prática, a primeira ativação automática pode demorar alguns ciclos de faturação. Se acabou de passar o contrato para o seu nome ou começou a receber uma prestação, verifique a fatura seguinte e a posterior.' }
      ]
    },
    {
      id: 'manual-request',
      title: 'Se o desconto não aparecer: pedido manual',
      content: [
        { kind: 'paragraph', text: 'Se tem a certeza de que cumpre os critérios, mas a fatura não apresenta o desconto, apresente um pedido de atribuição da tarifa social ao fornecedor. Pode fazê-lo na área de cliente, por email, numa loja ou através do apoio ao cliente.' },
        { kind: 'checklist', items: [
          'PDF da última fatura de eletricidade ou gás.',
          'NIF do titular do contrato.',
          'CPE para eletricidade ou CUI para gás — indicados na fatura.',
          'Documento de identificação: autorização de residência, Cartão de Cidadão ou passaporte.',
          'Comprovativo da morada permanente: contrato de arrendamento, atestado de residência ou outro documento, se o fornecedor pedir.',
          'Declaração da Segurança Social sobre a prestação, se a verificação automática não tiver funcionado.',
          'IRS/nota de liquidação ou declaração de rendimentos, se o fundamento for baixo rendimento.',
          'Para a água — pedido na Câmara Municipal, SMAS ou empresa municipal de abastecimento de água; cada município tem o seu formulário.'
        ] },
        { kind: 'warning', text: 'Não envie documentos médicos ou migratórios desnecessários num chat geral de apoio. Para a Tarifa Social, normalmente bastam o NIF, o contrato, a morada e a prova do critério social/de rendimento.' }
      ]
    },
    {
      id: 'water',
      title: 'Água: porque tudo depende do município',
      content: [
        { kind: 'paragraph', text: 'A Tarifa Social da Água é regulada de forma diferente da eletricidade e do gás. O Estado criou o enquadramento, mas a tarifa concreta, a automaticidade, a lista de documentos e o valor do desconto são definidos pelo município ou entidade gestora: Câmara Municipal, SMAS, EMAR, Águas de Gaia, etc.' },
        { kind: 'checklist', items: [
          'Procure no site da sua Câmara Municipal a secção “tarifa social da água”, “tarifário social” ou “ação social”.',
          'Verifique se o benefício se aplica apenas à água ou também ao saneamento e resíduos urbanos.',
          'Confirme o limite de consumo: muitas vezes o desconto só se aplica aos m³ de base, e o consumo mais elevado é pago segundo a escala normal.',
          'Verifique se é necessário que o contrato da água esteja no seu NIF.',
          'Se arrenda um quarto e a água está incluída na renda, normalmente não é possível obter um desconto pessoal.',
          'Alguns municípios fazem verificação automática através da AT/Segurança Social, outros exigem pedido anual.',
          'Ao mudar-se para outro concelho, o direito deve ser verificado novamente.'
        ] },
        { kind: 'paragraph', text: 'Orientação prática: para eletricidade e gás, verifique primeiro junto do fornecedor comercial; para a água, junto do município ou da empresa municipal que emite a fatura.' }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Erros frequentes dos expatriados',
      content: [
        { kind: 'checklist', items: [
          'O contrato de eletricidade ficou em nome do senhorio: o desconto é verificado pelo NIF dele, não pelo seu.',
          'Escolheu potência de 10,35 kVA “por precaução”: para a tarifa social de eletricidade, o limite é 6,9 kVA.',
          'A morada fiscal nas Finanças ainda é estrangeira ou uma antiga morada portuguesa.',
          'A prestação está em nome do cônjuge, mas o contrato está em nome de outra pessoa; o cruzamento automático pode não coincidir.',
          'Espera desconto em bottled gas: a Tarifa Social de Gás Natural aplica-se ao gás natural da rede, não a botijas.',
          'Pensa que o NHR/IFICI ou o tipo de visto D7/D8 dão direito por si só: não, contam o rendimento, a prestação e os parâmetros do contrato.',
          'Depois de mudar de fornecedor, não verificou a primeira fatura: o desconto deve ser transferido, mas podem ocorrer falhas.',
          'Para a água, apresentou o pedido ao fornecedor de eletricidade em vez da Câmara Municipal ou dos SMAS.'
        ] },
        { kind: 'paragraph', text: 'Se houver recusa, peça o motivo por escrito: “não elegível por potência”, “NIF não validado”, “contrato não doméstico”, “morada não permanente”. Pela formulação, normalmente percebe-se o que deve corrigir.' }
      ]
    }
  ],
  sources: [
    {
      title: 'ERSE: Tarifa Social — tarifas e preços',
      url: 'https://www.erse.pt/atividade/tarifas-e-precos/tarifa-social/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ERSE: secção para cidadãos sobre faturas e energia',
      url: 'https://www.erse.pt/inicio/cidadao/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Diário da República: Decreto-Lei 138-A/2010 — Tarifa Social de eletricidade',
      url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/138-a-2010-306111',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Diário da República: Decreto-Lei 101/2011 — Tarifa Social de gás natural',
      url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/101-2011-671579',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
