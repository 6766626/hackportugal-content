export default {
  editorialVoice: 'hackportugal',
  id: 'brazil-specific',
  categoryId: 'country_specific',
  title: 'Brasileiros em Portugal — CPLP e Estatuto de Igualdade',
  tldr: 'Brasileiros em Portugal: isenção de visto por 90 dias, pedido de autorização de residência a partir de dentro do país através do acordo de mobilidade CPLP. Após 3 anos de residência — Estatuto de Igualdade: direitos políticos e económicos em pé de igualdade com os portugueses. Pela lei em vigor (Lei Orgânica n.º 1/2026, em vigor desde 19.05.2026), a cidadania obtém-se após 7 anos de residência legal para nacionais da CPLP; os pedidos entregues até 18.05.2026 são apreciados pela redacção anterior (5 anos). É um dos caminhos de imigração para Portugal mais fáceis.',
  audience: { countryCodes: ['BR'] },
  tags: ['brasil', 'cplp', 'estatuto'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'entry',
      title: 'Entrada e primeiros passos',
      content: [
        { kind: 'checklist', items: [
          '✈️ Voos directos TAP/LATAM/Azul: São Paulo/Rio/Recife → Lisboa/Porto',
          '🛂 Isenção de visto por 90 dias no espaço Schengen com passaporte brasileiro',
          '🆔 Na fronteira — declarar o objectivo: «vou residir em Portugal ao abrigo do Acordo de Mobilidade CPLP» (acordo de mobilidade CPLP)',
          '📅 Marcação na AIMA — nos primeiros 30–60 dias após a entrada',
          '🏠 Arrendar alojamento com contrato',
          '🎫 Obter NIF nas Finanças (sem representante — CPLP)'
        ]}
      ]
    },
    {
      id: 'cplp-path',
      title: 'Caminho através da CPLP',
      content: [
        { kind: 'paragraph', text: 'A via principal para brasileiros é o acordo de mobilidade CPLP. Processo:' },
        { kind: 'substeps', items: [
          { id: 'c1', title: '1. Entrada + NIF + alojamento', content: [
            { kind: 'paragraph', text: 'Nos primeiros dias.' }
          ]},
          { id: 'c2', title: '2. Marcação na AIMA', content: [
            { kind: 'paragraph', text: 'Através do portal oficial da AIMA ou pelo telefone 217 115 000. Seleccionar «Acordo de Mobilidade CPLP».' }
          ]},
          { id: 'c3', title: '3. Entregar documentos', content: [
            { kind: 'checklist', items: [
              'Passaporte do Brasil',
              'NIF',
              'atestado de residência da Junta de Freguesia (administração local)',
              'Comprovativo de meios: contrato de trabalho ou extractos bancários (mínimo 1 IAS = 537,13 € por mês ou depósito de 12 × IAS = 6 445,56 €)',
              'Certificado de registo criminal do Brasil (apostila + tradução — embora o português seja compreendido, as traduções são frequentemente exigidas)',
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
      title: 'Estatuto de Igualdade — privilégio único',
      content: [
        { kind: 'paragraph', text: 'Após 3 anos de residência em Portugal, os brasileiros podem pedir o Estatuto de Igualdade de Direitos Políticos (igualdade política) ou Civis (igualdade civil).' },
        { kind: 'checklist', items: [
          'Igualdade política: voto nas eleições autárquicas, trabalho na função pública (excepto cargos superiores)',
          'Igualdade civil: os mesmos direitos civis que os portugueses',
          'Pedido através do IRN (Conservatória)',
          'Base legal: Tratado de Amizade, Cooperação e Consulta Brasil-Portugal (2000)',
          'Com o Estatuto de Igualdade, os brasileiros podem residir e trabalhar em Portugal sem restrições'
        ]}
      ]
    },
    {
      id: 'citizenship',
      title: 'Cidadania',
      content: [
        { kind: 'paragraph', text: 'Para cidadãos da CPLP, obter a cidadania portuguesa é mais simples:' },
        { kind: 'checklist', items: [
          'Lei em vigor: a Lei da Nacionalidade (Lei 37/81) na redacção da Lei Orgânica n.º 1/2026 (publicada no DRE a 18.05.2026, em vigor desde 19.05.2026) — 7 anos de residência legal para nacionais da CPLP e da UE, 10 anos para os restantes',
          'Disposição transitória: aos pedidos entregues até 18.05.2026 aplica-se a redacção anterior (5 anos)',
          'O prazo conta-se a partir da emissão da primeira autorização de residência; o tempo de espera (incluindo a MdI) não conta para o tempo de residência',
          'Língua A2 — não exigida (português é língua materna)',
          'Com passaporte português — cidadania da UE'
        ]},
        { kind: 'warning', text: 'Dupla cidadania — há uma nuance. Portugal permite qualquer dupla cidadania. A Constituição do Brasil (art. 12, §4) permite dupla cidadania em dois casos: (1) você nasceu cidadão brasileiro (nato) e obtém a portuguesa — a brasileira mantém-se automaticamente; (2) você é brasileiro naturalizado e adquire voluntariamente outra cidadania — perde a brasileira. Se Portugal for o seu país de origem e tiver obtido o passaporte brasileiro por naturalização — OU renuncia a uma, OU fica apenas brasileiro.' }
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
          'Banco: ActivoBank, Caixa — aceitam brasileiros sem complicações',
          'Alojamento: em Lisboa, renda de T1 — 1 000–1 500 €, no Porto — 700–1 100 €',
          'Impostos: Portugal tributa o rendimento mundial dos residentes. O Brasil isenta quando há residência em Portugal'
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
          '~500 000+ brasileiros legalmente em Portugal segundo dados da AIMA do final de 2024 (maior diáspora estrangeira)',
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
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
