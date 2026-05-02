export default {
  editorialVoice: 'hackportugal',
  id: 'rrc-oncologia-sns',
  categoryId: 'healthcare',
  title: 'SNS oncology pathway: Rede de Referenciação Oncológica and TMRG',
  tldr: 'If cancer is suspected, the SNS pathway starts with the Médico de Família: they record the suspeita, order initial exames and refer through CTH/SIGA to a hospital in the Rede de Referenciação Oncológica. For urgent cases, priority P1 / Alerta-Oncológico is used. The legal TMRG for the first hospital consultation are: 30 days for muito prioritária, 60 for prioritária, 120 for normal. If the deadline is missed — complain to ERS and in the Livro de Reclamações.',
  tags: ['oncology', 'sns', 'tmrg', 'aima', 'ers'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'route',
      title: 'How the pathway works: from MGF to consulta decisão terapêutica',
      content: [
        { kind: 'paragraph', text: 'In the SNS, the oncology pathway does not start by booking yourself into an IPO. The normal entry point is through the Médico de Família / MGF at the Centro de Saúde, or through urgência if the symptoms are acute. The MGF records the suspicion, orders basic exames and makes an electronic referral to the hospital through CTH/SIGA.' },
        { kind: 'paragraph', text: 'The referral then goes to the hospital da área de referenciação — the hospital assigned to your address and diagnosis within the Rede de Referenciação Hospitalar de Oncologia Médica. For Lisbon, this may be, for example, IPO Lisboa, CHULN / Hospital de Santa Maria, CHLO, ULS São José and other centres depending on the tumour, place of residence and available specialisation.' },
        { kind: 'checklist', items: [
          'The MGF records sintomas de alarme: blood, unexplained weight loss, a lump, persistent pain, changes in moles, abnormal tests',
          'The MGF orders initial exames: análises, ecografia, RX, mamografia, colonoscopia, TAC — according to the clinical situation',
          'If the suspicion is serious, the referral is marked as muito prioritário / P1 or through Alerta-Oncológico, if this channel is available in the region',
          'The hospital carries out triagem do pedido: accepts it, changes the priority or returns the request asking for additional data',
          'After the first consulta hospitalar, staging is ordered: TAC, RM, PET, biópsia, anatomia patológica, marcadores',
          'The case is taken to a reunião multidisciplinar / consulta de grupo',
          'After this, a consulta de decisão terapêutica takes place: the patient is told the plan — cirurgia, quimioterapia, radioterapia, imunoterapia, vigilância or a combination'
        ] }
      ]
    },
    {
      id: 'rede-referencia',
      title: 'What the Rede de Referenciação Oncológica is',
      content: [
        { kind: 'paragraph', text: 'The Rede de Referenciação Hospitalar de Oncologia Médica is the official map of patient flows between SNS hospitals. The idea is simple: not every hospital should treat every cancer. Simpler stages may be managed in the local ULS, while complex cases go to a regional or national centre, including an IPO.' },
        { kind: 'paragraph', text: 'The network takes into account the tumour type, stage, need for cirurgia complexa, radioterapia, medicina nuclear, hematologia, transplants, clinical trials and multidisciplinary teams. This is why “I want exactly the IPO” will not always work automatically: the doctor must justify the referral, and the hospital must accept it within the network.' },
        { kind: 'checklist', items: [
          'IPO Lisboa, IPO Porto and IPO Coimbra are specialised oncology institutes, but they are not the only place where cancer is treated',
          'CHULN / Hospital de Santa Maria treats many oncology cases and has oncology, surgical and radiotherapy teams',
          'ULS and hospitais centrais can manage diagnostics, surgery, chemotherapy or follow-up closer to home',
          'A patient may be transferred between hospitals if a technology or team is needed that the original ULS does not have',
          'The right phrase for the doctor: “pode referenciar como suspeita oncológica / prioridade P1 se clinicamente indicado?”',
          'For a second opinion in the SNS, you usually need a new pedido / referenciação, not just a call to another hospital'
        ] },
        { kind: 'warning', text: 'Rede de Referenciação is not private insurance and not free choice of any hospital. But if there are clinical grounds — a rare tumour, complex surgery, absence of the required treatment in the local ULS — ask the MGF or hospital specialist to state this directly in the referral.' }
      ]
    },
    {
      id: 'tmrg',
      title: 'TMRG: which deadlines you can demand',
      content: [
        { kind: 'paragraph', text: 'TMRG — Tempos Máximos de Resposta Garantidos — are the guaranteed maximum response times in the SNS for planned care. They are counted not “from the moment you became frightened by symptoms”, but from the moment the correct pedido is registered in the SNS system: for example, a referral from the MGF in CTH/SIGA or a hospital order.' },
        { kind: 'checklist', items: [
          'Primeira consulta de especialidade hospitalar muito prioritária: within 30 calendar days',
          'Primeira consulta de especialidade hospitalar prioritária: within 60 calendar days',
          'Primeira consulta de especialidade hospitalar normal: within 120 calendar days',
          'When cancer is suspected, the doctor must justify the priority clinically; the word “cancer” alone does not guarantee automatic P1',
          'P1 / Alerta-Oncológico is a practical fast-track channel for suspeita oncológica, but legally you should check which priority is recorded in SIGA',
          'If hospital triage has lowered the priority, ask for a written explanation or reassessment through the MGF',
          'For urgência, the TMRG for planned consultations do not apply: if there are red flags, you must go to urgência or call SNS 24 / 808 24 24 24'
        ] },
        { kind: 'warning', text: 'Do not wait silently for 30 days if symptoms worsen: bleeding, jaundice, neurological deficit, severe shortness of breath, bowel obstruction, sudden weakness, high fever during treatment — these are reasons for urgência / 112, not a dispute about TMRG.' }
      ]
    },
    {
      id: 'documents',
      title: 'What to prepare before visiting the MGF or the hospital',
      content: [
        { kind: 'paragraph', text: 'In oncology, speed is often lost not because there is no doctor, but because the file is incomplete: old exames, no report text, images only in a private app, no medication details. Gather everything in advance and bring it on paper + PDF.' },
        { kind: 'checklist', items: [
          'Número de utente SNS',
          'NIF and identity document: residence permit, Cartão de Cidadão, passport or EU registration',
          'List of symptoms with dates: when it started, what is getting worse, weight, temperature, pain, bleeding',
          'All análises, relatórios de ecografia / TAC / RM / mamografia / colonoscopia',
          'Images from exames on CD, USB or via a link, if the private clinic provides access',
          'Results of biópsia / anatomia patológica, if already available',
          'Medication list: anticoagulants, hormones, immunosuppressants, supplements',
          'Allergies, chronic illnesses, operations, family history of cancer',
          'A contact phone number that will actually answer Portuguese calls',
          'If you do not speak Portuguese well — an interpreter or a note written in PT in advance'
        ] }
      ]
    },
    {
      id: 'if-delayed',
      title: 'If the referral is stuck or the TMRG deadline has been breached',
      content: [
        { kind: 'paragraph', text: 'The first step is not a complaint, but a status check. Ask the Centro de Saúde for a printout or confirmation that the referral really has been sent, with the date, specialty, hospital and priority. A common problem: the pedido was returned to the doctor, the request is waiting for additional exames, or the patient’s phone is not being answered.' },
        { kind: 'substeps', items: [
          { id: 'check-referral', title: '1. Check the pedido at the Centro de Saúde', content: [
            { kind: 'checklist', items: [
              'Date the referral was sent',
              'Specialty: Oncologia Médica, Cirurgia, Gastro, Pneumologia, Ginecologia, etc.',
              'Destination hospital',
              'Priority: muito prioritária / prioritária / normal',
              'Whether there is a nota clínica with suspeita oncológica',
              'Whether the pedido was devolvido pela triagem hospitalar'
            ] }
          ] },
          { id: 'ask-retriage', title: '2. Ask for retriagem or a new referral', content: [
            { kind: 'paragraph', text: 'If new symptoms have appeared or a private exame has confirmed the suspicion, the MGF can add data and ask for retriagem. Important: the phrase “tenho medo” is weaker than a specific “perda de 8 kg em 2 meses + anemia + sangue nas fezes + colonoscopia com lesão suspeita”.' }
          ] },
          { id: 'complain', title: '3. Complain if the TMRG is exceeded', content: [
            { kind: 'checklist', items: [
              'Submit a reclamação in the hospital / ULS Livro de Reclamações físico or eletrónico',
              'State the referral date, specialty, priority and the TMRG that has been exceeded',
              'Attach evidence: SMS, letters, printouts, exames',
              'Separately submit a complaint to ERS — Entidade Reguladora da Saúde',
              'Ask not for compensation, but for a specific action: marcação de consulta / reavaliação da prioridade / transferência para outra unidade'
            ] }
          ] }
        ] },
        { kind: 'warning', text: 'A complaint to ERS does not replace medical care. If the condition is worsening quickly, go to urgência in parallel. In oncology, an administrative dispute and clinical urgency must be handled at the same time.' }
      ]
    },
    {
      id: 'private-parallel',
      title: 'Can you speed things up through the private sector',
      content: [
        { kind: 'paragraph', text: 'Yes, many patients do part of the diagnostics privately: colonoscopia, RM, PET, biópsia, second opinion. This can speed up the facts for the MGF and hospital triage, but it does not create an automatic right to treatment in a specific IPO. For a private result to “work” in the SNS, you need a relatório médico and, preferably, digital images.' },
        { kind: 'checklist', items: [
          'Ask not only for the image, but also for a relatório médico assinado',
          'For biópsia, collect the full anatomia patológica report',
          'Ask whether lâminas / blocos can be transferred para revisão no SNS',
          'Bring the results to the MGF and ask for them to be anexar ao pedido CTH/SIGA',
          'If a private doctor writes a letter, ask them to state the suspected diagnosis, ICD/PT terms and urgency',
          'Do not start treatment privately without understanding whether the SNS will accept a regimen that has already been started and where follow-up will take place'
        ] },
        { kind: 'warning', text: 'Private diagnostics are useful, but can cost hundreds of euros and are not always covered by insurance for a pre-existing condition. Before an exame, check the copagamento, autorização prévia and the timeframe for issuing the relatório.' }
      ]
    }
  ],
  costs: [
    { label: 'Consultations and treatment through the SNS pathway with número de utente', amountEUR: 0, note: 'Taxas moderadoras in the SNS have mostly been abolished; the oncology pathway through the SNS should not require payment for the consultation.' },
    { label: 'Private second opinion with an oncologist', amountEURMin: 80, amountEURMax: 200, note: 'Indicative private-market range; the price depends on the clinic and doctor, and insurance may cover part of it.' },
    { label: 'Private RM / TAC / colonoscopia without cover', amountEURMin: 150, amountEURMax: 800, note: 'The range is wide; always ask for an orçamento and the relatório timeframe before booking.' }
  ],
  sources: [
    {
      title: 'SNS — Rede de Referenciação Hospitalar de Oncologia Médica',
      url: 'https://www.sns.gov.pt/wp-content/uploads/2017/08/RRH-Oncologia-Médica.pdf',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ePortugal — Tempos Máximos de Resposta Garantidos (TMRG)',
      url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/tempos-maximos-de-resposta-garantidos-tmrg',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ERS — Complaints by users of health services',
      url: 'https://www.ers.pt/pt/utentes/reclamacoes/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portaria n.º 153/2017 — TMRG in the SNS',
      url: 'https://diariodarepublica.pt/dr/detalhe/portaria/153-2017-106988080',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
