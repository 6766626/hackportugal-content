export default {
  editorialVoice: 'hackportugal',
  id: 'bacalhau-escolher',
  categoryId: 'food_leisure',
  title: 'Bacalhau: como escolher, demolhar e cozinhar',
  tldr: 'O bacalhau em Portugal é bacalhau salgado e seco, não peixe fresco. Na loja, não olhe apenas para o preço, mas também para o tamanho: graúdo para postas bonitas, crescido para a cozinha do dia a dia, miúdo/jovem para bolinhos e saladas. O erro principal é demolhar pouco: peças finas precisam de 24–36 h, lombos grossos de 48–72 h no frigorífico com troca de água. Para a primeira vez, escolha o balcão com postas já cortadas ou bacalhau demolhado congelado.',
  tags: ['bacalhau', 'comida', 'mercado', 'receitas'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-bacalhau',
      title: 'O que está a comprar: não é “apenas bacalhau fresco”',
      content: [
        { kind: 'paragraph', text: 'O bacalhau português é, em regra, bacalhau salgado e seco. Não pode ser cozinhado de imediato como peixe fresco: primeiro é preciso demolhar — deixar em água fria para retirar o excesso de sal e devolver humidade à carne.' },
        { kind: 'paragraph', text: 'No supermercado há três formatos: o peixe inteiro “aberto”, postas cortadas no balcão e bacalhau demolhado congelado. Para principiantes, a opção mais segura são postas de espessura semelhante ou bacalhau demolhado congelado.' },
        { kind: 'warning', text: 'Não confunda bacalhau fresco com bacalhau salgado seco. O bacalhau fresco cozinha-se de imediato; o bacalhau salgado e seco, sem demolha, ficará demasiado salgado e rijo.' }
      ]
    },
    {
      id: 'choose-grade',
      title: 'Como escolher tamanho e qualidade no balcão',
      content: [
        { kind: 'paragraph', text: 'A categoria de tamanho influencia a espessura, o preço e a receita. Quanto maior for o peixe, melhores ficam as peças inteiras, suculentas — lombos e postas. O bacalhau mais pequeno é mais barato, mas costuma ser usado em pratos em que o peixe é desfiado em lascas.' },
        { kind: 'checklist', items: [
          'Graúdo — bacalhau grande, normalmente com cerca de 2–4 kg: boa escolha para postas, forno, consoada, bacalhau com todos.',
          'Crescido — tamanho médio, cerca de 1–2 kg: versátil para à Brás, à Gomes de Sá, saladas, forno.',
          'Miúdo — pequeno, normalmente até 1 kg: mais barato, mais fino, demolha mais depressa; melhor para pataniscas, bolinhos, açorda.',
          'Jovem — bacalhau “jovem”/pequeno: sabor mais suave, lascas menos carnudas; escolha para pratos do dia a dia, não para lombos festivos.',
          'Lombo — a parte dorsal mais grossa: mais cara, mas dá peças bonitas e suculentas.',
          'Posta — corte transversal; é prático comprar no balcão para que todas as peças tenham a mesma espessura.',
          'Desfiado / lascas — já separado em lascas: prático para à Brás, mas é fácil ficar demasiado salgado e seco.',
          'A cor deve ser palha-clara, não branco químico intenso nem amarelo-ferrugem.',
          'O cheiro deve ser a mar e sal, sem amoníaco, gordura rançosa ou bolor cru.',
          'A carne deve estar seca e firme, sem superfície pegajosa.'
        ] }
      ]
    },
    {
      id: 'where-to-buy',
      title: 'Onde comprar: Continente, Pingo Doce, Mercado',
      content: [
        { kind: 'paragraph', text: 'Em Portugal, o bacalhau vende-se todo o ano, mas as maiores bancas aparecem antes do Natal e da Páscoa. Em 2026, uma boa referência para principiantes é comprar onde exista balcão e o vendedor possa cortar o peixe para a receita.' },
        { kind: 'checklist', items: [
          'Continente Tradicional — prático para escolher peixe inteiro e cortar em postas; muitas vezes há categorias graúdo/crescido e promoções com o cartão Continente.',
          'Pingo Doce balcão — boa opção para postas cortadas e bacalhau demolhado congelado; é cómodo comprar pequenas quantidades.',
          'Mercado municipal — melhor para aconselhamento: o vendedor indica o que levar para forno, à Brás ou Gomes de Sá.',
          'Lojas tradicionais de peixe — muitas vezes mais caras do que o supermercado, mas com melhor corte e controlo da espessura.',
          'Na primeira compra, não leve um peixe inteiro se não souber como o cortar e onde o guardar.',
          'Se vive sozinho/sozinha, compre 2–4 postas ou uma embalagem de demolhado congelado, não uma peça de 3 kg.',
          'Verifique o preço por kg: as promoções em peixe inteiro podem parecer vantajosas, mas uma parte irá para a cauda, pele e espinhas.',
          'O demolhado congelado é mais caro por kg, mas poupa 2–3 dias e reduz o risco de excesso de sal.'
        ] }
      ]
    },
    {
      id: 'demolha-times',
      title: 'Demolha: quanto tempo demolhar e como não estragar',
      content: [
        { kind: 'paragraph', text: 'Faça a demolha apenas no frigorífico, não em cima da bancada. A ideia é simples: a água fria retira o sal, enquanto a carne recupera humidade. Quanto mais grossa for a peça, mais tempo precisa. Peças de espessura diferente devem, de preferência, ser demolhadas separadamente.' },
        { kind: 'checklist', items: [
          'Passe o bacalhau por água fria para retirar o sal da superfície.',
          'Corte em peças de espessura semelhante, se for uma peça inteira.',
          'Coloque numa taça ou recipiente grande e cubra totalmente com água fria.',
          'Mantenha no frigorífico a 0–5 °C.',
          'Troque a água 2–3 vezes por dia; para lombos grossos, com mais frequência nas primeiras 24 horas.',
          'Desfiado / lascas: 6–12 h, por vezes 4–6 h bastam se as lascas forem finas.',
          'Postas finas e parte da cauda: 24–36 h.',
          'Peças médias crescido: 36–48 h.',
          'Lombos grossos graúdo: 48–72 h.',
          'Antes de cozinhar, retire um pedaço pequeno, coza rapidamente durante 1 minuto ou prove depois de cozinhar: o sabor deve ser salgado, mas não “a queimar”.'
        ] },
        { kind: 'warning', text: 'Não demolhe à temperatura ambiente “para ser mais rápido”. É peixe: numa cozinha quente, aumenta o risco de deterioração. Se não houver tempo, compre bacalhau demolhado congelado.' }
      ]
    },
    {
      id: 'cook-classics',
      title: 'Três clássicos: à Brás, à Gomes de Sá, com natas',
      content: [
        { kind: 'paragraph', text: 'Depois da demolha, o bacalhau normalmente não é frito “como um bife” de imediato. É ligeiramente cozido, assado ou desfeito em lascas. Para a maioria das receitas caseiras, bastam 150–200 g de bacalhau demolhado por pessoa, se houver batata, ovos ou natas.' },
        { kind: 'substeps', items: [
          {
            id: 'bras',
            title: 'Bacalhau à Brás',
            content: [
              { kind: 'paragraph', text: 'O ponto de partida mais simples. Precisa de lascas de bacalhau, cebola, alho, batata palha, ovos, salsa e azeitonas. O peixe é aquecido 3–5 minutos com a cebola, junta-se a batata palha e os ovos, e retira-se do lume enquanto a mistura ainda está cremosa.' },
              { kind: 'warning', text: 'Não salgue antecipadamente: o bacalhau e a batata palha já são salgados. Adicione sal apenas no fim, depois de provar.' }
            ]
          },
          {
            id: 'gomes-de-sa',
            title: 'Bacalhau à Gomes de Sá',
            content: [
              { kind: 'paragraph', text: 'Clássico português do Porto: bacalhau em lascas, batata cozida às rodelas, cebola, alho, azeite, ovos cozidos, azeitonas e salsa. Fica bom com crescido ou graúdo, em que a carne se separa em lascas grandes.' }
            ]
          },
          {
            id: 'natas',
            title: 'Bacalhau com natas',
            content: [
              { kind: 'paragraph', text: 'Gratinado: lascas de bacalhau, batata em cubos ou em palha, cebola, béchamel/natas, um pouco de noz-moscada e queijo, se quiser. Vai ao forno até ficar dourado. É uma boa receita se o bacalhau tiver ficado um pouco mais seco do que gostaria.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'storage-mistakes',
      title: 'Conservação e erros frequentes',
      content: [
        { kind: 'checklist', items: [
          'Guarde o bacalhau salgado e seco no frigorífico ou num local fresco e seco, de acordo com as instruções da loja; em casa, é melhor não o deixar durante semanas numa despensa quente.',
          'Depois de iniciar a demolha, o peixe deve estar sempre no frigorífico.',
          'Cozinhe o bacalhau demolhado no prazo de 24–48 h ou congele-o em porções.',
          'Se, depois da demolha, o peixe ainda estiver demasiado salgado, troque a água e deixe mais 6–12 h.',
          'Se demolhou demasiado, o sabor ficará aguado: ajudam azeite, cebola, alho, louro e uma receita mais “gorda” com natas.',
          'Não ferva o bacalhau durante muito tempo: fica seco e fibroso. Muitas vezes basta levar a água quase a ferver e deixar repousar 5–10 minutos.',
          'Retire as espinhas depois de um aquecimento breve: assim a carne separa-se mais facilmente em lascas grandes.',
          'Para crianças e convidados, é melhor usar lombos ou lascas bem limpas, sem espinhas.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Bacalhau salgado seco miúdo/crescido', amountEURMin: 8, amountEURMax: 14, note: 'Referência por kg em supermercados, em promoções e prateleiras normais; depende da época e do tamanho.' },
    { label: 'Bacalhau graúdo / lombos', amountEURMin: 14, amountEURMax: 25, note: 'Referência por kg; lombos grossos e categorias festivas são mais caros.' },
    { label: 'Bacalhau demolhado congelado', amountEURMin: 10, amountEURMax: 20, note: 'Por kg; mais caro do que o seco, mas já está demolhado e é prático para principiantes.' }
  ],
  sources: [
    {
      title: 'Confraria do Bacalhau — cultura, tipos e tradições do bacalhau',
      url: 'https://www.confrariadobacalhau.pt',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ASAE — conselhos aos consumidores sobre segurança alimentar',
      url: 'https://www.asae.gov.pt/seguranca-alimentar/conselhos-aos-consumidores.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Continente — secção de bacalhau e produtos Continente Tradicional',
      url: 'https://www.continente.pt',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Pingo Doce — receitas de bacalhau à Brás, à Gomes de Sá e com natas',
      url: 'https://www.pingodoce.pt/receitas/',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
