export default {
  "editorialVoice": "hackportugal",
  "id": "visa-d-status-check",
  "categoryId": "residence_permit",
  "title": "Verificação do estado do visto D e da marcação na AIMA",
  "tldr": "O visto de residência D é válido por 4 meses / 120 dias dentro das datas indicadas na vinheta do visto (não «a partir da data de entrada») e normalmente permite 2 entradas. Após a entrada, é necessário obter uma marcação na AIMA para recolha de dados biométricos e emissão da autorização de residência. O estado é verificado através do portal AIMA (portal.aima.gov.pt). Para processos iniciados ainda no SEF (antes de outubro de 2023), por vezes é necessário enviar um pedido por correio eletrónico à delegação regional da AIMA. Se não houver marcação 30 dias após a entrada — contactar por correio eletrónico.",
  "tags": [
    "visto",
    "visto d",
    "aima",
    "estado",
    "marcação"
  ],
  "estimatedReadMinutes": 5,
  "steps": [
    {
      "id": "timeline",
      "title": "Cronologia desde a emissão do visto até à autorização de residência",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "1. Recebeu o visto D no consulado — é válido por 4 meses / 120 dias dentro das datas indicadas na vinheta do visto. Normalmente permite 2 entradas. Pode não entrar imediatamente; o importante é entrar dentro do prazo de validade",
            "2. Entrada em Portugal — carimbo no passaporte com a data",
            "3. A AIMA deve, no prazo de 120 dias, atribuir uma marcação para recolha de dados biométricos e obtenção da autorização de residência",
            "4. Historicamente, a própria AIMA atribuía a marcação; atualmente isso não acontece automaticamente — por vezes é necessário iniciar o pedido",
            "5. Na marcação — biometria, verificação dos documentos, assinatura do apostilamento",
            "6. O cartão da autorização de residência chega por correio em 2–4 semanas (por vezes até 90 dias)"
          ]
        },
        {
          "kind": "warning",
          "text": "O fim dos 120 dias sem marcação NÃO o torna automaticamente ilegal — a lei protege-o se fez tudo o que dependia de si. Mas é melhor insistir na obtenção da marcação com antecedência."
        }
      ]
    },
    {
      "id": "portal-aima",
      "title": "1. Verificação através do portal AIMA (canal principal)",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "Aceder a portal.aima.gov.pt",
            "Entrar através da Chave Móvel Digital (assinatura eletrónica do Estado) ou NIF+palavra-passe",
            "Se não tiver CMD — ativar em autenticacao.gov.pt",
            "Secção «Meus Processos» — lista de todos os seus processos",
            "Estados: «Pendente», «Em análise», «Aprovado», «Notificado para entrevista»",
            "A data e o local da marcação aparecem no campo «Agendamento (marcação)»"
          ]
        }
      ]
    },
    {
      "id": "legacy-sef",
      "title": "2. Processos antigos da base do SEF (antes de outubro de 2023)",
      "content": [
        {
          "kind": "paragraph",
          "text": "A maioria dos processos do SEF já foi transferida para o portal AIMA até 2026. Se o seu processo não estiver visível em portal.aima.gov.pt — é provável que ainda não tenha sido transferido, mas a AIMA é obrigada a tratá-lo."
        },
        {
          "kind": "checklist",
          "items": [
            "sef.pt redireciona para aima.gov.pt",
            "Processo antigo sem vestígios no portal — pedido por correio eletrónico à delegação regional da AIMA (ver guia «Como contactar a AIMA»)",
            "No pedido, indicar: nome completo, NIF, N.º do processo (SEF ou AIMA — aquele que tem consigo), data de submissão",
            "A resposta chega em 2–6 semanas"
          ]
        }
      ]
    },
    {
      "id": "no-appointment",
      "title": "Sem marcação 30 dias após a entrada — o que fazer",
      "content": [
        {
          "kind": "substeps",
          "items": [
            {
              "id": "n1",
              "title": "1. Primeiro, o portal",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Verificar novamente o portal AIMA — por vezes a marcação existe, mas sem notificação por correio eletrónico."
                }
              ]
            },
            {
              "id": "n2",
              "title": "2. E-mail para a delegação regional",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Enviar e-mail para lisboa@aima.gov.pt (ou para a sua região) com o assunto «Solicitação de marcação — Visto D». Anexar: visto D (PDF), carimbo de entrada, passaporte, NIF, comprovativo de morada."
                }
              ]
            },
            {
              "id": "n3",
              "title": "3. Após 60 dias — queixa ao Provedor de Justiça",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "O Provedor de Justiça (provedor) aceita queixas online. Na prática, acelera o processo."
                }
              ]
            },
            {
              "id": "n4",
              "title": "4. Imediatamente antes do fim dos 120 dias",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Confirmação escrita do facto de estar à espera, enviada por correio eletrónico. Isto protege-o juridicamente se os 120 dias expirarem sem culpa sua."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "common-issues",
      "title": "Problemas típicos",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "❌ «Processo não encontrado» — erro do sistema, tentar novamente dentro de 24 horas; se não resultar — escrever por correio eletrónico à delegação regional",
            "❌ Marcação para daqui a 6 meses — aceitar como está, a AIMA está sobrecarregada",
            "❌ Marcação noutra cidade — pode pedir transferência por motivo justificado (trabalho, estudos)",
            "❌ Perdeu a senha da marcação — reimpressão no portal ou pedido por e-mail à AIMA",
            "❌ Ultrapassagem dos 120 dias — escrever imediatamente por correio eletrónico + apresentar queixa ao Provedor de Justiça; a lei protege-o"
          ]
        }
      ]
    }
  ],
  "sources": [
    {
      "title": "Portal AIMA — portal.aima.gov.pt",
      "url": "https://portal.aima.gov.pt/",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "AIMA — Visto de residência (visto para obtenção de autorização de residência)",
      "url": "https://aima.gov.pt/",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "Lei 23/2007 — regime de entrada e permanência",
      "url": "https://dre.pt/dre/legislacao-consolidada/lei/2007-34563275",
      "kind": "law",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "ePortugal — Obter autorização de residência",
      "url": "https://eportugal.gov.pt/cidadaos/-/informacoes/obter-autorizacao-de-residencia",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    }
  ],
  "lastVerified": "2026-04-28",
  "verifyIntervalDays": 90
}
