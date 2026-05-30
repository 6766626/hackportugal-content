export default {
  editorialVoice: 'hackportugal',
  id: 'nif-eu-cplp',
  categoryId: 'documents_fiscal',
  title: 'How to get a NIF — EU/EEA/Swiss and CPLP citizens',
  tldr: 'The need for a tax representative is determined not by citizenship, but by tax residence / address and whether there is a tax obligation in Portugal. For an address in the EU/EEA, a tax representative is usually not required (principles of mutual assistance directives). For an address in a CPLP country outside the EU, the general rules apply: a representative is needed where there is a tax link with Portugal. After Ofício Circulado 90054/2022, a simple NIF with no tax obligations in Portugal can often be obtained without a representative. Issuance at Finanças is free and takes one day.',
  audience: { citizenships: ['euEeaSwiss', 'cplp'] },
  tags: ['nif', 'documents', 'cplp', 'eu'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'why-easier',
      title: 'Why it is easier',
      content: [
        { kind: 'paragraph', text: 'If your tax address is in the EU/EEA, a representative is usually not required. If the address is outside the EU/EEA, including CPLP countries, Finanças may issue a NIF, but for subsequent tax obligations check the requirement for a representante fiscal or electronic notifications. The rule depends on the tax address, not the passport.' }
      ]
    },
    {
      id: 'how',
      title: 'How to get it',
      content: [
        { kind: 'checklist', items: [
          'Passport (original)',
          'Recent proof of address — for example, a utility bill, bank statement or another document accepted by the specific Finanças office; ideally issued within the last 3 months',
          'The NIF is issued through Finanças/AT. Having a process with AIMA does not in itself guarantee that a NIF will be issued at the same visit; check whether there is a separate appointment/window for Finanças'
        ]},
        { kind: 'paragraph', text: 'If you do not yet have a NIF, online booking through Portal das Finanças may be unavailable (many functions require a NIF/password).\n\nCheck Atendimento por Marcação/AT contacts, call the Centro de Atendimento Telefónico, or check whether you can attend a Finanças office/Loja do Cidadão in person.' },
        { kind: 'timeline', text: 'The NIF is usually issued on the day of a successful appointment; the timeframe does not include waiting for an appointment — in larger cities, the queue may take longer.' }
      ]
    },
    {
      id: 'cplp-note',
      title: 'CPLP citizens — important',
      audience: { citizenships: ['cplp'] },
      content: [
        { kind: 'paragraph', text: 'If you are in Portugal under the CPLP Mobility Agreement, you can get a NIF immediately after entry. For Brazilians, this is especially convenient, as no visa is required for up to 90 days and it is possible to apply for a residence permit from inside the country.' },
        { kind: 'warning', text: 'Lei 61/2025 (entered into force on 23/10/2025) tightened entry rules for CPLP citizens, except Brazil: a CPLP visa from the consulate is now required before entry. The exception is only Brazilians (90-day visa-free entry).\n\nCheck the current requirements at vistos.mne.gov.pt.' }
      ]
    }
  ],
  documents: [
    { title: 'Passport', note: 'original' },
    { title: 'Proof of actual address', note: 'in Portugal, in the EU/EEA or outside the EU/EEA; if the address is outside the EU/EEA — check the rules on a representante fiscal when tax obligations arise' }
  ],
  costs: [
    { label: 'Finanças fee', amountEUR: 0 }
  ],
  timelineDaysMin: 1,
  timelineDaysMax: 1,
  sources: [
    { title: 'ePortugal — Obtain a NIF', url: 'https://www.gov.pt/servicos/pedir-o-numero-de-identificacao-fiscal-nif-para-pessoa-singular', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'AT — Ofício Circulado 90054/2022 (representante fiscal)', url: 'https://info.portaldasfinancas.gov.pt/pt/atualidades/instrucoesadmin/Paginas/Oficio_Circulado_90054_2022.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Lei n.º 61/2025 — CPLP changes (DRE)', url: 'https://diariodarepublica.pt/dr/detalhe/lei/61-2025', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Vistos MNE — CPLP', url: 'https://vistos.mne.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
