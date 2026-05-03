export default {
  editorialVoice: 'hackportugal',
  id: 'citizenship-by-descent',
  categoryId: 'nationality',
  title: 'Nacionalidade portuguesa por descendência',
  tldr: 'Disponível para netos e bisnetos de portugueses, se a ligação for comprovada. Avó ou avô português + prova de ligação = direito à nacionalidade. Para o neto — direito automático no nascimento + registo. Para o bisneto — processo mais complexo.',
  tags: ['nacionalidade', 'parentesco', 'antepassados'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'categories',
      title: 'Categorias por descendência',
      content: [
        { kind: 'substeps', items: [
          { id: 'd1', title: 'Filho de português (qualquer geração)', content: [
            { kind: 'paragraph', text: 'Se um dos progenitores for português (tinha a nacionalidade no momento do nascimento da criança), o filho tem automaticamente direito à nacionalidade portuguesa. Registo — na Conservatória.' }
          ]},
          { id: 'd2', title: 'Neto de português', content: [
            { kind: 'paragraph', text: 'Se a avó ou o avô for cidadão português (e essa ligação for comprovada por documentos), o neto pode requerer a nacionalidade. É exigida «ligação à comunidade portuguesa» — língua A2 ou ligação cultural.' }
          ]},
          { id: 'd3', title: 'Bisneto e seguintes', content: [
            { kind: 'paragraph', text: 'É possível, mas mais difícil — exige prova mais forte da ligação: residência em Portugal, domínio da língua, raízes familiares.' }
          ]}
        ]}
      ]
    },
    {
      id: 'requirements',
      title: 'Requisitos',
      content: [
        { kind: 'checklist', items: [
          'Certidão de nascimento do requerente',
          'Certidão de nascimento do progenitor através do qual se comprova o parentesco',
          'Certidão de nascimento da avó ou do avô (se o requerente for neto)',
          'Comprovativo de nacionalidade do ascendente (assento na Conservatória ou passaporte)',
          'Português nível A2 (ou equivalente)',
          'Certificado de registo criminal',
          'Ausência de serviço militar em país que se oponha a Portugal (requisito raro)'
        ]},
        { kind: 'warning', text: 'A cadeia de certidões deve ser ininterrupta. Se o ascendente tiver perdido a nacionalidade ou se os registos se tiverem perdido, o processo é mais difícil.' }
      ]
    },
    {
      id: 'process',
      title: 'Processo',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: '1. Reunir a árvore genealógica', content: [
            { kind: 'paragraph', text: 'Apostila + tradução certificada de todas as certidões. Para registos dos arquivos de Portugal — pedido através do Arquivo Nacional.' }
          ]},
          { id: 'p2', title: '2. Verificar o assento do ascendente', content: [
            { kind: 'paragraph', text: 'No site do IRN ou através de pedido na Conservatória — confirmar que o assento existe.' }
          ]},
          { id: 'p3', title: '3. Fazer o CIPLE A2', content: [
            { kind: 'paragraph', text: 'Exceto para filhos de portugueses — não é exigido para eles.' }
          ]},
          { id: 'p4', title: '4. Apresentar o pedido no IRN', content: [
            { kind: 'paragraph', text: 'Conservatória dos Registos Centrais (Lisboa) ou consulado.' }
          ]}
        ]}
      ]
    },
    {
      id: 'sefardi',
      title: 'Judeus sefarditas — regime em risco de revogação',
      content: [
        { kind: 'paragraph', text: 'O regime acelerado para judeus sefarditas foi introduzido na Lei da Nacionalidade através da **Lei Orgânica n.º 1/2013** (posteriormente regulamentado em detalhe pelo Decreto-Lei 30-A/2015) e vigorou quase 10 anos. Um endurecimento substancial do regime está em vigor desde **01.09.2022** — através do **Decreto-Lei n.º 26/2022**, que alterou o Regulamento da Nacionalidade e passou a exigir provas de ligação efetiva a Portugal (residência, ligações económicas ou culturais). Desde então, o número de pedidos caiu acentuadamente.' },
        { kind: 'paragraph', text: 'Decreto AR 17/XVII (novamente aprovado pelo Parlamento em 01.04.2026) prevê a revogação deste mecanismo. Em 03.05.2026, a lei NÃO foi promulgada pelo Presidente Seguro. Até à publicação do texto final no DRE, não é possível afirmar com segurança o conteúdo das disposições transitórias. Ao abrigo do direito vigente e até à promulgação, este mecanismo funciona tecnicamente no regime pós-Decreto-Lei 26/2022.' },
        { kind: 'warning', text: 'Se planeia apresentar o pedido — faça-o ANTES da promulgação da nova lei. Após a revogação, será praticamente impossível recuperar este mecanismo.' }
      ]
    }
  ],
  costs: [
    { label: 'Emolumento do IRN', amountEUR: 250 },
    { label: 'Pedidos de arquivo', amountEURMin: 50, amountEURMax: 300 },
    { label: 'Traduções + apostilas', amountEURMin: 200, amountEURMax: 600 }
  ],
  timelineDaysMin: 180,
  timelineDaysMax: 720,
  sources: [
    { title: 'IRN — Nacionalidade por efeito da vontade ou origem', url: 'https://justica.gov.pt/Servicos/Submeter-pedido-de-nacionalidade', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 37/81 (Lei da Nacionalidade) — consolidado', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/1981-34445075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 2/2022 — endurecimento do regime sefardita', url: 'https://diariodarepublica.pt/dr/detalhe/lei/2-2022-179324500', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Decreto-Lei 30-A/2015 — Regulamento da Nacionalidade (sefardita)', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/30-a-2015-66714746', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Arquivo Nacional Torre do Tombo', url: 'https://antt.dglab.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-03',
  verifyIntervalDays: 90
}
