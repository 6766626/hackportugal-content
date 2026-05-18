export default {
  editorialVoice: 'hackportugal',
  id: 'aceitar-pagamentos-cartao',
  categoryId: 'work_business',
  title: 'Aceitar pagamentos por cartão: POS, MB WAY merchant, SumUp e Stripe para trabalhadores independentes',
  tldr: 'Em Portugal, trabalhadores independentes/PME normalmente aceitam cartões através de POS bancário/SIBS, terminal móvel SumUp ou online através da Stripe. A SumUp indica publicamente uma comissão de 1,69% por transação e sem mensalidade; os POS bancários muitas vezes têm aluguer do terminal e MDR conforme contrato. O MB WAY para negócios é ativado como serviço de merchant através de banco/PSP, e não como transferências pessoais. O talão do POS não substitui a fatura: a venda tem de ser emitida no Portal das Finanças ou em faturação certificada.',
  tags: ['pos', 'mb way', 'stripe', 'sumup', 'faturas'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'choose-channel',
      title: '1. Escolha o canal de pagamento para o seu cenário',
      content: [
        { kind: 'paragraph', text: 'Para um trabalhador independente em Portugal não existe um POS «obrigatório» único. Você escolhe o fornecedor: banco/SIBS para um terminal clássico, SumUp para começar rapidamente sem aluguer, Stripe para pagamentos online e subscrições, MB WAY merchant para pagamentos por número de telefone/QR/checkout.' },
        { kind: 'checklist', items: [
          'Serviços presenciais no local: SumUp ou POS bancário.',
          'Loja, café, salão, fluxo regular: POS através de banco/SIBS com MDR contratual.',
          'Pagamento online por cartão: Stripe Checkout, Payment Links ou integração no site.',
          'Público português: acrescente MB WAY merchant — os clientes usam ativamente o MB WAY.',
          'Serviços pontuais sem site: Stripe Payment Link ou link de pagamento SumUp.',
          'Faturas B2B: transferência bancária + fatura-recibo costuma ser mais barato do que cartão.',
          'Valor médio elevado: compare a % de comissão e a parte fixa; caso contrário, o cartão consome a margem.'
        ] }
      ]
    },
    {
      id: 'providers',
      title: '2. O que oferecem SIBS/POS, SumUp, Stripe e MB WAY',
      content: [
        { kind: 'substeps', items: [
          { id: 'sibs-pos', title: 'POS bancário / SIBS', content: [
            { kind: 'paragraph', text: 'A SIBS é a infraestrutura do Multibanco, MB WAY e soluções para comerciantes. Normalmente, o POS não é contratado diretamente «na SIBS», mas através de um banco ou adquirente: Millennium, Santander, CGD, BPI, Novobanco, ActivoBank e outros PSP.' },
            { kind: 'checklist', items: [
              'Vantagens: familiar para clientes portugueses, Multibanco/cartões/frequentemente MB WAY num único terminal.',
              'Desvantagens: os tarifários muitas vezes não são públicos; podem existir mensalidade, aluguer do terminal, comissão mínima.',
              'Adequado para PME com volume constante e ponto físico.',
              'Antes de assinar, peça o MDR para cartões EEA, non-EEA, commercial cards e reembolsos.'
            ] }
          ]},
          { id: 'sumup', title: 'SumUp', content: [
            { kind: 'paragraph', text: 'A SumUp é prática para freelancers, técnicos, vendas pop-up e pequenos serviços: compra-se o terminal, normalmente não há mensalidade e a comissão é pública. Na página de preços da SumUp Portugal é indicado 1,69% por transação para card reader.' },
            { kind: 'warning', text: 'Verifique o preço atual do terminal antes de comprar: as promoções mudam. Mais importante do que o preço do equipamento é a comissão sobre o volume de vendas e o prazo de disponibilização do dinheiro.' }
          ]},
          { id: 'stripe', title: 'Stripe', content: [
            { kind: 'paragraph', text: 'A Stripe é a principal opção para cartões online, Payment Links, subscrições, SaaS, consultas através de site. Para Portugal, a comissão standard da Stripe para cartões em 2026 começa normalmente em 1,5% + 0,25 € por pagamento bem-sucedido com cartões EEA; para cartões do UK/internacionais é mais caro.' },
            { kind: 'checklist', items: [
              'É necessário NIF/NIPC, IBAN bancário, identificação do titular.',
              'Pode operar como empresário em nome individual/recibos verdes ou empresa.',
              'O recibo da Stripe não é uma fatura portuguesa.',
              'Reembolsos e chargeback têm regras próprias e podem custar dinheiro.',
              'Para vendas online, verifique SCA/3-D Secure e a política de reembolsos.'
            ] }
          ]},
          { id: 'mbway-merchant', title: 'MB WAY merchant', content: [
            { kind: 'paragraph', text: 'O MB WAY para negócios é ativado através de banco/PSP/SIBS como serviço de merchant: QR, request-to-pay, checkout em e-commerce ou POS. Não é o mesmo que receber dinheiro no MB WAY pessoal entre particulares.' },
            { kind: 'warning', text: 'Não use transferências MB WAY pessoais como caixa permanente do negócio: não terá contabilidade, reconciliation nem contrato de merchant adequados, e o banco pode pedir a origem das operações.' }
          ]}
        ] }
      ]
    },
    {
      id: 'documents',
      title: '3. O que preparar para a ativação',
      content: [
        { kind: 'paragraph', text: 'Os fornecedores de pagamentos são obrigados a fazer verificações KYC/AML. Mesmo que esteja apenas em recibos verdes, vão pedir-lhe para confirmar a identidade, o estatuto fiscal e a conta bancária.' },
        { kind: 'checklist', items: [
          'NIF e acesso ao Portal das Finanças.',
          'Documento de identificação: passaporte, Cartão de Cidadão ou autorização de residência.',
          'IBAN português ou SEPA em seu nome/da empresa.',
          'Morada em Portugal e telefone/e-mail.',
          'Caderneta predial/contrato de arrendamento ou comprovativo de morada — por vezes para risk review.',
          'Declaração de início de atividade nas Finanças com CAE/CIRS correto.',
          'Para empresa: certidão permanente, NIPC, dados dos sócios/beneficiário efetivo.',
          'Descrição dos bens/serviços, site ou redes sociais, se ativar pagamentos online.',
          'Política de reembolsos e contactos do comerciante para e-commerce.'
        ] },
        { kind: 'warning', text: 'Se a atividade nas Finanças não estiver aberta, abra primeiro o início de atividade. Aceitar pagamentos comerciais «no cartão pessoal» sem faturação é um risco fiscal em IRS/IVA e risco de bloqueio pelo PSP.' }
      ]
    },
    {
      id: 'fees',
      title: '4. Como calcular comissões e não errar na margem',
      content: [
        { kind: 'paragraph', text: 'Não compare apenas a percentagem. Custo total = comissão por transação + parte fixa + aluguer do terminal + chargeback/refund + custo de integração + tempo contabilístico para reconciliação.' },
        { kind: 'checklist', items: [
          'SumUp: publicamente 1,69% por transação; mensalidade normalmente 0 €.',
          'Stripe cards EEA: referência de 1,5% + 0,25 € por pagamento bem-sucedido; UK/international cards são mais caros.',
          'POS bancário: MDR e mensalidade dependem do banco, volume, setor e tipo de cartões.',
          'MB WAY merchant: a comissão é definida pelo banco/PSP; peça o preço separadamente do card acquiring.',
          'Para talões pequenos, os 0,25 € fixos no acquiring online podem pesar bastante.',
          'Para talões de 5–10 €, muitas vezes compensa mais um POS sem parte fixa, se o banco oferecer MDR baixo.',
          'Para talões de 100–500 €, a percentagem e a existência de chargeback são mais importantes.',
          'Pergunte o prazo de payout: D+1, D+2, weekly payout ou rolling reserve.',
          'Verifique se há taxa de devolução do terminal, inactivity fee ou minimum monthly fee.'
        ] },
        { kind: 'paragraph', text: 'Exemplo: uma consulta de 100 € através da SumUp a 1,69% custa 1,69 €; entram na conta cerca de 98,31 € antes de impostos. Um pagamento online Stripe com cartão EEA a 1,5% + 0,25 € custa 1,75 €; entram na conta cerca de 98,25 € antes de impostos.' }
      ]
    },
    {
      id: 'invoicing',
      title: '5. Ligação à faturação: talão POS ≠ fatura',
      content: [
        { kind: 'paragraph', text: 'O fornecedor de pagamentos confirma o recebimento do dinheiro, mas não cumpre a obrigação fiscal de emitir fatura.\n\nEm Portugal, a venda/serviço deve ser refletida através do Portal das Finanças ou de software de faturação certificado, se o utilizar.' },
        { kind: 'checklist', items: [
          'Para recibos verdes: pode emitir fatura-recibo no Portal das Finanças depois do pagamento.',
          'Se emitir primeiro a fatura, use fatura e depois recibo após receber o dinheiro.',
          'Para retalho e grande volume, é mais prática a faturação certificada com QR Code e ATCUD.',
          'Guarde o ID da transação POS/Stripe/SumUp junto ao número da fatura para reconciliação.',
          'Separe gross sales, fees e net payout: a comissão do PSP é despesa do negócio.',
          'Se estiver no regime de isenção IVA ao abrigo do art. 53 CIVA, emita na mesma fatura com o motivo correto de isenção.',
          'Se liquidar IVA, o valor do IVA é calculado sobre o preço total da venda, e não sobre o montante após a comissão do PSP.',
          'Exporte monthly statements da Stripe/SumUp/banco para o contabilista.',
          'O reembolso ao cliente deve ser formalizado com nota de crédito, e não apenas como «menos» no extrato.'
        ] },
        { kind: 'warning', text: 'Erro clássico: receber 98,31 € após comissão e emitir fatura de 98,31 €. A venda fiscal foi de 100 €, e a comissão de 1,69 € é a sua despesa.' }
      ]
    },
    {
      id: 'setup-plan',
      title: '6. Plano prático de arranque em 1–3 dias',
      content: [
        { kind: 'checklist', items: [
          'Verifique se a atividade está aberta nas Finanças e se o CAE/CIRS corresponde ao serviço.',
          'Decida se precisa de terminal físico, link online ou ambos os canais.',
          'Para começar rapidamente, compre/encomende SumUp ou crie um Stripe Payment Link.',
          'Se tiver loja/fluxo, peça a 2–3 bancos uma proposta de POS + MB WAY merchant.',
          'Compare a effective fee nos seus talões reais: 10 €, 50 €, 100 €, 500 €.',
          'Configure a fatura-recibo ou a faturação certificada antes do primeiro pagamento.',
          'Faça um pagamento de teste de 1–2 € e verifique o receipt, payout e extrato bancário.',
          'Crie uma tabela de reconciliation: data, cliente, montante gross, fee, net, número da fatura, payout batch.',
          'Informe os clientes sobre os métodos que aceita: cartão, MB WAY, transferência bancária, dinheiro.'
        ] },
        { kind: 'paragraph', text: 'Se já tiver Contabilista Certificado, confirme com ele como registar as comissões PSP e que relatórios exportar mensalmente. É mais barato do que resolver o caos no fim do ano antes do IRS/IRC.' }
      ]
    }
  ],
  costs: [
    { label: 'Comissão de transação com cartão SumUp', amountEURMin: 1.69, amountEURMax: 1.69, note: 'É a percentagem de comissão: 1,69% por transação segundo a página pública da SumUp Portugal; o campo está indicado como número devido ao formato do guia.' },
    { label: 'Comissão de cartão Stripe EEA', amountEURMin: 1.5, amountEURMax: 1.5, note: 'Referência: 1,5% + 0,25 € por pagamento bem-sucedido com cartão EEA; os tarifários da Stripe dependem do método e do país do cartão.' },
    { label: 'Parte fixa Stripe EEA', amountEUR: 0.25, note: 'Acresce à comissão percentual por pagamento bem-sucedido com cartão no tarifário standard.' },
    { label: 'Aluguer de POS bancário', amountEURMin: 0, amountEURMax: 25, note: 'Intervalo típico de mercado por mês; a mensalidade e o MDR exatos só constam da proposta do banco/PSP.' }
  ],
  sources: [
    {
      title: 'SIBS — soluções para comerciantes: POS, MB WAY e Multibanco',
      url: 'https://www.sibs.com/merchant-and-corporate/',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'SumUp Portugal — preços e comissões',
      url: 'https://sumup.pt/precos/',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Stripe Portugal — preços para cartões e métodos de pagamento',
      url: 'https://stripe.com/pt/pricing',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Autoridade Tributária — regras de faturação e emissão de faturas',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Pages/default.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
