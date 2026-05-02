export default {
  editorialVoice: 'hackportugal',
  id: 'baba-canguro-domestico',
  categoryId: 'daily_life',
  title: 'Empregada doméstica vs babá: como contratar legalmente uma ajudante ou ama',
  tldr: 'Em Portugal, uma pessoa que faz limpezas regularmente, uma ama ou um cuidador é, na maioria dos casos, considerada trabalhador do serviço doméstico, e não “apenas uma ajudante”. Se a pessoa trabalha em sua casa segundo um horário e as suas instruções, é necessário registo na Segurança Social, salário não inferior ao SMN 920 € em 2026, férias de 22 dias úteis, subsídio de Natal e subsídio de férias. Uma canguro pontual para uma noite pode ser uma prestação de serviços, mas uma babá permanente a 20–40 h/semana é quase sempre uma relação laboral.',
  tags: ['babá', 'doméstica', 'segurança-social', 'ama'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'roles',
      title: 'Quem é quem: doméstica, babá, canguro, cuidador',
      content: [
        { kind: 'paragraph', text: 'O nome usado no anúncio não determina o estatuto jurídico. O que importa são os factos: onde a pessoa trabalha, quem define o horário, quem dá instruções, se há pagamento regular e integração na sua rotina doméstica.' },
        { kind: 'checklist', items: [
          'Empregada doméstica — limpeza, roupa, engomar, cozinhar, compras, apoio doméstico numa casa particular.',
          'Babá / ama — cuidado regular de uma criança: ir buscar à escola, alimentação, sono, passeios, acompanhamento a actividades.',
          'Canguro — normalmente babysitting irregular: uma noite, fim de semana, algumas horas sem horário permanente.',
          'Cuidador — cuidado de pessoa idosa ou dependente: higiene, alimentação, acompanhamento, apoio doméstico; actos médicos exigem qualificação própria.',
          'Interna — a ajudante vive na casa do empregador; isso não elimina salário, descanso, férias e Segurança Social.',
          'Externa — vem por horas ou dias; se houver regularidade, também pode ser trabalhador do serviço doméstico.'
        ] },
        { kind: 'warning', text: 'Não é possível “renomear” uma ama permanente como prestadora de serviços se é você quem define o horário, o local de trabalho e as regras. Numa fiscalização, a ACT olha para a realidade da relação, não para o nome do contrato.' }
      ]
    },
    {
      id: 'choose-model',
      title: 'Escolha o modelo: TSD ou prestador independente',
      content: [
        { kind: 'paragraph', text: 'Para uma família há dois modelos funcionais. O primeiro é TSD, trabalhador do serviço doméstico: você é o empregador, a pessoa é o seu trabalhador doméstico. O segundo é um prestador independente com recibos verdes ou uma empresa: você compra um serviço, mas não gere a pessoa como trabalhador por conta de outrem.' },
        { kind: 'substeps', items: [
          {
            id: 'tsd',
            title: 'TSD — trabalhador doméstico',
            content: [
              { kind: 'checklist', items: [
                'Adequado para limpeza regular, ama ou cuidados com horário fixo.',
                'Você define as horas, tarefas, morada e regras de acesso à casa.',
                'É necessário contrato: escrito é obrigatório para contrato a termo, part-time, interna e em situações potencialmente litigiosas; na prática, é melhor fazê-lo sempre por escrito.',
                'É necessário registar o trabalhador na Segurança Social.',
                'São pagos salário, férias, subsídio de Natal e subsídio de férias.',
                'Aplica-se o regime de trabalho doméstico e as regras de segurança e saúde no trabalho, descanso e cessação do contrato.'
              ] }
            ]
          },
          {
            id: 'independent',
            title: 'TSI / recibos verdes — serviço independente',
            content: [
              { kind: 'checklist', items: [
                'Adequado para canguro pontual, limpeza periódica sem subordinação fixa ou serviço através de agência.',
                'O prestador emite o seu próprio recibo verde e é responsável pelo seu estatuto na Segurança Social e nas Finanças.',
                'Pode ter vários clientes, o seu próprio método de trabalho, possibilidade de substituição e liberdade na organização do serviço.',
                'Você não mantém folha de horas, não marca férias e não dá instruções laborais permanentes.',
                'Se o serviço for prestado por uma empresa, o contrato e a responsabilidade pelos trabalhadores ficam normalmente com a empresa, não com a família.'
              ] }
            ]
          }
        ] },
        { kind: 'warning', text: 'Se os “recibos verdes” forem usados apenas para evitar pagar Segurança Social e os 13.º/14.º meses, mas na prática a pessoa trabalhar como empregada, há risco de coimas, liquidações adicionais e litígio laboral.' }
      ]
    },
    {
      id: 'salary',
      title: 'Dinheiro em 2026: mínimo, 13.º/14.º meses, horas',
      content: [
        { kind: 'paragraph', text: 'Em 2026, o salário mínimo nacional é de 920 € brutos por mês para trabalho a tempo completo. Para part-time, o mínimo é calculado proporcionalmente às horas. Os trabalhadores domésticos têm direito a férias pagas e a dois pagamentos adicionais: subsídio de férias e subsídio de Natal.' },
        { kind: 'checklist', items: [
          'Tempo completo: não inferior a 920 € brutos/mês por 40 h/semana.',
          '20 h/semana: referência não inferior a 460 € brutos/mês, se for exactamente metade do tempo completo.',
          'Equivalente horário apenas a partir do salário mensal: 920 € × 12 / 52 / 40 ≈ 5,31 € brutos/h sem contar os 13.º/14.º meses.',
          'Considerando o custo anual de 14 pagamentos: 920 € × 14 / 52 / 40 ≈ 6,19 € brutos/h.',
          'Férias: normalmente 22 dias úteis por ano após um ano completo de trabalho.',
          'Subsídio de férias: normalmente igual ao salário mensal num ano completo.',
          'Subsídio de Natal: normalmente igual ao salário mensal num ano completo, proporcional em ano incompleto.',
          'Alimentação, transporte, horas nocturnas, alojamento de interna — fixe tudo por escrito para evitar discussões posteriores.',
          'Pagar “em dinheiro sem rasto” é perigoso: o trabalhador pode mais tarde provar a relação laboral com mensagens, chaves, horário e testemunhas.'
        ] },
        { kind: 'paragraph', text: 'O mercado em Lisboa, Cascais, Oeiras, Porto e Algarve está muitas vezes acima do mínimo. Para amas com inglês/português, carta de condução e experiência, são normais valores acima dos mínimos; a lei define o patamar inferior, não o preço de mercado.' }
      ]
    },
    {
      id: 'social-security',
      title: 'Segurança Social: o que o empregador tem de fazer',
      content: [
        { kind: 'paragraph', text: 'No caso de TSD, a família torna-se empregador doméstico. O trabalhador deve ser inscrito na Segurança Social, a remuneração deve ser declarada e as contribuições pagas. Isto aplica-se à empregada doméstica, à babá e ao cuidador, se trabalharem regularmente como trabalhadores.' },
        { kind: 'checklist', items: [
          'Verifique os documentos do trabalhador: ID/passaporte, NIF, NISS, direito a trabalhar em Portugal, IBAN bancário.',
          'Faça um contrato de trabalho doméstico por escrito: funções, morada, horário, salário, data de início, período experimental, férias, alimentação/transporte, regras de cessação.',
          'Registe a relação empregador–trabalhador na Segurança Social Direta ou através do atendimento Segurança Social.',
          'Declare o salário e pague as contribuições mensalmente nos prazos da Segurança Social.',
          'Guarde comprovativos de pagamento: transferências bancárias, recibos de vencimento, comprovativos da Segurança Social.',
          'Se a pessoa trabalha para várias famílias, cada família formaliza a sua parte da ocupação, se existir relação laboral.',
          'Em caso de despedimento ou fim do contrato, comunique a cessação à Segurança Social e entregue o acerto final.'
        ] },
        { kind: 'paragraph', text: 'Para serviço doméstico existem diferentes bases e taxas contributivas, incluindo o regime sobre a remuneração efectiva e o regime convencional. Na prática, antes do primeiro pagamento, confirme a simulação na Segurança Social Direta ou com um contabilista: um erro na base pode retirar parte da protecção ao trabalhador e criar uma dívida para o empregador.' },
        { kind: 'warning', text: 'Se o trabalhador for cidadão estrangeiro sem direito a trabalhar, a formalização “por amizade” não protege o empregador. Verifique a autorização de residência, visto de trabalho, Cartão de Cidadão da UE ou outro documento que confira direito ao trabalho.' }
      ]
    },
    {
      id: 'contract-practical',
      title: 'O que incluir no contrato e nas regras da casa',
      content: [
        { kind: 'paragraph', text: 'Um bom contrato para doméstica/babá/cuidador é curto, mas concreto. Reduz o risco de conflitos: quem vai buscar a criança, se pode conduzir o carro da família, o que fazer em caso de doença, quem paga o transporte e como se cancelam horas.' },
        { kind: 'checklist', items: [
          'Função: trabalhador/a do serviço doméstico, babá, cuidador ou funções mistas.',
          'Local de trabalho: morada da casa, escola, actividades, casa de familiar idoso.',
          'Horário: dias da semana, horas de início/fim, pausas, dormidas, fins de semana.',
          'Salário: bruto, data de pagamento, IBAN, 13.º/14.º meses, compensações de transporte.',
          'Tarefas: limpeza, cozinhar, criança, animais domésticos, compras, acompanhamento.',
          'Proibições e segurança: medicamentos à criança, fotografias nas redes sociais, visitas, fumar, chaves, alarme.',
          'Doença e ausência: como avisar, que documentos apresentar, a quem telefonar.',
          'Férias: como são acordadas, quantos dias, quando é pago o subsídio de férias.',
          'Período experimental e cessação do contrato: prazos de aviso prévio e acerto final.',
          'Confidencialidade: documentos, finanças da família, câmaras, informação pessoal das crianças.'
        ] },
        { kind: 'warning', text: 'As câmaras em casa não são permitidas “como se quiser”. Não é permitido filmar o trabalhador de forma oculta em zonas de privacidade, e o controlo permanente de som/vídeo pode violar regras laborais e de privacy. Se houver câmaras, informe por escrito e use-as apenas para uma finalidade legal de segurança.' }
      ]
    },
    {
      id: 'red-flags',
      title: 'Sinais de alerta e contratação segura',
      content: [
        { kind: 'paragraph', text: 'Um trabalhador doméstico tem acesso a crianças, idosos, chaves e informação pessoal. A legalidade é importante, mas não substitui a verificação da pessoa e regras claras.' },
        { kind: 'checklist', items: [
          'Peça referências de famílias anteriores e telefone-lhes de facto.',
          'Verifique o documento de identificação e a correspondência do nome com NIF/NISS/IBAN.',
          'Para trabalho com crianças, peça certificado do registo criminal para fins de contacto com menores, se for relevante para a função.',
          'Faça um dia ou semana de teste pago, mas não uma “formação gratuita”.',
          'Não fique com documentos originais do trabalhador e não peça para guardar o passaporte — é uma prática ilegal.',
          'Não entregue cartões bancários nem PIN; para compras, é melhor MB WAY com limite ou um cartão separado.',
          'Para cuidador, descreva antecipadamente que actos são proibidos sem médico: injecções, alteração de doses de medicamentos, procedimentos médicos.',
          'Se contratar através de agência, verifique quem é o empregador jurídico e o que está incluído no preço: substituições, seguro, Segurança Social, IVA.'
        ] },
        { kind: 'paragraph', text: 'Se o conflito já começou — falta de pagamento, acidente, despedimento, acusação de trabalho ilegal — não resolva por mensagens de voz no WhatsApp. Passe para comunicação escrita, guarde os pagamentos e contacte a ACT ou um advogado/solicitador de direito laboral.' }
      ]
    }
  ],
  costs: [
    { label: 'Salário mensal mínimo full-time em 2026', amountEUR: 920, note: 'SMN por 40 h/semana; part-time proporcionalmente.' },
    { label: 'Base salarial anual com salário mínimo', amountEUR: 12880, note: '920 € × 14 pagamentos: 12 meses + subsídio de férias + subsídio de Natal, sem contribuições do empregador.' },
    { label: 'Referência bruta por hora sem 13.º/14.º meses', amountEUR: 5.31, note: '920 € × 12 / 52 / 40; a lei funciona normalmente através do salário mensal, não como um salário mínimo horário separado.' },
    { label: 'Referência do custo horário anual completo com 13.º/14.º meses', amountEUR: 6.19, note: '920 € × 14 / 52 / 40; sem Segurança Social do empregador nem acréscimos.' }
  ],
  sources: [
    {
      title: 'Segurança Social: trabalhadores do serviço doméstico',
      url: 'https://www.seg-social.pt/trabalhadores-do-servico-domestico',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ACT: informação sobre relações laborais e direitos dos trabalhadores',
      url: 'https://www.act.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DRE: regime jurídico do contrato de trabalho doméstico — Decreto-Lei 235/92',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1992-34592975',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'República Portuguesa: salário mínimo nacional 2026',
      url: 'https://www.portugal.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
