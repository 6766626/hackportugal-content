export default {
  editorialVoice: 'hackportugal',
  id: 'estacionamento-gratis-lisboa',
  categoryId: 'auto_trips',
  title: 'Estacionamento gratuito em Lisboa — onde deixar o carro sem EMEL',
  tldr: 'Em Lisboa ainda há estacionamento gratuito, mas não no centro: procure lugares fora da zona EMEL em Monsanto, na periferia do Parque das Nações, em bolsas específicas de Belém/Algés e nas zonas periféricas de Alvalade. Na maioria das zonas EMEL, o domingo e os feriados são gratuitos; em muitas zona azul, o sábado depois das 13:00 também é gratuito, mas quem decide é o sinal na rua. Em 2026, verifique a placa EMEL e o mapa: os limites das zonas mudam, e uma coima por falta de pagamento consome rapidamente qualquer poupança.',
  tags: ['estacionamento', 'lisboa', 'emel', 'carro'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'rule',
      title: 'Regra principal: a gratuitidade é definida pelo sinal EMEL',
      content: [
        { kind: 'paragraph', text: 'Em Lisboa, o estacionamento pago na via pública é gerido pela EMEL. Se houver parquímetro na rua, marcação EMEL ou uma placa com zona tarifária, não se guie pelo Google Maps, mas sim pelo sinal no local: é aí que estão indicados os dias, horários e o tipo de zona.' },
        { kind: 'checklist', items: [
          'Procure a expressão fora da zona EMEL ou a ausência de parquímetros e placas EMEL em todo o troço da rua.',
          'O domingo é geralmente gratuito nas zonas standard de estacionamento na via pública da EMEL.',
          'Feriados — feriados nacionais — também são geralmente gratuitos, salvo indicação em contrário no sinal.',
          'Em muitas zona azul, o sábado depois das 13:00 é gratuito, mas isto não é uma regra universal para toda Lisboa.',
          'Em zonas de elevada procura, perto da Baixa, Chiado, Avenida, Santos, Príncipe Real, Parque das Nações e Belém, pode haver horários alargados ou sábado pago.',
          'A marcação branca nem sempre significa gratuito: em Lisboa, os lugares pagos da EMEL também têm frequentemente o aspeto de lugares brancos normais.',
          'Marcação amarela, lugares cargas e descargas, residentes, táxis, polícia, mobilidade reduzida — não são estacionamento gratuito para todos.',
          'Se tiver dúvidas, abra o mapa da EMEL ou a aplicação ePark e verifique a rua pela geolocalização.'
        ] },
        { kind: 'warning', text: 'Não deixe o carro “só por 5 minutos” sem pagar numa zona EMEL. A fiscalização circula a pé e em viaturas com câmaras. Estacionar incorretamente junto a uma passadeira, no passeio ou num lugar para residentes pode acabar em coima e reboque.' }
      ]
    },
    {
      id: 'free-areas',
      title: 'Onde procurar lugares gratuitos de forma realista 🚗',
      content: [
        { kind: 'paragraph', text: 'Os lugares gratuitos em Lisboa não são um grande parque de estacionamento único, mas sim um conjunto de zonas na periferia da rede paga. Abaixo estão direções práticas onde a probabilidade é maior do que no centro histórico.' },
        { kind: 'substeps', items: [
          { id: 'monsanto', title: 'Monsanto', content: [
            { kind: 'paragraph', text: 'O Parque Florestal de Monsanto é a opção mais fiável para estacionar gratuitamente durante algumas horas: as bolsas de estacionamento junto a miradouros, zonas desportivas e trilhos normalmente não fazem parte da rede de estacionamento na via pública da EMEL.' },
            { kind: 'checklist', items: [
              'Adequado para passeios, bicicleta, piqueniques e como park-and-ride, se depois seguir de Uber/táxi.',
              'Verifique cancelas e restrições noturnas em parques específicos.',
              'Não deixe objetos no interior do carro: os carros de turistas são visíveis aqui.',
              'Não é prático para ir a pé até ao centro, mas é conveniente se viver/passar por Benfica, Campolide, Alcântara.'
            ] }
          ] },
          { id: 'belem', title: 'Belém e a marginal até Algés', content: [
            { kind: 'paragraph', text: 'Em Belém, junto aos pontos turísticos, há muitos lugares pagos e ocupados, mas ainda existem bolsas gratuitas mais a oeste e ao longo do Tagus em direção a Algés/Oeiras, sobretudo se se afastar do Mosteiro dos Jerónimos e da Torre de Belém.' },
            { kind: 'checklist', items: [
              'Procure troços sem parquímetros EMEL e sem placas zona tarifada.',
              'Junto ao MAAT, CCB, Pastéis de Belém e nas ruas principais, conte sobretudo com estacionamento pago ou lotação esgotada.',
              'Ao fim de semana, chegue de manhã: por volta da hora de almoço a marginal fica cheia.',
              'Não estacione na ciclovia, passeio ou zona para autocarros turísticos.'
            ] }
          ] },
          { id: 'parque-nacoes', title: 'Parque das Nações — só a periferia', content: [
            { kind: 'paragraph', text: 'Junto ao Oceanário, Gare do Oriente, Altice Arena e Vasco da Gama, o estacionamento é maioritariamente pago ou comercial. As hipóteses gratuitas estão na periferia: mais perto de Moscavide, Olivais, Sacavém e das margens norte/este do bairro, onde algumas ruas podem estar fora da EMEL.' },
            { kind: 'checklist', items: [
              'Verifique o limite da zona: ruas pagas e gratuitas podem diferir de um quarteirão para o outro.',
              'Para concertos e futebol, chegue com antecedência ou use o metro Linha Vermelha.',
              'Não confunda uma rua gratuita com lugares moradores/residentes.',
              'Se vir um parquímetro — pague, mesmo que a rua ao lado seja gratuita.'
            ] }
          ] },
          { id: 'alvalade', title: 'Alvalade e Campo Grande — periferia, não o núcleo', content: [
            { kind: 'paragraph', text: 'Dentro de Alvalade e junto à Avenida de Roma/Entrecampos há muita EMEL. Os lugares gratuitos encontram-se com mais frequência em ruas periféricas em direção ao Lumiar, Telheiras, Olivais ou junto a grandes zonas desportivas/universitárias, mas a situação muda de quarteirão para quarteirão.' },
            { kind: 'checklist', items: [
              'Veja os sinais à entrada da rua, e não apenas junto ao lugar.',
              'Junto ao metro Campo Grande e às universidades, os lugares esgotam rapidamente nas manhãs dos dias úteis.',
              'À noite e ao domingo é mais fácil, porque muitas zonas EMEL são gratuitas de acordo com o horário.',
              'Se a rua estiver cheia de residentes, é melhor não deixar o carro em esquinas e passeios: rebocam.'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'weekend',
      title: 'Fim de semana: quando a EMEL passa a ser gratuita',
      content: [
        { kind: 'paragraph', text: 'Para deslocações curtas ao centro, o truque mais simples é chegar nos horários gratuitos, em vez de procurar uma rua “secreta”. Em 2026, a lógica-base é esta: domingo e feriados são geralmente gratuitos; o sábado depende da zona e do sinal.' },
        { kind: 'checklist', items: [
          'Zona azul: em muitos locais, o sábado depois das 13:00 e todo o domingo são gratuitos.',
          'Nos dias úteis, o período pago standard é frequentemente 09:00–19:00, mas não confie nisso sem verificar o sinal.',
          'Em zonas turísticas e comerciais pode haver horários especiais, incluindo ao sábado.',
          'Se o sinal disser sábado 09:00–13:00 — depois das 13:00 não é preciso pagar.',
          'Se o sinal disser sábado 09:00–19:00 ou outro regime alargado — pague até à hora indicada.',
          'À noite, o estacionamento pode ser gratuito pela EMEL, mas as restrições trânsito, residentes, cargas e descargas continuam a aplicar-se.',
          'Nos parques subterrâneos da EMEL/operadores privados, os fins de semana não se tornam automaticamente gratuitos.'
        ] },
        { kind: 'warning', text: 'Não use conselhos antigos de blogues de 2018–2023: a EMEL alargou zonas e os horários em certas ruas mudaram. Em 2026, a regra final é a placa na rua e o mapa da EMEL.' }
      ]
    },
    {
      id: 'how-to-check',
      title: 'Como verificar um lugar em 30 segundos',
      content: [
        { kind: 'paragraph', text: 'Antes de se afastar do carro, faça uma verificação rápida. É mais rápido do que discutir uma coima em português depois.' },
        { kind: 'checklist', items: [
          'Veja o início da rua: existe uma placa EMEL com a cor da zona e horário.',
          'Encontre o parquímetro mais próximo. Se existir — a rua é quase certamente paga nas horas indicadas.',
          'Abra o site da EMEL ou a aplicação ePark e verifique a geolocalização.',
          'Compare o número da rua: por vezes um lado da rua está na zona e o outro não.',
          'Verifique placas adicionais: residentes, cargas e descargas, obras, feira, escola, bombeiros.',
          'Fotografe o sinal se deixar o carro no limite da zona.',
          'Se o lugar parecer bom demais para o centro de Lisboa, verifique duas vezes: muitas vezes é uma loading bay ou um lugar para residents.'
        ] },
        { kind: 'paragraph', text: 'Para expatriados sem o hábito português de ler placas de trânsito, a regra é simples: se não tiver a certeza, é melhor pagar através da ePark/Multibanco ou mudar o carro para um troço claramente gratuito.' }
      ]
    },
    {
      id: 'dont-do',
      title: 'O que não fazer',
      content: [
        { kind: 'checklist', items: [
          'Não estacione no passeio: em Lisboa muitos locais fazem-no, mas as coimas são reais.',
          'Não ocupe lugares com placa residentes/moradores sem dístico de residente.',
          'Não deixe o carro na linha amarela nem junto a contentores do lixo.',
          'Não bloqueie o elétrico, a faixa BUS ou a entrada de garagem.',
          'Não conte com o argumento de que “toda a gente estaciona assim” — rebocam de forma seletiva, especialmente junto a zonas turísticas.',
          'Não deixe malas, portátil, bagagem e documentos no interior do carro, especialmente em Belém, Monsanto, miradouros e junto a acessos a praias.',
          'Não se esqueça do IUC, seguro e inspeção: o estacionamento gratuito não evita controlos policiais.'
        ] },
        { kind: 'warning', text: 'Se o carro for rebocado, normalmente é preciso procurá-lo através da Polícia Municipal/EMEL e pagar a coima mais reboque/depósito. Isto transforma facilmente o estacionamento “gratuito” na opção mais cara do dia.' }
      ]
    }
  ],
  costs: [
    { label: 'Estacionamento gratuito na via pública fora da zona EMEL', amountEUR: 0, note: 'Apenas se não houver sinais EMEL, restrições para residentes nem proibições de paragem.' },
    { label: 'Estacionamento durante os horários gratuitos da EMEL', amountEUR: 0, note: 'Geralmente domingo e feriados; sábado depois das 13:00 — em muitas zona azul, mas verifique o sinal.' }
  ],
  sources: [
    { title: 'EMEL — Dístico Verde (estacionamento na via pública para 100% elétricos)', url: 'https://www.emel.pt/pt/disticos/estacionamento-na-via-publica/distico-verde/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-05' },
    { title: 'EMEL — meu perfil (gestão de dísticos e zonas)', url: 'https://meuperfil.emel.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-05' },
    { title: 'EMEL — site oficial do operador de estacionamento de Lisboa', url: 'https://www.emel.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
