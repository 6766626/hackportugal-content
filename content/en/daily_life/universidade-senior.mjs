export default {
  editorialVoice: 'hackportugal',
  id: 'universidade-senior',
  categoryId: 'daily_life',
  title: 'Universidade Sénior — education for pensioners',
  tldr: 'Universidade Sénior is the Portuguese U3A format: daytime courses for older people, without exams or diplomas. There are 200+ such schools across the country; many are part of the RUTIS network and are run by Câmaras Municipais, Juntas de Freguesia, IPSS or associations. Typical cost in 2026: inscrição €10–30 and mensalidade €30–50 for many classes: línguas, cultura, informática, dança, artes, saúde. Registration is usually through the Câmara/Junta or directly with the school secretaria.',
  tags: ['senior', 'education', 'câmara', 'rutis'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'What Universidade Sénior is',
      content: [
        { kind: 'paragraph', text: 'Universidade Sénior is not a university in the academic sense, but a local educational and social project for older people. The format is similar to U3A: classes for socialising, activity and learning, without entrance exams, grades or an official degree.' },
        { kind: 'paragraph', text: 'In Portugal, these schools often operate through a Câmara Municipal, Junta de Freguesia, IPSS, misericórdia, associação cultural or parish/social centre. Some are part of RUTIS — Rede de Universidades Seniores, the largest network of such projects.' },
        { kind: 'checklist', items: [
          'the usual entry age is 50+, 55+ or 60+; the exact threshold is set by each school',
          'pensioner status is often NOT required: age and available places matter more',
          'classes take place during the day, usually from September/October to June/July',
          'there is no nível superior diploma and no academic ECTS',
          'the aim is learning, socialisation, prevention of isolation and active ageing',
          'for foreigners, it is a good way to practise Portuguese and enter the local community'
        ] }
      ]
    },
    {
      id: 'subjects-and-language',
      title: 'What is usually taught 📚',
      content: [
        { kind: 'paragraph', text: 'The range of subjects depends on the municipality. In small towns, the timetable may be compact; in Lisbon, Porto, Coimbra, Braga and the Algarve, the choice is usually wider. Teachers often work on a voluntary basis or through a municipal programme.' },
        { kind: 'checklist', items: [
          'línguas: português, inglês, espanhol, francês',
          'informática: smartphone, email, Segurança Social Direta, Finanças, MB WAY',
          'cultura portuguesa: history, literature, música, cinema',
          'artes: pintura, cerâmica, fotografia, teatro, canto coral',
          'dança and movimento: ginástica, yoga, pilates, dança tradicional',
          'saúde: alimentação, memory, bem-estar, prevention of falls',
          'cidadania: rights of older people, access to SNS, serviços públicos',
          'excursions, visitas de estudo, concerts, celebrations and inter-municipal meetings'
        ] },
        { kind: 'warning', text: 'If your Portuguese is still weak, ask in advance about turmas de português para estrangeiros or subjects where language is less critical: dança, artes, ginástica, música. English as a language of communication is not guaranteed.' }
      ]
    },
    {
      id: 'how-to-find',
      title: 'How to find the nearest school',
      content: [
        { kind: 'paragraph', text: 'Start with RUTIS and your Câmara Municipal website. If there is no separate Universidade Sénior in the municipality, a similar programme may be called Academia Sénior, Universidade da Terceira Idade, Espaço Sénior, Programa Envelhecimento Ativo or Atividades Sénior.' },
        { kind: 'checklist', items: [
          'open rutis.pt and check the list/contacts for Rede de Universidades Seniores',
          'on the Câmara Municipal website, search for “universidade sénior”, “academia sénior”, “envelhecimento ativo”',
          'ask at the Junta de Freguesia for your address',
          'check IPSS, centro social, misericórdia and associação recreativa in your freguesia',
          'look at the Câmara/Junta Facebook pages: timetables are often published there earlier than on the website',
          'call the secretaria and ask: idade mínima, mensalidade, horários, documentos, vagas',
          'if there are no places, ask to be put on the lista de espera for the next semestre/ano letivo'
        ] }
      ]
    },
    {
      id: 'registration',
      title: 'Registration through the Câmara, Junta or secretaria',
      content: [
        { kind: 'paragraph', text: 'Registration is usually offline: at the Universidade Sénior secretaria, balcão da Câmara Municipal, Junta de Freguesia or IPSS office. There may be an online form, but not everywhere. Enrolment most often opens in June–September for the new academic year; free places may appear in January.' },
        { kind: 'checklist', items: [
          'documento de identificação: passport, Cartão de Cidadão or residence permit',
          'NIF — often needed for the ficha de inscrição and recibo',
          'comprovativo de morada: bill, rental contract, atestado de residência or document from the Junta',
          'contact phone number and email',
          'foto tipo passe — sometimes requested for the cartão de aluno',
          'list of chosen subjects or horário pretendido',
          'medical information for ginástica/dança — only if the school requires it',
          'payment of inscrição and the first month, usually in cash, by Multibanco or transferência'
        ] },
        { kind: 'warning', text: 'Not all schools accept people from a neighbouring município at the same price. Municipal projects may prioritise residentes da freguesia/concelho and ask for comprovativo de morada.' }
      ]
    },
    {
      id: 'costs-and-expectations',
      title: 'How much it costs and what to expect in 2026',
      content: [
        { kind: 'paragraph', text: 'The typical model is a small annual registration fee plus mensalidade. In 2026, for ordinary municipal/association schools, a realistic range is €30–50 per month for access to several classes or “unlimited” classes according to the timetable. In some Câmaras, the price is lower or symbolic if the programme is funded by the municipality.' },
        { kind: 'checklist', items: [
          'inscrição is usually paid once a year',
          'mensalidade may not be charged in August if there are no classes',
          'materials for pintura, cerâmica, fotografia and excursões are often paid for separately',
          'classes may be cancelled if there are too few students or no teacher',
          'the volunteer format means less bureaucracy, but also less “service culture” than in a private school',
          'the timetable changes every year: keep the secretaria contacts',
          'if you leave for several months, ask about suspensão da mensalidade'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Annual inscrição', amountEURMin: 10, amountEURMax: 30, note: 'One-off fee on registration; in municipal projects it may be €0 or a symbolic amount.' },
    { label: 'Mensalidade', amountEURMin: 30, amountEURMax: 50, note: 'Typical monthly range in 2026 for several subjects or “unlimited” access according to the school timetable.' },
    { label: 'Materials and trips', amountEURMin: 5, amountEURMax: 40, note: 'Paid separately: pintura, cerâmica, fotografia, visitas de estudo, transport, tickets.' }
  ],
  sources: [
    { title: 'RUTIS — Rede de Universidades Seniores', url: 'https://rutis.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Carta Social — search for social institutions and IPSS', url: 'https://www.cartasocial.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Segurança Social — IPSS framework', url: 'https://www.seg-social.pt/ipss', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
