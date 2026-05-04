export default {
  editorialVoice: 'hackportugal',
  id: 'casamento-dois-paises-internacional',
  categoryId: 'nationality',
  title: 'Casamento entre pessoas de diferentes nacionalidades: dupla tramitação',
  tldr: 'Um casamento internacional em Portugal faz-se normalmente em 2 circuitos: primeiro o processo preliminar de casamento e a cerimónia civil na Conservatória/Cartório, depois o reconhecimento/registo do casamento no país de cidadania de cada cônjuge — via consulado ou diretamente no registo do seu país. A taxa base para casamento civil português é 120 €. Documentos estrangeiros quase sempre precisam de Apostila de Haia, tradução para PT e um prazo de atualidade geralmente até 6 meses.',
  tags: ['casamento', 'apostila', 'conservatória', 'consulado'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'two-circuits',
      title: 'Lógica: um casamento, duas tramitações',
      content: [
        { kind: 'paragraph', text: 'Se celebrar casamento civil em Portugal, o casamento nasce segundo o direito português após o registo na Conservatória do Registo Civil ou em Cartório Notarial com competências. Mas para o país da sua cidadania isso é, em regra, um “ato estrangeiro” que deve depois ser reconhecido, transcrito ou, pelo menos, apresentado com apostila e tradução.' },
        { kind: 'paragraph', text: 'Planeie, por isso, o processo como 2 projetos independentes: 1) o procedimento português de celebração do casamento; 2) a utilização posterior da certidão de casamento portuguesa no Brasil, na Federação Russa, na Ucrânia ou noutro país de cidadania.' },
        { kind: 'checklist', items: ['Em Portugal o casamento é tratado pela Conservatória/IRN ou por Cartório Notarial com poderes', 'O consulado do seu país normalmente não “cria” um casamento português — limita-se a registar ou aceitar o ato português já emitido', 'Para o lado português são necessários documentos de identidade, de nascimento e de inexistência de impedimentos matrimoniais', 'Para o lado estrangeiro quase sempre são exigidas legalização/apostila e tradução', 'Após o casamento precisa da certidão de casamento portuguesa para o procedimento no estrangeiro', 'O país de cidadania pode exigir uma forma própria: registo consular, transcrição, inscrição no registo ou simples reconhecimento do documento'] }
      ]
    },
    {
      id: 'portugal-procedure',
      title: '1. Formalizar o casamento civil em Portugal',
      content: [
        { kind: 'paragraph', text: 'O processo começa com o processo preliminar de casamento. Pode ser iniciado em qualquer Conservatória do Registo Civil, independentemente do local de residência em Portugal. Normalmente um ou ambos os nubentes apresentam o requerimento, indicam o regime de bens e escolhem a data/local da cerimónia.' },
        { kind: 'checklist', items: ['Passaporte ou Cartão de Cidadão / cartão de residência', 'NIF — nem sempre juridicamente obrigatório para o próprio casamento, mas muitas vezes necessário para pagamentos e contactos', 'Certidão de nascimento: recente, completa, com dados dos progenitores', 'Documento sobre o estado civil ou certificado de capacidade matrimonial, se o país de cidadania o emitir', 'Documentos de divórcio/óbito de cônjuge anterior, se aplicável', 'Apostila de Haia em documentos estrangeiros, se o país for parte na Convenção de Haia de 1961', 'Tradução para português, se o documento não estiver em PT e a Conservatória não o aceitar diretamente', 'Dados de testemunhas geralmente não são obrigatórios para casamento civil na Conservatória, mas podem ser necessários em casos pontuais ou para cerimónia fora das instalações'] },
        { kind: 'warning', text: 'Não compre bilhetes para a data do casamento até a Conservatória aceitar os documentos sem pendência. O atraso mais comum não é o formulário do pedido, mas sim o documento estrangeiro: falta de apostila, tradução não aceite, documento fora do prazo admissível ou país que não emite certificado de capacidade matrimonial.' }
      ]
    },
    {
      id: 'foreign-documents',
      title: '2. Preparar os documentos estrangeiros sem pendência',
      content: [
        { kind: 'paragraph', text: 'O registo civil português verifica não só o passaporte, mas também a capacidade para contrair casamento: idade, inexistência de casamento vigente, inexistência de parentesco proibido, validade do divórcio. Para o cidadão estrangeiro isso é comprovado por documentos do seu país de cidadania.' },
        { kind: 'substeps', items: [
          { id: 'apostille', title: 'Apostila ou legalização consular', content: [
            { kind: 'paragraph', text: 'Se o documento foi emitido por país parte na Convenção da Apostila de Haia, é normalmente necessária a apostila desse país. Documentos da Federação Russa, da Ucrânia e do Brasil, para Portugal, em regra, são apostilados no país de emissão. Se o país não for parte na convenção, é necessária legalização consular.' }
          ] },
          { id: 'translation', title: 'Tradução para português', content: [
            { kind: 'paragraph', text: 'A tradução deve ser apta para o Registo Civil português. Na prática, aceitam tradução certificada por notário português, advogado/solicitador, consulado ou efetuada segundo as regras do país emissor com posterior legalização. Um simples PDF do tradutor sem certificação conduz frequentemente a pendência.' }
          ] },
          { id: 'freshness', title: 'Prazo de atualidade', content: [
            { kind: 'paragraph', text: 'O IRN costuma exigir documentos recentes de nascimento e de capacidade matrimonial; na prática, a referência é até 6 meses, salvo se o próprio documento ou entidade emissora indicar outro prazo. Certidões de nascimento antigas de modelo soviético/inicial são muitas vezes substituídas por uma certidão atual.' }
          ] }
        ] },
        { kind: 'checklist', items: ['Verificar o nome exato: a grafia em latim no passaporte e a transliteração a partir do cirílico/ucraniano/português devem ser coerentes e explicáveis', 'Confirmar o local de nascimento e os nomes dos progenitores — divergências levantam questões', 'Para divórcio: não basta um carimbo; é preciso documento de dissolução do casamento/decisão judicial com trânsito em julgado', 'Para viuvez: certidão de óbito do anterior cônjuge', 'Para alteração de apelido: documento que ligue o apelido antigo ao novo', 'Fazer digitalizações antes da entrega, mas levar os originais ao atendimento', 'Não plastificar documentos: a apostila e certificações podem não ser aceites'] }
      ]
    },
    {
      id: 'after-wedding',
      title: '3. Após a cerimónia: certidão e apostila',
      content: [
        { kind: 'paragraph', text: 'Depois do registo do casamento em Portugal, obtenha a certidão de casamento. Para uso no estrangeiro, é normalmente necessária a certidão em papel, depois a apostila na Procuradoria-Geral da República ou serviço competente, e por fim a tradução para o idioma do país onde o documento será apresentado.' },
        { kind: 'checklist', items: ['Pedir a certidão de casamento na Conservatória ou através do Civil Online, se a forma eletrónica for adequada', 'Confirmar se é necessária a certidão narrativa completa ou se basta a certidão simples', 'Apor a apostila em Portugal, se o documento for destinado a país parte na Convenção da Apostila de Haia', 'Fazer a tradução após a apostila, se o país de destino exigir tradução e se a apostila também tiver de ser traduzida', 'Verificar se o consulado aceita certidão eletrónica com código de acesso ou exige a versão em papel', 'Guardar várias cópias certificadas: um conjunto é muitas vezes retido pelo consulado/registo sem devolução'] },
        { kind: 'warning', text: 'A certidão portuguesa sem apostila pode servir dentro de Portugal, mas fora de Portugal é frequentemente recusada. O erro inverso também é comum: apostilar em Portugal um documento estrangeiro, quando a apostila deve ser aposta pelo país que emitiu o documento.' }
      ]
    },
    {
      id: 'home-country',
      title: '4. Registar ou reconhecer o casamento no país de cidadania',
      content: [
        { kind: 'paragraph', text: 'Depois do casamento português, verifique as regras de cada país de cidadania separadamente. Se os cônjuges forem cidadãos de países diferentes, podem existir dois procedimentos independentes. Por exemplo, o cônjuge brasileiro costuma fazer o registo do casamento no Consulado do Brasil e depois a transcrição num cartório no Brasil. Para a Federação Russa e a Ucrânia a abordagem é muitas vezes distinta: o casamento português é reconhecido como ato estrangeiro mediante apostila e tradução, e o consulado pode não realizar uma “nova cerimónia”, limitando-se a atos notariais/administrativos ou a prestar informação sobre a utilização do documento.' },
        { kind: 'checklist', items: ['Abrir o site do consulado do seu país em Portugal e localizar a secção casamento / registo civil / estado civil', 'Verificar se é necessária marcação e presença pessoal de ambos os cônjuges', 'Esclarecer se ficam com o original da certidão de casamento ou se o devolvem após conferência', 'Confirmar os requisitos de tradução: tradutor juramentado, reconhecimento notarial, tradução no país de destino ou em Portugal', 'Verificar se a alteração de apelido é automática — em muitos países a mudança de apelido após casamento estrangeiro não é automática', 'Se houver filhos, confirmar efeitos específicos: cidadania da criança, menção dos pais, autorização de viagem, passaporte', 'Se o casamento for entre pessoas do mesmo sexo, verificar antecipadamente o reconhecimento no país de cidadania: Portugal permite casamento entre pessoas do mesmo sexo, mas nem todos os países o transcrevem'] },
        { kind: 'warning', text: 'O registo consular não substitui o processo preliminar de casamento português. E, inversamente, o casamento em Portugal não garante atualização automática dos seus documentos no país de cidadania, nas Finanças, no banco, nas bases de migração ou no registo predial.' }
      ]
    },
    {
      id: 'nationality-immigration',
      title: '5. Implicações para autorização de residência e nacionalidade',
      content: [
        { kind: 'paragraph', text: 'O casamento com cidadão português pode ser fundamento para posterior naturalização por casamento, mas o próprio casamento não emite passaporte nem cria automaticamente uma autorização de residência. Para residir em Portugal, o cônjuge estrangeiro passa, ainda assim, pelo circuito migratório da AIMA, salvo se tiver outro direito de permanência.' },
        { kind: 'paragraph', text: 'Para a nacionalidade por casamento, a regra clássica na Lei da Nacionalidade é: casamento ou união de facto superior a 3 anos com cidadão português e declaração de vontade de adquirir a nacionalidade. **03.05.2026 o Presidente Séguro promulgou o Decreto AR 48/XVII** (nova redação da Lei da Nacionalidade): após publicação em Diário da República o prazo mínimo de casamento para requerer nacionalidade passará de 3 para 5 anos. Séguro pediu publicamente que os processos já submetidos sejam apreciados pelas regras antigas. Antes de requerer, confirme o regime no DRE.' },
        { kind: 'checklist', items: ['Guardar a certidão de casamento portuguesa', 'Guardar provas de vida em comum: contrato de arrendamento, faturas, IRS, documentos bancários, filhos, seguros', 'Para a AIMA, preparar um dossiê próprio para reagrupamento familiar ou outro tipo de autorização de residência', 'Para as Finanças, atualizar o estado civil, se isso influenciar o IRS', 'Para SNS, banco, empregador e seguradora, atualizar dados apenas após a alteração dos documentos ou quando exigido', 'Não confundir casamento com união de facto: são regimes de prova e efeitos distintos'] }
      ]
    }
  ],
  costs: [
    { label: 'Processo e registo de casamento civil', amountEUR: 120, note: 'Taxa base do IRN para casamento civil; serviços adicionais, convenção antenupcial ou cerimónia fora da Conservatória são pagos à parte.' },
    { label: 'Apostila em Portugal', amountEUR: 10.2, note: 'Referência por cada documento português; verifique a taxa atual junto da PGR/serviço emissor antes da entrega.' },
    { label: 'Certidão de casamento', amountEURMin: 10, amountEURMax: 20, note: 'Depende do formato e do canal de pedido; a certidão eletrónica e a certidão em papel podem ter preços diferentes.' },
    { label: 'Tradução certificada', amountEURMin: 25, amountEURMax: 60, note: 'Normalmente por página/documento; o preço depende do idioma, urgência e reconhecimento notarial.' }
  ],
  sources: [
    { title: 'Portal da Justiça: casamento civil e serviços de registo', url: 'https://justica.gov.pt/Servicos/Iniciar-processo-de-casamento', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'IRN: Registo Civil, casamento e certidões', url: 'https://irn.justica.gov.pt/Servicos/Cidadao/Casamento', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código do Registo Civil — procedimento do casamento e documentos estrangeiros', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1995-34509075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal da Justiça: pedido de certidão de casamento', url: 'https://justica.gov.pt/Servicos/Pedir-certidao-de-casamento', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
