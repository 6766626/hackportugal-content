export default {
  editorialVoice: 'hackportugal',
  id: 'procuracao-notario',
  categoryId: 'documents_fiscal',
  title: 'Procuração no notário: procuração, poderes especiais e apostila',
  tldr: 'A procuração é o instrumento português para agir através de um representante: comprar/vender imóveis, assinar contratos, entregar documentos, representar perante as Finanças, AIMA, banco ou perante a família no estrangeiro. Em 2026, é feita junto de notário, advogado/solicitador ou através de serviços de registo; para utilização fora de Portugal, normalmente é necessária a apostila Hague Apostille. O custo num notário privado é geralmente 30–100 € pelo texto/reconhecimento, a apostila da PGR custa cerca de 10,20 € por documento, e a tradução é paga à parte.',
  tags: ['procuração', 'notário', 'apostila', 'representação'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que é uma Procuração e quando é necessária',
      content: [
        { kind: 'paragraph', text: 'A procuração é um documento pelo qual você confere a outra pessoa poderes para agir em seu nome. No direito português, a base é o Código Civil, art. 262 e seguintes: o poder de representação deve resultar da lei ou da vontade do representado.' },
        { kind: 'paragraph', text: 'Para atos do dia a dia, por vezes basta uma procuração escrita simples, mas os expatriados quase sempre precisam de uma forma com assinatura reconhecida ou forma notarial: bancos, imóveis, Conservatória, Finanças, AIMA, heranças, negócios com quotas, atos a praticar para outro país.' },
        { kind: 'checklist', items: [
          'Imóveis: compra, venda, contrato-promessa, escritura, submissão no Registo Predial.',
          'AIMA: o representante pode marcar, entregar parte dos documentos e receber notificações, mas a biometria e a presença pessoal normalmente continuam a caber ao requerente.',
          'Finanças: representação para NIF, IRS, IMI, IVA, recibos verdes, receção de notificações.',
          'Banco: abertura/encerramento de conta, pedido de documentos, operações — o banco exige frequentemente o seu próprio texto ou aprovação separada.',
          'Assuntos familiares: escola, saúde, viagens de crianças, gestão de bens de familiares.',
          'Heranças: habilitação de herdeiros, partilhas, atos fiscais e registrais.',
          'Utilização no estrangeiro: quase sempre é necessária apostila e, muitas vezes, tradução para a língua do país de destino.'
        ] }
      ]
    },
    {
      id: 'choose-type',
      title: 'Escolha o tipo: geral ou especial',
      content: [
        { kind: 'paragraph', text: 'O erro principal é fazer uma procuração “geral para tudo” quando a entidade ou o banco quer poderes exatos. Em Portugal, é mais seguro escrever de forma concreta, enumerando atos, entidades, objetos, montantes e prazos.' },
        { kind: 'substeps', items: [
          { id: 'general', title: 'Procuração geral', content: [
            { kind: 'paragraph', text: 'Serve para atos administrativos: receber documentos, apresentar requerimentos, representar perante a Câmara Municipal, Junta de Freguesia, Finanças, Segurança Social, SNS, operadores de telecomunicações.' },
            { kind: 'warning', text: 'Uma procuração “geral” nem sempre cobre venda de imóveis, doações, hipotecas, partilhas de herança, ordens bancárias e atos de elevado risco. Para estes, normalmente são necessários poderes especiais.' }
          ] },
          { id: 'special', title: 'Procuração especial', content: [
            { kind: 'paragraph', text: 'É necessária quando o representante pratica um ato jurídico concreto e relevante: vende um apartamento, compra uma casa, assina crédito habitação, representa numa herança, abre/encerra uma conta, recebe dinheiro, assina um contrato com alienação de direitos.' },
            { kind: 'checklist', items: [
              'Nome completo, data de nascimento, nacionalidade, passaporte/Cartão de Cidadão/autorização de residência do mandante.',
              'NIF do mandante e do representante, se o ato estiver relacionado com Portugal.',
              'Dados completos do representante: nome, documento, morada, NIF.',
              'Objeto exato: morada, artigo matricial, descrição predial, fração, se estiver em causa um imóvel.',
              'Poderes concretos: assinar, pagar, receber, registar, apresentar declarações, corrigir erros.',
              'Direito de substabelecimento — apenas se for realmente necessário.',
              'Prazo de validade: por exemplo, 6 ou 12 meses, se não quiser um documento sem termo.',
              'Limitações: preço máximo, banco específico, negócio concreto, proibição de receber dinheiro em numerário.'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'prepare-documents',
      title: 'Prepare os dados antes da visita ao notário',
      content: [
        { kind: 'paragraph', text: 'Os Cartórios Notariais privados em Portugal normalmente atendem por marcação. Pode levar o texto já preparado ou encomendá-lo ao notário, advogado ou solicitador. Se a procuração for para um banco, negócio imobiliário ou entidade estrangeira — peça primeiro à parte destinatária os requisitos de redação.' },
        { kind: 'checklist', items: [
          'Passaporte ou Cartão de Cidadão / título de residência do mandante.',
          'NIF do mandante; para atos fiscais — também acesso ou representação no Portal das Finanças em separado.',
          'Dados do representante: nome completo como consta do documento, número de passaporte/CC/autorização de residência, NIF, morada.',
          'Rascunho dos poderes em língua portuguesa.',
          'Dados do objeto ou processo: imóvel, número de processo AIMA/tribunal, IBAN bancário, período fiscal de IRS, número do processo de herança.',
          'Informação sobre o prazo de validade e o direito de substabelecimento, se for necessário substabelecer.',
          'Se o mandante não compreender português — intérprete ou texto bilingue; o notário deve certificar-se de que a pessoa compreende o que está a assinar.',
          'Para utilização no estrangeiro — confirmação: é necessária apostila, tradução notarial, legalização consular ou formato específico do país.'
        ] },
        { kind: 'warning', text: 'Não assine uma procuração com frases como “todos os poderes” e com direito de vender/receber dinheiro se o objetivo for apenas entregar documentos. Em Portugal, a procuração pode dar ao representante uma possibilidade real de realizar um negócio sem o seu consentimento posterior.' }
      ]
    },
    {
      id: 'sign-and-certify',
      title: 'Assinatura: notário, advogado ou serviço de registo',
      content: [
        { kind: 'paragraph', text: 'A via clássica é o Cartório Notarial: o notário verifica a identidade, a capacidade, o texto e certifica o documento. Nos termos do **Código Civil art. 262 nº 2**, a procuração deve revestir a forma exigida para o negócio que o representante vai praticar. Para atos administrativos correntes, muitas vezes basta a forma escrita simples com **assinatura reconhecida presencialmente** (reconhecimento presencial da assinatura). **Para negócios com imóveis (compra e venda, hipoteca, doação), a procuração exige forma mais rigorosa: instrumento público (escritura) perante notário ou documento particular autenticado** — isto resulta do art. 875 Código Civil + Decreto-Lei 116/2008. O simples reconhecimento presencial de assinatura NÃO é suficiente para imóveis.' },
        { kind: 'paragraph', text: 'Advogados e solicitadores em Portugal também podem reconhecer assinaturas e certificar documentos no âmbito das suas competências. Mas a organização destinatária pode exigir expressamente notário ou uma forma determinada — sobretudo banco, entidade estrangeira, Conservatória ou parte no negócio.' },
        { kind: 'checklist', items: [
          'Marque no cartório e envie o texto previamente por email.',
          'Leve o documento de identificação original, não apenas uma cópia.',
          'Verifique a grafia do nome em caracteres latinos: como no passaporte e no NIF.',
          'Confira NIF, moradas, números de documentos e dados do imóvel.',
          'Peça para incluir o prazo de validade, se a procuração for temporária.',
          'Confirme se é necessária uma via original ou várias certified copies.',
          'Verifique se o destinatário aceita procuração eletrónica ou exige original em papel.',
          'Após a assinatura, guarde um scan, mas lembre-se: para negócios, muitas vezes é necessário o original.'
        ] }
      ]
    },
    {
      id: 'apostille-foreign-use',
      title: 'Apostila para utilização fora de Portugal 🌍',
      content: [
        { kind: 'paragraph', text: 'Se a procuração for utilizada num país parte da Hague Apostille Convention, é aposta uma apostila no documento notarial português. Em Portugal, a apostila é emitida pela Procuradoria-Geral da República e por serviços habilitados. A apostila confirma a assinatura/qualidade da autoridade, mas não traduz nem “corrige” o conteúdo da procuração.' },
        { kind: 'checklist', items: [
          'Primeiro assine e certifique a procuração em Portugal.',
          'Verifique se o país de destino aceita a Hague Apostille; para alguns países é necessária legalização consular.',
          'Submeta o original ou uma cópia notarialmente admissível para apostila na PGR/serviço competente.',
          'Confirme junto da entidade destinatária se a tradução deve ser feita antes ou depois da apostila.',
          'Para a Rússia, Ucrânia, Cazaquistão e a maioria dos países europeus, a apostila é normalmente o método padrão de legalização, mas os requisitos de tradução variam.',
          'Se o documento for necessário para Portugal, não é necessária apostila.',
          'Se a procuração tiver sido emitida no estrangeiro para Portugal, normalmente deve ser apostilada no país de emissão e traduzida para português, se necessário.'
        ] },
        { kind: 'warning', text: 'A apostila não torna a procuração universal. Um notário, banco ou entidade pública estrangeira pode recusar se o texto não tiver poderes especiais, se os dados do passaporte estiverem incorretos, se não houver tradução ou se a procuração não tiver sido assinada na forma exigida.' }
      ]
    },
    {
      id: 'revoke-and-control',
      title: 'Revogação e controlo de risco',
      content: [
        { kind: 'paragraph', text: 'Regra geral, a procuração é revogável. MAS uma **procuração irrevogável** — emitida também no interesse do representante ou de terceiro — só pode ser revogada com o consentimento da pessoa interessada, salvo justa causa (Código Civil art. 265 nº 3). Isto é crítico para negócios imobiliários: uma «procuração irrevogável com poderes de alienar» transfere na prática o controlo sobre o bem e pode ter consequências fiscais (pode ser aplicado IMT). Nunca assine uma procuração irrevogável para imóveis sem análise jurídica completa. Na prática, a revogação de uma procuração comum é formalizada por escrito junto de notário/advogado, notificando-se o representante e todas as organizações onde a procuração possa ter sido usada: banco, Finanças, Conservatória, agência imobiliária, advogado da outra parte.' },
        { kind: 'checklist', items: [
          'Não entregue o original sem necessidade; para muitas tarefas basta uma certified copy.',
          'Limite o prazo de validade: 3–12 meses para uma tarefa pontual.',
          'Não inclua o direito de receber dinheiro se o representante apenas deve assinar ou entregar documentos.',
          'Para imóveis, indique o imóvel concreto e o limite de preço.',
          'Para AIMA, não prometa que “o representante faz tudo por si”: a biometria e a comparência pessoal são normalmente obrigatórias.',
          'Depois de concluída a tarefa, peça a devolução do original.',
          'Em caso de revogação, envie notificação por carta registada ou email com confirmação, e notifique separadamente as entidades críticas.',
          'Se houver suspeita de abuso, contacte urgentemente um advogado e bloqueie os poderes bancários.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Procuração / reconhecimento em notário privado', amountEURMin: 30, amountEURMax: 100, note: 'Referência de mercado em 2026; o preço depende do cartório, da complexidade do texto, do número de cópias e da forma do ato.' },
    { label: 'Reconhecimento presencial de assinatura', amountEURMin: 15, amountEURMax: 25, note: 'Normalmente mais barato do que a preparação notarial completa do texto; não serve para todos os casos.' },
    { label: 'Apostila em Portugal', amountEUR: 10.20, note: 'Referência por um documento através dos serviços competentes; urgência, envio e intermediários são pagos à parte.' },
    { label: 'Tradução para utilização no estrangeiro', amountEURMin: 20, amountEURMax: 50, note: 'Normalmente por página; em caso de sworn/certified translation, o preço é mais elevado e depende da língua.' }
  ],
  sources: [
    {
      title: 'Justiça.gov.pt: serviço Procuração',
      url: 'https://justica.gov.pt/Servicos/Procuracao',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DRE: Código Civil consolidado — representação voluntária e procuração',
      url: 'https://dre.pt/dre/legislacao-consolidada/-/lc/106480475/202604280000/diplomasModificantes',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Justiça.gov.pt: pedir uma apostila',
      url: 'https://justica.gov.pt/Servicos/Pedir-uma-apostila',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Conferência da Haia: Apostille Convention — Portugal',
      url: 'https://www.hcch.net/en/instruments/conventions/status-table/?cid=41',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 365
}
