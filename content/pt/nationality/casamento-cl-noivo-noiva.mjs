export default {
  editorialVoice: 'hackportugal',
  id: 'casamento-cl-noivo-noiva',
  categoryId: 'nationality',
  title: 'Casamento Civil: etapas e documentos para estrangeiros',
  tldr: 'O Casamento Civil em Portugal é tratado através da Conservatória do Registo Civil / IRN. A cerimónia é realizada por um conservador ou oficial de registos, NÃO por um notário; o notário é necessário para a convenção antenupcial (contrato antenupcial), mas não para o próprio registo do casamento. Estrangeiros residentes e não residentes seguem o mesmo processo: apresentam o processo preliminar, passaportes e comprovativos de estado civil com pelo menos 30 dias de antecedência. Documentos estrangeiros precisam de apostila/legalização e tradução para PT. A taxa normal do processo + registo de casamento segundo o Regulamento Emolumentar é indicativamente a partir de 120 €; uma cerimónia externa fora da Conservatória tem uma surcharge separada segundo a tabela do IRN, dependendo do dia da semana e da distância. Normalmente são pedidas 2 testemunhas com documentos.',
  tags: ['casamento', 'registo civil', 'irn', 'documentos'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que é o Casamento Civil em Portugal',
      content: [
        { kind: 'paragraph', text: 'Casamento Civil é o casamento civil oficial, registado na Conservatória do Registo Civil (IRN). A cerimónia é realizada por um conservador ou oficial de registos. O notário não é o órgão habitual de registo do casamento civil — é necessário para a convenção antenupcial (contrato antenupcial), se for escolhido um regime de bens não padrão. Uma cerimónia religiosa, por si só, não substitui o registo civil, salvo se for formalizada nos termos previstos na lei (católico com efeitos ao abrigo da Concordata — procedimento separado).' },
        { kind: 'paragraph', text: 'Estrangeiros seguem o mesmo processo que os cidadãos portugueses: verificação preliminar de impedimentos matrimoniais, entrega de documentos, marcação de data, cerimónia e lançamento do assento no registo civil.' },
        { kind: 'checklist', items: [
          'A autorização de residência em Portugal não é obrigatória para o simples acto de contrair casamento',
          'São necessários documentos de identificação válidos de ambos os futuros cônjuges',
          'São necessários documentos de nascimento e de estado civil do país de nacionalidade',
          'Documentos que não estejam em português normalmente exigem tradução oficial',
          'Documentos estrangeiros normalmente devem ter Apostila de Haia ou legalização consular',
          'É melhor iniciar o processo pelo menos 30 dias antes da data da cerimónia',
          'Depois da aprovação, não convém atrasar o processo: os documentos e a decisão da Conservatória têm prazo de validade'
        ] }
      ]
    },
    {
      id: 'where-to-apply',
      title: 'Onde apresentar o pedido',
      content: [
        { kind: 'paragraph', text: 'O pedido é apresentado em qualquer Conservatória do Registo Civil, não necessariamente na área da residência. Também é possível utilizar os serviços online do IRN, se os requerentes tiverem acesso à identificação digital portuguesa. Para a convenção antenupcial (contrato antenupcial), pode recorrer-se a um notário ou à Conservatória — mas o notário não realiza o próprio registo do casamento.' },
        { kind: 'checklist', items: [
          'Conservatória do Registo Civil — via normal através do IRN; a cerimónia é conduzida por conservador/oficial de registos',
          'Balcão do IRN numa Loja de Cidadão — se aí existir o serviço de registo civil',
          'Convenção antenupcial (contrato antenupcial) — é feita num notário OU na Conservatória antes do casamento, se for escolhido um regime de bens não padrão',
          'O pedido online não é possível para todos os estrangeiros: muitas vezes é necessária apresentação presencial devido à verificação dos documentos',
          'Para um casal em que uma pessoa não fala português, confirme antecipadamente a necessidade de intérprete na cerimónia',
          'Se um dos futuros cônjuges não puder comparecer pessoalmente, pergunte à Conservatória sobre uma procuração com os poderes necessários'
        ] },
        { kind: 'warning', text: 'Não planeie restaurante, voos e convidados antes da confirmação da Conservatória. O atraso mais comum para estrangeiros não é a data na Conservatória, mas a necessidade de refazer o comprovativo de estado civil, a apostila ou a tradução.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documentos para estrangeiros',
      content: [
        { kind: 'paragraph', text: 'A lista exacta depende da nacionalidade, do histórico familiar e do país de emissão dos documentos. Mas o conjunto básico é quase sempre o mesmo: identidade, nascimento, inexistência de impedimentos ao casamento, confirmação da dissolução de casamento anterior, se tiver existido.' },
        { kind: 'checklist', items: [
          'Passaporte ou Cartão de Cidadão / cartão de residência, se existir',
          'NIF — é frequentemente pedido para pagamentos e identificação, embora o documento principal seja o passaporte/ID',
          'Certidão de nascimento: certificado de nascimento ou extracto do registo de nascimento',
          'Certificado de capacidade matrimonial, declaração de estado civil ou declaração de não-impedimento — documento que demonstra que a pessoa pode contrair casamento',
          'Se houve divórcio: certidão de casamento com averbamento do divórcio ou decisão judicial de divórcio',
          'Se o cônjuge anterior faleceu: certidão de óbito',
          'Apostila de Haia para documentos de países que fazem parte da Convenção da Haia',
          'Legalização consular, se o país não utilizar a Apostila de Haia',
          'Tradução oficial para português, se o documento não estiver em PT',
          'Dados de 2 testemunhas: nomes, documentos, contactos; no dia da cerimónia comparecem com passaporte/ID'
        ] },
        { kind: 'paragraph', text: 'Para cidadãos de alguns países, o certificado de capacidade matrimonial é emitido pelo consulado em Portugal. Para outros países, o documento deve ser obtido no país de origem — no registo civil, no órgão de registo civil, no tribunal ou através de um registo electrónico. A Conservatória avalia não o nome do documento, mas o seu conteúdo: deve ser claro que o requerente não é casado e que não existem impedimentos legais.' },
        { kind: 'warning', text: 'Um certificado “single / unmarried” sem indicação da entidade competente, sem apostila ou sem tradução pode ser recusado. Antes de pedir o documento, envie um modelo à Conservatória ou confirme a formulação necessária.' }
      ]
    },
    {
      id: 'timeline',
      title: 'Prazos: o que fazer com 30+ dias de antecedência',
      content: [
        { kind: 'substeps', items: [
          { id: 's1-collect', title: '1. Com 2–3 meses de antecedência: reunir documentos', content: [
            { kind: 'paragraph', text: 'Obtenha documentos recentes de nascimento e de estado civil. Para actos de registo estrangeiros, a Conservatória muitas vezes espera um extracto recente, e não um certificado antigo plastificado guardado no arquivo familiar.' }
          ] },
          { id: 's2-apostille', title: '2. Com 1–2 meses de antecedência: apostila e tradução', content: [
            { kind: 'paragraph', text: 'Aponha a Apostila de Haia ou faça a legalização consular. Depois prepare a tradução para português. É melhor utilizar um tradutor cuja assinatura possa ser reconhecida notarialmente, ou uma tradução através do consulado/de tradutor reconhecido.' }
          ] },
          { id: 's3-apply', title: '3. Com pelo menos 30 dias de antecedência: Conservatória', content: [
            { kind: 'paragraph', text: 'Apresente o pedido de casamento / processo preliminar e a declaração de não-impedimento. O funcionário verifica os documentos, a identidade, o estado civil e a inexistência de impedimentos matrimoniais.' }
          ] },
          { id: 's4-date', title: '4. Depois da aprovação: data e formato da cerimónia', content: [
            { kind: 'paragraph', text: 'Escolhe a cerimónia na Conservatória ou fora das instalações — por exemplo, numa quinta, hotel, jardim ou local privado. Para deslocação são necessários um conservador/oficial disponível, morada, hora e pagamento adicional segundo a tabela do IRN. O notário não realiza a própria cerimónia.' }
          ] },
          { id: 's5-ceremony', title: '5. No dia do casamento: documentos e testemunhas', content: [
            { kind: 'paragraph', text: 'Ambos os futuros cônjuges comparecem com os documentos originais. As testemunhas levam passaporte, Cartão de Cidadão ou cartão de residência. Se um dos cônjuges não compreender português, combine antecipadamente a presença de intérprete.' }
          ] }
        ] }
      ]
    },
    {
      id: 'ceremony-and-property',
      title: 'Cerimónia, apelido e regime de bens',
      content: [
        { kind: 'paragraph', text: 'Durante o processo indica-se qual o regime de bens que será aplicado. Se não for escolhido contrato antenupcial, por defeito aplica-se normalmente a comunhão de adquiridos — comunhão dos bens adquiridos depois do casamento, com excepções para bens próprios.' },
        { kind: 'checklist', items: [
          'Comunhão de adquiridos — regime normal sem contrato antenupcial',
          'Separação de bens — regime de separação, normalmente exige convenção antenupcial',
          'Comunhão geral — regime geral, não disponível em todas as situações familiares',
          'A convenção antenupcial é feita antes do casamento num notário ou na Conservatória',
          'O apelido depois do casamento não muda automaticamente: a declaração de escolha do nome é feita no âmbito do registo',
          'Se tiver vistos, autorização de residência, contas bancárias e perfis fiscais activos, pense antecipadamente se quer alterar o apelido',
          'Depois do registo, pode pedir uma certidão de casamento para AIMA, Finanças, banco, SNS ou procedimentos de nacionalidade'
        ] },
        { kind: 'warning', text: 'O casamento com um cidadão português, por si só, não dá nacionalidade automática nem autorização de residência automática. Para a nacionalidade através do casamento existe um procedimento próprio no IRN, e a autorização de residência familiar é tratada através da AIMA segundo regras próprias.' }
      ]
    },
    {
      id: 'after-marriage',
      title: 'Depois do registo: o que actualizar',
      content: [
        { kind: 'paragraph', text: 'Depois da cerimónia, o assento é lançado no registo civil. Se o casamento for celebrado em Portugal, a certidão de casamento portuguesa normalmente fica disponível através do IRN. Para utilização no estrangeiro, pode ser necessária uma forma internacional, apostila ou tradução.' },
        { kind: 'checklist', items: [
          'Pedir a certidão de casamento no IRN, se for necessário documento em papel',
          'Comunicar às Finanças, se o estado civil mudar para efeitos de IRS',
          'Actualizar dados no banco e na seguradora, se houver alteração de apelido ou de estatuto',
          'Comunicar à entidade empregadora, se forem necessárias alterações no payroll ou em benefícios familiares',
          'Verificar se é necessário registar o casamento no país de nacionalidade',
          'Para autorização de residência por Reagrupamento Familiar, preparar a certidão de casamento para a AIMA',
          'Para futura nacionalidade, guardar todas as versões dos documentos e comprovativos de vida em comum'
        ] },
        { kind: 'warning', text: 'Se o documento for necessário fora de Portugal, uma certidão de casamento normal em PT pode não ser suficiente. Confirme os requisitos do país de destino: extracto multilingue, Apostila de Haia ou tradução certificada.' }
      ]
    }
  ],
  costs: [
    { label: 'Processo + registo de casamento na Conservatória (IRN)', amountEURMin: 120, amountEURMax: 160, note: 'Valor indicativo para uma cerimónia normal segundo o Regulamento Emolumentar dos Registos e do Notariado; confirme o montante final no momento da marcação no IRN.' },
    { label: 'Cerimónia externa fora da Conservatória', amountEURMin: 300, amountEURMax: 600, note: 'Surcharge segundo a tabela do IRN; depende do dia da semana, da hora e da distância; confirme o montante exacto na Conservatória concreta.' },
    { label: 'Convenção antenupcial', amountEURMin: 100, amountEURMax: 250, note: 'Se for necessário contrato antenupcial ou um regime de bens não padrão; o preço depende da Conservatória/Notário e do conteúdo.' },
    { label: 'Tradução e reconhecimento notarial', amountEURMin: 30, amountEURMax: 120, note: 'Por documento; depende da língua, da urgência e do tradutor.' },
    { label: 'Apostila de Haia no estrangeiro', amountEURMin: 10, amountEURMax: 80, note: 'Não é uma taxa portuguesa; depende do país de emissão do documento.' }
  ],
  sources: [
    {
      title: 'Justiça.gov.pt — Casamento: como iniciar o processo e que documentos são necessários',
      url: 'https://justica.gov.pt/Servicos/Iniciar-processo-de-casamento',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'IRN — Registo Civil e serviços de casamento',
      url: 'https://irn.justica.gov.pt/Servicos/Cidadao/Casamento',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'IRN — Tabela de emolumentos do registo civil',
      url: 'https://irn.justica.gov.pt/Custos-dos-servicos',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}
