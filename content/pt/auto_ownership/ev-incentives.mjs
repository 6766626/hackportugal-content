export default {
  "editorialVoice": "hackportugal",
  "id": "ev-incentives",
  "categoryId": "auto_ownership",
  "title": "Subsídios e benefícios para automóvel elétrico em Portugal",
  "tldr": "O Estado subsidia a compra de BEV através do Fundo Ambiental — os montantes, limites, teto de preço e quotas são definidos pelo **Aviso Fundo Ambiental** anual. Avisos anteriores: para particulares BEV M1 — cerca de 4 000 €, para empresas (N1) — mais elevado. O orçamento é limitado e esgota-se rapidamente. Adicionalmente: ISV reduzido ou 0% para BEV, IUC reduzido, mas NÃO totalmente 0% após o OE 2024, carregamento Mobi.E — cerca de 0,28–0,55 €/kWh, dependendo do operador. Antes da compra, verifique o Aviso atual em fundoambiental.pt.",
  "tags": [
    "ev",
    "automóvel elétrico",
    "subsídio",
    "fundo ambiental"
  ],
  "estimatedReadMinutes": 5,
  "steps": [
    {
      "id": "subsidy",
      "title": "Subsídio direto do Fundo Ambiental",
      "content": [
        {
          "kind": "paragraph",
          "text": "Portugal financia anualmente o programa Incentivo pela Introdução no Mercado de Veículos de Baixas Emissões. O orçamento é reiniciado a 1 de janeiro e, normalmente, esgota-se em 2–4 meses."
        },
        {
          "kind": "substeps",
          "items": [
            {
              "id": "s1",
              "title": "Montantes 2026",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "Particular, novo ligeiro BEV (categoria M1): até 4 000 € (máximo 2 automóveis por ano)",
                    "Pessoa coletiva/trabalhador independente, novo BEV M1: até 6 000 € (máximo 4 automóveis por ano)",
                    "Bicicleta elétrica: 500 €",
                    "BEV de mercadorias (N1) até 3,5 t: 6 000 €",
                    "Scooter elétrica: 500 €",
                    "O preço do automóvel não deve exceder 62 500 € (sem IVA) para participar"
                  ]
                }
              ]
            },
            {
              "id": "s2",
              "title": "Como apresentar a candidatura",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "fundoambiental.pt → Candidaturas → Mobilidade Elétrica. A candidatura é apresentada apenas online com Chave Móvel Digital ou Cartão de Cidadão. A abertura das janelas é geralmente a 15 de janeiro. São necessários: fatura do automóvel (pode ser fatura proforma), cópia da autorização de residência/Cartão de Cidadão, NIF, IBAN para o pagamento."
                }
              ]
            },
            {
              "id": "s3",
              "title": "Prazo de pagamento",
              "content": [
                {
                  "kind": "timeline",
                  "text": "30–90 dias após a aprovação. O dinheiro chega ao IBAN como reembolso."
                }
              ]
            }
          ]
        },
        {
          "kind": "warning",
          "text": "O orçamento do programa em 2024–2025 esgotou-se em 2–3 meses. Se vai comprar um automóvel elétrico na primavera — apresente a candidatura em janeiro-fevereiro."
        }
      ]
    },
    {
      "id": "taxes",
      "title": "Benefícios fiscais",
      "content": [
        {
          "kind": "substeps",
          "items": [
            {
              "id": "t1",
              "title": "ISV (desalfandegamento/importação)",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "BEV puros: **0%** de ISV (isenção total)",
                    "PHEV (híbrido plug-in) com autonomia elétrica ≥50 km: ISV reduzido (desconto de 25–40%)",
                    "HEV (híbrido convencional): ISV normal, como para gasolina/gasóleo",
                    "A validade do benefício é confirmada anualmente no OE"
                  ]
                }
              ]
            },
            {
              "id": "t2",
              "title": "IUC (imposto anual)",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "BEV: desde 2024 NÃO está totalmente isento (era 100% até 2023). Atualmente cerca de 30–50 €/ano, dependendo da cilindrada / potência",
                    "PHEV: IUC normal, mas com componente ambiental mais baixa",
                    "Híbridos: IUC normal"
                  ]
                }
              ]
            },
            {
              "id": "t3",
              "title": "IRS (para empresas/trabalhadores independentes)",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "Automóvel elétrico de serviço: amortização integral até 62 500 € (para gasolina — 25 000 €)",
                    "Carregamento (kWh) — dedução de 100% do IVA para empresas (para gasolina — 50%)",
                    "Essencial para freelancers: o automóvel elétrico é a forma mais eficiente de obter benefícios fiscais se tiver recibos verdes com volume de negócios elevado"
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "charging",
      "title": "Carregamento e rede Mobi.E",
      "content": [
        {
          "kind": "paragraph",
          "text": "Em Portugal existe uma rede nacional centralizada Mobi.E. Todos os carregamentos públicos, mesmo de diferentes operadores — Galp, EDP, Repsol, Iberdrola, — funcionam através de um hub comum. Uma conta — todo o Portugal."
        },
        {
          "kind": "checklist",
          "items": [
            "⚡ Normal (AC 11–22 kW): 0,28–0,35 €/kWh",
            "🔋 Rápido (DC 50–150 kW): 0,40–0,55 €/kWh",
            "🏎️ Ultrarrrápido (DC 150–350 kW): 0,55–0,75 €/kWh",
            "🏠 Wallbox doméstica: tarifa EDP/Galp — 0,16–0,20 €/kWh à noite (tarifa bi-horária)",
            "💳 Pagamento: cartão Mobi.E (5 € pelo registo) OU pagamento através das aplicações EDP, Galp, Iberdrola",
            "🅿️ Estacionamento gratuito: durante o carregamento em postos Mobi.E — primeiras 2 horas"
          ]
        }
      ]
    },
    {
      "id": "plate",
      "title": "Matrícula e identificação",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "Automóvel elétrico desde 2023 — moldura verde na matrícula (obrigatória no primeiro registo)",
            "Automóveis elétricos antigos — é possível mudar para a matrícula verde por 30 € no IMT",
            "Matrícula verde = entrada gratuita na ZER de Lisboa (zona de emissões reduzidas, alargada desde 2025)",
            "PHEV — matrícula sem moldura; benefícios parciais"
          ]
        }
      ]
    }
  ],
  "costs": [
    {
      "label": "Subsídio para particular (BEV M1)",
      "amountEUR": 4000,
      "note": "até, Fundo Ambiental 2026"
    },
    {
      "label": "Subsídio para pessoa coletiva (BEV M1)",
      "amountEUR": 6000,
      "note": "até"
    },
    {
      "label": "Bicicleta elétrica / scooter",
      "amountEUR": 500
    },
    {
      "label": "ISV para BEV",
      "amountEUR": 0
    },
    {
      "label": "Cartão Mobi.E (registo)",
      "amountEUR": 5
    }
  ],
  "sources": [
    {
      "title": "Fundo Ambiental — Mobilidade Elétrica",
      "url": "https://www.fundoambiental.pt/",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "Mobi.E — rede de carregamento",
      "url": "https://www.mobie.pt/",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "Portal das Finanças (portal fiscal) — calculadoras ISV/IUC",
      "url": "https://www.portaldasfinancas.gov.pt/",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "UVE — União dos Veículos Elétricos (comunidade)",
      "url": "https://www.uve.pt/",
      "kind": "company",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    }
  ],
  "lastVerified": "2026-04-28",
  "verifyIntervalDays": 180
}
