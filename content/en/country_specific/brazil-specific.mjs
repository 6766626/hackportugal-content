export default {
  editorialVoice: 'hackportugal',
  id: 'brazil-specific',
  categoryId: 'country_specific',
  title: 'Brazilians in Portugal — CPLP and Estatuto de Igualdade',
  tldr: 'Brazilians in Portugal: 90 days visa-free, applying for a residence permit from inside the country through the CPLP mobility agreement. After 3 years of residency — Estatuto de Igualdade: political and economic rights on an equal footing with Portuguese citizens. After 5 years — citizenship (7 years under the new law adopted on 01.04.2026 and awaiting signature by President Seguro). This is the easiest immigration route to Portugal of all.',
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
          '🛂 90 days visa-free in Schengen on a Brazilian passport',
          '🆔 At the border — state the purpose: “vou residir em Portugal ao abrigo do Acordo de Mobilidade CPLP” (CPLP mobility agreement)',
          '📅 AIMA appointment — within the first 30–60 days after entry',
          '🏠 Rent housing with a contract',
          '🎫 Obtain a NIF at Finanças (without a representative — CPLP)'
        ]}
      ]
    },
    {
      id: 'cplp-path',
      title: 'The CPLP route',
      content: [
        { kind: 'paragraph', text: 'The main route for Brazilians is the CPLP mobility agreement. The process:' },
        { kind: 'substeps', items: [
          { id: 'c1', title: '1. Entry + NIF + housing', content: [
            { kind: 'paragraph', text: 'In the first few days.' }
          ]},
          { id: 'c2', title: '2. Book an AIMA appointment', content: [
            { kind: 'paragraph', text: 'Through the official AIMA portal or by phone on 217 115 000. Choose “Acordo de Mobilidade CPLP”.' }
          ]},
          { id: 'c3', title: '3. Submit documents', content: [
            { kind: 'checklist', items: [
              'Brazilian passport',
              'NIF',
              'atestado de residência from the Junta de Freguesia (local parish council)',
              'Proof of funds: employment contract or bank statements (minimum 1 IAS = €537.13 per month or a deposit of 12 × IAS = €6,445.56)',
              'Criminal record certificate from Brazil (apostille + translation — although Portuguese is understood, translations are often required)',
              '2 photos 3×4'
            ]}
          ]},
          { id: 'c4', title: '4. Obtain a residence permit', content: [
            { kind: 'paragraph', text: 'Initial one — for 1 year. Renewal for 2 years × 2 → 5 years in total.' }
          ]}
        ]}
      ]
    },
    {
      id: 'estatuto-igualdade',
      title: 'Estatuto de Igualdade — a unique privilege',
      content: [
        { kind: 'paragraph', text: 'After 3 years of residency in Portugal, Brazilians can apply for Estatuto de Igualdade de Direitos Políticos (political equality) or Civis (civil equality).' },
        { kind: 'checklist', items: [
          'Political equality: voting in municipal elections, working in the civil service (except senior positions)',
          'Civil equality: the same civil rights as Portuguese citizens',
          'Application through IRN (Conservatória)',
          'Basis: Tratado de Amizade, Cooperação e Consulta Brasil-Portugal (2000)',
          'Under Estatuto de Igualdade, Brazilians can live and work in Portugal without restrictions'
        ]}
      ]
    },
    {
      id: 'citizenship',
      title: 'Citizenship',
      content: [
        { kind: 'paragraph', text: 'CPLP citizens have the simplest route to Portuguese citizenship:' },
        { kind: 'checklist', items: [
          'Under the current law (Lei 37/81) — 5 years of legal residence',
          'Under the new law (Decreto AR 17/XVII, readopted by parliament on 01.04.2026 after Marcelo’s veto and the unconstitutionality finding in TC Acórdão 1133/2025) — 7 years for CPLP+EU / 10 years for others. Awaiting signature by President Seguro',
          'Waiting time for MdI / the first residence permit no longer counts towards the residency period (under the new law)',
          'A2 language — not required (Portuguese is native)',
          'With a Portuguese passport — EU citizenship'
        ]},
        { kind: 'warning', text: 'Dual citizenship is a nuance. Portugal allows any dual citizenship. The Constitution of Brazil (art. 12, §4) allows dual citizenship in two cases: (1) you were born a Brazilian citizen (nato) and acquire Portuguese citizenship — Brazilian citizenship is retained automatically; (2) you are a naturalised Brazilian and voluntarily acquire another citizenship — Brazilian citizenship is lost. If Portugal is your country of origin, and you obtained a Brazilian passport through naturalisation — EITHER give up one, OR remain only Brazilian.' }
      ]
    },
    {
      id: 'practical',
      title: 'Practicalities',
      content: [
        { kind: 'checklist', items: [
          'Work: LinkedIn, Indeed, InfoJobs. Many Brazilians work in IT, start-ups, tourism',
          'Diploma recognition (equivalência): DGES for higher education, DGE for school education',
          'Driving licence exchange: under the CPLP agreement, without an exam at IMT',
          'Bank: ActivoBank, Caixa — they accept Brazilians without complications',
          'Housing: in Lisbon, T1 rent — €1,000–1,500; in Porto — €700–1,100',
          'Taxes: Portugal taxes residents’ worldwide income. Brazil exempts it when resident in Portugal'
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
          '~500,000+ Brazilians legally in Portugal according to AIMA data from late 2024 (the largest foreign diaspora)',
          'The strongest diaspora — in Lisboa, Porto, Algarve',
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
  lastVerified: '2026-04-22',
  verifyIntervalDays: 90
}
