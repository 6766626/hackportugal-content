export default {
  editorialVoice: 'hackportugal',
  id: 'cpap-medicina-sono',
  categoryId: 'healthcare',
  title: 'Sleep apnoea and CPAP through the SNS: from médico de família to polissonografia',
  tldr: 'If apneia obstrutiva do sono is suspected, the usual SNS route is: médico de família → referral to pneumologia/consulta do sono → polissonografia or estudo cardiorrespiratório do sono → CPAP prescription as Cuidados Respiratórios Domiciliários. Under Norma DGS 031/2011, updated on 13.07.2015, CPAP is prescribed by a doctor and supplied through a contracted provider; the patient usually does not buy the device themselves. In 2026 consultas and prescribed examinations in the SNS are in most cases exempt from taxa moderadora.',
  tags: ['sns', 'cpap', 'sleep', 'apnoea'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'when-to-suspect',
      title: 'When to see a doctor 😴',
      content: [
        { kind: 'paragraph', text: 'Sleep apnoea means repeated pauses or sharp reductions in breathing during sleep.\n\nIn Portugal, diagnosis and CPAP prescribing in the SNS are usually handled by pneumologia, neurologia or a specialised consulta do sono, but the entry point for most residents is the médico de família at the Centro de Saúde.' },
        { kind: 'checklist', items: [
          'Loud snoring almost every night',
          'Breathing pauses during sleep noticed by a partner',
          'Morning headaches, dry mouth',
          'Sleepiness while driving or at work',
          'Waking up with a feeling of choking',
          'High blood pressure, especially if poorly controlled',
          'Obesity, large neck circumference, weight gain',
          'Night sweats, frequent night-time urination',
          'Reduced concentration, irritability, depressive symptoms'
        ] },
        { kind: 'warning', text: 'If you fall asleep while driving, have had an accident/near accident due to sleepiness, or have severe daytime sleepiness, do not wait for a routine slot: ask your médico de família for an urgent assessment or call SNS 24 — 808 24 24 24.' }
      ]
    },
    {
      id: 'gp-referral',
      title: 'Step 1: médico de família and referral',
      content: [
        { kind: 'paragraph', text: 'Book an appointment at the Centro de Saúde via Balcão SNS 24, the SNS 24 app, by phone on 808 24 24 24, or directly at your unidade de saúde. At the appointment, the aim is not to “get CPAP”, but to obtain a referral for sleep diagnostics.' },
        { kind: 'checklist', items: [
          'Take your Cartão de Utente / número de utente',
          'Passport or residence permit, if your SNS card has not yet been requested at this Centro de Saúde',
          'List of medicines, especially for blood pressure, anxiety, insomnia',
          'Home blood pressure readings for 1–2 weeks, if you have hypertension',
          'A brief description of symptoms: snoring, breathing pauses, sleepiness, awakenings',
          'Video/audio of snoring and breathing pauses, if your partner can record it',
          'Information about accidents, falling asleep while driving, shift work',
          'Height, weight, recent weight changes'
        ] },
        { kind: 'paragraph', text: 'The doctor may complete the Epworth Sleepiness Scale, assess cardiovascular risks and issue a referenciação hospitalar to pneumologia/consulta do sono. In some regions, the médico de família may be able to request an exame do sono directly under a local protocol, but a specialist is more often required.' }
      ]
    },
    {
      id: 'sleep-study',
      title: 'Step 2: polissonografia or a home sleep study',
      content: [
        { kind: 'paragraph', text: 'The diagnosis is made not from snoring, but from a sleep study. In the SNS you will be referred for polissonografia in a sleep laboratory or for an estudo cardiorrespiratório do sono, often at home. The format depends on symptoms, comorbidities and availability in the region.' },
        { kind: 'checklist', items: [
          'Polissonografia completa: sleep in a laboratory, with sensors for breathing, oxygen, ECG, movements and sleep stages',
          'Estudo cardiorrespiratório domiciliário: a device is issued for use at home overnight, usually simpler and faster',
          'AHI/IAH 5–14.9: mild apnoea',
          'AHI/IAH 15–29.9: moderate apnoea',
          'AHI/IAH ≥30: severe apnoea',
          'AHI figures are not the only thing that matters: oxygen saturation, sleepiness, blood pressure, arrhythmias and professional driving are also considered',
          'If the night was atypical or sensors came loose, the study may be repeated'
        ] },
        { kind: 'warning', text: 'Do not buy CPAP “on the advice of friends” before diagnosis. The correct mode, pressure, mask and follow-up are needed. Unsuitable settings worsen tolerance and may mask other sleep disorders.' }
      ]
    },
    {
      id: 'cpap-prescription',
      title: 'Step 3: CPAP prescription as Cuidados Respiratórios Domiciliários',
      content: [
        { kind: 'paragraph', text: 'If the doctor confirms the indication, CPAP is prescribed as ventiloterapia under Cuidados Respiratórios Domiciliários. The current DGS page on this subject is Norma DGS 031/2011, updated on 13.07.2015; in everyday use it is sometimes incorrectly called “030/2011”.' },
        { kind: 'paragraph', text: 'Under the SNS, the patient usually does not buy the device: the doctor issues a prescrição, and a contracted supplier delivers the CPAP/APAP, mask, tubing and consumables. The model and supplier depend on the contract and region, not on the patient’s wish to choose a brand.' },
        { kind: 'checklist', items: [
          'Ask the doctor to clarify: CPAP, APAP or another mode',
          'Ask them to explain the target pressure or pressure range',
          'Check the mask type: nasal, almofadas nasais, oronasal',
          'Ask who the supplier is and how to contact them if there are problems',
          'Write down the therapy start date and the follow-up appointment date',
          'Clarify the rules for replacing the mask, filters and tubing',
          'Ask how data are transmitted: memory card, modem, supplier report',
          'If you are leaving Portugal for a long period, arrange servicing and consumables in advance'
        ] },
        { kind: 'warning', text: 'A device obtained through the SNS is usually part of a paid service, not your property. Do not sell it, pass it to another person or change the settings without the doctor or supplier.' }
      ]
    },
    {
      id: 'adaptation',
      title: 'The first 30–90 days: how not to give up therapy',
      content: [
        { kind: 'paragraph', text: 'CPAP only helps with regular use. The first weeks are often the hardest: dryness, air leaks, pressure on the bridge of the nose, a feeling of “I can’t breathe out”. This is a reason to adjust the mask and mode, not to stop treatment.' },
        { kind: 'checklist', items: [
          'Wear the mask during the day for 15–20 minutes to get used to it',
          'Check the mask size: leaks are often due to the wrong size',
          'For dryness, ask for a humidificador or humidity setting',
          'For nasal congestion, discuss rhinitis treatment with the doctor',
          'Do not tighten the straps too much: this increases leaks and rubbing',
          'If the pressure seems too high, ask about ramp or APAP',
          'Keep usage reports: hours, AHI on therapy, leaks',
          'After weight loss, ENT surgery, pregnancy or worsening symptoms, reassessment is needed'
        ] },
        { kind: 'paragraph', text: 'Follow-up is usually needed after a few weeks or months: the doctor reviews symptoms, hours of use, residual AHI and leaks. If CPAP is not tolerated, they may discuss changing the mask, pressure, mode, positional therapy, weight loss, a dental splint or ENT assessment.' }
      ]
    },
    {
      id: 'private-and-urgent',
      title: 'If the queue is long: the private option and what happens next',
      content: [
        { kind: 'paragraph', text: 'In Lisbon, Porto and large hospitals, the wait for a consulta do sono can be long. A private pneumologista and private polissonografia can speed up the diagnosis, but for CPAP comparticipado through the SNS you still need a prescription recognised in the SNS/CRD system.' },
        { kind: 'checklist', items: [
          'You can have a private sleep study and bring the result to your médico de família or SNS hospital',
          'Check that the report includes AHI/IAH, oxygen saturation, event type and recommendation',
          'Ask the private doctor whether they can issue a prescrição CRD if they work with the SNS/agreements',
          'If you buy a device privately, keep the invoice and medical prescription',
          'Do not cancel your SNS queue until the question of long-term servicing is resolved',
          'For drivers, pilots and safety-critical jobs, request a written opinion on fitness and sleepiness control'
        ] },
        { kind: 'warning', text: 'SNS 24 does not prescribe CPAP and does not interpret sleep studies. Its role is navigation: triagem, advice, booking or referral to the appropriate service if your condition worsens.' }
      ]
    }
  ],
  costs: [
    { label: 'Consulta in the SNS by referral', amountEUR: 0, note: 'In 2026 most consultas and prescribed examinations in the SNS are exempt from taxa moderadora.' },
    { label: 'Polissonografia / estudo do sono in the SNS', amountEUR: 0, note: 'If prescribed by an SNS doctor and carried out via the SNS route; waiting times depend on the region.' },
    { label: 'Private sleep study', amountEURMin: 150, amountEURMax: 450, note: 'Market guide price; the price depends on the laboratory, format and insurance.' },
    { label: 'Private purchase of CPAP/APAP', amountEURMin: 500, amountEURMax: 1200, note: 'Not required if CPAP is arranged through the SNS as CRD; private purchase does not replace a medical prescription.' }
  ],
  sources: [
    {
      title: 'DGS: Norma n.º 031/2011, Cuidados Respiratórios Domiciliários, updated on 13.07.2015',
      url: 'https://www.dgs.pt/em-destaque/norma-da-dgs-n0312011-de-30092011-actualizada-a-13072015.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'SNS 24: portal and SNS 24 line for access to serviços de saúde',
      url: 'https://www.sns24.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
