export default {
  editorialVoice: 'hackportugal',
  id: 'carris-metropolitana',
  categoryId: 'public_transport',
  title: 'Carris Metropolitana — operador de autocarros da Grande Lisboa',
  tldr: 'A Carris Metropolitana é a rede unificada de autocarros suburbanos da Área Metropolitana de Lisboa, lançada por fases desde 2022. Não é a Carris Lisboa urbana: o operador cobre 15 municípios em redor de Lisboa, incluindo Sintra, Loures, Mafra, Oeiras, Almada, Setúbal, Montijo. Em 2026, a principal forma de pagamento é o Navegante: 30 € pelo pass municipal ou 40 € pelo metropolitano. As carreiras têm quatro dígitos; confirme frequentemente os horários na aplicação ou no site.',
  tags: ['autocarros', 'navegante', 'lisboa', 'transporte'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que é a Carris Metropolitana',
      content: [
        { kind: 'paragraph', text: 'A Carris Metropolitana é a marca da rede de autocarros da Área Metropolitana de Lisboa. Foi criada para substituir operadores privados dispersos por um sistema unificado de carreiras, numeração, horários e integração com o Navegante.' },
        { kind: 'paragraph', text: 'O lançamento decorreu por fases desde 2022. Por isso, entre residentes antigos e no Google Maps ainda aparecem nomes antigos de linhas, paragens e operadores. Em 2026, oriente-se pelo carrismetropolitana.pt, pela aplicação Carris Metropolitana e pelo Navegante.' },
        { kind: 'checklist', items: [
          'São autocarros da Grande Lisboa, não metro nem comboio',
          'Não é a Carris Lisboa: os autocarros urbanos dentro de Lisboa são operados pela Carris',
          'As carreiras da Carris Metropolitana chegam frequentemente a grandes interfaces de transporte de Lisboa: Oriente, Campo Grande, Colégio Militar, Sete Rios, Cais do Sodré',
          'A rede funciona em 15 municípios da Área Metropolitana de Lisboa',
          'Cascais é sobretudo servido por uma rede separada, a MobiCascais, embora as deslocações para zonas vizinhas possam cruzar-se com o Navegante',
          'O Barreiro tem o seu próprio operador municipal, os TCB',
          'A numeração das carreiras tem quatro dígitos: é normal, não é um erro'
        ] }
      ]
    },
    {
      id: 'coverage',
      title: 'Onde circula: zonas e municípios',
      content: [
        { kind: 'paragraph', text: 'A rede está dividida em áreas operacionais. Para o passageiro, mais importante do que a cor da área é o número da carreira, o destino e o tipo de pass Navegante. Mas as áreas ajudam a perceber porque é que um autocarro em Sintra tem o mesmo aspeto que um autocarro em Setúbal.' },
        { kind: 'checklist', items: [
          'Área 1: Amadora, Oeiras, Sintra e ligações a Lisboa',
          'Área 2: Loures, Mafra, Odivelas, Vila Franca de Xira e ligações a Lisboa',
          'Área 3: Almada, Seixal, Sesimbra e margem sul do Tejo',
          'Área 4: Alcochete, Moita, Montijo, Palmela, Setúbal',
          'Lisboa dentro da cidade: normalmente Carris, Metro, CP, Fertagus e Transtejo/Soflusa, e não Carris Metropolitana',
          'Cascais: confirme a MobiCascais e a CP Linha de Cascais',
          'Barreiro: confirme os TCB e as ligações fluviais'
        ] },
        { kind: 'warning', text: 'Não compre um pass apenas pelo nome da cidade. Se vive em Sintra e trabalha em Lisboa, quase sempre precisa do Navegante Metropolitano por 40 €, e não do pass municipal por 30 €.' }
      ]
    },
    {
      id: 'tickets',
      title: 'Pagamento: Navegante, pass e viagens ocasionais',
      content: [
        { kind: 'paragraph', text: 'Em 2026, a Carris Metropolitana está integrada no sistema Navegante. O cenário mais simples para um expat: pedir um cartão Navegante personalizado, carregar o pass mensal e validar o cartão sempre que entra no autocarro.' },
        { kind: 'checklist', items: [
          'Navegante Municipal — 30 € por mês, válido dentro de um único município escolhido',
          'Navegante Metropolitano — 40 € por mês, válido em toda a Área Metropolitana de Lisboa',
          'O pass é válido nos operadores participantes: Carris Metropolitana, Carris, Metro Lisboa, CP dentro da AML, Fertagus, Transtejo/Soflusa e outros segundo as regras do Navegante',
          'Valide o cartão em cada entrada, mesmo que tenha um pass mensal',
          'O carregamento é possível em máquinas Metro/CP, Payshop, alguns quiosques e através de aplicações/caixas automáticas suportadas, dependendo do cartão',
          'Os bilhetes ocasionais comprados ao motorista são geralmente menos vantajosos e podem não permitir uma transbordo adequada',
          'Para deslocações diárias entre municípios, quase sempre compensa mais o pass de 40 € do que bilhetes separados'
        ] },
        { kind: 'warning', text: 'Se o validador não funcionar, não ignore. Numa fiscalização, o argumento “tenho pass, mas não passei o cartão” pode acabar em multa. Experimente outro validador ou informe imediatamente o motorista.' }
      ]
    },
    {
      id: 'route-numbers',
      title: 'Como ler as carreiras e não ir parar ao sítio errado',
      content: [
        { kind: 'paragraph', text: 'Depois da transição para a Carris Metropolitana, muitos números antigos desapareceram. As novas linhas normalmente têm 4 dígitos. A mesma paragem pode ter plataformas diferentes por sentido, e um mesmo sentido pode ter variantes por bairros diferentes.' },
        { kind: 'checklist', items: [
          'Confirme sempre a paragem final, não apenas o número da carreira',
          'Veja o destino no painel eletrónico do autocarro',
          'Na paragem, leia o código QR: leva ao horário atualizado',
          'Na aplicação Carris Metropolitana, active a geolocalização e as paragens favoritas',
          'Confirme o horário separadamente para dias úteis, sábado, domingo e feriado',
          'À noite, ao domingo e em feriados, os intervalos podem aumentar bastante',
          'Nos subúrbios, o último autocarro pode partir muito mais cedo do que em Lisboa',
          'O Google Maps é útil, mas, em caso de divergência com o site oficial, confie na Carris Metropolitana'
        ] },
        { kind: 'paragraph', text: 'Erro típico de principiante: escolher a carreira pela paragem mais próxima, mas não reparar que o autocarro segue no sentido contrário ou faz uma volta longa por bairros vizinhos. Nos subúrbios, isso pode acrescentar 30–50 minutos.' }
      ]
    },
    {
      id: 'daily-use',
      title: 'Prática do dia a dia',
      content: [
        { kind: 'substeps', items: [
          { id: 'before-moving', title: 'Antes de arrendar casa', content: [
            { kind: 'paragraph', text: 'Verifique não só a distância até Lisboa, mas também o horário real do autocarro de manhã e à noite. Uma casa a 18 km do escritório pode ser pior do que uma casa a 35 km se não houver uma carreira frequente até ao comboio ou ao metro.' },
            { kind: 'checklist', items: [
              'Encontre as paragens mais próximas em carrismetropolitana.pt',
              'Confirme a primeira e a última viagem num dia útil',
              'Confirme o domingo e os feriados',
              'Veja a ligação à CP, Metro, Fertagus ou barco',
              'Compare o tempo às 08:00 e às 22:00',
              'Confirme se precisa apenas do pass municipal ou do metropolitano'
            ] }
          ] },
          { id: 'commuting', title: 'Para a deslocação diária', content: [
            { kind: 'paragraph', text: 'Guarde 2–3 trajetos alternativos. Nos subúrbios, um único cancelamento pode estragar toda a cadeia de transbordos, especialmente se depois tiver comboio CP ou ferry Transtejo/Soflusa.' },
            { kind: 'checklist', items: [
              'Mantenha o Navegante carregado antes do dia 1 do mês',
              'Chegue à paragem 3–5 minutos mais cedo',
              'Acompanhe os avisos e alterações no site do operador',
              'Em caso de greves, confirme os serviços mínimos',
              'Para o aeroporto de Lisboa, muitas vezes é mais rápido combinar autocarro + Metro do que usar um autocarro suburbano direto'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'problems',
      title: 'Se o autocarro não apareceu ou a carreira mudou',
      content: [
        { kind: 'paragraph', text: 'A Carris Metropolitana publica regularmente alterações de percurso, desvios temporários, supressões de paragens devido a obras e ajustes de horários. Isto nota-se especialmente em zonas novas, junto a escolas, zonas industriais e durante obras rodoviárias da Câmara Municipal.' },
        { kind: 'checklist', items: [
          'Consulte os avisos em carrismetropolitana.pt',
          'Compare o horário na paragem com o horário na aplicação',
          'Confirme se hoje não é feriado municipal',
          'Verifique se a paragem não foi transferida para uma rua vizinha',
          'Fotografe o número da carreira, a paragem e a hora se quiser apresentar uma reclamação',
          'Para uma reclamação formal, use o Livro de Reclamações Eletrónico ou os contactos do operador',
          'Se o atraso for crítico, planeie o trajeto via CP/Metro/Fertagus, onde os intervalos costumam ser mais previsíveis'
        ] },
        { kind: 'warning', text: 'Nos subúrbios, não planeie compromissos jurídicos, AIMA, Finanças, exames IMT ou consultas médicas “à justa” dependendo apenas de um autocarro. Reserve pelo menos 30–45 minutos de margem.' }
      ]
    }
  ],
  costs: [
    { label: 'Navegante Municipal', amountEUR: 30, note: 'Pass mensal dentro de um único município da Área Metropolitana de Lisboa' },
    { label: 'Navegante Metropolitano', amountEUR: 40, note: 'Pass mensal em toda a Área Metropolitana de Lisboa; normalmente necessário para deslocações subúrbio ↔ Lisboa' },
    { label: 'Cartão Navegante personalizado', amountEURMin: 7, amountEURMax: 12, note: 'O pedido normal é mais barato, o urgente é mais caro; o preço depende do ponto de emissão e do prazo' }
  ],
  sources: [
    { title: 'Site oficial da Carris Metropolitana: carreiras, horários, avisos', url: 'https://www.carrismetropolitana.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal oficial Navegante: tarifas e pass na Área Metropolitana de Lisboa', url: 'https://www.navegante.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Transportes Metropolitanos de Lisboa: informação sobre a rede e os operadores', url: 'https://www.tmlmobilidade.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
