export default {
  editorialVoice: 'hackportugal',
  id: 'gender-marker-change-pt',
  categoryId: 'documents_fiscal',
  title: 'Alteração do marcador de género e do nome em documentos de Portugal',
  tldr: 'Em Portugal, os cidadãos a partir dos 18 anos alteram a menção do sexo e o nome na Conservatória do Registo Civil por autodeterminação: sem cirurgia, diagnóstico ou tribunal. Para os 16–17 anos são necessários representantes legais e um parecer de médico/psicólogo sobre uma decisão livre e informada. O serviço de registo é gratuito; o novo Cartão de Cidadão e o passaporte são pagos separadamente. Os residentes estrangeiros normalmente alteram primeiro o passaporte/certidão de nascimento no país de nacionalidade e depois actualizam NIF, AIMA, SNS, banco e trabalho em Portugal.',
  tags: ['género', 'documentos', 'conservatória', 'aima'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'legal-basis',
      title: 'Base legal e quem pode apresentar o pedido',
      content: [
        { kind: 'paragraph', text: 'O procedimento baseia-se na Lei 38/2018: Portugal reconhece o direito à autodeterminação da identidade de género e da expressão de género. Para cidadãos portugueses adultos, a alteração da menção do sexo e a consequente alteração de nome próprio é feita administrativamente na Conservatória do Registo Civil, e não através de tribunal.' },
        { kind: 'checklist', items: [
          '18+ anos: o pedido é apresentado pessoalmente; não são exigidos atestados médicos, cirurgia, terapêutica hormonal ou diagnóstico psiquiátrico',
          '16–17 anos: o pedido é apresentado pelos representantes legais; é ainda exigido um parecer de médico ou psicólogo que confirme a capacidade para uma decisão livre e informada',
          'Menores de 16 anos: não existe um procedimento padrão para alteração da menção do sexo no Registo Civil',
          'É alterada a menção de “sexo” no assento de nascimento e, se pretendido, o nome próprio',
          'Em 2026, o registo civil português funciona com marcadores binários: feminino / masculino; não existe marcador X / não binário separado no Cartão de Cidadão e no passaporte',
          'Após o registo no Registo Civil, é necessário substituir separadamente os documentos: Cartão de Cidadão, passaporte, carta de condução, registos fiscais e médicos'
        ] },
        { kind: 'warning', text: 'Se você não for cidadão português, a Conservatória normalmente não “reescreve” a sua certidão de nascimento estrangeira. Para a maioria dos residentes, o caminho tem dois passos: primeiro alterar os documentos no país de nacionalidade e depois actualizar os registos portugueses com base nos novos documentos estrangeiros.' },
        { kind: 'warning', text: 'Importante: em março de 2026, o Parlamento aprovou na generalidade uma revisão deste regime — podendo voltar a exigir atestado médico também para adultos. No final de maio de 2026 o diploma ainda está em especialidade: não houve votação final, promulgação nem publicação no Diário da República, pelo que continuam a aplicar-se as regras actuais da Lei 38/2018. Confirme a versão em vigor da lei antes de apresentar o pedido.' }
      ]
    },
    {
      id: 'conservatoria-process',
      title: 'Processo na Conservatória do Registo Civil',
      content: [
        { kind: 'paragraph', text: 'O pedido chama-se pedido de registo de mudança da menção do sexo e de nome próprio. Pode ser apresentado na Conservatória do Registo Civil. Na prática, é mais conveniente dirigir-se a uma Conservatória grande ou a uma Loja de Cidadão com serviço de registo civil; a marcação prévia depende do balcão.' },
        { kind: 'checklist', items: [
          'Leve o Cartão de Cidadão ou outro documento de identificação',
          'Prepare o NIF e os dados de contacto — nem sempre são obrigatórios para o registo, mas são necessários para actualizações posteriores',
          'Defina qual o marcador que deve ser inscrito: feminino ou masculino',
          'Se alterar o nome, escolha um novo nome próprio admissível para o registo civil português',
          'Apresente o pedido pessoalmente; para adultos, a base é a sua própria manifestação livre de vontade',
          'Peça comprovativo da apresentação e confirme quando poderá obter a certidão de nascimento actualizada',
          'Após o registo, peça novos documentos: Cartão de Cidadão e, se necessário, passaporte eletrónico português'
        ] },
        { kind: 'paragraph', text: 'A Conservatória verifica o pedido e inscreve a alteração no acto de estado civil. Depois disso, é o registo civil actualizado que passa a ser a base dos restantes documentos portugueses.' }
      ]
    },
    {
      id: 'minors',
      title: 'Se o requerente tiver 16–17 anos',
      content: [
        { kind: 'paragraph', text: 'Para os 16–17 anos, a lei exige protecção adicional: o pedido não é apresentado de forma totalmente autónoma. São necessários representantes legais e um parecer médico ou psicológico que confirme que a decisão do menor é livre, informada e tomada com maturidade suficiente.' },
        { kind: 'checklist', items: [
          'Documento do menor: Cartão de Cidadão ou passaporte',
          'Documentos dos representantes legais',
          'Prova das responsabilidades parentais, se tal não for evidente pelo Cartão de Cidadão / registo civil',
          'Parecer médico ou de psicólogo',
          'Declaração sobre o novo marcador de sexo',
          'Declaração sobre o novo nome próprio, se o nome também for alterado',
          'Dados de contacto para notificações da Conservatória'
        ] },
        { kind: 'warning', text: 'Se um dos representantes legais não concordar ou existir conflito quanto às responsabilidades parentais, a Conservatória pode exigir regularização adicional. Nessa situação, é preferível obter previamente aconselhamento de advogado ou apoio judiciário.' }
      ]
    },
    {
      id: 'foreign-residents',
      title: 'Residentes estrangeiros: caminho em dois passos',
      content: [
        { kind: 'paragraph', text: 'Para um expatriado sem nacionalidade portuguesa, o documento-chave é o passaporte e/ou a certidão de nascimento do país de nacionalidade. Nos registos do dia-a-dia, Portugal segue normalmente os dados do passaporte estrangeiro: nome, data de nascimento, nacionalidade e marcador de género na AIMA, Finanças, SNS, banco e contrato de trabalho devem coincidir com o documento de identificação.' },
        { kind: 'substeps', items: [
          { id: 'step-1-home-country', title: '1. Primeiro alterar os documentos do país de nacionalidade', content: [
            { kind: 'checklist', items: [
              'Verifique as regras do seu país: registo civil / consulado / tribunal / serviço de migração',
              'Obtenha um novo passaporte com o nome actualizado e, se o país o permitir, o marcador de género',
              'Se a certidão de nascimento tiver sido alterada ou existir decisão judicial — obtenha uma cópia legalizada',
              'Para documentos fora da UE, normalmente é necessária Apostille ou legalização consular',
              'Faça uma tradução para português por tradutor ajuramentado ou através de procedimento reconhecido, se a entidade portuguesa a solicitar'
            ] }
          ] },
          { id: 'step-2-portugal', title: '2. Depois actualizar os registos portugueses', content: [
            { kind: 'checklist', items: [
              'AIMA: substituir os dados na autorização de residência / cartão de residência com base no novo passaporte',
              'Finanças: actualizar o nome fiscal e os dados do NIF no Portal das Finanças ou no Serviço de Finanças',
              'SNS: actualizar o número de utente no Centro de Saúde',
              'Segurança Social: actualizar o NISS, se existir',
              'Banco: actualizar dados KYC, cartões bancários, MB WAY e assinaturas',
              'Empregador ou cliente em recibos verdes: actualizar contrato, payroll, invoices',
              'IMT: substituir a carta de condução, se o nome tiver mudado',
              'Seguradoras, universidade, telecom, senhorio: alinhar os contratos com o novo nome'
            ] }
          ] }
        ] },
        { kind: 'warning', text: 'Não altere o nome “aos bocados” apenas no banco ou junto do empregador se o passaporte e a AIMA ainda estiverem antigos. A divergência de nome entre passaporte, autorização de residência, NIF e perfil bancário pode bloquear KYC, salário, IRS, arrendamento e viagens internacionais.' }
      ]
    },
    {
      id: 'after-approval',
      title: 'O que substituir após a aprovação',
      content: [
        { kind: 'paragraph', text: 'A alteração da menção na Conservatória, por si só, não actualiza automaticamente todos os sistemas. Após o registo de mudança, é necessário passar pelos principais pontos de identificação. Quanto mais contratos e licenças tiver, mais importante é fazê-lo no mesmo mês.' },
        { kind: 'checklist', items: [
          'Cartão de Cidadão: novo documento após a actualização do Registo Civil',
          'Passaporte eletrónico português: se viajar ou viver fora de Portugal',
          'Carta de condução no IMT',
          'NIF e perfil do Portal das Finanças',
          'NISS e Segurança Social Direta',
          'Número de utente e SNS24',
          'Bancos, brokers, Revolut / Wise / MB WAY',
          'Empregador, contrato de trabalho, recibos verdes, invoices da Autoridade Tributária',
          'Contrato de arrendamento, serviços públicos, telecom, seguradoras',
          'Diplomas, registos universitários, licenças profissionais, Ordem profissional, se aplicável'
        ] },
        { kind: 'paragraph', text: 'Guarde as certidões antigas e novas, o comprovativo da Conservatória e cópias dos documentos antigos. Serão úteis para explicar a continuidade da identidade perante bancos, histórico fiscal, diplomas, vistos de outros países e verificações por empregadores.' }
      ]
    },
    {
      id: 'practical-risks',
      title: 'Riscos práticos e como reduzi-los',
      content: [
        { kind: 'checklist', items: [
          'Antes de apresentar o pedido, verifique a grafia do nome com acentos: João / Joao, Sofia / Sofía — para os sistemas são cadeias de texto diferentes',
          'Se tiver bilhetes, vistos ou marcação na AIMA, não altere o passaporte imediatamente antes de uma viagem sem margem de tempo',
          'Se estiver à espera da renovação da autorização de residência, confirme com a AIMA se pode acrescentar o novo passaporte ao processo em curso ou se é melhor aguardar pelo cartão',
          'Para o IRS, guarde provas de que o nome antigo e o novo correspondem ao mesmo NIF',
          'Para diplomas e licenças profissionais, pergunte antecipadamente se aceitam certidão de nascimento / deed poll / court order',
          'Se o seu país de nacionalidade não reconhecer o marcador necessário, Portugal pode ainda assim usar correctamente o seu novo nome em alguns contratos locais, mas a AIMA e os dados do passaporte continuarão a ser uma limitação',
          'Em caso de discriminação em serviços, escola, cuidados de saúde ou trabalho, registe recusas por escrito; as queixas podem ser dirigidas à Comissão para a Cidadania e a Igualdade de Género e ao Livro de Reclamações'
        ] },
        { kind: 'warning', text: 'Em 2026, a “auto-identificação” no Registo Civil português não equivale ao reconhecimento internacional automático. Para viagens, actos consulares e AIMA, o passaporte do seu país de nacionalidade continua a ser decisivo.' }
      ]
    }
  ],
  costs: [
    { label: 'Registo da alteração de sexo e nome na Conservatória', amountEUR: 0, note: 'O serviço de pedido de registo de mudança de sexo e de nome próprio é gratuito.' },
    { label: 'Novo Cartão de Cidadão', amountEUR: 18, note: 'Emissão/renovação normal em Portugal; as opções urgentes custam mais.' },
    { label: 'Passaporte eletrónico português', amountEUR: 65, note: 'Passaporte normal em Portugal; a urgência e a emissão no estrangeiro aumentam o preço.' },
    { label: 'Traduções, Apostille, legalização de documentos estrangeiros', amountEURMin: 20, amountEURMax: 150, note: 'Depende do país, da língua e do número de documentos; para residentes estrangeiros, é frequentemente a principal variável.' }
  ],
  sources: [
    {
      title: 'gov.pt: pedir o registo de mudança de sexo e de nome',
      url: 'https://www2.gov.pt/en/servicos/pedir-o-registo-de-mudanca-de-sexo-e-de-nome-proprio',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Justiça.gov.pt: serviços e informação do Registo Civil',
      url: 'https://justica.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Lei 38/2018: direito à autodeterminação da identidade de género e expressão de género',
      url: 'https://dre.pt/dre/detalhe/lei/38-2018-115933863',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'IRN: Registo Civil e documentos de identificação civil',
      url: 'https://irn.justica.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
