export default {
  editorialVoice: 'hackportugal',
  id: 'patinetes-eletricas-rules',
  categoryId: 'auto_ownership',
  title: 'Trotinetas elétricas em Portugal: regras, capacete, Bolt/Lime/TIER',
  tldr: 'Em 2026, uma trotineta elétrica normal é considerada veículo de mobilidade individual, equiparado a velocípede, se por construção não ultrapassar 25 km/h e tiver potência até 0,25 kW. Deve circular nas ciclovias ou na faixa de rodagem, não no passeio: a coima típica é 60–300 €. A idade mínima para uma trotineta elétrica é 16 anos; o aluguer Bolt/Lime/TIER muitas vezes exige 18+. O capacete é obrigatório para menores; para adultos, formalmente nem sempre é fiscalizado, mas em caso de lesões, sem ele, o seguro e a aplicação podem contestar.',
  tags: ['trotinetas', 'trotineta', 'coimas', 'bolt'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'legal-status',
      title: '1. O que conta como trotineta elétrica “normal”',
      content: [
        { kind: 'paragraph', text: 'Para o utilizador comum, o limite importante do Código da Estrada é este: uma trotineta elétrica entra no regime de velocípede/veículo de mobilidade individual se a sua velocidade máxima de construção não for superior a 25 km/h e a potência nominal contínua não for superior a 0,25 kW. É precisamente para isto que estão configurados os serviços urbanos Bolt, Lime, TIER e semelhantes.' },
        { kind: 'checklist', items: [
          'Velocidade máxima de construção: 25 km/h.',
          'Potência nominal contínua: até 0,25 kW.',
          'Não é necessária carta de condução da categoria B ou AM para este tipo de trotineta.',
          'Não são exigidos registo no IMT nem matrícula para uma trotineta elétrica standard.',
          'IUC, ISV e impostos IMT/ISV não se aplicam a uma trotineta comum.',
          'O seguro obrigatório como para um automóvel não é obrigatório para uma trotineta standard.',
          'Se a trotineta for mais rápida/mais potente, pode deixar de ser uma “trotineta” e passar para o regime de ciclomotor/motociclo: nesse caso são necessários homologação, matrícula, seguro e carta.'
        ] },
        { kind: 'warning', text: 'Muitos modelos privados comprados na AliExpress/Amazon têm desbloqueio para 30–45 km/h. Na estrada, isto já implica risco de coima, recusa do seguro e apreensão até ser apurada a categoria do veículo.' }
      ]
    },
    {
      id: 'where-to-ride',
      title: '2. Onde pode circular e onde não pode 🚫',
      content: [
        { kind: 'paragraph', text: 'A lógica de base é a mesma da bicicleta: primeiro ciclovia/faixa ciclável, se existir; se não existir — o lado direito da faixa de rodagem. A zona pedonal e o passeio não são uma via normal de circulação para uma trotineta elétrica.' },
        { kind: 'checklist', items: [
          'Pode: ciclovias, faixas cicláveis, shared lanes, zonas onde a circulação de velocípedes seja permitida.',
          'Pode: faixa de rodagem junto ao lado direito, se não existir infraestrutura ciclável.',
          'Não pode: passeio, exceto para uma travessia breve para entrar num pátio, garagem ou parque de estacionamento.',
          'Não pode: passadeiras a velocidade; é mais seguro desmontar e atravessar como peão.',
          'Não pode: autoestradas, IP/IC e estradas onde a circulação de velocípedes seja proibida por sinalização.',
          'Não pode: circular duas pessoas na mesma trotineta, se o modelo não tiver sido concebido e autorizado para passageiro.',
          'Não pode: telemóvel na mão, auscultadores nos dois ouvidos, álcool/drogas — aplicam-se as regras do Código da Estrada.',
          'À noite e com chuva são necessárias luzes/refletores a funcionar; sem visibilidade, a polícia costuma mandar parar.'
        ] },
        { kind: 'warning', text: 'Por circular no passeio ou por outra infração às regras de circulação aplicáveis aos velocípedes, a coima típica é 60–300 €. Em zonas turísticas de Lisboa, Porto, Cascais e Algarve, a fiscalização é mais frequente, sobretudo no verão e à noite.' }
      ]
    },
    {
      id: 'age-helmet-safety',
      title: '3. Idade, capacete e segurança',
      content: [
        { kind: 'paragraph', text: 'A regra prática em 2026: uma trotineta elétrica não é um brinquedo de criança. Para uma motorized trotineta, conte com um mínimo de 16 anos; os serviços de aluguer normalmente impõem 18+ nas condições da conta, porque é necessário contrato, cartão de pagamento e responsabilidade por coimas/danos.' },
        { kind: 'checklist', items: [
          'Idade mínima para conduzir uma trotineta elétrica: 16 anos.',
          'Bolt, Lime, TIER e Hive podem exigir 18+ — consulte os Terms na aplicação.',
          'O capacete é obrigatório para menores; para adultos é fortemente recomendado.',
          'Para a noite: luz branca à frente, luz vermelha atrás, elementos refletores.',
          'Uma trotineta — um condutor; uma criança “na plataforma à frente” é considerada infração e transporte perigoso.',
          'Não circule com um saco pendurado no guiador: é uma causa típica de queda na calçada portuguesa.',
          'Com chuva, a distância de travagem aumenta muito; a calçada e os carris do elétrico são especialmente escorregadios.',
          'Em caso de acidente, ligue 112, fotografe o local, a trotineta, o QR/número de aluguer e os dados das testemunhas.'
        ] },
        { kind: 'warning', text: 'Mesmo que, na prática, a polícia nem sempre verifique o capacete em adultos, a ausência de capacete depois de uma lesão pode complicar uma disputa com a seguradora ou com o serviço de aluguer: estes invocam frequentemente o “uso seguro” nas regras do serviço.' }
      ]
    },
    {
      id: 'shared-apps',
      title: '4. Bolt, Lime, TIER, Hive: como usar sem surpresas',
      content: [
        { kind: 'paragraph', text: 'Os serviços de aluguer funcionam através de licenças municipais. O mapa de zonas, estacionamentos, velocidade e penalizações muda não só de uma zona do país para outra, mas também de bairro para bairro: Lisboa, Porto, Braga, Coimbra, Faro e Cascais podem ter regras de geofencing diferentes.' },
        { kind: 'checklist', items: [
          'Antes da viagem, verifique na aplicação slow zone, no-ride zone e mandatory parking zone.',
          'No centro, a velocidade pode descer automaticamente para 10–15 km/h.',
          'Só é possível terminar a viagem numa zona autorizada; caso contrário, o contador continuará a correr.',
          'A fotografia do estacionamento após a viagem é obrigatória: sem ela, pode ser cobrada uma penalty fee.',
          'Não deixe a trotineta no passeio, à entrada de um prédio, em paragens, rampas ou passadeiras.',
          'Se a trotineta estiver avariada, termine imediatamente a viagem e envie fotografias ao support.',
          'Verifique os travões e o guiador antes de arrancar: se cair devido a uma avaria evidente, é mais fácil contestar se tiver fotografias/vídeo antes da viagem.',
          'A conta não pode ser emprestada a um amigo: coimas, danos e bloqueio serão imputados ao titular da conta.'
        ] },
        { kind: 'paragraph', text: 'As tarifas mudam, mas o modelo típico é unlock fee + preço por minuto. Na época turística, as aplicações podem ativar preços dinâmicos ou day pass. Veja sempre o preço final antes de arrancar, especialmente se a viagem for para o aeroporto, estação ferroviária ou zona de praia.' }
      ]
    },
    {
      id: 'insurance-fines',
      title: '5. Seguro, coimas e o que fazer se a polícia o mandar parar',
      content: [
        { kind: 'paragraph', text: 'Para uma trotineta elétrica standard até 25 km/h, não é obrigatório ter um seguro separado de responsabilidade civil. Mas isso não significa que os danos sejam gratuitos: se você atropelar um peão, danificar um automóvel ou uma montra, o condutor pode ter de pagar pessoalmente.' },
        { kind: 'checklist', items: [
          'Para uma trotineta própria, faz sentido ter seguro de responsabilidade civil familiar/vida privada.',
          'Verifique se o seu multirriscos habitação ou seguro familiar cobre danos causados por trotinetas elétricas.',
          'O aluguer normalmente inclui cobertura básica, mas com franquia, exclusões e recusa em caso de álcool, circulação com duas pessoas ou violação de zonas.',
          'Se a polícia o mandar parar, mostre calmamente o ID/autorização de residência ou passaporte, a aplicação de aluguer e explique o percurso.',
          'Não discuta no local a qualificação da infração: peça o auto de contraordenação e os dados para defesa.',
          'Guarde a captura de ecrã da viagem, o percurso GPS, o recibo da aplicação e a fotografia do estacionamento.',
          'Se recebeu uma coima de 60–300 €, os prazos de pagamento/contestação estão indicados na notificação; não se deve ignorar correspondência enviada para a morada portuguesa.',
          'Em caso de acidente com feridos, chame sempre 112 e PSP/GNR; um acordo verbal “sem polícia” muitas vezes acaba por falhar depois.'
        ] },
        { kind: 'warning', text: 'Álcool numa trotineta é uma má ideia, juridicamente e fisicamente. Nas zonas noturnas do Bairro Alto, Cais do Sodré, Ribeira, Albufeira e Lagos, a polícia fiscaliza regularmente condutores de mobilidade ligeira depois dos bares.' }
      ]
    }
  ],
  costs: [
    { label: 'Coima por circular no passeio ou por violar regras de circulação', amountEURMin: 60, amountEURMax: 300, note: 'Coima típica ao abrigo do Código da Estrada para infrações ao regime dos velocípedes/circulação no passeio.' },
    { label: 'Aluguer Bolt/Lime/TIER', amountEURMin: 0.15, amountEURMax: 0.35, note: 'Referência por minuto; unlock fee e passes dependem da cidade, da época e da aplicação.' },
    { label: 'Capacete próprio', amountEURMin: 25, amountEURMax: 80, note: 'Capacete urbano normal da Decathlon/loja de desporto; mais barato do que uma coima e uma lesão.' },
    { label: 'Seguro responsabilidade civil familiar', amountEURMin: 25, amountEURMax: 80, note: 'Referência por ano; confirme se as trotinetas elétricas estão incluídas.' }
  ],
  sources: [
    { title: 'IMT: veículos de mobilidade individual e regras para trotinetas', url: 'https://www.imt-ip.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código da Estrada — legislação consolidada, regras para velocípedes/trotinetas e coimas', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/1994-34457775', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 102-B/2020 — alterações ao Código da Estrada sobre mobilidade suave', url: 'https://dre.pt/dre/detalhe/decreto-lei/102-b-2020-150077473', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Bolt Portugal: regras de segurança e condições de utilização das trotinetas', url: 'https://bolt.eu/pt-pt/scooters/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
