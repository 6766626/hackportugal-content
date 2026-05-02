export default {
  editorialVoice: 'hackportugal',
  id: 'p-r-parking-lisboa-porto',
  categoryId: 'auto_trips',
  title: 'Park & Ride (P+R): estacionamentos junto ao metro e comboios em Lisboa e no Porto',
  tldr: 'O P+R em Portugal não é um programa estatal único, mas sim um conjunto de estacionamentos gratuitos, baratos e pagos comuns junto ao Metro, CP, Fertagus e grandes terminais. Em 2026, a forma realista de poupar é esta: deixar o carro na periferia ou junto a uma ligação e seguir depois com Navegante/Andante. Em Lisboa, Sete Rios e Cais do Sodré são convenientes, mas normalmente pagos e centrais; Senhor Roubado, Pragal, Estádio Nacional são opções típicas de “deixei o carro e segui viagem”. No Porto, veja Rio Tinto, Senhora da Hora, Estádio do Dragão, Campanhã; Trindade é centro, não um P+R barato.',
  tags: ['estacionamento', 'lisboa', 'porto', 'metro'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'concept',
      title: 'Como funciona o P+R em Portugal',
      content: [
        { kind: 'paragraph', text: 'Park & Ride aqui é mais frequentemente chamado parques dissuasores ou simplesmente parques junto à estação. A ideia é simples: não entrar no centro, deixar o carro junto ao metro, CP, Fertagus ou terminal rodoviário e continuar de transportes públicos.' },
        { kind: 'paragraph', text: 'A principal armadilha: “P+R” não significa automaticamente gratuito. Um local pode ser um parque municipal gratuito, outro um estacionamento subterrâneo privado, outro um parque da EMEL com tarifa horária. As tarifas e regras mudam mais frequentemente do que os mapas do metro, por isso antes da viagem verifique o site do operador ou o painel à entrada.' },
        { kind: 'checklist', items: [
          'Procure as palavras: parque dissuasor, estacionamento, parque junto à estação, interface',
          'Verifique a tarifa diária máxima: por vezes 24 horas ficam mais baratas do que 6 horas no centro',
          'Consulte o horário do último Metro/CP/Fertagus de regresso',
          'Não deixe objectos nos bancos: os P+R ficam muitas vezes junto a grandes nós rodoviários',
          'Guarde o talão do estacionamento até sair; o pagamento é normalmente feito na máquina antes de entrar no carro',
          'Para deslocações diárias, os passes mensais Navegante ou Andante compensam mais do que bilhetes avulso'
        ] }
      ]
    },
    {
      id: 'lisboa',
      title: 'Lisboa: onde deixar o carro 🚗 + Metro/CP',
      content: [
        { kind: 'paragraph', text: 'Na Grande Lisboa não existe um único mapa de todos os P+R gratuitos. A abordagem prática é escolher o estacionamento consoante a direcção de entrada: norte por Odivelas/Loures, oeste por Oeiras/Cascais, sul por Almada/Pragal, leste por Oriente/Moscavide.' },
        { kind: 'checklist', items: [
          'Senhor Roubado / Odivelas — convenientes para entrar a partir do norte e fazer ligação à Linha Amarela do Metro; verifique no local o estado efectivo do estacionamento',
          'Sete Rios — um nó de transportes forte: Metro, CP, autocarros Rede Expressos; normalmente não é uma “periferia gratuita”, mas uma opção urbana paga',
          'Cais do Sodré — conveniente para a Linha Verde, CP Cascais e ferries, mas é centro; use apenas se precisar mesmo deste nó, não para poupar',
          'Pragal — boa opção a partir do sul: Fertagus para Entrecampos/Sete Rios/Roma-Areeiro, com acessos próximos de Almada e da A2; os estacionamentos são muitas vezes pagos, mas mais baratos do que no centro',
          'Estádio Nacional / Cruz Quebrada / Algés — adequado para o corredor oeste Oeiras–Lisboa e ligação à CP Cascais, mas em dias de eventos os parques podem ser encerrados',
          'Oriente / Moscavide / Encarnação — entrada leste, aeroporto, Parque das Nações; muitos estacionamentos pagos, os lugares gratuitos desaparecem depressa de manhã'
        ] },
        { kind: 'warning', text: 'Não deixe o carro “como toda a gente” na berma junto às estações. Em Lisboa e nos subúrbios actuam regularmente a Polícia Municipal, a EMEL e os reboques municipais. Multa + reboque transformam facilmente um estacionamento gratuito na viagem mais cara da semana.' }
      ]
    },
    {
      id: 'porto',
      title: 'Porto: Metro do Porto e estacionamentos suburbanos',
      content: [
        { kind: 'paragraph', text: 'No Porto, a lógica do P+R costuma funcionar melhor: o Metro do Porto liga directamente os subúrbios, o aeroporto, Matosinhos, Maia, Gondomar e o centro. O cenário mais conveniente é deixar o carro não na Baixa, mas numa estação fora do centro histórico e seguir com Andante.' },
        { kind: 'checklist', items: [
          'Rio Tinto — opção prática a leste para entrar a partir de Gondomar/Valongo e fazer ligação ao Metro/comboio',
          'Senhora da Hora — grande nó do Metro para Matosinhos, Póvoa, aeroporto e centro; os estacionamentos à volta da estação podem encher rapidamente',
          'Estádio do Dragão — conveniente junto à VCI e ao Metro, mas em dias de jogos do FC Porto e de eventos o regime dos parques muda',
          'Campanhã — grande nó de CP, Metro e autocarros; conveniente para comboios, mas os estacionamentos são mais frequentemente pagos e concorridos',
          'Trindade — principal nó de correspondência do Metro no centro; não é um P+R barato, mas um local para uma paragem urbana curta, se houver lugares livres',
          'Aeroporto / Verdes / Botica — opções para quem vem de Maia/Vila do Conde/Póvoa e quer seguir para o centro de Metro'
        ] },
        { kind: 'paragraph', text: 'No site do Metro do Porto, verifique a estação, a linha, a disponibilidade de estacionamento e as paragens mais próximas. Em 2026, as regras de pagamento e a disponibilidade de lugares dependem do operador concreto do parque, não apenas do Metro.' }
      ]
    },
    {
      id: 'money',
      title: 'Quanto custa em 2026',
      content: [
        { kind: 'paragraph', text: 'Existem lugares gratuitos, mas são menos do que parece pelos fóruns antigos. Nos nós populares, a zona gratuita está frequentemente cheia às 08:00–09:00, e ao lado há parques pagos com tarifa horária ou diária.' },
        { kind: 'checklist', items: [
          'Gratuito: estacionamentos municipais ao ar livre junto a algumas estações e estádios, se não houver evento ou restrição',
          'Barato: parques periféricos com tarifa diária de cerca de 1–4 €',
          'Intermédio: estações de correspondência e zonas comerciais — frequentemente 4–10 € por dia',
          'Caro: Cais do Sodré, Baixa, Trindade, Parque das Nações, aeroporto — conte como estacionamento urbano normal',
          'Mais transporte: bilhete avulso de Metro/CP ou passe mensal Navegante/Andante',
          'Para deslocações pendulares diárias, calcule não só o estacionamento, mas também combustível, portagens, IUC e o tempo para entrar no centro'
        ] },
        { kind: 'warning', text: 'Não use o Google Maps como fonte de preços. Muitas vezes mostra “free parking” com base em avaliações de utilizadores, mas não sabe de novos parquímetros, restrições nocturnas, obras da Câmara Municipal ou jogos.' }
      ]
    },
    {
      id: 'routine',
      title: 'Algoritmo prático para todos os dias',
      content: [
        { kind: 'substeps', items: [
          { id: 'route', title: '1. Escolha a linha de transporte, não o estacionamento', content: [
            { kind: 'paragraph', text: 'Primeiro decida para onde precisa de ir no centro: Saldanha, Baixa-Chiado, Entrecampos, São Bento, Trindade, Aliados. Depois escolha uma estação na mesma linha, para evitar correspondências desnecessárias.' }
          ] },
          { id: 'backup', title: '2. Tenha uma alternativa', content: [
            { kind: 'paragraph', text: 'Para cada viagem, tenha um “plano B” 1–2 estações mais à frente. Se Senhor Roubado, Senhora da Hora ou Pragal estiverem cheios, não perca 20 minutos às voltas — siga para a estação seguinte.' }
          ] },
          { id: 'payment', title: '3. Verifique o pagamento antes de sair', content: [
            { kind: 'paragraph', text: 'Veja como pagar: Multibanco, cartão, MB WAY, máquina, aplicação do operador. Alguns parques exigem pagamento antes da saída, não junto à cancela.' }
          ] },
          { id: 'security', title: '4. Deixe o carro “vazio”', content: [
            { kind: 'paragraph', text: 'Guarde malas, GPS, cabos, documentos, óculos e objectos de crianças na bagageira antes de entrar no estacionamento. Não o faça de forma ostensiva já no local.' }
          ] }
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Estacionamento municipal ao ar livre junto à estação', amountEUR: 0, note: 'Se não houver restrições temporárias, eventos ou novos parquímetros' },
    { label: 'P+R periférico / parque dissuasor', amountEURMin: 1, amountEURMax: 4, note: 'Ordem típica do custo diário; verifique o parque concreto' },
    { label: 'Estacionamento urbano junto a um grande nó', amountEURMin: 4, amountEURMax: 10, note: 'Sete Rios, Campanhã, Oriente e nós semelhantes entram frequentemente aqui' },
    { label: 'Estacionamento central', amountEURMin: 10, amountEURMax: 25, note: 'Cais do Sodré, Baixa, Trindade, aeroporto e zonas turísticas' }
  ],
  sources: [
    { title: 'EMEL: mapa oficial e lista de parques de estacionamento em Lisboa', url: 'https://www.emel.pt/pt/onde-estacionar/parques', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Metro do Porto: estações, linhas e informação para passageiros', url: 'https://www.metroporto.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Metro Lisboa: rede, estações e planeamento de viagem', url: 'https://www.metrolisboa.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'CP Comboios de Portugal: comboios urbanos e suburbanos', url: 'https://www.cp.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
