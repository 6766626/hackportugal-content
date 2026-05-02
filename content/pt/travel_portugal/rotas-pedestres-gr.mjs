export default {
  editorialVoice: 'hackportugal',
  id: 'rotas-pedestres-gr',
  categoryId: 'travel_portugal',
  title: 'Percursos pedestres em Portugal: GR e PR',
  tldr: 'Em Portugal, os percursos pedestres oficiais dividem-se em GR — Grande Rota, percursos longos geralmente a partir de 30 km e frequentemente com mais de 100 km, com marcação vermelho-branca, e PR — Pequena Rota, percursos locais até 30 km, muitas vezes circulares, com marcação amarelo-vermelha. Caminho de Santiago Português: Lisboa–Santiago cerca de 600 km, Porto–Santiago cerca de 240 km. Verifique os trilhos através do ICNF, da Federação de Campismo e Montanhismo de Portugal e dos municípios: incêndios, caça, deslizamentos de terras e terrenos privados fecham mesmo os trilhos.',
  tags: ['trilhos', 'gr', 'pr', 'caminhadas', 'icnf'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-gr-pr',
      title: 'GR e PR: o que significam as marcações',
      content: [
        { kind: 'paragraph', text: 'A rede portuguesa de percursos pedestres utiliza a lógica europeia de marcação, mas, na prática, a qualidade depende do município, do parque natural e da associação local. Antes da caminhada, consulte não só o Google Maps, mas também o PDF/GPX oficial do percurso.' },
        { kind: 'checklist', items: [
          'GR — Grande Rota: percurso longo, geralmente com mais de 30 km; muitos GR têm mais de 100 km e são divididos em etapas.',
          'Marcação GR: faixas horizontais vermelha + branca.',
          'PR — Pequena Rota: percurso local curto, normalmente até 30 km; muitas vezes circular e pensado para 2–8 horas.',
          'Marcação PR: faixas horizontais amarela + vermelha.',
          'Direcção correcta: duas faixas paralelas; mudança de direcção: marca em ângulo; caminho errado: cruz com as cores do percurso.',
          'O número aparece como PR1 LSB, PR3 VCT ou GR22: as letras depois do número indicam frequentemente o município ou a região.',
          'O Caminho de Santiago é normalmente marcado com setas amarelas e uma concha, e não apenas com marcação GR/PR.',
          'O mesmo troço pode ter várias marcações: PR, GR, Ecovia, Caminho de Santiago ou Rota Vicentina.'
        ] }
      ]
    },
    {
      id: 'where-to-find-routes',
      title: 'Onde procurar trilhos oficiais 🗺️',
      content: [
        { kind: 'paragraph', text: 'O método fiável é: primeiro a fonte oficial, depois a aplicação de navegação. Em Portugal há muitos GPX bonitos no Wikiloc/Komoot, mas alguns passam por portões privados, pontes antigas, ribeiros sazonais ou zonas pós-incêndio.' },
        { kind: 'checklist', items: [
          'ICNF — percursos em parques naturais, reservas naturais e áreas protegidas; procure mapas, PDF e restrições de acesso.',
          'FCMP — Federação de Campismo e Montanhismo de Portugal, federação associada ao registo e à homologação de percursos pedestres.',
          'Sites da Câmara Municipal: muitas vezes são a fonte mais actualizada para PDF de percursos PR, estacionamento, casas de banho e troços encerrados.',
          'VisitPortugal e sites turísticos regionais: úteis para ideias de percurso, mas verifique a data de actualização.',
          'AllTrails, Wikiloc, Komoot, Organic Maps — úteis para navegação, mas não constituem confirmação jurídica de passagem aberta.',
          'Para as ilhas, consulte os portais próprios da Madeira e dos Açores: aí há frequentemente encerramentos operacionais devido a deslizamentos de terras e meteorologia.'
        ] },
        { kind: 'warning', text: 'Se o PDF oficial tiver vários anos e os comentários recentes na aplicação falarem de vegetação cerrada, ponte colapsada ou cão de guarda numa quinta, confie nas condições recentes. A marcação no terreno é mais importante do que um trilho antigo.' }
      ]
    },
    {
      id: 'caminho-santiago',
      title: 'Caminho de Santiago Português',
      content: [
        { kind: 'paragraph', text: 'O caminho português de São Tiago não é um único percurso, mas uma rede de variantes. Os mais populares são o Caminho Central Português e o Caminho da Costa. Para expatriados, é um formato conveniente: pode fazer etapas separadas ao fim de semana, sem tirar um mês de férias.' },
        { kind: 'checklist', items: [
          'Lisboa–Santiago de Compostela: cerca de 600 km, normalmente 25–30 dias de caminhada.',
          'Porto–Santiago de Compostela pelo caminho central: cerca de 240 km, normalmente 10–12 dias de caminhada.',
          'Porto–Santiago pela variante costeira: cerca de 260–280 km, dependendo dos desvios.',
          'A Credencial do Peregrino é comprada antecipadamente numa catedral, associação de peregrinos ou albergue; nela são colocados carimbos.',
          'Para obter a Compostela é necessário percorrer pelo menos os últimos 100 km a pé ou 200 km de bicicleta e comprová-lo com carimbos.',
          'Os albergues de peregrinos são mais baratos do que hotéis, mas no verão e na Semana Santa os lugares esgotam rapidamente.',
          'No troço Porto–Valença/Tui, a infraestrutura é forte: cafés, supermercados, farmácias e comboios por perto em quase todo o caminho.'
        ] },
        { kind: 'paragraph', text: 'Se vive em Portugal, um início prático não é Lisboa, mas Porto, Barcelos, Ponte de Lima ou Valença. Assim é mais fácil testar o calçado, a mochila e o ritmo sem uma logística complicada.' }
      ]
    },
    {
      id: 'safety-season',
      title: 'Época, segurança e restrições',
      content: [
        { kind: 'paragraph', text: 'Portugal parece compacto, mas as condições nos trilhos variam muito: a húmida Serra do Gerês, o seco Alentejo, a ventosa Costa Vicentina, a pedregosa Serra da Estrela, as florestas laurissilva da Madeira. Um único conjunto de roupa não serve para todo o país.' },
        { kind: 'checklist', items: [
          'Melhores meses no continente: março–junho e setembro–novembro; no verão, muitos percursos no interior são demasiado quentes.',
          'Julho–setembro: verifique o risco de incêndio rural; com risco elevado, podem ser encerradas zonas florestais e trilhos.',
          'No inverno, na Serra da Estrela, pode haver neve, gelo, nevoeiro e estradas encerradas; é necessário equipamento de inverno.',
          'Na Madeira e nos Açores há encerramentos frequentes devido a deslizamentos de terras, chuva forte e levadas danificadas.',
          'Leve pelo menos 1,5–2 l de água por pessoa; no Alentejo e no Algarve no verão — mais.',
          'Não conte com nascentes: muitas bicas não são verificadas como água potável.',
          'Cães em quintas são um problema real; não entre por portões fechados e não encurte caminho através de quintas.',
          'O número de emergência é 112; na montanha, descarregue antecipadamente um mapa offline e informe pessoas próximas sobre o percurso.'
        ] },
        { kind: 'warning', text: 'Durante a época de caça, normalmente outono–inverno, podem ocorrer batidas em PR/GR rurais. Se vir placas de caça, batedores ou ouvir tiros — volte para trás ou confirme com pessoas locais uma alternativa segura.' }
      ]
    },
    {
      id: 'how-to-plan',
      title: 'Como planear uma caminhada sem surpresas',
      content: [
        { kind: 'substeps', items: [
          { id: 'choose-route', title: '1. Escolha o percurso pelo nível, não pelas fotografias', content: [
            { kind: 'paragraph', text: 'Veja a distância, o desnível acumulado, o tipo de piso e os escape points. 14 km num passadiço plano e 14 km em pedras no Gerês são caminhadas diferentes.' }
          ] },
          { id: 'download-track', title: '2. Descarregue o GPX e o PDF', content: [
            { kind: 'paragraph', text: 'Guarde o trilho offline no telemóvel e, separadamente, o PDF com a descrição. Nos vales e na costa há muitas vezes rede, mas nos parques naturais ela é instável.' }
          ] },
          { id: 'check-transport', title: '3. Verifique o transporte', content: [
            { kind: 'paragraph', text: 'Os PR são muitas vezes circulares e convenientes de carro. Os GR são lineares: verifique antecipadamente Comboios de Portugal, Rede Expressos, autocarros locais ou táxis até ao ponto de partida/chegada.' }
          ] },
          { id: 'start-early', title: '4. Comece cedo', content: [
            { kind: 'paragraph', text: 'Em Portugal, o calor e o sol são mais importantes do que a quilometragem. No verão, uma estratégia normal é começar às 7:00–8:00 e terminar antes do pico do dia.' }
          ] }
        ] }
      ]
    },
    {
      id: 'gear-etiquette',
      title: 'Equipamento e regras de conduta',
      content: [
        { kind: 'checklist', items: [
          'Calçado: sapatilhas de trekking com boa sola; para pedra e levadas molhadas, é melhor não usar ténis urbanos.',
          'Navegação: mapa offline, GPX, power bank; um esquema em papel é útil nos parques nacionais.',
          'Sol: protector SPF 30–50, boné, óculos; mesmo em abril é possível apanhar escaldão em 2 horas.',
          'Água e comida: nem todas as aldeias têm café aberto, especialmente aos domingos e na época baixa.',
          'Roupa: camada contra vento e chuva; na costa, o tempo muda mais depressa do que na cidade.',
          'Leve o lixo consigo; normalmente não há contentores no trilho.',
          'Não apanhe plantas nem saia do trilho em dune systems, zonas protegidas e áreas de nidificação.',
          'Feche as cancelas atrás de si: muitos percursos atravessam pastagens.',
          'Tenha cuidado com drones: em protected areas e perto de pessoas/praias aplicam-se restrições da ANAC e regras do território.'
        ] },
        { kind: 'paragraph', text: 'Para um PR de um dia, o orçamento é quase zero: transporte, comida e estacionamento. Para o Caminho de Santiago, conte com 25–60 € por dia com albergue/cafés e 70–120 € por dia com guesthouses e restaurantes.' }
      ]
    }
  ],
  costs: [
    { label: 'PR de um dia sem aluguer de carro', amountEURMin: 5, amountEURMax: 25, note: 'Comboio/autocarro, café, água, lanche; se o início for perto de casa — quase gratuito.' },
    { label: 'Noite em albergue no Caminho', amountEURMin: 8, amountEURMax: 20, note: 'Os albergues municipais e de peregrinos são normalmente mais baratos do que os privados; os preços dependem da época.' },
    { label: 'Dia no Caminho de Santiago', amountEURMin: 25, amountEURMax: 60, note: 'Modo económico: albergue, menu do dia, supermercado, lavandaria quando necessário.' },
    { label: 'Equipamento básico de principiante', amountEURMin: 80, amountEURMax: 250, note: 'Calçado, mochila de 20–30 l, impermeável, cantis, lanterna, estojo de primeiros socorros; sem tenda nem saco-cama.' }
  ],
  sources: [
    { title: 'ICNF — áreas naturais, percursos e restrições de acesso', url: 'https://www.icnf.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Federação de Campismo e Montanhismo de Portugal — pedestrianismo e percursos', url: 'https://www.fcmp.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'VisitPortugal — Caminhos de Santiago em Portugal', url: 'https://www.visitportugal.com/pt-pt/content/caminhos-de-santiago', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ANAC — regras de utilização de drones em Portugal', url: 'https://www.anac.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
