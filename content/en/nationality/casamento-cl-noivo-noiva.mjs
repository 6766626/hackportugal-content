export default {
  editorialVoice: 'hackportugal',
  id: 'casamento-cl-noivo-noiva',
  categoryId: 'nationality',
  title: 'Casamento Civil: steps and documents for foreigners',
  tldr: 'Casamento Civil in Portugal is arranged through the Conservatória do Registo Civil / IRN. The ceremony is conducted by a conservador or oficial de registos, NOT a notary; a notário is needed for a convenção antenupcial (prenuptial agreement), but not for the marriage registration itself. Foreign residents and non-residents follow the same process: at least 30 days in advance they submit the processo preliminar, passports and certificates of marital status. Foreign documents require an apostille/legalisation and translation into PT. The standard fee for processo + registo de casamento under the Regulamento Emolumentar is approximately from €120; an off-site ceremony outside the Conservatória is a separate surcharge under the IRN table, depending on the day of the week and distance. Usually 2 witnesses with documents are required.',
  tags: ['marriage', 'civil registry office', 'irn', 'documents'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'What Casamento Civil is in Portugal',
      content: [
        { kind: 'paragraph', text: 'Casamento Civil is an official civil marriage registered at the Conservatória do Registo Civil (IRN). The ceremony is conducted by a conservador or oficial de registos. A notário is not the usual authority for registering a civil marriage — they are needed for a convenção antenupcial (prenuptial agreement), if a non-standard property regime is chosen. A religious ceremony by itself does not replace civil registration unless it is carried out in the form established by law (católico with effects under the Concordata — a separate procedure).' },
        { kind: 'paragraph', text: 'Foreigners go through the same process as Portuguese citizens: preliminary verification of marriage impediments, submission of documents, setting the date, ceremony and entry in the registo civil.' },
        { kind: 'checklist', items: [
          'A residence permit in Portugal is not required for the marriage itself',
          'Valid identity documents are required for both future spouses',
          'Birth and marital status documents from the country of citizenship are required',
          'Documents not in Portuguese usually require an official translation',
          'Foreign documents usually need an Apostila de Haia or consular legalisation',
          'It is best to start the process at least 30 days before the ceremony date',
          'After approval, do not delay the process: the documents and the Conservatória decision have a validity period'
        ] }
      ]
    },
    {
      id: 'where-to-apply',
      title: 'Where to submit the application',
      content: [
        { kind: 'paragraph', text: 'The application is submitted to any Conservatória do Registo Civil; it does not have to be the one for your home address. You can also use IRN online services if the applicants have access to Portuguese digital identification. For a convenção antenupcial (prenuptial agreement), you can contact a Notário or the Conservatória — but the notário does not conduct the marriage registration itself.' },
        { kind: 'checklist', items: [
          'Conservatória do Registo Civil — the standard route through IRN; the ceremony is led by a conservador/oficial de registos',
          'IRN desk in a Loja de Cidadão — if registo civil services are available there',
          'Convenção antenupcial (prenuptial agreement) — drawn up by a Notário OR at the Conservatória before the marriage, if a non-standard property regime is chosen',
          'Online application is not available to all foreigners: in-person submission is often needed because documents must be checked',
          'For a couple where one person does not speak Portuguese, check in advance whether an interpreter is required at the ceremony',
          'If one of the future spouses cannot attend in person, ask the Conservatória about a procuração with the required powers'
        ] },
        { kind: 'warning', text: 'Do not plan the restaurant, flights and guests before the Conservatória confirmation. The most common delay for foreigners is not the date at the Conservatória, but redoing the marital status certificate, apostille or translation.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documents for foreigners',
      content: [
        { kind: 'paragraph', text: 'The exact list depends on citizenship, family history and the country where the documents were issued. But the basic set is almost always the same: identity, birth, absence of impediments to marriage, and confirmation of termination of any previous marriage, if there was one.' },
        { kind: 'checklist', items: [
          'Passport or Cartão de Cidadão / cartão de residência, if available',
          'NIF — often requested for payments and identification, although the key document is the passport/ID',
          'Certidão de nascimento: birth certificate or extract from the birth register',
          'Certificado de capacidade matrimonial, declaração de estado civil or declaração de não-impedimento — a document confirming that the person may enter into marriage',
          'If divorced: certidão de casamento com averbamento do divórcio or a court divorce judgment',
          'If a previous spouse has died: certidão de óbito',
          'Apostila de Haia for documents from countries that are parties to the Hague Convention',
          'Consular legalisation if the country does not use Apostila de Haia',
          'Official translation into Portuguese if the document is not in PT',
          'Details of 2 witnesses: names, documents, contacts; they attend the ceremony with a passport/ID'
        ] },
        { kind: 'paragraph', text: 'For citizens of some countries, the certificate of matrimonial capacity is issued by the consulate in Portugal. For other countries, the document must be obtained at home — from the civil registry office, civil registration authority, court or via an electronic register. The Conservatória looks not at the name of the document, but at its content: it must be clear that the applicant is not married and that there are no legal impediments.' },
        { kind: 'warning', text: 'A “single / unmarried” certificate without indication of the competent authority, without an apostille or without translation may be rejected. Before ordering the document, send a sample to the Conservatória or check the wording.' }
      ]
    },
    {
      id: 'timeline',
      title: 'Timings: what to do 30+ days in advance',
      content: [
        { kind: 'substeps', items: [
          { id: 's1-collect', title: '1. 2–3 months in advance: collect documents', content: [
            { kind: 'paragraph', text: 'Obtain recent birth and marital status documents. For foreign civil records, the Conservatória often expects a recent extract rather than an old laminated certificate from the family archive.' }
          ] },
          { id: 's2-apostille', title: '2. 1–2 months in advance: apostille and translation', content: [
            { kind: 'paragraph', text: 'Obtain an Apostila de Haia or consular legalisation. Then prepare a translation into Portuguese. It is better to use a translator whose signature can be notarised, or a translation through a consulate/recognised translator.' }
          ] },
          { id: 's3-apply', title: '3. At least 30 days in advance: Conservatória', content: [
            { kind: 'paragraph', text: 'Submit the pedido de casamento / processo preliminar and declaração de não-impedimento. The officer checks the documents, identity, marital status and absence of impedimentos matrimoniais.' }
          ] },
          { id: 's4-date', title: '4. After approval: date and ceremony format', content: [
            { kind: 'paragraph', text: 'You choose a ceremony at the Conservatória or off-site — for example, at a quinta, hotel, garden or private location. For an off-site ceremony, an available conservador/oficial, address, time and extra payment under the IRN table are required. The notário does not conduct the ceremony itself.' }
          ] },
          { id: 's5-ceremony', title: '5. On the wedding day: documents and witnesses', content: [
            { kind: 'paragraph', text: 'Both future spouses attend with the original documents. Witnesses bring a passport, Cartão de Cidadão or cartão de residência. If one of the spouses does not understand Portuguese, arrange an interpreter in advance.' }
          ] }
        ] }
      ]
    },
    {
      id: 'ceremony-and-property',
      title: 'Ceremony, surname and property regime',
      content: [
        { kind: 'paragraph', text: 'During the process, you indicate which property regime will apply. If no prenuptial agreement is chosen, the default is usually comunhão de adquiridos — joint ownership of property acquired after the marriage, with exceptions for personal property.' },
        { kind: 'checklist', items: [
          'Comunhão de adquiridos — the standard regime without a prenuptial agreement',
          'Separação de bens — separate property regime, usually requiring a convenção antenupcial',
          'Comunhão geral — general community property regime, not available in all family situations',
          'Convenção antenupcial is drawn up before the marriage by a Notário or at the Conservatória',
          'The surname does not change automatically after marriage: the declaration on name choice is made as part of the registration',
          'If you have active visas, residence permits, bank accounts and tax profiles, consider in advance whether to change your surname',
          'After registration, you can request a certidão de casamento for AIMA, Finanças, a bank, SNS or nationality procedures'
        ] },
        { kind: 'warning', text: 'Marriage to a Portuguese citizen does not by itself grant automatic nationality or a residence permit. Nationality through marriage is a separate procedure at IRN, and a family residence permit is processed through AIMA under its own rules.' }
      ]
    },
    {
      id: 'after-marriage',
      title: 'After registration: what to update',
      content: [
        { kind: 'paragraph', text: 'After the ceremony, the entry is made in the registo civil. If the marriage was concluded in Portugal, the Portuguese certidão de casamento is usually available through IRN. For use abroad, an international form, apostille or translation may be required.' },
        { kind: 'checklist', items: [
          'Request a certidão de casamento from IRN if a paper document is needed',
          'Notify Finanças if your marital status changes for IRS',
          'Update details with your bank and insurer if your surname or status changes',
          'Notify your employer if changes are needed in payroll or family benefits',
          'Check whether the marriage must be registered in the country of citizenship',
          'For a residence permit on the basis of family reunification, prepare the certidão de casamento for AIMA',
          'For future nationality, keep all versions of documents and proof of joint life'
        ] },
        { kind: 'warning', text: 'If the document is needed outside Portugal, an ordinary certidão de casamento in PT may be insufficient. Check the requirements of the receiving country: multilingual extract, Apostila de Haia or certified translation.' }
      ]
    }
  ],
  costs: [
    { label: 'Processo + registo de casamento at the Conservatória (IRN)', amountEURMin: 120, amountEURMax: 160, note: 'Indicative amount for a standard ceremony under the Regulamento Emolumentar dos Registos e do Notariado; confirm the final amount when booking with IRN.' },
    { label: 'Off-site ceremony outside the Conservatória', amountEURMin: 300, amountEURMax: 600, note: 'Surcharge under the IRN table; depends on the day of the week, time and distance; check the exact amount with the specific Conservatória.' },
    { label: 'Convenção antenupcial', amountEURMin: 100, amountEURMax: 250, note: 'If a prenuptial agreement or non-standard property regime is needed; the price depends on the Conservatória/Notário and the content.' },
    { label: 'Translation and notarisation', amountEURMin: 30, amountEURMax: 120, note: 'Per document; depends on the language, urgency and translator.' },
    { label: 'Apostila de Haia abroad', amountEURMin: 10, amountEURMax: 80, note: 'Not a Portuguese fee; depends on the country where the document is issued.' }
  ],
  sources: [
    {
      title: 'Justiça.gov.pt — Marriage: how to start the process and which documents are required',
      url: 'https://justica.gov.pt/Servicos/Iniciar-processo-de-casamento',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'IRN — Registo Civil and marriage services',
      url: 'https://irn.justica.gov.pt/Servicos/Cidadao/Casamento',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'IRN — Civil registration fee table',
      url: 'https://irn.justica.gov.pt/Custos-dos-servicos',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}
