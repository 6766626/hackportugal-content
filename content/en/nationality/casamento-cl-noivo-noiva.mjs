export default {
  editorialVoice: 'hackportugal',
  id: 'casamento-cl-noivo-noiva',
  categoryId: 'nationality',
  title: 'Casamento Civil: steps and documents for foreigners',
  tldr: 'Casamento Civil in Portugal is arranged through a Conservatória do Registo Civil or a Notário. Foreigners, whether residents or non-residents, follow the same process: at least 30 days in advance they submit a declaração de não-impedimento / processo preliminar, passports and certificates of marital status. Foreign documents need an apostille/legalisation and a translation into PT. A basic ceremony is about €140; an off-site location is an additional ~€450. Usually 2 witnesses with ID are required.',
  tags: ['civil marriage', 'registry office', 'irn', 'documents'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'What is Casamento Civil in Portugal',
      content: [
        { kind: 'paragraph', text: 'Casamento Civil is the official civil marriage, registered at a Conservatória do Registo Civil, via IRN, or before a Notário with authority to conduct civil marriages. A religious ceremony by itself does not replace civil registration unless it is carried out in the form prescribed by law.' },
        { kind: 'paragraph', text: 'Foreigners follow the same process as Portuguese citizens: preliminary verification of matrimonial impediments, submission of documents, setting a date, the ceremony, and entry of the record in the registo civil.' },
        { kind: 'checklist', items: [
          'A residence permit in Portugal is not required for the act of marrying itself',
          'Valid identity documents for both intended spouses are required',
          'Birth and marital status documents from the country of nationality are required',
          'Documents not in Portuguese usually require an official translation',
          'Foreign documents usually must bear an Apostila de Haia (Hague Apostille) or consular legalisation',
          'It is best to start the process at least 30 days before the ceremony date',
          'After approval, do not delay: documents and the decision of the Conservatória have a validity period'
        ] }
      ]
    },
    {
      id: 'where-to-apply',
      title: 'Where to submit the application',
      content: [
        { kind: 'paragraph', text: 'You can apply at any Conservatória do Registo Civil, not necessarily according to your address of residence. You can also use IRN online services if applicants have access to Portuguese digital identification, or contact a Notário if they provide the casamento civil service.' },
        { kind: 'checklist', items: [
          'Conservatória do Registo Civil — the standard route via IRN',
          'Balcão do IRN in a Loja de Cidadão — if registo civil services are available there',
          'Notário — may be more convenient for a private ceremony, but confirm authority and cost',
          'Online application is not available for all foreigners: in many cases in-person submission is required due to document checks',
          'For a couple where one person does not speak Portuguese, check in advance whether an interpreter is required at the ceremony',
          'If one of the intended spouses cannot attend in person, ask the Conservatória about a procuração (power of attorney) with the necessary powers'
        ] },
        { kind: 'warning', text: 'Do not book the restaurant, flights or guests until the Conservatória confirms. The most common delay for foreigners is not the date at the Conservatória but reissuing the marital status certificate, apostille or translation.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documents for foreigners',
      content: [
        { kind: 'paragraph', text: 'The exact list depends on nationality, family history and the country issuing the documents. However, the basic set is almost always the same: identity, birth, absence of impediments to marry, and proof of termination of any previous marriage.' },
        { kind: 'checklist', items: [
          'Passport or Cartão de Cidadão / cartão de residência, if available',
          'NIF — often requested for payments and identification, although the key document is the passport/ID',
          'Certidão de nascimento: birth certificate or extract from the register of births',
          'Certificado de capacidade matrimonial, declaração de estado civil or declaração de não-impedimento — a document confirming that the person may marry',
          'If divorced: certidão de casamento com averbamento do divórcio or a court decision granting the divorce',
          'If a previous spouse has died: certidão de óbito',
          'Apostila de Haia for documents from countries that are parties to the Hague Convention',
          'Consular legalisation if the country does not use the Apostila de Haia',
          'Official translation into Portuguese if the document is not in PT',
          'Details of 2 witnesses: names, documents, contacts; they attend the ceremony with a passport/ID'
        ] },
        { kind: 'paragraph', text: 'For citizens of some countries, the certificate of matrimonial capacity is issued by the consulate in Portugal. For other countries, the document must be obtained at home — from the civil registry office, civil registration authority, court, or through an electronic register. The Conservatória looks not at the document\'s title but at its content: it must be clear that the applicant is not married and that there are no legal impediments.' },
        { kind: 'warning', text: 'A “single / unmarried” certificate without indication of the competent authority, without apostille or without translation may be refused. Before ordering the document, send a sample to the Conservatória or clarify the required wording.' }
      ]
    },
    {
      id: 'timeline',
      title: 'Timelines: what to do 30+ days in advance',
      content: [
        { kind: 'substeps', items: [
          { id: 's1-collect', title: '1. 2–3 months before: collect documents', content: [
            { kind: 'paragraph', text: 'Obtain recent documents for birth and marital status. For foreign civil status records, the Conservatória often expects a recent extract rather than an old laminated certificate from family archives.' }
          ] },
          { id: 's2-apostille', title: '2. 1–2 months before: apostille and translation', content: [
            { kind: 'paragraph', text: 'Get the Apostila de Haia or perform consular legalisation. Then prepare a translation into Portuguese. It is preferable to use a translator whose signature can be notarised, or a translation via a consulate/recognised translator.' }
          ] },
          { id: 's3-apply', title: '3. At least 30 days before: Conservatória', content: [
            { kind: 'paragraph', text: 'Submit the pedido de casamento / processo preliminar and the declaração de não-impedimento. A staff member verifies documents, identity, marital status and the absence of impedimentos matrimoniais.' }
          ] },
          { id: 's4-date', title: '4. After approval: date and ceremony format', content: [
            { kind: 'paragraph', text: 'You choose a ceremony at the Conservatória/Notário or outside — for example, at a quinta, hotel, garden or private location. For an off-site ceremony you need an available staff member, address, time and an additional fee.' }
          ] },
          { id: 's5-ceremony', title: '5. On the wedding day: documents and witnesses', content: [
            { kind: 'paragraph', text: 'Both intended spouses attend with original documents. Witnesses bring a passport, Cartão de Cidadão or cartão de residência. If one spouse does not understand Portuguese, arrange an interpreter in advance.' }
          ] }
        ] }
      ]
    },
    {
      id: 'ceremony-and-property',
      title: 'Ceremony, surname and matrimonial property regime',
      content: [
        { kind: 'paragraph', text: 'During the process you indicate which property regime will apply. If a prenuptial agreement is not chosen, by default comunhão de adquiridos is usually applied — joint ownership of assets acquired after the marriage, with exceptions for personal property.' },
        { kind: 'checklist', items: [
          'Comunhão de adquiridos — the standard regime without a prenuptial agreement',
          'Separação de bens — separate property regime, usually requires a convenção antenupcial',
          'Comunhão geral — universal community regime, not available in all family situations',
          'Convenção antenupcial is executed before marriage at a Notário or at the Conservatória',
          'The surname after marriage does not change automatically: a declaration of name choice is made within the registration',
          'If you have active visas, a residence permit, bank accounts and tax profiles, consider in advance whether to change your surname',
          'After registration you can request a certidão de casamento for AIMA, Finanças, the bank, SNS or citizenship procedures'
        ] },
        { kind: 'warning', text: 'Marriage to a Portuguese citizen by itself does not grant automatic citizenship or a residence permit. Citizenship through marriage has a separate procedure at IRN, and the family residence permit is processed via AIMA under its own rules.' }
      ]
    },
    {
      id: 'after-marriage',
      title: 'After registration: what to update',
      content: [
        { kind: 'paragraph', text: 'After the ceremony, the record is entered in the registo civil. If the marriage is concluded in Portugal, the Portuguese certidão de casamento is usually available through IRN. For use abroad, an international form, apostille or translation may be required.' },
        { kind: 'checklist', items: [
          'Request a certidão de casamento from IRN if you need a paper document',
          'Notify Finanças if your marital status for IRS changes',
          'Update details with the bank and insurer if your surname or status changes',
          'Inform your employer if payroll or family benefits need updating',
          'Check whether you must register the marriage in your country of nationality',
          'For a residence permit through family reunification, prepare the certidão de casamento for AIMA',
          'For future citizenship, keep all versions of documents and evidence of joint life'
        ] },
        { kind: 'warning', text: 'If a document is needed outside Portugal, a standard certidão de casamento in PT may be insufficient. Confirm the receiving country’s requirements: multilingual extract, Apostila de Haia or certified translation.' }
      ]
    }
  ],
  costs: [
    { label: 'Casamento Civil at a Conservatória or with a Notário', amountEUR: 140, note: 'Guide price for a standard ceremony and registration; confirm the final amount when booking with IRN/Notário.' },
    { label: 'Off-site ceremony outside the Conservatória', amountEUR: 450, note: 'Surcharge for the chosen location; may be added to the base cost and depends on time, place and staff availability.' },
    { label: 'Convenção antenupcial', amountEURMin: 100, amountEURMax: 250, note: 'If a prenuptial agreement or a non-standard property regime is needed; price depends on the Conservatória/Notário and the content.' },
    { label: 'Translation and notarial certification', amountEURMin: 30, amountEURMax: 120, note: 'Per document; depends on language, urgency and the translator.' },
    { label: 'Apostila de Haia abroad', amountEURMin: 10, amountEURMax: 80, note: 'Not a Portuguese fee; depends on the issuing country.' }
  ],
  sources: [
    {
      title: 'Justiça.gov.pt — Casamento: how to start the process and which documents are needed',
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
      title: 'IRN — Fee table for the civil registry',
      url: 'https://irn.justica.gov.pt/Custos-dos-servicos',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
