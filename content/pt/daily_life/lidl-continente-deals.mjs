export default {
  editorialVoice: 'hackportugal',
  id: 'lidl-continente-deals',
  categoryId: 'daily_life',
  title: 'Lidl Outlet, cartão Continente, comparação de preços — poupança nos supermercados',
  tldr: 'Em Portugal, os descontos nos supermercados concentram-se nos programas de fidelização (Continente, Pingo Doce, Lidl Plus) e nos folhetos semanais. A app Lidl Plus e lidl.pt são os principais canais da Lidl Portugal; o Lidl Outlet como loja online separada e permanente não existe para todas as categorias — confirme no site. O Cartão Continente dá descontos em Cartão (saldo) + cupões personalizados. Comparação de preços entre cadeias: diferença de 10-25% no cabaz básico, até 40% em álcool e produtos de limpeza.',
  tags: ['supermercados', 'descontos', 'lidl', 'continente'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'lidl-outlet',
      title: 'Lidl Outlet — loja online',
      content: [
        { kind: 'paragraph', text: 'Na Lidl Portugal, o principal canal público é lidl.pt e a aplicação Lidl Plus. A secção de vendas online de artigos não alimentares (electrodomésticos, roupa, equipamento, turismo) com saldos cíclicos chama-se loja online; nem sempre existe um site “outlet” separado e permanente como em alguns outros países — confirme a estrutura actual de lidl.pt.' },
        { kind: 'checklist', items: [
          'Categorias: electrodomésticos, desporto, turismo, artigos de bricolage, jardim, moda',
          'Entrega em todo o país, 3-5 € por encomenda',
          'Levantamento em loja Lidl — gratuito',
          'Devolução — 30 dias sem motivo (ao abrigo da EU Directive 2011/83)',
          'Pagamento: cartão, MB WAY, PayPal, transferência bancária',
          'Janelas sazonais: abrem 2-3 vezes por ano durante 2-3 semanas cada',
          'Bots de Telegram / RSS acompanham a abertura; é possível subscrever na aplicação Lidl Plus'
        ]},
        { kind: 'warning', text: 'Lidl Outlet — NÃO é para produtos alimentares. Para produtos alimentares — Lidl normal com a aplicação Lidl Plus.' }
      ]
    },
    {
      id: 'cards',
      title: 'Cartões de fidelização — todas as cadeias',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: '🟥 Cartão Continente (Sonae)', content: [
            { kind: 'checklist', items: [
              'Adesão: qualquer caixa Continente / Continente Online / aplicação',
              'NIF + nome + morada, gratuito',
              'O principal mecanismo é saldo/descontos em Cartão em produtos/categorias específicos, mais cupões personalizados; não existe cashback base universal garantido de 1%',
              'Até 5-50% em produtos assinalados (promoção + Cartão)',
              '«Poupa Mais» — cupões personalizados na aplicação',
              'Combustível na Galp — com desconto ao pagar com Cartão Continente (as condições mudam — confirme as actuais)',
              'O saldo acumulado também pode ser gasto na Worten, Zippy, MO, Sport Zone, Wells (todas do grupo Sonae)'
            ]}
          ]},
          { id: 'c2', title: '🟩 Pingo Doce — Poupa Mais', content: [
            { kind: 'checklist', items: [
              'Cartão gratuito, adesão online em pingodoce.pt',
              'Descontos personalizados (através da aplicação)',
              '«Descontos directos» — no talão, sem acumulação',
              'Combina com as 5 «super-promoções» da semana',
              'Combustível: o parceiro histórico do Pingo Doce/Poupa Mais é a BP — confirme as condições actuais'
            ]}
          ]},
          { id: 'c3', title: '🟨 Lidl Plus', content: [
            { kind: 'checklist', items: [
              'Aplicação Lidl Plus (cartão apenas digital, não há cartão físico)',
              'Cupões actualizados semanalmente',
              'Atingir «Etapas» em compras grandes dá bónus (3-10 €)',
              'Raspadinha diária — por vezes ganha-se 5-50 €',
              'Folheto Lidl — ligações na aplicação + descontos até 50% em promoções'
            ]}
          ]},
          { id: 'c4', title: '🟦 Auchan Cartão', content: [
            { kind: 'paragraph', text: 'Menos difundido, mas bom nas zonas onde a Auchan é forte (Alverca, Almada, Maia). Acumulação de 1% + cupões através da aplicação MyAuchan.' }
          ]},
          { id: 'c5', title: '🟧 Intermarché', content: [
            { kind: 'paragraph', text: 'Cartão Intermarché + postos de combustível Intermarché: por vezes preços competitivos em produtos básicos + combustível.' }
          ]}
        ]}
      ]
    },
    {
      id: 'folhetos',
      title: 'Folhetos com promoções semanais',
      content: [
        { kind: 'paragraph', text: 'O folheto é a revista de descontos da semana. As versões antigas são deixadas em casa na caixa do correio, as novas estão nas aplicações das cadeias. O site agregador folhetos.pt reúne todos.' },
        { kind: 'checklist', items: [
          '📱 Aplicação folhetos.pt — notificações push para produtos na lista de desejos',
          '🗓️ Ciclo: quarta-feira-terça-feira (maioria) / segunda-feira-domingo (Lidl)',
          '📉 Folheto «Super Poupança» Continente — quarta-feira até 50% de desconto',
          '💎 Folheto «Descobertas» Pingo Doce — sexta-feira-domingo, 30-40% numa selecção de produtos',
          '🟨 Lidl «Super-fins-de-semana» — sexta-feira-domingo',
          '🍾 Álcool e produtos gourmet entram frequentemente nos folhetos 2 vezes por ano — Ano Novo, Páscoa'
        ]}
      ]
    },
    {
      id: 'compare',
      title: 'Comparação de preços entre cadeias',
      content: [
        { kind: 'paragraph', text: 'A DECO PROteste (organização de defesa do consumidor) publica todos os anos um estudo de preços de um cabaz de 164 produtos básicos.' },
        { kind: 'checklist', items: [
          '🏆 Segundo os estudos da DECO PROteste, entre as cadeias mais baratas estão normalmente Mercadona, Aldi, Lidl. Continente Bom Dia é um formato convenience/de lojas urbanas e costuma ser mais caro do que os Continente grandes. A classificação muda todos os anos; consulte o estudo mais recente da DECO',
          '🟥 Continente: mais caro do que a média, mas com grande variedade e as melhores semanas de promoções',
          '🟩 Pingo Doce: preços médios, boa qualidade nos produtos de segmento premium',
          '🟨 Lidl: barato nos produtos básicos + marcas próprias (Milbona, Freeway) muitas vezes melhores do que as marcas próprias dos concorrentes',
          '🟦 Auchan: preços médios, mas bons artigos não alimentares',
          '🇪🇸 Mercadona: barato (pt.mercadona.es) — mais de 40 lojas',
          '💰 Diferença no cabaz básico: até 20-25% entre o barato e o caro',
          '🍻 Álcool: diferença até 40% — Lidl é o mais barato'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Conselhos práticos',
      content: [
        { kind: 'checklist', items: [
          '🛒 Comprar produtos de marca própria Lidl/Continente — qualidade elevada, preço 30% abaixo das marcas',
          '🐟 Peixe e carne “em promoção” no Continente: etiqueta amarela — último dia de venda, -30-50%',
          '🥯 Descontos ao fim do dia nas padarias Pingo Doce/Continente — depois das 20:00 em pão e pastelaria -50%',
          '💳 Cartão Continente para combustível em postos — 10 €/mês de desconto para uma família média',
          '📊 Folhetos.pt — activar notificações push para leite, carne, azeite, detergente',
          '🌽 Mercados municipais (Ribeira Bolhão Porto, Mercado Arroios Lisboa) — legumes/peixe frescos 20-40% mais baratos do que nos supermercados'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Cartões de fidelização (todos)', amountEUR: 0 },
    { label: 'Entrega Lidl Outlet', amountEURMin: 3, amountEURMax: 5 },
    { label: 'Poupança com Cartão Continente (família)', amountEURMin: 200, amountEURMax: 800, note: '€/ano' }
  ],
  sources: [
    { title: 'Lidl Outlet', url: 'https://www.lidl.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Continente — Cartão', url: 'https://www.continente.pt/cartao-continente/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'folhetos.pt — agregador de promoções', url: 'https://www.folhetos.pt/', kind: 'secondary', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DECO PROteste — comparação de supermercados', url: 'https://www.deco.proteste.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
