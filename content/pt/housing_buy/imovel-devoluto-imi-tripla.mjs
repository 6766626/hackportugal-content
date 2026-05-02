export default {
  editorialVoice: 'hackportugal',
  id: 'imovel-devoluto-imi-tripla',
  categoryId: 'housing_buy',
  title: 'Imóvel devoluto: IMI triplo para habitação vazia ao abrigo do Mais Habitação',
  tldr: 'Desde 2023, o Mais Habitação reforçou a tributação sobre a habitação urbana vazia: se a Câmara Municipal reconhecer um imóvel devoluto — normalmente uma habitação vazia há >12 meses e sem consumo normal de água/eletricidade — a taxa de IMI é agravada ×3. Em zonas de pressão urbanística, o município pode aplicar um agravamento ainda mais severo. Em 2026, isto é um risco real para apartamentos comprados “para reserva”. Defesa: provar habitação, arrendamento, motivo legal para a não utilização ou renovação confirmada pela Câmara.',
  tags: ['imi', 'devoluto', 'habitação', 'mais-habitação'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-devoluto',
      title: 'O que é considerado imóvel devoluto',
      content: [
        { kind: 'paragraph', text: 'Imóvel devoluto é um prédio urbano ou uma fração autónoma que o município considera estar efetivamente vazio há mais de 1 ano. A base é o Decreto-Lei 159/2006 e o Código do IMI, alterado pela Lei 56/2023 no pacote Mais Habitação.' },
        { kind: 'paragraph', text: 'O simples facto de você ir lá raramente nem sempre significa, por si só, que o imóvel é devoluto. A Câmara Municipal tem de tomar uma decisão administrativa e notificar o proprietário. Mas o consumo baixo ou nulo de serviços públicos é o principal gatilho para fiscalização.' },
        { kind: 'checklist', items: [
          'A habitação está vazia há mais de 12 meses',
          'Não existem contratos ativos de água, eletricidade, gás ou telecomunicações',
          'Existem contratos, mas o consumo é anormalmente baixo',
          'Não há morador ou arrendatário registado',
          'Vizinhos, condomínio ou fiscalização confirmam a ausência de utilização',
          'O correio não é recolhido, o imóvel parece abandonado',
          'O apartamento foi comprado, mas não foi ocupado nem arrendado',
          'A casa está em mau estado e não é utilizada'
        ] }
      ]
    },
    {
      id: 'tax-effect',
      title: 'Quanto custa o erro: IMI ×3 e agravamentos locais',
      content: [
        { kind: 'paragraph', text: 'A taxa normal de IMI para habitação urbana em 2026 é fixada por cada município dentro do intervalo de 0,3–0,45% do VPT — valor patrimonial tributário. Se o imóvel for reconhecido como devoluto, a taxa é triplicada.' },
        { kind: 'paragraph', text: 'Exemplo: um apartamento com VPT de 200 000 € num município com taxa de 0,3% paga IMI normal de 600 € por ano. Após o estatuto de devoluto — 1 800 €. Com taxa de 0,45%, o IMI normal é 900 €, o triplo — 2 700 €.' },
        { kind: 'warning', text: 'Em zonas de pressão urbanística e em alguns casos previstos no Código do IMI após o Mais Habitação, o município pode aplicar um agravamento mais pesado do que o simples ×3. Verifique a deliberação anual da sua Câmara Municipal: as taxas e zonas diferem mesmo entre municípios vizinhos.' },
        { kind: 'paragraph', text: 'O IMI é apurado com base na situação do imóvel em 31 de dezembro do ano fiscal e é pago no ano seguinte: normalmente em maio e, para montantes acima dos limiares previstos, em prestações em maio, agosto e novembro. O AIMI é um imposto separado e não substitui o IMI.' }
      ]
    },
    {
      id: 'exceptions',
      title: 'Quando um apartamento vazio não deve ser considerado devoluto',
      content: [
        { kind: 'paragraph', text: 'A lei prevê situações em que um imóvel pode estar vazio, mas não deve ser qualificado como devoluto. É necessário prová-las com documentos, e não com explicações “de boca”.' },
        { kind: 'checklist', items: [
          'A habitação é utilizada como casa de férias ou segunda habitação para estadias sazonais',
          'O imóvel está vazio devido a obras de construção, reconstrução, ampliação ou renovação, confirmadas pela Câmara Municipal',
          'Existe licença, comunicação prévia ou outro documento municipal relativo às obras',
          'O imóvel foi recentemente construído ou acabou de se tornar apto para utilização',
          'Está em curso um litígio judicial ou um procedimento administrativo que impede objetivamente a utilização',
          'A habitação destina-se a descanso de curta duração numa situação legalmente admissível',
          'O proprietário encontra-se temporariamente no estrangeiro por funções profissionais ou públicas, se aplicável',
          'Existe contrato de arrendamento, comodato ou outra utilização legal em vigor',
          'O baixo consumo é explicado documentalmente: reparação, avaria, ausência de contador, corte devido a obras'
        ] },
        { kind: 'warning', text: 'Para proprietários expat, o risco mais comum é “compraram o apartamento antes da mudança, mas durante um ano não fizeram nada”. A intenção de se mudar mais tarde, por si só, é normalmente um argumento fraco. São necessárias provas: obras, anúncio de arrendamento, estadias efetivas, faturas, seguro, condomínio, correspondência com empreiteiros.' }
      ]
    },
    {
      id: 'renovation-defense',
      title: 'Renovação: como proteger um imóvel em obras',
      content: [
        { kind: 'paragraph', text: 'Se a habitação está vazia devido a obras, não espere pela carta da Câmara. Prepare o dossiê com antecedência e, se as obras forem substanciais, formalize-as através do procedimento municipal: licença, comunicação prévia ou, pelo menos, confirmação escrita do regime aplicável.' },
        { kind: 'checklist', items: [
          'Documento da Câmara Municipal sobre licenciamento, comunicação prévia ou dispensa de controlo prévio',
          'Projeto, memória descritiva, termo de responsabilidade técnico, se aplicável',
          'Contratos com empreiteiro, arquiteto, engenheiro, fiscal de obra',
          'Faturas-recibo e pagamentos bancários de materiais e obras',
          'Fotografias “antes/durante/depois” com datas',
          'Livro de obra, autos de vistoria, emails com a Câmara ou empreiteiros',
          'Provas de corte de água/eletricidade precisamente devido às obras',
          'Seguro de obra ou seguro multirriscos, se existir',
          'Requerimento à Câmara a pedir que o imóvel não seja qualificado como devoluto devido a renovação'
        ] },
        { kind: 'paragraph', text: 'Se a renovação durar mais de 12 meses, o dossiê deve mostrar que as obras são reais e continuam, e que não são um pretexto fictício. Isto é especialmente importante em Lisboa, Porto, Cascais, Oeiras e outros mercados com pressão sobre a habitação.' }
      ]
    },
    {
      id: 'how-to-contest',
      title: 'Como contestar a decisão da Câmara e o imposto',
      content: [
        { kind: 'paragraph', text: 'O processo normalmente não começa nas Finanças, mas na Câmara Municipal. O município identifica o imóvel, notifica o proprietário e dá a possibilidade de audiência prévia — apresentar posição e documentos antes da decisão final.' },
        { kind: 'checklist', items: [
          'Não ignore a carta da Câmara: o prazo de resposta é normalmente curto, muitas vezes 10 dias úteis segundo as regras do procedimento administrativo',
          'Verifique quem recebeu a notificação: proprietário, cabeça de casal, administrador, advogado, representante fiscal',
          'Peça cópia do fundamento: relatório de fiscalização, dados dos serviços públicos, fotografias, informações do condomínio',
          'Apresente resposta à audiência prévia com provas de habitação, arrendamento, obras ou motivo legal para a vacância',
          'Peça vistoria ou nova verificação se o imóvel já estiver a ser utilizado',
          'Se a decisão se tornou definitiva, apresente administrative appeal/recurso ou ação administrativa consoante a fase',
          'Quando chegar o IMI com agravamento, apresente separadamente reclamação graciosa nas Finanças dentro do prazo, porque o ato tributário já é autónomo',
          'Guarde comprovativo de envio através de balcão, email certificado, CTT registado ou portal do município'
        ] },
        { kind: 'warning', text: 'Não se deve esperar apenas pela nota de cobrança de IMI. Se o ato municipal sobre o devoluto já tiver produzido efeitos, contestar mais tarde é mais difícil: as Finanças normalmente aplicam a informação recebida da Câmara.' }
      ]
    },
    {
      id: 'practical-prevention',
      title: 'Prevenção para o proprietário expat',
      content: [
        { kind: 'paragraph', text: 'Se comprou habitação em Portugal e não vive nela de forma permanente, torne o imóvel “explicável” para a Câmara. O objetivo é que, pelos documentos, seja visível: isto não é uma habitação abandonada, mas um imóvel utilizado, em renovação ou legalmente a aguardar ocupação.' },
        { kind: 'checklist', items: [
          'Ligue a água e a eletricidade em seu nome ou em nome do arrendatário',
          'Guarde faturas com consumo real, ainda que reduzido',
          'Formalize o contrato de arrendamento e registe-o no Portal das Finanças, se arrendar',
          'Se utilizar como segunda habitação — guarde bilhetes, despesas, faturas, seguro, condomínio',
          'Comunique ao administrador do condomínio um contacto atualizado',
          'Não deixe o imóvel com aspeto exterior de abandono: correio, estores, infiltrações, fachada',
          'Em caso de obras, trate antecipadamente dos documentos municipais',
          'Verifique o correio na morada do imóvel e na ViaCTT/Portal das Finanças',
          'Antes de comprar um imóvel vazio, pergunte ao vendedor sobre o estatuto de devoluto e dívidas de IMI',
          'Uma vez por ano, verifique a deliberação de taxas de IMI da sua Câmara Municipal'
        ] },
        { kind: 'paragraph', text: 'Para o comprador, é importante: o IMI triplo está ligado ao imóvel e ao seu estatuto num ano fiscal concreto. Na escritura, peça certidão predial, caderneta predial, declaração de inexistência de dívidas e declarações escritas do vendedor de que o imóvel não foi reconhecido como devoluto.' }
      ]
    }
  ],
  costs: [
    { label: 'IMI normal com VPT de 200 000 € e taxa de 0,3%', amountEUR: 600, note: 'Exemplo: 200 000 € × 0,3%.' },
    { label: 'IMI ×3 para o mesmo imóvel', amountEUR: 1800, note: 'Exemplo após o reconhecimento como imóvel devoluto.' },
    { label: 'IMI normal com VPT de 200 000 € e taxa de 0,45%', amountEUR: 900, note: 'Taxa municipal normal máxima para habitação urbana.' },
    { label: 'IMI ×3 com taxa de 0,45%', amountEUR: 2700, note: 'Sem considerar possíveis agravamentos adicionais em zonas especiais.' }
  ],
  sources: [
    {
      title: 'Lei 56/2023 — Mais Habitação, alterações ao regime da habitação e ao IMI',
      url: 'https://dre.pt/dre/detalhe/lei/56-2023-218862887',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IMI — taxas de IMI e agravamento para prédios devolutos',
      url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2003-34562575',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei 159/2006 — conceito de prédio devoluto',
      url: 'https://dre.pt/dre/detalhe/decreto-lei/159-2006-540847',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças — IMI: informação ao contribuinte',
      url: 'https://www.portaldasfinancas.gov.pt/at/html/index.html',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
