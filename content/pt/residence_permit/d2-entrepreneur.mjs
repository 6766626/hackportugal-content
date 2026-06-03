export default {
  editorialVoice: 'hackportugal',
  id: 'd2-entrepreneur',
  categoryId: 'residence_permit',
  title: 'Visto D2 (empreendedor / trabalhador independente)',
  tldr: 'O D2 é um visto para abrir um negócio ou exercer atividade independente em Portugal. Opções: abrir uma empresa, registar atividade independente através de Início de Atividade, comprar um negócio existente. O limiar financeiro é individual: é necessário um plano de negócios viável e meios para arrancar e viver. A primeira autorização de residência é normalmente por 2 anos, depois renovável. A reforma da Lei da Nacionalidade já está em vigor: a Lei Orgânica n.º 1/2026 (publicada em 18.05.2026, em vigor desde 19.05.2026) aumentou o prazo de residência para a naturalização de 5 para 7 anos para cidadãos da CPLP/UE e para 10 anos para os restantes. Aos pedidos apresentados até 18.05.2026, inclusive, aplica-se o anterior prazo de 5 anos.',
  audience: { citizenships: ['thirdCountry', 'cplp'] },
  tags: ['d2', 'autorização de residência', 'negócio', 'empreendedor'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'who',
      title: 'A quem se aplica',
      content: [
        { kind: 'checklist', items: [
          'Planeia abrir uma empresa (Lda, Unipessoal) em Portugal',
          'Planeia trabalhar como trabalhador independente através de recibos verdes com clientes portugueses',
          'Compra um negócio português existente',
          'Freelancer com clientes internacionais — o D2 é adequado apenas se o caso for estruturado como independent professional/entrepreneurial activity com plano de negócios e ligação económica a Portugal; para trabalho remoto puro para clientes estrangeiros, normalmente o D8 é mais adequado'
        ]},
        { kind: 'warning', text: 'O D2 NÃO é adequado para trabalhadores remotos que trabalham para um empregador estrangeiro — estes precisam do D8.' }
      ]
    },
    {
      id: 'requirements',
      title: 'Requisitos',
      content: [
        { kind: 'checklist', items: [
          'Plano de negócios em português ou inglês: viabilidade, mercado, finanças para 3 anos',
          'NÃO existe um limiar mínimo fixo de investimento para o D2 — é necessário demonstrar a viabilidade do projeto, meios para iniciar o negócio e meios de subsistência',
          'Meios de subsistência: referência mínima de 12×SMN para o requerente principal (920 € × 12 = 11 040 € em 2026), mais 50% para o segundo adulto e 30% por cada criança. O consulado pode exigir mais consoante o caso. A regra de “4× SMN/mês” aplica-se ao D8, e NÃO ao D2',
          'Registo do NIF',
          'Comprovativo de alojamento em Portugal: na prática, muitos consulados preferem um contrato de arrendamento de 12+ meses, mas os requisitos dependem do consulado/VFS (podem ser aceites property deed, termo de responsabilidade, etc.)',
          'Certificado de registo criminal com apostilha',
          'Seguro de saúde'
        ]},
        { kind: 'paragraph', text: 'A legislação não estabelece um limiar fixo de investimento — o consulado avalia a viabilidade do projeto.' }
      ]
    },
    {
      id: 'process',
      title: 'Processo',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: '1. Preparar o plano de negócios', content: [
            { kind: 'paragraph', text: 'Preferencialmente em português. Deve incluir: descrição da atividade, mercado-alvo, previsões financeiras, postos de trabalho esperados, fator diferenciador.' }
          ]},
          { id: 'p2', title: '2. Registar a empresa (opcional antes do visto)', content: [
            { kind: 'paragraph', text: 'Através da Empresa na Hora (em 1 dia, 360 €) ou online. Forma: Sociedade Unipessoal (um sócio, capital mínimo de 1 €).' }
          ]},
          { id: 'p3', title: '3. Obter NIF + abrir conta num banco português', content: [
            { kind: 'paragraph', text: 'Transferir o capital inicial para a conta. Ter um documento com os movimentos dos fundos.' }
          ]},
          { id: 'p4', title: '4. Marcar no consulado', content: [
            { kind: 'paragraph', text: 'Vistos.mne.gov.pt. O processo demora 60–90 dias.' }
          ]},
          { id: 'p5', title: '5. Após a entrada — AIMA', content: [
            { kind: 'paragraph', text: 'Biometria, obtenção da autorização de residência. Fazer o Início de Atividade nas Finanças, se ainda não tiver sido feito.' }
          ]}
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Registo de empresa através da Empresa na Hora', amountEUR: 360 },
    { label: 'Visto consular', amountEUR: 90 },
    { label: 'AIMA — atendimento + análise', amountEUR: 133, note: 'desde 01.03.2026' },
    { label: 'AIMA — emissão de autorização de residência temporária ao abrigo do D2 (atividade independente / empreendedorismo)', amountEUR: 307.20, note: 'tarifa desde 01.03.2026; Lei 23/2007 art. 60 para o visto, art. 77/89 para autorização de residência' },
    { label: 'Traduções + apostilhas', amountEURMin: 200, amountEURMax: 500 }
  ],
  timelineDaysMin: 60,
  timelineDaysMax: 150,
  sources: [
    { title: 'Vistos MNE — visto D2', url: 'https://vistos.mne.gov.pt/pt/vistos-nacionais/informacao-geral/tipo-de-visto', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — Autorização de Residência para empreendedores', url: 'https://aima.gov.pt/pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Empresa na Hora — criação de empresa num dia', url: 'https://justica.gov.pt/Servicos/Empresa-na-Hora', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Portaria n.º 1563/2007 — meios de subsistência', url: 'https://diariodarepublica.pt/dr/detalhe/portaria/1563-2007-635255', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Decreto-Lei n.º 112/2025 — SMN 2026 (920 €)', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/112-2025', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Lei Orgânica n.º 1/2026 — reforma da Lei da Nacionalidade (prazo de 7/10 anos, em vigor desde 19.05.2026)', url: 'https://diariodarepublica.pt/dr/detalhe/lei-organica/1-2026-1123539996', kind: 'law', language: 'pt', lastRetrieved: '2026-05-31' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
