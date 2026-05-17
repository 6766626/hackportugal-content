export default {
  editorialVoice: 'hackportugal',
  id: 'ukraine-specific',
  categoryId: 'country_specific',
  title: 'Ucranianos em Portugal — proteção temporária e mudança',
  tldr: 'Os ucranianos recebem proteção temporária (Proteção Temporária) — residência legal, trabalho, acesso ao SNS e escola sem visto separado. Diretiva UE 2001/55/CE, regime prolongado por decisão do Conselho da UE até 4 de março de 2027. O estatuto é tratado na AIMA gratuitamente. Para uma mudança de longo prazo, estão disponíveis os vistos D normais.',
  audience: { countryCodes: ['UA'] },
  tags: ['ucrânia', 'proteção temporária', 'proteção temporária'],
  estimatedReadMinutes: 6,
  recentlyChangedAt: '2025-11-01',
  changeSummary: 'A proteção temporária para ucranianos na UE foi prolongada até 4 de março de 2027. AIMA continua a emitir e a renovar autorizações.',
  steps: [
    {
      id: 'temp-protection',
      title: 'Proteção temporária — como tratar',
      content: [
        { kind: 'checklist', items: [
          'Entrada sem visto com passaporte biométrico ucraniano (isenção de visto de 90 dias)',
          'Contactar a AIMA nos primeiros dias após a entrada',
          'Documentos: passaporte, fotografia 3x4, comprovativo de residência na Ucrânia',
          'Obter o «título de proteção temporária» — válido até 1 ano, renovável',
          'Direitos: trabalho, educação, SNS, escola, serviços bancários, prestações sociais'
        ]},
        { kind: 'paragraph', text: 'O processo é rápido — normalmente a autorização é emitida em 1-2 semanas. Em casos urgentes — 1 dia.' }
      ]
    },
    {
      id: 'rights',
      title: 'O que confere a proteção temporária',
      content: [
        { kind: 'checklist', items: [
          '✅ Direito a trabalhar para qualquer empregador em Portugal',
          '✅ Ensino gratuito para crianças na escola pública',
          '✅ Acesso ao SNS (saúde)',
          '✅ NISS é tratado automaticamente',
          '✅ Conta bancária sem dificuldades adicionais',
          '✅ Lista de espera para habitação social em igualdade com os cidadãos',
          '✅ Abono de Família e outras prestações para crianças',
          '✅ Viagens sem visto dentro do espaço Schengen',
          '❌ NÃO confere uma autorização de residência automática — se quiser ficar permanentemente, é necessário passar para um visto D'
        ]}
      ]
    },
    {
      id: 'transition-to-d',
      title: 'Transição para visto D (autorização de residência)',
      content: [
        { kind: 'paragraph', text: 'A proteção temporária tem prazo. Para ficar definitivamente — é necessário pedir um visto D (D1/D3 em caso de trabalho, D7 com rendimento passivo, D8 em caso de trabalho remoto) ou através de Reagrupamento Familiar.' },
        { kind: 'paragraph', text: 'Os anos de proteção temporária PODEM ser contabilizados para o tempo necessário à autorização de residência permanente e à cidadania — confirme junto da AIMA no momento do pedido.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documentos da Ucrânia',
      content: [
        { kind: 'checklist', items: [
          'Apostila na Ucrânia: Ministério da Justiça',
          'Certidões do registo civil: segundas vias + apostila do Ministério da Justiça. Prazo 14-60 dias',
          'Certificado de registo criminal: Ministério do Interior → apostila. Disponível online através da «Diia»',
          'Diploma: apostila no Ministério da Educação',
          'Procuração: consulados da Ucrânia em Portugal (Lisboa)',
          'Aplicação «Diia» — tratamento online de uma parte significativa dos documentos'
        ]}
      ]
    },
    {
      id: 'community',
      title: 'Comunidade ucraniana em Portugal',
      content: [
        { kind: 'checklist', items: [
          'Spilka Ukrainska em Portugal — organização cívica',
          'Embaixada da Ucrânia em Lisboa: Rua de Alcolena 17 (+351 21 301 1030)',
          'Consulados honorários: Porto, Faro, Funchal',
          'Igreja Ortodoxa Ucraniana em Lisboa',
          'Escolas ucranianas de fim de semana em Lisboa, Porto',
          '«Dim Ukrainy» (Casa Ucraniana) — eventos culturais'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Conselhos',
      content: [
        { kind: 'checklist', items: [
          'Não adie o contacto com a AIMA — o estatuto protege juridicamente',
          'Trate do NIF/NISS imediatamente — é necessário para tudo',
          'Para crianças: escola pública portuguesa + PLNM (adaptação)',
          'Trabalho: LinkedIn, Indeed, chats ucranianos',
          'Apoio social: Segurança Social — Abono de Família, RSI, apoio à habitação',
          'Para regressos temporários à Ucrânia: o estatuto mantém-se, mas confirme junto da AIMA',
          'As cartas de condução da Ucrânia são reconhecidas durante todo o período de validade da Proteção Temporária (Regulation EU 2022/1280, prolongado até 4 de março de 2027) — sem troca obrigatória nos primeiros 185 dias. Ao transitar para visto D/autorização de residência — troca no IMT ao abrigo do acordo bilateral UA–PT de 2019 sem exame'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'AIMA — Proteção Temporária', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Diretiva 2001/55/CE do Conselho (proteção temporária da UE)', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex:32001L0055', kind: 'law', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Proteção Temporária', url: 'https://eportugal.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Embaixada da Ucrânia em Portugal', url: 'https://portugal.mfa.gov.ua/', kind: 'official', language: 'uk', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
