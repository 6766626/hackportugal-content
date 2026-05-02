export default {
  editorialVoice: 'hackportugal',
  id: 'ar-condicionado-historia-classe',
  categoryId: 'daily_life',
  title: 'Classe de eficiência energética dos aparelhos: A++ vs A — o que comprar',
  tldr: 'Em 2026, as antigas classes A+, A++, A+++ já não podem ser lidas como “melhor do que A”: para frigoríficos, máquinas de lavar roupa, máquinas de lavar loiça, televisores e lâmpadas aplica-se a nova escala da UE A–G, em que A é o máximo. Um frigorífico antigo A++ pode ser um novo E/F. A diferença de preço entre A/B e D/E é muitas vezes de 50%, mas com a electricidade em Portugal por volta de 0,20–0,25 €/kWh, a poupança num frigorífico, máquina de secar ou ar condicionado pode chegar a 100–300 €/ano. Veja kWh/ano, o código QR EPREL e a etiqueta energética obrigatória.',
  tags: ['energia', 'a++', 'eletrodomésticos', 'dgeg'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'new-scale',
      title: '1. Esqueça a lógica “A++ é melhor do que A”',
      content: [
        { kind: 'paragraph', text: 'Na UE, a antiga escala com sinais de mais foi gradualmente substituída por uma escala simples A–G. No novo sistema, A é a classe mais eficiente e G a pior. Já não há sinais de mais nas categorias que foram revistas.' },
        { kind: 'paragraph', text: 'A principal armadilha nas lojas e no OLX/Facebook Marketplace: um A++ antigo não equivale a um A novo. Para frigoríficos, arcas congeladoras, máquinas de lavar roupa, máquinas de lavar e secar, máquinas de lavar loiça, televisores/monitores e fontes de luz, a nova etiqueta energética mostra A–G e um código QR para a base de dados EPREL.' },
        { kind: 'checklist', items: [
          'O novo A é realmente a classe de topo, muitas vezes cara e rara.',
          'O novo B/C costuma ser o melhor equilíbrio entre preço e consumo.',
          'O novo D/E é aceitável para uma compra económica, mas faça as contas aos kWh.',
          'O antigo A+++ corresponde frequentemente, de forma aproximada, ao novo C/D, mas nem sempre.',
          'O antigo A++ pode acabar por ser um novo D/E/F — verifique o modelo.',
          'O antigo A+ para um frigorífico ou máquina de lavar roupa em 2026 é, normalmente, um mau sinal.',
          'Se a etiqueta não tiver código QR EPREL numa categoria em que deve existir, peça a ficha do produto ou não compre.'
        ] },
        { kind: 'warning', text: 'Para ar condicionado, a transição é mais complexa: no mercado português ainda se encontram etiquetas do formato antigo A+++–D para alguns aparelhos de ar condicionado. Por isso, compare não a letra, mas o SEER/SCOP e o consumo anual em kWh indicado na etiqueta. Não compare directamente um A++ de um ar condicionado com um A de um frigorífico ou de uma máquina de lavar roupa.' }
      ]
    },
    {
      id: 'read-label',
      title: '2. Como ler a etiqueta energética na Worten, MediaMarkt e Leroy Merlin',
      content: [
        { kind: 'paragraph', text: 'A letra da classe é um filtro rápido, mas a decisão deve ser tomada com base no consumo. Na etiqueta existe sempre um indicador numérico: kWh/ano, kWh/100 ciclos ou kWh/1000 horas. É isso que se transforma nas suas facturas da EDP, Galp, Iberdrola, Endesa ou Goldenergy.' },
        { kind: 'checklist', items: [
          'Frigorífico/arca congeladora: veja kWh/ano, volume em litros e ruído em dB.',
          'Máquina de lavar roupa: kWh/100 ciclos Eco 40–60, consumo de água/ciclo, capacidade em kg.',
          'Máquina de lavar loiça: kWh/100 ciclos Eco, litros de água, duração do programa Eco.',
          'Máquina de secar roupa: kWh/100 ciclos; a bomba de calor é quase sempre mais vantajosa do que a de condensação.',
          'Televisor: kWh/1000 horas para SDR e, separadamente, HDR — o HDR pode consumir bastante mais.',
          'Ar condicionado: veja o SEER para arrefecimento, o SCOP para aquecimento, kWh/ano e a zona climática.',
          'Ruído: num apartamento com mau isolamento acústico em Portugal, a diferença entre 39 dB e 45 dB à noite é mais importante do que parece.',
          'Tamanho: um frigorífico ou ar condicionado demasiado grande anula a poupança de uma classe elevada.'
        ] },
        { kind: 'paragraph', text: 'Se comprar online, o vendedor é obrigado a mostrar a classe de eficiência energética e a ficha de informação do produto junto ao preço. Para modelos novos, procure o código QR: este leva à base de dados europeia EPREL, onde pode verificar os parâmetros oficiais.' }
      ]
    },
    {
      id: 'money',
      title: '3. Fazer as contas: quando é que A/B compensa',
      content: [
        { kind: 'paragraph', text: 'Em Portugal, a electricidade doméstica em 2026 fica normalmente por cerca de 0,20–0,25 €/kWh com tarifa, tarifas de acesso às redes e IVA, mas o preço exacto depende da potência contratada, da tarifa simples/bi-horário e do fornecedor. Para uma estimativa rápida, multiplique a diferença de kWh por ano por 0,23 €.' },
        { kind: 'checklist', items: [
          'Fórmula: poupança anual = diferença em kWh × o seu preço por kWh.',
          'Se o aparelho custa mais 200 € e poupa 80 €/ano — o retorno é de 2,5 anos.',
          'Se o aparelho custa mais 400 € e poupa 40 €/ano — o retorno é de 10 anos, muitas vezes não compensa.',
          'O frigorífico funciona 24/7: a classe é quase sempre importante.',
          'A máquina de secar e o ar condicionado podem gerar a maior poupança se forem usados com frequência.',
          'A máquina de lavar roupa e a máquina de lavar loiça demoram mais a compensar se as usar 2–3 vezes por semana.',
          'Para um apartamento arrendado por 1 ano, não pague a mais por um A de topo se não levar o aparelho consigo.',
          'Para casa própria por 5–10 anos, escolha pelo menos B/C onde o orçamento permitir.'
        ] },
        { kind: 'paragraph', text: 'Exemplo: um frigorífico D consome 220 kWh/ano, um B semelhante — 120 kWh/ano. Diferença de 100 kWh × 0,23 € = 23 €/ano. Um acréscimo de preço de 250 € será recuperado em cerca de 11 anos — duvidoso. Já um ar condicionado antigo ou uma máquina de secar podem diferir em 500–1000 kWh/ano: isso já são 115–230 €/ano.' }
      ]
    },
    {
      id: 'what-to-buy',
      title: '4. O que comprar por categoria em 2026',
      content: [
        { kind: 'substeps', items: [
          { id: 'fridge', title: 'Frigorífico e arca congeladora', content: [
            { kind: 'paragraph', text: 'Escolha um novo B/C se o preço for razoável. O A é bom, mas muitas vezes o acréscimo de preço não se recupera. Para arrendamento e apartamento pequeno, um D é aceitável se o consumo estiver dentro de kWh/ano razoáveis e o aparelho for novo.' },
            { kind: 'warning', text: 'Não compre um frigorífico antigo A+/A++ “barato” sem verificar os kWh/ano. Em Portugal, o calor e as cozinhas sem climatização tornam os frigoríficos antigos especialmente gastadores.' }
          ] },
          { id: 'washer-dishwasher', title: 'Máquina de lavar roupa e máquina de lavar loiça', content: [
            { kind: 'paragraph', text: 'Para uma família, B/C com boa capacidade são vantajosos. Para uma pessoa, a diferença entre B e D pode ser inferior a 20–40 €/ano, por isso a garantia, o ruído e a assistência são mais importantes.' }
          ] },
          { id: 'dryer', title: 'Máquina de secar roupa', content: [
            { kind: 'paragraph', text: 'Se precisar regularmente de uma máquina de secar no Inverno num apartamento húmido em Lisboa, Porto ou Braga, escolha um modelo com bomba de calor. É mais caro, mas a poupança pode chegar a três dígitos por ano.' }
          ] },
          { id: 'ac', title: 'Ar condicionado / bomba de calor', content: [
            { kind: 'paragraph', text: 'Para ar condicionado, veja o SEER/SCOP, e não apenas a letra. Em Portugal, um split com inverter e SCOP elevado é muitas vezes vantajoso também como aquecimento: fica mais barato de utilizar do que um radiador a óleo ou um aquecedor eléctrico barato.' },
            { kind: 'warning', text: 'A instalação de um sistema split deve ser feita por um instalador certificado; para equipamentos com gases fluorados, são importantes os documentos, a garantia e a instalação certificada. Antes de comprar para uma casa arrendada, obtenha autorização por escrito do senhorio e, se necessário, do condomínio.' }
          ] },
          { id: 'tv', title: 'Televisor', content: [
            { kind: 'paragraph', text: 'Para a TV, a classe é menos importante do que o tamanho e o brilho. Um ecrã grande de 65–75″ pode consumir muito mais, mesmo que a classe seja razoável. Veja kWh/1000 h SDR/HDR.' }
          ] }
        ] }
      ]
    },
    {
      id: 'documents-and-checks',
      title: '5. Documentos, garantia e verificação antes de pagar',
      content: [
        { kind: 'paragraph', text: 'Em Portugal, um produto novo para consumidor tem normalmente uma garantia legal de 3 anos. Para um produto usado comprado a um vendedor profissional, o prazo pode ser reduzido por acordo, mas não abaixo do mínimo legal. Ao comprar a um particular no OLX, essa protecção praticamente não existe.' },
        { kind: 'checklist', items: [
          'Peça fatura com NIF — sem factura é mais difícil accionar a garantia e devolver.',
          'Verifique a etiqueta energética e a ficha do produto antes de pagar.',
          'Digitalize o código QR EPREL, se existir na etiqueta.',
          'Compare kWh, não apenas a letra da classe.',
          'Verifique as dimensões: as cozinhas portuguesas são frequentemente estreitas e os elevadores pequenos.',
          'Confirme a entrega até ao apartamento, não apenas até à entrada do prédio.',
          'Confirme a recolha do equipamento antigo — remoção do aparelho antigo.',
          'Para ar condicionado, obtenha orçamento de instalação por escrito.',
          'Verifique se a instalação está incluída na garantia e quem responde por fugas de gás/drenagem.',
          'Não acredite num anúncio “classe A++ poupa 70%” se não houver etiqueta oficial.'
        ] },
        { kind: 'warning', text: 'O certificado energético da ADENE/DGEG refere-se a edifícios e anúncios de venda/arrendamento de imóveis, não a frigoríficos ou máquinas de lavar roupa. Para electrodomésticos, o obrigatório é a etiqueta energética da UE e a ficha de informação do produto; para ar condicionado, a instalação certificada também é importante.' }
      ]
    }
  ],
  costs: [
    { label: 'Referência do preço da electricidade para cálculo', amountEURMin: 0.20, amountEURMax: 0.25, note: '€/kWh para cliente doméstico com impostos; verifique o seu contrato de eletricidade' },
    { label: 'Acréscimo de preço típico pela classe A/B em vez de D/E', amountEURMin: 150, amountEURMax: 600, note: 'Depende da categoria: menor no frigorífico, maior na máquina de secar e no ar condicionado' },
    { label: 'Poupança potencial num aparelho de elevado consumo energético', amountEURMin: 100, amountEURMax: 300, note: 'Por ano com uso frequente da máquina de secar, de um frigorífico antigo ou de ar condicionado; calcule pelos kWh' },
    { label: 'Remoção do aparelho antigo na entrega', amountEURMin: 0, amountEURMax: 30, note: 'Em muitas cadeias é gratuita ou mediante uma pequena taxa na compra de equipamento novo' }
  ],
  sources: [
    {
      title: 'DGEG: eficiência energética, etiquetas e informação ao consumidor',
      url: 'https://www.dgeg.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DECO PROteste: guia prático sobre etiqueta energética e escolha de eletrodomésticos',
      url: 'https://www.deco.proteste.pt',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Comissão Europeia: etiquetas energéticas da UE e base de dados de produtos EPREL',
      url: 'https://energy-efficient-products.ec.europa.eu/ecodesign-and-energy-label/energy-label-and-ecodesign/product-database_en',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Regulamento (UE) 2017/1369: quadro da rotulagem energética',
      url: 'https://eur-lex.europa.eu/legal-content/PT/TXT/?uri=CELEX:32017R1369',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
