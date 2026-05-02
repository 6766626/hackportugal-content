export default {
  editorialVoice: 'hackportugal',
  id: 'alojamento-saude-vacina-bebe',
  categoryId: 'education_children',
  title: 'Child health monitoring in the SNS: saúde infantil and vaccinations',
  tldr: 'In Portugal, a child has free monitoring under the Programa Nacional de Saúde Infantil e Juvenil: at least 13 scheduled check-ups from 1 month to 14–18 years, plus vaccinations under the Programa Nacional de Vacinação. At the Centro de Saúde this is free in the SNS, including for children without a residence permit and without a completed número de utente: a child’s care and vaccination should not be delayed because of the parents’ status. In practice, it is better to arrange the utente, family doctor and eBoletim straight away.',
  tags: ['sns', 'children', 'vaccines', 'utente'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'What saúde infantil is',
      content: [
        { kind: 'paragraph', text: 'Saúde infantil is scheduled child monitoring in the SNS under a DGS programme. Check-ups take place at the Centro de Saúde: a nurse and doctor check growth, weight, development, nutrition, vision, hearing, speech, sleep, safety, adolescent mental health and family risks.' },
        { kind: 'paragraph', text: 'This is not a substitute for emergency care. If there is a high temperature in an infant, breathing difficulty, dehydration, seizures, injury or a sudden deterioration in condition — call SNS 24: 808 24 24 24 or 112 if life is at risk.' },
        { kind: 'warning', text: 'A child’s check-ups and vaccination in the SNS are free. Lack of a residence permit, NISS or permanent número de utente is not a reason to refuse a child basic medical care and vaccinations. But for booking and medical history, it is better to arrange a número de utente as early as possible.' }
      ]
    },
    {
      id: 'schedule',
      title: 'Schedule of 13 planned check-ups 📅',
      content: [
        { kind: 'paragraph', text: 'The basic saúde infantil schedule used by SNS24/DGS covers a child from infancy to adulthood. The Centro de Saúde may add visits if there is prematurity, a chronic illness, developmental delay, family risks or missed vaccinations.' },
        { kind: 'checklist', items: [
          '1 month — the first main check after birth: weight, feeding, jaundice, sleep, safety',
          '2 months — development, nutrition, colic, first major vaccination point',
          '4 months — motor skills, age-appropriate vision/hearing, feeding, vaccinations',
          '6 months — introduction of complementary foods, growth, development, vaccinations',
          '9 months — sitting/crawling, nutrition, injury prevention',
          '12 months — age-appropriate walking/speech, nutrition, vaccination',
          '18 months — speech, behaviour, motor skills, sleep, vaccinations if needed',
          '2 years — development, autonomy, nutrition, teeth, screen time',
          '3 years — speech, behaviour, vision, preparation for jardim de infância',
          '5 years — vision, hearing, development, school readiness, MMR/DTPa-IPV under the PNV',
          '6–9 years — school adjustment, growth, vision, weight, sport, safety',
          '10–13 years — puberty, mental health, HPV and other vaccinations under the PNV',
          '14–18 years — adolescent health, sleep, anxiety, sexual health, addictions, age-appropriate Td vaccination'
        ] },
        { kind: 'paragraph', text: 'If the child did not arrive in Portugal from birth, do not wait for the “right” age. Book at the Centro de Saúde: the doctor will check the documents, growth/weight, development and prepare a catch-up vaccination plan.' }
      ]
    },
    {
      id: 'vaccination',
      title: 'Vaccinations under the Programa Nacional de Vacinação 💉',
      content: [
        { kind: 'paragraph', text: 'The Programa Nacional de Vacinação, PNV, is the DGS public vaccination schedule. Vaccines in the PNV are free in the SNS. They are usually administered by a nurse at the Centro de Saúde, often around the same time as the scheduled check-up.' },
        { kind: 'checklist', items: [
          'Hepatitis B — starts at birth, then follows the PNV schedule',
          'DTPa/IPV/Hib — diphtheria, tetanus, whooping cough, polio, Hib in infancy and boosters',
          'Pneumococcal vaccine — in infancy and a booster under the PNV',
          'Meningococcal vaccines — according to age and the current PNV schedule',
          'MMR/VASPR — measles, mumps, rubella: usually 12 months and 5 years',
          'HPV — in adolescence under the PNV, in Portugal included for girls and boys',
          'Td — tetanus/diphtheria in adolescence and adulthood',
          'BCG in Portugal is not given automatically to all newborns: it is intended for risk groups under DGS criteria'
        ] },
        { kind: 'warning', text: 'The Portuguese schedule may differ from the Russian, Ukrainian, Brazilian or British one. Do not start a course again “just in case”: bring all records, and the Centro de Saúde will translate them into the Portuguese PNV and schedule the missing doses.' }
      ]
    },
    {
      id: 'documents',
      title: 'What to take to the Centro de Saúde',
      content: [
        { kind: 'paragraph', text: 'Go to the Centro de Saúde for your address. If you have just moved and do not know your centre, check on SNS24 or ask at the nearest Centro de Saúde using your postcode.' },
        { kind: 'checklist', items: [
          'The child’s passport or Cartão de Cidadão, if they already have one',
          'The child’s número de utente, if already arranged',
          'The child’s NIF, if available; for vaccination itself, it should not be a barrier',
          'Document of the parent or legal representative',
          'Proof of address: tenancy agreement, bill, atestado de residência from the Junta de Freguesia or another document accepted by your Centro de Saúde',
          'Boletim de Saúde Infantil e Juvenil, if issued in Portugal',
          'Vaccination card from another country: original, photo or PDF',
          'Maternity hospital discharge summary, information on pregnancy/birth, prematurity, allergies and chronic diagnoses',
          'List of medicines the child takes regularly',
          'Contacts of the previous paediatrician, if there is a complex medical history'
        ] },
        { kind: 'paragraph', text: 'In Portugal, the eBoletim de Saúde Infantil e Juvenil is increasingly used, but paper records and foreign certificates are still useful. Ask the nurse to enter previous vaccinations into the system.' }
      ]
    },
    {
      id: 'without-utente',
      title: 'If there is no utente or residence permit yet',
      content: [
        { kind: 'paragraph', text: 'The child must be seen and vaccinated even before all documents are fully arranged. At the Centro de Saúde reception desk, explain: “criança residente em Portugal, sem número de utente ainda, precisa de vacinação/consulta de saúde infantil”. Ask for temporary registration and an appointment with enfermagem.' },
        { kind: 'checklist', items: [
          'Do not wait for the AIMA residence card if it is time for a vaccination',
          'Ask for the child’s número de utente to be arranged in parallel with the appointment',
          'If the desk refuses verbally, ask for the written grounds for refusal and the staff member’s name',
          'Call SNS 24: 808 24 24 24 and ask them to indicate the nearest route for vacinação infantil',
          'When moving between areas, ask for the process to be transferred to the new Centro de Saúde',
          'If the child attends creche, jardim de infância or escola, keep a copy of the boletim de vacinas: it is often requested on enrolment',
          'For urgent symptoms, proceed according to clinical need, not document status'
        ] },
        { kind: 'warning', text: 'Private paediatrics is convenient, but it does not replace the public PNV: vaccines from the national schedule are easier and more correctly recorded through the SNS, so that the school and future doctors can see the history.' }
      ]
    },
    {
      id: 'practical-tips',
      title: 'Practical details for parents',
      content: [
        { kind: 'checklist', items: [
          'Book the visit in advance: in large cities, family doctor slots are limited, but vaccination is often done more quickly through enfermagem',
          'Arrive with time to spare: first the reception desk, then the nurse, sometimes the doctor',
          'After vaccination, check which vaccine was administered, the series/lote and the date of the next dose',
          'Ask for a printout or an entry in the boletim if the app/portal does not show the data',
          'If the child was ill on the day of vaccination, the nurse or doctor decides; a mild runny nose is not always a reason to postpone',
          'For teenagers, discuss confidential topics in advance: anxiety, sleep, nutrition, sexual health, alcohol/vapes',
          'Keep a photo of the boletim de vacinas on your phone and in the cloud',
          'For travel outside the EU, check travel vaccines in advance: they may be outside the PNV and paid'
        ] },
        { kind: 'paragraph', text: 'A sensible strategy for an expat: arrange the utente, register with a Centro de Saúde, enter foreign vaccinations, attend the nearest age-appropriate check-up and get a plan for the next doses on paper or in the eBoletim.' }
      ]
    }
  ],
  costs: [
    { label: 'Scheduled saúde infantil check-up in the SNS', amountEUR: 0, note: 'Free for the child at the Centro de Saúde' },
    { label: 'Vaccines from the Programa Nacional de Vacinação', amountEUR: 0, note: 'Free in the SNS according to the DGS schedule' },
    { label: 'Private paediatrician', amountEURMin: 45, amountEURMax: 100, note: 'Market guide; not required for the PNV and depends on the clinic/insurance' }
  ],
  sources: [
    {
      title: 'SNS24: saúde infantil e juvenil',
      url: 'https://www.sns24.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DGS: Programa Nacional de Saúde Infantil e Juvenil',
      url: 'https://www.dgs.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DGS: Programa Nacional de Vacinação',
      url: 'https://www.dgs.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
