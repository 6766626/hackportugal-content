export default {
  editorialVoice: 'hackportugal',
  id: 'cplp-mobility',
  categoryId: 'residence_permit',
  title: 'Residence permit under the CPLP Mobility Agreement',
  tldr: 'Acordo de Mobilidade CPLP (CPLP mobility agreement) is a simplified route for citizens of Brazil, Angola, Mozambique, Cape Verde, Guinea-Bissau, São Tomé, East Timor, Equatorial Guinea. For Brazilians: visa-free entry + applying for a residence permit from within Portugal. For other CPLP citizens: a consular visa is mandatory after Lei 61/2025.',
  audience: { citizenships: ['cplp'] },
  tags: ['cplp', 'residence permit', 'brazil', 'mobility'],
  estimatedReadMinutes: 8,
  recentlyChangedAt: '2025-10-23',
  changeSummary: 'Decreto-Lei 37-A/2024 ended the acceptance of new Manifestação de Interesse applications from June 2024; Lei 61/2025 (in force from 23.10.2025) changed/tightened the subsequent regime, including CPLP procedures — for CPLP citizens except Brazilians, a visa before entry is now mandatory. The new nationality law was published as Lei Orgânica 1/2026 (18.05.2026) and is in force since 19.05.2026: the qualifying period for naturalisation for all CPLP citizens increased from 5 to 7 years. Under a transitional rule, applications filed before the law entered into force remain governed by the prior version (5 years).',
  variants: [
    {
      id: 'brazil',
      audience: { countryCodes: ['BR'] },
      tldr: 'Brazilians: visa-free entry for up to 90 days + applying for a residence permit inside the country at AIMA. If a close family member is a Portuguese/EU citizen, a separate family route may be available (this is NOT an automatic acceleration of the CPLP procedure).'
    },
    {
      id: 'other-cplp',
      audience: { countryCodes: ['AO', 'MZ', 'CV', 'GW', 'ST', 'TL', 'GQ'] },
      tldr: 'Angola, Mozambique, Cape Verde and other CPLP countries: a consular visa to Portugal is required BEFORE entry. After entry — apply for a residence permit at AIMA. Lei 61/2025 prohibited applications through Manifestação de Interesse.'
    }
  ],
  steps: [
    {
      id: 'step-brazil',
      title: 'Route for Brazilians',
      audience: { countryCodes: ['BR'] },
      content: [
        { kind: 'substeps', items: [
          { id: 'b1', title: '1. Visa-free entry', content: [
            { kind: 'paragraph', text: 'Brazilians may enter visa-free for up to 90 days, provided they meet the short-stay entry conditions. If you plan to apply under CPLP later from within Portugal, you should have documents confirming lawful entry and the basis for the application; the final decision on admission at the border remains with the border authorities.' }
          ]},
          { id: 'b2', title: '2. Obtain a NIF', content: [
            { kind: 'paragraph', text: 'Through Finanças in person (see the "NIF EU/CPLP" guide).' }
          ]},
          { id: 'b3', title: '3. Book an appointment with AIMA', content: [
            { kind: 'paragraph', text: 'Check the current booking channel on the official AIMA website for “Acordo de Mobilidade CPLP” — do not confuse an initial application with the renewals portal (portal-renovacoes — this is for renewals).\n\nIf the online channel is unavailable, use the official AIMA contact centre and the instructions on aima.gov.pt.' }
          ]},
          { id: 'b4', title: '4. Submit the documents', content: [
            { kind: 'checklist', items: [
              'Passport + copy',
              'NIF',
              'Proof of address in Portugal',
              'Proof of means (contract / bank statements / sponsor letter)',
              'Brazilian criminal record certificate with apostille',
              '3x4 photo'
            ]}
          ]},
          { id: 'b5', title: '5. Receive the residence permit', content: [
            { kind: 'timeline', text: 'Usually 30–90 days. The card arrives by post.' }
          ]}
        ]}
      ]
    },
    {
      id: 'step-other',
      title: 'Route for other CPLP citizens (except Brazil)',
      audience: { countryCodes: ['AO', 'MZ', 'CV', 'GW', 'ST', 'TL', 'GQ'] },
      content: [
        { kind: 'substeps', items: [
          { id: 'o1', title: '1. Consular visa', content: [
            { kind: 'paragraph', text: 'Apply to the Portuguese embassy or consulate in your country. Category — CPLP mobility or type D depending on the situation. For document types — see vistos.mne.gov.pt.' }
          ]},
          { id: 'o2', title: '2. Entry with the visa', content: [
            { kind: 'paragraph', text: 'The visa gives the initial right to enter and apply for a residence permit at AIMA.' }
          ]},
          { id: 'o3', title: '3. NIF + NISS', content: [
            { kind: 'paragraph', text: 'Arrange these immediately after entry.' }
          ]},
          { id: 'o4', title: '4. Apply for a CPLP residence permit at AIMA', content: [
            { kind: 'paragraph', text: 'The same process as for Brazilians, but with a visa in hand.' }
          ]}
        ]}
      ]
    },
    {
      id: 'benefits',
      title: 'Benefits of the CPLP residence permit',
      content: [
        { kind: 'checklist', items: [
          'Validity and renewals depend on the type of document issued: early/electronic CPLP certificates may have been issued for 1 year; card-based temporary residence permits under art. 75 usually follow the scheme of 2 years initial + 3 years renewal — check the term printed on the card/AIMA decision',
          'Free access to work without a separate work permit',
          'Naturalisation after 7 years of lawful residence: Lei Orgânica 1/2026, in force since 19.05.2026, increased the period for CPLP citizens from 5 to 7 years. Under a transitional rule, applications filed before the law entered into force keep the prior 5-year regime',
          'Brazilian residents may separately request the Estatuto de Igualdade de Direitos e Deveres; political rights require a separate status and usually 3 years of residence',
          'Simplified access to SNS and schools'
        ]}
      ]
    },
    {
      id: 'caveats',
      title: 'Important caveats for 2026',
      content: [
        { kind: 'warning', text: 'New Manifestação de Interesse applications were ended by Decreto-Lei 37-A/2024 from June 2024. Lei 61/2025, in force from 23.10.2025, changed/tightened the subsequent regime and transitional rules, including CPLP procedures. 31.12.2025 is the deadline for the transitional period for applications already submitted. All new procedures go through AIMA or through a consular visa.' },
        { kind: 'warning', text: 'AIMA has a large queue — appointments may be 2–4 months ahead. Book your appointment in advance.' },
        { kind: 'paragraph', text: 'Updates and current timelines — the official AIMA website (aima.gov.pt) and Vistos MNE (vistos.mne.gov.pt).' }
      ]
    }
  ],
  documents: [
    { title: 'Passport', note: 'valid for ≥ 6 months' },
    { title: 'CPLP visa', note: 'only for non-Brazilians' },
    { title: 'NIF', note: 'NISS — if applicable/if you already have one, especially when employed or self-employed' },
    { title: 'Proof of address', note: 'format depends on the current AIMA checklist' },
    { title: 'Proof of means', note: 'may be required by the consulate or AIMA in a specific scenario' },
    { title: 'Criminal record certificate', note: 'apostille/legalisation according to the rules of the issuing country; translation is needed if the document is not in Portuguese' }
  ],
  costs: [
    { label: 'CPLP visa (consulate)', amountEURMin: 75, amountEURMax: 100 },
    { label: 'AIMA — appointment + analysis', amountEUR: 133, note: 'from 01.03.2026' },
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
  lastVerified: '2026-05-31',
  verifyIntervalDays: 60
}
