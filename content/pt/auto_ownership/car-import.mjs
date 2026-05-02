export default {
  "editorialVoice": "hackportugal",
  "id": "car-import",
  "categoryId": "auto_ownership",
  "title": "Importação de automóvel para Portugal",
  "tldr": "Para residentes, existe a isenção «transferência de residência» — importação sem ISV sob certas condições: ter sido proprietário do automóvel durante ≥ 6 meses antes da mudança, ter residido no país anterior durante ≥ 12 meses, apresentar os documentos no prazo de 12 meses após se tornar residente. Caso contrário — ISV integral (desalfandegamento) + IUC anualmente.",
  "tags": [
    "automóvel",
    "desalfandegamento",
    "ISV",
    "matrícula"
  ],
  "estimatedReadMinutes": 7,
  "steps": [
    {
      "id": "options",
      "title": "Duas vias",
      "content": [
        {
          "kind": "substeps",
          "items": [
            {
              "id": "o1",
              "title": "A. Isenção (transferência de residência) — sem ISV",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "Torna-se residente em Portugal (obteve autorização de residência / CRUE)",
                    "Foi proprietário do automóvel durante ≥ 6 meses antes da mudança",
                    "Residia no país de origem há ≥ 12 meses",
                    "Apresentar os documentos no prazo de 12 meses a contar da data em que se tornou residente",
                    "O automóvel não é vendido durante 12 meses após a importação",
                    "Aplica-se apenas a UM automóvel por pessoa"
                  ]
                }
              ]
            },
            {
              "id": "o2",
              "title": "B. Importação normal — com ISV",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Se as condições da isenção não forem cumpridas — ISV integral (Imposto sobre Veículos). É calculado com base na cilindrada + CO2 + idade. Para um automóvel novo pode ser 5 000-30 000 €. Para um automóvel eléctrico — gratuito."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "documents",
      "title": "Documentos",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "Documento original do veículo / livrete (normalmente apostila + tradução)",
            "Passaporte + autorização de residência",
            "NIF",
            "Comprovativo de morada em Portugal",
            "«Carta Verde» válida",
            "Factura de compra (se o automóvel for novo ou tiver sido comprado recentemente)",
            "Comprovativo de residência no estrangeiro durante ≥ 12 meses (CRUE/autorização de residência no país anterior, facturas, contrato de arrendamento)",
            "Certificado de Conformidade (CoC) do fabricante — para automóveis da UE"
          ]
        }
      ]
    },
    {
      "id": "process",
      "title": "Passo a passo",
      "content": [
        {
          "kind": "substeps",
          "items": [
            {
              "id": "s1",
              "title": "1. Entrada em Portugal",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Entrar com o automóvel com as matrículas actuais. Notificar a Autoridade Tributária (serviço fiscal) no prazo de 20 dias através do e-AT."
                }
              ]
            },
            {
              "id": "s2",
              "title": "2. Inspecção técnica (IPO)",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Num dos centros de IPO. ~40 €. Obter o certificado B (para automóvel não registado)."
                }
              ]
            },
            {
              "id": "s3",
              "title": "3. Registo no IMT",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Apresentar os documentos para atribuição de matrícula portuguesa (matrícula). Através do portal do IMT ou de uma Loja de Cidadão."
                }
              ]
            },
            {
              "id": "s4",
              "title": "4. ISV — pagamento ou isenção",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Se houver isenção — declarar a importação e obter a isenção. Se não — calcular no portal das Finanças e pagar."
                }
              ]
            },
            {
              "id": "s5",
              "title": "5. Receber o Documento Único Automóvel (documento do veículo)",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Documento único = documento do veículo + registo. Chega por correio entre o 10.º e o 30.º dia."
                }
              ]
            },
            {
              "id": "s6",
              "title": "6. Substituir as matrículas",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Encomendar matrículas portuguesas (~50 €). Instalar. A partir daí, o automóvel fica totalmente no sistema português."
                }
              ]
            },
            {
              "id": "s7",
              "title": "7. Contratar seguro português",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Mudar para um seguro português (Tranquilidade, Liberty, Fidelidade, etc.). A antiga «Carta Verde» deixa de ser relevante."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "annual",
      "title": "Obrigações anuais",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "IUC (Imposto Único de Circulação) — imposto anual, por motor + CO2. 30-500 €/ano",
            "Seguro — 250-700 €/ano",
            "IPO (inspecção técnica) — de 2 em 2 anos para automóveis até 8 anos, anualmente para os mais antigos",
            "Via Verde (pagamento de portagens) — opcional"
          ]
        }
      ]
    }
  ],
  "costs": [
    {
      "label": "IPO (inspecção técnica)",
      "amountEUR": 40
    },
    {
      "label": "Registo IMT + DUA",
      "amountEURMin": 55,
      "amountEURMax": 80
    },
    {
      "label": "Matrículas",
      "amountEURMin": 30,
      "amountEURMax": 80
    },
    {
      "label": "ISV (se sem isenção)",
      "amountEURMin": 500,
      "amountEURMax": 20000,
      "note": "por cilindrada/CO2/idade"
    },
    {
      "label": "IUC anual",
      "amountEURMin": 30,
      "amountEURMax": 500
    }
  ],
  "timelineDaysMin": 10,
  "timelineDaysMax": 60,
  "sources": [
    {
      "title": "Portal das Finanças (portal fiscal) — ISV e transferência de residência",
      "url": "https://www.portaldasfinancas.gov.pt/",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "IMT — Registo de veículo",
      "url": "https://www.imt-ip.pt/sites/imtt/portugues/Paginas/imtt.aspx",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "ePortugal — Importar veículo",
      "url": "https://eportugal.gov.pt/cidadaos/-/informacoes/importar-um-veiculo-para-portugal",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    }
  ],
  "lastVerified": "2026-04-22",
  "verifyIntervalDays": 180
}
