export default {
  editorialVoice: 'hackportugal',
  id: 'subsidio-doenca-baixa-medica',
  categoryId: 'work_business',
  title: 'Subsídio de Doença / Baixa Médica — sick leave for an employee',
  tldr: 'In Portugal, sick leave for an employee is handled through a CIT — certificado de incapacidade temporária. It is issued by a médico de família, the SNS/a hospital or another authorised doctor; a short ausência of up to 3 days can be self-declared via SNS24, but this is not a paid subsídio. Segurança Social usually pays from the 4th day: 55% of the remuneração de referência up to 30 days, 60% for 31–90, 70% for 91–365, 75% after 365. Payment is made from the 1st day in cases of hospitalisation, outpatient surgery, tuberculosis and certain exceptions.',
  tags: ['sick-leave', 'illness', 'segurança-social', 'work'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'What baixa médica is and who pays',
      content: [
        { kind: 'paragraph', text: 'Baixa médica is temporary incapacity for work. For Segurança Social, it exists only as a CIT: certificado de incapacidade temporária para o trabalho. An ordinary doctor’s note without a CIT may justify your absence to your employer, but it does not trigger payment of subsídio de doença.' },
        { kind: 'paragraph', text: 'For a trabalhador por conta de outrem, payment is made by Segurança Social, not by the employer. The employer records an ausência justificada, stops paying salary for the sick-leave days, and Segurança Social transfers the benefit to your IBAN if the conditions are met.' },
        { kind: 'checklist', items: [
          'You work under a contrato de trabalho and declarações de remunerações are submitted for you to Segurança Social',
          'You have a NISS and active registration with Segurança Social',
          'The CIT has been issued by a doctor and sent electronically to Segurança Social',
          'You have informed your employer of the sick leave within the deadline used by the company',
          'Your IBAN has been added in Segurança Social Direta',
          'The prazo de garantia has been met: usually 6 months with registered earnings',
          'For employees, the índice de profissionalidade is required: at least 12 paid days in the first 4 months of the last 6 before the illness'
        ] }
      ]
    },
    {
      id: 'how-to-open',
      title: 'How to open sick leave: CIT, médico de família, SNS24',
      content: [
        { kind: 'paragraph', text: 'If you are genuinely ill and cannot work, the standard route is a doctor. This may be a médico de família at a Centro de Saúde, SNS care, a hospital or an authorised doctor who can issue a CIT. The CIT is usually sent to Segurança Social electronically; you are given a paper/digital copy with dates and codes.' },
        { kind: 'substeps', items: [
          { id: 'call-or-book', title: '1. Contact SNS24 or the Centro de Saúde', content: [
            { kind: 'paragraph', text: 'Call SNS24: 808 24 24 24, use the SNS24 app/portal or contact your Centro de Saúde. For urgent symptoms, call 112 or go to urgência.' }
          ] },
          { id: 'doctor-issues-cit', title: '2. Get the CIT from the doctor', content: [
            { kind: 'paragraph', text: 'The doctor states the period of incapacidade, the type of illness and the regime: whether you may leave home, whether hospitalisation is needed, and whether there is an extension. Dates matter: Segurança Social calculates payment by calendar days, not only working days.' }
          ] },
          { id: 'tell-employer', title: '3. Inform your employer', content: [
            { kind: 'paragraph', text: 'Send your employer proof of the baixa: a copy of the CIT or the details for verification. Do not send unnecessary medical details — the employer needs the dates and the fact that the absence is justified, not the diagnosis.' }
          ] },
          { id: 'check-ssd', title: '4. Check Segurança Social Direta', content: [
            { kind: 'paragraph', text: 'Go to Segurança Social Direta → Doença / Prestações and check whether the case has appeared. If no IBAN is listed, add it in advance: without an IBAN, payment is delayed.' }
          ] }
        ] }
      ]
    },
    {
      id: 'three-day-sns24',
      title: '⚠️ Up to 3 days via SNS24: convenient, but usually unpaid',
      content: [
        { kind: 'paragraph', text: 'In Portugal there is an autodeclaração de doença via SNS24: the worker self-declares illness for up to 3 consecutive days. This is a way to justify absence to the employer without visiting a doctor.' },
        { kind: 'checklist', items: [
          'Done through SNS24, the SNS24 app or Linha SNS24',
          'Maximum of 3 consecutive days at a time',
          'Can be used no more than 2 times per calendar year',
          'The employer can verify the document using a code',
          'It is not a CIT from a doctor',
          'Segurança Social does not pay subsídio de doença for this autodeclaração',
          'If the illness continues, you need a doctor and a CIT from the 4th day or from the actual date that the doctor can reasonably state'
        ] },
        { kind: 'warning', text: 'Do not confuse “justifying an absence” with “receiving a benefit” — they are different things. The SNS24 autodeclaração resolves the disciplinary issue at work, but it does not create a right to money from Segurança Social.' }
      ]
    },
    {
      id: 'payment-rules',
      title: 'How much is paid and from which day',
      content: [
        { kind: 'paragraph', text: 'The amount is calculated from the remuneração de referência — the daily base calculated from salaries registered with Segurança Social. In simplified terms: earnings from the first 6 months of the 8 months before the month in which the illness starts are taken and divided by 180. Holiday/Christmas subsidies may be counted under special rules, so the actual base in Segurança Social may differ from your “take-home pay”.' },
        { kind: 'checklist', items: [
          'Up to 30 days of illness: 55% of the remuneração de referência',
          'From the 31st to the 90th day: 60%',
          'From the 91st to the 365th day: 70%',
          'From the 366th day: 75%',
          'With a low base or 3+ children/a child with a disability, the first rates may increase by 5 percentage points under Segurança Social conditions',
          'For an employee, the usual período de espera is 3 days: payment starts from the 4th day',
          'Payment is made from the 1st day in cases of internamento hospitalar, cirurgia de ambulatório, tuberculose and in some situations related to parentalidade',
          'The maximum duration for a trabalhador por conta de outrem is usually 1095 days; a special regime applies for tuberculosis'
        ] },
        { kind: 'paragraph', text: 'Example: if your remuneração de referência is notionally €60 per day, then for a normal baixa of 10 calendar days Segurança Social will pay only for days 4–10: 7 × €60 × 55% = €231. In the standard case, the first 3 days are not paid by Segurança Social.' },
        { kind: 'warning', text: 'Subsídio de doença is not the same as salary. If you have rent, a loan or dependentes, keep a reserve: with a short illness, the loss is often felt precisely because of the first 3 unpaid days and the 55% rate.' }
      ]
    },
    {
      id: 'employee-actions',
      title: 'What an employee should do to avoid losing money',
      content: [
        { kind: 'checklist', items: [
          'Check that you have a NISS and access to Segurança Social Direta',
          'Add and confirm your IBAN in Segurança Social Direta in advance',
          'Keep a copy of the CIT and the verification codes for your employer',
          'Inform your employer about the illness as early as possible: email, HR portal, Slack/Teams — whatever is used in the company',
          'If the doctor extends the baixa, make sure the new CIT has no gap in dates',
          'If the case has not appeared in Segurança Social Direta after a few days, call Segurança Social or check with the doctor whether the CIT was sent',
          'Do not work during baixa if the CIT prohibits work: this may lead to repayment of the benefit and problems with the employer',
          'If you become ill during férias, urgently check the holiday postponement rules with HR: a medical document and compliance with the procedure are required'
        ] },
        { kind: 'paragraph', text: 'The money usually arrives by bank transfer from Segurança Social. Timings depend on how quickly the CIT entered the system, whether you have a confirmed IBAN and whether there are any discrepancies in the employer’s contribuições.' }
      ]
    },
    {
      id: 'edge-cases',
      title: 'Common situations for expats',
      content: [
        { kind: 'paragraph', text: 'If you have moved recently and have been working in Portugal for less than 6 months, you may not yet have a right to subsídio de doença: Segurança Social looks at registered earning periods. Within the EU, social security coordination rules may sometimes apply, but this is a separate procedure with documents from the country of previous insurance.' },
        { kind: 'checklist', items: [
          'You have a contract, but the employer has not paid contribuições: the benefit may get stuck — check your carreira contributiva',
          'You are on recibos verdes: the rules are similar, but the waiting period and limits differ from those for a trabalhador por conta de outrem',
          'You are in a probationary period: the right to baixa does not disappear, but correct communication with the employer is needed',
          'Remote work from home during baixa is not a “safe compromise”: if you are unfit for work, you cannot work without an authorised regime',
          'You do not need to disclose the diagnosis to the employer; medical information is protected',
          'If the illness is connected to an acidente de trabalho or doença profissional, this is not ordinary subsídio de doença — the insurer/occupational risks regime becomes involved'
        ] },
        { kind: 'warning', text: 'Do not sign up to a “voluntary” unpaid absence instead of baixa if you are genuinely ill. This deprives you of the standard CIT trail and may cost you the benefit.' }
      ]
    }
  ],
  costs: [
    { label: 'Autodeclaração de doença via SNS24', amountEUR: 0, note: 'Free, up to 3 days, maximum 2 times per year; usually without payment of subsídio de doença' },
    { label: 'SNS appointment to obtain a CIT', amountEUR: 0, note: 'In the SNS, user charges for most primary appointments have been abolished; a private consultation is paid according to the clinic/insurance tariff' },
    { label: 'Minimum wage SMN 2026', amountEUR: 920, note: 'Reference point for salaries; the benefit is calculated not from the SMN, but from the registered remuneração de referência' },
    { label: 'IAS 2026', amountEUR: 537.13, note: 'Social benefits indicator; used in a number of Segurança Social limits and minimum rules' }
  ],
  sources: [
    { title: 'Segurança Social — Subsídio de Doença', url: 'https://www.seg-social.pt/subsidio-de-doenca', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'SNS24 — medical services portal and autodeclaração de doença', url: 'https://www.sns24.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código do Trabalho — justified absences due to illness', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2009-34546475', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
