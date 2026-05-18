export default {
  editorialVoice: 'hackportugal',
  id: 'finding-doctor',
  categoryId: 'healthcare',
  title: 'Find a doctor in Portugal',
  tldr: 'Family doctor (médico de família) — free via the SNS at the Centro de Saúde (state health centre) for your place of residence, but the waiting time for an appointment is 2–14 days. SNS specialists — waiting time 1–12 months. For urgent cases — SNS hospital (Urgência)\.\n\nPrivate clinics (CUF, Lusíadas, HPA) — no waiting list, paid (~€50–80 for the first appointment).',
  tags: ['doctor', 'sns', 'centro de saúde', 'specialist'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'family-doctor',
      title: 'Family doctor (médico de família)',
      content: [
        { kind: 'substeps', items: [
          { id: 'f1', title: 'Registration', content: [
            { kind: 'paragraph', text: 'At the Centro de Saúde in your area. You need NIF, NISS, Utente number (see the SNS guide). Sometimes there is no doctor available — you are added to a waiting list.' }
          ]},
          { id: 'f2', title: 'Booking an appointment', content: [
            { kind: 'checklist', items: [
              '📞 SNS 24 (808 24 24 24) — general channel, booking at your Centro de Saúde',
              '📱 SNS 24 app — smartphone',
              '🌐 sns24.gov.pt — online',
              '🏢 In person at the Centro de Saúde — reception desk',
              'Usually 2–14 days until an available slot'
            ]}
          ]},
          { id: 'f3', title: 'At the appointment', content: [
            { kind: 'paragraph', text: 'For colds, chronic conditions, and general health questions. The doctor can refer you to a specialist or prescribe tests. The prescription is electronic and arrives by SMS.' }
          ]},
          { id: 'f4', title: 'If you do not have a family doctor', content: [
            { kind: 'paragraph', text: 'You remain on the waiting list. A doctor is usually assigned after 3–6 months. In acute need, you can book with any available doctor at the Centro de Saúde.' }
          ]}
        ]}
      ]
    },
    {
      id: 'specialists',
      title: 'SNS specialists',
      content: [
        { kind: 'paragraph', text: 'By referral from your family doctor → waiting list for a specialist appointment. Waiting times are long:' },
        { kind: 'checklist', items: [
          'Cardiologist: 3–6 months',
          'Ophthalmologist: 2–4 months',
          'Dermatologist: 4–8 months',
          'Gynaecologist / urologist: 2–4 months',
          'Orthopaedist: 3–6 months',
          'Dentist: SNS covers very little — paid',
          'Psychologist / psychiatrist: 4–12 months'
        ]},
        { kind: 'paragraph', text: 'While you are waiting for the appointment, symptoms may change. If it is urgent — Urgência (emergency department).' }
      ]
    },
    {
      id: 'private',
      title: 'Private clinics',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: 'Main networks', content: [
            { kind: 'checklist', items: [
              'Hospital da Luz / Luz Saúde — the largest, across Portugal',
              'CUF — premium network, Lisboa/Porto/Algarve',
              'Lusíadas Saúde — second major network',
              'HPA Saúde — leader in Algarve',
              'Trofa Saúde — Porto/Norte',
              'Clinica Médis — clinic with a network of doctors'
            ]}
          ]},
          { id: 'p2', title: 'How to book', content: [
            { kind: 'paragraph', text: 'Phone / website / app. Often an appointment is available the next day. First appointment €50–80, tests separately. With insurance (Médis, Multicare) — co-payment €15–30.' }
          ]},
          { id: 'p3', title: 'Using insurance', content: [
            { kind: 'paragraph', text: 'Show your insurance card → the price list is applied automatically. Without insurance — full price list. Dentist — almost always paid even through the SNS.' }
          ]}
        ]}
      ]
    },
    {
      id: 'urgencia',
      title: 'Urgência (emergency care)',
      content: [
        { kind: 'substeps', items: [
          { id: 'u1', title: 'When to go', content: [
            { kind: 'checklist', items: [
              'Acute pain',
              'Fracture / serious injury',
              'Temperature >39°C does not come down',
              'Symptoms of ischaemia, stroke',
              'Serious allergic reactions'
            ]}
          ]},
          { id: 'u2', title: 'Manchester triage', content: [
            { kind: 'paragraph', text: 'You arrive → a nurse assesses your condition → assigns a priority colour (red = 0 min, orange = 10 min, yellow = 60 min, green = 120 min, blue = 240 min, white = not urgent, go to the Centro de Saúde).' }
          ]},
          { id: 'u3', title: 'Cost', content: [
            { kind: 'paragraph', text: 'Since 2022 (DL 52/2022), most SNS taxas moderadoras have been abolished, but in the Serviço de Urgência they may be charged if the patient came without prior SNS24/family doctor referral and there is no hospitalisation/exemption. If the colour is “white/blue” (not urgent), you may be referred to the Centro de Saúde.' }
          ]},
          { id: 'u4', title: 'Private emergency care', content: [
            { kind: 'paragraph', text: 'At a private clinic (CUF, Luz) — no waiting list, but €80–150 for the first appointment. Faster if the SNS queue is 4+ hours.' }
          ]}
        ]}
      ]
    }
  ],
  sources: [
    { title: 'SNS — official portal', url: 'https://www.sns.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'SNS 24 — online services', url: 'https://www.sns24.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ACSS — SNS statistics', url: 'https://www.acss.min-saude.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
