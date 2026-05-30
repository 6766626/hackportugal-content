export default {
  editorialVoice: 'hackportugal',
  id: 'cartao-familia-numerosa',
  categoryId: 'education_children',
  title: 'Cartão de Família Numerosa: descontos para famílias com 3+ filhos',
  tldr: 'O Cartão de Família Numerosa é o cartão da APFN para famílias com 3 ou mais filhos. Em 2026, a quota custa 15 €/ano e dá acesso a descontos de parceiros: CP, museus, lojas, seguros, serviços e, por vezes, programas de serviços municipais. Não é uma prestação social do Estado e não substitui o abono de família, mas funciona frequentemente em conjunto com benefícios municipais da Câmara Municipal: água, IMI, refeições escolares, transportes. Adequado para estrangeiros residentes, mediante comprovativo da composição do agregado familiar e da morada em Portugal.',
  tags: ['família', 'filhos', 'apfn', 'descontos'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que o cartão oferece',
      content: [
        { kind: 'paragraph', text: 'O Cartão de Família Numerosa é emitido pela APFN — Associação Portuguesa de Famílias Numerosas. É um cartão associativo para famílias com 3 ou mais filhos, e não uma autorização de residência, nem um estatuto fiscal, nem uma prestação da Segurança Social.' },
        { kind: 'paragraph', text: 'A principal utilidade é o acesso a descontos de parceiros da APFN e a confirmação do estatuto de família numerosa para alguns programas comerciais e municipais. Em 2026, a quota normal da APFN é de 15 €/ano por família.' },
        { kind: 'checklist', items: ['descontos em parceiros da APFN: transportes, cultura, lojas, seguros, educação, lazer', 'descontos CP para viagens em família — as condições dependem do tipo de comboio e da tarifa', 'benefícios ou dias gratuitos em determinados museus e espaços culturais', 'benefícios municipais da Câmara Municipal: água, serviços escolares, transportes, desporto — se existir um programa local', 'pode ajudar no pedido da tarifa familiar da água, mas o cartão em si não garante a tarifa', 'os descontos comerciais exigem normalmente a apresentação do cartão e de um documento de identificação'] }
      ]
    },
    {
      id: 'who-can-apply',
      title: 'Quem é considerado família numerosa',
      content: [
        { kind: 'paragraph', text: 'A regra de base da APFN: uma família com 3 ou mais filhos. Normalmente são contabilizados os filhos menores e os filhos a cargo. Para estrangeiros, o mais importante não é o passaporte, mas a família efetiva, a morada e os documentos que comprovem a composição do agregado familiar.' },
        { kind: 'checklist', items: ['pais com 3+ filhos que vivam em Portugal', 'famílias expat com autorização de residência, visto D1-D8, Cartão de Cidadão da UE ou outro fundamento legal de residência', 'famílias mistas em que um dos progenitores é português ou cidadão da UE', 'progenitor único com 3+ filhos', 'famílias em que parte dos filhos tem mais de 18 anos, se continuarem a estar a cargo — a APFN pode pedir comprovativo de estudos ou dependência', 'filhos adotados e crianças sob tutela são contabilizados mediante apresentação de documentos'] },
        { kind: 'warning', text: 'Não confunda o Cartão de Família Numerosa com o abono de família, deduções de IRS ou estatuto de cuidador. O cartão da APFN não dá direito automático a prestações sociais e não altera o seu estatuto fiscal.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documentos para o pedido',
      content: [
        { kind: 'paragraph', text: 'O conjunto de documentos depende da composição da família, mas a lógica é simples: a APFN deve conseguir ver quem são os pais, quem são os filhos, onde vive a família e como a pode contactar. É preferível ter documentos estrangeiros em português, inglês ou com tradução, se o original estiver em russo.' },
        { kind: 'checklist', items: ['documentos dos pais: passaporte, Cartão de Residência, Cartão de Cidadão ou documento de residência da UE', 'NIF dos pais — útil para identificação e faturas, embora o cartão da APFN não seja um procedimento fiscal', 'certidões de nascimento dos filhos ou documentos equivalentes do registo civil', 'documento de adoção, tutela ou responsabilidades parentais, se aplicável', 'comprovativo de morada em Portugal: contrato de arrendamento, recibo de renda, fatura de serviços ou atestado de residência da Junta de Freguesia', 'email e telefone português para contacto', 'comprovativo de pagamento da quota da APFN de 15 €/ano', 'para filhos 18+ — certificado de frequência escolar ou outro documento, se a APFN pedir prova de dependência'] },
        { kind: 'warning', text: 'As certidões de nascimento da Federação Russa são frequentemente pedidas com tradução certificada. Se o documento tiver sido emitido fora da UE, verifique antecipadamente se é necessária apostille/legalização para a situação concreta.' }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'Como pedir através da APFN',
      content: [
        { kind: 'substeps', items: [
          { id: 'register', title: '1. Preencher o formulário da APFN', content: [
            { kind: 'paragraph', text: 'Aceda a apfn.com.pt e escolha a adesão à Associação / Cartão de Família Numerosa. Preencha os dados dos pais, dos filhos, a morada e os contactos.' }
          ] },
          { id: 'upload-documents', title: '2. Anexar os documentos', content: [
            { kind: 'paragraph', text: 'Carregue ou envie, de acordo com as instruções da APFN, cópias dos documentos da família. Se o sistema pedir esclarecimentos, responda rapidamente: as perguntas dizem mais frequentemente respeito à idade dos filhos, à morada ou à confirmação do parentesco.' }
          ] },
          { id: 'pay-fee', title: '3. Pagar 15 €/ano', content: [
            { kind: 'paragraph', text: 'O pagamento da quota ativa a participação na APFN. Guarde o comprovativo de pagamento: pode ser pedido durante o tratamento do pedido.' }
          ] },
          { id: 'receive-card', title: '4. Receber o cartão e usar os descontos', content: [
            { kind: 'paragraph', text: 'Após aprovação, a APFN emite o Cartão de Família Numerosa. As condições de utilização dependem do parceiro: por vezes é necessário o cartão físico, por vezes basta o número do cartão ou a confirmação de associado.' }
          ] }
        ] }
      ]
    },
    {
      id: 'where-discounts-work',
      title: 'Onde procurar descontos e como não perder dinheiro',
      content: [
        { kind: 'paragraph', text: 'Os descontos da APFN não são uma tarifa estatal única. Cada parceiro define as suas próprias regras: percentagem, período de validade, datas excluídas, necessidade de reserva antecipada, limite por crianças ou adultos.' },
        { kind: 'checklist', items: ['antes de comprar bilhetes CP, verifique a página do desconto e as condições tarifárias: nem todas as promoções são acumuláveis', 'nos museus, confirme na bilheteira: o benefício pode aplicar-se apenas à exposição permanente ou em dias específicos', 'para a água, procure na sua Câmara Municipal “tarifa familiar da água” ou “famílias numerosas”', 'para eletricidade, verifique a aplicabilidade da taxa reduzida de IVA ao limite de consumo aumentado para agregados com 5+ pessoas e potência contratada até 6,9 kVA', 'para refeições escolares, ATL, transportes e desporto, consulte o regulamento municipal — as regras variam consoante o concelho', 'guarde recibos e comprovativos da composição do agregado familiar: os municípios atualizam frequentemente os benefícios todos os anos', 'não conte com renovação automática: a APFN e a Câmara podem exigir confirmação anual'] },
        { kind: 'warning', text: 'Os benefícios municipais acumulam com o cartão da APFN apenas se isso for expressamente permitido pela Câmara Municipal ou pelo prestador do serviço. Por exemplo, um desconto da APFN junto de um parceiro e a tarifa familiar da água são mecanismos diferentes; um só cartão não obriga o prestador a conceder ambos os benefícios.' }
      ]
    },
    {
      id: 'expat-tips',
      title: 'Conselhos práticos para expats',
      content: [
        { kind: 'paragraph', text: 'Se acabou de chegar, reúna primeiro os identificadores portugueses básicos: NIF, comprovativo de morada, documentos dos filhos para a escola e SNS. Depois disso, o cartão da APFN e os pedidos municipais tornam-se consideravelmente mais simples.' },
        { kind: 'checklist', items: ['peça na Junta de Freguesia um atestado de residência com a lista dos membros do agregado familiar, se o contrato de arrendamento estiver apenas em nome de um dos progenitores', 'verifique o site da sua Câmara Municipal: Lisboa, Porto, Cascais, Oeiras, Braga, Coimbra e outros concelhos têm programas familiares diferentes', 'se os filhos estudam, guarde as declarações de matrícula — são frequentemente necessárias para benefícios', 'em caso de divórcio ou residência separada, prepare o acordo sobre responsabilidades parentais e a morada dos filhos', 'ao comprar passes, compare o desconto da APFN, o passe escolar municipal e o Navegante/Andante — a opção mais barata nem sempre é através da APFN', 'uma vez por ano, verifique os parceiros da APFN: a lista de descontos muda'] }
      ]
    }
  ],
  costs: [
    { label: 'Quota da APFN', amountEUR: 15, note: 'Em 2026, quota anual normal por família para acesso ao Cartão de Família Numerosa e aos descontos de parceiros.' },
    { label: 'Pedidos municipais', amountEUR: 0, note: 'Normalmente gratuitos, mas a Câmara Municipal pode exigir declarações recentes ou atualização anual.' },
    { label: 'Tradução de documentos estrangeiros', amountEURMin: 20, amountEURMax: 60, note: 'Valor indicativo por documento; depende do idioma, da certificação notarial e da urgência.' }
  ],
  sources: [
    { title: 'APFN — Associação Portuguesa de Famílias Numerosas e Cartão de Família Numerosa', url: 'https://www.apfn.com.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'gov.pt — portal do Governo de Portugal: serviços familiares e sociais', url: 'https://www.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal — serviços para famílias, crianças e agregados familiares', url: 'https://www.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
