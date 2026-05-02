export default {
  editorialVoice: 'hackportugal',
  id: 'estatuto-doente-cronico',
  categoryId: 'healthcare',
  title: 'Estatuto de Doente Crónico',
  tldr: 'Em Portugal não existe um “cartão de doente crónico” único para todas as situações: o estatuto é registado pelo médico do SNS, normalmente o médico de família, no seu processo clínico e nas receitas. Serve para isenção de taxas moderadoras nos casos do SNS que ainda são pagos e para comparticipação especial de medicamentos: em protocolos de diabetes, oncologia, asma, hipertensão e outros, parte dos medicamentos pode ser comparticipada a 100% pelo Estado. Em 2026, as taxas moderadoras estão quase abolidas, mas uma urgência sem referenciação ainda pode custar 14–18 €.',
  tags: ['sns', 'doença crónica', 'medicamentos', 'utente'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que é na prática',
      content: [
        { kind: 'paragraph', text: 'O Estatuto de Doente Crónico não é um documento de plástico separado nem um benefício universal. Na prática, é a confirmação médica de uma doença crónica no sistema SNS: diagnóstico, tratamento prolongado, receitas activas e, quando aplicável, direito a comparticipação especial de medicamentos ou isenção de taxas moderadoras.' },
        { kind: 'paragraph', text: 'Na maioria dos casos, aplica-se a diabetes mellitus, hipertensão arterial, asma/DPOC, doenças oncológicas, doenças reumáticas, doenças neurológicas e cardiovasculares, insuficiência renal crónica e outras situações em que o tratamento dura meses ou é vitalício.' },
        { kind: 'warning', text: 'Nem todas as doenças crónicas dão automaticamente direito ao pagamento a 100% de todos os medicamentos. O Estado comparticipa em regime especial apenas medicamentos, dispositivos ou substâncias activas incluídos num protocolo/Despacho/Portaria concreto e correctamente prescritos pelo médico.' }
      ]
    },
    {
      id: 'benefits',
      title: 'O que o estatuto dá em 2026',
      content: [
        { kind: 'checklist', items: [
          'Registo da doença crónica no processo clínico SNS — visível para o médico, enfermeiro e farmacêutico através da receita electrónica.',
          'Receita sem papel para tratamento prolongado: o médico pode emitir receitas renováveis, para que não tenha de ir todos os meses apenas pedir renovação.',
          'Comparticipação especial de medicamentos: os escalões normais em Portugal são 90%, 69%, 37% ou 15%, mas em alguns protocolos pode ser 100%.',
          'Para diabetes: a insulina é normalmente totalmente comparticipada; agulhas, lancetas e seringas para autocontrolo podem ter comparticipação de 100%, e as tiras-teste seguem um regime próprio.',
          'Para doenças oncológicas: muitos medicamentos são dispensados através da farmácia hospitalar do SNS sem pagamento pelo paciente, se o tratamento for prescrito num hospital público.',
          'Para asma, hipertensão e doenças cardiovasculares: a comparticipação depende do medicamento concreto e do protocolo clínico, nem sempre é 100%.',
          'Isenção de taxas moderadoras nos casos em que ainda são cobradas, se a sua categoria estiver abrangida pelas regras do SNS ou se tiver sido activado um benefício específico.',
          'Acesso mais simples a follow-up: consultas de vigilância, análises, renovação de receita, vacinação por indicação clínica.'
        ] },
        { kind: 'paragraph', text: 'Desde 2022, as taxas moderadoras no SNS estão quase abolidas. Em 2026, mantêm-se sobretudo para urgência hospitalar sem referenciação do SNS 24, INEM, médico de família ou sem internamento posterior. Como referência: Serviço de Urgência Básica — 14 €, Médico-Cirúrgica — 16 €, Polivalente — 18 €, mais eventuais exames.' }
      ]
    },
    {
      id: 'how-to-get',
      title: 'Como tratar através do SNS',
      content: [
        { kind: 'substeps', items: [
          { id: 'prepare-documents', title: '1. Preparar documentos e historial clínico', content: [
            { kind: 'checklist', items: [
              'Número de utente SNS.',
              'Documento de identificação: autorização de residência, Cartão de Cidadão, passaporte com visto ou CRUE para cidadãos da UE.',
              'NIF — frequentemente necessário para o registo administrativo e para receitas.',
              'Lista dos medicamentos actuais: nome, dosagem, quantas vezes por dia.',
              'Relatórios, análises, pareceres de especialista de Portugal ou de outro país.',
              'Se os documentos não estiverem em português/inglês — uma tradução breve do diagnóstico e do esquema terapêutico.',
              'Fotografias das embalagens dos medicamentos — ajudam a encontrar equivalentes portugueses pela substância activa.'
            ] }
          ]},
          { id: 'book-appointment', title: '2. Marcar consulta com o médico de família', content: [
            { kind: 'paragraph', text: 'A via principal é uma consulta no seu Centro de Saúde / USF / UCSP. Se ainda não tiver médico de família atribuído, peça uma consulta aberta ou consulta de recurso. Um médico privado pode emitir um relatório, mas os benefícios do SNS normalmente têm de ser confirmados e registados por um médico do SNS.' }
          ]},
          { id: 'medical-declaration', title: '3. Obter declaração médica e actualizar as receitas', content: [
            { kind: 'paragraph', text: 'Peça ao médico para registar o diagnóstico como crónico, indicar a necessidade de tratamento prolongado e emitir Receita sem papel com o regime de comparticipação correcto. Para algumas doenças, o médico selecciona um regime especial no sistema de receitas; sem isso, a farmácia aplicará o desconto normal, não o regime bonificado.' }
          ]},
          { id: 'confirm-exemption', title: '4. Confirmar a isenção na parte administrativa', content: [
            { kind: 'paragraph', text: 'Depois da consulta, dirija-se à secretaria do Centro de Saúde e pergunte se a isenção de taxas moderadoras está activa no Registo Nacional de Utentes. Por vezes, o registo médico e o benefício administrativo são actos diferentes.' }
          ]}
        ] }
      ]
    },
    {
      id: 'pharmacy',
      title: 'Como comprar medicamentos com benefício 💊',
      content: [
        { kind: 'paragraph', text: 'Na farmácia, apresente o número da receita/SMS, Cartão de Cidadão ou documento com o número de utente. O desconto é aplicado automaticamente se a receita tiver sido emitida como comparticipada e com o regime correcto seleccionado.' },
        { kind: 'checklist', items: [
          'Verifique o talão: nele vê o preço total, a comparticipação do Estado e o valor a pagar.',
          'Se o medicamento deveria ser a 100%, mas a farmácia pede pagamento, confirme primeiro se não foi prescrito no regime normal em vez do regime especial.',
          'Peça ao médico de família para prescrever pela substância activa, se os genéricos forem adequados para si — muitas vezes é mais barato e mais disponível.',
          'Não altere a marca da insulina, do inalador ou do medicamento oncológico sem validação do médico.',
          'Se o medicamento não estiver disponível, a farmácia pode encomendar ou propor um equivalente; para alguns medicamentos hospitalares é necessário ir à farmácia hospitalar.',
          'Guarde as faturas com NIF: parte das despesas de saúde entra no e-Fatura e é considerada no IRS.'
        ] },
        { kind: 'warning', text: 'O benefício não é reembolsado automaticamente “com efeitos retroactivos”. Se a receita tiver sido emitida de forma incorrecta e pagou, normalmente tem de pedir ao médico que volte a emitir a receita antes da compra, não depois.' }
      ]
    },
    {
      id: 'common-cases',
      title: 'Casos frequentes: diabetes, asma, hipertensão, oncologia',
      content: [
        { kind: 'checklist', items: [
          'Diabetes: peça para tratar logo da insulina/comprimidos, material de autocontrolo, plano de análises HbA1c e consultas de enfermagem de diabetes.',
          'Hipertensão: leve medições de tensão arterial feitas em casa durante 1–2 semanas; o médico ajustará o esquema e emitirá receitas prolongadas.',
          'Asma/DPOC: é importante mostrar os inaladores antigos e resultados de espirometria, se tiver; inaladores diferentes têm comparticipações diferentes.',
          'Oncologia: o tratamento é normalmente acompanhado por um hospital SNS; as receitas e a dispensa de medicamentos passam muitas vezes pela farmácia hospitalar, não por uma farmácia comum.',
          'Dor crónica/reumatologia: parte dos medicamentos exige especialista e prescrição hospitalar; o médico de família pode acompanhar a medicação base, mas não tudo.',
          'Doenças psiquiátricas crónicas: antidepressivos, antipsicóticos e estabilizadores do humor têm os seus próprios níveis de comparticipação; 100% não é garantido.'
        ] },
        { kind: 'paragraph', text: 'Se chegou a Portugal com um diagnóstico já estabelecido, não espere até os medicamentos acabarem. Marque consulta no Centro de Saúde assim que tiver o número de utente: a escolha de um equivalente e a confirmação do benefício podem demorar várias semanas.' }
      ]
    },
    {
      id: 'problems',
      title: 'Se recusarem ou nada ficar activado',
      content: [
        { kind: 'checklist', items: [
          'Peça uma explicação por escrito: a recusa é médica ou administrativa.',
          'Confirme se tem um número de utente activo e a morada correcta no Centro de Saúde.',
          'Peça ao médico de família uma declaração médica de doença crónica com o diagnóstico e o tratamento permanente.',
          'Se não tiver médico de família, peça consulta aberta e inscrição na lista de utentes sem médico.',
          'Se a questão for o medicamento, confirme com o médico o código do regime de comparticipação e se o medicamento consta da lista do Infarmed.',
          'Ligue para o SNS 24: 808 24 24 24 — podem indicar o encaminhamento e registar o pedido.',
          'Em caso de problema sistémico, apresente reclamação no Livro de Reclamações ou através do gabinete do utente do hospital/ACES.'
        ] },
        { kind: 'warning', text: 'O Atestado Médico de Incapacidade Multiuso com incapacidade ≥60% é um procedimento separado através de junta médica e não equivale ao Estatuto de Doente Crónico. Pode dar benefícios fiscais e médicos adicionais, mas é tratado separadamente.' }
      ]
    }
  ],
  costs: [
    { label: 'Tratamento do estatuto no SNS', amountEUR: 0, note: 'A consulta e o registo administrativo no SNS são normalmente sem taxas moderadoras.' },
    { label: 'Urgência Básica sem referenciação', amountEUR: 14, note: 'Apenas se não houver referenciação do SNS/INEM/médico e não houver internamento posterior; com isenção — 0 €.' },
    { label: 'Urgência Médico-Cirúrgica sem referenciação', amountEUR: 16, note: 'Referência de taxas moderadoras 2026 para utentes não isentos.' },
    { label: 'Urgência Polivalente sem referenciação', amountEUR: 18, note: 'Referência de taxas moderadoras 2026 para utentes não isentos.' }
  ],
  sources: [
    {
      title: 'SNS 24 — isenção de taxas moderadoras',
      url: 'https://www.sns24.gov.pt/guia/isencao-de-taxas-moderadoras/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'SNS 24 — medicamentos e comparticipação',
      url: 'https://www.sns24.gov.pt/tema/medicamentos/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DGS — programas de saúde e doenças crónicas',
      url: 'https://www.dgs.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Infarmed — comparticipação de medicamentos',
      url: 'https://www.infarmed.pt/web/infarmed/entidades/medicamentos-uso-humano/avaliacao-tecnologias-saude/comparticipacao-de-medicamentos',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
