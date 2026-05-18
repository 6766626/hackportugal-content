export default {
  editorialVoice: 'hackportugal',
  id: 'reparacao-electrodomesticos',
  categoryId: 'daily_life',
  title: 'Reparação de eletrodomésticos em Portugal: serviços, garantia e preços',
  tldr: 'Em Portugal, os eletrodomésticos são reparados através do serviço oficial da marca, da loja vendedora como Worten/Continente/Radio Popular ou de um técnico independente. Se o produto foi comprado a um vendedor profissional após 01.01.2022, aplica-se a garantia legal de 3 anos ao abrigo do Decreto-Lei 84/2021: reparação/substituição gratuita em caso de defeito de conformidade, sendo que nos primeiros 2 anos o defeito se presume existente. A deslocação paga costuma ser 25–80 €; o diagnóstico é frequentemente descontado na reparação; componentes caros, como o compressor de um frigorífico, podem custar 250–500 €.',
  tags: ['reparação', 'garantia', 'avaria', 'eletrodomésticos'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'where-to-repair',
      title: 'Onde reparar: 4 canais que funcionam 🔧',
      content: [
        {
          kind: 'paragraph', text: 'A escolha depende da idade do eletrodoméstico e de existir ou não garantia legal. Regra principal: se o equipamento ainda estiver na garantia e o defeito não tiver sido causado por utilização indevida, contacte primeiro o vendedor, não um técnico aleatório. Uma reparação por conta própria ou a abertura do aparelho pode complicar uma disputa de garantia.'
        },
        {
          kind: 'checklist',
          items: [
            'Serviço oficial da marca: Bosch/Siemens/Balay através da BSH, Whirlpool, Samsung, LG, Electrolux, Teka, etc. É mais caro, mas usa peças originais e fornece um relatório claro.',
            'Loja vendedora: Worten, Fnac, Radio Popular, Continente, MediaMarkt. Para a garantia legal, é precisamente o vendedor que responde perante o consumidor.',
            'Plataformas de assistência das lojas: por exemplo Worten Resolve/serviços de assistência — cómodo para equipamentos comprados não apenas nessa loja, mas já é um serviço pago se não houver garantia.',
            'Técnico de eletrodomésticos independente: muitas vezes mais rápido e mais barato para máquinas de lavar roupa, máquinas de lavar loiça, fornos e frigoríficos fora da garantia.',
            'Oficinas locais: procure “reparação de máquinas de lavar”, “assistência técnica frigoríficos”, “técnico certificado gás” para fogões/caldeiras a gás.',
            'Para eletrodomésticos encastrados num apartamento arrendado, escreva primeiro ao senhorio/agência: em regra geral, a reparação de equipamentos arrendados juntamente com a casa nem sempre é da sua responsabilidade.'
          ]
        },
        {
          kind: 'warning', text: 'Fogões a gás, esquentador e caldeiras não devem ser entregues a um “técnico do OLX” sem qualificação. Para gás é necessário um técnico credenciado; após a intervenção, podem exigir uma declaração/relatório para o seguro ou condomínio.'
        }
      ]
    },
    {
      id: 'legal-vs-commercial',
      title: 'Garantia legal ≠ garantia comercial',
      content: [
        {
          kind: 'paragraph', text: 'A armadilha portuguesa para expats: a “garantia da loja/marca” e a garantia legal são coisas diferentes. A garantia legal resulta da lei e não depende de ter comprado ou não uma garantia alargada. A garantia comercial é uma promessa voluntária da marca ou da loja: por exemplo, 5 anos para o motor, extensão de garantia, seguro de avaria.'
        },
        {
          kind: 'checklist',
          items: [
            'A garantia legal para bens novos comprados a um vendedor profissional é de 3 anos.',
            'Para bens usados, o prazo pode ser reduzido por escrito, mas normalmente não abaixo de 18 meses.',
            'Nos primeiros 2 anos, presume-se que o defeito já existia no momento da entrega do bem, salvo prova em contrário pelo vendedor.',
            'No 3.º ano, o consumidor pode ter de provar que o defeito não surgiu por utilização indevida.',
            'A reparação ao abrigo da garantia legal deve ser gratuita: peças, trabalho, transporte/deslocação, se o defeito estiver coberto pela garantia.',
            'Após cada reparação em garantia, o bem recebe uma garantia adicional de 6 meses sobre a parte/defeito reparado; o limite é até 4 reparações.',
            'Se o bem for substituído, começa a correr um novo prazo de garantia para o novo bem.',
            'A garantia comercial não pode prejudicar os direitos da garantia legal: frases como “só 1 ano de garantia” para um produto novo vendido por uma loja em 2026 são incorrectas.'
          ]
        },
        {
          kind: 'warning', text: 'Se o vendedor disser “contacte directamente a marca”, isso pode ser conveniente, mas juridicamente, na garantia legal, quem responde perante si é o vendedor. Envie a reclamação ao vendedor por escrito: email, formulário online ou livro de reclamações.'
        }
      ]
    },
    {
      id: 'prices',
      title: 'Quanto custa uma reparação paga em 2026',
      content: [
        {
          kind: 'paragraph', text: 'Os preços dependem muito da zona, da marca, da disponibilidade de peças e da urgência.\n\nEm Lisboa, Cascais, Porto e Algarve, a deslocação costuma ser mais cara do que em cidades pequenas. Antes da visita, peça um orçamento: quanto custa a deslocação, diagnóstico, hora de trabalho e se o diagnóstico será descontado da factura final.'
        },
        {
          kind: 'checklist',
          items: [
            'Deslocação/diagnóstico de um técnico independente: normalmente 25–60 €.',
            'Serviço oficial da marca: frequentemente 40–80 € pela deslocação/diagnóstico, peças à parte.',
            'Mão-de-obra do técnico: referência de 35–70 €/hora; o mínimo pode ser cobrado como 1 hora.',
            'Máquina de lavar roupa: fecho da porta, bomba, correia, pequenas fugas — cerca de 70–180 €.',
            'Máquina de lavar loiça: bomba, válvula, fugas, erro de escoamento — cerca de 90–220 €.',
            'Forno/fogão: resistência, termóstato, selector — cerca de 80–180 €.',
            'Frigorífico: termóstato, ventilador, borracha da porta — cerca de 90–220 €.',
            'Compressor do frigorífico ou circuito de frio grave — cerca de 250–500 €, muitas vezes economicamente não compensa.',
            'Pequenos electrodomésticos: chaleiras, torradeiras, micro-ondas baratos muitas vezes ficam mais baratos de substituir do que reparar.'
          ]
        },
        {
          kind: 'paragraph', text: 'É prática normal enviar uma fotografia da placa de identificação com o modelo e o número de série. Normalmente fica na moldura interior da porta da máquina de lavar roupa/loiça, dentro do frigorífico, atrás do forno ou por baixo do aparelho.'
        }
      ]
    },
    {
      id: 'how-to-request',
      title: 'Como pedir uma reparação sem surpresas',
      content: [
        {
          kind: 'substeps',
          items: [
            {
              id: 'collect-data',
              title: '1. Reúna os dados antes de telefonar',
              content: [
                {
                  kind: 'checklist',
                  items: [
                    'Marca e modelo: marca/modelo.',
                    'Número de série: número de série ou E-Nr/FD na Bosch/Siemens.',
                    'Fotografia do erro no ecrã.',
                    'Vídeo do ruído, fuga ou comportamento do aparelho.',
                    'Data de compra e fatura/recibo.',
                    'Morada, andar, elevador, estacionamento para o técnico.',
                    'Quem comprou o bem: você, o senhorio ou o proprietário anterior do apartamento.'
                  ]
                }
              ]
            },
            {
              id: 'ask-quote',
              title: '2. Peça o orçamento por escrito',
              content: [
                {
                  kind: 'paragraph', text: 'Uma mensagem no WhatsApp ou email é melhor do que uma chamada: depois fica visível o que foi prometido. Pergunte: “Qual é o valor da deslocação e diagnóstico? O diagnóstico é descontado se avançar com a reparação? As peças são originais? Há garantia da reparação?”'
                }
              ]
            },
            {
              id: 'confirm-invoice',
              title: '3. Exija fatura',
              content: [
                {
                  kind: 'paragraph', text: 'Sem fatura é difícil reclamar, provar a reparação ao senhorio ou usar a garantia do serviço. Em Portugal é normal pedir fatura com NIF; se não quiser fornecer NIF, peça na mesma fatura simplificada.'
                }
              ]
            }
          ]
        },
        {
          kind: 'warning', text: 'Não aceite “orçamento grátis” sem esclarecer as condições. Muitas vezes só é grátis se aceitar a reparação; em caso de recusa, cobram deslocação/diagnóstico.'
        }
      ]
    },
    {
      id: 'if-dispute',
      title: 'Se o serviço ou a loja recusar',
      content: [
        {
          kind: 'paragraph', text: 'Primeiro, separe a disputa sobre a garantia do bem da disputa sobre a qualidade da reparação. Se o eletrodoméstico estava abrangido pela garantia legal, escreva ao vendedor. Se contratou um técnico pago, a disputa é com o prestador de serviços sobre a qualidade do serviço, o preço e a fatura.'
        },
        {
          kind: 'checklist',
          items: [
            'Guarde a fatura de compra, fatura da reparação, orçamento, correspondência, fotografias e vídeos do defeito.',
            'Peça um relatório técnico por escrito: causa da avaria e lista das peças substituídas.',
            'Se o vendedor recusar a garantia legal, peça a recusa por escrito com a respetiva fundamentação.',
            'Apresente reclamação no Livro de Reclamações eletrónico, se a empresa estiver registada no sistema.',
            'Contacte o Centro de Arbitragem de Conflitos de Consumo da sua região — para litígios de consumo, isto é muitas vezes mais rápido do que tribunal.',
            'Use a DECO Proteste para modelos de cartas e consultas, sobretudo se o valor da reparação for significativo.',
            'Não deite fora a peça avariada até a disputa estar encerrada: pode servir como prova.'
          ]
        },
        {
          kind: 'warning', text: 'Se o defeito tiver surgido por calcário, instalação incorrecta, pico de tensão, baratas/insectos, impacto mecânico ou abertura do aparelho por conta própria, o vendedor/marca recusará frequentemente a garantia legal. Nesse caso, contam o parecer técnico e as provas.'
        }
      ]
    }
  ],
  costs: [
    {
      label: 'Deslocação e diagnóstico de técnico independente',
      amountEURMin: 25,
      amountEURMax: 60,
      note: 'Frequentemente pago mesmo em caso de recusa da reparação; confirme antecipadamente.'
    },
    {
      label: 'Deslocação do serviço oficial da marca',
      amountEURMin: 40,
      amountEURMax: 80,
      note: 'Normalmente sem peças; por vezes o diagnóstico é descontado na reparação.'
    },
    {
      label: 'Reparação típica de máquina de lavar roupa',
      amountEURMin: 70,
      amountEURMax: 180,
      note: 'Bomba, fecho da porta, correia, pequena fuga; depende das peças.'
    },
    {
      label: 'Reparação grave de frigorífico',
      amountEURMin: 250,
      amountEURMax: 500,
      note: 'Compressor/circuito de frio; muitas vezes compensa mais substituir o aparelho.'
    }
  ],
  sources: [
    {
      title: 'Portal do Consumidor: garantias, reclamações e direitos do consumidor',
      url: 'https://www.consumidor.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei 84/2021: direitos do consumidor na compra e venda de bens, conteúdos e serviços digitais',
      url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/84-2021-173938301',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DECO Proteste: garantia de bens e reparação de eletrodomésticos',
      url: 'https://www.deco.proteste.pt',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Livro de Reclamações eletrónico',
      url: 'https://www.livroreclamacoes.pt/Inicio/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
