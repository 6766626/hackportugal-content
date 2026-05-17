export default {
  editorialVoice: 'hackportugal',
  id: 'promo-codes-aggregator',
  categoryId: 'daily_life',
  title: 'Cartões de desconto, códigos promocionais e cashback em Portugal',
  tldr: 'Principais programas de fidelização: Cartão Continente (Continente — o mais forte, descontos + saldo combustível Galp), Pingo Doce Poupa Mais (com BP), Cartão Jovem Europeu (12-29 anos, descontos em 60+ lojas e museus), Cartão Decathlon (10% de retorno em marcas próprias), Cartão KIWOKO (lojas de animais, grátis), Oceanário/Zoo de Lisboa (passe anual rentabiliza em 2 visitas). Sites de cashback: Letyshops PT, eBuyClub PT. Agregadores de promoções: radarcupao.pt, ocacapromocoes.pt, Cuponation.pt. Em festivais, concertos e eventos culturais — o Cartão Jovem dá até 50% off (poupança enorme para estudantes). Também: cartão dos bombeiros, cartão de família numerosa, reembolso de IVA via e-fatura.',
  tags: ['descontos', 'promoções', 'cartao continente', 'cashback', 'poupar'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'supermarkets',
      title: 'Supermercados — a poupança principal',
      content: [
        { kind: 'paragraph', text: 'O Cartão Continente é o programa de fidelização mais forte em Portugal. Segundo a própria cadeia, os utilizadores ativos poupam ~10% no carrinho anual. O Pingo Doce vem em segundo.' },
        { kind: 'substeps', items: [
          {
            id: 'continente',
            title: 'Cartão Continente',
            content: [
              { kind: 'checklist', items: [
                '🛒 Grátis: levantado em qualquer Continente em 1 minuto (passaporte + email)',
                '⛽ Acumulação: 10 cêntimos por litro de combustível na Galp vão para o seu saldo Continente (Galp Frota)',
                '💸 Pelo menos 2% de desconto acumulado sobre as compras anuais',
                '🎟️ Cupões exclusivos: «cupões» pessoais chegam pela app + SMS, por vezes 30-50% off em categorias inteiras',
                '🆕 Continente Carrega: subscrição para «5%/10% off» em lojas Continente (paga, rentabiliza se gasta >150 €/mês)',
                '📱 App «Continente» — obrigatória; sem ela os cupões não se ativam'
              ]}
            ]
          },
          {
            id: 'pingo',
            title: 'Pingo Doce Poupa Mais',
            content: [
              { kind: 'checklist', items: [
                '🛒 Grátis: levantado em loja, registo em pingodoce.pt',
                '⛽ Programa de combustível BP: 2 € no saldo BP por cada 40 € no Pingo Doce',
                '⛽ 1 000 pontos BP Premier Plus = 5 € para gastar no Pingo Doce',
                '💸 «Ganhe 20%»: alguns produtos dão 20% de retorno no saldo Poupa Mais',
                '📱 App «Pingo Doce» — para ativar cupões'
              ]}
            ]
          },
          {
            id: 'lidl',
            title: 'Lidl Plus / Auchan Plus',
            content: [
              { kind: 'checklist', items: [
                '🛒 Lidl Plus: grátis pela app — cupões semanais, scratch-cards «caixa bónus»',
                '🛒 Auchan Plus: grátis, acumulação de pontos convertida em desconto',
                '🛒 Minipreço, Aldi: sem programa de fidelização, apenas promoções semanais'
              ]}
            ]
          }
        ]}
      ]
    },
    {
      id: 'youth-card',
      title: 'Cartão Jovem Europeu — essencial para 12-29 anos',
      content: [
        { kind: 'paragraph', text: 'Programa público do IPDJ (Instituto Português do Desporto e Juventude). Válido nos 38 países da European Youth Card Association. Validade 1 ano, custo 11 € (8 € online).' },
        { kind: 'checklist', items: [
          '🎯 Idade: 12-29 (inclusive)',
          '💶 Preço: 8 € (online) ou 11 € (em balcões IPDJ). Validade: 1 ano',
          '🎫 Descontos em Portugal: ~60 categorias de negócios desde cinema (FNAC -10%) a festivais (NOS Alive -15%)',
          '🚊 Transporte: CP (comboios) -25%, FlixBus -10%, Carris -50% no passe turístico',
          '🏛️ Museus: entrada gratuita em muitos museus do Estado em Lisboa e Porto',
          '🌍 No estrangeiro: hostels, bares, cafés, ginásios — milhões de ofertas pela Europa fora',
          '🎓 Estudantes: pedido através da escola/universidade, por vezes grátis',
          '🌐 cartaojovem.pt — encomenda, verificação das promoções ativas'
        ]}
      ]
    },
    {
      id: 'family-card',
      title: 'Cartão de Família Numerosa — para famílias grandes',
      content: [
        { kind: 'checklist', items: [
          '👨‍👩‍👧‍👦 Para famílias com 3+ filhos (biológicos ou adotados)',
          '💶 Grátis',
          '📉 Descontos: ~20% em transportes do Estado, museus, piscinas, eventos culturais',
          '🏠 Descontos em eletricidade (EDP), internet (MEO, NOS, Vodafone) — normalmente 20-30%',
          '🎓 Descontos em escolas, jardins de infância, colónias',
          '📋 Obter: pelo ACSS (Conselho Nacional Famílias Numerosas), precisa de certidões de nascimento dos filhos',
          '🌐 famnumerosas.pt'
        ]}
      ]
    },
    {
      id: 'specific-stores',
      title: 'Programas de lojas específicas',
      content: [
        { kind: 'substeps', items: [
          {
            id: 'pet',
            title: 'Lojas de animais',
            content: [
              { kind: 'checklist', items: [
                '🐶 Cartão KIWOKO: grátis, 5% de retorno em marcas KIWOKO, consultas veterinárias com desconto',
                '🐶 Cartão Petland: grátis, pontos de bónus',
                '🐶 PetXP / Animais & Cª: programas locais, pergunte em loja'
              ]}
            ]
          },
          {
            id: 'sport',
            title: 'Desporto',
            content: [
              { kind: 'checklist', items: [
                '⚽ Cartão Decathlon: grátis pela app, 10% de retorno em marcas Decathlon (Quechua, Domyos, Kalenji), devoluções grátis em 365 dias',
                '🏃 Cartão Sport Zone: grátis, descontos durante promoções',
                '🏃 SportLife / Worten Sport: programas locais'
              ]}
            ]
          },
          {
            id: 'culture',
            title: 'Cultura e entretenimento',
            content: [
              { kind: 'checklist', items: [
                '🎪 Oceanário de Lisboa: passe anual 39 € (adulto) — rentabiliza em 2 visitas (entrada 22 €). Crianças grátis com passe do progenitor',
                '🦁 Jardim Zoológico de Lisboa: passe anual 50 € — rentabiliza em 3 visitas',
                '🎬 NOS Cinemas Club: grátis, acumulação por bilhetes, 10º bilhete grátis',
                '🎬 Cartão UCI Cinemas: programa semelhante',
                '🎟️ Cartão FNAC: 5 € pago, descontos em bilhetes para concertos e livros'
              ]}
            ]
          },
          {
            id: 'fashion',
            title: 'Roupa',
            content: [
              { kind: 'checklist', items: [
                '👕 Cartão Worten: grátis, descontos e pontos bónus',
                '👗 Cartão Springfield / OYSHO / Mango: grátis pela app da marca',
                '👠 Cartão MO: grátis, descontos em coleções exclusivas',
                '👞 Cartão Cinco / Salsa: grátis, cashback local'
              ]}
            ]
          }
        ]}
      ]
    },
    {
      id: 'cashback',
      title: 'Sites de cashback e cupões',
      content: [
        { kind: 'checklist', items: [
          '💸 Letyshops Portugal: 2-15% de retorno em grandes e-shops (Amazon PT, MediaMarkt, Booking.com); levantamento a partir de 5 € acumulados',
          '💸 eBuyClub PT: mesmo modelo, mais ativo em moda',
          '💸 ShopBuddies PT: foco em FashionUnited',
          '🎟️ Radarcupao.pt: catálogo de códigos promocionais ativos para e-shops portugueses',
          '🎟️ Ocacapromocoes.pt: «caça promoções» — comunidade de achados e cupões',
          '🎟️ Cuponation.pt: equivalente internacional',
          '📰 Mensagem-Mexer / blogs de lifestyle: publicam frequentemente códigos de primeira encomenda (Uber Eats, Glovo, Bolt Food)'
        ]}
      ]
    },
    {
      id: 'efatura',
      title: 'e-Fatura — devolução de IVA pelas Finanças',
      content: [
        { kind: 'paragraph', text: 'Cada vez que dá o NIF na caixa, o recibo entra no e-Fatura.gov.pt. No final do ano pode recuperar parte do IVA como dedução do IRS. Não é «desconto», mas dinheiro real de volta.' },
        { kind: 'checklist', items: [
          '🍽️ Restaurantes: 15% do IVA (máx. 250 € por ano)',
          '🚗 Reparações de carros e motos: 15% do IVA (máx. 250 €)',
          '💇 Cabeleireiros/salões de beleza: 15% do IVA (máx. 250 €)',
          '🐾 Veterinária: 15% (máx. 250 €)',
          '🏠 Gás, eletricidade, água: 15% do IVA',
          '🎓 Educação (incluindo cursos, explicações): 30% (máx. 800 €)',
          '🏥 Saúde (incluindo farmácias): 15% (máx. 1 000 €)',
          '⚠️ IMPORTANTE: dê sempre o NIF, caso contrário o recibo não conta. Após compra verifique em e-fatura.portaldasfinancas.gov.pt — pode «validar» recibos contestados ali'
        ]},
        { kind: 'paragraph', text: 'Para mais — ver guia «e-Fatura deductions».' }
      ]
    }
  ],
  sources: [
    { title: 'Cartão Continente — site oficial', url: 'https://cartaocontinente.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Pingo Doce — Poupa Mais', url: 'https://www.pingodoce.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'IPDJ — Cartão Jovem Europeu (site oficial)', url: 'https://cartaojovem.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'ACSS — Conselho Nacional Famílias Numerosas', url: 'https://famnumerosas.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Portal das Finanças — e-Fatura', url: 'https://faturas.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365,
  recentlyChangedAt: '2026-05-17',
  changeSummary: 'Novo guia: cartões de desconto e promoções em Portugal. Cartão Continente (o principal), Pingo Doce Poupa Mais, Cartão Jovem Europeu (12-29, ~60 categorias), Cartão Família Numerosa (para 3+ filhos), programas de lojas (KIWOKO, Decathlon, FNAC), sites de cashback (Letyshops, eBuyClub), agregadores de cupões (Radarcupao, Ocacapromocoes), reembolso de IVA via e-Fatura no IRS.'
}
