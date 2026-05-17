export default {
  editorialVoice: 'hackportugal',
  id: 'consumer-rights-warranty',
  categoryId: 'daily_life',
  title: 'Garantia de bens — 3 anos para novos, 18 meses para usados',
  tldr: 'Desde 2022, vigora em Portugal o Decreto-Lei 84/2021: a garantia para bens novos é de 3 anos; para usados, as partes podem acordar uma redução do prazo, mas nunca inferior a 18 meses. Se for detectado um defeito («falta de conformidade»), o vendedor é obrigado a reparar ou substituir o bem gratuitamente. Se isso não for possível — reduzir o preço ou devolver o dinheiro. Guarde o proof of purchase (fatura, recibo, extracto do cartão).',
  tags: ['garantia', 'direitos do consumidor', 'devolução', 'reparação'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'legal-basis',
      title: 'Base jurídica',
      content: [
        { kind: 'paragraph', text: 'O Decreto-Lei 84/2021 transpôs as Directivas da UE 2019/770 (conteúdos digitais) e 2019/771 (venda de bens). Aplica-se a compras B2C em Portugal quando o vendedor é um vendedor profissional. Num marketplace, o regime depende de quem é o verdadeiro vendedor: se for um particular ou um vendedor fora da UE, o enquadramento de protecção pode ser diferente.' },
        { kind: 'checklist', items: [
          'Bem novo: 3 anos de garantia (antes eram 2)',
          'Bem usado: 3 anos; as partes podem acordar por escrito uma redução, mas não inferior a 18 meses',
          'Conteúdo/serviços digitais: em caso de fornecimento único — 2 anos; em caso de fornecimento contínuo/subscrição, o vendedor responde pela falta de conformidade durante todo o período de fornecimento',
          'Reparação / substituição: junto do vendedor, NÃO do fabricante (este é o ponto essencial)',
          'Gratuito para o comprador — nada de «pague o diagnóstico» nos primeiros anos'
        ]},
        { kind: 'warning', text: 'O vendedor tenta frequentemente encaminhá-lo para o fabricante — isso é ilegal. A obrigação principal cabe a quem vendeu o bem.' }
      ]
    },
    {
      id: 'what-counts',
      title: 'O que conta como «defeito» (falta de conformidade)',
      content: [
        { kind: 'checklist', items: [
          'O bem não corresponde à descrição no catálogo/no site',
          'Não funciona uma funcionalidade anunciada pelo vendedor ou normalmente esperada',
          'Faltam acessórios indicados como fazendo parte do conjunto',
          'Não está instalado o software indicado na especificação',
          'Defeitos surgidos durante o prazo de garantia presumem-se de origem nos primeiros 2 anos (o ónus da prova cabe ao vendedor)'
        ]},
        { kind: 'paragraph', text: 'Após 2 anos (para bens novos), o ónus da prova passa para o comprador — mas apenas quanto ao facto de que «o defeito era de origem e não resultou de desgaste». Na prática, um centro de assistência oficial emite uma avaliação técnica.' }
      ]
    },
    {
      id: 'rights-order',
      title: 'Ordem de exercício dos direitos do comprador',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: '1. Reparação ou substituição (à escolha do comprador)', content: [
            { kind: 'paragraph', text: 'O vendedor é obrigado a fazê-lo num «prazo razoável» — normalmente 30 dias. O transporte fica a cargo do vendedor. A disponibilização de um bem de substituição não é obrigatória, mas grandes cadeias (Worten, Fnac, MediaMarkt) costumam fornecer um equipamento de substituição para grandes electrodomésticos.' }
          ]},
          { id: 'r2', title: '2. Desconto no bem', content: [
            { kind: 'paragraph', text: 'Se a reparação/substituição for impossível ou demorar demasiado tempo — exija uma redução do preço proporcional ao defeito.' }
          ]},
          { id: 'r3', title: '3. Devolução do dinheiro (resolução do contrato)', content: [
            { kind: 'paragraph', text: 'O reembolso total é possível em caso de defeito grave que torne o bem impróprio para utilização, ou se o defeito voltar a manifestar-se após a reparação. O vendedor devolve o dinheiro pelo mesmo meio (cartão → cartão).' }
          ]}
        ]}
      ]
    },
    {
      id: 'how-to-claim',
      title: 'Como apresentar uma reclamação',
      content: [
        { kind: 'checklist', items: [
          '🧾 Reunir o proof of purchase: fatura, recibo, extracto do cartão, número de série, fotografias/vídeos do defeito',
          '📧 Reclamação escrita ao vendedor (o e-mail é suficiente) com a descrição do defeito e o pedido: «Reclamação de falta de conformidade nos termos do Decreto-Lei 84/2021»',
          '📋 Livro de Reclamações: em papel na loja ou electrónico em livroreclamacoes.pt — a cópia segue para o regulador competente do sector',
          '⏰ Dar um prazo razoável (15–30 dias) para resposta',
          '⚖️ Se houver recusa ou silêncio — contacte o Centro de Arbitragem de Conflitos de Consumo da sua região; a DECO PROteste é uma consumer association/subscrição privada e ajuda com consultas',
          '🏛️ Último recurso — Julgado de Paz (até 15 000 €, tribunal civil rápido)'
        ]}
      ]
    },
    {
      id: 'edge-cases',
      title: 'Casos especiais',
      content: [
        { kind: 'substeps', items: [
          { id: 'e1', title: 'Smartphones e portáteis', content: [
            { kind: 'paragraph', text: 'A bateria NÃO é considerada consumível nos primeiros anos — uma bateria defeituosa dentro da garantia deve ser substituída. A Apple / Samsung reconhecem mais frequentemente que um equipamento que ficou «inutilizado» após actualizações constitui um defeito.' }
          ]},
          { id: 'e2', title: 'Electrodomésticos', content: [
            { kind: 'paragraph', text: 'Worten, Radio Popular, Fnac — as grandes cadeias preferem substituir rapidamente pequenos electrodomésticos (< 300 €) sem peritagem. Para frigoríficos/máquinas de lavar, enviam assistência técnica ao domicílio.' }
          ]},
          { id: 'e3', title: 'Automóveis e equipamentos de grande porte', content: [
            { kind: 'paragraph', text: 'Junto de um vendedor profissional — 3 anos ao abrigo do DL 84/2021; para usados, pode ser reduzido por escrito, mas não para menos de 18 meses. Na compra a um particular, o DL 84/2021 não se aplica — vigoram as regras gerais do Código Civil.' }
          ]},
          { id: 'e4', title: 'Compras a particulares', content: [
            { kind: 'paragraph', text: 'O Decreto-Lei 84/2021 aplica-se apenas a B2C. Na compra a um particular (OLX, Standvirtual), aplica-se o Código Civil (arts. 913, 916, 917): o comprador deve comunicar o defeito num prazo curto após a descoberta; os prazos gerais de prescrição e a proof são normalmente mais difíceis.' }
          ]}
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Reparação/substituição ao abrigo da garantia', amountEUR: 0 },
    { label: 'Reclamação DECO (adesão)', amountEURMin: 12, amountEURMax: 15, note: '€/mês' },
    { label: 'Julgado de Paz', amountEUR: 70, note: 'taxa fixa para pedidos até 15 000 €' }
  ],
  sources: [
    { title: 'Decreto-Lei n.º 84/2021 — regime da venda de bens de consumo', url: 'https://dre.pt/dre/detalhe/decreto-lei/84-2021', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Directiva da UE 2019/771 — venda de bens', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32019L0771', kind: 'law', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Livro de Reclamações — portal oficial', url: 'https://www.livroreclamacoes.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — garantia de bens de consumo', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/garantia-de-bens-de-consumo', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
