export default {
  editorialVoice: 'hackportugal',
  id: 'ehic-european-card',
  categoryId: 'healthcare',
  title: 'CESD — European Health Insurance Card (EHIC)',
  tldr: 'Cartão Europeu de Seguro de Doença (CESD), also known as EHIC, gives access to medically necessary state-provided healthcare in all EU countries, the EEA, Switzerland and the United Kingdom on the same terms as locally insured people. Free of charge. In Portugal it is usually valid for **3 years**; after that you need to request a renewal/new card. CESD is issued by the competent country of insurance: for people with Portuguese Segurança Social cover — via SS Direta. A provisional certificate can be requested if the card has not arrived in time. CESD/EHIC is valid only during a temporary stay abroad, not when moving country or travelling specifically for treatment.',
  tags: ['ehic', 'cesd', 'healthcare', 'travel'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'who-can',
      title: 'Who can get it',
      content: [
        { kind: 'checklist', items: [
          'People for whom Portugal is the **competent country** for healthcare/social security cover: employees and self-employed people with Segurança Social, pensioners with Portuguese cover, benefit recipients, recognised dependants and users of other Portuguese systems. A NISS alone does not guarantee entitlement to CESD',
          'Dependants (children, spouse) — applied for through the main insured person. The card is always individual',
          'Erasmus students: the card is issued by the country where the student is insured. A Portuguese CESD is needed by a student if Portugal is their competent country of insurance; a foreign student in Portugal usually uses their own country’s EHIC',
          'Pensioners: the card is issued by the competent country. If the pension and healthcare cover come from Portugal — through Segurança Social. If a pensioner lives in PT under an S1 from another country, EHIC is usually issued by the country that issued the S1/pays the pension',
          '❌ Tourists / non-residents — no, they need private travel insurance'
        ]}
      ]
    },
    {
      id: 'what-covers',
      title: 'What it covers',
      content: [
        { kind: 'paragraph', text: 'CESD is accepted in the **32 EHIC system countries/territories**: 27 EU countries, Iceland, Liechtenstein, Norway, Switzerland and the United Kingdom. The United Kingdom accepts EHIC/CESD for necessary state healthcare during a temporary stay; British GHIC/UK EHIC are separate cards for people insured in the UK.' },
        { kind: 'checklist', items: [
          '✅ Medically necessary care in the state system during a temporary stay — not only urgência, but also treatment that cannot reasonably be postponed until returning home',
          '✅ Hospitalisation for acute conditions',
          '✅ Check-ups/treatment for chronic conditions (dialysis, chemotherapy) — arrange in advance',
          '✅ **112** — free emergency number. The care/transport itself is paid or not paid according to the rules of the country of stay, as for locally insured people',
          '✅ Prescription medicines — with the local co-payment as for residents',
          '❌ Private clinics — NOT covered (travel insurance is needed)',
          '❌ Return home by air ambulance — NOT covered',
          '❌ Childbirth abroad (planned) — no',
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
            { kind: 'paragraph', text: 'Or search for "CESD" in the search bar. The card status will open — active / expiring / none.' }
          ]},
          { id: 'g3', title: '3. Order the card', content: [
            { kind: 'checklist', items: [
              'Enter the delivery address (usually pulled from the profile)',
              'Add dependants (it will ask about them)',
              'Confirm — it is issued free of charge',
              'Plastic card — 10-14 working days by post',
              'Certificado Provisório de Substituição can be requested as a temporary replacement if the card has not yet been received or has been lost; the validity period is stated on the certificate itself'
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
          'At a state hospital: show CESD + passport',
          'The co-payment amount depends on the country and type of service: in some countries outpatient care is free, in others part of the tariff or a fixed fee is paid first. Before travelling, check the rules of the specific country on Your Europe / the national healthcare website',
          'If you paid out of pocket (the doctor did not recognise the card / it was not to hand) — keep all receipts; reimbursement through Segurança Social after returning',
          'If at a private clinic — CESD does not work, but keep receipts for private insurance',
          'CESD does not guarantee that care is free: the patient pays the same fees and non-reimbursable copayments as locally insured people'
        ]}
      ]
    },
    {
      id: 'lost',
      title: 'Loss, renewal, change of details',
      content: [
        { kind: 'checklist', items: [
          'Term: usually **3 years**. Renewal/a new card must be requested before the expiry date through Segurança Social Direta or another available channel',
          'Lost abroad — request a Certificado Provisório online, send it by email to the state hospital',
          'Change of NISS (rare) — the card remains, the details will be updated',
          'When moving to another EU country, NISS does not disappear, but if Portugal is no longer your competent country for healthcare cover, the Portuguese CESD cannot be used; you need to obtain an EHIC in the new competent country',
          'The card is always individual, including for children. After age 18, entitlement depends on whether the person remains covered as a dependant or has their own cover through work/study/another scheme'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'CESD (card and renewal)', amountEUR: 0 },
    { label: 'Provisional certificate (Provisório)', amountEUR: 0 },
    { label: 'Travel insurance (recommended additionally)', amountEURMin: 10, amountEURMax: 30, note: 'per trip' }
  ],
  sources: [
    { title: 'Segurança Social — CESD', url: 'https://www.seg-social.pt/cartao-europeu-de-seguro-de-doenca', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Segurança Social — online CESD application', url: 'https://www.seg-social.pt/pedido-cartao-europeu-seguro-doenca', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'EU — Your Europe — Unplanned healthcare: temporary stays', url: 'https://europa.eu/youreurope/citizens/health/unplanned-healthcare/temporary-stays/index_en.htm', kind: 'official', language: 'en', lastRetrieved: '2026-05-17' },
    { title: 'UK NHS — Healthcare for visitors to the UK from the EU', url: 'https://www.nhs.uk/nhs-services/visiting-or-moving-to-england/visiting-england-from-the-eea/', kind: 'official', language: 'en', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
