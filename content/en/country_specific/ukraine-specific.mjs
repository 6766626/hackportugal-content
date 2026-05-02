export default {
  editorialVoice: 'hackportugal',
  id: 'ukraine-specific',
  categoryId: 'country_specific',
  title: 'Ukrainians in Portugal — temporary protection and relocation',
  tldr: 'Ukrainians receive temporary protection (Proteção Temporária) — legal residence, work, access to SNS and school without a separate visa. EU Directive 2001/55/CE, the scheme has been extended by a decision of the Council of the EU until 4 March 2027. Status is obtained through AIMA free of charge. Standard D visas are available for long-term relocation.',
  audience: { countryCodes: ['UA'] },
  tags: ['ukraine', 'temporary protection', 'proteção temporária'],
  estimatedReadMinutes: 6,
  recentlyChangedAt: '2025-11-01',
  changeSummary: 'Temporary protection for Ukrainians in the EU has been extended until 4 March 2027. AIMA continues to issue and renew permits.',
  steps: [
    {
      id: 'temp-protection',
      title: 'Temporary protection — how to apply',
      content: [
        { kind: 'checklist', items: [
          'Visa-free entry with a Ukrainian biometric passport (90-day visa-free stay)',
          'Contact AIMA within the first few days after entry',
          'Documents: passport, 3x4 photo, proof of residence in Ukraine',
          'Receive a “título de proteção temporária” — valid for up to 1 year, renewable',
          'Rights: work, education, SNS, school, banking services, social benefits'
        ]},
        { kind: 'paragraph', text: 'The process is quick — the permit is usually issued within 1-2 weeks. In urgent cases — 1 day.' }
      ]
    },
    {
      id: 'rights',
      title: 'What temporary protection provides',
      content: [
        { kind: 'checklist', items: [
          '✅ Right to work for any employer in Portugal',
          '✅ Free education for children in state school',
          '✅ Access to SNS (healthcare)',
          '✅ NISS is issued automatically',
          '✅ Bank account without additional complications',
          '✅ Queue for social housing on the same basis as citizens',
          '✅ Abono de Família (child benefit) and other child-related benefits',
          '✅ Visa-free travel within Schengen',
          '❌ Does NOT provide an automatic residence permit — if you want to stay permanently, you need to switch to a D visa'
        ]}
      ]
    },
    {
      id: 'transition-to-d',
      title: 'Switching to a D visa (residence permit)',
      content: [
        { kind: 'paragraph', text: 'Temporary protection has a time limit. To stay permanently — you need to apply for a D visa (D1/D3 for work, D7 for passive income, D8 for remote work) or through family reunification.' },
        { kind: 'paragraph', text: 'Years under temporary protection MAY be counted towards the qualifying period for permanent residence and citizenship — check with AIMA at the time of application.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documents from Ukraine',
      content: [
        { kind: 'checklist', items: [
          'Apostille in Ukraine: Ministry of Justice',
          'Civil registry certificates: duplicates + apostille from the Ministry of Justice. Timeframe 14-60 days',
          'Criminal record certificate: Ministry of Internal Affairs → apostille. Available online via “Diia”',
          'Diploma: apostille from the Ministry of Education',
          'Power of attorney: Ukrainian consulates in Portugal (Lisbon)',
          'The “Diia” app — obtain a significant share of documents online'
        ]}
      ]
    },
    {
      id: 'community',
      title: 'Ukrainian community in Portugal',
      content: [
        { kind: 'checklist', items: [
          'Spilka Ukrainska em Portugal — public organisation',
          'Embassy of Ukraine in Lisbon: Rua de Alcolena 17 (+351 21 301 1030)',
          'Honorary consulates: Porto, Faro, Funchal',
          'Ukrainian Orthodox Church in Lisbon',
          'Ukrainian weekend schools in Lisbon, Porto',
          '“Dim Ukrainy” (Ukrainian House) — cultural events'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Tips',
      content: [
        { kind: 'checklist', items: [
          'Do not delay with AIMA — the status protects you legally',
          'Obtain NIF/NISS immediately — you need them for everything',
          'For children: Portuguese state school + PLNM (adaptation)',
          'Work: LinkedIn, Indeed, Ukrainian chats',
          'Social assistance: Segurança Social (social security) — Abono de Família, RSI, housing support',
          'For temporary return to Ukraine: the status is preserved, but check with AIMA',
          'Ukrainian driving licences are recognised for the entire period of validity of Proteção Temporária (Regulation EU 2022/1280, extended until 4 March 2027) — without mandatory exchange in the first 185 days. When switching to a D visa/residence permit — exchange at IMT under the 2019 UA–PT bilateral agreement without an exam'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'AIMA — Proteção Temporária', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Council Directive 2001/55/EC (EU temporary protection)', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex:32001L0055', kind: 'law', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Proteção Temporária', url: 'https://eportugal.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Embassy of Ukraine in Portugal', url: 'https://portugal.mfa.gov.ua/', kind: 'official', language: 'uk', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 90
}
