export default {
  editorialVoice: 'hackportugal',
  id: 'pension-totalizacao-eu',
  categoryId: 'work_business',
  title: 'Totalização de períodos de pensão UE/EEE/Suíça: Reg. 883/2004',
  tldr: 'O Reg. 883/2004 permite somar períodos de seguro de Portugal, de outros países da UE, do EEE e da Suíça para cumprir a carreira mínima para a pensão. Em Portugal, a pensão de velhice normal exige 15 anos civis com contribuições; a idade da reforma em 2026 é 66 anos e 7 meses. O pedido é apresentado no país de residência: em Portugal, através da Segurança Social/Centro Nacional de Pensões. O dinheiro não é “transferido”: cada país paga a sua parte pro-rata.',
  tags: ['pensão', 'segurança social', '883/2004', 'cnp'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-totalizacao-means',
      title: 'O que é exatamente somado ao abrigo do Reg. 883/2004',
      content: [
        { kind: 'paragraph', text: 'A totalização não é uma transferência de dinheiro de pensão para Portugal. É a soma jurídica de períodos de seguro, trabalho ou períodos equiparados de países da UE/EEE/Suíça para verificar o direito à pensão em cada país.' },
        { kind: 'paragraph', text: 'Para Portugal, a regra essencial é: para a pensão de velhice normal, regra geral, são necessários pelo menos 15 anos civis com contribuições registadas; um ano civil conta se tiver pelo menos 120 dias de remunerações registadas. Se em Portugal você tiver apenas 6 anos, mas tiver 10 anos na Alemanha ou em França, a Segurança Social deve considerar os períodos estrangeiros para acesso ao direito.' },
        { kind: 'checklist', items: [
          'Cobertura: UE-27, Islândia, Listenstaine, Noruega e Suíça',
          'Base jurídica: Regulamento (CE) 883/2004 e Regulamento (CE) 987/2009',
          'Somam-se períodos de seguro, trabalho, trabalho independente e alguns períodos equiparados',
          'Cada país aplica as suas próprias regras de idade, carreira mínima e cálculo',
          'Cada país paga apenas a sua parte da pensão',
          'A pensão é exportável: pode ser recebida numa conta noutro país da UE/EEE/Suíça',
          'Os períodos do Reino Unido após o Brexit seguem regras próprias, não o regime padrão UE/EEE/CH',
          'Os períodos do Brasil, Ucrânia, EUA e outros países terceiros só contam ao abrigo de acordos bilaterais, se existirem'
        ] }
      ]
    },
    {
      id: 'how-calculation-works',
      title: 'Como se calcula: pensão nacional vs pro-rata',
      content: [
        { kind: 'paragraph', text: 'Se teve contribuições em vários países, cada instituição de pensões faz dois cálculos, quando aplicável: um cálculo nacional autónomo e um cálculo por totalização. Depois é pago o resultado mais favorável segundo as regras do Reg. 883/2004.' },
        { kind: 'substeps', items: [
          { id: 'national-benefit', title: '1. Pensão autónoma', content: [
            { kind: 'paragraph', text: 'O país verifica se tem direito à pensão apenas com base nos seus períodos internos. Por exemplo, se em Portugal já tiver 15 anos, a Segurança Social pode atribuir a pensão de velhice pela carreira portuguesa sem necessidade de “ir buscar” Alemanha, Espanha ou Países Baixos.' }
          ] },
          { id: 'theoretical-amount', title: '2. Pensão teórica', content: [
            { kind: 'paragraph', text: 'Depois, o país calcula que pensão receberia se todos os períodos UE/EEE/CH tivessem sido acumulados nesse país. Isto não é o montante a pagar, mas a base para o pro-rata.' }
          ] },
          { id: 'pro-rata-amount', title: '3. Parte pro-rata', content: [
            { kind: 'paragraph', text: 'A partir do montante teórico, o país paga a quota proporcional aos seus períodos. Exemplo simplificado: 8 anos em Portugal + 12 anos em França = 20 anos no total. Portugal pega no seu montante teórico e paga 8/20; França pega no seu montante e paga 12/20.' }
          ] }
        ] },
        { kind: 'warning', text: 'Não espere uma única “pensão europeia” de uma única entidade. Normalmente recebe várias decisões e vários pagamentos: separadamente da Segurança Social de Portugal e separadamente da DRV/INPS/CNAV/Social Security de outro Estado.' }
      ]
    },
    {
      id: 'where-to-apply-in-portugal',
      title: 'Onde apresentar o pedido se vive em Portugal',
      content: [
        { kind: 'paragraph', text: 'Se for residente em Portugal no momento da reforma, o pedido é apresentado na Segurança Social. O organismo central para as pensões portuguesas é o Centro Nacional de Pensões (CNP). Este contacta as instituições estrangeiras através do intercâmbio europeu de dados EESSI e solicita a confirmação dos períodos.' },
        { kind: 'checklist', items: [
          'Apresentar o pedido de pensão de velhice através da Segurança Social Direta, se o sistema o permitir para o seu caso',
          'Ou marcar/dirigir-se a um balcão da Segurança Social, se existirem períodos estrangeiros e o formulário online não aceitar os dados',
          'Indicar todos os países da UE/EEE/CH onde trabalhou ou pagou contribuições',
          'Indicar os números estrangeiros de segurança social: Sozialversicherungsnummer, numéro de sécurité sociale, codice fiscale/INPS, número ZUS, etc.',
          'Anexar documentos de trabalho: contratos, recibos de vencimento, P60/Certificazioni, certificados de empresa, extratos de fundos de pensões',
          'Comunicar IBAN, estado civil, residência fiscal e morada',
          'É aconselhável apresentar o pedido 3–6 meses antes da data em que pretende iniciar a pensão',
          'Se nunca trabalhou em Portugal, mas vive aqui, a Segurança Social deve encaminhar o pedido para o país da última atividade profissional'
        ] },
        { kind: 'warning', text: 'Não apresente pedidos de pensão separados em todos os países em paralelo sem necessidade: isso cria frequentemente duplicações. O percurso padrão do Reg. 883/2004 é o pedido no país de residência, que coordena o intercâmbio com os restantes países.' }
      ]
    },
    {
      id: 'documents-and-proof',
      title: 'Documentos: o que preparar antecipadamente',
      content: [
        { kind: 'paragraph', text: 'A principal causa de atrasos não é Portugal em si, mas dados incompletos sobre períodos estrangeiros. O CNP tem de solicitar confirmações a cada país, e a instituição estrangeira procura-o pelos seus identificadores e datas.' },
        { kind: 'checklist', items: [
          'Passaporte ou Cartão de Cidadão/autorização de residência',
          'NISS em Portugal',
          'NIF e morada atual em Portugal',
          'IBAN; para uma conta estrangeira — BIC/SWIFT',
          'Lista de países, cidades e empregadores por ano',
          'Números estrangeiros de segurança social e números fiscais',
          'Datas de início e fim do trabalho em cada país',
          'Provas de trabalho independente: registos, declarações fiscais, faturas, comprovativos de contribuições',
          'Documentos sobre serviço militar, licença parental, desemprego, doença, se puderem contar noutro país',
          'Certidão de casamento/divórcio, se o país considerar o estado civil ou direitos de sobrevivência',
          'Traduções de documentos, se a Segurança Social ou a entidade estrangeira as solicitar'
        ] },
        { kind: 'paragraph', text: 'Na UE, o intercâmbio é geralmente feito através de documentos eletrónicos estruturados, historicamente conhecidos como E-forms, por exemplo E205 para o histórico de seguro. Atualmente, o intercâmbio é feito através do EESSI, mas em cartas e consultas as designações antigas ainda aparecem.' }
      ]
    },
    {
      id: 'timing-and-age',
      title: 'Idade, prazos e atrasos em 2026',
      content: [
        { kind: 'paragraph', text: 'Em Portugal, a idade normal de reforma em 2026 é 66 anos e 7 meses. Esta é a idade para a pensão de velhice normal, sem regimes especiais. Reforma antecipada, carreira longa, invalidez, função pública, profissões perigosas e regimes privados de pensões são calculados separadamente.' },
        { kind: 'checklist', items: [
          'Carreira contributiva portuguesa mínima para a pensão normal: 15 anos civis com contribuições',
          'Um ano civil português conta normalmente com pelo menos 120 dias de remunerações registadas',
          'Os períodos estrangeiros ajudam a abrir o direito, mas não aumentam a parte portuguesa para além do pro-rata',
          'Se num determinado país a carreira for inferior a 1 ano, esse país pode não pagar uma pensão separada; o período é normalmente considerado pelos outros países',
          'O prazo real de processamento com períodos estrangeiros é frequentemente 6–12 meses, por vezes mais',
          'Pode haver pagamento retroativo desde a data do direito/pedido, mas é melhor não atrasar',
          'Cada país pode ter a sua própria idade de reforma: uma parte da pensão pode começar mais cedo e outra mais tarde'
        ] },
        { kind: 'warning', text: 'Se atingiu a idade portuguesa de 66 anos e 7 meses, isso não significa direito automático à parte alemã, francesa ou suíça no mesmo dia. Cada país aplica a sua retirement age e as suas próprias condições.' }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Erros típicos de expatriados',
      content: [
        { kind: 'checklist', items: [
          'Pensar que é obrigatório ter 15 anos exatamente em Portugal: para o direito, é possível somar períodos UE/EEE/CH',
          'Pensar que as contribuições estrangeiras são transferidas para a Segurança Social: permanecem no país onde foram pagas',
          'Não declarar períodos curtos de trabalho: mesmo 3–6 meses podem ser importantes para o pro-rata ou para o direito noutro país',
          'Confundir residência fiscal com segurança social: IRS/NIF não provam contribuições para pensão',
          'Esperar a atribuição automática da pensão: quase sempre é necessário apresentar o pedido',
          'Fechar canais bancários e postais antigos antes de receber as decisões: as entidades estrangeiras podem enviar cartas para a morada antiga',
          'Ignorar pedidos da instituição estrangeira: a falta de resposta pode travar toda a cadeia',
          'Considerar pension funds privados e social security estatal como um único sistema: occupational/private pensions exigem frequentemente um pedido separado'
        ] },
        { kind: 'paragraph', text: 'Hack prático: antes de apresentar o pedido, solicite em cada país um extrato do histórico de seguro. Em Portugal, é a carreira contributiva na Segurança Social Direta. Na Alemanha — Versicherungsverlauf; em França — relevé de carrière; em Itália — estratto conto contributivo INPS. É melhor corrigir erros antes do pedido de pensão, e não durante o intercâmbio internacional.' }
      ]
    }
  ],
  costs: [
    { label: 'Apresentação do pedido de pensão de velhice estatal na Segurança Social', amountEUR: 0, note: 'Serviço público; podem existir apenas custos com traduções, certificações e envio de documentos' },
    { label: 'Tradução simples de documento', amountEURMin: 20, amountEURMax: 60, note: 'Preço de mercado por página em Portugal; nem sempre é necessário' },
    { label: 'Consulta jurídica/de pensões', amountEURMin: 80, amountEURMax: 250, note: 'Por hora; útil em períodos contestados, reforma antecipada ou vários países' }
  ],
  sources: [
    {
      title: 'Comissão Europeia: coordenação das pensões e prestações de velhice na UE',
      url: 'https://ec.europa.eu/social/BlobServlet?docId=13770&langId=en',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'EUR-Lex: Regulamento (CE) n.º 883/2004 sobre a coordenação dos sistemas de segurança social',
      url: 'https://eur-lex.europa.eu/legal-content/PT/TXT/?uri=CELEX:32004R0883',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Segurança Social: pensão de velhice e Centro Nacional de Pensões',
      url: 'https://www.seg-social.pt/pensao-de-velhice',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Max Planck Institute: Portugal — Regime Geral da Segurança Social',
      url: 'https://www.mpisoc.mpg.de/en/social-law/research/research-projects/pension-maps/project-website/portugal/general-social-security-scheme/',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
