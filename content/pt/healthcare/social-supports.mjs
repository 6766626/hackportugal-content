export default {
  "editorialVoice": "hackportugal",
  "id": "social-supports",
  "categoryId": "healthcare",
  "title": "Apoios sociais em Portugal — RSI, subsídios, prestações",
  "tldr": "Portugal disponibiliza um conjunto alargado de prestações sociais aos residentes: **RSI** (rendimento social de inserção) — mínimo para rendimentos <242 €/mês; **Subsídio de desemprego** — 65% do salário médio até 12-30 meses; **Subsídio de habitação** — até 200 €/mês; **Tarifa Social Energia** — desconto de 33% na electricidade; **habitação social** — renda em função do rendimento. Requisitos: NISS, período contributivo mínimo na Segurança Social (depende da prestação), residência legal.",
  "tags": [
    "rsi",
    "subsídio",
    "apoio social",
    "prestação"
  ],
  "estimatedReadMinutes": 7,
  "steps": [
    {
      "id": "rsi",
      "title": "💰 RSI — Rendimento Social de Inserção",
      "content": [
        {
          "kind": "paragraph",
          "text": "O RSI é uma prestação de base para pessoas / famílias com rendimento abaixo do mínimo. O Estado garante um rendimento mínimo (contrato social «o beneficiário compromete-se a trabalhar, o Estado assegura um rendimento de base»)."
        },
        {
          "kind": "checklist",
          "items": [
            "📊 **Valor**: ~242,30 €/mês para o primeiro adulto (2026, indexado ao valor de referência da Segurança Social). +50% para o cônjuge (~121 €), +30% por criança",
            "🧾 **Condições**: rendimento agregado do agregado familiar < valor-limite; não possuir património significativo; disponibilidade para trabalhar (existe obrigação de procurar trabalho através do IEFP)",
            "📅 **Duração**: 12 meses, renovável todos os anos se as condições se mantiverem",
            "👨‍👩‍👧 **Para estrangeiros**: residência legal em PT ≥ 1 ano (3 anos para cidadãos de fora da EU). Excepção: refugiados, TPD — a partir da data de obtenção do estatuto",
            "📍 **Pedido**: SS Direta → «Prestações» → «Rendimento Social de Inserção», ou num balcão do ISS",
            "⏱️ **Processamento**: 30-60 dias",
            "📋 **Obrigações**: inscrição no IEFP como candidato a emprego, frequência de cursos / entrevistas obrigatórias, não recusar trabalho «adequado»"
          ]
        },
        {
          "kind": "warning",
          "text": "O RSI é incompatível com: subsídio de desemprego, trabalho a tempo completo (>limiar do RSI), património significativo (>4× RSI em conta bancária). Incumprimento das regras = perda do direito durante 2 anos."
        }
      ]
    },
    {
      "id": "unemployment",
      "title": "📉 Subsídio de desemprego",
      "content": [
        {
          "kind": "substeps",
          "items": [
            {
              "id": "u1",
              "title": "Requisitos",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "≥ 360 dias de contribuições para a Segurança Social nos últimos 24 meses",
                    "Despedimento **sem culpa do trabalhador** (art. 381, 387 Código do Trabalho) — redução de pessoal, insolvência, extinção do posto de trabalho",
                    "❌ Demissão voluntária — não dá direito (excepção: circunstâncias pessoais graves)",
                    "❌ Trabalhador independente (recibos verdes) sem cessação de atividade — não está abrangido",
                    "É necessário estar disponível para trabalhar e inscrito no IEFP"
                  ]
                }
              ]
            },
            {
              "id": "u2",
              "title": "Valor e duração",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "**65% do salário médio** dos últimos 12 meses (bruto), máximo ~ 2,5× IAS = 1 342 €/mês (2026)",
                    "Mínimo: 1× IAS = 537,13 €/mês",
                    "A duração depende da idade + carreira contributiva:",
                    "  < 30 anos, 540-720 contribuições: 12-18 meses",
                    "  30-40 anos, 720-1080: 18-24 meses",
                    "  ≥ 50 anos, 1800+: até 30 meses",
                    "Após o fim: Subsídio Social de Desemprego (80% RSI, mais 6-18 meses) se o rendimento familiar for baixo"
                  ]
                }
              ]
            },
            {
              "id": "u3",
              "title": "Pedido",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "**Passo 1**: inscrição no Centro de Emprego (IEFP) como desempregado",
                    "**Passo 2**: na SS Direta — «Prestações» → «Subsídio de desemprego» → preencher",
                    "Ou: através de um balcão do ISS com documentos (contrato de trabalho, carta de despedimento)",
                    "📅 Prazo: no prazo de 90 dias após o despedimento",
                    "⏱️ Pagamento: 30-45 dias de processamento, o dinheiro chega com efeitos retroactivos à data do despedimento"
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "housing",
      "title": "🏠 Habitação — subsídios e habitação social",
      "content": [
        {
          "kind": "substeps",
          "items": [
            {
              "id": "h1",
              "title": "Subsídio de Renda / Porta 65",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "**Porta 65 Jovem**: para jovens dos 18 aos 35 anos — até 200 €/mês de subsídio à renda",
                    "**Apoio ao Arrendamento** (IHRU): para famílias com baixos rendimentos, até 50% da renda",
                    "Requisitos: rendimento familiar ≤ 4× IAS, contrato de arrendamento",
                    "Pedido: ihru.pt → Candidaturas",
                    "Processamento: 2-6 meses"
                  ]
                }
              ]
            },
            {
              "id": "h2",
              "title": "Habitação Social (habitação municipal)",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "Arrendamento de apartamento ao município segundo uma fórmula (rendimento × %)",
                    "Valor: normalmente 20-80 €/mês (depende do rendimento e da dimensão do agregado familiar)",
                    "Lista de espera: 3-10 anos em Lisboa / Porto, mais rápido nas regiões",
                    "Pedido: na Câmara Municipal da área de residência",
                    "Prioridade: famílias numerosas, pessoas com deficiência, pensionistas, vítimas de violência doméstica"
                  ]
                }
              ]
            },
            {
              "id": "h3",
              "title": "Renda Acessível",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Programa para pessoas que trabalham com rendimentos médios e baixos: arrendamento 20-30% abaixo do mercado em edifícios especificamente afectos. Atribuição através do SIGA, orçamento dos municípios."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "energy",
      "title": "⚡ Tarifa Social de Energia",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "Desconto de **33,8%** na electricidade + **10%** no gás",
            "Aplicação automática se estiver numa das seguintes categorias:",
            "  - beneficiário de RSI",
            "  - Subsídio de desemprego",
            "  - Abono de Família 1.º-2.º escalão",
            "  - Pensionista com rendimento < 6 820 €/ano",
            "  - Complemento Solidário para Idosos",
            "EDP / Galp / Endesa — aplicação automática com base nos dados da Segurança Social",
            "Se não for aplicada — pedido através do fornecedor + verificação no site dgeg.gov.pt",
            "Válida continuamente enquanto o estatuto se mantiver"
          ]
        }
      ]
    },
    {
      "id": "other-benefits",
      "title": "🎁 Outras prestações",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "🧒 **Abono de Família**: para crianças < 18 / 24 estudante / 27 pessoa com deficiência. 40-190 €/mês consoante o escalão (ver guia separado)",
            "👶 **Subsídio Parental**: 120-180 dias de licença, 100% / 90% do salário",
            "🎒 **Apoio às despesas escolares**: desconto em manuais, materiais — ISS.gov.pt",
            "🧑‍🎓 **Bolsa de estudo**: para o ensino superior — DGES, 500-5 000 €/ano",
            "♿ **Complemento por Dependência**: para pessoas com deficiência e pessoas que necessitam de cuidados — até 100-200 €/mês",
            "👵 **Complemento Solidário para Idosos (CSI)**: para pensionistas com rendimento < IAS",
            "🧑‍⚕️ **Isenção de taxas moderadoras**: automática para beneficiários de prestações + grávidas, crianças < 18, pensionistas > 65 com baixos rendimentos"
          ]
        }
      ]
    },
    {
      "id": "how-to-apply",
      "title": "📋 Processo geral de pedido",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "1. Entrar na **SS Direta** (seg-social.pt) ou dirigir-se a um balcão do ISS",
            "2. Reunir: Cartão de Cidadão/autorização de residência, NISS, IBAN, comprovativos de rendimento (3-12 meses), composição do agregado familiar, documentos dos dependentes",
            "3. Submeter online ou presencialmente",
            "4. Aguardar a decisão (30-90 dias)",
            "5. Se aprovado — pagamentos automáticos para o IBAN mensalmente",
            "6. Revisão anual — confirmar rendimentos, situação familiar",
            "⚠️ Não oculte rendimentos: a Segurança Social cruza os dados com a autoridade tributária, terá de devolver os pagamentos + coima até 3 vezes o valor"
          ]
        }
      ]
    }
  ],
  "costs": [
    {
      "label": "RSI para o primeiro adulto",
      "amountEUR": 242.3,
      "note": "€/mês 2026"
    },
    {
      "label": "Mínimo do Subsídio desemprego",
      "amountEUR": 537.13,
      "note": "€/mês (1 IAS)"
    },
    {
      "label": "Máximo do Subsídio desemprego",
      "amountEUR": 1342,
      "note": "€/mês (2.5 IAS)"
    },
    {
      "label": "Porta 65 Jovem (renda)",
      "amountEURMin": 100,
      "amountEURMax": 200,
      "note": "€/mês"
    },
    {
      "label": "Habitação social (renda)",
      "amountEURMin": 20,
      "amountEURMax": 80,
      "note": "€/mês"
    },
    {
      "label": "Desconto Tarifa Social energia",
      "amountEUR": 0,
      "note": "33.8% da factura"
    }
  ],
  "sources": [
    {
      "title": "Segurança Social — prestações",
      "url": "https://www.seg-social.pt/",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "IHRU — Apoios ao arrendamento",
      "url": "https://www.ihru.pt/",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "IEFP — Centro de Emprego",
      "url": "https://www.iefp.pt/",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "DGEG — Tarifa Social Energia",
      "url": "https://www.dgeg.gov.pt/",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "Portal65 — Porta 65 Jovem",
      "url": "https://www.portaldahabitacao.pt/",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    }
  ],
  "lastVerified": "2026-04-22",
  "verifyIntervalDays": 180
}
