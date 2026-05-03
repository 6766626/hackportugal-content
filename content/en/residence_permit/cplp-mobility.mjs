export default {
  editorialVoice: 'hackportugal',
  id: 'cplp-mobility',
  categoryId: 'residence_permit',
  title: 'Residence permit under the CPLP Mobility Agreement',
  tldr: 'CPLP Mobility Agreement — a simplified route for citizens of Brazil, Angola, Mozambique, Cabo Verde, Guinea-Bissau, São Tomé, Timor-Leste, Equatorial Guinea. For Brazilians: visa-free entry + apply for a residence permit from within Portugal. For other CPLP citizens: a consular visa is mandatory after Lei 61/2025.',
  audience: { citizenships: ['cplp'] },
  tags: ['cplp', 'residence permit', 'brazil', 'mobility'],
  estimatedReadMinutes: 8,
  recentlyChangedAt: '2025-10-23',
  changeSummary: 'Lei 61/2025 (in force since 23.10.2025) abolished Manifestação de Interesse and tightened the rules for CPLP citizens, except Brazilians: a visa before entry is now mandatory. The new nationality law (01.04.2026, awaiting the signature of President Seguro) will increase the qualifying period for citizenship from 5 to 7 years for all CPLP citizens.',
  variants: [
    {
      id: 'brazil',
      audience: { countryCodes: ['BR'] },
      tldr: 'Brazilians: visa-free entry for up to 90 days + apply for a residence permit inside the country at AIMA. The easiest route. Having Portuguese citizenship in the family speeds up the process.'
    },
    {
      id: 'other-cplp',
      audience: { countryCodes: ['AO', 'MZ', 'CV', 'GW', 'ST', 'TL', 'GQ'] },
      tldr: 'Angola, Mozambique, Cabo Verde and other CPLP countries: a consular visa to Portugal is required BEFORE entry. After entry — apply for a residence permit at AIMA. Lei 61/2025 banned applying via Manifestação de Interesse.'
    }
  ],
  steps: [
    {
      id: 'step-brazil',
      title: 'Path for Brazilians',
      audience: { countryCodes: ['BR'] },
      content: [
        { kind: 'substeps', items: [
          { id: 'b1', title: '1. Visa-free entry', content: [
            { kind: 'paragraph', text: 'A Brazilian passport gives 90 days in the Schengen Area. At the border, state the purpose of entry — residence under the CPLP mobility scheme.' }
          ]},
          { id: 'b2', title: '2. Get a NIF', content: [
            { kind: 'paragraph', text: 'Through Finanças in person (see the "NIF EU/CPLP" guide).' }
          ]},
          { id: 'b3', title: '3. Book with AIMA', content: [
            { kind: 'paragraph', text: 'Through portal-renovacoes.aima.gov.pt or by phone 217 115 000. Choose the type "Acordo de Mobilidade CPLP".' }
          ]},
          { id: 'b4', title: '4. Submit documents', content: [
            { kind: 'checklist', items: [
              'Passport + copy',
              'NIF',
              'Proof of address in Portugal',
              'Proof of funds (employment contract / bank statements / sponsor letter)',
              'Brazilian criminal record certificate with apostille',
              '3×4 cm photo'
            ]}
          ]},
          { id: 'b5', title: '5. Get the residence permit', content: [
            { kind: 'timeline', text: 'Usually 30–90 days. The card arrives by post.' }
          ]}
        ]}
      ]
    },
    {
      id: 'step-other',
      title: 'Path for other CPLP citizens (except Brazil)',
      audience: { countryCodes: ['AO', 'MZ', 'CV', 'GW', 'ST', 'TL', 'GQ'] },
      content: [
        { kind: 'substeps', items: [
          { id: 'o1', title: '1. Consular visa', content: [
            { kind: 'paragraph', text: 'Contact the Portuguese embassy or consulate in your country. Category — CPLP mobility or type D depending on your situation. Document types — see vistos.mne.gov.pt.' }
          ]},
          { id: 'o2', title: '2. Entry with the visa', content: [
            { kind: 'paragraph', text: 'The visa grants the initial right to enter and to apply for a residence permit at AIMA.' }
          ]},
          { id: 'o3', title: '3. NIF + NISS', content: [
            { kind: 'paragraph', text: 'Arrange immediately after entry.' }
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
          'Extension for 2 years × 2 times — total 5 years',
          'Work without a separate work permit',
          'Ability to apply for citizenship after 5 years (7 years under the pending law)',
          'For Brazilians — "Estatuto de Igualdade" grants certain political and economic rights after 3 years',
          'Simplified access to the SNS and schools'
        ]}
      ]
    },
    {
      id: 'caveats',
      title: 'Important caveats for 2026',
      content: [
        { kind: 'warning', text: 'Manifestação de Interesse (application without a visa) has been abolished by Lei 61/2025 — the law has been in force since 23.10.2025. Acceptance of new applications had already stopped from 03.06.2024 (Decreto-Lei 37-A/2024); 31.12.2025 is the final deadline of the transition period for applications already submitted. All procedures now go through AIMA or via a consular visa.' },
        { kind: 'warning', text: 'AIMA has long queues — appointments can be 2–4 months ahead. Book your slot in advance.' },
        { kind: 'paragraph', text: 'Updates and current timelines — the official AIMA website (aima.gov.pt) and MNE Visas (vistos.mne.gov.pt).' }
      ]
    }
  ],
  documents: [
    { title: 'Passport', note: 'valid ≥ 6 months' },
    { title: 'CPLP visa', note: 'for non-Brazilians only' },
    { title: 'NIF + NISS' },
    { title: 'Proof of address' },
    { title: 'Proof of funds' },
    { title: 'Criminal record certificate', note: 'with apostille and translation' }
  ],
  costs: [
    { label: 'CPLP visa (consulate)', amountEURMin: 75, amountEURMax: 100 },
    { label: 'AIMA — intake + analysis', amountEUR: 133, note: 'from 01.03.2026' },
    { label: 'AIMA — residence permit (art. 75)', amountEUR: 307.20, note: 'from 01.03.2026' }
  ],
  timelineDaysMin: 30,
  timelineDaysMax: 120,
  sources: [
    { title: 'AIMA — CPLP Mobility Agreement', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'MNE Visas — CPLP', url: 'https://vistos.mne.gov.pt/pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Law no. 61/2025 (DRE)', url: 'https://diariodarepublica.pt/dr/detalhe/lei/61-2025', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'CPLP — official portal', url: 'https://www.cplp.org/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-03',
  verifyIntervalDays: 60
}
