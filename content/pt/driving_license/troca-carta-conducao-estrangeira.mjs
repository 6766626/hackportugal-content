export default {
  editorialVoice: 'hackportugal',
  id: 'troca-carta-conducao-estrangeira',
  categoryId: 'driving_license',
  title: 'Trocar a carta de condução estrangeira por uma portuguesa (troca de carta no IMT)',
  tldr: 'Se passou a ser residente em Portugal, mais cedo ou mais tarde tem de trocar a carta de condução estrangeira por uma portuguesa no IMT. Desde 21.01.2026 a troca submete-se APENAS online — já não existe atendimento presencial para este serviço. As cartas da UE/EEE e de países com acordo trocam-se sem exame (o prazo é, normalmente, até 2 anos após a obtenção da residência); as cartas de países sem convenção exigem o exame de condução português. É preciso um atestado médico eletrónico (o médico envia-o ao IMT diretamente) e, para as categorias C/D, ainda uma avaliação psicológica. A troca custa 30 € e a carta final chega, em média, em 60 dias. Confirme as regras exatas para o seu país em imt-ip.pt.\n\nDesde 09.06.2026 (Decreto-Lei 114/2026): aos cidadãos extracomunitários a carta é emitida com validade não superior à do visto/autorização de residência, com o código de restrição 794 averbado. A carta mantém-se válida enquanto o título estiver válido ou em renovação.',
  tags: ['carta de condução', 'carta', 'IMT', 'troca'],
  estimatedReadMinutes: 7,
  recentlyChangedAt: '2026-07-07',
  changeSummary: '🚗 Decreto-Lei 114/2026 (em vigor desde 09.06.2026): para cidadãos extracomunitários, a validade da carta portuguesa fica limitada à validade do visto/autorização de residência, com o código 794 averbado. A carta mantém-se válida enquanto o título estiver válido ou em renovação. A regra estende-se às cartas já emitidas (sem código 794, mas com verificação do estatuto de residência).',
  steps: [
    {
      id: 'who-must',
      title: 'Quem tem de trocar e quando',
      content: [
        { kind: 'paragraph', text: 'O turista e quem está em Portugal temporariamente não precisa de trocar a carta: com uma carta estrangeira válida, normalmente pode conduzir como não residente. A obrigação de trocar surge quando passa a ser residente (obtém autorização de residência/registo).' },
        { kind: 'checklist', items: [
          '🇪🇺 Cartas da UE/EEE: são válidas em Portugal, mas, como residente, tem de as registar/trocar — normalmente até 2 anos após a obtenção da residência.',
          '🤝 Países com acordo/convenção (incluindo vários países da CPLP): troca sem exame de condução, dentro do prazo estabelecido.',
          '🌍 Países sem convenção: a carta só se troca com a realização do exame de condução português (e, por vezes, também o teórico).',
          '⏳ O não residente pode conduzir temporariamente com a carta estrangeira; assim que passa a residente, tem de a trocar dentro do prazo estabelecido.',
          '🛑 Uma carta estrangeira caducada não se troca — primeiro teria de a revalidar no país emissor.'
        ] },
        { kind: 'warning', text: 'As regras e os prazos dependem muito do país que emitiu a carta. Confirme o seu país e o prazo exato no IMT (imt-ip.pt) — não confie em conselhos de grupos de conversa.' }
      ]
    },
    {
      id: 'validity-dl114',
      title: 'Desde 09.06.2026: validade da carta ligada ao título de residência',
      content: [
        { kind: 'paragraph', text: 'O Decreto-Lei n.º 114/2026 (em vigor desde 9 de junho de 2026) alterou as regras para cidadãos extracomunitários: a carta de condução portuguesa passa a ser emitida com validade não superior à do visto ou da autorização de residência (art. 16.º n.º 9 do RHLC). Os habituais 15 anos de validade só se aplicam a quem tem direito de residência sem limite de prazo; para os restantes, a data da carta é reduzida à data do documento de residência.' },
        { kind: 'checklist', items: [
          'É averbado na carta o código de restrição 794: «validade limitada à comprovação de visto ou autorização de residência válido ou em processo de renovação».',
          'A carta mantém-se válida enquanto o título de residência estiver válido OU em processo de renovação: um cartão caducado com renovação pedida a tempo não anula a carta.',
          'Mas a prova do estado de renovação cabe-lhe a si — guarde o comprovativo do pedido de renovação e os documentos digitais da AIMA.',
          'Regime transitório (art. 4.º): a regra aplica-se também às cartas emitidas antes de 9 de junho de 2026. O código 794 não é averbado nessas cartas, mas a validade do visto/autorização pode ser verificada separadamente — a data no plástico deixou de ser o único critério.',
          'O texto da lei não prevê exceções para a residência permanente nem para cidadãos da CPLP: a regra abrange todos os cidadãos extracomunitários com visto ou autorização de residência. Só os cidadãos da UE/EEE ficam de fora.',
          'Como funcionará na prática para as cartas antigas (fiscalização na estrada, aluguer de carro, seguros) a lei não esclarece; acompanhe as orientações do IMT.'
        ] },
        { kind: 'warning', text: 'Conclusão prática: renove a autorização de residência a tempo e guarde o comprovativo da renovação. O estatuto de residência passa a determinar não só o direito de viver no país, mas também a validade da carta de condução.' }
      ]
    },
    {
      id: 'online-only',
      title: 'Desde 21.01.2026 — apenas online',
      content: [
        { kind: 'paragraph', text: 'Desde 21 de janeiro de 2026, os pedidos de troca de carta estrangeira submetem-se exclusivamente online. O atendimento presencial no IMT para este serviço foi extinto, pelo que todo o processo decorre pela internet com identificação eletrónica.' },
        { kind: 'checklist', items: [
          'A entrada faz-se, normalmente, através da Chave Móvel Digital ou de outra identificação eletrónica aceite.',
          'Vai precisar de uma digitalização/foto da carta estrangeira (por vezes com tradução certificada — confirme conforme o seu país).',
          'Morada atualizada: é para lá que será enviada a carta portuguesa final.',
          'Foto e assinatura — conforme as exigências do serviço (muitas vezes retiradas do Cartão de Cidadão ou carregadas).',
          'Na troca, a carta estrangeira é, em regra, recolhida/anulada no país emissor — tenha isto em conta antes de viajar.'
        ] }
      ]
    },
    {
      id: 'medical',
      title: 'Atestado médico e avaliação psicológica',
      content: [
        { kind: 'paragraph', text: 'Para a troca é preciso um atestado médico em formato eletrónico: o médico passa-o e envia-o ele próprio ao IMT pela internet — não há papel para andar a transportar.' },
        { kind: 'checklist', items: [
          'Encontre um médico (médico de família, clínica privada ou centro que faça o atestado para carta) e faça o exame.',
          'O médico envia o atestado médico eletrónico diretamente ao IMT — confirme que o fez.',
          'Para as categorias do Grupo 2 (C1, C1E, C, CE, D, D1, D1E, DE) é ainda necessário o certificado de avaliação psicológica.',
          'Se houver limitações de saúde, a carta pode ficar com os códigos/condições correspondentes.'
        ] }
      ]
    },
    {
      id: 'cost-time',
      title: 'Prazos e custo',
      content: [
        { kind: 'checklist', items: [
          '💶 Troca da carta — 30 €.',
          '💶 Se for preciso exame de condução (países sem convenção) — mais cerca de 30 € pelo exame, além de possíveis despesas com escola/instrutor.',
          '🗓️ A carta portuguesa final chega, em média, em 60 dias; mais tempo, se for preciso exame prático.',
          '🚗 Enquanto espera: confirme no IMT com que documento pode conduzir legalmente no período de transição — isso depende da situação.',
          '📍 A carta chega pelo correio à morada indicada; mantenha a morada atualizada.'
        ] }
      ]
    },
    {
      id: 'practical',
      title: 'Na prática e erros frequentes',
      content: [
        { kind: 'checklist', items: [
          'Não deixe para o último dia do prazo: o exame médico, a tradução e o processamento levam tempo.',
          'Faça cópias da carta estrangeira antes da troca — o original é recolhido.',
          'Se a carta estiver numa língua que não o português/inglês, confirme com antecedência a tradução certificada.',
          'Verifique se não tem coimas por pagar e se os dados (nome, data de nascimento) coincidem em todos os documentos.',
          'Para a condução profissional (táxi/TVDE, camiões, autocarros) há requisitos próprios — CAM, categorias do Grupo 2.',
          'Todos os passos oficiais fazem-se através de imt-ip.pt e gov.pt; não pague a intermediários para «acelerar» sem necessidade.'
        ] },
        { kind: 'paragraph', text: 'Guias relacionados: sobre a tradução certificada de documentos e sobre os requisitos profissionais dos condutores (CAM, IMT) — nas categorias respetivas.' }
      ]
    }
  ],
  sources: [
    {
      title: 'gov.pt — Trocar carta de condução estrangeira por portuguesa',
      url: 'https://www.gov.pt/servicos/trocar-carta-de-conducao-estrangeira-por-portuguesa',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-06-23'
    },
    {
      title: 'IMT — Troca de Título de Condução Estrangeiro',
      url: 'https://www.imt-ip.pt/condutores/reconhecimento/troca-de-titulo-de-conducao-estrangeiro/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-06-23'
    },
    {
      title: 'IMT — revalidação e informações gerais para condutores',
      url: 'https://www.imt-ip.pt/condutores/informacoes-gerais/quero-ser-condutor/revalidacao-da-carta-de-conducao/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-06-23'
    },
    {
      title: 'Decreto-Lei n.º 114/2026 — 7.ª alteração ao RHLC (validade da carta ligada ao título de residência, código 794)',
      url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/114-2026-1130121307',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-07-08'
    }
  ],
  lastVerified: '2026-07-08',
  verifyIntervalDays: 180
}
