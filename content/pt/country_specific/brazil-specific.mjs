export default {
  editorialVoice: 'hackportugal',
  id: 'brazil-specific',
  categoryId: 'country_specific',
  title: 'Brasileiros em Portugal — CPLP e Estatuto de Igualdade',
  tldr: 'Brasileiros em Portugal: isenção de visto por 90 dias, pedido de autorização de residência a partir do interior do país ao abrigo do Acordo de Mobilidade CPLP. Após 3 anos de residência — Estatuto de Igualdade: direitos políticos e económicos equiparados aos dos portugueses. Após 5 anos — cidadania (7 anos pelo novo diploma aprovado em 01.04.2026 e a aguardar assinatura pelo Presidente Seguro). É a via mais fácil de imigração para Portugal de todas.',
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
          '🆔 Na fronteira — declarar o propósito: «vou residir em Portugal ao abrigo do Acordo de Mobilidade CPLP» (acordo de mobilidade CPLP)',
          '📅 Marcação na AIMA — nos primeiros 30–60 dias após a entrada',
          '🏠 Arrendar alojamento com contrato',
          '🎫 Obter NIF nas Finanças (sem representante — CPLP)'
        ]}
      ]
    },
    {
      id: 'cplp-path',
      title: 'Percurso através da CPLP',
      content: [
        { kind: 'paragraph', text: 'O percurso principal para brasileiros é o Acordo de Mobilidade CPLP. Processo:' },
        { kind: 'substeps', items: [
          { id: 'c1', title: '1. Entrada + NIF + alojamento', content: [
            { kind: 'paragraph', text: 'Nos primeiros dias.' }
          ]},
          { id: 'c2', title: '2. Marcação na AIMA', content: [
            { kind: 'paragraph', text: 'Através do portal oficial da AIMA ou pelo telefone 217 115 000. Selecionar «Acordo de Mobilidade CPLP».' }
          ]},
          { id: 'c3', title: '3. Entregar os documentos', content: [
            { kind: 'checklist', items: [
              'Passaporte do Brasil',
              'NIF',
              'Atestado de residência da Junta de Freguesia (autoridade local)',
              'Comprovativo de meios: contrato de trabalho ou extratos bancários (mínimo 1 IAS = 537,13 € por mês ou depósito de 12 × IAS = 6 445,56 €)',
              'Certificado de registo criminal do Brasil (apostila + tradução — apesar de o português ser entendido, muitas vezes exigem tradução)',
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
        { kind: 'paragraph', text: 'Após 3 anos de residência em Portugal, os brasileiros podem requerer o Estatuto de Igualdade de Direitos Políticos (igualdade política) ou de Direitos Civis (igualdade civil).' },
        { kind: 'checklist', items: [
          'Igualdade política: voto nas eleições municipais, trabalho na função pública (exceto cargos superiores)',
          'Igualdade civil: os mesmos direitos civis que os portugueses',
          'Pedido através do IRN (Conservatória)',
          'Fundamento: Tratado de Amizade, Cooperação e Consulta Brasil-Portugal (2000)',
          'Com o Estatuto de Igualdade, os brasileiros podem residir e trabalhar em Portugal sem restrições'
        ]}
      ]
    },
    {
      id: 'citizenship',
      title: 'Cidadania',
      content: [
        { kind: 'paragraph', text: 'Para cidadãos da CPLP é mais fácil obter a cidadania portuguesa:' },
        { kind: 'checklist', items: [
          'Pela lei em vigor (Lei 37/81) — 5 anos de residência legal',
          'Pela nova lei (Decreto AR 17/XVII, novamente aprovada pelo parlamento em 01.04.2026 após o veto de Marcelo e a inconstitucionalidade no TC Acórdão 1133/2025) — 7 anos para CPLP+UE / 10 anos para os restantes. Aguarda assinatura pelo Presidente Seguro',
          'O tempo de espera da MdI / da primeira autorização de residência deixa de contar para o período de residência (pela nova lei)',
          'Prova de língua A2 — não é exigida (português é língua materna)',
          'Com o passaporte português — cidadania da UE'
        ]},
        { kind: 'warning', text: 'Dupla cidadania — tema sensível. Portugal permite qualquer dupla cidadania. A Constituição do Brasil (art. 12, §4) permite dupla cidadania em dois casos: (1) nasceu cidadão do Brasil (nato) e obtém a portuguesa — a cidadania brasileira mantém-se automaticamente; (2) é brasileiro naturalizado e adquire voluntariamente outra cidadania — a brasileira perde-se. Se Portugal for o seu país de origem e o passaporte brasileiro tiver sido obtido por naturalização — OU renuncia a uma delas, OU permanece apenas brasileiro.' }
      ]
    },
    {
      id: 'practical',
      title: 'Prática',
      content: [
        { kind: 'checklist', items: [
          'Emprego: LinkedIn, Indeed, InfoJobs. Muitos brasileiros em TI, startups, turismo',
          'Reconhecimento de diploma (equivalência): DGES para ensino superior, DGE para ensino básico e secundário',
          'Troca de carta de condução: ao abrigo do CPLP, sem exame no IMT',
          'Bancos: ActivoBank, Caixa — aceitam brasileiros sem grandes dificuldades',
          'Alojamento: em Lisboa, renda de T1 — 1 000–1 500 €; no Porto — 700–1 100 €',
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
          '~500 000+ brasileiros legalmente em Portugal segundo a AIMA no final de 2024 (a maior diáspora estrangeira)',
          'As maiores comunidades — em Lisboa, Porto, Algarve',
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
  lastVerified: '2026-05-03',
  verifyIntervalDays: 90
}
