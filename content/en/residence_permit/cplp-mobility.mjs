export default {
  editorialVoice: 'hackportugal',
  id: 'cplp-mobility',
  categoryId: 'residence_permit',
  title: 'Residence permit under the CPLP Mobility Agreement',
  tldr: 'Acordo de Mobilidade CPLP (CPLP Mobility Agreement) — a simplified pathway for citizens of Brazil, Angola, Mozambique, Cabo Verde, Guinea-Bissau, São Tomé, Timor-Leste, Equatorial Guinea. For Brazilians: visa-free entry + apply for a residence permit from inside Portugal. For other CPLP citizens: a consular visa is mandatory after Lei 61/2025.',
  audience: { citizenships: ['cplp'] },
  tags: ['cplp', 'residence permit', 'brazil', 'mobility'],
  estimatedReadMinutes: 8,
  recentlyChangedAt: '2025-10-23',
  changeSummary: 'Lei 61/2025 (in force since 23.10.2025) abolished the Manifestação de Interesse and tightened rules for CPLP citizens other than Brazilians: a visa before entry is now mandatory. The new nationality law (Decreto AR 48/XVII, promulgated by President Seguro on 03.05.2026; will enter into force after publication in the DRE) will increase the qualifying residence period for citizenship from 5 to 7 years for all CPLP citizens.',
  variants: [
    {
      id: 'brazil',
      audience: { countryCodes: ['BR'] },
      tldr: 'Brazilians: visa-free entry for up to 90 days + apply for a residence permit inside the country at AIMA. The easiest path. Having Portuguese nationality in the family speeds things up.'
    },
    {
      id: 'other-cplp',
      audience: { countryCodes: ['AO', 'MZ', 'CV', 'GW', 'ST', 'TL', 'GQ'] },
      tldr: 'Angola, Mozambique, Cabo Verde and other CPLP countries: a consular visa for Portugal is required BEFORE entry. After entry — apply for a residence permit at AIMA. Lei 61/2025 banned applications via Manifestação de Interesse.'
    }
  ],
  steps: [
    {
      id: 'step-brazil',
      title: 'Pathway for Brazilians',
      audience: { countryCodes: ['BR'] },
      content: [
        { kind: 'substeps', items: [
          { id: 'b1', title: '1. Visa-free entry', content: [
            { kind: 'paragraph', text: 'A Brazilian passport grants 90 days in the Schengen Area. At the border, state the purpose of entry — residence under CPLP mobility.' }
          ]},
          { id: 'b2', title: '2. Get a NIF', content: [
            { kind: 'paragraph', text: 'In person at Finanças (see the "NIF EU/CPLP" guide).' }
          ]},
          { id: 'b3', title: '3. Book with AIMA', content: [
            { kind: 'paragraph', text: 'Via portal-renovacoes.aima.gov.pt or by phone 217 115 000. Choose the type "Acordo de Mobilidade CPLP".' }
          ]},
          { id: 'b4', title: '4. Submit documents', content: [
            { kind: 'checklist', items: [
              'Passport + copy',
              'NIF',
              'Proof of address in Portugal',
              'Proof of means (contract / bank statements / sponsor letter)',
              'Brazilian criminal record certificate with apostille',
              '3×4 cm photo'
            ]}
          ]},
          { id: 'b5', title: '5. Receive the residence permit', content: [
            { kind: 'timeline', text: 'Typically 30–90 days. The card arrives by post.' }
          ]}
        ]}
      ]
    },
    {
      id: 'step-other',
      title: 'Pathway for other CPLP citizens (except Brazil)',
      audience: { countryCodes: ['AO', 'MZ', 'CV', 'GW', 'ST', 'TL', 'GQ'] },
      content: [
        { kind: 'substeps', items: [
          { id: 'o1', title: '1. Consular visa', content: [
            { kind: 'paragraph', text: 'Apply at the Portuguese embassy or consulate in your country. Category — CPLP mobility or type D, depending on your case. Document types — see vistos.mne.gov.pt.' }
          ]},
          { id: 'o2', title: '2. Entry with the visa', content: [
            { kind: 'paragraph', text: 'The visa grants the initial right to enter and apply for a residence permit at AIMA.' }
          ]},
          { id: 'o3', title: '3. NIF + NISS', content: [
            { kind: 'paragraph', text: 'Arrange them immediately after entry.' }
          ]},
          { id: 'o4', title: '4. Apply for the CPLP residence permit at AIMA', content: [
            { kind: 'paragraph', text: 'The same process as for Brazilians, but with the visa in hand.' }
          ]}
        ]}
      ]
    },
    {
      id: 'benefits',
      title: 'Benefits of the CPLP residence permit',
      content: [
        { kind: 'checklist', items: [
          'Initial residence permit for 1 year',
          'Renewal for 2 years × 2 times — total 5 years',
          'Free to work without a separate work authorisation',
          'Eligibility to request citizenship after 5 years (7 years under the pending law)',
          'For Brazilians — the "Estatuto de Igualdade" grants some political and economic rights after 3 years',
          'Simplified access to the SNS and schools'
        ]}
      ]
    },
    {
      id: 'caveats',
      title: 'Important caveats for 2026',
      content: [
        { kind: 'warning', text: 'Manifestação de Interesse (application without a visa) was abolished by Lei 61/2025 — the law has been in force since 23.10.2025. Intake of new applications had already stopped from 03.06.2024 (Decreto-Lei 37-A/2024); 31.12.2025 — final deadline of the transitional period for those already filed. All procedures now run via AIMA or via a consular visa.' },
        { kind: 'warning', text: 'There is a long queue at AIMA — appointments may be 2–4 months ahead. Book your appointment in advance.' },
        { kind: 'paragraph', text: 'Updates and current timelines — the official AIMA website (aima.gov.pt) and Vistos MNE (vistos.mne.gov.pt).' }
      ]
    }
  ],
  documents: [
    { title: 'Passport', note: 'valid ≥ 6 months' },
    { title: 'CPLP visa', note: 'only for non-Brazilians' },
    { title: 'NIF + NISS' },
    { title: 'Proof of address' },
    { title: 'Proof of means' },
    { title: 'Criminal record certificate', note: 'with apostille and translation' }
  ],
  costs: [
    { label: 'CPLP visa (consulate)', amountEURMin: 75, amountEURMax: 100 },
    { label: 'AIMA — intake + assessment', amountEUR: 133, note: 'from 01.03.2026' },
    { label: 'AIMA — residence permit (art. 75)', amountEUR: 307.20, note: 'from 01.03.2026' }
  ],
  timelineDaysMin: 30,
  timelineDaysMax: 120,
  sources: [
    { title: 'AIMA — Acordo de Mobilidade CPLP', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Vistos MNE — CPLP', url: 'https://vistos.mne.gov.pt/pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei nº 61/2025 (DRE)', url: 'https://diariodarepublica.pt/dr/detalhe/lei/61-2025', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'CPLP — official portal', url: 'https://www.cplp.org/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-03',
  verifyIntervalDays: 60
}
