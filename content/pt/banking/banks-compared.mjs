export default {
  editorialVoice: 'hackportugal',
  id: 'banks-compared',
  categoryId: 'banking',
  title: 'Bancos portugueses e neobancos — comparação 2026',
  tldr: 'Três níveis: bancos clássicos (Millennium, CGD, Santander, BPI, Novobanco) — serviço completo, balcões, créditos, mas comissões de 4–8 €/mês. Bancos online ActivoBank / BiG — sem comissões de conta, IBAN PT, MB WAY. Neobancos: a Revolut pode emitir IBAN PT ou LT consoante a migração/conta; a Wise normalmente tem IBAN BE; o N26 — IBAN DE. Transferências baratas, mas com limitações para pensões e pagamentos oficiais.',
  tags: ['banco', 'conta', 'iban', 'mb way', 'revolut'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'classic',
      title: 'Bancos clássicos — serviço completo',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Millennium BCP', content: [
            { kind: 'checklist', items: [
              'Maior banco privado de Portugal',
              'Conta: 4,50 €/mês (com salário 0 €)',
              'Aplicação normalmente PT/EN; não conte com versão em russo',
              'Rede de ~400 balcões',
              'Bom para crédito habitação para não residentes',
              'Comissão por transferência SEPA: 0 €, SWIFT: 15–40 €'
            ]}
          ]},
          { id: 'c2', title: 'Caixa Geral de Depósitos (CGD)', content: [
            { kind: 'checklist', items: [
              'Banco público, o maior',
              'Conta: 6 €/mês (com salário/para estudantes — 0 €)',
              '~600 balcões em todo o Portugal',
              'KYC rigoroso para não residentes',
              'Programa forte de crédito habitação'
            ]}
          ]},
          { id: 'c3', title: 'Santander Totta', content: [
            { kind: 'checklist', items: [
              'Grupo espanhol, banco universal',
              'Conta: 7 €/mês',
              'Aplicação normalmente PT/EN/ES; não conte com versão em russo',
              'Abrem contas a não residentes com facilidade',
              'Conversão EUR ↔ outras moedas a uma taxa favorável'
            ]}
          ]},
          { id: 'c4', title: 'BPI', content: [
            { kind: 'paragraph', text: 'Parte do CaixaBank (Espanha). Bom para investimentos e gestão de património. Conta 6 €/mês. Menos balcões, mas uma aplicação forte.' }
          ]},
          { id: 'c5', title: 'Novobanco', content: [
            { kind: 'paragraph', text: 'Antigo BES. Estável após a reestruturação. 4 €/mês. Um dos poucos que abre contas a estrangeiros com autorização de residência de forma flexível.' }
          ]}
        ]}
      ]
    },
    {
      id: 'online',
      title: 'Bancos online com IBAN PT',
      content: [
        { kind: 'substeps', items: [
          { id: 'o1', title: 'ActivoBank (Millennium)', content: [
            { kind: 'checklist', items: [
              'IBAN PT, sem comissão de conta',
              'Aplicação completa, MB WAY',
              'Visa de débito gratuito',
              'Adequado para salário, recibos verdes, renda',
              'Principalmente online + centro de atendimento; existem pontos físicos de atendimento, mas não uma rede clássica de balcões',
              'Abertura: totalmente online com NIF e autorização de residência/Cartão de Cidadão'
            ]}
          ]},
          { id: 'o2', title: 'BiG (Banco de Investimento Global)', content: [
            { kind: 'paragraph', text: 'Especializado em investimentos. Bom para operações de corretagem, IBAN PT. Para banca do dia a dia — um pouco mais fraco do que o ActivoBank.' }
          ]},
          { id: 'o3', title: 'Moey! (marca digital do Crédito Agrícola)', content: [
            { kind: 'paragraph', text: 'Marca digital do Crédito Agrícola / Caixa Central de Crédito Agrícola Mútuo com registo totalmente online. IBAN PT, conta básica e cartão gratuitos, onboarding 100% mobile mediante cumprimento do KYC. Alternativa ao ActivoBank. (Vivid Money — anteriormente mencionado — saiu do mercado de retalho em 2024, já não aceita novos clientes.)' }
          ]}
        ]}
      ]
    },
    {
      id: 'neobanks',
      title: 'Neobancos europeus',
      content: [
        { kind: 'substeps', items: [
          { id: 'n1', title: 'Revolut', content: [
            { kind: 'checklist', items: [
              'A Revolut está gradualmente a transferir clientes em Portugal para IBAN PT através da sucursal portuguesa do Revolut Bank UAB; a disponibilidade depende do estado da conta/onboarding e das condições da Revolut à data de abertura. Verifique na aplicação que IBAN foi emitido: PT, LT ou outro',
              'SEPA gratuitos + câmbio de 20 moedas (dentro dos limites do plano; ao fim de semana normalmente há uma margem adicional)',
              'Criptomoedas, acções, ouro',
              'Sanções da UE: os bancos da UE não podem aceitar depósitos superiores a 100 000 € de cidadãos da Federação Russa/pessoas residentes na Federação Russa e entidades jurídicas russas, salvo se se aplicar uma excepção. Para cidadãos da Federação Russa com autorização de residência/residência permanente na UE/EEE/Suíça aplica-se uma excepção importante, mas o banco pode ainda assim solicitar KYC reforçado',
              'MB WAY — não é suportado na Revolut/Wise/N26'
            ]}
          ]},
          { id: 'n2', title: 'Wise', content: [
            { kind: 'checklist', items: [
              'IBAN: BE (Bélgica)',
              'Melhores taxas para transferências internacionais',
              'Debit card: o cartão físico normalmente tem uma taxa única; o cartão virtual pode ser gratuito. Verifique o tarifário da Wise para Portugal',
              'Menos funcionalidades bancárias, mas taxa de câmbio mais exacta',
              'Adequado como conta adicional para operações em moeda estrangeira'
            ]}
          ]},
          { id: 'n3', title: 'N26', content: [
            { kind: 'paragraph', text: 'IBAN DE. Banco alemão, popular entre alemães e escandinavos. Limite de carregamento a partir de alguns países.' }
          ]}
        ]},
        { kind: 'warning', text: 'Na prática, um IBAN PT é mais simples para Finanças, Segurança Social, salário, renda e direct debit. Pelas regras SEPA, a discriminação de IBAN é proibida, mas para um IBAN estrangeiro podem exigir validação manual/documentos, e alguns senhorios ou empresas ainda tentam exigir IBAN PT. É melhor manter a conta principal num banco português.' }
      ]
    },
    {
      id: 'how-to-open',
      title: 'Como abrir uma conta',
      content: [
        { kind: 'substeps', items: [
          { id: 'h1', title: 'Residente em Portugal (com autorização de residência)', content: [
            { kind: 'checklist', items: [
              'Documentos: Cartão de Cidadão/autorização de residência, NIF, comprovativo de morada, comprovativo de rendimentos',
              'Online (ActivoBank, BiG) ou ao balcão',
              'Abertura: 1 dia online, 3–7 dias ao balcão',
              'Primeiro depósito: normalmente 250 €'
            ]}
          ]},
          { id: 'h2', title: 'Não residente (sem autorização de residência)', content: [
            { kind: 'checklist', items: [
              'NIF é obrigatório',
              'Bancos: Millennium, Santander, Novobanco (os mais flexíveis)',
              'Comprovativo de rendimentos do estrangeiro (declaração de salário)',
              'Depósito mínimo: 250–1000 €',
              'Sanções da UE (Reg 833/2014): os bancos da UE não podem aceitar depósitos superiores a 100 000 € de cidadãos da Federação Russa/pessoas residentes na Federação Russa. Para cidadãos da Federação Russa com autorização de residência/residência permanente na UE/EEE/Suíça aplica-se uma excepção, mas o banco pode solicitar KYC reforçado e comprovativo de residência',
              'Sem autorização de residência, as contas são bloqueadas em caso de suspeita de branqueamento de capitais (AML)'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'mb-way',
      title: 'MB WAY — pagamentos e transferências por telefone',
      content: [
        { kind: 'paragraph', text: 'MB WAY — sistema português de pagamentos instantâneos da SIBS. Como a Revolut, mas apenas para IBAN PT.' },
        { kind: 'checklist', items: [
          '📱 Associar o número a um banco português através da aplicação do banco ou da aplicação MB WAY',
          '💸 Transferências por telefone instantâneas; o limite típico do MB WAY — até 2000 € por transferência e cerca de 5000 €/mês, mas cada banco pode definir limites mais baixos',
          '🛒 Pagamento em lojas por NFC / QR',
          '🎟️ Geração de cartões virtuais de utilização única',
          '🆓 O pagamento de compras é normalmente gratuito para o cliente; as transferências P2P podem ser gratuitas dentro dos limites/condições do banco',
          '🔄 Entre todos os bancos portugueses',
          '❌ NÃO funciona na Revolut / Wise / N26'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Banco clássico (comissão/mês)', amountEURMin: 4, amountEURMax: 8 },
    { label: 'Banco online com IBAN PT', amountEUR: 0 },
    { label: 'Revolut Standard (IBAN PT gratuito)', amountEUR: 0, note: 'desde 2025 novos clientes em PT recebem IBAN PT; os existentes são migrados gradualmente' },
    { label: 'Revolut Premium', amountEUR: 10, note: '~9,99 €/mês, mais limites/seguro' },
    { label: 'Primeiro depósito', amountEURMin: 250, amountEURMax: 1000 }
  ],
  sources: [
    { title: 'Banco de Portugal — Lista de instituições', url: 'https://www.bportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'FGD — Fundo de Garantia de Depósitos (garantia de 100 000 €)', url: 'https://www.fgd.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Banco de Portugal — Comparador de comissões', url: 'https://clientebancario.bportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'SIBS — MB WAY oficial', url: 'https://www.mbway.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
