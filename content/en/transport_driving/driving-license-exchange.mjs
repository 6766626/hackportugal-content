export default {
  editorialVoice: 'hackportugal',
  id: 'driving-license-exchange',
  categoryId: 'driving_license',
  title: 'Exchanging a driving licence for a Portuguese one',
  tldr: 'EU/EEA citizens — automatic recognition until the licence expires (no exchange). CPLP (Brazil, Cape Verde, etc.) — exchange without a test via IMT. Third-country nationals with bilateral agreements (UA, KZ, MD, etc.) — exchange without a test. For the Russian Federation and Belarus there is currently NO reciprocity — you must take the full theory + practical tests. Ukrainian licences are recognised for the entire Temporary Protection period (until 04.03.2027). The deadline for exchange after obtaining resident status (non-EU) is 2 years (DL 138/2012).',
  audience: { citizenships: ['cplp', 'thirdCountry'] },
  tags: ['driving licence', 'imt', 'exchange'],
  estimatedReadMinutes: 6,
  variants: [
    {
      id: 'eu',
      audience: { citizenships: ['euEeaSwiss'] },
      tldr: 'EU/EEA/Switzerland: licences are valid in Portugal automatically. If you wish, you can obtain a Portuguese licence through registration with IMT. You must register your licence with IMT within 60 days of obtaining resident status.'
    },
    {
      id: 'cplp',
      audience: { citizenships: ['cplp'] },
      tldr: 'CPLP (where an agreement exists): exchange without a test. No translation is required for Brazilian licences. Processing time at IMT is 60-120 days.'
    },
    {
      id: 'third-country',
      audience: { citizenships: ['thirdCountry'] },
      tldr: 'Third countries with a valid bilateral agreement (Ukraine since 2019, and several others) — exchange without a test. Russia and Belarus — NO reciprocity, you must retake the full theory + practical tests. Kazakhstan/Moldova/Azerbaijan — check the current IMT list (imt-ip.pt).'
    }
  ],
  steps: [
    {
      id: 'deadline',
      title: 'Deadline',
      content: [
        { kind: 'warning', text: 'Under Decreto-Lei 138/2012, foreign licences (non-EU) are valid in Portugal for **2 years from the date resident status is obtained**. After that, exchange or re-issuing is mandatory; otherwise, a fine and an offence are possible. For Ukrainians with Temporary Protection — validity applies for the entire protection period (until 04.03.2027 under Regulation EU 2022/1280).' }
      ]
    },
    {
      id: 'documents',
      title: 'Documents',
      content: [
        { kind: 'checklist', items: [
          'Foreign driving licence (original + copy)',
          'Notarised translation (for non-EU, except Brazil)',
          'Passport / residence permit / Cartão de Cidadão',
          'Medical certificate from an IMT-accredited pharmacy (approx. €30)',
          'Certificate from the issuing country confirming whether the licence is valid',
          'Copy of your record (if there have previously been fines/disqualifications)'
        ]}
      ]
    },
    {
      id: 'process',
      title: 'Process',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: '1. Medical examination', content: [
            { kind: 'paragraph', text: 'At an IMT-accredited clinic. They check eyesight, hearing and general health. They issue an "Atestado de Aptidão Física e Psíquica". Validity — 6 months.' }
          ]},
          { id: 'p2', title: '2. Submit an application to IMT', content: [
            { kind: 'paragraph', text: 'Online via portal.imt-ip.pt or in person at an IMT examination centre. Fee approx. €30.' }
          ]},
          { id: 'p3', title: '3. If there is an agreement — wait', content: [
            { kind: 'timeline', text: '60-120 days. On completion — an invitation to collect the new card or receipt by post.' }
          ]},
          { id: 'p4', title: '3b. If there is no agreement — tests', content: [
            { kind: 'paragraph', text: 'Theory on road traffic rules + practical driving in a car with an instructor. Driving school course €500-900. Tests are paid (approx. €30-50).' }
          ]}
        ]}
      ]
    },
    {
      id: 'renewal',
      title: 'Renewal/replacement',
      content: [
        { kind: 'paragraph', text: 'Portuguese licences are valid until the age of 70; after that — reassessment every 2 years. Replacement of category B — indefinite (with periodic medical examinations from the age of 50).' }
      ]
    }
  ],
  costs: [
    { label: 'Medical examination', amountEURMin: 25, amountEURMax: 50 },
    { label: 'IMT fee (exchange)', amountEUR: 30 },
    { label: 'Driving school + tests (if there is no agreement)', amountEURMin: 600, amountEURMax: 1200 }
  ],
  timelineDaysMin: 60,
  timelineDaysMax: 180,
  sources: [
    { title: 'IMT — Troca de Carta de Condução (driving licence)', url: 'https://www.imt-ip.pt/sites/imtt/portugues/Paginas/imtt.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Exchanging a Driving Licence', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/trocar-a-carta-de-conducao', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 180
}
