export default {
  editorialVoice: 'hackportugal',
  id: 'oa-advogados-foreign',
  categoryId: 'work_business',
  title: 'Ordem dos Advogados: jurista estrangeiro em Portugal sem reciprocidade BR',
  tldr: 'Em Portugal não é possível simplesmente “transferir” o estatuto de advogado: a palavra advogado é protegida, e o acesso à profissão é concedido apenas pela Ordem dos Advogados (OA). Depois do fim da reciprocidade prática com o Brasil, o caminho directo para juristas non-EU é o reconhecimento do diploma numa universidade portuguesa/DGES, seguido de admissão na OA, prova de acesso e estágio de cerca de 18 meses com patrono e avaliação final. Juristas EU/EEA seguem um regime separado ao abrigo da Diretiva 98/5/CE: podem registar-se sob o título profissional do país de origem.',
  tags: ['oa', 'advogado', 'jurista', 'diploma', 'estágio'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-protected',
      title: 'O que está realmente protegido: advogado ≠ jurista',
      content: [
        { kind: 'paragraph', text: 'Em Portugal, “advogado” é uma profissão regulada. Para representar clientes em tribunal, assinar peças processuais, beneficiar do segredo profissional e usar o título de advogado, é necessária inscrição na Ordem dos Advogados (OA).' },
        { kind: 'paragraph', text: 'Um diploma estrangeiro em Direito, por si só, não dá o direito de exercer como advogado. Pode trabalhar como consultor jurídico, paralegal, contract manager, compliance, tax/legal operations, mas não pode induzir clientes em erro fazendo-os crer que você é um advogado português.' },
        { kind: 'checklist', items: [
          'Pode: prestar consultoria sobre o direito do seu país, se isso estiver claramente indicado no contrato e no perfil',
          'Pode: trabalhar in-house numa empresa, em compliance, privacy, contracts, AML, relocation/legal operations',
          'Pode: traduzir e preparar minutas de documentos para revisão por um advogado',
          'Não pode: usar o título de advogado sem inscrição na OA',
          'Não pode: representar um cliente num tribunal português como advogado',
          'Não pode: abrir uma “sociedade de advogados” sem cumprir as regras da OA',
          'Não pode: prometer ao cliente serviços reservados a advogados se não for membro da OA'
        ] },
        { kind: 'warning', text: 'O mercado português é muito formal: mesmo que seja advogado na Federação Russa, na Ucrânia, nos EUA, na Turquia ou noutro país non-EU, para a OA isso não é um equivalente automático de português advogado.' }
      ]
    },
    {
      id: 'non-eu-route',
      title: 'Caminho para juristas non-EU: reconhecimento do diploma + OA + estágio',
      content: [
        { kind: 'paragraph', text: 'Para juristas de países fora da EU/EEA sem reciprocidade em vigor, o caminho base em 2026 é: reconhecer a formação jurídica em Portugal e depois passar pelo procedimento de admissão na OA. É um caminho longo, porque a OA verifica não só o diploma, mas também a aptidão para a prática da advocacia portuguesa.' },
        { kind: 'checklist', items: [
          'Reunir o diploma, suplemento com horas/ECTS, programas das disciplinas, comprovativo de estatuto na ordem profissional estrangeira, se existir',
          'Fazer apostila/legalização conforme o país de emissão do documento',
          'Fazer certified translation para português, se os documentos não estiverem em PT/EN/ES/FR numa forma aceitável',
          'Submeter pedido de reconhecimento de grau académico numa universidade portuguesa através do sistema DGES/instituição',
          'Obter o reconhecimento do grau, normalmente nível/licenciatura ou mestrado conforme caso',
          'Verificar se a OA exige documentos adicionais sobre idoneidade, inexistência de incompatibilidades e criminal record',
          'Apresentar pedido de inscrição como candidato a advogado estagiário',
          'Realizar prova de acesso/avaliação, concluir o estágio e a avaliação/agregação final'
        ] },
        { kind: 'paragraph', text: 'O estágio na OA dura normalmente 18 meses. Inclui trabalho sob orientação de um patrono, formação em deontologia profissional, processo, práticas fiscais e registrais, bem como uma avaliação final antes da inscrição plena como advogado.' },
        { kind: 'warning', text: 'O reconhecimento do diploma por uma universidade não significa aceitação automática na OA. A OA é um filtro profissional separado: pode pedir documentos, recusar por incompatibilidades ou exigir a realização do estágio completo.' }
      ]
    },
    {
      id: 'brazil-reciprocity',
      title: 'Brasil: porque já não deve contar com o antigo caminho “rápido”',
      content: [
        { kind: 'paragraph', text: 'Até 2023, muitos advogados brasileiros contavam com um regime de reciprocidade mais directo entre a OA Portugal e a OAB Brasil. Na prática, depois da denúncia/suspensão desse regime, não se deve planear a relocalização com a lógica antiga de “sou advogado na OAB — então entro rapidamente na OA”.' },
        { kind: 'paragraph', text: 'Em abril de 2026, a posição prática segura é: se não tem EU route e não tem uma base da OA individualmente confirmada para registo directo, prepare-se para o caminho normal do diploma estrangeiro — reconhecimento académico, documentos, exame/admissão, estágio de 18 meses.' },
        { kind: 'checklist', items: [
          'Não compre uma consulta em que prometam inscrição na OA “ao abrigo do antigo acordo” sem verificação das regras actuais da OA',
          'Peça ao consultor uma ligação para a página actual da OA e a norma concreta do Estatuto da OA',
          'Conte logo com tempo para o reconhecimento do diploma: meses, não semanas',
          'Conte com linguagem jurídica portuguesa: processo, prazos, peças processuais, deontologia',
          'Se já estiver na OAB, junte certificate of good standing, mas não o considere substituto do estágio',
          'Se o objectivo é trabalhar rapidamente, procure funções intermédias: legal operations, immigration support, compliance, contracts'
        ] },
        { kind: 'warning', text: 'O erro mais frequente é escrever no site “advogado em Portugal” antes da inscrição na OA. O mais correcto é: “jurista”, “consultor jurídico”, “advogado inscrito no Brasil/Rússia/etc.” e indicar claramente a jurisdição.' }
      ]
    },
    {
      id: 'eu-route',
      title: 'Juristas EU/EEA: regime separado pela Diretiva 98/5/CE',
      content: [
        { kind: 'paragraph', text: 'Se já é advogado qualificado num Estado EU/EEA, aplica-se o regime de estabelecimento previsto na Diretiva 98/5/CE. Este permite o registo em Portugal sob o título profissional do país de origem, por exemplo Rechtsanwalt, avocat, abogado, avvocato, solicitor, etc.' },
        { kind: 'checklist', items: [
          'Comprovar o registo em vigor na ordem profissional do país de origem EU/EEA',
          'Apresentar documentos à OA para inscrição como advogado da União Europeia sob home-country title',
          'Exercer em Portugal indicando o título de origem e a organização profissional',
          'Cumprir as regras da OA: deontologia, segredo profissional, conflict of interest, advertising limits',
          'Para certos actos processuais, trabalhar em conjunto com um português advogado, se o direito nacional o exigir',
          'Após prática efectiva e regular prolongada em direito português/EU, pode ser possível a integração na profissão em Portugal segundo as regras da directiva',
          'Em alternativa, pode aplicar-se o caminho de reconhecimento da qualificação profissional/aptidão, se a pessoa quiser o título advogado directamente'
        ] },
        { kind: 'warning', text: 'A EU route não se aplica apenas por causa da cidadania. O importante não é ter passaporte EU, mas sim já estar profissionalmente qualificado como advogado numa das jurisdições EU/EEA.' }
      ]
    },
    {
      id: 'practical-plan',
      title: 'Plano prático para 2026: como não perder um ano',
      content: [
        { kind: 'paragraph', text: 'Se se muda para Portugal e quer um dia tornar-se advogado, divida o plano em dois eixos: rendimento legal agora e qualificação profissional na OA em paralelo. O caminho completo raramente cabe num só ano.' },
        { kind: 'substeps', items: [
          { id: 'month-1', title: '1. Antes da mudança ou no primeiro mês', content: [
            { kind: 'checklist', items: [
              'Obtenha certidões recentes da sua ordem profissional: status/good standing/disciplinary record',
              'Reúna os planos de estudos e as horas de cada disciplina jurídica',
              'Faça apostila/legalização do diploma e do suplemento',
              'Verifique que universidade portuguesa aceita reconhecimento especificamente em Direito',
              'Comece português jurídico: processo civil, direito administrativo, fiscal, deontologia'
            ] }
          ] },
          { id: 'months-2-6', title: '2. Meses 2–6', content: [
            { kind: 'checklist', items: [
              'Submeta o reconhecimento de grau académico',
              'Reúna NIF, morada, autorização de residência/visto, criminal record, documentos sobre professional standing',
              'Contacte o Conselho Regional da OA da zona onde pretende exercer',
              'Encontre um potencial patrono — um advogado da OA disposto a aceitar um estagiário',
              'Em paralelo, procure trabalho sem título protegido: compliance, contracts, privacy, corporate support'
            ] }
          ] },
          { id: 'after-recognition', title: '3. Depois do reconhecimento do diploma', content: [
            { kind: 'checklist', items: [
              'Submeta à OA o pedido de admissibilidade/inscrição como advogado estagiário',
              'Prepare-se para a prova de acesso, se for marcada',
              'Planeie 18 meses de estágio sem a ilusão de autonomia comercial plena',
              'Mantenha um portefólio de prática, formação e documentos para a avaliação final',
              'Não altere o título público para advogado antes da decisão da OA sobre a inscrição plena'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'documents-and-risks',
      title: 'Documentos, língua e recusas típicas',
      content: [
        { kind: 'paragraph', text: 'A OA e as universidades analisam documentos formais. “Exerci durante 10 anos” ajuda, mas não substitui o reconhecimento académico nem a admissão profissional. Traduções, apostilas e divergências no nome completo travam frequentemente o processo mais do que o próprio exame.' },
        { kind: 'checklist', items: [
          'Passaporte/Cartão de Cidadão/autorização de residência, se já existir',
          'NIF e morada portuguesa para correspondência',
          'Diploma de Direito/faculdade de Direito e suplemento',
          'Syllabus/programas das unidades curriculares detalhados',
          'Apostila ou legalização consular, se exigida',
          'Tradução para português por tradutor juramentado/certificado',
          'Certificado de registo criminal dos países de residência',
          'Certificate of good standing da ordem profissional estrangeira, se já for advogado',
          'Declaração de inexistência de incompatibilidades com a actividade de advocacia',
          'Provas de morada e contactos em Portugal'
        ] },
        { kind: 'warning', text: 'A língua portuguesa é crítica. Mesmo que formalmente não seja indicado um nível B2/C1, exames, estágio, deontologia e peças processuais decorrem em português. Sem PT jurídico, o caminho para a OA é praticamente irrealista.' }
      ]
    }
  ],
  costs: [
    {
      label: 'Reconhecimento de diploma estrangeiro em Direito',
      amountEURMin: 150,
      amountEURMax: 700,
      note: 'A taxa é definida pela universidade/instituição portuguesa concreta; para um reconhecimento complexo com análise de programas, costuma ser mais caro do que o reconhecimento automático.'
    },
    {
      label: 'Traduções, apostila/legalização, cópias notariais',
      amountEURMin: 100,
      amountEURMax: 600,
      note: 'Depende do país de emissão, do número de páginas dos programas das disciplinas e dos requisitos de certified translation.'
    },
    {
      label: 'Procedimentos da OA: inscrição, estágio, quotas, exames',
      amountEURMin: 300,
      amountEURMax: 1200,
      note: 'Os valores variam por Conselho Regional e tipo de procedimento; antes de submeter, verifique a tabela de emolumentos da OA actual.'
    }
  ],
  sources: [
    {
      title: 'Ordem dos Advogados — Admissão / FAQ de admissão',
      url: 'https://portal.oa.pt/ordem/admissao-admission-faq/admissao/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Ordem dos Advogados — Diretiva 98/5/CE sobre estabelecimento de advogados da União Europeia',
      url: 'https://portal.oa.pt/ordem/regras-profissionais/legislacao-internacional/directiva-985ce/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DRE — Estatuto da Ordem dos Advogados, Lei n.º 145/2015',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2015-72859741',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DGES — Reconhecimento de graus académicos e diplomas estrangeiros',
      url: 'https://www.dges.gov.pt/pt/pagina/reconhecimento',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
