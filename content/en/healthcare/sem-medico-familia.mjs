export default {
  editorialVoice: 'hackportugal',
  id: 'sem-medico-familia',
  categoryId: 'healthcare',
  title: 'What to do without a médico de família: consultas de recurso and consulta aberta',
  tldr: 'Not having a médico de família does not deprive you of access to the SNS. If you have a número de utente, contact your Centro de Saúde/USF/UCSP for a consulta aberta, consulta de recurso or atendimento complementar; if you have symptoms, call SNS 24 — 808 24 24 24, to get triage and referral. From June 2026, a practical list clean-up is being introduced: patients who have had no contact with cuidados de saúde primários for 5 years may lose their assigned doctor, but not their SNS registration.',
  tags: ['sns', 'utente', 'consultation', 'healthcare'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-means',
      title: 'No médico de família ≠ no healthcare',
      content: [
        { kind: 'paragraph', text: 'In Portugal, a médico de família is an assigned family doctor in cuidados de saúde primários. They manage chronic illnesses, prescriptions, sick leave baixa médica, referrals to specialists and preventive care. But if you have not yet been assigned a doctor, you still remain an SNS utente and have the right to an appointment in primary care.' },
        { kind: 'paragraph', text: 'In practice, you are seen by a “de recurso” doctor or duty doctor in the consulta aberta format. The names vary by Unidade Local de Saúde: consulta aberta, consulta de recurso, atendimento complementar, consulta do dia, consulta aguda. The meaning is the same: a slot for patients without their own médico de família or for urgent situations among registered patients.' },
        { kind: 'checklist', items: [
          'Check which Centro de Saúde / USF / UCSP you are assigned to by address',
          'Take your número de utente, NIF, identity document and residence permit/visa, if you have them',
          'Call in the morning: many centros open consulta aberta slots on the same day',
          'If symptoms are acute — call SNS 24 first: 808 24 24 24',
          'If you need urgent care, but not 112, ask for SNS 24 triagem and encaminhamento',
          'For prescriptions and chronic conditions, ask for a consulta programada de recurso',
          'For sick leave baixa médica, check whether the duty doctor can issue a CIT',
          'Do not wait for a “family doctor assignment” if you already have a problem: ask for an alternative appointment'
        ] }
      ]
    },
    {
      id: 'how-to-get-consulta',
      title: 'How to book a consulta aberta / de recurso',
      content: [
        { kind: 'substeps', items: [
          { id: 'call-center', title: '1. Call or go to your unidade', content: [
            { kind: 'paragraph', text: 'Start with the phone number of your Centro de Saúde, USF or UCSP. If they do not answer, go in person to the balcão administrativo in the morning. In Lisbon, Porto and overloaded areas, an in-person visit is often more effective.' },
            { kind: 'checklist', items: [
              'Say: “Não tenho médico de família atribuído”',
              'Ask for: “consulta aberta” or “consulta de recurso”',
              'Briefly state the problem: fever, pain, blood pressure, prescription, tests, baixa',
              'Check whether there are vagas hoje or in the next few days',
              'Ask them to record the refusal or offer an alternative if there are no slots'
            ] }
          ] },
          { id: 'sns24', title: '2. Call SNS 24 if you have symptoms', content: [
            { kind: 'paragraph', text: 'SNS 24 is the official medical triage service. The number 808 24 24 24 works 24/7. The operator and nurse assess symptoms and can direct you to a Centro de Saúde, Serviço de Urgência or give instructions for monitoring at home.' },
            { kind: 'paragraph', text: 'For a foreigner, this matters: a referral from SNS 24 reduces the risk of pointless waiting in urgência and helps the system understand that you have not come in “off your own bat”.' }
          ] },
          { id: 'app-portal', title: '3. Check the SNS 24 app / portal', content: [
            { kind: 'paragraph', text: 'If you already have a número de utente and access via Chave Móvel Digital, Cartão de Cidadão or another supported method, check Área Pessoal do SNS 24. There you can see your unidade de saúde, assigned médico de família, prescriptions, exames and sometimes available contacts.' }
          ] }
        ] }
      ]
    },
    {
      id: 'what-to-ask',
      title: 'Exactly what to ask for depending on the situation',
      content: [
        { kind: 'paragraph', text: 'The main mistake is saying “I do not have a family doctor, what should I do?” and leaving without a solution. Frame the request around the medical issue. The administrator does not make a diagnosis, but should direct you to an available appointment channel.' },
        { kind: 'checklist', items: [
          'Acute cold, infection, pain, blood pressure: “Preciso de consulta aberta hoje / o mais breve possível”',
          'Renewal of a regular prescription: “Preciso de renovação de medicação crónica”',
          'Tests or chronic disease monitoring: “Preciso de consulta programada de recurso”',
          'Sick leave: “Preciso de avaliação médica para Certificado de Incapacidade Temporária / baixa”',
          'Pregnancy: “Preciso de vigilância de saúde materna” — this should not wait for a family doctor',
          'Child: “Consulta de saúde infantil” or “doença aguda”',
          'Vaccination: ask for the sala de vacinação; often no doctor is needed',
          'Mental health issue without immediate danger to life: ask for a medical appointment and referral; if there is a suicide risk — 112 or urgência',
          'Dentistry: access in the SNS is limited; ask about cheque-dentista if you meet the criteria'
        ] },
        { kind: 'warning', text: 'If there is chest pain, signs of a stroke, severe shortness of breath, loss of consciousness, heavy bleeding, anaphylaxis — do not wait for consulta aberta. Call 112.' }
      ]
    },
    {
      id: 'if-refused',
      title: 'If they say “no doctor” or “no vagas”',
      content: [
        { kind: 'paragraph', text: 'Primary care overload is real, but the phrase “no médico de família” should not automatically mean a refusal of care. Ask for a specific alternative route: another day, atendimento complementar, a nearby Unidade de Saúde Familiar, SNS 24, urgência básica or written information.' },
        { kind: 'checklist', items: [
          'Ask: “Qual é a alternativa para utentes sem médico de família?”',
          'Ask to be put on a waiting list for a consulta de recurso',
          'Ask whether there is atendimento complementar in the evening or at weekends',
          'Check whether you have been assigned to another unidade after moving',
          'Update your address in the SNS/Centro de Saúde if you have changed freguesia',
          'If the problem is urgent — call SNS 24 directly from the waiting area and follow the triage',
          'If they systematically refuse without a solution — submit a reclamação in the Livro de Reclamações or through ERS',
          'Keep dates of calls, names, your utente number and staff replies'
        ] },
        { kind: 'warning', text: 'Do not use hospital urgência as a substitute for a family doctor for ordinary prescriptions and certificates. Without an SNS 24 referral, the wait can be long, and the Serviço de Urgência is designed for urgent conditions.' }
      ]
    },
    {
      id: 'five-year-rule',
      title: 'The 5-year inactivity rule from June 2026',
      content: [
        { kind: 'paragraph', text: 'From June 2026, a list update mechanism is being launched in cuidados de saúde primários: patients who have had no contact with primary care for 5 years may lose their assigned médico de família. The aim is to free up places with doctors for people who genuinely live in the area and need monitoring.' },
        { kind: 'paragraph', text: 'This does not mean losing your número de utente or your right to the SNS. It concerns the list of a specific family doctor. But for expats the risk is practical: if you have left, changed address, do not respond to contacts or have never attended, the system may consider you inactive.' },
        { kind: 'checklist', items: [
          'Once a year, check Área Pessoal do SNS 24: unidade, contacts, médico de família',
          'Update your Portuguese phone number and email at the Centro de Saúde',
          'After moving, change your assignment according to your new address',
          'Do not ignore SMS messages/letters from the SNS about confirming data',
          'Keep at least occasional contact: vaccine, preventive care, prescription, consulta',
          'If your doctor has been removed, ask for reinscrição and inclusion on the list of utentes sem médico de família',
          'If you live in Portugal but rarely get ill, still confirm that your data is up to date'
        ] }
      ]
    },
    {
      id: 'practical-limits',
      title: 'Limits and what to keep to hand',
      content: [
        { kind: 'paragraph', text: 'Consulta aberta is not a full substitute for a permanent médico de família. The duty doctor usually deals with a specific issue: examination, prescription, referral, sick leave, tests. Long-term management of diabetes, hypertension, pregnancy or psychiatry is better organised through regular consultas programadas.' },
        { kind: 'checklist', items: [
          'Número de utente',
          'Identity document and residence permit/visa, if you have one',
          'NIF',
          'List of medicines with dosages',
          'Old prescriptions, discharge summaries, test results',
          'Allergies and chronic diagnoses in Portuguese or English',
          'Contacts and address of your USF/UCSP',
          'SNS 24 phone number: 808 24 24 24',
          'For emergencies: 112'
        ] },
        { kind: 'warning', text: 'If you do not yet have a número de utente, first deal with SNS registration at the Centro de Saúde. But emergency care, pregnancy, children and infectious risks should not be delayed because of the absence of a number.' }
      ]
    }
  ],
  costs: [
    { label: 'Consulta in SNS cuidados de saúde primários', amountEUR: 0, note: 'Taxas moderadoras in SNS primary care have been abolished; an appointment at a Centro de Saúde for an utente is usually free.' },
    { label: 'SNS 24 call', amountEUR: 0, note: 'The medical service is free; there may be a call charge according to your operator’s tariff for 808 numbers.' },
    { label: 'Private GP/medicina geral without insurance', amountEURMin: 40, amountEURMax: 90, note: 'Indicative range for private clinics; it does not replace SNS registration and does not give automatic access to SNS referrals.' }
  ],
  sources: [
    {
      title: 'Caixa Geral de Depósitos: what to do if you do not have a médico de família',
      url: 'https://www.cgd.pt/Site/Saldo-Positivo/protecao/Pages/nao-tenho-medico-familia.aspx',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'SNS 24: access to appointments in cuidados de saúde primários',
      url: 'https://www.sns24.gov.pt/guia/consulta-nos-cuidados-de-saude-primarios/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'SNS 24: telephone contact 808 24 24 24 and triagem',
      url: 'https://www.sns24.gov.pt/servico/atendimento-sns-24/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ERS: SNS user rights and Livro de Reclamações',
      url: 'https://www.ers.pt/pt/utentes/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
