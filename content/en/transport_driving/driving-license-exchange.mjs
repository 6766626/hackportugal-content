export default {
  editorialVoice: 'hackportugal',
  id: 'driving-license-exchange',
  categoryId: 'driving_license',
  title: 'Exchanging a driving licence for a Portuguese one',
  tldr: 'EU/EEA citizens — automatic recognition until the licence expires (no exchange). CPLP/OECD/countries with an agreement (Brazil, Cape Verde, Ukraine, etc.) — exchange without an exam via IMT if the conditions are met. For the Russian Federation/Belarus there is currently no reciprocity — exams are usually required. Ukrainian licences are recognised for the full duration of Proteção Temporária (until 04.03.2027). Under DL 138/2012, the rules depend on the issuing country: for countries with a recognised regime, exchange without an exam is usually possible up to 2 years from the date residence is recorded; after 2 years, a practical exam may be required.',
  audience: { citizenships: ['cplp', 'thirdCountry'] },
  tags: ['licence', 'imt', 'exchange'],
  estimatedReadMinutes: 6,
  variants: [
    {
      id: 'eu',
      audience: { citizenships: ['euEeaSwiss'] },
      tldr: 'EU/EEA/Switzerland: licences are valid in Portugal automatically. If desired, you can obtain a Portuguese licence by registering with IMT. It is mandatory to register the licence with IMT within 60 days after obtaining resident status.'
    },
    {
      id: 'cplp',
      audience: { citizenships: ['cplp'] },
      tldr: 'CPLP (where there is an agreement): exchange without an exam. No translation is required for Brazilian licences. IMT processing time — 60-120 days.'
    },
    {
      id: 'third-country',
      audience: { citizenships: ['thirdCountry'] },
      tldr: 'Third countries with a valid bilateral agreement (Ukraine since 2019, and several others) — exchange without an exam. Russia and Belarus — NO reciprocity, full theory + practical tests are required from scratch. Kazakhstan/Moldova/Azerbaijan — check the current IMT list (imt-ip.pt).'
    }
  ],
  steps: [
    {
      id: 'deadline',
      title: 'Deadline',
      content: [
        { kind: 'warning', text: 'Under Decreto-Lei 138/2012, the rules depend on the issuing country. If the licence is eligible for exchange, the request usually needs to be made after residence is recorded and within the established deadlines; **up to 2 years from the date of residence, exchange is possible without an exam for countries with a recognised regime**, after 2 years a practical exam may be required. For CPLP/OECD, conditions are often simplified. For Ukrainians with Proteção Temporária — validity lasts for the full protection period (until 04.03.2027 under EU Regulation 2022/1280).' }
      ]
    },
    {
      id: 'documents',
      title: 'Documents',
      content: [
        { kind: 'checklist', items: [
          'Foreign driving licence (original + copy)',
          'Notarised translation (for non-EU licences, except Brazil)',
          'Passport / residence permit / Cartão de Cidadão',
          'Medical certificate from an IMT-accredited pharmacy (~€30)',
          'Certificate from the issuing country confirming whether the licence is valid',
          'Copy of the record (if there were previous fines/disqualifications)'
        ]}
      ]
    },
    {
      id: 'process',
      title: 'Process',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: '1. Medical examination', content: [
            { kind: 'paragraph', text: 'At an IMT-accredited clinic. They check vision, hearing, and general health. They issue an "Atestado de Aptidão Física e Psíquica". Validity — 6 months.' }
          ]},
          { id: 'p2', title: '2. Apply to IMT', content: [
            { kind: 'paragraph', text: 'Online via portal.imt-ip.pt or in person at an IMT examination centre. Fee ~€30.' }
          ]},
          { id: 'p3', title: '3. If there is an agreement — wait', content: [
            { kind: 'timeline', text: '60-120 days. Upon completion — an invitation to collect the new card or receipt by post.' }
          ]},
          { id: 'p4', title: '3b. If there is no agreement — exams', content: [
            { kind: 'paragraph', text: 'Theory on the Highway Code + practical driving with an instructor. Driving school course €500-900. Exams are paid (~€30-50).' }
          ]}
        ]}
      ]
    },
    {
      id: 'renewal',
      title: 'Renewal/replacement',
      content: [
        { kind: 'paragraph', text: 'Renewal deadlines depend on the date of issue and category. For category B/group I issued after 30.07.2016: every 15 years until age 60, then at 60, 65, 70 and after 70 — every 2 years; a medical certificate is usually required from age 60. For older licences and professional categories, the rules are different — check the IMT table.' }
      ]
    }
  ],
  costs: [
    { label: 'Medical examination', amountEURMin: 25, amountEURMax: 50 },
    { label: 'IMT fee (exchange)', amountEUR: 30 },
    { label: 'Driving school + exams (if there is no agreement)', amountEURMin: 600, amountEURMax: 1200 }
  ],
  timelineDaysMin: 60,
  timelineDaysMax: 180,
  sources: [
    { title: 'IMT — Troca de Carta de Condução (driving licence)', url: 'https://www.imt-ip.pt/sites/imtt/portugues/Paginas/imtt.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Exchange a driving licence', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/trocar-a-carta-de-conducao', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
