export default {
  editorialVoice: 'hackportugal',
  id: 'testamento-publico',
  categoryId: 'documents_fiscal',
  title: 'Will through a notário and the Registo Central de Testamentos',
  tldr: 'In Portugal, a public will is made before a notário: the document is drawn up and kept in the notarial system, and information about it is sent to the Registo Central de Testamentos at IRN. The reference state fee for a will is €159; private notários may have additional costs. For expats this is especially important when assets are spread across different countries: under EU Regulation 650/2012, you can expressly choose the law of your country of nationality; otherwise, the law of the last habitual residence usually applies.',
  tags: ['will', 'inheritance', 'notário', 'irn'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'when-needed',
      title: 'When an expat needs a Portuguese will',
      content: [
        { kind: 'paragraph', text: 'Testamento público is a will that a notário draws up in notarial form. It does not “transfer property now”; it only takes effect after death. While you are alive, it can be revoked or replaced.' },
        { kind: 'checklist', items: [
          'You have a flat, house, bank accounts, company shares or a car in Portugal.',
          'You live in Portugal, but your assets and heirs are in different countries.',
          'You want to appoint specific heirs, legatários or an executor of the will — cabeça de casal / testamenteiro.',
          'You want to expressly choose the law of your country of nationality under EU Regulation 650/2012, rather than rely on the law of your last habitual residence.',
          'You have children from different marriages, an unmarried partner, a civil partnership, a blended family or heirs in conflict.',
          'You want to leave specific items to specific people: a flat, a share, an account, a collection, crypto access, family valuables.',
          'There is already an old will in another country, but it does not cover Portuguese assets or conflicts with your move.'
        ] },
        { kind: 'warning', text: 'A Portuguese will does not automatically revoke wills in another country unless this is stated expressly. Poor wording such as “I revoke all previous wills” can accidentally wipe out estate planning for assets outside Portugal. For a cross-border estate, it is better to align the wording with a lawyer in both jurisdictions.' }
      ]
    },
    {
      id: 'law-choice',
      title: 'Succession law: Portugal or the country of nationality',
      content: [
        { kind: 'paragraph', text: 'For estates in the EU, Regulamento (UE) 650/2012 applies. The basic rule: the law of the country where the person had habitual residence at the time of death applies. If you genuinely lived in Portugal, Portuguese law may become the main law even for part of your foreign assets.' },
        { kind: 'paragraph', text: 'In a will, you can make a professio juris — choose the law of your country of nationality.\n\nFor example, a citizen of the Russian Federation, Ukraine, the United Kingdom or the United States living in Portugal may state that the law of their nationality applies to the succession. If there are several nationalities, it is usually possible to choose the law of one of them.' },
        { kind: 'checklist', items: [
          'Check whether your country has special rules on real estate abroad.',
          'Check whether your country recognises a choice of law under EU 650/2012 or has its own conflict-of-law rules.',
          'If you want to choose the law of your nationality, the wording must be explicit, not “by default”.',
          'If you choose nothing, after several years of living in Portugal the estate will often be analysed under Portuguese succession law.',
          'Portuguese law protects herdeiros legitimários: a spouse, descendants and ascendants have a forced share.',
          'A will cannot freely deprive forced heirs of their legítima if Portuguese law applies.',
          'For taxes, the choice of succession law is not the same as choosing the tax country: Imposto do Selo and foreign taxes are checked separately.'
        ] },
        { kind: 'warning', text: 'Portugal does not charge a “classic inheritance tax” between spouses, children, grandchildren, parents and grandparents — for them, an exemption from 10% Imposto do Selo on gratuitous transfers applies. For other heirs/legatees, 10% Imposto do Selo usually applies. Separately for real estate: when the inheritance is formalised, Imposto do Selo 0.8% applies on acquisition of immovable property (verba 1.1 da Tabela Geral do Imposto do Selo) + IRN registration costs. These are not “just registration costs”. A will resolves the issue of recipients, but does not remove the tax check.' }
      ]
    },
    {
      id: 'prepare-documents',
      title: 'What to prepare before visiting a notário',
      content: [
        { kind: 'paragraph', text: 'You can book with a private notário or with notarial services available through justiça.gov.pt. For complex assets, it is better first to prepare a draft with an advogado/solicitador, and then go to the notário for the notarial formalisation.' },
        { kind: 'checklist', items: [
          'Passport or Cartão de Cidadão / cartão de residência.',
          'NIF — needed for accurate identification in Portuguese systems.',
          'Details of heirs: full name, date of birth, address, NIF if available, degree of relationship.',
          'List of Portuguese assets: imóveis with caderneta predial and certidão permanente, bank accounts, shares, cars.',
          'List of foreign assets — at least by country and type of property.',
          'Marriage information: regime de bens, date of marriage, prenuptial agreement, divorces, children from different relationships.',
          'Decision: whether you want to choose the law of your nationality under Regulamento (UE) 650/2012.',
          'An interpreter, if you do not understand Portuguese well enough for a legal text.',
          'Contacts of the person who will be able to find the documents after death: relative, advogado, testamenteiro.'
        ] },
        { kind: 'warning', text: 'The notário must make sure that the testator understands the meaning of the document and is acting voluntarily. If there are doubts due to language, age, illness or family pressure, the notário may request an interpreter, medical confirmation of the capacity to understand the act, or refuse to carry out the act.' }
      ]
    },
    {
      id: 'notary-process',
      title: 'How a testamento público is formalised',
      content: [
        { kind: 'paragraph', text: 'Under the Código do Notariado, 2 witnesses are mandatory for a testamento público (testemunhas instrumentárias), who are present during the formalisation and sign the act together with the testator and the notary. Witnesses cannot be heirs or persons with a conflict of interest.\n\nIn practice, the process looks like this: you explain your wishes, the notário prepares the text, reads it aloud in the presence of the witnesses, clarifies the wording, and then the document is signed by the testator, the witnesses and the notary. The public will remains in the notarial archive; the testator is usually issued confirmation or a certidão on request.' },
        { kind: 'checklist', items: [
          'Book with a notário and clarify the cost, language, arrangement of 2 witnesses (if you do not have any — the notary often helps).',
          'Provide the documents and a draft distribution of assets.',
          'Ask for a clause of choice of law to be included separately if this is needed for a cross-border inheritance.',
          'Check that names, dates of birth, NIF, addresses and property descriptions are written without errors.',
          'Make sure the wording does not accidentally revoke foreign wills if you have several.',
          'If the testator does not understand Portuguese, an interpreter is mandatory; if they cannot sign (illness, illiteracy), a rogo signatory is present + additional witnesses.',
          'Sign the document only after it has been fully read and understood.',
          'Keep the notário’s contact details and the date of the will in a safe place.',
          'Do not keep the only copy in a safe that heirs will not be able to access after death.'
        ] },
        { kind: 'paragraph', text: 'The reference cost of the “Testamento” service on justiça.gov.pt is €159. Private notários may charge additional amounts for consultation, urgency, translation, travel, certidões and preparation of related documents.' }
      ]
    },
    {
      id: 'rct',
      title: 'Registo Central de Testamentos: what is recorded there',
      content: [
        { kind: 'paragraph', text: 'The Registo Central de Testamentos, RCT, is maintained by IRN. It is the central register of information about wills and their revocation. It is needed so that after death, heirs and notaries can find out whether a will exists, where it was made and which one is the latest.' },
        { kind: 'checklist', items: [
          'The RCT records information about the will, not the full text for public viewing.',
          'The register helps locate the last valid will, even if the family does not know which notário is keeping it.',
          'While the testator is alive, the information is protected: access is usually available to the testator themselves or their representative.',
          'After death, interested parties request a certidão on the existence of a will, usually with proof of death.',
          'If there were several wills, the legally important one is the last valid expression of wishes, provided it is not defective.',
          'A revocation or new will must also be reflected in the system.',
          'The RCT does not replace land registration, banking procedures and the processo de habilitação de herdeiros after death.'
        ] },
        { kind: 'warning', text: 'Do not rely on relatives “somehow finding” the will. Tell a trusted person: country, name of the notário, date of the act, where the copy is kept, advogado contacts. You do not have to disclose the contents.' }
      ]
    },
    {
      id: 'change-revoke',
      title: 'How to change or revoke a will',
      content: [
        { kind: 'paragraph', text: 'A will in Portugal is revogável: it can be revoked in full, individual clauses can be changed, or a new one can be made. Usually the cleanest method is to make a new testamento público with a direct sentence stating which previous provisions are revoked and which remain.' },
        { kind: 'checklist', items: [
          'Review the will after marriage, divorce, the birth of children, the death of an heir or the purchase of real estate.',
          'Check the will after a change of tax residence or a move from/to Portugal.',
          'Do not amend the notarial text by hand — this creates a risk of dispute.',
          'To revoke it, go to a notário and formalise a revogação or a new will.',
          'If there are wills in other countries, coordinate the revocation with local lawyers.',
          'Keep a list of versions: date, notário, country, what the document covers.',
          'Update instructions for access to digital assets, but do not put passwords directly into the public will.'
        ] },
        { kind: 'warning', text: 'After death, it is no longer possible to fix an unclear will: the heirs will argue in the Conservatória or in court. If the assets are significant or several countries are involved, saving money on legal advice is often more expensive than the will itself.' }
      ]
    }
  ],
  costs: [
    { label: 'Formalising a testamento with a notário', amountEUR: 159, note: 'Reference for the Testamento service on justiça.gov.pt; with private notários, clarify additional costs in advance.' },
    { label: 'Interpreter into Portuguese', amountEURMin: 50, amountEURMax: 150, note: 'Usually paid separately; depends on the city, language and length of the visit.' },
    { label: 'Legal advice on cross-border inheritance', amountEURMin: 150, amountEURMax: 500, note: 'Not mandatory for a simple will, but sensible where there are assets in several countries or forced heirs.' }
  ],
  sources: [
    { title: 'IRN: Registo Central de Testamentos', url: 'https://www.sit.irn.mj.pt/portal/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Justiça.gov.pt: Testamento service', url: 'https://justica.gov.pt/Servicos/Testamento', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portuguese Civil Code: general rules on succession and wills', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1966-34509075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Regulamento (UE) n.º 650/2012 on cross-border successions', url: 'https://eur-lex.europa.eu/legal-content/PT/TXT/?uri=CELEX:32012R0650', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}
