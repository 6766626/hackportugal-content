export default {
  "editorialVoice": "hackportugal",
  "id": "customs-parcels",
  "categoryId": "daily_life",
  "title": "Desalfandegamento de encomendas de países fora da UE — como pagar menos",
  "tldr": "Desde 01.07.2021, o limite de 22 € foi abolido — atualmente qualquer encomenda de países fora da UE está sujeita a IVA de 23 % + direitos aduaneiros, se o valor for superior a 150 €. O processo é feito através do destinatário: os CTT ou a transportadora (DHL, FedEx, UPS) enviam um SMS com uma ligação para pagamento. Pagamento online: cartão, MB WAY, Multibanco. A taxa de processamento dos CTT é cerca de 1,80 €, nas transportadoras é 10–40 €. Através do Portal das Alfândegas é mais barato, mas mais complicado.",
  "tags": [
    "alfândega",
    "encomenda",
    "IVA",
    "CTT",
    "DHL"
  ],
  "estimatedReadMinutes": 6,
  "steps": [
    {
      "id": "legal-basis",
      "title": "Enquadramento jurídico 2026",
      "content": [
        {
          "kind": "paragraph",
          "text": "Diretiva EU 2006/112 (VAT) + Regulamento 952/2013 (Código Aduaneiro). Em Portugal, a implementação é feita pelo Código do IVA, Código das Alfândegas."
        },
        {
          "kind": "checklist",
          "items": [
            "🎁 Presente de particular para particular: isenção até 45 € (se não for comercial)",
            "📦 Encomenda comercial < 150 €: apenas IVA 23 %, sem direitos aduaneiros",
            "📦 Comercial > 150 €: IVA + direitos aduaneiros (0–17 % conforme o código HS)",
            "📄 Qualquer encomenda com mercadorias proveniente de países fora da UE deve ser declarada através de IOSS ou importação",
            "🌍 Exceção: zonas especiais da Madeira e dos Açores — IVA reduzido (16 % / 9 %)",
            "🍷 Impostos especiais de consumo (tabaco, álcool, perfumaria) — além do IVA"
          ]
        }
      ]
    },
    {
      "id": "how-ctt-works",
      "title": "Como uma encomenda passa pelos CTT",
      "content": [
        {
          "kind": "substeps",
          "items": [
            {
              "id": "c1",
              "title": "1. Entrada na alfândega",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "A encomenda chega ao centro de triagem dos CTT em Cabo Ruivo (Lisboa). A alfândega avalia-a com base na fatura e no formulário CN22/CN23."
                }
              ]
            },
            {
              "id": "c2",
              "title": "2. Notificação",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "O destinatário recebe SMS + email com uma ligação para o Portal CTT, onde é indicado o estado aduaneiro + o montante a pagar."
                }
              ]
            },
            {
              "id": "c3",
              "title": "3. Pagamento",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "Métodos: cartão, MB WAY, Multibanco, SIBS MB",
                    "Taxa de processamento dos CTT: 1,80 €",
                    "Prazo de pagamento: 10 dias, depois devolução ao remetente",
                    "Confirmação de identidade — digitalização do seu Cartão de Cidadão/autorização de residência"
                  ]
                }
              ]
            },
            {
              "id": "c4",
              "title": "4. Entrega",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Os CTT entregam em casa (mediante assinatura) ou numa Loja CTT (ponto postal mais próximo). Prazo após pagamento — 1–3 dias."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "couriers",
      "title": "Transportadoras (DHL, FedEx, UPS) — mais caro, mas mais rápido",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "💵 Taxa de processamento: DHL 15–40 €, FedEx 10–30 €, UPS 15–25 €",
            "⚡ Muitas vezes o desalfandegamento já está feito antes da chegada",
            "📞 A transportadora liga se forem necessários documentos",
            "🏃 Prazo — cerca de 24–48 horas após a chegada a Portugal",
            "⚠️ Uma encomenda comercial exige fatura com código HS"
          ]
        }
      ]
    },
    {
      "id": "diy",
      "title": "Desalfandegamento por conta própria — mais barato",
      "content": [
        {
          "kind": "paragraph",
          "text": "Através do Portal Aduaneiro em portaldasfinancas.gov.pt → «Alfândegas» → «Declaração H7» (para encomendas < 150 €)."
        },
        {
          "kind": "checklist",
          "items": [
            "📝 Preencher a H7: descrição do produto, código CN (HS), valor, país",
            "💰 O sistema calcula o IVA + os direitos aduaneiros",
            "💳 Pagamento através de Multibanco",
            "📋 Imprimir a confirmação",
            "📬 Entregar no local de receção (Loja CTT, armazém aduaneiro)",
            "💶 Poupança: 1,80 € nos CTT, mas 30–40 € na DHL/UPS"
          ]
        },
        {
          "kind": "warning",
          "text": "Exige português e compreensão dos códigos HS. Para casos complexos, é melhor deixar o processo aos CTT ou à transportadora."
        }
      ]
    },
    {
      "id": "common",
      "title": "Perguntas frequentes",
      "content": [
        {
          "kind": "substeps",
          "items": [
            {
              "id": "q1",
              "title": "Presente de um amigo — tenho de pagar?",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Formalmente, aplica-se uma isenção até 45 €, mas apenas se o remetente tiver indicado «GIFT» no CN22/CN23 e o valor declarado for < 45 €. Acima disso — regras normais."
                }
              ]
            },
            {
              "id": "q2",
              "title": "AliExpress / Shein — pagam o IVA?",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Grandes marketplaces, após o IOSS (desde 2021), pagam o IVA no momento da compra. Se vir o campo «VAT included» no recibo — está tudo ok, não paga em Portugal. Se não, os CTT notificam-no."
                }
              ]
            },
            {
              "id": "q3",
              "title": "Livros / tecnologia / roupa — direitos aduaneiros diferentes?",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "Livros: 0 % de direitos aduaneiros, IVA 6 %",
                    "Roupa: até 12 % de direitos aduaneiros + IVA 23 %",
                    "Eletrónica: 0–4 % de direitos aduaneiros + IVA 23 %",
                    "Joalharia: 2,5 % de direitos aduaneiros + IVA 23 %",
                    "Cosméticos: 0 % de direitos aduaneiros + IVA 23 %",
                    "Brinquedos: 0–4,7 % de direitos aduaneiros + IVA 23 %"
                  ]
                }
              ]
            },
            {
              "id": "q4",
              "title": "A encomenda não chegou / perdeu-se",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "CTT — seguimento + reclamação através do Livro de Reclamações. Transportadoras — seguro. Prazo de investigação — 30–60 dias."
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "costs": [
    {
      "label": "IVA sobre mercadoria > 0 €",
      "amountEUR": 0,
      "note": "23 % do valor + envio"
    },
    {
      "label": "Taxa de processamento dos CTT",
      "amountEUR": 1.8
    },
    {
      "label": "Processamento DHL/UPS/FedEx",
      "amountEURMin": 10,
      "amountEURMax": 40
    },
    {
      "label": "Direitos aduaneiros (mercadoria > 150 €)",
      "amountEUR": 0,
      "note": "0–17 % conforme HS"
    }
  ],
  "sources": [
    {
      "title": "Portal das Finanças — Alfândegas",
      "url": "https://www.portaldasfinancas.gov.pt/at/html/index.html",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "Regulamento (UE) 952/2013 — Código Aduaneiro",
      "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32013R0952",
      "kind": "law",
      "language": "en",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "CTT — Encomendas do estrangeiro",
      "url": "https://www.ctt.pt/",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "ePortugal — Importar bens de países fora da UE",
      "url": "https://eportugal.gov.pt/",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    }
  ],
  "lastVerified": "2026-04-22",
  "verifyIntervalDays": 365
}
