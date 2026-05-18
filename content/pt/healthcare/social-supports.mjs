export default {
  editorialVoice: 'hackportugal',
  id: 'social-supports',
  categoryId: 'healthcare',
  title: 'Apoios sociais em Portugal — RSI, subsídios, prestações',
  tldr: 'Portugal disponibiliza um conjunto amplo de prestações sociais aos residentes: **RSI** (rendimento social de inserção) — complemento até ao valor de referência do agregado familiar (100% da base para o requerente, 70% por cada adulto seguinte, 50% por criança); **Subsídio de desemprego** — cerca de 65% da remuneração de referência, máximo 2,5×IAS (1 342,83 € em 2026), duração segundo a tabela da Segurança Social por idade e carreira contributiva; **Porta 65 Jovem** — apoio ao arrendamento (valor segundo tabelas do IHRU, sem limite fixo); **Tarifa Social Energia Elétrica** — cerca de 33,8% de desconto nos eligible tariff components (para gás — tarifa separada ~31,2%); **habitação social** — arrendamento segundo a fórmula de renda apoiada. Requisitos: residência legal em PT, verificação de rendimentos/património e, por vezes, período mínimo de contribuições.',
  tags: ['rsi', 'subsídio', 'apoio social', 'prestação'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'rsi',
      title: '💰 RSI — Rendimento Social de Inserção',
      content: [
        { kind: 'paragraph', text: 'O RSI é um complemento até ao valor de referência do agregado familiar para famílias com rendimentos muito baixos. Composição do cálculo: 100% do montante base para o requerente, 70% para cada adulto seguinte, 50% para cada menor; prestação = esse valor de referência menos os rendimentos contabilizados da família.' },
        { kind: 'checklist', items: [
          '📊 **Montante base**: cerca de 242,8 €/mês para o requerente em 2026 (≈ 45,208% do IAS 537,13 €); +70% deste montante por cada adulto adicional; +50% por cada menor',
          '🧾 **Condições**: rendimento total do agregado familiar < valor-limite; limite de património mobiliário (normalmente ≤ 60× IAS); disponibilidade para trabalhar (existe obrigação de procurar trabalho através do IEFP)',
          '📅 **Duração**: 12 meses, renovação anual se as condições se mantiverem',
          '👨‍👩‍👧 **Para estrangeiros**: residência legal em Portugal; para cidadãos de países terceiros, a Segurança Social normalmente exige residence permit/residência legal há pelo menos 1 ano. Para refugiados e alguns estatutos protegidos — regras especiais (verificar o Guia Prático RSI actualizado)',
          '📍 **Pedido**: SS Direta → «Prestações» → «Rendimento Social de Inserção», ou num balcão do ISS',
          '⏱️ **Tratamento**: 30-60 dias',
          '📋 **Obrigações**: inscrição no IEFP como candidato a emprego, participação em cursos / entrevistas obrigatórios, não recusar trabalho «adequado»'
        ]},
        { kind: 'warning', text: 'O subsídio de desemprego, salário e outros rendimentos são contabilizados no cálculo do RSI e podem reduzir ou excluir a prestação. O património mobiliário da família não deve exceder o limite definido (normalmente 60× IAS). Incumprimento das regras/omissão de rendimentos = perda do direito e sanções.' }
      ]
    },
    {
      id: 'unemployment',
      title: '📉 Subsídio de desemprego',
      content: [
        { kind: 'substeps', items: [
          { id: 'u1', title: 'Requisitos', content: [
            { kind: 'checklist', items: [
              '≥ 360 dias de contribuições para a Segurança Social nos últimos 24 meses',
              'Situação de **desemprego involuntário**: despedimento coletivo, extinção do posto de trabalho, inadaptação, caducidade de contrato a termo, insolvência do empregador, resolução pelo trabalhador com justa causa (comprovada por documentos)',
              '❌ Despedimento voluntário sem justa causa — não dá direito',
              'Para recibos verdes, o subsídio de desemprego comum não se aplica. Podem existir prestações separadas por cessação de atividade para trabalhadores independentes economicamente dependentes ou empresários/gerentes, mediante condições especiais de contribuições e cessação da atividade',
              'É necessário estar disponível para trabalhar e inscrito no IEFP'
            ]}
          ]},
          { id: 'u2', title: 'Valor e duração', content: [
            { kind: 'checklist', items: [
              'Normalmente **65% da remuneração de referência**: soma das remunerações registadas nos primeiros 12 meses dos 14 meses anteriores ao desemprego, dividida por 360',
              'Máximo: **2,5× IAS = 1 342,83 € em 2026** (não superior aos limites definidos pela net reference remuneration)',
              'Mínimo: normalmente **1× IAS = 537,13 € em 2026**, mas não superior à net remuneration de referência; com salário muito baixo, a prestação pode ser inferior ao IAS',
              'A duração é determinada pela tabela da Segurança Social por idade e carreira contributiva: de 150 dias para trabalhadores jovens com carreira mínima até 540 dias e mais, com dias adicionais por carreira longa. Consulte a tabela detalhada no Guia Prático Subsídio de Desemprego',
              '**Subsídio social de desemprego** disponível em caso de low household income; o valor é normalmente 80% do IAS para pessoa isolada ou 100% do IAS para pessoa com household; a duração depende da idade/carreira contributiva e de ser atribuído como initial ou subsequent após o subsídio de desemprego'
            ]}
          ]},
          { id: 'u3', title: 'Pedido', content: [
            { kind: 'checklist', items: [
              '**Passo 1**: inscrição no Centro de Emprego (IEFP) como desempregado',
              '**Passo 2**: na SS Direta — «Prestações» → «Subsídio de desemprego» → preencher',
              'Ou: através de balcão do ISS com documentos (contrato de trabalho, carta de despedimento)',
              '📅 Prazo: no prazo de 90 dias após o despedimento',
              '⏱️ Pagamento: 30-45 dias para tratamento, o dinheiro chega com efeitos retroativos à data do despedimento'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'housing',
      title: '🏠 Habitação — apoios e habitação social',
      content: [
        { kind: 'substeps', items: [
          { id: 'h1', title: 'Subsídio de Renda / Porta 65', content: [
            { kind: 'checklist', items: [
              '**Porta 65 Jovem**: para 18–35 anos (em casal, um dos requerentes pode ter até 37). O valor é uma percentagem da eligible rent segundo as tabelas do IHRU/Portal da Habitação, e não um limite fixo de 200 €. O valor é calculado pelo simulador do Portal da Habitação',
              '**Apoio extraordinário à renda** — apoio monetário a arrendatários com elevado esforço com renda, normalmente até 200 €/mês, segundo as condições da lei e através da AT/Segurança Social',
              '**Programa de Arrendamento Acessível** — contratos de arrendamento com rent below reference values e benefícios fiscais para landlords. Não é uma subvenção universal de 50%',
              'Os critérios dependem do programa: Porta 65 — age, lease, tax residence, income/rent-effort e maximum rent tables; apoio extraordinário à renda — effort rate e household income criteria',
              'Pedido: portaldahabitacao.pt → Candidaturas',
              'Tratamento: 2-6 meses'
            ]}
          ]},
          { id: 'h2', title: 'Habitação Social (habitação municipal)', content: [
            { kind: 'checklist', items: [
              'Arrendamento de apartamento junto do município em regime de renda apoiada (Lei 81/2014), com base no rendimento e na composição do agregado familiar; pode ser muito baixo, sem intervalo universal',
              'Lista de espera: 3-10 anos em Lisboa / Porto, mais rápido nas regiões',
              'Pedido: na Câmara Municipal da área de residência',
              'As prioridades dependem do município: homelessness, unsafe housing, disability, elderly, minors/dependants, domestic violence victims, low income, overcrowding, entre outras'
            ]}
          ]},
          { id: 'h3', title: 'Renda Acessível', content: [
            { kind: 'paragraph', text: 'Programa para pessoas trabalhadoras com rendimentos médios e baixos: o Programa de Arrendamento Acessível nacional funciona através de rent below reference values e benefícios fiscais para landlords. Os programas municipais de renda acessível são candidatados nos sites da Câmara/plataformas municipais e podem usar sorteios; as regras diferem por cidade.' }
          ]}
        ]}
      ]
    },
    {
      id: 'energy',
      title: '⚡ Tarifa Social de Energia',
      content: [
        { kind: 'checklist', items: [
          '**Tarifa Social Electricidade**: desconto de cerca de **33,8%** nos eligible regulated tariff components (a redução final da factura é inferior, porque os impostos e a contribuição audiovisual não têm o mesmo desconto). Exige contrato doméstico de baixa tensão com potência contratada ≤ 6,9 kVA',
          '**Tarifa Social Gás Natural**: desconto separado de cerca de **31,2%**. Os critérios são **mais restritos** do que para a electricidade — por exemplo, para a categoria abono de família, os limiares são mais estreitos; lista completa em dgeg.gov.pt',
          'É aplicada automaticamente se você estiver numa das categorias (segundo a lista completa da DGEG para electricidade):',
          '  - **CSI** (Complemento Solidário para Idosos)',
          '  - **RSI** (Rendimento Social de Inserção)',
          '  - **Qualquer subsídio de desemprego**: contributivo, social inicial, social subsequente, prolongamento, parcial, cessação atividade, cessação negócio, apoio desempregados de longa duração',
          '  - **Abono de Família 1-2 escalão**',
          '  - **Pensão Social de Velhice / Invalidez** (para electricidade)',
          '  - **Complemento da Prestação Social para a Inclusão** (para electricidade)',
          '  - Households com annual income ≤ 6 272 € (+3 136 € por cada membro sem rendimento, até 10 pessoas). Limiar actualizado — em dgeg.gov.pt',
          'EDP / Galp / Endesa, etc. — aplicação automática com base nos dados da Segurança Social / AT / NIF',
          'Se a correspondência automática não funcionou — peça uma declaração à Segurança Social/AT, entregue ao fornecedor; verificação através de dgeg.gov.pt',
          'Válida de forma contínua enquanto o estatuto se mantiver'
        ]}
      ]
    },
    {
      id: 'other-benefits',
      title: '🎁 Outros apoios',
      content: [
        { kind: 'checklist', items: [
          '🧒 **Abono de Família**: para crianças < 18 / 24 estudante / 27 pessoa com deficiência. 40-190 €/mês consoante o escalão (ver guia separado)',
          '👶 **Subsídio parental inicial**: as percentagens dependem da duração escolhida e da partilha entre os progenitores: 120 dias — 100%, 150 dias — 80% (ou 100% se houver partilha segundo as regras da SS), 180 dias — 90% com shared-leave rules. Verificar a tabela da Segurança Social',
          '🎒 **Apoio às despesas escolares**: desconto em manuais escolares, materiais — ISS.gov.pt',
          '🧑‍🎓 **Bolsa de estudo**: para universidade — DGES, 500-5 000 €/ano',
          '♿ **Complemento por Dependência**: para pessoas com deficiência e pessoas que necessitam de cuidados — até 100-200 €/mês',
          '👵 **Complemento Solidário para Idosos (CSI)**: complemento para idosos com annual resources abaixo do CSI reference threshold; são considerados os rendimentos do requerente, cônjuge/parceiro e, em alguns casos, children. Consultar o limiar no Guia Prático CSI actualizado',
          '🧑‍⚕️ **Taxas moderadoras no SNS** foram, em grande parte, eliminadas (Lei n.º 22/2022), mas podem aplicar-se em urgência sem referral do SNS24/INEM/centro de saúde e sem internamento posterior. Existem isenções para minors, pregnant women, people with economic insufficiency, certain chronic conditions/disabilities e outras legal categories'
        ]}
      ]
    },
    {
      id: 'how-to-apply',
      title: '📋 Processo geral de pedido',
      content: [
        { kind: 'checklist', items: [
          '1. Entrar na **SS Direta** (seg-social.pt) ou dirigir-se a um balcão do ISS',
          '2. Reunir o conjunto básico: CC/autorização de residência, NIF, NISS, IBAN, comprovativos de rendimento (3-12 meses), composição do agregado familiar, documentos de dependentes. A lista depende da prestação: para desemprego é necessária employer declaration/modelo RP5044 ou equivalente e IEFP registration; para habitação — registered lease e tax data; para RSI — proof of household income/assets e residence status',
          '3. Submeter online ou presencialmente',
          '4. Aguardar a decisão (30-90 dias)',
          '5. Se aprovado — pagamentos automáticos mensais para o IBAN',
          '6. Revisão anual — confirmar rendimentos, situação familiar',
          '⚠️ Não oculte rendimentos: a Segurança Social cruza dados com a autoridade tributária; terá de devolver as prestações + coima até 3 vezes o valor'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Montante base do RSI para o requerente', amountEUR: 242.80, note: '€/mês 2026 (≈ 45,208% × IAS 537,13 €)' },
    { label: 'Mínimo do Subsídio desemprego', amountEUR: 537.13, note: '€/mês (1× IAS), mas não superior à net remuneration de referência' },
    { label: 'Máximo do Subsídio desemprego', amountEUR: 1342.83, note: '€/mês (2,5× IAS 2026)' },
    { label: 'Porta 65 Jovem (arrendamento)', amountEUR: 0, note: 'o valor varia — é calculado pelo simulador do Portal da Habitação segundo a eligible rent e o municipality' },
    { label: 'Habitação social (arrendamento)', amountEUR: 0, note: 'calculada pelo município segundo a renda apoiada formula (Lei 81/2014)' },
    { label: 'Tarifa Social electricity', amountEUR: 0, note: 'desconto ~33,8% nos eligible tariff components (a redução final da factura é inferior após impostos)' },
    { label: 'Tarifa Social natural gas', amountEUR: 0, note: 'desconto separado ~31,2% para eligible low-pressure household contracts' }
  ],
  sources: [
    { title: 'Segurança Social — Guia Prático RSI', url: 'https://www.seg-social.pt/rendimento-social-de-insercao', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Segurança Social — Guia Prático Subsídio de Desemprego', url: 'https://www.seg-social.pt/subsidio-de-desemprego', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Segurança Social — Subsídio Parental', url: 'https://www.seg-social.pt/parentalidade', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Segurança Social — Complemento Solidário para Idosos', url: 'https://www.seg-social.pt/complemento-solidario-para-idosos', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'IHRU / Portal da Habitação — Porta 65 Jovem', url: 'https://www.portaldahabitacao.pt/web/guest/porta-65-jovem', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'IEFP — Centro de Emprego', url: 'https://www.iefp.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'DGEG — Tarifa Social de Energia Elétrica', url: 'https://www.dgeg.gov.pt/pt/areas-setoriais/energia-eletrica/tarifa-social/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'DGEG — Tarifa Social de Gás Natural', url: 'https://www.dgeg.gov.pt/pt/areas-setoriais/gas-natural/tarifa-social/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
