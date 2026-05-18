export default {
  editorialVoice: 'hackportugal',
  id: 'urgencia-how-to',
  categoryId: 'emergency_rights',
  title: 'How not to spend the whole day in urgência',
  tldr: 'Urgência in Portugal works according to the Manchester Triage System — the colour depends on how urgent the condition is. Red — immediate, orange — ≤ 10 min, yellow — ≤ 60 min, green — ≤ 120 min, blue — ≤ 240 min. To reduce waiting time: (1) first call SNS 24 (**808 24 24 24**) — nurse triage using clinical algorithms (not a doctor on the phone), which will direct you to the right level; (2) Atendimento Complementar at the Centro de Saúde (at night/weekends); (3) private urgências (CUF, Lusíadas, Luz) — €20–80; (4) the “Tempos de Espera SNS” app to check the queue.\n\n⚠️ 808 numbers are charged according to the subscriber’s tariff: mobile and foreign SIM cards may incur charges.',
  tags: ['urgência', 'ambulance', 'sns', 'manchester'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'before',
      title: '📞 Before you go — call SNS 24',
      content: [
        { kind: 'paragraph', text: 'SNS 24 (**808 24 24 24**) is the public medical helpline, available 24/7. Nurse triage using clinical algorithms (this is not a conversation with a doctor). The service itself is free, but the 808 number is charged according to the subscriber’s tariff: mobile and foreign SIM cards may be charged per minute:' },
        { kind: 'checklist', items: [
          '🟢 Not urgent → book an appointment with your family doctor at the Centro de Saúde',
          '🟡 Need help, but not right now → private clinic / non-urgent appointment',
          '🟠 Urgent, but not an emergency → specialised urgência (paediatric, children’s, gynaecological)',
          '🔴 Emergency → call INEM (112) or go to urgência',
          'Languages: PT + EN (say “English please”)',
          'SNS 24 app: chat with a doctor, video call — without waiting for a phone operator',
          '💡 SNS 24 is often less busy than urgência: 15 min for assessment'
        ]}
      ]
    },
    {
      id: 'manchester',
      title: '🎨 Manchester Triage System — how you will be assessed',
      content: [
        { kind: 'paragraph', text: 'On arrival at urgência, the first thing is triage by a nurse: 3–5 min questionnaire → a colour is assigned.' },
        { kind: 'checklist', items: [
          '🔴 **Vermelho (red) — EMERGÊNCIA**: seen **immediately**. Cardiac arrest, stroke, severe trauma, loss of consciousness',
          '🟠 **Laranja (orange) — MUITO URGENTE**: within **≤ 10 min**. Severe chest pain, breathing difficulty, major bleeding',
          '🟡 **Amarelo (yellow) — URGENTE**: within **≤ 60 min**. Moderate pain, fever with deterioration, broken limb',
          '🟢 **Verde (green) — POUCO URGENTE**: within **≤ 120 min**. Wound without bleeding, moderate pain, nausea',
          '🔵 **Azul (blue) — NÃO URGENTE**: within **≤ 240 min** (4 hours!). Symptoms ≤ 7 days, mild cold, slight pain',
          '⚪ **Branco** — does not require urgent care (you need to go to your family doctor) — sent home'
        ]},
        { kind: 'warning', text: '80% of patients in Portugal arrive with yellow/green/blue colours — and wait 2–4 hours. If you are assigned blue, it is more realistic to book at a Centro de Saúde or go to a private clinic.' }
      ]
    },
    {
      id: 'shortcuts',
      title: '⚡ How to reduce waiting time',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: '1. Centro de Saúde — Atendimento Complementar', content: [
            { kind: 'checklist', items: [
              'Health centres have a separate “Atendimento Complementar” — for situations that do not require hospitalisation',
              'They operate at least until 20:00 in some centres, and some are 24/7 (Cascais, Almada)',
              'Booking via SNS 24 (call / app) — arrive at the appointed time',
              'Waiting time: usually 10–30 min',
              'Free — user charges in SNS primary care have been abolished (Decreto-Lei 37/2022 reform)'
            ]}
          ]},
          { id: 's2', title: '2. Hospital Urgência — a less busy one', content: [
            { kind: 'checklist', items: [
              'In Lisbon: Hospital Beatriz Ângelo (Loures) — usually faster than Santa Maria',
              'Hospital de Cascais (if you live in Cascais/Estoril) — often calmer',
              'Porto: Hospital de São João — 4–6 hours; Hospital de Pedro Hispano (Matosinhos) — sometimes 2–3 hours',
              '📱 **“Tempos de Espera SNS” app** — real waiting times for all hospitals!',
              '💡 Check before setting off — go to a less busy place'
            ]}
          ]},
          { id: 's3', title: '3. Morning from Monday to Thursday', content: [
            { kind: 'checklist', items: [
              'Busiest hours: evening (18:00–23:00) and weekends',
              'Quietest: Monday–Thursday 9:00–12:00',
              'Avoid: Sunday evening (everything that did not open at the weekend ends up there)',
              'Avoid: June–September (tourists + holiday period in health centres)'
            ]}
          ]},
          { id: 's4', title: '4. Private urgência', content: [
            { kind: 'checklist', items: [
              'Cost: €20–80 per visit without insurance, €0–15 co-payment with private insurance',
              'Network: **CUF, Lusíadas, Luz, Trofa, Hospital da Misericórdia**',
              'Waiting time: usually 15–45 min',
              'Open 24/7 in large centres, from 8:00 to 24:00 in smaller ones',
              'Consultation, tests, X-ray, ultrasound — on site',
              'Prescriptions can be taken straight to the pharmacy (for example, Lusíadas Farmácia nearby)'
            ]}
          ]},
          { id: 's5', title: '5. Specialised urgência', content: [
            { kind: 'checklist', items: [
              '**Pediátrica** (children up to 15–18 years): separate departments. In Lisbon — Hospital Dona Estefânia. In Porto — Centro Materno-Infantil do Norte (CHUSJ/ULS Santo António, after integration of the former Maria Pia)',
              '**Gnecológica / Obstétrica**: Maternidade Alfredo da Costa (Lisboa), Maternidade Júlio Dinis (Porto)',
              '**Psiquiátrica**: Hospital Magalhães Lemos (Porto), Hospital Júlio de Matos (Lisboa)',
              '**Estomatológica** (teeth): Hospital São José and private clinics (IMD, Dental Family)'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'what-bring',
      title: '📋 What to take with you',
      content: [
        { kind: 'checklist', items: [
          '🆔 **CC / residence permit / passport**',
          '📇 **Número de Utente (SNS)** — you will still be seen without it, but the process will take longer',
          '💊 **List of current medicines** — written down or a photo on your phone',
          '📄 **Medical history**: chronic illnesses, allergies, operations',
          '💳 **Bank card**: in case you are prescribed paid medicines (part is covered by SNS, the rest is paid)',
          '📚 **Book / charger / food** — waiting can take 2–4 hours',
          '🗣️ **PT dictionary / translator**: 90% of doctors understand EN, but care staff often do not'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'General tips',
      content: [
        { kind: 'checklist', items: [
          '🔁 **Family doctor** (médico de família) — the main key. Registration at the health centre for your place of residence, free of charge. Every resident with a Número de Utente has the right to one',
          '📝 **Prescription**: the médico de família issues one for 3–6 months for chronic conditions — you do not need to go to urgência every time',
          '📞 **SNS 24 first, always** — they will decide whether urgência is needed',
          '💻 **MySNS portal** (mysns.min-saude.pt): view your prescriptions, appointments, test results',
          '🚑 **INEM (112)**: only for genuinely life-threatening conditions. False call-outs are fined',
          '🌙 **Night hours in urgência**: if you can wait until morning — wait. 2–4 a.m. is the most difficult time'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'SNS 24 — 808 24 24 24', url: 'https://www.sns24.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Tempos de Espera SNS (app and website)', url: 'https://tempos.min-saude.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DGS — Manchester Triage System', url: 'https://www.dgs.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'INEM — Instituto Nacional de Emergência Médica', url: 'https://www.inem.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
