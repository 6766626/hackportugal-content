export default {
  editorialVoice: 'hackportugal',
  id: 'ppr-poupanca-reforma',
  categoryId: 'banking',
  title: 'PPR — poupança para a reforma e dedução de 20% no IRS',
  tldr: 'O PPR (Plano Poupança Reforma) é um produto de reforma português: fundo ou seguro de vida. Para um residente fiscal em Portugal, a contribuição dá uma dedução de 20% no IRS: máximo de 400 € até aos 35 anos, 350 € dos 35 aos 50, 300 € depois dos 50. No resgate legal, o rendimento do PPR é normalmente tributado a 8% em vez dos 28% padrão. Mas se levantar o dinheiro “sem motivo” depois de ter obtido a dedução, terá de devolver o benefício com um agravamento de 10% por cada ano.',
  tags: ['ppr', 'irs', 'reforma', 'impostos'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-ppr',
      title: 'O que é um PPR e a quem pode fazer sentido',
      content: [
        { kind: 'paragraph', text: 'PPR significa Plano Poupança Reforma. Não é a pensão pública da Segurança Social, mas sim um produto privado para poupança de longo prazo: PPR bancário/segurador com garantia de capital ou fundo PPR de investimento com risco de mercado.' },
        { kind: 'paragraph', text: 'A principal razão para usar um PPR em Portugal é fiscal: a contribuição reduz o IRS a pagar e o rendimento, quando resgatado correctamente, é tributado a uma taxa favorável. Para um expatriado, é um dos poucos instrumentos generalizados em que a vantagem fiscal é clara à partida.' },
        { kind: 'checklist', items: [
          'Adequado para residentes fiscais em Portugal que entregam IRS Modelo 3',
          'Especialmente útil para quem tem IRS a pagar: salário, recibos verdes, rendas, rendimento de investimento',
          'Também funciona para estrangeiros: não é necessária cidadania portuguesa',
          'Não faz sentido se não tiver imposto IRS a pagar: a dedução não se transforma em “cashback” acima do imposto',
          'Não é um depósito até 100 000 € coberto pelo Fundo de Garantia de Depósitos, se for um fundo ou seguro unit-linked',
          'Adequado para um horizonte de 5+ anos; para uma “almofada” de 3 meses, é melhor um depósito comum ou uma conta poupança'
        ] }
      ]
    },
    {
      id: 'irs-deduction',
      title: 'Dedução no IRS: 20% da contribuição',
      content: [
        { kind: 'paragraph', text: 'Nos termos do art. 21 do Estatuto dos Benefícios Fiscais, as contribuições para PPR dão uma dedução fiscal de 20% do montante aplicado. O limite depende da idade do subscritor em 1 de Janeiro do ano da contribuição.' },
        { kind: 'checklist', items: [
          'Até aos 35 anos: dedução máxima de 400 € por ano, sendo necessária uma contribuição de 2 000 €',
          'Dos 35 aos 50 anos: dedução máxima de 350 € por ano, sendo necessária uma contribuição de 1 750 €',
          'Mais de 50 anos e até à reforma: dedução máxima de 300 € por ano, sendo necessária uma contribuição de 1 500 €',
          'Se contribuir menos — a dedução é igual a 20% da contribuição efectiva',
          'Se contribuir acima do limite — a parte excedente não dá dedução adicional',
          'A contribuição deve ser feita até 31 de Dezembro do respectivo ano',
          'Na declaração de IRS de 2026, a dedução aparece na campanha de IRS 2027, normalmente de 1 de Abril a 30 de Junho',
          'A dedução reduz o imposto a pagar, mas está limitada pelo sistema geral de deductions à coleta'
        ] },
        { kind: 'paragraph', text: 'Exemplo: tem 34 anos, é residente fiscal e aplica 2 000 € num PPR em 2026. No IRS 2026, pode potencialmente reduzir o imposto em 400 €. Se o seu IRS final a pagar antes da dedução era de 250 €, não conseguirá receber 400 € só por causa do PPR: a dedução não pode criar imposto negativo além das regras aplicáveis.' },
        { kind: 'warning', text: 'Se acabou de se mudar e ainda não se tornou residente fiscal em Portugal, confirme o ano de residência. Pode comprar um PPR com NIF, mas a vantagem fiscal só surge no IRS português.' }
      ]
    },
    {
      id: 'tax-on-withdrawal',
      title: 'Imposto no resgate: 8% em vez de 28%',
      content: [
        { kind: 'paragraph', text: 'O imposto normal sobre rendimento de investimento em Portugal é de 28%. Para os PPR aplica-se um regime favorável: no resgate em situações permitidas por lei, o rendimento é normalmente tributado à taxa efectiva de 8%, se forem cumpridos os prazos de detenção.' },
        { kind: 'checklist', items: [
          'Resgate favorável: reforma por velhice',
          'Atingir os 60 anos',
          'Desemprego de longa duração do próprio subscritor ou de membro do agregado familiar',
          'Incapacidade permanente',
          'Doença grave',
          'Morte do subscritor: resgate por herdeiros/beneficiários',
          'Pagamento de prestações regulares de crédito à habitação para habitação própria e permanente',
          'Nos casos dos 60 anos e da reforma, normalmente é necessário um prazo de pelo menos 5 anos para as respectivas contribuições'
        ] },
        { kind: 'paragraph', text: 'Se resgatar o PPR fora das condições permitidas, a taxa de imposto sobre o rendimento depende do prazo de detenção: até 5 anos — 21,5%, de 5 a 8 anos — 17,2%, depois de 8 anos — 8,6%. Isto ainda pode ser inferior a 28%, mas o problema não está na taxa: está na devolução do benefício fiscal.' },
        { kind: 'warning', text: 'Armadilha principal: se usou a dedução no IRS e levantou o dinheiro fora das condições legais, tem de devolver o benefício recebido mais 10% por cada ano decorrido desde o ano em que obteve a dedução. Por isso, não coloque num PPR dinheiro de que possa vir a precisar com urgência.' }
      ]
    },
    {
      id: 'how-to-choose',
      title: 'Como escolher um PPR sem auto-engano',
      content: [
        { kind: 'paragraph', text: 'A palavra PPR não significa “sem risco”. No mercado existem PPR seguradores conservadores com garantia de capital, PPR mistos e fundos PPR com acções/obrigações. O invólucro fiscal é o mesmo, mas o risco e as comissões são diferentes.' },
        { kind: 'checklist', items: [
          'Verifique o tipo de produto: seguro PPR, fundo PPR ou unit-linked',
          'Veja a comissão de subscrição: comissão de entrada',
          'Veja a comissão de gestão anual: comissão anual, muitas vezes mais importante do que a comissão de entrada',
          'Verifique a comissão de reembolso: comissão de resgate',
          'Confirme se existe garantia de capital; se sim — quem garante',
          'Compare a rentabilidade a 3, 5 e 10 anos, mas não compre apenas com base na rentabilidade passada',
          'Verifique a composição da carteira: acções, obrigações, depósitos, geografia',
          'Confirme a contribuição mínima e a possibilidade de reforços mensais',
          'Verifique as regras de transferência do PPR para outro fornecedor',
          'Guarde o Documento de Informação Fundamental / ficha técnica'
        ] },
        { kind: 'paragraph', text: 'Abordagem prática: se quer apenas a dedução fiscal e baixo risco a 5–8 anos, procure um PPR conservador com comissões baixas. Se o horizonte for de 15–25 anos, um PPR de investimento pode ser mais lógico, mas as perdas temporárias serão reais.' }
      ]
    },
    {
      id: 'how-to-use',
      title: 'Passos a seguir em 2026',
      content: [
        { kind: 'substeps', items: [
          { id: 'check-residency', title: '1. Verifique a residência fiscal', content: [
            { kind: 'paragraph', text: 'O PPR faz sentido para o IRS se você for residente fiscal em Portugal em 2026 ou se tiver a certeza de que vai entregar IRS como residente. O NIF, por si só, não equivale a residência fiscal.' }
          ] },
          { id: 'calculate-limit', title: '2. Calcule o seu limite', content: [
            { kind: 'paragraph', text: 'Determine a idade em 1 de Janeiro de 2026: até aos 35 — contribuição de 2 000 € para dedução de 400 €; 35–50 — 1 750 € para 350 €; mais de 50 — 1 500 € para 300 €.' }
          ] },
          { id: 'choose-provider', title: '3. Escolha um banco, seguradora ou sociedade gestora', content: [
            { kind: 'paragraph', text: 'Os PPR são vendidos, por exemplo, por bancos, seguradoras e sociedades gestoras. Compare não a marca, mas o risco, as comissões, a liquidez e as regras de transferência.' }
          ] },
          { id: 'subscribe', title: '4. Subscreva e aplique o dinheiro até 31 de Dezembro', content: [
            { kind: 'paragraph', text: 'Normalmente são necessários NIF, documento de identificação, morada, IBAN, residência fiscal e questionário de investidor MiFID/questionário de seguro. A contribuição pode ser feita de uma só vez ou através de reforços regulares.' }
          ] },
          { id: 'irs', title: '5. Verifique o IRS', content: [
            { kind: 'paragraph', text: 'O fornecedor normalmente comunica as contribuições à Autoridade Tributária, mas antes de entregar o Modelo 3 verifique o Anexo H e os documentos. Guarde os extractos anuais e os comprovativos de subscrição.' }
          ] }
        ] }
      ]
    },
    {
      id: 'expat-pitfalls',
      title: 'Erros frequentes dos expatriados',
      content: [
        { kind: 'checklist', items: [
          'Comprar um PPR como não residente e esperar uma dedução no IRS — a dedução pode não existir',
          'Aplicar 2 000 € depois dos 35 anos e esperar uma dedução de 400 € — o limite já é de 350 €',
          'Considerar os 20% como rentabilidade garantida — é uma dedução fiscal, não rendimento do produto',
          'Não ter em conta que a dedução está limitada ao valor de IRS a pagar',
          'Levantar o dinheiro ao fim de 2 anos “para obras” e ficar sujeito à devolução do benefício com agravamento de 10% por cada ano',
          'Escolher um produto com uma annual management fee elevada por causa de um pequeno bónus fiscal',
          'Confundir PPR com contribuições públicas para a Segurança Social e a futura pensão',
          'Não verificar como o PPR será tributado no país para onde poderá mudar-se no futuro'
        ] },
        { kind: 'warning', text: 'Se planeia sair de Portugal dentro de 1–2 anos, o PPR pode ser pouco conveniente: a vantagem fiscal está ligada ao IRS português e as regras de resgate são de longo prazo. Antes de comprar, verifique o cenário de emigração e a tributação no novo país.' }
      ]
    }
  ],
  sources: [
    {
      title: 'DRE — Estatuto dos Benefícios Fiscais, art. 21: PPR e benefícios fiscais',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1989-34554075',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças — IRS: formulários e instruções Modelo 3 / Anexo H',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/modelos_formularios/irs/Pages/default.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'PwC Portugal Tax Summaries — créditos fiscais e incentivos individuais',
      url: 'https://taxsummaries.pwc.com/portugal/individual/other-tax-credits-and-incentives',
      kind: 'company',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'CGD Saldo Positivo — benefícios fiscais dos PPR',
      url: 'https://www.cgd.pt/Site/Saldo-Positivo/protecao/Pages/beneficios-fiscais-ppr.aspx',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
