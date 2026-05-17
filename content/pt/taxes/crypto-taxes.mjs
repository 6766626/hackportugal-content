export default {
  editorialVoice: 'hackportugal',
  id: 'crypto-taxes',
  categoryId: 'taxes',
  title: 'Criptomoeda em Portugal — impostos 2026',
  tldr: 'Até 2022, a criptomoeda não era tributada para pessoas singulares — um “paraíso fiscal”. Desde 2023 (OE 2023): **28% na venda por moeda fiduciária/bens/serviços quando detida <365 dias**; **0% quando detida ≥365 dias** (ressalva: operações com contrapartes/bolsas de jurisdições blacklisted/non-cooperative podem não beneficiar da isenção); **staking/lending — normalmente Categoria E**, mining/negociação profissional — Categoria B. A conversão fiat↔crypto está normalmente isenta de IVA (não é “taxa 0%”). NFT, security tokens, derivados — classificação separada, podem não estar abrangidos pela 365-day exemption. O IFICI não cobre criptomoeda.',
  tags: ['criptomoeda', 'cripto', 'impostos', 'bitcoin'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'regime',
      title: 'Regime fiscal atual (OE 2023+)',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: '📅 Venda de curto prazo (<1 ano)', content: [
            { kind: 'checklist', items: [
              '**28% de imposto** sobre taxable disposals: venda por moeda fiduciária, pagamento de bens/serviços, troca por ativos não-crypto',
              'Declara-se no IRS **Anexo G** (Mais-Valias) usando os códigos/instruções atuais do ano correspondente',
              'Mais-valia = valor de realização − valor de aquisição − comissões',
              'As menos-valias só são consideradas segundo as regras da Categoria G; o reporte exige normalmente a opção pelo englobamento e o cumprimento das condições do CIRS — verificar ao preencher a Modelo 3',
              'Aplica-se a cryptoassets fungíveis comuns. NFT, security tokens, derivados, CFD, futures/options — classificação separada, podem não estar abrangidos pela 365-day exemption'
            ]}
          ]},
          { id: 'r2', title: '📅 Venda de longo prazo (≥365 dias)', content: [
            { kind: 'checklist', items: [
              '**0% de imposto** na venda após ≥365 dias de detenção (mais-valia de longo prazo isenta)',
              '⚠️ Ressalva: não aplicar a isenção de forma mecânica — operações com contraparte/bolsa em jurisdição blacklisted/non-cooperative (Portaria 150/2004) podem não beneficiar da exemption',
              'Condição: o token foi detido durante ≥ 365 dias consecutivos pelo mesmo contribuinte',
              '⚠️ **Troca de criptomoeda por criptomoeda**: formalmente é considerada alienação onerosa, MAS o regime português normalmente difere a tributação até à posterior troca de criptomoeda por moeda fiduciária / bens / serviços (ou seja, até à “saída” dos criptoativos). O valor de aquisição e as datas são mantidos para cada posição; o mecanismo exato é controverso, recomenda-se consulta com um contabilista',
              'Transferência entre carteiras próprias — NÃO é alienação, a contagem não é interrompida',
              'FIFO: vende primeiro o que comprou primeiro (para efeitos de contabilidade fiscal)'
            ]}
          ]},
          { id: 'r3', title: '💼 Negociação profissional', content: [
            { kind: 'checklist', items: [
              'Se a AT considerar a sua atividade profissional (regularidade, volume relevante) — é tributada como **Categoria B** (rendimento empresarial)',
              'Escalões progressivos 11,97–48% + contribuições para a Segurança Social 21,4%',
              'Critérios profissionais: regularidade, volume, infraestrutura (API, automatização), atividade principal',
              'Se for negociação por conta própria — discutir com um contabilista o enquadramento correto Categoria B/CAE. Se presta serviços a terceiros (custody, exchange, brokerage, gestão de ativos) — verificar requisitos do Banco de Portugal/CMVM/MiCA/CASP e AML; uma simples abertura de atividade não é suficiente'
            ]}
          ]},
          { id: 'r4', title: '💰 Staking / crédito / mining', content: [
            { kind: 'checklist', items: [
              'Recompensas de staking/lending: normalmente **Categoria E**, taxa de 28% como tributação autónoma, com opção de englobamento. Se a reward for paga em crypto — o momento fiscal pode ser diferido até ao disposal (verificar regras especiais)',
              'Mining/validation: quando há organized/professional activity — normalmente Categoria B, não Categoria E',
              'Airdrops: não são tributados no recebimento; imposto na venda',
              'DeFi yield farming: classificar segundo a mecânica (lending interest / liquidity mining / governance rewards). Para passive — pode ser Categoria E; para pagamentos em crypto, verificar o momento de taxation e valuation. Para protocolos DeFi complexos — obter parecer de contabilista/AT'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'declaration',
      title: 'Como declarar no IRS',
      content: [
        { kind: 'paragraph', text: 'A criptomoeda é declarada anualmente (abril-junho relativamente ao ano fiscal anterior). Isto é feito na declaração normal de IRS através do Portal das Finanças.' },
        { kind: 'substeps', items: [
          { id: 'd1', title: 'Cálculo de mais-valias e menos-valias', content: [
            { kind: 'checklist', items: [
              'Exportar o histórico de transações de cada bolsa referente ao ano (CSV / Excel)',
              'Mais-valias e menos-valias por cada posição fechada: venda − compra − comissões',
              'Detenção ≥ 365 dias — em separado, tributada a 0%',
              'Conversão de USDT/USDC para € à taxa de câmbio do dia da transação',
              'Ferramentas: **Koinly**, **CoinTracking**, **Accointing** — 50-200 €/ano, importação automática de todas as bolsas, geram relatório para IRS em PT'
            ]}
          ]},
          { id: 'd2', title: 'Preenchimento do Anexo G', content: [
            { kind: 'checklist', items: [
              'Quadro 18: Mais-valias com criptoativos — use os códigos atuais da tabela oficial no Portal das Finanças para o respetivo ano da declaração',
              'Long-term ≥365 disposals também podem exigir reporting; o local/quadro/código dependem da Modelo 3 em vigor',
              'Indicar: soma do valor de realização, valor de aquisição, datas',
              'Menos-valias: verificar a instrução atual para a categoria G e as condições de carry-forward'
            ]}
          ]},
          { id: 'd3', title: 'Staking no Anexo E', content: [
            { kind: 'paragraph', text: 'Separado do Anexo G. Use o Anexo E/instruções da Modelo 3 em vigor. Se a reward for recebida em fiat — declara-se o montante em EUR na data de recebimento; se a reward for recebida em crypto — aplicam-se regras especiais de valuation/taxation, podendo haver diferimento até ao disposal.' }
          ]}
        ]}
      ]
    },
    {
      id: 'bank',
      title: 'Bancos e entradas/saídas de moeda fiduciária',
      content: [
        { kind: 'checklist', items: [
          '✅ **ActivoBank, Millennium BCP, Novobanco** — aceitam transferências da Bitstamp, Kraken, Bitfinex, Coinbase com a descrição correta “venda de criptomoeda” + documentos AML',
          '⚠️ **Caixa Geral, Santander, BPI** — bloqueiam frequentemente / exigem explicação da origem dos fundos',
          '❌ **Revolut**, **Wise** — restrições a transferências de grande valor relacionadas com criptomoeda',
          '📋 Em transferências de 5000+ €: o banco pedirá **Declaração de Origem dos Fundos**, capturas de ecrã da carteira, hash da transação, extratos da bolsa',
          '💳 Cartões pré-pagos de bolsas (Wirex, Crypto.com): funcionam com Apple Pay em PT',
          '🏦 **Banco Invest** e bancos digitais — mais abertos a clientes de criptomoeda',
          '⚖️ Padrões suspeitos (P2P sem documentos, serviços de mistura) → o banco encerrará a conta por AML'
        ]}
      ]
    },
    {
      id: 'exchanges',
      title: 'Utilização de bolsas a partir de PT',
      content: [
        { kind: 'checklist', items: [
          '**Binance**: a disponibilidade e o onboarding para residentes em PT dependem do setup EU/MiCA atual e das sanctions/KYC policy da legal entity específica (a Binance retirou o pedido de licença BaFin na Alemanha em 2023). Antes de utilizar, verificar os terms atuais para Portugal',
          '**Kraken**: licenciada na UE, conveniente para PT, levantamentos SEPA rápidos',
          '**Bitstamp**: registada no Luxemburgo, SEPA rápidos',
          '**Coinbase**: funciona, mas as comissões são mais altas',
          '**Bitpanda**: austríaca, adequada para utilizadores de PT',
          '**Mercado Bitcoin**: bolsa brasileira, nem sempre conveniente para residentes em PT',
          '🛑 **Para cidadãos da Federação Russa**: sanções — a Binance encerrou contas com KYC russo em 2024. Use com autorização de residência PT / passaporte que não seja da Federação Russa, verifique o estatuto regulatório'
        ]}
      ]
    },
    {
      id: 'ifici',
      title: 'IFICI e criptomoeda',
      content: [
        { kind: 'warning', text: 'O IFICI (antigo NHR) **NÃO cobre** rendimentos de criptomoeda. Se estiver abrangido pelo IFICI — a criptomoeda é tributada segundo as regras gerais (28% para venda de curto prazo). Isto distingue PT de outras jurisdições (por exemplo, a Suíça é totalmente favorável às criptomoedas), mas o regime de 365+ dias de detenção = 0% continua a ser um dos melhores da UE.' }
      ]
    },
    {
      id: 'tips',
      title: 'Dicas',
      content: [
        { kind: 'checklist', items: [
          '📅 Para o regime de longo prazo a 0%: use **cristalização de perdas para otimização fiscal** apenas tendo em conta a regra dos 365 dias. Não faça trocas sem necessidade',
          '📊 Mantenha um **registo cronológico** de compras/vendas — o IRS pode pedir provas em caso de inspeção',
          '🧾 Guarde: CSV das bolsas, capturas de ecrã dos endereços das carteiras, hashes das transações — pelo menos 4 anos (prazo de inspeção da AT)',
          '💼 **Recomenda-se contabilista**, se a carteira >50 000 € ou houver muitas transações ativas — 300-800 €/ano',
          '📱 Programa fiscal **Koinly** — 49 €/ano para <100 transações',
          '🚫 **Não levante** grandes montantes sem documentos — risco de bloqueio definitivo da conta bancária',
          '🌍 **Dupla tributação**: se for residente em PT, mas mantiver criptomoeda numa bolsa dos EUA — declaração em PT (país de residência). O W-8BEN pode ser necessário para a plataforma dos EUA confirmar non-US tax status em US-source income/withholding, mas crypto gains enquanto PT tax resident continuam a ser declarados em Portugal; US tax exposure depende de citizenship/green card/substantial presence e do tipo de rendimento'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Imposto de curto prazo (<1 ano)', amountEUR: 0, note: '28% da mais-valia' },
    { label: 'Longo prazo (≥1 ano)', amountEUR: 0, note: '0%' },
    { label: 'Staking / crédito', amountEUR: 0, note: '28% do rendimento' },
    { label: 'Subscrição Koinly', amountEURMin: 49, amountEURMax: 199, note: '€/ano' },
    { label: 'Contabilista especializado em criptomoeda', amountEURMin: 300, amountEURMax: 800, note: '€/ano' }
  ],
  sources: [
    { title: 'Portal das Finanças — Criptoativos', url: 'https://info.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Código do IRS — Mais-valias (art. 10)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1988-34544875', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'OE 2023 — introdução do regime', url: 'https://diariodarepublica.pt/dr/detalhe/lei/24-d-2022-203934281', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Koinly — relatórios fiscais para PT', url: 'https://koinly.io/', kind: 'company', language: 'en', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
