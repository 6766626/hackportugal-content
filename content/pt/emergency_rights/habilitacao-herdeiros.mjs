export default {
  editorialVoice: 'hackportugal',
  id: 'habilitacao-herdeiros',
  categoryId: 'emergency_rights',
  title: 'Habilitação de Herdeiros — determinação dos herdeiros após a morte',
  tldr: 'A Habilitação de Herdeiros é um documento português que enumera oficialmente os herdeiros da pessoa falecida. É necessária para o banco desbloquear contas, para registar imóveis, automóveis, participações em empresas, tratar da pensão de sobrevivência e iniciar a partilha da herança. No IRN, o serviço custa 150 €; os notários cobram de acordo com as suas próprias tabelas. A declaração fiscal de Imposto do Selo é normalmente apresentada nas Finanças até ao fim do 3.º mês após a morte.',
  tags: ['herança', 'irn', 'finanças', 'banco'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'Que documento é este',
      content: [
        { kind: 'paragraph', text: 'A Habilitação de Herdeiros é um acto no qual se indica quem são os herdeiros da pessoa falecida: cônjuge, filhos, pais, outros familiares ou pessoas designadas em testamento. Não é a partilha dos bens nem a transmissão da propriedade, mas sim a confirmação jurídica de quem integra o conjunto de herdeiros.' },
        { kind: 'paragraph', text: 'O documento é normalmente tratado pelo cabeça-de-casal — a pessoa que representa a herança até à partilha. Na prática, é muitas vezes o cônjuge sobrevivo, o filho mais velho ou a pessoa indicada no testamento.' },
        { kind: 'checklist', items: ['Abrir ou desbloquear contas bancárias da pessoa falecida', 'Obter informação sobre saldos e créditos', 'Tratar da pensão de sobrevivência ou de outras prestações', 'Registar a transmissão de imóveis no Registo Predial', 'Transmitir um automóvel no IMT/IRN', 'Partilhar os bens entre os herdeiros', 'Confirmar direitos junto de uma seguradora', 'Apresentar a declaração de Imposto do Selo nas Finanças'] },
        { kind: 'warning', text: 'A Habilitação de Herdeiros não resolve um litígio entre herdeiros. Se alguém não concordar com a composição dos herdeiros, com o testamento ou com a partilha dos bens, é necessário um processo de inventário ou recorrer ao tribunal.' }
      ]
    },
    {
      id: 'where-to-do',
      title: 'Onde tratar em Portugal',
      content: [
        { kind: 'paragraph', text: 'Pode tratar da Habilitação numa Conservatória do Registo Civil, através do serviço IRN/justiça.gov.pt, num Cartório Notarial ou junto de um advogado/solicitador, se o caso for complexo. Num caso normal, sem litígio, é mais barato e claro avançar através do IRN ou de um notário.' },
        { kind: 'checklist', items: ['IRN / Conservatória — via oficial do Estado, preço base de 150 €', 'Cartório Notarial — pode ser mais rápido em algumas cidades, mas o preço depende do notário', 'Balcão de Heranças — se quiser tratar simultaneamente da herança e do registo dos activos', 'Advogado ou solicitador — se houver documentos estrangeiros, litígio, testamento ou imóveis em vários países', 'Banco — não emite a Habilitação, mas quase sempre a exige antes de dar acesso às contas'] },
        { kind: 'paragraph', text: 'A marcação depende da Conservatória concreta. Em Lisboa e no Porto, as vagas podem estar ocupadas durante semanas; em cidades mais pequenas, costuma ser mais rápido. Verifique os serviços online em justiça.gov.pt e no IRN.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documentos: o que reunir',
      content: [
        { kind: 'paragraph', text: 'A lista depende de a pessoa ter falecido em Portugal ou no estrangeiro, de ter sido casada, ter filhos, testamento e nacionalidade estrangeira. Quanto mais informação existir nos registos portugueses, menos certidões em papel serão normalmente pedidas.' },
        { kind: 'checklist', items: ['Assento de óbito ou certidão de óbito da pessoa falecida', 'Documento da pessoa falecida: Cartão de Cidadão, autorização de residência, passaporte, NIF, se existir', 'Documento de identificação e NIF do cabeça-de-casal', 'Nomes, datas de nascimento, moradas e NIF dos herdeiros, se existirem', 'Certidão de casamento ou assento de casamento', 'Certidões de nascimento dos filhos ou assentos de nascimento', 'Testamento, se souber que existe', 'Certidão ou confirmação sobre a inexistência/existência de testamento, se for exigida', 'Procuração, se o pedido for apresentado por representante', 'Traduções e apostila/legalização para documentos estrangeiros, se não forem aceites directamente'] },
        { kind: 'warning', text: 'Documentos da Rússia, Ucrânia, Bielorrússia, Cazaquistão e de outros países fora da UE exigem normalmente apostila ou legalização consular e tradução para português. Para documentos da UE, é muitas vezes possível usar um formulário multilingue normalizado ao abrigo do Regulamento (UE) 2016/1191, mas a Conservatória concreta verificará sempre o formato.' }
      ]
    },
    {
      id: 'foreigners',
      title: 'Se a pessoa falecida ou os herdeiros forem estrangeiros',
      content: [
        { kind: 'paragraph', text: 'Para expats, o essencial é separar duas questões: onde se trata da sucessão e que lei se aplica. Na UE, em regra, aplica-se a lei do país da residência habitual da pessoa falecida no momento da morte, salvo se no testamento tiver sido escolhida a lei da nacionalidade. Por isso, uma pessoa que vivia em Portugal fica muitas vezes sujeita ao procedimento sucessório português.' },
        { kind: 'checklist', items: ['Se a pessoa falecida vivia em Portugal — comece pelo assento/certidão de óbito português e pelo IRN', 'Se faleceu no estrangeiro, mas tinha activos em Portugal — a morte deve ser comprovada por certidão estrangeira com apostila/legalização e tradução', 'Se houver imóveis em Portugal — a Habilitação será quase sempre necessária para o Registo Predial', 'Se os herdeiros viverem no estrangeiro — podem actuar através de procuração', 'Se houver testamento noutro país — prepare uma cópia certificada e tradução', 'Em processos transfronteiriços na UE, o Certificado Sucessório Europeu pode ajudar', 'Os bancos podem exigir formulários KYC adicionais, NIF dos herdeiros e comprovativo de residência fiscal'] },
        { kind: 'warning', text: 'Não transfira dinheiro da conta da pessoa falecida com base numa procuração após a morte. A procuração cessa com a morte do mandante; operações realizadas depois da morte podem criar riscos civis e criminais.' }
      ]
    },
    {
      id: 'after-certificate',
      title: 'O que fazer depois de obter a Habilitação',
      content: [
        { kind: 'paragraph', text: 'Depois da emissão do documento, os herdeiros ficam com um instrumento para tratar de assuntos com bancos, Finanças, registos e seguradoras. Mas o documento, por si só, não significa que o apartamento, o carro ou o dinheiro já estejam partilhados.' },
        { kind: 'checklist', items: ['Peça várias certidões/cópias: bancos e registos pedem frequentemente o original ou uma cópia certificada', 'Informe os bancos e peça a lista de contas, depósitos, créditos e cofres', 'Verifique as dívidas: hipoteca, créditos pessoais, IMI, condomínio, IRS, contas de serviços', 'Apresente o Modelo 1 do Imposto do Selo nas Finanças até ao fim do 3.º mês após a morte', 'Confirme a isenção de Stamp Duty: cônjuge, unido de facto, filhos, netos, pais e avós estão normalmente isentos dos 10%, mas a obrigação declarativa mantém-se', 'Para imóveis, faça o registo da aquisição por sucessão na Conservatória/Predial Online', 'Para automóvel, verifique o registo da transmissão do direito e o IUC', 'Para pensões, contacte a Segurança Social para a pensão de sobrevivência, se houver direito', 'Se os herdeiros partilharem os bens de forma diferente das quotas legais — trate da partilha separadamente'] },
        { kind: 'warning', text: 'O prazo das Finanças é importante: a declaração de Imposto do Selo é apresentada até ao fim do 3.º mês seguinte ao mês da morte. Por exemplo, morte em 10 de Abril de 2026 → prazo até 31 de Julho de 2026.' }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Erros frequentes',
      content: [
        { kind: 'checklist', items: ['Pensar que a Habilitação transfere automaticamente o apartamento para os herdeiros', 'Esperar anos e não apresentar o Imposto do Selo nas Finanças', 'Não verificar a existência de testamento em Portugal e no estrangeiro', 'Ir ao banco sem o NIF dos herdeiros e sem cabeça-de-casal', 'Usar uma procuração antiga da pessoa falecida depois da data da morte', 'Não legalizar certidões estrangeiras', 'Confundir Habilitação de Herdeiros com partilha', 'Ignorar as dívidas da pessoa falecida: a herança inclui activos e passivos', 'Não ter em conta o regime de bens do casamento: comunhão de adquiridos, separação de bens, comunhão geral'] },
        { kind: 'paragraph', text: 'Se a herança incluir imóveis, uma empresa, vários países ou conflito familiar, é mais barato consultar logo um advogado/solicitador do que corrigir depois registos e erros fiscais.' }
      ]
    }
  ],
  costs: [
    { label: 'Habilitação de Herdeiros no IRN', amountEUR: 150, note: 'Preço base do serviço público; registos adicionais e certidões são pagos à parte.' },
    { label: 'Cartório Notarial', amountEURMin: 150, amountEURMax: 400, note: 'Referência para um caso simples; os notários aplicam as suas próprias tabelas e podem acrescentar certidões, cópias e IVA.' },
    { label: 'Imposto do Selo sobre herança', amountEURMin: 0, amountEURMax: 0, note: 'Cônjuge, unido de facto, descendentes e ascendentes estão normalmente isentos dos 10%; para outros herdeiros, pode aplicar-se 10% sobre os activos tributáveis.' }
  ],
  sources: [
    { title: 'IRN — Balcão das Heranças (perguntas frequentes)', url: 'https://irn.justica.gov.pt/Balcao-das-Herancas-perguntas-frequentes', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' },
    { title: 'Justiça.gov.pt — Serviço Habilitação de herdeiros', url: 'https://justica.gov.pt/Servicos/Habilitacao-de-herdeiros', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código do Imposto do Selo — regras declarativas e transmissões gratuitas', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/1999-34460875', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'EUR-Lex — Regulamento (UE) n.º 650/2012 relativo às sucessões', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32012R0650', kind: 'law', language: 'en', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
