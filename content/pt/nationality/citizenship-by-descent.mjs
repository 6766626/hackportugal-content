export default {
  editorialVoice: 'hackportugal',
  id: 'citizenship-by-descent',
  categoryId: 'nationality',
  title: 'Nacionalidade portuguesa por ascendência',
  tldr: 'Disponível para netos e bisnetos de portugueses, se o vínculo for comprovado. Avó ou avô português + prova de ligação = direito à nacionalidade. Para o neto — direito automático ao nascer + registo. Para o bisneto — processo mais complexo.',
  tags: ['nacionalidade', 'ascendência', 'antepassados'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'categories',
      title: 'Categorias por ascendência',
      content: [
        { kind: 'substeps', items: [
          { id: 'd1', title: 'Filho de português (qualquer geração)', content: [
            { kind: 'paragraph', text: 'Se um dos progenitores é português (tinha a nacionalidade à data do nascimento da criança), a criança tem automaticamente direito à nacionalidade portuguesa. Registo — na Conservatória.' }
          ]},
          { id: 'd2', title: 'Neto de português', content: [
            { kind: 'paragraph', text: 'Se a avó ou o avô é cidadão de Portugal (e este vínculo é comprovado por documentos), o neto pode requerer a nacionalidade. É exigida «ligação à comunidade portuguesa» — língua A2 ou ligação cultural.' }
          ]},
          { id: 'd3', title: 'Bisneto e seguintes', content: [
            { kind: 'paragraph', text: 'É possível, mas mais difícil — exige provas mais fortes de ligação: residência em Portugal, domínio da língua, raízes familiares.' }
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
          'Certidão de nascimento do progenitor através do qual se comprova a ascendência',
          'Certidão de nascimento da avó ou do avô (se o requerente for neto)',
          'Prova da nacionalidade do antepassado (assento na Conservatória ou passaporte)',
          'Português nível A2 (ou equivalente)',
          'Certificado de registo criminal',
          'Ausência de serviço militar em país em conflito com Portugal (requisito raro)'
        ]},
        { kind: 'warning', text: 'A cadeia de certidões deve ser ininterrupta. Se o antepassado perdeu a nacionalidade ou se os registos se perderam, o processo é mais complexo.' }
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
          { id: 'p2', title: '2. Verificar o assento do antepassado', content: [
            { kind: 'paragraph', text: 'No site do IRN ou por pedido à Conservatória — confirmar que o assento existe.' }
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
      title: 'Judeus sefarditas — regime sob ameaça de revogação',
      content: [
        { kind: 'paragraph', text: 'O caminho acelerado para judeus sefarditas foi introduzido na Lei da Nacionalidade através da **Lei Orgânica n.º 1/2013** (posteriormente regulamentado em detalhe pelo Decreto-Lei 30-A/2015) e vigorou quase 10 anos. Um endurecimento substancial do regime está em vigor desde **01.09.2022** — através do **Decreto-Lei n.º 26/2022**, que alterou o Regulamento da Nacionalidade e passou a exigir provas de uma ligação efetiva a Portugal (residência, ligações económicas ou culturais). Após isso, o número de pedidos caiu acentuadamente.' },
        { kind: 'paragraph', text: '**03.05.2026 o Presidente Seguro promulgou o Decreto AR 48/XVII** (após passar pelo TC foi renomeado de 17/XVII) — a lei revoga totalmente o caminho acelerado sefardita. A lei entra em vigor no dia seguinte ao da publicação no Diário da República (prevista para os próximos dias). Na sua intervenção de 03.05.2026, Seguro solicitou publicamente que os processos já submetidos fossem apreciados segundo as regras anteriores, por razões de segurança jurídica. Até à publicação no DRE este caminho ainda funciona tecnicamente no regime posterior ao Decreto-Lei 26/2022.' },
        { kind: 'warning', text: 'Se tenciona apresentar o pedido — faça-o URGENTEMENTE, antes da publicação do Decreto 48/XVII no DRE. A submissão fixa o processo no regime anterior (sobretudo tendo em conta o pedido do Presidente ao IRN). Após a publicação, a nova lei elimina totalmente este caminho.' }
      ]
    }
  ],
  costs: [
    { label: 'Taxa do IRN', amountEUR: 250 },
    { label: 'Pedidos a arquivos', amountEURMin: 50, amountEURMax: 300 },
    { label: 'Traduções + apostilas', amountEURMin: 200, amountEURMax: 600 }
  ],
  timelineDaysMin: 180,
  timelineDaysMax: 720,
  sources: [
    { title: 'IRN — Nacionalidade por efeito da vontade ou origem', url: 'https://justica.gov.pt/Servicos/Submeter-pedido-de-nacionalidade', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 37/81 (Lei da Nacionalidade) — consolidado', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/1981-34445075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 2/2022 — endurecimento do caminho sefardita', url: 'https://diariodarepublica.pt/dr/detalhe/lei/2-2022-179324500', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Decreto-Lei 30-A/2015 — Regulamento da Nacionalidade (sefardita)', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/30-a-2015-66714746', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Arquivo Nacional Torre do Tombo', url: 'https://antt.dglab.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Presidência da República — Promulgação Decreto AR 48/XVII (Lei da Nacionalidade)', url: 'https://www.presidencia.pt/atualidade/toda-a-atualidade/2026/05/presidente-da-republica-promulga-decreto-da-assembleia-da-republica/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' }
  ],
  lastVerified: '2026-05-04',
  verifyIntervalDays: 90
}
