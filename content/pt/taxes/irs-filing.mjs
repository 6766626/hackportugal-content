export default {
  editorialVoice: 'hackportugal',
  id: 'irs-filing',
  categoryId: 'taxes',
  title: 'Entrega do IRS — declaração fiscal de pessoa singular',
  tldr: 'IRS = Imposto sobre o Rendimento das Pessoas Singulares. É entregue anualmente de 1 de abril a 30 de junho no Portal das Finanças.\n\nOs residentes fiscais declaram normalmente o rendimento mundial; há dispensas de entrega ao abrigo do art. 58 CIRS (rendimentos baixos/tributados a taxas liberatórias).\n\nExiste uma versão automática pré-preenchida (IRS Automático) para os casos simples previstos pela AT.',
  tags: ['irs', 'impostos', 'declaração'],
  estimatedReadMinutes: 7,
  recentlyChangedAt: "2026-10-31",
  changeSummary: "Atualizados o estado da redução do IRS e os esclarecimentos da AT de 30 de outubro.",
  pendingLaw: {
    "summary": "A Lei 64-B/2026, de 22 de outubro, autorizou a redução das primeiras seis taxas de IRS. Em 29 de outubro, o Governo aprovou o decreto-lei de execução com efeitos desde 1 de janeiro de 2026. Em 31 de outubro, a sua publicação não foi confirmada nas fontes consultadas: a aprovação em Conselho de Ministros não substitui a norma publicada. A redução das retenções de novembro foi publicada separadamente e esclarecida pelas Circulares AT 5/2026 e 6/2026, de 30 de outubro. Confirme a escala anual na versão publicada do CIRS.",
    "sourceUrl": "https://portugal.gov.pt/gc25/governo/comunicados-do-conselho-de-ministros/comunicado-do-conselho-de-ministros-de-29-de-outubro-de-2026"
  },
  steps: [
    {
      "id": "who",
      "title": "Quem entrega",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "Residentes fiscais em Portugal: permanência >183 dias em qualquer período de 12 meses que comece ou termine no ano, ou residência habitual (art. 16 CIRS). Normalmente entregam, mas há exceções ao abrigo do art. 58 CIRS",
            "Não residentes com rendimentos de Portugal — entregam apenas relativamente aos rendimentos portugueses",
            "Sujeitos NHR/IFICI — entregam com formulários/assinalações específicas"
          ]
        },
        {
          "kind": "warning",
          "text": "Os residentes declaram normalmente o rendimento mundial. NHR/IFICI concedem benefícios segundo as regras do regime, não uma isenção total."
        }
      ]
    },
    {
      "id": "deadline",
      "title": "Prazos",
      "content": [
        {
          "kind": "paragraph",
          "text": "A declaração do ano N é entregue entre 1 de abril e 30 de junho do ano N+1. Independentemente da categoria de rendimento (salário, recibos verdes, rendas, etc.)."
        },
        {
          "kind": "warning",
          "text": "Por entrega fora de prazo — coima normalmente de 150 €–3 750 € (RGIT art. 116), com possível redução em caso de entrega voluntária rápida. Se encontrar um erro — entregue uma declaração de substituição; não entregue dados deliberadamente incorretos."
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
            "Categoria A — rendimentos do trabalho dependente / salário",
            "Categoria B — trabalho independente (recibos verdes)",
            "Categoria E — rendimentos de capitais (dividendos, juros)",
            "Categoria F — rendas de imóveis",
            "Categoria G — mais-valias (venda de ações, criptomoedas)",
            "Categoria H — pensões",
            "Rendimento estrangeiro — no Anexo J"
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
                  "text": "O IRS Automático está disponível apenas para os casos simples previstos pela AT — normalmente para parte da Categoria A/H sem rendimento estrangeiro (Anexo J), sem anexos complexos e sem benefícios. Verificar a elegibilidade — no Portal das Finanças → IRS → IRS Automático."
                }
              ]
            },
            {
              "id": "s2",
              "title": "2. Entrega manual (Modelo 3)",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Se houver fontes adicionais — entrega através do Portal das Finanças → IRS → Entregar. É necessário preencher o Modelo 3 + os anexos necessários (Anexos)."
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
                    "Anexo A — rendimentos do trabalho dependente (Categoria A) e pensões (Categoria H), pagos por entidades pagadoras portuguesas",
                    "Anexo B — recibos verdes (regime simplificado)",
                    "Anexo C — recibos verdes (contabilidade organizada)",
                    "Anexo E — investimentos",
                    "Anexo F — rendas",
                    "Anexo G — mais-valias",
                    "Anexo H — deduções (saúde, educação, alimentação, habitação)",
                    "Anexo J — rendimento estrangeiro"
                  ]
                }
              ]
            },
            {
              "id": "s4",
              "title": "4. Validação e submissão",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Validação automática. Após a submissão — comprovativo de entrega. O estado — no Portal das Finanças."
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
            "Despesas de saúde — 15% até 1 000 €",
            "Educação — 30% até 800 € por agregado familiar (e não por criança)",
            "Despesas gerais familiares (faturas com NIF) — 35% até 250 € por sujeito passivo",
            "Exigência de fatura (restaurantes/hotéis, reparação de automóveis/motociclos, cabeleireiros, veterinários, ginásios, etc.) — 15% do IVA pago, limite global de 250 € por agregado familiar",
            "Rendas de habitação permanente: 15% das despesas elegíveis; limite geral de 900 € para rendimentos de 2026 e 1 000 € a partir de 2027 (artigo 78.º-E do CIRS e artigo 15.º do DL 97/2026). Mantêm-se os limites superiores para rendimentos baixos. É uma dedução à coleta, não um pagamento automático nem um benefício exclusivo do RSAA.",
            "Juros de crédito para habitação própria permanente — 15% até 296 € apenas para contratos até 31.12.2011",
            "PPR — 20% das contribuições: até 400 € (menos de 35 anos), 350 € (35–50), 300 € (mais de 50)"
          ]
        },
        {
          "kind": "paragraph",
          "text": "Para que as deduções sejam consideradas — peça NIF em todas as faturas. O e-Fatura no Portal das Finanças reúne automaticamente as faturas; até ao prazo definido, verifique e classifique as despesas."
        }
      ]
    },
    {
      "id": "nhr-ifici",
      "title": "NHR e IFICI — particularidades",
      "content": [
        {
          "kind": "paragraph",
          "text": "O NHR para quem já está registado mantém-se até ao fim do período de 10 anos: 20% sobre vários rendimentos portugueses de atividades de elevado valor acrescentado; nos rendimentos estrangeiros, o regime depende da categoria e da CDT (não são 0% universais); as pensões estrangeiras para novos NHR — normalmente 10%."
        },
        {
          "kind": "paragraph",
          "text": "O IFICI desde 2024 — taxa de 20% sobre eligible net employment/business income conforme a lista aprovada (Estatuto dos Benefícios Fiscais art. 58-A, Portaria 352/2024/1).\n\nÉ necessário registo na AT/entidade competente (FCT, ANI, Startup Portugal, AICEP/IAPMEI) dentro do prazo estabelecido. Incompatível com NHR. Entrega — através do perfil IFICI + Modelo 3 com assinalação."
        }
      ]
    },
    {
      "id": "november-2026-withholding",
      "title": "Retenção de IRS em novembro de 2026",
      "content": [
        {
          "kind": "paragraph",
          "text": "Entre 1 e 30 de novembro de 2026, no Continente, a retenção sobre salários e pensões corresponde a 50% do valor calculado pelas tabelas do Despacho 233-A/2026, incluindo o subsídio de Natal pago em novembro. Excetuam-se os rendimentos mensais acima do limite superior do penúltimo escalão da tabela de retenção aplicável. Em 1 de dezembro regressa o cálculo habitual; a entidade pagadora pode corrigir retenções de novembro incorretas até ao final de dezembro. Nos Açores, o Despacho 12610-A/2026 estabelece separadamente o mesmo mecanismo sobre as tabelas regionais 1179/2026. Nenhum destes despachos abrange a Madeira. Trata-se de um adiantamento de imposto menor, não de uma redução de 50% do IRS anual."
        }
      ]
    }
  ],
  sources: [
    {
      "title": "Portal das Finanças — IRS",
      "url": "https://www.portaldasfinancas.gov.pt/at/html/index.html",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-05-17"
    },
    {
      "title": "ePortugal — Entregar IRS",
      "url": "https://www.gov.pt/servicos/entregar-o-irs",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-05-17"
    },
    {
      "title": "Código do IRS (Diário da República)",
      "url": "https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1988-34544875",
      "kind": "law",
      "language": "pt",
      "lastRetrieved": "2026-05-17"
    },
    {
      "title": "AT — Dispensa de entrega da declaração de IRS",
      "url": "https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Folhetos_informativos/Documents/Folheto_IRS_Dispensa_Entrega.pdf",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-05-17"
    },
    {
      "title": "Despacho n.º 12523-A/2026 — retenção de IRS em novembro (Continente)",
      "url": "https://diariodarepublica.pt/dr/detalhe/despacho/12523-a-2026-1180337885",
      "kind": "law",
      "language": "pt",
      "lastRetrieved": "2026-10-20"
    },
    {
      "title": "AT — Despacho n.º 12610-A/2026: retenção de IRS em novembro (Açores)",
      "url": "https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/legislacao/diplomas_legislativos/Documents/despacho-12610-a-2026.pdf",
      "kind": "law",
      "language": "pt",
      "lastRetrieved": "2026-10-20"
    },
    {
      "title": "AT — Código do IRS, artigo 68.º: taxas gerais",
      "url": "https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/cirs_rep/Pages/irs68.aspx",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-10-20"
    },
    {
      "title": "Governo — apresentação da proposta de Orçamento do Estado para 2027 (08.10.2026)",
      "url": "https://portugal.gov.pt/pt/gc25/comunicacao/noticias/oe-2027-um-portugal-mais-preparado-com-mais-rendimento-e-investimento",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-10-20"
    },
    {
      "title": "Decreto-Lei n.º 97/2026 — RSAA e medidas fiscais para habitação",
      "url": "https://diariodarepublica.pt/dr/detalhe/decreto-lei/97-2026-1124493227",
      "kind": "law",
      "language": "pt",
      "lastRetrieved": "2026-10-20"
    },
    {
      "title": "Governo — Conselho de Ministros, 29.10.2026",
      "url": "https://portugal.gov.pt/gc25/governo/comunicados-do-conselho-de-ministros/comunicado-do-conselho-de-ministros-de-29-de-outubro-de-2026",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-10-31"
    },
    {
      "title": "Lei 64-B/2026 — autorização legislativa IRS",
      "url": "https://diariodarepublica.pt/dr/detalhe/lei/64-b-2026-1184484177",
      "kind": "law",
      "language": "pt",
      "lastRetrieved": "2026-10-31"
    },
    {
      "title": "AT — Circular 5/2026: retenção no continente em novembro",
      "url": "https://info.portaldasfinancas.gov.pt/pt/atualidades/instrucoesadmin/Paginas/Circular_5_2026.aspx",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-10-31"
    },
    {
      "title": "AT — Circular 6/2026: retenção nos Açores em novembro",
      "url": "https://info.portaldasfinancas.gov.pt/pt/atualidades/instrucoesadmin/Paginas/Circular_6_2026.aspx",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-10-31"
    }
  ],
  lastVerified: '2026-09-25',
  verifyIntervalDays: 180
}
