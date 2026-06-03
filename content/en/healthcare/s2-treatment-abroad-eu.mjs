export default {
  editorialVoice: 'hackportugal',
  id: 's2-treatment-abroad-eu',
  categoryId: 'healthcare',
  title: 'S2 form: planned treatment in another EU country paid for by the SNS',
  tldr: 'S2 is prior authorisation from the SNS for planned treatment in another EU/EEA/Swiss country under Reg. 883/2004 rules. It is not an EHIC: Cartão Europeu de Seguro de Doença covers sudden medical care during travel, while S2 is needed before surgery, therapy or a consultation abroad. The request usually goes through your médico de família or SNS hospital and the competent Administração Regional de Saúde/ULS. Without S2, you may be billed; an alternative route is reimbursement under Lei 52/2014, but it is limited to SNS tariffs and often requires autorização prévia.',
  tags: ['sns', 's2', 'treatment', 'eu'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-s2-is',
      title: 'What S2 is and when it is needed',
      content: [
        { kind: 'paragraph', text: 'The S2 form is a prior authorisation document for planned treatment outside Portugal, but within the EU/EEA/Switzerland. It is based on the coordination of EU social security systems: you remain insured in Portugal through the SNS, while the treatment is provided by a public clinic, or one connected to the public system, in another country.' },
        { kind: 'paragraph', text: 'Classic cases include surgery, specialist diagnostics, oncology treatment, a consultation at a reference centre, or therapy that cannot be obtained in Portugal in time, or cannot be obtained at all for medical reasons.' },
        { kind: 'checklist', items: [
          'S2 is arranged BEFORE treatment, not after the trip.',
          'Only the agreed treatment stated in the authorisation is covered.',
          'The receiving clinic must operate within the public system of the country of treatment or have an agreement with it.',
          'Payment follows the rules and tariffs of the country of treatment, as for a local patient in that country.',
          'The patient usually pays local copagamentos/taxas moderadoras, if they exist.',
          'Travel, accommodation, an interpreter and accompaniment are usually not covered automatically.',
          'S2 does not replace travel insurance and does not cover a private clinic “of your choice” if it is outside the public system.'
        ] }
      ]
    },
    {
      id: 's2-vs-ehic',
      title: 'Do not confuse it with EHIC / CESD',
      content: [
        { kind: 'paragraph', text: 'EHIC in Portuguese is Cartão Europeu de Seguro de Doença, CESD. It is for sudden necessary care during a temporary trip: injury, infection, a flare-up of an illness, an urgent consultation. It is not intended for the situation “I am deliberately going to Germany/Spain/France for treatment”.' },
        { kind: 'checklist', items: [
          'EHIC/CESD: emergency or medically necessary care during a trip.',
          'S2: pre-planned treatment abroad.',
          'EHIC/CESD can be shown at a hospital in the event of a sudden problem.',
          'S2 must be obtained before the date of hospitalisation/procedure.',
          'EHIC/CESD does not guarantee payment for planned surgery.',
          'S2 does not cover arbitrary treatment beyond the authorised scope.'
        ] },
        { kind: 'warning', text: 'If you travel for planned surgery without S2 and without another type of autorização prévia, a hospital in another EU country may issue the full bill in your name. Subsequent reimbursement through the SNS is not guaranteed.' }
      ]
    },
    {
      id: 'eligibility',
      title: 'Who can request S2 in Portugal',
      content: [
        { kind: 'paragraph', text: 'In practical terms, you need SNS user status and confirmation that Portugal is your competent country for healthcare cover. For an expat, this usually means residência in Portugal, número de utente, NIF, an address, and being linked to a Centro de Saúde/ULS. Citizenship is not the key factor; what matters more is which country is responsible for your healthcare provision.' },
        { kind: 'checklist', items: [
          'You have a número de utente SNS.',
          'You actually live in Portugal and are registered with a Centro de Saúde/ULS.',
          'There is a medical opinion from an SNS doctor or SNS hospital on the need for treatment.',
          'The treatment falls within the scope of care that the SNS would in principle cover in Portugal.',
          'In Portugal, the treatment cannot be provided within a medically justifiable time — the timeframe must be assessed taking into account the diagnosis, pain, risk of deterioration and clinical urgency.',
          'There is a receiving clinic/hospital in another EU/EEA/Swiss country willing to accept you under S2.',
          'You are not trying to bypass a waiting list solely because of a personal preference for a clinic, if the treatment is available in Portugal within an acceptable timeframe.'
        ] },
        { kind: 'warning', text: 'S2 is not a “right to choose any best clinic in Europe at the expense of the SNS”. Authorisation is granted on the basis of medical necessity and public system rules, not on the basis of a commercial offer from a private hospital.' }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'How to request S2 through the SNS',
      content: [
        { kind: 'substeps', items: [
          { id: 'medical-justification', title: '1. Obtain medical justification in the SNS', content: [
            { kind: 'paragraph', text: 'Start with your médico de família, a specialist or an SNS hospital. You need a relatório médico: diagnosis, treatment history, why the specific procedure is needed, why waiting in Portugal is clinically unacceptable or why the method is unavailable.' }
          ] },
          { id: 'foreign-provider', title: '2. Find a receiving institution', content: [
            { kind: 'paragraph', text: 'Ask the clinic in another EU country for written confirmation: institution name, department, doctor, treatment plan, estimated dates, procedure code/description, and confirmation that the institution operates within the public system or accepts patients under S2.' }
          ] },
          { id: 'submit-request', title: '3. Submit a pedido de autorização prévia', content: [
            { kind: 'paragraph', text: 'In practice, the file is submitted through your ULS/Centro de Saúde/SNS hospital and sent to the competent Administração Regional de Saúde or the relevant SNS structure. The route differs by region, so ask for a written process number and a contact for the responsible department.' },
            { kind: 'checklist', items: [
              'Passport or Cartão de Cidadão / residence permit.',
              'Número de utente SNS.',
              'NIF and Portuguese address.',
              'Relatório médico from the SNS.',
              'Documents about the waiting list or impossibility of treatment in Portugal, if any.',
              'Letter from the receiving hospital abroad.',
              'Treatment plan and dates.',
              'Contacts for the doctor/department in the other country.',
              'Your contacts: phone, email, address.'
            ] }
          ] },
          { id: 'wait-decision', title: '4. Wait for the written decision and the S2 form', content: [
            { kind: 'paragraph', text: 'Do not buy non-refundable tickets or confirm hospitalisation before receiving authorisation. After approval, you will be issued with S2 or an equivalent document to present to the receiving hospital.' }
          ] }
        ] }
      ]
    },
    {
      id: 'payment-and-limits',
      title: 'What will be paid for and what remains your responsibility',
      content: [
        { kind: 'paragraph', text: 'Under S2, treatment is paid for between healthcare systems: Portugal, as the competent country, covers the authorised care, and the country of treatment applies its own public rules. If local patients pay part of the cost, you may be asked to pay the same part.' },
        { kind: 'checklist', items: [
          'Only the treatment stated in the S2 is covered.',
          'If the doctor abroad adds a new procedure, clarify in advance whether a new autorização is needed.',
          'Copagamentos in the country of treatment may remain your responsibility.',
          'Private top-ups, a single room, premium services and administrative fees may not be covered.',
          'The patient’s travel and accommodation are usually not included in S2.',
          'An accompanying person, interpreter, childcare, loss of income — these are not standard SNS cover.',
          'Keep all documents: invoices, discharge report, prescriptions, proof of payments.',
          'After returning, give the relatório clínico to your SNS doctor so that follow-up can continue in Portugal.'
        ] },
        { kind: 'warning', text: 'If the receiving clinic asks for an advance payment, first check with the Portuguese side whether this is compatible with S2. Not all commercial offers from private clinics can be paid through the SNS.' }
      ]
    },
    {
      id: 'if-refused',
      title: 'If S2 is refused or treatment has already been paid for',
      content: [
        { kind: 'paragraph', text: 'A refusal must give reasons. Common reasons: the treatment is available in Portugal within a clinically acceptable timeframe; the procedure is not covered by the SNS; the chosen clinic is not suitable for S2; there are insufficient medical documents.' },
        { kind: 'checklist', items: [
          'Ask for the written decision with the reasons for refusal.',
          'Ask your SNS doctor to supplement the relatório médico with the clinical risks of waiting.',
          'Check whether you can choose another receiving hospital in the EU public system.',
          'Clarify the deadline and procedure for reclamação/recurso in your process.',
          'If you have already paid for treatment, ask about the reimbursement route under Lei 52/2014 on cuidados de saúde transfronteiriços.',
          'Under Lei 52/2014, reimbursement is usually limited to the amount the SNS would have paid in Portugal, and some types of care require prior autorização.',
          'For urgent care during travel, use EHIC/CESD, not S2.'
        ] },
        { kind: 'warning', text: 'Judicial or administrative appeal only makes sense with a strong medical evidence base. Wording such as “better service” or “shorter queue” without clinical risk is usually weak.' }
      ]
    }
  ],
  costs: [
    { label: 'Submitting an S2 request to the SNS', amountEUR: 0, note: 'There is usually no state fee for the form itself; costs begin with translations, travel and co-payments in the country of treatment.' },
    { label: 'Copagamentos in the country of treatment', amountEURMin: 0, amountEURMax: 9999, note: 'They depend on the rules of the country and the specific procedure; clarify this in writing with the receiving hospital before travelling.' },
    { label: 'Translation of medical documents', amountEURMin: 20, amountEURMax: 80, note: 'Indicative price per page from a translator; a certified translation is not always required, but the clinic may ask for one.' }
  ],
  sources: [
    {
      title: 'European Commission Your Europe: planned treatment abroad and reimbursement of expenses',
      url: 'https://europa.eu/youreurope/citizens/health/planned-healthcare/expenses-reimbursements/index_en.htm',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Regulation (EC) No 883/2004 on the coordination of social security systems',
      url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32004R0883',
      kind: 'law',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Lei n.º 52/2014: cuidados de saúde transfronteiriços in Portugal',
      url: 'https://diariodarepublica.pt/dr/detalhe/lei/52-2014-55606457',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DGS: national contact point for cuidados de saúde transfronteiriços',
      url: 'https://www.dgs.pt/paginas-de-sistema/saude-de-a-a-z/cuidados-de-saude-transfronteiricos.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
