export default {
  recentlyChangedAt: "2026-10-31",

  editorialVoice: 'hackportugal',
  id: 'compras-amazon-aliexpress',
  categoryId: 'daily_life',
  title: 'Amazon ES/PT, AliExpress e eBay em Portugal: entrega, IVA e direitos aduaneiros',
  tldr: "Confirme a origem real da expedição, não apenas o domínio da loja. Mercadorias já em livre prática enviadas de um armazém da UE normalmente não exigem desalfandegamento pelo comprador. Nas remessas de fora da UE, conte com IVA, direitos aduaneiros e a nova taxa de tratamento da UE a partir de 1 de novembro de 2026.",
  tags: ['amazon', 'aliexpress', 'ctt', 'direitos aduaneiros'],
  estimatedReadMinutes: 6,
  changeSummary: "Encomendas de fora da UE: taxa a partir de 1 de novembro",
  steps: [
    {
      "id": "platforms",
      "title": "Confirme o vendedor e a origem da expedição",
      "content": [
        {
          "kind": "paragraph",
          "text": "Na Amazon, AliExpress, eBay e noutros marketplaces, confirme o vendedor, país de expedição, devoluções e composição do preço final. Um domínio nacional ou a indicação “entrega em Portugal” não prova expedição de um armazém da UE. Mercadorias já em livre prática expedidas da UE normalmente não exigem novo desalfandegamento pelo comprador."
        }
      ]
    },
    {
      "id": "tax-rules",
      "title": "Encomendas de fora da UE: taxa a partir de 1 de novembro",
      "content": [
        {
          "kind": "paragraph",
          "text": "Nas compras online enviadas diretamente ao consumidor de fora da UE, vigora desde 01.07.2026 o direito transitório de 3 € por categoria de mercadoria em pequenas remessas até 150 €. A partir de 01.11.2026 acresce a taxa de tratamento da UE de 2 € por linha da declaração aduaneira (categoria), não simplesmente por caixa; a alfândega neerlandesa esclarece que também abrange remessas de comércio eletrónico superiores a 150 €. Podem acrescer IVA e o serviço separado da transportadora. Confira a discriminação do preço final: o IOSS diz respeito ao IVA e não elimina os restantes encargos. Não aplique automaticamente estas regras de venda à distância a ofertas particulares ou bagagem. Abra o seguimento e o pagamento diretamente no site oficial da transportadora, em vez de seguir uma ligação SMS inesperada."
        }
      ]
    },
    {
      "id": "ctt-clearance",
      "title": "Como funciona o desalfandegamento CTT",
      "content": [
        {
          "kind": "paragraph",
          "text": "Se uma encomenda proveniente de fora da UE chegar por correio normal, quase sempre é tratada pelos CTT. O estado pode mudar para “A aguardar procedimentos declarativos” ou “Desalfandegamento”. Nesse caso, é necessário entrar no portal dos CTT, confirmar os dados e pagar os montantes cobrados."
        },
        {
          "kind": "checklist",
          "items": [
            "Abra o tracking em ctt.pt e verifique se é necessário “desalfandegar”.",
            "Prepare a invoice/recibo: captura de ecrã da encomenda com o preço do artigo, entrega, moeda e nome do destinatário.",
            "Se o IVA já tiver sido pago no AliExpress/eBay/Amazon, anexe a confirmação “VAT included” ou a invoice com IOSS/VAT.",
            "Verifique o NIF e a morada: o nome na encomenda deve coincidir com os documentos ou, pelo menos, estar claramente associado ao destinatário.",
            "Pague online o IVA, os eventuais direitos aduaneiros e o serviço de apresentação/desalfandegamento CTT.",
            "Depois do pagamento, a encomenda normalmente é libertada e segue para entrega; em períodos de pico, o atraso pode ser de 3–10 dias úteis.",
            "Se não apresentar os documentos a tempo, a encomenda pode ser devolvida ao remetente."
          ]
        },
        {
          "kind": "warning",
          "text": "Os CTT não “inventam o imposto”: cobram os valores segundo as regras de importação da Autoridade Tributária e Aduaneira. Mas há erros — sobretudo quando a loja cobrou IVA via IOSS, mas o número IOSS não entrou nos dados postais. Nesse caso, apresente a invoice e conteste através do portal dos CTT antes de pagar, se o sistema o permitir."
        }
      ]
    },
    {
      "id": "marketplace-tactics",
      "title": "Antes de pagar a encomenda",
      "content": [
        {
          "kind": "paragraph",
          "text": "Guarde a página do produto e o pedido com impostos e entrega discriminados. Confirme quem suporta importação e devolução. Não presuma isenção apenas porque o valor é inferior a 150 €. Em caso de dúvida, peça o cálculo completo ao vendedor antes de pagar."
        }
      ]
    },
    {
      "id": "how-to-estimate",
      "title": "Calcule o preço total",
      "content": [
        {
          "kind": "paragraph",
          "text": "Some mercadoria, entrega, direitos aplicáveis, taxa de tratamento da UE e serviço da transportadora; confira separadamente o IVA e o que já está incluído no checkout. “IVA incluído” refere-se apenas ao IVA. As taxas normais de importação dependem da classificação e origem; não existe uma taxa única para todos os produtos. Compare o total com uma oferta expedida da UE."
        }
      ]
    }
  ],
  costs: [
    { label: 'IVA sobre importação em mainland Portugal', amountEURMin: 0, amountEURMax: 0, note: 'Taxa de 23% sobre a base tributável; o montante depende do preço do artigo, entrega, direitos aduaneiros e taxas.' },
    { label: 'Limite para IOSS simplificado', amountEUR: 150, note: 'Até 150 €, o marketplace pode cobrar o IVA no checkout; acima de 150 €, é necessária uma declaração de importação normal.' },
    { label: 'Entrega normal da Amazon.es em Portugal continental', amountEURMin: 0, amountEURMax: 8, note: 'Depende do Prime, valor da encomenda, vendedor e artigo; prazo típico de 2–5 dias úteis.' },
    { label: 'Entrega AliExpress economy a partir da China', amountEURMin: 0, amountEURMax: 5, note: 'Frequentemente gratuita ou barata; prazo típico de 3–8 semanas, mais rápida com Choice/EU-warehouse.' },
    { label: 'Processamento de importação pelos CTT/transportadora', amountEURMin: 2, amountEURMax: 30, note: 'Depende do valor, tipo de envio e operador; confirme a tarifa actual em ctt.pt antes de pagar.' }
  ],
  sources: [
    {
      "title": "Portal das Finanças: informação aduaneira e regras de importação",
      "url": "https://info.portaldasfinancas.gov.pt/pt/apoio_ao_contribuinte/Cidadaos/Compras/Encomendas_postais/Encomendas_Postais_Comercio_Eletronico/Paginas/default.aspx",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-28"
    },
    {
      "title": "Portal das Finanças: IVA e taxas em vigor",
      "url": "https://pauta.portaldasfinancas.gov.pt/pt/faqs/Pages/importacoes-via-internet-impostos.aspx",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-28"
    },
    {
      "title": "CTT: desalfandegar encomendas",
      "url": "https://www.ctt.pt/empresas/encomendas-e-correio/receber/desalfandegar-encomendas/index/desalfandegar-encomendas",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-28"
    },
    {
      "title": "CTT: receber encomendas internacionais e custos de desalfandegamento",
      "url": "https://www.ctt.pt/empresas/encomendas-e-correio/receber/desalfandegar-encomendas/index",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-28"
    },
    {
      "title": "CTT — Fim da isenção de direitos aduaneiros em compras até 150 € fora da UE (01.07.2026)",
      "url": "https://www.ctt.pt/particulares/receber/desalfandegar/fim-da-isencao-de-direitos-aduaneiros-em-compras-ate-150-euros-fora-da-uniao-europeia",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-07-10"
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
  lastVerified: '2026-07-10',
  verifyIntervalDays: 180
}
