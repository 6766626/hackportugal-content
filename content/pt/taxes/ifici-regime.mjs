export default {
  "editorialVoice": "hackportugal",
  "id": "ifici-regime",
  "categoryId": "taxes",
  "title": "IFICI — regime fiscal (substituição do NHR)",
  "tldr": "Desde 2024, o antigo regime NHR foi revogado. Foi substituído pelo IFICI (Incentivo Fiscal à Investigação Científica e Inovação) — uma taxa única de 20% sobre rendimentos de atividade qualificada (ciência, alta tecnologia, startups) durante 10 anos. A lista de profissões é restrita. Para a maioria dos trabalhadores remotos e pensionistas, o IFICI NÃO é adequado.",
  "tags": [
    "ifici",
    "nhr",
    "impostos",
    "irs"
  ],
  "estimatedReadMinutes": 8,
  "recentlyChangedAt": "2024-01-01",
  "changeSummary": "Desde 2024, o antigo regime NHR está fechado a novos requerentes, exceto em casos transitórios limitados previstos no OE/2024 (algumas pessoas que se tornaram residentes fiscais em 2024). Quem obteve o NHR ou entrou ao abrigo das regras transitórias mantém o regime pelo período restante de 10 anos. Todos os restantes novos residentes só têm acesso ao IFICI (lista restrita de profissões).",
  "steps": [
    {
      "id": "nhr-vs-ifici",
      "title": "NHR e IFICI",
      "content": [
        {
          "kind": "paragraph",
          "text": "NHR (Non-Habitual Resident) — o antigo regime em vigor entre 2009 e 2023. Concedia uma taxa de IRS de 20% sobre determinados rendimentos profissionais de elevado valor acrescentado em Portugal e benefícios para categorias de rendimentos estrangeiros, desde que tributados no país de origem ou ao abrigo de uma convenção para evitar a dupla tributação. A taxa de 10% sobre pensões estrangeiras foi introduzida em 01.04.2020 (antes disso, as pensões eram frequentemente isentas de imposto). Desde 01.01.2024, o NHR está fechado a novos requerentes, exceto nos casos transitórios do OE/2024."
        },
        {
          "kind": "paragraph",
          "text": "IFICI — o novo regime de 2024 em diante. Taxa de IRS de 20% sobre o rendimento líquido das categorias A (trabalho dependente) e B (atividade empresarial/profissional) proveniente de atividade qualificada em Portugal. Adicionalmente — isenção para determinadas categorias de rendimentos estrangeiros (A, B, E, F, G), mediante cumprimento das condições. NÃO se aplica a pensões. NÃO se aplica a rendimentos provenientes de jurisdições com um regime fiscal claramente mais favorável sem acordo."
        },
        {
          "kind": "warning",
          "text": "Essencial: o IFICI exige uma «atividade qualificada» incluída numa lista restrita. Trabalhadores remotos independentes sem esse estatuto pagam IRS segundo a tabela progressiva (11,97%–48% em 9 escalões para 2026)."
        }
      ]
    },
    {
      "id": "who-qualifies",
      "title": "Quem se qualifica para o IFICI",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "Investigadores científicos (numa universidade ou organização científica em Portugal)",
            "Profissionais altamente qualificados em empresas tecnológicas (segundo a lista da Portaria)",
            "Especialistas em startups com estatuto certificado pela Startup Portugal",
            "Docentes do ensino superior",
            "Trabalho em centros de I&D com estatuto aprovado"
          ]
        },
        {
          "kind": "warning",
          "text": "Um programador freelancer sem contrato com um empregador qualificado NÃO entra no IFICI."
        }
      ]
    },
    {
      "id": "conditions",
      "title": "Condições",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "Tornar-se residente fiscal em Portugal (viver 183+ dias ou ter o centro de interesses vitais)",
            "NÃO ter sido residente fiscal em Portugal nos últimos 5 anos",
            "A atividade estar incluída na lista do IFICI",
            "Apresentar o pedido até **15 de janeiro** do ano seguinte ao ano em que se tornou residente (Portaria 352/2024). A janela excecional até 15.03.2025 aplicou-se apenas ao primeiro ciclo (residentes de 2024)"
          ]
        }
      ]
    },
    {
      "id": "application",
      "title": "Como apresentar o pedido",
      "content": [
        {
          "kind": "substeps",
          "items": [
            {
              "id": "i1",
              "title": "1. Tornar-se residente fiscal",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Através do Portal das Finanças (portal fiscal) → alterar a morada fiscal para uma morada portuguesa."
                }
              ]
            },
            {
              "id": "i2",
              "title": "2. Reunir provas de qualificação",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Contrato com um empregador qualificado, confirmação do estatuto de I&D da empresa (certificado da ANI), diploma."
                }
              ]
            },
            {
              "id": "i3",
              "title": "3. Apresentar o pedido",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Através do Portal das Finanças até 15 de janeiro do ano seguinte (a Portaria 352/2024 define o prazo)."
                }
              ]
            },
            {
              "id": "i4",
              "title": "4. Aguardar aprovação",
              "content": [
                {
                  "kind": "timeline",
                  "text": "Pode demorar até 6 meses. Em caso de aprovação, o regime aplica-se retroativamente desde o início do ano da apresentação do pedido."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "not-qualifying",
      "title": "Se não se qualificar — o que fazer",
      "content": [
        {
          "kind": "paragraph",
          "text": "Paga o IRS normal segundo a tabela progressiva (9 escalões, OE 2026 com indexação de +3,51% e redução das taxas nos 2.º–5.º escalões):"
        },
        {
          "kind": "checklist",
          "items": [
            "Até 8 342 €: 11,97%",
            "8 342 € – 12 587 €: 16,19%",
            "12 587 € – 17 838 €: 21,17%",
            "17 838 € – 23 089 €: 24,37%",
            "23 089 € – 29 397 €: 31,44%",
            "29 397 € – 41 952 €: 34,88%",
            "41 952 € – 45 339 €: 43,5%",
            "45 339 € – 83 696 €: 45%",
            "Acima de 83 696 €: 48%"
          ]
        },
        {
          "kind": "paragraph",
          "text": "Para trabalhadores independentes (recibos verdes), pode aplicar-se o regime simplificado: 75% do volume de negócios constitui a matéria coletável. Acrescem contribuições para a Segurança Social de 21,4% sobre 70% do rendimento relevante (limite: 12 × IAS = 6 445,56 €). Os primeiros 12 meses para novos registos beneficiam de isenção total de contribuições."
        }
      ]
    }
  ],
  "sources": [
    {
      "title": "Portal das Finanças — IFICI",
      "url": "https://www.portaldasfinancas.gov.pt/",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "Portaria 352/2024 — procedimento do IFICI e prazo de 15.01",
      "url": "https://diariodarepublica.pt/dr/detalhe/portaria/352-2024-901014291",
      "kind": "law",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "DRE — Lei do OE/2024 (revogação do NHR)",
      "url": "https://diariodarepublica.pt/dr/detalhe/lei/82-2023",
      "kind": "law",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "ANI — Agência Nacional de Inovação",
      "url": "https://www.ani.pt/",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    }
  ],
  "lastVerified": "2026-04-22",
  "verifyIntervalDays": 90
}
