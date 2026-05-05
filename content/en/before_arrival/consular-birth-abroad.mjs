export default {
  editorialVoice: 'hackportugal',
  id: 'consular-birth-abroad',
  categoryId: 'before_arrival',
  title: 'Registration of a birth at a Portuguese consulate: transcrição do assento de nascimento',
  tldr: 'Transcrição do assento de nascimento — entering a foreign birth certificate into the Portuguese Registo Civil. This is needed by Portuguese citizens born outside Portugal, and by children of Portuguese citizens, for Cartão de Cidadão, passport, NIF, marriage and passing citizenship on. In 2026 the registration of birth itself is usually free, but apostille, translation, post and legalisation are paid separately. You can apply through the consulate for your place of residence or a Conservatória/IRN in Portugal.',
  tags: ['consulate', 'birth', 'citizenship', 'irn'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'What a transcrição is and when it is needed',
      content: [
        { kind: 'paragraph', text: 'If a person was born outside Portugal, their foreign birth certificate by itself does not create a Portuguese record in the Registo Civil. Transcrição do assento de nascimento is the transfer of data from a foreign vital record into the Portuguese civil registration system.' },
        { kind: 'paragraph', text: 'After the transcrição a Portuguese assento de nascimento appears. On its basis you can obtain a Cartão de Cidadão, a passport, request a Certidão de Nascimento online, register a marriage, children and other civil status acts.' },
        { kind: 'checklist', items: ['A child was born abroad to a Portuguese parent', 'An adult Portuguese citizen was born outside Portugal and has not previously been entered in the Registo Civil', 'You need to obtain a first Cartão de Cidadão or passport at a consulate', 'You need to register a marriage, divorce or the birth of a child, but there is not yet a Portuguese record of your birth', 'You need to evidence the line of descent for descendants’ citizenship', 'A foreign birth record is to be used in Portugal for a legally relevant act'] },
        { kind: 'warning', text: 'Transcrição does not equal the automatic acquisition of citizenship for any descendant. If the parent is already a Portuguese citizen, the birth registration may be part of an atribuição da nacionalidade. If there is not yet Portuguese citizenship in the line, you first need a separate processo de nacionalidade under the Lei da Nacionalidade, not a simple transcrição.' }
      ]
    },
    {
      id: 'where-to-apply',
      title: 'Where to apply: consulate or IRN',
      content: [
        { kind: 'paragraph', text: 'The most typical route for those living outside Portugal is the consular section or Consulado-Geral de Portugal that covers your address. The consulate receives the documents, checks the legalisation and sends/enters the record into the Registo Civil system.' },
        { kind: 'checklist', items: ['Check the consular district: consulates usually only accept residents of their area', 'Book an appointment if the consulate does not accept documents by post', 'If you already live in Portugal, you can contact a Conservatória do Registo Civil / IRN', 'If this concerns a child before obtaining a Cartão de Cidadão, the transcrição/assento is usually done first, then the CC and passport', 'If the Portuguese parent’s marriage was concluded abroad and is not registered in Portugal, the consulate may first require a transcrição de casamento', 'If the documents are from an EU country, ask about the multilingual standard form under EU Regulation 2016/1191: it often replaces an apostille and a translation'] },
        { kind: 'warning', text: 'The rules for recording, the submission method and the list of forms differ slightly by consulate. The website of the specific Consulado matters more than general forums: one consulate accepts by post, another requires an in-person appointment and originals.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documents that are usually required',
      content: [
        { kind: 'paragraph', text: 'The basic logic is simple: Portugal needs the full foreign birth record, proof of the link to the Portuguese parent, and valid identity documents of the applicants. All names, dates and places must match the Portuguese records.' },
        { kind: 'checklist', items: ['Foreign birth certificate in full form: certidão integral / long form / full birth certificate', 'Hague apostille on the certificate if the country is a party to the Hague Convention; otherwise consular legalisation', 'Translation into Portuguese if the document is not in Portuguese and the consulate does not accept that language', 'Assento de nascimento of the Portuguese parent or their Cartão de Cidadão number', 'Parents’ identity documents: passport, Cartão de Cidadão, residence permit or local ID', 'Parents’ marriage certificate if it affects the establishment of parentage; a Portuguese citizen’s foreign marriage often needs to be transcribed first', 'Consulate application form: requerimento for registo/transcrição de nascimento', 'Proof of address in the consular district, if the consulate requires it', 'For a minor — the signatures of both parents, or an explanation of why only one signs', 'Prepaid envelope if the consulate returns documents by post'] },
        { kind: 'warning', text: 'Do not send your only original without understanding whether the consulate will return it. Many authorities require an original or a certified copy, but the return process depends on the country and the consulate.' }
      ]
    },
    {
      id: 'process',
      title: 'How the procedure works',
      content: [
        { kind: 'substeps', items: [
          { id: 'check-consulate', title: '1. Check your consulate’s page', content: [
            { kind: 'paragraph', text: 'Find the Registos Civis → Nascimento / Transcrição de nascimento section. Download the current form and check whether an appointment, a mail-in package or a preliminary email check is required.' }
          ] },
          { id: 'prepare-legalisation', title: '2. Legalise the foreign record', content: [
            { kind: 'paragraph', text: 'For Hague Convention countries an apostille is affixed. For EU documents a multilingual standard form can often be used. For other countries a chain of legalisation will be required, as indicated by the consulate.' }
          ] },
          { id: 'submit', title: '3. Submit the package', content: [
            { kind: 'paragraph', text: 'At the appointment or by post the consulate verifies the data, accepts the application and, if necessary, requests missing documents. Payment, if any, is usually by card, money order, bank transfer or Multibanco — it depends on the country.' }
          ] },
          { id: 'wait-assento', title: '4. Wait for the Portuguese assento', content: [
            { kind: 'paragraph', text: 'Timeframes are not uniform: from several weeks to several months. Delays are most often due to name mismatches, an unregistered marriage of the Portuguese parent or incomplete legalisation of the foreign birth certificate.' }
          ] },
          { id: 'next-documents', title: '5. Obtain a Cartão de Cidadão and passport', content: [
            { kind: 'paragraph', text: 'After the Portuguese record appears you can request a Certidão de Nascimento, a Cartão de Cidadão and then a passport. For a child this is usually the next step straight after the transcrição.' }
          ] }
        ] }
      ]
    },
    {
      id: 'pitfalls',
      title: 'Common problems and how to avoid them',
      content: [
        { kind: 'checklist', items: ['The parent’s name on the foreign certificate differs from the Portuguese assento: prepare documents evidencing a name change or marriage', 'Only the mother or only the father is listed on the certificate: check whether this is sufficient for an atribuição da nacionalidade', 'The Portuguese parent married abroad, but the marriage is not transcribed in Portugal: a transcrição de casamento may be needed first', 'Short-form certificate without parents’ details: a full record is usually required', 'The document is old, damaged or without an apostille: obtain a new copy in the country of birth', 'The translation was done by a regular translator without certification: check the requirements for a certified/sworn translation', 'Submission to the wrong consular district: the package may be returned without consideration', 'Expecting “urgent in a week”: for planning a move, school and a passport allow for months, not days'] },
        { kind: 'warning', text: 'The Lei da Nacionalidade 37/81 with subsequent amendments is in force. **03.05.2026 President Seguro promulgated Decreto AR 48/XVII** (new wording of the Lei da Nacionalidade); the law will enter into force on the day after publication in the Diário da República. Before applying, check the regime in the DRE; do not base a transcrição/nacionalidade strategy on rules that have not yet been published.' }
      ]
    }
  ],
  costs: [
    { label: 'Transcrição de nascimento in the Portuguese Registo Civil', amountEUR: 0, note: 'A birth as a civil registration act is usually free; the consulate may charge separate fees for certifications, copies, post or ancillary services.' },
    { label: 'Apostille / legalisation of the foreign birth certificate', amountEURMin: 10, amountEURMax: 80, note: 'Depends on the issuing country; this is not a Portuguese fee.' },
    { label: 'Certified translation into Portuguese', amountEURMin: 25, amountEURMax: 80, note: 'Benchmark per page in 2026; in expensive jurisdictions it can be higher.' },
    { label: 'Citizenship process, if more than a transcrição is needed', amountEURMin: 175, amountEURMax: 250, note: 'Only for certain processos de nacionalidade; minor children of Portuguese citizens are often exempt, but the basis must be checked with the IRN.' }
  ],
  sources: [
    { title: 'Consulate of Portugal — Civil Registration: birth, marriage, death', url: 'https://www.consuladoportugal.org/registos-civis', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'IRN — Register a birth', url: 'https://justica.gov.pt/Servicos/Registar-nascimento', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'DRE — Civil Registry Code, Decreto-Lei 131/95', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1995-34558375', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'DRE — Nationality Act, Lei 37/81', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/1981-34536975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
