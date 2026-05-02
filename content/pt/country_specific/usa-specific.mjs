export default {
  "editorialVoice": "hackportugal",
  "id": "usa-specific",
  "categoryId": "country_specific",
  "title": "Americanos em Portugal — FATCA e dupla tributação",
  "tldr": "Os EUA e PT têm um acordo para evitar a dupla tributação. Mas os EUA tributam cidadãos em todo o mundo (tributação baseada na cidadania) — FATCA obriga os bancos PT a reportar. Declarações IRS/PT devem ser apresentadas a ambos os países. FBAR (>$10k em contas estrangeiras) é obrigatório.",
  "audience": {
    "countryCodes": [
      "US"
    ]
  },
  "tags": [
    "usa",
    "fatca",
    "impostos",
    "duplo"
  ],
  "estimatedReadMinutes": 7,
  "steps": [
    {
      "id": "tax-basics",
      "title": "Fundamentos da tributação",
      "content": [
        {
          "kind": "paragraph",
          "text": "Os EUA são um dos poucos países que impõem impostos aos cidadãos em todo o mundo, independentemente do seu estatuto de residência. O Acordo Treaty PT-USA de 1994 ajuda a evitar a dupla tributação, mas não isenta da declaração."
        },
        {
          "kind": "checklist",
          "items": [
            "Se você for residente fiscal em PT (>183 dias) — PT tributa toda a renda mundial",
            "Como cidadão dos EUA — o IRS também exige a declaração (Form 1040 + Schedule B)",
            "Exclusão de Rendimento Estrangeiro (FEIE) — $132 900 em 2026 (2025: $130 000). O valor é indexado anualmente; o valor atual está disponível em irs.gov",
            "Crédito Fiscal Estrangeiro (FTC) — compensação do imposto pago em PT contra o imposto dos EUA",
            "FBAR (FinCEN Form 114) — se todos os contas estrangeiras somarem > $10 000 em qualquer dia do ano (deve ser apresentado separadamente do 1040)",
            "Form 8938 (FATCA individual) — se os ativos estrangeiros > $200 000 no final do ano (ou $300 000 em qualquer dia) para residentes solteiros no exterior; $400 000 / $600 000 para casados a declarar em conjunto. Não substitui o FBAR — deve-se apresentar ambos"
          ]
        }
      ]
    },
    {
      "id": "fatca",
      "title": "FATCA — relatórios bancários",
      "content": [
        {
          "kind": "paragraph",
          "text": "A FATCA obriga todos os bancos em PT a reportar ao IRS sobre as contas de cidadãos dos EUA. A maioria dos bancos em PT aceita cidadãos dos EUA, mas podem ocorrer recusas devido ao ônus de conformidade."
        },
        {
          "kind": "checklist",
          "items": [
            "Bancos que aceitam americanos: ActivoBank, Millennium, Caixa, Novobanco",
            "Alguns bancos (Santander, BPI) podem recusar",
            "O formulário W-9 — deve ser preenchido ao abrir uma conta",
            "Relatório anual do banco no IRS automaticamente",
            "Para contas de corretagem (investimento) — a escolha é limitada, Interactive Brokers OK"
          ]
        }
      ]
    },
    {
      "id": "nhr-ifici",
      "title": "NHR / IFICI para americanos",
      "content": [
        {
          "kind": "paragraph",
          "text": "NHR-antigo (até 2024) era muito vantajoso: 10% sobre pensões dos EUA + 20% sobre trabalho qualificado + 0% sobre dividendos dos EUA. Aqueles que conseguiram antes de 2024 — mantêm por 10 anos."
        },
        {
          "kind": "paragraph",
          "text": "IFICI (2024+): taxa fixa de 20%, mas JÁ existe uma lista de profissões qualificadas. Para o trabalhador remoto tradicional é mais difícil entrar. FEIE + FTC — a principal proteção."
        }
      ]
    },
    {
      "id": "visas",
      "title": "Vistos dos EUA",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "Passaporte dos EUA: isenção de visto Schengen por 90 dias",
            "Para a mudança: D7 (pensionistas), D8 (trabalhadores remotos) são populares",
            "Golden Visa — disponível, processo padrão",
            "Consulado de Portugal: NYC, Washington DC, Miami, Chicago, Boston, Providence, San Francisco, Los Angeles, Newark, Houston",
            "Processo de visto 60-90 dias. Documentos americanos são facilmente apostilados através do Secretary of State"
          ]
        }
      ]
    },
    {
      "id": "investments",
      "title": "Investimentos — dificuldades",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "PFIC (Passive Foreign Investment Company) — fundos da UE frequentemente são PFIC, relatório pesado no IRS",
            "Vanguard / Fidelity / Charles Schwab — residentes dos EUA geralmente têm mais facilidade",
            "ETFs dos EUA — melhores que fundos PT/EU para americanos",
            "Roth IRA — não é tributável em PT (o contrato protege)",
            "401(k) — os pagamentos de pensão são tributáveis em PT",
            "Fundo de Pensões de PT (PPR) — os EUA consideram PFIC, má escolha para cidadãos dos EUA"
          ]
        }
      ]
    },
    {
      "id": "healthcare",
      "title": "Saúde",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "SNS — após obter a autorização de residência, o acesso é gratuito",
            "Seguro privado — Médis, Multicare ~50-100 €/mês por pessoa",
            "Medicare (EUA) — não funciona em PT",
            "Seguro internacional (Cigna, Allianz) — para viagens"
          ]
        }
      ]
    },
    {
      "id": "community",
      "title": "Comunidade americana",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "Embaixada dos EUA em Lisboa: Av. Das Forças Armadas",
            "American Club of Portugal (ACP) — clube social",
            "AMCHAM Portugal (Câmara de Comércio Americana) — networking empresarial",
            "International Christian Fellowship",
            "Grandes comunidades de expatriados — Cascais, Algarve, Lisboa",
            "IRS International: +1 267-941-1000 (para questões FBAR / FATCA / FEIE)"
          ]
        }
      ]
    }
  ],
  "sources": [
    {
      "title": "Embaixada dos EUA em Lisboa",
      "url": "https://pt.usembassy.gov/",
      "kind": "official",
      "language": "en",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "IRS Internacional — FEIE / FBAR",
      "url": "https://www.irs.gov/individuals/international-taxpayers",
      "kind": "official",
      "language": "en",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "Convenção Fiscal EUA-Portugal (IRS)",
      "url": "https://www.irs.gov/businesses/international-businesses/portugal-tax-treaty-documents",
      "kind": "official",
      "language": "en",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "Portal das Finanças — residência",
      "url": "https://www.portaldasfinancas.gov.pt/",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    }
  ],
  "lastVerified": "2026-04-22",
  "verifyIntervalDays": 180
}
