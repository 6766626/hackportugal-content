export default {
  editorialVoice: 'hackportugal',
  id: 'reagrupamento-familiar',
  categoryId: 'residence_permit',
  title: 'Family reunification (Reagrupamento Familiar)',
  tldr: 'A process that allows you to bring a spouse, children or parents after obtaining your own residence permit. Applications are submitted through AIMA (portal-rf.aima.gov.pt).\n\nImportant: Lei 61/2025 (published 22.10.2025, in force from 23.10.2025) introduced a requirement of 2 years of legal residence BEFORE applying. However, the Constitutional Court (Acórdão 785/2025) ruled the absolute 2-year condition unconstitutional as it applies to spouses and minor children. The exact requirements depend on the family member category — individual checking is needed.\n\nAIMA decision time — up to 9 months (previously 3 months, extendable to 6).\n\nExceptions: Golden Visa holders, EU Blue Card holders, highly qualified professionals, researchers and several other qualified statuses; spouses and families with minor children have separate protection.',
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
          'Adult student children up to 27 years old, financially dependent',
          'Parents of the applicant and spouse (if financial dependence is proven)',
          'Minor siblings under guardianship'
        ]}
      ]
    },
    {
      id: 'requirements',
      title: 'Requirements for the applicant',
      content: [
        { kind: 'checklist', items: [
          'As a general rule — a valid residence permit for ≥ 2 years at the time of application (introduced by Lei 61/2025, which amended Lei 23/2007). Important: the Constitutional Court (Acórdão 785/2025) ruled the absolute 2-year condition unconstitutional for spouses and families with minor children, so it does not apply to them',
          'Exceptions and reductions to the 2-year rule: Golden Visa holders, EU Blue Card, highly qualified professionals (arts. 90, 90-A, 121-A), refugees, researchers with a short-term contract, minors or incapacitated dependants; for spouses/partners without children — a reduced threshold (around 15 months of residence with prior cohabitation). The exact conditions depend on the category — check individually',
          'Suitable accommodation (rental contract for a term of ≥ 12 months or ownership, floor area ≥ 30 m² for 1 person + 15 m² for each additional person)',
          'Stable income — minimum 100% SMN (€920 in 2026) for the applicant + 50% for the spouse (€460) + 30% per child (€276 per child)',
          'Health insurance for all family members until SNS is obtained',
          'No debts to Finanças or Segurança Social'
        ]},
        { kind: 'warning', text: 'Lei 61/2025 (published 22.10.2025, in force from 23.10.2025; amended Lei 23/2007) introduced a requirement of at least 2 years of legal residence BEFORE applying for Reagrupamento Familiar. Previously, it was possible to apply immediately after obtaining a residence permit. However, in Acórdão 785/2025 the Constitutional Court ruled this condition unconstitutional for spouses and families with minor children — for them the 2-year period does not apply. Because of this instability, always check the current version of the law and AIMA practice before applying.' }
      ]
    },
    {
      id: 'process',
      title: 'Process',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: '1. Gather family documents', content: [
            { kind: 'checklist', items: [
              'Marriage certificate (with apostille + translation)',
              'Children’s birth certificates (apostille + translation)',
              'Criminal record certificates for the spouse and adult family members',
              'Passports of all family members'
            ]}
          ]},
          { id: 'r2', title: '2. Submit the application to AIMA', content: [
            { kind: 'paragraph', text: 'Through the dedicated portal portal-rf.aima.gov.pt (launched in 2024) or at an in-person appointment. Select the “Reagrupamento Familiar” type.' }
          ]},
          { id: 'r3', title: '3. Receive preliminary approval', content: [
            { kind: 'timeline', text: 'Up to 9 months under Lei 61/2025 (previously 3 months, extendable by a further 3; the rule on “tacit approval” after 6 months was also revoked). In practice in 2026 — 6–12 months. If approved, AIMA sends a notification to the consulate in the family’s country of residence.' }
          ]},
          { id: 'r4', title: '4. The family obtains a visa at the consulate', content: [
            { kind: 'paragraph', text: 'On the basis of AIMA approval. Fee — around €90 per person.' }
          ]},
          { id: 'r5', title: '5. Entry and residence permit processing at AIMA', content: [
            { kind: 'timeline', text: 'Within 4 months from the date the visa is issued. Biometrics at AIMA. Card — within 30–90 days.' }
          ]}
        ]}
      ]
    },
    {
      id: 'union-de-facto',
      title: 'União de Facto (without marriage)',
      content: [
        { kind: 'paragraph', text: 'Portugal recognises civil partnerships. After 2 years of cohabitation, you can register união de facto at the Junta de Freguesia and use this as the basis for reunification.' }
      ]
    },
    {
      id: 'common-issues',
      title: 'Common issues',
      content: [
        { kind: 'warning', text: 'Insufficient accommodation floor area is a common reason for refusal. Check before applying.' },
        { kind: 'warning', text: 'Expired apostilles or translations without sworn certification. Translations are accepted only from sworn translators or if certified by a consulate.' },
        { kind: 'paragraph', text: 'In the event of refusal, an appeal through the courts is possible, but this takes 6–18 months.' }
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
    { title: 'ePortugal — Reagrupamento Familiar', url: 'https://www.gov.pt/cidadaos/-/informacoes/reagrupamento-familiar', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 23/2007 — Articles 98-108', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2007-34532975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 61/2025 (DR No. 204, 22.10.2025) — amendments to Lei 23/2007 (2-year condition, 9-month AIMA decision period)', url: 'https://files.diariodarepublica.pt/1s/2025/10/20400/0000900017.pdf', kind: 'law', language: 'pt', lastRetrieved: '2026-05-31' },
    { title: 'Tribunal Constitucional — Acórdão 785/2025 (unconstitutionality of several Reagrupamento Familiar provisions)', url: 'https://www.tribunalconstitucional.pt/tc/acordaos/20250785.html', kind: 'official', language: 'pt', lastRetrieved: '2026-05-31' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
