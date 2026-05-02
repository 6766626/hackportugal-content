export default {
  editorialVoice: 'hackportugal',
  id: 'tarifa-bihoraria-trihoraria',
  categoryId: 'daily_life',
  title: 'Tarifa Bi-horária e Tri-horária: poupança na eletricidade em peak/off-peak',
  tldr: 'Em Portugal, para doméstico BTN, normalmente estão disponíveis as opções Simples, Bi-horária e Tri-horária. A Bi-horária dá horas vazio mais baratas à noite e em parte do fim de semana; a Tri-horária divide o dia em vazio/cheias/ponta e só compensa se você transferir realmente o consumo. A alteração é feita junto do comercializador, normalmente sem custos. Em 2026, confirme as contas no Simulador ERSE: na maioria dos casos começa a fazer sentido com consumos a partir de 2 500 kWh/ano e ≥30–40% do consumo em vazio.',
  tags: ['eletricidade', 'erse', 'tarifas', 'vazio'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what',
      title: 'O que significam Simples, Bi-horária e Tri-horária',
      content: [
        { kind: 'paragraph', text: 'No segmento doméstico BTN — baixa tensão normal, normalmente até 20,7 kVA — o preço da eletricidade é composto pela potência contratada, energia kWh, tarifas de acesso às redes, IVA e pequenas taxas. O time-of-use altera precisamente o preço do kWh por horário.' },
        { kind: 'checklist', items: [
          'Simples — um único preço de kWh durante todo o dia. A opção mais segura se você não gere o consumo.',
          'Bi-horária — duas zonas: vazio mais barato, fora de vazio mais caro. Adequada para termoacumulador, máquina de lavar, máquina de lavar loiça, EV, heat pump à noite.',
          'Tri-horária — três zonas: vazio mais barato, cheias intermédio, ponta o mais caro. Compensa para casas disciplinadas e para quem evita a ponta.',
          'Ciclo diário — a mesma lógica de horários todos os dias, mais simples para principiantes.',
          'Ciclo semanal — ao fim de semana há mais horas vazio; muitas vezes é melhor para famílias que lavam roupa/cozinham/carregam o carro ao fim de semana.',
          'O preço comercial depende do seu comercializador: EDP Comercial, Galp, Goldenergy, Iberdrola, Endesa, Repsol, entre outros.',
          'A ERSE não vende eletricidade, mas regula o mercado e disponibiliza o Simulador ERSE oficial para comparação.'
        ] }
      ]
    },
    {
      id: 'hours',
      title: 'Horas vazio / cheias / ponta em 2026',
      content: [
        { kind: 'paragraph', text: 'Os horários exatos dependem do ciclo escolhido e de Portugal Continental / regiões. Na fatura, procure “opção horária” e “ciclo”. Abaixo está uma grelha típica para Portugal Continental, usada pelos fornecedores; antes de assinar, confirme a PDF ficha contratual.' },
        { kind: 'substeps', items: [
          { id: 'bi-diario', title: 'Bi-horária, ciclo diário', content: [
            { kind: 'checklist', items: [
              'Vazio: aproximadamente 22:00–08:00 todos os dias.',
              'Fora de vazio: aproximadamente 08:00–22:00 todos os dias.',
              'Vantagem: fácil de memorizar.',
              'Desvantagem: o domingo não passa a ser totalmente barato.'
            ] }
          ] },
          { id: 'bi-semanal', title: 'Bi-horária, ciclo semanal', content: [
            { kind: 'checklist', items: [
              'Dias úteis: vazio aproximadamente 00:00–07:00.',
              'Sábado: vazio à noite, parte do dia e fim da noite; o meio do dia divide-se por zonas.',
              'Domingo: normalmente vazio durante todo o dia.',
              'Vantagem: bom se as principais lavagens, termoacumulador, forno e carregamento de EV forem ao fim de semana.',
              'Desvantagem: ao fim da tarde/noite dos dias úteis, depois do trabalho, o preço já é fora de vazio.'
            ] }
          ] },
          { id: 'tri', title: 'Tri-horária', content: [
            { kind: 'checklist', items: [
              'Vazio — as horas mais baratas, normalmente a noite e uma parte significativa do domingo no ciclo semanal.',
              'Cheias — horas intermédias.',
              'Ponta — as horas mais caras de manhã e ao fim da tarde/noite nos dias úteis; no inverno e no verão os intervalos são diferentes.',
              'A Tri-horária faz sentido se você quase não ligar grandes cargas em ponta.',
              'Se a casa tiver aquecimento elétrico à noite, a Tri-horária muitas vezes piora a fatura.'
            ] }
          ] }
        ] },
        { kind: 'warning', text: 'Não se oriente apenas pela frase “a bi-horária é mais barata”. Só o vazio é mais barato. Se o consumo principal for 18:00–23:00 nos dias úteis, a fatura pode aumentar.' }
      ]
    },
    {
      id: 'when-worth',
      title: 'Quando compensa realmente',
      content: [
        { kind: 'paragraph', text: 'Regra aproximada para 2026: a Bi-horária começa mais frequentemente a compensar com consumo anual a partir de 2 500 kWh e se for possível transferir pelo menos 30–40% dos kWh para vazio. Para apartamentos com 1–2 pessoas, fogão a gás e consumo de 1 200–1 800 kWh/ano, a diferença é muitas vezes mínima.' },
        { kind: 'checklist', items: [
          'Compensa: termoacumulador elétrico com temporizador à noite.',
          'Compensa: carregamento de veículo elétrico em casa depois das 00:00.',
          'Compensa: máquina de lavar/secar/máquina de lavar loiça com delayed start.',
          'Compensa: heat pump, se for possível aquecer água/casa à noite sem perda de conforto.',
          'Compensa: família que usa ativamente o domingo para tarefas de elevado consumo energético no ciclo semanal.',
          'Duvidoso: você cozinha com eletricidade todas as noites entre as 19:00–21:00.',
          'Duvidoso: ar condicionado/aquecimento funciona à noite nos dias úteis.',
          'Duvidoso: você arrenda a casa por curto prazo e não controla os equipamentos.'
        ] },
        { kind: 'paragraph', text: 'O teste mais prático: pegue nas últimas 12 faturas, encontre o consumo kWh/ano e compare no Simulador ERSE. Se já tiver smart meter, na área de cliente E-REDES ou junto do fornecedor é possível ver o perfil por 15/30/60 minutos e perceber quanto entra realmente em vazio.' }
      ]
    },
    {
      id: 'switch',
      title: 'Como mudar junto do comercializador',
      content: [
        { kind: 'paragraph', text: 'A mudança de tarifa é uma alteração ao contrato com o fornecedor, não uma ida à Câmara Municipal. Normalmente basta a área de cliente, telefone ou formulário no site do comercializador. A mudança de fornecedor ou de opção tarifária no mercado livre para doméstico é normalmente gratuita, se não tiver um período separado de fidelização por um pacote de serviços.' },
        { kind: 'checklist', items: [
          'Encontre o CPE — Código de Ponto de Entrega — numa fatura antiga.',
          'Verifique a potência contratada: 3,45 / 4,6 / 5,75 / 6,9 kVA, etc.; não a altere “por precaução”, pois é um custo fixo separado.',
          'Escolha Simples, Bi-horária ou Tri-horária.',
          'Escolha ciclo diário ou ciclo semanal, se o fornecedor permitir escolher.',
          'Peça a ficha contratual e o preço kWh por cada zona: vazio, fora de vazio ou cheias/ponta.',
          'Confirme se há fidelização, pacote com gás/seguro/assistência e penalização por saída antecipada.',
          'Verifique se o contador suporta multi-horário; os smart meters modernos normalmente suportam.',
          'Depois da primeira fatura, confira: opção horária, ciclo, kWh por zonas e data de início da nova tarifa.'
        ] },
        { kind: 'warning', text: 'Se o fornecedor prometer “a tarifa mais barata”, mas não mostrar o preço kWh por zonas e a potência contratada com IVA, a comparação não faz sentido. Peça os valores em €/kWh e €/dia.' }
      ]
    },
    {
      id: 'mistakes',
      title: 'Erros típicos dos expatriados',
      content: [
        { kind: 'checklist', items: [
          'Comparam apenas o preço kWh vazio e ignoram as ponta/fora de vazio caras.',
          'Escolhem Tri-horária quando trabalham a partir de casa e cozinham bastante à noite.',
          'Não verificam o ciclo semanal: nos dias úteis, a janela barata pode ser apenas de madrugada.',
          'Colocam a potência contratada acima do necessário: a parte fixa aumenta todos os dias, mesmo que haja poucos kWh.',
          'Não usam temporizador no termoacumulador: ele aquece a água em horas caras e anula a poupança.',
          'Não consultam o ERSE simulator e acreditam no “desconto 20%” publicitário, que pode aplicar-se apenas a uma parte limitada do preço.',
          'Esquecem-se de que o IVA sobre a eletricidade depende dos componentes da fatura e dos limites de consumo; o preço final não é igual ao €/kWh simples da publicidade.',
          'Em arrendamento, não acordam a mudança do titular do contrato com o landlord e continuam a pagar por um contrato antigo e caro.'
        ] },
        { kind: 'paragraph', text: 'Configuração mínima para poupar: ative o delayed start na máquina de lavar e na máquina de lavar loiça, instale um timer/smart plug no termoacumulador, passe o EV charging para a noite e, na Tri-horária, evite forno, máquina de secar e aquecedores em ponta.' }
      ]
    },
    {
      id: 'erse-check',
      title: 'Como calcular através do Simulador ERSE',
      content: [
        { kind: 'paragraph', text: 'O Simulador ERSE oficial é a melhor forma de não adivinhar. Compara ofertas do mercado livre e regulado de acordo com o seu perfil, potência e consumo anual.' },
        { kind: 'checklist', items: [
          'Abra simulador.erse.pt.',
          'Escolha eletricidade ou eletricidade + gás, se tiver bundle.',
          'Introduza a potência contratada da fatura.',
          'Introduza o consumo anual em kWh; se tiver dados por zonas, insira-os separadamente.',
          'Compare Simples e Bi-horária com a mesma potência.',
          'Verifique separadamente a Tri-horária, se tiver EV, termoacumulador ou heat pump com programação.',
          'Olhe para o custo anual total, não apenas para o “desconto”.',
          'Guarde o resultado em PDF/captura de ecrã antes de telefonar ao fornecedor.'
        ] },
        { kind: 'warning', text: 'Os preços no mercado livre mudam. Volte a verificar a tarifa pelo menos de 6 em 6 meses ou depois de uma carta de “alteração de preços” do comercializador.' }
      ]
    }
  ],
  costs: [
    { label: 'Alteração da opção tarifária junto do comercializador', amountEUR: 0, note: 'Normalmente gratuita para doméstico; podem existir condições de fidelização em pacotes com serviços adicionais.' },
    { label: 'Smart plug / temporizador para termoacumulador', amountEURMin: 10, amountEURMax: 35, note: 'Não é obrigatório, mas muitas vezes gera mais poupança do que a própria mudança de tarifa sem disciplina.' },
    { label: 'Consumo a partir do qual a Bi-horária costuma fazer sentido', amountEUR: 0, note: 'Referência não em euros: a partir de 2 500 kWh/ano e ≥30–40% do consumo em vazio; confirmar no Simulador ERSE.' }
  ],
  sources: [
    { title: 'ERSE — informação para consumidores de eletricidade e opções tarifárias', url: 'https://www.erse.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Simulador ERSE — simulador oficial de tarifas eletricidade/gás', url: 'https://www.simulador.erse.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'E-REDES — ciclos horários e contadores para baixa tensão', url: 'https://www.e-redes.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
