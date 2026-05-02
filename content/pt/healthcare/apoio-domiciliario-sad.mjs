export default {
  editorialVoice: 'hackportugal',
  id: 'apoio-domiciliario-sad',
  categoryId: 'healthcare',
  title: 'Serviço de Apoio Domiciliário (SAD): apoio em casa',
  tldr: 'O SAD é apoio social ao domicílio para pessoas idosas, pessoas com deficiência ou com dependência temporária: refeições, higiene, limpeza, lavandaria, acompanhamento ao médico, controlo da vida diária. Normalmente é tratado através de IPSS/Misericórdia/município com acordo de cooperação e pagamento conforme o rendimento do agregado familiar: muitas vezes 100–400 €/mês, por vezes menos em caso de baixo rendimento. Não é uma emergência nem um lar de idosos ERPI: para casos não agudos, o SAD é frequentemente mais rápido do que a lista de espera para ERPI.',
  tags: ['sad', 'idosos', 'apoio social', 'ipss'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-sad-is',
      title: 'O que é o SAD e para quem é adequado',
      content: [
        { kind: 'paragraph', text: 'O Serviço de Apoio Domiciliário é uma resposta social em que a pessoa continua a viver em casa, mas recebe apoio regular. Em Portugal, o SAD é normalmente prestado por IPSS, Santa Casa da Misericórdia, entidades paroquiais/municipais ou empresas privadas licenciadas.' },
        { kind: 'paragraph', text: 'É uma boa opção para um progenitor idoso, uma pessoa após uma cirurgia, em caso de deficiência, demência em fase inicial, mobilidade reduzida ou quando a família precisa de algum alívio durante algumas horas por dia.' },
        { kind: 'checklist', items: [
          'entrega diária ou várias vezes por semana de refeições ao domicílio',
          'ajuda na higiene pessoal, a vestir-se, a levantar-se da cama',
          'limpeza ligeira da zona habitada e mudança de roupa de cama',
          'lavandaria e tratamento da roupa',
          'compra de medicamentos e produtos básicos, se estiver incluído no plano',
          'acompanhamento a consultas no Centro de Saúde, hospital ou Finanças',
          'lembrete para a toma de medicamentos, mas não prescrição de tratamento',
          'contacto social: visitas, controlo do estado da pessoa, aviso à família',
          'por vezes teleassistência ou botão de alarme, se o prestador tiver esse serviço'
        ] },
        { kind: 'warning', text: 'O SAD não substitui o SNS, o médico, o enfermeiro ou o Serviço de Urgência. Pensos, injeções, cuidados paliativos e reabilitação passam pelo SNS, UCC/ECCI ou medicina privada. Em caso de queda, dor no peito, AVC, confusão aguda — 112.' }
      ]
    },
    {
      id: 'where-to-apply',
      title: 'Onde procurar um prestador',
      content: [
        { kind: 'paragraph', text: 'Comece pela zona da residência efetiva. O SAD é territorial: uma IPSS normalmente serve freguesias específicas e não aceita moradas fora do seu percurso.' },
        { kind: 'checklist', items: [
          'Junta de Freguesia: pedir a lista de IPSS, centros sociais e Misericórdia que servem a sua morada',
          'Câmara Municipal: departamento de Ação Social / Divisão de Intervenção Social',
          'Centro de Saúde: pedir a um social worker / assistente social que avalie a situação',
          'Segurança Social local: encaminhamento e informação sobre respostas sociais',
          'Carta Social: verificar respostas sociais licenciadas por concelho e freguesia',
          'Santa Casa da Misericórdia do concelho local',
          'empresas privadas de apoio domiciliário, se precisar de ajuda rapidamente ou à noite/fins de semana'
        ] },
        { kind: 'paragraph', text: 'Numa IPSS com acordo de cooperação, o preço é normalmente calculado de acordo com o rendimento do utilizador/agregado familiar. Numa empresa privada, o preço é contratual: início mais rápido, maior flexibilidade, mas mais caro.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documentos para o pedido',
      content: [
        { kind: 'paragraph', text: 'O conjunto de documentos depende da instituição, mas quase sempre são verificados a identidade, a morada, o rendimento e o grau de dependência. Para estrangeiros, são importantes o NIF, a morada e a permanência legal; a autorização de residência ajuda, mas o serviço social também pode analisar outros comprovativos de residência legal.' },
        { kind: 'checklist', items: [
          'passaporte ou Cartão de Cidadão / autorização de residência',
          'NIF do utilizador e, muitas vezes, NIF do representante da família',
          'Número de utente SNS, se existir',
          'NISS, se existir; para pensionistas de outro país, pode ser pedido comprovativo de pensão',
          'comprovativo de morada: contrato de arrendamento, fatura de serviços públicos ou atestado de residência da Junta de Freguesia',
          'declaração de IRS + nota de liquidação ou prova de inexistência de IRS em Portugal',
          'comprovativos de pensão, salário, pensão de sobrevivência, CSI ou outros apoios',
          'extratos bancários/IBAN, se a instituição exigir avaliação financeira',
          'declaração médica sobre dependência, deficiência, demência ou limitação de mobilidade',
          'lista de medicamentos e contactos do médico de família',
          'contactos do familiar/representante responsável e autorização de tratamento de dados'
        ] },
        { kind: 'warning', text: 'Não assine um contrato de prestação de serviços que não inclua o horário das visitas, o conjunto de serviços, o preço, as regras de cancelamento e a responsabilidade por chaves/acesso à casa. Peça uma cópia do regulamento interno.' }
      ]
    },
    {
      id: 'pricing',
      title: 'Quanto custa em 2026',
      content: [
        { kind: 'paragraph', text: 'Para SAD através de IPSS, o preço chama-se comparticipação familiar. É calculado pela instituição com base no rendimento por pessoa, nas despesas e no regulamento interno. Em 2026, o intervalo típico para um pacote básico é de cerca de 100–400 €/mês: por exemplo, entrega de refeições + higiene de manhã + limpeza ligeira várias vezes por semana.' },
        { kind: 'paragraph', text: 'Se o rendimento for muito baixo, o preço pode ser simbólico ou inferior a 100 €/mês. Se o rendimento for elevado, forem necessárias duas visitas diárias, fins de semana, dieta, transporte e acompanhamento — o valor pode ultrapassar 400 €/mês, especialmente junto de prestadores privados.' },
        { kind: 'checklist', items: [
          'pergunte se a alimentação está incluída no preço ou se é paga separadamente por refeição',
          'confirme se há suplemento por fins de semana e feriados',
          'verifique o custo de banho assistido separadamente da limpeza',
          'pergunte se fraldas, produtos de higiene e medicamentos estão incluídos — normalmente não estão',
          'confirme quem paga táxi/transporte para consultas',
          'peça o cálculo da comparticipação familiar por escrito',
          'compare IPSS e opção privada: por vezes a privada começa em 48–72 horas, mas fica por 15–25 €/hora'
        ] }
      ]
    },
    {
      id: 'waiting-and-priority',
      title: 'Lista de espera e prioridade',
      content: [
        { kind: 'paragraph', text: 'O SAD é frequentemente mais rápido do que a ERPI — lar/residência para pessoas idosas. Nas ERPI, as listas de espera em concelhos populares podem ser de meses ou mais; o SAD é mais fácil de escalar se o percurso já passar perto.' },
        { kind: 'checklist', items: [
          'a prioridade é maior se a pessoa viver sozinha e houver risco de quedas',
          'após internamento, peça ao hospital discharge social worker para contactar a IPSS',
          'em caso de demência, junte relatório médico: isto influencia a frequência das visitas',
          'se a família tiver de se ausentar, trate antecipadamente de temporary reinforcement, não no último dia',
          'se não houver vagas numa IPSS, apresente pedidos em 3–5 organizações que sirvam a sua morada',
          'pergunte à Câmara Municipal sobre programa municipal sénior, teleassistência ou apoio alimentar',
          'para cuidados médicos ao domicílio, peça em paralelo ao médico de família referenciação para ECCI, se indicado'
        ] },
        { kind: 'warning', text: 'Não espere pela crise. Quando já existem quedas, recusa alimentar ou deambulação noturna, o SAD pode ser insuficiente: é necessária avaliação pelo médico de família, neurologia/psiquiatria, apoio informal estruturado ou ERPI.' }
      ]
    },
    {
      id: 'contract-and-control',
      title: 'Como controlar a qualidade',
      content: [
        { kind: 'paragraph', text: 'Um SAD normal funciona com um plano de cuidados individual: dias, horas, tarefas, alimentação, riscos, contacto da família. Peça a revisão do plano ao fim de 30 dias: muitas vezes, a necessidade real só fica clara depois do início.' },
        { kind: 'checklist', items: [
          'deixe a lista de medicamentos, alergias, diagnósticos e contactos do médico em local visível',
          'faça um registo de visitas: data, hora, quem veio, o que fez',
          'designe um familiar para contactar o coordenador do SAD',
          'não guarde grandes quantias em dinheiro em casa',
          'se entregar chaves, formalize isso por escrito',
          'verifique a qualidade da comida e o cumprimento da dieta',
          'comunique imediatamente nódoas negras, quedas, visitas falhadas ou alterações do estado da pessoa',
          'a cada 3–6 meses, reveja o pacote: mais/menos visitas, alimentação, limpeza, acompanhamento'
        ] },
        { kind: 'paragraph', text: 'Se o serviço não corresponder ao contrato, apresente primeiro reclamação ao coordenador da instituição. Se for uma resposta social licenciada e o problema for grave, pode contactar a Segurança Social/ISS e usar o Livro de Reclamações.' }
      ]
    }
  ],
  costs: [
    { label: 'SAD através de IPSS, pacote básico', amountEURMin: 100, amountEURMax: 400, note: 'Valor de referência no mercado social em 2026; a comparticipação familiar efetiva depende do rendimento e do regulamento interno.' },
    { label: 'Apoio domiciliário privado', amountEURMin: 15, amountEURMax: 25, note: 'Valor de referência por hora nas cidades; noites, fins de semana e cuidados de elevada dependência são mais caros.' },
    { label: 'Entrega de refeições ao domicílio em separado', amountEURMin: 3.5, amountEURMax: 8, note: 'Por refeição, se não estiver incluída no pacote SAD; depende do concelho e do prestador.' }
  ],
  sources: [
    {
      title: 'Segurança Social: respostas sociais para pessoas idosas',
      url: 'https://www.seg-social.pt/idosos',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Carta Social: pesquisa de respostas sociais licenciadas, incluindo apoio domiciliário',
      url: 'https://www.cartasocial.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portaria 38/2013: condições de organização do Serviço de Apoio Domiciliário',
      url: 'https://diariodarepublica.pt/dr/detalhe/portaria/38-2013-258083',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei 64/2007: licenciamento e fiscalização de estabelecimentos sociais',
      url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/64-2007-519065',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
