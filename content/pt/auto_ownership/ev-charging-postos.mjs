export default {
  editorialVoice: 'hackportugal',
  id: 'ev-charging-postos',
  categoryId: 'auto_ownership',
  title: 'Carregamentos de veículos elétricos — Mobi.E, Galp, EDP, Wallbox',
  tldr: 'Em Portugal, quase todos os postos de carregamento públicos funcionam através da rede unificada Mobi.E: um cartão ou aplicação CEME permite iniciar postos de diferentes operadores — Galp, EDP, Powerdot, Prio, Ionity, entre outros. Em 2026, a referência para o preço total é: AC 3,7–22 kW — 0,25–0,45 €/kWh, DC 50 kW — 0,45–0,70 €/kWh, HPC 100–350 kW — 0,55–0,90 €/kWh, mas o valor final depende de €/kWh, minutos, fee do operador e IVA 23%. Um Wallbox doméstico custa normalmente 500–1 500 € com instalação.',
  tags: ['mobi.e', 'carregamentos', 'galp', 'edp', 'wallbox'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'how-network-works',
      title: 'Como funciona a rede Mobi.E',
      content: [
        { kind: 'paragraph', text: 'A Mobi.E não é “uma empresa de carregamentos”, mas sim a plataforma nacional que liga os fornecedores de energia para veículos elétricos e os operadores de postos de carregamento. Por isso, o mesmo posto pode pertencer à Galp, EDP, Powerdot, Prio, Continente, Ionity ou a um município, mas ser iniciado com o cartão de outro fornecedor.' },
        { kind: 'paragraph', text: 'Principais funções: CEME — Comercializador de Eletricidade para a Mobilidade Elétrica, ou seja, a empresa com a qual obtém o cartão/aplicação e à qual paga a fatura; OPC — Operador de Ponto de Carregamento, ou seja, o proprietário de uma estação concreta; EGME/Mobi.E — a plataforma gestora da rede.' },
        { kind: 'checklist', items: [
          'Para carregamento público, quase sempre precisa de um contrato CEME: Galp Electric, EDP Comercial, Prio, Miio, Evio, Via Verde Electric, entre outros.',
          'O cartão CEME normalmente funciona na maioria dos postos da rede Mobi.E, não apenas nas estações “próprias” da marca.',
          'Na aplicação do fornecedor vê a potência, ocupação, tarifa e histórico das sessões; a precisão do estado depende da estação.',
          'O preço final resulta da energia do CEME, da tarifa do OPC, das taxas de rede/gestão e do IVA 23%.',
          'Nos carregamentos rápidos, a tarifa inclui frequentemente uma componente por minuto: se o carro aceitar corrente lentamente depois dos 80%, o preço por kWh aumenta acentuadamente.',
          'Nas autoestradas A1/A2/A22 e em zonas turísticas, o HPC é mais caro do que o AC num supermercado ou parque municipal.',
          'Aplicações de roaming como Chargemap/Plugsurfing podem funcionar, mas são muitas vezes mais caras do que um CEME local.'
        ] }
      ]
    },
    {
      id: 'cards-and-apps',
      title: 'Cartões e aplicações: Galp, EDP e alternativas',
      content: [
        { kind: 'paragraph', text: 'O mínimo prático para um expatriado é ter 2 formas de iniciar o carregamento: um cartão CEME principal e uma aplicação de reserva. Um cartão RFID físico é útil em parques subterrâneos e locais com internet fraca; a aplicação é conveniente para pesquisar, filtrar por potência e consultar o preço.' },
        { kind: 'substeps', items: [
          { id: 'galp', title: 'Galp Electric / Galp Power Plug', content: [
            { kind: 'paragraph', text: 'A Galp é um dos grandes CEME e operadores de carregamentos em postos de combustível, supermercados e estradas. É adequada se carrega frequentemente na Galp ou quer uma conta única para combustível, energia e carregamento. Verifique o preço na aplicação antes de iniciar: a Galp pode ter tarifas diferentes para AC, DC e ultra-fast.' }
          ] },
          { id: 'edp', title: 'EDP Comercial / EDP Charge', content: [
            { kind: 'paragraph', text: 'A EDP é um CEME popular para quem já tem contrato doméstico de eletricidade com a EDP. É conveniente para associar “fatura doméstica + carregamento público”, mas isso não significa que a EDP seja sempre mais barata em todos os postos Mobi.E.' }
          ] },
          { id: 'miio-and-others', title: 'Miio, Prio, Evio, Via Verde Electric', content: [
            { kind: 'paragraph', text: 'A Miio é frequentemente útil como “calculadora” de custos: a aplicação mostra uma previsão do preço antes do início e o total após a sessão. A Prio e a Evio podem ser vantajosas em estações específicas. A Via Verde Electric é conveniente para quem já tem Via Verde para autoestradas e estacionamentos.' }
          ] }
        ] },
        { kind: 'warning', text: 'Não escolha o CEME apenas pela marca do carregador perto de casa. Na rede Mobi.E, um cartão Galp pode iniciar uma estação EDP, e um cartão EDP pode iniciar uma estação Galp. Compare o preço final nas aplicações nos seus trajetos reais.' }
      ]
    },
    {
      id: 'prices-2026',
      title: 'Quanto custa carregar em 2026',
      content: [
        { kind: 'paragraph', text: 'Em Portugal, o preço do carregamento público raramente equivale a um simples “€/kWh”. No recibo há normalmente: energia do CEME, tarifa do operador da estação — por kWh, por minuto ou por sessão, imposto IEC/taxas, IVA 23%. Por isso, dois carros no mesmo posto podem obter um preço por kWh diferente: um carro rápido sai mais barato, um carro lento paga mais minutos.' },
        { kind: 'checklist', items: [
          'AC 3,7–7,4 kW: normalmente 0,25–0,40 €/kWh no total; adequado para carregamento noturno ou estacionamento prolongado.',
          'AC 11–22 kW: normalmente 0,30–0,45 €/kWh; a velocidade real depende do onboard charger do automóvel, muitas vezes 7,4 ou 11 kW.',
          'DC 50 kW: normalmente 0,45–0,70 €/kWh; bom compromisso para 30–60 minutos.',
          'HPC 100–350 kW: normalmente 0,55–0,90 €/kWh; nas autoestradas e nas redes premium pode ser superior.',
          'Depois dos 80% da bateria, a potência quase sempre desce: em DC/HPC é mais vantajoso carregar de 10–80%, e não de 10–100%.',
          'Se a tarifa incluir €/min, no inverno e com a bateria fria o preço final é mais alto, porque o automóvel aceita menos potência.',
          'Os carregamentos gratuitos praticamente desapareceram; alguns centros comerciais podem ter benefícios para clientes, mas não se deve contar com eles como método principal.',
          'O carregamento doméstico com tarifa residencial é normalmente mais barato do que o público: frequentemente cerca de 0,15–0,25 €/kWh com impostos, e pode ser inferior com um plano bi-horário noturno.'
        ] },
        { kind: 'paragraph', text: 'Exemplo: a bateria recebeu 40 kWh. Em AC a 0,35 €/kWh, isto corresponde a cerca de 14 €. Em DC a 0,60 €/kWh — cerca de 24 €. Em HPC com componente por minuto, o total pode ser 26–36 € se o carro carregar rapidamente, e mais se ficar muito tempo depois da queda de potência.' }
      ]
    },
    {
      id: 'fast-vs-slow',
      title: 'AC, DC e HPC: o que escolher',
      content: [
        { kind: 'paragraph', text: 'AC é o carregamento lento em corrente alternada, em que a velocidade é limitada pelo carregador integrado do automóvel. DC/HPC é o carregamento rápido em corrente contínua, em que a potência vai diretamente para a bateria, mas é limitada pela temperatura, percentagem de carga e curva de carregamento do modelo concreto.' },
        { kind: 'checklist', items: [
          'Para o dia a dia: carregue em casa ou em AC no trabalho/loja até 70–90%.',
          'Para viagens: planeie paragens DC/HPC no intervalo 10–80%, porque é mais rápido e mais barato.',
          '22 kW AC não significa que o seu automóvel vá aceitar 22 kW: muitos EV aceitam apenas 7,4 ou 11 kW AC.',
          'HPC de 150–350 kW só faz sentido se o automóvel suportar essa potência e a bateria estiver preparada.',
          'Na estrada, procure estações com 2+ conectores CCS, e não um posto isolado de 50 kW.',
          'CHAdeMO em 2026 é necessário sobretudo para Nissan Leaf e Mitsubishi antigos; as estações novas estão mais orientadas para CCS.',
          'Não ocupe o posto depois de terminar o carregamento: em alguns parques podem existir coimas por estacionamento indevido ou tarifa de ocupação.'
        ] },
        { kind: 'warning', text: 'Nos carregamentos rápidos, não confie apenas no número “até 150 kW”. Se a bateria estiver fria, quase cheia ou o automóvel não suportar essa potência, valores reais de 35–80 kW são uma situação normal.' }
      ]
    },
    {
      id: 'home-wallbox',
      title: 'Wallbox doméstico: apartamento, moradia, condomínio',
      content: [
        { kind: 'paragraph', text: 'Se tem garagem ou lugar de estacionamento atribuído, um wallbox doméstico é quase sempre mais barato e mais conveniente do que a rede pública. Marcas populares: Wallbox, EDP Charge, Galp, Tesla Wall Connector, Circutor, ABB, Schneider. Mais importante do que a marca é a proteção correta, um eletricista certificado e potência contratada suficiente.' },
        { kind: 'checklist', items: [
          'Uma tomada doméstica normal serve apenas como solução temporária: 2–3 kW, lenta e com risco de sobreaquecimento em cablagem antiga.',
          '7,4 kW single-phase exige linha adequada, disjuntor, proteção diferencial e normalmente potência contratada de cerca de 6,9–10,35 kVA, considerando a casa.',
          '11 kW three-phase é conveniente para moradias com trifásico; é necessário verificar se essa potência está disponível junto da E-REDES.',
          'Dynamic load balancing é útil: o wallbox reduz automaticamente a potência quando estão ligados o forno, termoacumulador ou ar condicionado.',
          'Em condomínio, verifique antecipadamente o percurso do cabo, o contador comum, o local de instalação e as regras de gestão da garagem.',
          'Para um lugar individual, normalmente é necessário notificar por escrito a administração do condomínio; para trabalhos em partes comuns podem ser necessárias autorizações.',
          'Guarde a factura e o relatório técnico/termo de responsabilidade do eletricista: serão úteis na venda da habitação e em litígios com o condomínio.',
          'Se arrendar a habitação, obtenha consentimento escrito do senhorio antes da instalação.'
        ] },
        { kind: 'paragraph', text: 'Orçamento típico em 2026: wallbox 7,4 kW — 350–900 € pelo equipamento, instalação numa garagem simples — 250–700 €, percurso de cabo complexo em condomínio — 800–2 000 €+. Por vezes a Galp ou a EDP oferecem um pacote “carregador + instalação + tarifa”, mas compare o custo final com um eletricista independente.' }
      ]
    },
    {
      id: 'practical-routine',
      title: 'Cenário prático para viver em Portugal',
      content: [
        { kind: 'paragraph', text: 'O esquema ideal: carregar em casa à noite até ao limite de 70–90%, usar AC na cidade apenas quando já vai estacionar de qualquer forma, e fazer paragens curtas DC/HPC em viagem. Assim reduz o custo e depende menos de postos ocupados.' },
        { kind: 'checklist', items: [
          'Peça pelo menos um cartão RFID CEME antes da primeira viagem longa.',
          'Mantenha 2 aplicações no telemóvel: uma CEME principal e uma de reserva para pesquisar/comparar preços.',
          'Antes de iniciar a sessão, verifique: €/kWh, €/min, potência, tipo de conector, estado “disponível”.',
          'Na estrada, planeie o carregamento não “a zero”, mas com uma margem de 10–15%, sobretudo à noite e em agosto.',
          'Na época quente no Algarve e nas pontes/estradas para as praias, conte com filas nos HPC.',
          'Depois da sessão, verifique a factura/recibo na aplicação: os erros são raros, mas acontecem quando há falhas de comunicação.',
          'Se o posto não iniciar, tente outro CEME/app, reinicie a sessão ou ligue para o número de apoio indicado na estação.',
          'Para carregamento doméstico, reveja a tarifa de eletricidade: bi-horário/tri-horário pode reduzir significativamente o custo dos kWh noturnos.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Carregamento público AC 3,7–22 kW', amountEURMin: 0.25, amountEURMax: 0.45, note: 'Referência por 1 kWh com IVA 23%; o total depende do CEME, OPC e da componente por minuto.' },
    { label: 'Carregamento público DC 50 kW', amountEURMin: 0.45, amountEURMax: 0.70, note: 'Referência por 1 kWh; em carregamentos lentos, o preço é mais alto devido a €/min.' },
    { label: 'HPC 100–350 kW', amountEURMin: 0.55, amountEURMax: 0.90, note: 'Referência por 1 kWh; nas autoestradas e nas redes premium são possíveis faturas mais elevadas.' },
    { label: 'Wallbox doméstico com instalação simples', amountEURMin: 500, amountEURMax: 1500, note: 'Equipamento mais montagem; um condomínio complexo ou um percurso de cabo longo podem custar mais.' },
    { label: 'Cartão RFID físico CEME', amountEURMin: 0, amountEURMax: 10, note: 'Depende do fornecedor: frequentemente gratuito ou com uma pequena taxa de emissão/entrega.' }
  ],
  sources: [
    { title: 'Mobi.E — informação oficial sobre a rede de mobilidade elétrica', url: 'https://www.mobie.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Galp — soluções para carregamento de veículos elétricos e Galp Electric', url: 'https://www.galp.com', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'EDP Comercial — mobilidade elétrica e carregamento EV', url: 'https://www.edp.pt/particulares/servicos/mobilidade-eletrica/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 39/2010 — regime de organização e acesso à mobilidade elétrica', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/39-2010-243233', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
