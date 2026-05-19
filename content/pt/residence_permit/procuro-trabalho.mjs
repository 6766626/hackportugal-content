export default {
  editorialVoice: 'hackportugal',
  id: 'procuro-trabalho',
  categoryId: 'residence_permit',
  title: 'Visto Procuro Trabalho — procura de emprego em Portugal',
  tldr: 'Procuro Trabalho — visto nacional de 120 dias (+ prorrogação do visto por mais 60 dias) para procurar emprego. É um visto, e NÃO uma autorização de residência; a autorização de residência só é tratada se, durante o período do visto, o requerente encontrar emprego e apresentar o pedido de autorização de residência com o fundamento correspondente através da AIMA. Comprovativo de meios financeiros — mínimo 3× SMN para o período do visto (Portaria 1563/2007 + prática consular actual: em 2026 SMN = 920 €, ou seja, referência ≈ 2 760 € para 4 meses; mais é melhor) + bilhete de regresso. Popular entre diplomados de universidades portuguesas e profissionais altamente qualificados.',
  audience: { citizenships: ['thirdCountry'] },
  tags: ['procuro trabalho', 'procura de emprego', 'visto'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'who',
      title: 'A quem se adequa',
      content: [
        { kind: 'checklist', items: [
          'Profissional altamente qualificado (formação + experiência)',
          'Diplomado de uma universidade portuguesa (após D4 é possível permanecer por 1 ano)',
          'Candidato a posições com elevada procura (TI, engenharia, medicina, investigação e desenvolvimento)',
          'O apoio do empregador NÃO é obrigatório'
        ]}
      ]
    },
    {
      id: 'requirements',
      title: 'Requisitos',
      content: [
        { kind: 'checklist', items: [
          'Prova de meios de subsistência para 4 meses — mínimo 3× SMN (em 2026 SMN = 920 €, ou seja, referência ≈ 2 760 €). Esta é a base; alguns consulados pedem uma margem superior. NÃO usar a base IAS — subestima o requisito',
          'Bilhete de regresso ou comprovativo equivalente',
          'Alojamento em Portugal (reservas / contrato por 120 dias)',
          'Seguro de saúde por 120+ dias',
          'Certificado de registo criminal com apostila',
          'CV + carta de motivação (recomendado)'
        ]}
      ]
    },
    {
      id: 'process',
      title: 'Processo',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: '1. Apresentar o pedido no consulado', content: [
            { kind: 'paragraph', text: 'Vistos.mne.gov.pt → Visto para Procura de Trabalho. Análise em 15-60 dias.' }
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
        { kind: 'paragraph', text: 'Os diplomados de universidades portuguesas têm acesso SIMPLIFICADO ao Procuro Trabalho — apresentação do pedido dentro de Portugal, sem consulado. Recomenda-se apresentar o pedido 3-6 meses antes da conclusão do diploma.' }
      ]
    }
  ],
  costs: [
    { label: 'Visto consular (Procuro Trabalho)', amountEUR: 90 },
    { label: 'AIMA — prorrogação do visto por 60 dias (se necessário)', amountEURMin: 50, amountEURMax: 150, note: 'Confirme o montante exacto na tabela de taxas AIMA actual' },
    { label: 'AIMA — autorização de residência (se encontrar trabalho e apresentar o pedido de autorização de residência)', amountEURMin: 200, amountEURMax: 400, note: 'Depende do fundamento (art. 88, 90-A, etc.) e da tabela de taxas AIMA em vigor a partir de 01.03.2026' },
    { label: 'Seguro por 4 meses', amountEURMin: 100, amountEURMax: 300 },
    { label: 'Comprovativo de meios financeiros (reserva) — 3× SMN para 4 meses', amountEURMin: 2760, amountEURMax: 5000, note: 'Referência mínima: 3×920 € = 2 760 €; quanto mais, mais seguro. NÃO confundir com 4×IAS' }
  ],
  timelineDaysMin: 30,
  timelineDaysMax: 90,
  sources: [
    { title: 'Vistos MNE — Visto para Procura de Trabalho', url: 'https://vistos.mne.gov.pt/pt/vistos-nacionais/informacao-geral/tipo-de-visto', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — Procura de Trabalho', url: 'https://aima.gov.pt/pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 23/2007 (DRE)', url: 'https://dre.pt/dre/legislacao-consolidada/lei/2007-34532975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
