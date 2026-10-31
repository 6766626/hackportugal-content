export default {
  recentlyChangedAt: "2026-10-31",
  changeSummary: "Encomendas de fora da UE: taxa a partir de 1 de novembro",

  editorialVoice: 'hackportugal',
  id: 'ctt-mail-parcels-advanced',
  categoryId: 'daily_life',
  title: 'CTT — reencaminhamento de correio, encomendas, desalfandegamento online',
  tldr: "Os CTT disponibilizam reencaminhamento, guarda e seguimento de correio. Consulte o tarifário e as condições de indemnização do serviço escolhido antes de pagar. Nas encomendas online de fora da UE, conte com IVA, direitos aplicáveis, taxa da UE desde 01.11.2026 e serviço separado da transportadora. O IOSS trata do IVA, mas não elimina os outros encargos.",
  tags: ['ctt', 'correio', 'encomendas', 'desalfandegamento'],
  estimatedReadMinutes: 5,
  steps: [
    {
      "id": "forwarding",
      "title": "📬 Reencaminhamento de correio em caso de mudança",
      "content": [
        {
          "kind": "paragraph",
          "text": "Ao mudar de morada em Portugal (mudança interna) ou ao sair para o estrangeiro — os CTT reencaminham toda a correspondência recebida."
        },
        {
          "kind": "substeps",
          "items": [
            {
              "id": "f1",
              "title": "Reencaminhamento Postal (reencaminhamento)",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "3 meses: 17,55 €",
                    "6 meses: 28,90 €",
                    "12 meses: 51,30 €",
                    "Pedido: ctt.pt → «Mudança de morada» ou em qualquer estação CTT",
                    "Começa a funcionar 3 dias úteis após o pedido",
                    "São reencaminhadas todas as cartas e encomendas não registadas",
                    "Envios registados (registada) → o aviso vai para a nova morada, a própria encomenda — para a estação de origem, é necessário levantá-la"
                  ]
                }
              ]
            },
            {
              "id": "f2",
              "title": "Reserva Domiciliária (retenção)",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "9,60 € por um período até 2 meses",
                    "O correio não é entregue, ficando retido na sua estação CTT",
                    "Útil em férias prolongadas ou viagens de trabalho",
                    "Levantar tudo na estação na data indicada"
                  ]
                }
              ]
            },
            {
              "id": "f3",
              "title": "Mudança de Morada — oficialmente",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Não confundir com reencaminhamento. A alteração de morada nas Finanças, IRN, AIMA — através do ePortugal «Mudança de morada» é gratuita, mas altera os registos oficiais, não a entrega postal."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "parcels-eu",
      "title": "📦 Encomendas da UE",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "Sem direitos aduaneiros nem IVA — a UE é um mercado único",
            "Chegam em 2-7 dias por entrega normal",
            "Rastreio: em ctt.pt pelo número ou através da aplicação CTT",
            "Se não estiver em casa: aviso («aviso») na caixa de correio, 14 dias para levantamento na estação",
            "Depois → devolução ao remetente"
          ]
        }
      ]
    },
    {
      "id": "parcels-non-eu",
      "title": "Encomendas de fora da UE: taxa a partir de 1 de novembro",
      "content": [
        {
          "kind": "paragraph",
          "text": "Nas compras online enviadas diretamente ao consumidor de fora da UE, vigora desde 01.07.2026 o direito transitório de 3 € por categoria de mercadoria em pequenas remessas até 150 €. A partir de 01.11.2026 acresce a taxa de tratamento da UE de 2 € por linha da declaração aduaneira (categoria), não simplesmente por caixa; a alfândega neerlandesa esclarece que também abrange remessas de comércio eletrónico superiores a 150 €. Podem acrescer IVA e o serviço separado da transportadora. Confira a discriminação do preço final: o IOSS diz respeito ao IVA e não elimina os restantes encargos. Não aplique automaticamente estas regras de venda à distância a ofertas particulares ou bagagem. Abra o seguimento e o pagamento diretamente no site oficial da transportadora, em vez de seguir uma ligação SMS inesperada."
        }
      ]
    },
    {
      "id": "iossi",
      "title": "IOSS: o que já foi pago",
      "content": [
        {
          "kind": "paragraph",
          "text": "O IOSS permite à loja cobrar IVA na compra de mercadorias elegíveis em remessas até 150 €. Guarde a fatura e a confirmação do IVA. Distinga o IVA do direito de 3 € por categoria e da taxa UE de 2 € por linha da declaração desde novembro. Se o IVA for exigido novamente, confirme antes de pagar se os dados IOSS foram transmitidos corretamente. Acima de 150 €, aplica-se o procedimento comum e o direito depende da classificação da mercadoria."
        }
      ]
    },
    {
      "id": "issues",
      "title": "🆘 Problemas com a encomenda",
      "content": [
        {
          "kind": "substeps",
          "items": [
            {
              "id": "i1",
              "title": "A encomenda perdeu-se",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "O rastreio mostra \"Delivered\", mas não há nada → verificar com o porteiro, vizinhos",
                    "Apresentar reclamação em ctt.pt → «Apresentar reclamação»",
                    "Prazo de investigação: 10-30 dias",
                    "Indemnização por perda: até 50 € (normal), até 500 € (Registado), até ao valor declarado (Seguro)",
                    "Internacionais por EMS — o país remetente paga-lhe a compensação adicional"
                  ]
                }
              ]
            },
            {
              "id": "i2",
              "title": "A encomenda ficou retida na alfândega",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "Verificar o estado em ctt.pt, procure \"Aguarda desalfandegamento\"",
                    "Se não houver SMS sobre Desalfandegamento — ligar para os CTT 707 262 626",
                    "Por vezes é necessário enviar manualmente a fatura aos CTT (para o e-mail desalfandegamento@ctt.pt)",
                    "Prazo de retenção na alfândega: 30 dias, depois → devolução"
                  ]
                }
              ]
            },
            {
              "id": "i3",
              "title": "Danificada durante a entrega",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "Fotografar o dano + a embalagem ANTES de abrir",
                    "Apresentar reclamação no prazo de 8 dias",
                    "Reembolso pelo seguro / mínimo para encomenda normal"
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  costs: [
    { label: 'Reencaminhamento 3 meses', amountEUR: 17.55 },
    { label: 'Reencaminhamento 6 meses', amountEUR: 28.90 },
    { label: 'Reencaminhamento 12 meses', amountEUR: 51.30 },
    { label: 'Reserva Domiciliária', amountEUR: 9.60 },
    { label: 'Taxa CTT de desalfandegamento (150-1000 €)', amountEUR: 12, note: 'depende do bem; ~14 € com IVA reduzido' },
    { label: 'Taxa UE por categoria (a partir de 1 jul 2026)', amountEUR: 3, note: 'por categoria de produto, encomendas até 150 €' },
    { label: 'IVA sobre encomendas de países fora da UE', amountEUR: 0, note: '23% do valor+portes' },
    { label: 'Direitos aduaneiros (>150 €, até 1 jul 2026)', amountEUR: 0, note: '0-17% do valor+portes' }
  ],
  sources: [
    {
      "title": "CTT — Desalfandegamento Online",
      "url": "https://www.ctt.pt/",
      "kind": "company",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "AT — Alfândega",
      "url": "https://info.portaldasfinancas.gov.pt/",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "Fiscalidade da UE — IOSS",
      "url": "https://taxation-customs.ec.europa.eu/ioss_en",
      "kind": "official",
      "language": "en",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "Council of the EU — small parcels, reviewed 23.10.2026",
      "url": "https://www.consilium.europa.eu/en/policies/eu-action-influx-of-small-parcels/",
      "kind": "official",
      "language": "en",
      "lastRetrieved": "2026-10-31"
    },
    {
      "title": "Dutch Customs — EU handling fee, updated 22.10.2026",
      "url": "https://www.douane.nl/en/themes/import-and-export/import/e-commerce/handling-fee-for-e-commerce/",
      "kind": "official",
      "language": "en",
      "lastRetrieved": "2026-10-31"
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
