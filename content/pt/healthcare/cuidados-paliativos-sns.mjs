export default {
  editorialVoice: 'hackportugal',
  id: 'cuidados-paliativos-sns',
  categoryId: 'healthcare',
  title: 'Cuidados paliativos no SNS — RNCCI Cuidados Paliativos',
  tldr: 'Os cuidados paliativos em Portugal consistem no controlo da dor e dos sintomas e no apoio à família em caso de doença grave e incurável, não apenas nos “últimos dias”. No SNS, o encaminhamento é feito pelo médico de família no Centro de Saúde ou pela equipa hospitalar. O apoio pode ser prestado em casa, no hospital, numa Unidade de Cuidados Paliativos ou através da RNCCI/ECCI. A componente médica no SNS é geralmente gratuita; os medicamentos e a componente social podem ter comparticipação de acordo com as regras do SNS/RNCCI.',
  tags: ['sns', 'rncci', 'paliativos', 'utente'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que inclui os cuidados paliativos',
      content: [
        { kind: 'paragraph', text: 'Cuidados Paliativos no SNS são cuidados especializados para pessoas com doenças progressivas, graves ou incuráveis: oncologia, insuficiência cardíaca/respiratória, demência, ELA, doenças neurológicas graves e outras doenças em que o objectivo é a qualidade de vida, o controlo da dor e o apoio à família.' },
        { kind: 'paragraph', text: 'Isto não significa “desistir do tratamento”. A equipa paliativa pode trabalhar em paralelo com a oncologia, cardiologia, neurologia, reabilitação e o médico de família.' },
        { kind: 'checklist', items: [
          'controlo da dor, falta de ar, náuseas, ansiedade, insónia e outros sintomas',
          'ajuste da analgesia, incluindo opióides mediante receita do SNS',
          'apoio psicológico e social ao doente e à família',
          'plano de cuidados em casa: medicamentos, alimentação, escaras, situações de emergência',
          'formação do cuidador familiar: como levantar, alimentar, administrar medicamentos, quando telefonar ao médico',
          'coordenação com Centro de Saúde, hospital, RNCCI e serviços sociais',
          'apoio na tomada de decisões sobre internamento, reanimação, local dos cuidados',
          'apoio à família no período de luto, se esse serviço estiver disponível na região'
        ] }
      ]
    },
    {
      id: 'routes',
      title: 'Para onde podem encaminhar: casa, hospital ou unidade',
      content: [
        { kind: 'paragraph', text: 'Em Portugal, os cuidados paliativos são organizados através do SNS e da Rede Nacional de Cuidados Paliativos, e parte dos cuidados de longa duração passa pela RNCCI. Na prática, o doente não tem de escolher a rede sozinho: o encaminhamento é feito pelo médico e o sistema identifica o tipo de resposta disponível.' },
        { kind: 'substeps', items: [
          { id: 'home', title: 'Apoio em casa', content: [
            { kind: 'paragraph', text: 'Se o doente puder permanecer em casa, o apoio pode ser prestado através de uma Equipa Comunitária de Suporte em Cuidados Paliativos ou através da ECCI na RNCCI, quando são necessários cuidados continuados ao domicílio. A equipa interage normalmente com o médico de família, os enfermeiros do Centro de Saúde e o cuidador.' }
          ] },
          { id: 'hospital', title: 'Equipa paliativa hospitalar', content: [
            { kind: 'paragraph', text: 'No hospital, o encaminhamento pode ser feito pelo médico assistente. A equipa ajuda a controlar sintomas, planear a alta, formalizar o encaminhamento para a RNCCI ou para uma Unidade de Cuidados Paliativos.' }
          ] },
          { id: 'unit', title: 'Unidade de Cuidados Paliativos / internamento', content: [
            { kind: 'paragraph', text: 'Se não for possível controlar os sintomas em segurança em casa, o doente pode ser encaminhado para uma Unidade de Cuidados Paliativos com internamento ou para outra unidade adequada. A lista de espera e a disponibilidade dependem da região e da urgência clínica.' }
          ] }
        ] },
        { kind: 'warning', text: 'Não espere pelo “fim”. No SNS, o encaminhamento para uma equipa paliativa já se justifica perante internamentos frequentes, dor não controlada, fraqueza acentuada, perda de peso, demência progressiva ou quando a família tem dificuldade em assegurar os cuidados em casa.' }
      ]
    },
    {
      id: 'referral',
      title: 'Como obter encaminhamento no SNS',
      content: [
        { kind: 'paragraph', text: 'O caminho mais prático é através do médico de família no Centro de Saúde. Se o doente já estiver internado no hospital, peça ao médico assistente ou à equipa de gestão de altas para formalizar o encaminhamento antes da alta.' },
        { kind: 'checklist', items: [
          'Número de utente SNS do doente',
          'documento de identificação: autorização de residência, Cartão de Cidadão, passaporte ou outro ID',
          'NIF, se existir',
          'lista de diagnósticos e relatórios de alta do hospital',
          'lista actual de medicamentos com dosagens',
          'contactos do cuidador principal e morada onde o doente se encontra efectivamente',
          'descrição dos sintomas: dor numa escala de 0–10, falta de ar, confusão, quedas, escaras',
          'informação sobre mobilidade: anda sozinho, com andarilho, acamado, precisa de oxigénio',
          'existência de equipamento em casa: cama articulada, cadeira de rodas, colchão anti-escaras',
          'se for necessário intérprete — prepare antecipadamente uma pessoa que consiga falar português'
        ] },
        { kind: 'paragraph', text: 'Frase para o médico: “Queremos avaliação por cuidados paliativos / RNCCI, porque há dor e sintomas difíceis de controlar em casa.” É melhor falar de forma concreta: quantas vezes chamaram a urgência, que medicamentos não ajudam, quem presta os cuidados, o que deixou de ser possível fazer em casa.' },
        { kind: 'warning', text: 'Se o estado se agravar subitamente — falta de ar intensa, dor forte, perda de consciência, hemorragia, convulsões — ligue 112 ou SNS 24: 808 24 24 24. O encaminhamento para a RNCCI não substitui a ajuda de emergência.' }
      ]
    },
    {
      id: 'costs-access',
      title: 'Quanto custa e quem tem direito',
      content: [
        { kind: 'paragraph', text: 'Para os utentes do SNS, os cuidados paliativos médicos no sistema público geralmente não são pagos como um hospice privado. Desde 2022, a maioria das taxas moderadoras no SNS foi eliminada; os cuidados paliativos não devem transformar-se num serviço privado pago apenas porque o doente é residente estrangeiro.' },
        { kind: 'paragraph', text: 'Na RNCCI, é importante distinguir entre a componente médica e a componente social. Os serviços médicos são pagos pelo SNS. Em alguns tipos de cuidados continuados, a componente social pode ser comparticipada tendo em conta os rendimentos da família e a Segurança Social. O montante concreto é calculado no momento do encaminhamento; para os cuidados paliativos clínicos, o essencial é ter utente e indicação médica.' },
        { kind: 'checklist', items: [
          'se tiver autorização de residência e número de utente — peça encaminhamento através do médico de família',
          'se tiver visto D1–D8 e já estiver inscrito no SNS — o caminho é o mesmo',
          'se ainda não tiver utente — trate primeiro do número de utente no Centro de Saúde, mas em caso urgente recorra à urgência',
          'um seguro privado pode cobrir consultas e internamento, mas a RNCCI/SNS continua a ser formalizada através do sistema público',
          'medicamentos com receita do SNS podem ter comparticipação; uma parte do custo é paga pelo doente',
          'equipamento para casa é por vezes fornecido através do hospital, Câmara Municipal, Segurança Social, instituições de solidariedade ou alugado no privado',
          'as listas de espera variam: Lisboa e Porto estão geralmente mais sobrecarregados do que as cidades pequenas'
        ] }
      ]
    },
    {
      id: 'family-caregiver',
      title: 'Apoio à família e ao cuidador',
      content: [
        { kind: 'paragraph', text: 'Os cuidados paliativos no SNS olham não só para o doente, mas também para a família. O cuidador principal deve ser incluído no plano: a quem telefonar à noite, que sintomas são perigosos, como administrar doses SOS, quando chamar o 112, como obter receitas e consumíveis.' },
        { kind: 'checklist', items: [
          'peça um plano de cuidados escrito: medicamentos por horário, esquemas SOS, contactos da equipa',
          'confirme quem renova as receitas: médico de família, hospital ou equipa paliativa',
          'peça formação sobre escaras, alimentação, higiene, transferências da cama',
          'pergunte sobre apoio domiciliário, refeições ao domicílio e ajuda da Junta de Freguesia',
          'se o cuidador trabalha — verifique os direitos a faltas, baixa ou Estatuto do Cuidador Informal na Segurança Social',
          'se os cuidados em casa se tornarem impossíveis — peça reavaliação para internamento RNCCI/Unidade de Cuidados Paliativos',
          'mantenha em casa uma lista de medicamentos, alergias, diagnósticos e uma cópia do Cartão de Utente para a ambulância'
        ] },
        { kind: 'warning', text: 'Não assine um contrato privado para cuidados caros antes de perguntar ao hospital/Centro de Saúde sobre as opções do SNS e da RNCCI. Em Portugal existe um percurso público, mas exige encaminhamento e avaliação clínica.' }
      ]
    }
  ],
  costs: [
    { label: 'Consulta/acompanhamento no SNS por encaminhamento', amountEUR: 0, note: 'A maioria das taxas moderadoras no SNS foi eliminada; o acesso depende do utente e da indicação médica.' },
    { label: 'Componente médica RNCCI/SNS', amountEUR: 0, note: 'É paga pelo sistema público; a componente social em algumas respostas da RNCCI pode ser calculada separadamente de acordo com os rendimentos.' },
    { label: 'Medicamentos com receita do SNS', amountEURMin: 0, amountEURMax: 100, note: 'O montante exacto depende do medicamento e do nível de comparticipação; alguns analgésicos e consumíveis podem exigir pagamento parcial.' }
  ],
  sources: [
    { title: 'SNS — informação sobre Cuidados Paliativos', url: 'https://www.sns.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'RNCCI — Rede Nacional de Cuidados Continuados Integrados', url: 'https://www.rncci.min-saude.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 52/2012 — Lei de Bases dos Cuidados Paliativos', url: 'https://diariodarepublica.pt/dr/detalhe/lei/52-2012-174841', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'SNS 24 — linha de contacto 808 24 24 24', url: 'https://www.sns24.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
