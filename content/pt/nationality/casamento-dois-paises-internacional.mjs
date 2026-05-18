export default {
  editorialVoice: 'hackportugal',
  id: 'casamento-dois-paises-internacional',
  categoryId: 'nationality',
  title: 'Casamento com estrangeiro de nacionalidades diferentes: dupla formalização',
  tldr: 'Um casamento internacional em Portugal faz-se normalmente em 2 circuitos: primeiro o processo preliminar de casamento e a cerimónia civil na Conservatória/Cartório, depois o reconhecimento do casamento no país de nacionalidade de cada cônjuge — através do consulado ou directamente no registo do seu país. A taxa pública base para o casamento civil português é 120 €. Os documentos estrangeiros quase sempre precisam de Hague apostille, tradução para PT e uma validade recente, normalmente até 6 meses.',
  tags: ['casamento', 'apostille', 'conservatória', 'consulado'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'two-circuits',
      title: 'Lógica: um casamento, duas formalizações',
      content: [
        { kind: 'paragraph', text: 'Se celebrar um casamento civil em Portugal, o próprio casamento passa a existir segundo a lei portuguesa após o registo na Conservatória do Registo Civil ou num Cartório autorizado. Mas, para o país da sua nacionalidade, isto é normalmente um “acto estrangeiro”, que depois terá de ser reconhecido, registado ou pelo menos apresentado com apostille e tradução.' },
        { kind: 'paragraph', text: 'Por isso, planeie o processo como 2 projectos independentes: 1) o procedimento português de celebração do casamento; 2) a utilização posterior da certidão de casamento portuguesa no Brasil, na Federação Russa, na Ucrânia ou noutro país de nacionalidade.' },
        { kind: 'checklist', items: ['Em Portugal, o casamento é formalizado pela Conservatória/IRN ou por Cartório Notarial com competência para o efeito', 'O consulado do seu país normalmente não “cria” o casamento português — regista ou aceita o acto português já concluído', 'Para a parte portuguesa são necessários documentos de identidade, nascimento e inexistência de impedimentos ao casamento', 'Para a parte estrangeira, quase sempre são necessárias legalização/apostille e tradução', 'Depois do casamento, será necessária uma certidão de casamento portuguesa para o procedimento no estrangeiro', 'O país de nacionalidade pode exigir uma forma específica: registo consular, transcrição, inscrição no registo ou simples reconhecimento do documento'] }
      ]
    },
    {
      id: 'portugal-procedure',
      title: '1. Formalizar o casamento civil em Portugal',
      content: [
        { kind: 'paragraph', text: 'O processo começa com o processo preliminar de casamento. Pode ser aberto em qualquer Conservatória do Registo Civil, independentemente do local de residência em Portugal. Normalmente, um ou ambos os futuros cônjuges apresentam o pedido, indicam o regime de bens e escolhem a data/local da cerimónia.' },
        { kind: 'checklist', items: ['Passaporte ou Cartão de Cidadão / cartão de residência', 'NIF — nem sempre é juridicamente obrigatório para o casamento em si, mas é frequentemente necessário para pagamentos e comunicação', 'Certidão de nascimento: recente, completa, com dados dos pais', 'Documento sobre o estado civil ou certificado de capacidade matrimonial, se o país de nacionalidade o emitir', 'Documentos de divórcio/óbito de cônjuge anterior, se aplicável', 'Hague apostille nos documentos estrangeiros, se o país for parte da Convenção da Haia de 1961', 'Tradução para português, se o documento não estiver em PT e a Conservatória não o aceitar directamente', 'Os dados das testemunhas normalmente não são obrigatórios para casamento civil na Conservatória, mas podem ser necessários em casos específicos ou para cerimónia fora do serviço'] },
        { kind: 'warning', text: 'Não compre bilhetes para a data do casamento enquanto a Conservatória não tiver aceite os documentos sem pendência. O atraso mais comum não é o formulário do pedido, mas sim uma declaração estrangeira: falta de apostille, tradução não aceite, documento mais antigo do que o prazo admissível ou país que não emite certificado de capacidade matrimonial.' }
      ]
    },
    {
      id: 'foreign-documents',
      title: '2. Preparar documentos estrangeiros sem pendência',
      content: [
        { kind: 'paragraph', text: 'O conservador português verifica não só o passaporte, mas também a capacidade para casar: idade, inexistência de casamento em vigor, inexistência de parentesco proibido, validade do divórcio. Para uma pessoa estrangeira, isto é comprovado por documentos do país de nacionalidade.' },
        { kind: 'substeps', items: [
          { id: 'apostille', title: 'Apostille ou legalização consular', content: [
            { kind: 'paragraph', text: 'Se o documento tiver sido emitido num país parte da Hague Apostille Convention, normalmente é necessária a apostille desse país. Documentos russos, ucranianos e brasileiros para Portugal são, em regra, apostilados no país de emissão. Se o país não for parte da convenção, é necessária legalização consular.' }
          ] },
          { id: 'translation', title: 'Tradução para português', content: [
            { kind: 'paragraph', text: 'A tradução deve ser adequada para o Portuguese civil registry.\n\nNa prática, são aceites traduções certificadas por notário português, advogado/solicitador, consulado, ou feitas segundo as regras do país de emissão com legalização posterior. Um simples PDF de um tradutor sem certificação leva frequentemente a pendência.' }
          ] },
          { id: 'freshness', title: 'Validade recente', content: [
            { kind: 'paragraph', text: 'O IRN costuma esperar documentos recentes de nascimento e de capacidade matrimonial; na prática, a referência é até 6 meses, se o próprio documento ou a entidade emissora não indicar outro prazo. Certidões de nascimento antigas de modelos soviéticos/iniciais são frequentemente substituídas por um extracto actualizado a pedido dos serviços.' }
          ] }
        ] },
        { kind: 'checklist', items: ['Verificar o nome exacto: alfabeto latino no passaporte, transliteração cirílica/ucraniana/portuguesa devem ser explicáveis', 'Verificar o local de nascimento e os nomes dos pais — divergências levantam questões', 'Para divórcio: não basta um carimbo, é necessário documento de dissolução do casamento/decisão judicial transitada em julgado', 'Para viuvez: certidão de óbito do cônjuge anterior', 'Para alteração de apelido: documento que ligue o apelido antigo ao novo', 'Fazer digitalizações antes da entrega, mas levar os originais à marcação', 'Não plastificar documentos: a apostille e as certificações podem não ser aceites'] }
      ]
    },
    {
      id: 'after-wedding',
      title: '3. Depois da cerimónia: certidão e apostille',
      content: [
        { kind: 'paragraph', text: 'Depois do registo do casamento em Portugal, obtenha a certidão de casamento. Para utilização no estrangeiro, normalmente é necessária uma certidão em papel, depois apostille na Procuradoria-Geral da República ou serviço autorizado, e depois tradução para a língua do país onde o documento será apresentado.' },
        { kind: 'checklist', items: ['Pedir a certidão de casamento na Conservatória ou através do Civil Online, se o formato electrónico for adequado', 'Confirmar se é necessária certidão narrativa completa ou se basta uma certidão normal', 'Colocar apostille em Portugal, se o documento for para um país da Hague Apostille Convention', 'Fazer a tradução depois da apostille, se o país de destino exigir tradução e a apostille também tiver de ser traduzida', 'Verificar se o consulado aceita certidão electrónica com código de acesso ou exige documento em papel', 'Guardar várias cópias certificadas: um conjunto é frequentemente entregue ao consulado/registo sem devolução'] },
        { kind: 'warning', text: 'A certidão portuguesa sem apostille pode funcionar dentro de Portugal, mas fora de Portugal muitas vezes não será aceite. O erro inverso também é frequente: as pessoas apostilam um documento estrangeiro em Portugal, embora a apostille seja emitida pelo país que emitiu o documento.' }
      ]
    },
    {
      id: 'home-country',
      title: '4. Registar ou reconhecer o casamento no país de nacionalidade',
      content: [
        { kind: 'paragraph', text: 'Depois do casamento português, verifique separadamente as regras de cada país de nacionalidade. Se os cônjuges forem cidadãos de países diferentes, podem existir dois procedimentos independentes. Por exemplo, o cônjuge brasileiro normalmente faz o registro de casamento no Consulado do Brasil e depois a transcrição no cartório no Brasil. Para a Federação Russa e a Ucrânia, a abordagem é frequentemente diferente: o casamento português é reconhecido como acto estrangeiro mediante apostille e tradução, e o consulado pode realizar não um “novo casamento”, mas actos notariais/de registo ou prestar informação sobre a utilização do documento.' },
        { kind: 'checklist', items: ['Abrir o site do consulado do seu país em Portugal e procurar a secção casamento / registo civil / estado civil', 'Verificar se é necessária marcação e presença pessoal de ambos os cônjuges', 'Confirmar se ficam com o original da certidão de casamento ou se o devolvem depois da verificação', 'Verificar os requisitos da tradução: tradutor ajuramentado, certificação notarial, tradução no país de destino ou tradução em Portugal', 'Confirmar se o apelido muda automaticamente — em muitos países a alteração de apelido após casamento estrangeiro não é automática', 'Se houver filhos, confirmar consequências específicas: nacionalidade da criança, registo dos pais, autorização de viagem, passaporte', 'Se o casamento for entre pessoas do mesmo sexo, verificar antecipadamente o reconhecimento no país de nacionalidade: Portugal permite casamento entre pessoas do mesmo sexo, mas nem todos os países o transcrevem'] },
        { kind: 'warning', text: 'O registo consular não substitui o processo preliminar de casamento português. E o inverso também é verdade: o casamento português não garante a actualização automática dos seus documentos no país de nacionalidade, nas Finanças, no banco, na base de dados migratória ou no registo predial.' }
      ]
    },
    {
      id: 'nationality-immigration',
      title: '5. O que isto dá para autorização de residência e nacionalidade',
      content: [
        { kind: 'paragraph', text: 'O casamento com cidadão português pode ser fundamento para posterior naturalização por casamento, mas o casamento não emite passaporte nem cria automaticamente uma autorização de residência. Para residir em Portugal, o cônjuge estrangeiro continua a passar pelo circuito migratório da AIMA, se não tiver outro direito de permanência.' },
        { kind: 'paragraph', text: 'Para nacionalidade por casamento, a regra clássica na Lei da Nacionalidade é casamento ou união de facto há mais de 3 anos com cidadão português e declaração da vontade de adquirir a nacionalidade.\n\n**03.05.2026 O Presidente Seguro promulgou o Decreto AR 48/XVII** (nova redacção da Lei da Nacionalidade); em 13.05.2026 a lei AINDA NÃO foi publicada no DRE (10 dias desde a promulgação). Após a publicação no Diário da República, o prazo mínimo de casamento para pedir a nacionalidade aumentará de 3 para 5 anos. O texto da lei contém uma disposição transitória: aos processos em tramitação aplica-se a redacção anterior da Lei 37/81 (3 anos). Antes de apresentar o pedido, confirme o regime no DRE.' },
        { kind: 'checklist', items: ['Guardar a certidão de casamento portuguesa', 'Guardar provas de vida em comum: contrato de arrendamento, facturas, IRS, documentos bancários, filhos, seguros', 'Para a AIMA, preparar um processo separado para Reagrupamento Familiar ou outro tipo de autorização de residência', 'Para as Finanças, actualizar o estado civil se isso afectar o IRS', 'Para SNS, banco, empregador e seguradora, actualizar os dados apenas depois da alteração dos documentos ou se for exigido', 'Não confundir casamento com união de facto: são regimes diferentes de prova e de consequências'] }
      ]
    }
  ],
  costs: [
    { label: 'Processo e registo de casamento civil', amountEUR: 120, note: 'Taxa base do IRN para casamento civil; serviços adicionais, convenção antenupcial ou cerimónia fora da Conservatória são pagos separadamente.' },
    { label: 'Apostille em Portugal', amountEUR: 10.2, note: 'Valor indicativo por um documento português; confirme a taxa actual junto da PGR/serviço emissor antes da entrega.' },
    { label: 'Certidão de casamento', amountEURMin: 10, amountEURMax: 20, note: 'Depende do formato e do canal do pedido; a certidão electrónica e o extracto em papel podem ter preços diferentes.' },
    { label: 'Tradução certificada', amountEURMin: 25, amountEURMax: 60, note: 'Normalmente por página/documento; o preço depende da língua, urgência e certificação notarial.' }
  ],
  sources: [
    { title: 'Portal da Justiça: casamento civil e serviços de registo', url: 'https://justica.gov.pt/Servicos/Iniciar-processo-de-casamento', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'IRN: Registo Civil, casamento e certidões', url: 'https://irn.justica.gov.pt/Servicos/Cidadao/Casamento', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código do Registo Civil — procedimento de casamento e documentos estrangeiros', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1995-34509075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal da Justiça: pedido de certidão de casamento', url: 'https://justica.gov.pt/Servicos/Pedir-certidao-de-casamento', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
