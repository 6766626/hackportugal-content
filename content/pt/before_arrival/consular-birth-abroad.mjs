export default {
  editorialVoice: 'hackportugal',
  id: 'consular-birth-abroad',
  categoryId: 'before_arrival',
  title: 'Registo de nascimento no consulado português: transcrição do assento de nascimento',
  tldr: 'Transcrição do assento de nascimento — a inscrição de uma certidão de nascimento estrangeira no Registo Civil português. Isto é necessário para cidadãos portugueses nascidos fora de Portugal e para filhos de cidadãos portugueses, para Cartão de Cidadão, passaporte, NIF, casamento e transmissão de nacionalidade adiante. Em 2026, o próprio registo de nascimento é geralmente gratuito, mas apostila, tradução, correio e legalização pagam-se em separado. Pode apresentar através do consulado da área de residência ou de uma Conservatória/IRN em Portugal.',
  tags: ['consulado', 'nascimento', 'nacionalidade', 'irn'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que é a transcrição e quando é necessária',
      content: [
        { kind: 'paragraph', text: 'Se a pessoa nasceu fora de Portugal, a sua certidão de nascimento estrangeira, por si só, não cria um registo português no Registo Civil. A transcrição do assento de nascimento é a transposição dos dados do ato estrangeiro para o sistema português de registo civil.' },
        { kind: 'paragraph', text: 'Após a transcrição passa a existir um assento de nascimento português. Com base nele pode pedir o Cartão de Cidadão, o passaporte, solicitar online a Certidão de Nascimento, registar casamento, filhos e outros atos do estado civil.' },
        { kind: 'checklist', items: ['A criança nasceu no estrangeiro de progenitor português', 'Um cidadão português adulto nasceu fora de Portugal e ainda não foi inscrito no Registo Civil', 'É necessário obter o primeiro Cartão de Cidadão ou passaporte no consulado', 'É preciso registar casamento, divórcio ou nascimento de filho, mas ainda não existe registo português do seu nascimento', 'É necessário comprovar a linha de ascendência para a nacionalidade de descendentes', 'O ato de nascimento estrangeiro será utilizado em Portugal para um ato juridicamente relevante'] },
        { kind: 'warning', text: 'A transcrição não equivale à obtenção automática de nacionalidade para qualquer descendente. Se o progenitor já é cidadão português, o registo de nascimento pode ser parte da atribuição da nacionalidade. Se ainda não existe nacionalidade portuguesa na linha, é necessário primeiro um processo de nacionalidade separado ao abrigo da Lei da Nacionalidade, e não uma simples transcrição.' }
      ]
    },
    {
      id: 'where-to-apply',
      title: 'Onde apresentar: consulado ou IRN',
      content: [
        { kind: 'paragraph', text: 'O caminho mais típico para quem vive fora de Portugal é a secção consular ou o Consulado-Geral de Portugal que cobre a sua morada. O consulado recebe os documentos, verifica a legalização e envia/insere o registo no sistema do Registo Civil.' },
        { kind: 'checklist', items: ['Verifique o círculo consular: os consulados normalmente atendem apenas residentes da sua área', 'Marque atendimento se o consulado não aceitar documentos por correio', 'Se já vive em Portugal, pode dirigir-se à Conservatória do Registo Civil / IRN', 'Se se tratar de uma criança, antes de obter o Cartão de Cidadão, faz-se normalmente primeiro a transcrição/assento, depois o CC e o passaporte', 'Se o casamento do progenitor português foi celebrado no estrangeiro e não está registado em Portugal, o consulado pode exigir primeiro a transcrição de casamento', 'Se os documentos são de um país da UE, pergunte pelo formulário multilingue padrão do Regulamento (UE) 2016/1191: muitas vezes substitui a apostila e a tradução'] },
        { kind: 'warning', text: 'As regras de marcação, modo de apresentação e lista de formulários variam entre consulados. O site do consulado específico é mais importante do que fóruns gerais: um consulado aceita por correio, outro exige atendimento presencial e originais.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documentos normalmente exigidos',
      content: [
        { kind: 'paragraph', text: 'A lógica de base é simples: Portugal precisa do ato de nascimento estrangeiro completo, da prova do vínculo ao progenitor português e de documentos válidos dos requerentes. Todos os nomes, datas e locais devem coincidir com os registos portugueses.' },
        { kind: 'checklist', items: ['Certidão de nascimento estrangeira em forma integral: certidão integral / long form / full birth certificate', 'Apostila de Haia na certidão, se o país aderiu à Convenção de Haia; caso contrário, legalização consular', 'Tradução para português, se o documento não estiver em português e o consulado não aceitar esse idioma', 'Assento de nascimento do progenitor português ou o número do seu Cartão de Cidadão', 'Documentos de identificação dos progenitores: passaporte, Cartão de Cidadão, autorização de residência ou ID local', 'Assento/certidão de casamento dos progenitores, se relevante para o estabelecimento da filiação; um casamento estrangeiro do cidadão português muitas vezes tem de ser transcrito primeiro', 'Impresso do consulado: requerimento para registo/transcrição de nascimento', 'Comprovativo de morada no círculo consular, se o consulado o exigir', 'Para menor — assinatura de ambos os progenitores ou justificação do motivo por que assina apenas um', 'Envelope pré-pago, se o consulado devolver os documentos por correio'] },
        { kind: 'warning', text: 'Não envie o único original sem saber se o consulado o irá devolver. Muitos organismos exigem o original ou cópia certificada, mas o procedimento de devolução depende do país e do consulado.' }
      ]
    },
    {
      id: 'process',
      title: 'Como decorre o procedimento',
      content: [
        { kind: 'substeps', items: [
          { id: 'check-consulate', title: '1. Verificar a página do seu consulado', content: [
            { kind: 'paragraph', text: 'Procure a secção Registos Civis → Nascimento / Transcrição de nascimento. Descarregue o formulário atual e verifique se é necessária marcação, envio por correio (mail-in) ou uma verificação prévia por e-mail.' }
          ] },
          { id: 'prepare-legalisation', title: '2. Legalizar o ato estrangeiro', content: [
            { kind: 'paragraph', text: 'Para países da Convenção de Haia, coloca-se a apostila. Para documentos da UE, muitas vezes é possível usar o formulário multilingue. Para os restantes países, será necessária a cadeia de legalizações indicada pelo consulado.' }
          ] },
          { id: 'submit', title: '3. Apresentar o pedido', content: [
            { kind: 'paragraph', text: 'No atendimento presencial ou por correio, o consulado confere os dados, recebe o requerimento e, se necessário, solicita documentos em falta. O pagamento, quando aplicável, faz-se normalmente por cartão, money order, transferência bancária ou Multibanco — depende do país.' }
          ] },
          { id: 'wait-assento', title: '4. Aguardar o assento português', content: [
            { kind: 'paragraph', text: 'Os prazos variam: de algumas semanas a vários meses. Os atrasos ocorrem sobretudo por divergências de nomes, casamento não transcrito do progenitor português ou legalização incompleta da certidão estrangeira.' }
          ] },
          { id: 'next-documents', title: '5. Tratar do Cartão de Cidadão e do passaporte', content: [
            { kind: 'paragraph', text: 'Depois de existir o registo português, pode solicitar a Certidão de Nascimento, o Cartão de Cidadão e, em seguida, o passaporte. Para uma criança, este é normalmente o passo seguinte imediatamente após a transcrição.' }
          ] }
        ] }
      ]
    },
    {
      id: 'pitfalls',
      title: 'Problemas frequentes e como evitá-los',
      content: [
        { kind: 'checklist', items: ['O nome do progenitor na certidão estrangeira difere do assento português: prepare documentos de mudança de nome ou de casamento', 'Na certidão consta apenas a mãe ou apenas o pai: verifique se isso é suficiente para a atribuição da nacionalidade', 'O progenitor português casou no estrangeiro, mas o casamento não está transcrito em Portugal: pode ser necessária primeiro a transcrição de casamento', 'Certidão de formato curto sem dados dos progenitores: normalmente é necessário o ato integral', 'Documento antigo, danificado ou sem apostila: obtenha uma nova via no país de nascimento', 'Tradução feita por tradutor comum sem certificação: confirme os requisitos para tradução certificada/jurada', 'Envio para o círculo consular errado: o pedido pode ser devolvido sem análise', 'Esperar “urgente numa semana”: para planear mudança, escola e passaporte, conte com meses, não dias'] },
        { kind: 'warning', text: 'Aplica-se a Lei da Nacionalidade 37/81, com as alterações subsequentes. **03.05.2026 o Presidente Seguro promulgou o Decreto AR 48/XVII** (nova redação da Lei da Nacionalidade); a lei entra em vigor no dia seguinte à publicação no Diário da República. Antes de apresentar, confirme o regime no DRE; não baseie a estratégia de transcrição/nacionalidade em regras que ainda não foram publicadas.' }
      ]
    }
  ],
  costs: [
    { label: 'Transcrição de nascimento no Registo Civil português', amountEUR: 0, note: 'O registo de nascimento enquanto ato de registo civil é, em regra, gratuito; o consulado pode cobrar taxas separadas por certificações, cópias, correio ou serviços auxiliares.' },
    { label: 'Apostila / legalização da certidão estrangeira', amountEURMin: 10, amountEURMax: 80, note: 'Depende do país de emissão; não é uma taxa portuguesa.' },
    { label: 'Tradução certificada para português', amountEURMin: 25, amountEURMax: 80, note: 'Referência por página em 2026; em jurisdições caras pode ser superior.' },
    { label: 'Processo de nacionalidade, se for necessário mais do que a transcrição', amountEURMin: 175, amountEURMax: 250, note: 'Apenas para determinados processos de nacionalidade; filhos menores de cidadãos portugueses são muitas vezes isentos, mas a base deve ser verificada no IRN.' }
  ],
  sources: [
    { title: 'Consulado de Portugal — Registos Civis: nascimento, casamento, óbito', url: 'https://www.consuladoportugal.org/registos-civis', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'IRN — Registar nascimento', url: 'https://irn.justica.gov.pt/Servicos/Registar-nascimento', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'DRE — Código do Registo Civil, Decreto-Lei 131/95', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1995-34558375', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'DRE — Lei da Nacionalidade, Lei 37/81', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/1981-34536975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
