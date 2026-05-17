export default {
  editorialVoice: 'hackportugal',
  id: 'imovel-urbano-vs-rustico',
  categoryId: 'housing_buy',
  title: 'Imóvel urbano vs rústico: IMI, impostos e licenças',
  tldr: 'Em Portugal, um prédio urbano é uma casa, apartamento, terreno para construção ou imóvel com finalidade urbana; um prédio rústico é terreno agrícola/florestal. O IMI é diferente: urbano normalmente 0,3–0,45% do VPT por ano, rústico — 0,8%. Mas o principal risco não é a taxa, é o direito de construir: em rústico muitas vezes não é possível construir habitação sem compatibilidade com o PDM/PDI, RAN/REN, ICNF e licença da Câmara Municipal. O IUC não se aplica ao terreno: é um imposto sobre veículos. Antes da compra, verifique a caderneta predial, a certidão permanente, o PDM e as restrições.',
  tags: ['imi', 'rústico', 'urbano', 'pdm', 'compra'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'definitions',
      title: '1. O que significam urbano, rústico e misto',
      content: [
        { kind: 'paragraph', text: 'A classificação do imóvel nas Finanças chama-se natureza do prédio. Está visível na caderneta predial e influencia o IMI, a avaliação do VPT, o IMT na compra e as acções permitidas sobre o terreno.' },
        { kind: 'checklist', items: [
          'Prédio urbano — apartamento, casa, espaço comercial, armazém, imóvel industrial, bem como terreno para construção.',
          'Prédio rústico — terreno com finalidade agrícola ou florestal, em que o rendimento se presume proveniente da terra e não do edifício.',
          'Prédio misto — um único imóvel contém partes rústica e urbana: por exemplo, casa + terreno agrícola no mesmo registo.',
          'VPT — valor patrimonial tributário, valor fiscal nas Finanças; é com base nele que se calcula o IMI.',
          'Caderneta predial — ficha do imóvel nas Finanças: natureza, VPT, área, proprietário, artigo matricial.',
          'Certidão permanente do registo predial — registo na Conservatória: proprietário, hipoteca, servidões, arrestos.',
          'Descrição predial e artigo matricial — não são a mesma coisa: a primeira é o registo na Conservatória, o segundo é o registo fiscal nas Finanças.',
          'A publicidade como “quinta”, “monte”, “ruína” ou “terreno com viabilidade” não prova nada sem PDM/PDI e informação escrita da Câmara Municipal.'
        ] },
        { kind: 'warning', text: 'Se o anúncio disser “rústico com ruína”, isso não significa que seja possível recuperar a casa para habitação. A ruína pode não ter uma licença de utilização legal, estar fora do perímetro urbano ou situar-se em RAN/REN/zona ICNF.' }
      ]
    },
    {
      id: 'taxes',
      title: '2. Impostos: IMI, IMT, IS, AIMI e onde entra o IUC',
      content: [
        { kind: 'paragraph', text: 'A principal diferença regular é o IMI. Para urbano, a taxa é fixada pela Câmara Municipal entre 0,3–0,45% do VPT por ano. Para rústico, a taxa é fixa — 0,8% do VPT. O pagamento chega através do Portal das Finanças normalmente em Maio; quando o valor é superior a 100 €, podem existir 2–3 prestações segundo o calendário das Finanças.' },
        { kind: 'checklist', items: [
          'IMI urbano: 0,3–0,45% do VPT; verifique a taxa concreta por concelho no Portal das Finanças.',
          'IMI rústico: 0,8% do VPT.',
          'IMT na compra de habitação urbana para habitação própria e permanente — tabela progressiva; para segunda habitação/investimento, a tabela é diferente.',
          'IMT para prédio rústico normalmente 5% sobre o preço da transacção ou VPT, aplicando-se o valor mais elevado.',
          'IMT para outros prédios urbanos, que não sejam habitação própria e permanente, muitas vezes 6,5%.',
          'Imposto do Selo na compra de imóveis — 0,8% sobre o preço/VPT, aplicando-se o valor mais elevado.',
          'AIMI aplica-se a património imobiliário urbano de valor elevado: normalmente à soma do VPT urbano habitacional e terrenos para construção acima de 600 000 € por pessoa; rústico normalmente não entra na base do AIMI.',
          'IRS/IRC na venda: a mais-valia calcula-se não pela palavra urbano/rústico, mas pelo preço de compra, preço de venda, despesas, estatuto de residência fiscal e prazos.',
          'IUC — é o imposto sobre automóveis, motociclos, barcos e alguns veículos. Não é um imposto sobre imóvel e não se paga por terreno ou casa.',
          'Tractor, reboque ou maquinaria agrícola podem ter as suas próprias regras de registo/transporte, mas isso é separado do IMI sobre o terreno.'
        ] },
        { kind: 'warning', text: 'O IMI baixo num rústico não compensa o risco se comprar terreno “para uma casa” e a Câmara Municipal não confirmar o direito de construção. A perda pode não ser fiscal, mas jurídica: o imóvel continuará a ser terreno agrícola sem habitação.' }
      ]
    },
    {
      id: 'construction',
      title: '3. É possível construir em rústico',
      content: [
        { kind: 'paragraph', text: 'Quem decide não são as Finanças, mas o ordenamento do território: PDM ou PDI, planta de ordenamento, planta de condicionantes, RAN, REN, ICNF, Rede Natura 2000, restrições de incêndio e regras da Câmara Municipal. A classificação fiscal rústico é apenas um sinal, mas não a resposta completa.' },
        { kind: 'checklist', items: [
          'Peça ao vendedor a caderneta predial, certidão permanente, planta cadastral e quaisquer licenças antigas.',
          'Verifique o PDM/PDI no site da Câmara Municipal: categoria do solo, perímetro urbano, espaços agrícolas, florestais, naturais, industriais.',
          'Verifique a planta de condicionantes: RAN, REN, servidões administrativas, domínio hídrico, linhas eléctricas, estradas, zonas de protecção.',
          'Se o terreno for florestal ou estiver em zona de risco elevado de incêndio, verifique o ICNF e as regras municipais de gestão de combustível.',
          'Para construir é necessário um projeto, submetido por arquitecto/engenheiro, e licença ou comunicação prévia na Câmara Municipal.',
          'A “viabilidade de construção” deve ser obtida por escrito: pedido de informação prévia (PIP) ou informação urbanística oficial.',
          'A recuperação de uma ruína pode ser mais simples do que construção nova, apenas se existir prova da legalidade da construção existente e do uso permitido.',
          'Furo, fossa séptica, acesso, electricidade e abastecimento de água exigem verificações separadas; a existência de ligação do vizinho não lhe dá um direito automático.',
          'Casa móvel, tiny house, caravan ou contentor nem sempre contornam as regras: se houver instalação permanente, ligações e uso habitacional, a Câmara pode considerar isso uma operação urbanística.'
        ] },
        { kind: 'warning', text: 'Comprar rústico com a promessa verbal do agente “depois muda para urbano” é um sinal de alerta. A alteração da classificação depende do PDM/PDI, dos procedimentos da Câmara Municipal e, por vezes, de restrições regionais/nacionais. Não se faz com uma simples declaração nas Finanças.' }
      ]
    },
    {
      id: 'due-diligence',
      title: '4. Verificação antes do CPCV e da escritura',
      content: [
        { kind: 'paragraph', text: 'Para um comprador expat, a lógica segura é esta: primeiro verificar a propriedade e as restrições, depois os impostos, e só depois assinar o CPCV. Isto é especialmente importante em imóveis rurais, onde limites, acessos e construções são muitas vezes descritos pior do que na cidade.' },
        { kind: 'checklist', items: [
          'Compare o vendedor na certidão permanente com a pessoa que assina o CPCV.',
          'Verifique se existem hipoteca, penhora, arresto, usufruto, direito de preferência, servidão de passagem.',
          'Compare a área na caderneta predial, Conservatória, cadastro e a área real no mapa; divergências são uma fonte comum de litígios.',
          'Verifique o acesso: estrada pública ou apenas servidão através de vizinhos; um acordo verbal não equivale a um direito registado.',
          'Peça a licença de utilização para a casa existente ou confirmação de dispensa para imóveis antigos.',
          'Verifique se o imóvel não é AUGI, construção ilegal ou parte de uma herança não regularizada.',
          'Peça a dívida de condomínio, se for urbano em edifício ou condomínio fechado.',
          'Verifique atrasos de IMI: as dívidas do vendedor não devem passar para si, mas podem complicar a transacção.',
          'Para terreno agrícola, verifique direitos de arrendatários, vizinhos, comunidades baldios e eventuais direitos de preferência.',
          'No CPCV, inclua uma condição de devolução do sinal se o PIP/informação urbanística confirmar a impossibilidade do uso anunciado.',
          'Não transfira um sinal elevado sem verificação por advogado ou solicitador, sobretudo se comprar à distância.'
        ] }
      ]
    },
    {
      id: 'agricultor-familiar',
      title: '5. Agricultor familiar: útil, mas não uma “isenção mágica”',
      content: [
        { kind: 'paragraph', text: 'O Estatuto da Agricultura Familiar é um regime para pequenas explorações familiares. Pode dar acesso a programas de apoio, prioridades e algumas simplificações administrativas, mas por si só não transforma rústico em urbano nem confere direito automático a construir uma casa.' },
        { kind: 'checklist', items: [
          'O estatuto é pedido através dos serviços agrícolas competentes, normalmente ligado a uma exploração agrícola.',
          'São necessárias provas de actividade agrícola real, não apenas a propriedade de um terreno.',
          'Os rendimentos da família, o volume de trabalho e a estrutura da exploração são relevantes; os critérios são verificados segundo as regras em vigor.',
          'O estatuto pode ser útil para subsídios, mercados locais, cadeias curtas de abastecimento e programas de desenvolvimento rural.',
          'Para construção de habitação, continuam a decidir o PDM/PDI, a Câmara Municipal, RAN/REN e outras restrições.',
          'Se o objectivo for viver no terreno, esclareça previamente a admissibilidade de habitação do agricultor ou apoio agrícola precisamente nessa zona.',
          'Construção agrícola, armazém agrícola ou apoio agrícola não equivalem a casa de habitação: não é permitido mudar o uso sem licença.'
        ] },
        { kind: 'warning', text: 'Não compre rústico apenas porque o vendedor diz “faz o agricultor familiar e constrói”. Peça parecer escrito da Câmara Municipal e verifique os regimes RAN/REN/ICNF antes da transacção.' }
      ]
    },
    {
      id: 'conversion',
      title: '6. Como rústico passa a urbano',
      content: [
        { kind: 'paragraph', text: 'Na prática há dois processos diferentes: a autorização urbanística de uso/construção e a actualização fiscal nas Finanças. As Finanças não legalizam construções — apenas reflectem o imóvel na matriz depois do facto ou após documentos da Câmara Municipal.' },
        { kind: 'checklist', items: [
          'Primeiro verifique o PDM/PDI: a zona permite uso urbano ou construção do tipo concreto.',
          'Se precisar de uma posição prévia, submeta um PIP na Câmara Municipal.',
          'Se o projecto for admissível, o arquitecto submete o projeto de arquitetura e especialidades; a Câmara emite a licença ou aceita a comunicação prévia.',
          'Depois da conclusão das obras, é emitida a autorização de utilização, se aplicável.',
          'Depois submete-se o Modelo 1 do IMI nas Finanças para actualizar a matriz e o VPT.',
          'A alteração do VPT pode aumentar o IMI: rústico com VPT baixo, depois de uma casa legal, passa a urbano com nova avaliação.',
          'A alteração em massa de uma zona de rústico para urbano é possível através da alteração do PDM/PDI, mas é um processo político-administrativo, não um “pedido do comprador” individual.',
          'Se a casa foi construída ilegalmente, a legalização nem sempre é possível; coimas e ordem de demolição são reais.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'IMI urbano', amountEURMin: 0, amountEURMax: 0, note: '0,3–0,45% do VPT por ano; a taxa depende do município, o valor em euros é calculado individualmente.' },
    { label: 'IMI rústico', amountEURMin: 0, amountEURMax: 0, note: '0,8% do VPT por ano.' },
    { label: 'IMT na compra de prédio rústico', amountEURMin: 0, amountEURMax: 0, note: 'Normalmente 5% do preço da transacção ou VPT, aplicando-se o valor mais elevado.' },
    { label: 'Imposto do Selo na compra', amountEURMin: 0, amountEURMax: 0, note: '0,8% do preço da transacção ou VPT, aplicando-se o valor mais elevado.' },
    { label: 'Pedido de informação prévia / informação urbanística', amountEURMin: 20, amountEURMax: 300, note: 'As taxas municipais variam conforme a Câmara Municipal e o tipo de pedido.' }
  ],
  sources: [
    {
      title: 'Portal das Finanças: IMI, taxas municipais e informação matricial',
      url: 'https://info.portaldasfinancas.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IMI: classificação de prédio rústico, urbano e misto',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2003-34500175',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ICNF: condicionantes ambientais, floresta, Rede Natura e gestão de combustível',
      url: 'https://www.icnf.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Regime jurídico dos instrumentos de gestão territorial: PDM/PDI e ordenamento do território',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2015-66785843',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
