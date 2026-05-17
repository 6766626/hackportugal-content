export default {
  editorialVoice: 'hackportugal',
  id: 'om-medicos-foreign-doc',
  categoryId: 'work_business',
  title: 'Ordem dos Médicos: registration of a foreign doctor in Portugal',
  tldr: 'To work as a doctor in Portugal, a foreign diploma is not enough: first you need recognition of the Medicina degree through DGES/a Portuguese medical faculty under DL 66/2018, then an in-person application to Ordem dos Médicos. The basic application fee is €385. OM checks the documents, Good Standing and, as a rule, requires the Prova de Comunicação Médica. For full autonomous registration, experience matters: if after graduation there are not at least 2 years of medical practice, you may be directed to formação geral/a practical route before autonomy.',
  tags: ['doctors', 'ordem', 'dges', 'work'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'scope',
      title: 'What registration with Ordem dos Médicos gives you',
      content: [
        { kind: 'paragraph', text: 'Ordem dos Médicos is the mandatory professional body for doctors in Portugal. Without active inscrição in OM, you cannot legally work as a médico in SNS, a private clinic, a hospital, telemedicina or sign medical documents as a doctor.' },
        { kind: 'paragraph', text: 'The process consists of two different blocks: academic recognition of the diploma through DGES/university and professional registration with OM. Recognition of the diploma on its own does not give the right to practise.' },
        { kind: 'checklist', items: ['Suitable for doctors with a Medicina diploma obtained outside Portugal', 'A NIF and a valid identity document are needed', 'For non-EU nationals, legal status in Portugal or a basis for work is usually needed', 'OM accepts documents in person at the regional section', 'The basic application costs €385', 'Portuguese is practically mandatory: patient communication is checked separately'] }
      ]
    },
    {
      id: 'recognition-dges',
      title: 'Step 1. Recognise the medical diploma through DGES',
      content: [
        { kind: 'paragraph', text: 'A foreign medical diploma first goes through reconhecimento académico under Decreto-Lei 66/2018. For Medicina, reconhecimento específico is usually needed: a Portuguese university with a medical faculty compares your programme with the Mestrado Integrado em Medicina.' },
        { kind: 'checklist', items: ['Choose the type of recognition on the DGES portal: most often reconhecimento específico', 'Submit the diploma, transcript with hours/ECTS, course syllabuses and grades', 'Obtain an apostila/legalização if the document was issued outside the EU and there is no exemption', 'Prepare a translation into Portuguese if the documents are not in PT/EN/ES/FR, as required by the university', 'Pay the university fee: the amount depends on the institution, often several hundred euros', 'Monitor the university email: they may request additional syllabi or an interview', 'Obtain the certidão de reconhecimento — this is exactly what OM will later ask for'] },
        { kind: 'warning', text: 'Do not apply to OM with only the original foreign diploma. Without Portuguese recognition of the Medicina degree, the file is usually not treated as ready for inscrição.' }
      ]
    },
    {
      id: 'documents',
      title: 'Step 2. Prepare the file for Ordem dos Médicos',
      content: [
        { kind: 'paragraph', text: 'OM requires an in-person application and checks not only the diploma, but also professional suitability: identity, absence of disciplinary restrictions, Good Standing and experience.' },
        { kind: 'checklist', items: ['Documento de identificação: passport, Cartão de Cidadão or residence permit', 'NIF', 'Certidão de reconhecimento do grau académico em Medicina in Portugal', 'Original diploma and transcript — it is better to have them with a translation', 'Certificado de Registo Criminal from the country/countries of residence, valid on the date of application', 'Certificate of Good Standing / professional status from the medical council of the country where you were registered', 'Proof of experience: employment contracts, hospital certificates, licence, payroll/social contributions, description of duties', 'CV in Portuguese or English', 'Photograph and completed OM form', 'Proof of address and contact details in Portugal'] },
        { kind: 'warning', text: 'Good Standing certificates and criminal records usually have a short validity period. Do not order them many months before your OM appointment: by the time you apply, you may be asked for new ones.' }
      ]
    },
    {
      id: 'exam-language',
      title: 'Step 3. Pass the Prova de Comunicação Médica',
      content: [
        { kind: 'paragraph', text: 'For foreign doctors, OM applies a medical communication assessment — Prova de Comunicação Médica. This is not an exam in all of medicine like at university, but a check of the ability to communicate safely with a patient and colleagues in a Portuguese clinical setting.' },
        { kind: 'checklist', items: ['Prepare Portuguese at least to the level of a confident patient consultation', 'Practise history taking, symptoms, allergies, medicines, informed consent', 'Be able to explain a diagnosis, treatment plan and risks in simple Portuguese', 'Review SNS terms: centro de saúde, urgência, referenciação, receita, baixa médica', 'Check whether the prova is required specifically for you: OM decides based on the file, country of training and professional experience', 'Do not expect to work only in English: for the licence, safety of communication in Portugal matters'] },
        { kind: 'warning', text: 'Having a diploma, IFICI/NHR status, a job offer or a contract with a clinic does not remove OM requirements for communication and professional registration.' }
      ]
    },
    {
      id: 'two-year-rule',
      title: 'Step 4. Check the 2-year practice rule',
      content: [
        { kind: 'paragraph', text: 'OM’s key filter is autonomy of practice. If after completing the medical diploma you have at least 2 years of real medical practice, this helps you obtain registration as a médico with autonomy. Experience must be proven with documents: position, dates, full-time/part-time, clinical duties, employer signature and stamp.' },
        { kind: 'paragraph', text: 'If you do not have 2 years of practice or the documents are weak, OM may not grant full autonomous inscrição immediately. A possible route is completing formação geral / an equivalent practical period in Portugal before obtaining autonomy. This affects the ability to see patients independently and sign acts.' },
        { kind: 'checklist', items: ['Count experience after the date you obtained the Medicina diploma, not the years of study', 'Internship/residency may count if it was clinical work as a doctor', 'Volunteering without doctor status is usually weak evidence', 'The certificate must be specific: specialty/department, dates, workload, clinical duties', 'If you worked in several countries, obtain Good Standing and experience certificates from each one', 'Separate recognition rules may apply to EU/EEA qualifications, but OM still checks registration and good standing'] }
      ]
    },
    {
      id: 'submit-in-person',
      title: 'Step 5. Apply in person and wait for the decision',
      content: [
        { kind: 'paragraph', text: 'The application is made in person at the OM regional section: Norte, Centro, Sul, Açores or Madeira — usually according to the place of residence/work. In practice, it is better to email the relevant section in advance, send scans for a preliminary check and request a slot.' },
        { kind: 'checklist', items: ['Bring originals and copies of all documents', 'Pay the abertura do processo/inscrição fee — €385', 'Keep the comprovativo de pagamento', 'Confirm when the Prova de Comunicação Médica will take place and whether any documents still need to be provided', 'After approval, obtain the número de cédula profissional', 'Check the inscrição status on the OM website before starting work', 'Inform the employer only after the registration has actually been activated'] },
        { kind: 'warning', text: 'Do not start clinical acts before receiving an active cédula profissional. Working as a doctor without registration with OM is a risk for you, the employer, responsabilidade civil insurance and future applications in Portugal.' }
      ]
    }
  ],
  costs: [
    { label: 'Application/opening of the process with Ordem dos Médicos', amountEUR: 385, note: 'Foreign doctor application fee; check the current valor na secção regional before paying.' },
    { label: 'Diploma recognition through university/DGES', amountEURMin: 300, amountEURMax: 700, note: 'The tariff is set by the chosen university; for Medicina, reconhecimento específico is often required.' },
    { label: 'Translations, apostila/legalização, notarised copies', amountEURMin: 100, amountEURMax: 400, note: 'Depends on the country where the documents were issued and the number of pages in the study programme.' }
  ],
  sources: [
    { title: 'Ordem dos Médicos Sul — FAQ for foreign doctors registration', url: 'https://www.omsul.pt/Portals/0/MQ-FAQS-ENG-OM-Medicos-Estrangeiros.pdf', kind: 'official', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'Ordem dos Médicos — official website and regional sections', url: 'https://ordemdosmedicos.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'DGES — reconhecimento de graus e diplomas estrangeiros', url: 'https://www.dges.gov.pt/pt/pagina/reconhecimento', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 66/2018 — regime de reconhecimento de graus académicos estrangeiros', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/66-2018-116068879', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
