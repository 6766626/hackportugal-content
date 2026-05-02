export default {
  editorialVoice: 'hackportugal',
  id: 'porta-65-jovem',
  categoryId: 'housing_rent',
  title: 'Porta 65 Jovem — subsídio ao arrendamento para jovens dos 18 aos 35 anos',
  tldr: 'O Porta 65 Jovem é um subsídio público do IHRU ao arrendamento de habitação para jovens dos 18 aos 35 anos em Portugal. Em 2026, as candidaturas são apresentadas online durante todo o ano através do Portal da Habitação / gov.pt. O apoio é normalmente atribuído por 12 meses, com possibilidade de renovação até 60 meses; o valor depende do rendimento, da composição do agregado familiar, do município e do limite de renda. Há uma majoração de 20% para habitação em área de reabilitação urbana e para agregados monoparentais.',
  tags: ['porta65', 'arrendamento', 'habitação', 'ihru'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que o Porta 65 Jovem paga',
      content: [
        { kind: 'paragraph', text: 'O Porta 65 Jovem não é um desconto concedido pelo senhorio, mas sim um subsídio público mensal para uma parte da renda. O dinheiro é transferido para o IBAN do beneficiário após a aprovação da candidatura.' },
        { kind: 'paragraph', text: 'O programa destina-se a jovens que arrendam habitação para residência permanente em Portugal continental ou nas regiões autónomas. Para expat, é uma forma prática de reduzir o peso da renda, se já tiver NIF, acesso às Finanças e contrato de arrendamento.' },
        { kind: 'checklist', items: ['A candidatura é gratuita e apresentada online', 'São aceites jovens dos 18 aos 35 anos; num casal, um dos candidatos pode ser mais velho — até 37 anos segundo as regras do programa', 'O apoio é atribuído por 12 meses', 'É possível renovar enquanto as condições se mantiverem, normalmente até ao limite total de 60 meses', 'O subsídio depende do rendimento do agregado familiar, do valor da renda, do município e da tipologia da habitação', 'Há majoração de 20% para habitação em área de reabilitação urbana', 'Há majoração de 20% para famílias monoparentais', 'Em 2026, as candidaturas são aceites durante todo o ano, sem o antigo modelo de janelas curtas de candidatura'] }
      ]
    },
    {
      id: 'eligibility',
      title: 'Quem pode apresentar candidatura',
      content: [
        { kind: 'paragraph', text: 'Estrangeiros podem participar se residirem legalmente em Portugal e cumprirem as mesmas condições que os candidatos portugueses. Na prática, são necessários NIF, acesso ao Portal das Finanças ou Chave Móvel Digital, rendimento comprovável e arrendamento de habitação em Portugal.' },
        { kind: 'checklist', items: ['Idade: dos 18 aos 35 anos inclusive; para casal jovem admite-se que um elemento possa ter até 37 anos', 'A habitação é utilizada como residência permanente, e não como Airbnb, quarto turístico ou segunda habitação', 'Existe contrato de arrendamento ou contrato-promessa, elaborado de acordo com as regras e associado ao NIF das partes', 'O senhorio não é pai/mãe, filho, avô/avó, neto ou familiar próximo do candidato', 'O candidato e os membros do agregado familiar não têm outra habitação adequada na mesma zona que possa ser utilizada para residência', 'O agregado familiar não recebe outro apoio público incompatível para o mesmo arrendamento', 'Os rendimentos do agregado familiar devem cumprir os limites do programa; rendimento demasiado baixo, não comprovado ou demasiado alto pode levar a indeferimento', 'A renda deve ser compatível com o rendimento e com os limites definidos para o município e a tipologia da habitação'] },
        { kind: 'warning', text: 'Se acabou de se mudar e ainda não declarou rendimentos em Portugal, a candidatura pode ser mais difícil: o IHRU cruza dados com a Autoridade Tributária e a Segurança Social. Prepare rendimentos estrangeiros, contrato, recibos de vencimento ou documentos de recibos verdes, mas a decisão final depende do que o sistema conseguir verificar.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documentos e acessos antes da candidatura',
      content: [
        { kind: 'paragraph', text: 'A candidatura é feita através do Portal da Habitação / gov.pt. O acesso é normalmente feito com NIF + senha do Portal das Finanças, Chave Móvel Digital ou Cartão de Cidadão. Cada membro maior de idade do agregado familiar deve ter os dados fiscais correctos.' },
        { kind: 'checklist', items: ['NIF de cada candidato e de cada membro maior de idade do agregado familiar', 'Senha do Portal das Finanças ou Chave Móvel Digital', 'Título de residência / cartão de residência / outro documento de permanência legal para non-EU expat', 'Contrato de arrendamento ou contrato-promessa com os dados da habitação, renda mensal e NIF senhorio', 'Confirmação de que o contrato está registado nas Finanças, se já estiver em vigor', 'IBAN de conta portuguesa ou SEPA em nome do candidato', 'Declaração de IRS do último ano disponível, se já tiver apresentado IRS em Portugal', 'Comprovativos de rendimento actual: contrato de trabalho, recibos de vencimento, recibos verdes, declaração de início de atividade', 'Composição do agregado familiar: cônjuge/parceiro, filhos, dependentes, situação monoparental', 'Verificação da morada fiscal: deve corresponder à habitação arrendada, se o contrato já estiver em vigor'] },
        { kind: 'warning', text: 'Não apresente candidatura com um “contrato verbal”. O IHRU trabalha com dados verificáveis: NIF, contrato, renda, rendimentos e agregado familiar devem coincidir entre o Portal da Habitação, as Finanças e a Segurança Social.' }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'Como apresentar a candidatura online',
      content: [
        { kind: 'substeps', items: [
          { id: 'login', title: '1. Entrar no Portal da Habitação', content: [
            { kind: 'paragraph', text: 'Abra o serviço “Candidatar-se ao Porta 65 Jovem” no gov.pt ou a página Porta 65 Jovem no Portal da Habitação. Autentique-se pelo método disponível — na maioria dos casos NIF + senha das Finanças ou CMD.' }
          ]},
          { id: 'household', title: '2. Preencher o agregado familiar', content: [
            { kind: 'paragraph', text: 'Indique todas as pessoas que vão viver no apartamento e que integram a agregação familiar. Um erro na composição familiar altera os limites de rendimento, a tipologia da habitação e o valor do subsídio.' }
          ]},
          { id: 'lease', title: '3. Introduzir os dados do contrato de arrendamento', content: [
            { kind: 'paragraph', text: 'Serão necessários a morada, o artigo matricial ou dados do imóvel, NIF senhorio, valor da renda, data de início do contrato e tipologia. Se a habitação estiver numa área de reabilitação urbana, assinale-o para uma possível majoração de 20%.' }
          ]},
          { id: 'income', title: '4. Verificar rendimentos e IBAN', content: [
            { kind: 'paragraph', text: 'O sistema obtém automaticamente parte da informação das Finanças e da Segurança Social. Se os dados estiverem desactualizados ou incompletos, corrija-os antes da submissão — depois de um indeferimento, é mais simples apresentar uma nova candidatura correcta do que contestar um erro evidente.' }
          ]},
          { id: 'submit', title: '5. Submeter e guardar o comprovativo', content: [
            { kind: 'paragraph', text: 'Após a submissão, guarde o comprovativo da candidatura. O estado é consultado na área pessoal. Se o IHRU pedir elementos adicionais, responda rapidamente: perder o prazo pode levar ao arquivamento.' }
          ]}
        ]}
      ]
    },
    {
      id: 'amount-and-renewal',
      title: 'Quanto é pago e como renovar',
      content: [
        { kind: 'paragraph', text: 'O valor exacto deve ser calculado previamente no simulador do IHRU: a fórmula considera o rendimento mensal corrigido, a renda, o município, o número de pessoas, a tipologia e majorações especiais. Em 2026 não existe uma taxa universal de “50% para todos”: duas pessoas com a mesma renda em Lisboa e em Castelo Branco podem obter resultados diferentes.' },
        { kind: 'checklist', items: ['O subsídio base é uma percentagem da renda admissível, e não necessariamente da totalidade do valor, se a sua renda exceder o limite do programa', 'Habitação em área de reabilitação urbana pode dar +20% ao subsídio', 'Agregado familiar monoparental pode dar +20% ao subsídio', 'O apoio é atribuído por 12 meses', 'A renovação não é automática: é necessário voltar a comprovar as condições e os rendimentos', 'Se mudou de casa, composição familiar, rendimento ou IBAN — actualize os dados antes da nova candidatura', 'Se o rendimento aumentou significativamente, o subsídio pode ser reduzido ou não renovado', 'Se deixou de viver nessa habitação, o apoio deve ser cessado; caso contrário, poderá haver devolução de valores'] },
        { kind: 'warning', text: 'Não planeie o orçamento como se o subsídio já estivesse aprovado. Primeiro pague a renda por conta própria: a decisão do IHRU pode demorar, e o indeferimento é possível devido a limites de rendimento, desconformidade do contrato ou erros nos dados das Finanças.' }
      ]
    },
    {
      id: 'expat-pitfalls',
      title: 'Erros frequentes de expat',
      content: [
        { kind: 'checklist', items: ['A morada fiscal ainda está na casa de conhecidos ou num Airbnb antigo', 'O contrato de arrendamento não foi registado pelo senhorio nas Finanças', 'O contrato indica uma pessoa, mas a candidatura foi apresentada para um casal ou família', 'O rendimento vem do estrangeiro, mas não aparece no IRS nem é explicado por documentos', 'O candidato recebe outro apoio à habitação incompatível', 'A renda é demasiado alta face ao rendimento comprovado', 'O apartamento não corresponde ao agregado familiar quanto à tipologia ou aos limites do município', 'Não há acesso ao Portal das Finanças, e a senha é pedida por correio e não chega imediatamente', 'O IBAN indicado não está em nome do candidato', 'O candidato mudou-se, mas não actualizou os dados no Portal da Habitação'] },
        { kind: 'paragraph', text: 'Ordem prática para quem se muda: primeiro NIF e acesso às Finanças, depois um contrato de arrendamento normal, registo da morada fiscal, depois IRS/documentos de rendimento e só depois Porta 65 Jovem. Assim há menos indeferimentos por incoerências.' }
      ]
    }
  ],
  costs: [
    { label: 'Candidatura ao Porta 65 Jovem', amountEUR: 0, note: 'O serviço público online é gratuito' },
    { label: 'Atestado de residência na Junta de Freguesia, se for necessário para a morada', amountEURMin: 0, amountEURMax: 15, note: 'O preço depende da freguesia; para a própria candidatura, normalmente são mais importantes a morada fiscal e o contrato' },
    { label: 'Renda mensal até receber a decisão', amountEURMin: 1, amountEURMax: 9999, note: 'O subsídio não substitui a obrigação de pagar a renda ao senhorio atempadamente' }
  ],
  sources: [
    {
      title: 'Portal da Habitação — Porta 65 Jovem',
      url: 'https://www.portaldahabitacao.pt/porta-65-jovem1',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'gov.pt — Candidatar-se ao Porta 65 Jovem',
      url: 'https://www.gov.pt/servicos/candidatar-se-ao-porta-65-jovem',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei n.º 308/2007 — regime Porta 65 Jovem',
      url: 'https://dre.pt/dre/detalhe/decreto-lei/308-2007-640975',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
