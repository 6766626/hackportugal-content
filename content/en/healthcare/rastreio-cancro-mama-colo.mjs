export default {
  editorialVoice: 'hackportugal',
  id: 'rastreio-cancro-mama-colo',
  categoryId: 'healthcare',
  title: 'SNS oncological rastreios: breast, cervical and bowel cancer screening',
  tldr: 'The SNS has free population-based rastreios: breast cancer — women aged 50–69, usually a mammogram every 2 years; cervical cancer — ages 25–69 under your ULS/former ARS programme; colorectal cancer — men and women aged 50–74, a faecal occult blood test followed by colonoscopia if the result is positive. You need a número de utente, an up-to-date address and telephone number in the SNS. If you missed the convocatória, call your Centro de Saúde/USF or SNS 24: appointments can usually be reinstated.',
  tags: ['sns', 'screening', 'oncology', 'utente'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-covered',
      title: 'What the SNS covers free of charge',
      content: [
        { kind: 'paragraph', text: 'Rastreio de base populacional is not a “check-up on request”, but an organised SNS programme: the system itself invites people in the eligible age group by letter, SMS or telephone. The aim is to find cancer or pre-cancerous changes before symptoms appear.' },
        { kind: 'checklist', items: [
          'Breast cancer: women aged 50–69; normally mammografia every 2 years.',
          'Cervical cancer: women aged 25–69; cytology and/or an HPV test is used according to the rules of your ULS/regional programme.',
          'Colorectal cancer: men and women aged 50–74; usually a faecal occult blood test, followed by colonoscopia if the test is positive.',
          'Participation is free for SNS users with a número de utente.',
          'The invitation may come from the ULS, Centro de Saúde/USF, Unidade de Saúde Pública or under the old regional ARS/ACES labelling.',
          'If you already have symptoms — blood, a lump, pain, unexplained weight loss, bleeding — do not wait for rastreio: book an appointment with a médico de família or go to Atendimento Complementar/urgência.'
        ] },
        { kind: 'warning', text: 'Screening does not replace diagnosis. Programmes are designed for people without symptoms. If you have symptoms, the age windows 50–69 / 25–69 / 50–74 are not a restriction on seeking medical care.' }
      ]
    },
    {
      id: 'enrolment',
      title: 'How to get into the programme if you are an expat',
      content: [
        { kind: 'paragraph', text: 'There is usually no separate “oncological screening application”. You are included automatically if you are registered with the SNS, linked to a Centro de Saúde/USF and your details are correct.' },
        { kind: 'checklist', items: [
          'Get a número de utente at the Centro de Saúde for your address of residence.',
          'Make sure the SNS has the correct address in Portugal: convocatória letters are often sent by ordinary post.',
          'Update your Portuguese telephone number and email at the Centro de Saúde/USF.',
          'Check that you are listed under the correct freguesia/ULS after moving.',
          'If you have a médico de família, ask them to check whether your age-based rastreios are active.',
          'If you do not have a family doctor, contact the USF/UCSP secretariat: not having a médico de família should not in itself exclude you from population screening.',
          'Take your passport/residence permit, número de utente and, if you have them, previous mammografia, citologia, HPV and colonoscopia results to the appointment.'
        ] },
        { kind: 'warning', text: 'Moving between municipalities often breaks the invitation chain: the letter went to the old address, and the new Centro de Saúde has not yet pulled through the history. After changing address, specifically ask for your SNS contact details to be updated.' }
      ]
    },
    {
      id: 'breast-screening',
      title: 'Breast cancer: mammografia 50–69',
      content: [
        { kind: 'paragraph', text: 'Women aged 50–69 are invited for mammografia according to their place of residence. In some areas, the examination is carried out in mobile unidades móveis; in others, in a hospital or diagnostic centre working with the SNS.' },
        { kind: 'checklist', items: [
          'Usual interval: 2 years if the previous result was normal.',
          'Take a documento de identificação and número de utente to the examination.',
          'Do not apply deodorant/talcum powder/cream to your breasts or armpits on the day of the mammogram: this can interfere with the images.',
          'If you have implants, have had breast surgery, are pregnant or breastfeeding, say so before the image is taken.',
          'The result usually arrives by letter/SMS or is sent to the Centro de Saúde; timings depend on the ULS.',
          'If the result is suspicious, you will be referred for additional mammografia, ecografia, consulta de senologia or biópsia.',
          'If you are 40–49 or 70+, free population screening may not invite you automatically, but an SNS doctor can request an examination on clinical grounds.'
        ] }
      ]
    },
    {
      id: 'cervical-screening',
      title: 'Cervical cancer: 25–69',
      content: [
        { kind: 'paragraph', text: 'Cervical cancer screening in the SNS is carried out through the Centro de Saúde/USF or local unidades de rastreio. In 2026, programmes use the 25–69 age window, but the test format and interval may differ by region: citologia, HPV test or a combination.' },
        { kind: 'checklist', items: [
          'The appointment is usually made by the Centro de Saúde/USF after a convocatória or at your request if you are in the eligible age group.',
          'Do not schedule the sample collection during menstruation.',
          'For 24–48 hours before the test, it is best to avoid vaginal pessaries, douching and sexual intercourse if your USF has given that instruction.',
          'If you are pregnant, have recently given birth or have been treated for dysplasia, tell the nurse/doctor before the test.',
          'HPV vaccination does not remove the need for screening.',
          'In the event of an abnormal result, you will be referred to consulta hospitalar, colposcopia and, if necessary, biópsia.',
          'If you no longer have a uterus after histerectomia, the rules depend on the reason for the operation: check with your médico de família.'
        ] },
        { kind: 'warning', text: 'Post-coital bleeding, bleeding after menopause, pain or unusual discharge are reasons for a medical consultation, not for waiting for the next rastreio.' }
      ]
    },
    {
      id: 'colorectal-screening',
      title: 'Colorectal cancer: 50–74',
      content: [
        { kind: 'paragraph', text: 'For men and women aged 50–74, the SNS uses a simple faecal occult blood test. You usually receive a kit at the Centro de Saúde/USF or according to the instructions in the letter, submit the sample, and the laboratory sends the result into the system.' },
        { kind: 'checklist', items: [
          'The test is intended for people without symptoms.',
          'Follow the kit instructions: incorrect storage or an out-of-date sample can make the test invalid.',
          'If the result is negative, you will usually be invited again after the interval set by the programme.',
          'If the result is positive, this is not a cancer diagnosis: colonoscopia is needed to find the source of the blood.',
          'Colonoscopia referred through the SNS should be free of charge as part of the diagnostic pathway.',
          'If you have already had a colonoscopia, polyps, inflammatory bowel disease or a family risk, tell the doctor: you may need individual follow-up rather than ordinary rastreio.',
          'Blood in the stool, anaemia, persistent diarrhoea/constipation, weight loss — see a médico de família immediately; do not wait for the test.'
        ] }
      ]
    },
    {
      id: 'missed-invitation',
      title: 'If the letter did not arrive or you missed the appointment',
      content: [
        { kind: 'paragraph', text: 'A missed convocatória usually does not “expire”. Reinstatement depends on the local ULS, but the practical route is the same: update your contacts and ask for a new date.' },
        { kind: 'checklist', items: [
          'Call or go to the secretariat of your Centro de Saúde/USF.',
          'Say: “Quero confirmar o meu rastreio oncológico: mama / colo do útero / colorretal”.',
          'Ask them to check your morada, telemóvel, email and número de utente.',
          'If the letter came from the antiga ARS/ACES or ULS, call the number in the convocatória.',
          'If you have moved, first transfer your inscrição para o novo Centro de Saúde.',
          'If you cannot get through by phone, call SNS 24: 808 24 24 24; they will advise you on the route, but they cannot always book the rastreio themselves.',
          'Keep SMS messages/letters and results: if you change ULS, this speeds up recovering your history.'
        ] },
        { kind: 'warning', text: 'Do not ignore a positive faecal occult blood test, abnormal cytology/HPV or suspicious mammografia. This is no longer “routine screening” but a diagnostic pathway; push for an appointment through the Centro de Saúde/USF or hospital referral.' }
      ]
    }
  ],
  costs: [
    { label: 'Participation in SNS rastreio', amountEUR: 0, note: 'Free for SNS users with a número de utente under population-based programmes.' },
    { label: 'Repeat invitation after a missed appointment', amountEUR: 0, note: 'Usually free; a new appointment is needed through the Centro de Saúde/USF or the contact in the convocatória.' },
    { label: 'Private mammografia/HPV test/colonoscopia without the SNS', amountEURMin: 40, amountEURMax: 400, note: 'Guide price for the private sector; the price depends on the clinic, insurance and sedation for colonoscopia.' }
  ],
  sources: [
    { title: 'SNS — Rastreios de base populacional', url: 'https://www.sns.gov.pt/cidadao/rastreios-de-base-populacional/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Direção-Geral da Saúde — oncological screenings and DGS standards', url: 'https://www.dgs.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'SNS 24 — contacts and navigation through the SNS', url: 'https://www.sns24.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
