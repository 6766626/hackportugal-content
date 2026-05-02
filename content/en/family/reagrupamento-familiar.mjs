export default {
  editorialVoice: 'hackportugal',
  id: 'reagrupamento-familiar',
  categoryId: 'residence_permit',
  title: 'Family reunification (Reagrupamento Familiar)',
  tldr: 'A process that allows you to bring your spouse, children or parents after obtaining your own residence permit. Applications are made through AIMA (portal-rf.aima.gov.pt). Important: since 2024 (Lei 9/2024 + Lei 61/2025 of 23.10.2025), at least 2 years of legal residence in Portugal BEFORE applying is required. AIMA’s decision period is up to 9 months (previously 90 days). Exceptions: Golden Visa holders, D3 (EU Blue Card), and several other qualified statuses.',
  tags: ['family', 'reunification', 'reagrupamento', 'aima'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'who',
      title: 'Who you can bring',
      content: [
        { kind: 'checklist', items: [
          'Spouse (official marriage or união de facto — cohabitation for ≥ 2 years, requires registration at the Junta de Freguesia)',
          'Minor children (your own or your spouse’s)',
          'Adult student children up to age 27, financially dependent',
          'Parents of the applicant and spouse (if financial dependency is proven)',
          'Minor brothers/sisters under guardianship'
        ]}
      ]
    },
    {
      id: 'requirements',
      title: 'Requirements for the applicant',
      content: [
        { kind: 'checklist', items: [
          'Valid residence permit for ≥ 2 years at the time of application (introduced by Lei 9/2024; Lei 61/2025 confirmed this rule)',
          'Exceptions to the 2-year rule: Golden Visa holders, D3 (highly qualified professionals), EU Blue Card, refugees, researchers with a short-term contract, minor children, spouses where there has been cohabitation for ≥ 15 months.',
          'Suitable housing (rental contract for ≥ 12 months or property ownership, floor area ≥ 30 m² for 1 person + 15 m² for each additional person)',
          'Stable income — minimum 100% SMN (€920 in 2026) for the applicant + 50% for the spouse (€460) + 30% per child (€276 per child)',
          'Health insurance for all family members until SNS is obtained',
          'No debts to Finanças and Segurança Social'
        ]},
        { kind: 'warning', text: 'Lei 9/2024 (entered into force in 2024, confirmed by Lei 61/2025): at least 2 years of legal residence BEFORE applying for Reagrupamento Familiar. Previously, it was possible to apply immediately after obtaining a residence permit. This is the key change for new residents.' }
      ]
    },
    {
      id: 'process',
      title: 'Process',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: '1. Gather the family documents', content: [
            { kind: 'checklist', items: [
              'Marriage certificate (with apostille + translation)',
              'Children’s birth certificates (apostille + translation)',
              'Criminal record certificates for the spouse and adult family members',
              'Passports for all family members'
            ]}
          ]},
          { id: 'r2', title: '2. Submit the application to AIMA', content: [
            { kind: 'paragraph', text: 'Through the dedicated portal portal-rf.aima.gov.pt (launched in 2024) or at an in-person appointment. Select the “Reagrupamento Familiar” type.' }
          ]},
          { id: 'r3', title: '3. Receive preliminary approval', content: [
            { kind: 'timeline', text: 'Up to 9 months under Lei 61/2025 (previously “up to 90 days” — before the reform). In practice in 2026 — 6–12 months. If approved, AIMA sends a notification to the consulate in the family’s country of residence.' }
          ]},
          { id: 'r4', title: '4. The family obtains a visa at the consulate', content: [
            { kind: 'paragraph', text: 'On the basis of AIMA approval. The fee is around €90 per person.' }
          ]},
          { id: 'r5', title: '5. Entry and residence permit processing at AIMA', content: [
            { kind: 'timeline', text: 'Within 4 months from the date the visa is issued. Biometrics at AIMA. Card — in 30–90 days.' }
          ]}
        ]}
      ]
    },
    {
      id: 'union-de-facto',
      title: 'União de Facto (without marriage)',
      content: [
        { kind: 'paragraph', text: 'Portugal recognises civil partnerships. After 2 years of cohabitation, you can register união de facto at the Junta de Freguesia and use this as a basis for reunification.' }
      ]
    },
    {
      id: 'common-issues',
      title: 'Common issues',
      content: [
        { kind: 'warning', text: 'Insufficient housing floor area is a common reason for refusal. Check this before applying.' },
        { kind: 'warning', text: 'Expired apostilles or translations without sworn certification. Translations are accepted only from sworn translators or if certified by a consulate.' },
        { kind: 'paragraph', text: 'In the event of refusal, it is possible to appeal through the courts, but this takes 6–18 months.' }
      ]
    }
  ],
  costs: [
    { label: 'AIMA — appointment + assessment (each family member)', amountEUR: 133, note: 'from 01.03.2026' },
    { label: 'AIMA — residence permit (art. 75, each)', amountEUR: 307.20, note: 'from 01.03.2026' },
    { label: 'Visa at the consulate (each)', amountEUR: 90 },
    { label: 'Apostilles + translations', amountEURMin: 300, amountEURMax: 800 }
  ],
  timelineDaysMin: 90,
  timelineDaysMax: 270,
  sources: [
    { title: 'AIMA — Reagrupamento Familiar (portal-rf)', url: 'https://portal-rf.aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Reagrupamento Familiar', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/reagrupamento-familiar', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 23/2007 — articles 98-108', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2007-34532975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 9/2024 — 2-year residence requirement for Reagrupamento Familiar', url: 'https://diariodarepublica.pt/dr/detalhe/lei/9-2024', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 61/2025 — 9-month AIMA decision period', url: 'https://diariodarepublica.pt/dr/detalhe/lei/61-2025', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 90
}
