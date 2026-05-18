export default {
  editorialVoice: 'hackportugal',
  id: 'promo-codes-aggregator',
  categoryId: 'daily_life',
  title: 'Cartões de desconto, códigos promocionais e cashback em Portugal — onde poupar',
  tldr: 'Principais programas de fidelização: Cartão Continente (Continente — o mais forte, descontos + acumulação em combustível Galp), Pingo Doce Poupa Mais (com BP), Cartão Jovem Europeu (para 12-29 anos, descontos em 60+ lojas e museus), Decathlon Card (10% de retorno em marcas Decathlon), KIWOKO Card (lojas de animais, gratuito com registo), Oceanário/Zoo de Lisboa (o passe anual compensa em 2 visitas).\n\nSites de cashback: Letyshops PT, eBuyClub PT. Agregadores de promoções: radarcupao.pt, ocacapromocoes.pt, Cuponation.pt. Em festivais, concertos e eventos culturais — o Cartão Jovem dá até 50% de desconto (enorme poupança para estudantes).\n\nTambém: programas com desconto Cartão dos Bombeiros, Cartão de Família Numerosa, reembolso no IRS através do e-fatura.',
  tags: ['descontos', 'códigos promocionais', 'cartão continente', 'cashback', 'poupança'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'supermarkets',
      title: 'Supermercados — a maior poupança',
      content: [
        { kind: 'paragraph', text: 'O Cartão Continente é o programa de fidelização mais forte em Portugal. Segundo dados próprios da cadeia, os utilizadores activos poupam ~10% do valor das compras ao longo do ano. O Pingo Doce fica em segundo lugar.' },
        { kind: 'substeps', items: [
          {
            id: 'continente',
            title: 'Cartão Continente',
            content: [
              { kind: 'checklist', items: [
                '🛒 Gratuito: obtenha em qualquer Continente em 1 minuto (passaporte + email)',
                '⛽ Acumulação: 10 cêntimos por litro de combustível na Galp vão para o seu saldo Continente (Galp Frota)',
                '💸 Mínimo de 2% em descontos acumulados sobre o valor das compras anuais',
                '🎟️ Cupões exclusivos: «cupões» personalizados chegam na app + SMS, por vezes 30-50% off em categorias',
                '🆕 Continente Carrega: subscrição de «5%/10% off» em lojas Continente (paga, compensa se gastar >150 €/mês)',
                '📱 App «Continente» — essencial; sem ela, os cupões não são activados'
              ]}
            ]
          },
          {
            id: 'pingo',
            title: 'Pingo Doce Poupa Mais',
            content: [
              { kind: 'checklist', items: [
                '🛒 Gratuito: obtenha na loja, registo em pingodoce.pt',
                '⛽ BP fuel program: 2 € no saldo de combustível BP por cada 40 € no Pingo Doce',
                '⛽ 1 000 BP Premier Plus points = 5 € no Pingo Doce',
                '💸 «Ganhe 20%»: alguns produtos devolvem 20% para o saldo Poupa Mais',
                '📱 App «Pingo Doce» — para activar cupões'
              ]}
            ]
          },
          {
            id: 'lidl',
            title: 'Lidl Plus / Auchan Plus',
            content: [
              { kind: 'checklist', items: [
                '🛒 Lidl Plus: gratuito através da app — cupões semanais, scratch-cards «fila bónus»',
                '🛒 Auchan Plus: gratuito, a acumulação de pontos converte-se em desconto',
                '🛒 Mini Preço, Aldi: sem programas de fidelização, descontos apenas nas promoções semanais'
              ]}
            ]
          }
        ]}
      ]
    },
    {
      id: 'youth-card',
      title: 'Cartão Jovem Europeu — must-have para 12-29 anos',
      content: [
        { kind: 'paragraph', text: 'Programa público do IPDJ (Instituto Português do Desporto e Juventude). Válido em todos os 38 países da European Youth Card Association. Validade de 1 ano, preço 11 € (por equivalente).' },
        { kind: 'checklist', items: [
          '🎯 Idade: 12-29 anos (inclusive)',
          '💶 Preço: 8 € (online) ou 11 € (nos balcões do IPDJ). Validade: 1 ano',
          '🎫 Descontos em Portugal: ~60 categorias de negócios, do cinema (FNAC -10%) a festivais (NOS Alive -15%)',
          '🚊 Transportes: CP (comboios) -25%, FlixBus -10%, Carris -50% no passe turístico',
          '🏛️ Museus: entrada gratuita em muitos museus públicos de Lisboa/Porto',
          '🌍 No estrangeiro: hostels, bares, cafés, ginásios — um milhão de ofertas por toda a Europa',
          '🎓 Alunos/estudantes: pedido através da escola/universidade, por vezes gratuito',
          '🌐 cartaojovem.pt — pedido, verificação de promoções activas'
        ]}
      ]
    },
    {
      id: 'family-card',
      title: 'Cartão de Família Numerosa — para famílias numerosas',
      content: [
        { kind: 'checklist', items: [
          '👨‍👩‍👧‍👦 Para famílias com 3+ filhos (biológicos ou adoptados)',
          '💶 Gratuito',
          '📉 Descontos: ~20% em transportes públicos, museus, piscinas, eventos culturais',
          '🏠 Descontos em electricidade (EDP), internet (MEO, NOS, Vodafone) — normalmente 20-30%',
          '🎓 Descontos em escolas, Jardins de Infância, campos de férias',
          '📋 Obtenção: através da ACSS (Conselho Nacional Famílias Numerosas), são necessárias certidões de nascimento dos filhos',
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
                '🐶 KIWOKO Card: gratuito, 5% de retorno em marcas KIWOKO, consultas veterinárias com desconto',
                '🐶 Petland Card: gratuito, pontos bónus',
                '🐶 PetXP / Animais & Cª: programas locais, pergunte na loja'
              ]}
            ]
          },
          {
            id: 'sport',
            title: 'Desporto',
            content: [
              { kind: 'checklist', items: [
                '⚽ Decathlon Card: gratuito através da app, 10% de retorno em marcas Decathlon (Quechua, Domyos, Kalenji), devolução gratuita de artigos durante 365 dias',
                '🏃 Sport Zone Card: gratuito, descontos durante campanhas',
                '🏃 SportLife / Worten Sport: programas locais'
              ]}
            ]
          },
          {
            id: 'culture',
            title: 'Cultura e entretenimento',
            content: [
              { kind: 'checklist', items: [
                '🎪 Oceanário de Lisboa: passe anual 39 € (adulto) — compensa em 2 visitas (entrada 22 €). Crianças grátis com o passe de um dos pais',
                '🦁 Jardim Zoológico de Lisboa: passe anual 50 € — compensa em 3 visitas',
                '🎬 NOS Cinemas Club: gratuito, acumulação por bilhetes, 10.º bilhete gratuito',
                '🎬 UCI Cinemas Card: programa semelhante',
                '🎟️ FNAC Card: 5 € pago, descontos em bilhetes para concertos, livros'
              ]}
            ]
          },
          {
            id: 'fashion',
            title: 'Roupa',
            content: [
              { kind: 'checklist', items: [
                '👕 Cartão Worten: gratuito, descontos e pontos bónus',
                '👗 Cartão Springfield / OYSHO / Mango: gratuito através da aplicação da marca',
                '👠 Cartão MO: gratuito, descontos em colecções exclusivas',
                '👞 Cartão Cinco / Salsa: gratuito, cashback local'
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
          '💸 Letyshops Portugal: 2-15% de retorno em compras em grandes lojas (Amazon PT, MediaMarkt, Booking.com); levantamento após 5 € acumulados',
          '💸 eBuyClub PT: o mesmo princípio, mais activo em roupa',
          '💸 ShopBuddies PT: foco na FashionUnited',
          '🎟️ Radarcupao.pt: catálogo de códigos promocionais activos para e-shops portugueses',
          '🎟️ Ocacapromocoes.pt: «caça às promoções» — comunidade de achados e cupões',
          '🎟️ Cuponation.pt: equivalente internacional',
          '📰 Mensagem-Mexer / blogs de lifestyle: publicam periodicamente códigos de primeira encomenda (Uber Eats, Glovo, Bolt Food)'
        ]}
      ]
    },
    {
      id: 'efatura',
      title: 'e-Fatura — reembolso de IVA através da autoridade tributária',
      content: [
        { kind: 'paragraph', text: 'Sempre que dá o seu NIF na caixa, adiciona a factura ao e-Fatura.gov.pt. No fim do ano, pode recuperar parte do IVA como dedução no IRS. Não é um «desconto», mas é dinheiro real de volta.' },
        { kind: 'checklist', items: [
          '🍽️ Restaurantes: 15% do IVA (máx 250 € por ano)',
          '🚗 Reparações de automóveis e motas: 15% do IVA (máx 250 €)',
          '💇 Cabeleireiros/salões de beleza: 15% do IVA (máx 250 €)',
          '🐾 Veterinária: 15% (máx 250 €)',
          '🏠 Gás, electricidade, água: 15% do IVA',
          '🎓 Educação (incluindo cursos, explicadores): 30% (máx 800 €)',
          '🏥 Saúde (incluindo farmácias): 15% (máx 1000 €)',
          '⚠️ IMPORTANTE: dê o NIF, caso contrário a factura não conta. Depois da compra, verifique em e-fatura.portaldasfinancas.gov.pt — aí pode «validar» facturas em dúvida'
        ]},
        { kind: 'paragraph', text: 'Mais detalhes — veja o guia separado «e-Fatura deductions».' }
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
  changeSummary: 'Novo guia: cartões de desconto e promoções em Portugal. Cartão Continente (principal), Pingo Doce Poupa Mais, Cartão Jovem Europeu (12-29 anos, ~60 categorias de descontos), Cartão Família Numerosa (para 3+ filhos), programas de lojas (KIWOKO, Decathlon, FNAC), sites de cashback (Letyshops, eBuyClub), agregadores de cupões (Radarcupao, Ocacapromocoes), reembolso de IVA via e-Fatura através do IRS.'
}
