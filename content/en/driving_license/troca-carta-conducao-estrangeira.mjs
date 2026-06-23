export default {
  editorialVoice: 'hackportugal',
  id: 'troca-carta-conducao-estrangeira',
  categoryId: 'driving_license',
  title: 'Exchanging a foreign licence for a Portuguese one (troca de carta at the IMT)',
  tldr: 'If you have become a resident of Portugal, sooner or later you must exchange your foreign licence for a Portuguese one at the IMT (the national mobility and transport authority). Since 21 January 2026 the exchange is filed ONLINE ONLY — there are no more in-person appointments for this service. Licences from the EU/EEA and from countries with an agreement are exchanged without a test (usually within 2 years of becoming a resident); licences from countries without a convention require a Portuguese driving test. You need an electronic atestado médico (medical certificate — the doctor sends it to the IMT directly), and for categories C/D also a psychological assessment. The exchange costs 30 €, and the finished card arrives in about 60 days. Check the exact rules for your country at imt-ip.pt.',
  tags: ['carta de condução', 'licence', 'IMT', 'troca'],
  estimatedReadMinutes: 7,
  recentlyChangedAt: '2026-06-22',
  changeSummary: 'New guide: exchanging a foreign driving licence for a Portuguese one through the IMT — online only since 21 January 2026, EU/non-EU rules, atestado médico (medical certificate), timelines, cost.',
  steps: [
    {
      id: 'who-must',
      title: 'Who must exchange, and when',
      content: [
        { kind: 'paragraph', text: 'A tourist or anyone in Portugal temporarily does not need to exchange their licence: with a valid foreign licence you can usually drive as a non-resident. The obligation to exchange arises when you become a resident (obtain a residence permit / registration).' },
        { kind: 'checklist', items: [
          '🇪🇺 EU/EEA licences: valid in Portugal, but as a resident you must register/exchange them — usually within 2 years of becoming a resident.',
          '🤝 Countries with an agreement/convention (including a number of CPLP countries): exchange without a driving test, within the set deadline.',
          '🌍 Countries without a convention: licences are only exchanged by passing a Portuguese driving test (and sometimes the theory test too).',
          '⏳ A non-resident may drive on a foreign licence temporarily; once you become a resident you must exchange it within the set deadline.',
          '🛑 An expired foreign licence cannot be exchanged — you would first have to renew it in the issuing country.'
        ] },
        { kind: 'warning', text: 'The rules and deadlines depend heavily on the country that issued the licence. Check your own country and the exact deadline with the IMT (imt-ip.pt) — do not rely on advice from chat groups.' }
      ]
    },
    {
      id: 'online-only',
      title: 'Since 21 January 2026 — online only',
      content: [
        { kind: 'paragraph', text: 'Since 21 January 2026, applications to exchange a foreign licence are filed exclusively online. In-person appointments at the IMT for this service have been discontinued, so the whole process runs over the internet with electronic identification.' },
        { kind: 'checklist', items: [
          'Sign-in is usually via the Chave Móvel Digital (the official digital ID) or another accepted electronic identification.',
          'You will need a scan/photo of your foreign licence (sometimes with a sworn translation — check the requirements for your country).',
          'An up-to-date address (morada): the finished Portuguese card will be sent there.',
          'Photo and signature — as required by the service (often taken from the Cartão de Cidadão / citizen card or uploaded).',
          'On exchange your foreign licence is generally withdrawn/cancelled in the issuing country — bear this in mind before any trips.'
        ] }
      ]
    },
    {
      id: 'medical',
      title: 'Atestado médico (medical certificate) and psychological assessment',
      content: [
        { kind: 'paragraph', text: 'For the exchange you need a medical certificate (atestado médico) in electronic form: the doctor issues it and sends it to the IMT over the internet themselves — there is no paper slip to carry around.' },
        { kind: 'checklist', items: [
          'Find a doctor (médico de família / family doctor, a private clinic, or a centre that issues the atestado para carta) and have the examination done.',
          'The doctor sends the atestado médico eletrónico straight to the IMT — confirm that they have done so.',
          'For Grupo 2 categories (C1, C1E, C, CE, D, D1, D1E, DE) you additionally need a certificado de avaliação psicológica (psychological assessment certificate).',
          'If there are health-related restrictions, the licence may carry the corresponding codes/conditions.'
        ] }
      ]
    },
    {
      id: 'cost-time',
      title: 'Timelines and cost',
      content: [
        { kind: 'checklist', items: [
          '💶 Exchanging the licence — 30 €.',
          '💶 If a driving test is required (countries without a convention) — around another 30 € for the test, plus possible costs for a school/instructor.',
          '🗓️ The finished Portuguese card arrives in about 60 days; longer if a practical test is required.',
          '🚗 While you wait: ask the IMT which document you can legally drive on during the transition period — it depends on your situation.',
          '📍 The card is sent by post to the address you provided; keep your morada up to date.'
        ] }
      ]
    },
    {
      id: 'practical',
      title: 'Practical tips and common mistakes',
      content: [
        { kind: 'checklist', items: [
          'Do not leave it until the last day of the deadline: the medical exam, translation, and processing all take time.',
          'Make copies of your foreign licence before the exchange — the original will be taken.',
          'If your licence is in a language other than Portuguese/English, check in advance about a sworn translation (tradução certificada).',
          'Check that you have no unpaid fines and that your details (name, date of birth) match across all documents.',
          'For professional driving (taxi/TVDE, lorries, buses) there are separate requirements — CAM, Grupo 2 categories.',
          'All official steps go through imt-ip.pt and gov.pt; do not pay intermediaries to "speed things up" unless it is truly necessary.'
        ] },
        { kind: 'paragraph', text: 'Related guides: on sworn translation of documents and on professional requirements for drivers (CAM, IMT) — in the relevant categories.' }
      ]
    }
  ],
  sources: [
    {
      title: 'gov.pt — Trocar carta de condução estrangeira por portuguesa (exchange a foreign driving licence for a Portuguese one)',
      url: 'https://www.gov.pt/servicos/trocar-carta-de-conducao-estrangeira-por-portuguesa',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-06-23'
    },
    {
      title: 'IMT — Troca de Título de Condução Estrangeiro (exchange of a foreign driving title)',
      url: 'https://www.imt-ip.pt/condutores/reconhecimento/troca-de-titulo-de-conducao-estrangeiro/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-06-23'
    },
    {
      title: 'IMT — revalidation and general information for drivers',
      url: 'https://www.imt-ip.pt/condutores/informacoes-gerais/quero-ser-condutor/revalidacao-da-carta-de-conducao/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-06-23'
    }
  ],
  lastVerified: '2026-06-23',
  verifyIntervalDays: 180
}
