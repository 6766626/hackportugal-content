export default {
  editorialVoice: 'hackportugal',
  id: 'citizenship-by-descent',
  categoryId: 'nationality',
  title: 'Nacionalidade portuguesa por parentesco (Lei Orgânica 1/2026)',
  tldr: '🆕 Ao abrigo da nova **Lei Orgânica n.º 1/2026** (publicada em 18.05.2026, em vigor desde **19.05.2026**), as vias diretas por parentesco são:\n\n👶 **Filho de cidadão português** — tratado por requerimento/declaração no IRN/Conservatória; não é exigido conhecimento da língua.\n\n👦 **Neto de cidadão português** — nacionalidade por origem (art. 1(1)(d/e) Lei 37/81), tratada por requerimento no IRN mediante conhecimento suficiente da língua portuguesa (sufficient knowledge — normalmente comprovado por CIPLE A2, embora em alguns casos o IRN aceite outros meios de prova).\n\n🚫 **NÃO existe categoria direta para bisnetos**: primeiro, o progenitor/avô/avó deve obter a nacionalidade; depois, o requerente apresenta o pedido como filho/neto.\n\n🚫 **A via sefardita foi totalmente revogada** (desde 19.05.2026). Os pedidos pela via sefardita apresentados ANTES de 19.05.2026 podem ser apreciados segundo o regime anterior (LO 1/2024 — residência ≥ 3 anos + comissão).\n\n⚖️ **Disposição transitória:** aos pedidos apresentados no Portal da Nacionalidade ANTES de 19.05.2026 aplicam-se as regras anteriores (incluindo a via sefardita ao abrigo da LO 1/2024).',
  tags: ['nacionalidade', 'parentesco', 'antepassados'],
  estimatedReadMinutes: 5,
  recentlyChangedAt: '2026-05-18',
  changeSummary: '🆕 **Lei Orgânica n.º 1/2026 (em vigor desde 19.05.2026)**: para as vias por parentesco, mantêm-se as categorias diretas — filhos e netos de portugueses. **A via sefardita foi totalmente revogada** para novos pedidos (anteriormente funcionava no regime da LO 1/2024 — residência ≥ 3 anos + comissão). Os pedidos apresentados ANTES de 19.05.2026 são apreciados segundo as regras anteriores, incluindo a via sefardita.',
  steps: [
    {
      id: 'categories',
      title: 'Categorias por parentesco',
      content: [
        { kind: 'substeps', items: [
          { id: 'd1', title: 'Filho de cidadão português', content: [
            { kind: 'paragraph', text: 'Se, no momento do nascimento, um dos progenitores já era cidadão português, o filho nascido no estrangeiro pode obter a nacionalidade por origem através do registo de nascimento ou de declaração numa Conservatória / IRN / consulado. Se o progenitor se tornou português apenas DEPOIS do nascimento do filho — é necessária uma análise separada: para menores pode existir um regime de aquisição da nacionalidade; para adultos nem sempre existe uma via direta.' }
          ]},
          { id: 'd2', title: 'Neto de cidadão português', content: [
            { kind: 'paragraph', text: 'Trata-se de nacionalidade por origem, mas NÃO é “automática”: é necessário apresentar uma declaração/requerimento no IRN ou numa Conservatória e cumprir as condições do art. 1.º da Lei da Nacionalidade.\n\nNa prática, a prova-chave da ligação à comunidade portuguesa é o conhecimento suficiente da língua portuguesa, normalmente nível A2 (CIPLE ou equivalente reconhecido/dispensa). Só “ligações culturais” normalmente não bastam. Também são verificados fundamentos de exclusão de natureza criminal/de segurança.' }
          ]},
          { id: 'd3', title: 'Bisneto e gerações seguintes — NÃO há via direta', content: [
            { kind: 'paragraph', text: 'Não existe categoria direta de “bisneto” na Lei 37/81. A sequência habitual é: primeiro, a geração intermédia (progenitor ou avô/avó) obtém a nacionalidade; depois, o requerente verifica se pode apresentar o pedido como filho ou neto de cidadão português. Se não for possível construir a cadeia — restam as vias comuns, sobretudo a naturalização após 5 anos de residência legal (ao abrigo da nova lei após a publicação do Decreto AR 48/XVII no DRE — 7 anos para CPLP/UE, 10 anos para os restantes).' }
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
          'Certidão de nascimento do progenitor através do qual se comprova o parentesco',
          'Certidão de nascimento da avó/do avô (se o requerente for neto)',
          'Comprovativo da nacionalidade portuguesa do antepassado (assento de nascimento na Conservatória, Cartão de Cidadão, passaporte ou historical record)',
          'Para NETOS: prova de conhecimento suficiente da língua portuguesa — normalmente certificado A2 (CIPLE ou equivalente reconhecido/dispensa). Para FILHOS de portugueses, em regra, isto NÃO é exigido',
          'Certificados de registo criminal dos países de nacionalidade e dos países de residência após os 16 anos (com apostila/legalização e tradução). A certidão do registo criminal portuguesa pode ser obtida pelo próprio IRN mediante autorização do requerente',
          'Para netos: NÃO deve existir condenação em pena de prisão de 3 anos ou mais (segundo a escala portuguesa) nem fundamentos relacionados com ameaça à segurança/terrorismo',
          'Em certos regimes de aquisição, o Ministério Público pode deduzir oposição (oposição) em caso de serviço militar voluntário a um Estado estrangeiro ou de exercício de funções públicas não técnicas para um Estado estrangeiro — isto NÃO faz parte da checklist habitual, mas é relevante em casos raros'
        ]},
        { kind: 'warning', text: 'A cadeia de certidões deve ser contínua. Se o antepassado perdeu a nacionalidade ou se os registos se perderam, o processo torna-se mais complexo.' }
      ]
    },
    {
      id: 'process',
      title: 'Processo',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: '1. Reunir a genealogia', content: [
            { kind: 'paragraph', text: 'Apostila/legalização de todas as certidões estrangeiras + tradução para português, devidamente certificada (notário em Portugal, consulado, advogado/solicitador ou outro meio aceite pelo IRN).\n\nOs registos portugueses são procurados por local e período: Conservatória/IRN para civil registry, Arquivo Distrital para muitos registos antigos, Torre do Tombo para determinados fundos. É melhor começar pelo concelho/freguesia e ano exatos.' }
          ]},
          { id: 'p2', title: '2. Verificar o registo do antepassado', content: [
            { kind: 'paragraph', text: 'No site do IRN ou através de pedido à Conservatória — confirme que o registo existe.' }
          ]},
          { id: 'p3', title: '3. Fazer o CIPLE A2', content: [
            { kind: 'paragraph', text: 'Exceto os filhos de portugueses — para eles isto não é exigido.' }
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
        { kind: 'paragraph', text: 'A via sefardita evoluiu em três fases: (1) **Lei Orgânica n.º 1/2013** introduziu-a na Lei da Nacionalidade (detalhada pelo Decreto-Lei 30-A/2015); (2) **Decreto-Lei n.º 26/2022** (01.09.2022) tornou o Regulamento mais exigente e passou a exigir prova de ligação a Portugal; (3) **Lei Orgânica n.º 1/2024 de 5 de março de 2024** (entrou em vigor em 01.04.2024) alterou materialmente a própria lei: introduziu a obrigatoriedade de **residência legal em Portugal ≥ 3 anos (consecutive ou interpolated)** + avaliação por uma comissão especial junto do Ministério da Justiça (investigadores + representantes de comunidades judaicas com estatuto de religious legal entity em PT).\n\nDepois da 1/2024, a via sefardita “à distância” ficou, na prática, encerrada.' },
        { kind: 'paragraph', text: '**03.05.2026 o Presidente Seguro promulgou o Decreto AR 48/XVII** (após passagem pelo TC, renomeado a partir de 17/XVII) — a lei **revoga totalmente** a via sefardita, mesmo no formato atual com residência de 3 anos. Entra em vigor no dia seguinte ao da publicação em Diário da República; **publicada como **Lei Orgânica n.º 1/2026**, DR 18.05.2026, em vigor desde 19.05.2026**. O texto da lei contém uma disposição transitória — aos processos administrativos em tramitação à data da entrada em vigor aplica-se a redação anterior da Lei 37/81 (a proposta do PS de garantias transitórias mais amplas foi rejeitada). Seguro, no discurso de 03.05.2026, também pediu publicamente que os processos já apresentados fossem apreciados segundo as regras antigas por razões de segurança jurídica.\n\nAté 19.05.2026, a via sefardita funciona tecnicamente no regime posterior à LO 1/2024 (residência ≥ 3 anos + comissão).' },
        { kind: 'warning', text: 'Se planeia apresentar o pedido — faça-o COM URGÊNCIA, antes da publicação do Decreto 48/XVII no DRE. A apresentação fixa o processo no regime antigo (disposição transitória da lei + pedido do Presidente ao IRN).\n\nApós a publicação, a nova lei eliminará totalmente esta via para novos requerentes.' }
      ]
    }
  ],
  costs: [
    { label: 'Taxa do IRN', amountEURMin: 0, amountEURMax: 250, note: 'Depende do fundamento: para filhos menores de portugueses, em alguns casos é gratuito; para netos, normalmente cerca de 250 €. Consulte a Tabela de Emolumentos IRN atualizada' },
    { label: 'Pedidos a arquivos', amountEURMin: 50, amountEURMax: 300 },
    { label: 'Traduções + apostilas', amountEURMin: 200, amountEURMax: 600 }
  ],
  timelineDaysMin: 180,
  timelineDaysMax: 720,
  sources: [
    { title: 'IRN — Nacionalidade por efeito da vontade ou origem', url: 'https://justica.gov.pt/Servicos/Submeter-pedido-de-nacionalidade', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 37/81 (Lei da Nacionalidade) — consolidada', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/1981-34445075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei Orgânica n.º 1/2013 — introdução da via sefardita na Lei da Nacionalidade', url: 'https://diariodarepublica.pt/dr/detalhe/lei-organica/1-2013-654468', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Decreto-Lei n.º 26/2022 — maior exigência na via sefardita a partir de 01.09.2022 (alteração do Regulamento)', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/26-2022-180773692', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Lei Orgânica n.º 1/2024 (05.03.2024) — alteração material do regime sefardita: residência de 3+ anos + comissão, em vigor desde 01.04.2024', url: 'https://diariodarepublica.pt/dr/detalhe/lei-organica/1-2024-854130977', kind: 'law', language: 'pt', lastRetrieved: '2026-05-18' },
    { title: 'Decreto-Lei 30-A/2015 — Regulamento da Nacionalidade (sefardita, redação inicial)', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/30-a-2015-66714746', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Arquivo Nacional Torre do Tombo', url: 'https://antt.dglab.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Presidência da República — Promulgação Decreto AR 48/XVII (Lei da Nacionalidade)', url: 'https://www.presidencia.pt/atualidade/toda-a-atualidade/2026/05/presidente-da-republica-promulga-decreto-da-assembleia-da-republica/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}
