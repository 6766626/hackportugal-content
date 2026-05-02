export default {
  "editorialVoice": "hackportugal",
  "id": "recibos-verdes",
  "categoryId": "work_business",
  "title": "Recibos Verdes — trabalho como trabalhador independente",
  "tldr": "Recibos Verdes são recibos digitais de trabalhador independente no Portal das Finanças. São usados por freelancers e empresários em nome individual. Regime simplificado: 75% do volume de negócios é a matéria coletável, 25% é a dedução automática. Contribuições sociais — 21,4%. IVA — apenas se o volume de negócios for > 15 000 €/ano.",
  "tags": [
    "recibos verdes",
    "empresário em nome individual",
    "trabalho independente",
    "atividade"
  ],
  "estimatedReadMinutes": 7,
  "steps": [
    {
      "id": "open",
      "title": "Abrir Início de Atividade",
      "content": [
        {
          "kind": "substeps",
          "items": [
            {
              "id": "o1",
              "title": "1. Entrar no Portal das Finanças",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Com o seu NIF e palavra-passe."
                }
              ]
            },
            {
              "id": "o2",
              "title": "2. Cidadão → Alterar Atividade → Abrir Atividade",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Escolher o CAE — código de atividade. Para TI — 62010 (programação), para consultoria — 70220, para design — 74100."
                }
              ]
            },
            {
              "id": "o3",
              "title": "3. Escolher o regime",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "Regime Simplificado — regime padrão para volume de negócios < 200 000 €/ano. Base simplificada.",
                    "Contabilidade Organizada — para volumes de negócios elevados ou por opção, exige contabilista."
                  ]
                }
              ]
            },
            {
              "id": "o4",
              "title": "4. IVA",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "Volume de negócios ≤ 15 000 €/ano — isenção de IVA (Regime de Isenção)",
                    "Volume de negócios > 15 000 € — registo de IVA, taxa de 23% (ou 13%/6% para alguns serviços)"
                  ]
                }
              ]
            },
            {
              "id": "o5",
              "title": "5. Segurança Social",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "No primeiro ano — isenção de contribuições. A partir do 13.º mês — 21,4% sobre 70% do volume de negócios médio mensal."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "invoicing",
      "title": "Emitir Recibo Verde (recibo eletrónico de trabalhador independente)",
      "content": [
        {
          "kind": "substeps",
          "items": [
            {
              "id": "i1",
              "title": "1. No Portal das Finanças",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Cidadão → Recibos e Faturas → Emitir Fatura-Recibo (para serviços) ou Fatura (se estiver registado como sujeito passivo de IVA)."
                }
              ]
            },
            {
              "id": "i2",
              "title": "2. Preencher os dados do cliente",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Nome, NIF, morada. Se o cliente estiver fora da UE — segundo as regras de autoliquidação, IVA = 0."
                }
              ]
            },
            {
              "id": "i3",
              "title": "3. Indicar o montante e a categoria",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Os serviços são incluídos na fatura. O IVA é calculado automaticamente se estiver no regime de IVA."
                }
              ]
            },
            {
              "id": "i4",
              "title": "4. Retenção na fonte (retenção)",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Para clientes portugueses — 11,5%, 16,5% ou 25% é retido automaticamente. Para clientes estrangeiros — 0."
                }
              ]
            },
            {
              "id": "i5",
              "title": "5. Assinar e enviar ao cliente",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Documento digital. O cliente integra-o na sua contabilidade."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "taxes",
      "title": "Impostos no fim do ano",
      "content": [
        {
          "kind": "paragraph",
          "text": "No regime simplificado:"
        },
        {
          "kind": "checklist",
          "items": [
            "Matéria coletável = 75% do volume de negócios (25% de dedução automática)",
            "Aplica-se a tabela do IRS (13%–48%)",
            "Contribuições sociais (21,4% sobre 70% do volume de negócios)",
            "Pagamentos por conta trimestrais de IRS a partir de julho do segundo ano de atividade"
          ]
        },
        {
          "kind": "paragraph",
          "text": "Para sujeitos IFICI: taxa fixa de 20% sobre atividade qualificada."
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
            "Contabilista certificado — recomendado, 50–150 €/mês",
            "Guarde todos os Recibos Verdes durante 10 anos",
            "Entregue o IRS anualmente entre abril e junho",
            "Se os clientes forem apenas internacionais, guarde comprovativos bancários para AIMA/Finanças",
            "Primeiro ano sem contribuições sociais — uma excelente oportunidade para começar"
          ]
        }
      ]
    }
  ],
  "sources": [
    {
      "title": "Portal das Finanças — Recibos Verdes",
      "url": "https://www.portaldasfinancas.gov.pt/",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "Segurança Social — Trabalhadores Independentes",
      "url": "https://www.seg-social.pt/trabalhadores-independentes",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "ePortugal — Abrir Atividade",
      "url": "https://eportugal.gov.pt/cidadaos/-/informacoes/abrir-atividade-de-trabalhador-independente",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    }
  ],
  "lastVerified": "2026-04-22",
  "verifyIntervalDays": 180
}
