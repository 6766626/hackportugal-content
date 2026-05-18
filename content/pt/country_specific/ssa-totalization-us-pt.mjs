export default {
  editorialVoice: 'hackportugal',
  id: 'ssa-totalization-us-pt',
  categoryId: 'country_specific',
  title: 'Segurança Social dos EUA (SSA) para residentes em Portugal',
  tldr: 'A pensão americana Social Security pode ser recebida vivendo em Portugal: os pagamentos são tratados através da SSA/Federal Benefits Unit na Embaixada dos EUA em Lisboa, normalmente para uma conta em PT. Se não tiver 40 US credits, o acordo US–Portugal de totalization permite contar períodos de contribuições para a Segurança Social; para um pagamento dos EUA são necessários pelo menos 6 US credits. O pedido de totalization é apresentado com o SSA-2490-BK. O Medicare quase não funciona no estrangeiro.',
  tags: ['ssa', 'pensão', 'totalization', 'eua', 'segurança-social'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-totalization-does',
      title: 'O que permite o acordo US–Portugal',
      content: [
        { kind: 'paragraph', text: 'Os EUA e Portugal têm um acordo de segurança social em vigor: ajuda a evitar contribuições duplicadas e permite somar períodos de seguro para pensão, invalidez e prestações para familiares sobrevivos.' },
        { kind: 'paragraph', text: 'Nos EUA, o direito normal a retirement benefits exige 40 credits. Em 2026, 1 credit é atribuído por 1 810 $ de rendimentos, com um máximo de 4 credits por ano. Se não tiver 40 credits, a SSA pode contar os períodos de contribuições portugueses, mas apenas se tiver pelo menos 6 US credits.' },
        { kind: 'warning', text: 'A totalization não cria uma «pensão dupla». Os EUA pagam apenas a parte proporcional com base no seu earnings record americano. Portugal calcula separadamente a sua pensão segundo as regras da Segurança Social.' }
      ]
    },
    {
      id: 'who-should-use',
      title: 'A quem isto se aplica',
      content: [
        { kind: 'checklist', items: [
          'A cidadãos dos EUA e green card holders que vivem em Portugal e querem pedir Social Security retirement, disability ou survivors benefits.',
          'A quem trabalhou nos EUA menos de 10 anos e não acumulou 40 credits.',
          'A quem trabalhou em Portugal com contrato de trabalho ou recibos verdes e pagou contribuições para a Segurança Social.',
          'A cônjuges, ex-cônjuges, viúvas/viúvos e filhos que pretendem requerer family ou survivors benefits.',
          'A americanos independentes em Portugal que precisam de perceber onde pagar social security contributions.',
          'A trabalhadores temporariamente destacados dos EUA para Portugal ou de Portugal para os EUA, para não pagarem contribuições nos dois sistemas.'
        ] },
        { kind: 'paragraph', text: 'Se já tiver 40 US credits, os períodos portugueses normalmente não aumentam a pensão americana. Mas podem ser importantes para a pensão portuguesa: em Portugal, o prazo de garantia contributivo mínimo normal para a old-age pension é de 15 anos de contribuições, e a normal pension age em 2026 é de 66 anos e 7 meses.' }
      ]
    },
    {
      id: 'how-to-claim-from-portugal',
      title: 'Como apresentar o pedido a partir de Portugal',
      content: [
        { kind: 'paragraph', text: 'Os residentes em Portugal normalmente não tratam do processo com um escritório local da SSA nos EUA, mas sim com a Federal Benefits Unit (FBU) na Embaixada dos EUA em Lisboa. A FBU recebe os pedidos, verifica documentos e encaminha o processo para a SSA.' },
        { kind: 'substeps', items: [
          { id: 'prepare-records', title: '1. Reúna os registos da carreira contributiva', content: [
            { kind: 'checklist', items: [
              'SSN e acesso ao my Social Security, se tiver.',
              'Passaporte dos EUA ou outro documento de identificação.',
              'Certidão de nascimento; para prestações familiares — marriage certificate, divorce decree, death certificate.',
              'W-2, 1099, tax returns ou outras provas de rendimentos americanos, se o earnings record estiver incompleto.',
              'NISS e registo português: declaração de carreira contributiva / histórico de remunerações da Segurança Social Direta.',
              'Datas de trabalho nos EUA e em Portugal: empregadores, moradas, períodos, tipo de actividade.',
              'IBAN de uma conta portuguesa para international direct deposit ou dados de uma conta americana.'
            ] }
          ] },
          { id: 'contact-fbu', title: '2. Contacte a FBU Lisbon', content: [
            { kind: 'paragraph', text: 'Escreva à FBU através da página U.S. Embassy Lisbon / Federal Benefits. Não envie originais sem instruções da FBU. Normalmente, a FBU agenda um contacto telefónico/por vídeo ou pede para carregar/enviar cópias.' }
          ] },
          { id: 'file-forms', title: '3. Preencha os formulários da SSA', content: [
            { kind: 'paragraph', text: 'Para um pedido normal de retirement usam-se os formulários da SSA para retirement benefits; se forem necessários credits portugueses, acrescenta-se o SSA-2490-BK — Application for Benefits Under a U.S. International Social Security Agreement.' },
            { kind: 'warning', text: 'O SSA-2490-BK é importante precisamente para a totalization. Se apresentar apenas um pedido normal e não indicar os períodos portugueses, a SSA pode não pedir dados à Portugal Segurança Social.' }
          ] },
          { id: 'wait-verification', title: '4. Aguarde a troca de dados', content: [
            { kind: 'paragraph', text: 'A SSA solicita a confirmação dos períodos de seguro portugueses através das autoridades competentes. Os prazos não são fixos: processos simples avançam mais rapidamente, enquanto processos com vários países, divórcios, military service ou self-employment podem demorar meses.' }
          ] }
        ] }
      ]
    },
    {
      id: 'payments-and-life-in-portugal',
      title: 'Pagamentos, bancos e controlo de residência',
      content: [
        { kind: 'paragraph', text: 'A SSA pode pagar benefits a residentes em Portugal. O dinheiro pode ser recebido por international direct deposit numa conta bancária portuguesa ou numa conta nos EUA. Ao transferir para PT, tenha em conta as comissões bancárias e a taxa de câmbio, se a conta não estiver em dólares.' },
        { kind: 'checklist', items: [
          'Informe a SSA/FBU sobre alterações de morada em Portugal.',
          'Comunique casamento, divórcio, morte do cônjuge, início/fim de trabalho e alteração de nacionalidade, se isso afectar os benefits.',
          'Verifique o correio: a SSA envia o Foreign Enforcement Questionnaire, normalmente os formulários SSA-7162 ou SSA-7161.',
          'Se o questionário não for devolvido a tempo, os pagamentos podem ser suspensos até haver confirmação de vida e morada.',
          'O Medicare quase não cobre cuidados médicos fora dos EUA; para Portugal, precisa do SNS, de seguro privado ou de ambos.',
          'As Part B premiums podem continuar a ser retidas da Social Security, mesmo vivendo em Portugal; cancelar e voltar a aderir pode implicar penalizações.'
        ] },
        { kind: 'warning', text: 'Não ignore cartas da SSA por causa do correio português. Uma opção prática é manter a morada actualizada, guardar digitalizações de todos os envios e verificar regularmente a comunicação com a FBU.' }
      ]
    },
    {
      id: 'contributions-and-double-tax',
      title: 'Contribuições: como evitar pagar nos dois sistemas',
      content: [
        { kind: 'paragraph', text: 'O acordo também regula em que sistema se pagam social security contributions. A lógica geral: o trabalhador paga para o sistema do país onde trabalha, mas numa deslocação temporária pode manter-se o sistema do país de origem.' },
        { kind: 'checklist', items: [
          'Se uma empresa americana o enviar temporariamente para trabalhar em Portugal, normalmente pode pedir um Certificate of Coverage à SSA e continuar a pagar FICA nos EUA, em vez de Segurança Social em PT.',
          'Se uma empresa portuguesa enviar temporariamente um trabalhador para os EUA, o certificado é normalmente pedido à Portugal Segurança Social.',
          'Se for self-employed e viver/trabalhar em Portugal, aplica-se frequentemente a cobertura do país de residência: contribuições para a Segurança Social em vez de US self-employment tax, desde que exista o certificado correcto.',
          'A US tax return pode continuar a ser obrigatória para cidadãos dos EUA, mesmo que as social security contributions sejam pagas em Portugal.',
          'Para recibos verdes em Portugal, acompanhe a Segurança Social Direta: quarterly declarations, base de contribuições e eventuais exemptions não são substituídas pela SSA.'
        ] },
        { kind: 'warning', text: 'O Certificate of Coverage deve ser tratado antes de haver litígio com a autoridade fiscal/segurança social, e não depois de serem geradas dívidas. Para US self-employment tax e Portuguese Segurança Social, é melhor alinhar a posição com um US/Portugal tax adviser.' }
      ]
    },
    {
      id: 'tax-and-planning',
      title: 'Impostos e planeamento',
      content: [
        { kind: 'paragraph', text: 'Social Security benefits e a pensão portuguesa não são apenas uma questão da SSA. Os americanos continuam a ter US tax filing; os residentes fiscais em Portugal têm obrigações de IRS.\n\nO regime fiscal depende da residência, do tipo de pagamento, da convenção para evitar a dupla tributação e da sua estrutura de rendimentos.' },
        { kind: 'checklist', items: [
          'Descarregue o Social Security Statement antes de apresentar o pedido: confirme o earnings record e o benefit estimado.',
          'Compare cenários de claim age: 62, full retirement age e 70 anos; um claim antecipado reduz o pagamento para toda a vida.',
          'Se houver Portuguese pension, peça uma simulação na Segurança Social Direta.',
          'Verifique como os pagamentos serão declarados no IRS Modelo 3 e no US Form 1040.',
          'Guarde todos os SSA notices, SSA-2490-BK, certificados de coverage e confirmações da Segurança Social.',
          'Não planeie cuidados de saúde em Portugal através do Medicare: registe-se no SNS e considere seguro privado.'
        ] },
        { kind: 'paragraph', text: 'Desde 2025, nos EUA, o WEP/GPO para Social Security foi eliminado, pelo que uma pensão pública estrangeira já não deverá reduzir o benefit ao abrigo dessas regras. Mas a SSA pode, ainda assim, pedir informações sobre foreign pension para tratar correctamente o processo.' }
      ]
    }
  ],
  costs: [
    { label: 'Apresentação do pedido SSA/FBU', amountEUR: 0, note: 'A SSA não cobra taxa por um retirement/totalization claim nem pelo formulário SSA-2490-BK.' },
    { label: 'Certificate of Coverage', amountEUR: 0, note: 'Normalmente sem taxa administrativa; podem existir custos com consultor ou traduções certificadas, se forem pedidos pela autoridade concreta.' }
  ],
  sources: [
    {
      title: 'SSA: acordo de segurança social entre os EUA e Portugal',
      url: 'https://www.ssa.gov/international/Agreement_Pamphlets/portugal.html',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'SSA POMS GN 01727.001: Portugal — visão geral do acordo de totalization',
      url: 'https://secure.ssa.gov/apps10/poms.nsf/lnx/0201727001',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'SSA: Federal Benefits Units para requerentes fora dos EUA',
      url: 'https://www.ssa.gov/foreign/foreign.htm',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Segurança Social: pensão de velhice e regras de acesso',
      url: 'https://www.seg-social.pt/pensao-de-velhice',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
