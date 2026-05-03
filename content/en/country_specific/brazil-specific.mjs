export default {
  editorialVoice: 'hackportugal',
  id: 'brazil-specific',
  categoryId: 'country_specific',
  title: 'Brazilians in Portugal — CPLP and Estatuto de Igualdade',
  tldr: 'Brazilians in Portugal: 90-day visa-free stay, apply for a residence permit from inside the country via the CPLP mobility agreement. After 3 years of residency — Estatuto de Igualdade: political and economic rights on a par with Portuguese citizens. After 5 years — citizenship (7 years under the new law, approved on 01.04.2026 and awaiting signature by President Seguro). This is the easiest immigration route to Portugal of all.',
  audience: { countryCodes: ['BR'] },
  tags: ['brazil', 'cplp', 'estatuto de igualdade'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'entry',
      title: 'Entry and first steps',
      content: [
        { kind: 'checklist', items: [
          '✈️ Direct flights TAP/LATAM/Azul: São Paulo/Rio/Recife → Lisbon/Porto',
          '🛂 Visa-free 90 days in Schengen with a Brazilian passport',
          '🆔 At the border — state your purpose: «vou residir em Portugal ao abrigo do Acordo de Mobilidade CPLP» (CPLP mobility agreement)',
          '📅 Book an appointment with AIMA — within the first 30–60 days after entry',
          '🏠 Rent housing with a contract',
          '🎫 Get a NIF in Finanças (no representative required — CPLP)'
        ]}
      ]
    },
    {
      id: 'cplp-path',
      title: 'The CPLP route',
      content: [
        { kind: 'paragraph', text: 'The main pathway for Brazilians is the CPLP mobility agreement. Process:' },
        { kind: 'substeps', items: [
          { id: 'c1', title: '1. Entry + NIF + housing', content: [
            { kind: 'paragraph', text: 'In the first days.' }
          ]},
          { id: 'c2', title: '2. Book with AIMA', content: [
            { kind: 'paragraph', text: 'Through the official AIMA portal or by phone 217 115 000. Choose “Acordo de Mobilidade CPLP”.' }
          ]},
          { id: 'c3', title: '3. Submit documents', content: [
            { kind: 'checklist', items: [
              'Brazilian passport',
              'NIF',
              'Atestado de Residência from the Junta de Freguesia (parish council)',
              'Proof of means: employment contract or bank statements (minimum 1 IAS = €537.13 per month or a deposit of 12 × IAS = €6,445.56)',
              'Police clearance certificate from Brazil (apostille + translation — although Portuguese is understood, translations are often required)',
              'Two 3×4 photos'
            ]}
          ]},
          { id: 'c4', title: '4. Get a residence permit', content: [
            { kind: 'paragraph', text: 'Initial — for 1 year. Renewal for 2 years × 2 → total 5 years.' }
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
          'Political equality: vote in municipal elections, work in the civil service (except top positions)',
          'Civil equality: the same civil rights as Portuguese citizens',
          'Application via IRN (Conservatória)',
          'Basis: Tratado de Amizade, Cooperação e Consulta Brasil-Portugal (2000)',
          'Under the Estatuto de Igualdade, Brazilians can live and work in Portugal without restrictions'
        ]}
      ]
    },
    {
      id: 'citizenship',
      title: 'Citizenship',
      content: [
        { kind: 'paragraph', text: 'For CPLP nationals, obtaining Portuguese citizenship is the most straightforward:' },
        { kind: 'checklist', items: [
          'Under the current law (Lei 37/81) — 5 years of legal residence',
          'Under the new law (Decreto AR 17/XVII, re-adopted by Parliament on 01.04.2026 after a veto by Marcelo and TC Acórdão 1133/2025 unconstitutionality) — 7 years for CPLP+EU / 10 years for others. Awaiting signature by President Seguro',
          'Waiting time for MdI / the first residence permit no longer counts towards the qualifying period (under the new law)',
          'A2 language — not required (Portuguese is native)',
          'With a Portuguese passport — EU citizenship'
        ]},
        { kind: 'warning', text: 'Dual citizenship — a nuance. Portugal allows any dual citizenship. The Constitution of Brazil (Art. 12, §4) allows dual citizenship in two cases: (1) you were born a Brazilian citizen (nato) and acquire Portuguese — Brazilian is retained automatically; (2) you are a naturalised Brazilian and voluntarily acquire another citizenship — Brazilian is lost. If Portugal is your country of origin and you obtained a Brazilian passport through naturalisation — EITHER renounce one, OR remain only Brazilian.' }
      ]
    },
    {
      id: 'practical',
      title: 'Practicalities',
      content: [
        { kind: 'checklist', items: [
          'Work: LinkedIn, Indeed, InfoJobs. Many Brazilians in IT, startups, tourism',
          'Degree recognition (equivalência): DGES for higher education, DGE for school education',
          'Driving licence exchange: under the CPLP agreement, no exam at IMT',
          'Banks: ActivoBank, Caixa — accept Brazilians without hassle',
          'Housing: in Lisbon rent for a T1 — €1,000–1,500, in Porto — €700–1,100',
          'Taxes: Portugal taxes residents on worldwide income. Brazil exempts when resident in Portugal'
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
          '~500,000+ Brazilians legally in Portugal according to AIMA at the end of 2024 (largest foreign diaspora)',
          'Strongest diaspora — in Lisbon, Porto, Algarve',
          'Religion: evangelicals, Catholics — many communities',
          'Supermarkets: Brazilian sections in Continente, specialised shops in Arroios/Martim Moniz'
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
  lastVerified: '2026-05-03',
  verifyIntervalDays: 90
}
