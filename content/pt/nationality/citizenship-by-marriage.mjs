export default {
  editorialVoice: 'hackportugal',
  id: 'citizenship-by-marriage',
  categoryId: 'nationality',
  title: 'Nacionalidade portuguesa por casamento ou união de facto',
  tldr: 'Os cônjuges de cidadãos portugueses podem requerer a nacionalidade após 3 anos de casamento. A alternativa é a união de facto há mais de 3 anos com um cidadão português, reconhecida por decisão judicial (sentença declarativa): o simples registo na Junta de Freguesia ou na Conservatória do Registo Civil para efeitos de nacionalidade NÃO é suficiente. O certificado linguístico CIPLE formalmente NÃO é exigido. Antes de 6 anos de casamento, o IRN/Ministério Público pode solicitar provas de «ligação efetiva à comunidade nacional». Não é obrigatório residir em Portugal. A nova lei (aprovada pelo Parlamento em 01.04.2026, em 28.04.2026 NÃO promulgada) aumentará o prazo para 5 anos e reforçará a exigência de coabitação real.',
  tags: ['nacionalidade', 'casamento', 'união'],
  estimatedReadMinutes: 6,
  pendingLaw: {
    summary: 'Decreto AR 17/XVII, novamente aprovado pelo Parlamento em 01.04.2026 (após veto em dezembro de 2025 e inconstitucionalidade pelo TC Acórdão 1133/2025). Propõe aumentar o prazo de casamento de 3 para 5 anos, exigir coabitação real e provas dessa coabitação, e elevar o limiar da presunção de «ligações efetivas» de 6 para 7–8 anos. Em 28.04.2026, a lei NÃO foi promulgada pelo Presidente — aplicam-se as regras da Lei 37/81 (3 anos).',
  },
  steps: [
    {
      id: 'universal',
      title: 'O processo é igual para todos os países',
      content: [
        { kind: 'paragraph', text: 'Ao contrário da naturalização (por 5/7/10 anos de residência), por casamento ou união de facto o processo NÃO depende do país de origem do requerente. Cidadãos da CPLP, da UE, de países terceiros — as condições são as mesmas. Não existem vias «aceleradas» para brasileiros ou italianos — todos precisam de 3 anos de casamento.' }
      ]
    },
    {
      id: 'requirements',
      title: 'Requisitos (segundo a lei em vigor)',
      content: [
        { kind: 'checklist', items: [
          '💍 Casamento com cidadão português ≥ 3 anos no momento do pedido (Lei 37/81 art. 3 n.1)',
          '🤝 OU união de facto >3 anos com cidadão português, **reconhecida por decisão judicial** (Lei 37/81 art. 3 n.3) — sentença declarativa do tribunal; uma simples declaração ou registo na Junta de Freguesia para nacionalidade NÃO serve',
          '📜 Casamento válido no momento do pedido (sem divórcio, sem separação de pessoas e bens com estatuto jurídico)',
          '⚖️ Ausência de condenações em qualquer país com pena ≥ 3 anos de prisão'
        ]},
        { kind: 'paragraph', text: 'Formalmente, esta via NÃO exige:' },
        { kind: 'checklist', items: [
          '❌ Certificado CIPLE A2 — formalmente NÃO é exigido (a língua é apenas para naturalização após 5+ anos de residência). Na prática, o IRN pode avaliar o domínio da língua como indício indireto de «ligação efetiva» em casamentos <6 anos',
          '❌ Residência em território português — não é obrigatória, o cônjuge estrangeiro pode viver com o cidadão português no estrangeiro',
          '❌ «Ligação a Portugal» como lista formal de requisitos — não é solicitada na fase de receção. Mas veja abaixo sobre a presunção'
        ]},
        { kind: 'warning', text: 'Nuance importante sobre a Lei 37/81 art. 3: para casamentos de 3–6 anos, é OBRIGATÓRIO demonstrar a «ligação efetiva à comunidade nacional» — esta é solicitada pelo Ministério Público em caso de oposição. Com ≥6 anos de casamento OU havendo filhos portugueses em comum, aplica-se a presunção, e não é necessário provar a ligação. Ou seja, «não é exigido» é uma simplificação para casos de 6+ anos.' }
      ]
    },
    {
      id: 'uniao',
      title: 'União de Facto — para efeitos de NACIONALIDADE',
      content: [
        { kind: 'warning', text: 'IMPORTANTE: para requerer a nacionalidade por união de facto, a Lei 37/81 art. 3 n.3 exige **decisão judicial de um tribunal português** (sentença declarativa), que reconheça que o requerente vive em união de facto com um cidadão português **há mais de 3 anos** à data do pedido. Uma simples declaração da Junta de Freguesia ou um registo geral de união de facto sem reconhecimento judicial NÃO são aceites para efeitos de nacionalidade.' },
        { kind: 'paragraph', text: 'Processo para obter a decisão judicial:' },
        { kind: 'checklist', items: [
          '🏛️ Apresentar uma ação no Tribunal de Família e Menores (ou Tribunal Cível) para reconhecimento da união de facto com cidadão português',
          '📋 Provas de vida em comum: atestado de residência (Junta de Freguesia), contas/contratos de serviços domésticos em conjunto, contrato de arrendamento/propriedade em nome de ambos, extratos bancários, fotografias, correspondência',
          '👥 Testemunhas — amigos/familiares',
          '💶 Custas judiciais: ~100-300 € (depende do valor da ação)',
          '🧑‍⚖️ Advogado recomendado (para estrangeiros, quase obrigatório)',
          '⏱️ Prazos: 6-18 meses',
          '📜 Recebe a certidão da sentença declarativa — este é o documento para o IRN'
        ]},
        { kind: 'paragraph', text: 'O prazo da união conta-se a partir do início factual da vida em comum (não da data da decisão judicial). O tribunal estabelece a data de início com base nas provas. Se vivem juntos há 5 anos — o tribunal reconhecerá 5 anos.' },
        { kind: 'paragraph', text: 'Adicionalmente: o registo geral da união de facto na Junta de Freguesia (ao abrigo da Lei 7/2001) é um simples ato administrativo, exige 2 anos de vida em comum e serve para benefícios sociais/fiscais. É um procedimento SEPARADO do reconhecimento judicial para efeitos de nacionalidade.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documentos para apresentar no IRN',
      content: [
        { kind: 'checklist', items: [
          '📄 Certidão de casamento (se o casamento foi celebrado fora de Portugal — apostila + tradução certificada para português). Se o casamento foi celebrado em Portugal — basta o número do assento da Conservatória do Registo Civil',
          '📄 Para união — certidão da sentença declarativa do tribunal português (NÃO apenas uma declaração da Junta de Freguesia)',
          '📄 Certidão de nascimento do requerente (apostila + tradução certificada; para cidadãos naturalizados do país de origem — certidão completa com os pais)',
          '📄 Passaporte internacional válido',
          '📄 Título de residência (autorização de residência) — anexa-se se existir, mas NÃO é obrigatório. Para pedido no estrangeiro (através do consulado) — não é necessário',
          '📄 Certidão do registo criminal de Portugal — gratuita em eportugal.gov.pt',
          '📄 Certidões do registo criminal do país de nascimento, do(s) país(es) de nacionalidade e de todos os países onde o requerente residiu depois dos 16 anos — com apostila e tradução certificada, se aplicável. Confirmar a validade de cada certidão (normalmente 3-6 meses)',
          '📄 Certidão de nascimento do cônjuge português (assento de nascimento — solicitado automaticamente pelo IRN ou anexado)',
          '📝 Formulário preenchido (modelo 1-B) — descarregar em irn.pt, assinado pelo requerente',
          '💶 Comprovativo de pagamento da taxa — 250 €'
        ]},
        { kind: 'warning', text: 'O requerente NÃO tem Cartão de Cidadão (CC) — é um documento português de cidadão; só é emitido após a obtenção da nacionalidade. Aos documentos junta-se o título de residência (se existir) ou o passaporte.' }
      ]
    },
    {
      id: 'where',
      title: 'Onde e como apresentar o pedido',
      content: [
        { kind: 'checklist', items: [
          '🏛️ Conservatória dos Registos Centrais (Lisboa) — canal principal',
          '🏛️ Qualquer Conservatória do Registo Civil da área de residência (Porto, Coimbra, Faro, etc.)',
          '🏢 Espaço Registos numa Loja do Cidadão',
          '🌍 Consulado de Portugal no estrangeiro — se vive fora de Portugal',
          '💻 Online através do portal do IRN (desde 2025 funciona em regime de teste para cidadãos da CPLP e parte dos casos por casamento)',
          '🧑‍💼 Através de advogado com procuração — sem presença pessoal'
        ]}
      ]
    },
    {
      id: 'timeline',
      title: 'Prazos de apreciação',
      content: [
        { kind: 'timeline', text: 'O prazo oficial previsto na lei é de 1 ano. Na prática, em 2025–2026: 8–24 meses. Depende da completude dos documentos e da carga das Conservatórias. Os pedidos online são tratados mais rapidamente.' },
        { kind: 'paragraph', text: 'Após decisão favorável, o IRN regista-o como cidadão no Assento de Nascimento. Só depois disso pode solicitar o Cartão de Cidadão em qualquer Loja do Cidadão e obter o passaporte português no IRN.' }
      ]
    },
    {
      id: 'common-issues',
      title: 'Dificuldades frequentes',
      content: [
        { kind: 'checklist', items: [
          '❗ Transliteração diferente do nome no passaporte e na certidão de casamento — será necessária uma declaração sob juramento perante notário que confirme a identidade',
          '❗ Casamento celebrado num país terceiro e não registado na Conservatória do Registo Civil — primeiro regista-se o casamento em Portugal, depois a nacionalidade',
          '❗ O cônjuge português obteve a nacionalidade recentemente (naturalização) — o prazo de «3 anos de casamento» conta a partir da data de aquisição da nacionalidade pelo cônjuge, e não da data do casamento',
          '❗ Divórcio em curso — não é possível apresentar o pedido; aguardar a decisão',
          '❗ O parceiro deixou de ter nacionalidade portuguesa — perde-se o direito à naturalização por casamento'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Taxa do IRN', amountEUR: 250 },
    { label: 'Traduções certificadas + apostilas', amountEURMin: 100, amountEURMax: 300 },
    { label: 'Registo de união de facto (se necessário)', amountEUR: 10 },
    { label: 'Jurista/advogado (opcional)', amountEURMin: 500, amountEURMax: 2000 }
  ],
  timelineDaysMin: 240,
  timelineDaysMax: 720,
  sources: [
    { title: 'IRN — Nacionalidade por casamento ou união de facto', url: 'https://justica.gov.pt/Servicos/Submeter-pedido-de-nacionalidade', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 37/81 (Lei da Nacionalidade), art. 3 — por casamento', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/1981-34445075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Decreto-Lei 237-A/2006 — Regulamento da Nacionalidade Portuguesa', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2006-34456975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — união de facto', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/reconhecimento-de-uniao-de-facto', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
