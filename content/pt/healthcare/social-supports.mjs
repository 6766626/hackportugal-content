export default {
  editorialVoice: 'hackportugal',
  id: 'social-supports',
  categoryId: 'healthcare',
  title: 'Apoios sociais em Portugal — RSI, subsídios, prestações',
  tldr: 'Portugal oferece um conjunto amplo de prestações sociais aos residentes: **RSI** (rendimento social de inserção) — complemento até ao valor de referência do agregado familiar (100% da base para o requerente, 70% por cada adulto seguinte, 50% por criança); **Subsídio de desemprego** — cerca de 65% da remuneração de referência, máximo 2,5×IAS (1 342,83 € em 2026), duração segundo a tabela da Segurança Social por idade e carreira contributiva; **Porta 65 Jovem** — apoio à renda (valor segundo as tabelas do IHRU, sem cap fixo); **Tarifa Social Energia Elétrica** — cerca de 33,8% de desconto nas componentes tarifárias elegíveis (para gás — tarifa separada ~31,2%); **habitação social** — renda segundo a fórmula de renda apoiada. Requisitos: residência legal em PT, verificação de rendimentos/património e, por vezes, carreira contributiva mínima.',
  tags: ['rsi', 'subsídio', 'apoio social', 'prestação'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'rsi',
      title: '💰 RSI — Rendimento Social de Inserção',
      content: [
        { kind: 'paragraph', text: 'O RSI é um complemento até ao valor de referência do agregado familiar para famílias com rendimentos muito baixos. Composição do cálculo: 100% do valor base para o requerente, 70% para cada adulto seguinte, 50% para cada menor; a prestação = esse valor de referência menos os rendimentos considerados do agregado.' },
        { kind: 'checklist', items: [
          '📊 **Valor base**: cerca de 242,8 €/mês para o requerente em 2026 (≈ 45,208% do IAS 537,13 €); +70% desse valor por cada adulto adicional; +50% por cada menor',
          '🧾 **Condições**: rendimento total do agregado < valor-limite; limite de património mobiliário (normalmente ≤ 60× IAS); disponibilidade para trabalhar (existe obrigação de procurar emprego através do IEFP)',
          '📅 **Duração**: 12 meses, renovação anual se as condições se mantiverem',
          '👨‍👩‍👧 **Para estrangeiros**: residência legal em Portugal; para cidadãos de países terceiros, a Segurança Social normalmente exige autorização de residência/residência legal há pelo menos 1 ano. Para refugiados e alguns estatutos protegidos — regras especiais (confirmar o Guia Prático RSI actualizado)',
          '📍 **Pedido**: SS Direta → «Prestações» → «Rendimento Social de Inserção», ou num balcão do ISS',
          '⏱️ **Processamento**: 30-60 dias',
          '📋 **Obrigações**: inscrição no IEFP como candidato a emprego, frequência de cursos / entrevistas obrigatórias, não recusar trabalho «adequado»'
        ]},
        { kind: 'warning', text: 'O subsídio de desemprego, o salário e outros rendimentos são considerados no cálculo do RSI e podem reduzir ou excluir a prestação. O património mobiliário do agregado não deve exceder o limite estabelecido (normalmente 60× IAS). Incumprimento das regras/ocultação de rendimentos = perda do direito e sanções.' }
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
              'Para recibos verdes, o subsídio de desemprego normal não se aplica. Podem existir prestações separadas por cessação de atividade para trabalhadores independentes economicamente dependentes ou empresários/gerentes, sob condições especiais de contribuições e cessação da atividade',
              'É necessário estar disponível para trabalhar e inscrito no IEFP'
            ]}
          ]},
          { id: 'u2', title: 'Valor e duração', content: [
            { kind: 'checklist', items: [
              'Normalmente **65% da remuneração de referência**: soma das remunerações registadas nos primeiros 12 meses dos 14 meses anteriores ao desemprego, dividida por 360',
              'Máximo: **2,5× IAS = 1 342,83 € em 2026** (sem exceder os limites definidos pela remuneração líquida de referência)',
              'Mínimo: normalmente **1× IAS = 537,13 € em 2026**, mas sem exceder a remuneração líquida de referência; em salários muito baixos, a prestação pode ser inferior ao IAS',
              'A duração é determinada pela tabela da Segurança Social por idade e carreira contributiva: desde 150 dias para trabalhadores jovens com carreira mínima até 540 dias ou mais com dias adicionais por carreira longa. Consulte a tabela detalhada no Guia Prático Subsídio de Desemprego',
              '**Subsídio social de desemprego** disponível em caso de baixo rendimento do agregado; o valor é normalmente 80% do IAS para pessoa isolada ou 100% do IAS para pessoa com agregado; a duração depende da idade/carreira contributiva e de ser atribuído como initial ou subsequent após o subsídio de desemprego'
            ]}
          ]},
          { id: 'u3', title: 'Pedido', content: [
            { kind: 'checklist', items: [
              '**Passo 1**: inscrição no Centro de Emprego (IEFP) como desempregado',
              '**Passo 2**: na SS Direta — «Prestações» → «Subsídio de desemprego» → preencher',
              'Ou: através de um balcão do ISS com documentos (contrato de trabalho, carta de despedimento)',
              '📅 Prazo: no prazo de 90 dias após o despedimento',
              '⏱️ Pagamento: 30-45 dias de processamento, o dinheiro é pago com efeitos retroativos à data do desemprego'
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
              '**Porta 65 Jovem**: para 18–35 anos (num casal, um dos requerentes pode ter até 37). O valor é uma percentagem da renda elegível segundo as tabelas do IHRU/Portal da Habitação, e não um cap fixo de 200 €. O valor é calculado pelo simulador do Portal da Habitação',
              '**Apoio extraordinário à renda** — apoio financeiro a arrendatários com elevado esforço com renda, normalmente até 200 €/mês, nos termos da lei e através da AT/Segurança Social',
              '**Programa de Arrendamento Acessível** — contratos de arrendamento com renda below reference values e benefícios fiscais para landlords. Não é uma subvenção universal de 50%',
              'Os critérios dependem do programa: Porta 65 — idade, contrato de arrendamento, residência fiscal, rendimento/taxa de esforço com renda e tabelas de renda máxima; apoio extraordinário à renda — taxa de esforço e critérios de rendimento do agregado',
              'Pedido: portaldahabitacao.pt → Candidaturas',
              'Processamento: 2-6 meses'
            ]}
          ]},
          { id: 'h2', title: 'Habitação Social (habitação municipal)', content: [
            { kind: 'checklist', items: [
              'Arrendamento de casa ao município em regime de renda apoiada (Lei 81/2014), com base no rendimento e na composição do agregado; pode ser muito baixa, sem intervalo universal',
              'Lista de espera: 3-10 anos em Lisboa / Porto, mais rápido nas regiões',
              'Pedido: na Câmara Municipal da área de residência',
              'As prioridades dependem do município: homelessness, unsafe housing, disability, elderly, minors/dependants, domestic violence victims, low income, overcrowding, entre outras'
            ]}
          ]},
          { id: 'h3', title: 'Renda Acessível', content: [
            { kind: 'paragraph', text: 'Programa para pessoas trabalhadoras com rendimento médio e baixo: o Programa de Arrendamento Acessível nacional funciona através de renda below reference values e benefícios fiscais para landlords. Os programas municipais de renda acessível são apresentados através dos sites da Câmara/plataformas municipais e podem usar sorteios; as regras variam por cidade.' }
          ]}
        ]}
      ]
    },
    {
      id: 'energy',
      title: '⚡ Tarifa Social de Energia',
      content: [
        { kind: 'checklist', items: [
          '**Tarifa social de eletricidade**: desconto de cerca de **33,8%** nas componentes tarifárias reguladas elegíveis (a redução final da fatura é menor, porque impostos e contribuição audiovisual não são descontados da mesma forma). Exige contrato doméstico em baixa tensão com potência contratada ≤ 6,9 kVA',
          '**Tarifa social de gás natural**: desconto separado de cerca de **31,2%** para contratos domésticos elegíveis em baixa pressão, com limite de consumo anual',
          'Aplica-se automaticamente se estiver numa das categorias:',
          '  - beneficiário de RSI / Subsídio de desemprego',
          '  - Abono de Família 1-2 escalão',
          '  - Complemento Solidário para Idosos',
          '  - agregados com rendimento anual abaixo do limiar legal da Tarifa Social (o limiar aumenta por cada membro adicional do agregado; limiar DGEG actualizado)',
          'EDP / Galp / Endesa e outros — aplicação automática com base nos dados da Segurança Social / AT / NIF',
          'Se o cruzamento automático não funcionar — o fornecedor pode pedir comprovativo; pedido através do fornecedor + verificação via dgeg.gov.pt',
          'Vigora continuamente enquanto o estatuto se mantiver'
        ]}
      ]
    },
    {
      id: 'other-benefits',
      title: '🎁 Outras prestações',
      content: [
        { kind: 'checklist', items: [
          '🧒 **Abono de Família**: para crianças < 18 / 24 estudante / 27 deficiência. 40-190 €/mês, consoante o escalão (ver guia separado)',
          '👶 **Subsídio parental inicial**: as percentagens dependem da duração escolhida e da partilha entre progenitores: 120 dias — 100%, 150 dias — 80% (ou 100% em caso de partilha segundo as regras da SS), 180 dias — 90% segundo as shared-leave rules. Confirmar a tabela da Segurança Social',
          '🎒 **Apoio às despesas escolares**: desconto em manuais, materiais — ISS.gov.pt',
          '🧑‍🎓 **Bolsa de estudo**: para universidade — DGES, 500-5 000 €/ano',
          '♿ **Complemento por Dependência**: para pessoas com deficiência e pessoas que necessitam de cuidados — até 100-200 €/mês',
          '👵 **Complemento Solidário para Idosos (CSI)**: complemento para idosos com recursos anuais abaixo do limiar de referência do CSI; são considerados os rendimentos do requerente, do cônjuge/parceiro e, em alguns casos, dos filhos. Usar o limiar do Guia Prático CSI actualizado',
          '🧑‍⚕️ **Taxas moderadoras no SNS** foram em grande parte eliminadas (Lei n.º 22/2022), mas podem aplicar-se em urgência sem referenciação do SNS24/INEM/centro de saúde e sem internamento subsequente. Existem isenções para menores, grávidas, pessoas com insuficiência económica, certas doenças crónicas/deficiências e outras categorias legais'
        ]}
      ]
    },
    {
      id: 'how-to-apply',
      title: '📋 Processo geral de pedido',
      content: [
        { kind: 'checklist', items: [
          '1. Entrar na **SS Direta** (seg-social.pt) ou dirigir-se a um balcão do ISS',
          '2. Reunir o conjunto básico: CC/autorização de residência, NIF, NISS, IBAN, comprovativos de rendimento (3-12 meses), composição do agregado, documentos dos dependentes. A lista depende da prestação: para desemprego é necessária declaração da entidade empregadora/modelo RP5044 ou equivalente e inscrição no IEFP; para habitação — contrato de arrendamento registado e dados fiscais; para RSI — comprovativo de rendimentos/património do agregado e estatuto de residência',
          '3. Submeter online ou presencialmente',
          '4. Aguardar a decisão (30-90 dias)',
          '5. Em caso de aprovação — pagamentos automáticos mensais para o IBAN',
          '6. Revisão anual — confirmar rendimentos e situação familiar',
          '⚠️ Não oculte rendimentos: a Segurança Social cruza dados com a Autoridade Tributária; terá de devolver prestações + coima até 3 vezes o valor'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Valor base do RSI para o requerente', amountEUR: 242.80, note: '€/mês 2026 (≈ 45,208% × IAS 537,13 €)' },
    { label: 'Mínimo do Subsídio de desemprego', amountEUR: 537.13, note: '€/mês (1× IAS), mas sem exceder a remuneração líquida de referência' },
    { label: 'Máximo do Subsídio de desemprego', amountEUR: 1342.83, note: '€/mês (2,5× IAS 2026)' },
    { label: 'Porta 65 Jovem (renda)', amountEUR: 0, note: 'o valor varia — é calculado pelo simulador do Portal da Habitação segundo a renda elegível e o município' },
    { label: 'Habitação social (renda)', amountEUR: 0, note: 'calculada pelo município segundo a fórmula de renda apoiada (Lei 81/2014)' },
    { label: 'Tarifa Social de eletricidade', amountEUR: 0, note: 'desconto ~33,8% nas componentes tarifárias elegíveis (redução final da fatura menor após impostos)' },
    { label: 'Tarifa Social de gás natural', amountEUR: 0, note: 'desconto separado ~31,2% para contratos domésticos elegíveis em baixa pressão' }
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
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
