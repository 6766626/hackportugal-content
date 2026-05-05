export default {
  editorialVoice: 'hackportugal',
  id: 'rastreio-cancro-mama-colo',
  categoryId: 'healthcare',
  title: 'SNS cancer screenings: breast, cervical and colorectal',
  tldr: 'The SNS has free population-based screenings: breast cancer — women aged 50–69, usually mammography every 2 years; cervical cancer — 25–69 according to your ULS/former ARS programme; colorectal cancer — men and women aged 50–74, a faecal occult blood test followed by colonoscopy if positive. You need a número de utente, an up-to-date address and phone number in the SNS. If you missed a convocatória, call your Centro de Saúde/USF or SNS 24: the booking is usually reinstated.',
  tags: ['sns', 'screening', 'oncology', 'sns-number'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-covered',
      title: 'What SNS covers free of charge',
      content: [
        { kind: 'paragraph', text: 'Population-based screening is not an “on-demand check-up”, but an organised SNS programme: the system itself invites people of the appropriate age by letter, SMS or phone. The aim is to find cancer or pre-cancerous changes before symptoms.' },
        { kind: 'checklist', items: [
          'Breast cancer: women 50–69; standard is mammography every 2 years.',
          'Cervical cancer: women 25–69; cytology and/or HPV testing according to your ULS/regional programme rules.',
          'Colorectal cancer: men and women 50–74; usually a faecal occult blood test, then colonoscopy if the test is positive.',
          'Participation is free for SNS users with a número de utente.',
          'The invitation may come from the ULS, Centro de Saúde/USF, Unidade de Saúde Pública or under the old regional labelling ARS/ACES.',
          'If you already have symptoms — blood, a lump, pain, unexplained weight loss, bleeding — do not wait for screening: book with your médico de família or go to Atendimento Complementar/urgência.'
        ] },
        { kind: 'warning', text: 'Screening does not replace diagnosis. Programmes are designed for people without symptoms. If you have symptoms, the age windows 50–69 / 25–69 / 50–74 are not a limitation for seeking medical care.' }
      ]
    },
    {
      id: 'enrolment',
      title: 'How to enter the programme as an expat',
      content: [
        { kind: 'paragraph', text: 'There is usually no separate “application for cancer screening”. You are included automatically if you are registered in the SNS, linked to a Centro de Saúde/USF and your details are correct.' },
        { kind: 'checklist', items: [
          'Obtain a número de utente at the Centro de Saúde for your residential address.',
          'Ensure the SNS has the correct address in Portugal: convocatória letters often arrive by regular post.',
          'Update your Portuguese phone number and email with the Centro de Saúde/USF.',
          'Check that you are listed in the correct freguesia/ULS after moving.',
          'If you have a médico de família — ask to check whether your age-based screenings are active.',
          'If you do not have a family doctor, contact the USF/UCSP reception: lack of a médico de família should not by itself exclude you from population screening.',
          'Bring to the appointment your passport/residence permit, número de utente and, if available, previous results of mammography, cytology, HPV and colonoscopy.'
        ] },
        { kind: 'warning', text: 'Moving between municipalities often breaks the chain of invitations: the letter went to the old address, and the new Centro de Saúde has not yet pulled your history. After changing address, explicitly ask to update your SNS contact details.' }
      ]
    },
    {
      id: 'breast-screening',
      title: 'Breast cancer: mammography 50–69',
      content: [
        { kind: 'paragraph', text: 'Women aged 50–69 are invited for mammography near their place of residence. In some areas the examination is carried out in mobile units, in others in a hospital or diagnostic centre contracted with the SNS.' },
        { kind: 'checklist', items: [
          'Usual interval: every 2 years if the previous result is normal.',
          'Bring your identification document and número de utente to the examination.',
          'Do not apply deodorant/talc/cream to the breasts and armpits on the day of the mammogram: this can interfere with the images.',
          'If you have implants, previous breast surgery, are pregnant or breastfeeding — inform the staff before the imaging.',
          'The result usually arrives by letter/SMS or is passed to your Centro de Saúde; timeframes depend on the ULS.',
          'If the result is suspicious you will be referred for additional mammography, ultrasound, consulta de senologia or biopsy.',
          'If you are 40–49 or 70+, the free population screening may not invite you automatically, but an SNS doctor can order tests based on clinical indications.'
        ] }
      ]
    },
    {
      id: 'cervical-screening',
      title: 'Cervical cancer: 25–69',
      content: [
        { kind: 'paragraph', text: 'Cervical cancer screening in the SNS is carried out through the Centro de Saúde/USF or local screening units. In 2026 programmes use the age window 25–69, but the test format and interval may differ by region: cytology, HPV test or a combination.' },
        { kind: 'checklist', items: [
          'Booking is usually made by the Centro de Saúde/USF after a convocatória or at your request if you are eligible by age.',
          'Do not plan sampling during menstruation.',
          'For 24–48 hours before the test it is best to avoid vaginal suppositories, douching and sexual intercourse if your USF has given such instructions.',
          'If you are pregnant, have recently given birth or have been treated for dysplasia — tell the nurse/doctor before the test.',
          'HPV vaccination does not cancel screening.',
          'If you have an abnormal result you will be referred for a hospital consultation, colposcopy and, if needed, biopsy.',
          'If you have no uterus after a hysterectomy, the rules depend on the reason for surgery: check with your médico de família.'
        ] },
        { kind: 'warning', text: 'Postcoital bleeding, bleeding after menopause, pain or unusual discharge are reasons for medical consultation, not for waiting for the next screening.' }
      ]
    },
    {
      id: 'colorectal-screening',
      title: 'Colorectal cancer: 50–74',
      content: [
        { kind: 'paragraph', text: 'For men and women aged 50–74 the SNS uses a simple faecal occult blood test. Usually you receive a kit at the Centro de Saúde/USF or per the instructions in the letter, you submit the sample, and the laboratory passes the result into the system.' },
        { kind: 'checklist', items: [
          'The test is intended for people without symptoms.',
          'Follow the kit instructions: incorrect storage or an expired sample can invalidate the test.',
          'If the result is negative, you are usually invited again after the interval set by the programme.',
          'If the result is positive, this is not a cancer diagnosis: a colonoscopy is needed to find the source of the blood.',
          'A colonoscopy under an SNS referral should be free as part of the diagnostic pathway.',
          'If you have already had a colonoscopy, polyps, inflammatory bowel disease or a family risk — tell your doctor: you may need individual follow-up rather than routine screening.',
          'Blood in the stool, anaemia, persistent diarrhoea/constipation, weight loss — see your médico de família immediately; do not wait for the test.'
        ] }
      ]
    },
    {
      id: 'missed-invitation',
      title: 'If no letter arrived or you missed the appointment',
      content: [
        { kind: 'paragraph', text: 'A missed convocatória usually does not “expire”. Recovery depends on the local ULS, but the practical route is the same: update contacts and ask for a new date.' },
        { kind: 'checklist', items: [
          'Call or go to the reception of your Centro de Saúde/USF.',
          'Say: “Quero confirmar o meu rastreio oncológico: mama / colo do útero / colorretal”.',
          'Ask to check your morada, telemóvel, email and número de utente.',
          'If the letter came from the antiga ARS/ACES or ULS, call the phone number in the convocatória.',
          'If you have moved, first transfer your registration para o novo Centro de Saúde.',
          'If it is impossible to get through, call SNS 24: 808 24 24 24; they will advise on the route, but cannot always book the screening themselves.',
          'Keep SMS/letters and results: when changing ULS this speeds up rebuilding your history.'
        ] },
        { kind: 'warning', text: 'Do not ignore a positive faecal occult blood test, abnormal cytology/HPV or a suspicious mammogram. This is no longer “routine screening”, but a diagnostic pathway; pursue scheduling through the Centro de Saúde/USF or a hospital referral.' }
      ]
    }
  ],
  costs: [
    { label: 'Participation in SNS screening', amountEUR: 0, note: 'Free for SNS users with a número de utente within population-based programmes.' },
    { label: 'Repeat invitation after a missed appointment', amountEUR: 0, note: 'Usually free; a new booking is needed via the Centro de Saúde/USF or the contact in the convocatória.' },
    { label: 'Private mammography/HPV test/colonoscopy without SNS', amountEURMin: 40, amountEURMax: 400, note: 'Private-sector benchmark; price depends on the clinic, insurance and sedation for colonoscopy.' }
  ],
  sources: [
    { title: 'SNS — National Programme for Oncological Diseases', url: 'https://www.sns.gov.pt/institucional/programas-de-saude-prioritarios/programa-nacional-para-as-doencas-oncologicas/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' },
    { title: 'SNS 24 — Cancer screenings', url: 'https://www.sns24.gov.pt/tema/doencas-oncologicas/rastreios-oncologicos/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' },
    { title: 'Direção-Geral da Saúde — cancer screenings and DGS norms', url: 'https://www.dgs.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'SNS 24 — contacts and navigation within the SNS', url: 'https://www.sns24.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
