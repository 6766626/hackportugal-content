export default {
  editorialVoice: 'hackportugal',
  id: 'd7-passive-income',
  categoryId: 'residence_permit',
  title: 'Visto D7 (rendimento passivo)',
  tldr: 'O D7 é um visto para quem tem rendimento passivo estável (pensão, rendas, dividendos)\.\n\nO patamar de base na prática dos consulados é **1× SMN (salário mínimo nacional de Portugal) para o requerente, o que em 2026 = 920 €/mês** (Portaria 1563/2007 art. 16-A é aplicada por analogia à suficiência de meios; os consulados de Lisboa/Rio/Moscovo usam o SMN, não o IAS)\.\n\nCoeficiente padrão para a família: +50% do SMN pelo cônjuge (460 €), +30% do SMN por cada criança (276 €)\.\n\nDepósito/reserva numa conta portuguesa — normalmente **12× SMN = 11 040 €** para o requerente principal (para o caso de o rendimento cessar temporariamente); isto é prática dos consulados, não uma exigência rígida da lei. Após 5 anos de residência legal, pode ser possível obter autorização de residência permanente ou nacionalidade (ao abrigo da Lei 37/81 em vigor; a nova lei Decreto AR 48/XVII foi promulgada em 03.05.2026 e aumentará o prazo para 10 anos para países terceiros após publicação no DRE — verifique o estado actual da publicação).',
  audience: { citizenships: ['thirdCountry', 'cplp'] },
  tags: ['d7', 'autorização de residência', 'rendimento passivo'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'income-requirements',
      title: 'Requisitos financeiros (2026)',
      content: [
        { kind: 'paragraph', text: 'O rendimento mínimo para o D7 na prática dos consulados está ligado ao **SMN (Salário Mínimo Nacional)**, e não ao IAS. O SMN em 2026 = **920 €/mês** (DL 112/2025). Referências de base:' },
        { kind: 'checklist', items: [
          'Requerente: ≥ 1× SMN = **920 €/mês** de rendimento passivo',
          'Cônjuge / parceiro: +50% do SMN = **460 €/mês**',
          'Criança com menos de 18 anos (ou dependente): +30% do SMN = **276 €/mês**',
          'Exemplo para uma família de 3 pessoas: 920 + 460 + 276 = **1 656 €/mês**'
        ]},
        { kind: 'paragraph', text: 'Além disso, o consulado / AIMA normalmente pede comprovativo de depósito numa conta portuguesa no valor de **12× SMN = 11 040 €** para o requerente — como reserva para o caso de o rendimento cessar temporariamente. Isto é prática, não uma exigência rígida da lei; para a família, acrescentam-se os mesmos coeficientes de 50%/30%.' },
        { kind: 'checklist', items: [
          'Fontes de rendimento passivo: pensão, rendas, dividendos, royalties, juros de depósitos, pagamentos de licenciamento',
          'NÃO servem como fonte principal: salário e honorários activos de freelancer. Para trabalho por conta de outrem com empregador português, analisa-se o D1; para independent professional/actividade empresarial — D2; para actividade altamente qualificada — D3; para trabalho remoto para empregadores/clientes estrangeiros — D8',
          'Na prática, os consulados esperam 1,5–2× o mínimo para uma aprovação confortável (especialmente se o rendimento for puramente de investimento)',
          'Estabilidade — comprovativo documental do rendimento dos últimos 6–12 meses'
        ]},
        { kind: 'warning', text: 'Não use o IAS (537,13 €) como base para o D7 — isso subestima o requisito em cerca de 400 €/mês para o requerente principal. O IAS aplica-se a prestações sociais e deduções fiscais, mas NÃO ao mínimo do D7. Antes de submeter, confirme o SMN actualizado no site gov.pt — é revisto anualmente.' }
      ]
    },
    {
      id: 'process',
      title: 'Processo',
      content: [
        { kind: 'substeps', items: [
          { id: 'd1', title: '1. NIF (à distância através de representante)', content: [
            { kind: 'paragraph', text: 'Antes de pedir o visto, obter o NIF através de representante (ver "NIF para países terceiros").' }
          ]},
          { id: 'd2', title: '2. Abrir conta num banco português', content: [
            { kind: 'paragraph', text: 'Transferir o depósito de reserva **12× SMN = 11 040 €** (2026). Para o cônjuge +50% (5 520 €), para uma criança +30% (3 312 €). Como alternativa — prova de entradas mensais estáveis durante 6–12 meses. Não use 12×IAS — isso subestima a reserva.' }
          ]},
          { id: 'd3', title: '3. Arrendar habitação em Portugal', content: [
            { kind: 'paragraph', text: 'Contrato de longa duração (≥ 12 meses) com registo nas Finanças (caso contrário, o consulado pode não aceitar). Na Flatio / Idealista / através de agentes locais.' }
          ]},
          { id: 'd4', title: '4. Marcar no consulado', content: [
            { kind: 'paragraph', text: 'Vistos.mne.gov.pt → seleccionar o país → marcar online. As filas podem ser de 2–4 meses na Federação Russa/Belarus.' }
          ]},
          { id: 'd5', title: '5. Submissão dos documentos', content: [
            { kind: 'paragraph', text: 'Reunir o conjunto completo. Prazo de análise: 60–90 dias.' }
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
        { kind: 'paragraph', text: 'Autorização de residência inicial por 2 anos, renovação por 3 anos → total de 5 anos. Depois, pode ser possível pedir autorização de residência permanente ou nacionalidade (ao abrigo da Lei 37/81 em vigor — após 5 anos; **Decreto AR 48/XVII promulgado pelo Presidente Seguro em 03.05.2026** e aumentará o prazo para 10 anos para países terceiros após publicação no DRE).' },
        { kind: 'warning', text: 'O D7 exige «residência efectiva»: há limites às ausências. Pelo art. 85 Lei 23/2007, para cancelar a autorização de residência basta uma ausência superior a 6 meses consecutivos ou superior a 8 meses no total em 2 anos durante a validade da autorização de residência. Estes são limites de ausência, não um «mínimo de residência»; para a renovação, a AIMA verifica o cumprimento destes limites.' }
      ]
    }
  ],
  documents: [
    { title: 'Passaporte', note: '≥ 6 meses + 2 páginas em branco' },
    { title: '2 fotografias 3x4' },
    { title: 'Formulário de visto de residência (Pedido de Visto de Residência)' },
    { title: 'Certificado de registo criminal com apostila e tradução' },
    { title: 'Comprovativo de rendimento passivo dos últimos 6–12 meses' },
    { title: 'Extracto bancário (Portugal + país de residência) dos últimos 3–6 meses' },
    { title: 'NIF' },
    { title: 'Contrato de arrendamento por ≥ 12 meses (registado nas Finanças)' },
    { title: 'Seguro de saúde (para a duração do visto)' }
  ],
  costs: [
    { label: 'Taxa consular', amountEUR: 90 },
    { label: 'AIMA — atendimento + análise', amountEUR: 133, note: 'nova tabela a partir de 01.03.2026' },
    { label: 'AIMA — emissão da autorização de residência (art. 75)', amountEUR: 307.20, note: 'nova tabela a partir de 01.03.2026' },
    { label: 'Serviços do consulado (taxa de envio)', amountEURMin: 20, amountEURMax: 70 },
    { label: 'Tradução + apostilas', amountEURMin: 200, amountEURMax: 500 },
    { label: 'Seguro (ano)', amountEURMin: 250, amountEURMax: 600 },
    { label: 'Depósito em conta portuguesa (reserva)', amountEUR: 11040, note: '12× SMN = 12 × 920 €, reembolsável; para a família acrescentam-se 50%/30% pelo cônjuge/crianças' }
  ],
  timelineDaysMin: 90,
  timelineDaysMax: 180,
  sources: [
    { title: 'Vistos MNE — D7 Rendimentos', url: 'https://vistos.mne.gov.pt/pt/vistos-nacionais/informacao-geral/tipo-de-visto', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — Autorização de Residência', url: 'https://aima.gov.pt/pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei nº 23/2007 (Regime de Entrada) — DRE', url: 'https://dre.pt/dre/legislacao-consolidada/lei/2007-34532975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}
