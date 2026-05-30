export default {
  editorialVoice: 'hackportugal',
  id: 'eni-vs-sociedade-unipessoal',
  categoryId: 'work_business',
  title: 'ENI vs Sociedade Unipessoal: escolher a forma de trabalho independente',
  tldr: 'ENI — arranque rápido como trabalhador independente/Empresário em Nome Individual: abrir atividade nas Finanças é gratuito, pode beneficiar da isenção de IVA até 15 000 €/ano ao abrigo do art. 53 CIVA, mas a responsabilidade recai sobre o património pessoal. Sociedade Unipessoal por Quotas — uma empresa separada com NIPC e responsabilidade limitada, mas mais cara: Empresa na Hora 360 €, contabilista normalmente 100–250 €/mês, IRC 19% e IVA desde o primeiro euro. O limite de 12 500 €/ano em 2026 já está desatualizado.',
  tags: ['eni', 'lda', 'iva', 'negócio'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'quick-choice',
      title: 'Escolha rápida: quando ENI, quando Unipessoal',
      content: [
        { kind: 'paragraph', text: 'ENI e o trabalhador independente comum, na prática fiscal, passam pela sua atividade pessoal nas Finanças e por rendimentos da categoria B de IRS. Sociedade Unipessoal por Quotas é uma pessoa coletiva separada: uma empresa com um único sócio, NIPC próprio, conta bancária, contabilidade e responsabilidade empresarial.' },
        { kind: 'checklist', items: [
          'Escolha ENI se estiver a testar o mercado, o volume de negócios for reduzido, os riscos contratuais forem baixos, não tiver trabalhadores nem equipamento de grande valor.',
          'ENI é adequado para freelancers, consultores, designers, especialistas de IT, professores e prestadores de serviços, se os clientes aceitarem recibos verdes.',
          'Escolha Sociedade Unipessoal se existir risco comercial significativo: arrendamento de escritório, armazém, trabalhadores, produto físico, obrigações de garantia, grandes contratos B2B.',
          'Unipessoal muitas vezes parece mais sólida para clientes empresariais: contrato com uma empresa, NIPC, certidão permanente comercial.',
          'Se a proteção do património pessoal for importante, ENI é mais fraco: as dívidas do negócio são as suas dívidas pessoais.',
          'Se o volume de negócios for instável e as despesas forem poucas, ENI é normalmente mais barato e simples.',
          'Se houver muitas despesas e for necessária uma estrutura salário + dividendos, Unipessoal pode ser fiscalmente mais conveniente, mas apenas depois de fazer contas com um contabilista certificado.'
        ] }
      ]
    },
    {
      id: 'eni',
      title: 'ENI / atividade em nome individual: vantagens e riscos',
      content: [
        { kind: 'paragraph', text: 'ENI é aberto através do Portal das Finanças como início de atividade. Normalmente exige uma visita às Finanças ou uma declaração online, se tiver acesso ao portal. Não é criado um NIPC separado: trabalha com o seu NIF.' },
        { kind: 'checklist', items: [
          'Registo nas Finanças — 0 €.',
          'O rendimento entra no IRS como categoria B.',
          'Pode estar no regime simplificado, se o rendimento anual não exceder 200 000 €.',
          'No regime simplificado, a matéria coletável é calculada por coeficientes: por exemplo, para muitos serviços aplica-se 75% do rendimento, e uma parte das despesas é reconhecida automaticamente ou mediante comprovação.',
          'A isenção de IVA ao abrigo do art. 53 CIVA em 2026 é possível com volume de negócios até 15 000 €/ano, se estiverem cumpridas as restantes condições do regime.',
          'O limite de 12 500 €/ano é um valor antigo; em 2026 não deve orientar-se por ele.',
          'As contribuições para a Segurança Social do trabalhador independente são normalmente calculadas trimestralmente; a taxa padrão é 21,4% do rendimento relevante.',
          'Para serviços, o rendimento relevante é normalmente 70% do rendimento; para vendas de bens, 20%.',
          'Existe isenção de Segurança Social nos primeiros 12 meses da primeira atividade, mas deve ser verificada em função da situação concreta.'
        ] },
        { kind: 'warning', text: 'A principal desvantagem do ENI é a responsabilidade ilimitada. Se um cliente exigir indemnização, um fornecedor intentar uma ação ou surgir uma dívida de impostos/contribuições, não responde com o “negócio”, mas com todo o património pessoal: conta bancária, automóvel, quota-parte de imóvel.' }
      ]
    },
    {
      id: 'unipessoal',
      title: 'Sociedade Unipessoal por Quotas: o que muda',
      content: [
        { kind: 'paragraph', text: 'Sociedade Unipessoal por Quotas é uma Lda com um único sócio. A empresa tem NIPC próprio, capital social, gerente, conta bancária, contabilidade e apresenta declarações empresariais. A responsabilidade é normalmente limitada à entrada de capital, mas garantias pessoais, infrações fiscais e mistura de dinheiro pessoal/empresarial podem furar essa proteção.' },
        { kind: 'checklist', items: [
          'A constituição através da Empresa na Hora custa normalmente 360 €.',
          'O capital mínimo é, na prática, flexível: as quotas podem ser de 1 €, mas bancos e clientes encaram com mais seriedade um capital razoável.',
          'É necessário um Contabilista Certificado; o mercado típico para uma pequena empresa ronda 100–250 €/mês, mais se houver payroll, importação, e-commerce ou grande volume de documentos.',
          'A empresa é obrigada a manter contabilidade organizada.',
          'A isenção de IVA ao abrigo do art. 53 CIVA normalmente não se aplica a empresas com contabilidade organizada; na prática, uma Lda cobra IVA desde o primeiro euro, se a atividade não estiver isenta por norma especial.',
          'O lucro é tributado em IRC: a taxa geral em Portugal continental é 19%; para PME pode aplicar-se a taxa reduzida de 15% sobre os primeiros 50 000 € de lucro tributável.',
          'A derrama municipal pode acrescentar até 1,5%, dependendo da Câmara Municipal.',
          'O dinheiro da empresa não é o seu dinheiro pessoal: é retirado como salário de gerente, dividendos, reembolso de despesas ou outros pagamentos formalizados.'
        ] },
        { kind: 'warning', text: 'Unipessoal não significa “impostos automaticamente mais baixos”. Se retirar todo o lucro para si, surgem IRC, possível derrama, Segurança Social sobre o salário de gerente e IRS/28% sobre dividendos. Pode haver poupança, mas tem de ser calculada com base no seu volume de negócios, despesas e taxa familiar de IRS.' }
      ]
    },
    {
      id: 'tax-and-vat',
      title: 'Impostos e IVA: a bifurcação essencial dos 15 000 €',
      content: [
        { kind: 'paragraph', text: 'Para a maioria dos novos freelancers, a principal questão prática é o IVA. Em 2026, o limite atual de isenção para pequeno volume de negócios ao abrigo do art. 53 CIVA é 15 000 €/ano, e não 12 500 €. Se, como ENI, permanecer dentro do limite e cumprir as condições, pode emitir recibos sem IVA com a menção do regime de isenção.' },
        { kind: 'checklist', items: [
          'ENI até 15 000 €/ano: muitas vezes sem IVA ao abrigo do art. 53 CIVA, preços mais simples para clientes particulares.',
          'ENI acima de 15 000 €/ano: normalmente é necessário passar para o regime normal de IVA, entregar declarações periódicas e cobrar IVA.',
          'Se vender a clientes B2B na UE, podem surgir reverse charge, declarações recapitulativas e VIES — isto não elimina a obrigação de abrir corretamente a atividade.',
          'Unipessoal: preveja o regime de IVA e as obrigações declarativas regulares desde o início, se a atividade não estiver isenta por norma especial.',
          'O IRS no ENI é progressivo: em 2026, a primeira taxa de IRS é 11,97%, mas a taxa real depende do rendimento total do agregado familiar, deductions e local de residência fiscal.',
          'O IRC da empresa é calculado sobre o lucro depois das despesas, não sobre o volume de negócios.',
          'Despesas comprovadas elevadas, equipamento, subcontratados e salários tornam mais frequentemente a empresa uma opção mais lógica.'
        ] },
        { kind: 'warning', text: 'Não escolha a forma apenas por causa do limite de IVA. Se ultrapassar quase de imediato os 15 000 €, a vantagem do ENI em matéria de IVA desaparece, mas a responsabilidade pessoal permanece.' }
      ]
    },
    {
      id: 'decision-process',
      title: 'Como decidir sem adivinhar',
      content: [
        { kind: 'paragraph', text: 'Faça uma estimativa para 12 meses. Em Portugal, a forma do negócio influencia não só o imposto, mas também a confiança dos clientes, o acesso a contratos, a responsabilidade e o custo administrativo.' },
        { kind: 'checklist', items: [
          'Estime o volume de negócios: até 15 000 €, 15 000–50 000 €, 50 000–200 000 € ou mais.',
          'Calcule as despesas: software, equipamento, renda, transporte, subcontratados, marketing, seguros.',
          'Avalie o risco de reclamações: acesso a dados de clientes, aconselhamento financeiro, reparações, construção, medicina, logística, e-commerce.',
          'Pergunte aos clientes se precisam de contrato com uma Lda ou se um recibo verde é suficiente.',
          'Calcule o custo do contabilista e do payroll para a Unipessoal.',
          'Verifique se precisa de um seguro de responsabilidade civil profissional, independentemente da forma.',
          'Modele a retirada de dinheiro: ENI = rendimento pessoal; Unipessoal = salário, dividendos ou reembolso.',
          'Antes de passar de ENI para Lda, encerre/altere a atividade, transfira contratos, atualize os dados bancários e as condições de faturação.'
        ] }
      ]
    },
    {
      id: 'practical-rule',
      title: 'Regra prática para o expat',
      content: [
        { kind: 'paragraph', text: 'Se acabou de se mudar, está a obter os primeiros contratos e não tem a certeza do volume de negócios, ENI é muitas vezes o melhor começo: rápido, gratuito, com menos burocracia. Se o negócio já gera rendimento estável, há contratos de risco ou contrata pessoas, Sociedade Unipessoal é normalmente mais segura e profissional.' },
        { kind: 'paragraph', text: 'Percurso típico: começar como ENI, validar a procura e depois, por volume de negócios, riscos ou exigências dos clientes, abrir uma Unipessoal. Mas se a atividade tiver risco elevado desde o início — por exemplo, obras de construção, comércio de bens, serviços médicos/financeiros, armazenamento de dados de terceiros ou contratos B2B com indemnity clauses — é melhor considerar uma empresa logo à partida.' },
        { kind: 'warning', text: 'Não misture dinheiro pessoal e dinheiro do negócio numa Unipessoal. Pagar a renda pessoal, compras de supermercado ou viagens a partir da conta da empresa sem fundamento cria riscos fiscais e societários.' }
      ]
    }
  ],
  costs: [
    { label: 'Abertura de ENI / início de atividade', amountEUR: 0, note: 'Através do Portal das Finanças ou de um balcão das Finanças' },
    { label: 'Constituição de Sociedade Unipessoal através da Empresa na Hora', amountEUR: 360, note: 'Custo padrão de registo de empresa' },
    { label: 'Certificado de admissibilidade de firma', amountEURMin: 75, amountEURMax: 150, note: 'Necessário para denominação individual; pedido normal e urgente' },
    { label: 'Contabilista para Unipessoal', amountEURMin: 100, amountEURMax: 250, note: 'Intervalo mensal típico para pequena empresa; e-commerce/payroll é mais caro' }
  ],
  sources: [
    {
      title: 'RoyalTax: ENI ou empresa unipessoal em Portugal',
      url: 'https://royaltax.pt/tpost/u7g2zkbkb1-individual-entrepreneur-eni-or-one-perso',
      kind: 'company',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ePortugal: Empresa na Hora e registo de empresa',
      url: 'https://www.gov.pt/servicos/criar-uma-empresa-na-hora',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças: início de atividade',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/questoes_frequentes/pages/faqs-00312.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IVA, art. 53: regime especial de isenção',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1984-34500675',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-30',
  verifyIntervalDays: 90
}
