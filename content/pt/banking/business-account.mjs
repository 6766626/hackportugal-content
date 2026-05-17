export default {
  editorialVoice: 'hackportugal',
  id: 'business-account',
  categoryId: 'banking',
  title: 'Abrir uma conta empresarial — para trabalhadores independentes e empresas',
  tldr: 'Para recibos verdes em regime simplificado, uma conta empresarial separada normalmente não é obrigatória, mas é altamente recomendada. Uma conta separada é obrigatória para IRS com contabilidade organizada (geralmente com volume de negócios > 200 000 €/ano ou por opção) e para empresas (Lda, SA). Os bancos Millennium BCP, Santander Totta, Caixa Geral, BPI apoiam trabalhadores independentes. Para Lda — os mesmos + ActivoBank Empresas (online). Custo: 5–15 €/mês de manutenção + comissões por transferências.',
  tags: ['banco', 'empresa', 'trabalhador independente', 'lda', 'recibos verdes', 'empresa'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'when-needed',
      title: '⚖️ Quando a conta empresarial é obrigatória',
      content: [
        { kind: 'substeps', items: [
          { id: 'ind', title: 'Trabalhador independente (Recibo Verde)', content: [
            { kind: 'checklist', items: [
              '🟢 Em regime simplificado, uma conta separada não é juridicamente obrigatória; recomenda-se separar operações pessoais e profissionais para comprovar despesas e controlar fluxos de caixa',
              '🟡 Com qualquer volume de negócios, o contabilista aconselha uma conta separada por conveniência, mas a obrigação jurídica surge com contabilidade organizada',
              '🔴 Se o trabalhador independente passar para contabilidade organizada (normalmente ao exceder 200 000 €/ano nos termos do CIRS art. 28 ou por opção voluntária) — é necessária uma conta utilizada para as operações da actividade. Algumas profissões podem ter regras adicionais (por exemplo, client account para advogados)',
              '⚠️ A conta do trabalhador independente pode ser uma conta pessoal comum, em seu nome'
            ]}
          ]},
          { id: 'lda', title: 'Sociedade por Quotas / Lda', content: [
            { kind: 'checklist', items: [
              '✅ É necessária uma conta corporativa após o registo da empresa — uma conta separada em nome da Lda',
              '💰 A quota mínima é 1 € por sócio; numa sociedade unipessoal por quotas o capital social pode ser 1 €. Os bancos podem preferir um capital/primeiro depósito mais elevado, mas isso é política comercial/KYC do banco, não lei',
              '🆔 O capital social é indicado no registo; a sua realização pode normalmente ser diferida dentro dos prazos previstos na lei/documentos constitutivos — não é exigido bloqueio prévio do capital antes do registo comercial',
              '📋 Para registar uma Lda, normalmente não é necessária uma conta bancária antecipadamente — a Empresa na Hora/IRN permite registar a empresa sem conta; a conta é aberta depois de obter o NIPC/certidão permanente',
              '⚠️ Não misture dinheiro da empresa com fundos pessoais. Quaisquer transferências entre a Lda e sócios/gerentes devem ter fundamento jurídico — salário, dividendos, suprimentos/empréstimo, reimbursement — e a tributação depende da classificação da operação'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'choose-bank',
      title: '🏦 Escolha do banco',
      content: [
        { kind: 'substeps', items: [
          { id: 'b1', title: 'Bancos tradicionais', content: [
            { kind: 'checklist', items: [
              '🏛️ **Millennium BCP** — o mais popular para empresas, tem gestor para trabalhadores independentes',
              '🏛️ **Santander Empresas** — bom para importação/exportação (transferências internacionais)',
              '🏛️ **Caixa Geral de Depósitos** (CGD) — banco estatal, mais lento, mas mais fiável',
              '🏛️ **BPI Empresas** — opção competitiva para Lda de média dimensão',
              '💰 Manutenção: 5–15 €/mês; pacotes com transferências — 10–25 €/mês',
              '⏱️ Abertura: 1–2 semanas, é necessária visita presencial'
            ]}
          ]},
          { id: 'b2', title: 'Bancos online', content: [
            { kind: 'checklist', items: [
              '💻 **ActivoBank Empresas** — banco do grupo Millennium, orientado para serviço online',
              '💻 **Caixadirecta Empresas** (CGD) — canal online do banco estatal',
              '🌐 **Wise Business** — útil como conta adicional para pagamentos internacionais. Para o trabalho diário de uma Lda, muitas vezes é mais prático ter um PT IBAN num banco português; formalmente, recusar aceitar um EU SEPA IBAN apenas por causa do país do IBAN pode constituir IBAN discrimination, mas integrações com AT/SS/fornecedores podem criar atrito',
              '🌐 **Revolut Business** — pode emitir LT ou PT IBAN consoante a migração; para operações locais, uma conta PT é mais conveniente',
              '⚠️ A lei não exige que uma Lda tenha especificamente um PT IBAN; o PT IBAN é, na prática, mais cómodo para AT, SS, salários e contrapartes'
            ]}
          ]},
          { id: 'b3', title: 'Especializados', content: [
            { kind: 'checklist', items: [
              '🏗️ **Banco BIC** — para o sector da construção',
              '🌾 **Crédito Agrícola** — para agricultura / sector agrícola',
              '🛒 **Banco BAI** — banco luso-angolano, para comércio com países PALOP',
              '🇪🇺 **EuroBic / Bankinter** — tarifas premium para clientes com maior património'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'documents',
      title: '📋 Documentos para abertura',
      content: [
        { kind: 'substeps', items: [
          { id: 'd1', title: 'Para trabalhador independente', content: [
            { kind: 'checklist', items: [
              '🪪 Cartão de Cidadão / autorização de residência (original)',
              '🔢 NIF',
              '🛡️ NISS (não obrigatório, mas desejável)',
              '📄 Início de Atividade (formulário AT — comprovativo da actividade)',
              '🏠 Comprovativo de morada: factura de serviços públicos dos últimos 3 meses',
              '💰 Primeiro depósito: 0–50 € (em alguns bancos)'
            ]}
          ]},
          { id: 'd2', title: 'Para Lda', content: [
            { kind: 'checklist', items: [
              '📄 **Pacto Social** — contrato constitutivo da Lda',
              '📜 **Certidão Permanente** — certidão de registo (pode ser obtida online em portalcidadao.pt por 25 €)',
              '🆔 Cartão de Cidadão + NIF dos fundadores e gerentes',
              '🔢 NIF da empresa',
              '💰 Capital social para bloqueio na conta',
              '📃 **Beneficial Owners (RCBE)** — declaração obrigatória dos beneficiários efectivos',
              '🏢 Comprovativo de sede: morada do escritório/escritório virtual',
              '⚠️ Para fundadores estrangeiros — documentos apostilados do país'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'process',
      title: '⏱️ Processo de abertura',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: 'Para trabalhador independente — simples', content: [
            { kind: 'checklist', items: [
              '📅 Marcar reunião no banco (online ou por telefone)',
              '🏛️ Comparecer com os documentos — reunião de 30–45 minutos',
              '✍️ Assinar o contrato',
              '💳 Receber o cartão de débito (entrega por correio em 7–10 dias)',
              '🔐 Activar o homebanking',
              '⏱️ Processo completo: 1–2 semanas'
            ]}
          ]},
          { id: 'p2', title: 'Para Lda — mais longo', content: [
            { kind: 'checklist', items: [
              '🏛️ **Passo 1**: Registo da Lda através da «Empresa na Hora» (60 minutos, normalmente ~360 €) ou Conservatória (tarifas segundo a tabela emolumentar IRN)',
              '🆔 **Passo 2**: Obter automaticamente o NIPC da empresa após o registo + certidão permanente',
              '📃 **Passo 3**: Submeter a declaração RCBE online no IRN — normalmente no prazo de 30 dias após o registo',
              '📩 **Passo 4**: Submeter a declaração de início de atividade na AT',
              '🏦 **Passo 5**: Abrir a conta da empresa no banco (reunião de 1–2 horas)',
              '💰 **Passo 6**: Depositar o capital social/primeiro depósito de acordo com os estatutos e os prazos de realização',
              '✅ **Passo 7**: Activação do homebanking',
              '⏱️ Processo completo: 2–4 semanas'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'fees',
      title: '💰 Comissões e manutenção',
      content: [
        { kind: 'checklist', items: [
          '💳 **Manutenção mensal**: 5–25 € (mais elevada para pacotes com gestor)',
          '🔁 **Transferência SEPA dentro da UE**: 0,50–2 € (Wise é mais barato)',
          '🌐 **Transferência internacional**: 25–50 € + 0,5–1% de spread cambial',
          '💱 **Conversão de moeda**: spread de 1–3% (até 5% em bancos tradicionais!)',
          '🏧 **Levantamento em ATM**: gratuito no seu próprio banco, 0,50–2 € noutros',
          '📱 **MB WAY**: gratuito para empresas',
          '📊 **Obtenção de Certidão Permanente**: o banco pode cobrar 25–50 €/ano',
          '⚠️ Compare uma conta corporativa com uma conta pessoal para trabalhador independente — para pequenos trabalhadores independentes, a conta pessoal é mais barata'
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Conselhos',
      content: [
        { kind: 'checklist', items: [
          '🤝 Vá à reunião com um contabilista — ele ajudará a escolher o pacote correcto',
          '💰 Negocie as comissões — especialmente para negócios > 50 000 €/ano',
          '📋 Peça as tarifas por escrito antes de assinar',
          '🔄 Pode mudar de banco a qualquer momento, mas clientes internacionais perdem a reputação acumulada',
          '🌍 Para negócios com clientes estrangeiros: Wise Business (moedas adicionais) + conta portuguesa local para Lda',
          '⚖️ Para profissões reguladas (advogado, médico, engenheiro): pergunte sobre tarifas especiais',
          '📊 Contabilidade organizada é obrigatória para Lda. Para recibos verdes — normalmente apenas ao exceder 200 000 €/ano ou por opção voluntária; até lá, regime simplificado, embora a ajuda de um contabilista seja frequentemente útil (80–200 €/mês)',
          '🛡️ A AT pode pedir um extracto bancário a qualquer momento — mantenha as operações profissionais separadas'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Abertura de conta para trabalhador independente', amountEUR: 0 },
    { label: 'Abertura de conta corporativa Lda', amountEURMin: 0, amountEURMax: 50 },
    { label: 'Manutenção mensal', amountEURMin: 5, amountEURMax: 25 },
    { label: 'Empresa na Hora (registo de Lda)', amountEUR: 360 },
    { label: 'Conservatória: registo de Lda (modelo clássico)', amountEUR: 220 },
    { label: 'Contabilidade Lda/mês', amountEURMin: 80, amountEURMax: 250 }
  ],
  sources: [
    { title: 'Banco de Portugal — Conta de pagamentos', url: 'https://www.bportugal.pt/page/contas-de-pagamentos', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Empresa na Hora', url: 'https://justica.gov.pt/Servicos/Empresas/Empresa-na-Hora', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Autoridade Tributária — Início de Atividade', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.htmlindex.html', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
