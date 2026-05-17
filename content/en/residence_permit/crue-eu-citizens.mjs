export default {
  editorialVoice: 'hackportugal',
  id: 'crue-eu-citizens',
  categoryId: 'residence_permit',
  title: 'CRUE — registration for EU/EEA/Swiss citizens',
  tldr: 'EU/EEA/Swiss citizens do not need a visa. If you plan to live in Portugal for MORE THAN 3 months, you must register within 30 days after the first 3 months of stay have elapsed and obtain the Certificado de Registo de Cidadão da União Europeia (CRUE). It is issued at the Câmara Municipal for your place of residence. Approx. €15 (for children under 6 — €7.50), usually issued on the day of the appointment; waiting time for an appointment depends on the municipality.',
  audience: { citizenships: ['euEeaSwiss'] },
  tags: ['crue', 'eu', 'registration'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'what',
      title: 'What CRUE is',
      content: [
        { kind: 'paragraph', text: 'CRUE = Certificado de Registo de Cidadão da União Europeia. It confirms your right to live in Portugal as an EU citizen. It is valid for 5 years; after that — permanent residence.' },
        { kind: 'warning', text: 'This is NOT the equivalent of a residence permit for third-country nationals — CRUE does not give you more rights than you already have as an EU citizen. It is simply registration of residence.' }
      ]
    },
    {
      id: 'when',
      title: 'When to register',
      content: [
        { kind: 'paragraph', text: 'CRUE is needed only if you intend to stay in Portugal for MORE THAN 3 months; for stays of up to 3 months, a valid ID/passport is usually sufficient for an EU citizen. Under Lei n.º 37/2006 art. 14: registration is done within 30 days after the first 3 months of stay have elapsed. The fine for non-compliance is €400–1500.' },
        { kind: 'paragraph', text: 'In practice, many municipalities accept registration immediately after entry.' }
      ]
    },
    {
      id: 'where',
      title: 'Where to obtain it',
      content: [
        { kind: 'paragraph', text: 'Usually — at the Câmara Municipal for your place of residence. In some municipalities, part of the service may be delegated to the Junta de Freguesia, but this must be checked locally.' },
        { kind: 'paragraph', text: 'Appointments depend on the municipality: check your Câmara Municipal website or contact the service desk/municipal services directly. Portal do Eleitor is NOT used for CRUE (it is a website for electoral matters). In large cities (Lisbon, Porto), an appointment is mandatory.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documents',
      content: [
        { kind: 'paragraph', text: 'Under Lei n.º 37/2006 art. 7, the specific documents depend on the category:' },
        { kind: 'checklist', items: [
          'National identity card or passport',
          'Proof of address in Portugal (rental contract / proof of accommodation)',
          'Employee / self-employed: declaration on oath regarding employment or independent activity, contract or declaração de início de atividade, if requested',
          'Student: proof of enrolment + declaração of sufficient resources and (where applicable) health cover',
          'Economically inactive / pensioner: declaração of sufficient resources and (where applicable) health cover'
        ]},
        { kind: 'paragraph', text: 'A declaração sob compromisso de honra is often sufficient, but the specific Câmara may request bank statements, pension proof, contract, enrolment letter or other evidence — check your municipality’s list in advance.' }
      ]
    },
    {
      id: 'after',
      title: 'After obtaining it',
      content: [
        { kind: 'checklist', items: [
          'NIF can and usually should be obtained BEFORE CRUE or in parallel — it is often needed for renting, work and utilities',
          'NISS (if you work)',
          'Registration with SNS / centro de saúde — usually with NIF, CRUE and proof of address; depending on the situation, they may request NISS, S1 or other proof of entitlement to healthcare',
          'Exchanging driving licences — not needed, EU licences are accepted directly',
          'After 5 years — a separate procedure to request a certificado de residência permanente; this is not an automatic replacement of CRUE'
        ]},
        { kind: 'paragraph', text: 'Under current law, naturalisation is possible after 5 years of legal residence, provided the other conditions are met, including A2 Portuguese. **03.05.2026 President Seguro promulgated Decreto AR 48/XVII** — after publication in the DRE, the period for EU/EEA/Swiss citizens will increase to 7 years (aligned with CPLP).' }
      ]
    }
  ],
  costs: [
    { label: 'CRUE fee', amountEUR: 15, note: 'for children under 6 — around €7.50; check against the tabela of your Câmara Municipal' }
  ],
  timelineDaysMin: 1,
  timelineDaysMax: 1,
  sources: [
    { title: 'ePortugal — registration as an EU citizen', url: 'https://eportugal.gov.pt/cidadaos-ue/-/informacoes/registar-como-cidadao-da-uniao-europeia', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei nº 37/2006 — entry and residence of EU citizens', url: 'https://diariodarepublica.pt/dr/detalhe/lei/37-2006', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Your Europe — residence formalities in Portugal', url: 'https://europa.eu/youreurope/citizens/residence/index_en.htm', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
