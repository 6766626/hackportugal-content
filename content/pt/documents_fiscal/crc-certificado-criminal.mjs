export default {
  editorialVoice: 'hackportugal',
  id: 'crc-certificado-criminal',
  categoryId: 'documents_fiscal',
  title: 'CRC — certificado de registo criminal em Portugal (Certidão de Registo Criminal)',
  tldr: 'A Certidão de Registo Criminal é o certificado português de registo criminal. É necessária para a AIMA, alguns empregos, licenças, voluntariado, autorização de residência e nacionalidade; para entidades estrangeiras, normalmente é exigida apostila.\n\nEm 2026, o pedido online através do Registo Criminal custa 5 €, está disponível com Cartão de Cidadão ou Chave Móvel Digital, o certificado é verificado por código e é geralmente válido durante 3 meses. Se vive fora de Portugal, usa-se um formulário separado para residente no estrangeiro.',
  tags: ['crc', 'registo criminal', 'aima', 'apostila'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que é o CRC e quando é pedido',
      content: [
        { kind: 'paragraph', text: 'A Certidão de Registo Criminal, ou CRC, é um certificado oficial do registo criminal português. Indica a existência ou ausência de registos que possam ser revelados para uma finalidade específica: trabalho, licença, adoção, AIMA, nacionalidade, trabalho com crianças, etc.' },
        { kind: 'paragraph', text: 'Em Portugal, o certificado não é universal “para todos os fins”. Ao fazer o pedido, escolhe-se a finalidade, e o conteúdo do certificado pode depender dessa finalidade. Para empregador, AIMA ou entidade estrangeira, é melhor confirmar previamente a formulação da finalidade.' },
        { kind: 'checklist', items: [
          'AIMA: é frequentemente exigido na primeira autorização de residência, mudança de estatuto ou procedimentos específicos; por vezes basta dar autorização à AIMA para consultar os dados diretamente',
          'Trabalho: é obrigatório para profissões com crianças, segurança, riscos financeiros, contratação pública, licenças',
          'Naturalização: o IRN normalmente verifica diretamente o CRC português, mas pode ser necessário apresentar certificados de outros países de residência',
          'Vistos e procedimentos estrangeiros: o CRC português é frequentemente pedido com apostila',
          'Prazo: o acesso ao certificado online normalmente é válido durante 3 meses a partir da data de emissão',
          'Custo em 2026: 5 € por certificado de pessoa singular'
        ] }
      ]
    },
    {
      id: 'online-request',
      title: 'Como pedir online por 5 € 💻',
      content: [
        { kind: 'paragraph', text: 'A forma mais rápida é através do portal Registo Criminal. O pedido online está disponível para quem tem Cartão de Cidadão ou Chave Móvel Digital (CMD). Após o pagamento, recebe não um PDF “com carimbo”, mas um certificado digital com código de acesso; a entidade destinatária verifica-o no site oficial.' },
        { kind: 'checklist', items: [
          'Aceda a registocriminal.justica.gov.pt',
          'Selecione pedido de certificado de registo criminal de pessoas singulares',
          'Autentique-se com Cartão de Cidadão ou Chave Móvel Digital',
          'Escolha a finalidade de emissão: emprego, AIMA, nacionalidade, licenciamento ou outra adequada',
          'Verifique os dados pessoais: nome, data de nascimento, nacionalidade, número do documento',
          'Pague 5 € com cartão bancário, Multibanco ou outro meio disponível no portal',
          'Guarde o código de acesso e a data de emissão',
          'Entregue ao empregador ou entidade não uma captura de ecrã, mas o código de verificação do certificado'
        ] },
        { kind: 'warning', text: 'Se a entidade pedir “original”, confirme se aceita um CRC digital com código. Em Portugal, este é um formato oficial normal, mas entidades estrangeiras exigem frequentemente um documento em papel com apostila.' }
      ]
    },
    {
      id: 'in-person-and-foreign-resident',
      title: 'Se não tiver CMD ou estiver fora de Portugal',
      content: [
        { kind: 'paragraph', text: 'Sem CMD ou Cartão de Cidadão, o CRC pode ser pedido presencialmente num balcão dos Serviços de Identificação Criminal, nas Lojas de Cidadão e em alguns Espaços Registos. É necessário documento de identificação e os dados para a finalidade escolhida. O custo é o mesmo — 5 €.' },
        { kind: 'paragraph', text: 'Se vive fora de Portugal, usa-se um requerimento separado para residente no estrangeiro. Normalmente é necessário o formulário preenchido, cópia do documento de identificação e comprovativo de pagamento. O formulário atualizado e a morada de envio devem ser obtidos no portal oficial Registo Criminal, porque os canais de submissão podem mudar.' },
        { kind: 'checklist', items: [
          'Passaporte ou Cartão de Cidadão / Título de Residência',
          'O NIF não é o documento obrigatório principal, mas pode ser útil para pagamento ou identificação',
          'Finalidade exata da emissão do certificado',
          'Endereço de email para receber o código de acesso',
          'Para representante: procuração ou autorização, se o certificado for levantado por outra pessoa',
          'Para pedido a partir do estrangeiro: formulário residente no estrangeiro assinado',
          'Se o documento for necessário para uma entidade estrangeira: confirme previamente se é exigido exemplar em papel e apostila'
        ] }
      ]
    },
    {
      id: 'apostille',
      title: 'Apostila: quando o CRC é necessário no estrangeiro',
      content: [
        { kind: 'paragraph', text: 'Para usar um CRC português noutro país, normalmente é necessária a Apostila da Convenção da Haia. Isto confirma a autenticidade da assinatura e os poderes da entidade portuguesa, mas não traduz o conteúdo do certificado.' },
        { kind: 'paragraph', text: 'A Apostila em Portugal é emitida através da Procuradoria-Geral da República e serviços autorizados. A taxa típica é de 10,20 € por documento, mas antes de submeter confirme a tabela atual e o formato, porque os documentos digitais podem ter requisitos próprios.' },
        { kind: 'checklist', items: [
          'Obtenha o CRC com a finalidade correta',
          'Confirme junto da entidade estrangeira: se é necessário original em papel ou se aceitam verificação digital',
          'Peça a apostila na PGR ou num serviço autorizado',
          'Se o país de destino não aceitar a língua portuguesa, faça tradução juramentada ou certificada após a apostila ou de acordo com os requisitos do país de destino',
          'Verifique o prazo: muitas entidades aceitam certificados com menos de 90 dias',
          'Para a AIMA dentro de Portugal, não é necessária apostila'
        ] },
        { kind: 'warning', text: 'A apostila não corrige uma finalidade do CRC escolhida incorretamente. Se o certificado foi pedido “para trabalho”, mas a entidade exige “para procedimento de imigração”, podem pedir um novo certificado por 5 €.' }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Erros frequentes e como evitá-los',
      content: [
        { kind: 'checklist', items: [
          'Pediu o CRC demasiado cedo: ao fim de 3 meses, o código pode já não ser aceite',
          'Entregou ao empregador uma captura de ecrã em PDF em vez do código oficial de verificação',
          'Escolheu a finalidade errada e recebeu uma recusa',
          'Pensam que o CRC português substitui certificados da Rússia, Ucrânia, Brasil ou outros países de residência — não substitui',
          'Para a nacionalidade, esqueceram-se de que podem ser exigidos certificados dos países onde o requerente viveu após os 16 anos',
          'Para uma entidade estrangeira, não fizeram apostila',
          'Fizeram a tradução antes da apostila, quando o país destinatário pediu a tradução do documento já apostilado',
          'Tentam pedir online sem CMD ou Cartão de Cidadão — nesse caso é necessário um canal presencial ou o formulário para residente no estrangeiro'
        ] },
        { kind: 'paragraph', text: 'Ordem prática: primeiro pergunte à entidade destinatária a finalidade exata, o prazo de antiguidade aceite e se é necessária apostila; depois peça o CRC; em seguida trate da apostila e da tradução, se o documento for para fora de Portugal.' }
      ]
    }
  ],
  costs: [
    { label: 'Certidão de Registo Criminal para pessoa singular', amountEUR: 5, note: 'Online ou presencialmente; preço padrão em 2026' },
    { label: 'Apostila por documento', amountEUR: 10.2, note: 'Referência da taxa da PGR; confirmar a tabela antes de submeter' }
  ],
  sources: [
    {
      title: 'Registo Criminal — portal oficial de pedido e verificação do CRC',
      url: 'https://registocriminal.justica.gov.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'gov.pt — pedir o certificado de registo criminal de pessoas singulares',
      url: 'https://www.gov.pt/servicos/pedir-o-certificado-de-registo-criminal-de-pessoas-singulares',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Procuradoria-Geral da República — Apostila da Convenção da Haia',
      url: 'https://www.ministeriopublico.pt/perguntas-frequentes/servico-apostilas',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
