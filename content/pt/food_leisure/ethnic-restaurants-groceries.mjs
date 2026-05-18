export default {
  editorialVoice: 'hackportugal',
  id: 'ethnic-restaurants-groceries',
  categoryId: 'food_leisure',
  title: 'Comida étnica — onde comprar produtos russos, georgianos e brasileiros',
  tldr: 'Em Lisboa e no Porto há lojas com produtos da CEI (Slavyanka, Bazar Russo, Euromercado), restaurantes georgianos e supermercados brasileiros (Brasa, Brasileirinho).\n\nEntrega a partir de Espanha — Tiendas de Rusia (Madrid): prazos e custos dependem da morada/peso/promoções; confirme no momento da encomenda. Em alguns Continente/Pingo Doce grandes aparecem por vezes produtos isolados da Europa de Leste, mas o sortido é instável. O vinho georgiano surge por vezes em garrafeiras especializadas e em campanhas temporárias do Lidl/outras cadeias; consulte o folheto atual.',
  tags: ['comida étnica', 'produtos russos', 'georgiana', 'brasileira'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'russian-shops',
      title: '🇷🇺 Produtos russos / ucranianos / bielorrussos',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: 'Lisboa', content: [
            { kind: 'checklist', items: [
              '**Slavyanka** (Av. Almirante Reis, Arroios) — a maior loja. Arenque, trigo-sarraceno, tvorog, natas ácidas, enchidos, rebuçados, vodka Stolichnaya',
              '**Bazar Russo** (Rua Gonçalo Mendes da Maia, Picoas) — mais pequena, mas mais perto do centro',
              '**Euromercado** (Amadora) — loja grande com um sortido amplo, preços mais baixos',
              '**Sortido mínimo**: em alguns Continente/Pingo Doce grandes aparecem por vezes produtos isolados da Europa de Leste, mas o sortido é instável; para trigo-sarraceno/arenque é mais seguro ir a lojas especializadas',
              'Preços típicos: trigo-sarraceno 4–6 €/kg, arenque 8–10 €/kg, caviar preto (imitação) 5–15 €/frasco, rebuçados 15–25 €/kg'
            ]}
          ]},
          { id: 'r2', title: 'Porto', content: [
            { kind: 'checklist', items: [
              '**Loja Lusitana-Russa** (zona do Bonfim)',
              '**Shop Slavia** (Areosa) — mais pequena, mas suficiente',
              'Em Braga, Coimbra — escolha limitada, trazem produtos de Lisboa/Porto'
            ]}
          ]},
          { id: 'r3', title: 'Algarve', content: [
            { kind: 'paragraph', text: 'No Algarve não há uma grande loja russa completa — muitos expats encomendam online a partir de Lisboa com entrega CTT. Confirme os pontos atuais em grupos locais de Facebook/Telegram antes de se deslocar.' }
          ]},
          { id: 'r4', title: 'Online e entrega', content: [
            { kind: 'checklist', items: [
              '**Tiendas de Rusia** (Espanha) — entregam em Portugal; prazos e custos dependem da morada/peso/promoções, confirme no momento da encomenda',
              '**RusKiosk** (Lisboa) — encomendas online com entrega em PT',
              '**Amazon PT/ES** — algumas marcas (espadilhas, compota)',
              '**Glovo** — a Slavyanka tem entrega num raio de 5–10 km'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'georgian',
      title: '🇬🇪 Cozinha georgiana',
      content: [
        { kind: 'paragraph', text: 'A diáspora georgiana em Portugal é relativamente pequena, mas ativa — há 5–7 restaurantes abertos em Lisboa e no Porto.' },
        { kind: 'substeps', items: [
          { id: 'g1', title: 'Restaurantes em Lisboa', content: [
            { kind: 'checklist', items: [
              '**Karater** (Príncipe Real) — o mais conhecido, khachapuri, khinkali, pkhali, vinho qvevri, 20–35 €/pessoa',
              '**Suliko** (Intendente) — formato acessível, porções grandes, 15–25 €',
              '**Sakartvelo** (Saldanha) — novo, menu completo, 18–30 €',
              '**Batumi** (Anjos) — fusão georgiana-caucasiana',
              '**Tbilisi Cafe** (Cais do Sodré) — café-bistro, 10–15 €'
            ]}
          ]},
          { id: 'g2', title: 'Porto', content: [
            { kind: 'checklist', items: [
              '**Adjara** (Ribeira) — vários tipos de khachapuri, 15–25 €',
              '**Tamar Gurmani** (Boavista) — ambiente caseiro'
            ]}
          ]},
          { id: 'g3', title: 'Produtos georgianos', content: [
            { kind: 'checklist', items: [
              'Especiarias (khmeli-suneli, utskho-suneli): na Slavyanka, em lojas orientais do Martim Moniz',
              'Polpa de tomate, adjika: nos mesmos locais',
              '**Vinhos georgianos**: surgem por vezes em garrafeiras especializadas e em campanhas temporárias do Lidl/outras cadeias; consulte o folheto atual',
              'Tkemali (ameixa), Adjika — em lojas online + secção gourmet do Continente',
              'Massa pronta/semipreparados para khachapuri são raros; mais frequentemente prepara-se de raiz ou usa-se massa levedada/folhada normal do supermercado'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'brazilian',
      title: '🇧🇷 Produtos brasileiros — a oferta mais ampla',
      content: [
        { kind: 'paragraph', text: 'Os brasileiros são a maior comunidade estrangeira em Portugal; é melhor confirmar a dimensão exata e atualizada junto da AIMA/INE. Há produtos e restaurantes em todo o lado.' },
        { kind: 'checklist', items: [
          '**Brasa** — cadeia de supermercados brasileiros, Lisboa/Porto/Algarve',
          '**Brasileirinho** (Almada, Porto Barredo) — linha completa de produtos brasileiros',
          '**Big Supermercado Brasileiro** (Albufeira, Algarve)',
          '**Nos Continente/Pingo Doce grandes** há frequentemente produtos brasileiros específicos: farofa, tapioca, feijão preto, guaraná, mistura para pão de queijo, mandioca, caju; o sortido depende da loja',
          '**Carne**: picanha, fraldinha em todas as secções de talho',
          '**Restaurantes**: Copacabana (Saldanha), Rodízio do Brasil (muitas localizações) — churrasco ilimitado 20–30 €',
          '**Lojas de açaí**: Guavaberry, Berri — a popularidade está a crescer'
        ]}
      ]
    },
    {
      id: 'other',
      title: '🌏 Outras cozinhas étnicas',
      content: [
        { kind: 'checklist', items: [
          '🇺🇦 **Ucranianas**: em muitas lojas russas (conjunto para borscht, queijo “Korolivskyi”). Loja separada “Ukraina” em Almada',
          '🇮🇳 **Indianas**: Martim Moniz / Intendente — cerca de 10 lojas (masala, dal, basmati, paneer). Restaurantes por todo o lado',
          '🇨🇳 **Chinesas**: Martim Moniz / Chelas — supermercados China-Plus, especiarias, molhos, noodles',
          '🇲🇽 **Mexicanas**: secção gourmet do Continente + Amazon; é possível passar sem tortilhas',
          '🇮🇹 **Italianas**: secções gourmet do Continente + lojas especializadas (Flavio no Chiado)',
          '🇵🇰 **Paquistanesas / bengalis**: Martim Moniz, carne halal',
          '🇪🇹 **Africanas** (cabo-verdianas, angolanas): Mercado da Galiza, Bairro Alto',
          '🇯🇵 **Japonesas**: Tsukiji (Liberdade), ShigShu (Saldanha), Mitsuba Mini (Estrela)',
          '🇰🇷 **Coreanas**: Muru (Bairro Alto), Korean Grocery (Saldanha) — kimchi, soju, ramen'
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Conselhos',
      content: [
        { kind: 'checklist', items: [
          '📅 **Festivais**: acompanhe as agendas da Casa da América Latina, dos municípios de Lisboa/Porto e dos grupos comunitários ucranianos e georgianos; as datas dos festivais gastronómicos mudam todos os anos',
          '👨‍👩‍👧 **Martim Moniz** — bairro multiétnico de Lisboa — produtos de todos os continentes, melhores preços',
          '💰 **Preços**: os produtos étnicos são cerca de 30–70% mais caros do que no país de origem (custos de importação)',
          '🚚 **Encomendas grandes** de Espanha (Madrid) — muitas vezes chegam de autocarro/através de viagens partilhadas de carro, poupança de 20–30%',
          '📱 **Grupos no Facebook**: “Produtos russos em Portugal”, “Georgian Community Portugal” — venda/troca',
          '🍷 **Vinho georgiano** aparece por vezes no Lidl/outras cadeias no âmbito de campanhas temporárias de vinhos; consulte o folheto e a aplicação Lidl Plus'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Ida típica ao supermercado', amountEURMin: 30, amountEURMax: 80 },
    { label: 'Restaurante georgiano (2 pessoas)', amountEURMin: 35, amountEURMax: 70 },
    { label: 'Entrega Tiendas de Rusia a partir de ES', amountEURMin: 5, amountEURMax: 25, note: 'depende do peso/morada; há promoções com entrega gratuita a partir de determinado valor — confirme ao encomendar' }
  ],
  sources: [
    { title: 'Visit Lisboa — Restaurantes étnicos', url: 'https://www.visitlisboa.com/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Tiendas de Rusia (ES entrega em PT)', url: 'https://www.tiendasderusia.es/', kind: 'company', language: 'ru', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
