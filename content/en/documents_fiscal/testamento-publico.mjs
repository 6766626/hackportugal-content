export default {
  editorialVoice: 'hackportugal',
  id: 'testamento-publico',
  categoryId: 'documents_fiscal',
  title: 'Will through a notary and the Registo Central de Testamentos',
  tldr: 'In Portugal, a public will is made before a notary: the document is drafted and stored in the notarial system, and details about it are sent to the Registo Central de Testamentos at the IRN. The indicative state fee for a will is €159; private notaries may charge additional costs. This is especially important for expats with assets in different countries: under Regulation (EU) 650/2012 you can expressly choose the law of your country of nationality; otherwise, the law of the last habitual residence is usually applied.',
  tags: ['will', 'inheritance', 'notary', 'irn'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'when-needed',
      title: 'When an expat needs a Portuguese will',
      content: [
        { kind: 'paragraph', text: 'A testamento público is a will that a notary draws up in notarial form. It does not “transfer property now”; it only takes effect after death. While you are alive, you can revoke or replace it.' },
        { kind: 'checklist', items: [
          'You have a flat, house, bank accounts, company shares or a car in Portugal.',
          'You live in Portugal, but assets and heirs are in different countries.',
          'You want to name specific heirs, legatários or an executor — cabeça de casal / testamenteiro.',
          'You want to expressly choose the law of your nationality under Regulation (EU) 650/2012, rather than rely on the law of your last habitual residence.',
          'You have children from different marriages, an unmarried partner, a civil union, a blended family or contentious heirs.',
          'You want to leave specific items to specific people: a flat, a shareholding, an account, a collection, crypto access codes, family valuables.',
          'You already have an older will in another country, but it does not cover Portuguese assets or conflicts with your move.'
        ] },
        { kind: 'warning', text: 'A Portuguese will does not automatically revoke a will in another country unless this is stated explicitly. A poorly worded phrase such as “I revoke all previous wills” can accidentally wipe out planning for property outside Portugal. For a cross-border estate, it is better to align texts with a lawyer in both jurisdictions.' }
      ]
    },
    {
      id: 'law-choice',
      title: 'Which succession law applies: Portugal or your country of nationality',
      content: [
        { kind: 'paragraph', text: 'For estates in the EU, Regulation (EU) 650/2012 applies. The default rule: the law of the country where the person had their habitual residence at the time of death applies. If you actually lived in Portugal, Portuguese law can become the main law even for part of your overseas assets.' },
        { kind: 'paragraph', text: 'In a will you can make a professio juris — choose the law of your nationality. For example, a citizen of the Russian Federation, Ukraine, the United Kingdom or the United States living in Portugal can state that the law of their nationality applies to their succession. If you have multiple nationalities, you can usually choose the law of one of them.' },
        { kind: 'checklist', items: [
          'Check whether your country has special rules about immovable property abroad.',
          'Check whether your country recognises a choice of law under EU 650/2012 or has its own conflict-of-law rules.',
          'If you wish to choose the law of your nationality, the wording must be express, not “by default”.',
          'If you choose nothing, after several years living in Portugal the estate will often be analysed under Portuguese succession law.',
          'Portuguese law protects the herdeiros legitimários: a spouse, descendants and ascendants have a reserved share.',
          'You cannot freely disinherit the mandatory heirs from their legítima if Portuguese law applies.',
          'For tax, choosing the succession law is not the same as choosing the taxing country: Imposto do Selo and foreign taxes are assessed separately.'
        ] },
        { kind: 'warning', text: 'Portugal does not levy a “classic inheritance tax” between spouses, children, grandchildren, parents and grandparents, but an Imposto do Selo of 10% applies to certain transfers. For real estate there are also registration costs. A will determines recipients, but does not remove tax checks.' }
      ]
    },
    {
      id: 'prepare-documents',
      title: 'What to prepare before visiting a notary',
      content: [
        { kind: 'paragraph', text: 'You can book either a private notary or the notarial services available via justiça.gov.pt. For complex assets it is better to draft with an advogado/solicitador first, then go to a notary for the notarial act.' },
        { kind: 'checklist', items: [
          'Passport or Cartão de Cidadão / residence card.',
          'NIF — needed for precise identification in Portuguese systems.',
          'Heirs’ details: full name, date of birth, address, NIF if any, degree of kinship.',
          'List of Portuguese assets: imóveis with caderneta predial and certidão permanente, bank accounts, shareholdings, vehicles.',
          'List of overseas assets — at least by country and type of property.',
          'Marriage information: regime de bens, date of marriage, prenuptial agreement, divorces, children from different relationships.',
          'Decision: whether you wish to choose the law of your nationality under Regulation (EU) 650/2012.',
          'Interpreter if you do not understand Portuguese sufficiently for a legal text.',
          'Contact details of a person who will be able to find documents after death: a relative, advogado, testamenteiro.'
        ] },
        { kind: 'warning', text: 'A notary must be satisfied that the testator understands the document and is acting voluntarily. If there are doubts due to language, age, illness or family pressure, the notary may require an interpreter, medical confirmation of capacity to understand the act, or refuse to proceed.' }
      ]
    },
    {
      id: 'notary-process',
      title: 'How a testamento público is executed',
      content: [
        { kind: 'paragraph', text: 'In practice, the process is as follows: you explain your wishes, the notary prepares the text, reads it out, refines the wording, then the document is signed. The public will remains in the notarial archive; the testator is usually given a confirmation or a certidão on request.' },
        { kind: 'checklist', items: [
          'Book a notary and confirm the cost, language, and whether an interpreter and witnesses are needed.',
          'Provide the documents and a draft distribution of assets.',
          'Ask to include a clause of choice of law, if needed for a cross-border estate.',
          'Check that names, dates of birth, NIFs, addresses and asset descriptions are error-free.',
          'Ensure the wording does not accidentally revoke foreign wills if you have more than one.',
          'Sign only after a full read-through and understanding.',
          'Keep the notary’s contact details and the date of the will in a safe place.',
          'Do not store the only copy in a safe to which heirs will not be able to gain access after death.'
        ] },
        { kind: 'paragraph', text: 'The indicative price for the “Testamento” service on justiça.gov.pt is €159. Private notaries may add further amounts for advice, urgency, translation, travel, certidões and preparation of supporting documents.' }
      ]
    },
    {
      id: 'rct',
      title: 'Registo Central de Testamentos: what is recorded there',
      content: [
        { kind: 'paragraph', text: 'The Registo Central de Testamentos (RCT) is maintained by the IRN. It is a central register of information about wills and their revocation. It exists so that, after death, heirs and notaries can find out whether a will exists, where it was made, and which one is the latest.' },
        { kind: 'checklist', items: [
          'The RCT records information about a will, not the full text for public viewing.',
          'The register helps locate the last valid will even if the family does not know which notary holds it.',
          'While the testator is alive, the information is protected: access is usually limited to the testator or their representative.',
          'After death, interested parties request a certidão confirming the existence of a will, usually with proof of death.',
          'If there were several wills, the legally relevant one is the last valid expression of wishes, provided it is not defective.',
          'A revocation or new will must also be reflected in the system.',
          'The RCT does not replace property registration, bank procedures, or the processo de habilitação de herdeiros after death.'
        ] },
        { kind: 'warning', text: 'Do not assume relatives will “somehow find” the will. Tell a trusted person: the country, the notary’s name, the date of the act, where a copy is kept, and the advogado’s contact details. You do not need to disclose the contents.' }
      ]
    },
    {
      id: 'change-revoke',
      title: 'How to amend or revoke a will',
      content: [
        { kind: 'paragraph', text: 'A will in Portugal is revogável: you can revoke it entirely, amend specific clauses, or make a new one. Usually the cleanest way is to make a new testamento público with a clear sentence stating which previous provisions are revoked and which remain.' },
        { kind: 'checklist', items: [
          'Review your will after marriage, divorce, the birth of children, the death of a beneficiary, or purchasing real estate.',
          'Revisit the will after changing tax residency or moving from/to Portugal.',
          'Do not alter the notarial text by hand — this creates litigation risk.',
          'To revoke, go to a notary and execute a revogação or a new will.',
          'If there are wills in other countries, co-ordinate the revocation with local lawyers.',
          'Keep a list of versions: date, notary, country, what the document covers.',
          'Update instructions for access to digital assets, but do not insert passwords directly into a public will.'
        ] },
        { kind: 'warning', text: 'After death, an unclear will can no longer be fixed: heirs will argue in the Conservatória or in court. If the assets are significant or involve multiple countries, skimping on legal advice is often costlier than the will itself.' }
      ]
    }
  ],
  costs: [
    { label: 'Execution of a testamento before a notary', amountEUR: 159, note: 'Indicative “Testamento” service on justiça.gov.pt; with private notaries, confirm additional costs in advance.' },
    { label: 'Interpreter into Portuguese', amountEURMin: 50, amountEURMax: 150, note: 'Usually paid separately; depends on city, language and length of appointment.' },
    { label: 'Legal consultation on cross-border succession', amountEURMin: 150, amountEURMax: 500, note: 'Not required for a simple will, but sensible where there are assets in several countries or mandatory heirs.' }
  ],
  sources: [
    { title: 'IRN: Central Register of Wills (Registo Central de Testamentos)', url: 'https://www.sit.irn.mj.pt/portal/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Justiça.gov.pt: Testamento service', url: 'https://justica.gov.pt/Servicos/Testamento', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portuguese Civil Code: general rules on successions and wills', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1966-34509075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Regulation (EU) No 650/2012 on cross-border successions', url: 'https://eur-lex.europa.eu/legal-content/PT/TXT/?uri=CELEX:32012R0650', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
