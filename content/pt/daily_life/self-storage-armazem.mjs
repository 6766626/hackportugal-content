export default {
  editorialVoice: 'hackportugal',
  id: 'self-storage-armazem',
  categoryId: 'daily_life',
  title: 'Self storage: onde guardar os seus bens em Portugal',
  tldr: 'Self storage em Portugal é o aluguer de um box individual/mini-armazém para móveis, malas, bicicletas, arquivos e artigos sazonais. Em 2026, a referência de mercado é: 5–15 m³ costumam custar 40–200 €/mês, mais caução/taxa administrativa e seguro.\n\nEm Lisboa e no Porto existem Storex, BigBox, Allstorage, Bluespace e armazéns locais. Verifique acesso 24/7, humidade, seguro, prazo de rescisão e a proibição de guardar comida, gás, combustível e valores.',
  tags: ['armazenamento', 'armazem', 'mudanca', 'lisboa', 'porto'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'when-needed',
      title: 'Quando o self storage é realmente necessário',
      content: [
        { kind: 'paragraph', text: 'Self storage não é uma “garagem de um conhecido”, mas sim um armazém vigiado com box individual, acesso por código, videovigilância e contrato.\n\nEm Portugal, é útil durante uma mudança, obras, espera por arrendamento de longa duração, venda de casa, relocalização entre cidades ou se a casa não tiver arrecadação.' },
        { kind: 'checklist', items: [
          'Chegou antes do contentor/entrega e está temporariamente num furnished apartment',
          'Precisa de libertar a casa antes de assinar o novo contrato de arrendamento',
          'Guarda bicicletas, pranchas, malas, roupa de inverno, mobiliário infantil',
          'Precisa de um mini-armazém para recibos verdes/pequeno negócio: caixas, materiais de POS, arquivo',
          'Está a fazer obras e quer retirar os móveis durante 1–3 meses',
          'Vai sair de Portugal por uma época, mas não quer transportar os bens de volta',
          'Compra mobiliário com antecedência, mas só entra na casa mais tarde'
        ] }
      ]
    },
    {
      id: 'sizes-and-prices',
      title: 'Dimensões e preços em 2026',
      content: [
        { kind: 'paragraph', text: 'Os operadores normalmente calculam a área em m² e o volume em m³. Para o cliente, o volume é mais importante: as caixas podem ser empilhadas, mas móveis, colchões e equipamentos exigem acesso conveniente. Em 2026, o intervalo típico em Lisboa/Porto é de cerca de 40–200 €/mês por 5–15 m³. Lockers pequenos são mais baratos; boxes grandes junto ao metro/centro são mais caros.' },
        { kind: 'checklist', items: [
          '1–3 m³: documentos, malas, 10–20 caixas — muitas vezes 20–60 €/mês',
          '5 m³: bens de um estúdio/T0 sem mobiliário grande — referência 40–90 €/mês',
          '7–10 m³: T1 com caixas, estante, bicicleta, parte do mobiliário — 70–140 €/mês',
          '12–15 m³: T1/T2 com mobiliário — 120–200 €/mês',
          '20+ m³: mudança de família ou armazém de pequeno negócio — preço individual, muitas vezes acima de 200 €/mês',
          'Climate-controlled / controlo de temperatura e humidade é normalmente mais caro do que um box comum',
          'Promoções “primeiro mês -50%” não anulam o preço completo a partir do segundo mês',
          'O preço pode não incluir seguro, cadeado, IVA ou administrative fee — peça o total mensal com IVA'
        ] },
        { kind: 'warning', text: 'Não escolha um box “à justa”. Se precisar de aceder aos bens mais do que uma vez, preveja uma passagem de 40–60 cm e escolha uma dimensão 10–20% maior.' }
      ]
    },
    {
      id: 'providers',
      title: 'Quem analisar: Storex, BigBox, Allstorage, Bluespace',
      content: [
        { kind: 'paragraph', text: 'Nas grandes cidades, o mercado é fragmentado: existem marcas internacionais/grandes e armazéns locais. Para um expat, o mais importante não é a marca, mas o contrato, o acesso, a segurança e a logística a partir da sua casa.' },
        { kind: 'substeps', items: [
          { id: 'storex', title: 'Storex', content: [
            { kind: 'paragraph', text: 'A Storex é a pioneira do self storage em Portugal (desde 1996), com várias instalações em Lisboa (Alcântara, Benfica, Matinha, Morais Soares, Aeroporto). Veja a disponibilidade 24/7, o acesso para carrinha e as opções de boxes por volume.' }
          ] },
          { id: 'bigbox', title: 'BigBox', content: [
            { kind: 'paragraph', text: 'A BigBox é um operador de self storage no norte do país (Porto, Braga, Gaia). Formato claro: units individuais, security, pedido de preço online, frequentemente com packing materials e seguro.' }
          ] },
          { id: 'allstorage-bluespace', title: 'Allstorage, Bluespace e armazéns locais', content: [
            { kind: 'paragraph', text: 'A Allstorage (Grande Lisboa) e a Bluespace (várias instalações em Lisboa), bem como os armazéns locais, podem ser mais baratos, especialmente fora do centro. A desvantagem é que, por vezes, há menos serviço em inglês, uma área de cliente online pior ou acesso não 24/7. Em contrapartida, é possível negociar em alugueres de 6–12 meses.' }
          ] }
        ] },
        { kind: 'checklist', items: [
          'Verifique a distância de casa: 10 km pela A5/A2 em hora de ponta podem sair mais caros do que +20 €/mês por um armazém perto',
          'Confirme se é possível chegar de carrinha diretamente à zona de descarga',
          'Se existem lifts, trolleys, pallet truck, zona de carga sem degraus',
          'Se existe 24/7 access ou apenas horário de funcionamento',
          'Se é necessária marcação prévia para entrar à noite/fim de semana',
          'Se existe videovigilância, alarmes, código individual, controlo de entrada',
          'Se é possível celebrar o contrato remotamente com NIF e passaporte/autorização de residência',
          'Se emitem factura com NIF — importante para negócios e despesas'
        ] }
      ]
    },
    {
      id: 'contract',
      title: 'Contrato: o que verificar antes de pagar',
      content: [
        { kind: 'paragraph', text: 'Em Portugal, um contrato de storage costuma ser mais simples do que o arrendamento habitacional: é uma prestação de serviços / aluguer de espaço, não um contrato de arrendamento habitacional. Mas os pagamentos são cobrados regularmente, e as condições de rescisão podem ser desagradáveis.' },
        { kind: 'checklist', items: [
          'Preço mensal com IVA: valor final por mês, não o preço promocional',
          'Caução / depósito: se existe caução e quando é devolvida',
          'Taxa de abertura / admin fee: taxa única de adesão',
          'Seguro obrigatório: se está incluído, limite de cobertura, franquia, exclusões',
          'Aviso prévio: com quantos dias de antecedência deve avisar a saída — muitas vezes 15–30 dias',
          'Fidelização: se existe prazo mínimo, por exemplo 2–3 meses',
          'Acesso: 24/7 ou apenas horário laboral, se existe multa por acesso tardio',
          'Pagamentos: Multibanco, cartão, transferência, débito direto',
          'Atraso de pagamento: quando bloqueiam o acesso e aplicam juros/mora',
          'Inventário: se é necessária uma lista de bens para o seguro',
          'Rescisão: como rescindir — email, portal, presencialmente, carta registada'
        ] },
        { kind: 'warning', text: 'Não assine um contrato em que o operador tenha o direito de deslocar os seus bens sem aviso, exceto em caso de avaria, incêndio, inundação ou atraso de pagamento expressamente previsto nas condições.' }
      ]
    },
    {
      id: 'what-not-to-store',
      title: 'O que não se pode guardar e o que é arriscado',
      content: [
        { kind: 'paragraph', text: 'Self storage é adequado para bens secos, legais e não perigosos. Os operadores normalmente proíbem artigos que se possam deteriorar, atrair pragas, explodir, verter ou criar risco jurídico.' },
        { kind: 'checklist', items: [
          'Proibido: botijas de gás, combustível, solventes, tintas com elevado risco de inflamabilidade',
          'Proibido: comida, rações, plantas, animais, biomateriais',
          'Proibido: armas, drogas, contrafação, bens roubados',
          'Proibido: numerário, ouro, joalharia, títulos — o seguro normalmente não cobre',
          'Arriscado: eletrónica cara sem climate control e desumidificador',
          'Arriscado: livros, documentos, vinil, quadros em espaço húmido',
          'Arriscado: mobiliário em pele e colchões sem breathable covers',
          'Arriscado: baterias de e-bike/e-scooter — muitas vezes proibidas ou exigem autorização separada'
        ] },
        { kind: 'warning', text: 'Portugal é húmido, especialmente no inverno e junto ao oceano. Para móveis, documentos, equipamentos e têxteis, escolha um box com controlo de humidade ou use absorventes de humidade, boxes de plástico e paletes/suportes, para que os bens não fiquem diretamente no chão.' }
      ]
    },
    {
      id: 'moving-tips',
      title: 'Prática de mudança: como não pagar a mais',
      content: [
        { kind: 'paragraph', text: 'O erro principal é pagar por volume extra ou contratar transporte duas vezes. Primeiro meça os objetos grandes, depois conte as caixas. Para armazenamento por 1–2 meses, pode compensar um box perto de casa, mesmo sendo mais caro. Para 6–12 meses, um armazém mais afastado do centro.' },
        { kind: 'checklist', items: [
          'Tire uma fotografia de cada caixa e escreva o número: “K01 cozinha”, “R03 roupa”',
          'Crie uma Google Sheet: número da caixa, conteúdo, valor aproximado',
          'Coloque o pesado em baixo, o frágil separado e não debaixo de colchões',
          'Desmonte os móveis e ponha as ferragens num saco, colando-o à peça',
          'Guarde colchões na vertical apenas por pouco tempo; a longo prazo é melhor na horizontal',
          'Deixe passagem para os bens de que pode precisar: documentos, ferramentas, roupa de inverno',
          'Compare o custo de carrinha rental, Uber Van/transportadora e serviço do armazém',
          'Peça quote para 3 prazos: 1 mês, 3 meses, 6 meses — os descontos muitas vezes só aparecem se perguntar',
          'Verifique se pode reduzir/aumentar o box sem nova admin fee',
          'Guarde o contrato, faturas e email de rescisão até à devolução da caução'
        ] }
      ]
    }
  ],
  costs: [
    {
      label: 'Box pequeno / locker 1–3 m³',
      amountEURMin: 20,
      amountEURMax: 60,
      note: 'Referência mensal em 2026; depende da cidade, do acesso e da promoção.'
    },
    {
      label: 'Box de cerca de 5 m³',
      amountEURMin: 40,
      amountEURMax: 90,
      note: 'Adequado para malas, caixas e parte dos bens de um T0.'
    },
    {
      label: 'Box 7–10 m³',
      amountEURMin: 70,
      amountEURMax: 140,
      note: 'Dimensão comum para T1 sem conjunto completo de mobiliário grande.'
    },
    {
      label: 'Box 12–15 m³',
      amountEURMin: 120,
      amountEURMax: 200,
      note: 'Referência para mobiliário e caixas de T1/T2; o centro de Lisboa/Porto pode ser mais caro.'
    },
    {
      label: 'Cadeado, caixas, película, absorventes de humidade',
      amountEURMin: 10,
      amountEURMax: 80,
      note: 'Despesas pontuais; nos operadores, costuma ser mais caro do que na Leroy Merlin/lojas de mudança.'
    },
    {
      label: 'Seguro de storage',
      amountEURMin: 5,
      amountEURMax: 25,
      note: 'Pode ser obrigatório; o preço depende do limite de cobertura.'
    }
  ],
  sources: [
    {
      title: 'DECO Proteste: direitos do consumidor e contratos de serviços',
      url: 'https://www.deco.proteste.pt',
      kind: 'news',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Storex: self storage em Lisboa desde 1996',
      url: 'https://storex.com',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-05-30'
    },
    {
      title: 'BigBox: self storage no norte (Porto, Braga, Gaia)',
      url: 'https://www.bigbox.pt',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-05-30'
    },
    {
      title: 'Allstorage: boxes na Grande Lisboa',
      url: 'https://www.allstorage.pt',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-05-30'
    },
    {
      title: 'Bluespace: self storage em Lisboa',
      url: 'https://www.bluespace.pt',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-05-30'
    }
  ],
  lastVerified: '2026-05-30',
  verifyIntervalDays: 180
}
