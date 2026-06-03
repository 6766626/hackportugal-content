export default {
  editorialVoice: 'hackportugal',
  id: 'elevadores-lisboa',
  categoryId: 'public_transport',
  title: 'Elevadores e funiculares de Lisboa: Bica, Glória, Lavra, Santa Justa',
  tldr: 'Importante (maio de 2026): após o acidente mortal do Ascensor da Glória em 3 de setembro de 2025, os funiculares foram encerrados para inspeções. Neste momento funciona o Elevador de Santa Justa; o Ascensor da Glória e o Ascensor do Lavra continuam encerrados, e o Ascensor da Bica deverá reabrir no início do verão — confirme o estado em carris.pt. São linhas da Carris, não atrações de museu. O Navegante é válido nelas: com o Navegante Municipal mensal de 30 € ou o Metropolitano de 40 €, a viagem está incluída sem pagamento adicional. Os bilhetes avulso comprados ao motorista são caros: os funiculares custam cerca de 4,20 € por 2 viagens, e Santa Justa cerca de 6,10 € para ida e volta; zapping/Navegante pré-carregado costuma compensar mais.',
  tags: ['carris', 'navegante', 'elevadores', 'lisboa'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-they-are',
      title: 'Que linhas são estas',
      content: [
        { kind: 'paragraph', text: 'Em Lisboa, a palavra elevador pode significar tanto um elevador vertical como um funicular sobre carris. As quatro linhas no centro são operadas pela Carris, por isso as regras de pagamento são as mesmas dos autocarros e eléctricos da Carris, com bilhetes de bordo separados e caros para os percursos turísticos.' },
        { kind: 'warning', text: 'Estado em maio de 2026. Após o acidente mortal do Ascensor da Glória em 3 de setembro de 2025 (16 mortos), a cidade encerrou os funiculares para inspeções. Neste momento funciona o Elevador de Santa Justa. O Ascensor da Glória e o Ascensor do Lavra continuam encerrados, e o Ascensor da Bica deverá reabrir no início do verão. Antes de viajar, confirme a secção de alterações de serviço em carris.pt — o estado pode mudar.' },
        { kind: 'checklist', items: ['Ascensor da Bica: Rua de São Paulo / Cais do Sodré ↔ Bairro Alto, uma das subidas mais fotogénicas (encerrado em maio de 2026, reabertura prevista para o início do verão)', 'Ascensor da Glória: Restauradores ↔ São Pedro de Alcântara / Bairro Alto, o mais prático para subir a partir da Baixa (encerrado em maio de 2026 após o acidente de 2025)', 'Ascensor do Lavra: Largo da Anunciada ↔ Rua Câmara Pestana, o mais antigo e geralmente menos turístico (encerrado em maio de 2026)', 'Elevador de Santa Justa: Baixa ↔ Largo do Carmo / Chiado, elevador vertical com vista e uma grande fila (em funcionamento)', 'São linhas curtas: a viagem demora cerca de 2–5 minutos, mas a espera em Santa Justa no verão pode ser de 30–60 minutos'] }
      ]
    },
    {
      id: 'how-to-pay',
      title: 'Como pagar com Navegante 💳',
      content: [
        { kind: 'paragraph', text: 'Se tiver um Navegante com passe mensal ativo, basta encostar o cartão ao validador ao entrar. Não precisa de pagar extra pela Bica, Glória, Lavra ou Santa Justa: fazem parte da rede Carris.' },
        { kind: 'checklist', items: ['O Navegante Municipal Lisboa por 30 € / mês cobre a Carris dentro do município de Lisboa', 'O Navegante Metropolitano por 40 € / mês cobre a Carris e a maioria dos transportes da AML, incluindo viagens para fora de Lisboa', 'O zapping no Navegante também funciona: é descontada a tarifa Carris pré-carregada normal, e não o bilhete turístico de bordo', 'Um Viva Viagem / Navegante Occasional descartável com bilhete Carris/Metro válido também serve, se o bilhete tiver sido carregado antecipadamente', 'Valide o cartão todas as vezes: os revisores da Carris fazem controlo mesmo nas linhas curtas', 'O cartão bancário contactless nem sempre substitui o Navegante nas linhas históricas da Carris — para um turista, é mais seguro ter um Navegante Occasional ou comprar bilhete a um funcionário'] },
        { kind: 'warning', text: 'O Navegante mensal dá direito à viagem em si. O acesso ao miradouro superior de Santa Justa pode ser cobrado à parte: se só precisa de subir até ao Chiado/Carmo, passe como passageiro normal da Carris.' }
      ]
    },
    {
      id: 'single-tickets',
      title: 'Bilhetes avulso: onde se paga a mais',
      content: [
        { kind: 'paragraph', text: 'O principal erro de quem chega é pagar ao motorista/operador como turista. Nestas linhas, o bilhete de bordo é bastante mais caro do que uma viagem normal Carris com Navegante/zapping.' },
        { kind: 'checklist', items: ['Funiculares Bica, Glória, Lavra: bilhete de bordo Carris — cerca de 4,20 €, normalmente inclui 2 viagens', 'Elevador de Santa Justa: bilhete de bordo — cerca de 6,10 €, normalmente ida e volta e acesso turístico segundo as regras da Carris', 'A viagem normal através de zapping/Navegante pré-carregado é mais barata; o valor concreto depende da tarifa Carris na data da viagem', 'O bilhete diário Carris/Metro no Navegante Occasional pode compensar se no mesmo dia usar metro, eléctricos, autocarros e funiculares', 'Crianças, estudantes, +65 e perfis com desconto seguem as mesmas regras do Navegante, se o desconto estiver associado ao cartão', 'O bilhete ao motorista compra-se dentro do veículo/ao operador; pode ser necessário dinheiro, por isso não conte apenas com cartão'] },
        { kind: 'warning', text: 'As tarifas da Carris são revistas. Antes de viajar com pagamento avulso, consulte a página “Tarifários” em carris.pt: é aí que são publicados os preços em vigor para onboard tickets, zapping e passes.' }
      ]
    },
    {
      id: 'walking-vs-elevator',
      title: 'Quando é melhor ir a pé',
      content: [
        { kind: 'paragraph', text: 'Os funiculares são úteis se estiver com uma mala, um carrinho de bebé, depois de uma longa caminhada ou se viver numa colina. Mas, para um adulto saudável, muitas vezes é mais rápido ir a pé, sobretudo quando há fila de turistas junto à carruagem.' },
        { kind: 'checklist', items: ['Santa Justa: para subir até ao Largo do Carmo, muitas vezes é mais rápido ir a pé pelo lado do Chiado ou pela Rua do Carmo / Calçada do Sacramento', 'Glória (quando reabrir): boa opção para subir até ao Miradouro de São Pedro de Alcântara; a descer, a pé costuma ser mais rápido', 'Bica (quando reabrir): vale a pena pela experiência e pelas fotografias, mas nas horas de maior afluência turística pode ser mais rápido ir a pé pelas ruas vizinhas', 'Lavra (quando reabrir): o mais prático se precisa de subir até ao Campo Mártires da Pátria e não quer enfrentar uma inclinação acentuada', 'Com carrinho de bebé ou cadeira de rodas, Santa Justa parece cómodo, mas as filas e os acessos estreitos podem estragar o percurso', 'Depois da chuva, a calçada lisboeta escorrega: o funicular é mais seguro do que descer por calçada polida'] }
      ]
    },
    {
      id: 'practical-timing',
      title: 'Horários, filas e segurança',
      content: [
        { kind: 'paragraph', text: 'Estas são linhas turísticas centrais, por isso a multidão importa mais do que o horário. A Carris publica horários e service alerts atualizados no site e nas aplicações; antes de sair, verifique se a linha não está parada para manutenção.' },
        { kind: 'checklist', items: ['A melhor altura para Santa Justa é de manhã cedo ou ao fim da noite, não a meio do dia', 'Nos funiculares como a Glória e a Bica (quando estiverem em funcionamento), proteja o telemóvel: fotografias à janela aberta e multidão à entrada são situações típicas para carteiristas', 'Não fique nos carris para tirar fotografias: as carruagens circulam devagar, mas as ruas são estreitas e a visibilidade do motorista é limitada', 'Se a linha estiver fechada, procure um autocarro Carris, metro ou percurso a pé — as alternativas podem não estar assinaladas de forma evidente no local', 'Para a vida diária em Lisboa, o Navegante mensal é quase sempre mais vantajoso do que bilhetes turísticos separados', 'Se estiver a mostrar a cidade a convidados, explique-lhes antecipadamente a diferença entre “viajar como passageiro da Carris” e “comprar um bilhete turístico no elevador”'] }
      ]
    }
  ],
  costs: [
    { label: 'Navegante Municipal Lisboa', amountEUR: 30, note: 'Passe mensal para o município de Lisboa; inclui a Carris, incluindo Bica, Glória, Lavra e Santa Justa.' },
    { label: 'Navegante Metropolitano', amountEUR: 40, note: 'Passe mensal para a Área Metropolitana de Lisboa; é conveniente se viajar para fora de Lisboa.' },
    { label: 'Bilhete de bordo para Bica / Glória / Lavra', amountEUR: 4.2, note: 'Referência da Carris para compra no local; normalmente 2 viagens. Confirme o Tarifário atual.' },
    { label: 'Bilhete de bordo Elevador de Santa Justa', amountEUR: 6.1, note: 'Referência da Carris para ida e volta / bilhete turístico. Com Navegante, a viagem é geralmente mais barata ou está incluída no pass.' }
  ],
  sources: [
    { title: 'Carris — tarifas, Navegante, onboard tickets e passes', url: 'https://www.carris.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Carris — horários e informação sobre Ascensores e Elevador de Santa Justa', url: 'https://www.carris.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Câmara Municipal de Lisboa — informação sobre elevadores urbanos, funiculares e mobilidade', url: 'https://www.cm-lisboa.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
