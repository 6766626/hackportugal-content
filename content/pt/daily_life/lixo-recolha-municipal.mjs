export default {
  editorialVoice: 'hackportugal',
  id: 'lixo-recolha-municipal',
  categoryId: 'daily_life',
  title: 'Recolha de lixo e reciclagem: horários e regras dos municípios',
  tldr: 'Em Portugal, o lixo é um serviço municipal: o horário, as horas nocturnas para deposição, bulky waste / monstros, resíduos verdes e ecocentro dependem da Câmara Municipal. Em Lisboa, a CML disponibiliza horários por zonas e pedido online para recolha de monstros; no Porto, as regras são publicadas pela Câmara/Porto Ambiente. Separação básica em 2026: azul papel, amarelo plástico/metal/embalagens, verde vidro, castanho bioresíduos, cinzento indiferenciado; óleo — apenas no oleão.',
  tags: ['lixo', 'reciclagem', 'município', 'ecoponto'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'municipio-first',
      title: '1. Verifique primeiro o seu município, não as “regras gerais”',
      content: [
        { kind: 'paragraph', text: 'Em Portugal não existe um horário nacional único para a recolha de lixo doméstico. A recolha diária, os contentores, os horários por rua, monstros, verdes e ecocentros são da responsabilidade da Câmara Municipal ou de uma empresa municipal.' },
        { kind: 'checklist', items: [
          'Encontre o site da sua Câmara Municipal: Lisboa — cm-lisboa.pt, Porto — cm-porto.pt.',
          'Procure secções como “Higiene Urbana”, “Resíduos Urbanos”, “Recolha de Resíduos”, “Ecopontos”, “Ecocentros”.',
          'Verifique o endereço por rua: nas grandes cidades, o horário varia por zona/freguesia e até pelo lado da rua.',
          'Se vive num condomínio, confirme com a administração do condomínio: muitas vezes há contentores próprios e horas específicas para os colocar na rua.',
          'Se arrenda uma casa, pergunte ao senhorio sobre os dias de recolha e onde ficam exactamente os contentores.',
          'Não se guie pelo bairro ao lado: deslocar um contentor 200 m pode significar outra rota e outro dia.',
          'A recolha de lixo é incluída na factura da água como tarifa de resíduos / saneamento; normalmente não é necessário contrato separado.'
        ] }
      ]
    },
    {
      id: 'five-bin-system',
      title: '2. Separação: 5 fluxos principais ♻️',
      content: [
        { kind: 'paragraph', text: 'Em 2026, o esquema doméstico real não é “um único caixote do lixo”, mas vários fluxos. As cores coincidem na maioria dos municípios, mas os detalhes sobre bioresíduos e contentores subterrâneos dependem da cidade.' },
        { kind: 'checklist', items: [
          'Azul — papel e cartão: caixas, jornais, sacos de papel. Guardanapos sujos, caixas de pizza com gordura e papel com restos de comida — não vão aqui.',
          'Amarelo — embalagens de plástico e metal, sacos, latas, Tetra Pak / embalagens de cartão para alimentos líquidos. É preferível espalmá-las para não ocuparem volume.',
          'Verde — embalagens de vidro: garrafas e frascos. Cerâmica, espelhos, lâmpadas, Pyrex e vidro de janelas — não vão aqui.',
          'Castanho — bioresíduos: resíduos alimentares e, por vezes, resíduos orgânicos de jardim. A disponibilidade depende do município; em alguns edifícios é fornecido um contentor castanho ou uma chave/cartão.',
          'Cinzento / indiferenciado — lixo residual: aquilo que não vai para reciclagem e não é resíduo perigoso.',
          'Oleão — contentor separado para óleo alimentar usado. O óleo deve ser arrefecido, colocado numa garrafa de plástico fechada e depositado inteiro no oleão.',
          'Pilhão — pilhas e pequenos acumuladores, normalmente junto ao ecoponto, em supermercados ou na Junta de Freguesia.',
          'VALORMED — medicamentos e blisters: entregue nas farmácias, não no lixo comum.'
        ] },
        { kind: 'warning', text: 'Não despeje óleo alimentar usado no lava-loiça ou na sanita. Isso entope a canalização, prejudica o saneamento e pode levar a coima ao abrigo das regras municipais.' }
      ]
    },
    {
      id: 'lisbon',
      title: '3. Lisboa: CML, zonas e recolha de monstros',
      content: [
        { kind: 'paragraph', text: 'Em Lisboa, as regras são publicadas pela Câmara Municipal de Lisboa. No site da CML pode verificar os horários de recolha por zonas e pedir a recolha de objectos volumosos — recolha de monstros.' },
        { kind: 'checklist', items: [
          'Verifique a sua zona de recolha em cm-lisboa.pt: o horário depende da freguesia e do tipo de rua.',
          'O lixo doméstico comum normalmente só deve ser colocado no intervalo autorizado ao fim da tarde/noite indicado para a zona.',
          'Monstros — móveis, colchões, objectos volumosos e, por vezes, electrodomésticos. Não podem simplesmente ser deixados junto ao ecoponto.',
          'O pedido de recolha de monstros é feito online através do serviço da CML / “Na Minha Rua” ou pelos canais municipais, indicando morada, telefone, tipo e quantidade de objectos.',
          'Coloque os objectos apenas no dia e local confirmados, normalmente junto à entrada do edifício, sem bloquear o passeio, a estrada, o acesso de bombeiros e os contentores.',
          'Aparas de plantas e ramos — verdes; em Lisboa também têm um esquema/pedido municipal próprio, não o caixote comum.',
          'Resíduos de obras de remodelação — entulho / resíduos de construção. Isto não são monstros: é necessário ecocentro, saco próprio ou operador licenciado.'
        ] },
        { kind: 'warning', text: 'Em Lisboa, um colchão, sofá ou armário deixado sem pedido é considerado deposição indevida. Mesmo que “toda a gente faça assim”, é possível haver coima e queixa através da fiscalização.' }
      ]
    },
    {
      id: 'porto-and-other-cities',
      title: '4. Porto e outras cidades: onde encontrar o horário',
      content: [
        { kind: 'paragraph', text: 'No Porto, a informação sobre recolha de resíduos, ecopontos, ecocentros e pedidos de recolha é publicada através da Câmara Municipal do Porto e dos serviços urbanos. A lógica é a mesma: morada → horário → fluxo de resíduos correcto → pedido para lixo volumoso.' },
        { kind: 'checklist', items: [
          'Em cm-porto.pt, procure “Ambiente”, “Resíduos”, “Recolha de Monstros”, “Ecocentros” ou “Porto Ambiente”.',
          'Para móveis, colchões, electrodomésticos e verdes, use o pedido de recolha; não deixe na rua sem confirmação.',
          'Se não houver um ecoponto da cor necessária por perto, procure o mapa de ecopontos/ecocentros no site do município.',
          'Nas cidades pequenas, é frequente existir recolha “porta-a-porta” por dias da semana: o contentor ou saco é colocado à noite antes do dia específico.',
          'Nos centros históricos de Lisboa, Porto, Coimbra, Évora, Braga, pode haver contentores subterrâneos ou horários limitados devido às ruas estreitas.',
          'Nas zonas turísticas, a fiscalização é mais activa: as queixas sobre lixo são frequentemente apresentadas por vizinhos, condomínio e Junta de Freguesia.'
        ] }
      ]
    },
    {
      id: 'special-waste',
      title: '5. O que não pode colocar no caixote comum',
      content: [
        { kind: 'paragraph', text: 'Os resíduos perigosos e especiais em Portugal seguem canais separados. Em caso de dúvida, procure o ecocentro do seu município ou um ponto de recolha numa loja.' },
        { kind: 'checklist', items: [
          'Electrónica e electrodomésticos — Ponto Eletrão, loja no momento da compra de um equipamento novo ou ecocentro.',
          'Lâmpadas, tubos fluorescentes, LED e pequenos equipamentos electrónicos — contentores especializados, não o verde.',
          'Pilhas — pilhão.',
          'Medicamentos, xaropes, blisters e caixas de medicamentos — VALORMED na farmácia.',
          'Tintas, solventes, óleos, produtos químicos, pesticidas — ecocentro ou recolha municipal especial.',
          'Entulho, azulejos, cimento, loiças sanitárias após obras — não são lixo doméstico; trate através de ecocentro/operador.',
          'Roupa e calçado — contentores têxteis, instituições de solidariedade, lojas sociais; têxteis sujos sem alternativa vão para o indiferenciado.',
          'Seringas e resíduos médicos — confirme com a farmácia/centro de saúde; não deite agulhas num saco comum.'
        ] }
      ]
    },
    {
      id: 'practical-routine',
      title: '6. Rotina prática para um apartamento',
      content: [
        { kind: 'checklist', items: [
          'Tenha em casa 3 sacos pequenos: amarelo, azul, vidro; bioresíduos — um balde separado com tampa, se houver castanho.',
          'Fotografe a placa no contentor mais próximo: muitas vezes indica as horas de deposição e o telefone/QR do município.',
          'Guarde a ligação para a página do seu município e o mapa de ecopontos nas notas.',
          'Antes de uma mudança de casa ou da compra de móveis, reserve com antecedência a recolha de monstros para a data necessária.',
          'Não deixe caixas da IKEA/Amazon inteiras: dobre-as e coloque-as no azul, caso contrário o contentor enche rapidamente.',
          'Se o ecoponto estiver cheio, não coloque sacos ao lado: procure outro ponto ou comunique através da aplicação/site do município.',
          'No condomínio, não altere o local de colocação dos contentores sem acordo: é uma causa frequente de coimas e conflitos com vizinhos.'
        ] },
        { kind: 'warning', text: 'As regras municipais mudam com mais frequência do que as nacionais. Antes de deitar fora objectos grandes, fazer obras ou mudar de casa, verifique o site da Câmara Municipal no dia do pedido.' }
      ]
    }
  ],
  costs: [
    { label: 'Recolha comum de lixo doméstico', amountEUR: 0, note: 'Não se paga separadamente no momento da deposição; a tarifa de resíduos municipal é normalmente incluída na factura da água e depende do município/consumo.' },
    { label: 'Ecoponto, oleão, pilhão', amountEUR: 0, note: 'Gratuito para utilização doméstica.' },
    { label: 'Recolha de monstros por pedido', amountEUR: 0, note: 'Em Lisboa e no Porto, para utilizadores domésticos, é normalmente um serviço municipal gratuito se forem cumpridas as regras de marcação; verifique os limites e condições do seu município.' },
    { label: 'Ecocentro para resíduos domésticos', amountEUR: 0, note: 'Normalmente gratuito para residentes em volumes domésticos; resíduos de construção e comerciais podem exigir procedimento separado ou pagamento.' }
  ],
  sources: [
    { title: 'Câmara Municipal de Lisboa — Higiene Urbana, recolha de resíduos e monstros', url: 'https://www.cm-lisboa.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Câmara Municipal do Porto — Ambiente, resíduos urbanos e recolha municipal', url: 'https://www.cm-porto.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Agência Portuguesa do Ambiente — resíduos urbanos e separação de resíduos', url: 'https://apambiente.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal — serviços municipais e gestão de resíduos', url: 'https://eportugal.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
