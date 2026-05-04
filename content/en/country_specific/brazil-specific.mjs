export default {
  editorialVoice: 'hackportugal',
  id: 'brazil-specific',
  categoryId: 'country_specific',
  title: 'Brazilians in Portugal — CPLP and Estatuto de Igualdade',
  tldr: 'Brazilians in Portugal: visa-free 90 days, apply for a residence permit from inside the country via the CPLP mobility agreement. After 3 years of residency — Estatuto de Igualdade: political and economic rights on a par with Portuguese citizens. After 5 years — citizenship (7 years under the new law Decreto AR 48/XVII, promulgated by President Seguro on 03.05.2026; will enter into force after publication in the DRE). This is the easiest immigration route to Portugal of all.',
  audience: { countryCodes: ['BR'] },
  tags: ['brazil', 'cplp', 'estatuto de igualdade'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'entry',
      title: 'Entry and first steps',
      content: [
        { kind: 'checklist', items: [
          '✈️ Direct flights TAP/LATAM/Azul: São Paulo/Rio/Recife → Lisboa/Porto',
          '🛂 Visa-free 90 days in Schengen with a Brazilian passport',
          '🆔 At the border — state your purpose: "vou residir em Portugal ao abrigo do Acordo de Mobilidade CPLP" (CPLP mobility agreement)',
          '📅 Book an appointment with AIMA — within the first 30–60 days after entry',
          '🏠 Rent accommodation with a contract',
          '🎫 Get a NIF at Finanças (no tax representative — CPLP)'
        ]}
      ]
    },
    {
      id: 'cplp-path',
      title: 'The CPLP route',
      content: [
        { kind: 'paragraph', text: 'The main route for Brazilians is the CPLP mobility agreement. Process:' },
        { kind: 'substeps', items: [
          { id: 'c1', title: '1. Entry + NIF + accommodation', content: [
            { kind: 'paragraph', text: 'In the first days.' }
          ]},
          { id: 'c2', title: '2. Appointment with AIMA', content: [
            { kind: 'paragraph', text: 'Via the official AIMA portal or by phone 217 115 000. Choose "Acordo de Mobilidade CPLP".' }
          ]},
          { id: 'c3', title: '3. Submit documents', content: [
            { kind: 'checklist', items: [
              'Brazilian passport',
              'NIF',
              'Atestado de Residência from the Junta de Freguesia (parish council)',
              'Proof of means: employment contract or bank statements (minimum 1 IAS = €537.13 per month, or a deposit of 12 × IAS = €6,445.56)',
              'Criminal record certificate from Brazil (apostille + translation — although Portuguese is understood, translations are often required)',
              '2 photos 3×4'
            ]}
          ]},
          { id: 'c4', title: '4. Get the residence permit', content: [
            { kind: 'paragraph', text: 'Initial — for 1 year. Renewal for 2 years × 2 → a total of 5 years.' }
          ]}
        ]}
      ]
    },
    {
      id: 'estatuto-igualdade',
      title: 'Estatuto de Igualdade — a unique privilege',
      content: [
        { kind: 'paragraph', text: 'After 3 years of residency in Portugal, Brazilians can apply for the Estatuto de Igualdade de Direitos Políticos (political equality) or Civis (civil equality).' },
        { kind: 'checklist', items: [
          'Political equality: vote in municipal elections, work in the civil service (except senior posts)',
          'Civil equality: the same civil rights as Portuguese citizens',
          'Apply via IRN (Conservatória)',
          'Legal basis: Tratado de Amizade, Cooperação e Consulta Brasil-Portugal (2000)',
          'Under the Estatuto de Igualdade, Brazilians may live and work in Portugal without restrictions'
        ]}
      ]
    },
    {
      id: 'citizenship',
      title: 'Citizenship',
      content: [
        { kind: 'paragraph', text: 'For CPLP citizens it is easiest to obtain Portuguese citizenship:' },
        { kind: 'checklist', items: [
          'Under the current law (Lei 37/81) — 5 years of legal residence',
          'Under the new law (Decreto AR 48/XVII, after passing through the TC renamed from 17/XVII; promulgated by President Seguro on **03.05.2026**, will enter into force after publication in the DRE) — 7 years for CPLP+EU / 10 years for others. Seguro publicly asked for already-filed cases to be considered under the old rules',
          'The waiting time for the MdI / the first residence permit no longer counts towards the qualifying period (under the new law)',
          'A2 language test — not required (Portuguese is native)',
          'With a Portuguese passport — EU citizenship'
        ]},
        { kind: 'warning', text: 'Dual citizenship — a nuance. Portugal allows any dual nationality. The Constitution of Brazil (art. 12, §4) allows dual nationality in two cases: (1) you were born a Brazilian citizen (nato) and acquire Portuguese — Brazilian is retained automatically; (2) you are a naturalised Brazilian and voluntarily acquire another nationality — Brazilian is lost. If Portugal is your country of origin, and you obtained a Brazilian passport through naturalisation — EITHER renounce one, OR remain only Brazilian.' }
      ]
    },
    {
      id: 'practical',
      title: 'Practicalities',
      content: [
        { kind: 'checklist', items: [
          'Work: LinkedIn, Indeed, InfoJobs. Many Brazilians in IT, start-ups, tourism',
          'Diploma recognition (equivalência): DGES for higher education, DGE for school-level',
          'Driving licence exchange: under the CPLP agreement, no exam at IMT',
          'Bank: ActivoBank, Caixa — accept Brazilians without difficulty',
          'Housing: in Lisboa rent for a T1 — €1,000–1,500, in Porto — €700–1,100',
          'Taxes: Portugal taxes residents on worldwide income. Brazil exempts when you are tax resident in Portugal'
        ]}
      ]
    },
    {
      id: 'community',
      title: 'Brazilian community',
      content: [
        { kind: 'checklist', items: [
          'Embassy of Brazil in Lisboa: Estrada das Laranjeiras 144',
          'Consulates: Porto, Faro',
          'Casa do Brasil em Lisboa',
          '~500,000+ Brazilians legally in Portugal according to AIMA at the end of 2024 (the largest foreign diaspora)',
          'Strongest diaspora — in Lisboa, Porto, Algarve',
          'Religion: evangelicals, Catholics — many congregations',
          'Supermarkets: Brazilian sections in Continente, specialist shops in Arroios/Martim Moniz'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'AIMA — CPLP Mobility Agreement', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IRN — Estatuto de Igualdade', url: 'https://irn.justica.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Treaty of Friendship Brazil–Portugal (DRE)', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-do-presidente-da-republica/79-2000', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'CPLP — official portal', url: 'https://www.cplp.org/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-03',
  verifyIntervalDays: 90
}
