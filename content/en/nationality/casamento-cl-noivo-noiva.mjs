export default {
  editorialVoice: 'hackportugal',
  id: 'casamento-cl-noivo-noiva',
  categoryId: 'nationality',
  title: 'Casamento Civil: steps and documents for foreigners',
  tldr: 'Casamento Civil in Portugal is arranged through the Conservatória do Registo Civil or a Notário. Foreign residents and non-residents follow the same process: at least 30 days in advance, they submit the declaração de não-impedimento / processo preliminar, passports and certificates of marital status. Foreign documents need an apostille/legalisation and translation into PT. The basic ceremony is around €140; an off-site venue is an additional around €450. Usually, 2 witnesses with documents are used.',
  tags: ['marriage', 'registry office', 'irn', 'documents'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'What Casamento Civil is in Portugal',
      content: [
        { kind: 'paragraph', text: 'Casamento Civil is an official civil marriage registered at the Conservatória do Registo Civil, through IRN or with a Notário authorised to conduct civil marriages. A religious ceremony on its own does not replace civil registration unless it is carried out in the legally prescribed form.' },
        { kind: 'paragraph', text: 'Foreigners follow the same process as Portuguese citizens: a preliminary check for impediments to marriage, submission of documents, setting a date, the ceremony and entry in the registo civil.' },
        { kind: 'checklist', items: [
          'A residence permit in Portugal is not required for the marriage itself',
          'Valid identity documents for both future spouses are required',
          'Birth and marital status documents from the country of citizenship are required',
          'Documents not in Portuguese usually require an official translation',
          'Foreign documents usually must have an Apostila de Haia or consular legalisation',
          'It is better to start the process at least 30 days before the ceremony date',
          'After approval, do not delay the process: the documents and the Conservatória decision have an expiry period'
        ] }
      ]
    },
    {
      id: 'where-to-apply',
      title: 'Where to submit the application',
      content: [
        { kind: 'paragraph', text: 'The application is submitted at any Conservatória do Registo Civil, not necessarily the one for your address. You can also use the IRN online services if the applicants have access to Portuguese digital identification, or contact a Notário if they provide the casamento civil service.' },
        { kind: 'checklist', items: [
          'Conservatória do Registo Civil — the standard route through IRN',
          'IRN counter in a Loja de Cidadão — if the registo civil service is available there',
          'Notário — more convenient for a private ceremony, but check their authority and the cost',
          'Online application is not possible for all foreigners: in-person submission is often required because documents must be checked',
          'For a couple where one person does not speak Portuguese, check in advance whether an interpreter is needed at the ceremony',
          'If one of the future spouses cannot attend in person, ask the Conservatória about a procuração with the required powers'
        ] },
        { kind: 'warning', text: 'Do not plan a restaurant, flights and guests until the Conservatória has confirmed. The most common delay for foreigners is not the date at the Conservatória, but redoing the certificate of marital status, apostille or translation.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documents for foreigners',
      content: [
        { kind: 'paragraph', text: 'The exact list depends on citizenship, family history and the country that issued the documents. But the basic set is almost always the same: identity, birth, absence of impediments to marriage, and proof that any previous marriage has ended, if there was one.' },
        { kind: 'checklist', items: [
          'Passport or Cartão de Cidadão / cartão de residência, if available',
          'NIF — often requested for payments and identification, although the key document is the passport/ID',
          'Certidão de nascimento: birth certificate or extract from the birth register',
          'Certificado de capacidade matrimonial, declaração de estado civil or declaração de não-impedimento — a document confirming that the person can marry',
          'If there was a divorce: certidão de casamento com averbamento do divórcio or a court divorce decision',
          'If the previous spouse died: certidão de óbito',
          'Apostila de Haia for documents from countries that are parties to the Hague Convention',
          'Consular legalisation if the country does not use the Apostila de Haia',
          'Official translation into Portuguese if the document is not in PT',
          'Details of 2 witnesses: names, documents, contacts; they attend the ceremony with a passport/ID'
        ] },
        { kind: 'paragraph', text: 'For citizens of some countries, the certificate of legal capacity to marry is issued by the consulate in Portugal. For other countries, the document must be obtained at home — from a registry office, civil registration authority, court or via an electronic register. The Conservatória looks not at the document title but at its content: it must be clear that the applicant is not married and that there are no legal impediments.' },
        { kind: 'warning', text: 'A “single / unmarried” certificate without an indication of the competent authority, without an apostille or without a translation may be rejected. Before ordering the document, send a sample to the Conservatória or check the wording.' }
      ]
    },
    {
      id: 'timeline',
      title: 'Timelines: what to do 30+ days in advance',
      content: [
        { kind: 'substeps', items: [
          { id: 's1-collect', title: '1. 2–3 months in advance: collect documents', content: [
            { kind: 'paragraph', text: 'Obtain recent birth and marital status documents. For foreign civil records, the Conservatória often expects a recent extract rather than an old laminated certificate from the family archive.' }
          ] },
          { id: 's2-apostille', title: '2. 1–2 months in advance: apostille and translation', content: [
            { kind: 'paragraph', text: 'Obtain the Apostila de Haia or arrange consular legalisation. Then prepare a translation into Portuguese. It is better to use a translator whose signature can be notarised, or a translation through a consulate/recognised translator.' }
          ] },
          { id: 's3-apply', title: '3. At least 30 days in advance: Conservatória', content: [
            { kind: 'paragraph', text: 'Submit the pedido de casamento / processo preliminar and declaração de não-impedimento. The officer checks the documents, identity, marital status and absence of impedimentos matrimoniais.' }
          ] },
          { id: 's4-date', title: '4. After approval: ceremony date and format', content: [
            { kind: 'paragraph', text: 'You choose a ceremony at the Conservatória/Notário or off-site — for example, at a quinta, hotel, garden or private venue. For an off-site ceremony, an available officer, address, time and extra fee are required.' }
          ] },
          { id: 's5-ceremony', title: '5. On the wedding day: documents and witnesses', content: [
            { kind: 'paragraph', text: 'Both future spouses attend with the original documents. Witnesses bring a passport, Cartão de Cidadão or cartão de residência. If one of the spouses does not understand Portuguese, agree an interpreter in advance.' }
          ] }
        ] }
      ]
    },
    {
      id: 'ceremony-and-property',
      title: 'Ceremony, surname and property regime',
      content: [
        { kind: 'paragraph', text: 'During the process, you indicate which property regime will apply. If no marital agreement is chosen, the default is usually comunhão de adquiridos — joint ownership of property acquired after marriage, with exceptions for personal property.' },
        { kind: 'checklist', items: [
          'Comunhão de adquiridos — the standard regime without a marital agreement',
          'Separação de bens — a separate property regime, usually requiring a convenção antenupcial',
          'Comunhão geral — a general community property regime, not available in all family situations',
          'Convenção antenupcial is arranged before the marriage with a Notário or at the Conservatória',
          'The surname does not change automatically after marriage: the declaration choosing a name is made as part of the registration',
          'If you have active visas, residence permits, bank accounts and tax profiles, consider in advance whether to change your surname',
          'After registration, you can request a certidão de casamento for AIMA, Finanças, a bank, SNS or nationality procedures'
        ] },
        { kind: 'warning', text: 'Marriage to a Portuguese citizen does not in itself grant automatic nationality or a residence permit. Nationality through marriage is a separate procedure with IRN, and a family residence permit is handled through AIMA under its own rules.' }
      ]
    },
    {
      id: 'after-marriage',
      title: 'After registration: what to update',
      content: [
        { kind: 'paragraph', text: 'After the ceremony, the entry is made in the registo civil. If the marriage was concluded in Portugal, the Portuguese certidão de casamento is usually available through IRN. For use abroad, an international form, apostille or translation may be required.' },
        { kind: 'checklist', items: [
          'Request a certidão de casamento from IRN if a paper document is needed',
          'Notify Finanças if marital status changes for IRS',
          'Update details with the bank and insurer if the surname or status changes',
          'Notify the employer if changes are needed in payroll or family benefits',
          'Check whether the marriage needs to be registered in the country of citizenship',
          'For a residence permit through family reunification, prepare the certidão de casamento for AIMA',
          'For future nationality, keep all versions of documents and proof of living together'
        ] },
        { kind: 'warning', text: 'If the document is needed outside Portugal, a standard certidão de casamento in PT may be insufficient. Check the requirements of the receiving country: multilingual extract, Apostila de Haia or certified translation.' }
      ]
    }
  ],
  costs: [
    { label: 'Casamento Civil at the Conservatória or with a Notário', amountEUR: 140, note: 'Guide price for a standard ceremony and registration; confirm the final amount when booking with IRN/Notário.' },
    { label: 'Off-site ceremony outside the Conservatória', amountEUR: 450, note: 'Additional fee for the chosen venue; it may be added to the basic cost and depend on the time, place and officer availability.' },
    { label: 'Convenção antenupcial', amountEURMin: 100, amountEURMax: 250, note: 'If a marital agreement or non-standard property regime is needed; the price depends on the Conservatória/Notário and the content.' },
    { label: 'Translation and notarisation', amountEURMin: 30, amountEURMax: 120, note: 'Per document; depends on the language, urgency and translator.' },
    { label: 'Apostila de Haia abroad', amountEURMin: 10, amountEURMax: 80, note: 'Not a Portuguese fee; depends on the country issuing the document.' }
  ],
  sources: [
    {
      title: 'Justiça.gov.pt — Marriage: how to start the process and which documents are needed',
      url: 'https://justica.gov.pt/Servicos/Iniciar-processo-de-casamento',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'IRN — Registo Civil and serviços de casamento',
      url: 'https://irn.justica.gov.pt/Servicos/Cidadao/Casamento',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'IRN — Tabela de emolumentos do registo civil',
      url: 'https://irn.justica.gov.pt/Servicos/Tabela-de-Emolumentos',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
