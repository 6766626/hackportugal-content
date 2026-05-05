export default {
  editorialVoice: 'hackportugal',
  id: 'rrc-oncologia-sns',
  categoryId: 'healthcare',
  title: 'SNS oncology pathway: Rede de Referenciação Oncológica and TMRG',
  tldr: 'If cancer is suspected, the SNS pathway starts with the Médico de Família: they record the suspeita, order initial exames and refer via CTH/SIGA to a hospital within the Rede de Referenciação Oncológica. For urgent cases, priority P1 / Alerta-Oncológico is used. Legal TMRG for the first hospital consultation: 30 days for muito prioritária, 60 for prioritária, 120 for normal. If the deadline is missed — complain to the ERS and via the Livro de Reclamações.',
  tags: ['oncology', 'sns', 'tmrg', 'aima', 'ers'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'route',
      title: 'How the pathway works: from MGF to consulta decisão terapêutica',
      content: [
        { kind: 'paragraph', text: 'In the SNS, the oncology pathway does not start with self-booking at an IPO. The normal entry is via the Médico de Família / MGF at the Centro de Saúde or via urgência if symptoms are acute. The MGF records the suspicion, orders basic exames and makes an electronic referral to the hospital via CTH/SIGA.' },
        { kind: 'paragraph', text: 'The referral then goes to the hospital da área de referenciação — the hospital assigned to your address and diagnosis in the Rede de Referenciação Hospitalar de Oncologia Médica. For Lisbon this may be, for example, IPO Lisboa, CHULN / Hospital de Santa Maria, CHLO, ULS São José and other centres depending on the tumour, place of residence and available specialisation.' },
        { kind: 'checklist', items: [
          'The MGF records sintomas de alarme: blood, unexplained weight loss, a lump, persistent pain, changes in moles, pathological test results',
          'The MGF orders initial exames: análises, ecografia, X-ray, mamografia, colonoscopia, TAC — according to the clinical situation',
          'If suspicion is serious, the referral is marked as muito prioritário / P1 or via Alerta-Oncológico if that channel is available in the region',
          'The hospital performs triagem do pedido: accepts it, changes the priority or returns the request asking for additional data',
          'After the first consulta hospitalar, staging is scheduled: TAC, RM, PET, biópsia, anatomia patológica, markers',
          'The case is presented at a reunião multidisciplinar / consulta de grupo',
          'After this, a consulta de decisão terapêutica takes place: the plan is explained to the patient — cirurgia, quimioterapia, radioterapia, imunoterapia, vigilância or a combination'
        ] }
      ]
    },
    {
      id: 'rede-referencia',
      title: 'What the Rede de Referenciação Oncológica is',
      content: [
        { kind: 'paragraph', text: 'The Rede de Referenciação Hospitalar de Oncologia Médica is the official map of patient flows between SNS hospitals. The idea is simple: not every hospital should treat every cancer. Simple stages can proceed in the local ULS, complex cases go to a regional or national centre, including IPO.' },
        { kind: 'paragraph', text: 'The network takes into account the tumour type, stage, need for cirurgia complexa, radioterapia, medicina nuclear, hematologia, transplants, clinical trials and multidisciplinary teams. Therefore, “I want IPO specifically” will not always work automatically: the doctor must justify the referral, and the hospital must accept it via the network.' },
        { kind: 'checklist', items: [
          'IPO Lisboa, IPO Porto and IPO Coimbra are specialised oncology institutes, but not the only places for cancer treatment',
          'CHULN / Hospital de Santa Maria treats many oncology cases and has oncology, surgical and radiotherapy teams',
          'ULS and hospitais centrais can provide diagnostics, surgery, chemotherapy or follow-up closer to home',
          'A patient can be transferred between hospitals if a technology or team is needed that the original ULS does not have',
          'A useful phrase for the doctor: “pode referenciar como suspeita oncológica / prioridade P1 se clinicamente indicado?”',
          'For a second opinion in the SNS a new pedido / referenciação is usually required, not just a phone call to another hospital'
        ] },
        { kind: 'warning', text: 'The Rede de Referenciação is not private insurance and not free choice of any hospital. But if there are clinical grounds — a rare tumour, complex surgery, lack of the required treatment in the local ULS — ask the MGF or hospital specialist to state this explicitly in the referral.' }
      ]
    },
    {
      id: 'tmrg',
      title: 'TMRG: what deadlines you can demand',
      content: [
        { kind: 'paragraph', text: 'TMRG — Tempos Máximos de Resposta Garantidos are the guaranteed maximum response times in the SNS for planned care. They are counted not “from the moment you became worried about symptoms”, but from the moment the correct pedido is registered in the SNS system: for example, a referral from the MGF in CTH/SIGA or a hospital order.' },
        { kind: 'checklist', items: [
          'Primeira consulta de especialidade hospitalar muito prioritária: up to 30 calendar days',
          'Primeira consulta de especialidade hospitalar prioritária: up to 60 calendar days',
          'Primeira consulta de especialidade hospitalar normal: up to 120 calendar days',
          'With suspected cancer, the physician must justify the priority clinically; the word “cancro” alone doesn\'t guarantee automatic P1',
          'P1 / Alerta-Oncológico is a practical fast-track channel for suspeita oncológica, but legally check what priority is set in SIGA',
          'If hospital triage downgraded the priority, ask for a written explanation or a re-assessment via the MGF',
          'For urgência, TMRG for a planned consultation does not apply: if there are red flags, go to urgência or call SNS 24 / 808 24 24 24'
        ] },
        { kind: 'warning', text: 'Do not wait for 30 days in silence if symptoms are worsening: bleeding, jaundice, neurological deficit, severe shortness of breath, bowel obstruction, marked weakness, high fever while on treatment — this is a reason for urgência / 112, not a debate about TMRG.' }
      ]
    },
    {
      id: 'documents',
      title: 'What to prepare before visiting the MGF or the hospital',
      content: [
        { kind: 'paragraph', text: 'In oncology, speed is often lost not due to lack of a doctor, but due to an incomplete file: old exames, no written conclusion, images only in a private app, no data on medicines. Gather everything in advance and bring paper + PDF.' },
        { kind: 'checklist', items: [
          'Número de utente SNS',
          'NIF and an identity document: residence permit, Cartão de Cidadão, passport or EU registration',
          'A list of symptoms with dates: when it started, what is getting worse, weight, temperature, pain, bleeding',
          'All análises, relatórios de ecografia / TAC / RM / mamografia / colonoscopia',
          'Exame images on a CD, USB or a link, if the private clinic provides access',
          'Results of biópsia / anatomia patológica, if already available',
          'A list of medicines: anticoagulants, hormones, immunosuppressants, supplements',
          'Allergies, chronic diseases, surgeries, family history of cancer',
          'A contact phone number that actually answers Portuguese calls',
          'If you do not speak Portuguese well — an interpreter or a pre-written note in PT'
        ] }
      ]
    },
    {
      id: 'if-delayed',
      title: 'If the referral is stuck or the TMRG deadline is breached',
      content: [
        { kind: 'paragraph', text: 'The first action is not a complaint but a status check. Ask the Centro de Saúde for a printout or confirmation that the referral has indeed been sent, with the date, specialty, hospital and priority. A common problem: the pedido was returned to the doctor, the request is waiting for additional exames or the patient\'s phone does not answer.' },
        { kind: 'substeps', items: [
          { id: 'check-referral', title: '1. Check the pedido at the Centro de Saúde', content: [
            { kind: 'checklist', items: [
              'Referral sending date',
              'Specialty: Oncologia Médica, Cirurgia, Gastro, Pneumologia, Ginecologia, etc.',
              'Destination hospital',
              'Priority: muito prioritária / prioritária / normal',
              'Whether there is a nota clínica with suspeita oncológica',
              'Whether the pedido was devolvido pela triagem hospitalar'
            ] }
          ] },
          { id: 'ask-retriage', title: '2. Ask for retriagem or a new referral', content: [
            { kind: 'paragraph', text: 'If new symptoms appeared or a private exame confirmed the suspicion, the MGF can add data and ask for retriagem. Important: the phrase “tenho medo” is weaker than a specific “perda de 8 kg em 2 meses + anemia + sangue nas fezes + colonoscopia com lesão suspeita”.' }
          ] },
          { id: 'complain', title: '3. Complain if the TMRG is exceeded', content: [
            { kind: 'checklist', items: [
              'Submit a reclamação in the hospital\'s / ULS Livro de Reclamações, physical or electronic',
              'State the referral date, specialty, priority and the TMRG that has been exceeded',
              'Attach evidence: SMS, emails, printouts, exames',
              'Submit a separate complaint to the ERS — Entidade Reguladora da Saúde',
              'Ask not for compensation, but for a concrete action: marcação de consulta / reavaliação da prioridade / transferência para outra unidade'
            ] }
          ] }
        ] },
        { kind: 'warning', text: 'A complaint to the ERS does not replace medical care. If your condition is rapidly deteriorating, go to urgência in parallel. In oncology, administrative dispute and clinical urgency must proceed simultaneously.' }
      ]
    },
    {
      id: 'private-parallel',
      title: 'Whether the private sector can speed things up',
      content: [
        { kind: 'paragraph', text: 'Yes, many patients perform part of the diagnostics privately: colonoscopia, RM, PET, biópsia, second opinion. This can speed up the facts for the MGF and hospital triage, but it does not create an automatic right to treatment at a specific IPO. For a private result to “work” in the SNS, you need a relatório médico and, preferably, digital images.' },
        { kind: 'checklist', items: [
          'Ask not only for the image, but also for a relatório médico assinado',
          'For biópsia, collect the full anatomia patológica report',
          'Ask whether lâminas / blocos can be transferred for review in the SNS',
          'Bring the results to the MGF and ask to anexar ao pedido CTH/SIGA',
          'If a private doctor writes a letter, have them indicate the suspected diagnosis, ICD/PT terminology and urgency',
          'Do not start treatment privately without understanding whether the SNS will accept the already started regimen and where follow-up will be'
        ] },
        { kind: 'warning', text: 'Private diagnostics are useful, but may cost hundreds of euros and are not always covered by insurance for a pre-existing condition. Before an exame, confirm copagamento, autorização prévia and the report delivery time.' }
      ]
    }
  ],
  costs: [
    { label: 'Consultations and treatment via the SNS pathway with número de utente', amountEUR: 0, note: 'Taxas moderadoras in the SNS have largely been abolished; the oncology pathway via the SNS should not require payment for a consultation.' },
    { label: 'Private second opinion with an oncologist', amountEURMin: 80, amountEURMax: 200, note: 'Benchmark on the private market; price depends on the clinic and doctor, insurance may partly cover it.' },
    { label: 'Private RM / TAC / colonoscopia without cover', amountEURMin: 150, amountEURMax: 800, note: 'The range is wide; always ask for an orçamento and the relatório timeframe before booking.' }
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
      title: 'ERS — Complaints by users of health services',
      url: 'https://www.ers.pt/pt/utentes/reclamacoes/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portaria no. 153/2017 — TMRG in the SNS',
      url: 'https://diariodarepublica.pt/dr/detalhe/portaria/153-2017-106988080',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
