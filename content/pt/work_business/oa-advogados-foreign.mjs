export default {
  editorialVoice: 'hackportugal',
  id: 'oa-advogados-foreign',
  categoryId: 'work_business',
  title: 'Ordem dos Advogados: jurista estrangeiro em Portugal sem reciprocidade BR',
  tldr: 'Em Portugal não é possível simplesmente “converter” o estatuto de advogado: a palavra advogado é protegida, e o acesso à profissão é concedido apenas pela Ordem dos Advogados (OA). Após o fim da reciprocidade prática com o Brasil, o caminho directo para juristas non-EU é o reconhecimento do diploma numa universidade portuguesa/DGES, seguido de admissão na OA, prova de acesso e estágio de cerca de 18 meses com patrono e avaliação final. Juristas da EU/EEA seguem um regime separado ao abrigo da Diretiva 98/5/CE: podem registar-se sob o título profissional do país de origem.',
  tags: ['oa', 'advogado', 'jurista', 'diploma', 'estágio'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-protected',
      title: 'O que é realmente protegido: advogado ≠ jurista',
      content: [
        { kind: 'paragraph', text: 'Em Portugal, “advogado” é uma profissão regulada. Para representar clientes em tribunal, assinar peças processuais, beneficiar do segredo profissional e usar o título de advogado, é necessária inscrição na Ordem dos Advogados (OA).' },
        { kind: 'paragraph', text: 'Um diploma estrangeiro em Direito, por si só, não dá o direito de exercer como advogado. É possível trabalhar como consultor jurídico, paralegal, gestor de contratos, em compliance, fiscalidade/operações jurídicas, mas não se pode induzir clientes em erro fazendo crer que você é advogado português.' },
        { kind: 'checklist', items: [
          'Pode: prestar consultoria sobre o direito do seu país, se isso estiver indicado de forma honesta no contrato e no perfil',
          'Pode: trabalhar in-house numa empresa, em compliance, privacy, contratos, AML, relocation/operações jurídicas',
          'Pode: traduzir e preparar minutas de documentos para revisão por um advogado',
          'Não pode: usar o título de advogado sem inscrição na OA',
          'Não pode: representar um cliente em tribunal português como advogado',
          'Não pode: abrir uma “sociedade de advogados” sem cumprir as regras da OA',
          'Não pode: prometer ao cliente serviços reservados a advogados se não for membro da OA'
        ] },
        { kind: 'warning', text: 'O mercado português é muito formal: mesmo que seja advogado na Federação Russa, Ucrânia, EUA, Turquia ou noutro país non-EU, para a OA isso não é um equivalente automático de português advogado.' }
      ]
    },
    {
      id: 'non-eu-route',
      title: 'Caminho para juristas non-EU: reconhecimento do diploma + OA + estágio',
      content: [
        { kind: 'paragraph', text: 'Para juristas de países fora da EU/EEA sem reciprocidade em vigor, o caminho de base em 2026 é: reconhecer a formação jurídica em Portugal e depois passar pelo procedimento de admissão na OA. É um percurso longo, porque a OA avalia não só o diploma, mas também a aptidão para a prática da advocacia portuguesa.' },
        { kind: 'checklist', items: [
          'Reunir diploma, suplemento com horas/ECTS, programas das disciplinas, comprovativo de estatuto na ordem profissional estrangeira, se existir',
          'Fazer apostila/legalização conforme o país de emissão do documento',
          'Fazer tradução certificada para português se os documentos não estiverem em PT/EN/ES/FR numa forma aceitável',
          'Submeter pedido de reconhecimento de grau académico numa universidade portuguesa através do sistema DGES/instituição',
          'Obter o reconhecimento do grau, normalmente nível/licenciatura ou mestrado conforme o caso',
          'Verificar se a OA exige documentos adicionais sobre idoneidade, ausência de incompatibilidades e registo criminal',
          'Apresentar pedido de inscrição como candidato a advogado estagiário',
          'Realizar prova de acesso/avaliação, completar o estágio e a avaliação/agregação final'
        ] },
        { kind: 'paragraph', text: 'O estágio na OA dura normalmente 18 meses. Inclui trabalho sob orientação de um patrono, formação em ética profissional, processo, práticas fiscais e registrais, bem como avaliação final antes da inscrição plena como advogado.' },
        { kind: 'warning', text: 'O reconhecimento do diploma por uma universidade não significa aceitação automática na OA. A OA é um filtro profissional separado: pode pedir documentos, recusar em caso de incompatibilidades ou exigir a realização do estágio completo.' }
      ]
    },
    {
      id: 'brazil-reciprocity',
      title: 'Brasil: porque o antigo caminho “rápido” já não deve ser considerado funcional',
      content: [
        { kind: 'paragraph', text: 'Até 2023, muitos advogados brasileiros contavam com um regime de reciprocidade mais directo entre a OA Portugal e a OAB Brasil. Na prática, após a rutura/suspensão desse regime, não se deve planear a relocalização pela lógica antiga “sou advogado na OAB — logo entro rapidamente na OA”.' },
        { kind: 'paragraph', text: 'Em abril de 2026, a posição prática segura é: se não tiver EU route e não tiver uma base individualmente confirmada pela OA para registo directo, prepare-se para o caminho normal de diploma estrangeiro — reconhecimento académico, documentos, exame/admissão, estágio de 18 meses.' },
        { kind: 'checklist', items: [
          'Não compre uma consulta onde prometem inscrição na OA “pelo acordo antigo” sem verificação das regras actuais da OA',
          'Peça ao consultor uma ligação para a página em vigor da OA e a norma concreta do Estatuto da OA',
          'Conte desde logo com tempo para o reconhecimento do diploma: meses, não semanas',
          'Inclua o português jurídico no plano: processo, prazos, peças processuais, deontologia',
          'Se já estiver inscrito na OAB, junte certificate of good standing, mas não o considere substituto do estágio',
          'Se o objectivo é trabalhar rapidamente, procure funções intermédias: operações jurídicas, apoio à imigração, compliance, contratos'
        ] },
        { kind: 'warning', text: 'O erro mais frequente é escrever no site “advogado em Portugal” antes da inscrição na OA. Mais correcto: “jurista”, “consultor jurídico”, “advogado inscrito no Brasil/Federação Russa/etc.” e indicar claramente a jurisdição.' }
      ]
    },
    {
      id: 'eu-route',
      title: 'Juristas EU/EEA: regime separado ao abrigo da Diretiva 98/5/CE',
      content: [
        { kind: 'paragraph', text: 'Se você já for advogado qualificado num Estado EU/EEA, aplica-se o regime de estabelecimento previsto na Diretiva 98/5/CE. Este permite registar-se em Portugal sob o título profissional do país de origem, por exemplo Rechtsanwalt, avocat, abogado, avvocato, solicitor, etc.' },
        { kind: 'checklist', items: [
          'Confirmar a inscrição em vigor na ordem profissional do país de origem EU/EEA',
          'Apresentar documentos à OA para inscrição como advogado da União Europeia sob o home-country title',
          'Exercer em Portugal indicando o título de origem e a organização profissional',
          'Cumprir as regras da OA: deontologia, segredo profissional, conflito de interesses, limites à publicidade',
          'Para certos actos processuais, trabalhar em conjunto com um advogado português, se o direito nacional assim o exigir',
          'Após prática efectiva e regular durante um período prolongado em direito português/EU, pode ser possível a integração na profissão em Portugal segundo as regras da directiva',
          'Em alternativa, pode aplicar-se o caminho de reconhecimento de qualificação profissional/aptidão, se a pessoa quiser obter directamente o título de advogado'
        ] },
        { kind: 'warning', text: 'A EU route não se aplica com base na cidadania por si só. O que importa não é ter passaporte EU, mas sim já estar profissionalmente qualificado como advogado numa das jurisdições EU/EEA.' }
      ]
    },
    {
      id: 'practical-plan',
      title: 'Plano prático para 2026: como não perder um ano',
      content: [
        { kind: 'paragraph', text: 'Se está a mudar-se para Portugal e quer um dia tornar-se advogado, divida o plano em duas vias: rendimento legal agora e qualificação profissional na OA em paralelo. O percurso completo raramente cabe num ano.' },
        { kind: 'substeps', items: [
          { id: 'month-1', title: '1. Antes da mudança ou no primeiro mês', content: [
            { kind: 'checklist', items: [
              'Obtenha declarações recentes da sua ordem profissional: estatuto/good standing/registo disciplinar',
              'Reúna os planos de estudos e as horas de cada disciplina jurídica',
              'Faça apostila/legalização do diploma e do suplemento',
              'Verifique que universidade portuguesa aceita reconhecimento especificamente em Direito',
              'Comece português jurídico: processo civil, direito administrativo, fiscal, deontologia'
            ] }
          ] },
          { id: 'months-2-6', title: '2. Meses 2–6', content: [
            { kind: 'checklist', items: [
              'Submeta o reconhecimento de grau académico',
              'Reúna NIF, morada, autorização de residência/visto, registo criminal, documentos de professional standing',
              'Contacte o Conselho Regional da OA da zona onde pretende exercer',
              'Encontre um potencial patrono — advogado da OA disposto a aceitar um estagiário',
              'Em paralelo, procure trabalho sem título protegido: compliance, contratos, privacy, apoio societário'
            ] }
          ] },
          { id: 'after-recognition', title: '3. Após o reconhecimento do diploma', content: [
            { kind: 'checklist', items: [
              'Candidate-se à OA para admissibilidade/inscrição como advogado estagiário',
              'Prepare-se para a prova de acesso, se for marcada',
              'Planeie 18 meses de estágio sem a ilusão de plena autonomia comercial',
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
        { kind: 'paragraph', text: 'A OA e as universidades analisam documentos formais. “Exerci durante 10 anos” ajuda, mas não substitui o reconhecimento académico nem a admissão profissional. Traduções, apostilas e divergências no nome completo atrasam muitas vezes o processo mais do que o próprio exame.' },
        { kind: 'checklist', items: [
          'Passaporte/Cartão de Cidadão/autorização de residência, se já existir',
          'NIF e morada portuguesa para correspondência',
          'Diploma de Direito/faculdade de Direito e suplemento',
          'Syllabus/programas das unidades curriculares detalhados',
          'Apostila ou legalização consular, se exigido',
          'Tradução para português por tradutor ajuramentado/certificado',
          'Certificado de registo criminal dos países de residência',
          'Certificate of good standing da ordem profissional estrangeira, se já for advogado',
          'Declaração de ausência de incompatibilidades com a actividade de advocacia',
          'Comprovativos de morada e contactos em Portugal'
        ] },
        { kind: 'warning', text: 'A língua portuguesa é crítica. Mesmo que formalmente não seja indicado nível B2/C1, exames, estágio, deontologia e peças processuais decorrem em português. Sem PT jurídico, o caminho para a OA é praticamente irrealista.' }
      ]
    }
  ],
  costs: [
    {
      label: 'Reconhecimento de diploma estrangeiro em Direito',
      amountEURMin: 150,
      amountEURMax: 700,
      note: 'A propina é definida pela universidade/instituição portuguesa concreta; para reconhecimento complexo com análise de programas, costuma ser mais caro do que o reconhecimento automático.'
    },
    {
      label: 'Traduções, apostila/legalização, cópias notariais',
      amountEURMin: 100,
      amountEURMax: 600,
      note: 'Depende do país de emissão, do número de páginas dos programas de estudos e dos requisitos de tradução certificada.'
    },
    {
      label: 'Procedimentos da OA: inscrição, estágio, quotas, exames',
      amountEURMin: 300,
      amountEURMax: 1200,
      note: 'Os valores mudam consoante o Conselho Regional e o tipo de procedimento; antes de submeter, verifique a tabela de emolumentos da OA em vigor.'
    }
  ],
  sources: [
    {
      title: 'Ordem dos Advogados — Admissão / Perguntas frequentes sobre admissão',
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
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
