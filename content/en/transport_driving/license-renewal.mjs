export default {
  editorialVoice: 'hackportugal',
  id: 'license-renewal',
  categoryId: 'driving_license',
  title: 'Renewing a Portuguese driving licence',
  tldr: 'Portuguese licences (Group I categories — AM/A/B/BE, etc.): valid for 15 years until age 60, then renewal at 60, 65, 70; after 70 — every 2 years. For licences issued before 02/01/2013, and for Group II (professional C/D, etc.) — separate transitional/special rules apply (validity periods may be shorter).\n\nRenewal online via imt-online.imt.gov.pt with CMD/Chave Móvel Digital — government fee €30 + medical certificate (usually required from age 60 for Group I) + psychotechnical assessment (for certain cases / ages / categories).',
  tags: ['licence', 'renewal', 'imt', 'licence renewal', 'medical examination'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'when-to-renew',
      title: '⏰ When to renew',
      content: [
        { kind: 'checklist', items: [
          '🟢 Group I (ordinary categories AM/A/B/BE) — issued after 02/01/2013: 15 years until age 60, then renewal at 60, 65, 70; after 70 — every 2 years',
          '🟡 Medical certificate is usually required from age 60 for Group I',
          '🟠 Psychotechnical assessment — for some categories/ages and Group II (professional C/D drivers)',
          '⚠️ Group II (professional C, D, BE with trailers, etc.) — separate shorter validity periods, annual/2-yearly medical checks',
          '⚠️ Licences issued before 02/01/2013 — separate transitional rules; check on imt-ip.pt',
          '⚠️ If the licence expired less than 2 years ago — you can usually revalidar without an exam, but you cannot drive with an expired licence; apply for revalidação as soon as possible',
          '🔴 If the licence expired more than 2 years ago — the procedure depends on how long ago it expired: a special exam and/or training may be required. Check the current IMT table for carta caducada',
          '💡 IMT sends a notification 60 days in advance by post or email'
        ]}
      ]
    },
    {
      id: 'online',
      title: '💻 Step 1. Renew online (recommended)',
      content: [
        { kind: 'paragraph', text: 'Online renewal has been available since 2018 for most categories. It is the fastest method.' },
        { kind: 'substeps', items: [
          { id: 'o1', title: 'What you need', content: [
            { kind: 'checklist', items: [
              '🆔 Cartão de Cidadão or residence permit + NIF',
              '🔐 Active Chave Móvel Digital',
              '💳 Multibanco/MB WAY/card for payment',
              '📷 Recent 3.5×4.5 photo (upload via the website)',
              '🩺 Medical certificate — usually from age 60 for Group I; psychotechnical assessment — for Group II and certain cases'
            ]}
          ]},
          { id: 'o2', title: 'Process', content: [
            { kind: 'checklist', items: [
              '🌐 imt-online.imt.gov.pt → “Renovação de Carta de Condução”',
              '🔐 Log in via CMD',
              '📤 Upload the medical certificate and photo',
              '💳 Pay €30 (government fee)',
              '📩 Confirmation by email',
              '📬 The card arrives by post in 2-4 weeks',
              '✅ During processing, you can drive with the old card + a printed confirmation'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'medical',
      title: '🩺 Step 2. Medical examination (from age 60 for Group I)',
      content: [
        { kind: 'paragraph', text: 'From age 60, ordinary Group I categories usually require an electronic medical certificate from a doctor (family doctor or a doctor authorised by IMT).\n\nA psychological assessment is not required for everyone — mainly for Group II / professional categories or when prescribed by a doctor/IMT.' },
        { kind: 'substeps', items: [
          { id: 'm1', title: 'What they check', content: [
            { kind: 'checklist', items: [
              '👁️ Vision (reading a chart from a distance of 5 m)',
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
              '⚠️ The certificate is valid for 3 months — renew quickly'
            ]}
          ]},
          { id: 'm3', title: 'Psychological assessment (for Group II / professional categories)', content: [
            { kind: 'checklist', items: [
              '🧠 Avaliação psicológica — usually for Group II / professional drivers and in specific prescribed cases',
              '⏱️ 30-45 min',
              '💰 €50-80 in private centres',
              '📍 List of centres — on imt-ip.pt → “Psicólogos autorizados”'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'in-person',
      title: '🏛️ Alternative — in-person visit',
      content: [
        { kind: 'paragraph', text: 'If online is not available (no CMD, technical issues) — book an appointment at IMT/Espaço Cidadão.' },
        { kind: 'checklist', items: [
          '📅 Appointment at agendamentos.imt-ip.pt',
          '🆔 Documents: original licence, Cartão de Cidadão/residence permit, medical certificate, 3.5×4.5 photo',
          '💰 Fee: €30',
          '⏰ Visit duration: 30 min',
          '📅 Slots are limited — book 2-4 weeks in advance',
          '🏛️ Also possible at large Loja de Cidadão offices (Lisboa, Porto)'
        ]}
      ]
    },
    {
      id: 'special-cases',
      title: '⚠️ Special cases',
      content: [
        { kind: 'checklist', items: [
          '📝 Lost/stolen licence: police report (PSP/GNR), then a duplicate via imt-online — €30',
          '🩺 Change in health condition (diabetes, epilepsy, stroke): you must notify IMT; they may require new tests',
          '🚙 Category D (bus) or C (lorry): annual medical examination for professional drivers',
          '🌐 Address changed: update via imt-online (free)',
          '🇪🇺 Moving to another EU country: the licence remains valid, but obtain a local card within 2 years',
          '🔄 Additional category (motorcycle A after car B): training + exams, ~€400-700'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'IMT government fee (online renewal)', amountEUR: 30 },
    { label: 'Medical certificate from a family doctor (from age 60)', amountEURMin: 15, amountEURMax: 30 },
    { label: 'Psychological assessment (for Group II/professional categories)', amountEURMin: 50, amountEURMax: 80 },
    { label: 'Duplicate if lost', amountEUR: 30 },
    { label: 'If expired — check the IMT table for carta caducada', note: 'the procedure depends on how long ago the licence expired' }
  ],
  timelineDaysMin: 14,
  timelineDaysMax: 30,
  sources: [
    { title: 'IMT — Driving licence renewal', url: 'https://www.imt-ip.pt/sites/IMTT/Portugues/CondutoresVeiculos/Pages/RenovacaoCartaConducao.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IMT Online (online renewal)', url: 'https://www.imt-online.imt.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 365
}
