export default {
  editorialVoice: 'hackportugal',
  id: 'pediatric-care',
  categoryId: 'healthcare',
  title: 'Paediatric care in Portugal — SNS, private doctors, what to expect',
  tldr: 'In the SNS, every child is assigned a **médico de família** by default (this is not necessarily a paediatrician — more often a family doctor). Routine check-ups follow the Saúde Infantil schedule: 1, 2, 4, 6, 9, 12, 15, 18, 24 months, 3, 4, 5, 6, 8, 10, 13, 15, 18 years — free of charge. Specialist paediatricians (pediatria) are accessed via a referral from the family doctor or in private clinics (Lusíadas, CUF, Luz) for €60–120/visit without insurance. Children’s urgent care: Hospital Dona Estefânia (Lisboa), paediatric department at Hospital de São João (Porto). Booking: via the SNS 24 app or through the Centro de Saúde.',
  tags: ['paediatrician', 'children', 'sns', 'médico de família'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'sns-system',
      title: '🏥 How the SNS works for children',
      content: [
        { kind: 'paragraph', text: 'An important difference from the Russian Federation/Brazil: in PT, children are followed by a **médico de família** (family doctor) — not by a paediatrician as a separate doctor. Paediatricians are specialists for complex cases.' },
        { kind: 'substeps', items: [
          { id: 'f1', title: 'Registering a child with the SNS', content: [
            { kind: 'checklist', items: [
              '1. After birth / arrival — at the **Centro de Saúde** for your place of residence',
              '2. Documents: child’s passport / Cartão de Cidadão, NIF, NISS, birth certificate, atestado de residência',
              '3. A **Número de Utente** will be assigned (lifelong)',
              '4. A médico de família (family doctor) will be assigned — they follow the child until age 18',
              '5. The child will be automatically included in the Saúde Infantil programme — routine visits according to the DGS schedule',
              '⚠️ If your Centro de Saúde has no doctors available — you are placed on a waiting list. In 2025, ~800 thousand children in PT have no médico de família'
            ]}
          ]},
          { id: 'f2', title: 'Saúde Infantil — routine visits', content: [
            { kind: 'checklist', items: [
              'Free for the utente, according to the DGS schedule:',
              '🍼 **< 1 year**: 1, 2, 4, 6, 9, 12 months — weight/height, development, vaccines, feeding',
              '🧒 **1-5 years**: 15, 18, 24 months, 3-4-5 years — speech, motor skills, vaccines',
              '📚 **School**: 6, 8, 10 years — growth, eyesight, hearing, vaccines',
              '🧑 **Teenager**: 13, 15, 18 years — puberty, psycho-emotional state, independence',
              '📱 Reminders arrive in the SNS 24 app',
              '📋 Electronic vaccine and consultation record — in the app'
            ]}
          ]},
          { id: 'f3', title: 'Specialist pediatra', content: [
            { kind: 'checklist', items: [
              'Referral from the family doctor (via RRVE) — free, but waiting time 2-6 months',
              'For an urgent case: private pediatra for €60–120 / visit',
              'Common specialties: paediatric endocrinology, paediatric neurology, paediatric dermatology',
              '**Private pediatra with insurance** (Médis/Multicare): co-payment €10–25'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'private-clinics',
      title: '💼 Private paediatricians and clinics',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'When to go to a private clinic', content: [
            { kind: 'checklist', items: [
              'No médico de família in the SNS (waiting list)',
              'Language barrier — SNS doctors do not always speak English',
              'Fast booking (24-48 hours in a private clinic)',
              'Additional services: nutrition assessment, psychologist, speech therapist',
              'You feel that the family doctor is not a specialist in the specific problem'
            ]}
          ]},
          { id: 'c2', title: 'Clinic networks', content: [
            { kind: 'checklist', items: [
              '**CUF Pediatrics** (Lisboa, Porto, Algarve) — comprehensive services',
              '**Lusíadas Pediatrics** — Amadora, Porto',
              '**Hospital da Luz Pediatrics** — Lisboa, Setúbal',
              '**Grupo Trofa Saúde** — Porto area',
              '**Joaquim Chaves** — retail-format clinics',
              '**AdvanceCare network** — through insurance'
            ]}
          ]},
          { id: 'c3', title: 'Prices without insurance', content: [
            { kind: 'checklist', items: [
              'General paediatric consultation: €60–100',
              'Specialist paediatrician (neurology, cardiology): €80–150',
              'Private urgência pediátrica: €50–80',
              'Tests and examinations (blood test, ultrasound): €30–150 per examination',
              '“First-year monitoring” package: €300–600 (monthly appointments + developmental milestone checks)'
            ]}
          ]},
          { id: 'c4', title: 'With private insurance', content: [
            { kind: 'checklist', items: [
              '**Médis**: family plan ~€100–180/month, co-payment €10–20',
              '**Multicare** (Fidelidade): ~€80–150/month, same co-payment',
              '**AdvanceCare** (Generali): more individual plans',
              '**Tranquilidade**: progressive option',
              'For a child separately: ~€20–40/month',
              'Usually no waiting period for paediatrics (works immediately)'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'urgencia',
      title: '🚨 Children’s urgência',
      content: [
        { kind: 'substeps', items: [
          { id: 'u1', title: 'Hospitals with paediatric urgência', content: [
            { kind: 'checklist', items: [
              '🏥 **Lisboa**: Hospital Dona Estefânia — main paediatric hospital, 24/7',
              '🏥 **Porto**: Hospital de São João, Centro Materno-Infantil do Norte',
              '🏥 **Coimbra**: Hospital Pediátrico',
              '🏥 **Faro**: paediatric department at Hospital de Faro',
              '🏥 **Cascais**: Hospital de Cascais (paediatric department)',
              'Private: CUF Tejo Pediatric, Luz Pediatric — shorter queues'
            ]}
          ]},
          { id: 'u2', title: 'When to go to urgência', content: [
            { kind: 'checklist', items: [
              '🔴 YES: high temperature in a child <3 months (any >38°C), seizures, severe shortness of breath, fainting, serious injury, allergic reaction',
              '🟡 Usually not needed: cold without complications, temperature up to 39°C in older children, minor injury',
              '📞 **SNS 24 first (808 24 24 24)** — they will assess using Manchester triage',
              '💡 Many Centro de Saúde have Atendimento Complementar — a less busy alternative'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'vaccinations-children',
      title: '💉 PNV vaccines for children',
      content: [
        { kind: 'paragraph', text: 'See the separate guide “Vaccinations in Portugal” — full PNV schedule + specific points.' }
      ]
    }
  ],
  sources: [
    { title: 'DGS — Saúde Infantil e Juvenil', url: 'https://www.dgs.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'SNS 24 — Saúde Infantil', url: 'https://www.sns24.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Hospital Dona Estefânia (paediatric)', url: 'https://www.chlc.min-saude.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
