export default {
  editorialVoice: 'hackportugal',
  id: 'irs-jovem',
  categoryId: 'taxes',
  title: 'IRS Jovem — benefício no imposto sobre o rendimento para jovens até aos 35 anos',
  tldr: 'O IRS Jovem reduz o IRS para residentes em Portugal até aos 35 anos inclusive: isenção de 100% no 1.º ano, 75% do 2.º ao 4.º, 50% do 5.º ao 7.º, 25% do 8.º ao 10.º. O limite do rendimento isento é 55 × IAS, ou seja, 29 542,15 € em 2026. Aplica-se a rendimentos das categorias A e B, se você não for dependente e não utilizar NHR/IFICI/Programa Regressar. Na declaração de IRS 2026, declara-se o rendimento de 2025 no período de 1 de abril a 30 de junho de 2026.',
  tags: ['irs', 'jovem', 'impostos', 'ifici'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que oferece o IRS Jovem em 2026',
      content: [
        { kind: 'paragraph', text: 'O IRS Jovem é uma isenção parcial do imposto sobre o rendimento IRS para jovens residentes fiscais em Portugal. Desde 2025, o modelo foi alargado: deixou de ser necessário comprovar um nível de ensino específico, e o período máximo do benefício é de 10 anos de obtenção de rendimentos.' },
        { kind: 'paragraph', text: 'O benefício aplica-se a rendimentos da categoria A — salário ao abrigo de contrato de trabalho — e da categoria B — trabalho independente, recibos verdes, atividade aberta nas Finanças. Reduz a parte tributável do rendimento, não a própria taxa de IRS.' },
        { kind: 'checklist', items: ['1.º ano de obtenção de rendimentos: isenção de 100%', '2.º, 3.º e 4.º anos: isenção de 75%', '5.º, 6.º e 7.º anos: isenção de 50%', '8.º, 9.º e 10.º anos: isenção de 25%', 'Limite anual de isenção: 55 × IAS', 'IAS 2026: 537,13 €', 'Limite de 2026: 29 542,15 € de rendimento isento', 'A parte restante do rendimento é tributada às taxas normais de IRS', 'Primeira taxa de IRS em 2026: 11,97% para o escalão inferior de rendimento coletável'] },
        { kind: 'warning', text: 'O limite de 29 542,15 € é o limite do montante de rendimento que pode ficar isento de IRS, não o salário máximo para poder beneficiar. Se o rendimento for superior, o benefício aplica-se apenas dentro do limite.' }
      ]
    },
    {
      id: 'eligibility',
      title: 'Quem tem direito',
      content: [
        { kind: 'paragraph', text: 'O IRS Jovem não está disponível apenas para cidadãos portugueses. Um expatriado pode utilizar o benefício se for residente fiscal em Portugal e declarar aqui rendimentos das categorias A ou B.' },
        { kind: 'checklist', items: ['Idade — até aos 35 anos inclusive em 31 de dezembro do ano fiscal em causa', 'Você é residente fiscal em Portugal nesse ano', 'Tem NIF e acesso ao Portal das Finanças', 'Recebe salário ou rendimento de recibos verdes / atividade independente', 'Não consta como dependente na declaração dos pais ou de outro agregado familiar', 'Não aplica o NHR — regime dos residentes não habituais', 'Não aplica o IFICI — Incentivo Fiscal à Investigação Científica e Inovação', 'Não aplica o Programa Regressar', 'Não tem dívidas fiscais que bloqueiem a entrega normal da declaração de IRS'] },
        { kind: 'paragraph', text: 'Para estrangeiros, o critério essencial é a residência fiscal, não o tipo de visto. D1, D2, D3, D4, D7, D8, autorização de residência por trabalho ou residência para atividade independente, por si só, não dão direito ao benefício, mas permitem viver e trabalhar em Portugal; o benefício fiscal é tratado através do IRS.' }
      ]
    },
    {
      id: 'how-years-count',
      title: 'Como são contados os 10 anos do benefício',
      content: [
        { kind: 'paragraph', text: 'O regime foi concebido para os primeiros 10 anos de obtenção de rendimentos do trabalho ou profissionais. Não conta apenas o ano da mudança para Portugal, mas também o histórico de rendimentos, se este já tiver sido declarado ao sistema fiscal português.' },
        { kind: 'checklist', items: ['Se você se tornou residente fiscal pela primeira vez e declarou rendimentos em Portugal pela primeira vez em 2025 — no IRS 2026, normalmente este é o 1.º ano do benefício', 'Se já trabalhou em Portugal anteriormente, as Finanças podem considerar que o ano atual não é o primeiro', 'Anos sem rendimentos das categorias A/B normalmente não devem “consumir” o benefício, mas verifique o pré-preenchimento da declaração', 'Se no mesmo ano houver salário e recibos verdes, o benefício aplica-se aos rendimentos elegíveis dentro do limite global', 'Se completou 36 anos antes de 31 de dezembro do ano fiscal, o benefício já não se aplica a esse ano', 'Se foi dependente na declaração dos pais, nesse ano o IRS Jovem não se aplica a si separadamente'] },
        { kind: 'warning', text: 'Não confunda o ano fiscal com o ano de entrega. De 1 de abril a 30 de junho de 2026 entrega-se a declaração de IRS relativa aos rendimentos de 2025. Os rendimentos de 2026 serão declarados na primavera de 2027.' }
      ]
    },
    {
      id: 'withholding',
      title: 'Como obter o benefício já no salário',
      content: [
        { kind: 'paragraph', text: 'O IRS Jovem pode ser utilizado de duas formas: obter o efeito total na entrega da declaração de IRS ou pedir ao empregador que tenha em conta o benefício na retenção na fonte — a retenção mensal de imposto no salário.' },
        { kind: 'checklist', items: ['Informe o empregador de que pretende aplicar o IRS Jovem na retenção na fonte', 'Entregue uma declaração escrita indicando que cumpre as condições do art. 12-B CIRS', 'Indique o ano previsto do benefício: 1.º, 2.º, 3.º, etc.', 'Verifique o recibo de vencimento: a retenção de IRS deve diminuir', 'Se trabalha para vários empregadores, informe cada um para não ultrapassar o limite', 'Se é trabalhador independente, a retenção na fonte depende do cliente e do tipo de recibo verde; o cálculo final será sempre feito na declaração de IRS', 'Guarde uma cópia da declaração entregue ao empregador e dos recibos de vencimento'] },
        { kind: 'warning', text: 'Se o empregador aplicar um benefício demasiado elevado, as Finanças recalcularão o imposto na declaração anual. O valor em falta terá de ser pago através da nota de liquidação.' }
      ]
    },
    {
      id: 'filing-irs',
      title: 'Como indicar na declaração de IRS',
      content: [
        { kind: 'paragraph', text: 'A declaração de IRS é entregue no Portal das Finanças normalmente de 1 de abril a 30 de junho. Em 2026, você declara os rendimentos de 2025. Antes de submeter, verifique o preenchimento automático: o IRS Jovem pode não estar selecionado automaticamente, especialmente para novos residentes e trabalhadores independentes.' },
        { kind: 'substeps', items: [
          { id: 'login', title: '1. Entrar no Portal das Finanças', content: [
            { kind: 'paragraph', text: 'São necessários o NIF e a senha das Finanças ou a Chave Móvel Digital (CMD). Verifique se a sua morada nas Finanças é portuguesa e se o estatuto de residente está correto.' }
          ] },
          { id: 'check-income', title: '2. Verificar o Anexo A ou o Anexo B', content: [
            { kind: 'checklist', items: ['Anexo A — salário', 'Anexo B — atividade independente / recibos verdes', 'Verifique o NIF do empregador ou dos clientes', 'Verifique o IRS retido', 'Verifique as contribuições para Segurança Social', 'Verifique que não está assinalado como dependente'] }
          ] },
          { id: 'select-benefit', title: '3. Assinalar o IRS Jovem', content: [
            { kind: 'paragraph', text: 'Na secção correspondente da declaração, selecione a aplicação do IRS Jovem e indique o ano do benefício. A interface das Finanças muda, por isso oriente-se pelos campos com “IRS Jovem”, “artigo 12.º-B do CIRS” e o ano de aplicação.' }
          ] },
          { id: 'simulate', title: '4. Fazer a simulação', content: [
            { kind: 'paragraph', text: 'Antes de submeter, clique em Simular. Compare a opção com IRS Jovem e sem IRS Jovem. Se a diferença for zero, verifique a idade, o estatuto de dependente, o ano do benefício e os regimes incompatíveis.' }
          ] }
        ] }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Erros frequentes dos expatriados',
      content: [
        { kind: 'checklist', items: ['Abriram atividade e pensam que o IRS Jovem se aplica automaticamente — não, a declaração continua a ter de ser verificada', 'Utilizam o IFICI e tentam ao mesmo tempo ativar o IRS Jovem — os regimes são incompatíveis', 'Mudaram-se com D8 e consideram que o rendimento estrangeiro entra automaticamente no IRS Jovem — o benefício diz respeito às categorias A/B, mas a fonte e a estrutura do rendimento devem ser corretamente declaradas', 'Não alteraram a morada fiscal para Portugal e continuam formalmente como não residentes nas Finanças', 'O empregador não aplica o benefício nas retenções, embora a declaração anual possa, ainda assim, devolver o imposto pago em excesso', 'Contam os 35 anos como “até ao dia de aniversário”; no IRS, o que importa é a idade em 31 de dezembro do ano fiscal', 'Confundem bruto, rendimento coletável e o montante da isenção: o limite de 29 542,15 € refere-se à parte isenta do rendimento elegível'] },
        { kind: 'warning', text: 'Se a sua situação for complexa — empregador estrangeiro, stock options, split payroll, rendimentos de cripto, trabalho para uma empresa fora de Portugal — não confie apenas na declaração automática. Um erro na categoria do rendimento pode custar mais do que o próprio benefício.' }
      ]
    }
  ],
  costs: [
    { label: 'Entrega da declaração de IRS através do Portal das Finanças', amountEUR: 0, note: 'A entrega por conta própria é gratuita.' },
    { label: 'Consulta de contabilista sobre IRS Jovem', amountEURMin: 50, amountEURMax: 150, note: 'Referência para uma declaração simples com Anexo A/B; rendimentos estrangeiros complexos são mais caros.' },
    { label: 'Rendimento máximo isento ao abrigo do IRS Jovem em 2026', amountEUR: 29542.15, note: '55 × IAS 2026; a poupança efetiva depende da taxa de IRS e do rendimento total.' }
  ],
  sources: [
    { title: 'Gov.pt: novo modelo de IRS Jovem em 2025', url: 'https://www2.gov.pt/en/noticias/novo-modelo-de-irs-jovem-em-2025', kind: 'official', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'Portal das Finanças: IRS Jovem', url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/IRS/Pages/irs-jovem.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei n.º 45-A/2024 — Orçamento do Estado para 2025, alterações ao IRS Jovem', url: 'https://diariodarepublica.pt/dr/detalhe/lei/45-a-2024-902610097', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código do IRS — art. 12.º-B, regime IRS Jovem', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1988-34500675', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
