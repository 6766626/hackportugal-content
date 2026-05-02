export default {
  "editorialVoice": "hackportugal",
  "id": "sns-utente",
  "categoryId": "healthcare",
  "title": "Inscrição no SNS e obtenção do número de utente",
  "tldr": "O número de utente é o número pessoal no SNS. Dá direito a médico de família, internamento hospitalar e receitas comparticipadas. É tratado no Centro de Saúde da área de residência. A autorização de residência é a via principal, mas NÃO a única: estrangeiros com permanência legal (visto, registo de cidadão da UE) podem obter número de utente; pessoas sem autorização de residência que residam em Portugal há >90 dias também têm direito (DL 67/2014). O NISS não é um documento obrigatório universal — alguns Centro de Saúde podem pedi-lo adicionalmente, mas não é uma regra geral do SNS.",
  "tags": [
    "sns",
    "utente",
    "saúde"
  ],
  "estimatedReadMinutes": 5,
  "steps": [
    {
      "id": "what",
      "title": "O que é e para que serve",
      "content": [
        {
          "kind": "paragraph",
          "text": "O número de utente é um identificador de 9 dígitos no SNS. Sem ele, as consultas são pagas como para não residentes."
        },
        {
          "kind": "paragraph",
          "text": "Dá acesso a: médico de família gratuito, consultas, análises, emergência 112, internamento hospitalar, comparticipações na farmácia (até 90% de desconto em receitas), vacinas."
        }
      ]
    },
    {
      "id": "how",
      "title": "Como obter",
      "content": [
        {
          "kind": "substeps",
          "items": [
            {
              "id": "s1",
              "title": "1. Encontrar o seu Centro de Saúde",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Em sns24.gov.pt ou sns.pt através do código postal."
                }
              ]
            },
            {
              "id": "s2",
              "title": "2. Ir presencialmente com os documentos",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "Documento de identificação: autorização de residência / CC / passaporte + visto / registo CRUE para cidadãos da UE",
                    "NIF",
                    "Comprovativo de morada (atestado de residência da Junta de Freguesia, fatura de serviços ou contrato de arrendamento)",
                    "⚠️ NISS — NÃO é um requisito universal do SNS; alguns Centro de Saúde podem pedi-lo adicionalmente, sobretudo se tiver estatuto de trabalhador por conta de outrem ou trabalhador independente"
                  ]
                }
              ]
            },
            {
              "id": "s3",
              "title": "3. Preencher o formulário de inscrição",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "O Centro de Saúde fará a sua inscrição e atribuirá o número de utente. Por vezes é emitido um número temporário; o definitivo chega mais tarde."
                }
              ]
            },
            {
              "id": "s4",
              "title": "4. Obter médico de família",
              "content": [
                {
                  "kind": "timeline",
                  "text": "De imediato até 6 meses, dependendo da região. Em Lisboa/Porto a lista de espera é maior; nas zonas do interior tende a ser mais rápido."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "alternatives",
      "title": "Se ainda não tiver autorização de residência",
      "content": [
        {
          "kind": "paragraph",
          "text": "Nos termos do DL 67/2014 (direito de acesso ao SNS) e da Constituição art. 64, o acesso ao SNS não depende exclusivamente da autorização de residência. Pessoas sem autorização de residência que residam em Portugal há **mais de 90 dias** têm direito a número de utente — para o obter é necessário um atestado de residência da Junta de Freguesia, **confirmando residência há >90 dias** (um comprovativo de morada normal pode não ser suficiente para pessoas sem estatuto legal — a Junta de Freguesia tem em conta testemunhas e a presença efetiva)."
        },
        {
          "kind": "warning",
          "text": "Cuidados médicos urgentes, grávidas, menores de 18 anos, doenças infecciosas (tuberculose, VIH) — o atendimento no SNS é garantido independentemente dos documentos e do estatuto."
        }
      ]
    },
    {
      "id": "private",
      "title": "Em paralelo: seguro de saúde privado",
      "content": [
        {
          "kind": "paragraph",
          "text": "SNS + seguro de saúde privado é uma prática normal. Opções populares: Médis, Multicare (Fidelidade), Tranquilidade. Desde 25 €/mês por um plano básico até 80 €/mês por um plano completo. Cobre clínicas privadas e reduz tempos de espera."
        }
      ]
    }
  ],
  "documents": [
    {
      "title": "Documento de identificação",
      "note": "autorização de residência / CC / passaporte + visto ou CRUE para cidadãos da UE"
    },
    {
      "title": "NIF"
    },
    {
      "title": "Comprovativo de morada",
      "note": "atestado de residência, contrato de arrendamento ou fatura de serviços"
    },
    {
      "title": "NISS",
      "note": "não é universalmente obrigatório; alguns Centro de Saúde podem pedi-lo"
    }
  ],
  "costs": [
    {
      "label": "Inscrição no SNS",
      "amountEUR": 0
    }
  ],
  "timelineDaysMin": 1,
  "timelineDaysMax": 14,
  "sources": [
    {
      "title": "SNS — Portal Oficial",
      "url": "https://www.sns.pt/",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-28"
    },
    {
      "title": "DL 67/2014 — Direito de Acesso ao SNS",
      "url": "https://diariodarepublica.pt/dr/detalhe/decreto-lei/67-2014-25344876",
      "kind": "law",
      "language": "pt",
      "lastRetrieved": "2026-04-28"
    },
    {
      "title": "SNS24 — Portal do Cidadão",
      "url": "https://www.sns24.gov.pt/",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-28"
    },
    {
      "title": "ePortugal — Inscrição no SNS",
      "url": "https://eportugal.gov.pt/cidadaos/-/informacoes/inscrever-se-no-servico-nacional-de-saude-sns-",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-28"
    }
  ],
  "lastVerified": "2026-04-28",
  "verifyIntervalDays": 180
}
