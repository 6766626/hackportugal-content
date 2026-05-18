export default {
  editorialVoice: 'hackportugal',
  id: 'brazil-specific',
  categoryId: '_specific',
  title: 'Brazilians in Portugal — CPLP and Estatuto de Igualdade',
  tldr: 'Brazilians in Portugal: 90 days visa-free, applying for a residence permit from inside the country via the CPLP mobility agreement. After 3 years of residence — Estatuto de Igualdade: political and economic rights equal to Portuguese citizens. After 5 years — citizenship (7 years under the new law Decreto AR 48/XVII, promulgated by President Seguro on 03.05.2026; it will enter into force after publication in the DRE). This is the easiest immigration route to Portugal of all.',
  audience: { countryCodes: ['BR'] },
  tags: ['brazil', 'cplp', 'estatuto'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'entry',
      title: 'Entry and first steps',
      content: [
        { kind: 'checklist', items: [
          '✈️ Direct TAP/LATAM/Azul flights: São Paulo/Rio/Recife → Lisboa/Porto',
          '🛂 90 days visa-free in the Schengen Area with a Brazilian passport',
          '🆔 At the border — state the purpose: “vou residir em Portugal ao abrigo do Acordo de Mobilidade CPLP” (CPLP mobility agreement)',
          '📅 Appointment with AIMA — within the first 30–60 days after entry',
          '🏠 Rent accommodation with a contract',
          '🎫 Obtain a NIF at Finanças (without a representative — CPLP)'
        ]}
      ]
    },
    {
      id: 'cplp-path',
      title: 'Route via CPLP',
      content: [
        { kind: 'paragraph', text: 'The main route for Brazilians is the CPLP mobility agreement. Process:' },
        { kind: 'substeps', items: [
          { id: 'c1', title: '1. Entry + NIF + accommodation', content: [
            { kind: 'paragraph', text: 'In the first days.' }
          ]},
          { id: 'c2', title: '2. Appointment with AIMA', content: [
            { kind: 'paragraph', text: 'Via the official AIMA portal or by phone on 217 115 000. Choose “Acordo de Mobilidade CPLP”.' }
          ]},
          { id: 'c3', title: '3. Submit documents', content: [
            { kind: 'checklist', items: [
              'Brazilian passport',
              'NIF',
              'Atestado de Residência from the Junta de Freguesia (local parish council)',
              'Proof of funds: employment contract or bank statements (minimum 1 IAS = €537.13 per month or a deposit of 12 × IAS = €6,445.56)',
              'Criminal record certificate from Brazil (apostille + translation — although Portuguese is understood, translations are often required)',
              '2 photos 3×4'
            ]}
          ]},
          { id: 'c4', title: '4. Obtain the residence permit', content: [
            { kind: 'paragraph', text: 'Initial one — for 1 year. Renewal for 2 years × 2 → 5 years in total.' }
          ]}
        ]}
      ]
    },
    {
      id: 'estatuto-igualdade',
      title: 'Estatuto de Igualdade — a unique privilege',
      content: [
        { kind: 'paragraph', text: 'After 3 years of residence in Portugal, Brazilians can apply for the Estatuto de Igualdade de Direitos Políticos (political equality) or Civis (civil equality).' },
        { kind: 'checklist', items: [
          'Political equality: voting in municipal elections, working in the civil service (except for senior positions)',
          'Civil equality: the same civil rights as Portuguese citizens',
          'Application through IRN (Conservatória)',
          'Basis: Tratado de Amizade, Cooperação e Consulta Brasil-Portugal (2000)',
          'Under the Estatuto de Igualdade, Brazilians can live and work in Portugal without restrictions'
        ]}
      ]
    },
    {
      id: 'citizenship',
      title: 'Citizenship',
      content: [
        { kind: 'paragraph', text: 'CPLP citizens have the easiest route to Portuguese citizenship:' },
        { kind: 'checklist', items: [
          'Under the current law (Lei 37/81) — 5 years of legal residence',
          'Under the new law (Decreto AR 48/XVII, renamed from 17/XVII after passing through the TC; promulgated by President Seguro on **03.05.2026**, as of 13.05.2026 published on 18.05.2026 as **Lei Orgânica n.º 1/2026** — 10 days) — 7 years for CPLP+EU / 10 years for everyone else. The text of the law contains a transitional provision: cases already being processed are subject to the previous version of Lei 37/81 (5 years)',
          'Waiting time for MdI / the first residence permit no longer counts towards the residence period (under the new law)',
          'A2 language — not required (Portuguese is the native language)',
          'With a Portuguese passport — EU citizenship'
        ]},
        { kind: 'warning', text: 'Dual citizenship is a subtle point. Portugal allows any dual citizenship. The Constitution of Brazil (art. 12, §4) allows dual citizenship in two cases: (1) you were born a Brazilian citizen (nato) and acquire Portuguese citizenship — Brazilian citizenship is retained automatically; (2) you are a naturalised Brazilian and voluntarily acquire another citizenship — Brazilian citizenship is lost. If Portugal is your country of origin, and you obtained the Brazilian passport through naturalisation — EITHER give up one of them, OR remain Brazilian only.' }
      ]
    },
    {
      id: 'practical',
      title: 'Practicalities',
      content: [
        { kind: 'checklist', items: [
          'Work: LinkedIn, Indeed, InfoJobs. Many Brazilians work in IT, start-ups, tourism',
          'Degree recognition (equivalência): DGES for higher education, DGE for school education',
          'Driving licence exchange: under the CPLP agreement, without an exam at IMT',
          'Bank: ActivoBank, Caixa — they accept Brazilians without difficulty',
          'Housing: in Lisbon, T1 rent — €1,000–1,500; in Porto — €700–1,100',
          'Taxes: Portugal taxes residents on worldwide income. Brazil exempts you if you are resident in Portugal'
        ]}
      ]
    },
    {
      id: 'community',
      title: 'Brazilian community',
      content: [
        { kind: 'checklist', items: [
          'Embassy of Brazil in Lisbon: Estrada das Laranjeiras 144',
          'Consulates: Porto, Faro',
          'Casa do Brasil em Lisboa',
          '~500,000+ Brazilians legally in Portugal according to AIMA data from the end of 2024 (the largest foreign diaspora)',
          'The strongest diaspora is in Lisboa, Porto, Algarve',
          'Religion: evangelicals, Catholics — many communities',
          'Supermarkets: Brazilian sections in Continente, specialist shops in Arroios/Martim Moniz'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'AIMA — Acordo de Mobilidade CPLP', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IRN — Estatuto de Igualdade', url: 'https://irn.justica.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Tratado de Amizade Brasil-Portugal (DRE)', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-do-presidente-da-republica/79-2000', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'CPLP — official portal', url: 'https://www.cplp.org/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}
