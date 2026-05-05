export default {
  "editorialVoice": "hackportugal",
  "id": "driving-license-exchange",
  "categoryId": "driving_license",
  "title": "Troca da carta de condução por carta portuguesa",
  "tldr": "Cidadãos da UE/EEE — reconhecimento automático até ao fim da validade da carta (sem troca). CPLP (Brasil, Cabo Verde, etc.) — troca sem exame através do IMT. Cidadãos de países terceiros abrangidos por acordos bilaterais (UA, KZ, MD, etc.) — troca sem exame. Para a Federação Russa e a Bielorrússia, atualmente NÃO há reciprocidade — é necessário fazer novamente a teoria + a prática completas. As cartas ucranianas são reconhecidas durante todo o período da Proteção Temporária (até 04.03.2027). Prazo para a troca após obtenção do estatuto de residente (não UE) — 2 anos (DL 138/2012).",
  "audience": {
    "citizenships": [
      "cplp",
      "thirdCountry"
    ]
  },
  "tags": [
    "carta de condução",
    "imt",
    "troca"
  ],
  "estimatedReadMinutes": 6,
  "variants": [
    {
      "id": "eu",
      "audience": {
        "citizenships": [
          "euEeaSwiss"
        ]
      },
      "tldr": "UE/EEE/Suíça: as cartas são válidas automaticamente em Portugal. Se desejar, pode obter uma carta portuguesa através do registo no IMT. É obrigatório registar a carta no IMT no prazo de 60 dias após obter o estatuto de residente."
    },
    {
      "id": "cplp",
      "audience": {
        "citizenships": [
          "cplp"
        ]
      },
      "tldr": "CPLP (quando exista acordo): troca sem exame. Não é necessária tradução para cartas brasileiras. Prazo de processamento no IMT — 60-120 dias."
    },
    {
      "id": "third-country",
      "audience": {
        "citizenships": [
          "thirdCountry"
        ]
      },
      "tldr": "Países terceiros com acordo bilateral em vigor (Ucrânia desde 2019, entre outros) — troca sem exame. Rússia e Bielorrússia — NÃO há reciprocidade, é necessário fazer novamente a teoria + a prática completas. Cazaquistão/Moldávia/Azerbaijão — confirme a lista atualizada do IMT (imt-ip.pt)."
    }
  ],
  "steps": [
    {
      "id": "deadline",
      "title": "Prazo",
      "content": [
        {
          "kind": "warning",
          "text": "Segundo o Decreto-Lei 138/2012, as cartas estrangeiras (não UE) são válidas em Portugal durante **2 anos a partir do momento em que obtém o estatuto de residente**. Depois disso, a troca ou a reemissão é obrigatória; caso contrário, pode haver coima e infração. Para ucranianos com Proteção Temporária — a validade mantém-se durante todo o período de proteção (até 04.03.2027 ao abrigo do Regulamento EU 2022/1280)."
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
            "Carta estrangeira (original + cópia)",
            "Tradução notarial (para não UE, exceto Brasil)",
            "Passaporte / autorização de residência / Cartão de Cidadão",
            "Atestado médico de uma farmácia acreditada pelo IMT (~30 €)",
            "Declaração do país emissor sobre a validade da carta",
            "Cópia do processo (se tiver havido multas/suspensões anteriormente)"
          ]
        }
      ]
    },
    {
      "id": "process",
      "title": "Processo",
      "content": [
        {
          "kind": "substeps",
          "items": [
            {
              "id": "p1",
              "title": "1. Exame médico",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Numa clínica acreditada pelo IMT. Verificam a visão, a audição e o estado geral de saúde. Emitem o \"Atestado de Aptidão Física e Psíquica\". Validade — 6 meses."
                }
              ]
            },
            {
              "id": "p2",
              "title": "2. Apresentar o pedido no IMT",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Online através de portal.imt-ip.pt ou presencialmente num centro de exames do IMT. Taxa ~30 €."
                }
              ]
            },
            {
              "id": "p3",
              "title": "3. Se houver acordo — aguardar",
              "content": [
                {
                  "kind": "timeline",
                  "text": "60-120 dias. No final — convite para levantar o novo cartão ou receção por correio."
                }
              ]
            },
            {
              "id": "p4",
              "title": "3b. Se não houver acordo — exames",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Teoria sobre o código da estrada + prática de condução com instrutor. Curso numa escola de condução 500-900 €. Exames pagos (~30-50 €)."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "renewal",
      "title": "Renovação/substituição",
      "content": [
        {
          "kind": "paragraph",
          "text": "A carta portuguesa é válida até aos 70 anos; depois disso, há revalidação de 2 em 2 anos. A substituição da categoria B é sem termo (com exames médicos periódicos a partir dos 50 anos)."
        }
      ]
    }
  ],
  "costs": [
    {
      "label": "Exame médico",
      "amountEURMin": 25,
      "amountEURMax": 50
    },
    {
      "label": "Taxa do IMT (troca)",
      "amountEUR": 30
    },
    {
      "label": "Escola de condução + exames (se não houver acordo)",
      "amountEURMin": 600,
      "amountEURMax": 1200
    }
  ],
  "timelineDaysMin": 60,
  "timelineDaysMax": 180,
  "sources": [
    {
      "title": "IMT — Troca de Carta de Condução",
      "url": "https://www.imt-ip.pt/sites/imtt/portugues/Paginas/imtt.aspx",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "ePortugal — Trocar Carta de Condução",
      "url": "https://eportugal.gov.pt/cidadaos/-/informacoes/trocar-a-carta-de-conducao",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    }
  ],
  "lastVerified": "2026-04-22",
  "verifyIntervalDays": 180
}
