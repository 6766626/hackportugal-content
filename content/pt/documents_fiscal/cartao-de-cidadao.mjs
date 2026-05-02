export default {
  "editorialVoice": "hackportugal",
  "id": "cartao-de-cidadao",
  "categoryId": "documents_fiscal",
  "title": "Cartão de Cidadão — para residentes e cidadãos",
  "tldr": "O Cartão de Cidadão (CC) é um documento de identificação multifuncional: identificação em Portugal + NIF + NISS + Número de Utente + documento biométrico + assinatura digital. É obrigatório para cidadãos portugueses; os residentes estrangeiros recebem um equivalente — Título de Residência (cartão de autorização de residência). Substituição/renovação — no IRN ou numa Loja de Cidadão.",
  "tags": [
    "cc",
    "documentos",
    "cartão de cidadão"
  ],
  "estimatedReadMinutes": 4,
  "steps": [
    {
      "id": "for-whom",
      "title": "Quem recebe o CC",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "Cidadãos portugueses (obrigatório)",
            "Filhos de cidadãos portugueses (desde o nascimento — cartão temporário de recém-nascido → CC a partir dos 6-9 meses)",
            "Os residentes estrangeiros NÃO recebem CC — têm Título de Residência (cartão de autorização de residência) com a mesma funcionalidade para a maioria dos fins"
          ]
        },
        {
          "kind": "warning",
          "text": "Se se naturalizou → recebe o CC em vez da autorização de residência. O processo está descrito abaixo."
        }
      ]
    },
    {
      "id": "functions",
      "title": "Funções do CC",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "Documento de identificação para deslocações em Portugal e dentro da UE (substitui o passaporte no espaço Schengen)",
            "Contém o NIF (número fiscal)",
            "Contém o NISS (número da Segurança Social)",
            "Contém o Número de Utente (número de paciente do SNS)",
            "Documento biométrico: impressões digitais, fotografia",
            "Chip para assinatura digital (requer leitor USB ou telemóvel com NFC)",
            "PIN para activação",
            "Votação em eleições (para cidadãos portugueses)",
            "Identificação em cooperativas, bibliotecas, escolas"
          ]
        }
      ]
    },
    {
      "id": "first-time",
      "title": "Primeira emissão",
      "content": [
        {
          "kind": "substeps",
          "items": [
            {
              "id": "f1",
              "title": "Para recém-nascidos",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Registo na Conservatória do Registo Civil → emissão automática do CC por 5 anos. Nos primeiros 6-9 meses — cartão temporário de recém-nascido."
                }
              ]
            },
            {
              "id": "f2",
              "title": "Para cidadãos naturalizados",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Após a obtenção da cidadania (aprovação pelo IRN) → marcação para o CC no IRN ou numa Loja de Cidadão → biometria + fotografia → o CC chega em 30 dias."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "renew",
      "title": "Renovação / substituição",
      "content": [
        {
          "kind": "substeps",
          "items": [
            {
              "id": "r1",
              "title": "Quando renovar",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "O CC é válido por 10 anos (5 para crianças). 6 meses antes do fim da validade — marque a renovação."
                }
              ]
            },
            {
              "id": "r2",
              "title": "Como",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Marcação em ePortugal.gov.pt → escolher Espaço Cidadão ou IRN → comparecer com o CC actual + comprovativo de morada → biometria + fotografia → 30 dias para receber."
                }
              ]
            },
            {
              "id": "r3",
              "title": "Perda / roubo",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "1) Bloquear através da Linha 211 950 500 (24/7). 2) Participação na PSP (auto policial). 3) Pedido de substituição no IRN com o auto policial."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "digital",
      "title": "Vertente digital do CC",
      "content": [
        {
          "kind": "paragraph",
          "text": "CC = chave de acesso aos portais (autenticação.gov, Finanças, AIMA, Segurança Social). É necessário um leitor (USB 20-30 €) ou um telemóvel compatível com NFC."
        },
        {
          "kind": "paragraph",
          "text": "Como alternativa para estrangeiros sem CC — Chave Móvel Digital (ver guia separado). A CMD dá acesso digital semelhante sem cartão físico."
        }
      ]
    }
  ],
  "costs": [
    {
      "label": "Primeira emissão (crianças e jovens até aos 25)",
      "amountEUR": 15
    },
    {
      "label": "Renovação (normal)",
      "amountEUR": 18,
      "note": "IRN 2026"
    },
    {
      "label": "Urgente (3 dias)",
      "amountEUR": 33
    },
    {
      "label": "Extremamente urgente (no próprio dia / dia seguinte)",
      "amountEUR": 53
    },
    {
      "label": "Desconto online",
      "amountEUR": 0,
      "note": "−10% na renovação online"
    },
    {
      "label": "Substituição por perda",
      "amountEUR": 20
    }
  ],
  "sources": [
    {
      "title": "IRN — Cartão de Cidadão",
      "url": "https://irn.justica.gov.pt/cartao-cidadao",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "ePortugal — Renovar CC",
      "url": "https://eportugal.gov.pt/cidadaos/-/informacoes/renovar-o-cartao-de-cidadao",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "Autenticação.gov — CC digital",
      "url": "https://www.autenticacao.gov.pt/cc-portuguese-citizen-card",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    }
  ],
  "lastVerified": "2026-04-22",
  "verifyIntervalDays": 365
}
