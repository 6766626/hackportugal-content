export default {
  editorialVoice: 'hackportugal',
  id: 'ato-isolado',
  categoryId: 'taxes',
  title: 'Ato Isolado — factura única sem abrir atividade',
  tldr: 'O Ato Isolado é uma forma de emitir legalmente uma factura pontual em Portugal sem abertura de atividade, se o serviço ou a venda for realmente único e não constituir uma atividade regular. O limite prático para a dispensa da declaração de início de atividade é até 25 000 € por operação; se houver repetição, as Finanças esperam a abertura de atividade. Normalmente aplica-se IVA a 23% no continente e pode haver retenção na fonte IRS de 25% para serviços do art. 151.º CIRS, se o cliente for uma empresa.',
  tags: ['ato-isolado', 'irs', 'iva', 'finanças'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que é o Ato Isolado',
      content: [
        { kind: 'paragraph', text: 'O Ato Isolado é uma operação pontual: você prestou um serviço ou vendeu um bem uma única vez e quer emitir um documento oficial através do Portal das Finanças sem registar uma atividade permanente como trabalhador independente.' },
        { kind: 'paragraph', text: 'O rendimento entra no IRS como categoria B. Não é uma “brecha fiscal”, mas sim um regime para operações ocasionais, imprevistas ou irregulares. Se faz regularmente design, consultoria, aulas, desenvolvimento, traduções ou presta serviços ao mesmo cliente — isso já implica abertura de atividade e recibos verdes.' },
        { kind: 'checklist', items: [
          'Adequado para um projecto pontual, uma consulta extra, uma palestra única, a venda de um serviço ou trabalho ao abrigo de um contrato de prestação de serviços',
          'Não exige abertura de atividade, se a operação não exceder 25 000 €',
          'É emitido online no Portal das Finanças',
          'Pode ser Fatura-Recibo Ato Isolado, se lhe pagarem de imediato',
          'Pode ser primeiro Fatura Ato Isolado e depois Recibo, se o pagamento ocorrer mais tarde',
          'O rendimento é declarado no IRS do ano correspondente',
          'Normalmente não cria a obrigação de pagar Segurança Social como trabalhador independente'
        ] }
      ]
    },
    {
      id: 'when-you-can-use',
      title: 'Quando pode e quando não pode usar',
      content: [
        { kind: 'paragraph', text: 'O teste principal das Finanças não é o valor em si, mas a natureza da operação. O Ato Isolado deve ser realmente isolado. O limite de 25 000 € é importante para a dispensa da entrega da declaração de início de atividade, mas não transforma freelance regular “até 25 000 € por ano” num Ato Isolado legal.' },
        { kind: 'checklist', items: [
          'Pode: realizar uma vez um workshop de 800 € para uma empresa',
          'Pode: fazer uma vez um site para uma empresa conhecida por 2 500 €',
          'Pode: vender pontualmente um serviço profissional sem planos de continuidade',
          'Arriscado: emitir todos os meses um Ato Isolado ao mesmo cliente',
          'Arriscado: 3–4 facturas “pontuais” por serviços semelhantes ao longo do ano',
          'Não pode ser usado como substituto permanente dos recibos verdes em caso de trabalho independente regular',
          'Se a operação for superior a 25 000 €, normalmente é necessária abertura de atividade antes da factura',
          'Se já tem atividade aberta nessa área, use faturas-recibo normais, não Ato Isolado'
        ] },
        { kind: 'warning', text: 'A frase “pode uma vez por ano até 25 000 €” é uma simplificação. A lei fala de uma operação ocasional e da dispensa da declaração de início quando a operação é até 25 000 €. A repetição é mais importante do que o ano civil.' }
      ]
    },
    {
      id: 'taxes',
      title: 'Impostos: IVA, IRS e retenção',
      content: [
        { kind: 'paragraph', text: 'Em sede de IVA, o Ato Isolado é normalmente considerado uma operação tributável. Em Portugal continental, a taxa normal é 23%, na Madeira 22% e nos Açores 18%. A isenção do art. 53.º CIVA para pequeno volume de negócios normalmente não se aplica ao Ato Isolado; pode haver excepções pela natureza da operação, por exemplo serviços médicos, educativos ou de seguros ao abrigo do art. 9.º CIVA.' },
        { kind: 'paragraph', text: 'Em sede de IRS, o rendimento é declarado na declaração anual de IRS do ano em que o rendimento é recebido. Para um residente, soma-se aos restantes rendimentos e é tributado pelas taxas progressivas de IRS; em 2026, a primeira taxa de IRS é 11,97% para o primeiro escalão. O resultado final depende de todos os rendimentos, deduções e estatuto de residência.' },
        { kind: 'checklist', items: [
          'IVA: normalmente acrescentar 23% ao preço no continente, se o serviço não estiver isento pelo CIVA',
          'Prazo de pagamento do IVA: até ao fim do mês seguinte ao da conclusão da operação',
          'IRS: incluir o rendimento na declaração de IRS, normalmente no Anexo B',
          'Retenção na fonte: se o cliente for uma empresa ou entidade com contabilidade organizada, pode haver retenção de IRS',
          'A retenção típica para serviços profissionais da tabela do art. 151.º CIRS é 25%',
          'Para alguns outros rendimentos da categoria B, a taxa de retenção pode ser 11,5%',
          'Pode aplicar dispensa de retenção ao abrigo do art. 101.º-B CIRS, se estiverem cumpridas as condições e os rendimentos não excederem o limiar do regime de IVA do art. 53.º CIVA',
          'Se o cliente for uma pessoa singular sem contabilidade organizada, normalmente não se faz retenção'
        ] },
        { kind: 'warning', text: 'Se não tiver a certeza de que é necessária retenção, pergunte ao cliente antes de emitir a factura. Corrigir um Ato Isolado depois do pagamento é mais difícil do que escolher logo correctamente os campos de IVA e IRS.' }
      ]
    },
    {
      id: 'how-to-issue',
      title: 'Como emitir um Ato Isolado no Portal das Finanças',
      content: [
        { kind: 'paragraph', text: 'Precisa de NIF e de acesso ao Portal das Finanças. A CMD não é obrigatória, mas é prática para entrar nos serviços públicos. O documento é criado na área de faturas e recibos verdes, mesmo que a atividade não esteja aberta.' },
        { kind: 'substeps', items: [
          { id: 'login', title: '1. Entrar no Portal das Finanças', content: [
            { kind: 'paragraph', text: 'Aceda a portaldasfinancas.gov.pt → Cidadãos → Serviços → Faturas e Recibos Verdes. Autentique-se com NIF e palavra-passe ou através da Chave Móvel Digital.' }
          ] },
          { id: 'choose-document', title: '2. Escolher o documento', content: [
            { kind: 'checklist', items: [
              'Fatura-Recibo Ato Isolado — se o serviço foi prestado e o dinheiro recebido de imediato',
              'Fatura Ato Isolado — se primeiro está a emitir a factura',
              'Recibo Ato Isolado — se confirmar mais tarde o pagamento de uma fatura já emitida',
              'Não escolha um recibo verde normal se a atividade não estiver aberta'
            ] }
          ] },
          { id: 'fill-fields', title: '3. Preencher os dados', content: [
            { kind: 'checklist', items: [
              'NIF do cliente',
              'Nome ou denominação social do cliente',
              'Descrição do serviço ou bem em português ou inglês',
              'Data da operação',
              'Valor base sem IVA',
              'Regime de IVA: taxa de 23%, 22%, 18% ou isenção com referência legal',
              'Retenção na fonte IRS: taxa ou dispensa com referência legal',
              'Código CIRS/CAE, se o sistema pedir a classificação da atividade'
            ] }
          ] },
          { id: 'validate', title: '4. Verificar antes da emissão', content: [
            { kind: 'paragraph', text: 'Antes da emissão, verifique o montante, a taxa de IVA e a retenção. Depois de emitido, o documento já é visível para o cliente e para as Finanças; o cancelamento ou a correcção são possíveis, mas criam rastos e perguntas desnecessárias.' }
          ] }
        ] }
      ]
    },
    {
      id: 'after-issuing',
      title: 'O que fazer depois de emitir',
      content: [
        { kind: 'paragraph', text: 'Após a emissão, surgem duas obrigações principais: pagar o IVA, se tiver sido cobrado, e incluir o rendimento no IRS. O facto de emitir um Ato Isolado não significa inscrição automática na Segurança Social como trabalhador independente.' },
        { kind: 'checklist', items: [
          'Descarregue o PDF do documento e envie-o ao cliente',
          'Se foi cobrado IVA, pague-o até ao fim do mês seguinte',
          'Guarde o comprovativo de pagamento do IVA',
          'Guarde o contrato, o e-mail com a encomenda, o comprovativo de pagamento e a correspondência',
          'Verifique se o cliente fez retenção na fonte e se emitiu a declaração anual de rendimentos',
          'No ano seguinte, entregue o IRS com Anexo B no prazo normal de 1 de abril — 30 de junho',
          'Não se esqueça de incluir o Ato Isolado, mesmo que o imposto já tenha sido parcialmente retido pelo cliente',
          'Se, depois do Ato Isolado, o trabalho se tornar regular, abra atividade antes da próxima factura'
        ] },
        { kind: 'warning', text: 'Não adie o IVA. No Ato Isolado, não é “o seu rendimento”, mas sim um imposto que cobrou ao cliente e que deve entregar ao Estado.' }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Erros típicos de expats',
      content: [
        { kind: 'checklist', items: [
          'Emitem vários Ato Isolado seguidos em vez de fazer abertura de atividade',
          'Acordam um preço de “1 000 €” e depois esquecem-se de que pode acrescer IVA de 23%',
          'Não discutem a retenção com o cliente empresarial e recebem menos dinheiro na conta',
          'Escolhem isenção de IVA sem fundamento legal',
          'Pensam que o Ato Isolado não tem de aparecer no IRS',
          'Confundem o limite de 25 000 € com autorização para freelance anual regular',
          'Usam Ato Isolado quando já têm atividade aberta para o mesmo serviço',
          'Não guardam documentos que comprovem o carácter pontual da operação'
        ] },
        { kind: 'paragraph', text: 'Abordagem prática: se é a primeira e, provavelmente, a única factura — o Ato Isolado é conveniente. Se já está à procura de clientes, planeia repetir o serviço ou faz isto como profissão — abra atividade e trabalhe através de recibos verdes.' }
      ]
    }
  ],
  costs: [
    { label: 'Emissão de Ato Isolado no Portal das Finanças', amountEUR: 0, note: 'Não há taxa administrativa' },
    { label: 'IVA em Portugal continental', amountEURMin: 0, amountEURMax: 0, note: 'Normalmente 23% da base; é um imposto a entregar, não uma taxa fixa' },
    { label: 'Retenção na fonte IRS para muitos serviços profissionais', amountEURMin: 0, amountEURMax: 0, note: 'Frequentemente 25% da base, retidos pelo cliente quando existe obrigação' }
  ],
  sources: [
    {
      title: 'Autoridade Tributária: IRS — Atos Isolados, folheto informativo',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Folhetos_informativos/Documents/Inicio_atividade.pdf',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IRS — categoria B, atos isolados e retenção na fonte',
      url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/Cod_download/Documents/CIRS.pdf',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IVA — sujeitos passivos, início de atividade e regras de IVA',
      url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/civa_rep/Pages/iva31.aspx',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças — recibos verdes e faturas-recibo',
      url: 'https://www.portaldasfinancas.gov.pt/at/html/index.html',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
