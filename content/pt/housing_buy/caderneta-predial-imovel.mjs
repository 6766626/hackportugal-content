export default {
  editorialVoice: 'hackportugal',
  id: 'caderneta-predial-imovel',
  categoryId: 'housing_buy',
  title: 'Caderneta Predial — o passaporte fiscal do imóvel emitido pelas Finanças',
  tldr: 'A Caderneta Predial é uma certidão fiscal gratuita de um imóvel no Portal das Finanças. Mostra o artigo matricial, o proprietário para efeitos de IMI, a morada, as áreas, o tipo urbano/rústico, o VPT e os dados usados para calcular o IMI. É necessária em compras, vendas, crédito habitação, litígios com senhorio/vizinho, verificação de áreas e imposto. Online, descarrega-se em 2–5 minutos com o NIF do proprietário; não substitui a certidão permanente do registo predial da Conservatória.',
  tags: ['finanças', 'imóvel', 'imi', 'compra'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que é a Caderneta Predial',
      content: [
        { kind: 'paragraph', text: 'A Caderneta Predial, ou caderneta predial urbana/rústica, é a ficha fiscal do imóvel na Autoridade Tributária e Aduaneira através do Portal das Finanças. É o registo da matriz predial: a forma como as Finanças veem o imóvel para efeitos de IMI, avaliação do VPT e notificações fiscais.' },
        { kind: 'checklist', items: [
          'artigo matricial — o principal identificador fiscal do imóvel',
          'distrito, concelho, freguesia e morada',
          'tipo de imóvel: urbano, rústico ou misto',
          'fração autónoma, se for um apartamento em condomínio',
          'titular ou titulares — proprietário/copropietários na base fiscal',
          'área total, área de implantação, área bruta privativa, área bruta dependente',
          'afetação: habitação, comércio, serviços, estacionamento, etc.',
          'VPT — Valor Patrimonial Tributário, o valor fiscal',
          'ano de inscrição na matriz e dados da avaliação',
          'elementos de cálculo do VPT: localização, qualidade/conforto, vetustez'
        ] },
        { kind: 'warning', text: 'A Caderneta Predial não prova a propriedade da mesma forma que o registo predial. Para uma transação, crédito habitação e verificação de ónus, é necessária a certidão permanente do registo predial da Conservatória/IRN. Se os dados das Finanças e da Conservatória divergirem, isso é um sinal de alerta para o advogado.' }
      ]
    },
    {
      id: 'why-needed',
      title: 'Porque é necessária ao comprador, proprietário e arrendatário',
      content: [
        { kind: 'paragraph', text: 'Para o proprietário, a Caderneta Predial é o documento base do IMI. Para o comprador, é uma forma rápida de perceber exatamente o que está a ser vendido: apartamento, garagem, arrecadação, terreno, fração separada ou parte de um prédio. Para o arrendatário, o documento é útil se for necessário verificar a morada, o proprietário, a finalidade do espaço ou uma área contestada.' },
        { kind: 'checklist', items: [
          'compra de imóvel: confirmar o artigo matricial com o contrato-promessa e a escritura',
          'venda: o notário, o banco e o agente pedirão uma caderneta atualizada',
          'crédito habitação: o banco utiliza os dados do imóvel e o VPT no pacote de due diligence',
          'IMI: perceber a partir de que VPT o imposto é calculado',
          'litígio sobre área: comparar a área bruta privativa com os metros reais',
          'condomínio: verificar a fração e a afetação do estacionamento/arrecadação',
          'arrendamento: confirmar que o imóvel está registado como habitação, e não como comércio/serviços',
          'herança ou divórcio: identificar o identificador fiscal do património',
          'remodelação: ver se os dados foram atualizados depois de obras/licença',
          'verificação de terreno rural: perceber se é rústico ou urbano e qual o artigo indicado'
        ] },
        { kind: 'paragraph', text: 'Em 2026, o IMI dos imóveis urbanos é geralmente calculado como VPT × taxa da Câmara Municipal: 0,3–0,45% para prédios urbanos. Para prédios rústicos, a taxa base do CIMI é 0,8%. Por isso, um VPT antigo ou inflacionado afeta diretamente o imposto anual.' }
      ]
    },
    {
      id: 'how-to-download',
      title: 'Como descarregar gratuitamente no Portal das Finanças 💻',
      content: [
        { kind: 'paragraph', text: 'O proprietário do imóvel ou o seu representante com acesso ao NIF pode descarregar o documento. É necessário iniciar sessão no Portal das Finanças: NIF + palavra-passe, Chave Móvel Digital (CMD) ou Cartão de Cidadão com leitor/app.' },
        { kind: 'checklist', items: [
          'Abra portaldasfinancas.gov.pt',
          'Inicie sessão através de Iniciar Sessão',
          'Na pesquisa do portal, escreva “património predial” ou “caderneta predial”',
          'Abra a secção Consultar Património Predial / Prédios',
          'Escolha o prédio ou a fração pretendidos na lista de imóveis',
          'Clique em obter comprovativo / caderneta predial',
          'Descarregue o PDF e guarde-o com a data no nome do ficheiro',
          'Verifique se no PDF coincidem morada, artigo, fração e titular',
          'Para uma transação, envie apenas uma versão recente, descarregada antes da assinatura do CPCV/escritura'
        ] },
        { kind: 'paragraph', text: 'A certidão online através do Portal das Finanças é gratuita. Se não tiver acesso ao NIF de um familiar falecido, ex-cônjuge ou vendedor, peça ao proprietário que descarregue o PDF ou faça o pedido através de notário/advogado/solicitador no âmbito da transação.' }
      ]
    },
    {
      id: 'how-to-read',
      title: 'Como ler os campos principais sem advogado',
      content: [
        { kind: 'substeps', items: [
          { id: 'artigo', title: 'Artigo matricial', content: [
            { kind: 'paragraph', text: 'É o número fiscal do imóvel dentro da freguesia. Nos documentos, aparece normalmente como prédio urbano/rústico, artigo X, fração Y. Numa transação, o artigo deve coincidir na Caderneta Predial, na certidão permanente, na licença de utilização e no contrato.' }
          ] },
          { id: 'classification', title: 'Urbano, rústico ou misto', content: [
            { kind: 'paragraph', text: 'Urbano — imóvel urbano: apartamento, casa, garagem, loja. Rústico — terreno rural. Misto — imóvel com parte urbana e parte rústica. Na compra de terrenos, isto é crítico: a possibilidade de construção não resulta apenas da caderneta, tem de ser verificada na Câmara Municipal através do PDM, licença e certidão.' }
          ] },
          { id: 'areas', title: 'Áreas', content: [
            { kind: 'paragraph', text: 'Área bruta privativa — a área privativa principal do apartamento/casa. Área bruta dependente — espaços dependentes: garagem, arrecadação, sótão, zonas técnicas. Os “100 m²” anunciados no Idealista podem não coincidir com a área fiscal.' }
          ] },
          { id: 'vpt', title: 'VPT', content: [
            { kind: 'paragraph', text: 'Valor Patrimonial Tributário — não é o preço de mercado, mas sim o valor fiscal. Um apartamento pode ser vendido por 450 000 €, mas ter um VPT de 180 000 €. O IMI é calculado sobre o VPT, não sobre o preço de compra.' }
          ] }
        ] }
      ]
    },
    {
      id: 'red-flags',
      title: 'Sinais de alerta antes de comprar ou de iniciar um litígio',
      content: [
        { kind: 'warning', text: 'Não assine o CPCV nem transfira o sinal apenas com base na Caderneta Predial. Ela não mostra hipoteca, penhora, usufruto, servidões nem parte das restrições jurídicas. Para isso, é necessária a certidão permanente do registo predial e a verificação por um advogado.' },
        { kind: 'checklist', items: [
          'na Caderneta consta um titular, mas quem vende é outra pessoa',
          'a morada é parecida, mas o artigo ou a fração não coincidem com a certidão permanente',
          'o apartamento é vendido com garagem, mas a garagem não consta como fração/parte comum/área dependente',
          'o imóvel é anunciado como T2, mas a afetação ou as áreas parecem escritório/serviços',
          'depois de uma ampliação, fecho de varanda ou conversão do sótão em quarto, os dados não foram atualizados',
          'o terreno é vendido “para construção”, mas a caderneta é apenas rústica',
          'o VPT é muito antigo e o vendedor promete “IMI baixo para sempre”',
          'há divergência entre a morada fiscal e a morada real',
          'num prédio misto, não é claro que parte é urbana e que parte é rústica',
          'o vendedor recusa fornecer um PDF recente do Portal das Finanças'
        ] },
        { kind: 'paragraph', text: 'Se já é proprietário e vê um erro na área, afetação ou titular, a correção faz-se normalmente através das Finanças com o Modelo 1 do IMI, documentos da Câmara Municipal, escritura e/ou registo predial. A correção pode alterar o VPT e o IMI futuro — por vezes para baixo, por vezes para cima.' }
      ]
    },
    {
      id: 'vpt-imi-update',
      title: 'VPT, IMI e quando pedir uma reavaliação',
      content: [
        { kind: 'paragraph', text: 'O VPT influencia o IMI, o IMT em algumas operações e cálculos fiscais. O proprietário pode pedir atualização/reavaliação através do Modelo 1 do IMI, mas normalmente não mais do que uma vez a cada 3 anos. Não é um desconto automático: se os coeficientes tiverem mudado desfavoravelmente, o VPT pode subir.' },
        { kind: 'checklist', items: [
          'verifique o ano da avaliação na caderneta',
          'compare o VPT com a lógica fiscal atual e a taxa de IMI da sua Câmara Municipal',
          'se o imóvel for antigo, o coeficiente de vetustez por vezes reduz o VPT',
          'se a zona valorizou no zonamento, a reavaliação pode aumentar o VPT',
          'antes do Modelo 1 do IMI, peça uma simulação a um contabilista/solicitador',
          'depois de obras, licença de utilização ou alteração de área, a atualização pode ser obrigatória',
          'as taxas de IMI por município são publicadas anualmente; em 2026, a referência para urbanos é 0,3–0,45%'
        ] },
        { kind: 'paragraph', text: 'Cálculo simples: se o VPT for 200 000 € e a taxa de IMI no município for 0,35%, o IMI anual será cerca de 700 €. Se, após a reavaliação, o VPT passar para 170 000 €, o IMI à mesma taxa será cerca de 595 €.' }
      ]
    }
  ],
  costs: [
    { label: 'Descarregamento da Caderneta Predial no Portal das Finanças', amountEUR: 0, note: 'Gratuito para o proprietário/representante com acesso ao NIF.' },
    { label: 'Referência de IMI para prédio urbano', amountEURMin: 0, amountEURMax: 0, note: 'Não é um valor fixo: normalmente VPT × 0,3–0,45% por ano, com taxa dependente da Câmara Municipal.' },
    { label: 'Referência de IMI para prédio rústico', amountEURMin: 0, amountEURMax: 0, note: 'Não é um valor fixo: segundo o CIMI, a taxa base é 0,8% do VPT.' }
  ],
  sources: [
    { title: 'Portal das Finanças — apoio ao contribuinte e serviços de património predial', url: 'https://info.portaldasfinancas.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal das Finanças — acesso aos serviços online da Autor Tributária', url: 'https://www.portaldasfinancas.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código do Imposto Municipal sobre Imóveis (CIMI) — taxas de IMI e regras do VPT', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2003-34577875', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
