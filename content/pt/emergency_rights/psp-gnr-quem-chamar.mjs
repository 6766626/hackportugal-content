export default {
  editorialVoice: 'hackportugal',
  id: 'psp-gnr-quem-chamar',
  categoryId: 'emergency_rights',
  title: 'PSP vs GNR: que polícia chamar e onde',
  tldr: 'Em Portugal, o número de emergência é único — 112: acidente, agressão, violência doméstica, ameaças, criança desaparecida, incêndio, ambulância. A PSP atua normalmente nas cidades: Lisboa, Porto, capitais de distrito e grandes municípios. A GNR cobre zonas rurais, pequenas localidades, estradas e autoestradas, uma parte significativa do Algarve, zonas fronteiriças e naturais, e parte dos Açores/Madeira fora dos centros urbanos. Para assuntos não urgentes, procure a esquadra PSP ou o posto GNR mais próximo. À parte, o 800 202 148 é a linha gratuita 24h de informação e apoio a vítimas de violência doméstica (CIG); não substitui o 112.',
  tags: ['psp', 'gnr', '112', 'polícia'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'quick-rule',
      title: 'Regra rápida: primeiro 112, jurisdição depois',
      content: [
        { kind: 'paragraph', text: 'Se houver risco de vida, violência, crime a decorrer, acidente rodoviário com feridos, incêndio, urgência médica ou se não souber quem é responsável pela zona, ligue 112. O operador encaminhará a chamada para a PSP, GNR, INEM ou Bombeiros.' },
        { kind: 'checklist', items: [
          'Ligue 112 em caso de agressão, ameaças, perseguição, violência doméstica.',
          'Ligue 112 em caso de acidente rodoviário com feridos, bloqueio da estrada, condutor alcoolizado ou perigoso.',
          'Ligue 112 em caso de incêndio, fuga de gás, assalto a decorrer.',
          'Ligue 112 se uma criança ou uma pessoa em situação vulnerável estiver desaparecida.',
          'Ligue 112 se for turista/novo residente e não souber se é PSP ou GNR.',
          'Para um furto já ocorrido sem perigo de vida, pode dirigir-se à esquadra PSP ou ao posto GNR mais próximo.',
          'Para informações, marcação de queixa ou entrega de documentos, não utilize o 112.'
        ] },
        { kind: 'warning', text: 'Não tente “escolher a polícia certa” numa situação de emergência. Um erro na escolha da esquadra ou posto não deve atrasar a ajuda: o 112 encaminha a chamada.' }
      ]
    },
    {
      id: 'psp',
      title: 'PSP: polícia urbana',
      content: [
        { kind: 'paragraph', text: 'PSP — Polícia de Segurança Pública. É uma polícia civil de segurança pública, vista mais frequentemente nas cidades, centros turísticos, junto ao metro, estações, estádios de futebol, escolas, embaixadas e ruas urbanas.' },
        { kind: 'checklist', items: [
          'Lisboa e grande parte das freguesias urbanas em redor da capital.',
          'Porto e grandes zonas urbanas.',
          'Capitais de distrito e grandes municípios onde existe esquadra PSP.',
          'Furtos urbanos, carteiristas, ruído, brigas, ameaças, vandalismo.',
          'Fiscalização de documentos na cidade e acompanhamento de eventos públicos.',
          'Queixas por furto de telemóvel, carteira, bicicleta, se o facto ocorreu em zona PSP.',
          'Violência doméstica em zona urbana — através do 112 em caso urgente ou na esquadra PSP, se não houver perigo imediato.'
        ] },
        { kind: 'paragraph', text: 'Como identificar: no uniforme e nas viaturas está escrito PSP. Normalmente uniforme azul-escuro, carros-patrulha azuis/brancos e letreiro de esquadra. No site da PSP existe pesquisa de contactos por comandos e unidades.' },
        { kind: 'warning', text: 'A PSP não tem uma linha única que substitua o 112: para assuntos não urgentes, dirija-se a uma esquadra ou procure o contacto do comando respetivo no site da PSP. O número 800 202 148 é a linha gratuita 24h para vítimas de violência doméstica (CIG), não uma linha geral de informação da PSP; em perigo imediato é sempre 112.' }
      ]
    },
    {
      id: 'gnr',
      title: 'GNR: zonas rurais, estradas, costa e pequenas localidades',
      content: [
        { kind: 'paragraph', text: 'GNR — Guarda Nacional Republicana. É uma força de tipo gendarmaria militar. No dia a dia, os expats encontram a GNR com mais frequência fora das grandes cidades: aldeias, pequenas localidades, casas de campo, parques de campismo, parques naturais, estradas rurais e autoestradas.' },
        { kind: 'checklist', items: [
          'Freguesias rurais e pequenas localidades sem esquadra PSP.',
          'Autoestradas e estradas principais: acidentes, condução perigosa, fiscalização de trânsito.',
          'Muitas zonas do Algarve fora dos centros urbanos; nas próprias cidades pode haver PSP.',
          'Praias, parques naturais, zonas florestais, proteção ambiental.',
          'Furtos rurais, assaltos a casas, conflitos com vizinhos fora da zona urbana PSP.',
          'Fiscalização rodoviária, coimas, testes de alcoolemia, documentos do veículo.',
          'Funções fronteiriças e fiscais/aduaneiras no âmbito das competências da GNR.',
          'Nos Açores e na Madeira, a distribuição também depende da ilha e localidade concretas: os centros urbanos são frequentemente PSP, fora deles — GNR/unidades territoriais.'
        ] },
        { kind: 'paragraph', text: 'Como identificar: no uniforme e nas viaturas está escrito GNR. Frequentemente identificação verde-escura/verde, viaturas-patrulha com marcação GNR. A unidade chama-se posto territorial ou destacamento.' }
      ]
    },
    {
      id: 'who-else',
      title: 'Não é só PSP e GNR: PJ, Polícia Municipal, AIMA',
      content: [
        { kind: 'paragraph', text: 'Nem todos os assuntos “policiais” são resolvidos por uma patrulha PSP/GNR. Em Portugal existem estruturas separadas, e é importante não perder tempo no balcão errado.' },
        { kind: 'checklist', items: [
          'PJ — Polícia Judiciária: homicídios, criminalidade organizada, tráfico de seres humanos, terrorismo, corrupção, burla de grande dimensão, cibercriminalidade grave.',
          'Ainda assim, a PSP/GNR pode ser chamada primeiro através do 112: assegurará o local da ocorrência e encaminhará o caso para a PJ, se necessário.',
          'Polícia Municipal — polícia municipal: estacionamento, regras locais, mercados, ruído e infrações administrativas urbanas; não substitui o 112.',
          'AIMA — procedimentos migratórios, autorização de residência, marcações e documentos; a AIMA não se desloca a crimes.',
          'ACT — infrações laborais: falta de pagamento de salário, condições de trabalho ilegais; em caso de ameaças e violência — 112.',
          'ASAE — infrações no comércio, restaurantes, segurança alimentar; em caso de perigo imediato para pessoas — 112.'
        ] },
        { kind: 'warning', text: 'Se lhe roubaram documentos, primeiro faça queixa na PSP/GNR no local do facto ou na esquadra/posto mais próximo, depois contacte o consulado/IRN/AIMA conforme a situação. Sem auto de denúncia, muitas entidades não aceitarão a explicação “perdi/roubaram”.' }
      ]
    },
    {
      id: 'how-to-report',
      title: 'Como apresentar queixa e o que dizer ao operador',
      content: [
        { kind: 'paragraph', text: 'Para uma chamada de emergência, fale de forma breve: o que aconteceu, onde está, se há feridos, se há armas, quem é o agressor, para onde foi. Se não falar português, comece por “English please” ou “I need police/ambulance”. Em zonas turísticas, muitas vezes conseguem encontrar um operador/patrulha que fale inglês, mas não é garantido.' },
        { kind: 'checklist', items: [
          'Morada: rua, número, andar, freguesia, ponto de referência, ponto GPS do mapa.',
          'O seu telefone e nome; se tiver medo de revelar o nome perto do agressor, diga-o ao operador.',
          'Tipo de ocorrência: assault, theft, burglary, domestic violence, accident, fire, medical emergency.',
          'Número de vítimas e estado: conscious/unconscious, bleeding, trapped.',
          'Descrição do suspeito: roupa, altura, carro, matrícula, direção da fuga.',
          'Não toque no local do arrombamento, janela partida, vestígios e objetos até à chegada da polícia, se não houver ameaça à segurança.',
          'Para a queixa, leve passaporte/Cartão de Cidadão/autorização de residência, NIF se tiver, fotografias, recibos, IMEI do telemóvel, número do cartão bancário, seguro.',
          'Peça cópia do auto de denúncia ou referência do processo — é necessária para o banco, seguro, empregador, consulado.'
        ] }
      ]
    },
    {
      id: 'common-scenarios',
      title: 'Situações típicas para um expat',
      content: [
        { kind: 'substeps', items: [
          { id: 'wallet-stolen-lisbon', title: 'Carteira roubada em Lisboa/Porto', content: [
            { kind: 'paragraph', text: 'Se o ladrão já se foi embora e não há ameaça — esquadra PSP mais próxima. Se o furto está a acontecer agora, há violência ou vê o suspeito — 112.' }
          ] },
          { id: 'car-accident-highway', title: 'Acidente na A1/A2/A22 ou noutra autoestrada', content: [
            { kind: 'paragraph', text: 'Com feridos ou perigo na estrada — 112. Normalmente virá a GNR trânsito/BT e assistência médica. Vista o colete, vá para trás da barreira, coloque o triângulo apenas se for seguro.' }
          ] },
          { id: 'noise-neighbour', title: 'Vizinhos ruidosos à noite', content: [
            { kind: 'paragraph', text: 'Na cidade, normalmente PSP; fora da cidade — GNR. Se for apenas ruído normal sem ameaças, ligue para a esquadra/posto local ou linha municipal. Se houver briga, ameaças, gritos de socorro — 112.' }
          ] },
          { id: 'domestic-violence', title: 'Violência doméstica', content: [
            { kind: 'paragraph', text: 'Perante qualquer ameaça em curso — 112. A PSP/GNR é obrigada a receber a denúncia. Não espere pela autorização de residência, NIF ou contrato de arrendamento: a proteção contra a violência não depende do estatuto migratório.' }
          ] },
          { id: 'rural-house-burglary', title: 'Assalto a casa numa aldeia', content: [
            { kind: 'paragraph', text: 'Se os criminosos ainda podem estar dentro — não entre, ligue 112. Se descobriu mais tarde — posto GNR da área, fotografias dos danos, lista de objetos, números de série dos equipamentos.' }
          ] }
        ] }
      ]
    }
  ],
  sources: [
    {
      title: 'Site oficial da PSP — Polícia de Segurança Pública',
      url: 'https://www.psp.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Site oficial da GNR — Guarda Nacional Republicana',
      url: 'https://www.gnr.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Número europeu de emergência 112 em Portugal',
      url: 'https://www.112.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
