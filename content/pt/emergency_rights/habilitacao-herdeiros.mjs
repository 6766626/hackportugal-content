export default {
  editorialVoice: 'hackportugal',
  id: 'habilitacao-herdeiros',
  categoryId: 'emergency_rights',
  title: 'Habilitação de Herdeiros — identificação dos herdeiros após a morte',
  tldr: 'A Habilitação de Herdeiros é um documento português que enumera oficialmente os herdeiros da pessoa falecida. É necessária para o banco desbloquear contas, para registar imóveis, automóveis, quotas em empresas, tratar da pensão de sobrevivência e iniciar a partilha da herança. No IRN, o serviço custa 150 €; os notários cobram de acordo com as suas tabelas. A declaração fiscal de Imposto do Selo é normalmente entregue nas Finanças até ao fim do 3.º mês após a morte.',
  tags: ['herança', 'irn', 'finanças', 'banco'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'Que documento é este',
      content: [
        { kind: 'paragraph', text: 'A Habilitação de Herdeiros é um ato no qual se indica quem são os herdeiros da pessoa falecida: cônjuge, filhos, pais, outros familiares ou pessoas indicadas em testamento. Não é a partilha dos bens nem a transmissão da propriedade, mas sim a confirmação jurídica de quem compõe o conjunto de herdeiros.' },
        { kind: 'paragraph', text: 'O documento é normalmente tratado pelo cabeça-de-casal — a pessoa que representa a herança até à partilha. Na prática, é muitas vezes o cônjuge sobrevivo, o filho mais velho ou a pessoa indicada no testamento.' },
        { kind: 'checklist', items: ['Abrir ou desbloquear contas bancárias da pessoa falecida', 'Obter informação sobre saldos e créditos', 'Tratar da pensão de sobrevivência ou de outras prestações', 'Registar a transmissão de imóveis no Registo Predial', 'Transferir um automóvel no IMT/IRN', 'Partilhar os bens entre os herdeiros', 'Confirmar direitos perante a seguradora', 'Entregar a declaração de Imposto do Selo nas Finanças'] },
        { kind: 'warning', text: 'A Habilitação de Herdeiros não resolve litígios entre herdeiros. Se alguém discordar da composição dos herdeiros, do testamento ou da partilha dos bens, será necessário um processo de inventário ou tribunal.' }
      ]
    },
    {
      id: 'where-to-do',
      title: 'Onde tratar em Portugal',
      content: [
        { kind: 'paragraph', text: 'Pode tratar-se numa Conservatória do Registo Civil, através do serviço do IRN/justiça.gov.pt, num Cartório Notarial ou junto de um advogado/solicitador, se o caso for complexo. Para um caso normal sem litígio, costuma ser mais barato e claro avançar pelo IRN ou por um notário.' },
        { kind: 'checklist', items: ['IRN / Conservatória — via oficial do Estado, preço base de 150 €', 'Cartório Notarial — mais rápido em algumas cidades, mas o preço depende do notário', 'Balcão de Heranças — se quiser tratar simultaneamente da herança e do registo de bens', 'Advogado ou solicitador — se houver documentos estrangeiros, litígio, testamento ou imóveis em vários países', 'Banco — não emite a Habilitação, mas quase sempre a exige antes de dar acesso às contas'] },
        { kind: 'paragraph', text: 'A marcação depende da Conservatória concreta. Em Lisboa e no Porto, as vagas podem estar ocupadas durante semanas; em cidades mais pequenas, costuma ser mais rápido. Consulte os serviços online em justiça.gov.pt e no IRN.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documentos: o que reunir',
      content: [
        { kind: 'paragraph', text: 'A lista depende de a pessoa ter falecido em Portugal ou no estrangeiro, de haver casamento, filhos, testamento e nacionalidade estrangeira. Quanto mais dados existirem nos registos portugueses, menos certidões em papel serão pedidas.' },
        { kind: 'checklist', items: ['Assento de óbito ou certidão de óbito da pessoa falecida', 'Documento da pessoa falecida: Cartão de Cidadão, autorização de residência, passaporte, NIF, se existir', 'Documento de identificação e NIF do cabeça-de-casal', 'Nomes, datas de nascimento, moradas e NIF dos herdeiros, se existirem', 'Certidão de casamento ou assento de casamento', 'Certidões de nascimento dos filhos ou assentos de nascimento', 'Testamento, se souber que existe', 'Certidão ou confirmação da inexistência/existência de testamento, se for exigida', 'Procuração, se o pedido for apresentado por representante', 'Traduções e apostila/legalização para documentos estrangeiros, se não forem aceites diretamente'] },
        { kind: 'warning', text: 'Documentos da Rússia, Ucrânia, Bielorrússia, Cazaquistão e de outros países fora da UE exigem normalmente apostila ou legalização consular e tradução para português. Para documentos da UE, muitas vezes pode usar-se o formulário multilingue padrão previsto no Regulation (EU) 2016/1191, mas a Conservatória concreta verificará sempre o formato.' }
      ]
    },
    {
      id: 'foreigners',
      title: 'Se a pessoa falecida ou os herdeiros forem estrangeiros',
      content: [
        { kind: 'paragraph', text: 'Para expatriados, o essencial é separar duas questões: onde se trata da herança e que lei se aplica. Na UE, regra geral, aplica-se a lei do país da residência habitual da pessoa falecida no momento da morte, salvo se no testamento tiver sido escolhida a lei da nacionalidade. Por isso, uma pessoa que vivia em Portugal fica frequentemente sujeita ao procedimento sucessório português.' },
        { kind: 'checklist', items: ['Se a pessoa falecida vivia em Portugal — comece pelo assento/certidão de óbito português e pelo IRN', 'Se morreu no estrangeiro, mas tinha bens em Portugal — a morte deve ser provada por certidão estrangeira com apostila/legalização e tradução', 'Se houver imóveis em Portugal — a Habilitação será quase sempre necessária para o Registo Predial', 'Se os herdeiros viverem no estrangeiro — podem atuar através de procuração', 'Se houver testamento noutro país — prepare uma cópia certificada e tradução', 'Em casos transfronteiriços na UE, o Certificado Sucessório Europeu pode ajudar', 'Os bancos podem exigir formulários KYC adicionais, NIF dos herdeiros e comprovativo de residência fiscal'] },
        { kind: 'warning', text: 'Não transfira dinheiro da conta da pessoa falecida com base numa procuração após a morte. A procuração termina com a morte do mandante; operações feitas depois da morte podem criar riscos civis e criminais.' }
      ]
    },
    {
      id: 'after-certificate',
      title: 'O que fazer depois de obter a Habilitação',
      content: [
        { kind: 'paragraph', text: 'Depois da emissão do documento, os herdeiros passam a ter um instrumento para lidar com bancos, Finanças, registos e seguradoras. Mas o documento, por si só, não significa que o apartamento, o carro ou o dinheiro já estejam partilhados.' },
        { kind: 'checklist', items: ['Faça várias certidões/cópias: bancos e registos pedem frequentemente o original ou uma cópia certificada', 'Informe os bancos e peça a lista de contas, depósitos, créditos e cofres', 'Verifique as dívidas: crédito à habitação, créditos pessoais, IMI, condomínio, IRS, contas de serviços', 'Entregue o Modelo 1 do Imposto do Selo nas Finanças até ao fim do 3.º mês após a morte', 'Confirme a isenção de Stamp Duty: cônjuge, unido de facto, filhos, netos, pais e avós estão normalmente isentos dos 10%, mas a obrigação declarativa mantém-se', 'Para imóveis, faça o registo da aquisição por sucessão na Conservatória/Predial Online', 'Para automóveis, verifique o registo da transmissão do direito e o IUC', 'Para pensões, contacte a Segurança Social para a pensão de sobrevivência, se houver direito', 'Se os herdeiros partilharem os bens de forma diferente das quotas legais — trate da partilha separadamente'] },
        { kind: 'warning', text: 'O prazo das Finanças é importante: a declaração de Imposto do Selo é entregue até ao fim do 3.º mês seguinte ao mês da morte. Por exemplo, morte em 10 de abril de 2026 → prazo até 31 de julho de 2026.' }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Erros frequentes',
      content: [
        { kind: 'checklist', items: ['Pensar que a Habilitação transfere automaticamente o apartamento para os herdeiros', 'Esperar anos e não entregar o Imposto do Selo nas Finanças', 'Não verificar a existência de testamento em Portugal e no estrangeiro', 'Ir ao banco sem o NIF dos herdeiros e sem o cabeça-de-casal', 'Usar uma procuração antiga da pessoa falecida depois da data da morte', 'Não legalizar certidões estrangeiras', 'Confundir Habilitação de Herdeiros com partilha', 'Ignorar as dívidas da pessoa falecida: a herança inclui ativos e passivos', 'Não considerar o regime de bens do casamento: comunhão de adquiridos, separação de bens, comunhão geral'] },
        { kind: 'paragraph', text: 'Se a herança incluir imóveis, uma empresa, vários países ou conflito familiar, é mais barato pedir desde logo uma consulta a um advogado/solicitador do que corrigir depois registos e erros fiscais.' }
      ]
    }
  ],
  costs: [
    { label: 'Habilitação de Herdeiros no IRN', amountEUR: 150, note: 'Preço base do serviço público; registos adicionais e certidões são pagos separadamente.' },
    { label: 'Cartório Notarial', amountEURMin: 150, amountEURMax: 400, note: 'Valor indicativo para um caso simples; os notários aplicam as suas próprias tabelas e podem acrescentar certidões, cópias e IVA.' },
    { label: 'Imposto do Selo sobre herança', amountEURMin: 0, amountEURMax: 0, note: 'Cônjuge, unido de facto, descendentes e ascendentes estão normalmente isentos dos 10%; para outros herdeiros, pode aplicar-se 10% sobre os ativos tributáveis.' }
  ],
  sources: [
    { title: 'IRN — Habilitação de herdeiros', url: 'https://irn.justica.gov.pt/Registos/Habilitacao-de-herdeiros', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Justiça.gov.pt — Serviço Habilitação de herdeiros', url: 'https://justica.gov.pt/Servicos/Habilitacao-de-herdeiros', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código do Imposto do Selo — regras declarativas e transmissões gratuitas', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/1999-34460875', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'EUR-Lex — Regulation (EU) No 650/2012 sobre sucessões', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32012R0650', kind: 'law', language: 'en', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
