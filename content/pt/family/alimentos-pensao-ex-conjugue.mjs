export default {
  editorialVoice: 'hackportugal',
  id: 'alimentos-pensao-ex-conjugue',
  categoryId: 'emergency_rights',
  title: 'Pensão de alimentos: pensão para filhos e ex-cônjuge',
  tldr: 'Em Portugal, a pensão de alimentos é fixada por acordo ou pelo Tribunal de Família e Menores. Para os filhos, o tribunal analisa as despesas da criança e os rendimentos dos pais; na prática, o intervalo é muitas vezes 10–30% do rendimento líquido de quem paga, mas não existe uma tabela legal. Para o ex-cônjuge, os alimentos são excecionais: depois do divórcio, cada pessoa deve sustentar-se a si própria. Se um progenitor não paga, é possível cobrar através do tribunal e pedir o FGADM; em casos típicos, o fundo paga cerca de 124 €/mês por criança, mas o montante depende da decisão judicial e dos limites.',
  tags: ['alimentos', 'familia', 'fgadm', 'divorcio'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-covered',
      title: 'O que conta como alimentos em Portugal',
      content: [
        { kind: 'paragraph', text: 'Pensão de alimentos — pagamentos regulares para sustento. Em processos de família, há dois regimes diferentes: alimentos à criança e alimentos ao ex-cônjuge. Não se somam automaticamente e são avaliados segundo regras diferentes do Código Civil.' },
        { kind: 'checklist', items: [
          'Para a criança: alimentação, habitação, roupa, escola, transporte, saúde, medicamentos, atividades extracurriculares, quota-parte da renda e das despesas de serviços',
          'Para a criança: normalmente são pagos até aos 18 anos; depois dos 18 — se a criança estudar ou estiver em formação profissional, normalmente até aos 25 anos, se for razoável',
          'Para o ex-cônjuge: apenas se não conseguir sustentar-se a si próprio e houver fundamento atendendo aos rendimentos, idade, saúde, duração do casamento e papel na família',
          'O tribunal não aplica uma fórmula oficial de 10%, 20% ou 30%; isto é apenas uma referência prática nos processos',
          'O montante pode ser alterado se as circunstâncias mudarem: perda de emprego, aumento de rendimento, doença, mudança de residência da criança, nova escola, alteração do regime de residência',
          'Os alimentos podem ser em dinheiro, pagamento de despesas concretas ou um modelo misto, mas é melhor fixar um montante mensal e despesas extraordinárias separadas',
          'Uma decisão de tribunal estrangeiro sobre divórcio ou alimentos pode exigir reconhecimento/execução em Portugal, se a cobrança for feita aqui'
        ] }
      ]
    },
    {
      id: 'children',
      title: 'Alimentos para filhos 👶',
      content: [
        { kind: 'paragraph', text: 'Nos processos relativos a crianças, o tribunal fixa as responsabilidades dos pais: com quem vive a criança, o regime de contactos, quem toma decisões importantes e quanto paga o outro progenitor. Isto chama-se regulação das responsabilidades parentais.' },
        { kind: 'paragraph', text: 'O montante depende das necessidades da criança e das possibilidades de ambos os pais. Na prática, com uma criança e rendimentos comuns, os tribunais ficam muitas vezes no intervalo de 10–30% do rendimento líquido de quem paga, mas isto não é uma faixa garantida: com um salário baixo, o montante pode ser inferior; com escola privada e rendimentos elevados, pode ser superior.' },
        { kind: 'checklist', items: [
          'Reúna recibos de vencimento ou declaração de IRS de ambos os pais',
          'Prepare uma lista das despesas da criança: Creche/escola, alimentação, roupa, transporte, medicamentos, seguro, atividades',
          'Junte provas: faturas, recibos, contrato de arrendamento, contas de luz/água/gás, prescrições médicas',
          'Indique o regime de residência: residência alternada, residência com um progenitor ou outro regime de facto',
          'Defina separadamente as despesas extraordinárias: dentista, óculos, cirurgias, viagens escolares, computador portátil',
          'Peça indexação anual, por exemplo pela inflação/IAS, se as partes concordarem ou o tribunal considerar razoável',
          'Fixe a data de pagamento, IBAN, referência do pagamento e consequências do atraso',
          'Se o progenitor receber salário mínimo nacional de 920 € em 2026, o tribunal ainda pode fixar alimentos, mas terá em conta as despesas mínimas de quem paga'
        ] },
        { kind: 'warning', text: 'Não deixe de pagar por iniciativa própria devido a conflito com o outro progenitor ou porque a criança passou a viver consigo mais dias. Primeiro formalize a alteração por acordo ou através do tribunal; caso contrário, surgirá uma dívida.' }
      ]
    },
    {
      id: 'ex-spouse',
      title: 'Alimentos ao ex-cônjuge',
      content: [
        { kind: 'paragraph', text: 'Depois do divórcio, o direito português parte do princípio de que cada ex-cônjuge deve sustentar-se a si próprio. Por isso, a pensão de alimentos ao ex-cônjuge não é uma compensação automática pelo casamento, mas uma medida excecional quando um cônjuge precisa efetivamente e o outro pode pagar.' },
        { kind: 'checklist', items: [
          'O tribunal analisa a duração do casamento e da vida em comum',
          'A idade e a saúde de cada cônjuge',
          'As qualificações, o trabalho e a possibilidade de entrar no mercado de trabalho',
          'Rendimentos, património, renda, créditos e despesas obrigatórias',
          'Quem cuida dos filhos e como isso afeta o trabalho',
          'O nível de vida durante o casamento, mas sem garantia de o manter depois do divórcio',
          'O contributo de cada um para a economia familiar, incluindo cuidados não remunerados da casa e dos filhos',
          'Existência de novo casamento, união de facto ou alteração substancial dos rendimentos'
        ] },
        { kind: 'paragraph', text: 'Os alimentos ao ex-cônjuge podem ser temporários. Podem ser reduzidos, cessados ou aumentados através do tribunal, se as circunstâncias mudarem. Para expatriados, é importante: se um cônjuge saiu de Portugal, isso não extingue a obrigação, mas torna as notificações e a cobrança mais complexas.' },
        { kind: 'warning', text: 'Em Portugal não existe um fundo público geral que pague alimentos ao ex-cônjuge em vez do devedor. O FGADM aplica-se a crianças, não ao ex-cônjuge. Designações como FNGCAS são frequentemente usadas de forma errada; confirme exatamente que fundo ou prestação lhe estão a propor.' }
      ]
    },
    {
      id: 'how-to-formalize',
      title: 'Como formalizar: acordo ou tribunal',
      content: [
        { kind: 'substeps', items: [
          { id: 'agreement', title: '1. Se os pais/cônjuges chegaram a acordo', content: [
            { kind: 'paragraph', text: 'O acordo deve tornar-se executável: no divórcio por mútuo consentimento através da Conservatória, é apresentado juntamente com o acordo de responsabilidades parentais. Se houver filhos menores, o Ministério Público verifica se os interesses da criança estão protegidos.' },
            { kind: 'checklist', items: [
              'Nome completo, NIF e moradas das partes',
              'Dados da criança: nome, data de nascimento, número de utente/NIF se existir',
              'Montante mensal e data de pagamento',
              'IBAN do beneficiário',
              'Quem paga escola, saúde, atividades, férias',
              'Como se dividem as despesas imprevistas: 50/50, proporcionalmente aos rendimentos ou de outra forma',
              'Indexação e data de revisão',
              'O que acontece em caso de mudança de residência da criança ou de um progenitor'
            ] }
          ] },
          { id: 'court', title: '2. Se não for possível chegar a acordo', content: [
            { kind: 'paragraph', text: 'É apresentado um pedido no Tribunal de Família e Menores da área de residência da criança ou do requerido. Para questões urgentes relativas a crianças, o tribunal pode fixar medidas provisórias antes da decisão final.' },
            { kind: 'paragraph', text: 'Nem sempre é obrigatório ter advogado no primeiro passo, mas em caso de conflito, elemento estrangeiro, falta de pagamento ou disputa sobre rendimentos, é melhor avançar com advogado. Se o rendimento for baixo, apresente um pedido de proteção jurídica na Segurança Social.' }
          ] },
          { id: 'foreigners', title: '3. Se você for expatriado', content: [
            { kind: 'paragraph', text: 'O tribunal precisa de documentos numa língua compreensível. Decisões estrangeiras, certidões de casamento/nascimento e comprovativos de rendimento podem exigir apostila, tradução certificada e, por vezes, revisão de sentença estrangeira.' },
            { kind: 'warning', text: 'Não confunda divórcio, responsabilidades parentais e alimentos com estatuto de imigração. A autorização de residência do progenitor, por si só, não resolve a questão dos alimentos; o tribunal analisa as circunstâncias familiares e financeiras.' }
          ] }
        ] }
      ]
    },
    {
      id: 'non-payment-and-fgadm',
      title: 'Se um progenitor não paga: cobrança e FGADM',
      content: [
        { kind: 'paragraph', text: 'Se existir uma decisão judicial ou um acordo homologado, a falta de pagamento transforma-se em dívida. Pode pedir execução judicial: retenção no salário, penhora de conta bancária, reembolso de IRS, bens ou outros rendimentos.' },
        { kind: 'paragraph', text: 'Para crianças existe o Fundo de Garantia de Alimentos Devidos a Menores — FGADM. É um mecanismo público através da Segurança Social, que paga em vez do devedor quando os alimentos foram fixados pelo tribunal, mas o progenitor não paga e a cobrança não dá resultado.' },
        { kind: 'checklist', items: [
          'É necessária uma decisão judicial em vigor ou um acordo homologado sobre alimentos',
          'A criança deve residir em Portugal',
          'O devedor não paga total ou parcialmente',
          'Normalmente, primeiro é registado o incumprimento das responsabilidades parentais',
          'O tribunal avalia o rendimento do agregado com quem vive a criança',
          'A referência de carência está ligada ao IAS; em 2026, IAS = 537,13 €',
          'O montante do FGADM não é automaticamente igual ao montante da dívida; é fixado pelo tribunal dentro dos limites da lei e do orçamento do fundo',
          'Em casos típicos com progenitor ausente, encontra-se um pagamento de cerca de 124 €/mês por criança, mas isto não é uma tarifa universal',
          'Depois, o Estado pode cobrar estes montantes ao devedor',
          'O FGADM não cobre alimentos ao ex-cônjuge'
        ] },
        { kind: 'warning', text: 'Se o devedor pagar em numerário, exija recibo ou transferência para IBAN. Sem rasto dos pagamentos, depois é difícil provar que a dívida existia ou que foi paga.' }
      ]
    },
    {
      id: 'tax-and-practical',
      title: 'Impostos, provas e regras práticas',
      content: [
        { kind: 'paragraph', text: 'Os alimentos podem ter consequências em IRS. Em Portugal, o regime fiscal depende de quem paga, de quem recebe, a quem se destina o montante e se existe decisão judicial ou acordo homologado. Para ex-cônjuge e filhos, as regras podem ser diferentes, por isso, antes da declaração de IRS, consulte o Portal das Finanças ou um contabilista.' },
        { kind: 'checklist', items: [
          'Pague apenas por transferência bancária com a referência “pensão de alimentos mês/ano”',
          'Guarde a decisão judicial, acordo homologado, comprovativos de pagamento e correspondência',
          'Não misture alimentos e presentes: os presentes não substituem o montante obrigatório',
          'Se o rendimento diminuiu, apresente imediatamente um pedido de alteração; a dívida dos meses anteriores normalmente não desaparece por si só',
          'Se as despesas da criança aumentaram, reúna faturas antes de apresentar o pedido de aumento',
          'Para cobrança internacional, apure antecipadamente a morada, empregador e dados bancários do devedor',
          'Em caso de violência doméstica ou ameaças, peça medidas de proteção separadas e não negocie sem advogado',
          'Se tiver baixo rendimento, solicite apoio judiciário/proteção jurídica antes de intentar a ação'
        ] },
        { kind: 'warning', text: 'Um acordo verbal “por agora não pagas” é perigoso para ambas as partes. Em Portugal, a opção segura é um acordo escrito, homologado pela Conservatória/Tribunal, ou uma nova decisão judicial.' }
      ]
    }
  ],
  costs: [
    { label: 'FGADM para a criança', amountEUR: 124, note: 'Pagamento orientativo típico em processos com progenitor ausente; o montante exato é fixado pelo tribunal, não é uma tarifa automática.' },
    { label: 'Advogado em processo de família', amountEURMin: 600, amountEURMax: 2500, note: 'Advogado privado para acordo, alteração de alimentos ou execução; processos internacionais complexos são mais caros.' },
    { label: 'Proteção jurídica', amountEUR: 0, note: 'Se a Segurança Social aprovar apoio judiciário, as taxas de justiça e/ou o advogado podem ser cobertos pelo Estado.' },
    { label: 'IAS 2026', amountEUR: 537.13, note: 'Utilizado como referência social, incluindo na verificação de carência para determinadas prestações e fundos.' }
  ],
  sources: [
    {
      title: 'justica.gov.pt: divórcio, responsabilidades parentais e alimentos',
      url: 'https://justica.gov.pt/Guias/guia-do-divorcio',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'gov.pt: informação sobre serviços de família e Justiça',
      url: 'https://www.gov.pt/servicos',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Segurança Social: Fundo de Garantia de Alimentos Devidos a Menores',
      url: 'https://www.seg-social.pt/fundo-de-garantia-de-alimentos-devidos-a-menores',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código Civil: obrigação de alimentos, responsabilidades parentais e alimentos ao ex-cônjuge',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1966-34509075',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
