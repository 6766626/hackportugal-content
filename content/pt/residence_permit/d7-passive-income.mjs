export default {
  editorialVoice: 'hackportugal',
  id: 'd7-passive-income',
  categoryId: 'residence_permit',
  title: 'Visto D7 (rendimento passivo)',
  tldr: 'O D7 é um visto para quem tem um rendimento passivo estável (pensão, rendas, dividendos). O limiar de base na prática dos consulados é 1 IAS (537,13 € por mês em 2026) para o requerente, +50% do IAS pelo cônjuge, +30% do IAS por criança. Um depósito de 12× IAS (6 445,56 €) é normalmente uma alternativa ao rendimento regular ou uma garantia adicional para casos-limite, não um segundo requisito obrigatório. Após 5 anos de residência legal, é possível obter uma autorização de residência permanente ou a nacionalidade (ao abrigo da Lei 37/81 em vigor; o novo Decreto AR 48/XVII foi promulgado pelo Presidente Seguro em 03.05.2026 e aumentará o prazo para 10 anos para países terceiros após a publicação em DRE).',
  audience: { citizenships: ['thirdCountry', 'cplp'] },
  tags: ['d7', 'autorização de residência', 'rendimento passivo'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'income-requirements',
      title: 'Requisitos financeiros (2026)',
      content: [
        { kind: 'paragraph', text: 'O rendimento mínimo está indexado ao IAS (Indexante dos Apoios Sociais) — 537,13 € por mês para 2026 (Portaria 480-A/2025/1 de 30.12.2025, +2,8% face a 522,50 € em 2025). Requisito previsto na lei (Lei 23/2007 + Portaria 328/2022):' },
        { kind: 'checklist', items: [
          'Requerente: ≥ 1 IAS = 537,13 € por mês de rendimento passivo',
          'Cônjuge / parceiro: +50% do IAS = 268,57 € por mês',
          'Criança menor de 18 anos (ou dependente): +30% do IAS = 161,14 € por mês',
          'Exemplo para uma família de 3 pessoas: 537,13 + 268,57 + 161,14 = 966,84 € por mês'
        ]},
        { kind: 'paragraph', text: 'Adicionalmente, o consulado / AIMA exige comprovativo de depósito numa conta portuguesa no valor de 12× IAS (6 445,56 €) para o requerente — como reserva caso o rendimento cesse temporariamente.' },
        { kind: 'checklist', items: [
          'Fontes de rendimento passivo: pensão, rendas, dividendos, royalties, juros de depósitos, pagamentos de licenças',
          'NÃO são adequados como fonte principal: salário e honorários activos de freelancer. Para trabalho por conta de outrem com empregador português, analisa-se o D1; para independent professional/actividade empresarial — D2; para actividade altamente qualificada — D3; para trabalho remoto para empregadores/clientes estrangeiros — D8',
          'Na prática, os consulados esperam 1,5–2× acima do mínimo para uma aprovação confortável (sobretudo se o rendimento for puramente de investimento)',
          'Estabilidade — comprovativo documental de rendimento dos últimos 6–12 meses'
        ]},
        { kind: 'warning', text: 'O IAS 2026 foi fixado em 537,13 € (Portaria 480-A/2025/1). Antes de submeter o pedido, confirme ainda assim o valor actual no site da Segurança Social / DRE, especialmente se a submissão for adiada para o ano seguinte.' }
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
            { kind: 'paragraph', text: 'Transferir o depósito de reserva de 12× IAS = 6 445,56 € (2026). Para o cônjuge +50 %, criança +30 %. Em alternativa — prova de entradas mensais estáveis durante 6–12 meses.' }
          ]},
          { id: 'd3', title: '3. Arrendar habitação em Portugal', content: [
            { kind: 'paragraph', text: 'Contrato de longa duração (≥ 12 meses) com registo nas Finanças (caso contrário, o consulado pode não aceitar). Na Flatio / Idealista / através de agentes locais.' }
          ]},
          { id: 'd4', title: '4. Marcar no consulado', content: [
            { kind: 'paragraph', text: 'Vistos.mne.gov.pt → escolher o país → marcar online. As filas podem ser de 2–4 meses na Federação Russa/Bielorrússia.' }
          ]},
          { id: 'd5', title: '5. Submissão dos documentos', content: [
            { kind: 'paragraph', text: 'Reunir o conjunto completo. Prazo de processamento: 60–90 dias.' }
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
        { kind: 'paragraph', text: 'Autorização de residência inicial por 2 anos, renovação por 3 anos → total de 5 anos. Depois é possível requerer autorização de residência permanente ou nacionalidade (ao abrigo da Lei 37/81 em vigor — após 5 anos; **Decreto AR 48/XVII foi promulgado pelo Presidente Seguro em 03.05.2026** e aumentará o prazo para 10 anos para países terceiros após a publicação em DRE).' },
        { kind: 'warning', text: 'O D7 exige «residência efectiva»: existem limites às ausências. Nos termos do art. 85 Lei 23/2007, para o cancelamento da autorização de residência basta uma ausência superior a 6 meses consecutivos ou superior a 8 meses no total durante 2 anos no período de validade da autorização de residência. Estes são limites de ausência, não um «mínimo de residência»; para a renovação, a AIMA verifica o cumprimento destes limites.' }
      ]
    }
  ],
  documents: [
    { title: 'Passaporte', note: '≥ 6 meses + 2 páginas em branco' },
    { title: '2 fotografias 3x4' },
    { title: 'Formulário de pedido de visto de residência (Pedido de Visto de Residência)' },
    { title: 'Certificado de registo criminal com apostila e tradução' },
    { title: 'Comprovativo de rendimento passivo dos últimos 6–12 meses' },
    { title: 'Extracto bancário (Portugal + país de residência) dos últimos 3–6 meses' },
    { title: 'NIF' },
    { title: 'Contrato de arrendamento por ≥ 12 meses (registado nas Finanças)' },
    { title: 'Seguro de saúde (pelo período do visto)' }
  ],
  costs: [
    { label: 'Taxa consular', amountEUR: 90 },
    { label: 'AIMA — atendimento + análise', amountEUR: 133, note: 'nova tarifa a partir de 01.03.2026' },
    { label: 'AIMA — emissão da autorização de residência (art. 75)', amountEUR: 307.20, note: 'nova tarifa a partir de 01.03.2026' },
    { label: 'Serviços do consulado (taxa de envio)', amountEURMin: 20, amountEURMax: 70 },
    { label: 'Tradução + apostilas', amountEURMin: 200, amountEURMax: 500 },
    { label: 'Seguro (ano)', amountEURMin: 250, amountEURMax: 600 },
    { label: 'Depósito em conta portuguesa (reserva)', amountEUR: 6445.56, note: '12× IAS, reembolsável' }
  ],
  timelineDaysMin: 90,
  timelineDaysMax: 180,
  sources: [
    { title: 'Vistos MNE — D7 Rendimentos', url: 'https://vistos.mne.gov.pt/pt/vistos-nacionais/informacao-geral/tipo-de-visto', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — Autorização de Residência', url: 'https://aima.gov.pt/pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei nº 23/2007 (Regime de Entrada) — DRE', url: 'https://dre.pt/dre/legislacao-consolidada/lei/2007-34532975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
