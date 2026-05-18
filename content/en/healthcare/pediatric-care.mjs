export default {
  editorialVoice: 'hackportugal',
  id: 'pediatric-care',
  categoryId: 'healthcare',
  title: 'Paediatrician in Portugal — SNS, private doctors, what to expect',
  tldr: 'After registration, the child is assigned a Número de Utente; a médico de família is assigned if there are open lists at the USF/UCSP — otherwise the child remains sem médico de família, but keeps access to vaccination, the Saúde Infantil programme through the unidade/consulta aberta/enfermagem and urgent care. Scheduled Saúde Infantil e Juvenil check-ups follow the DGS timetable (1.ª semana; 1, 2, 4, 6, 9, 12, 15, 18 months; 2, 3, 4, 5 years; 6–7, 8, 10, 12–13 and 15–18 years) — free of charge. Pediatria in the SNS is via referral to hospital/specialty care; in the private sector, paediatricians often also provide routine preventive consultations (€60–€120/visit without insurance).\n\nChildren’s urgência: Hospital Dona Estefânia (Lisboa), Hospital Pediátrico (Coimbra), Hospital de São João (Porto). If there is a life-threatening emergency — 112; otherwise call SNS 24 first (808 24 24 24).',
  tags: ['paediatrician', 'children', 'sns', 'médico de família'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'sns-system',
      title: '🏥 How the SNS works for children',
      content: [
        { kind: 'paragraph', text: 'An important difference from the Russian Federation/Brazil: in the SNS, primary follow-up is usually provided by a **médico de família** (medicina geral e familiar) and an enfermeiro de família. Pediatria in the SNS is usually accessed via referral to hospital/specialty care. In the private sector, paediatricians often also provide routine preventive consultations.' },
        { kind: 'substeps', items: [
          { id: 'f1', title: 'Registering a child in the SNS', content: [
            { kind: 'checklist', items: [
              '1. After birth / arrival — at the **Centro de Saúde** for your place of residence',
              '2. Documents: the child’s ID/passport or Cartão de Cidadão, birth certificate, NIF (if available), proof of address/residence status. NISS is usually NOT required for the número de utente — these are different numbers',
              '3. A **Número de Utente** will be assigned (for life)',
              '4. If there are open lists at the USF/UCSP — a médico de família will be assigned. If not — the child remains sem médico de família, but keeps access to vaccination, the Saúde Infantil programme through the unidade/consulta aberta/enfermagem',
              '5. The child will be automatically included in the Saúde Infantil e Juvenil programme — scheduled visits according to the DGS timetable',
              '⚠️ A significant proportion of utentes in Portugal remain sem médico de família; current figures are available in SNS Transparência / ACSS reports'
            ]}
          ]},
          { id: 'f2', title: 'Saúde Infantil e Juvenil — scheduled visits', content: [
            { kind: 'checklist', items: [
              'Free of charge for the utente, under the DGS Programa Nacional de Saúde Infantil e Juvenil:',
              '🍼 **First year**: 1.ª semana de vida; 1, 2, 4, 6, 9, 12 months — weight/height, development, vaccines, nutrition',
              '🧒 **1–5 years**: 15, 18 months; 2, 3, 4, 5 years — speech, motor skills, vaccines',
              '📚 **School**: 6–7, 8, 10 years — growth, vision, hearing, vaccines',
              '🧑 **Teenager**: 12–13 and 15–18 years — sexual development, psycho-emotional wellbeing, independence',
              '📱 Reminders arrive in the SNS 24 app',
              '📋 Electronic vaccination and consultation record — in the app (local schedules may differ)'
            ]}
          ]},
          { id: 'f3', title: 'Specialist pediatra', content: [
            { kind: 'checklist', items: [
              'Referral from a médico de família through the referenciação/SIGA SNS system to a consulta hospitalar; no taxas moderadoras for children. Waiting time depends on priority and hospital — it may take weeks or many months',
              'For an urgent case: a private pediatra for €60–€120 / visit',
              'Common referrals: paediatric endocrinology, paediatric neurology, paediatric dermatology',
              '**Private pediatra with insurance** (Médis/Multicare): co-payment €10–€25'
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
              'You feel the family doctor is not a specialist in the specific problem'
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
              'General paediatric consultation: €60–€100',
              'Subspecialty consultation (paediatric neurology, cardiology, endocrinology): €80–€150',
              'Private urgência pediátrica: €50–€80',
              'Tests and investigations (blood test, ultrasound): €30–€150 per examination',
              '“First-year follow-up” package: €300–€600 (monthly appointments + developmental milestone checks)'
            ]}
          ]},
          { id: 'c4', title: 'With private insurance', content: [
            { kind: 'checklist', items: [
              '**Médis**: family plan ~€100–€180/month, co-payment €10–€20',
              '**Multicare** (Fidelidade): ~€80–€150/month, similar co-payment',
              '**AdvanceCare** (Generali): more individual plans',
              '**Tranquilidade**: progressive option',
              'For a child separately: ~€20–€40/month',
              'For simples consultas de pediatria, a carência is often absent or short, but this depends on the apólice; check carências for exams, hospitalisation, pre-existing conditions and newborn inclusion'
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
              '🏥 **Lisboa**: Hospital Dona Estefânia — main paediatric hospital',
              '🏥 **Porto**: Hospital de São João, Centro Materno-Infantil do Norte',
              '🏥 **Coimbra**: Hospital Pediátrico',
              '🏥 **Faro**: paediatric department at Hospital de Faro',
              '🏥 **Cascais**: Hospital de Cascais (paediatric department)',
              'Private: CUF Tejo Pediatric, Luz Pediatric — shorter queues',
              '⚠️ Before travelling, check serviços de urgência disponíveis on SNS/ULS pages or call SNS 24: pediatric emergency units may have temporary restrictions. For private hospitals, confirm children’s urgência opening hours and accepted ages before visiting'
            ]}
          ]},
          { id: 'u2', title: 'When to go to urgência', content: [
            { kind: 'checklist', items: [
              '🚨 If there is a life-threatening emergency — **112** (single European emergency number)',
              '🔴 YES: high temperature in a child <3 months (any >38°C), seizures, severe shortness of breath, fainting, serious injury, allergic reaction',
              '🟡 Usually not needed: uncomplicated cold, temperature up to 39°C in older children, minor injury',
              '📞 In non-emergency/uncertain cases, call **SNS 24: 808 24 24 24** first — an operator/nurse will carry out telephone triagem and tell you where to go. Manchester Triage is applied only after arrival at hospital emergency',
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
        { kind: 'paragraph', text: 'See the separate guide “Vaccinations in Portugal” — full PNV schedule + specific details.' }
      ]
    }
  ],
  sources: [
    { title: 'DGS — Programa Nacional de Saúde Infantil e Juvenil', url: 'https://www.dgs.pt/documentos-e-publicacoes/programa-tipo-de-atuacao-em-saude-infantil-e-juvenil.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'SNS 24 — Saúde Infantil', url: 'https://www.sns24.gov.pt/tema/crescer-saudavel/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'SNS — Serviços de Urgência', url: 'https://www.sns.gov.pt/sns/servicos-de-urgencia/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Hospital Dona Estefânia (paediatric)', url: 'https://www.ulslc.min-saude.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
