export default {
  editorialVoice: 'hackportugal',
  id: 'activobank-opening',
  categoryId: 'banking',
  title: 'Abertura de conta bancária em Portugal (para não residentes e residentes)',
  tldr: 'Em Portugal existem cerca de 9 grandes bancos com licença do Banco de Portugal. Alguns permitem a abertura de conta totalmente online para não residentes com NIF português. Processo típico: identificação por vídeo, KYC básico, IBAN emitido no próprio dia, cartão por correio em 5-10 dias. A manutenção básica é gratuita na maioria dos bancos com actividade mínima.',
  tags: ['banco', 'conta', 'não residente', 'iban', 'mb way'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'why-pt-account',
      title: 'Porque precisa de uma conta portuguesa',
      content: [
        { kind: 'paragraph', text: 'Uma conta num banco português com IBAN começado por PT50 é necessária para a maioria dos procedimentos do dia a dia: registo de arrendamento de longa duração, débitos directos (serviços públicos, impostos, multas de trânsito), recebimento de salário, subscrição de investimentos, pagamento de prestações pela Segurança Social, pedido de autorização de residência (alguns tipos exigem prova de meios numa conta portuguesa).' },
        { kind: 'warning', text: 'Um IBAN de outro país da UE (IE, DE, LT, etc.) é tecnicamente equiparado a um português ao abrigo do regulamento SEPA, mas na prática alguns operadores portugueses recusam débitos directos com IBAN estrangeiro. Para compatibilidade total, é necessário um PT-IBAN.' }
      ]
    },
    {
      id: 'types-of-banks',
      title: 'Tipos de bancos em Portugal',
      content: [
        { kind: 'checklist', items: [
          'Grandes bancos universais: Millennium BCP, Caixa Geral de Depósitos (banco público), Novobanco, Santander Totta, BPI',
          'Subsidiárias online de grandes bancos: ActivoBank (do Millennium BCP)',
          'Neobancos digitais com licença da UE que operam em Portugal: Revolut (LT), N26 (DE), Wise (BE) — o IBAN não é PT, mas SEPA funciona',
          'Cooperativos e regionais: Crédito Agrícola, Montepio — muitas vezes convenientes em cidades pequenas',
          'Contas nos CTT (correios): Banco CTT — operador postal público com serviços bancários básicos'
        ]},
        { kind: 'paragraph', text: 'Bancos licenciados pelo Banco de Portugal ou por reguladores bancários da UE — depósitos até 100 000 € estão segurados pelo DGS nacional (Fundo de Garantia de Depósitos para bancos licenciados em Portugal, DGS equivalentes para outros bancos da UE).\n\nIMPORTANTE: Wise, Revolut e empresas de pagamento/EMI semelhantes NÃO têm estatuto de banco e, em regra, não estão cobertas pelo DGS; os fundos são protegidos por um regime de safeguarding (conta separada num banco parceiro). É um nível de protecção diferente — especialmente importante para saldos elevados.' }
      ]
    },
    {
      id: 'online-vs-branch',
      title: 'Online ou balcão',
      content: [
        { kind: 'substeps', items: [
          { id: 'o1', title: 'Online (à distância)', content: [
            { kind: 'paragraph', text: 'Alguns bancos permitem a abertura de conta totalmente online para clientes com NIF.\n\nProcesso: identificação por vídeo com operador em português ou inglês, assinatura electrónica através da Chave Móvel Digital ou por confirmação por vídeo. Adequado mesmo que ainda não esteja em Portugal, desde que já tenha NIF.' }
          ]},
          { id: 'o2', title: 'No balcão', content: [
            { kind: 'paragraph', text: 'O método clássico é comparecer num balcão com passaporte, NIF, comprovativo de morada e, por vezes, comprovativo de rendimentos. Os grandes bancos muitas vezes exigem identificação presencial para não residentes.' }
          ]}
        ]}
      ]
    },
    {
      id: 'documents',
      title: 'Documentos (conjunto padrão)',
      content: [
        { kind: 'checklist', items: [
          'Passaporte (válido por ≥ 6 meses, para cidadãos não UE)',
          'Cartão de Cidadão (para cidadãos portugueses/UE)',
          'NIF (Número de Identificação Fiscal) — obrigatório',
          'Comprovativo de morada — contrato de arrendamento, factura de serviços públicos ou extracto bancário com menos de 3 meses',
          'Comprovativo de rendimentos / origem dos fundos — recibo de vencimento, extracto de conta, declaração da entidade empregadora',
          'Número de telemóvel português — não é obrigatório, mas facilita muito a 2FA e o MB WAY'
        ]}
      ]
    },
    {
      id: 'typical-process',
      title: 'Processo típico de abertura online',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: '1. Preencher o formulário', content: [
            { kind: 'paragraph', text: 'No site ou na aplicação do banco: nome completo, NIF, profissão, origem dos rendimentos, finalidade da conta, residência fiscal. Para não residentes em Portugal, é necessário indicar no formulário o país de residência fiscal actual (conformidade CRS/DAC2).' }
          ]},
          { id: 'p2', title: '2. Carregar documentos', content: [
            { kind: 'paragraph', text: 'Digitalizações / fotografias do passaporte, NIF e comprovativo de morada. Qualidade: todos os cantos visíveis, sem reflexos.' }
          ]},
          { id: 'p3', title: '3. Identificação por vídeo (KYC)', content: [
            { kind: 'paragraph', text: 'Videochamada de 5-15 minutos. O operador pede para mostrar o passaporte, virá-lo e faz perguntas de controlo (ao abrigo da regulamentação AML). Falam em português ou inglês, por vezes em espanhol.' }
          ]},
          { id: 'p4', title: '4. Assinar o contrato', content: [
            { kind: 'paragraph', text: 'Assinatura electrónica: através da Chave Móvel Digital ou por código de confirmação enviado por e-mail + SMS.' }
          ]},
          { id: 'p5', title: '5. Receber o IBAN e o cartão', content: [
            { kind: 'timeline', text: 'O IBAN fica activo no dia da aprovação (1-3 dias). O cartão de débito chega por correio em 5-10 dias úteis.' }
          ]}
        ]}
      ]
    },
    {
      id: 'what-you-get',
      title: 'O que normalmente está incluído no pacote básico',
      content: [
        { kind: 'checklist', items: [
          'Conta em euros + opções multimoeda em alguns bancos',
          'Cartão de débito Visa/Mastercard (emissão gratuita na maioria dos bancos online)',
          'MB WAY — principal serviço de pagamentos português (transferências por número de telemóvel, QR, pagamento contactless)',
          'Banco móvel e web banking',
          'Transferências SEPA em euros dentro da zona SEPA; em muitos pacotes online são gratuitas, mas não em todos — depende do preçário',
          'Débitos directos (serviços públicos, impostos, multas de trânsito)',
          'Acesso ao Multibanco (rede de caixas automáticos em Portugal) com limites de levantamento de 200-400 €/dia'
        ]}
      ]
    },
    {
      id: 'fees-watch',
      title: 'A que deve prestar atenção',
      content: [
        { kind: 'checklist', items: [
          'Anuidade / manutenção — comissão anual/mensal de manutenção. Em muitos bancos online é 0 € com actividade mínima',
          'Imposto do Selo — imposto de selo. Em Portugal NÃO é uma taxa trimestral fixa pela conta em si; normalmente é cobrado como 4% sobre comissões bancárias, 0,5% sobre juros de créditos/créditos ao consumo, etc. Se tiver uma conta gratuita sem outros serviços — pode nem haver Imposto do Selo efectivo',
          'Comissão por levantamento em Multibanco de outro banco — normalmente 0 € em Portugal, mas há limites',
          'Comissão por inactividade — alguns bancos cobram 3-10 €/mês se a conta não for utilizada durante 6+ meses',
          'Câmbio de moeda (para transferências internacionais): margem de 1-3% sobre a taxa do BCE',
          'Comissão por transferência SWIFT fora da SEPA: 10-40 € + comissões de bancos correspondentes'
        ]}
      ]
    },
    {
      id: 'red-flags',
      title: 'Motivos típicos de recusa',
      content: [
        { kind: 'warning', text: 'Os bancos em Portugal são obrigados a cumprir verificações AML/KYC ao abrigo da regulamentação do Banco de Portugal e da UE. Motivos frequentes de recusa ao abrir conta para não residentes:' },
        { kind: 'checklist', items: [
          'Incoerência entre a morada nos documentos e a indicada no formulário',
          'Falta de comprovativo da origem dos fundos quando existe um depósito inicial elevado',
          'Exposição política (PEP) ou filtro de sanções — recusa ou verificação de idoneidade prolongada',
          'Identificação por vídeo de má qualidade — é frequente pedirem para repetir',
          'Recusa em fornecer a residência fiscal (CRS) — recusa automática',
          'Transacções fraudulentas anteriores em registos internacionais'
        ]},
        { kind: 'paragraph', text: 'Se o banco A recusou, isso não significa que todos recusarão — as condições e os limiares AML variam. Em média, 2-3 tentativas são suficientes.' }
      ]
    },
    {
      id: 'after-account',
      title: 'O que fazer depois da abertura',
      content: [
        { kind: 'checklist', items: [
          'Activar o MB WAY na aplicação (instrumento de pagamento essencial em Portugal)',
          'Guardar o IBAN nas notas para copiar rapidamente ao efectuar pagamentos',
          'Configurar débitos directos (débitos diretos) para serviços públicos e impostos',
          'Indicar o PT-IBAN no Portal das Finanças para reembolso de IRS',
          'Indicar o PT-IBAN na Segurança Social para salário/prestações',
          'Activar Multibanco-Homebanking para acesso através de caixa automático'
        ]}
      ]
    }
  ],
  documents: [
    { title: 'Passaporte ou Cartão de Cidadão' },
    { title: 'NIF' },
    { title: 'Comprovativo de morada — com menos de 3 meses' },
    { title: 'Comprovativo da origem dos fundos' }
  ],
  costs: [
    { label: 'Abertura de conta', amountEUR: 0 },
    { label: 'Manutenção anual (frequentemente)', amountEUR: 0 },
    { label: 'Imposto do Selo sobre comissões bancárias', amountEUR: 0, note: '4% sobre comissões do banco, 0,5% sobre % de créditos — NÃO é uma taxa trimestral fixa' },
    { label: 'Emissão de cartão de débito', amountEUR: 0 }
  ],
  timelineDaysMin: 1,
  timelineDaysMax: 10,
  sources: [
    { title: 'Banco de Portugal — supervisão da actividade bancária', url: 'https://www.bportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Fundo de Garantia de Depósitos', url: 'https://www.fgd.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — abrir conta bancária', url: 'https://www.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Regulamento BdP 2/2018 (regras AML)', url: 'https://www.bportugal.pt/aviso-circular/aviso-ndeg-22018', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
