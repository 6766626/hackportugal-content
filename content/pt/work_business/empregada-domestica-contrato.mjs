export default {
  editorialVoice: 'hackportugal',
  id: 'empregada-domestica-contrato',
  categoryId: 'work_business',
  title: 'Empregada doméstica: contratação formal de trabalhador doméstico',
  tldr: 'Empregada doméstica, ama, cuidador, cozinheira ou jardineiro numa casa privada é trabalhador do serviço doméstico. Em 2026, faça contrato por escrito, registe na Segurança Social nos 15 dias anteriores ao início do trabalho e pague contribuições mensalmente. A regra é até 40 h/semana; o mínimo para full-time é SMN 920 € × 14; férias de 22 dias úteis. Desde 2023, ocultar um trabalhador da Segurança Social pode constituir crime: até 3 anos de prisão ou multa até 360 dias.',
  tags: ['doméstica', 'contrato', 'segurança-social', 'trabalho'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'who-is-domestic-worker',
      title: 'Quem deve ser contratado como trabalhador do serviço doméstico',
      content: [
        { kind: 'paragraph', text: 'Se uma pessoa trabalha regularmente na sua casa privada e recebe pagamento, isso não é “ajuda por acordo”, mas trabalho doméstico. O regime aplica-se a limpeza, lavandaria, cozinha, babysitting, cuidados a idosos, jardinagem, serviços de motorista para a família e trabalho semelhante para o agregado familiar, não para uma empresa.' },
        { kind: 'checklist', items: [
          'A empregada de limpeza vem todas as semanas durante 3–6 horas — deve ser formalizada.',
          'A ama vai buscar a criança à escola 5 dias por semana — deve ser formalizada.',
          'O cuidador vive em casa com um familiar idoso — deve ser formalizado, com condições especiais de alojamento e descanso.',
          'O jardineiro trabalha apenas na sua casa e recebe directamente de si — deve ser formalizado.',
          'Uma empresa de limpeza emite factura-recibo com IVA — não é seu trabalhador; a empresa formaliza os seus trabalhadores.',
          'Ajuda pontual uma única vez, sem regularidade — normalmente não é contrato de trabalho, mas é melhor pagar através de recibo/factura se a pessoa actuar como trabalhador independente.'
        ] },
        { kind: 'warning', text: 'Não confunda com recibos verdes. Se você define o horário, o local, as instruções e paga regularmente, estes são indícios de uma relação laboral. Chamar a pessoa “freelancer” não é suficiente.' }
      ]
    },
    {
      id: 'contract',
      title: 'Faça um contrato de trabalho doméstico por escrito',
      content: [
        { kind: 'paragraph', text: 'Para uma família expat, o padrão seguro em 2026 é um contrato escrito antes do primeiro dia de trabalho. É necessário para a Segurança Social, seguro, prova de salário, horário e em caso de litígio com a ACT/tribunal. Se o contrato for a termo, a forma escrita é obrigatória; para emprego sem termo, também não poupe no papel.' },
        { kind: 'checklist', items: [
          'Dados do empregador: nome, NIF, NISS, morada de residência.',
          'Dados do trabalhador: nome, NIF, NISS, documento, morada.',
          'Data de início do trabalho e tipo de contrato: sem termo ou termo certo.',
          'Funções: limpeza, cozinha, babysitting, cuidador, motorista, jardineiro, etc.',
          'Local de trabalho: morada da casa ou várias moradas da família.',
          'Horário: dias da semana, horas, pausas, máximo de 40 h/semana.',
          'Pagamento: remuneração mensal ou horária gross, prazos de pagamento, Multibanco/transferência.',
          'Subsídio de Natal e subsídio de férias: 13.º e 14.º pagamentos ou parte proporcional.',
          'Férias: 22 dias úteis por ano em caso de ano completo de trabalho.',
          'Alimentação/alojamento, se fornecidos, e o que é exactamente considerado parte da remuneração.',
          'Prazos de aviso em caso de cessação do contrato e período experimental, se aplicável.',
          'Seguro obrigatório de acidentes de trabalho.'
        ] },
        { kind: 'warning', text: 'Não inclua no contrato retenção de passaporte, proibição de sair de casa, pagamento “apenas em dinheiro sem recibo” ou disponibilidade 24 horas por dia. Para live-in worker, continuam a ser necessários descanso, tempo pessoal e cumprimento das 40 h/semana.' }
      ]
    },
    {
      id: 'social-security-registration',
      title: 'Registe o trabalhador na Segurança Social antes do início',
      content: [
        { kind: 'paragraph', text: 'O empregador pessoa singular regista o trabalhador do serviço doméstico através do gov.pt ou da Segurança Social Direta. O prazo é no período de 15 dias antes do início do trabalho, ou seja, não depois do primeiro dia. Na prática: contrato assinado → admissão submetida de imediato → trabalhador começa.' },
        { kind: 'substeps', items: [
          { id: 'prepare-access', title: '1. Prepare acessos e números', content: [
            { kind: 'checklist', items: [
              'O seu NIF e NISS como empregador.',
              'Acesso à Segurança Social Direta ou Chave Móvel Digital (CMD).',
              'NISS do trabalhador; se não tiver, peça primeiro o NISS.',
              'NIF do trabalhador, se existir.',
              'Data de início do contrato.',
              'Horário e remuneração prevista.',
              'Tipo de base contributiva: remuneração convencional ou remuneração real.'
            ] }
          ] },
          { id: 'submit-admission', title: '2. Submeta a admissão', content: [
            { kind: 'paragraph', text: 'No gov.pt, escolha o serviço “Registar trabalhador do serviço doméstico”. O sistema encaminha para a Segurança Social Direta. Indique os dados do trabalhador, a data de início, o regime de trabalho e o pagamento. Guarde o comprovativo em PDF.' }
          ] },
          { id: 'pay-contributions', title: '3. Pague as contribuições todos os meses', content: [
            { kind: 'paragraph', text: 'As contribuições são pagas pelo mês anterior, normalmente entre o dia 10 e o dia 20 do mês seguinte, através de referência Multibanco/Segurança Social Direta. Não transfira o valor total para o trabalhador: a parte do empregador é a sua obrigação.' }
          ] }
        ] },
        { kind: 'warning', text: 'Desde 2023, ocultar um trabalhador da Segurança Social não é apenas um risco administrativo. Se a admissão não for comunicada no prazo e a situação se prolongar, pode aplicar-se o crime de ocultação de trabalhador: até 3 anos de privação de liberdade ou multa até 360 dias.' }
      ]
    },
    {
      id: 'money-and-contributions',
      title: 'Quanto pagar: salário, contribuições, subsídios de férias',
      content: [
        { kind: 'paragraph', text: 'A remuneração mínima full-time em 2026 tem como referência o SMN 920 € por mês, normalmente 14 pagamentos por ano: 12 salários + subsídio de férias + subsídio de Natal. Para part-time, calcule proporcionalmente às horas, mas não abaixo da taxa mínima.' },
        { kind: 'paragraph', text: 'Para a Segurança Social, o trabalho doméstico tem dois regimes de base. Remuneração real — contribuições sobre o salário efectivo. Remuneração convencional — base segundo o IAS; em 2026 IAS = 537,13 €, base convencional horária de cerca de 3,10 €. Esta é a base para contribuições, não uma autorização para pagar ao trabalhador 3,10 €/h.' },
        { kind: 'checklist', items: [
          'Full-time 40 h/semana: não inferior a 920 € gross/mês × 14 em 2026.',
          'Part-time: salário proporcional às horas, mais subsídios de férias e de Natal proporcionais.',
          'Férias: 22 dias úteis de férias pagas por ano.',
          'O subsídio de férias é normalmente pago antes das férias ou segundo o calendário acordado.',
          'O subsídio de Natal é normalmente pago até 15 de Dezembro ou proporcionalmente em caso de cessação do contrato.',
          'Das contribuições do trabalhador, só pode reter a parte dele, não a parte do empregador.',
          'Pague por transferência bancária e guarde o comprovativo; dinheiro sem rasto é uma má ideia.',
          'Para o IRS do trabalhador, emita comprovativos de pagamento; o empregador pode ter limites para deduções fiscais, confirme no Portal das Finanças.'
        ] },
        { kind: 'warning', text: 'As taxas de mercado em Lisboa/Cascais/Porto são muitas vezes superiores ao mínimo: limpeza 8–15 €/h gross e mais. Mas a Segurança Social e os direitos laborais são calculados não pelo “mercado”, mas pelo salário formalizado e pela lei.' }
      ]
    },
    {
      id: 'insurance-and-compliance',
      title: 'Seguro, horário e documentos todos os meses',
      content: [
        { kind: 'paragraph', text: 'O trabalhador doméstico é seu employee. A família passa a ter obrigações de empregador: seguro de acidentes de trabalho, registo do tempo de trabalho, pagamentos à Segurança Social, férias e cessação correcta do contrato.' },
        { kind: 'checklist', items: [
          'Faça um seguro de acidentes de trabalho para serviço doméstico antes do início do trabalho.',
          'Guarde contrato, comprovativo de admissão, apólice, recibos/folhas de cálculo e pagamentos durante pelo menos vários anos.',
          'Mantenha uma folha de ponto simples: datas, horas, horas extraordinárias, férias, baixas médicas.',
          'Não exceda 40 h/semana sem compensação legal e acordo.',
          'Conceda descanso semanal; para live-in worker, fixe separadamente os períodos de descanso.',
          'Em caso de doença, o trabalhador obtém baixa médica através do SNS/SNS24, não “simplesmente não aparece”.',
          'Em caso de alteração do salário, horas ou cessação do contrato, actualize os dados na Segurança Social.',
          'Em caso de despedimento, pague salário, subsídio de férias, proporção do Natal e compensações, se devidas.'
        ] },
        { kind: 'warning', text: 'Se o trabalhador for cidadão estrangeiro sem direito a trabalhar, isto é um risco separado para a família. Verifique a autorização de residência, CPLP/documento temporário, autorização de residência ou outro documento que confira direito ao trabalho em Portugal.' }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Erros típicos de famílias expat',
      content: [
        { kind: 'checklist', items: [
          'Contrataram “por uns meses” e não registaram porque “ela própria pediu em dinheiro”. O risco continua a ser do empregador.',
          'Confundem limpeza através de empresa com empregada doméstica pessoal.',
          'Registam na Segurança Social depois do início do trabalho. O prazo é antes do início, até 15 dias de antecedência.',
          'Pagam 12 salários mensais e esquecem o subsídio de férias e o subsídio de Natal.',
          'Não há seguro de acidentes de trabalho: uma queda nas escadas da sua casa tornar-se-á um problema caro.',
          'A taxa horária verbalmente “inclui tudo”, mas o contrato não indica o que acontece com férias e Natal.',
          'Live-in nanny trabalha, na prática, 24/7. Viver em casa não anula o limite de tempo de trabalho nem o descanso.',
          'Não encerram o contrato na Segurança Social após o despedimento, e as contribuições continuam a ser calculadas.'
        ] },
        { kind: 'paragraph', text: 'O esquema correcto é simples: contrato escrito, admissão antecipada, seguro, salário para a conta, contribuições todos os meses. Isto é mais barato do que multas, um litígio com a ACT ou um caso criminal por trabalho não declarado.' }
      ]
    }
  ],
  costs: [
    { label: 'Salário mínimo full-time em 2026', amountEUR: 920, note: 'SMN por mês, normalmente 14 pagamentos por ano: 12 salários + férias + Natal.' },
    { label: 'IAS 2026 para a base convencional da Segurança Social', amountEUR: 537.13, note: 'Remuneração convencional; base horária de cerca de 3,10 € para cálculo das contribuições, não salário mínimo.' },
    { label: 'Contribuições para a Segurança Social com remuneração convencional', amountEURMin: 0, amountEURMax: 0, note: 'Taxa normalmente de 28,3% da base convencional: 18,9% empregador + 9,4% trabalhador.' },
    { label: 'Contribuições para a Segurança Social com remuneração real', amountEURMin: 0, amountEURMax: 0, note: 'Taxa normalmente de 33,3% do salário efectivo: 22,3% empregador + 11% trabalhador.' },
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
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
