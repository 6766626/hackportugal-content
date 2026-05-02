export default {
  editorialVoice: 'hackportugal',
  id: 'apoio-aleitamento-materno',
  categoryId: 'healthcare',
  title: 'Apoio à amamentação: apoio ao aleitamento materno no SNS',
  tldr: 'Em Portugal, é possível obter ajuda gratuita com o aleitamento materno através do SNS: no Centro de Saúde com a enfermeira de saúde materna/infantil, na maternidade através do Cantinho da Amamentação e por telefone pela Linha SOS Amamentação 800 200 200. É necessário número de utente, mas em situações urgentes a ajuda não deve ser adiada. No trabalho, o Código do Trabalho art. 47 dá até 2 horas por dia para amamentação/aleitação: normalmente 2 períodos de 1 hora, pelo menos até a criança completar 1 ano, e, em caso de amamentação efetiva, por mais tempo com comprovativo.',
  tags: ['amamentação', 'sns', 'parto', 'trabalho'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-sns-offers',
      title: 'O que o SNS oferece no aleitamento materno',
      content: [
        { kind: 'paragraph', text: 'Apoio à amamentação não é um serviço pago separado, mas sim parte do acompanhamento da gravidez, do período pós-parto e da saúde da criança no SNS. O principal ponto de entrada é o seu Centro de Saúde: consulta de enfermagem de saúde materna, consulta de saúde infantil e médico de família.' },
        { kind: 'checklist', items: ['verificação da pega e da posição da criança', 'ajuda em caso de dor, fissuras e ingurgitamento mamário', 'avaliação do aumento de peso da criança e do número de fraldas molhadas', 'plano de suplementação, se for realmente necessário', 'apoio na extração e conservação do leite', 'conselhos no regresso ao trabalho', 'encaminhamento para o hospital ou urgência em caso de suspeita de mastite, desidratação da criança ou perda de peso acentuada'] },
        { kind: 'warning', text: 'Se a mãe tiver febre, arrepios, uma zona vermelha e dolorosa na mama, corrimento purulento, ou se a criança estiver prostrada, comer mal ou urinar pouco — não espere pela consulta programada. Ligue para o SNS 24 ou dirija-se à urgência.' }
      ]
    },
    {
      id: 'where-to-go',
      title: 'Onde recorrer: Centro de Saúde, maternidade, linha SOS',
      content: [
        { kind: 'substeps', items: [
          { id: 'centro-saude', title: '1. Centro de Saúde da área de residência', content: [
            { kind: 'paragraph', text: 'Peça uma consulta de enfermagem para apoio à amamentação ou uma consulta de saúde infantil. Se já estiver inscrita numa unidade de saúde familiar, contacte através do Portal SNS 24, ligue para o secretariado ou vá presencialmente.' },
            { kind: 'checklist', items: ['número de utente da mãe', 'número de utente da criança, se já tiver sido atribuído', 'Cartão de Cidadão / autorização de residência / passaporte', 'Boletim de Saúde da Grávida ou relatório de alta da maternidade', 'Boletim de Saúde Infantil e Juvenil da criança', 'lista de perguntas: dor, frequência das mamadas, suplementação, peso, extração de leite'] }
          ]},
          { id: 'hospital', title: '2. Cantinho da Amamentação na maternidade ou hospital', content: [
            { kind: 'paragraph', text: 'Em muitas maternidades e hospitais do SNS existe um Cantinho da Amamentação — um gabinete ou uma equipa que ajuda com a lactação após a alta. Normalmente é especialmente útil nas primeiras 2–6 semanas, quando surgem fissuras, ingurgitamento, problemas de pega ou de suplementação.' }
          ]},
          { id: 'phone-app', title: '3. Linha SOS Amamentação e aplicação', content: [
            { kind: 'paragraph', text: 'Linha SOS Amamentação: 800 200 200. É uma linha gratuita da Associação SOS Amamentação, onde prestam aconselhamento sobre problemas comuns de amamentação. Também está disponível a aplicação SOS-Amamentação: útil para registar mamadas e procurar rapidamente contactos de apoio.' }
          ]}
        ]}
      ]
    },
    {
      id: 'how-to-ask-in-portuguese',
      title: 'Como formular o pedido em português',
      content: [
        { kind: 'paragraph', text: 'No SNS, é melhor ser concreta: em vez de dizer “preciso de uma consultora”, descreva o sintoma e peça enfermagem de apoio à amamentação. Assim, o secretariado encaminha-a mais depressa para a enfermeira ou o médico adequado.' },
        { kind: 'checklist', items: ['“Preciso de apoio à amamentação.” — Preciso de ajuda com o aleitamento materno.', '“Tenho dor ao amamentar.” — Dói-me ao amamentar.', '“O bebé não pega bem na mama.” — A criança não faz uma boa pega na mama.', '“Tenho fissuras no mamilo.” — Tenho fissuras no mamilo.', '“A mama está muito dura e dolorosa.” — A mama está dura e dolorosa.', '“Tenho febre e dor na mama.” — Tenho febre e dor na mama.', '“O bebé perdeu peso / não está a ganhar peso.” — A criança perdeu peso / não está a ganhar peso.', '“Preciso de ajuda para extrair e conservar leite.” — Preciso de ajuda com a extração e conservação do leite.'] },
        { kind: 'warning', text: 'Não aceite automaticamente leite artificial só porque “é mais fácil”. Se a criança estiver estável, peça um plano: quanto suplemento dar, como dar, com que frequência controlar o peso e como manter a lactação.' }
      ]
    },
    {
      id: 'work-rights',
      title: 'Direito a pausas no trabalho: CT art. 47',
      content: [
        { kind: 'paragraph', text: 'O Código do Trabalho art. 47 dá à trabalhadora o direito à dispensa para amamentação — dispensa do trabalho para amamentar. Se não houver aleitamento materno, a mãe ou o pai podem usar a dispensa para aleitação até a criança completar 1 ano.' },
        { kind: 'checklist', items: ['por regra — 2 períodos por dia, no máximo de 1 hora cada, ou seja, até 2 horas por dia', 'pode ser acordado outro horário por escrito com o empregador', 'em caso de gémeos, acrescentam-se 30 minutos por dia por cada criança além da primeira', 'no trabalho a tempo parcial aplica-se a proporcionalidade, mas com um mínimo de 30 minutos por dia', 'as pausas contam como tempo de trabalho e não devem reduzir o salário', 'se a criança tiver mais de 1 ano e a mãe continuar a amamentar, o empregador pode pedir comprovativo médico', 'avise o empregador com antecedência, normalmente pelo menos 10 dias antes, mencionando amamentação/aleitação'] },
        { kind: 'warning', text: 'O empregador não pode substituir estas 2 horas por “boa vontade”, férias ou tempo não remunerado. Se houver pressão, registe tudo por escrito e contacte a ACT — Autoridade para as Condições do Trabalho.' }
      ]
    },
    {
      id: 'expat-practicalities',
      title: 'O que é importante para expats',
      content: [
        { kind: 'paragraph', text: 'É melhor tratar do número de utente da mãe e da criança o mais cedo possível. Uma criança nascida em Portugal recebe acompanhamento médico através do SNS; a inscrição no Centro de Saúde é normalmente feita na área de residência da família.' },
        { kind: 'checklist', items: ['se ainda não tiver número de utente, recorra na mesma ao Centro de Saúde ou ao hospital — sobretudo nos primeiros dias após o parto', 'leve o relatório de alta da maternidade, o boletim da criança e os documentos dos pais', 'em maternidades privadas, peça também o relatório de alta para entregar no SNS', 'se não fala português, prepare frases com antecedência ou vá com um intérprete', 'numa consulta programada, leve a criança, fraldas, uma fralda de pano e biberão/leite extraído, se estiver a suplementar', 'se usa uma bomba tira-leite, pode mostrar o modelo e o regime de extração à enfermeira', 'em caso de depressão, ansiedade ou sensação de “não estou a conseguir”, peça também uma consulta de saúde mental/perinatal'] }
      ]
    }
  ],
  costs: [
    { label: 'Consulta de enfermagem / apoio à amamentação no SNS', amountEUR: 0, note: 'Para utentes do SNS com número de utente; em situações urgentes, a ajuda não deve ser adiada por motivos burocráticos.' },
    { label: 'Linha SOS Amamentação 800 200 200', amountEUR: 0, note: 'Linha telefónica gratuita de apoio ao aleitamento materno.' },
    { label: 'Consultora privada de lactação', amountEURMin: 40, amountEURMax: 100, note: 'Valor indicativo de mercado por visita/consulta online; não substitui cuidados médicos em caso de febre, mastite ou problemas com o peso da criança.' }
  ],
  sources: [
    { title: 'DGS — recomendações e materiais sobre aleitamento materno', url: 'https://www.dgs.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'SNS 24 — gravidez, pós-parto, bebé e acesso aos serviços do SNS', url: 'https://www.sns24.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código do Trabalho — art. 47, dispensa para amamentação ou aleitação', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2009-34546475', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Associação SOS Amamentação — Linha SOS Amamentação 800 200 200', url: 'https://www.sosamamentacao.org.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
