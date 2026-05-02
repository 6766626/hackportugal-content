export default {
  editorialVoice: 'hackportugal',
  id: 'loja-do-cidadao-deep',
  categoryId: 'digital_gov',
  title: 'Loja do Cidadão em detalhe: que serviços estão disponíveis e onde',
  tldr: 'A Loja do Cidadão não é um “balcão único para tudo”, mas sim uma rede de grandes centros onde funcionam, sob o mesmo teto, balcões de várias entidades: Finanças, IRN, Segurança Social, IMT, ACT, CTT, EDP e, por vezes, AIMA. O Espaço Cidadão é uma versão mais ligeira numa Junta de Freguesia, Câmara Municipal ou CTT: ajuda com serviços digitais do ePortugal, CMD, certidões e pedidos, mas não substitui a entidade competente. Em 2026, quase tudo depende da localização concreta e da marcação através do ePortugal/SIGA.',
  tags: ['loja', 'eportugal', 'documentos', 'serviços'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-loja',
      title: 'O que é uma Loja do Cidadão',
      content: [
        { kind: 'paragraph', text: 'A Loja do Cidadão é um centro físico de serviços públicos e de operadores públicos/serviços essenciais. A ideia é simples: em vez de se deslocar às Finanças, ao IRN, à Segurança Social, ao IMT, à ACT, aos CTT ou à EDP, vai a um único edifício, onde cada entidade tem o seu próprio balcão, fila e conjunto de serviços.' },
        { kind: 'paragraph', text: 'O ponto essencial: a Loja do Cidadão não é uma entidade única. Um funcionário das Finanças não tratará de um serviço do IRN, e um balcão dos CTT não resolverá um assunto da AIMA. Verifique não apenas a morada da Loja, mas também se a entidade concreta existe dentro dela.' },
        { kind: 'checklist', items: [
          'Adequada se precisar de resolver várias tarefas práticas numa só visita: NIF/Finanças, CTT, contratos de serviços essenciais, certidões',
          'Muitas vezes é mais conveniente do que um escritório normal da entidade: horário alargado, fila eletrónica, vários balcões próximos',
          'Não garante a presença da AIMA, do IRN ou do IMT em todas as localizações',
          'Muitos serviços só são atendidos mediante marcação prévia',
          'Para alguns serviços é possível tirar senha no local, mas o limite de senhas esgota-se de manhã',
          'Os serviços das entidades são pagos de acordo com as respetivas tarifas normais; a entrada e a senha são gratuitas'
        ] }
      ]
    },
    {
      id: 'loja-vs-espaco',
      title: 'Loja do Cidadão vs Espaço Cidadão',
      content: [
        { kind: 'paragraph', text: 'O Espaço Cidadão é um pequeno ponto de apoio para serviços públicos digitais. Normalmente fica numa Junta de Freguesia, Câmara Municipal, biblioteca, CTT ou outro serviço local. Não é uma Loja do Cidadão completa.' },
        { kind: 'checklist', items: [
          'Loja do Cidadão: várias entidades estão fisicamente no mesmo edifício',
          'Espaço Cidadão: um funcionário ajuda a submeter um pedido online ou a obter um serviço através do ePortugal',
          'A Loja é útil para assuntos mais complexos: IRN, IMT, Segurança Social, Finanças, ACT, operadores de serviços essenciais',
          'O Espaço é útil para ações digitais simples: certidões, confirmações, CMD, apoio na utilização de portais',
          'No Espaço Cidadão normalmente não há inspetor especializado das Finanças, do IRN, do IMT ou da AIMA',
          'Em freguesias pequenas, o Espaço Cidadão pode ser o único ponto de apoio presencial',
          'Se precisar de um registo com efeitos jurídicos, biometria, autorização de residência, carta de condução ou ato de registo civil, confirme previamente se o ponto escolhido trata efetivamente disso'
        ] },
        { kind: 'warning', text: 'Não planeie tratar de AIMA, cartão de residência, troca de carta de condução, registo civil ou IRS complexo através de um Espaço Cidadão sem verificar antes. Na maioria dos casos, o Espaço apenas o encaminhará para um serviço online ou para o balcão competente.' }
      ]
    },
    {
      id: 'services-map',
      title: 'Que serviços procurar e onde',
      content: [
        { kind: 'paragraph', text: 'A composição de uma Loja do Cidadão varia consoante a cidade. Em Lisboa, Porto, Braga, Coimbra, Aveiro, Faro e outros grandes centros, a oferta é mais ampla; em cidades mais pequenas, algumas entidades podem não estar presentes ou funcionar com horário limitado.' },
        { kind: 'substeps', items: [
          { id: 'financas', title: 'Finanças / Autoridade Tributária', content: [
            { kind: 'checklist', items: [
              'Questões de NIF e morada fiscal, se o serviço estiver disponível nessa Loja',
              'Apoio com o Portal das Finanças e palavra-passe',
              'IMI, IUC, IVA, IRS — esclarecimentos e operações básicas',
              'Pagamento voluntário e análise de notificações fiscais',
              'Para IRS complexo, estatuto de residente ou IFICI, é melhor fazer marcação num Serviço de Finanças concreto'
            ] }
          ] },
          { id: 'irn', title: 'IRN / Conservatória', content: [
            { kind: 'checklist', items: [
              'Cartão de Cidadão para cidadãos portugueses',
              'Registo civil: nascimentos, casamentos, óbitos — se existir balcão do IRN',
              'Certificados e certidões',
              'Alguns serviços de nacionalidade e registo de atos',
              'Nem todos os serviços de Conservatória estão disponíveis em todas as Lojas; para nacionalidade, muitas vezes é necessário um balcão específico ou uma Conservatória'
            ] }
          ] },
          { id: 'imt-act-social', title: 'IMT, ACT, Segurança Social', content: [
            { kind: 'checklist', items: [
              'IMT: carta de condução, substituição/troca, questões de transporte — apenas em localizações com balcão do IMT',
              'ACT: queixas laborais, informação laboral, condições de trabalho',
              'Segurança Social: NISS, contribuições, prestações, Segurança Social Direta',
              'Para NISS, os estrangeiros muitas vezes conseguem avançar mais depressa através da Segurança Social Direta ou com marcação num serviço especializado',
              'Se o assunto envolver o empregador, leve contrato de trabalho, recibos de vencimento e correspondência'
            ] }
          ] },
          { id: 'utilities', title: 'CTT, EDP e outros operadores', content: [
            { kind: 'checklist', items: [
              'CTT: correio, notificações, alguns pagamentos e serviços públicos',
              'EDP/energia: contratos, alteração de titular, questões de faturas — se o operador estiver presente',
              'Águas/serviços municipais podem existir em Lojas municipais, mas não em todo o lado',
              'Para contratos de serviços essenciais, leve NIF, contrato de arrendamento ou escritura, leituras dos contadores e IBAN',
              'Os operadores comerciais dentro da Loja funcionam segundo as suas próprias regras e tarifas'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'aima-reality',
      title: 'AIMA na Loja do Cidadão: atenção',
      content: [
        { kind: 'paragraph', text: 'Após a substituição do SEF pela AIMA em outubro de 2023, os serviços de imigração ficaram distribuídos entre a AIMA, o IRN e os canais digitais. Em 2026, a existência de um balcão AIMA numa Loja do Cidadão não significa que se possa aparecer sem marcação e tratar de qualquer autorização de residência.' },
        { kind: 'checklist', items: [
          'Verifique no site da AIMA se existe atendimento presencial na Loja pretendida',
          'Para autorização de residência, quase sempre é necessária marcação prévia ou convocatória da AIMA',
          'Nem todos os balcões da AIMA aceitam pedido inicial, renovação, biometria e substituição de cartão',
          'Para art. 75 e outros procedimentos aplicam-se taxas AIMA próprias; a partir de 01.03.2026, por exemplo, a admission fee é de 133 €, e a autorização de residência art. 75 é de 307,20 €',
          'Leve passaporte, visto D1-D8 ou outro estatuto, NIF, NISS se tiver, comprovativo de morada, contrato de trabalho/recibos verdes/rendimentos, seguro/SNS, fotografias apenas se indicado',
          'Se a marcação foi atribuída para um posto AIMA concreto, não pode substituí-lo por iniciativa própria pela Loja mais próxima'
        ] },
        { kind: 'warning', text: 'Não compre “vagas na AIMA” a intermediários. A marcação oficial é gratuita; pagam-se apenas as taxas do procedimento. Se lhe pedirem uma transferência por MB WAY para obter marcação, é quase sempre um risco de fraude.' }
      ]
    },
    {
      id: 'how-to-plan-visit',
      title: 'Como planear a visita sem perder o dia',
      content: [
        { kind: 'paragraph', text: 'A sequência correta é: primeiro encontrar o serviço, depois a localização, depois o tipo de atendimento. O erro dos expats é ir à Loja do Cidadão mais próxima sem verificar se existe ali o balcão necessário e se atende sem marcação.' },
        { kind: 'checklist', items: [
          'Abra o ePortugal ou a página de atendimento nas Lojas de Cidadão',
          'Procure não apenas a cidade, mas o serviço concreto: NIF, carta de condução, certidão, Segurança Social, AIMA',
          'Verifique o horário: o horário da Loja e o horário do balcão concreto podem ser diferentes',
          'Verifique o formato: senha no local, marcação online, atendimento telefónico ou apenas serviço digital',
          'Se houver marcação disponível através do SIGA/ePortugal, faça-a — reduz o risco de recusa',
          'Chegue 15-20 minutos antes da marcação; para talão sem marcação, vá cedo de manhã',
          'Leve originais e cópias: passaporte/autorização de residência, NIF, comprovativo de morada, contrato, IBAN, documentos do processo',
          'Tenha à mão um número de telemóvel português e email: notificações e códigos chegam muitas vezes por SMS/email',
          'Depois do atendimento, peça comprovativo ou número do processo'
        ] }
      ]
    },
    {
      id: 'when-not-to-use',
      title: 'Quando é melhor não ir à Loja',
      content: [
        { kind: 'paragraph', text: 'A Loja do Cidadão poupa tempo em operações standard, mas nem sempre é o melhor caminho. Para casos complexos, um serviço especializado, um portal online ou um advogado/contabilista pode ser mais rápido e seguro.' },
        { kind: 'checklist', items: [
          'Residência fiscal complexa, IFICI, IRS retroativo — é melhor recorrer a um Serviço de Finanças ou a um contabilista',
          'Nacionalidade, documentos contestados, alteração de nome, transcrição de casamento — é melhor recorrer a uma Conservatória/IRN com a competência necessária',
          'Conflitos judiciais, de arrendamento e laborais — a Loja não substitui um advogado, Julgado de Paz ou ACT',
          'AIMA com estatuto expirado, indeferimento ou procedimento não standard — verifique o canal oficial e prepare o dossier',
          'Se o serviço já estiver totalmente disponível online através do Portal das Finanças, Segurança Social Direta, IMT Online ou ePortugal, a visita pode ser desnecessária',
          'Se precisar de um documento urgente, telefone/verifique o horário: o balcão dentro da Loja pode estar fechado por obras, greve ou restrição local'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Entrada, senha eletrónica ou marcação na Loja do Cidadão', amountEUR: 0, note: 'Gratuito; pagam-se apenas os serviços das entidades concretas.' },
    { label: 'Apoio no Espaço Cidadão', amountEUR: 0, note: 'Normalmente gratuito, mas certificados, certidões e cópias podem ter uma taxa própria.' },
    { label: 'Taxas de imigração da AIMA', amountEURMin: 133, amountEURMax: 307.2, note: 'Exemplos após 01.03.2026: admission fee 133 €, autorização de residência art. 75 — 307,20 €; o valor exato depende do procedimento.' }
  ],
  sources: [
    {
      title: 'Página oficial gov.pt sobre atendimento nas Lojas de Cidadão',
      url: 'https://www2.gov.pt/acesso-aos-servicos-publicos-em-portugal/atendimento-nas-lojas-de-cidadao',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ePortugal: pesquisa de locais de atendimento presencial de serviços públicos',
      url: 'https://eportugal.gov.pt/locais-de-atendimento-de-servicos-publicos',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Página oficial gov.pt sobre atendimento nos Espaços Cidadão',
      url: 'https://www2.gov.pt/acesso-aos-servicos-publicos-em-portugal/atendimento-nos-espacos-cidadao',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'AIMA: contactos e atendimento presencial',
      url: 'https://aima.gov.pt/pt/contactos',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
