export default {
  editorialVoice: 'hackportugal',
  id: 'promo-codes-verified',
  categoryId: 'daily_life',
  // Substituição premium explícita — este é um dos principais argumentos de valor para a subscrição v2.0.
  // Embora `daily_life` seja uma categoria gratuita, colocamos a lista verificada
  // de códigos promocionais atrás do escalão premium (é literalmente assim que os utilizadores recuperam o custo
  // da subscrição). A mensagem de marketing no paywall faz referência a este guia.
  premium: true,
  title: 'Códigos promocionais e links de recomendação — verificados em 18/05/2026',
  tldr: '🔥 Ofertas em destaque até 02/06/2026: a **Vivid Money** dá-lhe 20 € por cada amigo convidado (até 100 € por 5 amigos), o amigo recebe 3% de juro anual durante 60 dias. A **Revolut** dá 40 € por cada amigo (até 10 recompensas por período), mas o amigo tem de cumprir 4 ações (registo + carregamento + 3 compras de 5 €+ + pedido de cartão físico).\n\nA seleção é atualizada mensalmente. Cada código tem uma data da última verificação. Os códigos de recomendação (Vivid, Revolut, N26, Wise, Glovo) não “expiram” no sentido habitual — dão bónus tanto a si como a quem convidou. Os códigos promocionais (AutoDoc, iHerb, Glovo public) expiram; abaixo estão apenas aqueles cuja fonte foi verificada.\n\nSe já é cliente destes serviços, use o código AutoDoc da HackPortugal e plugins de cashback (Honey, Letyshops). Se um código não funcionou — escreva através de Settings → Feedback, atualizaremos no prazo de 48 horas.',
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
      title: 'Fintech — links de recomendação HackPortugal e opções gerais',
      content: [
        { kind: 'paragraph', text: 'A HackPortugal tem links de recomendação pessoais para dois serviços — Vivid Money e Revolut. Através destes, você (e a equipa HackPortugal) recebe um bónus quando o seu amigo cumpre as condições. As outras fintech (N26, Wise, Bunq) também têm programas de recomendação, mas não temos códigos pessoais — peça o link a amigos que já as usem, ou obtenha-o dentro da app.' },
        { kind: 'paragraph', text: '**🏦 Vivid Money — 20 € por cada amigo convidado (até 100 € por 5 amigos)** 💚' },
        { kind: 'checklist', items: [
          'Link de recomendação HackPortugal: https://vivid.money/r/aKKQ/3',
          'O que o amigo recebe: 3% de juro anual durante 60 dias no Interest Rate Pocket (depósito com juro fixo sobre o saldo da conta).',
          'O que você recebe: 20 € por cada amigo convidado, máximo 100 € por 5 amigos.',
          'Condição de ativação: o amigo regista-se através do link + confirma a identidade + ativa o Interest Rate Pocket.',
          'A Vivid é um neobanco lituano (SEPA-IBAN, conta multimoeda, funcionalidades de investimento, disponível em russo).',
          'Validade da promoção: até 02/06/2026.',
          'Verificado: 18/05/2026.'
        ]},
        { kind: 'paragraph', text: '**🏦 Revolut — 40 € por cada amigo convidado (até 10 recompensas por período)** 💚' },
        { kind: 'checklist', items: [
          'Link de recomendação HackPortugal: https://revolut.com/referral/?referral-code=aleksa0ygf!MAY2-26-AR-L1&geo-redirect',
          'Para você receber 40 €, o amigo tem de cumprir **as 4 ações** até 02/06/2026:',
          '1️⃣ Registar-se através do seu link e confirmar a identidade (KYC).',
          '2️⃣ Carregar a conta com cartão de débito ou transferência bancária.',
          '3️⃣ Efetuar **3 compras** com o cartão Revolut, cada uma **a partir de 5 €**. Não contam: jogos de azar, cartões-presente, transferências (P2P, banco→banco).',
          '4️⃣ Pedir um **cartão físico** (o virtual não chega) e adicioná-lo ao Apple Pay ou Google Pay.',
          'Máximo de 10 recompensas por período (até 400 € de bónus total).',
          'Validade da promoção: até 02/06/2026.',
          'Verificado: 18/05/2026.'
        ]},
        { kind: 'warning', text: 'A Revolut tem condições de ativação rigorosas — em especial «3 compras a partir de 5 € cada» e «cartão físico». Se o amigo não cumprir as 4 etapas, o bónus não é creditado. Avise-o com antecedência para evitar deceções.' },
        { kind: 'paragraph', text: '**Fintech sem código pessoal HackPortugal** — opções gerais:' },
        { kind: 'checklist', items: [
          '🏦 **N26** — 15-35 € de bónus por convite (depende do tipo de conta Standard/Smart/You). A HackPortugal não tem código pessoal. Onde obter o link: peça a amigos utilizadores da N26 (Profile → Refer a friend na app deles). Condição: novo cliente + primeiro pagamento com cartão no prazo de 60 dias.',
          '💸 **Wise** (antiga TransferWise) — 75 € de bónus por convite + primeira transferência gratuita até 600 €. A HackPortugal não tem código pessoal. Onde obter: a amigos a partir da Wise-app deles (Account → Invite a friend).',
          '💳 **Bunq** — 10-25 € por novo cliente (depende do plano Easy/Pro). A HackPortugal não tem código pessoal. Onde obter: a amigos utilizadores da Bunq, a partir da app deles.',
          '🇵🇹 **Activobank** — não tem programa de recomendação. Welcome-bónus de 25-50 € na primeira utilização (ver activobank.pt → promoções no canto superior direito do site).',
          '🇵🇹 **Banco BPI / Caixa Geral** — não têm recomendações oficiais, mas têm programas de fidelização para clientes com ordenado domiciliado (manutenção de conta gratuita + bónus por domiciliação do salário).'
        ]},
        { kind: 'paragraph', text: 'Estratégia para poupar: convide 5 amigos para a Vivid (100 €) + 1 amigo para a Revolut (40 €) = 140 € numa só noite. Paga totalmente a subscrição anual HackPortugal 17,99 € × 7.' }
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
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90,
  recentlyChangedAt: '2026-05-18',
  changeSummary: '🔥 Adicionados 2 links de recomendação pessoais HackPortugal a serviços fintech com bónus ativos até 02/06/2026: **Vivid Money** (20 € por amigo × 5 = 100 €, o amigo recebe 3% de juro anual durante 60 dias) e **Revolut** (40 € por amigo, até 10 recompensas; o amigo tem de se registar + KYC + carregar + 3 compras de 5 €+ + pedir cartão físico). Estratégia de poupança recalculada com o novo preço da subscrição 17,99 €/ano: 5 amigos Vivid + 1 amigo Revolut = 140 € pagam a subscrição durante 7+ anos. Secção Fintech reescrita: para N26/Wise/Bunq indicamos agora honestamente que a HackPortugal não tem código pessoal, com bónus e condições descritos como opções gerais.'
}
