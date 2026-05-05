export default {
  editorialVoice: 'hackportugal',
  id: 'estatuto-doente-cronico',
  categoryId: 'healthcare',
  title: 'Estatuto de Doente Crónico — chronic patient status',
  tldr: 'In Portugal there is no single "chronic patient card" for all situations: the status is recorded by an SNS doctor, usually the médico de família, in your clinical record and prescriptions. It is needed for isenção de taxas moderadoras in the remaining paid SNS cases and for special comparticipação of medicines: under protocols for diabetes, oncology, asthma, hypertension and others, some medicines can be 100% covered by the state. In 2026, taxas moderadoras are almost abolished, but urgência without a referral can still cost €14–18.',
  tags: ['sns', 'chronic', 'medicines', 'patient'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'What this means in practice',
      content: [
        { kind: 'paragraph', text: 'Estatuto de Doente Crónico is not a separate plastic document and not a universal benefit. In practice it is medical confirmation of a chronic disease within the SNS system: a diagnosis, long-term treatment, active prescriptions and, where applicable, entitlement to special comparticipação of medicines or isenção de taxas moderadoras.' },
        { kind: 'paragraph', text: 'Most often this concerns diabetes mellitus, hipertensão arterial, asma/DPOC, oncological diseases, rheumatic, neurological and cardiovascular diseases, chronic kidney failure and other conditions where treatment lasts for months or for life.' },
        { kind: 'warning', text: 'Not every chronic disease automatically gives 100% payment for all medicines. The state only pays under a special regime for the medicines, devices or active substances that are included in a specific protocolo/Despacho/Portaria and correctly prescribed by the doctor.' }
      ]
    },
    {
      id: 'benefits',
      title: 'What the status provides in 2026',
      content: [
        { kind: 'checklist', items: [
          'A chronic disease note in the SNS processo clínico — the doctor, nurse and pharmacist can see it via the electronic prescription.',
          'Receita sem papel for long-term treatment: the doctor can issue repeat prescriptions so that you do not have to go every month just for a renewal.',
          'Special comparticipação for medicines: the standard levels in Portugal are 90%, 69%, 37% or 15%, but under certain protocols it can be 100%.',
          'For diabetes: insulin is usually fully covered; needles, lancets and syringes for self-monitoring may have 100% coverage, test strips — under a separate regime.',
          'For oncological diseases: many medicines are dispensed via the SNS hospital pharmacy without payment by the patient, if the treatment is prescribed by a public hospital.',
          'For asthma, hypertension and cardiovascular diseases: coverage depends on the specific medicine and clinical protocol, not always 100%.',
          'Isenção de taxas moderadoras in the cases where they are still charged, if your category falls within SNS rules or a separate exemption is granted.',
          'Easier access to follow-up: consultas de vigilância, tests, prescription renewal, vaccination as indicated.'
        ] },
        { kind: 'paragraph', text: 'Since 2022, taxas moderadoras in the SNS have been almost abolished. In 2026 they mostly remain for urgência hospitalar without a referral from SNS 24, INEM, the médico de família or without subsequent hospitalisation. As a guide: Serviço de Urgência Básica — €14, Médico-Cirúrgica — €16, Polivalente — €18, plus possible exames.' }
      ]
    },
    {
      id: 'how-to-get',
      title: 'How to arrange it via the SNS',
      content: [
        { kind: 'substeps', items: [
          { id: 'prepare-documents', title: '1. Prepare documents and medical history', content: [
            { kind: 'checklist', items: [
              'Número de utente SNS.',
              'Documento de identificação: residence permit, Cartão de Cidadão, passport with visa or CRUE for EU citizens.',
              'NIF — often required for administrative records and prescriptions.',
              'A list of current medicines: name, dosage, how many times per day.',
              'Discharge summaries, tests, and reports from a specialist from Portugal or another country.',
              'If documents are not in Portuguese/English — a brief translation of the diagnosis and treatment plan.',
              'Photos of medicine boxes — helps to select Portuguese equivalents by active substance.'
            ] }
          ]},
          { id: 'book-appointment', title: '2. Book an appointment with the médico de família', content: [
            { kind: 'paragraph', text: 'The main route is a consulta at your Centro de Saúde / USF / UCSP. If a médico de família has not yet been assigned, ask for a consulta aberta or consulta de recurso. A private doctor can provide a relatório, but SNS benefits usually have to be confirmed and entered by an SNS doctor.' }
          ]},
          { id: 'medical-declaration', title: '3. Obtain a declaração médica and update prescriptions', content: [
            { kind: 'paragraph', text: 'Ask the doctor to record the diagnosis as chronic, indicate the need for long-term treatment and issue a Receita sem papel with the correct comparticipação regime. For some diseases the doctor selects a special regime in the e-prescribing system; without this the pharmacy will apply the standard discount rather than the preferential one.' }
          ]},
          { id: 'confirm-exemption', title: '4. Check the isenção in the administrative record', content: [
            { kind: 'paragraph', text: 'After the consultation, go to the Centro de Saúde secretaria and ask whether the isenção de taxas moderadoras is active in the Registo Nacional de Utentes. Sometimes the medical flag and the administrative exemption are separate actions.' }
          ]}
        ] }
      ]
    },
    {
      id: 'pharmacy',
      title: 'How to buy medicines with the benefit 💊',
      content: [
        { kind: 'paragraph', text: 'At the pharmacy present the prescription/SMS number, Cartão de Cidadão or a document with the número de utente. The discount is applied automatically if the prescription is issued as comparticipado and the correct regime is selected.' },
        { kind: 'checklist', items: [
          'Check the receipt: it shows the preço total, comparticipação do Estado and valor a pagar.',
          'If a medicine should be at 100% but the pharmacy asks for payment, first check whether the standard regime was issued instead of the special one.',
          'Ask the médico de família to prescribe by active substance if genéricos suit you — it is often cheaper and more available.',
          'Do not change the brand of insulin, inhaler or oncological medicine without consulting your doctor.',
          'If the medicine is not in stock, the pharmacy can order it or offer an equivalent; for some hospitalar medicines you need to go to the farmácia hospitalar.',
          'Keep faturas with your NIF: part of medical expenses goes into e-Fatura and is accounted for in IRS.'
        ] },
        { kind: 'warning', text: 'The benefit is not reimbursed automatically "retroactively". If a prescription was issued incorrectly and you paid, you usually need to ask the doctor to reissue the prescription before purchase, not after.' }
      ]
    },
    {
      id: 'common-cases',
      title: 'Common cases: diabetes, asthma, hypertension, oncology',
      content: [
        { kind: 'checklist', items: [
          'Diabetes: ask to set up insulin/tablets, self-monitoring materials, a plan for HbA1c tests and diabetes nursing consultations.',
          'Hypertension: bring home blood pressure readings for 1–2 weeks; the doctor will adjust the regimen and issue long-term prescriptions.',
          'Asthma/COPD: it is important to show previous inhalers and spirometry results, if available; different inhalers have different comparticipação.',
          'Oncology: treatment is usually led by an SNS hospital; prescriptions and dispensing of medicines often go through the hospital pharmacy rather than an ordinary pharmacy.',
          'Chronic pain/rheumatology: some medicines require a specialist and a hospitalar prescription; the médico de família can manage basic medicines, but not everything.',
          'Chronic psychiatric conditions: antidepressants, antipsychotics and mood stabilisers have their own levels of comparticipação; 100% is not guaranteed.'
        ] },
        { kind: 'paragraph', text: 'If you arrived in Portugal with an already established diagnosis, do not wait until your medicines run out. Book at the Centro de Saúde as soon as you obtain your número de utente: selecting an equivalent and confirming the benefit can take several weeks.' }
      ]
    },
    {
      id: 'problems',
      title: 'If you were refused or nothing is active',
      content: [
        { kind: 'checklist', items: [
          'Ask for a written explanation: is the refusal medical or administrative.',
          'Check that you have an active número de utente and the correct address at the Centro de Saúde.',
          'Ask the médico de família to issue a declaração médica de doença crónica with the diagnosis and ongoing treatment.',
          'If you do not have a family doctor, ask for a consulta aberta and registration on the lista de utentes sem médico.',
          'If the issue is with a medicine, ask the doctor for the comparticipação regime code and whether the medicine is on the Infarmed list.',
          'Call SNS 24: 808 24 24 24 — they can advise on the pathway and log your request.',
          'For a systemic problem, submit a reclamação in the Livro de Reclamações or via the hospital/ACES gabinete do utente.'
        ] },
        { kind: 'warning', text: 'Atestado Médico de Incapacidade Multiuso with incapacidade ≥60% is a separate procedure via a junta médica and is not the same as the Estatuto de Doente Crónico. It may grant additional tax and medical benefits, but it is arranged separately.' }
      ]
    }
  ],
  costs: [
    { label: 'Setting up the status in the SNS', amountEUR: 0, note: 'The consulta and administrative registration in the SNS are usually without taxas moderadoras.' },
    { label: 'Urgência Básica without referral', amountEUR: 14, note: 'Only if there is no SNS/INEM/doctor referral and no subsequent hospitalisation; with isenção — €0.' },
    { label: 'Urgência Médico-Cirúrgica without referral', amountEUR: 16, note: 'Indicative 2026 taxas moderadoras for non-exempt users.' },
    { label: 'Urgência Polivalente without referral', amountEUR: 18, note: 'Indicative 2026 taxas moderadoras for non-exempt users.' }
  ],
  sources: [
    {
      title: 'SNS 24 — exemption from taxas moderadoras',
      url: 'https://www.sns24.gov.pt/guia/isencao-de-taxas-moderadoras/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'SNS 24 — medicines and comparticipação',
      url: 'https://www.sns24.gov.pt/tema/medicamentos/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DGS — health programmes and chronic diseases',
      url: 'https://www.dgs.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'INFARMED — exceptional comparticipação regimes',
      url: 'https://www.infarmed.pt/web/infarmed/regimes-excecionais-de-comparticipacao',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-05-04'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
