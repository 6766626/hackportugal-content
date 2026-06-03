export default {
  editorialVoice: 'hackportugal',
  id: 'boletim-saude-eletronico',
  categoryId: 'healthcare',
  title: 'Boletim de Saúde Infantil eletrónico: the child’s digital medical record',
  tldr: 'The Boletim de Saúde Infantil e Juvenil eletrónico in SNS 24 shows vaccinations under the Programa Nacional de Vacinação, Saúde Infantil appointments, height/weight and child development charts. Access is usually through the parent’s SNS 24 app with the child’s número de utente and a confirmed parental link in SNS. Foreign vaccinations do not appear automatically: Centro de Saúde enters them after checking the documents. For school, it is better to provide a declaração de vacinas, not the whole medical record.',
  tags: ['sns24', 'children', 'vaccines', 'boletim'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'What it is',
      content: [
        { kind: 'paragraph', text: 'Boletim de Saúde Infantil e Juvenil eletrónico is the digital version of the child health booklet in the SNS ecosystem. In 2026, it is available through SNS 24 and is used together with the child’s usual follow-up at a Centro de Saúde, USF or UCSP.' },
        { kind: 'paragraph', text: 'It is not a separate document for immigration and not a replacement for a doctor. It is an interface where the family sees some of the data that healthcare professionals have already entered into SNS systems.' },
        { kind: 'checklist', items: [
          'vaccination schedule and status under the Programa Nacional de Vacinação',
          'data on Saúde Infantil e Juvenil appointments',
          'height, weight and head circumference measurements, if entered by healthcare staff',
          'growth and development curves',
          'SNS 24 reminders and useful information',
          'sometimes — only part of the history, if the child has recently moved or was followed outside SNS'
        ] }
      ]
    },
    {
      id: 'access',
      title: 'How to get access in SNS 24 📱',
      content: [
        { kind: 'paragraph', text: 'First, the child needs a número de utente. It is usually arranged at the Centro de Saúde for the place of residence. For children, access to data in the SNS 24 app is opened to the parent or legal representative if the link with the child is confirmed in SNS records.' },
        { kind: 'checklist', items: [
          'install the SNS 24 app or go to sns24.gov.pt',
          'log in using Chave Móvel Digital (CMD), Cartão de Cidadão or another available authentication method',
          'check whether the child is visible in the family/children’s data section',
          'if the child does not appear, contact the Centro de Saúde and ask them to check agregado familiar / representação legal',
          'bring the child’s document, número de utente, NIF if available and proof of address',
          'for newborns born in Portugal, some data may appear after birth registration and assignment of the utente',
          'for children who have arrived from abroad, you usually need to register with SNS first'
        ] },
        { kind: 'warning', text: 'If the child already has a utente but SNS 24 is empty, this does not mean that vaccinations or appointments “do not exist”. Often the data simply has not migrated or was entered in another system. Centro de Saúde fixes this, not the app’s technical support.' }
      ]
    },
    {
      id: 'foreign-vaccines',
      title: 'How to enter vaccinations from another country',
      content: [
        { kind: 'paragraph', text: 'Foreign vaccinations do not automatically enter the Portuguese boletim. They must be checked by an enfermeiro or médico at the Centro de Saúde and entered into the SNS vaccination system. After that, they usually become visible in the electronic boletim / área de vacinas.' },
        { kind: 'checklist', items: [
          'take the original child vaccination record from the country of departure',
          'if the document is not in Portuguese, English, Spanish or French — prepare a clear translation of vaccine names and dates',
          'dates must be legible: day, month, year',
          'it is preferable to have vaccine names, series/lots and clinic stamps, if available',
          'book vacinação or consulta de enfermagem at the Centro de Saúde',
          'ask them to compare the vaccinations with Portugal’s Programa Nacional de Vacinação',
          'if there are gaps, the nurse will suggest a catch-up schedule',
          'after entry, check SNS 24 after a few days or weeks'
        ] },
        { kind: 'warning', text: 'Do not try to “translate” Russian, Ukrainian, Brazilian or other vaccine names yourself into arbitrary Portuguese equivalents. What matters are the antigens and dose dates, not the commercial name. The decision on recognition is made by an SNS healthcare professional.' }
      ]
    },
    {
      id: 'school-sharing',
      title: 'What to show the school, nursery and ATL',
      content: [
        { kind: 'paragraph', text: 'The school usually needs not the whole Boletim de Saúde Infantil, but confirmation that vaccination is up to date or specific informação de saúde. The full digital medical record contains unnecessary personal medical data that should not be sent by WhatsApp or email without need.' },
        { kind: 'checklist', items: [
          'for matrícula, a declaração / comprovativo de vacinas is most often enough',
          'this certificate can be requested at the Centro de Saúde or obtained through SNS 24, if the function is available for your profile',
          'if the child needs medication at school, a diet, an EpiPen or restrictions on physical education — ask the médico de família for a separate declaração médica',
          'do not send screenshots of the whole boletim showing appointments, height, weight and other data',
          'for a private nursery, check the list of documents in advance: requirements differ',
          'if the school asks for “boletim de vacinas”, this usually means proof of vaccinations, not the entire child record'
        ] },
        { kind: 'warning', text: 'In Portugal, the Programa Nacional de Vacinação is a free national programme and, in general, not mandatory in the sense of a fine for every dose. But there is an important exception: for matrícula (enrolment) and to sit exams at an educational establishment, up-to-date diphtheria and tetanus vaccinations are required. In addition, schools, health services and DGS may monitor epidemiological risks and request vaccination status.' }
      ]
    },
    {
      id: 'common-problems',
      title: 'Common problems and how to fix them',
      content: [
        { kind: 'substeps', items: [
          { id: 'child-not-visible', title: 'The child is not visible in the app', content: [
            { kind: 'paragraph', text: 'Check that the child has a número de utente and that the parents or legal representatives are correctly recorded at the Centro de Saúde. Sometimes an in-person visit with documents is needed.' }
          ] },
          { id: 'vaccines-missing', title: 'Vaccinations exist, but SNS 24 is empty', content: [
            { kind: 'paragraph', text: 'Book vacinação / enfermagem and ask them to check the registo de vacinas. Take the paper card or PDF from the previous country of residence.' }
          ] },
          { id: 'wrong-data', title: 'Error in the date or dose', content: [
            { kind: 'paragraph', text: 'Do not delete or correct it yourself: the patient interface usually only displays data. The correction is made by Centro de Saúde after checking the source.' }
          ] },
          { id: 'private-care', title: 'The child is followed at a private clinic', content: [
            { kind: 'paragraph', text: 'A private clinic may keep its own record, but for PNV and official vaccination status it is better to synchronise the data with Centro de Saúde. Free PNV vaccinations are given through SNS.' }
          ] }
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Access to the Boletim de Saúde Infantil eletrónico in SNS 24', amountEUR: 0, note: 'Free with access to SNS 24 and the child’s número de utente.' },
    { label: 'Vaccinations under the Programa Nacional de Vacinação', amountEUR: 0, note: 'Free in SNS for children included in the vaccination programme.' },
    { label: 'Translation of a foreign vaccination record', amountEURMin: 20, amountEURMax: 80, note: 'Not always needed; the price depends on the language, volume and whether certification is required.' }
  ],
  sources: [
    { title: 'SNS 24 — portal and app for access to SNS data', url: 'https://www.sns24.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'DGS — Programa Nacional de Vacinação and vaccination rules', url: 'https://www.dgs.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'SNS 24 — information on vaccines and boletim de vacinas', url: 'https://www.sns24.gov.pt/tema/vacinas/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
