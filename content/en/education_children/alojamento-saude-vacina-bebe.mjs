export default {
  editorialVoice: 'hackportugal',
  id: 'alojamento-saude-vacina-bebe',
  categoryId: 'education_children',
  title: 'Child health monitoring in the SNS: child health and vaccinations',
  tldr: 'In Portugal, a child has free monitoring under the National Child and Youth Health Programme: at least 13 scheduled check-ups from 1 month to 14–18 years plus vaccinations under the National Vaccination Programme. At the Centro de Saúde this is free in the SNS, including for children without a residence permit and without an issued número de utente: a child’s care and vaccination should not be delayed because of the parents’ status. In practice, it is best to arrange the utente, family doctor and eBoletim straight away.',
  tags: ['sns', 'children', 'vaccines', 'utente'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'What child health monitoring is',
      content: [
        { kind: 'paragraph', text: 'Child health monitoring is scheduled monitoring of a child in the SNS under the DGS programme. Check-ups take place at the Centro de Saúde: a nurse and doctor check growth, weight, development, diet, vision, hearing, speech, sleep, safety, adolescent mental health and family risks.' },
        { kind: 'paragraph', text: 'This is not a substitute for emergency care. If an infant has a high temperature, breathing difficulty, dehydration, seizures, trauma or a sudden deterioration in condition, call SNS 24: 808 24 24 24 or 112 if life is at risk.' },
        { kind: 'warning', text: 'Check-ups and vaccination for a child in the SNS are free. The absence of a residence permit, NISS or a permanent número de utente is not grounds to refuse a child basic healthcare and vaccinations. But for appointments and medical history it is better to arrange the número de utente as early as possible.' }
      ]
    },
    {
      id: 'schedule',
      title: 'Schedule of 13 planned check-ups 📅',
      content: [
        { kind: 'paragraph', text: 'The basic child health schedule used by SNS24/DGS covers a child from infancy to adulthood. The Centro de Saúde may add visits if there is prematurity, chronic illness, developmental delay, family risks or missed vaccinations.' },
        { kind: 'checklist', items: [
          '1 month — first main check after birth: weight, feeding, jaundice, sleep, safety',
          '2 months — development, diet, colic, first major vaccination point',
          '4 months — motor skills, age-appropriate vision/hearing, feeding, vaccinations',
          '6 months — introduction of complementary foods, growth, development, vaccinations',
          '9 months — sitting/crawling, diet, injury prevention',
          '12 months — age-appropriate walking/speech, diet, vaccination',
          '18 months — speech, behaviour, motor skills, sleep, vaccinations if needed',
          '2 years — development, autonomy, diet, teeth, screen time',
          '3 years — speech, behaviour, vision, preparation for Jardim de Infância',
          '5 years — vision, hearing, development, school readiness, MMR/DTPa-IPV under the PNV',
          '6–9 years — school adaptation, growth, vision, weight, sport, safety',
          '10–13 years — puberty, mental health, HPV and other vaccinations under the PNV',
          '14–18 years — adolescent health, sleep, anxiety, sexual health, addictions, age-appropriate Td vaccination'
        ] },
        { kind: 'paragraph', text: 'If the child arrived in Portugal after birth, do not wait for the “correct” age. Make an appointment at the Centro de Saúde: the doctor will check the documents, growth/weight, development and draw up a catch-up vaccination plan.' }
      ]
    },
    {
      id: 'vaccination',
      title: 'Vaccinations under the National Vaccination Programme 💉',
      content: [
        { kind: 'paragraph', text: 'The National Vaccination Programme, PNV, is the state DGS vaccination schedule. Vaccines included in the PNV are free in the SNS. They are usually administered by a nurse at the Centro de Saúde, often around the same time as the scheduled check-up.' },
        { kind: 'checklist', items: [
          'Hepatitis B — starts at birth, then continues according to the PNV schedule',
          'DTPa/IPV/Hib — diphtheria, tetanus, whooping cough, poliomyelitis, Hib in infancy and boosters',
          'Pneumococcal vaccine — in infancy and a booster under the PNV',
          'Meningococcal vaccines — according to age and the current PNV schedule',
          'MMR/VASPR — measles, mumps, rubella: usually at 12 months and 5 years',
          'HPV — in adolescence under the PNV; in Portugal it is included for girls and boys',
          'Td — tetanus/diphtheria in adolescence and adulthood',
          'BCG in Portugal is not given automatically to all newborns: it is intended for risk groups under DGS criteria'
        ] },
        { kind: 'warning', text: 'The Portuguese schedule may differ from the Russian, Ukrainian, Brazilian or British one. Do not restart a course “just in case”: bring all records, and the Centro de Saúde will translate them into the Portuguese PNV and prescribe the missing doses.' }
      ]
    },
    {
      id: 'documents',
      title: 'What to take to the Centro de Saúde',
      content: [
        { kind: 'paragraph', text: 'Go to the Centro de Saúde for your address. If you have just moved and do not know your centre, check on SNS24 or ask at the nearest Centro de Saúde using your postcode.' },
        { kind: 'checklist', items: [
          'Child’s passport or Cartão de Cidadão, if already available',
          'Child’s número de utente, if already issued',
          'Child’s NIF, if available; for vaccination itself it should not be a barrier',
          'Parent’s or legal representative’s document',
          'Proof of address: rental contract, bill, atestado de residência from the Junta de Freguesia or another document accepted by your Centro de Saúde',
          'Child and Youth Health Booklet, if issued in Portugal',
          'Vaccination card from another country: original, photo or PDF',
          'Maternity hospital discharge note, information on pregnancy/birth, prematurity, allergies and chronic diagnoses',
          'List of medicines the child takes regularly',
          'Contact details of the previous paediatrician, if there is a complex medical history'
        ] },
        { kind: 'paragraph', text: 'Portugal increasingly uses the eBoletim de Saúde Infantil e Juvenil, but paper records and foreign certificates are still useful. Ask the nurse to enter previous vaccinations into the system.' }
      ]
    },
    {
      id: 'without-utente',
      title: 'If there is no utente or residence permit yet',
      content: [
        { kind: 'paragraph', text: 'The child must be seen and vaccinated even before the documents are fully arranged. At the Centro de Saúde reception desk, explain: “criança residente em Portugal, sem número de utente ainda, precisa de vacinação/consulta de saúde infantil”. Ask for temporary registration and an appointment with enfermagem.' },
        { kind: 'checklist', items: [
          'Do not wait for the AIMA residence card if a vaccination is due',
          'Ask for the child’s número de utente to be arranged in parallel with the appointment',
          'If the reception desk refuses verbally, ask for the written grounds for refusal and the staff member’s name',
          'Call SNS 24: 808 24 24 24 and ask them to indicate the nearest route for vacinação infantil',
          'When moving between areas, ask for the process to be transferred to the new Centro de Saúde',
          'If the child attends Creche, Jardim de Infância or escola, keep a copy of the boletim de vacinas: it is often requested during enrolment',
          'For urgent symptoms, proceed according to clinical need, not document status'
        ] },
        { kind: 'warning', text: 'Private paediatrics is convenient, but it does not replace the state PNV: vaccines from the national schedule are easier and more properly recorded through the SNS, so that the school and future doctors can see the history.' }
      ]
    },
    {
      id: 'practical-tips',
      title: 'Practical details for parents',
      content: [
        { kind: 'checklist', items: [
          'Book the visit in advance: in large cities, slots with a family doctor are limited, but vaccination is often done faster through enfermagem',
          'Arrive with spare time: first the reception desk, then the nurse, sometimes the doctor',
          'After the vaccination, confirm which vaccine was administered, the batch/lote and the date of the next dose',
          'Ask for a printout or an entry in the boletim if the app/portal does not show the data',
          'If the child was ill on the day of vaccination, the nurse or doctor makes the decision; a mild runny nose is not always a reason to postpone',
          'For teenagers, discuss confidential topics in advance: anxiety, sleep, diet, sexual health, alcohol/vapes',
          'Keep a photo of the boletim de vacinas on your phone and in the cloud',
          'For travel outside the EU, check travel vaccines in advance: they may be outside the PNV and paid'
        ] },
        { kind: 'paragraph', text: 'A normal strategy for an expat is to arrange the utente, register with the Centro de Saúde, enter foreign vaccinations, complete the nearest age-appropriate check-up and get a plan for the next doses on paper or in the eBoletim.' }
      ]
    }
  ],
  costs: [
    { label: 'Scheduled child health check-up in the SNS', amountEUR: 0, note: 'Free for the child at the Centro de Saúde' },
    { label: 'Vaccines from the National Vaccination Programme', amountEUR: 0, note: 'Free in the SNS according to the DGS schedule' },
    { label: 'Private paediatrician', amountEURMin: 45, amountEURMax: 100, note: 'Market guide; not required for the PNV and depends on the clinic/insurance' }
  ],
  sources: [
    {
      title: 'SNS24: child and youth health',
      url: 'https://www.sns24.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DGS: National Child and Youth Health Programme',
      url: 'https://www.dgs.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DGS: National Vaccination Programme',
      url: 'https://www.dgs.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
