export default {
  editorialVoice: 'hackportugal',
  id: 'gas-botija-substituicao',
  categoryId: 'daily_life',
  title: 'Botija de gás: onde substituir a garrafa e como pedir entrega',
  tldr: 'Em Portugal, casas sem gás natural usam frequentemente GPL em botijas: botija de butano de 13 kg para a cozinha e esquentador, propano para exterior/zonas frias. Em 2026, a substituição de uma botija de butano de 13 kg custa normalmente 27–32 € + entrega, se esta não estiver incluída; sem garrafa vazia, paga-se caução/compra da botija. Galp, Repsol, BP e revendedores locais fazem entregas ao domicílio em Lisboa, Porto, Algarve e na maioria das cidades. Nem sempre é necessário contrato: muitas vezes basta encomendar por telefone/WhatsApp, mas é possível configurar uma entrega regular.',
  tags: ['gpl', 'botija', 'gás', 'galp', 'repsol'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-bottle',
      title: 'O que é uma botija e de que garrafa precisa',
      content: [
        { kind: 'paragraph', text: 'Botija é uma garrafa doméstica de GPL: butano ou propano. Em apartamentos e casas sem gás natural, alimenta a placa, o forno, o esquentador e, por vezes, o aquecimento. O formato mais comum para a cozinha é o butano de 13 kg. O propano funciona melhor no exterior, em espaços não aquecidos e com temperaturas baixas.' },
        { kind: 'checklist', items: [
          'Butano 13 kg — padrão para a cozinha de um apartamento; em 2026, a substituição típica custa 27–32 €.',
          'Propano 11 kg — formato doméstico semelhante, muitas vezes escolhido para exterior ou zonas mais frias.',
          'Propano 45 kg — para moradias, aquecimento, grande consumo; normalmente fica no exterior e exige mais espaço.',
          'As garrafas de marcas diferentes nem sempre são intermutáveis: Galp troca por Galp, Repsol por Repsol, etc.',
          'Se já tiver uma botija vazia, paga apenas o gás/substituição e a entrega.',
          'Se não tiver uma garrafa vazia, o revendedor cobra uma caução/taxa pela botija: normalmente dezenas de euros para além do gás.',
          'Verifique o redutor: o butano/propano e diferentes tipos de garrafas podem ter outro encaixe.',
          'Para o esquentador, a ventilação, a exaustão e a potência correcta são importantes — não é “só ligar a mangueira”.'
        ] }
      ]
    },
    {
      id: 'where-replace',
      title: 'Onde substituir a garrafa: loja, posto ou entrega',
      content: [
        { kind: 'paragraph', text: 'A forma mais simples é encontrar o revendedor GPL mais próximo: minimercado, drogaria, posto de combustível, loja Galp/Repsol/BP ou serviço de entrega local. Em zonas turísticas e suburbanas do Algarve, a entrega funciona muitas vezes ainda melhor do que a recolha na loja.' },
        { kind: 'checklist', items: [
          'Galp: procure “Galp Gás garrafas” ou o distribuidor Galp local por morada.',
          'Repsol: procure “Repsol Gás” e revendedores GPL; muitos aceitam encomendas por telefone.',
          'BP: a rede é menor, mas há troca de garrafas em cidades e postos.',
          'As lojas locais são muitas vezes mais baratas na entrega e mais rápidas do que um grande call center.',
          'Para recolha, leve a botija vazia da mesma marca e do mesmo tipo.',
          'Para entrega, indique antecipadamente o andar, se há elevador e se é necessário subir a garrafa até ao apartamento.',
          'Pagamento: dinheiro, Multibanco portátil, MB WAY — depende do revendedor; confirme antes da chegada.',
          'Guarde o recibo: pode ser útil em caso de disputa sobre a caução ou a devolução da botija.'
        ] },
        { kind: 'warning', text: 'Não compre uma garrafa “duvidosa” sem selo, com muita ferrugem, válvula danificada ou sem identificação da marca. Cheiro a gás após a ligação — fechar a válvula, ventilar, não acender luzes/não criar faíscas, ligar ao fornecedor ou para o 112 se houver risco.' }
      ]
    },
    {
      id: 'home-delivery',
      title: 'Entrega ao domicílio e contrato regular',
      content: [
        { kind: 'paragraph', text: 'Para uma botija, muitas vezes não é necessário um contrato longo e formal. Na prática é um “pedido de entrega”: você liga/escreve ao revendedor, indica a morada, o tipo de garrafa, a quantidade e a hora. Mas é possível configurar uma entrega regular — por exemplo, a cada 3–6 semanas ou por chamada, com um perfil de cliente fixo.' },
        { kind: 'substeps', items: [
          { id: 'choose-supplier', title: '1. Escolha o fornecedor', content: [
            { kind: 'paragraph', text: 'Compare Galp, Repsol, BP e revendedores locais pelo seu código postal. Em Lisboa/Porto, a entrega costuma ser no mesmo dia útil ou no dia útil seguinte; no Algarve depende da freguesia e da época.' }
          ] },
          { id: 'send-details', title: '2. Envie os dados da encomenda', content: [
            { kind: 'checklist', items: [
              'Morada e código postal.',
              'Nome no intercomunicador e telefone.',
              'Tipo de gás: butano ou propano.',
              'Peso/formato: por exemplo 13 kg.',
              'Marca da garrafa vazia que vai entregar.',
              'Se é necessária a instalação de um redutor ou mangueira novos.',
              'Método de pagamento: dinheiro, cartão, MB WAY.',
              'Janela de entrega pretendida.'
            ] }
          ] },
          { id: 'regular-delivery', title: '3. Configure a entrega regular', content: [
            { kind: 'paragraph', text: 'Peça “entrega periódica” ou “cliente habitual”. Nos revendedores mais pequenos, isto é normalmente um registo na base de dados + lembrete por WhatsApp, e não um contrato juridicamente complexo. Confirme se pode cancelar sem penalização e o que acontece se não estiver em casa.' }
          ] }
        ] },
        { kind: 'warning', text: 'Não aceite que o estafeta “ligue rapidamente” a garrafa a uma mangueira antiga e rachada. A mangueira GPL tem uma data de validade impressa; em caso de dúvida, substitua-a. O redutor e a mangueira custam pouco em comparação com o risco de fuga.' }
      ]
    },
    {
      id: 'prices',
      title: 'Quanto custa em 2026',
      content: [
        { kind: 'paragraph', text: 'Os preços do GPL em garrafa em Portugal são comerciais e variam por marca, zona, entrega e promoções. Como referência para Abril de 2026: uma botija doméstica de butano de 13 kg, com entrega da garrafa vazia, fica normalmente no intervalo de 27–32 €. A entrega pode estar incluída ou ser acrescentada à parte.' },
        { kind: 'checklist', items: [
          'Substituição de butano 13 kg: normalmente 27–32 € com uma botija vazia.',
          'Entrega: muitas vezes 0–5 € na cidade, mas pode ser mais alta para moradas remotas.',
          'Garrafa nova/primeira garrafa sem vazia: acrescenta-se caução ou taxa pela botija.',
          'Redutor: normalmente 10–25 €, dependendo do tipo e da loja.',
          'Mangueira GPL e abraçadeiras: normalmente 5–15 €.',
          'Ligação/verificação no local: por vezes gratuita com a entrega, por vezes uma taxa separada.',
          'Propano 45 kg é claramente mais caro por garrafa, mas não é necessário para um apartamento normal; é para moradias/aquecimento.'
        ] },
        { kind: 'paragraph', text: 'Se o consumo for elevado — por exemplo, esquentador a gás + cozinha para uma família — pergunte o preço para duas botijas de uma só vez. Alguns revendedores dão desconto ou entrega gratuita ao encomendar 2 garrafas.' }
      ]
    },
    {
      id: 'natural-gas',
      title: 'Alternativa: ligar gás natural',
      content: [
        { kind: 'paragraph', text: 'Se houver rede de gás natural no edifício, é mais cómodo do que botija: não há transporte de garrafas, a conta é feita por contador e pode mudar de fornecedor. Mas a ligação só é possível se a rua/edifício estiver ligada à rede e a instalação interior estiver certificada.' },
        { kind: 'checklist', items: [
          'Verifique junto da Câmara Municipal, condomínio ou distribuidor de rede se há gás natural na morada.',
          'Descubra o CUI — Código Universal da Instalação; sem ele, o fornecedor não abre contrato.',
          'É necessária uma instalação de gás no apartamento/casa, executada ou verificada por técnico credenciado.',
          'Para uma nova ligação, é muitas vezes necessária uma inspeção de gás e um certificado de inspeção válido.',
          'Escolha o comercializador: Galp, EDP Comercial, Repsol, Endesa, Goldenergy, etc.',
          'Para o contrato, normalmente são necessários NIF, documento de identificação, morada, CUI, IBAN/método de pagamento.',
          'Se a casa for arrendada, combine as obras com o senhorio e o condomínio.',
          'Não ligue directamente ao gás natural uma placa concebida para GPL sem substituir os injectores/fazer a adaptação.'
        ] },
        { kind: 'warning', text: 'Gás natural e GPL funcionam a pressões diferentes e exigem injectores, redutor/regulação e instalação certificada correctos. Alterar uma placa ou esquentador por conta própria é risco de explosão e pode invalidar o seguro.' }
      ]
    }
  ],
  costs: [
    { label: 'Substituição de botija de butano 13 kg', amountEURMin: 27, amountEURMax: 32, note: 'Intervalo típico em Portugal continental em 2026 ao entregar uma garrafa vazia; o preço depende da marca e do revendedor.' },
    { label: 'Entrega ao domicílio', amountEURMin: 0, amountEURMax: 5, note: 'Muitas vezes incluída nas cidades, mas pode ser mais elevada em freguesias afastadas ou em encomendas urgentes.' },
    { label: 'Redutor GPL', amountEURMin: 10, amountEURMax: 25, note: 'Necessário na primeira ligação ou se o encaixe antigo/não adequado não servir.' },
    { label: 'Mangueira GPL + abraçadeiras', amountEURMin: 5, amountEURMax: 15, note: 'Verifique a data de validade impressa na mangueira.' },
    { label: 'Caução/botija para a primeira garrafa', amountEURMin: 20, amountEURMax: 50, note: 'Se não houver uma botija vazia para troca; as condições de devolução dependem da marca e do vendedor.' }
  ],
  sources: [
    { title: 'Galp — gás em garrafa e soluções GPL para casa', url: 'https://www.galp.com', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Repsol — Repsol Gás e distribuição de GPL', url: 'https://www.repsol.com', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ERSE — informação ao consumidor sobre gás e energia', url: 'https://www.erse.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
