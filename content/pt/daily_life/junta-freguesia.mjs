export default {
  editorialVoice: 'hackportugal',
  id: 'junta-freguesia',
  categoryId: 'digital_gov',
  title: 'Junta de Freguesia — o que é e que serviços presta',
  tldr: 'Junta de Freguesia (jun­ta-fre­gue­sia) — órgão local de autarquia, aproximadamente como uma administração de bairro. Emite o Atestado de Residência (comprovativo de residência, necessário para AIMA/SNS), regista a união de facto, trata de questões de manutenção das ruas do bairro e organiza atividades para pensionistas e crianças.',
  tags: ['junta', 'freguesia', 'atestado', 'administração local'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'what',
      title: 'O que é a Junta',
      content: [
        { kind: 'paragraph', text: 'Portugal divide-se administrativamente assim: distrito → concelho (município, Câmara Municipal) → freguesia (paróquia). A Junta de Freguesia é o órgão executivo da freguesia. Em Lisboa há 24 freguesias, no Porto há 7.' },
        { kind: 'paragraph', text: 'A Junta é a autoridade mais próxima do residente. Normalmente situa-se perto de casa, com filas curtas e um atendimento mais humano.' }
      ]
    },
    {
      id: 'services',
      title: 'Que serviços presta',
      content: [
        { kind: 'checklist', items: [
          'Atestado de Residência (comprovativo de morada) — confirma que reside nesse endereço (para AIMA, SNS, escola, banco, embaixada)',
          'Atestado de Agregado Familiar — comprovativo da composição do agregado',
          'Atestado de Condição Económica — comprovativo da situação económica para apoio social',
          'Registo de União de Facto — formalização da união de facto',
          'Autenticação de cópias — certificação de cópias de documentos',
          'Atestado de Incapacidade Económica — para acesso ao apoio judiciário gratuito',
          'Recenseamento Eleitoral — inscrição nos cadernos eleitorais para titulares de Cartão de Cidadão',
          'Registo de Cidadão Europeu (CRUE) — em algumas Juntas de Freguesia',
          'Licenças para obras ruidosas e remoção de entulho',
          'Atividades culturais — concertos, cursos, workshops'
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
              'Comprovativo de morada: contrato de arrendamento / fatura de serviços / IRS com morada',
              '2 testemunhas-vizinhos (portugueses ou titulares de Cartão de Cidadão) — AMBAS TÊM DE ESTAR PRESENTES pessoalmente em algumas Juntas de Freguesia',
              'Algumas Juntas de Freguesia aceitam uma simples declaração assinada pelos moradores do edifício'
            ]}
          ]},
          { id: 'a2', title: '2. Ir à Junta de Freguesia', content: [
            { kind: 'paragraph', text: 'Sem marcação, normalmente fila de 10–30 minutos. Funcionam 9:00–17:00, almoço 12:30–14:00.' }
          ]},
          { id: 'a3', title: '3. Obter o atestado na hora', content: [
            { kind: 'paragraph', text: 'É emitido no próprio dia, 2–5 €. Tem validade de 90 dias.' }
          ]}
        ]}
      ]
    },
    {
      id: 'find',
      title: 'Como encontrar a sua Junta de Freguesia',
      content: [
        { kind: 'paragraph', text: 'Pelo endereço:' },
        { kind: 'checklist', items: [
          'Procura no site do município: "Junta de Freguesia" + o seu bairro',
          'ANAFRE — associação de todas as Juntas de Freguesia: anafre.pt',
          'Em Lisboa: Olivais, Lumiar, Marvila, Alvalade, Campolide, etc.',
          'No Porto: União de Freguesias do Centro Histórico, Aldoar-Foz-Nevogilde, etc.'
        ]}
      ]
    },
    {
      id: 'extra',
      title: 'Possibilidades adicionais',
      content: [
        { kind: 'checklist', items: [
          'Em algumas Juntas de Freguesia há cursos gratuitos de língua portuguesa',
          'Campos de verão para crianças (férias ativas) — económicos, 50–100 € por semana',
          'Ginástica gratuita para pensionistas (Movimento é Saúde)',
          'Bibliotecas e salas de leitura',
          'Consulta jurídica mensal (Gabinete Jurídico)',
          'Mensagens de parabéns pelos 80 anos, nascimento de bebé'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'ANAFRE — Associação Nacional de Freguesias', url: 'https://www.anafre.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'CML — Juntas de Freguesia de Lisboa', url: 'https://www.lisboa.pt/municipio/juntas-de-freguesia', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'CM-Porto — Juntas de Freguesia', url: 'https://www.cm-porto.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 365
}
