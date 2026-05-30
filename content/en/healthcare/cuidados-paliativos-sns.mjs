export default {
  editorialVoice: 'hackportugal',
  id: 'cuidados-paliativos-sns',
  categoryId: 'healthcare',
  title: 'Palliative care in the SNS — RNCCI Cuidados Paliativos',
  tldr: 'Palliative care in Portugal means pain and symptom control and family support during a serious incurable illness, not only the “last days”. In the SNS, the referral is made by the family doctor at the Centro de Saúde or by the hospital team. Care can be at home, in hospital, in a Unidade de Cuidados Paliativos or through RNCCI/ECCI. The medical part in the SNS is usually free; medicines and the social component may have comparticipação under SNS/RNCCI rules.',
  tags: ['sns', 'rncci', 'palliative', 'utente'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'What palliative care includes',
      content: [
        { kind: 'paragraph', text: 'Cuidados Paliativos in the SNS is specialised care for people with progressive, serious or incurable illnesses: oncology, heart/respiratory failure, dementia, ALS, severe neurological conditions and other illnesses where the goal is quality of life, pain control and family support.' },
        { kind: 'paragraph', text: 'It does not mean “giving up treatment”. A palliative team can work in parallel with oncology, cardiology, neurology, rehabilitation and the family doctor.' },
        { kind: 'checklist', items: [
          'control of pain, shortness of breath, nausea, anxiety, insomnia and other symptoms',
          'adjusting pain relief, including opioids on SNS prescription',
          'psychological and social support for the patient and family',
          'home care plan: medicines, nutrition, pressure sores, emergency situations',
          'training the family caregiver: how to lift, feed, give medicines, when to call a doctor',
          'coordination with the Centro de Saúde, hospital, RNCCI and social services',
          'support when making decisions about hospitalisation, resuscitation, place of care',
          'support for the family during bereavement, if this service is available in the region'
        ] }
      ]
    },
    {
      id: 'routes',
      title: 'Where you may be referred: home, hospital or unidade',
      content: [
        { kind: 'paragraph', text: 'In Portugal, palliative care is organised through the SNS and Rede Nacional de Cuidados Paliativos, while part of long-term care goes through RNCCI. In practice, the patient does not need to choose the network themselves: the doctor makes the referral, and the system selects the available type of response.' },
        { kind: 'substeps', items: [
          { id: 'home', title: 'Care at home', content: [
            { kind: 'paragraph', text: 'If the patient can remain at home, care may be provided through an Equipa Comunitária de Suporte em Cuidados Paliativos or through ECCI in RNCCI, when ongoing home care is needed. The team usually works with the family doctor, Centro de Saúde nurses and the caregiver.' }
          ] },
          { id: 'hospital', title: 'Hospital palliative care team', content: [
            { kind: 'paragraph', text: 'In hospital, the attending doctor can make the referral. The team helps control symptoms, plan discharge, and arrange a referral to RNCCI or a Unidade de Cuidados Paliativos.' }
          ] },
          { id: 'unit', title: 'Unidade de Cuidados Paliativos / internamento', content: [
            { kind: 'paragraph', text: 'If symptoms cannot be safely controlled at home, the patient may be referred to an inpatient Unidade de Cuidados Paliativos or another suitable unidade. Waiting times and availability depend on the region and clinical urgency.' }
          ] }
        ] },
        { kind: 'warning', text: 'Do not wait for “the very end”. In the SNS, referral to a palliative team is justified already when there are frequent hospitalisations, uncontrolled pain, marked weakness, weight loss, progressive dementia or when it is becoming difficult for the family to provide care at home.' }
      ]
    },
    {
      id: 'referral',
      title: 'How to get a referral in the SNS',
      content: [
        { kind: 'paragraph', text: 'The most effective route is through the médico de família at the Centro de Saúde. If the patient is already in hospital, ask the attending doctor or equipa de gestão de altas to arrange the referral before discharge.' },
        { kind: 'checklist', items: [
          'patient’s Número de utente SNS',
          'identity document: residence permit, Cartão de Cidadão, passport or another ID',
          'NIF, if available',
          'list of diagnoses and hospital discharge letters',
          'current list of medicines with dosages',
          'contacts of the main caregiver and the address where the patient is actually staying',
          'description of symptoms: pain on a 0–10 scale, shortness of breath, confusion, falls, pressure sores',
          'mobility information: walks independently, with a walker, bedridden, needs oxygen',
          'equipment available at home: cama articulada, cadeira de rodas, colchão anti-escaras',
          'if an interpreter is needed — arrange in advance for someone who can speak Portuguese'
        ] },
        { kind: 'paragraph', text: 'Phrase for the doctor: “Queremos avaliação por cuidados paliativos / RNCCI, porque há dor e sintomas difíceis de controlar em casa.” It is better to be specific: how many times you have called urgência, which medicines do not help, who provides care, what has become impossible to do at home.' },
        { kind: 'warning', text: 'If the condition has suddenly worsened — severe shortness of breath, severe pain, loss of consciousness, bleeding, seizures — call 112 or SNS 24: 808 24 24 24. A referral to RNCCI does not replace emergency care.' }
      ]
    },
    {
      id: 'costs-access',
      title: 'How much it costs and who is eligible',
      content: [
        { kind: 'paragraph', text: 'For SNS users, medical palliative care in the public system is usually not paid for like a private hospice. Since 2022, most taxas moderadoras in the SNS have been abolished; palliative care should not turn into a paid private service only because the patient is a foreign resident.' },
        { kind: 'paragraph', text: 'In RNCCI, it is important to distinguish between the medical and social components. Medical services are paid for by the SNS. In some types of ongoing care, the social component may be comparticipada taking into account family income and Segurança Social. The specific amount is calculated at referral; for clinical palliative care, the key points are having a utente and a medical indication.' },
        { kind: 'checklist', items: [
          'if you have a residence permit and número de utente — ask for a referral through the médico de família',
          'if you have a D1–D8 visa and are already registered in the SNS — the route is the same',
          'if you do not yet have a utente — first request a número de utente at the Centro de Saúde, but in an urgent condition go through urgência',
          'private insurance may cover consultations and hospitalisation, but RNCCI/SNS is still arranged through the public system',
          'medicines on SNS prescription may have comparticipação; part of the cost is paid by the patient',
          'home equipment is sometimes provided through the hospital, Câmara Municipal, Segurança Social, charities or rented privately',
          'waiting times vary: Lisbon and Porto are usually under more pressure than smaller towns'
        ] }
      ]
    },
    {
      id: 'family-caregiver',
      title: 'Support for the family and caregiver',
      content: [
        { kind: 'paragraph', text: 'Palliative care in the SNS looks not only at the patient, but also at the family. The main caregiver should be included in the plan: whom to call at night, which symptoms are dangerous, how to give SOS doses, when to call 112, how to get a prescription and consumables.' },
        { kind: 'checklist', items: [
          'ask for a written plano de cuidados: medicines by time, SOS schedules, team contacts',
          'check who renews prescriptions: the family doctor, hospital or palliative team',
          'ask for training on pressure sores, feeding, hygiene, transfers from the bed',
          'ask about apoio domiciliário, refeições ao domicílio and help from the Junta de Freguesia',
          'if the caregiver works — check rights to faltas, baixa or Estatuto do Cuidador Informal in Segurança Social',
          'if care has become impossible at home — ask for reassessment for internamento RNCCI/Unidade de Cuidados Paliativos',
          'keep at home a list of medicines, allergies, diagnoses and a copy of the Cartão de Utente for the ambulance'
        ] },
        { kind: 'warning', text: 'Do not sign a private contract for expensive care until you have asked the hospital/Centro de Saúde about SNS and RNCCI options. In Portugal there is a public route, but it requires a referral and clinical assessment.' }
      ]
    }
  ],
  costs: [
    { label: 'Consultation/monitoring in the SNS by referral', amountEUR: 0, note: 'Most taxas moderadoras in the SNS have been abolished; access depends on the utente and medical indication.' },
    { label: 'Medical component of RNCCI/SNS', amountEUR: 0, note: 'Paid for by the public system; the social component in some RNCCI responses may be calculated separately according to income.' },
    { label: 'Medicines on SNS prescription', amountEURMin: 0, amountEURMax: 100, note: 'The exact amount depends on the medicine and the level of comparticipação; some painkillers and consumables may require a co-payment.' }
  ],
  sources: [
    { title: 'SNS — information on Cuidados Paliativos', url: 'https://www.sns.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'RNCCI — Rede Nacional de Cuidados Continuados Integrados', url: 'https://www.sns.gov.pt/sns-saude-mais/cuidados-continuados/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 52/2012 — Lei de Bases dos Cuidados Paliativos', url: 'https://diariodarepublica.pt/dr/detalhe/lei/52-2012-174841', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'SNS 24 — contact line 808 24 24 24', url: 'https://www.sns24.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-30',
  verifyIntervalDays: 180
}
