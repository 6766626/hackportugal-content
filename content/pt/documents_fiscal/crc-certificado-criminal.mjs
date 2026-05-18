export default {
  editorialVoice: 'hackportugal',
  id: 'crc-certificado-criminal',
  categoryId: 'documents_fiscal',
  title: 'CRC — certificado de registo criminal em Portugal (Certidão de Registo Criminal)',
  tldr: 'A Certidão de Registo Criminal é o certificado português de ausência de antecedentes criminais. É necessária para a AIMA, alguns empregos, licenças, voluntariado, autorização de residência e nacionalidade; para entidades estrangeiras, normalmente é necessária apostila.\n\nEm 2026, o pedido online através do Registo Criminal custa 5 €, está disponível com Cartão de Cidadão ou Chave Móvel Digital, o certificado é verificado por código e, em regra, é válido durante 3 meses. Se viver fora de Portugal, é utilizado um formulário separado para residente no estrangeiro.',
  tags: ['crc', 'registo criminal', 'aima', 'apostila'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que é o CRC e quando é solicitado',
      content: [
        { kind: 'paragraph', text: 'A Certidão de Registo Criminal, ou CRC, é um certificado oficial do registo criminal português. Mostra a existência ou inexistência de registos que podem ser divulgados para uma finalidade concreta: trabalho, licença, adoção, AIMA, nacionalidade, trabalho com crianças, etc.' },
        { kind: 'paragraph', text: 'Em Portugal, o certificado não é universal “para todos os fins”. Ao fazer o pedido, é escolhida a finalidade, e o conteúdo do certificado pode depender dessa finalidade. Para um empregador, a AIMA ou uma entidade estrangeira, é melhor confirmar antecipadamente a formulação da finalidade.' },
        { kind: 'checklist', items: [
          'AIMA: é frequentemente exigido no primeiro pedido de autorização de residência, na mudança de estatuto ou em procedimentos específicos; por vezes basta autorizar a AIMA a consultar os dados diretamente',
          'Trabalho: é obrigatório para profissões com crianças, segurança, riscos financeiros, contratação pública e licenças',
          'Naturalização: o IRN normalmente verifica diretamente o CRC português, mas pode ser necessário apresentar certificados de outros países de residência',
          'Vistos e procedimentos estrangeiros: o CRC português é frequentemente pedido com apostila',
          'Prazo: o acesso ao certificado online normalmente é válido durante 3 meses a contar da data de emissão',
          'Custo em 2026: 5 € por certificado de pessoa singular'
        ] }
      ]
    },
    {
      id: 'online-request',
      title: 'Como pedir online por 5 € 💻',
      content: [
        { kind: 'paragraph', text: 'A forma mais rápida é através do portal Registo Criminal. O pedido online está disponível para quem tem Cartão de Cidadão ou Chave Móvel Digital (CMD).\n\nDepois do pagamento, não recebe um PDF “com carimbo”, mas sim um certificado digital com código de acesso; a entidade destinatária verifica-o no site oficial.' },
        { kind: 'checklist', items: [
          'Aceda a registocriminal.justica.gov.pt',
          'Escolha pedido de certificado de registo criminal de pessoas singulares',
          'Autentique-se com Cartão de Cidadão ou Chave Móvel Digital',
          'Escolha a finalidade de emissão: emprego, AIMA, nacionalidade, licenciamento ou outra adequada',
          'Verifique os dados pessoais: nome, data de nascimento, nacionalidade, número do documento',
          'Pague 5 € com cartão bancário, Multibanco ou outro método disponível no portal',
          'Guarde o código de acesso e a data de emissão',
          'Entregue ao empregador ou à entidade não uma captura de ecrã, mas sim o código de verificação do certificado'
        ] },
        { kind: 'warning', text: 'Se a entidade pedir “original”, confirme se aceita um CRC digital com código. Em Portugal, este é um formato oficial normal, mas as entidades estrangeiras exigem frequentemente um documento em papel com apostila.' }
      ]
    },
    {
      id: 'in-person-and-foreign-resident',
      title: 'Se não tiver CMD ou estiver fora de Portugal',
      content: [
        { kind: 'paragraph', text: 'Sem CMD ou Cartão de Cidadão, o CRC pode ser pedido presencialmente num balcão dos Serviços de Identificação Criminal, nas Lojas de Cidadão e em alguns Espaços Registos. É necessário um documento de identificação e os dados para a finalidade escolhida. O custo é o mesmo — 5 €.' },
        { kind: 'paragraph', text: 'Se viver fora de Portugal, é utilizado um requerimento separado para residente no estrangeiro. Normalmente é necessário o formulário preenchido, uma cópia do documento de identificação e o comprovativo de pagamento. O formulário atualizado e o endereço de envio devem ser obtidos no portal oficial Registo Criminal, porque os canais de submissão podem mudar.' },
        { kind: 'checklist', items: [
          'Passaporte ou Cartão de Cidadão / Título de Residência',
          'O NIF não é o documento principal obrigatório, mas pode ser útil para pagamento ou identificação',
          'Finalidade exata de emissão do certificado',
          'Endereço de e-mail para receber o código de acesso',
          'Para representante: procuração ou autorização, se o certificado for levantado por outra pessoa',
          'Para pedido a partir do estrangeiro: formulário residente no estrangeiro com assinatura',
          'Se o documento for necessário para uma entidade estrangeira: confirme antecipadamente se é necessária uma via em papel e apostila'
        ] }
      ]
    },
    {
      id: 'apostille',
      title: 'Apostila: quando o CRC é necessário no estrangeiro',
      content: [
        { kind: 'paragraph', text: 'Para utilizar o CRC português noutro país, normalmente é necessária a Apostila da Convenção da Haia. Isto confirma a autenticidade da assinatura e a competência da entidade portuguesa, mas não traduz o conteúdo do certificado.' },
        { kind: 'paragraph', text: 'A Apostila em Portugal é emitida através da Procuradoria-Geral da República e dos serviços autorizados. A taxa típica é 10,20 € por documento, mas antes de submeter o pedido confirme a taxa e o formato atualizados, porque os documentos digitais podem ter requisitos próprios.' },
        { kind: 'checklist', items: [
          'Obtenha o CRC com a finalidade correta',
          'Confirme junto da entidade estrangeira: é necessário o original em papel ou aceitam verificação digital',
          'Peça a apostila na PGR ou num serviço autorizado',
          'Se o país de destino não aceitar a língua portuguesa, faça uma tradução juramentada ou certificada depois da apostila, ou de acordo com os requisitos do país de destino',
          'Verifique o prazo: muitas entidades aceitam certificados com menos de 90 dias',
          'Para a AIMA dentro de Portugal, a apostila não é necessária'
        ] },
        { kind: 'warning', text: 'A Apostila não corrige uma finalidade do CRC escolhida incorretamente. Se o certificado tiver sido pedido “para trabalho” e a entidade exigir “para procedimento de imigração”, podem pedir um novo certificado por 5 €.' }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Erros frequentes e como evitá-los',
      content: [
        { kind: 'checklist', items: [
          'Pediu o CRC demasiado cedo: passados 3 meses, o código pode deixar de ser aceite',
          'Entregou ao empregador uma captura de ecrã em PDF em vez do código oficial de verificação',
          'Escolheu a finalidade errada e recebeu uma recusa',
          'Pensam que o CRC português substitui certificados da Federação Russa, Ucrânia, Brasil ou outros países de residência — não substitui',
          'Para a nacionalidade, esqueceram que podem ser necessários certificados dos países onde o requerente viveu depois dos 16 anos',
          'Para uma entidade estrangeira, não fizeram apostila',
          'Fizeram a tradução antes da apostila, embora o país destinatário tenha pedido a tradução do documento já apostilado',
          'Tentam pedir online sem CMD ou Cartão de Cidadão — nesse caso é necessário um canal presencial ou o formulário para residente no estrangeiro'
        ] },
        { kind: 'paragraph', text: 'Ordem prática: primeiro pergunte à entidade destinatária a finalidade exata, a antiguidade máxima aceite e se é necessária apostila; depois peça o CRC; em seguida trate da apostila e da tradução, se o documento for usado fora de Portugal.' }
      ]
    }
  ],
  costs: [
    { label: 'Certidão de Registo Criminal para pessoa singular', amountEUR: 5, note: 'Online ou presencial; preço padrão em 2026' },
    { label: 'Apostila por documento', amountEUR: 10.2, note: 'Valor indicativo da taxa da PGR; confirmar a tarifa antes da submissão' }
  ],
  sources: [
    {
      title: 'Registo Criminal — portal oficial para pedido e verificação do CRC',
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
