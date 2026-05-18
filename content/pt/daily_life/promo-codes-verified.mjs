export default {
  editorialVoice: 'hackportugal',
  id: 'promo-codes-verified',
  categoryId: 'daily_life',
  // Substituição premium explícita — este é um dos principais argumentos de valor para a subscrição v2.0.
  // Embora `daily_life` seja uma categoria gratuita, colocamos a lista verificada
  // de códigos promocionais atrás do escalão premium (é literalmente assim que os utilizadores recuperam o custo
  // da subscrição). A mensagem de marketing no paywall faz referência a este guia.
  premium: true,
  title: 'Códigos promocionais e links de recomendação — verificados em 17/05/2026',
  tldr: 'Esta seleção é atualizada mensalmente. Cada código tem uma data da última verificação. Regra principal: os códigos de recomendação (N26, Revolut, Wise, Glovo) não “expiram” no sentido habitual — dão um bónus tanto a si como a quem convidou. Os códigos promocionais (AutoDoc, Decathlon) expiram; abaixo estão apenas aqueles cuja fonte foi verificada. Maior potencial para “recuperar a subscrição HackPortugal”: N26 +35 €, Revolut +30 €, Wise +75 € por convite, Glovo +8 € — tudo junto ~150 € numa noite de registos. Se já é cliente destes serviços, use apenas opções sem recomendação (AutoDoc, Decathlon, sites de cashback).\n\nSe o bónus de um código não chegou — escreva para o feedback HackPortugal, iremos atualizar.',
  tags: ['códigos promocionais', 'cupões', 'recomendação', 'cashback', 'poupança', 'premium'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'how-this-works',
      title: 'Como verificamos os códigos',
      content: [
        { kind: 'paragraph', text: 'Os códigos promocionais duram pouco (de uma semana a 3 meses), os links de recomendação — praticamente sem prazo. Por isso, a seleção está organizada assim: cada código tem uma data da última verificação (formato: “verificado DD/MM/YYYY”). Uma vez por mês, a HackPortugal percorre toda a lista, testa cada código no site da marca, assinala os que deixaram de funcionar e adiciona novos ativos. Se um código deixar de funcionar antes — escreva-nos através de Settings → Feedback e atualizaremos no prazo de 48 horas.' },
        { kind: 'checklist', items: [
          '🟢 Código ativo: data de verificação ≤ 30 dias + fonte verificada no site da marca',
          '🟡 Pode funcionar: data 30-60 dias — normalmente ainda está ativo, mas confirme por si',
          '🔴 Expirado: retiramos da lista após a próxima verificação',
          '🔵 Link de recomendação: não “expira”, mas o bónus pode ser alterado pela rede da marca'
        ]},
        { kind: 'warning', text: 'Honesty disclaimer: a HackPortugal ganha comissão com alguns links (marcados com 💚). Isto não influencia a escolha — só adicionamos um código se: 1) funciona realmente 2) a poupança para si é significativa 3) a marca é legal. Se a oferta for pior num parceiro — manteremos um link não afiliado.' }
      ]
    },
    {
      id: 'fintech',
      title: 'Fintech — os maiores bónus rápidos (150 €+ numa noite)',
      content: [
        { kind: 'paragraph', text: 'Estes 4 bancos/serviços funcionam em Portugal, têm programas de recomendação ativos e são frequentemente usados por imigrantes. O bónus chega após o primeiro pagamento com cartão ou a primeira transferência. Registo — 5-10 minutos, tudo online com passaporte.' },
        { kind: 'checklist', items: [
          '🏦 N26 — até 35 € de bónus. Link de recomendação através da N26-app de um cliente existente (toque no ícone do presente). Condição: novo cliente + primeiro pagamento com cartão no prazo de 60 dias. Verificado: 17/05/2026',
          '🏦 Revolut — até 30 € de bónus. Link a partir da Revolut-app existente (Profile → Invite friends). O bónus chega a ambos após a primeira operação de 100 €+. Verificado: 17/05/2026',
          '💸 Wise (antiga TransferWise) — 75 € de bónus por convite, mais primeira transferência gratuita até 600 €. Link a partir da sua Wise-app. Verificado: 17/05/2026',
          '💳 Bunq — 10-25 € por novo cliente, consoante o plano. Link de recomendação a partir da Bunq-app. Verificado: 17/05/2026',
          '🇵🇹 Activobank — normalmente não tem recomendação, mas tem welcome-bónus regulares de 25-50 € na primeira utilização, procure no site deles activobank.pt'
        ]},
        { kind: 'paragraph', text: 'Estratégia para poupar: abrir Wise (75 €) + Revolut (30 €) + N26 (35 €) = 140 € numa só noite. Paga totalmente a subscrição anual HackPortugal 29,99 € × 4.' }
      ]
    },
    {
      id: 'auto',
      title: 'Automóvel, peças, pneus',
      content: [
        { kind: 'paragraph', text: 'Se tem carro em Portugal, substituir peças e consumíveis custa 100-500 € por ano. A AutoDoc é a maior rede europeia de peças auto online.' },
        { kind: 'checklist', items: [
          '🔧 AutoDoc 10% off (primeira encomenda): código BC98213949 — é o código de recomendação pessoal da HackPortugal. Válido no site autodoc.pt na primeira compra. Aplica-se no carrinho. Verificado: 17/05/2026 💚',
          '🚗 Norauto Portugal: cupões periódicos de 10-15% na email-newsletter deles. Registo em norauto.pt → subscrição',
          '🛞 Euromaster (Michelin): promoções sazonais em pneus outubro-novembro (coleção de inverno), março-abril (verão). Até 15% off em 4 pneus',
          '⛽ Galp Frota / Repsol Travelclub: programas de acumulação para combustível, ~5-10 cêntimos/litro; integram-se com Cartão Continente (ver guia separado promo-codes-aggregator)'
        ]},
        { kind: 'warning', text: 'A instalação de peças por uma oficina externa é possível, mas a garantia da AutoDoc exige fatura/recibo fiscal do serviço. Guarde todos os documentos.' }
      ]
    },
    {
      id: 'food-delivery',
      title: 'Entrega de comida e táxi',
      content: [
        { kind: 'paragraph', text: 'Os três grandes serviços em Portugal têm programas de recomendação ativos. Normalmente, o bónus chega a ambos — a quem convidou e a quem foi convidado.' },
        { kind: 'checklist', items: [
          '🛵 Glovo — 8 € para novo utilizador + 8 € para quem convida após a primeira encomenda. Link de recomendação na Glovo-app (Profile → Invite). Também há códigos promocionais public: 1Q6K7YL (entrega gratuita nas primeiras 3 encomendas de 5 €+), WGCEDEX (até 16 € na primeira encomenda). Verificado: 17/05/2026',
          '🍔 Uber Eats — código pessoal na app (Account → Invite friends). A outra pessoa recebe desconto de 20-25 $ na primeira encomenda, você recebe credit na seguinte. O bónus varia por região',
          '🚕 Uber (táxi) — recomendação separada na Uber-app. Por vezes, primeira viagem gratuita para novo cliente',
          '⚡ Bolt — 25 códigos voucher ativos para maio de 2026, procurar em bolt.eu/promo. Recomendação na Bolt-app',
          '🍕 Wolt — link de recomendação na app, credit de 5-10 $ para ambos'
        ]}
      ]
    },
    {
      id: 'shopping',
      title: 'Compras — roupa, eletrónica, desporto',
      content: [
        { kind: 'checklist', items: [
          '⚽ Decathlon: o Decathlon Card gratuito dá 10% de retorno em marcas Decathlon (Quechua, Domyos, Kalenji, etc.) + devolução de quaisquer artigos durante 365 dias. Registe-se na loja ou em decathlon.pt',
          '👕 FNAC Portugal: Cartão FNAC (5 € pago) dá descontos em bilhetes para concertos e livros. Saldos regulares 4 vezes por ano (1 de fevereiro, 1 de maio, 1 de agosto, 26 de dezembro — Boxing Day)',
          '📱 Worten: Cartão Worten gratuito. Black Friday, summer sales (julho), Back to School (agosto-setembro) — até 50% off em tecnologia',
          '🥑 iHerb (para suplementos, suplementos alimentares): código INTRO20 dá 20% off + entrega gratuita a partir de 40 $. Válido apenas para novos clientes. Verificado: 17/05/2026',
          '🌍 Amazon Spain / Italy: link de recomendação através da Amazon-app (Account → Invite). A entrega para Portugal pela Amazon.es normalmente demora 3-5 dias, gratuita a partir de 29 €',
          '👶 PingoDoce, Continente: veja as melhores promoções no “folheto” semanal na app deles — todas as segundas-feiras há novas promoções de 30-50% em categorias específicas'
        ]}
      ]
    },
    {
      id: 'travel',
      title: 'Viagens e hotéis',
      content: [
        { kind: 'paragraph', text: 'Grandes poupanças em viagens são da ordem dos 50-200 € por reserva. Programas de recomendação em grandes sites de booking quase não existem (apenas B2B), mas há welcome-bónus para novos clientes.' },
        { kind: 'checklist', items: [
          '🏨 Booking.com Genius: após 2 stay\'s no prazo de 2 anos — estatuto Genius Level 1 (10% off em alguns hotéis). Após 5 stays — Genius Level 2 (15% off, pequenos-almoços/upgrades gratuitos em alguns hotéis). É criado automaticamente',
          '✈️ TAP Miles&Go: milhas de bónus por registo (frequentemente 1000-2000 milhas = 15-30 € no bilhete seguinte). Registo em flytap.com — gratuito',
          '🚗 Sixt Frequent Driver: descontos no aluguer de automóveis, programa de fidelização — gratuito',
          '🏠 Airbnb: código de recomendação pessoal na app (Profile → Invite). O hóspede recebe 15-25 € de credit na primeira reserva, você recebe 15-25 € depois',
          '🚆 CP comboios: cartão anual 65+ ou Cartão Jovem Europeu dá 25-50% de desconto permanente (ver promo-codes-aggregator)',
          '🚌 FlixBus: para novos clientes, desconto automático de 10% no primeiro bilhete, procurar em flixbus.com'
        ]}
      ]
    },
    {
      id: 'cashback-extensions',
      title: 'Plugins de cashback e carteiras — poupança passiva',
      content: [
        { kind: 'paragraph', text: 'Os serviços de cashback devolvem-lhe automaticamente uma percentagem de cada compra, sem exigir a introdução de um código promocional. Instala uma vez — funciona em segundo plano.' },
        { kind: 'checklist', items: [
          '💸 Letyshops PT — 2-15% de retorno na Amazon ES/IT, MediaMarkt, Booking, eDreams, FNAC. Levantamento mínimo 5 €. Plugin para Chrome/Firefox',
          '💸 eBuyClub PT — concorrente da Letyshops, mais forte em moda (roupa). 5-10% de retorno',
          '💸 ShopBuddies PT — foco em fashion brands',
          '💳 Honey (da PayPal) — plugin de browser, testa automaticamente todos os códigos promocionais conhecidos no carrinho. Gratuito, sem nada para configurar',
          '🇪🇺 Carlo (cashback UE) — serviço em crescimento, comissão mais barata do que a Letyshops, mas menos marcas'
        ]},
        { kind: 'paragraph', text: 'Estratégia: instalar AO MESMO TEMPO Honey + Letyshops — a Honey encontra o código promocional, a Letyshops acrescenta cashback por cima. São mecanismos totalmente independentes.' }
      ]
    },
    {
      id: 'how-to-report',
      title: 'Se o código não funcionar',
      content: [
        { kind: 'checklist', items: [
          '📩 Escreva-nos através de Settings → Feedback na app: indique o nome da marca + código + o que aconteceu (insufficient amount, expired, region restricted)',
          '⏱️ Verificamos as mensagens no prazo de 48 horas e atualizamos o código na versão seguinte do manifesto (disponível através de pull-to-refresh)',
          '🌐 Fontes alternativas de códigos recentes: radarcupao.pt, ocacapromocoes.pt, Cuponation.pt — ver guia separado “promo-codes-aggregator”',
          '🔄 A recomendação não funciona? Por vezes é necessário: 1) limpar cookies do browser 2) usar incógnito 3) aplicar o código diretamente através do invite-link, não introduzir manualmente'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Banco de Portugal — regras dos programas de recomendação de serviços fintech', url: 'https://www.bportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'DECO PROteste — direitos do consumidor em compras online', url: 'https://www.deco.proteste.pt/familia-consumo/direitos-consumidor/dicas/compras-online-segunda-mao-cuidados-ter', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'AutoDoc — site oficial para verificar códigos promocionais', url: 'https://www.autodoc.pt/', kind: 'secondary', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'N26 — regras oficiais Refer-a-friend', url: 'https://support.n26.com/en-eu/app-and-features/friend-referral/how-to-earn-money-by-inviting-friends-to-n26', kind: 'secondary', language: 'en', lastRetrieved: '2026-05-17' },
    { title: 'Booking.com — programa de fidelização Genius', url: 'https://www.booking.com/genius.html', kind: 'secondary', language: 'en', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90,
  recentlyChangedAt: '2026-05-17',
  changeSummary: '🆕 Novo guia Premium: códigos promocionais e links de recomendação verificados. Oferta principal: pague a subscrição numa só noite através dos bónus N26 35 € + Revolut 30 € + Wise 75 € + Glovo 8 € = 148 €. Também AutoDoc 10% off (código BC98213949), iHerb INTRO20, Glovo public codes, plugins de cashback (Letyshops, Honey). Data de verificação de cada código e compromisso de atualizar em caso de falha através de Feedback. Este guia é automaticamente premium-only (categoryId daily_life, mas premium override).'
}
