export default {
  editorialVoice: 'hackportugal',
  id: 'd7-passive-income',
  categoryId: 'residence_permit',
  title: 'Visto D7 (rendimento passivo)',
  tldr: 'D7 — visto para quem tem rendimento passivo estável (pensão, renda, dividendos). Referência prática dos consulados — 1 IAS (537,13 € por mês em 2026) para o requerente, +50% IAS para cônjuge, +30% IAS por filho. Depósito de 12× IAS (6 445,56 €) — normalmente alternativa ao rendimento regular ou garantia adicional para casos-limite, não é um segundo requisito obrigatório. Após 5 anos de residência legal é possível a autorização de residência permanente ou a nacionalidade (ao abrigo da Lei 37/81 em vigor; o novo Decreto AR 48/XVII foi promulgado pelo Presidente Seguro em 03.05.2026 e aumentará o prazo para 10 anos para países terceiros após publicação no DRE).',
  audience: { citizenships: ['thirdCountry', 'cplp'] },
  tags: ['d7', 'autorização de residência', 'rendimento passivo'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'income-requirements',
      title: 'Requisitos financeiros (2026)',
      content: [
        { kind: 'paragraph', text: 'O rendimento mínimo está indexado ao IAS (Indexante dos Apoios Sociais) — 537,13 € por mês para 2026 (Portaria 480-A/2025/1 de 30.12.2025, +2,8% face a 522,50 € em 2025). Exigência legal (Lei 23/2007 + Portaria 328/2022):' },
        { kind: 'checklist', items: [
          'Requerente: ≥ 1 IAS = 537,13 € por mês de rendimento passivo',
          'Cônjuge / parceiro: +50% IAS = 268,57 € por mês',
          'Filho menor de 18 anos (ou dependente): +30% IAS = 161,14 € por mês',
          'Exemplo para família de 3: 537,13 + 268,57 + 161,14 = 966,84 € por mês'
        ]},
        { kind: 'paragraph', text: 'Além disso, o consulado / AIMA exige comprovativo de um depósito numa conta portuguesa no montante de 12× IAS (6 445,56 €) para o requerente — como reserva caso o rendimento cesse temporariamente.' },
        { kind: 'checklist', items: [
          'Fontes de rendimento passivo: pensão, renda, dividendos, royalties, juros de depósitos, pagamentos de licenças',
          'NÃO são aceites: salário, honorários de freelancer (para estes — D1/D3/D8 ou art. 90.2)',
          'Na prática, os consulados esperam 1,5–2× do mínimo para uma aprovação confortável (especialmente se o rendimento for puramente de investimento)',
          'Estabilidade — comprovativo documental do rendimento dos últimos 6–12 meses'
        ]},
        { kind: 'warning', text: 'Se o IAS 2026 for revisto por nova Portaria (normalmente em janeiro) — é preciso recalcular. O valor atual está no site seg-social.pt.' }
      ]
    },
    {
      id: 'process',
      title: 'Processo',
      content: [
        { kind: 'substeps', items: [
          { id: 'd1', title: '1. NIF (à distância através de representante)', content: [
            { kind: 'paragraph', text: 'Antes de requerer o visto, obtenha o NIF através de representante (ver "NIF para países terceiros").' }
          ]},
          { id: 'd2', title: '2. Abrir conta num banco português', content: [
            { kind: 'paragraph', text: 'Transferir o depósito de reserva 12× IAS = 6 445,56 € (ano de 2026). Para cônjuge +50 %, para filho +30 %. Em alternativa — prova de entradas mensais estáveis durante 6–12 meses.' }
          ]},
          { id: 'd3', title: '3. Arrendar alojamento em Portugal', content: [
            { kind: 'paragraph', text: 'Contrato de longa duração (≥ 12 meses) com registo nas Finanças (caso contrário o consulado pode não aceitar). Em Flatio / Idealista / através de agentes locais.' }
          ]},
          { id: 'd4', title: '4. Marcar no consulado', content: [
            { kind: 'paragraph', text: 'Vistos.mne.gov.pt → selecionar o país → marcar online. As filas podem ser de 2–4 meses na Federação Russa/Bielorrússia.' }
          ]},
          { id: 'd5', title: '5. Entrega dos documentos', content: [
            { kind: 'paragraph', text: 'Reunir o conjunto completo. Prazo de análise 60–90 dias.' }
          ]},
          { id: 'd6', title: '6. Entrada com visto D7 (4 meses × 2 entradas)', content: [
            { kind: 'paragraph', text: 'O visto D7 dá 4 meses para entrar e tratar da autorização de residência na AIMA.' }
          ]},
          { id: 'd7', title: '7. Marcação na AIMA → obtenção da autorização de residência', content: [
            { kind: 'paragraph', text: 'Entrevista + biometria. O cartão chega em 30–90 dias.' }
          ]}
        ]}
      ]
    },
    {
      id: 'after',
      title: 'Após obter a autorização de residência',
      content: [
        { kind: 'paragraph', text: 'Autorização de residência inicial de 2 anos, renovação por 3 anos → total 5 anos. Depois é possível pedir autorização de residência permanente ou nacionalidade (ao abrigo da Lei 37/81 em vigor — após 5 anos; **Decreto AR 48/XVII promulgado pelo Presidente Seguro em 03.05.2026** e aumentará o prazo para 10 anos para países terceiros após publicação no DRE).' },
        { kind: 'warning', text: 'O D7 exige «residência efetiva»: há limites de ausências. Nos termos do art. 85 da Lei 23/2007, para anular a autorização de residência basta uma ausência superior a 6 meses consecutivos ou superior a 8 meses acumulados em 2 anos durante a vigência da autorização. São limites de ausência, não um «mínimo de residência»; para a renovação a AIMA verifica o cumprimento destes limites.' }
      ]
    }
  ],
  documents: [
    { title: 'Passaporte', note: '≥ 6 meses + 2 páginas em branco' },
    { title: '2 fotografias 3x4' },
    { title: 'Formulário para visto de residência (Pedido de Visto de Residência)' },
    { title: 'Certificado de registo criminal com apostila e tradução' },
    { title: 'Comprovativo de rendimento passivo dos últimos 6–12 meses' },
    { title: 'Extrato bancário (Portugal + país de residência) dos últimos 3–6 meses' },
    { title: 'NIF' },
    { title: 'Contrato de arrendamento por ≥ 12 meses (registado nas Finanças)' },
    { title: 'Seguro de saúde (para a duração do visto)' }
  ],
  costs: [
    { label: 'Taxa consular', amountEUR: 90 },
    { label: 'AIMA — receção + análise', amountEUR: 133, note: 'nova tabela a partir de 01.03.2026' },
    { label: 'AIMA — emissão de autorização de residência (art. 75)', amountEUR: 307.20, note: 'nova tabela a partir de 01.03.2026' },
    { label: 'Serviços consulares (taxa de expedição)', amountEURMin: 20, amountEURMax: 70 },
    { label: 'Tradução + apostilas', amountEURMin: 200, amountEURMax: 500 },
    { label: 'Seguro (ano)', amountEURMin: 250, amountEURMax: 600 },
    { label: 'Depósito em conta portuguesa (reserva)', amountEUR: 6445.56, note: '12× IAS, reembolsável' }
  ],
  timelineDaysMin: 90,
  timelineDaysMax: 180,
  sources: [
    { title: 'Vistos MNE — D7 Rendimentos', url: 'https://vistos.mne.gov.pt/pt/vistos-nacionais/informacoes-gerais/tipos-de-visto', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — Autorização de Residência (autorização de residência)', url: 'https://aima.gov.pt/pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei nº 23/2007 (Regime de Entrada) — DRE', url: 'https://dre.pt/dre/legislacao-consolidada/lei/2007-34532975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
