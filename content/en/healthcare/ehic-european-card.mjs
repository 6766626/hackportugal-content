export default {
  editorialVoice: 'hackportugal',
  id: 'ehic-european-card',
  categoryId: 'healthcare',
  title: 'CESD — European Health Insurance Card (EHIC)',
  tldr: 'Cartão Europeu de Seguro de Doença (CESD), also known as EHIC — gives access to public healthcare in all EU countries, the EEA, Switzerland and the United Kingdom on the same terms as local residents. Free, valid for 5 years. Issued to PT residents with Segurança Social (NISS) via SS Direta in 10 minutes. The plastic card arrives by post in 10-14 days, but a temporary certificate can be downloaded as a PDF immediately.',
  tags: ['ehic', 'cesd', 'healthcare', 'travel'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'who-can',
      title: 'Who can get it',
      content: [
        { kind: 'checklist', items: [
          'Residents of Portugal with an active NISS (employed, self-employed, pensioner, unemployed and receiving benefits)',
          'Dependants (children, spouse) — arranged through the main insured person',
          'Erasmus students — through their university’s SS',
          'EU citizens receiving a pension in PT — through Segurança Social',
          '❌ Tourists / non-residents — no, they need private travel insurance'
        ]}
      ]
    },
    {
      id: 'what-covers',
      title: 'What it covers',
      content: [
        { kind: 'paragraph', text: 'CESD works in 31 countries: 27 EU countries + Norway, Iceland, Liechtenstein, Switzerland, the United Kingdom (under the Brexit agreement, since 2021 UK-EHIC / GHIC work reciprocally).' },
        { kind: 'checklist', items: [
          '✅ Emergency care in a public hospital (urgência) — on local terms',
          '✅ Hospitalisation for acute conditions',
          '✅ Appointments for chronic conditions (dialysis, chemotherapy) — arrange in advance',
          '✅ Ambulance (112) — free for emergencies',
          '✅ Prescription medicines — with the local co-payment, as residents pay',
          '❌ Private clinics — NOT covered (travel insurance is needed)',
          '❌ Air ambulance return home — NOT covered',
          '❌ Giving birth abroad (planned) — no',
          '❌ Dentistry (except emergencies)',
          '❌ Vaccination'
        ]},
        { kind: 'warning', text: 'CESD complements travel insurance; it does not replace it. For a comfortable trip (repatriation, private clinics, luggage), still buy a policy for €10-30 from an insurer.' }
      ]
    },
    {
      id: 'how-get',
      title: 'How to get it',
      content: [
        { kind: 'substeps', items: [
          { id: 'g1', title: '1. Log in to SS Direta', content: [
            { kind: 'paragraph', text: 'seg-social.pt → Segurança Social Direta → Iniciar sessão. Login: NISS + password, or CMD, or Cartão de Cidadão.' }
          ]},
          { id: 'g2', title: '2. Menu "Família" → "Cartão Europeu de Seguro de Doença"', content: [
            { kind: 'paragraph', text: 'Alternatively, search for "CESD" in the search bar. The card status will open — exists / expiring / none.' }
          ]},
          { id: 'g3', title: '3. Order the card', content: [
            { kind: 'checklist', items: [
              'Enter the delivery address (usually pulled from your profile)',
              'Add dependants (it will ask about them)',
              'Confirm — it is issued free of charge',
              'Plastic card — 10-14 working days by post',
              'Temporary certificate (Certificado Provisório de Substituição) — download the PDF immediately, valid for 3 months'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'use-abroad',
      title: 'How to use it abroad',
      content: [
        { kind: 'checklist', items: [
          'At a public hospital: show CESD + passport',
          'The doctor deals with the administration — you pay only the co-payment, like a local (in Spain €0, in France 30% of the tariff, in Germany €10/day of hospitalisation)',
          'If you paid out of pocket (the doctor did not recognise the card / you did not have it to hand) — keep all receipts; reimbursement is through Segurança Social after you return',
          'If you are in a private clinic — CESD does not work, but keep the receipts for private insurance'
        ]}
      ]
    },
    {
      id: 'lost',
      title: 'Loss, renewal, change of details',
      content: [
        { kind: 'checklist', items: [
          'Validity: 5 years from the date of issue — renewed automatically via SS Direta',
          'Lost abroad — request a Certificado Provisório online, send it by email to the public hospital',
          'Change of NISS (rare) — the card remains, the details will be updated',
          'Move to another EU country — NISS is lost, CESD becomes invalid',
          'Children turn 18 — they apply for their own card (if they study / work)'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'CESD (card and renewal)', amountEUR: 0 },
    { label: 'Temporary certificate (Provisório)', amountEUR: 0 },
    { label: 'Travel insurance (recommended as an add-on)', amountEURMin: 10, amountEURMax: 30, note: 'per trip' }
  ],
  sources: [
    { title: 'Segurança Social — CESD', url: 'https://www.seg-social.pt/cartao-europeu-de-seguro-de-doenca', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'SS Direta — personal account', url: 'https://app.seg-social.pt/ssdirecta/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'EU — Your social security rights', url: 'https://europa.eu/youreurope/citizens/health/unplanned-healthcare/temporary-stays/index_en.htm', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}
