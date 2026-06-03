export default {
  editorialVoice: 'hackportugal',
  id: 'om-medicos-foreign-doc',
  categoryId: 'work_business',
  title: 'Ordem dos Médicos: registration of a foreign doctor in Portugal',
  tldr: 'To work as a doctor in Portugal, a foreign diploma alone is not enough. The route depends on where the qualification was obtained: for qualifications from outside the EU/EEA/Switzerland, academic recognition of Medicina (Decreto-Lei 66/2018) through DGES/a Portuguese university is usually needed first, while qualifications from the EU/EEA/Switzerland follow a separate professional recognition regime (Lei 9/2009, Directive 2005/36/EC) handled directly by the Ordem dos Médicos. Then comes the in-person submission to OM: the basic registration fee is about €385. OM checks documents and Good Standing; if the diploma was not taught in Portuguese, you must prove the language — either pass the Prova de Comunicação Médica or show a B2-level Portuguese certificate. For full autonomous practice, experience matters: without at least 2 years of medical practice after the diploma, you may be directed to formação geral/a practical route before autonomy.',
  tags: ['doctors', 'medical association', 'dges', 'work'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'scope',
      title: 'What registration with the Ordem dos Médicos gives you',
      content: [
        { kind: 'paragraph', text: 'Ordem dos Médicos is the mandatory professional body for doctors in Portugal. Medical practice in Portugal, including telemedicine for patients in the Portuguese system, requires an active inscrição with OM. For cross-border telemedicine from Portugal, also check separately the law of the patient or employer country, professional indemnity insurance and Portuguese rules.' },
        { kind: 'paragraph', text: 'The route depends on where the qualification was obtained. For diplomas from outside the EU/EEA/Switzerland the process has two blocks: academic recognition of the diploma through DGES/university and professional registration with OM. For qualifications from the EU/EEA/Switzerland a separate professional recognition regime applies directly through OM (see below) — ordinary academic reconhecimento específico through DGES is not required in that case. Either way, recognition of the diploma by itself does not give the right to practise — only an active inscrição with OM does.' },
        { kind: 'checklist', items: ['Suitable for doctors with a Medicina diploma obtained outside Portugal', 'A NIF and a valid identity document are required', 'OM registration is a professional authorisation, not a visa or right to work: non-EU nationals separately need a residence permit/visa/right to work', 'OM accepts documents in person at the regional section', 'The basic registration fee is about €385', 'Language: if the diploma was not taught in Portuguese, be ready to prove it (Prova de Comunicação Médica or a B2-level certificate)'] }
      ]
    },
    {
      id: 'recognition-dges',
      title: 'Step 1. Recognise your medical diploma through DGES',
      content: [
        { kind: 'paragraph', text: 'This step is for doctors with a diploma from outside the EU/EEA/Switzerland. The standard route starts with academic reconhecimento under Decreto-Lei 66/2018; for Medicina, reconhecimento específico is most often required. A Portuguese university with a medical faculty compares your programme with the Mestrado Integrado em Medicina. If the qualification was obtained in the EU/EEA/Switzerland, you do not need this DGES step — go to professional recognition through OM under Lei 9/2009 (see the EU/EEA/Switzerland note below).' },
        { kind: 'paragraph', text: 'Until 31 December 2026 an exceptional, temporary regime is in force: diplomas from certain foreign universities can be recognised at the level of a Portuguese Mestrado em Medicina through a faster procedure. It is aimed at limited contingents of doctors for the SNS, does not cover every university and ends at the close of 2026, so check whether it applies to you.' },
        { kind: 'checklist', items: ['Choose the type of recognition on the DGES portal: most often reconhecimento específico', 'Submit the diploma, transcript with hours/ECTS, course syllabi and grades', 'Obtain apostila/legalização if the document was issued outside the EU and there is no exemption', 'Prepare a translation into Portuguese if the documents are not in PT/EN/ES/FR, according to the university requirements', 'Pay the university fee: the amount depends on the university, often several hundred euros', 'Monitor the university email: they may request additional syllabi or an interview', 'Obtain the certidão de reconhecimento — this is exactly what OM will later request'] },
        { kind: 'warning', text: 'Do not apply to OM with only the original foreign diploma. Without Portuguese recognition of the Medicina degree, the file is usually not considered ready for inscrição.' }
      ]
    },
    {
      id: 'documents',
      title: 'Step 2. Prepare the file for the Ordem dos Médicos',
      content: [
        { kind: 'paragraph', text: 'OM requires an in-person submission and checks not only the diploma, but also professional fitness: identity, absence of disciplinary restrictions, Good Standing and professional experience.' },
        { kind: 'checklist', items: ['Documento de identificação: passport, Cartão de Cidadão or residence permit', 'NIF', 'Certidão de reconhecimento do grau académico em Medicina in Portugal', 'Original diploma and transcript — it is better to have a translation', 'Certificado de Registo Criminal from your country of nationality/origin and countries of recent residence; if you already live in Portugal, OM may also request a Portuguese registo criminal. A document no older than 3 months is often required', 'Certificate of Good Standing / professional status from the medical association of the country where you were registered. If there is no medical chamber or you were never registered, ask OM in advance what replaces it: a certificate from the competent authority, proof of no disciplinary sanctions, or an official letter stating it cannot be issued', 'Proof of experience: employment contracts, hospital certificates, licence, payroll/social contributions, description of duties', 'CV in Portuguese or English', 'Photograph and completed OM form', 'Proof of address and contacts in Portugal'] },
        { kind: 'warning', text: 'Good Standing certificates and criminal record certificates usually have a short validity period. Do not order them many months before your OM appointment: by the time of submission, you may be asked for new ones.' }
      ]
    },
    {
      id: 'exam-language',
      title: 'Step 3. Prove the language: Prova de Comunicação Médica or B2',
      content: [
        { kind: 'paragraph', text: 'If your medical training was not in Portuguese, OM requires you to prove your command of the language. This is not an exam on all of medicine, but a check of your ability to communicate safely with patients and colleagues in a Portuguese clinical environment. You can prove it in two ways: pass the Prova de Comunicação Médica (about €300, held monthly on a rotating basis in Porto, Coimbra and Lisbon) or present a B2-level Portuguese certificate. Doctors who trained in Portuguese are exempt from this requirement.' },
        { kind: 'checklist', items: ['Prepare Portuguese to at least the level of a confident patient consultation', 'Practise history-taking, complaints, allergies, medicines, informed consent', 'Be able to explain a diagnosis, treatment plan and risks in simple Portuguese', 'Review SNS terms: centro de saúde, urgência, referenciação, receita, baixa médica', 'Confirm which language route fits you: the prova de comunicação or a B2 certificate; if you trained in Portuguese, the requirement may not apply', 'Do not expect to work only in English: for the licence, communication safety in Portugal matters'] },
        { kind: 'warning', text: 'Having a diploma, IFICI/NHR status, a job offer or a contract with a clinic does not remove OM requirements for communication and professional registration.' }
      ]
    },
    {
      id: 'two-year-rule',
      title: 'Step 4. Check the 2-year practice rule',
      content: [
        { kind: 'paragraph', text: 'The key OM filter is autonomy of practice. If, after completing your medical diploma, you have at least 2 years of real medical practice, this helps you obtain registration as a médico with autonomy. Experience must be proven with documents: position, dates, full-time/part-time, clinical duties, employer signature and stamp.' },
        { kind: 'paragraph', text: 'If you do not have 2 years of practice or the documents are weak, OM may not grant full autonomous inscrição immediately. A possible route is completing formação geral / an equivalent practical period in Portugal before obtaining autonomy. This affects the ability to see patients independently and sign acts.' },
        { kind: 'checklist', items: ['Count experience after the date you obtained the Medicina diploma, not the years of study', 'Internship/residency may count if it was clinical work as a doctor', 'Volunteering without doctor status is usually weak evidence', 'The certificate must be specific: speciality/department, dates, workload, clinical duties', 'If you worked in several countries, obtain Good Standing and experience certificates from each one', 'EU/EEA/Switzerland: if the basic medical qualification was obtained in the EU/EEA/Switzerland and complies with Directive 2005/36/EC, the procedure goes as professional recognition through OM (with documents on conformity, good standing and the right to practise), rather than as ordinary reconhecimento específico through DGES'] }
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
    { title: 'Decreto-Lei 66/2018 — regime for recognition of foreign academic degrees', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/66-2018-116068879', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Ordem dos Médicos — recognition of professional qualifications (EU/EEA, Lei 9/2009)', url: 'https://ordemdosmedicos.pt/reconhecimento-das-qualificacoes-profissionais/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-31' },
    { title: 'Ordem dos Médicos — Prova de Comunicação Médica', url: 'https://ordemdosmedicos.pt/area-medica/inscricoes/prova-de-comunicacao', kind: 'official', language: 'pt', lastRetrieved: '2026-05-31' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
