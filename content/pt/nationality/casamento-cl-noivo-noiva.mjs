export default {
  editorialVoice: 'hackportugal',
  id: 'casamento-cl-noivo-noiva',
  categoryId: 'nationality',
  title: 'Casamento Civil: etapas e documentos para estrangeiros',
  tldr: 'O Casamento Civil em Portugal é tratado através da Conservatória do Registo Civil ou de um Notário. Estrangeiros residentes e não residentes seguem o mesmo processo: pelo menos 30 dias antes, apresentam a declaração de não-impedimento / processo preliminar, passaportes e comprovativos do estado civil. Os documentos estrangeiros precisam de apostilha/legalização e tradução para PT. A cerimónia básica custa cerca de 140 €; uma localização externa acrescenta cerca de 450 €. Normalmente são necessárias 2 testemunhas com documentos.',
  tags: ['casamento', 'registo civil', 'irn', 'documentos'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que é o Casamento Civil em Portugal',
      content: [
        { kind: 'paragraph', text: 'O Casamento Civil é o casamento civil oficial, registado na Conservatória do Registo Civil, através do IRN ou por um Notário com competência para celebrar casamentos civis. Uma cerimónia religiosa, por si só, não substitui o registo civil, se não for formalizada na forma prevista na lei.' },
        { kind: 'paragraph', text: 'Os estrangeiros seguem o mesmo processo que os cidadãos portugueses: verificação preliminar de impedimentos matrimoniais, apresentação de documentos, marcação da data, cerimónia e lançamento do assento no registo civil.' },
        { kind: 'checklist', items: [
          'A autorização de residência em Portugal não é obrigatória para a celebração do casamento em si',
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
        { kind: 'paragraph', text: 'O pedido é apresentado em qualquer Conservatória do Registo Civil, não sendo obrigatório que seja a da área de residência. Também é possível utilizar os serviços online do IRN, se os requerentes tiverem acesso à identificação digital portuguesa, ou recorrer a um Notário, se este prestar o serviço de casamento civil.' },
        { kind: 'checklist', items: [
          'Conservatória do Registo Civil — via padrão através do IRN',
          'Balcão do IRN numa Loja de Cidadão — se aí existir o serviço de registo civil',
          'Notário — mais conveniente para uma cerimónia privada, mas confirme as competências e o custo',
          'O pedido online não é possível para todos os estrangeiros: muitas vezes é necessária apresentação presencial devido à verificação dos documentos',
          'Para um casal em que uma das pessoas não fala português, confirme antecipadamente a necessidade de intérprete na cerimónia',
          'Se um dos futuros cônjuges não puder comparecer pessoalmente, pergunte à Conservatória sobre uma procuração com os poderes necessários'
        ] },
        { kind: 'warning', text: 'Não planeie restaurante, voos e convidados antes da confirmação da Conservatória. O atraso mais frequente para estrangeiros não é a data na Conservatória, mas a correção do comprovativo de estado civil, da apostilha ou da tradução.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documentos para estrangeiros',
      content: [
        { kind: 'paragraph', text: 'A lista exata depende da nacionalidade, do histórico familiar e do país de emissão dos documentos. Mas o conjunto básico é quase sempre o mesmo: identidade, nascimento, inexistência de impedimentos ao casamento, e confirmação da dissolução de casamento anterior, se existiu.' },
        { kind: 'checklist', items: [
          'Passaporte ou Cartão de Cidadão / cartão de residência, se existir',
          'NIF — é frequentemente pedido para pagamentos e identificação, embora o documento essencial seja o passaporte/ID',
          'Certidão de nascimento: certificado de nascimento ou extrato do registo de nascimento',
          'Certificado de capacidade matrimonial, declaração de estado civil ou declaração de não-impedimento — documento que comprova que a pessoa pode casar',
          'Se houve divórcio: certidão de casamento com averbamento do divórcio ou decisão judicial de divórcio',
          'Se o cônjuge anterior faleceu: certidão de óbito',
          'Apostila de Haia para documentos de países que sejam parte da Convenção da Haia',
          'Legalização consular, se o país não utilizar a Apostila de Haia',
          'Tradução oficial para português, se o documento não estiver em PT',
          'Dados de 2 testemunhas: nomes, documentos, contactos; no dia da cerimónia comparecem com passaporte/ID'
        ] },
        { kind: 'paragraph', text: 'Para cidadãos de alguns países, o comprovativo de capacidade matrimonial é emitido pelo consulado em Portugal. Para outros países, o documento tem de ser obtido no país de origem — no serviço de registo civil, na entidade de registo civil, no tribunal ou através de um registo eletrónico. A Conservatória avalia não o nome do documento, mas o seu conteúdo: deve ser claro que o requerente não é casado e que não existem impedimentos jurídicos.' },
        { kind: 'warning', text: 'Um comprovativo “single / unmarried” sem indicação da autoridade competente, sem apostilha ou sem tradução pode ser recusado. Antes de pedir o documento, envie uma amostra à Conservatória ou confirme a redação necessária.' }
      ]
    },
    {
      id: 'timeline',
      title: 'Prazos: o que fazer com mais de 30 dias de antecedência',
      content: [
        { kind: 'substeps', items: [
          { id: 's1-collect', title: '1. Com 2–3 meses de antecedência: reunir documentos', content: [
            { kind: 'paragraph', text: 'Obtenha documentos recentes de nascimento e de estado civil. Para registos civis estrangeiros, a Conservatória muitas vezes espera um extrato recente, e não um certificado antigo plastificado guardado no arquivo da família.' }
          ] },
          { id: 's2-apostille', title: '2. Com 1–2 meses de antecedência: apostilha e tradução', content: [
            { kind: 'paragraph', text: 'Aponha a Apostila de Haia ou faça a legalização consular. Depois prepare a tradução para português. É preferível usar um tradutor cuja assinatura possa ser reconhecida notarialmente, ou uma tradução através do consulado/de um tradutor reconhecido.' }
          ] },
          { id: 's3-apply', title: '3. Pelo menos 30 dias antes: Conservatória', content: [
            { kind: 'paragraph', text: 'Apresente o pedido de casamento / processo preliminar e a declaração de não-impedimento. O funcionário verifica os documentos, a identidade, o estado civil e a inexistência de impedimentos matrimoniais.' }
          ] },
          { id: 's4-date', title: '4. Depois da aprovação: data e formato da cerimónia', content: [
            { kind: 'paragraph', text: 'Escolhe a cerimónia na Conservatória/Notário ou fora das instalações — por exemplo, numa quinta, hotel, jardim ou local privado. Para a deslocação são necessários um funcionário disponível, morada, hora e pagamento adicional.' }
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
        { kind: 'paragraph', text: 'Durante o processo, é indicado qual o regime de bens aplicável. Se não for escolhida uma convenção antenupcial, por defeito aplica-se normalmente a comunhão de adquiridos — comunhão dos bens adquiridos depois do casamento, com exceções para bens próprios.' },
        { kind: 'checklist', items: [
          'Comunhão de adquiridos — regime padrão sem convenção antenupcial',
          'Separação de bens — regime de separação, normalmente exige convenção antenupcial',
          'Comunhão geral — regime geral, não disponível em todas as situações familiares',
          'A convenção antenupcial é feita antes do casamento junto de Notário ou na Conservatória',
          'O apelido depois do casamento não muda automaticamente: a declaração de escolha do nome é feita no âmbito do registo',
          'Se tiver vistos, autorização de residência, contas bancárias e perfis fiscais ativos, pense antecipadamente se pretende alterar o apelido',
          'Depois do registo, pode pedir a certidão de casamento para AIMA, Finanças, banco, SNS ou procedimentos de nacionalidade'
        ] },
        { kind: 'warning', text: 'O casamento com um cidadão português, por si só, não dá automaticamente nacionalidade ou autorização de residência. Para a nacionalidade por casamento existe um procedimento separado no IRN, e a autorização de residência familiar é tratada pela AIMA segundo regras próprias.' }
      ]
    },
    {
      id: 'after-marriage',
      title: 'Depois do registo: o que atualizar',
      content: [
        { kind: 'paragraph', text: 'Depois da cerimónia, o assento é lançado no registo civil. Se o casamento for celebrado em Portugal, a certidão de casamento portuguesa normalmente fica disponível através do IRN. Para utilização no estrangeiro, pode ser necessário um formulário internacional, apostilha ou tradução.' },
        { kind: 'checklist', items: [
          'Pedir a certidão de casamento no IRN, se for necessário um documento em papel',
          'Comunicar às Finanças, se o estado civil mudar para efeitos de IRS',
          'Atualizar os dados no banco e na seguradora, se o apelido ou o estado civil mudar',
          'Informar o empregador, se forem necessárias alterações no payroll ou em benefícios familiares',
          'Verificar se é necessário registar o casamento no país de nacionalidade',
          'Para autorização de residência por Reagrupamento Familiar, preparar a certidão de casamento para a AIMA',
          'Para uma futura nacionalidade, guardar todas as versões dos documentos e comprovativos de vida em comum'
        ] },
        { kind: 'warning', text: 'Se o documento for necessário fora de Portugal, uma certidão de casamento comum em PT pode não ser suficiente. Confirme os requisitos do país de destino: extrato multilingue, Apostila de Haia ou tradução certificada.' }
      ]
    }
  ],
  costs: [
    { label: 'Casamento Civil na Conservatória ou com Notário', amountEUR: 140, note: 'Valor indicativo para cerimónia e registo padrão; confirme o montante final no momento da marcação junto do IRN/Notário.' },
    { label: 'Cerimónia externa fora da Conservatória', amountEUR: 450, note: 'Pagamento adicional pela localização escolhida; pode acrescer ao custo base e depender da hora, do local e da disponibilidade do funcionário.' },
    { label: 'Convenção antenupcial', amountEURMin: 100, amountEURMax: 250, note: 'Se for necessária uma convenção antenupcial ou um regime de bens não padrão; o preço depende da Conservatória/Notário e do conteúdo.' },
    { label: 'Tradução e reconhecimento notarial', amountEURMin: 30, amountEURMax: 120, note: 'Por documento; depende do idioma, da urgência e do tradutor.' },
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
      url: 'https://irn.justica.gov.pt/Servicos/Tabela-de-Emolumentos',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
