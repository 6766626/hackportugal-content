export default {
  "editorialVoice": "hackportugal",
  "id": "ctt-post",
  "categoryId": "daily_life",
  "title": "CTT — correios de Portugal",
  "tldr": "CTT = correios públicos portugueses (como os correios nacionais noutros países). Há estações em todas as cidades, serviços bancários Banco CTT, encomendas, seguimento. Para a AIMA, muitas vezes é necessária uma Carta Registada com Aviso de Receção. Encomendas vindas da UE não passam pela alfândega; vindas de países fora da UE — declaração + direitos aduaneiros, se o valor for superior a 150 €.",
  "tags": [
    "ctt",
    "correios",
    "encomendas"
  ],
  "estimatedReadMinutes": 4,
  "steps": [
    {
      "id": "services",
      "title": "Serviços dos CTT",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "Carta Normal — carta normal, 0,70 € em Portugal / 1,25 € na UE",
            "Carta Registada — carta registada com número para seguimento",
            "Carta com Aviso de Receção — carta registada + comprovativo de receção (obrigatório para a AIMA em alguns casos)",
            "Encomenda — encomenda até 30 kg em Portugal, até 20 kg internacional",
            "EMS / Express — entrega urgente",
            "CTT Expresso — entrega expresso, no dia seguinte",
            "CTT Pay — pagamentos de serviços, multas, impostos",
            "CTT Loja Gigante — loja online (produtos por correio sem encomendar do estrangeiro)"
          ]
        }
      ]
    },
    {
      "id": "parcels",
      "title": "Encomendas",
      "content": [
        {
          "kind": "substeps",
          "items": [
            {
              "id": "p1",
              "title": "Da UE",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Sem alfândega, sem direitos aduaneiros. Chegam como encomendas normais. Entrega em 2–7 dias, consoante o país."
                }
              ]
            },
            {
              "id": "p2",
              "title": "De países fora da UE (Federação Russa, Brasil, EUA, China)",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Declaração aduaneira. Limiares:"
                },
                {
                  "kind": "checklist",
                  "items": [
                    "Até 22 € — sem IVA nem direitos aduaneiros (antes; agora REVOGADO desde 2021)",
                    "Qualquer encomenda: 23% de IVA",
                    "A partir de 150 € — direitos aduaneiros adicionais",
                    "Os CTT enviam SMS/e-mail com o montante a pagar → paga online ou no momento da receção",
                    "Declaração para a alfândega através do Balcão Único (balcaounico.dgav.pt) ou da aplicação CTT"
                  ]
                }
              ]
            },
            {
              "id": "p3",
              "title": "Seguimento",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Seguimento em ctt.pt pelo número. Envios internacionais — também no site de origem (17track.net para envios agregados)."
                }
              ]
            },
            {
              "id": "p4",
              "title": "Entrega falhada",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Se não estiver ninguém em casa — deixam um aviso. Levantar na Loja CTT mais próxima no prazo de 7 dias (caso contrário, é devolvida ao remetente)."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "sending",
      "title": "Envio para países da CEI",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "📦 Para a Federação Russa — entrega em 2–4 semanas, funciona. Preços a partir de 15 € por uma encomenda pequena",
            "📦 Para a Bielorrússia — funciona, 3–5 semanas",
            "📦 Para a Ucrânia — funciona, 2–4 semanas",
            "📦 Para o Cazaquistão — funciona, 4–6 semanas",
            "⚠️ Nada de dinheiro, criptomoedas, documentos da Federação Russa/Bielorrússia (podem ser confiscados na alfândega)",
            "⚠️ A declaração é obrigatória para todas as encomendas fora da UE"
          ]
        }
      ]
    },
    {
      "id": "alternatives",
      "title": "Estafetas privados",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "DHL Express — rápido, caro (35–80 € por entrega internacional)",
            "UPS — 30–60 €, dia seguinte na UE",
            "FedEx — 30–70 €",
            "GLS — entrega económica na UE, 15–30 €",
            "SEUR / Correos Express — Espanha / Portugal",
            "InPost — cacifos automáticos para encomendas (em crescimento em Portugal)"
          ]
        }
      ]
    },
    {
      "id": "retention",
      "title": "Retenção de correio / reencaminhamento",
      "content": [
        {
          "kind": "paragraph",
          "text": "Ao mudar de casa, pode pedir o reencaminhamento do correio através dos CTT (Mudança de Morada) por 15 €/3 meses. Ou a retenção (Retenção) — guardam o correio na estação e o utilizador levanta-o."
        }
      ]
    }
  ],
  "sources": [
    {
      "title": "CTT — oficial",
      "url": "https://www.ctt.pt/",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "AT — alfândega / importação de encomendas",
      "url": "https://www.portaldasfinancas.gov.pt/",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    }
  ],
  "lastVerified": "2026-04-22",
  "verifyIntervalDays": 365
}
