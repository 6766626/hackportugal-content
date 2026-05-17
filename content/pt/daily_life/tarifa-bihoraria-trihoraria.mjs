export default {
  editorialVoice: 'hackportugal',
  id: 'tarifa-bihoraria-trihoraria',
  categoryId: 'daily_life',
  title: 'Tarifa Bi-horária e Tri-horária: poupar na eletricidade em peak/off-peak',
  tldr: 'Em Portugal, para doméstico BTN estão normalmente disponíveis Simples, Bi-horária e Tri-horária. A Bi-horária oferece horas vazio mais baratas à noite e em parte do fim de semana; a Tri-horária divide o dia em vazio/cheias/ponta e só compensa se transferir efetivamente o consumo. A alteração é feita junto do comercializador, normalmente de forma gratuita. Em 2026, confirme o cálculo no Simulador ERSE: na maioria dos casos começa a fazer sentido com consumos a partir de 2 500 kWh/ano e ≥30–40% do consumo em vazio.',
  tags: ['eletricidade', 'erse', 'tarifas', 'vazio'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what',
      title: 'O que significam Simples, Bi-horária e Tri-horária',
      content: [
        { kind: 'paragraph', text: 'No segmento doméstico BTN — baixa tensão normal, normalmente até 20,7 kVA — o preço da eletricidade é composto pela potência contratada, energia kWh, tarifas de acesso às redes, IVA e pequenas taxas. O time-of-use altera precisamente o preço do kWh por horário.' },
        { kind: 'checklist', items: [
          'Simples — um único preço de kWh durante todo o dia. A opção mais segura se não gere o seu consumo.',
          'Bi-horária — duas zonas: vazio mais barato, fora de vazio mais caro. Adequada para termoacumulador, máquina de lavar roupa, máquina de lavar loiça, EV, heat pump durante a noite.',
          'Tri-horária — três zonas: vazio mais barato, cheias intermédia, ponta a mais cara. Compensa para casas disciplinadas e para quem evita a ponta.',
          'Ciclo diário — a mesma lógica horária todos os dias, mais simples para principiantes.',
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
        { kind: 'paragraph', text: 'Os horários exatos dependem do ciclo escolhido e de Portugal Continental / regiões. Na fatura, procure “opção horária” e “ciclo”. Abaixo está uma grelha típica para Portugal Continental, utilizada pelos fornecedores; antes de assinar, confirme a ficha contratual em PDF.' },
        { kind: 'substeps', items: [
          { id: 'bi-diario', title: 'Bi-horária, ciclo diário', content: [
            { kind: 'checklist', items: [
              'Vazio: aproximadamente 22:00–08:00 todos os dias.',
              'Fora de vazio: aproximadamente 08:00–22:00 todos os dias.',
              'Vantagem: fácil de memorizar.',
              'Desvantagem: o domingo não fica totalmente barato.'
            ] }
          ] },
          { id: 'bi-semanal', title: 'Bi-horária, ciclo semanal', content: [
            { kind: 'checklist', items: [
              'Dias úteis: vazio aproximadamente 00:00–07:00.',
              'Sábado: vazio à noite, parte do dia e final da noite; o meio do dia divide-se por zonas.',
              'Domingo: normalmente todo o dia é vazio.',
              'Vantagem: bom se as principais lavagens, termoacumulador, forno e carregamento do EV forem ao fim de semana.',
              'Desvantagem: ao fim da tarde/noite dos dias úteis, depois do trabalho, o preço já é fora de vazio.'
            ] }
          ] },
          { id: 'tri', title: 'Tri-horária', content: [
            { kind: 'checklist', items: [
              'Vazio — as horas mais baratas, normalmente à noite e numa parte significativa do domingo no ciclo semanal.',
              'Cheias — horas intermédias.',
              'Ponta — as horas mais caras de manhã e ao fim da tarde/noite nos dias úteis; no inverno e no verão os intervalos diferem.',
              'A Tri-horária faz sentido se quase não ligar cargas grandes em ponta.',
              'Se em casa houver aquecimento elétrico ao fim da tarde/noite, a Tri-horária frequentemente piora a fatura.'
            ] }
          ] }
        ] },
        { kind: 'warning', text: 'Não se oriente apenas pela frase “bi-horária é mais barata”. Só o vazio é mais barato. Se o consumo principal for 18:00–23:00 nos dias úteis, a fatura pode aumentar.' }
      ]
    },
    {
      id: 'when-worth',
      title: 'Quando compensa realmente',
      content: [
        { kind: 'paragraph', text: 'Regra aproximada para 2026: a Bi-horária começa mais frequentemente a compensar com consumo anual a partir de 2 500 kWh e se pelo menos 30–40% dos kWh puderem ser transferidos para vazio. Para apartamentos com 1–2 pessoas, fogão a gás e consumo de 1 200–1 800 kWh/ano, a diferença é muitas vezes mínima.' },
        { kind: 'checklist', items: [
          'Compensa: termoacumulador elétrico com temporizador durante a noite.',
          'Compensa: carregamento de veículo elétrico em casa depois das 00:00.',
          'Compensa: máquina de lavar roupa/secador/máquina de lavar loiça com delayed start.',
          'Compensa: heat pump, se for possível aquecer água/casa durante a noite sem perda de conforto.',
          'Compensa: família que usa ativamente o domingo para tarefas intensivas em energia no ciclo semanal.',
          'Duvidoso: cozinha com eletricidade todas as noites às 19:00–21:00.',
          'Duvidoso: ar condicionado/aquecimento a funcionar ao fim da tarde/noite nos dias úteis.',
          'Duvidoso: arrenda a casa por curto prazo e não controla os equipamentos.'
        ] },
        { kind: 'paragraph', text: 'O teste mais prático: reúna as 12 últimas faturas, encontre o consumo kWh/ano e compare no Simulador ERSE. Se já tiver smart meter, na área de cliente da E-REDES ou do fornecedor pode consultar o perfil em intervalos de 15/30/60 minutos e perceber quanto cai realmente em vazio.' }
      ]
    },
    {
      id: 'switch',
      title: 'Como alterar junto do comercializador',
      content: [
        { kind: 'paragraph', text: 'Alterar a tarifa é uma alteração do contrato com o fornecedor, não uma deslocação à Câmara Municipal. Normalmente basta a área de cliente, telefone ou formulário no site do comercializador. A mudança de fornecedor ou de opção tarifária no mercado livre para doméstico é normalmente gratuita, se não tiver um período separado de fidelização associado a um pacote de serviços.' },
        { kind: 'checklist', items: [
          'Encontre o CPE — Código de Ponto de Entrega — numa fatura antiga.',
          'Verifique a potência contratada: 3,45 / 4,6 / 5,75 / 6,9 kVA, etc.; não a altere “por precaução”, pois é um custo fixo separado.',
          'Escolha Simples, Bi-horária ou Tri-horária.',
          'Escolha ciclo diário ou ciclo semanal, se o fornecedor der essa opção.',
          'Peça a ficha contratual e o preço kWh por cada zona: vazio, fora de vazio ou cheias/ponta.',
          'Confirme se existe fidelização, pacote com gás/seguro/assistência e penalização por saída antecipada.',
          'Verifique se o contador suporta multi-horário; os smart meters modernos normalmente suportam.',
          'Depois da primeira fatura, confirme: opção horária, ciclo, kWh por zonas e data de início da nova tarifa.'
        ] },
        { kind: 'warning', text: 'Se o fornecedor prometer “a tarifa mais barata”, mas não mostrar o preço kWh por zonas e a potência contratada com IVA, a comparação não faz sentido. Peça os valores em €/kWh e €/dia.' }
      ]
    },
    {
      id: 'mistakes',
      title: 'Erros típicos dos expats',
      content: [
        { kind: 'checklist', items: [
          'Comparam apenas o preço kWh vazio e ignoram a ponta/fora de vazio cara.',
          'Escolhem Tri-horária trabalhando a partir de casa e usando muito a cozinha à noite.',
          'Não verificam o ciclo semanal: nos dias úteis a janela barata pode ser apenas de madrugada.',
          'Definem a potência contratada acima do necessário: a parte fixa aumenta todos os dias, mesmo que haja poucos kWh.',
          'Não usam temporizador no termoacumulador: ele aquece água nas horas caras e consome a poupança.',
          'Não consultam o Simulador ERSE e acreditam no “desconto 20%” publicitário, que pode aplicar-se apenas a uma parte limitada do preço.',
          'Esquecem-se de que o IVA sobre a eletricidade depende dos componentes da fatura e dos limites de consumo; o preço final não é igual ao simples €/kWh da publicidade.',
          'No arrendamento, não articulam a mudança de titular do contrato com o landlord e continuam a pagar pelo contrato antigo e caro.'
        ] },
        { kind: 'paragraph', text: 'Configuração mínima para poupar: ative o delayed start na máquina de lavar roupa e na máquina de lavar loiça, coloque um timer/smart plug no termoacumulador, transfira o EV charging para a noite e, na Tri-horária, evite forno, secador e aquecedores em ponta.' }
      ]
    },
    {
      id: 'erse-check',
      title: 'Como calcular através do Simulador ERSE',
      content: [
        { kind: 'paragraph', text: 'O Simulador ERSE oficial é a melhor forma de não adivinhar. Compara ofertas do mercado livre e regulado com base no seu perfil, potência e consumo anual.' },
        { kind: 'checklist', items: [
          'Abra simulador.erse.pt.',
          'Escolha eletricidade ou eletricidade + gás, se tiver bundle.',
          'Introduza a potência contratada indicada na fatura.',
          'Introduza o consumo anual em kWh; se tiver dados por zonas, insira-os separadamente.',
          'Compare Simples e Bi-horária com a mesma potência.',
          'Verifique separadamente a Tri-horária, se tiver EV, termoacumulador ou heat pump com horário programado.',
          'Veja o custo anual total, não apenas o “desconto”.',
          'Guarde o resultado em PDF/captura de ecrã antes de ligar ao fornecedor.'
        ] },
        { kind: 'warning', text: 'Os preços no mercado livre mudam. Volte a verificar a tarifa pelo menos de 6 em 6 meses ou depois de receber uma carta de “alteração de preços” do comercializador.' }
      ]
    }
  ],
  costs: [
    { label: 'Alteração da opção tarifária junto do comercializador', amountEUR: 0, note: 'Normalmente gratuita para doméstico; podem existir condições de fidelização em pacotes com serviços adicionais.' },
    { label: 'Smart plug / temporizador para termoacumulador', amountEURMin: 10, amountEURMax: 35, note: 'Não é obrigatório, mas muitas vezes gera mais poupança do que a própria alteração de tarifa sem disciplina.' },
    { label: 'Consumo a partir do qual a Bi-horária tende a fazer sentido', amountEUR: 0, note: 'Referência não em euros: a partir de 2 500 kWh/ano e ≥30–40% do consumo em vazio; confirmar no Simulador ERSE.' }
  ],
  sources: [
    { title: 'ERSE — informação para consumidores de eletricidade e opções tarifárias', url: 'https://www.erse.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Simulador ERSE — simulador oficial de tarifas de eletricidade/gás', url: 'https://www.simulador.erse.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'E-REDES — ciclos horários e contadores para baixa tensão', url: 'https://www.e-redes.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
