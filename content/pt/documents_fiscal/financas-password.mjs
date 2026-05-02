export default {
  "editorialVoice": "hackportugal",
  "id": "financas-password",
  "categoryId": "documents_fiscal",
  "title": "Palavra-passe do Portal das Finanças (portal fiscal) — ativação e recuperação",
  "tldr": "Depois de obter o NIF, é necessário ativar a palavra-passe para entrar em portaldasfinancas.gov.pt. O pedido é feito online — a palavra-passe chega por correio para a sua morada em 5–10 dias; no caso de morada estrangeira, pode demorar até 3 semanas. Para recuperar, use «Recuperar senha»: o código chegará por correio eletrónico (se estiver configurado) ou por correio normal. Alternativa — Chave Móvel Digital (assinatura eletrónica do Estado) através de autenticacao.gov.pt.",
  "tags": [
    "finanças",
    "palavra-passe",
    "senha",
    "portal"
  ],
  "estimatedReadMinutes": 4,
  "steps": [
    {
      "id": "first-time",
      "title": "Primeira ativação — pedido da palavra-passe",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "💻 Aceder a portaldasfinancas.gov.pt",
            "🔑 Canto superior direito → «Iniciar Sessão» → «Registar-se»",
            "📝 Introduzir NIF, endereço de correio eletrónico, telefone, data de nascimento",
            "✅ Confirmar — o sistema verificará a correspondência com os dados da Autoridade Tributária",
            "📬 A palavra-passe será enviada por correio CTT para a sua morada fiscal REGISTADA",
            "📅 5–10 dias dentro de Portugal, até 3 semanas no estrangeiro"
          ]
        },
        {
          "kind": "warning",
          "text": "A palavra-passe chega à morada que está indicada nas Finanças como o seu domicílio fiscal. Se a morada estiver desatualizada — altere-a primeiro (ver o guia «Alteração da morada fiscal»)."
        }
      ]
    },
    {
      "id": "recovery",
      "title": "Recuperação de palavra-passe esquecida",
      "content": [
        {
          "kind": "substeps",
          "items": [
            {
              "id": "r1",
              "title": "A. Por correio eletrónico",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Se o endereço de correio eletrónico tiver sido indicado no registo: «Esqueceu-se da sua palavra-chave?» → introduza o NIF → o código chega ao correio eletrónico → define uma nova palavra-passe."
                }
              ]
            },
            {
              "id": "r2",
              "title": "B. Por correio",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Se o correio eletrónico não estiver configurado — a palavra-passe é enviada por correio CTT pelo mesmo procedimento da primeira ativação. 5–10 dias."
                }
              ]
            },
            {
              "id": "r3",
              "title": "C. Através da Chave Móvel Digital",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Se tiver a CMD ativada — entre no Portal das Finanças através de «Autenticação.gov» (botão no topo). Não precisa de palavra-passe."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "cmd-alt",
      "title": "Alternativa: Chave Móvel Digital",
      "content": [
        {
          "kind": "paragraph",
          "text": "A CMD é a identificação eletrónica do Estado. A ativação é feita através de autenticacao.gov.pt; é necessário Cartão de Cidadão (para cidadãos portugueses) ou NIF + verificação por SMS (para não residentes). Depois da ativação — entrada em todos os portais do Estado com uma palavra-passe + SMS/notificação push, além de assinatura eletrónica de documentos."
        },
        {
          "kind": "checklist",
          "items": [
            "📱 CMD + PIN + código SMS de utilização única em vez da palavra-passe das Finanças",
            "✍️ Possibilidade de assinar documentos",
            "🔐 Funciona na AIMA, SNS 24, Segurança Social, ePortugal",
            "🆓 Gratuito, válido por tempo indeterminado"
          ]
        }
      ]
    },
    {
      "id": "tips",
      "title": "Conselhos",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "📧 Configure de imediato o correio eletrónico e o número de telemóvel nas Finanças — é uma salvaguarda",
            "🔐 Palavra-passe: 8–16 caracteres, 1 letra maiúscula, 1 algarismo",
            "📂 Guarde a palavra-passe num gestor de palavras-passe — a recuperação por correio demora uma semana",
            "🏠 Atualize a morada fiscal quando mudar de casa — caso contrário, a palavra-passe irá para a morada antiga",
            "👫 Conta familiar: o cônjuge tem um NIF separado e uma palavra-passe separada"
          ]
        }
      ]
    }
  ],
  "sources": [
    {
      "title": "Portal das Finanças — Registo",
      "url": "https://www.portaldasfinancas.gov.pt/at/html/index.html",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "Autenticação.gov — Chave Móvel Digital",
      "url": "https://www.autenticacao.gov.pt/",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "ePortugal — Obter senha de acesso ao Portal das Finanças",
      "url": "https://eportugal.gov.pt/cidadaos/-/informacoes/registar-se-no-portal-das-financas",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    }
  ],
  "lastVerified": "2026-04-22",
  "verifyIntervalDays": 365
}
