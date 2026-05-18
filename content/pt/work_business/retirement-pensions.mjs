export default {
  editorialVoice: 'hackportugal',
  id: 'retirement-pensions',
  categoryId: 'work_business',
  title: 'Sistema de pensões — Segurança Social, PPR, para reformados',
  tldr: 'Pensão pública: a idade normal em 2026 é 66 anos e 9 meses (aumenta segundo a fórmula da esperança média de vida). O mínimo para ter direito é geralmente 15 anos de carreira contributiva; o valor é calculado pela Segurança Social.\n\n**PPR** (Plano Poupança-Reforma) — pensão privada com benefícios fiscais (dedução até 20% das contribuições no IRS). Pensões estrangeiras (Federação Russa, EUA, Reino Unido) no âmbito do IRS — tributadas segundo as taxas progressivas (limite de 10% do NHR para quem tinha o antigo NHR; o NHR foi encerrado em 2024, substituído pelo IFICI, que não cobre pensões). Para estrangeiros: acordos internacionais de segurança social permitem contabilizar períodos contributivos.',
  tags: ['pensão', 'idade da reforma', 'ppr', 'velhice'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'state-pension',
      title: '🏛️ Pensão pública (Pensão por Velhice)',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: 'Condições 2026', content: [
            { kind: 'checklist', items: [
              '🎂 **Idade**: 66 anos e 9 meses em 2026; é revista anualmente segundo a fórmula da esperança média de vida (em 2025 era 66 anos e 7 meses)',
              '📅 **Carreira contributiva mínima**: 15 anos para ter direito à pensão',
              '🏆 **Valor**: calculado pela fórmula da Segurança Social (remuneração de referência × taxa global de formação). 40+ anos são importantes para regimes especiais, mas não significam automaticamente uma pensão «completa»',
              '💼 **Pedido antecipado**: em regra, a partir dos 60 anos com 40 anos de contribuições, com redução permanente de 0,5% por mês de antecipação e possível fator de sustentabilidade. Sem penalizações — apenas para regimes especiais de carreiras longas',
              '🐌 **Carreiras muito longas**: por exemplo, 60+ anos e 48 anos de carreira contributiva ou 60+ e 46 anos de carreira quando as contribuições começaram antes da idade precoce definida. Verifique a simulação na Segurança Social Direta',
              '⏳ **Reforma tardia** (após a idade normal da reforma): bonificação por cada ano adicional'
            ]}
          ]},
          { id: 's2', title: 'Valor', content: [
            { kind: 'checklist', items: [
              'A fórmula é complexa: a Segurança Social calcula a remuneração de referência e a taxa global de formação da pensão. É melhor usar a simulação na Segurança Social Direta. A simplificação 2,5% × 40 anos não é a fórmula oficial',
              '**Mínimo** depende da carreira contributiva (intervalos <15 / 15-20 / 21-30 / 31+ anos). Com IAS 2026 de 537,13 €, consulte os valores exactos na portaria de atualização das pensões em vigor',
              '**Média**: ~530 €/mês',
              '**Máximo**: 12× IAS = 6 445,56 €/mês (mas exige contribuições máximas durante toda a vida)',
              'A pensão é paga 14 vezes por ano (12 + subsídios de férias e de Natal)'
            ]}
          ]},
          { id: 's3', title: 'Pedido e início', content: [
            { kind: 'checklist', items: [
              '**3-6 meses antes da idade da reforma**: apresentar o pedido através da Segurança Social Direta',
              'Documentos: histórico do NISS, carreira profissional, documento de identificação',
              'Pedir o cálculo no portal — para saber o valor estimado',
              'Processo: 3-6 meses',
              'A pensão começa na data da reforma; o primeiro pagamento — no mês seguinte',
              'Não é necessário «sair do trabalho» — é possível trabalhar a tempo parcial + receber a pensão'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'ppr',
      title: '💼 PPR — pensão privada com benefícios fiscais',
      content: [
        { kind: 'paragraph', text: 'Plano Poupança-Reforma — o principal instrumento para poupança pessoal de reforma em Portugal.' },
        { kind: 'substeps', items: [
          { id: 'p1', title: 'Benefícios fiscais', content: [
            { kind: 'checklist', items: [
              '✅ **Dedução no IRS de 20% das contribuições**:',
              '  - <35 anos: até **400 €/ano** de dedução (por 2000 € de contribuições = 400 €)',
              '  - 35-50 anos: até **350 €/ano**',
              '  - >50 anos: até **300 €/ano**',
              '✅ **0% de imposto sobre mais-valias** no resgate na reforma (se cumprir o prazo)',
              '✅ **8% de imposto** no resgate antecipado (contra os 28% habituais)',
              '⚠️ Limite: detenção mínima de 5 anos até à idade de reforma de 60 anos, caso contrário há penalização',
              '💡 Para optimizar: contribuir todos os anos com o máximo do limite por idade — dos melhores benefícios fiscais em Portugal'
            ]}
          ]},
          { id: 'p2', title: 'Em que investir', content: [
            { kind: 'checklist', items: [
              '**PPR fundo (fundo de investimento)**: rentabilidade variável, comissão anual de 1-3%',
              '**PPR seguro (produto segurador)**: rentabilidade garantida ~2-4%, comissões mais baixas, mas menor potencial',
              '**PPR autogerido (raro em Portugal)**: ETF ou acções individuais — através de fornecedores especializados',
              '**Principais fornecedores**: Caixa, Millennium BCP, Santander, Patris, Optimize',
              '**Melhores em rentabilidade**: comparação em ASF.pt'
            ]}
          ]},
          { id: 'p3', title: 'Resgate de fundos', content: [
            { kind: 'checklist', items: [
              '**Normal**: ao atingir a idade da reforma, em pagamento único ou renda mensal',
              '**Antecipado com penalização fiscal**: antes dos 60 anos, se o investimento estiver activo — taxa de 28% sobre as mais-valias',
              '**Resgate especial em situações difíceis**: desemprego > 12 meses, doença grave, incapacidade — taxa de 8%',
              '**Herança**: o PPR passa para os herdeiros sem imposto sucessório (Imposto do Selo 0% para PPR)'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'foreign-pensions',
      title: '🌍 Pensões estrangeiras em Portugal',
      content: [
        { kind: 'substeps', items: [
          { id: 'f1', title: 'Tributação', content: [
            { kind: 'checklist', items: [
              'Os residentes fiscais em Portugal são tributados sobre o rendimento mundial',
              'As pensões estrangeiras são declaradas no Anexo H da declaração de IRS',
              '**Imposto padrão**: taxas progressivas 11,97-48%',
              '**Antigo NHR (até 2024)**: taxa fixa de 10% para pensões estrangeiras × 10 anos (para quem ainda conseguiu entrar)',
              '**IFICI (novo, 2024+)**: NÃO cobre pensões estrangeiras',
              '**Convenções para evitar a dupla tributação (DTT)**: Portugal tem com a Federação Russa, Brasil, EUA, Reino Unido, França, Alemanha, Espanha — normalmente a dupla tributação é evitada por crédito de imposto',
              'DTT com a Rússia (protocolo 1968) — pensões da Federação Russa são tributadas apenas no país de residência (ou seja, em Portugal) — situação simples',
              'EUA: as pensões são tributadas em ambos os países, mas FTC + artigo da convenção são coordenados — consulte um especialista'
            ]}
          ]},
          { id: 'f2', title: 'Receber uma pensão estrangeira em Portugal', content: [
            { kind: 'checklist', items: [
              'Abrir uma conta bancária em Portugal',
              'Fornecer IBAN + comprovativo de residência à entidade de pensões do seu país',
              'Algumas preferem SEPA, outras — SWIFT internacional',
              'Comissões de conversão cambial: 1-3%, se a moeda não for o euro',
              '**Wise / Revolut**: melhores taxas para transferências mensais',
              'Federação Russa: transferências por SWIFT após as sanções — limitadas; é necessário usar um banco não sancionado'
            ]}
          ]},
          { id: 'f3', title: 'Portabilidade da pensão na UE', content: [
            { kind: 'checklist', items: [
              'A carreira contributiva em qualquer país da UE é contabilizada no cálculo da pensão em Portugal',
              'Cidadãos da UE recebem a pensão segundo o país do último trabalho',
              '**Regulamento (EC) 883/2004**: coordenação dos sistemas de segurança social',
              'Se trabalhou em 3 países — cada um paga proporcionalmente a sua parte',
              'Apresentar o pedido através da Segurança Social em Portugal — eles contactam os outros países'
            ]}
          ]},
          { id: 'f4', title: 'Rússia / Brasil / Ucrânia: acordos bilaterais', content: [
            { kind: 'checklist', items: [
              '**Rússia-Portugal**: acordo bilateral de segurança social de 1995 — a carreira contributiva é contabilizada, mas há muita burocracia',
              '**Brasil-Portugal**: reconhecimento recíproco completo, trabalho ≥ 1 ano em qualquer um dos países é contabilizado',
              '**Ucrânia-Portugal**: acordo de 2017, funciona',
              '**Bielorrússia-Portugal**: não há acordo directo; a carreira contributiva não é contabilizada',
              'Processo: a Segurança Social solicita o histórico profissional à entidade estrangeira, pode demorar 6-18 meses'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'senior-benefits',
      title: '👵 Benefícios para reformados',
      content: [
        { kind: 'checklist', items: [
          '🚇 **Transportes**: 50% de desconto no metro/autocarros em Lisboa para 65+',
          '🎫 **CP (comboios)**: 50% de desconto na tarifa Sénior para 65+',
          '🎭 **Museus**: gratuito ou 50% quase em todo o lado',
          '🎬 **Cinema**: 4-5 € (em vez de 7-10 €)',
          '💊 **Medicamentos**: comparticipações SNS reforçadas (escalão A — 90% de comparticipação)',
          '🏊 **Piscinas municipais**: desconto de 50%',
          '⚡ **Tarifa Social Energia**: 33% de desconto na electricidade para rendimentos baixos',
          '🏠 **Isenção de IMI**: para habitação própria permanente, proprietário ≥ 65, rendimento baixo',
          '💰 **Complemento Solidário para Idosos (CSI)**: complemento até ao rendimento mínimo (565 €/mês 2026) para reformados com baixos rendimentos',
          '🍴 **Cantinas Sociais**: refeições 1,5-3 € para idosos carenciados',
          '📞 **Linha do Idoso (760 24 24 24)**: apoio e informação para idosos',
          '🏥 **Apoio Domiciliário**: serviços de cuidados ao domicílio através do município / Misericórdias'
        ]}
      ]
    },
    {
      id: 'planning',
      title: '📊 Planeamento da reforma ao mudar-se para Portugal',
      content: [
        { kind: 'checklist', items: [
          '📅 **5-10 anos antes da reforma**: abrir um PPR, contribuir com o máximo do limite',
          '📊 **Diversificar**: ~50% PPR, 25% ETF globais (através de corretora portuguesa), 25% imobiliário',
          '🇪🇺 **Se tiver pensão da UE**: confirmar a portabilidade para Portugal',
          '💰 **Rendimento mínimo para uma reforma confortável em Portugal**: 1 500-2 000 €/mês para a zona de Lisboa, 1 200-1 500 € para regiões',
          '🏥 **Saúde**: a cobertura SNS é suficiente; um complemento privado ~80-150 €/mês acrescenta conforto',
          '🏠 **Considerar comprar** no Algarve / regiões — mais barato e clima confortável',
          '👨‍👩‍👧 **Reagrupamento para progenitor idoso**: os filhos podem trazer os pais, se viverem em Portugal (ver o guia correspondente)',
          '⚠️ **Protecção contra a inflação**: as pensões públicas em Portugal são indexadas à inflação; PPR — depende do instrumento',
          '📞 **Consulta**: consultor financeiro + contabilista (especialmente para situações de pensão com vários países)'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Pensão pública mínima (depende da carreira contributiva)', amountEUR: 0, note: 'Ver a tabela oficial de mínimos 2026 por carreira contributiva (<15 / 15-20 / 21-30 / 31+ anos)' },
    { label: 'Pensão pública média', amountEUR: 530, note: '€/mês' },
    { label: 'Contribuição máxima PPR (para dedução de 20%)', amountEUR: 2000, note: '€/ano até 35' },
    { label: 'Dedução IRS em PPR <35', amountEUR: 400, note: '€/ano' },
    { label: 'Complemento Solidário para Idosos', amountEUR: 565, note: '€/mês de complemento' }
  ],
  sources: [
    { title: 'Segurança Social — Pensões', url: 'https://www.seg-social.pt/pensoes', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ASF — comparação de PPR', url: 'https://www.asf.com.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Regulamento (EC) 883/2004 — coordenação da segurança social da UE', url: 'https://eur-lex.europa.eu/legal-content/PT/TXT/?uri=CELEX:32004R0883', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 365
}
