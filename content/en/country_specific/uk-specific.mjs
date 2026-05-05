export default {
  editorialVoice: 'hackportugal',
  id: 'uk-specific',
  categoryId: 'country_specific',
  title: 'Britons in Portugal after Brexit',
  tldr: 'Britons who lived in Portugal before 31.12.2020 are protected by the Withdrawal Agreement and hold special residence permit cards. New arrivals after Brexit are third‑country nationals and need a D visa. The Portugal–UK tax treaty applies. FATCA does not apply to the UK, but CRS (automatic exchange) does.',
  audience: { countryCodes: ['GB'] },
  tags: ['uk', 'british', 'brexit', 'withdrawal agreement'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'wa-beneficiaries',
      title: 'Withdrawal Agreement (WA) — who is covered',
      content: [
        { kind: 'paragraph', text: 'British citizens who lived in Portugal before 31 December 2020 are protected by the WA and have the same rights as EU citizens: freedom to work, SNS, education.' },
        { kind: 'checklist', items: [
          'Status: WA Beneficiary Residence Permit',
          'Carta de beneficiário do Acordo de Saída',
          'The same rights as other EU citizens',
          'No need to switch to a D visa',
          'Applies to all family members who were also in Portugal before 31.12.2020'
        ]},
        { kind: 'paragraph', text: 'If you did not obtain WA status in time — contact AIMA immediately; recovery may be possible.' }
      ]
    },
    {
      id: 'after-brexit',
      title: 'New arrivals (after 01.01.2021)',
      content: [
        { kind: 'paragraph', text: 'Britons arriving now are treated as third‑country nationals (non‑EU). A D visa is required for a residence permit.' },
        { kind: 'checklist', items: [
          'D7 (passive income) — for pensioners',
          'D8 (digital nomad) — for those working remotely. Popular for IT specialists from London',
          'D3 (highly qualified professional) — employment with a Portuguese company',
          'Golden Visa — for major investors',
          'Tourists: 90 days in the Schengen Area visa‑free'
        ]},
        { kind: 'warning', text: 'CRUE (Certificado de Registo de Cidadão da União) — NOT available to Britons after Brexit. Some Junta de Freguesia may mistakenly issue it — this is incorrect. You must have a D visa or be under the WA.' }
      ]
    },
    {
      id: 'taxes',
      title: 'Taxes UK ↔ Portugal',
      content: [
        { kind: 'checklist', items: [
          'Portugal–United Kingdom tax treaty — in force since 1968, updated by protocols (latest — 2016) — avoidance of double taxation',
          'Non‑dom in the UK — not relevant in Portugal (Portugal taxes residents on worldwide income with no non‑dom option)',
          'Resident in Portugal (>183 days) — taxed on worldwide income in Portugal',
          'UK pension (state, occupational): taxed in Portugal where you are resident. The UK may withhold tax at source — relief via a foreign tax credit',
          'ISA — the UK tax shelter does not work in Portugal: income inside an ISA is taxable in Portugal (dividends and interest at ordinary rates)',
          'SIPP — Portugal usually recognises it as a pension plan; withdrawals are taxed as pension income, but taxation of growth inside a SIPP is a grey area — specialist advice is often needed',
          'CRS — UK banks report to Portugal automatically (Common Reporting Standard)',
          'IFICI regime: potentially available to British digital nomads and highly skilled professionals'
        ]}
      ]
    },
    {
      id: 'documents',
      title: 'Documents from the UK',
      content: [
        { kind: 'checklist', items: [
          'Apostille: Foreign, Commonwealth & Development Office (FCDO)',
          'Birth certificate: General Register Office (GRO) + FCDO apostille',
          'Marriage certificate: same as above',
          'DBS (Disclosure and Barring Service) — criminal record certificate',
          'Degree/diploma: university → FCDO apostille',
          'All documents must be translated into Portuguese (certified translation)'
        ]}
      ]
    },
    {
      id: 'banking',
      title: 'Banking nuances',
      content: [
        { kind: 'checklist', items: [
          'British banks (HSBC, Barclays, etc.) — cards work in Portugal',
          'Some British banks close accounts of British residents who have moved to the EU (FCA rules)',
          'HSBC Premier International, Citi Plus — international accounts work',
          'Revolut, Wise — an excellent choice for GBP↔EUR',
          'Portuguese banks: ActivoBank, Millennium — accept without difficulties'
        ]}
      ]
    },
    {
      id: 'community',
      title: 'British community',
      content: [
        { kind: 'checklist', items: [
          'British Embassy Lisbon: Rua de São Bernardo 33',
          'British Council — cultural events, English exams',
          'Algarve — the largest community of British expats',
          'Cascais — the traditional “English bay”',
          'British Hospital / Lusitânia — with British standards',
          'British schools: St Julian\'s (Carcavelos), The British School of Lisbon'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'British Embassy Lisbon', url: 'https://www.gov.uk/world/organisations/british-embassy-lisbon', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — Withdrawal Agreement (WA)', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'HMRC — Portugal Tax Treaty', url: 'https://www.gov.uk/government/publications/portugal-tax-treaties', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'EU Commission — Brexit WA rights', url: 'https://commission.europa.eu/strategy-and-policy/relations-united-kingdom/eu-uk-withdrawal-agreement_en', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 180
}
