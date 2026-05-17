export default {
  editorialVoice: 'hackportugal',
  id: 'medical-malpractice-ers',
  categoryId: 'healthcare',
  title: 'Complaint about medical care: ERS, Ordem dos Médicos, court',
  tldr: 'If you receive poor medical care in Portugal, first record the facts through the Livro de Reclamações — the paper book at the clinic or the electronic version. ERS handles complaints about SNS institutions, private clinics and the social sector: access, quality, waiting times, bills and patients’ rights. Ordem dos Médicos is used for a disciplinary complaint against a doctor. ERS does not usually award compensation for harm: money is recovered through a claim, an insurer or the courts.',
  tags: ['ers', 'complaint', 'healthcare', 'court'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'choose-channel',
      title: 'Where to complain: ERS, Ordem dos Médicos or court',
      content: [
        { kind: 'paragraph', text: 'Portugal does not have one universal “medical ombudsman”. The right channel depends on the aim: to correct how the clinic operates, to have a doctor disciplined, or to obtain compensation.' },
        { kind: 'checklist', items: [
          'ERS — Entidade Reguladora da Saúde: complaints about hospitals, clínicas, centros de saúde, consultórios, laboratories, dental clinics, and private and public institutions.',
          'ERS is appropriate if patients’ rights have been breached: refusal to provide an appointment, poor organisation, an unclear bill, lack of information, delayed access, problems with consentimento informado, or a complaint about quality of care.',
          'Ordem dos Médicos — if the complaint is personally about a doctor: serious breach of deontologia, negligence, conflict of interest, inappropriate conduct, or breach of medical confidentiality.',
          'Ordem dos Enfermeiros / Ordem dos Farmacêuticos / Ordem dos Médicos Dentistas — if the complaint is about a nurse, pharmacist or dentist.',
          'Court — if you need compensation for harm to health, moral damage, loss of income, treatment expenses or recognition of medical negligence.',
          'Police / Ministério Público — if there are signs of a crime: falsificação, abandono, agressão, death or serious harm where criminal negligence is suspected.',
          'Livro de Reclamações — the basic entry point: the entry is automatically sent to the institution and the regulator, and you keep a copy.'
        ] },
        { kind: 'warning', text: 'ERS is not a court and does not usually award compensation to the patient. It can request explanations, open an administrative case, issue instructions to the institution and impose sanctions, but recovering money is a separate claim or court action.' }
      ]
    },
    {
      id: 'collect-evidence',
      title: 'Collect evidence before filing',
      content: [
        { kind: 'paragraph', text: 'A complaint without documents often turns into a “word against word” dispute. First request the medical records and keep all traces of communication.' },
        { kind: 'checklist', items: [
          'Identification of the institution: name, address, NIPC/NIF if available, department, date and time of the appointment.',
          'Names of professionals: médico, enfermeiro, técnico, receção; if there is no name — consulting room, shift, appointment number.',
          'Comprovativo de marcação, SMS, e-mail, episódio number, pulseira hospitalar, triagem Manchester, relatório de urgência.',
          'Fatura-recibo, orçamento, Multibanco/MB WAY payment proof, insurance documents.',
          'Test results, exames, prescription, relatório médico, discharge letter.',
          'Timeline: what happened, who said what, when symptoms or deterioration appeared.',
          'Photos, where appropriate: injury, burn, ward conditions, documents with dates.',
          'Witness contacts: accompanying person, interpreter, another patient — only with their consent.',
          'Request a copy of the processo clínico / ficha clínica. The patient has the right to access their medical data; the institution may require a written request and identification.',
          'If you do not speak Portuguese, attach a short description in Portuguese or English. ERS accepts complaints online, but it is better to write the facts in as structured a way as possible.'
        ] },
        { kind: 'warning', text: 'Do not publish doctors’ names, other patients’ diagnoses, photos of staff or audio recordings from the consulting room on social media without a legal assessment. This may create separate data protection and defamação risks.' }
      ]
    },
    {
      id: 'livro-reclamacoes',
      title: 'Livro de Reclamações: the fastest official record',
      content: [
        { kind: 'paragraph', text: 'Every institution providing services to consumers must have a Livro de Reclamações. In healthcare this works both for private clinics and for many public services through the relevant regulator.' },
        { kind: 'substeps', items: [
          {
            id: 'physical-book',
            title: 'Paper book at the clinic',
            content: [
              { kind: 'checklist', items: [
                'Ask: “Quero fazer uma reclamação no Livro de Reclamações”.',
                'Fill it in legibly: name, contact details, date, facts, what you are requesting.',
                'Write facts, not emotions: “at 10:30 they refused to see me despite a marcação”, “they did not provide the relatório”, “the bill does not match the orçamento”.',
                'Take the page copy. This is your main proof of filing.',
                'If they do not provide the book — state this in a separate complaint to ERS and, if necessary, call PSP/GNR to record the refusal.'
              ] }
            ]
          },
          {
            id: 'electronic-book',
            title: 'Electronic Livro de Reclamações',
            content: [
              { kind: 'paragraph', text: 'You can file online through the Livro de Reclamações Eletrónico. You choose the service provider, describe the facts and attach documents. The reply usually comes by e-mail.' },
              { kind: 'checklist', items: [
                'Suitable if you have already left the clinic or want to attach files.',
                'Keep the complaint number and filing confirmation.',
                'Do not duplicate the same complaint ten times: it is better to supplement it with new documents.',
                'If the institution is not found in the system, file directly with ERS through the complaints channel.'
              ] }
            ]
          }
        ] },
        { kind: 'warning', text: 'Livro de Reclamações is not a substitute for urgent medical care. If the condition is worsening, first call 112, SNS 24 on 808 24 24 24 or go to urgência, and complain afterwards.' }
      ]
    },
    {
      id: 'ers-complaint',
      title: 'Complaint to ERS: when and how',
      content: [
        { kind: 'paragraph', text: 'ERS regulates the healthcare sector: public, private and social providers. For an expat, this is the main channel if the problem relates to access, service quality, organisation, billing or patients’ rights.' },
        { kind: 'checklist', items: [
          'File through the ERS complaints form or through the Livro de Reclamações.',
          'State what you want: a response from the institution, correction of the bill, issuance of the relatório, an explanation of the refusal, a review of the procedure, a refund.',
          'Attach copies: fatura, relatório, e-mails, screenshots, photos, Livro de Reclamações number.',
          'Write the timeline by date: “01.04.2026 consulta”, “03.04.2026 deterioration”, “04.04.2026 urgência”.',
          'Separate medical opinion from facts: “I think the diagnosis is wrong” is better supported by a second opinion or a new relatório.',
          'If the complaint concerns discrimination on the basis of language, nationality, pregnancy or disability — state this directly.',
          'If the matter is urgent, write “urgent” and explain the risk: lack of medicine, refusal of follow-up, post-op complication.'
        ] },
        { kind: 'paragraph', text: 'After filing, ERS may forward the complaint to the institution, request a response, open an administrative review or use the information for supervision. Responses are not always quick: allow for weeks or months, especially if clinical explanations are required.' },
        { kind: 'warning', text: 'ERS does not replace a second medical opinion. If there is a health risk, go to another doctor, urgência or a private clínica, and then include the costs and documents in your claim.' }
      ]
    },
    {
      id: 'ordem-and-court',
      title: 'Ordem dos Médicos and court: when the next level is needed',
      content: [
        { kind: 'paragraph', text: 'If the problem is not only with the clinic but with the conduct of a specific doctor, file a disciplinary complaint with Ordem dos Médicos. If you need a financial outcome, prepare a claim and the court route.' },
        { kind: 'checklist', items: [
          'In Ordem dos Médicos, state the doctor’s full name, cédula profissional number if you know it, place of work, date, facts and documents.',
          'A disciplinary complaint may end in archiving, a warning or a disciplinary sanction, but not in payment of compensation to the patient.',
          'For compensation, first request the processo clínico and obtain an independent medical opinion from another specialist.',
          'Check who the defendant is: private clinic, médico, hospital público, insurer, Administração Regional de Saúde / Unidade Local de Saúde.',
          'As a general rule, civil liability for harm often depends on a 3-year limitation period from the time you became aware of the harm and the liable person under Código Civil art. 498; in some contractual or state-related situations, time limits and jurisdiction may differ.',
          'For a public hospital, the liability regime for the state and public organisations may apply; such cases are often more complex and require an advogado.',
          'If the damage is small, start with a written claim to the institution and insurer: sometimes the issue is resolved without court.',
          'If there is serious harm, disability, death, a surgical error or a birth injury — go straight to an advogado with experience in responsabilidade médica.'
        ] },
        { kind: 'warning', text: 'Do not wait for ERS to finish if a limitation period applies. A complaint to the regulator does not usually guarantee that civil deadlines stop running. For serious harm, obtain legal advice as early as possible.' }
      ]
    }
  ],
  costs: [
    { label: 'Complaint to ERS', amountEUR: 0, note: 'Filing through ERS or Livro de Reclamações is free.' },
    { label: 'Livro de Reclamações', amountEUR: 0, note: 'A paper or electronic complaint is free for the patient.' },
    { label: 'Disciplinary complaint to Ordem dos Médicos', amountEUR: 0, note: 'Filing a complaint usually does not require a fee; costs may arise for copies, translations and legal assistance.' },
    { label: 'Second medical opinion / expert relatório', amountEURMin: 150, amountEURMax: 1500, note: 'Depends on the speciality, volume of documents and urgency; a court expert report may cost more.' },
    { label: 'Court fees', amountEURMin: 102, amountEURMax: 612, note: 'Indicative taxa de justiça for typical civil claims depends on the claim value; Unidade de Conta in 2026 is used as €102.' }
  ],
  sources: [
    {
      title: 'ERS: complaints by healthcare users',
      url: 'https://www.ers.pt/en/users/complaints/',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ERS: ERS whistleblowing channel',
      url: 'https://www.ers.pt/pt/institucional/canal-de-denuncias-da-ers/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Ordem dos Médicos: disciplinary complaint and medical deontology',
      url: 'https://ordemdosmedicos.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portuguese Código Civil, art. 498 — limitation period for civil liability',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1966-34509075',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
