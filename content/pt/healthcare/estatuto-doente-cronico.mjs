export default {
  editorialVoice: 'hackportugal',
  id: 'estatuto-doente-cronico',
  categoryId: 'healthcare',
  title: 'Estatuto de Doente Crónico — estatuto de doente crónico',
  tldr: 'Em Portugal não existe um único “cartão de doente crónico” para todas as situações: o estatuto é registado pelo médico do SNS, normalmente o médico de família, no seu processo clínico e nas receitas. É necessário para a isenção de taxas moderadoras nos casos do SNS que ainda são pagos e para a comparticipação especial de medicamentos: ao abrigo de protocolos para diabetes, oncologia, asma, hipertensão e outros, alguns medicamentos podem ser pagos a 100% pelo Estado. Em 2026 as taxas moderadoras estão quase abolidas, mas uma urgência sem referenciação ainda pode custar 14–18 €.',
  tags: ['sns', 'doença crónica', 'medicamentos', 'utente'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que é na prática',
      content: [
        { kind: 'paragraph', text: 'Estatuto de Doente Crónico não é um documento plástico separado nem um benefício universal. Na prática, é a confirmação médica de uma doença crónica no sistema SNS: diagnóstico, tratamento prolongado, receitas ativas e, quando aplicável, direito a comparticipação especial de medicamentos ou isenção de taxas moderadoras.' },
        { kind: 'paragraph', text: 'Na maioria dos casos, aplica-se a diabetes mellitus, hipertensão arterial, asma/DPOC, doenças oncológicas, doenças reumáticas, doenças neurológicas e cardiovasculares, insuficiência renal crónica e outras condições em que o tratamento dura meses ou é vitalício.' },
        { kind: 'warning', text: 'Nem todas as doenças crónicas dão automaticamente direito ao pagamento a 100% de todos os medicamentos. O Estado só comparticipa ao abrigo de um regime especial os medicamentos, dispositivos ou substâncias ativas incluídos num protocolo/Despacho/Portaria específico e corretamente prescritos pelo médico.' }
      ]
    },
    {
      id: 'benefits',
      title: 'O que o estatuto dá em 2026',
      content: [
        { kind: 'checklist', items: [
          'Registo da doença crónica no processo clínico SNS — é visível para o médico, enfermeiro e farmacêutico através da receita eletrónica.',
          'Receita sem papel para tratamento prolongado: o médico pode emitir receitas renováveis, para não ter de ir todos os meses apenas para renovação.',
          'Comparticipação especial de medicamentos: os níveis padrão em Portugal são 90%, 69%, 37% ou 15%, mas em alguns protocolos específicos pode chegar a 100%.',
          'Para diabetes: a insulina é geralmente totalmente comparticipada; agulhas, lancetas e seringas para autocontrolo podem ter cobertura a 100%, e as tiras de teste seguem um regime próprio.',
          'Para doenças oncológicas: muitos medicamentos são dispensados através da farmácia hospitalar do SNS sem pagamento pelo doente, se o tratamento tiver sido prescrito por um hospital público.',
          'Para asma, hipertensão e doenças cardiovasculares: a cobertura depende do medicamento concreto e do protocolo clínico, nem sempre é de 100%.',
          'Isenção de taxas moderadoras nos casos em que ainda são cobradas, se a sua categoria estiver prevista nas regras do SNS ou se tiver sido atribuída uma isenção específica.',
          'Acesso mais simples ao follow-up: consultas de vigilância, análises, renovação de receita, vacinação por indicação clínica.'
        ] },
        { kind: 'paragraph', text: 'Desde 2022, as taxas moderadoras no SNS estão quase abolidas. Em 2026, permanecem sobretudo para urgência hospitalar sem referenciação pelo SNS 24, INEM, médico de família ou sem internamento subsequente. Referência: Serviço de Urgência Básica — 14 €, Médico-Cirúrgica — 16 €, Polivalente — 18 €, além de possíveis exames.' }
      ]
    },
    {
      id: 'how-to-get',
      title: 'Como tratar através do SNS',
      content: [
        { kind: 'substeps', items: [
          { id: 'prepare-documents', title: '1. Preparar documentos e histórico clínico', content: [
            { kind: 'checklist', items: [
              'Número de utente SNS.',
              'Documento de identificação: autorização de residência, Cartão de Cidadão, passaporte com visto ou CRUE para cidadãos da UE.',
              'NIF — é frequentemente necessário para o registo administrativo e para receitas.',
              'Lista dos medicamentos atuais: nome, dosagem, quantas vezes por dia.',
              'Relatórios de alta, análises, pareceres de especialista de Portugal ou de outro país.',
              'Se os documentos não estiverem em português/inglês — uma tradução breve do diagnóstico e do esquema de tratamento.',
              'Fotografias das embalagens dos medicamentos — ajudam a encontrar equivalentes portugueses pela substância ativa.'
            ] }
          ]},
          { id: 'book-appointment', title: '2. Marcar consulta com o médico de família', content: [
            { kind: 'paragraph', text: 'O caminho principal é uma consulta no seu Centro de Saúde / USF / UCSP. Se ainda não lhe foi atribuído médico de família, peça consulta aberta ou consulta de recurso. Um médico privado pode emitir um relatório, mas os benefícios do SNS normalmente têm de ser confirmados e registados por um médico do SNS.' }
          ]},
          { id: 'medical-declaration', title: '3. Obter declaração médica e atualizar receitas', content: [
            { kind: 'paragraph', text: 'Peça ao médico para registar o diagnóstico como crónico, indicar a necessidade de tratamento prolongado e emitir Receita sem papel com o regime correto de comparticipação. Para algumas doenças, o médico seleciona um regime especial no sistema de receitas; sem isso, a farmácia aplicará o desconto normal e não o regime bonificado.' }
          ]},
          { id: 'confirm-exemption', title: '4. Confirmar a isenção na parte administrativa', content: [
            { kind: 'paragraph', text: 'Depois da consulta, dirija-se à secretaria do Centro de Saúde e pergunte se a isenção de taxas moderadoras está ativa no Registo Nacional de Utentes. Por vezes, o registo médico e o benefício administrativo são ações diferentes.' }
          ]}
        ] }
      ]
    },
    {
      id: 'pharmacy',
      title: 'Como comprar medicamentos com comparticipação 💊',
      content: [
        { kind: 'paragraph', text: 'Na farmácia, apresente o número da receita/SMS, Cartão de Cidadão ou documento com número de utente. O desconto é aplicado automaticamente se a receita tiver sido emitida como comparticipada e com o regime correto selecionado.' },
        { kind: 'checklist', items: [
          'Verifique o talão: aí constam o preço total, a comparticipação do Estado e o valor a pagar.',
          'Se o medicamento deveria ser a 100%, mas a farmácia pede pagamento, confirme primeiro se foi prescrito no regime normal em vez do regime especial.',
          'Peça ao médico de família para prescrever por substância ativa, se os genéricos forem adequados para si — muitas vezes é mais barato e mais disponível.',
          'Não mude a marca da insulina, do inalador ou do medicamento oncológico sem acordo do médico.',
          'Se o medicamento não estiver disponível, a farmácia pode encomendar ou propor um equivalente; para alguns medicamentos hospitalares é necessário dirigir-se à farmácia hospitalar.',
          'Guarde as faturas com NIF: parte das despesas de saúde entra no e-Fatura e é considerada no IRS.'
        ] },
        { kind: 'warning', text: 'A comparticipação não é devolvida automaticamente “com efeitos retroativos”. Se a receita tiver sido emitida incorretamente e tiver pago, normalmente é necessário pedir ao médico para reemitir a receita antes da compra, não depois.' }
      ]
    },
    {
      id: 'common-cases',
      title: 'Casos frequentes: diabetes, asma, hipertensão, oncologia',
      content: [
        { kind: 'checklist', items: [
          'Diabetes: peça logo para tratar da insulina/comprimidos, materiais de autocontrolo, plano de análises HbA1c e consultas de enfermagem de diabetes.',
          'Hipertensão: leve medições de tensão arterial feitas em casa durante 1–2 semanas; o médico ajustará o esquema e emitirá receitas prolongadas.',
          'Asma/DPOC: é importante mostrar os inaladores antigos e resultados de espirometria, se existirem; inaladores diferentes têm comparticipações diferentes.',
          'Oncologia: o tratamento é normalmente acompanhado por um hospital SNS; as receitas e a dispensa de medicamentos passam frequentemente pela farmácia hospitalar, não por uma farmácia comum.',
          'Dor crónica/reumatologia: alguns medicamentos exigem especialista e prescrição hospitalar; o médico de família pode acompanhar a medicação de base, mas não tudo.',
          'Doenças psiquiátricas crónicas: antidepressivos, antipsicóticos e estabilizadores de humor têm os seus próprios níveis de comparticipação; 100% não é garantido.'
        ] },
        { kind: 'paragraph', text: 'Se chegou a Portugal com um diagnóstico já estabelecido, não espere que os medicamentos acabem. Marque consulta no Centro de Saúde assim que obtiver o número de utente: a escolha de um equivalente e a confirmação da comparticipação podem demorar várias semanas.' }
      ]
    },
    {
      id: 'problems',
      title: 'Se foi recusado ou nada foi ativado',
      content: [
        { kind: 'checklist', items: [
          'Peça uma explicação por escrito: se a recusa é médica ou administrativa.',
          'Confirme se tem um número de utente ativo e a morada correta no Centro de Saúde.',
          'Peça ao médico de família uma declaração médica de doença crónica com o diagnóstico e tratamento permanente.',
          'Se não tiver médico de família, peça consulta aberta e inscrição na lista de utentes sem médico.',
          'Se a questão for o medicamento, confirme com o médico o código do regime de comparticipação e se o medicamento consta da lista do Infarmed.',
          'Ligue para o SNS 24: 808 24 24 24 — podem indicar o percurso correto e registar o pedido.',
          'Em caso de problema sistémico, apresente reclamação no Livro de Reclamações ou através do gabinete do utente do hospital/ACES.'
        ] },
        { kind: 'warning', text: 'O Atestado Médico de Incapacidade Multiuso com incapacidade ≥60% é um procedimento separado através de junta médica e não equivale ao Estatuto de Doente Crónico. Pode dar benefícios fiscais e médicos adicionais, mas é tratado separadamente.' }
      ]
    }
  ],
  costs: [
    { label: 'Tratamento do estatuto no SNS', amountEUR: 0, note: 'A consulta e o registo administrativo no SNS são normalmente sem taxas moderadoras.' },
    { label: 'Urgência Básica sem referenciação', amountEUR: 14, note: 'Apenas se não houver referenciação pelo SNS/INEM/médico e não houver internamento subsequente; com isenção — 0 €.' },
    { label: 'Urgência Médico-Cirúrgica sem referenciação', amountEUR: 16, note: 'Referência das taxas moderadoras de 2026 para utentes não isentos.' },
    { label: 'Urgência Polivalente sem referenciação', amountEUR: 18, note: 'Referência das taxas moderadoras de 2026 para utentes não isentos.' }
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
      title: 'INFARMED — Regimes excecionais de comparticipação',
      url: 'https://www.infarmed.pt/web/infarmed/regimes-excecionais-de-comparticipacao',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-05-04'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
