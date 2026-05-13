export default {
  editorialVoice: 'hackportugal',
  id: 'd8-digital-nomad',
  categoryId: 'residence_permit',
  title: 'Visto D8 (nómada digital / trabalhador remoto)',
  tldr: 'O D8 é para trabalhadores remotos e freelancers que trabalham para empresas estrangeiras. Limite 2026: 3 680 € por mês (4× o salário mínimo de 920 €). Há versões de curta duração (até 1 ano) e de longa duração (com autorização de residência). Popular na área de TI.',
  audience: { citizenships: ['thirdCountry', 'cplp'] },
  tags: ['d8', 'autorização de residência', 'nómada digital', 'trabalho remoto'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'who-qualifies',
      title: 'Quem se enquadra',
      content: [
        { kind: 'checklist', items: [
          'Trabalhador por conta de outrem de empresa estrangeira (não portuguesa) em regime remoto',
          'Freelancer com contratos fora de Portugal',
          'Empresário em nome individual com clientes estrangeiros'
        ]},
        { kind: 'warning', text: 'O rendimento deve provir de fora de Portugal. Se os seus clientes são empresas portuguesas, isto não é D8 (é D2 / recibos verdes).' }
      ]
    },
    {
      id: 'income',
      title: 'Limite financeiro 2026',
      content: [
        { kind: 'paragraph', text: 'Mínimo — 4× o salário mínimo em Portugal = 4 × 920 € = 3 680 € por mês líquidos (alguns cônsules podem usar um coeficiente mais recente).' },
        { kind: 'paragraph', text: 'Comprova-se com: contrato de trabalho remoto + recibos de vencimento dos últimos 3 meses OU contratos de clientes + entradas bancárias dos últimos 3–6 meses.' }
      ]
    },
    {
      id: 'versions',
      title: 'Duas versões do D8',
      content: [
        { kind: 'substeps', items: [
          { id: 'v1', title: 'D8 de curta duração (visto de estada temporária)', content: [
            { kind: 'paragraph', text: 'Até 1 ano, sem autorização de residência. Pode ser prorrogado até 2 anos. Adequado se pretende experimentar viver em Portugal.' }
          ]},
          { id: 'v2', title: 'D8 de longa duração (visto de residência)', content: [
            { kind: 'paragraph', text: 'Confere o direito a obter uma autorização de residência plena por 2 anos, com renovações posteriores. O caminho para a cidadania — ao abrigo da vigente Lei 37/81 após 5 anos de residência legal. **Decreto AR 48/XVII promulgado pelo Presidente Seguro em 03.05.2026**; em 13.05.2026 a lei AINDA NÃO foi publicada no DRE (10 dias desde a promulgação). Após a publicação no Diário da República, o prazo de naturalização aumentará para 10 anos para países terceiros. O texto da lei contém disposição transitória: aos processos pendentes aplica-se a redação anterior da Lei 37/81 (5 anos).' }
          ]}
        ]}
      ]
    },
    {
      id: 'process',
      title: 'Processo de candidatura',
      content: [
        { kind: 'checklist', items: [
          '1. NIF através de representante',
          '2. Abrir conta num banco português + transferir prova de meios (mínimo 11 040 € ≈ 12 × 920 €)',
          '3. Arrendar alojamento em Portugal (≥ 12 meses)',
          '4. Marcar visto no consulado → apresentar documentos',
          '5. Aguardar o visto (60–90 dias)',
          '6. Entrar → marcar na AIMA → obter a autorização de residência'
        ]}
      ]
    },
    {
      id: 'tax',
      title: 'Impostos e IFICI',
      content: [
        { kind: 'paragraph', text: 'O D8 combina frequentemente com o regime IFICI (antigo NHR): taxa fixa de 20% sobre certos rendimentos durante 10 anos. Condições e lista de profissões qualificadas — ver o guia "Regime IFICI".' },
        { kind: 'warning', text: 'O IFICI só está disponível para quem se tornar residente em Portugal pela primeira vez nos últimos 5 anos.' }
      ]
    }
  ],
  documents: [
    { title: 'Passaporte' },
    { title: 'Formulário de pedido de visto D8' },
    { title: 'Certificado de registo criminal' },
    { title: 'Contrato de trabalho remoto / contratos de clientes' },
    { title: 'Declaração fiscal do último ano' },
    { title: 'Extrato bancário dos últimos 3–6 meses' },
    { title: 'NIF + contrato de arrendamento em Portugal' },
    { title: 'Seguro' }
  ],
  costs: [
    { label: 'Taxa consular', amountEUR: 90 },
    { label: 'Tradução + apostilas', amountEURMin: 200, amountEURMax: 500 },
    { label: 'Depósito (prova de meios)', amountEUR: 11040 }
  ],
  timelineDaysMin: 60,
  timelineDaysMax: 120,
  sources: [
    { title: 'Vistos MNE — Tipos de Visto', url: 'https://vistos.mne.gov.pt/pt/vistos-nacionais/informacoes-gerais/tipos-de-visto', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — Autorização de Residência (autorização de residência)', url: 'https://aima.gov.pt/pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-13',
  verifyIntervalDays: 90
}
