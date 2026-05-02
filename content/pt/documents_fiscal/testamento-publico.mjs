export default {
  editorialVoice: 'hackportugal',
  id: 'testamento-publico',
  categoryId: 'documents_fiscal',
  title: 'Testamento através de notário e Registo Central de Testamentos',
  tldr: 'Em Portugal, o testamento público é feito perante notário: o documento é elaborado e conservado no sistema notarial, e a informação sobre a sua existência é comunicada ao Registo Central de Testamentos do IRN. O valor de referência da taxa para um testamento é 159 €; nos notários privados podem existir custos adicionais. Para expats, isto é especialmente importante quando há património em vários países: ao abrigo do Regulamento (UE) 650/2012, pode escolher expressamente a lei do país da sua nacionalidade; caso contrário, em regra aplica-se a lei da última habitual residence.',
  tags: ['testamento', 'herança', 'notário', 'irn'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'when-needed',
      title: 'Quando um expat precisa de um testamento português',
      content: [
        { kind: 'paragraph', text: 'Testamento público é um testamento que o notário elabora em forma notarial. Não “transmite os bens agora”, mas só produz efeitos após a morte. Enquanto estiver vivo, pode revogá-lo ou substituí-lo.' },
        { kind: 'checklist', items: [
          'Tem um apartamento, uma casa, contas bancárias, participações numa empresa ou um automóvel em Portugal.',
          'Vive em Portugal, mas os bens e os herdeiros estão em países diferentes.',
          'Quer designar herdeiros concretos, legatários ou um executor testamentário — cabeça de casal / testamenteiro.',
          'Quer escolher expressamente a lei do país da sua nacionalidade ao abrigo do Regulamento (UE) 650/2012, em vez de depender da lei da última habitual residence.',
          'Tem filhos de casamentos diferentes, um parceiro sem casamento, uma união de facto, uma blended family ou herdeiros em conflito.',
          'Quer deixar bens específicos a pessoas concretas: um apartamento, uma quota, uma conta, uma coleção, acessos a criptoativos, bens de família.',
          'Já existe um testamento antigo noutro país, mas não abrange os bens portugueses ou entra em conflito com a mudança de residência.'
        ] },
        { kind: 'warning', text: 'Um testamento português não revoga automaticamente testamentos noutro país, se isso não estiver escrito expressamente. Uma formulação deficiente como “revogo todos os testamentos anteriores” pode, por acidente, destruir o planeamento relativo a bens fora de Portugal. Para uma cross-border estate, é melhor coordenar os textos com um advogado em ambas as jurisdições.' }
      ]
    },
    {
      id: 'law-choice',
      title: 'Lei sucessória: Portugal ou país da nacionalidade',
      content: [
        { kind: 'paragraph', text: 'Para sucessões na UE aplica-se o Regulamento (UE) 650/2012. A regra de base: aplica-se a lei do país onde a pessoa tinha habitual residence no momento da morte. Se vivia efetivamente em Portugal, a lei portuguesa pode tornar-se a lei principal, mesmo para parte dos bens no estrangeiro.' },
        { kind: 'paragraph', text: 'No testamento é possível fazer uma professio juris — escolher a lei do país da sua nacionalidade. Por exemplo, um cidadão da Federação Russa, da Ucrânia, do Reino Unido ou dos EUA que viva em Portugal pode indicar que se aplica à sucessão a lei da sua nacionalidade. Se tiver várias nacionalidades, em regra pode escolher a lei de uma delas.' },
        { kind: 'checklist', items: [
          'Verifique se o seu país tem regras especiais sobre imóveis no estrangeiro.',
          'Verifique se o seu país reconhece a escolha de lei ao abrigo do UE 650/2012 ou se tem as suas próprias normas de conflitos de leis.',
          'Se quiser escolher a lei da nacionalidade, a formulação deve ser expressa, e não “por defeito”.',
          'Se não escolher nada, após vários anos a viver em Portugal a sucessão será frequentemente analisada à luz do Portuguese succession law.',
          'A lei portuguesa protege os herdeiros legitimários: cônjuge, descendentes e ascendentes têm uma quota obrigatória.',
          'Por testamento, não é possível privar livremente os herdeiros legitimários da sua legítima, se for aplicável a lei portuguesa.',
          'Para efeitos fiscais, a escolha da lei sucessória não equivale à escolha do país fiscal: o Imposto do Selo e os impostos estrangeiros são verificados separadamente.'
        ] },
        { kind: 'warning', text: 'Portugal não cobra um “imposto sucessório clássico” entre cônjuges, filhos, netos, pais e avós, mas em algumas transmissões aplica-se Imposto do Selo de 10%. No caso de imóveis, também surgem custos de registo. O testamento resolve a questão dos beneficiários, mas não elimina a verificação fiscal.' }
      ]
    },
    {
      id: 'prepare-documents',
      title: 'O que preparar antes da visita ao notário',
      content: [
        { kind: 'paragraph', text: 'Pode marcar com um notário privado ou nos serviços notariais disponíveis através de justiça.gov.pt. Para património complexo, é melhor preparar primeiro uma minuta com um advogado/solicitador e depois ir ao notário para a formalização notarial.' },
        { kind: 'checklist', items: [
          'Passaporte ou Cartão de Cidadão / cartão de residência.',
          'NIF — necessário para identificação exata nos sistemas portugueses.',
          'Dados dos herdeiros: nome completo, data de nascimento, morada, NIF se existir, grau de parentesco.',
          'Lista dos bens portugueses: imóveis com caderneta predial e certidão permanente, contas bancárias, participações, automóveis.',
          'Lista dos bens no estrangeiro — pelo menos por país e tipo de bem.',
          'Informação sobre o casamento: regime de bens, data do casamento, convenção antenupcial, divórcios, filhos de relações diferentes.',
          'Decisão: se quer escolher a lei da nacionalidade ao abrigo do Regulamento (UE) 650/2012.',
          'Intérprete, se não compreender português o suficiente para um texto jurídico.',
          'Contactos da pessoa que poderá encontrar os documentos após a morte: familiar, advogado, testamenteiro.'
        ] },
        { kind: 'warning', text: 'O notário deve certificar-se de que o testador compreende o sentido do documento e atua de forma voluntária. Se houver dúvidas por causa da língua, idade, doença ou pressão familiar, o notário pode pedir intérprete, confirmação médica da capacidade para compreender o ato ou recusar a prática do ato.' }
      ]
    },
    {
      id: 'notary-process',
      title: 'Como decorre a formalização do testamento público',
      content: [
        { kind: 'paragraph', text: 'Na prática, o processo é assim: você explica a sua vontade, o notário prepara o texto, lê-o em voz alta, confirma as formulações e depois o documento é assinado. O testamento público fica no arquivo notarial; o testador recebe normalmente uma confirmação ou uma certidão a pedido.' },
        { kind: 'checklist', items: [
          'Marque com o notário e confirme o custo, a língua, a necessidade de intérprete e de testemunhas.',
          'Entregue os documentos e a minuta de distribuição dos bens.',
          'Peça para incluir separadamente uma clause of choice of law, se isso for necessário para uma sucessão cross-border.',
          'Verifique se nomes, datas de nascimento, NIF, moradas e descrições dos bens estão escritos sem erros.',
          'Certifique-se de que a formulação não revoga por acidente testamentos estrangeiros, se tiver vários.',
          'Assine o documento apenas depois de o ler integralmente e de o compreender.',
          'Guarde os contactos do notário e a data do testamento num local seguro.',
          'Não guarde a única cópia num cofre ao qual os herdeiros não conseguirão aceder após a morte.'
        ] },
        { kind: 'paragraph', text: 'O valor de referência do serviço “Testamento” em justiça.gov.pt é 159 €. Nos notários privados podem existir montantes adicionais por consulta, urgência, tradução, deslocação, certidões e preparação de documentos conexos.' }
      ]
    },
    {
      id: 'rct',
      title: 'Registo Central de Testamentos: que informação entra no registo',
      content: [
        { kind: 'paragraph', text: 'O Registo Central de Testamentos, RCT, é mantido pelo IRN. É o registo central das informações sobre testamentos e respetivas revogações. Serve para que, após a morte, herdeiros e notários possam saber se existe testamento, onde foi feito e qual é o mais recente.' },
        { kind: 'checklist', items: [
          'No RCT são registadas informações sobre o testamento, e não o texto integral para consulta pública.',
          'O registo ajuda a encontrar o último testamento em vigor, mesmo que a família não saiba em que notário está guardado.',
          'Enquanto o testador estiver vivo, a informação está protegida: o acesso é normalmente do próprio testador ou do seu representante.',
          'Após a morte, os interessados pedem uma certidão sobre a existência de testamento, normalmente com prova do óbito.',
          'Se houve vários testamentos, juridicamente é relevante a última vontade válida, se não tiver vícios.',
          'A revogação ou um novo testamento também devem ficar refletidos no sistema.',
          'O RCT não substitui o registo predial, os procedimentos bancários nem o processo de habilitação de herdeiros após a morte.'
        ] },
        { kind: 'warning', text: 'Não conte que os familiares “hão de encontrar” o testamento de alguma forma. Informe uma pessoa de confiança: país, nome do notário, data do ato, onde está a cópia, contactos do advogado. Não precisa de revelar o conteúdo.' }
      ]
    },
    {
      id: 'change-revoke',
      title: 'Como alterar ou revogar um testamento',
      content: [
        { kind: 'paragraph', text: 'O testamento em Portugal é revogável: pode ser revogado totalmente, alterar cláusulas específicas ou fazer um novo. Normalmente, a forma mais limpa é fazer um novo testamento público com uma frase expressa sobre que disposições anteriores são revogadas e quais se mantêm.' },
        { kind: 'checklist', items: [
          'Reveja o testamento após casamento, divórcio, nascimento de filhos, morte de um herdeiro ou compra de imóvel.',
          'Verifique o testamento após mudança de residência fiscal ou mudança de/para Portugal.',
          'Não altere o texto notarial à mão — isso cria risco de litígio.',
          'Para revogar, vá ao notário e formalize uma revogação ou um novo testamento.',
          'Se houver testamentos noutros países, sincronize a revogação com juristas locais.',
          'Guarde uma lista de versões: data, notário, país, o que o documento abrange.',
          'Atualize as instruções de acesso a ativos digitais, mas não insira palavras-passe diretamente no testamento público.'
        ] },
        { kind: 'warning', text: 'Após a morte, já não é possível corrigir um testamento pouco claro: os herdeiros discutirão na Conservatória ou em tribunal. Se os bens forem significativos ou houver vários países envolvidos, poupar na consulta jurídica sai muitas vezes mais caro do que o próprio testamento.' }
      ]
    }
  ],
  costs: [
    { label: 'Formalização de testamento no notário', amountEUR: 159, note: 'Valor de referência do serviço Testamento em justiça.gov.pt; nos notários privados confirme antecipadamente os custos adicionais.' },
    { label: 'Intérprete para português', amountEURMin: 50, amountEURMax: 150, note: 'Normalmente é pago separadamente e depende da cidade, da língua e da duração da visita.' },
    { label: 'Consulta jurídica sobre sucessão cross-border', amountEURMin: 150, amountEURMax: 500, note: 'Não é obrigatória para um testamento simples, mas é prudente quando há bens em vários países ou herdeiros legitimários.' }
  ],
  sources: [
    { title: 'IRN: Registo Central de Testamentos', url: 'https://irn.justica.gov.pt/Registos-centrais/Testamentos', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Justiça.gov.pt: serviço Testamento', url: 'https://justica.gov.pt/Servicos/Testamento', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código Civil português: regras gerais sobre sucessões e testamentos', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1966-34509075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Regulamento (UE) n.º 650/2012 sobre sucessões transfronteiriças', url: 'https://eur-lex.europa.eu/legal-content/PT/TXT/?uri=CELEX:32012R0650', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
