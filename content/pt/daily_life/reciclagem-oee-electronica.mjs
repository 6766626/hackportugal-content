export default {
  editorialVoice: 'hackportugal',
  id: 'reciclagem-oee-electronica',
  categoryId: 'daily_life',
  title: 'Reciclagem de eletrónica OEE/REEE: onde entregar telefone, portátil, televisor',
  tldr: 'Em Portugal, a eletrónica usada não pode ser deitada no lixo indiferenciado nem nos ecopontos comuns. Os OEE/EEE, depois de usados, tornam-se REEE e são entregues gratuitamente: na Worten/Continente e noutros vendedores, ao comprar um artigo equivalente, aplica-se o takeback 1-for-1; a eletrónica pequena até 25 cm é aceite pelas grandes lojas sem compra; também existem ecocentros da Câmara Municipal, pontos Electrão e ERP Portugal. Pilhas e baterias devem ser entregues separadamente no pilhão.',
  tags: ['reciclagem', 'reee', 'eletrónica', 'pilhão'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-counts',
      title: 'O que conta como OEE/REEE',
      content: [
        { kind: 'paragraph', text: 'Em Portugal, o termo para equipamento elétrico e eletrónico é EEE/OEE; os resíduos após utilização são REEE. Praticamente tudo o que funciona ligado à tomada, com pilha, bateria, USB ou painel solar deve ser entregue separadamente do lixo comum.' },
        { kind: 'checklist', items: [
          'Telefones, tablets, portáteis, monitores, televisores',
          'Carregadores, cabos, routers, auscultadores, teclados, ratos',
          'Pequenos eletrodomésticos: secador, ferro de engomar, liquidificador, torradeira, máquina de barbear elétrica',
          'Grandes eletrodomésticos: frigorífico, máquina de lavar roupa, forno, ar condicionado',
          'Brinquedos e gadgets com pilhas ou cabo',
          'Lâmpadas e luminárias LED — entregar separadamente, não no vidro',
          'Tinteiros e toners — normalmente em contentores próprios em lojas/escritórios',
          'Pilhas e baterias removíveis — não juntamente com o aparelho, se for possível retirá-las em segurança'
        ] },
        { kind: 'warning', text: 'Não coloque eletrónica no ecoponto verde/azul/amarelo: estes contentores são para vidro, papel e embalagens. REEE só são aceites em pontos de recolha especiais, ecocentros ou vendedores de equipamentos.' }
      ]
    },
    {
      id: 'retail-takeback',
      title: 'Lojas: Worten, Continente e a regra 1-for-1',
      content: [
        { kind: 'paragraph', text: 'Ao comprar um equipamento novo, o vendedor é obrigado a aceitar gratuitamente o equipamento antigo do mesmo tipo e finalidade — o esquema “1 por 1”. Isto funciona em lojas de eletrónica, hipermercados com secção de tecnologia e em entregas online, se selecionar/solicitar antecipadamente a recolha do equipamento usado.' },
        { kind: 'checklist', items: [
          'Compra um televisor novo — pode entregar gratuitamente o televisor antigo',
          'Compra um portátil — entrega o portátil antigo ou um dispositivo equivalente',
          'Na entrega de grandes eletrodomésticos ao domicílio, assinale previamente “recolha do antigo” ou pergunte ao apoio ao cliente',
          'O aparelho deve estar desligado, descongelado/seco, sem objetos pessoais nem lixo no interior',
          'A loja não é obrigada a recolher equipamento de outro tipo ao abrigo da regra 1-for-1',
          'A eletrónica pequena até 25 cm é aceite gratuitamente por grandes lojas de EEE com área de venda a partir de 400 m², mesmo sem compra',
          'Na Worten há frequentemente caixas/pontos de recolha para cabos, telefones, pilhas e pequenos equipamentos',
          'No Continente, procure o pilhão e as zonas de recolha; para grandes eletrodomésticos é mais simples entregar através da entrega de uma nova compra'
        ] },
        { kind: 'warning', text: 'Não deixe um televisor ou frigorífico à porta da loja sem registar a entrega. Isto pode ser considerado abandono de resíduos; utilize o balcão de atendimento ao cliente ou uma recolha formalizada.' }
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
            { kind: 'paragraph', text: 'A ERP Portugal também publica um mapa onde reciclar. É prático pesquisar separadamente REEE, pilhas e baterias, porque nem todos os pontos aceitam todas as categorias.' }
          ] },
          { id: 'municipal', title: 'Câmara Municipal / ecocentro', content: [
            { kind: 'paragraph', text: 'Para grandes eletrodomésticos sem compra de um novo, normalmente a melhor opção é o ecocentro do seu município. Algumas câmaras oferecem recolha de monos/monstros ao domicílio mediante marcação: ligue para a Câmara Municipal ou consulte “recolha de resíduos volumosos”.' }
          ] }
        ] }
      ]
    },
    {
      id: 'batteries-lamps-data',
      title: 'Pilhas, lâmpadas e dados pessoais',
      content: [
        { kind: 'paragraph', text: 'As pilhas e baterias em Portugal são recolhidas separadamente através do pilhão — pequenos contentores em supermercados, escolas, lojas de eletrónica e ecocentros. Se a bateria for removível, retire-a e entregue-a no pilhão; se for incorporada, entregue o aparelho inteiro como REEE.' },
        { kind: 'checklist', items: [
          'No telefone: faça backup, termine sessão no iCloud/Google, remova o eSIM, faça factory reset',
          'No portátil: encripte o disco ou faça secure erase antes da entrega',
          'Retire SIM, microSD, pens USB e tokens bancários',
          'Para HDD/SSD antigos com dados sensíveis, use software wipe ou destruição física por um especialista',
          'Não deite lâmpadas no ecoponto do vidro: especialmente fluorescentes e lâmpadas económicas contêm substâncias que exigem reciclagem separada',
          'Não coloque baterias de lítio danificadas ou inchadas num pilhão comum: pergunte ao ecocentro ou à loja como aceitar uma bateria danificada em segurança',
          'Isole os contactos das baterias de lítio com fita isoladora, se as entregar separadamente',
          'Não desmonte frigoríficos, aparelhos de ar condicionado nem ecrãs por conta própria'
        ] },
        { kind: 'warning', text: 'O ponto de recolha não garante a destruição dos seus dados. A reciclagem de REEE é reciclagem, não um serviço de cyber security. A responsabilidade pela eliminação dos dados continua a ser do proprietário.' }
      ]
    },
    {
      id: 'practical-scenarios',
      title: 'Cenários rápidos para expats',
      content: [
        { kind: 'checklist', items: [
          'Telefone antigo: backup → reset → retirar SIM/desassociar eSIM → entregar na Worten/ponto Electrão/ERP; pilha separadamente só se for removível',
          'Portátil: wipe/reposição → entregar numa loja com REEE box ou ecocentro; o carregador pode ser entregue juntamente',
          'Televisor: ao comprar um novo, pedir recolha 1-for-1; sem compra — ecocentro ou recolha de volumosos pela Câmara',
          'Frigorífico/máquina de lavar roupa: é melhor agendar a recolha aquando da entrega do novo equipamento; caso contrário, ligar para a Câmara Municipal',
          'Cabos e carregadores: REEE pequeno, entregar em contentores de loja ou pontos Electrão/ERP',
          'Pilhas AA/AAA/botão: pilhão no supermercado, escola, loja de eletrónica ou ecocentro',
          'Lâmpadas LED/fluorescentes: contentor para lâmpadas, não vidro',
          'Se não tiver a certeza: pesquise no mapa da Electrão/ERP por código postal e filtre o tipo de resíduo'
        ] },
        { kind: 'paragraph', text: 'Ao sair de uma casa, não deixe eletrónica junto aos contentores do lixo “para quem quiser”. Nas grandes cidades, isto cria frequentemente problemas para o condomínio e para os serviços municipais. A via legal é quase sempre gratuita, mas exige levar o objeto ao ponto correto ou marcar a recolha municipal.' }
      ]
    }
  ],
  costs: [
    { label: 'Entrega de REEE num ponto Electrão/ERP ou ecocentro', amountEUR: 0, note: 'Para agregados domésticos, normalmente é gratuito; confirme os horários e as categorias de resíduos' },
    { label: 'Takeback 1-for-1 na compra de equipamento novo', amountEUR: 0, note: 'Gratuito para equipamento equivalente; em entregas, peça a recolha antecipadamente' },
    { label: 'Entrega de pilhas no pilhão', amountEUR: 0, note: 'Há contentores em supermercados, lojas de eletrónica, escolas e ecocentros' }
  ],
  sources: [
    { title: 'Electrão — mapa de pontos de recolha e regras de reciclagem', url: 'https://www.electrao.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ERP Portugal — onde reciclar REEE, pilhas e lâmpadas', url: 'https://www.erp-recycling.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 152-D/2017 — regime unificado dos fluxos específicos de resíduos', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/152-d-2017-114337042', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Agência Portuguesa do Ambiente — resíduos de equipamentos elétricos e eletrónicos', url: 'https://apambiente.pt/residuos/residuos-de-equipamentos-eletricos-e-eletronicos', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
