export default {
  editorialVoice: 'hackportugal',
  id: 'cplp-mobility',
  categoryId: 'residence_permit',
  title: 'Autorização de residência ao abrigo do Acordo de Mobilidade CPLP',
  tldr: 'Acordo de Mobilidade CPLP (acordo de mobilidade CPLP) — via simplificada para cidadãos do Brasil, Angola, Moçambique, Cabo Verde, Guiné‑Bissau, São Tomé e Príncipe, Timor‑Leste, Guiné Equatorial. Para brasileiros: entrada sem visto + pedido de autorização de residência a partir de Portugal. Para os restantes cidadãos da CPLP: visto consular obrigatório após a Lei 61/2025.',
  audience: { citizenships: ['cplp'] },
  tags: ['cplp', 'autorização de residência', 'brasil', 'mobilidade'],
  estimatedReadMinutes: 8,
  recentlyChangedAt: '2025-10-23',
  changeSummary: 'Lei 61/2025 (em vigor desde 23.10.2025) revogou a Manifestação de Interesse e endureceu as regras para cidadãos da CPLP, exceto brasileiros: agora o visto antes da entrada é obrigatório. A nova lei da nacionalidade (01.04.2026, aguarda a assinatura do presidente Seguro) aumentará o prazo para a nacionalidade de 5 para 7 anos para todos os cidadãos da CPLP.',
  variants: [
    {
      id: 'brazil',
      audience: { countryCodes: ['BR'] },
      tldr: 'Brasileiros: entrada sem visto até 90 dias + pedido de autorização de residência dentro do país na AIMA. O caminho mais simples. Ter nacionalidade portuguesa na família acelera o processo.'
    },
    {
      id: 'other-cplp',
      audience: { countryCodes: ['AO', 'MZ', 'CV', 'GW', 'ST', 'TL', 'GQ'] },
      tldr: 'Angola, Moçambique, Cabo Verde e outros países da CPLP: é necessário visto consular para Portugal ANTES da entrada. Após a entrada — pedido de autorização de residência na AIMA. A Lei 61/2025 proibiu o pedido via Manifestação de Interesse.'
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
            { kind: 'paragraph', text: 'O passaporte brasileiro dá 90 dias no Espaço Schengen. Na fronteira, indicar o motivo de entrada — residência ao abrigo da mobilidade CPLP.' }
          ]},
          { id: 'b2', title: '2. Obter NIF', content: [
            { kind: 'paragraph', text: 'Presencialmente nas Finanças (ver guia "NIF EU/CPLP").' }
          ]},
          { id: 'b3', title: '3. Marcar na AIMA', content: [
            { kind: 'paragraph', text: 'Em portal-renovacoes.aima.gov.pt ou por telefone 217 115 000. Selecionar o tipo "Acordo de Mobilidade CPLP".' }
          ]},
          { id: 'b4', title: '4. Entregar os documentos', content: [
            { kind: 'checklist', items: [
              'Passaporte + cópia',
              'NIF',
              'Comprovativo de morada em Portugal',
              'Comprovativo de meios (contrato / extratos bancários / carta de patrocinador)',
              'Certificado de registo criminal brasileiro com apostila',
              'Foto 3x4'
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
            { kind: 'paragraph', text: 'Contactar a embaixada ou o consulado de Portugal no seu país. Categoria — mobilidade CPLP ou tipo D conforme o caso. Tipos de documentos — ver vistos.mne.gov.pt.' }
          ]},
          { id: 'o2', title: '2. Entrada com visto', content: [
            { kind: 'paragraph', text: 'O visto confere o direito inicial de entrada e de requerer a autorização de residência na AIMA.' }
          ]},
          { id: 'o3', title: '3. NIF + NISS', content: [
            { kind: 'paragraph', text: 'Tratar imediatamente após a entrada.' }
          ]},
          { id: 'o4', title: '4. Pedido de autorização de residência CPLP na AIMA', content: [
            { kind: 'paragraph', text: 'O mesmo processo que para os brasileiros, mas na posse do visto.' }
          ]}
        ]}
      ]
    },
    {
      id: 'benefits',
      title: 'Vantagens da autorização de residência CPLP',
      content: [
        { kind: 'checklist', items: [
          'Autorização de residência inicial por 1 ano',
          'Renovação por 2 anos × 2 vezes — total de 5 anos',
          'Trabalhar livremente sem autorização de trabalho separada',
          'Possibilidade de requerer a nacionalidade após 5 anos (7 anos pela lei aguardada)',
          'Para brasileiros — o "Estatuto de Igualdade" concede alguns direitos políticos e económicos após 3 anos',
          'Acesso simplificado ao SNS e às escolas'
        ]}
      ]
    },
    {
      id: 'caveats',
      title: 'Advertências importantes para 2026',
      content: [
        { kind: 'warning', text: 'Manifestação de Interesse (pedido sem visto) revogada pela Lei 61/2025 — lei em vigor desde 23.10.2025. A receção de novos pedidos foi encerrada já desde 03.06.2024 (Decreto-Lei 37-A/2024); 31.12.2025 — prazo limite do período transitório para os já submetidos. Todos os procedimentos passam agora pela AIMA ou por visto consular.' },
        { kind: 'warning', text: 'Na AIMA há filas grandes — as marcações podem estar 2–4 meses à frente. Agende com antecedência.' },
        { kind: 'paragraph', text: 'Atualizações e prazos — site oficial da AIMA (aima.gov.pt) e Vistos MNE (vistos.mne.gov.pt).' }
      ]
    }
  ],
  documents: [
    { title: 'Passaporte', note: 'válido ≥ 6 meses' },
    { title: 'Visto CPLP', note: 'apenas para não brasileiros' },
    { title: 'NIF + NISS' },
    { title: 'Comprovativo de morada' },
    { title: 'Comprovativo de meios de subsistência' },
    { title: 'Certificado de registo criminal', note: 'com apostila e tradução' }
  ],
  costs: [
    { label: 'Visto CPLP (consulado)', amountEURMin: 75, amountEURMax: 100 },
    { label: 'AIMA — atendimento + análise', amountEUR: 133, note: 'desde 01.03.2026' },
    { label: 'AIMA — autorização de residência (art. 75)', amountEUR: 307.20, note: 'desde 01.03.2026' }
  ],
  timelineDaysMin: 30,
  timelineDaysMax: 120,
  sources: [
    { title: 'AIMA — Acordo de Mobilidade CPLP', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Vistos MNE — CPLP', url: 'https://vistos.mne.gov.pt/pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei nº 61/2025 (DRE)', url: 'https://diariodarepublica.pt/dr/detalhe/lei/61-2025', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'CPLP — portal oficial', url: 'https://www.cplp.org/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-03',
  verifyIntervalDays: 60
}
