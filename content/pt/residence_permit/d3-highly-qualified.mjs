export default {
  editorialVoice: 'hackportugal',
  id: 'd3-highly-qualified',
  categoryId: 'residence_permit',
  title: 'Visto D3 (profissional altamente qualificado)',
  tldr: 'D3 — para trabalho altamente qualificado em Portugal: é necessário um contrato de trabalho ou promessa de contrato, em regra com um empregador português/estrutura portuguesa de uma empresa estrangeira. Para trabalho puramente remoto para uma empresa estrangeira sem contrato português, veja o D8. Limite: remuneração bruta anual ≥ 1,5× salário anual bruto médio nacional ou ≥ 3× IAS (em 2026 = 1 611,39 €/mês). Acesso ao IFICI 20% — APENAS se a atividade constar da lista aprovada (ciência, I&D, universidades, startups) e se forem cumpridas as condições do IFICI; não se aplica a programadores remotos comuns.',
  audience: { citizenships: ['thirdCountry', 'cplp'] },
  tags: ['d3', 'autorização de residência', 'altamente qualificado', 'tic'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'who',
      title: 'A quem se aplica',
      content: [
        { kind: 'checklist', items: [
          'Engenheiros de TI, programadores, especialistas em análise de dados',
          'Engenheiros (mecânicos, eletrotécnicos, etc.)',
          'Cientistas, investigadores',
          'Consultores, gestores, analistas de alto nível',
          'Profissionais de saúde com diploma (após reconhecimento)'
        ]}
      ]
    },
    {
      id: 'requirements',
      title: 'Requisitos',
      content: [
        { kind: 'checklist', items: [
          'Diploma de ensino superior ou qualificação correspondente a uma atividade altamente qualificada (com apostila e tradução). Em alguns casos, pode ser aceite experiência profissional relevante comprovada',
          'Para profissões regulamentadas (medicina, engenharia, etc.) — reconhecimento do diploma e/ou inscrição na Ordem profissional',
          'Contrato de trabalho ou promessa de contrato para atividade altamente qualificada, normalmente com duração MÍNIMA de 1 ano',
          'Limite salarial: remuneração bruta anual ≥ 1,5× salário anual bruto médio nacional ou ≥ 3× IAS. Em 2026, IAS = 537,13 € → 3× IAS = 1 611,39 €/mês. Se o cálculo for feito com base no salário médio, recalcule exatamente o valor bruto anual e confirme a prática do consulado/AIMA em concreto. Tenha em conta que o salário português é frequentemente discutido em 14 pagamentos',
          'Certificado de registo criminal',
          'Seguro de saúde para o período até ao registo no SNS'
        ]},
        { kind: 'warning', text: 'Cartão Azul UE (EU Blue Card) — é um regime SEPARADO com regras próprias (Lei 23/2007 art. 121-A e seguintes; Directive (EU) 2021/1883). O limite também é calculado com base no salário anual bruto médio nacional, com coeficientes especiais/reduzidos para algumas profissões — NÃO utilize valores fixos de 4 400 €/mês sem verificar o limite atual da AIMA/MNE.' }
      ]
    },
    {
      id: 'process',
      title: 'Processo',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: '1. Encontrar um empregador', content: [
            { kind: 'paragraph', text: 'Procure no LinkedIn, Landing.Jobs, ITJobs.pt, NetJobs.' }
          ]},
          { id: 's2', title: '2. Obter o contrato de trabalho', content: [
            { kind: 'paragraph', text: 'O empregador prepara o contrato de trabalho e, frequentemente, regista-o na Segurança Social.' }
          ]},
          { id: 's3', title: '3. Pedir o visto no consulado', content: [
            { kind: 'paragraph', text: 'O pedido do visto D3 é apresentado por si, não pelo empregador. No consulado do país de residência.' }
          ]},
          { id: 's4', title: '4. NIF + entrada + AIMA', content: [
            { kind: 'paragraph', text: 'O NIF é muitas vezes tratado antecipadamente. O NISS é normalmente obtido após o início da relação laboral / através do empregador. Verifique se a AIMA appointment está indicada no visto; se não estiver — insista em obter agendamento através da AIMA.' }
          ]},
          { id: 's5', title: '5. Pedir o regime fiscal IFICI (se a atividade for elegível)', content: [
            { kind: 'paragraph', text: 'O IFICI NÃO é automático para o D3. O regime concede 20% de IRS sobre eligible net employment/self-employment income proveniente de listed scientific, innovation ou qualified activities por um período até 10 anos, se forem cumpridas as condições do IFICI: atividade elegível, empregador/organização elegível (com registo, quando aplicável), ausência de residência fiscal em PT nos 5 anos anteriores e ausência de utilização incompatível do NHR. O pedido é normalmente apresentado até **15 de janeiro** do ano seguinte ao ano em que se tornou residente (Portaria 352/2024/1; EBF art. 58-A).' }
          ]}
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Visto consular', amountEUR: 90 },
    { label: 'AIMA — pedido/análise de concessão de autorização de residência', amountEUR: 133, note: 'tarifa a partir de 01.03.2026' },
    { label: 'AIMA — emissão do título de residência para atividade altamente qualificada (Lei 23/2007 art. 90)', amountEUR: 307.20, note: 'tarifa a partir de 01.03.2026; para Cartão Azul UE aplica-se uma tarifa própria' },
    { label: 'Reconhecimento do diploma', amountEURMin: 100, amountEURMax: 300, note: 'se necessário' }
  ],
  timelineDaysMin: 60,
  timelineDaysMax: 120,
  sources: [
    { title: 'Vistos MNE — visto D3 para profissionais altamente qualificados', url: 'https://vistos.mne.gov.pt/pt/vistos-nacionais/informacao-geral/tipo-de-visto', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — autorização de residência para profissionais altamente qualificados', url: 'https://aima.gov.pt/pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Portaria 352/2024/1 — lista de profissões qualificadas do IFICI', url: 'https://diariodarepublica.pt/dr/detalhe/portaria/352-2024-913098024', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Estatuto dos Benefícios Fiscais art. 58-A — regime IFICI', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1989-34423775', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
