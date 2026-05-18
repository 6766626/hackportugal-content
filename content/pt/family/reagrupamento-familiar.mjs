export default {
  editorialVoice: 'hackportugal',
  id: 'reagrupamento-familiar',
  categoryId: 'residence_permit',
  title: 'Reagrupamento Familiar',
  tldr: 'Processo que permite trazer o cônjuge, filhos ou pais depois de obter a sua própria autorização de residência. É submetido através da AIMA (portal-rf.aima.gov.pt)\.\n\nImportante: desde 2024 (Lei 9/2024 + Lei 61/2025 de 23.10.2025) é exigido um mínimo de 2 anos de residência legal em Portugal ANTES da submissão.\n\nPrazo de decisão da AIMA — até 9 meses (anteriormente era 90 dias)\.\n\nExceções: titulares de Golden Visa, D3 (EU Blue Card), vários outros estatutos qualificados.',
  tags: ['família', 'reagrupamento', 'reagrupamento', 'aima'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'who',
      title: 'Quem pode trazer',
      content: [
        { kind: 'checklist', items: [
          'Cônjuge (casamento oficial ou união de facto — coabitação ≥ 2 anos, exige formalização na Junta de Freguesia)',
          'Filhos menores (do próprio requerente ou do cônjuge)',
          'Filhos maiores estudantes até 27 anos, financeiramente dependentes',
          'Pais do requerente e do cônjuge (se for comprovada a dependência financeira)',
          'Irmãos/irmãs menores sob tutela'
        ]}
      ]
    },
    {
      id: 'requirements',
      title: 'Requisitos para o requerente',
      content: [
        { kind: 'checklist', items: [
          'Autorização de residência válida há ≥ 2 anos no momento da submissão (introduzido pela Lei 9/2024; a Lei 61/2025 consolidou esta regra)',
          'Exceções à regra dos 2 anos: titulares de Golden Visa, D3 (profissionais altamente qualificados), EU Blue Card, refugiados, investigadores com contrato de curta duração, filhos menores, cônjuges em caso de coabitação ≥ 15 meses.',
          'Habitação adequada (contrato de arrendamento por prazo ≥ 12 meses ou imóvel próprio, área ≥ 30 m² para 1 pessoa + 15 m² por cada pessoa adicional)',
          'Rendimento estável — mínimo de 100% do SMN (920 € em 2026) para o requerente + 50% para o cônjuge (460 €) + 30% por filho (276 € por filho)',
          'Seguro de saúde para todos os membros da família até obtenção do SNS',
          'Inexistência de dívidas perante as Finanças e a Segurança Social'
        ]},
        { kind: 'warning', text: 'Lei 9/2024 (entrou em vigor em 2024, confirmada pela Lei 61/2025): mínimo de 2 anos de residência legal ANTES da submissão do Reagrupamento Familiar. Anteriormente, era possível submeter imediatamente após a obtenção da autorização de residência. Esta é a alteração-chave para novos residentes.' }
      ]
    },
    {
      id: 'process',
      title: 'Processo',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: '1. Reunir os documentos da família', content: [
            { kind: 'checklist', items: [
              'Certidão de casamento (com apostila + tradução)',
              'Certidões de nascimento dos filhos (apostila + tradução)',
              'Certificados de registo criminal para o cônjuge e membros maiores da família',
              'Passaportes de todos os membros da família'
            ]}
          ]},
          { id: 'r2', title: '2. Submeter o pedido na AIMA', content: [
            { kind: 'paragraph', text: 'Através do portal especializado portal-rf.aima.gov.pt (lançado em 2024) ou em atendimento presencial. Seleccionar o tipo «Reagrupamento Familiar».' }
          ]},
          { id: 'r3', title: '3. Obter a aprovação preliminar', content: [
            { kind: 'timeline', text: 'Até 9 meses de acordo com a Lei 61/2025 (anteriormente era «até 90 dias» — antes da reforma). Na prática, em 2026 — 6–12 meses. Em caso de aprovação, a AIMA envia uma notificação ao consulado do país de residência da família.' }
          ]},
          { id: 'r4', title: '4. A família obtém o visto no consulado', content: [
            { kind: 'paragraph', text: 'Com base na aprovação da AIMA. Taxa — cerca de 90 € por pessoa.' }
          ]},
          { id: 'r5', title: '5. Entrada e emissão da autorização de residência na AIMA', content: [
            { kind: 'timeline', text: 'No prazo de 4 meses a contar da emissão do visto. Biometria na AIMA. Cartão — em 30–90 dias.' }
          ]}
        ]}
      ]
    },
    {
      id: 'union-de-facto',
      title: 'União de Facto (sem casamento)',
      content: [
        { kind: 'paragraph', text: 'Portugal reconhece parcerias civis. Após 2 anos de coabitação, é possível formalizar a união de facto na Junta de Freguesia e utilizar isso como fundamento para o reagrupamento.' }
      ]
    },
    {
      id: 'common-issues',
      title: 'Problemas frequentes',
      content: [
        { kind: 'warning', text: 'Área insuficiente da habitação — motivo frequente de recusa. Verifique antes da submissão.' },
        { kind: 'warning', text: 'Apostilas caducadas ou traduções sem certificação juramentada. As traduções são aceites apenas se forem feitas por tradutores juramentados ou certificadas pelo consulado.' },
        { kind: 'paragraph', text: 'Em caso de recusa, é possível recorrer ao tribunal, mas isso demora 6–18 meses.' }
      ]
    }
  ],
  costs: [
    { label: 'AIMA — atendimento + análise (cada membro da família)', amountEUR: 133, note: 'desde 01.03.2026' },
    { label: 'AIMA — autorização de residência (art. 75, cada pessoa)', amountEUR: 307.20, note: 'desde 01.03.2026' },
    { label: 'Visto no consulado (cada pessoa)', amountEUR: 90 },
    { label: 'Apostilas + traduções', amountEURMin: 300, amountEURMax: 800 }
  ],
  timelineDaysMin: 90,
  timelineDaysMax: 270,
  sources: [
    { title: 'AIMA — Reagrupamento Familiar (portal-rf)', url: 'https://portal-rf.aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Reagrupamento Familiar', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/reagrupamento-familiar', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 23/2007 — artigos 98-108', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2007-34532975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 9/2024 — condição de residência de 2 anos para o Reagrupamento Familiar', url: 'https://diariodarepublica.pt/dr/detalhe/lei/9-2024', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 61/2025 — prazo de decisão de 9 meses da AIMA', url: 'https://diariodarepublica.pt/dr/detalhe/lei/61-2025', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}
