export default {
  editorialVoice: 'hackportugal',
  id: 'crc-certificado-criminal',
  categoryId: 'documents_fiscal',
  title: 'CRC — criminal record certificate in Portugal (Certidão de Registo Criminal)',
  tldr: 'Certidão de Registo Criminal — the Portuguese criminal record certificate. It is needed for AIMA, some jobs, licences, volunteering, residence permit and citizenship; for foreign authorities, an apostila is usually required. In 2026, ordering online via Registo Criminal costs €5, is available with Cartão de Cidadão or Chave Móvel Digital, the certificate is checked by code and is usually valid for 3 months. If you live outside Portugal, a separate form for residente no estrangeiro is used.',
  tags: ['crc', 'criminal-record', 'aima', 'apostila'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'What CRC is and when it is requested',
      content: [
        { kind: 'paragraph', text: 'Certidão de Registo Criminal, or CRC, is an official certificate from the Portuguese criminal records register. It shows whether there are records that may be disclosed for a specific purpose: work, licence, adoption, AIMA, citizenship, work with children and so on.' },
        { kind: 'paragraph', text: 'In Portugal, the certificate is not a universal document “for all purposes”. When ordering, you choose the purpose, and the content of the certificate may depend on that purpose. For an employer, AIMA or a foreign authority, it is better to clarify the wording of the purpose in advance.' },
        { kind: 'checklist', items: [
          'AIMA: often required for an initial residence permit, change of status or certain procedures; sometimes it is enough to authorise AIMA to request the data directly',
          'Work: mandatory for professions involving children, security, financial risks, public procurement and licences',
          'Naturalisation: IRN usually checks the Portuguese CRC itself, but certificates from other countries of residence may be needed',
          'Visas and foreign procedures: a Portuguese CRC is often requested with apostila',
          'Validity: access to the online certificate usually lasts 3 months from the date of issue',
          'Cost in 2026: €5 per individual certificate'
        ] }
      ]
    },
    {
      id: 'online-request',
      title: 'How to order online for €5 💻',
      content: [
        { kind: 'paragraph', text: 'The fastest method is the Registo Criminal portal. Online ordering is available to those who have Cartão de Cidadão or Chave Móvel Digital (CMD). After payment, you do not receive a PDF “with a stamp”, but a digital certificate with an access code; the receiving party checks it on the official website.' },
        { kind: 'checklist', items: [
          'Go to registocriminal.justica.gov.pt',
          'Choose pedido de certificado de registo criminal de pessoas singulares',
          'Log in using Cartão de Cidadão or Chave Móvel Digital',
          'Choose the purpose of issue: emprego, AIMA, nacionalidade, licenciamento or another suitable option',
          'Check your personal details: name, date of birth, nationality, document number',
          'Pay €5 by bank card, Multibanco or another method available on the portal',
          'Save the access code and date of issue',
          'Give the employer or authority the certificate verification code, not a screenshot'
        ] },
        { kind: 'warning', text: 'If the authority asks for an “original”, clarify whether it accepts a digital CRC with a code. In Portugal this is a normal official format, but foreign authorities often require a paper document with apostila.' }
      ]
    },
    {
      id: 'in-person-and-foreign-resident',
      title: 'If you do not have CMD or you are outside Portugal',
      content: [
        { kind: 'paragraph', text: 'Without CMD or Cartão de Cidadão, a CRC can be requested in person at a balcão dos Serviços de Identificação Criminal, Lojas de Cidadão and some Espaços Registos. You need an identity document and the details for the chosen purpose. The cost is the same — €5.' },
        { kind: 'paragraph', text: 'If you live outside Portugal, a separate requerimento for residente no estrangeiro is used. Usually, a completed form, a copy of an identity document and proof of payment are required. The current form and submission address should be taken from the official Registo Criminal portal, because submission channels may change.' },
        { kind: 'checklist', items: [
          'Passport or Cartão de Cidadão / Título de Residência',
          'NIF is not the main mandatory document, but it may be useful for payment or identification',
          'The exact purpose for issuing the certificate',
          'Email address to receive the access code',
          'For a representative: procuração or autorização, if another person collects the certificate',
          'For a request from abroad: residente no estrangeiro form with signature',
          'If the document is needed by a foreign authority: clarify in advance whether a paper copy and apostila are required'
        ] }
      ]
    },
    {
      id: 'apostille',
      title: 'Apostila: when a CRC is needed abroad',
      content: [
        { kind: 'paragraph', text: 'To use a Portuguese CRC in another country, an Apostila da Convenção da Haia is usually needed. This confirms the authenticity of the signature and the authority of the Portuguese body; it does not translate the content of the certificate.' },
        { kind: 'paragraph', text: 'Apostila in Portugal is issued through the Procuradoria-Geral da República and authorised units. The typical fee is €10.20 per document, but before submitting, check the current tariff and format, because there may be separate requirements for digital documents.' },
        { kind: 'checklist', items: [
          'Obtain a CRC with the correct purpose',
          'Clarify with the foreign authority: whether a paper original is needed or whether digital verification is accepted',
          'Order apostila from the PGR or an authorised serviço',
          'If the destination country does not accept Portuguese, arrange a sworn or certified translation after the apostila, or according to the requirements of the destination country',
          'Check the timeframe: many authorities accept certificates no older than 90 days',
          'For AIMA inside Portugal, apostila is not needed'
        ] },
        { kind: 'warning', text: 'Apostila does not fix an incorrectly chosen CRC purpose. If the certificate was ordered “for work” and the authority requires it “for an immigration procedure”, you may be asked for a new €5 certificate.' }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Common mistakes and how to avoid them',
      content: [
        { kind: 'checklist', items: [
          'Ordering the CRC too early: after 3 months, the code may no longer be accepted',
          'Giving an employer a PDF screenshot instead of the official verification code',
          'Choosing the wrong finalidade and receiving a refusal',
          'Thinking that a Portuguese CRC replaces certificates from Russia, Ukraine, Brazil or other countries of residence — it does not',
          'For citizenship, forgetting that certificates may be required from countries where the applicant lived after the age of 16',
          'Not obtaining apostila for a foreign authority',
          'Translating before apostila, even though the receiving country asked for the apostilled document to be translated',
          'Trying to order online without CMD or Cartão de Cidadão — in that case, an in-person channel or a form for residente no estrangeiro is needed'
        ] },
        { kind: 'paragraph', text: 'Practical order: first ask the receiving authority for the exact purpose, age limit and whether apostila is needed; then order the CRC; then arrange apostila and translation if the document is going outside Portugal.' }
      ]
    }
  ],
  costs: [
    { label: 'Certidão de Registo Criminal for an individual', amountEUR: 5, note: 'Online or in person; standard price in 2026' },
    { label: 'Apostila por documento', amountEUR: 10.2, note: 'Indicative PGR fee; check the tariff before submitting' }
  ],
  sources: [
    {
      title: 'Registo Criminal — official CRC ordering and verification portal',
      url: 'https://registocriminal.justica.gov.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'gov.pt — request a certificado de registo criminal de pessoas singulares',
      url: 'https://www.gov.pt/servicos/pedir-o-certificado-de-registo-criminal-de-pessoas-singulares',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Procuradoria-Geral da República — Apostila da Convenção da Haia',
      url: 'https://www.ministeriopublico.pt/perguntas-frequentes/servico-apostilas',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
