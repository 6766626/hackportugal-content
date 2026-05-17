export default {
  editorialVoice: 'hackportugal',
  id: 'activobank-opening',
  categoryId: 'banking',
  title: 'Abertura de conta bancária em Portugal (para não residentes e residentes)',
  tldr: 'Em Portugal existem ~9 grandes bancos com licença do Banco de Portugal. Vários permitem a abertura de conta totalmente online para não residentes com NIF português. Processo típico: videoidentificação, KYC básico, IBAN emitido no próprio dia, cartão por correio em 5-10 dias. A manutenção básica é gratuita na maioria dos bancos mediante atividade mínima.',
  tags: ['banco', 'conta', 'não residente', 'IBAN', 'MB WAY'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'why-pt-account',
      title: 'Porque precisa de uma conta portuguesa',
      content: [
        { kind: 'paragraph', text: 'Uma conta num banco português com IBAN que comece por PT50 é necessária para a maioria dos procedimentos do dia a dia: registo de arrendamento de longa duração, débitos diretos (serviços, impostos, multas automóveis), recebimento de salário, contratação de investimentos, pagamentos de prestações da Segurança Social, pedido de autorização de residência (alguns tipos exigem prova de meios numa conta portuguesa).' },
        { kind: 'warning', text: 'Um IBAN de outro país da UE (IE, DE, LT, etc.) é tecnicamente equivalente a um português ao abrigo do regulamento SEPA, mas na prática vários contrapartes portugueses recusam débitos diretos em IBAN estrangeiro. Para compatibilidade total, precisa de um PT-IBAN.' }
      ]
    },
    {
      id: 'types-of-banks',
      title: 'Tipos de bancos em Portugal',
      content: [
        { kind: 'checklist', items: [
          'Grandes bancos universais: Millennium BCP, Caixa Geral de Depósitos (banco público), Novobanco, Santander Totta, BPI',
          'Bancos online de grupos maiores: ActivoBank (do Millennium BCP)',
          'Neobancos digitais com licença da UE que operam em Portugal: Revolut (LT), N26 (DE), Wise (BE) — o IBAN não é PT, mas SEPA funciona',
          'Cooperativos e regionais: Crédito Agrícola, Montepio — muitas vezes práticos em cidades pequenas',
          'Contas nos CTT (correios): Banco CTT — operador postal público com serviços bancários básicos'
        ]},
        { kind: 'paragraph', text: 'Bancos licenciados pelo Banco de Portugal ou por reguladores bancários da UE — depósitos até 100 000 € estão protegidos pelo DGS nacional (Fundo de Garantia de Depósitos para bancos licenciados em Portugal, DGS equivalentes para outros bancos da UE). IMPORTANTE: Wise, Revolut e empresas de pagamento/EMI semelhantes NÃO têm estatuto de banco e normalmente não estão cobertas pelo DGS; os fundos são protegidos pelo regime de safeguarding (conta separada num banco parceiro). É outro nível de proteção — especialmente importante para saldos elevados.' }
      ]
    },
    {
      id: 'online-vs-branch',
      title: 'Online ou balcão',
      content: [
        { kind: 'substeps', items: [
          { id: 'o1', title: 'Online (à distância)', content: [
            { kind: 'paragraph', text: 'Vários bancos permitem a abertura de conta totalmente online para clientes com NIF. Processo: videoidentificação com operador em português ou inglês, assinatura eletrónica através da Chave Móvel Digital ou por confirmação em vídeo. Adequado mesmo que ainda não esteja em Portugal, desde que já tenha NIF.' }
          ]},
          { id: 'o2', title: 'No balcão', content: [
            { kind: 'paragraph', text: 'O percurso clássico é deslocar-se ao balcão com passaporte, NIF, comprovativo de morada e, por vezes, comprovativo de rendimentos. Os grandes bancos exigem frequentemente identificação presencial para não residentes.' }
          ]}
        ]}
      ]
    },
    {
      id: 'documents',
      title: 'Documentos (conjunto padrão)',
      content: [
        { kind: 'checklist', items: [
          'Passaporte (válido ≥ 6 meses, para cidadãos não UE)',
          'Cartão de Cidadão (para cidadãos de Portugal/UE)',
          'NIF (Número de Identificação Fiscal) — obrigatório',
          'Comprovativo de morada — contrato de arrendamento, fatura de serviços ou extrato bancário com menos de 3 meses',
          'Comprovativo de rendimentos / origem dos fundos — recibo de vencimento, extrato de conta, declaração da entidade empregadora',
          'Número de telefone português — não é obrigatório, mas simplifica muito o 2FA e o MB WAY'
        ]}
      ]
    },
    {
      id: 'typical-process',
      title: 'Processo típico de abertura online',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: '1. Preencher o formulário', content: [
            { kind: 'paragraph', text: 'No site ou na aplicação do banco: nome completo, NIF, profissão, origem dos rendimentos, finalidade da conta, residência fiscal. Para não residentes em Portugal, é necessário indicar no formulário o país da residência fiscal atual (cumprimento CRS/DAC2).' }
          ]},
          { id: 'p2', title: '2. Carregar documentos', content: [
            { kind: 'paragraph', text: 'Digitalizações / fotografias do passaporte, NIF, comprovativo de morada. Qualidade: todos os cantos visíveis, sem reflexos.' }
          ]},
          { id: 'p3', title: '3. Videoidentificação (KYC)', content: [
            { kind: 'paragraph', text: 'Videochamada de 5-15 minutos. O operador pede para mostrar o passaporte, virá-lo, e faz perguntas de controlo (ao abrigo das regras AML). Falam em português ou inglês, por vezes em espanhol.' }
          ]},
          { id: 'p4', title: '4. Assinar o contrato', content: [
            { kind: 'paragraph', text: 'Assinatura eletrónica: através da Chave Móvel Digital ou através de código de confirmação por e-mail + SMS.' }
          ]},
          { id: 'p5', title: '5. Receber o IBAN e o cartão', content: [
            { kind: 'timeline', text: 'O IBAN fica ativo no dia da aprovação (1-3 dias). O cartão de débito chega por correio em 5-10 dias úteis.' }
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
          'MB WAY — serviço de pagamentos português essencial (transferências por número de telefone, QR, pagamento contactless)',
          'Banco móvel e web',
          'Transferências SEPA em euros dentro da zona SEPA; em muitos pacotes online são gratuitas, mas não em todos — depende do preçário',
          'Débitos diretos (serviços, impostos, multas automóveis)',
          'Acesso ao Multibanco (rede de caixas automáticos em Portugal) com limites de levantamento de 200-400 €/dia'
        ]}
      ]
    },
    {
      id: 'fees-watch',
      title: 'A que deve prestar atenção',
      content: [
        { kind: 'checklist', items: [
          'Anuidade / manutenção — comissão anual/mensal de manutenção. Em muitos bancos online é 0 € mediante atividade mínima',
          'Imposto do Selo — imposto de selo. Em Portugal NÃO é uma taxa trimestral fixa pela própria conta; normalmente é cobrado como **4%** sobre comissões bancárias, **0,5%** sobre juros de créditos/créditos ao consumo, etc. Se tiver uma conta gratuita sem outros serviços — pode não haver Imposto do Selo real',
          'Comissão por levantamento no Multibanco de outro banco — normalmente 0 € em Portugal, mas existem limites',
          'Comissão por inatividade — alguns bancos cobram 3-10 €/mês se a conta não for utilizada durante 6+ meses',
          'Câmbio (para transferências internacionais): margem de 1-3% sobre a taxa do BCE',
          'Comissão por transferência SWIFT fora da SEPA: 10-40 € + comissões de bancos correspondentes'
        ]}
      ]
    },
    {
      id: 'red-flags',
      title: 'Motivos típicos de recusa',
      content: [
        { kind: 'warning', text: 'Os bancos em Portugal são obrigados a realizar verificações AML/KYC ao abrigo das regras do Banco de Portugal e dos regulamentos da UE. Motivos frequentes de recusa na abertura de conta para não residentes:' },
        { kind: 'checklist', items: [
          'Inconsistência entre a morada nos documentos e no formulário',
          'Falta de comprovativo da origem dos fundos quando existe um depósito inicial elevado',
          'Exposição política (PEP) ou filtro de sanções — recusa ou verificação de diligência devida prolongada',
          'Videoidentificação de má qualidade — frequentemente pedem para repetir',
          'Recusa em fornecer residência fiscal (CRS) — recusa automática',
          'Transações fraudulentas anteriores em registos internacionais'
        ]},
        { kind: 'paragraph', text: 'Se o banco A recusou, isso não significa que todos recusem — as condições e os limiares AML variam. Em média, 2-3 tentativas são suficientes.' }
      ]
    },
    {
      id: 'after-account',
      title: 'O que fazer depois da abertura',
      content: [
        { kind: 'checklist', items: [
          'Ativar o MB WAY na aplicação (instrumento de pagamento mais importante em Portugal)',
          'Guardar o IBAN nas notas para copiar rapidamente nos pagamentos',
          'Configurar débitos diretos (débitos diretos) para serviços e impostos',
          'Indicar o PT-IBAN no Portal das Finanças para reembolso de IRS',
          'Indicar o PT-IBAN na Segurança Social para salário/prestações',
          'Ativar Multibanco-Homebanking para acesso através de caixa automático'
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
    { label: 'Imposto do Selo sobre comissões bancárias', amountEUR: 0, note: '4% sobre comissões do banco, 0,5% sobre juros de créditos — NÃO é uma taxa trimestral fixa' },
    { label: 'Emissão de cartão de débito', amountEUR: 0 }
  ],
  timelineDaysMin: 1,
  timelineDaysMax: 10,
  sources: [
    { title: 'Banco de Portugal — supervisão da atividade bancária', url: 'https://www.bportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Fundo de Garantia de Depósitos', url: 'https://www.fgd.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — abrir conta bancária', url: 'https://eportugal.gov.pt/cidadaos', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Regulamento BdP 2/2018 (regras AML)', url: 'https://www.bportugal.pt/aviso-circular/aviso-ndeg-22018', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
