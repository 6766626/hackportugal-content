export default {
  editorialVoice: 'hackportugal',
  id: 'consumer-rights-warranty',
  categoryId: 'daily_life',
  title: 'Garantia de bens — 3 anos para novos, 18 meses para usados',
  tldr: 'Desde 2022 vigora em Portugal o Decreto-Lei 84/2021: a garantia de bens novos é de 3 anos; para bens usados, as partes podem acordar uma redução do prazo, mas nunca para menos de 18 meses. Ao detectar um defeito («falta de conformidade»), o vendedor é obrigado a reparar ou substituir o bem gratuitamente. Se isso não for possível — reduzir o preço ou devolver o dinheiro. Guarde o comprovativo de compra (fatura, recibo, extracto do cartão).',
  tags: ['garantia', 'direitos do consumidor', 'devolução', 'reparação'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'legal-basis',
      title: 'Base legal',
      content: [
        { kind: 'paragraph', text: 'O Decreto-Lei 84/2021 transpôs as Directivas da UE 2019/770 (conteúdos digitais) e 2019/771 (venda de bens).\n\nAplica-se a compras B2C em Portugal quando o vendedor é um vendedor profissional. Num marketplace, o regime depende de quem é o vendedor real: se for um particular ou um vendedor fora da UE, o enquadramento de protecção pode ser diferente.' },
        { kind: 'checklist', items: [
          'Bem novo: 3 anos de garantia (anteriormente eram 2)',
          'Bem usado: 3 anos; as partes podem acordar por escrito uma redução, mas nunca para menos de 18 meses',
          'Conteúdo/serviços digitais: em fornecimento único — 2 anos; em fornecimento contínuo/subscrição, o vendedor responde pela falta de conformidade durante todo o período de fornecimento',
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
          'Não funciona uma função anunciada pelo vendedor ou normalmente esperada',
          'Faltam acessórios indicados como incluídos',
          'Não está instalado o software indicado na especificação',
          'Os defeitos surgidos durante o prazo de garantia presumem-se de origem nos primeiros 2 anos (o ónus da prova cabe ao vendedor)'
        ]},
        { kind: 'paragraph', text: 'Após 2 anos (para bens novos), o ónus da prova passa para o comprador — mas apenas quanto ao facto de o «defeito ser de origem e não resultar de desgaste». Na prática, um centro de assistência oficial emite uma peritagem.' }
      ]
    },
    {
      id: 'rights-order',
      title: 'Ordem de exercício dos direitos do comprador',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: '1. Reparação ou substituição (à escolha do comprador)', content: [
            { kind: 'paragraph', text: 'O vendedor é obrigado a fazê-lo num «prazo razoável» — normalmente 30 dias. O transporte fica a cargo do vendedor. O fornecimento de um bem de substituição temporário não é obrigatório, mas grandes cadeias (Worten, Fnac, MediaMarkt) costumam disponibilizar um equipamento de substituição para grandes electrodomésticos.' }
          ]},
          { id: 'r2', title: '2. Redução do preço do bem', content: [
            { kind: 'paragraph', text: 'Se a reparação/substituição forem impossíveis ou demorarem demasiado — exija uma redução proporcional ao defeito.' }
          ]},
          { id: 'r3', title: '3. Reembolso (resolução do contrato)', content: [
            { kind: 'paragraph', text: 'O reembolso total é possível em caso de defeito grave que torne o bem impróprio para uso, ou se o defeito voltar a manifestar-se após a reparação. O vendedor devolve o dinheiro pelo mesmo meio (cartão → cartão).' }
          ]}
        ]}
      ]
    },
    {
      id: 'how-to-claim',
      title: 'Como apresentar uma reclamação',
      content: [
        { kind: 'checklist', items: [
          '🧾 Reunir o comprovativo de compra: fatura, recibo, extracto do cartão, número de série, fotos/vídeos do defeito',
          '📧 Reclamação por escrito ao vendedor (basta e-mail), com descrição do defeito e o pedido: «Reclamação de falta de conformidade nos termos do Decreto-Lei 84/2021»',
          '📋 Livro de Reclamações: em papel na loja ou electrónico em livroreclamacoes.pt — a cópia segue para o regulador sectorial competente',
          '⏰ Dar um prazo razoável (15–30 dias) para resposta',
          '⚖️ Se houver recusa ou silêncio — contacte o Centro de Arbitragem de Conflitos de Consumo da sua região; a DECO PROteste é uma associação privada de consumidores/subscrição e ajuda com aconselhamento',
          '🏛️ Última opção — Julgado de Paz (até 15 000 €, tribunal cível rápido)'
        ]}
      ]
    },
    {
      id: 'edge-cases',
      title: 'Casos especiais',
      content: [
        { kind: 'substeps', items: [
          { id: 'e1', title: 'Smartphones e portáteis', content: [
            { kind: 'paragraph', text: 'A bateria NÃO é considerada consumível nos primeiros anos — uma bateria defeituosa dentro da garantia deve ser substituída. A Apple / Samsung reconhecem com maior frequência que um dispositivo transformado num «tijolo» após actualizações é um defeito.' }
          ]},
          { id: 'e2', title: 'Electrodomésticos', content: [
            { kind: 'paragraph', text: 'Worten, Radio Popular, Fnac — as grandes cadeias preferem substituir rapidamente pequenos electrodomésticos (< 300 €) sem peritagem. Para frigoríficos/máquinas de lavar, enviam assistência ao domicílio.' }
          ]},
          { id: 'e3', title: 'Automóveis e equipamento de grande porte', content: [
            { kind: 'paragraph', text: 'Junto de um vendedor profissional — 3 anos ao abrigo do DL 84/2021; para usados, é possível reduzir por escrito, mas nunca para menos de 18 meses. Na compra a um particular, o DL 84/2021 não se aplica — aplicam-se as regras gerais do Código Civil.' }
          ]},
          { id: 'e4', title: 'Compras a particulares', content: [
            { kind: 'paragraph', text: 'O Decreto-Lei 84/2021 aplica-se apenas a B2C. Ao comprar a um particular (OLX, Standvirtual), aplica-se o Código Civil (arts. 913, 916, 917): o comprador deve denunciar o defeito num prazo curto após a sua descoberta; os prazos gerais de prescrição e a prova costumam ser mais difíceis.' }
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
    { title: 'ePortugal — garantia de bens de consumo', url: 'https://www.gov.pt/cidadaos/-/informacoes/garantia-de-bens-de-consumo', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
