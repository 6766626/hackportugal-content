export default {
  editorialVoice: 'hackportugal',
  id: 'p-r-parking-lisboa-porto',
  categoryId: 'auto_trips',
  title: 'Park & Ride (P+R): parques junto ao metro e comboios em Lisboa e no Porto',
  tldr: 'O P+R em Portugal não é um programa estatal único, mas sim um conjunto de parques gratuitos, baratos e parques pagos normais junto ao Metro, CP, Fertagus e grandes terminais.\n\nEm 2026, a poupança real faz-se assim: deixar o carro na periferia ou junto a um ponto de transbordo e seguir depois com Navegante/Andante. Em Lisboa, Sete Rios e Cais do Sodré são convenientes, mas normalmente pagos e centrais; Senhor Roubado, Pragal, Estádio Nacional são opções típicas de “deixar o carro e seguir”. No Porto, veja Rio Tinto, Senhora da Hora, Estádio do Dragão, Campanhã; Trindade é centro, não um P+R barato.',
  tags: ['estacionamento', 'lisboa', 'porto', 'metro'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'concept',
      title: 'Como funciona o P+R em Portugal',
      content: [
        { kind: 'paragraph', text: 'Aqui, Park & Ride é mais frequentemente chamado parques dissuasores ou simplesmente parques junto à estação. A ideia é simples: não entrar no centro, deixar o carro junto ao metro, CP, Fertagus ou terminal de autocarros e seguir depois em transporte público.' },
        { kind: 'paragraph', text: 'A principal armadilha: “P+R” não significa automaticamente gratuito. Um local pode ser um parque municipal gratuito, outro um parque subterrâneo privado, e outro um parque da EMEL com tarifa horária. As tarifas e regras mudam mais frequentemente do que os mapas do metro, por isso, antes da viagem, verifique o site do operador ou o painel à entrada.' },
        { kind: 'checklist', items: [
          'Procure as palavras: parque dissuasor, estacionamento, parque junto à estação, interface',
          'Verifique a tarifa diária máxima: por vezes 24 horas ficam mais baratas do que 6 horas no centro',
          'Consulte o horário do último Metro/CP/Fertagus de regresso',
          'Não deixe objetos nos bancos: os P+R ficam muitas vezes junto a grandes nós rodoviários',
          'Guarde o bilhete do parque até à saída; o pagamento é normalmente feito na máquina antes de entrar no carro',
          'Para deslocações diárias, os passes mensais Navegante ou Andante compensam mais do que bilhetes ocasionais'
        ] }
      ]
    },
    {
      id: 'lisboa',
      title: 'Lisboa: onde deixar o carro 🚗 + Metro/CP',
      content: [
        { kind: 'paragraph', text: 'Na Grande Lisboa não existe um único mapa de todos os P+R gratuitos. A abordagem prática é escolher o parque conforme a direção de entrada: norte por Odivelas/Loures, oeste por Oeiras/Cascais, sul por Almada/Pragal, leste por Oriente/Moscavide.' },
        { kind: 'checklist', items: [
          'Parques Navegante (EMEL) — vários parques (Colégio Militar, Ameixoeira, Avenida de Pádua e outros) são gratuitos para portadores de um passe Navegante válido, sensivelmente entre as 07:30 e as 21:00; é preciso registar o cartão uma vez no balcão do parque e renovar mensalmente',
          'Senhor Roubado / Odivelas — convenientes para entrar pelo norte e mudar para a Linha Amarela do Metro; confirme no local o estado efetivo do estacionamento',
          'Sete Rios — grande nó de transportes: Metro, CP, autocarros Rede Expressos; normalmente não é uma “periferia gratuita”, mas sim uma opção urbana paga',
          'Cais do Sodré — conveniente para a Linha Verde, CP Cascais e ferries, mas é centro; use apenas se precisar especificamente deste nó, e não de poupar',
          'Pragal — boa opção vindo do sul: Fertagus até Entrecampos/Sete Rios/Roma-Areeiro, com acessos próximos a partir de Almada e da A2; os parques são muitas vezes pagos, mas mais baratos do que no centro',
          'Estádio Nacional / Cruz Quebrada / Algés — adequado para o corredor oeste Oeiras–Lisboa e transbordo para a CP Cascais, mas em dias de eventos os parques podem fechar',
          'Oriente / Moscavide / Encarnação — entrada leste, aeroporto, Parque das Nações; muitos parques pagos, e os lugares gratuitos desaparecem rapidamente de manhã'
        ] },
        { kind: 'warning', text: 'Não deixe o carro “como toda a gente” na berma junto às estações. Em Lisboa e nos subúrbios, a Polícia Municipal, a EMEL e os reboques municipais atuam regularmente. Multa + reboque transformam facilmente um estacionamento gratuito na viagem mais cara da semana.' }
      ]
    },
    {
      id: 'porto',
      title: 'Porto: Metro do Porto e parques suburbanos',
      content: [
        { kind: 'paragraph', text: 'No Porto, a lógica do P+R costuma funcionar melhor: o Metro do Porto liga diretamente os subúrbios, o aeroporto, Matosinhos, Maia, Gondomar e o centro. O cenário mais conveniente é deixar o carro não na Baixa, mas junto a uma estação fora do centro histórico e seguir com Andante.' },
        { kind: 'checklist', items: [
          'Rio Tinto — opção prática a leste para entrada pelo lado de Gondomar/Valongo e transbordo para Metro/comboio',
          'Senhora da Hora — grande nó do Metro para Matosinhos, Póvoa, aeroporto e centro; os parques em redor da estação podem encher rapidamente',
          'Estádio do Dragão — conveniente junto à VCI e ao Metro, mas em dias de jogos do FC Porto e eventos o regime dos parques muda',
          'Campanhã — grande nó da CP, Metro e autocarros; conveniente para comboios, mas os parques são mais frequentemente pagos e movimentados',
          'Trindade — principal nó de transbordo do Metro no centro; não é um P+R barato, mas sim um local para uma paragem urbana curta, se houver lugares livres',
          'Aeroporto / Verdes / Botica — opções para quem vem da Maia/Vila do Conde/Póvoa e quer seguir para o centro de Metro'
        ] },
        { kind: 'paragraph', text: 'No site do Metro do Porto, verifique a estação, a linha, a disponibilidade de estacionamento e as paragens mais próximas. Em 2026, as regras de pagamento e a disponibilidade de lugares dependem do operador específico do parque, e não apenas do Metro.' }
      ]
    },
    {
      id: 'money',
      title: 'Quanto custa em 2026',
      content: [
        { kind: 'paragraph', text: 'Existem lugares gratuitos, mas são menos do que parece em fóruns antigos. Nos nós populares, a zona gratuita está muitas vezes cheia às 08:00–09:00, e ao lado funcionam parques pagos com tarifa horária ou diária.' },
        { kind: 'checklist', items: [
          'Gratuito: parques municipais ao ar livre junto a algumas estações e estádios, se não houver evento ou restrição',
          'Barato: parques periféricos com tarifa diária de cerca de 1–4 €',
          'Médio: estações de transbordo e zonas comerciais — muitas vezes 4–10 € por dia',
          'Caro: Cais do Sodré, Baixa, Trindade, Parque das Nações, aeroporto — conte como estacionamento urbano normal',
          'Mais transporte: bilhete ocasional Metro/CP ou passe mensal Navegante/Andante',
          'Para deslocações diárias, conte não só o estacionamento, mas também combustível, portagens, IUC e tempo para entrar no centro'
        ] },
        { kind: 'warning', text: 'Não use o Google Maps como fonte de preços. Muitas vezes mostra “free parking” com base em avaliações de utilizadores, mas não sabe de novos parquímetros, restrições noturnas, obras da Câmara Municipal ou jogos.' }
      ]
    },
    {
      id: 'routine',
      title: 'Algoritmo prático para o dia a dia',
      content: [
        { kind: 'substeps', items: [
          { id: 'route', title: '1. Escolha a linha de transporte, não o parque', content: [
            { kind: 'paragraph', text: 'Primeiro decida para onde precisa de ir no centro: Saldanha, Baixa-Chiado, Entrecampos, São Bento, Trindade, Aliados. Depois escolha uma estação na mesma linha, para evitar transbordos desnecessários.' }
          ] },
          { id: 'backup', title: '2. Tenha uma alternativa', content: [
            { kind: 'paragraph', text: 'Para cada viagem, tenha um “plano B” 1–2 estações mais adiante. Se Senhor Roubado, Senhora da Hora ou Pragal estiverem cheios, não perca 20 minutos às voltas — siga para a estação seguinte.' }
          ] },
          { id: 'payment', title: '3. Verifique o pagamento antes de sair', content: [
            { kind: 'paragraph', text: 'Veja como pagar: Multibanco, cartão, MB WAY, máquina, aplicação do operador. Alguns parques exigem pagamento antes da saída, e não na cancela.' }
          ] },
          { id: 'security', title: '4. Deixe o carro “vazio”', content: [
            { kind: 'paragraph', text: 'Guarde malas, navegador, cabos, documentos, óculos e objetos de criança na bagageira antes de entrar no parque. Não o faça de forma ostensiva já no local.' }
          ] }
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Parque municipal ao ar livre junto à estação', amountEUR: 0, note: 'Se não houver restrições temporárias, eventos ou novos parquímetros' },
    { label: 'P+R periférico / parque dissuasor', amountEURMin: 1, amountEURMax: 4, note: 'Ordem de grandeza típica do custo diário; verifique o parque específico' },
    { label: 'Parque urbano junto a um grande nó', amountEURMin: 4, amountEURMax: 10, note: 'Sete Rios, Campanhã, Oriente e nós semelhantes entram muitas vezes aqui' },
    { label: 'Estacionamento central', amountEURMin: 10, amountEURMax: 25, note: 'Cais do Sodré, Baixa, Trindade, aeroporto e zonas turísticas' }
  ],
  sources: [
    { title: 'EMEL: mapa oficial e lista de parques em Lisboa', url: 'https://www.emel.pt/pt/onde-estacionar/parques', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Metro do Porto: estações, linhas e informação para passageiros', url: 'https://www.metroporto.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Metro Lisboa: rede, estações e planeamento de viagem', url: 'https://www.metrolisboa.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'CP Comboios de Portugal: comboios urbanos e suburbanos', url: 'https://www.cp.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
