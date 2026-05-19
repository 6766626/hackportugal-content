export default {
  editorialVoice: 'hackportugal',
  id: 'golden-visa-2026',
  categoryId: 'residence_permit',
  title: 'Golden Visa (ARI) em 2026 — rotas atuais',
  tldr: 'Golden Visa (ARI, Autorização de Residência para Investimento) — autorização de residência por investimento. Desde outubro de 2023, a compra de imóveis foi ELIMINADA. Mantêm-se: fundos de investimento coletivo / venture capital 500 000 € (não em imobiliário), I&D 500 000 €, cultura 250 000 € (200 000 € em territórios de baixa densidade), capitalização de uma empresa existente 500 000 € + 5 postos de trabalho permanentes, criação de uma nova empresa + 5 postos de trabalho, ou simplesmente 10 postos de trabalho permanentes. Estadia mínima — 7 dias no primeiro ano + 14 dias em cada período bienal subsequente (este é um requisito para manter a ARI; NÃO torna a pessoa residente fiscal).\n\nPossível pedido de cidadania após 5 anos — 03.05.2026 o Presidente Seguro promulgou o Decreto AR 48/XVII, que, após publicação no DRE, aumentará o prazo para 10 anos para países terceiros.',
  audience: { citizenships: ['thirdCountry'] },
  tags: ['golden visa', 'ari', 'investimentos'],
  estimatedReadMinutes: 8,
  recentlyChangedAt: '2023-10-07',
  changeSummary: 'A lei Mais Habitação (outubro de 2023) cancelou a rota do Golden Visa através de imobiliário. Mantêm-se apenas investimentos “produtivos”.',
  steps: [
    {
      id: 'routes',
      title: 'Rotas de investimento atuais (2026)',
      content: [
        { kind: 'checklist', items: [
          '500 000 € — unidades de participação num collective investment undertaking / venture capital fund português com maturity de pelo menos 5 anos; mínimo de 60% dos ativos em sociedades comerciais com sede em Portugal; o fundo NÃO pode estar direta ou indiretamente ligado ao imobiliário',
          '500 000 € — atividade de investigação científica através de instituições públicas ou privadas de investigação científica integradas no sistema científico e tecnológico nacional de Portugal (não quaisquer “empresas tecnológicas”)',
          '500 000 € — aumento de capital de uma sociedade comercial portuguesa existente + criação de 5 postos de trabalho permanentes OU manutenção de 10 postos de trabalho, dos quais ≥5 permanentes, por um mínimo de 3 anos',
          '250 000 € — apoio à cultura/artes/património (200 000 € em projetos eligible low-density — redução de 20%)',
          '500 000 € — criação de uma sociedade comercial com sede em Portugal + criação de 5 postos de trabalho permanentes',
          '10 postos de trabalho permanentes — criar sem investimento mínimo'
        ]},
        { kind: 'paragraph', text: 'Para a rota de I&D, é possível uma redução low-density até 400 000 € quando se verifiquem as condições aplicáveis (Lei 23/2007 art. 3.º n.º 7; Portaria 208/2017).' },
        { kind: 'warning', text: 'NÃO DISPONÍVEL desde outubro de 2023: compra de habitação, compra de imobiliário turístico. Esta é a principal alteração de 2023.' }
      ]
    },
    {
      id: 'benefits',
      title: 'Vantagens',
      content: [
        { kind: 'checklist', items: [
          'Estadia mínima: 7 dias no primeiro ano + 14 dias em cada período bienal subsequente. Este requisito diz respeito à manutenção da ARI; NÃO torna a pessoa residente fiscal e, por si só, NÃO garante a cidadania',
          'Possível caminho para a cidadania após 5 anos de residência legal, cumpridos os requisitos da Lei da Nacionalidade (língua A2, ausência de disqualifying criminal/security grounds). 03.05.2026 o Presidente Seguro promulgou o Decreto AR 48/XVII — após publicação no DRE, o prazo para países terceiros aumentará para 10 anos',
          'O cartão de residência português dá direito a viagens de curta duração no Espaço Schengen até 90 dias em qualquer período de 180 dias (NÃO é um “visto Schengen automático”)',
          'Possibilidade de incluir a família (cônjuge, filhos, pais dependentes)',
          'Possível acesso ao IFICI APENAS se o investidor se tornar residente fiscal em Portugal e cumprir separadamente os requisitos do IFICI (eligible activity, employer/entity, registo, ausência de PT tax residence nos últimos 5 anos). A ARI por si só NÃO dá acesso a este regime'
        ]}
      ]
    },
    {
      id: 'process',
      title: 'Processo',
      content: [
        { kind: 'substeps', items: [
          { id: 'g1', title: '1. NIF + conta num banco português', content: [
            { kind: 'paragraph', text: 'Através de representante online — não é necessária a entrada em Portugal nesta fase.' }
          ]},
          { id: 'g2', title: '2. Escolher a rota e realizar o investimento', content: [
            { kind: 'paragraph', text: 'Fundos de investimento — a opção mais popular devido à flexibilidade. Na CMVM pode verificar-se o registo do fundo e da sociedade gestora, mas a CMVM NÃO publica uma lista de “approved Golden Visa funds”. A conformidade com a ARI é verificada separadamente através da documentação do fundo (investment policy, maturity, real-estate exposure) e de parecer jurídico.' }
          ]},
          { id: 'g3', title: '3. Preparar o dossiê', content: [
            { kind: 'paragraph', text: 'Provas do investimento, da origem lícita dos fundos, certificado de registo criminal, passaporte.' }
          ]},
          { id: 'g4', title: '4. Submeter na AIMA', content: [
            { kind: 'paragraph', text: 'Através do portal ARI especializado. O processamento demora frequentemente 12–24+ meses devido ao backlog da AIMA; os prazos dependem muito do biometrics slot e da prática atual da AIMA.' }
          ]},
          { id: 'g5', title: '5. Biometria + autorização de residência', content: [
            { kind: 'paragraph', text: 'Visitar Portugal para a biometria. Autorização de residência inicial por 2 anos, seguida de renovações.' }
          ]}
        ]}
      ]
    },
    {
      id: 'caveats',
      title: 'Armadilhas',
      content: [
        { kind: 'warning', text: 'Para cidadãos da Federação Russa/Bielorrússia, podem existir não só dificuldades nas transferências, mas também verificações reforçadas de sanções/AML, recusa de bancos/fundos no onboarding e atrasos/recusas ao nível da AIMA. ANTES do investimento, obtenha a posição escrita do banco, do fundo, da sociedade gestora e do advogado sobre compliance sancionatório.' },
        { kind: 'warning', text: 'A fila na AIMA é enorme — o tempo real para obter a autorização de residência é de 12–24+ meses a partir da submissão.' },
        { kind: 'warning', text: 'A origem dos fundos é verificada rigorosamente — prepare a cadeia completa de operações bancárias.' }
      ]
    }
  ],
  costs: [
    { label: 'Investimento mínimo', amountEUR: 250000, note: 'de 250 000 € (cultura; 200 000 € quando eligible low-density) a 500 000 € (fundos/empresa; para I&D é possível 400 000 € em low-density)' },
    { label: 'Taxa AIMA pela submissão', amountEUR: 708, note: 'valor de referência segundo a tabela AIMA a partir de 01.03.2026; confirme na Portaria/tabela atualizada' },
    { label: 'Autorização de residência AIMA (após aprovação, para o requerente principal)', amountEUR: 7097, note: 'valor de referência segundo a tabela AIMA a partir de 01.03.2026; o montante exato consta da tabela de taxas em vigor' },
    { label: 'Renovação da autorização de residência', amountEUR: 3549, note: 'a cada 2 anos, segundo a nova tabela de taxas de 2026' },
    { label: 'Acompanhamento jurídico', amountEURMin: 5000, amountEURMax: 20000 }
  ],
  timelineDaysMin: 365,
  timelineDaysMax: 730,
  sources: [
    { title: 'AIMA — Autorização de Residência para Investimento (ARI)', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 23/2007, art. 3.º (consolidado) — principais rotas ARI', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2007-34563275', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Lei do Mais Habitação (56/2023) — eliminação do imobiliário na ARI', url: 'https://diariodarepublica.pt/dr/detalhe/lei/56-2023', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'CMVM — registos de fundos e sociedades gestoras (NÃO é uma lista de fundos ARI)', url: 'https://www.cmvm.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Portaria 480-A/2025/1 — tabela de taxas AIMA a partir de 01.03.2026', url: 'https://diariodarepublica.pt/dr/detalhe/portaria/480-a-2025', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}
