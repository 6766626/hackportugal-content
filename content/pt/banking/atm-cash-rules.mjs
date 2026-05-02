export default {
  "editorialVoice": "hackportugal",
  "id": "atm-cash-rules",
  "categoryId": "banking",
  "title": "Caixas automáticos, numerário e limites em Portugal",
  "tldr": "A principal rede de caixas automáticos é a Multibanco (MB), com cerca de 12 000 equipamentos. Aceitam a maioria dos cartões internacionais, mas a decisão de aceitar um cartão específico depende do banco emissor. A Multibanco normalmente não cobra comissão adicional, mas o banco emissor estrangeiro pode cobrar a sua própria comissão. O limite de levantamento é de 200–400 €/dia. O pagamento em numerário entre particulares é proibido para valores **≥ 3 000 €** (art. 63-E LGT); para IRC/IRS com contabilidade organizada — **≥ 1 000 €** em facturas. O depósito de numerário superior a 10 000 € exige justificação da origem dos fundos ao abrigo das regras AML — os bancos podem solicitar documentos também para montantes inferiores, no âmbito da análise baseada no nível de risco.",
  "tags": [
    "atm",
    "multibanco",
    "numerário",
    "limites",
    "nota"
  ],
  "estimatedReadMinutes": 5,
  "steps": [
    {
      "id": "multibanco",
      "title": "Multibanco — rede de caixas automáticos",
      "content": [
        {
          "kind": "paragraph",
          "text": "O operador é a SIBS. Os caixas automáticos encontram-se junto de todos os bancos, em postos de abastecimento, centros comerciais e aeroportos. Aceitam todos os cartões Visa/Mastercard/Maestro, bem como cartões portugueses locais."
        },
        {
          "kind": "checklist",
          "items": [
            "💰 Levantamento de numerário — 0 € para cartões do próprio banco",
            "💳 Para cartões de outros bancos em Portugal — 0 € (levantamentos nacionais na Multibanco — Aviso Banco de Portugal 8/2009 / Lei 53/2020)",
            "🌍 Para cartões estrangeiros — 0 €, se o cartão for EU/SEPA; caso contrário, 2–4 € + diferença cambial",
            "📅 Limite: normalmente 200–400 €/dia",
            "💼 Terminais POS: montante até 1000 €",
            "🔐 PIN + frequentemente SMS-OTP ao trocar de cartão"
          ]
        }
      ]
    },
    {
      "id": "mb-services",
      "title": "O que mais faz a Multibanco",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "💸 Transferências por IBAN (até 10 000 €/dia)",
            "📄 Pagamento de serviços (Finanças, Segurança Social, IMI, IRS, IUC) por entidade + referência",
            "📱 Carregamento de telemóvel",
            "🎟️ Compra de bilhetes de transporte / eventos culturais",
            "🅿️ Pagamento de estacionamento",
            "🔒 Cartão temporário Multibanco — cartão virtual para compras online",
            "💼 Consulta de saldo, movimentos e extractos",
            "🎲 Pagamento de jogos (Jackpot, Euromillions)"
          ]
        }
      ]
    },
    {
      "id": "cash-limits",
      "title": "Limites para pagamentos em numerário",
      "content": [
        {
          "kind": "paragraph",
          "text": "art. 63-E LGT (Lei Geral Tributária) — restrições aos pagamentos em numerário. As proibições aplicam-se a operações iguais ou superiores ao limiar:"
        },
        {
          "kind": "checklist",
          "items": [
            "🧑‍🤝‍🧑 Entre particulares comuns: proibição de pagamentos em numerário **≥ 3 000 €** por transacção",
            "🏢 Sujeitos passivos de IRC/IRS com contabilidade organizada: proibição de pagamentos em numerário de facturas/documentos **≥ 1 000 €**",
            "✈️ Turistas não residentes (particulares sem obrigação de manter contabilidade organizada em Portugal): o limiar é normalmente **≥ 10 000 €** para operações em numerário sem procedimentos AML especiais",
            "⚖️ Coimas ao abrigo do RGIT por infracção — podem ser significativas; a fiscalização é efectuada pela AT",
            "📋 Operações a partir de 3 000 € (ou 1 000 € para empresas) — transferência bancária/cheque/pagamento electrónico",
            "🛒 IMPORTANTE: dividir uma única operação em vários pagamentos para contornar o limiar constitui uma infracção separada"
          ]
        }
      ]
    },
    {
      "id": "damaged",
      "title": "Nota rasgada ou danificada",
      "content": [
        {
          "kind": "substeps",
          "items": [
            {
              "id": "d1",
              "title": "Parcialmente rasgada / suja",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Qualquer banco em Portugal troca a nota se se conservar > 50 % da área e os principais elementos de segurança (marca de água, banda metalizada). Gratuito."
                }
              ]
            },
            {
              "id": "d2",
              "title": "Muito danificada",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Banco de Portugal — agência em Lisboa / Porto / Faro / Funchal. Peritagem + decisão em 7–30 dias. O valor é restituído se for comprovado dano acidental."
                }
              ]
            },
            {
              "id": "d3",
              "title": "Falsa",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Apreensão sem indemnização. Comunicar à PSP + Banco de Portugal."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "deposit-limits",
      "title": "Limites para depósitos em numerário",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "💰 < 10 000 € — sem perguntas",
            "📋 10 000–15 000 € — o banco pode perguntar a origem dos fundos (verificação AML simplificada)",
            "📄 > 15 000 € — Declaração de origem de fundos obrigatória",
            "🌍 > 10 000 € trazidos do estrangeiro — declaração na alfândega",
            "🇷🇺 Cidadãos da Federação Russa: depósito total > 100 000 € — proibido na UE (sanções 833/2014)",
            "🇧🇾 Cidadãos da Bielorrússia — restrição semelhante"
          ]
        },
        {
          "kind": "warning",
          "text": "Depósitos frequentes de 9 500 € são considerados estruturação. O banco é obrigado a comunicar à UIF (Unidade de Informação Financeira). Pode haver coima ou bloqueio da conta."
        }
      ]
    }
  ],
  "costs": [
    {
      "label": "Levantamento de numerário MB",
      "amountEUR": 0
    },
    {
      "label": "Levantamento com cartão estrangeiro fora da EU",
      "amountEURMin": 2,
      "amountEURMax": 4
    },
    {
      "label": "Coima por violação do limite de numerário",
      "amountEURMin": 180,
      "amountEURMax": 4500
    }
  ],
  "sources": [
    {
      "title": "Lei Geral Tributária — art. 63-E (limite de pagamentos em numerário)",
      "url": "https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1998-34541975",
      "kind": "law",
      "language": "pt",
      "lastRetrieved": "2026-04-28"
    },
    {
      "title": "Lei n.º 92/2017 — alteração da LGT",
      "url": "https://dre.pt/dre/detalhe/lei/92-2017",
      "kind": "law",
      "language": "pt",
      "lastRetrieved": "2026-04-28"
    },
    {
      "title": "Banco de Portugal — troca de notas e moedas danificadas",
      "url": "https://www.bportugal.pt/",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-28"
    },
    {
      "title": "SIBS — Multibanco",
      "url": "https://www.sibs.com/",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-28"
    }
  ],
  "lastVerified": "2026-04-28",
  "verifyIntervalDays": 365
}
