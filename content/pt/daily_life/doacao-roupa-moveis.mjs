export default {
  editorialVoice: 'hackportugal',
  id: 'doacao-roupa-moveis',
  categoryId: 'daily_life',
  title: 'Onde entregar roupa antiga, móveis e comida: Re-Food, Cáritas, Banco Alimentar',
  tldr: 'Em Portugal, comida, roupa e móveis devem ser entregues de forma adequada, e não “num contentor qualquer”. A Re-Food recolhe excedentes alimentares através de núcleos locais e voluntários, o Banco Alimentar aceita produtos não perecíveis em armazéns e campanhas nos supermercados, e a Cáritas e a Loja Solidária aceitam roupa, calçado, roupa de cama e, por vezes, móveis e eletrodomésticos. Em Lisboa/Porto, os móveis grandes devem muitas vezes ser combinados primeiro com a Câmara Municipal ou a Cáritas local: deixá-los na rua por iniciativa própria pode resultar em coima.',
  tags: ['doação', 'roupa', 'móveis', 'comida', 'cáritas'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'sort-before-donation',
      title: '1. Primeiro separe: nem tudo pode ser doado',
      content: [
        { kind: 'paragraph', text: 'A regra principal: a caridade em Portugal não é uma lixeira gratuita. As organizações aceitam bens que possam ser imediatamente entregues a uma família, vendidos numa Loja Solidária ou usados em segurança.' },
        { kind: 'checklist', items: [
          'Roupa: limpa, seca, sem bolor e sem cheiro forte; é melhor separar por sacos e identificar como “adulto”, “criança”, “bebé”.',
          'Calçado: apenas em pares, sem desgaste crítico; atacadores/fechos devem funcionar.',
          'Roupa de cama e toalhas: lavadas; colchões raramente são aceites por motivos de higiene e transporte.',
          'Móveis: fotografias, medidas, andar, existência de elevador — envie previamente à Cáritas, Loja Solidária ou Câmara Municipal.',
          'Eletrodomésticos: a funcionar, com cabos; nem todos aceitam equipamentos grandes, especialmente frigoríficos e máquinas de lavar.',
          'Comida: apenas segura. Produtos não perecíveis — Banco Alimentar; comida pronta e excedentes de estabelecimentos — normalmente através da Re-Food, mas apenas após combinação.',
          'Documentos, medicamentos, cosméticos fora do prazo, leite infantil em pó aberto, álcool — não coloque em donativos.',
          'Se o artigo estiver partido, molhado, com percevejos/bolor — é lixo volumoso ou reciclagem, não doação.'
        ] }
      ]
    },
    {
      id: 'food-refood-banco-alimentar',
      title: '2. Comida: Re-Food ≠ Banco Alimentar',
      content: [
        { kind: 'paragraph', text: 'A Re-Food e o Banco Alimentar Contra a Fome funcionam de formas diferentes. A Re-Food é uma rede local de voluntários que resgata excedentes de comida pronta de restaurantes, cafés, supermercados e parceiros, distribuindo-os depois rapidamente a pessoas necessitadas. Não é um ponto universal de receção de sobras domésticas.' },
        { kind: 'paragraph', text: 'O Banco Alimentar é uma rede de bancos alimentares. Aceitam sobretudo produtos não perecíveis: arroz, massa, conservas, leite UHT, azeite, açúcar, farinha, cereais, alimentação infantil em embalagem fechada. A entrega é feita através de armazéns, campanhas em supermercados e instituições parceiras.' },
        { kind: 'checklist', items: [
          'Para a Re-Food: encontre o núcleo mais próximo em re-food.org e contacte-o antes de entregar comida.',
          'Não leve para a Re-Food uma panela de sopa caseira sem combinação prévia: os requisitos de segurança alimentar são rigorosos.',
          'Se tem um café, restaurante, padaria ou catering — a Re-Food pode ser um bom canal para entregar excedentes de forma regular.',
          'Para o Banco Alimentar: entregue produtos fechados e dentro de um prazo de validade normal.',
          'Verifique as campanhas do Banco Alimentar nos supermercados: os voluntários costumam estar à entrada e entregar sacos para a compra de produtos.',
          'Donativos online e “vale” nos supermercados são muitas vezes mais práticos do que transportar produtos por conta própria.',
          'Congelados, produtos perecíveis, embalagens abertas, conservas caseiras — normalmente não são adequados para o Banco Alimentar.'
        ] },
        { kind: 'warning', text: 'Não deixe comida à porta da Re-Food, da Cáritas ou de uma igreja durante a noite. Pode ser deitada fora por não ser possível confirmar a temperatura, o prazo de validade e a origem.' }
      ]
    },
    {
      id: 'clothes-furniture-caritas',
      title: '3. Roupa e móveis: Cáritas, paróquia, Loja Solidária',
      content: [
        { kind: 'paragraph', text: 'A Cáritas Portuguesa é uma estrutura nacional, mas a receção de bens é normalmente organizada ao nível da Cáritas Diocesana, da paróquia ou de uma Loja Solidária local. As condições variam de cidade para cidade: nalguns locais aceitam apenas roupa, noutros há armazém para móveis, noutros é necessário marcar previamente.' },
        { kind: 'checklist', items: [
          'Abra caritas.pt e encontre a sua Cáritas Diocesana de acordo com a zona de residência.',
          'Escreva uma mensagem curta em português: o que pretende doar, número de sacos, fotografias dos móveis, morada, andar, elevador, disponibilidade.',
          'Para roupa, use sacos resistentes, não caixas de comida; identifique como “roupa de mulher”, “homem”, “criança”, “cama”.',
          'Artigos de bebé, carrinhos, camas de bebé e mochilas escolares são muitas vezes procurados, mas devem estar limpos e ser seguros.',
          'Os móveis não são recolhidos automaticamente: uma Loja Solidária pequena pode não ter carrinha nem armazém.',
          'Se a organização não responder, tente a paróquia da sua zona ou a Junta de Freguesia: muitas vezes conhecem famílias e projetos locais.',
          'Para artigos de maior valor, pode primeiro vendê-los através do OLX/Facebook Marketplace e doar o dinheiro ao Banco Alimentar ou à Cáritas.'
        ] },
        { kind: 'warning', text: 'Os contentores de roupa na rua nem sempre pertencem a organizações de caridade. Verifique o logótipo, o site e o operador do contentor; alguns contentores fazem recolha têxtil comercial.' }
      ]
    },
    {
      id: 'lisboa-porto-deep-dive',
      title: '4. Lisboa e Porto: como proceder na prática',
      content: [
        { kind: 'paragraph', text: 'Em Lisboa e no Porto, o problema geralmente não é encontrar quem precise do artigo, mas sim a logística: estacionamento, transporte, elevador, armazém, horários dos voluntários. Quanto maior for o objeto, mais cedo deve escrever e mais detalhes deve fornecer.' },
        { kind: 'substeps', items: [
          {
            id: 'lisboa',
            title: 'Lisboa',
            content: [
              { kind: 'checklist', items: [
                'Comida: procure o núcleo Re-Food Lisboa mais próximo por zona; para entrega regular de comida por empresas, contacte com antecedência.',
                'Produtos não perecíveis: o Banco Alimentar Contra a Fome tem estrutura na região de Lisboa; é mais simples participar em campanhas de supermercado ou entregar através de parceiros.',
                'Roupa: a Cáritas Diocesana de Lisboa, paróquias e Loja Solidária aceitam de acordo com os seus próprios horários; não apareça com 10 sacos sem telefonar.',
                'Móveis: envie primeiro fotografias e medidas. Se a organização de caridade não recolher, trate da recolha de monos / resíduos volumosos através da Câmara Municipal de Lisboa.',
                'Se vive num prédio, combine com o condomínio onde colocar temporariamente os móveis até à recolha.'
              ] }
            ]
          },
          {
            id: 'porto',
            title: 'Porto',
            content: [
              { kind: 'checklist', items: [
                'Comida: a Re-Food funciona através de núcleos locais; os voluntários recolhem excedentes por rotas, não aceitam tudo indiscriminadamente à porta.',
                'Produtos de longa duração: o Banco Alimentar do Porto e as campanhas nos supermercados são o caminho mais simples.',
                'Roupa e calçado: a Cáritas Diocesana do Porto, paróquias, Loja Solidária e associações locais aceitam mediante contacto prévio.',
                'Móveis grandes: confirme junto da Cáritas/Loja Solidária se existe recolha. Se não houver — use o serviço municipal de recolha de volumosos no Porto.',
                'Não deixe um sofá junto ao contentor do lixo: no centro do Porto isso torna-se rapidamente uma infração às regras de limpeza urbana.'
              ] }
            ]
          }
        ] }
      ]
    },
    {
      id: 'message-template',
      title: '5. Texto pronto para WhatsApp/email em português',
      content: [
        { kind: 'paragraph', text: 'As organizações portuguesas funcionam muitas vezes através de voluntários. Uma mensagem curta e concreta aumenta a probabilidade de resposta.' },
        { kind: 'paragraph', text: 'Olá! Gostaria de doar alguns bens em bom estado. Tenho: [2 sacos de roupa de adulto / mesa 120x80 / cadeira / alimentos não perecíveis]. Posso enviar fotos. Moro em [bairro, cidade], [andar], [com/sem elevador]. Gostaria de saber se aceitam e se é possível entregar ou agendar recolha. Obrigado/a.' },
        { kind: 'checklist', items: [
          'Anexe 2–4 fotografias dos móveis ou eletrodomésticos.',
          'Indique o bairro exato, mas forneça a morada completa apenas depois de confirmação.',
          'Escreva “doar”, “recolha”, “entrega”, “Loja Solidária”, “bens em bom estado”.',
          'Se for comida, acrescente o prazo de validade e o estado da embalagem.',
          'Se precisa de uma recolha rápida por mudança de casa, indique honestamente a data: “preciso desocupar até sexta-feira”.',
          'Se não houver resposta em 3–5 dias úteis, tente outra paróquia, Junta de Freguesia ou recolha municipal.'
        ] }
      ]
    },
    {
      id: 'what-not-to-do',
      title: '6. O que não fazer',
      content: [
        { kind: 'checklist', items: [
          'Não deixe roupa ao lado de um contentor cheio: a chuva estraga os artigos e estes tornam-se lixo.',
          'Não deixe móveis no passeio sem marcação de recolha de volumosos.',
          'Não doe comida fora do prazo “a ver se alguém aproveita”. As organizações terão de gastar tempo a separar e eliminar.',
          'Não envie áudios de 5 minutos aos voluntários: é melhor uma lista + fotografias.',
          'Não exija recolha “hoje daqui a uma hora”: a maioria dos projetos depende de voluntários.',
          'Não misture artigos em bom estado com lixo no mesmo saco.',
          'Não use a caridade como forma de se livrar de artigos depois de uma infestação de percevejos, bolor ou inundação.'
        ] },
        { kind: 'warning', text: 'Se o artigo já não estiver em condições de uso, escolha um ecocentro, recolha de monos, WEEE/REEE para eletrónica ou a reciclagem normal. É mais honesto e mais barato para todos.' }
      ]
    }
  ],
  costs: [
    { label: 'Doação de comida, roupa ou bens', amountEUR: 0, note: 'As organizações não cobram pelo ato de doação, mas podem recusar devido ao estado dos bens ou à falta de armazém.' },
    { label: 'Recolha municipal de resíduos volumosos', amountEUR: 0, note: 'Em muitos municípios, o serviço é gratuito mediante marcação para residentes, mas as regras e limites dependem da Câmara Municipal.' },
    { label: 'Transporte privado de móveis', amountEURMin: 25, amountEURMax: 80, note: 'Intervalo típico para um transporte pequeno dentro da cidade; depende do andar, elevador, distância e urgência.' }
  ],
  sources: [
    { title: 'Re-Food Portugal — rede de resgate e redistribuição de comida', url: 'https://www.re-food.org', kind: 'company', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'Banco Alimentar Contra a Fome — bancos alimentares e campanhas', url: 'https://www.bancoalimentar.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Cáritas Portuguesa — rede de apoio social e Cáritas Diocesana', url: 'https://www.caritas.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
