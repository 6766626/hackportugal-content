export default {
  "editorialVoice": "hackportugal",
  "id": "buying-property",
  "categoryId": "housing_buy",
  "title": "Compra de imóvel em Portugal — passo a passo",
  "tldr": "Os estrangeiros podem comprar imóveis sem restrições. Percurso: NIF → pesquisa → CPCV + sinal 10% → financiamento/verificação jurídica → escritura no notário → registo. Impostos: IMT (1-10% progressivo), IS 0,8%. Custos totais 8-12% além do preço.",
  "tags": [
    "compra",
    "imobiliário",
    "escritura",
    "imt"
  ],
  "estimatedReadMinutes": 8,
  "steps": [
    {
      "id": "preparation",
      "title": "Preparação",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "Obter o NIF",
            "Abrir conta num banco português (ActivoBank, Millennium, Caixa)",
            "Definir o orçamento (preço + ~10% de despesas)",
            "Decidir: pagamento a pronto ou crédito habitação (ver guia separado)",
            "Escolher um advogado — recomendado para não residentes, 500-2000 €"
          ]
        }
      ]
    },
    {
      "id": "search",
      "title": "Pesquisa",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "Idealista.pt — principal agregador",
            "Imovirtual.com",
            "Casa Sapo, Supercasa, ERA, Century 21",
            "OLX Imóveis — frequentemente anúncios de proprietários",
            "Agentes imobiliários — a comissão é paga pelo vendedor (normalmente 5%)"
          ]
        },
        {
          "kind": "warning",
          "text": "Preços em 2026 em Lisboa: 4000-8000 €/m² no centro, 3000-5000 €/m² nos subúrbios. Algarve: 2500-6000 €/m². Norte (Braga, Coimbra): 1500-3000 €/m²."
        }
      ]
    },
    {
      "id": "due-diligence",
      "title": "Verificação jurídica (antes da assinatura)",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "Certidão Permanente Imóvel — situação da propriedade, ónus",
            "Caderneta Predial Urbana — ficha fiscal",
            "Licença de utilização — licença para uso habitacional",
            "Ficha Técnica da Habitação — ficha técnica (para construções posteriores a 2004)",
            "Certificado Energético (CE) — certificado energético (obrigatório)",
            "Ausência de dívidas ao condomínio",
            "Ausência de dívidas de IMI"
          ]
        },
        {
          "kind": "paragraph",
          "text": "Tudo isto é verificado pelo advogado — cerca de 1-2 semanas."
        }
      ]
    },
    {
      "id": "cpcv",
      "title": "CPCV (Contrato Promessa de Compra e Venda)",
      "content": [
        {
          "kind": "paragraph",
          "text": "Contrato preliminar. Mais forte do que uma simples proposta. Vincula ambas as partes."
        },
        {
          "kind": "checklist",
          "items": [
            "Partes + NIF",
            "Descrição do imóvel + número matricial",
            "Preço + forma de pagamento",
            "Sinal 10-20% — entregue ao vendedor",
            "Prazo até à escritura (normalmente 30-90 dias)",
            "Penalizações por rescisão: se o comprador desistir — perde o sinal; se for o vendedor — devolve o sinal × 2"
          ]
        }
      ]
    },
    {
      "id": "escritura",
      "title": "Escritura (acto notarial)",
      "content": [
        {
          "kind": "substeps",
          "items": [
            {
              "id": "e1",
              "title": "1. Preparação dos documentos no notário",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "O notário recolhe certidões actualizadas, verifica as partes e prepara a minuta."
                }
              ]
            },
            {
              "id": "e2",
              "title": "2. Pagamento dos impostos ANTES da escritura",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "IMT — através do Portal das Finanças (portal fiscal), comprovativo para a escritura",
                    "IS 0,8% — automaticamente",
                    "Em caso de crédito habitação — IS sobre o crédito de 0,6%"
                  ]
                }
              ]
            },
            {
              "id": "e3",
              "title": "3. Assinatura",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "No notário. Ambas as partes + intérprete, se necessário. Pagamento ao vendedor por cheque bancário / transferência. O banco liberta os fundos do crédito habitação."
                }
              ]
            },
            {
              "id": "e4",
              "title": "4. Registo na Conservatória do Registo Predial",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Normalmente é feito pelo notário por via electrónica. O direito de propriedade transmite-se com o registo."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "after",
      "title": "Após a compra",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "Notificar as Finanças da alteração de morada (se for habitação própria permanente)",
            "Passar os serviços públicos para o seu nome (EDP, Águas, gás)",
            "O seguro da habitação é obrigatório se houver crédito habitação",
            "IMI (imposto municipal) — pago anualmente em Maio/Agosto, 0,3-0,8% do valor patrimonial tributário",
            "Se tenciona arrendar — registo nas Finanças + possivelmente licença AL para arrendamento de curta duração"
          ]
        }
      ]
    }
  ],
  "costs": [
    {
      "label": "IMT para habitação própria permanente (até 104 261 €)",
      "amountEUR": 0,
      "note": "limiar OE 2026; para habitação não permanente — a partir de 1%"
    },
    {
      "label": "IMT para habitação própria permanente (104 261 € – 142 618 €)",
      "amountEURMin": 0,
      "amountEURMax": 2800,
      "note": "2%"
    },
    {
      "label": "IMT (142 618 € – 194 458 €)",
      "amountEURMin": 2800,
      "amountEURMax": 6900,
      "note": "5%"
    },
    {
      "label": "IMT (194 458 € – 324 058 €)",
      "amountEURMin": 6900,
      "amountEURMax": 18000,
      "note": "7%"
    },
    {
      "label": "IMT (324 058 € – 648 022 €)",
      "amountEURMin": 18000,
      "amountEURMax": 60000,
      "note": "8%"
    },
    {
      "label": "IMT (648 022 €+)",
      "amountEURMin": 40000,
      "amountEURMax": 100000,
      "note": "taxa fixa de 6% ou 7,5% > 1 128 287 €"
    },
    {
      "label": "Jovens compradores até 35 anos (habitação própria permanente ≤ 324 058 €)",
      "amountEUR": 0,
      "note": "IMT+IS 0% ao abrigo do Decreto-Lei 48-A/2024; confirmar as condições (residência, habitação própria permanente, ausência de propriedade anterior, etc.) no texto actualizado"
    },
    {
      "label": "IMT para compradores de jurisdições fiscais offshore",
      "amountEUR": 0,
      "note": "taxa fixa de 10% — independentemente do valor"
    },
    {
      "label": "IS (imposto do selo)",
      "amountEUR": 0,
      "note": "0,8% do valor (para jovens até 35 anos = 0%)"
    },
    {
      "label": "Escritura + notário",
      "amountEURMin": 500,
      "amountEURMax": 1500
    },
    {
      "label": "Registo",
      "amountEURMin": 250,
      "amountEURMax": 400
    },
    {
      "label": "Advogado",
      "amountEURMin": 500,
      "amountEURMax": 2000
    },
    {
      "label": "Seguro da habitação anual",
      "amountEURMin": 150,
      "amountEURMax": 500
    },
    {
      "label": "IMI anual",
      "amountEURMin": 100,
      "amountEURMax": 3000,
      "note": "0,3-0,45% do valor patrimonial tributário; a taxa é fixada pela Câmara Municipal"
    }
  ],
  "timelineDaysMin": 45,
  "timelineDaysMax": 120,
  "sources": [
    {
      "title": "Portal das Finanças — IMT",
      "url": "https://www.portaldasfinancas.gov.pt/",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "IRN — Registo Predial",
      "url": "https://irn.justica.gov.pt/registos/predial",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "ePortugal — Comprar casa",
      "url": "https://eportugal.gov.pt/cidadaos/-/informacoes/comprar-uma-casa",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "ADENE — Certificado Energético",
      "url": "https://www.adene.pt/",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    }
  ],
  "lastVerified": "2026-04-28",
  "verifyIntervalDays": 180
}
