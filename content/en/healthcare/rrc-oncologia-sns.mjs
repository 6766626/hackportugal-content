export default {
  editorialVoice: 'hackportugal',
  id: 'rrc-oncologia-sns',
  categoryId: 'healthcare',
  title: 'SNS oncology pathway: Rede de Referenciação Oncológica and TMRG',
  tldr: 'If cancer is suspected, the SNS pathway starts with the Médico de Família: they record the suspeita, order initial exames and refer through CTH/SIGA to a hospital in the Rede de Referenciação Oncológica. For urgent cases, priority P1 / Alerta-Oncológico is used. Legal TMRG for the first hospital consultation: 30 days for muito prioritária, 60 for prioritária, 120 for normal. If the deadline is missed, complain to ERS and the Livro de Reclamações.',
  tags: ['oncology', 'sns', 'tmrg', 'aima', 'ers'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'route',
      title: 'How the pathway works: from MGF to consulta decisão terapêutica',
      content: [
        { kind: 'paragraph', text: 'In the SNS, the oncology pathway does not start by booking yourself into an IPO. The normal entry point is via the Médico de Família / MGF at the Centro de Saúde, or via urgência if symptoms are acute. The MGF records the suspicion, orders basic exames and makes an electronic referral to the hospital through CTH/SIGA.' },
        { kind: 'paragraph', text: 'The referral then goes to the hospital da área de referenciação — the hospital assigned to your address and diagnosis within the Rede de Referenciação Hospitalar de Oncologia Médica. For Lisbon, this may be, for example, IPO Lisboa, CHULN / Hospital de Santa Maria, CHLO, ULS São José and other centres depending on the tumour, place of residence and available specialism.' },
        { kind: 'checklist', items: [
          'The MGF records sintomas de alarme: blood, unexplained weight loss, lump, persistent pain, changes in moles, abnormal test results',
          'The MGF orders initial exames: análises, ecografia, RX, mamografia, colonoscopia, TAC — according to the clinical situation',
          'If the suspicion is serious, the referral is marked as muito prioritário / P1 or through Alerta-Oncológico, if this channel is available in the region',
          'The hospital carries out triagem do pedido: it accepts it, changes the priority or returns the request asking for additional information',
          'After the first consulta hospitalar, staging is ordered: TAC, RM, PET, biópsia, anatomia patológica, marcadores',
          'The case is presented at a reunião multidisciplinar / consulta de grupo',
          'After that, the consulta de decisão terapêutica takes place: the plan is explained to the patient — cirurgia, quimioterapia, radioterapia, imunoterapia, vigilância or a combination'
        ] }
      ]
    },
    {
      id: 'rede-referencia',
      title: 'What the Rede de Referenciação Oncológica is',
      content: [
        { kind: 'paragraph', text: 'Rede de Referenciação Hospitalar de Oncologia Médica is the official map of patient flows between SNS hospitals. The idea is simple: not every hospital should treat every cancer. Simple stages may be handled at the local ULS, while complex cases go to a regional or national centre, including an IPO.' },
        { kind: 'paragraph', text: 'The network takes into account tumour type, stage, the need for cirurgia complexa, radioterapia, medicina nuclear, hematologia, transplants, clinical trials and multidisciplinary teams. So “I want specifically to go to the IPO” will not always work automatically: the doctor must justify the referral, and the hospital must accept it under the network.' },
        { kind: 'checklist', items: [
          'IPO Lisboa, IPO Porto and IPO Coimbra are specialist oncology institutes, but not the only places where cancer is treated',
          'CHULN / Hospital de Santa Maria treats many oncology cases and has oncology, surgical and radiotherapy teams',
          'ULS and hospitais centrais can manage diagnosis, surgery, chemotherapy or follow-up closer to home',
          'The patient may be transferred between hospitals if a technology or team is needed that the original ULS does not have',
          'The right phrase for the doctor: “pode referenciar como suspeita oncológica / prioridade P1 se clinicamente indicado?”',
          'For a second opinion in the SNS, a new pedido / referenciação is usually needed, not just a call to another hospital'
        ] },
        { kind: 'warning', text: 'Rede de Referenciação is not private insurance and is not free choice of any hospital. But if there are clinical grounds — a rare tumour, complex surgery, lack of the necessary treatment at the local ULS — ask the MGF or hospital specialist to state this directly in the referral.' }
      ]
    },
    {
      id: 'tmrg',
      title: 'TMRG: which deadlines you can demand',
      content: [
        { kind: 'paragraph', text: 'TMRG — Tempos Máximos de Resposta Garantidos — are the guaranteed maximum response times in the SNS for planned care. They are counted not “from the moment you became frightened by the symptoms”, but from the moment the correct pedido is registered in the SNS system: for example, a referral from the MGF in CTH/SIGA or a hospital order.' },
        { kind: 'checklist', items: [
          'Primeira consulta de especialidade hospitalar muito prioritária: up to 30 calendar days',
          'Primeira consulta de especialidade hospitalar prioritária: up to 60 calendar days',
          'Primeira consulta de especialidade hospitalar normal: up to 120 calendar days',
          'If cancer is suspected, the doctor must justify the priority clinically; the word “cancro” alone does not guarantee automatic P1',
          'P1 / Alerta-Oncológico is a practical fast-track channel for suspeita oncológica, but legally you should check which priority is recorded in SIGA',
          'If hospital triage has lowered the priority, ask for a written explanation or a reassessment through the MGF',
          'For urgência, planned-consultation TMRG does not apply: if there are red flags, you must go to urgência or call SNS 24 / 808 24 24 24'
        ] },
        { kind: 'warning', text: 'Do not wait silently for 30 days if symptoms are worsening: bleeding, jaundice, neurological deficit, severe shortness of breath, bowel obstruction, sudden weakness, high fever during treatment — these are reasons for urgência / 112, not a dispute about TMRG.' }
      ]
    },
    {
      id: 'documents',
      title: 'What to prepare before visiting the MGF or the hospital',
      content: [
        { kind: 'paragraph', text: 'In oncology, speed is often lost not because there is no doctor, but because the file is incomplete: old exames, no written report, images only in a private app, no medication details. Gather everything in advance and bring it on paper + PDF.' },
        { kind: 'checklist', items: [
          'Número de utente SNS',
          'NIF and identity document: residence permit, Cartão de Cidadão, passport or EU registration',
          'List of symptoms with dates: when it started, what is getting worse, weight, temperature, pain, bleeding',
          'All análises, relatórios de ecografia / TAC / RM / mamografia / colonoscopia',
          'Exam images on CD, USB or via a link, if the private clinic provides access',
          'Biópsia / anatomia patológica results, if already available',
          'List of medicines: anticoagulants, hormones, immunosuppressants, supplements',
          'Allergies, chronic illnesses, operations, family history of cancer',
          'A contact phone number that really answers Portuguese calls',
          'If you do not speak Portuguese well — an interpreter or a note written in PT in advance'
        ] }
      ]
    },
    {
      id: 'if-delayed',
      title: 'If the referral is stuck or the TMRG deadline is breached',
      content: [
        { kind: 'paragraph', text: 'The first step is not a complaint, but checking the status. Ask at the Centro de Saúde for a printout or confirmation that the referral has really been sent, with the date, specialty, hospital and priority. A common problem: the pedido has been returned to the doctor, the request is waiting for additional exames, or the patient’s phone is not being answered.' },
        { kind: 'substeps', items: [
          { id: 'check-referral', title: '1. Check the pedido at the Centro de Saúde', content: [
            { kind: 'checklist', items: [
              'Referral sending date',
              'Specialty: Oncologia Médica, Cirurgia, Gastro, Pneumologia, Ginecologia and so on',
              'Destination hospital',
              'Priority: muito prioritária / prioritária / normal',
              'Whether there is a nota clínica with suspeita oncológica',
              'Whether the pedido was devolvido pela triagem hospitalar'
            ] }
          ] },
          { id: 'ask-retriage', title: '2. Ask for retriagem or a new referral', content: [
            { kind: 'paragraph', text: 'If new symptoms have appeared or a private exame has confirmed the suspicion, the MGF can add the information and ask for retriagem. Important: the phrase “tenho medo” is weaker than a specific “perda de 8 kg em 2 meses + anemia + sangue nas fezes + colonoscopia com lesão suspeita”.' }
          ] },
          { id: 'complain', title: '3. Complain if the TMRG has been exceeded', content: [
            { kind: 'checklist', items: [
              'Submit a reclamação in the hospital / ULS Livro de Reclamações físico or eletrónico',
              'State the referral date, specialty, priority and TMRG that has been exceeded',
              'Attach evidence: SMS, letters, printouts, exames',
              'Submit a separate complaint to ERS — Entidade Reguladora da Saúde',
              'Ask not for compensation, but for a specific action: marcação de consulta / reavaliação da prioridade / transferência para outra unidade'
            ] }
          ] }
        ] },
        { kind: 'warning', text: 'A complaint to ERS does not replace medical care. If your condition is deteriorating quickly, contact urgência in parallel. In oncology, an administrative dispute and clinical urgency must move at the same time.' }
      ]
    },
    {
      id: 'private-parallel',
      title: 'Can you speed things up through the private sector',
      content: [
        { kind: 'paragraph', text: 'Yes, many patients do part of the diagnosis privately: colonoscopia, RM, PET, biópsia, second opinion. This can speed up the facts available to the MGF and hospital triage, but it does not create an automatic right to treatment at a specific IPO. For a private result to “work” in the SNS, you need a relatório médico and, ideally, digital images.' },
        { kind: 'checklist', items: [
          'Ask not only for the image, but also for a relatório médico assinado',
          'For biópsia, collect the full anatomia patológica report',
          'Ask whether the lâminas / blocos can be transferred para revisão no SNS',
          'Bring the results to the MGF and ask them to anexar ao pedido CTH/SIGA',
          'If the private doctor writes a letter, ask them to state the suspected diagnosis, ICD/PT terms and urgency',
          'Do not start treatment privately without understanding whether the SNS will accept a scheme that has already been started and where follow-up will take place'
        ] },
        { kind: 'warning', text: 'Private diagnostics are useful, but can cost hundreds of euros and are not always covered by insurance if there is a pre-existing condition. Before an exame, check the copagamento, autorização prévia and the deadline for issuing the relatório.' }
      ]
    }
  ],
  costs: [
    { label: 'Consultations and treatment through the SNS pathway with a número de utente', amountEUR: 0, note: 'Taxas moderadoras in the SNS have mostly been abolished; the oncology pathway through the SNS should not require payment for the consultation.' },
    { label: 'Private second opinion with an oncologist', amountEURMin: 80, amountEURMax: 200, note: 'Indicative private-market range; the price depends on the clinic and doctor, and insurance may cover part of it.' },
    { label: 'Private RM / TAC / colonoscopia without cover', amountEURMin: 150, amountEURMax: 800, note: 'The range is wide; always ask for an orçamento and the relatório deadline before booking.' }
  ],
  sources: [
    {
      title: 'SNS — National Programme for Oncological Diseases',
      url: 'https://www.sns.gov.pt/institucional/programas-de-saude-prioritarios/programa-nacional-para-as-doencas-oncologicas/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-05-04'
    },
    {
      title: 'ePortugal — Guaranteed Maximum Response Times (TMRG)',
      url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/tempos-maximos-de-resposta-garantidos-tmrg',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ERS — Complaints from health service users',
      url: 'https://www.ers.pt/pt/utentes/reclamacoes/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portaria No 153/2017 — TMRG in the SNS',
      url: 'https://diariodarepublica.pt/dr/detalhe/portaria/153-2017-106988080',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
