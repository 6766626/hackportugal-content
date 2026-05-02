export default {
  editorialVoice: 'hackportugal',
  id: 'sicad-dependencias-sup',
  categoryId: 'healthcare',
  title: 'SICAD/ICAD: free help for addictions — alcohol, drugs, gambling',
  tldr: 'In Portugal, help for addictions is provided through the public SICAD/ICAD network: CRI/CAT/Equipas de Tratamento. For people living in the country, treatment is usually free in the SNS: consultations, psychiatry, psychologist, social worker, methadone/buprenorphine programmes, help with alcohol dependence and jogo patológico. You can go directly or via a médico de família. Emergency intoxication, withdrawal with seizures, psychosis or suicide risk — call 112 or go to urgência hospitalar; do not wait for an appointment.',
  tags: ['sicad', 'addictions', 'alcohol', 'drugs', 'gambling'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-it',
      title: 'What SICAD/ICAD is and where you actually go',
      content: [
        { kind: 'paragraph', text: 'SICAD is the old and still widely recognised name for the state addiction system. In 2026, practical services are delivered through the ICAD/SICAD network and local CRI — Centros de Respostas Integradas. Many people still say CAT out of habit: this is the old name for centros de atendimento a toxicodependentes.' },
        { kind: 'paragraph', text: 'A CRI is not the police and not an immigration service. It is a medical and social network: doctor, psychiatrist, psychologist, enfermeiro, assistente social. The aim is treatment and harm reduction, not punishment.' },
        { kind: 'checklist', items: ['Alcohol dependence: assessment, outpatient treatment, referral for desintoxicação alcoólica', 'Opioid dependence: programa de substituição opiácea — methadone or buprenorphine according to clinical indications', 'Cocaine, cannabis, stimulants, benzodiazepinas: consultations, psychiatry, psychotherapy, harm-reduction plan', 'Jogo patológico: gambling, online casinos, betting, financial control, psychotherapy', 'Teenagers and families: consultations for parents and family sessions', 'Social issues: work, housing, debts, links with Segurança Social and Junta de Freguesia', 'Referral to internamento or comunidade terapêutica if outpatient treatment is not enough'] }
      ]
    },
    {
      id: 'who-can-use',
      title: 'Who is eligible and how much it costs',
      content: [
        { kind: 'paragraph', text: 'For residents and people actually living in Portugal, help in the public addiction network is provided through the SNS and is usually free. You do not need private seguro de saúde to start.' },
        { kind: 'checklist', items: ['Take your passport or Cartão de Cidadão / residence permit, if you have one', 'Número de utente SNS — recommended, but in an acute situation it should not be a barrier', 'NIF — useful for administrative registration, but it is not a medical condition for treatment', 'Proof of address — rental contract, bill, atestado de residência, if they ask in order to identify your CRI', 'List of medicines: antidepressivos, benzodiazepinas, antipsicóticos, opioides, anti-epileptics', 'Test results, discharge notes from urgência, diagnoses, if you have them', 'Contact details of a trusted person — especially if there is a risk of relapse, seizures, overdose or suicide'] },
        { kind: 'warning', text: 'Not having a residence permit does not mean that a person with withdrawal, overdose, psychosis or suicide risk can be left without help. In an emergency, call 112 or go to urgência hospitalar. Administrative documents are dealt with later.' }
      ]
    },
    {
      id: 'how-to-access',
      title: 'How to get an appointment: 3 routes that work',
      content: [
        { kind: 'substeps', items: [
          { id: 'self-referral', title: '1. Contact a CRI/CAT yourself', content: [
            { kind: 'paragraph', text: 'The most direct route: find the nearest CRI/Equipa de Tratamento on sicad.pt or through your Centro de Saúde and call. Say: “Quero marcar uma consulta por dependência de álcool/drogas/jogo”. For the first contact, you do not need to prove a “severe stage”.' },
            { kind: 'checklist', items: ['Give your area of residence and concelho', 'Briefly state the problem: álcool, heroína/opioides, cocaína, cannabis, jogo online, apostas', 'Say whether there is withdrawal: tremores, suores, vómitos, insónia, convulsões', 'Mention if you are pregnant, or have HIV/hepatitis, epilepsy, diabetes or psychosis', 'Ask for a primeira consulta or triagem', 'If nobody answers the phone — ask the Centro de Saúde to give you the contact for your CRI'] }
          ]},
          { id: 'family-doctor', title: '2. Via a médico de família or Centro de Saúde', content: [
            { kind: 'paragraph', text: 'If you have a número de utente and a Centro de Saúde, ask for a referral to a consulta de comportamentos aditivos/dependências. This is useful if you also need tests, prescriptions, baixa médica or treatment for anxiety/depression.' }
          ]},
          { id: 'hospital-emergency', title: '3. Via urgência hospitalar if there are dangerous symptoms', content: [
            { kind: 'paragraph', text: 'In severe alcohol withdrawal, seizures, delirium tremens, overdose, severe intoxication, aggression, hallucinations or suicide risk, do not wait for a CRI. Call 112 or go to hospital urgência. After stabilisation, the hospital can refer you to a CRI.' }
          ]}
        ]}
      ]
    },
    {
      id: 'treatment-options',
      title: 'What happens during treatment',
      content: [
        { kind: 'paragraph', text: 'The first stage is triagem: a specialist clarifies substance use, health, mental symptoms, risks, family, work, debts and housing. A plano terapêutico is then drawn up. It may be light-touch — consultations every few weeks — or intensive, if there is a high risk.' },
        { kind: 'checklist', items: ['Medical assessment: blood pressure, weight, liver, infections, medicines, seizure risk', 'Psychiatry: anxiety, depression, bipolar disorder, psychosis, ADHD, suicidal thoughts', 'Psychology: motivational interviewing, prevenção da recaída, CBT, family sessions', 'Alcohol: outpatient reduction, anti-craving medicines where indicated, referral for detox', 'Opioids: methadone or buprenorphine, dosage and dispensing according to programme rules', 'Injecting use: harm reduction, testing, referral for HIV/hepatitis treatment', 'Gambling: blocks, financial plan, work on debts, exclusion from online/offline gambling, impulse-control therapy', 'Social support: documents, work, links with Segurança Social, family conflicts'] },
        { kind: 'warning', text: 'Do not stop alcohol or benzodiazepinas abruptly if use has been daily and long-term. Sudden withdrawal can cause seizures and delirium tremens. Medical assessment comes first.' }
      ]
    },
    {
      id: 'privacy-and-immigration',
      title: 'Confidentiality, work and immigration status',
      content: [
        { kind: 'paragraph', text: 'Addiction treatment is medical information. It is protected by confidencialidade rules and does not automatically notify AIMA, your employer, landlord or family. The exceptions are standard: immediate danger to yourself/others, minors, court cases.' },
        { kind: 'checklist', items: ['You can ask for atendimento in English; Russian interpreting in the SNS is not guaranteed', 'If language is critical — take a trusted interpreter, but remember privacy', 'Your employer does not receive a diagnosis without your consent', 'Baixa médica is issued through a médico, but the document for the employer usually does not disclose the diagnosis', 'If there are children, it is better to show that you are in treatment: this reduces risks in social situations', 'If there are debts due to gambling, also seek apoio social and advice on insolvência/negotiations with creditors', 'If you are afraid of the police because of drugs, still seek treatment: the Portuguese model is focused on health and redução de danos'] }
      ]
    },
    {
      id: 'crisis-plan',
      title: 'Crisis plan: when not to wait for an appointment',
      content: [
        { kind: 'paragraph', text: 'Write down in advance: the nearest urgência, the number of a trusted person, current medicines, allergies, exactly what was taken and when. In an overdose or loss of consciousness, this information saves time.' },
        { kind: 'checklist', items: ['112 — immediately in case of loss of consciousness, seizures, stopped breathing, overdose, injury', 'SNS 24: 808 24 24 24 — medical triage if the situation does not appear immediately life-threatening', 'Urgência hospitalar — severe withdrawal, delirium, hallucinations, significant intoxication', 'Linha Vida / SICAD contacts — for advice on addictions and routing to services', 'Do not leave a person alone after mixing alcohol, opioides, benzodiazepinas or GHB', 'In a gambling crisis: immediately restrict access to cards, MB WAY, online casinos and ask the bank to lower limits', 'After urgência, always book with a CRI: the hospital stabilises, but long-term treatment is built there'] },
        { kind: 'warning', text: 'If there are thoughts such as “better to die”, a suicide plan, a weapon, pills or jumping/a train — this is not “psychological weakness”, but a medical emergency. Call 112 or go to urgência.' }
      ]
    }
  ],
  costs: [
    { label: 'Consultations in a public-network CRI/CAT', amountEUR: 0, note: 'Usually free for SNS users/residents; check administrative registration on site.' },
    { label: 'Urgência hospitalar in an emergency', amountEUR: 0, note: 'Since 2022, most taxas moderadoras in the SNS have been abolished; emergency help where life is at risk is provided regardless of payment.' },
    { label: 'Private psychotherapy, if you go outside the SNS', amountEURMin: 40, amountEURMax: 80, note: 'Indicative per session in major cities; it does not replace a CRI for detox, methadone or severe withdrawal.' }
  ],
  sources: [
    { title: 'SICAD/ICAD — information on comportamentos aditivos e dependências and the response network', url: 'https://www.sicad.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'DGS — health standards and recommendations, álcool, saúde mental and respostas do SNS', url: 'https://www.dgs.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'SNS 24 — medical triage and access to urgência', url: 'https://www.sns24.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal — access to Serviço Nacional de Saúde and services for citizens', url: 'https://eportugal.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
