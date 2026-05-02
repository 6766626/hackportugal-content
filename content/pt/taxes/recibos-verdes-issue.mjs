export default {
  "editorialVoice": "hackportugal",
  "id": "recibos-verdes-issue",
  "categoryId": "taxes",
  "title": "Como emitir um recibo verde (recibo eletrónico de trabalhador independente) — passo a passo",
  "tldr": "Recibo verde — recibo eletrónico de trabalhador independente / empresário em nome individual. É emitido no Portal das Finanças → «Recibos Verdes Eletrónicos». São necessários: atividade aberta, NIF do cliente, montante, descrição do serviço. O IVA depende do regime: normal a 23 % ou isenção se o volume de negócios for < 15 000 €/ano. Exemplo para trabalhador independente no primeiro ano: normalmente sem IVA, ao abrigo do regime especial. Prazo de emissão — até ao dia 5 do mês seguinte ao pagamento.",
  "tags": [
    "recibo verde",
    "empresário em nome individual",
    "trabalhador independente",
    "atividade"
  ],
  "estimatedReadMinutes": 5,
  "steps": [
    {
      "id": "prereq",
      "title": "O que é necessário antes do primeiro recibo",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "✅ Atividade aberta nas Finanças (Início de Atividade)",
            "✅ CAE — código da sua atividade (consultoria — 7022, TI — 6201)",
            "✅ NIF e palavra-passe do Portal das Finanças (ou Chave Móvel Digital)",
            "✅ Decisão sobre IVA: regime especial (se for o primeiro ano + volume de negócios < 15 000 €) ou regime normal a 23 %",
            "✅ NISS ativo para a Segurança Social",
            "✅ IBAN para receber o pagamento"
          ]
        }
      ]
    },
    {
      "id": "how-to",
      "title": "Emissão do recibo — passo a passo",
      "content": [
        {
          "kind": "substeps",
          "items": [
            {
              "id": "s1",
              "title": "1. Entrar no Portal das Finanças",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "portaldasfinancas.gov.pt → «Os Seus Serviços» → «Emitir Faturas e Recibos Eletrónicos» → «Recibos»."
                }
              ]
            },
            {
              "id": "s2",
              "title": "2. Preencher os dados do cliente",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "NIF do cliente (português ou estrangeiro)",
                    "Nome / denominação da empresa",
                    "Morada (automaticamente, se for um NIF português)",
                    "Se o cliente estiver fora da UE — «Não sujeito a IVA» é selecionado automaticamente"
                  ]
                }
              ]
            },
            {
              "id": "s3",
              "title": "3. Descrição do serviço",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "Data da prestação",
                    "Descrição (breve: «Serviços de consultoria», «Desenvolvimento de software»)",
                    "Quantidade / unidade (h — horas, un. — unidade)",
                    "Preço por unidade",
                    "Montante total"
                  ]
                }
              ]
            },
            {
              "id": "s4",
              "title": "4. IVA",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "Regime especial: 0 % IVA, menção «IVA — regime de isenção art. 53»",
                    "Regime normal: 23 % IVA sobre o montante",
                    "Exceção: cliente noutro país da UE com número de VAT → 0 % IVA (autoliquidação)",
                    "Cliente fora da UE → 0 % IVA"
                  ]
                }
              ]
            },
            {
              "id": "s5",
              "title": "5. Retenção de IRS",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "Cliente pessoa coletiva em Portugal retém 11,5 % (artigo 101 CIRS)",
                    "Cliente particular em Portugal — sem retenção",
                    "Cliente estrangeiro — sem retenção",
                    "Estatuto IFICI — retenção de 11,5 %, mas com reembolso na declaração anual"
                  ]
                }
              ]
            },
            {
              "id": "s6",
              "title": "6. Envio",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "O PDF do recibo é enviado automaticamente ao cliente por correio eletrónico e fica disponível no Portal das Finanças. O cliente confirma a receção do pagamento no seu Portal das Finanças."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "timing",
      "title": "Quando emitir",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "📅 Após a conclusão do serviço OU a receção do pagamento (o que ocorrer primeiro)",
            "⏰ Até ao dia 5 do mês seguinte ao pagamento",
            "⚠️ Atraso — coima de 150–3 750 € ao abrigo do CIVA",
            "🔄 Pagamento antecipado → recibo pelo adiantamento, recibo final — aquando do pagamento do remanescente",
            "💳 Pagamento por cartão → recibo imediato (quando o dinheiro entrar no banco)",
            "🧾 Formato eletrónico e em papel — desde 2024+ apenas eletrónicos para recibos verdes (recibos eletrónicos de trabalhador independente)"
          ]
        }
      ]
    },
    {
      "id": "errors",
      "title": "Correção de erros",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "⛔ Recibo JÁ emitido — não pode ser alterado. Apenas anular e emitir um novo",
            "🔄 Anulação — no Portal das Finanças no prazo de 48 horas",
            "🚨 Após 48 horas — nota de crédito (por montante negativo) + novo recibo",
            "📅 No trimestre em curso — é incluído na declaração de IVA atual"
          ]
        }
      ]
    },
    {
      "id": "tax-obligations",
      "title": "Obrigações fiscais associadas",
      "content": [
        {
          "kind": "substeps",
          "items": [
            {
              "id": "t1",
              "title": "IVA — uma vez por trimestre (se estiver no regime normal)",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "Declaração Periódica até ao dia 20 do mês seguinte ao trimestre",
                    "Pagamento — até ao dia 25",
                    "Regime especial (< 15 000 €) isento"
                  ]
                }
              ]
            },
            {
              "id": "t2",
              "title": "Segurança Social — todos os meses",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "21,4 % da base. Primeiro ano — desconto de 50 % + período de carência de 12 meses. Mínimo 20 €/mês."
                }
              ]
            },
            {
              "id": "t3",
              "title": "IRS — uma vez por ano (Anexo B / C)",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Março–junho. Regime simplificado: 75 % do volume de negócios é considerado rendimento (25 % — despesas presumidas). Para IFICI — taxa fixa de 20 %."
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "sources": [
    {
      "title": "Portal das Finanças — Recibos Verdes",
      "url": "https://www.portaldasfinancas.gov.pt/at/html/index.html",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "Código do IVA (CIVA)",
      "url": "https://dre.pt/dre/legislacao-consolidada/decreto-lei/1984-55502475",
      "kind": "law",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "Código do IRS",
      "url": "https://dre.pt/dre/legislacao-consolidada/decreto-lei/1988-34471975",
      "kind": "law",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "ePortugal — Emitir recibos verdes",
      "url": "https://eportugal.gov.pt/",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    }
  ],
  "lastVerified": "2026-04-28",
  "verifyIntervalDays": 180
}
