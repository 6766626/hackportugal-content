export default {
  editorialVoice: 'hackportugal',
  id: 'empregada-domestica-contrato',
  categoryId: 'work_business',
  title: 'Empregada doméstica: formalização oficial de trabalhador doméstico',
  tldr: 'Empregada doméstica, babysitter, cuidador, cozinheira ou jardineiro numa casa particular é trabalhador do serviço doméstico. Em 2026, faça contrato por escrito, registe na Segurança Social durante os 15 dias antes do início do trabalho e pague contribuições mensalmente. A regra é até 40 h/semana; o mínimo para full-time é SMN 920 € × 14; férias de 22 dias úteis. Desde 2023, ocultar um trabalhador da Segurança Social pode constituir crime: até 3 anos de prisão ou multa até 360 dias.',
  tags: ['doméstica', 'contrato', 'segurança-social', 'trabalho'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'who-is-domestic-worker',
      title: 'Quem deve ser formalizado como trabalhador do serviço doméstico',
      content: [
        { kind: 'paragraph', text: 'Se uma pessoa trabalha regularmente na sua casa particular e recebe pagamento, isso não é «ajuda combinada», mas sim trabalho doméstico. O regime aplica-se a limpeza, lavandaria, cozinha, babysitting, cuidados a idosos, jardinagem, serviços de motorista para a família e trabalho semelhante para o household, e não para uma empresa.' },
        { kind: 'checklist', items: [
          'A empregada de limpeza vem todas as semanas durante 3–6 horas — deve ser formalizada.',
          'A babysitter vai buscar a criança à escola 5 dias por semana — deve ser formalizada.',
          'O cuidador vive em casa com um familiar idoso — deve ser formalizado, com condições especiais de alojamento e descanso.',
          'O jardineiro presta serviços apenas à sua casa e recebe o pagamento diretamente de si — deve ser formalizado.',
          'Uma empresa de limpeza emite factura-recibo com IVA — não é seu trabalhador; os trabalhadores são formalizados pela empresa.',
          'Ajuda pontual uma única vez, sem regularidade — normalmente não é contrato de trabalho, mas é melhor pagar através de recibo/factura, se a pessoa atuar como trabalhador independente.'
        ] },
        { kind: 'warning', text: 'Não confunda com recibos verdes. Se você define o horário, o local, as instruções e paga regularmente, estes são indícios de relação laboral. Chamar a pessoa de «freelancer» não é suficiente.' }
      ]
    },
    {
      id: 'contract',
      title: 'Faça um contrato de trabalho doméstico por escrito',
      content: [
        { kind: 'paragraph', text: 'Para uma família expat, o padrão seguro em 2026 é um contrato escrito antes do primeiro dia de trabalho. É necessário para a Segurança Social, o seguro, a prova de salário, o horário e em caso de litígio com a ACT/tribunal. Se o contrato for a termo, a forma escrita é obrigatória; também para emprego sem termo, não poupe no papel.' },
        { kind: 'checklist', items: [
          'Dados do empregador: nome, NIF, NISS, morada de residência.',
          'Dados do trabalhador: nome, NIF, NISS, documento, morada.',
          'Data de início do trabalho e tipo de contrato: sem termo ou termo certo.',
          'Funções: limpeza, cozinha, babysitting, cuidador, motorista, jardineiro, etc.',
          'Local de trabalho: morada da casa ou várias moradas da família.',
          'Horário: dias da semana, horas, pausas, máximo de 40 h/semana.',
          'Pagamento: mensal ou à hora, gross, prazos de pagamento, Multibanco/transferência.',
          'Subsídio de Natal e subsídio de férias: 13.º e 14.º pagamentos ou parte proporcional.',
          'Férias: 22 dias úteis por ano num ano completo de trabalho.',
          'Alimentação/alojamento, se forem fornecidos, e o que exatamente conta como parte da remuneração.',
          'Prazos de aviso prévio em caso de cessação do contrato e período experimental, se aplicável.',
          'Seguro obrigatório de acidentes de trabalho.'
        ] },
        { kind: 'warning', text: 'Não inclua no contrato retenção do passaporte, proibição de sair de casa, pagamento «apenas em dinheiro sem recibo» ou disponibilidade 24 horas por dia. Para live-in worker, continuam a ser necessários descanso, tempo pessoal e cumprimento das 40 h/semana.' }
      ]
    },
    {
      id: 'social-security-registration',
      title: 'Registe o trabalhador na Segurança Social antes do início',
      content: [
        { kind: 'paragraph', text: 'O empregador pessoa singular regista o trabalhador do serviço doméstico através do gov.pt ou da Segurança Social Direta.\n\nO prazo é no período de 15 dias antes do início do trabalho, ou seja, não depois do primeiro dia. Na prática: contrato assinado → submete imediatamente a admissão → o trabalhador começa.' },
        { kind: 'substeps', items: [
          { id: 'prepare-access', title: '1. Prepare acessos e números', content: [
            { kind: 'checklist', items: [
              'O seu NIF e NISS como empregador.',
              'Acesso à Segurança Social Direta ou Chave Móvel Digital (CMD).',
              'NISS do trabalhador; se não existir, solicite primeiro o NISS.',
              'NIF do trabalhador, se existir.',
              'Data de início do contrato.',
              'Horário e remuneração prevista.',
              'Tipo de base contributiva: remuneração convencional ou remuneração real.'
            ] }
          ] },
          { id: 'submit-admission', title: '2. Submeta a admissão', content: [
            { kind: 'paragraph', text: 'No gov.pt, escolha o serviço «Registar trabalhador do serviço doméstico». O sistema encaminha para a Segurança Social Direta. Indique os dados do trabalhador, a data de início, o regime de trabalho e o pagamento. Guarde o comprovativo em PDF.' }
          ] },
          { id: 'pay-contributions', title: '3. Pague as contribuições todos os meses', content: [
            { kind: 'paragraph', text: 'As contribuições são pagas pelo mês anterior, normalmente entre os dias 10 e 20 do mês seguinte, através de referência Multibanco/Segurança Social Direta. Não transfira todo o valor para o trabalhador: a parte do empregador é sua obrigação.' }
          ] }
        ] },
        { kind: 'warning', text: 'Desde 2023, ocultar um trabalhador da Segurança Social não é apenas um risco administrativo. Se a admissão não for comunicada dentro do prazo e a situação se prolongar, pode aplicar-se o crime de ocultação de trabalhador: até 3 anos de prisão ou multa até 360 dias.' }
      ]
    },
    {
      id: 'money-and-contributions',
      title: 'Quanto pagar: salário, contribuições, subsídios de férias',
      content: [
        { kind: 'paragraph', text: 'A remuneração mínima full-time em 2026 orienta-se pelo SMN de 920 € por mês, normalmente 14 pagamentos por ano: 12 salários + subsídio de férias + subsídio de Natal. Para part-time, calcule proporcionalmente às horas, mas não abaixo da taxa mínima.' },
        { kind: 'paragraph', text: 'Para a Segurança Social, o trabalho doméstico tem dois regimes de base. Remuneração real — contribuições sobre o salário efetivo. Remuneração convencional — base pelo IAS; em 2026 IAS = 537,13 €, base convencional horária cerca de 3,10 €. Esta é a base para contribuições, não uma autorização para pagar ao trabalhador 3,10 €/h.' },
        { kind: 'checklist', items: [
          'Full-time 40 h/semana: não abaixo de 920 € gross/mês × 14 em 2026.',
          'Part-time: salário proporcional às horas, mais subsídios de férias e de Natal proporcionais.',
          'Férias: 22 dias úteis de férias pagas por ano.',
          'O subsídio de férias é normalmente pago antes das férias ou segundo o calendário acordado.',
          'O subsídio de Natal é normalmente pago até 15 de dezembro ou proporcionalmente em caso de cessação do contrato.',
          'Das contribuições do trabalhador, só pode reter a parte dele, não a parte do empregador.',
          'Pague por transferência bancária e guarde o comprovativo; dinheiro sem rasto é má ideia.',
          'Para o IRS do trabalhador, emita confirmações de pagamentos; o empregador pode ter limites nas deduções fiscais, confirme no Portal das Finanças.'
        ] },
        { kind: 'warning', text: 'As taxas de mercado em Lisboa/Cascais/Porto são muitas vezes superiores ao mínimo: limpeza 8–15 €/h gross e mais. Mas a Segurança Social e os direitos laborais são calculados não pelo «mercado», mas pelo salário formalizado e pela lei.' }
      ]
    },
    {
      id: 'insurance-and-compliance',
      title: 'Seguro, horário e documentos de cada mês',
      content: [
        { kind: 'paragraph', text: 'O trabalhador doméstico é seu employee. A família passa a ter obrigações de empregador: seguro de acidentes de trabalho, registo do tempo de trabalho, pagamentos à Segurança Social, férias e cessação correta do contrato.' },
        { kind: 'checklist', items: [
          'Contrate seguro de acidentes de trabalho para serviço doméstico antes do início do trabalho.',
          'Guarde contrato, comprovativo de admissão, apólice, recibos/folhas de cálculo e pagamentos durante pelo menos vários anos.',
          'Mantenha uma folha de horas simples: datas, horas, horas extraordinárias, férias, baixas médicas.',
          'Não exceda 40 h/semana sem compensação legal e acordo.',
          'Garanta descanso semanal; para live-in worker, fixe separadamente os períodos de descanso.',
          'Em caso de doença, o trabalhador obtém baixa médica através do SNS/SNS24, e não «simplesmente não aparece».',
          'Em caso de alteração do salário, das horas ou de cessação do contrato, atualize os dados na Segurança Social.',
          'Em caso de despedimento, pague salário, subsídio de férias, proporção de Natal e compensações, se forem devidas.'
        ] },
        { kind: 'warning', text: 'Se o trabalhador for cidadão estrangeiro sem direito a trabalhar, isso é um risco separado para a família. Verifique a autorização de residência, CPLP/documento temporário, autorização de residência ou outro documento que dê direito a trabalhar em Portugal.' }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Erros típicos de famílias expat',
      content: [
        { kind: 'checklist', items: [
          'Contrataram «por alguns meses» e não registaram porque «ela própria pediu em dinheiro». O risco continua a ser do empregador.',
          'Confundem limpeza através de empresa com empregada doméstica pessoal.',
          'Registam na Segurança Social depois do início do trabalho. O prazo é antes do início, dentro dos 15 dias anteriores.',
          'Pagam 12 salários mensais e esquecem o subsídio de férias e o subsídio de Natal.',
          'Não há seguro de acidentes de trabalho: uma queda nas escadas da sua casa tornar-se-á um problema caro.',
          'A taxa horária verbalmente «inclui tudo», mas o contrato não indica o que acontece com férias e Natal.',
          'Live-in nanny trabalha, na prática, 24/7. Viver na casa não elimina o limite de tempo de trabalho nem o descanso.',
          'Não encerram o contrato na Segurança Social depois do despedimento, e as contribuições continuam a ser calculadas.'
        ] },
        { kind: 'paragraph', text: 'O esquema correto é simples: contrato escrito, admissão antecipada, seguro, salário para a conta, contribuições todos os meses. É mais barato do que coimas, um litígio com a ACT ou um processo criminal por trabalho não formalizado.' }
      ]
    }
  ],
  costs: [
    { label: 'Salário mínimo full-time em 2026', amountEUR: 920, note: 'SMN por mês, normalmente 14 pagamentos por ano: 12 salários + férias + Natal.' },
    { label: 'IAS 2026 para a base convencional da Segurança Social', amountEUR: 537.13, note: 'Remuneração convencional; base horária cerca de 3,10 € para cálculo das contribuições, não é salário mínimo.' },
    { label: 'Contribuições para a Segurança Social com remuneração convencional', amountEURMin: 0, amountEURMax: 0, note: 'Taxa normalmente de 28,3% sobre a base convencional: 18,9% empregador + 9,4% trabalhador.' },
    { label: 'Contribuições para a Segurança Social com remuneração real', amountEURMin: 0, amountEURMax: 0, note: 'Taxa normalmente de 33,3% sobre o salário efetivo: 22,3% empregador + 11% trabalhador.' },
    { label: 'Seguro de acidentes de trabalho doméstico', amountEURMin: 30, amountEURMax: 120, note: 'Referência anual; depende das horas, funções, salário e seguradora.' }
  ],
  sources: [
    {
      title: 'gov.pt: registo de trabalhador do serviço doméstico',
      url: 'https://www.gov.pt/servicos/registar-trabalhador-do-servico-domestico',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Segurança Social: trabalhador do serviço doméstico',
      url: 'https://www.seg-social.pt/trabalhador-do-servico-domestico',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei 235/92: regime jurídico do contrato de serviço doméstico',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1992-34519175',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Lei 13/2023: Agenda do Trabalho Digno e crime de ocultação de trabalhador',
      url: 'https://diariodarepublica.pt/dr/detalhe/lei/13-2023-211340863',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}
