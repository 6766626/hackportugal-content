export default {
  editorialVoice: 'hackportugal',
  id: 'om-medicos-foreign-doc',
  categoryId: 'work_business',
  title: 'Ordem dos Médicos: registration of a foreign doctor in Portugal',
  tldr: 'To work as a doctor in Portugal, a foreign diploma is not enough: Clarify: "For diplomas/qualifications from outside the EU/EEA/Switzerland, academic recognition in Medicina under DL 66/2018 through DGES/a Portuguese university is usually required first. For EU/EEA/Swiss medical qualifications, a separate professional recognition regime under Lei 9/2009/Directive 2005/36/EC may apply — check the OM requirements for this category." The basic application fee is €385. OM checks documents, Good Standing and, as a rule, requires the Prova de Comunicação Médica. For full autonomous registration, experience matters: if you do not have at least 2 years of medical practice after the diploma, you may be directed to formação geral/a practical route before autonomy.',
  tags: ['doctors', 'medical association', 'dges', 'work'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'scope',
      title: 'What registration with the Ordem dos Médicos gives you',
      content: [
        { kind: 'paragraph', text: 'Ordem dos Médicos is the mandatory professional body for doctors in Portugal. Clarify: "For medical practice in Portugal, including telemedicina for patients/providers in the Portuguese system, an active inscrição with OM is required. For cross-border telemedicine from Portugal, also check separately the law of the patient/employer country, malpractice insurance and Portuguese rules."' },
        { kind: 'paragraph', text: 'The process consists of two different blocks: academic recognition of the diploma through DGES/university and professional registration with OM. Recognition of the diploma by itself does not give the right to practise.' },
        { kind: 'checklist', items: ['Suitable for doctors with a Medicina diploma obtained outside Portugal', 'A NIF and a valid identity document are required', 'For non-EU applicants, legal status in Portugal or a basis for work is usually needed', 'OM accepts documents in person at the regional section', 'The basic application costs €385', 'Portuguese is practically mandatory: patient communication is checked separately'] }
      ]
    },
    {
      id: 'recognition-dges',
      title: 'Step 1. Recognise your medical diploma through DGES',
      content: [
        { kind: 'paragraph', text: 'Replace with: "For doctors with a diploma obtained outside the EU/EEA/Switzerland, the standard route usually starts with academic reconhecimento under Decreto-Lei 66/2018; for Medicina, reconhecimento específico is most often required. If the qualification was obtained in the EU/EEA/Switzerland, first check the professional/automatic recognition route under Lei 9/2009 with OM".: a Portuguese university with a medical faculty compares your programme with the Mestrado Integrado em Medicina.' },
        { kind: 'checklist', items: ['Choose the type of recognition on the DGES portal: most often reconhecimento específico', 'Submit the diploma, transcript with hours/ECTS, course syllabi and grades', 'Obtain apostila/legalização if the document was issued outside the EU and there is no exemption', 'Prepare a translation into Portuguese if the documents are not in PT/EN/ES/FR, according to the university requirements', 'Pay the university fee: the amount depends on the university, often several hundred euros', 'Monitor the university email: they may request additional syllabi or an interview', 'Obtain the certidão de reconhecimento — this is exactly what OM will later request'] },
        { kind: 'warning', text: 'Do not apply to OM with only the original foreign diploma. Without Portuguese recognition of the Medicina degree, the file is usually not considered ready for inscrição.' }
      ]
    },
    {
      id: 'documents',
      title: 'Step 2. Prepare the file for the Ordem dos Médicos',
      content: [
        { kind: 'paragraph', text: 'OM requires an in-person submission and checks not only the diploma, but also professional fitness: identity, absence of disciplinary restrictions, Good Standing and professional experience.' },
        { kind: 'checklist', items: ['Documento de identificação: passport, Cartão de Cidadão or residence permit', 'NIF', 'Certidão de reconhecimento do grau académico em Medicina in Portugal', 'Original diploma and transcript — it is better to have a translation', 'Certificado de Registo Criminal from the country/countries of residence, valid on the application date', 'Certificate of Good Standing / professional status from the medical association of the country where you were registered', 'Proof of experience: employment contracts, hospital certificates, licence, payroll/social contributions, description of duties', 'CV in Portuguese or English', 'Photograph and completed OM form', 'Proof of address and contacts in Portugal'] },
        { kind: 'warning', text: 'Good Standing certificates and criminal record certificates usually have a short validity period. Do not order them many months before your OM appointment: by the time of submission, you may be asked for new ones.' }
      ]
    },
    {
      id: 'exam-language',
      title: 'Step 3. Pass the Prova de Comunicação Médica',
      content: [
        { kind: 'paragraph', text: 'For foreign doctors, OM applies an assessment of medical communication — Prova de Comunicação Médica. This is not an exam on all of medicine as at university, but a check of your ability to communicate safely with patients and colleagues in a Portuguese clinical environment.' },
        { kind: 'checklist', items: ['Prepare Portuguese to at least the level of a confident patient consultation', 'Practise history-taking, complaints, allergies, medicines, informed consent', 'Be able to explain a diagnosis, treatment plan and risks in simple Portuguese', 'Review SNS terms: centro de saúde, urgência, referenciação, receita, baixa médica', 'Check whether you personally need the prova: OM decides based on the file, country of training and professional experience', 'Do not expect to work only in English: for the licence, communication safety in Portugal matters'] },
        { kind: 'warning', text: 'Having a diploma, IFICI/NHR status, a job offer or a contract with a clinic does not remove OM requirements for communication and professional registration.' }
      ]
    },
    {
      id: 'two-year-rule',
      title: 'Step 4. Check the 2-year practice rule',
      content: [
        { kind: 'paragraph', text: 'The key OM filter is autonomy of practice. If, after completing your medical diploma, you have at least 2 years of real medical practice, this helps you obtain registration as a médico with autonomy. Experience must be proven with documents: position, dates, full-time/part-time, clinical duties, employer signature and stamp.' },
        { kind: 'paragraph', text: 'If you do not have 2 years of practice or the documents are weak, OM may not grant full autonomous inscrição immediately. A possible route is completing formação geral / an equivalent practical period in Portugal before obtaining autonomy. This affects the ability to see patients independently and sign acts.' },
        { kind: 'checklist', items: ['Count experience after the date you obtained the Medicina diploma, not the years of study', 'Internship/residency may count if it was clinical work as a doctor', 'Volunteering without doctor status is usually weak evidence', 'The certificate must be specific: speciality/department, dates, workload, clinical duties', 'If you worked in several countries, obtain Good Standing and experience certificates from each one', 'Move into a separate block at the start of the guide: "EU/EEA/Swiss route: if the basic medical qualification was obtained in the EU/EEA/Switzerland and complies with Directive 2005/36/EC, the procedure may proceed as professional recognition through OM/the competent authority, with documents on conformity, good standing and the right to practise, rather than as ordinary DGES reconhecimento específico".'] }
      ]
    },
    {
      id: 'submit-in-person',
      title: 'Step 5. Apply in person and wait for the decision',
      content: [
        { kind: 'paragraph', text: 'Submission is done in person at the regional OM section: Norte, Centro, Sul, Açores or Madeira — usually according to your place of residence/work. In practice, it is better to write an email in advance to the relevant section, send scans for a preliminary check and ask for a slot.' },
        { kind: 'checklist', items: ['Bring originals and copies of all documents', 'Pay the abertura do processo/inscrição fee — €385', 'Keep the comprovativo de pagamento', 'Confirm when the Prova de Comunicação Médica will take place and whether you need to provide additional documents', 'After approval, receive your número de cédula profissional', 'Check the inscrição status on the OM website before starting work', 'Inform the employer only after the registration has actually been activated'] },
        { kind: 'warning', text: 'Do not start clinical acts before obtaining an active cédula profissional. Working as a doctor without OM registration is a risk for you, the employer, responsabilidade civil insurance and future applications in Portugal.' }
      ]
    }
  ],
  costs: [
    { label: 'Application/opening of the process with the Ordem dos Médicos', amountEUR: 385, note: 'Fee for a foreign doctor application; check the current valor na secção regional before payment.' },
    { label: 'Diploma recognition through a university/DGES', amountEURMin: 300, amountEURMax: 700, note: 'The fee is set by the chosen university; for Medicina, reconhecimento específico is often required.' },
    { label: 'Translations, apostila/legalização, notarised copies', amountEURMin: 100, amountEURMax: 400, note: 'Depends on the country that issued the documents and the number of pages in the study programme.' }
  ],
  sources: [
    { title: 'Ordem dos Médicos Sul — FAQ for registration of foreign doctors', url: 'https://www.omsul.pt/Portals/0/MQ-FAQS-ENG-OM-Medicos-Estrangeiros.pdf', kind: 'official', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'Ordem dos Médicos — official website and regional sections', url: 'https://ordemdosmedicos.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'DGES — reconhecimento de graus e diplomas estrangeiros', url: 'https://www.dges.gov.pt/pt/pagina/reconhecimento', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 66/2018 — regime for recognition of foreign academic degrees', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/66-2018-116068879', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}
