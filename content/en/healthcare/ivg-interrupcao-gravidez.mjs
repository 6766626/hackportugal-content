export default {
  editorialVoice: 'hackportugal',
  id: 'ivg-interrupcao-gravidez',
  categoryId: 'healthcare',
  title: 'IVG — legal termination of pregnancy up to 10 weeks in the SNS',
  tldr: 'In Portugal, IVG — interrupção voluntária da gravidez — is legal at the woman’s request up to 10 weeks of pregnancy under Lei 16/2007. In the SNS, booking usually starts via SNS 24: 808 24 24 24. A prior consultation, confirmation of gestational age, informed consent and at least 3 days of a “reflection period” are mandatory. In the SNS, the procedure is free for SNS users; foreign women without a residence permit cannot be refused because of nationality, but administratively they may be asked for a utente number/passport/address and have their right to cost coverage checked.',
  tags: ['ivg', 'sns', 'pregnancy', 'rights'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'legal-frame',
      title: 'What the law allows',
      content: [
        { kind: 'paragraph', text: 'IVG — interrupção voluntária da gravidez — voluntary termination of pregnancy.\n\nIn Portugal, it is permitted at the pregnant woman’s request up to 10 weeks of pregnancy, provided it is carried out by a doctor or under a doctor’s supervision in an official or officially recognised healthcare establishment.' },
        { kind: 'paragraph', text: 'The legal basis is Lei 16/2007, which changed the regime of art. 142 of the Código Penal. The law applies regardless of nationality: the key conditions are gestational age, the place where it is carried out, informed consent and compliance with the mandatory procedure.' },
        { kind: 'checklist', items: [
          'Limit at the woman’s request: up to 10 weeks of pregnancy.',
          'After 10 weeks, only special grounds are possible: risk to life/health, serious foetal pathology, pregnancy following a sexual offence and other cases expressly provided for by law.',
          'A consulta prévia — prior consultation — is required.',
          'After the consulta prévia, a reflection period of at least 3 days is mandatory.',
          'Written consent is required — consentimento livre e esclarecido.',
          'The procedure is carried out in the SNS or in a private clinic/hospital recognised for IVG.',
          'Healthcare professionals may declare objeção de consciência, but the establishment must redirect the patient so that the time limit is not missed.'
        ] },
        { kind: 'warning', text: '10 weeks is a strict practical deadline. Do not wait “a couple more days”: booking, ultrasound, consultation and the mandatory 3 days can take time. If you are close to 10 weeks, call SNS 24 the same day.' }
      ]
    },
    {
      id: 'booking',
      title: 'How to book in the SNS',
      content: [
        { kind: 'paragraph', text: 'The most direct route is to call SNS 24 on 808 24 24 24 and say: “Quero marcar uma consulta para interrupção voluntária da gravidez”. The operator will refer you to the appropriate unidade de saúde / hospital da área.' },
        { kind: 'checklist', items: [
          'Call SNS 24: 808 24 24 24.',
          'Give your place of residence in Portugal and the estimated gestational age.',
          'If you have a número de utente, provide it.',
          'If you do not have a utente number, say that you are in Portugal and need IVG within the 10-week limit.',
          'Write down the name of the hospital/ULS, the date, the time and what to bring with you.',
          'If you do not speak Portuguese, ask: “Preciso de atendimento em inglês” or go with an interpreter.',
          'If you are close to the limit, say clearly: “Estou perto das 10 semanas”.'
        ] },
        { kind: 'paragraph', text: 'Alternatively, you can go to a Centro de Saúde, USF/UCSP or directly to an SNS hospital, if that is the usual route in your region. But SNS 24 usually indicates the correct pathway more quickly.' },
        { kind: 'warning', text: 'Not all private gynaecologists provide IVG and not all refer quickly. To meet the deadline, it is safer to call SNS 24 in parallel straight away.' }
      ]
    },
    {
      id: 'procedure',
      title: 'What happens at the consultations',
      content: [
        { kind: 'substeps', items: [
          { id: 'consulta-previa', title: '1. Consulta prévia', content: [
            { kind: 'paragraph', text: 'At the prior consultation, the doctor confirms the pregnancy and gestational age, explains the available methods, risks, signs of complications and support options. An ultrasound is usually carried out or arranged in order to determine the gestational age accurately and rule out medical contraindications.' },
            { kind: 'checklist', items: [
              'Passport, Cartão de Residência or another ID.',
              'Número de utente, if you have one.',
              'NIF — useful, but not a key medical document.',
              'Pregnancy/ultrasound/test documents, if you already have them.',
              'List of medicines and allergies.',
              'Contact telephone number in Portugal.',
              'Address of residence or temporary stay.'
            ] }
          ] },
          { id: 'reflection', title: '2. 3 days of mandatory waiting', content: [
            { kind: 'paragraph', text: 'After the consulta prévia, the law requires a reflection period of at least 3 days. This is not a “queue”, but a mandatory legal condition. The procedure cannot be carried out earlier, even if the decision has already been made.' },
            { kind: 'warning', text: 'If the medical team schedules a date that takes you beyond 10 weeks, ask for urgent referral to another unidade or hospital. Wording: “Preciso de referenciação urgente por limite legal de 10 semanas”.' }
          ] },
          { id: 'intervention', title: '3. Medical or surgical method', content: [
            { kind: 'paragraph', text: 'The doctor chooses the method taking into account the gestational age, medical history and the establishment’s protocol. In early pregnancy, the medical method is often used; in some cases, a surgical/aspiration method is used. After the procedure, follow-up, contraception and instructions on when to seek urgent help are usually arranged.' }
          ] }
        ] }
      ]
    },
    {
      id: 'costs-and-non-residents',
      title: 'Costs and the rights of foreign women',
      content: [
        { kind: 'paragraph', text: 'In the SNS, IVG is part of lawful healthcare. For SNS users, the procedure is usually free. After most taxas moderadoras in the SNS were abolished, patients should not pay the standard “entry” fee for planned care.' },
        { kind: 'paragraph', text: 'Nationality is not a ground for refusing IVG within the limits of the law. In practice, an administrator may ask for a número de utente, passport, address and documents proving the right to cost coverage: residence permit, visa, CRUE for EU citizens, EHIC/GHIC, S1 or private insurance.' },
        { kind: 'checklist', items: [
          'If you are a resident and have a número de utente, use the normal SNS route.',
          'If you do not yet have a residence permit, but you live in Portugal, still call SNS 24 and ask for an appointment; in parallel, arrange your utente number at the Centro de Saúde.',
          'If you are an EU/EEA/Swiss citizen and are temporarily in Portugal, bring your EHIC and passport/ID.',
          'If you are a tourist from a third country, the procedure is legal, but the SNS may issue a bill if there is no right to coverage; check before the visit.',
          'If the deadline is critical, the question of payment should not delay medical routing: first secure the appointment and confirmation of gestational age.',
          'In case of bleeding, severe pain, fever or fainting, call 112 or go to urgência — emergency care is provided regardless of status.'
        ] },
        { kind: 'warning', text: 'Do not agree to “home arrangements”, pills from the internet or help from people without a medical licence. This is a health risk and may create legal problems. The legal route is the SNS or a recognised healthcare establishment.' }
      ]
    },
    {
      id: 'confidentiality-minors-language',
      title: 'Confidentiality, minors and language',
      content: [
        { kind: 'paragraph', text: 'Medical information about IVG is protected by medical confidentiality and personal data protection rules. An employer, landlord, school, partner or relatives do not get access to this information without a lawful basis.' },
        { kind: 'checklist', items: [
          'An adult patient makes the decision herself.',
          'The patient has the right to ask questions and to refuse the procedure before it is carried out.',
          'You can ask for written instructions in a language you understand or come with an interpreter.',
          'You can ask for contraception counselling after IVG.',
          'If you have experienced sexual violence, tell the doctor: this affects medical and legal support.',
          'Separate rules on consent and the involvement of a legal representative apply to minors; if the situation is unsafe, tell the doctor directly.'
        ] },
        { kind: 'warning', text: 'If a partner or family is putting pressure on you, tell the doctor about it in private. Coercion into terminating or continuing a pregnancy is not normal; the SNS can refer you to social and psychological support.' }
      ]
    }
  ],
  costs: [
    { label: 'IVG in the SNS for an SNS user', amountEUR: 0, note: 'Usually free where there is a right to care in the SNS; standard taxas moderadoras for planned care in the SNS have been abolished.' },
    { label: 'SNS 24 call', amountEURMin: 0, amountEURMax: 1, note: '808 24 24 24 — the cost depends on the operator’s tariff; this is not a paid medical service.' },
    { label: 'Private clinic', amountEURMin: 300, amountEURMax: 800, note: 'Market guide, not a state tariff; the price depends on the clinic, gestational age, method and tests.' }
  ],
  sources: [
    {
      title: 'SNS 24: Termination of pregnancy',
      url: 'https://www.sns24.gov.pt/tema/saude-sexual/interrupcao-da-gravidez/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DRE: Lei 16/2007 — exclusion of unlawfulness in cases of voluntary termination of pregnancy',
      url: 'https://dre.pt/dre/legislacao-consolidada/lei/2007-34546675',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'SNS 24: access by foreign citizens to healthcare',
      url: 'https://www.sns24.gov.pt/guia/acesso-de-cidadaos-estrangeiros-a-cuidados-de-saude/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}
