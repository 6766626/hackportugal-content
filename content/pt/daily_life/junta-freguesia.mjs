export default {
  editorialVoice: 'hackportugal',
  id: 'junta-freguesia',
  categoryId: 'digital_gov',
  title: 'Junta de Freguesia — o que é e que serviços presta',
  tldr: 'A Junta de Freguesia é um órgão local de autarquia, semelhante a uma administração de bairro ou de pequena localidade. Emite o atestado de residência (comprovativo de morada, necessário para AIMA/SNS), emite declarações relativas à união de facto, trata de questões de manutenção das ruas da zona e organiza actividades para reformados e crianças.',
  tags: ['junta', 'freguesia', 'atestado', 'administração local'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'what',
      title: 'O que é uma Junta',
      content: [
        { kind: 'paragraph', text: 'Portugal divide-se administrativamente assim: distrito → concelho (município, Câmara Municipal) → freguesia. A Junta de Freguesia é o órgão executivo da freguesia. Em Lisboa existem 24 freguesias, no Porto 7.' },
        { kind: 'paragraph', text: 'A Junta é o órgão de poder público mais próximo do residente. Normalmente fica perto de casa, tem filas mais curtas e um atendimento mais humano.' }
      ]
    },
    {
      id: 'services',
      title: 'Que serviços presta',
      content: [
        { kind: 'checklist', items: [
          'Atestado de Residência (comprovativo de morada) — confirma que você vive naquela morada (para AIMA, SNS, escola, banco, embaixada)',
          'Atestado de Agregado Familiar — comprovativo da composição do agregado familiar',
          'Atestado de Condição Económica — comprovativo da situação económica para apoio social',
          'Declaração de União de Facto — a Junta emite apenas uma declaração comprovativa (o estatuto jurídico de união de facto surge por força da lei quando estão reunidas as condições, não exige “registo”)',
          'Autenticação de cópias — certificação de cópias de documentos',
          'Atestado de Incapacidade Económica — para apoio judiciário gratuito',
          'Recenseamento Eleitoral — para cidadãos portugueses, a inscrição nos cadernos eleitorais é normalmente automática (com Cartão de Cidadão); para estrangeiros com direito de voto, é necessário apresentar pedido na Junta',
          'Registo de Cidadão Europeu (CRUE) — para cidadãos da UE, é solicitado na Câmara Municipal da área de residência (algumas Junta podem aceitar pedidos delegados)',
          'Autorizações para obras ruidosas e remoção de resíduos de construção',
          'Actividades culturais — concertos, cursos, workshops'
        ]}
      ]
    },
    {
      id: 'atestado',
      title: 'Como obter o Atestado de Residência',
      content: [
        { kind: 'substeps', items: [
          { id: 'a1', title: '1. Documentos', content: [
            { kind: 'checklist', items: [
              'Passaporte / autorização de residência / Cartão de Cidadão',
              'Comprovativo de residência: contrato de arrendamento / factura de serviços públicos / IRS com morada',
              '2 testemunhas-vizinhos (portugueses ou titulares de Cartão de Cidadão) — AMBAS PODEM TER DE COMPARECER PRESENCIALMENTE em algumas Junta de Freguesia',
              'Algumas Junta de Freguesia aceitam simplesmente uma declaração assinada pelos moradores do prédio'
            ]}
          ]},
          { id: 'a2', title: '2. Ir à Junta de Freguesia', content: [
            { kind: 'paragraph', text: 'Sem marcação, normalmente a fila demora 10-30 minutos. Funcionam das 9:00 às 17:00, com almoço das 12:30 às 14:00.' }
          ]},
          { id: 'a3', title: '3. Receber o atestado de imediato', content: [
            { kind: 'paragraph', text: 'É emitido no próprio dia, 2–5 €. O Atestado confirma o facto na data de emissão; o prazo de aceitabilidade (por exemplo, 90 dias) é normalmente definido pela entidade que o recebe (banco, AIMA, SNS), e não pela Junta.' }
          ]}
        ]}
      ]
    },
    {
      id: 'find',
      title: 'Como encontrar a sua Junta de Freguesia',
      content: [
        { kind: 'paragraph', text: 'Pela morada:' },
        { kind: 'checklist', items: [
          'Pesquisa no site do município: “Junta de Freguesia” + a sua zona',
          'ANAFRE — associação de todas as Junta de Freguesia: anafre.pt',
          'Em Lisboa: Olivais, Lumiar, Marvila, Alvalade, Campolide, etc.',
          'No Porto: União de Freguesias do Centro Histórico, Aldoar-Foz-Nevogilde, etc.'
        ]}
      ]
    },
    {
      id: 'extra',
      title: 'Opções adicionais',
      content: [
        { kind: 'checklist', items: [
          'Em algumas Junta de Freguesia há cursos gratuitos de língua portuguesa',
          'Campos de férias para crianças (férias ativas) — económicos, 50–100 € por semana',
          'Ginástica gratuita para reformados (Movimento é Saúde)',
          'Bibliotecas e salas de leitura',
          'Consulta jurídica uma vez por mês (Gabinete Jurídico)',
          'Felicitações pelo 80.º aniversário, pelo nascimento de uma criança'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'ANAFRE — Associação Nacional de Freguesias', url: 'https://www.anafre.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'CML — Juntas de Freguesia de Lisboa', url: 'https://www.lisboa.pt/municipio/juntas-de-freguesia', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'CM-Porto — Juntas de Freguesia', url: 'https://www.cm-porto.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
