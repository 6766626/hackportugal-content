export default {
  editorialVoice: 'hackportugal',
  id: 'estacionamento-gratis-lisboa',
  categoryId: 'auto_trips',
  title: 'Estacionamento gratuito em Lisboa — onde deixar o carro sem EMEL',
  tldr: 'Em Lisboa ainda há estacionamento gratuito, mas não no centro: procure lugares fora da zona EMEL em Monsanto, na periferia do Parque das Nações, em bolsões pontuais em Belém/Algés e nas franjas de Alvalade. Na maioria das zonas EMEL o domingo e os feriados são gratuitos; em muitas zona azul o sábado após as 13:00 também é gratuito, mas quem manda é o sinal na rua. Em 2026, verifique o sinal da EMEL e o mapa: os limites das zonas mudam e a multa por falta de pagamento rapidamente engole toda a poupança.',
  tags: ['estacionamento', 'lisboa', 'emel', 'carro'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'rule',
      title: 'Regra fundamental: a gratuitidade é determinada pelo sinal da EMEL',
      content: [
        { kind: 'paragraph', text: 'Em Lisboa, o estacionamento pago na via pública é gerido pela EMEL. Se houver parquímetro na rua, marcação da EMEL ou uma placa com a zona tarifária, não se guie pelo Google Maps, mas sim pelo sinal no local: é aí que estão os dias, os horários e o tipo de zona.' },
        { kind: 'checklist', items: [
          'Procure a expressão fora da zona EMEL ou a ausência de parquímetro e de placas da EMEL em todo o troço da rua.',
          'Ao domingo é normalmente gratuito nas zonas EMEL padrão na via pública.',
          'Feriados — feriados nacionais — geralmente também são gratuitos, salvo indicação em contrário no sinal.',
          'Em muitas zona azul o sábado após as 13:00 é gratuito, mas não é uma regra universal para toda Lisboa.',
          'Em zonas de elevada procura, junto da Baixa, Chiado, Avenida, Santos, Príncipe Real, Parque das Nações e Belém, podem existir horários alargados ou sábado pago.',
          'A marcação branca nem sempre significa gratuito: em Lisboa os lugares pagos da EMEL muitas vezes também parecem lugares brancos normais.',
          'Marcação amarela, lugares de cargas e descargas, residentes, táxis, polícia, mobilidade reduzida — não são estacionamento gratuito para todos.',
          'Se tiver dúvidas, abra o mapa da EMEL ou a aplicação ePark e confirme a rua pela geolocalização.'
        ] },
        { kind: 'warning', text: 'Não deixe o carro “por 5 minutos” sem pagar na zona EMEL. A fiscalização circula a pé e em viaturas com câmaras. Estacionar indevidamente junto à passadeira, no passeio ou num lugar para residentes pode acabar em multa e reboque.' }
      ]
    },
    {
      id: 'free-areas',
      title: 'Onde realmente procurar lugares gratuitos 🚗',
      content: [
        { kind: 'paragraph', text: 'Os lugares gratuitos em Lisboa — não são um único grande parque, mas sim um conjunto de zonas na periferia da rede paga. Abaixo — opções práticas onde a probabilidade é maior do que no centro histórico.' },
        { kind: 'substeps', items: [
          { id: 'monsanto', title: 'Monsanto', content: [
            { kind: 'paragraph', text: 'Parque Florestal de Monsanto — a opção mais fiável para estacionamento gratuito por algumas horas: os bolsões junto a miradouros, zonas desportivas e trilhos geralmente não integram a rede de via pública da EMEL.' },
            { kind: 'checklist', items: [
              'Serve para passeios, bicicleta, piquenique e como park-and-ride, se depois seguir de Uber/táxi.',
              'Verifique as barreiras e as restrições noturnas em alguns parques.',
              'Não deixe objetos à vista no habitáculo: carros de turistas chamam a atenção aqui.',
              'A pé é pouco prático para o centro, mas é conveniente se vive/passa por Benfica, Campolide, Alcântara.'
            ] }
          ] },
          { id: 'belem', title: 'Belém e a marginal até Algés', content: [
            { kind: 'paragraph', text: 'Em Belém, junto aos pontos turísticos há muitos lugares pagos e ocupados, mas ainda se encontram bolsões gratuitos mais a poente e ao longo do Tejo em direção a Algés/Oeiras, sobretudo se se afastar do Mosteiro dos Jerónimos e da Torre de Belém.' },
            { kind: 'checklist', items: [
              'Procure troços sem parquímetros da EMEL e sem placas de zona tarifada.',
              'Junto ao MAAT, CCB, Pastéis de Belém e nas vias principais conte antes com estacionamento pago ou lotação esgotada.',
              'Ao fim‑de‑semana chegue de manhã: à hora de almoço a marginal enche-se.',
              'Não estacione na ciclovia, no passeio ou na zona para autocarros turísticos.'
            ] }
          ] },
          { id: 'parque-nacoes', title: 'Parque das Nações — só periferia', content: [
            { kind: 'paragraph', text: 'Junto ao Oceanário, Gare do Oriente, Altice Arena e Vasco da Gama o estacionamento é sobretudo pago ou comercial. As hipóteses gratuitas — estão na periferia: mais perto de Moscavide, Olivais, Sacavém e nas franjas norte/este da zona, onde algumas ruas podem ficar fora da EMEL.' },
            { kind: 'checklist', items: [
              'Verifique o limite da zona: ruas pagas e gratuitas podem alternar de um quarteirão para o outro.',
              'Para concertos e futebol, chegue cedo ou use o metro da Linha Vermelha.',
              'Não confunda uma rua gratuita com lugares de moradores/residentes.',
              'Se vir um parquímetro — pague, mesmo que a rua ao lado seja gratuita.'
            ] }
          ] },
          { id: 'alvalade', title: 'Alvalade e Campo Grande — periferia, não o núcleo', content: [
            { kind: 'paragraph', text: 'Dentro de Alvalade e junto da Avenida de Roma/Entrecampos há muita EMEL. Os lugares gratuitos aparecem mais nas ruas periféricas em direção a Lumiar, Telheiras, Olivais ou junto de grandes zonas desportivas/universitárias, mas a situação muda de quarteirão para quarteirão.' },
            { kind: 'checklist', items: [
              'Veja os sinais à entrada da rua, e não apenas junto ao próprio lugar.',
              'Junto ao metro de Campo Grande e às universidades, os lugares esgotam-se depressa nas manhãs de dias úteis.',
              'Ao fim do dia e ao domingo é mais fácil, porque muitas zonas EMEL são gratuitas nesses horários.',
              'Se a rua estiver cheia de residentes, não deixe o carro em cantos e passeios: rebocam-no.'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'weekend',
      title: 'Fins‑de‑semana: quando a EMEL se torna gratuita',
      content: [
        { kind: 'paragraph', text: 'Para idas curtas ao centro, o truque mais simples — é ir nas horas gratuitas, em vez de procurar uma rua “secreta”. Em 2026 a lógica base é: domingo e feriados são normalmente gratuitos; o sábado depende da zona e do sinal.' },
        { kind: 'checklist', items: [
          'Zona azul: em muitos sítios o sábado após as 13:00 e todo o domingo são gratuitos.',
          'Em dias úteis, o período pago padrão é muitas vezes 09:00–19:00, mas não confie nisso sem verificar o sinal.',
          'Em zonas turísticas e comerciais podem existir horários especiais, incluindo ao sábado.',
          'Se o sinal diz sábado 09:00–13:00 — depois das 13:00 não é preciso pagar.',
          'Se o sinal diz sábado 09:00–19:00 ou outro regime alargado — pague até à hora indicada.',
          'À noite o estacionamento pode ser gratuito pela EMEL, mas as restrições de trânsito, residentes, cargas e descargas continuam a aplicar-se.',
          'Nos parques subterrâneos da EMEL/operadores privados os fins‑de‑semana não ficam gratuitos automaticamente.'
        ] },
        { kind: 'warning', text: 'Não use conselhos antigos de blogues de 2018–2023: a EMEL foi alargando as zonas e os horários em algumas ruas mudaram. Em 2026, a regra final — é o sinal na rua e o mapa da EMEL.' }
      ]
    },
    {
      id: 'how-to-check',
      title: 'Como verificar o lugar em 30 segundos',
      content: [
        { kind: 'paragraph', text: 'Antes de se afastar do carro, faça uma mini‑verificação. É mais rápido do que depois discutir uma multa em português.' },
        { kind: 'checklist', items: [
          'Olhe para o início da rua: há placa da EMEL com a cor da zona e o horário?',
          'Encontre o parquímetro mais próximo. Se existir — a rua é quase de certeza paga nos horários indicados.',
          'Abra o site da EMEL ou a aplicação ePark e verifique a geolocalização.',
          'Compare o número de porta: às vezes um lado da rua está em zona e o outro — não.',
          'Confira placas adicionais: residentes, cargas e descargas, obras, feira, escola, bombeiros.',
          'Fotografe o sinal, se deixar o carro no limite da zona.',
          'Se o lugar parecer “bom demais” para o centro de Lisboa, confirme duas vezes: muitas vezes é uma zona de cargas e descargas ou um lugar para residentes.'
        ] },
        { kind: 'paragraph', text: 'Para expatriados sem o hábito português de ler sinalização, a regra é simples: se não tiver certeza, é melhor pagar via ePark/Multibanco ou mudar o carro para um troço claramente gratuito.' }
      ]
    },
    {
      id: 'dont-do',
      title: 'O que não fazer',
      content: [
        { kind: 'checklist', items: [
          'Não estacione no passeio: em Lisboa os locais fazem-no muito, mas as multas são reais.',
          'Não ocupe lugares com placa de residentes/moradores sem dístico de residente.',
          'Não deixe o carro sobre linha amarela nem junto a contentores do lixo.',
          'Não bloqueie o elétrico, a via BUS ou a entrada da garagem.',
          'Não parta do princípio de que “todos estão assim” — rebocam de forma seletiva, especialmente junto a zonas turísticas.',
          'Não deixe malas, portátil, bagagens e documentos à vista, especialmente em Belém, Monsanto, miradouros e nas direções das praias.',
          'Não se esqueça do IUC, do seguro e da inspeção: estacionamento gratuito não o salva de fiscalizações policiais.'
        ] },
        { kind: 'warning', text: 'Se o carro foi rebocado, normalmente terá de o localizar através da Polícia Municipal/EMEL e pagar a multa mais reboque/depósito. Isto transforma facilmente o “gratuito” na opção mais cara do dia.' }
      ]
    }
  ],
  costs: [
    { label: 'Estacionamento gratuito na via pública fora da zona EMEL', amountEUR: 0, note: 'Só se não houver sinais da EMEL, restrições de residentes e proibições de paragem.' },
    { label: 'Estacionamento nas horas gratuitas da EMEL', amountEUR: 0, note: 'Normalmente domingo e feriados; sábado após as 13:00 — em muitas zona azul, mas verifique o sinal.' }
  ],
  sources: [
    { title: 'EMEL — Dístico Verde (estacionamento na via pública para 100% elétricos)', url: 'https://www.emel.pt/pt/disticos/estacionamento-na-via-publica/distico-verde/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-05' },
    { title: 'EMEL — meu perfil (gestão de dísticos e zonas)', url: 'https://meuperfil.emel.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-05' },
    { title: 'EMEL — site oficial do operador de estacionamento de Lisboa', url: 'https://www.emel.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
