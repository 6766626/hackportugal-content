export default {
  editorialVoice: 'hackugal',
  id 'brazil-specific',
 categoryId: 'country_specific',
  title: 'Brasileiros em Portugal — CPLP e Estatuto de Igualdade',
  tldr: 'Brasileiros em Portugal: isenção de visto por 90 dias, pedido de autorização de residência a partir do território nacional através do acordo de mobilidade CPLP. Após 3 anos de residência — Estatuto de Igualdade: direitos políticos e económicos em pé de igualdade com os portugueses. Após 5 anos — nacionalidade (7 anos segundo a nova lei Decreto AR 48/XVII, promulgada pelo Presidente Seguro em 03.05.2026; entrará em vigor após publicação no DRE). Este é o caminho de imigração para Portugal mais fácil de todos.',
  audience: { countryCodes: ['BR'] },
  tags: ['brasil', 'cplp', 'estatuto'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'entry',
      title: 'Entrada e primeiros passos',
      content: [
        { kind: 'checklist', items: [
          '✈️ Voos diretos TAP/LATAM/Azul: São Paulo/Rio/Recife → Lisboa/Porto',
          '🛂 Isenção de visto por 90 dias no Espaço Schengen com passaporte brasileiro',
          '🆔 Na fronteira — declarar o objetivo: «vou residir em Portugal ao abrigo do Acordo de Mobilidade CPLP» (acordo de mobilidade CPLP)',
          '📅 Marcação na AIMA — nos primeiros 30–60 dias após a entrada',
          '🏠 Arrendar habitação com contrato',
          '🎫 Obter NIF nas Finanças (sem representante — CPLP)'
        ]}
      ]
    },
    {
      id: 'cplp-path',
      title: 'Caminho através da CPLP',
      content: [
        { kind: 'paragraph', text: 'A rota principal para brasileiros é o acordo de mobilidade CPLP. Processo:' },
        { kind: 'substeps', items: [
          { id: 'c1', title: '1. Entrada + NIF + habitação', content: [
            { kind: 'paragraph', text: 'Nos primeiros dias.' }
          ]},
          { id: 'c2', title: '2. Marcação na AIMA', content: [
            { kind: 'paragraph', text: 'Através do portal oficial da AIMA ou por telefone para 217 115 000. Escolher «Acordo de Mobilidade CPLP».' }
          ]},
          { id: 'c3', title: '3. Apresentar documentos', content: [
            { kind: 'checklist', items: [
              'Passaporte do Brasil',
              'NIF',
              'atestado de residência da Junta de Freguesia (administração local)',
              'Comprovativo de meios: contrato de trabalho ou extratos bancários (mínimo 1 IAS = 537,13 € por mês ou depósito de 12 × IAS = 6 445,56 €)',
              'Certificado de registo criminal do Brasil (apostila + tradução — embora se compreenda português, as traduções são frequentemente exigidas)',
              '2 fotografias 3×4'
            ]}
          ]},
          { id: 'c4', title: '4. Obter a autorização de residência', content: [
            { kind: 'paragraph', text: 'Inicial — por 1 ano. Renovação por 2 anos × 2 → total de 5 anos.' }
          ]}
        ]}
      ]
    },
    {
      id: 'estatuto-igualdade',
      title: 'Estatuto de Igualdade — um privilégio único',
      content: [
        { kind: 'paragraph', text: 'Após 3 anos de residência em Portugal, os brasileiros podem requerer o Estatuto de Igualdade de Direitos Políticos (igualdade política) ou Civis (igualdade civil).' },
        { kind: 'checklist', items: [
          'Igualdade política: voto nas eleições autárquicas, trabalho na função pública (exceto cargos superiores)',
          'Igualdade civil: os mesmos direitos civis que os portugueses',
          'Pedido através do IRN (Conservatória)',
          'Base legal: Tratado de Amizade, Cooperação e Consulta Brasil-Portugal (2000)',
          'Com o Estatuto de Igualdade, os brasileiros podem residir e trabalhar em Portugal sem restrições'
        ]}
      ]
    },
    {
      id: 'citizenship',
      title: 'Nacionalidade',
      content: [
        { kind: 'paragraph', text: 'Os cidadãos da CPLP têm o caminho mais simples para obter a nacionalidade portuguesa:' },
        { kind: 'checklist', items: [
          'Pela lei em vigor (Lei 37/81) — 5 anos de residência legal',
          'Pela nova lei (Decreto AR 48/XVII, depois de passar pelo TC renumerado de 17/XVII; promulgado pelo Presidente Seguro em **03.05.2026**, em 13.05.2026 publicado em 18.05.2026 como **Lei Orgânica n.º 1/2026** — 10 dias) — 7 anos para CPLP+UE / 10 anos para os restantes. O texto da lei contém uma disposição transitória: aos processos em tramitação aplica-se a redação anterior da Lei 37/81 (5 anos)',
          'O tempo de espera da MdI / primeira autorização de residência deixa de contar para o tempo de residência (pela nova lei)',
          'Língua A2 — não é exigida (português como língua materna)',
          'Com passaporte português — cidadania da UE'
        ]},
        { kind: 'warning', text: 'Dupla nacionalidade — há uma nuance. Portugal permite qualquer dupla nacionalidade. A Constituição do Brasil (art. 12, §4) permite dupla nacionalidade em dois casos: (1) nasceu cidadão brasileiro (nato) e obtém a portuguesa — a brasileira mantém-se automaticamente; (2) é brasileiro naturalizado e adquire voluntariamente outra nacionalidade — perde a brasileira. Se Portugal é o seu país de origem e obteve o passaporte brasileiro por naturalização — OU abdica de uma, OU fica apenas brasileiro.' }
      ]
    },
    {
      id: 'practical',
      title: 'Prática',
      content: [
        { kind: 'checklist', items: [
          'Trabalho: LinkedIn, Indeed, InfoJobs. Há muitos brasileiros em IT, startups e turismo',
          'Reconhecimento de diploma (equivalência): DGES para ensino superior, DGE para ensino escolar',
          'Troca de carta de condução: pelo acordo CPLP, sem exame no IMT',
          'Banco: ActivoBank, Caixa — aceitam brasileiros sem dificuldades',
          'Habitação: em Lisboa, arrendamento de T1 — 1 000–1 500 €, no Porto — 700–1 100 €',
          'Impostos: Portugal tributa o rendimento mundial dos residentes. O Brasil isenta em caso de residência em Portugal'
        ]}
      ]
    },
    {
      id: 'community',
      title: 'Comunidade brasileira',
      content: [
        { kind: 'checklist', items: [
          'Embaixada do Brasil em Lisboa: Estrada das Laranjeiras 144',
          'Consulados: Porto, Faro',
          'Casa do Brasil em Lisboa',
          '~500 000+ brasileiros legalmente em Portugal segundo dados da AIMA do final de 2024 (a maior diáspora estrangeira)',
          'A diáspora mais forte — em Lisboa, Porto, Algarve',
          'Religião: evangélicos, católicos — muitas comunidades',
          'Supermercados: secções brasileiras no Continente, lojas especializadas em Arroios/Martim Moniz'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'AIMA — Acordo de Mobilidade CPLP', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IRN — Estatuto de Igualdade', url: 'https://irn.justica.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Tratado de Amizade Brasil-Portugal (DRE)', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-do-presidente-da-republica/79-2000', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'CPLP — portal oficial', url: 'https://www.cplp.org/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}
