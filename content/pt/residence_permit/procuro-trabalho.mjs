export default {
  editorialVoice: 'hackportugal',
  id: 'procuro-trabalho',
  categoryId: 'residence_permit',
  title: 'Visto Procuro Trabalho — procura de emprego em Portugal',
  tldr: 'Procuro Trabalho — visto de 120 dias (+60 dias de prorrogação) para procurar emprego. Comprovativo de meios 4× IAS para 4 meses ≈ 2 148,52 € (IAS 2026 = 537,13 €/mês) + bilhete de regresso. Popular entre diplomados de instituições de ensino superior portuguesas e profissionais altamente qualificados. Após a contratação — passagem para D3 a partir de dentro do país.',
  audience: { citizenships: ['thirdCountry'] },
  tags: ['procuro trabalho', 'procura de emprego', 'visto'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'who',
      title: 'A quem se aplica',
      content: [
        { kind: 'checklist', items: [
          'Profissional altamente qualificado (formação + experiência)',
          'Diplomado de uma instituição de ensino superior portuguesa (após D4, pode permanecer 1 ano)',
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
          'Comprovativo de meios de subsistência para 4 meses (≈ 2 148,52 € = 4× IAS, 537,13 €/mês em 2026)',
          'Bilhete de regresso ou comprovativo equivalente',
          'Alojamento em Portugal (reservas / contrato para 120 dias)',
          'Seguro de saúde para 120+ dias',
          'Certificado de registo criminal com apostilha',
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
          { id: 'p2', title: '2. Entrada', content: [
            { kind: 'paragraph', text: 'O visto concede 120 dias em Portugal. É necessário marcar atendimento na AIMA dentro deste prazo.' }
          ]},
          { id: 'p3', title: '3. Atendimento na AIMA — autorização de residência temporária', content: [
            { kind: 'paragraph', text: 'Receberá uma autorização de residência pelo período de procura de emprego (120 dias + prorrogação de 60 dias, se necessário).' }
          ]},
          { id: 'p4', title: '4. Procura de emprego', content: [
            { kind: 'paragraph', text: 'LinkedIn, Landing.Jobs, ITJobs.pt, NetJobs, contacto directo com empresas. 180 dias — prazo realista.' }
          ]},
          { id: 'p5', title: '5. Encontrou emprego — alteração do fundamento da autorização de residência', content: [
            { kind: 'paragraph', text: 'Com contrato em mãos — alteração/pedido de autorização de residência com base no fundamento correspondente, a partir de dentro do país, através da AIMA. O regime concreto depende do tipo de trabalho: contrato de trabalho comum — regime de subordinate work; para highly qualified activity — regime próprio. Dentro de Portugal altera-se/pede-se a autorização, não se “passa para o visto D3”.' }
          ]},
          { id: 'p6', title: '6. Não encontrou — saída', content: [
            { kind: 'paragraph', text: 'Após 180 dias sem contrato — saída obrigatória. Nova candidatura possível após 1 ano.' }
          ]}
        ]}
      ]
    },
    {
      id: 'after-d4',
      title: 'Se está a terminar os estudos com D4',
      content: [
        { kind: 'paragraph', text: 'Os diplomados de instituições de ensino superior portuguesas têm acesso SIMPLIFICADO ao Procuro Trabalho — pedido dentro de Portugal, sem consulado. Recomenda-se apresentar o pedido 3-6 meses antes da conclusão do diploma.' }
      ]
    }
  ],
  costs: [
    { label: 'Visto consular', amountEUR: 90 },
    { label: 'AIMA — atendimento + análise', amountEUR: 133, note: 'a partir de 01.03.2026' },
    { label: 'AIMA — autorização de residência temporária (art. 75)', amountEUR: 307.20, note: 'a partir de 01.03.2026' },
    { label: 'Seguro para 4 meses', amountEURMin: 100, amountEURMax: 300 }
  ],
  timelineDaysMin: 30,
  timelineDaysMax: 90,
  sources: [
    { title: 'Vistos MNE — Visto para Procura de Trabalho', url: 'https://vistos.mne.gov.pt/pt/vistos-nacionais/informacao-geral/tipo-de-visto', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — Procura de Trabalho', url: 'https://aima.gov.pt/pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 23/2007 (DRE)', url: 'https://dre.pt/dre/legislacao-consolidada/lei/2007-34532975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
