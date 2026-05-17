export default {
  editorialVoice: 'hackportugal',
  id: 'wineries-quintas-visita',
  categoryId: 'food_leisure',
  title: 'Enoturismo em quintas: Douro, Alentejo, Setúbal e Bairrada',
  tldr: 'Em 2026, uma visita a uma quinta com prova custa normalmente 30–100 € por pessoa: uma visita básica de 60–90 minutos com 2–4 vinhos — 20–45 €, uma opção premium com vinho do Porto, reserva ou almoço — 60–150 €. O Douro é o mais bonito, mas exige planeamento de transporte; o Alentejo é mais conveniente de carro; Setúbal é adequado para uma viagem curta a partir de Lisboa; a Bairrada é para espumante e leitão. Reserve online com 1–3 semanas de antecedência, especialmente entre maio e outubro.',
  tags: ['vinho', 'quintas', 'douro', 'provas'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'regions',
      title: '1. Escolha a região de acordo com o formato da viagem',
      content: [
        { kind: 'paragraph', text: 'Uma viagem pela wine country portuguesa não é apenas “provar vinho”. Normalmente, a quinta oferece uma visita às vinhas ou às caves, explica DOC/IGP, mostra lagares ou a barrel room e termina com uma prova. Quase em todo o lado é necessária reserva prévia: pode aparecer sem marcação, mas pode não haver vaga disponível.' },
        { kind: 'checklist', items: [
          'Douro Valley — socalcos, rio, vinho do Porto e Douro DOC secos. A melhor escolha para uma primeira visita com efeito “uau”.',
          'Alentejo — grandes herdades, estradas planas, calor no verão, vinhos tintos encorpados. Conveniente de carro a partir de Évora/Reguengos de Monsaraz.',
          'Setúbal — Moscatel de Setúbal, antiga tradição vinícola, fácil de visitar a partir de Lisboa numa viagem de meio dia.',
          'Bairrada — espumante, Baga, gastronomia com leitão da Bairrada. Combina bem com Coimbra/Aveiro.',
          'Vinho Verde — uma região do norte à parte; a Aveleda fica em Penafiel e não pertence à Bairrada, embora apareça frequentemente em roteiros turísticos de vinho.',
          'Se não bebe álcool, pergunte antecipadamente sobre non-drinker rate: algumas quintas cobram o preço total da visita, outras fazem desconto.'
        ] },
        { kind: 'warning', text: 'Não planeie 4–5 provas num só dia. Um limite realista é 2 quintas, no máximo 3 com motorista privado. No Douro, as deslocações por estradas sinuosas demoram mais do que o mapa indica.' }
      ]
    },
    {
      id: 'douro',
      title: '2. Douro: Quinta do Crasto, Quinta do Seixo e logística',
      content: [
        { kind: 'paragraph', text: 'O Douro Valley é património da UNESCO e a região vinícola mais fotogénica de Portugal. As principais bases para pernoitar são Peso da Régua, Pinhão, Lamego e Vila Real. Para vistas sobre o rio e os socalcos, costuma escolher-se a zona do Pinhão.' },
        { kind: 'checklist', items: [
          'Quinta do Crasto — uma opção forte para uma visita premium: vistas, vinhas velhas, Douro DOC, por vezes provas limitadas. É obrigatório reservar com antecedência.',
          'Quinta do Seixo — conhecida quinta da Sandeman junto ao Pinhão: vinho do Porto, panorama sobre o Douro, formato mais “turisticamente afinado”.',
          'As visitas básicas no Douro custam normalmente 30–50 €; provas alargadas com reserva/vintage port — 60–100 €+.',
          'O comboio Porto São Bento/Campanhã → Peso da Régua ou Pinhão é cénico, mas os horários limitam o número de visitas.',
          'Um carro alugado dá liberdade, mas o condutor não deve beber: a polícia fiscaliza e as multas por álcool ao volante são elevadas.',
          'Um day tour privado a partir do Porto custa frequentemente 90–180 € por pessoa em grupo ou 250–500 €+ por carro com motorista.',
          'Melhores meses: abril–junho e setembro–outubro. Em agosto faz calor e há muitos turistas; durante a vindima, algumas quintas limitam os horários.'
        ] },
        { kind: 'paragraph', text: 'Um roteiro prático sem pressas: noite no Pinhão, de manhã Quinta do Seixo, almoço junto ao rio, depois de almoço Quinta do Crasto ou outra quinta com vista. Se vier do Porto apenas por um dia, escolha 1–2 visitas, e não “todo o Douro num dia”.' }
      ]
    },
    {
      id: 'south',
      title: '3. Alentejo e Setúbal: mais simples a partir de Lisboa',
      content: [
        { kind: 'paragraph', text: 'O Alentejo e Setúbal são convenientes para expats em Lisboa: menos estradas sinuosas, estacionamento mais simples e mais opções de day trip. Mas no verão, no Alentejo, a temperatura passa facilmente dos 35 °C, por isso é melhor marcar as provas para a manhã.' },
        { kind: 'substeps', items: [
          {
            id: 'alentejo',
            title: 'Alentejo: Herdade do Esporão',
            content: [
              { kind: 'paragraph', text: 'A Herdade do Esporão, perto de Reguengos de Monsaraz, é uma das opções mais fáceis de entender para uma primeira visita ao Alentejo: adega, azeite, restaurante, loja e diferentes níveis de provas.' },
              { kind: 'checklist', items: [
                'A prova básica é normalmente mais barata do que uma visita premium com reserva/private selection.',
                'Reserve o almoço no restaurante separadamente: os lugares para fins de semana esgotam com antecedência.',
                'De Lisboa, de carro, são cerca de 2 horas; de transporte público é pouco prático.',
                'Boa combinação: Évora + Monsaraz + Esporão, mas é melhor com pernoita.'
              ] }
            ]
          },
          {
            id: 'setubal',
            title: 'Setúbal: José Maria da Fonseca e Moscatel',
            content: [
              { kind: 'paragraph', text: 'A José Maria da Fonseca, em Azeitão, é um clássico para Moscatel de Setúbal e uma das visitas vinícolas mais convenientes a partir de Lisboa. O formato adequa-se mesmo a quem não quer gastar o dia inteiro.' },
              { kind: 'checklist', items: [
                'A partir de Lisboa, pode ir de carro, táxi/TVDE ou combinar comboio até Setúbal com transporte local.',
                'Depois da prova, é fácil acrescentar queijo de Azeitão, Serra da Arrábida ou praias da Arrábida.',
                'O Moscatel é doce e fortificado: a prova é pequena em volume, mas o álcool sente-se.',
                'Para fins de semana, reserve pelo menos com uma semana de antecedência; no verão, mais cedo.'
              ] }
            ]
          }
        ] }
      ]
    },
    {
      id: 'bairrada-aveleda',
      title: '4. Bairrada, espumante e uma correção importante sobre a Aveleda',
      content: [
        { kind: 'paragraph', text: 'A Bairrada fica entre Coimbra e Aveiro. É a região da Baga, do espumante e do leitão da Bairrada. Se viajar do Porto em direção a Coimbra ou Aveiro, é fácil integrar a Bairrada num roteiro de meio dia.' },
        { kind: 'warning', text: 'A Aveleda é uma quinta conhecida em Penafiel, na região dos Vinhos Verdes, e não na Bairrada. Se o objetivo for especificamente a Bairrada, procure adegas à volta de Anadia, Mealhada, Cantanhede e Curia. Se o objetivo for uma quinta bonita com jardim e Vinhos Verdes brancos leves — a Aveleda é uma excelente opção separada.' },
        { kind: 'checklist', items: [
          'Para a Bairrada, procure visitas com espumante: a região é forte em vinhos espumantes pelo método clássico.',
          'A combinação “prova + leitão da Bairrada” é o principal cenário gastronómico.',
          'Do Porto de carro até Anadia/Mealhada — cerca de 1–1,5 horas; de Coimbra — 25–40 minutos.',
          'A Aveleda a partir do Porto — cerca de 35–50 minutos de carro; é mais conveniente como uma curta north trip, e não como roteiro da Bairrada.',
          'Em quintas pequenas, a visita em inglês pode não existir todos os dias — confirme o idioma ao reservar.'
        ] }
      ]
    },
    {
      id: 'booking',
      title: '5. Como reservar e o que verificar antes de pagar',
      content: [
        { kind: 'paragraph', text: 'O caminho mais fiável é o site da própria quinta ou o e-mail. Os marketplaces são convenientes, mas têm comissões mais altas e, por vezes, menos flexibilidade para remarcações. Para locais populares no Douro, Alentejo e Setúbal em época alta, reserve com 1–3 semanas de antecedência; para a vindima e fins de semana prolongados — com 3–6 semanas.' },
        { kind: 'checklist', items: [
          'Data, hora e idioma da visita: Portuguese/English/French/Spanish.',
          'O que está incluído: apenas tasting, cellar visit, vineyard walk, museum, olive oil tasting, lunch.',
          'Quantos vinhos: 2, 3, 4 ou premium flight; se há port/Moscatel/espumante.',
          'Duração: normalmente 60–90 minutos; com almoço, 2–3 horas.',
          'Política de cancelamento: free cancellation com 24–72 horas de antecedência ou non-refundable.',
          'Acessibilidade para crianças: se é possível ir com criança, carrinho de bebé, adolescentes.',
          'Estacionamento e estrada: especialmente importante no Douro, onde o acesso à quinta pode ser estreito.',
          'Se é possível comprar vinho no local e enviar delivery em Portugal/EU.',
          'Se é necessário pré-pagamento com cartão; algumas quintas aceitam Multibanco/MB WAY apenas para clientes portugueses.'
        ] },
        { kind: 'warning', text: 'Limite de álcool ao volante em Portugal: o limite geral é 0,5 g/l; para condutores recém-encartados e profissionais — 0,2 g/l. Depois de uma prova, é mais seguro ter um condutor que não beba, escolher uma visita com transfer ou pernoitar perto.' }
      ]
    },
    {
      id: 'budget',
      title: '6. Orçamento e cenários prontos para 2026',
      content: [
        { kind: 'paragraph', text: 'Os preços variam muito consoante a marca, o nível dos vinhos e a existência de comida. Em 2026, uma referência normal para uma visita de qualidade é 30–100 € por pessoa sem transporte. Tudo o que inclua almoço, rare bottles ou private guide passa facilmente dos 100 €.' },
        { kind: 'checklist', items: [
          'Económico: 1 quinta + prova simples — 20–35 € por pessoa, transporte à parte.',
          'Conforto: 2 quintas num dia + almoço — 70–140 € por pessoa sem pernoita.',
          'Douro com pernoita: comboio/carro, 2 provas, jantar e hotel — frequentemente 180–350 € por pessoa para 2 dias.',
          'A partir de Lisboa sem carro: Setúbal/Azeitão com TVDE ou pequeno tour — normalmente mais barato do que o Douro.',
          'Formato de presente: premium tasting ou private tour — 80–150 €+ por pessoa.',
          'Comprar vinho no local nem sempre é mais barato do que no supermercado, mas pode haver bottles exclusivas e colheitas antigas.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Prova básica numa quinta', amountEURMin: 20, amountEURMax: 45, note: 'Normalmente 60–90 minutos, 2–4 vinhos, sem comida' },
    { label: 'Prova alargada / premium flight', amountEURMin: 60, amountEURMax: 100, note: 'Reserva, port, Moscatel, espumante ou gamas raras' },
    { label: 'Visita com almoço', amountEURMin: 80, amountEURMax: 150, note: 'O preço depende do restaurante e do pairing; em herdades conhecidas pode ser mais alto' },
    { label: 'Day tour de grupo do Porto ao Douro', amountEURMin: 90, amountEURMax: 180, note: 'Normalmente inclui transporte, 1–2 visitas e por vezes almoço/cruzeiro' },
    { label: 'Motorista privado/visita de um dia', amountEURMin: 250, amountEURMax: 500, note: 'Por carro ou pequeno grupo; Douro e Alentejo são mais caros devido à distância' }
  ],
  sources: [
    { title: 'Instituto dos Vinhos do Douro e do Porto — informação oficial sobre o Douro e o Port', url: 'https://www.ivdp.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Douro Valley — portal turístico da região do Douro', url: 'https://www.dourovalley.eu', kind: 'official', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'Herdade do Esporão — visitas e provas oficiais', url: 'https://www.esporao.com/en/winetourism/herdade-do-esporao/', kind: 'company', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'José Maria da Fonseca — visitas oficiais de enoturismo', url: 'https://www.jmf.pt/index.php?id=95', kind: 'company', language: 'en', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
