export default {
  editorialVoice: 'hackportugal',
  id: 'carris-metropolitana',
  categoryId: 'public_transport',
  title: 'Carris Metropolitana — operador de autocarros da Grande Lisboa',
  tldr: 'A Carris Metropolitana é a rede unificada de autocarros suburbanos da Área Metropolitana de Lisboa, lançada por fases desde 2022. Não é a Carris Lisboa urbana: o operador cobre 15 municípios à volta de Lisboa, incluindo Sintra, Loures, Mafra, Oeiras, Almada, Setúbal, Montijo.\n\nEm 2026, a principal forma de pagamento é o Navegante: 30 € por um pass municipal ou 40 € pelo metropolitano. As carreiras têm quatro dígitos; consulte frequentemente os horários na aplicação ou no site.',
  tags: ['autocarros', 'navegante', 'lisboa', 'transportes'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que é a Carris Metropolitana',
      content: [
        { kind: 'paragraph', text: 'A Carris Metropolitana é a marca da rede de autocarros da Área Metropolitana de Lisboa. Foi criada para substituir transportadores privados dispersos por um sistema único de carreiras, numeração, horários e integração com o Navegante.' },
        { kind: 'paragraph', text: 'O lançamento decorreu por fases desde 2022. Por isso, entre residentes antigos e no Google Maps ainda aparecem nomes antigos de linhas, paragens e operadores. Em 2026, oriente-se pelo carrismetropolitana.pt, pela aplicação Carris Metropolitana e pelo Navegante.' },
        { kind: 'checklist', items: [
          'São autocarros da Grande Lisboa, não metro nem comboio',
          'Não é a Carris Lisboa: os autocarros urbanos dentro de Lisboa são operados pela Carris',
          'As carreiras da Carris Metropolitana entram frequentemente em grandes interfaces de transporte de Lisboa: Oriente, Campo Grande, Colégio Militar, Sete Rios, Cais do Sodré',
          'A rede opera em 15 municípios da Área Metropolitana de Lisboa',
          'Cascais é servida principalmente pela rede separada MobiCascais, embora viagens para zonas vizinhas possam cruzar-se com o Navegante',
          'O Barreiro tem o seu próprio operador municipal, TCB',
          'A numeração das carreiras tem quatro dígitos: é normal, não é um erro'
        ] }
      ]
    },
    {
      id: 'coverage',
      title: 'Onde circula: zonas e municípios',
      content: [
        { kind: 'paragraph', text: 'A rede está dividida em áreas operacionais. Para o passageiro, o mais importante não é a cor da área, mas o número da carreira, o sentido e o tipo de pass Navegante. Ainda assim, as áreas ajudam a perceber porque é que um autocarro em Sintra tem o mesmo aspeto que um autocarro em Setúbal.' },
        { kind: 'checklist', items: [
          'Área 1: Amadora, Oeiras, Sintra e ligações a Lisboa',
          'Área 2: Loures, Mafra, Odivelas, Vila Franca de Xira e ligações a Lisboa',
          'Área 3: Almada, Seixal, Sesimbra e margem sul do Tejo',
          'Área 4: Alcochete, Moita, Montijo, Palmela, Setúbal',
          'Lisboa dentro da cidade: normalmente Carris, Metro, CP, Fertagus e Transtejo/Soflusa, não Carris Metropolitana',
          'Cascais: consulte a MobiCascais e a CP Linha de Cascais',
          'Barreiro: consulte a TCB e as ligações fluviais'
        ] },
        { kind: 'warning', text: 'Não compre um pass apenas pelo nome da cidade. Se vive em Sintra e trabalha em Lisboa, quase sempre precisa do Navegante Metropolitano por 40 €, e não de um pass municipal por 30 €.' }
      ]
    },
    {
      id: 'tickets',
      title: 'Pagamento: Navegante, pass e viagens ocasionais',
      content: [
        { kind: 'paragraph', text: 'Em 2026, a Carris Metropolitana está integrada no sistema Navegante. O cenário mais simples para um expat: fazer um cartão Navegante personalizado, carregar um pass mensal e validar o cartão em cada entrada no autocarro.' },
        { kind: 'checklist', items: [
          'Navegante Municipal — 30 € por mês, válido dentro de um município escolhido',
          'Navegante Metropolitano — 40 € por mês, válido em toda a Área Metropolitana de Lisboa',
          'O pass é válido nos operadores participantes: Carris Metropolitana, Carris, Metro Lisboa, CP dentro da AML, Fertagus, Transtejo/Soflusa e outros de acordo com as regras do Navegante',
          'Valide o cartão em cada entrada, mesmo que tenha um pass mensal',
          'O carregamento é possível nas máquinas Metro/CP, Payshop, alguns quiosques e através de aplicações/caixas automáticas suportadas, consoante o cartão',
          'Os bilhetes ocasionais comprados ao motorista são geralmente menos vantajosos e podem não permitir um transbordo adequado',
          'Para viagens diárias entre municípios, quase sempre compensa mais o pass de 40 € do que bilhetes separados'
        ] },
        { kind: 'warning', text: 'Se o validador não funcionar, não ignore. Numa fiscalização, o argumento «tenho pass, mas não passei o cartão» pode acabar em coima. Tente o segundo validador ou informe imediatamente o motorista.' }
      ]
    },
    {
      id: 'route-numbers',
      title: 'Como ler as carreiras e não ir parar ao sítio errado',
      content: [
        { kind: 'paragraph', text: 'Depois da transição para a Carris Metropolitana, muitos números antigos desapareceram. As novas linhas têm normalmente 4 dígitos. A mesma paragem pode ter plataformas diferentes por sentido, e um mesmo sentido pode ter variantes por bairros diferentes.' },
        { kind: 'checklist', items: [
          'Verifique sempre a paragem terminal, não apenas o número da carreira',
          'Veja o destino no painel eletrónico do autocarro',
          'Na paragem, digitalize o código QR: leva ao horário atualizado',
          'Na aplicação Carris Metropolitana, ative a geolocalização e as paragens favoritas',
          'Consulte o horário separadamente para dias úteis, sábado, domingo e feriado',
          'À noite, ao domingo e nos feriados, os intervalos podem aumentar muito',
          'Nos subúrbios, o último autocarro pode partir muito mais cedo do que em Lisboa',
          'O Google Maps é útil, mas, em caso de divergência com o site oficial, confie na Carris Metropolitana'
        ] },
        { kind: 'paragraph', text: 'Erro típico de principiante: escolher a carreira pela paragem mais próxima, mas não reparar que o autocarro segue no sentido oposto ou faz uma grande volta por bairros vizinhos. Nos subúrbios, isto pode acrescentar 30–50 minutos.' }
      ]
    },
    {
      id: 'daily-use',
      title: 'Prática para o dia a dia',
      content: [
        { kind: 'substeps', items: [
          { id: 'before-moving', title: 'Antes de arrendar casa', content: [
            { kind: 'paragraph', text: 'Verifique não só a distância até Lisboa, mas também o horário real do autocarro de manhã e à noite. Uma casa a 18 km do escritório pode ser pior do que uma casa a 35 km, se não houver uma carreira frequente até ao comboio ou ao metro.' },
            { kind: 'checklist', items: [
              'Encontre as paragens mais próximas em carrismetropolitana.pt',
              'Verifique a primeira e a última viagem num dia útil',
              'Verifique domingo e feriados',
              'Veja a ligação à CP, Metro, Fertagus ou barco',
              'Compare o tempo às 08:00 e às 22:00',
              'Verifique se precisa apenas de um pass municipal ou metropolitano'
            ] }
          ] },
          { id: 'commuting', title: 'Para a deslocação diária', content: [
            { kind: 'paragraph', text: 'Guarde 2–3 percursos alternativos. Nos subúrbios, uma viagem cancelada pode estragar toda a cadeia de transbordos, sobretudo se depois tiver um comboio CP ou um ferry Transtejo/Soflusa.' },
            { kind: 'checklist', items: [
              'Mantenha o Navegante carregado antes do dia 1 do mês',
              'Chegue à paragem 3–5 minutos mais cedo',
              'Acompanhe os avisos e alterações no site do operador',
              'Em caso de greves, verifique os serviços mínimos',
              'Para o aeroporto de Lisboa, muitas vezes é mais rápido combinar autocarro + Metro do que apanhar um autocarro suburbano direto'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'problems',
      title: 'Se o autocarro não apareceu ou a carreira mudou',
      content: [
        { kind: 'paragraph', text: 'A Carris Metropolitana publica regularmente alterações de percursos, desvios temporários, supressões de paragens devido a obras e ajustes de horários. Isto é especialmente visível em zonas novas, junto a escolas, zonas industriais e durante obras rodoviárias da Câmara Municipal.' },
        { kind: 'checklist', items: [
          'Consulte os avisos em carrismetropolitana.pt',
          'Compare o horário na paragem com o horário na aplicação',
          'Confirme que hoje não é feriado municipal',
          'Verifique se a paragem não foi deslocada para uma rua vizinha',
          'Fotografe o número da carreira, a paragem e a hora, se quiser apresentar uma reclamação',
          'Para uma reclamação formal, use o Livro de Reclamações Eletrónico ou os contactos do operador',
          'Se o atraso for crítico, construa o percurso via CP/Metro/Fertagus, onde os intervalos são geralmente mais previsíveis'
        ] },
        { kind: 'warning', text: 'Nos subúrbios, não planeie assuntos jurídicos, AIMA, Finanças, exames IMT ou consultas médicas «em cima da hora» dependendo apenas de um autocarro. Conte com pelo menos 30–45 minutos de margem.' }
      ]
    }
  ],
  costs: [
    { label: 'Navegante Municipal', amountEUR: 30, note: 'Pass mensal dentro de um município da Área Metropolitana de Lisboa' },
    { label: 'Navegante Metropolitano', amountEUR: 40, note: 'Pass mensal em toda a Área Metropolitana de Lisboa; normalmente necessário para viagens subúrbio ↔ Lisboa' },
    { label: 'Cartão Navegante personalizado', amountEURMin: 7, amountEURMax: 12, note: 'A emissão normal é mais barata, a urgente é mais cara; o preço depende do ponto de emissão e do prazo' }
  ],
  sources: [
    { title: 'Site oficial da Carris Metropolitana: carreiras, horários, avisos', url: 'https://www.carrismetropolitana.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal oficial Navegante: tarifas e pass na Área Metropolitana de Lisboa', url: 'https://www.navegante.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Transportes Metropolitanos de Lisboa: informação sobre a rede e operadores', url: 'https://www.tmlmobilidade.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
