export default {
  editorialVoice: 'hackportugal',
  id: 'estacionamento-gratis-lisboa',
  categoryId: 'auto_trips',
  title: 'Estacionamento gratuito em Lisboa — onde deixar o carro sem EMEL',
  tldr: 'Em Lisboa ainda existe estacionamento gratuito, mas não no centro: procure lugares fora da zona EMEL em Monsanto, na periferia do Parque das Nações, em algumas bolsas de Belém/Algés e nas zonas limítrofes de Alvalade. Na maioria das zonas EMEL, o domingo e os feriados são gratuitos; em muitas zona azul, o sábado depois das 13:00 também é gratuito, mas o que conta é a placa na rua. Em 2026, verifique a placa EMEL e o mapa: os limites das zonas mudam, e a multa por falta de pagamento consome rapidamente qualquer poupança.',
  tags: ['estacionamento', 'lisboa', 'emel', 'automóvel'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'rule',
      title: 'Regra principal: a gratuitidade é definida pela placa EMEL',
      content: [
        { kind: 'paragraph', text: 'Em Lisboa, o estacionamento pago na via pública é gerido pela EMEL. Se a rua tiver parquímetro, marcação EMEL ou uma placa com a zona tarifária, não se guie pelo Google Maps, mas sim pela sinalização no local: é aí que estão indicados os dias, horários e o tipo de zona.' },
        { kind: 'checklist', items: [
          'Procure a expressão fora da zona EMEL ou a ausência de parquímetro e de placas EMEL em todo o troço da rua.',
          'O domingo costuma ser gratuito nas zonas de rua EMEL padrão.',
          'Feriados — feriados nacionais — normalmente também são gratuitos, se a placa não indicar o contrário.',
          'Em muitas zona azul, o sábado depois das 13:00 é gratuito, mas esta não é uma regra universal para toda Lisboa.',
          'Em zonas de elevada procura, perto da Baixa, Chiado, Avenida, Santos, Príncipe Real, Parque das Nações e Belém, pode haver horários alargados ou sábado pago.',
          'A marcação branca nem sempre significa gratuito: em Lisboa, os lugares pagos EMEL muitas vezes também parecem lugares brancos comuns.',
          'Marcação amarela, lugares cargas e descargas, residentes, táxis, polícia, mobilidade reduzida — não são estacionamento gratuito para todos.',
          'Em caso de dúvida, abra o mapa da EMEL ou a aplicação ePark e verifique a rua por geolocalização.'
        ] },
        { kind: 'warning', text: 'Não deixe o carro “só por 5 minutos” sem pagar numa zona EMEL. A fiscalização circula a pé e em carros com câmaras. O estacionamento indevido junto a uma passadeira, em cima do passeio ou num lugar para residentes pode acabar em multa e reboque.' }
      ]
    },
    {
      id: 'free-areas',
      title: 'Onde procurar realmente lugares gratuitos 🚗',
      content: [
        { kind: 'paragraph', text: 'Os lugares gratuitos em Lisboa não são um grande parque de estacionamento único, mas sim um conjunto de zonas na periferia da rede paga. Seguem-se direcções práticas onde a probabilidade é maior do que no centro histórico.' },
        { kind: 'substeps', items: [
          { id: 'monsanto', title: 'Monsanto', content: [
            { kind: 'paragraph', text: 'O Parque Florestal de Monsanto é a opção mais fiável para estacionamento gratuito durante algumas horas: as bolsas de estacionamento junto aos miradouros, zonas desportivas e trilhos normalmente não fazem parte da rede de rua da EMEL.' },
            { kind: 'checklist', items: [
              'Adequado para passeios, bicicleta, piqueniques e como park-and-ride, se depois seguir de Uber/táxi.',
              'Verifique cancelas e restrições nocturnas em algumas áreas.',
              'Não deixe objectos no habitáculo: os carros de turistas são visíveis aqui.',
              'É pouco prático ir a pé para o centro, mas conveniente se vive ou passa por Benfica, Campolide, Alcântara.'
            ] }
          ] },
          { id: 'belem', title: 'Belém e marginal até Algés', content: [
            { kind: 'paragraph', text: 'Em Belém, junto aos pontos turísticos, há muitos lugares pagos e ocupados, mas ainda se encontram bolsas gratuitas mais a oeste e ao longo do Tejo na direcção de Algés/Oeiras, sobretudo se se afastar do Mosteiro dos Jerónimos e da Torre de Belém.' },
            { kind: 'checklist', items: [
              'Procure troços sem parquímetros EMEL e sem placas zona tarifada.',
              'Junto ao MAAT, CCB, Pastéis de Belém e nas ruas principais, conte mais com estacionamento pago ou lotação esgotada.',
              'Ao fim-de-semana, chegue de manhã: por volta da hora de almoço, a marginal fica cheia.',
              'Não estacione na ciclovia, passeio ou zona para autocarros turísticos.'
            ] }
          ] },
          { id: 'parque-nacoes', title: 'Parque das Nações — apenas a periferia', content: [
            { kind: 'paragraph', text: 'Junto ao Oceanário, Gare do Oriente, Altice Arena e Vasco da Gama, o estacionamento é sobretudo pago ou comercial. As hipóteses gratuitas estão na periferia: mais perto de Moscavide, Olivais, Sacavém e das extremidades norte/este do bairro, onde algumas ruas podem estar fora da EMEL.' },
            { kind: 'checklist', items: [
              'Verifique o limite da zona: ruas pagas e gratuitas podem diferir de um quarteirão para o outro.',
              'Para concertos e futebol, chegue com antecedência ou use o metro Linha Vermelha.',
              'Não confunda uma rua gratuita com lugares moradores/residentes.',
              'Se vir um parquímetro — pague, mesmo que a rua ao lado seja gratuita.'
            ] }
          ] },
          { id: 'alvalade', title: 'Alvalade e Campo Grande — periferias, não o núcleo', content: [
            { kind: 'paragraph', text: 'Dentro de Alvalade e junto à Avenida de Roma/Entrecampos há muita EMEL. Os lugares gratuitos encontram-se mais frequentemente em ruas periféricas na direcção do Lumiar, Telheiras, Olivais ou junto a grandes zonas desportivas/universitárias, mas a situação muda de quarteirão para quarteirão.' },
            { kind: 'checklist', items: [
              'Veja as placas à entrada da rua, e não apenas junto ao lugar.',
              'Junto ao metro Campo Grande e às universidades, os lugares esgotam rapidamente nas manhãs dos dias úteis.',
              'À noite e ao domingo é mais fácil, porque muitas zonas EMEL são gratuitas conforme o horário.',
              'Se a rua estiver cheia de residentes, é melhor não deixar o carro em esquinas e passeios: há reboques.'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'weekend',
      title: 'Fins-de-semana: quando a EMEL passa a ser gratuita',
      content: [
        { kind: 'paragraph', text: 'Para deslocações curtas ao centro, o truque mais simples é chegar nas horas gratuitas, em vez de procurar uma rua “secreta”. Em 2026, a lógica base é esta: domingos e feriados costumam ser gratuitos; o sábado depende da zona e da placa.' },
        { kind: 'checklist', items: [
          'Zona azul: em muitos locais, o sábado depois das 13:00 e todo o domingo são gratuitos.',
          'Nos dias úteis, o período pago padrão é frequentemente 09:00–19:00, mas não conte com isso sem verificar a placa.',
          'Em zonas turísticas e comerciais pode haver horários especiais, incluindo ao sábado.',
          'Se a placa indicar sábado 09:00–13:00 — depois das 13:00 não é preciso pagar.',
          'Se a placa indicar sábado 09:00–19:00 ou outro regime alargado — pague até à hora indicada.',
          'À noite, o estacionamento pode ser gratuito pela EMEL, mas as restrições trânsito, residentes, cargas e descargas continuam em vigor.',
          'Nos parques subterrâneos da EMEL/operadores privados, os fins-de-semana não passam automaticamente a ser gratuitos.'
        ] },
        { kind: 'warning', text: 'Não use conselhos antigos de blogues de 2018–2023: a EMEL alargou zonas, e os horários em algumas ruas mudaram. Em 2026, a regra final é a placa na rua e o mapa da EMEL.' }
      ]
    },
    {
      id: 'how-to-check',
      title: 'Como verificar um lugar em 30 segundos',
      content: [
        { kind: 'paragraph', text: 'Antes de se afastar do carro, faça uma mini-verificação. É mais rápido do que discutir depois uma multa em português.' },
        { kind: 'checklist', items: [
          'Olhe para o início da rua: existe uma placa EMEL com a cor da zona e o horário.',
          'Procure o parquímetro mais próximo. Se existir — a rua é quase certamente paga nas horas indicadas.',
          'Abra o site da EMEL ou a aplicação ePark e verifique a geolocalização.',
          'Compare o número da rua: por vezes um lado da rua está na zona e o outro não.',
          'Verifique placas adicionais: residentes, cargas e descargas, obras, feira, escola, bombeiros.',
          'Fotografe a placa se deixar o carro no limite de uma zona.',
          'Se o lugar parece bom demais para o centro de Lisboa, verifique duas vezes: muitas vezes é loading bay ou lugar para residents.'
        ] },
        { kind: 'paragraph', text: 'Para expats sem o hábito português de ler placas de trânsito, a regra é simples: se não tiver a certeza, é melhor pagar através da ePark/Multibanco ou mudar o carro para um troço claramente gratuito.' }
      ]
    },
    {
      id: 'dont-do',
      title: 'O que não fazer',
      content: [
        { kind: 'checklist', items: [
          'Não estacione no passeio: em Lisboa muitos locais fazem-no, mas as multas são reais.',
          'Não ocupe lugares com placa residentes/moradores sem dístico de residente.',
          'Não deixe o carro em linha amarela nem junto a contentores do lixo.',
          'Não bloqueie o elétrico, a faixa BUS ou a entrada de uma garagem.',
          'Não conte com “toda a gente estaciona assim” — os reboques são selectivos, especialmente junto a zonas turísticas.',
          'Não deixe malas, computador portátil, bagagem e documentos no habitáculo, sobretudo em Belém, Monsanto, miradouros e junto a acessos às praias.',
          'Não se esqueça do IUC, seguro e inspeção: o estacionamento gratuito não o protege de fiscalizações policiais.'
        ] },
        { kind: 'warning', text: 'Se o carro for rebocado, normalmente terá de o procurar através da Polícia Municipal/EMEL e pagar a multa mais reboque/depósito. Isto transforma facilmente o estacionamento “gratuito” na opção mais cara do dia.' }
      ]
    }
  ],
  costs: [
    { label: 'Estacionamento gratuito na via pública fora da zona EMEL', amountEUR: 0, note: 'Apenas se não houver placas EMEL, restrições de residentes nem proibições de paragem.' },
    { label: 'Estacionamento nas horas gratuitas da EMEL', amountEUR: 0, note: 'Normalmente domingo e feriados; sábado depois das 13:00 — em muitas zona azul, mas verifique a placa.' }
  ],
  sources: [
    { title: 'EMEL — zonas e tarifários do estacionamento na via pública em Lisboa', url: 'https://www.emel.pt/pt/estacionamento/na-via-publica/zonas-e-tarifarios/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'EMEL — estacionamento na via pública e regras de pagamento', url: 'https://www.emel.pt/pt/estacionamento/na-via-publica/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'EMEL — dísticos e zonas de residentes', url: 'https://www.emel.pt/pt/estacionamento/na-via-publica/disticos/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'EMEL — site oficial do operador de estacionamento de Lisboa', url: 'https://www.emel.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
