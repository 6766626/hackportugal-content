export default {
  editorialVoice: 'hackportugal',
  id: 'estatuto-doente-cronico',
  categoryId: 'healthcare',
  title: 'Estatuto de Doente Crónico — chronic patient status',
  tldr: 'Portugal does not have a single “chronic patient card” for every situation: the status is recorded by an SNS doctor, usually a médico de família, in your clinical record and prescriptions. It is needed for isenção de taxas moderadoras in the remaining paid SNS cases and for special comparticipação for medicines: under protocols for diabetes, oncology, asthma, hypertension and others, some medicines may be 100% paid for by the state. In 2026, taxas moderadoras have almost been abolished, but urgência without a referral can still cost €14–18.',
  tags: ['sns', 'chronic conditions', 'medicines', 'utente'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'What this means in practice',
      content: [
        { kind: 'paragraph', text: 'Estatuto de Doente Crónico is not a separate plastic document and not a universal benefit. In practice, it is medical confirmation of a chronic illness in the SNS system: diagnosis, long-term treatment, active prescriptions and, where applicable, the right to special comparticipação for medicines or isenção de taxas moderadoras.' },
        { kind: 'paragraph', text: 'It most often applies to diabetes mellitus, hipertensão arterial, asma/DPOC, doenças oncológicas, doenças reumáticas, neurological and cardiovascular diseases, chronic kidney failure and other conditions where treatment lasts for months or for life.' },
        { kind: 'warning', text: 'Not every chronic illness automatically gives 100% payment for all medicines. The state pays under a special scheme only for medicines, devices or active substances included in a specific protocol/Despacho/Portaria and correctly prescribed by a doctor.' }
      ]
    },
    {
      id: 'benefits',
      title: 'What the status gives you in 2026',
      content: [
        { kind: 'checklist', items: [
          'A chronic illness note in the processo clínico SNS — it is visible to the doctor, enfermeiro and pharmacist through the electronic prescription.',
          'Receita sem papel for long-term treatment: the doctor can issue repeat prescriptions so that you do not have to go every month just for a renewal.',
          'Special comparticipação for medicines: the standard levels in Portugal are 90%, 69%, 37% or 15%, but under separate protocols it may be 100%.',
          'For diabetes: insulin is usually fully covered; needles, lancets and syringes for self-monitoring may have 100% coverage, while test strips follow a separate scheme.',
          'For oncological diseases: many medicines are supplied through an SNS hospitalar pharmacy at no cost to the patient if the treatment was prescribed by a hospital público.',
          'For asthma, hypertension and cardiovascular diseases: coverage depends on the specific medicine and clinical protocol, and is not always 100%.',
          'Isenção de taxas moderadoras in cases where they are still charged, if your category is covered by SNS rules or a separate benefit has been arranged.',
          'Easier access to follow-up: consultas de vigilância, tests, prescription renewal, vaccination where clinically indicated.'
        ] },
        { kind: 'paragraph', text: 'Since 2022, taxas moderadoras in the SNS have almost been abolished. In 2026 they mainly remain for urgência hospitalar without a referral from SNS 24, INEM, médico de família or without subsequent hospitalisation. As a guide: Serviço de Urgência Básica — €14, Médico-Cirúrgica — €16, Polivalente — €18, plus possible exames.' }
      ]
    },
    {
      id: 'how-to-get',
      title: 'How to arrange it through the SNS',
      content: [
        { kind: 'substeps', items: [
          { id: 'prepare-documents', title: '1. Prepare documents and medical history', content: [
            { kind: 'checklist', items: [
              'Número de utente SNS.',
              'Documento de identificação: residence permit, Cartão de Cidadão, passport with visa or CRUE for EU citizens.',
              'NIF — often needed for the administrative record and prescriptions.',
              'List of current medicines: name, dosage, how many times a day.',
              'Discharge summaries, test results, specialist reports from Portugal or another country.',
              'If documents are not in Portuguese/English — a short translation of the diagnosis and treatment regimen.',
              'Photos of medicine packaging — this helps find Portuguese equivalents by active substance.'
            ] }
          ]},
          { id: 'book-appointment', title: '2. Book an appointment with the médico de família', content: [
            { kind: 'paragraph', text: 'The main route is a consulta at your Centro de Saúde / USF / UCSP. If a médico de família has not yet been assigned, ask for a consulta aberta or consulta de recurso. A private doctor can provide a relatório, but SNS benefits usually have to be confirmed and entered by an SNS doctor.' }
          ]},
          { id: 'medical-declaration', title: '3. Obtain a declaração médica and update prescriptions', content: [
            { kind: 'paragraph', text: 'Ask the doctor to record the diagnosis as chronic, state the need for long-term treatment and issue a Receita sem papel with the correct comparticipação scheme. For some diseases, the doctor selects a special scheme in the prescription system; without this, the pharmacy will apply the standard discount, not the preferential one.' }
          ]},
          { id: 'confirm-exemption', title: '4. Check isenção with the administrative desk', content: [
            { kind: 'paragraph', text: 'After the appointment, go to the secretaria at the Centro de Saúde and ask whether isenção de taxas moderadoras is active in the Registo Nacional de Utentes. Sometimes the medical note and the administrative benefit are separate actions.' }
          ]}
        ] }
      ]
    },
    {
      id: 'pharmacy',
      title: 'How to buy medicines with the benefit 💊',
      content: [
        { kind: 'paragraph', text: 'At the pharmacy, show the prescription number/SMS, Cartão de Cidadão or a document with your número de utente. The discount is applied automatically if the prescription was issued as comparticipado and the correct scheme was selected.' },
        { kind: 'checklist', items: [
          'Check the receipt: it shows preço total, comparticipação do Estado and valor a pagar.',
          'If the medicine should be 100% covered but the pharmacy asks for payment, first check whether the standard scheme was prescribed instead of the special one.',
          'Ask the médico de família to prescribe by active substance if genéricos are suitable for you — this is often cheaper and more available.',
          'Do not change the brand of insulin, inhaler or oncology medicine without agreeing it with the doctor.',
          'If the medicine is not available, the pharmacy can order it or suggest an equivalent; for some hospitalar medicines you need to go to the farmácia hospitalar.',
          'Keep faturas with NIF: some medical expenses go into e-Fatura and are taken into account in IRS.'
        ] },
        { kind: 'warning', text: 'The benefit is not automatically refunded “retroactively”. If the prescription was issued incorrectly and you paid, you usually need to ask the doctor to reissue the prescription before purchase, not afterwards.' }
      ]
    },
    {
      id: 'common-cases',
      title: 'Common cases: diabetes, asthma, hypertension, oncology',
      content: [
        { kind: 'checklist', items: [
          'Diabetes: ask to arrange insulin/tablets, self-monitoring materials, an análises HbA1c plan and diabetes enfermagem appointments straight away.',
          'Hipertensão: bring home blood pressure measurements for 1–2 weeks; the doctor will select a regimen and issue long-term prescriptions.',
          'Asma/DPOC: it is important to show old inhaladores and spirometria results, if available; different inhalers have different comparticipação.',
          'Oncologia: treatment is usually managed by an SNS hospital; prescriptions and dispensing of medicines often go through the hospital pharmacy rather than a regular farmácia.',
          'Chronic pain/rheumatology: some medicines require a specialist and hospitalar prescription; the médico de família can manage basic medicines, but not everything.',
          'Chronic psychiatric illnesses: antidepressants, antipsychotics and mood stabilisers have their own comparticipação levels; 100% is not guaranteed.'
        ] },
        { kind: 'paragraph', text: 'If you arrived in Portugal with an already established diagnosis, do not wait until your medicines run out. Book at the Centro de Saúde as soon as you receive a número de utente: choosing an equivalent and confirming the benefit can take several weeks.' }
      ]
    },
    {
      id: 'problems',
      title: 'If you are refused or nothing has been activated',
      content: [
        { kind: 'checklist', items: [
          'Ask for a written explanation: whether the refusal is medical or administrative.',
          'Check whether you have an active número de utente and the correct address at the Centro de Saúde.',
          'Ask the médico de família to issue a declaração médica de doença crónica with the diagnosis and ongoing treatment.',
          'If you do not have a family doctor, ask for a consulta aberta and registration on the lista de utentes sem médico.',
          'If the issue is the medicine, ask the doctor for the comparticipação scheme code and whether the medicine is on the Infarmed list.',
          'Call SNS 24: 808 24 24 24 — they can advise on the route and record the request.',
          'For a systemic problem, submit a reclamação in the Livro de Reclamações or through the hospital/ACES gabinete do utente.'
        ] },
        { kind: 'warning', text: 'Atestado Médico de Incapacidade Multiuso with incapacidade ≥60% is a separate procedure through a junta médica and is not the same as Estatuto de Doente Crónico. It may provide additional tax and medical benefits, but it is arranged separately.' }
      ]
    }
  ],
  costs: [
    { label: 'Arranging the status in the SNS', amountEUR: 0, note: 'Consulta and administrative registration in the SNS are usually without taxas moderadoras.' },
    { label: 'Urgência Básica without referral', amountEUR: 14, note: 'Only if there is no SNS/INEM/doctor referral and no subsequent hospitalisation; with isenção — €0.' },
    { label: 'Urgência Médico-Cirúrgica without referral', amountEUR: 16, note: 'Guide to 2026 taxas moderadoras for non-exempt users.' },
    { label: 'Urgência Polivalente without referral', amountEUR: 18, note: 'Guide to 2026 taxas moderadoras for non-exempt users.' }
  ],
  sources: [
    {
      title: 'SNS 24 — isenção de taxas moderadoras',
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
      title: 'Infarmed — comparticipação for medicines',
      url: 'https://www.infarmed.pt/web/infarmed/entidades/medicamentos-uso-humano/avaliacao-tecnologias-saude/comparticipacao-de-medicamentos',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
