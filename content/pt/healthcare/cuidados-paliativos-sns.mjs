export default {
  editorialVoice: 'hackportugal',
  id: 'cuidados-paliativos-sns',
  categoryId: 'healthcare',
  title: 'Cuidados paliativos no SNS — RNCCI Cuidados Paliativos',
  tldr: 'Os cuidados paliativos em Portugal consistem no controlo da dor e dos sintomas e no apoio à família em caso de doença grave e incurável, não apenas nos “últimos dias”. No SNS, o encaminhamento é feito pelo médico de família no Centro de Saúde ou pela equipa hospitalar. O apoio pode ser prestado em casa, no hospital, numa Unidade de Cuidados Paliativos ou através da RNCCI/ECCI. A componente médica no SNS é normalmente gratuita; medicamentos e componente social podem ter comparticipação segundo as regras do SNS/RNCCI.',
  tags: ['sns', 'rncci', 'paliativos', 'utente'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que está incluído nos cuidados paliativos',
      content: [
        { kind: 'paragraph', text: 'Cuidados Paliativos no SNS são cuidados especializados para pessoas com doenças progressivas, graves ou incuráveis: oncologia, insuficiência cardíaca/respiratória, demência, ALS, doenças neurológicas graves e outras doenças em que o objectivo é a qualidade de vida, o controlo da dor e o apoio à família.' },
        { kind: 'paragraph', text: 'Isto não equivale a “desistir do tratamento”. A equipa de cuidados paliativos pode trabalhar em paralelo com a oncologia, cardiologia, neurologia, reabilitação e o médico de família.' },
        { kind: 'checklist', items: [
          'controlo da dor, falta de ar, náuseas, ansiedade, insónia e outros sintomas',
          'ajuste da analgesia, incluindo opióides com receita SNS',
          'apoio psicológico e social ao paciente e à família',
          'plano de cuidados em casa: medicamentos, alimentação, escaras, situações de emergência',
          'formação do cuidador familiar: como levantar, alimentar, dar medicamentos e quando ligar ao médico',
          'coordenação com Centro de Saúde, hospital, RNCCI e serviços sociais',
          'apoio na tomada de decisões sobre hospitalização, reanimação e local de cuidados',
          'apoio à família durante o luto, se esse serviço estiver disponível na região'
        ] }
      ]
    },
    {
      id: 'routes',
      title: 'Para onde o paciente pode ser encaminhado: casa, hospital ou unidade',
      content: [
        { kind: 'paragraph', text: 'Em Portugal, os cuidados paliativos são organizados através do SNS e da Rede Nacional de Cuidados Paliativos, e parte dos cuidados continuados passa pela RNCCI. Na prática, o paciente não tem de escolher a rede sozinho: o encaminhamento é feito pelo médico e o sistema identifica o tipo de resposta disponível.' },
        { kind: 'substeps', items: [
          { id: 'home', title: 'Apoio em casa', content: [
            { kind: 'paragraph', text: 'Se o paciente puder permanecer em casa, o apoio pode ser prestado através de uma Equipa Comunitária de Suporte em Cuidados Paliativos ou através da ECCI na RNCCI, quando forem necessários cuidados continuados no domicílio. A equipa normalmente articula-se com o médico de família, os enfermeiros do Centro de Saúde e o cuidador.' }
          ] },
          { id: 'hospital', title: 'Equipa hospitalar de cuidados paliativos', content: [
            { kind: 'paragraph', text: 'No hospital, o encaminhamento pode ser feito pelo médico assistente. A equipa ajuda a controlar os sintomas, planear a alta e tratar do encaminhamento para a RNCCI ou para uma Unidade de Cuidados Paliativos.' }
          ] },
          { id: 'unit', title: 'Unidade de Cuidados Paliativos / internamento', content: [
            { kind: 'paragraph', text: 'Se não for possível controlar os sintomas em segurança em casa, o paciente pode ser encaminhado para internamento numa Unidade de Cuidados Paliativos ou noutra unidade adequada. A lista de espera e a disponibilidade dependem da região e da urgência clínica.' }
          ] }
        ] },
        { kind: 'warning', text: 'Não espere pelo “fim”. No SNS, o encaminhamento para uma equipa de cuidados paliativos já se justifica quando há hospitalizações frequentes, dor não controlada, fraqueza acentuada, perda de peso, demência progressiva ou quando a família tem dificuldade em assegurar os cuidados em casa.' }
      ]
    },
    {
      id: 'referral',
      title: 'Como obter encaminhamento no SNS',
      content: [
        { kind: 'paragraph', text: 'O caminho mais prático é através do médico de família no Centro de Saúde. Se o paciente já estiver internado no hospital, peça ao médico assistente ou à equipa de gestão de altas que trate do encaminhamento antes da alta.' },
        { kind: 'checklist', items: [
          'Número de utente SNS do paciente',
          'documento de identificação: autorização de residência, Cartão de Cidadão, passaporte ou outro ID',
          'NIF, se existir',
          'lista de diagnósticos e relatórios de alta do hospital',
          'lista actual de medicamentos com dosagens',
          'contactos do cuidador principal e morada onde o paciente se encontra efectivamente',
          'descrição dos sintomas: dor numa escala de 0 a 10, falta de ar, confusão, quedas, escaras',
          'informação sobre mobilidade: anda sozinho, com andarilho, está acamado, precisa de oxigénio',
          'existência de equipamento em casa: cama articulada, cadeira de rodas, colchão anti-escaras',
          'se for necessário intérprete — prepare antecipadamente uma pessoa que consiga falar português'
        ] },
        { kind: 'paragraph', text: 'Frase para o médico: “Queremos avaliação por cuidados paliativos / RNCCI, porque há dor e sintomas difíceis de controlar em casa.” É melhor falar de forma concreta: quantas vezes chamou a urgência, que medicamentos não ajudam, quem presta cuidados e o que se tornou impossível fazer em casa.' },
        { kind: 'warning', text: 'Se o estado se agravou subitamente — falta de ar intensa, dor forte, perda de consciência, hemorragia, convulsões — ligue 112 ou SNS 24: 808 24 24 24. O encaminhamento para a RNCCI não substitui os cuidados de emergência.' }
      ]
    },
    {
      id: 'costs-access',
      title: 'Quanto custa e quem tem direito',
      content: [
        { kind: 'paragraph', text: 'Para utentes do SNS, os cuidados paliativos médicos no sistema público normalmente não são pagos como um hospice privado. Desde 2022, a maioria das taxas moderadoras no SNS foi eliminada; os cuidados paliativos não devem transformar-se num serviço privado pago apenas porque o paciente é residente estrangeiro.' },
        { kind: 'paragraph', text: 'Na RNCCI, é importante distinguir a componente médica da componente social. Os serviços médicos são pagos pelo SNS. Em alguns tipos de cuidados continuados, a componente social pode ser comparticipada tendo em conta os rendimentos da família e a Segurança Social. O valor concreto é calculado no momento do encaminhamento; para cuidados paliativos clínicos, o essencial é ter utente e indicação médica.' },
        { kind: 'checklist', items: [
          'se tem autorização de residência e número de utente — peça encaminhamento através do médico de família',
          'se tem visto D1–D8 e já está registado no SNS — o caminho é o mesmo',
          'se ainda não tem utente — trate primeiro do número de utente no Centro de Saúde, mas em caso urgente recorra à urgência',
          'um seguro privado pode cobrir consultas e internamento, mas a RNCCI/SNS continua a ser tratada através do sistema público',
          'medicamentos com receita SNS podem ter comparticipação; parte do custo é paga pelo paciente',
          'equipamento para casa por vezes é disponibilizado através do hospital, Câmara Municipal, Segurança Social, instituições de solidariedade ou alugado no privado',
          'as listas de espera variam: Lisboa e Porto costumam estar mais sobrecarregados do que cidades pequenas'
        ] }
      ]
    },
    {
      id: 'family-caregiver',
      title: 'Apoio à família e ao cuidador',
      content: [
        { kind: 'paragraph', text: 'Os cuidados paliativos no SNS não olham apenas para o paciente, mas também para a família. O cuidador principal deve ser incluído no plano: a quem ligar à noite, que sintomas são perigosos, como administrar doses SOS, quando chamar o 112, como obter receitas e consumíveis.' },
        { kind: 'checklist', items: [
          'peça um plano de cuidados por escrito: medicamentos por horário, esquemas SOS, contactos da equipa',
          'confirme quem renova as receitas: médico de família, hospital ou equipa de cuidados paliativos',
          'peça formação sobre escaras, alimentação, higiene e transferências da cama',
          'pergunte sobre apoio domiciliário, refeições ao domicílio e ajuda da Junta de Freguesia',
          'se o cuidador trabalha — confirme os direitos a faltas, baixa ou Estatuto do Cuidador Informal na Segurança Social',
          'se os cuidados em casa se tornaram impossíveis — peça reavaliação para internamento RNCCI/Unidade de Cuidados Paliativos',
          'mantenha em casa uma lista de medicamentos, alergias, diagnósticos e uma cópia do Cartão de Utente para a ambulância'
        ] },
        { kind: 'warning', text: 'Não assine um contrato privado de cuidados dispendioso antes de perguntar ao hospital/Centro de Saúde sobre as opções do SNS e da RNCCI. Em Portugal existe uma via pública, mas exige encaminhamento e avaliação clínica.' }
      ]
    }
  ],
  costs: [
    { label: 'Consulta/acompanhamento no SNS por encaminhamento', amountEUR: 0, note: 'A maioria das taxas moderadoras no SNS foi eliminada; o acesso depende do utente e da indicação médica.' },
    { label: 'Componente médica RNCCI/SNS', amountEUR: 0, note: 'É paga pelo sistema público; a componente social em algumas respostas da RNCCI pode ser calculada separadamente com base nos rendimentos.' },
    { label: 'Medicamentos com receita SNS', amountEURMin: 0, amountEURMax: 100, note: 'O valor exacto depende do medicamento e do nível de comparticipação; alguns analgésicos e consumíveis podem exigir pagamento adicional.' }
  ],
  sources: [
    { title: 'SNS — informação sobre Cuidados Paliativos', url: 'https://www.sns.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'RNCCI — Rede Nacional de Cuidados Continuados Integrados', url: 'https://www.sns.gov.pt/sns-saude-mais/cuidados-continuados/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 52/2012 — Lei de Bases dos Cuidados Paliativos', url: 'https://diariodarepublica.pt/dr/detalhe/lei/52-2012-174841', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'SNS 24 — linha de contacto 808 24 24 24', url: 'https://www.sns24.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-30',
  verifyIntervalDays: 180
}
