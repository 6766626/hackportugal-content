export default {
  editorialVoice: 'hackportugal',
  id: 'consular-birth-abroad',
  categoryId: 'before_arrival',
  title: 'Registo de nascimento no consulado português: transcrição do assento de nascimento',
  tldr: 'Transcrição do assento de nascimento — inserção de uma certidão de nascimento estrangeira no Registo Civil português. É necessária para cidadãos portugueses nascidos fora de Portugal e para filhos de cidadãos portugueses, para obter Cartão de Cidadão, passaporte, NIF, casamento e transmissão posterior da nacionalidade. Em 2026, o registo de nascimento em si é normalmente gratuito, mas apostila, tradução, correio e legalização são pagos à parte. Pode apresentar o pedido através do consulado do local de residência ou numa Conservatória/IRN em Portugal.',
  tags: ['consulado', 'nascimento', 'cidadania', 'irn'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que é a transcrição e quando é necessária',
      content: [
        { kind: 'paragraph', text: 'Se uma pessoa nasceu fora de Portugal, a sua certidão de nascimento estrangeira, por si só, não cria um registo português no Registo Civil. A transcrição do assento de nascimento é a transferência dos dados do ato estrangeiro para o sistema português de registo civil.' },
        { kind: 'paragraph', text: 'Após a transcrição, passa a existir um assento de nascimento português. Com base nele, é possível pedir o Cartão de Cidadão, passaporte, solicitar uma Certidão de Nascimento online, registar casamento, filhos e outros atos de estado civil.' },
        { kind: 'checklist', items: ['A criança nasceu no estrangeiro de um progenitor português', 'Um cidadão português adulto nasceu fora de Portugal e nunca foi anteriormente registado no Registo Civil', 'É necessário pedir o primeiro Cartão de Cidadão ou passaporte no consulado', 'É necessário registar casamento, divórcio ou nascimento de um filho, mas ainda não existe registo português do seu nascimento', 'É necessário comprovar a linha de descendência para a nacionalidade de descendentes', 'O ato de nascimento estrangeiro é usado em Portugal para um ato juridicamente relevante'] },
        { kind: 'warning', text: 'A transcrição não equivale à obtenção automática da nacionalidade para qualquer descendente. Se o progenitor já for cidadão português, o registo de nascimento pode fazer parte da atribuição da nacionalidade. Se ainda não houver nacionalidade portuguesa na linha, primeiro é necessário um processo de nacionalidade separado ao abrigo da Lei da Nacionalidade, e não uma simples transcrição.' }
      ]
    },
    {
      id: 'where-to-apply',
      title: 'Onde apresentar o pedido: consulado ou IRN',
      content: [
        { kind: 'paragraph', text: 'O caminho mais habitual para quem vive fora de Portugal é a secção consular ou o Consulado-Geral de Portugal que abrange a sua morada. O consulado recebe os documentos, verifica a legalização e envia/insere o registo no sistema do Registo Civil.' },
        { kind: 'checklist', items: ['Verifique a circunscrição consular: os consulados normalmente só aceitam residentes da sua área', 'Marque atendimento, se o consulado não aceitar documentos por correio', 'Se já vive em Portugal, pode dirigir-se a uma Conservatória do Registo Civil / IRN', 'Se estiver em causa uma criança antes de obter Cartão de Cidadão, normalmente faz-se primeiro a transcrição/assento e depois o CC e o passaporte', 'Se o progenitor português tiver casado no estrangeiro e o casamento não estiver registado em Portugal, o consulado pode exigir primeiro a transcrição de casamento', 'Se os documentos forem de um país da UE, pergunte sobre o formulário multilingue padrão ao abrigo do Regulamento UE 2016/1191: muitas vezes substitui a apostila e a tradução'] },
        { kind: 'warning', text: 'As regras de marcação, o modo de apresentação e a lista de formulários variam ligeiramente entre consulados. O site do Consulado concreto é mais importante do que fóruns gerais: um consulado aceita por correio, outro exige atendimento presencial e originais.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documentos normalmente exigidos',
      content: [
        { kind: 'paragraph', text: 'A lógica de base é simples: Portugal precisa do ato de nascimento estrangeiro completo, da prova de ligação ao progenitor português e de documentos válidos dos requerentes. Todos os nomes, datas e locais devem coincidir com os registos portugueses.' },
        { kind: 'checklist', items: ['Certidão de nascimento estrangeira em formato completo: certidão integral / long form / full birth certificate', 'Apostila de Haia na certidão, se o país fizer parte da Convenção da Haia; caso contrário, legalização consular', 'Tradução para português, se o documento não estiver em português e o consulado não aceitar esse idioma', 'Assento de nascimento do progenitor português ou número do seu Cartão de Cidadão', 'Documentos de identificação dos progenitores: passaporte, Cartão de Cidadão, autorização de residência ou ID local', 'Certidão de casamento dos progenitores, se influenciar o estabelecimento da parentalidade; o casamento estrangeiro de um cidadão português muitas vezes tem de ser transcrito primeiro', 'Formulário de pedido do consulado: requerimento para registo/transcrição de nascimento', 'Comprovativo de morada na circunscrição consular, se o consulado o exigir', 'Para menor — assinatura de ambos os progenitores ou explicação do motivo pelo qual assina apenas um', 'Envelope pré-pago, se o consulado devolver documentos por correio'] },
        { kind: 'warning', text: 'Não envie o único original sem perceber se o consulado o devolverá. Muitos organismos exigem original ou cópia certificada, mas o procedimento de devolução depende do país e do consulado.' }
      ]
    },
    {
      id: 'process',
      title: 'Como decorre o procedimento',
      content: [
        { kind: 'substeps', items: [
          { id: 'check-consulate', title: '1. Verificar a página do seu consulado', content: [
            { kind: 'paragraph', text: 'Procure a secção Registos Civis → Nascimento / Transcrição de nascimento. Descarregue o formulário atualizado e verifique se é necessário appointment, pacote mail-in ou verificação prévia por e-mail.' }
          ] },
          { id: 'prepare-legalisation', title: '2. Legalizar o ato estrangeiro', content: [
            { kind: 'paragraph', text: 'Para países da Convenção da Haia, é colocada apostila. Para documentos da UE, muitas vezes pode ser usado um formulário multilingue. Para os restantes países, será necessária a cadeia de legalização indicada pelo consulado.' }
          ] },
          { id: 'submit', title: '3. Apresentar o conjunto de documentos', content: [
            { kind: 'paragraph', text: 'No atendimento ou por correio, o consulado confere os dados, recebe o requerimento e, se necessário, pede documentos em falta. O pagamento, quando exista, é normalmente feito por cartão, money order, transferência bancária ou Multibanco — depende do país.' }
          ] },
          { id: 'wait-assento', title: '4. Aguardar pelo assento português', content: [
            { kind: 'paragraph', text: 'Os prazos não são uniformes: de algumas semanas a vários meses. Os atrasos devem-se mais frequentemente a divergências de nomes, casamento não registado do progenitor português ou legalização incompleta da certidão estrangeira.' }
          ] },
          { id: 'next-documents', title: '5. Pedir Cartão de Cidadão e passaporte', content: [
            { kind: 'paragraph', text: 'Depois de existir o registo português, pode pedir a Certidão de Nascimento, o Cartão de Cidadão e, em seguida, o passaporte. Para uma criança, este é normalmente o passo seguinte logo após a transcrição.' }
          ] }
        ] }
      ]
    },
    {
      id: 'pitfalls',
      title: 'Problemas frequentes e como evitá-los',
      content: [
        { kind: 'checklist', items: ['O nome do progenitor na certidão estrangeira difere do assento português: prepare documentos de alteração de nome ou de casamento', 'Na certidão consta apenas a mãe ou apenas o pai: confirme se isso é suficiente para a atribuição da nacionalidade', 'O progenitor português casou no estrangeiro, mas o casamento não foi transcrito em Portugal: pode ser necessária primeiro a transcrição de casamento', 'Certidão de formato curto sem dados dos progenitores: normalmente é necessário o ato completo', 'Documento antigo, danificado ou sem apostila: obtenha uma nova via no país de nascimento', 'Tradução feita por tradutor comum sem certificação: confirme os requisitos para certified/sworn translation', 'Apresentação na circunscrição consular errada: o conjunto de documentos pode ser devolvido sem apreciação', 'Expectativa de “urgente numa semana”: para planear mudança, escola e passaporte, conte com meses, não dias'] },
        { kind: 'warning', text: 'Está em vigor a Lei da Nacionalidade 37/81, com alterações posteriores.\n\n03.05.2026 o Presidente Seguro promulgou o Decreto AR 48/XVII (nova redação da Lei da Nacionalidade); publicado em 18.05.2026 como Lei Orgânica n.º 1/2026. A lei entrou em vigor em 19.05.2026 (no dia seguinte ao da publicação no DR). O texto da lei contém uma disposição transitória: aos processos em tramitação aplica-se a redação anterior da Lei 37/81. Para processos apresentados ANTES de 19.05.2026, aplica-se a anterior Lei 37/81 (disposição transitória).' }
      ]
    }
  ],
  costs: [
    { label: 'Transcrição de nascimento no Registo Civil português', amountEUR: 0, note: 'O nascimento enquanto ato de registo civil é normalmente gratuito; o consulado pode cobrar taxas separadas por reconhecimentos, cópias, correio ou serviços conexos.' },
    { label: 'Apostila / legalização da certidão estrangeira', amountEURMin: 10, amountEURMax: 80, note: 'Depende do país de emissão; não é uma taxa portuguesa.' },
    { label: 'Tradução certificada para português', amountEURMin: 25, amountEURMax: 80, note: 'Valor indicativo por página em 2026; em jurisdições caras pode ser mais elevado.' },
    { label: 'Processo de nacionalidade, se for necessário mais do que a transcrição', amountEURMin: 175, amountEURMax: 250, note: 'Apenas para processos de nacionalidade separados; filhos menores de cidadãos portugueses muitas vezes estão isentos, mas o fundamento deve ser confirmado no IRN.' }
  ],
  sources: [
    { title: 'Consulado de Portugal — Registos Civis: nascimento, casamento, óbito', url: 'https://www.consuladoportugal.org/registos-civis', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'IRN — Registar nascimento', url: 'https://justica.gov.pt/Servicos/Registar-nascimento', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'DRE — Código do Registo Civil, Decreto-Lei 131/95', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1995-34558375', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'DRE — Lei da Nacionalidade, Lei 37/81', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/1981-34536975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
