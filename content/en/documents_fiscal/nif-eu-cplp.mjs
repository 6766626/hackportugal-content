export default {
  editorialVoice: 'hackportugal',
  id: 'nif-eu-cplp',
  categoryId: 'documents_fiscal',
  title: 'How to get an NIF — EU/EEA/Swiss and CPLP citizens',
  tldr: 'The need for a tax representative is determined not by citizenship but by tax residency/address and whether you have a tax obligation in Portugal. For an EU/EEA address a tax representative is usually not required (principles of the mutual assistance directives). For a CPLP address outside the EU the general rules apply: a representative is needed when you have a tax nexus with Portugal. Since Ofício Circulado 90054/2022, a basic NIF with no tax obligations in Portugal can often be issued without a representative. Issuing at Finanças — free, one day.',
  audience: { citizenships: ['euEeaSwiss', 'cplp'] },
  tags: ['nif', 'documents', 'cplp', 'eu'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'why-easier',
      title: 'Why it is easier',
      content: [
        { kind: 'paragraph', text: 'For EU/EEA/Swiss and CPLP citizens, a home-country address is accepted without a tax representative. The application is submitted with a passport and proof of address.' }
      ]
    },
    {
      id: 'how',
      title: 'How to get it',
      content: [
        { kind: 'checklist', items: [
          'Passport (original)',
          'Proof of address (utility bill, bank statement within the last 3 months). For EU citizens, a home-country address is accepted',
          'CPLP citizens under the CPLP Mobility Agreement often already have a process at AIMA — the NIF is issued during the same visit'
        ]},
        { kind: 'paragraph', text: 'Book on the Portal das Finanças (tax portal) → "Agendamentos" → "Atribuição de NIF", or walk in (before 09:00 in Lisbon/Porto).' },
        { kind: 'timeline', text: 'The NIF is issued on the day of the visit.' }
      ]
    },
    {
      id: 'cplp-note',
      title: 'CPLP citizens — important',
      audience: { citizenships: ['cplp'] },
      content: [
        { kind: 'paragraph', text: 'If you are in Portugal under the CPLP Mobility Agreement, you can obtain an NIF immediately after entry. For Brazilians, this is especially convenient, as a visa is not required for up to 90 days and you can apply for a residence permit from within the country.' },
        { kind: 'warning', text: 'Lei 61/2025 (in force since 23.10.2025) tightened entry rules for CPLP citizens other than Brazil: a CPLP visa must now be obtained at a consulate before entry. The only exception is Brazilians (visa-free entry for 90 days). Check the current requirements at vistos.mne.gov.pt.' }
      ]
    }
  ],
  documents: [
    { title: 'Passport', note: 'original' },
    { title: 'Proof of address', note: 'from an EU or CPLP country, or from Portugal' }
  ],
  costs: [
    { label: 'Finanças fee', amountEUR: 0 }
  ],
  timelineDaysMin: 1,
  timelineDaysMax: 1,
  sources: [
    { title: 'Portal das Finanças — NIF', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.htmlindex.htmlindex.html', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Obtain NIF', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/obter-numero-de-identificacao-fiscal-nif-', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — CPLP Mobility Agreement', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 180
}
