export default {
  editorialVoice: 'hackportugal',
  id: 'rede-saude-mental-publica',
  categoryId: 'healthcare',
  title: 'Mental health in the SNS: médico de família, SPMS, Linha SOS and urgência psiquiátrica',
  tldr: 'In Portugal, mental health care in the SNS usually starts with the médico de família at the Centro de Saúde: they assess your condition, provide treatment and refer you to psicologia/psiquiatria at a hospital or ULS. Urgent: 112 for suicide risk, psychosis, aggression, overdose; SNS 24 — 808 24 24 24 for triage and psychological support.\n\nIn Lisbon, people are often referred to Hospital Júlio de Matos; in Porto, to Hospital Magalhães Lemos. Linha SOS Voz Amiga is a volunteer support line, not a substitute for urgência.',
  tags: ['sns', 'mental health', 'urgência', 'sos'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'normal-route',
      title: 'The usual route through the SNS 🧭',
      content: [
        { kind: 'paragraph', text: 'If there is no immediate threat to life, start with the Centro de Saúde for your place of residence. In the SNS, the entry point is the médico de família or consulta aberta/do dia if you do not yet have a family doctor.' },
        { kind: 'checklist', items: [
          'Book an appointment at the Centro de Saúde: in person, by phone, via the SNS 24 personal area or the SNS 24 app, if available.',
          'Say it directly: ansiedade, depressão, insónia, ataques de pânico, luto, burnout, pensamentos suicidas — do not describe it only as “tiredness”.',
          'Ask for a risk assessment and referral: psicologia, psiquiatria, consulta de saúde mental, hospital de dia or urgência, if the condition is serious.',
          'Bring a list of medicines, diagnoses, discharge letters, test results and contacts for any private doctor if you have already been treated.',
          'If you take antidepressants, benzodiazepinas, antipsicóticos or mood stabilisers — do not stop abruptly without a doctor.',
          'If your português is weak, bring an interpreter/friend: a psychiatric appointment requires precise wording.'
        ] },
        { kind: 'paragraph', text: 'In 2026, the SNS works through local ULS. This means that the Centro de Saúde and the hospital in the same area are connected: the referral usually goes to “your” hospital network, not to any clinic of your choice.' }
      ]
    },
    {
      id: 'sns24-spms',
      title: 'SNS 24 and SPMS: remote help 📱',
      content: [
        { kind: 'paragraph', text: 'SNS 24 is the national helpline and digital entry point into the SNS. The number 808 24 24 24 works 24/7. For mental health, it is not “a chat with a psychotherapist for years”, but triage, brief psychological support and routing: to a doctor, to urgência or to emergency help.' },
        { kind: 'paragraph', text: 'SPMS — Serviços Partilhados do Ministério da Saúde — supports the SNS digital infrastructure: SNS 24, telemedicine solutions, electronic referrals and access to the personal area. In practice, patients see this as telephone triage, video consultations, electronic prescriptions and bookings.' },
        { kind: 'checklist', items: [
          'Call SNS 24 for panic attacks, severe anxiety, insomnia, worsening depression or medicine side effects.',
          'When calling, keep your número de utente, NIF, date of birth, address and list of medicines to hand.',
          'If the operator considers the situation urgent, they may refer you to urgência or call INEM/112.',
          'If you were referred through SNS 24, keep the SMS/reference: it is important for the pathway and sometimes for taxas moderadoras.',
          'For planned care, SNS 24 usually does not replace the médico de família: after the call you still need an appointment at the Centro de Saúde.'
        ] },
        { kind: 'warning', text: '808 24 24 24 is not the number for an immediate threat to life. If a person may harm themselves or others, has confusion, psychosis, overdose, severe intoxication or has attempted suicide — call 112.' }
      ]
    },
    {
      id: 'sos-lines',
      title: 'Linha SOS Voz Amiga and other support lines ☎️',
      content: [
        { kind: 'paragraph', text: 'Linha SOS Voz Amiga is a Portuguese volunteer emotional support line. It is used when someone needs to talk to a real person during loneliness, anxiety or a crisis, but without immediate medical danger.' },
        { kind: 'checklist', items: [
          'Suitable for: loneliness, acute stress, crying, anxious thoughts, conflict, emotional breakdown.',
          'Not suitable as a replacement for 112, urgência psiquiátrica, a doctor or a prescription for medicines.',
          'The conversation is confidential, but it is not a medical consultation and not psychotherapy.',
          'Check numbers and opening hours on the Linha SOS Voz Amiga website: the schedule may change.',
          'Calls to landline/mobile numbers are usually charged according to your operator; being “free” depends on your phone package, not on the SNS.',
          'If your português is weak, it is better to write a short phrase in advance: “Estou em crise, tenho pensamentos suicidas / ataques de pânico / preciso de ajuda”.'
        ] },
        { kind: 'paragraph', text: 'For expat practice: keep three contacts in your phone — 112, SNS 24 808 24 24 24 and Linha SOS Voz Amiga. The first is for danger, the second for medical triage, the third for emotional support.' }
      ]
    },
    {
      id: 'psychiatric-emergency',
      title: 'When to go to urgência psiquiátrica 🚑',
      content: [
        { kind: 'paragraph', text: 'Urgência psiquiátrica is hospital psychiatric emergency care. You do not go there “just to get to a psychologist faster”; you go when there is a risk that cannot wait until an appointment at the Centro de Saúde.' },
        { kind: 'checklist', items: [
          'Suicidal thoughts with a plan, preparation or access to means.',
          'Suicide attempt, self-harm, overdose of alcohol/medicines/drugs.',
          'Hallucinations, delusions, severe confusion, mania, sudden inappropriate behaviour.',
          'Aggression, threat to others, inability to control impulses.',
          'Severe panic with a feeling of losing control, especially for the first time.',
          'Postpartum psychosis, severe depression after childbirth, thoughts of harming the baby or yourself.',
          'Withdrawal from alcohol/benzodiazepinas, seizures, delirium.',
          'Sudden deterioration while taking psychiatric medicines: marked slowing down, fever, muscle rigidity, suicidal thoughts.'
        ] },
        { kind: 'paragraph', text: 'In Lisbon, a well-known point for psychiatric urgência is Hospital Júlio de Matos. In Porto, it is Hospital Magalhães Lemos. But in 2026, routing depends on the ULS, address and duty rota: it is safer to call 112 or SNS 24 first if the condition allows.' },
        { kind: 'warning', text: 'Do not drive a person in crisis in a car alone if there is a risk of jumping out, aggression, loss of consciousness or overdose. Call 112: INEM and the police can ensure safe transport.' }
      ]
    },
    {
      id: 'documents-costs',
      title: 'Documents, language and cost 💶',
      content: [
        { kind: 'paragraph', text: 'For emergency help, documents should not be a barrier. But for normal routing in the SNS, it is better to have a número de utente, NIF and proof of address. If you do not yet have a utente number, still seek help: urgência and 112 operate according to medical need.' },
        { kind: 'checklist', items: [
          'Bring your residence permit/passport, número de utente, NIF, and a list of medicines and dosages.',
          'Show previous diagnoses and discharge letters: Portugal does not always see history from another country.',
          'Write down allergies, alcohol/substance use and chronic illnesses.',
          'If you need sick leave, discuss baixa médica with the médico de família or hospital doctor.',
          'For prescriptions in the SNS, you need a doctor; psychologists do not prescribe medicines.',
          'If you are given alta da urgência, ask for a written discharge letter and plan: where to book, which medicines, when the follow-up appointment is.',
          'If you do not understand the doctor, ask “pode escrever no relatório?” — a written plan reduces errors.'
        ] },
        { kind: 'paragraph', text: 'Taxas moderadoras in the SNS have mostly been abolished, but a fee may apply for urgência without referral from SNS 24/INEM/Centro de Saúde and without subsequent hospitalisation. If there is a risk to life, do not delay because of money.' }
      ]
    }
  ],
  costs: [
    { label: 'SNS 24 call — 808 24 24 24', amountEURMin: 0, amountEURMax: 0.16, note: 'The cost depends on the operator and tariff; the SNS medical service is not charged separately.' },
    { label: 'Urgência básica without referral and without hospitalisation', amountEUR: 14, note: 'A taxa moderadora may apply if there is no referral from SNS 24/INEM/Centro de Saúde and no internamento.' },
    { label: 'Urgência médico-cirúrgica without referral and without hospitalisation', amountEUR: 16, note: 'The actual category depends on the hospital and pathway.' },
    { label: 'Urgência polivalente without referral and without hospitalisation', amountEUR: 18, note: 'Usually not charged when referred through SNS 24/112 or in case of hospitalisation.' }
  ],
  sources: [
    { title: 'SNS 24 — contacts, triage and psychological counselling', url: 'https://www.sns24.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'DGS — National Programme for Mental Health', url: 'https://www.dgs.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'SPMS — SNS digital services and SNS 24', url: 'https://www.spms.min-saude.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ERS — taxas moderadoras in the SNS', url: 'https://www.ers.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
