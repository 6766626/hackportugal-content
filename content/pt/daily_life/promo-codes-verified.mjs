export default {
  editorialVoice: 'hackportugal',
  id: 'promo-codes-verified',
  categoryId: 'daily_life',
  // Explicit premium override — this is one of the headline value props for the v2.0
  // subscription. Even though `daily_life` is a free category, we gate the verified
  // promo-code list behind the premium tier (it's literally how users recoup the cost
  // of the subscription). The marketing pitch in the paywall references this guide.
  premium: true,
  title: 'Códigos promocionais e links de referência — verificados a 17/05/2026',
  tldr: 'Esta lista é atualizada mensalmente. Cada código tem uma data de última verificação. Regra principal: os códigos de referência (N26, Revolut, Wise, Glovo) não «expiram» no sentido normal — dão bónus a si e a quem convida. Os códigos promocionais (AutoDoc, Decathlon) expiram; em baixo estão apenas os que tiveram a fonte verificada. Maior potencial para «recuperar a subscrição HackPortugal» numa só noite: N26 +35 € + Revolut +30 € + Wise +75 € convite + Glovo +8 € = ~150 €. Se já é cliente destes serviços, valem apenas os códigos não-referência (AutoDoc, Decathlon, sites de cashback). Se um código não pagou bónus — comunique pelo Feedback, atualizamos.',
  tags: ['códigos promocionais', 'cupões', 'referência', 'cashback', 'poupar', 'premium'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'how-this-works',
      title: 'Como verificamos os códigos',
      content: [
        { kind: 'paragraph', text: 'Os códigos promocionais duram pouco (de uma semana a 3 meses); os links de referência são quase permanentes. Por isso a lista está estruturada assim: cada código tem uma data de última verificação (formato: «verificado DD/MM/YYYY»). Uma vez por mês a HackPortugal percorre toda a lista, testa cada código no site da marca, remove os mortos e adiciona novos ativos. Se um código deixou de funcionar mais cedo — Settings → Feedback e atualizamos em 48 horas.' },
        { kind: 'checklist', items: [
          '🟢 Código ativo: verificado há ≤ 30 dias + fonte verificada no site da marca',
          '🟡 Pode funcionar: verificado há 30-60 dias — geralmente ainda ativo, mas vale a pena verificar',
          '🔴 Expirado: removido na próxima ronda mensal',
          '🔵 Link de referência: não «expira», mas o bónus pode mudar a critério da marca'
        ]},
        { kind: 'warning', text: 'Honesty disclaimer: a HackPortugal recebe comissão em alguns links (marcados com 💚). Isto não influencia a seleção — só adicionamos um código se: 1) realmente funciona 2) a poupança para si é relevante 3) a marca é legítima. Se a oferta de parceiro for pior, mantemos o link não-afiliado.' }
      ]
    },
    {
      id: 'fintech',
      title: 'Fintech — os maiores bónus rápidos (150 €+ numa só noite)',
      content: [
        { kind: 'paragraph', text: 'Estes 4 bancos/serviços funcionam em Portugal, têm programas de referência ativos e são comuns entre imigrantes. O bónus chega após o primeiro pagamento com cartão ou primeira transferência. Inscrição: 5-10 minutos, 100% online com passaporte.' },
        { kind: 'checklist', items: [
          '🏦 N26 — até 35 € de bónus. Link de referência da app N26 de um cliente existente (toque no ícone do presente). Condição: novo cliente + primeiro pagamento com cartão em 60 dias. Verificado: 17/05/2026',
          '🏦 Revolut — até 30 € de bónus. Link da app Revolut existente (Profile → Invite friends). O bónus é creditado a ambos após a primeira operação ≥ 100 €. Verificado: 17/05/2026',
          '💸 Wise (ex-TransferWise) — 75 € de bónus de convite, mais primeira transferência gratuita até 600 €. Link da sua app Wise. Verificado: 17/05/2026',
          '💳 Bunq — 10-25 € por novo cliente, conforme plano. Link de referência da app Bunq. Verificado: 17/05/2026',
          '🇵🇹 ActivoBank — não tem programa de referência, mas tem bónus de boas-vindas regulares de 25-50 € na primeira utilização; ver em activobank.pt'
        ]},
        { kind: 'paragraph', text: 'Estratégia: abra Wise (75 €) + Revolut (30 €) + N26 (35 €) = 140 € numa só noite. Cobre a subscrição anual da HackPortugal (29,99 €) quatro vezes.' }
      ]
    },
    {
      id: 'auto',
      title: 'Auto, peças, pneus',
      content: [
        { kind: 'paragraph', text: 'Se tem carro em Portugal, peças e consumíveis custam 100-500 €/ano. A AutoDoc é a maior rede europeia online de peças.' },
        { kind: 'checklist', items: [
          '🔧 AutoDoc 10% off (primeiro pedido): código BC98213949 — código de referência pessoal da HackPortugal. Funciona em autodoc.pt na primeira compra. Aplicado no carrinho. Verificado: 17/05/2026 💚',
          '🚗 Norauto Portugal: cupões periódicos de 10-15% na newsletter por e-mail. Inscreva-se em norauto.pt',
          '🛞 Euromaster (Michelin): saldos sazonais em pneus em outubro-novembro (gama inverno) e março-abril (verão). Até 15% off em 4 pneus',
          '⛽ Galp Frota / Repsol Travelclub: programas de fidelização de combustível, ~5-10 cêntimos/litro; integra com o Cartão Continente (ver guia promo-codes-aggregator)'
        ]},
        { kind: 'warning', text: 'Pode instalar peças noutro mecânico, mas a garantia AutoDoc exige fatura fiscal do serviço. Guarde tudo.' }
      ]
    },
    {
      id: 'food-delivery',
      title: 'Entrega de comida e táxis',
      content: [
        { kind: 'paragraph', text: 'As três grandes plataformas em Portugal têm programas de referência ativos. O bónus vai normalmente a ambos — quem convida e quem é convidado.' },
        { kind: 'checklist', items: [
          '🛵 Glovo — 8 € para o novo utilizador + 8 € para quem convida após o primeiro pedido. Link de referência na app Glovo (Profile → Invite). Há também códigos públicos: 1Q6K7YL (entrega gratuita nos primeiros 3 pedidos ≥ 5 €), WGCEDEX (até 16 € no primeiro pedido). Verificado: 17/05/2026',
          '🍔 Uber Eats — código pessoal na app (Account → Invite friends). O amigo recebe 20-25 $ off no primeiro pedido, você recebe crédito para o próximo. Bónus varia por região',
          '🚕 Uber (táxi) — referência separada na app Uber. Por vezes primeira viagem gratuita para novos clientes',
          '⚡ Bolt — 25 vouchers ativos em maio 2026, ver em bolt.eu/promo. Referência na app Bolt',
          '🍕 Wolt — link de referência na app, 5-10 $ de crédito em cada lado'
        ]}
      ]
    },
    {
      id: 'shopping',
      title: 'Compras — roupa, eletrónica, desporto',
      content: [
        { kind: 'checklist', items: [
          '⚽ Decathlon: o Cartão Decathlon grátis dá 10% de retorno em marcas Decathlon (Quechua, Domyos, Kalenji, etc.) + devoluções em 365 dias. Registo na loja ou em decathlon.pt',
          '👕 FNAC Portugal: Cartão FNAC (5 € pago) dá descontos em bilhetes para concertos e livros. Saldos regulares 4 vezes por ano (1 fev, 1 mai, 1 ago, 26 dez — Boxing Day)',
          '📱 Worten: Cartão Worten grátis. Black Friday, saldos de verão (julho), Back to School (ago-set) — até 50% off em eletrónica',
          '🥑 iHerb (suplementos, vitaminas): código INTRO20 dá 20% off + envio grátis a partir de 40 $. Apenas para novos clientes. Verificado: 17/05/2026',
          '🌍 Amazon Espanha / Itália: link de referência pela app Amazon (Account → Invite). Entrega em Portugal a partir da Amazon.es normalmente 3-5 dias, grátis a partir de 29 €',
          '👶 Pingo Doce, Continente: melhores promos no «folheto» semanal das apps — todas as segundas-feiras novas promoções 30-50% em categorias selecionadas'
        ]}
      ]
    },
    {
      id: 'travel',
      title: 'Viagens e hotéis',
      content: [
        { kind: 'paragraph', text: 'As grandes poupanças em viagens estão na ordem dos 50-200 € por reserva. Programas de referência em grandes sites de booking são quase inexistentes (só B2B), mas há bónus de boas-vindas para novos clientes.' },
        { kind: 'checklist', items: [
          '🏨 Booking.com Genius: após 2 estadias em 2 anos — estatuto Genius Level 1 (10% off em alguns hotéis). Após 5 estadias — Genius Level 2 (15% off, pequeno-almoço/upgrades grátis em alguns). Criado automaticamente',
          '✈️ TAP Miles&Go: milhas bónus na inscrição (frequentemente 1 000-2 000 milhas = 15-30 € no próximo bilhete). Inscrição em flytap.com — grátis',
          '🚗 Sixt Frequent Driver: descontos em aluguer de viaturas, programa de fidelização — grátis',
          '🏠 Airbnb: código de referência pessoal na app (Profile → Invite). O convidado recebe 15-25 € de crédito na primeira reserva, você 15-25 € depois',
          '🚆 CP (comboios): o cartão de seniores 65+ ou o Cartão Jovem Europeu dão 25-50% de desconto permanente (ver promo-codes-aggregator)',
          '🚌 FlixBus: 10% off automático no primeiro bilhete para novos clientes, ver em flixbus.com'
        ]}
      ]
    },
    {
      id: 'cashback-extensions',
      title: 'Plugins e carteiras de cashback — poupança passiva',
      content: [
        { kind: 'paragraph', text: 'Os serviços de cashback devolvem automaticamente uma percentagem em cada compra sem ser preciso introduzir código. Instale uma vez — funciona em segundo plano.' },
        { kind: 'checklist', items: [
          '💸 Letyshops PT — 2-15% de retorno em Amazon ES/IT, MediaMarkt, Booking, eDreams, FNAC. Levantamento desde 5 €. Plugin para Chrome/Firefox',
          '💸 eBuyClub PT — concorrente do Letyshops, mais forte em moda. 5-10% de retorno',
          '💸 ShopBuddies PT — foco em marcas de moda',
          '💳 Honey (do PayPal) — plugin de browser, testa automaticamente todos os códigos promocionais conhecidos no carrinho. Grátis, zero configuração',
          '🇪🇺 Carlo (cashback UE) — serviço mais recente, comissão mais baixa do que o Letyshops mas menos marcas'
        ]},
        { kind: 'paragraph', text: 'Estratégia: instale Honey + Letyshops ao mesmo tempo — o Honey encontra um código promocional, o Letyshops adiciona cashback por cima. São mecânicas independentes.' }
      ]
    },
    {
      id: 'how-to-report',
      title: 'Se um código não funcionar',
      content: [
        { kind: 'checklist', items: [
          '📩 Comunique pelo Settings → Feedback na app: nome da marca + código + o que aconteceu (valor insuficiente, expirado, restrição regional)',
          '⏱️ Verificamos as mensagens em 48 horas e atualizamos o código na próxima versão do manifest (pull-to-refresh para obter)',
          '🌐 Fontes alternativas para códigos frescos: radarcupao.pt, ocacapromocoes.pt, Cuponation.pt — ver guia «promo-codes-aggregator»',
          '🔄 Referência não funciona? Por vezes é preciso: 1) limpar cookies do browser 2) usar janela anónima 3) clicar no link de convite directamente em vez de escrever o código à mão'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Banco de Portugal — regras para programas de referência fintech', url: 'https://www.bportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'DECO PROteste — direitos do consumidor em compras online', url: 'https://www.deco.proteste.pt/familia-consumo/direitos-consumidor/dicas/compras-online-segunda-mao-cuidados-ter', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'AutoDoc — site oficial para verificar códigos promocionais', url: 'https://www.autodoc.pt/', kind: 'secondary', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'N26 — regras oficiais do refer-a-friend', url: 'https://support.n26.com/en-eu/app-and-features/friend-referral/how-to-earn-money-by-inviting-friends-to-n26', kind: 'secondary', language: 'en', lastRetrieved: '2026-05-17' },
    { title: 'Booking.com — programa de fidelização Genius', url: 'https://www.booking.com/genius.html', kind: 'secondary', language: 'en', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90,
  recentlyChangedAt: '2026-05-17',
  changeSummary: '🆕 Novo guia Premium: códigos promocionais e links de referência verificados. Proposta principal: recuperar a subscrição numa só noite via N26 35 € + Revolut 30 € + Wise 75 € + Glovo 8 € = 148 €. Mais AutoDoc 10% off (código BC98213949), iHerb INTRO20, códigos públicos Glovo, plugins de cashback (Letyshops, Honey). Cada código tem data de verificação e compromisso de atualizar via Feedback. Premium-gated mesmo no daily_life (categoria gratuita).'
}
