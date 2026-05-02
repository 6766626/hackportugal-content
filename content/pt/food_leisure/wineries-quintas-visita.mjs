export default {
  editorialVoice: 'hackportugal',
  id: 'wineries-quintas-visita',
  categoryId: 'food_leisure',
  title: 'Enoturismo em quintas: Douro, Alentejo, Setúbal e Bairrada',
  tldr: 'Em 2026, uma visita a uma quinta com degustação custa normalmente 30–100 € por pessoa: um tour básico de 60–90 minutos com 2–4 vinhos — 20–45 €, uma experiência premium com vinho do Porto, reserva ou almoço — 60–150 €. O Douro é o mais bonito, mas exige planeamento de transporte; o Alentejo é mais prático de carro; Setúbal é adequado para uma escapadinha curta a partir de Lisboa; a Bairrada é para espumante e leitão. Reserve online com 1–3 semanas de antecedência, sobretudo entre maio e outubro.',
  tags: ['vinho', 'quintas', 'douro', 'degustações'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'regions',
      title: '1. Escolha a região de acordo com o formato da viagem',
      content: [
        { kind: 'paragraph', text: 'Uma viagem pela wine country portuguesa não é apenas “provar vinho”. Normalmente, a quinta oferece uma visita às vinhas ou às caves, explica DOC/IGP, mostra lagares ou barrel room e termina com uma degustação. Quase em todo o lado é necessária reserva prévia: pode aparecer sem marcação, mas pode não haver vaga disponível.' },
        { kind: 'checklist', items: [
          'Douro Valley — socalcos, rio, vinho do Porto e Douro DOC secos. A melhor escolha para um primeiro tour com efeito “uau”.',
          'Alentejo — grandes herdades, estradas planas, calor no verão, vinhos tintos encorpados. Prático de carro a partir de Évora/Reguengos de Monsaraz.',
          'Setúbal — Moscatel de Setúbal, história vinícola antiga, fácil de visitar a partir de Lisboa em meio dia.',
          'Bairrada — espumante, Baga, gastronomia com leitão da Bairrada. Combina bem com Coimbra/Aveiro.',
          'Vinho Verde — uma região autónoma no norte; a Aveleda fica em Penafiel e não pertence à Bairrada, embora apareça frequentemente em roteiros turísticos de vinho.',
          'Se não bebe álcool, pergunte antecipadamente sobre uma tarifa para non-drinker: algumas quintas cobram na mesma o preço total do tour, outras fazem desconto.'
        ] },
        { kind: 'warning', text: 'Não planeie 4–5 degustações no mesmo dia. O limite realista é 2 quintas, no máximo 3 com motorista privado. No Douro, as deslocações por estradas sinuosas demoram mais do que o mapa indica.' }
      ]
    },
    {
      id: 'douro',
      title: '2. Douro: Quinta do Crasto, Quinta do Seixo e logística',
      content: [
        { kind: 'paragraph', text: 'O Douro Valley é património da UNESCO e a região vinícola mais fotogénica de Portugal. As principais bases para pernoitar são Peso da Régua, Pinhão, Lamego e Vila Real. Para vistas sobre o rio e os socalcos, a zona do Pinhão é frequentemente a preferida.' },
        { kind: 'checklist', items: [
          'Quinta do Crasto — uma opção forte para um tour premium: vistas, vinhas velhas, Douro DOC, por vezes degustações limitadas. É obrigatório reservar com antecedência.',
          'Quinta do Seixo — conhecida quinta da Sandeman perto do Pinhão: vinho do Porto, panorama sobre o Douro, formato mais “turisticamente afinado”.',
          'Os tours básicos no Douro custam normalmente 30–50 €; degustações alargadas com reserva/vintage port — 60–100 €+.',
          'Comboio Porto São Bento/Campanhã → Peso da Régua ou Pinhão — muito cénico, mas os horários limitam o número de visitas.',
          'Um carro alugado dá liberdade, mas o condutor não deve beber: a polícia fiscaliza e as multas por álcool ao volante são elevadas.',
          'Um day tour privado a partir do Porto custa frequentemente 90–180 € por pessoa em grupo ou 250–500 €+ por carro com motorista.',
          'Melhores meses: abril–junho e setembro–outubro. Em agosto faz calor e há muitos turistas; durante a vindima, algumas quintas limitam os horários disponíveis.'
        ] },
        { kind: 'paragraph', text: 'Roteiro prático sem pressas: noite no Pinhão, de manhã Quinta do Seixo, almoço junto ao rio, depois do almoço Quinta do Crasto ou outra quinta com vista. Se for do Porto num só dia, escolha 1–2 visitas, e não “todo o Douro num dia”.' }
      ]
    },
    {
      id: 'south',
      title: '3. Alentejo e Setúbal: mais simples a partir de Lisboa',
      content: [
        { kind: 'paragraph', text: 'O Alentejo e Setúbal são práticos para expats em Lisboa: menos estradas sinuosas, estacionamento mais fácil e mais opções de day trip. Mas no verão, no Alentejo, a temperatura ultrapassa facilmente os 35 °C, por isso é melhor marcar as degustações para a manhã.' },
        { kind: 'substeps', items: [
          {
            id: 'alentejo',
            title: 'Alentejo: Herdade do Esporão',
            content: [
              { kind: 'paragraph', text: 'A Herdade do Esporão, perto de Reguengos de Monsaraz, é uma das opções mais claras para uma primeira visita ao Alentejo: adega, azeite, restaurante, loja e vários níveis de degustação.' },
              { kind: 'checklist', items: [
                'A degustação básica é normalmente mais barata do que um tour premium com reserva/private selection.',
                'Reserve o almoço no restaurante separadamente: os lugares de fim de semana esgotam com antecedência.',
                'De Lisboa de carro — cerca de 2 horas; de transportes públicos é pouco prático.',
                'Boa combinação: Évora + Monsaraz + Esporão, mas de preferência com pernoita.'
              ] }
            ]
          },
          {
            id: 'setubal',
            title: 'Setúbal: José Maria da Fonseca e Moscatel',
            content: [
              { kind: 'paragraph', text: 'A José Maria da Fonseca, em Azeitão, é um clássico para Moscatel de Setúbal e uma das visitas de vinho mais convenientes a partir de Lisboa. O formato é adequado mesmo para quem não quer gastar o dia inteiro.' },
              { kind: 'checklist', items: [
                'A partir de Lisboa, pode ir de carro, táxi/TVDE ou combinar o comboio até Setúbal com transporte local.',
                'Depois da degustação, é fácil acrescentar queijo de Azeitão, Serra da Arrábida ou as praias da Arrábida.',
                'O Moscatel é doce e fortificado: a degustação é pequena em volume, mas o álcool sente-se.',
                'Para fins de semana, reserve com pelo menos uma semana de antecedência; no verão, ainda mais cedo.'
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
        { kind: 'warning', text: 'A Aveleda é uma quinta conhecida em Penafiel, na região do Vinho Verde, e não na Bairrada. Se o objetivo for especificamente a Bairrada, procure adegas à volta de Anadia, Mealhada, Cantanhede e Curia. Se o objetivo for uma quinta bonita com jardim e brancos leves de Vinho Verde — a Aveleda é uma excelente opção separada.' },
        { kind: 'checklist', items: [
          'Para a Bairrada, procure tours com espumante: a região é forte em vinhos espumantes pelo método clássico.',
          'A combinação “degustação + leitão da Bairrada” é o principal cenário gastronómico.',
          'Do Porto de carro até Anadia/Mealhada — cerca de 1–1,5 horas; de Coimbra — 25–40 minutos.',
          'A Aveleda a partir do Porto — cerca de 35–50 minutos de carro; é mais adequada como uma north trip curta do que como roteiro da Bairrada.',
          'Em quintas pequenas, o tour em inglês pode não estar disponível todos os dias — confirme o idioma ao reservar.'
        ] }
      ]
    },
    {
      id: 'booking',
      title: '5. Como reservar e o que verificar antes de pagar',
      content: [
        { kind: 'paragraph', text: 'O caminho mais fiável é o site da própria quinta ou e-mail. Os marketplaces são práticos, mas têm comissões mais altas e, por vezes, menor flexibilidade para alterações. Para locais populares no Douro, Alentejo e Setúbal em época alta, reserve com 1–3 semanas de antecedência; para a vindima e fins de semana prolongados — com 3–6 semanas.' },
        { kind: 'checklist', items: [
          'Data, hora e idioma do tour: Portuguese/English/French/Spanish.',
          'O que está incluído: apenas tasting, cellar visit, vineyard walk, museum, olive oil tasting, lunch.',
          'Quantos vinhos: 2, 3, 4 ou premium flight; se inclui port/Moscatel/espumante.',
          'Duração: normalmente 60–90 minutos; com almoço, 2–3 horas.',
          'Política de cancelamento: free cancellation com 24–72 horas de antecedência ou non-refundable.',
          'Acessibilidade para crianças: se é possível ir com criança, carrinho de bebé ou adolescentes.',
          'Estacionamento e estrada: especialmente importante no Douro, onde o acesso à quinta pode ser estreito.',
          'Se é possível comprar vinho no local e enviar por delivery em Portugal/EU.',
          'Se é necessário pagamento antecipado por cartão; algumas quintas aceitam Multibanco/MB WAY apenas para clientes portugueses.'
        ] },
        { kind: 'warning', text: 'Limite de álcool ao volante em Portugal: o limite geral é 0,5 g/l; para novos condutores e profissionais — 0,2 g/l. Depois de uma degustação, é mais seguro ter um condutor que não beba, escolher um tour com transfer ou pernoitar perto.' }
      ]
    },
    {
      id: 'budget',
      title: '6. Orçamento e cenários prontos para 2026',
      content: [
        { kind: 'paragraph', text: 'Os preços dependem muito da marca, do nível dos vinhos e da existência de comida. Em 2026, uma referência normal para uma visita de qualidade é 30–100 € por pessoa sem transporte. Tudo o que inclui almoço, rare bottles ou private guide ultrapassa facilmente os 100 €.' },
        { kind: 'checklist', items: [
          'Económico: 1 quinta + degustação simples — 20–35 € por pessoa, transporte à parte.',
          'Conforto: 2 quintas num dia + almoço — 70–140 € por pessoa sem pernoita.',
          'Douro com pernoita: comboio/carro, 2 degustações, jantar e hotel — frequentemente 180–350 € por pessoa por 2 dias.',
          'A partir de Lisboa sem carro: Setúbal/Azeitão com TVDE ou tour pequeno — normalmente mais barato do que o Douro.',
          'Formato presente: premium tasting ou private tour — 80–150 €+ por pessoa.',
          'Comprar vinho no local nem sempre é mais barato do que no supermercado, mas pode haver bottles exclusivas e colheitas antigas.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Degustação básica numa quinta', amountEURMin: 20, amountEURMax: 45, note: 'Normalmente 60–90 minutos, 2–4 vinhos, sem comida' },
    { label: 'Degustação alargada / premium flight', amountEURMin: 60, amountEURMax: 100, note: 'Reserva, port, Moscatel, espumante ou gamas raras' },
    { label: 'Tour com almoço', amountEURMin: 80, amountEURMax: 150, note: 'O preço depende do restaurante e do pairing; em herdades conhecidas pode ser mais alto' },
    { label: 'Day tour em grupo do Porto ao Douro', amountEURMin: 90, amountEURMax: 180, note: 'Normalmente inclui transporte, 1–2 visitas e, por vezes, almoço/cruzeiro' },
    { label: 'Motorista privado/tour de um dia', amountEURMin: 250, amountEURMax: 500, note: 'Por carro ou pequeno grupo; Douro e Alentejo são mais caros devido à distância' }
  ],
  sources: [
    { title: 'Instituto dos Vinhos do Douro e do Porto — informação oficial sobre o Douro e o Porto', url: 'https://www.ivdp.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Douro Valley — portal turístico da região do Douro', url: 'https://www.dourovalley.eu', kind: 'official', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'Herdade do Esporão — visitas e degustações oficiais', url: 'https://www.esporao.com/en/visit-us/herdade-do-esporao/', kind: 'company', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'José Maria da Fonseca — visitas oficiais de wine tourism', url: 'https://www.jmf.pt/en/wine-tourism/', kind: 'company', language: 'en', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
