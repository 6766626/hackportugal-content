export default {
  editorialVoice: 'hackportugal',
  id: 'gas-botija-substituicao',
  categoryId: 'daily_life',
  title: 'Botija de gás: onde substituir a garrafa e como organizar a entrega',
  tldr: 'Em Portugal, as casas sem gás natural usam frequentemente GPL em garrafa: botija de butano 13 kg para a cozinha e o esquentador, propano para o exterior/zonas frias. Em 2026, a substituição de uma garrafa de 13 kg de butano custa normalmente cerca de 34–39 € + entrega, se esta não estiver incluída; sem garrafa vazia, paga-se uma caução/compra da tara. Galp, Repsol, BP e revendedores locais fazem entregas ao domicílio em Lisboa, Porto, Algarve e na maioria das cidades. Nem sempre é necessário contrato: muitas vezes basta encomendar por telefone/WhatsApp, mas é possível configurar uma entrega regular.',
  tags: ['gpl', 'botija', 'gás', 'galp', 'repsol'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-bottle',
      title: 'O que é uma botija e que garrafa é necessária',
      content: [
        { kind: 'paragraph', text: 'Botija é uma garrafa doméstica de GPL: butano ou propano. Em apartamentos e casas sem gás natural, alimenta o fogão, o forno, o esquentador e, por vezes, o aquecimento. O formato mais comum para a cozinha é butano 13 kg. O propano funciona melhor no exterior, em espaços não aquecidos e com temperaturas baixas.' },
        { kind: 'checklist', items: [
          'Butano 13 kg — o padrão para a cozinha num apartamento; em 2026, uma substituição típica custa cerca de 34–39 €.',
          'Propano 11 kg — formato doméstico semelhante, frequentemente escolhido para exterior ou zonas mais frias.',
          'Propano 45 kg — para moradias, aquecimento, grande consumo; normalmente fica no exterior e exige mais espaço.',
          'As garrafas de marcas diferentes nem sempre são intermutáveis: Galp troca por Galp, Repsol por Repsol, etc.',
          'Se já tiver uma botija vazia, paga apenas o gás/substituição e a entrega.',
          'Se não houver garrafa vazia, o revendedor cobra uma caução/taxa pela tara: normalmente dezenas de euros além do gás.',
          'Verifique o redutor: o butano/propano e diferentes tipos de garrafa podem ter outro encaixe.',
          'Para o esquentador, a ventilação, a exaustão e a potência correcta são importantes — não é “só ligar a mangueira”.'
        ] }
      ]
    },
    {
      id: 'where-replace',
      title: 'Onde substituir a garrafa: loja, posto ou entrega',
      content: [
        { kind: 'paragraph', text: 'O caminho mais simples é encontrar o revendedor GPL mais próximo: minimercado, drogaria, posto de combustível, loja Galp/Repsol/BP ou serviço de entrega local. Em zonas turísticas e suburbanas do Algarve, a entrega funciona muitas vezes ainda melhor do que a recolha em loja.' },
        { kind: 'checklist', items: [
          'Galp: procure “Galp Gás garrafas” ou o distribuidor Galp local por morada.',
          'Repsol: procure “Repsol Gás” e revendedores GPL; muitos aceitam encomendas por telefone.',
          'BP: a rede é menor, mas nas cidades e nos postos há troca de garrafas.',
          'As lojas locais são frequentemente mais baratas na entrega e mais rápidas do que um grande call center.',
          'Para recolha, leve a botija vazia da mesma marca e do mesmo tipo.',
          'Para entrega, indique antecipadamente o andar, se há elevador e se é necessário subir a garrafa ao apartamento.',
          'Pagamento: dinheiro, Multibanco portátil, MB WAY — depende do revendedor; confirme antes da chegada.',
          'Guarde o recibo: pode ser útil em caso de disputa sobre a caução ou a devolução da tara.'
        ] },
        { kind: 'warning', text: 'Não compre uma garrafa “duvidosa” sem selo, com muita ferrugem, válvula danificada ou sem identificação da marca. Se cheirar a gás depois da ligação — feche a válvula, areje, não ligue luzes/não provoque faíscas, telefone ao fornecedor ou ao 112 se houver risco.' }
      ]
    },
    {
      id: 'home-delivery',
      title: 'Entrega ao domicílio e contrato regular',
      content: [
        { kind: 'paragraph', text: 'Para uma botija, muitas vezes não é necessário um contrato completo de longa duração. Na prática, trata-se de um “pedido de entrega”: telefona/escreve ao revendedor, indica a morada, o tipo de garrafa, a quantidade e o horário. Mas é possível organizar uma entrega regular — por exemplo, a cada 3–6 semanas ou por chamada com um perfil de cliente fixo.' },
        { kind: 'substeps', items: [
          { id: 'choose-supplier', title: '1. Escolha o fornecedor', content: [
            { kind: 'paragraph', text: 'Compare Galp, Repsol, BP e revendedores locais para o seu código postal. Em Lisboa/Porto, a entrega costuma ser no mesmo dia útil ou no dia útil seguinte; no Algarve, depende da freguesia e da época.' }
          ] },
          { id: 'send-details', title: '2. Indique os dados da encomenda', content: [
            { kind: 'checklist', items: [
              'Morada e código postal.',
              'Nome no intercomunicador e telefone.',
              'Tipo de gás: butano ou propano.',
              'Peso/formato: por exemplo, 13 kg.',
              'Marca da garrafa vazia que vai entregar.',
              'Se é necessária instalação de um novo redutor ou mangueira.',
              'Forma de pagamento: dinheiro, cartão, MB WAY.',
              'Janela de entrega pretendida.'
            ] }
          ] },
          { id: 'regular-delivery', title: '3. Configure a entrega regular', content: [
            { kind: 'paragraph', text: 'Peça “entrega periódica” ou “cliente habitual”. Nos revendedores pequenos, isto costuma ser um registo na base de dados + lembrete por WhatsApp, e não um contrato juridicamente complexo. Confirme se pode cancelar sem penalização e o que acontece se não estiver em casa.' }
          ] }
        ] },
        { kind: 'warning', text: 'Não aceite que o estafeta “ligue rapidamente” a garrafa a uma mangueira antiga e rachada. A mangueira GPL tem prazo de validade impresso; em caso de dúvida, substitua-a. O redutor e a mangueira custam pouco em comparação com o risco de fuga.' }
      ]
    },
    {
      id: 'prices',
      title: 'Quanto custa em 2026',
      content: [
        { kind: 'paragraph', text: 'Os preços do GPL em garrafa em Portugal são comerciais e variam por marca, zona, entrega e promoções. Como referência para 2026: o butano doméstico 13 kg, na troca por uma garrafa vazia, fica normalmente na faixa de 34–39 €. A entrega pode estar incluída ou ser acrescentada à parte.' },
        { kind: 'checklist', items: [
          'Substituição de butano 13 kg: normalmente 34–39 € com botija vazia.',
          'Entrega: frequentemente 0–5 € na cidade, mas pode ser mais cara para moradas afastadas.',
          'Garrafa nova/primeira sem vazia: acrescenta-se uma caução ou taxa pela tara.',
          'Redutor: normalmente 10–25 €, consoante o tipo e a loja.',
          'Mangueira GPL e abraçadeiras: normalmente 5–15 €.',
          'Ligação/verificação no local: por vezes gratuita com a entrega, por vezes uma taxa separada.',
          'Propano 45 kg é bastante mais caro por garrafa, mas não é necessário para um apartamento comum; é para moradia/aquecimento.'
        ] },
        { kind: 'paragraph', text: 'Se o consumo for elevado — por exemplo, esquentador a gás + cozinha para uma família — pergunte o preço de duas botijas de uma só vez. Alguns revendedores oferecem desconto ou entrega gratuita ao encomendar 2 garrafas.' }
      ]
    },
    {
      id: 'natural-gas',
      title: 'Alternativa: ligar gás natural',
      content: [
        { kind: 'paragraph', text: 'Se o edifício tiver rede de gás natural, é mais cómodo do que botija: não há transporte de garrafas, a facturação é por contador e o fornecedor pode ser mudado. Mas a ligação só é possível se a rua/edifício estiver ligada à rede e a instalação interior estiver certificada.' },
        { kind: 'checklist', items: [
          'Verifique junto da Câmara Municipal, do condomínio ou do distribuidor de rede se há gás natural na morada.',
          'Peça o CUI — Código Universal da Instalação; sem ele, o fornecedor não abre contrato.',
          'É necessária uma instalação de gás no apartamento/casa, executada ou verificada por técnico credenciado.',
          'Para uma nova ligação, é frequentemente necessária inspeção de gás e certificado de inspeção válido.',
          'Escolha o comercializador: Galp, EDP Comercial, Repsol, Endesa, Goldenergy, entre outros.',
          'Para o contrato, normalmente são necessários NIF, documento de identificação, morada, CUI, IBAN/forma de pagamento.',
          'Se a habitação for arrendada, combine as obras com o senhorio e o condomínio.',
          'Não ligue directamente ao gás natural um fogão preparado para GPL sem substituir os injectores/adaptar o equipamento.'
        ] },
        { kind: 'warning', text: 'Gás natural e GPL funcionam a pressões diferentes e exigem injectores correctos, redutor/regulação e instalação certificada. Adaptar sozinho um fogão ou esquentador — risco de explosão e recusa do seguro.' }
      ]
    }
  ],
  costs: [
    { label: 'Substituição de botija de butano 13 kg', amountEURMin: 34, amountEURMax: 39, note: 'Intervalo típico em Portugal continental em 2026 ao entregar uma garrafa vazia; o preço depende da marca e do revendedor.' },
    { label: 'Entrega ao domicílio', amountEURMin: 0, amountEURMax: 5, note: 'Frequentemente incluída nas cidades, mas pode ser mais cara em freguesias afastadas ou em encomendas urgentes.' },
    { label: 'Redutor GPL', amountEURMin: 10, amountEURMax: 25, note: 'Necessário na primeira ligação ou se o encaixe antigo for velho/inadequado.' },
    { label: 'Mangueira GPL + abraçadeiras', amountEURMin: 5, amountEURMax: 15, note: 'Verifique o prazo de validade impresso na mangueira.' },
    { label: 'Caução/tara da primeira garrafa', amountEURMin: 20, amountEURMax: 50, note: 'Se não houver botija vazia para troca; as condições de devolução dependem da marca e do vendedor.' }
  ],
  sources: [
    { title: 'Galp — gás em garrafa e soluções GPL para casa', url: 'https://www.galp.com', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Repsol — Repsol Gás e distribuição de GPL', url: 'https://www.repsol.com', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ERSE — informação ao consumidor sobre gás e energia', url: 'https://www.erse.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
