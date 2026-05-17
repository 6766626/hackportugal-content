export default {
  editorialVoice: 'hackportugal',
  id: 'd8-digital-nomad',
  categoryId: 'residence_permit',
  title: 'Visto D8 (nómada digital / trabalhador remoto)',
  tldr: 'O D8 destina-se a trabalhadores remotos e freelancers que trabalham para empresas estrangeiras. Limiar de 2026: 3 680 €/mês (4× salário mínimo de 920 €). Existem versões de curta duração (até 1 ano) e de longa duração (com autorização de residência). Popular na área de TI.',
  audience: { citizenships: ['thirdCountry', 'cplp'] },
  tags: ['d8', 'autorização de residência', 'nómada digital', 'trabalho remoto'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'who-qualifies',
      title: 'Quem é elegível',
      content: [
        { kind: 'checklist', items: [
          'Trabalhador por conta de outrem de uma empresa estrangeira (não portuguesa) em regime remoto',
          'Freelancer com contratos fora de Portugal',
          'Trabalhador independente com clientes estrangeiros'
        ]},
        { kind: 'warning', text: 'O rendimento deve provir de fora de Portugal. Se os seus clientes forem empresas portuguesas, não se trata de D8 (será D2 / recibos verdes).' }
      ]
    },
    {
      id: 'income',
      title: 'Limiar financeiro de 2026',
      content: [
        { kind: 'paragraph', text: 'Requisito legal: rendimento médio mensal nos últimos 3 meses não inferior a 4× SMN. Em 2026, isto corresponde a 4 × 920 € = 3 680 €/mês. A lei não especifica “líquido” — na prática, o consulado pode avaliar se existem fundos suficientes após impostos/despesas, pelo que é melhor demonstrar uma margem.' },
        { kind: 'paragraph', text: 'Comprova-se através de: contrato com empregador para trabalho remoto + recibos de vencimento dos últimos 3 meses OU contratos com clientes + entradas bancárias dos últimos 3–6 meses.' }
      ]
    },
    {
      id: 'versions',
      title: 'Duas versões do D8',
      content: [
        { kind: 'substeps', items: [
          { id: 'v1', title: 'D8 de curta duração (visto de estada temporária)', content: [
            { kind: 'paragraph', text: 'Até 1 ano, sem autorização de residência. Pode ser prorrogado até 2 anos. Adequado se quiser experimentar viver em Portugal.' }
          ]},
          { id: 'v2', title: 'D8 de longa duração (visto de residência)', content: [
            { kind: 'paragraph', text: 'Dá direito a solicitar uma autorização de residência completa por 2 anos, seguida de renovações. O caminho para a cidadania é ao abrigo da Lei 37/81 em vigor após 5 anos de residência legal. **O Decreto AR 48/XVII foi promulgado pelo Presidente Marcelo em 03.05.2026**; em 13.05.2026, a lei AINDA NÃO foi publicada no DRE (10 dias após a promulgação). Após a publicação no Diário da República, o prazo de naturalização aumentará para 10 anos para países terceiros. O texto da lei contém uma disposição transitória: aos processos em tramitação aplica-se a versão anterior da Lei 37/81 (5 anos).' }
          ]}
        ]}
      ]
    },
    {
      id: 'process',
      title: 'Processo de candidatura',
      content: [
        { kind: 'checklist', items: [
          '1. Obter NIF — normalmente através de um fiscal representative/representante autorizado para não residentes fora da UE/EEE',
          '2. Abrir conta num banco português. É recomendável demonstrar fundos para subsistência: muitas vezes usa-se como referência pelo menos 12× SMN para o requerente principal (11 040 € em 2026). Isto NÃO substitui o requisito de rendimento de 3 680 €/mês e depende do consulado/VFS',
          '3. Comprovar alojamento em Portugal: contrato de arrendamento, convite/termo de responsabilidade ou outro documento aceite pelo consulado. Para residence visa, é frequentemente mais seguro ter um arrendamento de longa duração, mas o requisito de 12 meses deve ser verificado no local de submissão',
          '4. Marcar pedido de visto no consulado → submeter documentos',
          '5. Aguardar pelo visto (60–90 dias)',
          '6. Entrar com residence visa → verificar a marcação/instruções da AIMA indicadas no visto/notificação, ou procurar autonomamente uma marcação através do canal AIMA em vigor → submeter biometria/documentos → obter a autorização de residência'
        ]}
      ]
    },
    {
      id: 'tax',
      title: 'Impostos e IFICI',
      content: [
        { kind: 'paragraph', text: 'IFICI é o NOVO regime que substituiu o NHR apenas parcialmente (com um âmbito mais restrito): pode aplicar-se uma taxa de 20% a determinados rendimentos de eligible activities por um período até 10 anos, mas o D8 por si só NÃO confere direito ao IFICI. É necessário cumprir separadamente a lista de profissões/actividades (Portaria 352/2024/1; EBF art. 58-A) e apresentar o pedido dentro do prazo. Condições — consulte o guia “Regime IFICI”.' },
        { kind: 'warning', text: 'Condições do IFICI: eligible activity/profession, eligible employer/entity/registration, ausência de residência fiscal em PT nos 5 anos anteriores, ausência de utilização incompatível do NHR/Regressar, submissão atempada do pedido (normalmente até 15 de Janeiro do ano seguinte ao ano em que se torna residente).' }
      ]
    }
  ],
  documents: [
    { title: 'Passaporte' },
    { title: 'Pedido de D8' },
    { title: 'Certificado de registo criminal' },
    { title: 'Contrato de trabalho remoto / contratos com clientes' },
    { title: 'Declaração fiscal do último ano' },
    { title: 'Extracto bancário de 3–6 meses' },
    { title: 'NIF + contrato de arrendamento em Portugal' },
    { title: 'Seguro' }
  ],
  costs: [
    { label: 'Residence Visa D8 — taxa consular', amountEUR: 90, note: 'O Temporary Stay D8 tem uma tarifação diferente; confirme no país de submissão. Pode haver uma taxa de serviço VFS/BLS' },
    { label: 'Tradução + apostilas', amountEURMin: 200, amountEURMax: 500 },
    { label: 'AIMA — emissão da residence permit', amountEURMin: 0, amountEURMax: 450, note: 'De acordo com a tabela de taxas AIMA em vigor desde 01.03.2026; o montante depende do tipo de procedimento' },
    { label: 'Saldo recomendado na conta (NÃO é uma despesa, são fundos líquidos)', amountEUR: 11040, note: 'Referência de 12× SMN = 11 040 € em 2026; não elimina o requisito de rendimento de 4× SMN; os requisitos podem variar consoante o consulado' }
  ],
  timelineDaysMin: 60,
  timelineDaysMax: 120,
  sources: [
    { title: 'Vistos MNE — Tipos de Visto', url: 'https://vistos.mne.gov.pt/pt/vistos-nacionais/informacao-geral/tipo-de-visto', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — Autorização de Residência', url: 'https://aima.gov.pt/pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
