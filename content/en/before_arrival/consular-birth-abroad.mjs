export default {
  editorialVoice: 'hackportugal',
  id: 'consular-birth-abroad',
  categoryId: 'before_arrival',
  title: 'Registering a birth at a Portuguese consulate: transcrição do assento de nascimento',
  tldr: 'Transcrição do assento de nascimento is the entry of a foreign birth certificate into the Portuguese Registo Civil. This is needed by Portuguese citizens born outside Portugal, and by children of Portuguese citizens, for a Cartão de Cidadão, passport, NIF, marriage and passing citizenship on. In 2026 the registration of birth itself is usually free, but the apostille, translation, post and legalisation are paid separately. You can apply via the consulate for your place of residence or a Conservatória/IRN in Portugal.',
  tags: ['consulate', 'birth', 'citizenship', 'irn'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'What a transcrição is and when it is needed',
      content: [
        { kind: 'paragraph', text: 'If a person was born outside Portugal, their foreign birth certificate does not by itself create a Portuguese record in the Registo Civil. A transcrição do assento de nascimento is the transfer of the data from the foreign act into the Portuguese civil registration system.' },
        { kind: 'paragraph', text: 'After the transcrição, a Portuguese assento de nascimento exists. On its basis you can obtain a Cartão de Cidadão, a passport, request a Certidão de Nascimento online, register a marriage, children and other civil status acts.' },
        { kind: 'checklist', items: ['A child was born abroad to a Portuguese parent', 'An adult Portuguese citizen was born outside Portugal and has not previously been entered in the Registo Civil', 'You need to obtain the first Cartão de Cidadão or passport at a consulate', 'You need to register a marriage, divorce or a child’s birth, but there is not yet a Portuguese record of your birth', 'You need to evidence the line of descent for descendants’ citizenship', 'A foreign birth record is being used in Portugal for a legally significant action'] },
        { kind: 'warning', text: 'A transcrição is not the same as automatically acquiring citizenship for any descendant. If the parent is already a Portuguese citizen, the registration of birth may be part of an atribuição da nacionalidade. If there is not yet Portuguese citizenship in the line, you first need a separate processo de nacionalidade under the Lei da Nacionalidade, not a simple transcrição.' }
      ]
    },
    {
      id: 'where-to-apply',
      title: 'Where to apply: consulate or IRN',
      content: [
        { kind: 'paragraph', text: 'The most typical route for those living outside Portugal is the consular section or the Consulate‑General of Portugal that serves your address. The consulate receives the documents, checks the legalisation and sends/enters the record into the Registo Civil system.' },
        { kind: 'checklist', items: ['Check the consular district: consulates usually accept only residents of their zone', 'Book an appointment if the consulate does not accept postal applications', 'If you already live in Portugal, you can apply at a Conservatória do Registo Civil / IRN', 'If this concerns a child before obtaining a Cartão de Cidadão, the transcrição/assento is usually done first, then the CC and passport', 'If the Portuguese parent’s marriage was concluded abroad and is not registered in Portugal, the consulate may require a transcrição de casamento first', 'If the documents are from an EU country, ask about the multilingual standard form under EU Regulation 2016/1191: it often replaces the apostille and translation'] },
        { kind: 'warning', text: 'Rules for booking, how to apply and the set of forms vary slightly by consulate. The specific consulate’s website matters more than general forums: one consulate accepts by post, another requires an in‑person appointment and originals.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documents that are usually required',
      content: [
        { kind: 'paragraph', text: 'The basic logic is simple: Portugal needs the full foreign birth record, proof of the link to the Portuguese parent, and valid ID documents of the applicants. All names, dates and places must match the Portuguese records.' },
        { kind: 'checklist', items: ['Foreign birth certificate in full/long form: certidão integral / long form / full birth certificate', 'Hague Apostille on the certificate if the country is party to the Hague Convention; otherwise consular legalisation', 'Translation into Portuguese if the document is not in Portuguese and the consulate does not accept that language', 'Assento de nascimento of the Portuguese parent or their Cartão de Cidadão number', 'Parents’ identity documents: passport, Cartão de Cidadão, residence permit or local ID', 'Parents’ marriage certificate if it affects the establishment of parentage; a Portuguese citizen’s foreign marriage often needs to be transcribed first', 'Consulate application form: requerimento for registo/transcrição de nascimento', 'Proof of address in the consular district, if the consulate requires it', 'For a minor — signatures of both parents or an explanation of why only one signs', 'Pre‑paid envelope if the consulate returns documents by post'] },
        { kind: 'warning', text: 'Do not send the only original without understanding whether the consulate will return it. Many authorities require the original or a certified copy, but the return process depends on the country and the consulate.' }
      ]
    },
    {
      id: 'process',
      title: 'How the procedure works',
      content: [
        { kind: 'substeps', items: [
          { id: 'check-consulate', title: '1. Check your consulate’s page', content: [
            { kind: 'paragraph', text: 'Find the section Registos Civis → Nascimento / Transcrição de nascimento. Download the current form and check whether an appointment, a mail‑in package or prior e‑mail screening is required.' }
          ] },
          { id: 'prepare-legalisation', title: '2. Legalise the foreign record', content: [
            { kind: 'paragraph', text: 'For Hague Convention countries, an apostille is affixed. For EU documents you can often use the multilingual form. For other countries a chain of legalisation will be required as indicated by the consulate.' }
          ] },
          { id: 'submit', title: '3. Submit the package', content: [
            { kind: 'paragraph', text: 'At the appointment or by post, the consulate cross‑checks the data, accepts the application and, if necessary, requests missing documents. Payment, if any, is usually by card, money order, bank transfer or Multibanco — it depends on the country.' }
          ] },
          { id: 'wait-assento', title: '4. Wait for the assento português', content: [
            { kind: 'paragraph', text: 'Timeframes are not uniform: from several weeks to several months. Delays most often come from name mismatches, an unregistered marriage of the Portuguese parent, or incomplete legalisation of the foreign birth certificate.' }
          ] },
          { id: 'next-documents', title: '5. Obtain the Cartão de Cidadão and passport', content: [
            { kind: 'paragraph', text: 'Once the Portuguese record exists, you can request a Certidão de Nascimento, a Cartão de Cidadão and then a passport. For a child this is usually the next step immediately after the transcrição.' }
          ] }
        ] }
      ]
    },
    {
      id: 'pitfalls',
      title: 'Common problems and how to avoid them',
      content: [
        { kind: 'checklist', items: ['The parent’s name in the foreign certificate differs from the Portuguese assento: prepare documents evidencing the name change or marriage', 'Only the mother or only the father is listed in the certificate: check whether that suffices for an atribuição da nacionalidade', 'The Portuguese parent married abroad, but the marriage is not transcribed in Portugal: a transcrição de casamento may be required first', 'Short‑form certificate without parents’ details: the full record is usually needed', 'Document is old, damaged or without an apostille: obtain a new copy in the country of birth', 'Translation made by a regular translator without certification: check the requirements for a certified/sworn translation', 'Applying to the wrong consular district: the package may be returned without review', 'Expecting it “urgent in a week”: for planning a move, school and a passport, allow months, not days'] },
        { kind: 'warning', text: 'Lei da Nacionalidade 37/81 with subsequent amendments applies. **03.05.2026 President Seguro promulgated Decreto AR 48/XVII** (new version of the Lei da Nacionalidade); the law will enter into force on the day after publication in the Diário da República. Before applying, verify the regime in the DRE; do not base a transcrição/nacionalidade strategy on rules that have not yet been published.' }
      ]
    }
  ],
  costs: [
    { label: 'Transcrição de nascimento in the Portuguese Registo Civil', amountEUR: 0, note: 'Birth as a civil registration act is usually free; the consulate may charge separate fees for certifications, copies, post or ancillary services.' },
    { label: 'Apostille / legalisation of the foreign birth certificate', amountEURMin: 10, amountEURMax: 80, note: 'Depends on the issuing country; this is not a Portuguese fee.' },
    { label: 'Certified translation into Portuguese', amountEURMin: 25, amountEURMax: 80, note: 'Indicative per page in 2026; in high‑cost jurisdictions it may be higher.' },
    { label: 'Citizenship process, if more than just a transcrição is needed', amountEURMin: 175, amountEURMax: 250, note: 'Only for certain processos de nacionalidade; minor children of Portuguese citizens are often exempt, but the ground must be checked with the IRN.' }
  ],
  sources: [
    { title: 'Consulate of Portugal — Civil Registry: birth, marriage, death', url: 'https://www.consuladoportugal.org/registos-civis', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'IRN — Register a birth', url: 'https://irn.justica.gov.pt/Servicos/Registar-nascimento', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'DRE — Civil Registry Code, Decree-Law 131/95', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1995-34558375', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'DRE — Nationality Law, Law 37/81', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/1981-34536975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
