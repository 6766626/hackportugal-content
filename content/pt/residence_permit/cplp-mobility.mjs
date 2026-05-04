export default {
  editorialVoice: 'hackportugal',
  id: 'cplp-mobility',
  categoryId: 'residence_permit',
  title: 'Autorização de residência ao abrigo do Acordo de Mobilidade CPLP',
  tldr: 'Acordo de Mobilidade CPLP (acordo de mobilidade da CPLP) — caminho simplificado para cidadãos do Brasil, Angola, Moçambique, Cabo Verde, Guiné-Bissau, São Tomé e Príncipe, Timor-Leste, Guiné Equatorial. Para brasileiros: entrada sem visto + pedido de autorização de residência a partir de Portugal. Para os demais cidadãos da CPLP: visto consular obrigatório após a Lei 61/2025.',
  audience: { citizenships: ['cplp'] },
  tags: ['cplp', 'autorização de residência', 'brasil', 'mobilidade'],
  estimatedReadMinutes: 8,
  recentlyChangedAt: '2025-10-23',
  changeSummary: 'A Lei 61/2025 (em vigor desde 23.10.2025) revogou a Manifestação de Interesse e endureceu as regras para cidadãos da CPLP, exceto brasileiros: agora o visto prévio é obrigatório. A nova lei da nacionalidade (Decreto AR 48/XVII, promulgada pelo Presidente Seguro em 03.05.2026; entrará em vigor após a publicação no DRE) aumentará o prazo para a cidadania de 5 para 7 anos para todos os cidadãos da CPLP.',
  variants: [
    {
      id: 'brazil',
      audience: { countryCodes: ['BR'] },
      tldr: 'Brasileiros: entrada sem visto até 90 dias + pedido de autorização de residência dentro do país na AIMA. O caminho mais simples. Ter cidadania portuguesa na família pode acelerar o processo.'
    },
    {
      id: 'other-cplp',
      audience: { countryCodes: ['AO', 'MZ', 'CV', 'GW', 'ST', 'TL', 'GQ'] },
      tldr: 'Angola, Moçambique, Cabo Verde e outros países da CPLP: é obrigatório obter visto consular para Portugal ANTES da entrada. Após a entrada — pedido de autorização de residência na AIMA. A Lei 61/2025 proibiu os pedidos via Manifestação de Interesse.'
    }
  ],
  steps: [
    {
      id: 'step-brazil',
      title: 'Caminho para brasileiros',
      audience: { countryCodes: ['BR'] },
      content: [
        { kind: 'substeps', items: [
          { id: 'b1', title: '1. Entrada sem visto', content: [
            { kind: 'paragraph', text: 'O passaporte brasileiro permite 90 dias no espaço Schengen. Na fronteira, indique o motivo da entrada — residir ao abrigo da mobilidade CPLP.' }
          ]},
          { id: 'b2', title: '2. Obter NIF', content: [
            { kind: 'paragraph', text: 'Presencialmente nas Finanças (ver guia "NIF EU/CPLP").' }
          ]},
          { id: 'b3', title: '3. Marcar na AIMA', content: [
            { kind: 'paragraph', text: 'Em portal-renovacoes.aima.gov.pt ou por telefone 217 115 000. Escolha o tipo "Acordo de Mobilidade CPLP".' }
          ]},
          { id: 'b4', title: '4. Entregar os documentos', content: [
            { kind: 'checklist', items: [
              'Passaporte + cópia',
              'NIF',
              'Comprovativo de morada em Portugal',
              'Comprovativo de meios (contrato / extratos bancários / carta de patrocinador)',
              'Certidão de registo criminal brasileira com Apostila de Haia',
              'Fotografia 3x4'
            ]}
          ]},
          { id: 'b5', title: '5. Obter a autorização de residência', content: [
            { kind: 'timeline', text: 'Normalmente 30–90 dias. O cartão chega por correio.' }
          ]}
        ]}
      ]
    },
    {
      id: 'step-other',
      title: 'Caminho para outros cidadãos da CPLP (exceto o Brasil)',
      audience: { countryCodes: ['AO', 'MZ', 'CV', 'GW', 'ST', 'TL', 'GQ'] },
      content: [
        { kind: 'substeps', items: [
          { id: 'o1', title: '1. Visto consular', content: [
            { kind: 'paragraph', text: 'Dirija-se à embaixada ou ao consulado de Portugal no seu país. Categoria — mobilidade CPLP ou visto tipo D, conforme a situação. Tipos de documentos — ver vistos.mne.gov.pt.' }
          ]},
          { id: 'o2', title: '2. Entrada com o visto', content: [
            { kind: 'paragraph', text: 'O visto confere o direito inicial de entrada e de apresentar o pedido de autorização de residência na AIMA.' }
          ]},
          { id: 'o3', title: '3. NIF + NISS', content: [
            { kind: 'paragraph', text: 'Trate disso imediatamente após a entrada.' }
          ]},
          { id: 'o4', title: '4. Pedido de autorização de residência CPLP na AIMA', content: [
            { kind: 'paragraph', text: 'O mesmo processo que para os brasileiros, mas com o visto em mãos.' }
          ]}
        ]}
      ]
    },
    {
      id: 'benefits',
      title: 'Vantagens da autorização de residência CPLP',
      content: [
        { kind: 'checklist', items: [
          'Autorização de residência inicial de 1 ano',
          'Renovação por 2 anos × 2 vezes — total 5 anos',
          'Trabalho sem necessidade de autorização de trabalho separada',
          'Possibilidade de requerer a cidadania após 5 anos (7 anos segundo a lei aguardada)',
          'Para brasileiros — o "Estatuto de Igualdade" concede alguns direitos políticos e económicos após 3 anos',
          'Acesso simplificado ao SNS e às escolas'
        ]}
      ]
    },
    {
      id: 'caveats',
      title: 'Advertências importantes em 2026',
      content: [
        { kind: 'warning', text: 'A Manifestação de Interesse (pedido sem visto) foi revogada pela Lei 61/2025 — lei em vigor desde 23.10.2025. A receção de novos pedidos já tinha sido encerrada em 03.06.2024 (Decreto-Lei 37-A/2024); 31.12.2025 — prazo final do período transitório para os pedidos já submetidos. Todos os procedimentos passam agora pela AIMA ou por visto consular.' },
        { kind: 'warning', text: 'Na AIMA há uma longa lista de espera — as marcações podem ser para 2–4 meses depois. Agende com antecedência.' },
        { kind: 'paragraph', text: 'Atualizações e prazos atuais — site oficial da AIMA (aima.gov.pt) e Vistos MNE (vistos.mne.gov.pt).' }
      ]
    }
  ],
  documents: [
    { title: 'Passaporte', note: 'válido ≥ 6 meses' },
    { title: 'Visto CPLP', note: 'apenas para não brasileiros' },
    { title: 'NIF + NISS' },
    { title: 'Comprovativo de morada' },
    { title: 'Comprovativo de meios' },
    { title: 'Certidão de registo criminal', note: 'com apostila e tradução' }
  ],
  costs: [
    { label: 'Visto CPLP (consulado)', amountEURMin: 75, amountEURMax: 100 },
    { label: 'AIMA — receção + análise', amountEUR: 133, note: 'desde 01.03.2026' },
    { label: 'AIMA — autorização de residência (art. 75)', amountEUR: 307.20, note: 'desde 01.03.2026' }
  ],
  timelineDaysMin: 30,
  timelineDaysMax: 120,
  sources: [
    { title: 'AIMA — Acordo de Mobilidade CPLP', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Vistos MNE — CPLP', url: 'https://vistos.mne.gov.pt/pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei n.º 61/2025 (DRE)', url: 'https://diariodarepublica.pt/dr/detalhe/lei/61-2025', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'CPLP — portal oficial', url: 'https://www.cplp.org/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-03',
  verifyIntervalDays: 60
}
