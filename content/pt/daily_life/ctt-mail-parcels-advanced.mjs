export default {
  editorialVoice: 'hackportugal',
  id: 'ctt-mail-parcels-advanced',
  categoryId: 'daily_life',
  title: 'CTT — reencaminhamento de correio, encomendas, desalfandegamento online',
  tldr: 'Reencaminhamento ao mudar de casa: **Reencaminhamento Postal** — 3 meses (17,55 €), 6 meses (28,90 €), 12 meses (51,30 €). **Reserva domiciliária** — retenção de correio na estação até 2 meses (9,60 €). Encomendas de países fora da UE: IVA 23% + direitos aduaneiros a partir de 150 €. Fazer o desalfandegamento — em ctt.pt através de «Desalfandegamento Online» em 5 min, taxa de 5 € por encomenda + IVA sobre valor+envio. Encomenda perdida — assistente online dos CTT, compensação até 50 €.',
  tags: ['ctt', 'correio', 'encomendas', 'desalfandegamento'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'forwarding',
      title: '📬 Reencaminhamento de correio ao mudar de casa',
      content: [
        { kind: 'paragraph', text: 'Ao mudar de morada em Portugal (mudança interna) ou ao ir viver para o estrangeiro — os CTT reencaminham toda a correspondência recebida.' },
        { kind: 'substeps', items: [
          { id: 'f1', title: 'Reencaminhamento Postal (reencaminhamento)', content: [
            { kind: 'checklist', items: [
              '**3 meses**: 17,55 €',
              '**6 meses**: 28,90 €',
              '**12 meses**: 51,30 €',
              'Pedido: ctt.pt → «Mudança de morada» ou em qualquer estação dos CTT',
              'Começa a funcionar 3 dias úteis após o pedido',
              'São reencaminhadas todas as cartas e encomendas não registadas',
              'Envios registados (registada) → o aviso vai para a nova morada, a própria encomenda fica na estação de origem, sendo necessário levantá-la'
            ]}
          ]},
          { id: 'f2', title: 'Reserva Domiciliária (retenção)', content: [
            { kind: 'checklist', items: [
              '**9,60 €** por um período até 2 meses',
              'O correio não é entregue, ficando retido na sua estação dos CTT',
              'Útil em férias prolongadas ou viagens de trabalho',
              'Levantar tudo na estação na data indicada'
            ]}
          ]},
          { id: 'f3', title: 'Mudança de Morada — oficialmente', content: [
            { kind: 'paragraph', text: 'Não confundir com reencaminhamento. A alteração de morada nas Finanças, IRN, AIMA — através do ePortugal «Mudança de morada» é gratuita, mas altera os registos oficiais, não a entrega postal.' }
          ]}
        ]}
      ]
    },
    {
      id: 'parcels-eu',
      title: '📦 Encomendas da UE',
      content: [
        { kind: 'checklist', items: [
          '**Sem direitos aduaneiros nem IVA** — a UE é um mercado único',
          'Chegam em 2-7 dias por entrega standard',
          'Seguimento: em ctt.pt pelo número ou através da aplicação dos CTT',
          'Se não estiver em casa: aviso («aviso») na caixa de correio, 14 dias para levantar na estação',
          'Depois → devolução ao remetente'
        ]}
      ]
    },
    {
      id: 'parcels-non-eu',
      title: '📦 Encomendas de países fora da UE — desalfandegamento',
      content: [
        { kind: 'paragraph', text: 'Todas as encomendas de países fora da UE (Federação Russa, EUA, China, Reino Unido após o Brexit, Ucrânia antes do TPD) passam por controlo aduaneiro.' },
        { kind: 'substeps', items: [
          { id: 'p1', title: '💰 Impostos', content: [
            { kind: 'checklist', items: [
              '**IVA 23%**: cobrado sobre TODAS as encomendas de países fora da UE desde 1 de julho de 2021 (antes havia um limiar de <22 €)',
              '**Direitos aduaneiros**: sobre mercadorias > **150 €** (valor + envio). A taxa depende do código TARIC do produto — 0-17% para a maioria, até 50% para vestuário de determinadas categorias',
              '**Custos adicionais dos CTT**: taxa de processamento de 5 € + 1-3 € por operação adicional',
              'Exemplo para uma encomenda de 100 € (sem direitos aduaneiros, até 150 €): 23 € de IVA + ~5 € de taxa CTT = ~28 € de custos adicionais além do valor do produto',
              'Exemplo para uma encomenda de 200 € (>150 €): ~46 € de IVA + ~24 € de direitos aduaneiros (depende do TARIC) + ~7 € de taxa CTT = ~77 € de custos adicionais'
            ]}
          ]},
          { id: 'p2', title: '🛂 Como fazer o desalfandegamento', content: [
            { kind: 'checklist', items: [
              '**Automaticamente** até 150 €: os CTT tratam do IOSS (se o remetente for um grande retalhista AliExpress/Amazon com registo IOSS) → você paga apenas o envio, o imposto já está incluído no preço',
              '**Através do CTT Desalfandegamento Online**: se o remetente não tiver IOSS — recebe um SMS/e-mail com uma ligação para tratar do processo',
              '**Abrir ctt.pt → Desalfandegamento → introduzir o código da encomenda → carregar a fatura**',
              'Indicar: valor, conteúdo, finalidade (uso pessoal)',
              'Pagar IVA + direitos aduaneiros + taxa CTT com cartão',
              'A encomenda será entregue 2-3 dias após o pagamento'
            ]}
          ]},
          { id: 'p3', title: '⚠️ Quando podem surgir problemas', content: [
            { kind: 'checklist', items: [
              'Valor declarado subavaliado (o AliExpress escreve muitas vezes 1 €) — a AT pode contestar e avaliar pelo valor de mercado',
              'Mercadorias CITES (pele de animais raros, marfim) — apreensão',
              'Medicamentos — proibidos sem receita PT',
              'Contrafações de marcas — apreensão + coima para o remetente',
              'Armas, álcool >2 l, tabaco — limites rigorosos'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'iossi',
      title: '🌐 IOSS — o caminho simples',
      content: [
        { kind: 'paragraph', text: 'IOSS (Import One-Stop Shop) — sistema em vigor desde 2021, que permite a retalhistas de países fora da UE cobrar IVA no momento da compra. Para o consumidor = receção sem complicações.' },
        { kind: 'checklist', items: [
          '✅ **Amazon.com, AliExpress, eBay, Temu, Shein** — registados no IOSS, IVA incluído no preço, a encomenda passa automaticamente',
          '✅ Até 150 € — sem impostos adicionais',
          '❌ **Lojas russas, Wildberries antes das sanções, vendedores particulares** — sem IOSS, continua a ser necessário desalfandegar',
          '❌ Encomendas >150 € — o IOSS não se aplica, há sempre direitos aduaneiros + taxa CTT'
        ]}
      ]
    },
    {
      id: 'issues',
      title: '🆘 Problemas com a encomenda',
      content: [
        { kind: 'substeps', items: [
          { id: 'i1', title: 'A encomenda perdeu-se', content: [
            { kind: 'checklist', items: [
              'O seguimento mostra "Delivered", mas não há nada → verificar com o porteiro, vizinhos',
              'Apresentar reclamação em ctt.pt → «Apresentar reclamação»',
              'Prazo de investigação: 10-30 dias',
              'Compensação por perda: até 50 € (normal), até 500 € (Registado), até ao valor declarado (Seguro)',
              'Internacionais via EMS — o país remetente paga-lhe a compensação adicional'
            ]}
          ]},
          { id: 'i2', title: 'A encomenda ficou retida na alfândega', content: [
            { kind: 'checklist', items: [
              'Verificar o estado em ctt.pt, procurar "Aguarda desalfandegamento"',
              'Se não houver SMS sobre Desalfandegamento — ligar para os CTT 707 262 626',
              'Por vezes é necessário enviar manualmente a fatura aos CTT (para o e-mail desalfandegamento@ctt.pt)',
              'Prazo de retenção na alfândega: 30 dias, depois → devolução'
            ]}
          ]},
          { id: 'i3', title: 'Danificada durante a entrega', content: [
            { kind: 'checklist', items: [
              'Fotografar o dano + a embalagem ANTES de abrir',
              'Apresentar reclamação no prazo de 8 dias',
              'Reembolso pelo seguro / mínimo para encomenda normal'
            ]}
          ]}
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Reencaminhamento 3 meses', amountEUR: 17.55 },
    { label: 'Reencaminhamento 6 meses', amountEUR: 28.90 },
    { label: 'Reencaminhamento 12 meses', amountEUR: 51.30 },
    { label: 'Reserva Domiciliária', amountEUR: 9.60 },
    { label: 'Taxa CTT de processamento', amountEUR: 5, note: 'por encomenda' },
    { label: 'IVA sobre encomendas de países fora da UE', amountEUR: 0, note: '23% do valor+envio' },
    { label: 'Direitos aduaneiros (>150 €)', amountEUR: 0, note: '0-17% do valor+envio' }
  ],
  sources: [
    { title: 'CTT — Desalfandegamento Online', url: 'https://www.ctt.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AT — Alfândega', url: 'https://info.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Fiscalidade da UE — IOSS', url: 'https://taxation-customs.ec.europa.eu/ioss_en', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
