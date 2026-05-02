export default {
  "editorialVoice": "hackportugal",
  "id": "money-transfer",
  "categoryId": "banking",
  "title": "Transferência de dinheiro da CEI para Portugal — canais legais 2026",
  "tldr": "As sanções da UE (2022+) bloquearam o SWIFT para grandes bancos russos e limitaram as transferências. Continuam a existir canais legais: pequenos bancos russos sem sanções, bancos não sancionados da CEI (Cazaquistão, Arménia, Geórgia), neobancos da UE (através de intermediário), criptomoeda através de bolsas reguladas. O essencial é documentar a origem dos fundos (AML/KYC). A transferência anónima é impossível.",
  "audience": {
    "countryCodes": [
      "RU",
      "BY",
      "KZ",
      "KG",
      "UZ"
    ]
  },
  "tags": [
    "transferências",
    "sanções",
    "banco",
    "aml"
  ],
  "estimatedReadMinutes": 8,
  "steps": [
    {
      "id": "sanctions-context",
      "title": "Contexto regulatório",
      "content": [
        {
          "kind": "paragraph",
          "text": "Desde fevereiro de 2022, a UE introduziu uma série de pacotes de sanções contra o setor bancário da Federação Russa. Principais restrições:"
        },
        {
          "kind": "checklist",
          "items": [
            "Desligamento do SWIFT — Sberbank, VTB, Otkritie, Rossiya, Promsvyazbank, Novikombank, Sovcombank, VEB e vários outros (lista no Regulation (EU) 2022/328 e subsequentes)",
            "Limite de 100 000 € para depósitos de cidadãos da Federação Russa em bancos da UE (Regulation 833/2014, art. 5b)",
            "Proibição de aceitação de depósitos > 100 000 € de cidadãos da Federação Russa em bancos da UE (aplicável desde 2022)",
            "Documentação obrigatória da origem dos fundos (AML 6.ª diretiva, EU 2018/1673)",
            "Regulation 269/2014 — sanções pessoais contra pessoas constantes da lista (verificar através do EU Sanctions Map)",
            "Para cidadãos da Bielorrússia — regime semelhante desde 2022"
          ]
        },
        {
          "kind": "warning",
          "text": "Contornar sanções (através de testas-de-ferro, evitando limites, com documentos falsificados) é criminalmente punível na UE. Pode implicar até 5 anos de prisão + confisco."
        }
      ]
    },
    {
      "id": "options",
      "title": "Canais legais de transferência",
      "content": [
        {
          "kind": "substeps",
          "items": [
            {
              "id": "o1",
              "title": "A. Bancos da Federação Russa não sancionados (disponível)",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Alguns bancos NÃO constam da lista de sanções SWIFT e permitem transferências em EUR/USD para a UE:"
                },
                {
                  "kind": "checklist",
                  "items": [
                    "Raiffeisenbank (RU) — disponível, mas as comissões aumentaram",
                    "OTP Bank RU — disponível, com limites",
                    "UniCredit RU — disponível, com restrições",
                    "Limite mensal de saída da Federação Russa — 1 milhão de dólares para particulares (para residentes em Portugal)"
                  ]
                },
                {
                  "kind": "warning",
                  "text": "Verifique o estado atual do banco no EU Sanctions Map (sanctionsmap.eu). A lista muda."
                }
              ]
            },
            {
              "id": "o2",
              "title": "B. Através de um país terceiro (KZ, AM, GE, AE)",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Esquema legal comum: abrir conta no Cazaquistão / Arménia / Geórgia / EAU → transferir para lá a partir da Federação Russa → daí para a UE. Exige deslocação para abrir a conta."
                },
                {
                  "kind": "checklist",
                  "items": [
                    "Cazaquistão: Kaspi, Halyk, Jusan — populares. É necessária uma viagem ao KZ.",
                    "Arménia: ACBA, Ameriabank — abrem contas para não residentes da Federação Russa",
                    "Geórgia: TBC, BoG — endureceram as condições, mas trabalham com documentação",
                    "EAU: Emirates NBD, ADCB — exigem visto de residência ou depósito elevado"
                  ]
                },
                {
                  "kind": "paragraph",
                  "text": "Depois, a partir destes bancos — SWIFT para o seu banco português. Ao receber a partir de 10 000 €, prepare documentos sobre a origem dos fundos."
                }
              ]
            },
            {
              "id": "o3",
              "title": "C. Wise / Revolut (através de residência na UE)",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Wise e Revolut funcionam como neobancos da UE. Para cidadãos da Federação Russa/Bielorrússia atualmente:"
                },
                {
                  "kind": "checklist",
                  "items": [
                    "Revolut com morada na Federação Russa — encerram / congelam contas",
                    "Revolut com morada em Portugal (após obter autorização de residência) — funciona. Mas o carregamento a partir de um banco russo pode ser bloqueado",
                    "Wise — política semelhante",
                    "Tática: abrir conta já depois da mudança para Portugal (com morada portuguesa e autorização de residência), carregar através de banco português ou SEPA"
                  ]
                }
              ]
            },
            {
              "id": "o4",
              "title": "D. Criptomoeda (através de bolsas reguladas)",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Esquema legal: comprar USDT/USDC/BTC numa bolsa russa → transferir para Kraken/Bitstamp/Binance → vender por EUR → levantar para um IBAN português."
                },
                {
                  "kind": "checklist",
                  "items": [
                    "É necessário KYC completo em ambos os lados",
                    "Impostos: em Portugal, as mais-valias de criptomoedas são tributadas desde 2023 (28% se detidas < 1 ano, 0% > 1 ano)",
                    "O Banco de Portugal monitoriza transferências de criptomoedas",
                    "Ao receber uma quantia elevada, o banco pode pedir documentos sobre a origem dos fundos",
                    "NÃO utilize casas de câmbio P2P/OTC sem KYC — risco de congelamento dos fundos"
                  ]
                }
              ]
            },
            {
              "id": "o5",
              "title": "E. Numerário através da fronteira",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Limite de declaração na UE: 10 000 € ou equivalente. Acima disso — declaração obrigatória na alfândega. Sem declaração — multa e confisco."
                },
                {
                  "kind": "warning",
                  "text": "Este caminho é impraticável para quantias elevadas — riscos de perda, roubo e problemas aduaneiros."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "source-of-funds",
      "title": "Documentação da origem dos fundos",
      "content": [
        {
          "kind": "paragraph",
          "text": "Para quantias a partir de 10 000-15 000 €, o banco português é obrigado a solicitar documentos sobre a origem dos fundos. Prepare com antecedência:"
        },
        {
          "kind": "checklist",
          "items": [
            "Declaração de IRS / declaração fiscal dos últimos 3 anos",
            "Extrato do banco remetente referente ao período de acumulação",
            "Contrato de venda de imóvel no país de origem (se aplicável à situação)",
            "Contrato de trabalho e declaração salarial",
            "Herança — documentos sucessórios, apostila",
            "Investimentos — relatórios de corretora",
            "Venda de negócio — contrato de compra e venda, impostos",
            "Doação — contrato de doação com apostila",
            "Transferência de fundos próprios — não é considerada «doação», sendo justificada por toda a cadeia"
          ]
        },
        {
          "kind": "warning",
          "text": "Todos os documentos — apostilados + tradução juramentada para português. Documentos com mais de 6 meses muitas vezes não são aceites."
        }
      ]
    },
    {
      "id": "taxes-pt",
      "title": "Impostos em Portugal sobre fundos recebidos",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "💰 Transferência de fundos PRÓPRIOS (poupanças) — NÃO é tributada em Portugal",
            "🎁 Doação de familiar em linha direta (pais/filhos/cônjuge) — NÃO é tributada (isenção de imposto do selo de 10%)",
            "🎁 Doação de outras pessoas — 10% de imposto do selo se >500 €",
            "💼 Rendimento (dividendos, juros) — tributado no Anexo E do IRS",
            "🏠 Venda de imóvel no país de origem — pode haver imposto em Portugal (deduzindo o imposto pago nesse país)",
            "💎 Herança — 10% de imposto do selo, se não for linha direta",
            "🔖 NHR/IFICI se tiver estatuto — pode reduzir o imposto"
          ]
        }
      ]
    },
    {
      "id": "practical-tips",
      "title": "Conselhos práticos",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "📋 Planeie as transferências 3-6 meses ANTES da mudança. Após obter autorização de residência — é mais simples",
            "🏦 Não coloque tudo num só banco. Distribua por 2-3 bancos para liquidez",
            "💶 A primeira grande transação para um banco português normalmente fica retida em verificação de conformidade durante 3-14 dias. É normal",
            "📞 Avise o banco COM ANTECEDÊNCIA sobre a entrada elevada prevista e forneça documentos sobre a origem dos fundos",
            "⚖️ Para quantias elevadas (>100 000 €), consulte um advogado especializado em conformidade",
            "🚫 NÃO utilize «intermediários» no Telegram/WhatsApp para transferências — risco elevado de perdas",
            "📊 Guarde TODOS os comprovativos de transferências para futuras declarações fiscais"
          ]
        }
      ]
    }
  ],
  "sources": [
    {
      "title": "Banco de Portugal — AML e transferências internacionais",
      "url": "https://www.bportugal.pt/",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "EU Sanctions Map — verificação do estado de sanções",
      "url": "https://www.sanctionsmap.eu/",
      "kind": "official",
      "language": "en",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "Regulation (EU) 833/2014 (sanções)",
      "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32014R0833",
      "kind": "law",
      "language": "en",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "Diretiva 2018/1673 — AML 6",
      "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32018L1673",
      "kind": "law",
      "language": "en",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "Portal das Finanças (portal fiscal) — declaração de rendimentos estrangeiros",
      "url": "https://www.portaldasfinancas.gov.pt/",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    }
  ],
  "lastVerified": "2026-04-22",
  "verifyIntervalDays": 90
}
