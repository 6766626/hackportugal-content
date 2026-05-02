export default {
  editorialVoice: 'hackportugal',
  id: 'license-renewal',
  categoryId: 'driving_license',
  title: 'Renewing a Portuguese driving licence',
  tldr: 'Portuguese licence (group I categories — AM/A/B/BE, etc.): valid for **15 years until age 60**, then renewal at **60, 65, 70**; after 70 — **every 2 years**. For licences issued before 02/01/2013, and for group II (professional C/D, etc.) — separate transitional/special rules apply (periods may be shorter). Online renewal via imt-online.imt.gov.pt with CMD/Chave Móvel Digital — state fee €30 + medical certificate (usually required from age 60 for group I) + psychotechnical assessment (for certain cases / ages / categories).',
  tags: ['licence', 'renewal', 'IMT', 'licence renewal', 'medical'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'when-to-renew',
      title: '⏰ When to renew',
      content: [
        { kind: 'checklist', items: [
          '🟢 **Group I (standard categories AM/A/B/BE)** — issued after 02/01/2013: 15 years until age 60, then renewal at ages 60, 65, 70; after 70 — every 2 years',
          '🟡 **Medical certificate** is usually required from age 60 for group I',
          '🟠 **Psychotechnical assessment** — for some categories/ages and group II (professional C/D drivers)',
          '⚠️ **Group II (professional C, D, BE with trailers, etc.)** — separate shorter periods, annual/2-yearly check-ups',
          '⚠️ Licences issued **before 02/01/2013** — separate transitional rules apply; check on imt-ip.pt',
          '⚠️ If the licence has expired by up to 6 months: renewal as normal + €25 fine',
          '🔴 If the licence has expired by 6 months — 2 years: retake the theory test',
          '🔴 If the licence has expired by more than 2 years: FULL retake (theory + practical)',
          '💡 IMT sends a notice 60 days in advance by post or email'
        ]}
      ]
    },
    {
      id: 'online',
      title: '💻 Step 1. Online renewal (recommended)',
      content: [
        { kind: 'paragraph', text: 'Online renewal has been available since 2018 for most categories. This is the fastest method.' },
        { kind: 'substeps', items: [
          { id: 'o1', title: 'What you need', content: [
            { kind: 'checklist', items: [
              '🆔 Cartão de Cidadão or residence permit + NIF',
              '🔐 Active Chave Móvel Digital',
              '💳 Multibanco/MB WAY/card for payment',
              '📷 Recent 3.5×4.5 photo (upload via the website)',
              '🩺 Medical certificate — usually from age 60 for group I; psychotechnical assessment — for group II and certain cases'
            ]}
          ]},
          { id: 'o2', title: 'Process', content: [
            { kind: 'checklist', items: [
              '🌐 imt-online.imt.gov.pt → “Renovação de Carta de Condução”',
              '🔐 Log in with CMD',
              '📤 Upload the medical certificate and photo',
              '💳 Pay €30 (state fee)',
              '📩 Confirmation by email',
              '📬 The card arrives by post in 2-4 weeks',
              '✅ During processing, you may drive with the old card + printed confirmation'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'medical',
      title: '🩺 Step 2. Medical examination (50+)',
      content: [
        { kind: 'paragraph', text: 'From age 50+, you need a doctor’s certificate. A normal family doctor or a doctor authorised by IMT is suitable. The price list is usually displayed in the clinic.' },
        { kind: 'substeps', items: [
          { id: 'm1', title: 'What they check', content: [
            { kind: 'checklist', items: [
              '👁️ Eyesight (you read a chart from a distance of 5 m)',
              '👂 Hearing',
              '🩸 Blood pressure',
              '❤️ Heart rhythm',
              '🧠 Basic coordination'
            ]}
          ]},
          { id: 'm2', title: 'Where to do it', content: [
            { kind: 'checklist', items: [
              '🏥 SNS Centro de Saúde — free for residents, but appointments are 1-2 weeks ahead',
              '🏥 Family doctor — €15-30',
              '🏥 Private doctor authorised by IMT — €30-50',
              '⚠️ The certificate is valid for 3 months — renew promptly'
            ]}
          ]},
          { id: 'm3', title: 'Psychotechnical assessment (≥65 years)', content: [
            { kind: 'checklist', items: [
              '🧠 Additional cognitive function test',
              '⏱️ 30-45 min',
              '💰 €50-80 in private centres',
              '📍 List of centres — on imt-ip.pt → “Psicotécnicos autorizados”'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'in-person',
      title: '🏛️ Alternative — in-person visit',
      content: [
        { kind: 'paragraph', text: 'If online access is unavailable (no CMD, technical problems) — book an appointment at IMT/Espaço Cidadão.' },
        { kind: 'checklist', items: [
          '📅 Book on agendamentos.imt-ip.pt',
          '🆔 Documents: original licence, Cartão de Cidadão/residence permit, medical certificate, 3.5×4.5 photo',
          '💰 Fee: €30',
          '⏰ Visit duration: 30 min',
          '📅 Slots are limited — book 2-4 weeks ahead',
          '🏛️ Also possible at larger Loja de Cidadão offices (Lisboa, Porto)'
        ]}
      ]
    },
    {
      id: 'special-cases',
      title: '⚠️ Special cases',
      content: [
        { kind: 'checklist', items: [
          '📝 **Lost/stolen licence**: police report (PSP/GNR), then duplicate via imt-online — €30',
          '🩺 **Change in health condition** (diabetes, epilepsy, stroke): you must notify IMT; new tests may be required',
          '🚙 **Category D (bus) or C (lorry)**: annual medical examination for professional drivers',
          '🌐 **Address has changed**: update via imt-online (free)',
          '🇪🇺 **Moving to another EU country**: the licence remains valid, but arrange a local card within 2 years',
          '🔄 **Additional category (motorcycle A after car B)**: training + exams, ~€400-700'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'IMT state fee (online renewal)', amountEUR: 30 },
    { label: 'Family doctor medical certificate (50+)', amountEURMin: 15, amountEURMax: 30 },
    { label: 'Psychotechnical assessment (65+)', amountEURMin: 50, amountEURMax: 80 },
    { label: 'Duplicate if lost', amountEUR: 30 },
    { label: 'Fine for expiry <6 months', amountEUR: 25 }
  ],
  timelineDaysMin: 14,
  timelineDaysMax: 30,
  sources: [
    { title: 'IMT — Driving licence renewal', url: 'https://www.imt-ip.pt/sites/IMTT/Portugues/CondutoresVeiculos/Pages/RenovacaoCartaConducao.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IMT Online (online renewal)', url: 'https://www.imt-online.imt.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 365
}
