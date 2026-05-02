export default {
  "editorialVoice": "hackportugal",
  "id": "d3-highly-qualified",
  "categoryId": "residence_permit",
  "title": "Visto D3 (profissional altamente qualificado)",
  "tldr": "O D3 destina-se a profissionais com ensino superior e contrato numa empresa portuguesa ou internacional. Mínimo de 1,5× o salário médio em Portugal (≈ 2 200 €/mês). Acesso ao IFICI de 20% — APENAS se a actividade constar da lista aprovada de profissões qualificadas (ciência, I&D, universidades, startups); não se aplica a programadores remotos comuns. É tratado através do empregador ou directamente.",
  "audience": {
    "citizenships": [
      "thirdCountry",
      "cplp"
    ]
  },
  "tags": [
    "d3",
    "autorização de residência",
    "altamente qualificado",
    "tic"
  ],
  "estimatedReadMinutes": 6,
  "steps": [
    {
      "id": "who",
      "title": "A quem se aplica",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "Engenheiros de TI, programadores, especialistas em análise de dados",
            "Engenheiros (mecânicos, electrotécnicos, etc.)",
            "Cientistas, investigadores",
            "Consultores, gestores, analistas de alto nível",
            "Profissionais de saúde com diploma (após reconhecimento)"
          ]
        }
      ]
    },
    {
      "id": "requirements",
      "title": "Requisitos",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "Diploma de ensino superior (5+ anos de estudos) com apostila e tradução",
            "Reconhecimento do diploma (obrigatório para algumas especialidades)",
            "Contrato de trabalho com empregador em Portugal",
            "Salário ≥ 1,5× o salário médio em Portugal (aproximadamente 2 200 €/mês em 2026)",
            "Certificado de registo criminal",
            "Seguro de saúde até ao registo no SNS"
          ]
        },
        {
          "kind": "warning",
          "text": "Para o Cartão Azul UE (frequentemente combinado com o D3), o limiar é mais elevado: ≈ 4 400 €/mês."
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
              "id": "s1",
              "title": "1. Encontrar um empregador",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Procure no LinkedIn, Landing.Jobs, ITJobs.pt, NetJobs."
                }
              ]
            },
            {
              "id": "s2",
              "title": "2. Obter um contrato de trabalho",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "O empregador prepara o contrato de trabalho e, muitas vezes, faz o registo na Segurança Social."
                }
              ]
            },
            {
              "id": "s3",
              "title": "3. Pedir o visto no consulado",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "O pedido do visto D3 é feito por si, não pelo empregador. No consulado do país de residência."
                }
              ]
            },
            {
              "id": "s4",
              "title": "4. NIF + entrada + AIMA",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Depois do visto — entrar, obter NIF/NISS, marcar atendimento na AIMA."
                }
              ]
            },
            {
              "id": "s5",
              "title": "5. Pedir o regime fiscal IFICI (se a actividade for elegível)",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "O IFICI aplica-se apenas a rendimentos de **actividade qualificada constante da lista aprovada** (ciência, I&D, universidades, startups ao abrigo do visto startup). Nem todos os titulares de D3 obtêm automaticamente o IFICI — é necessário cumprir os critérios da profissão. O prazo para o pedido é até **15 de Janeiro** do ano seguinte ao ano em que se tornou residente (Portaria 352/2024). IRS de 20% sobre rendimentos qualificados durante 10 anos."
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
      "label": "Visto consular",
      "amountEUR": 90
    },
    {
      "label": "AIMA — atendimento + análise",
      "amountEUR": 133,
      "note": "a partir de 01.03.2026"
    },
    {
      "label": "AIMA — autorização de residência (art. 75)",
      "amountEUR": 307.2,
      "note": "a partir de 01.03.2026"
    },
    {
      "label": "Reconhecimento do diploma",
      "amountEURMin": 100,
      "amountEURMax": 300,
      "note": "se necessário"
    }
  ],
  "timelineDaysMin": 60,
  "timelineDaysMax": 120,
  "sources": [
    {
      "title": "Vistos MNE — visto D3 para profissionais altamente qualificados",
      "url": "https://vistos.mne.gov.pt/pt/vistos-nacionais/informacoes-gerais/tipos-de-visto",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "AIMA — autorização de residência para profissionais altamente qualificados",
      "url": "https://aima.gov.pt/pt/",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "Portaria do IFICI — lista de profissões qualificadas",
      "url": "https://diariodarepublica.pt/dr/pesquisa?q=IFICI",
      "kind": "law",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    }
  ],
  "lastVerified": "2026-04-28",
  "verifyIntervalDays": 180
}
