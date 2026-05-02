export default {
  "editorialVoice": "hackportugal",
  "id": "irs-filing",
  "categoryId": "taxes",
  "title": "Entrega do IRS — declaração fiscal de pessoa singular",
  "tldr": "IRS = Imposto sobre o Rendimento das Pessoas Singulares. É entregue anualmente de 1 de abril a 30 de junho no Portal das Finanças. Para residentes, é obrigatório independentemente da fonte de rendimento. Existe uma versão automática pré-preenchida (IRS Automático) para casos simples.",
  "tags": [
    "irs",
    "impostos",
    "declaração"
  ],
  "estimatedReadMinutes": 7,
  "steps": [
    {
      "id": "who",
      "title": "Quem entrega",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "Todos os residentes fiscais em Portugal (viveram ≥ 183 dias ou têm o centro de interesses em Portugal)",
            "Não residentes com rendimento de Portugal — entregam apenas relativamente ao rendimento português",
            "Sujeitos IFICI — entregam com formulários específicos"
          ]
        },
        {
          "kind": "warning",
          "text": "Os residentes declaram TODO o rendimento mundial, incluindo o estrangeiro. NHR/IFICI concedem isenções."
        }
      ]
    },
    {
      "id": "deadline",
      "title": "Prazos",
      "content": [
        {
          "kind": "paragraph",
          "text": "A declaração referente ao ano N é entregue entre 1 de abril e 30 de junho do ano N+1. Independentemente da categoria de rendimento (salário, Recibo Verde (recibos eletrónicos de trabalhador independente), arrendamento, etc.)."
        },
        {
          "kind": "warning",
          "text": "Falhar o prazo — coima de 150–3750 €. É melhor entregar com erro e corrigir (modelo de substituição)."
        }
      ]
    },
    {
      "id": "categories",
      "title": "Categorias de rendimentos",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "Categoria A — salário, pensão",
            "Categoria B — trabalho independente (Recibo Verde)",
            "Categoria E — rendimento de investimentos (dividendos, juros)",
            "Categoria F — arrendamento de imóveis",
            "Categoria G — mais-valias (venda de ações, criptomoeda)",
            "Categoria H — pensões",
            "Rendimento estrangeiro — no anexo J"
          ]
        }
      ]
    },
    {
      "id": "process",
      "title": "Processo de entrega",
      "content": [
        {
          "kind": "substeps",
          "items": [
            {
              "id": "s1",
              "title": "1. IRS Automático (se for elegível)",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Para a categoria A (salário), sem outras fontes, as Finanças preparam a declaração. Só tem de verificar e aprovar. Pode verificar em Portal das Finanças → IRS → IRS Automático."
                }
              ]
            },
            {
              "id": "s2",
              "title": "2. Entrega manual (Modelo 3)",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Se tiver fontes adicionais — entrega através de Portal das Finanças → IRS → Entregar. É necessário preencher o Modelo 3 + os anexos necessários (Anexos)."
                }
              ]
            },
            {
              "id": "s3",
              "title": "3. Anexos",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "Anexo A — salário/pensão",
                    "Anexo B — Recibo Verde (regime simplificado)",
                    "Anexo C — Recibo Verde (contabilidade organizada)",
                    "Anexo E — investimentos",
                    "Anexo F — arrendamento",
                    "Anexo G — mais-valias",
                    "Anexo H — deduções (saúde, educação, alimentação, habitação)",
                    "Anexo J — rendimento estrangeiro"
                  ]
                }
              ]
            },
            {
              "id": "s4",
              "title": "4. Verificação e submissão",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Verificação automática. Após a submissão — comprovativo de entrega. Estado — no Portal das Finanças."
                }
              ]
            },
            {
              "id": "s5",
              "title": "5. Resultado",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Até julho-agosto — cálculo (liquidação). Se houver imposto pago em excesso — reembolso. Se houver imposto em falta — prazo de pagamento até 31 de agosto."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "deductions",
      "title": "Principais deduções (Anexo H)",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "Despesas médicas — 15% até 1000 €",
            "Educação (filhos) — 30% até 800 €",
            "Serviços públicos (eletricidade, gás, água) — 15% até 250 €",
            "Faturas de restaurantes — 15% até 250 €",
            "Arrendamento — 15% até 502 €",
            "Crédito à habitação — 15% até 296 € (apenas para créditos anteriores a 2011)",
            "Despesas gerais (Faturas.pt) — 35% até 250 €",
            "PPR (conta de reforma) — 20% até 400 €"
          ]
        },
        {
          "kind": "paragraph",
          "text": "Para que as deduções sejam contabilizadas — peça NIF em todas as faturas (o Faturas.pt recolhe automaticamente)."
        }
      ]
    },
    {
      "id": "nhr-ifici",
      "title": "NHR e IFICI — particularidades",
      "content": [
        {
          "kind": "paragraph",
          "text": "NHR (até 2024): 20% sobre trabalho qualificado + 0% sobre rendimento estrangeiro. Para sujeitos já abrangidos — até ao fim do período de 10 anos."
        },
        {
          "kind": "paragraph",
          "text": "IFICI (desde 2024): 20% sobre atividade qualificada. Entrega através de Portal das Finanças → perfil IFICI + Modelo 3 com indicação."
        }
      ]
    }
  ],
  "sources": [
    {
      "title": "Portal das Finanças — IRS",
      "url": "https://www.portaldasfinancas.gov.pt/at/html/irsweb2024",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "ePortugal — Entregar IRS",
      "url": "https://eportugal.gov.pt/cidadaos/-/informacoes/entregar-o-irs",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "Código do IRS (DRE)",
      "url": "https://info.portaldasfinancas.gov.pt/",
      "kind": "law",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    }
  ],
  "lastVerified": "2026-04-22",
  "verifyIntervalDays": 180
}
