export default {
  editorialVoice: 'hackportugal',
  id: 'reciclagem-oee-electronica',
  categoryId: 'daily_life',
  title: 'Reciclagem de eletrónica OEE/REEE: onde entregar telemóvel, portátil, televisão',
  tldr: 'Em Portugal, a eletrónica antiga não pode ser deitada no lixo indiferenciado nem nos ecopontos comuns. OEE/EEE, depois de usado, torna-se REEE e é entregue gratuitamente: na Worten/Continente e noutros vendedores, ao comprar um equipamento equivalente aplica-se a retoma 1-for-1; a pequena eletrónica até 25 cm é aceite por grandes lojas sem compra; também há ecocentros da Câmara Municipal, pontos Electrão e ERP Portugal. Entregue pilhas e baterias separadamente no pilhão.',
  tags: ['reciclagem', 'reee', 'eletrónica', 'pilhão'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-counts',
      title: 'O que conta como OEE/REEE',
      content: [
        { kind: 'paragraph', text: 'Em Portugal, o termo para equipamentos elétricos e eletrónicos é EEE/OEE; os resíduos depois de utilizados são REEE. Praticamente tudo o que funciona ligado à tomada, com pilhas, bateria, USB ou painel solar deve ser entregue separadamente do lixo comum.' },
        { kind: 'checklist', items: [
          'Telemóveis, tablets, portáteis, monitores, televisões',
          'Carregadores, cabos, routers, auscultadores, teclados, ratos',
          'Pequenos eletrodomésticos: secador, ferro de engomar, liquidificadora, torradeira, máquina de barbear elétrica',
          'Grandes eletrodomésticos: frigorífico, máquina de lavar roupa, forno, ar condicionado',
          'Brinquedos e gadgets com pilhas ou fio',
          'Lâmpadas e luminárias LED — entregar separadamente, não no vidro',
          'Cartuchos e toners — normalmente há contentores separados em lojas/escritórios',
          'Pilhas e baterias amovíveis — não juntamente com o aparelho, se for possível retirá-las em segurança'
        ] },
        { kind: 'warning', text: 'Não coloque eletrónica no ecoponto verde/azul/amarelo: estes contentores são para vidro, papel e embalagens. Os REEE só são aceites em pontos de recolha especiais, ecocentros ou vendedores de equipamentos.' }
      ]
    },
    {
      id: 'retail-takeback',
      title: 'Lojas: Worten, Continente e a regra 1-for-1',
      content: [
        { kind: 'paragraph', text: 'Ao comprar um equipamento novo, o vendedor é obrigado a aceitar gratuitamente o equipamento antigo do mesmo tipo e finalidade — esquema “1 por 1”. Isto funciona em lojas de eletrónica, hipermercados com secção de eletrodomésticos/eletrónica e em entregas online, se selecionar/pedir antecipadamente a recolha do equipamento usado.' },
        { kind: 'checklist', items: [
          'Compra uma televisão nova — pode entregar gratuitamente a televisão antiga',
          'Compra um portátil — entrega o portátil antigo ou um equipamento equivalente',
          'Na entrega de grandes eletrodomésticos em casa, assinale antecipadamente “recolha do antigo” ou contacte o apoio ao cliente',
          'O equipamento deve estar desligado, descongelado/seco, sem objetos pessoais nem lixo no interior',
          'A loja não é obrigada a recolher equipamentos de outro tipo ao abrigo da regra 1-for-1',
          'A pequena eletrónica até 25 cm é aceite gratuitamente, mesmo sem compra, por grandes lojas de EEE com área de venda a partir de 400 m²',
          'Na Worten, existem frequentemente caixas/pontos de recolha para cabos, telemóveis, pilhas e pequenos equipamentos',
          'No Continente, procure o pilhão e as zonas de recolha; para grandes eletrodomésticos, é mais simples entregar através da entrega de uma nova compra'
        ] },
        { kind: 'warning', text: 'Não deixe uma televisão ou um frigorífico à porta da loja sem registar a entrega. Isto pode ser considerado abandono de resíduos; use o balcão de atendimento ao cliente ou uma recolha formalizada.' }
      ]
    },
    {
      id: 'collection-points',
      title: 'Onde encontrar o ponto de recolha mais próximo',
      content: [
        { kind: 'paragraph', text: 'Se não vai comprar nada, use a rede de pontos Electrão, ERP Portugal ou os ecocentros municipais. Nos sites dos operadores há mapas: introduza o concelho/código postal e escolha o tipo de resíduo — REEE, pilhas, lâmpadas.' },
        { kind: 'substeps', items: [
          { id: 'electrao', title: 'Pontos Electrão', content: [
            { kind: 'paragraph', text: 'A Electrão gere uma rede de pontos para eletrónica, pilhas e lâmpadas. Podem ser lojas, escolas, empresas, juntas, ecocentros e campanhas temporárias.' }
          ] },
          { id: 'erp', title: 'ERP Portugal', content: [
            { kind: 'paragraph', text: 'A ERP Portugal também publica um mapa onde reciclar. É útil pesquisar separadamente REEE, pilhas e baterias, porque nem todos os pontos aceitam todas as categorias.' }
          ] },
          { id: 'municipal', title: 'Câmara Municipal / ecocentro', content: [
            { kind: 'paragraph', text: 'Para grandes eletrodomésticos sem comprar um novo, normalmente o melhor é o ecocentro do seu município. Algumas câmaras disponibilizam recolha de monos/monstros ao domicílio mediante marcação: telefone para a Câmara Municipal ou consulte “recolha de resíduos volumosos”.' }
          ] }
        ] }
      ]
    },
    {
      id: 'batteries-lamps-data',
      title: 'Pilhas, lâmpadas e dados pessoais',
      content: [
        { kind: 'paragraph', text: 'Em Portugal, as pilhas e baterias são recolhidas separadamente através do pilhão — pequenos contentores em supermercados, escolas, lojas de eletrónica e ecocentros. Se a bateria for amovível, retire-a e entregue-a no pilhão; se for integrada, entregue o aparelho inteiro como REEE.' },
        { kind: 'checklist', items: [
          'No telemóvel: faça backup, termine sessão no iCloud/Google, elimine o eSIM, faça factory reset',
          'No portátil: encripte o disco ou faça secure erase antes da entrega',
          'Retire SIM, microSD, pens USB e tokens bancários',
          'Para HDD/SSD antigos com dados sensíveis, use software wipe ou destruição física por um especialista',
          'Não deite lâmpadas no ecoponto de vidro: especialmente fluorescentes e lâmpadas económicas contêm substâncias que exigem reciclagem separada',
          'Não coloque baterias de lítio danificadas ou inchadas num pilhão comum: pergunte no ecocentro ou na loja como aceitar uma bateria danificada em segurança',
          'Isole os contactos das baterias de lítio com fita isoladora se as entregar separadamente',
          'Não desmonte frigoríficos, aparelhos de ar condicionado nem ecrãs por conta própria'
        ] },
        { kind: 'warning', text: 'O ponto de recolha não garante a destruição dos seus dados. A reciclagem de REEE é reciclagem, não um serviço de cyber security. A responsabilidade pela eliminação dos dados continua a ser do proprietário.' }
      ]
    },
    {
      id: 'practical-scenarios',
      title: 'Cenários rápidos para o expat',
      content: [
        { kind: 'checklist', items: [
          'Telemóvel antigo: backup → reset → retirar SIM/desassociar eSIM → entregar na Worten/ponto Electrão/ERP; bateria separadamente só se for amovível',
          'Portátil: wipe/repor → entregar numa loja com caixa de REEE ou num ecocentro; o carregador pode ser entregue juntamente',
          'Televisão: ao comprar uma nova, pedir recolha 1-for-1; sem compra — ecocentro ou recolha de volumosos pela Câmara',
          'Frigorífico/máquina de lavar roupa: o melhor é tratar da recolha aquando da entrega do equipamento novo; caso contrário, telefonar para a Câmara Municipal',
          'Cabos e carregadores: pequenos REEE, entregar em contentores de lojas ou pontos Electrão/ERP',
          'Pilhas AA/AAA/botão: pilhão no supermercado, escola, loja de eletrónica ou ecocentro',
          'Lâmpadas LED/fluorescentes: contentor para lâmpadas, não vidro',
          'Se não tiver a certeza: procure no mapa da Electrão/ERP pelo código postal e filtre por tipo de resíduo'
        ] },
        { kind: 'paragraph', text: 'Ao sair de uma casa, não deixe eletrónica junto aos contentores do lixo “para quem quiser”. Nas grandes cidades, isto cria frequentemente um problema para o condomínio e para os serviços municipais. O caminho legal é quase sempre gratuito, mas exige levar o objeto ao ponto correto ou marcar a recolha municipal.' }
      ]
    }
  ],
  costs: [
    { label: 'Entrega de REEE num ponto Electrão/ERP ou ecocentro', amountEUR: 0, note: 'Para agregados domésticos é normalmente gratuito; confirme os horários e as categorias de resíduos' },
    { label: 'Retoma 1-for-1 ao comprar equipamento novo', amountEUR: 0, note: 'Gratuito para equipamento equivalente; em caso de entrega, peça a recolha antecipadamente' },
    { label: 'Entrega de pilhas no pilhão', amountEUR: 0, note: 'Há contentores em supermercados, lojas de eletrónica, escolas e ecocentros' }
  ],
  sources: [
    { title: 'Electrão — mapa de pontos de recolha e regras de reciclagem', url: 'https://www.electrao.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ERP Portugal — onde reciclar REEE, pilhas e lâmpadas', url: 'https://www.erp-recycling.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 152-D/2017 — regime unificado dos fluxos específicos de resíduos', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/152-d-2017-114337042', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Agência Portuguesa do Ambiente — resíduos de equipamentos elétricos e eletrónicos', url: 'https://apambiente.pt/residuos/residuos-de-equipamentos-eletricos-e-eletronicos', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
