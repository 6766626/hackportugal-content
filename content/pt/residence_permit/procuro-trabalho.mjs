export default {
  editorialVoice: 'hackportugal',
  id: 'procuro-trabalho',
  categoryId: 'residence_permit',
  title: 'Visto Procura de Trabalho — estado e novas regras',
  tldr: 'IMPORTANTE (em maio de 2026): o anterior visto «Procura de Trabalho» está suspenso. A Lei n.º 61/2025, de 22 de outubro de 2025 (que alterou o artigo 57.º-A da Lei 23/2007), determinou que, a partir de 23 de outubro de 2025, os postos consulares e os centros de pedidos de visto (VFS e outros) já NÃO aceitam pedidos do anterior visto de procura de trabalho; os agendamentos previamente marcados foram cancelados. É substituído pelo «Visto para Procura de Trabalho Qualificado», disponível apenas para titulares de competências técnicas especializadas / para o exercício de atividade altamente qualificada. Os pedidos só poderão ser apresentados APÓS a publicação da respetiva regulamentação (portaria); em maio de 2026 a regulamentação ainda não foi publicada, pelo que ainda não é possível apresentar qualquer pedido. Modelo base do novo visto: 120 dias (+ prorrogação por mais 60 dias); é um visto, e NÃO uma autorização de residência; a autorização de residência é tratada através da AIMA apenas se, durante o período do visto, o requerente encontrar emprego e apresentar o pedido de autorização de residência. Comprovativo de meios previsto — mínimo 3× SMN (em 2026 SMN = 920 €, ou seja, referência ≈ 2 760 € para 4 meses) + bilhete de regresso. Os requisitos exatos serão fixados pela regulamentação — consulte vistos.mne.gov.pt.',
  audience: { citizenships: ['thirdCountry'] },
  tags: ['procuro trabalho', 'procura de emprego', 'visto'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'status',
      title: 'Estado do visto em maio de 2026 (ler primeiro)',
      content: [
        { kind: 'paragraph', text: 'O anterior visto «Procura de Trabalho» está suspenso. Ao abrigo da Lei n.º 61/2025, de 22 de outubro de 2025 (que alterou o artigo 57.º-A da Lei 23/2007), desde 23 de outubro de 2025 os postos consulares e os centros de pedidos de visto (VFS e outros) NÃO aceitam pedidos deste visto, e os agendamentos previamente marcados foram cancelados.' },
        { kind: 'paragraph', text: 'Está a ser substituído pelo «Visto para Procura de Trabalho Qualificado» — apenas para profissionais altamente qualificados com competências técnicas especializadas. Os pedidos só poderão ser apresentados APÓS a publicação da regulamentação (portaria). Em maio de 2026 a regulamentação ainda NÃO foi publicada, pelo que o novo visto ainda não pode ser obtido. Acompanhe os esclarecimentos oficiais em vistos.mne.gov.pt.' }
      ]
    },
    {
      id: 'who',
      title: 'A quem se adequa (segundo as novas regras)',
      content: [
        { kind: 'checklist', items: [
          'Profissional altamente qualificado com competências técnicas especializadas (formação + experiência) — o novo visto destina-se precisamente a estes requerentes',
          'Candidato a posições altamente qualificadas com elevada procura (TI, engenharia, medicina, investigação e desenvolvimento)',
          'Diplomado de uma universidade portuguesa (após D4 — regras de permanência próprias)',
          'O apoio do empregador na fase de pedido NÃO é obrigatório'
        ]}
      ]
    },
    {
      id: 'requirements',
      title: 'Requisitos previstos (a fixar pela regulamentação)',
      content: [
        { kind: 'paragraph', text: 'A lista exata de documentos do novo visto será fixada pela regulamentação (portaria), que em maio de 2026 ainda não tinha sido publicada. A lista abaixo é orientadora, baseada na prática anterior e no texto da lei; confirme os requisitos atuais em vistos.mne.gov.pt.' },
        { kind: 'checklist', items: [
          'Prova de qualificações (competências técnicas especializadas / elevada qualificação) — condição essencial do novo visto',
          'Prova de meios de subsistência para 4 meses — mínimo 3× SMN (em 2026 SMN = 920 €, ou seja, referência ≈ 2 760 €). Esta é a base; na prática uma margem superior é mais segura. NÃO usar a base IAS — subestima o requisito',
          'Inscrição / declaração no IEFP (prevista como obrigatória nas novas regras)',
          'Bilhete de regresso ou comprovativo equivalente',
          'Alojamento em Portugal (reservas / contrato por 120 dias)',
          'Seguro de saúde por 120+ dias',
          'Certificado de registo criminal com apostila',
          'CV + carta de motivação'
        ]}
      ]
    },
    {
      id: 'process',
      title: 'Processo',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: '1. Apresentar o pedido no consulado (ATUALMENTE INDISPONÍVEL)', content: [
            { kind: 'paragraph', text: 'Em maio de 2026 não é possível apresentar pedidos: a receção está suspensa até à publicação da regulamentação do novo visto Procura de Trabalho Qualificado. Quando a receção reabrir — através de vistos.mne.gov.pt. Prazo de análise previsto até 60 dias.' }
          ]},
          { id: 'p2', title: '2. Entrada com o visto', content: [
            { kind: 'paragraph', text: 'O visto dá 120 dias de permanência em Portugal para procurar emprego — é um visto, e NÃO uma autorização de residência. Não há qualquer emissão automática de autorização de residência à entrada.' }
          ]},
          { id: 'p3', title: '3. Prorrogação do visto por 60 dias (se necessário)', content: [
            { kind: 'paragraph', text: 'A prorrogação do visto por mais 60 dias é tratada através da AIMA. É uma prorrogação do ESTATUTO DE PERMANÊNCIA, e não a emissão de uma autorização de residência.' }
          ]},
          { id: 'p4', title: '4. Procura de emprego', content: [
            { kind: 'paragraph', text: 'LinkedIn, Landing.Jobs, ITJobs.pt, NetJobs, contacto directo com empresas. 120 + 60 = 180 dias — prazo máximo do visto.' }
          ]},
          { id: 'p5', title: '5. Encontrou trabalho — pedido de autorização de residência (autorização de residência)', content: [
            { kind: 'paragraph', text: 'Com contrato em mãos — apresentação do pedido de autorização de residência a partir de dentro do país através da AIMA, com o fundamento correspondente: contrato de trabalho comum (trabalho subordinado, art. 88), actividade altamente qualificada (art. 90-A para profissionais altamente qualificados) ou empreendedorismo. A autorização de residência é emitida precisamente nesta fase, após a formalização da relação laboral.' }
          ]},
          { id: 'p6', title: '6. Não encontrou — saída do país', content: [
            { kind: 'paragraph', text: 'Após o fim do prazo máximo do visto (120+60=180 dias) sem contrato — a saída do país é obrigatória. É possível voltar a apresentar pedido de Procuro Trabalho após 1 ano.' }
          ]}
        ]}
      ]
    },
    {
      id: 'after-d4',
      title: 'Se está a concluir os estudos com D4',
      content: [
        { kind: 'paragraph', text: 'Os diplomados de universidades portuguesas tiveram, tradicionalmente, opções simplificadas para permanecer e procurar emprego e para pedir autorização de residência a partir de dentro do país. Após a reforma da Lei n.º 61/2025, as regras exatas para os diplomados serão fixadas pela regulamentação do novo visto — confirme o procedimento na sua universidade e em vistos.mne.gov.pt. É melhor planear os passos 3-6 meses antes da conclusão do diploma.' }
      ]
    }
  ],
  costs: [
    { label: 'Visto consular (Procura de Trabalho Qualificado)', amountEUR: 90, note: 'Referência baseada na prática anterior; a taxa exata será fixada pela regulamentação do novo visto' },
    { label: 'AIMA — prorrogação do visto por 60 dias (se necessário)', amountEURMin: 50, amountEURMax: 150, note: 'Confirme o montante exacto na tabela de taxas AIMA actual' },
    { label: 'AIMA — autorização de residência (se encontrar trabalho e apresentar o pedido de autorização de residência)', amountEURMin: 200, amountEURMax: 400, note: 'Depende do fundamento (art. 88, 90-A, etc.) e da tabela de taxas AIMA em vigor a partir de 01.03.2026' },
    { label: 'Seguro por 4 meses', amountEURMin: 100, amountEURMax: 300 },
    { label: 'Comprovativo de meios financeiros (reserva) — 3× SMN para 4 meses', amountEURMin: 2760, amountEURMax: 5000, note: 'Referência mínima: 3×920 € = 2 760 €; quanto mais, mais seguro. NÃO confundir com 4×IAS' }
  ],
  timelineDaysMin: 30,
  timelineDaysMax: 90,
  sources: [
    { title: 'Vistos MNE — alteração do regime do visto de procura de trabalho (Destaque)', url: 'https://vistos.mne.gov.pt/pt/destaques', kind: 'official', language: 'pt', lastRetrieved: '2026-05-31' },
    { title: 'Vistos MNE — Procura de Trabalho Qualificado (documentação)', url: 'https://vistos.mne.gov.pt/pt/vistos-nacionais/documentacao-instrutoria/procura-de-trabalho', kind: 'official', language: 'pt', lastRetrieved: '2026-05-31' },
    { title: 'AIMA', url: 'https://aima.gov.pt/pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-31' },
    { title: 'Lei 23/2007 (DRE) — alterada pela Lei n.º 61/2025', url: 'https://dre.pt/dre/legislacao-consolidada/lei/2007-34532975', kind: 'law', language: 'pt', lastRetrieved: '2026-05-31' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
