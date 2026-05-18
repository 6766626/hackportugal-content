export default {
  editorialVoice: 'hackportugal',
  id: 'testamento-publico',
  categoryId: 'documents_fiscal',
  title: 'Testamento através de notário e Registo Central de Testamentos',
  tldr: 'Em Portugal, o testamento público é feito num notário: o documento é elaborado e conservado no sistema notarial, e a informação sobre a sua existência é comunicada ao Registo Central de Testamentos junto do IRN. O valor de referência da taxa pelo testamento é 159 €; nos notários privados podem existir custos adicionais. Para expats, isto é especialmente importante quando há ativos em vários países: ao abrigo do Regulamento (UE) 650/2012, pode escolher expressamente a lei do país da sua nacionalidade; caso contrário, aplica-se normalmente a lei da última habitual residence.',
  tags: ['testamento', 'herança', 'notário', 'irn'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'when-needed',
      title: 'Quando um expat precisa de um testamento português',
      content: [
        { kind: 'paragraph', text: 'Testamento público é um testamento que o notário elabora em forma notarial. Não «transfere bens agora»; só produz efeitos após a morte. Enquanto estiver vivo, pode revogá-lo ou substituí-lo.' },
        { kind: 'checklist', items: [
          'Tem um apartamento, uma casa, contas bancárias, participações numa empresa ou um automóvel em Portugal.',
          'Vive em Portugal, mas os ativos e os herdeiros estão em países diferentes.',
          'Quer designar herdeiros concretos, legatários ou um executor testamentário — cabeça de casal / testamenteiro.',
          'Quer escolher expressamente a lei do país da sua nacionalidade ao abrigo do Regulamento (UE) 650/2012, em vez de depender da lei da última habitual residence.',
          'Tem filhos de diferentes casamentos, um parceiro sem casamento, uma união civil, uma blended family ou herdeiros em conflito.',
          'Quer deixar bens específicos a pessoas concretas: apartamento, quota, conta, coleção, acessos a criptoativos, bens de valor familiar.',
          'Já existe um testamento antigo noutro país, mas não cobre os ativos portugueses ou entra em conflito com a mudança de residência.'
        ] },
        { kind: 'warning', text: 'Um testamento português não revoga automaticamente testamentos noutro país, se isso não estiver escrito expressamente. Uma formulação deficiente como «revogo todos os testamentos anteriores» pode destruir por acidente o planeamento relativo a bens fora de Portugal. Para cross-border estate, é melhor alinhar os textos com advogados em ambas as jurisdições.' }
      ]
    },
    {
      id: 'law-choice',
      title: 'Lei sucessória: Portugal ou país da nacionalidade',
      content: [
        { kind: 'paragraph', text: 'Para sucessões na UE aplica-se o Regulamento (UE) 650/2012. Regra de base: aplica-se a lei do país onde a pessoa tinha habitual residence no momento da morte. Se vivia efetivamente em Portugal, a lei portuguesa pode tornar-se a principal mesmo para parte dos ativos no estrangeiro.' },
        { kind: 'paragraph', text: 'No testamento, pode fazer uma professio juris — escolher a lei do país da sua nacionalidade. Por exemplo, um cidadão da Federação Russa, da Ucrânia, do Reino Unido ou dos EUA que viva em Portugal pode indicar que à sucessão se aplica a lei da sua nacionalidade. Se tiver várias nacionalidades, normalmente pode escolher a lei de uma delas.' },
        { kind: 'checklist', items: [
          'Verifique se o seu país tem regras especiais sobre imóveis no estrangeiro.',
          'Verifique se o seu país reconhece a escolha de lei ao abrigo do Regulamento (UE) 650/2012 ou se tem as suas próprias normas de conflitos.',
          'Se quiser escolher a lei da nacionalidade, a formulação deve ser expressa, e não «por defeito».',
          'Se nada for escolhido, após vários anos de vida em Portugal a herança será frequentemente analisada à luz da Portuguese succession law.',
          'A lei portuguesa protege os herdeiros legitimários: cônjuge, descendentes e ascendentes têm uma quota obrigatória.',
          'Por testamento não é possível privar livremente os herdeiros obrigatórios da sua legítima, se for aplicável a lei portuguesa.',
          'Para efeitos fiscais, a escolha da lei sucessória não equivale à escolha do país fiscal: o Imposto do Selo e os impostos estrangeiros são verificados separadamente.'
        ] },
        { kind: 'warning', text: 'Portugal não cobra um «imposto clássico sobre heranças» entre cônjuges, filhos, netos, pais e avós — para estes aplica-se a isenção do **10% Imposto do Selo** sobre transmissões gratuitas. Para os restantes herdeiros/legatários, o 10% Imposto do Selo é normalmente aplicável. Separadamente para imóveis: na formalização da entrada na herança aplica-se **Imposto do Selo 0,8%** sobre acquisition of immovable property (verba 1.1 da Tabela Geral do Imposto do Selo) + custos de registo no IRN. Isto não são «apenas custos de registo». O testamento resolve a questão dos beneficiários, mas não elimina a verificação fiscal.' }
      ]
    },
    {
      id: 'prepare-documents',
      title: 'O que preparar antes da visita ao notário',
      content: [
        { kind: 'paragraph', text: 'Pode marcar com um notário privado ou nos serviços notariais disponíveis através de justiça.gov.pt. Para património complexo, é melhor preparar primeiro uma minuta com um advogado/solicitador e depois ir ao notário para a formalização notarial.' },
        { kind: 'checklist', items: [
          'Passaporte ou Cartão de Cidadão / cartão de residência.',
          'NIF — necessário para uma identificação exata nos sistemas portugueses.',
          'Dados dos herdeiros: nome completo, data de nascimento, morada, NIF se existir, grau de parentesco.',
          'Lista de ativos portugueses: imóveis com caderneta predial e certidão permanente, contas bancárias, participações, automóveis.',
          'Lista de ativos no estrangeiro — pelo menos por países e tipos de bens.',
          'Informação sobre casamento: regime de bens, data do casamento, convenção antenupcial, divórcios, filhos de diferentes relações.',
          'Decisão: se pretende escolher a lei da nacionalidade ao abrigo do Regulamento (UE) 650/2012.',
          'Intérprete, se não compreender português o suficiente para um texto jurídico.',
          'Contactos da pessoa que poderá encontrar os documentos após a morte: familiar, advogado, testamenteiro.'
        ] },
        { kind: 'warning', text: 'O notário deve certificar-se de que o testador compreende o sentido do documento e atua voluntariamente. Se existirem dúvidas devido à língua, idade, doença ou pressão familiar, o notário pode pedir intérprete, confirmação médica da capacidade para compreender o ato ou recusar a prática do ato.' }
      ]
    },
    {
      id: 'notary-process',
      title: 'Como decorre a formalização do testamento público',
      content: [
        { kind: 'paragraph', text: 'Nos termos do Código do Notariado, para **testamento público são obrigatórias 2 testemunhas** (testemunhas instrumentárias), que estão presentes na formalização e assinam o ato juntamente com o testador e o notário. As testemunhas não podem ser herdeiros nem pessoas com conflito de interesses.\n\nNa prática, o processo é assim: você explica a sua vontade, o notário prepara o texto, **lê-o em voz alta na presença das testemunhas**, confirma as formulações e, em seguida, o documento é assinado pelo testador, pelas testemunhas e pelo notário. O testamento público fica no arquivo notarial; normalmente é entregue ao testador uma confirmação ou certidão mediante pedido.' },
        { kind: 'checklist', items: [
          'Marque com o notário e confirme o custo, a língua, **a disponibilização de 2 testemunhas** (se não as tiver — o notário muitas vezes ajuda).',
          'Entregue os documentos e a minuta de distribuição dos bens.',
          'Peça para incluir separadamente uma clause of choice of law, se isso for necessário para uma herança cross-border.',
          'Verifique que nomes, datas de nascimento, NIF, moradas e descrições dos bens estão escritos sem erros.',
          'Confirme que a formulação não revoga por acidente testamentos estrangeiros, se tiver vários.',
          'Se o testador não compreender português — é obrigatório intérprete; se não puder assinar (doença, analfabetismo) — está presente um assinante a rogo + testemunhas adicionais.',
          'Assine o documento apenas depois de leitura e compreensão completas.',
          'Guarde os contactos do notário e a data do testamento num local seguro.',
          'Não guarde a única cópia num cofre a que os herdeiros não conseguirão aceder após a morte.'
        ] },
        { kind: 'paragraph', text: 'O valor de referência do serviço «Testamento» em justiça.gov.pt é 159 €. Nos notários privados podem existir valores adicionais por consulta, urgência, tradução, deslocação, certidões e preparação de documentos conexos.' }
      ]
    },
    {
      id: 'rct',
      title: 'Registo Central de Testamentos: o que entra nele',
      content: [
        { kind: 'paragraph', text: 'O Registo Central de Testamentos, RCT, é gerido pelo IRN. É o registo central de informações sobre testamentos e respetivas revogações. Serve para que, após a morte, os herdeiros e notários possam saber se existe testamento, onde foi feito e qual é o último.' },
        { kind: 'checklist', items: [
          'No RCT são registadas informações sobre o testamento, e não o texto integral para consulta pública.',
          'O registo ajuda a encontrar o último testamento válido, mesmo que a família não saiba em que notário está guardado.',
          'Enquanto o testador estiver vivo, a informação é protegida: normalmente o acesso pertence ao próprio testador ou ao seu representante.',
          'Após a morte, os interessados pedem uma certidão sobre a existência de testamento, normalmente com prova do óbito.',
          'Se houve vários testamentos, juridicamente importa a última vontade válida, desde que não seja defeituosa.',
          'A revogação ou um novo testamento também devem ficar refletidos no sistema.',
          'O RCT não substitui o registo predial, os procedimentos bancários nem o processo de habilitação de herdeiros após a morte.'
        ] },
        { kind: 'warning', text: 'Não conte que os familiares «de alguma forma encontrem» o testamento. Informe uma pessoa de confiança: país, nome do notário, data do ato, onde está a cópia, contactos do advogado. Não é necessário revelar o conteúdo.' }
      ]
    },
    {
      id: 'change-revoke',
      title: 'Como alterar ou revogar o testamento',
      content: [
        { kind: 'paragraph', text: 'Em Portugal, o testamento é revogável: pode ser revogado integralmente, alterado em cláusulas específicas ou substituído por um novo. Normalmente, a forma mais limpa é fazer um novo testamento público com uma frase expressa sobre que disposições anteriores são revogadas e quais se mantêm.' },
        { kind: 'checklist', items: [
          'Reveja o testamento após casamento, divórcio, nascimento de filhos, morte de um herdeiro ou compra de imóvel.',
          'Verifique o testamento após mudança de residência fiscal ou mudança de/para Portugal.',
          'Não altere o texto notarial à mão — isso cria risco de litígio.',
          'Para revogar, vá ao notário e formalize uma revogação ou um novo testamento.',
          'Se existirem testamentos noutros países, sincronize a revogação com juristas locais.',
          'Guarde uma lista de versões: data, notário, país, o que o documento cobre.',
          'Atualize as instruções de acesso a ativos digitais, mas não inclua palavras-passe diretamente no testamento público.'
        ] },
        { kind: 'warning', text: 'Após a morte, já não é possível corrigir um testamento pouco claro: os herdeiros discutirão na Conservatória ou em tribunal. Se os ativos forem relevantes ou houver vários países envolvidos, poupar na consulta jurídica é muitas vezes mais caro do que o próprio testamento.' }
      ]
    }
  ],
  costs: [
    { label: 'Formalização de testamento no notário', amountEUR: 159, note: 'Valor de referência para o serviço Testamento em justiça.gov.pt; nos notários privados confirme antecipadamente os custos adicionais.' },
    { label: 'Intérprete para português', amountEURMin: 50, amountEURMax: 150, note: 'Normalmente pago separadamente; depende da cidade, da língua e da duração da visita.' },
    { label: 'Consulta jurídica sobre herança cross-border', amountEURMin: 150, amountEURMax: 500, note: 'Não é obrigatória para um testamento simples, mas é prudente quando há ativos em vários países ou herdeiros obrigatórios.' }
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
