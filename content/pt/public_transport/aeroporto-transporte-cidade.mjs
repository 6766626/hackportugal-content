export default {
  editorialVoice: 'hackportugal',
  id: 'aeroporto-transporte-cidade',
  categoryId: 'public_transport',
  title: 'Transporte do aeroporto para a cidade — Lisbon, Porto, Faro',
  tldr: 'Em 2026, o transfer mais previsível: LIS → Lisboa de metro na linha Vermelha por 1,85 € + cartão 0,50 €, OPO → Porto no Metro do Porto linha E com bilhete Z4 por cerca de 2,25 € + Andante 0,60 €. A partir do Faro Airport, primeiro o autocarro Próximo 16 até Faro e depois Vamus pelo Algarve; as ligações regionais directas dependem da época. O táxi a partir do aeroporto costuma ser mais caro do que Bolt/Uber: Lisboa 12–25 €, Porto 25–35 €, Faro 10–15 €, sendo mais caro à noite e com bagagem.',
  tags: ['aeroporto', 'metro', 'uber', 'vamus'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'lisbon',
      title: 'Lisbon Airport (LIS) → Lisboa',
      content: [
        { kind: 'paragraph', text: 'O principal truque no Lisbon Airport: o metro fica mesmo junto ao Terminal 1. A linha Vermelha vai até Alameda / Saldanha; depois pode mudar para as linhas verde, amarela ou azul. Até Saldanha demora normalmente cerca de 20 minutos, sem trânsito.' },
        { kind: 'checklist', items: [
          'Metro: 1,85 € por viagem Carris/Metro + 0,50 € pelo cartão Navegante occasional / Viva Viagem, caso ainda não o tenha',
          'Horário do metro: aproximadamente 06:30–01:00; à noite use táxi, Bolt, Uber ou autocarro',
          'Para Baixa/Chiado: linha Vermelha até Alameda, depois linha Verde até Baixa-Chiado',
          'Para Cais do Sodré: linha Vermelha até Alameda, linha Verde até Cais do Sodré',
          'Para Oriente: linha Vermelha, 3 estações; conveniente para comboios CP e autocarros Rede Expressos / FlixBus',
          'Há autocarros urbanos Carris a partir do aeroporto, mas são menos práticos com malas e dependem do trânsito',
          'O antigo formato Aerobus Lisboa não deve ser considerado uma opção garantida em 2026: confirme a disponibilidade no dia da chegada; a rota oficial de base é metro/autocarro/táxi'
        ] },
        { kind: 'warning', text: 'Se chegar ao Terminal 2, primeiro precisa do shuttle gratuito até ao Terminal 1. O metro e a maior parte do transporte urbano ficam junto ao Terminal 1; conte com 10–20 minutos.' }
      ]
    },
    {
      id: 'porto',
      title: 'Porto Airport (OPO) → Porto',
      content: [
        { kind: 'paragraph', text: 'No Porto, a opção mais simples é o Metro do Porto linha E / Violeta desde Aeroporto até Trindade. Trindade é o principal nó de ligação; a partir daí é fácil chegar a Aliados, Bolhão, São Bento, Casa da Música e Vila Nova de Gaia.' },
        { kind: 'checklist', items: [
          'É necessário um bilhete Andante Z4: em 2026, a referência é cerca de 2,25 € por viagem + 0,60 € pelo cartão Andante Azul',
          'Até Trindade demora normalmente 25–30 minutos',
          'Para São Bento: Aeroporto → Trindade, depois mudança para a linha D / Amarela até São Bento',
          'Para Campanhã: Aeroporto → Trindade, depois mudança para as linhas A/B/C/F ou comboio CP, se for mais conveniente',
          'O cartão Andante deve ser validado antes do embarque e em cada transbordo',
          'O metro no Porto não funciona 24 horas por dia; ao fim da noite, confirme a última viagem na aplicação Anda ou no site do Metro do Porto',
          'Com muita bagagem, o metro costuma ser mais cómodo do que o autocarro: não há suplemento por mala, mas não bloqueie as portas nem a passagem'
        ] },
        { kind: 'paragraph', text: 'Um táxi de OPO até ao centro do Porto costuma ficar em 25–35 € durante o dia, sendo mais caro à noite, em feriados e para zonas mais afastadas. Bolt/Uber mostram frequentemente 15–25 €, mas com surge pricing podem ficar mais caros do que um táxi.' }
      ]
    },
    {
      id: 'faro',
      title: 'Faro Airport (FAO) → Faro e Algarve',
      content: [
        { kind: 'paragraph', text: 'O Faro Airport não tem metro nem estação ferroviária directamente no aeroporto. O esquema de base: autocarro Próximo até ao Faro Terminal Rodoviário / cidade, depois autocarros regionais Vamus Algarve ou comboio CP a partir da estação de Faro.' },
        { kind: 'checklist', items: [
          'Faro Airport → centro de Faro: autocarro urbano Próximo, mais frequentemente a linha 16; bilhete comprado ao motorista normalmente cerca de 2,60 €',
          'Até à estação rodoviária de Faro: cerca de 15–25 minutos, dependendo do trânsito e do horário',
          'Faro → Albufeira / Portimão / Lagos / Tavira: confirme a Vamus Algarve; os horários mudam bastante consoante a época',
          'Para os comboios CP, é preciso ir do aeroporto até à estação de Faro; ir a pé a partir do aeroporto não deve ser considerado uma opção prática',
          'Aerobus/shuttles directos pelo Algarve podem funcionar sazonalmente; em Abril–Outubro há geralmente mais ligações, no Inverno menos',
          'Se a chegada for tarde, confirme com antecedência o último autocarro Vamus: depois das 21:00–22:00 a oferta cai drasticamente',
          'Para uma família de 3–4 pessoas até às estâncias do Algarve, táxi/transfer por vezes é mais racional do que autocarro, sobretudo à noite'
        ] },
        { kind: 'warning', text: 'Não planeie uma ligação “avião → último Vamus” sem margem. Em Faro, um atraso de 20–40 minutos na bagagem pode facilmente estragar o percurso nocturno pelo Algarve.' }
      ]
    },
    {
      id: 'taxi-apps',
      title: 'Táxi, Bolt e Uber: referências reais',
      content: [
        { kind: 'paragraph', text: 'Nos aeroportos de Portugal, a praça oficial de táxis fica normalmente junto à saída das arrivals. Bolt/Uber recolhem passageiros em zonas de pick-up assinaladas; a aplicação mostra o ponto exacto. O preço na aplicação é fixado antes da viagem; no táxi, é pelo taxímetro.' },
        { kind: 'checklist', items: [
          'LIS → Baixa/Chiado: Bolt/Uber frequentemente 10–18 €, táxi normalmente 12–25 €',
          'LIS → Cascais / Oeiras: a aplicação frequentemente 25–45 €, táxi pode ser 35–60 €',
          'OPO → Trindade/Aliados: Bolt/Uber frequentemente 15–25 €, táxi normalmente 25–35 €',
          'OPO → Vila Nova de Gaia: conte com 20–35 € pela aplicação, mais à noite',
          'FAO → centro de Faro: Bolt/Uber frequentemente 6–10 €, táxi normalmente 10–15 €',
          'FAO → Albufeira: frequentemente 35–55 € por aplicação/transfer, táxi pode ser mais caro',
          'FAO → Lagos: frequentemente 80–120 €; o autocarro é mais barato, mas demora mais e depende do horário',
          'À noite, com chuva, durante greves e após várias chegadas, o preço de Bolt/Uber pode saltar 1,5–3 vezes'
        ] },
        { kind: 'warning', text: 'Nos táxis podem existir suplementos por bagagem, tarifa nocturna, fins-de-semana/feriados e viagem para fora do município. Antes de entrar, confirme que o taxímetro está ligado, e não um preço “combinado” em dinheiro.' }
      ]
    },
    {
      id: 'luggage-rules',
      title: 'Bagagem e bilhetes: o que importa com malas',
      content: [
        { kind: 'paragraph', text: 'No metro de Lisboa e do Porto não há pagamento separado por uma mala normal. A limitação é prática: a bagagem não deve obstruir a passagem, as portas, a evacuação nem incomodar outros passageiros. Nos autocarros, as regras são mais rígidas: o motorista pode recusar se a mala for demasiado grande ou se o veículo estiver cheio.' },
        { kind: 'checklist', items: [
          'Compre e valide o bilhete antes de entrar no metro; os revisores em Lisboa e no Porto actuam regularmente',
          'Não deite fora o cartão Navegante occasional / Viva Viagem ou Andante: pode ser recarregado',
          'Em Lisboa, um cartão normalmente guarda um tipo de produto; se mudar de tarifa, a máquina pode pedir para “limpar” o cartão',
          'No Porto, a zona do bilhete é importante: do aeroporto para o centro é necessário Z4, não Z2',
          'Nos autocarros, mantenha a mala junto de si, não a coloque na passagem nem junto às portas',
          'Com carrinho de bebé, o metro costuma ser mais cómodo: há elevadores, mas algumas estações são antigas — conte com tempo',
          'Se tiver bicicleta, prancha de surf ou 3+ malas grandes, escolha van/táxi XL ou um transfer reservado com antecedência'
        ] },
        { kind: 'paragraph', text: 'Regra prática: uma pessoa + uma mala grande — o metro funciona bem. Dois adultos + criança + 3 malas depois de um voo nocturno — muitas vezes é mais barato para os nervos escolher Bolt/Uber XL ou táxi.' }
      ]
    }
  ],
  costs: [
    { label: 'Lisboa: metro LIS → cidade', amountEUR: 1.85, note: 'Viagem simples Carris/Metro; o cartão Navegante occasional / Viva Viagem é pago à parte' },
    { label: 'Lisboa: cartão Navegante occasional / Viva Viagem', amountEUR: 0.50, note: 'Cartão de papel recarregável para occasional tickets' },
    { label: 'Porto: Metro do Porto Aeroporto → centro', amountEUR: 2.25, note: 'Referência para o bilhete Andante Z4 em 2026; confirme na máquina antes de comprar' },
    { label: 'Porto: cartão Andante Azul', amountEUR: 0.60, note: 'Necessário para viagens ocasionais Metro do Porto / STCP' },
    { label: 'Faro: autocarro aeroporto → cidade', amountEUR: 2.60, note: 'Referência para o bilhete comprado ao motorista no autocarro urbano Próximo' },
    { label: 'Táxi/Bolt/Uber do aeroporto para o centro', amountEURMin: 6, amountEURMax: 35, note: 'Faro é mais barato, Porto costuma ser mais caro; surge pricing e tarifas nocturnas alteram o preço' }
  ],
  sources: [
    { title: 'ANA Aeroportos — Lisbon Airport: transporte a partir do aeroporto', url: 'https://www.aeroportolisboa.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ANA Aeroportos — Porto Airport: transporte a partir do aeroporto', url: 'https://www.aeroportoporto.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Metro do Porto — tarifas Andante e linha Aeroporto', url: 'https://www.metrodoporto.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Vamus Algarve — autocarros regionais do Algarve', url: 'https://vamusalgarve.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
