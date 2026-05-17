export default {
  editorialVoice: 'hackportugal',
  id: 'brisa-tunel-marao-tolls',
  categoryId: 'auto_trips',
  title: 'Portagens da Brisa e do Túnel do Marão: tarifas e Via Verde',
  tldr: 'A Brisa gere autoestradas essenciais: A1, A2, A5, A6, A8, A9, A14. O pagamento é normalmente feito por portagem manual: retirar bilhete à entrada e pagar à saída, ou através da Via Verde sem parar. A tarifa depende da classe 1–4: um automóvel ligeiro é quase sempre classe 1; uma carrinha/SUV com altura no eixo dianteiro ≥1,10 m pode passar a classe 2. O Túnel do Marão na A4 é pago à parte: referência para 2026 — cerca de 7–12 € para classes maiores; a classe 1 ligeira é mais barata. Antes da viagem, verifique o simulador da Brisa/Via Verde.',
  tags: ['portagens', 'brisa', 'viaverde', 'a4'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-paid',
      title: 'O que é exatamente pago',
      content: [
        { kind: 'paragraph', text: 'Em Portugal, as estradas pagas chamam-se autoestradas com portagem. Na Brisa, são autoestradas clássicas com barreiras e bilhetes: A1 Lisboa–Porto, A2 Lisboa–Algarve, A5 Lisboa–Cascais, A6 Marateca–Caia, A8 Lisboa–Leiria, A9 CREL, A14 Figueira da Foz–Coimbra.' },
        { kind: 'paragraph', text: 'O Túnel do Marão é um troço pago na A4 entre a zona de Amarante e Vila Real. Não é um “túnel urbano”, mas sim parte da autoestrada que atravessa a Serra do Marão: nas viagens Porto ↔ Trás-os-Montes, aparece frequentemente no itinerário.' },
        { kind: 'checklist', items: [
          'A1: principal corredor pago Lisboa ↔ Porto',
          'A2: Lisboa ↔ Algarve, o percurso mais frequente para sul',
          'A5: Lisboa ↔ Cascais, curta, mas com portagem',
          'A6: direção Évora / Espanha via Caia',
          'A8: Lisboa ↔ Oeste / Leiria',
          'A9: circular CREL em redor de Lisboa',
          'A14: Figueira da Foz ↔ Coimbra',
          'A4 / Túnel do Marão: Porto / Amarante ↔ Vila Real / Bragança'
        ] }
      ]
    },
    {
      id: 'vehicle-class',
      title: 'Verifique primeiro a classe 1–4 🚗',
      content: [
        { kind: 'paragraph', text: 'A tarifa não é calculada “pela marca do carro”, mas sim pela classe para portagens. Um erro de classe é uma causa frequente de uma conta inesperadamente alta em carrinhas, autocaravanas e SUV grandes.' },
        { kind: 'checklist', items: [
          'Classe 1: motociclos e veículos com altura vertical no eixo dianteiro inferior a 1,10 m; os automóveis ligeiros comuns estão normalmente aqui',
          'Classe 2: 2 eixos e altura no eixo dianteiro ≥1,10 m; entram aqui frequentemente carrinhas, algumas vans e versões comerciais',
          'Classe 3: 3 eixos e altura no eixo dianteiro ≥1,10 m',
          'Classe 4: 4 ou mais eixos e altura no eixo dianteiro ≥1,10 m',
          'Um reboque pode alterar a classe, se mudar o número de eixos na lógica tarifária do troço',
          'A Via Verde utiliza a mesma classe atribuída ao transponder/matrícula do veículo',
          'Os motociclos com Via Verde podem ter um regime bonificado separado em algumas redes, mas isso deve ser confirmado na tarifa do operador concreto',
          'Se conduzir um carro alugado — a classe já foi definida pela empresa de aluguer e está associada ao dispositivo Via Verde, se estiver instalado'
        ] },
        { kind: 'warning', text: 'Não se oriente apenas por “ligeiro/não ligeiro” nos documentos. Para a portagem, o que importa é a altura física no eixo dianteiro de 1,10 m e o número de eixos. Numa campervan ou carrinha, a tarifa é muitas vezes mais alta do que o condutor espera.' }
      ]
    },
    {
      id: 'how-to-pay',
      title: 'Como pagar: manual, cartão, Via Verde',
      content: [
        { kind: 'paragraph', text: 'Nas estradas da Brisa funciona normalmente um sistema fechado: à entrada retira um bilhete, à saída paga pelo troço efetivamente percorrido. Em troços curtos, pode existir uma praça de portagem com valor fixo.' },
        { kind: 'checklist', items: [
          'Entrada: escolha uma via normal, retire o ticket; não entre na via “Via Verde” sem dispositivo',
          'Saída: entrega o ticket ao operador ou insere-o na máquina',
          'Pagamento: numerário, cartão bancário, por vezes Multibanco/caixa automática',
          'Via Verde: via verde, passagem sem paragem; débito na conta/cartão associado',
          'Num carro alugado: confirme com a rent-a-car se a Via Verde está ativada e qual é a comissão diária',
          'Se perder o bilhete, o operador pode cobrar a tarifa máxima do troço',
          'Se passou por engano pela Via Verde sem dispositivo, registe a data, o número da estrada, a praça e contacte o operador/Via Verde — não espere pela carta de coima',
          'Para estradas apenas eletrónicas fora da Brisa, as regras são diferentes: pagamento através de CTT/Payshop/portagens eletrónicas; não as confunda com as barreiras clássicas da Brisa'
        ] },
        { kind: 'warning', text: 'A via Via Verde não é uma “via rápida para todos”. A câmara lê o transponder/matrícula. Sem dispositivo ativo, a passagem transforma-se numa portagem por pagar com custos administrativos.' }
      ]
    },
    {
      id: 'tariffs-2026',
      title: 'Referências de tarifas para 2026',
      content: [
        { kind: 'paragraph', text: 'A tarifa exata depende da entrada, saída, operador, classe e indexação anual. Para uma viagem, é melhor calcular não “por quilómetro”, mas através do simulador de portagens oficial da Brisa ou da Via Verde: introduza origem, destino e classe.' },
        { kind: 'checklist', items: [
          'A5 Lisboa–Cascais, classe 1: normalmente cerca de 1,95–2,15 € por um troço curto, dependendo do ponto de entrada/saída',
          'A1 Lisboa–Porto, classe 1: referência cerca de 24–26 € pelo percurso completo pela A1 com portagem',
          'A2 Lisboa–Algarve, classe 1: referência cerca de 23–25 € até à zona de Albufeira/Faro pela A2',
          'A6 Lisboa/Marateca–Caia, classe 1: referência cerca de 17–20 € no principal corredor pago para Espanha',
          'A8 Lisboa–Leiria, classe 1: referência cerca de 9–11 € para uma deslocação longa',
          'A9 CREL, classe 1: viagens curtas normalmente alguns euros, frequentemente 1–4 €',
          'A14 Figueira da Foz–Coimbra, classe 1: normalmente alguns euros, cerca de 3–5 €',
          'Túnel do Marão / A4: para classe 2–4, referência cerca de 7–12 €; a classe 1 é normalmente mais baixa, mas verifique a calculadora antes da viagem'
        ] },
        { kind: 'paragraph', text: 'Para classe 2–4, o valor aumenta de forma significativa: uma carrinha ou campervan pode pagar mais 60–150% do que um automóvel ligeiro no mesmo percurso. Por isso, antes de uma viagem Porto ↔ Algarve ou Porto ↔ Vila Real, confirmar a classe poupa dinheiro real.' },
        { kind: 'warning', text: 'Os valores acima são referências práticas para planear o orçamento, não uma tabela tarifária legal. O valor oficial no dia da viagem só consta do tarifário/simulador da Brisa ou da Via Verde.' }
      ]
    },
    {
      id: 'via-verde-when-useful',
      title: 'Quando a Via Verde é necessária',
      content: [
        { kind: 'paragraph', text: 'A Via Verde é conveniente se vive em Portugal e utiliza autoestradas mais do que duas vezes por mês. O dispositivo fica associado à matrícula do veículo e ao método de pagamento. Os débitos ficam visíveis na área de cliente e na aplicação.' },
        { kind: 'checklist', items: [
          'Faz sentido: deslocações regulares Lisboa–Cascais, Porto–Lisboa, Algarve, trabalho fora da cidade',
          'Faz sentido para expats: não é necessário lidar com máquinas e filas na portagem',
          'É útil em parques de estacionamento e alguns serviços, se o plano tarifário da Via Verde o incluir',
          'Não é obrigatório: se utiliza estradas com portagem 1–2 vezes por ano, o pagamento manual é normalmente suficiente',
          'Para um carro alugado, não compre o seu próprio transponder: use a opção da rent-a-car ou pague manualmente, se a estrada o permitir',
          'Verifique a mensalidade/comissão do plano Via Verde: as condições mudam e dependem do pacote',
          'Depois de vender o veículo, remova a matrícula da Via Verde, caso contrário portagens de terceiros podem ser cobradas a si'
        ] },
        { kind: 'warning', text: 'A Via Verde não elimina a tarifa da estrada. É um método de pagamento. Paga a mesma portagem de acordo com a classe do veículo, mais uma eventual assinatura/comissão do plano escolhido.' }
      ]
    },
    {
      id: 'practical-route-hacks',
      title: 'Conselhos práticos antes da viagem',
      content: [
        { kind: 'checklist', items: [
          'Antes de um percurso longo, abra a calculadora da Brisa ou da Via Verde e guarde o valor numa captura de ecrã',
          'No navegador, compare a rota “evitar portagens”: por vezes poupar 20 € custa mais 60–90 minutos',
          'Na A1/A2, não entre sem combustível: há estações, mas os preços na autoestrada são frequentemente mais altos do que na cidade',
          'Tenha um cartão bancário e algum dinheiro consigo: a máquina ou o cartão podem não funcionar numa praça concreta',
          'Não deite fora o ticket até ao fim da viagem e do pagamento',
          'Se viajar com uma mala de tejadilho, isso normalmente não altera a classe, porque o que importa é a altura no eixo dianteiro, mas uma carrinha comercial é outra questão',
          'Para o Túnel do Marão, verifique a meteorologia com antecedência: a alternativa pela antiga estrada de montanha pode ser mais lenta e mais perigosa no inverno',
          'Para contabilidade/recibos verdes, guarde as faturas da Via Verde ou o recibo da portagem, se a viagem for profissional'
        ] },
        { kind: 'paragraph', text: 'Se precisar do orçamento mais previsível, planeie: combustível + portagens + estacionamento. Para uma viagem Lisboa ↔ Porto em classe 1, só as portagens de ida e volta podem chegar a cerca de 50 €, sem combustível.' }
      ]
    }
  ],
  costs: [
    { label: 'A1 Lisboa–Porto, classe 1', amountEURMin: 24, amountEURMax: 26, note: 'Referência pelo percurso completo pela A1 com portagem; calcule o valor exato na Brisa/Via Verde.' },
    { label: 'A2 Lisboa–Algarve, classe 1', amountEURMin: 23, amountEURMax: 25, note: 'Referência até à zona do Algarve pela A2; depende da entrada/saída.' },
    { label: 'Túnel do Marão / A4, classe 2–4', amountEURMin: 7, amountEURMax: 12, note: 'Intervalo prático para classes maiores; a classe 1 é normalmente mais barata.' },
    { label: 'Via Verde', amountEURMin: 0, amountEURMax: 2, note: 'A portagem é paga separadamente; pode existir uma mensalidade/comissão de acordo com o plano escolhido.' }
  ],
  sources: [
    { title: 'Brisa — portagens, rede de autoestradas e simulador', url: 'https://www.brisa.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Via Verde — tarifas, identificador e pagamento de portagens', url: 'https://www.viaverde.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Via Verde — planeador de rotas e cálculo de portagens', url: 'https://www.viaverde.pt/particulares/ferramentas/calculador-de-portagens', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
