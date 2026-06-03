export default {
  editorialVoice: 'hackportugal',
  id: 'ivg-interrupcao-gravidez',
  categoryId: 'healthcare',
  title: 'IVG — interrupção legal da gravidez até às 10 semanas no SNS',
  tldr: 'Em Portugal, a IVG — interrupção voluntária da gravidez — é legal por opção da mulher até às 10 semanas de gravidez, nos termos da Lei 16/2007. No SNS, a marcação começa normalmente através do SNS 24: 808 24 24 24. São obrigatórios uma consulta prévia, a confirmação do tempo de gravidez, o consentimento informado e pelo menos 3 dias de “período de reflexão”. No SNS, o procedimento é gratuito para utentes do SNS; a mulheres estrangeiras sem autorização de residência não pode ser recusado atendimento por causa da nacionalidade, mas administrativamente podem ser pedidos número de utente/passaporte/morada e verificado o direito à cobertura dos custos.',
  tags: ['ivg', 'sns', 'gravidez', 'direitos'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'legal-frame',
      title: 'O que é permitido por lei',
      content: [
        { kind: 'paragraph', text: 'IVG — interrupção voluntária da gravidez — é a interrupção voluntária da gravidez.\n\nEm Portugal, é permitida por opção da grávida até às 10 semanas de gravidez, se for realizada por médico ou sob a sua orientação, em estabelecimento de saúde oficial ou oficialmente reconhecido.' },
        { kind: 'paragraph', text: 'A base legal é a Lei 16/2007, que alterou o regime do art. 142 do Código Penal. A lei aplica-se independentemente da nacionalidade: as condições essenciais são o prazo, o local de realização, o consentimento informado e o cumprimento do procedimento obrigatório.' },
        { kind: 'checklist', items: [
          'Prazo por opção da mulher: até às 10 semanas de gravidez.',
          'Depois das 10 semanas, só são possíveis fundamentos especiais: risco para a vida/saúde, patologia grave do feto, gravidez resultante de crime sexual e outros casos expressamente previstos na lei.',
          'É necessária consulta prévia.',
          'Depois da consulta prévia, é obrigatório um período de reflexão de pelo menos 3 dias.',
          'É necessário consentimento escrito — consentimento livre e esclarecido.',
          'O procedimento é realizado no SNS ou numa clínica/hospital privado reconhecido para IVG.',
          'Os profissionais de saúde podem invocar objeção de consciência, mas a instituição deve encaminhar a paciente de forma a não comprometer o prazo.'
        ] },
        { kind: 'warning', text: '10 semanas é um prazo prático rígido. Não espere “mais uns dias”: a marcação, a ecografia, a consulta e os 3 dias obrigatórios podem demorar. Se estiver perto das 10 semanas, telefone para o SNS 24 no próprio dia.' }
      ]
    },
    {
      id: 'booking',
      title: 'Como marcar no SNS',
      content: [
        { kind: 'paragraph', text: 'O caminho mais directo é telefonar para o SNS 24 através do número 808 24 24 24 e dizer: “Quero marcar uma consulta para interrupção voluntária da gravidez”. O operador encaminhá-la-á para a unidade de saúde / hospital da área competente.' },
        { kind: 'checklist', items: [
          'Telefone para o SNS 24: 808 24 24 24.',
          'Indique o local onde vive em Portugal e o tempo de gravidez estimado.',
          'Se tiver número de utente — indique-o.',
          'Se não tiver utente — diga que está em Portugal e precisa de IVG dentro do prazo das 10 semanas.',
          'Anote o nome do hospital/ULS, a data, a hora e o que deve levar consigo.',
          'Se não fala português, peça: “Preciso de atendimento em inglês” ou vá com um intérprete.',
          'Se o prazo estiver próximo, diga claramente: “Estou perto das 10 semanas”.'
        ] },
        { kind: 'paragraph', text: 'Em alternativa, pode dirigir-se a um Centro de Saúde, USF/UCSP ou directamente a um hospital do SNS, se esse for o procedimento habitual na sua região. Mas o SNS 24 costuma indicar mais rapidamente o percurso correcto.' },
        { kind: 'warning', text: 'Nem todos os ginecologistas privados fazem IVG e nem todos encaminham rapidamente. Para cumprir o prazo, é mais seguro telefonar em paralelo para o SNS 24 desde logo.' }
      ]
    },
    {
      id: 'procedure',
      title: 'O que acontece nas consultas',
      content: [
        { kind: 'substeps', items: [
          { id: 'consulta-previa', title: '1. Consulta prévia', content: [
            { kind: 'paragraph', text: 'Na consulta prévia, o médico confirma a gravidez e o tempo de gestação, explica os métodos disponíveis, os riscos, os sinais de complicações e as opções de apoio. Normalmente é feita ou marcada uma ecografia, para determinar exactamente o tempo de gravidez e excluir contraindicações médicas.' },
            { kind: 'checklist', items: [
              'Passaporte, Cartão de Residência ou outro documento de identificação.',
              'Número de utente, se tiver.',
              'NIF — útil, mas não é um documento médico essencial.',
              'Documentos sobre a gravidez/ecografia/análises, se já os tiver.',
              'Lista de medicamentos e alergias.',
              'Número de telefone de contacto em Portugal.',
              'Morada de residência ou de estadia temporária.'
            ] }
          ] },
          { id: 'reflection', title: '2. 3 dias de espera obrigatória', content: [
            { kind: 'paragraph', text: 'Depois da consulta prévia, a lei exige um período de reflexão mínimo de 3 dias. Isto não é uma “fila de espera”, mas sim uma condição jurídica obrigatória. O procedimento não pode ser realizado antes, mesmo que a decisão já esteja tomada.' },
            { kind: 'warning', text: 'Se a equipa médica marcar uma data que ultrapasse as 10 semanas, peça encaminhamento urgente para outra unidade ou hospital. Formulação: “Preciso de referenciação urgente por limite legal de 10 semanas”.' }
          ] },
          { id: 'intervention', title: '3. Método medicamentoso ou cirúrgico', content: [
            { kind: 'paragraph', text: 'O método é escolhido pelo médico tendo em conta o tempo de gravidez, o historial clínico e o protocolo da instituição. Nas fases iniciais, é frequente ser utilizado o método medicamentoso; em alguns casos — o método cirúrgico/por aspiração. Depois do procedimento, normalmente são marcados controlo, contracepção e instruções sobre quando procurar ajuda urgente.' }
          ] }
        ] }
      ]
    },
    {
      id: 'costs-and-non-residents',
      title: 'Custos e direitos das mulheres estrangeiras',
      content: [
        { kind: 'paragraph', text: 'No SNS, a IVG faz parte dos cuidados de saúde legalmente previstos. Para utentes do SNS, o procedimento é normalmente gratuito. Após a eliminação da maioria das taxas moderadoras no SNS, as pacientes não devem pagar a taxa “de entrada” padrão por cuidados programados.' },
        { kind: 'paragraph', text: 'A nacionalidade não é fundamento para recusar uma IVG dentro dos limites da lei. Na prática, a administração pode pedir número de utente, passaporte, morada e documentos relativos ao direito à cobertura dos custos: autorização de residência, visto, CRUE para cidadãos da UE, EHIC/GHIC, S1 ou seguro privado.' },
        { kind: 'checklist', items: [
          'Se é residente e tem número de utente — utilize o percurso normal do SNS.',
          'Se ainda não tem autorização de residência, mas vive em Portugal, telefone na mesma para o SNS 24 e peça marcação; em paralelo, trate do utente no Centro de Saúde.',
          'Se é cidadã da UE/EEE/Suíça e está temporariamente em Portugal — leve o EHIC e o passaporte/ID.',
          'Se é turista de um país terceiro — o procedimento é legal, mas o SNS pode emitir uma factura se não houver direito à cobertura; confirme antes da consulta.',
          'Se o prazo for crítico, a questão do pagamento não deve atrasar o encaminhamento médico: primeiro garanta a marcação e a confirmação do tempo de gravidez.',
          'Em caso de hemorragia, dor intensa, febre ou desmaio, ligue 112 ou dirija-se à urgência — a assistência de emergência é prestada independentemente do estatuto.'
        ] },
        { kind: 'warning', text: 'Não aceite “esquemas caseiros”, comprimidos da internet ou ajuda de pessoas sem licença médica. Isto representa um risco para a saúde e pode criar problemas jurídicos. O caminho legal é o SNS ou um estabelecimento de saúde reconhecido.' }
      ]
    },
    {
      id: 'confidentiality-minors-language',
      title: 'Confidencialidade, menores e língua',
      content: [
        { kind: 'paragraph', text: 'A informação médica sobre IVG está protegida pelo sigilo médico e pelas regras de protecção de dados pessoais. O empregador, senhorio, escola, parceiro ou familiares não têm acesso a esta informação sem fundamento legal.' },
        { kind: 'checklist', items: [
          'A paciente maior de idade toma a decisão por si própria.',
          'A paciente tem o direito de fazer perguntas e de recusar o procedimento até à sua realização.',
          'Pode pedir instruções escritas numa língua que compreenda ou ir com um intérprete.',
          'Pode pedir uma consulta de contracepção após a IVG.',
          'Se foi vítima de violência sexual, informe o médico: isso influencia o apoio médico e jurídico.',
          'Para menores, aplicam-se regras próprias de consentimento e de participação do representante legal; se a situação não for segura, diga-o directamente ao médico.'
        ] },
        { kind: 'warning', text: 'Se o parceiro ou a família a estiverem a pressionar — diga-o ao médico a sós. A coacção para interromper ou para manter a gravidez não é normal; o SNS pode encaminhar para apoio social e psicológico.' }
      ]
    }
  ],
  costs: [
    { label: 'IVG no SNS para utente do SNS', amountEUR: 0, note: 'Normalmente gratuita quando existe direito a cuidados no SNS; as taxas moderadoras padrão para cuidados programados no SNS foram eliminadas.' },
    { label: 'Chamada para o SNS 24', amountEURMin: 0, amountEURMax: 1, note: '808 24 24 24 — o custo depende do tarifário do operador; não é um serviço médico pago.' },
    { label: 'Clínica privada', amountEURMin: 300, amountEURMax: 800, note: 'Valor indicativo de mercado, não uma tarifa pública; o preço depende da clínica, do tempo de gravidez, do método e das análises.' }
  ],
  sources: [
    {
      title: 'SNS 24: Interrupção da gravidez',
      url: 'https://www.sns24.gov.pt/tema/saude-sexual/interrupcao-da-gravidez/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DRE: Lei 16/2007 — exclusão da ilicitude nos casos de interrupção voluntária da gravidez',
      url: 'https://dre.pt/dre/legislacao-consolidada/lei/2007-34546675',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'SNS 24: acesso de cidadãos estrangeiros aos cuidados de saúde',
      url: 'https://www.sns24.gov.pt/guia/acesso-de-cidadaos-estrangeiros-a-cuidados-de-saude/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
