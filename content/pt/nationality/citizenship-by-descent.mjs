export default {
  editorialVoice: 'hackportugal',
  id: 'citizenship-by-descent',
  categoryId: 'nationality',
  title: 'Nacionalidade portuguesa por ascendência',
  tldr: 'Existem vias directas para filhos de portugueses e para netos de portugueses. Para um neto, trata-se de nacionalidade por origem, formalizada por requerimento/declaração no IRN/Conservatória quando cumpridas as condições do art. 1 Lei 37/81 (incluindo conhecimento suficiente da língua portuguesa). Para bisnetos NÃO há categoria directa: primeiro o progenitor ou avô/avó deve obter a nacionalidade, após o que o requerente apresenta o pedido já como filho/neto. Caso contrário, restam as vias comuns (naturalização após residência legal).',
  tags: ['nacionalidade', 'parentesco', 'antepassados'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'categories',
      title: 'Categorias por parentesco',
      content: [
        { kind: 'substeps', items: [
          { id: 'd1', title: 'Filho de cidadão português', content: [
            { kind: 'paragraph', text: 'Se, no momento do nascimento, um dos progenitores já era cidadão português, o filho nascido no estrangeiro pode obter a nacionalidade por origem através do registo de nascimento ou de declaração na Conservatória / IRN / consulado. Se o progenitor se tornou português já DEPOIS do nascimento do filho — aplica-se uma análise separada: para menores pode existir um regime de aquisição da nacionalidade; para adultos nem sempre há uma via directa.' }
          ]},
          { id: 'd2', title: 'Neto de cidadão português', content: [
            { kind: 'paragraph', text: 'Trata-se de nacionalidade por origem, mas NÃO é «automática»: é necessário apresentar uma declaração/requerimento no IRN ou Conservatória e cumprir as condições do art. 1.º Lei da Nacionalidade.\n\nNa prática, a prova-chave da ligação à comunidade portuguesa é o conhecimento suficiente da língua portuguesa, normalmente nível A2 (CIPLE ou equivalente reconhecido/dispensa). Só «ligações culturais» normalmente não são suficientes. Também são verificados fundamentos de exclusão criminais/de segurança.' }
          ]},
          { id: 'd3', title: 'Bisneto e seguintes — NÃO há via directa', content: [
            { kind: 'paragraph', text: 'Não existe uma categoria directa de «bisneto» na Lei 37/81. A sequência habitual: primeiro a geração intermédia obtém a nacionalidade (progenitor ou avô/avó); depois o requerente verifica se pode apresentar o pedido como filho ou neto de cidadão português. Se não for possível construir a cadeia — restam as vias comuns, sobretudo a naturalização após 5 anos de residência legal (ao abrigo da nova lei, após a publicação do Decreto AR 48/XVII no DRE — 7 anos para CPLP/UE, 10 anos para os restantes).' }
          ]}
        ]}
      ]
    },
    {
      id: 'requirements',
      title: 'Requisitos',
      content: [
        { kind: 'checklist', items: [
          'Certidão de nascimento do requerente (forma integral, com apostila/legalização e tradução)',
          'Certidão de nascimento do progenitor através de quem se comprova o parentesco',
          'Certidão de nascimento da avó/do avô (se o requerente for neto)',
          'Comprovativo da nacionalidade portuguesa do antepassado (assento de nascimento na Conservatória, Cartão de Cidadão, passaporte ou registo histórico)',
          'Para NETOS: prova de conhecimento suficiente da língua portuguesa — normalmente certificado A2 (CIPLE ou equivalente reconhecido/dispensa). Para FILHOS de portugueses, em regra, isto NÃO é exigido',
          'Certificados de registo criminal dos países de nacionalidade e dos países de residência após os 16 anos (com apostila/legalização e tradução). A certidão do registo criminal portuguesa pode ser obtida pelo próprio IRN mediante autorização do requerente',
          'Para netos: NÃO deve existir condenação em pena de prisão de 3 anos ou mais (segundo a escala portuguesa) nem fundamentos relacionados com ameaça à segurança/terrorismo',
          'Em regimes específicos de aquisição, o Ministério Público pode opor-se (oposição) em caso de serviço militar voluntário a Estado estrangeiro ou exercício de funções públicas não técnicas para Estado estrangeiro — isto NÃO é uma checklist habitual, mas é relevante em casos raros'
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
            { kind: 'paragraph', text: 'Apostila/legalização de todas as certidões estrangeiras + tradução para português, devidamente certificada (notário em Portugal, consulado, advogado/solicitador ou outro meio aceite pelo IRN). Os registos portugueses são procurados por local e período: Conservatória/IRN para o registo civil, Arquivo Distrital para muitos registos antigos, Torre do Tombo para determinados fundos. É melhor começar pelo concelho/freguesia e ano exactos.' }
          ]},
          { id: 'p2', title: '2. Verificar o registo do antepassado', content: [
            { kind: 'paragraph', text: 'No site do IRN ou através de pedido à Conservatória — confirmar que o registo existe.' }
          ]},
          { id: 'p3', title: '3. Fazer o CIPLE A2', content: [
            { kind: 'paragraph', text: 'Excepto os filhos de portugueses — para eles isto não é exigido.' }
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
        { kind: 'paragraph', text: 'A via sefardita evoluiu em três fases: (1) **Lei Orgânica n.º 1/2013** introduziu-a na Lei da Nacionalidade (detalização — Decreto-Lei 30-A/2015); (2) **Decreto-Lei n.º 26/2022** (01.09.2022) tornou o Regulamento mais exigente e passou a exigir provas de ligação a Portugal; (3) **Lei Orgânica n.º 1/2024 de 5 de março de 2024** (entrou em vigor em 01.04.2024) alterou materialmente a própria lei: introduziu a obrigatoriedade de **residência legal em Portugal ≥ 3 anos (consecutive ou interpolated)** + avaliação por uma comissão especial junto do Ministério da Justiça (investigadores + representantes de comunidades judaicas com estatuto de religious legal entity em PT). Após a 1/2024, a via sefardita «à distância» ficou, na prática, encerrada.' },
        { kind: 'paragraph', text: '**03.05.2026 O Presidente Seguro promulgou o Decreto AR 48/XVII** (após passagem pelo TC, renumerado de 17/XVII) — a lei **revoga totalmente** a via sefardita, mesmo no formato actual com residência de 3 anos. Entra em vigor no dia seguinte ao da publicação no Diário da República; **verifique o estado actual da publicação em diariodarepublica.pt**. O texto da lei contém uma disposição transitória — aos processos administrativos em tramitação à data da entrada em vigor aplica-se a redacção anterior da Lei 37/81 (a proposta do PS de garantias transitórias mais amplas foi rejeitada). Seguro, no discurso de 03.05.2026, também pediu publicamente que os processos já apresentados fossem analisados pelas regras antigas por razões de segurança jurídica.\n\nAté à entrada em vigor da 48/XVII, a via sefardita funciona tecnicamente no regime posterior à LO 1/2024 (residência ≥ 3 anos + comissão).' },
        { kind: 'warning', text: 'Se planeia apresentar o pedido — faça-o COM URGÊNCIA, antes da publicação do Decreto 48/XVII no DRE. A apresentação fixa o processo no regime antigo (disposição transitória da lei + pedido do Presidente ao IRN). Após a publicação, a nova lei eliminará totalmente esta via para novos requerentes.' }
      ]
    }
  ],
  costs: [
    { label: 'Emolumento do IRN', amountEURMin: 0, amountEURMax: 250, note: 'Depende do fundamento: para filhos menores de portugueses, em alguns casos é gratuito; para netos, normalmente cerca de 250 €. Confirme com a Tabela de Emolumentos IRN actualizada' },
    { label: 'Pedidos a arquivos', amountEURMin: 50, amountEURMax: 300 },
    { label: 'Traduções + apostilas', amountEURMin: 200, amountEURMax: 600 }
  ],
  timelineDaysMin: 180,
  timelineDaysMax: 720,
  sources: [
    { title: 'IRN — Nacionalidade por efeito da vontade ou origem', url: 'https://justica.gov.pt/Servicos/Submeter-pedido-de-nacionalidade', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 37/81 (Lei da Nacionalidade) — consolidada', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/1981-34445075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei Orgânica n.º 1/2013 — introdução da via sefardita na Lei da Nacionalidade', url: 'https://diariodarepublica.pt/dr/detalhe/lei-organica/1-2013-654468', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Decreto-Lei n.º 26/2022 — agravamento dos requisitos da via sefardita a partir de 01.09.2022 (alteração do Regulamento)', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/26-2022-180773692', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Lei Orgânica n.º 1/2024 (05.03.2024) — alteração material do regime sefardita: residência de 3+ anos + comissão, em vigor desde 01.04.2024', url: 'https://diariodarepublica.pt/dr/detalhe/lei-organica/1-2024-854130977', kind: 'law', language: 'pt', lastRetrieved: '2026-05-18' },
    { title: 'Decreto-Lei 30-A/2015 — Regulamento da Nacionalidade (sefardita, redacção inicial)', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/30-a-2015-66714746', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Arquivo Nacional Torre do Tombo', url: 'https://antt.dglab.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Presidência da República — Promulgação Decreto AR 48/XVII (Lei da Nacionalidade)', url: 'https://www.presidencia.pt/atualidade/toda-a-atualidade/2026/05/presidente-da-republica-promulga-decreto-da-assembleia-da-republica/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}
