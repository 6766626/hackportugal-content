export default {
  editorialVoice: 'hackportugal',
  id: 'rede-expressos-flixbus',
  categoryId: 'public_transport',
  title: 'Rede Expressos e FlixBus — autocarros interurbanos',
  tldr: 'O autocarro interurbano em Portugal é a forma mais simples de viajar sem carro: os bilhetes começam normalmente nos 5 €, Lisboa—Porto custa frequentemente 15–25 € na Rede Expressos e pode ser mais barato em promoções da FlixBus. A Rede Expressos oferece a rede nacional mais densa e muitas localidades pequenas; a FlixBus é forte nas rotas populares e nas viagens internacionais. Compre online, chegue 15–20 minutos antes e confirme o terminal de partida: Lisboa Sete Rios, Oriente e outros são pontos diferentes.',
  tags: ['autocarros', 'rede', 'flixbus', 'transporte'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'when-bus-makes-sense',
      title: 'Quando o autocarro faz mais sentido do que o comboio ou o carro',
      content: [
        { kind: 'paragraph', text: 'Em Portugal, os autocarros interurbanos cobrem destinos a que a Comboios de Portugal não chega ou onde a viagem exige transbordos: pequenas cidades do Alentejo, Trás-os-Montes, parte do Algarve, zonas em redor de Coimbra, Viseu, Bragança, Castelo Branco.' },
        { kind: 'checklist', items: [
          'Lisboa—Porto: 3 h 15 min – 3 h 45 min, consoante o serviço e as paragens; um bilhete online típico custa 15–25 € na Rede Expressos, e na FlixBus pode aparecer por 5–10 € em datas compradas com antecedência.',
          'Lisboa—Faro: cerca de 3 h 15 min – 4 h; muitas vezes mais barato do que o comboio, sobretudo comprando com antecedência.',
          'Porto—Braga/Guimarães/Aveiro: o autocarro é conveniente se o terminal rodoviário lhe ficar mais perto, mas o comboio é frequentemente mais barato e mais regular.',
          'Lisboa—Évora/Beja: a Rede Expressos costuma ser mais prática do que o comboio em termos de horários.',
          'Porto—Viseu/Bragança: o autocarro é o principal transporte público.',
          'Viagens internacionais: a FlixBus é conveniente para Madrid, Sevilha, Vigo, Santiago de Compostela, Paris e outros destinos.'
        ] }
      ]
    },
    {
      id: 'choose-operator',
      title: 'Como escolher o operador',
      content: [
        { kind: 'paragraph', text: 'Os dois nomes principais para um expatriado são a Rede Expressos e a FlixBus. Competem parcialmente, mas não se substituem uma à outra.' },
        { kind: 'substeps', items: [
          { id: 'rede-expressos', title: 'Rede Expressos', content: [
            { kind: 'paragraph', text: 'Rede nacional com grande cobertura em Portugal. É uma boa escolha se não vai apenas entre Lisboa e Porto, mas também para cidades médias e pequenas.' },
            { kind: 'checklist', items: [
              'Site e aplicação: rede-expressos.pt.',
              'Muitas partidas de Lisboa Sete Rios, Lisboa Oriente, Porto Campanhã e terminais regionais.',
              'Os bilhetes são normalmente nominativos: tenha o documento e o código QR à mão.',
              'Nas rotas populares, os preços sobem à medida que a data se aproxima, especialmente à sexta-feira à noite, ao domingo e antes de feriados.',
              'Reembolso/troca depende da tarifa e do tempo até à partida — confirme as condições antes de pagar.'
            ] }
          ] },
          { id: 'flixbus', title: 'FlixBus', content: [
            { kind: 'paragraph', text: 'Frequentemente mais barata nas rotas populares e especialmente útil para viagens internacionais. Dentro de Portugal funciona bem nas ligações Lisboa—Porto, Lisboa—Faro, Porto—Braga/Guimarães e em destinos sazonais.' },
            { kind: 'checklist', items: [
              'Site e aplicação: flixbus.pt.',
              'Bilhetes desde 5 € aparecem ao comprar com antecedência ou em promoções, mas em datas de maior procura o preço pode ficar acima da Rede Expressos.',
              'A aplicação é prática para alterar o bilhete, acompanhar o autocarro e mostrar o código QR.',
              'Lugares, bagagem acima da franquia, opções flexíveis e SMS podem ser pagos.',
              'A paragem da FlixBus nem sempre fica dentro do terminal principal — leia com atenção a morada e o mapa no bilhete.'
            ] }
          ] },
          { id: 'regional', title: 'Transdev, EvaBus, Vamus Algarve e operadores locais', content: [
            { kind: 'paragraph', text: 'Para rotas regionais, não procure apenas a Rede Expressos e a FlixBus. No Centro e no Norte encontra-se a Transdev; no Algarve, a EvaBus/Vamus Algarve e as linhas regionais têm historicamente importância. Na prática, a melhor pesquisa é Google Maps + sites dos operadores + terminal da cidade.' }
          ] }
        ] }
      ]
    },
    {
      id: 'buy-ticket',
      title: 'Comprar bilhete sem complicações desnecessárias',
      content: [
        { kind: 'paragraph', text: 'A forma mais fiável é comprar online no site ou na aplicação do operador. É possível comprar na bilheteira, mas nos serviços populares pode não haver lugares e, nos terminais pequenos, a bilheteira pode não funcionar durante todo o dia.' },
        { kind: 'checklist', items: [
          'Confirme a cidade e o terminal exactos: Lisboa Sete Rios, Lisboa Oriente, Porto Campanhã, Aeroporto, Braga Central de Camionagem — são locais diferentes.',
          'Compare a Rede Expressos e a FlixBus para a mesma data: a diferença de preço pode ser de 2–20 €.',
          'Veja não só o preço, mas também a duração: um serviço barato pode demorar mais 1 hora por causa das paragens.',
          'Compre com 1–3 semanas de antecedência para feriados, fins-de-semana prolongados, sextas-feiras de Verão e domingos.',
          'O pagamento é normalmente feito por cartão bancário; cartões portugueses, MB WAY e Multibanco não estão disponíveis em todos os operadores nem em todos os canais.',
          'Guarde o PDF/código QR offline: a rede móvel nos terminais e durante a viagem pode ser instável.',
          'Se precisar de factura para a contabilidade, procure o campo NIF/fatura antes do pagamento; depois da compra, adicionar o NIF pode ser difícil ou impossível.'
        ] },
        { kind: 'warning', text: 'Não compre uma “ligação” como dois bilhetes independentes com um intervalo curto de 10–20 minutos. Se o primeiro autocarro se atrasar, o segundo operador normalmente não é obrigado a transferi-lo gratuitamente.' }
      ]
    },
    {
      id: 'boarding-and-luggage',
      title: 'Embarque, bagagem e regras a bordo',
      content: [
        { kind: 'paragraph', text: 'Chegue ao terminal 15–20 minutos antes, e para uma viagem internacional — 30 minutos antes. O motorista digitaliza o código QR e, por vezes, pede um documento. A bagagem vai no compartimento inferior do autocarro; a bagagem de mão vai para o interior.' },
        { kind: 'checklist', items: [
          'Confirme a plataforma no painel e com os funcionários: pode mudar poucos minutos antes da partida.',
          'Na Rede Expressos e na FlixBus, normalmente estão incluídas bagagem de mão e uma mala no compartimento, mas os limites exactos de peso/tamanho dependem das condições tarifárias em vigor.',
          'Na FlixBus, a franquia típica é 1 bagagem de mão até 7 kg e 1 bagagem registada até 20 kg; a bagagem extra deve ser adicionada previamente e é paga.',
          'Bicicletas, trotinetes, malas grandes, instrumentos musicais e animais — apenas segundo regras específicas do operador; não conte resolver isso com o motorista.',
          'Leve passaporte/Cartão de Residência em viagens internacionais, mesmo dentro do Espaço Schengen: podem ocorrer controlos.',
          'Os autocarros têm muitas vezes Wi‑Fi e tomadas, mas não planeie trabalho crítico com base nisso — a qualidade é instável.',
          'Comida e bebidas são aceitáveis dentro do razoável; álcool, comida com cheiro intenso e chamadas em alta voz são um caminho rápido para conflitos.'
        ] },
        { kind: 'warning', text: 'Não deixe documentos, portátil, dinheiro e chaves na mala no compartimento de bagagem. Nas paragens intermédias, a bagagem é retirada rapidamente, e o operador normalmente limita a responsabilidade por objectos de valor.' }
      ]
    },
    {
      id: 'stations-and-local-transfer',
      title: 'Principais terminais e como não partir do sítio errado',
      content: [
        { kind: 'paragraph', text: 'Nas grandes cidades, uma mesma rota pode ter vários pontos de partida. O erro “cheguei ao Oriente, mas o autocarro saiu de Sete Rios” é um clássico para recém-chegados.' },
        { kind: 'checklist', items: [
          'Lisboa Sete Rios: principal terminal rodoviário da Rede Expressos; junto ao metro Jardim Zoológico, linha azul.',
          'Lisboa Oriente: estação de comboios/metro/autocarros no Parque das Nações; é frequentemente usada pela FlixBus e por alguns serviços interurbanos.',
          'Lisboa Aeroporto: alguns serviços podem parar no aeroporto, mas isso não substitui Sete Rios/Oriente.',
          'Porto Campanhã: importante nó de transportes para comboios e autocarros; confirme exactamente onde fica a paragem do seu operador.',
          'Faro Terminal Rodoviário: conveniente para ligações no Algarve, mas as linhas regionais podem partir de paragens próximas.',
          'Coimbra: existem zonas diferentes, Coimbra A/B, e o terminal rodoviário; reserve tempo para táxi/autocarro urbano.',
          'Em localidades pequenas, “Terminal Rodoviário” pode ser apenas algumas plataformas sem painel — oriente-se pelo número do serviço e pergunte ao motorista.'
        ] }
      ]
    },
    {
      id: 'delays-refunds-and-expat-tips',
      title: 'Atrasos, reembolsos e dicas práticas',
      content: [
        { kind: 'paragraph', text: 'Os autocarros dependem do trânsito, de acidentes na A1/A2/A22, das condições meteorológicas e de atrasos na fronteira. Para uma ida ao aeroporto, deixe uma margem grande.' },
        { kind: 'checklist', items: [
          'Antes de voar de LIS/OPO/FAO, chegue pelo menos 3 horas antes do voo se vier de autocarro de outra cidade; melhor ainda — pernoite ou apanhe um autocarro muito cedo.',
          'À sexta-feira depois das 16:00 e ao domingo à noite, os serviços entre Lisboa, Porto, Coimbra, Braga, Faro são frequentemente mais caros e mais cheios.',
          'Para feriados como Portugal Day, Páscoa, Natal, Ano Novo e em Agosto, compre com antecedência.',
          'Se o autocarro for cancelado, use a aplicação/site do operador: aí aparecem mais rapidamente remarcações, vouchers e opções de reembolso.',
          'Para reclamações, guarde o bilhete, o número do serviço, capturas de ecrã do atraso e a correspondência.',
          'Se precisar de um itinerário oficial para comprovativo, descarregue a fatura/recibo logo após a compra.',
          'Para viagens nocturnas, leve uma sweat com capuz: o ar condicionado é muitas vezes forte, e as paragens à noite podem ser frias mesmo na Primavera.'
        ] },
        { kind: 'warning', text: 'A FlixBus e a Rede Expressos podem alterar a plataforma, o ponto de paragem ou o operador parceiro. A informação final está no bilhete, na aplicação e no painel do terminal no dia da viagem.' }
      ]
    }
  ],
  costs: [
    { label: 'Viagens regionais curtas', amountEURMin: 5, amountEURMax: 12, note: 'Intervalo inferior típico ao comprar online; depende da região e do operador.' },
    { label: 'Lisboa—Porto na Rede Expressos', amountEURMin: 15, amountEURMax: 25, note: 'Intervalo frequente para datas normais; em dias de maior procura e para os últimos lugares pode ser mais caro.' },
    { label: 'Lisboa—Porto na FlixBus', amountEURMin: 5, amountEURMax: 25, note: 'Promoções e compra antecipada permitem preços baixos; bagagem/lugar/opções flexíveis podem ser acrescentados separadamente.' },
    { label: 'Viagens internacionais para Espanha', amountEURMin: 10, amountEURMax: 60, note: 'Madrid, Sevilha, Vigo e Santiago de Compostela: o preço depende muito da época e do momento da compra.' }
  ],
  sources: [
    { title: 'Rede Expressos — site oficial, horários e bilhetes', url: 'https://www.rede-expressos.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'FlixBus Portugal — site oficial, horários, bilhetes e bagagem', url: 'https://www.flixbus.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Vamus Algarve — linhas rodoviárias regionais do Algarve', url: 'https://vamusalgarve.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Transdev Portugal — rotas regionais de autocarro', url: 'https://www.transdev.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
