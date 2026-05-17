export default {
  editorialVoice: 'hackportugal',
  id: 'testamento-publico',
  categoryId: 'documents_fiscal',
  title: 'Testamento através de notário e Registo Central de Testamentos',
  tldr: 'Em Portugal, o testamento público é feito perante notário: o documento é elaborado e conservado no sistema notarial, e a informação sobre a sua existência é enviada para o Registo Central de Testamentos junto do IRN. O valor de referência da taxa para um testamento é 159 €; nos notários privados podem existir custos adicionais. Para expatriados, isto é especialmente importante quando há bens em vários países: ao abrigo do Regulamento (UE) 650/2012, pode escolher expressamente a lei do país da sua nacionalidade; caso contrário, aplica-se normalmente a lei da última residência habitual.',
  tags: ['testamento', 'herança', 'notário', 'irn'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'when-needed',
      title: 'Quando um expatriado precisa de um testamento português',
      content: [
        { kind: 'paragraph', text: 'Testamento público é um testamento que o notário elabora em forma notarial. Não “transfere bens agora”; só começa a produzir efeitos após a morte. Enquanto a pessoa estiver viva, pode revogá-lo ou substituí-lo.' },
        { kind: 'checklist', items: [
          'Tem um apartamento, uma casa, contas bancárias, quotas numa empresa ou um automóvel em Portugal.',
          'Vive em Portugal, mas os bens e os herdeiros encontram-se em países diferentes.',
          'Quer nomear herdeiros específicos, legatários ou um executor do testamento — cabeça de casal / testamenteiro.',
          'Quer escolher expressamente a lei do país da sua nacionalidade ao abrigo do Regulamento (UE) 650/2012, em vez de depender da lei da última residência habitual.',
          'Tem filhos de casamentos diferentes, uma pessoa parceira sem casamento, união de facto, blended family ou herdeiros em conflito.',
          'Quer deixar bens concretos a pessoas específicas: apartamento, quota, conta, coleção, acessos a criptoativos, bens de valor familiar.',
          'Já existe um testamento antigo noutro país, mas não cobre os bens portugueses ou entra em conflito com a mudança de residência.'
        ] },
        { kind: 'warning', text: 'Um testamento português não revoga automaticamente testamentos noutro país, se isso não estiver escrito de forma expressa. Uma formulação deficiente como “revogo todos os testamentos anteriores” pode, por acidente, destruir o planeamento relativo a bens fora de Portugal. Para uma herança transfronteiriça, é melhor coordenar os textos com um advogado em ambas as jurisdições.' }
      ]
    },
    {
      id: 'law-choice',
      title: 'Lei sucessória: Portugal ou país da nacionalidade',
      content: [
        { kind: 'paragraph', text: 'Para heranças na UE aplica-se o Regulamento (UE) 650/2012. A regra de base é: aplica-se a lei do país onde a pessoa tinha residência habitual no momento da morte. Se vivia efetivamente em Portugal, a lei portuguesa pode tornar-se a principal, mesmo para parte dos bens no estrangeiro.' },
        { kind: 'paragraph', text: 'No testamento, é possível fazer professio juris — escolher a lei do país da sua nacionalidade. Por exemplo, um cidadão da Federação Russa, da Ucrânia, do Reino Unido ou dos EUA que viva em Portugal pode indicar que se aplica à sucessão a lei da sua nacionalidade. Se tiver várias nacionalidades, normalmente pode escolher a lei de uma delas.' },
        { kind: 'checklist', items: [
          'Verifique se o seu país tem regras especiais sobre imóveis no estrangeiro.',
          'Verifique se o seu país reconhece a escolha de lei ao abrigo do Regulamento (UE) 650/2012 ou se tem as suas próprias normas de conflitos de leis.',
          'Se quiser escolher a lei da nacionalidade, a formulação deve ser expressa, e não “por defeito”.',
          'Se nada for escolhido, após vários anos de vida em Portugal a herança será frequentemente analisada através do direito sucessório português.',
          'A lei portuguesa protege os herdeiros legitimários: cônjuge, descendentes e ascendentes têm uma quota obrigatória.',
          'Por testamento, não é possível privar livremente os herdeiros legitimários da sua legítima, se for aplicável a lei portuguesa.',
          'Para efeitos fiscais, a escolha da lei sucessória não equivale à escolha do país fiscal: o Imposto do Selo e os impostos estrangeiros são verificados separadamente.'
        ] },
        { kind: 'warning', text: 'Portugal não cobra um “imposto clássico sobre heranças” entre cônjuges, filhos, netos, pais e avós, mas em algumas transmissões aplica-se Imposto do Selo de 10%. No caso de imóveis, há também custos de registo. O testamento resolve a questão dos beneficiários, mas não elimina a análise fiscal.' }
      ]
    },
    {
      id: 'prepare-documents',
      title: 'O que preparar antes da visita ao notário',
      content: [
        { kind: 'paragraph', text: 'Pode marcar com um notário privado ou com serviços notariais disponíveis através de justiça.gov.pt. Para patrimónios complexos, é melhor preparar primeiro uma minuta com um advogado/solicitador e depois dirigir-se ao notário para a formalização notarial.' },
        { kind: 'checklist', items: [
          'Passaporte ou Cartão de Cidadão / cartão de residência.',
          'NIF — necessário para uma identificação rigorosa nos sistemas portugueses.',
          'Dados dos herdeiros: nome completo, data de nascimento, morada, NIF se existir, grau de parentesco.',
          'Lista dos bens portugueses: imóveis com caderneta predial e certidão permanente, contas bancárias, quotas, automóveis.',
          'Lista dos bens no estrangeiro — pelo menos por país e por tipo de bem.',
          'Informação sobre o casamento: regime de bens, data do casamento, convenção antenupcial, divórcios, filhos de relações diferentes.',
          'Decisão: se pretende escolher a lei da nacionalidade ao abrigo do Regulamento (UE) 650/2012.',
          'Tradutor, se não compreender português o suficiente para um texto jurídico.',
          'Contactos da pessoa que poderá encontrar os documentos após a morte: familiar, advogado, testamenteiro.'
        ] },
        { kind: 'warning', text: 'O notário deve confirmar que o testador compreende o sentido do documento e atua de livre vontade. Se houver dúvidas por causa da língua, idade, doença ou pressão familiar, o notário pode pedir um tradutor, confirmação médica da capacidade para compreender o ato ou recusar a prática do ato.' }
      ]
    },
    {
      id: 'notary-process',
      title: 'Como decorre a formalização do testamento público',
      content: [
        { kind: 'paragraph', text: 'Na prática, o processo é assim: a pessoa explica a sua vontade, o notário prepara o texto, lê-o em voz alta, ajusta as formulações e depois o documento é assinado. O testamento público fica no arquivo notarial; normalmente, o testador recebe uma confirmação ou uma certidão a pedido.' },
        { kind: 'checklist', items: [
          'Marque com o notário e confirme o custo, a língua, a necessidade de tradutor e de testemunhas.',
          'Entregue os documentos e a minuta de distribuição dos bens.',
          'Peça para incluir separadamente uma cláusula de escolha de lei, se isso for necessário para uma herança transfronteiriça.',
          'Verifique que nomes, datas de nascimento, NIF, moradas e descrições dos bens estão escritos sem erros.',
          'Certifique-se de que a formulação não revoga por acidente testamentos estrangeiros, se tiver vários.',
          'Assine o documento apenas depois de o ler integralmente e de o compreender.',
          'Guarde os contactos do notário e a data do testamento num local seguro.',
          'Não guarde a única cópia num cofre ao qual os herdeiros não consigam aceder após a morte.'
        ] },
        { kind: 'paragraph', text: 'O valor de referência do serviço “Testamento” em justiça.gov.pt é 159 €. Nos notários privados, podem existir valores adicionais por consulta, urgência, tradução, deslocação, certidões e preparação de documentos complementares.' }
      ]
    },
    {
      id: 'rct',
      title: 'Registo Central de Testamentos: que informação entra',
      content: [
        { kind: 'paragraph', text: 'O Registo Central de Testamentos, RCT, é mantido pelo IRN. É o registo central de informações sobre testamentos e respetivas revogações. Serve para que, após a morte, herdeiros e notários possam saber se existe testamento, onde foi feito e qual é o último.' },
        { kind: 'checklist', items: [
          'No RCT são registadas informações sobre o testamento, e não o texto integral para consulta pública.',
          'O registo ajuda a encontrar o último testamento em vigor, mesmo que a família não saiba junto de que notário está guardado.',
          'Enquanto o testador estiver vivo, a informação é protegida: em regra, o acesso pertence ao próprio testador ou ao seu representante.',
          'Após a morte, os interessados pedem uma certidão sobre a existência de testamento, normalmente com prova do óbito.',
          'Se tiver havido vários testamentos, é juridicamente relevante a última vontade válida, se não tiver defeitos.',
          'A revogação ou um novo testamento também devem ficar refletidos no sistema.',
          'O RCT não substitui o registo predial, os procedimentos bancários nem o processo de habilitação de herdeiros após a morte.'
        ] },
        { kind: 'warning', text: 'Não conte com a hipótese de os familiares “encontrarem de alguma forma” o testamento. Informe uma pessoa de confiança: país, nome do notário, data do ato, onde está a cópia, contactos do advogado. Não precisa de revelar o conteúdo.' }
      ]
    },
    {
      id: 'change-revoke',
      title: 'Como alterar ou revogar o testamento',
      content: [
        { kind: 'paragraph', text: 'O testamento em Portugal é revogável: pode ser revogado na totalidade, alterar pontos específicos ou ser substituído por um novo. Normalmente, a forma mais limpa é fazer um novo testamento público com uma frase expressa sobre quais disposições anteriores são revogadas e quais permanecem.' },
        { kind: 'checklist', items: [
          'Reveja o testamento após casamento, divórcio, nascimento de filhos, morte de um herdeiro ou compra de imóvel.',
          'Verifique o testamento após mudança de residência fiscal ou mudança de/para Portugal.',
          'Não altere manualmente o texto notarial — isso cria risco de litígio.',
          'Para revogar, dirija-se ao notário e formalize a revogação ou um novo testamento.',
          'Se existirem testamentos noutros países, sincronize a revogação com juristas locais.',
          'Guarde uma lista de versões: data, notário, país, o que o documento cobre.',
          'Atualize as instruções de acesso a ativos digitais, mas não insira palavras-passe diretamente num testamento público.'
        ] },
        { kind: 'warning', text: 'Depois da morte, já não é possível corrigir um testamento ambíguo: os herdeiros irão discutir na Conservatória ou em tribunal. Se os bens forem significativos ou se houver vários países envolvidos, a poupança numa consulta jurídica é muitas vezes mais cara do que o próprio testamento.' }
      ]
    }
  ],
  costs: [
    { label: 'Formalização de testamento no notário', amountEUR: 159, note: 'Valor de referência para o serviço Testamento em justiça.gov.pt; nos notários privados, confirme antecipadamente os custos adicionais.' },
    { label: 'Tradutor para português', amountEURMin: 50, amountEURMax: 150, note: 'Normalmente é pago à parte e depende da cidade, da língua e da duração da visita.' },
    { label: 'Consulta jurídica sobre herança transfronteiriça', amountEURMin: 150, amountEURMax: 500, note: 'Não é obrigatória para um testamento simples, mas é prudente quando há bens em vários países ou herdeiros legitimários.' }
  ],
  sources: [
    { title: 'IRN: Registo Central de Testamentos', url: 'https://www.sit.irn.mj.pt/portal/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Justiça.gov.pt: serviço Testamento', url: 'https://justica.gov.pt/Servicos/Testamento', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código Civil português: regras gerais sobre sucessões e testamentos', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1966-34509075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Regulamento (UE) n.º 650/2012 sobre sucessões transfronteiriças', url: 'https://eur-lex.europa.eu/legal-content/PT/TXT/?uri=CELEX:32012R0650', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
