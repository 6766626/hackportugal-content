export default {
  editorialVoice: 'hackportugal',
  id: 'social-supports',
  categoryId: 'healthcare',
  title: 'Apoio social em Portugal — RSI, subsídios, prestações',
  tldr: 'Portugal disponibiliza um conjunto amplo de prestações sociais a residentes: RSI (rendimento social de inserção) — complemento até ao montante de referência do agregado familiar (100% da base para o requerente, 70% por cada adulto adicional, 50% por criança); Subsídio de desemprego — cerca de 65% da remuneração de referência, máximo 2,5×IAS (1 342,83 € em 2026), duração segundo a tabela da Segurança Social por idade e carreira contributiva; Porta 65 Jovem — apoio à renda (montante segundo as tabelas do IHRU, sem limite fixo); Tarifa Social Energia Elétrica — cerca de 33,8% de desconto nas componentes tarifárias elegíveis (para gás — tarifa separada de ~31,2%); habitação social — renda segundo a fórmula de renda apoiada. Requisitos: residência legal em PT, verificação de rendimentos/património e, por vezes, período mínimo de contribuições.',
  tags: ['rsi', 'subsídio', 'apoio social', 'prestação'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'rsi',
      title: '💰 RSI — Rendimento Social de Inserção',
      content: [
        { kind: 'paragraph', text: 'O RSI é um complemento até ao montante de referência do agregado familiar para famílias com rendimentos muito baixos. Composição do cálculo: 100% do montante de base para o requerente, 70% para cada adulto adicional, 50% para cada menor; a prestação = esse montante de referência menos os rendimentos considerados do agregado.' },
        { kind: 'checklist', items: [
          '📊 Montante de base: cerca de 242,8 €/mês para o requerente em 2026 (≈ 45,208% do IAS 537,13 €); +70% desse montante por cada adulto adicional; +50% por cada menor',
          '🧾 Condições: rendimento global do agregado < montante-limite; limite de património mobiliário (normalmente ≤ 60× IAS); disponibilidade para trabalhar (há obrigação de procurar trabalho através do IEFP)',
          '📅 Duração: 12 meses, renovação anual se as condições se mantiverem',
          '👨‍👩‍👧 Para estrangeiros: residência legal em Portugal; para cidadãos de países terceiros, a Segurança Social normalmente exige autorização de residência/residência legal há pelo menos 1 ano. Para refugiados e alguns estatutos protegidos — regras especiais (verificar o Guia Prático RSI actualizado)',
          '📍 Pedido: SS Direta → «Prestações» → «Rendimento Social de Inserção», ou num balcão do ISS',
          '⏱️ Processamento: 30-60 dias',
          '📋 Obrigações: inscrição no IEFP como candidato a emprego, frequência de cursos / entrevistas obrigatórias, não recusar trabalho «adequado»'
        ]},
        { kind: 'warning', text: 'O subsídio de desemprego, o salário e outros rendimentos são considerados no cálculo do RSI e podem reduzir ou excluir a prestação. O património mobiliário do agregado não deve exceder o limite estabelecido (normalmente 60× IAS)\.\n\nIncumprimento das regras/ocultação de rendimentos = perda do direito e sanções.' }
      ]
    },
    {
      id: 'unemployment',
      title: '📉 Subsídio de desemprego',
      content: [
        { kind: 'substeps', items: [
          { id: 'u1', title: 'Requisitos', content: [
            { kind: 'checklist', items: [
              '≥360 dias de contribuições para a Segurança Social nos últimos 24 meses',
              'Situação de desemprego involuntário: despedimento coletivo, extinção do posto de trabalho, inadaptação, caducidade de contrato a termo, insolvência do empregador, resolução pelo trabalhador com justa causa (comprovada por documentos)',
              '❌ Despedimento voluntário sem justa causa — não dá direito',
              'Para recibos verdes, o subsídio de desemprego normal não se aplica. Podem existir prestações separadas por cessação de atividade para trabalhadores independentes economicamente dependentes ou empresários/gerentes, em condições especiais de contribuições e cessação da atividade',
              'É necessário estar disponível para trabalhar e inscrito no IEFP'
            ]}
          ]},
          { id: 'u2', title: 'Montante e duração', content: [
            { kind: 'checklist', items: [
              'Normalmente 65% da remuneração de referência: soma das remunerações registadas nos primeiros 12 meses dos 14 meses anteriores ao desemprego, dividida por 360',
              'Máximo: 2,5× IAS = 1 342,83 € em 2026 (sem exceder os limites estabelecidos para a remuneração líquida de referência)',
              'Mínimo: normalmente 1× IAS = 537,13 € em 2026, mas não superior à remuneração líquida de referência; com salário muito baixo, o subsídio pode ser inferior ao IAS',
              'A duração é determinada pela tabela da Segurança Social por idade e carreira contributiva: desde 150 dias para trabalhadores jovens com carreira mínima até 540 dias ou mais com dias adicionais por carreira longa. Consulte a tabela detalhada no Guia Prático Subsídio de Desemprego',
              'Subsídio social de desemprego disponível em caso de baixo rendimento do agregado; o montante é normalmente 80% do IAS para pessoa isolada ou 100% do IAS para pessoa com agregado; a duração depende da idade/carreira contributiva e de ser atribuído como inicial ou subsequente após o subsídio de desemprego'
            ]}
          ]},
          { id: 'u3', title: 'Pedido', content: [
            { kind: 'checklist', items: [
              'Passo 1: inscrição no Centro de Emprego (IEFP) como desempregado',
              'Passo 2: na SS Direta — «Prestações» → «Subsídio de desemprego» → preencher',
              'Ou: através de um balcão do ISS com documentos (contrato de trabalho, carta de despedimento)',
              '📅 Prazo: no prazo de 90 dias após o despedimento',
              '⏱️ Pagamento: 30-45 dias de processamento, o dinheiro é pago com efeitos retroactivos à data do despedimento'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'housing',
      title: '🏠 Habitação — apoios à renda e habitação social',
      content: [
        { kind: 'substeps', items: [
          { id: 'h1', title: 'Subsídio de Renda / Porta 65', content: [
            { kind: 'checklist', items: [
              'Porta 65 Jovem: para 18–35 anos (num casal, um dos requerentes pode ter até 37). O montante é uma percentagem da renda elegível segundo as tabelas do IHRU/Portal da Habitação, e não um limite fixo de 200 €. O montante é calculado pelo simulador do Portal da Habitação',
              'Apoio extraordinário à renda — apoio monetário a arrendatários com esforço elevado com renda, normalmente até 200 €/mês, nos termos da lei e através da AT/Segurança Social',
              'Programa de Arrendamento Acessível — contratos de arrendamento com renda abaixo dos valores de referência e benefícios fiscais para senhorios. Não é uma subvenção universal de 50%',
              'Os critérios dependem do programa: Porta 65 — idade, contrato de arrendamento, residência fiscal, rendimento/esforço com renda e tabelas de renda máxima; apoio extraordinário à renda — taxa de esforço e critérios de rendimento do agregado',
              'Pedido: portaldahabitacao.pt → Candidaturas',
              'Processamento: 2-6 meses'
            ]}
          ]},
          { id: 'h2', title: 'Habitação Social (habitação municipal)', content: [
            { kind: 'checklist', items: [
              'Arrendamento de casa ao município em regime de renda apoiada (Lei 81/2014) com base no rendimento e na composição do agregado; pode ser muito baixo, sem intervalo universal',
              'Lista de espera: 3-10 anos em Lisboa / Porto, mais rápido nas regiões',
              'Pedido: na Câmara Municipal da área de residência',
              'As prioridades dependem do município: sem-abrigo, habitação insegura, deficiência, idosos, menores/dependentes, vítimas de violência doméstica, baixo rendimento, sobrelotação, etc.'
            ]}
          ]},
          { id: 'h3', title: 'Renda Acessível', content: [
            { kind: 'paragraph', text: 'Programa para pessoas que trabalham com rendimentos médios e baixos: o Programa de Arrendamento Acessível nacional funciona através de rendas abaixo dos valores de referência e benefícios fiscais para senhorios. Os programas municipais de renda acessível são candidatados através dos sites da Câmara/plataformas municipais e podem usar sorteios; as regras variam consoante a cidade.' }
          ]}
        ]}
      ]
    },
    {
      id: 'energy',
      title: '⚡ Tarifa Social de Energia',
      content: [
        { kind: 'checklist', items: [
          'Tarifa Social Electricidade: desconto de cerca de 33,8% nas componentes tarifárias reguladas elegíveis (a redução final da factura é inferior, porque impostos e contribuição audiovisual não são descontados da mesma forma). Exige contrato doméstico de baixa tensão com potência contratada ≤ 6,9 kVA',
          'Tarifa Social Gás Natural: desconto separado de cerca de 31,2%. Os critérios são mais rigorosos do que para a electricidade — por exemplo, para a categoria abono de família os escalões são mais restritos; lista completa em dgeg.gov.pt',
          'É aplicada automaticamente se estiver numa das categorias (segundo a lista completa da DGEG para electricidade):',
          '  - CSI (Complemento Solidário para Idosos)',
          '  - RSI (Rendimento Social de Inserção)',
          '  - Qualquer subsídio de desemprego: contributivo, social inicial, social subsequente, prolongamento, parcial, cessação atividade, cessação negócio, apoio desempregados de longa duração',
          '  - Abono de Família 1.º-2.º escalão',
          '  - Pensão Social de Velhice / Invalidez (para electricidade)',
          '  - Complemento da Prestação Social para a Inclusão (para electricidade)',
          '  - Agregados com rendimento anual ≤ 6 272 € (+3 136 € por cada membro sem rendimento, até 10 pessoas). O limiar actualizado está em dgeg.gov.pt',
          'EDP / Galp / Endesa, etc. — aplicação automática com base nos dados da Segurança Social / AT / NIF',
          'Se a correspondência automática não funcionar — peça comprovativo na Segurança Social/AT, entregue ao fornecedor; verificação através de dgeg.gov.pt',
          'Vigora permanentemente enquanto o estatuto se mantiver'
        ]}
      ]
    },
    {
      id: 'other-benefits',
      title: '🎁 Outras prestações',
      content: [
        { kind: 'checklist', items: [
          '🧒 Abono de Família: para crianças < 18 / 24 estudante / 27 pessoa com deficiência. 40-190 €/mês consoante o escalão (ver guia separado)',
          '👶 Subsídio parental inicial: as percentagens dependem da duração escolhida e da partilha entre progenitores: 120 dias — 100%, 150 dias — 80% (ou 100% com partilha segundo as regras da SS), 180 dias — 90% segundo as regras de licença partilhada. Verificar a tabela da Segurança Social',
          '🎒 Apoio às despesas escolares: descontos em manuais, materiais — ISS.gov.pt',
          '🧑‍🎓 Bolsa de estudo: para universidade — DGES, 500-5 000 €/ano',
          '♿ Complemento por Dependência: para pessoas com deficiência e pessoas que necessitam de cuidados — até 100-200 €/mês',
          '👵 Complemento Solidário para Idosos (CSI): complemento para idosos com recursos anuais abaixo do limiar de referência do CSI; são considerados os rendimentos do requerente, do cônjuge/parceiro e, em alguns casos, dos filhos. O limiar deve ser consultado no Guia Prático CSI actualizado',
          '🧑‍⚕️ Taxas moderadoras no SNS foram em grande medida eliminadas (Lei n.º 22/2022), mas podem aplicar-se em urgência sem referenciação pelo SNS24/INEM/centro de saúde e sem internamento subsequente. Existem isenções para menores, grávidas, pessoas com insuficiência económica, certas doenças crónicas/deficiências e outras categorias legais'
        ]}
      ]
    },
    {
      id: 'how-to-apply',
      title: '📋 Processo geral de pedido',
      content: [
        { kind: 'checklist', items: [
          '1. Entrar na SS Direta (seg-social.pt) ou dirigir-se a um balcão do ISS',
          '2. Reunir o conjunto base: CC/autorização de residência, NIF, NISS, IBAN, comprovativos de rendimento (3-12 meses), composição do agregado, documentos dos dependentes. A lista depende da prestação: para desemprego é necessária a declaração do empregador/modelo RP5044 ou equivalente e inscrição no IEFP; para habitação — contrato de arrendamento registado e dados fiscais; para RSI — prova de rendimentos/património do agregado e estatuto de residência',
          '3. Submeter online ou presencialmente',
          '4. Aguardar a decisão (30-90 dias)',
          '5. Em caso de aprovação — pagamentos automáticos mensais para o IBAN',
          '6. Revisão anual — confirmar rendimentos e situação familiar',
          '⚠️ Não oculte rendimentos: a Segurança Social cruza dados com a autoridade tributária; terá de devolver prestações + coima até ao triplo do valor'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Montante de base do RSI para o requerente', amountEUR: 242.80, note: '€/mês 2026 (≈ 45,208% × IAS 537,13 €)' },
    { label: 'Mínimo do Subsídio desemprego', amountEUR: 537.13, note: '€/mês (1× IAS), mas não superior à remuneração líquida de referência' },
    { label: 'Máximo do Subsídio desemprego', amountEUR: 1342.83, note: '€/mês (2,5× IAS 2026)' },
    { label: 'Porta 65 Jovem (renda)', amountEUR: 0, note: 'o montante varia — é calculado pelo simulador do Portal da Habitação segundo a renda elegível e o município' },
    { label: 'Habitação social (renda)', amountEUR: 0, note: 'calculada pelo município segundo a fórmula de renda apoiada (Lei 81/2014)' },
    { label: 'Tarifa Social electricity', amountEUR: 0, note: 'desconto ~33,8% nas componentes tarifárias elegíveis (redução final da factura inferior após impostos)' },
    { label: 'Tarifa Social natural gas', amountEUR: 0, note: 'desconto separado ~31,2% para contratos domésticos elegíveis de baixa pressão' }
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
