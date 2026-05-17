export default {
  editorialVoice: 'hackportugal',
  id: 'citizenship-by-descent',
  categoryId: 'nationality',
  title: 'Nacionalidade portuguesa por ascendência',
  tldr: 'Existem vias directas para filhos de portugueses e para netos de portugueses. Para o neto, trata-se de nacionalidade por origem, formalizada por requerimento/declaração no IRN/Conservatória quando cumpridas as condições do art. 1 Lei 37/81 (incluindo conhecimento suficiente da língua portuguesa). Para bisnetos NÃO existe categoria directa: primeiro, o progenitor ou avô/avó deve obter a nacionalidade, após o que o requerente apresenta o pedido já como filho/neto. Caso contrário, restam as vias habituais (naturalização após residência legal).',
  tags: ['nacionalidade', 'ascendência', 'antepassados'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'categories',
      title: 'Categorias por ascendência',
      content: [
        { kind: 'substeps', items: [
          { id: 'd1', title: 'Filho de cidadão português', content: [
            { kind: 'paragraph', text: 'Se, no momento do nascimento, um dos progenitores já era cidadão português, o filho nascido no estrangeiro pode obter a nacionalidade por origem através do registo de nascimento ou de declaração na Conservatória / IRN / consulado. Se o progenitor se tornou português apenas DEPOIS do nascimento do filho — aplica-se uma análise separada: para menores pode existir um regime de aquisição da nacionalidade; para adultos nem sempre há uma via directa.' }
          ]},
          { id: 'd2', title: 'Neto de cidadão português', content: [
            { kind: 'paragraph', text: 'Trata-se de nacionalidade por origem, mas NÃO é «automática»: é necessário apresentar uma declaração/requerimento no IRN ou na Conservatória e cumprir as condições do art. 1.º Lei da Nacionalidade. Na prática, a principal prova de ligação à comunidade portuguesa é o conhecimento suficiente da língua portuguesa, normalmente nível A2 (CIPLE ou equivalente reconhecido/dispensa). Só «ligações culturais» normalmente não bastam. Também são verificados fundamentos de exclusão criminais/de segurança.' }
          ]},
          { id: 'd3', title: 'Bisneto e seguintes — NÃO há via directa', content: [
            { kind: 'paragraph', text: 'Não existe uma categoria directa de «bisneto» na Lei 37/81. A sequência habitual é: primeiro, a nacionalidade é obtida pela geração intermédia (progenitor ou avô/avó); depois, o requerente verifica se pode apresentar o pedido como filho ou neto de cidadão português. Se não for possível construir a cadeia — restam as vias habituais, sobretudo a naturalização após 5 anos de residência legal (ao abrigo da nova lei, após a publicação do Decreto AR 48/XVII no DRE — 7 anos para CPLP/UE, 10 anos para os restantes).' }
          ]}
        ]}
      ]
    },
    {
      id: 'requirements',
      title: 'Requisitos',
      content: [
        { kind: 'checklist', items: [
          'Certidão de nascimento do requerente (forma completa, com apostila/legalização e tradução)',
          'Certidão de nascimento do progenitor através do qual se comprova o parentesco',
          'Certidão de nascimento da avó/do avô (se o requerente for neto)',
          'Comprovativo da nacionalidade portuguesa do antepassado (assento de nascimento na Conservatória, Cartão de Cidadão, passaporte ou registo histórico)',
          'Para NETOS: prova de conhecimento suficiente da língua portuguesa — normalmente certificado A2 (CIPLE ou equivalente reconhecido/dispensa). Para FILHOS de portugueses, em regra, isto NÃO é exigido',
          'Certificados de registo criminal dos países de nacionalidade e dos países de residência após os 16 anos (com apostila/legalização e tradução). A certidão do registo criminal portuguesa pode ser obtida pelo próprio IRN mediante autorização do requerente',
          'Para netos: NÃO pode haver condenação em pena de prisão de 3 anos ou mais (segundo a escala portuguesa) nem fundamentos relacionados com ameaça à segurança/terrorismo',
          'Em determinados regimes de aquisição, o Ministério Público pode opor-se (oposição) em caso de serviço militar voluntário a Estado estrangeiro ou de exercício de funções públicas não técnicas para Estado estrangeiro — isto NÃO é uma checklist habitual, mas é relevante em casos raros'
        ]},
        { kind: 'warning', text: 'A cadeia de certidões deve ser contínua. Se o antepassado perdeu a nacionalidade ou se os registos se perderam, o processo é mais complexo.' }
      ]
    },
    {
      id: 'process',
      title: 'Processo',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: '1. Reunir a genealogia', content: [
            { kind: 'paragraph', text: 'Apostila/legalização de todas as certidões estrangeiras + tradução para português, devidamente certificada (notário em Portugal, consulado, advogado/solicitador ou outro método aceite pelo IRN). Os registos portugueses procuram-se por local e período: Conservatória/IRN para registo civil, Arquivo Distrital para muitos registos antigos, Torre do Tombo para fundos específicos. É melhor começar pelo concelho/freguesia e ano exactos.' }
          ]},
          { id: 'p2', title: '2. Verificar o registo do antepassado', content: [
            { kind: 'paragraph', text: 'No site do IRN ou através de pedido à Conservatória — confirme que o registo existe.' }
          ]},
          { id: 'p3', title: '3. Fazer o CIPLE A2', content: [
            { kind: 'paragraph', text: 'Excepto filhos de portugueses — para estes não é exigido.' }
          ]},
          { id: 'p4', title: '4. Apresentar o requerimento no IRN', content: [
            { kind: 'paragraph', text: 'Conservatória dos Registos Centrais (Lisboa) ou consulado.' }
          ]}
        ]}
      ]
    },
    {
      id: 'sefardi',
      title: 'Judeus sefarditas — regime sob ameaça de revogação',
      content: [
        { kind: 'paragraph', text: 'A via acelerada para judeus sefarditas foi introduzida na Lei da Nacionalidade pela **Lei Orgânica n.º 1/2013** (depois, a regulamentação foi detalhada pelo Decreto-Lei 30-A/2015) e esteve em vigor durante quase 10 anos. Um endurecimento substancial do regime vigora desde **01.09.2022** — através do **Decreto-Lei n.º 26/2022**, que alterou o Regulamento da Nacionalidade e passou a exigir provas de ligação efectiva a Portugal (residência, ligações económicas ou culturais). Depois disso, o número de pedidos caiu abruptamente.' },
        { kind: 'paragraph', text: '**03.05.2026 o Presidente Seguro promulgou o Decreto AR 48/XVII** (após a passagem pelo TC, renumerado a partir de 17/XVII) — a lei revoga integralmente a via sefardita acelerada. Em 13.05.2026, a lei AINDA NÃO foi publicada no DRE (passaram 10 dias desde a promulgação). A lei entrará em vigor no dia seguinte ao da publicação no Diário da República. IMPORTANTE: o texto da lei contém uma norma transitória — aos processos administrativos em tramitação à data da entrada em vigor aplica-se a redacção anterior da Lei 37/81 (a proposta do PS de garantias transitórias mais amplas foi rejeitada). Seguro, no discurso de 03.05.2026, também pediu publicamente que os processos já submetidos fossem apreciados pelas regras antigas por razões de segurança jurídica. Até à publicação no DRE, a via sefardita ainda funciona tecnicamente no regime posterior ao Decreto-Lei 26/2022.' },
        { kind: 'warning', text: 'Se planeia apresentar o pedido — faça-o COM URGÊNCIA, antes da publicação do Decreto 48/XVII no DRE. A apresentação fixa o processo no regime antigo (norma transitória da lei + pedido do Presidente ao IRN). Após a publicação, a nova lei eliminará por completo esta via para novos requerentes.' }
      ]
    }
  ],
  costs: [
    { label: 'Emolumento do IRN', amountEURMin: 0, amountEURMax: 250, note: 'Depende do fundamento: para filhos menores de portugueses, em alguns casos é gratuito; para netos, normalmente cerca de 250 €. Consulte a Tabela de Emolumentos IRN actualizada' },
    { label: 'Pedidos a arquivos', amountEURMin: 50, amountEURMax: 300 },
    { label: 'Traduções + apostilas', amountEURMin: 200, amountEURMax: 600 }
  ],
  timelineDaysMin: 180,
  timelineDaysMax: 720,
  sources: [
    { title: 'IRN — Nacionalidade por efeito da vontade ou origem', url: 'https://justica.gov.pt/Servicos/Submeter-pedido-de-nacionalidade', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 37/81 (Lei da Nacionalidade) — consolidada', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/1981-34445075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei Orgânica n.º 1/2013 — introdução da via sefardita na Lei da Nacionalidade', url: 'https://diariodarepublica.pt/dr/detalhe/lei-organica/1-2013-654468', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Decreto-Lei n.º 26/2022 — endurecimento da via sefardita desde 01.09.2022 (alteração do Regulamento)', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/26-2022-180773692', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Decreto-Lei 30-A/2015 — Regulamento da Nacionalidade (sefardita, redacção inicial)', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/30-a-2015-66714746', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Arquivo Nacional Torre do Tombo', url: 'https://antt.dglab.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Presidência da República — Promulgação Decreto AR 48/XVII (Lei da Nacionalidade)', url: 'https://www.presidencia.pt/atualidade/toda-a-atualidade/2026/05/presidente-da-republica-promulga-decreto-da-assembleia-da-republica/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
