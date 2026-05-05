export default {
  editorialVoice: 'hackportugal',
  id: 'ehic-european-card',
  categoryId: 'healthcare',
  title: 'CESD — European Health Insurance Card (EHIC)',
  tldr: 'Cartão Europeu de Seguro de Doença (CESD), also EHIC — gives access to public healthcare in all EU, EEA countries, Switzerland and the United Kingdom on the same terms as local residents. Free, 5 years. Issued to PT residents with Segurança Social (NISS) via SS Direta in 10 minutes. The plastic card arrives by post in 10–14 days, but you can download a temporary certificate PDF immediately.',
  tags: ['ehic', 'cesd', 'healthcare', 'travel'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'who-can',
      title: 'Who can get it',
      content: [
        { kind: 'checklist', items: [
          'Residents of Portugal with an active NISS (employed, self-employed, pensioner, unemployed receiving benefits)',
          'Dependants (children, spouse) — apply through the primary insured person',
          'Erasmus students — via your university’s Segurança Social',
          'EU citizens receiving a pension in Portugal — via Segurança Social',
          '❌ Tourists / non-residents — no, they need private travel insurance'
        ]}
      ]
    },
    {
      id: 'what-covers',
      title: 'What it covers',
      content: [
        { kind: 'paragraph', text: 'CESD works in 31 countries: 27 EU + Norway, Iceland, Liechtenstein, Switzerland, the United Kingdom (under the Brexit agreement, since 2021 UK-EHIC / GHIC operates reciprocally).' },
        { kind: 'checklist', items: [
          '✅ Emergency care in a public hospital (urgência) — under local conditions',
          '✅ Hospitalisation for acute conditions',
          '✅ Ongoing treatment for chronic conditions (dialysis, chemotherapy) — arrange in advance',
          '✅ Ambulance (112) — free for emergencies',
          '✅ Prescription medicines — with local co-payment like residents',
          '❌ Private clinics — NOT covered (you need travel insurance)',
          '❌ Medical repatriation/air ambulance — NOT covered',
          '❌ Planned childbirth abroad — no',
          '❌ Dentistry (except emergencies)',
          '❌ Vaccinations'
        ]},
        { kind: 'warning', text: 'CESD complements, it does not replace, travel insurance. For a comfortable trip (repatriation, private clinics, baggage) still buy a policy for €10–30 from an insurer.' }
      ]
    },
    {
      id: 'how-get',
      title: 'How to get it',
      content: [
        { kind: 'substeps', items: [
          { id: 'g1', title: '1. Sign in to SS Direta', content: [
            { kind: 'paragraph', text: 'seg-social.pt → Segurança Social Direta → Iniciar sessão. Sign in with: NISS + password, or CMD, or Cartão de Cidadão.' }
          ]},
          { id: 'g2', title: '2. Menu "Família" → "Cartão Europeu de Seguro de Doença"', content: [
            { kind: 'paragraph', text: 'Or search for "CESD" in the box. You will see the card status — active / expiring / none.' }
          ]},
          { id: 'g3', title: '3. Order the card', content: [
            { kind: 'checklist', items: [
              'Enter the delivery address (usually prefilled from your profile)',
              'Add dependants (it will ask about them)',
              'Confirm — it is issued free of charge',
              'Physical card — 10–14 working days by post',
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
          'The doctor handles the billing — you only pay the co-payment like a local (in Spain €0, in France 30% of the tariff, in Germany €10/day of hospitalisation)',
          'If you paid out of pocket (the doctor did not recognise the card / you did not have it to hand) — keep all receipts; reimbursement via Segurança Social upon return',
          'If it was a private clinic — CESD does not apply, but keep receipts for your private insurance'
        ]}
      ]
    },
    {
      id: 'lost',
      title: 'Loss, renewal, change of details',
      content: [
        { kind: 'checklist', items: [
          'Validity: 5 years from the date of issue — renewed automatically via SS Direta',
          'Lost abroad — request the Certificado Provisório online, send it by email to the public hospital',
          'Change of NISS (rare) — the card remains, data will update',
          'Moving to another EU country — you lose your NISS, CESD becomes invalid',
          'Child turns 18 — they request their own card (if studying/working)'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'CESD (card and renewal)', amountEUR: 0 },
    { label: 'Temporary certificate (Provisório)', amountEUR: 0 },
    { label: 'Travel insurance (recommended in addition)', amountEURMin: 10, amountEURMax: 30, note: 'per trip' }
  ],
  sources: [
    { title: 'Segurança Social — CESD', url: 'https://www.seg-social.pt/cartao-europeu-de-seguro-de-doenca', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Segurança Social — request CESD online', url: 'https://www.seg-social.pt/pedido-cartao-europeu-seguro-doenca', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' },
    { title: 'EU — Your social security rights', url: 'https://europa.eu/youreurope/citizens/health/unplanned-healthcare/temporary-stays/index_en.htm', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}
