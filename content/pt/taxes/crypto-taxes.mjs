export default {
  "editorialVoice": "hackportugal",
  "id": "crypto-taxes",
  "categoryId": "taxes",
  "title": "Criptomoeda em Portugal — impostos 2026",
  "tldr": "Até 2022, a criptomoeda não era tributada para particulares — um “paraíso fiscal”. A partir de 2023 (OE 2023), foram introduzidos: **28% de imposto sobre ganhos na venda em <1 ano**; **0% se detida por ≥365 dias** (mais-valias de longo prazo); **staking, mineração, negociação profissional** — tributados como rendimento operacional. IVA 0% na troca. Declaração no IRS através do Anexo G e categoria E para staking. O IFICI não cobre criptomoeda. Corretoras e P2P estão disponíveis; os grandes bancos aceitam transferências da Bitstamp, Kraken, Bitfinex com verificação AML.",
  "tags": [
    "criptomoeda",
    "cripto",
    "impostos",
    "bitcoin"
  ],
  "estimatedReadMinutes": 6,
  "steps": [
    {
      "id": "regime",
      "title": "Regime fiscal atual (OE 2023+)",
      "content": [
        {
          "kind": "substeps",
          "items": [
            {
              "id": "r1",
              "title": "📅 Venda de curto prazo (<1 ano)",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "**28% de imposto** sobre o ganho (mais-valias)",
                    "Declarado no IRS **Anexo G** (Mais-Valias)",
                    "Ganho = preço de venda − preço de compra − comissões",
                    "As perdas podem ser compensadas com ganhos do mesmo ano; reporte por 5 anos",
                    "Abrange: BTC, ETH, todas as altcoins, NFT, derivados"
                  ]
                }
              ]
            },
            {
              "id": "r2",
              "title": "📅 Venda de longo prazo (≥365 dias)",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "**0% de imposto** na venda após ≥365 dias de detenção (mais-valias de longo prazo isentas)",
                    "Condição: o token foi detido durante ≥ 365 dias consecutivos pelo mesmo contribuinte",
                    "⚠️ **Troca de criptomoeda por criptomoeda**: formalmente é considerada alienação onerosa, MAS o regime português geralmente difere a tributação até à posterior troca de criptomoeda por moeda fiduciária / bens / serviços (ou seja, até à “saída” dos criptoativos). O custo de aquisição e as datas são mantidos para cada posição; o mecanismo exato é discutível, recomenda-se consulta com um contabilista",
                    "Transferência entre as suas próprias carteiras — NÃO é alienação, a contagem não é interrompida",
                    "FIFO: vende primeiro o que foi comprado primeiro (para efeitos fiscais)"
                  ]
                }
              ]
            },
            {
              "id": "r3",
              "title": "💼 Negociação profissional",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "Se a AT considerar a sua atividade profissional (regularidade, volume significativo) — é tributada como **Categoria B** (rendimentos empresariais)",
                    "Escalões progressivos 11,97-48% + contribuições sociais 21,4%",
                    "Critérios profissionais: regularidade, volume, infraestrutura (API, automatização), atividade principal",
                    "Registo de atividade nas Finanças com CAE para serviços financeiros"
                  ]
                }
              ]
            },
            {
              "id": "r4",
              "title": "💰 Staking / crédito / mineração",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "Tributado como **Categoria E** (rendimentos de capitais) — taxa fixa de 28%",
                    "Mineração: se significativa — como Categoria B (rendimentos empresariais)",
                    "Airdrops: não são tributados no recebimento; imposto na venda",
                    "DeFi yield farming: 28% no momento do recebimento"
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "declaration",
      "title": "Como declarar no IRS",
      "content": [
        {
          "kind": "paragraph",
          "text": "A criptomoeda é declarada anualmente (abril-junho relativamente ao ano fiscal anterior). Isto é feito na declaração normal de IRS através do Portal das Finanças."
        },
        {
          "kind": "substeps",
          "items": [
            {
              "id": "d1",
              "title": "Cálculo de ganhos e perdas",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "Exportar o histórico de transações de cada corretora do ano (CSV / Excel)",
                    "Ganhos e perdas por cada posição fechada: venda − compra − comissões",
                    "Detenção ≥ 365 dias — separadamente, tributada a 0%",
                    "Conversão de USDT/USDC para € à taxa do dia da transação",
                    "Ferramentas: **Koinly**, **CoinTracking**, **Accointing** — 50-200 €/ano, importação automática de todas as corretoras, geram relatório para o IRS em PT"
                  ]
                }
              ]
            },
            {
              "id": "d2",
              "title": "Preenchimento do Anexo G",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "Quadro 18: Mais-valias com criptoativos",
                    "Código “R01” — venda de curto prazo",
                    "Código “R02” — venda de longo prazo (0%, mas declarar para efeitos de registo)",
                    "Indicar: montante do valor de realização, valor de aquisição, datas",
                    "Perdas: separadamente no Quadro 20 para reporte"
                  ]
                }
              ]
            },
            {
              "id": "d3",
              "title": "Staking no Anexo E",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Separadamente do Anexo G. Código “E21” — rendimentos de criptoativos. O montante recebido em € é indicado à data do recebimento."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "bank",
      "title": "Bancos e entrada/saída de moeda fiduciária",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "✅ **ActivoBank, Millennium BCP, Novobanco** — aceitam transferências da Bitstamp, Kraken, Bitfinex, Coinbase com a descrição correta “venda de criptomoeda” + documentos AML",
            "⚠️ **Caixa Geral, Santander, BPI** — bloqueiam frequentemente / exigem explicação da origem dos fundos",
            "❌ **Revolut**, **Wise** — restrições a transferências elevadas relacionadas com criptomoeda",
            "📋 Ao transferir 5 000+ €: o banco pedirá **Declaração de Origem dos Fundos**, capturas de ecrã da carteira, hash da transação, extratos da corretora",
            "💳 Cartões pré-pagos de corretoras (Wirex, Crypto.com): funcionam com Apple Pay em PT",
            "🏦 **Banco Invest** e bancos digitais — mais abertos a clientes de criptomoeda",
            "⚖️ Padrões suspeitos (P2P sem documentos, serviços de mistura) → o banco encerrará a conta por AML"
          ]
        }
      ]
    },
    {
      "id": "exchanges",
      "title": "Trabalhar com corretoras a partir de PT",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "**Binance**: registada na BaFin (Alemanha) — disponível em PT. Faça KYC com autorização de residência de PT",
            "**Kraken**: licenciada na UE, conveniente para PT, levantamentos SEPA rápidos",
            "**Bitstamp**: registada no Luxemburgo, SEPA rápidos",
            "**Coinbase**: funciona, mas as comissões são mais altas",
            "**Bitpanda**: austríaca, adequada para utilizadores de PT",
            "**Mercado Bitcoin**: corretora brasileira, nem sempre conveniente para residentes em PT",
            "🛑 **Para cidadãos da Federação Russa**: sanções — a Binance encerrou contas com KYC russo em 2024. Utilize com autorização de residência de PT / passaporte que não seja da Federação Russa, verifique o estatuto regulatório"
          ]
        }
      ]
    },
    {
      "id": "ifici",
      "title": "IFICI e criptomoeda",
      "content": [
        {
          "kind": "warning",
          "text": "O IFICI (antigo NHR) **NÃO cobre** rendimentos de criptomoeda. Se estiver ao abrigo do IFICI — a criptomoeda é tributada pelas regras gerais (28% para venda de curto prazo). Isto distingue PT de outras jurisdições (por exemplo, a Suíça é totalmente favorável às criptomoedas), mas o regime com detenção de 365+ dias = 0% continua a ser um dos melhores da UE."
        }
      ]
    },
    {
      "id": "tips",
      "title": "Conselhos",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "📅 Para o regime de longo prazo a 0%: utilize **realização de perdas para otimização fiscal** apenas tendo em conta a regra dos 365 dias. Não faça trocas sem necessidade",
            "📊 Mantenha um **registo cronológico** de compras/vendas — o IRS pode pedir comprovativos em caso de inspeção",
            "🧾 Guarde: CSV das corretoras, capturas de ecrã de endereços de carteiras, hashes de transações — no mínimo 4 anos (prazo de inspeção da AT)",
            "💼 **Recomenda-se um contabilista** se a carteira for >50 000 € ou houver muitas operações ativas — 300-800 €/ano",
            "📱 Programa fiscal **Koinly** — 49 €/ano para <100 transações",
            "🚫 **Não levante** montantes elevados sem documentos — risco de bloqueio permanente da conta bancária",
            "🌍 **Dupla tributação**: se for residente em PT, mas mantiver criptomoeda numa corretora dos EUA — declaração em PT (país de residência). Preencher o US W-8BEN para estatuto de não residente nos EUA"
          ]
        }
      ]
    }
  ],
  "costs": [
    {
      "label": "Imposto de curto prazo (<1 ano)",
      "amountEUR": 0,
      "note": "28% do ganho"
    },
    {
      "label": "Longo prazo (≥1 ano)",
      "amountEUR": 0,
      "note": "0%"
    },
    {
      "label": "Staking / crédito",
      "amountEUR": 0,
      "note": "28% do rendimento"
    },
    {
      "label": "Subscrição Koinly",
      "amountEURMin": 49,
      "amountEURMax": 199,
      "note": "€/ano"
    },
    {
      "label": "Contabilista especializado em criptomoeda",
      "amountEURMin": 300,
      "amountEURMax": 800,
      "note": "€/ano"
    }
  ],
  "sources": [
    {
      "title": "Portal das Finanças — Criptoativos",
      "url": "https://info.portaldasfinancas.gov.pt/",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "Código do IRS — Mais-valias (art. 10)",
      "url": "https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1988-34544875",
      "kind": "law",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "OE 2023 — introdução do regime",
      "url": "https://diariodarepublica.pt/dr/detalhe/lei/24-d-2022-203934281",
      "kind": "law",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "Koinly — relatórios fiscais para PT",
      "url": "https://koinly.io/",
      "kind": "company",
      "language": "en",
      "lastRetrieved": "2026-04-22"
    }
  ],
  "lastVerified": "2026-04-22",
  "verifyIntervalDays": 180
}
