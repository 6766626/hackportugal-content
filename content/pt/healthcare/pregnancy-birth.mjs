export default {
  editorialVoice: 'hackportugal',
  id: 'pregnancy-birth',
  categoryId: 'healthcare',
  title: 'Gravidez e parto em Portugal',
  tldr: 'Portugal oferece acompanhamento de gravidez de qualidade através do SNS, gratuito para residentes com Número de Utente. Numa gravidez de baixo risco, a DGS recomenda pelo menos 6 consultas de vigilância + geralmente 3 ecografias de rastreio (11–13+6, 20–22 e 30–32 semanas).\n\nOs partos em maternidades públicas são gratuitos; no privado, conte aproximadamente com 2 500–8 000 €+ sem seguro (partos vaginais são mais baratos; cesarianas e complicações ficam mais caras).\n\nA Licença parental inicial dura 120–180 dias, com diferentes percentagens de pagamento. O nascimento deve ser registado no prazo de 20 dias — muitas vezes directamente na maternidade através do Balcão do Nado Vivo.',
  tags: ['gravidez', 'parto', 'sns', 'maternidade'],
  estimatedReadMinutes: 9,
  steps: [
    {
      id: 'overview',
      title: 'Processo geral',
      content: [
        { kind: 'paragraph', text: 'O acompanhamento da gravidez no SNS é gratuito para todos os residentes legais com Número de Utente (número de utente do SNS). A qualidade dos cuidados médicos é elevada; a maioria das maternidades é pública e dispõe de equipamento moderno.' },
        { kind: 'paragraph', text: 'A alternativa são clínicas privadas (Luz Saúde, CUF, Lusíadas, Trofa Saúde). Vantagens: obstetra-ginecologista próprio, quartos mais confortáveis, menos filas de espera. Desvantagens: custo elevado e, por vezes, utilização excessiva de procedimentos.' }
      ]
    },
    {
      id: 'registration',
      title: 'Registo da gravidez',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: '1. Primeiro teste e consulta', content: [
            { kind: 'paragraph', text: 'Teste positivo → marcação com o médico de família no Centro de Saúde (unidade pública) ou com um ginecologista privado (25-100 € pela primeira consulta).' }
          ]},
          { id: 'r2', title: '2. Início do acompanhamento no SNS', content: [
            { kind: 'paragraph', text: 'O médico de família/USF inicia o acompanhamento da gravidez no SNS, emite referenciações e entrega o Boletim de Saúde da Grávida — a caderneta da grávida, onde são registadas consultas, análises e ecografias.' }
          ]},
          { id: 'r3', title: '3. Prestações — o quê e quando', content: [
            { kind: 'paragraph', text: 'A partir da 13.ª semana, pode pedir o Abono de Família Pré-Natal, se o agregado cumprir os critérios de rendimentos. O Subsídio Parental é pedido depois do nascimento da criança / início da licença através da Segurança Social Direta — normalmente no prazo de 6 meses a contar do primeiro dia pelo qual a prestação é solicitada.' }
          ]}
        ]}
      ]
    },
    {
      id: 'consultations',
      title: 'Acompanhamento da gravidez — calendário',
      content: [
        { kind: 'paragraph', text: 'Para uma gravidez de baixo risco, a DGS recomenda pelo menos 6 consultas; na prática, o calendário é frequentemente mais apertado no fim da gravidez e depende da USF/hospital e do risco clínico.' },
        { kind: 'checklist', items: [
          '1.ª: até às 12 semanas — consulta inicial, análises, referenciação para rastreios',
          'Ecografias programadas geralmente: 11–13+6 semanas, 20–22 semanas, 30–32 semanas',
          '24-28 semanas — rastreio da diabetes gestacional',
          '32-36 semanas — plano de parto, discussão sobre anestesia',
          '36-40 semanas — controlo semanal/quinzenal',
          'Depois das 40 semanas — se o parto não tiver começado, monitorização adicional',
          '+ consulta pós-parto: até ao 42.º dia após o parto'
        ]},
        { kind: 'paragraph', text: 'As análises são prescritas de acordo com o protocolo da DGS por trimestre: grupo sanguíneo/Rh, hemograma, glicemia/rastreio da diabetes gestacional, urina/urocultura, HIV, sífilis, hepatite B, imunidade à rubéola, toxoplasmose quando não há imunidade, entre outras; a frequência depende da idade gestacional e do risco.' }
      ]
    },
    {
      id: 'maternity-preparation',
      title: 'Preparação para o parto',
      content: [
        { kind: 'checklist', items: [
          '👩‍⚕️ Cursos de preparação (Preparação para o Parto) — gratuitos na maioria dos Centros de Saúde, a partir da 26.ª semana',
          '🏥 Escolha da maternidade: por defeito — hospital da área de residência. Pode inscrever-se noutra através de pedido',
          '📋 Plano de Parto (plano de parto) — as suas preferências: anestesia epidural, posição, música, presença do pai no parto',
          '🎒 Mala para a maternidade: documentos médicos, roupa para a mãe e para o bebé, produtos de higiene',
          '🚗 Caminho para a maternidade — conheça-o com antecedência, especialmente para partos nocturnos',
          '📞 SNS 24 (808 24 24 24) — linha de triagem médica em caso de dúvidas/situações não urgentes. Em caso de risco de vida, hemorragia intensa, convulsões, perda de consciência — ligar 112'
        ]}
      ]
    },
    {
      id: 'birth',
      title: 'Parto e internamento',
      content: [
        { kind: 'substeps', items: [
          { id: 'b1', title: 'Internamento', content: [
            { kind: 'paragraph', text: 'O internamento ocorre aos primeiros sinais da fase activa do parto ou de forma programada (se for cesariana). No SNS, normalmente são 1-2 dias após parto vaginal e 3-4 dias após cesariana. Em clínicas privadas, pode ficar mais tempo, se quiser.' }
          ]},
          { id: 'b2', title: 'Primeiras horas', content: [
            { kind: 'paragraph', text: 'Logo após o parto — procedimentos básicos: avaliação pelo índice de Apgar, medições, primeira amamentação, vitamina K. Em Portugal, o padrão no sistema público é contacto pele a pele durante pelo menos 1 hora.' }
          ]},
          { id: 'b3', title: 'Registo do nascimento', content: [
            { kind: 'paragraph', text: 'Em muitas maternidades existe o Balcão do Nado Vivo, onde é possível registar o nascimento e obter o Assento de Nascimento no próprio dia. Se não existir/estiver fechado — o registo é feito na Conservatória do Registo Civil ou através dos serviços online disponíveis. O registo deve ser feito no prazo de 20 dias. Gratuito.' }
          ]},
          { id: 'b4', title: 'Documentos na alta', content: [
            { kind: 'checklist', items: [
              'Assento de Nascimento',
              'Boletim de Saúde Infantil (caderneta de saúde infantil)',
              'Cartão de Cidadão é emitido apenas se a criança for cidadã portuguesa. Filhos de estrangeiros nascidos em Portugal só obtêm nacionalidade se cumprirem as condições da Lei da Nacionalidade. A reforma da lei da nacionalidade (promulgada em maio de 2026) tornou as regras mais exigentes: passa a ser necessário que um dos progenitores tenha residido legalmente em Portugal há pelo menos 5 anos (antes, 1 ano). Verifique o estado actualizado e as regras transitórias',
              'Se a criança não for cidadã portuguesa — são tratados documentos estrangeiros/passaporte através do consulado dos pais e, se necessário, residence process através da AIMA',
              'NIF para uma criança estrangeira é normalmente pedido separadamente na Autoridade Tributária através de representante; para uma criança portuguesa, o número pode estar associado à emissão do Cartão de Cidadão',
              'Número de Utente é frequentemente criado através do mecanismo Nascer Utente, mas confirme-o após a alta; se o número não aparecer — peça-o no Centro de Saúde/ULS com o assento de nascimento e os documentos dos pais'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'parental-leave',
      title: 'Licença parental e prestações',
      content: [
        { kind: 'substeps', items: [
          { id: 'l1', title: 'Licença Parental Inicial', content: [
            { kind: 'checklist', items: [
              '120 dias — 100% do salário (opção base)',
              '150 dias — 80%, se não forem cumpridas as condições de partilha; 150 dias com partilha entre os pais segundo as regras da Segurança Social — 100%',
              '180 dias com partilha — 90%, se, após o período obrigatório da mãe, cada progenitor gozar o período exclusivo previsto na lei (por exemplo, 30 dias consecutivos ou dois períodos de 15 dias), de acordo com as regras da Segurança Social',
              'Pai: 28 dias obrigatórios de licença parental exclusiva do pai; 7 deles consecutivos imediatamente após o nascimento, os restantes nos primeiros 42 dias. Existem ainda 7 dias facultativos, que podem ser gozados em simultâneo com a licença da mãe (Código do Trabalho art. 43, Lei 13/2023)',
              'Direito à licença — ambos os progenitores enquanto trabalhadores por conta de outrem, trabalhadores independentes, desempregados (desde que cumpram as condições aplicáveis)'
            ]}
          ]},
          { id: 'l2', title: 'Subsídio', content: [
            { kind: 'paragraph', text: 'O Subsídio Parental é pago pela Segurança Social. É calculado com base no salário médio dos últimos 6 meses. O pedido é feito na Segurança Social Direta, normalmente de forma automática após o registo da criança.' }
          ]},
          { id: 'l3', title: 'Licenças adicionais', content: [
            { kind: 'checklist', items: [
              'Licença parental complementar / subsídio parental alargado: até 3 meses para cada progenitor imediatamente após a licença parental inicial, normalmente 30% da remuneração de referência; existem também outras formas de complementar leave com condições próprias',
              'Licença para assistência a filho — até 2 anos sem remuneração (com garantia de regresso ao trabalho)',
              'Pausas para amamentação/aleitação: normalmente 2 períodos até 1 hora por dia. Aleitação — até 1 ano; amamentação pode continuar depois de 1 ano mediante confirmação médica (Código do Trabalho art. 47–48)',
              'O direito a part-time / flexible working time pode caber à mãe ou ao pai com filho até 12 anos, desde que sejam cumpridos o procedimento de aviso e as condições do Código do Trabalho (art. 55–57)'
            ]}
          ]},
          { id: 'l4', title: 'Pagamentos pontuais', content: [
            { kind: 'checklist', items: [
              'Não existe um “baby bonus” nacional único. Verifique os apoios à natalidade municipais no seu local de residência',
              'A nível nacional, estão disponíveis: Abono de Família Pré-Natal (a partir da 13.ª semana, sujeito a rendimentos), Abono de Família para a criança, Garantia para a Infância, Subsídio Social Parental',
              'Subsídio Social Parental — para quem não tem direito ao Subsídio Parental normal e cumpre condições de baixos rendimentos/recursos',
              'Abono de Família (prestação por criança) — pago mensalmente desde o nascimento (ver guia separado)'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'private-vs-sns',
      title: 'SNS ou clínica privada — o que escolher',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: 'SNS (sistema público)', content: [
            { kind: 'checklist', items: [
              '✅ Gratuito',
              '✅ Elevada qualidade dos cuidados médicos',
              '✅ Maternidades modernas (especialmente Maternidade Alfredo da Costa, Hospital Santa Maria em Lisboa, S. João no Porto)',
              '❌ Não escolhe o médico; cada consulta pode ser com um especialista diferente',
              '❌ Enfermarias/quartos standard (2-4 mães por quarto)',
              '❌ Menos flexibilidade no plano de parto'
            ]}
          ]},
          { id: 's2', title: 'Clínica privada', content: [
            { kind: 'checklist', items: [
              '💰 2 500–5 000 € por parto vaginal sem seguro',
              '💰 4 000–8 000 €+ por cesariana',
              '✅ O seu obstetra-ginecologista acompanha a gravidez e realiza o parto',
              '✅ Quartos individuais confortáveis',
              '✅ Abordagem personalizada',
              '❌ Utilização excessiva de cesarianas (40-60% contra 25-30% no SNS) — maior risco de intervenções médicas',
              '🩺 Com seguro (Médis, Multicare com cobertura de maternidade): 500-1500 € de co-pagamento'
            ]}
          ]}
        ]}
      ]
    }
  ],
  sources: [
    { title: 'DGS — Programa Nacional para a Vigilância da Gravidez de Baixo Risco', url: 'https://www.dgs.pt/em-destaque/programa-nacional-para-a-vigilancia-da-gravidez-de-baixo-risco.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'SNS 24 — gravidez', url: 'https://www.sns24.gov.pt/tema/gravidez/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Segurança Social — parentalidade', url: 'https://www.seg-social.pt/parentalidade', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Código do Trabalho (Lei 7/2009, alterado por Lei 13/2023)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2009-34546475', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'IRN — Registar nascimento / Balcão do Nado Vivo', url: 'https://irn.justica.gov.pt/Registos/Registo-Civil/Nascimento', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
