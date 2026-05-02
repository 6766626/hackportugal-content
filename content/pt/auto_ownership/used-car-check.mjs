export default {
  "editorialVoice": "hackportugal",
  "id": "used-car-check",
  "categoryId": "auto_ownership",
  "title": "Verificação de automóveis usados antes da compra em Portugal",
  "tldr": "Cinco verificações antes da compra de um carro usado: (1) IMT online — coincidência DUA, ausência de penhoras, créditos, (2) Finanças — IUC sem dívidas, (3) IPO recente de inspeção técnica, (4) Carfax — equivalente Carvertical para histórico, (5) inspeção numa oficina independente. Por cerca de 50 € evitará a compra de um carro com dívidas ou defeitos ocultos que depois se tornarão seus.",
  "tags": [
    "carro usado",
    "verificação",
    "compra",
    "dua"
  ],
  "estimatedReadMinutes": 5,
  "steps": [
    {
      "id": "check-imt",
      "title": "1. IMT — registo oficial",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "💻 imt-ip.pt → «Veículos» → «Registo Automóvel»",
            "🔍 Introduza a matrícula",
            "📋 Mostrará: proprietário (último), data de registo, classe, estado",
            "🔒 «Penhora» — bandeira vermelha, não compre",
            "💰 «Reserva de propriedade» — significa que o carro está em crédito; pode comprar, mas apenas após o encerramento da reserva",
            "⚠️ Alguns dados estão disponíveis apenas no Serviço de Finanças (departamento de impostos) com CC",
            "💶 Custo: certidão online 8 € (Certidão Automóvel)"
          ]
        }
      ]
    },
    {
      "id": "check-finances",
      "title": "2. Finanças — IUC e dívidas",
      "content": [
        {
          "kind": "paragraph",
          "text": "O vendedor é obrigado a apresentar a Declaração sem dívidas de IUC e IMT dos últimos 3 anos. Solicita-se no Portal das Finanças → «Certidões» → «Certidão de Não Dívida»."
        },
        {
          "kind": "checklist",
          "items": [
            "Se o IUC não for pago — a dívida passa para si",
            "Exija comprovativo dos últimos 3 anos",
            "Verifique também as multas — através da CGA / Finanças"
          ]
        }
      ]
    },
    {
      "id": "check-ipo",
      "title": "3. IPO (inspeção técnica) e DUA",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "🧾 DUA (Documento Único Automóvel) — documento principal",
            "🔎 O VIN do carro deve coincidir com o DUA",
            "📅 O último IPO não deve ter mais de um ano (recente — é o melhor sinal)",
            "📋 Protocolo IPO sem «deficiências graves»",
            "🛣️ Quilometragem real — verificar comparando os protocolos IPO de diferentes anos",
            "⚠️ Se o IPO não tiver sido realizado há muito tempo — comprar com a condição «passar IPO primeiro»"
          ]
        }
      ]
    },
    {
      "id": "history-check",
      "title": "4. História e Carvertical",
      "content": [
        {
          "kind": "paragraph",
          "text": "Carvertical (carvertical.com), CarfaxPT, Autobiz — serviços pagos de verificação de histórico por VIN. Mostram acidentes, quilometragem, proprietários em todos os países da UE."
        },
        {
          "kind": "checklist",
          "items": [
            "💶 15–30 € por relatório",
            "🔍 Quilometragem por datas (manipulação visível)",
            "💥 Acidentes e reclamações de seguros",
            "🌍 Países anteriores de registo",
            "🔧 Reparações em grandes redes (Bosch, Norauto)",
            "🚨 «Salvage» / «Total loss» — bandeira vermelha"
          ]
        }
      ]
    },
    {
      "id": "oficina-check",
      "title": "5. Inspeção na oficina",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "🔧 Leve para diagnóstico: 40–80 € numa oficina independente",
            "📋 Inspeção completa: motor, transmissão, suspensão, travões, ferrugem da carroçaria",
            "💻 Diagnóstico OBD — códigos de erro do ECU",
            "🛞 Pneus, padrão, data de fabrico",
            "🪟 Carroçaria para repintura, massa (medição com espessímetro)",
            "❄️ AC funciona no verão / inverno",
            "🧰 Todos os botões / eletricidade funcionam",
            "🗒️ Peça um relatório por escrito — será útil na negociação"
          ]
        }
      ]
    },
    {
      "id": "purchase",
      "title": "Formalização da compra",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "📝 Contrato de compra e venda — 2 exemplares com os dados de todas as partes",
            "🆔 Ambas as partes: CC/Autorização de residência, NIF, IBAN",
            "📋 Entrega e receção do DUA + chaves + reservas",
            "💶 Pagamento — transferência bancária com referência «compra viatura matrícula X»",
            "🏢 Registo de propriedade no IRN (irn.justica.gov.pt) — 45 € + formalização",
            "📅 Prazo de registo da alteração — 60 dias a partir da assinatura",
            "🛡️ Seguro em seu nome a partir do dia da entrega",
            "🧾 IUC já não é recalculado — o ano atual fica a cargo do vendedor, o seguinte — a seu cargo"
          ]
        }
      ]
    }
  ],
  "costs": [
    {
      "label": "Certidão Automóvel IMT",
      "amountEUR": 8
    },
    {
      "label": "Relatório Carvertical",
      "amountEURMin": 15,
      "amountEURMax": 30
    },
    {
      "label": "Oficina de diagnóstico",
      "amountEURMin": 40,
      "amountEURMax": 80
    },
    {
      "label": "Registo de propriedade IRN",
      "amountEUR": 45
    },
    {
      "label": "TOTAL de verificações antes da transação",
      "amountEURMin": 60,
      "amountEURMax": 120
    }
  ],
  "sources": [
    {
      "title": "IMT — Registo Automóvel",
      "url": "https://www.imt-ip.pt/sites/IMTT/Portugues/Pages/Home.aspx",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "IRN — Registo de veículos",
      "url": "https://justica.gov.pt/Registos/Registo-Automovel",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "Portal das Finanças — Certidões",
      "url": "https://www.portaldasfinancas.gov.pt/",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "ePortugal — Comprar veículo usado",
      "url": "https://eportugal.gov.pt/",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    }
  ],
  "lastVerified": "2026-04-22",
  "verifyIntervalDays": 365
}
