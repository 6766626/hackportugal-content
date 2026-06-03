export default {
  editorialVoice: 'hackportugal',
  id: 'patinetes-eletricas-rules',
  categoryId: 'auto_ownership',
  title: 'Trotinetas elétricas em Portugal: regras, capacete, Bolt/Lime/TIER',
  tldr: 'Em 2026, uma trotineta elétrica comum é considerada veículo de mobilidade individual, equiparado a velocípede, se por construção não ultrapassar 25 km/h e tiver potência até 0,25 kW. Deve circular nas ciclovias ou na faixa de rodagem, não no passeio: a coima típica é de 60–300 €. A lei não fixa idade mínima para uma trotineta destas; o aluguer Bolt/Lime/TIER exige quase sempre 18+. O capacete não é legalmente obrigatório para adultos, mas é fortemente recomendado. Importante: desde 20 de junho de 2025 (Decreto-Lei n.º 26/2025), o seguro é obrigatório para trotinetas com mais de 25 km/h ou mais de 25 kg (acima de 14 km/h); uma trotineta standard até 25 km/h e até 25 kg continua a não precisar de seguro.',
  tags: ['trotinetas', 'trotineta', 'coimas', 'bolt'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'legal-status',
      title: '1. O que é considerado uma trotineta elétrica "normal"',
      content: [
        { kind: 'paragraph', text: 'Para o utilizador quotidiano, o limite importante é o do Código da Estrada: uma trotineta elétrica entra no regime de velocípede/veículo de mobilidade individual se a sua velocidade máxima por construção não for superior a 25 km/h e a potência nominal contínua não for superior a 0,25 kW. É precisamente para isto que estão configurados os serviços urbanos Bolt, Lime, TIER e serviços semelhantes.' },
        { kind: 'checklist', items: [
          'Velocidade máxima por construção: 25 km/h.',
          'Potência nominal contínua: até 0,25 kW.',
          'Carta de condução da categoria B ou AM não é necessária para este tipo de trotineta.',
          'Registo no IMT e matrícula não são exigidos para uma trotineta elétrica standard.',
          'IUC, ISV, impostos IMT/ISV não se aplicam a uma trotineta comum.',
          'O seguro obrigatório de responsabilidade civil (como para um carro) não é exigido a uma trotineta standard até 25 km/h e até 25 kg.',
          'Desde 20 de junho de 2025 (Decreto-Lei n.º 26/2025), o seguro é obrigatório se a trotineta for mais rápida do que 25 km/h OU pesar mais de 25 kg e circular a mais de 14 km/h.',
          'Se a trotineta for mais rápida/mais potente, pode deixar de ser "trotineta" e entrar no regime de ciclomotor/motociclo: nesse caso são necessários homologação, matrícula, seguro e carta.'
        ] },
        { kind: 'warning', text: 'Muitos modelos privados da AliExpress/Amazon têm desbloqueio para 30–45 km/h. Na estrada, isto já representa risco de coima, recusa da seguradora e apreensão até se esclarecer a categoria do veículo.' }
      ]
    },
    {
      id: 'where-to-ride',
      title: '2. Onde pode circular e onde não pode 🚫',
      content: [
        { kind: 'paragraph', text: 'A lógica de base é a mesma que para a bicicleta: primeiro ciclovia/faixa ciclável, se existir; se não existir, a parte direita da faixa de rodagem. A zona pedonal e o passeio não são uma via normal de circulação para uma trotineta elétrica.' },
        { kind: 'checklist', items: [
          'Pode: ciclovias, faixas cicláveis, shared lanes, zonas onde a circulação de velocípedes é permitida.',
          'Pode: faixa de rodagem junto à berma direita, se não houver infraestrutura ciclável.',
          'Não pode: passeio, exceto atravessamento breve para entrar num pátio, garagem ou estacionamento.',
          'Não pode: passadeiras a velocidade; é mais seguro desmontar e atravessar como peão.',
          'Não pode: autoestradas, IP/IC e estradas onde a circulação de velocípedes seja proibida por sinalização.',
          'Não pode: circular duas pessoas na mesma trotineta, se o modelo não estiver preparado e autorizado para passageiro.',
          'Não pode: telemóvel na mão, auscultadores nos dois ouvidos, álcool/drogas — aplicam-se as regras do Código da Estrada.',
          'À noite e com chuva são necessárias luzes/refletores operacionais; sem visibilidade, a polícia costuma mandar parar.'
        ] },
        { kind: 'warning', text: 'Por circular no passeio ou por outra infração às regras de circulação de velocípedes, a coima típica é de 60–300 €. Nas zonas turísticas de Lisboa, Porto, Cascais e Algarve há mais fiscalização, especialmente no verão e à noite.' }
      ]
    },
    {
      id: 'age-helmet-safety',
      title: '3. Idade, capacete e segurança',
      content: [
        { kind: 'paragraph', text: 'Regra prática em 2026: a trotineta elétrica não é um brinquedo para crianças. O Código da Estrada não fixa idade mínima para uma trotineta até 25 km/h (equiparada a velocípede) — o que surpreende muita gente. Na prática, os serviços de aluguer definem 18+ nas condições da conta, porque é necessário contrato, cartão de pagamento e responsabilidade por coimas/danos.' },
        { kind: 'checklist', items: [
          'A lei não fixa idade mínima para uma trotineta até 25 km/h; ainda assim, é inseguro para crianças.',
          'Bolt, Lime, TIER e Hive exigem quase sempre 18+ — consulte os Terms na aplicação.',
          'O capacete não é legalmente obrigatório para adultos, mas é fortemente recomendado; para crianças, ainda mais.',
          'Para a noite: luz branca à frente, luz vermelha atrás, elementos refletores.',
          'Uma trotineta — um condutor; uma criança "na plataforma à frente" é considerada infração e transporte perigoso.',
          'Não circule com um saco pendurado no guiador: é uma causa típica de queda na calçada portuguesa.',
          'Com chuva, a distância de travagem aumenta muito; a calçada e os carris do elétrico são especialmente escorregadios.',
          'Em caso de acidente, ligue 112, fotografe o local, a trotineta, o QR/número de aluguer e os dados das testemunhas.'
        ] },
        { kind: 'warning', text: 'Mesmo que, na prática, a polícia nem sempre verifique o capacete em adultos, a ausência de capacete após uma lesão pode complicar uma disputa com a seguradora ou o serviço de aluguer: estes invocam frequentemente a "utilização segura" nas regras do serviço.' }
      ]
    },
    {
      id: 'shared-apps',
      title: '4. Bolt, Lime, TIER, Hive: como usar sem surpresas',
      content: [
        { kind: 'paragraph', text: 'Os serviços de aluguer funcionam ao abrigo de licenças municipais. O mapa de zonas, estacionamento, velocidade e coimas muda não só de país para país, mas também de bairro para bairro: Lisboa, Porto, Braga, Coimbra, Faro e Cascais podem ter regras de geofencing diferentes.' },
        { kind: 'checklist', items: [
          'Antes da viagem, verifique na aplicação slow zone, no-ride zone e mandatory parking zone.',
          'No centro, a velocidade pode descer automaticamente para 10–15 km/h.',
          'Só é possível terminar a viagem numa zona autorizada; caso contrário, o contador continuará a correr.',
          'A fotografia do estacionamento após a viagem é obrigatória: sem ela pode ser cobrada uma penalty fee.',
          'Não deixe a trotineta no passeio, à entrada de um prédio, paragem, rampa ou passadeira.',
          'Se a trotineta estiver avariada, termine imediatamente a viagem e envie uma fotografia para o support.',
          'Verifique os travões e o guiador antes de arrancar: em caso de queda por avaria evidente, é mais fácil contestar se houver fotografia/vídeo antes da viagem.',
          'A conta não pode ser emprestada a um amigo: coimas, danos e bloqueio serão imputados ao titular da conta.'
        ] },
        { kind: 'paragraph', text: 'As tarifas mudam, mas o modelo típico é unlock fee + preço por minuto. Na época turística, as aplicações podem ativar preços dinâmicos ou day pass. Consulte sempre o preço final antes de arrancar, sobretudo se a viagem for para o aeroporto, estação ferroviária ou zona de praia.' }
      ]
    },
    {
      id: 'insurance-fines',
      title: '5. Seguro, coimas e o que fazer se a polícia o mandar parar',
      content: [
        { kind: 'paragraph', text: 'Para uma trotineta elétrica standard até 25 km/h e até 25 kg, não é exigido seguro obrigatório separado de responsabilidade civil. Mas desde 20 de junho de 2025 (Decreto-Lei n.º 26/2025) o seguro passou a ser obrigatório para trotinetas com mais de 25 km/h ou mais de 25 kg (acima de 14 km/h). E, em qualquer caso, os danos não são gratuitos: se atropelar um peão, danificar um automóvel ou uma montra, o condutor pode ter de pagar pessoalmente.' },
        { kind: 'checklist', items: [
          'Para uma trotineta potente (>25 km/h, ou >25 kg acima de 14 km/h), tem de subscrever seguro ao abrigo do Decreto-Lei n.º 26/2025: circular sem ele dá coima de 250–1250 € e apreensão.',
          'Para uma trotineta própria até 25 km/h, é sensato ter seguro de responsabilidade civil familiar/vida privada, ainda que não seja obrigatório.',
          'Verifique se o seu multirriscos habitação ou seguro familiar cobre danos causados por trotinetas elétricas.',
          'O aluguer costuma ter cobertura básica, mas com franquia, exclusões e recusa em caso de álcool, circulação a dois ou violação de zonas.',
          'Se a polícia o mandar parar, mostre calmamente ID/autorização de residência ou passaporte, a aplicação de aluguer e explique o trajeto.',
          'Não discuta no local a qualificação da infração: peça o auto de contraordenação e os dados para defesa.',
          'Guarde a captura de ecrã da viagem, o percurso GPS, o recibo da aplicação e a fotografia do estacionamento.',
          'Se recebeu uma coima de 60–300 €, os prazos de pagamento/contestação estão indicados na notificação; não se podem ignorar cartas enviadas para a morada portuguesa.',
          'Em caso de acidente com feridos, chame sempre 112 e PSP/GNR; um acordo verbal "sem polícia" muitas vezes acaba por falhar depois.'
        ] },
        { kind: 'warning', text: 'Álcool na trotineta é uma má ideia jurídica e fisicamente. Nas zonas noturnas do Bairro Alto, Cais do Sodré, Ribeira, Albufeira e Lagos, a polícia fiscaliza regularmente condutores de mobilidade ligeira depois dos bares.' }
      ]
    }
  ],
  costs: [
    { label: 'Coima por circular no passeio ou infringir regras de circulação', amountEURMin: 60, amountEURMax: 300, note: 'Coima típica ao abrigo do Código da Estrada para infrações ao regime dos velocípedes/circulação no passeio.' },
    { label: 'Aluguer Bolt/Lime/TIER', amountEURMin: 0.15, amountEURMax: 0.35, note: 'Referência por minuto; unlock fee e passes dependem da cidade, época e aplicação.' },
    { label: 'Coima por circular sem seguro obrigatório (trotineta potente)', amountEURMin: 250, amountEURMax: 1250, note: 'Ao abrigo do Decreto-Lei n.º 26/2025, para trotinetas >25 km/h ou >25 kg (acima de 14 km/h); apreensão possível.' },
    { label: 'Capacete próprio', amountEURMin: 25, amountEURMax: 80, note: 'Capacete urbano normal da Decathlon/loja de desporto; mais barato do que uma coima e uma lesão.' },
    { label: 'Seguro responsabilidade civil familiar', amountEURMin: 25, amountEURMax: 80, note: 'Referência anual; verifique se as trotinetas elétricas estão incluídas.' }
  ],
  sources: [
    { title: 'IMT: veículos de mobilidade individual e regras para trotinetas', url: 'https://www.imt-ip.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código da Estrada — legislação consolidada, regras para velocípedes/trotinetas e coimas', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/1994-34457775', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 102-B/2020 — alterações ao Código da Estrada sobre mobilidade suave', url: 'https://dre.pt/dre/detalhe/decreto-lei/102-b-2020-150077473', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ASF: novos veículos sujeitos a seguro automóvel obrigatório (Decreto-Lei n.º 26/2025, em vigor desde 20.06.2025)', url: 'https://www.asf.com.pt/pt/w/ni_seg_auto', kind: 'official', language: 'pt', lastRetrieved: '2026-05-31' },
    { title: 'Bolt Portugal: regras de segurança e condições de utilização de trotinetas', url: 'https://bolt.eu/pt-pt/scooters/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
