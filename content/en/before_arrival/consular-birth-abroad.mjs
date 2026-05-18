export default {
  editorialVoice: 'hackportugal',
  id: 'consular-birth-abroad',
  categoryId: 'before_arrival',
  title: 'Registering a birth at a Portuguese consulate: transcrição do assento de nascimento',
  tldr: 'Transcrição do assento de nascimento is the entry of a foreign birth certificate into the Portuguese Registo Civil. It is needed by Portuguese citizens born outside Portugal, and by children of Portuguese citizens, for the Cartão de Cidadão, passport, NIF, marriage and passing citizenship on further. In 2026, the birth registration itself is usually free, but apostila, translation, postage and legalisation are paid separately. You can apply through the consulate for your place of residence or through a Conservatória/IRN in Portugal.',
  tags: ['consulate', 'birth', 'citizenship', 'irn'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'What transcrição is and when it is needed',
      content: [
        { kind: 'paragraph', text: 'If a person was born outside Portugal, their foreign birth certificate does not by itself create a Portuguese record in the Registo Civil. Transcrição do assento de nascimento is the transfer of data from a foreign record into the Portuguese civil registration system.' },
        { kind: 'paragraph', text: 'After the transcrição, a Portuguese assento de nascimento is created. On that basis, you can apply for a Cartão de Cidadão, a passport, request a Certidão de Nascimento online, and register a marriage, children and other civil-status acts.' },
        { kind: 'checklist', items: ['A child was born abroad to a Portuguese parent', 'An adult Portuguese citizen was born outside Portugal and was not previously entered in the Registo Civil', 'You need to obtain a first Cartão de Cidadão or passport at the consulate', 'You need to register a marriage, divorce or the birth of a child, but there is not yet a Portuguese record of your birth', 'You need to prove the family line for descendants’ citizenship', 'A foreign birth record is being used in Portugal for a legally significant act'] },
        { kind: 'warning', text: 'Transcrição is not the same as automatic acquisition of citizenship for any descendant. If the parent is already a Portuguese citizen, birth registration may be part of atribuição da nacionalidade. If there is not yet Portuguese citizenship in the line, a separate processo de nacionalidade under the Lei da Nacionalidade is needed first, not a simple transcrição.' }
      ]
    },
    {
      id: 'where-to-apply',
      title: 'Where to apply: consulate or IRN',
      content: [
        { kind: 'paragraph', text: 'The most typical route for those living outside Portugal is the consular section or Consulado-Geral de Portugal that serves your address. The consulate receives the documents, checks the legalisation and sends/enters the record in the Registo Civil system.' },
        { kind: 'checklist', items: ['Check the consular district: consulates usually accept only residents of their own area', 'Book an atendimento if the consulate does not accept documents by post', 'If you already live in Portugal, you can apply to a Conservatória do Registo Civil / IRN', 'If it concerns a child before obtaining a Cartão de Cidadão, the transcrição/assento is usually done first, then the CC and passport', 'If the Portuguese parent’s marriage took place abroad and has not been registered in Portugal, the consulate may require transcrição de casamento first', 'If the documents are from an EU country, ask about the multilingual standard form under EU Regulation 2016/1191: it often replaces apostila and translation'] },
        { kind: 'warning', text: 'Appointment rules, submission methods and the list of forms vary slightly between consulates. The website of the specific Consulado matters more than general forums: one consulate accepts applications by post, another requires an in-person appointment and originals.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documents usually required',
      content: [
        { kind: 'paragraph', text: 'The basic logic is simple: Portugal needs the full foreign birth record, proof of the link to the Portuguese parent and valid documents for the applicants. All names, dates and places must match the Portuguese records.' },
        { kind: 'checklist', items: ['Foreign birth certificate in full form: certidão integral / long form / full birth certificate', 'Apostila de Haia on the certificate if the country is party to the Hague Convention; otherwise consular legalisation', 'Translation into Portuguese if the document is not in Portuguese and the consulate does not accept that language', 'Assento de nascimento of the Portuguese parent or the number of their Cartão de Cidadão', 'Parents’ identity documents: passport, Cartão de Cidadão, residence permit or local ID', 'Parents’ marriage certificate, if it affects the establishment of parentage; a foreign marriage of a Portuguese citizen often needs to be transcribed first', 'Consulate application form: requerimento for registo/transcrição de nascimento', 'Proof of address in the consular district, if the consulate requires it', 'For a minor, the signature of both parents or an explanation of why only one is signing', 'Prepaid envelope if the consulate returns documents by post'] },
        { kind: 'warning', text: 'Do not send the only original unless you understand whether the consulate will return it. Many authorities require an original or certified copy, but the return procedure depends on the country and the consulate.' }
      ]
    },
    {
      id: 'process',
      title: 'How the procedure works',
      content: [
        { kind: 'substeps', items: [
          { id: 'check-consulate', title: '1. Check your consulate’s page', content: [
            { kind: 'paragraph', text: 'Find the Registos Civis → Nascimento / Transcrição de nascimento section. Download the current form and check whether an appointment, a mail-in package or a preliminary e-mail check is required.' }
          ] },
          { id: 'prepare-legalisation', title: '2. Legalise the foreign record', content: [
            { kind: 'paragraph', text: 'For Hague Convention countries, an apostila is applied. For EU documents, a multilingual form can often be used. For other countries, the chain of legalisation specified by the consulate will be required.' }
          ] },
          { id: 'submit', title: '3. Submit the package', content: [
            { kind: 'paragraph', text: 'At the appointment or by post, the consulate checks the data, accepts the application and, if necessary, requests missing documents. Payment, if any, is usually by card, money order, bank transfer or Multibanco — depending on the country.' }
          ] },
          { id: 'wait-assento', title: '4. Wait for the assento português', content: [
            { kind: 'paragraph', text: 'Timelines are not uniform: from several weeks to several months. Delays most often arise because of mismatched names, an unregistered marriage of the Portuguese parent or incomplete legalisation of the foreign certificate.' }
          ] },
          { id: 'next-documents', title: '5. Apply for the Cartão de Cidadão and passport', content: [
            { kind: 'paragraph', text: 'Once the Portuguese record exists, you can request a Certidão de Nascimento, a Cartão de Cidadão and then a passport. For a child, this is usually the next step immediately after the transcrição.' }
          ] }
        ] }
      ]
    },
    {
      id: 'pitfalls',
      title: 'Common problems and how to avoid them',
      content: [
        { kind: 'checklist', items: ['The parent’s name on the foreign certificate differs from the Portuguese assento: prepare documents on the name change or marriage', 'The certificate lists only the mother or only the father: check whether this is sufficient for atribuição da nacionalidade', 'The Portuguese parent married abroad, but the marriage has not been transcrito in Portugal: transcrição de casamento may be needed first', 'Short-form certificate without parents’ details: a full record is usually required', 'The document is old, damaged or without apostila: obtain a new copy in the country of birth', 'The translation was done by an ordinary translator without certification: clarify the requirements for certified/sworn translation', 'Submitting in the wrong consular district: the package may be returned without review', 'Expecting “urgent within a week”: for planning a move, school and passport, allow months, not days'] },
        { kind: 'warning', text: 'Lei da Nacionalidade 37/81, as subsequently amended, is in force.\n\n**On 03.05.2026 President Seguro promulgated Decreto AR 48/XVII** (new version of the Lei da Nacionalidade); it was published on 18.05.2026 as **Lei Orgânica n.º 1/2026**. The law entered into force on **19.05.2026** (the day after publication in the DR). The text of the law contains a transitional provision: cases in progress are subject to the previous version of Lei 37/81. For applications submitted BEFORE 19.05.2026, the previous Lei 37/81 applies (transitional provision).' }
      ]
    }
  ],
  costs: [
    { label: 'Transcrição de nascimento in the Portuguese Registo Civil', amountEUR: 0, note: 'Birth as a civil registration act is usually free; the consulate may charge separate fees for certifications, copies, postage or related services.' },
    { label: 'Apostila / legalisation of a foreign certificate', amountEURMin: 10, amountEURMax: 80, note: 'Depends on the country of issue; this is not a Portuguese fee.' },
    { label: 'Certified translation into Portuguese', amountEURMin: 25, amountEURMax: 80, note: 'Indicative per page in 2026; it may be higher in expensive jurisdictions.' },
    { label: 'Citizenship process, if more than transcrição is needed', amountEURMin: 175, amountEURMax: 250, note: 'Only for separate processos de nacionalidade; minor children of Portuguese citizens are often exempt, but the basis must be checked with IRN.' }
  ],
  sources: [
    { title: 'Consulate of Portugal — Registos Civis: birth, marriage, death', url: 'https://www.consuladoportugal.org/registos-civis', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'IRN — Register a birth', url: 'https://justica.gov.pt/Servicos/Registar-nascimento', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'DRE — Código do Registo Civil, Decreto-Lei 131/95', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1995-34558375', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'DRE — Lei da Nacionalidade, Lei 37/81', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/1981-34536975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-13',
  verifyIntervalDays: 90
}
