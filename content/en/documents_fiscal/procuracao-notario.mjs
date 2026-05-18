export default {
  editorialVoice: 'hackportugal',
  id: 'procuracao-notario',
  categoryId: 'documents_fiscal',
  title: 'Procuração at a notário: power of attorney, special powers and apostille',
  tldr: 'Procuração is the Portuguese power of attorney for acting through a representative: buying/selling property, signing a contract, submitting documents, representing you at Finanças, AIMA, a bank or before family abroad. In 2026 it is made at a notário, advogado/solicitador or through serviços de registo; for use outside Portugal, a Hague Apostille is usually required. The cost at a private notário is usually €30–100 for the text/certification, a PGR apostille is around €10.20 per document, and translation is paid separately.',
  tags: ['procuração', 'notary', 'apostille', 'power of attorney'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'What a Procuração is and when it is needed',
      content: [
        { kind: 'paragraph', text: 'Procuração is a document by which you give another person powers to act on your behalf. In Portuguese law, the basis is Código Civil, art. 262 and following: the representative’s authority must arise from the law or from the will of the person represented.' },
        { kind: 'paragraph', text: 'For everyday actions, a simple written power of attorney may sometimes be enough, but expats almost always need a form with a certified signature or a notarial form: banks, property, Conservatória, Finanças, AIMA, inheritance, share deals, acts abroad for another country.' },
        { kind: 'checklist', items: [
          'Property: purchase, sale, promissory contract, escritura, filing with Registo Predial.',
          'AIMA: a representative can book appointments, submit some documents and receive notifications, but biometrics and personal attendance usually remain the applicant’s responsibility.',
          'Finanças: representation for NIF, IRS, IMI, IVA, recibos verdes, receiving notifications.',
          'Bank: opening/closing an account, requesting documents, transactions — the bank often requires its own wording or separate approval.',
          'Family matters: school, healthcare, children’s travel, management of relatives’ assets.',
          'Inheritance: habilitação de herdeiros, partilhas, tax and registration acts.',
          'Use abroad: an apostille is almost always required and often a translation into the language of the destination country.'
        ] }
      ]
    },
    {
      id: 'choose-type',
      title: 'Choose the type: general or special',
      content: [
        { kind: 'paragraph', text: 'The main mistake is making a “general one for everything” where an authority or bank wants precise powers. In Portugal it is safer not to write abstractly, but to list the actions, authorities, assets, amounts and time limits.' },
        { kind: 'substeps', items: [
          { id: 'general', title: 'General procuração', content: [
            { kind: 'paragraph', text: 'Suitable for administrative actions: receiving documents, submitting applications, representing you before Câmara Municipal, Junta de Freguesia, Finanças, Segurança Social, SNS, telecoms operators.' },
            { kind: 'warning', text: 'A “general” power of attorney does not always cover the sale of property, donation, mortgage, inheritance partition, banking instructions and high-risk acts. Special powers are usually needed for these.' }
          ] },
          { id: 'special', title: 'Special procuração', content: [
            { kind: 'paragraph', text: 'Needed when the representative carries out a specific legally significant act: sells a flat, buys a house, signs crédito habitação, represents you in an inheritance, opens/closes an account, receives money, signs a contract involving the transfer of rights.' },
            { kind: 'checklist', items: [
              'Full name, date of birth, nationality, passport/Cartão de Cidadão/residence permit of the grantor.',
              'NIF of the grantor and representative, if the act is connected with Portugal.',
              'Full details of the representative: name, document, address, NIF.',
              'Exact asset: address, artigo matricial, descrição predial, fração, if property is involved.',
              'Specific powers: to sign, pay, receive, register, submit declarations, correct errors.',
              'Power of substitution — only if genuinely needed.',
              'Validity period: for example, 6 or 12 months, if you do not want an open-ended document.',
              'Restrictions: maximum price, specific bank, specific transaction, ban on receiving cash.'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'prepare-documents',
      title: 'Prepare the details before visiting the notário',
      content: [
        { kind: 'paragraph', text: 'Private Cartórios Notariais in Portugal usually work by appointment. You can bring the text ready-made or order it from a notário, advogado or solicitador. If the power of attorney is for a bank, a property transaction or a foreign authority, first ask the receiving party for its wording requirements.' },
        { kind: 'checklist', items: [
          'Passport or Cartão de Cidadão / título de residência of the grantor.',
          'NIF of the grantor; for tax acts — also access or representation in Portal das Finanças separately.',
          'Representative’s details: full name as in the document, passport/CC/residence permit number, NIF, address.',
          'Draft powers in Portuguese.',
          'Details of the asset or matter: imóvel, AIMA/court case number, bank IBAN, IRS tax period, inheritance case number.',
          'Information on the validity period and the right of substabelecimento, if substitution is needed.',
          'If the grantor does not understand Portuguese — an interpreter or bilingual text; the notário must make sure the person understands what they are signing.',
          'For use abroad — clarification: whether an apostille, notarial translation, consular legalisation or a specific country format is required.'
        ] },
        { kind: 'warning', text: 'Do not sign a procuração with phrases such as “todos os poderes” and the right to sell/receive money if the purpose is only to submit documents. In Portugal, a power of attorney can give the representative a real ability to complete a transaction without your further consent.' }
      ]
    },
    {
      id: 'sign-and-certify',
      title: 'Signing: notário, advogado or serviço de registo',
      content: [
        { kind: 'paragraph', text: 'The classic route is a Cartório Notarial: the notário checks identity, legal capacity, the text and certifies the document. Under **Código Civil art. 262 nº 2** a procuração must have the same form as the transaction that the representative will carry out. For everyday administrative acts, a simple written form with **assinatura reconhecida presencialmente** (in-person signature certification) is often enough.\n\n**For property transactions (sale and purchase, mortgage, donation), a procuração requires a stricter form: instrumento público (escritura) at a notário or documento particular autenticado** — this is required by art. 875 Código Civil + Decreto-Lei 116/2008. Simple reconhecimento presencial de assinatura is NOT sufficient for property.' },
        { kind: 'paragraph', text: 'Advogados and solicitadores in Portugal can also certify signatures and documents within their powers. But the receiving organisation may expressly require a notário or a specific form — especially a bank, foreign authority, Conservatória or the counterparty to the transaction.' },
        { kind: 'checklist', items: [
          'Book an appointment at the cartório and send the text in advance by email.',
          'Bring the original identity document, not just a copy.',
          'Check the spelling of the name in Latin characters: as in the passport and NIF.',
          'Verify NIF, addresses, document numbers and property details.',
          'Ask for a validity period to be included if the power of attorney is temporary.',
          'Clarify whether one original via or several certified copies are needed.',
          'Check whether the recipient recognises an electronic procuração or requires a paper original.',
          'After signing, keep a scan, but remember: transactions often require the original.'
        ] }
      ]
    },
    {
      id: 'apostille-foreign-use',
      title: 'Apostille for use outside Portugal 🌍',
      content: [
        { kind: 'paragraph', text: 'If the procuração will be used in a country that is party to the Hague Apostille Convention, an apostille is placed on the Portuguese notarial document. In Portugal, apostilles are issued by the Procuradoria-Geral da República and authorised units. The apostille confirms the signature/capacity of the official, but it does not translate or “correct” the content of the power of attorney.' },
        { kind: 'checklist', items: [
          'First sign and certify the procuração in Portugal.',
          'Check that the destination country accepts the Hague Apostille; for some countries, consular legalisation is required.',
          'Submit the original or a notarially acceptable copy for apostille at the PGR/competent service.',
          'Ask the receiving party whether the translation is needed before the apostille or after the apostille.',
          'For Russia, Ukraine, Kazakhstan and most European countries, an apostille is usually the standard method of legalisation, but translation requirements differ.',
          'If the document is needed for Portugal, an apostille is not required.',
          'If the power of attorney was issued abroad for Portugal, it usually has to be apostilled in the country of issue and translated into Portuguese if necessary.'
        ] },
        { kind: 'warning', text: 'An apostille does not make a power of attorney universal. A foreign notary, bank or public authority may refuse it if the text lacks special powers, passport details are incorrect, there is no translation, or the power of attorney was not signed in the required form.' }
      ]
    },
    {
      id: 'revoke-and-control',
      title: 'Revocation and risk control',
      content: [
        { kind: 'paragraph', text: 'As a general rule, a procuração is revocable (revogável). BUT **procuração irrevogável** — issued also in the interest of the representative or a third party — is revoked only with the consent of the interested person, except in cases of justa causa (Código Civil art. 265 nº 3). This is critical for property transactions: “procuração irrevogável com poderes de alienar” effectively transfers control over the asset and may have tax consequences (IMT may apply). Never sign an irrevogável procuração for property without a full legal analysis.\n\nIn practice, revocation of an ordinary power of attorney is made in writing at a notário/advogado and the representative and all organisations where the power of attorney could have been used are notified: bank, Finanças, Conservatória, estate agency, the other party’s lawyer.' },
        { kind: 'checklist', items: [
          'Do not hand over the original unless necessary; for many tasks a certified copy is enough.',
          'Limit the validity period: 3–12 months for a one-off task.',
          'Do not include the right to receive money if the representative only has to sign or submit.',
          'For property, specify the particular imóvel and the price limit.',
          'For AIMA, do not promise that “the representative will do everything for you”: biometrics and personal attendance are usually mandatory.',
          'After the task is completed, ask for the original to be returned.',
          'When revoking, send notice by registered letter or email with confirmation, and notify critical authorities separately.',
          'If there is suspicion of abuse, contact an advogado urgently and block banking powers.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Procuração / certification at a private notário', amountEURMin: 30, amountEURMax: 100, note: 'Market guide for 2026; the price depends on the cartório, complexity of the text, number of copies and form of the act.' },
    { label: 'Reconhecimento presencial de assinatura', amountEURMin: 15, amountEURMax: 25, note: 'Usually cheaper than full notarial preparation of the text; not suitable for all cases.' },
    { label: 'Apostille in Portugal', amountEUR: 10.20, note: 'Guide price for one document through the competent services; urgency, postage and intermediaries are paid separately.' },
    { label: 'Translation when used abroad', amountEURMin: 20, amountEURMax: 50, note: 'Usually per page; with sworn/certified translation the price is higher and depends on the language.' }
  ],
  sources: [
    {
      title: 'Justiça.gov.pt: Procuração service',
      url: 'https://justica.gov.pt/Servicos/Procuracao',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DRE: consolidated Código Civil — voluntary representation and procuração',
      url: 'https://dre.pt/dre/legislacao-consolidada/-/lc/106480475/202604280000/diplomasModificantes',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Justiça.gov.pt: request an apostille',
      url: 'https://justica.gov.pt/Servicos/Pedir-uma-apostila',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Hague Conference: Apostille Convention — Portugal',
      url: 'https://www.hcch.net/en/instruments/conventions/status-table/?cid=41',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 365
}
