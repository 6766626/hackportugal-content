export default {
  editorialVoice: 'hackportugal',
  id: 'testamento-publico',
  categoryId: 'documents_fiscal',
  title: 'Testamento através de notário e Registo Central de Testamentos',
  tldr: 'Em Portugal, o testamento público é feito junto de um notário: o documento é redigido e conservado no sistema notarial, e a informação sobre a sua existência segue para o Registo Central de Testamentos no IRN. O valor de referência da taxa pelo testamento é 159 €; em notários privados podem existir custos adicionais. Para expats, isto é especialmente importante quando há activos em vários países: ao abrigo do Regulamento (UE) 650/2012, é possível escolher expressamente a lei do país da sua nacionalidade; caso contrário, aplica-se normalmente a lei da última habitual residence.',
  tags: ['testamento', 'herança', 'notário', 'irn'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'when-needed',
      title: 'Quando um expat precisa de um testamento português',
      content: [
        { kind: 'paragraph', text: 'Testamento público é um testamento que o notário elabora em forma notarial. Não “transfere bens agora”, mas só produz efeitos após a morte. Enquanto você estiver vivo, pode ser revogado ou substituído.' },
        { kind: 'checklist', items: [
          'Tem um apartamento, uma casa, contas bancárias, participações numa empresa ou um automóvel em Portugal.',
          'Vive em Portugal, mas os activos e os herdeiros estão em países diferentes.',
          'Pretende designar herdeiros concretos, legatários ou um executor testamentário — cabeça de casal / testamenteiro.',
          'Pretende escolher expressamente a lei do país da sua nacionalidade ao abrigo do Regulamento (UE) 650/2012, em vez de depender da lei da última habitual residence.',
          'Tem filhos de casamentos diferentes, parceiro sem casamento, união de facto, blended family ou herdeiros em conflito.',
          'Pretende deixar bens específicos a pessoas concretas: apartamento, quota, conta, colecção, acessos cripto, bens de valor familiar.',
          'Já existe um testamento antigo noutro país, mas não cobre os activos portugueses ou entra em conflito com a mudança de residência.'
        ] },
        { kind: 'warning', text: 'Um testamento português não revoga automaticamente testamentos noutro país, se isso não estiver escrito de forma expressa. Uma formulação deficiente como “revogo todos os testamentos anteriores” pode destruir acidentalmente o planeamento relativo a bens fora de Portugal. Para uma cross-border estate, é melhor harmonizar os textos com um advogado em ambas as jurisdições.' }
      ]
    },
    {
      id: 'law-choice',
      title: 'Lei sucessória: Portugal ou país da nacionalidade',
      content: [
        { kind: 'paragraph', text: 'Para sucessões na UE aplica-se o Regulamento (UE) 650/2012. Regra de base: aplica-se a lei do país onde a pessoa tinha habitual residence no momento da morte. Se vivia efectivamente em Portugal, a lei portuguesa pode tornar-se a principal, mesmo para parte dos activos no estrangeiro.' },
        { kind: 'paragraph', text: 'No testamento pode fazer-se uma professio juris — escolher a lei do país da sua nacionalidade.\n\nPor exemplo, um cidadão da Federação Russa, da Ucrânia, do Reino Unido ou dos EUA que viva em Portugal pode indicar que à sucessão se aplica a lei da sua nacionalidade. Se tiver várias nacionalidades, normalmente pode escolher a lei de uma delas.' },
        { kind: 'checklist', items: [
          'Verifique se o seu país tem regras especiais sobre imóveis no estrangeiro.',
          'Verifique se o seu país reconhece a escolha de lei ao abrigo do UE 650/2012 ou se tem as suas próprias normas de conflito.',
          'Se pretende escolher a lei da nacionalidade, a formulação deve ser directa, e não “por defeito”.',
          'Se nada for escolhido, após vários anos de vida em Portugal, a herança será frequentemente analisada à luz do Portuguese succession law.',
          'A lei portuguesa protege os herdeiros legitimários: cônjuge, descendentes e ascendentes têm uma quota obrigatória.',
          'Por testamento, não é possível privar livremente os herdeiros legitimários da sua legítima, se se aplicar a lei portuguesa.',
          'Para efeitos fiscais, a escolha da lei sucessória não equivale à escolha do país fiscal: o Imposto do Selo e os impostos estrangeiros são verificados separadamente.'
        ] },
        { kind: 'warning', text: 'Portugal não cobra um “imposto sucessório clássico” entre cônjuges, filhos, netos, pais e avós — para eles aplica-se a isenção dos **10% Imposto do Selo** sobre transmissões gratuitas. Para os restantes herdeiros/legatários, aplica-se normalmente 10% Imposto do Selo. Separadamente para imóveis: no processo de habilitação e registo da herança aplica-se **Imposto do Selo 0,8%** sobre acquisition of immovable property (verba 1.1 da Tabela Geral do Imposto do Selo) + despesas de registo no IRN. Isto não são “apenas despesas de registo”. O testamento resolve a questão dos beneficiários, mas não elimina a verificação fiscal.' }
      ]
    },
    {
      id: 'prepare-documents',
      title: 'O que preparar antes da visita ao notário',
      content: [
        { kind: 'paragraph', text: 'Pode marcar com um notário privado ou com serviços notariais disponíveis através de justiça.gov.pt. Para património complexo, é melhor preparar primeiro um rascunho com advogado/solicitador e só depois ir ao notário para a formalização notarial.' },
        { kind: 'checklist', items: [
          'Passaporte ou Cartão de Cidadão / cartão de residência.',
          'NIF — necessário para identificação exacta nos sistemas portugueses.',
          'Dados dos herdeiros: nome completo, data de nascimento, morada, NIF se existir, grau de parentesco.',
          'Lista de activos portugueses: imóveis com caderneta predial e certidão permanente, contas bancárias, quotas, automóveis.',
          'Lista de activos estrangeiros — pelo menos por países e tipos de bens.',
          'Informação sobre o casamento: regime de bens, data do casamento, convenção antenupcial, divórcios, filhos de relações diferentes.',
          'Decisão: se pretende escolher a lei da nacionalidade ao abrigo do Regulamento (UE) 650/2012.',
          'Intérprete, se não compreender português o suficiente para um texto jurídico.',
          'Contactos da pessoa que poderá encontrar os documentos após a morte: familiar, advogado, testamenteiro.'
        ] },
        { kind: 'warning', text: 'O notário deve assegurar-se de que o testador compreende o sentido do documento e actua livremente. Se houver dúvidas devido à língua, idade, doença ou pressão familiar, o notário pode solicitar intérprete, confirmação médica da capacidade de compreender o acto ou recusar praticar o acto.' }
      ]
    },
    {
      id: 'notary-process',
      title: 'Como decorre a formalização do testamento público',
      content: [
        { kind: 'paragraph', text: 'Segundo o Código do Notariado, para **testamento público são obrigatórias 2 testemunhas** (testemunhas instrumentárias), que estão presentes na formalização e assinam o acto juntamente com o testador e o notário. As testemunhas não podem ser herdeiros nem pessoas com conflito de interesses.\n\nNa prática, o processo é assim: explica a sua vontade, o notário prepara o texto, **lê-o em voz alta na presença das testemunhas**, esclarece as formulações e, em seguida, o documento é assinado pelo testador, pelas testemunhas e pelo notário. O testamento público fica no arquivo notarial; normalmente, o testador recebe uma confirmação ou certidão mediante pedido.' },
        { kind: 'checklist', items: [
          'Marque com o notário e confirme o custo, a língua, **a disponibilização de 2 testemunhas** (se não as tiver — muitas vezes o notário ajuda).',
          'Entregue os documentos e o rascunho da distribuição dos bens.',
          'Peça para incluir separadamente uma clause of choice of law, se isso for necessário para uma herança cross-border.',
          'Verifique que nomes, datas de nascimento, NIF, moradas e descrições dos bens estão escritos sem erros.',
          'Certifique-se de que a formulação não revoga acidentalmente testamentos estrangeiros, se tiver vários.',
          'Se o testador não compreender português — é obrigatório intérprete; se não puder assinar (doença, analfabetismo) — intervém um rogo assinante + testemunhas adicionais.',
          'Assine o documento apenas depois de leitura e compreensão completas.',
          'Guarde os contactos do notário e a data do testamento em local seguro.',
          'Não guarde a única cópia num cofre a que os herdeiros não conseguirão aceder após a morte.'
        ] },
        { kind: 'paragraph', text: 'O valor de referência do serviço “Testamento” em justiça.gov.pt é 159 €. Em notários privados, podem existir valores adicionais por consulta, urgência, tradução, deslocação, certidões e preparação de documentos conexos.' }
      ]
    },
    {
      id: 'rct',
      title: 'Registo Central de Testamentos: o que é registado',
      content: [
        { kind: 'paragraph', text: 'O Registo Central de Testamentos, RCT, é gerido pelo IRN. É o registo central de informação sobre testamentos e a sua revogação. Serve para que, após a morte, herdeiros e notários possam saber se existe testamento, onde foi feito e qual é o último.' },
        { kind: 'checklist', items: [
          'No RCT são registadas informações sobre o testamento, não o texto completo para consulta pública.',
          'O registo ajuda a encontrar o último testamento válido, mesmo que a família não saiba junto de que notário está guardado.',
          'Enquanto o testador estiver vivo, a informação é protegida: normalmente só o próprio testador ou o seu representante tem acesso.',
          'Após a morte, os interessados pedem uma certidão sobre a existência de testamento, normalmente com prova do óbito.',
          'Se houve vários testamentos, juridicamente relevante é a última vontade válida, se não tiver vícios.',
          'A revogação ou um novo testamento também devem ficar reflectidos no sistema.',
          'O RCT não substitui o registo predial, os procedimentos bancários nem o processo de habilitação de herdeiros após a morte.'
        ] },
        { kind: 'warning', text: 'Não conte que os familiares “hão-de encontrar de alguma forma” o testamento. Informe uma pessoa de confiança: país, nome do notário, data do acto, onde está a cópia, contactos do advogado. Não é necessário revelar o conteúdo.' }
      ]
    },
    {
      id: 'change-revoke',
      title: 'Como alterar ou revogar um testamento',
      content: [
        { kind: 'paragraph', text: 'O testamento em Portugal é revogável: pode ser revogado integralmente, alterado em pontos específicos ou substituído por um novo. Normalmente, a forma mais limpa é fazer um novo testamento público com uma frase expressa sobre quais disposições anteriores são revogadas e quais permanecem.' },
        { kind: 'checklist', items: [
          'Reveja o testamento após casamento, divórcio, nascimento de filhos, morte de um herdeiro ou compra de imóvel.',
          'Verifique o testamento após mudança de residência fiscal ou mudança de/para Portugal.',
          'Não altere manualmente o texto notarial — isso cria risco de litígio.',
          'Para revogar, vá ao notário e formalize a revogação ou um novo testamento.',
          'Se existirem testamentos noutros países, sincronize a revogação com advogados locais.',
          'Guarde uma lista de versões: data, notário, país, o que o documento cobre.',
          'Actualize as instruções de acesso a activos digitais, mas não coloque palavras-passe directamente no testamento público.'
        ] },
        { kind: 'warning', text: 'Após a morte, já não é possível corrigir um testamento ambíguo: os herdeiros discutirão na Conservatória ou em tribunal. Se os activos forem significativos ou existirem vários países, poupar na consulta jurídica fica muitas vezes mais caro do que o próprio testamento.' }
      ]
    }
  ],
  costs: [
    { label: 'Formalização de testamento junto de notário', amountEUR: 159, note: 'Valor de referência do serviço Testamento em justiça.gov.pt; em notários privados, confirme antecipadamente os custos adicionais.' },
    { label: 'Intérprete para português', amountEURMin: 50, amountEURMax: 150, note: 'Normalmente é pago à parte; depende da cidade, da língua e da duração da visita.' },
    { label: 'Consulta jurídica sobre herança cross-border', amountEURMin: 150, amountEURMax: 500, note: 'Não é obrigatória para um testamento simples, mas é prudente quando há activos em vários países ou herdeiros legitimários.' }
  ],
  sources: [
    { title: 'IRN: Registo Central de Testamentos', url: 'https://www.sit.irn.mj.pt/portal/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Justiça.gov.pt: serviço Testamento', url: 'https://justica.gov.pt/Servicos/Testamento', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código Civil português: regras gerais sobre sucessões e testamentos', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1966-34509075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Regulamento (UE) n.º 650/2012 sobre sucessões transfronteiriças', url: 'https://eur-lex.europa.eu/legal-content/PT/TXT/?uri=CELEX:32012R0650', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}
